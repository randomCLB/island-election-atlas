(function(root){
'use strict';
const rows = [
  {
    "city": "miaoli",
    "anchor": "ml-chen-eldercare",
    "name": "陳品安",
    "topic": "health",
    "text": "陈品安提出扩大假牙补助对象，符合条件者五年内最高补助5万元，并把敬老卡额度提高至每月1000元。",
    "admin": false,
    "url": "https://www.facebook.com/pinanchen064/posts/1607645894697181",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chen-eldercare"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chung-eldercare",
    "name": "鍾東錦",
    "topic": "health",
    "text": "苗栗县府规划在铜锣兴建住宿式长照医养家园，工程经费包括中央补助与县府自筹。",
    "admin": true,
    "url": "https://www.miaoli.gov.tw/News_Content2.aspx?n=275&s=938896",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chung-eldercare"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chen-bus",
    "name": "陳品安",
    "topic": "transport",
    "text": "陈品安提出盘点偏乡学生和长者需求，整合幸福巴士与接驳服务，并改善候车及无障碍设施。",
    "admin": false,
    "url": "https://www.facebook.com/pinanchen064/posts/1616916943770076",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chen-bus"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chung-bus",
    "name": "鍾東錦",
    "topic": "transport",
    "text": "钟东锦提出争取高铁苗栗站尖峰增停，离峰班距以缩短至一小时内为目标。",
    "admin": true,
    "url": "https://www.facebook.com/DongJinZhong/posts/1677410197719280",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chung-bus"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chen-school",
    "name": "陳品安",
    "topic": "education",
    "text": "陈品安提出外县市初任教师前三年每月补贴租屋3000元，并依年资增加导师及行政工作奖励。",
    "admin": false,
    "url": "https://www.facebook.com/pinanchen064/posts/1723985013063268",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chen-school"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chung-school",
    "name": "鍾東錦",
    "topic": "education",
    "text": "苗栗县府规划大伦国中新校舍第一期设置普通与专科教室，预计2027年完工。",
    "admin": true,
    "url": "https://www.miaoli.gov.tw/News_Content2.aspx?n=275&s=900006",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chung-school"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chen-housing",
    "name": "陳品安",
    "topic": "economy",
    "text": "陈品安主张加强包租代管和租金补贴，并通过修缮补助及媒合活化闲置老屋。",
    "admin": false,
    "url": "https://www.facebook.com/pinanchen064/posts/1711256174336152",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chen-housing"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chen-traffic-safety",
    "name": "陳品安",
    "topic": "transport",
    "text": "陈品安提出优先改善学校、医院和车站周边人行环境，并在学校周边150米设置安全动线。",
    "admin": false,
    "url": "https://www.facebook.com/pinanchen064/posts/1683006820494421",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chen-traffic-safety"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chung-traffic-safety",
    "name": "鍾東錦",
    "topic": "transport",
    "text": "苗栗县府说明头份三项人本交通计划，依道路条件设置人行空间并调整路口设计。",
    "admin": true,
    "url": "https://www.miaoli.gov.tw/News_Content2.aspx?n=285&s=930660",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chung-traffic-safety"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chen-culture",
    "name": "陳品安",
    "topic": "tourism",
    "text": "陈品安提出为文化资产建立定期巡查、风险分级和快速通报制度，并编列小额修缮经费。",
    "admin": false,
    "url": "https://www.facebook.com/pinanchen064/posts/1715297603932009",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chen-culture"
  },
  {
    "city": "miaoli",
    "anchor": "ml-chung-tourism",
    "name": "鍾東錦",
    "topic": "tourism",
    "text": "苗栗县府规划后龙好望角及过港隧道观光工程，包含景观空间和游客服务设施。",
    "admin": true,
    "url": "https://www.miaoli.gov.tw/News_Content2.aspx?n=275&s=949775",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/miaoli#ml-chung-tourism"
  },
  {
    "city": "nantou",
    "anchor": "nt-wen-eldercare",
    "name": "温世政",
    "topic": "health",
    "text": "温世政提出肺癌筛检、带状疱疹疫苗补助、行动医疗车与提高假牙补助。",
    "admin": false,
    "url": "https://www.facebook.com/wEnShihheng/posts/pfbid02SxSSu2X1kYiD8dTD62L76sJqfnNG1fGgCg43doMj8fu5Y9sEKygvkY2opZaWULFPl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-wen-eldercare"
  },
  {
    "city": "nantou",
    "anchor": "nt-hsu-eldercare",
    "name": "許淑華",
    "topic": "health",
    "text": "南投县府规划优先为县内65岁以上低收入与中低收入长者免费接种带状疱疹疫苗。",
    "admin": true,
    "url": "https://www.facebook.com/100044482117533/posts/pfbid0CTjv6spzkooAT69qCrMDqsR1o3PRhKC1N6VUZbkzNUSUGddaSPEyohMMydTxsTUNl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-hsu-eldercare"
  },
  {
    "city": "nantou",
    "anchor": "nt-wen-bus",
    "name": "温世政",
    "topic": "transport",
    "text": "温世政提出65岁以上长者就医可单人预约接送，不必凑足人数。",
    "admin": false,
    "url": "https://www.facebook.com/wEnShihheng/posts/pfbid0ZQ3kwaNB8mwLs1jWk28JDbUSMJ1CSHL4vFNfdPmtmjsHWDAe2irthKTYTxEgRPHjl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-wen-bus"
  },
  {
    "city": "nantou",
    "anchor": "nt-hsu-bus",
    "name": "許淑華",
    "topic": "transport",
    "text": "南投县府规划以BOT模式开发南投市转运站，整合客运站台、停车和商业设施。",
    "admin": true,
    "url": "https://www.nantou.gov.tw/big5/news_content.php?dptid=376480000&cid=254&id=162374",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-hsu-bus"
  },
  {
    "city": "nantou",
    "anchor": "nt-wen-jobs",
    "name": "温世政",
    "topic": "economy",
    "text": "温世政提出成立青年发展局，支持创业、引进低污染产业，并提出8万元成家基金。",
    "admin": false,
    "url": "https://www.facebook.com/wEnShihheng/posts/pfbid037QBWBfJUS8Qbg92WrxRmptV7nwuzYB1S3ZRipx9v9xYCPb4B4fhx6MqbSqwpwLWLl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-wen-jobs"
  },
  {
    "city": "nantou",
    "anchor": "nt-hsu-school",
    "name": "許淑華",
    "topic": "education",
    "text": "南投县府规划自115学年度第二学期起，将免费营养午餐补助每生每餐增加10元。",
    "admin": true,
    "url": "https://www.facebook.com/100044482117533/posts/pfbid02Brnwa3445vqiMWhY7yHFhAk8i83N5YAkTjkFoM6Wbn99vi2JHSKnXukehsUT892Ul",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-hsu-school"
  },
  {
    "city": "nantou",
    "anchor": "nt-wen-flood",
    "name": "温世政",
    "topic": "water",
    "text": "温世政提出结合上游水土保持、中游防洪及下游治水，并增加易淹水地区的滞洪空间。",
    "admin": false,
    "url": "https://www.facebook.com/wEnShihheng/posts/pfbid02TxsEhTJSRnmLgjK65WPpHpZjR2m6dKsxnt6EpaUP4MQb2Xu5Jmi9QnA5WzGBjQAGl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-wen-flood"
  },
  {
    "city": "nantou",
    "anchor": "nt-hsu-flood",
    "name": "許淑華",
    "topic": "water",
    "text": "南投县府提出争取大型抽水机，并规划自动水门、分流设施及集水坑，以降低积淹水风险。",
    "admin": true,
    "url": "https://www.facebook.com/100044482117533/posts/pfbid0QhVpPFVQ4zD8AuBZz3vCe3Qoiz7uLvNh11tPC3py4TWFHHepS8N6fdtMXn2LoEgjl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-hsu-flood"
  },
  {
    "city": "nantou",
    "anchor": "nt-wen-waste",
    "name": "温世政",
    "topic": "water",
    "text": "温世政主张垃圾减量、分类、厨余资源化、固体再生燃料及既有焚化炉优化并行，不应只靠新建焚化炉。",
    "admin": false,
    "url": "https://www.facebook.com/wEnShihheng/posts/pfbid0QUPiSvvSfV8vCAVFVZJ4KCoxa15SmVFzhv2adEJAFaG3YP8JP7YqArbx7YxEwqRvl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-wen-waste"
  },
  {
    "city": "nantou",
    "anchor": "nt-hsu-waste",
    "name": "許淑華",
    "topic": "water",
    "text": "南投县府规划引入民间资金兴建垃圾处理及再生能源中心，以焚化和多元设施处理废弃物。",
    "admin": true,
    "url": "https://www.ntepb.gov.tw/sub/content/index.aspx?Parser=1,25,679",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-hsu-waste"
  },
  {
    "city": "nantou",
    "anchor": "nt-wen-healthcare",
    "name": "温世政",
    "topic": "health",
    "text": "温世政提出在行动医疗车配置影像和心电图等设备，结合远距医疗与偏乡送药。",
    "admin": false,
    "url": "https://www.facebook.com/wEnShihheng/posts/pfbid0LpJj3ME7mXjUb9pafHYS4JAEV9wLDER6C6wXSSSHeyjTeBRP6formWGByzxDqgeKl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/nantou#nt-wen-healthcare"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-hsu-eldercare",
    "name": "徐欣瑩",
    "topic": "health",
    "text": "徐欣莹提出50岁以上带状疱疹疫苗每人最高补助5000元，并扩大长者假牙及口腔健康补助。",
    "admin": false,
    "url": "https://www.facebook.com/shesinging.tw/posts/1638523747636515",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-hsu-eldercare"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-hsu-jobs",
    "name": "徐欣瑩",
    "topic": "economy",
    "text": "徐欣莹提出串联桃竹竹苗产业及研发资源，并与竹科、工研院、学校和企业合作培育技术人才。",
    "admin": false,
    "url": "https://www.facebook.com/shesinging.tw/posts/1621984449290445",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-hsu-jobs"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-cheng-parks",
    "name": "鄭朝方",
    "topic": "water",
    "text": "郑朝方提出在全县规划树荫路线及遮荫据点，引进专业树木养护并推动木质材料再利用。",
    "admin": false,
    "url": "https://www.facebook.com/newchange13/posts/1658600918971100",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-cheng-parks"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-hsu-parks",
    "name": "徐欣瑩",
    "topic": "water",
    "text": "徐欣莹提出建设共融特色公园及15分钟绿地生活圈，串联社区绿地、公园和步道。",
    "admin": false,
    "url": "https://www.facebook.com/shesinging.tw/posts/1642126720609551",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-hsu-parks"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-cheng-culture",
    "name": "鄭朝方",
    "topic": "tourism",
    "text": "郑朝方提出活化历史建筑，扩展乡镇艺文据点，并结合海岸、客庄、老街和山林发展文化观光。",
    "admin": false,
    "url": "https://www.facebook.com/newchange13/posts/1661723651992160",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-cheng-culture"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-hsu-culture",
    "name": "徐欣瑩",
    "topic": "tourism",
    "text": "徐欣莹提出在竹北兴建多功能展演中心，并结合绿地、公园及步道。",
    "admin": false,
    "url": "https://www.facebook.com/shesinging.tw/posts/1593800268775530",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-hsu-culture"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-cheng-roads",
    "name": "鄭朝方",
    "topic": "transport",
    "text": "郑朝方提出规划拓宽光武街，并在兼顾排水及防灾条件下研究跨越河道的施工方式。",
    "admin": false,
    "url": "https://www.facebook.com/newchange13/posts/1657996999031492",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-cheng-roads"
  },
  {
    "city": "hsinchu-county",
    "anchor": "hcn-hsu-roads",
    "name": "徐欣瑩",
    "topic": "transport",
    "text": "徐欣莹提出设立智慧交通治理中心，整合车流预测、事故侦测、号志及停车资讯。",
    "admin": false,
    "url": "https://www.facebook.com/shesinging.tw/posts/1613555060133384",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucounty#hcn-hsu-roads"
  },
  {
    "city": "yilan",
    "anchor": "yl-wu-bus",
    "name": "吳宗憲",
    "topic": "transport",
    "text": "吴宗宪主张将宜兰纳入北北基桃1200元交通月票范围。",
    "admin": false,
    "url": "https://www.facebook.com/jameswu88/posts/pfbid02tEGGRSJoiZ1V92K2FbtyGHk9iTAL7UajiDHTvu83icVR8iK6P2N1Jj5JEAZTTA7Rl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-wu-bus"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-bus",
    "name": "林國漳",
    "topic": "transport",
    "text": "林国漳提出补贴通勤月票：城际票补贴300元、县内票补贴250元。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid032wvEzNe9aMeb5UovjDEdPKg7bXoQjnRKTKKXVFLdqi9KewbnaDUv2hMNtof9Egbcl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-bus"
  },
  {
    "city": "yilan",
    "anchor": "yl-wu-jobs",
    "name": "吳宗憲",
    "topic": "economy",
    "text": "吴宗宪提出以宜兰科技园区为基础，争取低污染、高附加价值的矽光子封测与数位产业。",
    "admin": false,
    "url": "https://www.facebook.com/jameswu88/posts/pfbid02h4nTdCHFMLrN9UF2EFUUQefUsmUKtLJ7QHQwefYxPuQt9y7zwGyodwJGvjmKS2LEl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-wu-jobs"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-jobs",
    "name": "林國漳",
    "topic": "economy",
    "text": "林国漳提出以苏澳为核心发展人工智能、无人船等智慧海洋产业。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid023avW6H7EzFqZm8gJaFpVtAKtKkZF7D8q7zxSpYWJ576DxePHbLKQ2zrQinDzs24sl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-jobs"
  },
  {
    "city": "yilan",
    "anchor": "yl-wu-school",
    "name": "吳宗憲",
    "topic": "education",
    "text": "吴宗宪提出定期召集学校、教师与家长讨论教育，推动降低师生比及减少行政报告。",
    "admin": false,
    "url": "https://www.facebook.com/jameswu88/posts/pfbid0D6dvxScze3RWgsMcq3zzLvLjhy7nHCRL94MZykNQiFD7mQFF81Rhmd9bNMcxYdBXl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-wu-school"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-school",
    "name": "林國漳",
    "topic": "education",
    "text": "林国漳提出检查全县学校照明，汰换旧灯，并以8年内增加一倍校园藏书为目标。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid0k4rM3uyt1ysyWJLRH6Tnk9wyJzzniErMvoCvvyTmdj5hnfPw1R8QcT6D5ihto288l",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-school"
  },
  {
    "city": "yilan",
    "anchor": "yl-wu-traffic-safety",
    "name": "吳宗憲",
    "topic": "transport",
    "text": "吴宗宪提出安排义交协助学校重点路口，并主动盘点通学交通热点及必要管制措施。",
    "admin": false,
    "url": "https://www.facebook.com/jameswu88/posts/pfbid02CdPbDbUTwGyjycdxGub4bjGW4TbJiCA1pt6dUj7a2oquWLiMzwojxp5N8qjqRd3Cl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-wu-traffic-safety"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-traffic-safety",
    "name": "林國漳",
    "topic": "transport",
    "text": "林国漳提出改善交通标志、号志和通学步道，扩大偏乡弹性接驳。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid0bzKaFDExjW1qb6NBntQjAhyZytzU9XyK42cLgvibf7xmNtKQageUZxb5zCq4UMuUl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-traffic-safety"
  },
  {
    "city": "yilan",
    "anchor": "yl-wu-housing",
    "name": "吳宗憲",
    "topic": "economy",
    "text": "吴宗宪提出先调查原住民族居住需求，再评估在原乡或交通便利地区设置社会住宅。",
    "admin": false,
    "url": "https://www.facebook.com/jameswu88/posts/pfbid02gVCMKak983UiGbgjJQiCaBkc7GRZXWMNdVmkoLnASCsof3XRjQsVboRG87vQ891Jl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-wu-housing"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-housing",
    "name": "林國漳",
    "topic": "economy",
    "text": "林国漳规划在县政中心兴建400户青年及婚育住宅，并提出青年住宅自治条例。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid032wvEzNe9aMeb5UovjDEdPKg7bXoQjnRKTKKXVFLdqi9KewbnaDUv2hMNtof9Egbcl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-housing"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-flood",
    "name": "林國漳",
    "topic": "water",
    "text": "林国漳提出上游植树保水、中游滞洪、下游增设抽水站，并以8年新增10座为目标。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid021ihMAfogpAcmB1iTHUb4DWV88kVN7GB3BKcGQmQbJJLKt11cgMa8TKvYPxthuX1nl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-flood"
  },
  {
    "city": "yilan",
    "anchor": "yl-wu-healthcare",
    "name": "吳宗憲",
    "topic": "health",
    "text": "吴宗宪提出在有急诊能力的医院周边设电子围栏，让救护车接近时联动沿途交通号志。",
    "admin": false,
    "url": "https://www.facebook.com/jameswu88/posts/pfbid0VD6bQT8Px5meFudGZTxUf85zRECijvBzQnAUhe1rEPXRSfsm4EXQiFaj2uub8QTWl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-wu-healthcare"
  },
  {
    "city": "yilan",
    "anchor": "yl-lin-healthcare",
    "name": "林國漳",
    "topic": "health",
    "text": "林国漳提出补助0至6岁儿童挂号费：一般门诊100元、急诊200元。",
    "admin": false,
    "url": "https://www.facebook.com/linkuochang.yilan/posts/pfbid0cqNjhU3Y9T6nrUJgU5fBuJNyeiKzfGSFaDYpNDfDutaT8jRfJ3ozX2V8LeqVTT1nl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/yilan#yl-lin-healthcare"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-tsai-jobs",
    "name": "蔡易餘",
    "topic": "economy",
    "text": "蔡易余提出设置青年留嘉服务窗口与职涯地图，支持就业、创业及产业接班。",
    "admin": false,
    "url": "https://www.facebook.com/chiayionefish/posts/1634924788003195",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-tsai-jobs"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-wu-jobs",
    "name": "吳品叡",
    "topic": "economy",
    "text": "吴品叡提出8年50亿元青年创业融资及投资支持，提供最高500万元低利贷款并设孵化基地。",
    "admin": false,
    "url": "https://www.facebook.com/100063479239691/posts/1717709233688368",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-wu-jobs"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-tsai-school",
    "name": "蔡易餘",
    "topic": "education",
    "text": "蔡易余提出4年以100亿元改善校园，分阶段推动小学三年级起一人一平板。",
    "admin": false,
    "url": "https://www.facebook.com/chiayionefish/posts/1634924788003195",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-tsai-school"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-wu-school",
    "name": "吳品叡",
    "topic": "education",
    "text": "吴品叡提出成立AI教育中心与国际教育交流委员会，并改善老旧校舍及技职教育与产业衔接。",
    "admin": false,
    "url": "https://www.facebook.com/100063479239691/posts/1678351180957507",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-wu-school"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-tsai-housing",
    "name": "蔡易餘",
    "topic": "economy",
    "text": "蔡易余提出另行盘点社会住宅基地，并评估与托育、长照等公共设施共构。",
    "admin": false,
    "url": "https://www.facebook.com/chiayionefish/posts/1600203524808655",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-tsai-housing"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-wu-housing",
    "name": "吳品叡",
    "topic": "economy",
    "text": "吴品叡提出4年朝3000户社会住宅目标推进，并提供每月最高8000元租金支持。",
    "admin": false,
    "url": "https://www.facebook.com/100063479239691/posts/1743937791065512",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-wu-housing"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-tsai-agriculture",
    "name": "蔡易餘",
    "topic": "economy",
    "text": "蔡易余提出扩大植物医师巡回及远距咨询，并改善农业设施防灾与灾后复产支持。",
    "admin": false,
    "url": "https://www.facebook.com/chiayionefish/posts/1642660393896301",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-tsai-agriculture"
  },
  {
    "city": "chiayi-county",
    "anchor": "cyc-wu-agriculture",
    "name": "吳品叡",
    "topic": "economy",
    "text": "吴品叡提出整合农产生产、价格预警、冷链、加工及销售通路。",
    "admin": false,
    "url": "https://www.facebook.com/100063479239691/posts/1725230929602865",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicounty#cyc-wu-agriculture"
  },
  {
    "city": "changhua",
    "anchor": "ch-chen-bus",
    "name": "陳素月",
    "topic": "transport",
    "text": "陈素月提出优先盘点交通缺口地区，扩展幸福小黄接驳，服务就医和通学。",
    "admin": false,
    "url": "https://www.facebook.com/chengSayYes/posts/pfbid0KoYw6KBNJqi6uUQzbSehVyh4vbhL75Z8G3N34P3KkbWdLs6TDRdHUGKnXXKmCXKFl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chen-bus"
  },
  {
    "city": "changhua",
    "anchor": "ch-wei-bus",
    "name": "魏平政",
    "topic": "transport",
    "text": "魏平政提出整合中彰投客运、干线公交和乡镇接驳，并升级幸福小黄服务。",
    "admin": false,
    "url": "https://www.facebook.com/WeiPingCheng2026/posts/pfbid0TwntsaxgUqe3eZFoRhA45jDF8AaGbDsDeoCgUdN41ZsGLSTSXjZSW5yBXSUSmkf9l",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-wei-bus"
  },
  {
    "city": "changhua",
    "anchor": "ch-chiu-bus",
    "name": "邱建富",
    "topic": "transport",
    "text": "邱建富提出支持TPASS补贴、检讨公交路线班次，并推动台中捷运延伸彰化。",
    "admin": false,
    "url": "https://www.facebook.com/ChenfuChanghua/posts/pfbid02gLAAxaQBxZz68zT1aGn2nar2UhjSF4aKKAVMT2B3QU59tfdF7zHkaT85JM5Z56tfl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chiu-bus"
  },
  {
    "city": "changhua",
    "anchor": "ch-chen-jobs",
    "name": "陳素月",
    "topic": "economy",
    "text": "陈素月提出补贴青年创业贷款利息两年，并提供数位营销与品牌培训。",
    "admin": false,
    "url": "https://www.facebook.com/chengSayYes/posts/pfbid02DEJCpLrt6gTJk3KSHeYYhKnf7J22T4WyeQ77iXLNJXjoiSupGJdeT5UAtUKnj3ycl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chen-jobs"
  },
  {
    "city": "changhua",
    "anchor": "ch-wei-jobs",
    "name": "魏平政",
    "topic": "economy",
    "text": "魏平政提出建设AI智慧园区，争取先进封装与无人机产业，并设招商单一窗口。",
    "admin": false,
    "url": "https://www.facebook.com/WeiPingCheng2026/posts/pfbid0Yjw6ucKjJ3EAT7nqnixFzEusQrqEmmpvM5EpKgEvba4BqHwNG9svoiF3wigXrGnfl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-wei-jobs"
  },
  {
    "city": "changhua",
    "anchor": "ch-chiu-jobs",
    "name": "邱建富",
    "topic": "economy",
    "text": "邱建富提出3亿元青年基金，支持创业和青年返乡务农。",
    "admin": false,
    "url": "https://www.facebook.com/ChenfuChanghua/posts/pfbid02Wt9E3b97QDiGCtH8SSr5kL5LjHzy2iuBGmJ9aH1XzSmuReDey6XR2kNcUMYinQY8l",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chiu-jobs"
  },
  {
    "city": "changhua",
    "anchor": "ch-chen-school",
    "name": "陳素月",
    "topic": "education",
    "text": "陈素月提出扩大课后照顾、减轻学校行政负担，并规划校园保全与法律支持。",
    "admin": false,
    "url": "https://www.facebook.com/chengSayYes/posts/pfbid037yP7zWP4Vuk6jamuNnFsH8iCbXXa15jUYCjmN31W5xgrqBJzhekoroE7rC4ePdENl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chen-school"
  },
  {
    "city": "changhua",
    "anchor": "ch-wei-school",
    "name": "魏平政",
    "topic": "education",
    "text": "魏平政提出由县府全额补助家长承担的学生团体保险、教科书等代收费用。",
    "admin": false,
    "url": "https://www.facebook.com/WeiPingCheng2026/posts/pfbid02BefvPFCNZ4jpmczQM4DsFEe24cXWq9dK11gHbAXhFoPbGDfCeedZfh2yTseBkVPel",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-wei-school"
  },
  {
    "city": "changhua",
    "anchor": "ch-chiu-school",
    "name": "邱建富",
    "topic": "education",
    "text": "邱建富提出以行政数位化减轻教师负担，增加心理、社工及特殊教育支持人员。",
    "admin": false,
    "url": "https://www.facebook.com/ChenfuChanghua/posts/pfbid06zp8dyE8TtB58iZScNkcz5DxzsMJ6MNnFSXWc55Ykhi2j1twSjzkwmMXni32EZAwl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chiu-school"
  },
  {
    "city": "changhua",
    "anchor": "ch-chen-agriculture",
    "name": "陳素月",
    "topic": "economy",
    "text": "陈素月提出补助农民职业灾害保险、提高公粮运费补助，并建立农产冷链。",
    "admin": false,
    "url": "https://www.facebook.com/chengSayYes/posts/pfbid0AVBMYH7QtmYQak3zYRGCjuwrghLdMecwFBiaib8h3a6HnNEHigEU3rMnszxNFpipl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chen-agriculture"
  },
  {
    "city": "changhua",
    "anchor": "ch-chiu-agriculture",
    "name": "邱建富",
    "topic": "economy",
    "text": "邱建富提出推动台中区农业改良场正名，并发展智慧农业及农产品品牌。",
    "admin": false,
    "url": "https://www.facebook.com/ChenfuChanghua/posts/pfbid036vSePREpU6mDonWuvhyVSLLp2BybSzB2xbPrGTZV4p3Pq2it5gRS5ATpGXq3ysChl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/changhua#ch-chiu-agriculture"
  },
  {
    "city": "yunlin",
    "anchor": "yu-chang-eldercare",
    "name": "張嘉郡",
    "topic": "health",
    "text": "张嘉郡提出补助65岁以上长者健保费，结合远距健康管理发展居家医疗。",
    "admin": false,
    "url": "https://www.facebook.com/reel/4086454118323703/",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-chang-eldercare"
  },
  {
    "city": "yunlin",
    "anchor": "yu-liu-eldercare",
    "name": "劉建國",
    "topic": "health",
    "text": "刘建国提出为符合需求的65岁以上长者提供免费假牙与带状疱疹疫苗。",
    "admin": false,
    "url": "https://www.facebook.com/liucnko.fans/posts/pfbid0vSoHvznxT1nAiozQ8ECJ9tQ5yC7UtSfVjfgyMfhQRp1MZjHVnTaFudNb9WYszTT5l",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-liu-eldercare"
  },
  {
    "city": "yunlin",
    "anchor": "yu-chang-jobs",
    "name": "張嘉郡",
    "topic": "economy",
    "text": "张嘉郡提出以褒忠产业园区为核心规划大型整合科学园区，带动在地就业。",
    "admin": false,
    "url": "https://www.facebook.com/Sweet.Yunlin/posts/pfbid02Li5ckaJoRMJhf1Jjke5g4EqabPonkhTmj9XBGre8nQDzVwbVySQCdzCi1VfeoiuJl",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-chang-jobs"
  },
  {
    "city": "yunlin",
    "anchor": "yu-liu-jobs",
    "name": "劉建國",
    "topic": "economy",
    "text": "刘建国提出初次返乡并稳定在云林就业的青年，每月补助5000元、每人最高6万元。",
    "admin": false,
    "url": "https://www.facebook.com/liucnko.fans/posts/pfbid0264eHrzLeinZ3RuGznzYvuyiUSzcWF2UGz26ysrSkLFHm8PCXaY6mxK3o4zNx2TB2l",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-liu-jobs"
  },
  {
    "city": "yunlin",
    "anchor": "yu-chang-school",
    "name": "張嘉郡",
    "topic": "education",
    "text": "张嘉郡提出依国中教育会考与作文成绩提供6万至12万元留乡升学奖学金。",
    "admin": false,
    "url": "https://www.facebook.com/Sweet.Yunlin/posts/pfbid0Vu8pFnRpPG3hatk2aGWKBL7jqeUDWghwDSWNeRcy6YZ8axPGeJeYoJcvRAVEeLx5l",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-chang-school"
  },
  {
    "city": "yunlin",
    "anchor": "yu-liu-school",
    "name": "劉建國",
    "topic": "education",
    "text": "刘建国提出精简学校重复表单，利用人工智能辅助文书并逐步增聘专职行政人力。",
    "admin": false,
    "url": "https://www.facebook.com/liucnko.fans/posts/pfbid02dZ9uyzmaU4ya1vSj8qBvH3QKZaVok4ns83kurXqutny97jpyT8LSwJLkjq5GmzEl",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-liu-school"
  },
  {
    "city": "yunlin",
    "anchor": "yu-liu-housing",
    "name": "劉建國",
    "topic": "economy",
    "text": "刘建国提出符合资格的就业青年租屋或分担家庭自住房贷，可获每月3000元补贴，最长3年。",
    "admin": false,
    "url": "https://www.facebook.com/liucnko.fans/posts/pfbid0264eHrzLeinZ3RuGznzYvuyiUSzcWF2UGz26ysrSkLFHm8PCXaY6mxK3o4zNx2TB2l",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-liu-housing"
  },
  {
    "city": "yunlin",
    "anchor": "yu-chang-flood",
    "name": "張嘉郡",
    "topic": "water",
    "text": "张嘉郡提出改善乡镇排水、升级抽水设施与沿海防洪，并结合灾害监测预警。",
    "admin": false,
    "url": "https://www.facebook.com/Sweet.Yunlin/videos/1553150626868212/",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-chang-flood"
  },
  {
    "city": "yunlin",
    "anchor": "yu-chang-agriculture",
    "name": "張嘉郡",
    "topic": "economy",
    "text": "张嘉郡提出导入智慧农业技术，整合农产生产、加工和销售资讯。",
    "admin": false,
    "url": "https://www.facebook.com/Sweet.Yunlin/posts/pfbid02Li5ckaJoRMJhf1Jjke5g4EqabPonkhTmj9XBGre8nQDzVwbVySQCdzCi1VfeoiuJl",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-chang-agriculture"
  },
  {
    "city": "yunlin",
    "anchor": "yu-liu-agriculture",
    "name": "劉建國",
    "topic": "economy",
    "text": "刘建国提出AI农业双技园区，结合智慧农机、冷链、加工及外销。",
    "admin": false,
    "url": "https://www.facebook.com/liucnko.fans/posts/pfbid023krwMxRqK1jhaEZRvpG7t5iteAHsuRcTrNZWQFA3YbvMfgpVXAxAq2RER2nv1uiJl",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-liu-agriculture"
  },
  {
    "city": "yunlin",
    "anchor": "yu-wu-healthcare",
    "name": "吳炳輝",
    "topic": "health",
    "text": "吴炳辉提出扩大山地与沿海偏乡的远距医疗、医消联防和长青食堂服务。",
    "admin": false,
    "url": "https://www.facebook.com/wu.bing.hui.568221/posts/pfbid0RYKCVqrf3nWDmDJxgyRQkWwBhcXKjNsNKpSjcMjfHms8wKdpYTomC8NRnVtwJNVJl",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-wu-healthcare"
  },
  {
    "city": "yunlin",
    "anchor": "yu-chang-healthcare",
    "name": "張嘉郡",
    "topic": "health",
    "text": "张嘉郡提出与大学及在地医疗团队合作，将学童健康评估和健康促进引入校园。",
    "admin": false,
    "url": "https://www.facebook.com/Sweet.Yunlin/posts/pfbid0Vu8pFnRpPG3hatk2aGWKBL7jqeUDWghwDSWNeRcy6YZ8axPGeJeYoJcvRAVEeLx5l",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-chang-healthcare"
  },
  {
    "city": "yunlin",
    "anchor": "yu-liu-healthcare",
    "name": "劉建國",
    "topic": "health",
    "text": "刘建国提出0至6岁儿童就医免部分负担，并免费接种肠病毒A71型疫苗。",
    "admin": false,
    "url": "https://www.facebook.com/liucnko.fans/posts/pfbid03D5kSChaazdWXnsjYnyAMDxCx7bDEdzMxTmBRZk9c8tKbWi7stpR7a4VwqxHBf75l",
    "cut": "2026-10-24",
    "database": "https://blindvote.app/sources/yunlin#yu-liu-healthcare"
  },
  {
    "city": "pingtung",
    "anchor": "pt-chou-school",
    "name": "周春米",
    "topic": "education",
    "text": "屏东县府表示将继续推动高中职、大专院校合作，衔接学习、升学和就业。",
    "admin": true,
    "url": "https://www.facebook.com/RiceChouChunMi/posts/1665104198573165",
    "cut": "2026-10-13",
    "database": "https://blindvote.app/sources/pingtung#pt-chou-school"
  },
  {
    "city": "pingtung",
    "anchor": "pt-su-school",
    "name": "蘇清泉",
    "topic": "education",
    "text": "苏清泉提出幼儿园至高中学生，无论学校公私立均享相同营养午餐补助。",
    "admin": false,
    "url": "https://www.facebook.com/ptdrsu/posts/1629389771887074",
    "cut": "2026-10-13",
    "database": "https://blindvote.app/sources/pingtung#pt-su-school"
  },
  {
    "city": "pingtung",
    "anchor": "pt-chou-flood",
    "name": "周春米",
    "topic": "water",
    "text": "屏东县府规划更新塭仔、羌园等沿海老旧抽水站，预计2027年汛期前完成。",
    "admin": true,
    "url": "https://www.pthg.gov.tw/News_Content.aspx?n=EC690F93E81FF22D&sms=90586F8A7E5F4397&s=4DD989635FE87DDC",
    "cut": "2026-10-13",
    "database": "https://blindvote.app/sources/pingtung#pt-chou-flood"
  },
  {
    "city": "pingtung",
    "anchor": "pt-chou-healthcare",
    "name": "周春米",
    "topic": "health",
    "text": "屏东县府规划补助65岁以上长者及55岁以上原住民健保费，不排富，每月最高826元。",
    "admin": true,
    "url": "https://www.facebook.com/RiceChouChunMi/posts/1650076136742638",
    "cut": "2026-10-13",
    "database": "https://blindvote.app/sources/pingtung#pt-chou-healthcare"
  },
  {
    "city": "pingtung",
    "anchor": "pt-su-healthcare",
    "name": "蘇清泉",
    "topic": "health",
    "text": "苏清泉主张长者健保费补助不排富，并取消设籍满一年的限制。",
    "admin": false,
    "url": "https://www.facebook.com/ptdrsu/posts/1610337030459015",
    "cut": "2026-10-13",
    "database": "https://blindvote.app/sources/pingtung#pt-su-healthcare"
  },
  {
    "city": "hualien",
    "anchor": "hl-yu-eldercare",
    "name": "游淑貞",
    "topic": "health",
    "text": "游淑贞提出优化敬老爱心计程车及偏乡免费接驳，方便长者就医和参与社区活动。",
    "admin": false,
    "url": "https://www.facebook.com/CandyHualien/posts/pfbid0Hoa17r1cYH1gUNqwTuH1K9sHr8uw84ceefFXDpr7W1992c17LfVSoheQTcauCA8Ll",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-yu-eldercare"
  },
  {
    "city": "hualien",
    "anchor": "hl-wei-bus",
    "name": "魏嘉賢",
    "topic": "transport",
    "text": "魏嘉贤提出规划15分钟一班的市区循环公交，并协商与宜兰、台东跨县使用敬老卡。",
    "admin": false,
    "url": "https://www.facebook.com/sunwei038563787/posts/pfbid02XuLMXSCxaVaA6LZLY53NdL8ko2Zg6t2xMm5HT7fsqfP2DWnaM3yH2NZ3dHtW53yvl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-wei-bus"
  },
  {
    "city": "hualien",
    "anchor": "hl-yu-jobs",
    "name": "游淑貞",
    "topic": "economy",
    "text": "游淑贞提出提供青年创业贷款、辅导与空间，并吸引影像和数位创作团队进驻。",
    "admin": false,
    "url": "https://www.facebook.com/CandyHualien/posts/pfbid02GhgSi4bJ1eDuayekq4THbTb1TfPyBGWBEAnifdqTctZTk9hNkkXUZHZe5WY7Sw8Dl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-yu-jobs"
  },
  {
    "city": "hualien",
    "anchor": "hl-chang-jobs",
    "name": "張峻",
    "topic": "economy",
    "text": "张峻提出由投资专案办公室盘点合法空域及实证场地，先做防灾、农业示范和人才培训。",
    "admin": false,
    "url": "https://www.facebook.com/100064292910692/posts/pfbid0xus5QVVicYA176mjizMXNNUgimWhXARkD9CcNXFDuT9WGWVrk1Xz4qaCMbTJNtddl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-chang-jobs"
  },
  {
    "city": "hualien",
    "anchor": "hl-yu-school",
    "name": "游淑貞",
    "topic": "education",
    "text": "游淑贞提出减少重复行政表单，导入数字系统并增加行政与专业人员支持教师。",
    "admin": false,
    "url": "https://www.facebook.com/CandyHualien/posts/pfbid0EHZmUVoiBh344b276wMwdeqtyCi2rmefwH4iJCnLzbvJsooBZagxQFCs4JVPh21il",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-yu-school"
  },
  {
    "city": "hualien",
    "anchor": "hl-chang-school",
    "name": "張峻",
    "topic": "education",
    "text": "张峻提出改善偏乡教师宿舍与留任支持，并推动学区共享、课后照顾及数字学习。",
    "admin": false,
    "url": "https://www.facebook.com/100064292910692/posts/pfbid0yBNXmGfiShiN2yjqeF2igTaasYEW4j3qRQFBaWvdbfauLCkeAZP7ue9goVipfGFvl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-chang-school"
  },
  {
    "city": "hualien",
    "anchor": "hl-wei-school",
    "name": "魏嘉賢",
    "topic": "education",
    "text": "魏嘉贤提出为国小至高中学生每年提供1.2万元课后学习额度。",
    "admin": false,
    "url": "https://www.facebook.com/sunwei038563787/posts/1683793523108585",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-wei-school"
  },
  {
    "city": "hualien",
    "anchor": "hl-yu-flood",
    "name": "游淑貞",
    "topic": "water",
    "text": "游淑贞提出研议学校及偏乡据点的10天灾害备援，盘点粮食、饮水、能源和紧急供餐。",
    "admin": false,
    "url": "https://www.facebook.com/CandyHualien/posts/pfbid0iN78RSmrC4omX2FinGyWM8pX5KhiJ2FUHgwHzsr4yVDfYfBwewHH82aQBrh6M6uyl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-yu-flood"
  },
  {
    "city": "hualien",
    "anchor": "hl-chang-flood",
    "name": "張峻",
    "topic": "water",
    "text": "张峻提出整合水位、无人机与河川资料，建立专责防灾体系，公开紧急工程与重建进度。",
    "admin": false,
    "url": "https://www.facebook.com/100064292910692/posts/pfbid037fFeSs6UPX6fC9Z716zQasFFuDs1L6qsPeH2iz5xk1vBMJsqm7KoVQcgRHa4DQrFl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-chang-flood"
  },
  {
    "city": "hualien",
    "anchor": "hl-wei-flood",
    "name": "魏嘉賢",
    "topic": "water",
    "text": "魏嘉贤主张成立跨部门防灾专责单位，整合公私资源并加强灾前准备。",
    "admin": false,
    "url": "https://www.facebook.com/sunwei038563787/posts/1592822102205728",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-wei-flood"
  },
  {
    "city": "hualien",
    "anchor": "hl-yu-agriculture",
    "name": "游淑貞",
    "topic": "economy",
    "text": "游淑贞提出建立县级食材媒合平台，连接学校与农民，增加本地农产品进入校园。",
    "admin": false,
    "url": "https://www.facebook.com/CandyHualien/posts/pfbid0iN78RSmrC4omX2FinGyWM8pX5KhiJ2FUHgwHzsr4yVDfYfBwewHH82aQBrh6M6uyl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-yu-agriculture"
  },
  {
    "city": "hualien",
    "anchor": "hl-chang-healthcare",
    "name": "張峻",
    "topic": "health",
    "text": "张峻提出补助0至18岁健保自付保费，每人每月最高826元。",
    "admin": false,
    "url": "https://www.facebook.com/100064292910692/posts/pfbid02X5wHxF1fpupuq1LNCtfrqZFiyZu2p89MnvJSQQ3GtyBHHgqRqDDFqcphEoM9yNW6l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-chang-healthcare"
  },
  {
    "city": "hualien",
    "anchor": "hl-wei-healthcare",
    "name": "魏嘉賢",
    "topic": "health",
    "text": "魏嘉贤提出优化主要医院救护路线、推动救护车优先通行，并建立替代道路及偏乡后送机制。",
    "admin": false,
    "url": "https://www.facebook.com/sunwei038563787/posts/pfbid02XuLMXSCxaVaA6LZLY53NdL8ko2Zg6t2xMm5HT7fsqfP2DWnaM3yH2NZ3dHtW53yvl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-wei-healthcare"
  },
  {
    "city": "hualien",
    "anchor": "hl-yu-tourism",
    "name": "游淑貞",
    "topic": "tourism",
    "text": "游淑贞提出结合山林、海洋与当地农食发展疗愈观光，吸引较长时间停留。",
    "admin": false,
    "url": "https://www.facebook.com/CandyHualien/posts/pfbid0itghcC6k8nMXzkPmUTDXWxtAG6eKToJ94NKDeDkZGXbmwk5i4Ha2ZyKBraRXuhFGl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-yu-tourism"
  },
  {
    "city": "hualien",
    "anchor": "hl-chang-tourism",
    "name": "張峻",
    "topic": "tourism",
    "text": "张峻提出在秀林、万荣及卓溪结合高山运动和部落文化，拓展旅游选项。",
    "admin": false,
    "url": "https://www.facebook.com/100064292910692/posts/pfbid0mDfkkgxBbjjK8723KRH3cP2tDgWB5ix8zsWNLgzE2Sfk6DCT5EjHZuuJfxiJfPFel",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-chang-tourism"
  },
  {
    "city": "hualien",
    "anchor": "hl-wei-tourism",
    "name": "魏嘉賢",
    "topic": "tourism",
    "text": "魏嘉贤提出每位花莲居民每年3600元县内旅游额度，用于住宿及游程。",
    "admin": false,
    "url": "https://www.facebook.com/sunwei038563787/posts/1679056313582306",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-wei-tourism"
  },
  {
    "city": "hualien",
    "anchor": "hl-wei-island-transport",
    "name": "魏嘉賢",
    "topic": "exchange",
    "text": "魏嘉贤提出从与那国开始推动花莲与日本离岛的海空直航。",
    "admin": false,
    "url": "https://www.facebook.com/sunwei038563787/posts/pfbid0SVuJM11wb57ndYVz1yYWB9RnV95cvARgVhnPGW9hbctsPWMZ64GenLVgyKXKYUGMl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/hualien#hl-wei-island-transport"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-kao-eldercare",
    "name": "高虹安",
    "topic": "health",
    "text": "新竹市府在社区据点导入健康量测设备，并规划逐步扩大至全市88处。",
    "admin": true,
    "url": "https://www.facebook.com/DrAnnKao/posts/pfbid0gGtCwif7YNxw2kkqogCoKmxRFzSxinCgA9Jbcmp1b4uwwFqXD5rKWKP79T8GgvWFl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-kao-eldercare"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-ho-eldercare",
    "name": "何志勇",
    "topic": "health",
    "text": "何志勇主张放宽敬老爱心卡用途，让长者自行选择交通、医疗、购物及运动支出。",
    "admin": false,
    "url": "https://www.facebook.com/HoChihyung/posts/pfbid0ecT7vmE7noWCBL7Aku8jKJLYithAnrS8gSWy2h1KFzie8akgq8EEWjwT2L17sFEjl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-ho-eldercare"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-kao-bus",
    "name": "高虹安",
    "topic": "transport",
    "text": "高虹安提出2028年市区公交全面电动化，结合中央补助与公共充电设施。",
    "admin": true,
    "url": "https://www.facebook.com/DrAnnKao/posts/pfbid0dXmJCS1UucrsajmFjj2Wc2DyVhoMz1Ew6Rk6ExNDTUzP7ziszUtGRvRKMdGKDoawl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-kao-bus"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-chuang-bus",
    "name": "莊競程",
    "topic": "transport",
    "text": "庄竞程提出以短区间、高频率通学巴士连接学府路学校与后火车站，并逐步扩展路网。",
    "admin": false,
    "url": "https://www.facebook.com/Power3C/posts/1560772805420726",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-chuang-bus"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-ho-bus",
    "name": "何志勇",
    "topic": "transport",
    "text": "何志勇提出在主要干道设置公交专用或优先道，并用智慧号志调整车流。",
    "admin": false,
    "url": "https://www.facebook.com/HoChihyung/posts/pfbid02jq56D8hSsX3LXn4bvkggji4mQ53s9AZz8ykc1sbwnVmtPcV4GRouDaifdPD8ATddl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-ho-bus"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-chuang-jobs",
    "name": "莊競程",
    "topic": "economy",
    "text": "庄竞程提出青年技能账户、分阶段创业资金与在地导师支持。",
    "admin": false,
    "url": "https://www.facebook.com/Power3C/posts/1623142995850373",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-chuang-jobs"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-ho-jobs",
    "name": "何志勇",
    "topic": "economy",
    "text": "何志勇提出活化闲置校舍和公有房舍，作为创业孵化及共同工作空间。",
    "admin": false,
    "url": "https://www.facebook.com/HoChihyung/posts/pfbid0Tb2Tc9FgBteFh7q2e8BWaK9wncG9E7uGSWmBF9iJPX7FoEa3MbSsZ7GVpEbfZD9cl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-ho-jobs"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-chuang-school",
    "name": "莊競程",
    "topic": "education",
    "text": "庄竞程提出初任教师前三年每月5000元租屋津贴，以及依服务年资发放留任奖金。",
    "admin": false,
    "url": "https://www.facebook.com/Power3C/posts/1572508874247119",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-chuang-school"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-ho-school",
    "name": "何志勇",
    "topic": "education",
    "text": "何志勇提出减少教师行政负担，增加学校心理辅导人力并推动学生心理健康假。",
    "admin": false,
    "url": "https://www.facebook.com/HoChihyung/posts/pfbid02kvjvPHi47TgfsQR5v9fuXNkUo8Nb6cutQJHEDEG3JE9TPRxht8i25DyEcEutB4mSl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-ho-school"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-chuang-housing",
    "name": "莊競程",
    "topic": "economy",
    "text": "庄竞程提出增加可负担社会住宅，并结合托育、公共空间和社区服务。",
    "admin": false,
    "url": "https://www.facebook.com/Power3C/posts/1623142995850373",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-chuang-housing"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-ho-housing",
    "name": "何志勇",
    "topic": "economy",
    "text": "何志勇提出放宽青年租屋补助门槛，简化在新竹就学或就业者的申请。",
    "admin": false,
    "url": "https://www.facebook.com/HoChihyung/posts/pfbid0ecT7vmE7noWCBL7Aku8jKJLYithAnrS8gSWy2h1KFzie8akgq8EEWjwT2L17sFEjl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-ho-housing"
  },
  {
    "city": "hsinchu-city",
    "anchor": "hcc-ho-flood",
    "name": "何志勇",
    "topic": "water",
    "text": "何志勇提出改善道路排水、检查地下道抽水设备并设置备援电源。",
    "admin": false,
    "url": "https://www.facebook.com/HoChihyung/posts/pfbid0HNEUJpuuA6gxt3BdYwZjxfS21YhRaZwv2xe4stwmrrfk1HD7DXTgPQ5sXShjPmkTl",
    "cut": "2026-10-23",
    "database": "https://blindvote.app/sources/hsinchucity#hcc-ho-flood"
  },
  {
    "city": "taitung",
    "anchor": "tt-li-healthcare",
    "name": "李吳穎智",
    "topic": "health",
    "text": "李吴颖智提出依距离分级，全额补助偏乡就医计程车费，并依家庭所得和财产补助假牙。",
    "admin": false,
    "url": "https://www.facebook.com/groups/1241866853050917/posts/2111162872787973/",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-li-healthcare"
  },
  {
    "city": "taitung",
    "anchor": "tt-chen-flood",
    "name": "陳瑩",
    "topic": "water",
    "text": "陈莹提出建立分散式灾害备援，储备粮、水、电、通讯与医疗资源，并加强跨县协作。",
    "admin": false,
    "url": "https://www.facebook.com/11YIG/posts/pfbid02As8VT2Z3uWaKgSgeBFBQVhRZ3nWPt1ZXd4HX19fKkKphJuUwgQGCLmpnq9kamGdEl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-chen-flood"
  },
  {
    "city": "taitung",
    "anchor": "tt-wu-flood",
    "name": "吳秀華",
    "topic": "water",
    "text": "吴秀华提出在乡镇、部落建立自主防灾网，准备人员训练、避难场所、物资与紧急通讯。",
    "admin": false,
    "url": "https://www.facebook.com/100090624231494/posts/pfbid0KjjDFz89yTBXbw2jKcBZsspUZ5GA9fKVwiC3Ujns9yxz3vs1t9n97yXBU656NEh9l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-wu-flood"
  },
  {
    "city": "taitung",
    "anchor": "tt-chen-agriculture",
    "name": "陳瑩",
    "topic": "economy",
    "text": "陈莹提出为水稻和释迦产区建立防风林服务队，协助设置复层防风带。",
    "admin": false,
    "url": "https://www.facebook.com/11YIG/posts/pfbid02K63tA5Ur6Y5XF5vY9fbMfjw4NyRj2qyUySY99KKtTY4T6AAmREqkFcRXQMGJxCm9l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-chen-agriculture"
  },
  {
    "city": "taitung",
    "anchor": "tt-wu-agriculture",
    "name": "吳秀華",
    "topic": "economy",
    "text": "吴秀华提出青年农民培训和智慧农业教育，协助农民使用设备与数据。",
    "admin": false,
    "url": "https://www.facebook.com/100090624231494/posts/pfbid0PBN9tw4NiHQNXbmh6PoX5heizGMmwDCUzc9WSss1NuafzUkQjdxn98XHAryqA1Kzl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-wu-agriculture"
  },
  {
    "city": "taitung",
    "anchor": "tt-chen-healthcare",
    "name": "陳瑩",
    "topic": "health",
    "text": "陈莹提出加强外地就医的后送、交通及住宿补助，并提供病友与家属咨询。",
    "admin": false,
    "url": "https://www.facebook.com/11YIG/posts/pfbid0DXmkyEA5ubNjYXibuN3CKkXT1pzHR5SPXGYw3SjGPZFLdQdFeUuDP6nPUNaaUwwHl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-chen-healthcare"
  },
  {
    "city": "taitung",
    "anchor": "tt-chen-island-transport",
    "name": "陳瑩",
    "topic": "transport",
    "text": "陈莹提出争取增加航班、调整早班机，并改善铁路与候车设施。",
    "admin": false,
    "url": "https://www.facebook.com/11YIG/posts/pfbid0DeS9KbCLYJ6Y1n56y4sDZ8ihCmSXsjtJJzLkkrvaDxzGFfajAhgPumgJGjfSiQZrl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-chen-island-transport"
  },
  {
    "city": "taitung",
    "anchor": "tt-wu-island-transport",
    "name": "吳秀華",
    "topic": "transport",
    "text": "吴秀华提出争取延长离岛机场跑道、改善港口动线，并增加热门时段铁路直达班次。",
    "admin": false,
    "url": "https://www.facebook.com/100090624231494/posts/pfbid0u46L3E3WPH3tjjg89WbgUmswR8oyEGnJVzUS5NpNom3wVChBpT3Ncj8oh2e48ozal",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/taitung#tt-wu-island-transport"
  },
  {
    "city": "kinmen",
    "anchor": "km-liang-childcare",
    "name": "梁文韜",
    "topic": "childcare",
    "text": "梁文韬提出减少托育候补，并在金城、金湖试办夜间、假日及紧急临托。",
    "admin": false,
    "url": "https://to-to.win/wp-children.html",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-liang-childcare"
  },
  {
    "city": "kinmen",
    "anchor": "km-liang-bus",
    "name": "梁文韜",
    "topic": "transport",
    "text": "梁文韬提出整合公交、桥梁接驳及共享电动车的旅游交通票券。",
    "admin": false,
    "url": "https://to-to.win/wp-transport.html",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-liang-bus"
  },
  {
    "city": "kinmen",
    "anchor": "km-hung-jobs",
    "name": "洪和成",
    "topic": "labor",
    "text": "洪和成提出在金门开办大客车驾驶训练，降低居民赴台受训成本。",
    "admin": false,
    "url": "https://www.facebook.com/honghercheng/posts/pfbid0wxc19BErhctSLwSF8nmpP3zd2g1AuarRSNLhLMhqRwwPShMPvAQVDtztQtc2Evxbl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-hung-jobs"
  },
  {
    "city": "kinmen",
    "anchor": "km-li-jobs",
    "name": "李文良",
    "topic": "economy",
    "text": "李文良提出由县府媒合高职毕业青年与当地企业，支持培训与实习。",
    "admin": false,
    "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0BYZAgBGkduLCb58JjXCqVRk5DQjBZY5r261T85e2DNGg6UdieFTYLweu39hRQkBJl&id=61588799889987",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-li-jobs"
  },
  {
    "city": "kinmen",
    "anchor": "km-chen-school",
    "name": "陳玉珍",
    "topic": "education",
    "text": "陈玉珍提出减少教师行政表单、建立法律支持，并检讨工时、加班及课后照顾制度。",
    "admin": false,
    "url": "https://www.facebook.com/KinmenMyLove/posts/pfbid0gCxBARVE7xPtFuL81iTT8p6AiDAc3LST23aAzH1vyTL27Xe9wbjQrydkfePGkHhjl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-chen-school"
  },
  {
    "city": "kinmen",
    "anchor": "km-huang-school",
    "name": "黃世團",
    "topic": "education",
    "text": "黄世团提出以跨校整合、混龄开班及社区据点，维持人数不足学校的课后照顾。",
    "admin": false,
    "url": "https://www.facebook.com/huang.shi.tuan/posts/pfbid05GtMNXeM1NKyj3DXhpTbdrEHudVksLkSdxGC7BoGaXyB9wdcYhXM3LPCxDPaWhkRl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-huang-school"
  },
  {
    "city": "kinmen",
    "anchor": "km-liang-school",
    "name": "梁文韜",
    "topic": "education",
    "text": "梁文韬提出从艺术及非考试科目试办跨年级主题教学。",
    "admin": false,
    "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02TjS8cXUAEtASyTc5AqFV2W6fGHLTMB1csYwZYyuSVzhVDNHd9Zw94jGPXcQznoJFl&id=61594179176285",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-liang-school"
  },
  {
    "city": "kinmen",
    "anchor": "km-hung-housing",
    "name": "洪和成",
    "topic": "economy",
    "text": "洪和成提出规划青年自建住宅与优惠贷款，并设置一定年限的处分限制。",
    "admin": false,
    "url": "https://www.facebook.com/honghercheng/posts/pfbid02QMcuoub9qJm13eZaEp971ocEQREifU5VLyir3Mc9pAZjh1Dv45ytEeHEUsQp7YVal",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-hung-housing"
  },
  {
    "city": "kinmen",
    "anchor": "km-liang-housing",
    "name": "梁文韜",
    "topic": "economy",
    "text": "梁文韬提出面向符合设籍年限及无房条件青年的低租金住宅。",
    "admin": false,
    "url": "https://to-to.win/wp-land.html",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-liang-housing"
  },
  {
    "city": "kinmen",
    "anchor": "km-chen-healthcare",
    "name": "陳玉珍",
    "topic": "health",
    "text": "陈玉珍提出增加医护住宿空间，并争取中央补助离岛医事人员住宿。",
    "admin": false,
    "url": "https://www.facebook.com/KinmenMyLove/posts/pfbid0ra9sW7JYo7yAEMFmg39qJVpLTG1jSPiLNQMQ6YCAMWmnifm8i3RBsZKvq55TWwiJl",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-chen-healthcare"
  },
  {
    "city": "kinmen",
    "anchor": "km-liang-healthcare",
    "name": "梁文韜",
    "topic": "health",
    "text": "梁文韬提出由固定医师组成专科责任团队，共享治疗计划和追踪名单。",
    "admin": false,
    "url": "https://to-to.win/wp-medical.html",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-liang-healthcare"
  },
  {
    "city": "kinmen",
    "anchor": "km-chen-island-transport",
    "name": "陳玉珍",
    "topic": "transport",
    "text": "陈玉珍提出推动兴建台金客轮，称若中央未能提供，将由县府推动。",
    "admin": false,
    "url": "https://www.facebook.com/reel/2194764348085885/",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-chen-island-transport"
  },
  {
    "city": "kinmen",
    "anchor": "km-li-island-transport",
    "name": "李文良",
    "topic": "transport",
    "text": "李文良提出短期争取航班扩容及居民机位，中长期建议中央评估增加两岸直航。",
    "admin": false,
    "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0o8dK7qQJfTf2giPb67vWN2o2XUBK8bbsF4TznX7NXDcR5jbpfBpg4cUER3XfMydvl&id=61588799889987",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-li-island-transport"
  },
  {
    "city": "kinmen",
    "anchor": "km-liang-island-transport",
    "name": "梁文韜",
    "topic": "transport",
    "text": "梁文韬提出在雾季及连续假期，为金门居民保留台金航班部分座位。",
    "admin": false,
    "url": "https://to-to.win/wp-transport.html",
    "cut": "2026-10-19",
    "database": "https://blindvote.app/sources/kinmen#km-liang-island-transport"
  },
  {
    "city": "penghu",
    "anchor": "ph-chenzc-eldercare",
    "name": "陳振中",
    "topic": "health",
    "text": "陈振中提出依法聘雇外籍看护的家庭，每户每月补助1万元。",
    "admin": false,
    "url": "https://www.facebook.com/chen.zhen.zhong.67701/posts/pfbid0ctJftv8nUUXCyX1Dtuc7GuacX4PE8Cv2SxPAi8sCn47m8hNH7tkQi8gPpBgobqH9l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-chenzc-eldercare"
  },
  {
    "city": "penghu",
    "anchor": "ph-chenzc-bus",
    "name": "陳振中",
    "topic": "transport",
    "text": "陈振中提出按村里实际需求调整公交路线与班次，改善通学及就医接驳。",
    "admin": false,
    "url": "https://www.facebook.com/chen.zhen.zhong.67701/posts/pfbid0FFGChrimensCsqXLZd3oS3xcKtGk2vvfBgXNNALkb1FG2xbFTpeC3Txj2qvKN9Bjl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-chenzc-bus"
  },
  {
    "city": "penghu",
    "anchor": "ph-chenzc-jobs",
    "name": "陳振中",
    "topic": "economy",
    "text": "陈振中提出发展数字游牧、活化闲置公共空间，并结合青年居住和创业。",
    "admin": false,
    "url": "https://www.facebook.com/chen.zhen.zhong.67701/posts/pfbid0eAMFSKqyume22AJij69VBLDSZ2HV9oRocwPtLU3tDpYi47Vb1AmtvDs5mdHjStq6l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-chenzc-jobs"
  },
  {
    "city": "penghu",
    "anchor": "ph-hsu-jobs",
    "name": "許智富",
    "topic": "labor",
    "text": "许智富提出补助符合资格居民的技术士训练和考试费用，金额依证照等级区分。",
    "admin": false,
    "url": "https://www.facebook.com/xu.zhi.fu.408382/posts/pfbid0EP2UcdYSbpRwoh1gD97wjAob5NUsMVJDAVjarhi1Br8EaJmGVrmVnEbJimTNLfVMl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-hsu-jobs"
  },
  {
    "city": "penghu",
    "anchor": "ph-yeh-jobs",
    "name": "葉竹林",
    "topic": "economy",
    "text": "叶竹林提出远距工作中心、数字能力培训和青年接案媒合。",
    "admin": false,
    "url": "https://www.facebook.com/YEHCHULINinPENGHU/posts/pfbid0KnTZq3zXBbPVh6Tbb6KoYtga3bVzQQBHrhFZnFM42PcqWWSYAqnuftJHcGuMKzQdl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-yeh-jobs"
  },
  {
    "city": "penghu",
    "anchor": "ph-wu-school",
    "name": "吳淑瑾",
    "topic": "education",
    "text": "吴淑瑾提出减少重复行政工作，合理安排教师行政工时，并提供数字工具支持。",
    "admin": false,
    "url": "https://www.facebook.com/wushuchin.penghu/posts/pfbid0qaSKRcYts4KVFZ8D3qSU4D6KuzoN1ukvV8Sb5UaP79xtNWPQokkjD4haaFTFCErl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-wu-school"
  },
  {
    "city": "penghu",
    "anchor": "ph-chenzc-school",
    "name": "陳振中",
    "topic": "education",
    "text": "陈振中提出由县府整合专业人力，协助学校处理工程、财务与劳务招标。",
    "admin": false,
    "url": "https://www.facebook.com/chen.zhen.zhong.67701/posts/pfbid024P1Z53FEbm6tTDvAT8Uonk2bQDrGs8AaQ1122tycRvamPgwwh1pAhfxyZxzzqnpUl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-chenzc-school"
  },
  {
    "city": "penghu",
    "anchor": "ph-hsu-school",
    "name": "許智富",
    "topic": "education",
    "text": "许智富提出由县府专责团队处理100万元以上学校工程的发包与管理。",
    "admin": false,
    "url": "https://www.facebook.com/xu.zhi.fu.408382/posts/pfbid022Fbu4nkohhPVdHGQWRJBLLy6yVPyxHtMA7d2zskVPtaaL8ED6pxLDxgfXbG4H3gHl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-hsu-school"
  },
  {
    "city": "penghu",
    "anchor": "ph-hsu-waste",
    "name": "許智富",
    "topic": "water",
    "text": "许智富提出以民间参与方式兴建垃圾焚化设施，结合资源回收和能源再生。",
    "admin": false,
    "url": "https://www.facebook.com/xu.zhi.fu.408382/posts/pfbid02fXCUMRs6mDrQRSwfvrvDz9w2YAxkMdCEP5z8JkVZCkcM3VKFREiPM7JphuvtkXvEl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-hsu-waste"
  },
  {
    "city": "penghu",
    "anchor": "ph-yeh-waste",
    "name": "葉竹林",
    "topic": "water",
    "text": "叶竹林提出在环境安全及地方沟通前提下，推动兴建垃圾焚化设施。",
    "admin": false,
    "url": "https://www.facebook.com/YEHCHULINinPENGHU/posts/pfbid0b7YBEyHm3Mr3dZJur6sxBsjFyrWgtDyRrYN2w1TJ4b7nLkF1CwatyEM4n76ZkhW5l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-yeh-waste"
  },
  {
    "city": "penghu",
    "anchor": "ph-wu-healthcare",
    "name": "吳淑瑾",
    "topic": "health",
    "text": "吴淑瑾提出补助设籍澎湖50岁以上居民接种带状疱疹疫苗的第二剂，须符合医疗评估条件。",
    "admin": false,
    "url": "https://www.facebook.com/wushuchin.penghu/posts/pfbid02pXzCQN992VEAb8jH2GonaRtLiJqDrWaWh3kGtDpa4n4UNjX3Ep3zkabBUyReLkCkl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-wu-healthcare"
  },
  {
    "city": "penghu",
    "anchor": "ph-chenzc-healthcare",
    "name": "陳振中",
    "topic": "health",
    "text": "陈振中提出服务满三年的医护人员每月5000元留任津贴。",
    "admin": false,
    "url": "https://www.facebook.com/chen.zhen.zhong.67701/posts/pfbid0tCBc6c8W7ubyr5iBMmXGqmn3iCTrgawEvRhqSwtdk9e4Gy4UqBdZA8YxZixoUYMml",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-chenzc-healthcare"
  },
  {
    "city": "penghu",
    "anchor": "ph-yeh-healthcare",
    "name": "葉竹林",
    "topic": "health",
    "text": "叶竹林提出在西屿外垵设置紧急救护站，并加强离岛急救备援。",
    "admin": false,
    "url": "https://www.facebook.com/YEHCHULINinPENGHU/posts/pfbid023Anfvix9fBsVCWmYpQccqm8ZZqpE3RMQdPnygi2pQXx7VU83XZUAtZ8rB3tgns9Sl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-yeh-healthcare"
  },
  {
    "city": "penghu",
    "anchor": "ph-wu-island-transport",
    "name": "吳淑瑾",
    "topic": "transport",
    "text": "吴淑瑾提出将儿童优惠机票适用年龄从12岁延长至18岁。",
    "admin": false,
    "url": "https://www.facebook.com/wushuchin.penghu/posts/pfbid04SweKZKHTKZczeCaMDnFZKCKx6dRE1Gvwx8hbpj649KaNSYWBT7b6LgDf4kxqYual",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-wu-island-transport"
  },
  {
    "city": "penghu",
    "anchor": "ph-chenzc-island-transport",
    "name": "陳振中",
    "topic": "transport",
    "text": "陈振中提出提高居民机船票补贴，学生、长者和身障者享更高优惠，并争取中央分担。",
    "admin": false,
    "url": "https://www.facebook.com/chen.zhen.zhong.67701/posts/pfbid027k4Qm1Cifh7UQVJ5b9jjo8SvSECU1EM9z9ukquGBKuEoWgGwXzRd2V2wgripoiSnl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-chenzc-island-transport"
  },
  {
    "city": "penghu",
    "anchor": "ph-hsu-island-transport",
    "name": "許智富",
    "topic": "transport",
    "text": "许智富提出导入交通船智慧售票，结合身份验证及行动支付。",
    "admin": false,
    "url": "https://www.facebook.com/xu.zhi.fu.408382/posts/pfbid0347HNUdfXV2z3B5BjHFv2boQkUvFpKdp9EM4Z7MgHAPsAFXi5mz3iTqyQeB14MQR7l",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-hsu-island-transport"
  },
  {
    "city": "penghu",
    "anchor": "ph-yeh-island-transport",
    "name": "葉竹林",
    "topic": "transport",
    "text": "叶竹林提出增加七美与马公船班，并推动西屿至马公海上交通。",
    "admin": false,
    "url": "https://www.facebook.com/yehchulin/posts/pfbid0DBtwJLo6wktE6L5Gb8axSNAB9P7tNdeu8be1pUon8rWghwpADBcWoxk9jTeVV9Dzl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/penghu#ph-yeh-island-transport"
  },
  {
    "city": "lienchiang",
    "anchor": "lc-wang-housing",
    "name": "王忠銘",
    "topic": "economy",
    "text": "连江县府规划南竿、北竿及莒光多处住宅，并推进东引住宅计划。",
    "admin": true,
    "url": "https://www.facebook.com/wang.zhong.ming.957663/posts/pfbid03voQfd1VDskX2NwnzhDsDL6csucnF5k7F8LUVoxuTMEMAJGujNG31UoBAkEjudGKl",
    "cut": "2026-10-18",
    "database": "https://blindvote.app/sources/lienchiang#lc-wang-housing"
  },
  {
    "city": "lienchiang",
    "anchor": "lc-wang-healthcare",
    "name": "王忠銘",
    "topic": "health",
    "text": "连江县府表示向中央争取在下一期直升机合约纳入备援和夜航能力。",
    "admin": true,
    "url": "https://www.matsu.gov.tw/chhtml/Detail/371030000A/25?mcid=113705",
    "cut": "2026-10-18",
    "database": "https://blindvote.app/sources/lienchiang#lc-wang-healthcare"
  },
  {
    "city": "lienchiang",
    "anchor": "lc-tsao-healthcare",
    "name": "曹爾元",
    "topic": "health",
    "text": "曹尔元提出重新评估争取连江县立医院改隶卫生福利部，以争取医疗人力与专科支持。",
    "admin": false,
    "url": "https://www.facebook.com/100003452332048/posts/pfbid0EpagC49hqkUQmwF73CKY98GnE9NG9EctH8W91VFwfvKTSHkVJneKuG4CkU9nAH7Gl",
    "cut": "2026-10-18",
    "database": "https://blindvote.app/sources/lienchiang#lc-tsao-healthcare"
  },
  {
    "city": "lienchiang",
    "anchor": "lc-wang-island-transport",
    "name": "王忠銘",
    "topic": "transport",
    "text": "连江县府表示将与中央评估引进更大型船舶，以改善各岛及台马间运能。",
    "admin": true,
    "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0odnYKwv8Y43n9HJdGDJunoFVvwwDS7exx8t7TEfX8Ly1dvJraYjqsg53TieHoqCpl&id=100071514671190",
    "cut": "2026-10-18",
    "database": "https://blindvote.app/sources/lienchiang#lc-wang-island-transport"
  },
  {
    "city": "lienchiang",
    "anchor": "lc-tsao-island-transport",
    "name": "曹爾元",
    "topic": "transport",
    "text": "曹尔元主张北竿机场施工应在不停航前提下规划，并要求与居民面对面讨论。",
    "admin": false,
    "url": "https://www.facebook.com/100003452332048/posts/pfbid02Hi7EWVNih1EJ9f9Noq7bMzhkYuk5s2yUM4QiWTAzYRiyu4UMpddMRPtLFfRJjiNzl",
    "cut": "2026-10-18",
    "database": "https://blindvote.app/sources/lienchiang#lc-tsao-island-transport"
  },
  {
    "city": "lienchiang",
    "anchor": "lc-tsao-tourism",
    "name": "曹爾元",
    "topic": "tourism",
    "text": "曹尔元提出争取大陆游客来马祖，并建议向中央争取跨区域旅游开放。",
    "admin": false,
    "url": "https://www.facebook.com/100003452332048/posts/pfbid02v1a32xYrZqFP7VgnKjk5ji8ZxLdgebMyREdQNyyVqouuhAzr5h9Q3UZdTjMGKtP6l",
    "cut": "2026-10-18",
    "database": "https://blindvote.app/sources/lienchiang#lc-tsao-tourism"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-chang-bus",
    "name": "張啓楷",
    "topic": "transport",
    "text": "张啓楷提出推动嘉义蓝线轻轨，由嘉义县市共同向中央争取。",
    "admin": false,
    "url": "https://www.facebook.com/qikai.zhang01/posts/pfbid07289EQHRc6HvC44NXUPi1jnjNaRK9n35EkTuTZJijVV7QjtooEDjGpKvFH45Kvgml",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-chang-bus"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-chang-jobs",
    "name": "張啓楷",
    "topic": "economy",
    "text": "张啓楷提出给符合资格、返乡稳定就业的青年最长一年、最高6万元补贴。",
    "admin": false,
    "url": "https://www.facebook.com/qikai.zhang01/posts/pfbid02VeAzn2mdc5n361Ym1f9qVTmVUXUAyuvgWUpe4L9KSNBDKTBmzakaMMz3ZXvNy94Bl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-chang-jobs"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-wangmh-jobs",
    "name": "王美惠",
    "topic": "economy",
    "text": "王美惠提出推动北港路沿线及后湖工业区周边发展，争取科技产业投资。",
    "admin": false,
    "url": "https://www.facebook.com/ahueimoto/posts/pfbid0FmWmjznLp141td9U8ii35LABxqFDypLYKaUUX2WtxoWfdybSfyuzDL2VQDWJyMAPl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-wangmh-jobs"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-chen-jobs",
    "name": "陳愷璜",
    "topic": "economy",
    "text": "陈愷璜提出结合数字制造与传统工艺，安排相关科系学生参与老屋修复实习。",
    "admin": false,
    "url": "https://chiayi-mayor.duckdns.org/assets/docs/chiayi-policy-whitepaper.pdf",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-chen-jobs"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-chang-housing",
    "name": "張啓楷",
    "topic": "economy",
    "text": "张啓楷提出在嘉北车站及北港路周边开发区配置可负担住宅，长期目标逾2000户。",
    "admin": false,
    "url": "https://www.facebook.com/qikai.zhang01/posts/pfbid02ZLZ1DsKDzdwwUZ1DTKU3ymanofqgUsSHyfzzYMm9DBkYmmMCyeBGm1KkQG3mkQvxl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-chang-housing"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-wangmh-housing",
    "name": "王美惠",
    "topic": "economy",
    "text": "王美惠提出盘点土地，推动由嘉义市府兴建社会婚育住宅。",
    "admin": false,
    "url": "https://www.facebook.com/ahueimoto/posts/pfbid0etWFCZAzGABT7w8hhLWBYigb7LZ1eHUkw2QLXk9dcpum4ag8o1AReHuwk4x2QepUl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-wangmh-housing"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-chen-housing",
    "name": "陳愷璜",
    "topic": "economy",
    "text": "陈愷璜提出由屋主让渡一定年限使用权，再透过修缮机制活化空间。",
    "admin": false,
    "url": "https://chiayi-mayor.duckdns.org/assets/docs/chiayi-policy-whitepaper.pdf",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-chen-housing"
  },
  {
    "city": "chiayi-city",
    "anchor": "cy-chang-healthcare",
    "name": "張啓楷",
    "topic": "health",
    "text": "张啓楷提出针对长期高工时劳工提供健康检查补贴，增加过劳风险相关检查。",
    "admin": false,
    "url": "https://www.facebook.com/qikai.zhang01/posts/pfbid02VeAzn2mdc5n361Ym1f9qVTmVUXUAyuvgWUpe4L9KSNBDKTBmzakaMMz3ZXvNy94Bl",
    "cut": "2026-10-20",
    "database": "https://blindvote.app/sources/chiayicity#cy-chang-healthcare"
  }
];
function apply(d){
 d.sources['county-huang-kinmen-industry-20261024']={title:'黄世团成立竞选总部提出产业与老街构想',url:'https://udn.com/vote2026/story/124652/9835310',date:'2026-10-24',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'新闻报道候选人竞选活动'};
 const huangKm=d.people.find(p=>p.city==='kinmen'&&p.name==='黃世團');if(!huangKm)throw new Error('Missing candidate: 黃世團');
 d.sources['county-huang-kinmen-career-art-museum']={title:'国立台湾美术馆：黄世团版画艺术经历',url:'https://twfineartsarchive.ntmofa.gov.tw/QuarterlyFile/P0430600.pdf?120001903=',date:'刊载日期未核',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立台湾美术馆',kind:'美术研究文章所列艺术家经历'};
 if(!huangKm.countyBrief)throw new Error('Missing biography: 黃世團');
 huangKm.countyBrief.work='国立台湾美术馆文章列其曾任国立华侨中学教师、金门画会及十青版画会会长；中央社另列其曾在台湾艺术大学图文传播和书画艺术学系兼任讲师，并任台湾今日画家协会理事长。各职起止年月暂未确认。';huangKm.countyBrief.extraBioSource='county-huang-kinmen-career-art-museum';
 if(!huangKm.policies.some(x=>x.sources?.includes('county-huang-kinmen-industry-20261024')))huangKm.policies.push(
  {topic:'economy',text:'黄世团提出研究设立金门产业经济特区，盘点闲置或低度利用土地，研议吸引台商与外商合法投资。',type:'本届政见（竞选活动报道）',basis:'campaign',electionYear:2026,date:'2026-10-24',sources:['county-huang-kinmen-industry-20261024'],note:'候选人称特区涉及税制、关务、土地及中央法规，仍需规划并争取中央支持。'},
  {topic:'tourism',text:'黄世团主张活化金城、沙美和山外老街商圈，结合特色市集、夜间经济与文化活动，延长游客停留时间。',type:'本届政见（竞选活动报道）',basis:'campaign',electionYear:2026,date:'2026-10-24',sources:['county-huang-kinmen-industry-20261024'],note:'这是候选人提出的方向；预算、实施方式与成效尚未确定。'}
 );
 d.sources['county-chen-jinchuan-career-20200608']={title:'陈尽川：剩下的生命留给海洋',url:'https://visionproject.org.tw/article_detail.php?id=5933',date:'2020-06-08',checkedAt:'2026-11-12',publisherId:'other',publisherName:'愿景工程基金会（倾向待核定）',kind:'记者采访与人物经历报道'};
 const chenJc=d.people.find(p=>p.city==='penghu'&&p.name==='陳盡川');if(!chenJc?.countyBrief)throw new Error('Missing biography: 陳盡川');
 chenJc.countyBrief.work='愿景工程采访记载，他曾是风浪板国手，之后回空军学习机工技术，退伍后从事冷冻工程并推广水上运动；2011年造船调查海域生态，后来投入海洋保育。具体服务单位与大部分任职年月暂未确认。';chenJc.countyBrief.extraBioSource='county-chen-jinchuan-career-20200608';
 d.sources['county-chang-huomu-career-20230619']={title:'张火木争取民众党提名选金门立委',url:'https://www.kinmen.gov.tw/News_Content2.aspx?Create=1&n=98E3CA7358C89100&s=B8496EBE34D0491F&sms=BF7D6D478B935644',date:'2023-06-19',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（县政府网站转载；倾向待核定）',kind:'地方报纸报道候选人公开履历'};
 const changHm=d.people.find(p=>p.city==='kinmen'&&p.name==='張火木');if(!changHm?.countyBrief)throw new Error('Missing biography: 張火木');
 changHm.countyBrief.work='金門日報報導曾任實踐家專執行秘書，在實踐大學長期教學後退休，並撰寫金門文史著作；任職起訖年月待核';changHm.countyBrief.extraBioSource='county-chang-huomu-career-20230619';
 d.sources['county-hung-kinmen-career-cec2024']={title:'2024年金门立委选举公报：洪和成',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/113%E5%B9%B4%E7%AC%AC11%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E5%A7%94%E5%93%A1/19%E9%87%91%E9%96%80%E7%B8%A3/%E9%87%91%E9%96%80%E7%B8%A3%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2024年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'金门县选举委员会',kind:'候选人自行填报的经历'};
 const hungKm=d.people.find(p=>p.city==='kinmen'&&p.name==='洪和成');if(!hungKm?.countyBrief)throw new Error('Missing biography: 洪和成');
 hungKm.countyBrief.work='電腦工程師；2024年選舉公報列其為麒麟旅店企業社負責人，該職起迄及現況待核';hungKm.countyBrief.extraBioSource='county-hung-kinmen-career-cec2024';
 d.sources['county-wei-keelung-issues-20261027']={title:'魏造文抽签时谈基隆人口与淹水',url:'https://udn.com/vote2026/story/124652/9839561',date:'2026-10-27',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'记者采访候选人公开说法'};
 const weiKl=d.people.find(p=>p.city==='keelung'&&p.name==='魏造文');if(!weiKl)throw new Error('Missing candidate: 魏造文');
 if(weiKl.countyBrief){weiKl.countyBrief.work='已查联合报抽签采访及候选人资料汇编；具体工作单位、职务及任职年月暂未确认。';weiKl.countyBrief.extraBioSource='county-wei-keelung-issues-20261027';}
 weiKl.policyCoverage={checkedAt:'2026-11-12',note:'已查：联合报10月27日采访中，魏造文谈及基隆人口减少、年轻人外出就业及市区道路淹水，表示会在公办公布政见的场合说明想法。暂未确认：该报道没有列出对应的具体措施、预算或时程；本届详细政见仍待核实。尚未查核：个人社群完整发言及后续政见发表会内容。',sources:['county-wei-keelung-issues-20261027','county-policy-index-keelung']};
 d.sources['county-ho-hsinchu-baseball-20261106']={title:'何志勇提出新竹棒球发展与巨蛋构想',url:'https://udn.com/news/story/124652/9862161',date:'2026-11-06',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人政策记者会'};
 const hoBall=d.people.find(p=>p.city==='hsinchu-city'&&p.name==='何志勇');if(!hoBall)throw new Error('Missing candidate: 何志勇');
 if(!hoBall.policies.some(x=>x.sources?.includes('county-ho-hsinchu-baseball-20261106')))hoBall.policies.push(
  {topic:'tourism',text:'何志勇提出兴建可容纳1.5万人的新竹智慧巨蛋，供棒球、演唱会和展会使用，列出三处候选基地，目标约五年完工。',type:'本届政见（记者会报道）',basis:'campaign',electionYear:2026,date:'2026-11-06',sources:['county-ho-hsinchu-baseball-20261106'],note:'选址仍须评估及公众讨论；建设经费、审批及五年工期并未核定。'},
  {topic:'education',text:'何志勇主张在较大公园增设投打练习空间、扩充三级和社区棒球，并参考美国少棒联盟与日本球队培养模式。',type:'本届政见（记者会报道）',basis:'campaign',electionYear:2026,date:'2026-11-06',sources:['county-ho-hsinchu-baseball-20261106'],note:'这是棒球培训与场地构想；场地安全、土地、经费和执行安排待核。'}
 );
 for(const [region,topic,text] of [['us','参考美国少棒制度','何志勇提出发展社区棒球，参考美国威廉波特及小马联盟模式，让家长也能担任基层教练。'],['jp','参考日本球队培养模式','何志勇提出新竹城市队可参考日本德岛短蓝袜队模式培育选手，并以此为基础争取成立职棒球队。']])if(!hoBall.evidence.some(x=>x.region===region&&x.source==='county-ho-hsinchu-baseball-20261106'))hoBall.evidence.push({region,date:'2026-11-06',topic,text,limit:'这是地方棒球政策中引用外国经验的主张，非对美日外交或政治立场；实际合作与可行性尚待确认。',source:'county-ho-hsinchu-baseball-20261106'});
 d.sources['county-liwu-taitung-20260912']={title:'李吴颖智接受中央社访问谈竞选主张',url:'https://www.cna.com.tw/news/aloc/202609120079.aspx',date:'2026-09-12',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道候选人政见'};
 const liwuTt=d.people.find(p=>p.city==='taitung'&&p.name==='李吳穎智');if(!liwuTt)throw new Error('Missing candidate: 李吳穎智');
 if(!liwuTt.policies.some(x=>x.sources?.includes('county-liwu-taitung-20260912')))liwuTt.policies.push(
  {topic:'accountability',text:'李吴颖智提出县长廉政契约，承诺不买票、不贿选、不贪污，公开重大工程、会议与公共资产信息，并要求家人与关系人利益回避。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-12',sources:['county-liwu-taitung-20260912'],note:'属于候选人承诺；具体公开范围、执行办法与监督机制待核。'},
  {topic:'transport',text:'李吴颖智提出推动台9线拓宽、快速道路与高速公路延伸，并把宜花东屏高铁列为长期建设方向。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-12',sources:['county-liwu-taitung-20260912'],note:'相关路线、经费、中央权限与可行性均待评估，不表示建设已核定。'},
  {topic:'health',text:'李吴颖智提出长者假牙补助、偏乡就医交通补助，以及学童免费鲜乳和弱势照护构想。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-12',sources:['county-liwu-taitung-20260912'],note:'资格、补助标准、预算及实施时间暂未确认。'},
  {topic:'economy',text:'李吴颖智提出发展农渔产品加值、影视文化基地和观光特区，并以职训支持在地就业及创业。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-12',sources:['county-liwu-taitung-20260912'],note:'报道记录政策方向，具体选址、经费及执行机制暂未确认。'}
 );
 d.sources['county-chen-penghu-career-cec2014']={title:'湖西乡公所：乡长陈振中经历小传',url:'https://www.penghu.gov.tw/Thuhsi/ch/home.jsp?id=19',date:'2022-12-26（页面更新）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'澎湖县湖西乡公所',kind:'政府网站人物履历'};
 const chenPh=d.people.find(p=>p.city==='penghu'&&p.name==='陳振中');if(!chenPh?.countyBrief)throw new Error('Missing biography: 陳振中');
 chenPh.countyBrief.work='鄉公所履歷列業務經理、村幹事、縣政府人事室助理員、湖西鄉圖書館館長、湖西鄉公所秘書與老人之家秘書；具體任職年月及部分單位待核';chenPh.countyBrief.extraBioSource='county-chen-penghu-career-cec2014';
 d.sources['county-chen-penghu-tourism-20261019']={title:'陈振中谈澎湖观光及妈祖文化园区',url:'https://knowledge.kmt.org.tw/articles/2468fd31-683a-4dea-a516-e5dae5329ef6/',date:'2026-10-19',checkedAt:'2026-11-12',publisherId:'other',publisherName:'中国国民党知识库（政党整理）',kind:'政党知识库转载候选人专页'};
 if(!chenPh.policies.some(x=>x.sources?.includes('county-chen-penghu-tourism-20261019')))chenPh.policies.push({topic:'tourism',text:'陈振中提出活化妈祖文化园区，结合海上迎妈祖、陆上绕境与特色餐车，增加游客参与活动和餐饮的机会。',type:'本届政见（候选人专页）',basis:'campaign',electionYear:2026,date:'2026-10-19',sources:['county-chen-penghu-tourism-20261019'],note:'国民党知识库转载候选人专页内容；具体经费、活动安排及实施时间暂未确认。'});
 d.sources['county-wu-yunlin-career-20260901']={title:'吴炳辉登记参选与律师经历',url:'https://www.ftvnews.com.tw/news/detail/2026901w0316',date:'2026-09-01',checkedAt:'2026-11-12',publisherId:'ftv',publisherName:'民视新闻',kind:'新闻报道候选人经历'};
 const wuCareer=d.people.find(p=>p.city==='yunlin'&&p.name==='吳炳輝');if(!wuCareer?.countyBrief)throw new Error('Missing biography: 吳炳輝');
 wuCareer.countyBrief.work='執業律師；民視2026年報導指其在雲林與台南設有事務所，已執業逾30年；具體任職時間待核';wuCareer.countyBrief.extraBioSource='county-wu-yunlin-career-20260901';
 d.sources['county-wu-taitung-interview-20261031']={title:'吴秀华专访：台东观光与在地产业',url:'https://city.gvm.com.tw/article/134189',date:'2026-10-31',checkedAt:'2026-11-12',publisherId:'other',publisherName:'远见城市学（倾向待核定）',kind:'媒体专访候选人'};
 const wuTt=d.people.find(p=>p.city==='taitung'&&p.name==='吳秀華');if(!wuTt?.countyBrief)throw new Error('Missing biography: 吳秀華');
 wuTt.countyBrief.work='遠見城市學報導其早年曾在吳俊立議員服務處工作；具體職稱與任職年月待核';wuTt.countyBrief.extraBioSource='county-wu-taitung-interview-20261031';
 if(!wuTt.policies.some(x=>x.sources?.includes('county-wu-taitung-interview-20261031')))wuTt.policies.push(
  {topic:'tourism',text:'吴秀华提出发展四季观光，结合原住民部落文化与路跑、铁人三项、冲浪等运动，减少对单一大型活动的依赖。',type:'本届政见（媒体专访）',basis:'campaign',electionYear:2026,date:'2026-10-31（报道日）',sources:['county-wu-taitung-interview-20261031'],note:'报道转述候选人的发展构想，具体项目、预算及实施时程待核。'},
  {topic:'economy',text:'吴秀华主张通过包装、冷链、品牌行销与通路合作，提高台东农渔产品的市场价值，并结合观光体验。',type:'本届政见（媒体专访）',basis:'campaign',electionYear:2026,date:'2026-10-31（报道日）',sources:['county-wu-taitung-interview-20261031'],note:'属于候选人的产业方向；补助对象、资金来源及可量化目标尚待公布。'}
 );
 d.sources['county-chou-penghu-agriculture-20261110']={title:'周倪安提出澎湖农地复耕与农经学院构想',url:'https://www.cna.com.tw/news/aloc/202611100294.aspx',date:'2026-11-10',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道候选人政策记者会'};
 const chouPh=d.people.find(p=>p.city==='penghu'&&p.name==='周倪安');if(!chouPh)throw new Error('Missing candidate: 周倪安');
 d.sources['county-chou-penghu-career-ly']={title:'立法院第八届立法委员名鉴：周倪安',url:'https://lis.ly.gov.tw/lghtml/work/_K5_ttsbooke3.pdf?421739156=',date:'第八届委员名鉴',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院',kind:'官方立法委员名鉴所列经历'};
 if(!chouPh.countyBrief)throw new Error('Missing biography: 周倪安');
 chouPh.countyBrief.work='立法院第八屆委員名鑑列曾任標準普爾金融研究員、創投專案經理及廣播政論主持；任職年月待核';chouPh.countyBrief.extraBioSource='county-chou-penghu-career-ly';
 if(!chouPh.policies.some(x=>x.sources?.includes('county-chou-penghu-agriculture-20261110')))chouPh.policies.push(
  {topic:'economy',text:'周倪安提出荒地代管委托经营办法，鼓励废耕农地复耕，并以培育800名农业工作者为目标。',type:'本届政见（记者会报道）',basis:'campaign',electionYear:2026,date:'2026-11-10',sources:['county-chou-penghu-agriculture-20261110'],note:'候选人提出的目标；土地权利、代管依据、经费与执行条件尚待说明。'},
  {topic:'education',text:'周倪安提出争取澎湖科技大学成为台湾大学澎湖分校，并增设农业经济学院，培养当地农业人才。',type:'本届政见（记者会报道）',basis:'campaign',electionYear:2026,date:'2026-11-10',sources:['county-chou-penghu-agriculture-20261110'],note:'这是争取方向；学校整并、设院权限及双方是否同意尚待确认。'}
 );
 chouPh.policyCoverage=null;
 d.sources['county-liu-yilan-yuanshan-2022']={title:'2022年宜兰员山乡长选举公报',url:'https://eebulletin.cec.gov.tw/111/15%E5%AE%9C%E8%98%AD%E7%B8%A3/03%E9%84%89%E9%8E%AE%E5%B8%82%E9%95%B7/%E5%93%A1%E5%B1%B1%E9%84%89%E9%84%89%E9%95%B7%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/%E5%93%A1%E5%B1%B1%E9%84%89%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'宜兰县选举委员会',kind:'候选人填报的经历及往届政见'};
 const liuYl=d.people.find(p=>p.city==='yilan'&&p.name==='劉燦輝');if(!liuYl?.countyBrief)throw new Error('Missing candidate: 劉燦輝');
 d.sources['county-liu-yilan-council-2014']={title:'2014年员山乡民代表选举公报：刘灿辉',url:'https://web.cec.gov.tw/api/file/4efe955f-a9a3-4155-aa7c-ec3560b35cc8.pdf',date:'2014年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'宜兰县选举委员会',kind:'候选人自行填报的经历和往届政见'};
 liuYl.countyBrief.work='2014年乡民代表选举公报自填铁工、养蜂，并列员山乡公所、国立宜兰大学和新亚建设公司；这些单位的具体职务及各项经历起止年月暂未确认。';liuYl.countyBrief.extraBioSource='county-liu-yilan-council-2014';
 if(!liuYl.policies.some(x=>x.sources?.includes('county-liu-yilan-council-2014')))liuYl.policies.push(
  {topic:'childcare',text:'刘灿辉2014年参选员山乡民代表时提出，持有低收入户证明达三年以上的乡民子女免费进入乡立托儿所。',type:'往届乡民代表选举政见（2014年公报）',basis:'campaign',electionYear:2014,date:'2014年选举公报',sources:['county-liu-yilan-council-2014'],note:'这是当年乡民代表选举主张，本届是否沿用、资格细则与财源暂未确认。'},
  {topic:'education',text:'刘灿辉2014年提出提高乡民子女奖学金：研究所及大学由每名1500元提高到3000元，高中职由700元提高到1500元，国中由400元提高到800元，国小由200元提高到500元。',type:'往届乡民代表选举政见（2014年公报）',basis:'campaign',electionYear:2014,date:'2014年选举公报',sources:['county-liu-yilan-council-2014'],note:'金额是当年候选人提出的调整，并非目前补助标准；本届是否沿用暂未确认。'},
  {topic:'economy',text:'刘灿辉2014年提出设置农产品自产自销区，并以城南园区为例提出十五年免征地价税招商。',type:'往届乡民代表选举政见（2014年公报）',basis:'campaign',electionYear:2014,date:'2014年选举公报',sources:['county-liu-yilan-council-2014'],note:'属于往届竞选主张；租税权限、合法性和本届是否沿用均待确认。'},
  {topic:'transport',text:'刘灿辉2014年建议研究雪山隧道假日弹性车道，并请国道局评估可行性。',type:'往届乡民代表选举政见（2014年公报）',basis:'campaign',electionYear:2014,date:'2014年选举公报',sources:['county-liu-yilan-council-2014'],note:'属于当年建议，涉及中央交通管理及安全评估；不代表已经实施，本届是否沿用暂未确认。'}
 );
 if(!liuYl.policies.some(x=>x.sources?.includes('county-liu-yilan-yuanshan-2022')))liuYl.policies.push(
  {topic:'transport',text:'刘灿辉2022年参选员山乡长时提出延伸复兴路至岚峰路及岚峰路至永同路，经征收后分配部分建地，并以剩余土地拍卖所得筹措道路经费。',type:'往届乡长选举政见（2022年公报）',basis:'campaign',electionYear:2022,date:'2022年选举公报',sources:['county-liu-yilan-yuanshan-2022'],note:'属于当年乡长选举构想；征收条件、土地权利、经费及本届是否沿用暂未确认。'},
  {topic:'economy',text:'刘灿辉2022年主张推广设施栽培、协助农民拟定经营计划，并邀请农业推广中心介绍高经济价值作物。',type:'往届乡长选举政见（2022年公报）',basis:'campaign',electionYear:2022,date:'2022年选举公报',sources:['county-liu-yilan-yuanshan-2022'],note:'属于2022年员山乡长选举主张；本届县长选举是否沿用暂未确认。'}
 );
 d.sources['county-wu-yunlin-fiscal-20260831']={title:'吴炳辉登记参选云林县长并谈财政分配',url:'https://udn.com/news/story/124652/9724893',date:'2026-08-31',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'新闻报道候选人登记时的说法'};
 const wuYl=d.people.find(p=>p.city==='yunlin'&&p.name==='吳炳輝');if(!wuYl)throw new Error('Missing candidate: 吳炳輝');
 if(!wuYl.policies.some(x=>x.sources?.includes('county-wu-yunlin-fiscal-20260831')))wuYl.policies.push({topic:'accountability',text:'吴炳辉主张修改财政收支划分法，认为云林分配的中央资源相较六都不足；他将财政分配改革列为县长选举的重要议题。',type:'本届政见（登记时受访）',basis:'campaign',electionYear:2026,date:'2026-08-31',sources:['county-wu-yunlin-fiscal-20260831'],note:'资源差距是候选人的判断；修改法律涉及中央权限，报道未给出具体条文与分配公式。'});
 d.sources['county-luo-hualien-career-20260903']={title:'罗佩秦登记参选花莲县长',url:'https://www.tainantimes.com/archives/77906',date:'2026-09-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'台南时报（媒体倾向待核定）',kind:'媒体报道候选人军旅背景'};
 const luo=d.people.find(p=>p.city==='hualien'&&p.name==='羅佩秦');if(!luo?.countyBrief)throw new Error('Missing biography: 羅佩秦');
 luo.countyBrief.work='媒體報導其為陸軍中校退伍；具體任職單位與服役年月待核';luo.countyBrief.extraBioSource='county-luo-hualien-career-20260903';
 d.sources['county-liang-peace-20260716']={title:'梁文韬提出金门停战与两岸谈判构想',url:'https://www.cna.com.tw/news/aipl/202607160349.aspx',date:'2026-07-16',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人宣布参选时的主张'};
 const liang=d.people.find(p=>p.city==='kinmen'&&p.name==='梁文韜');if(!liang)throw new Error('Missing candidate: 梁文韜');
 if(!liang.evidence.some(x=>x.source==='county-liang-peace-20260716'))liang.evidence.push({region:'cn',date:'2026-07-16',topic:'提出金门停战及两岸谈判',text:'梁文韬提出在两岸福建省政府获得授权后商谈金门永久停战，相关协议再交县议会或公民投票确认。',limit:'这是候选人的政治主张；谈判授权、国防权限及法律可行性均须另行确认，不表示已有协议。',source:'county-liang-peace-20260716'});
 if(!liang.policies.some(x=>x.sources?.includes('county-liang-peace-20260716')))liang.policies.push({topic:'exchange',text:'梁文韬提出推动金门永久停战，通过获授权的两岸福建省政府商谈，并由金门县议会或公投确认。',type:'媒体报道转述本人主张',basis:'campaign',electionYear:2026,date:'2026-07-16',sources:['county-liang-peace-20260716'],note:'涉及两岸谈判与国防权限，地方政府能否推动及协议法律效力须另核。'});
 d.sources['county-chen-changhua-welfare-20261111']={title:'彰化县长候选人讨论长者福利',url:'https://udn.com/vote2026/story/124652/9870449',date:'2026-11-11',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'新闻报道转述候选人说法'};
 const chenCh=d.people.find(p=>p.city==='changhua'&&p.name==='陳重嘉');if(!chenCh)throw new Error('Missing candidate: 陳重嘉');
 if(!chenCh.policies.some(x=>x.sources?.includes('county-chen-changhua-welfare-20261111')))chenCh.policies.push({topic:'health',text:'陈重嘉主张福利应优先照顾有需要的人，不倾向普发现金；支持现行长青幸福卡，并认为长者健保费补助须视财源而定。',type:'媒体报道转述本人主张',basis:'campaign',electionYear:2026,date:'2026-11-11',sources:['county-chen-changhua-welfare-20261111'],note:'对长者健保费补助附有财源条件，并非承诺无条件实施。'});
 chenCh.policyCoverage=null;
 d.sources['county-lin-yunlin-career-cec2018']={title:'2018年云林县长选举公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/04%E7%B8%A3%E5%B8%82%E9%95%B7/107%E5%B9%B4/11%E9%9B%B2%E6%9E%97%E7%B8%A3/%E7%AC%AC18%E5%B1%86%E7%B8%A3%E9%95%B7%E5%80%99%E9%81%B8%E4%BA%BA%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf',date:'2018年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'云林县选举委员会',kind:'候选人登记的当时经历'};
 const linYl=d.people.find(p=>p.city==='yunlin'&&p.name==='林佳瑜');if(!linYl?.countyBrief)throw new Error('Missing candidate: 林佳瑜');
 d.sources['county-yunlin-forum-20261109']={title:'云林县长候选人公办政见会录影报道',url:'https://www.cna.com.tw/news/aloc/202611090076.aspx',date:'2026-11-09',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道公办政见会录影时的候选人发言'};
 if(!linYl.policies.some(x=>x.sources?.includes('county-yunlin-forum-20261109')))linYl.policies.push({topic:'economy',text:'林佳瑜认为科技创新主要来自民间，公部门应以服务为角色；他认为云林科技发展将跟随整体趋势。',type:'本届施政观点（公办政见会录影）',basis:'campaign',electionYear:2026,date:'2026-11-09',sources:['county-yunlin-forum-20261109'],note:'这是对政府角色与科技发展的观点；报道未列具体科技项目、预算或执行时程。完整政见会预计11月18日起播出。'});
 linYl.policyCoverage={checkedAt:'2026-11-12',note:'已查2026年公办政见会录影报道，收录其对科技和公部门角色的观点；具体执行方案仍待确认，完整政见会预计11月18日起播出。',sources:['county-yunlin-forum-20261109']};
 d.sources['county-wu-yunlin-huwei-2024']={title:'2024年虎尾镇长补选选举公报',url:'https://web.cec.gov.tw/api/file/fe16dcd5-1269-4ca1-b021-50844fd7d176.pdf',date:'2024年补选选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'云林县选举委员会',kind:'候选人自行填报的经历与往届政见'};
 if(!wuYl.policies.some(x=>x.sources?.includes('county-wu-yunlin-huwei-2024')))wuYl.policies.push({topic:'health',text:'吴炳辉在2024年虎尾镇长补选公报提出按区域建立长照网络，结合托老、增加公立幼儿园及托幼互助，并提出青银共居。',type:'往届补选政见（2024年选举公报）',basis:'campaign',electionYear:2024,date:'2024年补选选举公报',sources:['county-wu-yunlin-huwei-2024'],note:'这是虎尾镇长补选时的构想，本届县长选举是否沿用、经费及服务规模暂未确认。'});
 d.sources['county-lin-yunlin-career-cec2022']={title:'2022年云林县长选举公报',url:'https://eebulletin.cec.gov.tw/111/12%E9%9B%B2%E6%9E%97%E7%B8%A3/01%E7%B8%A3%E9%95%B7/%E9%9B%B2%E6%9E%97%E7%B8%A3%E7%B8%A3%E9%95%B7.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'云林县选举委员会',kind:'候选人自行填报的经历'};
 linYl.countyBrief.work='2018年选举公报列其自1994年起开业并任牙医诊所院长；2022年公报自列正云牙医诊所开业负责人。现职及任职结束时间暂未确认。';linYl.countyBrief.extraBioSource='county-lin-yunlin-career-cec2022';
 d.sources['county-lin-yunlin-care-20221107']={title:'云林县长参选人政见发表聚焦长照',url:'https://www.cna.com.tw/news/aipl/202211070082.aspx',date:'2022-11-07',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道往届政见发表会'};
 if(!linYl.policies.some(x=>x.sources?.includes('county-lin-yunlin-care-20221107')))linYl.policies.push({topic:'health',text:'林佳瑜在2022年县长政见发表会认为，应把长期照顾视为健康产业，使长照融入生活，并通过产业链创造工作机会。',type:'往届施政观点（2022年政见会）',basis:'campaign',electionYear:2022,date:'2022-11-07',sources:['county-lin-yunlin-care-20221107'],note:'这是往届观点，报道未列具体执行方案；本届是否沿用暂未确认。'});
 if(!linYl.policies.some(x=>x.sources?.includes('county-lin-yunlin-career-cec2018')))linYl.policies.push(
  {topic:'health',text:'林佳瑜在2018年选举公报提出居家长照和居家照护，提到让义工与培训人员参与，并以「长照4.0」描述其构想。',type:'往届竞选政见（2018年选举公报）',basis:'campaign',electionYear:2018,date:'2018年选举公报',sources:['county-lin-yunlin-career-cec2018'],note:'这是2018年主张，公报未列出经费、服务规模和执行细节；本届是否沿用暂未确认。'},
  {topic:'water',text:'林佳瑜在2018年选举公报提到当年8月下旬大雨，追问地方水文资源、应变能力及整体治水规划。',type:'往届竞选政见（2018年选举公报）',basis:'campaign',electionYear:2018,date:'2018年选举公报',sources:['county-lin-yunlin-career-cec2018'],note:'公报主要提出治理问题，并未列出可核实的工程方案；本届是否沿用暂未确认。'}
 );
 d.sources['county-chen-changhua-council-bio']={title:'彰化县议会议员陈重嘉简介',url:'https://www.chcc.gov.tw/member/details.aspx?Parser=99%2C6%2C40%2C%2C%2C%2C142',date:null,checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'彰化县议会',kind:'现任议员公开人物资料'};
 if(!chenCh.countyBrief)throw new Error('Missing biography: 陳重嘉');
 chenCh.countyBrief.work='議會簡介列曾任富慶集團啟華科技及永晉集團永晉燈飾總經理特助、阡富科技執行長；任職年月待核';chenCh.countyBrief.extraBioSource='county-chen-changhua-council-bio';
 if(!linYl.evidenceCoverage)linYl.evidenceCoverage={};
 for(const [region,label] of [['cn','中国大陆／两岸'],['us','美国'],['jp','日本']])if(!linYl.evidence.some(x=>x.region===region))linYl.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以「林佳瑜」「云林县长」「牙医」及'+label+'为关键词检索公开网页，并查阅2018年选举公报和2026年登记报道；本范围内未找到可明确归属于本人的相关表态。',note:'个人社群历史、全部影片与尚未播出的政见会仍未逐项查核；不能据此推断其立场。',sources:['county-lin-yunlin-career-cec2018','county-bio']};
 if(!chenCh.evidenceCoverage)chenCh.evidenceCoverage={};
 if(!chenCh.evidence.some(x=>x.region==='cn'))chenCh.evidenceCoverage.cn={checkedAt:'2026-11-12',scope:'以「陈重嘉」「彰化」搭配中国大陆、两岸和交流检索公开网页，并查看议会简介；本范围内未找到可明确归属本人的两岸表态。',note:'个人社群历史、全部影片及未来政见会仍未逐项查核；不能据此推断其立场。',sources:['county-chen-changhua-council-bio','county-chen-changhua-welfare-20261111']};
 d.sources['county-chang-ivod-20251203']={title:'2025年12月3日外交及国防委员会质询视频',url:'https://ivod.ly.gov.tw/Play/Clip/1M/166128',date:'2025-12-03',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院议事转播',kind:'官方质询视频'};
 d.sources['county-chang-acta-20251203']={title:'张啓楷质询纪录及发言整理',url:'https://acta.tw/evidence/ev_ivod_166128_c23a0b42893a',date:'2025-12-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'Acta（葛如钧委员办公室制作）',kind:'基于立法院视频与开放数据的发言整理；可对照官方视频'};
 const changCy=d.people.find(p=>p.city==='chiayi-city'&&p.name==='張啓楷');if(!changCy)throw new Error('Missing candidate: 張啓楷');
 const changRecords=[['us','对美国核能采购的质询','张啓楷在立法院质询时要求推进与美国的核能采购，认为可兼顾能源需求和对美贸易问题。'],['jp','关注中日关系对台湾的影响','张啓楷在立法院询问外交部长，中日关系紧张若进一步恶化对台湾有何影响，并要求安全部门持续评估。']];
 for(const [region,topic,text] of changRecords)if(!changCy.evidence.some(x=>x.region===region&&x.source==='county-chang-ivod-20251203'))changCy.evidence.push({region,date:'2025-12-03',topic,text,limit:'根据民间逐字整理并附立法院官方视频；这是一次国会质询，不等于相关采购或外交政策已经落实。',source:'county-chang-ivod-20251203',sources:['county-chang-ivod-20251203','county-chang-acta-20251203']});
 d.sources['county-tsao-japan-20070103']={title:'曹尔元陪同日本节目团队拍摄马祖',url:'https://www.matsu.idv.tw/print.php?f=19&p=1&t=38724',date:'2007-01-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'马祖日报，马祖资讯网转载（媒体倾向待核定）',kind:'地方媒体转载的旅游交流报道'};
 const tsao=d.people.find(p=>p.city==='lienchiang'&&p.name==='曹爾元');if(!tsao)throw new Error('Missing candidate: 曹爾元');
 d.sources['county-lienchiang-tsao-career-20220608']={title:'曹尔元退休，回顾41年公职经历',url:'https://www.matsu-news.gov.tw/news/article/200139',date:'2022-06-08',checkedAt:'2026-11-12',publisherId:'other',publisherName:'马祖日报（倾向待核定）',kind:'地方媒体报道退休及工作经历'};
 d.sources['county-lienchiang-wang-career-20221024']={title:'王忠铭从户政临时雇员到县府行政职务',url:'https://www.businesstoday.com.tw/article/category/183027/post/202210240009/',date:'2022-10-24',checkedAt:'2026-11-12',publisherId:'other',publisherName:'今周刊（倾向待核定）',kind:'媒体人物专访'};
 d.sources['county-lienchiang-tsao-cec-2022']={title:'2022年连江县长选举公报：曹尔元经历与政见',url:'https://eebulletin.cec.gov.tw/111/20%E9%80%A3%E6%B1%9F%E7%B8%A3/02%E7%B8%A3%E8%AD%B0%E5%93%A1/%E9%80%A3%E6%B1%9F%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1-%E6%9D%B1%E5%BC%95%E9%84%89.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'连江县选举委员会',kind:'候选人自行填报的往届经历与政见'};
 if(!tsao.countyBrief)throw new Error('Missing biography: 曹爾元');
 tsao.countyBrief.work='马祖日报报道，曹尔元1980年大学毕业后返乡进入公职，曾在农业改良场、自来水厂及县府多个部门任职，2022年6月8日退休。各职务起止年月暂未确认。';tsao.countyBrief.extraBioSource='county-lienchiang-tsao-career-20220608';
 const wangLc=d.people.find(p=>p.city==='lienchiang'&&p.name==='王忠銘');if(!wangLc?.countyBrief)throw new Error('Missing biography: 王忠銘');
 wangLc.countyBrief.work='今周刊人物专访报道，王忠铭高中毕业后在连江县户政事务所担任临时雇员，之后进入教育局，先后任科员、督学和课长；具体任职年月暂未确认。';wangLc.countyBrief.extraBioSource='county-lienchiang-wang-career-20221024';
 for(const [topic,text] of [['transport','曹尔元在2022年县长选举中主张推动双向夜航、争取两家航空公司，并为设籍居民提供机票票价六折。'],['health','曹尔元在2022年提出在台湾本岛成立马祖乡亲医疗服务中心，提供协调服务，并争取次专科医疗团队常驻。']])if(!tsao.policies.some(x=>x.sources?.includes('county-lienchiang-tsao-cec-2022')&&x.text===text))tsao.policies.push({topic,text,type:'往届县长选举政见（2022年公报）',basis:'campaign',electionYear:2022,date:'2022年选举公报',sources:['county-lienchiang-tsao-cec-2022'],note:'往届竞选主张，本届是否沿用及具体落实情况暂未确认。'});
 if(!tsao.evidence.some(x=>x.source==='county-tsao-japan-20070103'))tsao.evidence.push({region:'jp',date:'2007-01-03',topic:'盼与日本节目团队合作推广马祖',text:'时任连江县观光局长曹尔元陪同电视节目团队拜会县长，并希望合作拍摄介绍马祖的旅游节目，面向日本观众推广。',limit:'地方新闻转载的当时发言；具体合作成果及节目播出情况未核实。',source:'county-tsao-japan-20070103'});
 d.sources['county-penghu-cross-strait-20261019']={title:'澎湖县长候选人讨论小三通与观光客源',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',date:'2026-10-19',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道并分别转述候选人及竞选团队的说法'};
 const phViews=[['陳振中','陈振中表示将厘清恢复小三通的环节，并争取包括大陆在内的多地观光客源。','这是就旅游与客源提出的说法，不表示恢复小三通已获批准。'],['吳淑瑾','吴淑瑾竞选团队主张两岸双向平等开放，并指出过度依赖单一旅游市场存在风险。','报道引述的是竞选团队声明，团队的政治判断应归于团队。']];
 for(const [name,text,limit] of phViews){const person=d.people.find(p=>p.city==='penghu'&&p.name===name);if(!person)throw new Error('Missing candidate: '+name);if(!person.evidence.some(x=>x.source==='county-penghu-cross-strait-20261019'))person.evidence.push({region:'cn',date:'2026-10-19',topic:'小三通与旅游市场',text,limit,source:'county-penghu-cross-strait-20261019'});}
 d.sources['county-hsu-penghu-japan-2019']={title:'许智富自述赴日本参加海湾年会经历',url:'https://alumni.nptu.edu.tw/var/file/95/1095/img/1938/184481359.pdf',date:'2019年（活动年份）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立屏东大学校友资料，许智富自述',kind:'大学校友刊物刊载当事人回忆'};
 const hsuPh=d.people.find(p=>p.city==='penghu'&&p.name==='許智富');if(!hsuPh)throw new Error('Missing candidate: 許智富');
 if(!hsuPh.countyBrief)throw new Error('Missing biography: 許智富');
 hsuPh.countyBrief.work='本人在校友刊物回憶，2003年畢業後在澎湖從事教育工作六年，2009年離開教育界後經商創業；工作單位待核';hsuPh.countyBrief.extraBioSource='county-hsu-penghu-japan-2019';
 if(!hsuPh.evidence.some(x=>x.source==='county-hsu-penghu-japan-2019'))hsuPh.evidence.push({region:'jp',date:'2019年（活动年份）',topic:'赴日本分享海洋保育经验',text:'许智富在母校校友资料中回忆，担任澎湖副县长期间赴日本参加世界最美丽海湾国际年会，分享澎湖净滩与海洋永续经验。',limit:'当事人回忆只用于记录交流经历，具体会议日期与后续成果待核。',source:'county-hsu-penghu-japan-2019'});
 d.sources['county-hsu-penghu-20260302']={title:'许智富宣布参选与医疗、地方建设主张',url:'https://ctinews.com/news/items/14a1Brz0xk',date:'2026-03-02',checkedAt:'2026-11-12',publisherId:'other',publisherName:'中天新闻网（倾向待核定）',kind:'媒体报道候选人参选宣言'};
 if(!hsuPh.policies.some(x=>x.sources?.includes('county-hsu-penghu-20260302')))hsuPh.policies.push(
  {topic:'health',text:'许智富提出离岛急重症医疗强化计划，争取增设急诊与重症病床，并改善空中转诊机制。',type:'本届政见（参选宣言报道）',basis:'campaign',electionYear:2026,date:'2026-03-02',sources:['county-hsu-penghu-20260302'],note:'媒体转述候选人主张；床位数量、医疗人力、经费及实施时间暂未确认。'},
  {topic:'tourism',text:'许智富提出推动重光园区转型，结合文化与观光发展。',type:'本届政见（参选宣言报道）',basis:'campaign',electionYear:2026,date:'2026-03-02',sources:['county-hsu-penghu-20260302'],note:'报道未说明园区具体改造方式、预算或时程。'},
  {topic:'health',text:'许智富提出营造高龄友善环境，鼓励住宅加装电梯，改善长者居住条件。',type:'本届政见（参选宣言报道）',basis:'campaign',electionYear:2026,date:'2026-03-02',sources:['county-hsu-penghu-20260302'],note:'补助对象、金额及执行方式暂未确认。'},
  {topic:'accountability',text:'许智富主张县府优先延揽在地人才，强调施政延续性。',type:'本届政见（参选宣言报道）',basis:'campaign',electionYear:2026,date:'2026-03-02',sources:['county-hsu-penghu-20260302'],note:'属于用人方向，具体资格与选任办法暂未确认。'}
 );
 d.sources['county-hsu-penghu-toyama-20191020']={title:'澎湖代表团赴日本富山湾海湾年会',url:'https://tnr.com.tw/?p=116832',date:'2019-10-20',checkedAt:'2026-11-12',publisherId:'other',publisherName:'台湾新论（倾向待核定）',kind:'媒体报道澎湖代表团交流活动'};
 const hsuJapan=hsuPh.evidence.find(x=>x.source==='county-hsu-penghu-japan-2019');
 if(hsuJapan){hsuJapan.date='2019-10-15至20日（会议期间）';hsuJapan.topic='赴日本富山湾分享海洋保育经验';hsuJapan.text='媒体报道，时任澎湖副县长许智富率团赴日本富山湾参加世界最美丽海湾国际年会，介绍澎湖净滩、减塑与海洋保育。';hsuJapan.limit='这是当次国际会议的交流记录；后续合作成果暂未确认，不能推断其对日本政策的整体立场。';hsuJapan.source='county-hsu-penghu-toyama-20191020';}
 d.sources['county-wu-pj-career-cec2018']={title:'2018年朴子市民代表选举公报',url:'https://eebulletin.cec.gov.tw/107/13%E5%98%89%E7%BE%A9%E7%B8%A3/04%E9%84%89%E9%8E%AE%E5%B8%82%E6%B0%91%E4%BB%A3%E8%A1%A8/%E6%9C%B4%E5%AD%90%E5%B8%82%E5%B8%82%E6%B0%91%E4%BB%A3%E8%A1%A8%E7%AC%AC3%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2018年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人选举公报所列经历，任职起止年月未载'};
 const wuPj=d.people.find(p=>p.city==='chiayi-county'&&p.name==='吳品叡');
 if(!wuPj?.countyBrief)throw new Error('Missing candidate: 吳品叡');
 wuPj.countyBrief.work='曾任台灣嘉農國際生物科技企劃部副總經理，及漢唐補習班、漢特美語副班主任';wuPj.countyBrief.extraBioSource='county-wu-pj-career-cec2018';
 d.sources['county-chiu-career-2026']={title:'邱建富个人介绍与经历',url:'https://chiuchienfu.tw/about/',date:'2026年（具体发布日期未列）',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'邱建富竞选团队',kind:'候选人团队自述经历'};
 const chiu=d.people.find(p=>p.city==='changhua'&&p.name==='邱建富');
 if(!chiu?.countyBrief)throw new Error('Missing candidate: 邱建富');
 chiu.countyBrief.office='2002至2010年任彰化縣議員；2010至2018年任彰化市長；2026年6月退黨並以無黨籍參選縣長';chiu.countyBrief.extraBioSource='county-chiu-career-2026';
 chiu.countyBrief.work='已查竞选团队人物介绍及大叶大学杰出校友资料；从政前的具体工作单位、职务与任职年月暂未确认。';
 d.sources['county-chiu-platform-site-20261112']={title:'邱建富核心政见：产业、福利与青年住宅',url:'https://chiuchienfu.tw/policies/',date:'2026年（页面未列发布日期）',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'邱建富竞选团队',kind:'候选人竞选网站政见'};
 const chiuPlatform=[['housing','邱建富提出首年兴办200户、四年累计1000户社会住宅，评估校地再生、土地重划及保四旁土地的都市计划变更。','这是竞选团队的供给目标；选址、土地变更、经费与建设进度需另行审议。'],['water','邱建富提出建设沿海海水淡化厂，结合现有供水系统，达到每日16万吨供水能力，以支持产业用水。','竞选网站描述的是结合现有系统的总供水能力；并未说明新厂单独产能、选址、经费或环评。'],['childcare','邱建富提出设置24小时临时托育中心、提升托育量能，并将生育补助提高至20万元。','属于竞选方案；资格、服务规模、中央与地方分担及经费待进一步确认。']];
 for(const [topic,text,note] of chiuPlatform)if(!chiu.policies.some(x=>x.sources?.includes('county-chiu-platform-site-20261112')&&x.topic===topic))chiu.policies.push({topic,text,type:'本届政见（竞选网站）',basis:'campaign',electionYear:2026,date:'2026年（页面未列发布日期）',sources:['county-chiu-platform-site-20261112'],note});

 d.sources['county-ho-cross-strait-20260923']={title:'何志勇接受中评社访问谈中美关系',url:'https://www.crntt.tw/touch/detail.jsp?coluid=5&docid=160271396&kindid=0',date:'2026-09-23',checkedAt:'2026-11-12',publisherId:'other',publisherName:'中评社（媒体倾向待核定）',kind:'媒体专访转述候选人评论'};
 const ho=d.people.find(p=>p.city==='hsinchu-city'&&p.name==='何志勇');
 if(!ho)throw new Error('Missing candidate: 何志勇');
 for(const region of ['cn','us'])if(!ho.evidence.some(x=>x.region===region&&x.source==='county-ho-cross-strait-20260923'))ho.evidence.push({region,date:'2026-09-23',topic:'受访谈中美关系与台湾处境',text:'何志勇接受中评社访问时认为，台湾应与大陆和美国维持他所称的等距关系，并主张加强自身能力。',limit:'这是候选人在特定采访中的判断，报道中的国际局势判断均归于受访者，不是本站事实结论。',source:'county-ho-cross-strait-20260923'});
 d.sources['county-chang-hl-japan-20260914']={title:'张峻率花莲县议会访问日本龟冈市',url:'https://tcpttw.com/local/2026/09/14/310491/',date:'2026-09-14',checkedAt:'2026-11-12',publisherId:'other',publisherName:'警政时报（媒体倾向待核定）',kind:'媒体报道议会访问与议长发言'};
 const changHl=d.people.find(p=>p.city==='hualien'&&p.name==='張峻');
 if(!changHl)throw new Error('Missing candidate: 張峻');
 if(!changHl.evidence.some(x=>x.source==='county-chang-hl-japan-20260914'))changHl.evidence.push({region:'jp',date:'2026-09-14',topic:'率议会访问日本龟冈市',text:'张峻率花莲县议会访问团拜会龟冈市政府与市议会，表示希望借鉴当地环境、农业与观光治理经验。',limit:'媒体报道一次地方交流；访问和学习意愿不等于双方已有具体合作成果。',source:'county-chang-hl-japan-20260914'});
 d.sources['county-chen-su-yue-cec']={title:'2024年彰化第四选区选举公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/113%E5%B9%B4%E7%AC%AC11%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/10%E5%BD%B0%E5%8C%96%E7%B8%A3/%E7%AC%AC4%E9%81%B8%E8%88%89%E5%8D%80/%E5%BD%B0%E5%8C%96%E7%B8%A3%E7%AB%8B%E5%A7%94%E7%AC%AC4%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2024年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人选举公报所列经历'};
 d.sources['county-wei-career-kmt']={title:'魏平政经历与参选资料',url:'https://knowledge.kmt.org.tw/articles/5e17436b-b56f-449f-befe-d74a3455ad13/',date:'2026-10-21',checkedAt:'2026-11-12',publisherId:'party',publisherName:'中国国民党知识库',kind:'所属政党整理的候选人经历，部分年月仍待独立核对'};
 const chenSu=d.people.find(p=>p.city==='changhua'&&p.name==='陳素月');
 const weiPing=d.people.find(p=>p.city==='changhua'&&p.name==='魏平政');
 if(!chenSu?.countyBrief||!weiPing?.countyBrief)throw new Error('Missing Changhua biographies');
 chenSu.countyBrief.work='曾任國立空中大學講師、大葉大學兼任講師及拓展文教基金會執行長；另任立委國會助理';chenSu.countyBrief.extraBioSource='county-chen-su-yue-cec';
 weiPing.countyBrief.work='政和律師事務所主持律師；曾任台北市政府及大同區公所法律諮詢律師，並在輔仁大學及中正大學相關課程授課';weiPing.countyBrief.office='曾任彰化縣選舉委員會委員、國民黨考紀會主委';weiPing.countyBrief.extraBioSource='county-wei-career-kmt';
 d.sources['county-chiayi-campaign-20261109']={title:'吴品叡提宠物友善政见，蔡易余谈百村小旅行',url:'https://www.cna.com.tw/news/aipl/202611090143.aspx',date:'2026-11-09',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道并转述候选人及竞选团队说法'};
 const chiayiLatest=[['吳品叡','water','吴品叡提出盘点闲置公有空间与环境脏乱点，依场地条件和居民需求规划宠物公园、友善休憩区或人宠共融空间。','这是竞选主张；地点、预算和建设时程尚待公布。'],['蔡易餘','tourism','蔡易余提出以「百村小旅行」串联嘉义地方故事，并表示要推动母语传承。','属于竞选主张；旅游路线、经费及推行方式有待进一步说明。']];
 for(const [name,topic,text,note] of chiayiLatest){const p=d.people.find(x=>x.city==='chiayi-county'&&x.name===name);if(!p)throw new Error('Missing candidate: '+name);if(!p.policies.some(x=>x.sources?.includes('county-chiayi-campaign-20261109')))p.policies.push({topic,text,type:'本届公开主张（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-11-09',sources:['county-chiayi-campaign-20261109'],note});p.policyCoverage=null;}
 d.sources['county-liwu-titv-20260906']={title:'台东县长选战四人登记与李吴颖智受访',url:'https://news.ipcf.org.tw/210431',date:'2026-09-06',checkedAt:'2026-11-12',publisherId:'other',publisherName:'原视新闻（原住民族文化事业基金会）',kind:'原视采访候选人及报道其自述经历'};
 if(!liwuTt.countyBrief)throw new Error('Missing biography: 李吳穎智');
 liwuTt.countyBrief.work='本人自述曾任粗工、清潔工、記者；亦曾從事飯店公關及餐廳管理，單位及起止年月待核';liwuTt.countyBrief.extraBioSource='county-liwu-titv-20260906';
 if(!liwuTt.policies.some(x=>x.sources?.includes('county-liwu-titv-20260906')))liwuTt.policies.push({topic:'economy',text:'李吴颖智提出拨出土地供青年租用地上权，由青年按自身财力评估建屋类型，以回应居住与就业困境。',type:'本届公开主张（原视采访）',basis:'campaign',electionYear:2026,date:'2026-09-06',sources:['county-liwu-titv-20260906'],note:'土地来源、租期、适用对象、融资条件和预算等细节仍待确认。'});
 for(const [person,scope,source] of [[wuPj,'以「吴品叡」「朴子市长」搭配中国大陆、两岸、美国及日本检索公开网页，并查阅选举公报和近期报道','county-wu-pj-career-cec2018'],[liwuTt,'以「李吴颖智」「台东县长」搭配两岸、中国、美国及日本检索公开网页，并查看原视采访和中央社政见报道','county-liwu-titv-20260906']]){if(!person.evidenceCoverage)person.evidenceCoverage={};for(const region of ['cn','us','jp'])if(!person.evidence.some(x=>x.region===region))person.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:scope+'；本次范围内未找到可明确归属于本人的相关表态。',note:'个人社群历史、全部影片及其他未公开资料尚未逐项查核；不能据此推断其立场。',sources:[source]};}
 d.sources['county-luo-hualien-voucher-20260904']={title:'罗佩秦登记参选并提出消费券与灾民协助',url:'https://www.cnma.org.tw/page/news/show.aspx?lang=TW&num=53641',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'other',publisherName:'CNMA新闻联合网（倾向待核定）',kind:'媒体报道候选人登记及公开主张'};
 if(!luo.policies.some(x=>x.sources?.includes('county-luo-hualien-voucher-20260904')))luo.policies.push({topic:'economy',text:'罗佩秦提出每人每月发放2,000元消费券，希望带动花莲地方消费。',type:'本届公开主张（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-04（报道日）',sources:['county-luo-hualien-voucher-20260904'],note:'媒体报道候选人的构想；预算来源、发放资格及可使用商家等细节待核。'});
 luo.policyCoverage=null;
 if(!luo.evidenceCoverage)luo.evidenceCoverage={};
 for(const [region,label] of [['cn','两岸'],['us','美国'],['jp','日本']])if(!luo.evidence.some(x=>x.region===region))luo.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以「罗佩秦」「花莲县长」与'+label+'检索公开网页，另查看登记及灾民协助报道；本次范围内未找到可明确归属于本人的相关表态。',note:'个人社群历史、全部影片和其他未公开资料尚未逐项查核；不能据此推断其立场。',sources:['county-luo-hualien-voucher-20260904','county-luo-hualien-career-20260903']};
 const youHl=d.people.find(p=>p.city==='hualien'&&p.name==='游淑貞');if(!youHl)throw new Error('Missing candidate: 游淑貞');
 d.sources['county-you-rotary-20190623']={title:'游淑贞出席吉安妇女培力活动',url:'https://038.news/archives/56610',date:'2019-06-23',checkedAt:'2026-11-12',publisherId:'other',publisherName:'湾湾新闻（倾向待核定）',kind:'地方媒体报道公益活动与乡长发言'};
 if(!youHl.evidenceCoverage)youHl.evidenceCoverage={};
 if(!youHl.evidence.some(x=>x.region==='us'))youHl.evidenceCoverage.us={checkedAt:'2026-11-12',scope:'以「游淑贞」「吉安乡长」及美国检索公开网页；找到她感谢包含美国扶轮社在内的公益合作，但未找到对美国政策的明确表态。',note:'公益致谢不能代表外交立场；个人社群、全部影片与其他资料尚未逐项查核。',sources:['county-you-rotary-20190623']};
 d.sources['county-wu-yunlin-platform-20260903']={title:'吴炳辉提出云林县政改革方向',url:'https://www.chinatimes.com/realtimenews/20260903003002-260407',date:'2026-09-03',checkedAt:'2026-11-12',publisherId:'chinatimes',publisherName:'中国时报',kind:'媒体报道候选人本届政策，原页面限制读取；参照公开转载核对'};
 d.sources['county-wu-yunlin-platform-copy-20260903']={title:'吴炳辉政见报道公开转载',url:'https://disp.cc/ptt/Gossiping/1gcJI2bh',date:'2026-09-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'PTT转载（原发中国时报）',kind:'网民转载报道正文；转载不构成独立证实'};
 d.sources['county-wu-yunlin-cec-2024']={title:'2024年云林第一选区立委选举公报：吴炳辉',url:'https://eebulletin.cec.gov.tw/113/02%E7%AC%AC11%E5%B1%86%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1%E9%81%B8%E8%88%89/12%E9%9B%B2%E6%9E%97%E7%B8%A3/%E7%AC%AC1%E9%81%B8%E8%88%89%E5%8D%80/%E9%9B%B2%E6%9E%97%E7%B8%A3%E7%AC%AC11%E5%B1%86%E7%AB%8B%E5%A7%94-%E7%AC%AC%E4%B8%80%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2024年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'云林县选举委员会',kind:'候选人自行填报资料；部分具体任职年月待核'};
 wuCareer.countyBrief.work='2024年公報自列義照律師事務所主持律師，及交通部道路安全諮詢委員等經歷；民視2026年報導其執業逾30年，任職年月待核';wuCareer.countyBrief.extraBioSource='county-wu-yunlin-cec-2024';
 const wuItems=[['economy','吴炳辉主张针对农地因国土规划限制开发的情况，争取中央编列农业权补偿金。','补偿对象、标准、财源与法律依据均待进一步说明；地方政府不能自行修改中央法律。'],['health','吴炳辉提出在草岭等山区和沿海偏乡扩大远距医疗、医消联防及长青食堂。','属于候选人提出的服务方向；地点、服务量和预算仍待公布。'],['economy','吴炳辉提出加速县内产业园区发展，吸引投资并创造较高薪的工作机会。','园区选址、产业类型与实际就业成效需另核，不能将愿景写成已完成投资。']];
 for(const [topic,text,note] of wuItems)if(!wuYl.policies.some(x=>x.sources?.includes('county-wu-yunlin-platform-20260903')&&x.text===text))wuYl.policies.push({topic,text,type:'本届政见（媒体报道转载）',basis:'campaign',electionYear:2026,date:'2026-09-03',sources:['county-wu-yunlin-platform-20260903','county-wu-yunlin-platform-copy-20260903'],note});
 wuYl.policyCoverage=null;
 if(!wuYl.evidenceCoverage)wuYl.evidenceCoverage={};
 for(const [region,label] of [['cn','中国大陆／两岸'],['us','美国'],['jp','日本']])if(!wuYl.evidence.some(x=>x.region===region))wuYl.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以「吴炳辉」「云林」「律师」及'+label+'检索公开网页，查阅2024年公报与本届政见报道；本次范围内未找到可明确归属于本人的相关表态。',note:'检索存在同名者，未将身份未经确认的资料计入；个人社群和全部影片尚未逐一查核。',sources:['county-wu-yunlin-cec-2024','county-wu-yunlin-platform-copy-20260903']};
 d.sources['county-lin-yilan-sea-20260511']={title:'林国漳提出海洋新宜兰与日本蓝色公路',url:'https://www.cna.com.tw/news/aloc/202605110187.aspx',date:'2026-05-11',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道候选人记者会与本届主张'};
 d.sources['county-lin-yilan-moea-monitor']={title:'经济部转投资事业公股代表名册',url:'https://www.moea.gov.tw/Mns/CNC/content/wHandMenuFile.ashx?file_id=8334',date:'名册所列任期 2024-01-24 至 2027-01-23',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'经济部',kind:'政府公股代表名册；任期不证明其间无变更'};
 const linYilan=d.people.find(p=>p.city==='yilan'&&p.name==='林國漳');if(!linYilan?.countyBrief)throw new Error('Missing candidate: 林國漳');
 linYilan.countyBrief.work='律師，曾任宜蘭縣律師公會理事長、宜蘭社區大學講師；經濟部名冊列其為國光電力公股監察人，名冊所列任期為2024年1月至2027年1月，是否中途變動待核';linYilan.countyBrief.extraBioSource='county-lin-yilan-moea-monitor';
 const linSea=[['tourism','林国漳提出打造苏澳通往日本的「国际蓝色公路」，结合宜兰沿海渔村及海洋观光活动。','航线、经费、港口设施、主管机关许可及营运可行性尚待具体方案。'],['economy','林国漳提出收购老旧渔船、辅导年长渔民退休，并引进冷链与宜兰品牌认证提升渔获价值。','船只收购与退休辅导的条件、规模及财源尚待公布。'],['economy','林国漳提出在苏澳推动智慧海湾，引进海洋科技与无人机产业，并设立海洋发展办公室协调资源。','招商对象、经费与就业效果仍待具体规划，不代表已有投资。']];
 for(const [topic,text,note] of linSea)if(!linYilan.policies.some(x=>x.sources?.includes('county-lin-yilan-sea-20260511')&&x.text===text))linYilan.policies.push({topic,text,type:'本届公开主张（记者会报道）',basis:'campaign',electionYear:2026,date:'2026-05-11',sources:['county-lin-yilan-sea-20260511'],note});
 linYilan.policyCoverage=null;
 d.sources['county-yang-yilan-roster-20260904']={title:'宜兰县选举登记截止，杨鉯婷完成登记',url:'https://www.travelnews.tw/news/2026%E5%AE%9C%E8%98%AD%E9%81%B8%E8%88%89771%E4%BA%BA%E5%AE%8C%E6%88%90%E7%99%BB%E8%A8%98-5%E4%BA%BA%E8%A7%92%E9%80%90%E5%AE%9C%E8%98%AD%E7%B8%A3%E9%95%B7/',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'other',publisherName:'宜兰新闻网（倾向待核定）',kind:'地方媒体报道选委会登记资料'};
 d.sources['county-yang-yilan-policy-20261104']={title:'宜兰县长候选人政见对照与缺漏',url:'https://n.yam.com/article/20261104622723',date:'2026-11-04',checkedAt:'2026-11-12',publisherId:'other',publisherName:'蕃新闻（倾向待核定）',kind:'候选人政见整理；说明未见杨鉯婷具体政见'};
 d.sources['county-yang-yilan-photo-search']={title:'2026候选人名录：杨鉯婷照片状态',url:'https://taiwanpoliticalzoo.com/other-cities/yilan/',date:null,checkedAt:'2026-11-12',publisherId:'other',publisherName:'台湾选举懒人包（倾向待核定）',kind:'民间候选人名录；照片未收录'};
 const yangYilan=d.people.find(p=>p.city==='yilan'&&p.name==='楊鉯婷');if(!yangYilan)throw new Error('Missing candidate: 楊鉯婷');
 d.sources['county-yang-yilan-bio-index-20261112']={title:'宜兰县长候选人背景资料',url:'https://civicwind.app/yilan',date:'资料更新至2026-11-11',checkedAt:'2026-11-12',publisherId:'other',publisherName:'公民风向观测站（资料汇编；倾向待核定）',kind:'候选人背景汇编，原始经历资料未取得'};
 if(yangYilan.countyBrief){yangYilan.countyBrief.work='公民风向观测站资料汇编称曾在不同产业工作；具体单位、职务与起止年月暂未确认，原始经历资料尚未取得。';yangYilan.countyBrief.extraBioSource='county-yang-yilan-bio-index-20261112';}
 d.sources['county-chen-yilan-engineer-20260901']={title:'宜兰县长选举登记与陈宏毅工作背景',url:'https://org-today.line-apps.com/tw/v3/article/LXyzMgn',date:'2026-09-01',checkedAt:'2026-11-12',publisherId:'ltn',publisherName:'自由时报（LINE TODAY转载）',kind:'媒体报道候选人登记及工作经历'};
 const chenYilan=d.people.find(p=>p.city==='yilan'&&p.name==='陳宏毅');if(!chenYilan?.countyBrief)throw new Error('Missing biography: 陳宏毅');
 chenYilan.countyBrief.work='自由时报2026年9月报道，陈宏毅在北部科技公司担任资深设计工程师；公司名称、具体工作内容及任职起止年月暂未确认。';chenYilan.countyBrief.extraBioSource='county-chen-yilan-engineer-20260901';
 if(!yangYilan.photo)yangYilan.photoCoverage={label:'暂未确认',checkedAt:'2026-11-12',note:'已查自由时报候选人名录、台湾选举懒人包及宜兰登记报道；本次未找到可明确对应本人的照片。尚未查核候选人全部社群及后续选举公报。',sources:['county-ltn-photos','county-yang-yilan-photo-search','county-yang-yilan-roster-20260904']};
 d.sources['county-yang-yilan-ballot-name-20261027']={title:'宜兰县长选举抽签结果',url:'https://www.cec.gov.tw/api/file/a8881295-c06b-400f-9e9b-10bd6a080842.pdf',date:'2026-10-27（抽签日）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'选举委员会（中央选举委员会网站）',kind:'抽签结果；第5号姓名写作杨钰婷，与多家候选人名录写法不同'};
 yangYilan.policyCoverage={checkedAt:'2026-11-12',note:'已查宜兰登记报道、候选人政见对照及公开姓名检索；暂未找到可归属于本人的具体本届政见。姓名存在资料差异：选委会抽签表第5号写作「杨钰婷」，登记报道和多家名录写作「杨鉯婷」，确切写法待正式公告核对。个人社群完整内容及后续选举公报尚未逐项核查。',sources:['county-yang-yilan-roster-20260904','county-yang-yilan-policy-20261104','county-yang-yilan-ballot-name-20261027']};
 if(!yangYilan.evidenceCoverage)yangYilan.evidenceCoverage={};
 for(const [region,label] of [['cn','中国大陆／两岸'],['us','美国'],['jp','日本']])if(!yangYilan.evidence.some(x=>x.region===region))yangYilan.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以「杨鉯婷」「宜兰县长」搭配'+label+'检索公开网页，并查看登记报道和候选人名录；本次范围内未找到可明确归于本人的相关表态。',note:'同名资料未确认身份不予采纳；个人社群及全部影片尚未逐项查核，不能据此推断其立场。',sources:['county-yang-yilan-roster-20260904','county-yang-yilan-photo-search']};
 d.sources['county-wang-meihui-bio-ly']={title:'立法院王美惠委员简介',url:'https://www.ly.gov.tw/Pages/List.aspx?nodeid=46761',date:null,checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院',kind:'委员研究室提供的公开经历'};
 const wangMh=d.people.find(p=>p.city==='chiayi-city'&&p.name==='王美惠');if(!wangMh?.countyBrief)throw new Error('Missing candidate: 王美惠');
 wangMh.countyBrief.work='立法院委员简介列曾任嘉义市议员江熙哲服务处主任；任职起止年月待核';wangMh.countyBrief.extraBioSource='county-wang-meihui-bio-ly';
 d.sources['county-chiayi-education-20261106']={title:'嘉义市长候选人教育政见比较',url:'https://udn.com/vote2026/story/124652/9861008',date:'2026-11-06',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道两位候选人的教育主张'};
 const chiayiEducation=[
  {name:'王美惠',items:[['education','王美惠提出加码学校营养午餐经费，并补助学童参加全民英检的报名费。','报道没有列出加码金额、适用资格及预算来源；嘉义市既有午餐政策需另行对照。'],['education','王美惠提出支持青年出国参加竞赛、表演及展览，并建设幼儿图书馆与社区运动据点。','属于竞选构想，资助标准、选址与预算尚待说明。']]},
  {name:'張啓楷',items:[['education','张启楷提出优先聘用正式教师、推动教师调薪机制透明化，并增聘专职行政助理以减轻教师行政负担。','教师聘用、薪资权限与经费安排须依相关制度及预算评估。'],['education','张启楷提出设立独立校园律师和法律服务中心，并检讨校事会议召开的标准。','属于候选人方案，律师配置、独立性与实际运作方式尚待说明。']]}
 ];
 for(const r of chiayiEducation){const p=d.people.find(x=>x.city==='chiayi-city'&&x.name===r.name);if(!p)throw new Error('Missing candidate: '+r.name);for(const [topic,text,note] of r.items)if(!p.policies.some(x=>x.text===text))p.policies.push({topic,text,type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-11-05（发表）',sources:['county-chiayi-education-20261106'],note});}
 d.sources['county-chen-arts-career-ncaf-20211231']={title:'国艺会策展人档案：陈愷璜自述专业经历',url:'https://archive.ncafroc.org.tw/curation/curator?id=bd9eba067e05aecb017e05aeffc8000a',date:'资料提供于2021-12-31',checkedAt:'2026-11-12',publisherId:'other',publisherName:'国家文化艺术基金会',kind:'本人提供的策展与专业经历；截至2021年'};
 const chenArts=d.people.find(p=>p.city==='chiayi-city'&&p.name==='陳愷璜');if(!chenArts?.countyBrief)throw new Error('Missing candidate: 陳愷璜');
 chenArts.countyBrief.work='国艺会2021年策展档案列其曾任北艺大美术系主任、学务长与美术学院院长，2017年起任校长；另列2000年网络科技公司CEO、1996年设计工作室艺术总监。各职位起止及现况以学校与机构后续资料为准。';chenArts.countyBrief.extraBioSource='county-chen-arts-career-ncaf-20211231';
 d.sources['county-wang-yicheng-registration-20260903']={title:'王义成登记参选嘉义市长及其登记经历',url:'https://udn.com/news/story/124652/9731484',date:'2026-09-03',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道登记及本人回应'};
 d.sources['county-huang-chiayi-profile-20260926']={title:'黄宏成台灣阿成世界偉人財神總統谈参选与筹款',url:'https://www.cna.com.tw/news/aloc/202609263002.aspx',date:'2026-09-26',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体专访候选人'};
 d.sources['county-huang-chiayi-policy-index']={title:'候选人政见摘要与所附远见选情页面',url:'https://taiwanpoliticalzoo.com/candidates/26b00000-0000-4000-8000-000000000012/',date:'资料库查阅 2026-11-12',checkedAt:'2026-11-12',publisherId:'other',publisherName:'台湾选举懒人包',kind:'民间资料库摘要；原始发言未独立核对'};
 const wangYc=d.people.find(p=>p.city==='chiayi-city'&&p.name==='王義成');if(!wangYc?.countyBrief)throw new Error('Missing candidate: 王義成');
 wangYc.countyBrief.work='登记经历栏列出《天下第二富裕之门》《新加坡逛吃悟》两本著作；其他具体工作单位、职务和任职年月暂未确认';wangYc.countyBrief.extraBioSource='county-wang-yicheng-registration-20260903';
 wangYc.policyCoverage={checkedAt:'2026-11-12',note:'已查登记报道、远见选情页及公开网页；报道记录其参选时表示希望帮助有需要的人，但未说明具体措施。本届具体政见暂未确认；个人社群及后续公办政见会尚未逐项查核。',sources:['county-wang-yicheng-registration-20260903']};
 const huangCc=d.people.find(p=>p.city==='chiayi-city'&&p.name==='黃宏成台灣阿成世界偉人財神總統');if(!huangCc?.countyBrief)throw new Error('Missing candidate: 黄宏成');
 huangCc.countyBrief.work='2026年受访自述曾以销售出版物、食品及文具等方式筹集选举经费；具体单位、职务与起止年月暂未确认';huangCc.countyBrief.extraBioSource='county-huang-chiayi-profile-20260926';
 huangCc.policyCoverage={checkedAt:'2026-11-12',note:'已查中央社专访、2022年选举公报及本届政见资料库。民间资料库归纳长者健保、行人安全与捐薪等主张，并指向远见选情页；本次未能独立读到原始发言，具体内容、发表时间与本届适用性暂未确认。后续公报和政见会尚待核对。',sources:['county-huang-chiayi-profile-20260926','county-huang-chiayi-policy-index']};
 for(const [person,terms,source] of [[wangYc,'王义成、嘉义市长',['county-wang-yicheng-registration-20260903']],[huangCc,'黄宏成、财神总统、嘉义市长',['county-huang-chiayi-profile-20260926','county-huang-chiayi-policy-index']]]){if(!person.evidenceCoverage)person.evidenceCoverage={};for(const [region,label] of [['cn','中国大陆／两岸'],['us','美国'],['jp','日本']])if(!person.evidence.some(x=>x.region===region))person.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以「'+terms+'」搭配「'+label+'」检索公开网页，并查看登记或专访资料；本次未找到可明确归属于本人的相关政策表态。',note:'同名资料、历史活动或单次旅行不直接等同政治立场；个人社群、全部影片及后续政见会尚未逐项查核。',sources:source};}
 d.sources['county-chen-kinmen-career-20200131']={title:'陈玉珍获颁立委当选证书及早年经历',url:'https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=C9728C7E28A117F3&sms=BF7D6D478B935644',date:'2020-01-31',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'金门县政府网站（金门日报报道）',kind:'地方新闻记载人物经历'};
 const chenKm=d.people.find(p=>p.city==='kinmen'&&p.name==='陳玉珍');if(!chenKm?.countyBrief)throw new Error('Missing candidate: 陈玉珍');
 chenKm.countyBrief.work='金门县政府网站转载报道记载，她自1999年起担任时任县议会议长陈水木的助理；任职结束时间待核';chenKm.countyBrief.extraBioSource='county-chen-kinmen-career-20200131';
 d.sources['county-chen-kinmen-transit-20261111']={title:'陈玉珍专访：小三通过境消费构想',url:'https://www.businesstoday.com.tw/article/category/183027/post/202611110049/',date:'2026-11-11（报道日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'今周刊（倾向待核定）',kind:'媒体专访候选人'};
 if(!chenKm.policies.some(x=>x.sources?.includes('county-chen-kinmen-transit-20261111')))chenKm.policies.push({topic:'economy',text:'陈玉珍提出，若过境旅客码头建设费提高300元，可让旅客获得等值点数，在金门线上商城购买地方商品；未使用点数则进入县库用于码头建设。',type:'本届政见（媒体专访）',basis:'campaign',electionYear:2026,date:'2026-11-11（报道日）',sources:['county-chen-kinmen-transit-20261111'],note:'加费仍需主管机关审议；点数适用资格、法律与结算机制、对旅客及商家的实际效果待核。'});
 d.sources['county-chang-kinmen-platform-20261025']={title:'张国威成立竞选总部并说明政见',url:'https://www.cna.com.tw/news/aloc/202610250060.aspx',date:'2026-10-25',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人致词'};
 const changKm=d.people.find(p=>p.city==='kinmen'&&p.name==='張國威');if(!changKm)throw new Error('Missing candidate: 张国威');
 if(!changKm.policies.some(x=>x.sources?.includes('county-chang-kinmen-platform-20261025')))changKm.policies.push({topic:'tourism',text:'张国威提出打造国际旅游岛，加强金门酒厂品牌与营销，并推广闽南、战地和侨乡文化。',type:'本届政见（竞选总部成立致词）',basis:'campaign',electionYear:2026,date:'2026-10-25',sources:['county-chang-kinmen-platform-20261025'],note:'报道记录施政方向，具体项目、预算和执行时程待公布。'});
 d.sources['county-li-kinmen-career-20260522']={title:'李文良宣布参选及教育工作经历',url:'https://www.cna.com.tw/news/aloc/202605220284.aspx',date:'2026-05-22',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人参选及经历'};
 const liKm=d.people.find(p=>p.city==='kinmen'&&p.name==='李文良');if(!liKm?.countyBrief)throw new Error('Missing candidate: 李文良');
 liKm.countyBrief.work='曾在国立金门大学运动与休闲系任教及任总务长；后任金门县政府教育处长和副县长；各职务起止年月待补';liKm.countyBrief.extraBioSource='county-li-kinmen-career-20260522';
 d.sources['county-li-kinmen-education-20260930']={title:'李文良提出教育政策方向',url:'https://www.kmdn.gov.tw/1117/1271/1272/590557/',date:'2026-09-30（报道日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（倾向待核定）',kind:'地方媒体报道候选人教育政策'};
 if(!liKm.policies.some(x=>x.sources?.includes('county-li-kinmen-education-20260930')))liKm.policies.push(
  {topic:'education',text:'李文良提出研议贯通小学、初中和高中的办学模式，并在人工智能教育中纳入信息查证、数字伦理和教师培训。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-30（报道日）',sources:['county-li-kinmen-education-20260930'],note:'属于研议方向；校舍、师资、预算及教育主管机关核准条件须另核。'},
  {topic:'education',text:'李文良提出通过姐妹校、交换学习、国际营队及线上合作，扩大金门学生的国际交流机会，并以地方文化和海洋生态发展「金门岛屿学」。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-30（报道日）',sources:['county-li-kinmen-education-20260930'],note:'这是竞选构想；参与人数、对象、预算与合作学校尚待确认。'}
 );
 d.sources['county-tung-keelung-work-20261014']={title:'童子玮从家族事业转向参选的专访',url:'https://www.mnews.tw/story/amp/mm-20261012pol002',date:'2026-10-14（刊载日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'镜周刊（镜新闻网站刊载；倾向待核定）',kind:'媒体人物专访'};
 const tungKl=d.people.find(p=>p.city==='keelung'&&p.name==='童子瑋');if(!tungKl?.countyBrief)throw new Error('Missing candidate: 童子玮');
 tungKl.countyBrief.work='据镜周刊专访，2018年参选议员前曾在家族通信工程事业工作约六至七年；具体职务和年月待核';tungKl.countyBrief.extraBioSource='county-tung-keelung-work-20261014';
 d.sources['county-hsieh-keelung-career-ly']={title:'立法院第八届立委名鉴：谢国樑',url:'https://lis.ly.gov.tw/lghtml/work/_K5_ttsbooke3.pdf?1643960239=',date:'第八届立委名鉴',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院',kind:'立法委员名鉴所列经历'};
 const hsiehKl=d.people.find(p=>p.city==='keelung'&&p.name==='謝國樑');if(!hsiehKl?.countyBrief)throw new Error('Missing candidate: 谢国樑');
 hsiehKl.countyBrief.work='曾任华联国际多媒体董事长；立法院第八届名鉴另列公诚证券总经理及证券暨期货管理委员会研究员，任职年月待核';hsiehKl.countyBrief.extraBioSource='county-hsieh-keelung-career-ly';
 d.sources['county-keelung-metro-debate-20261111']={title:'基隆捷运二阶段辩论与市府澄清',url:'https://udn.com/vote2026/story/124652/9870700',date:'2026-11-11',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人辩论及市府交通处回应'};
 d.sources['county-tung-metro-20261111']={title:'童子玮辩论后说明捷运与台铁原则',url:'https://udn.com/vote2026/story/124652/9872085',date:'2026-11-11',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人提出的五项原则'};
 if(!tungKl.policies.some(x=>x.sources?.includes('county-tung-metro-20261111')))tungKl.policies.push({topic:'transport',text:'童子玮在辩论后提出保留台铁，研究利用既有路廊以高架或地下方式推动捷运与台铁共构，并先改善客运与公交接驳。',type:'本届政见（辩论后说明）',basis:'campaign',electionYear:2026,date:'2026-11-11',sources:['county-tung-metro-20261111','county-keelung-metro-debate-20261111'],note:'路线、费用、土地及施工须经专业评估；他对庙宇可能拆迁的质疑遭市府交通处否认。'});
 if(!hsiehKl.policies.some(x=>x.sources?.includes('county-keelung-metro-debate-20261111')))hsiehKl.policies.push({topic:'transport',text:'谢国樑主张保留台铁，让基隆捷运第二阶段经安乐区进入市区；其市府表示将继续深化路线规划并与中央沟通。',type:'本届政见（辩论及市府说明）',basis:'campaign',electionYear:2026,date:'2026-11-10 至 11-11',sources:['county-keelung-metro-debate-20261111'],note:'尚需完成相关评估及审议；市府澄清双方辩论时对拆迁数字的说法均有误差。'});
 d.sources['county-chuang-nycu-cv']={title:'莊競程教师履历',url:'https://www.nycu.edu.tw/userfiles/ibech/files/20260416160700419.pdf',date:'2026年学校公布履历',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立阳明交通大学',kind:'大学公布教师履历'};
 const chuangHc=d.people.find(p=>p.city==='hsinchu-city'&&p.name==='莊競程');if(!chuangHc?.countyBrief)throw new Error('Missing candidate: 莊競程');
 chuangHc.countyBrief.work='阳明交大公布履历列其2012至2014年从事博士后研究；2014至2020年任交通大学生医工程研究所项目助理教授、助理教授；2021年2月至2025年7月任阳明交大生医工程研究所助理教授，2025年8月起任智慧医电工程研究所助理教授；曾任台湾智库执行长。学校履历所列现职截至公布时点。';chuangHc.countyBrief.extraBioSource='county-chuang-nycu-cv';
 d.sources['county-chang-taoyuan-career-ey2014']={title:'张善政出任首任科技部部长及经历',url:'https://www.ey.gov.tw/Page/9277F759E41CCD91/c0468257-36ba-40fc-909d-778ea6dee156',date:'2014-02-26',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'行政院',kind:'官方任命新闻与履历'};
 const changTy=d.people.find(p=>p.city==='taoyuan'&&p.name==='張善政');if(!changTy?.countyBrief)throw new Error('Missing candidate: 張善政');
 changTy.countyBrief.work='行政院公布的履历列其1981年返台任教，历任台湾大学土木工程学系讲师、副教授、教授，国家高速电脑中心主任、宏碁电子化事业群副总经理和Google亚洲营运总监；各职务结束年月待核。';changTy.countyBrief.extraBioSource='county-chang-taoyuan-career-ey2014';
 d.sources['county-chang-taoyuan-daxi-20261028']={title:'张善政大溪竞选服务处成立谈交通',url:'https://udn.com/news/story/124652/9842779',date:'2026-10-28',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道本人竞选活动发言'};
 d.sources['county-taoyuan-policy-compare-20261103']={title:'桃园市长政见对照与市府说明',url:'https://n.yam.com/article/20261103516378',date:'2026-11-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',kind:'媒体对候选人主张及市府施政的整理'};
 if(!changTy.policies.some(x=>x.sources?.includes('county-chang-taoyuan-daxi-20261028')))changTy.policies.push({topic:'transport',text:'张善政在大溪竞选活动提出短期调整交通信号、中期建设跨大汉溪第三座桥，长期规划捷运绿线经八德延伸大溪河西并跨河至河东老城区。',type:'本届政见（竞选活动）',basis:'campaign',electionYear:2026,date:'2026-10-28',sources:['county-chang-taoyuan-daxi-20261028'],note:'捷运可行性研究当时已送交通部审查，路线、站位、经费及核定结果须继续核对；改善成效属于候选人预期。'});
 if(!changTy.policies.some(x=>x.sources?.includes('county-taoyuan-policy-compare-20261103')))changTy.policies.push(
  {topic:'housing',text:'张善政提出2030年前完成一万户社会住宅，并以可负担住宅为购屋者提供另一种选择。',type:'本届主张及市政延续（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-03（报道日）',sources:['county-taoyuan-policy-compare-20261103'],note:'目标不是完工数；可负担住宅的产权、贷款、售价及转售限制需以正式制度为准。'},
  {topic:'health',text:'张善政规划兴建八德市立医院总院及三处分院，作为桃园扩充医疗资源的方向。',type:'市政延续（媒体整理）',basis:'administration',electionYear:2026,date:'2026-11-03（报道日）',sources:['county-taoyuan-policy-compare-20261103'],note:'属于建设规划；各院区工程、预算和启用时间须分别核实。'},
  {topic:'health',text:'张善政市府规划2027年扩大敬老爱心卡使用项目，现行每月800点不变。',type:'市政延续（媒体整理）',basis:'administration',electionYear:2026,date:'2026-11-03（报道日）',sources:['county-taoyuan-policy-compare-20261103'],note:'具体使用资格与各项目额度以正式公告为准；不得与黄世杰提出的每月1200点方案混同。'}
 );
 const huangTy=d.people.find(p=>p.city==='taoyuan'&&p.name==='黃世杰');if(!huangTy)throw new Error('Missing candidate: 黃世杰');
 if(!huangTy.policies.some(x=>x.sources?.includes('county-taoyuan-policy-compare-20261103')))huangTy.policies.push({topic:'health',text:'黄世杰提出补助12岁以下儿童及65岁以上长者的健保费。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-03（报道日）',sources:['county-taoyuan-policy-compare-20261103'],note:'补助资格、覆盖对象、预算与上路时间须以正式方案为准。'});
 d.sources['county-wei-keelung-civic-20261108']={title:'基隆民间团体公布市长候选人承诺回应',url:'https://udn.com/news/story/7328/9865646',date:'2026-11-08（报道日）',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道民间团体公布的候选人回应'};
 d.sources['county-wei-keelung-interview-20261027']={title:'魏造文抽签后谈参选原因',url:'https://udn.com/vote2026/story/124652/9839561',date:'2026-10-27',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体采访候选人'};
 const weiCivicKl=d.people.find(p=>p.city==='keelung'&&p.name==='魏造文');if(!weiCivicKl)throw new Error('Missing candidate: 魏造文');
 if(!weiCivicKl.policies.some(x=>x.sources?.includes('county-wei-keelung-interview-20261027')))weiCivicKl.policies.push(
  {topic:'economy',text:'魏造文认为基隆产业没落、年轻人外出就业与少子化有关，希望找出人口流失的原因。',type:'本届施政观点（媒体采访）',basis:'campaign',electionYear:2026,date:'2026-10-27',sources:['county-wei-keelung-interview-20261027'],note:'这是候选人对问题的判断；报道没有列出具体就业或人口政策，因果关系也须另行检验。'},
  {topic:'water',text:'魏造文认为基隆市政建设不足，并指出台风或大雨时市区道路淹水的问题。',type:'本届施政观点（媒体采访）',basis:'campaign',electionYear:2026,date:'2026-10-27',sources:['county-wei-keelung-interview-20261027'],note:'报道没有列出具体防洪措施、工程、预算或时程；不能把问题判断当作已提出解决方案。'}
 );
 if(!weiCivicKl.policies.some(x=>x.sources?.includes('county-wei-keelung-civic-20261108')))weiCivicKl.policies.push({topic:'accountability',text:'民间团体表示，魏造文签署其政策承诺，对12项诉求中「文化资产与水岸活化」保留，其余11项表示同意；诉求涵盖生态、教育、劳工安全及财政纪律等领域。',type:'本届政见（回应民团诉求）',basis:'campaign',electionYear:2026,date:'2026-11-03（签署）',sources:['county-wei-keelung-civic-20261108'],note:'这是对民间团体诉求的回应；报道未逐一刊出其余11项条文，不能自行扩写细节、预算或执行时程。'});
 weiCivicKl.policyCoverage={checkedAt:'2026-11-12',note:'已查：本人10月27日谈及人口流失与道路淹水；民团11月公布其承诺回应。暂未确认：其余11项诉求的逐条原文，以及人口和防洪措施的具体方案、预算与时程。尚未查核：个人社群完整发言及后续公办政见会。',sources:['county-wei-keelung-interview-20261027','county-wei-keelung-civic-20261108']};
 d.sources['county-liang-registration-20260904']={title:'梁文韬登记参选金门县长',url:'https://www.kmdn.gov.tw/1117/1271/1272/589923?cprint=pt',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（金门县政府所属报社）',kind:'媒体报道候选人登记时的主张'};
 if(!liang.policies.some(x=>x.sources?.includes('county-liang-registration-20260904')))liang.policies.push(
  {topic:'education',text:'梁文韬提出推动混级教育、因材施教，回应金门少子化问题。',type:'本届政见（登记时受访）',basis:'campaign',electionYear:2026,date:'2026-09-04（报道日）',sources:['county-liang-registration-20260904'],note:'报道没有列出适用学校、师资安排、预算及执行时间。'},
  {topic:'economy',text:'梁文韬提出在金门酒厂的基础上发展观光和轻工业，回应产业空洞化。',type:'本届政见（登记时受访）',basis:'campaign',electionYear:2026,date:'2026-09-04（报道日）',sources:['county-liang-registration-20260904'],note:'属于产业发展方向；报道未列具体项目、投资及财源。'},
  {topic:'health',text:'梁文韬提出重建社区并增加健康公园，营造高龄友善环境。',type:'本届政见（登记时受访）',basis:'campaign',electionYear:2026,date:'2026-09-04（报道日）',sources:['county-liang-registration-20260904'],note:'报道未列具体地点、设施、预算及执行时间。'}
 );
 d.sources['county-huang-taoyuan-career-cec2020']={title:'2020年桃园市第二选区立委选举公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/04%E6%A1%83%E5%9C%92%E5%B8%82/%E6%A1%83%E5%9C%92%E5%B8%82%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1%E7%AC%AC2%E9%81%B8%E5%8D%80%20.pdf',date:'2020年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人自列学历及经历'};
 huangTy.countyBrief.work='曾任国际通商法律事务所律师；2020年选举公报自列桃园市政府参议、顾问，桃园市客家文化基金会监察人及农业工程研究中心董事；各职起止年月暂未确认。';huangTy.countyBrief.extraBioSource='county-huang-taoyuan-career-cec2020';
 d.sources['county-chang-yunlin-work-20260622']={title:'张嘉郡人物侧写与工作经历',url:'https://udn.com/vote2026/story/124652/9579725',date:'2026-06-22',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体人物侧写'};
 const changYunWork=d.people.find(p=>p.city==='yunlin'&&p.name==='張嘉郡');if(!changYunWork?.countyBrief)throw new Error('Missing candidate: 張嘉郡');
 changYunWork.countyBrief.work='据联合报人物侧写，留学返台后曾短暂在大学任教，也曾担任时任立委张丽善的助理；任教学校、职称及各职起止年月暂未确认。';changYunWork.countyBrief.extraBioSource='county-chang-yunlin-work-20260622';
 d.sources['county-liu-yunlin-work-20220912']={title:'刘建国早年工作与从政经历专访',url:'https://www.mirrormedia.mg/story/amp/20220911soc011',date:'2022-09-12',checkedAt:'2026-11-12',publisherId:'other',publisherName:'镜周刊（倾向待核定）',kind:'媒体人物专访'};
 const liuYunWork=d.people.find(p=>p.city==='yunlin'&&p.name==='劉建國');if(!liuYunWork?.countyBrief)throw new Error('Missing candidate: 劉建國');
 liuYunWork.countyBrief.work='镜周刊专访记载其年轻时曾在卡拉OK店端盘子，后来从地方民意代表踏入政坛；工作单位与任职年月暂未确认。';liuYunWork.countyBrief.extraBioSource='county-liu-yunlin-work-20220912';
 d.sources['county-hsu-nantou-career-moi']={title:'内政部县市长资料：许淑华',url:'https://www.moi.gov.tw/LocalOfficial_Content.aspx?TYP=KND0005&_PARENT_ID=MYR11201ME0001&_TYP=MYR&n=579',date:'2022年县市长选举后资料',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'内政部',kind:'官方县市长简历'};
 const hsuNantouWork=d.people.find(p=>p.city==='nantou'&&p.name==='許淑華');if(!hsuNantouWork?.countyBrief)throw new Error('Missing candidate: 許淑華');
 hsuNantouWork.countyBrief.work='内政部简历列曾任南投县商业总会第21届理事长；该职为商会职务，任职起止年月及其他具体工作经历暂未确认。';hsuNantouWork.countyBrief.extraBioSource='county-hsu-nantou-career-moi';
 d.sources['county-wen-nantou-work-20260114']={title:'民进党提名记者会介绍温世政经历',url:'https://www.taisounds.com/news/content/70/236156',date:'2026-01-14',checkedAt:'2026-11-12',publisherId:'other',publisherName:'太报（倾向待核定）',kind:'媒体报道政党提名记者会对候选人经历的介绍'};
 const wenNantouWork=d.people.find(p=>p.city==='nantou'&&p.name==='温世政');if(!wenNantouWork?.countyBrief)throw new Error('Missing candidate: 温世政');
 wenNantouWork.countyBrief.work='2026年民进党提名记者会介绍其为世桦牙医诊所院长、新北市牙医师公会及台湾植牙学会理事长，并曾在美国密西根大学从事牙周病研究与教学；各职起止年月暂未确认。';wenNantouWork.countyBrief.extraBioSource='county-wen-nantou-work-20260114';
 d.sources['county-chang-hualien-career-cec2022']={title:'2022年花莲县第三选区议员选举公报',url:'https://eebulletin.cec.gov.tw/111/16%E8%8A%B1%E8%93%AE%E7%B8%A3/02%E7%B8%A3%E8%AD%B0%E5%93%A1/%E8%8A%B1%E8%93%AE%E7%B8%A3%E7%AC%AC3%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'花莲县选举委员会',kind:'候选人自列经历'};
 const changHualienWork=d.people.find(p=>p.city==='hualien'&&p.name==='張峻');if(!changHualienWork?.countyBrief)throw new Error('Missing candidate: 張峻');
 changHualienWork.countyBrief.work='暂未确认其他具体工作单位、职务及任职年月；2022年选举公报自列经历以议员、议长及党务职务为主。';changHualienWork.countyBrief.extraBioSource='county-chang-hualien-career-cec2022';
 d.sources['county-luo-hualien-voucher-20260903']={title:'花莲县长候选人登记及罗佩秦政见',url:'https://www.sjtv.com.tw/articles/103326',date:'2026-09-03',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社（信吉卫视转载）',kind:'新闻报道本人登记后发言'};
 const luoHualienVoucher=d.people.find(p=>p.city==='hualien'&&p.name==='羅佩秦');if(!luoHualienVoucher)throw new Error('Missing candidate: 羅佩秦');
 const luoVoucher=luoHualienVoucher.policies.find(x=>x.sources?.includes('county-luo-hualien-voucher-20260904'));if(luoVoucher){luoVoucher.text='罗佩秦提出发放每人每月2000元消费券，希望带动花莲地方消费。';luoVoucher.sources.push('county-luo-hualien-voucher-20260903');luoVoucher.note='中央社2026年9月报道为每月发放；完整方案及发放对象、财源与使用范围仍待核实。';}
 d.sources['county-ye-penghu-career-control2016']={title:'叶竹林兼任商号案与纪律处分',url:'https://multimedia.cy.gov.tw/CyBsBoxContent.aspx?n=135&s=4700',date:'2016-04-29（议决）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'监察院',kind:'监察院弹劾及惩戒结果记录'};
 d.sources['county-ye-penghu-career-gazette2016']={title:'公报刊登叶竹林兼任商号惩戒议决书',url:'https://www-ws.cy.gov.tw/Download.ashx?icon=..pdf&n=MTA1MDAwMDIzMzAwMSjlhagpLnBkZg%3D%3D&u=LzAwMS9VcGxvYWQvQ3lPbGRGaWxlL09wX1VwbG9hZC9lRG9jL%2BWFrOWgsS8xMDUvMTA1MDAwMDIzMzAwMSjlhagpLnBkZg%3D%3D',date:'2016年监察院公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'监察院',kind:'公报刊登惩戒机关议决书'};
 const yePenghuWork=d.people.find(p=>p.city==='penghu'&&p.name==='葉竹林');if(!yePenghuWork?.countyBrief)throw new Error('Missing candidate: 葉竹林');
 yePenghuWork.countyBrief.work='官方惩戒议决书载，其曾任售卖日用品、食品等商品的尚德行独资负责人，商号1997年设立、2015年4月申请歇业。因市长任内继续兼任商号负责人，2016年受申诫处分。';yePenghuWork.countyBrief.extraBioSource='county-ye-penghu-career-gazette2016';
 d.sources['county-wu-penghu-diversify-20261019']={title:'吴淑瑾提出多元国际观光政见',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',date:'2026-10-19',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人公开主张'};
 const wuPenghuTour=d.people.find(p=>p.city==='penghu'&&p.name==='吳淑瑾');if(!wuPenghuTour)throw new Error('Missing candidate: 吳淑瑾');
 if(!wuPenghuTour.policies.some(x=>x.sources?.includes('county-wu-penghu-diversify-20261019')))wuPenghuTour.policies.push({topic:'tourism',text:'吴淑瑾提出与中央合作，以空中交通接力及文化深度旅游，引导到台湾本岛的日本、美国等多元客源转往澎湖。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-10-19',sources:['county-wu-penghu-diversify-20261019'],note:'属于旅游市场构想，航班、预算、旅客数量和实际成效仍需核实。'});
 d.sources['county-wu-penghu-factory-moea2025']={title:'经济部2025年澎湖饮料及烟草制造业工厂名册',url:'https://www.moea.gov.tw/Mns/DOS/content/wHandMenuFile.ashx?file_id=38997',date:'2025年调查',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'经济部',kind:'官方工厂名册'};
 wuPenghuTour.countyBrief.work='经济部2025年工厂名册列其为澎湖第一酒厂负责人；另曾任澎湖县水当当妇女会理事长。企业职务起止年月及目前是否变更暂未确认。';wuPenghuTour.countyBrief.extraBioSource='county-wu-penghu-factory-moea2025';
 d.sources['county-chang-chiayi-career-cec2024']={title:'2024年不分区立委选举公报：张啓楷经历',url:'https://eebulletin.cec.gov.tw/113/05%E7%AC%AC11%E5%B1%86%E5%85%A8%E5%9C%8B%E4%B8%8D%E5%88%86%E5%8D%80%E5%8F%8A%E5%83%91%E5%B1%85%E5%9C%8B%E5%A4%96%E5%9C%8B%E6%B0%91%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1%E9%81%B8%E8%88%89/%E5%85%A8%E5%9C%8B%E4%B8%8D%E5%88%86%E5%8D%80%E5%8F%8A%E5%83%91%E5%B1%85%E5%9C%8B%E5%A4%96%E5%9C%8B%E6%B0%91%E7%AB%8B%E5%A7%94%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf',date:'2024年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人自列经历'};
 const changChiayiWork=d.people.find(p=>p.city==='chiayi-city'&&p.name==='張啓楷');if(!changChiayiWork?.countyBrief)throw new Error('Missing candidate: 張啓楷');
 changChiayiWork.countyBrief.work='2024年选举公报自列曾任TVBS及年代电视台政论节目主持人、年代新闻部副总编辑，以及彰化县工商发展投资策进会总干事；各职起止年月暂未确认。';changChiayiWork.countyBrief.extraBioSource='county-chang-chiayi-career-cec2024';
 d.sources['county-huang-chiayi-donation-20260416']={title:'黄宏成宣布参选与捐薪承诺',url:'https://news.tvbs.com.tw/politics/3179815',date:'2026-04-16',checkedAt:'2026-11-12',publisherId:'tvbs',publisherName:'TVBS新闻',kind:'媒体报道本人宣布参选发言'};
 const huangChiayiPolicy=d.people.find(p=>p.city==='chiayi-city'&&p.name==='黃宏成台灣阿成世界偉人財神總統');if(!huangChiayiPolicy)throw new Error('Missing candidate: 黄宏成');
 if(!huangChiayiPolicy.policies.some(x=>x.sources?.includes('county-huang-chiayi-donation-20260416')))huangChiayiPolicy.policies.push({topic:'accountability',text:'黄宏成台灣阿成世界偉人財神總統表示，当选后市长月薪只保留最低工资，其余捐作公益，并承诺捐出选举补助款。',type:'本届政见（宣布参选发言）',basis:'campaign',electionYear:2026,date:'2026-04-16',sources:['county-huang-chiayi-donation-20260416'],note:'这是个人竞选承诺，不代表已经当选或捐赠；补助款以实际符合领取条件及金额为准。'});
 huangChiayiPolicy.policyCoverage={checkedAt:'2026-11-12',note:'已查：2026年4月宣布参选报道及2022年嘉义市长重选公报。暂未确认：更多本届市政治理措施及其完整内容；往届公报相邻候选人的政见不能移作其本人主张。尚未查核：后续完整公办政见会及个人公开视频。',sources:['county-huang-chiayi-donation-20260416','county-huang-chiayi-2022-cec']};
 d.sources['county-huang-chiayi-2022-cec']={title:'2022年嘉义市长重行选举公报',url:'https://eebulletin.cec.gov.tw/111/23%E5%98%89%E7%BE%A9%E5%B8%82/01%E5%B8%82%E9%95%B7/%E5%98%89%E7%BE%A9%E5%B8%82%E7%AC%AC11%E5%B1%86%E5%B8%82%E9%95%B7%E9%87%8D%E8%A1%8C%E9%81%B8%E8%88%89%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'嘉义市选举委员会',kind:'候选人资料及政见原始公报'};
 d.sources['county-miaoli-policy-compare-20261102']={title:'苗栗县长候选人政见对照',url:'https://n.yam.com/Article/20261102507675',date:'2026-11-02',checkedAt:'2026-11-12',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',kind:'媒体整理候选人公开政见'};
 d.sources['county-chen-miaoli-profile-20260912']={title:'陈品安竞选活动与律师经历',url:'https://www.cna.com.tw/news/aipl/202609120175.aspx',date:'2026-09-12',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道竞选活动及本人经历'};
 const chenMiaoliUpdate=d.people.find(p=>p.city==='miaoli'&&p.name==='陳品安');const chungMiaoliUpdate=d.people.find(p=>p.city==='miaoli'&&p.name==='鍾東錦');if(!chenMiaoliUpdate?.countyBrief||!chungMiaoliUpdate)throw new Error('Missing Miaoli candidate');
 chenMiaoliUpdate.countyBrief.work='曾任达文西个资暨高科技法律事务所律师及环境法律人协会副秘书长；中央社报道她因参与苑里反风车运动、协助居民处理司法案件而与苗栗结缘，本人表示约于2018年辞去台北律师工作参选。其他任职起止年月暂未确认。';chenMiaoliUpdate.countyBrief.extraBioSource='county-chen-miaoli-profile-20260912';
 if(!chenMiaoliUpdate.policies.some(x=>x.sources?.includes('county-miaoli-policy-compare-20261102')))chenMiaoliUpdate.policies.push(
  {topic:'health',text:'陈品安提出补助65岁以上长者及55岁以上原住民健保费，并提供符合年龄条件者带状疱疹疫苗公费接种。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-02（报道日）',sources:['county-miaoli-policy-compare-20261102'],note:'补助范围、财源及落实时间应以正式方案和预算审议为准。'},
  {topic:'transport',text:'陈品安主张争取台铁海线谈文至追分双轨化、国道一号头份第二交流道，以及楊梅至头份路段拓宽。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-02（报道日）',sources:['county-miaoli-policy-compare-20261102'],note:'涉及中央权限及建设程序；不代表方案均已核定或开工。'}
 );
 if(!chungMiaoliUpdate.policies.some(x=>x.sources?.includes('county-miaoli-policy-compare-20261102')))chungMiaoliUpdate.policies.push(
  {topic:'health',text:'钟东锦提出65岁以上长者敬老礼金改为每年现金5000元、春节前一次发放，并扩大敬老卡的士及在地农产品使用范围。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-02（报道日）',sources:['county-miaoli-policy-compare-20261102'],note:'给付资格、财政来源与执行时间需以正式方案为准。'},
  {topic:'childcare',text:'钟东锦提出第一胎生育津贴2万元、第二胎以上5万元，并在高铁特区新建旗舰亲子馆。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-02（报道日）',sources:['county-miaoli-policy-compare-20261102'],note:'适用条件、预算及场馆建设进度须继续核实。'},
  {topic:'transport',text:'钟东锦主张推动台61线竹南至后龙段高架化、台72线延伸衔接台61线，并争取改善头份交流道及增设造桥交流道。',type:'本届政见（白皮书媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-02（报道日）',sources:['county-miaoli-policy-compare-20261102'],note:'涉及中央审批、经费与工程评估；不代表已经核定或动工。'}
 );
 d.sources['county-miaoli-childcare-20261107']={title:'苗栗县长候选人育儿与托育方案',url:'https://udn.com/news/story/124652/9864069',date:'2026-11-07',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道县长宣布计划与对手政见'};
 if(!chungMiaoliUpdate.policies.some(x=>x.sources?.includes('county-miaoli-childcare-20261107')))chungMiaoliUpdate.policies.push({topic:'childcare',text:'钟东锦宣布拟在竹南山佳国小或海口国小预定地先建一座亲子馆暨托婴中心；如经费许可再建第二座，并考虑将第三胎生育津贴提高至10万元。',type:'县府计划与考虑中方案（媒体报道）',basis:'administration',electionYear:2026,date:'2026-11-07',sources:['county-miaoli-childcare-20261107'],note:'选址尚未确定；第二座以经费许可为条件，第三胎加码仍在考虑，均非已经实施。'});
 const chenMiaoliCare=d.people.find(p=>p.city==='miaoli'&&p.name==='陳品安');if(!chenMiaoliCare)throw new Error('Missing candidate: 陳品安');
 if(!chenMiaoliCare.policies.some(x=>x.sources?.includes('county-miaoli-childcare-20261107')))chenMiaoliCare.policies.push({topic:'childcare',text:'陈品安提出将临时托育提高至每年240小时并增加夜间服务，推动公立及非营利幼儿园延长照顾至至少晚间6点。',type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-11-07',sources:['county-miaoli-childcare-20261107'],note:'属于候选人提出的目标；适用对象、人员配置、预算及上路时间暂未确认。'});
 if(!chenMiaoliUpdate.evidenceCoverage)chenMiaoliUpdate.evidenceCoverage={};
 for(const [region,label] of [['cn','中国大陆、两岸'],['jp','日本']])if(!chenMiaoliUpdate.evidence.some(x=>x.region===region))chenMiaoliUpdate.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以「陈品安」「苗栗」搭配'+label+'与交流、政策检索公开网页，并查阅中央社人物报道；暂未找到可明确归属她本人的相关表态。',note:'本次未逐项查核个人社群全部历史发言与视频；不能据此推定其立场。',sources:['county-chen-miaoli-profile-20260912']};
 d.sources['county-cheng-hsinchu-career-cec2020']={title:'2020年新竹县第二选区立委选举公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/109%E5%B9%B4%E7%AC%AC10%E5%B1%86/02%E5%8D%80%E5%9F%9F%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/08%E6%96%B0%E7%AB%B9%E7%B8%A3/%E6%96%B0%E7%AB%B9%E7%B8%A3%E7%AB%8B%E5%A7%94%E9%81%B8%E8%88%892%E9%81%B8%E5%8D%80.pdf',date:'2020年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人自列经历'};
 const chengHcWork=d.people.find(p=>p.city==='hsinchu-county'&&p.name==='鄭朝方');if(!chengHcWork?.countyBrief)throw new Error('Missing candidate: 鄭朝方');
 chengHcWork.countyBrief.work='2020年选举公报自列人间卫视及环宇广播电台节目主持人、新竹新闻电视主播；各职务起止年月暂未确认。';chengHcWork.countyBrief.extraBioSource='county-cheng-hsinchu-career-cec2020';
 d.sources['county-hsinchu-eldercare-compare-20261102']={title:'新竹县长候选人政见对照',url:'https://n.yam.com/Article/20261102494156',date:'2026-11-02',checkedAt:'2026-11-12',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',kind:'媒体整理候选人公开政见'};
 d.sources['county-hsu-hsinchu-care-website']={title:'徐欣莹竞选网站：长者福利方案',url:'https://www.shesinging.tw/politics/care/',date:'2026年竞选资料（查阅日2026-11-12）',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'徐欣莹竞选网站',kind:'候选人竞选主张'};
 const hsuHcCare=d.people.find(p=>p.city==='hsinchu-county'&&p.name==='徐欣瑩');if(!hsuHcCare)throw new Error('Missing candidate: 徐欣瑩');
 if(!chengHcWork.policies.some(x=>x.sources?.includes('county-hsinchu-eldercare-compare-20261102')))chengHcWork.policies.push({topic:'health',text:'郑朝方提出对65岁以上长者全额补助健保费、不排富，并提出提高敬老卡额度。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-11-02（报道日）',sources:['county-hsinchu-eldercare-compare-20261102'],note:'资格、财源与地方和中央制度的衔接应以正式方案为准；不能把竞选主张视为现行补助。'});
 if(!hsuHcCare.policies.some(x=>x.sources?.includes('county-hsu-hsinchu-care-website')))hsuHcCare.policies.push({topic:'health',text:'徐欣莹提出补助65岁以上长者健保费，并规划扩大敬老卡用途，包含超商与医疗等。',type:'本届政见（候选人网站）',basis:'campaign',electionYear:2026,date:'2026年竞选资料，查阅2026-11-12',sources:['county-hsu-hsinchu-care-website'],note:'网站同时称部分敬老卡点数调整已实施；此处记录其后续主张，资格、财源及上路时间仍需核对。'});
 d.sources['county-hung-taichung-platform-index202610']={title:'洪丽华2026年公开政见汇编',url:'https://ipdb.tw/candidates/cmtz2dkjc0003ilcny4kqn1cu',date:'2026-10-31（汇编资料截点）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'政精选（民间数据库；倾向不适用）',kind:'民间汇编媒体对候选人发言的摘要'};
 const hungTcPolicy=d.people.find(p=>p.id==='hung-l');if(!hungTcPolicy)throw new Error('Missing candidate: 洪麗華');
 if(!hungTcPolicy.policies.some(x=>x.sources?.includes('county-hung-taichung-platform-index202610')))hungTcPolicy.policies.push(
  {topic:'water',text:'民间政见汇编记载，洪丽华提出强化水资源保留与开发。',type:'本届主张（媒体报道汇编）',basis:'campaign',electionYear:2026,date:'资料汇编截至2026-10-31',sources:['county-hung-taichung-platform-index202610'],note:'汇编列有媒体原发链接，但本次未能读取原发全文；地点、工程、预算及时程暂未确认。'},
  {topic:'economy',text:'民间政见汇编记载，洪丽华提出奖励投资、创造就业机会，并协助提升农渔业产能。',type:'本届主张（媒体报道汇编）',basis:'campaign',electionYear:2026,date:'资料汇编截至2026-10-31',sources:['county-hung-taichung-platform-index202610'],note:'原发报道全文本次未取得；实施方式、对象、经费与时程暂未确认。'}
 );
 d.sources['county-hung-taichung-ftv-20261030']={title:'洪丽华受访谈参选与教育、少子化',url:'https://sport.ftvnews.com.tw/news/detail/2026A30C16M1',date:'2026-10-30',checkedAt:'2026-11-12',publisherId:'ftv',publisherName:'民视新闻',kind:'记者采访并报道候选人经历及主张'};
 if(!hungTcPolicy.policies.some(x=>x.sources?.includes('county-hung-taichung-ftv-20261030')))hungTcPolicy.policies.push({topic:'education',text:'洪丽华受访提出提高人民生活水平、增加教育补助，并表示要正视少子化。',type:'本届施政方向（媒体采访）',basis:'campaign',electionYear:2026,date:'2026-10-30',sources:['county-hung-taichung-ftv-20261030'],note:'报道未说明补助对象、金额、财源或少子化的具体措施；目前是政策方向，不视为完整方案。'});
 const hungClothing=hungTcPolicy.workHistory.find(x=>x.organization==='欣雅莉服装行');if(hungClothing){hungClothing.note+=' 民视2026年采访亦报道她早年开设服饰店，但未列店名或具体经营年份。';hungClothing.sources=[...new Set([...hungClothing.sources,'county-hung-taichung-ftv-20261030'])];}
 hungTcPolicy.policyCoverage={checkedAt:'2026-11-12',note:'已查：2024年台中市第二选区立委选举公报、民视2026年10月采访及政精选对本届媒体报道的汇编。暂未确认：教育补助对象、金额和少子化具体措施，以及本人完整政见原文；2024年公报相邻候选人的日本食品说法不属于洪丽华。尚未查核：个人社群全部影片和后续公办政见会。',sources:['career-hung-l-2024','county-hung-taichung-ftv-20261030','county-hung-taichung-platform-index202610']};
 d.sources['county-jiang-taichung-transport-20261016']={title:'江启臣提出台中交通政见',url:'https://www.cna.com.tw/news/aloc/202610160324.aspx',date:'2026-10-16',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道候选人政策记者会'};
 d.sources['county-jiang-taichung-childcare-20260810']={title:'江启臣及何欣纯育儿方案',url:'https://www.cna.com.tw/news/aloc/202608100110.aspx',date:'2026-08-10',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'新闻报道候选人记者会及对手办公室说明'};
 const jiangTcPolicy=d.people.find(p=>p.id==='johnny');if(!jiangTcPolicy)throw new Error('Missing candidate: 江啟臣');
 if(!jiangTcPolicy.policies.some(x=>x.sources?.includes('county-jiang-taichung-transport-20261016')))jiangTcPolicy.policies.push({topic:'transport',text:'江启臣提出市民搭公交免费、改善驾驶待遇，并以密集接驳建构20分钟生活圈；另争取捷运蓝线早日完工、橘线加速动工及海线铁路双轨高架化。',type:'本届政见（政策记者会）',basis:'campaign',electionYear:2026,date:'2026-10-16',sources:['county-jiang-taichung-transport-20261016'],note:'免费适用范围、预算和实施时点须以正式方案为准；轨道工程仍受审议及施工进度影响。'});
 if(!jiangTcPolicy.policies.some(x=>x.sources?.includes('county-jiang-taichung-childcare-20260810')))jiangTcPolicy.policies.push({topic:'childcare',text:'江启臣提出成立跨局处妇幼发展委员会，并将育婴留职停薪给付从八成提高到全薪。',type:'本届政见（政策记者会）',basis:'campaign',electionYear:2026,date:'2026-08-10',sources:['county-jiang-taichung-childcare-20260810'],note:'补助对象、地方与中央分担、预算和适用期间仍需核对。'});
 d.sources['county-wu-yilan-campaign-site-20261101']={title:'吴宗宪竞选网站：政策主张',url:'https://www.yilan2026.tw/#policy',date:'网站更新至2026-11-01；各主张日期见具体条目',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'吴宗宪竞选办公室',kind:'候选人竞选网站政策说明，日期为网站所列'};
 const wuYilanSite=d.people.find(p=>p.city==='yilan'&&p.name==='吳宗憲');if(!wuYilanSite)throw new Error('Missing candidate: 吳宗憲');
 const wuChild=wuYilanSite.policies.find(x=>x.sources?.includes('county-policy-yilan-3-1-excerpt'));if(wuChild){wuChild.text='吴宗宪提出0至3岁婴幼儿每月发放1000元用品消费券，以每乡镇一处公托为目标。';wuChild.sources.push('county-wu-yilan-campaign-site-20261101');wuChild.note='竞选网站列出适用年龄；预算、资格细则和实施时间仍需确认。';}
 if(!wuYilanSite.policies.some(x=>x.sources?.includes('county-wu-yilan-campaign-site-20261101')&&x.topic==='health'))wuYilanSite.policies.push(
  {topic:'health',text:'吴宗宪提出65岁以上长者免缴健保费、扩大重阳敬老金，并补助长青食堂及社区。',type:'本届政见（竞选网站）',basis:'campaign',electionYear:2026,date:'2026-07-29（网站所列）',sources:['county-wu-yilan-campaign-site-20261101'],note:'具体资格、补助范围、财源及实施时间暂未确认。'},
  {topic:'childcare',text:'吴宗宪提出增设临时、延时、夜间及假日托育，并为任职满一年的托育人员每月加给2000元，依年资最高每月增加1万元。',type:'本届政见（竞选网站）',basis:'campaign',electionYear:2026,date:'2026-09-01（网站所列）',sources:['county-wu-yilan-campaign-site-20261101'],note:'属于竞选提案；适用机构、经费和执行细节暂未确认。'},
  {topic:'economy',text:'吴宗宪提出扩大劳动检查、补助劳资诉讼期间生活费、提高职灾慰助金至30万元，并成立县府劳动政策咨询委员会。',type:'本届政见（竞选网站）',basis:'campaign',electionYear:2026,date:'2026-04-28（网站所列）',sources:['county-wu-yilan-campaign-site-20261101'],note:'补助资格、慰助金适用条件及财源暂未确认。'},
  {topic:'education',text:'吴宗宪提出补助学校非教学人力与设备、降低师生比，并为每所公立学校每年提供8万元法律顾问费。',type:'本届政见（竞选网站）',basis:'campaign',electionYear:2026,date:'2026-09-12（网站所列）',sources:['county-wu-yilan-campaign-site-20261101'],note:'属于竞选提案；执行条件及预算来源暂未确认。'}
 );
 d.sources['county-wei-hualien-us-20181211']={title:'魏嘉贤赴加州交流地方建设与观光',url:'https://038.news/archives/45321',date:'2018-12-11（报道日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'花莲新闻云（倾向待核定；网站刊登魏嘉贤广告）',kind:'地方媒体整理访问行程与本人说法'};
 const weiHlUs=d.people.find(p=>p.city==='hualien'&&p.name==='魏嘉賢');if(!weiHlUs)throw new Error('Missing candidate: 魏嘉賢');
 if(!weiHlUs.evidence.some(x=>x.source==='county-wei-hualien-us-20181211'))weiHlUs.evidence.push({region:'us',date:'2018-12-11（报道日）',topic:'赴美国加州交流城市发展',text:'时任花莲市长魏嘉贤拜访加州钻石吧市、工业市和拉哈布拉市，与当地人士讨论城市建设、特色经济及观光；他说希望推动友好城市交流。',limit:'报道记载一次访问和交流意愿，未证明友好城市协议已签署；不等同对美国整体外交政策的立场。',source:'county-wei-hualien-us-20181211'});
 d.sources['county-wen-nantou-us-career-cna']={title:'温世政人物简历：美国研究与教学经历',url:'https://www.cna.com.tw/tag/54498/',date:'人物简历（查阅于2026-11-12）',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体人物简历'};
 const wenUs=d.people.find(p=>p.city==='nantou'&&p.name==='温世政');if(!wenUs)throw new Error('Missing candidate: 温世政');
 if(!wenUs.evidence.some(x=>x.source==='county-wen-nantou-us-career-cna'))wenUs.evidence.push({region:'us',date:'任职年月暂未确认',topic:'美国牙周病研究与教学经历',text:'中央社人物简历列温世政曾任美国密西根大学牙周病研究所研究员及讲师。',limit:'这是专业经历，任职起止年月未确认；来源未记载他对美国政策的具体观点。',source:'county-wen-nantou-us-career-cna'});
 d.sources['county-hung-kinmen-cec-2018']={title:'2018年金门县长选举公报：洪和成',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/04%E7%B8%A3%E5%B8%82%E9%95%B7/107%E5%B9%B4/18%E9%87%91%E9%96%80%E7%B8%A3/01_%E7%B8%A3%E9%95%B7.pdf',date:'2018年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'金门县选举委员会',kind:'候选人自填经历及往届政见'};
 hungKm.countyBrief.work='2018年选举公报自列领新电子有限公司负责人；2024年选举公报列麒麟旅店企业社负责人、电脑工程师。两项负责人职务起止年月及现况暂未确认。';hungKm.countyBrief.extraBioSource='county-hung-kinmen-cec-2018';
 if(!hungKm.policies.some(x=>x.sources?.includes('county-hung-kinmen-cec-2018')))hungKm.policies.push(
  {topic:'economy',text:'洪和成2018年提出扩大青年合宜住宅，并简化及提高失业补助。',type:'往届县长选举政见（2018年公报）',basis:'campaign',electionYear:2018,date:'2018年选举公报',sources:['county-hung-kinmen-cec-2018'],note:'这是往届主张，本届是否沿用、经费及实施细节暂未确认。'},
  {topic:'transport',text:'洪和成2018年提出开辟沙美小三通第二码头，并让浯江轮渡公司加入营运。',type:'往届县长选举政见（2018年公报）',basis:'campaign',electionYear:2018,date:'2018年选举公报',sources:['county-hung-kinmen-cec-2018'],note:'往届竞选构想，不代表工程已完成；本届是否沿用暂未确认。'},
  {topic:'education',text:'洪和成2018年提出小学、幼儿园提早半小时放学，并由学校负责接送。',type:'往届县长选举政见（2018年公报）',basis:'campaign',electionYear:2018,date:'2018年选举公报',sources:['county-hung-kinmen-cec-2018'],note:'往届竞选构想，适用方式、经费及本届是否沿用暂未确认。'}
 );
 const changhuaWelfare=[
  {name:'魏平政',text:'魏平政提出每名长者每年发放1万元敬老金，并将长青幸福卡在农渔会的消费折抵额度提高至500元。',note:'这是候选人提出的福利方案；适用年龄、发放细则、财源与实施时间仍待核实。'},
  {name:'陳素月',text:'陈素月竞选团队提出将长青幸福卡扩大用于特约计程车折抵，并在偏远乡镇结合车队提供预约就医接驳。',note:'这是竞选团队提出的规划；补助额度、适用范围与经费仍待核实。'},
  {name:'邱建富',text:'邱建富提出70岁以上长者每人发放6000元春节敬老礼金，并将长青幸福卡每月点数提高至1500点。',note:'他估计相关社福政见每年增加约80亿元预算；该数字涵盖相关福利方案，并非这两项的单独成本。'}
 ];
 for(const r of changhuaWelfare){const p=d.people.find(x=>x.city==='changhua'&&x.name===r.name);if(!p)throw new Error('Missing candidate: '+r.name);if(!p.policies.some(x=>x.sources?.includes('county-chen-changhua-welfare-20261111')))p.policies.push({topic:'health',text:r.text,type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-11-11（报道日）',sources:['county-chen-changhua-welfare-20261111'],note:r.note});}
 const foreign=[
  {city:'hsinchu-city',name:'高虹安',region:'cn',key:'county-kao-china-pastry-20210324',date:'2021-03-24',title:'高虹安质询台湾糕饼对大陆出口',url:'https://ec.ltn.com.tw/article/breakingnews/3477539',publisherId:'ltn',publisherName:'自由时报',kind:'媒体报道立法院质询及官员答复',topic:'食品对大陆出口限制',text:'高虹安任立委时转述小三通物流业者称，台湾凤梨酥一度无法经小三通出货，并要求经济部门掌握对糕饼出口的潜在影响。',limit:'这是2021年质询时转述的业者说法；经济部门当时表示会了解，不能据此认定现行规定或报道中的限制原因已获独立证实。'},

  {city:'yilan',name:'林國漳',region:'cn',key:'county-lin-yilan-cross-strait-20260423',date:'2026-04-23',title:'林国漳回应国民党主席与中共领导人会面',url:'https://news.cts.com.tw/cts/politics/202604/202604233023336.html',publisherId:'other',publisherName:'华视新闻（公股媒体）',kind:'电视新闻采访候选人',topic:'两岸会面与主权',text:'林国漳回应国民党主席郑丽文与中共领导人习近平会面时，批评国民党未顾及台湾主权、未征询台湾民众意见，并质疑会面是否符合台湾及宜兰人的利益。',limit:'这是针对该次会面的本人政治判断；不能扩大为他反对一切两岸交流。'},
  {city:'yilan',name:'吳宗憲',region:'jp',key:'county-wu-yilan-japan-fishing-20260606',date:'2026-06-06（报道日）',title:'吴宗宪谈日菲海域划界与宜兰渔权',url:'https://udn.com/news/story/6656/9549973',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人及立委的协调会',topic:'日菲海域划界与渔业',text:'吴宗宪忧虑日本与菲律宾的专属经济区划界谈判影响宜兰传统渔场，要求渔业署盘点作业海域与鱼种，提出护渔对策并向外交部反映风险。',limit:'对影响范围及政府回应的批评属于本人判断；报道记录的是谈判启动时的担忧，不能视为后续划界结果或实际侵权结论。'},

  {city:'nantou',name:'温世政',region:'jp',key:'county-wen-japan-training-20260723',date:'2026-07-23（报道日）',title:'温世政谈赴日进修与铁路模型兴趣',url:'https://www.nownews.com/amp/news/6851227',publisherId:'other',publisherName:'NOWnews今日新闻（倾向待核定）',kind:'媒体人物专访',topic:'赴日进修经历',text:'温世政受访自述曾在日本进修一年，并在当地旅行时接触铁路模型；他后来继续制作铁路模型。',limit:'这是个人经历，不是对日本政治、外交或其他政策的表态；具体进修机构和年份在该报道中未列出。'},

  {city:'kinmen',name:'洪和成',region:'us',key:'county-hung-kinmen-us-20240105',date:'2024-01-04（政见会）',title:'洪和成在立委政见会谈金门发展限制',url:'https://www.kmdn.gov.tw/1117/1271/1272/562589',publisherId:'other',publisherName:'金门日报（县政府所属媒体）',kind:'地方媒体报道往届公办政见会',topic:'美国与金门发展限制',text:'洪和成在2024年立委选举政见会上认为，美国、中国大陆及台湾政府都对金门设下多重限制，地方需要在现行规则中寻找发展空间。',limit:'这是候选人对金门处境的政治判断；报道未逐项解释所称美国限制，也未提出具体对美政策。本届是否沿用暂未确认。'},

  {city:'miaoli',name:'陳品安',region:'cn',key:'county-chen-miaoli-sovereignty-20260221',date:'2026-02-21（报道日）',title:'陈品安谈社会运动经历与台湾国家认同',url:'https://newtalk.tw/news/view/2026-02-21/1018839',publisherId:'other',publisherName:'Newtalk新闻（倾向待核定）',kind:'媒体人物采访与转述',topic:'台湾国家认同',text:'Newtalk采访报道，陈品安谈及接触法律与政治经历时，表达她认为台湾是国家。',limit:'报道未详细说明她对两岸交流、具体政策或法律地位的完整主张；不据此推断其他立场。'},
  {city:'yilan',name:'吳宗憲',region:'us',key:'county-wu-yilan-us-midterms-20261110',date:'2026-11-10',title:'吴宗宪谈美国期中选举与两岸局势',url:'https://video.udn.com/news/1331892',publisherId:'udn',publisherName:'联合报（联合影音）',kind:'媒体采访候选人',topic:'美国选举与台湾面临的局势',text:'吴宗宪谈美国期中选举时，认为结果会影响国际和台湾，并称两岸关系紧张之际政府应更关注相关经济及国际问题。',limit:'这是回应总统赴宜兰辅选时的政治判断，报道未提出具体对美政策；不能把其影响判断当作已证实结果。'},

  {city:'yilan',name:'吳宗憲',region:'us',key:'county-wu-yilan-us-fishing-20250425',date:'2025-04-25',title:'吴宗宪质询鬼头刀输美与渔业补助',url:'https://acta.tw/evidence/ev_ivod_160694_629927647a00',publisherId:'other',publisherName:'Acta（立法院议事逐字资料）',kind:'立法院院会质询逐字记录',topic:'输美渔业、关税与冷链',text:'吴宗宪在立法院质询美国关税及海鲜永续评级对鬼头刀出口的影响，要求农业部与美方沟通，并询问渔船及冷链设备能否全额补助。',limit:'农业部长答复当时已将补助比例从五成提高到六成；美国评级和关税状态可能变化，此记录不代表现行规则或全额补助已经通过。'},
  {city:'yilan',name:'吳宗憲',region:'us',key:'county-wu-yilan-us-arms-20260304',date:'2026-03-04',title:'吴宗宪谈对美军购及监督',url:'https://cnews.com.tw/174260304a03/',publisherId:'other',publisherName:'汇流新闻网（倾向待核定）',kind:'媒体刊载候选人专访',topic:'对美军购与预算审查',text:'吴宗宪表示支持对美军购，也不反对提高国防采购预算，但要求向立法院说明采购细项与必要性，反对浮滥和黑箱。',limit:'这是他在专访中提出的审查立场；对现有采购是否浮滥的批评属于其判断，不代表对任何具体预算或武器案的最终表决。'},
  {city:'yilan',name:'吳宗憲',region:'us',key:'county-wu-yilan-us-trade-20260417',date:'2026-04-17',title:'吴宗宪质询台美贸易协议执行',url:'https://acta.tw/evidence/ev_ivod_168626_1880d349fad3',publisherId:'other',publisherName:'Acta（立法院议事逐字资料）',kind:'立法院院会质询逐字记录',topic:'台美贸易协议与政府应对流程',text:'吴宗宪询问行政院，如果美国违反台美对等贸易协议中的双向条款，台湾将如何启动调查或回应，并要求向产业界说明相关流程。',limit:'这是对假设情境的质询，并非认定美国已违反协议；相关法律效果及政府后续答复须另核。'},
  {city:'changhua',name:'魏平政',region:'cn',key:'county-wei-changhua-interview-cross-strait-20261110',date:'2026-11-10',title:'魏平政受访回应两岸与地方选举',url:'https://udn.com/vote2026/story/124652/9869346',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人电台专访',topic:'回应党主席两岸立场与地方选举',text:'魏平政受访被问及党主席的两岸立场及家族企业与大陆生意时，表示县长选举应着重彰化，并称其家族企业不以价格与大陆竞争、而是布局欧美市场。',limit:'这是一次采访中的本人说法，企业市场情况未独立核实；他没有在报道引述的这一段完整阐述个人统独立场。'},
  {city:'kinmen',name:'洪和成',region:'jp',key:'county-hung-kinmen-japan-tourism-20181008',date:'2018-10-08',title:'洪和成成立2018年县长竞选后援会',url:'https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=29243D7D43E7B6E2&sms=BF7D6D478B935644',publisherId:'other',publisherName:'金门日报（金门县政府网站转载）',kind:'地方媒体报道往届县长选举主张',topic:'欢迎日本旅客赴金门旅游',text:'洪和成2018年竞选金门县长时表示，欢迎日本与韩国旅客到金门旅游、赏鸟。',limit:'这是往届选举期间的观光愿景；本届是否沿用、具体交通安排与成果暂未确认，不能推断对日本全部政策的立场。'},
  {city:'chiayi-city',name:'陳愷璜',region:'cn',key:'county-chen-arts-beijing-exhibitions-2006',date:'2006至2007年（履历所列）',title:'陈愷璜艺术履历与北京展览',url:'https://www.doctor-art-tnua.net/kaihunag',publisherId:'other',publisherName:'北艺大美术学系博士班网站（艺术家履历）',kind:'艺术家履历列出的展览',topic:'北京艺术展览经历',text:'艺术家履历列陈愷璜参加2006年中国美术馆「台湾战后美术发展1950—2000」及2007年北京艺术博览会当代艺术展。',limit:'这是履历列示的参展经历，未说明本人是否赴现场或其两岸政治观点；具体作品和参展细节尚待核对。'},
  {city:'penghu',name:'葉竹林',region:'cn',key:'county-yeh-penghu-direct-links-20260716',date:'2026-07-16',title:'叶竹林提出澎湖两岸交通构想',url:'https://www.crntt.tw/doc/docDetailCreate.jsp?coluid=192&docid=160246864&kindid=0',publisherId:'other',publisherName:'中评社（倾向待核定）',kind:'媒体报道候选人政见',topic:'澎湖与厦门、平潭交通',text:'叶竹林主张向中央争取支持，推动澎湖与厦门、平潭等地海空直航，以促进观光、文化及经贸交流。',limit:'这是竞选交通主张，涉及中央及两岸相关权限；报道未确认航线获准或实际开通。'},
  {city:'penghu',name:'葉竹林',region:'jp',key:'county-yeh-penghu-japan-routes-20260716',date:'2026-07-16',title:'叶竹林提出拓展日本等地航线',url:'https://www.crntt.tw/doc/docDetailCreate.jsp?coluid=192&docid=160246864&kindid=0',publisherId:'other',publisherName:'中评社（倾向待核定）',kind:'媒体报道候选人政见',topic:'争取日本航线',text:'叶竹林提出升级澎湖机场，并争取日本、韩国、东南亚及港澳等地的定期或包机航线。',limit:'属于候选人提出的交通发展方向；航权、业者、预算及实际开航均未确认。'},
  {city:'penghu',name:'陳盡川',region:'cn',key:'county-chen-penghu-fishing-20191204',date:'2019-12-04',title:'保育志工陈尽川谈大陆渔船进入澎湖海域',url:'https://news.pts.org.tw/article/457211',publisherId:'pts',publisherName:'公视新闻',kind:'公共电视报道当事人受访意见及海巡回应',topic:'大陆渔船与澎湖海域巡护',text:'陈尽川以澎湖保育志工身份受访，认为有大陆渔船利用天气恶劣、海巡出勤困难时进入澎湖海域捕捞。',limit:'这是2019年对特定渔业执法问题的观察，并非对所有大陆渔民的判断；报道同时记载海洋委员会就风浪与巡护安排的回应。'},
  {city:'hsinchu-county',name:'徐欣瑩',region:'jp',key:'county-hsu-hsinchu-japan-visit-20250904',date:'2025-09-04',title:'国民党立委团拜会日本众议院',url:'https://udn.com/news/story/6656/8983581',publisherId:'cna',publisherName:'中央社（联合新闻网转载）',kind:'中央社报道访团活动及成员',topic:'参加赴日国会交流',text:'中央社报道，徐欣莹列名国民党立委访日团成员，访团拜会日本众议院并与日华议员恳谈会交流。',limit:'报道记录参团，未列徐欣莹个人发言；不能把其他团员的主张直接归给她。'},
  {city:'kinmen',name:'張國威',region:'cn',key:'county-chang-kuowei-xiangan-20261025',date:'2026-10-25',title:'张国威谈厦门翔安机场与金门旅游',url:'https://udn.com/vote2026/story/124652/9836320',publisherId:'udn',publisherName:'联合报',kind:'媒体报道竞选活动发言',topic:'厦门机场与金门区域观光',text:'张国威看好厦门翔安国际机场及金厦交通发展可能带来的观光契机，主张发挥金门地理优势、打造国际旅游岛。',limit:'这是候选人对未来旅游发展的判断；客流、交通安排及经济效果均待核实，不能推断其对所有两岸议题的立场。'},
  {city:'keelung',name:'童子瑋',region:'cn',key:'county-tung-cross-strait-interview-20260407',date:'2026-04-07',title:'童子玮评论国民党主席访陆与地方选举',url:'https://udn.com/news/amp/story/124802/9426764',publisherId:'udn',publisherName:'联合报',kind:'媒体报道广播专访',topic:'评论国民党主席访陆',text:'童子玮认为地方选举与两岸、国际关系没有那么直接；就郑丽文访陆，他判断国民党内对中国路线存在分歧，并认为此次出访体现郑个人意志。',limit:'这是他在2026年对一次党主席访陆的政治评论，不能据此推断其对所有两岸交流的立场。'},
  {city:'penghu',name:'陳振中',region:'jp',key:'county-chen-penghu-japan-tourists-20261019',date:'2026-10-19',title:'陈振中谈日本及其他市场观光客源',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人与旅游业者会面',topic:'争取日本观光客赴澎湖',text:'陈振中表示希望拓展日本、东南亚及其他地区客源，并结合妈祖文化、海洋聚落和在地农渔特色发展旅游。',limit:'这是多元客源主张，报道未列日本市场的具体航线、预算或成果，不代表对日本全部政策的立场。'},
  {city:'penghu',name:'陳振中',region:'us',key:'county-chen-penghu-us-tourists-20261019',date:'2026-10-19',title:'陈振中谈美国及其他市场观光客源',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人与旅游业者会面',topic:'争取美国观光客赴澎湖',text:'陈振中将美国列为希望拓展的观光客源之一，也表示将继续经营台湾本地及其他国际市场。',limit:'仅为旅游市场拓展方向，未列具体美国客源方案；不能延伸为其美国外交或安全政策立场。'},
  {city:'kinmen',name:'梁文韜',region:'us',key:'county-liang-us-politics-20250630',date:'2025-06-30（刊载）',title:'梁文韬撰文比较美国与台湾政治局势',url:'https://www.taiwanncf.org.tw/ttforum/110/110-09.pdf',publisherId:'other',publisherName:'新世纪智库论坛（新世纪文教基金会）',kind:'候选人参选前署名评论',topic:'对美国总统与政治局势的评论',text:'梁文韬在2025年署名文章中认为，特朗普在共和党掌握美国国会优势下继续推动改革，并以其当时的政治处境与台湾政治作比较。',limit:'这是作者对2025年局势的判断，文章重心是台湾民主与在野党；不能据此认定他赞同特朗普所有政策，也不代表其现今立场。'},
  {city:'changhua',name:'魏平政',region:'us',key:'county-wei-changhua-us-tariff-20260406',date:'2026-04-06',title:'魏平政谈美国关税与地方产业',url:'https://udn.com/news/story/124652/9424996',publisherId:'udn',publisherName:'联合报',kind:'媒体采访候选人参选前表述',topic:'美国关税与彰化产业',text:'魏平政谈到美国关税对彰化传统产业的冲击，表示希望运用法律与国际贸易经验协助企业。',limit:'这是2026年参选前的产业判断与意愿，报道没有列出完整的关税应对方案，不代表其对所有美国政策的立场。'},
  {city:'changhua',name:'邱建富',region:'us',key:'county-chiu-changhua-us-seattle-20180729',date:'2018-07-29（年鉴所列）',title:'外交年鉴记录邱建富赴西雅图访问',url:'https://multilingual.mofa.gov.tw/web/web_UTF-8/almanac/almanac2018/%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B107%E5%B9%B4%E5%A4%96%E4%BA%A4%E5%B9%B4%E9%91%91.pdf',publisherId:'official-tw',publisherName:'外交部外交年鉴',kind:'官方外交年鉴活动记录',topic:'率彰化市团赴美国访问',text:'外交年鉴记载，时任彰化市长邱建富率团赴美国西雅图访问。',limit:'年鉴只记录访问，未说明具体成果或其美国政策立场。'},
  {city:'lienchiang',name:'王忠銘',region:'jp',key:'county-wang-matsu-japan-20250905',date:'2025-09-05',title:'王忠铭接待日本台湾交流协会代表',url:'https://www.cna.com.tw/news/aloc/202509050266.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻报道会谈与县长发言',topic:'与日本代表交流地方议题',text:'王忠铭接待日本台湾交流协会代表片山和之，双方讨论两岸关系及少子高龄化；王也回顾为新台马轮拜访日本船商的经历。',limit:'这是2025年会谈与本人回顾，不代表日本方面赞同他的全部两岸判断。'},
  {city:'lienchiang',name:'王忠銘',region:'cn',key:'county-wang-matsu-cross-strait-20250905',date:'2025-09-05',title:'王忠铭接待日本代表时谈两岸交流',url:'https://www.cna.com.tw/news/aloc/202509050266.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻报道县长会谈发言',topic:'马祖与福建往来及两岸和平',text:'王忠铭表示希望两岸和平发展，认为应多考虑民众生活，并谈及马祖与福建往来便利；他同时强调台湾的自由民主价值。',limit:'记录一次会谈中的个人观点；不把他对统战宣传的判断写成经独立验证的事实。'},
  {city:'penghu',name:'葉竹林',region:'jp',key:'county-yeh-penghu-amami-20190130',date:'2019-01-30（活动）',title:'奄美大岛青年会议所拜会马公市长',url:'https://penghudaily.blogspot.com/2019_01_31_archive.html',publisherId:'other',publisherName:'澎湖日报（倾向待核定）',kind:'地方媒体报道日本团体拜访',topic:'接待日本奄美大岛青年团体',text:'叶竹林担任马公市长时接待日本奄美大岛青年会议所代表，表达延续双方往来的意愿，并收到赴日参访邀请。',limit:'来源记录一次接待及邀请，未确认叶竹林是否因此成行或交流成果。'},
  {city:'chiayi-city',name:'陳愷璜',region:'us',key:'county-chen-arts-us-award-2001',date:'2001年（档案所列）',title:'国艺会策展档案列陈愷璜纽约艺术计划奖助',url:'https://archive.ncafroc.org.tw/curation/curator?id=bd9eba067e05aecb017e05aeffc8000a',publisherId:'other',publisherName:'国家文化艺术基金会',kind:'本人提供的策展人档案',topic:'纽约艺术实验室计划奖助',text:'国艺会2021年策展档案列出陈愷璜于2001年获得美国纽约EARTH N.Y.艺术实验室建构计划赞助。',limit:'这是艺术经历档案，未说明其是否赴美或对美国政治的观点；获赞助详情亦未独立核验。'},
  {city:'kinmen',name:'黃世團',region:'cn',key:'county-huang-kinmen-local-agenda-20260828',date:'2026-08-28',title:'黄世团谈金门自主发展与两岸议题',url:'https://udn.com/news/amp/story/124652/9720257',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人领表时的公开主张',topic:'两岸议题与金门地方发展',text:'黄世团提出金门应建立十年发展战略，面对两岸议题和重大建设时主动提出地方方案；他主张对有利金门的事项务实争取，涉及安全则严格把关。',limit:'报道转述竞选愿景与条件，未列具体两岸协商方案；不能据此推断其对所有两岸议题的立场。'},
  {city:'taitung',name:'王志偉',region:'jp',key:'county-wang-taitung-japan-quarantine-20210923',date:'2021-09-23',title:'王志伟谈释迦销日的检疫与处理难题',url:'https://www.businesstoday.com.tw/article/category/80392/post/202109230038/',publisherId:'other',publisherName:'今周刊（倾向待核定）',kind:'媒体采访释迦产业团体代表',topic:'日本市场与凤梨释迦检疫',text:'王志伟以释迦产业代表身份受访时认为，日本检疫要求及释迦表皮除虫、温度处理的技术难度，是开拓日本市场的挑战。',limit:'这是2021年对出口技术障碍的判断，不代表现行日本检疫规则，也不涵盖他对日本政治或外交的立场。'},
  {city:'hsinchu-county',name:'徐欣瑩',region:'cn',key:'county-hsu-hsinchu-referendum-20250321',date:'2025-03-21（议案印发）',title:'两岸与避免战争公投提案',url:'https://lis.ly.gov.tw/lygazettec/mtcdoc?PD110306%3ALCEWA01_110306_00302=',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'连署两岸与避免战争公投案',text:'徐欣莹连署许宇甄等委员提出的公投案；该案针对总统将中国称为境外敌对势力的说法，主张以公投询问政府避免战争。',limit:'她是连署人，并非案列提案人；提案理由中的政治判断属于提案方，不能据此认定公投已举行或通过。'},
  {city:'chiayi-city',name:'張啓楷',region:'cn',key:'county-chang-chiayi-cross-strait-20250304',date:'2025-03-04',title:'张啓楷质询国防与两岸关系',url:'https://lawmaker.twreporter.org/congress/a/158982',publisherId:'other',publisherName:'报导者观察站（立法院议事逐字资料）',kind:'立法院院会质询逐字记录',topic:'国防准备与两岸和平',text:'张啓楷在立法院质询时支持提高国防预算，并主张政府推动两岸和平、避免战争；他批评执政党的两岸路线。',limit:'这是2025年院会质询时的政治主张；行政院长当场反对他对官员子女的相关说法，不代表双方达成共识。'},
  {city:'penghu',name:'吳淑瑾',region:'us',key:'county-wu-penghu-us-tourism-20261019',date:'2026-10-19',title:'吴淑瑾提出国际多元观光政见',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人竞选主张',topic:'美国旅客与澎湖观光',text:'吴淑瑾提出发展多元国际客源，将到台湾本岛的美国旅客列为希望引导赴澎湖旅游的对象之一。',limit:'这是竞选构想，不代表已有美方合作协议或航线；不能概括其对美国外交政策的立场。'},
  {city:'penghu',name:'吳淑瑾',region:'jp',key:'county-wu-penghu-japan-tourism-20261019',date:'2026-10-19',title:'吴淑瑾提出国际多元观光政见',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人竞选主张',topic:'日本旅客与澎湖观光',text:'吴淑瑾提出发展多元国际客源，将到台湾本岛的日本旅客列为希望引导赴澎湖旅游的对象之一。',limit:'这是竞选构想，不代表已有日方合作协议或航线；不能概括其对日本外交政策的立场。'},
  {city:'hualien',name:'魏嘉賢',region:'cn',key:'county-wei-hualien-cross-strait-20230519',date:'2023-05-19',title:'东华大学两岸关系论坛纪录',url:'https://www.ndhu.edu.tw/p/404-1000-208704.php?Lang=zh-tw',publisherId:'official-tw',publisherName:'国立东华大学',kind:'大学论坛活动纪要',topic:'两岸关系与花莲观光农业',text:'魏嘉贤在东华大学论坛从观光和农产品销售角度谈两岸关系，认为政策应与时俱进，政府应更积极经营并维持两岸关系。',limit:'这是大学对论坛发言的摘要，不是逐字稿；不推定他对所有两岸议题的立场。'},
  {city:'hualien',name:'張峻',region:'cn',key:'county-chang-hualien-cross-strait-20241008',date:'2024-10-08（报道日）',title:'张峻率议会赴金门考察谈两岸观光',url:'https://n.yam.com/Article/20241008963551',publisherId:'other',publisherName:'蓝雀新传媒（蕃新闻转载；倾向待核定）',kind:'媒体报道议会考察及议长发言',topic:'两岸观光交流与花莲复苏',text:'张峻率花莲县议会赴金门考察时，主张花莲积极争取两岸观光合作，以协助受地震及豪雨影响的观光产业。',limit:'这是2024年针对观光交流的主张；具体开放措施及产业效果须另核，也不能概括其全部两岸政策。'},
  {city:'nantou',name:'許淑華',region:'us',key:'county-hsu-nantou-us-pork-20201202',date:'2020-12-02（议案印发）',title:'许淑华就美猪开放与经贸整合提出书面质询',url:'https://ppg.ly.gov.tw/ppg/SittingRelatedDocumentQuestionsEyReply/download/agenda1/02/pdf/10/02/06/LCEWA01_100206_00830.pdf',publisherId:'official-tw',publisherName:'立法院',kind:'立法院书面质询议案',topic:'美猪进口、食品安全与贸易政策',text:'许淑华在2020年书面质询中批评政府开放美猪的决策，担忧食品安全与国内养猪产业，并要求政府重视贸易协定和市场多元化。',limit:'食安风险和政策影响是她当时的主张与判断，不是本站对食品安全的科学结论；不能推定现今立场。'},
  {city:'nantou',name:'許淑華',region:'jp',key:'county-hsu-nantou-japan-20221004',date:'2022-10-04',title:'日本台湾交流协会访问南投县府会',url:'https://n.yam.com/Article/20221004411903',publisherId:'other',publisherName:'台湾好新闻（蕃新闻转载；倾向待核定）',kind:'媒体报道本人交流发言',topic:'台日地方观光与农业交流',text:'许淑华会见日本台湾交流协会副代表时表示，希望推动台日观光、农业及地方社区交流。',limit:'这是2022年一次会面中的地方交流愿望；不表示具体项目已经完成，也不概括全部日本政策。'},
  {city:'yunlin',name:'張嘉郡',region:'us',key:'county-chang-yunlin-us-tariffs-20250410',date:'2025-04-10',title:'张嘉郡质询美国关税与农业配套',url:'https://lawmaker.twreporter.org/congress/a/160082',publisherId:'other',publisherName:'报导者观察站（立法院议事逐字资料）',kind:'立法院委员会质询逐字记录',topic:'美国关税谈判与农业保护',text:'张嘉郡在美方关税政策变动后，要求政府在对美谈判中坚持农畜产品关税与产地标示原则，也呼吁协助受影响企业。',limit:'这是2025年质询与当时谈判主张；不能把当日税率视为目前税率，也不能推定最终谈判结果。'},
  {city:'yunlin',name:'張嘉郡',region:'jp',key:'county-chang-yunlin-japan-invest-201208',date:'2012-08（会面）',title:'中科管理局拜访张嘉郡与李应元',url:'https://www.ctsp.gov.tw/files/4b3c7bd6-2360-4621-afc0-6cffe156e91d.pdf',publisherId:'official-tw',publisherName:'中部科学园区管理局',kind:'官方园区简讯',topic:'日本企业投资与地方就业',text:'中科管理局简讯称，张嘉郡与李应元肯定虎尾园区引进日本小原光学，并希望管理局继续招商，增加地方就业。',limit:'是园区机关对两位立委会面意见的概括，不是逐字发言；不代表她对日本外交、安全议题的立场。'},
  {city:'taoyuan',name:'黃世杰',region:'cn',key:'county-huang-taoyuan-election-20231211',date:'2023-12-11',title:'黄世杰质询选举查察与境外介入',url:'https://lawmaker.twreporter.org/congress/a/148968',publisherId:'other',publisherName:'报导者观察站（立法院议事逐字资料）',kind:'立法院委员会质询逐字记录',topic:'境外介入与选举查察',text:'黄世杰在立法院质询时提及中国可能涉及影响选举，要求检调加强宣导与查察。',limit:'这是他对风险的质询，并非对具体案件已经查实的认定；不概括其全部两岸政策。'},
  {city:'taoyuan',name:'黃世杰',region:'us',key:'county-huang-taoyuan-us-judicial-202512',date:'2025-12-06 至 12-12',title:'外交部年度决算：法务部赴美交流',url:'https://ws.mofa.gov.tw/Download.ashx?icon=.pdf&n=5aSW5Lqk6YOoMTE05bm05Zau5L2N5rG6566XKOiHque3qOeJiCkucGRm&u=LzAwMS9VcGxvYWQvNDAyL3JlbGZpbGUvMTE5LzEyMTc2NC9lZmZiOWM5ZS0yMjU4LTQ0YjgtOTE4Yi0xZWRkZGI3MzlkNjgucGRm',publisherId:'official-tw',publisherName:'外交部',kind:'官方年度决算出访记录',topic:'赴美国参加司法交流',text:'外交部年度决算列法务部政务次长黄世杰率团赴美国，出席全美州检察长协会2025年冬季年会。',limit:'官方记录证明此次行程，未列个人对美国政策的完整主张或具体合作成果。'},
  {city:'taoyuan',name:'黃世杰',region:'us',key:'county-huang-taoyuan-us-pork-20200930',date:'2020-09-30',title:'黄世杰质询进口肉品溯源与学校午餐',url:'https://acta.tw/evidence/ev_gz_LCIDC01_1095801_00006_f47c499297a2',publisherId:'other',publisherName:'Acta（立法院公报资料；葛如钧委员办公室制作）',kind:'立法院委员会逐字记录',topic:'美国猪肉进口与学校午餐溯源',text:'讨论开放美猪进口的学校食安配套时，黄世杰追问加工肉品原料产地证明、追溯稽查及学校午餐人力与责任分工。',limit:'其质询聚焦标示和查验，不足以推定他赞成或反对所有美国猪肉进口；不作食品风险结论。'},
  {city:'taoyuan',name:'黃世杰',region:'jp',key:'county-huang-taoyuan-japan-court-20210421',date:'2021-04-21',title:'黄世杰质询国民法官制度准备',url:'https://lawmaker.twreporter.org/congress/a/129922',publisherId:'other',publisherName:'报导者观察站（立法院议事逐字资料）',kind:'立法院委员会质询逐字记录',topic:'参考日本司法制度与模拟法庭',text:'黄世杰比较日本模拟法庭经验，主张台湾增加模拟与行前训练，同时强调应累积本地经验，不能照搬日本或美国制度。',limit:'这是司法制度比较，不是对日本外交或安全政策的全面表态；他引用的场次数字未经本站独立核实。'},
  {city:'taoyuan',name:'張善政',region:'cn',key:'county-chang-taoyuan-cross-strait-20231127',date:'2023-11-27（活动）',title:'张善政谈两岸城市交流',url:'https://gab.tycg.gov.tw/News_Content.aspx?n=11895&s=1221179',publisherId:'official-tw',publisherName:'桃园市政府',kind:'市府新闻稿',topic:'两岸城市交流',text:'张善政在两岸关系座谈会表示，希望在时机成熟时推动桃园与大陆城市交流，并提到桃园台商对两岸关系的关切。',limit:'这是2023年的市府新闻稿与当时表态；不代表交流已落实，也不能概括其全部两岸政策。'},
  {city:'taoyuan',name:'張善政',region:'us',key:'county-chang-taoyuan-ontario-20250927',date:'2025-09-27',title:'美国加州安大略市副市长访问桃园',url:'https://udn.com/news/story/7324/9034047',publisherId:'udn',publisherName:'联合报',kind:'媒体报道城市交流',topic:'美国机场城市与桃园交流',text:'张善政接待美国加州安大略市副市长，双方就机场、物流和体育交流意见，并希望推动产业往来。',limit:'记录一次城市交流及期待，不代表已签订协议或可推断他对美国所有政策的立场。'},
  {city:'hsinchu-city',name:'莊競程',region:'cn',key:'county-chuang-cross-strait-20200506',date:'2020-05-06（议案印发）',title:'两岸人民关系条例修正草案',url:'https://ppg.ly.gov.tw/ppg/SittingRelatedDocumentReportMatter/download/agenda1/02/pdf/10/01/12/LCEWA01_100112_00028.pdf',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'连署两岸人民关系条例修正案',text:'莊競程连署蔡易余等人提出的两岸人民关系条例修正草案，提议删除第一条中的「国家统一前」等文字。',limit:'他是连署人而非提案人；这是2020年草案，不能据此认定最终通过或概括其全部两岸立场。'},
  {city:'taitung',name:'陳瑩',region:'cn',key:'county-chen-ying-cross-strait-20200506',date:'2020-05-06（议案印发）',title:'两岸人民关系条例修正草案',url:'https://ppg.ly.gov.tw/ppg/SittingRelatedDocumentReportMatter/download/agenda1/02/pdf/10/01/12/LCEWA01_100112_00028.pdf',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'连署两岸人民关系条例修正案',text:'陈莹连署蔡易余等人提出的两岸人民关系条例修正草案，提议删除第一条中的「国家统一前」等文字。',limit:'她是连署人而非提案人；这是2020年草案，不能据此认定最终通过或概括其全部两岸立场。'},
  {city:'chiayi-county',name:'蔡易餘',region:'cn',key:'county-tsai-cross-strait-20200506',date:'2020-05-06（议案印发）',title:'两岸人民关系条例修正草案',url:'https://ppg.ly.gov.tw/ppg/SittingRelatedDocumentReportMatter/download/agenda1/02/pdf/10/01/12/LCEWA01_100112_00028.pdf',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'提出两岸人民关系条例修正案',text:'蔡易余与其他委员提出两岸人民关系条例修正草案，提议删除第一条中的「国家统一前」等文字。',limit:'这是2020年的提案版本，不能据此认定最终通过或概括他此后的完整两岸政策。'},
  {city:'hsinchu-city',name:'莊競程',region:'us',key:'county-chuang-us-medical-20211110',date:'2021-11-10（议案印发）',title:'医学工程师法草案',url:'https://www.bmes.org.tw/FCKupload/files/%20%E9%99%A2%E7%B8%BD%E7%AC%AC1006%E8%99%9F%20%E5%A7%94%E5%93%A1%E6%8F%90%E6%A1%88%E7%AC%AC27397%E8%99%9F.pdf',publisherId:'other',publisherName:'中华民国生物医学工程学会（刊载立法院议案）',kind:'立法院议案关系文书',topic:'引用美国制度推动医学工程立法',text:'莊競程与刘建国提出医学工程师法草案，议案以美国临床工程师证照制度为例，主张建立相关专业制度。',limit:'这是国内医疗专业立法中的美国制度比较，不是对美国外交政策的表态；草案是否通过须另查。'},
  {city:'hsinchu-city',name:'莊競程',region:'jp',key:'county-chuang-japan-medical-20211110',date:'2021-11-10（议案印发）',title:'医学工程师法草案',url:'https://www.bmes.org.tw/FCKupload/files/%20%E9%99%A2%E7%B8%BD%E7%AC%AC1006%E8%99%9F%20%E5%A7%94%E5%93%A1%E6%8F%90%E6%A1%88%E7%AC%AC27397%E8%99%9F.pdf',publisherId:'other',publisherName:'中华民国生物医学工程学会（刊载立法院议案）',kind:'立法院议案关系文书',topic:'引用日本制度推动医学工程立法',text:'莊競程与刘建国提出医学工程师法草案，议案以日本临床工程师立法为例，主张建立相关专业制度。',limit:'这是国内医疗专业立法中的日本制度比较，不是对日本外交政策的表态；草案是否通过须另查。'},
  {city:'hsinchu-city',name:'莊競程',region:'jp',key:'county-chuang-tsukuba-2014',date:'2014-07 至 09',title:'莊競程教师履历',url:'https://www.nycu.edu.tw/userfiles/ibech/files/20260416160700419.pdf',publisherId:'official-tw',publisherName:'国立阳明交通大学',kind:'大学公布教师履历',topic:'日本筑波大学访问学者经历',text:'大学公布的履历列莊競程2014年7月至9月在日本筑波大学物理工学系计算光学实验室担任访问学者。',limit:'这是学术经历，不能据此推断日本外交或安全政策立场。'},
  {city:'hsinchu-city',name:'高虹安',region:'us',key:'county-kao-cupertino-20261026',date:'2026-10-26（市府发布）',title:'新竹市师生赴美国库比蒂诺教育交流',url:'https://www.cna.com.tw/postwrite/chi/447973',publisherId:'official-tw',publisherName:'新竹市政府（中央社讯息平台承载）',kind:'市政府新闻稿',topic:'支持与美国姐妹市教育交流',text:'新竹市府称，29名师生赴美国库比蒂诺进行教育文化交流；高虹安表示城市外交可通过教育及文化建立理解。',limit:'这是市府新闻稿，不代表市长本人随团赴美，也不能概括她对美国全部政策的立场。'},
  {city:'keelung',name:'謝國樑',region:'cn',key:'county-hsieh-shenzhen-20231110',date:'2023-11-10 至 11-12',title:'谢国樑率团赴深圳港口城市论坛',url:'https://www.klcg.gov.tw/wSite/public/Attachment/01703/f1702275300634.pdf',publisherId:'official-tw',publisherName:'基隆市政府',kind:'市府出访考察报告',topic:'深圳港口城市论坛与市政考察',text:'谢国樑率基隆市府代表团赴深圳参加两岸港口城市论坛及考察，市府报告列出海洋产业、观光和港口经验交流等目的。',limit:'这是市府考察记录和官方所述目的；交流不代表各项合作成果已经落实，也不能概括全部两岸立场。'},
  {city:'keelung',name:'謝國樑',region:'us',key:'county-hsieh-ait-20230712',date:'2023-07-12',title:'谢国樑与美国在台协会处长会面',url:'https://www.cna.com.tw/news/afe/202307120415.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道会面',topic:'美国在台协会与城市发展交流',text:'谢国樑与美国在台协会台北办事处长孙晓雅会面，讨论基隆城市发展、灾害防救及美台合作机会。',limit:'这是一次会面记录，不代表双方就所有美台政策达成一致。'},
  {city:'keelung',name:'謝國樑',region:'jp',key:'county-hsieh-kure-20250907',date:'2025-09-07（报道日）',title:'日本吴市代表团访问基隆',url:'https://udn.com/news/amp/story/7328/8988478',publisherId:'udn',publisherName:'联合报',kind:'媒体报道姐妹市交流',topic:'接待日本吴市代表团',text:'谢国樑接见日本姐妹市吴市代表团，谈及两市在文化活动及城市交流方面的往来。',limit:'记录一次地方交流及市长发言，不推断其对日本全部政策的立场。'},
  {city:'keelung',name:'童子瑋',region:'us',key:'county-tung-keelung-us-kids-dinner-20260415',date:'2026-04-15',title:'童子玮提出参考美国儿童国宴改进学校午餐',url:'https://www.cna.com.tw/news/aloc/202604150303.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道议长办公室说明与候选人主张',topic:'参考美国学校营养教育活动',text:'童子玮表示希望参考美国前第一夫人蜜雪儿·奥巴马的儿童国宴概念，邀请专家开发基隆学校午餐菜谱。',limit:'这是借鉴一项美国活动的地方教育构想，不表示他对美国外交或安全政策有特定立场；具体菜谱和实施条件仍待核实。'},
  {city:'keelung',name:'童子瑋',region:'jp',key:'county-tung-kure-20240429',date:'2024-04-29（活动）',title:'基隆议会与日本吴市议会缔结姐妹会',url:'https://sport.ftvnews.com.tw/news/detail/2024430N03M1',publisherId:'ftv',publisherName:'民视新闻',kind:'媒体报道议会访问与签约',topic:'率议会赴日本吴市交流',text:'童子玮率基隆市议会议员参加日本吴市吴港祭，两地议会签署姐妹会协议，延续两市地方交流。',limit:'属于地方议会交流，不代表对日本外交或安全政策的全面表态。'},
  {city:'kinmen',name:'李文良',region:'us',key:'county-li-kinmen-us-study-20180129',date:'2018-01-29（报道日）',title:'李文良为金门高中赴美国学习学生授旗',url:'https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=F7822439D5A04F7C&sms=BF7D6D478B935644',publisherId:'official-tw',publisherName:'金门县政府网站（金门日报报道）',kind:'地方媒体报道教育交流活动',topic:'学生赴美国交流学习',text:'时任教育处长李文良为赴美国加州学习的金门高中学生授旗，分享自己赴美留学经验，并鼓励学生与当地学生交流。',limit:'这是教育交流活动及发言，不代表对美国外交、安全或贸易政策的立场。'},
  {city:'kinmen',name:'李文良',region:'jp',key:'county-li-kinmen-japan-20230210',date:'2023-02-10（活动）',title:'李文良接待日本冲绳访问团',url:'https://www.kmdn.gov.tw/1117/1271/1272/551796/',publisherId:'other',publisherName:'金门日报（倾向待核定）',kind:'地方媒体报道县府接待及发言',topic:'冲绳访团与地方观光交流',text:'李文良任副县长时接待日本冲绳地方议员及前国会议员一行，讨论金门的两岸位置和国际观光，并介绍经厦门转往其他城市的交通经验。',limit:'记录一次接待和交流；后续旅行业务或合作协议是否落实需另核。'},
  {city:'kinmen',name:'陳玉珍',region:'cn',key:'county-chen-kinmen-market-20260902',date:'2026-09-02',title:'陈玉珍登记参选及两岸经贸主张',url:'https://www.cna.com.tw/news/aipl/202609020279.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人登记后发言',topic:'金门农渔产品大陆通路',text:'陈玉珍提出希望由金门酒厂带领当地农、渔及畜牧产品开拓大陆通路，并维持两岸交流。',limit:'这是竞选主张，商品准入、金酒角色和销售成果仍需具体核实。'},
  {city:'kinmen',name:'陳玉珍',region:'us',key:'county-chen-kinmen-us-bill-20250514',date:'2025-05-14（议案印发）',title:'陈玉珍共同提出关税冲击纾困草案',url:'https://lis.ly.gov.tw/lygazettec/mtcdoc?PD110312%3ALCEWA01_110312_00042=',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'美国关税与产业纾困',text:'陈玉珍与翁晓玲共同提出特别条例草案，针对美国对等关税可能冲击，提出强化产业与民生纾困措施。',limit:'记录2025年草案的提案内容，不代表该版本已通过或关税仍为当时水平。'},
  {city:'kinmen',name:'陳玉珍',region:'jp',key:'county-chen-kinmen-japan-food-20161119',date:'2016-11-19（报道日）',title:'陈玉珍参加日本核灾地区食品进口抗议',url:'https://www.kmdn.gov.tw/1117/1271/1272/274134/',publisherId:'other',publisherName:'金门日报（倾向待核定）',kind:'地方媒体报道县议员发言与活动',topic:'日本灾区食品进口与食品安全',text:'陈玉珍2016年参加反对日本核灾地区食品进口的陈情活动，同时提到自己曾赴日本留学、喜欢日本风土人情。',limit:'这是她对当时进口措施的看法，不是对日本食品安全风险的独立科学结论，也不能推定现今政策立场。'},
  {city:'pingtung',name:'周春米',region:'cn',key:'county-chou-cross-strait-20260412',date:'2026-04-12',title:'周春米回应大陆宣布十项对台措施',url:'https://udn.com/news/story/124802/9437055',publisherId:'udn',publisherName:'联合报',kind:'媒体报道县长受访发言',topic:'大陆对台措施与屏东农渔业',text:'周春米认为大陆宣布对台措施受到政治因素影响，提及屏东农渔产品过往面临输入限制，并主张提升品质、开拓更多市场。',limit:'政治动机及政策影响是她的判断；具体产品限制与市场开放状态应按各时间点另核。'},
  {city:'pingtung',name:'蘇清泉',region:'cn',key:'county-su-cross-strait-20210731',date:'2021-07-31',title:'苏清泉谈两岸民间交流',url:'https://www.bastillepost.com/hongkong/article/8911422-%E8%98%87%E6%B8%85%E6%B3%89%EF%BC%9A%E7%B6%A0%E6%8A%B1%E6%8C%81%E8%A6%81%E8%88%87%E5%A4%A7%E9%99%B8%E5%B0%8D%E8%91%97%E4%B9%BE%E7%9A%84%E5%BF%83%E6%85%8B%E5%BE%88%E5%8D%B1%E9%9A%AA',publisherId:'other',publisherName:'中评社（巴士的报转载；倾向待核定）',kind:'转载媒体对本人专访',topic:'主张恢复两岸民间交流',text:'苏清泉接受中评社采访时，主张释放善意、恢复民间交流，并以商贸、旅游和小三通为例，认为有助缓和两岸紧张。',limit:'这是2021年的受访主张；不能推定具体开放措施已实施，也不能直接视为2026年完整政策。'},
  {city:'pingtung',name:'蘇清泉',region:'us',key:'county-su-us-fruit-20240504',date:'2024-05-04（报道日）',title:'苏清泉谈水果输美与贸易条件',url:'https://news.tvbs.com.tw/life/2475708',publisherId:'tvbs',publisherName:'TVBS新闻',kind:'媒体报道本人对台美农产品贸易发言',topic:'台湾水果输美与贸易交换条件',text:'苏清泉表示，希望美国直接进口台湾水果，不要附加交换条件；当时报道讨论的是水果准入与美猪莱剂标准是否关联。',limit:'报道未证实美方提出以放宽莱剂标准作为交换条件；引述是候选人对当时谈判的主张，不代表协议结果。'},
  {city:'pingtung',name:'蘇清泉',region:'us',key:'county-su-us-tariff-20250717',date:'2025-07-17',title:'苏清泉质询美国农产品关税与农业配套',url:'https://lawmaker.twreporter.org/congress/a/163182',publisherId:'other',publisherName:'报导者观察站（议事逐字资料）',kind:'立法院委员会质询逐字记录',topic:'美国农产品关税与本地农业',text:'苏清泉在台美关税谈判期间，担忧若美国猪肉和稻米降至零关税会冲击台湾农业，要求农业部门提出保护配套。',limit:'零关税与价格影响是当时的假设和个人判断；不能作为现行税率或实际冲击结果。'},
  {city:'taitung',name:'陳瑩',region:'us',key:'county-chen-ying-us-pork-201605',date:'2016-05（立法院委员会）',title:'陈莹参与含莱克多巴胺猪肉管理提案',url:'https://ppg.ly.gov.tw/ppg/PublicationBulletinDetail/download/communique1/final/pdf/105/34/LCIDC01_1053401.pdf',publisherId:'official-tw',publisherName:'立法院公报',kind:'立法院委员会提案与议事纪录',topic:'进口猪肉食安与边境查验',text:'2016年立法院委员会纪录显示，陈莹参与建请禁止含莱克多巴胺美国猪肉进口的提案，并另提议检讨提高进口猪肉边境抽验比例。',limit:'属于2016年提案及当时食安政策讨论；不据此推断她此后立场或现行检验标准。'},
  {city:'chiayi-city',name:'王美惠',region:'cn',key:'county-wang-mh-mac-20240307',date:'2024-03-07',title:'王美惠质询两岸沟通与赴陆就学资讯',url:'https://lawmaker.twreporter.org/congress/a/149517',publisherId:'other',publisherName:'报导者观察站（议事逐字资料）',kind:'立法院质询逐字记录',topic:'两岸沟通与赴陆就学资讯',text:'王美惠质询时批评大陆限制台湾农产品及M503航线相关做法，同时认为双方仍需努力沟通；她也建议更新赴大陆就学的安全资讯。',limit:'记录2024年一次质询及本人判断；不能概括她对所有两岸议题的立场。'},
  {city:'chiayi-city',name:'王美惠',region:'us',key:'county-wang-mh-tariff-bill-20250507',date:'2025-05-07（议案印发）',title:'王美惠提出因应美国关税的韧性条例草案',url:'https://ppg.ly.gov.tw/ppg/download/agenda1/02/pdf/11/03/11/LCEWA01_110311_00040.pdf',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'美国关税冲击与国内应对',text:'王美惠提出特别条例草案，针对美国关税及国际情势变化，规划企业金融支持、产业升级、就业和农业支持等措施。',limit:'这是2025年印发的提案版本，不能直接视为最终通过条文、现行关税或措施已完成。'},
  {city:'chiayi-city',name:'王美惠',region:'jp',key:'county-wang-mh-japan-20251118',date:'2025-11-18（交流）',title:'立委访日交流并邀请日方访问嘉义',url:'https://money.udn.com/money/story/7307/9149700',publisherId:'udn',publisherName:'联合报（经济日报网站刊载）',kind:'媒体报道访日交流',topic:'访日议会交流与嘉义地方外交',text:'王美惠与立委赴日本拜会国会议员，讨论经济安全、供应链与台海和平；报道说她邀请日方到嘉义参访。',limit:'报道对安全议题的具体评价主要归于团长邱志伟，不能全部转作王美惠个人表态；是否成行另待核实。'},
  {city:'chiayi-county',name:'蔡易餘',region:'us',key:'county-tsai-tariff-bill-20250507',date:'2025-05-07（议案印发）',title:'蔡易余与王美惠提出关税应对草案',url:'https://ppg.ly.gov.tw/ppg/download/agenda1/02/pdf/11/03/11/LCEWA01_110311_00032.pdf',publisherId:'official-tw',publisherName:'立法院',kind:'立法院议案关系文书',topic:'美国关税与产业支持提案',text:'蔡易余与王美惠共同提出特别条例草案，以企业金融支持、农渔产品外销媒合和就业措施回应美国关税冲击。',limit:'仅记录2025年提案内容，不代表草案原样通过或现行税率。'},
  {city:'yilan',name:'林國漳',region:'jp',key:'county-lin-yilan-japan-route-20260511',date:'2026-05-11',title:'林国漳规划苏澳至日本海洋观光',url:'https://www.cna.com.tw/news/aloc/202605110187.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人记者会',topic:'提出苏澳至日本的海洋观光构想',text:'林国漳提出打造苏澳通往日本的「国际蓝色公路」，作为宜兰海洋观光发展的一环。',limit:'这是竞选构想，航线、预算与中央及日本方面的许可仍需确认；不代表已开航或达成协议。'},
  {city:'changhua',name:'陳素月',region:'jp',key:'county-chen-su-yue-japan-tourism-20221207',date:'2022-12-07',title:'陈素月质询日本游客与观光预算',url:'https://lawmaker.twreporter.org/congress/a/142702',publisherId:'other',publisherName:'报导者观察站（议事逐字资料）',kind:'议事逐字稿与质询记录',topic:'日本游客与观光客源分析',text:'陈素月质询交通部门时，认为应分析日本旅客来台人数与汇率等可能影响因素，再据此检视观光客源拓展计划的成效。',limit:'日元汇率影响是她在2022年的推测，不是经该质询证实的因果关系；不是对日本全部政策的评价。'},
  {city:'changhua',name:'陳素月',region:'us',key:'county-chen-su-yue-us-tariff-20250425',date:'2025-04-25',title:'陈素月在关税背景下质询彰化产业发展',url:'https://lawmaker.twreporter.org/congress/a/160688',publisherId:'other',publisherName:'报导者观察站（议事逐字资料）',kind:'议事逐字稿与质询记录',topic:'美国关税与彰化产业竞争力',text:'陈素月在立法院提到美国关税冲击，要求行政院说明区域产业计划如何为彰化争取资源、提升地方产业竞争力。',limit:'这是2025年4月质询，关税条件可能变化；不能据此认定有关产业投资已经落实。'},
  {city:'changhua',name:'邱建富',region:'cn',key:'county-chiu-ma-tsu-20110802',date:'2011-08-02（报道日）',title:'邱建富说明赴福建宗教交流',url:'https://news.pts.org.tw/article/182552',publisherId:'pts',publisherName:'公视新闻',kind:'媒体报道及当事人回应',topic:'赴福建宗教活动与海峡论坛争议',text:'针对有关他赴大陆参加海峡论坛的传闻，时任彰化市长邱建富表示，他是以南瑶宫负责人身份赴漳州参与宗教活动，并非参加海峡论坛。',limit:'公视报道本人的澄清与当时民进党方面的顾虑；行程与报道具体日期可能不同，不将传闻视为已证实。'},
  {city:'changhua',name:'邱建富',region:'jp',key:'county-chiu-osaka-speech-20181209',date:'2018-12-09（报道日）',title:'邱建富赴日本交流彰化市政',url:'https://www.nownews.com/amp/news/3111814',publisherId:'other',publisherName:'NOWnews今日新闻（倾向待核定）',kind:'媒体报道访日演讲及市公所资料',topic:'赴小松市与大阪侨界交流',text:'邱建富任彰化市长时率团赴日本小松市交流，并在大阪向侨界演讲，讨论彰化市政与台湾经贸。',limit:'报道刊载日不等于访问每一项活动的准确日期；交流经历不等于对日本所有政策的立场。'},
  {city:'changhua',name:'陳素月',region:'cn',key:'county-chen-su-yue-china-airline-20220418',date:'2022-04-18',title:'陈素月质询华航飞机识别与台湾意象',url:'https://lawmaker.twreporter.org/congress/a/138216',publisherId:'other',publisherName:'报导者观察站（议事逐字资料）',kind:'议事逐字稿与质询记录',topic:'质询华航飞机识别',text:'陈素月在立法院交通委员会质询时，希望华航飞机更凸显台湾意象，让国际社会区分台湾与中国大陆。',limit:'这是针对飞机识别的一次国会质询，不据此推断她在所有两岸政策上的立场；逐字稿可对照立法院原始议事资料。'},
  {city:'yunlin',name:'張嘉郡',region:'cn',key:'county-chang-chiachun-mailiao-20091228',date:'2009-12-28',title:'张嘉郡谈麦寮港与大陆农产品市场',url:'https://www.ly.gov.tw/EngPages/Detail.aspx?nodeid=4923&pid=13735',publisherId:'cna',publisherName:'中央社（立法院网站转载）',kind:'中央社报道国会记者会',topic:'麦寮港与对大陆农产运输',text:'张嘉郡在立法院记者会表示，若麦寮港可转型为工商综合港，可缩短台湾农产品运往大陆的时间，改善运输新鲜度。',limit:'这是2009年针对港口转型的当时看法；不表示当时草案已通过，也不能自动推定她2026年的完整立场。'},
  {city:'yunlin',name:'劉建國',region:'cn',key:'county-liu-yunlin-china-food-20220804',date:'2022-08-04',title:'刘建国回应大陆限制食品输入与云林农产',url:'https://www.mirrormedia.mg/story/20220804soc004',publisherId:'other',publisherName:'镜周刊（倾向待核定）',kind:'媒体报道候选人回应与农委会说法',topic:'大陆进口限制与农产外销',text:'大陆限制部分台湾食品输入后，刘建国表示已向农委会反映，盼通过拓展内外销及加工等措施保障云林农渔民。',limit:'这是2022年对特定进口限制的回应；报道转述的后续应对方案不等于所有措施均已落实。'},
  {city:'yunlin',name:'劉建國',region:'us',key:'county-liu-yunlin-peanut-20260611',date:'2026-06-11',title:'刘建国回应美国花生与云林花生价格',url:'https://www.5ch.com.tw/news.php?act=view&id=81532',publisherId:'other',publisherName:'台湾新闻网（倾向待核定）',kind:'地方媒体报道立委与农业部门说法',topic:'美国花生进口与农民保障',text:'刘建国表示，台美对等贸易协定当时尚未生效，不能直接将近期花生价格波动归因于美国花生零关税进口；他要求农业部门采取稳定价格措施。',limit:'这是2026年6月的政策阶段和本人判断，不代表协定当前状态，也不据此独立认定价格波动原因。'},
  {city:'nantou',name:'許淑華',region:'cn',key:'county-hsu-nantou-food-expo-20260508',date:'2026-05-08',title:'许淑华说明婉拒大陆食品展邀请',url:'https://www.cna.com.tw/news/aloc/202605080288.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道县长受访说明',topic:'大陆食品展与南投农产推广',text:'许淑华表示，南投县府因筹备时间紧凑婉拒大陆食品展邀请，不会派员参展，但仍欢迎有助行销南投农产品的各地邀请。',limit:'这是对该次展会的说明，不应简化为拒绝所有大陆交流；报道未核实未来任何参展结果。'},
  {city:'miaoli',name:'鍾東錦',region:'jp',key:'county-chung-miaoli-japan-20260410',date:'2026-03-29 至 04-03（考察）',title:'钟东锦率企业团考察日本半导体与氢能',url:'https://www.cna.com.tw/news/aloc/202604100272.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道访问及返台后记者会',topic:'赴日本考察能源与制造业',text:'钟东锦率县府及企业代表赴日本考察，返台后表示希望促进企业交流，并参考当地氢能经验推动苗栗产业发展。',limit:'报道记录考察与县长愿景；技术引进、投资落地与减排成效仍需逐项核验。'},
  {city:'miaoli',name:'鍾東錦',region:'us',key:'county-chung-miaoli-us-tariff-20250803',date:'2025-08-03',title:'苗栗县府说明美国关税与产业应对',url:'https://www.miaoli.gov.tw/News_Content2.aspx?n=285&s=877869',publisherId:'official-tw',publisherName:'苗栗县政府',kind:'县府新闻稿记载县长发言与应对措施',topic:'美国关税对苗栗产业的影响',text:'县府报道，钟东锦认为当时美国宣布的对台关税将冲击出口产业，并说明县府设立应变小组、企业服务与就业转型支持等措施。',limit:'这是2025年8月的关税背景及县府说明，不代表现行税率或独立证实各措施成效。'},
  {city:'hsinchu-county',name:'鄭朝方',region:'cn',key:'county-cheng-yang-shenzhen-20260709',date:'2026-07-09',title:'郑朝方回应杨文科赴深圳交流时机',url:'https://www.cna.com.tw/news/aloc/202607090184.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻采访竹北市长回应县长赴陆行程',topic:'回应县长赴深圳行程争议',text:'新竹县长杨文科赴深圳交流的时机受到质疑时，郑朝方表示各首长有既定行程，认为该行程应是事先安排，并盼各级政府合作防灾。',limit:'这是对特定行程及防灾安排的回应，不能扩大为对两岸政策的全面立场。'},
  {city:'hualien',name:'游淑貞',region:'cn',key:'county-you-hualien-cross-strait-20260626',date:'2026-06-26（报道日）',title:'游淑贞受访谈农产品外销与两岸观光',url:'https://168abc.net/0000/30724',publisherId:'other',publisherName:'168周报（倾向待核定）',kind:'媒体转述节目对候选人的专访',topic:'两岸农贸与观光交流',text:'游淑贞受访时强调农产品外销通路，并主张重启两岸观光交流，认为可帮助花莲旅游及地方产业。',limit:'这是候选人的经济与观光主张，相关通行政策涉及中央权限；报道未证实旅游已经重启或经济效果。'},
  {city:'hualien',name:'游淑貞',region:'cn',key:'county-you-guangxi-201904',date:'2019-04-11 至 04-16',title:'游淑贞率吉安代表团赴广西交流',url:'https://038.news/archives/54421',publisherId:'other',publisherName:'湾湾新闻（倾向待核定）',kind:'地方媒体报道乡长率团考察及发言',topic:'吉安乡赴广西考察',text:'游淑贞率乡公所与乡民代表等赴广西考察，表示希望透过城市交流相互学习，并延续吉安与当地的往来。',limit:'地方媒体记载2019年行程与交流意愿；访问成果及各项费用未由该报道独立核验。'},
  {city:'taitung',name:'吳秀華',region:'cn',key:'county-wu-taitung-market-cn-20260619',date:'2026-06-19',title:'吴秀华谈台东农产品市场与海峡论坛',url:'https://ttt.hsnews.com.tw/political-news/wu-xiu-hua-ting-rao-qing-ling-ti-nong-min-zhao-shi-chang-he-cuo-zhi-you.html',publisherId:'other',publisherName:'台东最速報（倾向待核定）',kind:'地方媒体报道本人对市场与论坛的看法',topic:'大陆市场与农产品销售',text:'饶庆铃以视频参加海峡论坛介绍台东凤梨释迦后，吴秀华表示应维护农民既有的重要销售市场，同时开拓新市场。',limit:'这是候选人针对农产品出口的立场，涉及的法规适用与论坛政治背景应另查；不代表对所有两岸议题的态度。'},
  {city:'taitung',name:'吳秀華',region:'jp',key:'county-wu-taitung-japan-market-20260619',date:'2026-06-19',title:'吴秀华谈开拓日本与其他农产品市场',url:'https://ttt.hsnews.com.tw/political-news/wu-xiu-hua-ting-rao-qing-ling-ti-nong-min-zhao-shi-chang-he-cuo-zhi-you.html',publisherId:'other',publisherName:'台东最速報（倾向待核定）',kind:'地方媒体报道候选人发言',topic:'日本与农产品出口市场',text:'吴秀华表示支持开拓日本、东南亚及欧美新市场，但认为通路建立需要时间，短期难以完全替代既有市场。',limit:'属于对农产品市场的判断；未说明日本具体通路、采购合约或政策时程。'},
  {city:'taitung',name:'吳秀華',region:'us',key:'county-wu-taitung-us-market-20260619',date:'2026-06-19',title:'吴秀华谈开拓欧美等农产品市场',url:'https://ttt.hsnews.com.tw/political-news/wu-xiu-hua-ting-rao-qing-ling-ti-nong-min-zhao-shi-chang-he-cuo-zhi-you.html',publisherId:'other',publisherName:'台东最速報（倾向待核定）',kind:'地方媒体报道候选人发言',topic:'欧美市场与农产品出口',text:'吴秀华把欧美列为可开拓的农产品市场，同时认为新通路需要时间，短期内难以完全取代既有市场。',limit:'报道使用「欧美」这一宽泛范围，没有单独提出美国政策或具体美国客户；不据此推断对美国其他议题的立场。'},
  {city:'taitung',name:'吳秀華',region:'jp',key:'county-wu-taitung-japan-food-20161114',date:'2016-11-14',title:'台东日本食品输台公听会抗议',url:'https://www.cna.com.tw/news/asoc/201611140103.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体记录公听会现场',topic:'参加日本食品进口公听会抗议',text:'2016年台东日本食品输台公听会上，时任县议员吴秀华与其他抗议者举牌，并参与要求公听会解散的行动。',limit:'报道记载现场集体行动，未逐一列出吴秀华本人对不同产地和检验标准的意见；不能推定其2026年立场。'},
  {city:'hualien',name:'游淑貞',region:'jp',key:'county-you-kushiro-visit-20261103',date:'2026-11-03',title:'钏路町议员访问吉安乡',url:'https://www.hsnews.com.tw/lifestyle-and-community/you-shu-zhen-chi-xu-shen-hua-tai-ri-you-hao-cheng-shi-jiao-liu-bei-hai-dao-chuan-lu-ting-yi-yuan-cai-feng-ji-an-nong-ye-fa-zhan-yu-wen-hua-mei-li.html',publisherId:'other',publisherName:'花莲最速報（倾向待核定）',kind:'地方媒体报道乡公所接待交流',topic:'接待日本钏路町议员',text:'游淑贞与乡公所团队接待北海道钏路町议员，介绍吉安农业及观光资源，并表示希望延续双方地方交流。',limit:'报道记录接待活动与交流意愿；不代表具体投资或对日本全部政策的立场。'},
  {city:'hualien',name:'游淑貞',region:'jp',key:'county-you-kushiro-20231122',date:'2023-11-22',title:'吉安乡与日本钏路町签署友好交流协定',url:'https://taiwannews.jp/2023/11/%E5%90%89%E5%AE%89%E9%84%89%E8%88%87%E9%87%A7%E8%B7%AF%E7%94%BA%E7%B0%BD%E7%BD%B2%E5%8F%8B%E5%A5%BD%E4%BA%A4%E6%B5%81%E5%8D%94%E5%AE%9A-%E9%A7%90%E6%97%A5%E4%BB%A3%E8%A1%A8%E8%AC%9D%E9%95%B7%E5%BB%B7/',publisherId:'other',publisherName:'台湾新闻（倾向待核定）',kind:'媒体报道乡长访问及签署仪式',topic:'吉安与北海道钏路町交流',text:'游淑贞率团赴北海道，与钏路町签署友好交流协定，期待在农业、教育、文化、经济等领域深化往来。',limit:'报道记录签约及交流期待；具体项目成果和灾害互助实际执行情况须另核。'},
  {city:'chiayi-county',name:'蔡易餘',region:'jp',key:'county-tsai-japan-exchanges-20260417',date:'2026-04-17',title:'蔡易余支持日本民间提出的台日交流法草案',url:'https://udn.com/news/story/6656/9447749',publisherId:'udn',publisherName:'联合报',kind:'媒体报道记者会及本人发言',topic:'支持促进台日官员交流的法案构想',text:'蔡易余支持日本幸福实现党提出的台湾交流发展法草案，认为便利双方官员往来有助台日关系与国际合作。',limit:'这是日本政党提出的草案及蔡易余当时的支持表态，报道未证明日本国会已通过该法。'},
  {city:'pingtung',name:'蘇清泉',region:'jp',key:'county-su-japan-food-20180529',date:'2018-05-29',title:'苏清泉在屏东造势谈日本食品进口',url:'https://www.cna.com.tw/news/aloc/201805290269.aspx',publisherId:'cna',publisherName:'中央社',kind:'媒体报道往届竞选造势发言',topic:'反对日本福岛食品进口',text:'苏清泉在2018年竞选造势时表示，担任立委时反对日本福岛食品进口台湾。',limit:'这是2018年对特定地区食品进口的表态；现今立场及对其他日本产品的看法须另核。'},
  {city:'pingtung',name:'蘇清泉',region:'jp',key:'county-su-japan-medical-20150704',date:'2015-07-04',title:'苏清泉谈台日医师灾难支援备忘录',url:'https://newtalk.tw/news/view/2015-07-04/61907',publisherId:'newtalk',publisherName:'Newtalk新闻',kind:'媒体报道并转述中央社采访及卫生部门说明',topic:'灾难医疗与台日医师合作',text:'八仙尘爆后，时任医师公会全国联合会理事长苏清泉表示，拟与日本医师会签署灾难支援备忘录，推动外籍医护在本地医师监督下提供协助。',limit:'报道当时称文件尚待交换签署和官方审核；卫生部门表示外籍医师不得执行核心医疗业务，实际签署和支援结果须另核。'},
  {city:'kinmen',name:'張火木',region:'cn',key:'county-chang-kinmen-cross-strait-20260904',date:'2026-09-04',title:'张火木提出厦门机场与金厦交通交流构想',url:'https://udn.com/news/story/124652/9735260',publisherId:'udn',publisherName:'联合报',kind:'媒体报道参选登记时的公开主张',topic:'研究厦门机场及金厦大桥衔接',text:'张火木主张强化两岸交流，争取参访厦门翔安机场并研究其对金门的经济效益，提出推动同翔金厦大桥衔接及两岸协商机制。',limit:'这是候选人的提议，跨境建设与协商涉及中央权限；不表示项目已经核定或能够由县府单独完成。'},
  {city:'kinmen',name:'張火木',region:'cn',key:'county-chang-kinmen-minithree-20080119',date:'2008-01-19（报道日）',title:'张火木谈小三通与家族经历',url:'https://www.kmdn.gov.tw/1117/1271/4189/46670/',publisherId:'other',publisherName:'金门日报（倾向待核定）',kind:'地方报纸人物采访与书籍序言',topic:'小三通与两岸家族往来',text:'张火木在小三通专题著作序言中认为通航拉近两岸往来距离；报道也记载，他2001年经小三通到福建惠安探访父亲故乡。',limit:'这是2001年经历及2008年著作中的看法，不代表他对2026年全部两岸政策的立场。'},
  {city:'kinmen',name:'洪和成',region:'cn',key:'county-hung-kinmen-cross-strait-20240104',date:'2024-01-04（政见会）',title:'洪和成在立委政见会谈金厦交通与离岛法制',url:'https://www.kmdn.gov.tw/1117/1271/1272/562589',publisherId:'other',publisherName:'金门日报（倾向待核定）',kind:'新闻报道往届公办政见会',topic:'金厦大桥、陆客与地方自主',text:'洪和成在2024年立委选举政见会主张，争取将金厦大桥、陆客来金和两岸和平示范区等议题纳入离岛基本法；他强调不损害台湾利益及没有安全问题的前提。',limit:'属于往届立委竞选主张；相关立法、建设与安全条件均未由这篇报道证实达成，本届是否沿用须另核。'},
  {city:'kinmen',name:'黃世團',region:'jp',key:'county-huang-kinmen-okinawa-art-2014',date:'2014年',title:'黄世团参加冲绳版画联展',url:'https://www.emuseum.com.tw/Artist2.aspx?id=G300_AA_101248',publisherId:'other',publisherName:'桃园网络美术馆（倾向不适用）',kind:'美术馆艺术家展览履历',topic:'日本冲绳版画展览',text:'桃园网络美术馆的展览履历列黄世团参加2014年日本冲绳佐喜真美术馆东亚艺术家版画联展。',limit:'这是艺术展览经历，不能据此推断他对日本政治或外交的立场；展览具体日期待核。'},
  {city:'taitung',name:'王志偉',region:'cn',key:'county-wang-taitung-cross-strait-20231020',date:'2023-10-20（报道日）',title:'王志伟谈凤梨释迦销往大陆',url:'https://news.pts.org.tw/article/662861',publisherId:'pts',publisherName:'公视新闻',kind:'媒体采访农产合作社负责人',topic:'凤梨释迦出口与检疫',text:'王志伟作为台东释迦合作社负责人，表示农民应做好生产履历，并认为大陆对凤梨释迦的限制与部分开放有政治因素。',limit:'这是他在2023年受访时对检疫与贸易的个人判断，不将动机判断作为已证实事实，也不推定他对所有两岸议题的立场。'},
  {city:'taitung',name:'王志偉',region:'cn',key:'county-wang-taitung-variety-20260629',date:'2026-06-29（报道日）',title:'王志伟谈释迦品种权保护',url:'https://news.pts.org.tw/article/815187',publisherId:'pts',publisherName:'公视新闻',kind:'媒体报道农业团体与农改场意见',topic:'两岸农产竞争与品种权',text:'大陆释迦生产与技术外流争议中，王志伟主张确立品种权，争取对农民权益的保护。',limit:'王的发言是对品种权的主张，不代表他指控农会转移技术；农改场说明品种权具有地域性，海外保护需另行申请。'},
  {city:'hualien',name:'魏嘉賢',region:'jp',key:'county-wei-hualien-morioka-20220916',date:'2022-09-16（报道日）',title:'魏嘉贤谈花莲与盛冈城市交流',url:'https://ocacnews.net/article/320079',publisherId:'official-tw',publisherName:'僑新闻（僑务委员会）',kind:'机构媒体采访时任花莲市长',topic:'花莲与日本盛冈市交流',text:'时任花莲市长魏嘉贤受访时希望扩展与盛冈在文化、运动、教育和经济方面的交流，并提出在花莲举办盛冈物产展的想法。',limit:'报道记载当时交流与本人期待，未证实物产展已举办；不将城市交流扩展为对日本所有政策的立场。'},
  {city:'penghu',name:'周倪安',region:'cn',key:'county-chou-penghu-cross-strait-20151012',date:'2015-10-12（质询）',title:'周倪安质询陆委会时谈两岸政策',url:'https://n.yam.com/Article/20151013328385',publisherId:'other',publisherName:'大成报（蕃新闻转载；倾向待核定）',kind:'新闻报道立法院质询',topic:'质询九二共识与两岸政策',text:'周倪安在立法院质询时要求陆委会放弃九二共识，并主张在大陆放弃对台使用武力、尊重台湾民主制度前恢复不接触、不谈判、不妥协的政策。',limit:'这是2015年针对当时两岸政策的个人主张；不将其政治判断写成既定事实，现今立场应继续核对。'},
  {city:'penghu',name:'周倪安',region:'us',key:'county-chou-penghu-us-election-20200821',date:'2020-08-21',title:'周倪安在台联记者会谈美国大选',url:'https://newtalk.tw/news/view/2020-08-21/454006',publisherId:'newtalk',publisherName:'Newtalk新闻',kind:'记者会新闻报道',topic:'2020年美国总统选举',text:'周倪安以台联代理主席身份表示支持特朗普连任，肯定其对台政策；她同时认为台湾政府面对美国大选应采取中立态度。',limit:'这是2020年针对当届美国大选的立场，不能自动推定她对之后美国政府或全部美国政策的看法。'},
  {city:'penghu',name:'周倪安',region:'jp',key:'county-chou-penghu-yasukuni-20240617',date:'2024-06-17',title:'周倪安赴靖国神社并提出终战纪念日主张',url:'https://www.ftvnews.com.tw/news/detail/2024617W0219',publisherId:'ftv',publisherName:'民视新闻',kind:'新闻报道并引用台联说法',topic:'赴日本纪念台籍战争死者',text:'周倪安与台日交流团体前往靖国神社悼念台籍战死者，并代表台联提出废除台湾光复节、增订终战纪念日。',limit:'这是2024年一次纪念行动及其政治主张；靖国神社的战争记忆具有争议，不能据此推断她对日本所有历史与外交问题的立场。'},
  {city:'miaoli',name:'陳品安',region:'us',key:'county-chen-pinan-us-20260704',date:'2026-07-04（报道日）',title:'陈品安赴美与侨界及产业人士交流',url:'https://udn.com/vote2026/story/124652/9606891',publisherId:'udn',publisherName:'联合报',kind:'新闻报道及候选人说法',topic:'访美演讲与产业交流',text:'联合报报道，陈品安赴美台人活动演讲并走访硅谷企业；她表示希望加强与美国及其他民主国家合作，为地方争取技术、人才和投资。',limit:'报道日不等于所有活动日期；候选人的合作愿景不表示已有具体投资承诺。'},
  {city:'yilan',name:'吳宗憲',region:'cn',key:'county-wu-yilan-cross-strait-20260304',date:'2026-03-04',title:'吴宗宪谈两岸沟通',url:'https://udn.com/news/story/6656/9359063',publisherId:'udn',publisherName:'联合报',kind:'媒体转述网络节目访问',topic:'对两岸沟通的主张',text:'吴宗宪接受节目访问时主张两岸应保持沟通，并反对将所有接触一概视为亲中。',limit:'他对民意及现状的判断属于个人说法；此次报道未对其所称比例提供调查依据。'},
  {city:'nantou',name:'温世政',region:'cn',key:'county-wen-nantou-forum-20260422',date:'2026-04-22',title:'温世政回应南投两湖论坛',url:'https://www.cna.com.tw/news/acn/202604220234.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻报道候选人回应及县府说明',topic:'回应日月潭与西湖交流论坛',text:'温世政就日月潭、西湖论坛表示欢迎对等交流，但反对论坛成为他所称的大陆政治策略舞台。',limit:'这是针对该论坛的回应；其政治判断归属于本人，不能推论他反对一切地方交流。'},
  {city:'hsinchu-county',name:'鄭朝方',region:'jp',key:'county-cheng-zhubei-japan-20230907',date:'2023-09-07',title:'郑朝方访问日本姊妹市内滩町',url:'https://www.cna.com.tw/news/aloc/202309070208.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻报道并引述竹北市公所说明',topic:'借鉴日本地方建设与管理',text:'竹北市长郑朝方率团访问日本内滩町，表示希望借鉴公共设施管理、建筑色调及减法设计。',limit:'一次地方治理交流及学习意愿，不代表相关建设均已完成。'},
  {city:'chiayi-city',name:'陳愷璜',region:'jp',key:'county-chen-arts-tokyo-201807',date:'2018-07-18 至 07-22',title:'台北艺术大学校务会议记录：东京艺术大学交流',url:'https://sec.tnua.edu.tw/wp-content/uploads/2022/10/107.10.22.pdf',publisherId:'official-tw',publisherName:'国立台北艺术大学',kind:'大学校务会议工作报告',topic:'赴东京艺术大学交流与讲演',text:'台北艺术大学会议记录列陈愷璜等师生赴东京艺术大学交流并进行公开讲演，主题涉及艺术研究与策展。',limit:'这是艺术教育交流经历，不据此推断他对日本政治或外交的立场。'},
  {city:'pingtung',name:'周春米',region:'us',key:'county-chou-us-20240318',date:'2024-03-18（美国时间）',title:'屏东县府说明赴美国交流航太产业',url:'https://www.cna.com.tw/postwrite/chi/365777',publisherId:'official-tw',publisherName:'屏东县政府（中央社讯息平台承载）',kind:'县政府发布的行程说明',topic:'赴美交流航太产业',text:'屏东县府表示，周春米拜会美国国务院相关部门，就屏东航太和卫星产业发展交流。',limit:'县府新闻稿记录访问及讨论，不表示已签约或完成产业投资。'},
  {city:'lienchiang',name:'王忠銘',region:'cn',key:'county-wang-fuzhou-202601',date:'2026-01-01 至 01-04',title:'马祖小三通首航25周年交流出访报告',url:'https://eip.matsu.gov.tw/matsuopen/chhtml/report_det/2?sysid=C115AY111',publisherId:'official-tw',publisherName:'连江县政府',kind:'县政府公差报告',topic:'赴福州参加小三通纪念交流',text:'连江县政府出访报告列王忠铭赴福州参加小三通首航25周年活动，讨论往来航线和旅游市场拓展。',limit:'县府出访资料说明行程及目的，不等于已实现新的交通政策或对全部两岸议题的立场。'},
  {city:'lienchiang',name:'王忠銘',region:'us',key:'county-wang-ait-202306',date:'2023-06-28',title:'美国在台协会处长访问马祖',url:'https://www.cna.com.tw/news/aipl/202306290111.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻报道并引述县府说明',topic:'与美国在台协会讨论通信与应变',text:'美国在台协会处长孙晓雅拜会王忠铭，讨论小三通、战备及海缆中断；县府称王介绍应变演练与扩大微波频宽的安排。',limit:'记录一次会谈及县府转述，不代表双方在所有安全议题上的共同立场。'},
  {city:'hsinchu-county',name:'徐欣瑩',region:'us',key:'county-hsu-us-invitation-2014',date:'2014-04-29',title:'徐欣莹办公室说明美国交流邀请',url:'https://www.shesinging.tw/singing2012/news.php?id=2350',publisherId:'candidate-site',publisherName:'徐欣莹办公室',kind:'本人办公室发布的信息',topic:'收到美国访问交流计划邀请',text:'徐欣莹办公室称，美国在台协会于2014年邀请她参加美国国际访问者领导计划。',limit:'来源是本人办公室；仅证实其公开的邀请说明，未确认最终出访及交流成果。'},
  {city:'yunlin',name:'劉建國',region:'jp',key:'county-liu-japan-20230307',date:'2023-03-07（报道日）',title:'刘建国率团赴日本交流长照',url:'https://www.mirrormedia.mg/story/20230307soc011',publisherId:'other',publisherName:'镜周刊（倾向待核定）',kind:'媒体报道本人及访问团说明',topic:'访日交流长期照顾',text:'据镜周刊报道，刘建国率团考察日本长照与医疗设施，并与日本官员交流高龄照护经验；他希望日本支持台湾参与世界卫生组织。',limit:'报道日不一定是全部活动发生日期；访问与倡议不等于已达成具体政策协议。'},
  {city:'miaoli',name:'鍾東錦',region:'cn',key:'county-chung-mainland-20241204',date:'2024-12-04（行程结束）',title:'钟东锦赴大陆考察地方产业',url:'https://www.cna.com.tw/news/aloc/202412040338.aspx',publisherId:'cna',publisherName:'中央社',kind:'新闻报道并引述县府说明',topic:'赴大陆考察及推介苗栗',text:'钟东锦率团赴大陆考察农业、工商及观光等领域；县府称希望借鉴产业经验并推介苗栗。',limit:'记述县府所述的考察目的，不表示合作成果已完成或可概括其全部两岸立场。'}
 ];
 for(const r of foreign){
  d.sources[r.key]={title:r.title,url:r.url,date:r.date,checkedAt:'2026-11-12',publisherId:r.publisherId,publisherName:r.publisherName,kind:r.kind};
  const p=d.people.find(x=>x.city===r.city&&x.name===r.name);if(!p)throw new Error('Missing candidate: '+r.name);
  if(!p.evidence.some(x=>x.source===r.key))p.evidence.push({region:r.region,date:r.date,topic:r.topic,text:r.text,limit:r.limit,source:r.key});
 }
 d.sources['county-liang-japan-20220804']={title:'梁文韬评论日本修宪与台湾安全',url:'https://www.rfa.org/cantonese/commentaries/mt/twwatch-08042022093810.html',date:'2022-08-04',checkedAt:'2026-11-12',publisherId:'other',publisherName:'自由亚洲电台（2022年获美国政府资助）',kind:'候选人本人署名评论，代表作者当时观点'};
 const liangJapan=d.people.find(p=>p.city==='kinmen'&&p.name==='梁文韜');if(!liangJapan)throw new Error('Missing candidate: 梁文韜');
 if(!liangJapan.evidence.some(x=>x.source==='county-liang-japan-20220804'))liangJapan.evidence.push({region:'jp',date:'2022-08-04',topic:'日本修宪与台海安全',text:'梁文韬在署名评论中支持日本推动有限度修宪，认为日本增强防卫及与盟友合作有助台海安全，并呼吁台湾社会支持这一方向。',limit:'这是2022年的个人政治评论，其对日本宪法和军事行动的法律判断存在争议；不代表日本政府立场，也不代表本届选举政策。',source:'county-liang-japan-20220804'});
 d.sources['county-huang-kinmen-printshow-20220127']={title:'金门国际版画展开幕报道',url:'https://www.kinmen.gov.tw/News_Content2.aspx?n=98E3CA7358C89100&s=BDEFE805F5B97443&sms=BF7D6D478B935644',date:'2022-01-28（报道日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（金门县政府网站转载）',kind:'县属媒体报道艺术展览'};
 d.sources['county-huang-kinmen-work-20170708']={title:'黄世团人物专访及教学经历',url:'https://www.kmdn.gov.tw/1117/1271/4189/282327/',date:'2017-07-08',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（金门县政府所属媒体）',kind:'地方媒体人物采访'};
 const huangArtist=d.people.find(p=>p.city==='kinmen'&&p.name==='黃世團');if(!huangArtist?.countyBrief)throw new Error('Missing candidate: 黃世團');
 huangArtist.countyBrief.work='金门日报2017年人物采访列其曾在侨仁工商、南强工商、基隆二信中学、庄敬中学、师大附中及国立华侨实验高中任教，2014年自华侨高中退休，另曾在台湾艺术大学兼课。国立台湾美术馆文章列其曾任金门画会及十青版画会会长；各职起止年月及现况暂未确认。';huangArtist.countyBrief.extraBioSource='county-huang-kinmen-work-20170708';huangArtist.countyBrief.extraBioSources=['county-huang-kinmen-career-art-museum'];
 if(!huangArtist.evidence.some(x=>x.source==='county-huang-kinmen-printshow-20220127'))huangArtist.evidence.push({region:'us',date:'2022-01-27',topic:'出席有美国作品参加的国际版画展',text:'金门日报报道黄世团出席2022年金门国际版画展开幕；主办方表示展览汇集包括美国在内多个国家艺术家的作品。',limit:'这是出席国际艺术活动的记录，报道未载黄世团对美国政策的观点，也未确认他与美国参展者有直接交流。',source:'county-huang-kinmen-printshow-20220127'});
 d.sources['county-hsu-penghu-cec-2022']={title:'2022年澎湖县议员第一选区选举公报',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/06%E7%B8%A3%E5%B8%82%E8%AD%B0%E5%93%A1/111%E5%B9%B4/17%E6%BE%8E%E6%B9%96%E7%B8%A3/%E6%BE%8E%E6%B9%96%E7%B8%A3%E7%AC%AC1%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'澎湖县选举委员会',kind:'候选人自填的往届选举政见'};
 for(const [topic,text] of [['health','许智富在2022年议员选举公报中提出推动三军总医院澎湖分院由地区医院提升为区域级医院，加强在地医疗。'],['education','许智富在2022年提出由县府给予澎湖科技大学相关交通及图书补贴，并增加体育、音乐、美术及舞蹈专业师资。'],['economy','许智富在2022年提出县府成立专案小组，协助老店进行空间改造与品牌提升。'],['water','许智富在2022年提出加强海洋复育，并争取提高渔民休渔期补助。']])if(!hsuPh.policies.some(x=>x.topic===topic&&x.sources?.includes('county-hsu-penghu-cec-2022')))hsuPh.policies.push({topic,text,type:'往届政见（2022年议员选举公报）',basis:'campaign',electionYear:2022,date:'2022年选举公报',sources:['county-hsu-penghu-cec-2022'],note:'这是当年议员选举主张；本届县长选举是否沿用、具体预算及实施结果暂未确认。'});
 d.sources['county-yeh-penghu-university-2020']={title:'澎湖科技大学校长遴选委员候选人资料',url:'https://www.npu.edu.tw/df_ufiles/517/1091230%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf',date:'2020年校内选举资料',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立澎湖科技大学',kind:'学校公布的候选人经历'};
 const yehPh=d.people.find(p=>p.city==='penghu'&&p.name==='葉竹林');if(!yehPh?.countyBrief)throw new Error('Missing candidate: 葉竹林');
 yehPh.countyBrief.work+=' 澎湖科技大学2020年校内选举资料另列其曾任该校行销与物流管理系兼任讲师、澎湖县服务业管理咨询协会理事长；任职起止年月待核。';yehPh.countyBrief.extraBioSources=['county-yeh-penghu-university-2020'];
 for(const [person,refs] of [[yehPh,['county-yeh-penghu-university-2020','county-yeh-penghu-japan-routes-20260716']],[d.people.find(p=>p.city==='taitung'&&p.name==='王志偉'),['county-wang-taitung-japan-quarantine-20210923','county-wang-taitung-cross-strait-20231020']]]){
  if(!person)throw new Error('Missing candidate for US review');person.evidenceCoverage=person.evidenceCoverage||{};
  if(!person.evidence.some(x=>x.region==='us')&&!person.evidenceCoverage.us)person.evidenceCoverage.us={checkedAt:'2026-11-12',scope:'以候选人姓名、县市、美国及交流、观光或农产出口等词检索公开网页，并查看所列资料；暂未找到可明确归属本人、足以核实的美国政策观点。',note:'所列材料用于说明查阅范围，并非美国立场证据；个人社群及全部视频尚未逐一核查，同名人物不自动视为本人。',sources:refs};
 }
 const chenYl=d.people.find(p=>p.city==='yilan'&&p.name==='陳宏毅');if(!chenYl)throw new Error('Missing candidate: 陳宏毅');
 const chenTransit=chenYl.policies.find(p=>p.sources?.includes('county-policy-yilan-2-1-excerpt'));
 if(chenTransit){chenTransit.text='陈宏毅提出强化头城、礁溪、宜兰、罗东、苏澳五站的台铁区间快捷服务，并建立三级快捷公车：宜兰至罗东为核心高频线，第二级连接头城、礁溪、苏澳，第三级延伸至大洲、武渊、广兴、五结、员山、壮围及外澳等生活圈。';chenTransit.note='按民间资料库收录的候选人专页原文整理；原发日期、班次、经费与实施条件暂未确认。';}
 d.sources['county-you-hualien-us-disaster-20260717']={title:'吉安乡公所说明防灾桌上演练',url:'https://www.ji-an.gov.tw/news/NMnjFoJdry47',date:'2026-07-17（活动日，地方报道核对）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'花莲县吉安乡公所',kind:'公所对任内防灾演练的说明'};
 d.sources['county-you-hualien-drill-date-20260717']={title:'吉安防灾桌上演练报道',url:'https://886.news/archives/346658',date:'2026-07-17',checkedAt:'2026-11-12',publisherId:'other',publisherName:'台湾新闻云（倾向待核定）',kind:'地方媒体报道，用于核对活动日期'};
 if(!youHl.evidence.some(x=>x.source==='county-you-hualien-us-disaster-20260717'))youHl.evidence.push({region:'us',date:'2026-07-17',topic:'防灾演练参考美国框架',text:'吉安乡公所称，游淑贞担任应变中心指挥官参与地震桌上演练，演练由县消防局与东华大学团队规划，并导入美国HSEEP灾害演练规划与评估框架。',limit:'公所新闻稿记录其任内参与；采用美国框架不代表美方参与，也不能推断她对美国外交或政治的立场。',sources:['county-you-hualien-us-disaster-20260717','county-you-hualien-drill-date-20260717'],source:'county-you-hualien-us-disaster-20260717'});
 if(!youHl.policies.some(x=>x.sources?.includes('county-you-hualien-us-disaster-20260717')))youHl.policies.push({topic:'water',text:'吉安乡公所表示，游淑贞参与地震桌上演练，并强调平时建立高风险地区人口资料、协助高龄及行动不便居民撤离，以及加强县乡防灾合作。',type:'任内防灾工作（公所说明）',basis:'administration',electionYear:2026,date:'2026-07-17',sources:['county-you-hualien-us-disaster-20260717','county-you-hualien-drill-date-20260717'],note:'这是公所对演练及现行工作的说明，不等于灾害来临时的实际执行成效，也不冒充本届竞选承诺。'});
 const additional=[
  {city:'chiayi-city',name:'陳愷璜',source:'county-chen-chiayi-digital-20260901',title:'陈愷璜登记参选并说明数字孪生及教育主张',url:'https://udn.com/news/story/124652/9726784',date:'2026-09-01',publisherId:'udn',publisherName:'联合报',items:[['accountability','陈愷璜提出运用数字孪生整合城市资讯，作为分析交通、公共建设、社会福利与人口需求的辅助工具；数据来源、隐私保护、预算与执行时间仍待说明。'],['education','陈愷璜主张国中小学教育除知识传授外，也应重视多元学习和人格启发；具体课程、师资与经费待说明。']]},
  {city:'kinmen',name:'張國威',source:'county-chang-kinmen-income-20261025',title:'张国威竞选总部成立时谈县政主张',url:'https://udn.com/vote2026/story/124652/9836320',date:'2026-10-25',publisherId:'udn',publisherName:'联合报',items:[['economy','张国威提出四年内让乡亲收入加倍的目标，并希望借助金门观光、金酒品牌和产业发展创造青年就业机会；收入衡量基准、对象及实现方式尚待说明。'],['accountability','张国威主张建立清廉、公开透明的政府，让公共资源用于民众福祉；具体公开机制和监督措施尚待公布。']]},
  {city:'kinmen',name:'張國威',source:'county-chang-kinmen-service-20260928',title:'张国威成立服务处谈县府服务',url:'https://www.cna.com.tw/news/aipl/202609280094.aspx',date:'2026-09-28',publisherId:'cna',publisherName:'中央社',items:[['accountability','张国威表示希望把旅游和餐饮业服务经验带入县府，让民众办理事务时感受到更好的服务；具体流程、考核指标和预算待说明。']]},
  {city:'chiayi-county',name:'吳品叡',source:'county-wu-chiayi-animal-20261109',title:'吴品叡提出宠物友善与动物防疫方案',url:'https://udn.com/news/story/124652/9867191',date:'2026-11-09',publisherId:'udn',publisherName:'联合报',items:[['health','吴品叡提出串联兽医师、动保团体及社区，推动宠物登记、狂犬病疫苗接种和巡回健康服务，并加强查处违法弃养；实施规模和预算待说明。']]},
  {city:'chiayi-county',name:'蔡易餘',source:'county-tsai-chiayi-language-20261109',title:'蔡易余谈母语教育与地方文化',url:'https://udn.com/news/story/124652/9867191',date:'2026-11-09',publisherId:'udn',publisherName:'联合报',items:[['education','蔡易余主张推动台语、邹语等母语教育，鼓励学校在日常课堂对话中使用母语，并以专案奖励方式支持学校；奖励标准与经费待说明。']]},
  {city:'yunlin',name:'吳炳輝',source:'county-wu-yunlin-forum-20261110',title:'云林县长候选人政见会录影报道',url:'https://udn.com/vote2026/story/124652/9867798',date:'2026-11-10（报道日）',publisherId:'udn',publisherName:'联合报',items:[['accountability','吴炳辉在县长政见会录影中主张扫除地方黑道势力，让各行业有更多发展机会；具体措施与执行机制待说明。']]},
  {city:'yunlin',name:'張嘉郡',source:'county-chang-yunlin-industry-20261110',title:'云林县长候选人政见会录影报道',url:'https://udn.com/vote2026/story/124652/9867798',date:'2026-11-10（报道日）',publisherId:'udn',publisherName:'联合报',items:[['economy','张嘉郡提出设立次世代巨型垂直整合科学园区，推动农业、工商与科技并进；选址、财源与具体产业配置待说明。'],['health','张嘉郡提出长者健保免费并活用敬老卡点数；适用对象、点数额度与经费待说明。']]},
  {city:'taitung',name:'王志偉',source:'county-wang-taitung-education-farming-20260912',title:'王志伟提出教育及农机与品种政策',url:'https://udn.com/news/amp/story/124652/9749859',date:'2026-09-12',publisherId:'udn',publisherName:'联合报',items:[['education','王志伟提出依学生性向与志向，引导进入理工、军警、护理及农业等领域，并鼓励就读农校、投入在地农业；课程和经费待说明。'],['agriculture','王志伟提出成立农机合作社，争取中央及县府补助大型农机使用，并由县府购买热带水果新品种，免费授权县民栽种；品种、资格和经费待说明。']]},

  {city:'chiayi-county',name:'蔡易餘',source:'county-chiayi-rural-water-20261112',title:'蔡易余争取偏乡接自来水并提出大埔交通方案',url:'https://udn.com/news/story/124652/9872860',date:'2026-11-12（报道日）',publisherId:'udn',publisherName:'联合报',items:[['water','蔡易余表示将与立委推动修正偏乡自来水接管标准，降低大埔山区居民接管困难；调整标准须经相关主管机关依法处理。'],['transport','蔡易余提出拓宽台三线、争取台82线快速道路延伸，以改善大埔对外交通；路线、经费与核定时间尚待说明。']]},
  {city:'chiayi-county',name:'吳品叡',source:'county-chiayi-senior-care-20261112',title:'吴品叡提出敬老照护加码方案',url:'https://udn.com/news/story/124652/9872860',date:'2026-11-12（报道日）',publisherId:'udn',publisherName:'联合报',items:[['health','吴品叡提出将假牙补助提高至4.4万元，推动巡回医疗与远距照护，并补足日间照护服务不足的乡镇；适用条件和财源待说明。']]},
  {city:'miaoli',name:'陳品安',source:'county-miaoli-youth-20260928',title:'陈品安提出青年住房、创业与参与政策',url:'https://udn.com/news/story/124652/9781166',date:'2026-09-28（报道日）',publisherId:'udn',publisherName:'联合报',items:[['housing','陈品安提出老屋修缮最高补助50万元，并由县府协助代租代管；补助对象、屋龄条件及预算待说明。'],['economy','陈品安提出青年创业及留学贷款利息补贴，并成立苗栗天使基金投资在地新创团队；基金规模及资格待说明。'],['accountability','陈品安提出推动青年参与式预算，让青年提出提案并参与预算决定；审议程序及金额待说明。']]},

  {city:'chiayi-city',name:'張啓楷',source:'county-chang-chiayi-housing-20261112',title:'张啓楷提出可负担住宅与婚育租金补贴',url:'https://www.cna.com.tw/news/aipl/202611120242.aspx',date:'2026-11-12',publisherId:'cna',publisherName:'中央社',items:[['housing','张啓楷主张借鉴桃园经验，鼓励建商捐建社会住宅，并提出青年可负担住宅及婚育租金补贴；适用资格与执行细节尚待说明。']]},
  {city:'yunlin',name:'張嘉郡',source:'county-chang-yunlin-forum-20261109',title:'云林县长候选人公办政见发表会录影',url:'https://udn.com/news/story/124652/9866284',date:'2026-11-09',publisherId:'udn',publisherName:'联合报',items:[['education','张嘉郡在公办政见发表会录影中提出儿童吃饭、读书免费，以及从小学一年级开始学英语；实施范围和经费待进一步说明。'],['economy','张嘉郡提出青年创业加码1亿元，具体补助资格、分配方式和财源待进一步说明。']]},

  {city:'hualien',name:'張峻',source:'county-chang-hualien-market-20261111',title:'张峻提出花莲果菜市场改善方案',url:'https://www.cna.com.tw/news/aloc/202611110250.aspx',date:'2026-11-11',publisherId:'cna',publisherName:'中央社',items:[['economy','张峻提出改善花莲果菜市场的集货拍卖空间、交通动线、停车与冷链设施，并推动产销资讯透明、供需预警及价格调节。']]},
  {city:'hualien',name:'魏嘉賢',source:'county-wei-hualien-rescue-20260921',title:'魏嘉贤提出偏乡救援强化措施',url:'https://www.cna.com.tw/news/aipl/202609210250.aspx',date:'2026-09-21',publisherId:'cna',publisherName:'中央社',items:[['water','魏嘉贤提出补足消防人力、推动无人机送药常态化，并向中央争取驻地紧急后送直升机及整备玉里夜航起降条件。']]},
  {city:'hualien',name:'張峻',source:'county-chang-hualien-disaster-20260921',title:'张峻提出花莲防灾整备方案',url:'https://www.cna.com.tw/news/aipl/202609210250.aspx',date:'2026-09-21',publisherId:'cna',publisherName:'中央社',items:[['water','张峻提出盘点高风险区并建立改善清单、整合公私部门常态演练及强化物资备援，也呼吁建立中央与地方单一协调窗口。']]},
  {city:'nantou',name:'温世政',source:'county-wen-nantou-campaign-policies-20261112',title:'温世政竞选网站政策主张',url:'https://wen-shih-cheng.com.tw/policies/',date:'2026年竞选网站，查阅2026-11-12',publisherId:'candidate-site',publisherName:'温世政竞选网站',items:[['transport','温世政提出新增8条高铁接驳路线、接驳班次加倍，尖峰时段目标为8分钟一班，并研议中捷延伸竹山及集集支线接高铁。'],['health','温世政提出将敬老卡提高至每月1800点，并与幸福巴士、小黄公车及预约接送衔接，方便长者就医和前往社区据点。'],['economy','温世政提出青年创业最高补助30万元，并提供导师陪伴，结合技职教育、在地产业和远距工作发展。']]},
  {city:'taitung',name:'吳秀華',source:'county-wu-taitung-family-20261112',title:'吴秀华公布妇幼与托育政策',url:'https://udn.com/news/story/124652/9874639',date:'2026-11-12',publisherId:'udn',publisherName:'联合报',items:[['childcare','吴秀华提出生育津贴第一胎5万元、第二胎6万元、第三胎以上8万元，并分阶段推动一乡镇市一公托，增加临时及弹性托育。'],['health','吴秀华提出扩大产检交通补助、提供新手父母心理咨询，并升级月嫂媒合、月子餐及到宅母婴照护。'],['accountability','吴秀华提出扩大纵谷、海岸及南回妇女保护据点，提供法律协助、保密咨询与庇护转介。'],['economy','吴秀华规划女力学院及新住民希望学苑，提供职业训练、法律权益与创业辅导，并设置妇女创业梦想基金。']]},
  {city:'taitung',name:'陳瑩',source:'county-chen-taitung-education-20260923',title:'陈莹提出原民及城乡交流教育方案',url:'https://udn.com/vote2026/story/124652/9772660',date:'2026-09-23',publisherId:'udn',publisherName:'联合报',items:[['education','陈莹提出结合台东山海及多元文化，推动跨县市、跨城乡与跨族群游学，深化原住民族教育与母语；并补助教师AI工具与进修，增加民间课后陪伴支持。']]},
  {city:'hsinchu-county',name:'徐欣瑩',source:'county-hsu-hsinchu-education-20261110',title:'徐欣莹提出学区预测及通学政策',url:'https://www.cna.com.tw/news/aloc/202611100229.aspx',date:'2026-11-10',publisherId:'cna',publisherName:'中央社',items:[['education','徐欣莹提出整合户政、学籍及住宅开发资料，预测学区就学需求，提前规划校舍与增班；并推动偏乡跨校共学、远距教学及师资共享。'],['transport','徐欣莹提出「幸福通学专车」，整合公车、校车及偏乡接驳，改善通学安全。']]},
  {city:'hsinchu-county',name:'鄭朝方',source:'county-cheng-hsinchu-markets-20261110',title:'郑朝方提出新竹县特色市集计划',url:'https://www.cna.com.tw/news/aloc/202611100229.aspx',date:'2026-11-10',publisherId:'cna',publisherName:'中央社',items:[['economy','郑朝方提出将竹北市集经验推广到全县13乡镇市，优先评估竹东车站周边及竹北、新丰滨海公共空间，规划固定档期并提供品牌辅导与招商媒合。']]},
  {city:'hsinchu-county',name:'鄭朝方',source:'county-cheng-hsinchu-jianshi-20260917',title:'郑朝方提出尖石道路及阅读资源方案',url:'https://www.cna.com.tw/news/aloc/202609170259.aspx',date:'2026-09-17',publisherId:'cna',publisherName:'中央社',items:[['transport','郑朝方提出盘点尖石后山边坡防护与路面状况，并补强夜间照明。'],['education','郑朝方规划在尖石打造结合自然环境及部落文化的「山林系图书馆」，增加儿童阅读与文化传承空间。']]},
  {city:'chiayi-city',name:'王美惠',source:'county-wang-chiayi-new-platform-20261112',title:'王美惠提出土地、文化观光及科技治理主张',url:'https://udn.com/vote2026/story/124652/9873269',date:'2026-11-12（报道日）',publisherId:'udn',publisherName:'联合报',items:[['tourism','王美惠提出整合木都历史、林业文化、美食与特色街区，并串联阿里山林铁及山海旅游资源，与邻近县市合作发展观光。'],['transport','王美惠提出运用人工智能优化交通管理与道路通行，并以智慧监测和预警提升防灾应变。']]},
  {city:'chiayi-city',name:'張啓楷',source:'county-chang-chiayi-cash-20261105',title:'张啓楷说明有财政条件的现金发放主张',url:'https://udn.com/news/story/124652/9858847',date:'2026-11-05',publisherId:'udn',publisherName:'联合报',items:[['health','张啓楷表示当选后如市府财政许可，将普发每名市民6000元；他提出的财源估计及中央政策仍需另行核实。']]},
  {city:'keelung',name:'童子瑋',source:'county-tung-keelung-lunch-20260415',title:'童子玮视察学校午餐并提出菜谱创新',url:'https://www.cna.com.tw/news/aloc/202604150303.aspx',date:'2026-04-15',publisherId:'cna',publisherName:'中央社',items:[['education','童子玮提出邀请专家开发学校午餐菜谱，并强化食材溯源、抽验和公开资讯；他表示参考美国儿童国宴概念。']]},
  {city:'changhua',name:'陳重嘉',source:'county-chen-changhua-platform-20260831',title:'陈重嘉登记参选时提出施政方向',url:'https://news.ebc.net.tw/news/politics/569009',date:'2026-08-31',publisherId:'other',publisherName:'东森新闻（倾向待核定）',items:[['accountability','陈重嘉提出推动全县电子印证证明及线上公投，希望减少申办奔波并扩大公众参与；报道未说明制度和法律细节。'],['housing','陈重嘉提出媒合民间资源推动长期居住的社会住宅；资格、租金、房源及契约安排暂未明确。'],['childcare','陈重嘉提出未成年人全面照护方向；报道未列服务范围、给付数字及经费。']]},
  {city:'kinmen',name:'張火木',source:'county-chang-kinmen-platform-20260904',title:'张火木登记参选并提出观光与两岸交通主张',url:'https://udn.com/news/story/124652/9735260',date:'2026-09-04',publisherId:'udn',publisherName:'联合报',items:[['tourism','张火木提出扩大国内外观光市场，设定每年500万、四年累计2000万人次目标，并结合交通建设、观光整合与文化品牌行销。'],['exchange','张火木主张强化两岸交流、争取参访厦门翔安机场并研究对金门经济的影响，也提出推动同翔金厦大桥衔接与协商机制；涉及两岸及中央权限。'],['accountability','张火木承诺若当选，任满四年不竞选连任，任内薪资及相关所得捐作县政智库专款。']]},
  {city:'penghu',name:'周倪安',source:'county-chou-penghu-fishery-20260811',title:'周倪安提出渔业与观光双轨政策',url:'https://www.cna.com.tw/news/aloc/202608110107.aspx',date:'2026-08-11',publisherId:'cna',publisherName:'中央社',items:[['water','周倪安主张海巡提高巡逻与科技监控，保护澎湖渔场，并对渔业与娱乐渔业分流管理。'],['labor','周倪安提出本地与外籍渔工薪资脱钩，并建立外籍渔工失联递补及风险分担机制；涉及劳工法规与中央权限。']]},
  {city:'hualien',name:'魏嘉賢',source:'county-hualien-policy-compare-20261104',title:'花莲县长候选人政见对照',url:'https://n.yam.com/Article/20261104785293',date:'2026-11-04（报道日）',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',items:[['transport','魏嘉贤提出每人每年3600元交通行动额度，折抵公交、船或飞机等大众运输，偏乡另加码；这是限定用途的额度，不是现金。'],['health','魏嘉贤提出每年2500元或6000元身心健检额度，按年龄分组；报道对25岁年龄分界的表述有重叠，适用组别暂未确认。'],['water','魏嘉贤提出设立跨局处专责防灾单位，并建立数位仪表板，运用AI辅助风险预测和资源调度。']]},
  {city:'hualien',name:'張峻',source:'county-hualien-policy-compare-20261104',title:'花莲县长候选人政见对照',url:'https://n.yam.com/Article/20261104785293',date:'2026-11-04（报道日）',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',items:[['transport','张峻提出盘点台9线车流和聚落路口，以影像或车流侦测调整号志、低流量支线感应放行，并规划干道连续绿灯。'],['health','张峻提出由县府为全县居民投保最高100万元意外险；保障条件和预算仍需明确。']]},
  {city:'hualien',name:'游淑貞',source:'county-hualien-policy-compare-20261104',title:'花莲县长候选人政见对照',url:'https://n.yam.com/Article/20261104785293',date:'2026-11-04（报道日）',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',items:[['water','游淑贞提出将马太鞍溪治理扩及全流域，涵盖上游监测、中游疏浚与下游堤防、桥梁；另提出科技监测、卫星通信、族语通报和训练部落防灾队伍。'],['education','游淑贞提出幼儿园至高中职就学准备金及课后照顾、AI与双语课程，并为教师提供法律支持及午餐指导补贴。']]},
  {city:'yunlin',name:'張嘉郡',source:'county-yunlin-policy-compare-20261103',title:'云林县长候选人政见对照',url:'https://n.yam.com/article/20261103337180',date:'2026-11-03（报道日）',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',items:[['economy','张嘉郡提出在斗六规划多功能小巨蛋，供体育、演唱会、展览和电竞使用，并兼顾防灾避难；当选后先启动选址评估。']]},
  {city:'yunlin',name:'劉建國',source:'county-yunlin-policy-compare-20261103',title:'云林县长候选人政见对照',url:'https://n.yam.com/article/20261103337180',date:'2026-11-03（报道日）',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',items:[['transport','刘建国提出扩大高铁接驳专车，推动幸福小黄2.0和公共自行车2.0，并争取斗六铁路高架化。'],['economy','刘建国提出规划AI无人机新创园区、AI农业双技园区和医疗照护产业园区。']]},
  {city:'taitung',name:'王志偉',source:'county-wang-taitung-20260912',title:'台东县长候选人王志伟提出教育及农业政见',url:'https://www.cna.com.tw/news/aloc/202609120079.aspx',date:'2026-09-12',publisherId:'cna',publisherName:'中央社',items:[['education','王志伟提出由县府注资5000万元成立劝学基金并接受捐款，学生总分每进步1分发100元；考上台大、清大、交大、成大等校的台东学子获10万元奖学金。'],['economy','王志伟提出订定农渔产品等级、对顶级品保价收购，并规划运用100架无人机施肥及防治。'],['childcare','王志伟提出结婚、生育和送终由县府每案补助2万元。']]},
  {city:'penghu',name:'陳盡川',source:'county-chen-penghu-20260104',title:'陈尽川公布海洋、土地、道路与观光愿景',url:'https://penghudaily.blogspot.com/2026/01/blog-post_476.html',date:'2026-01-04',publisherId:'other',publisherName:'澎湖日报（倾向待核定）',items:[['water','陈尽川提出复育渔业资源与保护海洋生态，希望兼顾渔业和观光。'],['economy','陈尽川提出盘点和活化土地、发展地方特色农业，并推动银合欢资源化。'],['transport','陈尽川提出全面检查县道和产业道路，改善路面品质。'],['tourism','陈尽川提出结合田园风光、海洋、传统产业及水上运动，发展四季多元观光活动。'],['accountability','陈尽川提出邀请各界参与县政规划，并称将捐出县长薪资及津贴支持该委员会。']]},
  {city:'hualien',name:'羅佩秦',source:'county-luo-hualien-criminal-20261104',title:'花莲县长候选人罗佩秦的司法主张',url:'https://n.yam.com/Article/20261104785293',date:'2026-11-04（报道日）',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',items:[['accountability','罗佩秦主张毒驾故意致死者处唯一死刑并加鞭刑，也提出加重处罚贪渎或恶意错判的法官；刑罚制度与司法处分涉及中央法律和司法权责，县长不能自行决定。']]},
  {city:'hualien',name:'羅佩秦',source:'county-luo-hualien-20260718',title:'罗佩秦说明光复乡灾民求偿与防灾专业主张',url:'https://www.cnma.org.tw/page/news/show.aspx?kind=8&lang=TW&num=52735',date:'2026-07-18',publisherId:'other',publisherName:'CNMA新闻联合网（倾向待核定）',items:[['accountability','罗佩秦表示将与法律人士合作，协助光复乡受灾者循国家赔偿程序争取权益。'],['water','罗佩秦提出当选后邀请防灾专业人士担任县府国土及河川防制顾问。']]}
 ];
 for(const r of additional){
  d.sources[r.source]={title:r.title,url:r.url,date:r.date,checkedAt:'2026-11-12',publisherId:r.publisherId,publisherName:r.publisherName,kind:'媒体报道转述候选人公开主张'};
  const person=d.people.find(p=>p.city===r.city&&p.name===r.name);if(!person)throw new Error('Missing candidate: '+r.name);
  for(const [topic,text] of r.items)if(!person.policies.some(x=>x.sources?.includes(r.source)&&x.topic===topic))person.policies.push({topic,text,type:'媒体报道转述本人主张',basis:'campaign',electionYear:2026,date:r.date,sources:[r.source],note:'属于候选人提出的方案；预算、合法性及执行条件须另核。'});
  person.policyCoverage=null;
 }
 d.sources['county-su-pingtung-platform-20261112']={title:'苏清泉竞选总部：六大政策',url:'https://ptdrsu2026.tw/',date:'竞选网站，查阅2026-11-12',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'苏清泉竞选总部',kind:'候选人竞选网站公布的政策'};
 const suPt=d.people.find(p=>p.city==='pingtung'&&p.name==='蘇清泉');if(!suPt)throw new Error('Missing candidate: 蘇清泉');
 const suPtItems=[
  ['childcare','苏清泉提出每胎生育补助合计20万元，构想为中央10万元、县府加码10万元；另主张每月增加托育补助1500元，合格祖父母带孙可领津贴。','中央补助与县府加码依各自政策及预算执行，祖父母津贴资格和金额待说明。'],
  ['childcare','苏清泉提出0至18岁每月提供5000元成长津贴，并主张0至6岁健保免费及增加公托、准公共托婴服务。','年龄边界、户籍资格、财源及不同补助是否并领待说明。'],
  ['health','苏清泉提出推动长者免费共餐，并优先补助50岁以上糖尿病、洗肾及其他高风险族群免费接种带状疱疹疫苗。','候选人网站未列完整资格和预算；疫苗适用条件应依医疗评估。'],
  ['economy','苏清泉提出招商和补助优先支持加薪企业，补助青年职业训练及技术证照，并协助传统产业导入智慧科技。','加薪认定、补助金额、资格和预算待说明。'],
  ['water','苏清泉提出邀集专家检讨淹水热点，推动治水工程并公开预算、进度和成果；另提出补助社区道路、排水和公共设施修缮。','工程清单、补助条件、财源及完成期限待说明。'],
  ['transport','苏清泉提出整合幸福巴士、小黄公车、复康巴士与敬老卡，并优先改善学校、医院及人潮密集地区的道路和行人安全。','路线、服务对象、改善地点和经费待说明。']
 ];
 for(const [topic,text,note] of suPtItems)if(!suPt.policies.some(x=>x.text===text&&x.sources?.includes('county-su-pingtung-platform-20261112')))suPt.policies.push({topic,text,type:'本届主张（竞选网站）',basis:'campaign',electionYear:2026,date:'网站查阅2026-11-12，原发日期未列',sources:['county-su-pingtung-platform-20261112'],note});
 d.sources['county-wu-penghu-rally-20260912']={title:'吴淑瑾造势大会提出福利与交通主张',url:'https://udn.com/vote2026/story/124652/9750530',date:'2026-09-12',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'新闻报道候选人公开演说'};
 d.sources['county-wu-penghu-health-20260617']={title:'吴淑瑾接受征召时谈医疗与离岛修法',url:'https://news.pts.org.tw/article/813506',date:'2026-06-17',checkedAt:'2026-11-12',publisherId:'pts',publisherName:'公视新闻',kind:'新闻报道候选人公开发言'};
 const wuPh=d.people.find(p=>p.city==='penghu'&&p.name==='吳淑瑾');if(!wuPh)throw new Error('Missing candidate: 吳淑瑾');
 const wuPhItems=[
  ['health','吴淑瑾提出把原先全县健保免费构想改为挹注1亿元提升地方医疗，并主张改善医护待遇、留住人才。','1亿元的筹措、使用期限及分配方式需进一步核实。','county-wu-penghu-health-20260617','2026-06-17'],
  ['health','吴淑瑾提出三节敬老金每节6000元，加上每月1000元敬老县民卡，合称每年3万元敬老乐活福利。','现金礼金与县民卡用途不同；适用资格及财源待说明。','county-wu-penghu-rally-20260912','2026-09-12'],
  ['education','吴淑瑾提出澎湖科技大学免学费、儿童课后全照顾及室内全龄生活馆。','受益资格、服务内容及财源待说明；涉及大学收费需与主管机关和校方协调。','county-wu-penghu-rally-20260912','2026-09-12'],
  ['transport','吴淑瑾主张促成第三家航空公司投入澎湖航线，并推动国际与国内航线联运。','航线是否开办涉及航空公司及主管机关，班次与时程尚未确定。','county-wu-penghu-rally-20260912','2026-09-12']
 ];
 for(const [topic,text,note,source,date] of wuPhItems)if(!wuPh.policies.some(x=>x.topic===topic&&x.sources?.includes(source)))wuPh.policies.push({topic,text,type:'本届主张（媒体报道）',basis:'campaign',electionYear:2026,date,sources:[source],note});
 d.sources['county-chen-chiayi-campaign-20261112']={title:'陈愷璜竞选网站：经历与经济政见',url:'https://chiayi-mayor.duckdns.org/',date:'竞选网站，查阅2026-11-12',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'陈愷璜竞选网站',kind:'候选人竞选团队自述与政策说明'};
 const chenChiayi=d.people.find(p=>p.city==='chiayi-city'&&p.name==='陳愷璜');if(!chenChiayi?.countyBrief)throw new Error('Missing candidate: 陳愷璜');
 chenChiayi.countyBrief.work='竞选网站列其2005年任北艺大学务长、2006至2010年任美术系主任及研究所所长、2013至2016年任美术学院院长、2017至2025年任校长；另自列2000年任网络科技公司CEO、1996年任设计工作室艺术总监。';chenChiayi.countyBrief.extraBioSource='county-chen-chiayi-campaign-20261112';
 for(const [topic,text] of [['transport','陈愷璜提出打造行人友好街区和步行廊道，并导入低底盘公共运具及观光接驳，以改善通行和无障碍移动。'],['tourism','陈愷璜提出串联嘉义宗教场域，发展祈福观光和文化节庆，并以影像及故事推广古城。'],['environment','陈愷璜提出发展资源回收与循环经济，将废弃物再利用与地方产业结合。']])if(!chenChiayi.policies.some(x=>x.topic===topic&&x.sources?.includes('county-chen-chiayi-campaign-20261112')))chenChiayi.policies.push({topic,text,type:'本届主张（竞选网站）',basis:'campaign',electionYear:2026,date:'网站查阅2026-11-12，原发日期未列',sources:['county-chen-chiayi-campaign-20261112'],note:'竞选团队提出的方向；具体地点、预算、实施步骤及完成时间待说明。'});
 d.sources['county-wang-taitung-agriculture-20260912']={title:'王志伟说明农业升级方案',url:'https://udn.com/news/story/124652/9749859',date:'2026-09-12',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人政见'};
 const wangTt=d.people.find(p=>p.city==='taitung'&&p.name==='王志偉');if(!wangTt)throw new Error('Missing candidate: 王志偉');
 const wangAgriculture=wangTt.policies.find(p=>p.topic==='economy'&&p.sources?.includes('county-wang-taitung-20260912'));
 if(wangAgriculture){wangAgriculture.text='王志伟提出订定农渔产品等级、对顶级品保价收购，并规划100架无人机提供喷药及施肥代工，由政府补助一半作业成本。';if(!wangAgriculture.sources.includes('county-wang-taitung-agriculture-20260912'))wangAgriculture.sources.push('county-wang-taitung-agriculture-20260912');}
 d.sources['county-chen-taitung-japan-20250411']={title:'台东数字游牧活动及台日合作意向书',url:'https://ws.ndc.gov.tw/Download.ashx?icon=.pdf&n=5ZyL55m85pyDMTE0MDQxMeaWsOiBnueovy3pgYrniafoh7rngaMg6Ie65p2x5ZWf6Iiq5YSA5byPIOebm%2BWkp%2BiIieihjCDlnIvnmbzmnIPkv4PmiJDoh7rml6XnsL3nvbLmlbjkvY3pgYrniaflkIjkvZzmhI%2FlkJHmm7gucGRm&u=LzAwMS9hZG1pbmlzdHJhdG9yLzEwL3JlbGZpbGUvNjIwMi8zODk1NC83NDIzZjc1NC00MmY4LTQ2ZWEtOWIwYS1jZTkzYjQ4YmZmZDEucGRm',date:'2025-04-11',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国家发展委员会',kind:'官方活动新闻稿'};
 const chen=d.people.find(x=>x.city==='taitung'&&x.name==='陳瑩');
 if(!chen)throw new Error('Missing candidate: 陳瑩');
 if(!chen.evidence.some(x=>x.source==='county-chen-taitung-japan-20250411'))chen.evidence.push({region:'jp',date:'2025-04-11',topic:'参加台日数字游牧交流活动',text:'陈莹出席台东数字游牧启动活动；国发会表示活动有日本地方代表参加，并促成台日合作意向书。',limit:'这是活动参与记录，资料未载陈莹对日本政策的具体发言，也不表示她本人签署意向书。',source:'county-chen-taitung-japan-20250411'});
 d.sources['county-chou-japan-20260312']={title:'屏东农产品在大阪近铁百货推广',url:'https://japan.focustaiwan.tw/economy/202603120005',date:'2026-03-12',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社 Focus Taiwan 日文版',kind:'新闻报道县长赴日推广农产品'};
 const chou=d.people.find(x=>x.city==='pingtung'&&x.name==='周春米');
 if(!chou)throw new Error('Missing candidate: 周春米');
 if(!chou.evidence.some(x=>x.source==='county-chou-japan-20260312'))chou.evidence.push({region:'jp',date:'2026-03-12',topic:'赴大阪推广屏东农产品',text:'周春米率团在大阪近铁百货介绍屏东水果及加工品，推动农产销售和地方交流。',limit:'新闻记录一次市场推广活动；销售成果及长期合作效果需另查。',source:'county-chou-japan-20260312'});
 d.sources['county-tsai-japan-20250518']={title:'蔡易余赴日本交流阿里山森林铁路文化遗产议题',url:'https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=54133&pid=252860',date:'2025-05-18（刊载日）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院网站，陈冠廷委员刊载',kind:'同行委员发布的交流说明'};
 d.sources['county-tsai-us-20240910']={title:'立法院接见史丹佛大学胡佛研究所访问团',url:'https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=117&pid=243067',date:'2024-09-10',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院',kind:'立法院接待与交流纪要'};
 const tsai=d.people.find(x=>x.city==='chiayi-county'&&x.name==='蔡易餘');
 if(!tsai)throw new Error('Missing candidate: 蔡易餘');
 if(!tsai.evidence.some(x=>x.source==='county-tsai-japan-20250518'))tsai.evidence.push({region:'jp',date:'2025-05-18（刊载日）',topic:'阿里山森林铁路与日本文化交流',text:'据同行立委陈冠廷发布的说明，蔡易余赴东京参与日台交流，向日本人士介绍阿里山森林铁路并推动文化遗产国际合作。',limit:'刊载日不是活动确切日期；此为倡议与交流记录，不表示申遗已经成功。',source:'county-tsai-japan-20250518'});
 if(!tsai.evidence.some(x=>x.source==='county-tsai-us-20240910'))tsai.evidence.push({region:'us',date:'2024-09-10',topic:'会见美国研究机构访问团',text:'蔡易余接待史丹佛大学胡佛研究所访团时，感谢美国在国际场合的支持，并期待台美在产业与政治议题深化交流。',limit:'立法院的当次会谈纪要；不能据此推断其对所有美国政策的立场。',source:'county-tsai-us-20240910'});
 d.sources['county-zhu-land-20260905']={title:'朱定瑀说明参选与土地政策',url:'https://video.ltn.com.tw/article/_NWoVn8W8og/PLI7xntdRxhw1gDu9DJwSWvhyraLk-de62',date:'2026-09-05',checkedAt:'2026-11-12',publisherId:'ltn',kind:'自由时报采访，内容为候选人受访说法'};
 const zhu=d.people.find(x=>x.city==='hsinchu-county'&&x.name==='朱定瑀');
 if(!zhu)throw new Error('Missing candidate: 朱定瑀');
 if(!zhu.policies.some(x=>x.sources?.includes('county-zhu-land-20260905')))zhu.policies.push({topic:'economy',text:'朱定瑀提出对私有土地进行区段征收，配回地主四成建地，其余土地用于租赁或支持青年与企业使用；他认为这有助于分散发展及抑制炒地。',type:'媒体采访转述本人主张',basis:'campaign',electionYear:2026,date:'2026-09-05',sources:['county-zhu-land-20260905'],note:'这是候选人提出的方案；征收权限、法律条件与可行性尚待核实。'});
 if(!zhu.policies.some(x=>x.topic==='housing'&&x.sources?.includes('county-zhu-land-20260905')))zhu.policies.push({topic:'housing',text:'朱定瑀提出在其土地改革构想下，给予育婴县民一定年限的免费土地建房，并附一个免费车位。',type:'本届主张（媒体采访）',basis:'campaign',electionYear:2026,date:'2026-09-05',sources:['county-zhu-land-20260905'],note:'属于候选人构想；适用资格、年限、财源以及土地征收和使用的法律条件均待说明，不代表已实施。'});
 if(!zhu.evidence.some(x=>x.source==='county-zhu-land-20260905'))zhu.evidence.push({region:'cn',date:'2026-09-05',topic:'两岸政治与统一的个人判断',text:'据自由时报采访，朱定瑀表达对中国政治未来的预测，并认为两岸统一将由台湾一方主导。',limit:'这是受访者个人判断，并非已发生的事实，也不构成可验证的预测。',source:'county-zhu-land-20260905'});
 zhu.policyCoverage=null;
 for(const r of rows){
  const p=d.people.find(x=>x.city===r.city&&x.name===r.name);
  if(!p) throw new Error('Missing candidate: '+r.city+' '+r.name);
  const excerpt='county-policy-more-'+r.anchor, original=excerpt+'-original';
  d.sources[excerpt]={title:r.name+' · 政见对照资料库摘录',url:r.database,date:'资料库截点 '+r.cut,checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所',kind:'民间政见资料库摘录；截点不是发言日期'};
  d.sources[original]={title:r.name+' · 资料库所附原发链接',url:r.url,date:null,checkedAt:'2026-11-12',publisherId:r.url.includes('.gov.tw/')?'official-tw':'candidate-site',publisherName:r.url.includes('.gov.tw/')?'政府公开页面':'候选人公开页面',kind:'原发链接由资料库列出，原文发布日期与后续执行情况待核'};
  if(!p.policies.some(x=>x.sources?.includes(excerpt)))p.policies.push({topic:r.topic,text:r.text,type:r.admin?'任内县府计划或说明':'本届公开主张（资料库摘要）',basis:r.admin?'administration':'campaign',electionYear:2026,date:'资料库截至 '+r.cut+'，原发日期待核',sources:[excerpt,original],note:r.admin?'县府计划或任内说明；实际完成时间与结果须另核。':'公开提案，预算、实施条件及后续进度须另核。'});
  if(r.anchor==='hl-wei-island-transport'&&!p.evidence.some(x=>x.source===excerpt))p.evidence.push({region:'jp',date:'资料库截至 '+r.cut+'，原发日期待核',topic:'提出花莲与日本离岛直航',text:r.text,limit:'候选人公开提案，资料库提供原发链接；航线可行性及跨境审批仍待确认。',source:excerpt});
  if(r.anchor==='km-li-island-transport'&&!p.evidence.some(x=>x.source===excerpt))p.evidence.push({region:'cn',date:'资料库截至 '+r.cut+'，原发日期待核',topic:'建议评估增加两岸直航',text:'李文良建议在安全、对等与市场需求前提下，由中央评估恢复或增加台湾本岛与大陆主要城市的直航航点及班次。',limit:'候选人提出评估建议，不代表已核准航线或其全部两岸立场。',source:excerpt});
  if(r.anchor==='lc-tsao-tourism'&&!p.evidence.some(x=>x.source===excerpt))p.evidence.push({region:'cn',date:'资料库截至 '+r.cut+'，原发日期待核',topic:'争取大陆游客赴马祖',text:'曹尔元提出吸引大陆游客赴马祖旅游，并向中央争取跨区域旅游开放。',limit:'资料库摘录的候选人主张；具体政策可行性和原发日期须另核。',source:excerpt});
 }
 for(const [name,regions,refs] of [['許智富',['cn','us'],['county-hsu-penghu-japan-2019']],['陳盡川',['us','jp'],['county-chen-jinchuan-career-20200608']]]){
  const p=d.people.find(x=>x.city==='penghu'&&x.name===name);if(!p)throw new Error('Missing candidate: '+name);p.evidenceCoverage=p.evidenceCoverage||{};
  for(const region of regions)if(!p.evidence.some(x=>x.region===region)&&!p.evidenceCoverage[region]){const label=region==='cn'?'中国大陆／两岸':region==='us'?'美国':'日本';p.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'以候选人姓名、澎湖及「'+label+'」检索公开网页，并查看所列本人资料；本次未找到可明确归属于本人的相关政策观点。',note:'个人社群及全部影片尚未逐一查核；同名者或其他受访人的发言不归给本人。',sources:refs};}
 }
 for(const [city,name,refs] of [['yilan','林國漳',['county-lin-yilan-cross-strait-20260423']],['hsinchu-county','鄭朝方',['county-cheng-zhubei-japan-20230907']],['hualien','張峻',['county-chang-hualien-cross-strait-20241008']],['lienchiang','曹爾元',['county-lienchiang-tsao-cec-2022']]]){
  const p=d.people.find(x=>x.city===city&&x.name===name);if(!p)throw new Error('Missing candidate: '+name);p.evidenceCoverage=p.evidenceCoverage||{};
  if(!p.evidence.some(x=>x.region==='us')&&!p.evidenceCoverage.us)p.evidenceCoverage.us={checkedAt:'2026-11-12',scope:'本次以候选人姓名、县市及美国相关词检索公开网页，并查看所列材料；未找到可明确归属于本人的对美政策观点。',note:'所列材料用于交代已查范围，不表示其含有美国立场；个人社群及全部影片尚未逐一查核，不能据此推定其态度。',sources:refs};
 }
 d.sources['county-foreign-review-changhua-chen']={title:'彰化县议会陈重嘉议员介绍',url:'https://www.chcc.gov.tw/member/details.aspx?Parser=99%2C6%2C40%2C%2C%2C%2C142',date:'议会网站（日期未列）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'彰化县议会',kind:'议员资料；留学经历不能推断政策立场'};
 d.sources['county-foreign-review-kinmen-20261112']={title:'金门县长候选人资料',url:'https://blindvote.app/bio/kinmen',date:'资料页面（日期未列）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所（倾向待核定）',kind:'候选人资料索引；未收录不等于未曾表态'};
 for(const [city,name,refs] of [['changhua','陳重嘉',['county-foreign-review-changhua-chen']],['kinmen','張國威',['county-foreign-review-kinmen-20261112']],['kinmen','張火木',['county-foreign-review-kinmen-20261112']]]){
  const p=d.people.find(x=>x.city===city&&x.name===name);if(!p)throw new Error('Missing candidate: '+name);p.evidenceCoverage=p.evidenceCoverage||{};
  for(const [region,label] of [['us','美国'],['jp','日本']])if(!p.evidence.some(x=>x.region===region)&&!p.evidenceCoverage[region])p.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'本次以候选人姓名、县市及「'+label+'」检索公开网页，并查阅所列资料；未找到可明确归属于本人的相关政策观点。',note:'尚未逐一核查个人社群及全部视频；同名人物和留学经历不能自动推定本人观点。',sources:refs};
 }
 d.sources['county-foreign-review-wei-japan-20261112']={title:'魏平政接受国民党节目专访',url:'https://knowledge.kmt.org.tw/articles/76115ffc-cc3e-4406-85fc-a349bafc14c2/',date:'2026年（资料库未明列访谈日）',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'国民党知识库（政党资料）',kind:'节目文字整理，自动转写可能有误'};
 for(const [city,name,regions,refs] of [['hsinchu-county','朱定瑀',['us','jp'],['county-zhu-land-20260905']],['changhua','魏平政',['jp'],['county-foreign-review-wei-japan-20261112']]]){
  const person=d.people.find(x=>x.city===city&&x.name===name);if(!person)throw new Error('Missing candidate: '+name);person.evidenceCoverage=person.evidenceCoverage||{};
  for(const region of regions)if(!person.evidence.some(x=>x.region===region)&&!person.evidenceCoverage[region]){const label=region==='us'?'美国':'日本';person.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'本次以候选人姓名、县市及「'+label+'」检索公开网页，并查看所列采访或转写；未找到可明确归属于本人且内容足以核实的相关政策观点。',note:'尚未逐一核查个人社群及全部视频；自动转写可能存在错字，不以不明含义片段推断立场。',sources:refs};}
 }
 d.sources['county-changhua-childcare-index-20261112']={title:'彰化县长候选人育儿政见原文对照',url:'https://blindvote.app/sources/changhua',date:'资料库截至2026-11-12，原发日期未列',checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所（倾向待核定）',kind:'民间资料库摘录候选人社群原文；原发页未单独核实'};
 d.sources['county-changhua-elder-index-20261112']={title:'彰化县长候选人长照政见原文对照',url:'https://blindvote.app/sources/changhua',date:'资料库截至2026-11-12，原发日期未列',checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所（倾向待核定）',kind:'民间资料库摘录候选人社群原文；原发页未单独核实'};
 d.sources['county-chiu-elder-facebook-20261112']={title:'邱建富长青卡政见原发链接',url:'https://www.facebook.com/ChenfuChanghua/posts/pfbid0238PJ52i1Ps8mDMtxsCPhjbgdQ9SH4yjUKWAZ8sGc9VePrdquai81xp7sRY9gmrhRl',date:'发布日期未核',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'邱建富公开专页',kind:'留白投票所列出的原发链接；原帖未单独核实'};
 d.sources['county-wei-elder-cna-20260928']={title:'彰化县长参选人交锋：魏平政提出长者健保补助',url:'https://udn.com/news/story/124652/9781574',date:'2026-09-28',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社（联合新闻网转载）',kind:'中央社报道候选人记者会，联合新闻网转载'};
 const changhuaDetails=[
  [chenSu,'childcare','陈素月提出试管婴儿补助每年一次2万元、每人最高8万元，生育补助第一胎3万元、第二胎5万元、第三胎8万元，另有坐月子补助2万元及1至3岁每年1万2000元养护补助。',['county-changhua-childcare-index-20261112','county-policy-changhua-1-1'],'资料库截至2026-11-12，原发日期未核','原文由民间资料库摘录，社群原帖未单独核实；资格、财源及与现有补助如何衔接待说明。'],
  [weiPing,'health','魏平政提出彰化65岁以上长者及55岁以上原住民长者健保费免负担。',['county-wei-elder-cna-20260928'],'2026-09-28','这是记者会提出的方案，适用资格、财源和执行时间须进一步确认。'],
  [chiu,'health','邱建富提出扩大长青幸福卡的使用范围至超商、超市、健保药局及运动艺文，并将计程车每趟折抵提高至200点、让点数可累积，争取接轨多元叫车服务。',['county-changhua-elder-index-20261112','county-chiu-elder-facebook-20261112'],'资料库截至2026-11-12，原发日期未核','原文由民间资料库摘录，社群原帖未单独核实；合作店家、点数规则及财源待说明。']
 ];
 for(const [person,topic,text,sources,date,note] of changhuaDetails)if(!person.policies.some(x=>x.sources?.includes(sources[0])))person.policies.push({topic,text,type:'本届公开主张',basis:'campaign',electionYear:2026,date,sources,note});
 if(!wuPh.evidence.some(x=>x.source==='county-wu-penghu-health-20260617'))wuPh.evidence.push({region:'cn',date:'2026-06-17',topic:'反对涉及大陆医疗及不动产投资的离岛修法',text:'吴淑瑾反对当时国民党在立法院推动的离岛建设条例修法，称引进中国大陆医疗及不动产投资会伤害国家安全。',limit:'这是她对当时修法的政治判断；具体条文及后续立法进度应另查，不扩大为对所有两岸交流的评价。',source:'county-wu-penghu-health-20260617'});
 d.sources['county-huang-chiayi-cec-2016']={title:'2016年嘉义市区域立委选举公报：黄宏成候选人自填资料',url:'https://bulletin.cec.gov.tw/01%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/02%E7%AB%8B%E6%B3%95%E5%A7%94%E5%93%A1/105%E5%B9%B4%E7%AC%AC9%E5%B1%86/01%E5%8D%80%E5%9F%9F/20%E5%98%89%E7%BE%A9%E5%B8%82/%E5%98%89%E7%BE%A9%E5%B8%82%E7%AB%8B%E5%A7%94%E9%81%B8%E8%88%89.pdf',date:'2016年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'嘉义市选举委员会',kind:'选举公报刊载候选人自填资料，不等于机关核实经历'};
 huangCc.countyBrief.work='2016年区域立委选举公报自填曾任电台节目共同主持人、成功学讲师及作者，另列青年创业协会国际主委与校友会监事；任职年月及具体机构经历未独立核实。2026年受访自述曾销售出版物、食品和文具筹措选举经费。';
 huangCc.countyBrief.extraBioSources=['county-huang-chiayi-cec-2016'];
 if(!huangCc.evidence.some(x=>x.source==='county-huang-chiayi-cec-2016'))huangCc.evidence.push({region:'cn',date:'2016年选举公报',topic:'往届选举提出两岸隧道及政治构想',text:'黄宏成在2016年嘉义市区域立委选举公报提出由布袋连接澎湖、金门与厦门的隧道构想，并主张两岸告别统独争议、建立其所称的民主共和国。',limit:'这是2016年候选人自填的往届主张，不代表工程可行、已经实施或他在2026年仍持相同立场。',source:'county-huang-chiayi-cec-2016'});
 if(!huangCc.policies.some(x=>x.sources?.includes('county-huang-chiayi-cec-2016')))huangCc.policies.push({topic:'transport',text:'黄宏成2016年参选嘉义市区域立委时提出连接布袋、澎湖、金门与厦门的隧道构想，并称嘉义市可作为隧道营运中心。',type:'往届立委选举政见（2016年公报）',basis:'campaign',electionYear:2016,date:'2016年选举公报',sources:['county-huang-chiayi-cec-2016'],note:'属于当年构想；工程可行性、经费、相关主管机关及本届是否沿用暂未确认。'});
 d.sources['county-chen-penghu-canoe-2010']={title:'渔业推广报道：陈尽川与传统舢舨文化',url:'https://kmweb.moa.gov.tw/files/document/1160/98ccc774a63f86a0398b431a6b38c4ab_v3.pdf',date:'2010年刊物',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'农业部农业知识入口网（渔业推广刊物）',kind:'刊物人物报道，记载当时职务及活动'};
 d.sources['county-chen-penghu-diving-20250624']={title:'陈尽川海洋巡查后获救',url:'https://news.tvbs.com.tw/local/2912480',date:'2025-06-24',checkedAt:'2026-11-12',publisherId:'tvbs',publisherName:'TVBS新闻',kind:'媒体对海洋巡查与搜救的报道'};
 chenJc.countyBrief.work+=' 农业知识入口网所载2010年刊物称他当时担任澎湖县轻艇协会理事长，筹办传统舢舨摇橹活动；起讫年月尚未确认。2025年他带队海洋巡查时失联，海空搜救后平安获救。';
 chenJc.countyBrief.extraBioSources=['county-chen-penghu-canoe-2010','county-chen-penghu-diving-20250624'];
 const chenFarm=chenJc.policies.find(x=>x.text==='陈尽川提出盘点和活化土地、发展地方特色农业，并推动银合欢资源化。');
 if(chenFarm)chenFarm.text='陈尽川提出盘点与活化土地，发展澎湖特色咸水烟农业，结合田园绿化与观光，并推动银合欢资源化。';
 const chenGovernance=chenJc.policies.find(x=>x.text==='陈尽川提出邀请各界参与县政规划，并称将捐出县长薪资及津贴支持该委员会。');
 if(chenGovernance)chenGovernance.text='陈尽川提出成立治县委员会，邀请各界参与县政规划，并称将捐出县长薪资及津贴作委员会运作基金；另提出设置「我若是县长」公共对话窗口。';
 const repeated=wuYl.policies.find(x=>x.text==='吴炳辉提出扩大山地与沿海偏乡的远距医疗、医消联防和长青食堂服务。');
 const retained=wuYl.policies.find(x=>x.text==='吴炳辉提出在草岭等山区和沿海偏乡扩大远距医疗、医消联防及长青食堂。');
 if(repeated&&retained){for(const source of repeated.sources||[])if(!retained.sources.includes(source))retained.sources.push(source);wuYl.policies.splice(wuYl.policies.indexOf(repeated),1);}
 d.sources['county-wu-chiayi-us-china-20260924']={title:'吴品叡回应中美峰会与台湾利益',url:'https://www.crntt.tw/doc/docDetailCreate.jsp?coluid=192&docid=160272153&kindid=0',date:'2026-09-24',checkedAt:'2026-11-12',publisherId:'other',publisherName:'中评社（倾向待核定）',kind:'媒体现场采访候选人对峰会的回应'};
 const wuChiayi=d.people.find(p=>p.city==='chiayi-county'&&p.name==='吳品叡');if(!wuChiayi)throw new Error('Missing candidate: 吳品叡');
 for(const region of ['cn','us'])if(!wuChiayi.evidence.some(x=>x.region===region&&x.source==='county-wu-chiayi-us-china-20260924'))wuChiayi.evidence.push({region,date:'2026-09-24',topic:'中美峰会与台湾利益',text:'吴品叡受访时担忧中美对谈可能涉及台湾，甚至把台湾议题当作谈判筹码，呼吁台湾方面掌握后续发展并做好应对。',limit:'这是她对当时一次中美峰会的回应，并非对中国大陆或美国全部政策的立场；同一次发言分列两栏，不是两次独立表态。',source:'county-wu-chiayi-us-china-20260924'});
 d.sources['county-luo-hualien-road-20261027']={title:'罗佩秦提出国道六号东延构想',url:'https://www.cnma.org.tw/page/news/show.aspx?kind=8&lang=TW&num=54624',date:'2026-10-27',checkedAt:'2026-11-12',publisherId:'other',publisherName:'CNMA新闻联合网（倾向待核定）',kind:'媒体报道候选人交通提案及竞选团队顾问意见'};
 if(!luo.policies.some(x=>x.sources?.includes('county-luo-hualien-road-20261027')))luo.policies.push({topic:'transport',text:'罗佩秦提出国道六号由南投埔里向东穿越中央山脉、延伸至花莲的构想，媒体报道全长约80公里。其竞选顾问另建议引入日本团队并采用民间参与模式。',type:'本届主张（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-10-27',sources:['county-luo-hualien-road-20261027'],note:'日本团队及融资方式是顾问建议，不直接归为候选人本人对日本政策的立场。路线、地质与生态影响、经费和审批涉及中央权限，尚待评估。'});
 d.sources['county-luo-hualien-education-20260904']={title:'罗佩秦登记时学历查核及选务机关回应',url:'https://news.ipcf.org.tw/210333',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'other',publisherName:'原视新闻（原住民族文化事业基金会）',kind:'媒体报道当事人陈述及县府回应'};
 luo.countyBrief.education='自述陆军官校正期班毕业。2026年登记时因学校更名涉及证书查核；原视报道县府称并非退件，经与中选会确认后完成登记。';
 luo.countyBrief.extraBioSources=[...(luo.countyBrief.extraBioSources||[]),'county-luo-hualien-education-20260904'];
 d.sources['county-hsinchu-xu-workers-index-20261023']={title:'新竹县长候选人清洁工作政见摘录',url:'https://blindvote.app/sources/hsinchucounty',date:'资料库截至2026-10-23，原发日期未核',checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所（倾向待核定）',kind:'民间政见资料库摘录，社群原帖未单独读取'};
 d.sources['county-hsinchu-xu-workers-original']={title:'徐欣莹清洁队员政见原发链接',url:'https://www.facebook.com/shesinging.tw/posts/1644067800415443',date:'发布日期未核',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'徐欣莹公开专页',kind:'资料库所列原发链接，原帖未单独读取'};
 d.sources['county-hsinchu-xu-hakka-index-20261023']={title:'新竹县长候选人客语政见摘录',url:'https://blindvote.app/sources/hsinchucounty',date:'资料库截至2026-10-23，原发日期未核',checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所（倾向待核定）',kind:'民间政见资料库摘录，社群原帖未单独读取'};
 d.sources['county-hsinchu-xu-hakka-original']={title:'徐欣莹客语保存政见原发链接',url:'https://www.facebook.com/shesinging.tw/posts/pfbid0K8MBafzBaSSuNVdVk8uGe4zksr7kS5VeYdKReUrNB7CorER3eTQJcM4rjRChbLLml',date:'发布日期未核',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'徐欣莹公开专页',kind:'资料库所列原发链接，原帖未单独读取'};
 const xuHc=d.people.find(x=>x.city==='hsinchu-county'&&x.name==='徐欣瑩');if(!xuHc)throw new Error('Missing candidate: 徐欣瑩');
 for(const [topic,text,source,original,note] of [
  ['labor','徐欣莹提出为清洁队员提供风扇衣，增加清洁及回收车辆设备补助，并增加健康检查补助。','county-hsinchu-xu-workers-index-20261023','county-hsinchu-xu-workers-original','资料库摘录候选人社群内容，原帖未单独读取；适用人员、补助金额及财源待说明。'],
  ['education','徐欣莹提出整合客语语音辨识、发音练习、字幕与数字教材，并保存长辈的客语故事、童谣及地名。','county-hsinchu-xu-hakka-index-20261023','county-hsinchu-xu-hakka-original','资料库摘录候选人社群内容，原帖未单独读取；合作机构、预算与执行期程待说明。']
 ])if(!xuHc.policies.some(x=>x.sources?.includes(source)))xuHc.policies.push({topic,text,type:'本届公开主张（资料库摘录）',basis:'campaign',electionYear:2026,date:'资料库截至2026-10-23，原发日期未核',sources:[source,original],note});
 const liwu=d.people.find(x=>x.city==='taitung'&&x.name==='李吳穎智');if(!liwu)throw new Error('Missing candidate: 李吳穎智');
 const retention=liwu.policies.find(x=>x.sources?.includes('county-policy-taitung-1-1-excerpt'));if(retention){retention.text='李吴颖智提出台东合法工作的劳工服务满3个月、6个月及1年可分阶段获留任奖励，之后每6个月奖励；企业须依法投保、正常给薪且无重大违法劳工纪录。';retention.note='资料库摘录社群内容，原帖未单独读取；奖励金额、资格细节、财源及实施期程暂未确认。';}
 const chenChong=d.people.find(x=>x.city==='changhua'&&x.name==='陳重嘉');if(!chenChong)throw new Error('Missing candidate: 陳重嘉');
 if(!chenChong.policies.some(x=>x.sources?.includes('county-wei-elder-cna-20260928')))chenChong.policies.push({topic:'housing',text:'陈重嘉提出以临时社会住宅安置居民，再推动老旧街区更新，并结合各乡镇特点规划产业升级。',type:'本届公开主张（媒体报道）',basis:'campaign',electionYear:2026,date:'2026-09-28',sources:['county-wei-elder-cna-20260928'],note:'中央社转述其脸书主张；搬迁是否自愿、安置条件、选址、预算及执行期限待进一步说明。'});
 const chiuEducation=chiu.policies.find(x=>x.topic==='education'&&x.text.includes('行政数位化'));if(chiuEducation){chiuEducation.text='邱建富提出以校园行政数位化减轻教师负担，增加心理、社工及特殊教育支持人员，并将教师节礼金提高至1000元。';if(!chiuEducation.sources.includes('county-wei-elder-cna-20260928'))chiuEducation.sources.push('county-wei-elder-cna-20260928');chiuEducation.note='中央社报道其教师节礼金及行政支持主张；适用人员、预算、人员配置与执行时间待说明。';}
 d.sources['county-taitung-birth-existing-20250211']={title:'台东县政府生育补助实施计划',url:'https://tth.taitung.gov.tw/service/detail/GGMGLAJJAL',date:'2025-02-11修订',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'台东县台东户政事务所',kind:'户政机关公开的县级生育补助计划；具体适用资格和后续修订以主管机关说明为准'};
 const birthProposal=wangTt.policies.find(x=>x.topic==='childcare'&&x.text.includes('每案补助2万元'));if(birthProposal){birthProposal.note='候选人未说明生育2万元与既有补助如何衔接。台东户政机关所列2025年修订计划，符合条件者第一胎4万元、第二胎4.5万元、第三胎以上5万元；适用对象、并领方式及后续修订应另核。';if(!birthProposal.sources.includes('county-taitung-birth-existing-20250211'))birthProposal.sources.push('county-taitung-birth-existing-20250211');}
 const tsaiChiayi=d.people.find(x=>x.city==='chiayi-county'&&x.name==='蔡易餘');if(!tsaiChiayi)throw new Error('Missing candidate: 蔡易餘');
 const tsaiCard=tsaiChiayi.policies.find(x=>x.sources?.includes('county-policy-chiayi-county-2-2-excerpt'));if(tsaiCard){tsaiCard.text='蔡易余主张敬老卡一般地区每月1200点，大埔、阿里山每月1500点，扩大到农渔产品和接驳服务；他另提出三节各加码300点。';if(!tsaiCard.sources.includes('county-chiayi-rural-water-20261112'))tsaiCard.sources.push('county-chiayi-rural-water-20261112');tsaiCard.note='联合报2026年11月报道其大埔、阿里山点数及三节加码主张；三节加码对象、使用细则、预算及执行时间待进一步说明。';}
 d.sources['county-taitung-bio-cna-20261027']={title:'台东县长候选人登记经历与号次',url:'https://www.cna.com.tw/news/aipl/202610275002.aspx',date:'2026-10-27（资料报道日）',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'候选人资料汇编；部分任职年月未列，须与机构资料核对'};
 wangTt.countyBrief.work='中央社候选人资料列其担任台东释迦生产合作社理事主席、全国释迦策略联盟召集人，并曾从事台东县农会副食供应站蔬果业务；各项职务起止年月及现况待核。';
 wangTt.countyBrief.extraBioSources=[...(wangTt.countyBrief.extraBioSources||[]),'county-taitung-bio-cna-20261027'];
 liwu.countyBrief.work='本人自述曾任粗工、清洁工、记者，亦从事饭店公关及餐厅管理；中央社候选人资料另列工会副秘书长和不动产业务。各工作单位、任职起止年月及现况暂未确认。';
 liwu.countyBrief.extraBioSources=[...(liwu.countyBrief.extraBioSources||[]),'county-taitung-bio-cna-20261027'];
 d.sources['county-chen-kinmen-whitepaper-20261104']={title:'陈玉珍发表金门政策白皮书',url:'https://www.kmdn.gov.tw/1117/1271/1272/591447',date:'2026-11-04（报道日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（金门县政府所属媒体）',kind:'地方媒体报道候选人政策白皮书'};
 const chenKinmenWhitepaper=d.people.find(x=>x.city==='kinmen'&&x.name==='陳玉珍');if(!chenKinmenWhitepaper)throw new Error('Missing candidate: 陳玉珍');
 if(!chenKinmenWhitepaper.policies.some(x=>x.sources?.includes('county-chen-kinmen-whitepaper-20261104')))chenKinmenWhitepaper.policies.push(
  {topic:'health',text:'陈玉珍提出规划第二大同之家，并建立家户远程智慧照护系统。',type:'本届政见（政策白皮书报道）',basis:'campaign',electionYear:2026,date:'2026-11-03（发布）',sources:['county-chen-kinmen-whitepaper-20261104'],note:'媒体报道白皮书方向；选址、服务资格、经费及实施时间暂未确认。'},
  {topic:'childcare',text:'陈玉珍提出公办民营坐月子中心和一站式育儿智慧平台。',type:'本届政见（政策白皮书报道）',basis:'campaign',electionYear:2026,date:'2026-11-03（发布）',sources:['county-chen-kinmen-whitepaper-20261104'],note:'具体地点、收费、使用资格及预算暂未确认。'},
  {topic:'health',text:'陈玉珍提出研议在台湾本岛设陪病住宿会馆，减轻跨海就医家庭负担。',type:'本届政见（政策白皮书报道）',basis:'campaign',electionYear:2026,date:'2026-11-03（发布）',sources:['county-chen-kinmen-whitepaper-20261104'],note:'报道使用研议措辞；选址、入住资格、费用与时程暂未确认。'},
  {topic:'economy',text:'陈玉珍提出青年创业种子天使基金和青年返乡实习，并发展酒糟牛羊产业链。',type:'本届政见（政策白皮书报道）',basis:'campaign',electionYear:2026,date:'2026-11-03（发布）',sources:['county-chen-kinmen-whitepaper-20261104'],note:'资金规模、申请资格与配套机制暂未确认。'},
  {topic:'tourism',text:'陈玉珍提出发展音乐、运动及夜间观光，以增加旅客在金门停留的时间。',type:'本届政见（政策白皮书报道）',basis:'campaign',electionYear:2026,date:'2026-11-03（发布）',sources:['county-chen-kinmen-whitepaper-20261104'],note:'具体活动、预算及执行时程暂未确认；预期效果并非已实现成果。'}
 );
 d.sources['county-lin-yunlin-dental-association-202604']={title:'2026年口腔健康活动参与院所名单',url:'https://www.cda.org.tw/cda/get_attachment?aid=f62332ae9c075327019d6607b6fc00f8&fid=014',date:'2026-04（名单活动期间）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'中华民国牙医师公会全国联合会（专业团体）',kind:'牙医专业团体公开院所名单'};
 d.sources['county-lin-yunlin-forum-udn-20261110']={title:'云林县长公办政见会录影报道',url:'https://udn.com/vote2026/story/124652/9867798',date:'2026-11-10（报道日）',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道公办政见会录影'};
 const linYunlinCurrent=d.people.find(x=>x.city==='yunlin'&&x.name==='林佳瑜');if(!linYunlinCurrent?.countyBrief)throw new Error('Missing candidate: 林佳瑜');
 linYunlinCurrent.countyBrief.work='2018年选举公报列其自1994年起开业并任牙医诊所院长；2022年公报自列正云牙医诊所开业负责人。牙医师公会2026年4月活动名单亦将林佳瑜列为正云牙医诊所负责医师；该名单不能确认此后任职现况。';
 linYunlinCurrent.countyBrief.extraBioSources=[...(linYunlinCurrent.countyBrief.extraBioSources||[]),'county-lin-yunlin-dental-association-202604'];
 const linForum=linYunlinCurrent.policies.find(x=>x.sources?.includes('county-yunlin-forum-20261109'));if(linForum){linForum.text='林佳瑜认为科技创新及社会福利的推动来自民间，政府不是唯一推动力量，公部门应以服务为角色；他认为云林科技发展将跟随全球趋势。';linForum.sources.push('county-lin-yunlin-forum-udn-20261110');linForum.note='这是政见会录影中对政府角色的观点；报道未列具体科技或福利项目、预算与执行时程。完整政见会预计11月18日起播出。';}
 d.sources['county-migrant-policy-cna-20261103']={title:'桃竹苗三名候选人提出新住民政见',url:'https://www.cna.com.tw/news/aipl/202611030133.aspx',date:'2026-11-03',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人记者会'};
 d.sources['county-wen-nantou-family-20261108']={title:'温世政提出妇幼与新住民政策',url:'https://org-today.line-apps.com/tw/v3/article/XYpRzXO',date:'2026-11-08',checkedAt:'2026-11-12',publisherId:'ltn',publisherName:'自由时报（LINE TODAY转载）',kind:'媒体报道候选人座谈会'};
 for(const [city,name,topic,text,source,date,note] of [
  ['taoyuan','黃世杰','labor','黄世杰提出新二代产业实习与就业计划，并为新住民提供创业陪伴及微型贷款辅导。','county-migrant-policy-cna-20261103','2026-11-03','具体行业、保障方式、资格及经费暂未确认。'],
  ['taoyuan','黃世杰','accountability','黄世杰提出1999市民专线结合AI及真人进行三方通译，并设立新住民事务协调机制。','county-migrant-policy-cna-20261103','2026-11-03','语种、人员配置、预算和实施时程暂未确认。'],
  ['hsinchu-city','莊競程','accountability','庄竞程提出提高市府新住民照顾辅导委员会的新住民代表比例，并让1999专线提供越南语及印尼语服务。','county-migrant-policy-cna-20261103','2026-11-03','代表比例、服务时段及人员配置暂未确认。'],
  ['hsinchu-city','莊競程','labor','庄竞程提出设置新住民创业陪跑团及单一窗口，协助处理商登、食品安全、税务与融资等事项。','county-migrant-policy-cna-20261103','2026-11-03','申请资格、团队规模及预算暂未确认。'],
  ['miaoli','陳品安','accountability','陈品安提出成立跨局处的新住民发展中心，增加专责服务人力与资源。','county-migrant-policy-cna-20261103','2026-11-03','组织架构、经费及实施时间暂未确认。'],
  ['nantou','温世政','childcare','温世政提出以每1万人设一处托育中心为目标，并以草屯约10万人口估算至少10处。','county-wen-nantou-family-20261108','2026-11-08','这是候选人目标和人口估算，中心规模、现有设施如何纳入、预算及时程暂未确认。'],
  ['nantou','温世政','labor','温世政提出为新住民设多语言服务中心，并提供求职或创业技能培训及创业租金补贴。','county-wen-nantou-family-20261108','2026-11-08','报道未列语种、补贴金额、资格及实施时间。']
 ]){const candidate=d.people.find(p=>p.city===city&&p.name===name);if(!candidate)throw new Error('Missing candidate: '+name);if(!candidate.policies.some(x=>x.sources?.includes(source)&&x.text===text))candidate.policies.push({topic,text,type:'本届政见（媒体报道）',basis:'campaign',electionYear:2026,date,sources:[source],note});}
 d.sources['county-chen-miaoli-japan-20240312']={title:'日本鱼津市访团参与苗栗文化活动',url:'https://www.miaoli.gov.tw/News_Content2.aspx?n=275&s=737381',date:'2024-03-13（县府发布）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'苗栗县政府',kind:'县政府活动记录'};
 const chenMiaoliJapan=d.people.find(p=>p.city==='miaoli'&&p.name==='陳品安');if(!chenMiaoliJapan)throw new Error('Missing candidate: 陳品安');
 if(!chenMiaoliJapan.evidence.some(x=>x.source==='county-chen-miaoli-japan-20240312'))chenMiaoliJapan.evidence.push({region:'jp',date:'2024-03-12',topic:'与日本鱼津市访团同出席文化活动',text:'苗栗县政府记载，时任县议员陈品安与到访的日本富山县鱼津市市长及其他来宾共同出席白沙屯妈祖文化活动记者会。',limit:'县府记录没有列出陈品安个人发言，也未说明她参加后续业务座谈；不能据此推断对日政策立场。',source:'county-chen-miaoli-japan-20240312'});
 d.sources['county-zhu-hsinchu-policy-20261102']={title:'新竹县长候选人政策对照',url:'https://n.yam.com/Article/20261102494156',date:'2026-11-02（报道日）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'报新闻（蕃新闻转载；倾向待核定）',kind:'媒体整理候选人政见，引用自由时报报道'};
 const zhuHcPolicies=d.people.find(p=>p.city==='hsinchu-county'&&p.name==='朱定瑀');if(!zhuHcPolicies)throw new Error('Missing candidate: 朱定瑀');
 if(!zhuHcPolicies.policies.some(x=>x.sources?.includes('county-zhu-hsinchu-policy-20261102')))zhuHcPolicies.policies.push(
  {topic:'health',text:'朱定瑀提出全额补助长者助听器、活动假牙及膝关节垫片，并为50岁以上县民提供免费健康检查。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-10-11（活动）',sources:['county-zhu-hsinchu-policy-20261102'],note:'依据报新闻转述自由时报的活动报道；适用资格、经费及执行期程暂未确认。'},
  {topic:'transport',text:'朱定瑀提出除酒驾、毒驾和闯红灯外，交通违规者可登记原因及改善方法，申请免罚撤单。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-10-11（活动）',sources:['county-zhu-hsinchu-policy-20261102'],note:'属于候选人构想；道路交通裁罚涉及中央法令，地方权限、合法性与安全影响须进一步核实。'},
  {topic:'housing',text:'朱定瑀提出以征收土地交换遭公共使用的私人土地，并为育婴父母提供无地价房或免费社会住宅。',type:'本届政见（媒体整理）',basis:'campaign',electionYear:2026,date:'2026-10-11（活动）',sources:['county-zhu-hsinchu-policy-20261102'],note:'依据媒体整理；具体土地来源、征收条件、资格及财源暂未确认。'}
 );
 d.sources['county-li-kinmen-appointment-20221225']={title:'金门县政府副县长人事任命',url:'https://www.kinmen.gov.tw/News_Content2.aspx?Create=1&n=98E3CA7358C89100&s=4A6B87D7D0085595&sms=BF7D6D478B935644',date:'2022-12-25（人事令生效）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（金门县政府网站转载）',kind:'地方媒体报道县府人事'};
 d.sources['county-li-kinmen-departure-20260620']={title:'李文良卸任金门副县长',url:'https://www.cna.com.tw/news/aloc/202606290063.aspx',date:'2026-06-29（报道日）',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道人事异动'};
 d.sources['county-li-kinmen-register-20260902']={title:'李文良登记参选并提出四领域政策',url:'https://www.cna.com.tw/news/aipl/202609020279.aspx',date:'2026-09-02',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道参选登记与政策'};
 const liKinmenUpdate=d.people.find(p=>p.city==='kinmen'&&p.name==='李文良');if(!liKinmenUpdate?.countyBrief)throw new Error('Missing candidate: 李文良');
 liKinmenUpdate.countyBrief.work='曾任国立金门大学运动与休闲学系助理教授、总务长及金门县政府教育处长；2022年12月25日借调出任副县长，2026年6月20日卸职。其余职务具体任期待核。';
 liKinmenUpdate.countyBrief.extraBioSources=[...(liKinmenUpdate.countyBrief.extraBioSources||[]),'county-li-kinmen-appointment-20221225','county-li-kinmen-departure-20260620'];
 if(!liKinmenUpdate.policies.some(x=>x.sources?.includes('county-li-kinmen-register-20260902')))liKinmenUpdate.policies.push(
  {topic:'transport',text:'李文良提出借鉴马祖新台马轮，推动台湾本岛与金门间的客轮交通。',type:'本届政见（登记采访）',basis:'campaign',electionYear:2026,date:'2026-09-02',sources:['county-li-kinmen-register-20260902'],note:'属于交通构想，船型、航线、投资、中央及地方权责与实施时间待进一步说明。'},
  {topic:'tourism',text:'李文良提出整合金门酒厂资源，打造文化体验园区，结合地方产业与观光。',type:'本届政见（登记采访）',basis:'campaign',electionYear:2026,date:'2026-09-02',sources:['county-li-kinmen-register-20260902'],note:'园区选址、资金及与酒厂的合作方式暂未确认。'}
 );
 d.sources['county-liang-kinmen-ncku-career']={title:'成功大学政治学系：梁文韬经历',url:'https://www.polsci.ncku.edu.tw/team_detail.asp?nid=5',date:'学校资料页（未列更新日期）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立成功大学政治学系',kind:'大学教师履历'};
 d.sources['county-liang-kinmen-career-20260717']={title:'梁文韬宣布参选金门县长',url:'https://udn.com/news/story/124652/9633058',date:'2026-07-17',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体报道候选人经历'};
 const liangWork=d.people.find(p=>p.city==='kinmen'&&p.name==='梁文韜');if(!liangWork?.countyBrief)throw new Error('Missing candidate: 梁文韜');
 liangWork.countyBrief.work='成功大学政治系教师，联合报报道其2001年起在该系任教；校方履历列1998年12月至1999年8月任香港大学政治及公共行政学系助理研究主任或高级研究助理、1999年9月至12月任该系访问助理教授、2000年7月至8月任英国爱丁堡大学高级人文科学研究所访问研究员、2000年1月至2001年7月任香港城市大学公共及社会行政学系讲师。';
 liangWork.countyBrief.extraBioSource='county-liang-kinmen-ncku-career';liangWork.countyBrief.extraBioSources=[...(liangWork.countyBrief.extraBioSources||[]),'county-liang-kinmen-career-20260717'];
 d.sources['county-you-hualien-career-20260607']={title:'游淑贞从幼教走入地方政治',url:'https://udn.com/news/story/124652/9550313',date:'2026-06-07',checkedAt:'2026-11-12',publisherId:'udn',publisherName:'联合报',kind:'媒体人物采访'};
 d.sources['county-you-hualien-career-20260609']={title:'游淑贞幼教及地方从政经历专访',url:'https://news.tvbs.com.tw/politics/3220933',date:'2026-06-09',checkedAt:'2026-11-12',publisherId:'tvbs',publisherName:'TVBS',kind:'媒体人物专访'};
 const youHualienWork=d.people.find(p=>p.city==='hualien'&&p.name==='游淑貞');if(!youHualienWork?.countyBrief)throw new Error('Missing candidate: 游淑貞');
 youHualienWork.countyBrief.work='联合报报道她曾负责三间幼儿园和一间补习班；TVBS专访列其曾任幼儿园教师、园长，并从事幼教经营管理。机构名称、各职务起止年月暂未确认。';
 youHualienWork.countyBrief.extraBioSource='county-you-hualien-career-20260607';youHualienWork.countyBrief.extraBioSources=[...(youHualienWork.countyBrief.extraBioSources||[]),'county-you-hualien-career-20260609'];
 d.sources['county-su-pingtung-career-ly8']={title:'立法院第八届委员名鉴：苏清泉经历',url:'https://lis.ly.gov.tw/lghtml/work/_K5_ttsbooke3.pdf?1049273891=',date:'第八届立法委员名鉴',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院',kind:'立法院历史委员名鉴'};
 const suPingtungCareer=d.people.find(p=>p.city==='pingtung'&&p.name==='蘇清泉');if(!suPingtungCareer?.countyBrief)throw new Error('Missing candidate: 蘇清泉');
 suPingtungCareer.countyBrief.work='立法院第八届委员名鉴列其1984年9月至1991年7月任台北马偕纪念医院医师、1990年7月至1992年8月任国立台北护理学院附设医院外科主任、1992年10月至2012年1月任安泰医院院长；另于2008年12月至2014年12月任区域医院协会理事长，2013年6月起任医师公会全国联合会理事长，结束时间待核。';
 suPingtungCareer.countyBrief.extraBioSource='county-su-pingtung-career-ly8';
 d.sources['county-wu-yilan-prosecutor-20200325']={title:'吴宗宪由检察官转任新北法制局长',url:'https://www.cna.com.tw/news/aloc/202003250289.aspx',date:'2020-03-25',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道职务转任'};
 const wuYilanCareer=d.people.find(p=>p.city==='yilan'&&p.name==='吳宗憲');if(!wuYilanCareer?.countyBrief)throw new Error('Missing candidate: 吳宗憲');
 wuYilanCareer.countyBrief.work='中央社2020年报道，吴宗宪历任南投、士林和桃园地检署检察官，并曾任检肃黑金专组检察官；2020年3月25日宣誓接任新北市政府法制局长。各地检署任职起止年月暂未确认。';
 wuYilanCareer.countyBrief.extraBioSource='county-wu-yilan-prosecutor-20200325';
 d.sources['county-tsai-chiayi-bio-cna']={title:'2026县市长参选人资料：蔡易余',url:'https://www.cna.com.tw/tag/34862/',date:'候选人资料汇编，更新时间未列',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'候选人资料汇编'};
 d.sources['county-tsai-chiayi-career-cec2012']={title:'2012年嘉义县立委选举公报：蔡易余经历',url:'https://web.cec.gov.tw/api/file/cbfbb933-f5df-4e55-a7a1-275ec2ea36c6.pdf',date:'2012年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人自行填报的往届经历'};
 const tsaiChiayiWork=d.people.find(p=>p.city==='chiayi-county'&&p.name==='蔡易餘');if(!tsaiChiayiWork?.countyBrief)throw new Error('Missing candidate: 蔡易餘');
 tsaiChiayiWork.countyBrief.work='2012年选举公报自列曾任万国法律事务所执业律师、蔡易余律师事务所主持人、新台湾国策智库助理研究员及嘉义之音电台主持人；中央社候选人资料另列台湾啤酒篮球队领队及数位汇流发展协会理事长。各职务起止年月及现况暂未确认。';
 tsaiChiayiWork.countyBrief.extraBioSource='county-tsai-chiayi-career-cec2012';tsaiChiayiWork.countyBrief.extraBioSources=[...(tsaiChiayiWork.countyBrief.extraBioSources||[]),'county-tsai-chiayi-bio-cna'];
 d.sources['county-chen-changhua-profile-20260626']={title:'陈素月谈文化工作及从政经历',url:'https://www.fountmedia.io/article/395987',date:'2026-06-26',checkedAt:'2026-11-12',publisherId:'other',publisherName:'放言（倾向待核定）',kind:'媒体转述候选人电台专访'};
 const chenChanghuaWork=d.people.find(p=>p.city==='changhua'&&p.name==='陳素月');if(!chenChanghuaWork?.countyBrief)throw new Error('Missing candidate: 陳素月');
 chenChanghuaWork.countyBrief.work='本人在电台专访中回忆，研究所毕业后曾任台北县立文化中心约聘研究员，随家人搬回彰化后辞职，并协助翁金珠竞选；另曾任国立空中大学讲师、大叶大学兼任讲师、拓展文教基金会执行长及立委国会助理。各项职务起止年月暂未确认。';
 chenChanghuaWork.countyBrief.extraBioSources=[...(chenChanghuaWork.countyBrief.extraBioSources||[]),'county-chen-changhua-profile-20260626'];
 d.sources['county-wei-hualien-japan-agriculture-20250310']={title:'魏嘉贤谈日本温室技术与花莲智慧农业',url:'https://www.hlcc.gov.tw/upfile/20250310093211-165.pdf',date:'2025-03-10',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'花莲县议会议政报道',kind:'县议会刊物刊载议员公开主张'};
 d.sources['county-wei-hualien-takachiho-20191008']={title:'花莲市与日本高千穗町缔结姐妹市',url:'https://www.cna.com.tw/news/aloc/201910080118.aspx',date:'2019-10-08',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道地方政府交流活动'};
 const weiHualienJapan=d.people.find(p=>p.city==='hualien'&&p.name==='魏嘉賢');if(!weiHualienJapan)throw new Error('Missing candidate: 魏嘉賢');
 if(!weiHualienJapan.evidence.some(x=>x.source==='county-wei-hualien-japan-agriculture-20250310'))weiHualienJapan.evidence.push({region:'jp',date:'2025-03-10（刊载日）',topic:'考察香川温室后谈花莲农业',text:'花莲县议会议政报道刊载，魏嘉贤参访日本香川县草莓农场后，提出借鉴高架栽培及智慧监控技术，结合观光与青年创业资源发展花莲农业。',limit:'报道未列访日确切日期；这是地方农业建议，不代表相关技术已在花莲实施，也不代表对日本整体政策的立场。',source:'county-wei-hualien-japan-agriculture-20250310'});
 if(!weiHualienJapan.evidence.some(x=>x.source==='county-wei-hualien-takachiho-20191008'))weiHualienJapan.evidence.push({region:'jp',date:'2019-10-08',topic:'花莲与高千穗町缔结姐妹市',text:'时任花莲市长魏嘉贤与日本高千穗町长签订姐妹市盟约，并表示希望持续推动观光、产业、教育和文化交流。',limit:'盟约与当时交流愿景不等于后续各项合作均已落实。',source:'county-wei-hualien-takachiho-20191008'});
 d.sources['county-wei-hualien-radiology-20200301']={title:'魏嘉贤回忆放射师及SARS防疫经历',url:'https://www.cna.com.tw/news/aloc/202003010069.aspx',date:'2020-03-01',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道及当事人回忆'};
 const weiHualienCareer=d.people.find(p=>p.city==='hualien'&&p.name==='魏嘉賢');if(!weiHualienCareer?.countyBrief)throw new Error('Missing candidate: 魏嘉賢');
 weiHualienCareer.countyBrief.work='医事放射师，曾服务花莲县卫生局、富里乡卫生所及苏澳荣民医院。中央社报道他曾参与偏乡X光巡回服务；2003年服役于国军805医院台东分院期间，投入SARS防疫一线。各职务起止年月暂未确认。';
 weiHualienCareer.countyBrief.extraBioSources=[...(weiHualienCareer.countyBrief.extraBioSources||[]),'county-wei-hualien-radiology-20200301'];
 d.sources['county-wang-chiayi-city-career-20200328']={title:'王美惠早年工作与地方服务经历',url:'https://www.nownews.com/news/4009351',date:'2020-03-28',checkedAt:'2026-11-12',publisherId:'other',publisherName:'NOWnews今日新闻（倾向待核定）',kind:'媒体人物经历报道'};
 const wangChiayiCareer=d.people.find(p=>p.city==='chiayi-city'&&p.name==='王美惠');if(!wangChiayiCareer?.countyBrief)throw new Error('Missing candidate: 王美惠');
 wangChiayiCareer.countyBrief.work='NOWnews报道她早年因家庭经济困难曾在药房工作，后来担任嘉义市议员江熙哲地方服务处助理；立法院委员简介列其曾任该服务处主任。药房名称及各职位起止年月暂未确认。';
 wangChiayiCareer.countyBrief.extraBioSources=[...(wangChiayiCareer.countyBrief.extraBioSources||[]),'county-wang-chiayi-city-career-20200328'];
 d.sources['county-lin-yilan-cals-profile-2024']={title:'华航2024年股东会议手册：林国漳履历',url:'https://www.china-airlines.com/us/zh/Images/2024_Shareholder_03-zh_tcm342-63058.pdf',date:'2024年股东会议手册',checkedAt:'2026-11-12',publisherId:'other',publisherName:'中华航空（公司股东会资料）',kind:'公司公开的独立董事候选人履历'};
 const linYilanCareerDetail=d.people.find(p=>p.city==='yilan'&&p.name==='林國漳');if(!linYilanCareerDetail?.countyBrief)throw new Error('Missing candidate: 林國漳');
 linYilanCareerDetail.countyBrief.work='律师，曾任宜兰县律师公会理事长、法律扶助基金会宜兰分会会长、国立宜兰大学兼任讲师及宜兰社区大学讲师。经济部名册列其为林国漳律师事务所所长及国光电力公股监察人，名册所列本届董事会任期为2024年1月24日至2027年1月23日；其他任职起止年月及是否中途变动暂未确认。';
 linYilanCareerDetail.countyBrief.extraBioSources=[...(linYilanCareerDetail.countyBrief.extraBioSources||[]),'county-lin-yilan-cals-profile-2024'];
 d.sources['county-chang-kuowei-career-cna-20260904']={title:'2026县市长参选人资料：张国威',url:'https://www.cna.com.tw/news/aipl/202609045002.aspx',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体汇编候选人登记资料'};
 const changKinmenCareer=d.people.find(p=>p.city==='kinmen'&&p.name==='張國威');if(!changKinmenCareer?.countyBrief)throw new Error('Missing candidate: 張國威');
 changKinmenCareer.countyBrief.work='中央社2026年候选人资料列二毛旅行社董事长、光华园光华文创餐厅董事长；任职起止年月及后续现况暂未确认。';
 changKinmenCareer.countyBrief.extraBioSources=[...(changKinmenCareer.countyBrief.extraBioSources||[]),'county-chang-kuowei-career-cna-20260904'];
 d.sources['county-hsu-penghu-thesis-2018']={title:'许智富硕士论文：西屿乡观光发展策略',url:'https://ethesys.lis.nsysu.edu.tw/ETD-db/ETD-search-c/view_etd?URN=etd-0801118-163010',date:'2018-09-01（论文缴交）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立中山大学博硕士论文系统',kind:'大学学位论文摘要'};
 const hsuPenghuBio=d.people.find(p=>p.city==='penghu'&&p.name==='許智富');if(!hsuPenghuBio?.countyBrief)throw new Error('Missing candidate: 許智富');
 hsuPenghuBio.countyBrief.education='国立屏东师范学院体育系；国立中山大学公共事务管理研究所硕士。2018年论文从地方行销角度研究西屿观光，透过资料分析与访谈提出公私沟通及闲置空间利用等建议；这是当时研究，不等于本届竞选承诺。';
 hsuPenghuBio.countyBrief.office='本人校友刊物自述2014年出任西屿乡公所秘书、2018年任澎湖县副县长，曾兼任县府民政处长，后任建设处长；各职务离任年月暂未确认。';
 hsuPenghuBio.countyBrief.extraBioSources=[...(hsuPenghuBio.countyBrief.extraBioSources||[]),'county-hsu-penghu-thesis-2018'];
 d.sources['tainan-chen-rural-fund-cna-20261105']={title:'中央社：陈亭妃承诺捐三成选举补助款成立偏乡基金',url:'https://www.cna.com.tw/news/aipl/202611050186.aspx',date:'2026-11-05',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道候选人公开承诺'};
 const chenTainanFund=d.people.find(p=>p.id==='chen-t');if(!chenTainanFund)throw new Error('Missing candidate: 陳亭妃');
 chenTainanFund.policies=chenTainanFund.policies||[];
 if(!chenTainanFund.policies.some(x=>x.sources?.includes('tainan-chen-rural-fund-cna-20261105')))chenTainanFund.policies.push({topic:'education',text:'承诺当选上任后捐出30%选举补助款，交由台南市政府成立偏乡教育与偏乡医疗基金，改善偏乡教育及医疗资源。',date:'2026-11-05',sources:['tainan-chen-rural-fund-cna-20261105'],note:'这是候选人的竞选承诺；基金设立方式、具体用途、经费规模及后续执行暂未确认。',type:'竞选政见（媒体报道）',electionYear:2026});
 d.sources['tainan-hsieh-campaign-site-20261105']={title:'谢龙介竞选网站：十大政见入口',url:'https://www.longuy.com/',date:'2026-11-05（网站上线）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'谢龙介竞选网站（候选人自述）',kind:'候选人竞选网站',note:'候选人发布的政策和竞选材料，属于当事方自述；具体预算、执行及成果仍需独立核查。'};
 const hsiehTainanSite=d.people.find(p=>p.id==='hsieh');if(!hsiehTainanSite)throw new Error('Missing candidate: 謝龍介');
 hsiehTainanSite.policyCoverage=hsiehTainanSite.policyCoverage||{checkedAt:'2026-11-12',note:'',sources:[]};
 hsiehTainanSite.policyCoverage.note+=' 候选人政见网站已于2026年11月5日上线，可查看其公开政见；各项执行细节与财源仍须分别核实。';
 hsiehTainanSite.policyCoverage.sources=[...new Set([...(hsiehTainanSite.policyCoverage.sources||[]),'tainan-hsieh-campaign-site-20261105'])];
 d.sources['county-cheng-zhubei-trade-20220812']={title:'郑朝方办公室谈农产品输入限制及竹北产业',url:'https://www.nownews.com/news/5902722',date:'2022-08-12',checkedAt:'2026-11-12',publisherId:'other',publisherName:'NOWnews今日新闻（倾向待核定）',kind:'媒体综合候选人办公室新闻稿与公开活动'};
 const chengTrade=d.people.find(p=>p.city==='hsinchu-county'&&p.name==='鄭朝方');if(!chengTrade?.countyBrief)throw new Error('Missing candidate: 鄭朝方');
 if(!chengTrade.evidence.some(x=>x.source==='county-cheng-zhubei-trade-20220812'))chengTrade.evidence.push({region:'cn',date:'2022-08-12',topic:'团队回应大陆限制台湾食品输入',text:'郑朝方2022年参选竹北市长时，其办公室将大陆限制台湾食品输入描述为「以商围政」，并称郑走访当地产业、联系农委会协助对接业者需求。',limit:'政治定性来自当时办公室，报道没有提供各项协助的可验证成果；这是针对当时事件的回应，不能扩大为对全部两岸政策的立场。',source:'county-cheng-zhubei-trade-20220812'});
 chengTrade.countyBrief.work='2018年选举公报自列曾任人间卫视及环宇广播电台节目主持人、新竹新闻电视主播；NOWnews 2022年报道另列其曾任阳明交通大学客座讲师。各职务起止年月暂未确认。';
 chengTrade.countyBrief.extraBioSources=[...new Set([...(chengTrade.countyBrief.extraBioSources||[]),'county-cheng-zhubei-trade-20220812'])];
 d.sources['county-liwu-taitung-ipcf-20260225']={title:'原住民族文化事业基金会：李吴颖智宣布参选及自述经历',url:'https://www.ipcf.org.tw/getMenuByLevel/Radio/Radio_News_Page?newsId=26022512104014976',date:'2026-02-25',checkedAt:'2026-11-12',publisherId:'other',publisherName:'原住民族文化事业基金会（公共媒体；倾向待核定）',kind:'记者采访及候选人自述'};
 const liwuCareer=d.people.find(p=>p.city==='taitung'&&p.name==='李吳穎智');if(!liwuCareer?.countyBrief)throw new Error('Missing candidate: 李吳穎智');
 liwuCareer.countyBrief.work='本人自述曾任粗工、清洁工、记者，亦从事饭店公关及餐厅管理；原住民族文化事业基金会采访另载其曾任国会助理，中央社候选人资料列工会副秘书长和不动产业务。各工作单位、服务对象、任职起止年月及现况暂未确认。';
 liwuCareer.countyBrief.extraBioSources=[...new Set([...(liwuCareer.countyBrief.extraBioSources||[]),'county-liwu-taitung-ipcf-20260225'])];
 d.sources['county-chang-kinmen-xiangan-ftv-20261009']={title:'民视：张国威谈厦门机场与小三通观光构想',url:'https://health.ftvnews.com.tw/news/detail/2026A09P01M1',date:'2026-10-09',checkedAt:'2026-11-12',publisherId:'ftv',publisherName:'民视新闻',kind:'媒体采访及候选人竞选构想'};
 const changTourism=d.people.find(p=>p.city==='kinmen'&&p.name==='張國威');if(!changTourism)throw new Error('Missing candidate: 張國威');
 if(!changTourism.evidence.some(x=>x.source==='county-chang-kinmen-xiangan-ftv-20261009'))changTourism.evidence.push({region:'cn',date:'2026-10-09',topic:'借小三通衔接厦门机场',text:'张国威向民视表示，希望在厦门翔安国际机场启用后，利用小三通吸引国际游客中转金门，并同步提升餐饮和接待服务。',limit:'机场启用时间、旅客通关与转运安排及预估客流需另核；这是候选人的观光构想，并非已核定或已实现的计划。',source:'county-chang-kinmen-xiangan-ftv-20261009'});
 d.sources['county-yang-yilan-ebk-portrait-20261112']={title:'选举黄页：2026年宜兰县长候选人杨鉯婷资料页',url:'https://ebk.olc.tw/candidates/view/ed8991c8-29be-41d5-9391-35e77ab748f3',date:'页面未列日期',checkedAt:'2026-11-12',publisherId:'other',publisherName:'选举黄页（民间选举资料库）',kind:'候选人资料页与其刊载头像',note:'页面以姓名、选区及5号标示候选人；照片原始出处、拍摄日期与摄影者未列，尚未取得官方公报核对。'};
 const yangPortrait=d.people.find(p=>p.city==='yilan'&&p.name==='楊鉯婷');if(!yangPortrait)throw new Error('Missing candidate: 楊鉯婷');
 yangPortrait.photo={url:'https://ebk.olc.tw/media/4ab5f965/ecf3/4121/af40/81e4362082d3.jpg',source:'county-yang-yilan-ebk-portrait-20261112',credit:'选举黄页候选人资料页',note:'资料库以姓名、宜兰县长及5号标示此肖像；原始照片出处、拍摄时间与摄影者暂未确认，尚待官方公报核对。'};
 delete yangPortrait.photoCoverage;
 d.sources['chiayi-wang-yicheng-policies-20261027']={title:'王义成抽签及手写政见报道',url:'https://tw.news.yahoo.com/%E5%98%89%E7%BE%A9%E5%B8%82%E9%95%B7%E9%81%B8%E8%88%89%E5%86%92%E5%87%BA%E7%A5%9E%E7%A5%95%E4%BA%BA%E7%89%A9-%E7%8D%A8%E8%87%AA%E7%8F%BE%E8%BA%AB%E6%8A%BD%E7%B1%A4-%E7%AB%9F%E6%8A%BD%E4%B8%AD%E7%B1%A4%E7%8E%8B1%E8%99%9F-062117282.html',date:'2026-10-27',checkedAt:'2026-11-12',publisherId:'other',publisherName:'Yahoo奇摩新闻转载；原发媒体及倾向待核定',kind:'具名记者报道；公开索引转载的正文',note:'报道署名廖素慧，称候选人提交手写政见；本次读取公开搜索索引中的报道正文，未取得选举公报原件及原发媒体信息。'};
 const wangChiayiPolicy=d.people.find(p=>p.city==='chiayi-city'&&p.name==='王義成');if(!wangChiayiPolicy)throw new Error('Missing candidate: 王義成');
 wangChiayiPolicy.policies=wangChiayiPolicy.policies||[];
 for(const [topic,text] of [['economy','提出协助青年创业并设置特色夜市。'],['health','提出全龄友善照护及智慧居家网络。'],['childcare','提出在全市增设安全的幼儿游乐场所。']])if(!wangChiayiPolicy.policies.some(x=>x.text===text))wangChiayiPolicy.policies.push({topic,text,type:'本届政见（媒体报道转述）',basis:'campaign',electionYear:2026,date:'2026-10-27（报道日）',sources:['chiayi-wang-yicheng-policies-20261027'],note:'报道将其列为候选人提交的手写政见；本次未取得公报原件，地点、资格、经费与实施时程暂未确认。'});
 wangChiayiPolicy.policyCoverage={checkedAt:'2026-11-12',note:'已查登记报道与10月27日抽签报道，后者转述其手写政见，已按议题列出。选举公报原件、完整政见、具体执行条件以及个人社群和后续政见会内容暂未确认。',sources:['county-wang-yicheng-registration-20260903','chiayi-wang-yicheng-policies-20261027']};
 d.sources['county-liu-yilan-career-cec-2022']={title:'2022年员山乡长选举公报：刘灿辉自列经历',url:'https://eebulletin.cec.gov.tw/111/15%E5%AE%9C%E8%98%AD%E7%B8%A3/03%E9%84%89%E9%8E%AE%E5%B8%82%E9%95%B7/%E5%93%A1%E5%B1%B1%E9%84%89%E9%84%89%E9%95%B7%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1/%E5%93%A1%E5%B1%B1%E9%84%89%E9%81%B8%E8%88%89%E5%85%AC%E5%A0%B1.pdf',date:'2022年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'宜兰县选举委员会',kind:'选举公报刊载候选人自填履历',note:'个人经历由候选人自填，不含各职务起止年月；不能推断现在仍任职。'};
 const liuCareer=d.people.find(p=>p.city==='yilan'&&p.name==='劉燦輝');if(!liuCareer?.countyBrief)throw new Error('Missing candidate: 劉燦輝');
 liuCareer.countyBrief.work='2022年员山乡长选举公报自列务农、工人、铁工，及员山乡普照寺监察员、员山社区发展协会理事、健康乐活创意发展协会理事、宜兰县星相学会理事长；2014年公报还列养蜂及员山乡公所、国立宜兰大学、新亚建设公司。各单位的具体工作职务、各项经历起止年月及现况暂未确认。';
 liuCareer.countyBrief.extraBioSources=[...new Set([...(liuCareer.countyBrief.extraBioSources||[]),'county-liu-yilan-career-cec-2022'])];
 d.sources['county-chen-changhua-education-cna-20260904']={title:'中央社：2026年彰化县长候选人陈重嘉学历',url:'https://www.cna.com.tw/news/aipl/202609045002.aspx',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体候选人资料汇编',note:'中央社列海斯堡州立大学通识学士、大叶大学电机工程学系硕士；未取得学位证书。'};
 const chenEducation=d.people.find(p=>p.city==='changhua'&&p.name==='陳重嘉');if(!chenEducation?.countyBrief)throw new Error('Missing candidate: 陳重嘉');
 chenEducation.countyBrief.education='中央社候选人资料列美国海斯堡州立大学通识学士、大叶大学电机工程学系硕士。彰化县议会简介另列瑞士莱辛美国学校、美国沃斯特综合理工学院资工系及美国东北大学财经系；后面三项的就读或毕业情况及各阶段年月暂未确认。';
 chenEducation.countyBrief.extraBioSources=[...new Set([...(chenEducation.countyBrief.extraBioSources||[]),'county-chen-changhua-education-cna-20260904'])];
 d.sources['county-zhu-hsinchu-career-cna-20260904']={title:'中央社：2026年新竹县长候选人朱定瑀经历',url:'https://www.cna.com.tw/news/aipl/202609045002.aspx',date:'2026-09-04',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体汇编候选人登记资料',note:'资料列航欣科技管理代表及生物多样性研究所相关社区生态导览经历，未说明任职形式、起止时间或现况。'};
 const zhuCareer=d.people.find(p=>p.city==='hsinchu-county'&&p.name==='朱定瑀');if(!zhuCareer?.countyBrief)throw new Error('Missing candidate: 朱定瑀');
 zhuCareer.countyBrief.work='中央社候选人资料列航欣科技管理代表，以及农业部生物多样性研究所（原特有生物研究保育中心）社区生态导览员经历。导览员与该机构的具体关系、两项经历起止年月及现况暂未确认。';
 zhuCareer.countyBrief.extraBioSources=[...new Set([...(zhuCareer.countyBrief.extraBioSources||[]),'county-zhu-hsinchu-career-cna-20260904'])];
 d.sources['county-hsu-penghu-cross-strait-20181126']={title:'澎湖日报：许智富谈协助县长推动两岸观光',url:'https://penghudaily.blogspot.com/2018/11/blog-post_889.html',date:'2018-11-26',checkedAt:'2026-11-12',publisherId:'other',publisherName:'澎湖日报（地方媒体；倾向待核定）',kind:'记者报道及候任副县长受访'};
 d.sources['county-hsu-penghu-religious-sailing-20190121']={title:'独家日报：许智富洽谈宗教直航用船',url:'https://www.scooptwnews.com/lifestyle/11059/',date:'2019-01-21',checkedAt:'2026-11-12',publisherId:'other',publisherName:'独家日报（倾向待核定）',kind:'媒体报道地方政府洽谈事项'};
 const hsuCrossStrait=d.people.find(p=>p.city==='penghu'&&p.name==='許智富');if(!hsuCrossStrait)throw new Error('Missing candidate: 許智富');
 if(!hsuCrossStrait.evidence.some(x=>x.source==='county-hsu-penghu-cross-strait-20181126'))hsuCrossStrait.evidence.push({region:'cn',date:'2018-11-26',topic:'候任副县长谈两岸观光',text:'获提名出任澎湖副县长后，许智富表示将协助县长当选人赖峰伟加强两岸相关工作，开拓客源、振兴观光。',limit:'这是2018年对当时县府观光方向的表态，不等于本届提出同一方案，也不能推定其对全部两岸议题的立场。',source:'county-hsu-penghu-cross-strait-20181126'});
 if(!hsuCrossStrait.evidence.some(x=>x.source==='county-hsu-penghu-religious-sailing-20190121'))hsuCrossStrait.evidence.push({region:'cn',date:'2019-01-21（报道日）',topic:'洽谈两岸宗教直航用船',text:'据独家日报报道，时任澎湖副县长许智富与航运业者洽谈可能租用新客轮，作为澎湖与大陆宗教直航的交通船。',limit:'报道记载的是洽谈，未证明该船最终获租用；具体洽谈日期及后续结果暂未确认。',source:'county-hsu-penghu-religious-sailing-20190121'});
 d.sources['county-chang-huomu-profile-20221022']={title:'金门日报人物专访：张火木与金门文史',url:'https://www.kmdn.gov.tw/1117/1271/4189/548268/',date:'2022-10-22',checkedAt:'2026-11-12',publisherId:'other',publisherName:'金门日报（金门县政府主管地方报纸）',kind:'具名记者人物专访，部分引述受访者生命记录',note:'采访列其教育部及实践大学相关经历，采访当时的职务不自动视为2026年现职。'};
 const changHuomuCareer=d.people.find(p=>p.city==='kinmen'&&p.name==='張火木');if(!changHuomuCareer?.countyBrief)throw new Error('Missing candidate: 張火木');
 changHuomuCareer.countyBrief.work='金门日报2022年人物专访列其曾任教育部专任秘书、实践专校讲师、实践大学课外活动组组长及博雅学部专任副教授；报道称他从实践大学退休后专职写作，并于采访时任金门县文史工作协会第六届理事长，著作涉及金门村史、战史及小三通。各项职务起止年月及现况暂未确认。';
 changHuomuCareer.countyBrief.extraBioSources=[...new Set([...(changHuomuCareer.countyBrief.extraBioSources||[]),'county-chang-huomu-profile-20221022'])];
 d.sources['county-huang-chiayi-exercise-20221211']={title:'东森新闻：2022年嘉义市长政见会上的运动主张',url:'https://news.ebc.net.tw/news/politics/347838',date:'2022-12-11',checkedAt:'2026-11-12',publisherId:'other',publisherName:'东森新闻（东森电视；倾向待核定）',kind:'政见会新闻报道及候选人原声',note:'报道引述2022年12月10日嘉义市长重行选举政见会发言；未列具体财政或执行方案。'};
 const huangExercise=d.people.find(p=>p.city==='chiayi-city'&&p.name==='黃宏成台灣阿成世界偉人財神總統');if(!huangExercise)throw new Error('Missing candidate: 黃宏成台灣阿成世界偉人財神總統');
 huangExercise.policies=huangExercise.policies||[];
 if(!huangExercise.policies.some(x=>x.sources?.includes('county-huang-chiayi-exercise-20221211')))huangExercise.policies.push({topic:'health',text:'2022年嘉义市长重行选举政见会上，黄宏成提出增加健身场所、将嘉义打造为「有氧首都」的方向，并在现场示范瑜伽。',type:'往届施政观点（2022年政见会）',basis:'campaign',electionYear:2022,date:'2022-12-10',sources:['county-huang-chiayi-exercise-20221211'],note:'这是2022年发言；场馆设置方式、经费以及2026年是否沿用暂未确认。报道并未因此证明他提出免费健身房或长者健保补助。'});
 d.sources['kaohsiung-wang-forum-ftv-20261105']={title:'民视：王肇民自办政见说明会',url:'https://www.ftvnews.com.tw/news/detail/2026B05U03M1',date:'2026-11-05',checkedAt:'2026-11-12',publisherId:'ftv',publisherName:'民视新闻',kind:'记者现场报道及候选人受访',note:'报道记载候选人自办说明会和参选动机，未逐项列出市政措施；个人社群及完整演讲尚未逐项查核。'};
 const wangKaohsiung=d.people.find(p=>p.city==='kaohsiung'&&p.name==='王肇民');if(!wangKaohsiung?.story)throw new Error('Missing candidate: 王肇民');
 if(!wangKaohsiung.story.paragraphs.some(x=>x.sources?.includes('kaohsiung-wang-forum-ftv-20261105')))wangKaohsiung.story.paragraphs.push({text:'民视11月5日报道，王肇民租场地举办政见说明会。他说参选的重点是让政见被听见；报道记录了活动现场和他的参选动机，没有逐项写出市政措施。',sources:['kaohsiung-wang-forum-ftv-20261105']});
 wangKaohsiung.policyCoverage={checkedAt:'2026-11-12',note:'已查中央社登记人物资料、高雄市选委会登记资料及11月5日民视活动报道。报道确认候选人自办政见说明会，但未逐项刊出市政措施；本次检索暂未确认可以直接归属于他的具体政策内容。个人社群、完整说明会演讲、11月14日预定的公办政见会及后续选举公报尚未逐一核查；不能据此断言他没有提出政见。',sources:['policy-wang-cna-profile-round75','policy-wang-khec-page-round75','kaohsiung-wang-forum-ftv-20261105']};
 d.sources['county-foreign-review-yilan-20261112']={title:'宜兰县长候选人及公开资料',url:'https://taiwanpoliticalzoo.com/other-cities/yilan/',date:'资料页面（日期未列）',checkedAt:'2026-11-12',publisherId:'other',publisherName:'台湾选举懒人包（倾向待核定）',kind:'候选人资料索引；未收录不等于未曾表态'};
 d.sources['county-foreign-review-keelung-20261112']={title:'基隆候选人魏造文受访',url:'https://www.ftvnews.com.tw/news/detail/2026B11W0525',date:'2026-11-11',checkedAt:'2026-11-12',publisherId:'ftv',publisherName:'民视新闻',kind:'媒体采访；包含其关于改名的说明'};
 for(const [city,name,refs] of [['keelung','魏造文',['county-wei-keelung-issues-20261027','county-foreign-review-keelung-20261112']],['yilan','陳宏毅',['county-chen-yilan-engineer-20260901','county-foreign-review-yilan-20261112']],['yilan','劉燦輝',['county-foreign-review-yilan-20261112','county-bio']]]){
  const p=d.people.find(x=>x.city===city&&x.name===name);if(!p)throw new Error('Missing candidate: '+name);p.evidenceCoverage=p.evidenceCoverage||{};
  for(const [region,label] of [['cn','中国大陆／两岸'],['us','美国'],['jp','日本']])if(!p.evidence.some(x=>x.region===region)&&!p.evidenceCoverage[region])p.evidenceCoverage[region]={checkedAt:'2026-11-12',scope:'本次以候选人姓名、县市及「'+label+'」相关词检索公开网页，并查看所列候选人报道或资料索引；未找到可明确归属于本人的相关观点。',note:'未逐一核查个人社群、所有视频及后续选举公报；同名结果不自动视为本人，不能据此推定立场。',sources:refs};
 }
}
if(typeof module!=='undefined')module.exports={apply};else apply(root.ATLAS);
})(typeof window==='undefined'?globalThis:window);
