(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='su-h');
  const source='language-su-h-bulletin';
  if(p&&!p.politicalHistory.some(x=>x.sources?.includes(source)&&x.organization?.includes('新北市第4選舉區'))){
    p.politicalHistory.push({date:'2024-01-13投票',organization:'第11届立法委员选举·新北市第4选区',role:'无党籍候选人',note:'新北市选举委员会编印的候选人公报列其为该区候选人，号次3；公报只证明候选人身份及候选人自填资料，不证明职务经历已独立核验。本条不代填得票数或结果。',sources:[source],verification:'官方候选人公报；候选人自填资料明确标注'});
  }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound30={apply};}
})(typeof window==='undefined'?globalThis:window);
