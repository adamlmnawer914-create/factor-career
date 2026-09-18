/* ============================================
   Factor Career - Shared Components (Header & Footer)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.components = {};

/* --- Comprehensive SVG Icons Dictionary --- */
window.CareerAI.icons = {
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  fileText: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  cover: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  interview: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  skills: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  speed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  easy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
  free: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
  arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
  twitter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="24" x2="14" y2="24"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>'
};

/* --- Header Component --- */
window.CareerAI.components.renderHeader = function () {
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const langName = t('langName', 'English');

  const currentPath = (typeof window !== 'undefined' && window.location && window.location.pathname) ? window.location.pathname : '/';
  const cleanPath = (currentPath.length > 1 && currentPath.endsWith('/')) ? currentPath.slice(0, -1) : currentPath;
  const isAct = (target) => {
    if (target === '/') return cleanPath === '/' || cleanPath === '';
    return cleanPath === target || cleanPath.startsWith(target + '/');
  };

  return `
    <a href="#main-content" class="skip-link">${t('nav.home', 'انتقل إلى المحتوى')}</a>
    <header class="header" id="header" role="banner">
      <div class="container header__inner">
        
        <!-- Brand Logo -->
        <a href="/" class="header__logo" onclick="event.preventDefault();CareerAI.router.navigate('/')" aria-label="Factor Career Home">
          <div class="header__logo-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.5 4H19C19.55 4 20 4.45 20 5V7.5C20 8.05 19.55 8.5 19 8.5H8.5V11H15.5C16.05 11 16.5 11.45 16.5 12V14C16.5 14.55 16.05 15 15.5 15H8.5V20H4.5V4Z" fill="white"/>
              <path d="M20 1L20.8 3.2L23 4L20.8 4.8L20 7L19.2 4.8L17 4L19.2 3.2L20 1Z" fill="#38bdf8"/>
            </svg>
          </div>
          <div class="header__logo-text">
            <span class="logo__brand">Factor</span><span class="logo__highlight">Career</span>
          </div>
          <span class="logo__badge">AI</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav header__nav" id="main-nav" role="navigation" aria-label="Main Navigation">
          <a href="/" data-nav="/" class="nav__link ${isAct('/') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
          <a href="/tools" data-nav="/tools" class="nav__link ${isAct('/tools') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.tools', 'الأدوات')}</a>
          <a href="/blog" data-nav="/blog" class="nav__link ${isAct('/blog') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">${t('nav.blog', 'المدونة')}</a>
          <a href="/about" data-nav="/about" class="nav__link ${isAct('/about') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/about')">${t('nav.about', 'من نحن')}</a>
          <a href="/contact" data-nav="/contact" class="nav__link ${isAct('/contact') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/contact')">${t('nav.contact', 'تواصل معنا')}</a>
        </nav>

        <!-- Right Side Header Actions -->
        <div class="header__actions">
          
          <!-- Language Switcher Button -->
          <button class="lang-switch-btn" id="lang-switch" onclick="CareerAI.i18n.toggleLang()" title="Switch Language" aria-label="Toggle language between Arabic and English">
            <span style="width:16px;height:16px;display:inline-flex">${icons.globe}</span>
            <span class="lang-switch__label">${langName}</span>
          </button>

          <!-- Primary CTA Button -->
          <a href="/tools/resume-builder" class="btn btn--primary btn--sm header__cta" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
            <span>Start Free</span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button class="menu-toggle mobile-toggle" id="menuToggle" onclick="event.stopPropagation(); CareerAI.toggleMobileMenu(event)" aria-label="Toggle mobile menu" aria-expanded="false">
            <span class="menu-toggle__line mobile-toggle__bar"></span>
            <span class="menu-toggle__line mobile-toggle__bar"></span>
            <span class="menu-toggle__line mobile-toggle__bar"></span>
          </button>

        </div>

      </div>
    </header>

    <!-- Mobile Dropdown Navigation (Outside of header to avoid backdrop-filter stacking constraint) -->
    <div class="mobile-nav" id="mobileNav" role="navigation" aria-label="Mobile Navigation">
      <div class="container mobile-nav__inner">
        
        <!-- Drawer Header with Logo & Close Button -->
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--color-border-light)">
          <div style="display:flex;align-items:center;gap:8px">
            <div class="header__logo-icon" style="width:30px;height:30px;min-width:30px;border-radius:8px">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 4H19C19.55 4 20 4.45 20 5V7.5C20 8.05 19.55 8.5 19 8.5H8.5V11H15.5C16.05 11 16.5 11.45 16.5 12V14C16.5 14.55 16.05 15 15.5 15H8.5V20H4.5V4Z" fill="white"/>
                <path d="M20 1L20.8 3.2L23 4L20.8 4.8L20 7L19.2 4.8L17 4L19.2 3.2L20 1Z" fill="#38bdf8"/>
              </svg>
            </div>
            <span style="font-weight:800;color:var(--color-text);font-size:1.05rem">Factor<span style="color:#2563eb">Career</span></span>
          </div>
          <button type="button" onclick="event.stopPropagation(); CareerAI.closeMobileMenu(event)" aria-label="Close menu" style="background:rgba(99,102,241,0.1);border:none;width:32px;height:32px;border-radius:8px;font-size:1.1rem;cursor:pointer;color:var(--color-text);display:flex;align-items:center;justify-content:center;font-weight:700">✕</button>
        </div>

        <a href="/" data-nav="/" class="mobile-nav__link ${isAct('/') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/');CareerAI.closeMobileMenu()">${t('nav.home', 'الرئيسية')}</a>
        <a href="/tools" data-nav="/tools" class="mobile-nav__link ${isAct('/tools') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/tools');CareerAI.closeMobileMenu()">${t('nav.tools', 'الأدوات الذكية')}</a>
        <a href="/blog" data-nav="/blog" class="mobile-nav__link ${isAct('/blog') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/blog');CareerAI.closeMobileMenu()">${t('nav.blog', 'المدونة والمقالات')}</a>
        <a href="/about" data-nav="/about" class="mobile-nav__link ${isAct('/about') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/about');CareerAI.closeMobileMenu()">${t('nav.about', 'من نحن')}</a>
        <a href="/contact" data-nav="/contact" class="mobile-nav__link ${isAct('/contact') ? 'active' : ''}" onclick="event.preventDefault();CareerAI.router.navigate('/contact');CareerAI.closeMobileMenu()">${t('nav.contact', 'تواصل معنا')}</a>
        <div class="mobile-nav__actions" style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.75rem">
          <a href="/tools/resume-builder" class="btn btn--primary btn--block" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder');CareerAI.closeMobileMenu()">
            ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
          </a>
        </div>
      </div>
    </div>
    <div class="mobile-overlay" id="mobileOverlay" onclick="CareerAI.closeMobileMenu()"></div>
  `;
};

/* --- Footer Component --- */
window.CareerAI.components.renderFooter = function () {
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  return `
    <footer class="footer" role="contentinfo">
      <div class="container footer__inner">
        <div class="footer__grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:2.5rem;margin-bottom:3rem">
          
          <!-- Column 1: Brand Info -->
          <div>
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem">
              <div class="header__logo-icon" style="width:34px;height:34px;min-width:34px;border-radius:10px">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 4H19C19.55 4 20 4.45 20 5V7.5C20 8.05 19.55 8.5 19 8.5H8.5V11H15.5C16.05 11 16.5 11.45 16.5 12V14C16.5 14.55 16.05 15 15.5 15H8.5V20H4.5V4Z" fill="white"/>
                  <path d="M20 1L20.8 3.2L23 4L20.8 4.8L20 7L19.2 4.8L17 4L19.2 3.2L20 1Z" fill="#38bdf8"/>
                </svg>
              </div>
              <div class="header__logo-text" style="font-size:1.3rem">
                <span style="color:white;font-weight:800">Factor</span><span style="color:#38bdf8;font-weight:800">Career</span>
              </div>
              <span class="logo__badge" style="background:rgba(56,189,248,0.15);color:#38bdf8;border-color:rgba(56,189,248,0.3)">AI</span>
            </div>
            <p style="font-size:0.9rem;color:var(--color-text-muted);line-height:1.6;margin-bottom:1.25rem">
              ${isEn ? 'Empowering job seekers worldwide with AI tools, ATS resume building, and verified career opportunities.' : 'منصة رائدة تمكّن الباحثين عن عمل بالذكاء الاصطناعي لإنشاء سير ذاتية متوافقة مع ATS واستكشاف أحدث الوظائف الموثقة.'}
            </p>
            <div style="font-size:0.85rem;color:var(--color-text-muted);display:flex;align-items:center;gap:6px">
              <span>📧</span>
              <a href="mailto:factorcareer@gmail.com" style="color:var(--color-primary-light)">factorcareer@gmail.com</a>
            </div>
          </div>

          <!-- Column 2: Tools Links -->
          <div>
            <h4 style="font-size:1rem;font-weight:700;color:white;margin-bottom:1rem">${isEn ? 'AI Career Tools' : 'أدوات الذكاء الاصطناعي'}</h4>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.6rem;font-size:0.9rem">
              <li><a href="/tools/resume-builder" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">${isEn ? 'Resume Builder' : 'منشئ السيرة الذاتية'}</a></li>
              <li><a href="/tools/resume-analyzer" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-analyzer')">${isEn ? 'ATS Resume Checker' : 'فاحص ومحلل ATS'}</a></li>
              <li><a href="/tools/cover-letter-generator" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/tools/cover-letter-generator')">${isEn ? 'Cover Letter Generator' : 'مولد رسائل التقديم'}</a></li>
              <li><a href="/tools/interview-questions" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/tools/interview-questions')">${isEn ? 'Interview Prep' : 'مدرب أسئلة المقابلات'}</a></li>
              <li><a href="/tools/ats-keywords" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/tools/ats-keywords')">${isEn ? 'ATS Keywords Matcher' : 'مستخرج الكلمات المفتاحية'}</a></li>
            </ul>
          </div>

          <!-- Column 3: Platform Links -->
          <div>
            <h4 style="font-size:1rem;font-weight:700;color:white;margin-bottom:1rem">${isEn ? 'Quick Links' : 'روابط سريعة'}</h4>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.6rem;font-size:0.9rem">
              <li><a href="/blog" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">${isEn ? 'Career Blog' : 'المدونة والمقالات'}</a></li>
              <li><a href="/about" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/about')">${isEn ? 'About Us' : 'من نحن'}</a></li>
              <li><a href="/contact" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/contact')">${isEn ? 'Contact Us' : 'تواصل معنا'}</a></li>
              <li><a href="/admin-login" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/admin-login')">${isEn ? 'Admin Portal' : 'بوابة الإدارة'}</a></li>
            </ul>
          </div>

          <!-- Column 4: Legal & Privacy -->
          <div>
            <h4 style="font-size:1rem;font-weight:700;color:white;margin-bottom:1rem">${isEn ? 'Legal & Privacy' : 'الخصوصية والشروط'}</h4>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:0.6rem;font-size:0.9rem">
              <li><a href="/privacy" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/privacy')">${isEn ? 'Privacy Policy' : 'سياسة الخصوصية'}</a></li>
              <li><a href="/terms" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/terms')">${isEn ? 'Terms of Service' : 'شروط الخدمة'}</a></li>
              <li><a href="/contact" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/contact')">${isEn ? 'Help & Support' : 'المساعدة والدعم'}</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright Row -->
        <div style="border-top:1px solid rgba(255,255,255,0.08);padding-top:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;font-size:0.85rem;color:var(--color-text-muted)">
          <div>© ${new Date().getFullYear()} Factor Career. ${isEn ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</div>
          <div>Official Support: <a href="mailto:factorcareer@gmail.com" style="color:var(--color-primary-light)">factorcareer@gmail.com</a></div>
        </div>

      </div>
    </footer>
  `;
};

/* --- Central Unified Luxury AI Career Tools Data & Components --- */
window.CareerAI.getLuxuryTools = function(isEn) {
  const icons = window.CareerAI.icons || {};
  return [
    {
      id: 'resume-builder',
      category: 'cv',
      badge: isEn ? 'Flagship AI Builder' : 'الأداة الرئيسية المعتمدة',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      badgeTextColor: '#93c5fd',
      beaconColor: '#38bdf8',
      glowColor: '#3b82f6',
      glowShadow: 'rgba(59, 130, 246, 0.45)',
      laserBg: 'linear-gradient(90deg, #3b82f6, #60a5fa, #38bdf8)',
      iconGradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
      checkColor: '#60a5fa',
      checkBg: 'rgba(59, 130, 246, 0.2)',
      btnGradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #38bdf8 100%)',
      title: isEn ? 'AI Resume Builder & Styler' : 'منشئ السيرة الذاتية الذكي المطور',
      subtag: isEn ? 'ATS-Compliant Structure & 4 Pro Layouts' : 'متوافق 100% مع أنظمة الفرز الآلي وتصدير فوري',
      desc: isEn 
        ? 'Engineered to bypass applicant tracking systems (ATS). Features dynamic live styling, high-impact action verbs, score gauge, and instant PDF download.'
        : 'أنشئ سيرة ذاتية تنفيذية متوافقة 100% مع خوارزميات الفرز ATS مع 4 قوالب فخمة ومعاينة فورية ومقياس جودة حي وتصدير PDF مباشر مجاناً.',
      icon: icons.fileText || icons.resume || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      link: '/tools/resume-builder',
      features: isEn ? [
        '4 Executive Templates (Modern, Slate, Tech, Clean)',
        'Real-Time Live ATS Completeness Score & Gauge',
        'AI High-Impact Summary & Achievement Bullet Suggester'
      ] : [
        '4 قوالب تنفيذية عصرية متوافقة تماماً مع بوابات التوظيف العالمية',
        'مقياس فوري مباشر يحلل قوة واكتمال كل قسم بالسيرة',
        'صياغة الملخص المهني والإنجازات الملموسة بالذكاء الاصطناعي'
      ],
      metric: isEn ? 'Pass Rate: 99.2%' : 'نسبة اجتياز ATS: 99.2%',
      cta: isEn ? 'Launch Resume Builder 🚀' : 'ابدأ بناء سيرتك الذاتية 🚀'
    },
    {
      id: 'resume-analyzer',
      category: 'cv',
      badge: isEn ? '4D Deep Scanner' : 'فحص عميق رباعي الأبعاد',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeTextColor: '#6ee7b7',
      beaconColor: '#34d399',
      glowColor: '#10b981',
      glowShadow: 'rgba(16, 185, 129, 0.45)',
      laserBg: 'linear-gradient(90deg, #10b981, #34d399, #059669)',
      iconGradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      checkColor: '#34d399',
      checkBg: 'rgba(16, 185, 129, 0.2)',
      btnGradient: 'linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)',
      title: isEn ? 'AI ATS Resume Checker & Scanner' : 'محلل وفاحص السيرة الذاتية الذكي',
      subtag: isEn ? 'Job Benchmark & Critical Keyword Gap Fix' : 'مقارنة دقيقة مع الوصف الوظيفي والكلمات المفقودة',
      desc: isEn
        ? 'Deep scan your resume against job postings to calculate a 4-dimensional score dial, identify keyword gaps, and receive actionable fixes before applying.'
        : 'افحص مدى تطابق سيرتك الذاتية مع متطلبات الوظيفة الشاغرة واحصل على مؤشر تقييم دائري حي وقائمة الكلمات المفتاحية الناقصة لتصحيحها فوراً.',
      icon: icons.check || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      link: '/tools/resume-analyzer',
      features: isEn ? [
        '4-Dimension Match Score (Keywords, Experience, Formatting)',
        'Side-by-Side Matched vs Missing Keywords Matrix with 1-Click Copy',
        'Hiring Manager Priority Checklist Before Submitting'
      ] : [
        'تقييم توافق رباعي الأبعاد (الكلمات، الخبرات، التنسيق، المهارات التقنية)',
        'جدول مقارنة الكلمات المتوفرة والمفقودة مع زر نسخ فوري للنواقص',
        'توصيات تصحيحية ذات أولوية تضمن ترشيحك لمسؤول التوظيف'
      ],
      metric: isEn ? 'Score 90+ Target' : 'مستهدف توافق 90%+',
      cta: isEn ? 'Scan Resume with AI 🔍' : 'افحص سيرتك الذاتية الآن 🔍'
    },
    {
      id: 'cover-letter-generator',
      category: 'cv',
      badge: isEn ? 'Executive Pitch AI' : 'كاتب خطابات التقديم المرموقة',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      badgeTextColor: '#d8b4fe',
      beaconColor: '#c084fc',
      glowColor: '#8b5cf6',
      glowShadow: 'rgba(139, 92, 246, 0.45)',
      laserBg: 'linear-gradient(90deg, #8b5cf6, #c084fc, #ec4899)',
      iconGradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      checkColor: '#c084fc',
      checkBg: 'rgba(139, 92, 246, 0.2)',
      btnGradient: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%)',
      title: isEn ? 'AI Tailored Cover Letter Generator' : 'مولد خطابات التقديم الاحترافية',
      subtag: isEn ? 'Personalized Value Proposition in 5 Tones' : 'صياغة مقنعة مخصصة لكل شركة تضاعف فرص مقابلتك',
      desc: isEn
        ? 'Generate personalized, highly persuasive cover letters tailored to your target company and seniority in seconds. Choose from 5 tones with 1-click PDF download.'
        : 'ولّد خطابات تقديم استثنائية ومخصصة لكل شركة ووظيفة تبرز نقاط قوتك بثقة. يدعم 5 نبرات صياغة وتوليد ثنائي اللغة (عربي/إنجليزي) وتصدير فوري.',
      icon: icons.mail || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      link: '/tools/cover-letter-generator',
      features: isEn ? [
        '5 Distinct Writing Tones (Executive, Confident, Modern, Creative)',
        '3 Length Modes (Concise, Balanced, Comprehensive)',
        'Bilingual Output (Arabic & English) with Instant PDF/TXT'
      ] : [
        '5 نبرات كتابة مختلفة (تنفيذي رفيع، واثق، إبداعي، تقني، مختصر)',
        '3 أنماط للطول مع تحكم كامل بالتركيز على الإنجازات',
        'دعم كامل للغتين العربية والإنجليزية وتصدير فوري PDF/TXT'
      ],
      metric: isEn ? '3x Interview Call Rate' : 'مضاعفة استدعاء المقابلات',
      cta: isEn ? 'Generate Cover Letter ✍️' : 'ولّد خطاب التقديم الآن ✍️'
    },
    {
      id: 'interview-questions',
      category: 'prep',
      badge: isEn ? 'STAR Method Coach' : 'مدرب المقابلات بنموذج STAR',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeTextColor: '#fde68a',
      beaconColor: '#fbbf24',
      glowColor: '#f59e0b',
      glowShadow: 'rgba(245, 158, 11, 0.45)',
      laserBg: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f97316)',
      iconGradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
      checkColor: '#fbbf24',
      checkBg: 'rgba(245, 158, 11, 0.2)',
      btnGradient: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)',
      title: isEn ? 'AI Interview Questions & STAR Coach' : 'مدرب المقابلات الوظيفية بنموذج STAR',
      subtag: isEn ? 'Role-Specific Sim & Behavioral Model Answers' : 'إجابات نموذجية تفصيلية ومؤقت تدريب عملي',
      desc: isEn
        ? 'Ace technical and behavioral interviews with tailored questions for 50+ career roles. Includes STAR framework model answers, pro tips, and interactive practice timer.'
        : 'استعد لمقابلاتك بأقوى الأسئلة السلوكية والتقنية المتوقعة لمجالك ومستواك. يتضمن إجابات نموذجية بهيكل STAR ونصائح حصرية ومؤقت تفاعلي للتدريب.',
      icon: icons.interview || icons.users || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      link: '/tools/interview-questions',
      features: isEn ? [
        '50+ Career Tracks Adaptive Questions (Entry to Executive)',
        'Full STAR Framework Breakdown (Situation, Task, Action, Result)',
        'Built-in 2-Minute Practice Timer & Hiring Manager Insider Secrets'
      ] : [
        'أسئلة مخصصة لأكثر من 50 تخصصاً وظيفياً بمستويات متعددة',
        'تفكيك تفصيلي للإجابة النموذجية (الموقف، المهمة، الإجراء، النتيجة)',
        'مؤقت تدريب صوتي/ذهني لدقيقتين مع نصائح سرية خلف نية كل سؤال'
      ],
      metric: isEn ? '50+ Verified Roles' : 'أكثر من 50 مجال وظيفي',
      cta: isEn ? 'Practice Interview Coach 🎯' : 'تدرّب على المقابلات الآن 🎯'
    },
    {
      id: 'ats-keywords',
      category: 'prep',
      badge: isEn ? 'NLP Keyword Matcher' : 'مستخرج الكلمات المفتاحية بالذكاء الاصطناعي',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      badgeTextColor: '#a5f3fc',
      beaconColor: '#22d3ee',
      glowColor: '#06b6d4',
      glowShadow: 'rgba(6, 182, 212, 0.45)',
      laserBg: 'linear-gradient(90deg, #06b6d4, #38bdf8, #3b82f6)',
      iconGradient: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)',
      checkColor: '#22d3ee',
      checkBg: 'rgba(6, 182, 212, 0.2)',
      btnGradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #38bdf8 100%)',
      title: isEn ? 'AI ATS Keywords Matcher & Extractor' : 'مستخرج ومطابق الكلمات المفتاحية ATS',
      subtag: isEn ? 'Live Match Percentage & Skill Gap Discovery' : 'تحليل فوري لكثافة المهارات ونقاط القوة لسيرتك',
      desc: isEn
        ? 'Extract hard skills, technical requirements, and industry keywords from job postings. Compare them instantly against your resume with 1-click missing keywords export.'
        : 'استخرج المهارات التقنية والشهادات والكلمات الأكثر أهمية وتكراراً من أي إعلان وظيفي وقارنها فورياً مع سيرتك مع إمكانية نسخ الكلمات الناقصة بنقرة واحدة.',
      icon: icons.target || icons.skills || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      link: '/tools/ats-keywords',
      features: isEn ? [
        '4-Tier Categorization (Technical Skills, Soft Skills, Tools, Certs)',
        'Live Match Rate Meter against Pasted Resume Text',
        '1-Click Copy of Missing Priority Keywords for Instant Bullet Integration'
      ] : [
        'تصنيف رباعي متقدم (مهارات تقنية، كفاءات قيادية، أدوات، شهادات مهنية)',
        'مقياس نسبة التطابق الفوري بمقارنة نص السيرة مع الوصف الوظيفي',
        'نسخ فوري بنقرة واحدة لجميع الكلمات الناقصة لدمجها في نقاط سيرتك'
      ],
      metric: isEn ? 'Density Optimizer' : 'تعزيز الكثافة المفتاحية',
      cta: isEn ? 'Extract Keywords Now ⚡' : 'استخرج الكلمات المفتاحية ⚡'
    }
  ];
};

/* --- Render Single Luxury Rectangular Tool Card Helper --- */
window.CareerAI.components.renderLuxuryToolCard = function(tool, isEn, index) {
  return `
    <div class="luxury-tool-card luxury-tool-card--${tool.id} animate-on-scroll delay-${((index || 0) % 2) + 1}"
         style="--card-glow-color:${tool.glowColor}; --card-glow-shadow:${tool.glowShadow}; --card-laser-bg:${tool.laserBg};"
         onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
      
      <!-- Radiant Top Laser Light Bar -->
      <div class="luxury-tool-card__laser"></div>

      <!-- Ambient Glow Orb -->
      <div class="luxury-tool-card__glow-orb"></div>

      <!-- Top Header: Badge & Live Metric -->
      <div class="luxury-tool-card__header">
        <div class="luxury-tool-card__badge" style="background:${tool.badgeBg}; color:${tool.badgeTextColor};">
          <span class="luxury-tool-card__beacon" style="background:${tool.beaconColor};"></span>
          <span>${tool.badge}</span>
        </div>
        <div class="luxury-tool-card__metric">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          <span>${tool.metric}</span>
        </div>
      </div>

      <!-- Tool Identity Block: 3D Squircle Icon + Title -->
      <div class="luxury-tool-card__identity">
        <div class="luxury-tool-card__icon-squircle" style="background:${tool.iconGradient};">
          ${tool.icon}
        </div>
        <div class="luxury-tool-card__title-group">
          <h3 class="luxury-tool-card__title">${tool.title}</h3>
          <span class="luxury-tool-card__subtag">${tool.subtag}</span>
        </div>
      </div>

      <!-- Description -->
      <p class="luxury-tool-card__desc">
        ${tool.desc}
      </p>

      <!-- Inset Glass Feature Checklist Box -->
      <div class="luxury-tool-card__features-box">
        <div class="luxury-tool-card__features-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
          <span>${isEn ? 'Core AI Capabilities' : 'أبرز مميزات الأداة الذكية'}</span>
        </div>
        ${tool.features.map(f => `
          <div class="luxury-tool-card__feature-row">
            <span class="luxury-tool-card__check-disc" style="color:${tool.checkColor}; background:${tool.checkBg};">✓</span>
            <span>${f}</span>
          </div>
        `).join('')}
      </div>

      <!-- Radiant Executive CTA Button -->
      <div class="luxury-tool-card__action">
        <a href="${tool.link}" class="luxury-tool-card__btn" style="background:${tool.btnGradient}; box-shadow: 0 4px 18px ${tool.glowShadow};" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
          <span class="luxury-tool-card__btn-text">${tool.cta}</span>
          <span class="luxury-tool-card__btn-arrow">${isEn ? '→' : '←'}</span>
        </a>
      </div>

    </div>
  `;
};

/* --- Explore Other AI Career Tools Component (Shared across all 5 tool pages) --- */
window.CareerAI.components.renderOtherTools = function (currentSlug) {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const icons = window.CareerAI.icons || {};
  const allTools = window.CareerAI.getLuxuryTools(isEn);
  const otherTools = allTools.filter(t => t.id !== currentSlug);

  return `
    <div class="other-tools-section" style="margin-top:4rem;padding-top:2.5rem;border-top:1px solid var(--color-border-light)">
      <div style="text-align:center;margin-bottom:2rem">
        <span class="section__badge" style="display:inline-flex;align-items:center;gap:6px;margin-bottom:0.75rem">
          <span style="width:14px;height:14px;display:inline-flex">${icons.sparkles || '✨'}</span>
          ${isEn ? 'More AI Career Tools' : 'المزيد من أدوات الذكاء الاصطناعي'}
        </span>
        <h2 style="font-size:1.5rem;font-weight:800;color:var(--color-text);margin-bottom:0.5rem">
          ${isEn ? 'Explore Other AI Tools to Accelerate Your Career' : 'استكشف باقي الأدوات لتسريع نجاحك المهني'}
        </h2>
        <p style="color:var(--color-text-muted);font-size:0.95rem;max-width:550px;margin:0 auto">
          ${isEn ? 'All our AI tools are 100% free and work seamlessly together to land your next job.' : 'جميع أدواتنا مجانية بالكامل ومصممة للتكامل معاً لتحقيق أفضل نتيجة في رحلتك المهنية.'}
        </p>
      </div>

      <div class="luxury-tools-grid">
        ${otherTools.map((tool, idx) => window.CareerAI.components.renderLuxuryToolCard(tool, isEn, idx)).join('')}
      </div>
    </div>
  `;
};

