/* ============================================
   Factor Career - Contact Us Page (Multilingual)
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
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.contact', 'تواصل معنا')}</span>
          </div>
          <h1 class="page-header__title">${isEn ? 'Contact Factor Career Support' : 'تواصل معنا - Factor Career'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Have questions, feedback, or need assistance? Reach out to our dedicated support team.' : 'نسعد بتواصلك مع فريق Factor Career. أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن'}</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense Compact Banner (Top) -->
    <div class="container" style="padding-top:var(--space-4)">
      <div class="adsense-container adsense-banner-sm">
        <span class="adsense-label">${t('common.sponsored', 'إعلان ممول / Sponsored')}</span>
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
          
          <!-- Contact Form -->
          <div class="contact-form animate-on-scroll">
            <h2 class="contact-form__title">${isEn ? 'Send us a Direct Message' : 'أرسل لنا رسالة'}</h2>
            <p class="contact-form__subtitle">${isEn ? 'Fill out the form below and our team will get back to you within 24 hours.' : 'املأ النموذج أدناه وسنتواصل معك خلال 24 ساعة'}</p>

            <form id="contactForm" onsubmit="CareerAI.handleContactForm(event)">
              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label" for="name">${isEn ? 'Full Name *' : 'الاسم الكامل *'}</label>
                  <input type="text" id="name" class="form-input" placeholder="${isEn ? 'e.g. John Doe' : 'أدخل اسمك الكامل'}" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="email">${isEn ? 'Email Address *' : 'البريد الإلكتروني *'}</label>
                  <input type="email" id="email" class="form-input" placeholder="name@example.com" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="subject">${isEn ? 'Subject *' : 'الموضوع *'}</label>
                <select id="subject" class="form-input form-select" required>
                  <option value="">${isEn ? '-- Select a topic --' : '-- اختر الموضوع --'}</option>
                  <option value="general">${isEn ? 'General Inquiry' : 'استفسار عام'}</option>
                  <option value="tools">${isEn ? 'AI Tools Assistance & Feedback' : 'دعم بخصوص الأدوات'}</option>
                  <option value="jobs">${isEn ? 'Job Listing & Partnerships' : 'فرص التوظيف والشركات'}</option>
                  <option value="ads">${isEn ? 'Advertising & Business Inquiries' : 'الإعلانات والتعاون التجاري'}</option>
                  <option value="privacy">${isEn ? 'Privacy & Data Protection' : 'الخصوصية وحماية البيانات'}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="message">${isEn ? 'Your Message *' : 'نص الرسالة *'}</label>
                <textarea id="message" class="form-input form-textarea" rows="5" placeholder="${isEn ? 'Describe your inquiry in detail...' : 'اكتب رسالتك بالتفصيل هنا...'}" required></textarea>
              </div>

              <button type="submit" class="btn btn--primary btn--full btn--lg">
                ${isEn ? 'Send Message' : 'إرسال الرسالة'}
                <span style="width:18px;height:18px;display:inline-flex;transform:${isEn ? 'rotate(180deg)' : 'rotate(0deg)'}">${icons.arrowLeft}</span>
              </button>
            </form>

            <div id="contactSuccess" class="success-message" style="display:none;margin-top:var(--space-6)">
              <div class="success-message__icon">✓</div>
              <p class="success-message__text">${isEn ? 'Thank you for reaching out! Your message has been sent successfully. We will reply shortly.' : 'شكراً لتواصلك مع Factor Career. تم استلام رسالتك وسنرد عليك في أقرب وقت ممكن.'}</p>
            </div>
          </div>

          <!-- Contact Details & Support Channels -->
          <div class="contact-info animate-on-scroll delay-2">
            <h2 class="contact-info__title">${isEn ? 'Official Communication Channels' : 'معلومات التواصل'}</h2>
            <p class="contact-info__subtitle">${isEn ? 'Feel free to connect directly via email or our support center.' : 'يمكنك أيضاً التواصل معنا عبر القنوات التالية مباشرة'}</p>

            <div class="contact-info__list">
              <a href="mailto:careerfactor@gmail.com" class="contact-info__item">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.mail}</span>
                </div>
                <div>
                  <div class="contact-info__label">${isEn ? 'Official Email' : 'البريد الإلكتروني'}</div>
                  <div class="contact-info__value">careerfactor@gmail.com</div>
                </div>
              </a>

              <a href="tel:+212642394756" class="contact-info__item" dir="ltr" style="text-align:inherit">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.phone}</span>
                </div>
                <div>
                  <div class="contact-info__label">${isEn ? 'Direct Phone / WhatsApp' : 'الهاتف المباشر'}</div>
                  <div class="contact-info__value">+212 642 394 756</div>
                </div>
              </a>

              <div class="contact-info__item">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.mapPin}</span>
                </div>
                <div>
                  <div class="contact-info__label">${isEn ? 'Office Location' : 'الموقع الجغرافي'}</div>
                  <div class="contact-info__value">${isEn ? 'Morocco, Souk Sebt Oulad Nemma' : 'المملكة المغربية، سوق السبت أولاد النمة'}</div>
                </div>
              </div>

              <div class="contact-info__item">
                <div class="contact-info__icon">
                  <span style="width:24px;height:24px;display:inline-flex">${icons.clock}</span>
                </div>
                <div>
                  <div class="contact-info__label">${isEn ? 'Response Time' : 'أوقات الاستجابة'}</div>
                  <div class="contact-info__value">${isEn ? 'Typically within 12-24 hours' : 'خلال 12 - 24 ساعة'}</div>
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
  title: 'Contact Us | Factor Career Support',
  description: 'Get in touch with the Factor Career team for questions, tool support, job listings, and business inquiries.',
  keywords: 'Contact Factor Career, Support, Career Help, Inquiries'
};
