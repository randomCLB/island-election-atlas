(function(root){
'use strict';
const sourceId='career-ko-tv-timeline-round58';
const source={
 [sourceId]:{
  title:'文化部影视及流行音乐产业局：77年广播电视金钟奖入围名单',
  url:'https://www.bamid.gov.tw/News_Content.aspx?n=3514&s=123821',
  date:'1988-04-01',
  kind:'政府官方节目类金钟入围名单',
  publisherId:'official-tw',
  publisherName:'文化部影视及流行音乐产业局',
  checkedAt:'2026-10-05',
  note:'名单把柯志恩、梁旅珠列为《世界真奇妙》教育文化节目主持人；此页是入围名单，不是获奖名单，也不提供两人的任职起止日期。'
 }
};
function apply(d){
 Object.assign(d.sources,source);
 const p=d.people.find(x=>x.id==='ko');if(!p)return;
 const item=p.workHistory.find(x=>x.organization==='《世界真奇妙》电视节目');if(!item)return;
 item.date='1988-04官方入围名单列名为主持人；任职起止未载';
 item.role='主持人（与梁旅珠共同主持）';
 item.note='淡江大学2009年校内人物资料列其曾主持该节目；文化部1988年官方入围名单也将柯志恩、梁旅珠列为《世界真奇妙》教育文化节目主持人。入围不等于获奖，名单不能确定节目实际任职的起止日期。';
 item.sources=item.sources||[];
 if(!item.sources.includes(sourceId))item.sources.push(sourceId);
 item.verification='大学资料与文化部官方入围名单交叉核对；任职起止及是否获奖不据此推定';
}
if(typeof module!=='undefined')module.exports={apply,sourceId,source};
else{apply(root.ATLAS);root.AtlasCareerKoTvTimelineRound58={apply};}
})(typeof window==='undefined'?globalThis:window);
