(function(root){
'use strict';
const sourceId='career-kuo-service-span-round56';
const source={
 [sourceId]:{
  title:'Newtalk：郭璽登记参选台北市长时的军旅经历回顾',
  url:'https://newtalk.tw/news/view/2026-08-31/1056852',
  date:'2026-08-31',
  kind:'新闻人物经历回顾；未附军方人事原件',
  publisherId:'newtalk',
  checkedAt:'2026-10-05',
  note:'报道列郭璽为海军官校69年班、1997年以海军上校退役，并概述中校参谋及军事采购局上校处长经历。年份来自媒体回顾，尚未取得军方人事命令或退伍令。'
 }
};
function apply(d){
 Object.assign(d.sources,source);
 const p=d.people.find(x=>x.id==='kuo');if(!p)return;
 p.workHistory=p.workHistory||[];
 if(p.workHistory.some(x=>x.sources?.includes(sourceId)))return;
 p.workHistory.push({
  date:'1980年海军官校69年班毕业；1997年以海军上校退役',
  organization:'海军／国防部军事采购局',
  role:'军旅总跨度；另历任中校参谋、上校处长',
  note:'Newtalk人物经历回顾给出毕业班别与退役年份，也列出武器系统获得管理室中校参谋、军事采购局上校处长。两个具体职务各自的起止年月仍未披露，不据总跨度分配任期；退役军阶在部分来源中有不同写法，本站采用本条报道所载上校并标明二手来源。',
  sources:[sourceId,'t-kuo-register'],
  verification:'新闻回顾交叉核对；军方人事原件未取得'
 });
}
if(typeof module!=='undefined')module.exports={apply,sourceId,source};
else{apply(root.ATLAS);root.AtlasCareerKuoServiceSpanRound56={apply};}
})(typeof window==='undefined'?globalThis:window);
