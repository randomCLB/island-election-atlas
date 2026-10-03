"""Offline DOM/interaction checks. External photo delivery is NOT certified here."""
from pathlib import Path
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
import json
ROOT=Path(__file__).resolve().parents[1]

def inline_page():
    doc=BeautifulSoup((ROOT/'public/index.html').read_text(),'html.parser')
    for link in list(doc.select('link[rel="stylesheet"]')):
        href=link.get('href','')
        if '://' in href: continue
        style=doc.new_tag('style');style.string=(ROOT/'public'/href).read_text();link.replace_with(style)
    scripts=[]
    for script in list(doc.select('script[src]')):
        source=script.get('src','')
        if '://' in source: continue
        new=doc.new_tag('script');new.string=(ROOT/'public'/source).read_text();scripts.append(new);script.decompose()
    for script in scripts:doc.body.append(script)
    return str(doc)

html=inline_page()
result={'mode':'same local source inlined; all external requests aborted', 'externalPhotoNetworkVerified':False,'viewports':[],'pageErrors':[]}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for width in [1440,390,320]:
        page=browser.new_page(viewport={'width':width,'height':1000 if width>500 else 844})
        page.on('pageerror',lambda error: result['pageErrors'].append(str(error)))
        page.route('https://**/*',lambda route:route.abort())
        page.route('http://**/*',lambda route:route.abort())
        page.set_content(html,wait_until='load')
        page.wait_for_timeout(120)
        assert page.locator('.candidate-row').count()==6
        assert page.locator('.candidate-row img[data-portrait]').count()==5
        for pid in ['chiang','shen','kuo','hsiao-w','tang','lin-c']:
            page.locator(f'.candidate-row[data-person="{pid}"]').click()
            page.wait_for_selector('#dossier[open]')
            assert page.locator('.career-column').count()==2
            assert page.locator('.campaign-expression').count()<=3
            if pid=='tang':
                assert '往届 · 2022' in page.locator('.campaign-language').inner_text()
                assert '暂缺具体单位' in page.locator('.career-empty').inner_text()
                page.locator('.photo-credit [data-media-profile="tvbs"]').click()
                assert page.locator('#media-context-dialog[open]').count()==1
                assert '2011' in page.locator('#media-context-dialog').inner_text()
                page.keyboard.press('Escape')
                assert page.locator('#dossier[open]').count()==1
            if pid=='hsiao-w':
                assert '单次口译' in page.locator('.career-section').inner_text()
                assert '报道转述' in page.locator('.campaign-language').inner_text()
                assert '右侧人物' in page.locator('.photo-hero').inner_text()
            if pid=='lin-c':
                assert page.locator('.photo-hero img').count()==0
                assert '照片待核对' in page.locator('.photo-hero').inner_text()
            else:
                page.wait_for_timeout(50)
                assert page.locator('.photo-hero.photo-unavailable').count()==1
            assert not page.evaluate('document.documentElement.scrollWidth>document.documentElement.clientWidth'),(width,pid,'overflow')
            if width==1440 and pid=='chiang':
                page.screenshot(path=str(ROOT/'docs/v03-profile-offline.png'))
            page.locator('#close-dialog').click()
        page.locator('#candidate-search').fill('蒋')
        assert page.locator('.candidate-row').count()==1
        page.locator('#candidate-search').fill('')
        page.locator('[data-year="2018"]').click()
        assert '3567' in page.locator('#history-content').inner_text().replace(',','').replace('，','')
        page.locator('[data-year="2022"]').click()
        assert page.locator('#history-content .result-row').count()==12
        page.locator('.site-header .source-open').click()
        assert '发布 2026-09-04' in page.locator('[data-source-id="roster"]').inner_text()
        assert '更新 2026-09-19' in page.locator('[data-source-id="roster"]').inner_text()
        assert '联合报 → 经济日报转载' in page.locator('[data-source-id="t-order"]').inner_text()
        assert page.locator('.source-entry').count()==100
        page.keyboard.press('Escape')
        for city,count in [('new-taipei',3),('taichung',3),('tainan',4),('kaohsiung',5),('taipei',6)]:
            page.locator(f'#city-switch [data-select-city="{city}"]').click();page.wait_for_timeout(50)
            assert page.locator('.candidate-row').count()==count
        page.evaluate("location.hash='/taipei/shen'")
        page.wait_for_selector('#dossier[open]')
        assert page.locator('#dialog-title').inner_text()=='沈伯洋'
        page.keyboard.press('Escape')
        assert not page.evaluate('document.documentElement.scrollWidth>document.documentElement.clientWidth')
        if width==390: page.screenshot(path=str(ROOT/'docs/v03-mobile-offline.png'))
        result['viewports'].append({'width':width,'profiles':6,'careerTracks':2,'photoFallback':'passed','mediaDialog':'passed','slogans':'passed','history':'passed','sources':100,'deepLink':'passed','overflow':False})
        page.close()
    browser.close()
assert not result['pageErrors'],result['pageErrors']
(ROOT/'docs/v03-browser-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(json.dumps(result,ensure_ascii=False,indent=2))
Path('/mnt/data/island-election-atlas-taipei-v0.3.html').write_text(html)
