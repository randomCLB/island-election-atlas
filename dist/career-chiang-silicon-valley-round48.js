(function(root){
'use strict';
const id='career-chiang-firms-20221119';
const source={title:'Taipei Times：蒋万安竞选资料中的美国律师经历与不同说法',url:'https://www.taipeitimes.com/News/taiwan/archives/2022/11/19/2003789232',date:'2022-11-19',checkedAt:'2026-10-04',kind:'媒体报道；转述竞选资料及质疑者说法',publisherId:'taipei-times',note:'报道转述蒋万安当时竞选简报与文宣称WSGR任职2006—2009、The Crone Law Group任职2009—2011；并记载赵怡翔、曹兴诚对雇主为Crone Rozynko及约2010年入职的说法。本文没有刊出雇佣合同或雇主人事档案，不能裁定实体名称、到离职日或争议指控。'};
function apply(d){
 const p=d.people.find(x=>x.id==='chiang');
 d.sources[id]=source;
 const wsgr=p.workHistory.find(x=>x.organization==='美国WSGR律师事务所');
 if(wsgr){wsgr.date='竞选资料称2006—2009；加州律师资格2007-12-11';if(!wsgr.sources.includes(id)){wsgr.sources.push(id);wsgr.note+=' 2022年竞选资料经媒体报道列任职年份为2006—2009；这不是雇主证明，不能据此确定实际到职或离职日。';}wsgr.verification='立法院履历、加州律师记录与竞选资料报道；雇佣起止未由雇主核实';}
 if(!p.workHistory.some(x=>x.sources?.includes(id)&&x.organization.startsWith('The Crone Law Group'))){p.workHistory.push({date:'竞选资料称2009—2011；另一说称2010-02加入；实际起止待核',organization:'The Crone Law Group（报道中的质疑者称Crone Rozynko）',role:'律师（竞选资料所列；法律雇佣关系未独立核实）',note:'Taipei Times转述竞选资料称他于2009—2011年在The Crone Law Group任律师；同篇报道引述质疑者称其在2010年加入规模较小的Crone Rozynko。媒体文章未附合同或雇主人事档案，无法裁定公司实体、入职日期、职级或离职日期。',sources:[id],verification:'同期媒体并列竞选资料与质疑者说法；雇主文件未取得'});}
}
const api={apply,source};if(typeof module!=='undefined')module.exports=api;else{apply(root.ATLAS);root.AtlasCareerChiangSiliconValleyRound48=api;}
})(typeof window==='undefined'?globalThis:window);
