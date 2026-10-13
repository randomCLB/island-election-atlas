(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='wang');
  if(!p)return;
  const id='career-wang-trademark-round41';
  d.sources[id]={title:'先得月商标登记资料（转录经济部智慧财产局公开数据）',url:'https://www.findcompany.com.tw/trademark/02431973_113031911',date:'2025-01-16',kind:'二级商标资料页；转录智慧财产局公开资料',checkedAt:'2026-10-04',note:'页面列王肇民为“先得月”商标权人，申请日2024-05-10、注册日2025-01-16；指定服务含广告、营建代建、景观与室内工程、土木建筑修缮、防水电工程及电脑绘图。该页注明资料来源为经济部智慧财产局。本版未直接取得该商标的官方个案影像；登记及指定服务不证明实际承揽、施工或销售。',publisherId:'findcompany',dateLabel:'注册公告日期'};
  const text='另一条可查到的经营线索来自商标登记：公开资料转录的智慧财产局记录列王肇民为“先得月”商标权人，申请日为2024年5月10日、注册日为2025年1月16日；指定服务包括营建代建、景观与室内工程、土木建筑修缮、防水电工程、广告和电脑绘图。它说明他登记过这些服务项目，不证明实际承揽或完成工程；目前引用的是标明转录智慧财产局资料的二级网页，官方个案影像仍待取得。';
  if(!p.story.paragraphs.some(x=>x.sources?.includes(id)))p.story.paragraphs.push({text,sources:[id]});
  const item=p.workHistory.find(x=>x.sources?.includes('career-wang-company-register'));
  if(item){
    item.sources=item.sources||[];
    if(!item.sources.includes(id))item.sources.push(id);
    item.note=item.note.replace(/\s*商标登记另显示王肇民个人名义的“先得月”标识于2025年注册，指定服务包含营建与工程类项目；此为二级网页转录的智慧财产局资料，只能说明登记内容，不证明实际工程业绩。/g,'');
    item.verification=item.verification.replace(/；商标登记据二级转录，工程实绩未证/g,'');
  }
  p.gaps=p.gaps||[];
  const gap='先得月商标的指定服务已补；实际承揽工程、建案成果、从业起止及建筑师执照仍无可核原件。';
  if(!p.gaps.includes(gap))p.gaps.push(gap);
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerWangTrademarkRound41={apply};}
})(typeof window==='undefined'?globalThis:window);
