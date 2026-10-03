/* Optional editorial hooks. Original map and other city records stay independent. */
(function(){
'use strict';
const D=ATLAS,E=AtlasDomain.esc,$=s=>document.querySelector(s);
function refs(ids){return AtlasMedia.refs(ids);}
function paragraphs(items){return (items||[]).map(p=>`<p>${E(p.text)}</p><div class="source-line">${refs(p.sources)}</div>`).join('');}
function renderCity(id){
 let el=$('#taipei-story');
 if(!el){el=document.createElement('section');el.id='taipei-story';el.className='research-section';$('#history').before(el);}
 el.hidden=id!=='taipei';if(el.hidden)return;
 const d=D.taipeiDossier;
 el.innerHTML=`<div class="eyebrow">TAIPEI / THE STORY SO FAR · 2026.10.02</div><div class="research-head"><h2>${E(d.lead.title)}</h2><a class="outline-button" href="#history">沿着年份往回走 ↓</a></div><div class="research-lead">${paragraphs(d.lead.paragraphs)}</div><div class="research-jump">${D.people.filter(p=>p.city==='taipei').map(p=>`<a href="#/taipei/${p.id}">${E(p.name)} <span>人物故事 ↗</span></a>`).join('')}</div><div class="research-subhead"><span class="eyebrow">THE CITY ON THE BALLOT</span><h3>把口号放回城市的日常。</h3><p>下面是已公开的主张与回应，不是效果评分。展开查看具体分歧和仍需核对的执行条件。</p></div><div class="research-issues">${d.issues.map((x,i)=>`<details ${i===0?'open':''}><summary><span>${String(i+1).padStart(2,'0')}</span>${E(x.title)}</summary><div><time>${E(x.date)}</time><p>${E(x.text)}</p><p class="research-check"><b>接着核查</b> ${E(x.comparison)}</p><div class="source-line">${refs(x.sources)}</div></div></details>`).join('')}</div><div class="research-subhead"><h3>从一个现场，读懂一条规则。</h3></div><div class="research-culture">${d.culture.map(x=>`<article><h4>${E(x.title)}</h4><p>${E(x.text)}</p><div class="source-line">${refs(x.sources)}</div></article>`).join('')}</div><details class="research-coverage"><summary>资料覆盖与未完成核查</summary><p>${E(d.coverage.profileDepth)}。${E(d.coverage.history)}。</p><h4>${E(d.pollNote.title)}</h4><p>${E(d.pollNote.text)}</p><div class="source-line">${refs(d.pollNote.sources)}</div><p>口号区每人最多三条，允许口头表述；往届说法与党纲转述单独标明，缺失不补写。工作、从政与公开活动已分开。现有争议条目不能用于比较人物“争议多少”。</p></details>`;
}
function renderPerson(p){
 if(!p.story)return;
 const anchor=$('#dialog-content .profile-actions');if(!anchor)return;
 const el=document.createElement('section');el.className='profile-story';
 el.innerHTML=`<div class="eyebrow">A LIFE IN PUBLIC / 人物故事</div><h3>${E(p.story.title)}</h3>${paragraphs(p.story.paragraphs)}${AtlasProfiles.careers(p)}<details class="life-line"><summary>展开公开活动时间线（不作为任职履历） · ${(p.timeline||[]).length}个节点</summary>${(p.timeline||[]).map(x=>`<article><time>${E(x.date)}</time><h4>${E(x.title)}</h4><p>${E(x.text)}</p><div class="source-line">${refs(x.sources)}</div></article>`).join('')}</details>`;
 anchor.after(el);
 if(p.gaps?.length){const gap=document.createElement('details');gap.className='research-coverage';gap.innerHTML='<summary>这份档案还缺什么证据？</summary>'+p.gaps.map(t=>'<p>'+E(t)+'</p>').join('');$('#dialog-content').append(gap);}
}
function renderHistory(year,results){
 const years=[1951,1967,1987,1994,1998,2002,2006,2010,2014,2018,2022,2026];
 const e=D.elections.find(e=>e.city==='taipei'&&e.year===year),m=D.taipeiDossier.milestones.find(m=>m.year===year);
 $('#timeline').classList.add('taipei-timeline');
 $('#timeline').innerHTML=years.map(y=>`<button data-year="${y}" aria-pressed="${y===year}">${y===1951?'1950/51':y}<small>${y===1967?'官派间隔':y===1987?'民主化背景':y===1951?'早期民选':y===2026?'本届':'结果已录入'}</small></button>`).join('');
 const heading=`<div class="history-summary"><div class="year-big">${year===1951?'1950/51':year}</div><h3>台北 · ${e?'市长选举':'制度与时间'}</h3><span class="record-badge">${e?e.scope:m?'制度节点':'本届选举'}</span>${e?`<p>${E(e.date)}${e.versionDate?' · 结果版本 '+E(e.versionDate):''}</p><p class="research-check">${E(e.verification)}</p>${e.turnout!==null?`<p>报道投票率 ${Number(e.turnout).toFixed(2)}%</p>`:''}`:''}</div>`;
 let body;
 if(e){body=`<div class="history-evidence"><article class="history-narrative"><h4>${E(e.narrative.title)}</h4><p>${E(e.narrative.text)}</p><div class="source-line">${refs(e.narrative.sources)}</div></article>${results(e)}<p class="results-note">“票数已录入”表示已转录该届全部候选人，不等于全部原始公报已复核。比例由逐人票数合计计算，缺失的原表核验仍保留。</p></div>`;}
 else if(m){body=`<article class="history-empty"><h3>${E(m.title)}</h3><p>${E(m.text)}</p><div class="source-line">${refs(m.sources)}</div></article>`;}
 else{body='<article class="history-empty"><h3>2026 · 本届没有开票结果。</h3><p>登记资料与历史结果分开。已找到的民调报道保存在研究队列，尚未完成原始问卷和方法核查，不公开填入支持率数字。</p><a class="outline-button" href="#atlas">回到本届参选人 ↑</a></article>';}
 $('#history-content').innerHTML=heading+body;
 if(matchMedia('(max-width:800px)').matches){const rail=$('#timeline'),active=rail.querySelector('[aria-pressed="true"]');rail.scrollLeft=active.offsetLeft-rail.offsetLeft-rail.clientWidth/2+active.clientWidth/2;}
}
window.AtlasResearch={renderCity,renderPerson,renderHistory};
})();
