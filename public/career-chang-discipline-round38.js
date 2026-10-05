(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='chang');
  if(!p)return;
  const id='career-chang-discipline-round38';
  d.sources[id]={title:'司法院律师惩戒委员会：张静律师惩戒决议主文公告',url:'https://www.judicial.gov.tw/tw/cp-1930-1508351-e7f4e-1.html',date:'2026-03-27',kind:'司法机关处分主文公告',publisherId:'official-tw',checkedAt:'2026-10-04',note:'公告列出112年度律懲字第20号、第32号及114年度律懲字第93号；仅载决议主文，没有在公告页说明各案具体理由。决议日2026-03-26，公告日2026-03-27。'};
  if(!p.controversies.some(x=>x.sources?.includes(id)))p.controversies.push({
    status:'司法院公告的惩戒主文',
    date:'2026-03-26决议；03-27公告',
    title:'律师惩戒委员会：停止执行业务2个月',
    claim:'公告将张静列为被付惩戒律师，并列出112年度律懲字第20号、第32号及114年度律懲字第93号。公告页没有说明三案各自的具体争点或行为。',
    outcome:'律师惩戒委员会决议停止张静执行职务2个月，并要求她自决议确定之日起1年内自费接受8小时律师伦理规范研习。',
    reply:'该公告没有刊载张静对这项决议的回应；本轮未找到与此决议直接对应的回应资料。',
    limit:'公告仅公开主文，未公开各案理由；不能据此推断具体行为、刑事责任或决议确定日期，也不能据此认定她目前是否正在执业或停业。此为律师惩戒决定，不是刑事定罪。',
    sources:[id],source:id
  });
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerChangDisciplineRound38={apply};}
})(typeof window==='undefined'?globalThis:window);
