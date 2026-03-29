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
        msgEl.textContent = t('contact.sendingMsg');
        msgEl.className = 'form-msg--sending';

        try {
            const data = new URLSearchParams(new FormData(form));

            const response = await fetch(meta.formScriptUrl, {
                method: 'POST',
                body: data.toString(),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            });

            const json = await response.json();

            if (!response.ok || json.result !== 'success') {
                _setErrorMsg(msgEl);
                return;
            }

            _setSuccessMsg(msgEl);
            form.reset();
        } catch {
            _setErrorMsg(msgEl);
        } finally {
            submitBtn.disabled = false;
            setTimeout(() => {
                msgEl.textContent = '';
                msgEl.className = '';
            }, 5000);
        }
    });
}

function _setErrorMsg(msgEl) {
    msgEl.textContent = t('contact.errorMsg');
    msgEl.className = 'form-msg--error';
}

function _setSuccessMsg(msgEl) {
    msgEl.textContent = t('contact.successMsg');
    msgEl.className = 'form-msg--success';
}
