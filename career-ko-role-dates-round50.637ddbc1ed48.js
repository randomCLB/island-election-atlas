(function(root){
'use strict';
const ids={tkuEval:'career-ko-tku-eval-round50',tkuDeanStart:'career-ko-tku-dean-start-round50',tkuDeanCheckpoint:'career-ko-tku-dean-checkpoint-round50',npfStart:'career-ko-npf-checkpoint-2022-round50',npfEnd:'career-ko-npf-checkpoint-2023-round50'};
const sources={
 [ids.tkuEval]:{title:'教育部：93學年度師資培育中心評鑑資料（淡江大學）',url:'https://ws-proj.moe.edu.tw/Download.ashx?n=OTTmt6HmsZ%2FlpKflrbjlnIvmsJHlsI%2FlrbgucGRm&u=LzAwMS9VcGxvYWQvNTY1L3JlbGZpbGUvMTI2NTkvMTAzNTkvMjVjMmZhYmMtMWVmMC00OGM0LTk2N2YtMGFjNDA3MWFhMWM3LnBkZg%3D%3D',date:'93學年度（2004—2005）',checkedAt:'2026-10-04',kind:'教育部正式評鑑文件',publisherId:'official-tw',note:'評鑑表列柯志恩為副教授，主聘於教育心理與諮商研究所；此为该年度任职记录，不等同完整聘任起讫。'},
 [ids.tkuDeanStart]:{title:'淡江時報：柯志恩接任學務長',url:'https://tkutimes.tku.edu.tw/dtl.aspx?no=20468',date:'2009-08-08',checkedAt:'2026-10-04',kind:'任職大學校報的交接報導',publisherId:'tku',note:'報導稱2009-08-03布達交接，柯志恩接任學務長；刊載日不是實際生效日，未附聘任令。'},
 [ids.tkuDeanCheckpoint]:{title:'淡江時報：教育部訪視時記載柯志恩為學務長',url:'https://tkutimes.tku.edu.tw/dtl.aspx?no=26825',date:'2012-10-15（訪視日期2012-10-09）',checkedAt:'2026-10-04',kind:'任職大學校報同期報導',publisherId:'tku',note:'校報記載她以學務長身分參與校務訪視，支持當時仍任該職；不能單獨確定離任年月。'},
 [ids.npfStart]:{title:'國家政策研究基金會：520施政檢討民調發布會',url:'https://www.npf.org.tw/16/25066',date:'2022-05-13',checkedAt:'2026-10-04',kind:'基金會官網活動頁及當事機構自列職稱',publisherId:'other',publisherName:'國家政策研究基金會（當事機構自述）',note:'基金會活動頁列柯志恩為執行長及主持人；機構自列可證明公開頁面如此標示，不代替聘任或薪酬紀錄。'},
 [ids.npfEnd]:{title:'國家政策研究基金會：青年居住正義記者會',url:'https://www.npf.org.tw/16/25701',date:'2023-03-23',checkedAt:'2026-10-04',kind:'基金會官網活動頁及當事機構自列職稱',publisherId:'other',publisherName:'國家政策研究基金會（當事機構自述）',note:'基金會活動頁再次列柯志恩為執行長；只確認當日頁面標示，不據此認定連續任期或離任日。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='ko');if(!p)return;
 const professor=p.workHistory.find(x=>x.organization==='淡江大学'&&x.role.includes('副教授'));
 if(professor){
  professor.date='2002-09資料列副教授；93學年度（2004—2005）教育部評鑑仍列副教授；2009資料列教授；升等日未載';
  if(!professor.sources.includes(ids.tkuEval)){
   professor.note+=' 教育部93學年度評鑑表列副教授，主聘教育心理與諮商研究所；只作該學年度的任職節點，升等日期仍未知。';
   professor.sources.push(ids.tkuEval);
  }
  professor.verification='大學資料與教育部評鑑可核對多個時間點；完整聘期及升等日未核';
 }
 const dean=p.workHistory.find(x=>x.organization==='淡江大学学生事务处'&&x.role==='学务长');
 if(dean){
  dean.date='2009-08-03交接接任（校報8/8報導）；2012-10-09仍列學務長；完整離任日期未核';
  const newSources=[ids.tkuDeanStart,ids.tkuDeanCheckpoint].filter(id=>!dean.sources.includes(id));
  if(newSources.length){
   dean.note+=' 淡江時報報導她於2009-08-03交接接任；2012-10-09教育部訪視當日的校報記錄仍列她為學務長。兩個時間點不能確定離任日或連續任期。';
   dean.sources.push(...newSources);
  }
  dean.verification='大學校報記錄接任與其後在任節點；完整離任日未核';
 }
 const npf=p.workHistory.find(x=>x.organization==='国家政策研究基金会'&&x.role==='执行长');
 if(npf){
  npf.date='2022-05-13及2023-03-23機構頁面均列任；實際起訖與是否連續未核';
  const newSources=[ids.npfStart,ids.npfEnd].filter(id=>!npf.sources.includes(id));
  if(newSources.length){
   npf.note+=' 國政基金會自有活動頁在2022-05-13與2023-03-23均以執行長稱呼柯志恩；這是機構自述的兩個時間點，不是聘任檔或完整任期證明。';
   npf.sources.push(...newSources);
  }
  npf.verification='任職機構兩個活動頁自列職稱；聘任及連續任期未核';
 }
}
if(typeof module!=='undefined')module.exports={apply,ids,sources};else{apply(root.ATLAS);root.AtlasCareerKoRoleDatesRound50={apply};}
})(typeof window==='undefined'?globalThis:window);
