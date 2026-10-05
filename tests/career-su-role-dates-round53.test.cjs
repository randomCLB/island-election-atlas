'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const D=structuredClone(require('../public/data.js'));
require('../public/four-city-data.js').apply(D);
require('../public/career-su-role-dates-round53.js').apply(D);
test('Su Chia-hui foundation role uses dated checkpoints and leaves handover date open',()=>{
 const role=D.people.find(p=>p.id==='su-c').workHistory.find(x=>x.organization==='超越基金会'&&x.role==='执行长');
 assert.match(role.date,/2014-06时任/);assert.match(role.date,/2017-06官网列苏巧纯/);assert.match(role.date,/离任年月未载/);
 assert.match(role.note,/不推算连续任期/);assert.ok(role.sources.includes('career-su-eball-2017'));assert.ok(role.sources.includes('career-su-eball-former'));
 assert.equal(D.sources['career-su-eball-2017'].date,'2017-06-15');assert.equal(D.sources['career-su-eball-former'].date,null);
});
test('round53 is idempotent and loads before profile rendering',()=>{
 const apply=require('../public/career-su-role-dates-round53.js').apply,p=D.people.find(x=>x.id==='su-c');apply(D);
 const role=p.workHistory.find(x=>x.organization==='超越基金会'&&x.role==='执行长');assert.equal(role.sources.filter(x=>x==='career-su-eball-2017').length,1);
 const html=require('node:fs').readFileSync('public/index.html','utf8');assert.match(html,/career-su-role-dates-round53\.js/);assert.ok(html.indexOf('career-su-role-dates-round53.js')<html.indexOf('app.js'));
});
