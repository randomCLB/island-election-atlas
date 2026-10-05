(function(root){
'use strict';
const id='career-yeh-street-performance-round59';
const sources={
 'career-yeh-street-roster-2010':{
  title:'高雄市文化局：99年度街頭藝人認證標章場次號碼表',
  url:'https://khcc.kcg.gov.tw/PhotoData/99.12.25%20after.pdf',
  date:'2010-12-25',kind:'官方場次號碼表；不是通過名單',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'表列「葉人文」為音樂類，演出項目口琴、吉他彈唱；文件標題是場次號碼表，不據此認定通過認證或證照有效期。'
 },
 'career-yeh-street-pass-2014':{
  title:'高雄市文化局：103年第1次街頭藝人標章認證通過名單（動態類）',
  url:'https://khcc.kcg.gov.tw/PhotoData/PIC1030606.pdf',
  date:'2014-06-06',kind:'官方認證通過名單',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'通過名單列「葉人文」，藝名「葉雪」，項目為口琴吉他歌唱。名冊沒有身分證等唯一識別資料，與本屆候選人的身份連結依同名、同演出項目及後續在台南的具名紀錄交叉判讀。'
 },
 'career-yeh-street-2016':{
  title:'聯合報記者鄭宏斌採訪：葉人文談街頭藝人工作（HouseFun承載）',
  url:'https://news.housefun.com.tw/news/article/172780129161.html',
  date:'2016-05-10',kind:'具名新聞採訪；轉載承載頁',publisherId:'udn',originalPublisherId:'udn',checkedAt:'2026-10-05',
  note:'頁面署名聯合報記者鄭宏斌，HouseFun為承載平台。報導轉述葉人文自述有十多年演出經驗，並稱正在籌組南部街頭藝人俱樂部；這是本人說法的媒體轉述，不是聘僱紀錄。'
 },
 'career-yeh-convenor-2019':{
  title:'台南市議會：街頭藝人生存權益座談會紀錄',
  url:'https://www.tncc.gov.tw/2019/page.asp?mainid=%7B5EB2A138-9497-48E3-AF88-28D84F8CE434%7D',
  date:'2019-03-06',kind:'地方議會活動紀錄',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'市議會頁面記載「街頭藝人代表葉人文總召」發言。這證明當日以該身份出席及倡議，不代表總召任期起訖，也不證明目前仍任職。'
 }
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='yeh');if(!p)return;
 p.workHistory=p.workHistory||[];
 const leadership=p.workHistory.find(x=>x.organization==='南部街头艺人表演俱乐部');
 if(leadership){
  leadership.date='2019-03-06官方座談記錄；任期起止未載';
  leadership.role='街頭藝人代表、總召';
  leadership.note='台南市議會在街頭藝人生存權益座談會紀錄中稱「街頭藝人代表葉人文總召」，並記下他提出統一申請、公開排程與表演安全等訴求。可證明當日公開身份與發言，不證明總召任期起訖或目前仍任職。';
  leadership.sources=[...new Set([...(leadership.sources||[]),'career-yeh-convenor-2019'])];
  leadership.verification='地方議會同期活動紀錄；完整任期未載';
 }
 if(!p.workHistory.some(x=>x.sources?.includes('career-yeh-street-pass-2014')))p.workHistory.push({
  date:'2010-12-25官方場次名冊；2014-06官方通過名單；2016-05具名採訪稱演出逾十年',
  organization:'街頭表演／音樂演出',role:'街頭藝人；口琴、吉他彈唱',
  note:'高雄市文化局2010場次號碼表列「葉人文」演出項目為口琴、吉他彈唱，但該表不是通過名單；2014通過名單列「葉人文」、藝名「葉雪」，項目同為口琴吉他歌唱。2016具名採訪轉述葉人文稱已有十多年演出經驗。姓名、演出項目與後續台南具名活動相互吻合，身份對應可信度高，但官方名冊沒有唯一識別資料；不把2010場次表當作通過證明，也不推定認證持續有效或精確任職起止。',
  sources:['career-yeh-street-roster-2010','career-yeh-street-pass-2014','career-yeh-street-2016'],
  verification:'官方場次表、官方通過名單與具名採訪交叉；身份對應仍非唯一識別'
 });
}
if(typeof module!=='undefined')module.exports={apply,id,sources};
else{apply(root.ATLAS);root.AtlasCareerYehStreetPerformanceRound59={apply};}
})(typeof window==='undefined'?globalThis:window);
