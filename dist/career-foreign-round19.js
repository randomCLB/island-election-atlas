(function (root) {
'use strict';
const termRows = {
  'su-c': [['第9届立法委员', '2016-02-01—2020-01-31'], ['第10届立法委员', '2020-02-01—2024-01-31']],
  ho: [['第8届立法委员', '2012-02-01—2016-01-31'], ['第9届立法委员', '2016-02-01—2020-01-31'], ['第10届立法委员', '2020-02-01—2024-01-31']],
  johnny: [['第8届立法委员', '2012-02-01—2016-01-31'], ['第9届立法委员', '2016-02-01—2020-01-31'], ['第10届立法委员', '2020-02-01—2024-01-31']],
  'chen-t': [['第7届立法委员', '2008-02-01—2012-01-31'], ['第8届立法委员', '2012-02-01—2016-01-31'], ['第9届立法委员', '2016-02-01—2020-01-31'], ['第10届立法委员', '2020-02-01—2024-01-31']]
};
function apply(d) {
  d.sources['career-ly-terms'] = {
    title: '立法院：历届委员届期及任职资料',
    url: 'https://www.ly.gov.tw/Pages/List.aspx?nodeid=110',
    date: null,
    kind: '立法院官方历届委员名录与届期表',
    publisherId: 'official-tw',
    checkedAt: '2026-10-04',
    note: '各届任期起讫依立法院官方名录；候选人曾任哪些届次依各人立法院履历。合并前后仅拆分已列届次，不补写未列入的公职；候选人个人的离职、递补或提前离任另以个人履历为准。'
  };
  for (const [id, rows] of Object.entries(termRows)) {
    const person = d.people.find(p => p.id === id);
    const old = person.politicalHistory.find(x => x.role.includes('届立法委员') && x.role.includes('、') && !x.role.startsWith('第11届'));
    if (!old) continue;
    person.politicalHistory = person.politicalHistory.filter(x => x !== old);
    for (const [role, date] of rows) {
      person.politicalHistory.push({
        date,
        organization: '立法院',
        role,
        note: '个人届次见立法院委员履历；日期依立法院届期表。此为公职任期，不是受薪工作经历。',
        verification: '个人届次与官方届期分别核对',
        sources: [old.sources[0], 'career-ly-terms']
      });
    }
  }
}
const api = { apply, termRows };
if (typeof module !== 'undefined') module.exports = api;
else { api.apply(root.ATLAS); root.AtlasCareerForeignRound19 = api; }
})(typeof window === 'undefined' ? globalThis : window);
