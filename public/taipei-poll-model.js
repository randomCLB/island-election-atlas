(function(root,factory){
  'use strict';
  const api=factory(typeof module==='object'&&module.exports?require('./election-map.js'):root.AtlasElectionMap);
  if(typeof module==='object'&&module.exports)module.exports=api;else root.TaipeiPollMap=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Model){
  'use strict';
  function units(data){return data.councilConstituencies.filter(g=>g.districts.length).map(g=>({id:'taipei-area-'+g.id,number:g.id,name:g.districts.map(name=>data.districts.find(d=>d.name===name).displayName).join('／'),districts:data.districts.filter(d=>g.districts.includes(d.name)).map(d=>d.id)}));}
  function modelData(data){
    const areas=units(data),election=data.elections.find(e=>e.type==='mayor'&&e.year===2022);
    const d={people:[],polls:[],reportedPolls:[],sources:data.sources,mapBaseline:{},elections:[]};
    for(const area of areas){
      const votes=new Map();
      for(const row of election.districts.filter(row=>area.districts.some(id=>data.districts.find(d=>d.id===id).name===row.name)))for(const c of row.candidates){const previous=votes.get(c.name);votes.set(c.name,{...c,votes:c.votes+(previous?.votes||0)});}
      const winner=[...votes.values()].sort((a,b)=>b.votes-a.votes)[0];d.mapBaseline[area.id]={party:winner.party,name:winner.name};
      d.people.push({id:area.id+'-chiang',city:area.id,name:'蒋万安',party:'KMT'},{id:area.id+'-shen',city:area.id,name:'沈伯洋',party:'DPP'});
      for(const survey of data.districtPolls.surveys){
        const row=survey.rows.find(row=>row.unit===area.number);
        if(survey.metric!=='support'||!row||![row.chiang,row.shen].every(Number.isFinite))continue;
        // The shared assessor does not weight by N. For a cross-tab this is the
        // documented parent survey N; the unpublished local N stays null.
        d.reportedPolls.push({id:survey.id+'-'+area.number,city:area.id,pollster:survey.pollster,mapSeries:survey.series,mapUse:'context',metric:'support',start:survey.start,end:survey.end,publishedAt:survey.publishedAt,sampleSize:row.sampleSize??survey.sampleSize,sampleScope:row.sampleSize?'area':'parent-survey',areaSampleSize:row.sampleSize,parentSampleSize:survey.sampleSize,parentQuestionSampleSize:survey.questionSampleSize,sampleSharePct:row.sampleSharePct,population:survey.population,method:survey.method,limit:survey.limit,sources:survey.sources,source:survey.sources[0],undecided:row.undecided,results:[{person:area.id+'-chiang',value:row.chiang},{person:area.id+'-shen',value:row.shen}]});
      }
    }
    return d;
  }
  function assessments(data,now=new Date()){
    const d=modelData(data);return units(data).map(unit=>({...Model.assess(d,unit.id,2026,now),unit}));
  }
  return {units,modelData,assessments};
});
