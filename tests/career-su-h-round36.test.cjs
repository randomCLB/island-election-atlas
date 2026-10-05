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
 const rows=p.workHistory.filter(x=>x.sources?.includes('language-su-h-bulletin'));
 assert.equal(rows.length,2);
 const parents=rows.find(x=>x.role.includes('家长委员')),volunteer=rows.find(x=>x.organization==='台湾国等社团');
 assert.ok(parents);assert.match(parents.note,/分别列出新北市立丹凤高中、金山高中/);assert.match(parents.verification,/非任职机构证明/);
 assert.ok(volunteer);assert.match(volunteer.note,/未逐一列出组织/);
 const club=p.politicalHistory.find(x=>x.sources?.includes('language-su-h-bulletin')&&x.organization==='小英之友会');
 assert.ok(club);assert.equal(club.organization,'小英之友会');assert.match(club.note,/不写成公职或政党党职/);
 assert.equal(D.sources['language-su-h-bulletin'].publisherId,'official-tw');
});
test('round36 loader is linked before the app and profile renderer',()=>{
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');
 assert.match(html,/career-su-h-community-round36\.js/);
 assert.ok(html.indexOf('career-su-h-community-round36.js')<html.indexOf('app.js'));
});
