(function(root){
'use strict';
const ids={rumeiLog:'career-hsiao-rumei-log-round49',rumeiTerm:'career-hsiao-rumei-term-round49',xikouRoster:'career-hsiao-xikou-roster-round49'};
const sources={
 [ids.rumeiLog]:{title:'花莲县瑞美国小：2014年11月午餐厨房工作日志',url:'https://lunch.hlc.edu.tw/menu/showdiary_detail.asp?lunchdate=2014/11/6&sid=154651',date:'2014-11-06',checkedAt:'2026-10-04',kind:'县府学校午餐平台同期工作记录',publisherId:'official-tw',note:'同期日志署名“校长：萧文乾”，证明该日校方记录列其为瑞美国小校长；不能单独证明到任日。'},
 [ids.rumeiTerm]:{title:'花莲县政府：108学年度校长遴选结果函',url:'https://ws.hl.gov.tw/Download.ashx?icon=..pdf&n=5pWZ5a24LTE0NjU0Ny5wZGY%3D&u=LzAwMS9VcGxvYWQvNTExL3JlbGZpbGUvMjE1NDgvMTMwMTUwL2EzNDEyNDY1LTAzY2QtNDI2My1hNDk1LWU3YjczYWU0NzhmNy5wZGY%3D',date:'2019-07-24',checkedAt:'2026-10-04',kind:'县府正式函及校长遴选结果附件',publisherId:'official-tw',note:'县府函称瑞美国小萧文乾校长任期至2020-07-31，并列其留任至任满；没有列出该任期起始日。'},
 [ids.xikouRoster]:{title:'花莲县溪口国小：114学年度教育伙伴名册',url:'https://www.skps.hlc.edu.tw/modules/tadnews/page.php?ncsn=&nsn=136',date:'2025—2026学年度',checkedAt:'2026-10-04',kind:'学校官网学年度职员名册',publisherId:'official-tw',note:'该学年度名册列萧文乾为校长；不据此推定该学年度之后仍在任。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='hsiao-w');if(!p)return;
 const rumei=p.workHistory.find(x=>x.organization==='花莲县瑞美国民小学'&&x.role==='校长');
 if(rumei){
  rumei.date='2014-11-06已任；县府函列任期至2020-07-31；始任日未核';
  const newSources=[ids.rumeiLog,ids.rumeiTerm].filter(id=>!rumei.sources.includes(id));
  if(newSources.length){
   rumei.note+=' 瑞美国小2014-11-06午餐日志列其为校长；花莲县政府2019-07-24函称其校长任期至2020-07-31。两来源没有给出该任期起始日期。';
   rumei.sources.push(...newSources);
  }
  rumei.verification='学校同期记录确认2014在任；县府函确认任期终点；始任日未核';
 }
 const xikou=p.workHistory.find(x=>x.organization==='花莲县寿丰乡溪口国民小学'&&x.role==='校长');
 if(xikou){
  xikou.date='2020-08-16校方简介列任；2025—2026学年度名册仍列；后续任期未核';
  if(!xikou.sources.includes(ids.xikouRoster)){
   xikou.note+=' 溪口国小2020-08-16校长简介及114学年度教育伙伴名册均列萧文乾为校长；名册只覆盖该学年度，不据此推定2026-08以后仍在任或完整任期。';
   xikou.sources.push(ids.xikouRoster);
  }
  xikou.verification='学校官网两个时间点列载；完整任期与2026-08后现职未核';
 }
}
if(typeof module!=='undefined')module.exports={apply,ids,sources};else{apply(root.ATLAS);root.AtlasCareerHsiaoPrincipalDatesRound49={apply};}
})(typeof window==='undefined'?globalThis:window);
