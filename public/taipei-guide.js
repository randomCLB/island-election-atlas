(function(root,factory){
  'use strict';
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else {root.TaipeiGuide=api;api.start(root.TaipeiGuideData,root.TaipeiGuideMap);}
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const number=n=>Number(n).toLocaleString('en-US');
  const percent=n=>Number(n).toFixed(2);
  const signed=n=>(n>0?'+':n<0?'−':'')+Math.abs(n).toFixed(2);
  function partyName(p){return {'中國國民黨':'国民党','民主進步黨':'民进党','台灣民眾黨':'民众党','無黨籍及未經政黨推薦':'无党籍','無':'无党籍','新黨':'新党','時代力量':'时代力量'}[p]||p;}
  function partyColor(p){return /中國國民黨/.test(p)?'#7eacc4':/民主進步黨/.test(p)?'#83ba9e':/台灣民眾黨/.test(p)?'#83c8c3':/無黨籍|^無$/.test(p)?'#c4c9ba':'#b9a184';}
  function districtChartSeries(data){
    const mayor=data.elections.find(x=>x.type==='mayor'&&x.year===2022);
    const specs=[
      {id:'population',title:'户籍人口',period:'2026.09',unit:'人',source:['population'],value:d=>d.demographics.population,format:n=>number(n)},
      {id:'elderly',title:'65 岁以上人口占比',period:'2026.09',unit:'%',source:['age'],value:d=>d.demographics.elderlyPct,format:n=>`${Number(n).toFixed(2)}%`},
      {id:'income',title:'报税所得中位数',period:'2023',unit:'万元／纳税单位／年',source:['income'],value:d=>d.income.taxIncomeMedianNTD,format:n=>`${(Number(n)/10000).toFixed(1)} 万`},
      {id:'mayor-margin',title:'市长票领先幅度',period:'2022',unit:'百分点',source:[],sourceUrl:mayor.viewSourceUrl||mayor.sourceUrl,value:d=>mayor.districts.find(r=>r.name===d.name).marginPoints,format:n=>`${Number(n).toFixed(2)} 个百分点`,detail:d=>{const row=mayor.districts.find(r=>r.name===d.name);return `${row.districtLeader} +${Number(row.marginPoints).toFixed(2)}`;},color:d=>{const row=mayor.districts.find(r=>r.name===d.name);return partyColor(row.candidates.find(c=>c.name===row.districtLeader).party);}}
    ];
    return specs.map(spec=>{
      const rows=data.districts.map(d=>({districtId:d.id,name:d.displayName,value:spec.value(d),color:spec.color?.(d)||'#d7b779',detail:spec.detail?.(d)||spec.format(spec.value(d))})).sort((a,b)=>b.value-a.value);
      const max=Math.max(...rows.map(r=>r.value));
      return {...spec,rows:rows.map(r=>({...r,width:100*r.value/max,ariaValue:spec.id==='mayor-margin'?`${r.detail} 个百分点领先`:r.detail}))};
    });
  }
  function aggregateElection(election){
    if(election.geography!=='administrativeDistrict')throw new Error('Only administrative-district results may be aggregated for this comparison.');
    const result={name:'臺北市全市',validVotes:0,invalidVotes:0,votesCast:0,eligibleVoters:0,candidates:[]},byName=new Map();
    for(const d of election.districts){
      for(const field of ['validVotes','invalidVotes','votesCast','eligibleVoters'])result[field]+=d[field];
      for(const c of d.candidates){if(!byName.has(c.name))byName.set(c.name,{...c,votes:0});byName.get(c.name).votes+=c.votes;}
    }
    result.candidates=[...byName.values()].map(c=>({...c,share:100*c.votes/result.validVotes})).sort((a,b)=>b.votes-a.votes);
    result.turnout=100*result.votesCast/result.eligibleVoters;
    result.districtLeader=result.candidates[0].name;
    result.marginVotes=result.candidates[0].votes-result.candidates[1].votes;
    result.marginPoints=100*result.marginVotes/result.validVotes;
    return result;
  }
  function constituenciesForDistrict(boundaries,name){return boundaries.filter(b=>b.fullDistricts.includes(name)||b.partialDistricts.some(p=>p.district===name));}
  function readRoute(href,data){
    const params=new URL(href,'https://atlas.invalid/').searchParams;
    const district=data.districts.find(d=>d.id===params.get('district'))?.id||'zhongshan';
    const election=data.elections.find(e=>e.id===params.get('election')&&e.geography==='administrativeDistrict')?.id||'cec-C1-00-2022';
    const peer=data.districts.find(d=>d.id===params.get('peer')&&d.id!==district)?.id||(district==='neihu'?'wanhua':'neihu');
    const compare=data.districts.find(d=>d.id===params.get('compare')&&d.id!==district)?.id||'city';
    return {district,election,peer,compare,mapMode:['district','age','votes'].includes(params.get('layer'))?params.get('layer'):'district'};
  }
  function start(D,G){
    if(!D||!G||typeof document==='undefined')return;
    const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],e=escape;
    const state=readRoute(location.href,D),eligibleElections=D.elections.filter(x=>x.geography==='administrativeDistrict');
    const district=()=>D.districts.find(d=>d.id===state.district);
    const election=()=>D.elections.find(x=>x.id===state.election);
    const label=title=>e(title);
    const link=(url,title)=>/^https:\/\//.test(url||'')?`<a href="${e(url)}" target="_blank" rel="noopener noreferrer">${label(title)} ↗</a>`:e(title);
    const sourceLinks=(ids=[])=>`<div class="source-links">${[...new Set(ids)].map(id=>{const s=D.sources[id];return s?link(s.url,s.title):'';}).join('')}</div>`;
    const sourceDate=s=>s.dataDate?`资料 ${s.dataDate}`:s.eventDate?`事件 ${s.eventDate}`:s.publicationDate?`发布 ${s.publicationDate}`:s.pageUpdatedAt?`页面更新 ${s.pageUpdatedAt}`:'原页面未列统计日期';
    const districtName=name=>D.districts.find(d=>d.name===name)?.displayName||name.replace('臺北市','台北').replace('區','区');
    function saveRoute(push=true){
      const url=new URL(location.href);for(const key of ['district','election','peer','compare'])url.searchParams.set(key,state[key]);url.searchParams.set('layer',state.mapMode);
      history[push?'pushState':'replaceState'](null,'',url.pathname+url.search+url.hash);
    }
    function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('show'),3300);}
    function optionList(includeCity=false){return (includeCity?'<option value="city">台北全市</option>':'')+D.districts.map(d=>`<option value="${d.id}">${e(d.displayName)}区</option>`).join('');}
    function initControls(){
      $('#district-options').innerHTML=D.districts.map(d=>`<button data-district="${d.id}" aria-pressed="false">${e(d.displayName)}</button>`).join('');
      const names={mayor:'市长',president:'总统',partyList:'政党票'};
      $('#election-options').innerHTML=eligibleElections.map(x=>`<button data-election="${x.id}" aria-pressed="false">${x.year} ${names[x.type]}</button>`).join('');
      $('#ballot-comparison').innerHTML=optionList(true);$('#compare-district').innerHTML=optionList();
      const shapes=G.features.map(f=>{const d=D.districts.find(d=>d.name===f.name);return `<path id="map-${d.id}" class="district-shape" data-district="${d.id}" role="button" tabindex="0" aria-label="查看${e(d.displayName)}区" aria-pressed="false" d="${f.path}" fill="#42615c"><title>${e(d.displayName)}区</title></path>`;}).join('');
      const labels=G.features.map(f=>{const d=D.districts.find(d=>d.name===f.name);return `<text class="district-label" data-label="${d.id}" x="${f.label[0]}" y="${f.label[1]+5}">${e(d.displayName)}</text>`;}).join('');
      $('#taipei-map').innerHTML=shapes+labels;
    }
    function mapFill(d){
      if(state.mapMode==='votes'){const result=D.elections.find(x=>x.year===2022&&x.type==='mayor').districts.find(x=>x.name===d.name);return partyColor(result.candidates[0].party);}
      if(state.mapMode==='age'){
        const t=(d.demographics.elderlyPct-21)/(28-21),from=[41,71,72],to=[210,183,127];return '#'+from.map((v,i)=>Math.round(v+(to[i]-v)*t).toString(16).padStart(2,'0')).join('');
      }
      return d.id===state.district?'#7e916c':['#334f49','#3e5c53','#476453','#354e49'][D.districts.indexOf(d)%4];
    }
    function renderMap(){
      const d=district();
      for(const x of D.districts){
        const shape=$('#map-'+x.id),selected=x.id===d.id;shape.setAttribute('fill',mapFill(x));shape.classList.toggle('selected',selected);shape.setAttribute('aria-pressed',String(selected));
        let detail='';if(state.mapMode==='age')detail=`，65岁以上占${percent(x.demographics.elderlyPct)}%`;
        if(state.mapMode==='votes'){const row=D.elections.find(r=>r.year===2022&&r.type==='mayor').districts.find(r=>r.name===x.name);detail=`，2022市长选举本区最高票${row.districtLeader}`;}
        shape.setAttribute('aria-label',`查看${x.displayName}区${detail}`);shape.querySelector('title').textContent=x.displayName+'区'+detail;
        $(`[data-label="${x.id}"]`).classList.toggle('selected',selected);
      }
      $$('[data-map-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mapMode===state.mapMode)));
      $('#map-legend').innerHTML=state.mapMode==='age'?'<span>2026.09 · 65 岁以上</span><span>21% <i class="gradient"></i> 28%</span>':state.mapMode==='votes'?'<span><i style="background:#7eacc4"></i>国民党候选人在该区最高票</span><span><i style="background:#83ba9e"></i>民进党候选人在该区最高票</span>':'<span><i style="background:#7e916c"></i>当前所选行政区</span><span>面积显示地理大小，不代表人口或票数</span>';
      const row=D.elections.find(r=>r.year===2022&&r.type==='mayor').districts.find(r=>r.name===d.name);
      const extra=state.mapMode==='age'?`65 岁以上 ${percent(d.demographics.elderlyPct)}% · 全市 ${percent(D.cityDemographics.elderlyPct)}%`:state.mapMode==='votes'?`2022 本区最高票 ${row.districtLeader} · 领先 ${percent(row.marginPoints)} 个百分点`:d.tagline;
      $('#map-reading').innerHTML=`<span class="map-reading-name">${e(d.displayName)}</span><p>${e(extra)}<br>户籍人口 ${number(d.demographics.population)} 人 · 2026.09</p><a href="#district-dossier">展开资料 ↓</a>`;
    }
    function renderDossier(){
      const d=district(),p=d.demographics,b=d.businessStats,inc=d.income;
      document.title=`${d.displayName}区 · 台北十二区 · 岛屿选战`;
      document.body.dataset.currentDistrict=d.id;
      $('#district-title').textContent=d.displayName+'区';$('#district-deck').textContent=d.tagline;
      $('#district-kicker').textContent=`${String(D.districts.indexOf(d)+1).padStart(2,'0')} / THE PLACE BEHIND THE VOTES`;
      const metric=(title,value,unit,note)=>`<div class="metric"><span class="metric-label">${e(title)}</span><strong>${value}<small>${e(unit)}</small></strong><span class="metric-note">${e(note)}</span></div>`;
      $('#district-metrics').innerHTML=metric('户籍人口',number(p.population),'人',`${number(p.households)} 户 · ${p.villages} 里`)+metric('65 岁以上',percent(p.elderlyPct),'%',`全市 ${percent(D.cityDemographics.elderlyPct)}% · ${number(p.elderly65Plus)} 人`)+metric('0—14 岁',percent(p.childrenPct),'%',`全市 ${percent(D.cityDemographics.childrenPct)}% · ${number(p.children0to14)} 人`)+metric('人口同比变化',signed(p.populationChangeYoYPct),'%',`较去年同月${p.populationChangeYoY>=0?'增加':'减少'} ${number(Math.abs(p.populationChangeYoY))} 人`);
      $('#district-story').innerHTML=`<h3>这里是什么样的地方？</h3><p>${e(d.profile)}</p><div class="localities"><p>读这一页时，同时留意“在此居住的人”“白天来工作的人”和“登记在此的企业”。这三种人口与经济活动，不会完全重叠。</p></div>${sourceLinks(d.profileSourceIds)}`;
      $('#district-economy').innerHTML=`<h3>产业与经济底色</h3><p>${e(d.industry)}</p><div class="economy-stat"><span>${inc.incomeTaxYear} 报税所得中位数<br><small>每纳税单位／年，非人均薪资或家庭可支配所得</small></span><b>${(inc.taxIncomeMedianNTD/10000).toFixed(1)}<small> 万元</small></b></div><div class="economy-stat"><span>登记公司／商号<br><small>${e(b.versionUpdatedAt)} 更新版本</small></span><b>${number(b.registeredCompanies)}<small>／${number(b.registeredBusinesses)} 家</small></b></div><p>所得金额为新台币。公司及商号按登记地址统计；CSV 未列统计月，不能据更新日当作月底数据。</p><details class="method-detail"><summary>公司登记最多的行业</summary>${b.companyTopIndustries.map(x=>`<div class="economy-stat"><span>${e(x.industry)}</span><span>${number(x.count)} 家 <small>／${percent(x.sharePct)}%</small></span></div>`).join('')}<p>比率分母为本区登记公司总数。登记行业不能替代本区实际就业结构或产值。</p></details>${sourceLinks([...inc.sourceIds,...b.sourceIds])}`;
      $('#district-issues').innerHTML=d.issues.map((x,i)=>{
        const perspectives=[...new Set(x.sourceIds.map(id=>D.sources[id]?.sourcePerspective).filter(Boolean))];
        return `<article class="issue"><span class="issue-number">0${i+1}</span><h4>${e(x.title)}</h4><p>${e(x.background)}</p><p class="question"><span>可以继续追问</span>${e(x.question)}</p><p class="responsibility">谁负责：${e(x.responsibility)}</p>${perspectives.length?`<p class="micro">来源视角：${e(perspectives.join('；'))}</p>`:''}${sourceLinks(x.sourceIds)}</article>`;
      }).join('');
    }
    function renderDistrictCharts(){
      const charts=districtChartSeries(D);
      $('#district-chart-grid').innerHTML=charts.map(chart=>`<article class="district-chart"><div class="district-chart-heading"><h3>${e(chart.title)}</h3><span>${e(chart.period)} · ${e(chart.unit)}</span></div><ol>${chart.rows.map(row=>`<li><button class="chart-row" data-district="${e(row.districtId)}" aria-label="选择${e(row.name)}区，${e(chart.title)}：${e(row.ariaValue)}"><span class="chart-name">${e(row.name)}区</span><span class="chart-track" aria-hidden="true"><span class="chart-fill" style="width:${row.width.toFixed(2)}%;background:${e(row.color)}"></span></span><span class="chart-value">${e(row.detail)}</span></button></li>`).join('')}</ol>${sourceLinks(chart.source)}${chart.sourceUrl?`<div class="source-links">${link(chart.sourceUrl,'中选会 2022 年台北市长结果表')}</div>`:''}</article>`).join('');
      updateDistrictChartSelection();
    }
    function updateDistrictChartSelection(){
      $$('.chart-row').forEach(row=>{
        const selected=row.dataset.district===state.district;
        row.classList.toggle('selected',selected);row.setAttribute('aria-pressed',String(selected));
      });
    }
    function voteRows(candidates){return candidates.map(c=>`<div class="ballot-row"><div class="ballot-row-header"><span class="ballot-name">${e(c.name)} <small>${e(partyName(c.party))}</small></span><b>${percent(c.share)}%</b></div><div class="bar-track"><i style="width:${Math.max(0,Math.min(100,c.share))}%;background:${partyColor(c.party)}"></i></div><div class="vote-count">${number(c.votes)} 票</div></div>`).join('');}
    function resultCard(row,title,wholeCity=false){
      const first=row.candidates.slice(0,3),rest=row.candidates.slice(3);
      return `<article class="ballot-card"><h3>${e(title)}</h3><p class="turnout">投票率 ${percent(row.turnout)}% · 选举人数 ${number(row.eligibleVoters)}<br>有效票 ${number(row.validVotes)} · 无效票 ${number(row.invalidVotes)}${wholeCity?' · 十二行政区加总':''}</p>${voteRows(first)}${rest.length?`<details class="ballot-more"><summary>查看其余 ${rest.length} ${e(election().type==='partyList'?'个政党':'组候选人')}（已计入全部有效票）</summary>${voteRows(rest)}</details>`:''}<div class="margin-note"><b>${percent(row.marginPoints)}</b><span>第一、二名差距（百分点）<br>相差 ${number(row.marginVotes)} 票</span></div></article>`;
    }
    function renderBallots(){
      const d=district(),el=election(),row=el.districts.find(x=>x.name===d.name),peer=state.compare==='city'?aggregateElection(el):el.districts.find(x=>x.name===D.districts.find(d=>d.id===state.compare).name);
      $('#ballot-comparison').value=state.compare;
      [...$('#ballot-comparison').options].forEach(o=>{o.disabled=o.value===d.id;});
      $$('[data-election]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.election===el.id)));
      $('#election-caption').innerHTML=`<span>${e(el.date)} · ${el.type==='mayor'?'市长':el.type==='president'?'总统／副总统':'全国不分区及侨居国外国民立委政党票'} · ${e(d.displayName)}行政区层级</span>${link(el.viewSourceUrl||el.sourceUrl,'中选会原始票表')}`;
      $('#ballot-results').innerHTML=resultCard(row,d.displayName+'区')+resultCard(peer,state.compare==='city'?'台北全市':D.districts.find(d=>d.id===state.compare).displayName+'区',state.compare==='city');
      $('#history-strip').innerHTML=D.elections.filter(x=>x.type==='mayor').sort((a,b)=>a.year-b.year).map(el=>{const r=el.districts.find(x=>x.name===d.name);return `<div class="history-item"><span>${el.year} / 市长票</span><strong>${e(r.districtLeader)}在本区最高票</strong><p>领先 ${percent(r.marginPoints)} 个百分点<br>投票率 ${percent(r.turnout)}%</p><div class="history-dots" aria-hidden="true">${r.candidates.map(c=>`<i style="width:${c.share}%;background:${partyColor(c.party)}"></i>`).join('')}</div></div>`;}).join('');
    }
    function renderRepresentation(){
      const d=district(),bounds=constituenciesForDistrict(D.legislativeBoundaries,d.name),legElection=D.elections.find(x=>x.type==='legislator');
      $('#representation-context').innerHTML=bounds.length>1?`<strong>${e(d.displayName)}区横跨两个立委选区。</strong> 要知道具体由谁代表，需要继续查到所属的里；下面同时列出两席及各自覆盖范围。2026 年 11 月改选市长、市议员与里长，<strong>不改选立委</strong>。`:`${e(d.displayName)}区属于<strong>台北市第 ${bounds[0].id} 立委选区</strong>。下列立委资料是现任代表与 2024 选举背景；2026 年 11 月改选市长、市议员与里长，<strong>不改选立委</strong>。`;
      $('#representative-list').innerHTML=bounds.map(b=>{
        const p=D.legislators.find(x=>x.constituency===b.id),r=legElection.districts.find(x=>Number(x.code)===b.id)||legElection.districts.find(x=>Number(x.name.match(/\d+/)?.[0])===b.id);
        const partial=b.partialDistricts.find(x=>x.district===d.name),scope=b.fullDistricts.map(districtName).join('、')+'全区'+(b.partialDistricts.length?' ＋ '+b.partialDistricts.map(x=>districtName(x.district)+x.villages.length+'里').join('、'):'');
        return `<article class="representative"><p class="eyebrow">LEGISLATIVE DISTRICT ${String(b.id).padStart(2,'0')} / 区域立委</p><div class="rep-top"><h3>${e(p.name)}</h3><span class="party-mark"><i style="background:${partyColor(p.party)}"></i>${e(partyName(p.party))}</span></div><p class="rep-scope">覆盖 ${e(scope)}${partial?`<br>本区只有所列 ${partial.villages.length} 里属于此席。`:''}</p><div class="rep-result"><span>2024 得票率<b>${percent(p.share2024)}<small>%</small></b></span><span>得票数<b>${number(p.votes2024)}<small>票</small></b></span><span>领先第二名<b>${percent(p.marginPoints2024)}<small>百分点</small></b></span></div><p class="rep-current">第 11 届立委 · 本届自 ${e(p.servingSince)} 起 · 现任状态核对 ${e(p.statusCheckedAt)}。<br>上述为完整立委选区结果，${bounds.length>1?'不是整个'+e(d.displayName)+'区的结果':'不可拆作选区内每个行政区的票数'}。${p.recall2025?`<br>${e(p.recall2025.date)} 罢免案否决。 ${link(p.recall2025.noticeUrl,'中选会公告')}`:''}</p><details class="village-boundary"><summary>${partial?'查本区对应的里名':'查看官方完整选区范围'}</summary><p>${e(b.scope)}</p>${link(b.sourceUrl,'官方选区范围 CSV')}</details><details class="rep-result-details"><summary>2024 该选区完整竞争结果</summary><table class="compact-results"><caption class="micro">${e(b.name)} · 2024-01-13</caption><thead><tr><th scope="col">候选人／党籍</th><th scope="col">票数</th><th scope="col">得票率</th></tr></thead><tbody>${r.candidates.map(c=>`<tr><td>${e(c.name)} <small>${e(partyName(c.party))}</small></td><td>${number(c.votes)}</td><td>${percent(c.share)}%</td></tr>`).join('')}</tbody></table><p>投票率 ${percent(r.turnout)}% · 有效票 ${number(r.validVotes)} · 选举人数 ${number(r.eligibleVoters)}</p>${link(legElection.viewSourceUrl,'官方票表')}</details><div class="source-links">${link(p.sourceUrl,'立法院委员资料')} ${link(b.sourceUrl,'选区范围')}</div></article>`;
      }).join('');
      const c=D.council.councilGroups.find(x=>x.type==='regional'&&x.districts.includes(d.name)),rule=D.councilConstituencies.find(x=>x.id===c.id),sources=D.council.sources;
      const active=c.candidates.filter(x=>!x.eligibilityStatus.startsWith('disqualified')),excluded=c.candidates.filter(x=>x.eligibilityStatus.startsWith('disqualified'));
      const chips=arr=>`<div class="candidate-chips">${arr.map(x=>`<span>${e(x.name)}<small>${e(partyName(x.party))}</small></span>`).join('')}</div>`;
      const special=D.council.councilGroups.filter(x=>x.type!=='regional');
      $('#council-info').innerHTML=`<div class="council-top"><div><p class="eyebrow">CITY COUNCIL / 2026 地方选举</p><h3>市议员第 ${c.id} 选区 · ${c.districts.map(districtName).map(e).join('、')}</h3><p>这里是两个行政区合在一起、多人竞争多个席次。每张议员票只选一人，依个人得票决定当选并适用妇女保障；同党候选人的票不会合并分配席次。本区一般议员名额 ${c.seats2026} 席，妇女保障 ${rule.reservedWomenSeats} 席包含在总名额内。</p></div><div class="council-counts"><span><b>${c.afterEligibilityReviewCount}</b>资格审查后参选人</span><span><b>${c.seats2026}</b>一般议员席次</span></div></div><p class="council-note">资料阶段：${e(c.registeredCountAsOf)} 编制的登记册列 ${c.registeredCount} 人；与 2026-10-16 资格审查公告交叉整理，扣除已知不符资格 ${c.knownDisqualifiedCount} 人。最终仍以正式候选人名册及后续裁决为准。号次 10 月 23 日抽签，本页不把登记顺序标为候选号码。</p><details><summary>查看本区参选名单与资料状态</summary>${chips(active)}${excluded.length?`<p class="council-note">资格不符：${excluded.map(x=>e(x.name)).join('、')}（2026-10-16 中选会公告；保留登记记录，未列入上方人数）。</p>`:''}<p class="council-note">名单沿用官方登记次序；排序不代表支持率或票面号次。</p></details><details><summary>原住民议员为何另有选区？</summary><p class="council-note">第 7、8 选区分别为全市平地原住民、全市山地原住民，依原住民身分适用选区，不按这六组行政区划分。各 1 席，全市议员合计 ${D.council.councilSeatTotal} 席。</p>${special.map(s=>`<p class="council-note">${e(s.name)} · ${s.districts.map(e).join("、")} · ${s.seats2026} 席</p>${chips(s.candidates)}`).join('')}</details><div class="source-links">${link(sources.registration.url,'台北市选委会登记册')} ${link(sources.eligibility.url,'10/16 资格审查')} ${link(sources.seats.pdf,'2026 席次公告，第 3 页')} ${link('https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0020010','选罢法第 3、67、68 条')}</div>`;
    }
    function renderComparison(){
      const d=district();if(state.peer===d.id)state.peer=d.id==='neihu'?'wanhua':'neihu';
      $('#compare-district').value=state.peer;[...$('#compare-district').options].forEach(o=>{o.disabled=o.value===d.id;});
      const peer=D.districts.find(x=>x.id===state.peer),mayor=D.elections.find(x=>x.type==='mayor'&&x.year===2022),row=x=>mayor.districts.find(r=>r.name===x.name);
      const metrics=[
        ['户籍人口 · 2026.09',x=>`<span class="num">${number(x.demographics.population)}</span> 人`],
        ['65 岁以上 / 0—14 岁',x=>`<span class="num">${percent(x.demographics.elderlyPct)}% / ${percent(x.demographics.childrenPct)}%</span>`],
        ['人口同比变化',x=>`<span class="num">${signed(x.demographics.populationChangeYoYPct)}%</span><small>较 2025 年 9 月</small>`],
        ['报税所得中位数 · 2023',x=>`<span class="num">${(x.income.taxIncomeMedianNTD/10000).toFixed(1)} 万元</span><small>新台币／纳税单位／年</small>`],
        ['公司 / 商号登记',x=>`<span class="num">${number(x.businessStats.registeredCompanies)} / ${number(x.businessStats.registeredBusinesses)}</span><small>2026-09-23 更新版，家数</small>`],
        ['2022 市长票：本区最高票',x=>`${e(row(x).districtLeader)}<small>领先第二名 ${percent(row(x).marginPoints)} 个百分点</small>`],
        ['2022 市长选举投票率',x=>`<span class="num">${percent(row(x).turnout)}%</span>`],
        ['现任区域立委',x=>constituenciesForDistrict(D.legislativeBoundaries,x.name).map(b=>`第 ${b.id} 选区 ${e(D.legislators.find(p=>p.constituency===b.id).name)}`).join('<br>')],
        ['值得继续了解的问题',x=>x.issues.map(i=>e(i.title)).join('；')]
      ];
      $('#comparison-table').innerHTML=`<table class="compare-table"><thead><tr><th scope="col">同口径并列查看</th><th scope="col">${e(d.displayName)}区</th><th scope="col">${e(peer.displayName)}区</th></tr></thead><tbody>${metrics.map(([title,fn])=>`<tr><th scope="row">${e(title)}</th><td>${fn(d)}</td><td>${fn(peer)}</td></tr>`).join('')}</tbody></table>`;
    }
    function renderCurrent(){
      const s=D.council.sources;
      $('#current-election').innerHTML=`<div class="current-dates"><div><time datetime="2026-10-16">10.16</time><p>资格审查公告<br>已公布</p></div><div><time datetime="2026-10-23">10.23</time><p>候选人号次抽签<br>截至核对日尚未举行</p></div><div><time datetime="2026-11-28">11.28</time><p>投票日<br>08:00—16:00 · 台北时间</p></div></div><p class="current-summary">台北市长 10 月 16 日资格审查合格 ${D.council.mayorCandidates.length} 人：${D.council.mayorCandidates.map(x=>e(x.name)).join('、')}。市长人物与政见资料可回到 <a href="index.html#/taipei">台北市长档案</a> 查看。本专题专注行政区背景与地方代表。市议员登记 ${D.council.registrationCount} 人；扣除 10 月 16 日公告的 1 名不符资格者，资格审查后共 ${D.council.afterEligibilityReviewCount} 人，含一般及原住民选区。后续状态须随正式公告更新。</p><div class="source-links">${link(s.mayorRegistration.url,'市长登记册')} ${link(s.eligibility.url,'资格审查公告')} ${link(s.calendar.url,'选务工作日程')}</div>`;
    }
    function renderCouncilOverview(){
      const rows=D.council.councilGroups.filter(x=>x.type==='regional');
      $('#council-overview').innerHTML=`<h3>全市议员选区，一起看。</h3><p class="council-note">人数按 10 月 16 日资格审查公告整理，包含登记在册且未被公告不符资格者。妇女保障包含在应选席次内，也不是女性当选人数的上限。人数与席次只说明竞选结构，不代表谁占优势。</p><div class="table-scroll"><table class="council-table"><thead><tr><th scope="col">一般议员选区</th><th scope="col">行政区</th><th scope="col">参选人数</th><th scope="col">应选席次</th><th scope="col">妇女保障</th></tr></thead><tbody>${rows.map(c=>`<tr><th scope="row">第 ${c.id} 选区</th><td>${c.districts.map(districtName).map(e).join('、')}</td><td>${c.afterEligibilityReviewCount}</td><td>${c.seats2026}</td><td>${D.councilConstituencies.find(x=>x.id===c.id).reservedWomenSeats}</td></tr>`).join('')}</tbody></table></div><p class="council-note">另有全市平地原住民 1 席、山地原住民 1 席，分别为 2、3 位参选人。所有选区合计 61 席；可在上方“谁代表这里”展开对应名单。</p>${link(D.council.sources.seats.url,'官方选区与名额公告')}`;
    }
    function renderSources(){
      const sources=Object.values(D.sources).map(s=>({title:s.title,url:s.url,note:[sourceDate(s),s.sourcePerspective,s.statusNote,s.note].filter(Boolean).join('；')}));
      for(const el of D.elections)sources.push({title:`中选会 · ${el.year} ${el.type==='mayor'?'市长':el.type==='president'?'总统／副总统':el.type==='partyList'?'政党票':'区域立委'}选举原始结果`,url:el.viewSourceUrl||el.sourceUrl,note:`选举日期 ${el.date}；${el.geography==='administrativeDistrict'?'十二行政区全部候选人／政党':'八个完整立委选区'}，附有效票、无效票、选举人数与投票率。`});
      for(const p of D.legislators)sources.push({title:`立法院 · ${p.name}委员资料`,url:p.sourceUrl,note:`现任状态核对 ${p.statusCheckedAt}；第 ${p.constituency} 选区。`});
      for(const [key,s] of Object.entries(D.council.sources))sources.push({title:{registration:'2026 台北市议员登记册',seats:'2026 地方选举选区与名额公告',eligibility:'2026-10-16 候选人资格审查',mayorRegistration:'2026 台北市长登记册',calendar:'2026 地方公职人员选举工作日程'}[key]||key,url:s.url,note:s.published?`公布 ${s.published}`:'核对 2026-10-20'});
      sources.push({title:'台北市民政局 · 十二行政区界图',url:G.source,note:`区界版本 ${G.boundaryDate}；${G.license}。门户更新日期不等于区界重划日期；原始区界转投影，无拓扑简化。`});
      sources.push({title:'中选会 · 第 11 届立委选区范围',url:D.legislativeBoundaries[0].sourceUrl,note:'按完整行政区与里名记录覆盖关系，不以行政区边界代替立委选区。'});
      $('#source-index').innerHTML=`<p class="source-note">统一核对日：${e(D.checkedAt)}。${e(D.dataNotes.join(' '))}</p>${sources.map(s=>`<article class="source-entry">${link(s.url,s.title)}<p>${e(s.note)}</p></article>`).join('')}`;
    }
    function renderAll(){
      $$('[data-district]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.district===state.district)));
      renderMap();renderDossier();renderBallots();renderRepresentation();renderComparison();updateDistrictChartSelection();
    }
    function changeDistrict(id){if(!D.districts.some(d=>d.id===id)||state.district===id)return;state.district=id;if(state.compare===id)state.compare='city';if(state.peer===id)state.peer=id==='neihu'?'wanhua':'neihu';saveRoute();renderAll();}
    document.addEventListener('click',async event=>{
      const d=event.target.closest('[data-district]');if(d){changeDistrict(d.dataset.district);return;}
      const m=event.target.closest('[data-map-mode]');if(m){state.mapMode=m.dataset.mapMode;saveRoute();renderMap();return;}
      const b=event.target.closest('[data-election]');if(b){state.election=b.dataset.election;saveRoute();renderBallots();return;}
      if(event.target.closest('#copy-district')){
        const url=new URL(location.href);url.hash='district-dossier';
        try{await navigator.clipboard.writeText(url.href);toast('已复制本区与当前选票视图的链接。');}catch{toast('复制不可用，可直接复制浏览器地址栏中的本区链接。');}
      }
    });
    $('#taipei-map').addEventListener('keydown',event=>{const d=event.target.closest('[data-district]');if(d&&(event.key==='Enter'||event.key===' ')){event.preventDefault();changeDistrict(d.dataset.district);}});
    $('#ballot-comparison').addEventListener('change',event=>{state.compare=event.target.value;saveRoute();renderBallots();});
    $('#compare-district').addEventListener('change',event=>{state.peer=event.target.value;saveRoute();renderComparison();});
    window.addEventListener('popstate',()=>{Object.assign(state,readRoute(location.href,D));renderAll();});
    initControls();saveRoute(false);renderAll();renderDistrictCharts();renderCurrent();renderCouncilOverview();renderSources();
  }
  return {aggregateElection,constituenciesForDistrict,districtChartSeries,readRoute,partyColor,start};
});
