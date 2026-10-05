'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-wang-work-round37','career-wang-education-round39'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-wang-trademark-round41.js');R.apply(D);
const p=D.people.find(x=>x.id==='wang');
test('Wang Zhaomin trademark entry states registered services and evidence limits',()=>{
 const x=p.story.paragraphs.find(x=>x.sources?.includes('career-wang-trademark-round41'));
 assert.ok(x);assert.match(x.text,/2024年5月10日/);assert.match(x.text,/2025年1月16日/);assert.match(x.text,/不证明实际承揽或完成工程/);assert.match(x.text,/二级网页/);
 assert.equal(D.sources['career-wang-trademark-round41'].publisherId,'findcompany');
 assert.ok(p.workHistory.find(x=>x.sources?.includes('career-wang-trademark-round41')));
 assert.ok(p.gaps.some(x=>x.includes('建筑师执照')));
});
test('round41 loader is linked before the app and applies idempotently',()=>{
 const story=JSON.stringify(p.story.paragraphs),history=JSON.stringify(p.workHistory),gaps=JSON.stringify(p.gaps);R.apply(D);
 assert.equal(JSON.stringify(p.story.paragraphs),story);assert.equal(JSON.stringify(p.workHistory),history);assert.equal(JSON.stringify(p.gaps),gaps);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-wang-trademark-round41\.js/);assert.ok(html.indexOf('career-wang-trademark-round41.js')<html.indexOf('app.js'));
});
