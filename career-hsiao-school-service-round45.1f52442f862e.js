(function(root){
'use strict';
const ids={school:'career-hsiao-school-profile-round45',review:'career-hsiao-ndhu-review-round45'};
const sources={
 [ids.school]:{title:'花莲县寿丰乡溪口国小：校长室及萧文乾经历',url:'https://www.skps.hlc.edu.tw/modules/tadnews/page.php?ncsn=&nsn=17',date:'2020-08-16',checkedAt:'2026-10-04',kind:'学校官方网站的校长介绍与自列经历',publisherId:'official-tw',note:'校方页面列萧文乾为该校校长，并自列舞鹤、北林、佳民国小及花莲县教育处经历；页面未为这些岗位分别标任期。'},
 [ids.review]:{title:'国立东华大学：103年度评鉴记录萧文乾荣任瑞美国小校长',url:'https://rdoffice.ndhu.edu.tw/var/file/3/1003/img/3118/29.pdf',date:'2014学年度',checkedAt:'2026-10-04',kind:'大学官方评鉴文件；第142页',publisherId:'official-tw',note:'评鉴文件记载“103学年度荣任花莲县瑞美国民小学校长”；支持该学年度的校长任职节点，不给出完整起讫日。'}
};
const additions=[
 {date:'任职年月未载（2020-08-16校方简介列载）',organization:'花莲县舞鹤国民小学',role:'级任教师、出纳、会计',note:'溪口国小官方网站的校长经历栏列出这些岗位，但没有任职起止日期；不据此补出四年教师经历对应的学校或顺序。',sources:[ids.school],verification:'校方页面自列经历；年月未披露'},
 {date:'任职年月未载（2020-08-16校方简介列载）',organization:'花莲县北林国民小学',role:'教师、代理总务主任',note:'校方官方网站列出岗位，但未列任职年月；“代理”仅对应总务主任职务，不推定正式主任任命。',sources:[ids.school],verification:'校方页面自列经历；年月未披露'},
 {date:'任职年月未载（2020-08-16校方简介列载）',organization:'花莲县佳民国民小学',role:'级任教师、总务主任',note:'校方官方网站列出岗位，但未列任职年月；不把多个岗位解释为同时任职。',sources:[ids.school],verification:'校方页面自列经历；年月未披露'},
 {date:'任职年月未载（2020-08-16校方简介列载）',organization:'花莲县政府教育处国教科',role:'辅导员',note:'校方官方网站列出国教科辅导员经历，未说明任职起止与业务范围。',sources:[ids.school],verification:'校方页面自列经历；年月未披露'},
 {date:'103学年度（2014学年度）；完整任期未载',organization:'花莲县瑞美国民小学',role:'校长',note:'国立东华大学官方评鉴记录萧文乾“103学年度荣任”该校校长；未据此推定离任日期。',sources:[ids.review],verification:'大学官方评鉴记载单一任职节点'},
 {date:'2020-08-16校方页面列任；起讫未载',organization:'花莲县寿丰乡溪口国民小学',role:'校长',note:'该校官方网站“我们的校长”栏列萧文乾；页面发布时间为2020-08-16，未列任职起止。只证明校方该页当时如此列载，不能推定现职或完整任期。',sources:[ids.school],verification:'学校官方网站历史页面；仅核到页面刊载节点'}
];
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='hsiao-w');if(!p)return;
 p.workHistory=p.workHistory||[];
 for(const x of additions)if(!p.workHistory.some(y=>y.organization===x.organization&&y.role===x.role&&y.sources?.includes(x.sources[0])))p.workHistory.push(x);
 const note='校方履历补列舞鹤、北林、佳民国小、县教育处与瑞美／溪口校长经历；多数任期年月未载，不与本人简介所述“偏乡小学教师4年”重复累加。';
 p.careerNote=p.careerNote?`${p.careerNote} ${note}`:note;
}
if(typeof module!=='undefined')module.exports={apply,ids,sources,additions};else{apply(root.ATLAS);root.AtlasCareerHsiaoSchoolServiceRound45={apply};}
})(typeof window==='undefined'?globalThis:window);
