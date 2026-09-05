/* ============================================
   Factor Career - Dynamic Blog Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.blog = function() {
  const icons = window.CareerAI.icons;
  const db = window.CareerAI.db;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  const categories = db.getCategories();
  const articles = db.getArticles(false);

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©')}</a>
            <span>/</span>
            <span>${t('nav.blog', 'Ø§Ù„Ù…Ø¯ÙˆÙ†Ø©')}</span>
          </div>
          <h1 class="page-header__title">${isEn ? 'Career Insights & Knowledge Hub' : 'Ø§Ù„Ù…Ø¯ÙˆÙ†Ø© ÙˆØ§Ù„Ù…Ù‚Ø§Ù„Ø§Øª Ø§Ù„Ù…Ù‡Ù†ÙŠØ©'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Expert career advice, interview strategies, resume optimization, and industry guides.' : 'Ø¯Ù„ÙŠÙ„ Ø´Ø§Ù…Ù„ ÙˆÙ…Ù‚Ø§Ù„Ø§Øª Ù…ØªØ®ØµØµØ© Ù„ØªØ·ÙˆÙŠØ± Ù…Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ù…Ù‡Ù†ÙŠØ© ÙˆØ§Ø¬ØªÙŠØ§Ø² Ø§Ù„Ù…Ù‚Ø§Ø¨Ù„Ø§Øª ÙˆØ§Ù„ØªÙˆØ¸ÙŠÙ.'}</p>
        </div>
      </div>
    </div>

    
    
    <!-- Adsterra Native Banner (Responsive for PC & Mobile) -->
    <div class="adsterra-native-container container" style="margin:2rem auto;text-align:center;width:100%;max-width:100%;overflow:hidden;box-sizing:border-box;">
      <span style="display:block;font-size:0.75rem;color:var(--color-text-muted,#94a3b8);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${isEn ? 'Recommended Content & Sponsored' : 'Ù…Ø­ØªÙˆÙ‰ Ù…ÙÙ…ÙˆÙŽÙ‘Ù„ ÙˆÙ…ÙÙ‚ØªØ±Ø­'}</span>
      <iframe src="/ads/native-banner.html" width="100%" height="300" style="border:none;overflow:hidden;display:block;width:100%;min-height:150px;max-width:100%;" scrolling="no" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture"></iframe>
    </div>
    </section>
  `;
};

/* --- Public Blog Category Filtering --- */
window.CareerAI.filterBlogArticles = function(catId) {
  const cards = document.querySelectorAll('[data-article-cat]');
  const btns = document.querySelectorAll('[data-blog-cat]');

  btns.forEach(btn => btn.classList.toggle('active', btn.dataset.blogCat === catId));

  cards.forEach(card => {
    if (catId === 'all' || card.dataset.articleCat === catId) {
      card.style.display = '';
      card.style.animation = 'fadeInUp 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
};

window.CareerAI.pages.blogSEO = {
  title: 'Blog & Career Knowledge Hub | Factor Career',
  description: 'Explore comprehensive guides, resume tips, interview strategies, and actionable advice to advance your career.',
  keywords: 'Career Blog, Resume Tips, Interview Prep, Career Advice, Factor Career'
};


