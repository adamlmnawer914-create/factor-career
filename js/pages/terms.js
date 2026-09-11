/* ============================================
   Factor Career - Terms of Service Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.terms = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('terms.title', 'شروط الاستخدام')}</span>
          </div>
          <h1 class="page-header__title">${t('terms.title', 'شروط الاستخدام - Factor Career')}</h1>
          <p class="page-header__subtitle">${t('terms.subtitle', 'الشروط والأحكام الخاصة باستكشاف واستخدام منصة Factor Career')}</p>
        </div>
      </div>

        <!-- Google AdSense - In-Article Ad -->
        <div class="ad-frame-wrapper ad-frame-rectangle" style="margin:2.5rem auto;max-width:400px;">
          <div class="ad-frame-label">Advertisement</div>
          <div class="ad-frame-inner" style="min-height:250px;">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:300px;height:250px;max-width:100%;"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="3316284985"
                 data-ad-format="rectangle"></ins>
          </div>
        </div>

    </div>

    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
        <div class="page-with-sidebar">
          <div class="main-content-col" style="max-width:820px;">
            <div class="legal-content animate-on-scroll">
          <div class="legal-content__updated">
            ${isEn ? 'Last Updated: August 20, 2026' : 'آخر تحديث: 20 أغسطس 2026'}
          </div>

          <h2>${isEn ? '1. Acceptance of Terms' : '1. قبول الشروط'}</h2>
          <p>${isEn ? 'By accessing and utilizing Factor Career, you agree to comply with these terms of use and applicable laws. If you disagree with any terms, please discontinue using the platform.' : 'بوصولك واستخدامك لمنصة Factor Career، فإنك توافق على الالتزام بشروط الاستخدام هذه وجميع القوانين واللوائح المعمول بها. إذا كنت لا توافق على أي من هذه الشروط، فيرجى عدم استخدام المنصة.'}</p>

          <h2>${isEn ? '2. Permitted Use' : '2. الاستخدام المسموح'}</h2>
          <p>${isEn ? 'Factor Career tools are provided to assist job seekers and professionals in building resumes, generating cover letters, and practicing job interviews for legitimate, ethical purposes.' : 'تُقدم أدوات Factor Career لمساعدة الباحثين عن عمل والمهنيين في تحسين وتطوير سيرهم الذاتية والتحضير للمقابلات الشخصية للأغراض الشخصية والمهنية المشروعة.'}</p>

          <h2>${isEn ? '3. Intellectual Property' : '3. الملكية الفكرية'}</h2>
          <p>${isEn ? 'All branding, design assets, and interface components are proprietary to Factor Career and protected by intellectual property laws.' : 'جميع المحتويات، العلامات التجارية، والشعارات والمواد المتاحة على المنصة هي ملك لمنصة Factor Career ومحمية بموجب حقوق الملكية الفكرية والقوانين ذات الصلة.'}</p>

          <h2>${isEn ? '4. Contact & Inquiries' : '4. تواصل معنا'}</h2>
          <p>${isEn ? 'For questions concerning our Terms of Service, contact us at: <a href="mailto:factorcareer@gmail.com" style="color:var(--color-primary);font-weight:600">factorcareer@gmail.com</a>.' : 'إذا كان لديك أي استفسارات حول شروط الاستخدام، يرجى التواصل معنا عبر: <a href="mailto:factorcareer@gmail.com" style="color:var(--color-primary);font-weight:600">factorcareer@gmail.com</a>.'}</p>
            </div>
          </div>

          <!-- Sticky Sidebar with Vertical Half-Page Skyscraper (300x600) -->
          <aside class="sticky-sidebar-ad animate-on-scroll">
            <div class="ad-frame-wrapper ad-frame-skyscraper">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${isEn ? 'Sponsored' : 'إعلان ممول'}
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
  `;
};

window.CareerAI.pages.termsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Terms of Service | Factor Career Platform',
      description: 'Terms and conditions governing the use of Factor Career and its intelligent career suite.',
      keywords: 'Terms of Service, Terms and Conditions, Factor Career, User Agreement'
    };
  }
  return {
    title: 'شروط الاستخدام | Factor Career Terms of Service',
    description: 'شروط وأحكام استخدام منصة وأدوات Factor Career لمساعدة الباحثين عن عمل.',
    keywords: 'شروط الاستخدام, terms of service, Factor Career'
  };
};
