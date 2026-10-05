'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
Object.assign(D.sources,require('../public/taipei-data/sources.js'));
require('../public/taipei-profile-data.js').apply(D);
require('../public/four-city-data.js').apply(D);
require('../public/policy-data.js').apply(D);
require('../public/policy-kuo-round80.js').apply(D);
const R=require('../public/policy-taipei-coverage-round81.js');

test('Taipei policy records distinguish database coverage, unconfirmed full platforms, and unchecked channels',()=>{
 R.apply(D);
 const people=D.people.filter(p=>p.city==='taipei');assert.equal(people.length,6);
 for(const p of people){
  assert.match(p.policyCoverage.note,/资料库收录进度/);
  assert.match(p.policyCoverage.note,/暂未确认：/);
  assert.match(p.policyCoverage.note,/尚未查核：/);
  for(const id of [R.sourceIds.database,R.sourceIds.bulletin,R.sourceIds.attachment])assert.ok(p.policyCoverage.sources.includes(id),p.name+': '+id);
  assert.ok(p.policyCoverage.sources.every(id=>D.sources[id]),p.name);
 }
 assert.ok(people.find(p=>p.id==='tang').policyCoverage.sources.includes(R.sourceIds.tang));
 assert.ok(people.find(p=>p.id==='tang').policies.some(x=>x.electionYear===2022));
});

test('round81 is idempotent, wired before policy rendering, and coverage appears beside existing entries',()=>{
 const p=D.people.find(x=>x.id==='chiang'),sources=p.policyCoverage.sources.length,note=p.policyCoverage.note;
 R.apply(D);assert.equal(p.policyCoverage.sources.length,sources);assert.equal(p.policyCoverage.note,note);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('policy-kuo-round80.js')<html.indexOf('policy-taipei-coverage-round81.js'));
 assert.ok(html.indexOf('policy-taipei-coverage-round81.js')<html.indexOf('policies.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.includes('policy-taipei-coverage-round81.js'));
 const ui=fs.readFileSync(require.resolve('../public/policies.js'),'utf8');assert.match(ui,/\$\{records\}\$\{coverage\}/);
});
