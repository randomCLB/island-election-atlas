'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
for(const f of ['four-city-data','policy-data','career-foreign-round3','career-foreign-round26','career-foreign-round30','career-su-h-community-round36','career-su-h-ccp-statement-round63','career-su-h-2024-result-round64'])require('../public/'+f+'.js').apply(D);

test('Su Hui-huang 2024 legislative candidacy has the official vote result',()=>{
 const p=D.people.find(x=>x.id==='su-h'),item=p.politicalHistory.find(x=>x.organization==='第11届立法委员选举·新北市第4选区');
 assert.match(item.role,/1,924票/);assert.match(item.role,/0\.90%/);assert.match(item.role,/未当选/);
 assert.match(item.note,/中选会开放资料库的官方汇总行/);assert.ok(item.sources.includes('career-su-h-2024-result'));
 assert.equal(D.sources['career-su-h-2024-result'].publisherId,'official-tw');assert.match(D.sources['career-su-h-2024-result'].url,/votedata\.zip/);
});

test('round64 loader is included in browser and production build',()=>{
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-su-h-2024-result-round64\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-su-h-ccp-statement-round63.js')<html.indexOf('career-su-h-2024-result-round64.js'));
 assert.ok(html.indexOf('career-su-h-2024-result-round64.js')<html.indexOf('app.js'));
});
