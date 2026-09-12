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

  return `
    <a href="#main-content" class="skip-link">${t('nav.home', 'انتقل إلى المحتوى')}</a>
    <header class="header" id="header" role="banner">
      <div class="container header__inner">
        
        <!-- Brand Logo -->
        <a href="/" class="header__logo" onclick="event.preventDefault();CareerAI.router.navigate('/')" aria-label="Factor Career Home">
          <span class="logo__text">Factor<span class="logo__highlight">Career</span></span>
          <span class="logo__badge">FC</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="header__nav" id="main-nav" role="navigation" aria-label="Main Navigation">
          <a href="/" class="nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
          <a href="/tools" class="nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.tools', 'الأدوات')}</a>
          <a href="/jobs" class="nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">${t('nav.jobs', 'الوظائف والفرص')}</a>
          <a href="/blog" class="nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">${t('nav.blog', 'المدونة')}</a>
          <a href="/about" class="nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/about')">${t('nav.about', 'من نحن')}</a>
          <a href="/contact" class="nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/contact')">${t('nav.contact', 'تواصل معنا')}</a>
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
          <button class="mobile-toggle" id="mobile-toggle" onclick="CareerAI.toggleMobileMenu()" aria-label="Toggle mobile menu" aria-expanded="false">
            <span class="mobile-toggle__bar"></span>
            <span class="mobile-toggle__bar"></span>
            <span class="mobile-toggle__bar"></span>
          </button>

        </div>

      </div>

      <!-- Mobile Dropdown Navigation -->
      <div class="mobile-nav" id="mobile-nav" role="navigation" aria-label="Mobile Navigation">
        <div class="container mobile-nav__inner">
          <a href="/" class="mobile-nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/');CareerAI.closeMobileMenu()">${t('nav.home', 'الرئيسية')}</a>
          <a href="/tools" class="mobile-nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools');CareerAI.closeMobileMenu()">${t('nav.tools', 'الأدوات الذكية')}</a>
          <a href="/jobs" class="mobile-nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/jobs');CareerAI.closeMobileMenu()">${t('nav.jobs', 'الوظائف والفرص')}</a>
          <a href="/blog" class="mobile-nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/blog');CareerAI.closeMobileMenu()">${t('nav.blog', 'المدونة والمقالات')}</a>
          <a href="/about" class="mobile-nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/about');CareerAI.closeMobileMenu()">${t('nav.about', 'من نحن')}</a>
          <a href="/contact" class="mobile-nav__link" onclick="event.preventDefault();CareerAI.router.navigate('/contact');CareerAI.closeMobileMenu()">${t('nav.contact', 'تواصل معنا')}</a>
          <div class="mobile-nav__actions" style="margin-top:1rem;display:flex;flex-direction:column;gap:0.75rem">
            <a href="/tools/resume-builder" class="btn btn--primary btn--block" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder');CareerAI.closeMobileMenu()">
              ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
            </a>
          </div>
        </div>
      </div>
    </header>
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
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem">
              <span style="font-size:1.4rem;font-weight:800;color:white">Factor<span style="color:var(--color-primary-light)">Career</span></span>
              <span class="logo__badge" style="font-size:0.7rem;padding:2px 6px;border-radius:4px;background:var(--color-primary);color:white">FC</span>
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
              <li><a href="/jobs" style="color:var(--color-text-muted)" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">${isEn ? 'Verified Jobs' : 'الوظائف والفرص'}</a></li>
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
