// ============================================================
// js/app.js — Entry point. Imports and wires all modules.
// This is the only script tag needed in index.html.
// ============================================================
import { initI18n, getLang, setLang } from './i18n.js';
import { initRenderer, _observeReveal } from './renderer.js';
import { initNav }                       from './nav.js';
import { initForm }                      from './form.js';

// Modules are always deferred — DOM is ready when this runs.
_init();

function _init() {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Navigation (scroll effects, mobile menu, active links)
  initNav();

  // Language system (reads localStorage / browser pref, applies translations)
  initI18n();

  // Render dynamic sections (tabs, skills grid, projects grid)
  initRenderer();

  // Contact form
  initForm();

  // About tabs (static HTML — just needs JS toggle)
  _initTabs();

  // Portfolio "See more / See less" toggle
  _initSeeMore();

  // Scroll-reveal for static sections
  _initScrollReveal();

  // Rubik cube "easter egg": clicking it toggles language
  document.querySelectorAll('.rubik').forEach(img => {
    img.addEventListener('click', () => {
      setLang(getLang() === 'en' ? 'it' : 'en');
    });
  });

  // Keep rubik image in sync when language changes
  document.addEventListener('langchange', ({ detail: { lang } }) => {
    document.querySelectorAll('[data-lang-img]').forEach(img => {
      img.classList.toggle('hidden', img.dataset.langImg !== lang);
    });
  });
}

// ─── ABOUT TABS ─────────────────────────────────────────────

function _initTabs() {
  const tabBtns   = document.querySelectorAll('.tab-btn');
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

// ─── SEE MORE / SEE LESS ─────────────────────────────────────

function _initSeeMore() {
  const seeMoreBtn = document.getElementById('see-more-btn');
  const seeLessBtn = document.getElementById('see-less-btn');

  seeMoreBtn?.addEventListener('click', () => {
    document.querySelectorAll('.project-extra').forEach(el => el.classList.remove('hidden'));
    seeMoreBtn.classList.add('hidden');
    seeLessBtn?.classList.remove('hidden');
    _observeReveal(); // re-observe newly visible cards
  });

  seeLessBtn?.addEventListener('click', () => {
    document.querySelectorAll('.project-extra').forEach(el => el.classList.add('hidden'));
    seeLessBtn.classList.add('hidden');
    seeMoreBtn?.classList.remove('hidden');
  });
}

// ─── SCROLL REVEAL ───────────────────────────────────────────

function _initScrollReveal() {
  // Add reveal class to static section elements
  document.querySelectorAll('.section-fade').forEach(el => el.classList.add('reveal'));
  _observeReveal();
}
