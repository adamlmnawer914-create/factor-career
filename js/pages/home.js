/* ============================================
   Factor Career - Home Page (Multilingual Support)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.home = function() {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  const toolsList = [
    {
      icon: icons.resume,
      title: isEn ? 'AI Resume Builder (ATS)' : 'منشئ السيرة الذاتية (AI Resume)',
      desc: isEn ? 'Build a sleek, ATS-optimized resume step by step with AI phrasing suggestions and high-res PDF download.' : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة ATS خطوة بخطوة مع تحسين فوري وتصدير PDF مجاناً.',
      link: '/tools/resume-builder',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      color: 'primary'
    },
    {
      icon: icons.shield,
      title: isEn ? 'ATS Resume Checker & Auditor' : 'محلل وفاحص السيرة الذاتية ATS',
      desc: isEn ? 'Audit your resume, discover strengths & weaknesses, check keyword match, and get your ATS score in seconds.' : 'فحص وتدقيق سيرتك الذاتية ومعرفة نقاط القوة والضعف ومطابقتها مع الكلمات المفتاحية واحتساب ATS Score.',
      link: '/tools/resume-analyzer',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      color: 'accent'
    },
    {
      icon: icons.cover,
      title: isEn ? 'Smart Cover Letter Generator' : 'مولد رسائل التقديم (Cover Letter)',
      desc: isEn ? 'Generate customized, compelling cover letters tailored to any job description in 5 languages with instant editing.' : 'أنشئ رسالة تغطية احترافية ومخصصة بالكامل لكل وظيفة تتقدم لها بالذكاء الاصطناعي بخمس لغات وتصدير Word وPDF.',
      link: '/tools/cover-letter-generator',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      color: 'primary'
    },
    {
      icon: icons.interview,
      title: isEn ? 'Job Interview Questions Coach' : 'مولد أسئلة مقابلات العمل',
      desc: isEn ? 'Master tailored interview questions for your exact role and seniority with STAR model answers and tips.' : 'أسئلة مقابلات توظيف مخصصة لمجالك ومستوى خبرتك مع إجابات نموذجية وفق استراتيجية STAR الاحترافية.',
      link: '/tools/interview-questions',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      color: 'accent'
    },
    {
      icon: icons.target,
      title: isEn ? 'ATS Keywords Matcher' : 'مستخرج كلمات ATS المفتاحية',
      desc: isEn ? 'Extract essential keywords, skills, and tools from job descriptions to perfectly align your resume.' : 'استخرج أهم الكلمات الدلالية والمهارات والأدوات المطلوبة في أي إعلان وظيفي لملاءمة سيرتك الذاتية.',
      link: '/tools/ats-keywords',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      color: 'primary'
    },
    {
      icon: icons.users,
      title: isEn ? '💼 Jobs & Career Opportunities' : '💼 الوظائف والفرص المهنية',
      desc: isEn ? 'Explore curated, active job openings matched to your profile and apply directly.' : 'استكشف أحدث فرص العمل المتاحة والمختارة بعناية في مختلف التخصصات والتقديم الفوري عليها.',
      link: '/jobs',
      tag: isEn ? 'New' : 'جديد',
      color: 'accent'
    }
  ];

  const faqs = [
    {
      q: isEn ? 'What is Factor Career?' : 'ما هي منصة Factor Career؟',
      a: isEn ? 'Factor Career is a free, intelligent career suite designed to help job seekers build ATS-optimized resumes, write customized cover letters, prepare for job interviews, and explore curated career opportunities.' : 'Factor Career هي منصة ذكية ومجانية متخصصة في مساعدة الباحثين عن عمل والمهنيين في تحسين وبناء سيرهم الذاتية، اجتياز أنظمة الفرز ATS، والتحضير لمقابلات العمل بأحدث تقنيات الذكاء الاصطناعي.'
    },
    {
      q: isEn ? 'Are all tools 100% free to use?' : 'هل جميع الأدوات مجانية فعلاً؟',
      a: isEn ? 'Yes! All Factor Career tools and features are 100% free without any subscription fees or hidden costs.' : 'نعم، جميع أدوات وميزات Factor Career متاحة مجاناً بالكامل وبدون أي اشتراكات أو رسوم خفية.'
    },
    {
      q: isEn ? 'What is an ATS system and why does it matter?' : 'ما هو نظام ATS ولماذا هو مهم لسيرتي الذاتية؟',
      a: isEn ? 'Applicant Tracking Systems (ATS) are software used by employers to filter applications before humans review them. Factor Career ensures your resume is formatted and keyword-optimized to pass these filters easily.' : 'نظام تتبع المتقدمين (ATS) هو نظام آلي تستخدمه الشركات لفرز السير الذاتية تلقائياً. أدواتنا تضمن توافق سيرتك الذاتية مع هذه الأنظمة لزيادة فرص استدعائك للمقابلات.'
    },
    {
      q: isEn ? 'Is my personal data secure?' : 'هل بياناتي ومعلوماتي الشخصية آمنة؟',
      a: isEn ? 'Yes, your data is processed directly inside your browser and we strictly adhere to high standards of privacy and data security.' : 'نعم بكل تأكيد، تتم معالجة بياناتك مباشرة في متصفحك ونحن نلتزم بأعلى معايير الأمان والخصوصية وحماية البيانات.'
    }
  ];

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
              ${t('hero.badge', 'منصة التوظيف والمسار المهني بالذكاء الاصطناعي')}
            </div>
            <h1 class="hero__title">
              ${t('hero.title1', 'صانع السيرة الذاتية الاحترافية')}
              <br>
              <span class="hero__title-accent">${t('hero.title2', 'والبحث عن أفضل الوظائف')}</span>
              <br>
              ${t('hero.title3', 'بتقنيات الذكاء الاصطناعي المجانية')}
            </h1>
            <p class="hero__subtitle">
              ${t('hero.subtitle', 'صمم سيرة ذاتية احترافية مجاناً بالذكاء الاصطناعي واستكشف أحدث الوظائف وفرص العمل بسهولة مع Factor Career.')}
            </p>
            <div class="hero__actions">
              <a href="#/tools/resume-builder" class="btn btn--primary btn--lg" onclick="CareerAI.router.navigate('/tools/resume-builder')">
                ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
                <span style="width:20px;height:20px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
              <a href="#/tools" class="btn btn--ghost btn--lg" onclick="CareerAI.router.navigate('/tools')">
                ${t('hero.btnExplore', 'استكشف الأدوات')}
              </a>
            </div>

            <div class="hero__stats">
              <div>
                <div class="hero__stat-number">${t('hero.stat1Num', '100%')}</div>
                <div class="hero__stat-label">${t('hero.stat1Label', 'مجاني بالكامل')}</div>
              </div>
              <div>
                <div class="hero__stat-number">${t('hero.stat2Num', '5+')}</div>
                <div class="hero__stat-label">${t('hero.stat2Label', 'أدوات ذكاء اصطناعي')}</div>
              </div>
              <div>
                <div class="hero__stat-number">${t('hero.stat3Num', 'ATS')}</div>
                <div class="hero__stat-label">${t('hero.stat3Label', 'متوافق مع الفرز الآلي')}</div>
              </div>
            </div>
          </div>

          <div class="hero__visual">
            <div class="hero-image-wrapper">
              <img src="img/hero-career-ai.jpg" alt="Factor Career AI Suite" class="hero-image" loading="eager" />
              <div class="hero-image-glow"></div>
            </div>
          </div>

          <!-- Square Ad -->
          <div class="hero__ad-col animate-on-scroll">
            <div class="adsense-container adsense-square hero-square-ad__inner">
              <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
              <ins class="adsbygoogle"
                   style="display:inline-block;width:300px;height:250px"
                   data-ad-client="ca-pub-7520213352755959"
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
            ${t('home.whyTitle', 'لماذا Factor Career؟')}
          </span>
          <h2 class="section__title">${isEn ? 'Features that Make Us the <span class="text-gradient">Best Choice</span>' : 'مميزات تجعلنا <span class="text-gradient">الخيار الأفضل</span>'}</h2>
          <p class="section__subtitle">${t('home.whySubtitle', 'كل ما تحتاجه للارتقاء بمسيرتك المهنية في مكان واحد وبأحدث تقنيات الذكاء الاصطناعي')}</p>
        </div>

        <div class="features__grid">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
            </div>
            <h3 class="card__title">${t('home.feat1Title', 'صانع السيرة الذاتية ATS')}</h3>
            <p class="card__text">${t('home.feat1Desc', 'أنشئ سيرة ذاتية احترافية خالية من الأخطاء ومتوافقة مع أنظمة تتبع المتقدمين الآلية لضمان وصولك للمقابلة.')}</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">${t('home.feat2Title', 'فحص وتدقيق السيرة الذاتية')}</h3>
            <p class="card__text">${t('home.feat2Desc', 'احصل على تحليل فوري لنقاط القوة والضعف في سيرتك الذاتية مع مقترحات عملية لتحسين صياغة الإنجازات.')}</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.easy}</span>
            </div>
            <h3 class="card__title">${t('home.feat3Title', 'رسائل التغطية الذكية')}</h3>
            <p class="card__text">${t('home.feat3Desc', 'ولّد رسائل تقديم وCover Letters مقنعة ومخصصة لكل وظيفة بضغطة زر وبعدة لغات.')}</p>
          </div>

          <div class="card animate-on-scroll delay-4">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.free}</span>
            </div>
            <h3 class="card__title">${t('home.feat4Title', 'التحضير للمقابلات الوظيفية')}</h3>
            <p class="card__text">${t('home.feat4Desc', 'تدرّب على أسئلة المقابلات النموذجية في مجالك مع أفضل إجابات باستراتيجية STAR الاحترافية.')}</p>
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
            ${isEn ? 'AI Suite' : 'أدواتنا الذكية'}
          </span>
          <h2 class="section__title">${isEn ? 'Advanced <span class="text-gradient">AI Career</span> Tools' : 'أدوات <span class="text-gradient">ذكاء اصطناعي</span> متقدمة'}</h2>
          <p class="section__subtitle">${t('tools.headerSubtitle', 'مجموعة شاملة من الأدوات المصممة خصيصاً لمساعدتك في كل مرحلة من مراحل البحث عن عمل')}</p>
        </div>

        <div class="tools-section__grid">
          ${toolsList.map((tool, index) => `
            <div class="card tool-card animate-on-scroll delay-${(index % 3) + 1}" style="cursor:pointer" onclick="CareerAI.router.navigate('${tool.link}')">
              <span class="tag tag--accent" style="position:absolute;top:var(--space-4);${isEn ? 'right' : 'left'}:var(--space-4)">${tool.tag}</span>
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:32px;height:32px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              <a href="#${tool.link}" class="card__link" onclick="CareerAI.router.navigate('${tool.link}')">
                ${isEn ? 'Use Tool Free' : 'جرّب الأداة الآن'}
                <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Google AdSense In-Between Banner Container -->
    <div class="container" style="padding-top:var(--space-6)">
      <div class="adsense-container adsense-banner">
        <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Sponsored')}</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-7520213352755959"
             data-ad-slot="1234567890"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="section" id="faq">
      <div class="container container--narrow">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.target}</span>
            ${isEn ? 'FAQ' : 'الأسئلة الشائعة'}
          </span>
          <h2 class="section__title">${isEn ? 'Frequently Asked <span class="text-gradient">Questions</span>' : 'كل ما تود معرفته عن <span class="text-gradient">Factor Career</span>'}</h2>
        </div>

        <div class="accordion animate-on-scroll">
          ${faqs.map(faq => `
            <div class="accordion__item">
              <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
                <span>${faq.q}</span>
                <span class="accordion__icon" style="width:20px;height:20px;display:inline-flex">${icons.chevronDown}</span>
              </button>
              <div class="accordion__body">
                <p>${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section--dark" style="background:var(--gradient-hero)">
      <div class="container text-center">
        <div class="cta-section animate-on-scroll" style="background:transparent;border:none">
          <h2 class="cta-section__title">${isEn ? 'Ready to Upgrade Your Career Today?' : 'جاهز لبدء مرحلة جديدة في مسيرتك المهنية؟'}</h2>
          <p class="cta-section__text">
            ${isEn ? 'Join thousands of ambitious professionals crafting high-impact resumes and landing great jobs.' : 'انضم لآلاف المهنيين والباحثين عن عمل الذين طوروا سيرهم الذاتية وحصلوا على مقابلاتهم الوظيفية.'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="#/tools/resume-builder" class="btn btn--primary btn--lg" onclick="CareerAI.router.navigate('/tools/resume-builder')">
              ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
            </a>
            <a href="#/jobs" class="btn btn--secondary btn--lg" style="border-color:white;color:white" onclick="CareerAI.router.navigate('/jobs')">
              ${t('nav.jobs', 'تصفح الوظائف والفرص')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.homeSEO = {
  title: 'Factor Career | إنشاء سيرة ذاتية احترافية ووظائف بالذكاء الاصطناعي',
  description: 'صمم سيرة ذاتية احترافية مجاناً بالذكاء الاصطناعي واستكشف أحدث الوظائف وفرص العمل بسهولة مع Factor Career.',
  keywords: 'سيرة ذاتية, سيرة, وظيفة, وظائف, إنشاء سيرة ذاتية, الذكاء الاصطناعي, Factor Career, تصميم سيرة ذاتية, نماذج سيرة ذاتية, فرص عمل, عمل, وظائف شاغرة, CV, Resume Builder, ATS Resume, Jobs'
};
