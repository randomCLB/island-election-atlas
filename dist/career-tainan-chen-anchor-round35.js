(function(root){
'use strict';
function apply(d){
  const person=d.people.find(x=>x.id==='chen-t');
  const sources={
    'career-chen-anchor-2025':{title:'TVBS专访：陈亭妃回忆毕业后进入地方电视台、三天后代班主播',url:'https://news.tvbs.com.tw/politics/3002685',date:'2025-10-04',checkedAt:'2026-10-04',kind:'媒体专访；本人回忆',publisherId:'tvbs',note:'报道转述陈亭妃本人回忆其入职后第三天临时代班，之后成为轮值主播；没有列出电视台名称、任职年月或原始雇用记录。'},
    'career-chen-anchor-2008':{title:'TVBS：陈亭妃首次当选立委报道中的地方电视台经历',url:'https://news.tvbs.com.tw/politics/157370',date:'2008-01-14',checkedAt:'2026-10-04',kind:'同时期人物报道',publisherId:'tvbs',note:'报道指她曾在立委选举对手王昱婷父亲经营的有线电视台担任记者、主播；未写频道名称或任职年份。'}
  };
  Object.assign(d.sources,sources);
  if(!person.workHistory.some(x=>x.sources?.includes('career-chen-anchor-2025'))){
    person.workHistory.push({date:'毕业后；具体年份未载',organization:'台南地方有线电视台（报道未具名）',role:'记者、主播（本人回忆入职3天后临时代班，之后成为轮值主播）',note:'2025年TVBS专访转述陈亭妃本人回忆；2008年TVBS报道称该台由她当时立委选举对手王昱婷的父亲经营。两条均为TVBS报道，不算独立双重核实；频道名称、雇主正式名称、具体任职年月及雇用文件仍未取得。',sources:['career-chen-anchor-2025','career-chen-anchor-2008'],verification:'两篇媒体报道；一篇转述本人回忆，任职资料未独立核验'});
  }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerTainanChenAnchorRound35={apply};}
})(typeof window==='undefined'?globalThis:window);
