'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
require('../public/four-city-data.js').apply(D);
const R=require('../public/career-ko-role-dates-round50.js');
R.apply(D);
const p=D.people.find(x=>x.id==='ko');
test('Ko work history gains dated institutional checkpoints while unknown job boundaries stay explicit',()=>{
 const prof=p.workHistory.find(x=>x.organization==='淡江大学'&&x.role.includes('副教授'));
 const dean=p.workHistory.find(x=>x.organization==='淡江大学学生事务处'&&x.role==='学务长');
 const npf=p.workHistory.find(x=>x.organization==='国家政策研究基金会'&&x.role==='执行长');
 assert.match(prof.date,/93學年度（2004—2005）教育部評鑑/);assert.match(prof.date,/升等日未載/);assert.ok(prof.sources.includes(R.ids.tkuEval));
 assert.match(dean.date,/2009-08-03/);assert.match(dean.date,/2012-10-09/);assert.match(dean.date,/完整離任日期未核/);
 assert.ok(dean.sources.includes(R.ids.tkuDeanStart)&&dean.sources.includes(R.ids.tkuDeanCheckpoint));
 assert.match(npf.date,/2022-05-13及2023-03-23/);assert.match(npf.date,/是否連續未核/);
 assert.ok(npf.sources.includes(R.ids.npfStart)&&npf.sources.includes(R.ids.npfEnd));
 for(const row of [prof,dean,npf])for(const id of row.sources)assert.ok(D.sources[id]);
 assert.match(D.sources[R.ids.npfStart].note,/機構自列/);
});
test('round50 is idempotent and loaded by the browser and production build',()=>{
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-ko-role-dates-round50.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.match(build,/career-ko-role-dates-round50\.js/);
});
