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
        <div class="builder-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:18px;padding:1.5rem;margin-bottom:2rem;box-shadow:0 8px 25px rgba(0,0,0,0.25);">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;">
            <span style="font-size:1.3rem;">🎯</span>
            <h3 style="font-size:1.15rem;font-weight:700;margin:0;color:var(--color-text)">
              ${isEn ? 'Specify Target Role & Interview Parameters' : 'حدد بيانات الوظيفة والمستوى المطلوب'}
            </h3>
          </div>

          <div class="iq-setup-grid">
            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Target Job Title *' : 'المسمى الوظيفي المستهدف *'}</label>
              <input type="text" id="iqJobTitle" class="form-input" value="${state.jobTitle || ''}" placeholder="${isEn ? 'e.g. Senior Data Analyst or DevOps Engineer' : 'مثال: مدير مشاريع، مهندس برمجيات، محاسب'}" oninput="CareerAI.updateIQField('jobTitle', this.value)">
            </div>

            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Seniority / Level' : 'المستوى المهني'}</label>
              <select id="iqExpLevel" class="form-input" onchange="CareerAI.updateIQField('experienceLevel', this.value)">
                <option value="junior" ${state.experienceLevel==='junior'?'selected':''}>${isEn ? 'Junior / Entry Level' : 'مبتدئ / خريج جديد'}</option>
                <option value="mid" ${state.experienceLevel==='mid'?'selected':''}>${isEn ? 'Mid-Level (2-5 yrs)' : 'متوسط (2-5 سنوات)'}</option>
                <option value="senior" ${state.experienceLevel==='senior'?'selected':''}>${isEn ? 'Senior / Lead (5+ yrs)' : 'خبير / قائد فريق'}</option>
                <option value="executive" ${state.experienceLevel==='executive'?'selected':''}>${isEn ? 'Executive / Director' : 'مدير تنفيذي / إداري'}</option>
              </select>
            </div>

            <div>
              <button class="btn btn--primary btn--full btn--lg" id="btnGenerateIQ" onclick="CareerAI.startGenerateInterviewQuestions()" style="box-shadow:0 4px 15px rgba(99,102,241,0.35);">
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
    <div style="background:var(--color-bg-card);border:1px solid rgba(99,102,241,0.35);border-radius:20px;padding:2rem;box-shadow:0 12px 35px rgba(0,0,0,0.35);animation:fadeIn 0.4s ease;">
      
      <!-- Top Action Bar with Filter Tabs -->
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;padding-bottom:1rem;border-bottom:1px solid var(--color-border-light);">
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button class="btn btn--sm ${state.filterCategory==='all'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('all')">${isEn ? `All (${state.questions.length})` : `جميع الأسئلة (${state.questions.length})`}</button>
          <button class="btn btn--sm ${state.filterCategory==='behavioral'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('behavioral')">${isEn ? 'Behavioral (STAR)' : 'سلوكية (STAR)'}</button>
          <button class="btn btn--sm ${state.filterCategory==='technical'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('technical')">${isEn ? 'Technical & Domain' : 'تقنية وتخصصية'}</button>
          <button class="btn btn--sm ${state.filterCategory==='hr'?'btn--primary':'btn--secondary'}" onclick="CareerAI.filterIQType('hr')">${isEn ? 'HR & Cultural' : 'شخصية وموقفية'}</button>
        </div>

        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
          <button class="btn btn--accent btn--sm" onclick="CareerAI.copyAllIQText()">📋 ${isEn ? 'Copy All Questions' : 'نسخ جميع الأسئلة'}</button>
          <button class="btn btn--secondary btn--sm" onclick="CareerAI.downloadIQPDF()">📥 PDF</button>
        </div>
      </div>

      <!-- Questions List Accordion -->
      <div class="accordion" style="display:flex;flex-direction:column;gap:1.2rem;">
        ${filtered.map((item, idx) => `
          <div class="accordion__item" style="border:1px solid rgba(99,102,241,0.25);border-radius:14px;overflow:hidden;background:rgba(15,23,42,0.45);box-shadow:0 4px 15px rgba(0,0,0,0.15)">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)" style="padding:1.25rem 1.5rem;font-size:1.02rem;font-weight:700;display:flex;justify-content:space-between;align-items:center;width:100%;text-align:inherit;color:var(--color-text);background:transparent;border:none;cursor:pointer;gap:0.75rem;flex-wrap:wrap;">
              <span style="display:flex;align-items:center;gap:0.75rem;flex:1;min-width:240px;">
                <span style="background:rgba(99,102,241,0.2);color:#a5b4fc;border:1px solid rgba(99,102,241,0.35);border-radius:8px;padding:3px 10px;font-size:0.82rem;font-weight:800">Q${idx + 1}</span>
                <span style="line-height:1.4">${item.question}</span>
              </span>
              <div style="display:flex;align-items:center;gap:0.5rem;">
                <span style="font-size:0.75rem;color:#cbd5e1;background:rgba(255,255,255,0.06);border:1px solid var(--color-border);border-radius:20px;padding:3px 10px">${item.categoryName}</span>
                <span style="font-size:0.9rem;color:var(--color-text-muted);">▼</span>
              </div>
            </button>

            <div class="accordion__body" style="padding:0 1.5rem 1.5rem 1.5rem;">
              
              <!-- Recruiter Intent Box -->
              <div style="background:rgba(99,102,241,0.08);border-left:4px solid #6366F1;padding:0.85rem 1.25rem;border-radius:0 10px 10px 0;margin-bottom:1rem;font-size:0.87rem;color:#cbd5e1;line-height:1.5;">
                <strong style="color:#a5b4fc">🎯 ${isEn ? 'Recruiter Intent / Why this is asked:' : 'الهدف من السؤال ومعايير التقييم:'}</strong> 
                <span style="display:block;margin-top:2px;">${item.intent}</span>
              </div>

              <!-- STAR Model Breakdown Box -->
              <div style="background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.3);padding:1.25rem;border-radius:12px;margin-bottom:1rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
                  <strong style="color:#34d399;font-size:0.92rem;display:flex;align-items:center;gap:6px">
                    🌟 ${isEn ? 'Structured STAR Method Model Answer:' : 'نموذج الإجابة الاحترافية وفق أسلوب STAR:'}
                  </strong>
                  <div style="display:flex;gap:4px;">
                    <span class="star-tag star-tag--s">S</span>
                    <span class="star-tag star-tag--t">T</span>
                    <span class="star-tag star-tag--a">A</span>
                    <span class="star-tag star-tag--r">R</span>
                  </div>
                </div>

                <div style="font-size:0.88rem;color:#e2e8f0;line-height:1.7;white-space:pre-line;">
                  ${item.answer}
                </div>
              </div>

              <!-- Pro Tip & Interactive Practice Timer -->
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);padding:0.75rem 1rem;border-radius:10px;">
                <div style="font-size:0.84rem;color:var(--color-text-muted);display:flex;align-items:center;gap:6px">
                  <span>💡</span>
                  <span><strong>${isEn ? 'Pro Tip:' : 'نصيحة ذهبية:'}</strong> ${item.tip}</span>
                </div>

                <button class="btn btn--ghost btn--sm" style="border:1px solid rgba(99,102,241,0.4);color:#a5b4fc;padding:4px 12px;font-size:0.8rem;" onclick="CareerAI.togglePracticeTimer('timer_${idx}')">
                  ⏱️ ${isEn ? 'Practice Answering (2-Min Timer)' : 'تدريب صوتي (مؤقت دقيقتين)'}
                </button>
              </div>

              <!-- Collapsible 2-Minute Practice Timer Box -->
              <div id="timer_${idx}" style="display:none;margin-top:0.75rem;background:rgba(15,23,42,0.8);border:1px solid rgba(99,102,241,0.4);border-radius:10px;padding:1rem;text-align:center;">
                <div style="font-size:1.35rem;font-weight:800;color:#60A5FA;margin-bottom:0.4rem;" id="timer_display_${idx}">02:00</div>
                <div style="display:flex;justify-content:center;gap:0.5rem;">
                  <button class="btn btn--primary btn--sm" onclick="CareerAI.startTimerCountdown('timer_${idx}', 'timer_display_${idx}')">▶ ${isEn ? 'Start' : 'بدء'}</button>
                  <button class="btn btn--secondary btn--sm" onclick="CareerAI.resetTimerCountdown('timer_${idx}', 'timer_display_${idx}')">⏹ ${isEn ? 'Reset' : 'إعادة'}</button>
                </div>
              </div>

            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
};

// Interactive Practice Timer Logic
CareerAI.timerIntervals = {};
CareerAI.togglePracticeTimer = function(timerId) {
  const el = document.getElementById(timerId);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
};

CareerAI.startTimerCountdown = function(timerBoxId, displayId) {
  if (CareerAI.timerIntervals[displayId]) {
    clearInterval(CareerAI.timerIntervals[displayId]);
  }
  let timeLeft = 120; // 2 minutes
  const disp = document.getElementById(displayId);
  
  CareerAI.timerIntervals[displayId] = setInterval(() => {
    timeLeft--;
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    if (disp) {
      disp.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    if (timeLeft <= 0) {
      clearInterval(CareerAI.timerIntervals[displayId]);
      if (disp) disp.textContent = '🎉 Time Up! Well Done!';
    }
  }, 1000);
};

CareerAI.resetTimerCountdown = function(timerBoxId, displayId) {
  if (CareerAI.timerIntervals[displayId]) {
    clearInterval(CareerAI.timerIntervals[displayId]);
  }
  const disp = document.getElementById(displayId);
  if (disp) disp.textContent = '02:00';
};

CareerAI.toggleAccordion = function(btn) {
  const body = btn.nextElementSibling;
  const arrow = btn.querySelector('span:last-child');
  if (body) {
    const isHidden = body.style.display === 'none';
    body.style.display = isHidden ? 'block' : 'none';
    if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
  }
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
    btn.innerHTML = '⏳ ' + (isEn ? 'Assembling STAR Interview Masterclass...' : 'جاري إعداد الأسئلة ونماذج STAR...');
  }

  setTimeout(() => {
    const role = state.jobTitle;
    
    if (isEn) {
      state.questions = [
        {
          category: 'behavioral',
          categoryName: 'Behavioral & Leadership',
          question: `Can you describe a high-stakes project or conflict you managed as ${role} where things didn't go as planned?`,
          intent: 'Evaluates emotional intelligence, problem-solving agility under pressure, and accountability when handling setbacks.',
          answer: '• Situation: Ahead of a critical product launch, our cross-functional team discovered an unexpected 35% latency regression 10 days before go-live.\n• Task: As lead for this delivery, I needed to triage the bottleneck, realign engineering and client-facing stakeholders, and deliver without slipping our committed deadline.\n• Action: I spearheaded an immediate root-cause war room, established an automated benchmark suite, and deferred non-critical background jobs to sprint 2.\n• Result: We launched on schedule with 99.9% uptime, reduced query latency by 45%, and received executive commendation for transparency.',
          tip: 'Spend 70% of your time emphasizing the strategic "Action" you personally took and quantify the final "Result".'
        },
        {
          category: 'technical',
          categoryName: 'Technical Strategy',
          question: `How do you prioritize technical debt, architecture scalability, and customer feature requests for ${role}?`,
          intent: 'Tests your decision-making frameworks, balance between speed and quality, and business acumen.',
          answer: '• Situation: Our roadmap was overwhelmed by 40+ competing client requests while infrastructure stability needed urgent refactoring.\n• Task: Formulate an objective, transparent prioritization rubric aligned with company ROI.\n• Action: I implemented the RICE scoring model (Reach, Impact, Confidence, Effort) combined with a dedicated 20% engineering budget for tech debt.\n• Result: Decreased sprint churn by 35%, eliminated critical production incidents by 50%, and boosted quarterly release velocity.',
          tip: 'Always refer to established industry frameworks (e.g. RICE, Agile Epics, SLA thresholds).'
        },
        {
          category: 'hr',
          categoryName: 'HR & Cultural Alignment',
          question: 'Why this specific role at our organization, and where do you envision your highest impact in the first 90 days?',
          intent: 'Measures your company research, internal motivation, clarity of purpose, and fast ramp-up capabilities.',
          answer: '• Days 1-30: Comprehensive listening tour, auditing current workflows, and understanding stakeholder pain points.\n• Days 31-60: Delivering quick wins by addressing low-hanging operational inefficiencies.\n• Days 61-90: Presenting a scalable strategic roadmap to compound team performance by at least 20%.\n• Value Match: Your culture of high ownership and continuous iteration directly reflects how I operate best.',
          tip: 'Structure your response into 30-60-90 day milestones to show leadership maturity.'
        }
      ];
    } else {
      state.questions = [
        {
          category: 'behavioral',
          categoryName: 'سلوكي وقيادي (STAR)',
          question: `حدثني عن موقف معقد أو ضغط غير متوقع واجهته في عملك كـ ${role} وكيف تصرفت بنجاح؟`,
          intent: 'قياس الذكاء العاطفي، التصرف تحت وطأة الضغوط، والقدرة على ابتكار حلول سريعة دون المساس بالجودة.',
          answer: '• الموقف (Situation): قبل إطلاق مشروع حيوي بأسبوع، واجه الفريق تحدياً تقنياً غير متوقع هدد موعد التسليم النهائي.\n• المهمة (Task): كان عليّ كمسؤول عن المشروع احتواء الموقف، إعادة توزيع الأولويات، وضمان الالتزام بالجدول الزمني دون إرهاق الفريق.\n• الإجراء (Action): قمت بتنظيم جلسة استجابة سريعة، تقسيم المهام لمسارات متوازية، والتواصل الشفاف مع الإدارة والعملاء لترتيب الأولويات الحرجة أولاً.\n• النتيجة (Result): تم تسليم المشروع في موعده المحدد بنسبة نجاح 100%، وخفض تكاليف الطوارئ بنسبة 20% مع إشادة القيادة بالمرونة العالية.',
          tip: 'كرس معظم وقت إجابتك للتركيز على (الإجراء الشخصي) الذي بادرت به والنتيجة الرقمية الملموسة.'
        },
        {
          category: 'technical',
          categoryName: 'فني واستراتيجي',
          question: `كيف تدير الموازنة بين سرعة الإنجاز وضمان أعلى معايير الجودة والأداء لمهام ${role}؟`,
          intent: 'فحص إلمامك بالمنهجيات الحديثة، وإدارة المخاطر، وحوكمة الأعمال.',
          answer: '• أعتمد على منهجيات العمل الرشيقة (Agile/Scrum) لتقسيم المشاريع المعقدة إلى دورات عمل سريعة وقابلة للقياس المستمر.\n• تطبيق مقاييس الأداء الدقيقة (KPIs) ونظام RICE لتحديد أولويات المهام الأكثر تأثيراً على أهداف المؤسسة.\n• أتمتة الإجراءات الروتينية لتقليل الأخطاء البشرية وتسريع دورة العمل بنسبة تفوق 30%.',
          tip: 'استشهد بأدوات ومنهجيات موثوقة تستخدمها يومياً مثل مؤشرات الأداء وجداول الأولويات.'
        },
        {
          category: 'hr',
          categoryName: 'شخصي وموقفي',
          question: 'ما الذي يجعلك المرشح الأفضل لشغل هذا المنصب في شركتنا تحديداً، وما هي خطتك لأول 90 يوماً؟',
          intent: 'تقييم مدى فهمك لثقافة الشركة ورؤيتها، واستعدادك لتحقيق قيمة مضافة منذ اليوم الأول.',
          answer: '• أول 30 يوماً: الاندماج الكامل في الفريق وفهم منظومة العمل الحالية ونقاط القوة وفرص التحسين.\n• من 30 إلى 60 يوماً: تحقيق إنجازات مبكرة (Quick Wins) من خلال معالجة التحديات التشغيلية البسيطة.\n• من 60 إلى 90 يوماً: طرح مبادرات تطويرية ترفع كفاءة الأداء التشغيلي بنسبة 25% على الأقل.\n• التوافق القيمي: ثقافة شركتكم القائمة على الابتكار وتحمل المسؤولية تلتقي تماماً مع قيمي المهنية الشخصية.',
          tip: 'تقسيم إجابتك لخطة (30-60-90 يوماً) يعطي انطباعاً فورياً باحترافيتك وجاهزيتك العالية.'
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
  }, 650);
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

  const fullText = state.questions.map((q, i) => `Q${i+1}: ${q.question}\nIntent: ${q.intent}\nSTAR Answer:\n${q.answer}\nTip: ${q.tip}\n-------------------`).join('\n\n');
  navigator.clipboard.writeText(fullText).then(() => {
    alert(isEn ? 'All interview questions copied to clipboard!' : 'تم نسخ جميع الأسئلة والإجابات إلى الحافظة بنجاح!');
  });
};

CareerAI.downloadIQPDF = function() {
  const originalTitle = document.title;
  document.title = (window.CareerAI.iqState.jobTitle || 'Interview_Coach') + ' - Interview Prep Guide';
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
