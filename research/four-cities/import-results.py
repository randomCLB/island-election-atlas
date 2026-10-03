# coding: utf-8
import zipfile,csv,io,json,hashlib
from pathlib import Path
import argparse
parser=argparse.ArgumentParser()
parser.add_argument('archive',help='中选会 votedata.zip 本地路径')
parser.add_argument('destination',help='输出目录')
args=parser.parse_args()
destination=Path(args.destination);destination.mkdir(parents=True,exist_ok=True)
z=zipfile.ZipFile(args.archive)
files={}
for n in z.namelist():
 try:s=n.encode('cp437').decode('big5')
 except:s=n
 files[s]=n
roots={2010:'20101127-五都市長議員及里長/市長',2014:'2014-103年地方公職人員選舉/直轄市市長',2018:'2018-107年地方公職人員選舉/直轄市市長',2022:'2022-111年地方公職人員選舉/C1/prv'}
cities={'新北市':'new-taipei','臺中市':'taichung','臺南市':'tainan','高雄市':'kaohsiung'}
res=[]; provenance=[]
for year,root in roots.items():
 def read(f):
  key=next(s for s in files if s.endswith('/'+root+'/'+f+'.csv'));b=z.read(files[key]);provenance.append({'year':year,'file':key,'sha256':hashlib.sha256(b).hexdigest()})
  try:t=b.decode('utf-8-sig')
  except:t=b.decode('big5')
  return [[x.strip().lstrip("'") for x in r] for r in csv.reader(io.StringIO(t))]
 base,cand,tickets,parties,prof=(read(x) for x in ['elbase','elcand','elctks','elpaty','elprof'])
 codes={r[0]:cities[r[5]] for r in base if r[5] in cities and r[1:5]==['000','00','000','0000']}
 party={r[0]:r[1] for r in parties}
 for code,city in codes.items():
  candidates=[r for r in cand if r[0]==code]
  totals=[r for r in tickets if r[0]==code and r[1:5]==['000','00','000','0000'] and int(r[5])==0]
  assert len(totals)==len(candidates),(year,city,len(totals),len(candidates))
  votes={r[6]:int(r[7]) for r in totals};rows=[[r[6],{'中國國民黨':'KMT','民主進步黨':'DPP'}.get(party[r[7]],party[r[7]]),votes[r[5]]] for r in candidates]
  ps=next(r for r in prof if r[0]==code and r[1:5]==['000','00','000','0000'] and int(r[5])==0)
  valid=int(ps[6]);invalid=int(ps[7]);cast=int(ps[8]);eligible=int(ps[9]);assert sum(r[2] for r in rows)==valid;assert valid+invalid==cast
  ordered=sorted(rows,key=lambda r:-r[2]);winner,second=ordered[:2];difference=winner[2]-second[2]
  name=next(n for n,i in cities.items() if i==city)
  e={'city':city,'year':year,'date':{2010:'2010-11-27',2014:'2014-11-29',2018:'2018-11-24',2022:'2022-11-26'}[year],'complete':True,'scope':'该届现行直辖市范围；全部候选人','sources':['four-cec-bulk'],'rows':rows,'validVotes':valid,'invalidVotes':invalid,'votesCast':cast,'eligibleVoters':eligible,'turnout':round(cast/eligible*100,2),'verification':'中选会资料包：逐人票数与市级有效票合计一致，有效票加无效票与投票人数一致。','narrative':{'title':f'{year} · {winner[0]}当选，领先{difference:,}票','text':f'{name}本届有{len(rows)}名候选人。{winner[0]}获{winner[2]:,}票，第二名{second[0]}获{second[2]:,}票；差距为{difference:,}票。有效票共{valid:,}张，无效票{invalid:,}张，投票人数{cast:,}人。比例由完整票数重新计算，与原表截位百分比可能有末位差异。','sources':['four-cec-bulk']}}
  res.append(e)
(destination/'elections.json').write_text(json.dumps(res,ensure_ascii=False,indent=2))
(destination/'cec-import-provenance.json').write_text(json.dumps(provenance,ensure_ascii=False,indent=2))
print(json.dumps([{'city':e['city'],'year':e['year'],'candidates':len(e['rows']),'winner':max(e['rows'],key=lambda r:r[2])[0],'valid':e['validVotes']} for e in res],ensure_ascii=False))
