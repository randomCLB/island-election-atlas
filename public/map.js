(function(){
'use strict';
const {esc}=AtlasDomain,cityIds=ATLAS.cities.map(c=>c.id),svg=document.getElementById('island-map');
const rows=MAP_ROWS.map(([id,name,paths])=>({id,name,rings:paths.split(';').map(r=>r.split(' ').map(p=>p.split(',').map(Number)))}));
const geo={type:'FeatureCollection',features:rows.map(r=>({type:'Feature',properties:{id:r.id,name:r.name},geometry:{type:'Polygon',coordinates:r.rings.map(ring=>ring.map(([x,y])=>[x/197+119.1,25.6-y/215]))}}))};
let choose,selected='taipei',live=null,attempt=0,mode='overview';
function init(fn){choose=fn;
svg.innerHTML=`<defs><filter id="land-shadow" x="-30%" y="-20%" width="160%" height="150%"><feDropShadow dx="0" dy="13" stdDeviation="15" flood-color="#000b0f" flood-opacity=".65"/></filter></defs><text class="water-label" x="462" y="538" transform="rotate(90 462 538)">PACIFIC OCEAN</text><text class="water-label" x="80" y="427" transform="rotate(-64 80 427)">TAIWAN STRAIT</text><g filter="url(#land-shadow)">${rows.map(r=>`<path class="county ${cityIds.includes(r.id)?'covered':''}" data-city="${r.id}" ${cityIds.includes(r.id)?'tabindex="0" role="button"':''} aria-label="${esc(r.name)}${cityIds.includes(r.id)?'，打开城市档案':'，本期未收录'}" fill-rule="evenodd" d="${r.rings.map(ring=>'M'+ring.map(p=>p.join(',')).join('L')+'Z').join('')}"><title>${esc(r.name)}</title></path>`).join('')}</g><g>${ATLAS.cities.map(c=>{const [x,y]=c.point,[lx,ly]=c.label;return `<g class="map-label" data-city="${c.id}" role="button" tabindex="0" aria-label="打开${c.name}档案"><polyline points="${x},${y} ${c.line==='左'?lx+75:lx-17},${ly} ${lx},${ly}"/><circle cx="${x}" cy="${y}" r="6"/><text x="${lx}" y="${ly-12}">${c.name}</text><text class="english" x="${lx}" y="${ly+16}">${c.en}</text></g>`;}).join('')}</g>`;
svg.addEventListener('click',e=>{const c=e.target.closest('[data-city]')?.dataset.city;if(cityIds.includes(c))choose(c);});
svg.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const c=e.target.dataset.city;if(cityIds.includes(c)){e.preventDefault();choose(c);}}});
document.getElementById('overview-mode').onclick=()=>overview();document.getElementById('terrain-mode').onclick=()=>terrain();document.getElementById('map-reset').onclick=()=>{if(live)live.flyTo({center:[120.98,23.65],zoom:6.5,pitch:45,bearing:0,duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:800});else svg.setAttribute('viewBox','0 0 720 860');};select(selected);}
function select(id){selected=id;svg.querySelectorAll('[data-city]').forEach(el=>el.classList.toggle('selected',el.dataset.city===id));if(live?.getLayer('selection'))live.setFilter('selection',['==',['get','id'],id]);}
function status(text){document.getElementById('map-status').textContent=text;}
function overview(message){attempt++;mode='overview';if(live){live.remove();live=null;}document.getElementById('live-map').hidden=true;svg.style.visibility='visible';document.getElementById('overview-mode').setAttribute('aria-pressed','true');document.getElementById('terrain-mode').setAttribute('aria-pressed','false');document.getElementById('terrain-mode').disabled=false;status(message||'本岛概览 · g0v 2010合并版简化边界 · 非当前精密区划');}
async function terrain(){if(mode==='terrain')return;mode='terrain';const ticket=++attempt,btn=document.getElementById('terrain-mode');btn.disabled=true;status('正在连接公开高程服务，本地地图继续可用…');let timer=setTimeout(()=>{if(ticket===attempt)overview('地形服务未连通，已保留本地区划地图。可再次尝试。');},10000);
try{
if(!document.getElementById('maplibre-css')){const css=document.createElement('link');css.id='maplibre-css';css.rel='stylesheet';css.href='https://unpkg.com/maplibre-gl@6.11.2/dist/maplibre-gl.css';document.head.append(css);}
const gl=await import('https://unpkg.com/maplibre-gl@6.11.2/dist/maplibre-gl.mjs');if(ticket!==attempt)return;
const host=document.getElementById('live-map');host.hidden=false;host.style.opacity='0';
live=new gl.Map({container:host,center:[120.98,23.65],zoom:6.5,pitch:45,bearing:0,minZoom:5,maxZoom:11,maxBounds:[[118.8,21],[123.5,26.4]],attributionControl:true,style:{version:8,sources:{counties:{type:'geojson',data:geo},terrainSource:{type:'raster-dem',url:'https://tiles.mapterhorn.com/tilejson.json'},hillshadeSource:{type:'raster-dem',url:'https://tiles.mapterhorn.com/tilejson.json'}},layers:[{id:'sea',type:'background',paint:{'background-color':'#0e2026'}},{id:'land',type:'fill',source:'counties',paint:{'fill-color':'#36564e'}},{id:'hills',type:'hillshade',source:'hillshadeSource',paint:{'hillshade-shadow-color':'#082128','hillshade-highlight-color':'#b3c7a2','hillshade-accent-color':'#274d43','hillshade-exaggeration':.65}},{id:'borders',type:'line',source:'counties',paint:{'line-color':'#b5c2aa','line-width':.7,'line-opacity':.6}},{id:'selection',type:'line',source:'counties',filter:['==',['get','id'],selected],paint:{'line-color':'#efcd91','line-width':2}}],terrain:{source:'terrainSource',exaggeration:1.4}}});
live.addControl(new gl.NavigationControl(),'bottom-right');
for(const c of ATLAS.cities){const el=document.createElement('button');el.className='map-marker';el.textContent=c.name;el.setAttribute('aria-label','打开'+c.name+'档案');el.onclick=()=>choose(c.id);new gl.Marker({element:el}).setLngLat(c.center).addTo(live);}
live.on('click','land',e=>{const id=e.features?.[0]?.properties?.id;if(cityIds.includes(id))choose(id);});
live.on('idle',()=>{if(ticket===attempt&&live?.isSourceLoaded('terrainSource')){clearTimeout(timer);host.style.opacity='1';svg.style.visibility='hidden';btn.disabled=false;btn.setAttribute('aria-pressed','true');document.getElementById('overview-mode').setAttribute('aria-pressed','false');status('真实高程 · Mapterhorn / MapLibre · 2010版概览边界 · 高程夸张1.4倍');}});
// Never replace the working local map with an unresponsive loading screen.
live.on('error',()=>{});
}catch(error){clearTimeout(timer);if(ticket===attempt)overview('在线地形不可用，正在显示本地区划地图。');}
}
window.AtlasMap={init,select,overview,geo};
})();
