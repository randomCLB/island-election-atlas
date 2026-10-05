'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));require('../public/policy-data.js').apply(D);
const R=require('../public/policy-kuo-referendum-round55.js');R.apply(D);
test('Kuo referendum is a sourced prior national proposal, clearly separated from 2026 city policy',()=>{
 const p=D.people.find(x=>x.id==='kuo'),item=p.policies.find(x=>x.sources?.includes(R.sourceIds[0]));
 assert.ok(item);assert.equal(item.electionYear,2023);assert.equal(item.topic,'health');assert.match(item.text,/65岁以上.*1,000元/);assert.match(item.note,/不是台北市政策或2026市长政见/);assert.match(item.note,/驳回/);
 for(const id of R.sourceIds)assert.ok(D.sources[id]);
});
test('round55 applies idempotently and uses neutral wording for prior records in the table',()=>{
 const p=D.people.find(x=>x.id==='kuo'),before=JSON.stringify(p.policies);R.apply(D);assert.equal(JSON.stringify(p.policies),before);
 const html=fs.readFileSync('public/index.html','utf8'),build=fs.readFileSync('scripts/build.cjs','utf8'),ui=fs.readFileSync('public/policies.js','utf8');
 assert.ok(html.indexOf('policy-kuo-referendum-round55.js')<html.indexOf('app.js'));assert.match(build,/policy-kuo-referendum-round55\.js/);assert.match(ui,/以往 · /);assert.match(ui,/包括以往主张与政策提案/);
});
