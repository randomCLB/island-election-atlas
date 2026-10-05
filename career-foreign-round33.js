(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='lee');
  const source='career-lee-sso-dates-round33';
  d.sources[source]={title:'臺北市政府衛工處：歷任首長任期表',url:'https://www.sso.gov.taipei/cp.aspx?n=BB011F09759A001A',date:null,checkedAt:'2026-10-04',kind:'市府機關人事室公開名冊',publisherId:'official-tw',publisherName:'臺北市政府工務局衛生下水道工程處',note:'官方历任首长表列李四川到职民国91年7月16日、卸职民国95年2月27日；本站换算为公历。'};
  const x=p.workHistory.find(x=>x.organization==='台北市工务局卫生下水道工程处'&&x.role==='处长');
  if(x&&!x.sources.includes(source)){
    x.date='2002-07-16—2006-02-27';
    x.note='台北市政府原履历列有此职；市府卫工处历任首长表列明到职与卸职日期。政大图书馆官职资料库另将该职派任令日期记为2002-12-09，与名册到职日不同；尚未取得派令原件厘清，页面并列保留，不推断两日期关系。该任期不与新建工程处处长任期混为一谈，也不据旧职推定2026现职。';
    x.sources.push(source);
    x.verification='当事方履历与主管机关人事室历任首长名册交叉核对';
  }
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound33={apply};}
})(typeof window==='undefined'?globalThis:window);
