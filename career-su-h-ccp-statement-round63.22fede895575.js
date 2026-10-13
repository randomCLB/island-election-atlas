(function(root){
'use strict';
function apply(d){
 const p=d.people.find(x=>x.id==='su-h');if(!p)return;
 const source='language-su-h-bulletin';
 const record={
  region:'cn',
  date:'2024-01-13投票；公报发布日未载',
  topic:'将共产党列为其所称“人治政党”的政治对手（往届公报）',
  text:'苏辉湟在2024年立委候选人公报自填政见中称，要选赢台湾所有“人治政党”，并在括号中列出共产党。',
  limit:'这是2024年候选人自填政见中的政党竞争表述，不是对中国社会、两岸交流、国防或外交安排的完整说明；公报刊载本人填报内容，不代表选委会核验其政见或相关事实。',
  source,
  sources:[source]
 };
 if(!p.evidence.some(x=>x.region==='cn'&&x.source===source&&x.topic===record.topic))p.evidence.push(record);
 const item=d.sources[source];if(item){item.checkedAt='2026-10-05';item.note='公报中的个人经历与政见由候选人自填；只证明曾公开申报，不是中选会核验或任职机构证明。已复核第4选区公报第1页苏辉湟段落。';}
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerSuHCcpStatementRound63={apply};}
})(typeof window==='undefined'?globalThis:window);
