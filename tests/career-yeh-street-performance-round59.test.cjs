'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
for(const[,f]of build.matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g))require('../public/'+f+'.js').apply(D);

test('Yeh street-performance career has dated official records and an explicit identity caveat',()=>{
 const p=D.people.find(x=>x.id==='yeh'),performance=p.workHistory.find(x=>x.sources?.includes('career-yeh-street-pass-2014'));
 assert.ok(performance);assert.match(performance.date,/2010.*2014.*2016/);assert.match(performance.note,/2010場次號碼表.*不是通過名單/);assert.match(performance.note,/沒有唯一識別資料/);assert.match(performance.verification,/身份對應仍非唯一識別/);
 const leadership=p.workHistory.find(x=>x.organization==='南部街头艺人表演俱乐部');assert.match(leadership.date,/2019-03-06/);assert.match(leadership.note,/不證明總召任期起訖/);assert.ok(leadership.sources.includes('career-yeh-convenor-2019'));
 for(const id of ['career-yeh-street-roster-2010','career-yeh-street-pass-2014','career-yeh-street-2016','career-yeh-convenor-2019'])assert.ok(D.sources[id]);
});

test('round59 applies idempotently and is loaded before the app in source and build',()=>{
 const add=require('../public/career-yeh-street-performance-round59.js'),p=D.people.find(x=>x.id==='yeh'),before=p.workHistory.length;
 add.apply(D);assert.equal(p.workHistory.length,before);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');assert.ok(html.indexOf('career-yeh-street-performance-round59.js')<html.indexOf('app.js'));
 assert.match(build,/career-yeh-street-performance-round59\.js'\)\.apply\(D\)/);
});
