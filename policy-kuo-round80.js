(function(root){
'use strict';
const ids={moi:'policy-kuo-moi-round80',charter:'policy-kuo-charter-round80',mnews:'policy-kuo-mnews-round80',video:'policy-kuo-video-round80'};
const sources={
 [ids.moi]:{title:'内政部政党资讯网：台湾麻将最大党登记资料',url:'https://party.moi.gov.tw/PartyMainContent.aspx?n=16100&s=517&sms=13073',date:'页面更新2026-08-13；2026-10-05查阅',kind:'内政部政党登记资料',publisherId:'official-tw',agencyName:'内政部',checkedAt:'2026-10-05',note:'页面列政党负责人郭玺、成立及备案日期，并提供党章下载链接。只确认登记资料，不证明任何个人市政方案。'},
 [ids.charter]:{title:'内政部备案附件：台湾麻将最大党章程',url:'https://ws.moi.gov.tw/001/Upload/444/relfile/13073/563/2dc85087-fed0-442d-be26-e72f7d154e8f.pdf',date:'章程版本日期未载；2026-10-05查阅',kind:'内政部政党登记页面所附党章',publisherId:'official-tw',agencyName:'内政部',checkedAt:'2026-10-05',note:'章程列麻将文化、银发族团体休闲和智能运动为党务宗旨；这是政党层级目标，不是郭玺提出的台北市预算或项目承诺，也不能当作脑健康疗效证据。'},
 [ids.mnews]:{title:'镜新闻：郭玺称将于政见发表会与辩论说明完整政见',url:'https://www.mnews.tw/story/20260506nm014',date:'2026-05-06',kind:'具名记者采访报道；竞选规划转述',publisherId:'mnews',publisherName:'镜新闻',checkedAt:'2026-10-05',note:'报道记载郭玺表示后续将提出完整政见，并在政见发表会与辩论说明；这证明当时的计划，不证明之后已经发表或一直未发表。'},
 [ids.video]:{title:'台湾麻将最大党官方YouTube：郭玺参选台北市长的目的是什么？',url:'https://www.youtube.com/watch?v=TsX2THxdwQs',date:'2026-05-10',kind:'候选人所属政党官方频道视频；仅核对页面标题与上传日期',publisherId:'youtube',publisherName:'台湾麻将最大党官方频道',checkedAt:'2026-10-05',note:'本轮只核对搜索索引中的频道、标题与上传日期，未看完整影片或逐字稿；因此列为尚未查核的材料，不用来推定政策内容。'}
};
const policy={topic:'health',text:'台湾麻将最大党章程把推动麻将文化、长者团体休闲交流和银发族智能运动列为政党宗旨，并称目标包括延缓脑力退化、减轻长照财政负担。',date:'章程版本日期未载；内政部登记页面于2026-08-13更新',sources:[ids.moi,ids.charter],note:'这是政党章程中的组织宗旨，不是郭玺个人提出的台北市设施、预算或服务方案。章程对脑力退化与长照支出的描述属于政党目标，并非本站确认的医学效果或财政成效。',type:'政党章程宗旨（非个人市政承诺）',electionYear:2026};
function apply(d){
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='kuo');if(!p)return;
 p.policies=p.policies||[];
 if(!p.policies.some(x=>x.sources?.includes(ids.charter)))p.policies.push({...policy});
 p.policyCoverage={checkedAt:'2026-10-05',note:'已查：内政部现行政党登记资料与所附党章、5月6日郭玺受访时关于后续发表政见的说法，以及8月31日登记报道。章程只说明党务宗旨；在已查报道中没有具体台北市预算、工程或服务措施。暂未确认：郭玺或团队是否已在后续政见会、辩论或公开发言中提出完整市政方案；5月报道只记录当时计划，不能据此断言后来没有发表。尚未查核：已发现的5月10日官方频道视频仅核对标题与日期，完整内容及之后官方社群、影片和辩论记录尚未逐项审阅。',sources:[ids.moi,ids.charter,ids.mnews,ids.video,'t-kuo-register','roster']};
}
if(typeof module!=='undefined')module.exports={apply,policy,sources};
else{apply(root.ATLAS);root.AtlasPolicyKuoRound80={apply};}
})(typeof window==='undefined'?globalThis:window);
