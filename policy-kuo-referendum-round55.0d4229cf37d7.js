(function(root){
'use strict';
const sourceIds=['policy-kuo-referendum-cec-2023','policy-kuo-referendum-cna-2023'];
const sources={
 [sourceIds[0]]:{title:'中选会：郭璽领衔的长者麻将公投提案听证记录',url:'https://web.cec.gov.tw/central/article/39067',date:'2023-07-17',kind:'中央选举委员会公投提案听证记录',publisherId:'official-tw',checkedAt:'2026-10-04',note:'中选会页面列明提案人为郭璽、提案日期为2023-05-26，并提供听证纪录及补充资料。提案文字不是已生效法律。'},
 [sourceIds[1]]:{title:'中央社：长者麻将小额输赢除罪公投提案遭中选会驳回',url:'https://www.cna.com.tw/news/aipl/202310200268.aspx',date:'2023-10-20',kind:'中央通讯社报道；中选会决定转述',publisherId:'cna',checkedAt:'2026-10-04',note:'报道转述中选会称提案经听证及限期补正后仍不符合规定，2023-10-20决议驳回。这里只用于标明提案结果，不替代中选会正式决定书。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='kuo');if(!p)return;
 p.policies=p.policies||[];
 if(p.policies.some(x=>x.sources?.includes(sourceIds[0])))return;
 p.policies.push({
  topic:'health',
  text:'郭璽领衔提出公投，主张65岁以上者在公开合法场所打麻将，输赢金额1,000元以内不依刑法第266条第3项赌博罪处罚。',
  date:'2023-05-26提案；2023-10-20遭驳回',
  sources:sourceIds,
  note:'这是全国性公投提案，不是台北市政策或2026市长政见。中选会经听证与限期补正后认定仍不符合规定并予以驳回；提案没有成为生效法律。',
  type:'以往全国政策提案；未通过（非市政承诺）',
  electionYear:2023
 });
}
if(typeof module!=='undefined')module.exports={apply,sourceIds,sources};
else{apply(root.ATLAS);root.AtlasPolicyKuoReferendumRound55={apply};}
})(typeof window==='undefined'?globalThis:window);
