/* Taipei first research batch. No published polling measurements. */
(function(root){
'use strict';
const node=typeof module!=='undefined';
const parts=node?{sources:require('./taipei-data/sources.js'),people:require('./taipei-data/people.js'),city:require('./taipei-data/city.js'),elections:require('./taipei-data/elections.js')}:root.ATLAS_TAIPEI_PARTS;
const pack={schemaVersion:'1.0',version:'0.2.0-taipei',city:'taipei',checkedAt:'2026-10-02',sources:parts.sources,people:parts.people,cityDossier:parts.city,elections:parts.elections,editorialStatus:'research-first-pass',publishedPollCount:0};
function apply(data){
 if(data.taipeiDossier?.version===pack.version)return data;
 Object.assign(data.sources,pack.sources);
 for(const p of data.people)if(pack.people[p.id])Object.assign(p,pack.people[p.id]);
 data.elections=data.elections.filter(e=>e.city!=='taipei').concat(pack.elections);
 const c=data.cities.find(c=>c.id==='taipei');
 c.history='1994至2022八届结果已建档，官方原表复核状态逐届标注；1951早期民选、1967官派间隔与1987民主化背景分开说明。';
 c.milestones=pack.cityDossier.milestones;
 data.taipeiDossier={...pack.cityDossier,version:pack.version};data.version=pack.version;
 return data;
}
if(node)module.exports={apply,pack};else apply(root.ATLAS);
})(typeof window==='undefined'?globalThis:window);
