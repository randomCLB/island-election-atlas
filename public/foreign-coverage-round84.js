(function(root){
'use strict';
const labels={cn:'两岸／中国大陆',us:'美国',jp:'日本'};
function apply(d){
 for(const p of d.people){
  if(!p.evidenceCoverage)continue;
  for(const [region,review] of Object.entries(p.evidenceCoverage)){
   if(!labels[region]||(p.evidence||[]).some(x=>x.region===region))continue;
   const note='暂未确认：截至所列查核范围，尚未找到'+p.name+'对'+labels[region]+'的明确表态；不能据此推断中立、赞成或反对。尚未查核：个人社群完整历史贴文、全部直播与影片、未收录的公开发言及政见会／辩论记录尚未逐项审阅。';
   if(review.note!==note)review.note=note;
  }
 }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasForeignCoverageRound84={apply};}
})(typeof window==='undefined'?globalThis:window);
