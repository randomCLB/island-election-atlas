'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-tainan-chen-anchor-round35','career-chen-tv-timeline-round51'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-chen-work-review-round72.js');R.apply(D);
test('Chen Tingfei anchor career states checked, unconfirmed, and unchecked parts separately',()=>{
 const p=D.people.find(x=>x.id==='chen-t'),row=p.workHistory.find(x=>x.sources?.includes('career-chen-anchor-2025'));
 assert.ok(row);assert.ok(row.sources.includes('four-ly-chen-t'));
 assert.match(p.workResearch.note,/已查：/);assert.match(p.workResearch.note,/暂未确认：/);assert.match(p.workResearch.note,/尚未完成查核：/);
 for(const id of p.workResearch.sources)assert.ok(D.sources[id],id);
 const before=JSON.stringify(p.workResearch);R.apply(D);assert.equal(JSON.stringify(p.workResearch),before);
});
test('round72 review loader is included before profile rendering and in production build',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8'),build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');
 assert.ok(html.indexOf('career-chen-work-review-round72.js')<html.indexOf('app.js'));
 assert.match(build,/career-chen-work-review-round72\.js/);
});
