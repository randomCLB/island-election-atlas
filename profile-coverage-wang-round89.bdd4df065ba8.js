(function(root){
'use strict';
const schedule='profile-wang-cec-timetable-round89',portrait='profile-wang-photo-search-round89';
function apply(d){
 d.sources[schedule]={title:'中央選舉委員會：115年地方公職選舉工作日程',url:'https://www.cec.gov.tw/central/article/61722',date:'2026年',checkedAt:'2026-10-05',kind:'中央選舉委員會官方選務日程',publisherId:'official-tw',note:'日程列明11月12日公告直轄市長候選人名單，11月13日至27日辦理直轄市長公辦政見發表會。這是選務時間表，不證明任何候選人尚未在其他場合發言。'};
 d.sources[portrait]={title:'王肇民候選人照片定向檢索紀錄',url:'https://web.cec.gov.tw/khec/article/64686',date:'2026年9月4日登記資料；2026年10月5日查閱',checkedAt:'2026-10-05',kind:'候選人官方登記頁與定向網頁檢索紀錄',publisherId:'official-tw',note:'查閱高雄市選委會9月4日候選人登記情形頁，並以「王肇民／高雄市長／參選／登記／照片」組合檢索新聞與公開網頁；找到的資料可確認登記身分，但沒有找到可歸屬到本候選人的公開照片。未命中不證明照片不存在。完整候選人社群尚未逐項審閱。'};
 const p=d.people.find(x=>x.id==='wang');if(!p)return;
 p.policyCoverage={checkedAt:'2026-10-05',note:'已查：中央社登記人物資料、高雄市選委會9月4日登記情形、中選會選務日程、正見2026政見索引（查閱時列0項），並以候選人姓名搭配高雄市政、交通、居住、產業、政見等詞檢索可索引公開資料。現有登記與公司資料不等於市政主張。暂未确认：截至本次检索，尚未找到可直接归属王肇民、包含具体高雄市政措施的公开政见。尚未查核：个人社群完整贴文与影片、完整竞选活动、政见会或辩论逐字内容。中选会日程列11月12日公告直辖市长候选人名单、11月13日至27日办理公办政见发表会；届时应再补查官方公报与发言。',sources:['policy-wang-cna-profile-round75','policy-wang-cec-registration-round75','policy-wang-khec-page-round75','policy-wang-zhengjian-2026',schedule]};
 p.photoCoverage={checkedAt:'2026-10-05',label:'暂未确认',note:'已查：高雄市选委会公开登记页及候选人姓名搭配参选、登记、照片的公开网页检索；找到登记资料，尚未找到可归属此人的照片。尚未查核：候选人社群完整历史，以及官方选举公报照片；中选会日程列直辖市长候选人名单于11月12日公告，届时再核对。',sources:[portrait,'policy-wang-khec-page-round75',schedule]};
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasWangProfileCoverageRound89={apply};}
})(typeof window==='undefined'?globalThis:window);
