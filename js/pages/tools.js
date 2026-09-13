/* ============================================
   CareerAI - Tools Catalog & AI Suite Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.tools = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons;

  const tools = [
    {
      id: 'resume-builder',
      title: isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الذكي',
      desc: isEn ? 'Craft ATS-optimized, modern resumes with intelligent content suggestions and instant PDF export.' : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة الفرز الآلي ATS مع اقتراحات ذكية وتصدير PDF فوري مجاناً.',
      icon: icons.fileText,
      tag: isEn ? 'Most Popular' : 'الأكثر استخداماً',
      color: 'primary',
      link: '/tools/resume-builder'
    },
    {
      id: 'resume-analyzer',
      title: isEn ? 'ATS Resume Checker' : 'محلل وفاحص السيرة ATS',
      desc: isEn ? 'Score your resume against any job description, uncover missing keywords, and get instant fix suggestions.' : 'افحص نسبة توافق سيرتك الذاتية مع الوظائف واكتشف الكلمات المفتاحية الناقصة لتجاوز الفرز الآلي.',
      icon: icons.check,
      tag: isEn ? 'Smart ATS Scan' : 'فحص ذكي',
      color: 'accent',
      link: '/tools/resume-analyzer'
    },
    {
      id: 'cover-letter-generator',
      title: isEn ? 'Cover Letter Generator' : 'مولد رسائل التقديم',
      desc: isEn ? 'Generate highly persuasive cover letters tailored to your target company and job requirements.' : 'ولّد خطابات تقديم احترافية ومخصصة لكل وظيفة لزيادة فرص قبولك والحصول على مقابلات.',
      icon: icons.mail,
      tag: isEn ? 'AI Writer' : 'توليد فوري',
      color: 'secondary',
      link: '/tools/cover-letter-generator'
    },
    {
      id: 'interview-questions',
      title: isEn ? 'Interview Questions Coach' : 'مدرب أسئلة المقابلات',
      desc: isEn ? 'Practice real-world behavioral & technical interview questions with model STAR answers.' : 'تدرّب على أسئلة المقابلات الوظيفية الواقعية مع إجابات نموذجية وفق أسلوب STAR.',
      icon: icons.users,
      tag: isEn ? 'STAR Method' : 'نموذج STAR',
      color: 'warning',
      link: '/tools/interview-questions'
    },
    {
      id: 'ats-keywords',
      title: isEn ? 'ATS Keywords Matcher' : 'مستخرج كلمات ATS',
      desc: isEn ? 'Extract high-priority skills and industry keywords from any job posting in seconds.' : 'استخرج أهم المهارات والكلمات المفتاحية من إعلانات التوظيف لتعزيز قوة سيرتك الذاتية.',
      icon: icons.target,
      tag: isEn ? 'High Priority' : 'مستخرج مهارات',
      color: 'primary',
      link: '/tools/ats-keywords'
    }
  ];

  return `
    <!-- Header -->
    <div class="page-header page-header--compact">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.tools', 'الأدوات')}</span>
          </div>
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.brain}</span>
            ${isEn ? 'AI Career Suite' : 'مجموعة أدوات الذكاء الاصطناعي'}
          </span>
          <h1 class="page-header__title">${isEn ? 'Advanced AI Career Tools' : 'أدوات الذكاء الاصطناعي المهنية المتقدمة'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Everything you need to optimize your resume, prepare for interviews, and accelerate your career.' : 'مجموعة متكاملة من الأدوات الذكية المجانية لتطوير سيرتك الذاتية والتحضير للمقابلات واقتناص أفضل الفرص.'}</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense - Top Leaderboard Banner -->
    <div class="container" style="margin-top:var(--space-4);margin-bottom:var(--space-2)">
      <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin:0 auto;max-width:760px;">
        <div class="ad-frame-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
          ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored'}
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

    <!-- Tools Grid Section -->
    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-12)">
      <div class="container">
        <div class="tools-section__grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:var(--space-6);">
          ${tools.map((tool, index) => `
            <div class="card tool-card animate-on-scroll delay-${(index % 3) + 1}" style="cursor:pointer;position:relative" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
              <span class="tag tag--accent" style="position:absolute;top:var(--space-4);${isEn ? 'right' : 'left'}:var(--space-4)">${tool.tag}</span>
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:32px;height:32px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title" style="margin-top:var(--space-4)">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              <a href="${tool.link}" class="card__link" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
                ${isEn ? 'Open Tool Free' : 'فتح الأداة مجاناً'}
                <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
            </div>
          `).join('')}
        </div>

        <!-- Google AdSense - Vertical & Display Units Row -->
        <div style="display:flex;justify-content:center;align-items:center;gap:var(--space-8);margin-top:var(--space-12);flex-wrap:wrap;">
          <!-- Skyscraper 300x600 -->
          <div class="ad-frame-wrapper ad-frame-skyscraper animate-on-scroll">
            <div class="ad-frame-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
              ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored'}
            </div>
            <div class="ad-frame-inner">
              <ins class="adsbygoogle"
                   style="display:inline-block;width:300px;height:600px;max-width:100%;"
                   data-ad-client="ca-pub-7520213352755959"
                   data-ad-slot="4455667788"
                   data-ad-format="vertical"></ins>
            </div>
          </div>

          <!-- Rectangle 300x250 -->
          <div class="ad-frame-wrapper ad-frame-rectangle animate-on-scroll" style="margin:0;max-width:340px;">
            <div class="ad-frame-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
              ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored'}
            </div>
            <div class="ad-frame-inner">
              <ins class="adsbygoogle"
                   style="display:inline-block;width:300px;height:250px;max-width:100%;"
                   data-ad-client="ca-pub-7520213352755959"
                   data-ad-slot="3316284985"
                   data-ad-format="rectangle"></ins>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.toolsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI Career & Resume Tools | Factor Career',
      description: 'Explore free AI tools: ATS Resume Builder, Resume Checker, Cover Letter Generator, Interview Coach, and ATS Keywords Matcher.',
      keywords: 'Career Tools, AI Resume Builder, ATS Checker, Cover Letter Generator, Interview Prep, Factor Career'
    };
  }
  return {
    title: 'أدوات الذكاء الاصطناعي المهنية المجانية | فكتور كارير',
    description: 'استكشف أحدث أدوات الذكاء الاصطناعي المجانية لبناء السيرة الذاتية وفحص أنظمة ATS وتوليد خطابات التقديم والتحضير للمقابلات.',
    keywords: 'أدوات السيرة الذاتية, منشئ سيرة ذاتية, فاحص ATS, رسائل التقديم, أسئلة المقابلات, Factor Career'
  };
};
