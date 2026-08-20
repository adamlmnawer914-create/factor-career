/* ============================================
   CareerAI - Single Article Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.article = function(slug) {
  const icons = window.CareerAI.icons;
  const article = window.CareerAI.db.getArticleBySlug(slug);

  if (!article) {
    return `
      <div class="page-header">
        <div class="container">
          <div class="page-header__content">
            <h1 class="page-header__title">المقال غير موجود</h1>
            <p class="page-header__subtitle">عذراً، المقال الذي تحاول الوصول إليه غير موجود أو تم حذفه.</p>
            <a href="#/blog" class="btn btn--white" style="margin-top:var(--space-6)" onclick="CareerAI.router.navigate('/blog')">
              العودة إلى المدونة
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Related articles (from same category or latest, excluding current article)
  const allArticles = window.CareerAI.db.getArticles(false).filter(a => a.id !== article.id);
  const relatedArticles = allArticles.filter(a => a.categoryId === article.categoryId).slice(0, 3);
  if (relatedArticles.length < 3) {
    const extra = allArticles.filter(a => !relatedArticles.includes(a)).slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...extra);
  }

  return `
    <!-- Article Header -->
    <div class="article-header">
      <div class="container container--narrow">
        <div class="page-header__breadcrumb" style="justify-content:flex-start;margin-bottom:var(--space-4)">
          <a href="#/" onclick="CareerAI.router.navigate('/')">الرئيسية</a>
          <span>/</span>
          <a href="#/blog" onclick="CareerAI.router.navigate('/blog')">المدونة</a>
          <span>/</span>
          <span>${article.categoryName}</span>
        </div>

        <div style="margin-bottom:var(--space-4)">
          <span class="tag tag--primary">${article.categoryName}</span>
        </div>

        <h1 class="article-header__title">${article.title}</h1>

        <div class="article-header__meta">
          <div class="article-header__author">
            <div class="article-header__avatar">${(article.author || 'C')[0]}</div>
            <span>${article.author || 'فريق CareerAI'}</span>
          </div>
          <span>•</span>
          <div class="article-header__date">
            <span style="width:16px;height:16px;display:inline-flex">${icons.clock}</span>
            <span>${article.publishedAt}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Article Content Section -->
    <section class="section" style="padding-top:var(--space-8)">
      <div class="container container--narrow">

        <!-- Featured Image -->
        <div class="article-featured-image">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
        </div>

        <!-- Google AdSense Compact Banner (Top) -->
        <div class="adsense-container adsense-banner-sm">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <!-- Main Article Content Body -->
        <div class="article-body">
          ${article.content}
          
          <!-- In-Article Google AdSense Unit -->
          <div class="adsense-inarticle">
            <span class="adsense-label">إعلان مقترح / In-Article Ad</span>
            <ins class="adsbygoogle"
                 style="display:block; text-align:center;"
                 data-ad-layout="in-article"
                 data-ad-format="fluid"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="9876543210"></ins>
          </div>
        </div>

        <!-- Keywords / Tags -->
        ${article.keywords ? `
          <div class="article-tags">
            <span class="article-tags__label">الكلمات المفتاحية:</span>
            ${article.keywords.split(',').map(k => `<span class="tag tag--accent">${k.trim()}</span>`).join(' ')}
          </div>
        ` : ''}

        <!-- Google AdSense Square Unit (Middle) -->
        <div class="adsense-container adsense-square">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="8877665544"></ins>
        </div>

        <!-- Google AdSense Multiplex Unit (Matched Content / Recommendations) -->
        <div class="adsense-multiplex">
          <div class="adsense-multiplex__header">
            <span>✨ إعلانات ومحتوى مقترح لك (Multiplex Ads)</span>
          </div>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-format="autorelaxed"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="5544332211"></ins>
        </div>

        <!-- Related Articles Section -->
        ${relatedArticles.length > 0 ? `
          <div class="related-articles">
            <h3 class="related-articles__title">مقالات ذات صلة</h3>
            <div class="grid grid--3">
              ${relatedArticles.map(rel => `
                <article class="blog-card" style="cursor:pointer" onclick="CareerAI.router.navigate('/blog/${rel.slug}')">
                  <div class="blog-card__image" style="height:140px">
                    <img src="${rel.image}" alt="${rel.title}" style="width:100%;height:100%;object-fit:cover">
                  </div>
                  <div class="blog-card__content" style="padding:var(--space-4)">
                    <span class="blog-card__tag" style="margin-bottom:var(--space-2);display:inline-block">${rel.categoryName}</span>
                    <h4 class="blog-card__title" style="font-size:var(--text-base);line-height:1.4">${rel.title}</h4>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>
        ` : ''}

      </div>
    </section>
  `;
};
