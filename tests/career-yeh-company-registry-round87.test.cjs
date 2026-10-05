'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);require('../public/four-city-data.js').apply(D);
for(const[,f]of fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8').matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g)){
 if(['taipei-research','taipei-profile-data','four-city-data','career-yeh-company-registry-round87'].includes(f))continue;
 require('../public/'+f+'.js').apply(D);
}
const R=require('../public/career-yeh-company-registry-round87.js');R.apply(D);
test('Yeh company identity is corroborated across official registry, stage name and candidate reporting',()=>{
 const p=D.people.find(x=>x.id==='yeh'),row=p.workHistory.find(x=>x.sources?.includes(R.registry));
 assert.ok(row);assert.equal(row.organization,'葉雪創意環保科技有限公司');assert.match(row.date,/2018-02-05/);
 assert.match(row.role,/完整任期未核/);assert.match(row.note,/不證明.*任職起訖/);
 assert.match(p.workResearch.note,/藝名「葉雪」/);assert.match(p.workResearch.note,/已查：/);assert.match(p.workResearch.note,/暫未確認：/);assert.match(p.workResearch.note,/尚未查核：/);
 for(const id of [...row.sources,...p.workResearch.sources])assert.ok(D.sources[id],id);
 const before=JSON.stringify({work:p.workHistory,research:p.workResearch});R.apply(D);assert.equal(JSON.stringify({work:p.workHistory,research:p.workResearch}),before);
});
test('Yeh company record is loaded by page and production build',()=>{
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8'),build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
 assert.ok(html.indexOf('career-yeh-company-registry-round87.js')<html.indexOf('app.js'));
 assert.match(build,/career-yeh-company-registry-round87\.js/);
});
