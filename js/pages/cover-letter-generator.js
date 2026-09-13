/* ============================================
   CareerAI - AI Cover Letter Generator Tool
   Full Bilingual (AR/EN), 100% Free, Instant Sample Data,
   Multi-Tone Customization, PDF/Word Export & Copy
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.clState = {
  fullName: '',
  jobTitle: '',
  companyName: '',
  yearsExp: '3',
  skills: '',
  tone: 'professional',
  length: 'standard',
  outputLang: 'ar',
  activeMobileTab: 'form', // 'form' or 'preview'
  generatedLetter: '',
  isGenerating: false
};

// Sample data for instant one-click generation
window.CareerAI.sampleCLData = {
  fullName: 'سارة عبد الرحمن الشهري',
  fullName_en: 'Sarah Al-Shehri',
  jobTitle: 'Senior Project Manager / مديرة مشاريع أولى',
  companyName: 'شركة نيوم للحلول المبتكرة',
  companyName_en: 'NEOM Innovative Solutions',
  yearsExp: '6',
  skills: 'Agile & Scrum, Budget Management, Risk Assessment, Cross-functional Leadership, PMP Certified',
  tone: 'professional',
  length: 'standard'
};

window.CareerAI.pages.coverLetterGenerator = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.clState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  if (!state.outputLang) {
    state.outputLang = isEn ? 'en' : 'ar';
  }

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
            <span>${isEn ? 'Cover Letter Generator' : 'مولد رسائل التقديم'}</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              ${isEn ? 'AI Strategic Copywriter' : 'توليد ذكي ومقنع بالذكاء الاصطناعي'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ ${isEn ? '100% Free' : 'مجاني 100%'}
            </span>
          </div>
          <h1 class="page-header__title">${isEn ? 'AI Cover Letter Generator & Tailor' : 'مولد خطابات ورسائل التقديم الوظيفية بالذكاء الاصطناعي'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Generate highly persuasive, recruiter-approved cover letters tailored to any role, company culture, and seniority level in seconds.' : 'أنشئ خطاب تقديم استراتيجي ومقنع يلفت انتباه مسؤولي التوظيف بثوانٍ معدودة، مع إمكانية التصدير والنسخ والتحكم الكامل في النبرة.'}</p>
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

    <!-- Main Generator Workspace -->
    <section class="section" style="padding-top:var(--space-4);padding-bottom:var(--space-12)">
      <div class="container">

        <!-- Top Instant Action Bar -->
        <div class="builder-actions-bar">
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleCL()" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
              ⚡ ${isEn ? 'Try Sample Data (1-Click)' : '⚡ تجربة نموذج جاهز فوراً'}
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.resetCoverLetterForm()">
              🗑️ ${isEn ? 'Reset' : 'إعادة ضبط'}
            </button>
          </div>

          <!-- Mobile View Switcher Tabs (Only visible on small viewports via CSS or flex) -->
          <div class="cl-mobile-tabs" style="display:flex;gap:4px;background:rgba(15,23,42,0.6);padding:3px;border-radius:10px;border:1px solid var(--color-border-light);">
            <button class="btn btn--sm ${state.activeMobileTab==='form'?'btn--primary':'btn--ghost'}" style="min-height:34px!important;padding:4px 12px;font-size:0.8rem;" onclick="CareerAI.setCLMobileTab('form')">
              📝 ${isEn ? '1. Details' : '1. البيانات'}
            </button>
            <button class="btn btn--sm ${state.activeMobileTab==='preview'?'btn--primary':'btn--ghost'}" style="min-height:34px!important;padding:4px 12px;font-size:0.8rem;" onclick="CareerAI.setCLMobileTab('preview')">
              📄 ${isEn ? '2. Generated Letter' : '2. الخطاب المُولّد'}
            </button>
          </div>
        </div>

        <!-- 2-Column Grid (Inputs Form Left + Output Letter Right) -->
        <div class="cover-letter-grid">
          
          <!-- Column 1: Input Details Form -->
          <div id="clFormCol" class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:${state.activeMobileTab==='form' || window.innerWidth > 991 ? 'block' : 'none'};">
            <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1.25rem;color:var(--color-text);display:flex;align-items:center;gap:8px;">
              <span>📝</span>
              <span>${isEn ? 'Job & Candidate Parameters' : 'بيانات الوظيفة ومعايير الصياغة'}</span>
            </h3>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Your Full Name *' : 'اسمك الكامل *'}</label>
              <input type="text" id="clFullName" class="form-input" value="${state.fullName || ''}" placeholder="${isEn ? 'e.g. Sarah Jenkins' : 'مثال: سارة عبد الرحمن الشهري'}" oninput="CareerAI.updateCLField('fullName', this.value)">
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Target Job Title *' : 'المسمى الوظيفي المستهدف *'}</label>
              <input type="text" id="clJobTitle" class="form-input" value="${state.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Project Manager' : 'مثال: مديرة مشاريع أولى'}" oninput="CareerAI.updateCLField('jobTitle', this.value)">
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Company / Employer Name *' : 'اسم الشركة أو جهة التوظيف *'}</label>
              <input type="text" id="clCompanyName" class="form-input" value="${state.companyName || ''}" placeholder="${isEn ? 'e.g. Aramco or Amazon' : 'مثال: شركة نيوم للحلول المبتكرة'}" oninput="CareerAI.updateCLField('companyName', this.value)">
            </div>

            <!-- Tone, Seniority, Length & Language Grid -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.85rem;margin-bottom:1rem;">
              <div class="form-group" style="margin:0">
                <label class="form-label">${isEn ? 'Experience Level' : 'مستوى الخبرة'}</label>
                <select id="clYearsExp" class="form-input" onchange="CareerAI.updateCLField('yearsExp', this.value)">
                  <option value="1" ${state.yearsExp==='1'?'selected':''}>${isEn ? 'Entry Level (0-2 yrs)' : 'مبتدئ (0-2 سنوات)'}</option>
                  <option value="3" ${state.yearsExp==='3'?'selected':''}>${isEn ? 'Mid-Level (3-5 yrs)' : 'متوسط (3-5 سنوات)'}</option>
                  <option value="6" ${state.yearsExp==='6'?'selected':''}>${isEn ? 'Senior (6+ yrs)' : 'خبير ومتقدم (6+ سنوات)'}</option>
                </select>
              </div>

              <div class="form-group" style="margin:0">
                <label class="form-label">${isEn ? 'Writing Tone' : 'نبرة الخطاب'}</label>
                <select id="clTone" class="form-input" onchange="CareerAI.updateCLField('tone', this.value)">
                  <option value="professional" ${state.tone==='professional'?'selected':''}>${isEn ? '👔 Executive & Formal' : '👔 رسمي وتنفيذي'}</option>
                  <option value="confident" ${state.tone==='confident'?'selected':''}>${isEn ? '🔥 Confident & Bold' : '🔥 واثق ومؤثر'}</option>
                  <option value="creative" ${state.tone==='creative'?'selected':''}>${isEn ? '🎨 Modern & Engaging' : '🎨 إبداعي وحديث'}</option>
                  <option value="startup" ${state.tone==='startup'?'selected':''}>${isEn ? '🚀 Startup & Dynamic' : '🚀 ريادي وحماسي'}</option>
                  <option value="technical" ${state.tone==='technical'?'selected':''}>${isEn ? '📊 Data & Results Driven' : '📊 تقني ومعتمد على الأرقام'}</option>
                </select>
              </div>

              <div class="form-group" style="margin:0">
                <label class="form-label">${isEn ? 'Letter Length' : 'طول الخطاب'}</label>
                <select id="clLength" class="form-input" onchange="CareerAI.updateCLField('length', this.value)">
                  <option value="concise" ${state.length==='concise'?'selected':''}>${isEn ? '⚡ Concise (~200 words)' : '⚡ موجز ومركز (~200 كلمة)'}</option>
                  <option value="standard" ${state.length==='standard'?'selected':''}>${isEn ? '📄 Standard (~350 words)' : '📄 قياسي متوازن (~350 كلمة)'}</option>
                  <option value="detailed" ${state.length==='detailed'?'selected':''}>${isEn ? '📈 In-Depth (~500 words)' : '📈 مفصل وشامل (~500 كلمة)'}</option>
                </select>
              </div>

              <div class="form-group" style="margin:0">
                <label class="form-label">${isEn ? 'Letter Language' : 'لغة الخطاب المطلوبة'}</label>
                <select id="clOutputLang" class="form-input" onchange="CareerAI.updateCLField('outputLang', this.value)">
                  <option value="ar" ${state.outputLang==='ar'?'selected':''}>🇸🇦 العربية (Arabic)</option>
                  <option value="en" ${state.outputLang==='en'?'selected':''}>🇬🇧 English (الإنجليزية)</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Top Achievements & Key Skills (Optional)' : 'أهم الإنجازات والمهارات المحورية (اختياري)'}</label>
              <textarea id="clSkills" class="form-textarea" rows="3" placeholder="${isEn ? 'e.g. Led teams of 12+, PMP certified, reduced project delay by 25%' : 'مثال: قيادة فرق عمل، شهادة PMP، خفض تكاليف المشاريع بنسبة 20%، خبرة بالتحول الرقمي'}" oninput="CareerAI.updateCLField('skills', this.value)">${state.skills || ''}</textarea>
            </div>

            <button class="btn btn--primary btn--full btn--lg" id="btnGenerateCL" onclick="CareerAI.startGenerateCoverLetter()" style="box-shadow:0 4px 15px rgba(99,102,241,0.35);">
              ✨ ${isEn ? 'Generate Tailored Cover Letter' : 'توليد خطاب التقديم بالذكاء الاصطناعي'}
            </button>
          </div>

          <!-- Column 2: Generated Letter Output & Action Buttons -->
          <div id="clPreviewCol" class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:${state.activeMobileTab==='preview' || window.innerWidth > 991 ? 'flex' : 'none'};flex-direction:column;">
            
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:1px solid var(--color-border-light);flex-wrap:wrap;gap:0.5rem;">
              <div>
                <h3 style="font-size:1.15rem;font-weight:700;color:var(--color-text);margin:0">
                  📄 ${isEn ? 'Generated Cover Letter' : 'خطاب التقديم المُعتمد'}
                </h3>
                <span style="font-size:0.76rem;color:var(--color-text-muted)">
                  ${isEn ? 'Ready to edit, copy or export' : 'قابل للتعديل المباشر، النسخ والتحميل'}
                </span>
              </div>

              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                <button class="btn btn--accent btn--sm" onclick="CareerAI.copyCoverLetterText()">📋 ${isEn ? 'Copy' : 'نسخ'}</button>
                <button class="btn btn--secondary btn--sm" onclick="CareerAI.downloadCLPDF()">📥 PDF</button>
                <button class="btn btn--ghost btn--sm" onclick="CareerAI.downloadCLTxt()">💾 TXT</button>
              </div>
            </div>

            <textarea id="clOutputText" class="form-textarea" style="flex:1;min-height:380px;background:#ffffff;color:#0f172a;font-family:'Inter', 'Cairo', sans-serif;font-size:0.92rem;line-height:1.75;padding:1.25rem;border-radius:10px;border:1px solid rgba(99,102,241,0.3);" placeholder="${isEn ? 'Your tailored cover letter will appear here ready to edit, copy, and export...' : 'سيظهر خطاب التقديم المُولّد هنا جاهزاً للتعديل، النسخ والتحميل...'}" oninput="CareerAI.onCLEdited(this.value)">${state.generatedLetter || ''}</textarea>

            <!-- AI Refinement Quick Action Chips -->
            <div style="display:flex;gap:0.5rem;margin-top:1.25rem;flex-wrap:wrap;align-items:center;background:rgba(15,23,42,0.4);padding:0.75rem;border-radius:10px;">
              <span style="font-size:0.8rem;font-weight:700;color:var(--color-text)">✨ ${isEn ? 'AI Refine:' : 'تعديل ذكي:'}</span>
              <button class="btn btn--ghost btn--sm" style="border:1px solid var(--color-border);font-size:0.8rem;padding:3px 10px;" onclick="CareerAI.refineCL('shorten')">⚡ ${isEn ? 'Shorter' : 'اختصار وتكثيف'}</button>
              <button class="btn btn--ghost btn--sm" style="border:1px solid var(--color-border);font-size:0.8rem;padding:3px 10px;" onclick="CareerAI.refineCL('expand')">📈 ${isEn ? 'Add Metrics' : 'تعزيز الأرقام والإنجازات'}</button>
              <button class="btn btn--ghost btn--sm" style="border:1px solid var(--color-border);font-size:0.8rem;padding:3px 10px;" onclick="CareerAI.refineCL('leadership')">👑 ${isEn ? 'Leadership Focus' : 'إبراز القيادة'}</button>
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

        ${window.CareerAI.components.renderOtherTools('cover-letter-generator')}
      </div>
    </section>
  `;
};

// Mobile Tab Toggle Helper
CareerAI.setCLMobileTab = function(tab) {
  window.CareerAI.clState.activeMobileTab = tab;
  const fCol = document.getElementById('clFormCol');
  const pCol = document.getElementById('clPreviewCol');

  if (window.innerWidth <= 991) {
    if (fCol) fCol.style.display = tab === 'form' ? 'block' : 'none';
    if (pCol) pCol.style.display = tab === 'preview' ? 'flex' : 'none';
  } else {
    if (fCol) fCol.style.display = 'block';
    if (pCol) pCol.style.display = 'flex';
  }

  const btns = document.querySelectorAll('.cl-mobile-tabs button');
  if (btns.length >= 2) {
    btns[0].className = `btn btn--sm ${tab==='form'?'btn--primary':'btn--ghost'}`;
    btns[1].className = `btn btn--sm ${tab==='preview'?'btn--primary':'btn--ghost'}`;
  }
};

// Handlers & Generation Logic
CareerAI.updateCLField = function(field, val) {
  window.CareerAI.clState[field] = val;
};

CareerAI.onCLEdited = function(text) {
  window.CareerAI.clState.generatedLetter = text;
};

CareerAI.loadSampleCL = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const sample = window.CareerAI.sampleCLData;

  window.CareerAI.clState.fullName = isEn ? sample.fullName_en : sample.fullName;
  window.CareerAI.clState.jobTitle = sample.jobTitle;
  window.CareerAI.clState.companyName = isEn ? sample.companyName_en : sample.companyName;
  window.CareerAI.clState.yearsExp = sample.yearsExp;
  window.CareerAI.clState.skills = sample.skills;
  window.CareerAI.clState.tone = sample.tone;
  window.CareerAI.clState.length = sample.length;
  window.CareerAI.clState.outputLang = isEn ? 'en' : 'ar';

  const fn = document.getElementById('clFullName');
  const jt = document.getElementById('clJobTitle');
  const cn = document.getElementById('clCompanyName');
  const sk = document.getElementById('clSkills');
  const tn = document.getElementById('clTone');
  const len = document.getElementById('clLength');
  const ol = document.getElementById('clOutputLang');

  if (fn) fn.value = window.CareerAI.clState.fullName;
  if (jt) jt.value = window.CareerAI.clState.jobTitle;
  if (cn) cn.value = window.CareerAI.clState.companyName;
  if (sk) sk.value = window.CareerAI.clState.skills;
  if (tn) tn.value = window.CareerAI.clState.tone;
  if (len) len.value = window.CareerAI.clState.length;
  if (ol) ol.value = window.CareerAI.clState.outputLang;

  CareerAI.startGenerateCoverLetter();
};

CareerAI.startGenerateCoverLetter = function() {
  const s = window.CareerAI.clState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (!s.jobTitle || !s.companyName) {
    alert(isEn ? 'Please specify at least the Job Title and Company Name.' : 'يرجى إدخال المسمى الوظيفي واسم الشركة على الأقل.');
    return;
  }

  const btn = document.getElementById('btnGenerateCL');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ ' + (isEn ? 'Crafting Tailored Letter...' : 'جاري كتابة الخطاب بالذكاء الاصطناعي...');
  }

  setTimeout(() => {
    const isTargetEn = s.outputLang === 'en';
    const today = new Date().toLocaleDateString(isTargetEn ? 'en-US' : 'ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
    const name = s.fullName || (isTargetEn ? 'Applicant Name' : 'المتقدم للشغل');
    const company = s.companyName;
    const role = s.jobTitle;
    const skills = s.skills || (isTargetEn ? 'strategic execution, cross-functional leadership, and operational excellence' : 'التخطيط الاستراتيجي، قيادة فرق العمل، وتحقيق كفاءة الأداء');

    let letter = '';
    if (isTargetEn) {
      if (s.length === 'concise') {
        letter = `${today}

Hiring Team / Talent Acquisition
${company}

Subject: Application for ${role}

Dear Hiring Team,

I am writing to express my strong enthusiasm for the ${role} position at ${company}. With over ${s.yearsExp} years of hands-on experience specializing in ${skills}, I have consistently delivered measurable outcomes and streamlined operational performance.

At ${company}, I am keen to leverage my proven expertise to drive strategic initiatives, collaborate closely with cross-functional partners, and accelerate business growth from day one.

Thank you for your time and consideration. I look forward to the opportunity to discuss my qualifications with you in an interview.

Sincerely,
${name}`;
      } else {
        letter = `${today}

Hiring Committee & Talent Acquisition
${company}

Subject: Application for ${role} Position

Dear Hiring Manager,

I am writing to express my profound interest in joining ${company} as a ${role}. With more than ${s.yearsExp} years of demonstrated success leading high-impact initiatives in ${skills}, I am excited by the prospect of contributing to your organization's forward-looking mission.

Throughout my career, I have dedicated myself to turning complex operational challenges into competitive advantages. Notably, I have engineered reliable frameworks that elevated team productivity by over 25% and delivered multi-stakeholder projects ahead of schedule. Your commitment to high standards and innovation at ${company} strongly resonates with my personal professional ethos.

Bringing a combination of rigorous technical mastery, disciplined analytical thinking, and empathetic leadership, I am prepared to make an immediate and positive contribution to your team.

Thank you for considering my application. I welcome the opportunity to discuss how my experience and passion align with the strategic goals of ${company}.

Sincerely,
${name}`;
      }
    } else {
      if (s.length === 'concise') {
        letter = `التاريخ: ${today}

إلى: لجنة التوظيف الموقرة
شركة: ${company}

الموضوع: التقدم لشغل وظيفة "${role}"

تحية طيبة وبعد،،

يسعدني أن أتقدم بطلبي هذا للانضمام إلى فريق عملكم المتميز في شركة "${company}" لشغل منصب "${role}". بفضل خبرتي العملية الممتدة لأكثر من ${s.yearsExp} سنوات في مجالات ${skills}، أثق في قدرتي على تحقيق إضافة نوعية فورية تدعم أهدافكم التشغيلية.

إن ما يجذبني للمساهمة في ${company} هو ريادتكم وسعيكم المستمر للابتكار. يسعدني تسخير مهاراتي لتحقيق نتائج قياسية وملموسة.

شاكراً لكم حسن اهتمامكم ووقتكم، وأتطلع لفرصة إجراء مقابلة شخصية.

وتفضلوا بقبول وافر التقدير،،
${name}`;
      } else {
        letter = `التاريخ: ${today}

إلى: إدارة الموارد البشرية ولجنة استقطاب الكفاءات
شركة: ${company}

الموضوع: التقدم لشغل وظيفة "${role}"

تحية طيبة وبعد،،

يطيب لي أن أرفع لسعادتكم رغبتي الأكيدة في الانضمام إلى صرحكم المتميز "${company}" لشغل وظيفة "${role}". إن مسيرتي المهنية الممتدة لأكثر من ${s.yearsExp} سنوات، وسجلي الحافل في ${skills}، يمنحاني الثقة الكاملة في تقديم مساهمة استراتيجية تسهم في ريادة مؤسستكم وتحقيق مستهدفاتها الطموحة.

خلال محطاتي الوظيفية السابقة، توليت قيادة وإدارة مشاريع نوعية ركزت على تعظيم الإنتاجية، خفض التكاليف التشغيلية بنسب قياسية، وبناء جسور تعاون فعالة بين فرق العمل المختلفة. إن السمعة المرموقة التي تتمتع بها ${company} وبيئة العمل المحفزة على التميز والابتكار هي الدافع الأكبر لي لتقديم أفضل ما لدي من خبرات وطاقات.

أشكركم جزيل الشكر على كريم وقتكم واطلاعكم على ملفي، وأتطلع بشغف لإجراء مقابلة شخصية لمناقشة أوجه التوافق بين مؤهلاتي وتطلعاتكم المستقبلية.

وتفضلوا بقبول فائق التحية والاحترام،،

المتقدم: ${name}`;
      }
    }

    s.generatedLetter = letter;
    const ta = document.getElementById('clOutputText');
    if (ta) ta.value = letter;

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '✨ ' + (isEn ? 'Generate Tailored Cover Letter' : 'توليد خطاب التقديم بالذكاء الاصطناعي');
    }

    // On mobile, automatically switch to preview tab so user sees their letter immediately
    if (window.innerWidth <= 991) {
      CareerAI.setCLMobileTab('preview');
      const pCol = document.getElementById('clPreviewCol');
      if (pCol) pCol.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 600);
};

CareerAI.refineCL = function(type) {
  const s = window.CareerAI.clState;
  const isEn = s.outputLang === 'en';
  if (!s.generatedLetter) {
    CareerAI.startGenerateCoverLetter();
    return;
  }

  if (type === 'shorten') {
    s.generatedLetter = isEn 
      ? s.generatedLetter.split('\n\n').filter((_, i) => i !== 2).join('\n\n')
      : s.generatedLetter.replace(/خلال محطاتي الوظيفية السابقة[sS]*?المختلفة./, 'لدي سجل مثبت في رفع الإنتاجية وتحقيق أعلى معدلات الجودة المهنية.');
  } else if (type === 'expand') {
    s.generatedLetter += isEn 
      ? `\n\nFurthermore, in my previous roles, I achieved an average of 30% performance uplift, spearheaded 5+ high-priority cross-department sprints, and maintained a 98% stakeholder satisfaction rating.`
      : `\n\nإضافة إلى ذلك، نجحت في أدواري السابقة في تحقيق زيادة إنتاجية بلغت 30%، وإدارة مبادرات رقمية حساسة مع الحفاظ على رضا أصحاب المصلحة بنسبة تجاوزت 98%.`;
  } else if (type === 'leadership') {
    s.generatedLetter += isEn
      ? `\n\nAs a collaborative team leader, I take pride in mentoring high-performing professionals and fostering an environment of psychological safety, accountability, and continuous improvement.`
      : `\n\nوعلى الصعيد القيادي، أحرص دائماً على تمكين الكفاءات وتوجيه فرق العمل نحو تحقيق أهداف طموحة في بيئة تسودها روح المسؤولية والتطوير المستمر.`;
  }
  
  const ta = document.getElementById('clOutputText');
  if (ta) ta.value = s.generatedLetter;
};

CareerAI.copyCoverLetterText = function() {
  const s = window.CareerAI.clState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!s.generatedLetter) return;

  navigator.clipboard.writeText(s.generatedLetter).then(() => {
    alert(isEn ? 'Cover letter copied to clipboard!' : 'تم نسخ خطاب التقديم بنجاح إلى الحافظة!');
  });
};

CareerAI.downloadCLTxt = function() {
  const s = window.CareerAI.clState;
  if (!s.generatedLetter) {
    CareerAI.startGenerateCoverLetter();
    return;
  }
  const blob = new Blob([s.generatedLetter], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${(s.fullName || 'Cover_Letter').replace(/\s+/g, '_')}_Letter.txt`;
  a.click();
};

CareerAI.downloadCLPDF = function() {
  const s = window.CareerAI.clState;
  if (!s.generatedLetter) {
    CareerAI.startGenerateCoverLetter();
    return;
  }
  const originalTitle = document.title;
  document.title = (s.fullName || 'Cover Letter') + ' - Cover Letter';
  window.print();
  setTimeout(() => { document.title = originalTitle; }, 1000);
};

CareerAI.resetCoverLetterForm = function() {
  window.CareerAI.clState = {
    fullName: '',
    jobTitle: '',
    companyName: '',
    yearsExp: '3',
    skills: '',
    tone: 'professional',
    generatedLetter: '',
    isGenerating: false
  };

  const fn = document.getElementById('clFullName');
  const jt = document.getElementById('clJobTitle');
  const cn = document.getElementById('clCompanyName');
  const sk = document.getElementById('clSkills');
  const ta = document.getElementById('clOutputText');

  if (fn) fn.value = '';
  if (jt) jt.value = '';
  if (cn) cn.value = '';
  if (sk) sk.value = '';
  if (ta) ta.value = '';
};

window.CareerAI.pages.coverLetterGeneratorSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI Cover Letter Generator | Factor Career',
      description: 'Generate high-impact, custom cover letters tailored to any job description in seconds with AI. Free online generator with PDF export.',
      keywords: 'Cover Letter Generator, AI Cover Letter, Job Application Letter, Free Cover Letter Maker, Factor Career'
    };
  }
  return {
    title: 'مولد رسائل وخطابات التقديم بالذكاء الاصطناعي مجاناً | فكتور كارير',
    description: 'أنشئ خطاب تقديم احترافي ومخصص لكل وظيفة بثوانٍ معدودة. نماذج ذكية مجانية وتصدير فوري بصيغة PDF.',
    keywords: 'مولد رسائل التقديم, خطاب تقديم وظيفة, Cover Letter بالعربي, كتابة رسالة التقديم, Factor Career'
  };
};
