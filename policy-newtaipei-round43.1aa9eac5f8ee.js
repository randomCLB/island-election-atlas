(function(root){
'use strict';
const source={
 'policy-newtaipei-round43-su':{title:'Newtalk：苏巧慧儿童友善与幼儿照护政见',url:'https://newtalk.tw/news/view/2026-10-03/1063411',date:'2026-10-03',checkedAt:'2026-10-04',kind:'现场采访报道；候选人公开说明，非政策执行记录',publisherId:'newtalk',note:'报道记者记录苏巧慧在公开活动中的主张；此来源支持“候选人说过”，不证明政策已预算、核定或施行。'},
 'policy-newtaipei-round43-lee':{title:'中央社：李四川提出新北交通建设政见',url:'https://www.cna.com.tw/news/aloc/202610030114.aspx',date:'2026-10-03',checkedAt:'2026-10-04',kind:'现场采访报道；候选人公开说明，非政策执行记录',publisherId:'cna',note:'报道转述李四川在竞选活动中的政见；所列捷运、轻轨及迁校均为主张或推动方向，未核实工程核定、经费或期程。'}
};
const rows={
 'su-c':[
  {topic:'health',text:'提出0至6岁儿童免门诊与住院部分负担，并主张幼儿免费接种肠病毒及轮状病毒疫苗。',date:'2026-10-03',sources:['policy-newtaipei-round43-su'],note:'报道记录候选人提出的福利主张；适用对象、经费、与既有补助的衔接方式尚未见完整方案，未当作现行政策。',type:'竞选主张（现场报道摘要）',electionYear:2026},
  {topic:'childcare',text:'规划夜间托育及临时托育查询平台，协助家长寻找非固定时段的照护服务。',date:'2026-10-03',sources:['policy-newtaipei-round43-su'],note:'报道摘要；服务地区、供给量、资格与平台上线期程尚未公开，不代表托育名额已增加。',type:'竞选主张（现场报道摘要）',electionYear:2026}
 ],
 'lee':[
  {topic:'transport',text:'提出大汉溪捷运纵贯线，并推动淡水、八里、林口轻轨串联，争取接驳桃园捷运。',date:'2026-10-03',sources:['policy-newtaipei-round43-lee'],note:'候选人提出的区域交通方向；路线、站点、跨县市协商、经费及建设期程尚未核定，不能写成已批准工程。',type:'竞选主张（现场报道摘要）',electionYear:2026},
  {topic:'education',text:'提出推动八里国中迁校，并兴建八里国民运动中心。',date:'2026-10-03',sources:['policy-newtaipei-round43-lee'],note:'报道记录其在地方竞选活动中的承诺；校地、主管机关、经费与时程仍待完整方案。',type:'竞选主张（现场报道摘要）',electionYear:2026}
 ]
};
function apply(d){Object.assign(d.sources,source);for(const [id,items] of Object.entries(rows)){const p=d.people.find(x=>x.id===id);if(!p)continue;p.policies=p.policies||[];for(const item of items)if(!p.policies.some(x=>x.sources?.includes(item.sources[0])&&x.text===item.text))p.policies.push(item);}}
if(typeof module!=='undefined')module.exports={apply,source,rows};else{apply(root.ATLAS);root.AtlasPolicyNewTaipeiRound43={apply};}
})(typeof window==='undefined'?globalThis:window);
