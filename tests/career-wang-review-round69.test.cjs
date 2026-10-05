'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);
require('../public/taipei-profile-data.js').apply(D);
require('../public/four-city-data.js').apply(D);
require('../public/career-wang-work-round37.js').apply(D);
require('../public/career-wang-trademark-round41.js').apply(D);
const R=require('../public/career-wang-review-round69.js');R.apply(D);
test('Wang career gaps are marked checked but still unconfirmed, with bounded evidence',()=>{
 const p=D.people.find(x=>x.id==='wang');assert.equal(p.workResearch.checkedAt,'2026-10-05');
 assert.match(p.workResearch.note,/暂未确认/);assert.match(p.workResearch.note,/不等于实际承作/);
 for(const id of p.workResearch.sources)assert.ok(D.sources[id],id);
 const before=JSON.stringify(p.workResearch);R.apply(D);assert.equal(JSON.stringify(p.workResearch),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');
 assert.match(html,/career-wang-review-round69\.js/);
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');
 assert.match(build,/career-wang-review-round69\.js/);
});
