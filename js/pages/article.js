/* ============================================
   Factor Career - Single Article Page (Multilingual & Verification Code)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.article = function(slug) {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const article = window.CareerAI.db.getArticleBySlug(slug);

  if (!article) {
    return `
      <div class="page-header">
        <div class="container">
          <div class="page-header__content">
            <h1 class="page-header__title">${isEn ? 'Article Not Found' : 'المقال غير موجود'}</h1>
            <p class="page-header__subtitle">${isEn ? 'Sorry, the article you are looking for does not exist or has been removed.' : 'عذراً، المقال الذي تحاول الوصول إليه غير موجود أو تم حذفه.'}</p>
            <a href="/blog" class="btn btn--white" style="margin-top:var(--space-6)" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">
              ${isEn ? 'Back to Blog' : 'العودة إلى المدونة'}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Related articles
  const allArticles = window.CareerAI.db.getArticles(false).filter(a => a.id !== article.id);
  const relatedArticles = allArticles.filter(a => a.categoryId === article.categoryId).slice(0, 3);
  if (relatedArticles.length < 3) {
    const extra = allArticles.filter(a => !relatedArticles.includes(a)).slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...extra);
  }

  const proofCode = article.verificationCode || ('FC-PROOF-' + Math.floor(1000 + Math.random() * 9000));

  return `
    <!-- Article Header -->
    <div class="article-header">
      <div class="container container--narrow">
        <div class="page-header__breadcrumb" style="justify-content:flex-start;margin-bottom:var(--space-4)">
          <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
          <span>/</span>
          <a href="/blog" onclick="event.preventDefault();CareerAI.router.navigate('/blog')">${t('nav.blog', 'المدونة')}</a>
          <span>/</span>
          <span>${article.categoryName}</span>
        </div>

        <div style="margin-bottom:var(--space-4)">
          <span class="tag tag--primary">${article.categoryName}</span>
        </div>

        <h1 class="article-header__title">${article.title}</h1>

        <div class="article-header__meta">
          <div class="article-header__author">
            <div class="article-header__avatar">${(article.author || 'F')[0]}</div>
            <span>${article.author || 'Factor Career Team'}</span>
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

        <!-- Main Article Content Body -->
        <div class="article-body">
          ${article.content}
        </div>

        <!-- Verification Proof Code Box for Promotions & Readers -->
        <div class="verification-code-box" style="margin:var(--space-8) 0;padding:var(--space-6);border:2px dashed var(--color-primary);border-radius:var(--radius-lg);background:rgba(37,99,235,0.04);text-align:center;">
          <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:var(--space-2)">
            <span style="width:20px;height:20px;color:var(--color-primary);display:inline-flex">${icons.shield || icons.check}</span>
            <strong style="font-size:var(--text-lg);color:var(--color-text-dark)">
              ${isEn ? 'Article Verification Proof Code' : 'رمز إثبات قراءة المقال'}
            </strong>
          </div>
          <p style="font-size:var(--text-sm);color:var(--color-text-light);margin-bottom:var(--space-4)">
            ${isEn ? 'Use this unique code as proof of completion for reading tasks and campaigns.' : 'استخدم هذا الكود كإثبات لقراءة وتصفح المقال للمهام الترويجية.'}
          </p>
          <div style="display:inline-flex;align-items:center;gap:var(--space-3);background:white;padding:var(--space-3) var(--space-6);border-radius:var(--radius-md);border:1px solid var(--color-border-light);box-shadow:0 2px 8px rgba(0,0,0,0.06)">
            <code id="proofCodeValue" style="font-family:monospace;font-size:var(--text-lg);font-weight:700;letter-spacing:1.5px;color:var(--color-primary)">${proofCode}</code>
            <button class="btn btn--secondary btn--sm" onclick="CareerAI.copyProofCode('${proofCode}')" style="padding:6px 14px;font-size:var(--text-sm)">
              <span id="copyProofText">${isEn ? 'Copy Code' : 'نسخ الكود'}</span>
            </button>
          </div>
        </div>

        <!-- Keywords / Tags -->
        ${article.keywords ? `
          <div class="article-tags">
            <span class="article-tags__label">${isEn ? 'Keywords:' : 'الكلمات المفتاحية:'}</span>
            ${article.keywords.split(',').map(k => `<span class="tag tag--accent">${k.trim()}</span>`).join(' ')}
          </div>
        ` : ''}

        <!-- Related Articles Section -->
        ${relatedArticles.length > 0 ? `
          <div class="related-articles">
            <h3 class="related-articles__title">${isEn ? 'Related Articles' : 'مقالات ذات صلة'}</h3>
            <div class="grid grid--3">
              ${relatedArticles.map(rel => `
                <article class="blog-card" style="cursor:pointer" onclick="event.preventDefault();CareerAI.router.navigate('/blog/${rel.slug}')">
                  <div class="blog-card__image" style="height:140px">
                    <img src="${rel.image}" alt="${rel.title}" style="width:100%;height:100%;object-fit:cover">
                  </div>
                  <div class="blog-card__content" style="padding:var(--space-4)">
                    <span class="blog-card__tag" style="margin-bottom:var(--space-2);display:inline-block">${rel.categoryName}</span>
                    <h4 class="blog-card__title" style="font-size:var(--text-base);line-height:1.4">${rel.title}</h4>
                  </div>
                
    <!-- Adsterra Native Banner (Safe SPA Iframe) -->
    <div class="adsterra-native-container container" style="margin:2rem auto;text-align:center;">
      <span style="display:block;font-size:0.75rem;color:var(--color-text-muted,#94a3b8);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${isEn ? 'Recommended Content & Sponsored' : 'محتوى مُموَّل ومُقترح'}</span>
      <iframe srcdoc="&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;style&gt;body{margin:0;padding:0;font-family:sans-serif;background:transparent;}&lt;/style&gt;&lt;/head&gt;&lt;body&gt;&lt;script async='async' data-cfasync='false' src='https://pl31205602.profitableratecpmnetwork.com/88b8ff02af33c15d529cd7a1ab450129/invoke.js'&gt;&lt;/script&gt;&lt;div id='container-88b8ff02af33c15d529cd7a1ab450129'&gt;&lt;/div&gt;&lt;/body&gt;&lt;/html&gt;" width="100%" height="280" style="border:none;overflow:hidden;max-width:900px;display:block;margin:0 auto;" scrolling="no"></iframe>
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

window.CareerAI.copyProofCode = function(code) {
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copyProofText');
    const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
    if (btn) {
      btn.textContent = isEn ? 'Copied! ✓' : 'تم النسخ! ✓';
      setTimeout(() => {
        btn.textContent = isEn ? 'Copy Code' : 'نسخ الكود';
      }, 2500);
    }
  }).catch(() => {
    prompt('Copy Proof Code:', code);
  });
};
