// ============================================================
// js/form.js — Contact form → Google Apps Script
// ============================================================
import {meta} from './data.js';
import {t} from './i18n.js';

export function initForm() {
    const form = document.getElementById('contact-form');
    const msgEl = document.getElementById('form-msg');
    const submitBtn = form?.querySelector('[type="submit"]');

    if (!form || !msgEl) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();

        submitBtn.disabled = true;
        msgEl.textContent = '';
        msgEl.className = '';

        try {
            const formData = new FormData(form);
            const data = new URLSearchParams(formData);

            await fetch(meta.formScriptUrl, {
                method: 'POST',
                body: data.toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            msgEl.textContent = t('contact.successMsg');
            msgEl.classList.add('form-msg--success');
            form.reset();
        } catch {
            msgEl.textContent = t('contact.errorMsg');
            msgEl.classList.add('form-msg--error');
        } finally {
            submitBtn.disabled = false;
            setTimeout(() => {
                msgEl.textContent = '';
                msgEl.className = '';
            }, 5000);
        }
    });
}
