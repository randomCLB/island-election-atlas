(function(root){
'use strict';
const ids={newsStart:'career-lai-news-start-round52',handoff:'career-lai-ocean-handoff-round52',oceanExit:'career-lai-ocean-exit-round52'};
const sources={
 [ids.newsStart]:{title:'工商時報：賴瑞隆接任高雄市新聞局長',url:'https://tw.news.yahoo.com/地方大代誌-賴瑞隆-接高雄市新聞局長-20101223-154958-485.html',date:'2010-12-23',checkedAt:'2026-10-04',kind:'具名同期人事報導；Yahoo承載工商時報稿件',publisherId:'other',publisherName:'工商時報',note:'記者顏瑞田報導，稱賴瑞隆當時為觀光局主任秘書，將於2010-12-25改制後出任新聞局長。Yahoo是承載平台，不是原發媒體；新聞報導不代替任命令。'},
 [ids.handoff]:{title:'高雄市政府第158次市政會議紀錄：新聞局長轉任海洋局長',url:'https://ws.kcg.gov.tw/001/KcgUploadFiles/263/relfile/8336/55480/f855ccbc-988f-4f3d-a224-2e1b3e644072.pdf',date:'2014-02-25',checkedAt:'2026-10-04',kind:'官方市政會議紀錄',publisherId:'official-tw',agencyName:'高雄市政府',note:'會議紀錄於「介紹市府團隊新成員」稱賴瑞隆為海洋局新任局長，並明載原任新聞局長；只證明該日的職務交接節點，不代替完整人事令或任期表。'},
 [ids.oceanExit]:{title:'中國時報：賴瑞隆投入立委初選（立法院保存頁）',url:'https://www.ly.gov.tw/EngPages/Detail.aspx?nodeid=4989&pid=30650',date:'2015-03-15',checkedAt:'2026-10-04',kind:'立法院保存的具名新聞報導',publisherId:'other',publisherName:'中國時報（立法院保存）',note:'原刊日期及作者見立法院保存頁；報導稱賴瑞隆已辭海洋局長投入初選，但沒有列辭職生效日。立法院是保存平台，不是原發媒體。'}
};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='lai');if(!p)return;
 p.politicalHistory=p.politicalHistory.filter(x=>!x.role.includes('新闻局长')&&!x.role.includes('海洋局长')&&!x.role.includes('观光局主任秘书')&&!x.role.includes('建设局专门委员'));
 p.politicalHistory.push(
  {date:'2010-12-23同期報導列為在任；到職日待核',role:'观光局主任秘书',organization:'高雄市政府观光局',note:'2010-12-23具名報導稱其當時仍任觀光局主任秘書；只能作在職時間點。',verification:'立法院履歷列職務；同期報導提供在職節點，完整任期未核',sources:[ids.newsStart]},
  {date:'起止待核定',role:'建设局专门委员',organization:'高雄市政府建设局',note:'立法院履歷列有此職，未標任職起止；尚無足夠資料補年。',verification:'立法院履歷列職務，任期未核',sources:['four-ly-lai']},
  {date:'2010-12-25任新闻局长；2014-02-25市政会议记载转任海洋局长',role:'新闻局长',organization:'高雄市政府新闻局',note:'2010同期報導稱改制後將於12月25日出任；2014-02-25市府會議紀錄稱其原任新聞局長並介紹為海洋局新任局長。沒有找到正式任命與離任文書，日期按可查節點呈現。',verification:'同期媒體任命報導＋市府會議紀錄；正式任期日未核',sources:[ids.newsStart,ids.handoff]},
  {date:'2014-02-25市府記載新任；2015-03-15報導稱已辭任（生效日未載）',role:'海洋局长',organization:'高雄市政府海洋局',note:'市府會議紀錄確認新任節點；立法院保存的中國時報報導稱他在2015-03-15前已辭職投入初選。未取得實際辭職生效日。',verification:'官方會議紀錄＋立法院保存的同期報導；完整任期未核',sources:[ids.handoff,ids.oceanExit]}
 );
}
if(typeof module!=='undefined')module.exports={apply,ids,sources};else{apply(root.ATLAS);root.AtlasCareerLaiRoleDatesRound52={apply};}
})(typeof window==='undefined'?globalThis:window);
