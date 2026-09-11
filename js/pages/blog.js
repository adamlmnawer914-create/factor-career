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
        <div class="ad-frame-wrapper ad-frame-rectangle" style="margin:2.5rem auto;max-width:400px;">
          <div class="ad-frame-label">Advertisement</div>
          <div class="ad-frame-inner" style="min-height:250px;">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:300px;height:250px;max-width:100%;"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="3316284985"
                 data-ad-format="rectangle"></ins>
          </div>
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

        <div class="page-with-sidebar">
          <div class="main-content-col">
            <!-- Articles Grid -->
            <div class="blog-page__grid" id="blogArticlesGrid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
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

          <!-- Sticky Sidebar with Vertical Skyscraper (300x600) + Second Display Unit -->
          <aside class="sticky-sidebar-ad animate-on-scroll">
            <div class="ad-frame-wrapper ad-frame-skyscraper">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${isEn ? 'Sponsored' : 'إعلان ممول'}
              </div>
              <div class="ad-frame-inner">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:600px;max-width:100%;"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="4455667788"
                     data-ad-format="vertical"></ins>
              </div>
            </div>

            <!-- Square Ad on the Right -->
            <div class="ad-frame-wrapper ad-frame-rectangle animate-on-scroll" style="margin-top: 2rem; max-width: 324px;">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${isEn ? 'Sponsored' : 'إعلان ممول'}
              </div>
              <div class="ad-frame-inner" style="min-height:250px;">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:250px;max-width:100%;"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="3316284985"
                     data-ad-format="rectangle"></ins>
              </div>
            </div>

            <!-- Third Ad: Skyscraper (300x600) Below Square Ad with Spacing -->
            <div class="ad-frame-wrapper ad-frame-skyscraper animate-on-scroll" style="margin-top: 2rem;">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${isEn ? 'Sponsored' : 'إعلان ممول'}
              </div>
              <div class="ad-frame-inner">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:600px;max-width:100%;"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="4455667788"
                     data-ad-format="vertical"></ins>
              </div>
            </div>
          </aside>
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
