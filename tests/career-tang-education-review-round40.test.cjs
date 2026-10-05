'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const D=require('../public/data.js');
for(const f of ['taipei-research','taipei-profile-data','four-city-data','policy-data','career-foreign-round3','career-foreign-round19','career-foreign-round20','career-foreign-round21','career-foreign-round24','career-foreign-round25','career-foreign-round26','career-foreign-round27','career-foreign-round29','career-foreign-round30','career-foreign-round31','career-foreign-round32','career-foreign-round33','career-foreign-round34','career-tainan-chen-anchor-round35','career-su-h-community-round36','career-wang-work-round37','career-chang-discipline-round38','career-wang-education-round39'])require('../public/'+f+'.js').apply(D);
const R=require('../public/career-tang-education-review-round40.js');R.apply(D);
const M=require('../public/media.js');
test('Tang education review states only the 2022 request to supplement and leaves outcome unresolved',()=>{
 const p=D.people.find(x=>x.id==='tang'),x=p.story.paragraphs.find(x=>x.sources?.includes('career-tang-education-review-2022'));
 assert.ok(x);assert.match(x.text,/2022-10-21前补送/);assert.match(x.text,/未找到补件或认证结果原件/);assert.match(x.text,/不能据会议记录断定最终未通过/);
 const s=D.sources['career-tang-education-review-2022'];assert.equal(s.publisherId,'official-tw');assert.match(s.note,/没有附唐新民个人补件或后续认证结果/);assert.equal(M.resolve('career-tang-education-review-2022',D).publisherName,'台北市选举委员会');
 const html=fs.readFileSync(path.join(__dirname,'../public/index.html'),'utf8');assert.match(html,/career-tang-education-review-round40\.js/);assert.ok(html.indexOf('career-tang-education-review-round40.js')<html.indexOf('app.js'));
});
