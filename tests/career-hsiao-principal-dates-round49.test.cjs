'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','career-hsiao-school-service-round45'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-hsiao-principal-dates-round49.js');
R.apply(D);
const p=D.people.find(x=>x.id==='hsiao-w');
test('Hsiao principal timeline adds dated institutional records without inventing appointment dates',()=>{
 const rumei=p.workHistory.find(x=>x.organization==='花莲县瑞美国民小学'&&x.role==='校长');
 const xikou=p.workHistory.find(x=>x.organization==='花莲县寿丰乡溪口国民小学'&&x.role==='校长');
 assert.match(rumei.date,/2014-11-06已任/);assert.match(rumei.date,/2020-07-31/);assert.match(rumei.date,/始任日未核/);
 assert.ok(rumei.sources.includes(R.ids.rumeiLog)&&rumei.sources.includes(R.ids.rumeiTerm));
 assert.match(xikou.date,/2020-08-16/);assert.match(xikou.date,/2025—2026学年度/);assert.match(xikou.date,/后续任期未核/);
 assert.ok(xikou.sources.includes(R.ids.xikouRoster));
 for(const x of [rumei,xikou])for(const id of x.sources)assert.ok(D.sources[id]);
});
test('round49 loader is idempotent and appears in both browser and production build',()=>{
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-hsiao-principal-dates-round49.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.match(build,/career-hsiao-principal-dates-round49\.js/);
});
