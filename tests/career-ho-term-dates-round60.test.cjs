'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
for(const f of ['four-city-data','career-ho-term-dates-round60'])require('../public/'+f+'.js').apply(D);

test('Ho Hsin-chun council and legislative timelines have bounded official evidence',()=>{
 const p=D.people.find(x=>x.id==='ho');
 const county=p.politicalHistory.find(x=>x.role==='第15、16届台中县议员');
 assert.match(county.date,/2002年至2010-12/);assert.match(county.note,/年份級日期/);
 assert.ok(county.sources.includes('career-ho-cec-2010'));
 const city=p.politicalHistory.find(x=>x.role==='第1届台中市议员');
 assert.match(city.date,/2010-12-25.*2012-02-01/);assert.match(city.note,/不將轉任前一日寫成已核實卸任日/);
 const ly=p.politicalHistory.find(x=>x.role==='第8、9、10届立法委员');
 assert.match(ly.date,/2012-02-01至2024-01-31/);assert.equal(ly.sources.filter(x=>x.startsWith('career-ho-ly-')).length,3);
 for(const id of ['career-ho-county-terms','career-ho-cec-2010','career-ho-city-council-2010','career-ho-city-oath-2010','career-ho-ly-8','career-ho-ly-9','career-ho-ly-10'])assert.ok(D.sources[id]);
});

test('round60 loader is wired into build and browser data in order',()=>{
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-ho-term-dates-round60\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-yeh-street-performance-round59.js')<html.indexOf('career-ho-term-dates-round60.js'));
 assert.ok(html.indexOf('career-ho-term-dates-round60.js')<html.indexOf('app.js'));
});
