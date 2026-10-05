(function(root){
'use strict';
const sourceIds={database:'policy-taipei-ipdb-2026-round81',tang:'policy-tang-ipdb-2026-round81',bulletin:'policy-taipei-cec-bulletin-page-round81',attachment:'policy-taipei-cec-bulletin-file-round81'};
const sources={
 [sourceIds.database]:{title:'政。精。選：2026台北市长候选人资料库与政见收录状态',url:'https://www.ipdb.tw/?county=%E8%87%BA%E5%8C%97%E5%B8%82&race=mayor_cmu3owzwt0000hvcnq5nrdc8i&township=%E5%A4%A7%E5%AE%89%E5%8D%80&village=%E6%95%A6%E5%AE%89%E9%87%8C&year=2026',date:'2026-10-05查阅',kind:'第三方候选人资料库的收录状态',publisherName:'政。精。選独立资料库',checkedAt:'2026-10-05',note:'页面列出台北市长6名参选人，并说明本场市长政见尚未收录。该站自述政见会随选举公报公告陆续补上；这只证明该资料库的收录进度，不证明候选人未发表政见。'},
 [sourceIds.tang]:{title:'政。精。選：唐新民2026台北市长候选人页',url:'https://www.ipdb.tw/candidates/cmu3owzxr0004hvcnhrttcvdy',date:'2026届页面；2026-10-05查阅',kind:'第三方候选人资料库页面状态',publisherName:'政。精。選独立资料库',checkedAt:'2026-10-05',note:'页面列明2026届及唐新民资料，并写“本页学经历/政见尚未完成整理”。这是数据库页面的整理状态，不证明候选人没有政见。'},
 [sourceIds.bulletin]:{title:'台北市选举委员会：标题标示“第7届市长选举公报”的页面',url:'https://web.cec.gov.tw/mect/article/26184',date:'2026-10-05查阅',kind:'官方公告页；标题与附件内容不一致',publisherId:'official-tw',agencyName:'台北市选举委员会',checkedAt:'2026-10-05',note:'页面置于115年选举区并使用“第7届市长选举公报”标题，但下载附件实际为2018年公报。仅记录此页面的资料瑕疵，不据页面标题认定附件为2026资料。'},
 [sourceIds.attachment]:{title:'台北市选举委员会页面附件：实际为2018年公报',url:'https://web.cec.gov.tw/api/file/33282591-875b-4cd6-bffe-e8c26037f564.pdf',date:'2018-11-24投票之选举公报',kind:'官方历史选举公报；误附于当前标题页面',publisherId:'official-tw',agencyName:'台北市选举委员会',checkedAt:'2026-10-05',note:'PDF封面与正文标示民国107年，内容包括2018年参选人吴蕚洋、丁守中等；不是2026年台北市长候选人公报。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const note='已查：第三方“政。精。選”2026台北市长页面列出6位参选人，并注明本场市长政见尚未收录；唐新民个人页另标学经历/政见尚未完成整理。这是资料库收录进度，不证明候选人没有提出政见。另核对台北市选委会一条公报页面：页面标题指向115年选举，但所附PDF实际是2018年公报，不能作为本届政见依据。暂未确认：是否已在未被该资料库收录的渠道提出完整本届市政方案及各议题的具体措施。尚未查核：各团队全部社群账号、完整采访与政见发表会/辩论录像尚未逐项审阅。';
 for(const p of d.people.filter(x=>x.city==='taipei')){
  const ids=[sourceIds.database,sourceIds.bulletin,sourceIds.attachment];
  if(p.id==='tang')ids.push(sourceIds.tang);
  if(p.policyCoverage){
   if(!p.policyCoverage.sources?.includes(sourceIds.database))p.policyCoverage.note+=' 另查数据库与选委会页面：'+note;
   p.policyCoverage.sources=[...new Set([...(p.policyCoverage.sources||[]),...ids])];
  }else p.policyCoverage={checkedAt:'2026-10-05',note,sources:ids};
 }
}
if(typeof module!=='undefined')module.exports={apply,sources,sourceIds};
else{apply(root.ATLAS);root.AtlasPolicyTaipeiCoverageRound81={apply};}
})(typeof window==='undefined'?globalThis:window);
