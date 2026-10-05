'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);
require('../public/taipei-profile-data.js').apply(D);
require('../public/four-city-data.js').apply(D);
const R=require('../public/foreign-hung-f-coverage-round88.js');

test('洪方隆中国大陆与日本的已查和未查范围分开标注',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='hung-f');
 for(const region of ['cn','jp']){
  const row=p.evidenceCoverage[region];
  assert.equal(row.checkedAt,'2026-10-05');
  assert.match(row.note,/暂未确认：/);assert.match(row.note,/尚未查核：/);
  assert.ok(row.sources.includes(R.source));
  assert.ok(row.sources.includes('language-hung-f')&&row.sources.includes('roster'));
  assert.equal(p.evidence.some(x=>x.region===region),false);
 }
});

test('覆盖记录重复应用不改变内容，且生产页面加载此记录',()=>{
 const p=D.people.find(x=>x.id==='hung-f');R.apply(D);const before=structuredClone(p.evidenceCoverage);
 R.apply(D);assert.deepEqual(p.evidenceCoverage,before);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('foreign-coverage-round84.js')<html.indexOf('foreign-hung-f-coverage-round88.js'));
 assert.ok(html.indexOf('foreign-hung-f-coverage-round88.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.includes('foreign-hung-f-coverage-round88.js'));
});
