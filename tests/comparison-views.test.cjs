'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const U=require('../public/domain.js');

function element(){
 const node={innerHTML:'',textContent:'',focus(){},nodes:new Map()};
 node.querySelectorAll=selector=>{
  const attribute=selector.slice(1,-1),key=attribute==='data-ranking-metric'?'rankingMetric':'policyPerson';
  const regex=new RegExp('<(?:button|input)[^>]*'+attribute+'="([^"]+)"[^>]*>','g');
  return [...node.innerHTML.matchAll(regex)].map(match=>{const input={dataset:{[key]:match[1]},checked:/\bchecked\b/.test(match[0]),focus(){}};node.nodes.set('['+attribute+'="'+match[1]+'"]',input);return input;});
 };
 node.querySelector=selector=>{if(!node.nodes.has(selector))node.nodes.set(selector,{focus(){}});return node.nodes.get(selector);};
 return node;
}
function load(file,data){
 const nodes=new Map(),document={querySelector:selector=>{if(!nodes.has(selector))nodes.set(selector,element());return nodes.get(selector);},getElementById:id=>document.querySelector('#'+id)};
 const window={ATLAS:data},context={window,ATLAS:data,AtlasDomain:U,AtlasMedia:{refs:ids=>ids.map(id=>'<a href="#'+id+'">'+id+'</a>').join('')},AtlasProfiles:{portrait:()=>'<span class="photo-frame"></span>'},document};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../public',file),'utf8'),context);
 return {window,document};
}

test('national comparison keeps all 22 counties, an explicit median and selection across metrics',()=>{
 const d=structuredClone(require('../public/data.js'));for(const name of ['taipei-research','taipei-profile-data','four-city-data','policy-data','election-map-data','county-model'])require('../public/'+name+'.js').apply(d);
 const {window,document}=load('county-guide.js',d),host=document.querySelector('#county-ranking');
 window.AtlasCountyGuide.render('taipei');
 assert.equal((host.innerHTML.match(/data-select-city=/g)||[]).length,22);
 assert.match(host.innerHTML,/台北市 · 2,418,066/);assert.match(host.innerHTML,/第 4 \/ 22/);assert.match(host.innerHTML,/各县市等权/);
 assert.equal((host.innerHTML.match(/county-chart-row selected/g)||[]).length,1);
 assert.ok(host.innerHTML.indexOf('data-select-city="new-taipei"')<host.innerHTML.indexOf('data-select-city="taipei"'));
 host.querySelector('[data-ranking-metric="3"]').onclick();
 assert.match(host.innerHTML,/人口同比以零为中心，左减右增/);
 const bars=[...host.innerHTML.matchAll(/class="county-chart-fill" style="left:([\d.]+)%;width:([\d.]+)%/g)].map(m=>[+m[1],+m[2]]);
 assert.equal(bars.length,22);assert.ok(bars.some(([left])=>left<50));assert.ok(bars.some(([left])=>left===50));
 assert.ok(bars.every(([left,width])=>left>=0&&width>=0&&left+width<=100.01));
 window.AtlasCountyGuide.render('hsinchu-city');
 assert.match(host.innerHTML,/人口同比，放在全台看/);assert.match(host.innerHTML,/data-select-city="hsinchu-city" aria-pressed="true"/);
 host.querySelector('[data-ranking-metric="2"]').onclick();assert.match(host.innerHTML,/2024 · 万新台币／纳税单位/);
});

function policyData(){
 const proposal={topic:'education',text:'午餐经费随物价调整。另有家长选择条件。',date:'2026-11-17',note:'预算与适用资格待确认。',type:'竞选主张',electionYear:2026,sources:['source-current']};
 return {cities:[{id:'taipei',name:'台北'},{id:'other',name:'另一县市'}],policyTopics:{education:'教育与学校',water:'治水与环境'},people:[
  {id:'minor',city:'taipei',name:'其他候选人',party:'无党籍',policies:[{...proposal,topic:'water'}]},
  {id:'green',city:'taipei',name:'绿方',party:'DPP',policies:[proposal,{...proposal,electionYear:2022,text:'往届主张',sources:['source-old']},{...proposal,basis:'administration',text:'任内计划',sources:['source-office']}]},
  {id:'blue',city:'taipei',name:'蓝方',party:'KMT',policies:[],policyCoverage:{checkedAt:'2026-11-17',note:'已查公报，未遍查全部采访。',sources:['source-review']}},
  {id:'fourth',city:'taipei',name:'第四人',party:'无党籍',policies:[]},
  {id:'only',city:'other',name:'另一县市候选人',party:'无党籍',policies:[]}
 ]};
}
test('policy matrix defaults to two main candidates, retains full conditions and distinguishes research gaps',()=>{
 const {window,document}=load('policies.js',policyData());window.AtlasPolicies.render('taipei');const host=document.querySelector('#policy-content');
 assert.match(host.innerHTML,/台北 · 绿方 \/ 蓝方 · 日期/);assert.equal((host.innerHTML.match(/data-policy-person=/g)||[]).length,4);
 assert.match(host.innerHTML,/<p class="policy-short">午餐经费随物价调整。<\/p>/);assert.match(host.innerHTML,/<summary>全文、条件与出处<\/summary><p>午餐经费随物价调整。另有家长选择条件。/);
 assert.match(host.innerHTML,/预算与适用资格待确认/);assert.match(host.innerHTML,/href="#source-current"/);assert.match(host.innerHTML,/查核范围 · 2026-11-17/);assert.match(host.innerHTML,/未遍查全部采访/);
 assert.ok(!host.innerHTML.includes('source-old'));assert.ok(!host.innerHTML.includes('source-office'));
 const minor=host.querySelector('[data-policy-person="minor"]');minor.checked=true;minor.onchange();assert.match(host.innerHTML,/已选 3 人/);assert.match(host.innerHTML,/<strong>尚未查核<\/strong>/);
 const fourth=host.querySelector('[data-policy-person="fourth"]');fourth.checked=true;fourth.onchange();assert.equal(fourth.checked,false);assert.match(document.getElementById('policy-selection-status').textContent,/最多同时比较三人/);
 const past=document.getElementById('policy-past');past.onchange({target:{checked:true}});assert.match(host.innerHTML,/source-old/);assert.match(host.innerHTML,/source-office/);
 window.AtlasPolicies.render('other');assert.match(host.innerHTML,/已选 1 人/);assert.ok(!host.innerHTML.includes('data-policy-person="green"'));
 const only=host.querySelector('[data-policy-person="only"]');only.checked=false;only.onchange();assert.equal(only.checked,true);assert.match(document.getElementById('policy-selection-status').textContent,/至少保留一位/);
});
