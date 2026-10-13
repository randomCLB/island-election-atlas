(function(root){
'use strict';
function apply(d){
  const id='policy-hung-f-return-kaohsiung-20260930';
  d.sources[id]={title:'Dcard：洪方隆署名的“高雄青年回家”十项方向（转贴）',url:'https://www.dcard.tw/f/kaohsiung/p/262230743/b/1',date:'2026-09-30（署名日期）',kind:'论坛用户转贴的候选人署名文字',publisherId:'other',publisherName:'Dcard用户转贴',checkedAt:'2026-10-04',note:'页面账号显示为“Manager”，正文末署“洪方隆”及日期115.09.30。原始发布账号与贴文截图未能核实，故按署名转贴收录并明确标注，不能视为已确认的候选人官方政见全文。'};
  const p=d.people.find(x=>x.id==='hung-f');
  const rows=[
    {topic:'economy',text:'提出“南北同薪”，并以世界百大制造、服务、金融、创投与AI服务进入高雄作为产业发展方向。',label:'就业与产业'},
    {topic:'education',text:'提出引入世界百大名校，并让世界百大硕博士人才留在高雄。',label:'教育与人才'},
    {topic:'exchange',text:'提出在高雄举办“十大世界论坛”，并写下“向新加坡看齐”。',label:'国际交流与城市参照'}
  ];
  for(const x of rows)if(!p.policies.some(y=>y.sources?.includes(id)&&y.topic===x.topic))p.policies.push({topic:x.topic,text:x.text,date:'2026-09-30（署名日期）',sources:[id],note:`Dcard用户转贴、正文署名洪方隆的方向性主张（${x.label}）；原始发布者身份未核，指标、伙伴名单、政策工具、预算及期程均未提供。“向新加坡看齐”只记录为城市参照表述，不扩写成对新加坡整体政治或外交立场。`,type:'候选人署名转贴；弱信源、细节待补',electionYear:2026});
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound27={apply};}
})(typeof window==='undefined'?globalThis:window);
