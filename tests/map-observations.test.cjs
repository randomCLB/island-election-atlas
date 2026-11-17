'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const M=require('../public/election-map.js');
const now=new Date('2026-11-18T02:00:00+08:00');
function data(){return {people:[{id:'a',city:'c',name:'甲',party:'KMT'},{id:'b',city:'c',name:'乙',party:'DPP'},{id:'x',city:'c',name:'丙',party:'无党籍'},{id:'y',city:'c',name:'丁',party:'无党籍'}],sources:{s:{url:'https://example.org/report'}},polls:[],reportedPolls:[],mapBaseline:{c:{party:'KMT',name:'甲'}},elections:[{city:'c',year:2022,complete:true,rows:[['甲','KMT',600],['乙','DPP',400]]}]};}
function context(id,values,fields={}){return {id,city:'c',pollster:id,mapSeries:id,mapUse:'context',start:'2026-11-10',end:'2026-11-12',publishedAt:'2026-11-16',sampleSize:1000,sources:['s'],source:'s',methodSummary:'电话访问，部分方法待核',results:values.map(([person,value])=>({person,value})),...fields};}
function probability(id,values,fields={}){return {...context(id,values),mapUse:undefined,sponsor:'调查单位',director:'调查负责人',population:'20岁以上全县市民众',method:'市话分层随机抽样',sampling:'probability',margin:3,question:'本届候选人支持度',metric:'support',reviewed:true,...fields};}

test('all 11 closing polls feed actual county observations, including opposing Taipei directions',()=>{
 const d=structuredClone(require('../public/data.js'));for(const s of ['taipei-research','taipei-profile-data','four-city-data','policy-data','election-map-data','county-model'])require('../public/'+s+'.js').apply(d);
 const used=new Set();for(const c of d.cities)for(const p of M.assess(d,c.id,2026,now).evidence)if(p.id.startsWith('closing-'))used.add(p.id);
 assert.equal(used.size,11);
 for(const city of ['taipei','new-taipei','taichung','kaohsiung'])assert.equal(M.assess(d,city,2026,now).state,'disagreement');
 for(const city of ['keelung','yilan','hsinchu-city','hualien','taitung'])assert.equal(M.assess(d,city,2026,now).state,'competition');
 assert.equal(M.assess(d,'miaoli',2026,now).pattern,'insufficient');assert.equal(M.assess(d,'tainan',2026,now).state,'no-signal');
 assert.ok(M.assess(d,'taipei',2026,now).evidence.every(p=>!p.id.startsWith('apple-sixcity-')));
});
test('limited closing evidence can signal a close contest without borrowing full-sample uncertainty',()=>{
 const d=data();d.reportedPolls=[context('close',[['a',40],['b',38]],{margin:2.7,resultSampleSize:800})];
 const r=M.assess(d,'c',2026,now);assert.equal(r.state,'competition');assert.equal(r.limited,true);assert.equal(r.evidence[0].mapTier,'context');assert.equal(r.evidence[0].resultSampleSize,800);
 d.reportedPolls=[context('wide',[['a',40],['b',30]],{margin:20})];assert.equal(M.assess(d,'c',2026,now).state,'insufficient');
});
test('cross-party lead is a signal even when the reported gap is wide',()=>{
 const d=data();d.reportedPolls=[context('flip',[['b',50],['a',25]])];const r=M.assess(d,'c',2026,now);assert.equal(r.state,'competition');assert.equal(r.color,'#2879dc');
});
test('opposing leaders take a distinct pattern and keep both series with their dates',()=>{
 const d=data();d.reportedPolls=[context('one',[['a',44],['b',43]]),context('two',[['b',48],['a',34]],{end:'2026-11-13'})];
 const r=M.assess(d,'c',2026,now);assert.equal(r.competitive,true);assert.equal(r.disagreement,true);assert.equal(r.pattern,'disagreement');assert.equal(r.evidence.length,2);assert.equal(r.latestEnd,'2026-11-13');
});
test('one agency latest wave replaces its earlier wave rather than creating artificial disagreement',()=>{
 const d=data();d.reportedPolls=[context('old',[['a',45],['b',30]],{mapSeries:'same',end:'2026-11-11'}),context('new',[['b',42],['a',40]],{mapSeries:'same',end:'2026-11-13'})];
 const r=M.assess(d,'c',2026,now);assert.equal(r.evidence.length,1);assert.equal(r.evidence[0].id,'new');assert.equal(r.disagreement,false);
});
test('candidate identity distinguishes independent contenders and unlike matchups do not create disagreement',()=>{
 const d=data();d.reportedPolls=[context('one',[['x',50],['y',30]]),context('two',[['y',50],['x',30]])];assert.equal(M.assess(d,'c',2026,now).state,'disagreement');
 d.reportedPolls=[context('one',[['a',50],['b',30]]),context('two',[['x',50],['y',30]])];assert.equal(M.assess(d,'c',2026,now).disagreement,false);
 d.reportedPolls=[context('tie',[['a',40],['b',40]]),context('two',[['b',45],['a',30]])];assert.equal(M.assess(d,'c',2026,now).disagreement,false);
});
test('no records, missing provenance and unreviewed online votes stay insufficient',()=>{
 const d=data();assert.equal(M.assess(d,'c',2026,now).pattern,'insufficient');
 d.reportedPolls=[context('unreviewed-vote',[['b',80],['a',20]],{mapUse:undefined}),context('bad-source',[['a',40],['b',39]],{sources:['missing']}),context('forecast',[['b',80],['a',20]],{metric:'forecast'})];
 assert.equal(M.mapEvidenceFor(d,'c',now).length,0);assert.equal(M.assess(d,'c',2026,now).state,'insufficient');
});
test('future, undated, stale and much earlier campaign waves cannot drive current patterns',()=>{
 const d=data();d.reportedPolls=[context('future',[['b',50],['a',30]],{end:'2026-11-20',publishedAt:'2026-11-21'}),context('missing-date',[['b',50],['a',30]],{publishedAt:undefined}),context('stale',[['b',50],['a',30]],{start:'2026-08-01',end:'2026-08-02',publishedAt:'2026-11-17'})];assert.equal(M.mapEvidenceFor(d,'c',now).length,0);
 d.polls=[probability('latest',[['a',50],['b',30]])];d.reportedPolls=[context('early',[['b',50],['a',30]],{start:'2026-09-01',end:'2026-09-02',publishedAt:'2026-09-03'})];assert.equal(M.assess(d,'c',2026,now).state,'no-signal');assert.equal(M.mapEvidenceFor(d,'c',now).length,1);
});
test('historical years retain result colours and show no current survey texture',()=>{
 const d=data();d.reportedPolls=[context('close',[['a',40],['b',39]])];const r=M.assess(d,'c',2022,now);assert.equal(r.state,'historical');assert.equal(r.pattern,'none');assert.equal(r.color,'#2879dc');assert.equal(r.evidence.length,0);
});
