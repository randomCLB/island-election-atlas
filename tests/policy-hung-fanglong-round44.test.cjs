'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
require('../public/four-city-data.js').apply(D);
require('../public/policy-data.js').apply(D);
const R=require('../public/policy-hung-fanglong-round44.js');
R.apply(D);
const p=D.people.find(x=>x.id==='hung-f');
test('Hung Fanglong weak-source fund plan is explicit and limited by verification caveats',()=>{
 const xs=p.policies.filter(x=>x.sources?.includes('policy-hung-fanglong-round44-dcard'));
 assert.deepEqual(xs.map(x=>x.topic),['economy','labor','accountability']);
 assert.ok(xs.every(x=>x.electionYear===2026&&x.type.includes('弱信源')&&x.note.includes('作者身份未核')));
 assert.match(xs[0].text,/6,500亿元/);assert.match(xs[1].text,/社工师薪资追上新加坡/);assert.match(xs[2].text,/包括市长本人/);
 assert.match(D.sources[xs[0].sources[0]].note,/账号归属/);
});
test('round44 loader is before rendering and applies idempotently',()=>{
 const before=JSON.stringify(p.policies);R.apply(D);assert.equal(JSON.stringify(p.policies),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('policy-hung-fanglong-round44.js')<html.indexOf('policies.js'));assert.ok(html.indexOf('policy-hung-fanglong-round44.js')<html.indexOf('app.js'));
});
