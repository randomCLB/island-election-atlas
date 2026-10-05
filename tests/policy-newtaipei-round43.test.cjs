'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const D=structuredClone(require('../public/data.js'));
require('../public/four-city-data.js').apply(D);
require('../public/policy-data.js').apply(D);
const R=require('../public/policy-newtaipei-round43.js');
R.apply(D);
test('dated New Taipei campaign statements are compared by issue with source limits',()=>{
 for(const id of ['su-c','lee']){const p=D.people.find(x=>x.id===id);const items=p.policies.filter(x=>x.sources?.some(s=>s.startsWith('policy-newtaipei-round43-')));assert.ok(items.length>=2);assert.ok(items.every(x=>x.electionYear===2026&&x.type.includes('竞选主张')&&x.date==='2026-10-03'&&x.note));for(const x of items)for(const s of x.sources)assert.ok(D.sources[s]);}
 assert.match(D.people.find(x=>x.id==='su-c').policies.find(x=>x.sources?.includes('policy-newtaipei-round43-su')).text,/肠病毒及轮状病毒/);
 assert.match(D.people.find(x=>x.id==='lee').policies.find(x=>x.sources?.includes('policy-newtaipei-round43-lee')).note,/尚未核定/);
});
test('round43 loader is linked before rendering and applies idempotently',()=>{
 const p=D.people.find(x=>x.id==='lee'),before=JSON.stringify(p.policies);R.apply(D);assert.equal(JSON.stringify(p.policies),before);
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.ok(html.indexOf('policy-newtaipei-round43.js')<html.indexOf('policies.js'));assert.ok(html.indexOf('policy-newtaipei-round43.js')<html.indexOf('app.js'));
});
