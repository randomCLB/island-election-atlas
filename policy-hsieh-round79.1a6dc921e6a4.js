(function(root){
'use strict';
const source='policy-hsieh-tvbs-round79';
const sources={[source]:{title:'TVBS：謝龍介提出任期、首長作息與直播接聽陳情政見',url:'https://news.tvbs.com.tw/politics/3149473',date:'2026-03-12',kind:'记者会报道；候选人公开发言转述',publisherId:'tvbs',publisherName:'TVBS',checkedAt:'2026-10-05',note:'具名记者报道其公开提出的三项承诺。内容按报道归于候选人；首长作息安排和直播频率尚未形成可核验的预算、服务量或施政成效指标。'} };
const added=[
 {topic:'accountability',text:'提出公务员按正常时间于下午6时下班、由市长本人工作到晚上11时的首长作息承诺。',date:'2026-03-12',sources:[source],note:'TVBS报道把这项说法列为其三项政见之一；这是作息承诺，未说明各局处加班制度、劳动保障或市长工作时数如何核验。',type:'记者会政见（媒体转述）',electionYear:2026},
 {topic:'accountability',text:'承诺每周两次直播并开放市民Call in，接听陈情、听取意见。',date:'2026-03-12',sources:[source],note:'报道转述其承诺；未说明直播时段、案件转办方式、回应时限或完成率公开机制。',type:'记者会政见（媒体转述）',electionYear:2026}
];
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='hsieh');if(!p)return;
 p.policies=p.policies||[];
 const term=p.policies.find(x=>x.topic==='accountability'&&/不寻求连任/.test(x.text));
 if(term){term.date='2026-03-12；2026-09-01再度重申';term.sources=[...new Set([...term.sources,source])];term.note='3月政见报道与9月登记报道均记载其承诺只做一任、不寻求连任；报道能证明公开表达，不能代替法律约束或未来是否履行。';}
 for(const item of added)if(!p.policies.some(x=>x.sources?.includes(source)&&x.text===item.text))p.policies.push({...item});
}
if(typeof module!=='undefined')module.exports={apply,added,sources};
else{apply(root.ATLAS);root.AtlasPolicyHsiehRound79={apply};}
})(typeof window==='undefined'?globalThis:window);
