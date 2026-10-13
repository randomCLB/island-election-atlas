(function(root){
'use strict';
const sourceId='career-shen-us-city-governance-round57';
const source={
 [sourceId]:{
  title:'中央社：沈伯洋说明访美城市治理考察与台北应用',
  url:'https://www.cna.com.tw/news/aipl/202607300148.aspx',
  date:'2026-07-30',
  kind:'中央社记者会报道；候选人发言摘要',
  publisherId:'cna',
  publisherName:'中央通讯社',
  checkedAt:'2026-10-05',
  note:'中央社报道沈伯洋结束8天访美行程后，在记者会上说明城市治理考察及台北政策构想。内容为媒体对记者会发言的报道，不是逐字稿或美国方面的正式评估。'
 }
};
function apply(d){
 Object.assign(d.sources,source);
 const p=d.people.find(x=>x.id==='shen');if(!p)return;
 p.evidence=p.evidence||[];
 if(p.evidence.some(x=>x.sources?.includes(sourceId)))return;
 p.evidence.push({
  region:'us',
  date:'2026-07-30',
  topic:'美国城市治理经验与台北树木、交通安全',
  text:'沈伯洋在访美返台记者会上说，洛杉矶、华府的树荫计划及霍博肯的交通零死亡经验值得台北参考；他提出把保险公司纳入路树风险评估，并优先推动小学通学道路的交通零死亡示范。',
  limit:'这是候选人对美国地方治理经验及台北市政应用的公开表述，不等于他对美国外交、安全或全部政策的立场。细节来自中央社对记者会的报道摘要，尚无逐字稿和完整政策书面案。',
  source:sourceId,
  sources:[sourceId]
 });
}
if(typeof module!=='undefined')module.exports={apply,sourceId,source};
else{apply(root.ATLAS);root.AtlasCareerShenUsCityGovernanceRound57={apply};}
})(typeof window==='undefined'?globalThis:window);
