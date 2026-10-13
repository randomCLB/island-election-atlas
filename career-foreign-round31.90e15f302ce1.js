(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='tang');
  const source='v5-tang-work-bulletin';
  d.sources[source]={title:'中选会：2022年台北市第8届市长选举公报（唐新民经历栏）',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/03%E7%9B%B4%E8%BD%84%E5%B8%82%E9%95%B7/111%E5%B9%B4/%E8%87%BA%E5%8C%97%E5%B8%82%E5%B8%82%E9%95%B7.pdf',date:'2022-11-26',checkedAt:'2026-10-04',kind:'官方选举公报；经历与个人资料由候选人填报',publisherId:'official-tw',publisherName:'台北市选举委员会／中央选举委员会',note:'公报首页说明个人资料依候选人填列，若不实由候选人自行负责。经历栏是自述，不代表中选会独立查证。'};
  if(p&&!p.workHistory.some(x=>x.sources?.includes(source))){
    p.workHistory.push({date:'2022年市长选举公报刊载；所述经历未载日期',organization:'新竹科学园区与台湾产业建设（候选人自述）',role:'自述为农业企业化、基础建设、产业自动化及“台湾智造2000”的缔造者',note:'中选会公报经历栏列出上述宏观主张，但没有具体雇主、岗位、受雇关系、项目名称或任职年月。页面仅记录为候选人自填说法，不能据此认定他创办或建设新竹科学园区；独立工作履历仍待补。',sources:[source],verification:'官方公报刊载候选人自述；内容未独立核实'});
    p.workResearch={...(p.workResearch||{}),checkedAt:'2026-10-04',note:'补入2022年官方选举公报经历栏的候选人自述。其具体工作单位、职位、项目和任职年月仍未取得独立可核资料；不把宏观自述写成已证实的雇佣经历。',sources:[...new Set([...(p.workResearch?.sources||[]),source])]};
  }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound31={apply};}
})(typeof window==='undefined'?globalThis:window);
