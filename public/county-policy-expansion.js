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
  }
];
function apply(d){
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
 if(!zhu.evidence.some(x=>x.source==='county-zhu-land-20260905'))zhu.evidence.push({region:'cn',date:'2026-09-05',topic:'两岸政治与统一的个人判断',text:'据自由时报采访，朱定瑀表达对中国政治未来的预测，并认为两岸统一将由台湾一方主导。',limit:'这是受访者个人判断，并非已发生的事实，也不构成可验证的预测。',source:'county-zhu-land-20260905'});
 zhu.policyCoverage=null;
 for(const r of rows){
  const p=d.people.find(x=>x.city===r.city&&x.name===r.name);
  if(!p) throw new Error('Missing candidate: '+r.city+' '+r.name);
  const excerpt='county-policy-more-'+r.anchor, original=excerpt+'-original';
  d.sources[excerpt]={title:r.name+' · 政见对照资料库摘录',url:r.database,date:'资料库截点 '+r.cut,checkedAt:'2026-11-12',publisherId:'other',publisherName:'留白投票所',kind:'民间政见资料库摘录；截点不是发言日期'};
  d.sources[original]={title:r.name+' · 资料库所附原发链接',url:r.url,date:null,checkedAt:'2026-11-12',publisherId:r.url.includes('facebook.com')?'candidate-site':'official-tw',publisherName:r.url.includes('facebook.com')?'候选人公开页面':'县政府公开页面',kind:'原发链接由资料库列出，原文发布日期与后续执行情况待核'};
  if(!p.policies.some(x=>x.sources?.includes(excerpt)))p.policies.push({topic:r.topic,text:r.text,type:r.admin?'任内县府计划或说明':'本届公开主张（资料库摘要）',basis:r.admin?'administration':'campaign',electionYear:2026,date:'资料库截至 '+r.cut+'，原发日期待核',sources:[excerpt,original],note:r.admin?'县府计划或任内说明；实际完成时间与结果须另核。':'公开提案，预算、实施条件及后续进度须另核。'});
 }
}
if(typeof module!=='undefined')module.exports={apply};else apply(root.ATLAS);
})(typeof window==='undefined'?globalThis:window);
