/* ============================================
   Factor Career - Shared Components (Header & Footer)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.components = {};

/* --- SVG Icons --- */
window.CareerAI.icons = {
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
window.CareerAI.components.renderHeader = function() {
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const langName = t('langName', 'English');

  return `
    <a href="#main-content" class="skip-link">${t('nav.home', 'Ø§Ù†ØªÙ‚Ù„ Ø¥Ù„Ù‰ Ø§Ù„Ù…Ø­ØªÙˆÙ‰')}</a>
    <header class="header" id="header">
      <div class="header__inner">
        <a href="/" class="header__logo" onclick="event.preventDefault();CareerAI.router.navigate('/')">
          <div class="header__logo-icon">FC</div>
          <div class="header__logo-text">Factor<span>Career</span></div>
        </a>

        <nav class="nav" aria-label="Main Navigation">
          <a href="/" class="nav__link" data-page="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©')}</a>
          <a href="/tools" class="nav__link" data-page="/tools" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.tools', 'Ø§Ù„Ø£Ø¯ÙˆØ§Øª')}</a>
          <a href="/jobs" class="nav__link" data-page="/jobs" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">${t('nav.jobs', 'Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„ÙØ±Øµ')}</a>
          <a href="/blog" class="nav__link" data-page="/blog" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">${t('nav.blog', 'Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©')}</a>
          <a href="/about" class="nav__link" data-page="/about" onclick="event.preventDefault();CareerAI.router.navigate('/about')">${t('nav.about', 'Ù…Ù† Ù†Ø­Ù†')}</a>
          <a href="/contact" class="nav__link" data-page="/contact" onclick="event.preventDefault();CareerAI.router.navigate('/contact')">${t('nav.contact', 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§')}</a>
        </nav>

        <div style="display:flex;align-items:center;gap:var(--space-3)">
          <!-- Language Switcher Button -->
          <button class="lang-btn" onclick="CareerAI.i18n.toggleLang()" title="ØªØºÙŠÙŠØ± Ø§Ù„Ù„ØºØ© / Change Language" aria-label="Change Language">
            <span style="width:15px;height:15px;display:inline-flex">${icons.globe}</span>
            <span>${langName}</span>
          </button>

          <a href="/tools" class="btn btn--primary btn--sm nav__cta" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.startNow', 'Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†')}</a>

          <button class="menu-toggle" id="menuToggle" aria-label="Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©" aria-expanded="false">
            <span class="menu-toggle__line"></span>
            <span class="menu-toggle__line"></span>
            <span class="menu-toggle__line"></span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-overlay" id="mobileOverlay"></div>
    <nav class="mobile-nav" id="mobileNav" aria-label="Ø§Ù„Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø¬Ø§Ù†Ø¨ÙŠØ©">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);padding-bottom:var(--space-3);border-bottom:1px solid var(--color-border-light)">
        <div class="header__logo-text">Factor<span>Career</span></div>
        <button class="lang-btn" onclick="CareerAI.i18n.toggleLang();CareerAI.closeMobileMenu()">
          <span style="width:15px;height:15px;display:inline-flex">${icons.globe}</span>
          <span>${langName}</span>
        </button>
      </div>

      <a href="/" class="mobile-nav__link" data-page="/" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/')">${t('nav.home', 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©')}</a>
      <a href="/tools" class="mobile-nav__link" data-page="/tools" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/tools')">${t('nav.tools', 'Ø§Ù„Ø£Ø¯ÙˆØ§Øª')}</a>
      <a href="/jobs" class="mobile-nav__link" data-page="/jobs" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/jobs')">${t('nav.jobs', 'Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„ÙØ±Øµ')}</a>
      <a href="/blog" class="mobile-nav__link" data-page="/blog" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/blog')">${t('nav.blog', 'Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©')}</a>
      <a href="/about" class="mobile-nav__link" data-page="/about" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/about')">${t('nav.about', 'Ù…Ù† Ù†Ø­Ù†')}</a>
      <a href="/contact" class="mobile-nav__link" data-page="/contact" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/contact')">${t('nav.contact', 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§')}</a>
      
      <div class="mobile-nav__cta">
        <a href="/tools" class="btn btn--primary btn--full" onclick="event.preventDefault();CareerAI.closeMobileMenu();CareerAI.router.navigate('/tools')">${t('nav.startNow', 'Ø§Ø¨Ø¯Ø£ Ø§Ù„Ø¢Ù†')}</a>
        <a href="https://www.profitableratecpmnetwork.com/kkyq5vxu?key=545c1203bb7c2b234427dd5282b9477c" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--full" style="margin-top:0.75rem;border-color:rgba(99,102,241,0.5);background:rgba(99,102,241,0.15);color:#a5b4fc;font-weight:700;">â­ ${isEn ? 'Partner Career Offers â†—' : 'Ø¹Ø±ÙˆØ¶ Ø§Ù„ØªÙˆØ¸ÙŠÙ ÙˆØ§Ù„ÙØ±Øµ â†—'}</a>
      </div>
    </nav>
  `;
};

/* --- Footer Component --- */
window.CareerAI.components.renderFooter = function() {
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  return `

    
    <!-- Adsterra 300x250 Display Banner (Safe SPA Iframe) -->
    <div class="adsterra-banner-wrapper" style="text-align:center;padding:2rem 1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(15,23,42,0.6);border-top:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);">
      <span style="font-size:0.75rem;color:var(--color-text-muted,#94a3b8);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${isEn ? 'Sponsored Ad' : 'Ø¥Ø¹Ù„Ø§Ù† Ù…ÙÙ…ÙˆÙŽÙ‘Ù„'}</span>
      <iframe src="/ads/display-banner.html" width="300" height="280" style="border:none;overflow:hidden;display:block;margin:0 auto;" scrolling="no" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture"></iframe>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__brand">
            <a href="/" class="header__logo" onclick="event.preventDefault();CareerAI.router.navigate('/')">
              <div class="header__logo-icon">FC</div>
              <div class="header__logo-text" style="color:white">Factor<span>Career</span></div>
            </a>
            <p>${t('footer.brandDesc', 'Ù†Ø³Ø§Ø¹Ø¯ Ø§Ù„Ø¨Ø§Ø­Ø«ÙŠÙ† Ø¹Ù† Ø¹Ù…Ù„ ÙÙŠ Ø¨Ù†Ø§Ø¡ Ù…Ø³ÙŠØ±Ø© Ù…Ù‡Ù†ÙŠØ© Ù†Ø§Ø¬Ø­Ø© Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… Ù…Ù†ØµØ© Factor Career ÙˆØ£Ø­Ø¯Ø« Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ù…Ø¬Ø§Ù†ÙŠØ©.')}</p>
            <div class="footer__social">
              <a href="#" class="footer__social-link" aria-label="Twitter">${icons.twitter}</a>
              <a href="#" class="footer__social-link" aria-label="LinkedIn">${icons.linkedin}</a>
              <a href="#" class="footer__social-link" aria-label="GitHub">${icons.github}</a>
            </div>
          </div>

          <div>
            <h3 class="footer__title">${t('footer.quickLinks', 'Ø±ÙˆØ§Ø¨Ø· Ø³Ø±ÙŠØ¹Ø©')}</h3>
            <div class="footer__links">
              <a href="/" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©')}</a>
              <a href="/tools" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.tools', 'Ø§Ù„Ø£Ø¯ÙˆØ§Øª')}</a>
              <a href="/jobs" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">${t('nav.jobs', 'Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„ÙØ±Øµ')}</a>
              <a href="/blog" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">${t('nav.blog', 'Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©')}</a>
              <a href="/about" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/about')">${t('nav.about', 'Ù…Ù† Ù†Ø­Ù†')}</a>
            </div>
          </div>

          <div>
            <h3 class="footer__title">${t('footer.toolsTitle', 'Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ø°ÙƒÙŠØ©')}</h3>
            <div class="footer__links">
              <a href="/tools/resume-builder" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">${isEn ? 'AI Resume Builder' : 'Ù…Ù†Ø´Ø¦ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ©'}</a>
              <a href="/tools/resume-analyzer" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-analyzer')">${isEn ? 'ATS Resume Checker' : 'Ù…Ø­Ù„Ù„ ÙˆÙØ§Ø­Øµ Ø§Ù„Ø³ÙŠØ±Ø© ATS'}</a>
              <a href="/tools/cover-letter-generator" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools/cover-letter-generator')">${isEn ? 'Cover Letter Generator' : 'Ù…ÙˆÙ„Ø¯ Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„ØªÙ‚Ø¯ÙŠÙ…'}</a>
              <a href="/tools/interview-questions" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools/interview-questions')">${isEn ? 'Interview Questions Coach' : 'Ù…ÙˆÙ„Ø¯ Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ù…Ù‚Ø§Ø¨Ù„Ø§Øª'}</a>
              <a href="/tools/ats-keywords" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/tools/ats-keywords')">${isEn ? 'ATS Keywords Matcher' : 'Ù…Ø³ØªØ®Ø±Ø¬ ÙƒÙ„Ù…Ø§Øª ATS'}</a>
            </div>
          </div>

          <div>
            <h3 class="footer__title">${t('footer.contactTitle', 'ØªÙˆØ§ØµÙ„ Ù…Ø¹Ù†Ø§')}</h3>
            <div class="footer__links">
              <a href="mailto:careerfactor@gmail.com" class="footer__link">
                <span style="width:16px;height:16px;display:inline-flex">${icons.mail}</span>
                careerfactor@gmail.com
              </a>
              <a href="tel:+212642394756" class="footer__link" dir="ltr" style="text-align:inherit">
                <span style="width:16px;height:16px;display:inline-flex">${icons.phone}</span>
                +212 642 394 756
              </a>
              <a href="/contact" class="footer__link" onclick="event.preventDefault();CareerAI.router.navigate('/contact')">
                <span style="width:16px;height:16px;display:inline-flex">${icons.mapPin}</span>
                ${t('footer.location', 'Ø§Ù„Ù…Ù…Ù„ÙƒØ© Ø§Ù„Ù…ØºØ±Ø¨ÙŠØ©ØŒ Ø³ÙˆÙ‚ Ø§Ù„Ø³Ø¨Øª Ø£ÙˆÙ„Ø§Ø¯ Ø§Ù„Ù†Ù…Ø©')}
              </a>
            </div>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">Â© ${new Date().getFullYear()} Factor Career. ${t('footer.rights', 'Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø­Ù‚ÙˆÙ‚ Ù…Ø­ÙÙˆØ¸Ø©.')}</p>
          <div class="footer__bottom-links">
            <a href="/privacy" class="footer__bottom-link" onclick="event.preventDefault();CareerAI.router.navigate('/privacy')">${t('footer.privacy', 'Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©')}</a>
            <a href="/terms" class="footer__bottom-link" onclick="event.preventDefault();CareerAI.router.navigate('/terms')">${t('footer.terms', 'Ø´Ø±ÙˆØ· Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù…')}</a>
          </div>
        </div>
      </div>
    </footer>

    <button class="back-to-top" id="backToTop" aria-label="Back to top">
      <span style="width:20px;height:20px;display:inline-flex">${icons.arrowUp}</span>
    </button>
  `;
};



/* --- Adsterra Native Banner Responsive Height Sync --- */
window.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'adsterra-native-resize' && typeof event.data.height === 'number') {
    var iframes = document.querySelectorAll('iframe[src*="native-banner.html"]');
    iframes.forEach(function(f) {
      var newHeight = event.data.height + 15;
      f.style.height = newHeight + 'px';
      f.height = newHeight;
    });
  }
});
