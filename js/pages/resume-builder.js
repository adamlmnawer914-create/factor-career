/* ============================================
   CareerAI - AI Resume Builder Tool Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

// In-memory state for Resume Builder (Privacy-first: no backend persistence required)
window.CareerAI.resumeState = {
  currentStep: 1,
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
      name: 'الإنجليزية',
      level: 'متقدم'
    }
  ]
};

// Sample data for quick testing
window.CareerAI.sampleResumeData = {
  currentStep: 1,
  personal: {
    fullName: 'محمد عبد الله العتيبي',
    jobTitle: 'أخصائي تسويق رقمي وتحسين محركات البحث SEO',
    email: 'mohammed.alotaibi@example.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    linkedin: 'linkedin.com/in/mohammed-otaibi',
    website: 'mohammed-marketing.com'
  },
  summary: 'أخصائي تسويق رقمي يتمتع بخبرة تزيد عن 5 سنوات في تحسين محركات البحث (SEO)، وإدارة الحملات الإعلانية المدفوعة على منصات Google Ads و Meta. أمتلك سجلاً حافلاً في زيادة الزيارات المجانية بنسبة 140% وتطوير استراتيجيات المحتوى التي تعزز التحويلات والنمو التجاري.',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: 'مدير تحسين محركات البحث والتسويق الرقمي',
      company: 'شركة أفق للحلول الرقمية',
      city: 'الرياض',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: '• قيادة استراتيجية الـ SEO الشاملة لـ 15 عميلاً رئيسياً وتحقيق المرتبة الأولى في الكلمات المفتاحية التنافسية.\n• إدارة ميزانيات إعلانية بقيمة تتجاوز 500,000 ريال سنوياً مع تحقيق عائد على الإنفاق الإعلاني (ROAS) بنسبة 350%.\n• الإشراف على فريق مكون من 4 متخصصين في صناعة المحتوى وتحليل الأداء باستخدام Google Analytics 4.'
    },
    {
      id: 'exp-2',
      jobTitle: 'أخصائي تسويق محتوى و SEO',
      company: 'مؤسسة الرواد التجارية',
      city: 'جدة',
      startDate: '2019-06',
      endDate: '2021-12',
      current: false,
      description: '• كتابة وتحسين مقالات وصفحات المنتجات بما يتوافق مع معايير محركات البحث وتجربة المستخدم.\n• بناء الروابط الخلفية عالية الجودة (Backlinks) وإجراء التحليل الفني للمواقع لإصلاح الأخطاء التقنية.\n• إعداد تقارير الأداء الشهرية وتحليل مسارات التحويل لتحسين تجربة المستخدم.'
    }
  ],
  education: [
    {
      id: 'edu-1',
      school: 'جامعة الملك سعود',
      degree: 'بكالوريوس في إدارة الأعمال والتسويق',
      startDate: '2015-09',
      endDate: '2019-05',
      location: 'الرياض، السعودية'
    }
  ],
  skills: [
    'تحسين محركات البحث (SEO)',
    'Google Ads',
    'Google Analytics 4',
    'استراتيجيات المحتوى',
    'تحليل البيانات و Excel',
    'إعلانات التواصل الاجتماعي Meta',
    'SEO On-Page & Off-Page',
    'إدارة المشاريع والتواصل'
  ],
  languages: [
    {
      id: 'lang-1',
      name: 'العربية',
      level: 'اللغة الأم'
    },
    {
      id: 'lang-2',
      name: 'الإنجليزية',
      level: 'طليق / متقدم (C1)'
    }
  ]
};

window.CareerAI.pages.resumeBuilder = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.resumeState;

  return `
    <!-- Header -->
    <div class="page-header page-header--compact">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="#/" onclick="CareerAI.router.navigate('/')">الرئيسية</a>
            <span>/</span>
            <a href="#/tools" onclick="CareerAI.router.navigate('/tools')">الأدوات</a>
            <span>/</span>
            <span>منشئ السيرة الذاتية بالذكاء الاصطناعي</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              مجاني 100% وبدون تسجيل
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ متوافق مع أنظمة ATS
            </span>
          </div>
          <h1 class="page-header__title">أداة إنشاء السيرة الذاتية الاحترافية (AI Resume Builder)</h1>
          <p class="page-header__subtitle">أنشئ سيرة ذاتية ذكية، متوافقة مع أنظمة الفرز الآلي ATS، وحمّلها بصيغة PDF عالية الدقة مجاناً في دقائق</p>
        </div>
      </div>
    </div>

    <!-- Main Builder Workspace -->
    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-12)">
      <div class="container">

        <!-- Top Action Bar -->
        <div class="builder-actions-bar">
          <div class="builder-actions-bar__group">
            <button class="btn btn--secondary btn--sm" onclick="CareerAI.loadSampleResume()">
              📄 تعبئة نموذج تجريبي
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#EF4444" onclick="CareerAI.resetResumeForm()">
              🗑️ مسح البيانات والبدء من جديد
            </button>
          </div>
          <div class="builder-actions-bar__group">
            <!-- Mobile Toggle Button -->
            <button class="btn btn--primary btn--sm builder-mobile-toggle" onclick="CareerAI.toggleMobilePreview()">
              👁️ <span id="mobilePreviewToggleText">عرض المعاينة المباشرة</span>
            </button>
            <!-- PDF Download Button -->
            <button class="btn btn--accent btn--md" onclick="CareerAI.downloadResumePDF()">
              <span style="font-size:1.1rem">📥</span>
              <strong>تحميل السيرة الذاتية PDF</strong>
            </button>
          </div>
        </div>

        <!-- Split Grid Workspace -->
        <div class="builder-grid">

          <!-- Left / Form Editor Column -->
          <div class="builder-form-panel" id="builderFormPanel">
            
            <!-- Step Navigation Tabs -->
            <div class="builder-steps-nav">
              <button class="builder-step-btn ${state.currentStep === 1 ? 'active' : ''}" onclick="CareerAI.setResumeStep(1)">
                <span class="builder-step-number">1</span>
                <span class="builder-step-title">المعلومات الشخصية</span>
              </button>
              <button class="builder-step-btn ${state.currentStep === 2 ? 'active' : ''}" onclick="CareerAI.setResumeStep(2)">
                <span class="builder-step-number">2</span>
                <span class="builder-step-title">النبذة المهنية</span>
              </button>
              <button class="builder-step-btn ${state.currentStep === 3 ? 'active' : ''}" onclick="CareerAI.setResumeStep(3)">
                <span class="builder-step-number">3</span>
                <span class="builder-step-title">الخبرات</span>
              </button>
              <button class="builder-step-btn ${state.currentStep === 4 ? 'active' : ''}" onclick="CareerAI.setResumeStep(4)">
                <span class="builder-step-number">4</span>
                <span class="builder-step-title">التعليم</span>
              </button>
              <button class="builder-step-btn ${state.currentStep === 5 ? 'active' : ''}" onclick="CareerAI.setResumeStep(5)">
                <span class="builder-step-number">5</span>
                <span class="builder-step-title">المهارات</span>
              </button>
              <button class="builder-step-btn ${state.currentStep === 6 ? 'active' : ''}" onclick="CareerAI.setResumeStep(6)">
                <span class="builder-step-number">6</span>
                <span class="builder-step-title">اللغات</span>
              </button>
            </div>

            <!-- Form Content Box -->
            <div class="builder-form-card" id="builderFormContent">
              ${CareerAI.renderBuilderStep(state.currentStep)}
            </div>

            <!-- Bottom Step Controls -->
            <div class="builder-step-controls">
              <button class="btn btn--secondary" id="btnPrevStep" onclick="CareerAI.prevResumeStep()" style="${state.currentStep === 1 ? 'visibility:hidden' : ''}">
                → الخطوة السابقة
              </button>
              <div class="builder-step-indicator">
                الخطوة <strong>${state.currentStep}</strong> من <strong>6</strong>
              </div>
              <button class="btn btn--primary" id="btnNextStep" onclick="CareerAI.nextResumeStep()">
                ${state.currentStep === 6 ? 'معاينة وتحميل PDF ✓' : 'الخطوة التالية ←'}
              </button>
            </div>

          </div>

          <!-- Right / Live A4 Resume Preview Column -->
          <div class="builder-preview-panel" id="builderPreviewPanel">
            <div class="builder-preview-header">
              <div class="builder-preview-badge">
                <span class="status-indicator-dot"></span>
                معاينة حية ومباشرة (A4 Format)
              </div>
              <button class="btn btn--accent btn--sm" onclick="CareerAI.downloadResumePDF()">
                تحميل PDF 📄
              </button>
            </div>

            <!-- Live CV A4 Canvas Container -->
            <div class="cv-preview-scroll-wrapper">
              <div class="cv-paper" id="cvPaper">
                ${CareerAI.renderLiveResumeHTML()}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Google AdSense Display Banner (Middle) -->
    <div class="container">
      <div class="adsense-container adsense-display">
        <span class="adsense-label">إعلان ممول / Sponsored</span>
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-7520213352755959"
             data-ad-slot="1029384756"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- SEO & Educational Content Section -->
    <section class="section section--alt" style="padding:var(--space-16) 0">
      <div class="container">
        
        <div class="section__header">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.skills}</span>
            دليل إرشادي شامل
          </span>
          <h2 class="section__title">كل ما تحتاج معرفته عن <span class="text-gradient">السيرة الذاتية الاحترافية</span></h2>
          <p class="section__subtitle">دليل إرشادي من الخبراء لكتابة سيرة ذاتية مميزة تفتح لك أبواب أفضل الوظائف</p>
        </div>

        <div class="grid grid--2" style="gap:var(--space-8);margin-bottom:var(--space-12)">
          
          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.resume}</span>
            </div>
            <h3 class="card__title">ما هي السيرة الذاتية (Curriculum Vitae)؟</h3>
            <p class="card__text">
              السيرة الذاتية هي بطاقتك التعريفية المهنية الأولى التي تقدمها للشركات ومسؤولي التوظيف. تلخص مؤهلاتك العلمية، وخبراتك العملية، وإنجازاتك، ومهاراتك بطريقة منظمة ومقنعة تبين مدى ملاءمتك للوظيفة الشاغرة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.rocket}</span>
            </div>
            <h3 class="card__title">كيفية إنشاء سيرة ذاتية احترافية ناجحة</h3>
            <p class="card__text">
              تبدأ كتابة السيرة الذاتية باختيار تصميم بسيط ونظيف، وتحديد الهدف الوظيفي أو النبذة المهنية بدقة، ثم سرد الخبرات العملية من الأحدث إلى الأقدم مع التركيز على الأرقام والإنجازات القابلة للقياس بدلاً من مجرد سرد المسؤوليات الروتينية.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.cover}</span>
            </div>
            <h3 class="card__title">أهم الأقسام الأساسية في أي سيرة ذاتية</h3>
            <p class="card__text">
              يجب أن تشتمل سيرتك الذاتية على: <strong>1. المعلومات الشخصية وروابط التواصل</strong>، <strong>2. النبذة المهنية الموجزة</strong>، <strong>3. سجل الخبرات العملية</strong>، <strong>4. المؤهلات الدراسية والتعليم</strong>، <strong>5. المهارات التقنية والشخصية</strong>، و <strong>6. اللغات</strong>.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">نصائح ذهبية لاجتياز فحص أنظمة ATS</h3>
            <p class="card__text">
              تستخدم 90% من الشركات أنظمة تتبع المتقدمين (ATS). لضمان قبول ملفك: تجنب وضع النصوص داخل جداول معقدة أو رسومات بيانية، استخدم خطوطاً واضحة، وركز على تضمين الكلمات المفتاحية المذكورة في الوصف الوظيفي.
            </p>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="section__header" style="margin-top:var(--space-16)">
          <h2 class="section__title">الأسئلة الشائعة حول <span class="text-gradient">منشئ السيرة الذاتية</span></h2>
          <p class="section__subtitle">إجابات على كل استفساراتك حول استخدام الأداة وتصدير السيرة الذاتية</p>
        </div>

        <div class="accordion" style="max-width:800px;margin:0 auto">
          
          <div class="accordion__item active">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل أداة إنشاء السيرة الذاتية مجانية بالكامل؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body" style="max-height:200px">
              <div class="accordion__content">
                نعم، الأداة مجانية 100% لجميع الزوار بدون أي اشتراكات أو رسوم خفية، ويمكنك إنشاء وتنزيل سيرتك الذاتية بصيغة PDF بعدد غير محدود من المرات.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل أحتاج إلى إنشاء حساب أو تسجيل دخول لحفظ سيرتي الذاتية؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                لا، احتراماً لخصوصيتك صممنا الأداة لتعمل مباشرة على متصفحك دون الحاجة لتسجيل أي حساب، ولا يتم تخزين أي بيانات شخصية على خوادم المنصة.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل القالب متوافق مع برامج فحص السير الذاتية (ATS)؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                نعم، تم تصميم القالب وفق أعلى معايير الـ ATS: نصوص واضحة، عناوين قياسية سهلة القراءة، هيكل نصوص نظيف، وتوافق تام مع مقاس A4 المعياري عالمياً.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>كيف يعمل زر "التحسين بالذكاء الاصطناعي"؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                يقوم زر التحسين بالذكاء الاصطناعي بصياغة نبذة مهنية قوية ومؤثرة مبنية على مجالك ومسماك الوظيفي، باستخدام كلمات عمل قوية (Action Verbs) وأسلوب احترافي يلفت انتباه مسؤولي التوظيف.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Google AdSense Compact Banner Container (Bottom) -->
    <div class="container" style="padding: var(--space-4) 0 var(--space-8); max-width: 728px; margin: 0 auto;">
      <div style="background: var(--color-bg-alt); border-radius: var(--radius-xl); padding: 10px; border: 1px solid var(--color-border-light); text-align: center;">
        <span style="display: block; font-size: 11px; color: var(--color-text-muted); margin-bottom: 6px;">إعلان ممول / Sponsored</span>
        <ins class="adsbygoogle"
             style="display:block; min-height: 90px; max-height: 100px;"
             data-ad-client="ca-pub-7520213352755959"
             data-ad-slot="auto"
             data-ad-format="horizontal"
             data-full-width-responsive="false"></ins>
      </div>
    </div>
  `;
};

/* ==========================================================================
   RENDER STEP FORMS
   ========================================================================== */

CareerAI.renderBuilderStep = function(stepNumber) {
  const state = window.CareerAI.resumeState;

  switch (stepNumber) {
    // Step 1: Personal Information
    case 1:
      return `
        <div class="builder-step-header">
          <h3 class="builder-step-head-title">👤 المعلومات الشخصية وبيانات التواصل</h3>
          <p class="builder-step-head-desc">أدخل بياناتك الأساسية التي سيتواصل معك مسؤولو التوظيف من خلالها.</p>
        </div>

        <div class="contact-form__row">
          <div class="form-group">
            <label class="form-label">الاسم الكامل *</label>
            <input type="text" class="form-input" placeholder="مثال: أحمد محمد علي" value="${state.personal.fullName}" oninput="CareerAI.updatePersonalField('fullName', this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">المسمى الوظيفي المستهدف *</label>
            <input type="text" class="form-input" placeholder="مثال: مطور برمجيات واجهات أمامية Frontend" value="${state.personal.jobTitle}" oninput="CareerAI.updatePersonalField('jobTitle', this.value)">
          </div>
        </div>

        <div class="contact-form__row">
          <div class="form-group">
            <label class="form-label">البريد الإلكتروني *</label>
            <input type="email" class="form-input" placeholder="name@example.com" value="${state.personal.email}" oninput="CareerAI.updatePersonalField('email', this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">رقم الهاتف *</label>
            <input type="tel" class="form-input" placeholder="+966 5x xxx xxxx" value="${state.personal.phone}" oninput="CareerAI.updatePersonalField('phone', this.value)">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">المدينة والدولة *</label>
          <input type="text" class="form-input" placeholder="مثال: الرياض، المملكة العربية السعودية" value="${state.personal.location}" oninput="CareerAI.updatePersonalField('location', this.value)">
        </div>

        <div class="contact-form__row">
          <div class="form-group">
            <label class="form-label">رابط حساب LinkedIn (اختياري)</label>
            <input type="text" class="form-input" placeholder="linkedin.com/in/username" value="${state.personal.linkedin}" oninput="CareerAI.updatePersonalField('linkedin', this.value)">
          </div>
          <div class="form-group">
            <label class="form-label">رابط الموقع الشخصي أو المعرض (اختياري)</label>
            <input type="text" class="form-input" placeholder="portfolio.com" value="${state.personal.website}" oninput="CareerAI.updatePersonalField('website', this.value)">
          </div>
        </div>
      `;

    // Step 2: Professional Summary
    case 2:
      return `
        <div class="builder-step-header">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:var(--space-2)">
            <div>
              <h3 class="builder-step-head-title">✍️ النبذة المهنية (Professional Summary)</h3>
              <p class="builder-step-head-desc">فقرة موجزة (2-4 أسطر) تلخص سنوات خبرتك، أبرز مهاراتك وقيمتك المضافة.</p>
            </div>
            <button class="btn btn--primary btn--sm btn-ai-enhance" onclick="CareerAI.enhanceSummaryWithAI()">
              ✨ تحسين بالذكاء الاصطناعي
            </button>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">نص النبذة المهنية</label>
          <textarea class="form-textarea" style="min-height:160px" placeholder="اكتب نبذة موجزة عن خبراتك ومؤهلاتك أو اضغط على زر التحسين بالذكاء الاصطناعي للمساعدة..." oninput="CareerAI.updateSummary(this.value)">${state.summary}</textarea>
        </div>

        <div class="ai-suggestions-box">
          <div class="ai-suggestions-box__title">💡 أمثلة سريعة جاهزة للاقتباس:</div>
          <div class="ai-suggestion-tags">
            <button class="ai-suggestion-chip" onclick="CareerAI.applySummaryTemplate('tech')">
              نموذج تقني وبرمجة
            </button>
            <button class="ai-suggestion-chip" onclick="CareerAI.applySummaryTemplate('marketing')">
              نموذج تسويق وإدارة أعمال
            </button>
            <button class="ai-suggestion-chip" onclick="CareerAI.applySummaryTemplate('fresh')">
              نموذج خريج جديد
            </button>
          </div>
        </div>
      `;

    // Step 3: Work Experience
    case 3:
      return `
        <div class="builder-step-header">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:var(--space-2)">
            <div>
              <h3 class="builder-step-head-title">💼 الخبرات المهنية وسجل العمل</h3>
              <p class="builder-step-head-desc">أضف وظائفك السابقة بدءاً من الأحدث. ركز على الإنجازات والمهام الرئيسية.</p>
            </div>
            <button class="btn btn--secondary btn--sm" onclick="CareerAI.addExperience()">
              + إضافة خبرة جديدة
            </button>
          </div>
        </div>

        <div id="experiencesContainer">
          ${state.experiences.map((exp, index) => `
            <div class="repeater-card">
              <div class="repeater-card__header">
                <span class="repeater-card__badge">خبرة عمل #${index + 1}</span>
                ${state.experiences.length > 1 ? `
                  <button class="repeater-card__delete" onclick="CareerAI.removeExperience('${exp.id}')">✕ حذف</button>
                ` : ''}
              </div>

              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label">المسمى الوظيفي *</label>
                  <input type="text" class="form-input" placeholder="مثال: مهندس برمجيات" value="${exp.jobTitle}" oninput="CareerAI.updateExperienceField('${exp.id}', 'jobTitle', this.value)">
                </div>
                <div class="form-group">
                  <label class="form-label">اسم الشركة أو جهة العمل *</label>
                  <input type="text" class="form-input" placeholder="مثال: شركة الحلول المتقدمة" value="${exp.company}" oninput="CareerAI.updateExperienceField('${exp.id}', 'company', this.value)">
                </div>
              </div>

              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label">المدينة</label>
                  <input type="text" class="form-input" placeholder="مثال: الرياض" value="${exp.city}" oninput="CareerAI.updateExperienceField('${exp.id}', 'city', this.value)">
                </div>
                <div class="form-group">
                  <label class="form-label">تاريخ البدء</label>
                  <input type="text" class="form-input" placeholder="مثال: 2022-01" value="${exp.startDate}" oninput="CareerAI.updateExperienceField('${exp.id}', 'startDate', this.value)">
                </div>
              </div>

              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label">تاريخ الانتهاء</label>
                  <input type="text" class="form-input" placeholder="مثال: 2024-05" value="${exp.endDate}" ${exp.current ? 'disabled' : ''} id="exp_end_${exp.id}" oninput="CareerAI.updateExperienceField('${exp.id}', 'endDate', this.value)">
                </div>
                <div class="form-group" style="display:flex;align-items:center;padding-top:var(--space-6)">
                  <label style="display:flex;align-items:center;gap:var(--space-2);cursor:pointer">
                    <input type="checkbox" ${exp.current ? 'checked' : ''} onchange="CareerAI.toggleExpCurrent('${exp.id}', this.checked)">
                    <span style="font-weight:var(--font-medium)">أعمل هنا حالياً</span>
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">الوصف والمهام والإنجازات (استخدم النقاط • للترتيب)</label>
                <textarea class="form-textarea" style="min-height:100px" placeholder="• قدت فريقاً مكوناً من 5 مطورين...\n• قمت بزيادة كفاءة النظام بنسبة 30%..." oninput="CareerAI.updateExperienceField('${exp.id}', 'description', this.value)">${exp.description}</textarea>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    // Step 4: Education
    case 4:
      return `
        <div class="builder-step-header">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:var(--space-2)">
            <div>
              <h3 class="builder-step-head-title">🎓 المؤهلات العلمية والتعليم</h3>
              <p class="builder-step-head-desc">أضف درجاتك الأكاديمية والشهادات الجامعية التي حصلت عليها.</p>
            </div>
            <button class="btn btn--secondary btn--sm" onclick="CareerAI.addEducation()">
              + إضافة مؤهل دراسي
            </button>
          </div>
        </div>

        <div id="educationContainer">
          ${state.education.map((edu, index) => `
            <div class="repeater-card">
              <div class="repeater-card__header">
                <span class="repeater-card__badge">مؤهل دراسي #${index + 1}</span>
                ${state.education.length > 1 ? `
                  <button class="repeater-card__delete" onclick="CareerAI.removeEducation('${edu.id}')">✕ حذف</button>
                ` : ''}
              </div>

              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label">اسم الجامعة أو المؤسسة التعليمية *</label>
                  <input type="text" class="form-input" placeholder="مثال: جامعة الملك فهد للبترول والمعادن" value="${edu.school}" oninput="CareerAI.updateEducationField('${edu.id}', 'school', this.value)">
                </div>
                <div class="form-group">
                  <label class="form-label">الدرجة العلمية والتخصص *</label>
                  <input type="text" class="form-input" placeholder="مثال: بكالوريوس في علوم الحاسب" value="${edu.degree}" oninput="CareerAI.updateEducationField('${edu.id}', 'degree', this.value)">
                </div>
              </div>

              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label">سنة البدء</label>
                  <input type="text" class="form-input" placeholder="مثال: 2017" value="${edu.startDate}" oninput="CareerAI.updateEducationField('${edu.id}', 'startDate', this.value)">
                </div>
                <div class="form-group">
                  <label class="form-label">سنة التخرج أو الانتهاء</label>
                  <input type="text" class="form-input" placeholder="مثال: 2021" value="${edu.endDate}" oninput="CareerAI.updateEducationField('${edu.id}', 'endDate', this.value)">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">المدينة أو الدولة</label>
                <input type="text" class="form-input" placeholder="مثال: الظهران، المملكة العربية السعودية" value="${edu.location}" oninput="CareerAI.updateEducationField('${edu.id}', 'location', this.value)">
              </div>
            </div>
          `).join('')}
        </div>
      `;

    // Step 5: Skills
    case 5:
      return `
        <div class="builder-step-header">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:var(--space-2)">
            <div>
              <h3 class="builder-step-head-title">💡 المهارات المهنية والتقنية</h3>
              <p class="builder-step-head-desc">أضف مهاراتك المتنوعة التي تبرز كفاءتك وملاءمتك لسوق العمل.</p>
            </div>
            <button class="btn btn--primary btn--sm btn-ai-enhance" onclick="CareerAI.suggestSkillsWithAI()">
              ✨ اقتراح مهارات بالذكاء الاصطناعي
            </button>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">أدخل مهارة جديدة ثم اضغط Enter أو زر الإضافة</label>
          <div style="display:flex;gap:var(--space-2)">
            <input type="text" id="newSkillInput" class="form-input" placeholder="مثال: تحسين محركات البحث SEO، Python، إدارة المشاريع..." onkeydown="if(event.key==='Enter'){event.preventDefault();CareerAI.addSkillFromInput();}">
            <button type="button" class="btn btn--accent" onclick="CareerAI.addSkillFromInput()">إضافة</button>
          </div>
        </div>

        <div class="builder-skills-list" id="builderSkillsList">
          ${state.skills.length === 0 ? `
            <div style="color:var(--color-text-muted);font-size:var(--text-sm);padding:var(--space-4);text-align:center;border:1px dashed var(--color-border);border-radius:var(--radius-lg)">
              لم تقم بإضافة مهارات بعد. اختر من الاقتراحات السريعة أدناه أو اكتب مهاراتك.
            </div>
          ` : ''}
          ${state.skills.map((skill, idx) => `
            <span class="builder-skill-tag">
              ${skill}
              <button type="button" class="builder-skill-tag__remove" onclick="CareerAI.removeSkill(${idx})">&times;</button>
            </span>
          `).join('')}
        </div>

        <div class="ai-suggestions-box" style="margin-top:var(--space-6)">
          <div class="ai-suggestions-box__title">🔥 اقتراحات مهارات شائعة (اضغط للإضافة الفورية):</div>
          <div class="ai-suggestion-tags">
            ${['SEO', 'Google Ads', 'Microsoft Excel', 'Graphic Design', 'Programming', 'إدارة المشاريع', 'التواصل الفعال', 'تحليل البيانات', 'حل المشكلات', 'العمل الجماعي', 'Python', 'إدارة الوقت'].map(sk => `
              <button class="ai-suggestion-chip" onclick="CareerAI.addQuickSkill('${sk}')">
                + ${sk}
              </button>
            `).join('')}
          </div>
        </div>
      `;

    // Step 6: Languages
    case 6:
      return `
        <div class="builder-step-header">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:var(--space-2)">
            <div>
              <h3 class="builder-step-head-title">🌐 اللغات ومستوى الإتقان</h3>
              <p class="builder-step-head-desc">أضف اللغات التي تتقنها مع تحديد مستوى إجادتك لكل لغة.</p>
            </div>
            <button class="btn btn--secondary btn--sm" onclick="CareerAI.addLanguage()">
              + إضافة لغة
            </button>
          </div>
        </div>

        <div id="languagesContainer">
          ${state.languages.map((lang, index) => `
            <div class="repeater-card">
              <div class="repeater-card__header">
                <span class="repeater-card__badge">اللغة #${index + 1}</span>
                ${state.languages.length > 1 ? `
                  <button class="repeater-card__delete" onclick="CareerAI.removeLanguage('${lang.id}')">✕ حذف</button>
                ` : ''}
              </div>

              <div class="contact-form__row">
                <div class="form-group">
                  <label class="form-label">اسم اللغة *</label>
                  <input type="text" class="form-input" placeholder="مثال: العربية، الإنجليزية، الفرنسية..." value="${lang.name}" oninput="CareerAI.updateLanguageField('${lang.id}', 'name', this.value)">
                </div>
                <div class="form-group">
                  <label class="form-label">مستوى الإتقان *</label>
                  <select class="form-input form-select" onchange="CareerAI.updateLanguageField('${lang.id}', 'level', this.value)">
                    <option value="اللغة الأم" ${lang.level === 'اللغة الأم' ? 'selected' : ''}>اللغة الأم</option>
                    <option value="طليق / ممتاز (C2)" ${lang.level === 'طليق / ممتاز (C2)' ? 'selected' : ''}>طليق / ممتاز (C2)</option>
                    <option value="متقدم (C1)" ${lang.level === 'متقدم (C1)' || lang.level === 'متقدم' ? 'selected' : ''}>متقدم (C1)</option>
                    <option value="فوق المتوسط (B2)" ${lang.level === 'فوق المتوسط (B2)' ? 'selected' : ''}>فوق المتوسط (B2)</option>
                    <option value="متوسط (B1)" ${lang.level === 'متوسط (B1)' || lang.level === 'متوسط' ? 'selected' : ''}>متوسط (B1)</option>
                    <option value="مبتدئ (A1-A2)" ${lang.level === 'مبتدئ (A1-A2)' ? 'selected' : ''}>مبتدئ (A1-A2)</option>
                  </select>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `;

    default:
      return '';
  }
};

/* ==========================================================================
   RENDER LIVE A4 RESUME TEMPLATE (ATS-FRIENDLY)
   ========================================================================== */

CareerAI.renderLiveResumeHTML = function() {
  const p = window.CareerAI.resumeState.personal;
  const summary = window.CareerAI.resumeState.summary;
  const experiences = window.CareerAI.resumeState.experiences.filter(e => e.jobTitle || e.company || e.description);
  const education = window.CareerAI.resumeState.education.filter(e => e.school || e.degree);
  const skills = window.CareerAI.resumeState.skills;
  const languages = window.CareerAI.resumeState.languages.filter(l => l.name);

  const hasContent = p.fullName || p.jobTitle || summary || experiences.length > 0 || education.length > 0 || skills.length > 0;

  if (!hasContent) {
    return `
      <div class="cv-empty-state">
        <div class="cv-empty-icon">📄</div>
        <h3>معاينة السيرة الذاتية المباشرة</h3>
        <p>ابدأ بإدخال بياناتك في النموذج على اليمين أو اضغط على "تعبئة نموذج تجريبي" لمشاهدة النتيجة فوراً.</p>
      </div>
    `;
  }

  return `
    <!-- CV Header Section -->
    <div class="cv-header">
      <h1 class="cv-name">${p.fullName || 'الاسم الكامل'}</h1>
      <div class="cv-title">${p.jobTitle || 'المسمى الوظيفي المستهدف'}</div>

      <!-- Contact Info Bar -->
      <div class="cv-contact-bar">
        ${p.email ? `<span>✉️ ${p.email}</span>` : ''}
        ${p.phone ? `<span>📱 ${p.phone}</span>` : ''}
        ${p.location ? `<span>📍 ${p.location}</span>` : ''}
        ${p.linkedin ? `<span>🔗 ${p.linkedin}</span>` : ''}
        ${p.website ? `<span>🌐 ${p.website}</span>` : ''}
      </div>
    </div>

    <!-- Summary Section -->
    ${summary ? `
      <div class="cv-section">
        <h2 class="cv-section-title">النبذة المهنية</h2>
        <p class="cv-summary-text">${summary}</p>
      </div>
    ` : ''}

    <!-- Experiences Section -->
    ${experiences.length > 0 ? `
      <div class="cv-section">
        <h2 class="cv-section-title">الخبرات المهنية</h2>
        <div class="cv-items-list">
          ${experiences.map(exp => `
            <div class="cv-item">
              <div class="cv-item-header">
                <div>
                  <strong class="cv-item-title">${exp.jobTitle || 'المسمى الوظيفي'}</strong>
                  <div class="cv-item-subtitle">${exp.company || 'اسم الشركة'} ${exp.city ? `— ${exp.city}` : ''}</div>
                </div>
                <div class="cv-item-date">
                  ${exp.startDate || ''} ${exp.startDate && (exp.endDate || exp.current) ? '—' : ''} ${exp.current ? 'حتى الآن' : (exp.endDate || '')}
                </div>
              </div>
              ${exp.description ? `
                <div class="cv-item-desc">${exp.description.replace(/\n/g, '<br>')}</div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Education Section -->
    ${education.length > 0 ? `
      <div class="cv-section">
        <h2 class="cv-section-title">المؤهلات العلمية والتعليم</h2>
        <div class="cv-items-list">
          ${education.map(edu => `
            <div class="cv-item">
              <div class="cv-item-header">
                <div>
                  <strong class="cv-item-title">${edu.degree || 'الشهادة والتخصص'}</strong>
                  <div class="cv-item-subtitle">${edu.school || 'المؤسسة التعليمية'} ${edu.location ? `— ${edu.location}` : ''}</div>
                </div>
                <div class="cv-item-date">
                  ${edu.startDate || ''} ${edu.startDate && edu.endDate ? '—' : ''} ${edu.endDate || ''}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Skills Section -->
    ${skills.length > 0 ? `
      <div class="cv-section">
        <h2 class="cv-section-title">المهارات</h2>
        <div class="cv-skills-grid">
          ${skills.map(skill => `<span class="cv-skill-pill">• ${skill}</span>`).join('')}
        </div>
      </div>
    ` : ''}

    <!-- Languages Section -->
    ${languages.length > 0 ? `
      <div class="cv-section">
        <h2 class="cv-section-title">اللغات</h2>
        <div class="cv-languages-grid">
          ${languages.map(lang => `
            <div class="cv-language-item">
              <strong>${lang.name}:</strong> <span>${lang.level}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `;
};

/* ==========================================================================
   STATE MUTATION & ACTIONS
   ========================================================================== */

CareerAI.updateLivePreview = function() {
  const paper = document.getElementById('cvPaper');
  if (paper) {
    paper.innerHTML = CareerAI.renderLiveResumeHTML();
  }
};

CareerAI.setResumeStep = function(step) {
  CareerAI.resumeState.currentStep = step;
  const content = document.getElementById('builderFormContent');
  if (content) {
    content.innerHTML = CareerAI.renderBuilderStep(step);
  }

  // Update Nav Buttons
  document.querySelectorAll('.builder-step-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx + 1 === step);
  });

  // Update Controls
  const prevBtn = document.getElementById('btnPrevStep');
  const nextBtn = document.getElementById('btnNextStep');
  if (prevBtn) prevBtn.style.visibility = step === 1 ? 'hidden' : 'visible';
  if (nextBtn) nextBtn.innerHTML = step === 6 ? 'معاينة وتحميل PDF ✓' : 'الخطوة التالية ←';

  const indicator = document.querySelector('.builder-step-indicator');
  if (indicator) indicator.innerHTML = `الخطوة <strong>${step}</strong> من <strong>6</strong>`;
};

CareerAI.nextResumeStep = function() {
  if (CareerAI.resumeState.currentStep < 6) {
    CareerAI.setResumeStep(CareerAI.resumeState.currentStep + 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  } else {
    // Reached end -> trigger download or prompt
    CareerAI.downloadResumePDF();
  }
};

CareerAI.prevResumeStep = function() {
  if (CareerAI.resumeState.currentStep > 1) {
    CareerAI.setResumeStep(CareerAI.resumeState.currentStep - 1);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }
};

// Personal Info
CareerAI.updatePersonalField = function(field, value) {
  CareerAI.resumeState.personal[field] = value;
  CareerAI.updateLivePreview();
};

// Summary
CareerAI.updateSummary = function(value) {
  CareerAI.resumeState.summary = value;
  CareerAI.updateLivePreview();
};

CareerAI.enhanceSummaryWithAI = function() {
  const title = CareerAI.resumeState.personal.jobTitle || 'المجال المهني';
  const name = CareerAI.resumeState.personal.fullName || 'المتخصص';
  
  let enhanced = '';
  if (title.includes('برمج') || title.includes('مطور') || title.includes('Frontend') || title.includes('Full Stack')) {
    enhanced = `مهندس برمجيات ومطور شغوف يتمتع بخبرة مثبتة في بناء تطبيقات ويب متطورة وقابلة للتوسع. أتقن أحدث التقنيات وأفضل الممارسات البرمجية، مع التركيز العالي على الأداء وتجربة المستخدم السلسة وكتابة كود نظيف وقابل للصيانة.`;
  } else if (title.includes('تسويق') || title.includes('SEO') || title.includes('Marketing')) {
    enhanced = `أخصائي تسويق رقمي ذو خبرة استراتيجية في إدارة الحملات الإعلانية المدفوعة وتحسين محركات البحث SEO. أمتلك سجلاً حافلاً في تنمية الزيارات المجانية، تحسين معدلات التحويل (CRO)، وتعزيز العائد على الاستثمار للمشاريع التجارية.`;
  } else {
    enhanced = `مهني طموح ومتميز في مجال ${title}، أمتلك خبرة عملية ومهارات تحليلية وتنظيمية متقدمة. ملتزم بتحقيق أعلى معايير الجودة ومساعدة فريق العمل على تحقيق الأهداف الاستراتيجية بكفاءة واحترافية.`;
  }

  CareerAI.resumeState.summary = enhanced;
  CareerAI.setResumeStep(2);
  CareerAI.updateLivePreview();
};

CareerAI.applySummaryTemplate = function(type) {
  if (type === 'tech') {
    CareerAI.resumeState.summary = `مطور برمجيات ذو خبرة في بناء الأنظمة السحابية وتطبيقات الويب عالية الأداء، أمتلك مهارات قوية في حل المشكلات البرمجية المعقدة والعمل ضمن فرق رشيقة (Agile).`;
  } else if (type === 'marketing') {
    CareerAI.resumeState.summary = `مسؤول تسويق رقمي ذو خبرة في صياغة الاستراتيجيات الترويجية، إدارة الحملات الإعلانية على منصات التواصل ومحركات البحث، وتحليل بيانات العملاء لرفع المبيعات.`;
  } else if (type === 'fresh') {
    CareerAI.resumeState.summary = `خريج شغوف وطموح أسعى لتوظيف مهاراتي الأكاديمية والعملية في بيئة مهنية محفزة تسهم في صقل خبراتي وتحقيق نتائج ملموسة للشركة.`;
  }
  CareerAI.setResumeStep(2);
  CareerAI.updateLivePreview();
};

// Experience
CareerAI.addExperience = function() {
  CareerAI.resumeState.experiences.push({
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
  CareerAI.resumeState.experiences = CareerAI.resumeState.experiences.filter(e => e.id !== id);
  CareerAI.setResumeStep(3);
  CareerAI.updateLivePreview();
};

CareerAI.updateExperienceField = function(id, field, value) {
  const exp = CareerAI.resumeState.experiences.find(e => e.id === id);
  if (exp) {
    exp[field] = value;
    CareerAI.updateLivePreview();
  }
};

CareerAI.toggleExpCurrent = function(id, checked) {
  const exp = CareerAI.resumeState.experiences.find(e => e.id === id);
  if (exp) {
    exp.current = checked;
    if (checked) exp.endDate = '';
    const endInput = document.getElementById('exp_end_' + id);
    if (endInput) {
      endInput.disabled = checked;
      if (checked) endInput.value = '';
    }
    CareerAI.updateLivePreview();
  }
};

// Education
CareerAI.addEducation = function() {
  CareerAI.resumeState.education.push({
    id: 'edu-' + Date.now(),
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: ''
  });
  CareerAI.setResumeStep(4);
  CareerAI.updateLivePreview();
};

CareerAI.removeEducation = function(id) {
  CareerAI.resumeState.education = CareerAI.resumeState.education.filter(e => e.id !== id);
  CareerAI.setResumeStep(4);
  CareerAI.updateLivePreview();
};

CareerAI.updateEducationField = function(id, field, value) {
  const edu = CareerAI.resumeState.education.find(e => e.id === id);
  if (edu) {
    edu[field] = value;
    CareerAI.updateLivePreview();
  }
};

// Skills
CareerAI.addSkillFromInput = function() {
  const input = document.getElementById('newSkillInput');
  if (input && input.value.trim()) {
    CareerAI.addQuickSkill(input.value.trim());
    input.value = '';
    input.focus();
  }
};

CareerAI.addQuickSkill = function(skillName) {
  if (!CareerAI.resumeState.skills.includes(skillName)) {
    CareerAI.resumeState.skills.push(skillName);
    CareerAI.setResumeStep(5);
    CareerAI.updateLivePreview();
  }
};

CareerAI.removeSkill = function(index) {
  CareerAI.resumeState.skills.splice(index, 1);
  CareerAI.setResumeStep(5);
  CareerAI.updateLivePreview();
};

CareerAI.suggestSkillsWithAI = function() {
  const title = CareerAI.resumeState.personal.jobTitle || '';
  let suggested = [];

  if (title.includes('برمج') || title.includes('مطور') || title.includes('Frontend') || title.includes('Web')) {
    suggested = ['JavaScript (ES6+)', 'HTML5 & CSS3', 'React.js', 'Git & GitHub', 'RESTful APIs', 'حل المشكلات البرمجية', 'Responsive Design'];
  } else if (title.includes('تسويق') || title.includes('SEO') || title.includes('Marketing')) {
    suggested = ['SEO (تحسين محركات البحث)', 'Google Ads', 'Google Analytics 4', 'صناعة المحتوى', 'إدارة الحملات الإعلانية', 'التسويق عبر البريد الإلكتروني'];
  } else {
    suggested = ['إدارة المشاريع', 'التواصل الفعال', 'حل المشكلات والتفكير النقدي', 'Microsoft Office & Excel', 'العمل الجماعي', 'إدارة الوقت'];
  }

  suggested.forEach(s => {
    if (!CareerAI.resumeState.skills.includes(s)) {
      CareerAI.resumeState.skills.push(s);
    }
  });

  CareerAI.setResumeStep(5);
  CareerAI.updateLivePreview();
};

// Languages
CareerAI.addLanguage = function() {
  CareerAI.resumeState.languages.push({
    id: 'lang-' + Date.now(),
    name: '',
    level: 'متوسط'
  });
  CareerAI.setResumeStep(6);
  CareerAI.updateLivePreview();
};

CareerAI.removeLanguage = function(id) {
  CareerAI.resumeState.languages = CareerAI.resumeState.languages.filter(l => l.id !== id);
  CareerAI.setResumeStep(6);
  CareerAI.updateLivePreview();
};

CareerAI.updateLanguageField = function(id, field, value) {
  const lang = CareerAI.resumeState.languages.find(l => l.id === id);
  if (lang) {
    lang[field] = value;
    CareerAI.updateLivePreview();
  }
};

// Reset & Sample
CareerAI.loadSampleResume = function() {
  CareerAI.resumeState = JSON.parse(JSON.stringify(CareerAI.sampleResumeData));
  CareerAI.setResumeStep(CareerAI.resumeState.currentStep);
  CareerAI.updateLivePreview();
};

CareerAI.resetResumeForm = function() {
  if (confirm('هل أنت متأكد من رغبتك في مسح كافة البيانات والبدء من جديد؟')) {
    CareerAI.resumeState = {
      currentStep: 1,
      personal: { fullName: '', jobTitle: '', email: '', phone: '', location: '', linkedin: '', website: '' },
      summary: '',
      experiences: [{ id: 'exp-1', jobTitle: '', company: '', city: '', startDate: '', endDate: '', current: false, description: '' }],
      education: [{ id: 'edu-1', school: '', degree: '', startDate: '', endDate: '', location: '' }],
      skills: [],
      languages: [{ id: 'lang-1', name: 'العربية', level: 'اللغة الأم' }]
    };
    CareerAI.setResumeStep(1);
    CareerAI.updateLivePreview();
  }
};

// Mobile Toggle
CareerAI.toggleMobilePreview = function() {
  const panel = document.getElementById('builderPreviewPanel');
  const text = document.getElementById('mobilePreviewToggleText');
  if (panel) {
    const isShowing = panel.classList.toggle('active-mobile');
    if (text) text.innerText = isShowing ? 'العودة إلى نموذج التعديل' : 'عرض المعاينة المباشرة';
    if (isShowing) panel.scrollIntoView({ behavior: 'smooth' });
  }
};

// PDF Download via clean browser print engine
CareerAI.downloadResumePDF = function() {
  window.print();
};

// SEO Metadata for Resume Builder
window.CareerAI.pages.resumeBuilderSEO = {
  title: 'صانع السيرة الذاتية بالذكاء الاصطناعي مجاناً | Factor Career Resume Builder',
  description: 'أنشئ سيرة ذاتية احترافية متوافقة مع أنظمة ATS مجاناً وبدون تسجيل. احصل على معاينة مباشرة وحمّل سيرتك الذاتية بصيغة PDF عالية الجودة.',
  keywords: 'صانع سيرة ذاتية, سيرة ذاتية بالذكاء الاصطناعي, إنشاء CV احترافي, قالب سيرة ذاتية ATS, تحميل سيرة ذاتية PDF, Resume Builder AI'
};
