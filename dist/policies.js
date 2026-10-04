(function(){
'use strict';
const D=ATLAS,E=AtlasDomain.esc;
let city='taipei',topic='all',past=false;
function card(x){return `<article class="policy-item"><div class="expression-tags"><span>${x.electionYear===2026?'本届 · 2026':'往届 · '+E(x.electionYear)}</span><span>${E(x.type)}</span></div><p>${E(x.text)}</p><time>${E(x.date)}</time><p class="policy-limit">${E(x.note)}</p><details><summary>查看来源与媒体背景</summary>${AtlasMedia.refs(x.sources)}</details></article>`;}
function profile(p){return `<section class="slogan campaign-language"><div class="eyebrow">CAMPAIGN POLICIES / 竞选政见</div><p>收录明确主张与公开回应；任内政策、党纲与往届资料分别标明。</p>${p.policies.length?p.policies.map(x=>`<h4>${E(D.policyTopics[x.topic])}</h4>${card(x)}`).join(''):'<p>已查材料尚未找到可写成具体措施的主张。宣传句不代替政见，未收录也不表示本人没有主张。</p>'}</section>`;}
function render(id){city=id;const host=document.getElementById('policy-content'),people=D.people.filter(p=>p.city===city),name=D.cities.find(c=>c.id===city).name;
const topics=Object.entries(D.policyTopics).filter(([k])=>topic==='all'?people.some(p=>p.policies.some(x=>x.topic===k&&(past||x.electionYear===2026))):topic===k);
host.innerHTML=`<div class="policy-controls"><h3>${E(name)} · 逐项看主张</h3><label>议题 <select id="policy-topic"><option value="all">全部议题</option>${Object.entries(D.policyTopics).map(([k,v])=>`<option value="${k}" ${k===topic?'selected':''}>${E(v)}</option>`).join('')}</select></label><label><input id="policy-past" type="checkbox" ${past?'checked':''}> 包括往届主张</label></div><p class="policy-note">默认只比较2026本届资料。每格标明日期、主张性质与来源；“暂未收录”不表示反对，也不表示没有政见。手机可横向滑动表格。</p><div class="policy-scroll" tabindex="0" role="region" aria-label="${E(name)}竞选政见对比表"><table class="policy-table"><caption>${E(name)}参选人按议题比较 · 查阅至2026-10-04</caption><thead><tr><th scope="col">议题</th>${people.map(p=>`<th scope="col"><button class="text-button" data-person="${p.id}">${E(p.name)} ↗</button><small>${E(p.party==='KMT'?'中国国民党':p.party==='DPP'?'民主进步党':p.party)}</small></th>`).join('')}</tr></thead><tbody>${topics.map(([key,label])=>`<tr><th scope="row">${E(label)}</th>${people.map(p=>{const items=p.policies.filter(x=>x.topic===key&&(past||x.electionYear===2026));return `<td>${items.length?items.map(card).join(''):'<span class="policy-missing">本议题暂未收录明确主张</span>'}</td>`;}).join('')}</tr>`).join('')}</tbody></table></div>`;
document.getElementById('policy-topic').onchange=e=>{topic=e.target.value;render(city);};document.getElementById('policy-past').onchange=e=>{past=e.target.checked;render(city);};
}
window.AtlasPolicies={render,profile};
})();
