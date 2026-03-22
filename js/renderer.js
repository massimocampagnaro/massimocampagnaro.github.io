// ============================================================
// js/renderer.js — Builds dynamic DOM sections from data.js
// Re-renders when language changes.
// ============================================================
import {education, experience, hobbies, skills, projects} from './data.js';
import {getLang} from './i18n.js';

// ─── PUBLIC API ──────────────────────────────────────────────

export function initRenderer() {
    _renderAll();
    document.addEventListener('langchange', _renderAll);
}

// ─── RENDER ALL ──────────────────────────────────────────────

function _renderAll() {
    _renderTab('tab-education', education, _buildEducationItem);
    _renderTab('tab-experience', experience, _buildExperienceItem);
    _renderTab('tab-hobbies', hobbies, _buildHobbyItem);
    _renderSkills();
    _renderProjects();
}

// ─── TABS ────────────────────────────────────────────────────

function _renderTab(panelId, items, buildFn) {
    const panel = document.getElementById(panelId);
    if (!panel) return;

    const ul = document.createElement('ul');
    ul.className = 'tab-list';

    for (const item of items) {
        const li = buildFn(item);
        if (li) ul.appendChild(li);
    }

    panel.replaceChildren(ul);
}

function _buildEducationItem(item) {
    const lang = getLang();
    const li = document.createElement('li');
    li.className = 'tab-item';

    li.innerHTML = `
    ${_buildItemTitle(item.title[lang] ?? item.title.en, item.url)}
    <div class="tab-item-meta">${item.institution[lang] ?? item.institution.en} · ${item.period}</div>
    <p class="tab-item-desc">${item.description[lang] ?? item.description.en}</p>
  `;
    return li;
}

function _buildExperienceItem(item) {
    const lang = getLang();
    const title = item.title?.[lang] ?? item.title?.en;
    if (!title) return null;

    const li = document.createElement('li');
    li.className = 'tab-item';

    const company = item.institution?.[lang] ?? item.institution?.en ?? '';
    const period = typeof item.period === 'object'
        ? (item.period[lang] ?? item.period.en)
        : (item.period ?? '');

    li.innerHTML = `
    ${_buildItemTitle(title, item.url)}
    <div class="tab-item-meta">${[company, period].filter(Boolean).join(' · ')}</div>
    <p class="tab-item-desc">${item.description[lang] ?? item.description.en}</p>
  `;
    return li;
}

function _buildHobbyItem(item) {
    const lang = getLang();
    const title = item.title?.[lang] ?? item.title?.en;
    if (!title) return null;

    const li = document.createElement('li');
    li.className = 'tab-item';

    li.innerHTML = `
    ${_buildItemTitle(title, item.url)}
    <p class="tab-item-desc">${item.description[lang] ?? item.description.en}</p>
  `;
    return li;
}

/** Returns an <a> or <span> for the item's title. */
function _buildItemTitle(text, url) {
    if (url) {
        return `<a href="${url}" class="tab-item-title" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
    return `<span class="tab-item-title">${text}</span>`;
}

// ─── SKILLS ──────────────────────────────────────────────────

function _renderSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;
    const lang = getLang();

    const cards = skills.map(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card reveal';

        const iconsHtml = skill.icons.map(icon => {
            if (icon.type === 'fa') {
                return `<i class="${icon.value}" aria-hidden="true"></i>`;
            }
            return `<img src="${icon.value}" alt="${icon.alt ?? ''}" class="skill-img-icon" loading="lazy">`;
        }).join('');

        const linksHtml = skill.links.map(link =>
            `<a href="${link.href}" class="skill-link">${link.label[lang] ?? link.label.en}</a>`
        ).join('');

        card.innerHTML = `
      <div class="skill-icon" aria-hidden="true">${iconsHtml}</div>
      <h3 class="skill-name">${skill.name}</h3>
      <p class="skill-desc">${skill.description[lang] ?? skill.description.en}</p>
      <div class="skill-links">${linksHtml}</div>
    `;
        return card;
    });

    grid.replaceChildren(...cards);
    _observeReveal();
}

// ─── PROJECTS ────────────────────────────────────────────────

function _renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    const lang = getLang();

    const cards = projects.map(project => {
        const article = document.createElement('article');
        article.className = 'project-card reveal';
        article.id = project.id;
        // Visibility is managed responsively by _initPortfolio() in app.js

        const isDownload = project.link.type === 'download';
        const linkAttrs = isDownload
            ? 'download'
            : 'target="_blank" rel="noopener noreferrer"';
        const linkIcon = isDownload
            ? '<i class="fa-solid fa-download"></i>'
            : '<i class="fa-solid fa-arrow-up-right-from-square"></i>';

        const title = project.title[lang] ?? project.title.en;
        const desc = project.description[lang] ?? project.description.en;

        article.innerHTML = `
      <img src="${project.image}" alt="${title}" class="project-img" loading="lazy">
      <div class="project-overlay">
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
        <a href="${project.link.url}" class="project-link" ${linkAttrs} aria-label="View ${project.title.en}">
          ${linkIcon}
        </a>
      </div>
    `;
        return article;
    });

    grid.replaceChildren(...cards);
    // Notify _initPortfolio() that cards have been re-rendered (e.g. on lang change)
    grid.dispatchEvent(new CustomEvent('projectsrendered'));

    _observeReveal();
}

// ─── INTERSECTION OBSERVER for scroll-reveal ─────────────────

let _revealObserver = null;

export function _observeReveal() {
    _revealObserver?.disconnect();

    _revealObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                _revealObserver.unobserve(entry.target);
            }
        }
    }, {threshold: 0.1});

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        _revealObserver.observe(el);
    });
}
