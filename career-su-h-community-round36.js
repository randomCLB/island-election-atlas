(function(root){
'use strict';
const source={
  title:'中选会：苏辉湟2024年新北市第4选区立委候选人公报自填经历',
  url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/113%E5%B9%B4%E7%AC%AC11%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/03%E6%96%B0%E5%8C%97%E5%B8%82/%E7%AC%AC04%E9%81%B8%E8%88%89%E5%8D%80/%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1-%E7%AC%AC4%E9%81%B8%E8%88%89%E5%8D%80.pdf',
  date:'2024-01-13',
  kind:'官方选举公报中的候选人自填经历',
  publisherId:'official-tw',
  checkedAt:'2026-10-04',
  note:'公报逐字列出候选人填报的经历；只证明该经历曾公开申报，不是中选会核验或任职机构证明。公报没有给这些社团职务的起止年月。'
};
function apply(d){
  d.sources['career-su-h-community-round36']=source;
  const p=d.people.find(x=>x.id==='su-h');
  if(!p)return;
  const s=['career-su-h-community-round36'];
  for(const [organization,role,note] of [
    ['新北市立丹凤高中','家长委员','候选人自填履历列载该服务经历；任期、具体职责与学校记录未取得。'],
    ['新北市立金山高中','家长委员','候选人自填履历列载该服务经历；任期、具体职责与学校记录未取得。'],
    ['台湾国等社团','志工','候选人自填履历列载该服务经历；原文未逐一列出社团名称，也未提供任期或具体职责。']
  ])if(!p.workHistory.some(x=>x.sources?.includes(s[0])&&x.organization===organization))p.workHistory.push({date:'2024年公报列载；任期未载',organization,role,note,sources:s,verification:'官方公报刊载候选人自填资料；未作独立任职核实'});
  if(!p.politicalHistory.some(x=>x.sources?.includes(s[0])&&x.organization==='小英之友会'))p.politicalHistory.push({date:'长期；2024年公报列载，起止未载',organization:'小英之友会',role:'会长（候选人自填）',note:'公报原文称“长期担任小英之友会会长”。未取得组织名册或任免记录；此为社团职务，不写成公职或政党党职。',sources:s,verification:'官方公报刊载候选人自填资料；任期及组织记录未核'});
}
if(typeof module!=='undefined')module.exports={apply,source};
else{apply(root.ATLAS);root.AtlasCareerSuHCommunityRound36={apply};}
})(typeof window==='undefined'?globalThis:window);
