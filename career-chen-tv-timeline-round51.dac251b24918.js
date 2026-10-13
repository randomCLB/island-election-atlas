(function(root){
'use strict';
const sourceId='career-chen-tv-timeline-round51';
const source={title:'太报：陈亭妃媒体工作与初入政坛时间线',url:'https://www.taisounds.com/news/content/71/138324',date:'2024-07-28',checkedAt:'2026-10-04',kind:'人物回顾报道；履历二手叙述',publisherId:'taisounds',note:'作者胡家铭以叙述顺序记载：陈亭妃1996年文化大学戏剧系毕业后曾任地方电视台记者、主播，1998年参选并当选市议员。该文不是雇主人事资料；未证明实际入职／离职年月、频道名称，也不能据叙述顺序确定离职日。媒体倾向资料不足，按“倾向待核定”显示。'};
function apply(d){
 d.sources[sourceId]=source;
 const p=d.people.find(x=>x.id==='chen-t');
 const item=p?.workHistory.find(x=>x.sources?.includes('career-chen-anchor-2025'));
 if(item&&!item.sources.includes(sourceId)){
  item.date='1996年大学毕业后；1998年开始市议员任期（媒体回顾叙述顺序；电视台任职起讫未载）';
  item.note+=' 太报2024年人物回顾把这段工作放在1996年毕业与1998年初任市议员的叙述之间；这是时间线线索，不证明电视台实际任期或离职日期。';
  item.sources.push(sourceId);
  item.verification='立法院公开履历、本人回忆、同期报道与二手人物回顾；任期、频道及雇佣资料未核';
 }
}
if(typeof module!=='undefined')module.exports={apply,sourceId,source};
else{apply(root.ATLAS);root.AtlasCareerChenTVTimelineRound51={apply,sourceId,source};}
})(typeof window==='undefined'?globalThis:window);
