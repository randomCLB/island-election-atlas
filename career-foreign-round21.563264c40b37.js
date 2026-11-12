(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='hung-l');
  if(!p.evidenceCoverage)p.evidenceCoverage={};
  for(const region of ['cn','us','jp'])p.evidenceCoverage[region]={checkedAt:'2026-11-12',note:'暂未确认：已核对2024年立委选举公报及公开报道，未找到可明确归属于洪丽华的相关表态。公报中相邻候选人的中、美、日说法不能归给她；个人社群及全部视频尚未逐项查核。',sources:['foreign-hung-l-bulletin']};
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound21={apply};}
})(typeof window==='undefined'?globalThis:window);
