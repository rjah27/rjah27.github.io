/* Jericho Reyes — Portfolio scripts */
(function () {
  "use strict";

  const PROJECTS = window.PROJECTS || [];
  const CATEGORIES = window.CATEGORIES || {};

  /* Mobile Navigation */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* Footer */
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* helpers */
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function placeholder(p) {
    // Styled tile for projects without a screenshot
    const initials = p.title.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0]).join("");
    return `<div class="card-media" aria-hidden="true" style="display:grid;place-items:center;background:var(--navy);">
              <span style="font-family:var(--font-head);font-size:3rem;font-weight:700;color:var(--sky);letter-spacing:.04em">${esc(initials)}</span>
            </div>`;
  }

  function card(p) {
    const media = p.thumb
      ? `<div class="card-media"><img src="${esc(p.thumb)}" alt="" loading="lazy"></div>`
      : placeholder(p);
    const tags = p.tools.slice(0, 4).map((t) => `<li class="tag">${esc(t)}</li>`).join("");
    return `<article class="card" data-category="${esc(p.category)}">
              ${media}
              <div class="card-body">
                <div class="card-meta">${esc(CATEGORIES[p.category] || "")} · ${esc(p.date)}</div>
                <h3><a href="project.html?id=${encodeURIComponent(p.id)}">${esc(p.title)}</a></h3>
                <p>${esc(p.summary)}</p>
                <ul class="tags" aria-label="Tools">${tags}</ul>
              </div>
            </article>`;
  }

  /* Home: Featured */
  const featured = document.getElementById("featured-grid");
  if (featured) {
    featured.innerHTML = PROJECTS.filter((p) => p.featured).slice(0, 3).map(card).join("");
  }

  /* Work page: grid + filters */
  const workGrid = document.getElementById("work-grid");
  const filterBar = document.getElementById("filters");
  if (workGrid) {
    const render = (cat) => {
      const list = cat === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
      workGrid.innerHTML = list.length ? list.map(card).join("") : `<p class="empty-state">No projects in this category yet.</p>`;
      const status = document.getElementById("filter-status");
      if (status) status.textContent = `Showing ${list.length} project${list.length === 1 ? "" : "s"}`;
    };

    if (filterBar) {
      const used = [...new Set(PROJECTS.map((p) => p.category))];
      const buttons = [["all", "All work"], ...used.map((c) => [c, CATEGORIES[c] || c])];
      filterBar.innerHTML = buttons
        .map(([key, label]) => `<button type="button" class="filter-btn" data-filter="${key}" aria-pressed="${key === "all"}">${esc(label)}</button>`)
        .join("");
      filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;
        filterBar.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        render(btn.dataset.filter);
        history.replaceState(null, "", btn.dataset.filter === "all" ? "work.html" : `work.html?c=${btn.dataset.filter}`);
      });
    }

    const initial = new URLSearchParams(location.search).get("c");
    const start = initial && CATEGORIES[initial] ? initial : "all";
    render(start);
    if (filterBar && start !== "all") {
      filterBar.querySelectorAll("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === start)));
    }
  }

  /* Case Study */
  const cs = document.getElementById("case-study");
  if (cs) {
    const id = new URLSearchParams(location.search).get("id");
    const idx = PROJECTS.findIndex((p) => p.id === id);
    const p = PROJECTS[idx];

    if (!p) {
      cs.innerHTML = `<section class="section"><div class="container empty-state">
          <h1>Project not found</h1><p>That project doesn't exist or may have moved.</p>
          <a class="btn btn-primary" href="work.html">See all work</a></div></section>`;
      return;
    }

    document.title = `${p.title} · Jericho Reyes`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", p.summary);

    const facts = [
      ["Role", p.role],
      ["Context", p.course],
      ["Timeline", p.date],
      ["Tools", p.tools.join(", ")]
    ].map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("");

    const sections = p.sections.map((s) => `<section class="cs-section"><h2>${esc(s.heading)}</h2>${s.html}</section>`).join("");

    const gallery = p.gallery && p.gallery.length
      ? `<section class="cs-section"><h2>Screens</h2><div class="gallery">${p.gallery
          .map((g) => `<figure><a href="${esc(g.src)}" target="_blank" rel="noopener"><img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy"></a><figcaption>${esc(g.caption)}</figcaption></figure>`)
          .join("")}</div></section>`
      : "";

    const links = p.links && p.links.length
      ? `<div class="btn-row" style="margin-top:24px">${p.links.map((l) => `<a class="btn btn-primary" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>`
      : "";

    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    cs.innerHTML = `
      <header class="cs-hero">
        <div class="container">
          <a class="back-link" href="work.html">← All work</a>
          <p class="eyebrow">${esc(CATEGORIES[p.category] || "")}</p>
          <h1>${esc(p.title)}</h1>
          <p class="lead">${esc(p.subtitle)}</p>
          ${links}
          <dl class="facts">${facts}</dl>
        </div>
      </header>
      <div class="container">
        <div class="cs-body">${sections}${gallery}</div>
        <nav class="next-prev" aria-label="More projects">
          <a href="project.html?id=${encodeURIComponent(prev.id)}">← ${esc(prev.title)}</a>
          <a href="project.html?id=${encodeURIComponent(next.id)}">${esc(next.title)} →</a>
        </nav>
      </div>`;
  }
})();
