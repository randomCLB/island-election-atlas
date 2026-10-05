'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
for(const[,f]of build.matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g))require('../public/'+f+'.js').apply(D);

test('Shen US governance evidence records concrete Taipei applications and its reporting limits',()=>{
 const p=D.people.find(x=>x.id==='shen'),item=p.evidence.find(x=>x.sources?.includes('career-shen-us-city-governance-round57'));
 assert.ok(item);assert.equal(item.region,'us');assert.equal(item.date,'2026-07-30');assert.match(item.text,/保险公司.*路树风险评估/);assert.match(item.text,/小学通学道路/);assert.match(item.limit,/不等于.*美国外交、安全或全部政策/);
 assert.equal(D.sources['career-shen-us-city-governance-round57'].publisherId,'cna');assert.match(D.sources['career-shen-us-city-governance-round57'].note,/不是逐字稿/);
});

test('round57 is loaded by the browser and production build before the app starts',()=>{
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('career-shen-us-city-governance-round57.js')<html.indexOf('app.js'));
 assert.match(build,/career-shen-us-city-governance-round57\.js'\)\.apply\(D\)/);
});
