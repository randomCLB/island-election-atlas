'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-tainan-chen-anchor-round35','career-chen-foreign-round46'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-chen-tv-timeline-round51.js');R.apply(D);
const p=D.people.find(x=>x.id==='chen-t'),tv=p.workHistory.find(x=>x.sources?.includes('career-chen-anchor-2025'));
test('Chen television career receives a qualified secondary-source timeline clue',()=>{
 assert.match(tv.date,/1996年大学毕业后/);assert.match(tv.date,/1998年开始市议员任期/);
 assert.match(tv.note,/不证明电视台实际任期或离职日期/);
 assert.ok(tv.sources.includes(R.sourceId));assert.equal(D.sources[R.sourceId].publisherId,'taisounds');
 assert.match(D.sources[R.sourceId].note,/倾向待核定/);
});
test('round51 is idempotent and is loaded in browser and production build',()=>{
 const before=JSON.stringify({item:tv,sources:D.sources[R.sourceId]});R.apply(D);assert.equal(JSON.stringify({item:tv,sources:D.sources[R.sourceId]}),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-chen-tv-timeline-round51.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.match(build,/career-chen-tv-timeline-round51\.js/);
});
