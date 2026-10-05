'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-foreign-round32'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-hsiao-l-tour-guide-round71.js');R.apply(D);
test('Hsiao Linhong career record distinguishes confirmed occupation from missing employer and dates',()=>{
 const p=D.people.find(x=>x.id==='hsiao-l'),row=p.workHistory.find(x=>x.sources?.includes('career-hsiao-l-cec-bulletin-2024'));
 assert.ok(row);assert.match(row.role,/导游／领队/);assert.match(row.note,/暂未确认/);assert.match(row.verification,/雇主暂未确认/);
 assert.match(p.workResearch.note,/已查：/);assert.match(p.workResearch.note,/暂未确认：/);assert.match(p.workResearch.note,/尚未完成逐项查核/);
 assert.match(p.story.paragraphs.at(-1).text,/旅行社名称和任职年月仍暂未确认/);
 for(const id of row.sources)assert.ok(D.sources[id],id);
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
});
test('round71 is loaded by the page and production build',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8'),build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');
 assert.ok(html.indexOf('career-hsiao-l-tour-guide-round71.js')<html.indexOf('app.js'));
 assert.match(build,/career-hsiao-l-tour-guide-round71\.js/);
});
