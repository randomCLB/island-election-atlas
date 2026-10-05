(function(root){
'use strict';
function apply(d){
 const register='career-hung-l-business-register-20180528';
 d.sources[register]={title:'经济部商业发展署：烜烜莉工程行107年5月设立登记清册',url:'https://serv.gcis.nat.gov.tw/moeadsBF/cmpy/reportAction.do?fileName=376590000Asetup10705.pdf&method=report&reportClass=bmsItem&subPath=10705',date:'2018-05-28',kind:'经济部官方商业登记设立清册',publisherId:'official-tw',checkedAt:'2026-10-05',note:'清册列商号“烜烜莉工程行”、负责人洪丽华、核准设立日期107年5月28日。证明该登记商号的正式设立节点，不证明此前没有非正式经营、前身商号或其他业务。'};
 const p=d.people.find(x=>x.id==='hung-l');if(!p)return;
 for(const id of ['career-hung-l-2018','career-hung-l-2024']){
  const source=d.sources[id];if(!source)continue;
  source.publisherId='official-tw';source.publisherName='台湾公部门资料';source.checkedAt='2026-10-05';
  source.kind='官方选举公报中的候选人自填履历';
  if(!source.note?.includes('候选人自填'))source.note=(source.note?source.note+' ':'')+'官方公报只证明该经历由候选人填报、刊载；不核验雇佣关系、营运登记或履历真实性。';
 }
 const row=p.workHistory.find(x=>x.organization==='欣雅莉服装行');if(!row)return;
 row.date='2018公报：民国74年起（同句称经营23年）；2024公报：民国87年起至今';
 row.note='两届公报均为候选人自填履历。2018年公报所列起年与同句“经营23年”的关系待核；2024年公报改列民国87年起。两版本不一致，未取得商号登记、税务或雇佣档案，不裁定哪一版正确，也不推定连续任期。';
 row.sources=[...new Set([...(row.sources||[]),'career-hung-l-2024'])];
 row.verification='两届官方选举公报中的候选人自填履历；日期冲突未能以雇主或登记档案核定';
 const shop=p.workHistory.find(x=>x.organization==='烜烜莉工程行');
 if(shop){
  shop.date='2018年公报自述民国96—107年经营；官方登记核准设立：2018-05-28';
  shop.note='2018年中选会公报是候选人自填经历，称民国96—107年经营该行；经济部商业登记清册则列该商号于2018-05-28核准设立、负责人为洪丽华。正式登记节点晚于自述起始年；可能涉及未登记经营、前身或填报口径差异，现有资料不能判定原因，也不能把2007年写成该商号的已核登记起始日。';
  shop.sources=[...new Set([...(shop.sources||[]),register,'career-hung-l-2018-bulletin-round73'])];
  shop.verification='候选人公报自述与经济部正式登记清册并列；登记日期确认，较早经营起始暂未确认';
 }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerHungLWorkClaimsRound62={apply};}
})(typeof window==='undefined'?globalThis:window);
