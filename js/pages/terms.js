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
            <a href="#/" onclick="CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('terms.title', 'شروط الاستخدام')}</span>
          </div>
          <h1 class="page-header__title">${t('terms.title', 'شروط الاستخدام - Factor Career')}</h1>
          <p class="page-header__subtitle">${t('terms.subtitle', 'الشروط والأحكام الخاصة باستكشاف واستخدام منصة Factor Career')}</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense Compact Banner (Top) -->
    <div class="container" style="padding-top:var(--space-4)">
      <div class="adsense-container adsense-banner-sm">
        <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-7520213352755959"
             data-ad-slot="9900113344"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
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
          <p>${isEn ? 'For questions concerning our Terms of Service, contact us at: <a href="mailto:careerfactor@gmail.com" style="color:var(--color-primary);font-weight:600">careerfactor@gmail.com</a>.' : 'إذا كان لديك أي استفسارات حول شروط الاستخدام، يرجى التواصل معنا عبر: <a href="mailto:careerfactor@gmail.com" style="color:var(--color-primary);font-weight:600">careerfactor@gmail.com</a>.'}</p>
        </div>
      </div>
    </section>

    <!-- Google AdSense Square & Banner (Bottom) -->
    <div class="container" style="padding-bottom:var(--space-12)">
      <div class="adsense-row">
        <div class="adsense-container adsense-square">
          <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="5577991133"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Ad')}</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="6688002244"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  `;
};

window.CareerAI.pages.termsSEO = {
  title: 'شروط الاستخدام | Factor Career Terms of Service',
  description: 'شروط وأحكام استخدام منصة وأدوات Factor Career لمساعدة الباحثين عن عمل.',
  keywords: 'شروط الاستخدام, terms of service, Factor Career'
};
