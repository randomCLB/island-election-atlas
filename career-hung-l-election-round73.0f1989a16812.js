(function(root){
'use strict';
const sources={
 'career-hung-l-2014-registration-round73':{title:'中选会：103年村里长选举候选人登记册及汇总表',url:'https://web.cec.gov.tw/api/file/33b69055-07a1-44dd-9bf3-776d5f737202.pdf',date:'2014-09-05',checkedAt:'2026-10-05',kind:'中央选举委员会官方候选人登记资料',publisherId:'official-tw',note:'登记汇总列台中市沙鹿区鹿寮里候选人洪丽华。该资料证明登记参选，不单独证明当选或任期。'},
 'career-hung-l-2014-result-round73':{title:'台湾选举资料库：洪丽华2014年鹿寮里里长选举结果',url:'https://votetw.com/data/candidate/%E6%B4%AA%E9%BA%97%E8%8F%AF',date:'2014-11-29',checkedAt:'2026-10-05',kind:'第三方台湾选举数据汇整',publisherId:'other',note:'平台列洪丽华于2014年鹿寮里里长选举得2,179票、51.13%并当选。属第三方资料库，不是中选会原始结果页；以2014候选人登记资料及2018、2024公报中的身份和经历交叉比对。'},
 'career-hung-l-2018-bulletin-round73':{title:'中选会：2018年台中市议员第2选区选举公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/05%E7%9B%B4%E8%BD%84%E5%B8%82%E8%AD%B0%E5%93%A1/107%E5%B9%B4/04%E8%87%BA%E4%B8%AD%E5%B8%82/%E8%87%BA%E4%B8%AD%E5%B8%82%E7%AC%AC02%E9%81%B8%E5%8D%80A.pdf',date:'2018-11-24',checkedAt:'2026-10-05',kind:'中选会官方选举公报；候选人自填履历',publisherId:'official-tw',note:'公报列洪丽华为台中市第2选区市议员候选人，经历栏自称当时为鹿寮里里长。公报证明参选及刊载内容，不核验履历真实性或选举结果。'},
 'career-hung-l-2018-result-round73':{title:'台湾选举资料库：洪丽华2018年台中市议员选举结果',url:'https://votetw.com/data/election/20181101K2B2?%E7%9C%81%E5%B8%82=66&%E9%81%B8%E5%8D%80=02&%E9%84%89%E9%8E%AE%E5%B8%82%E5%8D%80=130',date:'2018-11-24',checkedAt:'2026-10-05',kind:'第三方台湾选举数据汇整',publisherId:'other',note:'平台列洪丽华得1,043票、0.82%，未当选。属第三方数据汇整；中选会公报独立确认她参加该选举，但本条结果尚未在中选会原始票表逐项复核。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='hung-l');if(!p)return;
 const village=p.politicalHistory.find(x=>x.organization==='台中市沙鹿区鹿寮里'&&x.role==='里长');
 if(village){
  village.date='2014年参选并当选；2018年公报列为现任；完整任期起迄暂未确认';
  village.note='中选会2014年登记资料确认洪丽华登记参选；第三方台湾选举资料库列其当选。2018年中选会市议员选举公报又将她列为现任鹿寮里里长，2024年公报称曾任。里长完整任期的开始与结束日期，暂未从任免或交接记录确认。';
  village.sources=[...new Set([...(village.sources||[]),'career-hung-l-2014-registration-round73','career-hung-l-2014-result-round73','career-hung-l-2018-bulletin-round73','career-hung-l-2024'])];
  village.verification='参选与2018年现任身份有中选会公报佐证；当选来自第三方选举数据库；任期起迄暂未确认';
 }
 p.politicalHistory=p.politicalHistory.filter(x=>!(x!==village&&x.organization==='台中市沙鹿区鹿寮里'&&x.role==='里长'));
 if(!p.politicalHistory.some(x=>x.sources?.includes('career-hung-l-2018-result-round73')))p.politicalHistory.push({date:'2018-11-24参选；未当选',organization:'台中市议会第3届议员选举·第2选区',role:'无党籍候选人；得1,043票（0.82%）',note:'中选会选举公报列洪丽华为候选人；第三方台湾选举资料库列1,043票、0.82%，未当选。票数与结果尚未用中选会原始票表逐项复核。',sources:['career-hung-l-2018-bulletin-round73','career-hung-l-2018-result-round73'],verification:'候选人身份有中选会公报佐证；票数来自第三方数据库，官方原始票表尚未查核'});
}
if(typeof module!=='undefined')module.exports={apply,sources};else{apply(root.ATLAS);root.AtlasHungLElectionRound73={apply};}
})(typeof window==='undefined'?globalThis:window);
