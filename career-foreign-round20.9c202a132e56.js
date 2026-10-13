(function(root){
'use strict';
function apply(d){
  d.sources['career-yeh-busker-cert']={
    title:'高雄市政府文化局：2014年第1次街头艺人标章认证通过名单',
    url:'https://khcc.kcg.gov.tw/PhotoData/PIC1030606.pdf',
    date:'2014（民国103年）',
    kind:'地方政府文化局认证通过名单',
    publisherId:'official-tw',
    checkedAt:'2026-10-04',
    note:'通过名册列有叶人文、艺名“叶雪”、表演艺术类及口琴吉他歌唱。证明其当年通过该项认证，不证明连续受雇、收入、当前资格或演出年限。'
  };
  d.sources['career-yeh-buskers-council-2019']={
    title:'台南市议会：街头艺人生存权益座谈会记录',
    url:'https://www.tncc.gov.tw/2019/page.asp?mainid=%7B5EB2A138-9497-48E3-AF88-28D84F8CE434%7D',
    date:'2019-03-06',
    kind:'地方议会官方活动记录',
    publisherId:'official-tw',
    checkedAt:'2026-10-04',
    note:'会议记录称叶人文为街头艺人代表及俱乐部总召，并记录其提出场地统筹、统一申请、安全保障及公开排程诉求。只证明该次公开职务与发言；没有证明该职务为受薪工作或完整任期。'
  };
  const p=d.people.find(x=>x.id==='yeh');
  const club=p.workHistory.find(x=>x.organization==='南部街头艺人表演俱乐部');
  club.date='至少至2019-03-06；起年与结束日未载';
  club.role='总召、街头艺人代表';
  club.note='2019年台南市议会座谈记录称其为街头艺人代表及俱乐部总召，并记录他向市府提出场地统筹、安全和公开排程建议。只确认该日的公开职务和发言；任职起止、是否受薪及建议后续落实情况均未核。';
  club.sources=[...new Set([...club.sources,'career-yeh-buskers-council-2019'])];
  club.verification='地方议会同期记录；只确认出席当日身份与发言';
  p.workHistory.push({
    date:'2014（民国103年）认证通过名单',
    organization:'高雄市街头艺人标章认证',
    role:'街头艺人；艺名“叶雪”，口琴、吉他歌唱',
    note:'高雄市政府文化局通过名册列有姓名、艺名、类别及演出项目。名册证明当年通过认证，不证明连续受雇、收入、当前资格或实际演出年限。',
    sources:['career-yeh-busker-cert'],
    verification:'地方政府公开通过名册；认证范围有限'
  });
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound20={apply};}
})(typeof window==='undefined'?globalThis:window);
