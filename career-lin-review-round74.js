(function(root){
'use strict';
const source={title:'中央研究院數位文化中心：1988年《民生報》中正杯健美賽剪報目錄',url:'https://catalog.digitalarchives.tw/item/00/5a/58/41.html',date:'1988-11-02',kind:'体育新闻剪报典藏目录；原报扫描未在目录页呈现',publisherId:'other',checkedAt:'2026-10-05',note:'中央研究院數位文化中心联合目录所收体育新闻剪报典藏条目，标示原报为《民生报》、日期1988-11-02，人物索引含“林志成”。目录不能证明同名人物就是候选人，也不证明参赛名次；原报页面需另行打开核对。'};
function apply(d){
 d.sources['career-lin-digital-archive-round74']=source;
 const p=d.people.find(x=>x.id==='lin-c');if(!p)return;
 const item={date:'1988-11-02（剪报日期）',organization:'《民生报》体育新闻剪报典藏：中正杯健美赛',role:'目录人物索引列有同名“林志成”（与候选人身份未核）',note:'中央研究院數位文化中心联合目录的体育新闻剪报条目列出原报《民生报》、日期及相关人物“林志成”，与候选人2024年公报自述的竞赛年代相交。当前可读页面是目录元数据，未提供可核名次的原报全文；也没有出生年月可确认同一人。因此只作为已查到的同名竞赛领域线索，不写成候选人已获奖或已确认参赛。',sources:['career-lin-digital-archive-round74','v4-lin-bulletin'],verification:'典藏目录确认同名线索；原报成绩与候选人身份暂未确认'};
 if(!p.workHistory.some(x=>x.sources?.includes('career-lin-digital-archive-round74')))p.workHistory.push(item);
 const row=p.workHistory.find(x=>x.sources?.includes('career-lin-coach-round66'));
 if(row&&!row.note.includes('45岁'))row.note+=' 该报道写其45岁；按2024年候选人公报自填出生日期1965-05-28计算，2011-09-06时为46岁，存在一岁差异，不能据年龄消除同名疑问。';
 p.workResearch={checkedAt:'2026-10-05',note:'已查：2024年中选会候选人公报中的竞赛经历自述、中华民国健美健身协会历任名册、中央研究院数位文化中心的1988年《民生报》剪报目录，以及2011年《苹果日报》报道的论坛保存页。暂未确认：剪报及报道中的同名林志成是否为本届候选人；2011报道称45岁，按公报自填生日推算当时46岁，相差一岁。代表队教练任命、连续夺冠的逐届成绩也没有原始名单或成绩册佐证。尚未查核：其他可能雇主、完整工作履历及其人事文件；本轮范围集中于候选人已公开的健美相关自述和可检索同名资料。',sources:[...new Set([...(p.workResearch?.sources||[]),'v4-lin-bulletin','v4-lin-association-history','career-lin-coach-round66','career-lin-digital-archive-round74'])]};
}
if(typeof module!=='undefined')module.exports={apply,source};else{apply(root.ATLAS);root.AtlasCareerLinReviewRound74={apply};}
})(typeof window==='undefined'?globalThis:window);
