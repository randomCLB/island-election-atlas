(function(root){
'use strict';
function apply(d){
  const p=d.people.find(x=>x.id==='lee');
  const source='career-lee-sso-dates-round33';
  d.sources[source]={title:'臺北市政府衛工處：歷任首長任期表',url:'https://www.sso.gov.taipei/cp.aspx?n=BB011F09759A001A',date:null,checkedAt:'2026-10-04',kind:'市府機關人事室公開名冊',publisherId:'official-tw',publisherName:'臺北市政府工務局衛生下水道工程處',note:'官方历任首长表列李四川到职民国91年7月16日、卸职民国95年2月27日；本站换算为公历。'};
  const additions=[
    ['career-lee-kmt-appointed-round33',{title:'中央社：李四川接任国民党秘书长',url:'https://www.cna.com.tw/news/aipl/201501190116.aspx',date:'2015-01-19',kind:'具名报道：政党职务任命',publisherId:'cna',publisherName:'中央通讯社'},
      {date:'2015-01-19任命',organization:'中国国民党',role:'中央委员会秘书长',note:'中央社报道新任党主席朱立伦就职当日由李四川出任国民党秘书长；国民党官网当日亦列其获任。党务职务与政府公职分栏记录，本条只确认任命节点，不据此补出离任日。',sources:['career-lee-kmt-appointed-round33','career-lee-kmt-official-round33'],verification:'中央社报道与国民党官网任命消息相互核对'}],
    ['career-lee-newtaipei-return-round33',{title:'中央社：李四川回任新北市副市长并宣誓就职',url:'https://www.cna.com.tw/news/aloc/201607260156.aspx',date:'2016-07-26',kind:'具名报道：就职仪式',publisherId:'cna',publisherName:'中央通讯社'},
      {date:'2016-07-26宣誓就职',organization:'新北市政府',role:'副市长（回任）',note:'中央社报道李四川于新北市政会议宣誓就职；该报道确认回任节点，不单独证明卸任日期。',sources:['career-lee-newtaipei-return-round33'],verification:'具名同期报道记载宣誓就职'}],
    ['career-lee-kaohsiung-appointment-round33',{title:'中央社：韩国瑜证实李四川将出任高雄市副市长',url:'https://www.cna.com.tw/news/firstnews/201812150245.aspx',date:'2018-12-15',kind:'具名报道：市长当选人确认接任安排',publisherId:'cna',publisherName:'中央通讯社'},
      {date:'2018-12-15任命安排获确认',organization:'高雄市政府',role:'副市长人选（市长当选人确认）',note:'中央社报道高雄市长当选人韩國瑜确认邀请李四川出任副市长。这是接任安排被公开确认的日期，不把预定人事新闻当作实际就职日或完整任期。',sources:['career-lee-kaohsiung-appointment-round33'],verification:'市长当选人说法由中央社具名报道；实际就职日期未由本条来源证明'}],
    ['career-lee-taipei-departure-round33',{title:'中央社：台北市长批准李四川3月10日离职',url:'https://www.cna.com.tw/news/aipl/202603050050.aspx',date:'2026-03-05',kind:'具名报道：市长确认离职生效日',publisherId:'cna',publisherName:'中央通讯社'},
      {date:'2026-03-10离职生效',organization:'台北市政府',role:'副市长离职',note:'中央社报道台北市长蒋万安批准李四川于3月10日离职；页面记录批准的生效日期，不把2月底提出请辞的日期当作实际卸任日。',sources:['career-lee-taipei-departure-round33'],verification:'市长公开确认的离职生效日由中央社报道'}]
  ];
  d.sources['career-lee-kmt-official-round33']={title:'中国国民党：新任党主席提名李四川担任秘书长',url:'https://www1.kmt.org.tw/english/page.aspx?anum=15696&mnum=112&type=article',date:'2015-01-19',checkedAt:'2026-10-04',kind:'政党官网任命消息',publisherId:'party',publisherName:'中国国民党',note:'党方页面记载任命，不作为政府机关公职证明。'};
  for(const [id,meta,item] of additions){d.sources[id]={...meta,checkedAt:'2026-10-04'};if(!p.politicalHistory.some(x=>x.sources?.includes(id)))p.politicalHistory.push(item);}
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
