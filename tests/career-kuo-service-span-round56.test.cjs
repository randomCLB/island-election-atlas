'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
for(const [,f] of build.matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g))require('../public/'+f+'.js').apply(D);

test('Kuo military career gains the reported overall span without assigning dates to individual posts',()=>{
 const p=D.people.find(x=>x.id==='kuo'),item=p.workHistory.find(x=>x.sources?.includes('career-kuo-service-span-round56'));
 assert.ok(item);assert.match(item.date,/1980年.*1997年/);assert.match(item.note,/两个具体职务各自的起止年月仍未披露/);assert.match(item.verification,/军方人事原件未取得/);
 assert.equal(D.sources['career-kuo-service-span-round56'].date,'2026-08-31');assert.match(D.sources['career-kuo-service-span-round56'].kind,/未附军方人事原件/);
});

test('round56 is loaded by the browser and production build after Kuo’s existing career notes',()=>{
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('career-kuo-service-span-round56.js')<html.indexOf('app.js'));
 assert.match(build,/career-kuo-service-span-round56\.js'\)\.apply\(D\)/);
});
