'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);require('../public/four-city-data.js').apply(D);
for(const[,f]of fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8').matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g)){
 if(['taipei-research','taipei-profile-data','four-city-data','career-political-coverage-round85'].includes(f))continue;
 require('../public/'+f+'.js').apply(D);
}
const R=require('../public/career-political-coverage-round85.js');R.apply(D);
test('political history states what remains unconfirmed separately from unchecked coverage',()=>{
 for(const p of D.people){
  assert.ok(p.politicalResearch,p.id);
  assert.match(p.politicalResearch.note,/已查：/);assert.match(p.politicalResearch.note,/尚未查核：/);
  for(const id of p.politicalResearch.sources)assert.ok(D.sources[id],p.id+' '+id);
 }
 const hsiao=D.people.find(p=>p.id==='hsiao-l');
 assert.match(hsiao.politicalResearch.note,/尚未查核：/);
 assert.equal(hsiao.politicalResearch.label,'尚未查核');
 assert.ok(hsiao.politicalHistory.some(x=>/未当选/.test(x.role)));
 const lee=D.people.find(p=>p.id==='lee');
 assert.equal(lee.politicalResearch.label,'暂未确认');
 assert.match(lee.politicalResearch.note,/暂未确认：/);assert.match(lee.politicalResearch.note,/完整任期未核/);
});
test('coverage round is loaded by the page and production build',()=>{
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8'),build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),ui=fs.readFileSync(require.resolve('../public/profile-details.js'),'utf8');
 assert.ok(html.indexOf('career-political-coverage-round85.js')<html.indexOf('app.js'));
 assert.match(build,/career-political-coverage-round85\.js/);assert.match(ui,/careerRows\(p\.politicalHistory,p\.politicalResearch\)/);
});
