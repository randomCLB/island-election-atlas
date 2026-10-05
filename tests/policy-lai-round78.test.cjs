'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/policy-data.js').apply(D);
const R=require('../public/policy-lai-round78.js');

test('Lai campaign policies are expanded across urban planning, transport, tourism, agriculture, health and education',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='lai');
 for(const topic of ['urban','transport','tourism','agriculture','health','education'])assert.ok(p.policies.some(x=>x.topic===topic&&x.electionYear===2026),topic);
 for(const x of p.policies.filter(x=>x.sources.some(s=>s.startsWith('policy-lai-')))){
  assert.ok(x.text&&x.date&&x.note&&x.type,x.topic);
  assert.ok(x.sources.length&&x.sources.some(s=>s.startsWith('policy-lai-')&&D.sources[s]),x.topic);
 }
 assert.match(p.policies.find(x=>x.topic==='urban').note,/核定程序和工期尚未由报道证明/);
 assert.match(p.policies.find(x=>x.topic==='education').note,/诉求由工会提出/);
 assert.ok(p.policies.find(x=>x.topic==='transport').sources.includes('policy-lai-traffic-round78'));
 assert.equal(D.policyTopics.urban,'城市规划与土地利用');
 assert.equal(D.policyTopics.agriculture,'农业与城乡发展');
});

test('round78 is idempotent and wired into browser and production builds',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='lai'),count=p.policies.length;
 R.apply(D);assert.equal(p.policies.length,count);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('policy-data.js')<html.indexOf('policy-lai-round78.js'));
 assert.ok(html.indexOf('policy-lai-round78.js')<html.indexOf('app.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.indexOf('policy-lai-round78.js')>=0);
});
