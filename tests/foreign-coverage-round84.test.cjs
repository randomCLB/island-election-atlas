'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);
require('../public/taipei-profile-data.js').apply(D);
require('../public/four-city-data.js').apply(D);
const R=require('../public/foreign-coverage-round84.js');

test('reviewed gaps distinguish unresolved positions from channels not yet reviewed',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='lin-c');
 for(const region of ['cn','us','jp']){
  const r=p.evidenceCoverage[region];
  assert.match(r.note,/暂未确认：/);assert.match(r.note,/尚未查核：/);
  assert.ok(r.sources.every(id=>D.sources[id]));
 }
});

test('existing dated statements stay intact and the coverage pass is idempotent',()=>{
 const p=D.people.find(x=>x.id==='chiang'),before=p.evidence.map(x=>x.text);
 R.apply(D);const lin=D.people.find(x=>x.id==='lin-c'),note=lin.evidenceCoverage.cn.note;
 R.apply(D);assert.equal(lin.evidenceCoverage.cn.note,note);assert.deepEqual(p.evidence.map(x=>x.text),before);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('career-tang-work-round83.js')<html.indexOf('foreign-coverage-round84.js'));
 assert.ok(html.indexOf('foreign-coverage-round84.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.includes('foreign-coverage-round84.js'));
});
