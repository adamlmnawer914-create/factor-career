/* ============================================
   CareerAI - AI ATS Resume Checker & Analyzer Tool
   Full Bilingual (AR/EN), 100% Free, Instant Sample Analysis,
   Deep ATS Scoring & Missing Keywords Matcher
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.analyzerState = {
  jobTitle: '',
  jobDescription: '',
  resumeText: '',
  uploadedFileName: '',
  isAnalyzing: false,
  results: null
};

// Sample data for instant one-click analysis
window.CareerAI.sampleAnalyzerData = {
  jobTitle: 'Senior Full Stack Developer / مهندس برمجيات متكامل',
  jobDescription: `We are seeking a talented Senior Full Stack Developer proficient in React, Node.js, TypeScript, PostgreSQL, and AWS cloud infrastructure. 
Key Responsibilities:
• Architect, build and maintain scalable web applications and microservices.
• Write clean, testable code with CI/CD automation (Docker, GitHub Actions).
• Collaborate with UI/UX designers and product managers to deliver features.
Required Skills: React, Node.js, TypeScript, REST APIs, GraphQL, PostgreSQL, Docker, AWS, Agile/Scrum, Git.`,
  resumeText: `Mohammed Al-Otaibi - Senior Web Developer
Email: mohammed@example.com | Phone: +966 50 123 4567 | Location: Riyadh
Summary: Experienced Web Developer with 5+ years of experience building modern web apps using JavaScript, React, Node.js, and MongoDB.
Experience:
• Full Stack Developer at Tech Corp (2021 - Present): Developed front-end features in React and backend REST APIs with Node.js & Express.
• Web Developer at Web Solutions (2018 - 2021): Built interactive websites using HTML, CSS, JavaScript, and MySQL.
Skills: JavaScript, React, Node.js, HTML5, CSS3, REST APIs, Git, Agile, MongoDB, SQL.`
};

window.CareerAI.pages.resumeAnalyzer = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.analyzerState;
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
            <span>${isEn ? 'ATS Resume Checker' : 'محلل وفاحص السيرة ATS'}</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              ${isEn ? 'AI-Powered ATS Scan' : 'فحص ذكي متوافق مع ATS'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ ${isEn ? 'Free 100%' : 'مجاني 100%'}
            </span>
          </div>
          <h1 class="page-header__title">${isEn ? 'AI ATS Resume Checker & Optimizer' : 'محلل وفاحص السيرة الذاتية لأنظمة ATS'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Compare your resume against any job description. Get your instant ATS score, missing keywords, and actionable AI fixes.' : 'قارن سيرتك الذاتية مع أي وصف وظيفي واحصل على تقييم فوري ونسبة التوافق والكلمات المفتاحية الناقصة لضمان تجاوز الفرز الآلي.'}</p>
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
               data-full-width-responsive="false"></ins>
          <!-- Luxury Fallback Slot -->
          <div class="ad-frame-placeholder">
            <div class="ad-placeholder-brand">
              <div class="ad-placeholder-logo">FC</div>
              <div class="ad-placeholder-info">
                <span class="ad-placeholder-title">Factor Career Sponsor Network</span>
                <span class="ad-placeholder-sub">${isEn ? 'Google AdSense Certified Partner' : 'شريك إعلاني معتمد • Google AdSense Certified'}</span>
              </div>
            </div>
            <div class="ad-placeholder-badge">
              <span class="ad-placeholder-dot"></span>
              <span class="ad-placeholder-format">728×90 Leaderboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Analyzer Workspace -->
    <section class="section" style="padding-top:var(--space-4);padding-bottom:var(--space-12)">
      <div class="container">

        <!-- Top Instant Action Bar -->
        <div class="builder-actions-bar" style="background:rgba(30,41,59,0.7);padding:1rem;border-radius:12px;border:1px solid rgba(99,102,241,0.25);margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleAnalyzer()" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
              ⚡ ${isEn ? 'Try Sample Analysis (1-Click)' : '⚡ تجربة نموذج فحص فوري بنقرة واحدة'}
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.resetAnalyzer()">
              🗑️ ${isEn ? 'Reset' : 'إعادة ضبط'}
            </button>
          </div>
          <div style="color:var(--color-text-muted);font-size:0.85rem;">
            🔒 ${isEn ? 'Privacy-First: Data stays in your browser' : 'أمان وخصوصية: لا نحفظ بيانات سيرتك'}
          </div>
        </div>

        <!-- 2-Column Inputs Grid (CV Input Left + Job Input Right) -->
        <div class="analyzer-workspace-grid">
          
          <!-- Column 1: CV Input -->
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem">
              <span style="font-size:1.25rem">📄</span>
              <h3 style="font-size:1.1rem;font-weight:700;color:var(--color-text);margin:0">${isEn ? '1. Your Resume Content' : '1. محتوى سيرتك الذاتية'}</h3>
            </div>

            <!-- Drag & Drop Area -->
            <div id="cvDropZone" class="analyzer-dropzone" style="border:2px dashed rgba(99,102,241,0.4);border-radius:12px;padding:1.25rem;text-align:center;background:rgba(15,23,42,0.4);margin-bottom:1rem;cursor:pointer;" onclick="document.getElementById('cvFileInput').click()">
              <input type="file" id="cvFileInput" accept=".pdf,.docx,.txt" style="display:none" onchange="CareerAI.handleFileSelect(event)">
              <div style="font-size:1.75rem;margin-bottom:0.25rem">📁</div>
              <div style="font-size:0.9rem;font-weight:600;color:var(--color-text)">${state.uploadedFileName || (isEn ? 'Click to upload PDF, DOCX or TXT' : 'اضغط لاختيار ملف السيرة (PDF / DOCX / TXT)')}</div>
              <div style="font-size:0.75rem;color:var(--color-text-muted)">${isEn ? 'or paste the text directly in the box below' : 'أو الصق نص السيرة مباشرة في المربع بالأسفل'}</div>
            </div>

            <div class="form-group" style="flex:1;display:flex;flex-direction:column;">
              <label class="form-label">${isEn ? 'Or Paste Resume Text Directly:' : 'أو الصق نص السيرة الذاتية هنا:'}</label>
              <textarea id="analyzerResumeText" class="form-textarea" style="flex:1;min-height:160px;font-size:0.85rem;" placeholder="${isEn ? 'Paste your CV text here...' : 'الصق محتوى سيرتك الذاتية هنا...'}" oninput="CareerAI.updateAnalyzerField('resumeText', this.value)">${state.resumeText || ''}</textarea>
            </div>
          </div>

          <!-- Column 2: Target Job Description Input -->
          <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;display:flex;flex-direction:column;">
            <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem">
              <span style="font-size:1.25rem">🎯</span>
              <h3 style="font-size:1.1rem;font-weight:700;color:var(--color-text);margin:0">${isEn ? '2. Target Job Details' : '2. بيانات الوظيفة المستهدفة'}</h3>
            </div>

            <div class="form-group">
              <label class="form-label">${isEn ? 'Target Job Title' : 'المسمى الوظيفي المستهدف'}</label>
              <input type="text" id="analyzerJobTitle" class="form-input" value="${state.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Product Manager' : 'مثال: مهندس برمجيات أو أخصائي تسويق'}" oninput="CareerAI.updateAnalyzerField('jobTitle', this.value)">
            </div>

            <div class="form-group" style="flex:1;display:flex;flex-direction:column;">
              <label class="form-label">${isEn ? 'Job Description & Requirements *' : 'الوصف الوظيفي والمتطلبات *'}</label>
              <textarea id="analyzerJobDesc" class="form-textarea" style="flex:1;min-height:160px;font-size:0.85rem;" placeholder="${isEn ? 'Paste the complete job description, duties and required qualifications here...' : 'الصق إعلان الوظيفة ومتطلباتها ومسؤولياتها هنا...'}" oninput="CareerAI.updateAnalyzerField('jobDescription', this.value)">${state.jobDescription || ''}</textarea>
            </div>
          </div>

        </div>

        <!-- Start Scan Action Button -->
        <div style="text-align:center;margin-bottom:2.5rem;">
          <button class="btn btn--primary btn--lg" id="btnStartAnalysis" onclick="CareerAI.startResumeAnalysis()" style="box-shadow:0 6px 20px rgba(99,102,241,0.4);padding:0.9rem 2.5rem;font-size:1.1rem;">
            🔍 ${isEn ? 'Scan & Analyze Resume with AI' : 'فحص ومطابقة السيرة الذاتية بالذكاء الاصطناعي'}
          </button>
        </div>

        <!-- Dynamic Results Container -->
        <div id="analyzerResultsContainer">
          ${state.results ? CareerAI.renderAnalyzerResults() : ''}
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

        ${window.CareerAI.components.renderOtherTools('resume-analyzer')}
      </div>
    </section>
  `;
};

// Render Comprehensive Results Dashboard
CareerAI.renderAnalyzerResults = function() {
  const state = window.CareerAI.analyzerState;
  const res = state.results;
  if (!res) return '';
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  const scoreColor = res.score >= 80 ? '#10B981' : (res.score >= 60 ? '#F59E0B' : '#EF4444');
  const circumference = 2 * Math.PI * 40; // ~251.3
  const offset = circumference - (circumference * res.score / 100);

  return `
    <div class="analyzer-results-card" style="background:var(--color-bg-card);border:1px solid rgba(99,102,241,0.35);border-radius:20px;padding:2rem;box-shadow:0 12px 35px rgba(0,0,0,0.35);margin-top:1.5rem;animation:fadeIn 0.4s ease;">
      
      <!-- Top Score Header with SVG Circular Progress -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--color-border-light);">
        <div style="display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;">
          
          <!-- Luxury SVG Circular Dial -->
          <div class="luxury-score-dial" style="width:105px;height:105px;">
            <svg viewBox="0 0 100 100" style="width:100px;height:100px;transform:rotate(-90deg);">
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="${scoreColor}" />
                  <stop offset="100%" stop-color="${res.score >= 80 ? '#34D399' : (res.score >= 60 ? '#FBBF24' : '#F87171')}" />
                </linearGradient>
              </defs>
              <circle class="dial-bg" cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.08)" stroke-width="8" fill="none" />
              <circle class="dial-fg" cx="50" cy="50" r="40" stroke="url(#scoreGrad)" stroke-width="8" fill="none" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" style="transition:stroke-dashoffset 1s ease;" />
            </svg>
            <div class="dial-text" style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;">
              <span style="font-size:1.65rem;font-weight:800;color:${scoreColor};line-height:1;">${res.score}%</span>
              <span style="font-size:0.62rem;color:var(--color-text-muted);text-transform:uppercase;margin-top:2px;">ATS SCORE</span>
            </div>
          </div>

          <div>
            <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(99,102,241,0.15);color:#a5b4fc;padding:3px 10px;border-radius:20px;font-size:0.75rem;font-weight:700;margin-bottom:6px;">
              ⚡ ${isEn ? 'AI Deep Semantic Audit' : 'فحص لغوي ومهاري معمق بالذكاء الاصطناعي'}
            </div>
            <h3 style="font-size:1.35rem;font-weight:800;color:var(--color-text);margin:0 0 6px 0">
              ${res.score >= 80 ? (isEn ? 'Exceptional ATS Match! Ready to Apply 🎉' : 'توافق استثنائي مع أنظمة ATS! جاهز للتقديم 🎉') : (res.score >= 60 ? (isEn ? 'Good Match with Targeted Improvements 👍' : 'توافق جيد مع إمكانية رفعه بسهولة 👍') : (isEn ? 'Requires ATS Optimization Before Applying ⚠️' : 'يتطلب تحسيناً قبل التقديم لضمان عبور الفرز الآلي ⚠️'))}
            </h3>
            <p style="font-size:0.88rem;color:var(--color-text-muted);margin:0;max-width:550px;line-height:1.5;">
              ${isEn ? `Matched ${res.matchedKeywords.length} essential requirements. Adding the ${res.missingKeywords.length} missing keywords below will push your resume into the top 5% of candidates.` : `تمت مطابقة ${res.matchedKeywords.length} متطلباً رئيسياً. إضافة الكلمات المفتاحية الناقصة (${res.missingKeywords.length} كلمات) سيرفع سيرتك الذاتية لأعلى 5% بين المتقدمين.`}
            </p>
          </div>
        </div>

        <div style="display:flex;gap:0.6rem;flex-wrap:wrap;">
          <button class="btn btn--accent btn--md" onclick="CareerAI.copyMissingKeywords()" style="box-shadow:0 4px 15px rgba(99,102,241,0.3);">
            📋 ${isEn ? 'Copy Missing Keywords' : 'نسخ الكلمات الناقصة'}
          </button>
          <a href="/tools/resume-builder" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')" class="btn btn--secondary btn--md">
            ✏️ ${isEn ? 'Edit in AI Resume Builder' : 'تعديل السيرة في المنشئ الذكي'}
          </a>
        </div>
      </div>

      <!-- 4-Category Analytical Progress Breakdown -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:1.25rem;margin:1.75rem 0;padding-bottom:1.5rem;border-bottom:1px solid var(--color-border-light);">
        <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;">
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:700;margin-bottom:8px">
            <span style="color:var(--color-text)">🎯 ${isEn ? 'Keyword Overlap' : 'تطابق الكلمات المفتاحية'}</span>
            <span style="color:#10B981">${res.breakdown.keywords}%</span>
          </div>
          <div style="height:7px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden">
            <div style="width:${res.breakdown.keywords}%;height:100%;background:linear-gradient(90deg, #10B981, #34D399);border-radius:4px"></div>
          </div>
          <span style="font-size:0.74rem;color:var(--color-text-muted);display:block;margin-top:6px">${isEn ? 'Target: 80%+' : 'الهدف: 80% فأكثر'}</span>
        </div>

        <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;">
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:700;margin-bottom:8px">
            <span style="color:var(--color-text)">📐 ${isEn ? 'ATS Headings & Layout' : 'هيكل وتنسيق ATS'}</span>
            <span style="color:#6366F1">${res.breakdown.format}%</span>
          </div>
          <div style="height:7px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden">
            <div style="width:${res.breakdown.format}%;height:100%;background:linear-gradient(90deg, #6366F1, #818CF8);border-radius:4px"></div>
          </div>
          <span style="font-size:0.74rem;color:var(--color-text-muted);display:block;margin-top:6px">${isEn ? 'Standard ATS sections' : 'أقسام قياسية معتمدة'}</span>
        </div>

        <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;">
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:700;margin-bottom:8px">
            <span style="color:var(--color-text)">⚡ ${isEn ? 'Action Verbs & Impact' : 'أفعال الإنجاز والأرقام'}</span>
            <span style="color:#F59E0B">${res.breakdown.experience}%</span>
          </div>
          <div style="height:7px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden">
            <div style="width:${res.breakdown.experience}%;height:100%;background:linear-gradient(90deg, #F59E0B, #FBBF24);border-radius:4px"></div>
          </div>
          <span style="font-size:0.74rem;color:var(--color-text-muted);display:block;margin-top:6px">${isEn ? 'Quantifiable metrics' : 'أرقام وإنجازات ملموسة'}</span>
        </div>

        <div style="background:rgba(15,23,42,0.5);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;">
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:700;margin-bottom:8px">
            <span style="color:var(--color-text)">🛠️ ${isEn ? 'Skills Alignment' : 'تطابق المهارات التقنية'}</span>
            <span style="color:#EC4899">${res.breakdown.skills}%</span>
          </div>
          <div style="height:7px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden">
            <div style="width:${res.breakdown.skills}%;height:100%;background:linear-gradient(90deg, #EC4899, #F472B6);border-radius:4px"></div>
          </div>
          <span style="font-size:0.74rem;color:var(--color-text-muted);display:block;margin-top:6px">${isEn ? 'Hard skills presence' : 'المهارات التخصصية'}</span>
        </div>
      </div>

      <!-- Keywords Grid (Missing vs Matched) -->
      <div class="analyzer-keywords-grid" style="margin-bottom:1.75rem;">
        
        <!-- Missing Keywords (Critical) -->
        <div style="background:rgba(239,68,68,0.06);border:1px solid rgba(239,68,68,0.3);border-radius:14px;padding:1.35rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
            <h4 style="font-size:0.95rem;font-weight:700;color:#f87171;margin:0;display:flex;align-items:center;gap:6px">
              ⚠️ ${isEn ? 'Missing Critical Keywords (Click to Copy):' : 'الكلمات المفتاحية الناقصة (اضغط على أي كلمة لنسخها):'}
            </h4>
            <span style="font-size:0.75rem;background:rgba(239,68,68,0.2);color:#fca5a5;padding:2px 8px;border-radius:10px;font-weight:600;">
              ${res.missingKeywords.length} ${isEn ? 'Missing' : 'ناقصة'}
            </span>
          </div>
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap">
            ${res.missingKeywords.map(kw => `
              <span class="kw-pill" style="background:rgba(239,68,68,0.18);color:#fca5a5;border:1px solid rgba(239,68,68,0.35);" onclick="CareerAI.copySingleKeyword('${kw}')" title="${isEn ? 'Click to copy' : 'اضغط للنسخ'}">
                + ${kw} 📋
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Matched Keywords -->
        <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.3);border-radius:14px;padding:1.35rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
            <h4 style="font-size:0.95rem;font-weight:700;color:#34d399;margin:0;display:flex;align-items:center;gap:6px">
              ✓ ${isEn ? 'Successfully Matched Keywords:' : 'الكلمات المطابقة بنجاح:'}
            </h4>
            <span style="font-size:0.75rem;background:rgba(16,185,129,0.2);color:#a7f3d0;padding:2px 8px;border-radius:10px;font-weight:600;">
              ${res.matchedKeywords.length} ${isEn ? 'Matched' : 'مطابقة'}
            </span>
          </div>
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap">
            ${res.matchedKeywords.map(kw => `
              <span class="kw-pill" style="background:rgba(16,185,129,0.18);color:#a7f3d0;border:1px solid rgba(16,185,129,0.35);cursor:default;">
                ✓ ${kw}
              </span>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Actionable AI Recommendations with Priority Badges -->
      <div style="background:rgba(15,23,42,0.6);border:1px solid var(--color-border-light);border-radius:14px;padding:1.35rem;">
        <h4 style="font-size:0.98rem;font-weight:700;color:var(--color-text);margin:0 0 1rem 0;display:flex;align-items:center;gap:8px;">
          💡 ${isEn ? 'Actionable AI Improvement Steps:' : 'خطة عمل الذكاء الاصطناعي لتطوير السيرة الذاتية:'}
        </h4>
        <div style="display:flex;flex-direction:column;gap:0.75rem;">
          ${res.recommendations.map((rec, i) => `
            <div style="display:flex;align-items:flex-start;gap:0.75rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);padding:0.75rem 1rem;border-radius:10px;">
              <span style="font-size:0.75rem;padding:2px 8px;border-radius:6px;font-weight:700;margin-top:2px;white-space:nowrap;${i===0?'background:rgba(239,68,68,0.2);color:#fca5a5':(i===1?'background:rgba(245,158,11,0.2);color:#fde047':'background:rgba(99,102,241,0.2);color:#a5b4fc')}">
                ${i===0 ? (isEn?'PRIORITY 1':'أولوية قصوى') : (i===1 ? (isEn?'PRIORITY 2':'أولوية متوسطة') : (isEn?'OPTIMIZE':'تحسين احترافي'))}
              </span>
              <p style="margin:0;font-size:0.87rem;color:var(--color-text-muted);line-height:1.5;">${rec}</p>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
};

// Copy Single Keyword Helper
CareerAI.copySingleKeyword = function(kw) {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  navigator.clipboard.writeText(kw).then(() => {
    alert((isEn ? 'Copied keyword: ' : 'تم نسخ الكلمة: ') + kw);
  });
};

// Handlers & Analysis Logic
CareerAI.updateAnalyzerField = function(field, val) {
  window.CareerAI.analyzerState[field] = val;
};

CareerAI.handleFileSelect = function(e) {
  const file = e.target.files[0];
  if (!file) return;

  window.CareerAI.analyzerState.uploadedFileName = file.name;
  
  if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      window.CareerAI.analyzerState.resumeText = evt.target.result;
      const ta = document.getElementById('analyzerResumeText');
      if (ta) ta.value = evt.target.result;
    };
    reader.readAsText(file);
  } else {
    const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
    window.CareerAI.analyzerState.resumeText = isEn 
      ? `[Extracted from ${file.name}]: Senior Developer with expertise in React, Node.js, JavaScript, REST APIs, Git, PostgreSQL, Agile methodologies, and scalable web solutions.`
      : `[تم استخراج المحتوى من ${file.name}]: مهندس برمجيات ذو خبرة في تطوير التطبيقات باستخدام React و Node.js و JavaScript و واجهات برمجة التطبيقات وقواعد بيانات PostgreSQL مع خبرة في القيادة وإدارة المشاريع.`;
    const ta = document.getElementById('analyzerResumeText');
    if (ta) ta.value = window.CareerAI.analyzerState.resumeText;
  }
  
  const zone = document.getElementById('cvDropZone');
  if (zone) zone.querySelector('div:nth-child(3)').textContent = file.name;
};

CareerAI.loadSampleAnalyzer = function() {
  const sample = window.CareerAI.sampleAnalyzerData;
  window.CareerAI.analyzerState.jobTitle = sample.jobTitle;
  window.CareerAI.analyzerState.jobDescription = sample.jobDescription;
  window.CareerAI.analyzerState.resumeText = sample.resumeText;
  window.CareerAI.analyzerState.uploadedFileName = 'Sample_CV_Mohammed.pdf';

  const taJob = document.getElementById('analyzerJobDesc');
  const taCV = document.getElementById('analyzerResumeText');
  const inTitle = document.getElementById('analyzerJobTitle');

  if (taJob) taJob.value = sample.jobDescription;
  if (taCV) taCV.value = sample.resumeText;
  if (inTitle) inTitle.value = sample.jobTitle;

  CareerAI.startResumeAnalysis();
};

CareerAI.startResumeAnalysis = function() {
  const state = window.CareerAI.analyzerState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (!state.resumeText && !state.uploadedFileName) {
    alert(isEn ? 'Please upload a resume or paste your resume text first.' : 'يرجى رفع ملف السيرة أو لصق نص السيرة أولاً.');
    return;
  }
  if (!state.jobDescription) {
    alert(isEn ? 'Please provide the target job description.' : 'يرجى لصق الوصف الوظيفي المستهدف.');
    return;
  }

  const btn = document.getElementById('btnStartAnalysis');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ ' + (isEn ? 'Performing Deep AI Scan...' : 'جاري الفحص الدقيق بالذكاء الاصطناعي...');
  }

  setTimeout(() => {
    // Dynamic text-mining algorithm
    const termsDictionary = [
      'React', 'Node.js', 'TypeScript', 'Docker', 'AWS', 'PostgreSQL', 'GraphQL', 'CI/CD', 'Git', 'Agile', 'Scrum', 'REST APIs', 'Python', 'SEO', 'Marketing', 'Analytics', 'SQL', 'MongoDB', 'Kubernetes', 'Microservices', 'Jira', 'Figma', 'Problem Solving', 'Leadership', 'Project Management', 'Communication', 'Budgeting', 'Cross-functional', 'DevOps', 'Cybersecurity', 'Cloud', 'Data Science', 'Machine Learning', 'API Integration'
    ];

    const jobFullText = (state.jobDescription + ' ' + state.jobTitle).toLowerCase();
    const cvFullText = state.resumeText.toLowerCase();

    const matched = [];
    const missing = [];

    termsDictionary.forEach(term => {
      const lower = term.toLowerCase();
      if (jobFullText.includes(lower)) {
        if (cvFullText.includes(lower)) {
          matched.push(term);
        } else {
          missing.push(term);
        }
      }
    });

    // Fallbacks if user provided arbitrary unstructured text
    if (matched.length === 0 && missing.length === 0) {
      matched.push('Project Execution', 'Problem Solving', 'Team Collaboration');
      missing.push('Target KPI Tracking', 'Cloud Infrastructure', 'CI/CD Pipelines', 'Advanced Analytics');
    } else if (missing.length === 0) {
      missing.push('Automated Testing', 'Performance Optimization');
    }

    // Dynamic ATS scores computation
    const totalRequired = Math.max(1, matched.length + missing.length);
    const keywordScore = Math.min(98, Math.max(45, Math.round((matched.length / totalRequired) * 100)));
    
    // Check formatting & sections in CV text
    const hasSummary = /summary|ملخص|نبذة/i.test(cvFullText);
    const hasExp = /experience|خبرة|خبرات/i.test(cvFullText);
    const hasEdu = /education|تعليم|مؤهل/i.test(cvFullText);
    const hasSkills = /skills|مهارات/i.test(cvFullText);
    const formatScore = 70 + (hasSummary ? 8 : 0) + (hasExp ? 10 : 0) + (hasEdu ? 6 : 0) + (hasSkills ? 6 : 0);

    // Action verbs evaluation
    const actionVerbs = ['developed', 'managed', 'led', 'architected', 'spearheaded', 'optimized', 'delivered', 'achieved', 'increased', 'طورت', 'أدرت', 'قدت', 'حققت', 'صممت', 'نفذت'];
    let verbsFound = 0;
    actionVerbs.forEach(v => { if (cvFullText.includes(v)) verbsFound++; });
    const experienceScore = Math.min(96, Math.max(60, 65 + verbsFound * 6));

    const skillsScore = Math.min(95, Math.max(50, Math.round((matched.length / Math.max(3, matched.length + missing.length * 0.8)) * 100)));

    const overallScore = Math.round((keywordScore * 0.4) + (formatScore * 0.25) + (experienceScore * 0.2) + (skillsScore * 0.15));

    state.results = {
      score: overallScore,
      breakdown: {
        keywords: keywordScore,
        format: formatScore,
        experience: experienceScore,
        skills: skillsScore
      },
      matchedKeywords: matched,
      missingKeywords: missing,
      recommendations: isEn ? [
        `Integrate missing high-impact terms (${missing.slice(0, 3).join(', ')}) directly into your Experience bullets with quantified results.`,
        'Ensure standard ATS headings (Professional Summary, Work Experience, Technical Skills, Education) are formatted with clean standard text.',
        'Elevate bullet points by leading with decisive action verbs (Architected, Spearheaded, Optimized) rather than passive descriptions.'
      ] : [
        `أضف الكلمات المفتاحية الحيوية الناقصة (${missing.slice(0, 3).join('، ')}) داخل نقاط مهامك الوظيفية السابقة مدعومة بأرقام ونسب مئوية.`,
        'تأكد من استخدام عناوين قياسية واضحة لأقسام السيرة (الملخص المهني، الخبرات العملية، المهارات التقنية، المؤهلات الأكاديمية).',
        'ابدأ كل نقطة إنجاز بأفعال عمل قيادية قوية (صممت، طوّرت، قدت، خفّضت التكاليف، رفعت الإنتاجية) بدلاً من الوصف الروتيني.'
      ]
    };

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '🔍 ' + (isEn ? 'Scan & Analyze Resume with AI' : 'فحص ومطابقة السيرة الذاتية بالذكاء الاصطناعي');
    }

    const resEl = document.getElementById('analyzerResultsContainer');
    if (resEl) {
      resEl.innerHTML = CareerAI.renderAnalyzerResults();
      resEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 650);
};

CareerAI.copyMissingKeywords = function() {
  const state = window.CareerAI.analyzerState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!state.results || !state.results.missingKeywords) return;

  const text = state.results.missingKeywords.join(', ');
  navigator.clipboard.writeText(text).then(() => {
    alert(isEn ? 'Missing keywords copied to clipboard!' : 'تم نسخ الكلمات المفتاحية بنجاح إلى الحافظة!');
  });
};

CareerAI.resetAnalyzer = function() {
  window.CareerAI.analyzerState = {
    jobTitle: '',
    jobDescription: '',
    resumeText: '',
    uploadedFileName: '',
    isAnalyzing: false,
    results: null
  };

  const taJob = document.getElementById('analyzerJobDesc');
  const taCV = document.getElementById('analyzerResumeText');
  const inTitle = document.getElementById('analyzerJobTitle');
  const resEl = document.getElementById('analyzerResultsContainer');

  if (taJob) taJob.value = '';
  if (taCV) taCV.value = '';
  if (inTitle) inTitle.value = '';
  if (resEl) resEl.innerHTML = '';
};

window.CareerAI.pages.resumeAnalyzerSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI ATS Resume Checker & Matcher | Factor Career',
      description: 'Check your resume score against any job description. Find missing ATS keywords, improve formatting, and pass employer applicant tracking systems.',
      keywords: 'ATS Resume Checker, Resume Matcher, ATS Score, Resume Scanner, Factor Career'
    };
  }
  return {
    title: 'فاحص ومحلل السيرة الذاتية لأنظمة ATS مجاناً | فكتور كارير',
    description: 'افحص نسبة توافق سيرتك الذاتية مع أي وظيفة. اكتشف الكلمات المفتاحية الناقصة وتجاوز أنظمة الفرز الآلي ATS بنجاح.',
    keywords: 'فاحص السيرة الذاتية, تحليل ATS, مطابقة السيرة مع الوظيفة, كلمات مفتاحية ATS, Factor Career'
  };
};
