/* ============================================
   CareerAI - Dynamic Blog Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.blog = function() {
  const icons = window.CareerAI.icons;
  const db = window.CareerAI.db;

  const categories = db.getCategories();
  const articles = db.getArticles(false); // Only published articles for public visitors

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">الرئيسية</a>
            <span>/</span>
            <span>المدونة</span>
          </div>
          <h1 class="page-header__title">المدونة المهنية</h1>
          <p class="page-header__subtitle">نصائح وإرشادات مقالية تساعدك في تطوير مسيرتك المهنية والتميز في سوق العمل</p>
        </div>
      </div>
    </div>

    <!-- AdSense Compact Banner (Top) -->
    <div class="container" style="padding-top:var(--space-4)">
      <div class="adsense-container adsense-banner-sm">
        <span class="adsense-label">إعلان ممول / Ad</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="2233445566"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <section class="section">
      <div class="container">

        <!-- Dynamic Category Filters -->
        <div class="tools-page__filter animate-on-scroll">
          <button class="tools-page__filter-btn active" data-blog-cat="all" onclick="CareerAI.filterBlogArticles('all')">
            جميع المقالات (${articles.length})
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
              <h3>لا توجد مقالات منشورة حالياً</h3>
              <p>يرجى العودة لاحقاً لقراءة أحدث المقالات والنصائح المهنية.</p>
            </div>
          ` : ''}

          ${articles.map((article, i) => `
            <article class="blog-card animate-on-scroll delay-${(i % 3) + 1}" data-article-cat="${article.categoryId}" style="cursor:pointer" onclick="CareerAI.router.navigate('/blog/${article.slug}')">
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

        <!-- Google AdSense Multiplex Unit (Matched Recommendations) -->
        <div class="adsense-multiplex" style="margin-top:var(--space-12)">
          <div class="adsense-multiplex__header">
            <span>✨ مقالات ومحتوى مقترح لك (Multiplex Ads)</span>
          </div>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-format="autorelaxed"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="6677889900"></ins>
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
  title: 'المدونة - نصائح وإرشادات مهنية ومقالات حصرية | Career Factor',
  description: 'اقرأ أحدث المقالات حول كتابة السيرة الذاتية وتجهيز مقابلات التوظيف والبحث عن الوظائف.',
  keywords: 'مدونة مهنية, مقالات سيرة ذاتية, مقابلة عمل, مسار مهني'
};
