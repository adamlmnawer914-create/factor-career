/* ============================================
   CareerAI - Home Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.home = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons || {};

  const toolsList = [
    {
      id: 'resume-builder',
      title: isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الذكي',
      desc: isEn ? 'Create professional, ATS-optimized resumes in minutes with intelligent suggestions.' : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة الفرز الآلي ATS مع اقتراحات ذكية وتصدير PDF فوري.',
      icon: icons.fileText || icons.resume,
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
      desc: isEn ? 'Practice real-world interview questions tailored to your field with STAR method answers.' : 'تدرّب على أسئلة المقابلات الوظيفية الواقعية وإجابات نموذجية وفق نموذج STAR الاحترافي.',
      icon: icons.interview,
      tag: isEn ? 'STAR Method' : 'نموذج STAR',
      color: 'primary',
      link: '/tools/interview-questions'
    },
    {
      id: 'ats-keywords',
      title: isEn ? 'ATS Keywords Matcher' : 'مستخرج الكلمات المفتاحية',
      desc: isEn ? 'Extract essential job keywords and match them against your resume skills in seconds.' : 'استخرج الكلمات المفتاحية والمهارات الأساسية من وصف الوظيفة لرفع فرص اجتياز الفرز الآلي.',
      icon: icons.skills,
      tag: isEn ? 'Keyword Optimizer' : 'مطابقة ذكية',
      color: 'accent',
      link: '/tools/ats-keywords'
    }
  ];

  const faqs = isEn ? [
    { q: 'Is Factor Career completely free?', a: 'Yes! All core features including the AI Resume Builder, Cover Letter Generator, ATS Scanner, and Job Listings are 100% free with unlimited access.' },
    { q: 'What makes an ATS-friendly resume?', a: 'An ATS-friendly resume uses standard typography, clean structural hierarchy without complex tables, clear section headings, and relevant job keywords.' },
    { q: 'Can I export my resume as PDF?', a: 'Yes! You can instantly download and print your resume in standard high-resolution PDF format with one click.' },
    { q: 'How often are jobs updated on Factor Career?', a: 'Our automated AI pipeline verifies and refreshes jobs multiple times every day to ensure only active, legitimate career opportunities are listed.' }
  ] : [
    { q: 'هل استخدام Factor Career مجاني بالكامل؟', a: 'نعم! جميع الأدوات الأساسية بما في ذلك منشئ السيرة الذاتية، ومولد خطابات التقديم، وفاحص ATS، وتصفح الوظائف مجانية 100% دون أي رسوم.' },
    { q: 'ما الذي يجعل السيرة الذاتية متوافقة مع نظام ATS؟', a: 'السيرة المتوافقة مع ATS تعتمد على هيكل نصوص قياسي ونظيف بدون جداول معقدة، واستخدام عناوين واضحة وكلمات مفتاحية مطابقة للوظيفة.' },
    { q: 'هل يمكنني تنزيل السيرة الذاتية بتنسيق PDF؟', a: 'نعم! يمكنك طباعة وتنزيل سيرتك الذاتية فوراً بتنسيق PDF عالي الدقة بنقرة زر واحدة.' },
    { q: 'كم مرة يتم تحديث الوظائف في المنصة؟', a: 'يقوم وكيل الذكاء الاصطناعي بتدقيق وتحديث قائمة الوظائف آلياً عدة مرات يومياً لضمان توفير فرص حقيقية وموثوقة فقط.' }
  ];

  return `
    <!-- Hero Section -->
    <section class="hero" style="position:relative;overflow:hidden;padding:4rem 0 3rem;background:var(--gradient-hero)">
      <div class="hero__bg-glow"></div>
      <div class="container" style="position:relative;z-index:2">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center">
          
          <!-- Left: Text Content -->
          <div class="hero__content" style="text-align:${isEn ? 'left' : 'right'}">
            
            <!-- Hero Badge -->
            <div class="hero__badge animate-on-scroll" style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:30px;padding:6px 16px;margin-bottom:1.5rem">
              <span style="width:14px;height:14px;display:inline-flex;color:#818cf8">${icons.sparkles || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>'}</span>
              <span style="font-size:0.8rem;font-weight:700;color:#c7d2fe">${t('hero.badge', 'AI Resume Builder & Job Search Platform')}</span>
            </div>

            <!-- Hero Title -->
            <h1 class="hero__title animate-on-scroll delay-1" style="font-size:clamp(1.8rem, 4vw, 2.7rem);font-weight:800;color:#ffffff;line-height:1.25;margin-bottom:1.25rem">
              ${isEn
                ? 'Free AI Resume Builder<br>&amp; Curated Career<br><span class="text-gradient">Opportunities</span><br>Land Your Dream Job Faster'
                : 'منشئ السيرة الذاتية المجاني<br>بالذكاء الاصطناعي<br><span class="text-gradient">وفرص مهنية مختارة</span><br>احصل على وظيفة أحلامك أسرع'
              }
            </h1>

            <!-- Hero Subtitle -->
            <p class="hero__subtitle animate-on-scroll delay-2" style="font-size:1rem;color:#cbd5e1;line-height:1.7;margin-bottom:2rem">
              ${isEn
                ? 'Build an ATS-optimized professional resume for free with AI and discover active job openings easily with Factor Career.'
                : 'أنشئ سيرة ذاتية احترافية متوافقة مع ATS مجاناً بالذكاء الاصطناعي واكتشف فرص العمل الحالية بسهولة مع Factor Career.'
              }
            </p>

            <!-- Hero Action Buttons -->
            <div class="hero__actions animate-on-scroll delay-3" style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;margin-bottom:2.5rem">
              <a href="/tools/resume-builder" class="btn btn--primary btn--lg" style="box-shadow:0 4px 20px rgba(99,102,241,0.4);border-radius:50px;padding:0.75rem 1.75rem" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
                ${t('hero.btnBuild', 'Build Your Resume Now')}
              </a>
              <a href="/tools" class="btn btn--secondary btn--lg" style="border-radius:50px;padding:0.75rem 1.75rem;border:1.5px solid rgba(255,255,255,0.4);color:#fff" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
                ${t('hero.btnExplore', 'Explore All Jobs & Tools')}
              </a>
            </div>

            <!-- Stats / Highlights Row -->
            <div class="hero__stats animate-on-scroll delay-4" style="display:flex;align-items:center;gap:2rem;flex-wrap:wrap">
              <div class="hero__stat" style="text-align:center">
                <div class="hero__stat-number" style="font-size:1.8rem;font-weight:800;color:#ffffff;line-height:1.2">100%</div>
                <div class="hero__stat-label" style="font-size:0.78rem;font-weight:600;color:#94a3b8;margin-top:2px">${isEn ? 'Completely Free' : 'مجاني بالكامل'}</div>
              </div>
              <div style="width:1px;height:36px;background:rgba(255,255,255,0.15)"></div>
              <div class="hero__stat" style="text-align:center">
                <div class="hero__stat-number" style="font-size:1.8rem;font-weight:800;color:#38bdf8;line-height:1.2">5+</div>
                <div class="hero__stat-label" style="font-size:0.78rem;font-weight:600;color:#94a3b8;margin-top:2px">${isEn ? 'AI Career Tools' : 'أدوات مهنية'}</div>
              </div>
              <div style="width:1px;height:36px;background:rgba(255,255,255,0.15)"></div>
              <div class="hero__stat" style="text-align:center">
                <div class="hero__stat-number" style="font-size:1.8rem;font-weight:800;color:#34d399;line-height:1.2">ATS</div>
                <div class="hero__stat-label" style="font-size:0.78rem;font-weight:600;color:#94a3b8;margin-top:2px">${isEn ? 'Optimized for Screening' : 'متوافق مع الفرز الآلي'}</div>
              </div>
            </div>

          </div>

          <!-- Right: Hero Image + Ad -->
          <div class="animate-on-scroll delay-2" style="display:flex;flex-direction:column;gap:1.25rem;align-items:center">
            
            <!-- Hero Image -->
            <div style="border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.4);width:100%;max-width:320px">
              <img src="/img/hero-career-ai.jpg"
                   alt="${isEn ? 'AI Resume Builder - Factor Career' : 'منشئ السيرة الذاتية بالذكاء الاصطناعي'}"
                   style="width:100%;height:auto;display:block;border-radius:16px"
                   loading="eager"
                   onerror="this.style.display='none'">
            </div>

            <!-- Sponsored Ad Card -->
            <div class="hero-square-ad__card" style="margin:0 auto">
              <div class="hero-square-ad__label">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-${isEn?'right':'left'}:3px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                SPONSORED AD
              </div>
              <div class="hero-square-ad__box">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:250px"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="1122334455"
                     data-ad-format="rectangle"></ins>
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

        <!-- Google AdSense - Horizontal Banner (728x90) -->
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
