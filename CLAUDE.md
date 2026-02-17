# Claude Code Context

## Project overview
Personal academic website for Rodrigo Sanchez Sienra, built with Jekyll (al-folio theme) and hosted on GitHub Pages at rodrigosanchez.net.

## Git and deployment
- **Public repo**: github.com/RodrigoMSanchez/RodrigoMSanchez.github.io
- **Deploy workflow**: GitHub Actions builds Jekyll and pushes to `gh-pages` branch. GitHub Pages serves from `gh-pages`.
- **Git auth**: Uses macOS Keychain via `git credential-osxkeychain`. Plain `git push/pull` works. The `gh` CLI token is expired — use `git` directly or the GitHub API with the keychain token.
- **Commits**: Do NOT add `Co-Authored-By` lines. The repo is public and Claude traces should not be visible.

## Key files
- `_bibliography/papers.bib` — All publications. `selected={true}` shows on homepage. `preview={file.png}` adds thumbnail. `abstract={...}` adds a Summary button.
- `_pages/publications.md` — Research page (permalink: /research/). Queries `@article` for peer-reviewed, `@unpublished` for work in progress.
- `_pages/policy_reports.md` — Policy reports page (hand-written HTML, not managed by Jekyll Scholar).
- `_layouts/bib.liquid` — Controls how each publication entry renders (preview images, buttons, author list).
- `_config.yml` — Site config. `enable_medium_zoom: true` for clickable image zoom.
- `assets/img/publication_preview/` — Where preview figures go.
- `assets/pdf/cv_sanchez.pdf` — Current CV. Source is in /Users/rodrigosanchez/Documents/MyProjects/cv_sanchez/.
- `assets/js/zoom.js` — Medium zoom config (margin: 120 for smaller enlargement).

## Website figure generation
- Code and output for generating preview figures are stored in a **separate private repo**: github.com/RodrigoMSanchez/website-figures
- Each paper gets a folder: `<bibkey>/code/` and `<bibkey>/output/`
- The generated PNGs are copied to this repo's `assets/img/publication_preview/`
- This exists because some papers' original analysis code is not locally available

## Adding a new paper preview
1. Generate a web-friendly figure (PNG, ~100-200KB) from the paper's results
2. Save code to `website-figures` repo under `<bibkey>/code/`
3. Copy PNG to `assets/img/publication_preview/<bibkey>.png`
4. In `papers.bib`, add `preview={<bibkey>.png}` and `abstract={...}` to the entry
5. Commit and push both repos

## Navigation order
About (home) | Research (2) | Policy Reports (3) | CV (4) | Contact (5)

## Style notes
- Preview column is `col-sm-2` in bib.liquid (do NOT widen — use click-to-zoom instead)
- Button text says "Summary" not "Abstract" or "Abs"
- No links on co-author names in the policy reports page
- Author list on research page: self is omitted, co-authors shown as "with X, Y, and Z"

## Related project paths
- CV source: /Users/rodrigosanchez/Documents/MyProjects/cv_sanchez/
- Paris attacks: /Users/rodrigosanchez/Documents/MyProjects/paris_attacks_final/
- Teachers survey: /Users/rodrigosanchez/Documents/MyProjects/survey_teachers/
- Peru/cash-based (Overleaf copy): /Users/rodrigosanchez/Desktop/peru_analysis/
- Website figures repo: /Users/rodrigosanchez/Documents/MyProjects/website-figures/
