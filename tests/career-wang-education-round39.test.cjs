'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-wang-work-round37'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-wang-education-round39.js');R.apply(D);
const p=D.people.find(x=>x.id==='wang');
test('Wang Zhaomin education is attributed to the candidate roundup without inferring a license or practice',()=>{
 assert.match(p.bio,/国立台北科技大学建筑学士/);const x=p.story.paragraphs.find(x=>x.sources?.includes('career-wang-education-round39'));assert.ok(x);assert.match(x.text,/没有学籍/);assert.match(x.text,/不把建筑学历延伸写成建筑师资格/);assert.equal(D.sources['career-wang-education-round39'].publisherId,'cna');
});
test('round39 loader is linked before the app and applies idempotently',()=>{
 const bio=p.bio,paragraphs=JSON.stringify(p.story.paragraphs);R.apply(D);assert.equal(p.bio,bio);assert.equal(JSON.stringify(p.story.paragraphs),paragraphs);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-wang-education-round39\.js/);assert.ok(html.indexOf('career-wang-education-round39.js')<html.indexOf('app.js'));
});
