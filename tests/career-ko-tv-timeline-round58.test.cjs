'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8');
for(const[,f]of build.matchAll(/require\('\.\.\/public\/([^']+)\.js'\)\.apply\(D\)/g))require('../public/'+f+'.js').apply(D);

test('Ko TV-host work record gains the official 1988 nomination checkpoint without calling it a win',()=>{
 const p=D.people.find(x=>x.id==='ko'),item=p.workHistory.find(x=>x.organization==='《世界真奇妙》电视节目');
 assert.ok(item);assert.match(item.date,/1988-04官方入围名单/);assert.equal(item.role,'主持人（与梁旅珠共同主持）');assert.match(item.note,/入围不等于获奖/);assert.ok(item.sources.includes('career-ko-tv-timeline-round58'));
 assert.equal(D.sources['career-ko-tv-timeline-round58'].date,'1988-04-01');assert.match(D.sources['career-ko-tv-timeline-round58'].kind,/入围名单/);
});

test('round58 is loaded by the browser and production build before the app starts',()=>{
 const html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.ok(html.indexOf('career-ko-tv-timeline-round58.js')<html.indexOf('app.js'));
 assert.match(build,/career-ko-tv-timeline-round58\.js'\)\.apply\(D\)/);
});
