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

    // ─── Active section tracking (scroll-based, works up and down) ──
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const navLinks = navList.querySelectorAll('a[href^="#"]');

    function _updateActiveLink() {
        const scrollY = window.scrollY;
        const atBottom =
            scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;

        let activeId;
        if (atBottom) {
            // Always highlight last section when at the bottom of the page
            activeId = sections[sections.length - 1].id;
        } else {
            // The active section is the last one whose top edge is at or above
            // 40% down the viewport — identical logic scrolling up or down.
            const trigger = scrollY + window.innerHeight * 0.4;
            let active = sections[0];
            for (const section of sections) {
                if (section.offsetTop <= trigger) active = section;
            }
            activeId = active.id;
        }

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${activeId}`);
        });
    }

    // ─── Scroll effects ─────────────────────────────────────────
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 80;
        mainNav.classList.toggle('scrolled', scrolled);
        if (backToTop) backToTop.classList.toggle('visible', scrolled);
        _updateActiveLink();
    }, {passive: true});

    _updateActiveLink(); // set correct state on page load
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
