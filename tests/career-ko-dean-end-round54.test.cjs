'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));require('../public/four-city-data.js').apply(D);require('../public/career-ko-role-dates-round50.js').apply(D);
const R=require('../public/career-ko-dean-end-round54.js');R.apply(D);
test('Ko student-affairs dean chronology is narrowed by contemporaneous school newspaper records',()=>{
 const row=D.people.find(x=>x.id==='ko').workHistory.find(x=>x.organization==='淡江大学学生事务处'&&x.role==='学务长');
 assert.match(row.date,/2015-08-03仍任/);assert.match(row.date,/2016-01-29校報稱柯為前任/);assert.match(row.date,/確切卸任日未核/);
 assert.match(row.note,/未取得正式卸任命令/);for(const id of [R.ids.last,R.ids.successor])assert.ok(row.sources.includes(id)&&D.sources[id]);
});
test('round54 applies idempotently and loads after the existing dean checkpoints',()=>{
 const p=D.people.find(x=>x.id==='ko'),before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
 const html=fs.readFileSync('public/index.html','utf8'),build=fs.readFileSync('scripts/build.cjs','utf8');assert.ok(html.indexOf('career-ko-dean-end-round54.js')<html.indexOf('app.js'));assert.match(build,/career-ko-dean-end-round54\.js/);
});
