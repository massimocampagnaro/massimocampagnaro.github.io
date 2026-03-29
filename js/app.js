import {initI18n, getLang, setLang} from './i18n.js';
import {initRenderer, _observeReveal} from './renderer.js';
import {initNav} from './nav.js';
import {initForm} from './form.js';

// Modules are always deferred — DOM is ready when this runs.
_init();

function _init() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initNav();
    initI18n();
    initRenderer();
    initForm();

    // About tabs (static HTML — just needs JS toggle)
    _initTabs();

    _initPortfolio();
    _initScrollReveal();

    // Rubik cube "easter egg": clicking it toggles language
    document.querySelectorAll('.rubik').forEach(img => {
        img.addEventListener('click', () => {
            setLang(getLang() === 'en' ? 'it' : 'en');
        });
    });

    // Keep rubik image in sync when language changes
    document.addEventListener('langchange', ({detail: {lang}}) => {
        document.querySelectorAll('[data-lang-img]').forEach(img => {
            img.classList.toggle('hidden', img.dataset.langImg !== lang);
        });
    });
}

// ─── ABOUT TABS ─────────────────────────────────────────────

function _initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;

            tabBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            document.getElementById(`tab-${target}`)?.classList.add('active');
        });
    });
}

// ─── PORTFOLIO: responsive visibility + see-more/less ────────

function _initPortfolio() {
    const grid = document.getElementById('projects-grid');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const seeLessBtn = document.getElementById('see-less-btn');
    if (!grid || !seeMoreBtn || !seeLessBtn) return;

    let _expanded = false;

    /** Number of CSS grid columns currently rendered. */
    function _colCount() {
        const tpl = window.getComputedStyle(grid).gridTemplateColumns;
        if (!tpl || tpl === 'none') return 1;
        return tpl.trim().split(/\s+/).length;
    }

    /**
     * How many cards to show initially so rows are always complete.
     * Formula: largest multiple of `cols` that is ≤ min(cols*2, total).
     * Results for 4 projects: 3 cols→3, 2 cols→4, 1 col→2.
     */
    function _initialCount(cols, total) {
        if (cols >= total) return total;
        return Math.min(
            Math.floor(Math.min(cols * 2, total) / cols) * cols,
            total
        );
    }

    function _applyVisibility() {
        const cards = Array.from(grid.querySelectorAll('.project-card'));
        const total = cards.length;
        if (total === 0) return;

        const cols = _colCount();
        const initial = _initialCount(cols, total);

        // If all cards fit at this breakpoint, reset the expanded flag
        if (initial >= total) _expanded = false;

        const showAll = _expanded || initial >= total;

        cards.forEach((card, i) => {
            card.classList.toggle('hidden', !showAll && i >= initial);
        });

        seeMoreBtn.classList.toggle('hidden', showAll || initial >= total);
        seeLessBtn.classList.toggle('hidden', !_expanded || initial >= total);
    }

    function _expandAll() {
        _expanded = true;
        _applyVisibility();
        _observeReveal();
    }

    seeMoreBtn.addEventListener('click', _expandAll);

    seeLessBtn.addEventListener('click', () => {
        _expanded = false;
        _applyVisibility();
        // Scroll portfolio into view so the collapse is visible
        document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'});
    });

    // Intercept anchor links pointing to a project card that is currently hidden:
    // auto-expand the grid and scroll to the target.
    document.addEventListener('click', e => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const id = link.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (!target || !target.closest('#projects-grid')) return;
        if (!target.classList.contains('hidden')) return;
        e.preventDefault();
        _expandAll();
        setTimeout(() => target.scrollIntoView({behavior: 'smooth', block: 'start'}), 50);
    }, true); // capture phase so we intercept before native scroll

    // Re-apply when grid width changes (responsive breakpoints)
    new ResizeObserver(_applyVisibility).observe(grid);

    // Re-apply after language change re-renders the cards
    grid.addEventListener('projectsrendered', _applyVisibility);

    _applyVisibility();
}

// ─── SCROLL REVEAL ───────────────────────────────────────────

function _initScrollReveal() {
    document.querySelectorAll('.section-fade').forEach(el => el.classList.add('reveal'));
    _observeReveal();
}
