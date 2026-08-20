/* ============================================
   Factor Career - About Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.about = function() {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.about', 'من نحن')}</span>
          </div>
          <h1 class="page-header__title">${t('about.title', 'من نحن - Factor Career')}</h1>
          <p class="page-header__subtitle">${t('about.subtitle', 'تعرف على قصتنا ورؤيتنا لتطوير مسيرتك المهنية بالذكاء الاصطناعي')}</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense Compact Banner (Top) -->
    <div class="container" style="padding-top:var(--space-4)">
      <div class="adsense-container adsense-banner-sm">
        <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-7520213352755959"
             data-ad-slot="8811223344"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- Story Section -->
    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
        <div class="about-story">
          <div class="about-story__content animate-on-scroll">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.rocket}</span>
              ${t('about.storyTitle', 'قصتنا')}
            </span>
            <h2 class="about-story__title">${isEn ? 'Every Professional Deserves a <span class="text-gradient">Great Career Opportunity</span>' : 'نؤمن بأن كل شخص يستحق <span class="text-gradient">فرصة عمل مناسبة</span>'}</h2>
            <p class="about-story__text">
              ${isEn ? '<strong>Factor Career</strong> was born with a clear purpose: making professional resume building, ATS screening optimization, and interview prep easy, accessible, and completely free for everyone.' : 'بدأت منصة <strong>Factor Career</strong> من فكرة واضحة: جعل عملية بناء السيرة الذاتية والاستعداد للمقابلات وسوق العمل أسهل وأكثر فاعلية واحترافية للجميع.'}
            </p>
            <p class="about-story__text">
              ${isEn ? 'We harness the power of artificial intelligence to level the playing field, empowering ambitious job seekers with world-class tools without prohibitive costs or paywalls.' : 'نعمل على توفير أحدث تقنيات وأدوات الذكاء الاصطناعي مجاناً وبدون أي تعقيدات، لمساعدة الباحثين عن عمل والمهنيين في صياغة ملفاتهم الوظيفية واجتياز أنظمة الفرز الآلي ATS بثقة.'}
            </p>
          </div>
          <div class="about-story__visual animate-on-scroll delay-2">
            <div class="about-story__visual-card">
              <div class="about-story__visual-icon">
                <span style="width:48px;height:48px;display:inline-flex;color:var(--color-primary)">${icons.brain}</span>
              </div>
              <div class="about-story__visual-text">Factor Career • ${isEn ? 'Powering Your Future' : 'نبني مستقبلك المهني'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section section--alt">
      <div class="container">
        <div class="about-values__grid">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">${t('about.missionTitle', 'رسالتنا')}</h3>
            <p class="card__text">${t('about.missionText', 'تمكين كل باحث عن عمل من امتلاك أدوات احترافية ومجانية بالكامل تنافس أفضل المعايير العالمية.')}</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
            </div>
            <h3 class="card__title">${t('about.visionTitle', 'رؤيتنا')}</h3>
            <p class="card__text">${t('about.visionText', 'أن نكون المنصة العربية الرائدة في تسخير تقنيات الذكاء الاصطناعي لتطوير رأس المال البشري وتسهيل التوظيف.')}</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Our Values' : 'قيمنا'}</h3>
            <p class="card__text">${isEn ? 'Transparency, continuous innovation, and equal access to career opportunities for all job seekers.' : 'الشفافية، الابتكار المستمر، والوصول العادل لفرص التطور المهني لجميع الباحثين عن عمل.'}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="padding-top:var(--space-12);padding-bottom:var(--space-16)">
      <div class="container">
        <div class="cta-section animate-on-scroll">
          <div class="cta-section__bg"></div>
          <h2 class="cta-section__title">${isEn ? 'Join the Factor Career Community' : 'انضم إلى مجتمع Factor Career'}</h2>
          <p class="cta-section__text">${isEn ? 'Start building your professional resume now and be ready for your dream career.' : 'ابدأ الآن في بناء سيرتك الذاتية واستعد للانطلاق نحو وظيفة أحلامك.'}</p>
          <a href="#/tools/resume-builder" class="btn btn--primary" onclick="CareerAI.router.navigate('/tools/resume-builder')">
            ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
          </a>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.aboutSEO = {
  title: 'من نحن | Factor Career About Us',
  description: 'تعرف على قصة Factor Career ورؤيتنا لمساعدة الباحثين عن عمل باستخدام الذكاء الاصطناعي.',
  keywords: 'من نحن, Factor Career, about us, رؤيتنا, قيمنا'
};
