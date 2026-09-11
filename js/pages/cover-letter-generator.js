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
  tone: 'professional'
};

window.CareerAI.pages.coverLetterGenerator = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.clState;
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
            <span>${isEn ? 'Cover Letter Generator' : 'مولد رسائل التقديم'}</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              ${isEn ? 'AI Writing Assistant' : 'توليد فوري بالذكاء الاصطناعي'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ ${isEn ? '100% Free' : 'مجاني 100%'}
            </span>
          </div>
          <h1 class="page-header__title">${isEn ? 'AI Cover Letter Generator' : 'مولد رسائل التقديم والخطابات الوظيفية الذكي'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Generate highly tailored, persuasive cover letters tailored to any role in seconds. Export to PDF, Word or copy.' : 'أنشئ خطاب تقديم احترافي ومخصص لكل وظيفة بثوانٍ معدودة لزيادة فرص قبولك وحصولك على المقابلات.'}</p>
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
        <div class="builder-actions-bar" style="background:rgba(30,41,59,0.7);padding:1rem;border-radius:12px;border:1px solid rgba(99,102,241,0.25);margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleCL()" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
              ⚡ ${isEn ? 'Try Sample Data (1-Click)' : '⚡ تجربة نموذج وظيفة جاهز فوراً'}
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.resetCoverLetterForm()">
              🗑️ ${isEn ? 'Reset' : 'إعادة ضبط'}
            </button>
          </div>
          <div style="color:var(--color-text-muted);font-size:0.85rem;">
            🎯 ${isEn ? 'Tailored to your target employer' : 'خطابات مقنعة مصممة للفت انتباه مسؤولي التوظيف'}
          </div>
        </div>

        <!-- 2-Column Grid (Inputs Form Left + Output Letter Right) -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:start;">
          
          <!-- Column 1: Input Details Form -->
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;">
            <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1.25rem;color:var(--color-text)">
              ${isEn ? 'Job & Candidate Details' : 'بيانات الوظيفة والمتقدم'}
            </h3>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Your Full Name *' : 'اسمك الكامل *'}</label>
              <input type="text" id="clFullName" class="form-input" value="${state.fullName || ''}" placeholder="${isEn ? 'e.g. Sarah Jenkins' : 'مثال: سارة عبد الرحمن'}" oninput="CareerAI.updateCLField('fullName', this.value)">
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Target Job Title *' : 'المسمى الوظيفي المستهدف *'}</label>
              <input type="text" id="clJobTitle" class="form-input" value="${state.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Project Manager' : 'مثال: مديرة مشاريع أولى'}" oninput="CareerAI.updateCLField('jobTitle', this.value)">
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Company / Employer Name *' : 'اسم الشركة أو جهة العمل *'}</label>
              <input type="text" id="clCompanyName" class="form-input" value="${state.companyName || ''}" placeholder="${isEn ? 'e.g. Acme Corp' : 'مثال: شركة أفق الدولية'}" oninput="CareerAI.updateCLField('companyName', this.value)">
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
              <div class="form-group">
                <label class="form-label">${isEn ? 'Years of Experience' : 'سنوات الخبرة'}</label>
                <select id="clYearsExp" class="form-input" onchange="CareerAI.updateCLField('yearsExp', this.value)">
                  <option value="1" ${state.yearsExp==='1'?'selected':''}>${isEn ? 'Entry Level (0-2 years)' : 'مبتدئ (0-2 سنوات)'}</option>
                  <option value="3" ${state.yearsExp==='3'?'selected':''}>${isEn ? 'Mid-Level (3-5 years)' : 'متوسط (3-5 سنوات)'}</option>
                  <option value="6" ${state.yearsExp==='6'?'selected':''}>${isEn ? 'Senior (6+ years)' : 'خبير (6+ سنوات)'}</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">${isEn ? 'Writing Tone' : 'نبرة الخطاب'}</label>
                <select id="clTone" class="form-input" onchange="CareerAI.updateCLField('tone', this.value)">
                  <option value="professional" ${state.tone==='professional'?'selected':''}>${isEn ? 'Formal & Professional' : 'احترافي ورسمي'}</option>
                  <option value="confident" ${state.tone==='confident'?'selected':''}>${isEn ? 'Confident & Bold' : 'واثق وقوي'}</option>
                  <option value="creative" ${state.tone==='creative'?'selected':''}>${isEn ? 'Creative & Engaging' : 'إبداعي وحديث'}</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Key Skills & Top Achievements (Optional)' : 'أهم المهارات والإنجازات البارزة'}</label>
              <textarea id="clSkills" class="form-textarea" rows="3" placeholder="${isEn ? 'e.g. Led teams of 10+, PMP certified, boosted revenue by 30%' : 'مثال: إدارة الميزانيات، شهادة PMP، قيادة فرق العمل، تحقيق أهداف المشاريع بنسبة 100%'}" oninput="CareerAI.updateCLField('skills', this.value)">${state.skills || ''}</textarea>
            </div>

            <button class="btn btn--primary btn--full" id="btnGenerateCL" onclick="CareerAI.startGenerateCoverLetter()" style="margin-top:0.5rem;box-shadow:0 4px 15px rgba(99,102,241,0.35);font-size:1.05rem;">
              ✨ ${isEn ? 'Generate Cover Letter with AI' : 'توليد رسالة التقديم بالذكاء الاصطناعي'}
            </button>
          </div>

          <!-- Column 2: Generated Letter Output & Action Buttons -->
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;padding-bottom:0.75rem;border-bottom:1px solid var(--color-border-light);flex-wrap:wrap;gap:0.5rem;">
              <h3 style="font-size:1.15rem;font-weight:700;color:var(--color-text);margin:0">
                📄 ${isEn ? 'Generated Cover Letter' : 'رسالة التقديم المُولّدة'}
              </h3>
              <div style="display:flex;gap:0.4rem;">
                <button class="btn btn--accent btn--sm" onclick="CareerAI.copyCoverLetterText()">📋 ${isEn ? 'Copy' : 'نسخ'}</button>
                <button class="btn btn--secondary btn--sm" onclick="CareerAI.downloadCLPDF()">📥 PDF</button>
              </div>
            </div>

            <textarea id="clOutputText" class="form-textarea" style="flex:1;min-height:380px;background:#ffffff;color:#1e293b;font-family:'Inter', 'Cairo', sans-serif;font-size:0.9rem;line-height:1.7;padding:1.25rem;border-radius:8px;" placeholder="${isEn ? 'Your tailored cover letter will appear here ready to edit, copy, and export...' : 'سيظهر خطاب التقديم المُولّد هنا جاهزاً للتعديل، النسخ والتحميل...'}" oninput="CareerAI.onCLEdited(this.value)">${state.generatedLetter || ''}</textarea>

            <!-- AI Refinement Chips -->
            <div style="display:flex;gap:0.5rem;margin-top:1rem;flex-wrap:wrap;align-items:center;">
              <span style="font-size:0.8rem;color:var(--color-text-muted)">${isEn ? 'AI Refine:' : 'تعديل ذكي:'}</span>
              <button class="btn btn--ghost btn--sm" onclick="CareerAI.refineCL('shorten')">⚡ ${isEn ? 'Shorter' : 'اختصار'}</button>
              <button class="btn btn--ghost btn--sm" onclick="CareerAI.refineCL('expand')">📈 ${isEn ? 'Expand' : 'تفصيل أكثر'}</button>
              <button class="btn btn--ghost btn--sm" onclick="CareerAI.refineCL('skills')">🎯 ${isEn ? 'More Technical' : 'تركيز أكبر على المهارات'}</button>
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

      </div>
    </section>
  `;
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

  const fn = document.getElementById('clFullName');
  const jt = document.getElementById('clJobTitle');
  const cn = document.getElementById('clCompanyName');
  const sk = document.getElementById('clSkills');

  if (fn) fn.value = window.CareerAI.clState.fullName;
  if (jt) jt.value = window.CareerAI.clState.jobTitle;
  if (cn) cn.value = window.CareerAI.clState.companyName;
  if (sk) sk.value = window.CareerAI.clState.skills;

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
    btn.innerHTML = '⏳ ' + (isEn ? 'Generating with AI...' : 'جاري كتابة الخطاب بالذكاء الاصطناعي...');
  }

  setTimeout(() => {
    const today = new Date().toLocaleDateString(isEn ? 'en-US' : 'ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
    const name = s.fullName || (isEn ? 'Applicant Name' : 'اسم المتقدم');
    const company = s.companyName;
    const role = s.jobTitle;
    const skills = s.skills || (isEn ? 'Strategic leadership, project execution, and cross-team collaboration' : 'القيادة الاستراتيجية، تنفيذ المشاريع، وإدارة فرق العمل');

    let letter = '';
    if (isEn) {
      letter = `${today}

Hiring Team / HR Department
${company}

Subject: Application for ${role} Position

Dear Hiring Manager,

I am writing to express my strong interest in the ${role} opportunity at ${company}. With over ${s.yearsExp} years of hands-on experience and a proven background in ${skills}, I am confident in my ability to make an immediate, positive impact on your team.

Throughout my career, I have focused on driving results, optimizing workflows, and delivering complex projects on time and within budget. What excites me most about ${company} is your commitment to innovation and industry leadership. I am eager to bring my expertise in ${skills} to help achieve your strategic goals.

Thank you for your time and consideration. I welcome the opportunity to discuss in an interview how my skills and background align with the needs of ${company}.

Sincerely,
${name}`;
    } else {
      letter = `التاريخ: ${today}

إلى: إدارة الموارد البشرية ولجنة التوظيف الموقرة
شركة: ${company}

الموضوع: التقدم لشغل وظيفة "${role}"

تحية طيبة وبعد،

يسرني أن أتقدم بطلبي هذا لشغل وظيفة "${role}" لدى مؤسستكم المرموقة "${company}". بفضل خبرتي المهنية الممتدة لأكثر من ${s.yearsExp} سنوات، وسجلي الحافل في ${skills}، فإنني على ثقة تامة بقدرتي على تقديم قيمة مضافة نوعية والمساهمة الفعالة في تحقيق أهدافكم الاستراتيجية.

خلال مسيرتي المهنية السابقة، نجحت في قيادة العديد من المبادرات والمشاريع بكفاءة عالية، وتطوير آليات العمل بما يضمن تحقيق أعلى معدلات الجودة والإنتاجية. ما يشجعني على الانضمام إلى ${company} هو سمعتكم الرائدة وبيئة العمل المحفزة على الابتكار والتميز.

أشكركم جزيل الشكر على وقتكم واهتمامكم، وأتطلع بشغف لإجراء مقابلة شخصية لمناقشة كيف يمكن لخبراتي ومهاراتي أن تخدم تطلعات مؤسستكم.

وتفضلوا بقبول فائق التقدير والاحترام،،

المتقدم: ${name}`;
    }

    s.generatedLetter = letter;
    const ta = document.getElementById('clOutputText');
    if (ta) ta.value = letter;

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '✨ ' + (isEn ? 'Generate Cover Letter with AI' : 'توليد رسالة التقديم بالذكاء الاصطناعي');
    }
  }, 600);
};

CareerAI.refineCL = function(type) {
  const s = window.CareerAI.clState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!s.generatedLetter) {
    CareerAI.startGenerateCoverLetter();
    return;
  }

  if (type === 'shorten') {
    s.generatedLetter = isEn 
      ? s.generatedLetter.split('\n\n').filter((_, i) => i !== 2).join('\n\n')
      : s.generatedLetter.replace(/خلال مسيرتي المهنية السابقة[sS]*?والإنتاجية./, 'لدي سجل مثبت في تحقيق أعلى معدلات الإنتاجية وتطوير آليات العمل.');
  } else if (type === 'expand') {
    s.generatedLetter += isEn 
      ? `\n\nFurthermore, my collaborative mindset and strong problem-solving capabilities ensure smooth alignment across cross-functional stakeholders.`
      : `\n\nإضافة إلى ذلك، أمتلك مهارات تواصل قيادية وقدرة عالية على اتخاذ القرارات وحل التحديات التشغيلية المعقدة في بيئات العمل التنافسية.`;
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
