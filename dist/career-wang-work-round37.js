(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='wang');
  if(!p)return;
  const item=p.workHistory.find(x=>x.sources?.includes('career-wang-company-register'));
  if(item){
    item.note='公司登记清册第7页列王肇民为代表人，登记营业项目包括住宅及大楼开发租售、投资兴建公共建设、工业厂房开发租售，并含广告与设计类项目。2026年参选报道仍称其为公司负责人。登记范围不证明他实际承作过这些项目，也不证明中间持续任职；不把建筑学历当成建筑师执照。';
    item.verification='公司设立原表与参选报道交叉对应；登记营业范围非工程实绩，完整任期未载';
  }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerWangWorkRound37={apply};}
})(typeof window==='undefined'?globalThis:window);
