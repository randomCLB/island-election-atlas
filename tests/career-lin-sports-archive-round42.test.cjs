'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','career-foreign-round34'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-lin-sports-archive-round42.js');
R.apply(D);
const p=D.people.find(x=>x.id==='lin-c');
test('Lin sports archive clue retains dates, weak source and identity caveat',()=>{
 const x=p.workHistory.find(x=>x.sources?.includes('career-lin-sports-archive-round42'));
 assert.ok(x);assert.match(x.date,/1989-08-01.*1994-09-06/);assert.match(x.note,/论坛用户转录/);assert.match(x.note,/身份待核/);assert.match(x.verification,/身份及名次均待原件核验/);
 assert.equal(D.sources['career-lin-sports-archive-round42'].publisherId,'other');assert.match(D.sources['career-lin-sports-archive-round42'].note,/尚未取得报纸版面扫描件/);
});
test('round42 loader is linked before app and applies idempotently',()=>{
 const rows=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),rows);
 const loader=fs.readFileSync(path.join(__dirname,'../public/career-lin-sports-archive-round42.js'),'utf8');assert.match(loader,/else\{apply\(root\.ATLAS\)/);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-lin-sports-archive-round42\.js/);assert.ok(html.indexOf('career-lin-sports-archive-round42.js')<html.indexOf('app.js'));
});
