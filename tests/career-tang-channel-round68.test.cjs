'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);
require('../public/taipei-profile-data.js').apply(D);
require('../public/career-foreign-round31.js').apply(D);
require('../public/career-tang-education-review-round40.js').apply(D);
const R=require('../public/career-tang-channel-round68.js');R.apply(D);
test('Tang channel lead is visible but explicitly unconfirmed',()=>{
 const p=D.people.find(x=>x.id==='tang'),row=p.workHistory.find(x=>x.sources?.includes('career-tang-channel-listing'));
 assert.ok(row);assert.match(row.role,/暂未确认/);assert.match(row.note,/频道页面本次无法读取/);assert.match(row.verification,/暂未确认/);
 assert.match(p.workResearch.note,/暂未确认/);assert.match(p.workResearch.note,/二手人物条目/);
 assert.equal(D.sources['career-tang-channel-listing'].publisherId,'community');
 assert.match(D.sources['career-tang-channel-listing'].note,/非原始任职证明|无法读取频道页面/);
 const before=JSON.stringify(p.workHistory);R.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
});
test('career gaps distinguish checked-but-unconfirmed from not yet checked',()=>{
 const ui=fs.readFileSync(require('node:path').join(__dirname,'../public/profile-details.js'),'utf8');
 assert.match(ui,/履历查核状态：暂未确认/);assert.match(ui,/履历查核状态：尚未查核/);
 const html=fs.readFileSync(require('node:path').join(__dirname,'../public/index.html'),'utf8');
 assert.match(html,/career-tang-channel-round68\.js/);
});
