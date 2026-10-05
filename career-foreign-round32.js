(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='hsiao-l');
  const source='career-hsiao-l-election-result-round32';
  d.sources[source]={title:'中央社：蕭燐洪2024年立委得票与竞选经费门槛',url:'https://www.cna.com.tw/news/aipl/202401150088.aspx',date:'2024-01-15',kind:'选后结果报道；票数报道并引述台南市选委会',checkedAt:'2026-10-04',publisherId:'cna',publisherName:'中央通讯社',note:'中央社报道蕭燐洪获38,695票，并引述台南市选委会说明其未达补贴门槛。此为2024立委结果，不是2026台南市长民调。'};
  if(!p.policies.some(x=>x.sources?.includes('foreign-hsiao-l-2024-bulletin')&&x.topic==='education'))p.policies.push({topic:'education',text:'2024年立委公报提出以“阅读科学”（SoR）为参照调整英语教学，主张先练语音觉识（PA），再教字母与读音对应（Phonics）。',date:'2024-01-13',sources:['foreign-hsiao-l-2024-bulletin','foreign-hsiao-l-nyc-check'],note:'这是2024年第11届立委选举的候选人自填教育政见，归入往届资料。公报另称SoR是美、加、澳、英政府共同背书的五阶段英语体系；该背书与体系描述未经独立核实。纽约市官方公告称课程改革分两年推行、按学区分期，不能据此核成“700所学校同时强制采用同一五阶段体系”。这不是2026台南市长政策。',type:'往届教育政见（候选人公报自填；部分依据待核）',electionYear:2024});
  if(!p.politicalHistory.some(x=>x.sources?.includes(source)))p.politicalHistory.push({date:'2024-01-13投票',organization:'第11届立法委员选举·台南市第5选区',role:'得38,695票（23.46%），未当选',note:'蕭燐洪2024年公报写个人得票目标为0票；中央社报道最终得票38,695票、得票率23.46%。两项分属选前自述与选后结果，不代表2026台南市长选举的支持度。',sources:['foreign-hsiao-l-2024-bulletin',source],verification:'候选人公报与中央社选后报道；结果对应2024年立委选举'});
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound32={apply};}
})(typeof window==='undefined'?globalThis:window);
