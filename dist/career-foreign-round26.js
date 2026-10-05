(function(root){
'use strict';
function apply(d){
  const bulletin='career-su-h-2022-village-bulletin',result='career-su-h-2022-village-result';
  d.sources[bulletin]={title:'中选会：新北市新庄区第4届里长选举公报（兴汉里）',url:'https://eebulletin.cec.gov.tw/111/03%E6%96%B0%E5%8C%97%E5%B8%82/05%E6%9D%91%E9%87%8C%E9%95%B7/%E6%96%B0%E8%8E%8A%E5%8D%80/%E6%96%B0%E8%8E%8A%E5%8D%80%E6%96%87%E6%98%8E%E9%87%8C%E8%88%88%E6%BC%A2%E9%87%8C%E6%B5%B7%E5%B1%B1%E9%87%8C%E6%96%87%E8%A1%A1%E9%87%8C%E6%96%87%E8%81%96%E9%87%8C%E6%A6%AE%E5%92%8C%E9%87%8C%E5%BF%A0%E5%AD%9D%E9%87%8C%E5%85%A8%E6%B3%B0%E9%87%8C%E6%96%87%E5%BE%B7%E9%87%8C%E6%96%87%E5%85%A8%E5%AE%89%E9%87%8C%E9%87%8C%E9%95%B7.pdf',date:'2022-11-26選舉',kind:'官方選舉公報',publisherId:'official-tw',publisherName:'新北市選舉委員會／中央選舉委員會',checkedAt:'2026-10-04',note:'公報載明興漢里候選人蘇輝湟及其政見。候選人自填學經歷另以自述標示。'};
  d.sources[result]={title:'中選會：2022年新北市新莊區村里長選舉結果清冊',url:'https://web.cec.gov.tw/api/file/5f29afce-bd7f-4dc7-aa5a-242e11456b9e.pdf',date:'2022-11-26',kind:'官方開票結果',publisherId:'official-tw',publisherName:'中央選舉委員會',checkedAt:'2026-10-04',note:'結果表列蘇輝湟於興漢里得337票；當選結果清冊記為未當選。'};
  const p=d.people.find(x=>x.id==='su-h');
  if(!p.politicalHistory.some(x=>x.sources?.includes(result)))p.politicalHistory.push({date:'2022-11-26投票',organization:'新北市新莊區興漢里里長選舉',role:'無黨籍候選人；得337票，未當選',note:'新北市選舉公報列蘇輝湟為興漢里候選人；中選會結果清冊列337票及未當選。與2024年立委參選及2026年市長登記分開記錄。',sources:[bulletin,result],verification:'候選人身份、公報及得票結果均見官方選舉資料'});
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound26={apply};}
})(typeof window==='undefined'?globalThis:window);
