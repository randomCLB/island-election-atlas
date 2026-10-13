(function(root){
'use strict';
function apply(d){
 const p=d.people.find(x=>x.id==='su-h');if(!p)return;
 const source='career-su-h-2024-result';
 d.sources[source]={
  title:'中选会开放资料：2024年第11届立委选举投票资料库',
  url:'https://data.cec.gov.tw/選舉資料庫/votedata.zip',
  date:'2024-01-13',
  kind:'中央选举委员会官方开放资料 ZIP；候选人各行政区得票 CSV',
  publisherId:'official-tw',
  checkedAt:'2026-10-05',
  note:'本站读取档案内2024-立法委员目录的elctks.csv汇总行：县市码65、新北市第4选举区、候选人号次3，得票1924、得票率0.9%。数字依官方CSV汇总行，不由投开票所数据重复相加。'
 };
 const item=p.politicalHistory.find(x=>x.organization==='第11届立法委员选举·新北市第4选区'&&x.sources?.includes('language-su-h-bulletin'));
 if(!item)return;
 item.role='无党籍候选人；得1,924票，得票率0.90%，未当选';
 item.note='新北市选举委员会编印的候选人公报列其为该区候选人，号次3；中选会开放资料库的官方汇总行记载1,924票、0.90%。候选人经历与政见为自填资料，不因此视为独立核验。本条记录参选结果，不代表其任职经历。';
 if(!item.sources.includes(source))item.sources.push(source);
 item.verification='候选人身份见官方公报；票数与票率见中选会官方开放数据汇总行';
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerSuH2024ResultRound64={apply};}
})(typeof window==='undefined'?globalThis:window);
