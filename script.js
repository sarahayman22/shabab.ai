document.addEventListener("DOMContentLoaded", function() {
    // === NEW: Check for language in URL when page loads ===
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    if (langFromUrl) {
        currentLang = langFromUrl; // Set language based on URL
    }
    // =======================================================

    // Initialize Slideshow
    showSlides(slideIndex);
    startSlideShow();

    // Initialize Language (this will now use the correct language)
    translatePage();
});

// --- Slideshow Logic ---
let slideIndex = 1;
let slideInterval;
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    }
}
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) {
    showSlides(slideIndex = n);
    clearInterval(slideInterval);
    startSlideShow();
}
function startSlideShow() {
    slideInterval = setInterval(() => plusSlides(1), 5000);
}

// --- Navigation Drawer Logic ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}));


// --- Language Switcher Logic ---
const langToggleDesktop = document.getElementById('lang-toggle-desktop');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
const langTextMobile = document.getElementById('lang-text-mobile');
const translatableElements = document.querySelectorAll('[data-lang]');
const joinLink = document.querySelector('a[href*="form.html"]');
const learningLink = document.querySelector('a[href*="learning.html"]');

let currentLang = 'en'; // Default language, will be overridden by URL if present
let translations = {};

async function fetchTranslations() {
    try {
        const response = await fetch('languages.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        translations = await response.json();
    } catch (error) {
        console.error("Could not fetch translations:", error);
    }
}

function translatePage() {
    if (Object.keys(translations).length === 0) {
        fetchTranslations().then(updateContent);
    } else {
        updateContent();
    }
}

function updateContent() {
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang]?.[key]) {
            if (el.tagName === 'A' && el.classList.contains('cta-button')) {
                const iconHTML = el.querySelector('i')?.outerHTML || '';
                el.innerHTML = `${translations[currentLang][key]} ${iconHTML}`;
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });

    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    if (langTextMobile) {
      langTextMobile.textContent = currentLang === 'en' ? 'العربية' : 'English';
    }
    
    if(joinLink) joinLink.href = `./Join Your Community/form.html?lang=${currentLang}`;
    if(learningLink) learningLink.href = `./Start Learning/learning.html?lang=${currentLang}`;
}

function switchLanguage(event) {
    event.stopPropagation();
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    translatePage();
    if (navMenu.classList.contains("active")) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }
}

langToggleDesktop.addEventListener('click', switchLanguage);
langToggleMobile.addEventListener('click', switchLanguage);