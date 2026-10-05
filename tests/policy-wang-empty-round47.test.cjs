'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['four-city-data','policy-data','career-wang-education-round39','career-wang-work-round37'])require('../public/'+f+'.js').apply(D);
const R=require('../public/policy-wang-empty-round47.js');R.apply(D);
const p=D.people.find(x=>x.id==='wang');
test('Wang Zhaomin policy gap is explicitly scoped, dated, and source-linked',()=>{
 assert.equal(p.policies.length,0);assert.equal(p.policyCoverage.checkedAt,'2026-10-04');
 assert.match(p.policyCoverage.note,/0项不等于候选人没有政见/);
 for(const id of p.policyCoverage.sources)assert.ok(D.sources[id],id);
 assert.equal(D.sources['policy-wang-zhengjian-2026'].kind,'民间政见索引');
});
test('policy coverage status is rendered with sources and loaded before policy UI',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');
 assert.ok(html.indexOf('policy-wang-empty-round47.js')<html.indexOf('policies.js'));
 const ui=fs.readFileSync(path.join(__dirname,'../public/policies.js'),'utf8');assert.match(ui,/p\.policyCoverage/);assert.match(ui,/查看已查来源/);
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.match(build,/policy-wang-empty-round47/);
});
