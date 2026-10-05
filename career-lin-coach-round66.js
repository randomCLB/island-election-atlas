(function(root){
'use strict';
const source={title:'蘋果日報：雙斧魔王怒劈司法院（論壇保存轉載）',url:'https://www.astromalon.com/viewthread.php?action=printable&tid=6656',date:'2011-09-06（原報導刊期；論壇保存頁同日）',kind:'蘋果日報舊報導的論壇保存轉載；非原報頁',publisherId:'other',checkedAt:'2026-10-05',note:'論壇頁保留原文並連回已失效的蘋果日報原網址。報導稱一名45歲林志成於2010年任台灣世界健美先生代表隊總教練，並記載健美協會職務。年齡與2024中選會公報所列候選人出生年月相近，運動項目及協會經歷也相符，但轉載沒有出生年月等唯一識別資料；此經歷按低置信度、身份待核線索呈現，原始任命名冊尚未取得。'};
function apply(d){
 d.sources['career-lin-coach-round66']=source;
 const p=d.people.find(x=>x.id==='lin-c');
 if(!p)return;
 if(!p.workHistory.some(x=>x.sources?.includes('career-lin-coach-round66')))p.workHistory.push({date:'2010（2011-09-06報導回顧）',organization:'台灣世界健美先生代表隊',role:'總教練（報導所述；候選人身份待核）',note:'論壇保存的蘋果日報報導稱一名45歲林志成於2010年任代表隊總教練。年齡、運動項目與候選人公報及協會經歷相近，提供身份線索；但轉載未載出生年月，未取得原報掃描或正式選訓／任命名冊，不能視為已確認同一人。協會官網另列林志成為第七屆代理秘書長，僅能支持協會經歷線索，不能獨立證明代表隊任命。',sources:['career-lin-coach-round66','v4-lin-association-history','v4-lin-bulletin'],verification:'舊報論壇保存轉載＋協會官網及候選人公報交叉比對；來源與身份均待原始文件核驗'});
 const reviewScope='已查2024中選會候選人公報、健美健身協會官網歷任名冊，並以候選人姓名、協會／健美經歷及中國大陸、美國、日本相關詞檢索可取得的舊報與公開資料；這些資料主要是地方政見及運動履歷，不能代替外交或國際政策表態。';
 const reviewNote='在上述已查材料與本輪可取得的公開檢索結果中，尚未找到本人對此方向的明確政策表態。這是有範圍的「暫未確認」，不表示中立、贊成或反對，也不代表已窮盡所有公開發言。';
 for(const region of ['cn','us','jp'])if(p.evidenceCoverage?.[region])p.evidenceCoverage[region]={checkedAt:'2026-10-05',scope:reviewScope,note:reviewNote,sources:['v4-lin-bulletin','v4-lin-association-history','career-lin-coach-round66','roster']};
 p.careerNote='代理秘书长有协会历任名册；代表队教练另有旧报保存转载，但候选人身份及任命待核。健身中心总教练有活动受访记录；公报所列协会总教练与比赛成绩仍为候选人自述，完整任期和现职均未获证明。';
}
if(typeof module!=='undefined')module.exports={apply,source};
else{apply(root.ATLAS);root.AtlasLinCoachRound66={apply};}
})(typeof window==='undefined'?globalThis:window);
