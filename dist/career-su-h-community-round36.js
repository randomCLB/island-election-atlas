(function(root){
'use strict';
function apply(d){
  const source='language-su-h-bulletin',record=d.sources[source];
  if(record){record.kind='官方公报中的候选人自填政见与经历';record.note='公报中的个人经历与政见由候选人自填；只证明曾公开申报，不是中选会核验或任职机构证明。';}
  const p=d.people.find(x=>x.id==='su-h');
  if(!p)return;
  const parents=p.workHistory.find(x=>x.sources?.includes(source)&&x.role.includes('家长委员'));
  if(parents){parents.note='2024年公报分别列出新北市立丹凤高中、金山高中家长委员；属于家长参与学校事务，不作为学校受薪教师或行政职。公报未载任期。';parents.verification='候选人公报自填；非任职机构证明';}
  const volunteer=p.workHistory.find(x=>x.sources?.includes(source)&&x.organization==='台湾国等社团');
  if(volunteer){volunteer.note='候选人自填公报列载志愿服务；“台湾国等社团”原文未逐一列出组织，任期和具体职责未载。参与社团不自动等于认同其在每个议题上的所有观点。';volunteer.verification='候选人自填；未独立核实志工服务';}
  if(!p.politicalHistory.some(x=>x.sources?.includes(source)&&x.organization==='小英之友会'))p.politicalHistory.push({date:'长期；2024年公报列载，起止未载',organization:'小英之友会',role:'会长（候选人自填）',note:'公报原文称“长期担任小英之友会会长”。未取得组织名册或任免记录；此为社团职务，不写成公职或政党党职。',sources:[source],verification:'官方公报刊载候选人自填资料；任期及组织记录未核'});
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerSuHCommunityRound36={apply};}
})(typeof window==='undefined'?globalThis:window);
