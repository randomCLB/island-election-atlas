(function(root){
'use strict';
function apply(d){
  const source='career-yeh-company-registry';
  d.sources[source]={title:'经济部商业发展署：叶雪创意环保科技有限公司公司变更登记清册',url:'https://serv.gcis.nat.gov.tw/pub/cmpy/reportAction.do?fileName=10903TNC.pdf&method=report&reportClass=cmpy&subPath=10903',date:'2020-03-12；并由2023-05-18变更登记复核',kind:'政府公司变更登记',publisherId:'official-tw',publisherName:'经济部商业发展署',checkedAt:'2026-10-04',note:'另一份2023-05台南公司变更登记清册同列叶人文为代表人：https://serv.gcis.nat.gov.tw/pub/cmpy/reportAction.do?fileName=11205TNC.pdf&method=report&reportClass=cmpy&subPath=11205。政府清册是代表人与营业项目的登记记录，不证明具体日常职责、持续经营或完整任职区间。'};
  const p=d.people.find(x=>x.id==='yeh');
  if(!p.workHistory.some(x=>x.sources?.includes(source)))p.workHistory.push({
    date:'2020-03-12、2023-05-18官方变更登记均列载；完整任期未核',
    organization:'葉雪創意環保科技有限公司',
    role:'公司登记代表人（经营职务细节未载）',
    note:'经济部公司变更登记清册两次列叶人文为代表人；2020年清册所列营业项目包括电脑设备安装、软件与电子设备批零。登记资料证明公司职务与申报项目，不证明其日常具体工作、实际营运或完整任职起止。2018年设立日期目前只见第三方登记汇整，未作为已核实任期起点。',
    sources:[source],
    verification:'两份政府登记清册核对到代表人；任期与实际经营情况未核'
  });
}
if(typeof module!=='undefined')module.exports={apply};
else{apply(root.ATLAS);root.AtlasCareerForeignRound25={apply};}
})(typeof window==='undefined'?globalThis:window);
