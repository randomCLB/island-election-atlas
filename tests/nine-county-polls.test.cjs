'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const M=require('../public/election-map.js'),pack=require('../public/election-map-data.js').pack;
const d=structuredClone(require('../public/data.js'));
for(const s of ['taipei-research','taipei-profile-data','four-city-data','policy-data','election-map-data','county-model'])require('../public/'+s+'.js').apply(d);
const now=new Date('2026-11-18T02:00:00+08:00'),byId=Object.fromEntries(d.reportedPolls.map(p=>[p.id,p]));

test('all nine previously insufficient counties have dated, source-linked search outcomes',()=>{
 const ids=['hsinchu-county','miaoli','nantou','yunlin','chiayi-city','chiayi-county','pingtung','penghu','lienchiang'];
 assert.deepEqual(Object.keys(d.pollSearchReviews).sort(),ids.sort());
 for(const [city,r]of Object.entries(d.pollSearchReviews)){
  assert.equal(r.checkedAt,'2026-11-18');assert.ok(r.summary&&r.databaseNote);
  assert.ok(r.sources.includes('county-polltw-'+city));assert.ok(r.sources.every(id=>d.sources[id]));
 }
 assert.equal(Object.values(d.pollSearchReviews).filter(r=>r.status==='暂未确认').length,7);
});
test('Hsinchu county uses four distinct current series and keeps whole-sample support separate',()=>{
 const r=M.assess(d,'hsinchu-county',2026,now);assert.equal(r.state,'disagreement');assert.equal(r.evidence.length,4);
 assert.deepEqual(new Set(r.evidence.map(p=>p.mapSeries)),new Set(['年代民调中心','关键调查','精确市场研究','皮尔森数据']));
 const era=byId['county-hsinchu-era-20261110'];assert.equal(era.sampleSize,1069);assert.deepEqual(era.results.map(p=>p.value),[36.9,28.6,1.9]);assert.equal(era.nonVoting,2.2);
 assert.equal(byId['county-hsinchu-key-20261108'].results[0].value,44.4);
 const precise=byId['county-hsinchu-precise-20261113'];assert.equal(precise.sampleSize,3722);assert.match(precise.limit,/网络覆盖/);
 assert.ok(!r.evidence.some(p=>p.id==='archive-hsinchu-county-20261026'));
});
test('Penghu records all six candidates and separately preserves undecided and refused responses',()=>{
 const p=byId['county-penghu-taipei-20261109'];assert.equal(p.results.length,6);assert.equal(p.sampleSize,1071);
 assert.equal(p.undecided,22.63);assert.equal(p.refused,3.61);assert.equal(p.sponsor,'国民党澎湖县党部');
 assert.ok(Math.abs(p.results.reduce((n,r)=>n+r.value,0)+p.undecided+p.refused-100)<1e-8);
 assert.equal(Number((p.results[0].value-p.results[1].value).toFixed(2)),7.25);
 assert.equal(M.assess(d,'penghu',2026,now).state,'competition');assert.match(p.limit,/原始完整问卷/);
});
test('later publication and database updates do not turn old Yunlin or Chiayi samples into current polls',()=>{
 const y=byId['archive-yunlin-20260328'];assert.equal(y.end,'2026-03-28');assert.equal(y.publishedAt,'2026-05-20');
 assert.ok(y.sources.includes('poll-nine-yunlin-reprint'));assert.equal(pack.sources['poll-nine-yunlin-reprint'].date,'2026-07-02');
 const c=byId['county-chiayi-key-20260712'];assert.equal(c.end,'2026-07-12');assert.equal(c.sampleSize,1069);assert.equal(c.results[0].value,41.5);
 for(const city of ['yunlin','chiayi-city']){assert.equal(M.assess(d,city,2026,now).state,'insufficient');assert.equal(M.mapEvidenceFor(d,city,now).length,0);}
});
test('local samples, street interviews and narrative assessments never create a county poll signal',()=>{
 const p=byId['county-nantou-caotun-20261110'];assert.equal(p.sampleSize,637);assert.equal(p.mapUse,undefined);assert.equal(p.start,undefined);assert.equal(p.end,undefined);
 assert.match(p.population,/草屯镇/);assert.match(p.periodLabel,/10月底/);assert.equal(p.otherResponses,2.82);
 assert.match(d.pollSearchReviews.miaoli.summary,/57人便利街访/);
 assert.match(d.pollSearchReviews.lienchiang.summary,/不转写为50%/);
 for(const city of ['miaoli','nantou','chiayi-county','pingtung','lienchiang'])assert.equal(M.assess(d,city,2026,now).state,'insufficient');
 const ids=[...d.polls,...d.reportedPolls].map(p=>p.id);assert.equal(ids.length,new Set(ids).size);
 for(const p of d.reportedPolls.filter(p=>p.id.startsWith('county-')))assert.ok(p.results.every(r=>d.people.some(person=>person.id===r.person&&person.city===p.city)));
});
