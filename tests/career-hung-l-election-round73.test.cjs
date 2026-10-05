'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=structuredClone(require('../public/data.js'));
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
for(const f of ['four-city-data','policy-data','career-foreign-round3','career-foreign-round24','career-hung-l-work-claims-round62'])require('../public/'+f+'.js').apply(D);
const round=require('../public/career-hung-l-election-round73.js');round.apply(D);

test('Hung Lihua political history separates official evidence, secondary results, and unknown term dates',()=>{
 const p=D.people.find(x=>x.id==='hung-l'),village=p.politicalHistory.filter(x=>x.organization==='台中市沙鹿区鹿寮里'&&x.role==='里长');
 assert.equal(village.length,1);assert.match(village[0].date,/任期起迄暂未确认/);
 assert.match(village[0].verification,/中选会公报/);assert.match(village[0].note,/暂未从任免或交接记录确认/);
 assert.ok(village[0].sources.includes('career-hung-l-2014-registration-round73'));
 assert.equal(D.sources['career-hung-l-2014-result-round73'].publisherId,'other');
 const city=p.politicalHistory.find(x=>x.sources?.includes('career-hung-l-2018-result-round73'));
 assert.match(city.verification,/官方原始票表尚未查核/);assert.match(city.role,/1,043票（0.82%）/);
 for(const row of [village[0],city])for(const id of row.sources)assert.ok(D.sources[id],id);
});

test('round73 applies idempotently and loads in browser and production build',()=>{
 round.apply(D);const p=D.people.find(x=>x.id==='hung-l');
 assert.equal(p.politicalHistory.filter(x=>x.sources?.includes('career-hung-l-2018-result-round73')).length,1);
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-hung-l-election-round73\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-hung-l-work-claims-round62.js')<html.indexOf('career-hung-l-election-round73.js'));
 assert.ok(html.indexOf('career-hung-l-election-round73.js')<html.indexOf('app.js'));
});
