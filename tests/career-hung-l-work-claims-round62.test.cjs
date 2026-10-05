'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs');
const D=require('../public/data.js');
require('../public/taipei-research.js').apply(D);require('../public/taipei-profile-data.js').apply(D);
for(const f of ['four-city-data','policy-data','career-foreign-round3','career-foreign-round24','career-hung-l-work-claims-round62'])require('../public/'+f+'.js').apply(D);

test('Hung Lihua clothing-work history preserves the conflicting candidate-reported years',()=>{
 const p=D.people.find(x=>x.id==='hung-l'),row=p.workHistory.find(x=>x.organization==='欣雅莉服装行');
 assert.match(row.date,/2018公报：民国74年起.*23年.*2024公报：民国87年起至今/);
 assert.match(row.note,/两版本不一致/);assert.match(row.note,/不裁定哪一版正确/);
 assert.ok(row.sources.includes('career-hung-l-2018'));assert.ok(row.sources.includes('career-hung-l-2024'));
 assert.equal(D.sources['career-hung-l-2018'].publisherId,'official-tw');assert.equal(D.sources['career-hung-l-2024'].publisherId,'official-tw');
 const shop=p.workHistory.find(x=>x.organization==='恒顺村工程行');
 assert.match(shop.date,/公报自述经营16年/);assert.match(shop.note,/未以商号登记或税务资料交叉核实/);
});

test('round62 applies idempotently and loads in browser and production build',()=>{
 const round=require('../public/career-hung-l-work-claims-round62.js');round.apply(D);
 const p=D.people.find(x=>x.id==='hung-l');assert.equal(p.workHistory.filter(x=>x.organization==='欣雅莉服装行').length,1);
 const build=fs.readFileSync(require.resolve('../scripts/build.cjs'),'utf8'),html=fs.readFileSync(require.resolve('../public/index.html'),'utf8');
 assert.match(build,/career-hung-l-work-claims-round62\.js'\)\.apply\(D\)/);
 assert.ok(html.indexOf('career-legislator-terms-round61.js')<html.indexOf('career-hung-l-work-claims-round62.js'));
 assert.ok(html.indexOf('career-hung-l-work-claims-round62.js')<html.indexOf('app.js'));
});
