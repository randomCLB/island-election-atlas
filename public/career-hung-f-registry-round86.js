(function(root){
'use strict';
const id='career-hung-f-gcis-round86';
function apply(d){
 d.sources[id]={
  title:'经济部商工行政资料开放平台：常春藤电讯公司登记资料（统一编号97301973）',
  url:'https://data.gcis.nat.gov.tw/od/data/api/5F64D864-61CB-4D0D-8AD9-492047CC1EA6?$format=json&$filter=Business_Accounting_NO%20eq%2097301973&$skip=0&$top=50',
  date:'公司核准设立：1996-12-09；登记资料查阅：2026-10-05',
  checkedAt:'2026-10-05',kind:'经济部公司登记官方开放API',publisherId:'official-tw',
  note:'以统一编号97301973查询。资料列公司状态“核准设立”、公司名称“常春藤电讯服务股份有限公司”、核准设立日期1996-12-09、登记代表人洪方隆，最近核准变更日2016-11-09。当前摘要资料不提供完整历任董监事或职务任期，不能据此认定洪方隆是原始设立人或在该公司连续任职。'
 };
 const p=d.people.find(x=>x.id==='hung-f');if(!p)return;
 const founder=p.workHistory.find(x=>x.organization==='常春藤电讯公司'&&x.role==='创办人');
 if(founder){
  founder.role='创办人（登记报道所称）';
  founder.date='2026-09登记报道所载；公司核准设立日1996-12-09';
  founder.note='登记报道称洪方隆为常春藤电讯创办人；经济部商工登记API确认公司于1996-12-09核准设立，查阅时登记代表人为洪方隆。登记日不等于个人开始任职或担任创办人的日期，也不能据当前代表人字段推定其完整任期。';
  founder.sources=[...new Set([...(founder.sources||[]),id])];
  founder.verification='创办人身份来自具名登记报道；公司设立日来自官方登记；个人创办与任职起始日未核';
 }
 const work=p.workHistory.find(x=>x.sources?.includes('career-hung-f-2000'));
 if(work){
  work.date='2000-04-14报道时任；完整起止未核';
  work.note='iThome同期行业采访称洪方隆当时为常春藤电讯总经理，并记录他介绍与中华电信合作的e-SCHOOL网络虚拟校园。报道可确认采访时的职务，不证明到职年份、离职时间或此后持续任职。';
  work.verification='同期具名行业报道确认2000-04-14时的职务；任期起止未载';
 }
 p.workResearch={
  checkedAt:'2026-10-05',
  note:'已查：经济部商工登记官方API以统一编号97301973查询，列常春藤电讯服务股份有限公司于1996-12-09核准设立，查询时登记代表人为洪方隆；iThome 2000-04-14同期采访称洪方隆当时担任总经理；2026年登记报道称其为创办人。暂未确认：他是否为1996年原始设立人，以及创办人、代表人和总经理职务的完整任期；现有公司摘要与报道均未给出这些日期。尚未查核：完整历史董监事变更登记、任免文件、个人雇佣资料及其他可能工作经历。',
  sources:[...new Set([...(p.workResearch?.sources||[]),id,'career-hung-f-2000','career-hung-f-registration'])]
 };
}
if(typeof module!=='undefined')module.exports={apply,id};
else{apply(root.ATLAS);root.AtlasCareerHungFRegistryRound86={apply};}
})(typeof window==='undefined'?globalThis:window);
