/* Portraits and separate career tracks. */
(function(){
'use strict';
const E=AtlasDomain.esc;
function portrait(p,size='thumb'){
 const photo=p.photo,linked=photo&&/^(https:\/\/|photos\/[a-z-]+\.(?:jpg|png)$)/.test(photo.url||'');
 const hint=linked?'照片载入中':'照片待补';
 const layout=['portrait','scene','pair'].includes(photo?.layout)?photo.layout:'portrait';
 const image=linked?`<img data-portrait="${E(p.id)}" src="${E(photo.url+(photo.revision?'?v='+encodeURIComponent(photo.revision):''))}" alt="${E(p.name)}${layout==='pair'?'，原图右侧人物':''}" width="180" height="220" loading="${size==='hero'?'eager':'lazy'}" decoding="async" referrerpolicy="no-referrer">`:'';
 return `<span class="photo-frame photo-${size} photo-${layout} ${linked?'has-photo':'photo-pending'}">${image}<span class="photo-fallback" aria-hidden="true"><b>${E(p.name[0])}</b><small>${hint}</small></span>${layout==='pair'?'<span class="photo-position-label">右侧人物</span>':''}</span>`;
}
function photoCredit(p){const v=p.photo;if(!v)return '<p class="photo-credit">本人物照片尚未建档。</p>';
 return `<div class="photo-credit"><p>${v.credit?'照片：'+E(v.credit)+' · ':''}${v.capturedAt?'图像记录日期 '+E(v.capturedAt):'拍摄日期未核定'}${v.license?' · '+E(v.license):''}</p><p>${E(v.note)}</p>${AtlasMedia.render(v.source,'照片来源与原图说明')}</div>`;
}
function careerRows(items,review){return items.length?items.map(x=>`<article class="career-event"><time>${E(x.date)}</time><h5>${E(x.role)}</h5><div class="career-organization">${E(x.organization)}</div><p>${E(x.note)}</p><span class="career-verification">${E(x.verification)}</span><div class="source-line">${AtlasMedia.refs(x.sources)}</div></article>`).join(''):review?`<div class="career-empty"><p>${E(review.note)}</p><p>查阅 ${E(review.checkedAt)} · 未找到具体任职记录，不等于没有工作经历。</p>${AtlasMedia.refs(review.sources)}</div>`:'<div class="career-empty"><p>暂缺具体单位、职务和任职起止的可核对材料。</p><p>未建档不等于没有工作经历。</p></div>';}
function careers(p){if(!p.workHistory||!p.politicalHistory)return'';
 return `<section class="career-section"><div class="eyebrow">WORK & PUBLIC OFFICE / 两条经历线</div><h3>做过什么工作，走过哪些政治岗位。</h3><p class="career-intro">${E(p.careerNote)} 年份不明的条目按类型收录，不表示确定先后。</p><div class="career-columns"><div class="career-column"><h4>工作经历 <span>${p.workHistory.length}条</span></h4>${careerRows(p.workHistory,p.workResearch)}</div><div class="career-column"><h4>从政经历 <span>${p.politicalHistory.length}条</span></h4>${careerRows(p.politicalHistory)}</div></div></section>`;
}
document.addEventListener('load',e=>{const img=e.target;if(!(img instanceof HTMLImageElement)||!img.hasAttribute('data-portrait'))return;img.closest('.photo-frame')?.classList.add('photo-loaded');},true);
document.addEventListener('error',e=>{const img=e.target;if(!(img instanceof HTMLImageElement)||!img.hasAttribute('data-portrait'))return;img.hidden=true;const box=img.closest('.photo-frame');if(box){box.classList.add('photo-unavailable');box.classList.remove('photo-loaded');box.querySelector('.photo-fallback small').textContent='照片未载入';}},true);
window.AtlasProfiles={portrait,photoCredit,careers};
})();
