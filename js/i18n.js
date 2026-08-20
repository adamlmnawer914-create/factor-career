/* ============================================
   Factor Career - Internationalization (i18n) Engine
   Supports: Arabic (العربية - RTL) & English (LTR)
   ============================================ */

window.CareerAI = window.CareerAI || {};

window.CareerAI.i18n = {
  STORAGE_KEY: 'factor_career_lang',
  currentLang: 'ar',

  // Language dictionaries
  translations: {
    ar: {
      // General & Nav
      langName: 'English',
      langCode: 'en',
      dir: 'rtl',
      'nav.home': 'الرئيسية',
      'nav.tools': 'الأدوات',
      'nav.jobs': 'الوظائف والفرص',
      'nav.blog': 'المدونة',
      'nav.about': 'من نحن',
      'nav.contact': 'تواصل معنا',
      'nav.startNow': 'ابدأ الآن',
      'nav.admin': 'لوحة التحكم',
      'common.back': 'رجوع',
      'common.free': 'مجاناً 100%',
      'common.applyNow': 'قدّم الآن',
      'common.loading': 'جاري التحميل...',
      'common.copy': 'نسخ النص',
      'common.copied': 'تم النسخ بنجاح!',
      'common.downloadPDF': 'تحميل PDF',
      'common.downloadWord': 'تحميل Word',
      'common.generate': 'توليد بالذكاء الاصطناعي',
      'common.sponsored': 'إعلان ممول / Sponsored',

      // Footer
      'footer.brandDesc': 'نساعد الباحثين عن عمل في بناء مسيرة مهنية ناجحة باستخدام منصة Factor Career وأحدث أدوات الذكاء الاصطناعي المجانية.',
      'footer.quickLinks': 'روابط سريعة',
      'footer.toolsTitle': 'الأدوات الذكية',
      'footer.contactTitle': 'تواصل معنا',
      'footer.rights': 'جميع الحقوق محفوظة.',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'شروط الاستخدام',
      'footer.location': 'المملكة المغربية، سوق السبت أولاد النمة',

      // Hero Section
      'hero.badge': 'منصة التوظيف والمسار المهني بالذكاء الاصطناعي',
      'hero.title1': 'طوّر مسيرتك المهنية واصنع',
      'hero.title2': 'سيرة ذاتية ذكية',
      'hero.title3': 'تفتح لك أبواب المقابلات',
      'hero.subtitle': 'أدوات ذكية مجانية من Factor Career تساعدك في كتابة سيرتك الذاتية، اجتياز أنظمة الفرز ATS، والتحضير للمقابلات بكفاءة واحترافية.',
      'hero.btnBuild': 'أنشئ سيرتك الذاتية الآن',
      'hero.btnExplore': 'استكشف جميع الأدوات',
      'hero.stat1Num': '100%',
      'hero.stat1Label': 'مجاني بالكامل',
      'hero.stat2Num': '5+',
      'hero.stat2Label': 'أدوات ذكاء اصطناعي',
      'hero.stat3Num': 'ATS',
      'hero.stat3Label': 'متوافق مع الفرز الآلي',

      // Features
      'home.whyTitle': 'لماذا تختار Factor Career؟',
      'home.whySubtitle': 'كل ما تحتاجه للارتقاء بمسيرتك المهنية في مكان واحد وبأحدث تقنيات الذكاء الاصطناعي',
      'home.feat1Title': 'صانع السيرة الذاتية ATS',
      'home.feat1Desc': 'أنشئ سيرة ذاتية احترافية خالية من الأخطاء ومتوافقة مع أنظمة تتبع المتقدمين الآلية لضمان وصولك للمقابلة.',
      'home.feat2Title': 'فحص وتدقيق السيرة الذاتية',
      'home.feat2Desc': 'احصل على تحليل فوري لنقاط القوة والضعف في سيرتك الذاتية مع مقترحات عملية لتحسين صياغة الإنجازات.',
      'home.feat3Title': 'رسائل التغطية الذكية',
      'home.feat3Desc': 'ولّد رسائل تقديم وCover Letters مقنعة ومخصصة لكل وظيفة بضغطة زر وبعدة لغات.',
      'home.feat4Title': 'التحضير للمقابلات الوظيفية',
      'home.feat4Desc': 'تدرّب على أسئلة المقابلات النموذجية في مجالك مع أفضل إجابات باستراتيجية STAR الاحترافية.',

      // Tools Page
      'tools.headerTitle': 'أدوات الذكاء الاصطناعي المهنية',
      'tools.headerSubtitle': 'مجموعة متكاملة من الأدوات الذكية المجانية لتطوير كل مرحلة في بحثك عن عمل',
      'tools.catAll': 'جميع الأدوات',
      'tools.catResume': 'السيرة الذاتية',
      'tools.catInterview': 'المقابلات الشخصية',
      'tools.catSearch': 'البحث عن وظيفة',
      'tools.useTool': 'استخدم الأداة مجاناً',
      'tools.comingSoon': 'قريباً بإذن الله',

      // Jobs Page
      'jobs.headerTitle': '💼 الوظائف والفرص المهنية',
      'jobs.headerSubtitle': 'استكشف أحدث فرص العمل المُختارة بعناية لتناسب مهاراتك وطموحاتك المهنية',
      'jobs.available': 'فرصة متاحة الآن',
      'jobs.autoUpdated': '🔄 يتم التحديث باستمرار',
      'jobs.emptyTitle': 'لا توجد فرص متاحة حالياً',
      'jobs.emptyDesc': 'نعمل على إضافة فرص عمل جديدة باستمرار. تابعنا للحصول على آخر التحديثات!',
      'jobs.reqs': 'المتطلبات والشروط:',
      'jobs.ctaTitle': 'لم تجد الوظيفة المناسبة؟',
      'jobs.ctaText': 'جهّز سيرتك الذاتية باستخدام أدواتنا الذكية المجانية وكن مستعداً لأي فرصة قادمة!',

      // About Page
      'about.title': 'من نحن - Factor Career',
      'about.subtitle': 'رؤيتنا، رسالتنا، وكيف نوظف الذكاء الاصطناعي لمساعدتك على النجاح المهني',
      'about.storyTitle': 'قصتنا ورؤيتنا',
      'about.missionTitle': 'رسالتنا',
      'about.missionText': 'تمكين كل باحث عن عمل من امتلاك أدوات احترافية ومجانية بالكامل تنافس أفضل المعايير العالمية.',
      'about.visionTitle': 'رؤيتنا',
      'about.visionText': 'أن نكون المنصة العربية الرائدة في تسخير تقنيات الذكاء الاصطناعي لتطوير رأس المال البشري وتسهيل التوظيف.',

      // Contact Page
      'contact.title': 'تواصل معنا',
      'contact.subtitle': 'نسعد بتواصلك مع فريق Factor Career. أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن',
      'contact.formName': 'الاسم الكامل *',
      'contact.formEmail': 'البريد الإلكتروني *',
      'contact.formSubject': 'موضوع الرسالة *',
      'contact.formMsg': 'نص الرسالة *',
      'contact.btnSend': 'إرسال الرسالة',
      'contact.success': 'شكراً لتواصلك معنا! تم استلام رسالتك بنجاح وسنرد عليك قريباً.',
      'contact.emailLabel': 'البريد الإلكتروني',
      'contact.phoneLabel': 'الهاتف المباشر',
      'contact.locationLabel': 'الموقع الجغرافي',

      // Privacy & Terms
      'privacy.title': 'سياسة الخصوصية',
      'privacy.subtitle': 'نحن نلتزم بحماية خصوصية بياناتك ومعلوماتك الشخصية في منصة Factor Career',
      'terms.title': 'شروط الاستخدام',
      'terms.subtitle': 'الشروط والأحكام الخاصة باستخدام منصة Factor Career وأدواتها الذكية'
    },

    en: {
      // General & Nav
      langName: 'العربية',
      langCode: 'ar',
      dir: 'ltr',
      'nav.home': 'Home',
      'nav.tools': 'Tools',
      'nav.jobs': 'Jobs & Careers',
      'nav.blog': 'Blog',
      'nav.about': 'About Us',
      'nav.contact': 'Contact Us',
      'nav.startNow': 'Start Free',
      'nav.admin': 'Admin Portal',
      'common.back': 'Back',
      'common.free': '100% Free',
      'common.applyNow': 'Apply Now',
      'common.loading': 'Loading...',
      'common.copy': 'Copy Text',
      'common.copied': 'Copied successfully!',
      'common.downloadPDF': 'Download PDF',
      'common.downloadWord': 'Download Word',
      'common.generate': 'Generate with AI',
      'common.sponsored': 'Sponsored Ad',

      // Footer
      'footer.brandDesc': 'Empowering job seekers to build rewarding careers with Factor Career and cutting-edge free AI career tools.',
      'footer.quickLinks': 'Quick Links',
      'footer.toolsTitle': 'AI Tools',
      'footer.contactTitle': 'Contact Us',
      'footer.rights': 'All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Service',
      'footer.location': 'Morocco, Souk Sebt Oulad Nemma',

      // Hero Section
      'hero.badge': 'AI-Powered Career & Resume Builder Platform',
      'hero.title1': 'Elevate Your Career with an',
      'hero.title2': 'Intelligent Resume',
      'hero.title3': 'that Lands Job Interviews',
      'hero.subtitle': 'Free AI-powered tools from Factor Career that help you craft ATS-optimized resumes, write tailored cover letters, and master job interviews.',
      'hero.btnBuild': 'Build Your Resume Now',
      'hero.btnExplore': 'Explore All Tools',
      'hero.stat1Num': '100%',
      'hero.stat1Label': 'Completely Free',
      'hero.stat2Num': '5+',
      'hero.stat2Label': 'AI Career Tools',
      'hero.stat3Num': 'ATS',
      'hero.stat3Label': 'Optimized for Screening',

      // Features
      'home.whyTitle': 'Why Choose Factor Career?',
      'home.whySubtitle': 'Everything you need to accelerate your career in one place with cutting-edge AI technologies.',
      'home.feat1Title': 'ATS Resume Builder',
      'home.feat1Desc': 'Create sleek, error-free resumes compliant with automated applicant tracking systems to ensure you get noticed.',
      'home.feat2Title': 'Resume Audit & Analyzer',
      'home.feat2Desc': 'Get immediate feedback on resume strengths and weaknesses, along with tailored keyword optimization suggestions.',
      'home.feat3Title': 'Smart Cover Letters',
      'home.feat3Desc': 'Generate highly tailored and compelling cover letters for any position in seconds in multiple languages.',
      'home.feat4Title': 'Interview Prep Coach',
      'home.feat4Desc': 'Practice tailored interview questions in your specific domain with STAR-method structured model answers.',

      // Tools Page
      'tools.headerTitle': 'Professional AI Career Tools',
      'tools.headerSubtitle': 'A comprehensive suite of free intelligent tools to power every step of your job search journey.',
      'tools.catAll': 'All Tools',
      'tools.catResume': 'Resume & CV',
      'tools.catInterview': 'Interviews',
      'tools.catSearch': 'Job Search',
      'tools.useTool': 'Use Tool for Free',
      'tools.comingSoon': 'Coming Soon',

      // Jobs Page
      'jobs.headerTitle': '💼 Career Opportunities & Jobs',
      'jobs.headerSubtitle': 'Discover curated job openings matched to your skillset and career aspirations.',
      'jobs.available': 'openings available now',
      'jobs.autoUpdated': '🔄 Continuously updated',
      'jobs.emptyTitle': 'No Openings Currently Available',
      'jobs.emptyDesc': 'We are constantly adding new job opportunities. Check back soon for fresh listings!',
      'jobs.reqs': 'Requirements & Qualifications:',
      'jobs.ctaTitle': 'Haven’t Found the Right Job Yet?',
      'jobs.ctaText': 'Prepare your professional resume with our free AI tools and be ready for your next big opportunity!',

      // About Page
      'about.title': 'About Us - Factor Career',
      'about.subtitle': 'Our vision, mission, and how we harness artificial intelligence to empower your career.',
      'about.storyTitle': 'Our Story & Vision',
      'about.missionTitle': 'Our Mission',
      'about.missionText': 'To empower every job seeker with world-class, 100% free professional AI tools that match top global standards.',
      'about.visionTitle': 'Our Vision',
      'about.visionText': 'To be the premier AI career platform facilitating employment and human capital growth worldwide.',

      // Contact Page
      'contact.title': 'Contact Us',
      'contact.subtitle': 'We’d love to hear from you. Send us your inquiry and our team will get back to you promptly.',
      'contact.formName': 'Full Name *',
      'contact.formEmail': 'Email Address *',
      'contact.formSubject': 'Subject *',
      'contact.formMsg': 'Your Message *',
      'contact.btnSend': 'Send Message',
      'contact.success': 'Thank you for reaching out! Your message has been received and we will respond shortly.',
      'contact.emailLabel': 'Email Support',
      'contact.phoneLabel': 'Direct Phone',
      'contact.locationLabel': 'Location',

      // Privacy & Terms
      'privacy.title': 'Privacy Policy',
      'privacy.subtitle': 'We are committed to protecting your privacy and personal data on Factor Career.',
      'terms.title': 'Terms of Service',
      'terms.subtitle': 'Terms and conditions governing the use of Factor Career and its intelligent tools.'
    }
  },

  // Initialize Language (Check localStorage, fallback to browser detection)
  init: function() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved && (saved === 'ar' || saved === 'en')) {
      this.currentLang = saved;
    } else {
      // Auto-detect browser/system language
      const navLang = (navigator.language || navigator.userLanguage || 'ar').toLowerCase();
      this.currentLang = navLang.startsWith('ar') ? 'ar' : 'en';
      localStorage.setItem(this.STORAGE_KEY, this.currentLang);
    }

    this.applyLanguage(this.currentLang, false);
  },

  getLang: function() {
    return this.currentLang || 'ar';
  },

  t: function(key, fallback = '') {
    const lang = this.getLang();
    const dict = this.translations[lang] || this.translations['ar'];
    if (dict && dict[key] !== undefined) {
      return dict[key];
    }
    // Fallback to Arabic dictionary
    if (this.translations['ar'] && this.translations['ar'][key] !== undefined) {
      return this.translations['ar'][key];
    }
    return fallback || key;
  },

  setLang: function(newLang) {
    if (newLang !== 'ar' && newLang !== 'en') return;
    this.currentLang = newLang;
    localStorage.setItem(this.STORAGE_KEY, newLang);
    this.applyLanguage(newLang, true);
  },

  toggleLang: function() {
    const nextLang = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLang(nextLang);
  },

  applyLanguage: function(lang, reRender = true) {
    const htmlEl = document.documentElement;
    const isAr = (lang === 'ar');

    // Update HTML attributes
    htmlEl.setAttribute('lang', isAr ? 'ar' : 'en');
    htmlEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');

    // Update Font Family variable dynamically if needed
    if (isAr) {
      document.body.style.fontFamily = "var(--font-primary)";
    } else {
      document.body.style.fontFamily = "'Inter', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif";
    }

    // Re-render Header & Footer with new language texts
    const app = document.getElementById('app');
    const existingHeader = document.getElementById('header');
    const existingMobileNav = document.getElementById('mobileNav');
    const existingOverlay = document.getElementById('mobileOverlay');
    const existingFooter = document.querySelector('footer.footer');
    const existingBackToTop = document.getElementById('backToTop');

    if (existingHeader) existingHeader.remove();
    if (existingMobileNav) existingMobileNav.remove();
    if (existingOverlay) existingOverlay.remove();
    if (existingFooter) existingFooter.remove();
    if (existingBackToTop) existingBackToTop.remove();

    if (app && window.CareerAI.components) {
      app.insertAdjacentHTML('afterbegin', window.CareerAI.components.renderHeader());
      app.insertAdjacentHTML('beforeend', window.CareerAI.components.renderFooter());
    }

    // Re-render current page route
    if (reRender && window.CareerAI.router) {
      window.CareerAI.router.handleRoute();
    }
  }
};

// Global shorthand for convenience
window.__t = function(key, fallback) {
  return window.CareerAI.i18n.t(key, fallback);
};
