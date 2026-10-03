"""Run an offline, same-source Chromium interaction check. No live terrain assertion."""
from pathlib import Path
import json,re
from playwright.sync_api import sync_playwright
r=Path(__file__).resolve().parents[1]
h=(r/'public/index.html').read_text()
h=re.sub(r'<link rel="stylesheet" href="([^"]+)">',lambda m:'<style>'+(r/'public'/m[1]).read_text()+'</style>',h)
scripts=re.findall(r'<script defer src="([^"]+)"></script>',h)
h=re.sub(r'<script defer src="[^"]+"></script>','',h)
h=h.replace('</body>',''.join('<script>'+(r/'public'/f).read_text()+'</script>' for f in scripts)+'</body>')
(r/'taipei-preview.html').write_text(h)
errors=[];results={'mode':'local source inlined into about:blank; no terrain network claim','viewports':{},'errors':errors}
with sync_playwright() as pw:
 print('launching',flush=True)
 browser=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for name,w,height in [('desktop',1440,1000),('mobile',390,844)]:
  p=browser.new_page(viewport={'width':w,'height':height},is_mobile=name=='mobile',has_touch=name=='mobile',reduced_motion='reduce')
  p.on('pageerror',lambda e:errors.append(str(e)))
  print(name, 'set_content', flush=True)
  p.set_default_timeout(5000)
  p.set_content(h,wait_until='domcontentloaded',timeout=10000)
  print(name, 'loaded', flush=True)
  assert p.locator('#taipei-story').is_visible()
  assert p.locator('.candidate-row').count()==6
  assert p.locator('.research-issues details').count()==5
  assert p.locator('#timeline [data-year="1998"]').count()==1
  p.locator('#city-switch [data-select-city="tainan"]').click();p.wait_for_timeout(70)
  assert p.locator('#taipei-story').is_hidden()
  assert p.locator('.candidate-row').count()==4
  p.locator('#city-switch [data-select-city="taipei"]').click();p.wait_for_timeout(70)
  print(name,'person',flush=True)
  p.locator('[data-person="shen"]').click();p.wait_for_selector('#dossier[open]')
  assert '台北顺起来' in p.locator('.slogan').inner_text()
  assert '公安' in p.locator('.profile-story').inner_text()
  assert p.locator('.profile-story').count()==1
  assert p.locator('#evidence-content .evidence-card').count()==5
  p.locator('[data-region="jp"]').evaluate("el=>el.scrollIntoView({block:'center',behavior:'instant'})")
  p.wait_for_timeout(100)
  p.locator('[data-region="jp"]').click()
  assert p.locator('#evidence-content .evidence-card').count()==3
  p.locator('.life-line summary').click()
  assert p.locator('.life-line article').count()==9
  assert not p.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
  if name=='desktop':p.screenshot(path=str(r/'docs/taipei-profile.png'),full_page=False)
  p.locator('#close-dialog').click()
  print(name,'history',flush=True)
  p.locator('[data-year="2018"]').click()
  assert '3,567' in p.locator('#history-content').inner_text()
  assert '580,663' in p.locator('#history-content').inner_text()
  p.locator('[data-year="1967"]').click()
  assert '官派' in p.locator('#history-content').inner_text()
  p.locator('[data-year="2022"]').click()
  assert p.locator('#history-content .result-row').count()==12
  assert '非官方' in p.locator('#history-content').inner_text()
  p.evaluate("location.hash='/taipei/chiang'");p.wait_for_timeout(70)
  assert p.locator('.profile-story').count()==1
  assert '台北安可' in p.locator('.slogan').inner_text()
  p.locator('#close-dialog').click()
  p.locator('[data-tab="polls"]').click()
  assert '2022' in p.locator('#panel-content').inner_text()
  assert p.locator('#panel-content .result-row').count()==12
  assert not p.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
  p.locator('[data-tab="candidates"]').click()
  p.evaluate('window.scrollTo(0,document.querySelector("#taipei-story").offsetTop)');p.wait_for_timeout(120)
  p.screenshot(path=str(r/f'docs/taipei-{name}.png'),full_page=False)
  results['viewports'][name]={'allChecks':'passed','horizontalOverflow':False}
  p.close()
 browser.close()
assert not errors
(r/'docs/taipei-browser-results.json').write_text(json.dumps(results,ensure_ascii=False,indent=2))
print(json.dumps(results,ensure_ascii=False,indent=2))
