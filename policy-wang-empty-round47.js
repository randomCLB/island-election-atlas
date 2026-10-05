(function(root){
'use strict';
const sources={
 'policy-wang-zhengjian-2026':{title:'正见：2026县市长政见索引中的王肇民页面',url:'https://xn--2lw665d.tw/election/2026',date:null,checkedAt:'2026-10-04',kind:'民间政见索引',publisherId:'other',note:'查阅时索引列王肇民为0项政见。该站是民间整理平台，页面未提供完整搜索范围或候选人确认；“0项”仅说明该索引当时没有收录，不证明候选人从未提出主张。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='wang');
 p.policyCoverage={checkedAt:'2026-10-04',note:'截至查阅日，中央社登记报道列其学历与创党筹备经历；正见民间索引尚未收录具体政见，本版也未取得本届官方选举公报。现有材料不足以替他归纳市政主张；索引的0项不等于候选人没有政见。',sources:['roster','career-wang-registration-report','policy-wang-zhengjian-2026']};
}
const api={apply,sources};if(typeof module!=='undefined')module.exports=api;else{apply(root.ATLAS);root.AtlasPolicyWangEmptyRound47=api;}
})(typeof window==='undefined'?globalThis:window);
