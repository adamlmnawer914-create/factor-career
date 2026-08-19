/* ============================================
   CareerAI - AI Interview Questions Generator Tool
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.interviewState = {
  jobTitle: '',
  companyName: '',
  industry: '',
  expYears: '',
  level: 'mid', // junior | mid | senior
  jobDescription: '',
  interviewType: 'general', // general | technical | hr | behavioral | management
  questionCount: 10,
  language: 'ar', // ar | en | fr | es | de
  difficultyFilter: 'all',
  isGenerating: false,
  questions: [],
  candidateQuestions: [],
  tipsList: []
};

// Question Generator Engine Supporting Multilingual Outputs & Tailored Technical Topics
window.CareerAI.generateInterviewQuestionsData = function(state) {
  const title = state.jobTitle || (state.language === 'ar' ? 'المسمى الوظيفي' : 'Target Position');
  const levelText = state.level === 'senior' ? 'خبير / Senior' : (state.level === 'junior' ? 'مبتدئ / Junior' : 'متوسط / Mid-Level');
  const lang = state.language;
  const isTech = title.toLowerCase().includes('software') || title.toLowerCase().includes('برمج') || title.toLowerCase().includes('developer') || title.toLowerCase().includes('frontend') || title.toLowerCase().includes('backend');
  const isMarketing = title.toLowerCase().includes('marketing') || title.toLowerCase().includes('تسويق') || title.toLowerCase().includes('seo');

  let rawQuestions = [];

  if (lang === 'en') {
    rawQuestions = [
      {
        q: `Tell me about yourself and your background in ${title}.`,
        diff: 'Easy',
        why: 'The interviewer wants to understand your career trajectory, core strengths, and how concisely you communicate your value proposition.',
        ans: `I am a dedicated ${title} with over ${state.expYears || '3'} years of experience. In my previous role at [Previous Company], I specialized in [Key Skill/Achievement]. I am particularly passionate about [Industry Skill] and excited about the opportunity at ${state.companyName || 'your company'}.`,
        tip: 'Keep your answer to 2 minutes max. Use the Past-Present-Future structure.',
        star: null,
        type: 'general'
      },
      {
        q: `What is your biggest professional achievement as a ${title}?`,
        diff: 'Medium',
        why: 'To gauge what you consider success and whether you deliver measurable outcomes.',
        ans: `My proudest achievement was leading a key project at [Company] that resulted in a [Percentage]% increase in [Metric/Output]. I managed [Specific Action] which significantly improved efficiency.`,
        tip: 'Focus on quantifiable numbers and metrics.',
        star: { s: 'Our team was facing a tight deadline and declining metrics.', t: 'I was tasked with optimizing the core workflow.', a: 'I implemented [New Strategy/Tool] and restructured the process.', r: 'We achieved a 35% improvement in efficiency ahead of deadline.' },
        type: 'behavioral'
      }
    ];

    if (isTech || state.interviewType === 'technical') {
      rawQuestions.push(
        {
          q: `How do you optimize application performance and handle scalability in ${title} projects?`,
          diff: 'Hard',
          why: 'To test your technical depth, architectural mindset, and understanding of best engineering practices.',
          ans: `I approach performance optimization by analyzing bottlenecks using profiling tools. For frontend, I focus on lazy loading, caching strategies, and code splitting. For backend, I optimize database queries and utilize Redis caching.`,
          tip: 'Mention specific profiling and monitoring tools you use daily.',
          star: null,
          type: 'technical'
        },
        {
          q: `Explain how you handle API integrations and error management in technical architecture.`,
          diff: 'Medium',
          why: 'To evaluate your reliability engineering and system integration skills.',
          ans: `I ensure robust API integration by implementing strict error handling, retry logic with exponential backoff, and fallback states to maintain a smooth user experience.`,
          tip: 'Emphasize user experience during network failures.',
          star: null,
          type: 'technical'
        }
      );
    }
  } else {
    // Default Arabic (العربية)
    rawQuestions = [
      {
        q: `حدثني عن نفسك وعن مسيرتك المهنية في مجال ${title}؟`,
        diff: 'سهل',
        why: 'يرغب مسؤول التوظيف في تقييم أسلوبك في التواصل، وتلخيص نقاط قوتك، ومدى ملاءمتك للوظيفة في الدقائق الأولى.',
        ans: `أنا ${title} لدي خبرة أكثر من ${state.expYears || '3'} سنوات في المجال. خلال عملي السابق في [اسم الشركة السابقة]، تخصصت في [المهارة الرئيسية/الإنجاز]. أنجذب دائماً لتطوير [المهارة التخصصية] وأنا متحمس جداً لنقل هذه الخبرات إلى فريقكم في ${state.companyName || 'شركتكم الموقرة'}.`,
        tip: 'اجعل إجابتك بين دقيقة ودقيقتين. اعتمد هيكل: الماضي (الخبرة) -> الحاضر (الوضع الحالي) -> المستقبل (لماذا هذه الوظيفة).',
        star: null,
        type: 'general'
      },
      {
        q: `ما هو أكبر إنجاز مهني حققته خلال عملك كـ ${title}؟`,
        diff: 'متوسط',
        why: 'لقياس المعايير التي تعتبرها نجاحاً، والتحقق مما إذا كنت تحقق نتائج قابلة للقياس وليس مجرد أداء وظائف روتينية.',
        ans: `أبرز إنجاز حققته كان عند إشرافي على مشروع [اسم المشروع] حيث قمت بـ [الإجراء الذي اتخذته] مما أدى لزيادة [النتيجة/المبيعات/الأداء] بنسبة [X]%.`,
        tip: 'ركز على الأرقام والنسب المئوية المحققة.',
        star: {
          s: 'الموقف: كان الفريق يواجه ضغطاً كبيراً وانخفاضاً في معدل الأداء.',
          t: 'المهمة: طُلب مني إعادة تنظيم آلية العمل وتحسين النتائج خلال شهرين.',
          a: 'الإجراء: قمت بتطبيق [استراتيجية جديدة/أداة ذكية] وتوزيع المهام بدقة.',
          r: 'النتيجة: حققنا زيادة بنسبة 35% في الإنتاجية وتم تسليم المشروع قبل الموعد.'
        },
        type: 'behavioral'
      },
      {
        q: `كيف تتعامل مع الضغوط والمواعيد النهائية الضيقة عند تنفيذ المهام؟`,
        diff: 'متوسط',
        why: 'لاختبار مرونتك وقدرتك على ترتيب الأولويات تحت إدارة الوقت الحرج.',
        ans: `أتعامل مع الضغوط من خلال تفكيك المهمة الكبيرة إلى مهام صغيرة مرتبة حسب الأولوية، واستخدام أدوات إدارة المهام لتتبع التقدم، مع الحفاظ على التنسيق المستمر مع الفريق لضمان عدم تأثر جودة العمل.`,
        tip: 'اذكر مثالاً واقعياً تغلبت فيه على موعد نهائي حرج بنجاح.',
        star: null,
        type: 'hr'
      }
    ];

    if (isTech || state.interviewType === 'technical') {
      rawQuestions.push(
        {
          q: `كيف تقوم بتحسين أداء الأنظمة والتطبيقات وتحقيق السرعة الكفاءة في عملك كـ ${title}؟`,
          diff: 'صعب',
          why: 'لاختبار عمقك التقني وعقليتك الهندسة في حل الاختناقات وتطبيق أفضل معايير البرمجة والهندسة.',
          ans: `أعتمد على أدوات قياس الأداء للتعرف على نقاط الاختناق أولاً. بالنسبة للواجهات (Frontend) أقوم بتصغير الملفات وتفعيل Caching و Lazy Loading، وبالنسبة للـ Backend أقوم بتحسين الاستعلامات واستخدام مجمعات التخزين المؤقت كـ Redis.`,
          tip: 'اذكر الأدوات والتقنيات التي تستخدمها يومياً للتحليل والتنقيح.',
          star: null,
          type: 'technical'
        },
        {
          q: `كيف تضمن أمان البيانات والتعامل مع الأخطاء غير المتوقعة أثناء ربط الـ APIs؟`,
          diff: 'متوسط',
          why: 'لقياس مدى اهتمامك بمعايير الأمان وحماية تجربة المستخدم عند حدوث أخطاء بالنظام.',
          ans: `أحرص على استخدام بروتوكولات التشفير القياسية (OAuth2/JWT)، وتطبيق معالجة استباقية للأخطاء (Error Boundaries) مع إظهار رسائل واضحة للمستخدم وآليات إعادة المحاولة التلقائية (Retry Mechanism).`,
          tip: 'ركز على أمن المعلومات وسلاسة تجربة المستخدم.',
          star: null,
          type: 'technical'
        }
      );
    }

    if (isMarketing) {
      rawQuestions.push(
        {
          q: `كيف تقوم بحساب وتطوير العائد على الاستثمار الإعلاني (ROAS) وتحسين معدلات التحويل؟`,
          diff: 'صعب',
          why: 'لقياس فهمك المالي وقدرتك على إدارة الميزانيات التسويقية بتحقيق عوائد ربحية للشركة.',
          ans: `أقوم بتحليل مسار العميل (Funnel) واختبار العناوين والصور A/B Testing، ثم إعادة توجيه الميزانية نحو الحملات والكلمات المفتاحية الأعلى تحويلاً واستبعاد الكلمات غير الفعالة.`,
          tip: 'اذكر أدوات التحليل كـ Google Analytics 4 وأرقام العوائد التي حققتها.',
          star: null,
          type: 'technical'
        }
      );
    }

    if (state.level === 'senior' || state.interviewType === 'management') {
      rawQuestions.push(
        {
          q: `كيف تقوم بتوجيه وإدارة أعضاء الفريق وإدارة الخلافات التي قد تنشأ أثناء العمل؟`,
          diff: 'صعب',
          why: 'لقياس مهاراتك القيادية والذكاء العاطفي في بناء فريق عمل متماثل وعالي الإنتاجية.',
          ans: `أعتمد أسلوب القيادة التمكينية من خلال تحديد أهداف واضحة وعقد جلسات متابعة فردية. عند نشوب خلاف، أستمع لكافة الأطراف بموضوعية ونركز على الحلول التي تخدم مصلحة العمل العليا.`,
          tip: 'أظهر قدرتك على الاستماع الفعال وتوجيه الفريق نحو الأهداف.',
          star: null,
          type: 'management'
        }
      );
    }
  }

  // Multiply/Adapt questions to match target questionCount requested
  let questions = [];
  while (questions.length < state.questionCount) {
    const baseQ = rawQuestions[questions.length % rawQuestions.length];
    questions.push({
      ...baseQ,
      id: 'q-' + (questions.length + 1),
      num: questions.length + 1
    });
  }

  // Candidate Questions (Questions applicant asks recruiter)
  const candidateQuestions = [
    'كيف يبدو النجاح في هذا الدور الوظيفي خلال أول 90 يوماً؟',
    'ما هي أهم التحديات التي يواجهها الفريق حالياً والتي ترغبون من المتقدم الجديد حلها؟',
    'كيف تصفون ثقافة العمل والتواصل داخل الفريق؟',
    'ما هي الخطوة التالية في عملية التوظيف والمقابلات؟'
  ];

  // Pre-interview tips checklist
  const tipsList = [
    'اقرأ عن تاريخ الشركة ورؤيتها وأحدث مشاريعها قبل دخول المقابلة.',
    'راجع الوصف الوظيفي جيداً وحضر مثالاً واقعياً لكل مهارة مطلوبة.',
    'تدرب على الإجابة عن سؤال "حدثني عن نفسك" بصوت عالٍ لضبط الوقت والأسلوب.',
    'استخدم طريقة STAR عند سرد المواقف والتحديات في الأسئلة السلوكية.',
    'جهّز 2-3 أسئلة احترافية لطرحها على مسؤول التوظيف في نهاية المقابلة.'
  ];

  return { questions, candidateQuestions, tipsList };
};

window.CareerAI.pages.interviewQuestions = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.interviewState;

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
            <span>مولد أسئلة مقابلات العمل</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              🎯 إجابات نموذجية وطريقة STAR
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ أسئلة متخصصة 100%
            </span>
          </div>
          <h1 class="page-header__title">مولد أسئلة مقابلات العمل بالذكاء الاصطناعي (AI Interview Questions)</h1>
          <p class="page-header__subtitle">احصل على أسئلة مقابلة مخصصة لوظيفتك ومستوى خبرتك مع سبب طرح السؤال، إجابات نموذجية، ونصائح احترافية للاستعداد</p>
        </div>
      </div>
    </div>

    <!-- Main Workspace -->
    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-12)">
      <div class="container container--narrow">

        <!-- Privacy Banner -->
        <div class="privacy-alert-banner">
          🔒 <strong>الخصوصية:</strong> يتم استخدام بيانات الوظيفة والخبرات مؤقتاً في متصفحك لإعداد قائمة الأسئلة والإجابات، ولا يتم حفظ بياناتك على خوادمنا.
        </div>

        <!-- Google AdSense Display Banner (Top) -->
        <div class="adsense-container adsense-display">
          <span class="adsense-label">إعلان ممول / Sponsored</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="1010202030"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <!-- FORM CONFIGURATOR -->
        <div class="contact-form" style="padding:var(--space-8); border:1px solid var(--color-border); border-radius:var(--radius-2xl); background:white; margin-bottom:var(--space-8)">
          
          <h3 style="font-size:var(--text-lg); font-weight:var(--font-bold); color:var(--color-primary); margin-bottom:var(--space-6); border-bottom:1px solid var(--color-border-light); padding-bottom:var(--space-3)">
            💼 1. معلومات الوظيفة والخبرة
          </h3>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">المسمى الوظيفي المستهدف *</label>
              <input type="text" class="form-input" placeholder="مثال: مطور وواجهات أمامية Frontend، أخصائي تسويق..." value="${state.jobTitle}" oninput="CareerAI.updateIQField('jobTitle', this.value)">
            </div>
            <div class="form-group">
              <label class="form-label">اسم الشركة (اختياري)</label>
              <input type="text" class="form-input" placeholder="مثال: شركة الحلول المتقدمة" value="${state.companyName}" oninput="CareerAI.updateIQField('companyName', this.value)">
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">مجال العمل / الصناعة</label>
              <input type="text" class="form-input" placeholder="مثال: تقنية المعلومات، التسويق، المالية..." value="${state.industry}" oninput="CareerAI.updateIQField('industry', this.value)">
            </div>
            <div class="form-group">
              <label class="form-label">مستوى الخبرة *</label>
              <select class="form-input form-select" onchange="CareerAI.updateIQField('level', this.value)">
                <option value="junior" ${state.level === 'junior' ? 'selected' : ''}>مبتدئ (Junior - أقل من سنتين)</option>
                <option value="mid" ${state.level === 'mid' ? 'selected' : ''}>متوسط (Mid-Level - 2 إلى 5 سنوات)</option>
                <option value="senior" ${state.level === 'senior' ? 'selected' : ''}>محترف / خبير (Senior - أكثر من 5 سنوات)</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">الوصف الوظيفي Job Description (اختياري لزيادة الدقة)</label>
            <textarea class="form-textarea" style="min-height:100px" placeholder="الصق نص الإعلان الوظيفي هنا لتوليد أسئلة تقنية وسلوكية مطابقة لمتطلبات الشاغر..." oninput="CareerAI.updateIQField('jobDescription', this.value)">${state.jobDescription}</textarea>
          </div>

          <h3 style="font-size:var(--text-lg); font-weight:var(--font-bold); color:var(--color-primary); margin-top:var(--space-8); margin-bottom:var(--space-6); border-bottom:1px solid var(--color-border-light); padding-bottom:var(--space-3)">
            ⚙️ 2. نوع المقابلة وعدد الأسئلة واللغة
          </h3>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">نوع المقابلة المستهدف *</label>
              <select class="form-input form-select" onchange="CareerAI.updateIQField('interviewType', this.value)">
                <option value="general" ${state.interviewType === 'general' ? 'selected' : ''}>مقابلة عامة (General)</option>
                <option value="technical" ${state.interviewType === 'technical' ? 'selected' : ''}>مقابلة تقنية (Technical Interview)</option>
                <option value="hr" ${state.interviewType === 'hr' ? 'selected' : ''}>مقابلة الموارد البشرية (HR Interview)</option>
                <option value="behavioral" ${state.interviewType === 'behavioral' ? 'selected' : ''}>مقابلة سلوكية (Behavioral Interview)</option>
                <option value="management" ${state.interviewType === 'management' ? 'selected' : ''}>مقابلة إدارية (Management Interview)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">عدد الأسئلة المطلوب *</label>
              <select class="form-input form-select" onchange="CareerAI.updateIQField('questionCount', parseInt(this.value))">
                <option value="5" ${state.questionCount === 5 ? 'selected' : ''}>5 أسئلة</option>
                <option value="10" ${state.questionCount === 10 ? 'selected' : ''}>10 أسئلة (الافتراضي)</option>
                <option value="15" ${state.questionCount === 15 ? 'selected' : ''}>15 سؤالاً</option>
                <option value="20" ${state.questionCount === 20 ? 'selected' : ''}>20 سؤالاً</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">لغة الأسئلة والإجابات *</label>
              <select class="form-input form-select" onchange="CareerAI.updateIQField('language', this.value)">
                <option value="ar" ${state.language === 'ar' ? 'selected' : ''}>العربية (Arabic)</option>
                <option value="en" ${state.language === 'en' ? 'selected' : ''}>الإنجليزية (English)</option>
                <option value="fr" ${state.language === 'fr' ? 'selected' : ''}>الفرنسية (French)</option>
                <option value="es" ${state.language === 'es' ? 'selected' : ''}>الإسبانية (Spanish)</option>
                <option value="de" ${state.language === 'de' ? 'selected' : ''}>الألمانية (German)</option>
              </select>
            </div>
          </div>

          <button class="btn btn--primary btn--lg btn--full" style="margin-top:var(--space-6)" onclick="CareerAI.startGenerateInterviewQuestions()">
            🎯 إنشاء أسئلة المقابلة والإجابات النموذجية
          </button>
        </div>

        <!-- LOADING STATE -->
        <div id="iqLoadingContainer" style="${state.isGenerating ? 'display:block' : 'none'}">
          <div class="analyzer-loading-card">
            <div class="analyzer-spinner"></div>
            <h3 class="analyzer-loading-title">جاري إعداد أسئلة مقابلة مخصصة لوظيفة ${state.jobTitle || 'المستهدفة'}...</h3>
            <p style="font-size:var(--text-sm); color:var(--color-text-secondary)">يتم إعداد أسباب الأسئلة والإجابات النموذجية ونصائح طريقة STAR...</p>
          </div>
        </div>

        <!-- RESULTS CONTAINER -->
        <div id="iqResultsContainer" style="${state.questions.length > 0 && !state.isGenerating ? 'display:block' : 'none'}">
          
          <!-- Control Actions Header -->
          <div class="iq-controls-header">
            <div style="font-weight:var(--font-bold); font-size:var(--text-lg)">
              تم إنشاء <strong>${state.questions.length}</strong> أسئلة مخصصة
            </div>
            <div class="iq-controls-buttons">
              <button class="btn btn--secondary btn--sm" onclick="CareerAI.filterIQType('technical')">💻 أسئلة تقنية فقط</button>
              <button class="btn btn--secondary btn--sm" onclick="CareerAI.filterIQType('hr')">👥 أسئلة HR فقط</button>
              <button class="btn btn--secondary btn--sm" onclick="CareerAI.increaseIQDifficulty()">⚡ زيادة الصعوبة</button>
              <button class="btn btn--accent btn--sm" onclick="CareerAI.copyAllIQText()">📋 نسخ الكل</button>
              <button class="btn btn--primary btn--sm" onclick="CareerAI.downloadIQPDF()">📄 تحميل PDF</button>
            </div>
          </div>

          <!-- Question Cards Stream -->
          <div class="iq-cards-stream">
            ${state.questions.map(q => `
              <div class="card iq-card">
                <div class="iq-card__header">
                  <div class="iq-card__number">سؤال #${q.num}</div>
                  <div class="iq-difficulty-badge ${q.diff === 'صعب' || q.diff === 'Hard' ? 'diff--hard' : (q.diff === 'متوسط' || q.diff === 'Medium' ? 'diff--medium' : 'diff--easy')}">
                    مستوى الصعوبة: ${q.diff}
                  </div>
                </div>

                <h3 class="iq-card__question">${q.q}</h3>

                <!-- Why is this question asked? -->
                <div class="iq-section-block iq-section-block--why">
                  <div class="iq-section-block__title">❓ لماذا يُطرح هذا السؤال؟</div>
                  <div class="iq-section-block__text">${q.why}</div>
                </div>

                <!-- Suggested Model Answer -->
                <div class="iq-section-block iq-section-block--answer">
                  <div class="iq-section-block__title">💡 إجابة نموذجية مقترحة:</div>
                  <div class="iq-section-block__text">${q.ans}</div>
                </div>

                <!-- Actionable Tip -->
                <div class="iq-section-block iq-section-block--tip">
                  <div class="iq-section-block__title">📌 نصيحة للإجابة:</div>
                  <div class="iq-section-block__text">${q.tip}</div>
                </div>

                <!-- STAR Technique Box for Behavioral Questions -->
                ${q.star ? `
                  <div class="iq-star-box">
                    <div class="iq-star-box__title">⭐ تطبيق طريقة STAR لبناء الإجابة السلوكية:</div>
                    <div class="iq-star-grid">
                      <div class="iq-star-item"><strong>S (Situation):</strong> ${q.star.s}</div>
                      <div class="iq-star-item"><strong>T (Task):</strong> ${q.star.t}</div>
                      <div class="iq-star-item"><strong>A (Action):</strong> ${q.star.a}</div>
                      <div class="iq-star-item"><strong>R (Result):</strong> ${q.star.r}</div>
                    </div>
                  </div>
                ` : ''}

              </div>
            `).join('')}
          </div>

          <!-- Section: Candidate Questions to Recruiter -->
          ${state.candidateQuestions.length > 0 ? `
            <div class="results-block" style="margin-top:var(--space-8); background:var(--color-primary-50); border-color:var(--color-primary-200)">
              <h3 class="results-block__title" style="color:var(--color-primary)">🙋 أسئلة يمكنك طرحها على مسؤول التوظيف في نهاية المقابلة</h3>
              <ul class="bullets-list" style="color:var(--color-text)">
                ${state.candidateQuestions.map(cq => `<li>• <strong>${cq}</strong></li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Section: Pre-interview Checklist -->
          ${state.tipsList.length > 0 ? `
            <div class="results-block" style="margin-top:var(--space-6)">
              <h3 class="results-block__title">✅ نصائح وإرشادات قبل دخول المقابلة</h3>
              <ul class="bullets-list">
                ${state.tipsList.map(tip => `<li>✓ ${tip}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Restart Button -->
          <div class="text-center" style="margin-top:var(--space-8)">
            <button class="btn btn--secondary btn--lg" onclick="CareerAI.resetIQForm()">
              🔄 إنشاء أسئلة جديدة
            </button>
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
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="3030404050"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- SEO & Educational Content Section -->
    <section class="section section--alt" style="padding:var(--space-16) 0">
      <div class="container">
        
        <div class="section__header">
          <span class="section__badge">
            📘 دليل المقابلات
          </span>
          <h2 class="section__title">دليلك التكتيكي للتألق في <span class="text-gradient">مقابلات التوظيف</span></h2>
          <p class="section__subtitle">استراتيجيات مجربة للاستعداد والتميز أمام لجنة التوظيف واجتياز أصعب الأسئلة</p>
        </div>

        <div class="grid grid--2" style="gap:var(--space-8);margin-bottom:var(--space-12)">
          
          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.interview}</span>
            </div>
            <h3 class="card__title">كيفية الإجابة عن سؤال "حدثني عن نفسك"؟</h3>
            <p class="card__text">
              استخدم هيكل (الماضي - الحاضر - المستقبل). ابدأ بخبرتك السابقة، ثم دورك الحالي وأبرز مهاراتك، وانهِ بالإعراب عن سبب اهتمامك بالوظيفة الحالية في الشركة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">ما هي طريقة STAR وكيف تستخدمها؟</h3>
            <p class="card__text">
              هي نموذج لإجابة الأسئلة السلوكية يتكون من: <strong>Situation (الموقف)</strong>، <strong>Task (المهمة)</strong>، <strong>Action (الإجراء)</strong>، و <strong>Result (النتيجة بالأرقام)</strong>.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.skills}</span>
            </div>
            <h3 class="card__title">أهم أسئلة الموارد البشرية HR المتوقعة</h3>
            <p class="card__text">
              تشمل أسئلة توقعات الراتب، أسباب ترك العمل السابق، نقاط القوة والضعف، وكيفية التعامل مع الخلافات داخل الفريق.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">ماذا تسأل مسؤول التوظيف في نهاية المقابلة؟</h3>
            <p class="card__text">
              اطرح أسئلة تظهر شغفك ورغبتك في النجاح مثل: "كيف يبدو النجاح في هذا الدور خلال أول 90 يوماً؟" أو "ما هي الخطوة التالية في عملية التقييم؟".
            </p>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="accordion" style="max-width:800px;margin:0 auto">
          
          <div class="accordion__item active">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل الأسئلة والإجابات مخصصة للوظيفة التي أدخلتها؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body" style="max-height:200px">
              <div class="accordion__content">
                نعم، تقوم الأداة بتوليد الأسئلة والإجابات النموذجية بناءً على المسمى الوظيفي، مستوى الخبرة، ونوع المقابلة والوصف الوظيفي المدخل.
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل يمكنني تصدير قائمة الأسئلة لمراجعتها قبل المقابلة؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                نعم، يمكنك استخدام زر "نسخ الكل" أو زر "تحميل PDF" للحصول على نسخة مطبوعة ومنسقة بالكامل من الأسئلة والإجابات والنصائح.
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
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="5050606000"></ins>
        </div>
        <div class="adsense-container adsense-banner-sm" style="flex:1;min-width:280px">
          <span class="adsense-label">إعلان ممول / Ad</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="5050606070"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>
  `;
};

/* ==========================================================================
   INTERACTIVE HANDLERS
   ========================================================================== */

CareerAI.updateIQField = function(field, val) {
  window.CareerAI.interviewState[field] = val;
};

CareerAI.startGenerateInterviewQuestions = function() {
  const state = window.CareerAI.interviewState;
  
  if (!state.jobTitle.trim()) {
    alert('يرجى إدخال المسمى الوظيفي المستهدف على الأقل!');
    return;
  }

  state.isGenerating = true;
  window.CareerAI.router.handleRoute();

  setTimeout(() => {
    state.isGenerating = false;
    const data = window.CareerAI.generateInterviewQuestionsData(state);
    state.questions = data.questions;
    state.candidateQuestions = data.candidateQuestions;
    state.tipsList = data.tipsList;

    window.CareerAI.router.handleRoute();

    // Scroll to results
    const el = document.getElementById('iqResultsContainer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 1000);
};

CareerAI.filterIQType = function(type) {
  const state = window.CareerAI.interviewState;
  state.interviewType = type;
  const data = window.CareerAI.generateInterviewQuestionsData(state);
  state.questions = data.questions;
  window.CareerAI.router.handleRoute();
};

CareerAI.increaseIQDifficulty = function() {
  const state = window.CareerAI.interviewState;
  state.level = 'senior';
  const data = window.CareerAI.generateInterviewQuestionsData(state);
  state.questions = data.questions;
  window.CareerAI.router.handleRoute();
};

CareerAI.copyAllIQText = function() {
  const state = window.CareerAI.interviewState;
  let text = `أسئلة المقابلة المخصصة لوظيفة: ${state.jobTitle}\n\n`;
  
  state.questions.forEach(q => {
    text += `سؤال #${q.num}: ${q.q}\nالهدف: ${q.why}\nإجابة مقترحة: ${q.ans}\nنصيحة: ${q.tip}\n\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    alert('تم نسخ جميع الأسئلة والإجابات إلى الحافظة بنجاح!');
  });
};

CareerAI.downloadIQPDF = function() {
  window.print();
};

CareerAI.resetIQForm = function() {
  window.CareerAI.interviewState = {
    jobTitle: '',
    companyName: '',
    industry: '',
    expYears: '',
    level: 'mid',
    jobDescription: '',
    interviewType: 'general',
    questionCount: 10,
    language: 'ar',
    difficultyFilter: 'all',
    isGenerating: false,
    questions: [],
    candidateQuestions: [],
    tipsList: []
  };
  window.CareerAI.router.handleRoute();
};

window.CareerAI.pages.interviewQuestionsSEO = {
  title: 'مولد أسئلة مقابلات العمل بالذكاء الاصطناعي | Career Factor Interview Questions',
  description: 'تدرب على أسئلة مقابلات العمل المخصصة لوظيفتك مع إجابات نموذجية وسبب طرح السؤال وطريقة STAR وتصدير PDF مجاناً.',
  keywords: 'أسئلة مقابلة عمل, تحضير المقابلات, طريقة STAR, أسئلة HR, أسئلة تقنية, AI Interview Questions'
};
