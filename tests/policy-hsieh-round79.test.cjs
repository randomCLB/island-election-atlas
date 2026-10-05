'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/policy-data.js').apply(D);
const R=require('../public/policy-hsieh-round79.js');

test('Hsieh policies distinguish the reported term pledge, work schedule and citizen call-ins',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='hsieh');
 const term=p.policies.find(x=>/不寻求连任/.test(x.text));
 assert.match(term.date,/2026-03-12.*2026-09-01/);
 assert.ok(term.sources.includes('policy-hsieh-tvbs-round79'));
 for(const text of ['下午6时下班','每周两次直播']){
  const item=p.policies.find(x=>x.text.includes(text));
  assert.ok(item,text);assert.equal(item.electionYear,2026);assert.equal(item.topic,'accountability');
  assert.equal(item.type,'记者会政见（媒体转述）');
  assert.ok(item.sources.every(s=>D.sources[s]));
 }
 assert.match(p.policies.find(x=>x.text.includes('每周两次直播')).note,/回应时限或完成率/);
});

test('round79 is idempotent and wired into browser and production builds',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='hsieh'),count=p.policies.length;
 R.apply(D);assert.equal(p.policies.length,count);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('policy-lai-round78.js')<html.indexOf('policy-hsieh-round79.js'));
 assert.ok(html.indexOf('policy-hsieh-round79.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.indexOf('policy-hsieh-round79.js')>=0);
});
