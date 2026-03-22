// ============================================================
// js/nav.js — Navigation: mobile menu, scroll effects, active link
// ============================================================

export function initNav() {
    const mainNav = document.getElementById('main-nav');
    const navList = document.getElementById('nav-list');
    const menuBtn = document.getElementById('menu-toggle');
    const backToTop = document.getElementById('back-to-top');

    if (!mainNav || !navList || !menuBtn) return;

    // ─── Mobile menu ────────────────────────────────────────────
    menuBtn.addEventListener('click', () => {
        const isOpen = mainNav.dataset.open === 'true';
        _setMenuOpen(mainNav, menuBtn, !isOpen);
    });

    // Close menu when a nav link is clicked
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            _setMenuOpen(mainNav, menuBtn, false);
        });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && mainNav.dataset.open === 'true') {
            _setMenuOpen(mainNav, menuBtn, false);
            menuBtn.focus();
        }
    });

    // ─── Scroll effects ─────────────────────────────────────────
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 80;
        mainNav.classList.toggle('scrolled', scrolled);
        if (backToTop) backToTop.classList.toggle('visible', scrolled);
    }, {passive: true});

    // ─── Active section tracking ─────────────────────────────────
    const sections = document.querySelectorAll('section[id]');
    const navLinks = navList.querySelectorAll('a[href^="#"]');

    const sectionObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        }
    }, {threshold: 0.35, rootMargin: '-10% 0px -55% 0px'});

    sections.forEach(sec => sectionObserver.observe(sec));
}

// ─── HELPERS ─────────────────────────────────────────────────

function _setMenuOpen(mainNav, menuBtn, open) {
    mainNav.dataset.open = String(open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
        // Move focus to first nav link for keyboard accessibility
        const firstLink = mainNav.querySelector('#nav-list a');
        firstLink?.focus();
    }
}
