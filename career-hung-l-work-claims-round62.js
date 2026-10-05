(function(root){
'use strict';
function apply(d){
 const p=d.people.find(x=>x.id==='hung-l');if(!p)return;
 for(const id of ['career-hung-l-2018','career-hung-l-2024']){
  const source=d.sources[id];if(!source)continue;
  source.publisherId='official-tw';source.publisherName='台湾公部门资料';source.checkedAt='2026-10-05';
  source.kind='官方选举公报中的候选人自填履历';
  if(!source.note?.includes('候选人自填'))source.note=(source.note?source.note+' ':'')+'官方公报只证明该经历由候选人填报、刊载；不核验雇佣关系、营运登记或履历真实性。';
 }
 const row=p.workHistory.find(x=>x.organization==='欣雅莉服装行');if(!row)return;
 row.date='2018公报：民国74年起（同句称经营23年）；2024公报：民国87年起至今';
 row.note='两届公报均为候选人自填履历。2018年公报所列起年与同句“经营23年”的关系待核；2024年公报改列民国87年起。两版本不一致，未取得商号登记、税务或雇佣档案，不裁定哪一版正确，也不推定连续任期。';
 row.sources=[...new Set([...(row.sources||[]),'career-hung-l-2024'])];
 row.verification='两届官方选举公报中的候选人自填履历；日期冲突未能以雇主或登记档案核定';
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerHungLWorkClaimsRound62={apply};}
})(typeof window==='undefined'?globalThis:window);
