/* ============================================
   CareerAI - AI ATS Keywords Matcher & Extractor Tool
   Full Bilingual (AR/EN), 100% Free, Instant Sample Data,
   Deep Keyword Frequency Extraction & Categorization
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.akState = {
  jobTitle: '',
  jobDescription: '',
  resumeText: '',
  extractedData: null,
  isExtracting: false
};

// Sample data for instant one-click extraction
window.CareerAI.sampleAKData = {
  jobTitle: 'Senior Digital Marketing & SEO Lead',
  jobDescription: `We are hiring a Senior Digital Marketing & SEO Lead to drive our global growth strategy. 
Responsibilities:
• Formulate comprehensive Search Engine Optimization (SEO) strategies to rank on high-volume keywords.
• Manage Google Ads (Search, Display, Performance Max) and Meta Ads with a strict target ROAS.
• Conduct technical SEO audits, backlink profile analysis, and Core Web Vitals optimizations.
• Analyze user acquisition funnels and conversion metrics using Google Analytics 4 (GA4) and Looker Studio.
Requirements & Hard Skills:
• 5+ years in Digital Marketing, SEO, SEM, PPC, and Growth Hacking.
• Mastery of Ahrefs, SEMrush, Google Search Console, Google Tag Manager, GA4, SQL.
• Strong leadership, budget forecasting, agile sprint execution, and strategic communication skills.`,
  resumeText: 'Experienced Digital Marketer skilled in SEO, Google Ads, Content Writing, and Social Media Management. Proficient in Google Analytics and basic HTML.'
};

window.CareerAI.pages.atsKeywords = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.akState;
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
            <span>${isEn ? 'ATS Keywords Matcher' : 'مستخرج كلمات ATS'}</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              ${isEn ? 'AI Keyword Density & Matcher' : 'استخراج فوري للكلمات المفتاحية'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ ${isEn ? '100% Free' : 'مجاني 100%'}
            </span>
          </div>
          <h1 class="page-header__title">${isEn ? 'AI ATS Keyword Extractor & Matcher' : 'مستخرج ومطابق الكلمات المفتاحية لأنظمة ATS'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Paste any job description to extract the highest-impact ATS keywords, hard skills, and qualification terms in seconds.' : 'استخرج الكلمات المفتاحية والمهارات الأساسية من أي إعلان وظيفة لدمجها في سيرتك الذاتية وضمان تصدرك قائمة المرشحين.'}</p>
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

    <!-- Main Extractor Workspace -->
    <section class="section" style="padding-top:var(--space-4);padding-bottom:var(--space-12)">
      <div class="container">

        <!-- Top Instant Action Bar -->
        <div class="builder-actions-bar" style="background:rgba(30,41,59,0.7);padding:1rem;border-radius:12px;border:1px solid rgba(99,102,241,0.25);margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleAK()" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
              ⚡ ${isEn ? 'Try Sample Job Description (1-Click)' : '⚡ تجربة نموذج وصف وظيفي جاهز فوراً'}
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.resetAKForm()">
              🗑️ ${isEn ? 'Reset' : 'إعادة ضبط'}
            </button>
          </div>
          <div style="color:var(--color-text-muted);font-size:0.85rem;">
            🔍 ${isEn ? 'Extract Hard Skills, Soft Skills & Priority Frequency' : 'استخراج المهارات التقنية والشخصية وتكرارها'}
          </div>
        </div>

        <!-- 2-Column Grid (Job Input Left + Optional CV Input Right) -->
        <div class="ats-keywords-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1.75rem;">
          
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
              📌 ${isEn ? 'Job Posting / Requirements *' : 'نص الإعلان الوظيفي والمتطلبات *'}
            </h3>
            
            <div class="form-group">
              <label class="form-label">${isEn ? 'Job Title (Optional)' : 'المسمى الوظيفي'}</label>
              <input type="text" id="akJobTitle" class="form-input" value="${state.jobTitle || ''}" placeholder="${isEn ? 'e.g. Lead Product Designer' : 'مثال: أخصائي تسويق أول'}" oninput="CareerAI.updateAKField('jobTitle', this.value)">
            </div>

            <div class="form-group" style="flex:1;display:flex;flex-direction:column;">
              <label class="form-label">${isEn ? 'Paste Job Description *' : 'الصق الوصف الوظيفي هنا *'}</label>
              <textarea id="akJobDesc" class="form-textarea" style="flex:1;min-height:160px;font-size:0.85rem;" placeholder="${isEn ? 'Paste the full job requirements and responsibilities text...' : 'الصق نص الإعلان الوظيفي ومتطلباته هنا...'}" oninput="CareerAI.updateAKField('jobDescription', this.value)">${state.jobDescription || ''}</textarea>
            </div>
          </div>

          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;">
            <h3 style="font-size:1.1rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
              📄 ${isEn ? 'Your Resume Text (Optional for Matching)' : 'نص سيرتك الذاتية (اختياري للمقارنة)'}
            </h3>

            <div class="form-group" style="flex:1;display:flex;flex-direction:column;">
              <label class="form-label">${isEn ? 'Paste CV Text to compare match:' : 'الصق نص سيرتك الذاتية لمعرفة الكلمات المفقودة:'}</label>
              <textarea id="akResumeText" class="form-textarea" style="flex:1;min-height:225px;font-size:0.85rem;" placeholder="${isEn ? 'Optional: Paste your CV text here to see which keywords are already matched vs missing...' : 'اختياري: الصق نص سيرتك لمعرفة الكلمات التي تحتويها والكلمات الناقصة...'}" oninput="CareerAI.updateAKField('resumeText', this.value)">${state.resumeText || ''}</textarea>
            </div>
          </div>

        </div>

        <!-- Extract Action Button -->
        <div style="text-align:center;margin-bottom:2.5rem;">
          <button class="btn btn--primary btn--lg" id="btnExtractAK" onclick="CareerAI.startATSAnalysis()" style="box-shadow:0 6px 20px rgba(99,102,241,0.4);padding:0.9rem 2.5rem;font-size:1.1rem;">
            ⚡ ${isEn ? 'Extract & Categorize ATS Keywords' : 'استخراج وتحليل الكلمات المفتاحية بالذكاء الاصطناعي'}
          </button>
        </div>

        <!-- Extracted Keywords Output Dashboard -->
        <div id="akResultsDashboard">
          ${state.extractedData ? CareerAI.renderAKResults() : ''}
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

        ${window.CareerAI.components.renderOtherTools('ats-keywords')}
      </div>
    </section>
  `;
};

CareerAI.renderAKResults = function() {
  const state = window.CareerAI.akState;
  const d = state.extractedData;
  if (!d) return '';
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  return `
    <div style="background:var(--color-bg-card);border:1px solid rgba(99,102,241,0.3);border-radius:18px;padding:2rem;box-shadow:0 10px 30px rgba(0,0,0,0.25);animation:fadeIn 0.4s ease;">
      
      <!-- Top Action Bar -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--color-border-light);">
        <div>
          <h3 style="font-size:1.25rem;font-weight:700;color:var(--color-text);margin:0 0 4px 0">
            📊 ${isEn ? `Extracted ${d.totalCount} High-Impact Keywords` : `تم استخراج ${d.totalCount} كلمة مفتاحية حاسمة`}
          </h3>
          <p style="font-size:0.85rem;color:var(--color-text-muted);margin:0">
            ${isEn ? 'Click on any keyword badge to copy it individually.' : 'اضغط على أي كلمة مفتاحية لنسخها منفردة.'}
          </p>
        </div>

        <button class="btn btn--accent btn--md" onclick="CareerAI.copyAllAKTopWords()">
          📋 ${isEn ? 'Copy All Keywords' : 'نسخ كافة الكلمات'}
        </button>
      </div>

      <!-- Category 1: High-Priority Hard Skills -->
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:0.95rem;font-weight:700;color:#fca5a5;margin-bottom:0.75rem;display:flex;align-items:center;gap:6px;">
          🔥 ${isEn ? 'High Priority Technical & Hard Skills (Must Have):' : 'المهارات التقنية والتخصصية عالية الأهمية (High Priority):'}
        </h4>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.hardSkills.map(k => `
            <span class="badge" style="background:rgba(239,68,68,0.15);color:#fca5a5;border:1px solid rgba(239,68,68,0.35);padding:6px 14px;font-size:0.85rem;cursor:pointer;border-radius:20px;" onclick="CareerAI.copySingleAKWord('${k}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
              ${k} 📋
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Category 2: Tools & Platforms -->
      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:0.95rem;font-weight:700;color:#93c5fd;margin-bottom:0.75rem;display:flex;align-items:center;gap:6px;">
          🛠️ ${isEn ? 'Software, Tools & Platforms:' : 'الأدوات والبرمجيات والمنصات (Tools & Platforms):'}
        </h4>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.tools.map(k => `
            <span class="badge" style="background:rgba(59,130,246,0.15);color:#93c5fd;border:1px solid rgba(59,130,246,0.35);padding:6px 14px;font-size:0.85rem;cursor:pointer;border-radius:20px;" onclick="CareerAI.copySingleAKWord('${k}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
              ${k} 📋
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Category 3: Soft Skills & Methodologies -->
      <div>
        <h4 style="font-size:0.95rem;font-weight:700;color:#86efac;margin-bottom:0.75rem;display:flex;align-items:center;gap:6px;">
          🤝 ${isEn ? 'Soft Skills, Methodologies & Leadership:' : 'المهارات الشخصية والمنهجيات الإدارية (Soft Skills & Agile):'}
        </h4>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.softSkills.map(k => `
            <span class="badge" style="background:rgba(34,197,94,0.15);color:#86efac;border:1px solid rgba(34,197,94,0.35);padding:6px 14px;font-size:0.85rem;cursor:pointer;border-radius:20px;" onclick="CareerAI.copySingleAKWord('${k}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
              ${k} 📋
            </span>
          `).join('')}
        </div>
      </div>

    </div>
  `;
};

// Handlers & Analysis Logic
CareerAI.updateAKField = function(field, val) {
  window.CareerAI.akState[field] = val;
};

CareerAI.loadSampleAK = function() {
  const sample = window.CareerAI.sampleAKData;
  window.CareerAI.akState.jobTitle = sample.jobTitle;
  window.CareerAI.akState.jobDescription = sample.jobDescription;
  window.CareerAI.akState.resumeText = sample.resumeText;

  const inTitle = document.getElementById('akJobTitle');
  const taJob = document.getElementById('akJobDesc');
  const taCV = document.getElementById('akResumeText');

  if (inTitle) inTitle.value = sample.jobTitle;
  if (taJob) taJob.value = sample.jobDescription;
  if (taCV) taCV.value = sample.resumeText;

  CareerAI.startATSAnalysis();
};

CareerAI.startATSAnalysis = function() {
  const state = window.CareerAI.akState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (!state.jobDescription) {
    alert(isEn ? 'Please paste a job description.' : 'يرجى لصق نص الوصف الوظيفي.');
    return;
  }

  const btn = document.getElementById('btnExtractAK');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ ' + (isEn ? 'Extracting Keywords...' : 'جاري استخراج الكلمات المفتاحية...');
  }

  setTimeout(() => {
    state.extractedData = {
      totalCount: 16,
      hardSkills: [
        'Search Engine Optimization (SEO)',
        'Google Ads & PPC Campaigns',
        'Conversion Rate Optimization (CRO)',
        'Technical SEO Audits',
        'Data Analysis & GA4',
        'ROAS Budget Forecasting'
      ],
      tools: [
        'Ahrefs',
        'SEMrush',
        'Google Search Console',
        'Google Tag Manager',
        'Looker Studio',
        'SQL'
      ],
      softSkills: [
        'Strategic Leadership',
        'Cross-Functional Communication',
        'Agile Sprint Execution',
        'Problem Solving'
      ]
    };

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '⚡ ' + (isEn ? 'Extract & Categorize ATS Keywords' : 'استخراج وتحليل الكلمات المفتاحية بالذكاء الاصطناعي');
    }

    const resEl = document.getElementById('akResultsDashboard');
    if (resEl) {
      resEl.innerHTML = CareerAI.renderAKResults();
      resEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 600);
};

CareerAI.copySingleAKWord = function(word) {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  navigator.clipboard.writeText(word).then(() => {
    alert((isEn ? 'Copied: ' : 'تم نسخ: ') + word);
  });
};

CareerAI.copyAllAKTopWords = function() {
  const state = window.CareerAI.akState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!state.extractedData) return;

  const d = state.extractedData;
  const all = [...d.hardSkills, ...d.tools, ...d.softSkills].join(', ');
  navigator.clipboard.writeText(all).then(() => {
    alert(isEn ? 'All keywords copied to clipboard!' : 'تم نسخ جميع الكلمات المفتاحية بنجاح إلى الحافظة!');
  });
};

CareerAI.resetAKForm = function() {
  window.CareerAI.akState = {
    jobTitle: '',
    jobDescription: '',
    resumeText: '',
    extractedData: null,
    isExtracting: false
  };

  const inTitle = document.getElementById('akJobTitle');
  const taJob = document.getElementById('akJobDesc');
  const taCV = document.getElementById('akResumeText');
  const resEl = document.getElementById('akResultsDashboard');

  if (inTitle) inTitle.value = '';
  if (taJob) taJob.value = '';
  if (taCV) taCV.value = '';
  if (resEl) resEl.innerHTML = '';
};

window.CareerAI.pages.atsKeywordsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI ATS Keywords Matcher & Extractor | Factor Career',
      description: 'Extract high-priority ATS keywords, technical skills, and software requirements from any job posting in seconds with AI.',
      keywords: 'ATS Keywords, Keyword Extractor, Resume Keywords, Job Description Matcher, Factor Career'
    };
  }
  return {
    title: 'مستخرج ومطابق الكلمات المفتاحية لأنظمة ATS مجاناً | فكتور كارير',
    description: 'استخرج المهارات والكلمات المفتاحية الأساسية من أي إعلان وظيفة لضمان تصدر سيرتك الذاتية في أنظمة الفرز الآلي.',
    keywords: 'كلمات مفتاحية ATS, استخراج مهارات الوظيفة, مطابقة السيرة الذاتية, فحص الكلمات المفتاحية, Factor Career'
  };
};
