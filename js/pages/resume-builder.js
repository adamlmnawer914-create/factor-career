/* ============================================
   CareerAI - AI Resume Builder & Styler Tool Page v4.0
   Full Bilingual (AR/EN), 100% Free, Real-Time ATS Score Meter,
   4 Luxury Templates, Palette Picker, AI Enhancer & Live PDF Export
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

// In-memory state for Resume Builder
window.CareerAI.resumeState = {
  currentStep: 1,
  template: 'modern', // 'modern', 'executive', 'tech', 'emerald'
  themeColor: '#2563eb',
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
  template: 'modern',
  themeColor: '#2563eb',
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
  summary: 'أخصائي تسويق رقمي محترف بخبرة تزيد عن 5 سنوات في تحسين محركات البحث (SEO) وإدارة الحملات الإعلانية المدفوعة على Google Ads و Meta. حققت نمواً بنسبة 140% في الزيارات المجانية وإيرادات المبيعات عبر الإنترنت مع قيادة فرق عمل متعددة التخصصات وتحقيق عائد استثماري استثنائي.',
  summary_en: 'Results-driven Digital Marketing Specialist with 5+ years of experience leading multi-channel campaigns, SEO optimization, and high-ROI paid ads on Google & Meta. Proven track record of boosting organic traffic by 140% and driving measurable commercial growth across international markets.',
  experiences: [
    {
      id: 'exp-1',
      jobTitle: 'مدير تحسين محركات البحث والتسويق الرقمي',
      company: 'شركة أفق للحلول الرقمية',
      city: 'الرياض',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: '• إدارة وتوجيه استراتيجية الـ SEO لـ 15 عميلاً رئيسياً مع تصدر الصفحة الأولى في الكلمات التنافسية.\n• إدارة ميزانيات إعلانية بقيمة تتجاوز 500,000 ريال سنوياً وتحقيق عائد على الإنفاق الإعلاني (ROAS) بنسبة 350%.\n• الإشراف على فريق عمل مكون من 4 متخصصين في صناعة المحتوى وتحليل بيانات الزوار عبر GA4.'
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
      degree: 'بكالوريوس في إدارة الأعمال والتسويق الرقمي',
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
    'Data Analysis & Reporting',
    'Agile & Team Leadership'
  ],
  languages: [
    { id: 'lang-1', name: 'العربية', level: 'اللغة الأم / Native' },
    { id: 'lang-2', name: 'English', level: 'Fluent / Full Professional' }
  ]
};

// ATS Score Calculator
CareerAI.calculateATSScore = function() {
  const p = window.CareerAI.resumeState.personal || {};
  const s = window.CareerAI.resumeState.summary || '';
  const exps = window.CareerAI.resumeState.experiences || [];
  const edus = window.CareerAI.resumeState.education || [];
  const skills = window.CareerAI.resumeState.skills || [];

  let score = 0;
  if (p.fullName && p.fullName.trim()) score += 15;
  if (p.jobTitle && p.jobTitle.trim()) score += 15;
  if (p.email && p.phone) score += 15;
  if (s && s.length >= 40) score += 15;
  if (exps && exps.some(e => e.jobTitle && e.description)) score += 20;
  if (edus && edus.some(e => e.degree && e.school)) score += 10;
  if (skills && skills.length >= 3) score += 10;

  return Math.min(100, Math.max(15, score));
};

CareerAI.getATSScoreLabel = function(score) {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (score >= 85) return isEn ? 'ATS Ready (Excellent) 🟢' : 'جاهزة للفرز الآلي (ممتاز) 🟢';
  if (score >= 60) return isEn ? 'Good Progress (Complete more steps) 🟡' : 'تقدم جيد (أكمل باقي الخطوات) 🟡';
  return isEn ? 'Needs More Details 🔴' : 'بحاجة لبيانات إضافية 🔴';
};

window.CareerAI.pages.resumeBuilder = function() {
  const icons = window.CareerAI.icons || {};
  const state = window.CareerAI.resumeState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const atsScore = CareerAI.calculateATSScore();

  return `
    <!-- Header -->
    <div class="page-header page-header--compact" style="background:linear-gradient(135deg,#0a1020 0%,#0f172a 50%,#1e1b4b 100%);position:relative;overflow:hidden">
      <div class="container">
        <div class="page-header__content" style="position:relative;z-index:2">
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <a href="/tools" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">${t('nav.tools', 'الأدوات')}</a>
            <span>/</span>
            <span>${isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الذكي'}</span>
          </div>

          <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:1rem;flex-wrap:wrap">
            <span class="section__badge" style="background:rgba(99,102,241,0.18);border:1px solid rgba(99,102,241,0.35);color:#c7d2fe;padding:6px 16px;border-radius:30px;display:inline-flex;align-items:center;gap:6px">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || ''}</span>
              ${isEn ? 'AI ATS Optimizer' : 'متوافق مع خوارزميات ATS'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.35);color:#34d399;padding:6px 16px;border-radius:30px">
              ✓ ${isEn ? '100% Free • No Watermark' : 'مجاني 100% وبدون علامة مائية'}
            </span>
          </div>

          <h1 class="page-header__title" style="font-size:clamp(1.8rem, 3.5vw, 2.6rem);font-weight:800;color:#ffffff;line-height:1.3;margin-bottom:1rem">
            ${isEn ? 'AI Professional Resume Builder' : 'منشئ السيرة الذاتية الاحترافية بالذكاء الاصطناعي'}
          </h1>
          <p class="page-header__subtitle" style="font-size:1.05rem;color:#cbd5e1;max-width:680px;margin:0 auto 1.5rem;line-height:1.7">
            ${isEn 
              ? 'Build an ATS-optimized executive resume in minutes. Live interactive preview, luxury templates, and instant PDF download.' 
              : 'أنشئ سيرة ذاتية احترافية تضمن تجاوز الفرز الآلي وتصدر المقابلات مع قوالب فاخرة ومعاينة مباشرة وتصدير PDF مجاني.'
            }
          </p>
        </div>
      </div>
    </div>

    <!-- Google AdSense - Tool Top Leaderboard -->
    <div class="container" style="margin-top:2rem;margin-bottom:1rem">
      <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin:0 auto;max-width:760px;">
        <div class="ad-frame-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
          ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored'}
        </div>
        <div class="ad-frame-inner">
          <ins class="adsbygoogle"
               style="display:inline-block;width:100%;max-width:728px;height:90px;"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="3316284985"
               data-ad-format="horizontal"
               data-full-width-responsive="false"></ins>
        </div>
      </div>
    </div>

    <!-- Main Builder Workspace -->
    <section class="section" style="padding-top:1rem;padding-bottom:4rem">
      <div class="container">

        <!-- Top Instant Action Bar (Full Mobile Visibility) -->
        <div class="builder-actions-bar" style="background:rgba(30,41,59,0.85);padding:1rem 1.25rem;border-radius:16px;border:1px solid rgba(99,102,241,0.3);margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;box-shadow:0 8px 24px rgba(0,0,0,0.25)">
          
          <div class="builder-actions-bar__group" style="display:flex;gap:0.6rem;align-items:center;flex-wrap:wrap;">
            <button type="button" class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleResume()" style="box-shadow:0 2px 10px rgba(99,102,241,0.35);font-weight:700">
              ⚡ ${isEn ? 'Try Sample Resume (1-Click)' : '⚡ تجربة نموذج سيرة جاهز فوراً'}
            </button>
            <button type="button" class="btn btn--ghost btn--sm" style="color:#f87171;font-weight:700" onclick="CareerAI.resetResumeForm()">
              🗑️ ${isEn ? 'Clear All' : 'مسح البيانات'}
            </button>
          </div>

          <div class="builder-actions-bar__group" style="display:flex;gap:0.6rem;align-items:center;flex-wrap:wrap;">
            <button type="button" class="btn btn--secondary btn--sm builder-mobile-toggle" onclick="CareerAI.toggleMobilePreview()" style="font-weight:700">
              👁️ <span id="mobilePreviewToggleText">${isEn ? 'View Live Preview' : 'عرض المعاينة المباشرة'}</span>
            </button>
            <button type="button" class="btn btn--primary btn--md" onclick="CareerAI.downloadResumePDF()" style="box-shadow:0 4px 15px rgba(16,185,129,0.35);font-weight:800;background:linear-gradient(135deg,#10b981,#059669)">
              📥 ${isEn ? 'Download Resume PDF' : 'تحميل السيرة الذاتية PDF'}
            </button>
          </div>

        </div>

        <!-- 2-Column Builder Layout (Editor Form + Live Preview) -->
        <div class="builder-layout">
          
          <!-- Column 1: Step Form Panel -->
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:20px;padding:1.75rem;box-shadow:0 8px 30px rgba(0,0,0,0.15)">
            
            <!-- Real-Time ATS Score Readiness Meter -->
            <div class="ats-meter-bar" style="background:rgba(15,23,42,0.65);border:1px solid rgba(99,102,241,0.3);border-radius:14px;padding:0.9rem 1.25rem;margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem">
              <div style="display:flex;align-items:center;gap:12px">
                <div id="atsScoreCircle" style="width:42px;height:42px;min-width:42px;border-radius:50%;background:rgba(16,185,129,0.15);border:2.5px solid #10b981;color:#10b981;font-weight:800;font-size:0.95rem;display:flex;align-items:center;justify-content:center">
                  ${atsScore}%
                </div>
                <div>
                  <div style="font-size:0.9rem;font-weight:800;color:var(--color-text)">${isEn ? 'ATS Resume Readiness' : 'مؤشر جاهزية السيرة للفرز الآلي'}</div>
                  <div style="font-size:0.75rem;color:var(--color-text-muted)">${isEn ? 'Calculated based on standard ATS parser metrics' : 'محسوب وفق معايير أنظمة فحص السير الذاتية ATS'}</div>
                </div>
              </div>
              <div>
                <span id="atsScoreBadge" style="font-size:0.78rem;font-weight:700;color:#34d399;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);padding:4px 12px;border-radius:20px">
                  ${CareerAI.getATSScoreLabel(atsScore)}
                </span>
              </div>
            </div>

            <!-- Step Navigation Tabs (Touch Friendly & Responsive) -->
            <div class="builder-steps-nav" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;overflow-x:auto;padding-bottom:0.5rem;border-bottom:1px solid var(--color-border-light);">
              <button type="button" class="step-nav-btn ${state.currentStep === 1 ? 'active' : ''}" onclick="CareerAI.setResumeStep(1)">1. ${isEn ? 'Personal' : 'البيانات'}</button>
              <button type="button" class="step-nav-btn ${state.currentStep === 2 ? 'active' : ''}" onclick="CareerAI.setResumeStep(2)">2. ${isEn ? 'Summary' : 'الملخص'}</button>
              <button type="button" class="step-nav-btn ${state.currentStep === 3 ? 'active' : ''}" onclick="CareerAI.setResumeStep(3)">3. ${isEn ? 'Experience' : 'الخبرات'}</button>
              <button type="button" class="step-nav-btn ${state.currentStep === 4 ? 'active' : ''}" onclick="CareerAI.setResumeStep(4)">4. ${isEn ? 'Education' : 'التعليم'}</button>
              <button type="button" class="step-nav-btn ${state.currentStep === 5 ? 'active' : ''}" onclick="CareerAI.setResumeStep(5)">5. ${isEn ? 'Skills' : 'المهارات'}</button>
            </div>

            <!-- Dynamic Step Content Form -->
            <div id="resumeStepFormContent">
              ${CareerAI.renderBuilderStep(state.currentStep)}
            </div>

            <!-- Bottom Step Pagination Controls -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:2rem;padding-top:1.25rem;border-top:1px solid var(--color-border-light);">
              <button type="button" class="btn btn--secondary btn--sm" id="btnPrevStep" onclick="CareerAI.prevResumeStep()" style="${state.currentStep === 1 ? 'visibility:hidden' : ''}">
                ${isEn ? '← Previous Step' : '← الخطوة السابقة'}
              </button>
              <span style="font-size:0.85rem;font-weight:700;color:var(--color-text-muted)">${isEn ? 'Step' : 'الخطوة'} ${state.currentStep} ${isEn ? 'of' : 'من'} 5</span>
              <button type="button" class="btn btn--primary btn--sm" id="btnNextStep" onclick="CareerAI.nextResumeStep()" style="font-weight:800">
                ${state.currentStep === 5 ? (isEn ? 'Finish & Download 📥' : 'إنهاء وتحميل 📥') : (isEn ? 'Next Step →' : 'الخطوة التالية →')}
              </button>
            </div>

          </div>

          <!-- Column 2: Live Preview & Template Customizer Frame -->
          <div class="preview-card" id="resumePreviewContainer" style="position:sticky;top:85px;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:20px;padding:1.5rem;box-shadow:0 8px 30px rgba(0,0,0,0.15)">
            
            <!-- Template & Color Customization Toolbar -->
            <div style="margin-bottom:1.25rem;padding-bottom:1rem;border-bottom:1px solid var(--color-border-light)">
              
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem">
                <span style="font-size:0.85rem;font-weight:700;color:var(--color-text)">
                  🎨 ${isEn ? 'Select ATS Template:' : 'اختر قالب السيرة الذاتية:'}
                </span>
                
                <!-- Color Dots -->
                <div style="display:flex;align-items:center;gap:6px">
                  ${['#2563eb', '#10b981', '#7c3aed', '#0f172a', '#e11d48'].map(c => `
                    <span onclick="CareerAI.setResumeColor('${c}')" style="width:20px;height:20px;border-radius:50%;background:${c};cursor:pointer;display:inline-block;box-shadow:0 0 0 ${state.themeColor === c ? '2.5px #ffffff' : '1px rgba(255,255,255,0.2)'};transform:${state.themeColor === c ? 'scale(1.15)' : 'scale(1)'};transition:all 0.2s" title="${c}"></span>
                  `).join('')}
                </div>
              </div>

              <!-- Template Style Buttons -->
              <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:6px">
                <button type="button" class="btn btn--sm ${state.template === 'modern' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setResumeTemplate('modern')" style="padding:5px 6px;font-size:0.75rem;font-weight:700;border-radius:8px;text-align:center">
                  💎 ${isEn ? 'Modern' : 'عصري'}
                </button>
                <button type="button" class="btn btn--sm ${state.template === 'executive' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setResumeTemplate('executive')" style="padding:5px 6px;font-size:0.75rem;font-weight:700;border-radius:8px;text-align:center">
                  👔 ${isEn ? 'Executive' : 'تنفيذي'}
                </button>
                <button type="button" class="btn btn--sm ${state.template === 'tech' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setResumeTemplate('tech')" style="padding:5px 6px;font-size:0.75rem;font-weight:700;border-radius:8px;text-align:center">
                  ⚡ ${isEn ? 'Tech' : 'تقني'}
                </button>
                <button type="button" class="btn btn--sm ${state.template === 'emerald' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setResumeTemplate('emerald')" style="padding:5px 6px;font-size:0.75rem;font-weight:700;border-radius:8px;text-align:center">
                  🌿 ${isEn ? 'Emerald' : 'زمردي'}
                </button>
              </div>

            </div>

            <!-- Preview Top Info & Quick Export -->
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;gap:0.5rem">
              <div style="display:flex;align-items:center;gap:0.5rem">
                <span style="width:10px;height:10px;border-radius:50%;background:#10B981;display:inline-block"></span>
                <span style="font-size:0.88rem;font-weight:700;color:var(--color-text)">${isEn ? 'Live A4 Preview' : 'معاينة مباشرة بصيغة A4'}</span>
              </div>
              <button type="button" class="btn btn--accent btn--sm" onclick="CareerAI.downloadResumePDF()" style="font-weight:700;box-shadow:0 2px 10px rgba(99,102,241,0.3)">
                📥 ${isEn ? 'Download PDF' : 'تحميل PDF'}
              </button>
            </div>

            <!-- Resume Paper Document Container -->
            <div class="resume-paper-wrapper" style="background:#ffffff;color:#1e293b;border-radius:10px;padding:2rem;min-height:550px;box-shadow:0 10px 30px rgba(0,0,0,0.2);overflow-y:auto;max-height:650px;" id="liveResumeDocument">
              ${CareerAI.renderLiveResumeHTML()}
            </div>

          </div>

        </div>

        <!-- Google AdSense - Vertical Skyscraper (300x600) & Medium Rectangle (300x250) Row -->
        <div style="display:flex;justify-content:center;align-items:center;gap:var(--space-8);margin:3.5rem auto 1.5rem;flex-wrap:wrap;">
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
          <input type="text" class="form-input" value="${state.personal.fullName || ''}" placeholder="${isEn ? 'e.g. Sarah Jenkins' : 'مثال: محمد عبد الله العتيبي'}" oninput="CareerAI.updatePersonalField('fullName', this.value)">
        </div>
        <div class="form-group" style="grid-column:1 / -1">
          <label class="form-label">${isEn ? 'Job Title / Target Role *' : 'المسمى الوظيفي المستهدف *'}</label>
          <input type="text" class="form-input" value="${state.personal.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Project Manager' : 'مثال: أخصائي تسويق رقمي أول'}" oninput="CareerAI.updatePersonalField('jobTitle', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Email Address *' : 'البريد الإلكتروني *'}</label>
          <input type="email" class="form-input" value="${state.personal.email || ''}" placeholder="name@example.com" oninput="CareerAI.updatePersonalField('email', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Phone Number *' : 'رقم الهاتف *'}</label>
          <input type="tel" class="form-input" value="${state.personal.phone || ''}" placeholder="+966 50 123 4567" oninput="CareerAI.updatePersonalField('phone', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'Location (City, Country)' : 'المدينة والدولة'}</label>
          <input type="text" class="form-input" value="${state.personal.location || ''}" placeholder="${isEn ? 'e.g. Riyadh, Saudi Arabia' : 'مثال: الرياض، المملكة العربية السعودية'}" oninput="CareerAI.updatePersonalField('location', this.value)">
        </div>
        <div class="form-group">
          <label class="form-label">${isEn ? 'LinkedIn Profile URL' : 'رابط حساب LinkedIn'}</label>
          <input type="text" class="form-input" value="${state.personal.linkedin || ''}" placeholder="linkedin.com/in/username" oninput="CareerAI.updatePersonalField('linkedin', this.value)">
        </div>
      </div>
    `;
  }

  if (stepNumber === 2) {
    return `
      <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
        ${isEn ? '2. Executive Summary' : '2. الملخص والنبذة المهنية'}
      </h3>
      <p style="font-size:0.85rem;color:var(--color-text-muted);margin-bottom:1rem;line-height:1.6">
        ${isEn 
          ? 'A high-impact 3-4 sentence professional summary. Click AI Enhance to generate quantifiable achievements automatically.' 
          : 'فقرة موجزة ومقنعة (3-4 أسطر) تلخص خبراتك وأهم إنجازاتك. يمكنك الضغط على زر التحسين الذكي لتوليد نبذة قوية فوراً.'
        }
      </p>
      <div class="form-group">
        <textarea class="form-textarea" rows="6" placeholder="${isEn ? 'Type your executive summary here or click AI Enhance below...' : 'اكتب نبذتك المهنية هنا أو اضغط على التحسين بالذكاء الاصطناعي...'}" oninput="CareerAI.updateSummary(this.value)">${state.summary || ''}</textarea>
      </div>
      <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:0.75rem;">
        <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.enhanceSummaryWithAI()" style="border-color:#818cf8;color:#c7d2fe;font-weight:700">
          ✨ ${isEn ? 'AI Enhance Summary with Power Metrics' : 'تحسين بالذكاء الاصطناعي بمؤشرات قوية ✨'}
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
        <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addExperience()" style="font-weight:700">
          + ${isEn ? 'Add Experience' : 'إضافة خبرة'}
        </button>
      </div>
      
      <div id="experienceListContainer">
        ${state.experiences.map((exp, idx) => `
          <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1.1rem;margin-bottom:1rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <span style="font-weight:800;font-size:0.95rem;color:#818cf8">#${idx + 1} ${exp.jobTitle || (isEn ? 'Job Title' : 'المسمى الوظيفي')}</span>
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
                <input type="text" class="form-input" value="${exp.endDate || ''}" placeholder="${isEn ? 'Present' : 'حتى الآن'}" oninput="CareerAI.updateExperienceField('${exp.id}', 'endDate', this.value)">
              </div>
              <div class="form-group" style="grid-column:1 / -1">
                <label class="form-label">${isEn ? 'Key Responsibilities & Bullet Achievements' : 'المسؤوليات والإنجازات (نقاط)'}</label>
                <textarea class="form-textarea" rows="3" placeholder="${isEn ? '• Led cross-functional team of 8 to achieve 35% growth.\n• Implemented automated CI/CD pipeline.' : '• قيادة وإدارة الفريق بنجاح مع تحقيق نمو بنسبة 35%.\n• أتمتة الإجراءات وتحسين مؤشرات الأداء.'}" oninput="CareerAI.updateExperienceField('${exp.id}', 'description', this.value)">${exp.description || ''}</textarea>
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
          ${isEn ? '4. Education & Qualifications' : '4. التعليم والشهادات'}
        </h3>
        <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addEducation()" style="font-weight:700">
          + ${isEn ? 'Add Education' : 'إضافة مؤهل'}
        </button>
      </div>

      <div id="educationListContainer">
        ${state.education.map((edu, idx) => `
          <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1.1rem;margin-bottom:1rem">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
              <span style="font-weight:800;font-size:0.95rem;color:#34d399">#${idx + 1} ${edu.degree || (isEn ? 'Degree' : 'الدرجة العلمية')}</span>
              ${state.education.length > 1 ? `
                <button type="button" class="btn btn--ghost btn--sm" style="color:#f87171;padding:2px 8px" onclick="CareerAI.removeEducation('${edu.id}')">✕ ${isEn ? 'Delete' : 'حذف'}</button>
              ` : ''}
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
              <div class="form-group" style="grid-column:1 / -1">
                <label class="form-label">${isEn ? 'Degree / Major *' : 'الدرجة العلمية والتخصص *'}</label>
                <input type="text" class="form-input" value="${edu.degree || ''}" placeholder="${isEn ? 'e.g. Bachelor of Science in Computer Science' : 'مثال: بكالوريوس في علوم الحاسب أو إدارة الأعمال'}" oninput="CareerAI.updateEducationField('${edu.id}', 'degree', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'University / Institution *' : 'الجامعة أو المؤسسة التعليمية *'}</label>
                <input type="text" class="form-input" value="${edu.school || ''}" placeholder="${isEn ? 'e.g. King Saud University' : 'مثال: جامعة الملك سعود'}" oninput="CareerAI.updateEducationField('${edu.id}', 'school', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">${isEn ? 'Graduation Date' : 'سنة التخرج'}</label>
                <input type="text" class="form-input" value="${edu.endDate || ''}" placeholder="2019-05" oninput="CareerAI.updateEducationField('${edu.id}', 'endDate', this.value)">
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  if (stepNumber === 5) {
    const quickSkills = isEn 
      ? ['Project Management', 'Data Analysis', 'React & Node.js', 'Python', 'SEO & SEM', 'Agile / Scrum', 'SQL', 'Strategic Leadership', 'UI/UX Design', 'Cloud / AWS', 'Communication', 'Financial Modeling']
      : ['إدارة المشاريع', 'تحليل البيانات', 'React و Node.js', 'بايثون Python', 'سيو SEO وتسويق رقمي', 'منهجية Agile', 'قواعد بيانات SQL', 'القيادة وإدارة الفرق', 'الحوسبة السحابية AWS', 'التواصل الفعال', 'حل المشكلات', 'التخطيط الاستراتيجي'];

    return `
      <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:0.75rem;color:var(--color-text)">
        ${isEn ? '5. Skills & Languages' : '5. المهارات واللغات'}
      </h3>

      <!-- 1-Click Quick Add Skills Cloud -->
      <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;margin-bottom:1.5rem">
        <label class="form-label" style="margin-bottom:0.6rem;color:#818cf8;font-weight:700">
          ⚡ ${isEn ? '1-Click In-Demand Skills (Tap to add):' : 'أهم المهارات المطلوبة (اضغط لإضافتها فوراً):'}
        </label>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${quickSkills.map(s => `
            <span onclick="CareerAI.quickAddSkill('${s}')" style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:4px 10px;font-size:0.78rem;font-weight:600;color:#c7d2fe;cursor:pointer;transition:all 0.2s" onmouseover="this.style.background='rgba(99,102,241,0.35)'" onmouseout="this.style.background='rgba(99,102,241,0.15)'">
              + ${s}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Add Custom Skill Input -->
      <div class="form-group" style="margin-bottom:1.25rem">
        <label class="form-label">${isEn ? 'Add Custom Skill' : 'أضف مهارة مخصصة'}</label>
        <div style="display:flex;gap:0.5rem">
          <input type="text" id="newSkillInput" class="form-input" placeholder="${isEn ? 'e.g. Negotiation' : 'مثال: إدارة المخاطر'}" onkeydown="if(event.key==='Enter'){event.preventDefault();CareerAI.addSkillFromInput();}">
          <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addSkillFromInput()" style="font-weight:700;white-space:nowrap">+ ${isEn ? 'Add' : 'إضافة'}</button>
        </div>
      </div>

      <!-- Current Skills List -->
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:2rem">
        ${state.skills.map((skill, idx) => `
          <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.35);border-radius:20px;padding:4px 12px;font-size:0.82rem;font-weight:600;display:inline-flex;align-items:center;gap:6px">
            ${skill}
            <button type="button" onclick="CareerAI.removeSkill(${idx})" style="background:none;border:none;color:#f87171;cursor:pointer;font-size:0.9rem;padding:0;line-height:1">✕</button>
          </span>
        `).join('')}
        ${state.skills.length === 0 ? `<div style="color:var(--color-text-muted);font-size:0.85rem">${isEn ? 'No skills added yet. Choose from suggestions above.' : 'لم تقم بإضافة مهارات بعد. اختر من الاقتراحات السريعة بالأعلى.'}</div>` : ''}
      </div>

      <!-- Languages Section -->
      <div style="border-top:1px solid var(--color-border-light);padding-top:1.25rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem">
          <label class="form-label" style="margin:0;font-size:0.95rem;font-weight:700">${isEn ? 'Languages' : 'اللغات'}</label>
          <button type="button" class="btn btn--secondary btn--sm" onclick="CareerAI.addLanguage()">+ ${isEn ? 'Add' : 'إضافة'}</button>
        </div>
        ${state.languages.map(l => `
          <div style="display:grid;grid-template-columns:1fr 1fr auto;gap:0.5rem;align-items:center;margin-bottom:0.5rem">
            <input type="text" class="form-input" value="${l.name || ''}" placeholder="${isEn ? 'Language' : 'اللغة'}" oninput="CareerAI.updateLanguageField('${l.id}', 'name', this.value)">
            <input type="text" class="form-input" value="${l.level || ''}" placeholder="${isEn ? 'Proficiency' : 'المستوى (متقن / أم)'}" oninput="CareerAI.updateLanguageField('${l.id}', 'level', this.value)">
            <button type="button" class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.removeLanguage('${l.id}')">✕</button>
          </div>
        `).join('')}
      </div>
    `;
  }
};

// Render Live Resume HTML based on selected luxury template
CareerAI.renderLiveResumeHTML = function() {
  const state = window.CareerAI.resumeState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const p = state.personal || {};
  const tpl = state.template || 'modern';
  const color = state.themeColor || '#2563eb';

  const hasData = (p.fullName && p.fullName.trim()) || state.summary || state.skills.length > 0 || state.experiences.some(e => e.jobTitle);

  if (!hasData) {
    return `
      <div style="text-align:center;padding:4rem 1.5rem;color:#64748b;">
        <div style="font-size:3rem;margin-bottom:0.75rem">📄</div>
        <h4 style="font-size:1.15rem;font-weight:800;color:#1e293b;margin-bottom:0.5rem">
          ${isEn ? 'Your Resume Preview is Ready!' : 'معاينة سيرتك الذاتية بانتظارك!'}
        </h4>
        <p style="font-size:0.88rem;max-width:340px;margin:0 auto 1.5rem;line-height:1.6">
          ${isEn ? 'Fill in the form on the left or tap below to load sample executive data instantly.' : 'ابدأ بكتابة بياناتك بالجانب المقابل أو اضغط الزر بالأسفل لتجربة نموذج جاهز بنقرة واحدة.'}
        </p>
        <button type="button" class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleResume()" style="font-weight:700">
          ⚡ ${isEn ? 'Load Sample Data' : 'ملء نموذج تجريبي فوري'}
        </button>
      </div>
    `;
  }

  // Executive Template: Bold Colored Banner Header
  if (tpl === 'executive') {
    return `
      <div style="font-family:'Inter', 'Cairo', sans-serif;line-height:1.5;color:#1e293b;background:#ffffff">
        <!-- Executive Header Banner -->
        <div style="background:${color};color:#ffffff;padding:1.5rem;border-radius:6px;margin-bottom:1.5rem;text-align:center">
          <h1 style="font-size:1.7rem;font-weight:800;color:#ffffff;margin:0 0 4px 0;letter-spacing:-0.02em">${p.fullName || ''}</h1>
          <div style="font-size:1rem;font-weight:600;color:rgba(255,255,255,0.9);margin-bottom:8px">${p.jobTitle || ''}</div>
          <div style="font-size:0.82rem;color:rgba(255,255,255,0.85);display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
            ${p.email ? `<span>📧 ${p.email}</span>` : ''}
            ${p.phone ? `<span>📞 ${p.phone}</span>` : ''}
            ${p.location ? `<span>📍 ${p.location}</span>` : ''}
            ${p.linkedin ? `<span>🔗 ${p.linkedin}</span>` : ''}
          </div>
        </div>

        ${state.summary ? `
          <div style="margin-bottom:1.25rem">
            <h2 style="font-size:0.92rem;font-weight:800;color:${color};text-transform:uppercase;letter-spacing:0.06em;border-bottom:2px solid ${color}30;padding-bottom:4px;margin-bottom:6px">
              ${isEn ? 'Executive Summary' : 'الملخص التنفيذي'}
            </h2>
            <p style="font-size:0.85rem;color:#334155;margin:0;line-height:1.65">${state.summary}</p>
          </div>
        ` : ''}

        ${state.experiences.some(e => e.jobTitle || e.company) ? `
          <div style="margin-bottom:1.25rem">
            <h2 style="font-size:0.92rem;font-weight:800;color:${color};text-transform:uppercase;letter-spacing:0.06em;border-bottom:2px solid ${color}30;padding-bottom:4px;margin-bottom:8px">
              ${isEn ? 'Professional Experience' : 'الخبرات والمسؤوليات'}
            </h2>
            ${state.experiences.filter(e => e.jobTitle || e.company).map(exp => `
              <div style="margin-bottom:0.85rem">
                <div style="display:flex;justify-content:space-between;font-size:0.88rem;font-weight:800;color:#0f172a">
                  <span>${exp.jobTitle}</span>
                  <span style="font-size:0.78rem;font-weight:600;color:#64748b">${exp.startDate || ''} ${exp.startDate && (exp.endDate || exp.current) ? '–' : ''} ${exp.current ? (isEn ? 'Present' : 'حتى الآن') : (exp.endDate || '')}</span>
                </div>
                <div style="font-size:0.82rem;font-weight:700;color:${color};margin-bottom:4px">${exp.company} ${exp.city ? '• ' + exp.city : ''}</div>
                ${exp.description ? `<div style="font-size:0.82rem;color:#334155;white-space:pre-line;line-height:1.55">${exp.description}</div>` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${state.education.some(e => e.degree || e.school) ? `
          <div style="margin-bottom:1.25rem">
            <h2 style="font-size:0.92rem;font-weight:800;color:${color};text-transform:uppercase;letter-spacing:0.06em;border-bottom:2px solid ${color}30;padding-bottom:4px;margin-bottom:8px">
              ${isEn ? 'Education & Credentials' : 'المؤهلات العلمية'}
            </h2>
            ${state.education.filter(e => e.degree || e.school).map(edu => `
              <div style="margin-bottom:0.5rem">
                <div style="display:flex;justify-content:space-between;font-size:0.86rem;font-weight:700;color:#0f172a">
                  <span>${edu.degree}</span>
                  <span style="font-size:0.78rem;font-weight:500;color:#64748b">${edu.endDate || ''}</span>
                </div>
                <div style="font-size:0.82rem;color:#475569">${edu.school}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${state.skills.length > 0 ? `
          <div style="margin-bottom:1.25rem">
            <h2 style="font-size:0.92rem;font-weight:800;color:${color};text-transform:uppercase;letter-spacing:0.06em;border-bottom:2px solid ${color}30;padding-bottom:4px;margin-bottom:6px">
              ${isEn ? 'Core Competencies' : 'الكفاءات والمهارات'}
            </h2>
            <div style="font-size:0.82rem;color:#334155;line-height:1.6">${state.skills.join(' • ')}</div>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Modern Sapphire (Default Clean) & Others
  return `
    <div style="font-family:'Inter', 'Cairo', sans-serif;line-height:1.5;color:#1e293b;background:#ffffff">
      <!-- Modern Clean Header -->
      <div style="border-bottom:2.5px solid ${color};padding-bottom:1rem;margin-bottom:1.25rem;text-align:${tpl === 'tech' ? 'left' : 'center'}">
        <h1 style="font-size:1.65rem;font-weight:800;color:#0f172a;margin:0 0 4px 0;letter-spacing:-0.02em">${p.fullName || (isEn ? 'Your Name' : 'الاسم الكامل')}</h1>
        <div style="font-size:1rem;font-weight:700;color:${color};margin-bottom:8px">${p.jobTitle || ''}</div>
        <div style="font-size:0.82rem;color:#475569;display:flex;justify-content:${tpl === 'tech' ? 'flex-start' : 'center'};gap:12px;flex-wrap:wrap">
          ${p.email ? `<span>📧 ${p.email}</span>` : ''}
          ${p.phone ? `<span>📞 ${p.phone}</span>` : ''}
          ${p.location ? `<span>📍 ${p.location}</span>` : ''}
          ${p.linkedin ? `<span>🔗 ${p.linkedin}</span>` : ''}
        </div>
      </div>

      <!-- Summary -->
      ${state.summary ? `
        <div style="margin-bottom:1.25rem">
          <h2 style="font-size:0.92rem;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-bottom:6px;display:flex;align-items:center;gap:6px">
            <span style="width:4px;height:14px;background:${color};border-radius:2px;display:inline-block"></span>
            ${isEn ? 'Professional Summary' : 'الملخص المهني'}
          </h2>
          <p style="font-size:0.85rem;color:#334155;margin:0;line-height:1.65">${state.summary}</p>
        </div>
      ` : ''}

      <!-- Experience -->
      ${state.experiences.some(e => e.jobTitle || e.company) ? `
        <div style="margin-bottom:1.25rem">
          <h2 style="font-size:0.92rem;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-bottom:8px;display:flex;align-items:center;gap:6px">
            <span style="width:4px;height:14px;background:${color};border-radius:2px;display:inline-block"></span>
            ${isEn ? 'Work Experience' : 'الخبرات المهنية'}
          </h2>
          ${state.experiences.filter(e => e.jobTitle || e.company).map(exp => `
            <div style="margin-bottom:0.85rem">
              <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:0.88rem;font-weight:700;color:#0f172a">
                <span>${exp.jobTitle}</span>
                <span style="font-size:0.78rem;font-weight:500;color:#64748b">${exp.startDate || ''} ${exp.startDate && (exp.endDate || exp.current) ? '–' : ''} ${exp.current ? (isEn ? 'Present' : 'حتى الآن') : (exp.endDate || '')}</span>
              </div>
              <div style="font-size:0.82rem;font-weight:700;color:${color};margin-bottom:4px">${exp.company} ${exp.city ? '• ' + exp.city : ''}</div>
              ${exp.description ? `<div style="font-size:0.82rem;color:#334155;white-space:pre-line;line-height:1.55">${exp.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Education -->
      ${state.education.some(e => e.degree || e.school) ? `
        <div style="margin-bottom:1.25rem">
          <h2 style="font-size:0.92rem;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-bottom:8px;display:flex;align-items:center;gap:6px">
            <span style="width:4px;height:14px;background:${color};border-radius:2px;display:inline-block"></span>
            ${isEn ? 'Education' : 'التعليم والمؤهلات'}
          </h2>
          ${state.education.filter(e => e.degree || e.school).map(edu => `
            <div style="margin-bottom:0.5rem">
              <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:0.86rem;font-weight:700;color:#0f172a">
                <span>${edu.degree}</span>
                <span style="font-size:0.78rem;font-weight:500;color:#64748b">${edu.endDate || ''}</span>
              </div>
              <div style="font-size:0.82rem;color:#475569">${edu.school}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Skills -->
      ${state.skills.length > 0 ? `
        <div style="margin-bottom:1.25rem">
          <h2 style="font-size:0.92rem;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-bottom:6px;display:flex;align-items:center;gap:6px">
            <span style="width:4px;height:14px;background:${color};border-radius:2px;display:inline-block"></span>
            ${isEn ? 'Skills & Competencies' : 'المهارات والكفاءات'}
          </h2>
          <div style="font-size:0.82rem;color:#334155;line-height:1.65">
            ${state.skills.join(' • ')}
          </div>
        </div>
      ` : ''}

      <!-- Languages -->
      ${state.languages.some(l => l.name) ? `
        <div>
          <h2 style="font-size:0.92rem;font-weight:800;color:#0f172a;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e2e8f0;padding-bottom:4px;margin-bottom:6px;display:flex;align-items:center;gap:6px">
            <span style="width:4px;height:14px;background:${color};border-radius:2px;display:inline-block"></span>
            ${isEn ? 'Languages' : 'اللغات'}
          </h2>
          <div style="font-size:0.82rem;color:#334155">
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
  
  // Refresh ATS Meter
  const score = CareerAI.calculateATSScore();
  const circle = document.getElementById('atsScoreCircle');
  const badge = document.getElementById('atsScoreBadge');
  if (circle) circle.textContent = score + '%';
  if (badge) badge.textContent = CareerAI.getATSScoreLabel(score);
};

CareerAI.setResumeTemplate = function(templateName) {
  window.CareerAI.resumeState.template = templateName;
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages && window.CareerAI.pages.resumeBuilder) {
    main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.resumeBuilder() + '</div>';
  }
};

CareerAI.setResumeColor = function(colorHex) {
  window.CareerAI.resumeState.themeColor = colorHex;
  CareerAI.updateLivePreview();
};

CareerAI.quickAddSkill = function(skillName) {
  if (!window.CareerAI.resumeState.skills.includes(skillName)) {
    window.CareerAI.resumeState.skills.push(skillName);
    CareerAI.setResumeStep(5);
    CareerAI.updateLivePreview();
  }
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
    nextBtn.textContent = (step === 5 ? (isEn ? 'Finish & Download 📥' : 'إنهاء وتحميل 📥') : (isEn ? 'Next Step →' : 'الخطوة التالية →'));
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
    ? `Results-driven and strategic ${role} with extensive experience spearheading high-impact initiatives, driving commercial growth, and optimizing cross-functional operations. Proven track record of delivering measurable ROI, scaling workflows, and mentoring multidisciplinary teams to exceed organizational benchmarks.`
    : `مهني متميز ومتخصص في مجال ${role} بخبرة عملية مثبتة في قيادة المبادرات الاستراتيجية وتطوير كفاءة العمليات وتحقيق نمو تجاري ملموس. أمتلك سجلاً حافلاً في تجاوز المستهدفات وإدارة المشاريع المعقدة وتحقيق أعلى عائد استثماري للشركات والمؤسسات.`;

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
    template: 'modern',
    themeColor: '#2563eb',
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
  if (preview) {
    preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

CareerAI.downloadResumePDF = function() {
  const resumeEl = document.getElementById('liveResumeDocument');
  if (!resumeEl) return;

  const fullName = window.CareerAI.resumeState.personal.fullName || 'Factor_Career_Resume';
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
      description: 'Build an executive ATS-compliant resume with free AI suggestions, 4 luxury templates, live score meter, and instant PDF download on Factor Career.',
      keywords: 'AI Resume Builder, Free CV Maker, ATS Resume, Resume Generator, Factor Career'
    };
  }
  return {
    title: 'منشئ السيرة الذاتية بالذكاء الاصطناعي مجاناً | فكتور كارير',
    description: 'أنشئ سيرة ذاتية احترافية متوافقة مع أنظمة ATS بنقرة واحدة مع 4 قوالب فخمة ومقياس فوري لجاهزية الفرز وتصدير PDF بدون تسجيل.',
    keywords: 'منشئ السيرة الذاتية, إنشاء سيرة ذاتية, سيرة ذاتية ATS, عمل CV مجاني, Factor Career'
  };
};
