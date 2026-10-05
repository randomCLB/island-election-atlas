'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);
require('../public/taipei-profile-data.js').apply(D);
for(const f of ['four-city-data','policy-data','policy-kuo-referendum-round55','policy-wang-empty-round47','policy-wang-search-round75','policy-newtaipei-round43','policy-hung-fanglong-round44','career-foreign-round3','career-foreign-round19','career-foreign-round20','career-foreign-round21','career-foreign-round24','career-foreign-round25','career-foreign-round26','career-foreign-round27','career-foreign-round29','career-foreign-round30','career-foreign-round31','career-foreign-round32','career-foreign-round33','career-foreign-round34','career-tainan-chen-anchor-round35','career-chen-foreign-round46','career-chiang-silicon-valley-round48','career-ko-role-dates-round50','career-ko-dean-end-round54','career-chen-tv-timeline-round51','career-chen-work-review-round72','career-lai-role-dates-round52','career-hsiao-principal-dates-round49','career-su-h-community-round36','career-su-role-dates-round53','career-wang-work-round37','career-chang-discipline-round38','career-wang-education-round39','career-tang-education-review-round40','career-tang-channel-round68','career-wang-trademark-round41','career-wang-review-round69','career-lin-sports-archive-round42','career-lin-coach-round66','career-lin-review-round74','career-kuo-service-span-round56','career-shen-us-city-governance-round57','career-ko-tv-timeline-round58','career-yeh-street-performance-round59','career-ho-term-dates-round60','career-legislator-terms-round61','career-hung-l-work-claims-round62','career-hung-l-election-round73','career-su-h-ccp-statement-round63','career-su-h-2024-result-round64','career-su-h-publisher-round70','career-hsiao-l-tour-guide-round71','career-ho-work-round65','career-yeh-campus-round67','career-chang-review-round76'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-work-coverage-round77.js');R.apply(D);
test('all candidate work-history panels distinguish known unknowns from unchecked records',()=>{
 const missing=D.people.filter(p=>p.workHistory?.length&&!p.workResearch);
 assert.deepEqual(missing.map(p=>p.id),[]);
 for(const p of D.people.filter(p=>p.workHistory?.length)){
  assert.match(p.workResearch.note,/已查：/ ,p.id);
  assert.match(p.workResearch.note,/暂未确认/,p.id);
  assert.match(p.workResearch.note,/尚未查核：/,p.id);
  assert.ok(p.workResearch.sources.length,p.id);
  assert.ok(p.workResearch.sources.every(s=>D.sources[s]),p.id);
 }
});
test('round77 adds only missing review notes and loads before profile rendering',()=>{
 const before=JSON.stringify(D.people.map(p=>p.workResearch));R.apply(D);assert.equal(JSON.stringify(D.people.map(p=>p.workResearch)),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('career-hsiao-principal-dates-round49.js')<html.indexOf('career-work-coverage-round77.js'));assert.ok(html.indexOf('career-work-coverage-round77.js')<html.indexOf('election-map-data.js'));
 const build=fs.readFileSync(path.join(__dirname,'../scripts/build.cjs'),'utf8');assert.ok(build.indexOf("career-work-coverage-round77.js")>=0);
 assert.match(fs.readFileSync(path.join(__dirname,'../public/profile-details.js'),'utf8'),/履历查核状态：暂未确认/);
 assert.match(fs.readFileSync(path.join(__dirname,'../public/profile-details.js'),'utf8'),/履历查核状态：尚未查核/);
});
