(function(root){
'use strict';
const id='career-legislator-terms-round61';
const terms={
 'career-ly-term-7':{title:'立法院：第7屆立法委員名單與任期',url:'https://www.ly.gov.tw/EngPages/List.aspx?nodeid=140',date:'2008-02-01至2012-01-31',kind:'立法院官方歷屆委員名單及屆期頁',publisherId:'official-tw',checkedAt:'2026-10-05',note:'官方歷屆名單列出陳亭妃；屆期欄列本屆起訖日期。'},
 'career-ly-term-8':{title:'立法院：第8屆立法委員名單與任期',url:'https://www.ly.gov.tw/EngPages/List.aspx?nodeid=139',date:'2012-02-01至2016-01-31',kind:'立法院官方歷屆委員名單及屆期頁',publisherId:'official-tw',checkedAt:'2026-10-05',note:'官方歷屆名單列出江啟臣、陳亭妃；何欣純到職日另見其個人履歷。'},
 'career-ly-term-9':{title:'立法院：第9屆立法委員名單與任期',url:'https://www.ly.gov.tw/EngPages/List.aspx?nodeid=37103',date:'2016-02-01至2020-01-31',kind:'立法院官方歷屆委員名單及屆期頁',publisherId:'official-tw',checkedAt:'2026-10-05',note:'官方歷屆名單列出江啟臣、蘇巧慧、陳亭妃及何欣純。'},
 'career-ly-term-10':{title:'立法院：第10屆立法委員名單與任期',url:'https://www.ly.gov.tw/Pages/List.aspx?nodeid=37077',date:'2020-02-01至2024-01-31',kind:'立法院官方歷屆委員名單及屆期頁',publisherId:'official-tw',checkedAt:'2026-10-05',note:'官方第10屆名單及屆期資料；個人到職日另以委員履歷或正式紀錄核對。'}
};
function apply(d){
 Object.assign(d.sources,terms);
 const entries=[
  ['johnny','第8、9、10届立法委员',['career-ly-term-8','career-ly-term-9','career-ly-term-10'],'2012-02-01至2024-01-31（第8至10屆，連續任職）'],
  ['su-c','第9、10届立法委员',['career-ly-term-9','career-ly-term-10'],'2016-02-01至2024-01-31（第9、10屆，連續任職）'],
  ['chen-t','第7、8、9、10届立法委员',['career-ly-term-7','career-ly-term-8','career-ly-term-9','career-ly-term-10'],'2008-02-01至2024-01-31（第7至10屆，連續任職）']
 ];
 for(const [pid,role,ids,date] of entries){
  const p=d.people.find(x=>x.id===pid),row=p?.politicalHistory?.find(x=>x.role===role);if(!row)continue;
  row.date=date;
  row.note='立法院官方歷屆委員名單逐屆列出本人，並提供各屆起訖日期；本筆只涵蓋立委任期，不推定其他公職或黨職日期。';
  row.sources=[...new Set([...(row.sources||[]),...ids])];
  row.verification='立法院官方歷屆委員名單及屆期頁逐屆交叉核對';
 }
}
if(typeof module!=='undefined')module.exports={apply,id,terms};
else{apply(root.ATLAS);root.AtlasLegislatorTermsRound61={apply};}
})(typeof window==='undefined'?globalThis:window);
