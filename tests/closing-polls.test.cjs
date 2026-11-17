'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const M=require('../public/election-map-data.js'),U=require('../public/domain.js');
const closing=M.pack.reportedPolls.filter(p=>p.id.startsWith('closing-'));
test('closing surveys retain provenance and join map observations as limited context',()=>{
 assert.equal(closing.length,11);assert.equal(new Set(closing.map(p=>p.city)).size,5);
 const d=structuredClone(require('../public/data.js'));for(const name of ['taipei-research','taipei-profile-data','four-city-data','policy-data','election-map-data','county-model'])require('../public/'+name+'.js').apply(d);
 for(const p of closing){assert.ok(p.start<=p.end&&p.end<=p.publishedAt);assert.ok(p.sampleSize>0&&p.methodSummary&&p.limit);assert.ok(p.sources.length&&p.sources.every(id=>M.pack.sources[id]&&U.isPollSource(id)));assert.ok(p.results.every(r=>d.people.some(person=>person.id===r.person&&person.city===p.city)));assert.ok(!M.pack.polls.some(q=>q.id===p.id));assert.equal(p.mapUse,'context');assert.ok(p.mapSeries);}
});
test('subgroups, mixed samples and unresolved categories are not silently normalised',()=>{
 const byId=Object.fromEntries(closing.map(p=>[p.id,p]));
 const n=byId['closing-tvbs-newtaipei-20261116'];assert.equal(n.sampleSize,1327);assert.equal(n.resultSampleSize,1208);assert.match(n.limit,/全样本.*误差/);assert.ok(!n.results.some(r=>r.value===50.5));
 assert.match(byId['closing-fann-taipei-20261109'].limit,/不等同全概率样本/);
 assert.equal(byId['closing-trend-yilan-20261113'].undecided,8);assert.match(byId['closing-trend-yilan-20261113'].limit,/合计未覆盖全部/);
 assert.equal(byId['closing-shihhsin-kinmen-20261105'].undecided,undefined);
 assert.equal(byId['closing-inspiration-taipei-20261113'].margin,undefined);
 const t=byId['closing-earth-taitung-20261108'];assert.equal(t.undecided,28.4);assert.equal(t.refused,2.8);
});
test('closing polls follow the current display policy throughout the former window',()=>{
 for(const date of [U.blackoutStart,U.blackoutEnd+1]){const released=M.forRelease(new Date(date));assert.equal(released.reportedPolls.filter(p=>p.id.startsWith('closing-')).length,11);assert.ok(closing.every(p=>p.sources.every(id=>released.sources[id])));}
});
