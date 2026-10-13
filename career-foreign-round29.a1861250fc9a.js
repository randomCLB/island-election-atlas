(function(root){
'use strict';
const source='career-wang-2024-presidential-pre-candidate';
function apply(d){
  d.sources[source]={title:'监察院：第16任总统选举已设政治献金专户但未依法登记候选人名单',url:'https://www-ws.cy.gov.tw/Download.ashx?n=6ZmE5Lu2LeaUv%2Bayu%2BeNu%2BmHkeacg%2BioiOWgseWRiuabuOWFrOmWi%2BS4gOimveihqC5wZGY%3D&u=LzAwMS9VcGxvYWQvMy9yZWxmaWxlLzg5MTIvMjk1OTYvMGUwZjYyNTUtMmYyMi00ZDk5LWIwZjgtYzhjN2NmZGYyZjhjLnBkZg%3D%3D',date:'2024年选举周期；表格发布日期未载',kind:'监察院公开的政治献金会计报告书名单',publisherId:'official-tw',publisherName:'监察院',checkedAt:'2026-10-04',note:'名单将王肇民列为已设立政治献金专户但未依法登记为第16任总统候选人的拟参选人。只证明曾设专户及未登记，不证明正式参选、政治献金金额或完整竞选活动。'};
  const p=d.people.find(x=>x.id==='wang');
  if(p&&!p.politicalHistory.some(x=>x.sources?.includes(source)))p.politicalHistory.push({date:'2024总统选举周期；公告发布日期未载',organization:'第16任总统、副总统选举',role:'设立拟参选人政治献金专户；未依法登记为候选人',note:'监察院公开名单将王肇民列入“已设专户、但未依法登记为候选人”项下。故作为参选筹备记录，不计作正式总统候选人或当选公职。',sources:[source],verification:'监察院名单原文；未取得专户收支明细或本人完整参选声明'});
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound29={apply};}
})(typeof window==='undefined'?globalThis:window);
