(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='lin-c');
  const source='v4-lin-bulletin';
  const additions=[
    {date:'民国76—86年；自述连续10年',organization:'全国健力竞赛',role:'连续冠军（候选人公报自述）',note:'林志成在2024年台北第5选区立委公报自填“76年至86年全国健力10年连霸冠军”。公报证明该履历由本人填报并公开，不等于赛事主办方核验；尚未找到逐届名册或奖项原件。',sources:[source],verification:'官方选举公报中的候选人自填竞技经历；赛事结果未独立核验'},
    {date:'民国76—91年；自述连续16年',organization:'全国健美竞赛',role:'连续冠军（候选人公报自述）',note:'林志成在2024年台北第5选区立委公报自填“76年至91年全国健美16年连霸冠军”。公报证明该履历由本人填报并公开，不等于赛事主办方核验；尚未找到逐届名册或奖项原件。',sources:[source],verification:'官方选举公报中的候选人自填竞技经历；赛事结果未独立核验'}
  ];
  for(const item of additions)if(!p.workHistory.some(x=>x.organization===item.organization&&x.role===item.role))p.workHistory.push(item);
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound34={apply};}
})(typeof window==='undefined'?globalThis:window);
