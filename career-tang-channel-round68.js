(function(root){
'use strict';
const source='career-tang-channel-listing';
const pack={sources:{
  [source]:{title:'维基百科：唐新民条目（频道主持人线索）',url:'https://zh.wikipedia.org/wiki/唐新民',date:'2026-09-29',checkedAt:'2026-10-05',kind:'二手人物条目；非原始任职证明',publisherId:'community',note:'条目称唐新民主持网络频道《唐明皇战神烽火台》，并列出一个YouTube频道链接。条目没有注明主持起止或其依据；本次无法读取频道页面，也未核实频道视频与本人身份对应，因此只作待查线索。'}
}};
function apply(d){
  Object.assign(d.sources,pack.sources);
  const p=d.people.find(x=>x.id==='tang');if(!p)return;
  p.workHistory=p.workHistory||[];
  if(!p.workHistory.some(x=>x.sources?.includes(source)))p.workHistory.push({date:'二手条目列载于2022候选人经历；主持起止未载',organization:'网络频道《唐明皇战神烽火台》',role:'频道主持人（暂未确认）',note:'维基条目列为其主持频道，并链接一个YouTube频道。频道页面本次无法读取，未核对视频、账号归属或主持时期；因此保留为待确认线索，不视为已证实任职。',sources:[source],verification:'二手条目列载；频道内容与本人身份暂未确认'});
  p.workResearch={...(p.workResearch||{}),checkedAt:'2026-10-05',note:'暂未确认：2022官方选举公报的经历栏是候选人自述，未列具体雇主、岗位或年月；二手人物条目另称其主持《唐明皇战神烽火台》，但频道无法读取，归属与任期未核实。已查到这些线索，仍没有独立可核的具体受雇经历。',sources:[...new Set([...(p.workResearch?.sources||[]),source])]};
}
if(typeof module!=='undefined')module.exports={pack,apply};else{apply(root.ATLAS);root.AtlasTangChannelRound68={apply};}
})(typeof window==='undefined'?globalThis:window);
