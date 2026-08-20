/* ============================================
   Factor Career - Tools Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.tools = function() {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  const tools = [
    {
      icon: icons.resume,
      title: isEn ? 'AI Resume Builder (ATS)' : 'منشئ السيرة الذاتية بالذكاء الاصطناعي',
      desc: isEn ? 'Create professional, ATS-friendly resumes step by step with AI phrasing suggestions and high-res PDF export.' : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة ATS خطوة بخطوة مع تحسين الصياغة وتصدير PDF عالي الدقة مجاناً.',
      category: 'resume',
      color: 'primary',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      link: '/tools/resume-builder'
    },
    {
      icon: icons.shield,
      title: isEn ? 'ATS Resume Auditor & Checker' : 'محلل وفاحص السيرة الذاتية ATS',
      desc: isEn ? 'Audit and evaluate your CV against ATS algorithms, identify keyword gaps, and calculate your real ATS score.' : 'فحص وتدقيق سيرتك الذاتية ومعرفة نقاط القوة والضعف ومطابقتها مع الكلمات المفتاحية للوظيفة واحتساب ATS Score مجاناً.',
      category: 'resume',
      color: 'accent',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      link: '/tools/resume-analyzer'
    },
    {
      icon: icons.cover,
      title: isEn ? 'Smart Cover Letter Generator' : 'مولد رسالة التقديم (Cover Letter)',
      desc: isEn ? 'Generate tailored, compelling cover letters for any position in 5 languages with instant live editing and Word/PDF export.' : 'أنشئ رسالة تغطية احترافية ومخصصة بالكامل لكل وظيفة تتقدم لها بالذكاء الاصطناعي بخمس لغات مع إمكانية التعديل وتصدير Word و PDF.',
      category: 'resume',
      color: 'primary',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      link: '/tools/cover-letter-generator'
    },
    {
      icon: icons.interview,
      title: isEn ? 'Interview Questions Coach' : 'مولد أسئلة مقابلات العمل',
      desc: isEn ? 'Practice customized interview questions tailored to your exact industry and experience with STAR model answers.' : 'أسئلة مقابلات توظيف مخصصة لوظيفتك ومستوى خبرتك مع إجابات نموذجية وأسباب طرح الأسئلة وطريقة STAR وتصدير PDF.',
      category: 'interview',
      color: 'accent',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      link: '/tools/interview-questions'
    },
    {
      icon: icons.target,
      title: isEn ? 'ATS Keywords Matcher' : 'مستخرج كلمات ATS المفتاحية',
      desc: isEn ? 'Extract key skills, qualifications, and keywords from any job posting to fine-tune your resume match.' : 'استخرج أهم الكلمات الدلالية والمهارات والأدوات المطلوبة في أي وصف وظيفي لمقارنة وملاءمة سيرتك الذاتية مع الإعلان.',
      category: 'search',
      color: 'primary',
      tag: isEn ? 'Active Tool' : 'الأداة المفعلة',
      link: '/tools/ats-keywords'
    },
    {
      icon: icons.search,
      title: isEn ? 'Smart Career & Job Finder' : 'باحث الوظائف الذكي',
      desc: isEn ? 'Explore active job vacancies and career opportunities matched to your skill profile.' : 'اعثر على الوظائف المناسبة لمهاراتك وخبراتك من خلال محرك بحث ذكي يحلل ملفك المهني ويقترح أفضل الفرص.',
      category: 'search',
      color: 'accent',
      tag: isEn ? 'Active' : 'مفعل',
      link: '/jobs'
    },
    {
      icon: icons.linkedin,
      title: isEn ? 'LinkedIn Profile Optimizer' : 'محسّن ملف LinkedIn',
      desc: isEn ? 'Optimize your LinkedIn headlines, summary, and experience to attract recruiters.' : 'حسّن ملفك الشخصي على LinkedIn ليظهر في نتائج البحث بشكل أفضل ويجذب انتباه مسؤولي التوظيف.',
      category: 'social',
      color: 'primary',
      tag: isEn ? 'Coming Soon' : 'قريباً'
    },
    {
      icon: icons.skills,
      title: isEn ? 'Career Skills Gap Evaluator' : 'مقيّم الفجوة المهارية',
      desc: isEn ? 'Discover critical skills required for your dream role and receive tailored learning roadmaps.' : 'اكتشف المهارات الناقصة في ملفك المهني للحصول على وظيفة أحلامك واحصل على خطة تطوير.',
      category: 'search',
      color: 'accent',
      tag: isEn ? 'Coming Soon' : 'قريباً'
    }
  ];

  const categories = [
    { id: 'all', label: isEn ? 'All Tools' : 'جميع الأدوات', count: tools.length },
    { id: 'resume', label: isEn ? 'Resume & CV' : 'السيرة الذاتية', count: tools.filter(t => t.category === 'resume').length },
    { id: 'interview', label: isEn ? 'Job Interviews' : 'المقابلات الشخصية', count: tools.filter(t => t.category === 'interview').length },
    { id: 'search', label: isEn ? 'Job Search' : 'البحث عن عمل', count: tools.filter(t => t.category === 'search').length }
  ];

  return `
    <div class="page-header page-header--dark" style="background:var(--gradient-hero)">
      <div class="container">
        <nav class="breadcrumb" style="color:rgba(255,255,255,0.7)">
          <a href="#/" onclick="CareerAI.router.navigate('/')" style="color:rgba(255,255,255,0.7)">${t('nav.home', 'الرئيسية')}</a>
          <span style="margin:0 8px">›</span>
          <span style="color:white">${t('nav.tools', 'الأدوات')}</span>
        </nav>
        <div class="page-header__content" style="text-align:center;max-width:700px;margin:0 auto">
          <h1 class="page-header__title" style="color:white;font-size:var(--text-4xl)">
            ${t('tools.headerTitle', 'أدوات الذكاء الاصطناعي المهنية')}
          </h1>
          <p class="page-header__subtitle" style="color:rgba(255,255,255,0.85);font-size:var(--text-lg)">
            ${t('tools.headerSubtitle', 'مجموعة متكاملة من الأدوات الذكية المجانية لتطوير كل مرحلة في بحثك عن عمل')}
          </p>
        </div>
      </div>
    </div>

    <!-- Top Google AdSense Banner Container -->
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

    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-16)">
      <div class="container">
        <!-- Categories Filter -->
        <div class="tools-page__filter animate-on-scroll">
          ${categories.map((cat, i) => `
            <button class="filter-btn ${i === 0 ? 'active' : ''}" 
                    data-filter="${cat.id}"
                    onclick="CareerAI.filterTools('${cat.id}')">
              ${cat.label}
              <span class="filter-btn__count">${cat.count}</span>
            </button>
          `).join('')}
        </div>

        <!-- Tools Grid -->
        <div class="tools-page__grid" id="toolsGrid">
          ${tools.map((tool, i) => `
            <div class="card tool-card animate-on-scroll delay-${(i % 3) + 1}" data-tool-category="${tool.category}" style="${tool.link ? 'cursor:pointer;border-color:var(--color-primary-200);' : 'opacity:0.85;'}" ${tool.link ? `onclick=\"CareerAI.router.navigate('${tool.link}')\"` : ''}>
              <span class="tag tag--${tool.color === 'primary' ? 'primary' : 'accent'}" style="position:absolute;top:var(--space-4);${isEn ? 'right' : 'left'}:var(--space-4)">${tool.tag}</span>
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:36px;height:36px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              ${tool.link ? `
                <a href="#${tool.link}" class="btn btn--${tool.color === 'primary' ? 'primary' : 'secondary'} btn--sm" style="margin-top:var(--space-5)" onclick="CareerAI.router.navigate('${tool.link}')">
                  ${t('tools.useTool', 'استخدم الأداة مجاناً')}
                  <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
                </a>
              ` : `
                <button class="btn btn--secondary btn--sm" style="margin-top:var(--space-5);opacity:0.6;cursor:default;" disabled>
                  ${t('tools.comingSoon', 'قريباً بإذن الله')}
                </button>
              `}
            </div>

            ${i === 2 ? `
              <!-- In-Feed Google AdSense Card (Seamlessly positioned inside Grid) -->
              <div class="adsense-infeed" data-tool-category="all">
                <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / In-Feed Ad')}</span>
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-format="fluid"
                     data-ad-layout-key="-fb+5w+4e-db+86"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="4455667788"></ins>
              </div>
            ` : ''}
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Google AdSense Square & Compact Row (Bottom) -->
    <div class="container" style="padding-bottom:var(--space-8)">
      <div class="adsense-row">
        <div class="adsense-container adsense-square">
          <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="5566778899"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="7788990011"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  `;
};

window.CareerAI.filterTools = function(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const cards = document.querySelectorAll('#toolsGrid .tool-card');
  cards.forEach(card => {
    const cat = card.getAttribute('data-tool-category');
    if (category === 'all' || cat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

window.CareerAI.pages.toolsSEO = {
  title: 'أدوات الذكاء الاصطناعي للبحث عن عمل | Factor Career AI Tools',
  description: 'مجموعة متكاملة من أدوات الذكاء الاصطناعي المجانية من Factor Career لبناء وتحليل السيرة الذاتية ورسائل التقديم.',
  keywords: 'أدوات ذكاء اصطناعي, سيرة ذاتية, فحص ATS, Cover Letter, مقابلات عمل, Factor Career'
};
