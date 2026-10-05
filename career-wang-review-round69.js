(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='wang');if(!p)return;
  p.workResearch={checkedAt:'2026-10-05',note:'暂未确认：已查本届登记履历、先得月建设公司设立原表、参选报道与商标登记转录。现有资料可确认公司代表人／负责人及商标登记节点；完整受雇经历、各段任职起止和实际工程项目仍未取得独立材料。登记营业范围及商标指定服务不等于实际承作。',sources:['roster','career-wang-company-register','career-wang-registration-report','career-wang-trademark-round41']};
}
if(typeof module!=='undefined')module.exports={apply};else{apply(root.ATLAS);root.AtlasWangCareerReviewRound69={apply};}
})(typeof window==='undefined'?globalThis:window);
