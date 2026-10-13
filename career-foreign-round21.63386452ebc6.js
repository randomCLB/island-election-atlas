(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='hung-l');
  const source='foreign-hung-l-bulletin';
  if(!p.evidence.some(x=>x.region==='jp'&&x.source===source))p.evidence.push({
    region:'jp',
    date:'2024年立委公报；投票日2024-01-13',
    topic:'日本食品进口安全',
    text:'洪丽华在2024年候选人公报自填政见中写“拒食莱猪、日本核食，保障国民健康”。这是一项针对日本食品安全／进口议题的表述。',
    limit:'只记录她在旧届公报中的原句，不推断她对日本外交、经贸、安全或整体政策的立场。公报未说明“拒食”是个人消费选择还是进口管制，也未列产品范围、检测标准或执行办法。',
    source,
    sources:[source]
  });
  delete p.evidenceCoverage?.jp;
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound21={apply};}
})(typeof window==='undefined'?globalThis:window);
