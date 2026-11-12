(function(root){
'use strict';
const portraits = {
  "鄭朝方": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/69.jpg",
  "徐欣瑩": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/68.jpg",
  "朱定瑀": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/81.jpg",
  "陳品安": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/35.jpg",
  "鍾東錦": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/34.jpg",
  "陳素月": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/64.jpg",
  "魏平政": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/65.jpg",
  "邱建富": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/66.jpg",
  "陳重嘉": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/67.jpg",
  "許淑華": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/22.jpg",
  "温世政": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/23.jpg",
  "吳炳輝": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/60.jpg",
  "張嘉郡": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/59.jpg",
  "劉建國": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/58.jpg",
  "林佳瑜": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/61.jpg",
  "吳品叡": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/31.jpg",
  "蔡易餘": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/30.jpg",
  "蘇清泉": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/29.jpg",
  "周春米": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/28.jpg",
  "林國漳": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/20.jpg",
  "陳宏毅": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/73.jpg",
  "吳宗憲": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/21.jpg",
  "劉燦輝": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/74.jpg",
  "魏嘉賢": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/55.jpg",
  "張峻": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/56.jpg",
  "游淑貞": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/54.jpg",
  "羅佩秦": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/57.jpg",
  "李吳穎智": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/39.jpg",
  "陳瑩": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/36.jpg",
  "王志偉": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/40.jpg",
  "吳秀華": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/37.jpg",
  "郭璽": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/4.jpg",
  "林志成": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/80.jpg",
  "沈伯洋": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/1.jpg",
  "蕭文乾": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/78.jpg",
  "蔣萬安": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/3.jpg",
  "唐新民": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/79.jpg",
  "許智富": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/7.jpg",
  "周倪安": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/6.jpg",
  "葉竹林": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/8.jpg",
  "吳淑瑾": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/5.jpg",
  "陳振中": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/9.jpg",
  "陳盡川": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/10.jpg",
  "童子瑋": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/25.jpg",
  "謝國樑": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/24.jpg",
  "高虹安": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/18.jpg",
  "何志勇": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/19.jpg",
  "莊競程": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/17.jpg",
  "王義成": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/38.jpg",
  "陳愷璜": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/14.jpg",
  "張啓楷": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/12.jpg",
  "王美惠": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/11.jpg",
  "黃宏成台灣阿成世界偉人財神總統": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/13.jpg",
  "張國威": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/51.jpg",
  "李文良": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/48.jpg",
  "洪和成": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/47.jpg",
  "張火木": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/53.jpg",
  "陳玉珍": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/50.jpg",
  "梁文韜": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/52.jpg",
  "黃世團": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/49.jpg",
  "王忠銘": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/62.jpg",
  "曹爾元": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/63.jpg",
  "蘇巧慧": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/15.jpg",
  "蘇輝湟": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/46.jpg",
  "李四川": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/16.jpg",
  "黃世杰": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/33.jpg",
  "張善政": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/32.jpg",
  "何欣純": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/70.jpg",
  "洪麗華": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/72.jpg",
  "江啟臣": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/71.jpg",
  "蕭燐洪": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/77.jpg",
  "謝龍介": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/27.jpg",
  "陳亭妃": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/26.jpg",
  "葉人文": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/76.jpg",
  "張靜": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/43.jpg",
  "王肇民": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/45.jpg",
  "柯志恩": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/42.jpg",
  "洪方隆": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/44.jpg",
  "賴瑞隆": "https://img.ltn.com.tw/Upload/elect/2026/candidate/1/41.jpg"
};
function apply(d){
 d.sources["county-ltn-photos"]={title:"2026县市长候选人照片及档案",url:"https://election.ltn.com.tw/2026/candidate",date:null,checkedAt:"2026-11-12",publisherId:"ltn",kind:"自由时报候选人名录，照片由该媒体网站提供，拍摄日期与原始摄影者未列"};
 d.sources["county-kao-japan-20260316"]={title:"新竹市政府赴日本市政考察",url:"https://www.cna.com.tw/postwrite/chi/428126",date:"2026-03-16",checkedAt:"2026-11-12",publisherId:"official-tw",publisherName:"新竹市政府（中央社讯息平台承载）",kind:"市政府发布的访问计划与本人发言"};
 d.sources["county-chang-japan-2025"]={title:"桃园市长访问香川县政府",url:"https://www.tycg.gov.tw/NewsPage_Content.aspx?n=10&s=1565780",date:"2025年（具体日期待核）",checkedAt:"2026-11-12",publisherId:"official-tw",publisherName:"桃园市政府",kind:"市政府发布的城市交流记录"};
 d.sources["county-miaoli-nagano-20260508"]={title:"苗栗县政府与议会访问日本长野县",url:"https://www.miaoli.gov.tw/News_Content2.aspx?n=285&s=954726",date:"2026-05-08",checkedAt:"2026-11-12",publisherId:"official-tw",publisherName:"苗栗县政府",kind:"县政府发布的交流纪要"};
 for(const p of d.people){if(!p.photo && portraits[p.name])p.photo={url:portraits[p.name],source:"county-ltn-photos",credit:"自由时报候选人名录",note:"媒体候选人名录刊载的照片；拍摄日期与摄影者暂未确认。"};}
 const hsinchu=d.people.find(p=>p.id==='hsinchu-city-1');
 hsinchu.evidence.push({region:'jp',date:'2026-03-16',topic:'赴日本考察城市治理',text:'高虹安率新竹市府与市议会团队赴日考察，市府介绍行程包括拜会地方政府、科技研发机构及文化设施，讨论产业创新和城市治理。',limit:'此为出发时公布的访问计划；各项合作的实际执行成果仍待核。',source:'county-kao-japan-20260316'});
 const taoyuan=d.people.find(p=>p.id==='taoyuan-2');
 taoyuan.evidence.push({region:'jp',date:'2025年（具体日期待核）',topic:'访问香川县讨论城市交流',text:'张善政率桃园市府团队拜会香川县知事及县议会议长，谈及体育、教育、音乐与未来文化交流。',limit:'市政府提供的访问纪要；未据此推断其对日本全部政策的立场。',source:'county-chang-japan-2025'});
 const miaoli=d.people.find(p=>p.city==='miaoli' && p.name==='鍾東錦');
 miaoli.evidence.push({region:'jp',date:'2026-05-08',topic:'与日本长野县交流观光与地方治理',text:'苗栗县政府表示，钟东锦率县府与议会团队拜会长野县知事，讨论观光、文化与地方治理，并邀请长野参加2027年台湾灯会。',limit:'县府的活动说明；邀请及讨论不等于已达成具体合作成果。',source:'county-miaoli-nagano-20260508'});
}
if(typeof module!=="undefined")module.exports={apply};else apply(root.ATLAS);
})(typeof window==="undefined"?globalThis:window);
