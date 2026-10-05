(function(root){
'use strict';
const id='career-ho-work-round65';
const sources={
 'career-ho-cec-2010-work':{
  title:'中選會：何欣純2010年臺中市議員選舉公報',
  url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/05%E7%9B%B4%E8%BD%84%E5%B8%82%E8%AD%B0%E5%93%A1/099%E5%B9%B4/03%E8%87%BA%E4%B8%AD%E5%B8%82/%E8%87%BA%E4%B8%AD%E5%B8%82%E7%AC%AC13%E9%81%B8%E5%8D%80%E8%AD%B0%E5%93%A1.pdf',
  date:'2010-11',kind:'中選會候選人自填選舉公報',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'中選會公報明示個人資料由候選人填列；能證明她曾如此申報，不能單獨證明雇用關係、報酬或精確任期。'
 },
 'career-ho-cec-2012-work':{
  title:'中選會：何欣純2012年第8屆立委選舉公報',
  url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/101%E5%B9%B4%E7%AC%AC8%E5%B1%86/01%E5%8D%80%E5%9F%9F/04%E8%87%BA%E4%B8%AD%E5%B8%82/%E8%87%BA%E4%B8%AD%E5%B8%82%E7%AB%8B%E5%A7%94%E9%81%B8%E8%88%89%E7%AC%AC7%E9%81%B8%E5%8D%80.pdf',
  date:'2012-01',kind:'中選會候選人自填選舉公報',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'公報明示個人資料由候選人填列；社團與諮詢職稱按公報原文記錄，未核實任期、報酬或實際工作量。'
 },
 'career-ho-ltn-2016':{
  title:'自由時報：何欣純2016立委選舉人物資料頁',
  url:'https://election.ltn.com.tw/2016/legislator/candidate/2/118',
  date:'2016',kind:'選舉專題人物資料頁；來源註明以中選會公布為準',publisherId:'ltn',checkedAt:'2026-10-05',
  note:'頁面列出「臺中縣政府副縣長室秘書」，但未給年月，也未附機關任用資料；保留為待獨立核實的履歷線索。'
 }
};
const work=[
 {date:'2010-11公報列載；任職起止未載',organization:'朝陽科技大學推廣教育中心',role:'兼任講師',note:'2010年候選人自填公報列此經歷。僅能確認公報刊載時本人如此申報，不能據此補出授課期間、課程或聘任紀錄。',sources:['career-ho-cec-2010-work'],verification:'官方選舉公報中的候選人自述；任職細節未經機構獨立核實'},
 {date:'2010-11公報列載；任職起止未載',organization:'臺中縣保母協會',role:'「托育政策與法令」課程講師',note:'公報列為曾任課程講師；不擴寫成協會長期職員或固定任教。',sources:['career-ho-cec-2010-work'],verification:'官方選舉公報中的候選人自述；課程日期未載'},
 {date:'2016選舉資料頁列載；任職年月未載',organization:'臺中縣政府副縣長室',role:'秘書',note:'自由時報選舉人物頁列出此職，但頁面註明資料以中選會公布為準。本輪未找到機關任用紀錄或具體任職年月，先列為待核履歷線索。',sources:['career-ho-ltn-2016'],verification:'二手選舉資料頁；缺少機關任用或同期公報交叉核對'},
 {date:'2010-11公報列載；任期未載',organization:'臺中縣民主婦女會',role:'理事長（社團職務）',note:'2010年公報列為曾任；屬社團職務，不表示受薪工作。2012公報另使用「臺中市民主女會」名稱，未據此合併成連續任期。',sources:['career-ho-cec-2010-work','career-ho-cec-2012-work'],verification:'兩份官方選舉公報中的候選人自述；組織名稱及任期沿用各自公報'},
 {date:'2012-01公報列載；任期未載',organization:'臺中縣婦女權益促進會',role:'理事長（社團職務）',note:'2012年公報列載此社團職務；沒有薪酬或任期資料，不視為受薪工作。',sources:['career-ho-cec-2012-work'],verification:'官方選舉公報中的候選人自述；任職細節未獨立核實'},
 {date:'2012-01公報列載；任期未載',organization:'臺中縣性別平等教育委員會',role:'顧問（公共諮詢職務）',note:'2012年公報列載此顧問職；未找到聘任文件，不能推定為正式公務員職務或受薪職位。',sources:['career-ho-cec-2012-work'],verification:'官方選舉公報中的候選人自述；聘任依據與任期未核實'}
];
const politics=[
 {date:'2010-11公報列載；任期未載',organization:'臺中縣議會民主進步黨團',role:'黨團召集人',note:'2010年公報列為曾任，2012年公報也列載縣議會民進黨團召集人；具體起訖未載。',sources:['career-ho-cec-2010-work','career-ho-cec-2012-work'],verification:'官方選舉公報中的候選人自述；任期未核定'},
 {date:'2010-11公報列載；年份未載',organization:'簡肇棟立法委員選舉',role:'競選執行總幹事',note:'2010年候選人自填公報列為曾任競選職務；公報未寫出是哪一屆選舉，不推定年份。',sources:['career-ho-cec-2010-work'],verification:'官方選舉公報中的候選人自述；選舉年份待查'}
];
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='ho');if(!p)return;
 const add=(items,rows)=>{for(const row of rows)if(!items.some(x=>x.role===row.role&&x.organization===row.organization))items.push(row);};
 add(p.workHistory,work);add(p.politicalHistory,politics);
}
if(typeof module!=='undefined')module.exports={apply,id,sources};
else{apply(root.ATLAS);root.AtlasCareerHoWorkRound65={apply};}
})(typeof window==='undefined'?globalThis:window);
