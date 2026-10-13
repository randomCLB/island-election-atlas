(function(root){
'use strict';
const sources={
 'policy-wang-cec-registration-round75':{title:'中选会：115年直辖市长候选人登记汇总表',url:'https://web.cec.gov.tw/api/file/bb9a8d7a-9b8a-41ec-8e23-33efd009385a.pdf',date:'2026-09-07',checkedAt:'2026-10-05',kind:'中央选举委员会官方候选人登记汇总表',publisherId:'official-tw',note:'汇总表列王肇民于2026-09-02在高雄市登记参选。该表只记登记资讯，不刊具体政见。'},
 'policy-wang-khec-page-round75':{title:'高雄市选举委员会：115年市长候选人登记情形公告',url:'https://web.cec.gov.tw/khec',date:'2026-09-04',checkedAt:'2026-10-05',kind:'地方选举委员会公告索引',publisherId:'official-tw',note:'官网公告候选人登记情形一览表；所见公告是登记清单，并非政见公报。查阅时未在该页面找到王肇民的本届政见公报链接。未找到不等于已证明公报不存在。'},
 'policy-wang-cna-profile-round75':{title:'中央社：2026九合一选举22县市长登记参选名单',url:'https://www.cna.com.tw/news/aipl/202609045002.aspx',date:'2026-09-04',publishedAt:'2026-09-04',updatedAt:'2026-09-19',checkedAt:'2026-10-05',kind:'中央社候选人登记报道与人物资料汇整',publisherId:'cna',note:'王肇民资料列生日1963-08-29、台北科技大学建筑学士及创党筹备经历；此为新闻汇整资料，不是中选会原始个人登记表。报道未载具体高雄市政措施。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='wang');if(!p)return;
 p.bio='1963-08-29出生（中央社人物资料）；国立台北科技大学建筑学士；先得月建设公司负责人；台湾一条心创党筹备处发起人；本届无党籍登记。';
 p.policyCoverage={checkedAt:'2026-10-05',note:'已查：中央社登记报道、中央选举委员会115年直辖市长候选人登记汇总表、高雄市选举委员会登记公告，以及正见2026政见索引；也按候选人姓名搭配高雄市政、交通、居住、产业等词检索可索引公开资料。已找到出生、学历、公司与创党筹备经历，但这些不是市政政见；中选会清单只证明登记，正见列0项只说明该库未收录。暂未确认：他是否在个人社媒、活动发言或其他平台提出过具体市政措施。尚未查核：个人社媒完整贴文／影片及完整竞选活动记录；高雄选委会所见公告页只有登记清单，本轮未找到本届政见公报，不能据此断言公报从未发布。',sources:['policy-wang-cna-profile-round75','policy-wang-cec-registration-round75','policy-wang-khec-page-round75','policy-wang-zhengjian-2026']};
}
if(typeof module!=='undefined')module.exports={apply,sources};else{apply(root.ATLAS);root.AtlasPolicyWangSearchRound75={apply};}
})(typeof window==='undefined'?globalThis:window);
