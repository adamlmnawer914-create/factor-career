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
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.blog', 'المدونة')}</span>
          </div>
          <h1 class="page-header__title">${isEn ? 'Career Insights & Knowledge Hub' : 'المدونة والمقالات المهنية'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Expert career advice, interview strategies, resume optimization, and industry guides.' : 'دليل شامل ومقالات متخصصة لتطوير مسيرتك المهنية واجتياز المقابلات والتوظيف.'}</p>
        </div>
      </div>
    </div>

    
    
    <!-- Adsterra Native Banner (Responsive for PC & Mobile) -->
    <div class="adsterra-native-container container" style="margin:2rem auto;text-align:center;width:100%;max-width:100%;overflow:hidden;box-sizing:border-box;">
      <span style="display:block;font-size:0.75rem;color:var(--color-text-muted,#94a3b8);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${isEn ? 'Recommended Content & Sponsored' : 'محتوى مُموَّل ومُقترح'}</span>
      <div id="container-88b8ff02af33c15d529cd7a1ab450129" style="width:100%;min-height:100px;display:block;margin:0 auto;box-sizing:border-box;"></div>
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
