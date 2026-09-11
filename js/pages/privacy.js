/* ============================================
   Factor Career - Privacy Policy Page (Exhaustive & AdSense-Compliant)
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
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('privacy.title', 'سياسة الخصوصية')}</span>
          </div>
          <h1 class="page-header__title">${isEn ? 'Privacy Policy - Factor Career' : 'سياسة الخصوصية - Factor Career'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Our commitment to protecting your personal information and transparent data handling practices.' : 'نحن نلتزم بحماية خصوصية بياناتك ومعلوماتك الشخصية في منصة Factor Career'}</p>
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

    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-16)">
      <div class="container">
        <div class="page-with-sidebar">
          <div class="main-content-col" style="max-width:820px;">
            <div class="legal-content animate-on-scroll">
          <div class="legal-content__updated">
            ${isEn ? 'Last Updated: August 26, 2026' : 'آخر تحديث: 26 أغسطس 2026'}
          </div>

          <h2>${isEn ? '1. Introduction and Overview' : '1. مقدمة ونظرة عامة'}</h2>
          <p>
            ${isEn 
              ? 'At <strong>Factor Career</strong> (accessible from <a href="https://factor-career.com/">https://factor-career.com/</a>), one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Factor Career and how we use and protect it.' 
              : 'في منصة <strong>Factor Career</strong> (المتاحة عبر الرابط https://factor-career.com/)، تعد خصوصية زوارنا إحدى أهم أولوياتنا. توضح وثيقة سياسة الخصوصية هذه أنواع المعلومات التي يتم جمعها وتسجيلها وكيفية استخدامها وحمايتها.'}
          </p>
          <p>
            ${isEn
              ? 'If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <a href="mailto:factorcareer@gmail.com">factorcareer@gmail.com</a>.'
              : 'إذا كانت لديك أسئلة إضافية أو تحتاج إلى مزيد من المعلومات حول سياسة الخصوصية الخاصة بنا، فلا تتردد في التواصل معنا عبر البريد الإلكتروني factorcareer@gmail.com.'}
          </p>

          <h2>${isEn ? '2. Client-Side Resume & Career Data Processing' : '2. معالجة بيانات السيرة الذاتية داخل المتصفح'}</h2>
          <p>
            ${isEn 
              ? 'Our AI Resume Builder, Cover Letter Generator, and Interview Coach are designed with privacy-first client-side architecture. We do not store, harvest, or resell your personal resumes, employment history, contact numbers, or private documents to third-party brokers. All document generation happens securely in your local web browser session.' 
              : 'تم تصميم أدواتنا (منشئ السيرة الذاتية ومولد رسائل التقديم ومحاكي المقابلات) لتعمل بتقنية المعالجة المباشرة داخل المتصفح (Client-Side Processing). نحن لا نقوم بتخزين سيرتك الذاتية أو مشاركة بياناتك المهنية مع أي أطراف ثالثة دون موافقتك.'}
          </p>

          <h2>${isEn ? '3. Log Files and Web Analytics' : '3. ملفات السجل والتحليلات'}</h2>
          <p>
            ${isEn 
              ? 'Factor Career follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users\' movement on the website, and gathering demographic information.' 
              : 'تتبع Factor Career إجراءً قياسياً باستخدام ملفات السجل. تسجل هذه الملفات الزوار عند تصفحهم للموقع، مثل عنوان بروتوكول الإنترنت (IP)، نوع المتصفح، مزود خدمة الإنترنت (ISP)، الطابع الزمني، والصفحات التي تمت زيارتها. لا ترتبط هذه المعلومات بأي بيانات تحدد الهوية الشخصية.'}
          </p>

          <h2>${isEn ? '4. Cookies, Web Beacons, and Google AdSense' : '4. ملفات تعريف الارتباط وإعلانات Google AdSense'}</h2>
          <p>
            ${isEn 
              ? 'Like any other website, Factor Career uses "cookies". These cookies are used to store information including visitors\' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users\' experience by customizing our web page content based on visitors\' browser type and/or other information.' 
              : 'تستخدم Factor Career ملفات تعريف الارتباط (Cookies) لحفظ تفضيلات الزوار والصفحات التي تم تصفحها لتحسين تجربة المستخدم.'}
          </p>
          <p>
            ${isEn 
              ? '<strong>Google DoubleClick DART Cookie:</strong> Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to factor-career.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">https://policies.google.com/technologies/ads</a>.' 
              : '<strong>ملف تعريف الارتباط Google DoubleClick DART:</strong> تعد Google أحد موردي الإعلانات الخارجيين في موقعنا. تستخدم ملفات تعريف الارتباط DART لعرض الإعلانات لزوار موقعنا استناداً إلى زيارتهم للموقع والمواقع الأخرى على الويب. يمكن للزوار إلغاء الاشتراك في استخدام ملفات تعريف الارتباط DART من خلال زيارة سياسة خصوصية إعلانات Google.'}
          </p>

          <h2>${isEn ? '5. Third-Party Advertising Partners' : '5. شركاء الإعلانات الخارجيون'}</h2>
          <p>
            ${isEn 
              ? 'Some advertisers on our site may use cookies and web beacons. Our advertising partners include <strong>Google AdSense</strong>. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Factor Career, which are sent directly to users\' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.' 
              : 'قد يستخدم بعض شركاء الإعلانات ملفات تعريف الارتباط وإشارات الويب لقياس فاعلية حملاتهم الإعلانية وتخصيص المحتوى الإعلاني.'}
          </p>
          <p>
            ${isEn 
              ? 'Note that Factor Career has no access to or control over these cookies that are used by third-party advertisers.' 
              : 'يرجى ملاحظة أن Factor Career لا تمتلك أي وصول أو تحكم في ملفات تعريف الارتباط التي يستخدمها معلنون خارجيون.'}
          </p>

          <h2>${isEn ? '6. CCPA Privacy Rights (Do Not Sell My Personal Information)' : '6. حقوق الخصوصية بموجب قانون CCPA'}</h2>
          <p>
            ${isEn 
              ? 'Under the CCPA, among other rights, California consumers have the right to request that a business disclose the categories and specific pieces of personal data that a business has collected about consumers, request deletion of personal data, and request that a business not sell consumer\'s personal data. If you make a request, we have one month to respond to you.' 
              : 'وفقاً لقانون CCPA، يحق للمستخدمين طلب الكشف عن فئات البيانات الشخصية التي تم جمعها أو طلب حذفها وعدم بيعها.'}
          </p>

          <h2>${isEn ? '7. GDPR Data Protection Rights' : '7. حقوق حماية البيانات بموجب اللائحة الأوروبية GDPR'}</h2>
          <p>
            ${isEn 
              ? 'We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability.' 
              : 'يحق لجميع المستخدمين طلب الوصول إلى بياناتهم، وتصحيحها، وحذفها، وتقييد معالجتها وفقاً للائحة العامة لحماية البيانات (GDPR).'}
          </p>

          <h2>${isEn ? '8. Children\'s Information Protection (COPPA)' : '8. حماية خصوصية الأطفال (COPPA)'}</h2>
          <p>
            ${isEn 
              ? 'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Factor Career does not knowingly collect any Personal Identifiable Information from children under the age of 13.' 
              : 'نولي اهتماماً خاصاً بحماية الأطفال على الإنترنت، ولا تقوم منصة Factor Career بجمع أي معلومات تعريفية عن الأطفال دون سن 13 عاماً.'}
          </p>

          <h2>${isEn ? '9. Consent and Contact Information' : '9. الموافقة والتواصل'}</h2>
          <p>
            ${isEn 
              ? 'By using our website, you hereby consent to our Privacy Policy and agree to its terms. For any questions or notices regarding this policy, please reach us at: <a href="mailto:factorcareer@gmail.com">factorcareer@gmail.com</a>.' 
              : 'باستخدامك لموقعنا، فإنك توافق على سياسة الخصوصية الخاصة بنا وشروطها. لأي استفسارات، يرجى مراسلتنا عبر: <a href="mailto:factorcareer@gmail.com">factorcareer@gmail.com</a>.'}
          </p>
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

window.CareerAI.pages.privacySEO = {
  title: 'Privacy Policy | Factor Career - Data Protection & Cookies',
  description: 'Factor Career Privacy Policy. Learn how we protect your personal data, handle cookies, and ensure GDPR/CCPA & Google AdSense compliance.',
  keywords: 'Privacy Policy, Data Protection, Cookies, Google AdSense Policy, GDPR, Factor Career'
};
