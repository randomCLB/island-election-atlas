(function (root) {
'use strict';
const records = typeof module === 'undefined' ? root.CountyRecords : require('./county-records.js');

function regularResult(county, election) {
  const rerun = county.id === 'chiayi-city' && election.year === 2022;
  return {
    city: county.id, year: election.year, area: election.area, complete: true, rows: election.rows,
    eligibleVoters: election.eligible, validVotes: election.valid, voters: election.voted,
    turnout: 100 * election.voted / election.eligible,
    scope: election.area + '全境 · ' + election.rows.length + '名候选人全数计入',
    sources: rerun ? ['map-chiayi-2022', 'county-chiayi-redo', 'county-chiayi-turnout'] : ['county-votes']
  };
}

function candidate(county, row) {
  const role = [row.work, row.office].filter(Boolean).join('；');
  const profile = {
    id: county.id + '-' + row.number, city: county.id, name: row.name, party: row.party,
    bio: role || (row.education ? '登记期资料载学历为' + row.education + '。' : '登记资料确认姓名与参选身份。'),
    source: role || row.education ? 'county-bio' : county.registerSource,
    evidence: row.evidence || [], controversies: [], policies: row.policies || [], countyBrief: row,
    policyCoverage: row.policyReview ? {note: row.policyReview, sources: ['county-policy-index-'+county.id,county.registerSource]} : null,
    photoCoverage: {label: '暂未确认', note: '已核对登记名册和立法院第10、11届肖像资料，本次未收录可用图像。', sources: [county.registerSource]}
  };
  if (row.portrait) {
    profile.photo = {url: row.portrait, source: row.portraitSource, credit: '立法院',
      capturedAt: '第' + row.term + '届委员名录，拍摄日未载', note: '任内公开肖像，供人物识别。'};
  }
  return profile;
}

function apply(d) {
  Object.assign(d.sources, records.sources);
  d.counties = Object.fromEntries(records.counties.map(c => [c.id, c]));
  const previous = new Map(d.cities.map(c => [c.id, c]));
  d.cities = records.counties.map((c, i) => ({
    ...previous.get(c.id), id: c.id, name: previous.get(c.id)?.name || c.name, fullName: c.name,
    en: c.en, center: previous.get(c.id)?.center || c.center, region: c.region,
    index: String(i + 1).padStart(2, '0'), caption: c.place,
    history: previous.get(c.id)?.history || c.place
  }));
  for (const c of records.counties) {
    for (const row of c.ballot) {
      let person = d.people.find(p => p.name === row.name && p.city === c.id);
      if (!person) { person = candidate(c, row); d.people.push(person); }
      person.ballotNumber = row.number;
      person.searchName = row.searchName;
      person.registration = row.registered;
      person.status = '2026-10-16 资格审定通过';
    }
    for (const row of c.history) {
      const prior = d.elections.find(e => e.city === c.id && e.year === row.year);
      const election = regularResult(c, row);
      if (prior) {
        // Keep Taipei's court recount and the dated editorial annotations.
        if (c.id !== 'taipei' || row.year !== 2018) {
          prior.validVotes = row.valid; prior.voters = row.voted; prior.eligibleVoters = row.eligible;
          prior.turnout = election.turnout;
        }
        prior.area = row.area;
      } else d.elections.push(election);
    }
    const last = c.history.find(r => r.year === 2022);
    if (!d.mapBaseline[c.id]) d.mapBaseline[c.id] = {
      name: last.rows[0][0], party: last.rows[0][1], votes: last.rows[0][2],
      date: '2022-11-26', source: 'county-votes'
    };
  }
  d.people = d.cities.flatMap(c => d.people.filter(p => p.city === c.id).sort((a,b) => a.ballotNumber - b.ballotNumber));
}

const api = {apply, regularResult};
if (typeof module !== 'undefined') module.exports = api;
else { root.AtlasCountyModel = api; apply(root.ATLAS); }
})(typeof window === 'undefined' ? globalThis : window);
