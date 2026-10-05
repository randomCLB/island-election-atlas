'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
for(const[,f]of build.matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g))require('../public/'+f+'.js').apply(D);

test('Yeh student-union role has cross-checks and is explicitly non-employment service',()=>{
 const p=D.people.find(x=>x.id==='yeh'),x=p.workHistory.find(x=>x.sources?.includes('career-yeh-student-union-2008'));
 assert.ok(x);assert.match(x.date,/97學年度/);assert.match(x.date,/起訖日未載/);assert.match(x.role,/非受僱工作/);assert.match(x.note,/未取得選舉紀錄、學籍或完整任期文件/);
 for(const id of x.sources){assert.ok(D.sources[id]);assert.ok(require('../public/media.js').resolve(id,D)?.profile?.badge)}
 assert.equal(D.sources['career-yeh-student-union-school-history'].publisherId,'official-tw');
});

test('round67 applies idempotently and is included before app in browser and build',()=>{
 const add=require('../public/career-yeh-campus-round67.js'),p=D.people.find(x=>x.id==='yeh'),before=JSON.stringify(p.workHistory);add.apply(D);assert.equal(JSON.stringify(p.workHistory),before);
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');assert.ok(html.indexOf('career-yeh-campus-round67.js')<html.indexOf('app.js'));assert.match(build,/career-yeh-campus-round67\.js'\)\.apply\(D\)/);
});
