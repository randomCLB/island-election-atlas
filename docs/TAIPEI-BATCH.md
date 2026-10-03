# Taipei research batch, 2026-10-02

Content entry: `research/taipei/README.md`. This batch supersedes the Taipei coverage descriptions in the v0.1 README and earlier PR text. Other city content is unchanged.

Validated locally:

- Node: 20 tests passed; `npm run build` succeeded.
- Chromium: 1440×1000 desktop and 390×844 mobile, identical HTML/CSS/JS inlined into about:blank.
- Candidate selection and city isolation; story and source rendering; China/US/Japan tabs; expandable life chronology; historical 1967 gap; initial/recount 2018 distinction; full 2022 twelve-person table; deep links; no horizontal overflow relative to document.clientWidth.
- No pageerror in either viewport.

Test scripts: `tests/taipei.test.cjs`, `tests/taipei-browser.py`. The original eleven domain tests also remain as v0.1 regression tests; the nine new tests explicitly apply the Taipei extension before validation.

No live terrain, public hosting, independent legal review, original historical dataset audit, or complete fact-coverage claim is implied. The sources directory distinguishes primary material from media reports and secondary tables. Poll observations remain outside the static public build.
