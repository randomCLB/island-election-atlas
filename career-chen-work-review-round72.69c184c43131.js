(function(root){
'use strict';
function apply(d){
 const p=d.people.find(x=>x.id==='chen-t');if(!p)return;
 const sources=['four-ly-chen-t','career-chen-anchor-2025','career-chen-anchor-2008','career-chen-tv-timeline-round51'];
 p.workResearch={checkedAt:'2026-10-05',note:'已查：立法院第7、11届委员公开履历、本人接受TVBS专访、TVBS 2008年报道及太报人物回顾；这些来源均支持她曾任地方电视台记者／主播。暂未确认：电视台名称、正式雇主与实际任职起讫。媒体报道的前后叙述只能提供大致时间线，不能当作到职或离职证明。尚未完成查核：其他可能的受雇工作与原始人事资料；目前公开履历没有列出这些细节。',sources:[...new Set([...(p.workResearch?.sources||[]),...sources])]};
 const item=p.workHistory.find(x=>x.sources?.includes('career-chen-anchor-2025'));
 if(item&&!item.sources.includes('four-ly-chen-t'))item.sources.push('four-ly-chen-t');
}
if(typeof module!=='undefined')module.exports={apply};else{apply(root.ATLAS);root.AtlasChenWorkReviewRound72={apply};}
})(typeof window==='undefined'?globalThis:window);
