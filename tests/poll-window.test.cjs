'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),vm=require('node:vm'),{execFileSync}=require('node:child_process');
const U=require('../public/domain.js'),P=require('../public/election-map-data.js');
test('exact Taiwan boundaries and conservative deployment window',()=>{
 for(const [date,blackout,release] of [['2026-11-17T21:59:59+08:00',false,false],['2026-11-17T22:00:00+08:00',false,true],['2026-11-18T00:00:00+08:00',true,true],['2026-11-28T16:00:00+08:00',true,true],['2026-11-28T16:00:00.001+08:00',false,false]]){assert.equal(U.blackout(new Date(date)),blackout);assert.equal(U.releaseBlackout(new Date(date)),release);}
 const pack=P.forRelease(new Date(U.blackoutStart));assert.equal(pack.polls.length,0);assert.equal(pack.reportedPolls.length,0);assert.ok(Object.keys(pack.sources).every(id=>!U.isPollSource(id)));assert.ok(pack.baseline.taipei);assert.ok(pack.sources['poll-law']);
});
test('already-open home and Taipei poll blocks pause and restore without reload',()=>{
 let now=U.blackoutStart-1,events=0,callback;
 const elements=[{},{}].map(x=>Object.assign(x,{connected:true,replaceWith(anchor){this.connected=false;anchor.isConnected=true;anchor.replaceWith=(node)=>{node.connected=true;anchor.isConnected=false;};}}));
 class Clock extends Date{constructor(...args){super(...(args.length?args:[now]));}static now(){return now;}}
 const handlers={},window={AtlasDomain:{...U,blackout:()=>U.blackout(new Date(now))},addEventListener:(n,f)=>handlers[n]=f,dispatchEvent:()=>events++};
 const document={querySelectorAll:()=>elements.filter(x=>x.connected),createComment:()=>({}),addEventListener:(n,f)=>handlers[n]=f};
 vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../public/poll-visibility.js'),'utf8'),{window,document,Date:Clock,Event:class{},setTimeout:f=>(callback=f,1),clearTimeout:()=>{}});
 assert.equal(elements.filter(x=>x.connected).length,2);now=U.blackoutStart;callback();assert.equal(elements.filter(x=>x.connected).length,0);assert.equal(events,1);
 handlers.focus();assert.equal(events,1);now=U.blackoutEnd+1;handlers.visibilitychange();assert.equal(elements.filter(x=>x.connected).length,2);assert.equal(events,2);
});
test('restricted release removes both HTML blocks, data and numeric source metadata',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'atlas-window-'));
 try{execFileSync(process.execPath,['scripts/build.cjs'],{cwd:path.join(__dirname,'..'),env:{...process.env,ATLAS_DIST_DIR:dir,ATLAS_BUILD_TIME:'2026-11-18T00:00:00+08:00'},stdio:'pipe'});
 const d=require(path.join(dir,'election-map-data.js')).pack;assert.equal(d.polls.length,0);assert.equal(d.reportedPolls.length,0);assert.ok(Object.keys(d.sources).every(id=>!U.isPollSource(id)));
 for(const file of ['index.html','taipei.html']){const s=fs.readFileSync(path.join(dir,file),'utf8');assert.ok(!s.includes('data-poll-content'));assert.ok(!s.includes('沈伯洋 50.3%'));assert.ok(!s.includes('沈伯洋 51.70%'));}
 assert.equal(JSON.parse(fs.readFileSync(path.join(dir,'release-status.json'))).pollMode,'restricted');
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
