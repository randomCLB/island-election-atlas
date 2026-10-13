/* Factual snapshot checked 2026-10-02. Missing evidence is not a finding. */
(function(root){
'use strict';
const sources={
 local51:{title:'中央社：1950至1951年首届县市长选举',url:'https://www.cna.com.tw/news/ahel/202401065003.aspx',date:'2024-01-07',kind:'历史资料报道'},
 merger:{title:'中央社：县市改制十年回顾',url:'https://www.cna.com.tw/news/aloc/202012200068.aspx',date:'2020-12-20',kind:'仅提取改制沿革'},
 results10:{title:'国政基金会：2010五都市长候选人得票表',url:'https://www.npf.org.tw/2/10268',date:'2011',kind:'仅提取表5票数；不采纳政治评论'},
 roster:{title:'中央社：2026县市长登记参选人资料',url:'https://www.cna.com.tw/news/aipl/202609045002.aspx',date:'2026-09-19',kind:'登记资料报道'},
 winners22:{title:'中央社：中选会公告2022县市长当选名单',url:'https://www.cna.com.tw/news/aipl/202212020201.aspx',date:'2022-12-02',kind:'公告报道'},
 taipei22:{title:'今周刊：2022台北市长得票记录',url:'https://www.businesstoday.com.tw/article/category/80392/post/202211300054/',date:'2022-11-30',kind:'仅提取票数，不采纳评论'},
 newtaipei22:{title:'华视：新北市2022开票结果',url:'https://news.cts.com.tw/cts/politics/202211/202211262114814.html',date:'2022-11-26',kind:'票数报道；比例由票数计算'},
 taichung22:{title:'自由时报：蔡其昌感谢524224票支持',url:'https://election.ltn.com.tw/2022/news/breakingnews/4137997',date:'2022-11-28',kind:'候选人公开发言报道'},
 tainan22:{title:'年代：台南五名候选人2022票数',url:'https://www.eracom.com.tw/EraNews/election2022/2022-11-26/981492.html',date:'2022-11-26',kind:'中选会计票转述；仅采票数'},
 kaohsiung22:{title:'海峡导报：回顾2022高雄市长票数',url:'https://news.ifeng.com/c/8eaSjXLSJOZ',date:null,kind:'仅提取历史票数；不采纳评论'},
 taipei02:{title:'中选会资料库：91年直辖市长选举',url:'https://db.cec.gov.tw/ElecTable/Election/ElecTickets?areaCode=00&cityCode=000&dataLevel=C&dataType=tickets&deptCode=000&legisId=00&liCode=0000&prvCode=00&subjectId=C1&themeId=a31daef43bd42a9613254e2d3d18fdbd&typeId=ELC',date:'2002-12-07',kind:'官方结果资料'},
 cec:{title:'中央选举委员会：选举资料库',url:'https://db.cec.gov.tw/ElecTable',date:null,kind:'官方资料入口'},
 cn:{title:'中央社：蒋万安谈两岸沟通交流',url:'https://www.cna.com.tw/news/aipl/202502070090.aspx',date:'2025-02-07',kind:'公开表态报道'},
 us:{title:'中华日报：2025环球商务论坛与台美产业合作',url:'https://tw.stock.yahoo.com/news/2025環球商務論壇-蔣萬安-深化台美合作-展現台北生技能量-104640005.html',date:'2025-09-19',kind:'公开活动报道'},
 jp:{title:'中央社：蒋万安访问大阪，交流观光与新创',url:'https://www.cna.com.tw/news/ahel/202405270395.aspx',date:'2024-05-27',kind:'公开活动报道'},
 court:{title:'最高行政法院：111年度抗字第349号新闻稿',url:'https://www.judicial.gov.tw/tw/cp-1888-749751-9e0a7-1.html',date:null,kind:'司法机关新闻稿'},
 education:{title:'中央社：沈伯洋教育政见与北市回应',url:'https://www.cna.com.tw/news/aloc/202610020326.aspx',date:'2026-10-02',kind:'政策与回应报道；正文待复核'},
 taichungPolicy:{title:'中央社：何欣纯333山线大创新，江启臣黄金十年',url:'https://www.cna.com.tw/news/aloc/202610020253.aspx',date:'2026-10-02',kind:'政策发布报道；仅收录标题可核对用语'},
 map:{title:'g0v/twgeojson：2010合并版县市界',url:'https://github.com/g0v/twgeojson/blob/master/json/twCounty2010merge.topo.json',date:'2010',kind:'CC0，概览边界，非2026测绘数据'},
 statute94:{title:'总统府公报：1994年制定直辖市自治法',url:'https://www.president.gov.tw/Page/294/36623',date:'1994-07-29',kind:'制度文献'},
 law:{title:'公职人员选举罢免法',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=D0020010',date:null,kind:'规则原文入口；上线前须复核适用范围'}
};
const cities=[
{id:'taipei',name:'台北',en:'TAIPEI',index:'01',caption:'从首都街巷，翻开一页选举档案。',center:[121.55,25.05],point:[482,118],label:[540,93],line:'右',history:'本版已录入2002、2010、2022三届结果，其中2022尚有候选人待导入。更早民选与官派任期须分段核对，不把任命记录充作选举。'},
{id:'new-taipei',name:'新北',en:'NEW TAIPEI',index:'02',caption:'一座环绕台北的城市，多条地方叙事。',center:[121.51,24.93],point:[472,163],label:[236,149],line:'左',history:'历史资料需区分原台北县与改制后的新北市。第一稿录入2010与2022结果，旧县长选举尚待逐届核验。'},
{id:'taichung',name:'台中',en:'TAICHUNG',index:'03',caption:'旧县与旧市的故事，在这里相遇。',center:[120.83,24.22],point:[342,298],label:[115,297],line:'左',history:'2010年前的原台中县、原台中市将分别建档。第一稿没有用今天的边界重画尚未核对的旧选票。'},
{id:'tainan',name:'台南',en:'TAINAN',index:'04',caption:'在一张选票里，听见城市的回声。',center:[120.32,23.14],point:[226,525],label:[65,516],line:'左',history:'原台南县、原台南市需分开收录，再接入合并后的城市时间线。第一稿录入2010与2022票数。'},
{id:'kaohsiung',name:'高雄',en:'KAOHSIUNG',index:'05',caption:'从港口到山地，读懂城市的不同尺度。',center:[120.58,22.99],point:[291,583],label:[382,648],line:'右',history:'原高雄县、原高雄市及合并后的结果分开处理；补选与罢免也须独立标记。本版录入2010完整票数与2022部分票数。'}];
const rows=[
['chiang','taipei','蔣萬安','KMT','台北市长；曾任立法委员与律师。'],
['shen','taipei','沈伯洋','DPP','立法委员；曾从事犯罪学研究与教学。'],
['kuo','taipei','郭璽','台湾麻将最大党','曾任海军司令部顾问。'],
['hsiao-w','taipei','蕭文乾','台湾SoR无法党','曾任双语教育相关机构负责人。'],
['tang','taipei','唐新民','三势团结促进联盟','登记参选人；经历资料待进一步核实。'],
['lin-c','taipei','林志成','无党籍','曾任健美协会秘书长兼总教练。'],
['su-c','new-taipei','蘇巧慧','DPP','立法委员；曾任律师。'],
['lee','new-taipei','李四川','KMT','曾任台北、新北、高雄副市长。'],
['su-h','new-taipei','蘇輝湟','无党籍','曾参选新庄区立法委员及里长。'],
['ho','taichung','何欣純','DPP','曾任第8至11届立法委员。'],
['johnny','taichung','江啟臣','KMT','立法院副院长；曾任国民党主席。'],
['hung-l','taichung','洪麗華','司法正义党','曾任沙鹿区鹿寮里里长。'],
['hsieh','tainan','謝龍介','KMT','立法委员；曾任台南市议员。'],
['chen-t','tainan','陳亭妃','DPP','立法委员；曾任市议员与新闻主播。'],
['hsiao-l','tainan','蕭燐洪','台湾SoR无法党','曾从事导游、领队工作。'],
['yeh','tainan','葉人文','无党籍','曾任街头艺人团体总召。'],
['lai','kaohsiung','賴瑞隆','DPP','立法委员；曾任高雄市新闻局长、海洋局长。'],
['ko','kaohsiung','柯志恩','KMT','立法委员；曾任大学教授与电视主持人。'],
['chang','kaohsiung','張靜','司法改革党','律师；曾任法院庭长。'],
['wang','kaohsiung','王肇民','无党籍','曾发起筹组台湾一条心。'],
['hung-f','kaohsiung','洪方隆','无党籍','长春藤电讯公司创办人。']
];
const people=rows.map(([id,city,name,party,bio])=>({id,city,name,party,bio,source:'roster',status:'登记资料快照，非最终资格审定',slogan:null,evidence:[],controversies:[]}));
const chiang=people.find(p=>p.id==='chiang');
chiang.evidence=[
{region:'cn',date:'2025-02-07',topic:'城市交流',text:'就上海团来台申请受阻一事，他表示两岸关系紧张时仍应扩大沟通与交流。',limit:'这是当次公开发言，不等于其所有两岸政策，也不能从城市交流推导统一或独立立场。',source:'cn'},
{region:'us',date:'2025-09-19',topic:'经贸与生技合作',text:'在环球商务论坛上，他表示推动台北与北美城市及企业的合作，并争取生技产业投资机会。',limit:'记录的是城市经贸主张，不代表对美国所有政策的支持。',source:'us'},
{region:'jp',date:'2024-05-27',topic:'观光与新创交流',text:'访问大阪期间，他支持相互宣传国际活动，并邀请日本创业者运用台北的新创资源。',limit:'这是2024年的交流记录，不是对日本政府整体的政治评价。',source:'jp'}
];
chiang.controversies=[{title:'2022年选举姓名与户籍登记假处分争议',status:'抗告驳回',date:'2022',claim:'苏焕智针对选举姓名登记声请假处分，并提出抗告。',outcome:'最高行政法院111年度抗字第349号裁定驳回抗告。新闻稿讨论声请人法律上利害关系及假处分要件。',limit:'此程序裁定不等于对生物亲缘关系的认定，也不能据此推导犯罪或不当行为成立。',reply:'本人对本件裁定的直接回应尚未收录。',source:'court'}];
people.find(p=>p.id==='ho').slogan={text:'333山线大创新',type:'政策发布用语，非已确认的全竞选主口号',source:'taichungPolicy',date:'2026-10-02'};
people.find(p=>p.id==='johnny').slogan={text:'黄金十年',type:'政策发布用语，非已确认的全竞选主口号',source:'taichungPolicy',date:'2026-10-02'};
const elections=[
{city:'taipei',year:2010,complete:true,scope:'5名候选人完整票数',sources:['results10'],rows:[['郝龍斌','KMT',797865],['蘇貞昌','DPP',628129],['吳武明','无党籍',3672],['蕭淑華','无党籍',2238],['吳炎成','无党籍',1832]]},
{city:'new-taipei',year:2010,complete:true,scope:'2名候选人完整票数',sources:['results10'],rows:[['朱立倫','KMT',1115536],['蔡英文','DPP',1004692]]},
{city:'taichung',year:2010,complete:true,scope:'2名候选人完整票数',sources:['results10'],rows:[['胡志強','KMT',730284],['蘇嘉全','DPP',698358]]},
{city:'tainan',year:2010,complete:true,scope:'2名候选人完整票数',sources:['results10'],rows:[['郭添財','KMT',406196],['賴清德','DPP',619897]]},
{city:'kaohsiung',year:2010,complete:true,scope:'3名候选人完整票数',sources:['results10'],rows:[['黃昭順','KMT',319171],['陳菊','DPP',821089],['楊秋興','无党籍',414950]]},
{city:'taipei',year:2022,complete:false,scope:'已收录3名候选人，其余尚未导入',sources:['winners22','taipei22'],rows:[['蔣萬安','KMT',575590,42.29],['陳時中','DPP',434558,31.93],['黃珊珊','无党籍',342141,25.14]]},
{city:'new-taipei',year:2022,complete:true,scope:'2名候选人完整票数',sources:['winners22','newtaipei22'],rows:[['侯友宜','KMT',1152555],['林佳龍','DPP',693976]]},
{city:'taichung',year:2022,complete:false,scope:'已收录2名候选人，其余尚未导入',sources:['winners22','taichung22'],rows:[['盧秀燕','KMT',799107],['蔡其昌','DPP',524224]]},
{city:'tainan',year:2022,complete:true,scope:'5名候选人完整票数',sources:['winners22','tainan22'],rows:[['黃偉哲','DPP',433684],['謝龍介','KMT',387731],['許忠信','无党籍',38697],['林義豐','无党籍',24606],['吳炳輝','无党籍',3956]]},
{city:'kaohsiung',year:2022,complete:false,scope:'已收录2名候选人，其余尚未导入',sources:['winners22','kaohsiung22'],rows:[['陳其邁','DPP',766147],['柯志恩','KMT',529607]]},
{city:'taipei',year:2002,complete:true,scope:'2名候选人完整票数',sources:['taipei02'],rows:[['李應元','DPP',488811],['馬英九','KMT',873102]]}
];
const data={version:'0.1.0',checkedAt:'2026-10-02',rosterAsOf:'2026-09-19',electionDate:'2026-11-28',sources,cities,people,elections,polls:[]};
if(typeof module!=='undefined')module.exports=data;else root.ATLAS=data;
})(typeof window==='undefined'?globalThis:window);
