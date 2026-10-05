(function(root){
'use strict';
const ids={council:'policy-hsieh-childcare-council-round82',knews:'policy-hsieh-family-knews-round82',udn:'policy-hsieh-housing-udn-round82',taiwanNews:'policy-hsieh-elder-taiwannews-round82'};
const sources={
 [ids.council]:{title:'台南市議會：謝龍介表示當選後實施0至15歲每月補助5,000元',url:'https://www.tncc.gov.tw/page.asp?mainid=35845680-5306-4A5D-98E9-F002DB0EE071',date:'2026-05-21',checkedAt:'2026-10-05',kind:'台南市議會黨團記者會文字；候選人公開表述',publisherId:'official-tw',publisherName:'台南市議會（黨團記者會）',note:'議會頁記載謝龍介表示若當選台南市長，將實施0至15歲每月補助5,000元。頁面亦提到國民黨團提出的免費健保及托育補助；後兩者屬黨團政策，不在此當成他個人已承諾的市府措施。候選人關於中央財源與韓國生育率的說法是其主張，未作獨立驗證。'},
 [ids.knews]:{title:'知新聞：謝龍介「幸福3好禮」育兒與婚育宅主張',url:'https://www.knews.com.tw/news/1E28E1282CFDE4F2591E61CFAE27D074',date:'2026-02-23',checkedAt:'2026-10-05',kind:'具名記者報道；內容含台南市議會國民黨團提供資料',publisherId:'other',publisherName:'知新聞（永新媒體科技營運）',note:'具名記者王志弘報道並註明市議會國民黨團提供資料。月補助、婚育宅比例、三胎優先和租金折抵按報道歸於候選人；每年支出及新增財源數字是候選人估算，未當作本站核實的預算。媒體統獨傾向未獨立核定。'},
 [ids.udn]:{title:'聯合新聞網：謝龍介公布婚育宅坪數、單價與貸款構想',url:'https://house.udn.com/house/story/123591/9734236?from=udn_ch1025_editor',date:'2026-09-07',checkedAt:'2026-10-05',kind:'聯合新聞網綜合報道；候選人直播主張轉述',publisherId:'udn',publisherName:'聯合新聞網',note:'報道列出一胎25坪兩房、二胎35坪三房、三胎45坪四房，每坪15萬元、免自備款及政府擔保貸款。刊物媒體背景標籤依路透新聞學研究所2024年描述“傾統”；此標籤不是逐篇內容判定。土地位置、資格、建造成本、財源與政府擔保責任未由此報道證實。'},
 [ids.taiwanNews]:{title:'Taiwan News：謝龍介敬老卡與重陽敬老禮金主張',url:'https://www.taiwannews.com.tw/zh/news/6448307',date:'2026-09-29',checkedAt:'2026-10-05',kind:'編輯綜合中國時報、CTWant及候選人社群資料',publisherId:'other',publisherName:'Taiwan News（台灣英文新聞）',note:'本文明示綜合中國時報、CTWant及謝龍介社群資訊：敬老卡月額1,000元，可用於公車、計程車與醫療掛號；重陽禮金由1,500提高至3,000元。沒有逐一附上原始貼文；完整社福方案預告10月初公布，其後是否已公布及全文內容暫未確認。媒體傾向未獨立核定。'}
};
const added=[
 {topic:'childcare',text:'若當選台南市長，實施0至15歲兒童每月補助5,000元。',date:'2026-05-21',sources:[ids.council,ids.knews],note:'台南市議會黨團記者會頁面與具名報道均記載這項承諾。議會文字稱為當選後實施；每年支出及財源數字是候選人估算，本站未獨立重算。補助資格、排富方式與執行預算尚未公布於所查來源。',type:'競選政見（議會記者會與媒體報道）',electionYear:2026},
 {topic:'childcare',text:'另提0至6歲兒童健保免費、0至3歲尿布免費，以及6至18歲每月加碼2,500元。',date:'2026-09-07',sources:[ids.udn],note:'聯合新聞網將這些列為候選人育兒政策主張。免費健保與尿布措施的適用方式、現行制度如何銜接，以及6至18歲補助是否與0至15歲每月5,000元重疊，報道未說明；本站不推定可以累加。',type:'競選政見（直播報道轉述）',electionYear:2026},
 {topic:'housing',text:'將婚育宅比例由20%提高至40%，三胎家庭優先入住，並讓居住期間租金全額折抵購屋金。',date:'2026-02-23',sources:[ids.knews],note:'知新聞以具名記者報道並註明市議會國民黨團提供資料。適用社宅範圍、名額基數、租金折抵年限、購屋標的與財源仍未在該報道中交代。',type:'競選政見（媒體報道摘要）',electionYear:2026},
 {topic:'housing',text:'提出按子女數提供婚育宅坪數：一胎25坪兩房、二胎35坪三房、三胎45坪四房；每坪15萬元、免自備款並由政府擔保銀行貸款。',date:'2026-09-07',sources:[ids.udn],note:'依聯合新聞網對候選人直播的報道整理。報道所見方案未交代建地位置、興建或購屋來源、對象資格、資金成本與政府擔保的風險承擔；網友質疑不等於可行性審查結論。',type:'競選政見（直播報道轉述）',electionYear:2026},
 {topic:'health',text:'提出敬老卡每月補助1,000元，規劃可用於公車、計程車與醫療掛號；並將重陽敬老禮金由1,500元提高至3,000元。',date:'2026-09-29',sources:[ids.taiwanNews],note:'Taiwan News綜合中國時報、CTWant及候選人社群平台資訊，未逐項附原始貼文；資格、使用上限、預算來源與施行細節尚待完整方案。',type:'競選政見（綜合報道）',electionYear:2026}
];
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='hsieh');if(!p)return;
 p.policies=p.policies||[];
 for(const item of added)if(!p.policies.some(x=>x.text===item.text))p.policies.push({...item});
 const coverage='已查：台南市議會黨團記者會頁、知新聞具名報道、聯合新聞網婚育宅報道及Taiwan News綜合報道。資料明確記載育兒補助、婚育宅與長者福利主張；候選人估算的支出／財源沒有當成已核實數字。暫未確認：候選人預告10月初公布的完整社福政見是否已發布及其全文；婚育宅土地、預算與擔保風險等執行細節也未在所查來源中確認。尚未查核：候選人所有社群完整貼文、完整直播影片與逐字稿、政見發表會及辯論紀錄。';
 const refs=Object.values(ids);
 if(p.policyCoverage){
  if(!p.policyCoverage.sources?.includes(ids.council))p.policyCoverage.note+=' '+coverage;
  p.policyCoverage.sources=[...new Set([...(p.policyCoverage.sources||[]),...refs])];
 }else p.policyCoverage={checkedAt:'2026-10-05',note:coverage,sources:refs};
}
if(typeof module!=='undefined')module.exports={apply,added,sources,ids};
else{apply(root.ATLAS);root.AtlasPolicyHsiehRound82={apply};}
})(typeof window==='undefined'?globalThis:window);
