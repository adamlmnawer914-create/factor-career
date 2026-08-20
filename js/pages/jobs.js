/* ============================================
   Factor Career - Jobs & Opportunities Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.jobs = function() {
  const icons = window.CareerAI.icons;
  const db = window.CareerAI.db;
  const jobs = db.getJobs(false); // Only active jobs

  return `
    <div class="page-header page-header--dark" style="background:var(--gradient-hero)">
      <div class="container">
        <nav class="breadcrumb" style="color:rgba(255,255,255,0.7)">
          <a href="#/" onclick="CareerAI.router.navigate('/')" style="color:rgba(255,255,255,0.7)">الرئيسية</a>
          <span style="margin:0 8px">›</span>
          <span style="color:white">الوظائف والفرص</span>
        </nav>
        <div class="page-header__content" style="text-align:center;max-width:700px;margin:0 auto">
          <h1 class="page-header__title" style="color:white;font-size:var(--text-4xl)">
            💼 الوظائف والفرص المهنية
          </h1>
          <p class="page-header__subtitle" style="color:rgba(255,255,255,0.85);font-size:var(--text-lg)">
            استكشف أحدث فرص العمل المُختارة بعناية لتناسب مهاراتك وطموحاتك المهنية
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;margin-top:var(--space-6);flex-wrap:wrap">
            <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:var(--radius-full);padding:8px 20px;font-size:var(--text-sm);color:white;backdrop-filter:blur(8px)">
              <span style="font-weight:bold;color:var(--color-accent-light)">${jobs.length}</span> فرصة متاحة الآن
            </div>
            <div style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);border-radius:var(--radius-full);padding:8px 20px;font-size:var(--text-sm);color:white;backdrop-filter:blur(8px)">
              🔄 يتم التحديث باستمرار
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Top Google AdSense Banner Container -->
    <div class="container" style="padding-top:var(--space-6)">
      <div class="adsense-container adsense-banner">
        <span class="adsense-label">إعلان ممول / Sponsored Ad</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-16)">
      <div class="container">

        ${jobs.length === 0 ? `
          <div class="text-center animate-on-scroll" style="padding:var(--space-16) 0">
            <div style="font-size:4rem;margin-bottom:var(--space-4)">📭</div>
            <h2 style="font-size:var(--text-2xl);margin-bottom:var(--space-3)">لا توجد فرص متاحة حالياً</h2>
            <p style="color:var(--color-text-secondary);max-width:500px;margin:0 auto">نعمل على إضافة فرص عمل جديدة باستمرار. تابعنا للحصول على آخر التحديثات!</p>
            <a href="#/tools" class="btn btn--primary" style="margin-top:var(--space-6)" onclick="CareerAI.router.navigate('/tools')">
              استعد مع أدوات الذكاء الاصطناعي
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
                      <strong style="font-size:var(--text-sm);color:var(--color-text)">📋 المتطلبات:</strong>
                      <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-top:4px">${job.requirements}</p>
                    </div>
                  ` : ''}
                </div>
                <div class="job-card__footer">
                  <span style="font-size:var(--text-xs);color:var(--color-text-muted)">📅 ${job.createdAt || 'حديث'}</span>
                  <a href="${job.applyUrl || 'mailto:careerfactor@gmail.com'}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">
                    قدّم الآن
                    <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
                  </a>
                </div>
              </div>

              ${i === 1 ? `
                <!-- In-Feed Google AdSense Card (Seamless inside Jobs Grid) -->
                <div class="adsense-infeed" style="border-radius:var(--radius-2xl)">
                  <span class="adsense-label">إعلان ممول / Sponsored</span>
                  <ins class="adsbygoogle"
                       style="display:block"
                       data-ad-format="fluid"
                       data-ad-layout-key="-fb+5w+4e-db+86"
                       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                       data-ad-slot="4455667788"></ins>
                </div>
              ` : ''}
            `).join('')}
          </div>
        `}

        <!-- Google AdSense Square & Compact Row -->
        <div style="margin-top:var(--space-12)">
          <div class="adsense-row">
            <div class="adsense-container adsense-square">
              <span class="adsense-label">إعلان ممول / Ad</span>
              <ins class="adsbygoogle"
                   style="display:inline-block;width:300px;height:250px"
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="5566778899"></ins>
            </div>
            <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
              <span class="adsense-label">إعلان ممول / Ad</span>
              <ins class="adsbygoogle"
                   style="display:block"
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="7788990011"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="cta-section animate-on-scroll" style="margin-top:var(--space-12)">
          <div class="cta-section__bg"></div>
          <h2 class="cta-section__title">لم تجد الوظيفة المناسبة؟</h2>
          <p class="cta-section__text" style="max-width:550px;margin:0 auto var(--space-6)">
            جهّز سيرتك الذاتية باستخدام أدواتنا الذكية المجانية وكن مستعداً لأي فرصة قادمة!
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="#/tools/resume-builder" class="btn btn--primary" onclick="CareerAI.router.navigate('/tools/resume-builder')">
              أنشئ سيرتك الذاتية الآن
            </a>
            <a href="#/tools" class="btn btn--secondary" style="border-color:white;color:white" onclick="CareerAI.router.navigate('/tools')">
              تصفح جميع الأدوات
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
};

window.CareerAI.pages.jobsSEO = {
  title: 'الوظائف والفرص المهنية المتاحة | Factor Career',
  description: 'استكشف أحدث فرص العمل والوظائف المُختارة بعناية من Factor Career. وظائف تقنية، تسويق، موارد بشرية وأكثر.',
  keywords: 'وظائف, فرص عمل, توظيف, عمل عن بعد, Factor Career, وظائف تقنية, فرص مهنية'
};
