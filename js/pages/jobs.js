/* ============================================
   Factor Career - Jobs & Opportunities Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.jobs = function() {
  const icons = window.CareerAI.icons;
  const db = window.CareerAI.db;
  const jobs = db.getJobs(false); // Only active jobs
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <div class="page-header page-header--dark" style="background:var(--gradient-hero)">
      <div class="container">
        <nav class="breadcrumb" style="color:rgba(255,255,255,0.7)">
          <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')" style="color:rgba(255,255,255,0.7)">${t('nav.home', 'الرئيسية')}</a>
          <span style="margin:0 8px">›</span>
          <span style="color:white">${t('nav.jobs', 'الوظائف والفرص')}</span>
        </nav>
        <div class="page-header__content" style="text-align:center;max-width:700px;margin:0 auto">
          <h1 class="page-header__title" style="color:white;font-size:var(--text-4xl)">
            ${t('jobs.headerTitle', '💼 الوظائف والفرص المهنية')}
          </h1>
          <p class="page-header__subtitle" style="color:rgba(255,255,255,0.85);font-size:var(--text-lg)">
            ${t('jobs.headerSubtitle', 'استكشف أحدث فرص العمل المُختارة بعناية لتناسب مهاراتك وطموحاتك المهنية')}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;margin-top:var(--space-6);flex-wrap:wrap">
            <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:var(--radius-full);padding:8px 20px;font-size:var(--text-sm);color:white;backdrop-filter:blur(8px)">
              <span style="font-weight:bold;color:var(--color-accent-light)">${jobs.length}</span> ${t('jobs.available', 'فرصة متاحة الآن')}
            </div>
            <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:var(--radius-full);padding:8px 20px;font-size:var(--text-sm);color:white;backdrop-filter:blur(8px)">
              ${t('jobs.autoUpdated', '🔄 يتم التحديث باستمرار')}
            </div>
          </div>

        <!-- Google AdSense - Top Leaderboard Banner -->
        <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin:2.5rem auto 1rem;max-width:760px;">
          <div class="ad-frame-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
            ${t('common.sponsored', 'إعلان ممول / Sponsored')}
          </div>
          <div class="ad-frame-inner">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:728px;height:90px;max-width:100%;"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="3316284985"
                 data-ad-format="horizontal"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        </div>
      </div>
    </div>

    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-16)">
      <div class="container">
        <div class="page-with-sidebar">
          <!-- Main Jobs Column -->
          <div class="main-content-col">
            ${jobs.length === 0 ? `
              <div class="text-center animate-on-scroll" style="padding:var(--space-16) 0">
                <div style="font-size:4rem;margin-bottom:var(--space-4)">📭</div>
                <h2 style="font-size:var(--text-2xl);margin-bottom:var(--space-3)">${t('jobs.emptyTitle', 'لا توجد فرص متاحة حالياً')}</h2>
                <p style="color:var(--color-text-secondary);max-width:500px;margin:0 auto">${t('jobs.emptyDesc', 'نعمل على إضافة فرص عمل جديدة باستمرار. تابعنا للحصول على آخر التحديثات!')}</p>
                <a href="/tools" class="btn btn--primary" style="margin-top:var(--space-6)" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
                  ${isEn ? 'Explore AI Career Tools' : 'استعد مع أدوات الذكاء الاصطناعي'}
                </a>
              </div>
            ` : `
              <div class="jobs-grid">
                ${jobs.map((job, i) => `
                  <div class="job-card animate-on-scroll delay-${(i % 3) + 1}" id="job-${job.id}">
                    <div class="job-card__header">
                      <div class="job-card__img-wrap">
                        <img src="${job.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'}" alt="${job.title}" class="job-card__img" loading="lazy">
                      </div>
                      <div class="job-card__badges">
                        <span class="job-badge job-badge--type">${job.type}</span>
                        <span class="job-badge job-badge--location">${job.location}</span>
                      </div>
                    </div>
                    <div class="job-card__body">
                      <h3 class="job-card__title">${job.title}</h3>
                      <div class="job-card__company">
                        <span style="width:16px;height:16px;display:inline-flex;color:var(--color-primary)">${icons.users}</span>
                        <span>${job.company}</span>
                      </div>
                      ${job.salary ? `
                        <div class="job-card__salary">
                          <span style="color:var(--color-accent);font-weight:var(--font-bold)">💰 ${job.salary}</span>
                        </div>
                      ` : ''}
                      <p class="job-card__desc">${job.description || ''}</p>
                      ${job.requirements ? `
                        <div class="job-card__reqs">
                          <strong style="font-size:var(--text-sm);color:var(--color-text)">📋 ${t('jobs.reqs', 'المتطلبات والشروط:')}</strong>
                          <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-top:4px">${job.requirements}</p>
                        </div>
                      ` : ''}
                    </div>
                    <div class="job-card__footer">
                      <span style="font-size:var(--text-xs);color:var(--color-text-muted)">📅 ${job.createdAt || 'Recent'}</span>
                      <a href="${job.applyUrl || 'mailto:careerfactor@gmail.com'}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">
                        ${t('common.applyNow', 'قدّم الآن')}
                        <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
                      </a>
                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Sticky Sidebar with Vertical Half-Page Skyscraper (300x600) -->
          <aside class="sticky-sidebar-ad animate-on-scroll">
            <div class="ad-frame-wrapper ad-frame-skyscraper">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${t('common.sponsored', 'إعلان ممول / Sponsored')}
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

    <!-- Full-Width Edge-to-Edge Blue CTA Section (Haven't Found the Right Job Yet?) -->
    <section class="section section--dark" style="background:var(--gradient-hero);width:100%;padding:var(--space-20) 0;position:relative;overflow:hidden">
      <div style="position:relative;z-index:2;width:100%;max-width:1440px;margin:0 auto;padding:0 var(--space-8);text-align:center">
        <div class="cta-section animate-on-scroll" style="background:transparent;border:none;width:100%;max-width:100%;margin:0 auto;padding:0">
          <h2 class="cta-section__title" style="font-size:clamp(2.2rem, 4.5vw, 3.2rem);font-weight:800;color:white;margin-bottom:var(--space-4);line-height:1.25">
            ${isEn ? "Haven't Found the Right Job Yet?" : 'لم تجد الوظيفة المناسبة بعد؟'}
          </h2>
          <p class="cta-section__text" style="font-size:clamp(1rem, 2vw, 1.25rem);color:rgba(255,255,255,0.92);max-width:900px;margin:0 auto var(--space-8);line-height:1.8">
            ${isEn ? 'Create an ATS-friendly resume now and let leading recruiters discover your profile automatically.' : 'أنشئ سيرتك الذاتية المتوافقة مع أنظمة ATS الآن ودع الشركات ومسؤولي التوظيف يصلون إليك تلقائياً.'}
          </p>
          <div class="cta-section__actions" style="display:flex;gap:var(--space-5);justify-content:center;flex-wrap:wrap">
            <a href="/resume-builder" class="btn btn--white btn--lg" data-nav style="box-shadow:0 12px 30px rgba(0,0,0,0.25);padding:1.1rem 2.8rem;font-size:1.1rem;font-weight:700">
              <span>📄</span>
              <span>${isEn ? 'Build My Resume Now' : 'أنشئ سيرتي الذاتية الآن'}</span>
            </a>
            <a href="/tools" class="btn btn--outline btn--lg" data-nav style="color:white;border-color:rgba(255,255,255,0.6);padding:1.1rem 2.8rem;font-size:1.1rem;font-weight:700;backdrop-filter:blur(8px)">
              <span>⚡</span>
              <span>${isEn ? 'Explore All Career Tools' : 'استكشف جميع الأدوات'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.jobsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Curated Jobs & Career Opportunities | Factor Career',
      description: 'Explore handpicked active job openings across tech, marketing, HR, and design with Factor Career.',
      keywords: 'Jobs, Remote Work, Tech Jobs, Career Opportunities, Hiring, Factor Career'
    };
  }
  return {
    title: 'الوظائف والفرص المهنية المتاحة | Factor Career Jobs & Careers',
    description: 'استكشف أحدث فرص العمل والوظائف المُختارة بعناية من Factor Career.',
    keywords: 'jobs, careers, وظائف, فرص عمل, توظيف, عمل عن بعد, Factor Career'
  };
};
