/* ============================================
   Factor Career - Contact Page (Multilingual)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.contact = function() {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.contact', 'تواصل معنا')}</span>
          </div>
          <h1 class="page-header__title">${t('contact.title', 'تواصل معنا')}</h1>
          <p class="page-header__subtitle">${t('contact.subtitle', 'نسعد بتواصلك مع فريق Factor Career. أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن')}</p>
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
             data-ad-slot="9911223344"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
        <div class="contact-page__grid">
          <div class="contact-form animate-on-scroll">
            <h2 class="contact-form__title">${isEn ? 'Send us a message' : 'أرسل لنا رسالة'}</h2>
            <p class="contact-form__subtitle">${isEn ? 'Fill out the form below and our team will get back to you within 24 hours.' : 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة'}</p>

            <form id="contactForm" onsubmit="CareerAI.handleContactForm(event)">
              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label" for="name">${t('contact.formName', 'الاسم الكامل *')}</label>
                  <input type="text" id="name" class="form-input" placeholder="${isEn ? 'e.g. John Doe' : 'أدخل اسمك الكامل'}" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">${t('contact.formEmail', 'البريد الإلكتروني *')}</label>
                  <input type="email" id="email" class="form-input" placeholder="example@email.com" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">${t('contact.formSubject', 'الموضوع *')}</label>
                <select id="subject" class="form-input form-select" required>
                  <option value="">${isEn ? '-- Select subject --' : '-- اختر الموضوع --'}</option>
                  <option value="general">${isEn ? 'General Inquiry' : 'استفسار عام'}</option>
                  <option value="tools">${isEn ? 'AI Tools Support' : 'دعم بخصوص الأدوات'}</option>
                  <option value="jobs">${isEn ? 'Jobs & Careers Listing' : 'فرص التوظيف والشركات'}</option>
                  <option value="suggestion">${isEn ? 'Feature Suggestion' : 'اقتراح أو فكرة جديدة'}</option>
                  <option value="business">${isEn ? 'Partnership & Business' : 'شراكة أو تعاون'}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">${t('contact.formMsg', 'نص الرسالة *')}</label>
                <textarea id="message" class="form-input form-textarea" rows="5" placeholder="${isEn ? 'How can we help you?' : 'اكتب رسالتك بالتفصيل هنا...'}" required></textarea>
              </div>

              <button type="submit" class="btn btn--primary btn--full btn--lg">
                ${t('contact.btnSend', 'إرسال الرسالة')}
                <span style="width:18px;height:18px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </button>
            </form>

            <div id="contactSuccess" class="success-message" style="display:none;margin-top:var(--space-6)">
              <div class="success-message__icon">✓</div>
              <p class="success-message__text">${t('contact.success', 'شكراً لتواصلك مع Factor Career. سنرد عليك في أقرب وقت ممكن.')}</p>
            </div>
          </div>

          <div class="contact-info animate-on-scroll delay-2">
            <h2 class="contact-info__title">${isEn ? 'Contact Info' : 'معلومات التواصل'}</h2>
            <p class="contact-info__subtitle">${isEn ? 'You can also reach out to us directly through any of the following channels:' : 'يمكنك أيضاً التواصل معنا عبر القنوات التالية مباشرة'}</p>

            <div class="contact-info__list">
              <a href="mailto:careerfactor@gmail.com" class="contact-info__item">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.mail}</span>
                </div>
                <div>
                  <div class="contact-info__label">${t('contact.emailLabel', 'البريد الإلكتروني')}</div>
                  <div class="contact-info__value">careerfactor@gmail.com</div>
                </div>
              </a>

              <a href="tel:+212642394756" class="contact-info__item" dir="ltr" style="text-align:inherit">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.phone}</span>
                </div>
                <div>
                  <div class="contact-info__label">${t('contact.phoneLabel', 'الهاتف المباشر')}</div>
                  <div class="contact-info__value">+212 642 394 756</div>
                </div>
              </a>

              <div class="contact-info__item">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.mapPin}</span>
                </div>
                <div>
                  <div class="contact-info__label">${t('contact.locationLabel', 'الموقع الجغرافي')}</div>
                  <div class="contact-info__value">${t('footer.location', 'المملكة المغربية، سوق السبت أولاد النمة')}</div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.clock}</span>
                </div>
                <div>
                  <div class="contact-info__label">${isEn ? 'Support Hours' : 'أوقات الدعم'}</div>
                  <div class="contact-info__value">${isEn ? '24/7 Throughout the week' : 'على مدار الساعة طوال أيام الأسبوع'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.handleContactForm = function(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
};

window.CareerAI.pages.contactSEO = {
  title: 'تواصل معنا | Factor Career Contact Us',
  description: 'تواصل مع فريق Factor Career للاستفسارات والدعم الفني والاقتراحات.',
  keywords: 'تواصل, دعم فني, Factor Career, contact us, المغرب'
};
