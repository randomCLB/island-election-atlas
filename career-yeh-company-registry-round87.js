(function(root){
'use strict';
const registry='career-yeh-gcis-registry-round87',changes='career-yeh-gcis-changes-round87';
function apply(d){
 d.sources[registry]={
  title:'經濟部商工行政資料開放平台：葉雪創意環保科技有限公司登記資料（統編24926500）',
  url:'https://data.gcis.nat.gov.tw/od/data/api/5F64D864-61CB-4D0D-8AD9-492047CC1EA6?$format=json&$filter=Business_Accounting_NO%20eq%2024926500&$skip=0&$top=50',
  date:'公司核准設立：2018-02-05；登記資料查閱：2026-10-05',checkedAt:'2026-10-05',
  kind:'經濟部公司登記官方開放API',publisherId:'official-tw',
  note:'以統一編號24926500查詢，資料列公司核准設立日2018-02-05、狀態核准設立，查詢時登記代表人為葉人文，最近核准變更日2023-05-18。公司登記證明法人資料與登記代表人，不單獨證明代表人身分與同名候選人的關聯、日常工作內容或完整任期。'
 };
 d.sources[changes]={
  title:'經濟部：臺南市109年3月公司變更登記清冊',
  url:'https://serv.gcis.nat.gov.tw/pub/cmpy/reportAction.do?fileName=10903TNC.pdf&method=report&reportClass=cmpy&subPath=10903',
  date:'2020-03-12（該筆核准變更日）',checkedAt:'2026-10-05',kind:'經濟部官方公司變更登記清冊',publisherId:'official-tw',
  note:'第278筆列統編24926500、葉雪創意環保科技有限公司、登記代表人葉人文及2020-03-12核准變更日。清冊是公司變更彙總，不提供該代表人職務起始日或雇傭關係。'
 };
 const p=d.people.find(x=>x.id==='yeh');if(!p)return;
 const work=p.workHistory.find(x=>x.sources?.includes('career-yeh-company'));
 if(work){
  work.organization='葉雪創意環保科技有限公司';
  work.date='2018-02-05公司核准設立；2020-03-12變更清冊列代表人；2026查詢仍列代表人';
  work.role='公司登記代表人（候選人關聯由多源交叉支持；完整任期未核）';
  work.note='華視2026年報導稱葉人文經營科技公司，但沒有列公司名稱。經濟部登記API與2020年變更清冊均列統編24926500的葉雪創意環保科技有限公司代表人為葉人文；公司名稱、登記代表人及報導中的候選人姓名相互吻合，支持公司與候選人的關聯。這仍不是本人明確指認該公司的材料；官方登記也不證明日常工作內容、實際控制權或任職起訖。';
  work.sources=[...new Set([...(work.sources||[]),registry,changes])];
  work.verification='經濟部公司登記與變更清冊確認代表人；具名科技公司報導交叉支持候選人關聯；完整任期未核';
 }
 p.workResearch={
  checkedAt:'2026-10-05',
  note:'已查：華視具名報導稱葉人文經營科技公司；經濟部官方API及2020年台南公司變更清冊均列葉雪創意環保科技有限公司（統編24926500）代表人為葉人文，API列2018-02-05核准設立；高雄市文化局2014通過名單列葉人文藝名「葉雪」。候選人姓名、藝名、公司名稱及科技公司報導互相吻合。暫未確認：候選人與公司登記主體的直接關聯仍缺本人明確指認或個人履歷文件；其代表人／實際工作任期、工作內容及離任時間也未由登記摘要或新聞核定。環保／太陽能工作及手機維修是具名報導轉述，雇主、商號和起止年月仍暫未確認。尚未查核：公司完整歷史董監事變更、稅籍營業檔案、太陽能項目／雇主文件、手機維修商號及其他可能工作經歷。',
  sources:[...new Set([...(p.workResearch?.sources||[]),registry,changes,'career-yeh-company','career-yeh-repair-report','career-yeh-street-pass-2014'])]
 };
 p.careerNote='街頭表演、街頭藝人組織與學生會經歷分別附有官方或同期來源。另查到與其姓名及藝名高度吻合的環保科技公司登記；任期與實際工作內容仍待確認。校園自治服務不列為受僱工作。';
}
if(typeof module!=='undefined')module.exports={apply,registry,changes};
else{apply(root.ATLAS);root.AtlasYehCompanyRegistryRound87={apply};}
})(typeof window==='undefined'?globalThis:window);
