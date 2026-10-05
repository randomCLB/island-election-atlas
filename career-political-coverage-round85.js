(function(root){
'use strict';
function apply(d){
 for(const p of d.people){
  const rows=p.politicalHistory||[];
  const unresolved=rows.filter(x=>/待核|未核|未载|待补/.test([x.date,x.role,x.note,x.verification].join(' ')));
  const sources=[...new Set(rows.flatMap(x=>x.sources||[]))];
  const pending=unresolved.map(x=>`${x.role}（${x.date}）`).join('；');
  p.politicalResearch={
   checkedAt:'2026-10-05',
   label:pending?'暂未确认':'尚未查核',
   footer:'已查核范围只覆盖本档案列出的条目来源；未列项目尚未逐项搜索，不代表没有相关经历。',
   note:'已查：本档案已收录的政治任职与参选条目均附来源；来源性质及其限制见各条说明，参选不等于当选或任职。'+
    (pending?' 暂未确认：'+pending+'。':'')+
    ' 尚未查核：现有来源没有覆盖完整政治履历，其他党务任期与往届参选记录尚未逐项查找。',
   sources
  };
 }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerPoliticalCoverageRound85={apply};}
})(typeof window==='undefined'?globalThis:window);
