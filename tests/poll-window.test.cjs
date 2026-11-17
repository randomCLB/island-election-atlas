 'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),os=require('node:os'),path=require('node:path'),{execFileSync}=require('node:child_process');
const U=require('../public/domain.js'),P=require('../public/election-map-data.js');
test('polls remain visible before during and after the former blackout window',()=>{
 for(const date of ['2026-11-17T21:59:59+08:00','2026-11-17T22:00:00+08:00','2026-11-18T00:00:00+08:00','2026-11-28T16:00:00+08:00','2026-11-28T16:00:00.001+08:00']){
 assert.equal(U.blackout(new Date(date)),false);assert.equal(U.releaseBlackout(new Date(date)),false);
 const pack=P.forRelease(new Date(date));assert.deepEqual(pack.polls,P.pack.polls);assert.deepEqual(pack.reportedPolls,P.pack.reportedPolls);assert.deepEqual(pack.sources,P.pack.sources);
 }
});
test('release preserves both survey HTML blocks and complete data during former window',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'atlas-restored-'));
 try{execFileSync(process.execPath,['scripts/build.cjs'],{cwd:path.join(__dirname,'..'),env:{...process.env,ATLAS_DIST_DIR:dir,ATLAS_BUILD_TIME:'2026-11-18T00:00:00+08:00',ATLAS_POLL_MODE:''},stdio:'pipe'});
 const d=require(path.join(dir,'election-map-data.js')).pack;assert.deepEqual(d.polls,P.pack.polls);assert.deepEqual(d.reportedPolls,P.pack.reportedPolls);assert.deepEqual(d.sources,P.pack.sources);
 for(const file of ['index.html','taipei.html'])assert.ok(fs.readFileSync(path.join(dir,file),'utf8').includes('data-poll-content'));
 assert.equal(JSON.parse(fs.readFileSync(path.join(dir,'release-status.json'))).pollMode,'normal');
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});
test('release workflow no longer has scheduled blackout triggers',()=>{assert.ok(!/^  schedule:/m.test(fs.readFileSync(path.join(__dirname,'../.github/workflows/poll-window.yml'),'utf8')));});
