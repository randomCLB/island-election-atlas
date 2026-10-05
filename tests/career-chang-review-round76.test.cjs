'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-chang-discipline-round38'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-chang-review-round76.js');R.apply(D);
const p=D.people.find(x=>x.id==='chang');
test('Chang profile separates researched unknowns from channels not yet checked',()=>{
 const lawyer=p.workHistory.find(x=>x.role==='律师');
 assert.match(lawyer.date,/暂未确认/);assert.match(lawyer.note,/VoteTW二手人物页/);assert.match(lawyer.note,/尚未查核/);
 assert.match(p.workResearch.note,/仍为“暂未确认”/);assert.match(p.workResearch.note,/尚未查核/);assert.ok(p.workResearch.sources.every(s=>D.sources[s]));
 const hualien=p.workHistory.find(x=>x.organization==='花莲地检署');assert.match(hualien.note,/时间线互有矛盾/);assert.match(hualien.verification,/暂未确认/);
});
test('2017 judicial reform committee service has a bounded, sourced end date',()=>{
 const item=p.politicalHistory.find(x=>x.sources?.includes('career-chang-review-committee'));
 assert.ok(item);assert.match(item.date,/2017-02-17.*2017-08-12/);assert.match(item.note,/民选公职/);assert.ok(item.sources.every(s=>D.sources[s]));
});
test('round76 loader is wired into build and browser release and applies idempotently',()=>{
 const careers=JSON.stringify(p.workHistory),politics=JSON.stringify(p.politicalHistory),sources=JSON.stringify(D.sources);
 R.apply(D);assert.equal(JSON.stringify(p.workHistory),careers);assert.equal(JSON.stringify(p.politicalHistory),politics);assert.equal(JSON.stringify(D.sources),sources);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-chang-review-round76\.js/);assert.ok(html.indexOf('career-chang-review-round76.js')<html.indexOf('app.js'));
 assert.match(fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8'),/career-chang-review-round76/);
});
