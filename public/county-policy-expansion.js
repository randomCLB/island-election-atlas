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
 d.sources['county-chang-ivod-20251203']={title:'2025年12月3日外交及国防委员会质询视频',url:'https://ivod.ly.gov.tw/Play/Clip/1M/166128',date:'2025-12-03',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'立法院议事转播',kind:'官方质询视频'};
 d.sources['county-chang-acta-20251203']={title:'张啓楷质询纪录及发言整理',url:'https://acta.tw/evidence/ev_ivod_166128_c23a0b42893a',date:'2025-12-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'Acta（葛如钧委员办公室制作）',kind:'基于立法院视频与开放数据的发言整理；可对照官方视频'};
 const changCy=d.people.find(p=>p.city==='chiayi-city'&&p.name==='張啓楷');if(!changCy)throw new Error('Missing candidate: 張啓楷');
 const changRecords=[['us','对美国核能采购的质询','张啓楷在立法院质询时要求推进与美国的核能采购，认为可兼顾能源需求和对美贸易问题。'],['jp','关注中日关系对台湾的影响','张啓楷在立法院询问外交部长，中日关系紧张若进一步恶化对台湾有何影响，并要求安全部门持续评估。']];
 for(const [region,topic,text] of changRecords)if(!changCy.evidence.some(x=>x.region===region&&x.source==='county-chang-ivod-20251203'))changCy.evidence.push({region,date:'2025-12-03',topic,text,limit:'根据民间逐字整理并附立法院官方视频；这是一次国会质询，不等于相关采购或外交政策已经落实。',source:'county-chang-ivod-20251203',sources:['county-chang-ivod-20251203','county-chang-acta-20251203']});
 d.sources['county-tsao-japan-20070103']={title:'曹尔元陪同日本节目团队拍摄马祖',url:'https://www.matsu.idv.tw/print.php?f=19&p=1&t=38724',date:'2007-01-03',checkedAt:'2026-11-12',publisherId:'other',publisherName:'马祖日报，马祖资讯网转载（媒体倾向待核定）',kind:'地方媒体转载的旅游交流报道'};
 const tsao=d.people.find(p=>p.city==='lienchiang'&&p.name==='曹爾元');if(!tsao)throw new Error('Missing candidate: 曹爾元');
 if(!tsao.evidence.some(x=>x.source==='county-tsao-japan-20070103'))tsao.evidence.push({region:'jp',date:'2007-01-03',topic:'盼与日本节目团队合作推广马祖',text:'时任连江县观光局长曹尔元陪同电视节目团队拜会县长，并希望合作拍摄介绍马祖的旅游节目，面向日本观众推广。',limit:'地方新闻转载的当时发言；具体合作成果及节目播出情况未核实。',source:'county-tsao-japan-20070103'});
 d.sources['county-penghu-cross-strait-20261019']={title:'澎湖县长候选人讨论小三通与观光客源',url:'https://www.cna.com.tw/news/aloc/202610190213.aspx',date:'2026-10-19',checkedAt:'2026-11-12',publisherId:'cna',publisherName:'中央社',kind:'媒体报道并分别转述候选人及竞选团队的说法'};
 const phViews=[['陳振中','陈振中表示将厘清恢复小三通的环节，并争取包括大陆在内的多地观光客源。','这是就旅游与客源提出的说法，不表示恢复小三通已获批准。'],['吳淑瑾','吴淑瑾竞选团队主张两岸双向平等开放，并指出过度依赖单一旅游市场存在风险。','报道引述的是竞选团队声明，团队的政治判断应归于团队。']];
 for(const [name,text,limit] of phViews){const person=d.people.find(p=>p.city==='penghu'&&p.name===name);if(!person)throw new Error('Missing candidate: '+name);if(!person.evidence.some(x=>x.source==='county-penghu-cross-strait-20261019'))person.evidence.push({region:'cn',date:'2026-10-19',topic:'小三通与旅游市场',text,limit,source:'county-penghu-cross-strait-20261019'});}
 d.sources['county-hsu-penghu-japan-2019']={title:'许智富自述赴日本参加海湾年会经历',url:'https://alumni.nptu.edu.tw/var/file/95/1095/img/1938/184481359.pdf',date:'2019年（活动年份）',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'国立屏东大学校友资料，许智富自述',kind:'大学校友刊物刊载当事人回忆'};
 const hsuPh=d.people.find(p=>p.city==='penghu'&&p.name==='許智富');if(!hsuPh)throw new Error('Missing candidate: 許智富');
 if(!hsuPh.evidence.some(x=>x.source==='county-hsu-penghu-japan-2019'))hsuPh.evidence.push({region:'jp',date:'2019年（活动年份）',topic:'赴日本分享海洋保育经验',text:'许智富在母校校友资料中回忆，担任澎湖副县长期间赴日本参加世界最美丽海湾国际年会，分享澎湖净滩与海洋永续经验。',limit:'当事人回忆只用于记录交流经历，具体会议日期与后续成果待核。',source:'county-hsu-penghu-japan-2019'});
 d.sources['county-wu-pj-career-cec2018']={title:'2018年朴子市民代表选举公报',url:'https://eebulletin.cec.gov.tw/107/13%E5%98%89%E7%BE%A9%E7%B8%A3/04%E9%84%89%E9%8E%AE%E5%B8%82%E6%B0%91%E4%BB%A3%E8%A1%A8/%E6%9C%B4%E5%AD%90%E5%B8%82%E5%B8%82%E6%B0%91%E4%BB%A3%E8%A1%A8%E7%AC%AC3%E9%81%B8%E8%88%89%E5%8D%80.pdf',date:'2018年选举公报',checkedAt:'2026-11-12',publisherId:'official-tw',publisherName:'中央选举委员会',kind:'候选人选举公报所列经历，任职起止年月未载'};
 const wuPj=d.people.find(p=>p.city==='chiayi-county'&&p.name==='吳品叡');
 if(!wuPj?.countyBrief)throw new Error('Missing candidate: 吳品叡');
 wuPj.countyBrief.work='曾任台灣嘉農國際生物科技企劃部副總經理，及漢唐補習班、漢特美語副班主任';wuPj.countyBrief.extraBioSource='county-wu-pj-career-cec2018';
 d.sources['county-chiu-career-2026']={title:'邱建富个人介绍与经历',url:'https://chiuchienfu.tw/about/',date:'2026年（具体发布日期未列）',checkedAt:'2026-11-12',publisherId:'candidate-site',publisherName:'邱建富竞选团队',kind:'候选人团队自述经历'};
 const chiu=d.people.find(p=>p.city==='changhua'&&p.name==='邱建富');
 if(!chiu?.countyBrief)throw new Error('Missing candidate: 邱建富');
 chiu.countyBrief.office='2002至2010年任彰化縣議員；2010至2018年任彰化市長；2026年6月退黨並以無黨籍參選縣長';chiu.countyBrief.extraBioSource='county-chiu-career-2026';
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
 const foreign=[
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
 const additional=[
  {city:'taitung',name:'王志偉',source:'county-wang-taitung-20260912',title:'台东县长候选人王志伟提出教育及农业政见',url:'https://www.cna.com.tw/news/aloc/202609120079.aspx',date:'2026-09-12',publisherId:'cna',publisherName:'中央社',items:[['education','王志伟提出由县府注资5000万元成立劝学基金，并设置依成绩进步与升学表现发放的奖学金。'],['economy','王志伟提出订定农渔产品等级、对顶级品保价收购，并规划运用无人机施肥及防治。']]},
  {city:'penghu',name:'陳盡川',source:'county-chen-penghu-20260104',title:'陈尽川公布海洋、土地、道路与观光愿景',url:'https://penghudaily.blogspot.com/2026/01/blog-post_476.html',date:'2026-01-04',publisherId:'other',publisherName:'澎湖日报（倾向待核定）',items:[['water','陈尽川提出复育渔业资源与保护海洋生态，并推动银合欢资源化。'],['transport','陈尽川提出全面检查县道和产业道路，改善路面品质。'],['accountability','陈尽川提出邀请各界参与县政规划，并称将捐出县长薪资及津贴支持该委员会。']]},
  {city:'hualien',name:'羅佩秦',source:'county-luo-hualien-20260718',title:'罗佩秦说明光复乡灾民求偿与防灾专业主张',url:'https://www.cnma.org.tw/page/news/show.aspx?kind=8&lang=TW&num=52735',date:'2026-07-18',publisherId:'other',publisherName:'CNMA新闻联合网（倾向待核定）',items:[['accountability','罗佩秦表示将与法律人士合作，协助光复乡受灾者循国家赔偿程序争取权益。'],['water','罗佩秦提出当选后邀请防灾专业人士担任县府国土及河川防制顾问。']]}
 ];
 for(const r of additional){
  d.sources[r.source]={title:r.title,url:r.url,date:r.date,checkedAt:'2026-11-12',publisherId:r.publisherId,publisherName:r.publisherName,kind:'媒体报道转述候选人公开主张'};
  const person=d.people.find(p=>p.city===r.city&&p.name===r.name);if(!person)throw new Error('Missing candidate: '+r.name);
  for(const [topic,text] of r.items)if(!person.policies.some(x=>x.sources?.includes(r.source)&&x.topic===topic))person.policies.push({topic,text,type:'媒体报道转述本人主张',basis:'campaign',electionYear:2026,date:r.date,sources:[r.source],note:'属于候选人提出的方案；预算、合法性及执行条件须另核。'});
  person.policyCoverage=null;
 }
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
}
if(typeof module!=='undefined')module.exports={apply};else apply(root.ATLAS);
})(typeof window==='undefined'?globalThis:window);
