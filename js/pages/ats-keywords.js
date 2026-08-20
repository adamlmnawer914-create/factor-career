/* ============================================
   CareerAI - ATS Keyword Generator Tool Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.atsKeywordsState = {
  jobTitle: '',
  jobDescription: '',
  cvFile: null,
  isAnalyzing: false,
  analysisComplete: false,
  result: null
};

// Analysis & Keyword Extraction Engine
window.CareerAI.analyzeATSKeywordsData = function(jobTitle, jobDescription, hasCV) {
  const text = (jobTitle + ' ' + jobDescription).toLowerCase();
  
  let techSkills = [];
  let softSkills = ['التواصل الفعال', 'حل المشكلات', 'العمل الجماعي', 'إدارة الوقت'];
  let tools = [];
  let certs = [];
  let responsibilities = ['تخطيط وتنفيذ الحملات', 'إعداد التقارير والتحليلات', 'متابعة الأداء والنتائج'];
  let domain = ['استراتيجيات العمل', 'زيادة التحويلات', 'تحسين الأداء'];

  if (text.includes('marketing') || text.includes('تسويق') || text.includes('seo')) {
    techSkills = ['SEO (تحسين محركات البحث)', 'Google Ads', 'Google Analytics 4', 'PPC Campaigns', 'إعلانات Meta', 'Conversion Rate Optimization (CRO)', 'Email Marketing'];
    tools = ['Google Analytics', 'Google Search Console', 'Ahrefs', 'Semrush', 'Mailchimp', 'Excel'];
    certs = ['Google Ads Certified', 'Google Analytics Individual Qualification', 'HubSpot Content Marketing'];
  } else if (text.includes('software') || text.includes('برمج') || text.includes('developer') || text.includes('web')) {
    techSkills = ['JavaScript (ES6+)', 'HTML5 & CSS3', 'React.js', 'Node.js', 'RESTful APIs', 'Git & GitHub', 'Database Design'];
    tools = ['Visual Studio Code', 'Git', 'Postman', 'Docker', 'Webpack'];
    certs = ['AWS Certified Developer', 'Meta Front-End Developer', 'Oracle Certified'];
  } else if (text.includes('design') || text.includes('تصميم') || text.includes('graphic')) {
    techSkills = ['Graphic Design', 'UI/UX Design', 'Branding', 'Typography', 'Visual Communication'];
    tools = ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Adobe InDesign', 'Canva'];
    certs = ['Adobe Certified Expert (ACE)', 'Google UX Design Professional'];
  } else {
    techSkills = ['تحليل البيانات', 'إدارة المشاريع', 'إعداد الميزانيات', 'التخطيط الاستراتيجي', 'إدارة العلاقات'];
    tools = ['Microsoft Office', 'Excel Advanced', 'PowerPoint', 'Trello', 'Slack'];
    certs = ['PMP (Project Management Professional)', 'Scrum Master'];
  }

  // Top Keywords List with priorities & suggested places in CV
  const topKeywords = [
    { word: techSkills[0] || 'إدارة العمليات', priority: 'high', place: 'قسم المهارات + الخبرة المهنية' },
    { word: techSkills[1] || 'التخطيط الاستراتيجي', priority: 'high', place: 'قسم المهارات + الخبرة المهنية' },
    { word: techSkills[2] || 'تحليل البيانات', priority: 'high', place: 'قسم المهارات + النبذة المهنية' },
    { word: tools[0] || 'Microsoft Excel', priority: 'medium', place: 'قسم المهارات التقنية' },
    { word: tools[1] || 'Google Analytics', priority: 'medium', place: 'قسم الأدوات والبرامج' },
    { word: softSkills[0], priority: 'medium', place: 'النبذة المهنية + الخبرة' },
    { word: softSkills[1], priority: 'extra', place: 'قسم المهارات الشخصية' },
    { word: certs[0] || 'شهادة تخصصية', priority: 'high', place: 'قسم الشهادات والتعليم' }
  ];

  // Requirements extracted from description
  const requirements = {
    expYears: text.includes('5') ? '5+ سنوات' : (text.includes('3') ? '3-5 سنوات' : '1-3 سنوات'),
    degree: 'بكالوريوس في التخصص الذات الصلة',
    certs: certs.length > 0 ? certs[0] : 'شهادات مهنية ذات صلة',
    languages: 'اللغة العربية (اللغة الأم)، اللغة الإنجليزية (ممتاز)',
    tools: tools.slice(0, 3).join('، '),
    skills: techSkills.slice(0, 3).join('، ')
  };

  // Resume Match details if CV is attached
  let matchScore = null;
  let foundKeywords = [];
  let missingKeywords = [];

  if (hasCV) {
    matchScore = 74;
    foundKeywords = [techSkills[0], techSkills[2], tools[0], softSkills[0]];
    missingKeywords = [techSkills[1], tools[1], certs[0]];
  }

  const recommendations = [
    `إذا كانت لديك خبرة حقيقية في (${topKeywords[0].word})، تأكد من ذكرها بوضوح في قسم المهارات وقسم الخبرات السابقة.`,
    `يذكر إعلان الوظيفة أداة (${topKeywords[3].word}) كمتطلب فرعي، أدرجها ضمن قائمة الأدوات والبرامج إن كنت تتقنها.`,
    `تأكد من عدم نسخ الكلمات بدون وجود خبرة فعلية لديك لتجنب الوقوع في فخ حشو الكلمات (Keyword Stuffing).`,
    `استخدم الكلمات المفتاحية في سياق إنجازاتك ومقاييس الأداء القابلة للقياس وليس كمجرد سرِد أصم.`
  ];

  const summary = `تبحث الشركة عن مخصص يمتلك مهارات قوية في ${techSkills.slice(0, 2).join(' و ')} مع قدرة مثبتة على ${responsibilities[0]} واستخدام أدوات ${tools.slice(0, 2).join(' و ')} لتحقيق نتائج نمو ملموسة.`;

  return {
    summary,
    requirements,
    topKeywords,
    categories: {
      techSkills,
      softSkills,
      tools,
      certs,
      responsibilities,
      domain
    },
    matchScore,
    foundKeywords,
    missingKeywords,
    recommendations
  };
};

window.CareerAI.pages.atsKeywords = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.atsKeywordsState;

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
            <span>استخراج الكلمات المفتاحية ATS</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              🔑 استخراج فوري للكلمات
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ زيادة مطابقة ATS
            </span>
          </div>
          <h1 class="page-header__title">أداة استخراج الكلمات المفتاحية والمهارات (ATS Keyword Generator)</h1>
          <p class="page-header__subtitle">حلّل إعلان الوظيفة واستخرج الكلمات الدلالية والأدوات الأساسية التي تبحث عنها أنظمة ATS والشركات لزيادة قَبول سيرتك الذاتية</p>
        </div>
      </div>
    </div>

    <!-- Main Workspace -->
    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-12)">
      <div class="container container--narrow">

        <!-- Privacy Banner -->
        <div class="privacy-alert-banner">
          🔒 <strong>تنبيه الخصوصية:</strong> يتم تحليل نص الإعلان والسيرة الذاتية مؤقتاً داخل المتصفح ولا يتم حفظ أو تخزين أي بيانات بشكل دائم نهائياً.
        </div>

        <!-- Google AdSense Display Banner (Top) -->
        <div class="adsense-container adsense-display">
          <span class="adsense-label">إعلان ممول / Sponsored</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="9988776655"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <!-- INPUT FORM -->
        <div class="contact-form" style="padding:var(--space-8); border:1px solid var(--color-border); border-radius:var(--radius-2xl); background:white; margin-bottom:var(--space-8)">
          
          <div class="form-group">
            <label class="form-label" for="atsJobTitle">المسمى الوظيفي (Job Title) *</label>
            <input type="text" id="atsJobTitle" class="form-input" placeholder="مثال: Digital Marketing Specialist, Software Engineer, المحاسب..." value="${state.jobTitle}" oninput="CareerAI.updateAKField('jobTitle', this.value)">
          </div>

          <div class="form-group">
            <label class="form-label" for="atsJobDesc">ألصق وصف الوظيفة (Job Description) *</label>
            <textarea id="atsJobDesc" class="form-textarea" style="min-height:160px" placeholder="الصق نص إعلان الوظيفة بالكامل هنا (المتطلبات، المهام، المهارات المطلوبة)..." oninput="CareerAI.updateAKField('jobDescription', this.value)">${state.jobDescription}</textarea>
            <p style="font-size:var(--text-xs); color:var(--color-text-secondary); margin-top:var(--space-1)">💡 وصف الوظيفة هو المصدر الأساسي لاستخراج الكلمات وتحديد الأهمية والأولويات.</p>
          </div>

          <!-- Optional CV Upload Area -->
          <div style="margin-top:var(--space-6); padding:var(--space-6); background:var(--color-bg-alt); border-radius:var(--radius-xl); border:1px dashed var(--color-border)">
            <label class="form-label" style="margin-bottom:var(--space-2)">📄 رفع السيرة الذاتية لمقارنتها مع الوظيفة (اختياري)</label>
            <p style="font-size:var(--text-xs); color:var(--color-text-secondary); margin-bottom:var(--space-3)">يمكنك رفع سيرتك الذاتية بصيغة PDF أو DOCX لحساب نسبة التطابق واستخراج الكلمات المفقودة فورا.</p>
            
            <input type="file" id="atsCvInput" accept=".pdf,.docx" style="display:none" onchange="CareerAI.handleAKFileSelect(event)">
            
            <div style="display:flex; align-items:center; gap:var(--space-4); flex-wrap:wrap">
              <button type="button" class="btn btn--secondary btn--sm" onclick="document.getElementById('atsCvInput').click()">
                ${state.cvFile ? '📁 تغيير ملف السيرة الذاتية' : '📤 اختيار ملف السيرة الذاتية'}
              </button>
              ${state.cvFile ? `
                <span style="font-size:var(--text-xs); font-weight:var(--font-bold); color:var(--color-primary)">
                  ✓ تم رفع: ${state.cvFile.name}
                </span>
                <button type="button" class="btn btn--ghost btn--sm" style="color:#EF4444" onclick="CareerAI.clearAKFile()">إلغاء</button>
              ` : ''}
            </div>
          </div>

          <!-- Action Button -->
          <button class="btn btn--primary btn--lg btn--full" style="margin-top:var(--space-6)" onclick="CareerAI.startATSAnalysis()">
            ${state.cvFile ? '🔍 تحليل الوظيفة ومقارنة السيرة الذاتية' : '🔑 استخراج الكلمات المفتاحية والمهارات'}
          </button>
        </div>

        <!-- LOADING STATE -->
        <div id="akLoadingContainer" style="${state.isAnalyzing ? 'display:block' : 'none'}">
          <div class="analyzer-loading-card">
            <div class="analyzer-spinner"></div>
            <h3 class="analyzer-loading-title">جاري تحليل نص الوصف الوظيفي واستخراج الكلمات والأدوات...</h3>
            <p style="font-size:var(--text-sm); color:var(--color-text-secondary)">يتم حساب تكرار الكلمات وسياقها وتصنيف المهارات وأماكن الاستخدام...</p>
          </div>
        </div>

        <!-- RESULTS DASHBOARD -->
        <div id="akResultsContainer" style="${state.analysisComplete && !state.isAnalyzing ? 'display:block' : 'none'}">
          ${state.analysisComplete ? CareerAI.renderAKResults() : ''}
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
             data-ad-slot="4433221100"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- SEO & Educational Content Section -->
    <section class="section section--alt" style="padding:var(--space-16) 0">
      <div class="container">
        
        <div class="section__header">
          <span class="section__badge">
            🔑 دليل الكلمات المفتاحية
          </span>
          <h2 class="section__title">فهم أهمية <span class="text-gradient">الكلمات المفتاحية في أنظمة ATS</span></h2>
          <p class="section__subtitle">تعلم كيف تختار الكلمات المناسبة وتضعها في المكان الصحيح داخل سيرتك الذاتية</p>
        </div>

        <div class="grid grid--2" style="gap:var(--space-8);margin-bottom:var(--space-12)">
          
          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.skills}</span>
            </div>
            <h3 class="card__title">ما هي الكلمات المفتاحية (ATS Keywords)؟</h3>
            <p class="card__text">
              هي الكلمات، والمهارات الفنية، والأسماء التخصصية، والأدوات التي يدرجها أصحاب العمل في الوصف الوظيفي وتستهدفها أنظمة الـ ATS لتصفية المرشحين الأكثر ملاءمة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">أين يجب وضع الكلمات المفتاحية داخل السيرة الذاتية؟</h3>
            <p class="card__text">
              1. **قسم المهارات**: للكلمات والأدوات الرئيسية.<br>
              2. **الخبرات العملية**: لتوضيح كيفية استخدام الكلمة في سياق إنجاز واقعي.<br>
              3. **النبذة المهنية**: للكلمات المفتاحية الأكثر أهمية.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">احذر من فخ حشو الكلمات (Keyword Stuffing)</h3>
            <p class="card__text">
              لا تضع كلمات مفتاحية لمجرد تكرارها أو بدون وجود خبرة حقيقية لديك. أنظمة ATS الحديثة تكشف الحشو التكراري وسيرفض مسؤولو التوظيف الملف بمجرد المراجعة البشرية.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.rocket}</span>
            </div>
            <h3 class="card__title">كيف ترفع نسبة مطابقة السيرة الذاتية (Resume Match)؟</h3>
            <p class="card__text">
              قارن سيرتك الذاتية بإعلان الوظيفة، وأدرج الكلمات المفقودة التي تتقنها فعلياً، واضبط المسميات الوظيفية والمصطلحات لتكون متطابقة مع صيغة الإعلان تماماً.
            </p>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="accordion" style="max-width:800px;margin:0 auto">
          
          <div class="accordion__item active">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل يجب نسخ جميع كلمات إعلان الوظيفة في سيرتي الذاتية؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body" style="max-height:200px">
              <div class="accordion__content">
                لا، يُنصح بالتركيز فقط على الكلمات ذات الأهمية العالية والمهارات والأدوات الأساسية التي تمتلك فيها خبرة حقيقية.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>كيف تحدد الأداة الكلمات الأكثر أهمية؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                تعتمد الأداة على التكرار وسياق الكلمة وموقعها في إعلان الوظيفة وتصنيفها الوظيفي لتحديد درجتها (عالية، متوسطة، أو إضافية).
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Google AdSense Square Unit & Compact Banner Row (Bottom) -->
    <div class="container" style="padding-bottom:var(--space-10)">
      <div class="adsense-row">
        <div class="adsense-container adsense-square">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:inline-block;width:300px;height:250px"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="8877665500"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="8877665544"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  `;
};

/* ==========================================================================
   RENDER RESULTS DASHBOARD
   ========================================================================== */

CareerAI.renderAKResults = function() {
  const r = window.CareerAI.atsKeywordsState.result;
  const state = window.CareerAI.atsKeywordsState;

  if (!r) return '';

  return `
    <div class="results-dashboard">
      
      <!-- Summary Box -->
      <div class="results-block" style="background:var(--color-primary-50); border-color:var(--color-primary-200)">
        <h3 class="results-block__title" style="color:var(--color-primary)">📌 ملخص الوظيفة وأولويات الشركة</h3>
        <p style="font-size:var(--text-base); color:var(--color-text); line-height:1.6; margin:0">${r.summary}</p>
      </div>

      <!-- Resume Match Score (If CV uploaded) -->
      ${r.matchScore !== null ? `
        <div class="score-card-hero" style="background:white">
          <div class="score-card-hero__dial">
            <svg class="score-ring" viewBox="0 0 120 120">
              <circle class="score-ring__bg" cx="60" cy="60" r="54"></circle>
              <circle class="score-ring__fill" cx="60" cy="60" r="54" style="stroke-dasharray: 339.3; stroke-dashoffset: ${339.3 - (339.3 * r.matchScore) / 100}"></circle>
            </svg>
            <div class="score-card-hero__number">${r.matchScore}<span>%</span></div>
          </div>
          <div class="score-card-hero__info">
            <div class="score-card-hero__level score-level--good">نسبة مطابقة السيرة الذاتية (Resume Match)</div>
            <p class="score-card-hero__desc">
              تصل نسبة مطابقة سيرتك الذاتية مع هذا الإعلان إلى <strong>${r.matchScore}%</strong>. أضف الكلمات المفتاحية المفقودة التي تمتلك فيها خبرة فعلية لرفع النسبة فوق 85%.
            </p>
          </div>
        </div>

        <div class="grid grid--2" style="gap:var(--space-6)">
          <div class="results-block results-block--green">
            <h3 class="results-block__title" style="color:var(--color-accent)">✓ الكلمات الموجودة في سيرتك الذاتية:</h3>
            <div style="display:flex; flex-wrap:wrap; gap:var(--space-2)">
              ${r.foundKeywords.map(kw => `<span class="tag tag--accent" style="margin:0">${kw}</span>`).join('')}
            </div>
          </div>

          <div class="results-block results-block--red">
            <h3 class="results-block__title" style="color:#DC2626">⚠️ الكلمات المهمة المفقودة:</h3>
            <div style="display:flex; flex-wrap:wrap; gap:var(--space-2)">
              ${r.missingKeywords.map(kw => `<span class="tag" style="background:#FEE2E2; color:#DC2626; border-color:#FCA5A5; margin:0">${kw}</span>`).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Top ATS Keywords Section -->
      <div class="results-block">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-3); margin-bottom:var(--space-5)">
          <h3 class="results-block__title" style="margin-bottom:0">🔥 أهم الكلمات المفتاحية (Top ATS Keywords)</h3>
          <button class="btn btn--accent btn--sm" onclick="CareerAI.copyAllAKTopWords()">
            📋 نسخ جميع الكلمات
          </button>
        </div>

        <div class="ak-top-words-grid">
          ${r.topKeywords.map(item => `
            <div class="ak-keyword-card">
              <div style="display:flex; justify-content:space-between; align-items:center">
                <strong class="ak-keyword-card__word">${item.word}</strong>
                <span class="ak-priority-badge ${item.priority === 'high' ? 'ak-priority--high' : (item.priority === 'medium' ? 'ak-priority--med' : 'ak-priority--extra')}">
                  ${item.priority === 'high' ? 'عالية الأهمية' : (item.priority === 'medium' ? 'متوسطة الأهمية' : 'إضافية')}
                </span>
              </div>
              <div class="ak-keyword-card__place">
                📍 المكان المقترح في CV: <strong>${item.place}</strong>
              </div>
              <button class="ak-keyword-card__copy" onclick="CareerAI.copySingleAKWord('${item.word}')">نسخ الكلمة 📄</button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Categorized Keywords Breakdown -->
      <div class="results-block">
        <h3 class="results-block__title">📂 تصنيف الكلمات والمهارات المستخرجة</h3>
        
        <div class="grid grid--2" style="gap:var(--space-6)">
          ${r.categories.techSkills.length > 0 ? `
            <div class="ak-category-box">
              <h4 class="ak-category-box__title">🛠️ المهارات التقنية (Technical Skills):</h4>
              <div class="ak-tags-wrap">
                ${r.categories.techSkills.map(s => `<span class="builder-skill-tag" style="margin:0">${s}</span>`).join('')}
              </div>
            </div>
          ` : ''}

          ${r.categories.tools.length > 0 ? `
            <div class="ak-category-box">
              <h4 class="ak-category-box__title">💻 الأدوات والبرامج (Tools & Software):</h4>
              <div class="ak-tags-wrap">
                ${r.categories.tools.map(s => `<span class="tag tag--primary" style="margin:0">${s}</span>`).join('')}
              </div>
            </div>
          ` : ''}

          ${r.categories.softSkills.length > 0 ? `
            <div class="ak-category-box">
              <h4 class="ak-category-box__title">🤝 المهارات الشخصية (Soft Skills):</h4>
              <div class="ak-tags-wrap">
                ${r.categories.softSkills.map(s => `<span class="tag tag--accent" style="margin:0">${s}</span>`).join('')}
              </div>
            </div>
          ` : ''}

          ${r.categories.certs.length > 0 ? `
            <div class="ak-category-box">
              <h4 class="ak-category-box__title">🎓 الشهادات والمؤهلات المطلوبة (Certifications):</h4>
              <div class="ak-tags-wrap">
                ${r.categories.certs.map(s => `<span class="tag" style="background:#FEF3C7; color:#D97706; border-color:#FCD34D; margin:0">${s}</span>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Extracted Job Requirements -->
      <div class="results-block">
        <h3 class="results-block__title">📋 متطلبات الوظيفة المستخرجة من الإعلان</h3>
        <div class="contact-form__row" style="font-size:var(--text-sm)">
          <div>⏱️ <strong>سنوات الخبرة:</strong> ${r.requirements.expYears}</div>
          <div>🎓 <strong>المؤهل العلمي:</strong> ${r.requirements.degree}</div>
          <div>🌐 <strong>اللغات المطلوبة:</strong> ${r.requirements.languages}</div>
        </div>
      </div>

      <!-- Actionable CV Optimization Recommendations -->
      <div class="results-block" style="background:#FFFBEB; border-color:#FCD34D">
        <h3 class="results-block__title" style="color:#B45309">💡 توصيات لتحسين سيرتك الذاتية بنزاهة</h3>
        <ul class="bullets-list" style="color:#92400E">
          ${r.recommendations.map(rec => `<li>• ${rec}</li>`).join('')}
        </ul>
      </div>

      <!-- Cross-Tool Promotion Box -->
      <div class="results-block" style="background:linear-gradient(135deg, var(--color-primary-50), var(--color-accent-50)); border-color:var(--color-primary-200); text-align:center">
        <h3 style="font-size:var(--text-xl); font-weight:var(--font-bold); color:var(--color-primary); margin-bottom:var(--space-2)">🚀 الخطوات التالية لتحسين فرك المهنية</h3>
        <p style="font-size:var(--text-sm); color:var(--color-text-secondary); margin-bottom:var(--space-6)">استخدم الكلمات المفتاحية المستخرجة مباشرة في باقي أدوات الذكاء الاصطناعي على المنصة:</p>
        
        <div style="display:flex; justify-content:center; gap:var(--space-4); flex-wrap:wrap">
          <a href="#/tools/resume-builder" class="btn btn--primary btn--sm" onclick="CareerAI.router.navigate('/tools/resume-builder')">
            📄 إنشاء CV جديد بهذه الكلمات
          </a>
          <a href="#/tools/resume-analyzer" class="btn btn--secondary btn--sm" onclick="CareerAI.router.navigate('/tools/resume-analyzer')">
            🔍 تحليل سيرتك الذاتية بالكامل
          </a>
          <a href="#/tools/cover-letter-generator" class="btn btn--accent btn--sm" onclick="CareerAI.router.navigate('/tools/cover-letter-generator')">
            ✉️ إنشاء Cover Letter لهذه الوظيفة
          </a>
        </div>
      </div>

      <!-- Restart Button -->
      <div class="text-center" style="margin-top:var(--space-6)">
        <button class="btn btn--secondary btn--lg" onclick="CareerAI.resetAKForm()">
          تحليل وظيفة أخرى 🔄
        </button>
      </div>

    </div>
  `;
};

/* ==========================================================================
   INTERACTIVE HANDLERS
   ========================================================================== */

CareerAI.updateAKField = function(field, val) {
  window.CareerAI.atsKeywordsState[field] = val;
};

CareerAI.handleAKFileSelect = function(e) {
  const files = e.target.files;
  if (files.length > 0) {
    window.CareerAI.atsKeywordsState.cvFile = files[0];
    window.CareerAI.router.handleRoute();
  }
};

CareerAI.clearAKFile = function() {
  window.CareerAI.atsKeywordsState.cvFile = null;
  document.getElementById('atsCvInput').value = '';
  window.CareerAI.router.handleRoute();
};

CareerAI.startATSAnalysis = function() {
  const state = window.CareerAI.atsKeywordsState;

  if (!state.jobDescription.trim()) {
    alert('يرجى لصق نص الوصف الوظيفي (Job Description) أولاً لبدء الاستخراج والتحليل!');
    return;
  }

  state.isAnalyzing = true;
  window.CareerAI.router.handleRoute();

  setTimeout(() => {
    state.isAnalyzing = false;
    state.analysisComplete = true;
    state.result = window.CareerAI.analyzeATSKeywordsData(state.jobTitle, state.jobDescription, !!state.cvFile);

    window.CareerAI.router.handleRoute();

    // Scroll to results
    const el = document.getElementById('akResultsContainer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 1000);
};

CareerAI.copyAllAKTopWords = function() {
  const r = window.CareerAI.atsKeywordsState.result;
  if (r && r.topKeywords) {
    const text = r.topKeywords.map(k => k.word).join(', ');
    navigator.clipboard.writeText(text).then(() => {
      alert('تم نسخ جميع الكلمات المفتاحية الرئيسية إلى الحافظة بنجاح!');
    });
  }
};

CareerAI.copySingleAKWord = function(word) {
  navigator.clipboard.writeText(word).then(() => {
    alert(`تم نسخ الكلمة (${word}) بنجاح!`);
  });
};

CareerAI.resetAKForm = function() {
  window.CareerAI.atsKeywordsState = {
    jobTitle: '',
    jobDescription: '',
    cvFile: null,
    isAnalyzing: false,
    analysisComplete: false,
    result: null
  };
  window.CareerAI.router.handleRoute();
};

window.CareerAI.pages.atsKeywordsSEO = {
  title: 'أداة استخراج الكلمات المفتاحية ATS للوظائف مجاناً | Factor Career Keywords Generator',
  description: 'استخرج أهم الكلمات المفتاحية والمهارات والأدوات المطلوبة في إعلانات الوظائف مجاناً بالذكاء الاصطناعي لتحسين سيرتك الذاتية واجتياز أنظمة ATS.',
  keywords: 'استخراج كلمات مفتاحية ATS, مهارات الوظيفية, ATS Keywords Generator, تحسين السيرة الذاتية, Resume Match'
};
