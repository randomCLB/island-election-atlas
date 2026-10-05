'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','career-foreign-round34'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-hsiao-school-service-round45.js');
R.apply(D);
const p=D.people.find(x=>x.id==='hsiao-w');
test('Hsiao school roles use official institutional records without invented dates',()=>{
 const xs=p.workHistory.filter(x=>x.sources?.some(s=>s.includes('round45')));assert.equal(xs.length,6);
 assert.ok(xs.some(x=>x.organization==='花莲县瑞美国民小学'&&x.date.includes('103学年度')));
 assert.ok(xs.some(x=>x.organization==='花莲县寿丰乡溪口国民小学'&&x.role==='校长'&&x.date.startsWith('2020-08-16')));
 assert.ok(xs.filter(x=>x.sources.includes(R.ids.school)).every(x=>x.note.includes('未列')||x.note.includes('未说明')||x.note.includes('完整任期')||x.note.includes('没有任职起止')));
 assert.match(p.careerNote,/重复累加/);
 for(const x of xs)for(const s of x.sources)assert.ok(D.sources[s]);
});
test('round45 loader applies idempotently and loads before the app',()=>{
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-hsiao-school-service-round45.js')<html.indexOf('app.js'));
});
