'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);require('../public/four-city-data.js').apply(D);
for(const f of ['career-legislator-terms-round61'])require('../public/'+f+'.js').apply(D);

test('LY term dates fill consecutive legislator service for three candidates',()=>{
 const expect={johnny:['第8、9、10届立法委员','2012-02-01至2024-01-31',3],'su-c':['第9、10届立法委员','2016-02-01至2024-01-31',2],'chen-t':['第7、8、9、10届立法委员','2008-02-01至2024-01-31',4]};
 for(const[id,[role,date,count]]of Object.entries(expect)){const p=D.people.find(x=>x.id===id),row=p.politicalHistory.find(x=>x.role===role);assert.ok(row);assert.match(row.date,new RegExp(date));assert.equal(row.sources.filter(x=>x.startsWith('career-ly-term-')).length,count);assert.match(row.note,/不推定其他公職或黨職日期/);}
 for(const id of ['career-ly-term-7','career-ly-term-8','career-ly-term-9','career-ly-term-10'])assert.equal(D.sources[id].publisherId,'official-tw');
});

test('round61 loader is wired into build and browser data before app startup',()=>{
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-legislator-terms-round61\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-ho-term-dates-round60.js')<html.indexOf('career-legislator-terms-round61.js'));
 assert.ok(html.indexOf('career-legislator-terms-round61.js')<html.indexOf('app.js'));
});
