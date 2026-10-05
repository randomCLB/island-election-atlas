(function(root){
'use strict';
const sources={
 'policy-hung-fanglong-round44-dcard':{title:'Dcard：洪方隆署名的高雄城市自主资金与社福薪资方案',url:'https://www.dcard.tw/f/job/p/262214417',date:'2026-09-27（署名日期）',checkedAt:'2026-10-04',kind:'论坛用户转贴候选人署名文字；作者身份未核',publisherId:'other',publisherName:'Dcard用户转贴',note:'页面发帖账号显示为“Manager”，内文署“我是阿直：洪方隆／高雄市长候选人”及日期115.09.27。未确认账号归属、原始贴文或候选人官方渠道对应关系；以下只记录可见文字，属弱信源，不认证为候选人官方完整政见。'}
};
const rows=[
 {topic:'economy',text:'提出8年新增6,500亿元“城市自主资金”计划，声称资金不来自既有预算、基金或自主财源，并列出分年目标；主张不卖地、不借款、不增罚锾、不把中央补助计入，以公信用、契约、制度与民间资金创造资金。',date:'2026-09-27（署名日期）',sources:['policy-hung-fanglong-round44-dcard'],note:'候选人署名文字的论坛转贴，作者身份未核。原文没有列出可执行的融资契约、法源、风险分担、财政审查或第三方可行性评估；金额与财源机制仅作为其公开主张记录，不视为已落实的财政方案。',type:'候选人署名转贴；弱信源、方案待核',electionYear:2026},
 {topic:'labor',text:'提出以800亿元“低薪翻升”方案支持社工师、广义专业人才及提高薪资中位数，并以8年让社工师薪资追上新加坡为目标；贴文另列300亿、200亿、300亿三项配置。',date:'2026-09-27（署名日期）',sources:['policy-hung-fanglong-round44-dcard'],note:'数字与目标来自候选人署名的论坛转贴，作者身份未核。未见薪资基准、受益人数、定义口径、法定权限、年度支出及资金与前述6,500亿元计划之间的完整关系；不当作已有预算。',type:'候选人署名转贴；弱信源、方案待核',electionYear:2026},
 {topic:'accountability',text:'主张所有新增资金、契约与决策全程留痕、可追溯、不可无痕更改，并称所有参与者包括市长本人都应接受稽核、没有例外。',date:'2026-09-27（署名日期）',sources:['policy-hung-fanglong-round44-dcard'],note:'论坛用户转贴的候选人署名内容，作者身份未核；尚未说明审计机构、公开频率、采购与个资边界、违规责任或申诉程序。',type:'候选人署名转贴；弱信源、细节待补',electionYear:2026}
];
function apply(d){Object.assign(d.sources,sources);const p=d.people.find(x=>x.id==='hung-f');if(!p)return;p.policies=p.policies||[];for(const item of rows)if(!p.policies.some(x=>x.sources?.includes(item.sources[0])&&x.topic===item.topic))p.policies.push(item);}
if(typeof module!=='undefined')module.exports={apply,sources,rows};else{apply(root.ATLAS);root.AtlasPolicyHungFanglongRound44={apply};}
})(typeof window==='undefined'?globalThis:window);
