'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/policy-data.js').apply(D);
require('../public/policy-hsieh-round79.js').apply(D);
const R=require('../public/policy-hsieh-round82.js');

test('round82 adds sourced childcare, housing and elderly-policy records with explicit limits',()=>{
 R.apply(D);
 const p=D.people.find(x=>x.id==='hsieh');
 for(const text of ['每月補助5,000元','6至18歲每月加碼2,500元','由20%提高至40%','每坪15萬元','敬老卡每月補助1,000元']){
  const row=p.policies.find(x=>x.text.includes(text));
  assert.ok(row,text);assert.equal(row.electionYear,2026);
  assert.ok(row.sources.every(id=>D.sources[id]),text);
 }
 assert.match(p.policyCoverage.note,/暫未確認：/);
 assert.match(p.policyCoverage.note,/尚未查核：/);
 assert.ok(p.policyCoverage.sources.every(id=>D.sources[id]));
 assert.match(D.sources[R.ids.udn].note,/路透新聞學研究所2024/);
 assert.match(p.policies.find(x=>x.text.includes('由20%提高至40%')).note,/租金折抵年限/);
});

test('round82 is idempotent and loaded after round79 in both site and build',()=>{
 R.apply(D);const p=D.people.find(x=>x.id==='hsieh'),count=p.policies.length,note=p.policyCoverage.note;
 R.apply(D);assert.equal(p.policies.length,count);assert.equal(p.policyCoverage.note,note);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('policy-hsieh-round79.js')<html.indexOf('policy-hsieh-round82.js'));
 assert.ok(html.indexOf('policy-hsieh-round82.js')<html.indexOf('policies.js'));
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');assert.ok(build.includes('policy-hsieh-round82.js'));
});
