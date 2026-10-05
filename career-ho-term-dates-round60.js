(function(root){
'use strict';
const id='career-ho-term-dates-round60';
const sources={
 'career-ho-county-terms':{
  title:'臺中市議會：原臺中縣第15、16屆議員名錄',
  url:'https://www.tccc.gov.tw/wb_history02.asp?cno=155&uno=&zno=160',
  date:null,kind:'地方議會歷屆議員名錄',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'市議會歷屆名錄可核對何欣純列在原臺中縣第15、16屆；第16屆名錄另列姓名。任期日須與官方選舉及縣市合併資料交叉判讀。'
 },
 'career-ho-cec-2010':{
  title:'中央選舉委員會：臺中市第13選區議員選舉公報（何欣純）',
  url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/05%E7%9B%B4%E8%BD%84%E5%B8%82%E8%AD%B0%E5%93%A1/099%E5%B9%B4/03%E8%87%BA%E4%B8%AD%E5%B8%82/%E8%87%BA%E4%B8%AD%E5%B8%82%E7%AC%AC13%E9%81%B8%E8%88%89%E5%8D%80%E8%AD%B0%E5%93%A1.pdf',
  date:'2010-11',kind:'中央選舉委員會候選人選舉公報',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'公報記載她當時任第16屆臺中縣議員、曾任第15屆；是本人經歷欄，不單獨證明兩段的精確起訖日。'
 },
 'career-ho-city-council-2010':{
  title:'臺中市議會：第一屆臺中市議員名錄',
  url:'https://www.tccc.gov.tw/wb_history02.asp?cno=141&zno=161',
  date:'2010',kind:'地方議會歷屆議員名錄',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'議會歷屆名錄列何欣純為合併後第一屆市議員；政府資料記載新一屆直轄市議員於2010-12-25宣誓就職。名錄不載她個人的卸任日。'
 },
 'career-ho-city-oath-2010':{
  title:'臺中市政府：第一屆直轄市議員宣誓就職日期',
  url:'https://www.taichung.gov.tw/903417/post',
  date:'2010-12-25',kind:'市政府同期新聞',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'市府同期新聞提到第一屆直轄市議員於2010-12-25宣誓就職；支持新屆任期起點，不是個人當選或卸任證明。'
 },
 'career-ho-ly-8':{
  title:'立法院：何欣純第8屆委員履歷',
  url:'https://www.ly.gov.tw/Pages/List.aspx?nodeid=1696',
  date:'2012-02-01至2016-01-31',kind:'立法院官方委員履歷及屆期頁',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'頁面列第8屆任期、何欣純到職日期2012-02-01；任期末日依立法院屆期欄。'
 },
 'career-ho-ly-9':{
  title:'立法院：第9屆委員名單與任期',
  url:'https://www.ly.gov.tw/EngPages/List.aspx?nodeid=37103',
  date:'2016-02-01至2020-01-31',kind:'立法院官方屆期及委員名單',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'官方屆期頁列第9屆任期並列何欣純為該屆委員。'
 },
 'career-ho-ly-10':{
  title:'立法院：何欣純第10屆委員履歷',
  url:'https://www.ly.gov.tw/Pages/List.aspx?nodeid=37287',
  date:'2020-02-01至2024-01-31',kind:'立法院官方委員履歷及屆期頁',publisherId:'official-tw',checkedAt:'2026-10-05',
  note:'官方履歷列何欣純為第10屆委員；官方第10屆屆期頁提供任期日期。'
 }
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='ho');if(!p)return;
 const county=p.politicalHistory.find(x=>x.role==='第15、16届台中县议员');
 if(county){
  county.date='2002年至2010-12（第15、16屆；縣市合併前）';
  county.note='2010年選舉公報稱她當時任第16屆縣議員、曾任第15屆；縣市合併後改任第一屆直轄市議員。精確就職日及合併前最後在職日未在個人官方履歷中載明，故保留年份級日期。';
  county.sources=[...new Set([...(county.sources||[]),'career-ho-county-terms','career-ho-cec-2010'])];
  county.verification='中央選舉委員會公報與市議會歷屆名錄交叉；個人任職日未完整公開';
 }
 const city=p.politicalHistory.find(x=>x.role==='第1届台中市议员');
 if(city){
  city.date='2010-12-25就任；2012-02-01轉任立委';
  city.note='市府資料記載第一屆直轄市議員於2010-12-25宣誓就職；何欣純於2012-02-01到職第8屆立委。來源沒有載明她個人的議員卸任日，故不將轉任前一日寫成已核實卸任日。';
  city.sources=[...new Set([...(city.sources||[]),'career-ho-city-council-2010','career-ho-city-oath-2010','career-ho-ly-8'])];
  city.verification='議會名錄、市府就職日期及立法院到職資料交叉；個人議員卸任日未載';
 }
 const ly=p.politicalHistory.find(x=>x.role==='第8、9、10届立法委员');
 if(ly){
  ly.date='2012-02-01至2024-01-31（第8至10屆，連續任職）';
  ly.note='立法院資料列明第8屆到職日、何欣純為第9及第10屆委員，並提供各屆起訖日期。';
  ly.sources=[...new Set([...(ly.sources||[]),'career-ho-ly-8','career-ho-ly-9','career-ho-ly-10'])];
  ly.verification='立法院官方履歷、委員名單及屆期頁';
 }
}
if(typeof module!=='undefined')module.exports={apply,id,sources};
else{apply(root.ATLAS);root.AtlasCareerHoTermDatesRound60={apply};}
})(typeof window==='undefined'?globalThis:window);
