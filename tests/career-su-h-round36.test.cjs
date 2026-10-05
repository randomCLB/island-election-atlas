'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-foreign-round26','career-foreign-round30'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-su-h-community-round36.js');R.apply(D);
const p=D.people.find(x=>x.id==='su-h');
test('Su Huihuang 2024 self-reported community and civic roles are dated and bounded',()=>{
 const rows=p.workHistory.filter(x=>x.sources?.includes('career-su-h-community-round36'));
 assert.equal(rows.length,3);
 assert.deepEqual(rows.map(x=>x.organization),['新北市立丹凤高中','新北市立金山高中','台湾国等社团']);
 assert.ok(rows.every(x=>x.date==='2024年公报列载；任期未载'&&x.verification.includes('未作独立')));
 assert.match(rows[2].note,/未逐一列出社团名称/);
 const club=p.politicalHistory.find(x=>x.sources?.includes('career-su-h-community-round36'));
 assert.ok(club);assert.equal(club.organization,'小英之友会');assert.match(club.note,/不写成公职或政党党职/);
 assert.equal(D.sources['career-su-h-community-round36'].publisherId,'official-tw');
});
test('round36 loader is linked before the app and profile renderer',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');
 assert.match(html,/career-su-h-community-round36\.js/);
 assert.ok(html.indexOf('career-su-h-community-round36.js')<html.indexOf('app.js'));
});
