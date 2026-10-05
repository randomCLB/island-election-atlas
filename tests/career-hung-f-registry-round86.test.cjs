'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);require('../public/four-city-data.js').apply(D);
for(const[,f]of fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8').matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g)){
 if(['taipei-research','taipei-profile-data','four-city-data','career-hung-f-registry-round86'].includes(f))continue;
 require('../public/'+f+'.js').apply(D);
}
const R=require('../public/career-hung-f-registry-round86.js');R.apply(D);
test('Hung Fanglong career distinguishes the registered company date from his personal tenure',()=>{
 const p=D.people.find(x=>x.id==='hung-f'),source=D.sources[R.id];
 assert.equal(source.publisherId,'official-tw');assert.match(source.url,/Business_Accounting_NO%20eq%2097301973/);
 const founder=p.workHistory.find(x=>x.sources?.includes(R.id));
 assert.ok(founder);assert.match(founder.date,/1996-12-09/);assert.match(founder.role,/登记报道所称/);assert.match(founder.note,/登记日不等于个人开始任职/);
 const gm=p.workHistory.find(x=>x.sources?.includes('career-hung-f-2000'));
 assert.equal(gm.date,'2000-04-14报道时任；完整起止未核');assert.match(gm.note,/不证明到职年份/);
 assert.match(p.workResearch.note,/已查：/);assert.match(p.workResearch.note,/暂未确认：/);assert.match(p.workResearch.note,/尚未查核：/);
 for(const id of [...p.workResearch.sources,...founder.sources, ...gm.sources])assert.ok(D.sources[id],id);
 const before=JSON.stringify({history:p.workHistory,research:p.workResearch});R.apply(D);assert.equal(JSON.stringify({history:p.workHistory,research:p.workResearch}),before);
});
test('registry evidence is loaded by browser and production build',()=>{
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8'),build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
 assert.ok(html.indexOf('career-hung-f-registry-round86.js')<html.indexOf('app.js'));
 assert.match(build,/career-hung-f-registry-round86\.js/);
});
