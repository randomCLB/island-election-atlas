(function(root){
'use strict';
const sources={
  'career-su-eball-2017':{title:'超越基金会：2017年执行长介绍',url:'https://eball.tw/about/news/72546',date:'2017-06-15',kind:'基金会官网人物职务介绍',publisherId:'other',publisherName:'超越基金会',checkedAt:'2026-10-04',note:'基金会官网于2017-06-15将苏巧纯列为执行长；可证明该页发布时的职务标注，不能单独确定苏巧慧的离任日或苏巧纯的实际到任日。'},
  'career-su-eball-former':{title:'超越基金会：苏巧慧人物介绍',url:'https://eball.tw/node/100020',date:null,kind:'基金会官网人物介绍',publisherId:'other',publisherName:'超越基金会',checkedAt:'2026-10-04',note:'页面称苏巧慧为基金会“前执行长”，未标发布日期；仅证明基金会后来以此称呼她，不能推定具体离任年月。'}
};
function apply(d){
  Object.assign(d.sources,sources);
  const p=d.people.find(x=>x.id==='su-c');
  const role=p?.workHistory.find(x=>x.organization==='超越基金会'&&x.role==='执行长');
  if(!role)return;
  role.date='2014-06时任；基金会2017-06官网列苏巧纯为执行长；苏巧慧离任年月未载';
  role.note='2014年采访确认苏巧慧当时担任执行长；基金会官网于2017-06-15介绍苏巧纯为执行长，另一篇未标日期的官网人物页称苏巧慧为“前执行长”。这些节点没有给出苏巧慧的完整任期或确切交接日，因此不推算连续任期。';
  role.sources=[...new Set([...role.sources,'career-su-eball-2017','career-su-eball-former'])];
  role.verification='2014年媒体采访与基金会官网职务介绍；任期边界未核';
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerSuRoleDatesRound53={apply};}
})(typeof window==='undefined'?globalThis:window);
