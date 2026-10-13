(function(root){
'use strict';
const data={
 source:{title:'健身论坛转录《民生报》1989与1994年中正杯健美赛名次',url:'https://www.takesport.idv.tw/bbs/discuss/join.asp?ID=1820&db=media&pc=1',date:'2007-07-29（论坛转录）；报纸刊期1989-08-01、1994-09-06',kind:'健身论坛转载的旧报文字；身份及原件待核',publisherId:'other',checkedAt:'2026-10-04',note:'论坛用户分别转录《民生报》1989-08-01与1994-09-06的健美赛报道文字，记有“林志成”在轻重量级、中重量级列第一名。尚未取得报纸版面扫描件或独立赛事成绩册。候选人2024公报自述的健美连霸期间与这两年相交，但原报道没有出生年月、单位等可核身份字段；身份对应仅是线索，不能当作候选人获奖已获独立证实。'}
};
function apply(d){
 d.sources['career-lin-sports-archive-round42']=data.source;
 const p=d.people.find(x=>x.id==='lin-c');
 if(p&&!p.workHistory.some(x=>x.sources?.includes('career-lin-sports-archive-round42')))p.workHistory.push({date:'报纸刊期：1989-08-01、1994-09-06；原赛事日期未核',organization:'中正杯健美赛（论坛转录《民生报》报道）',role:'林志成名列轻重量级、中重量级第一（候选人身份待核）',note:'同一论坛用户转录两期《民生报》赛果，分别列“林志成”获轻重量级及中重量级第一。候选人2024年公报自述健美参赛年份覆盖这两届，因而有身份关联线索；但未见原报扫描件、官方成绩册或能将报道人物与候选人出生资料相连的字段。此条是低置信度的身份待核记录，不作为独立核实的获奖结论。',sources:['career-lin-sports-archive-round42','v4-lin-bulletin'],verification:'论坛转录旧报；候选人公报自述年份相符，身份及名次均待原件核验'});
}
if(typeof module!=='undefined')module.exports={apply,data};else{apply(root.ATLAS);root.AtlasLinSportsArchiveRound42={apply};}
})(typeof window==='undefined'?globalThis:window);
