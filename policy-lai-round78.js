(function(root){
'use strict';
const sourceIds={vision:'policy-lai-vision-round78',east:'policy-lai-east-round78',education:'policy-lai-education-round78',traffic:'policy-lai-traffic-round78'};
const sources={
 [sourceIds.vision]:{title:'中央社：賴瑞隆提出大亞灣計畫與城市韌性主張',url:'https://www.cna.com.tw/news/aipl/202601030141.aspx',date:'2026-01-03',kind:'初選政見會报道与候选人公开发言',publisherId:'cna',publisherName:'中央通讯社',checkedAt:'2026-10-05',note:'中央社现场报道转述候选人政见会发言；城市开发与韧性措施均属未来规划，报道未证明土地开发核定、预算、时程或实施成果。'},
 [sourceIds.east]:{title:'中央社：賴瑞隆提出東高雄交通、觀光、農業與醫療主張',url:'https://www.cna.com.tw/news/aloc/202512180162.aspx',date:'2025-12-18',kind:'区域愿景记者会报道；候选人办公室供图',publisherId:'cna',publisherName:'中央通讯社',checkedAt:'2026-10-05',note:'报道转述候选人区域政见；交通路线、观光廊带、智慧农业及医疗安排均属提案或规划，未附逐项预算、核定进度或实施成效。'},
 [sourceIds.education]:{title:'中央社：賴瑞隆簽署高雄教育團體六項訴求承諾書',url:'https://www.cna.com.tw/news/aloc/202607150112.aspx',date:'2026-07-15',kind:'新闻报道；候选人签署承诺及发言转述',publisherId:'cna',publisherName:'中央通讯社',checkedAt:'2026-10-05',note:'报道记载候选人签署工会诉求并转述其具体承诺；诉求由教育团体提出，不能把全文都当成候选人原创方案。报道未列员额、预算与实施时程。'},
 [sourceIds.traffic]:{title:'中央社：賴瑞隆與柯志恩簽署人本交通承諾白皮書',url:'https://www.cna.com.tw/news/aloc/202607280116.aspx',date:'2026-07-28',kind:'新闻报道；白皮书签署与候选人发言转述',publisherId:'cna',publisherName:'中央通讯社',checkedAt:'2026-10-05',note:'报道确认赖瑞隆5月签署白皮书，并转述其人本交通承诺；柯志恩的具体数值目标没有记到赖瑞隆名下。白皮书全文、预算与执行指标未在此报道完整刊载。'}
};
const policies=[
 {topic:'urban',text:'提出「大亞灣計畫」：把205兵工廠約58公頃土地導入大眾運輸導向發展，規劃大巨蛋、約15公頃亞灣森林公園、企業總部與智慧商辦，並串接高鐵延伸、捷運及環狀輕軌。',date:'2026-01-03',sources:[sourceIds.vision],note:'政见会报道转述的土地与交通规划构想；土地可供开发状态、具体用地配置、经费、核定程序和工期尚未由报道证明。',type:'初选政见会主张（媒体转述）',electionYear:2026},
 {topic:'transport',text:'针对东高雄提出以捷运黄线为主干，推动红线延伸至林园、国道七号、高屏二快及台27甲延伸至国道十号里港；另提出评估旗山—美浓线、大树线与旗山快速道路。',date:'2025-12-18',sources:[sourceIds.east],note:'报道把不同项目分别写为推动或评估；不能据此理解为全部路线已核定、编列预算或动工。',type:'区域交通政见（媒体转述）',electionYear:2026},
 {topic:'tourism',text:'提出串连旗山、美浓的原民与客家文化、山城景观和农村风貌，发展主题观光廊带；并规划内门、大树、六龟、杉林的宗教文化与艺阵旅游，以及甲仙温泉、茂林、那玛夏和桃源部落文化路线。',date:'2025-12-18',sources:[sourceIds.east],note:'记者会报道转述的区域观光方向；尚未见完整路线、合作对象、预算与分年目标。',type:'区域观光政见（媒体转述）',electionYear:2026},
 {topic:'agriculture',text:'提出以智慧农业发展东高雄，导入数字感测与数据管理，并改善水源调度和输水系统，支持农作与企业投资。',date:'2025-12-18',sources:[sourceIds.east],note:'这是候选人提出的方向；报道没有列明试办地区、设备标准、经费或水利工程核定状态。',type:'农业与供水主张（媒体转述）',electionYear:2026},
 {topic:'health',text:'提出整合义大医院、旗山医院、荣总、基层诊所及行动医疗车，建立转介支援网络，并运用远距医疗、社区健康管理和交通接驳改善东高雄医疗可及性。',date:'2025-12-18',sources:[sourceIds.east],note:'报道把它概括为医疗资源、高龄照护及弱势服务承诺；未列服务量、人员配置、预算与医院合作协议。',type:'医疗平权政见（媒体转述）',electionYear:2026},
 {topic:'education',text:'签署高雄市教育产业工会六项诉求承诺书；具体提出增聘校园辅导与管教专业人力、精简非必要评鉴和文书、逐年降低特教与幼教生师比，并研议常设第三方调处机制及由市长主持教育圆桌会议。',date:'2026-07-15',sources:[sourceIds.education],note:'六项诉求由工会提出，赖瑞隆表示全数支持并纳入施政蓝图；除「逐年降低」外，报道未提供量化目标、年度、预算或组织配置。',type:'签署承诺及公开说明（媒体转述）',electionYear:2026}
];
function apply(d){
 d.policyTopics={...d.policyTopics,urban:'城市规划与土地利用',agriculture:'农业与城乡发展'};
 Object.assign(d.sources,sources);
 const p=d.people.find(x=>x.id==='lai');if(!p)return;
 p.policies=p.policies||[];
 for(const item of policies)if(!p.policies.some(x=>x.sources?.includes(item.sources[0])&&x.topic===item.topic))p.policies.push({...item});
 const traffic=p.policies.find(x=>x.topic==='transport'&&x.sources?.includes('language-ko-traffic'));
 if(traffic){traffic.sources=[...new Set([...traffic.sources,sourceIds.traffic])];traffic.text='签署交通改善承诺白皮书，主张以行人视角重新检视交通规划与设计，并以稳定财源和长期建设改善日常步行、通勤及返家环境。';traffic.note='中央社确认赖瑞隆签署白皮书并转述其承诺。未把同场柯志恩提出的机车、AI交通数值方案归到赖瑞隆名下；报道也未列他的预算与量化指标。';}
}
if(typeof module!=='undefined')module.exports={apply,policies,sources};
else{apply(root.ATLAS);root.AtlasPolicyLaiRound78={apply};}
})(typeof window==='undefined'?globalThis:window);
