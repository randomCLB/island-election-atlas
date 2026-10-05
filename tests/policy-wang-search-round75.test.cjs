'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/four-city-data.js').apply(D);require('../public/policy-data.js').apply(D);
require('../public/policy-wang-empty-round47.js').apply(D);
const R=require('../public/policy-wang-search-round75.js');R.apply(D);
const p=D.people.find(x=>x.id==='wang');

test('Wang profile adds the sourced birth date while keeping policy and research states distinct',()=>{
 assert.match(p.bio,/1963-08-29出生/);assert.equal(p.policies.length,0);
 assert.equal(p.policyCoverage.checkedAt,'2026-10-05');
 assert.match(p.policyCoverage.note,/暂未确认：他是否在个人社媒/);
 assert.match(p.policyCoverage.note,/尚未查核：个人社媒完整贴文/);
 assert.match(p.policyCoverage.note,/不能据此断言公报从未发布/);
 for(const id of p.policyCoverage.sources)assert.ok(D.sources[id],id);
 assert.equal(D.sources['policy-wang-cec-registration-round75'].publisherId,'official-tw');
 assert.match(D.sources['policy-wang-cec-registration-round75'].note,/只记登记资讯/);
});

test('round75 is idempotent and loaded before the page renders policy',()=>{
 const bio=p.bio,note=p.policyCoverage.note;R.apply(D);assert.equal(p.bio,bio);assert.equal(p.policyCoverage.note,note);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
 assert.ok(html.indexOf('policy-wang-empty-round47.js')<html.indexOf('policy-wang-search-round75.js'));
 assert.ok(html.indexOf('policy-wang-search-round75.js')<html.indexOf('policies.js'));
 assert.match(build,/policy-wang-search-round75\.js'\)\.apply\(D\)/);
});
