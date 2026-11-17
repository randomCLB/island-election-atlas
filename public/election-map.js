(function(root){
'use strict';
const U=typeof module!=='undefined'?require('./domain.js'):root.AtlasDomain;
function partyKey(p){return ['KMT','中國國民黨','中国国民党'].includes(p)?'KMT':['DPP','民主進步黨','民主进步党'].includes(p)?'DPP':p?'other':null;}
function color(p){return {KMT:'#2879dc',DPP:'#24a967',other:'#ffffff'}[partyKey(p)]||'#53636b';}
function pollsFor(d,city,now=new Date()){
 if(U.blackout(now))return [];
 return d.polls.filter(p=>p.city===city&&U.validatePoll(p)&&p.metric==='support'&&['probability','member-panel'].includes(p.sampling)&&new Date(p.end+'T23:59:59+08:00')<=now&&new Date(p.publishedAt+'T00:00:00+08:00')<=now&&now-new Date(p.end+'T23:59:59+08:00')<=90*86400000).sort((a,b)=>b.end.localeCompare(a.end)||a.id.localeCompare(b.id));
}
const observationLabels={competition:'竞争信号',disagreement:'民调分歧',insufficient:'资料不足','no-signal':'暂未见上述信号',historical:'历史结果',paused:'民调展示暂停'};
function mapEvidenceFor(d,city,now=new Date()){
 if(U.blackout(now))return [];
 const approved=new Set(pollsFor(d,city,now).map(p=>p.id));
 const candidates=new Set(d.people.filter(p=>p.city===city).map(p=>p.id));
 const records=[...d.polls,...(d.reportedPolls||[])].filter(p=>{
  if(p.city!==city||(!approved.has(p.id)&&p.mapUse!=='context'))return false;
  if(p.metric&&p.metric!=='support')return false;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(p.start||'')||!/^\d{4}-\d{2}-\d{2}$/.test(p.end||'')||!/^\d{4}-\d{2}-\d{2}$/.test(p.publishedAt||''))return false;
  const end=new Date(p.end+'T23:59:59+08:00'),published=new Date(p.publishedAt+'T00:00:00+08:00');
  return p.start<=p.end&&p.end<=p.publishedAt&&end<=now&&published<=now&&now-end<=90*86400000&&Number.isInteger(p.sampleSize)&&p.sampleSize>0&&
   p.results?.length>=2&&p.results.every(r=>candidates.has(r.person)&&Number.isFinite(r.value)&&r.value>=0&&r.value<=100)&&
   (p.sources||[p.source]).length>0&&(p.sources||[p.source]).every(id=>d.sources[id]);
 }).map(p=>({...p,mapTier:approved.has(p.id)&&p.sampling==='probability'?'probability':approved.has(p.id)?'member-panel':'context'}))
 .sort((a,b)=>b.end.localeCompare(a.end)||b.publishedAt.localeCompare(a.publishedAt)||a.id.localeCompare(b.id));
 if(!records.length)return [];
 const earliest=new Date(records[0].end+'T23:59:59+08:00')-30*86400000,series=new Set();
 return records.filter(p=>{const key=p.mapSeries||p.pollster;if(new Date(p.end+'T23:59:59+08:00')<earliest||series.has(key))return false;series.add(key);return true;});
}
function assess(d,id,year=2026,now=new Date()){
 const e=d.elections.find(e=>e.city===id&&e.year===year),winner=e?.complete?e.rows.reduce((a,b)=>a[2]>=b[2]?a:b):null,baseline=year===2026||year===2022?d.mapBaseline?.[id]:null;
 const party=year===2026?baseline?.party:winner?.[1]||baseline?.party;
 const result={party,color:color(party),striped:false,polls:[],evidence:[],year,state:year===2026?'insufficient':'historical',pattern:'none',competitive:false,disagreement:false,limited:false,label:year===2026?observationLabels.insufficient:observationLabels.historical,reason:year===2026?'暂无可核对的近期地图观察资料；不代表选情稳定。':party?'当届当选党籍。':'本届结果尚未收录。'};
 if(year!==2026)return result;
 if(U.blackout(now)){result.state='paused';result.label=observationLabels.paused;result.reason='停发期暂停民调与观察提示，仅显示2022当选党籍基准。';return result;}
 result.polls=pollsFor(d,id,now);
 result.evidence=mapEvidenceFor(d,id,now);
 result.pattern='insufficient';
 if(!result.evidence.length)return result;
 const base=partyKey(party);
 const ranked=result.evidence.map(p=>({poll:p,rows:[...p.results].sort((a,b)=>b.value-a.value)}));
 result.competitive=ranked.some(({poll,rows})=>{
  const gap=rows[0].value-rows[1].value;
  const same=poll.results.filter(r=>partyKey(d.people.find(p=>p.id===r.person)?.party)===base);
  const others=poll.results.filter(r=>{const key=partyKey(d.people.find(p=>p.id===r.person)?.party);return key&&key!==base;});
  const flip=base&&same.length&&others.length&&Math.max(...others.map(r=>r.value))>Math.max(...same.map(r=>r.value));
  return flip||gap<=5;
 });
 result.disagreement=ranked.some((a,i)=>ranked.slice(i+1).some(b=>{
  const first=a.rows[0],second=b.rows[0],inFirst=a.rows.find(r=>r.person===second.person),inSecond=b.rows.find(r=>r.person===first.person);
  return first.person!==second.person&&inFirst&&inSecond&&first.value>inFirst.value&&second.value>inSecond.value;
 }));
 result.limited=result.evidence.some(p=>p.mapTier!=='probability');
 result.state=result.disagreement?'disagreement':result.competitive?'competition':result.evidence.some(p=>p.mapTier==='probability')?'no-signal':'insufficient';
 result.label=observationLabels[result.state];result.pattern=result.state==='no-signal'?'none':result.state;result.striped=result.competitive;
 result.latestEnd=result.evidence[0].end;result.latestPublishedAt=result.evidence.reduce((date,p)=>p.publishedAt>date?p.publishedAt:date,'');
 result.reason={disagreement:'不同调查系列所列人选的领先方向不一致；调查日期、问法和样本可能不同，不合并为胜率。',competition:'已收录调查中出现跨党领先或所列前两名接近的竞争信号；标记不是胜负预测。',insufficient:'目前只有口径有限的资料，尚不足以作出明确判断；不表示选情稳定。','no-signal':'当前采用的调查未触发竞争或分歧规则；不代表稳胜。'}[result.state];
 return result;
}
const api={partyKey,color,pollsFor,mapEvidenceFor,assess};if(typeof module!=='undefined')module.exports=api;else root.AtlasElectionMap=api;
})(typeof window==='undefined'?globalThis:window);
