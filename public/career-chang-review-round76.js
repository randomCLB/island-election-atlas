(function(root){
'use strict';
function apply(d){
 const p=d.people.find(x=>x.id==='chang');if(!p)return;
 Object.assign(d.sources,{
  'career-chang-review-committee':{title:'总统府司法改革国是会议成果报告：第四分组委员名册',url:'https://www.president.gov.tw/File/Doc/1754f2f0-c60d-4de1-a2e3-4c967610bcaa',date:'2017',kind:'总统府官方会议成果报告',publisherId:'official-tw',checkedAt:'2026-10-05',note:'名册列张静为第四分组委员；不据此推定完整任期。任职节点由中央社同期报道补充。'},
  'career-chang-review-exit':{title:'中央社：司改委員張靜宣布退出司法國是會議',url:'https://www.cna.com.tw/news/aipl/201708120202.aspx',date:'2017-08-12',kind:'通讯社同期报道；记载本人宣布退出',publisherId:'cna',checkedAt:'2026-10-05',note:'中央社报道张静于总结会议宣布退出；可以核实退出会议的时间与本人理由，不能替代完整聘任、出席或解聘档案。'},
  'career-chang-votetw':{title:'VoteTW：张静经历条目（含事务所及大学兼职线索）',url:'https://votetw.com/wiki/%E5%BC%B5%E9%9D%9C',date:null,kind:'二手选举人物资料页',publisherId:'other',checkedAt:'2026-10-05',note:'页面列出大成台湾律师事务所律师、云林科技大学科技法律研究所兼任副教授等经历；页面未提供任期或原始聘任文件，且非官方人事资料，仅作待核线索。'}
 });
 const lawyer=p.workHistory.find(x=>x.role==='律师');
 if(lawyer){
  lawyer.date='任职起止暂未确认';
  lawyer.organization='公开简历列律师；事务所待核';
  lawyer.note='登记资料列其职业为律师；VoteTW二手人物页另称曾任大成台湾律师事务所律师，但没有任职年份或雇主资料。已查登记简介、2017年本人履历访问转载及VoteTW条目；律所归属与执业起止仍暂未确认。律师公会历史执业登记及事务所人事资料尚未查核。';
  lawyer.verification='职业身份有公开资料；事务所及任期暂未确认（二手线索未获独立核实）';
  for(const s of ['career-chang-interview','career-chang-votetw'])if(!lawyer.sources.includes(s))lawyer.sources.push(s);
 }
 const keelung=p.workHistory.find(x=>x.organization==='基隆地检署');
 if(keelung){keelung.verification='本人2017年访问自述；原始任命令尚未查核，具体离职日暂未确认';if(!keelung.note.includes('未取得检察机关人事任命或调职文件'))keelung.note+=' 日期来自本人回忆，未取得检察机关人事任命或调职文件。';}
 const taipei=p.workHistory.find(x=>x.organization==='台北地检署');
 if(taipei){taipei.date='1982-06调任；离职年月暂未确认';taipei.verification='官方法官名册确认调任去向；检察官任职起止尚未查核';taipei.note='官方名册确认其由连江庭调任台北地检署；本人2017年访问随后记载转赴花莲，但没有台北地检署的人事令或精确离职日期。';}
 const hualien=p.workHistory.find(x=>x.organization==='花莲地检署');
 if(hualien){hualien.date='本人称1986-12-31报到；离职年月暂未确认';hualien.note='2017年本人访问一处说到花莲约一年后离开；同篇后文又称获知将转调云林后几天内辞职、未赴云林报到，时间线互有矛盾。没有找到花莲或云林的人事令，故不裁定离职日期与最后职称。';hualien.verification='本人访问自述；同篇叙述存在时间线矛盾，离职与调职暂未确认';}
 if(!p.workHistory.some(x=>x.sources?.includes('career-chang-votetw')&&x.role.includes('兼任副教授'))){
  p.workHistory.push({date:'任职起止暂未确认',organization:'国立云林科技大学科技法律研究所（第二手履历线索）',role:'兼任副教授（暂未确认）',note:'VoteTW页面列有此职，但没有校方聘任名册、课程资料或任职年份。已查候选人二手履历线索；校方人事及课程记录尚未查核，因此暂不视为确认任职。',sources:['career-chang-votetw'],verification:'二手人物页单一列载；校方任职资料尚未查核'});
 }
 const conf='career-chang-review-committee';
 if(!p.politicalHistory.some(x=>x.sources?.includes(conf)))p.politicalHistory.push({date:'2017-02-17公布委员；2017-08-12宣布退出',organization:'总统府司法改革国是会议第四分组',role:'分组委员（非民选公职）',note:'总统府成果报告名册列张静为第四分组委员；中央社同期报道记载他在总结会议宣布退出。这里记录的是参与公共制度会议，不当作政党职位或民选公职。',sources:[conf,'career-chang-review-exit'],verification:'总统府名册与同期通讯社报道交叉核对'});
 p.workResearch={checkedAt:'2026-10-05',note:'已查：官方连江庭法官历史名册、2017年本人履历访问转载、登记简介及VoteTW二手经历页。基隆与花莲任职日期、律师事务所/执业起止、云科大兼职身份与任期仍为“暂未确认”；花莲离职时间在同篇本人访问内前后矛盾。尚未查核：检察机关完整人事令与离职档案、律师公会历史执业登记/律所人事资料、云科大聘任和授课档案。后列渠道属于尚未查核，不代表已查无结果。',sources:['career-chang-interview','career-chang-judge','career-chang-votetw']};
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerChangReviewRound76={apply};}
})(typeof window==='undefined'?globalThis:window);
