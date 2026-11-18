'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const D=require('../public/taipei-guide-data.js'),P=require('../public/taipei-poll-model.js'),M=require('../public/election-map.js'),G=require('../public/taipei-guide.js');
const now=new Date('2026-11-18T12:00:00+08:00');
test('six reported regions cover twelve districts exactly once and preserve the original geography',()=>{
 const units=P.units(D);assert.equal(units.length,6);assert.equal(new Set(units.flatMap(u=>u.districts)).size,12);
 assert.equal(units.flatMap(u=>u.districts).length,12);
 assert.deepEqual(units.find(u=>u.number===1).districts,['shilin','beitou']);
 assert.deepEqual(units.find(u=>u.number===4).districts,['zhongshan','datong']);
});
test('regional map classifications use the same national assessor and combined 2022 vote baseline',()=>{
 const model=P.modelData(D),assessments=P.assessments(D,now);
 for(const r of assessments){const expected=M.assess(model,r.unit.id,2026,now);assert.equal(r.state,expected.state);assert.equal(r.pattern,expected.pattern);assert.equal(r.color,expected.color);}
 assert.deepEqual(assessments.filter(r=>r.state==='disagreement').map(r=>r.unit.number),[2,3,5,6]);
 assert.deepEqual(assessments.filter(r=>r.state==='competition').map(r=>r.unit.number),[1,4]);
 // Datong alone was DPP-led; the combined Zhongshan/Datong vote was KMT-led.
 assert.equal(D.elections.find(e=>e.year===2022&&e.type==='mayor').districts.find(d=>d.name==='大同區').candidates[0].party,'民主進步黨');
 assert.equal(model.mapBaseline['taipei-area-4'].name,'蔣萬安');
});
test('unpublished local N remains unknown and whole-city or question samples never become a regional N',()=>{
 const rows=P.modelData(D).reportedPolls.filter(r=>r.id.startsWith('tvbs-'));assert.equal(rows.length,6);
 for(const row of rows){assert.equal(row.areaSampleSize,null);assert.equal(row.sampleScope,'parent-survey');assert.equal(row.parentSampleSize,1331);assert.equal(row.parentQuestionSampleSize,1252);assert.match(row.limit,/不将全市/);assert.ok(row.sources.every(id=>D.sources[id]));}
 assert.deepEqual(D.districtPolls.surveys[0].rows.map(r=>r.sampleSharePct),[22,15,15,14,13,21]);
});
test('opposing comparable regional surveys can create disagreement but same-series old waves cannot',()=>{
 const d=structuredClone(D);d.districtPolls.surveys=d.districtPolls.surveys.slice(0,1);const survey=structuredClone(d.districtPolls.surveys[0]);survey.id='independent';survey.series='另一调查';survey.end='2026-11-14';survey.rows=survey.rows.map(r=>({...r,chiang:r.shen,shen:r.chiang}));d.districtPolls.surveys.push(survey);
 assert.ok(P.assessments(d,now).every(r=>r.state==='disagreement'));
 survey.series=d.districtPolls.surveys[0].series;assert.ok(P.assessments(d,now).every(r=>r.evidence.length===1));
});
test('forecasts, future and stale records cannot drive district map signals',()=>{
 for(const fields of [{metric:'forecast'},{publishedAt:'2026-11-20'},{start:'2026-07-01',end:'2026-07-02',publishedAt:'2026-07-03'},{sampleSize:0}]){
  const d=structuredClone(D);d.districtPolls.surveys=d.districtPolls.surveys.slice(0,1);Object.assign(d.districtPolls.surveys[0],fields);assert.ok(P.assessments(d,now).every(r=>r.state==='insufficient'&&!r.evidence.length));
 }
});
test('verified independent series keep original figures, local N and partial coverage',()=>{
 const surveys=D.districtPolls.surveys,model=P.modelData(D);
 assert.equal(new Set(surveys.map(s=>s.series)).size,4);assert.equal(model.reportedPolls.length,22);
 assert.equal(surveys.find(s=>s.id.startsWith('trust-')).rows.find(r=>r.unit===2).chiang,35.4);
 const apollo=surveys.find(s=>s.id.startsWith('apollo-'));assert.deepEqual(apollo.rows.map(r=>r.unit),[1,2,4,6]);
 const zmedia=model.reportedPolls.filter(r=>r.id.startsWith('zmedia-'));assert.equal(zmedia.length,6);
 assert.deepEqual(zmedia.map(r=>r.areaSampleSize),[219,166,172,147,139,232]);assert.ok(zmedia.every(r=>r.sampleScope==='area'&&r.parentSampleSize===1074));
 for(const row of model.reportedPolls)assert.ok(row.sources.every(id=>D.sources[id]));
 assert.deepEqual(P.assessments(D,now).map(r=>r.evidence.length),[4,4,3,4,3,4]);
});
test('regional comparisons expire older series by the shared 30 day fieldwork window',()=>{
 const d=structuredClone(D),older=d.districtPolls.surveys.find(s=>s.id.startsWith('zmedia-'));older.start='2026-10-13';older.end='2026-10-14';
 assert.ok(P.assessments(d,now).every(r=>r.evidence.every(p=>!p.id.startsWith('zmedia-'))));
});
test('poll map selection survives links without changing the existing district-colour default',()=>{
 assert.equal(G.readRoute('/taipei.html?layer=polls&district=datong',D).mapMode,'polls');
 assert.equal(G.readRoute('/taipei.html',D).mapMode,'district');
 assert.equal(G.readRoute('/taipei.html?layer=missing',D).mapMode,'district');
});
