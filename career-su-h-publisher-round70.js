(function(root){
'use strict';
const source='career-su-h-isbn-publisher-2019';
const pack={sources:{
  [source]:{title:'国家图书馆：2019年10月新申请ISBN出版机构名录（蘇輝湟同名线索）',url:'https://isbn.ncl.edu.tw/FCKEDITOR_UploadFiles/1573549741.pdf',date:'2019-10',checkedAt:'2026-10-05',kind:'国家图书馆出版机构登记名录；第144项',publisherId:'ncl',note:'名录第144项列“蘇輝湟”，出版机构全称为“个人”。2024年新北市选举公报也列有同名候选人，但两份资料没有共同的唯一身份标识；名录不列出版物名称，故只作为可能同人的出版者线索，身份与实际出版活动均暂未确认。'}
}};
function apply(d){
  Object.assign(d.sources,pack.sources);
  const p=d.people.find(x=>x.id==='su-h');if(!p)return;
  p.workHistory=p.workHistory||[];
  if(!p.workHistory.some(x=>x.sources?.includes(source)))p.workHistory.push({date:'2019-10名录收录；实际登记及出版起止未载',organization:'个人出版者登记（名录列名“蘇輝湟”）',role:'出版者线索（同名身份暂未确认）',note:'国家图书馆新申请ISBN出版机构名录第144项把“蘇輝湟”列为“个人”。2024年选举公报也列有同名候选人，但两份资料没有共同的唯一身份标识，暂不能确认是同一人；名录也没有书名或出版工作记录。故仅保留为待核线索，不算已确认任职。',sources:[source,'language-su-h-bulletin'],verification:'国家图书馆名录一次列载；同名身份及实际出版活动暂未确认'});
  p.workResearch={checkedAt:'2026-10-05',note:'暂未确认：已查2024年候选人公报、2026年登记报道，并发现国家图书馆2019年ISBN名录中的同名个人出版者线索。公开记录没有共同身份标识或可确认的出版物；该线索是否属于候选人、其具体职业及受雇经历仍未确认。学校家长参与和志工经历另按公报记作非受雇服务。',sources:[...new Set([...(p.workResearch?.sources||[]),'language-su-h-bulletin','roster',source])]};
  if(p.story&&!p.story.paragraphs.some(x=>x.sources?.includes(source)))p.story.paragraphs.push({text:'职业资料仍不完整：2024年候选人公报列出家长参与与志工服务，但没有受雇履历。另有一条可能的出版线索——国家图书馆2019年ISBN名录把“蘇輝湟”列为个人出版者；因为名录与候选人资料缺少可比对的唯一身份标识，这条记录先留作待核线索。',sources:[source,'language-su-h-bulletin']});
}
if(typeof module!=='undefined')module.exports={pack,apply};else{apply(root.ATLAS);root.AtlasSuHPublisherRound70={apply};}
})(typeof window==='undefined'?globalThis:window);
