(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='hung-l');
  const source='career-hung-l-2024';
  if(!p.workHistory.some(x=>x.sources?.includes(source)&&x.organization==='恒顺村工程行'))p.workHistory.push({
    date:'2024年公报自述经营16年；准确起止未载',
    organization:'恒顺村工程行',
    role:'工程行经营经历（公报未明列职位）',
    note:'洪丽华2024年立委候选人公报自填“恒顺村工程行至今16年”。未将此约数换算为确切起始年份，也未以商号登记或税务资料交叉核实。',
    sources:[source],
    verification:'候选人自填；职位、登记状态与任期未核'
  });
  if(!p.workHistory.some(x=>x.sources?.includes(source)&&x.organization==='中港国际同济会'))p.workHistory.push({
    date:'2024年公报记载；任期未载',
    organization:'中港国际同济会／921赈灾义卖会',
    role:'副秘书长、赈灾义卖服务（社会服务，非受雇工作）',
    note:'公报将副秘书长职务与921赈灾义卖会并列记载；未提供任期、活动日期或薪酬资料，故列为社会服务经历，不视为受雇职位。',
    sources:[source],
    verification:'候选人自填；组织名册与活动记录未交叉核实'
  });
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound24={apply};}
})(typeof window==='undefined'?globalThis:window);
