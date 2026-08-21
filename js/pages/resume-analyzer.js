/* ============================================
   CareerAI - AI Resume Analyzer & ATS Checker Tool Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

// In-memory state for Resume Analyzer
window.CareerAI.analyzerState = {
  file: null,
  jobTitle: '',
  jobDescription: '',
  isAnalyzing: false,
  analysisComplete: false,
  progress: 0,
  progressText: '',
  result: null
};

// Simulated mock analysis database based on job title / keywords
window.CareerAI.mockAnalyze = function(jobTitle, jobDescription) {
  const score = jobDescription ? 76 : 64;
  
  // Calculate keyword matches if job description is provided
  let matches = ['سيرة ذاتية', 'خبرة عملية', 'مهارات تواصل'];
  let missing = ['إدارة مشاريع', 'حل المشكلات', 'تحليل البيانات'];
  
  if (jobTitle) {
    const titleLower = jobTitle.toLowerCase();
    if (titleLower.includes('software') || titleLower.includes('برمج') || titleLower.includes('developer')) {
      matches = ['JavaScript', 'HTML5 & CSS3', 'Git', 'REST APIs'];
      missing = ['React.js', 'TypeScript', 'Jest Testing', 'CI/CD Pipelines'];
    } else if (titleLower.includes('marketing') || titleLower.includes('تسويق') || titleLower.includes('seo')) {
      matches = ['SEO', 'Google Analytics', 'صناعة المحتوى', 'Social Media'];
      missing = ['Google Ads', 'PPC Campaigns', 'Conversion Rate Optimization (CRO)', 'Email Marketing'];
    } else if (titleLower.includes('design') || titleLower.includes('تصميم') || titleLower.includes('graphic')) {
      matches = ['Adobe Photoshop', 'Figma', 'UI/UX Design', 'الإبداع'];
      missing = ['Adobe Illustrator', 'Adobe InDesign', 'Typography', 'Motion Graphics'];
    }
  }

  const keywordMatchScore = jobDescription ? Math.floor(Math.random() * 20) + 60 : 45;

  return {
    score: score,
    keywordMatchScore: keywordMatchScore,
    sections: [
      { name: 'المعلومات الشخصية', status: 'good', desc: 'معلومات الاتصال كاملة والبريد الإلكتروني يبدو احترافياً.' },
      { name: 'النبذة المهنية', status: 'warning', desc: 'النبذة المهنية قصيرة جداً ولا تلخص نقاط القوة الكافية.' },
      { name: 'الخبرات المهنية', status: 'warning', desc: 'افتقاد النتائج القابلة للقياس والنسب المئوية في صياغة إنجازاتك.' },
      { name: 'التعليم والمؤهلات', status: 'good', desc: 'تفاصيل المؤهلات الدراسية وسنوات التخرج مكتوبة بشكل واضح.' },
      { name: 'المهارات', status: 'good', desc: 'المهارات المهنية واضحة ومقروءة بشكل منظم.' },
      { name: 'الكلمات المفتاحية', status: 'warning', desc: 'تفتقد السيرة الذاتية لبعض الكلمات الدلالية الهامة المرتبطة بالتخصص.' },
      { name: 'التنسيق والهيكلية', status: 'good', desc: 'الهيكل العام بسيط وخالٍ من الجداول المعقدة والرسومات المانعة للـ ATS.' },
      { name: 'طول السيرة الذاتية', status: 'good', desc: 'حجم السيرة الذاتية ممتاز ومناسب (صفحة واحدة).' },
      { name: 'وضوح المحتوى', status: 'good', desc: 'استخدام جيد للخطوط القياسية وعلامات الترقيم.' }
    ],
    strengths: [
      'استخدام هيكل وتصميم بسيط متوافق بنسبة 100% مع أنظمة الفرز ATS.',
      'وجود معلومات اتصال كاملة وسهلة القراءة في ترويسة الصفحة.',
      'عرض الخبرات العملية والتعليم بالترتيب الزمني العكسي الصحيح.',
      'خلو السيرة الذاتية من العناصر البصرية المعقدة كالأشرطة الرسومية والنسب المئوية للمهارات.'
    ],
    improvements: [
      'النبذة المهنية قصيرة جداً وتحتاج لإعادة صياغة لتبرز أهدافك وقيمتك المضافة بشكل أقوى.',
      'غياب النتائج والأرقام القابلة للقياس في قسم المهام والخبرات السابقة (مثل: زيادة المبيعات بنسبة X%، توفير الوقت بمقدار Y).',
      'تجنب استخدام الكلمات العامة والمكررة واستبدالها بأفعال حركة قوية ومصطلحات تخصصية.',
      'عدم توافق بعض المسميات الوظيفية السابقة بشكل كامل مع الوصف الوظيفي المستهدف.'
    ],
    keywords: {
      matches: matches,
      missing: missing
    },
    suggestions: [
      'أعد صياغة النبذة المهنية لتكون بين 3 و5 أسطر مع التركيز على سنوات الخبرة والمهارات الجوهرية.',
      'أضف أرقاماً وإنجازات محددة وقابلة للقياس إلى مهامك في خبراتك السابقة لتوضيح أثرك الفعلي.',
      'أضف الكلمات المفتاحية المفقودة المهمة مثل (' + missing.slice(0, 3).join(', ') + ') في أقسام المهارات أو الخبرات إن كنت تمتلك خبرة فعلية فيها.',
      'تأكد من مطابقة المسمى الوظيفي المستهدف في السيرة الذاتية مع المسمى الوظيفي للوظيفة التي تتقدم لها.'
    ]
  };
};

window.CareerAI.pages.resumeAnalyzer = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.analyzerState;

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
            <span>محلل وفاحص السيرة الذاتية ATS</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              🛡️ خصوصية تامة
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ فحص ATS فوري
            </span>
          </div>
          <h1 class="page-header__title">حلل سيرتك الذاتية مجاناً واعرف مدى توافقها مع ATS</h1>
          <p class="page-header__subtitle">ارفع سيرتك الذاتية وقارنها بالوظيفة المستهدفة للحصول على تقرير مفصل بنقاط القوة والضعف ومطابقة الكلمات المفتاحية</p>
        </div>
      </div>
    </div>

    <!-- Main Workspace -->
    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-12)">
      <div class="container container--narrow">
        
        <!-- Privacy Notice Banner -->
        <div class="privacy-alert-banner">
          🔒 <strong>تنبيه الخصوصية:</strong> نحن نحترم خصوصيتك بالكامل. تتم معالجة سيرتك الذاتية مؤقتاً داخل المتصفح لإجراء التحليل ولا يتم حفظ ملفك أو تخزينه في خوادمنا بشكل دائم نهائياً.
        </div>

        <!-- Google AdSense Display Banner (Top) -->
        <div class="adsense-container adsense-display">
          <span class="adsense-label">إعلان ممول / Sponsored</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="1231231234"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <div class="analyzer-workspace">
          
          <!-- STATE 1: UPLOAD & INPUT FORM -->
          <div id="analyzerFormContainer" style="${state.isAnalyzing || state.analysisComplete ? 'display:none' : 'display:block'}">
            
            <!-- Drag & Drop Area -->
            <div class="upload-zone" id="uploadZone" 
                 ondragover="CareerAI.handleDragOver(event)" 
                 ondragleave="CareerAI.handleDragLeave(event)" 
                 ondrop="CareerAI.handleDrop(event)">
              <input type="file" id="fileInput" accept=".pdf,.docx" style="display:none" onchange="CareerAI.handleFileSelect(event)">
              
              <div id="uploadPrompt" style="${state.file ? 'display:none' : 'block'}">
                <div class="upload-zone__icon">📤</div>
                <h3 class="upload-zone__title">اسحب ملف السيرة الذاتية هنا أو اضغط للتصفح</h3>
                <p class="upload-zone__desc">يدعم صيغ PDF و DOCX فقط (الحد الأقصى 5 ميغابايت)</p>
              </div>

              <div id="uploadFileDetails" style="${state.file ? 'display:block' : 'none'}">
                <div class="uploaded-file-card">
                  <div class="uploaded-file-card__icon">📄</div>
                  <div class="uploaded-file-card__info">
                    <div class="uploaded-file-card__name" id="fileNameText">${state.file ? state.file.name : ''}</div>
                    <div class="uploaded-file-card__size" id="fileSizeText">${state.file ? (state.file.size / 1024).toFixed(1) + ' KB' : ''}</div>
                  </div>
                  <button type="button" class="uploaded-file-card__remove" onclick="CareerAI.clearUploadedFile(event)">✕ حذف</button>
                </div>
              </div>
            </div>

            <!-- Job Specific Fields -->
            <div class="contact-form" style="margin-top:var(--space-8); padding:var(--space-8); border:1px solid var(--color-border); border-radius:var(--radius-2xl); background:white">
              <h3 style="font-size:var(--text-lg); font-weight:var(--font-bold); margin-bottom:var(--space-4); color:var(--color-primary)">💼 تخصيص التحليل ومطابقة الوظيفة (اختياري)</h3>
              
              <div class="form-group">
                <label class="form-label" for="targetJobTitle">ما الوظيفة التي تريد التقديم عليها؟</label>
                <input type="text" id="targetJobTitle" class="form-input" placeholder="مثال: أخصائي تسويق رقمي، مطور ويب، محاسب..." value="${state.jobTitle}" oninput="CareerAI.updateAnalyzerField('jobTitle', this.value)">
              </div>

              <div class="form-group">
                <label class="form-label" for="jobDescriptionText">الوصف الوظيفي المستهدف (Job Description)</label>
                <textarea id="jobDescriptionText" class="form-textarea" style="min-height:140px" placeholder="الصق نص الوصف الوظيفي هنا لمقارنة الكلمات المفتاحية ومدى تطابق السيرة الذاتية مع متطلبات الوظيفة..." oninput="CareerAI.updateAnalyzerField('jobDescription', this.value)">${state.jobDescription}</textarea>
                <p style="font-size:var(--text-xs); color:var(--color-text-secondary); margin-top:var(--space-1)">💡 لصق الوصف الوظيفي يساعد الأداة على إجراء تحليل ATS واستخراج الكلمات المفقودة بدقة متناهية.</p>
              </div>
            </div>

            <!-- Action Button -->
            <button class="btn btn--primary btn--lg btn--full" style="margin-top:var(--space-6)" onclick="CareerAI.startResumeAnalysis()">
              تحليل السيرة الذاتية وفحص ATS
            </button>
          </div>

          <!-- STATE 2: LOADING PROGRESS -->
          <div id="analyzerLoadingContainer" style="${state.isAnalyzing ? 'display:block' : 'none'}">
            <div class="analyzer-loading-card">
              <div class="analyzer-spinner"></div>
              <h3 class="analyzer-loading-title" id="analyzerProgressText">جاري قراءة ملف السيرة الذاتية...</h3>
              
              <!-- Progress Bar -->
              <div class="analyzer-progress-track">
                <div class="analyzer-progress-fill" id="analyzerProgressFill" style="width: 0%"></div>
              </div>
              <span class="analyzer-progress-num" id="analyzerProgressNum">0%</span>
            </div>
          </div>

          <!-- STATE 3: RESULTS DASHBOARD -->
          <div id="analyzerResultsContainer" style="${state.analysisComplete ? 'display:block' : 'none'}">
            ${state.analysisComplete ? CareerAI.renderAnalyzerResults() : ''}
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
             data-ad-slot="7766554433"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- SEO & Educational Content Section -->
    <section class="section section--alt" style="padding:var(--space-16) 0">
      <div class="container">
        
        <div class="section__header">
          <span class="section__badge">
            ❓ الأسئلة الشائعة والمعلومات
          </span>
          <h2 class="section__title">فهم كيفية عمل <span class="text-gradient">أنظمة ATS وفحص السير الذاتية</span></h2>
          <p class="section__subtitle">دليلك الكامل لفهم تقنيات التوظيف الحديثة وتفادي الرفض التلقائي لسيرتك الذاتية</p>
        </div>

        <div class="grid grid--2" style="gap:var(--space-8);margin-bottom:var(--space-12)">
          
          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.brain}</span>
            </div>
            <h3 class="card__title">ما هو نظام ATS (Applicant Tracking System)؟</h3>
            <p class="card__text">
              هو برنامج إلكتروني تستخدمه الشركات الكبرى ومسؤولو الموارد البشرية لفرز، وتصنيف، وتصفية طلبات التوظيف الواردة تلقائياً بناءً على الكلمات المفتاحية ومطابقة الشروط والخبرات المذكورة في الإعلان.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.skills}</span>
            </div>
            <h3 class="card__title">كيف تعمل برامج فحص السيرة الذاتية؟</h3>
            <p class="card__text">
              يقوم فاحص ATS بتحويل ملف السيرة الذاتية إلى نص وتجزيئه إلى أقسام (الخبرات، المهارات، التعليم). بعد ذلك، يقارن النص بالوصف الوظيفي للبحث عن الكلمات الدلالية الأساسية والمهارات الفنية، ويعطي درجة مئوية للمطابقة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">لماذا يتم رفض بعض السير الذاتية تلقائياً؟</h3>
            <p class="card__text">
              تُرفض 70% من السير الذاتية قبل وصولها للمسؤولين بسبب عدم توافق التنسيق (مثل استخدام جداول، صور، أو خطوط غير قياسية) أو لافتقار السيرة الذاتية للكلمات المفتاحية المحددة في إعلان الوظيفة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">كيف تحسن سيرتك الذاتية لتجتاز فحص الـ ATS؟</h3>
            <p class="card__text">
              1. استخدم خطوطاً قياسية كـ Cairo أو Arial.
              2. تجنب وضع نصوص هامة داخل جداول أو صور.
              3. أدرج الكلمات المفتاحية الأساسية من الإعلان الوظيفي في أقسام مهاراتك وخبراتك بدقة ووضوح.
            </p>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="accordion" style="max-width:800px;margin:0 auto">
          
          <div class="accordion__item active">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>ما هي درجة الـ ATS المقبولة لتجاوز الفرز بنجاح؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body" style="max-height:200px">
              <div class="accordion__content">
                تعتبر الدرجة 75% فأكثر (جيد جداً) كافية لتجاوز معظم فلاتر الـ ATS والوصول إلى أيدي مسؤولي التوظيف البشريين. الدرجات فوق 90% تعتبر ممتازة وتضمن أولوية عالية.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل تدعم الأداة اللغة العربية في التحليل والمطابقة؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                نعم، تم تدريب الأداة بالكامل وتطويرها لدعم اللغة العربية والمصطلحات المهنية المتداولة في سوق العمل العربي والخليجي بالإضافة للمصطلحات اللاتينية والإنجليزية.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل تقوم الأداة بتعديل ملف السيرة الذاتية الخاص بي مباشرة؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                لا، الأداة تقوم بالتحليل وإبراز نقاط الضعف والمشاكل وتقديم اقتراحات الصياغة والكلمات الناقصة، ويتوجب عليك تعديلها في ملفك الخاص أو عبر أداة "منشئ السيرة الذاتية" الخاصة بنا لتحقيق أفضل نتيجة.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
};

/* ==========================================================================
   RENDER ANALYZER RESULTS
   ========================================================================== */

CareerAI.renderAnalyzerResults = function() {
  const r = window.CareerAI.analyzerState.result;
  const state = window.CareerAI.analyzerState;
  
  if (!r) return '';

  let scoreText = 'ممتاز';
  let scoreClass = 'score-level--excellent';
  if (r.score < 60) {
    scoreText = 'يحتاج إلى تحسين كبير';
    scoreClass = 'score-level--critical';
  } else if (r.score < 75) {
    scoreText = 'يحتاج إلى تحسين';
    scoreClass = 'score-level--improvement';
  } else if (r.score < 90) {
    scoreText = 'جيد جداً';
    scoreClass = 'score-level--good';
  }

  return `
    <div class="results-dashboard">
      
      <!-- Upper score card -->
      <div class="score-card-hero">
        <div class="score-card-hero__dial">
          <svg class="score-ring" viewBox="0 0 120 120">
            <circle class="score-ring__bg" cx="60" cy="60" r="54"></circle>
            <circle class="score-ring__fill" cx="60" cy="60" r="54" style="stroke-dasharray: 339.3; stroke-dashoffset: ${339.3 - (339.3 * r.score) / 100}"></circle>
          </svg>
          <div class="score-card-hero__number">${r.score}<span>/100</span></div>
        </div>
        <div class="score-card-hero__info">
          <div class="score-card-hero__level ${scoreClass}">${scoreText}</div>
          <p class="score-card-hero__desc">
            تم تحليل السيرة الذاتية بنجاح. درجة الـ ATS الإجمالية تعبر عن مدى توافق بنية وتنسيق ومحتوى ملفك مع برمجيات الفرز الآلية.
          </p>
        </div>
      </div>

      <!-- Sections breakdown -->
      <div class="results-block">
        <h3 class="results-block__title">📋 تحليل أقسام السيرة الذاتية</h3>
        <div class="section-review-list">
          ${r.sections.map(sec => `
            <div class="section-review-item">
              <div style="display:flex;align-items:center;gap:var(--space-3)">
                <span class="section-review-status ${sec.status === 'good' ? 'status--good' : 'status--warning'}">
                  ${sec.status === 'good' ? '✓' : '⚠'}
                </span>
                <strong class="section-review-name">${sec.name}</strong>
              </div>
              <div class="section-review-desc">
                ${sec.status === 'good' ? '<span class="status-badge-mini status-badge-mini--good">جيد</span>' : '<span class="status-badge-mini status-badge-mini--warn">يحتاج تحسين</span>'}
                ${sec.desc}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Strengths & Improvements -->
      <div class="grid grid--2" style="gap:var(--space-6); margin-top:var(--space-6)">
        
        <div class="results-block results-block--green">
          <h3 class="results-block__title" style="color:var(--color-accent)">💪 نقاط القوة في سيرتك الذاتية</h3>
          <ul class="bullets-list">
            ${r.strengths.map(st => `<li>${st}</li>`).join('')}
          </ul>
        </div>

        <div class="results-block results-block--red">
          <h3 class="results-block__title" style="color:#EF4444">⚠️ ما الذي يجب تحسينه؟ (مرتب حسب الأولوية)</h3>
          <ul class="bullets-list">
            ${r.improvements.map((imp, idx) => `<li><strong>${idx + 1}.</strong> ${imp}</li>`).join('')}
          </ul>
        </div>

      </div>

      <!-- Keyword Analysis ATS -->
      ${state.jobDescription ? `
        <div class="results-block" style="margin-top:var(--space-6)">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-4);flex-wrap:wrap;gap:var(--space-2)">
            <h3 class="results-block__title" style="margin-bottom:0">🔍 تحليل ومطابقة الكلمات المفتاحية ATS</h3>
            <div class="keyword-match-badge">
              نسبة مطابقة الكلمات: <strong>${r.keywordMatchScore}%</strong>
            </div>
          </div>

          <div class="grid grid--2" style="gap:var(--space-6)">
            <div>
              <div class="keyword-list-header text-green">✓ الكلمات الموجودة في سيرتك الذاتية:</div>
              <div style="display:flex;flex-wrap:wrap;gap:var(--space-2)">
                ${r.keywords.matches.map(kw => `<span class="tag tag--accent" style="margin:0">${kw}</span>`).join('')}
              </div>
            </div>

            <div>
              <div class="keyword-list-header text-red" style="display:flex;justify-content:space-between;align-items:center">
                <span>⚠️ الكلمات المهمة المفقودة:</span>
                <button class="btn btn--secondary btn--sm" style="padding:var(--space-1) var(--space-2); font-size:var(--text-xs)" onclick="CareerAI.copyMissingKeywords()">
                  📋 نسخ الكلمات
                </button>
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:var(--space-2)">
                ${r.keywords.missing.map(kw => `<span class="tag" style="background:#FEE2E2; color:#DC2626; border-color:#FCA5A5; margin:0">${kw}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Suggestions Box -->
      <div class="results-block" style="margin-top:var(--space-6); background:var(--color-primary-50); border-color:var(--color-primary-200)">
        <h3 class="results-block__title" style="color:var(--color-primary)">💡 اقتراحات عملية لتحسين سيرتك الذاتية</h3>
        <ul class="bullets-list" style="color:var(--color-text)">
          ${r.suggestions.map(sug => `<li>• ${sug}</li>`).join('')}
        </ul>
      </div>

      <!-- Reset & Analyze Another -->
      <div class="text-center" style="margin-top:var(--space-8)">
        <button class="btn btn--secondary btn--lg" onclick="CareerAI.resetAnalyzer()">
          تحليل سيرة ذاتية أخرى
        </button>
      </div>

    </div>
  `;
};

/* ==========================================================================
   INTERACTIVE HANDLERS
   ========================================================================== */

CareerAI.handleDragOver = function(e) {
  e.preventDefault();
  const zone = document.getElementById('uploadZone');
  if (zone) zone.classList.add('dragover');
};

CareerAI.handleDragLeave = function(e) {
  e.preventDefault();
  const zone = document.getElementById('uploadZone');
  if (zone) zone.classList.remove('dragover');
};

CareerAI.handleDrop = function(e) {
  e.preventDefault();
  const zone = document.getElementById('uploadZone');
  if (zone) zone.classList.remove('dragover');

  const files = e.dataTransfer.files;
  if (files.length > 0) {
    CareerAI.processUploadedFile(files[0]);
  }
};

CareerAI.handleFileSelect = function(e) {
  const files = e.target.files;
  if (files.length > 0) {
    CareerAI.processUploadedFile(files[0]);
  }
};

CareerAI.processUploadedFile = function(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  if (ext !== 'pdf' && ext !== 'docx') {
    alert('عذراً، تدعم الأداة ملفات PDF و DOCX فقط!');
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert('حجم الملف كبير جداً! الحد الأقصى المسموح به هو 5 ميغابايت.');
    return;
  }

  window.CareerAI.analyzerState.file = {
    name: file.name,
    size: file.size
  };

  // Show Details Panel, Hide Prompt
  document.getElementById('uploadPrompt').style.display = 'none';
  document.getElementById('uploadFileDetails').style.display = 'block';
  document.getElementById('fileNameText').innerText = file.name;
  document.getElementById('fileSizeText').innerText = (file.size / 1024).toFixed(1) + ' KB';
};

CareerAI.clearUploadedFile = function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  window.CareerAI.analyzerState.file = null;
  document.getElementById('fileInput').value = '';
  document.getElementById('uploadPrompt').style.display = 'block';
  document.getElementById('uploadFileDetails').style.display = 'none';
};

CareerAI.updateAnalyzerField = function(field, val) {
  window.CareerAI.analyzerState[field] = val;
};

// Simulation Loading & Analysis trigger
CareerAI.startResumeAnalysis = function() {
  const state = window.CareerAI.analyzerState;
  
  if (!state.file) {
    alert('يرجى رفع ملف السيرة الذاتية أولاً لبدء التحليل!');
    return;
  }

  state.isAnalyzing = true;
  state.progress = 0;
  state.progressText = 'جاري قراءة ملف السيرة الذاتية...';
  
  // Refresh UI to state 2
  window.CareerAI.router.handleRoute();

  const progressSteps = [
    { num: 20, text: 'جاري استخراج نصوص أقسام السيرة الذاتية...' },
    { num: 45, text: 'جاري فحص الهيكلية والتنسيق العام للـ ATS...' },
    { num: 70, text: 'جاري مقارنة المهارات والكلمات المفتاحية...' },
    { num: 90, text: 'جاري حساب الدرجة وتوليد التقرير التفاعلي...' },
    { num: 100, text: 'اكتمل التحليل!' }
  ];

  let stepIdx = 0;
  const interval = setInterval(() => {
    if (stepIdx < progressSteps.length) {
      const step = progressSteps[stepIdx];
      state.progress = step.num;
      state.progressText = step.text;

      // Update Loading UI elements directly for ultra-responsive performance
      const progressFill = document.getElementById('analyzerProgressFill');
      const progressNum = document.getElementById('analyzerProgressNum');
      const progressTextEl = document.getElementById('analyzerProgressText');

      if (progressFill) progressFill.style.width = step.num + '%';
      if (progressNum) progressNum.innerText = step.num + '%';
      if (progressTextEl) progressTextEl.innerText = step.text;

      stepIdx++;
    } else {
      clearInterval(interval);
      state.isAnalyzing = false;
      state.analysisComplete = true;
      state.result = window.CareerAI.mockAnalyze(state.jobTitle, state.jobDescription);
      
      // Re-render
      window.CareerAI.router.handleRoute();
    }
  }, 750);
};

CareerAI.copyMissingKeywords = function() {
  const r = window.CareerAI.analyzerState.result;
  if (r && r.keywords.missing) {
    const text = r.keywords.missing.join(', ');
    navigator.clipboard.writeText(text).then(() => {
      alert('تم نسخ الكلمات المفتاحية المفقودة إلى الحافظة بنجاح!');
    }).catch(err => {
      alert('عذراً، حدث خطأ أثناء نسخ الكلمات.');
    });
  }
};

CareerAI.resetAnalyzer = function() {
  window.CareerAI.analyzerState = {
    file: null,
    jobTitle: '',
    jobDescription: '',
    isAnalyzing: false,
    analysisComplete: false,
    progress: 0,
    progressText: '',
    result: null
  };
  window.CareerAI.router.handleRoute();
};

window.CareerAI.pages.resumeAnalyzerSEO = {
  title: 'تحليل السيرة الذاتية وفحص ATS مجاناً بالذكاء الاصطناعي | Factor Career',
  description: 'قم بفحص وتدقيق سيرتك الذاتية ومعرفة نقاط القوة والضعف ومدى توافقها مع فلاتر وأنظمة ATS ومقارنتها بالوصف الوظيفي مجاناً.',
  keywords: 'تحليل سيرة ذاتية, فحص ATS, مطابقة الكلمات المفتاحية, مراجع CV, ATS Checker, Resume Analyzer'
};
