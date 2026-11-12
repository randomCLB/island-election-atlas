(function () {
'use strict';
const D = window.ATLAS;
const escape = AtlasDomain.esc;
const fmt = new Intl.NumberFormat('zh-CN');
const number = value => fmt.format(value);
const percent = value => value.toFixed(1) + '%';
const share = (votes, total) => total > 0 ? percent(100 * votes / total) : '—';
const partyName = p => ({KMT:'国民党', DPP:'民进党'})[p] || p;
const refs = ids => AtlasMedia.refs(ids);
let comparison = null;
let selected = null;

function options(selected, omit) {
  const groups = new Map();
  for (const c of D.cities) {
    if (c.id === omit) continue;
    if (!groups.has(c.region)) groups.set(c.region, []);
    groups.get(c.region).push('<option value="' + c.id + '"' + (selected === c.id ? ' selected' : '') + '>' + escape(c.fullName) + '</option>');
  }
  return [...groups].map(([region, rows]) => '<optgroup label="' + region + '">' + rows.join('') + '</optgroup>').join('');
}

const indicators = [
  ['户籍人口', '2026.10 · 人', c => c.stats.population, number],
  ['户数', '2026.10 · 户', c => c.stats.households, number],
  ['人口同比', '较2025.10 · %', c => 100 * (c.stats.population / c.stats.previousPopulation - 1), v => (v > 0 ? '+' : '') + v.toFixed(2) + '%'],
  ['0–14岁占比', '2026.10 · %', c => 100 * c.stats.children / c.stats.population, percent],
  ['65岁及以上占比', '2026.10 · %', c => 100 * c.stats.seniors / c.stats.population, percent],
  ['申报所得中位数', '2024 · 万新台币／纳税单位', c => c.stats.incomeThousands / 10, v => v.toFixed(1)],
  ['工商及服务业场所', '2021普查 · 家', c => c.stats.workplaces, number],
  ['工商及服务业从业人数', '2021年底 · 工作地人数', c => c.stats.employees, number],
  ['2022首长选举投票率', '投票数／选举人数', c => { const e=c.history.find(x=>x.year===2022); return 100*e.voted/e.eligible; }, percent],
  ['本届议会应选名额', '2026 · 席', c => c.council, number]
];

function compare(c) {
  if (comparison === c.id || !comparison) comparison = c.id === 'taipei' ? 'new-taipei' : 'taipei';
  const other = D.counties[comparison];
  const cell = (v, text, max, cls, bar) => '<td><span>' + text + '</span>' + (bar ? '<i class="county-bar ' + cls + '" style="width:' + (100 * Math.abs(v) / max).toFixed(2) + '%"></i>' : '') + '</td>';
  const coverage = city => {
    const people=D.people.filter(p=>p.city===city.id);
    const withPolicies=people.filter(p=>p.policies.some(x=>x.electionYear===2026 && x.basis!=='administration')).length;
    const candidatesWithEvidence=region=>people.filter(p=>p.evidence.some(x=>x.region===region)).length;
    const denom=people.length;
    return [denom+'人',city.history.length+'届',withPolicies+' / '+denom, ...['cn','us','jp'].map(region=>candidatesWithEvidence(region)+' / '+denom),
      (D.debates||[]).filter(x=>x.city===city.id).length+'项'];
  };
  const actual=coverage(c), otherCoverage=coverage(other);
  const coverageRows=['已列候选人','现辖区及同范围前身首长选举','有本届政见的人数','有两岸言行记录的人数','有对美言行记录的人数','有对日言行记录的人数','已收录辩论及邀约'].map((label,i)=>'<tr><th scope="row">'+label+'</th><td>'+actual[i]+'</td><td>'+otherCoverage[i]+'</td></tr>').join('');
  const rows = indicators.map(([label, period, value, format]) => {
    const a=value(c), b=value(other), max=Math.max(Math.abs(a), Math.abs(b), 1);
    return '<tr><th scope="row">'+label+'<small>'+period+'</small></th>'+cell(a,format(a),max,'first',label!=='人口同比')+cell(b,format(b),max,'second',label!=='人口同比')+'</tr>';
  }).join('');
  const host = document.querySelector('#county-compare');
  host.innerHTML = '<h3>两地对照</h3><label>与 '+escape(c.name)+' 比较 <select id="county-comparison">'+options(comparison,c.id)+'</select></label><table><caption class="sr-only">县市同口径指标比较，横条只在同一行比较</caption><thead><tr><th>指标</th><th>'+escape(c.name)+'</th><th>'+escape(other.name)+'</th></tr></thead><tbody>'+rows+'</tbody></table><details class="county-audit"><summary>比较两地档案的资料覆盖</summary><table><thead><tr><th>已录入的资料</th><th>'+escape(c.name)+'</th><th>'+escape(other.name)+'</th></tr></thead><tbody>'+coverageRows+'</tbody></table><small>人数分母为本届候选人总数。各栏统计本站已有出处的条目，一位候选人在同一方向只计一次。</small></details>';
  host.querySelector('select').onchange = e => { comparison=e.target.value; compare(c); };
}

function nationalVote(title, election) {
  const rows=election.rows.map(([name,v])=>'<tr><th scope="row">'+escape(name)+'</th><td>'+number(v)+'</td><td>'+share(v,election.valid)+'</td></tr>').join('');
  return '<details><summary>'+title+' · '+escape(election.rows[0][0])+'居首，'+share(election.rows[0][1],election.valid)+'</summary><table><caption>2024 · '+title+' · 有效票 '+number(election.valid)+'</caption><thead><tr><th>选项</th><th>得票</th><th>得票率</th></tr></thead><tbody>'+rows+'</tbody></table></details>';
}

function render(id) {
  if (id !== selected) { comparison=null; selected=id; }
  const c=D.counties[id], s=c.stats, last=c.history.find(e=>e.year===2022), [first,second]=last.rows;
  const represent=c.lawmakers.map(([district,name,party])=>'<li><small>'+ (c.lawmakers.length===1?'全县市':('第'+district+'选区')) +'</small> '+escape(name)+' <small>'+escape(partyName(party))+'</small></li>').join('');
  const topics=c.questions.map(([title,question])=>'<article><h4>'+escape(title)+'</h4><p>'+escape(question)+'</p></article>').join('');
  const topIndustries = rows => rows.map(([name,v]) => escape(name)+' '+v.toFixed(1)+'%').join('、');
  const again=c.ballot.find(person=>person.name===first[0]);
  const field=again ? escape(first[0])+'再次参选，2022年当选时为'+escape(partyName(first[1]))+'，本届登记为'+escape(partyName(again.party))+'。' : '上届当选人未列入本届抽签名单。';
  const recent=c.history.filter(e=>[2014,2018,2022].includes(e.year)).map(e=>'<li><small>'+e.year+'</small> '+escape(e.rows[0][0])+' <small>'+escape(partyName(e.rows[0][1]))+'</small></li>').join('');
  const voteDay = id==='chiayi-city'?'2022.12.18 重行选举':'2022.11.26';
  const entry= document.querySelector('#county-guide');
  entry.innerHTML = '<div class="county-heading"><div><p class="eyebrow">县市档案</p><h2>'+escape(c.name)+'</h2></div><label>切换县市 <select data-county-select>'+options(id)+'</select></label></div>'+
    '<p class="county-lead">'+escape(c.place)+'</p><div class="county-columns"><div>'+
    '<h3>产业与地方生活</h3><p>2021 年，这里的工商及服务业有 <b>'+number(s.workplaces)+'</b> 个工作场所，年底从业者有 <b>'+number(s.employees)+'</b> 人。</p>'+
    '<dl class="county-industries"><dt>按当地产业产出占比</dt><dd>'+topIndustries(s.outputIndustries)+'</dd><dt>按当地从业人数占比</dt><dd>'+topIndustries(s.jobIndustries)+'</dd></dl>'+
    '<h3>本地议题</h3><div class="county-questions">'+topics+'</div><small>以上是依据当地地理与产业资料整理的提问。</small>'+
    '<div class="source-line">'+refs(['county-place-'+id,'county-industry',...(c.issueSources||[])])+'</div><a class="outline-button" href="#policies">比较本地候选人提出的做法 ↓</a></div><div id="county-compare"></div></div>'+
    '<details class="county-method"><summary>指标年份、单位与原表</summary><p>人口和年龄采用10月底户籍，人口同比比较上一年同月。所得是2024年度每一纳税单位申报总所得的中位数，原表以千元列示，页面换算为万元；免税及移转所得不在表内。产业按2021年工作场所所在地统计，覆盖工业及服务业，农业及公部门等不在该普查范围内。每行横条以所选两地中较大的数为基准。</p>'+refs(['county-pop','county-pop-prior','county-tax','county-industry','county-council'])+'</details>'+
    '<div class="county-politics"><div><h3>从上届选票读本届</h3><p>'+voteDay+'，'+escape(first[0])+'以'+number(first[2])+'票当选（'+share(first[2],last.valid)+'）。'+(second?'与第二名'+escape(second[0])+'相差'+number(first[2]-second[2])+'票。':'当届只有一位候选人。')+'</p>'+
    '<p>选举人数 '+number(last.eligible)+'，投票人数 '+number(last.voted)+'，有效票 '+number(last.valid)+'。</p><p>本届共'+c.ballot.length+'人，'+field+'</p><h4>近三届当选人</h4><ul class="county-members">'+recent+'</ul><a href="#history">查历届首长逐人票数 ↓</a>'+
    '<div class="source-line">'+refs(id==='chiayi-city'?['map-chiayi-2022','county-chiayi-redo','county-chiayi-turnout']:['county-votes'])+'</div></div>'+
    '<div><h3>居民选出哪些代表？</h3><p>2026 年县市议员应选 <b>'+c.council+'席</b>。2024 年区域立委在这里选出 '+c.lawmakers.length+' 人。</p><ul class="county-members">'+represent+'</ul><small>按2024年当选时的选区与党籍列示。原住民与不分区立委按其他选制产生。</small><div class="source-line">'+refs(['county-council','county-votes'])+'</div></div></div>'+
    '<div class="county-national"><h3>2024年两张不同的选票</h3>'+nationalVote('总统副总统票',c.president)+nationalVote('立委政党票',c.partyVote)+'</div>';
  compare(c);
}

function timeline(id) {
  const c=D.counties[id];
  return id==='taipei' ? [1951,1967,1987,...c.history.map(e=>e.year),2026] : [...new Set([...c.history,...c.predecessors].map(e=>e.year).concat(2026))].sort((a,b)=>a-b);
}

function history(id, year, results) {
  const c=D.counties[id], ys=timeline(id), e=D.elections.find(r=>r.city===id && r.year===year);
  const predecessors=c.predecessors.filter(r=>r.year===year);
  document.querySelector('#timeline').innerHTML=ys.map(y=>'<button data-year="'+y+'" aria-pressed="'+(y===year)+'">'+y+'<small>'+(y===2026?'本届':c.predecessors.some(p=>p.year===y)?'改制前':'完整票数')+'</small></button>').join('');
  const host=document.querySelector('#history-content');
  const item=(row,aggregate)=>'<div class="county-election"><h4>'+escape(row.area||c.name)+' · '+year+'年'+((row.area||c.name).endsWith('縣')?'县长':'市长')+'选举</h4>'+
    (row.narrative?'<p>'+escape(row.narrative.text)+'</p>':'')+
    '<p>选举人数 '+number(aggregate.eligible)+'，投票率 '+share(aggregate.voted,aggregate.eligible)+'，有效票 '+number(aggregate.valid)+'。</p>'+results(row)+'</div>';
  host.innerHTML='<div class="history-summary"><div class="year-big">'+year+'</div><h3>'+escape(c.name)+' · 历届票箱</h3><p>'+(id==='chiayi-city'&&year===2022?'原定投票因候选人去世而停止，重行选举于12月18日投票。':predecessors.length?'按当年县、市分别列示，每个选区各有自己的有效票分母。':e?'票数按当届行政辖区与候选人党籍列示。':'本届投票日为11月28日。')+'</p></div><div>'+
    (e?item(e,c.history.find(r=>r.year===year)):predecessors.length?predecessors.map(p=>item(AtlasCountyModel.regularResult(c,p),p)).join(''):'<p>本届首长候选人 '+c.ballot.length+' 人。</p><a href="#city-panel">查看候选名单 ↑</a>')+'</div>';
}
function brief(p) {
  const b=p.countyBrief;
  const field=(title,value)=>'<dt>'+title+'</dt><dd>'+escape(value||'暂未确认（已查登记表及中央社登记日人物资料）')+'</dd>';
  return '<section class="profile-section county-brief"><h3>人物履历</h3><dl class="county-industries">'+field('学历',b.education)+field('工作及社会经历',b.work)+field('从政及公职经历',b.office)+'</dl><p>履历按下列来源整理，未注明的起止年月待确认。</p>'+refs(['county-bio',...(b.extraBioSource?[b.extraBioSource]:[]),...(b.extraBioSources||[]),D.counties[p.city].registerSource])+'</section>';
}
window.AtlasCountyGuide={options,render,timeline,history,brief};
})();
