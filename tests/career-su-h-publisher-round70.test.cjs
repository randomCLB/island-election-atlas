'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-foreign-round26','career-foreign-round30','career-su-h-community-round36','career-su-h-ccp-statement-round63','career-su-h-2024-result-round64'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-su-h-publisher-round70.js');R.apply(D);
test('Su Huihuang same-name ISBN record stays a bounded, unconfirmed career lead',()=>{
 const p=D.people.find(x=>x.id==='su-h'),row=p.workHistory.find(x=>x.sources?.includes('career-su-h-isbn-publisher-2019'));
 assert.ok(row);assert.match(row.role,/身份暂未确认/);assert.match(row.note,/没有共同的唯一身份标识/);assert.match(row.verification,/暂未确认/);
 assert.match(p.workResearch.note,/暂未确认/);assert.match(p.story.paragraphs.at(-1).text,/待核线索/);
 assert.equal(D.sources['career-su-h-isbn-publisher-2019'].publisherId,'ncl');
 for(const id of row.sources)assert.ok(D.sources[id],id);
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
});
test('round70 loads after the candidate booklet research and before the app',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8'),build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');
 assert.ok(html.indexOf('career-su-h-2024-result-round64.js')<html.indexOf('career-su-h-publisher-round70.js'));
 assert.ok(html.indexOf('career-su-h-publisher-round70.js')<html.indexOf('app.js'));
 assert.match(build,/career-su-h-publisher-round70\.js/);
});
