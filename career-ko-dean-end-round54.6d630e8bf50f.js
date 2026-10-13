(function(root){
'use strict';
const ids={last:'career-ko-tku-dean-2015-round54',successor:'career-ko-tku-dean-successor-2016-round54'};
const sources={
 [ids.last]:{title:'淡江時報：2015年暑期服務隊報導列柯志恩為學務長',url:'https://tkutimes.tku.edu.tw/dtl.aspx?no=32041',date:'2015-08-03',kind:'任職大學校報同期報導',publisherId:'other',publisherName:'淡江大學校報',checkedAt:'2026-10-04',note:'淡江校報報導103學年度暑期授旗活動時列柯志恩為學務長。可確認該報導所述時點的職稱，不能單獨確定完整任期。'},
 [ids.successor]:{title:'淡江時報：2016年新任學務長林俊宏專訪',url:'https://tkutimes.tku.edu.tw/dtl.aspx?no=33061',date:'2016-01-29',kind:'任職大學校報的人事交接報導',publisherId:'other',publisherName:'淡江大學校報',checkedAt:'2026-10-04',note:'報導介紹104學年度第二學期調整的人事，稱林俊宏為新任學務長、柯志恩為前任。報導沒有附正式任免命令或精確生效日。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='ko'),row=p?.workHistory.find(x=>x.organization==='淡江大学学生事务处'&&x.role==='学务长');
 if(!row)return;
 if(row.sources.includes(ids.last)&&row.sources.includes(ids.successor))return;
 row.date='2009-08-03交接接任；2015-08-03仍任；2016-01-29校報稱柯為前任並列林俊宏新任；確切卸任日未核';
 row.note+=' 淡江校報2015年暑期活動報導仍列柯志恩為學務長；2016年1月新任學務長專訪稱林俊宏為新任、柯為前任。兩個節點縮小任期範圍，但未取得正式卸任命令或實際生效日期。';
 row.sources=[...new Set([...row.sources,ids.last,ids.successor])];
 row.verification='大學校報交接報導補出在任與前任節點；精確卸任日未核';
}
if(typeof module!=='undefined')module.exports={apply,ids,sources};
else{apply(root.ATLAS);root.AtlasCareerKoDeanEndRound54={apply};}
})(typeof window==='undefined'?globalThis:window);
