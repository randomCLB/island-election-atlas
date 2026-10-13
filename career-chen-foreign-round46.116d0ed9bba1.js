(function(root){
'use strict';
const sources={
 'career-chen-ketagalan-2022':{title:'凱達格蘭學校：2022年基金會董事會人事公告',url:'https://www.ketagalan.org.tw/%E3%80%8A%E5%87%B1%E9%81%94%E6%A0%BC%E8%98%AD%E5%AD%B8%E6%A0%A1%E4%BA%BA%E4%BA%8B%E5%85%AC%E5%91%8A%E3%80%8B-2/',date:'2022-08-01',checkedAt:'2026-10-04',kind:'基金會所屬學校公告',publisherId:'other',publisherName:'凱達格蘭學校',note:'公告稱基金會於2022-08-01召開董事會，由董事長陳亭妃提名校長人選。只能證明她最遲當日任董事長，未給任期起訖。'},
 'career-chen-cn-20090505':{title:'立法院：教部稱明年開放陸生來台不變',url:'https://www.ly.gov.tw/EngPages/Detail.aspx?nodeid=4940&pid=16967',date:'2009-05-05',checkedAt:'2026-10-04',kind:'立法院网站转载的新闻报道',publisherId:'official-tw',note:'页面注明转载自《民众日报》，报道转述陈亭妃反对开放陆生来台及采认大陆学历；不是逐字议事录，且只反映2009年特定法案争论。'},
 'career-chen-us-20241107':{title:'Newtalk：陈亭妃质询特朗普关税对台湾产业的影响',url:'https://newtalk.tw/news/view/2024-11-07/943617',date:'2024-11-07',checkedAt:'2026-10-04',kind:'具名媒体报道；报道质询与会后说明',publisherId:'newtalk',note:'报道指出她于2024-11-06质询经济部长与国发会，关注美国拟议关税对台湾出口和芯片产业的影响，并要求盘点产业、提出辅导方案。来源为媒体报道，不是完整逐字议事记录。'}
};
function apply(d){
 const p=d.people.find(x=>x.id==='chen-t');
 Object.assign(d.sources,sources);
 const tvRows=p.workHistory.filter(x=>x.sources?.some(s=>['career-chen-anchor-2025','career-chen-anchor-2008'].includes(s))||x.role==='新闻记者、主播');
 const tv=tvRows.find(x=>x.sources?.includes('career-chen-anchor-2025'))||tvRows[0];
 if(tv){for(const row of tvRows)for(const source of row.sources||[])if(!tv.sources.includes(source))tv.sources.push(source);tv.date='毕业后；具体年份未载';tv.organization='台南地方有线电视台（报道未具名）';if(!tv.note.includes('立法院公开履历也列'))tv.note+=' 立法院公开履历也列“新闻记者、主播”，但履历由委员研究室提供，仍未载频道名称及任职年月。';tv.verification='立法院公开履历加两篇TVBS报道；任期、频道及雇佣资料未核';p.workHistory=p.workHistory.filter(x=>!tvRows.includes(x)||x===tv);}
 const chair=p.workHistory.find(x=>x.organization==='凯达格兰基金会'&&x.role==='董事长');
 if(chair&&!chair.sources.includes('career-chen-ketagalan-2022')){chair.date='最迟2022-08-01任；完整任期未载';chair.note+=' 基金会所属学校公告记载2022-08-01董事会由董事长陈亭妃提名校长；只能确定该日已任职，不能推定任期起点或终点。';chair.sources.push('career-chen-ketagalan-2022');chair.verification='立法院履历与基金会所属学校公告；完整任期未核';}
 const records=[
  {region:'cn',date:'2009-05-05',topic:'反对开放陆生与采认大陆学历（当时立场）',text:'立法院网站转载的报道记载，陈亭妃反对开放大陆学生来台及采认大陆学历，并质疑相关查证安排。她当时关注的是教育交流中的学术与审查条件。',limit:'页面注明转载自《民众日报》，不是逐字议事录；仅记录2009年特定法案争论，不据此推断她现今反对所有学术交流或两岸往来。',sources:['career-chen-cn-20090505'],source:'career-chen-cn-20090505'},
  {region:'us',date:'2024-11-06至07',topic:'关注美国关税威胁对台湾芯片与出口产业的影响',text:'她质询经济部长和国发会，询问特朗普提出的关税可能如何影响台湾出口与芯片产业；随后称“保护费”可能只是选举语言，并要求盘点产业状况、提出辅导方案、提升竞争力及争取美国市场。',limit:'依据Newtalk对质询及会后说明的报道，不是完整逐字议事记录；记录的是当时对关税风险的具体回应，不等于她对美国整体政策的立场。',sources:['career-chen-us-20241107'],source:'career-chen-us-20241107'}
 ];
 for(const item of records)if(!p.evidence.some(x=>x.sources?.includes(item.source)))p.evidence.push(item);
}
const api={apply,sources};if(typeof module!=='undefined')module.exports=api;else{apply(root.ATLAS);root.AtlasCareerChenForeignRound46=api;}
})(typeof window==='undefined'?globalThis:window);
