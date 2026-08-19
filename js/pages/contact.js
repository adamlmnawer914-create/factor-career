/* ============================================
   CareerAI - Contact Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.contact = function() {
  const icons = window.CareerAI.icons;

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">الرئيسية</a>
            <span>/</span>
            <span>تواصل معنا</span>
          </div>
          <h1 class="page-header__title">تواصل معنا</h1>
          <p class="page-header__subtitle">نسعد بتواصلك مع فريق Factor Career. أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense Compact Banner (Top) -->
    <div class="container" style="padding-top:var(--space-4)">
      <div class="adsense-container adsense-banner-sm">
        <span class="adsense-label">إعلان ممول / Ad</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="9911223344"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
        <div class="contact-page__grid">
          <div class="contact-form animate-on-scroll">
            <h2 class="contact-form__title">أرسل لنا رسالة</h2>
            <p class="contact-form__subtitle">املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة</p>

            <form id="contactForm" onsubmit="CareerAI.handleContactForm(event)">
              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label" for="name">الاسم الكامل</label>
                  <input type="text" id="name" class="form-input" placeholder="أدخل اسمك الكامل" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">البريد الإلكتروني</label>
                  <input type="email" id="email" class="form-input" placeholder="example@email.com" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">الموضوع</label>
                <select id="subject" class="form-input form-select" required>
                  <option value="">اختر الموضوع</option>
                  <option value="general">استفسار عام</option>
                  <option value="support">دعم فني</option>
                  <option value="feedback">ملاحظات واقتراحات</option>
                  <option value="partnership">شراكات وتعاون</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">الرسالة</label>
                <textarea id="message" class="form-textarea" placeholder="اكتب رسالتك هنا..." required></textarea>
              </div>

              <button type="submit" class="btn btn--primary btn--full" id="submitBtn">
                إرسال الرسالة
                <span style="width:18px;height:18px;display:inline-flex">${icons.mail}</span>
              </button>
            </form>

            <div class="success-message" id="successMessage">
              <div class="success-message__icon">✓</div>
              <h3 class="success-message__title">تم إرسال رسالتك بنجاح!</h3>
              <p class="success-message__text">شكراً لتواصلك مع Factor Career. سنرد عليك في أقرب وقت ممكن.</p>
            </div>
          </div>

          <div class="contact-info animate-on-scroll delay-2">
            <div class="contact-info__card">
              <div class="contact-info__icon">
                <span style="width:24px;height:24px;display:inline-flex">${icons.mail}</span>
              </div>
              <div>
                <h3 class="contact-info__title">البريد الإلكتروني</h3>
                <p class="contact-info__text">careerfactor@gmail.com</p>
                <p class="contact-info__text">الدعم الفني متاح 24/7</p>
              </div>
            </div>

            <div class="contact-info__card">
              <div class="contact-info__icon">
                <span style="width:24px;height:24px;display:inline-flex">${icons.phone}</span>
              </div>
              <div>
                <h3 class="contact-info__title">الهاتف</h3>
                <p class="contact-info__text" dir="ltr" style="text-align:right">+212 642 394 756</p>
                <p class="contact-info__text">من الإثنين إلى السبت، 9ص - 6م</p>
              </div>
            </div>

            <div class="contact-info__card">
              <div class="contact-info__icon">
                <span style="width:24px;height:24px;display:inline-flex">${icons.mapPin}</span>
              </div>
              <div>
                <h3 class="contact-info__title">العنوان والموقع</h3>
                <p class="contact-info__text">المملكة المغربية</p>
                <p class="contact-info__text">مدينة سوق السبت أولاد النمة</p>
              </div>
            </div>

            <div class="contact-info__card">
              <div class="contact-info__icon" style="background:var(--color-accent-50);color:var(--color-accent)">
                <span style="width:24px;height:24px;display:inline-flex">${icons.clock}</span>
              </div>
              <div>
                <h3 class="contact-info__title">ساعات العمل</h3>
                <p class="contact-info__text">الإثنين - السبت: 9:00 ص - 6:00 م</p>
                <p class="contact-info__text">الأحد: عطلة أسبوعية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google AdSense Square Unit & Compact Banner Row -->
    <div class="container" style="padding:var(--space-6) var(--container-padding) var(--space-12)">
      <div class="adsense-row">
        <div class="adsense-container adsense-square">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="9900112200"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="9900112233"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  `;
};

/* Contact Form Handler */
window.CareerAI.handleContactForm = function(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('successMessage');
  form.style.display = 'none';
  success.classList.add('show');
};

window.CareerAI.pages.contactSEO = {
  title: 'تواصل معنا - Factor Career',
  description: 'تواصل مع فريق Factor Career للاستفسارات والدعم الفني والاقتراحات. المغرب، سوق السبت أولاد النمة.',
  keywords: 'تواصل, دعم فني, Factor Career, اتصل بنا, المغرب'
};
