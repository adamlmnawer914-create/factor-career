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
    <section class="hero" style="position:relative;overflow:hidden;padding:3.5rem 0 2.5rem;background:var(--gradient-hero);min-height:auto">
      <div class="hero__bg-glow"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="hero__grid">
          
          <!-- Left: Text Content -->
          <div class="hero__content" style="text-align:${isEn ? 'left' : 'right'}">
            
            <!-- Hero Badge -->
            <div class="hero__badge animate-on-scroll" style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:30px;padding:6px 16px;margin-bottom:1.5rem">
              <span style="width:14px;height:14px;display:inline-flex;color:#818cf8">${icons.sparkles || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>'}</span>
              <span style="font-size:0.8rem;font-weight:700;color:#c7d2fe">${t('hero.badge', 'AI Resume Builder & Job Search Platform')}</span>
            </div>

            <!-- Hero Title -->
            <h1 class="hero__title animate-on-scroll delay-1" style="font-size:clamp(1.6rem, 3.5vw, 2.4rem);font-weight:800;color:#ffffff;line-height:1.35;margin-bottom:1.25rem">
              ${isEn
                ? `Free AI Resume Builder<br><span style="color:#22d3ee;font-weight:800">&amp; Curated Career<br>Opportunities</span><br>Land Your Dream Job Faster`
                : `منشئ السيرة الذاتية المجاني<br><span style="color:#22d3ee;font-weight:800">وفرص مهنية مختارة<br>بعناية</span><br>احصل على وظيفة أحلامك أسرع`
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
            <div class="hero__actions animate-on-scroll delay-3">
              <a href="/tools/resume-builder"
                 style="display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#2563eb 0%,#4f46e5 50%,#6366f1 100%);color:#fff;font-weight:700;font-size:0.95rem;border:none;border-radius:50px;padding:0.8rem 2rem;box-shadow:0 6px 25px rgba(99,102,241,0.5);text-decoration:none;transition:all 0.25s ease;letter-spacing:0.01em"
                 onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 32px rgba(99,102,241,0.65)'"
                 onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 6px 25px rgba(99,102,241,0.5)'"
                 onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
                ${t('hero.btnBuild', 'Build Your Resume Now')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="/tools"
                 style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.22);border-radius:50px;padding:0.7rem 1.75rem;font-size:0.9rem;font-weight:600;color:#e2e8f0;text-decoration:none;transition:all 0.25s ease"
                 onmouseover="this.style.background='rgba(255,255,255,0.13)'"
                 onmouseout="this.style.background='rgba(255,255,255,0.07)'"
                 onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
                ${t('hero.btnExplore', 'Explore All Jobs & Tools')}
              </a>
            </div>

          </div>

          <!-- Right: Hero Image (square) + Ad Card (square) — LOCKED SIZE -->
          <div class="hero-media-row animate-on-scroll delay-2">
            
            <!-- Hero Image — fixed 300x300 square, locked -->
            <div class="hero-image-card" style="width:300px;height:300px;min-width:300px;max-width:300px;min-height:300px;max-height:300px;border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.1),0 0 40px rgba(99,102,241,0.15);flex-shrink:0">
              <img src="/img/hero-career-ai.jpg"
                   alt="${isEn ? 'AI Resume Builder - Factor Career' : 'منشئ السيرة الذاتية بالذكاء الاصطناعي'}"
                   style="width:300px;height:300px;object-fit:cover;display:block"
                   loading="eager"
                   onerror="this.style.display='none'">
            </div>

            <!-- Sponsored Ad Card — fixed 300x300 square, AdSense CANNOT resize it -->
            <div class="hero-square-ad-wrapper" style="width:300px;height:300px;min-width:300px;max-width:300px;min-height:300px;max-height:300px;border-radius:18px;background:linear-gradient(145deg,rgba(15,23,42,0.97) 0%,rgba(20,30,55,0.98) 50%,rgba(30,41,70,0.97) 100%);border:1px solid rgba(99,102,241,0.4);box-shadow:0 20px 60px rgba(0,0,0,0.55),0 0 35px rgba(99,102,241,0.2),inset 0 1px 0 rgba(255,255,255,0.07);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;flex-shrink:0">
              
              <!-- Top gradient glow line -->
              <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#6366f1,#8b5cf6,#a78bfa,transparent);pointer-events:none"></div>
              <!-- Bottom radial glow -->
              <div style="position:absolute;bottom:0;left:0;right:0;height:60px;background:radial-gradient(ellipse at center bottom,rgba(99,102,241,0.1),transparent 70%);pointer-events:none"></div>
              
              <!-- SPONSORED label -->
              <div style="position:absolute;top:10px;left:0;right:0;display:flex;justify-content:center;z-index:2">
                <div style="display:inline-flex;align-items:center;gap:4px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:2px 9px">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                  <span style="font-size:0.58rem;font-weight:800;color:#a5b4fc;letter-spacing:1.5px;text-transform:uppercase">SPONSORED AD</span>
                </div>
              </div>

              <!-- 250x250 FIXED SQUARE ad unit — locked in fixed wrapper, NO rectangle format -->
              <div style="width:250px;height:250px;min-width:250px;max-width:250px;min-height:250px;max-height:250px;overflow:hidden;display:flex;align-items:center;justify-content:center;margin-top:16px;flex-shrink:0;position:relative">
                <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0.3;pointer-events:none;z-index:1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="4"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                  <span style="font-size:0.65rem;color:#a5b4fc;font-weight:700;margin-top:6px;letter-spacing:1px">250 × 250</span>
                </div>
                <ins class="adsbygoogle hero-ad-ins"
                     style="display:inline-block;width:250px;height:250px;position:relative;z-index:2"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="1122334455"></ins>
              </div>
            </div>

          </div>

        </div>

        <!-- Stats Row — BELOW the full 2-col grid, matches screenshot -->
        <div class="hero-stats-row animate-on-scroll delay-4">
          <div>
            <div style="font-size:1.6rem;font-weight:800;color:#ffffff">100%</div>
            <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-top:2px">${isEn ? 'Completely Free' : 'مجاني بالكامل'}</div>
          </div>
          <div>
            <div style="font-size:1.6rem;font-weight:800;color:#38bdf8">5+</div>
            <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-top:2px">${isEn ? 'AI Career Tools' : 'أدوات مهنية'}</div>
          </div>
          <div>
            <div style="font-size:1.6rem;font-weight:800;color:#34d399">ATS</div>
            <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-top:2px">${isEn ? 'Optimized for Screening' : 'متوافق مع الفرز الآلي'}</div>
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
