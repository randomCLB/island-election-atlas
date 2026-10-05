'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
require('../public/four-city-data.js').apply(D);
require('../public/career-ho-term-dates-round60.js').apply(D);
require('../public/career-ho-work-round65.js').apply(D);

test('Ho work and public-service entries retain candidate-source limits and unknown dates',()=>{
 const p=D.people.find(x=>x.id==='ho');
 const added=p.workHistory.filter(x=>x.sources.some(s=>['career-ho-cec-2010-work','career-ho-cec-2012-work','career-ho-ltn-2016'].includes(s)));
 assert.equal(added.length,6);
 assert.ok(added.every(x=>/未載|未核實|待核/.test(x.date+' '+x.note)));
 assert.ok(added.find(x=>x.role==='兼任講師').sources.includes('career-ho-cec-2010-work'));
 assert.match(added.find(x=>x.role==='秘書').verification,/二手/);
 assert.match(added.find(x=>x.role==='顧問（公共諮詢職務）').note,/不能推定/);
 const politics=p.politicalHistory.filter(x=>x.sources.some(s=>['career-ho-cec-2010-work','career-ho-cec-2012-work'].includes(s)));
 assert.equal(politics.length,2);
 assert.ok(politics.every(x=>/未載/.test(x.date)));
 for(const x of [...added,...politics])for(const s of x.sources)assert.ok(D.sources[s]);
});

test('round65 is wired into browser data and production build after Ho term dates',()=>{
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-ho-work-round65\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-ho-term-dates-round60.js')<html.indexOf('career-ho-work-round65.js'));
 assert.ok(html.indexOf('career-ho-work-round65.js')<html.indexOf('app.js'));
});
