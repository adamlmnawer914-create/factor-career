/* ============================================
   CareerAI - AI Resume Builder Tool Page
   Full Bilingual (AR/EN), 100% Free, Instant Sample Data,
   Live Responsive Preview & High-Quality PDF Export
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

// In-memory state for Resume Builder
window.CareerAI.resumeState = {
  currentStep: 1,
  themeColor: '#4f46e5',
  personal: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: ''
  },
  summary: '',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: '',
      company: '',
      city: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }
  ],
  education: [
    {
      id: 'edu-1',
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    }
  ],
  skills: [],
  languages: [
    {
      id: 'lang-1',
      name: 'العربية',
      level: 'اللغة الأم'
    },
    {
      id: 'lang-2',
      name: 'English',
      level: 'Professional Working'
    }
  ]
};

// Sample data for instant one-click testing
window.CareerAI.sampleResumeData = {
  themeColor: '#4f46e5',
  personal: {
    fullName: 'محمد عبد الله العتيبي',
    jobTitle: 'أخصائي تسويق رقمي وإدارة حملات إعلانية',
    email: 'mohammed.otaibi@example.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    linkedin: 'linkedin.com/in/mohammed-otaibi',
    website: 'mohammed-marketing.com'
  },
  personal_en: {
    fullName: 'Mohammed Al-Otaibi',
    jobTitle: 'Senior Digital Marketing & Growth Specialist',
    email: 'mohammed.otaibi@example.com',
    phone: '+966 50 123 4567',
    location: 'Riyadh, Saudi Arabia',
    linkedin: 'linkedin.com/in/mohammed-otaibi',
    website: 'mohammed-marketing.com'
  },
  summary: 'أخصائي تسويق رقمي محترف بخبرة تزيد عن 5 سنوات في تحسين محركات البحث (SEO) وإدارة الحملات الإعلانية المدفوعة على Google Ads و Meta. حققت نمواً بنسبة 140% في الزيارات المجانية وإيرادات المبيعات عبر الإنترنت مع قيادة فرق عمل متعددة التخصصات.',
  summary_en: 'Results-driven Digital Marketing Specialist with 5+ years of experience leading multi-channel campaigns, SEO optimization, and high-ROI paid ads on Google & Meta. Proven track record of boosting organic traffic by 140% and optimizing conversion funnels.',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: 'مدير تحسين محركات البحث والتسويق الرقمي',
      company: 'شركة أفق للحلول الرقمية',
      city: 'الرياض',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: '• إدارة وتوجيه استراتيجية الـ SEO لـ 15 عميلاً رئيسياً مع تصدر الصفحة الأولى في الكلمات التنافسية.\n• إدارة ميزانيات إعلانية بقيمة تتجاوز 500,000 ريال سنوياً وتحقيق عائد على الإنفاق الإعلاني (ROAS) بنسبة 350%.\n• الإشراف على فريق مكون من 4 متخصصين في صناعة المحتوى وتحليل بيانات الزوار عبر GA4.'
    },
    {
      id: 'exp-2',
      jobTitle: 'أخصائي تسويق محتوى و SEO',
      company: 'مؤسسة الرواد التجارية',
      city: 'جدة',
      startDate: '2019-06',
      endDate: '2021-12',
      current: false,
      description: '• كتابة وتحسين المقالات التسويقية بما يتوافق مع معايير محركات البحث وتجربة المستخدم.\n• بناء الروابط الخلفية عالية الجودة (Backlinks) وإجراء التحليل الفني للمواقع لإصلاح الأخطاء البرمجية.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      school: 'جامعة الملك سعود',
      degree: 'بكالوريوس في إدارة الأعمال والتسويق',
      startDate: '2015-09',
      endDate: '2019-05',
      location: 'الرياض'
    }
  ],
  skills: [
    'SEO & Content Strategy',
    'Google Ads & Meta Ads',
    'Google Analytics 4',
    'Conversion Rate Optimization',
    'Email Marketing (Klaviyo)',
    'Keyword Research (Ahrefs)',
    'HTML/CSS Basics',
    'Team Leadership'
  ],
  languages: [
    { id: 'lang-1', name: 'العربية', level: 'اللغة الأم / Native' },
    { id: 'lang-2', name: 'English', level: 'Fluent / Full Professional' }
  ]
};

window.CareerAI.pages.resumeBuilder = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.resumeState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <!-- Header -->
    <div class="page-header page-header--compact">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <a href="/tools" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.tools', 'الأدوات')}</a>
            <span>/</span>
            <span>${isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الذكي'}</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              ${isEn ? '100% Free & Unlimited' : 'مجاني 100% وبدون تسجيل'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ ${isEn ? 'ATS-Friendly Formats' : 'متوافق مع أنظمة ATS'}
            </span>
          </div>
          <h1 class="page-header__title">${isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الاحترافية بالذكاء الاصطناعي'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Create an ATS-optimized professional resume in minutes. Live preview and free instant PDF export.' : 'أنشئ سيرة ذاتية متوافقة مع أنظمة الفرز الآلي ATS مع معاينة مباشرة وتصدير PDF فوري مجاناً.'}</p>
        </div>
      </div>
    </div>

    <!-- Google AdSense - Tool Top Leaderboard -->
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

    <!-- Main Builder Workspace -->
    <section class="section" style="padding-top:var(--space-4);padding-bottom:var(--space-12)">
      <div class="container">

        <!-- Top Instant Action Bar -->
        <div class="builder-actions-bar" style="background:rgba(30,41,59,0.7);padding:1rem;border-radius:12px;border:1px solid rgba(99,102,241,0.25);margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
          <div class="builder-actions-bar__group" style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleResume()" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
              ⚡ ${isEn ? 'Try Sample Resume (1-Click)' : '⚡ تجربة نموذج سيرة جاهز فوراً'}
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.resetResumeForm()">
              🗑️ ${isEn ? 'Clear All' : 'مسح البيانات'}
            </button>
          </div>
          <div class="builder-actions-bar__group" style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--secondary btn--sm builder-mobile-toggle" onclick="CareerAI.toggleMobilePreview()">
              👁️ <span id="mobilePreviewToggleText">${isEn ? 'Show Live Preview' : 'عرض المعاينة المباشرة'}</span>
            </button>
            <button class="btn btn--primary btn--md" onclick="CareerAI.downloadResumePDF()" style="box-shadow:0 4px 15px rgba(16,185,129,0.3)">
              📥 ${isEn ? 'Download Resume PDF' : 'تحميل السيرة الذاتية PDF'}
            </button>
          </div>
        </div>

        <!-- 2-Column Builder Layout (Editor Form Left/Right + Live Preview + Skyscraper Ad) -->
        <div class="builder-layout" style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start;">
          
          <!-- Column 1: Step Form -->
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;">
            
            <!-- Step Navigation Tabs -->
            <div class="builder-steps-nav" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;overflow-x:auto;padding-bottom:0.5rem;border-bottom:1px solid var(--color-border-light);">
              <button class="step-nav-btn ${state.currentStep === 1 ? 'active' : ''}" onclick="CareerAI.setResumeStep(1)">1. ${isEn ? 'Personal' : 'البيانات'}</button>
              <button class="step-nav-btn ${state.currentStep === 2 ? 'active' : ''}" onclick="CareerAI.setResumeStep(2)">2. ${isEn ? 'Summary' : 'الملخص'}</button>
              <button class="step-nav-btn ${state.currentStep === 3 ? 'active' : ''}" onclick="CareerAI.setResumeStep(3)">3. ${isEn ? 'Experience' : 'الخبرات'}</button>
              <button class="step-nav-btn ${state.currentStep === 4 ? 'active' : ''}" onclick="CareerAI.setResumeStep(4)">4. ${isEn ? 'Education' : 'التعليم'}</button>
              <button class="step-nav-btn ${state.currentStep === 5 ? 'active' : ''}" onclick="CareerAI.setResumeStep(5)">5. ${isEn ? 'Skills' : 'المهارات'}</button>
            </div>

            <!-- Dynamic Step Content Form -->
            <div id="resumeStepFormContent">
              ${CareerAI.renderBuilderStep(state.currentStep)}
            </div>

            <!-- Bottom Step Pagination Controls -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2rem;padding-top:1rem;border-top:1px solid var(--color-border-light);">
              <button class="btn btn--secondary btn--sm" id="btnPrevStep" onclick="CareerAI.prevResumeStep()" style="${state.currentStep === 1 ? 'visibility:hidden' : ''}">
                ${isEn ? '← Previous' : '← السابق'}
              </button>
              <span style="font-size:0.85rem;color:var(--color-text-muted)">${isEn ? 'Step' : 'الخطوة'} ${state.currentStep} ${isEn ? 'of' : 'من'} 5</span>
              <button class="btn btn--primary btn--sm" id="btnNextStep" onclick="CareerAI.nextResumeStep()">
                ${state.currentStep === 5 ? (isEn ? 'Finish & Download 📥' : 'إنهاء وتحميل 📥') : (isEn ? 'Next →' : 'التالي →')}
              </button>
            </div>
          </div>

          <!-- Column 2: Live Preview Frame -->
          <div class="preview-card" id="resumePreviewContainer" style="position:sticky;top:90px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:1px solid var(--color-border-light);">
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span style="width:10px;height:10px;border-radius:50%;background:#10B981;display:inline-block"></span>
                <span style="font-size:0.9rem;font-weight:700;color:var(--color-text)">${isEn ? 'Live ATS Resume Preview' : 'معاينة السيرة المباشرة (ATS Format)'}</span>
              </div>
              <button class="btn btn--accent btn--sm" onclick="CareerAI.downloadResumePDF()">
                📥 ${isEn ? 'Download PDF' : 'تحميل PDF'}
              </button>
            </div>

            <div class="resume-paper-wrapper" style="background:#ffffff;color:#1e293b;border-radius:8px;padding:2rem;min-height:550px;box-shadow:0 10px 25px rgba(0,0,0,0.15);overflow-y:auto;max-height:650px;" id="liveResumeDocument">
              ${CareerAI.renderLiveResumeHTML()}
            </div>
          </div>

        </div>

        <!-- Google AdSense - Vertical Skyscraper (300x600) & Medium Rectangle (300x250) Row -->
        <div style="display:flex;justify-content:center;align-items:center;gap:var(--space-8);margin:3.5rem auto 1.5rem;flex-wrap:wrap;">
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
          
          <!-- Medium Rectangle 300x250 -->
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

        ${window.CareerAI.components.renderOtherTools('resume-builder')}
      </div>
    </section>
  `;
};

// Render step forms
CareerAI.renderBuilderStep = function(stepNumber) {
  const state = window.CareerAI.resumeState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (stepNumber === 1) {
    return `
      <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
        ${isEn ? '1. Personal & Contact Information' : '1. المعلومات الشخصية وبيانات التواصل'}
      </h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
        <div class="form-group" style="grid-column:1 / -1">
          <label class="form-label">${isEn ? 'Full Name *' : 'الاسم الكامل *'}</label>
          <input type="text" class="form-input" value="${state.personal.fullName || ''}" placeholder="${isEn ? 'e.g. John Doe' : 'مثال: محمد عبد الله'}" oninput="CareerAI.updatePersonalField('fullName', this.value)">
        </div>
        <div class="form-group" style="grid-column:1 / -1">
          <label class="form-label">${isEn ? 'Job Title / Target Role *' : 'المسمى الوظيفي المستهدف *'}</label>
          <input type="text" class="form-input" value="${state.personal.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Software Engineer' : 'مثال: مهندس برمجيات أول'}" oninput="CareerAI.updatePersonalField('jobTitle', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Email Address *' : 'البريد الإلكتروني *'}</label>
          <input type="email" class="form-input" value="${state.personal.email || ''}" placeholder="example@domain.com" oninput="CareerAI.updatePersonalField('email', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Phone Number *' : 'رقم الهاتف *'}</label>
          <input type="tel" class="form-input" value="${state.personal.phone || ''}" placeholder="+966 50 000 0000" oninput="CareerAI.updatePersonalField('phone', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Location (City, Country)' : 'المدينة والدولة'}</label>
          <input type="text" class="form-input" value="${state.personal.location || ''}" placeholder="${isEn ? 'e.g. Riyadh, KSA' : 'مثال: الرياض، السعودية'}" oninput="CareerAI.updatePersonalField('location', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'LinkedIn Profile URL' : 'رابط لينكد إن LinkedIn'}</label>
          <input type="text" class="form-input" value="${state.personal.linkedin || ''}" placeholder="linkedin.com/in/username" oninput="CareerAI.updatePersonalField('linkedin', this.value)">
        </div>
      </div>
    `;
  }

  if (stepNumber === 2) {
    return `
      <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
        ${isEn ? '2. Professional Summary' : '2. الملخص والنبذة المهنية'}
      </h3>
      <p style="font-size:0.85rem;color:var(--color-text-muted);margin-bottom:1rem">
        ${isEn ? 'A powerful 2-4 sentence summary highlighting your top strengths and career achievements.' : 'فقرة موجزة ومقنعة (3-4 أسطر) تلخص خبراتك وأهم إنجازاتك المهنية لجذب مسؤولي التوظيف.'}
      </p>
      <div class="form-group">
        <textarea class="form-textarea" rows="6" placeholder="${isEn ? 'Type your summary here or click AI Optimize below...' : 'اكتب نبذتك المهنية هنا أو اضغط على أحد النماذج الذكية بالأسفل...'}" oninput="CareerAI.updateSummary(this.value)">${state.summary || ''}</textarea>
      </div>
      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem;">
        <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.enhanceSummaryWithAI()">
          ✨ ${isEn ? 'AI Enhance Summary' : 'تحسين بالذكاء الاصطناعي ✨'}
        </button>
      </div>
    `;
  }

  if (stepNumber === 3) {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <h3 style="font-size:1.15rem;font-weight:700;color:var(--color-text)">
          ${isEn ? '3. Work Experience' : '3. الخبرات المهنية'}
        </h3>
        <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addExperience()">
          + ${isEn ? 'Add Job' : 'إضافة خبرة'}
        </button>
      </div>
      
      <div id="experienceListContainer">
        ${state.experiences.map((exp, idx) => `
          <div style="background:rgba(15,23,42,0.4);border:1px solid var(--color-border-light);border-radius:10px;padding:1rem;margin-bottom:1rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <span style="font-weight:700;font-size:0.95rem;color:var(--color-accent)">#${idx + 1} ${exp.jobTitle || (isEn ? 'Job Title' : 'المسمى الوظيفي')}</span>
              ${state.experiences.length > 1 ? `
                <button type="button" class="btn btn--ghost btn--sm" style="color:#f87171;padding:2px 8px" onclick="CareerAI.removeExperience('${exp.id}')">✕ ${isEn ? 'Delete' : 'حذف'}</button>
              ` : ''}
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
              <div class="form-group">
                <label class="form-label">${isEn ? 'Job Title *' : 'المسمى الوظيفي *'}</label>
                <input type="text" class="form-input" value="${exp.jobTitle || ''}" placeholder="${isEn ? 'e.g. Marketing Manager' : 'مثال: مدير تسويق'}" oninput="CareerAI.updateExperienceField('${exp.id}', 'jobTitle', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'Company Name *' : 'اسم الشركة *'}</label>
                <input type="text" class="form-input" value="${exp.company || ''}" placeholder="${isEn ? 'e.g. Acme Corp' : 'مثال: شركة أفق'}" oninput="CareerAI.updateExperienceField('${exp.id}', 'company', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'Start Date' : 'تاريخ البدء'}</label>
                <input type="text" class="form-input" value="${exp.startDate || ''}" placeholder="2021-01" oninput="CareerAI.updateExperienceField('${exp.id}', 'startDate', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'End Date' : 'تاريخ الانتهاء'}</label>
                <input type="text" class="form-input" value="${exp.endDate || ''}" placeholder="${isEn ? 'Present / Date' : 'حتى الآن / تاريخ'}" oninput="CareerAI.updateExperienceField('${exp.id}', 'endDate', this.value)">
              </div>
              <div class="form-group" style="grid-column:1 / -1">
                <label class="form-label">${isEn ? 'Key Responsibilities & Achievements (Bullet points)' : 'أهم المهام والإنجازات (نقاط)'}</label>
                <textarea class="form-textarea" rows="3" placeholder="${isEn ? '• Increased sales by 25%\n• Managed a team of 5' : '• قيادة وإدارة الفريق بنجاح\n• تحقيق نمو في المبيعات بنسبة 25%'}" oninput="CareerAI.updateExperienceField('${exp.id}', 'description', this.value)">${exp.description || ''}</textarea>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (stepNumber === 4) {
    return `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
        <h3 style="font-size:1.15rem;font-weight:700;color:var(--color-text)">
          ${isEn ? '4. Education & Qualifications' : '4. المؤهلات التعليمية'}
        </h3>
        <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addEducation()">
          + ${isEn ? 'Add Degree' : 'إضافة مؤهل'}
        </button>
      </div>

      <div id="educationListContainer">
        ${state.education.map((edu, idx) => `
          <div style="background:rgba(15,23,42,0.4);border:1px solid var(--color-border-light);border-radius:10px;padding:1rem;margin-bottom:1rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <span style="font-weight:700;font-size:0.95rem;color:var(--color-accent)">#${idx + 1} ${edu.degree || (isEn ? 'Degree' : 'الشهادة')}</span>
              ${state.education.length > 1 ? `
                <button type="button" class="btn btn--ghost btn--sm" style="color:#f87171;padding:2px 8px" onclick="CareerAI.removeEducation('${edu.id}')">✕ ${isEn ? 'Delete' : 'حذف'}</button>
              ` : ''}
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
              <div class="form-group" style="grid-column:1 / -1">
                <label class="form-label">${isEn ? 'Degree / Field of Study *' : 'الدرجة العلمية والتخصص *'}</label>
                <input type="text" class="form-input" value="${edu.degree || ''}" placeholder="${isEn ? 'e.g. Bachelor of Science in Marketing' : 'مثال: بكالوريوس في إدارة الأعمال'}" oninput="CareerAI.updateEducationField('${edu.id}', 'degree', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'University / Institution *' : 'الجامعة أو المعهد *'}</label>
                <input type="text" class="form-input" value="${edu.school || ''}" placeholder="${isEn ? 'e.g. King Saud University' : 'مثال: جامعة الملك سعود'}" oninput="CareerAI.updateEducationField('${edu.id}', 'school', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'Graduation Year / Duration' : 'سنة التخرج أو الفترة'}</label>
                <input type="text" class="form-input" value="${edu.endDate || ''}" placeholder="2019" oninput="CareerAI.updateEducationField('${edu.id}', 'endDate', this.value)">
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (stepNumber === 5) {
    return `
      <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
        ${isEn ? '5. Skills & Languages' : '5. المهارات واللغات'}
      </h3>
      
      <!-- Skills Input -->
      <div class="form-group" style="margin-bottom:1.5rem">
        <label class="form-label">${isEn ? 'Add Key Skills (Press Enter or Add)' : 'أضف مهاراتك الأساسية'}</label>
        <div style="display:flex;gap:0.5rem">
          <input type="text" id="newSkillInput" class="form-input" placeholder="${isEn ? 'e.g. Project Management, SEO, Python' : 'مثال: إدارة المشاريع، SEO، تحليل البيانات'}" onkeydown="if(event.key==='Enter'){event.preventDefault();CareerAI.addSkillFromInput();}">
          <button type="button" class="btn btn--primary btn--sm" onclick="CareerAI.addSkillFromInput()">${isEn ? 'Add' : 'إضافة'}</button>
        </div>
        
        <div id="skillsBadgesContainer" style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.75rem">
          ${state.skills.map((s, idx) => `
            <span style="background:rgba(99,102,241,0.2);color:#a5b4fc;border:1px solid rgba(99,102,241,0.4);border-radius:20px;padding:4px 12px;font-size:0.85rem;display:inline-flex;align-items:center;gap:6px">
              ${s}
              <button type="button" style="background:none;border:none;color:#f87171;cursor:pointer;font-weight:bold" onclick="CareerAI.removeSkill(${idx})">✕</button>
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Languages -->
      <div class="form-group">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem">
          <label class="form-label" style="margin:0">${isEn ? 'Languages' : 'اللغات'}</label>
          <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addLanguage()">+ ${isEn ? 'Add Language' : 'إضافة لغة'}</button>
        </div>
        <div id="languagesContainer">
          ${state.languages.map((l, idx) => `
            <div style="display:flex;gap:0.5rem;margin-bottom:0.5rem;align-items:center">
              <input type="text" class="form-input" value="${l.name}" placeholder="${isEn ? 'Language' : 'اللغة'}" oninput="CareerAI.updateLanguageField('${l.id}', 'name', this.value)" style="flex:1">
              <input type="text" class="form-input" value="${l.level}" placeholder="${isEn ? 'Proficiency' : 'المستوى'}" oninput="CareerAI.updateLanguageField('${l.id}', 'level', this.value)" style="flex:1">
              ${state.languages.length > 1 ? `
                <button type="button" class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.removeLanguage('${l.id}')">✕</button>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
};

// Render Live ATS Resume HTML for Preview & Print
CareerAI.renderLiveResumeHTML = function() {
  const state = window.CareerAI.resumeState;
  const p = state.personal;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  const hasPersonal = p.fullName || p.jobTitle || p.email;
  if (!hasPersonal && !state.summary && (!state.experiences[0] || !state.experiences[0].jobTitle)) {
    return `
      <div style="text-align:center;padding:3rem 1rem;color:#64748b;">
        <div style="font-size:2.5rem;margin-bottom:1rem">📄</div>
        <h4 style="font-size:1.1rem;font-weight:700;color:#334155;margin-bottom:0.5rem">
          ${isEn ? 'Your resume preview is waiting!' : 'معاينة سيرتك الذاتية في انتظارك!'}
        </h4>
        <p style="font-size:0.85rem;max-width:320px;margin:0 auto 1.25rem">
          ${isEn ? 'Fill in the form on the left, or click the button below to load sample data instantly.' : 'ابدأ بملء البيانات على اليمين، أو اضغط الزر بالأسفل لتجربة نموذج جاهز بنقرة واحدة.'}
        </p>
        <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleResume()">
          ⚡ ${isEn ? 'Load Sample Data' : 'ملء نموذج تجريبي فوري'}
        </button>
      </div>
    `;
  }

  return `
    <div style="font-family:'Inter', 'Cairo', sans-serif;line-height:1.5;color:#1e293b;">
      <!-- Header -->
      <div style="border-bottom:2px solid #3b82f6;padding-bottom:1rem;margin-bottom:1.25rem;text-align:center;">
        <h1 style="font-size:1.6rem;font-weight:800;color:#0f172a;margin:0 0 4px 0;letter-spacing:-0.02em;">${p.fullName || (isEn ? 'Your Name' : 'الاسم الكامل')}</h1>
        <div style="font-size:1rem;font-weight:600;color:#3b82f6;margin-bottom:8px;">${p.jobTitle || ''}</div>
        <div style="font-size:0.82rem;color:#475569;display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
          ${p.email ? `<span>📧 ${p.email}</span>` : ''}
          ${p.phone ? `<span>📞 ${p.phone}</span>` : ''}
          ${p.location ? `<span>📍 ${p.location}</span>` : ''}
          ${p.linkedin ? `<span>🔗 ${p.linkedin}</span>` : ''}
        </div>
      </div>

      <!-- Summary -->
      ${state.summary ? `
        <div style="margin-bottom:1.25rem;">
          <h2 style="font-size:0.95rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:3px;margin-bottom:6px;">
            ${isEn ? 'Professional Summary' : 'الملخص المهني'}
          </h2>
          <p style="font-size:0.85rem;color:#334155;margin:0;line-height:1.6;">${state.summary}</p>
        </div>
      ` : ''}

      <!-- Experience -->
      ${state.experiences.some(e => e.jobTitle || e.company) ? `
        <div style="margin-bottom:1.25rem;">
          <h2 style="font-size:0.95rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:3px;margin-bottom:8px;">
            ${isEn ? 'Work Experience' : 'الخبرات المهنية'}
          </h2>
          ${state.experiences.filter(e => e.jobTitle || e.company).map(exp => `
            <div style="margin-bottom:0.75rem;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:0.88rem;font-weight:700;color:#0f172a;">
                <span>${exp.jobTitle}</span>
                <span style="font-size:0.78rem;font-weight:500;color:#64748b;">${exp.startDate || ''} ${exp.startDate && (exp.endDate || exp.current) ? '–' : ''} ${exp.current ? (isEn ? 'Present' : 'حتى الآن') : (exp.endDate || '')}</span>
              </div>
              <div style="font-size:0.82rem;font-weight:600;color:#3b82f6;margin-bottom:4px;">${exp.company} ${exp.city ? '• ' + exp.city : ''}</div>
              ${exp.description ? `
                <div style="font-size:0.82rem;color:#334155;white-space:pre-line;line-height:1.5;">${exp.description}</div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Education -->
      ${state.education.some(e => e.degree || e.school) ? `
        <div style="margin-bottom:1.25rem;">
          <h2 style="font-size:0.95rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:3px;margin-bottom:8px;">
            ${isEn ? 'Education' : 'التعليم والمؤهلات'}
          </h2>
          ${state.education.filter(e => e.degree || e.school).map(edu => `
            <div style="margin-bottom:0.5rem;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:0.86rem;font-weight:700;color:#0f172a;">
                <span>${edu.degree}</span>
                <span style="font-size:0.78rem;font-weight:500;color:#64748b;">${edu.endDate || ''}</span>
              </div>
              <div style="font-size:0.82rem;color:#475569;">${edu.school}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Skills -->
      ${state.skills && state.skills.length > 0 ? `
        <div style="margin-bottom:1.25rem;">
          <h2 style="font-size:0.95rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:3px;margin-bottom:6px;">
            ${isEn ? 'Skills' : 'المهارات'}
          </h2>
          <div style="font-size:0.82rem;color:#334155;line-height:1.6;">
            ${state.skills.join(' • ')}
          </div>
        </div>
      ` : ''}

      <!-- Languages -->
      ${state.languages && state.languages.some(l => l.name) ? `
        <div>
          <h2 style="font-size:0.95rem;font-weight:700;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:3px;margin-bottom:6px;">
            ${isEn ? 'Languages' : 'اللغات'}
          </h2>
          <div style="font-size:0.82rem;color:#334155;">
            ${state.languages.filter(l => l.name).map(l => l.name + (l.level ? ' (' + l.level + ')' : '')).join(' • ')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
};

// Handlers & State Updaters
CareerAI.updateLivePreview = function() {
  const el = document.getElementById('liveResumeDocument');
  if (el) el.innerHTML = CareerAI.renderLiveResumeHTML();
};

CareerAI.setResumeStep = function(step) {
  window.CareerAI.resumeState.currentStep = step;
  const formEl = document.getElementById('resumeStepFormContent');
  if (formEl) formEl.innerHTML = CareerAI.renderBuilderStep(step);
  
  document.querySelectorAll('.step-nav-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx + 1 === step);
  });

  const prevBtn = document.getElementById('btnPrevStep');
  const nextBtn = document.getElementById('btnNextStep');
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (prevBtn) prevBtn.style.visibility = (step === 1 ? 'hidden' : 'visible');
  if (nextBtn) {
    nextBtn.textContent = (step === 5 ? (isEn ? 'Finish & Download 📥' : 'إنهاء وتحميل 📥') : (isEn ? 'Next →' : 'التالي →'));
  }
};

CareerAI.nextResumeStep = function() {
  const current = window.CareerAI.resumeState.currentStep;
  if (current < 5) {
    CareerAI.setResumeStep(current + 1);
  } else {
    CareerAI.downloadResumePDF();
  }
};

CareerAI.prevResumeStep = function() {
  const current = window.CareerAI.resumeState.currentStep;
  if (current > 1) {
    CareerAI.setResumeStep(current - 1);
  }
};

CareerAI.updatePersonalField = function(field, value) {
  window.CareerAI.resumeState.personal[field] = value;
  CareerAI.updateLivePreview();
};

CareerAI.updateSummary = function(value) {
  window.CareerAI.resumeState.summary = value;
  CareerAI.updateLivePreview();
};

CareerAI.enhanceSummaryWithAI = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const role = window.CareerAI.resumeState.personal.jobTitle || (isEn ? 'Professional' : 'محترف في مجالي');
  
  const aiGenerated = isEn
    ? `Dedicated and results-oriented ${role} with extensive experience leading impactful projects, optimizing workflows, and driving strategic growth. Proven ability to deliver high-quality outcomes and collaborate across cross-functional teams.`
    : `مهني متخصص ومتحمس في مجال ${role} بخبرة عملية مثبتة في إدارة المشاريع وتطوير الأداء وتحقيق نتائج ملموسة. أتميز بالقدرة العالية على الابتكار والعمل الجماعي وحل المشكلات المعقدة لتحقيق أهداف المؤسسة.`;

  window.CareerAI.resumeState.summary = aiGenerated;
  const textarea = document.querySelector('textarea.form-textarea');
  if (textarea) textarea.value = aiGenerated;
  CareerAI.updateLivePreview();
};

CareerAI.addExperience = function() {
  window.CareerAI.resumeState.experiences.push({
    id: 'exp-' + Date.now(),
    jobTitle: '',
    company: '',
    city: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });
  CareerAI.setResumeStep(3);
  CareerAI.updateLivePreview();
};

CareerAI.removeExperience = function(id) {
  window.CareerAI.resumeState.experiences = window.CareerAI.resumeState.experiences.filter(e => e.id !== id);
  CareerAI.setResumeStep(3);
  CareerAI.updateLivePreview();
};

CareerAI.updateExperienceField = function(id, field, value) {
  const exp = window.CareerAI.resumeState.experiences.find(e => e.id === id);
  if (exp) {
    exp[field] = value;
    CareerAI.updateLivePreview();
  }
};

CareerAI.addEducation = function() {
  window.CareerAI.resumeState.education.push({
    id: 'edu-' + Date.now(),
    degree: '',
    school: '',
    endDate: '',
    location: ''
  });
  CareerAI.setResumeStep(4);
  CareerAI.updateLivePreview();
};

CareerAI.removeEducation = function(id) {
  window.CareerAI.resumeState.education = window.CareerAI.resumeState.education.filter(e => e.id !== id);
  CareerAI.setResumeStep(4);
  CareerAI.updateLivePreview();
};

CareerAI.updateEducationField = function(id, field, value) {
  const edu = window.CareerAI.resumeState.education.find(e => e.id === id);
  if (edu) {
    edu[field] = value;
    CareerAI.updateLivePreview();
  }
};

CareerAI.addSkillFromInput = function() {
  const input = document.getElementById('newSkillInput');
  if (!input || !input.value.trim()) return;
  const val = input.value.trim();
  if (!window.CareerAI.resumeState.skills.includes(val)) {
    window.CareerAI.resumeState.skills.push(val);
  }
  input.value = '';
  CareerAI.setResumeStep(5);
  CareerAI.updateLivePreview();
};

CareerAI.removeSkill = function(idx) {
  window.CareerAI.resumeState.skills.splice(idx, 1);
  CareerAI.setResumeStep(5);
  CareerAI.updateLivePreview();
};

CareerAI.addLanguage = function() {
  window.CareerAI.resumeState.languages.push({
    id: 'lang-' + Date.now(),
    name: '',
    level: ''
  });
  CareerAI.setResumeStep(5);
  CareerAI.updateLivePreview();
};

CareerAI.removeLanguage = function(id) {
  window.CareerAI.resumeState.languages = window.CareerAI.resumeState.languages.filter(l => l.id !== id);
  CareerAI.setResumeStep(5);
  CareerAI.updateLivePreview();
};

CareerAI.updateLanguageField = function(id, field, value) {
  const l = window.CareerAI.resumeState.languages.find(l => l.id === id);
  if (l) {
    l[field] = value;
    CareerAI.updateLivePreview();
  }
};

CareerAI.loadSampleResume = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const sample = window.CareerAI.sampleResumeData;

  window.CareerAI.resumeState.personal = isEn ? { ...sample.personal_en } : { ...sample.personal };
  window.CareerAI.resumeState.summary = isEn ? sample.summary_en : sample.summary;
  window.CareerAI.resumeState.experiences = JSON.parse(JSON.stringify(sample.experiences));
  window.CareerAI.resumeState.education = JSON.parse(JSON.stringify(sample.education));
  window.CareerAI.resumeState.skills = [...sample.skills];
  window.CareerAI.resumeState.languages = JSON.parse(JSON.stringify(sample.languages));

  CareerAI.setResumeStep(window.CareerAI.resumeState.currentStep);
  CareerAI.updateLivePreview();
};

CareerAI.resetResumeForm = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!confirm(isEn ? 'Are you sure you want to clear all data and start fresh?' : 'هل أنت متأكد من رغبتك في مسح كافة البيانات والبدء من جديد؟')) return;

  window.CareerAI.resumeState = {
    currentStep: 1,
    themeColor: '#4f46e5',
    personal: { fullName: '', jobTitle: '', email: '', phone: '', location: '', linkedin: '', website: '' },
    summary: '',
    experiences: [{ id: 'exp-1', jobTitle: '', company: '', city: '', startDate: '', endDate: '', current: false, description: '' }],
    education: [{ id: 'edu-1', school: '', degree: '', startDate: '', endDate: '', location: '' }],
    skills: [],
    languages: [{ id: 'lang-1', name: 'العربية', level: 'اللغة الأم' }]
  };

  CareerAI.setResumeStep(1);
  CareerAI.updateLivePreview();
};

CareerAI.toggleMobilePreview = function() {
  const preview = document.getElementById('resumePreviewContainer');
  const btnText = document.getElementById('mobilePreviewToggleText');
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (preview) {
    const isVisible = preview.classList.toggle('mobile-visible');
    if (btnText) {
      btnText.textContent = isVisible 
        ? (isEn ? 'Hide Preview' : 'إخفاء المعاينة')
        : (isEn ? 'Show Live Preview' : 'عرض المعاينة المباشرة');
    }
  }
};

CareerAI.downloadResumePDF = function() {
  const resumeEl = document.getElementById('liveResumeDocument');
  if (!resumeEl) return;

  const fullName = window.CareerAI.resumeState.personal.fullName || 'Resume';
  const originalTitle = document.title;
  document.title = fullName + ' - Factor Career Resume';

  // Native Print to PDF engine
  window.print();

  setTimeout(() => {
    document.title = originalTitle;
  }, 1000);
};

window.CareerAI.pages.resumeBuilderSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI Resume Builder | ATS-Compliant CV Maker - Factor Career',
      description: 'Build a professional ATS-compliant resume with free AI suggestions, modern templates, live preview, and instant PDF download on Factor Career.',
      keywords: 'AI Resume Builder, Free CV Maker, ATS Resume, Resume Generator, Factor Career'
    };
  }
  return {
    title: 'منشئ السيرة الذاتية بالذكاء الاصطناعي مجاناً | فكتور كارير',
    description: 'أنشئ سيرة ذاتية احترافية متوافقة مع أنظمة ATS بنقرة واحدة. قوالب مجانية جاهزة وتصدير PDF فوري بدون تسجيل.',
    keywords: 'منشئ السيرة الذاتية, إنشاء سيرة ذاتية, سيرة ذاتية ATS, عمل CV مجاني, Factor Career'
  };
};
