'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-tainan-chen-anchor-round35'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-chen-foreign-round46.js');R.apply(D);
const p=D.people.find(x=>x.id==='chen-t');
test('Chen work-history additions preserve role/date limits and attach institutional evidence',()=>{
 const tv=p.workHistory.find(x=>x.sources?.includes('career-chen-anchor-2025')),chair=p.workHistory.find(x=>x.organization==='凯达格兰基金会');
 assert.equal(p.workHistory.filter(x=>x.role==='新闻记者、主播'||x.sources?.some(s=>['career-chen-anchor-2025','career-chen-anchor-2008'].includes(s))).length,1);
 assert.ok(tv.sources.includes('four-ly-chen-t'));assert.match(tv.note,/未载频道名称及任职年月/);assert.equal(tv.date,'毕业后；具体年份未载');
 assert.match(chair.date,/最迟2022-08-01/);assert.ok(chair.sources.includes('career-chen-ketagalan-2022'));assert.match(chair.note,/不能推定任期起点或终点/);
});
test('Chen China and US records state the dated position and source limitations',()=>{
 const cn=p.evidence.find(x=>x.sources?.includes('career-chen-cn-20090505')),us=p.evidence.find(x=>x.sources?.includes('career-chen-us-20241107'));
 assert.ok(cn);assert.equal(cn.date,'2009-05-05');assert.match(cn.limit,/不是逐字议事录/);
 assert.ok(us);assert.match(us.date,/2024-11-06/);assert.match(us.limit,/不是完整逐字议事记录/);
 for(const x of [cn,us])for(const id of x.sources)assert.ok(D.sources[id]);
});
test('round46 loader is idempotent and included before the app and production build',()=>{
 const before=JSON.stringify({work:p.workHistory,evidence:p.evidence});R.apply(D);assert.equal(JSON.stringify({work:p.workHistory,evidence:p.evidence}),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-chen-foreign-round46.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.match(build,/career-chen-foreign-round46/);
});
