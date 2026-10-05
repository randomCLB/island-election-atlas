(function(root){
'use strict';
const id='career-tang-host-wikipedia-round83';
const source={
 [id]:{title:'维基百科：2022年直辖市长选举唐新民候选人经历条目',url:'https://zh.wikipedia.org/wiki/2022%E5%B9%B4%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E7%9B%B4%E8%BD%84%E5%B8%82%E9%95%B7%E5%8F%8A%E7%B8%A3%E5%B8%82%E9%95%B7%E9%81%B8%E8%88%89',date:'2022年选举资料；2026-10-05查阅',checkedAt:'2026-10-05',kind:'可编辑百科的二手履历线索',publisherId:'other',note:'条目将唐新民列为网络频道《唐明皇战神烽火台》主持人，但频道名称链接为红链（页面不存在），未提供独立出处。2022年台北选举公报及2026年中央社登记简历均未确认此职。仅作待核线索，不视为已确认任职。'}
};
function apply(d){
 Object.assign(d.sources,source);
 const p=d.people.find(x=>x.id==='tang');if(!p)return;
 p.workHistory=p.workHistory||[];
 const evidence=['career-tang-host-wikipedia-round83','v4-tang-bulletin','roster'];
 if(!p.workHistory.some(x=>x.sources?.includes(id)))p.workHistory.push({
  date:'任职期间未载',
  organization:'网络频道《唐明皇战神烽火台》（所引链接为红链）',
  role:'主持人（百科线索，暂未确认）',
  note:'2022年选举条目的候选人经历栏称其为该频道主持人；该条目所连频道页面已不存在，选举公报与2026年登记报道没有印证此职。按待核线索展示，不据此认定存在任职关系。',
  sources:evidence,
  verification:'二手百科单一线索；原始频道与任职记录未找到'
 });
 p.careerNote='目前仅有一条二手频道主持人线索，尚不能确认雇主或任职关系；官方选举资料列出的自述内容不等同于可核实的工作岗位。';
 p.workResearch={
  checkedAt:'2026-10-05',
  note:'已查：中央社2026登记简历与台北市选委会2022选举公报；两者提供候选人自述资料，但没有列出可核实的雇主、岗位起止。维基百科2022选举条目另称他主持网络频道，所引频道链接为红链，且没有独立佐证。暂未确认：该主持人经历是否属实、频道运营主体及任职时间；其他雇主和工作岗位也未能从已查资料确认。尚未查核：该频道历史视频／账号存档、相关商业登记和完整私人雇佣记录。',
  sources:evidence
 };
}
if(typeof module!=='undefined')module.exports={apply,source,id};
else{apply(root.ATLAS);root.AtlasCareerTangWorkRound83={apply};}
})(typeof window==='undefined'?globalThis:window);
