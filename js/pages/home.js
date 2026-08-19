/* ============================================
   CareerAI - Home Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.home = function() {
  const icons = window.CareerAI.icons;

  return `
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero__bg-shapes">
        <div class="hero__shape hero__shape--1"></div>
        <div class="hero__shape hero__shape--2"></div>
        <div class="hero__shape hero__shape--3"></div>
        <div class="hero__shape hero__shape--4"></div>
        <div class="hero__shape hero__shape--5"></div>
      </div>

      <div class="container">
        <div class="hero__inner">
          <div class="hero__content">
            <div class="hero__badge">
              <span class="hero__badge-dot"></span>
              مدعوم بالذكاء الاصطناعي
            </div>
            <h1 class="hero__title">
              ابنِ مسيرتك المهنية
              <br>
              <span class="hero__title-accent">بقوة الذكاء الاصطناعي</span>
            </h1>
            <p class="hero__subtitle">
              أدوات ذكية مجانية من Factor Career تساعدك في كتابة سيرتك الذاتية، التحضير للمقابلات، والعثور على الوظيفة المثالية التي تناسب مهاراتك وطموحاتك.
            </p>
            <div class="hero__actions">
              <a href="#/tools" class="btn btn--primary btn--lg" onclick="CareerAI.router.navigate('/tools')">
                استكشف الأدوات
                <span style="width:20px;height:20px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
              </a>
              <a href="#/about" class="btn btn--ghost btn--lg" onclick="CareerAI.router.navigate('/about')">
                تعرف علينا
              </a>
            </div>
          </div>

          <div class="hero__visual">
            <div class="hero-image-wrapper">
              <img src="img/hero-career-ai.jpg" alt="شاب محترف يحتفل بنجاحه المهني باستخدام أدوات Factor Career" class="hero-image" loading="eager" />
              <div class="hero-image-glow"></div>
            </div>
          </div>

          <!-- Square Ad to the left of the image (شمال الصورة) spaced away -->
          <div class="hero__ad-col animate-on-scroll">
            <div class="adsense-container adsense-square hero-square-ad__inner">
              <span class="adsense-label">إعلان ممول / Ad</span>
              <ins class="adsbygoogle"
                   style="display:inline-block;width:300px;height:250px"
                   data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                   data-ad-slot="1122334455"></ins>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features" id="features">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.speed}</span>
            لماذا Factor Career؟
          </span>
          <h2 class="section__title">مميزات تجعلنا <span class="text-gradient">الخيار الأفضل</span></h2>
          <p class="section__subtitle">نقدم لك مجموعة من المميزات التي تجعل تجربة البحث عن عمل أسهل وأكثر فعالية</p>
        </div>

        <div class="features__grid">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
            </div>
            <h3 class="card__title">سرعة فائقة</h3>
            <p class="card__text">تحليل وتحسين سيرتك الذاتية في ثوانٍ معدودة بفضل خوارزميات الذكاء الاصطناعي المتقدمة.</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">دقة عالية</h3>
            <p class="card__text">خوارزميات ذكية مدربة على ملايين البيانات لتقديم نتائج دقيقة وتوصيات مخصصة لك.</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.easy}</span>
            </div>
            <h3 class="card__title">سهولة الاستخدام</h3>
            <p class="card__text">واجهة بسيطة وبديهية لا تحتاج لأي خبرة تقنية. ابدأ باستخدام الأدوات فوراً.</p>
          </div>

          <div class="card animate-on-scroll delay-4">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.free}</span>
            </div>
            <h3 class="card__title">مجاني بالكامل</h3>
            <p class="card__text">جميع أدواتنا متاحة مجاناً بالكامل. لا رسوم خفية ولا اشتراكات مطلوبة.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="section section--alt" id="tools-section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.brain}</span>
            أدواتنا الذكية
          </span>
          <h2 class="section__title">أدوات <span class="text-gradient">ذكاء اصطناعي</span> متقدمة</h2>
          <p class="section__subtitle">مجموعة شاملة من الأدوات المصممة خصيصاً لمساعدتك في كل مرحلة من مراحل البحث عن عمل</p>
        </div>

        <div class="tools-section__grid">
          <div class="card tool-card animate-on-scroll delay-1" style="cursor:pointer" onclick="CareerAI.router.navigate('/tools/resume-builder')">
            <span class="tag tag--accent" style="position:absolute;top:var(--space-4);left:var(--space-4)">مجانية</span>
            <div class="card__icon card__icon--primary">
              <span style="width:36px;height:36px;display:inline-flex">${icons.resume}</span>
            </div>
            <h3 class="card__title">منشئ السيرة الذاتية (AI Resume)</h3>
            <p class="card__text">أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة ATS خطوة بخطوة مع تحسين فوري وتصدير PDF مجاناً.</p>
            <a href="#/tools/resume-builder" class="card__link" onclick="CareerAI.router.navigate('/tools/resume-builder')">
              جرّب الأداة الآن
              <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </a>
          </div>

          <div class="card tool-card animate-on-scroll delay-2" style="cursor:pointer" onclick="CareerAI.router.navigate('/tools/resume-analyzer')">
            <span class="tag tag--accent" style="position:absolute;top:var(--space-4);left:var(--space-4)">مجانية</span>
            <div class="card__icon card__icon--accent">
              <span style="width:36px;height:36px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">محلل السيرة الذاتية ATS</h3>
            <p class="card__text">حلّل سيرتك الذاتية واكتشف نقاط القوة والضعف ومطابقة الكلمات المفتاحية مع حساب ATS Score.</p>
            <a href="#/tools/resume-analyzer" class="card__link" onclick="CareerAI.router.navigate('/tools/resume-analyzer')">
              جرّب الأداة الآن
              <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </a>
          </div>

          <div class="card tool-card animate-on-scroll delay-3" style="cursor:pointer" onclick="CareerAI.router.navigate('/tools/cover-letter-generator')">
            <span class="tag tag--accent" style="position:absolute;top:var(--space-4);left:var(--space-4)">مجانية</span>
            <div class="card__icon card__icon--primary">
              <span style="width:36px;height:36px;display:inline-flex">${icons.cover}</span>
            </div>
            <h3 class="card__title">مولد رسالة التقديم (Cover Letter)</h3>
            <p class="card__text">أنشئ رسالة تغطية احترافية مقنعة ومخصصة لكل وظيفة بـ 5 لغات مع إمكانية التعديل وتصدير Word.</p>
            <a href="#/tools/cover-letter-generator" class="card__link" onclick="CareerAI.router.navigate('/tools/cover-letter-generator')">
              جرّب الأداة الآن
              <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </a>
          </div>

          <div class="card tool-card animate-on-scroll delay-1" style="cursor:pointer" onclick="CareerAI.router.navigate('/tools/interview-questions')">
            <span class="tag tag--accent" style="position:absolute;top:var(--space-4);left:var(--space-4)">مجانية</span>
            <div class="card__icon card__icon--accent">
              <span style="width:36px;height:36px;display:inline-flex">${icons.interview}</span>
            </div>
            <h3 class="card__title">مولد أسئلة المقابلات</h3>
            <p class="card__text">احصل على أسئلة مقابلة متخصصة لوظيفتك مع إجابات نموذجية وطريقة STAR وتصدير PDF.</p>
            <a href="#/tools/interview-questions" class="card__link" onclick="CareerAI.router.navigate('/tools/interview-questions')">
              جرّب الأداة الآن
              <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </a>
          </div>

          <div class="card tool-card animate-on-scroll delay-2" style="cursor:pointer" onclick="CareerAI.router.navigate('/tools/ats-keywords')">
            <span class="tag tag--accent" style="position:absolute;top:var(--space-4);left:var(--space-4)">مجانية</span>
            <div class="card__icon card__icon--primary">
              <span style="width:36px;height:36px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">مستخرج كلمات ATS المفتاحية</h3>
            <p class="card__text">استخرج أهم الكلمات الدلالية والمهارات والأدوات المطلوبة في إعلان الوظيفة لرفع نسبة القبول.</p>
            <a href="#/tools/ats-keywords" class="card__link" onclick="CareerAI.router.navigate('/tools/ats-keywords')">
              جرّب الأداة الآن
              <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </a>
          </div>

          <div class="card tool-card animate-on-scroll delay-3" style="cursor:pointer" onclick="CareerAI.router.navigate('/tools')">
            <div class="card__icon card__icon--accent">
              <span style="width:36px;height:36px;display:inline-flex">${icons.rocket}</span>
            </div>
            <h3 class="card__title">المزيد من الأدوات القادمة</h3>
            <p class="card__text">نعمل باستمرار على تطوير أدوات جديدة كالترجمة الذكية وتقييم المهارات وتطوير ملفات لينكد إن.</p>
            <a href="#/tools" class="card__link" onclick="CareerAI.router.navigate('/tools')">
              استكشف الكل
              <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </a>
          </div>
        </div>

        <div class="text-center" style="margin-top:var(--space-10)">
          <a href="#/tools" class="btn btn--secondary btn--lg" onclick="CareerAI.router.navigate('/tools')">
            عرض جميع الأدوات (5 أدوات مفعلة)
            <span style="width:16px;height:16px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Google AdSense Display Banner (Home Page Middle) -->
    <div class="container" style="padding:var(--space-6) var(--container-padding)">
      <div class="adsense-container adsense-display">
        <span class="adsense-label">إعلان ممول / Sponsored</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="1122334455"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- Latest Articles Section -->
    <section class="section" id="articles-section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.cover}</span>
            آخر المقالات
          </span>
          <h2 class="section__title">نصائح وإرشادات <span class="text-gradient">مهنية</span></h2>
          <p class="section__subtitle">اقرأ أحدث المقالات والنصائح التي تساعدك في تطوير مسيرتك المهنية</p>
        </div>

        <div class="articles-section__grid">
          ${(() => {
            const latestArticles = window.CareerAI.db.getArticles(false).slice(0, 3);
            if (latestArticles.length === 0) {
              return '<div style="grid-column:1/-1;text-align:center;padding:var(--space-8)"><p>لا توجد مقالات منشورة حالياً</p></div>';
            }
            return latestArticles.map((article, i) => `
              <article class="blog-card animate-on-scroll delay-${i + 1}" style="cursor:pointer" onclick="CareerAI.router.navigate('/blog/${article.slug}')">
                <div class="blog-card__image" style="height:200px">
                  <img src="${article.image}" alt="${article.title}" style="width:100%;height:100%;object-fit:cover" loading="lazy">
                </div>
                <div class="blog-card__content">
                  <div class="blog-card__meta">
                    <span class="blog-card__tag">${article.categoryName}</span>
                    <span>${article.publishedAt}</span>
                  </div>
                  <h3 class="blog-card__title">${article.title}</h3>
                  <p class="blog-card__excerpt">${article.excerpt}</p>
                </div>
              </article>
            `).join('');
          })()}
        </div>

        <div class="text-center" style="margin-top:var(--space-10)">
          <a href="#/blog" class="btn btn--secondary" onclick="CareerAI.router.navigate('/blog')">
            جميع المقالات
            <span style="width:16px;height:16px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section section--alt" id="faq-section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            ❓ الأسئلة الشائعة
          </span>
          <h2 class="section__title">أسئلة <span class="text-gradient">شائعة</span></h2>
          <p class="section__subtitle">إجابات على أكثر الأسئلة التي تصلنا من المستخدمين</p>
        </div>

        <div class="accordion animate-on-scroll">
          <div class="accordion__item active">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>ما هي منصة Factor Career؟</span>
              <span class="accordion__icon">
                <span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span>
              </span>
            </button>
            <div class="accordion__body" style="max-height:200px">
              <div class="accordion__content">
                Factor Career هي منصة ذكية ومجانية متخصصة في مساعدة الباحثين عن عمل والمهنيين في تحسين وبناء سيرهم الذاتية، اجتياز أنظمة الفرز ATS، والتحضير لمقابلات العمل وصياغة رسائل التقديم بأحدث تقنيات الذكاء الاصطناعي.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل جميع أدوات المنصة مجانية؟</span>
              <span class="accordion__icon">
                <span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span>
              </span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                نعم، جميع أدوات Factor Career متاحة مجاناً بالكامل وبدون أي اشتراكات أو رسوم خفية. نؤمن بأن كل شخص يستحق أدوات احترافية لتطوير مساره المهني.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل بياناتي آمنة على المنصة؟</span>
              <span class="accordion__icon">
                <span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span>
              </span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                بالتأكيد. نحن نأخذ أمان بياناتك على محمل الجد. جميع البيانات مشفرة ولا نشاركها مع أي طرف ثالث. يمكنك حذف بياناتك في أي وقت. اقرأ المزيد في سياسة الخصوصية الخاصة بنا.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>كيف يعمل محلل السيرة الذاتية؟</span>
              <span class="accordion__icon">
                <span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span>
              </span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                يقوم محلل السيرة الذاتية بتحليل سيرتك باستخدام الذكاء الاصطناعي ومقارنتها بمعايير سوق العمل. يقدم لك تقييماً شاملاً يتضمن نقاط القوة، ونقاط التحسين، واقتراحات محددة لتحسين كل قسم من أقسام سيرتك الذاتية.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل يمكنني استخدام الأدوات بدون تسجيل حساب؟</span>
              <span class="accordion__icon">
                <span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span>
              </span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                نعم، يمكنك استخدام معظم الأدوات بدون إنشاء حساب. لكن التسجيل يمنحك مميزات إضافية مثل حفظ النتائج والعودة إليها لاحقاً، وتتبع تقدمك، والحصول على توصيات مخصصة.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google AdSense Square Unit & Compact Banner Row (Before CTA) -->
    <div class="container" style="padding:var(--space-6) var(--container-padding)">
      <div class="adsense-row">
        <div class="adsense-container adsense-square">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="2002002002"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="3003003003"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-section__content animate-on-scroll">
          <h2 class="cta-section__title">ابدأ رحلتك المهنية اليوم</h2>
          <p class="cta-section__text">انضم لآلاف المستخدمين الذين حسّنوا فرصهم الوظيفية باستخدام أدواتنا الذكية</p>
          <a href="#/tools" class="btn btn--white btn--lg" onclick="CareerAI.router.navigate('/tools')">
            ابدأ مجاناً
            <span style="width:20px;height:20px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
          </a>
        </div>
      </div>
    </section>
  `;
};

/* --- Home Page SEO --- */
window.CareerAI.pages.homeSEO = {
  title: 'Factor Career - بناء وتطوير مسيرتك المهنية بالذكاء الاصطناعي',
  description: 'أدوات ذكاء اصطناعي مجانية من Factor Career لتحليل السيرة الذاتية، كتابة رسائل التغطية، التحضير للمقابلات، والبحث عن الوظائف المناسبة.',
  keywords: 'سيرة ذاتية, ذكاء اصطناعي, بحث عن عمل, مقابلات, وظائف, Factor Career'
};
