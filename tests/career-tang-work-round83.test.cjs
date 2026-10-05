'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);
require('../public/taipei-profile-data.js').apply(D);
const R=require('../public/career-tang-work-round83.js');

test('Tang work history shows the weak host claim as unconfirmed and distinguishes unchecked records',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='tang'),entry=p.workHistory.find(x=>x.sources?.includes(R.id));
 assert.ok(entry);assert.match(entry.role,/暂未确认/);assert.match(entry.note,/频道页面已不存在/);
 assert.ok(entry.sources.every(s=>D.sources[s]));
 assert.match(p.workResearch.note,/暂未确认：/);assert.match(p.workResearch.note,/尚未查核：/);
 assert.deepEqual(p.workResearch.sources,entry.sources);
});

test('round83 applies once and loads after career coverage in the production and browser builds',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='tang'),count=p.workHistory.length,note=p.workResearch.note;
 R.apply(D);assert.equal(p.workHistory.length,count);assert.equal(p.workResearch.note,note);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('career-work-coverage-round77.js')<html.indexOf('career-tang-work-round83.js'));
 assert.ok(html.indexOf('career-tang-work-round83.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.includes('career-tang-work-round83.js'));
});
