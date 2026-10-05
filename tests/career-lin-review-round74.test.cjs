'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','career-foreign-round34','career-lin-sports-archive-round42','career-lin-coach-round66'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-lin-review-round74.js');R.apply(D);
const p=D.people.find(x=>x.id==='lin-c');

test('Lin work review distinguishes identified gaps from work not yet checked',()=>{
 const archive=p.workHistory.find(x=>x.sources?.includes('career-lin-digital-archive-round74'));
 assert.ok(archive);assert.match(archive.role,/身份未核/);assert.match(archive.note,/不写成候选人已获奖/);
 assert.equal(D.sources['career-lin-digital-archive-round74'].publisherId,'other');
 assert.match(D.sources['career-lin-coach-round66'].note,/相差一[岁歲]/);
 assert.match(p.workResearch.note,/暂未确认：剪报及报道中的同名林志成是否为本届候选人/);
 assert.match(p.workResearch.note,/尚未查核：其他可能雇主、完整工作履历/);
 for(const id of p.workResearch.sources)assert.ok(D.sources[id],id);
});

test('round74 review is idempotent and appears in the browser and release build',()=>{
 const before=JSON.stringify(p.workHistory);R.apply(D);
 assert.equal(JSON.stringify(p.workHistory),before);
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-lin-review-round74\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-lin-coach-round66.js')<html.indexOf('career-lin-review-round74.js'));
 assert.ok(html.indexOf('career-lin-review-round74.js')<html.indexOf('app.js'));
});
