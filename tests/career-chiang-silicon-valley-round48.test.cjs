'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-chiang-silicon-valley-round48.js');R.apply(D);
const p=D.people.find(x=>x.id==='chiang');
test('Chiang US law-firm periods preserve the campaign source and the conflicting Crone account',()=>{
 const wsgr=p.workHistory.find(x=>x.organization==='美国WSGR律师事务所');
 const crone=p.workHistory.find(x=>x.sources?.includes('career-chiang-firms-20221119')&&x.organization.startsWith('The Crone Law Group'));
 assert.match(wsgr.date,/竞选资料称2006—2009/);assert.ok(wsgr.sources.includes('v4-chiang-bar'));
 assert.ok(crone);assert.match(crone.date,/2009—2011.*2010-02/);assert.match(crone.note,/无法裁定公司实体/);
 assert.equal(D.sources['career-chiang-firms-20221119'].publisherId,'taipei-times');
});
test('round48 is idempotent and appears before the app and in the production build',()=>{
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-chiang-silicon-valley-round48.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.match(build,/career-chiang-silicon-valley-round48/);
});
