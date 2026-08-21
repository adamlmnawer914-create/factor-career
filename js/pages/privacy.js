/* ============================================
   Factor Career - Privacy Policy Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.privacy = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('privacy.title', 'سياسة الخصوصية')}</span>
          </div>
          <h1 class="page-header__title">${t('privacy.title', 'سياسة الخصوصية - Factor Career')}</h1>
          <p class="page-header__subtitle">${t('privacy.subtitle', 'نحن نلتزم بحماية خصوصية بياناتك ومعلوماتك الشخصية في منصة Factor Career')}</p>
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
             data-ad-slot="9900112299"
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

          <h2>${isEn ? '1. Introduction' : '1. مقدمة'}</h2>
          <p>${isEn ? 'Welcome to Factor Career. We respect your privacy and are committed to safeguarding your personal information. This Privacy Policy explains how our AI-powered career tools process your data securely.' : 'أهلاً بك في منصة Factor Career. نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية حماية ومعالجة البيانات التي تستخدمها عند الاستفادة من أدواتنا الذكية المجانية.'}</p>

          <h2>${isEn ? '2. Data & Client-Side Processing' : '2. البيانات والمعالجة الآمنة'}</h2>
          <p>${isEn ? 'Our resume and career tools are engineered with client-side browser processing priority. We do not sell, rent, or share your resume files and private data with unauthorized third parties.' : 'أدواتنا مصممة لتعمل مباشرة على متصفحك (Client-side Processing)، ولا نقوم بتخزين السير الذاتية أو مشاركة ملفاتك الشخصية مع أي طرف ثالث.'}</p>

          <h2>${isEn ? '3. Cookies and Advertising (Google AdSense)' : '3. ملفات تعريف الارتباط والإعلانات (Cookies & AdSense)'}</h2>
          <p>${isEn ? 'Factor Career uses Google AdSense to serve relevant advertisements. Google may use cookies to serve ads based on prior visits. You can manage ad personalization in your Google Ads Settings.' : 'تستخدم منصة Factor Career خدمات إعلانات Google AdSense التي قد تستخدم ملفات تعريف الارتباط لعرض إعلانات ملائمة لاهتماماتك. يمكنك التحكم في إعدادات الإعلانات من خلال حساب Google الخاص بك.'}</p>

          <h2>${isEn ? '4. Contact Information' : '4. تواصل معنا'}</h2>
          <p>${isEn ? 'For any inquiries regarding our privacy practices, contact us at: <a href="mailto:careerfactor@gmail.com" style="color:var(--color-primary);font-weight:600">careerfactor@gmail.com</a>.' : 'إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني: <a href="mailto:careerfactor@gmail.com" style="color:var(--color-primary);font-weight:600">careerfactor@gmail.com</a>.'}</p>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.privacySEO = {
  title: 'سياسة الخصوصية | Factor Career Privacy Policy',
  description: 'سياسة الخصوصية لمنصة Factor Career. تعرف على كيفية حماية بياناتك ومعلوماتك الشخصية.',
  keywords: 'سياسة الخصوصية, حماية البيانات, privacy policy, Factor Career'
};
