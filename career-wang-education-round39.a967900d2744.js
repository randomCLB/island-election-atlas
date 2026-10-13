(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='wang');
  if(!p)return;
  const id='career-wang-education-round39';
  d.sources[id]={title:'中央社：王肇民登记参选资料所列学历',url:'https://www.cna.com.tw/news/aipl/202609045002.aspx',date:'2026-09-04',kind:'县市长登记参选人资料报道',publisherId:'cna',checkedAt:'2026-10-04',note:'报道列王肇民学历为国立台北科技大学建筑学士。本版未取得学位证书或学校学籍资料，不据此推断建筑师执照或建筑师任职经历。'};
  p.bio='国立台北科技大学建筑学士；先得月建设公司负责人；台湾一条心创党筹备处发起人；本届以无党籍登记。';
  if(!p.story.paragraphs.some(x=>x.sources?.includes(id)))p.story.paragraphs.push({text:'中央社登记参选资料列王肇民学历为国立台北科技大学建筑学士。现有资料能补上教育背景，但没有学籍或专业执照记录，因此不把建筑学历延伸写成建筑师资格或实际建筑项目经历。',sources:[id]});
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerWangEducationRound39={apply};}
})(typeof window==='undefined'?globalThis:window);
