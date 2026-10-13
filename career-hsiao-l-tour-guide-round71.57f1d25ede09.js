(function(root){
'use strict';
const official='career-hsiao-l-cec-bulletin-2024',report='career-hsiao-l-tvbs-retirement-2024';
const sources={
 [official]:{title:'中选会：蕭燐洪2024年立委候选人公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/113%E5%B9%B4%E7%AC%AC11%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/06%E8%87%BA%E5%8D%97%E5%B8%82/%E7%AC%AC5%E9%81%B8%E8%88%89%E5%8D%80/%E8%87%BA%E5%8D%97%E5%B8%82%E7%AB%8B%E5%A7%94%E7%AC%AC5.6%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2024-01-13',checkedAt:'2026-10-05',kind:'中选会官方选举公报；候选人自填经历',publisherId:'official-tw',note:'经历栏由候选人填列；公报列“旅行社导游／领队”，不列旅行社名称或任职期间。用于记录其申报内容，不视为雇主或任职日期已独立核实。'},
 [report]:{title:'TVBS：蕭燐洪谈2024年“目标0票”参选与退休经历',url:'https://news.tvbs.com.tw/politics/2367819',date:'2024-01-15',checkedAt:'2026-10-05',kind:'媒体采访报道；转述候选人说法',publisherId:'tvbs',note:'TVBS报道转述蕭燐洪称，原在旅行社担任导游、领队，约十年前退休。任职起讫与旅行社名称未提供；“约十年前退休”是媒体转述的本人说法，不作为精确年份。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='hsiao-l');if(!p)return;
 p.workHistory=p.workHistory||[];
 if(!p.workHistory.some(x=>x.sources?.includes(official)))p.workHistory.push({date:'任职期间未载；2024年报道转述约十年前退休',organization:'旅行社（名称未载）',role:'导游／领队（候选人公报自填）',note:'中选会2024年选举公报列“旅行社导游／领队”；TVBS同月报道转述本人约十年前退休。公报没有任职年月与雇主名称，报道的退休时间也是约数，故这些细节暂未确认。',sources:[official,report],verification:'职业见候选人自填公报；任职年月及雇主暂未确认'});
 p.workResearch={checkedAt:'2026-10-05',note:'已查：中选会2024年候选人公报列旅行社导游／领队；TVBS同月采访报道转述其约十年前退休。暂未确认：旅行社名称、任职起讫及退休的具体年份。以上来源未提供这些字段；其他可能职业或雇佣记录尚未完成逐项查核。',sources:[...new Set([...(p.workResearch?.sources||[]),official,report])]};
 if(p.story&&!p.story.paragraphs.some(x=>x.sources?.includes(official)))p.story.paragraphs.push({text:'蕭燐洪的工作经历中，2024年中选会公报列有“旅行社导游／领队”；同月TVBS报道转述他约十年前退休。职业类别有公开记录，旅行社名称和任职年月仍暂未确认。',sources:[official,report]});
}
if(typeof module!=='undefined')module.exports={sources,apply};else{apply(root.ATLAS);root.AtlasHsiaoLTourGuideRound71={apply};}
})(typeof window==='undefined'?globalThis:window);
