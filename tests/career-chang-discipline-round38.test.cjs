'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3'])require('../public/'+f+'.js').apply(D);
require('../public/career-chang-discipline-round38.js').apply(D);
const p=D.people.find(x=>x.id==='chang');
test('Chang Jing lawyer discipline entry records only the published disposition and official source limits',()=>{
 const x=p.controversies.find(x=>x.sources?.includes('career-chang-discipline-round38'));
 assert.ok(x);assert.equal(x.claimLabel,'公告所列事项');assert.match(x.outcome,/停止.*2个月/);assert.match(x.outcome,/8小时/);assert.match(x.claim,/112年度律懲字第20号/);assert.match(x.limit,/未公开各案理由/);assert.match(x.limit,/不是刑事定罪/);assert.ok(x.sources.every(s=>D.sources[s]));assert.equal(D.sources[x.sources[0]].publisherId,'official-tw');
});
test('round38 loader is linked before the app and applies idempotently',()=>{
 const before=JSON.stringify(p.controversies);require('../public/career-chang-discipline-round38.js').apply(D);assert.equal(JSON.stringify(p.controversies),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-chang-discipline-round38\.js/);assert.ok(html.indexOf('career-chang-discipline-round38.js')<html.indexOf('app.js'));
});
