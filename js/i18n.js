// ============================================================
// js/i18n.js — Internationalisation system
// ============================================================
import { translations, meta } from './data.js';

let currentLang = 'en';

// ─── PUBLIC API ──────────────────────────────────────────────

/** Get the active language code ('en' | 'it'). */
export function getLang() {
  return currentLang;
}

/**
 * Look up a translation string by dot-separated key.
 * e.g. t('nav.about') → 'About' | 'Chi sono'
 */
export function t(key) {
  const parts = key.split('.');
  let node = translations[currentLang];
  for (const part of parts) {
    if (node == null) break;
    node = node[part];
  }
  // Fallback to English if key missing in current language
  if (node == null) {
    node = translations.en;
    for (const part of parts) {
      if (node == null) return key;
      node = node[part];
    }
  }
  return node ?? key;
}

/** Switch to the given language and re-render all translated content. */
export function setLang(lang) {
  if (lang !== 'en' && lang !== 'it') return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  _applyStaticTranslations();
  _updateLangButtons();
  _updateCVLink();
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/** Bootstrap the i18n system. Call once on page load. */
export function initI18n() {
  const saved      = localStorage.getItem('lang');
  const browserIT  = navigator.language?.toLowerCase().startsWith('it');
  const initial    = saved ?? (browserIT ? 'it' : 'en');

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  setLang(initial);
}

// ─── PRIVATE HELPERS ─────────────────────────────────────────

function _applyStaticTranslations() {
  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  // placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // aria-label attribute
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });
}

function _updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function _updateCVLink() {
  const cvLink = document.getElementById('cv-download');
  if (cvLink) cvLink.href = meta.cv[currentLang];
}
