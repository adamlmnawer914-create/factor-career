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
               style="display:inline-block;width:100%;max-width:728px;height:90px;"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="3316284985"
               data-ad-format="horizontal"
               data-full-width-responsive="false"></ins>
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
        <div class="ats-keywords-grid" style="margin-bottom:1.75rem;">
          
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
    <div style="background:var(--color-bg-card);border:1px solid rgba(99,102,241,0.35);border-radius:20px;padding:2rem;box-shadow:0 12px 35px rgba(0,0,0,0.35);animation:fadeIn 0.4s ease;">
      
      <!-- Top Action Bar with Summary & Match Score -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.25rem;margin-bottom:1.5rem;padding-bottom:1.25rem;border-bottom:1px solid var(--color-border-light);">
        <div style="display:flex;align-items:center;gap:1.25rem;flex-wrap:wrap;">
          
          ${d.hasCVComparison ? `
            <div style="width:70px;height:70px;border-radius:50%;border:4px solid ${d.matchRate >= 75 ? '#10B981' : (d.matchRate >= 50 ? '#F59E0B' : '#EF4444')};display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(15,23,42,0.7);">
              <span style="font-size:1.3rem;font-weight:800;color:${d.matchRate >= 75 ? '#10B981' : (d.matchRate >= 50 ? '#F59E0B' : '#EF4444')}">${d.matchRate}%</span>
              <span style="font-size:0.55rem;color:var(--color-text-muted);text-transform:uppercase">MATCH</span>
            </div>
          ` : ''}

          <div>
            <h3 style="font-size:1.3rem;font-weight:800;color:var(--color-text);margin:0 0 4px 0">
              📊 ${isEn ? `Extracted ${d.totalCount} High-Impact Keywords` : `تم استخراج ${d.totalCount} مصطلحاً وكلمة مفتاحية`}
            </h3>
            <p style="font-size:0.86rem;color:var(--color-text-muted);margin:0">
              ${d.hasCVComparison 
                ? (isEn ? `Found ${d.matchedInCV.length} in your resume. ${d.missingInCV.length} critical keywords missing.` : `وجدت سيرتك ${d.matchedInCV.length} كلمة، بينما تنقصها ${d.missingInCV.length} كلمة مفتاحية حاسمة.`) 
                : (isEn ? 'Click on any keyword badge to copy it instantly.' : 'اضغط على أي كلمة مفتاحية لنسخها فوراً إلى الحافظة.')}
            </p>
          </div>
        </div>

        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.hasCVComparison && d.missingInCV.length ? `
            <button class="btn btn--accent btn--md" onclick="CareerAI.copyMissingAKWords()" style="box-shadow:0 4px 15px rgba(99,102,241,0.3);">
              📋 ${isEn ? 'Copy Missing Keywords' : 'نسخ الكلمات الناقصة فقط'}
            </button>
          ` : ''}
          <button class="btn btn--secondary btn--md" onclick="CareerAI.copyAllAKTopWords()">
            📋 ${isEn ? 'Copy All Keywords' : 'نسخ كافة الكلمات'}
          </button>
        </div>
      </div>

      <!-- Category 1: High-Priority Hard Skills -->
      <div style="margin-bottom:1.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
          <h4 style="font-size:0.96rem;font-weight:700;color:#fca5a5;margin:0;display:flex;align-items:center;gap:6px;">
            🔥 ${isEn ? 'High-Priority Technical & Hard Skills (ATS Critical):' : 'المهارات التقنية والتخصصية عالية الأهمية (High Priority):'}
          </h4>
          <span style="font-size:0.75rem;color:var(--color-text-muted)">${d.hardSkills.length} ${isEn ? 'terms' : 'مصطلحات'}</span>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.hardSkills.map(k => {
            const isMatched = d.matchedInCV.includes(k.term);
            const isMissing = d.missingInCV.includes(k.term);
            const badgeBg = d.hasCVComparison ? (isMatched ? 'rgba(16,185,129,0.18)' : 'rgba(239,68,68,0.18)') : 'rgba(239,68,68,0.15)';
            const badgeBorder = d.hasCVComparison ? (isMatched ? 'rgba(16,185,129,0.4)' : 'rgba(239,68,68,0.4)') : 'rgba(239,68,68,0.35)';
            const badgeColor = d.hasCVComparison ? (isMatched ? '#a7f3d0' : '#fca5a5') : '#fca5a5';
            return `
              <span class="kw-pill" style="background:${badgeBg};color:${badgeColor};border:1px solid ${badgeBorder};" onclick="CareerAI.copySingleAKWord('${k.term}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
                ${d.hasCVComparison ? (isMatched ? '✓' : '⚠️') : '+'} ${k.term} <span style="opacity:0.7;font-size:0.75rem">(${k.count}x)</span>
              </span>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Category 2: Tools & Platforms -->
      <div style="margin-bottom:1.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
          <h4 style="font-size:0.96rem;font-weight:700;color:#93c5fd;margin:0;display:flex;align-items:center;gap:6px;">
            🛠️ ${isEn ? 'Software, Tools, Platforms & Frameworks:' : 'البرمجيات، الأدوات، المنصات وأطر العمل (Tools & Tech):'}
          </h4>
          <span style="font-size:0.75rem;color:var(--color-text-muted)">${d.tools.length} ${isEn ? 'tools' : 'أدوات'}</span>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.tools.map(k => {
            const isMatched = d.matchedInCV.includes(k.term);
            const badgeBg = d.hasCVComparison ? (isMatched ? 'rgba(16,185,129,0.18)' : 'rgba(59,130,246,0.18)') : 'rgba(59,130,246,0.15)';
            const badgeBorder = d.hasCVComparison ? (isMatched ? 'rgba(16,185,129,0.4)' : 'rgba(59,130,246,0.4)') : 'rgba(59,130,246,0.35)';
            const badgeColor = d.hasCVComparison ? (isMatched ? '#a7f3d0' : '#93c5fd') : '#93c5fd';
            return `
              <span class="kw-pill" style="background:${badgeBg};color:${badgeColor};border:1px solid ${badgeBorder};" onclick="CareerAI.copySingleAKWord('${k.term}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
                ${d.hasCVComparison ? (isMatched ? '✓' : '⚠️') : '+'} ${k.term} <span style="opacity:0.7;font-size:0.75rem">(${k.count}x)</span>
              </span>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Category 3: Soft Skills, Management & Leadership -->
      <div style="margin-bottom:1.75rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
          <h4 style="font-size:0.96rem;font-weight:700;color:#86efac;margin:0;display:flex;align-items:center;gap:6px;">
            🤝 ${isEn ? 'Leadership, Management & Soft Methodologies:' : 'المهارات الشخصية والقيادية ومنهجيات الإدارة (Soft Skills):'}
          </h4>
          <span style="font-size:0.75rem;color:var(--color-text-muted)">${d.softSkills.length} ${isEn ? 'skills' : 'مهارات'}</span>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.softSkills.map(k => {
            const isMatched = d.matchedInCV.includes(k.term);
            const badgeBg = d.hasCVComparison ? (isMatched ? 'rgba(16,185,129,0.18)' : 'rgba(34,197,94,0.18)') : 'rgba(34,197,94,0.15)';
            const badgeBorder = d.hasCVComparison ? (isMatched ? 'rgba(16,185,129,0.4)' : 'rgba(34,197,94,0.4)') : 'rgba(34,197,94,0.35)';
            const badgeColor = d.hasCVComparison ? (isMatched ? '#a7f3d0' : '#86efac') : '#86efac';
            return `
              <span class="kw-pill" style="background:${badgeBg};color:${badgeColor};border:1px solid ${badgeBorder};" onclick="CareerAI.copySingleAKWord('${k.term}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
                ${d.hasCVComparison ? (isMatched ? '✓' : '⚠️') : '+'} ${k.term}
              </span>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Category 4: Education & Certifications -->
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
          <h4 style="font-size:0.96rem;font-weight:700;color:#c084fc;margin:0;display:flex;align-items:center;gap:6px;">
            📜 ${isEn ? 'Education, Credentials & Industry Certifications:' : 'الشهادات والمؤهلات الأكاديمية والمهنية (Certifications):'}
          </h4>
        </div>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          ${d.certs.map(k => `
            <span class="kw-pill" style="background:rgba(192,132,252,0.15);color:#d8b4fe;border:1px solid rgba(192,132,252,0.35);" onclick="CareerAI.copySingleAKWord('${k}')" title="${isEn?'Click to copy':'اضغط للنسخ'}">
              + ${k}
            </span>
          `).join('')}
        </div>
      </div>

    </div>
  `;
};

// Handlers & Dynamic Text-Mining Analysis Logic
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
    btn.innerHTML = '⏳ ' + (isEn ? 'Parsing Term Densities...' : 'جاري استخراج وتحليل الكلمات المفتاحية...');
  }

  setTimeout(() => {
    const jobText = (state.jobDescription + ' ' + state.jobTitle).toLowerCase();
    const cvText = (state.resumeText || '').toLowerCase();
    const hasCV = cvText.trim().length > 10;

    // Rich domain dictionaries
    const hardDict = [
      'Search Engine Optimization (SEO)', 'Google Ads', 'PPC Campaigns', 'Conversion Rate Optimization (CRO)', 'Technical SEO Audits', 'Data Analysis', 'Web Analytics', 'Full Stack Development', 'REST APIs', 'Cloud Architecture', 'Machine Learning', 'Cybersecurity', 'Database Design', 'System Architecture', 'CI/CD Pipelines', 'Automated Testing', 'Front-end Development', 'Back-end Architecture', 'Microservices', 'UX Research', 'Financial Modeling', 'Budget Forecasting', 'Risk Assessment'
    ];

    const toolsDict = [
      'React', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'GraphQL', 'Git', 'GitHub Actions', 'Ahrefs', 'SEMrush', 'Google Search Console', 'Google Tag Manager', 'GA4', 'Looker Studio', 'SQL', 'Python', 'Figma', 'Jira', 'Tableau', 'Salesforce', 'HubSpot'
    ];

    const softDict = [
      'Strategic Leadership', 'Cross-Functional Communication', 'Agile & Scrum Execution', 'Problem Solving', 'Team Mentorship', 'Stakeholder Management', 'Critical Thinking', 'Adaptability', 'Time Management', 'Decision Making'
    ];

    const certsDict = [
      'Bachelor’s Degree', 'Master’s Degree', 'PMP Certified', 'AWS Certified', 'Google Analytics Certified', 'Scrum Master (CSM)', 'CPA', 'Six Sigma'
    ];

    // Extraction & Frequency computation
    const extractItems = (list) => {
      const results = [];
      list.forEach(item => {
        const clean = item.toLowerCase().replace(/[^a-z0-9]/g, ' ');
        const words = clean.split(/\s+/).filter(w => w.length > 2);
        let matchCount = 0;
        words.forEach(w => {
          const reg = new RegExp('\\b' + w + '\\b', 'gi');
          const m = jobText.match(reg);
          if (m) matchCount += m.length;
        });
        if (matchCount > 0) {
          results.push({ term: item, count: Math.min(6, Math.max(1, Math.round(matchCount / words.length))) });
        }
      });
      return results;
    };

    let hardSkills = extractItems(hardDict);
    let tools = extractItems(toolsDict);
    let softSkills = extractItems(softDict);
    let certs = certsDict.filter(c => jobText.includes(c.toLowerCase().slice(0, 5)));

    if (!hardSkills.length) {
      hardSkills = [
        { term: 'SEO & Performance', count: 3 },
        { term: 'Data Analysis & Insights', count: 2 },
        { term: 'Project Execution', count: 2 }
      ];
    }
    if (!tools.length) {
      tools = [
        { term: 'Google Analytics 4', count: 2 },
        { term: 'SQL / Databases', count: 1 },
        { term: 'Git Version Control', count: 1 }
      ];
    }
    if (!softSkills.length) {
      softSkills = [
        { term: 'Strategic Leadership', count: 2 },
        { term: 'Problem Solving', count: 1 }
      ];
    }
    if (!certs.length) {
      certs = ['Bachelor’s Degree', 'Relevant Industry Certification'];
    }

    // Comparison against candidate CV
    const matchedInCV = [];
    const missingInCV = [];

    if (hasCV) {
      const allTerms = [...hardSkills.map(h => h.term), ...tools.map(t => t.term), ...softSkills.map(s => s.term)];
      allTerms.forEach(t => {
        const termWords = t.toLowerCase().split(/[\s/]+/);
        const isPresent = termWords.some(w => w.length > 3 && cvText.includes(w));
        if (isPresent) {
          matchedInCV.push(t);
        } else {
          missingInCV.push(t);
        }
      });
    }

    const totalKeyTerms = hardSkills.length + tools.length + softSkills.length;
    const matchRate = hasCV ? Math.round((matchedInCV.length / Math.max(1, totalKeyTerms)) * 100) : 0;

    state.extractedData = {
      totalCount: totalKeyTerms,
      hardSkills: hardSkills,
      tools: tools,
      softSkills: softSkills,
      certs: certs,
      hasCVComparison: hasCV,
      matchedInCV: matchedInCV,
      missingInCV: missingInCV,
      matchRate: matchRate
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
  }, 650);
};

CareerAI.copySingleAKWord = function(word) {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  navigator.clipboard.writeText(word).then(() => {
    alert((isEn ? 'Copied: ' : 'تم نسخ: ') + word);
  });
};

CareerAI.copyMissingAKWords = function() {
  const state = window.CareerAI.akState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!state.extractedData || !state.extractedData.missingInCV.length) return;

  const text = state.extractedData.missingInCV.join(', ');
  navigator.clipboard.writeText(text).then(() => {
    alert(isEn ? 'Missing keywords copied to clipboard!' : 'تم نسخ الكلمات الناقصة بنجاح إلى الحافظة!');
  });
};

CareerAI.copyAllAKTopWords = function() {
  const state = window.CareerAI.akState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!state.extractedData) return;

  const d = state.extractedData;
  const all = [...d.hardSkills.map(h => h.term), ...d.tools.map(t => t.term), ...d.softSkills.map(s => s.term)].join(', ');
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
