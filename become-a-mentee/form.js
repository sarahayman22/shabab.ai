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
function updateContent() {
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang]?.[key]) {
            
            if (el.tagName === 'A' && el.classList.contains('cta-button')) {
                const iconHTML = el.querySelector('i')?.outerHTML || '';
                el.innerHTML = `${translations[currentLang][key]} ${iconHTML}`;
            
            // === ADD THIS NEW BLOCK ===
            } else if (el.tagName === 'A' && el.classList.contains('back-link')) {
                const iconHTML = el.querySelector('i')?.outerHTML || '';
                el.innerHTML = `${iconHTML} ${translations[currentLang][key]}`;
            // === END OF NEW BLOCK ===
            
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if(el.placeholder) {
                    el.placeholder = translations[currentLang][key];
                }
            
            /* This is critical for making the <span> tags work */
            } else if (el.tagName === 'H1' || el.tagName === 'P') { 
                el.innerHTML = translations[currentLang][key];
            
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
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