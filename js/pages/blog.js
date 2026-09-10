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
        <!-- Google AdSense - In-Article Ad -->
        <div class="adsense-native-container" style="margin:2rem auto;text-align:center;width:100%;max-width:100%;overflow:hidden;">
          <ins class="adsbygoogle"
               style="display:block; text-align:center;"
               data-ad-layout="in-article"
               data-ad-format="fluid"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="3316284985"></ins>
        </div>

    <section class="section" style="padding-top:var(--space-4)">
      <div class="container">

        <!-- Dynamic Category Filters -->
        <div class="tools-page__filter animate-on-scroll">
          <button class="tools-page__filter-btn active" data-blog-cat="all" onclick="CareerAI.filterBlogArticles('all')">
            ${isEn ? 'All Articles' : 'جميع المقالات'} (${articles.length})
          </button>
          ${categories.map(cat => {
            const count = articles.filter(a => a.categoryId === cat.id).length;
            return `
              <button class="tools-page__filter-btn" data-blog-cat="${cat.id}" onclick="CareerAI.filterBlogArticles('${cat.id}')">
                ${cat.name} (${count})
              </button>
            `;
          }).join('')}
        </div>

        <!-- Articles Grid -->
        <div class="blog-page__grid" id="blogArticlesGrid">
          ${articles.length === 0 ? `
            <div style="grid-column:1/-1;text-align:center;padding:var(--space-16)">
              <h3>${isEn ? 'No articles available yet' : 'لا توجد مقالات منشورة حالياً'}</h3>
              <p>${isEn ? 'We are preparing new articles. Check back soon!' : 'نعمل على إضافة مقالات جديدة باستمرار. تابعنا قريباً!'}</p>
            </div>
          ` : ''}

          ${articles.map((article, i) => `
            <article class="blog-card animate-on-scroll delay-${(i % 3) + 1}" data-article-cat="${article.categoryId}" style="cursor:pointer" onclick="event.preventDefault();CareerAI.router.navigate('/blog/${article.slug}')">
              <div class="blog-card__image" style="height:200px">
                <img src="${article.image}" alt="${article.title}" style="width:100%;height:100%;object-fit:cover" loading="lazy">
              </div>
              <div class="blog-card__content">
                <div class="blog-card__meta">
                  <span class="blog-card__tag">${article.categoryName}</span>
                  <span style="display:flex;align-items:center;gap:4px">
                    <span style="width:14px;height:14px;display:inline-flex">${icons.clock}</span>
                    ${article.publishedAt}
                  </span>
                </div>
                <h2 class="blog-card__title">${article.title}</h2>
                <p class="blog-card__excerpt">${article.excerpt}</p>
              </div>
            </article>
          `).join('')}
        </div>

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
