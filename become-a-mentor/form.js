document.addEventListener('DOMContentLoaded', () => {
    // --- Form submission logic ---
    const joinForm = document.getElementById('join-form');
    const learningForm = document.getElementById('learning-survey-form');

    if (joinForm) {
        joinForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your application!');
        });
    }

    if (learningForm) {
        learningForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your valuable feedback!');
        });
    }

    // --- Language translation logic ---
    const translatableElements = document.querySelectorAll('[data-lang], [data-lang-placeholder]');
    const backLink = document.querySelector('.back-link'); // Get the back link element
    let translations = {};

    async function fetchTranslations() {
        try {
            const response = await fetch('../languages.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            translations = await response.json();
        } catch (error) {
            console.error("Could not fetch translations:", error);
        }
    }

    function updateContent(lang) {
        document.documentElement.lang = lang;
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // === NEW: Update the back link's href with the language ===
        if (backLink) {
            backLink.href = `../index.html?lang=${lang}`;
        }
        // =========================================================

        translatableElements.forEach(el => {
            const key = el.getAttribute('data-lang');
            const placeholderKey = el.getAttribute('data-lang-placeholder');

            if (key && translations[lang]?.[key]) {
                // This handles the arrow icon inside the link
                const iconHTML = el.querySelector('i')?.outerHTML || '';
                const text = translations[lang][key];
                el.innerHTML = `${iconHTML} ${text}`;
            }
            if (placeholderKey && translations[lang]?.[placeholderKey]) {
                el.placeholder = translations[lang][placeholderKey];
            }
        });
    }

    async function initTranslations() {
        await fetchTranslations();
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang') || 'en';
        updateContent(lang);
    }

    initTranslations();
});