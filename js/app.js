/* ============================================
   CareerAI - Main App & SPA Router
   ============================================ */

window.CareerAI = window.CareerAI || {};

// Prevent browser from auto-scrolling down on page load or refresh
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
try { window.scrollTo(0, 0); } catch (e) {}
window.addEventListener('load', function() {
  try { window.scrollTo(0, 0); } catch (e) {}
});

/* --- Router --- */
window.CareerAI.router = {
  routes: {
    '/': { render: window.CareerAI.pages.home, seo: window.CareerAI.pages.homeSEO },
    '/tools': { render: window.CareerAI.pages.tools, seo: window.CareerAI.pages.toolsSEO },
    '/tools/resume-builder': { render: window.CareerAI.pages.resumeBuilder, seo: window.CareerAI.pages.resumeBuilderSEO },
    '/tools/resume-analyzer': { render: window.CareerAI.pages.resumeAnalyzer, seo: window.CareerAI.pages.resumeAnalyzerSEO },
    '/tools/cover-letter-generator': { render: window.CareerAI.pages.coverLetterGenerator, seo: window.CareerAI.pages.coverLetterGeneratorSEO },
    '/tools/interview-questions': { render: window.CareerAI.pages.interviewQuestions, seo: window.CareerAI.pages.interviewQuestionsSEO },
    '/tools/ats-keywords': { render: window.CareerAI.pages.atsKeywords, seo: window.CareerAI.pages.atsKeywordsSEO },
    '/blog': { render: window.CareerAI.pages.blog, seo: window.CareerAI.pages.blogSEO },
    '/about': { render: window.CareerAI.pages.about, seo: window.CareerAI.pages.aboutSEO },
    '/contact': { render: window.CareerAI.pages.contact, seo: window.CareerAI.pages.contactSEO },
    '/privacy': { render: window.CareerAI.pages.privacy, seo: window.CareerAI.pages.privacySEO },
    '/terms': { render: window.CareerAI.pages.terms, seo: window.CareerAI.pages.termsSEO },
    '/admin/login': { render: window.CareerAI.pages.adminLogin, seo: { title: 'تسجيل دخول المدير | Factor Career', description: 'صفحة تسجيل دخول المدير' } },
    '/admin-login': { render: window.CareerAI.pages.adminLogin, seo: { title: 'تسجيل دخول المدير | Factor Career', description: 'صفحة تسجيل دخول المدير' } },
    '/admin': { render: window.CareerAI.pages.adminDashboard, seo: { title: 'لوحة تحكم المدير | Factor Career', description: 'لوحة تحكم إدارة المحتوى' } }
  },

  init: function() {
    // Backward compatibility: redirect old hash URLs to clean URLs
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      const cleanPath = window.location.hash.slice(1);
      window.history.replaceState(null, '', cleanPath);
    }

    window.addEventListener('popstate', () => this.handleRoute());
    this.handleRoute();
  },

  navigate: function(path) {
    window.history.pushState(null, '', path);
    this.handleRoute();
  },

  handleRoute: function() {
    try {
      let hash = window.location.pathname || '/';
      hash = hash.split('?')[0];
      
      // Decode URI components in case of encoded characters
      try {
        hash = decodeURIComponent(hash);
      } catch (e) {}

      // Normalize trailing slash (e.g. /tools/interview-questions/ -> /tools/interview-questions)
      if (hash.length > 1 && hash.endsWith('/')) {
        hash = hash.slice(0, -1);
      }

      // Check if path is dynamic article detail: /blog/slug-name
      let route = null;
      let articleSlug = null;

      if (hash.startsWith('/blog/') && hash !== '/blog') {
        articleSlug = hash.replace('/blog/', '').replace(/\/$/, '');
        route = {
          render: () => window.CareerAI.pages.article(articleSlug),
          getSEO: () => {
            const art = window.CareerAI.db.getArticleBySlug(articleSlug);
            if (art) {
              return {
                title: (art.metaTitle || art.title) + ' | Factor Career',
                description: art.metaDescription || art.excerpt,
                keywords: art.keywords || 'Career Tips, Factor Career'
              };
            }
            return { title: 'Article Not Found | Factor Career', description: '' };
          }
        };
      } else {
        route = this.routes[hash] || this.routes['/'];
      }

      const mainElement = document.getElementById('main-content');
      if (mainElement && route && typeof route.render === 'function') {
        mainElement.innerHTML = `<div class="page-transition">${route.render()}</div>`;
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        // Update SEO
        let seoData = route.getSEO ? route.getSEO() : route.seo;
        if (typeof seoData === 'function') seoData = seoData();
        this.updateSEO(seoData, hash);

        // Highlight active navigation link
        this.updateActiveNav(hash);

        // Manage Floating Back Button for all non-home pages
        this.updateBackButton(hash);

        // Re-initialize animations
        if (window.CareerAI.initAnimations) {
          window.CareerAI.initAnimations();
        }

        // Enforce rigid ad dimensions immediately on page render
        if (window.CareerAI.enforceAdDimensions) {
          window.CareerAI.enforceAdDimensions();
        }

        // Re-push AdSense units on new page
        if (window.CareerAI.initAdSense) {
          window.CareerAI.initAdSense();
        }
      }
    } catch (err) {
      console.error('Router navigation error:', err);
    }
  },

  updateBackButton: function(hash) {
    let backBtn = document.getElementById('floatingBackBtn');
    const isSubPage = hash && hash !== '/' && hash !== '';
    const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
    
    if (isSubPage) {
      if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.id = 'floatingBackBtn';
        backBtn.className = 'floating-back-btn';
        backBtn.setAttribute('aria-label', t('common.back', 'الرجوع للخلف'));
        backBtn.setAttribute('title', t('common.back', 'الرجوع للصفحة السابقة'));
        backBtn.onclick = () => window.CareerAI.goBack();
        backBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;display:inline-flex;transform:rotate(180deg)"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          <span>${t('common.back', 'رجوع')}</span>
        `;
        document.body.appendChild(backBtn);
      } else {
        backBtn.style.display = 'inline-flex';
        const span = backBtn.querySelector('span');
        if (span) span.innerText = t('common.back', 'رجوع');
      }
    } else if (backBtn) {
      backBtn.style.display = 'none';
    }
  },

  updateSEO: function(seo, hash) {
    if (!seo) return;
    const currentUrl = window.location.origin + (hash || '/');
    const lang = window.CareerAI.i18n ? window.CareerAI.i18n.getLang() : 'ar';

    // HTML Lang & Dir
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' ? 'rtl' : 'ltr');

    // Title
    document.title = seo.title;
    
    // Meta title
    let metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle) metaTitle.setAttribute('content', seo.title);

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description || '');

    // Meta keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (metaKw) metaKw.setAttribute('content', seo.keywords || 'Factor Career, resume, ATS, jobs');

    // Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title || '');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description || '');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

    // Twitter Card
    let twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', seo.title || '');

    let twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', seo.description || '');

    let twUrl = document.querySelector('meta[property="twitter:url"]');
    if (twUrl) twUrl.setAttribute('content', currentUrl);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);
  },

  updateActiveNav: function(path) {
    if (!path) path = (typeof window !== 'undefined' && window.location.pathname) ? window.location.pathname : '/';
    try { path = decodeURIComponent(path); } catch(e) {}
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');
    navLinks.forEach(link => {
      const href = link.getAttribute('data-nav') || link.getAttribute('href') || '';
      let isActive = false;
      if (href === '/') {
        isActive = (path === '/' || path === '');
      } else if (href !== '') {
        isActive = (path === href || path.startsWith(href + '/'));
      }
      if (isActive) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }
};

/* --- Accordion Toggle --- */
window.CareerAI.toggleAccordion = function(headerBtn) {
  const item = headerBtn.closest('.accordion__item');
  const body = item.querySelector('.accordion__body');
  const isOpen = item.classList.contains('active');

  const accordion = item.closest('.accordion');
  accordion.querySelectorAll('.accordion__item').forEach(acc => {
    acc.classList.remove('active');
    const accBody = acc.querySelector('.accordion__body');
    if (accBody) accBody.style.maxHeight = null;
  });

  if (!isOpen) {
    item.classList.add('active');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
};


/* --- Anti-Morphing & Anti-CLS Ad Enforcer ---
 * Permanently locks ad containers across all pages to their exact design dimensions,
 * neutralizing any dynamic height expansion or inline style hijacking by Google AdSense scripts.
 */
window.CareerAI.enforceAdDimensions = function() {
  if (window.CareerAI._isEnforcingAds) return;
  window.CareerAI._isEnforcingAds = true;
  try {
    var isMobile = window.innerWidth <= 768;

    // 1. Leaderboards & Banners (728x90 desktop / 60px mobile)
    var leaderboards = document.querySelectorAll('.ad-frame-leaderboard, .ad-frame-banner');
    for (var i = 0; i < leaderboards.length; i++) {
      var lb = leaderboards[i];
      var wrapH = isMobile ? '100px' : '135px';
      lb.style.setProperty('height', wrapH, 'important');
      lb.style.setProperty('max-height', wrapH, 'important');
      lb.style.setProperty('min-height', wrapH, 'important');
      lb.style.setProperty('overflow', 'hidden', 'important');
      lb.style.setProperty('box-sizing', 'border-box', 'important');
      lb.style.setProperty('contain', 'size layout paint', 'important');

      var inner = lb.querySelector('.ad-frame-inner');
      if (inner) {
        var innerH = isMobile ? '60px' : '90px';
        inner.style.setProperty('height', innerH, 'important');
        inner.style.setProperty('max-height', innerH, 'important');
        inner.style.setProperty('min-height', innerH, 'important');
        inner.style.setProperty('overflow', 'hidden', 'important');
        inner.style.setProperty('box-sizing', 'border-box', 'important');
        inner.style.setProperty('contain', 'size layout paint', 'important');
      }

      var innerChildren = lb.querySelectorAll('ins.adsbygoogle, iframe, div[id^="aswift_"]');
      for (var j = 0; j < innerChildren.length; j++) {
        var ch = innerChildren[j];
        var chH = isMobile ? '60px' : '90px';
        ch.style.setProperty('max-height', chH, 'important');
        ch.style.setProperty('overflow', 'hidden', 'important');
        if (ch.tagName === 'IFRAME') {
          ch.style.setProperty('height', chH, 'important');
        }
      }
    }

    // 2. Rectangles (300x250)
    var rectangles = document.querySelectorAll('.ad-frame-rectangle');
    for (var k = 0; k < rectangles.length; k++) {
      var rect = rectangles[k];
      rect.style.setProperty('height', '315px', 'important');
      rect.style.setProperty('max-height', '315px', 'important');
      rect.style.setProperty('min-height', '315px', 'important');
      rect.style.setProperty('overflow', 'hidden', 'important');
      rect.style.setProperty('box-sizing', 'border-box', 'important');
      rect.style.setProperty('contain', 'layout paint', 'important');

      var rInner = rect.querySelector('.ad-frame-inner');
      if (rInner) {
        rInner.style.setProperty('height', '250px', 'important');
        rInner.style.setProperty('max-height', '250px', 'important');
        rInner.style.setProperty('min-height', '250px', 'important');
        rInner.style.setProperty('overflow', 'hidden', 'important');
        rInner.style.setProperty('box-sizing', 'border-box', 'important');
        rInner.style.setProperty('contain', 'size layout paint', 'important');
      }

      var rChildren = rect.querySelectorAll('ins.adsbygoogle, iframe, div[id^="aswift_"]');
      for (var l = 0; l < rChildren.length; l++) {
        var rCh = rChildren[l];
        rCh.style.setProperty('max-height', '250px', 'important');
        rCh.style.setProperty('overflow', 'hidden', 'important');
        if (rCh.tagName === 'IFRAME') {
          rCh.style.setProperty('height', '250px', 'important');
        }
      }
    }

    // 3. Skyscrapers (300x600)
    var skyscrapers = document.querySelectorAll('.ad-frame-skyscraper');
    for (var m = 0; m < skyscrapers.length; m++) {
      var sky = skyscrapers[m];
      sky.style.setProperty('height', '665px', 'important');
      sky.style.setProperty('max-height', '665px', 'important');
      sky.style.setProperty('min-height', '665px', 'important');
      sky.style.setProperty('overflow', 'hidden', 'important');
      sky.style.setProperty('box-sizing', 'border-box', 'important');
      sky.style.setProperty('contain', 'layout paint', 'important');

      var sInner = sky.querySelector('.ad-frame-inner');
      if (sInner) {
        sInner.style.setProperty('height', '600px', 'important');
        sInner.style.setProperty('max-height', '600px', 'important');
        sInner.style.setProperty('min-height', '600px', 'important');
        sInner.style.setProperty('overflow', 'hidden', 'important');
        sInner.style.setProperty('box-sizing', 'border-box', 'important');
        sInner.style.setProperty('contain', 'size layout paint', 'important');
      }

      var sChildren = sky.querySelectorAll('ins.adsbygoogle, iframe, div[id^="aswift_"]');
      for (var n = 0; n < sChildren.length; n++) {
        var sCh = sChildren[n];
        sCh.style.setProperty('max-height', '600px', 'important');
        sCh.style.setProperty('overflow', 'hidden', 'important');
        if (sCh.tagName === 'IFRAME') {
          sCh.style.setProperty('height', '600px', 'important');
        }
      }
    }
  } finally {
    window.CareerAI._isEnforcingAds = false;
  }
};

// Global MutationObserver to intercept any runtime style modifications
if (typeof window !== 'undefined' && window.MutationObserver && !window.CareerAI._adObserver) {
  window.CareerAI._adObserver = new MutationObserver(function(mutations) {
    if (window.CareerAI._isEnforcingAds) return;
    for (var i = 0; i < mutations.length; i++) {
      var target = mutations[i].target;
      if (target && target.nodeType === 1) {
        if (target.classList && (
          target.classList.contains('ad-frame-wrapper') ||
          target.classList.contains('ad-frame-inner') ||
          target.classList.contains('adsbygoogle') ||
          target.tagName === 'IFRAME'
        )) {
          window.CareerAI.enforceAdDimensions();
          break;
        }
      }
    }
  });

  var initAdObs = function() {
    if (document.body && window.CareerAI._adObserver) {
      window.CareerAI._adObserver.observe(document.body, {
        attributes: true,
        attributeFilter: ['style', 'data-ad-status', 'data-adsbygoogle-status'],
        subtree: true,
        childList: true
      });
      window.CareerAI.enforceAdDimensions();
    }
  };
  if (document.body) {
    initAdObs();
  } else {
    document.addEventListener('DOMContentLoaded', initAdObs);
  }
  window.addEventListener('resize', window.CareerAI.enforceAdDimensions);
}

/* --- Google AdSense SPA Re-initializer --- */
window.CareerAI.initAdSense = function() {
  window.CareerAI.enforceAdDimensions();
  setTimeout(function() {
    // Push all new (un-initialized) adsbygoogle units
    var ads = document.querySelectorAll('.adsbygoogle');
    ads.forEach(function(ad) {
      if (!ad.getAttribute('data-adsbygoogle-status')) {
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
      }
    });
    window.CareerAI.enforceAdDimensions();
    // Check sticky bottom ad unit
    var sticky = document.getElementById('stickyBottomAd') || document.getElementById('adsense-sticky-bottom');
    if (sticky) {
      var stickyIns = sticky.querySelector('ins.adsbygoogle');
      if (stickyIns) {
        var checkStatus = function() {
          var status = stickyIns.getAttribute('data-ad-status');
          var iframe = stickyIns.querySelector('iframe');
          if (status === 'filled' && iframe && iframe.offsetHeight > 30) {
            sticky.classList.add('filled');
          }
        };
        checkStatus();
        try {
          var observer = new MutationObserver(checkStatus);
          observer.observe(stickyIns, { attributes: true, attributeFilter: ['data-ad-status'] });
        } catch(e) {}
      }
    }
  }, 300);
};

/* --- Foldable Sticky Bottom Banner Handler --- */
window.CareerAI.toggleStickyAd = function() {
  // Use the outer wrapper so the toggle button (sibling of the ad) is never clipped
  const outer = document.getElementById('stickyBottomOuter');
  const arrow = document.getElementById('stickyAdArrow');
  const text = document.getElementById('stickyAdText');
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  
  if (outer) {
    const isCollapsed = outer.classList.toggle('collapsed');
    if (arrow) {
      arrow.textContent = isCollapsed ? '▲' : '▼';
    }
    if (text) {
      if (isCollapsed) {
        text.textContent = isEn ? 'Show Ad' : 'إظهار الإعلان';
      } else {
        text.textContent = isEn ? 'Hide Ad' : 'طي الإعلان';
      }
    }
  }
};

window.CareerAI.toggleBottomAd = function() {
  window.CareerAI.toggleStickyAd();
};

/* --- Mobile Menu Handlers --- */
window.CareerAI.toggleMobileMenu = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const toggle = document.getElementById('menuToggle') || document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobileNav') || document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobileOverlay');

  const isActive = toggle?.classList.contains('active');

  if (isActive) {
    window.CareerAI.closeMobileMenu();
  } else {
    toggle?.classList.add('active');
    toggle?.setAttribute('aria-expanded', 'true');
    nav?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.CareerAI.closeMobileMenu = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const toggle = document.getElementById('menuToggle') || document.getElementById('mobile-toggle');
  const nav = document.getElementById('mobileNav') || document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobileOverlay');

  if (toggle) {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (nav) nav.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

/* --- Intersection Observer Animations --- */
window.CareerAI.initAnimations = function() {
  const animatableElements = document.querySelectorAll('.animate-on-scroll');
  
  const checkVisibility = (el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 1.15) {
      el.classList.add('visible');
      return true;
    }
    return false;
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '50px' });

    animatableElements.forEach(el => {
      if (!checkVisibility(el)) {
        observer.observe(el);
      }
    });
  } else {
    animatableElements.forEach(el => el.classList.add('visible'));
  }
};

/* --- Global Event Listeners & Boot --- */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n system first (detects language & renders initial header/footer)
  try {
    if (window.CareerAI.i18n) {
      window.CareerAI.i18n.init();
    }
  } catch(err) {
    console.error('Error during i18n.init:', err);
  }

  // Setup Mobile Menu Events: only close on backdrop click
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('#mobileOverlay')) {
      window.CareerAI.closeMobileMenu(e);
    }
  });

  // Setup Header Scroll Effect & Back To Top Button
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
          header?.classList.add('scrolled');
        } else {
          header?.classList.remove('scrolled');
        }

        if (scrollY > 400) {
          backToTop?.classList.add('visible');
        } else {
          backToTop?.classList.remove('visible');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Initialize Router
  try {
    if (window.CareerAI.router) {
      window.CareerAI.router.init();
    }
  } catch(err) {
    console.error('Error during router.init:', err);
    var main = document.getElementById('main-content');
    if (main && window.CareerAI.pages && window.CareerAI.pages.home) {
      main.innerHTML = window.CareerAI.pages.home();
    }
  }
});

/* --- Global Go Back Handler --- */
window.CareerAI.goBack = function() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.CareerAI.router.navigate('/');
  }
};


