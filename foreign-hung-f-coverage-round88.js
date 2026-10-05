(function(root){
'use strict';
const source='foreign-hung-f-country-search-round88';
function apply(d){
 d.sources[source]={
  title:'洪方隆公开档案定向检索：中国大陆／两岸与日本相关表态',
  url:'https://tw.linkedin.com/in/fang-lung-hung-b4a121121',
  date:'2026-10-05查阅',checkedAt:'2026-10-05',kind:'候选人LinkedIn公开索引与定向搜索记录',publisherId:'other',
  note:'复查LinkedIn公开索引，可见2026-09-17反诈骗贴文及2026-09-20信任产业合作贴文；后一贴文列美国、瑞士、新加坡与杜拜，未提中国大陆或日本。另以候选人姓名搭配“中国大陆／两岸／日本／日台”等词检索公开网页，未找到可归属的明确国别立场。LinkedIn页面直连返回999错误，索引不完整；未命中只表示截至查阅时未找到，不证明候选人从未发表相关言论。'
 };
 const p=d.people.find(x=>x.id==='hung-f');if(!p)return;
 for(const [region,label] of [['cn','两岸／中国大陆'],['jp','日本']]){
  p.evidenceCoverage=p.evidenceCoverage||{};
  p.evidenceCoverage[region]={
   checkedAt:'2026-10-05',
   scope:'已复核中央社登记简历、联合报具名登记采访及候选人LinkedIn公开索引；另以候选人姓名搭配中国大陆／两岸／日本／日台等词检索。LinkedIn页面无法直读，搜索索引可能不完整。',
   note:`暂未确认：截至查阅日，在所查登记简历、采访及可见公开贴文中，尚未找到洪方隆对${label}的明确表态；这不表示中立、赞成或反对。尚未查核：LinkedIn完整历史贴文、其他社群全量内容、直播／采访完整视频及政见会或辩论发言尚未逐项审阅。`,
   sources:['language-hung-f','roster','foreign-hung-f-udn-registration','foreign-hung-f-industrial-post',source]
  };
 }
}
if(typeof module!=='undefined')module.exports={apply,source};
else{apply(root.ATLAS);root.AtlasHungFChinaJapanCoverageRound88={apply};}
})(typeof window==='undefined'?globalThis:window);
