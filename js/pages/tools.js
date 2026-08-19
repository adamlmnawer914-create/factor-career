/* ============================================
   CareerAI - Tools Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.tools = function() {
  const icons = window.CareerAI.icons;

  const tools = [
    {
      icon: icons.resume,
      title: 'منشئ السيرة الذاتية بالذكاء الاصطناعي',
      desc: 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة ATS خطوة بخطوة مع تحسين الصياغة وتصدير PDF عالي الدقة مجاناً.',
      category: 'resume',
      color: 'primary',
      tag: 'الأداة المفعلة',
      link: '/tools/resume-builder'
    },
    {
      icon: icons.shield,
      title: 'محلل وفاحص السيرة الذاتية ATS',
      desc: 'فحص وتدقيق سيرتك الذاتية ومعرفة نقاط القوة والضعف ومطابقتها مع الكلمات المفتاحية للوظيفة واحتساب ATS Score مجاناً.',
      category: 'resume',
      color: 'accent',
      tag: 'الأداة المفعلة',
      link: '/tools/resume-analyzer'
    },
    {
      icon: icons.cover,
      title: 'مولد رسالة التقديم (Cover Letter)',
      desc: 'أنشئ رسالة تغطية احترافية ومخصصة بالكامل لكل وظيفة تتقدم لها بالذكاء الاصطناعي بخمس لغات مع إمكانية التعديل وتصدير Word و PDF.',
      category: 'resume',
      color: 'primary',
      tag: 'الأداة المفعلة',
      link: '/tools/cover-letter-generator'
    },
    {
      icon: icons.interview,
      title: 'مولد أسئلة مقابلات العمل',
      desc: 'أسئلة مقابلات توظيف مخصصة لوظيفتك ومستوى خبرتك مع إجابات نموذجية وأسباب طرح الأسئلة وطريقة STAR وتصدير PDF.',
      category: 'interview',
      color: 'accent',
      tag: 'الأداة المفعلة',
      link: '/tools/interview-questions'
    },
    {
      icon: icons.target,
      title: 'مستخرج كلمات ATS المفتاحية',
      desc: 'استخرج أهم الكلمات الدلالية والمهارات والأدوات المطلوبة في أي وصف وظيفي لمقارنة وملاءمة سيرتك الذاتية مع الإعلان.',
      category: 'search',
      color: 'primary',
      tag: 'الأداة المفعلة',
      link: '/tools/ats-keywords'
    },
    {
      icon: icons.search,
      title: 'باحث الوظائف الذكي',
      desc: 'اعثر على الوظائف المناسبة لمهاراتك وخبراتك من خلال محرك بحث ذكي يحلل ملفك المهني ويقترح أفضل الفرص.',
      category: 'search',
      color: 'accent',
      tag: 'قريباً'
    },
    {
      icon: icons.linkedin,
      title: 'محسّن ملف LinkedIn',
      desc: 'حسّن ملفك الشخصي على LinkedIn ليظهر في نتائج البحث بشكل أفضل ويجذب انتباه مسؤولي التوظيف.',
      category: 'social',
      color: 'primary',
      tag: 'قريباً'
    },
    {
      icon: icons.skills,
      title: 'مقيّم المهارات الفنية',
      desc: 'اكتشف نقاط قوتك وفرص التطوير من خلال تقييم شامل لمهاراتك المهنية والتقنية مع خطة تطوير مخصصة.',
      category: 'skills',
      color: 'accent',
      tag: 'قريباً'
    },
    {
      icon: icons.globe,
      title: 'مترجم السيرة الذاتية',
      desc: 'ترجم سيرتك الذاتية إلى لغات متعددة مع الحفاظ على التنسيق الاحترافي والمصطلحات المهنية الدقيقة.',
      category: 'resume',
      color: 'primary',
      tag: 'قريباً'
    }
  ];

  const categories = [
    { id: 'all', label: 'جميع الأدوات' },
    { id: 'resume', label: 'السيرة الذاتية والـ Cover Letter' },
    { id: 'interview', label: 'المقابلات' },
    { id: 'search', label: 'تحليل الوظائف و ATS' },
    { id: 'skills', label: 'المهارات' },
    { id: 'social', label: 'التواصل المهني' }
  ];

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">الرئيسية</a>
            <span>/</span>
            <span>الأدوات</span>
          </div>
          <h1 class="page-header__title">أدوات الذكاء الاصطناعي المهنية</h1>
          <p class="page-header__subtitle">مجموعة شاملة ومجانية من أدوات الذكاء الاصطناعي المتطورة لمساعدتك في بناء وتطوير مسيرتك المهنية</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense Display Banner (Top) -->
    <div class="container" style="padding-top:var(--space-6)">
      <div class="adsense-container adsense-display">
        <span class="adsense-label">إعلان ممول / Sponsored</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="3344556677"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="tools-page__filter animate-on-scroll">
          ${categories.map(cat => `
            <button class="tools-page__filter-btn ${cat.id === 'all' ? 'active' : ''}" 
                    data-category="${cat.id}"
                    onclick="CareerAI.filterTools('${cat.id}')">
              ${cat.label}
            </button>
          `).join('')}
        </div>

        <div class="tools-page__grid" id="toolsGrid">
          ${tools.map((tool, i) => `
            <div class="card tool-card animate-on-scroll delay-${(i % 3) + 1}" data-tool-category="${tool.category}" style="${tool.link ? 'cursor:pointer;border-color:var(--color-primary-200);' : 'opacity:0.85;'}" ${tool.link ? `onclick="CareerAI.router.navigate('${tool.link}')"` : ''}>
              ${tool.tag ? `<span class="tag tag--${tool.tag === 'الأداة المفعلة' ? 'accent' : 'primary'}" style="position:absolute;top:var(--space-4);left:var(--space-4)">${tool.tag}</span>` : ''}
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:36px;height:36px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              ${tool.link ? `
                <a href="#${tool.link}" class="btn btn--${tool.color === 'primary' ? 'primary' : 'secondary'} btn--sm" style="margin-top:var(--space-5)" onclick="CareerAI.router.navigate('${tool.link}')">
                  استخدم الأداة مجاناً
                  <span style="width:14px;height:14px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
                </a>
              ` : `
                <button class="btn btn--secondary btn--sm" style="margin-top:var(--space-5);opacity:0.6;cursor:default;" disabled>
                  قريباً بإذن الله
                </button>
              `}
            </div>

            ${i === 2 ? `
              <!-- In-Feed Google AdSense Card (Seamlessly positioned inside Grid) -->
              <div class="adsense-infeed" data-tool-category="all">
                <span class="adsense-label">إعلان ممول / In-Feed Ad</span>
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
      </div>
    </section>

    <!-- Google AdSense Square & Compact Row (Bottom) -->
    <div class="container" style="padding-bottom:var(--space-8)">
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
  `;
};

/* --- Tools Filter Function --- */
window.CareerAI.filterTools = function(category) {
  const cards = document.querySelectorAll('[data-tool-category]');
  const btns = document.querySelectorAll('.tools-page__filter-btn');

  btns.forEach(btn => btn.classList.toggle('active', btn.dataset.category === category));

  cards.forEach(card => {
    if (category === 'all' || card.dataset.toolCategory === category) {
      card.style.display = '';
      card.style.animation = 'fadeInUp 0.4s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
};

window.CareerAI.pages.toolsSEO = {
  title: 'أدوات الذكاء الاصطناعي للبحث عن عمل - Career Factor',
  description: 'استخدم أدوات الذكاء الاصطناعي المجانية لتحليل سيرتك الذاتية، كتابة رسائل التغطية، التحضير للمقابلات، والمزيد.',
  keywords: 'أدوات ذكاء اصطناعي, تحليل سيرة ذاتية, مقابلات عمل, بحث وظائف'
};
