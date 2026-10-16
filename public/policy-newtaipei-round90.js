(function(root){
'use strict';
const source={
 'policy-newtaipei-ai-corridor-20261013':{title:'中央社：苏巧慧与李四川谈淡海科学城与北部科学城',url:'https://www.cna.com.tw/news/aipl/202610130087.aspx',date:'2026-10-13',checkedAt:'2026-10-15',kind:'候选人现场回应报道；政见主张，不是已核定建设',publisherId:'cna',note:'中央社分别记录两位候选人对淡海科学城的说法；报道证明其在采访中的公开表态，不证明园区已核定、筹资或动工。'}
};
const rows={
 'su-c':[
  {topic:'economy',text:'主张把资金、人才和产业留在新北，并推动AI科技园区与产业链进驻淡海科学城。',date:'2026-10-13',sources:['policy-newtaipei-ai-corridor-20261013'],note:'中央社记录的公开主张；园区规模、用地、产业招商、预算与期程未在报道中完整说明。',type:'口头表述（现场报道摘要）',electionYear:2026},
  {topic:'transport',text:'反对将松山机场迁移；指出迁移会影响旅客出入便利及离岛居民就医、后送。',date:'2026-10-13',sources:['policy-newtaipei-ai-corridor-20261013'],note:'这是候选人对迁机场议题的公开立场摘要；尚无替代方案或完整交通、医疗影响评估。',type:'口头表述（现场报道摘要）',electionYear:2026}
 ],
 'lee':[
  {topic:'economy',text:'提出“北有科学城”规划，将淡海二、三期重新规划为可容纳高科技产业的区域，目标是增加淡水在地就业。',date:'2026-10-13',sources:['policy-newtaipei-ai-corridor-20261013'],note:'中央社记录的竞选主张；产业用地、既有规划衔接、执行权限、经费与时程仍待完整方案。',type:'口头表述（现场报道摘要）',electionYear:2026}
 ]
};
function apply(d){Object.assign(d.sources,source);for(const [id,items] of Object.entries(rows)){const p=d.people.find(x=>x.id===id);if(!p)continue;p.policies=p.policies||[];for(const item of items)if(!p.policies.some(x=>x.sources?.includes(item.sources[0])&&x.text===item.text))p.policies.push(item);}}
if(typeof module!=='undefined')module.exports={apply,source,rows};else{apply(root.ATLAS);root.AtlasPolicyNewTaipeiRound90={apply};}
})(typeof window==='undefined'?globalThis:window);
