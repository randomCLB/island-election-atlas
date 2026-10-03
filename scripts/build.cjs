'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),D=require('../public/data.js'),U=require('../public/domain.js');
require('../public/taipei-research.js').apply(D);
const P=require('../public/taipei-profile-data.js');P.apply(D);
const profileErrors=P.validate(D);if(profileErrors.length)throw new Error(profileErrors.join('\n'));
if(process.env.ATLAS_PUBLIC_RELEASE==='1')for(const p of D.people.filter(p=>p.city==='taipei')){
 if(p.photo?.delivery!=='bundled-file'||!['open-license','editorial-quotation'].includes(p.photo.publicationBasis)||!p.photo.credit||!p.photo.note)throw new Error('Missing publication basis: '+p.id);
 if(!/^photos\/[a-z-]+\.jpg$/.test(p.photo.url)||!fs.existsSync(path.join(root,'public',p.photo.url)))throw new Error('Missing bundled portrait: '+p.id);
}
const errors=U.validateData(D);if(errors.length)throw new Error(errors.join('\n'));
// v0.1 has no poll release pipeline. Do not silently ship restricted data in a JS bundle.
if(D.polls.length)throw new Error('Poll publication is not enabled in v0.1. Implement reviewed build-time filtering and legal review before publishing.');
const dist=path.join(root,'dist');fs.rmSync(dist,{recursive:true,force:true});fs.cpSync(path.join(root,'public'),dist,{recursive:true});fs.writeFileSync(path.join(dist,'.nojekyll'),'');
console.log('Built static site: '+dist);
