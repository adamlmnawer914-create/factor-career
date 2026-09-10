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

        </div>
      </div>
    </div>

    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-16)">
      <div class="container">

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

              ${i === 1 ? `
              ` : ''}
            `).join('')}
          </div>
        `}

        <!-- CTA Section -->
        <div class="cta-section animate-on-scroll" style="margin-top:var(--space-12)">
          <div class="cta-section__bg"></div>
          <h2 class="cta-section__title">${t('jobs.ctaTitle', 'لم تجد الوظيفة المناسبة؟')}</h2>
          <p class="cta-section__text" style="max-width:550px;margin:0 auto var(--space-6)">
            ${t('jobs.ctaText', 'جهّز سيرتك الذاتية باستخدام أدواتنا الذكية المجانية وكن مستعداً لأي فرصة قادمة!')}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="/tools/resume-builder" class="btn btn--primary" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
              ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
            </a>
            <a href="/tools" class="btn btn--secondary" style="border-color:white;color:white" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
              ${t('hero.btnExplore', 'تصفح جميع الأدوات')}
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
