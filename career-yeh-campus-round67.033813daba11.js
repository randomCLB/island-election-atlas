(function(root){
'use strict';
const sources={
 'career-yeh-student-union-2008':{title:'屏東商業技術學院學生會：97學年度歷屆幹部名冊',url:'https://npicsa.blogspot.com/2013/10/blog-post.html',date:'2013-10-23（學生會部落格名冊發布）；所列97學年度',kind:'校學生會歷屆幹部名冊',publisherId:'other',checkedAt:'2026-10-05',note:'學生會官方部落格的歷屆名冊列97學生會會長為葉人文（資管系）。名冊於2013年發布，回列97學年度；不提供任職起訖日。'} ,
 'career-yeh-student-union-self-2008':{title:'PTT屏商校板：97學年度學生會簡介（作者自列會長）',url:'https://www.pttweb.cc/bbs/NPTU/M.1224521015.A.3F0',date:'2008-10-21',kind:'論壇保存的同期學生會自述；作者曾用名KK7783／YeSnow',publisherId:'other',checkedAt:'2026-10-05',note:'作者貼文介紹97學年度學生會並在文末自列「學生會會長：葉人文」。PTT頁面是論壇保存，不是校方聘任文件；作者署名與候選人身份連結由學生會名冊及2026具名報導交叉支持。'} ,
 'career-yeh-student-union-udn-2026':{title:'聯合報：台南市長登記參選人報導，葉人文自述學生會經歷',url:'https://udn.com/news/story/124652/9732031',date:'2026-09-03',kind:'具名選戰報導，轉述候選人自述',publisherId:'udn',checkedAt:'2026-10-05',note:'報導在葉人文段落轉述其求學期間曾任屏東商業技術學院學生會會長；不表示報導取得任命原件。報導同時提及其街頭藝人俱樂部總召，該職另以台南市議會2019紀錄核對。'} ,
 'career-yeh-student-union-school-history':{title:'國立屏東大學：屏東商業技術學院校史',url:'https://www.nptu.edu.tw/p/412-1000-3701.php?Lang=zh-tw',date:null,kind:'大學校史',publisherId:'official-tw',checkedAt:'2026-10-05',note:'校史記載學校於1998年改制為國立屏東商業技術學院；只核對機構名稱與沿革，不作為葉人文在校或任職的證明。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='yeh');if(!p)return;
 p.workHistory=p.workHistory||[];
 if(!p.workHistory.some(x=>x.sources?.includes('career-yeh-student-union-2008')))p.workHistory.push({date:'97學年度（約2008—2009）；任職起訖日未載',organization:'國立屏東商業技術學院學生會',role:'會長（校園自治服務，非受僱工作）',note:'學生會歷屆幹部名冊列97學年度葉人文為會長（資管系）；2008年同期論壇保存的學生會簡介亦由作者自列此職，2026年聯合報具名報導轉述葉人文求學期間曾任學生會會長。機構校史確認當時校名；未取得選舉紀錄、學籍或完整任期文件，且此為校園自治服務，不列作受僱工作。',sources:['career-yeh-student-union-2008','career-yeh-student-union-self-2008','career-yeh-student-union-udn-2026','career-yeh-student-union-school-history'],verification:'學生會名冊＋同期自述＋具名新聞交叉；受僱關係不適用，任期邊界未核'});
 p.careerNote='街頭表演年資有官方名冊與具名報導；南部街頭藝人表演俱樂部總召有市議會同期紀錄。另補97學年度學生會會長，屬校園自治服務，不是受僱工作；各段完整起止仍待原始任職資料。';
}
if(typeof module!=='undefined')module.exports={apply,sources};
else{apply(root.ATLAS);root.AtlasYehCampusRound67={apply};}
})(typeof window==='undefined'?globalThis:window);
