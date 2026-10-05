'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
for(const f of ['four-city-data','policy-data','career-foreign-round3','career-su-h-community-round36','career-su-h-ccp-statement-round63'])require('../public/'+f+'.js').apply(D);

test('Su Hui-huang public record attributes the old party statement and limits its scope',()=>{
 const p=D.people.find(x=>x.id==='su-h'),item=p.evidence.find(x=>x.source==='language-su-h-bulletin'&&x.region==='cn');
 assert.ok(item);assert.match(item.text,/2024年立委候选人公报自填政见/);assert.match(item.text,/共产党/);
 assert.match(item.limit,/不是对中国社会、两岸交流、国防或外交安排的完整说明/);
 assert.equal(D.sources['language-su-h-bulletin'].publisherId,'official-tw');assert.match(D.sources['language-su-h-bulletin'].note,/候选人自填/);
});

test('round63 loads after the existing profile data and before the app',()=>{
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-su-h-ccp-statement-round63\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-foreign-round3.js')<html.indexOf('career-su-h-ccp-statement-round63.js'));
 assert.ok(html.indexOf('career-su-h-ccp-statement-round63.js')<html.indexOf('app.js'));
});
