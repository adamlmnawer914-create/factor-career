/* ============================================
   CareerAI - Main App & SPA Router
   ============================================ */

window.CareerAI = window.CareerAI || {};

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
    '/admin': { render: window.CareerAI.pages.adminDashboard, seo: { title: 'لوحة تحكم المدير | Factor Career', description: 'لوحة تحكم إدارة المحتوى' } }
  },

  init: function() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  },

  navigate: function(path) {
    window.location.hash = '#' + path;
  },

  handleRoute: function() {
    let hash = window.location.hash.slice(1) || '/';
    hash = hash.split('?')[0];

    // Check if path is dynamic article detail: /blog/slug-name
    let route = null;
    let articleSlug = null;

    if (hash.startsWith('/blog/') && hash !== '/blog') {
      articleSlug = hash.replace('/blog/', '');
      route = {
        render: () => window.CareerAI.pages.article(articleSlug),
        getSEO: () => {
          const art = window.CareerAI.db.getArticleBySlug(articleSlug);
          if (art) {
            return {
              title: art.metaTitle || art.title + ' | Factor Career',
              description: art.metaDescription || art.excerpt,
              keywords: art.keywords || 'مقالات, Factor Career'
            };
          }
          return { title: 'المقال غير موجود | Factor Career', description: '' };
        }
      };
    } else {
      route = this.routes[hash] || this.routes['/'];
    }

    const mainElement = document.getElementById('main-content');
    if (mainElement) {
      mainElement.innerHTML = `<div class="page-transition">${route.render()}</div>`;
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Update SEO
      const seoData = route.getSEO ? route.getSEO() : route.seo;
      this.updateSEO(seoData, hash);

      // Highlight active navigation link
      this.updateActiveNav(hash);

      // Manage Floating Back Button for all non-home pages
      this.updateBackButton(hash);

      // Re-initialize animations
      window.CareerAI.initAnimations();

      // Dynamically initialize AdSense units for current SPA page
      window.CareerAI.initAdSense();
    }
  },

  updateBackButton: function(hash) {
    let backBtn = document.getElementById('floatingBackBtn');
    const isSubPage = hash && hash !== '/' && hash !== '';
    
    if (isSubPage) {
      if (!backBtn) {
        backBtn = document.createElement('button');
        backBtn.id = 'floatingBackBtn';
        backBtn.className = 'floating-back-btn';
        backBtn.setAttribute('aria-label', 'الرجوع للخلف');
        backBtn.setAttribute('title', 'الرجوع للصفحة السابقة');
        backBtn.onclick = () => window.CareerAI.goBack();
        backBtn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:16px;height:16px;display:inline-flex;transform:rotate(180deg)"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          <span>رجوع</span>
        `;
        document.body.appendChild(backBtn);
      } else {
        backBtn.style.display = 'inline-flex';
      }
    } else if (backBtn) {
      backBtn.style.display = 'none';
    }
  },

  updateSEO: function(seo, hash) {
    if (!seo) return;
    const currentUrl = window.location.origin + window.location.pathname + '#' + (hash || '/');

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
    if (metaKw) metaKw.setAttribute('content', seo.keywords || 'سيرة ذاتية, ذكاء اصطناعي, CareerAI, مقابلات عمل, وظائف');

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
    const navLinks = document.querySelectorAll('.nav__link, .mobile-nav__link');
    navLinks.forEach(link => {
      const page = link.getAttribute('data-page');
      if (page === path || (path.startsWith('/blog') && page === '/blog')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
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

/* --- SPA Google AdSense Dynamic Initializer --- */
window.CareerAI.initAdSense = function() {
  // Give DOM a brief moment to render after transition
  setTimeout(() => {
    try {
      const adUnits = document.querySelectorAll('ins.adsbygoogle');
      if (!adUnits || adUnits.length === 0) return;

      adUnits.forEach(ad => {
        const isInitialized = ad.getAttribute('data-adsbygoogle-status');
        if (!isInitialized) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            // Silently handled in development/testing
            console.debug('AdSense unit push status:', e);
          }
        }
      });
    } catch (err) {
      console.debug('AdSense dynamic loader status:', err);
    }
  }, 80);
};

/* --- Mobile Menu Handlers --- */
window.CareerAI.toggleMobileMenu = function() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileOverlay');

  const isActive = toggle.classList.contains('active');

  if (isActive) {
    window.CareerAI.closeMobileMenu();
  } else {
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.CareerAI.closeMobileMenu = function() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileOverlay');

  if (toggle) toggle.classList.remove('active');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
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
  const app = document.getElementById('app');

  // Render Skeleton Header & Footer
  app.insertAdjacentHTML('afterbegin', window.CareerAI.components.renderHeader());
  app.insertAdjacentHTML('beforeend', window.CareerAI.components.renderFooter());

  // Setup Mobile Menu Events
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('#menuToggle')) {
      window.CareerAI.toggleMobileMenu();
    } else if (e.target.closest('#mobileOverlay')) {
      window.CareerAI.closeMobileMenu();
    }
  });

  // Setup Header Scroll Effect & Back To Top Button with requestAnimationFrame
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
  window.CareerAI.router.init();
});

/* --- Global Go Back Handler --- */
window.CareerAI.goBack = function() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.CareerAI.router.navigate('/');
  }
};

