/* ============================================
   CareerAI - Home Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.home = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons;

  const toolsList = [
    {
      id: 'resume-builder',
      title: isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الذكي',
      desc: isEn ? 'Create professional, ATS-optimized resumes in minutes with intelligent suggestions.' : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة الفرز الآلي ATS مع اقتراحات ذكية وتصدير PDF فوري.',
      icon: icons.fileText,
      tag: isEn ? 'Most Popular' : 'الأكثر استخداماً',
      color: 'primary',
      link: '/tools/resume-builder'
    },
    {
      id: 'resume-analyzer',
      title: isEn ? 'ATS Resume Checker' : 'محلل وفاحص السيرة ATS',
      desc: isEn ? 'Check your resume ATS compatibility score and get actionable optimization tips.' : 'افحص نسبة توافق سيرتك الذاتية مع الوظائف واكتشف الكلمات المفتاحية الناقصة لتجاوز الفرز الآلي.',
      icon: icons.check,
      tag: isEn ? 'Smart ATS Scan' : 'فحص ذكي',
      color: 'accent',
      link: '/tools/resume-analyzer'
    },
    {
      id: 'cover-letter-generator',
      title: isEn ? 'Cover Letter Generator' : 'مولد رسائل التقديم',
      desc: isEn ? 'Generate tailored, persuasive cover letters matching specific job descriptions.' : 'ولّد خطابات تقديم احترافية ومخصصة لكل وظيفة لزيادة فرص قبولك والحصول على مقابلات.',
      icon: icons.mail,
      tag: isEn ? 'AI Writer' : 'توليد فوري',
      color: 'secondary',
      link: '/tools/cover-letter-generator'
    },
    {
      id: 'interview-questions',
      title: isEn ? 'Interview Coach' : 'مدرب أسئلة المقابلات',
      desc: isEn ? 'Practice real-world interview questions tailored to your field with STAR answers.' : 'تدرّب على أسئلة المقابلات الوظيفية الواقعية مع إجابات نموذجية وفق أسلوب STAR.',
      icon: icons.users,
      tag: isEn ? 'STAR Method' : 'نموذج STAR',
      color: 'warning',
      link: '/tools/interview-questions'
    },
    {
      id: 'ats-keywords',
      title: isEn ? 'ATS Keywords Matcher' : 'مستخرج كلمات ATS',
      desc: isEn ? 'Extract high-priority skills and keywords from any job description in seconds.' : 'استخرج أهم المهارات والكلمات المفتاحية من إعلانات التوظيف لتعزيز قوة سيرتك الذاتية.',
      icon: icons.target,
      tag: isEn ? 'High Priority' : 'مستخرج مهارات',
      color: 'primary',
      link: '/tools/ats-keywords'
    }
  ];

  const faqs = [
    {
      q: isEn ? 'Are Factor Career tools completely free to use?' : 'هل أدوات Factor Career مجانية بالكامل؟',
      a: isEn ? 'Yes, all AI career tools on Factor Career are 100% free with unlimited access and no hidden charges or subscriptions required.' : 'نعم، جميع أدوات المنصة مجانية بنسبة 100% بدون أي رسوم خفية أو اشتراكات، ويمكنك استخدامها وتنزيل النتائج بصيغة PDF بدون حدود.'
    },
    {
      q: isEn ? 'What is an ATS-friendly resume?' : 'ما هي السيرة الذاتية المتوافقة مع أنظمة ATS؟',
      a: isEn ? 'An ATS (Applicant Tracking System) friendly resume uses clean formatting and industry-standard keywords so automated recruiting software can accurately parse your qualifications.' : 'السيرة المتوافقة مع ATS هي سيرة مصممة بهيكل قياسي وكلمات مفتاحية واضحة يفهمها الروبوت ونظام الفرز الآلي الذي تستخدمه 95% من الشركات الكبرى قبل وصول السيرة للمسؤول البشري.'
    },
    {
      q: isEn ? 'Do I need to create an account to download my resume?' : 'هل أحتاج لإنشاء حساب لتنزيل سيرتي الذاتية؟',
      a: isEn ? 'No registration is required. You can build, customize, and download your professional resume in PDF format instantly.' : 'لا، لا يتطلب الموقع أي تسجيل دخول إجباري. يمكنك بناء سيرتك الذاتية وتنزيلها بصيغة PDF فوراً مع الحفاظ التام على خصوصية بياناتك.'
    },
    {
      q: isEn ? 'How does the AI Resume Checker work?' : 'كيف يعمل فاحص السيرة الذاتية بالذكاء الاصطناعي؟',
      a: isEn ? 'It compares your resume text with your target job description to calculate keyword density, layout compliance, and gives you missing keywords with actionable advice.' : 'يقوم بمقارنة محتوى سيرتك الذاتية مع نص الإعلان الوظيفي المستهدف، ويحلل المهارات والكلمات الناقصة ويعطيك تقييماً دقيقاً مع خطوات عملية لرفع نسبة القبول.'
    }
  ];

  return `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__bg-glow"></div>
      <div class="container">
        <div class="hero__content">
          <div class="hero__badge animate-on-scroll">
            <span style="width:18px;height:18px;display:inline-flex">${icons.sparkles}</span>
            <span>${t('hero.badge', 'منصة السيرة الذاتية والبحث عن وظائف بالذكاء الاصطناعي')}</span>
          </div>

          <h1 class="hero__title animate-on-scroll delay-1">
            ${isEn ? 'Craft Winning Resumes & Land Your <span class="text-gradient">Dream Career</span>' : 'اصنع <span class="text-gradient">السيرة الذاتية</span> الاحترافية وابدأ مسيرتك المهنية بثقة'}
          </h1>

          <p class="hero__subtitle animate-on-scroll delay-2">
            ${isEn ? 'Build ATS-optimized resumes, practice job interviews with AI STAR models, generate persuasive cover letters, and discover career opportunities.' : 'صمم سيرة ذاتية احترافية متوافقة مع أنظمة ATS، تدرّب على أسئلة المقابلات، واستخرج الكلمات المفتاحية بنقرة واحدة مجاناً.'}
          </p>

          <div class="hero__actions animate-on-scroll delay-3">
            <a href="/tools/resume-builder" class="btn btn--primary btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
              ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
            </a>
            <a href="/tools" class="btn btn--secondary btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
              ${t('hero.btnExplore', 'استكشف جميع الأدوات والوظائف')}
            </a>
          </div>

          <!-- Hero Square Ad Placement (300x250) -->
          <div class="hero-square-ad animate-on-scroll delay-3">
            <div class="hero-square-ad__frame">
              <span class="hero-square-ad__label">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:3px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${t('common.sponsored', 'إعلان ممول / Sponsored')}
              </span>
              <div class="hero-square-ad__box">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:250px"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="1122334455"
                     data-ad-format="rectangle"></ins>
              </div>
            </div>
          </div>

          <!-- Stats / Highlights Row -->
          <div class="hero__stats animate-on-scroll delay-4">
            <div class="hero__stat">
              <div class="hero__stat-num">100%</div>
              <div class="hero__stat-label">${isEn ? 'Free Forever' : 'مجاني بالكامل'}</div>
            </div>
            <div class="hero__stat-divider"></div>
            <div class="hero__stat">
              <div class="hero__stat-num">5+</div>
              <div class="hero__stat-label">${isEn ? 'AI Career Tools' : 'أدوات ذكاء اصطناعي'}</div>
            </div>
            <div class="hero__stat-divider"></div>
            <div class="hero__stat">
              <div class="hero__stat-num">ATS</div>
              <div class="hero__stat-label">${isEn ? 'Optimized Format' : 'متوافق مع الفرز الآلي'}</div>
            </div>
            <div class="hero__stat-divider"></div>
            <div class="hero__stat">
              <div class="hero__stat-num">PDF</div>
              <div class="hero__stat-label">${isEn ? 'Instant Download' : 'تحميل فوري'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section with 300x600 Skyscraper Ad -->
    <section class="section" id="features" style="background:var(--color-bg-secondary)">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.shield}</span>
            ${isEn ? 'Why Factor Career?' : 'لماذا تختار Factor Career؟'}
          </span>
          <h2 class="section__title">${isEn ? 'Features that Make Us the <span class="text-gradient">Best Choice</span>' : 'مميزات تجعلنا <span class="text-gradient">الخيار الأفضل</span>'}</h2>
          <p class="section__subtitle">${isEn ? 'Everything you need to level up your career in one place with cutting-edge AI technologies.' : 'كل ما تحتاجه للارتقاء بمسيرتك المهنية في مكان واحد وبأحدث تقنيات الذكاء الاصطناعي.'}</p>
        </div>

        <div class="features-showcase-layout">
          <!-- Features 2x2 Grid -->
          <div class="features__grid">
            <div class="card animate-on-scroll delay-1">
              <div class="card__icon card__icon--primary">
                <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
              </div>
              <h3 class="card__title">${isEn ? 'ATS Resume Builder' : 'صانع السيرة الذاتية ATS'}</h3>
              <p class="card__text">${isEn ? 'Build error-free, ATS-friendly resumes that pass employer scanning systems.' : 'أنشئ سيرة ذاتية احترافية خالية من الأخطاء ومتوافقة مع أنظمة تتبع المتقدمين الآلية لضمان وصولك للمقابلة.'}</p>
            </div>

            <div class="card animate-on-scroll delay-2">
              <div class="card__icon card__icon--accent">
                <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
              </div>
              <h3 class="card__title">${isEn ? 'Resume ATS Audit' : 'فحص وتدقيق السيرة الذاتية'}</h3>
              <p class="card__text">${isEn ? 'Get instant feedback on resume strength and missing keywords for targeted jobs.' : 'احصل على تحليل فوري لنقاط القوة والضعف في سيرتك الذاتية مع مقترحات عملية لتحسين صياغة الإنجازات.'}</p>
            </div>

            <div class="card animate-on-scroll delay-3">
              <div class="card__icon card__icon--primary">
                <span style="width:28px;height:28px;display:inline-flex">${icons.easy}</span>
              </div>
              <h3 class="card__title">${isEn ? 'Smart Cover Letters' : 'رسائل التغطية الذكية'}</h3>
              <p class="card__text">${isEn ? 'Generate convincing cover letters tailored to every job description with AI.' : 'ولّد رسائل تقديم Cover Letters مقنعة ومخصصة لكل وظيفة بضغطة زر وبعدة لغات.'}</p>
            </div>

            <div class="card animate-on-scroll delay-4">
              <div class="card__icon card__icon--accent">
                <span style="width:28px;height:28px;display:inline-flex">${icons.free}</span>
              </div>
              <h3 class="card__title">${isEn ? 'Job Interview Prep' : 'التحضير للمقابلات الوظيفية'}</h3>
              <p class="card__text">${isEn ? 'Practice common interview questions with STAR method structured answers.' : 'تدرّب على أسئلة المقابلات النموذجية في مجالك مع أفضل إجابات باستراتيجية STAR الاحترافية.'}</p>
            </div>
          </div>

          <!-- Vertical Half-Page Skyscraper (300x600) on the Left/Side -->
          <div class="features-ad-col animate-on-scroll">
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
          <h2 class="section__title">${isEn ? 'Advanced <span class="text-gradient">AI Career</span> Tools' : 'أدوات <span class="text-gradient">الذكاء الاصطناعي</span> المتقدمة'}</h2>
          <p class="section__subtitle">${isEn ? 'A comprehensive collection of intelligent tools to assist you in every step of your career journey.' : 'مجموعة شاملة من الأدوات المصممة خصيصاً لمساعدتك في كل مرحلة من مراحل البحث عن عمل.'}</p>
        </div>

        <div class="tools-section__grid">
          ${toolsList.map((tool, index) => `
            <div class="card tool-card animate-on-scroll delay-${(index % 3) + 1}" style="cursor:pointer" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
              <span class="tag tag--accent" style="position:absolute;top:var(--space-4);${isEn ? 'right' : 'left'}:var(--space-4)">${tool.tag}</span>
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:32px;height:32px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              <a href="${tool.link}" class="card__link" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
                ${isEn ? 'Use Tool Free' : 'جرّب الأداة الآن'}
                <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
            </div>
          `).join('')}
        </div>

        <!-- Google AdSense - In Gray Space (Tools Section) -->
        <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin: 3rem auto 0; max-width: 760px;">
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
    </section>

    <!-- FAQ Section with Vertical Skyscraper Sidebar -->
    <section class="section" id="faq">
      <div class="container">
        <div class="page-with-sidebar">
          <div class="main-content-col">
            <div class="section__header animate-on-scroll" style="text-align:start">
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

    <!-- CTA Section -->
    <section class="section section--dark" style="background:var(--gradient-hero)">
      <div class="container text-center">
        <div class="cta-section animate-on-scroll" style="background:transparent;border:none">
          <h2 class="cta-section__title">${isEn ? 'Ready to Upgrade Your Career Today?' : 'جاهز لبدء مرحلة جديدة في مسيرتك المهنية؟'}</h2>
          <p class="cta-section__text">
            ${isEn ? 'Join thousands of ambitious professionals crafting high-impact resumes and landing great jobs.' : 'انضم لآلاف المهنيين والباحثين عن عمل الذين طوّروا سيرهم الذاتية وحصلوا على مقابلاتهم الوظيفية.'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="/tools/resume-builder" class="btn btn--primary btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
              ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
            </a>
            <a href="/jobs" class="btn btn--secondary btn--lg" style="border-color:white;color:white" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">
              ${t('nav.jobs', 'تصفح الوظائف والفرص')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.homeSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Factor Career | Free AI Resume Builder & Job Search Platform',
      description: 'Build an ATS-optimized professional resume for free with AI, practice job interviews, generate smart cover letters, and discover career opportunities with Factor Career.',
      keywords: 'Resume Builder, Free CV Maker, ATS Resume, AI Career Tools, Cover Letter Generator, Job Search, Interview Prep, Career Advice, Factor Career'
    };
  }
  return {
    title: 'Factor Career | إنشاء سيرة ذاتية احترافية بالذكاء الاصطناعي ووظائف',
    description: 'صمم سيرة ذاتية احترافية متوافقة مع أنظمة ATS بالذكاء الاصطناعي واستكشف أحدث الوظائف وفرص العمل بسهولة مع Factor Career.',
    keywords: 'سيرة ذاتية, وظائف, إنشاء سيرة ذاتية, الذكاء الاصطناعي, Factor Career, تصميم سيرة ذاتية, نماذج سيرة ذاتية, فرص عمل, CV, Resume Builder, ATS Resume, Jobs'
  };
};
