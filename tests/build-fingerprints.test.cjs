'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{execFileSync}=require('node:child_process');
const root=path.resolve(__dirname,'..');

test('production assets use content-addressed filenames so Pages cache cannot mask current files',()=>{
 execFileSync(process.execPath,['scripts/build.cjs'],{cwd:root,stdio:'ignore'});
 const html=fs.readFileSync(path.join(root,'dist/index.html'),'utf8');
 for(const name of ['election-map-data.js','election-map.js','map.js']){
  const stem=name.slice(0,-3),match=html.match(new RegExp('src="('+stem+'\\.[a-f0-9]{12}\\.js)"'));
  assert.ok(match,'index.html should reference a fingerprinted '+name);
  const body=fs.readFileSync(path.join(root,'dist',match[1]));
  assert.equal(crypto.createHash('sha256').update(body).digest('hex').slice(0,12),match[1].match(/\.([a-f0-9]{12})\.js$/)[1]);
  if(name==='election-map-data.js')assert.ok(body.includes('xinmin-newtaipei-20261013'));
 }
});
