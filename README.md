# Jericho Reyes — Portfolio

Live site: https://rjah27.github.io

Plain HTML/CSS/JS, hosted on GitHub Pages. No build step.

## Structure
- `index.html` — home (hero, 3 featured case studies, skills)
- `work.html` — all projects with category filters
- `project.html?id=...` — case-study template, filled in from `data/projects.js`
- `documents.html` — resume, writing samples, certificates
- `about.html` — bio, experience, education

## Add or edit a project
Open `data/projects.js`, copy an existing entry, change the `id`, and fill in the fields.
Set `featured: true` to show it on the home page (keep it to 3).
Put images in `assets/img/` and PDFs in `assets/docs/`.
Search for `TODO(Jah)` to find spots that still need your own details.

## Publish changes
```
git add .
git commit -m "Update portfolio"
git push
```
GitHub Pages redeploys in about a minute.
