(function(root){
'use strict';
const source='career-tang-education-review-2022';
const text='2022年台北市选委会会议记录显示，审查小组曾将唐新民申报的国外学历及国内学位证明列为待认证／补件事项，并要求于2022-10-21前补送。中选会同年公报后来刊载其柏克莱博士学历；但目前未找到补件或认证结果原件，因此公报刊载不能单独证明学位已通过后续核验，也不能据会议记录断定最终未通过。';
const pack={
  sources:{
    [source]:{title:'台北市选举委员会第351次委员会议纪录：唐新民学历补件审查',url:'https://web.cec.gov.tw/api/file/de826628-784e-49b8-911e-a9659710db5d.pdf',date:'2022-09-20',checkedAt:'2026-10-04',kind:'地方选举委员会会议纪录',publisherId:'official-tw',agencyName:'台北市选举委员会',note:'第4案称唐新民等四人的国外学历未经认证及国内学历学位证明文件待补，要求于2022-10-21前补送；通用处置规则见第2页。记录没有附唐新民个人补件或后续认证结果。'}
  }
};
function apply(d){
  Object.assign(d.sources,pack.sources);
  const p=d.people.find(x=>x.id==='tang');if(!p)return;
  if(!p.story.paragraphs.some(x=>x.sources?.includes(source)))p.story.paragraphs.push({text,sources:[source,'v5-tang-work-bulletin']});
  p.careerNote+=' 2022年选委会曾要求补送学历认证文件；后续认证结果未找到，不据此断言通过或未通过。';
}
if(typeof module!=='undefined')module.exports={pack,apply};else{root.AtlasTangEducationReview={pack,apply};apply(root.ATLAS);}
})(typeof window==='undefined'?globalThis:window);
