/* ============================================
   CareerAI - About Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.about = function() {
  const icons = window.CareerAI.icons;

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">الرئيسية</a>
            <span>/</span>
            <span>من نحن</span>
          </div>
          <h1 class="page-header__title">من نحن - Factor Career</h1>
          <p class="page-header__subtitle">تعرف على قصتنا ورؤيتنا لتطوير مسيرتك المهنية بالذكاء الاصطناعي</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense Compact Banner (Top) -->
    <div class="container" style="padding-top:var(--space-4)">
      <div class="adsense-container adsense-banner-sm">
        <span class="adsense-label">إعلان ممول / Ad</span>
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
              قصتنا
            </span>
            <h2 class="about-story__title">نؤمن بأن كل شخص يستحق <span class="text-gradient">فرصة عمل مناسبة</span></h2>
            <p class="about-story__text">
              بدأت منصة <strong>Factor Career</strong> من فكرة واضحة: جعل عملية بناء السيرة الذاتية والاستعداد للمقابلات وسوق العمل أسهل وأكثر فاعلية واحترافية للجميع.
            </p>
            <p class="about-story__text">
              نعمل على توفير أحدث تقنيات وأدوات الذكاء الاصطناعي مجاناً وبدون أي تعقيدات، لمساعدة الباحثين عن عمل والمهنيين في صياغة ملفاتهم الوظيفية واجتياز أنظمة الفرز الآلي ATS بثقة.
            </p>
            <p class="about-story__text">
              نحن ملتزمون بالتطوير المستمر وتقديم حلول حقيقية تواكب متطلبات سوق العمل العالمي والمحلي.
            </p>
          </div>
          <div class="about-story__visual animate-on-scroll delay-2">
            <div class="about-story__visual-card">
              <div class="about-story__visual-icon">🚀</div>
              <div class="about-story__visual-text">Factor Career • نبني مستقبلك المهني</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.skills}</span>
            قيمنا ومبادئنا
          </span>
          <h2 class="section__title">القيم التي <span class="text-gradient">نؤمن بها</span></h2>
        </div>

        <div class="about-values">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.free}</span>
            </div>
            <h3 class="card__title">الشمولية والمجانية</h3>
            <p class="card__text">نؤمن بأن الأدوات المهنية الاحترافية يجب أن تكون متاحة للجميع مجاناً دون أي اشتراكات أو عوائق.</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">الخصوصية والأمان</h3>
            <p class="card__text">نحترم خصوصية مستخدمينا، وتتم معالجة البيانات مؤقتاً في متصفحك دون تخزين بيانات السير الذاتية الشخصية.</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.rocket}</span>
            </div>
            <h3 class="card__title">الابتكار المستمر</h3>
            <p class="card__text">نطور باستمرار نماذج الذكاء الاصطناعي لتحسين جودة الصياغة ومطابقة الكلمات المفتاحية مع أنظمة ATS.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Google AdSense Square Unit & Compact Banner Row -->
    <div class="container" style="padding:var(--space-6) var(--container-padding)">
      <div class="adsense-row">
        <div class="adsense-container adsense-square">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="8899001100"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="8899001122"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-section__content animate-on-scroll">
          <h2 class="cta-section__title">انضم إلى مجتمع Factor Career</h2>
          <p class="cta-section__text">ابدأ رحلتك المهنية اليوم مع أدواتنا الذكية المجانية</p>
          <a href="#/tools" class="btn btn--white btn--lg" onclick="CareerAI.router.navigate('/tools')">
            ابدأ الآن
            <span style="width:20px;height:20px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
          </a>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.aboutSEO = {
  title: 'من نحن - Factor Career',
  description: 'تعرف على قصة Factor Career ورؤيتنا لمساعدة الباحثين عن عمل باستخدام الذكاء الاصطناعي.',
  keywords: 'من نحن, Factor Career, رؤيتنا, قيمنا'
};
