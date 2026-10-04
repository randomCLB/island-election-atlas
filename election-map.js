(function(root){
'use strict';
const U=typeof module!=='undefined'?require('./domain.js'):root.AtlasDomain;
function partyKey(p){return ['KMT','中國國民黨','中国国民党'].includes(p)?'KMT':['DPP','民主進步黨','民主进步党'].includes(p)?'DPP':p?'other':null;}
function color(p){return {KMT:'#2879dc',DPP:'#24a967',other:'#ffffff'}[partyKey(p)]||'#53636b';}
function pollsFor(d,city,now=new Date()){
 if(U.blackout(now))return [];
 return d.polls.filter(p=>p.city===city&&U.validatePoll(p)&&p.metric==='support'&&['probability','member-panel'].includes(p.sampling)&&new Date(p.end+'T23:59:59+08:00')<=now&&new Date(p.publishedAt+'T23:59:59+08:00')<=now&&now-new Date(p.end+'T23:59:59+08:00')<=90*86400000).sort((a,b)=>b.end.localeCompare(a.end)||a.id.localeCompare(b.id));
}
function assess(d,id,year=2026,now=new Date()){
 const e=d.elections.find(e=>e.city===id&&e.year===year),winner=e?.complete?e.rows.reduce((a,b)=>a[2]>=b[2]?a:b):null,baseline=year===2026||year===2022?d.mapBaseline?.[id]:null;
 const party=year===2026?baseline?.party:winner?.[1]||baseline?.party;
 const result={party,color:color(party),striped:false,polls:[],year,reason:year===2026?'暂无披露完整、90天内可用的支持度民调；不代表选情稳定。':party?'当届当选党籍。':'本届结果尚未收录。'};
 if(year!==2026)return result;
 if(U.blackout(now)){result.reason='停发期暂停民调与斜线提示，仅显示2022当选党籍基准。';return result;}
 result.polls=pollsFor(d,id,now);
 const base=partyKey(party);
 if(!base||!result.polls.length)return result;
 result.striped=result.polls.some(p=>{const values=p.results.map(r=>({...r,party:d.people.find(x=>x.id===r.person&&x.city===id)?.party})),same=values.filter(r=>partyKey(r.party)===base),other=values.filter(r=>r.party&&partyKey(r.party)!==base);if(!same.length||!other.length)return false;const incumbent=Math.max(...same.map(r=>r.value)),challenger=Math.max(...other.map(r=>r.value));return challenger>incumbent||(p.sampling==='probability'&&incumbent-challenger<=2*p.margin);});
 result.reason=result.striped?'出现选区可能翻转的竞争信号；斜线不是胜负预测。':'已收录调查未达到本站斜线判定条件；不代表必胜。';
 return result;
}
const api={partyKey,color,pollsFor,assess};if(typeof module!=='undefined')module.exports=api;else root.AtlasElectionMap=api;
})(typeof window==='undefined'?globalThis:window);
