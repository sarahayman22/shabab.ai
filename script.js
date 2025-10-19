// === Translations are now inside the script file ===
const translations = {
  "en": {
    "docTitle": "Shabab.ai - Youth Empowerment Hub",
    "navHome": "Home",
    "navAbout": "About",
    "navContact": "Contact",
    "heroTitle1": "Unlocking youth potential through AI, creativity, and mentorship.",
    "heroSubtitle1": "Your community. Your future. Your journey.",
    "heroCta1": "Join Your Community Now",
    "heroTitle2": "Mentorship that fuels your growth.",
    "heroCtaMentee": "Become a Mentee",
    "heroCtaMentor": "Become a Mentor",
    "heroTitle3": "Innovative projects. Real-world impact.",
    // === NEW TRANSLATION ADDED ===
    "heroCtaIntern": "Become an Intern",
    // =============================
    "missionTitle": "Our Mission",
    "missionSubtitle": "We empower young people to create their own future by:",
    "missionItem1Title": "Reducing youth unemployment",
    "missionItem1Text": "Through hands-on AI skills and the use of innovative tools.",
    "missionItem2Title": "Building a clearer vision",
    "missionItem2Text": "Helping youth craft a clear path for their future.",
    "missionItem3Title": "Discovering unique talents",
    "missionItem3Text": "Enabling youth to discover and strengthen their gifts.",
    "whatWeDoTitle": "What We Do",
    "card1Title": "AI Skills",
    "card1Text": "Equipping youth with practical, future-ready digital tools.",
    "card2Title": "Creativity",
    "card2Text": "Encouraging new ways of thinking for solving real-life Problems.",
    "card3Title": "Mentorship",
    "card3Text": "Connecting young people with mentors who inspire and guide.",
    "whatWeOfferTitle": "What We Offer",
    "whatWeOfferSubtitle": "At Shabab.ai, we provide an ecosystem to support youth in every stage of their journey.",
    "offer1Title": "Networking & Exposure",
    "offer1Text": "Connect with peers, mentors, investors, businesses, and influential leaders — and gain access to real opportunities.",
    "offer2Title": "Learning Skills",
    "offer2Text": "Build future-ready knowledge in AI and beyond.",
    "offer3Title": "Solving Problems",
    "offer3Text": "Apply creativity and technology to real-world challenges.",
    "offer4Title": "Creating Value",
    "offer4Text": "Turn ideas into meaningful impact for careers and communities.",
    "footerTitle": "Get in Touch",
    "footerSubtitle": "Have questions, want to collaborate, or ready to join Shabab.ai? We'd love to hear from you.",
    "footerEmailTitle": "Email",
    "footerInstagramTitle": "Instagram"
  },
  "ar": {
    "docTitle": "شباب.ai - مركز تمكين الشباب",
    "navHome": "الرئيسية",
    "navAbout": "حولنا",
    "navContact": "تواصل معنا",
    "heroTitle1": "إطلاق إمكانات الشباب من خلال الذكاء الاصطناعي والإبداع والإرشاد.",
    "heroSubtitle1": "مجتمعك. مستقبلك. رحلتك.",
    "heroCta1": "انضم إلى مجتمعك الآن",
    "heroTitle2": "إرشاد يغذي نموك.",
    "heroCtaMentee": "كن متدربًا",
    "heroCtaMentor": "كن مرشدًا",
    "heroTitle3": "مشاريع مبتكرة. تأثير واقعي.",
    // === NEW TRANSLATION ADDED ===
    "heroCtaIntern": "انضم كمتدرب",
    // =============================
    "missionTitle": "مهمتنا",
    "missionSubtitle": "نحن نمكّن الشباب ليصنعوا مستقبلهم بأنفسهم من خلال:",
    "missionItem1Title": "تقليل بطالة الشباب",
    "missionItem1Text": "من خلال مهارات الذكاء الاصطناعي والمهارات الرقمية العملية.",
    "missionItem2Title": "بناء رؤية أوضح",
    "missionItem2Text": "مساعدة الشباب على صياغة مسار واضح لمستقبلهم.",
    "missionItem3Title": "اكتشاف المواهب الفريدة",
    "missionItem3Text": "تمكين الشباب من اكتشاف مواهبهم وتقويتها.",
    "whatWeDoTitle": "ماذا نفعل",
    "card1Title": "مهارات الذكاء الاصطناعي",
    "card1Text": "تزويد الشباب بأدوات رقمية عملية وجاهزة للمستقبل.",
    "card2Title": "الإبداع",
    "card2Text": "تشجيع طرق التفكير الجديدة لحل مشاكل الحياة الواقعية.",
    "card3Title": "الإرشاد",
    "card3Text": "ربط الشباب بالموجهين الذين يلهمون ويرشدون.",
    "whatWeOfferTitle": "ماذا نقدم",
    "whatWeOfferSubtitle": "في شباب.ai، نقدم نظامًا بيئيًا لدعم الشباب في كل مرحلة من رحلتهم.",
    "offer1Title": "التواصل والانتشار",
    "offer1Text": "تواصل مع الأقران، الموجهين، المستثمرين، الشركات، والقادة المؤثرين — واحصل على فرص حقيقية.",
    "offer2Title": "تعلم المهارات",
    "offer2Text": "بناء معرفة جاهزة للمستقبل في الذكاء الاصطناعي وما بعده.",
    "offer3Title": "حل المشكلات",
    "offer3Text": "تطبيق الإبداع والتكنولوجيا على تحديات العالم الحقيقي.",
    "offer4Title": "خلق القيمة",
    "offer4Text": "تحويل الأفكار إلى تأثير هادف للمهن والمجتمعات.",
    "footerTitle": "تواصل معنا",
    "footerSubtitle": "هل لديك أسئلة، أو ترغب في التعاون، أو مستعد للانضمام إلى شباب.ai؟ نود أن نسمع منك.",
    "footerEmailTitle": "البريد الإلكتروني",
    "footerInstagramTitle": "انستغرام"
  }
};
// =======================================================


document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');
    if (langFromUrl) {
        currentLang = langFromUrl;
    }

    showSlides(slideIndex);
    startSlideShow();
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
const langTextDesktop = document.getElementById('lang-text-desktop');
const translatableElements = document.querySelectorAll('[data-lang]');

// === LINK VARIABLES UPDATED ===
const joinLink = document.querySelector('a[href*="form.html"]');
const menteeLink = document.querySelector('a[href*="become-a-mentee/form.html"]');
const mentorLink = document.querySelector('a[href*="become-a-mentor/form.html"]');
const internLink = document.querySelector('a[href*="become-an-intern/form.html"]');
// ==============================

let currentLang = 'en';

function translatePage() {
    updateContent();
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
    if (langTextDesktop) {
      langTextDesktop.textContent = currentLang === 'en' ? 'العربية' : 'English';
    }
    
    // === LINK UPDATING LOGIC MODIFIED ===
    if(joinLink) joinLink.href = `./Join Your Community/form.html?lang=${currentLang}`;
    if(menteeLink) menteeLink.href = `./become-a-mentee/form.html?lang=${currentLang}`;
    if(mentorLink) mentorLink.href = `./become-a-mentor/form.html?lang=${currentLang}`;
    if(internLink) internLink.href = `./become-an-intern/form.html?lang=${currentLang}`;
    // ====================================
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