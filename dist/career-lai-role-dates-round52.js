(function(root){
'use strict';
const ids={newsStart:'career-lai-news-start-round52',handoff:'career-lai-ocean-handoff-round52',oceanExit:'career-lai-ocean-exit-round52',cityCareer:'career-lai-city-career-round52'};
const sources={
 [ids.newsStart]:{title:'工商時報：賴瑞隆接任高雄市新聞局長',url:'https://tw.news.yahoo.com/地方大代誌-賴瑞隆-接高雄市新聞局長-20101223-154958-485.html',date:'2010-12-23',checkedAt:'2026-10-04',kind:'具名同期人事報導；Yahoo承載工商時報稿件',publisherId:'other',publisherName:'工商時報',note:'記者顏瑞田報導，稱賴瑞隆當時為觀光局主任秘書，將於2010-12-25改制後出任新聞局長。Yahoo是承載平台，不是原發媒體；新聞報導不代替任命令。'},
 [ids.handoff]:{title:'高雄市政府第158次市政會議紀錄：新聞局長轉任海洋局長',url:'https://ws.kcg.gov.tw/001/KcgUploadFiles/263/relfile/8336/55480/f855ccbc-988f-4f3d-a224-2e1b3e644072.pdf',date:'2014-02-25',checkedAt:'2026-10-04',kind:'官方市政會議紀錄',publisherId:'official-tw',agencyName:'高雄市政府',note:'會議紀錄於「介紹市府團隊新成員」稱賴瑞隆為海洋局新任局長，並明載原任新聞局長；只證明該日的職務交接節點，不代替完整人事令或任期表。'},
 [ids.oceanExit]:{title:'中國時報：賴瑞隆投入立委初選（立法院保存頁）',url:'https://www.ly.gov.tw/EngPages/Detail.aspx?nodeid=4989&pid=30650',date:'2015-03-15',checkedAt:'2026-10-04',kind:'立法院保存的具名新聞報導',publisherId:'other',publisherName:'中國時報（立法院保存）',note:'原刊日期及作者見立法院保存頁；報導稱賴瑞隆已辭海洋局長投入初選，但沒有列辭職生效日。立法院是保存平台，不是原發媒體。'},
 [ids.cityCareer]:{title:'知新聞專訪：賴瑞隆回顧2006—2016高雄市府任職',url:'https://www.knews.com.tw/news/07F3BCC43D95D034EA583B9AFD54CDFD',date:'2026-09-22',checkedAt:'2026-10-04',kind:'具名人物專訪與本人回憶',publisherId:'other',publisherName:'知新聞',note:'專訪記錄賴瑞隆本人回顧2006至2016年在高雄市政府任職，並依序列出新聞局專委、借調建設局專委、觀光局主任秘書、新聞局長、海洋局長；除已有同期節點外，各職實際年月仍未載。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='lai');if(!p)return;
 for(const organization of ['行政院劳委会','行政院新闻局']){
  const item=p.workHistory.find(x=>x.organization===organization);if(!item)continue;
  item.date='2006年前已结束（依据本人回忆2006—2016年在高雄市府任职的先后顺序；具体年月未载）';
  item.note+=' 知新聞2026專訪記錄本人回憶2006至2016年在高雄市政府任職；2010同期人事報導仍將這兩項列在其過往經歷中。以此只能把中央職務放在轉入高雄市府之前，沒有任命或離職年月。';
  item.sources=[...new Set([...item.sources,ids.cityCareer,ids.newsStart])];
  item.verification='本人回憶的市府任職區間＋同期履歷報導推定先後；中央任免年月未核';
 }
 p.politicalHistory=p.politicalHistory.filter(x=>!x.role.includes('新闻局长')&&!x.role.includes('海洋局长')&&!x.role.includes('观光局主任秘书')&&!x.role.includes('建设局专门委员'));
 p.politicalHistory.push(
  {date:'2006—2016市府任職期間；2010-12-23同期報導列為在任；到職日待核',role:'观光局主任秘书',organization:'高雄市政府观光局',note:'賴瑞隆於2026專訪回憶2006至2016年任職高雄市府，並將觀光局主任秘書列在多個市府職務之中；2010-12-23具名報導也稱當時仍任該職。兩來源均未給此職完整起訖。',verification:'本人回憶的十年市府任職期間＋同期在任報導；本職完整任期未核',sources:[ids.cityCareer,ids.newsStart]},
  {date:'2006—2016市府任職期間；確切年月未載',role:'建设局专门委员（借调）',organization:'高雄市政府建设局',note:'賴瑞隆於2026專訪回憶曾由新聞局專委借調建設局專委；未取得借調命令或具體任職年月。',verification:'具名專訪中的本人回憶；借調與任期文件未核',sources:[ids.cityCareer]},
  {date:'2010-12-25任新闻局长；2014-02-25市政会议记载转任海洋局长',role:'新闻局长',organization:'高雄市政府新闻局',note:'2010同期報導稱改制後將於12月25日出任；2014-02-25市府會議紀錄稱其原任新聞局長並介紹為海洋局新任局長。沒有找到正式任命與離任文書，日期按可查節點呈現。',verification:'同期媒體任命報導＋市府會議紀錄；正式任期日未核',sources:[ids.newsStart,ids.handoff]},
  {date:'2014-02-25市府記載新任；2015-03-15報導稱已辭任（生效日未載）',role:'海洋局长',organization:'高雄市政府海洋局',note:'市府會議紀錄確認新任節點；立法院保存的中國時報報導稱他在2015-03-15前已辭職投入初選。未取得實際辭職生效日。',verification:'官方會議紀錄＋立法院保存的同期報導；完整任期未核',sources:[ids.handoff,ids.oceanExit]}
 );
}
if(typeof module!=='undefined')module.exports={apply,ids,sources};else{apply(root.ATLAS);root.AtlasCareerLaiRoleDatesRound52={apply};}
})(typeof window==='undefined'?globalThis:window);
