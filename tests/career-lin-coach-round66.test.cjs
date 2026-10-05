'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','career-foreign-round34'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-lin-coach-round66.js');R.apply(D);
const p=D.people.find(x=>x.id==='lin-c');
test('Lin 2010 national-team coaching clue is labeled as republished media and identity unconfirmed',()=>{
 const x=p.workHistory.find(x=>x.sources?.includes('career-lin-coach-round66'));
 assert.ok(x);assert.match(x.date,/2010/);assert.match(x.role,/身份待核/);assert.match(x.note,/論壇保存/);assert.match(x.note,/不能視為已確認同一人/);assert.match(x.verification,/待原始文件核驗/);
 assert.equal(D.sources['career-lin-coach-round66'].publisherId,'other');assert.match(D.sources['career-lin-coach-round66'].note,/論壇頁保留原文/);
 for(const r of ['cn','us','jp']){assert.equal(p.evidenceCoverage[r].checkedAt,'2026-10-05');assert.match(p.evidenceCoverage[r].note,/暫未確認|暂未确认/);assert.match(p.evidenceCoverage[r].scope,/姓名/)}
});
test('round66 loader is idempotent and ordered before app',()=>{
 const rows=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),rows);
 const loader=fs.readFileSync(path.join(__dirname,'../public/career-lin-coach-round66.js'),'utf8');assert.match(loader,/else\{apply\(root\.ATLAS\)/);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-lin-coach-round66\.js/);assert.ok(html.indexOf('career-lin-coach-round66.js')<html.indexOf('app.js'));
});
