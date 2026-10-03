from pathlib import Path
from playwright.sync_api import sync_playwright
import subprocess,time,json
root=Path(__file__).resolve().parents[1]
p=subprocess.Popen(['node','scripts/serve.cjs'],cwd=root,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
time.sleep(.4)
result={'desktop':{},'mobile':{},'errors':[],'mode':'local assets inlined into about:blank; localhost navigation blocked by browser policy'}
import re
html=(root/'public/index.html').read_text()
html=html.replace('<link rel="stylesheet" href="styles.css">','<style>'+(root/'public/styles.css').read_text()+'</style>')
html=re.sub(r'<script defer src="[^"]+"></script>','',html)
scripts=''.join('<script>'+(root/'public'/f).read_text()+'</script>' for f in ['data.js','domain.js','map-data.js','map.js','app.js'])
html=html.replace('</body>',scripts+'</body>')
(root/'preview.html').write_text(html)

try:
 with sync_playwright() as pw:
  browser=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
  page=browser.new_page(viewport={'width':1440,'height':1000},device_scale_factor=1)
  page.on('pageerror',lambda err:result['errors'].append(str(err)))
  page.set_content(html,wait_until='load')
  page.screenshot(path=str(root/'docs/desktop.png'),full_page=True)
  result['desktop']['candidates']=page.locator('.candidate-row').count()
  assert result['desktop']['candidates']==6
  page.locator('#island-map .map-label[data-city="tainan"] text:not(.english)').click()
  page.wait_for_timeout(120)
  assert page.locator('.candidate-row').count()==4
  page.locator('#city-switch [data-select-city="taipei"]').click()
  page.wait_for_timeout(80)
  page.locator('[data-person="chiang"]').click()
  page.wait_for_selector('#dossier[open]')
  assert '蔣萬安' in page.locator('#dialog-title').inner_text()
  page.locator('[data-region="jp"]').click()
  assert '2024-05-27' in page.locator('#evidence-content').inner_text()
  page.screenshot(path=str(root/'docs/profile.png'),full_page=False)
  page.keyboard.press('Escape')
  assert page.locator('#dossier[open]').count()==0
  page.locator('#candidate-search').fill('蒋')
  assert page.locator('.candidate-row').count()==1
  page.locator('[data-tab="polls"]').click()
  assert '2022' in page.locator('#panel-content').inner_text()
  page.locator('[data-year="2010"]').click()
  assert '797,865' in page.locator('#history-content').inner_text()
  page.locator('[data-year="2018"]').click()
  assert '等待证据补齐' in page.locator('#history-content').inner_text()
  page.locator('.site-header .source-open').click()
  assert page.locator('#sources-dialog[open]').count()==1
  page.keyboard.press('Escape')
  # Simulate network failure for the optional map, preserving offline map.
  page.route('https://unpkg.com/**',lambda route:route.abort())
  page.locator('#terrain-mode').click()
  page.wait_for_function("document.querySelector('#map-status').textContent.includes('不可用')")
  assert page.locator('#island-map').is_visible()
  result['desktop']['offlineTerrainFallback']='passed'
  result['desktop']['overflow']=page.evaluate('document.documentElement.scrollWidth > innerWidth')
  assert not result['desktop']['overflow']
  page.evaluate("location.hash='/kaohsiung/ko'");page.wait_for_timeout(100)
  assert page.locator('#dialog-title').inner_text()=='柯志恩'
  result['desktop']['deepLink']='passed'
  page.close()
  mobile=browser.new_page(viewport={'width':390,'height':844},is_mobile=True,has_touch=True,device_scale_factor=1)
  mobile.on('pageerror',lambda err:result['errors'].append(str(err)))
  mobile.set_content(html,wait_until='load')
  mobile.screenshot(path=str(root/'docs/mobile.png'),full_page=True)
  result['mobile']['overflow']=mobile.evaluate('document.documentElement.scrollWidth > innerWidth')
  assert not result['mobile']['overflow']
  mobile.locator('#city-switch [data-select-city="kaohsiung"]').click()
  mobile.wait_for_timeout(100)
  assert mobile.locator('.candidate-row').count()==5
  mobile.locator('[data-person="ko"]').click()
  mobile.wait_for_selector('#dossier[open]')
  assert mobile.locator('#dossier[open]').count()==1
  mobile.locator('#close-dialog').click()
  assert mobile.locator('#dossier[open]').count()==0
  result['mobile']['cityAndDossier']='passed'
  browser.close()
finally:
 p.terminate();p.wait(timeout=3)
(root/'docs/browser-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(json.dumps(result,ensure_ascii=False,indent=2))
assert not result['errors']
