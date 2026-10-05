'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
Object.assign(D.sources,require('../public/taipei-data/sources.js'));
require('../public/taipei-profile-data.js').apply(D);
const R=require('../public/policy-kuo-round80.js');

test('Kuo coverage separates checked-but-unconfirmed policy from unchecked video',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='kuo');
 const charter=p.policies.find(x=>x.sources.includes('policy-kuo-charter-round80'));
 assert.equal(charter.type,'政党章程宗旨（非个人市政承诺）');
 assert.match(charter.note,/不是郭玺个人提出/);
 assert.match(p.policyCoverage.note,/暂未确认：/);
 assert.match(p.policyCoverage.note,/尚未查核：/);
 assert.ok(p.policyCoverage.sources.every(s=>D.sources[s]));
});

test('round80 is idempotent and wired into browser and production builds',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='kuo'),count=p.policies.length;
 R.apply(D);assert.equal(p.policies.length,count);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('policy-hsieh-round79.js')<html.indexOf('policy-kuo-round80.js'));
 assert.ok(html.indexOf('policy-kuo-round80.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
 assert.ok(build.indexOf('policy-kuo-round80.js')>=0);
 const ui=fs.readFileSync(require.resolve('../public/policies.js'),'utf8');
 assert.match(ui,/尚未查核：本站尚未记录此候选人的政见查核范围/);
 assert.match(ui,/已查找仍无法证实的事项会另标“暂未确认”/);
});
