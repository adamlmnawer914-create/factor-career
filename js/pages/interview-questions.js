/* ============================================
   CareerAI - AI Interview Questions & STAR Coach Tool
   Full Bilingual (AR/EN), 100% Free, Instant Sample Data,
   Categorized Behavioral/Technical/HR Questions with STAR Answers
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.iqState = {
  jobTitle: '',
  experienceLevel: 'mid',
  industry: 'tech',
  filterCategory: 'all',
  questions: null,
  isGenerating: false
};

// Sample data for instant one-click generation
window.CareerAI.sampleIQData = {
  jobTitle: 'Senior Product Manager / مدير منتجات أول',
  experienceLevel: 'senior',
  industry: 'tech'
};

window.CareerAI.pages.interviewQuestions = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.iqState;
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
            <span>${isEn ? 'Interview Coach' : 'مدرب أسئلة المقابلات'}</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || icons.rocket}</span>
              ${isEn ? 'AI STAR Method Coach' : 'نموذج STAR للإجابة النموذجية'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ ${isEn ? '100% Free' : 'مجاني 100%'}
            </span>
          </div>
          <h1 class="page-header__title">${isEn ? 'AI Job Interview Questions & STAR Coach' : 'مدرب ومولد أسئلة المقابلات الوظيفية بالذكاء الاصطناعي'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Generate realistic interview questions and model STAR-method answers tailored to your specific role and industry.' : 'تدرّب على أسئلة المقابلات السلوكية والتقنية الخاصة بمجالك مع إجابات نموذجية وفق منهجية STAR الاحترافية.'}</p>
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

    <!-- Main Interview Workspace -->
    <section class="section" style="padding-top:var(--space-4);padding-bottom:var(--space-12)">
      <div class="container">

        <!-- Top Instant Action Bar -->
        <div class="builder-actions-bar" style="background:rgba(30,41,59,0.7);padding:1rem;border-radius:12px;border:1px solid rgba(99,102,241,0.25);margin-bottom:1.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn--accent btn--sm" onclick="CareerAI.loadSampleIQ()" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
              ⚡ ${isEn ? 'Try Sample Role (1-Click)' : '⚡ تجربة نموذج وظيفة جاهز فوراً'}
            </button>
            <button class="btn btn--ghost btn--sm" style="color:#f87171" onclick="CareerAI.resetIQForm()">
              🗑️ ${isEn ? 'Reset' : 'إعادة ضبط'}
            </button>
          </div>
          <div style="color:var(--color-text-muted);font-size:0.85rem;">
            💡 ${isEn ? 'Comprehensive answers with Situation, Task, Action & Result' : 'إجابات نموذجية مدعومة بمنهجية STAR'}
          </div>
        </div>

        <!-- Role Setup Box -->
        <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;margin-bottom:2rem;">
          <h3 style="font-size:1.15rem;font-weight:700;margin-bottom:1rem;color:var(--color-text)">
            ${isEn ? 'Specify Target Role & Interview Criteria' : 'حدد بيانات الوظيفة والمستوى المطلوب'}
          </h3>

          <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:1rem;align-items:end;">
            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Target Job Title *' : 'المسمى الوظيفي المستهدف *'}</label>
              <input type="text" id="iqJobTitle" class="form-input" value="${state.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Data Analyst or DevOps Engineer' : 'مثال: مدير مشاريع، مهندس برمجيات، محاسب'}" oninput="CareerAI.updateIQField('jobTitle', this.value)">
            </div>

            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Experience Level' : 'المستوى المهني'}</label>
              <select id="iqExpLevel" class="form-input" onchange="CareerAI.updateIQField('experienceLevel', this.value)">
                <option value="junior" ${state.experienceLevel==='junior'?'selected':''}>${isEn ? 'Junior / Entry Level' : 'مبتدئ / خريج جديد'}</option>
                <option value="mid" ${state.experienceLevel==='mid'?'selected':''}>${isEn ? 'Mid-Level (2-5 yrs)' : 'متوسط (2-5 سنوات)'}</option>
                <option value="senior" ${state.experienceLevel==='senior'?'selected':''}>${isEn ? 'Senior / Lead (5+ yrs)' : 'خبير / قائد فريق'}</option>
              </select>
            </div>

            <div>
              <button class="btn btn--primary btn--full" id="btnGenerateIQ" onclick="CareerAI.startGenerateInterviewQuestions()" style="box-shadow:0 4px 15px rgba(99,102,241,0.35);">
                🎯 ${isEn ? 'Generate Questions' : 'توليد الأسئلة والإجابات'}
              </button>
            </div>
          </div>
        </div>

        <!-- Generated Questions Dashboard -->
        <div id="iqQuestionsDashboard">
          ${state.questions ? CareerAI.renderIQQuestions() : ''}
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

        ${window.CareerAI.components.renderOtherTools('interview-questions')}
      </div>
    </section>
  `;
};

CareerAI.renderIQQuestions = function() {
  const state = window.CareerAI.iqState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!state.questions || !state.questions.length) return '';

  const filtered = state.filterCategory === 'all' 
    ? state.questions 
    : state.questions.filter(q => q.category === state.filterCategory);

  return `
    <div style="background:var(--color-bg-card);border:1px solid rgba(99,102,241,0.3);border-radius:18px;padding:2rem;box-shadow:0 10px 30px rgba(0,0,0,0.25);animation:fadeIn 0.4s ease;">
      
      <!-- Top Action Bar -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--color-border-light);">
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button class="btn btn--sm ${state.filterCategory==='all'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('all')">${isEn ? 'All (10)' : 'جميع الأسئلة (10)'}</button>
          <button class="btn btn--sm ${state.filterCategory==='behavioral'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('behavioral')">${isEn ? 'Behavioral' : 'سلوكية (Behavioral)'}</button>
          <button class="btn btn--sm ${state.filterCategory==='technical'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('technical')">${isEn ? 'Technical' : 'تقنية وفنية'}</button>
          <button class="btn btn--sm ${state.filterCategory==='hr'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('hr')">${isEn ? 'HR & Situational' : 'شخصية وموقفية'}</button>
        </div>

        <div style="display:flex;gap:0.5rem;">
          <button class="btn btn--accent btn--sm" onclick="CareerAI.copyAllIQText()">📋 ${isEn ? 'Copy All' : 'نسخ الكل'}</button>
          <button class="btn btn--secondary btn--sm" onclick="CareerAI.downloadIQPDF()">📥 PDF</button>
        </div>
      </div>

      <!-- Questions List Accordion -->
      <div class="accordion" style="display:flex;flex-direction:column;gap:1rem;">
        ${filtered.map((item, idx) => `
          <div class="accordion__item" style="border:1px solid var(--color-border-light);border-radius:12px;overflow:hidden;background:rgba(15,23,42,0.4)">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)" style="padding:1.25rem;font-size:1rem;font-weight:700;display:flex;justify-content:space-between;align-items:center;width:100%;text-align:inherit;color:var(--color-text);background:transparent;border:none;cursor:pointer;">
              <span style="display:flex;align-items:center;gap:0.75rem;">
                <span style="background:rgba(99,102,241,0.2);color:#a5b4fc;border-radius:6px;padding:2px 8px;font-size:0.8rem">Q${idx + 1}</span>
                <span>${item.question}</span>
              </span>
              <span style="font-size:0.8rem;color:var(--color-text-muted);border:1px solid var(--color-border);border-radius:4px;padding:2px 8px">${item.categoryName}</span>
            </button>
            <div class="accordion__body" style="padding:0 1.25rem 1.25rem 1.25rem;">
              <div style="background:rgba(99,102,241,0.06);border-left:3px solid #6366F1;padding:0.75rem 1rem;border-radius:0 8px 8px 0;margin-bottom:1rem;font-size:0.86rem;color:#cbd5e1">
                <strong>🎯 ${isEn ? 'Why interviewers ask this:' : 'لماذا يسأل المقابل هذا السؤال:'}</strong> ${item.intent}
              </div>

              <div style="background:rgba(16,185,129,0.06);border-left:3px solid #10B981;padding:0.75rem 1rem;border-radius:0 8px 8px 0;margin-bottom:0.75rem;">
                <strong style="color:#34d399;font-size:0.88rem">🌟 ${isEn ? 'STAR Model Sample Answer:' : 'نموذج الإجابة بطريقة STAR:'}</strong>
                <p style="font-size:0.85rem;color:#e2e8f0;margin:0.5rem 0 0 0;line-height:1.6;white-space:pre-line;">${item.answer}</p>
              </div>

              <div style="font-size:0.82rem;color:var(--color-text-muted);display:flex;gap:1rem;margin-top:0.5rem">
                <span>💡 <strong>${isEn ? 'Pro Tip:' : 'نصيحة ذهبية:'}</strong> ${item.tip}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
};

// Handlers & Question Generation Logic
CareerAI.updateIQField = function(field, val) {
  window.CareerAI.iqState[field] = val;
};

CareerAI.loadSampleIQ = function() {
  const sample = window.CareerAI.sampleIQData;
  window.CareerAI.iqState.jobTitle = sample.jobTitle;
  window.CareerAI.iqState.experienceLevel = sample.experienceLevel;

  const inTitle = document.getElementById('iqJobTitle');
  const selExp = document.getElementById('iqExpLevel');

  if (inTitle) inTitle.value = sample.jobTitle;
  if (selExp) selExp.value = sample.experienceLevel;

  CareerAI.startGenerateInterviewQuestions();
};

CareerAI.startGenerateInterviewQuestions = function() {
  const state = window.CareerAI.iqState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  if (!state.jobTitle) {
    alert(isEn ? 'Please enter a target job title.' : 'يرجى إدخال المسمى الوظيفي المستهدف.');
    return;
  }

  const btn = document.getElementById('btnGenerateIQ');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '⏳ ' + (isEn ? 'Generating with AI...' : 'جاري إعداد الأسئلة والإجابات...');
  }

  setTimeout(() => {
    const role = state.jobTitle;
    
    if (isEn) {
      state.questions = [
        {
          category: 'behavioral',
          categoryName: 'Behavioral',
          question: `Tell me about a time you managed a high-stakes conflict or challenging milestone as ${role}.`,
          intent: 'Evaluates your conflict resolution, leadership under pressure, and emotional intelligence.',
          answer: '• Situation: During a major product release with tight deadlines, key stakeholders disagreed on core scope priorities.\n• Task: As lead, I had to align engineering, design, and executive leadership to ensure on-time delivery without burning out the team.\n• Action: I organized an emergency alignment workshop, established data-backed decision frameworks, and reprioritized deliverables into phased sprints.\n• Result: We delivered the MVP 2 days ahead of schedule with 99.8% uptime and zero regressions.',
          tip: 'Focus heavily on the "Action" and quantifiable "Result" steps.'
        },
        {
          category: 'technical',
          categoryName: 'Technical & Strategy',
          question: `How do you prioritize competing technical demands and feature requests for ${role}?`,
          intent: 'Tests your strategic decision-making, metric-driven mindset, and ROI prioritization.',
          answer: '• Situation: We received over 50 client requests while our team had capacity for only 15.\n• Task: Develop an objective prioritization methodology.\n• Action: I implemented the RICE scoring model (Reach, Impact, Confidence, Effort) and conducted customer impact interviews.\n• Result: We increased user retention by 28% and reduced sprint churn by 40%.',
          tip: 'Always name-drop structured frameworks like RICE, Agile, or OKRs.'
        },
        {
          category: 'hr',
          categoryName: 'HR & Motivation',
          question: 'Why are you the best fit for this role and our organization?',
          intent: 'Checks culture fit, company research, and personal value proposition.',
          answer: '• Combined Expertise: I bring hands-on domain experience matched with a relentless focus on business outcomes.\n• Cultural Alignment: Your culture of autonomy and high standards mirrors my personal work ethos.\n• Proven Track Record: Consistently delivered 30%+ efficiency gains in previous roles.',
          tip: 'Show genuine passion and reference specific company goals.'
        }
      ];
    } else {
      state.questions = [
        {
          category: 'behavioral',
          categoryName: 'سلوكي (Behavioral)',
          question: `حدثني عن موقف واجهت فيه تحدياً معقداً أو ضغطاً شديداً في عملك كـ ${role} وكيف تصرفت؟`,
          intent: 'قياس قدرتك على حل المشكلات تحت الضغط والعمل بروح الفريق والمرونة المهنية.',
          answer: '• الموقف (Situation): خلال تسليم مشروع استراتيجي، طرأت تعديلات مفاجئة قبل الموعد النهائي بأسبوع.\n• المهمة (Task): كان عليّ إعادة جدولة المهام وتوزيع المسؤوليات دون المساس بجودة التسليم.\n• الإجراء (Action): قمت بعقد جلسة عصف ذهني سريعة، تقسيم العمل لمراحل مركزة، والتواصل المستمر مع الإدارة والعميل.\n• النتيجة (Result): تم تسليم المشروع في موعده المحدد مع إشادة من العميل وتوفير 15% من التكلفة المتوقعة.',
          tip: 'ركز على الإجراءات العملية التي اتخذتها أنت شخصياً بالأرقام والنتائج.'
        },
        {
          category: 'technical',
          categoryName: 'تقني وتخصصي',
          question: `ما هي الاستراتيجيات والأدوات التي تعتمد عليها لضمان نجاح مهامك كـ ${role}؟`,
          intent: 'فحص إلمامك بأحدث الأدوات والمنهجيات الحديثة في تخصصك.',
          answer: '• أعتمد على منهجيات العمل الرشيقة (Agile/Scrum) لضمان سرعة الإنجاز ومرونة التعديل.\n• أستخدم أدوات قياس الأداء (KPIs) وتحليل البيانات لاتخاذ قرارات مدروسة ومبنية على أرقام واقعية.\n• تطبيق أفضل ممارسات الجودة والتحسين المستمر (Continuous Improvement).',
          tip: 'اذكر أدوات حقيقية تستخدمها يومياً في مجالك المهني.'
        },
        {
          category: 'hr',
          categoryName: 'شخصي وموقفي',
          question: 'لماذا ترى نفسك المرشح الأنسب للانضمام إلى شركتنا في هذه الوظيفة؟',
          intent: 'تقييم مدى معرفتك بالشركة وتوافقك مع ثقافتها المؤسسية ورؤيتها.',
          answer: '• لأن خبراتي المهنية السابقة تتقاطع مباشرة مع المتطلبات والتحديات التي تسعى شركتكم لحلها.\n• شغفي بالتطوير المستمر وقدرتي المثبتة على تحقيق عوائد ملموسة للشركة وفريق العمل.\n• إيماني برؤية الشركة ورغبتي في بناء مسيرة طويلة الأمد تسهم في نموها.',
          tip: 'اربط بين نقاط قوتك وأهداف الشركة المستقبلية بذكاء وثقة.'
        }
      ];
    }

    if (btn) {
      btn.disabled = false;
      btn.innerHTML = '🎯 ' + (isEn ? 'Generate Questions' : 'توليد الأسئلة والإجابات');
    }

    const resEl = document.getElementById('iqQuestionsDashboard');
    if (resEl) {
      resEl.innerHTML = CareerAI.renderIQQuestions();
      resEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 600);
};

CareerAI.filterIQType = function(type) {
  window.CareerAI.iqState.filterCategory = type;
  const resEl = document.getElementById('iqQuestionsDashboard');
  if (resEl) resEl.innerHTML = CareerAI.renderIQQuestions();
};

CareerAI.copyAllIQText = function() {
  const state = window.CareerAI.iqState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (!state.questions) return;

  const fullText = state.questions.map((q, i) => `Q${i+1}: ${q.question}\nIntent: ${q.intent}\nAnswer: ${q.answer}\nTip: ${q.tip}\n-------------------`).join('\n\n');
  navigator.clipboard.writeText(fullText).then(() => {
    alert(isEn ? 'All interview questions copied to clipboard!' : 'تم نسخ جميع الأسئلة والإجابات إلى الحافظة بنجاح!');
  });
};

CareerAI.downloadIQPDF = function() {
  const originalTitle = document.title;
  document.title = (window.CareerAI.iqState.jobTitle || 'Interview') + ' - Interview Prep';
  window.print();
  setTimeout(() => { document.title = originalTitle; }, 1000);
};

CareerAI.resetIQForm = function() {
  window.CareerAI.iqState = {
    jobTitle: '',
    experienceLevel: 'mid',
    industry: 'tech',
    filterCategory: 'all',
    questions: null,
    isGenerating: false
  };

  const inTitle = document.getElementById('iqJobTitle');
  const resEl = document.getElementById('iqQuestionsDashboard');

  if (inTitle) inTitle.value = '';
  if (resEl) resEl.innerHTML = '';
};

window.CareerAI.pages.interviewQuestionsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI Job Interview Questions & STAR Coach | Factor Career',
      description: 'Practice behavioral, technical, and situational job interview questions tailored to any position with AI STAR model answers.',
      keywords: 'Interview Questions, STAR Interview Method, Job Interview Coach, AI Interview Prep, Factor Career'
    };
  }
  return {
    title: 'مدرب ومولد أسئلة المقابلات الوظيفية بالذكاء الاصطناعي مجاناً | فكتور كارير',
    description: 'تدرّب على أسئلة المقابلات الوظيفية السلوكية والفنية مع إجابات نموذجية وفق أسلوب STAR لضمان التفوق والحصول على الوظيفة.',
    keywords: 'أسئلة المقابلات الشخصية, نموذج STAR, التحضير للمقابلة الوظيفية, أسئلة وإجابات المقابلة, Factor Career'
  };
};
