'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/four-city-data.js').apply(D);
require('../public/policy-data.js').apply(D);
require('../public/policy-wang-empty-round47.js').apply(D);
require('../public/policy-wang-search-round75.js').apply(D);
const R=require('../public/profile-coverage-wang-round89.js');

test('Wang Zhaomin policy and portrait gaps state what was searched and what remains unchecked',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='wang');
 assert.match(p.policyCoverage.note,/暂未确认：/);assert.match(p.policyCoverage.note,/尚未查核：/);
 assert.match(p.policyCoverage.note,/11月12日/);assert.match(p.photoCoverage.note,/尚未找到可归属此人的照片/);
 assert.equal(p.photoCoverage.label,'暂未确认');
 for(const id of [...p.policyCoverage.sources,...p.photoCoverage.sources])assert.ok(D.sources[id],id);
 assert.equal(p.policies.length,0);
});

test('coverage loader is included before rendering and repeats without changing the record',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='wang'),before=structuredClone({policyCoverage:p.policyCoverage,photoCoverage:p.photoCoverage});
 R.apply(D);assert.deepEqual({policyCoverage:p.policyCoverage,photoCoverage:p.photoCoverage},before);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('profile-coverage-wang-round89.js')<html.indexOf('election-map-data.js'));
 assert.ok(html.indexOf('profile-coverage-wang-round89.js')<html.indexOf('profile-details.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.includes('profile-coverage-wang-round89.js'));
 const renderer=fs.readFileSync(require.resolve('../public/profile-details.js'),'utf8');assert.match(renderer,/照片状态：/);
});
