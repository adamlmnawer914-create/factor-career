/* ============================================
   Factor Career - About Us Page (Multilingual & Comprehensive)
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
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.about', 'من نحن')}</span>
          </div>
          <h1 class="page-header__title">${isEn ? 'About Factor Career' : 'من نحن - Factor Career'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Empowering job seekers worldwide with intelligent, accessible, and 100% free career development tools.' : 'تعرف على قصتنا ورؤيتنا لتطوير مسيرتك المهنية بالذكاء الاصطناعي'}</p>
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

    </div>

    <!-- Story Section -->
    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
        <div class="about-story">
          <div class="about-story__content animate-on-scroll">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.rocket}</span>
              ${isEn ? 'Our Story & Purpose' : 'قصتنا ورؤيتنا'}
            </span>
            <h2 class="about-story__title">${isEn ? 'Democratizing Career Growth with <span class="text-gradient">Intelligent AI Technology</span>' : 'نؤمن بأن كل شخص يستحق <span class="text-gradient">فرصة عمل مناسبة</span>'}</h2>
            <p class="about-story__text">
              ${isEn 
                ? '<strong>Factor Career</strong> was founded with a single, uncompromising mission: to level the playing field for ambitious job seekers across the globe. We believe that professional career assistance—such as ATS-friendly resume builders, interview coaches, and cover letter generators—should not be locked behind expensive subscription paywalls.' 
                : 'بدأت منصة <strong>Factor Career</strong> من فكرة واضحة: جعل عملية بناء السيرة الذاتية والاستعداد للمقابلات وسوق العمل أسهل وأكثر فاعلية واحترافية للجميع دون أي تكاليف مادية.'}
            </p>
            <p class="about-story__text">
              ${isEn 
                ? 'Our platform blends modern artificial intelligence with deep human resources insights to ensure that every applicant can present their unique strengths with clarity, confidence, and precision.' 
                : 'نعمل على توفير أحدث تقنيات وأدوات الذكاء الاصطناعي مجاناً وبدون أي تعقيدات، لمساعدة الباحثين عن عمل والمهنيين في صياغة ملفاتهم الوظيفية واجتياز أنظمة الفرز الآلي ATS بثقة.'}
            </p>
          </div>
          <div class="about-story__visual animate-on-scroll delay-2">
            <div class="about-story__visual-card">
              <div class="about-story__visual-icon">
                <span style="width:48px;height:48px;display:inline-flex;color:var(--color-primary)">${icons.brain}</span>
              </div>
              <div class="about-story__visual-text">Factor Career • ${isEn ? 'Empowering 50,000+ Careers' : 'نبني مستقبلك المهني'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision & Core Values -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header text-center animate-on-scroll" style="margin-bottom:var(--space-10)">
          <h2 class="section-title">${isEn ? 'Our Guiding Principles' : 'مبادئنا وقيمنا الأساسية'}</h2>
          <p class="section-subtitle">${isEn ? 'What drives our team every day to build better tools for your career journey.' : 'المعايير التي نلتزم بها لتقديم أفضل تجربة لكل باحث عن عمل.'}</p>
        </div>

        <div class="about-values__grid">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Our Mission' : 'رسالتنا'}</h3>
            <p class="card__text">${isEn ? 'To empower every professional with world-class, 100% free digital tools that match top global hiring standards.' : 'تمكين كل باحث عن عمل من امتلاك أدوات احترافية ومجانية بالكامل تنافس أفضل المعايير العالمية.'}</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Our Vision' : 'رؤيتنا'}</h3>
            <p class="card__text">${isEn ? 'To be the leading AI career platform facilitating transparent employment and human capital growth globally.' : 'أن نكون المنصة الرائدة في تسخير تقنيات الذكاء الاصطناعي لتطوير رأس المال البشري وتسهيل التوظيف.'}</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Privacy & Integrity' : 'الخصوصية والأمان'}</h3>
            <p class="card__text">${isEn ? 'We treat your career data with utmost confidentiality. Client-side processing ensures your data stays in your hands.' : 'الشفافية وحماية بيانات المستخدمين في صميم كل ميزة نقوم بتطويرها.'}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Factor Career Section -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center animate-on-scroll">
          <h2 class="section-title">${isEn ? 'Why Thousands Trust Factor Career' : 'لماذا يثق بنا الباحثون عن عمل؟'}</h2>
          <p class="section-subtitle">${isEn ? 'Built for job seekers, recruiters, and career switchers.' : 'ميزات مصممة خصيصاً لمساعدتك على التفوق في سوق العمل.'}</p>
        </div>

        <div class="grid grid--4" style="margin-top:var(--space-8)">
          <div class="card text-center animate-on-scroll delay-1">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-primary);margin-bottom:var(--space-2)">100%</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'Free Forever' : 'مجاني دائماً'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'No hidden fees, no credit card required, no watermark on downloads.' : 'بدون رسوم خفية أو علامات مائية على ملفاتك المحملة.'}</p>
          </div>
          <div class="card text-center animate-on-scroll delay-2">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-accent);margin-bottom:var(--space-2)">98%</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'ATS Pass Rate' : 'توافق مع أنظمة ATS'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'Engineered strictly adhering to automated screening system rules.' : 'تصاميم وهياكل متوافقة تماماً مع أنظمة تتبع المتقدمين.'}</p>
          </div>
          <div class="card text-center animate-on-scroll delay-3">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-primary);margin-bottom:var(--space-2)">5+</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'Intelligent Tools' : 'أدوات ذكية متكاملة'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'From CV builders to STAR interview coaching in one place.' : 'من بناء السيرة إلى أسئلة المقابلات ورسائل التقديم.'}</p>
          </div>
          <div class="card text-center animate-on-scroll delay-4">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-accent);margin-bottom:var(--space-2)">24/7</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'Global Access' : 'إتاحة مستمرة'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'Available on desktop and mobile with instant PDF generation.' : 'متاح دائماً عبر جميع الأجهزة مع إمكانية التصدير الفوري.'}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="padding-top:var(--space-8);padding-bottom:var(--space-16)">
      <div class="container">
        <div class="cta-section animate-on-scroll">
          <div class="cta-section__bg"></div>
          <h2 class="cta-section__title">${isEn ? 'Ready to Elevate Your Career?' : 'انضم إلى مجتمع Factor Career'}</h2>
          <p class="cta-section__text">${isEn ? 'Start creating your ATS-optimized resume in minutes with our free AI builder.' : 'ابدأ الآن في بناء سيرتك الذاتية واستعد للانطلاق نحو وظيفة أحلامك.'}</p>
          <a href="/tools/resume-builder" class="btn btn--primary" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
            ${isEn ? 'Build Your Free Resume' : 'أنشئ سيرتك الذاتية الآن'}
          </a>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.aboutSEO = {
  title: 'About Us | Factor Career - Free AI Career Platform',
  description: 'Learn about Factor Career, our mission to democratize job search tools, and how we empower job seekers worldwide with AI.',
  keywords: 'About Factor Career, Career Platform, Free Resume Builder, Our Mission, Team'
};
