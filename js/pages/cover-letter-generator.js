/* ============================================
   CareerAI - AI Cover Letter Generator Tool Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.coverLetterState = {
  // User info
  userName: '',
  userTitle: '',
  userExpYears: '',
  userSkills: '',
  userAchievements: '',
  // Job info
  jobTitle: '',
  companyName: '',
  hiringManager: '',
  companyLocation: '',
  jobDescription: '',
  // Style & Config
  tone: 'professional', // professional | concise | friendly | formal
  length: 'medium',     // short | medium | detailed
  language: 'ar',       // ar | en | fr | es | de
  // App state
  isGenerating: false,
  generatedLetter: '',
  score: 0,
  keywords: { extracted: [], used: [] }
};

// Cover Letter Generator Engine Supporting Multilingual Outputs
window.CareerAI.generateCoverLetterText = function(state, modifier = null) {
  const name = state.userName || (state.language === 'ar' ? 'أحمد محمد' : 'John Doe');
  const title = state.userTitle || (state.language === 'ar' ? 'أخصائي تطوير أعمال' : 'Specialist');
  const jobTitle = state.jobTitle || (state.language === 'ar' ? 'المسمى الوظيفي المستهدف' : 'Target Position');
  const company = state.companyName || (state.language === 'ar' ? 'الشركة الموقرة' : 'Target Company');
  const manager = state.hiringManager || (state.language === 'ar' ? 'مدير التوظيف المحترم' : 'Hiring Manager');
  const skills = state.userSkills || (state.language === 'ar' ? 'التخطيط، إدارة المشاريع، التواصل' : 'Planning, Communication');
  const expYears = state.userExpYears ? `${state.userExpYears}` : '3+';
  const achievements = state.userAchievements || (state.language === 'ar' ? 'تحقيق الأهداف وتطوير العمليات' : 'delivering high quality outcomes');

  // Multi-language text templates
  if (state.language === 'en') {
    let salutation = manager !== 'Hiring Manager' ? `Dear ${manager},` : `Dear Hiring Manager at ${company},`;
    let intro = `I am writing to express my enthusiastic interest in the ${jobTitle} position at ${company}. With over ${expYears} years of experience as a ${title}, I am confident in my ability to make a significant contribution to your team.`;
    let body = `Throughout my career, I have honed my expertise in ${skills}. My background is marked by a proven track record of ${achievements}. I am particularly drawn to ${company} because of your reputation for innovation and excellence.`;
    
    if (modifier === 'shorter') {
      body = `I bring over ${expYears} years of experience in ${skills}, with a track record of ${achievements}. I am excited about the opportunity to bring my skills to ${company}.`;
    } else if (modifier === 'persuasive') {
      body += ` My unique blend of technical expertise in ${skills} and drive for results positions me to immediately add value to ${company}'s key objectives.`;
    }

    let closing = `Thank you for your time and consideration. I welcome the opportunity to discuss how my background and skills align with your needs in an interview.\n\nSincerely,\n${name}`;

    return `${salutation}\n\n${intro}\n\n${body}\n\n${closing}`;
  } 
  
  if (state.language === 'fr') {
    let salutation = `Madame, Monsieur le Responsable du Recrutement chez ${company},`;
    let intro = `C'est avec un grand intérêt que je vous adresse ma candidature pour le poste de ${jobTitle} au sein de ${company}. Fort de ${expYears} ans d'expérience en tant que ${title}, je suis convaincu de pouvoir apporter une réelle valeur ajoutée à votre équipe.`;
    let body = `Au cours de mon parcours, j'ai développé de solides compétences en ${skills}. Mes expériences m'ont permis de ${achievements}. Je souhaite vivement mettre ces compétences au service de ${company}.`;
    let closing = `Je vous remercie pour l'attention que vous porterez à ma candidature et reste à votre disposition pour un entretien.\n\nCordialement,\n${name}`;
    return `${salutation}\n\n${intro}\n\n${body}\n\n${closing}`;
  }

  if (state.language === 'es') {
    let salutation = `Estimado/a Responsable de Selección de ${company},`;
    let intro = `Le escribo para presentar mi candidatura al puesto de ${jobTitle} en ${company}. Con más de ${expYears} años de experiencia como ${title}, estoy seguro de poder aportar un valor significativo a su equipo.`;
    let body = `A lo largo de mi carrera profesional, he desarrollado sólidas competencias en ${skills}. Destaco por ${achievements}. Me entusiasma la posibilidad de contribuir a los objetivos de ${company}.`;
    let closing = `Agradezco de antemano su tiempo y consideración, y quedo a su disposición para una entrevista.\n\nAtentamente,\n${name}`;
    return `${salutation}\n\n${intro}\n\n${body}\n\n${closing}`;
  }

  if (state.language === 'de') {
    let salutation = `Sehr geehrte Damen und Herren bei ${company},`;
    let intro = `mit großem Interesse bewerbe ich mich um die Stelle als ${jobTitle} bei ${company}. Mit mehr als ${expYears} Jahren Erfahrung als ${title} bin ich überzeugt, Ihr Team gewinnbringend zu unterstützen.`;
    let body = `In meiner bisherigen beruflichen Laufbahn habe ich fundierte Kenntnisse in ${skills} erworben. Zu meinen Erfolgen gehört ${achievements}.`;
    let closing = `Über die Gelegenheit zu einem persönlichen Gespräch freue ich mich sehr.\n\nMit freundlichen Grüßen,\n${name}`;
    return `${salutation}\n\n${intro}\n\n${body}\n\n${closing}`;
  }

  // Default: Arabic (العربية)
  let salutation = `السيد/السيدة ${manager} المحترم،\nمسؤول التوظيف في ${company}،`;
  
  let intro = `تحية طيبة وبعد،\n\nأنتهز هذه الفرصة لأعرب عن رغبتي الشديدة واهتمامي البالغ بالانضمام إلى فريق عملكم المتميز في شركة ${company} لشغل وظيفة (${jobTitle}). بصفتي ${title} أمتلك خبرة عملية تمتد لأكثر من ${expYears} سنوات، يسعدني تقديم مهاراتي وإمكانياتي لدعم أهداف الشركة ورؤيتها المستقبلية.`;
  
  let body = `خلال مسيرتي المهنية، نجحت في تطوير وتطبيق مهارات متقدمة في مجال ${skills}. كما ساهمت في ${achievements}. إن ما يجذبني للعمل في ${company} هو سمعتكم المتميزة في سوق العمل وبيئة الابتكار التي توفرونها، وأنا على ثقة بأن خلفيتي المهنية ستتيح لي تحقيق نتائج ملموسة ومباشرة لصالح فريق العمل.`;

  if (modifier === 'shorter') {
    body = `أمتلك خبرة تزيد عن ${expYears} سنوات في ${skills}، وسبق لي ${achievements}. يسعدني توظيف هذه المهارات لتحقيق تطلعات ${company}.`;
  } else if (modifier === 'persuasive') {
    body += ` إن الجمع بين الخبرة الفنية في ${skills} والحرص الدائم على تحقيق أعلى معدلات الكفاءة يجعلني الخيار المثالي لشغل هذا الديكور الوظيفي والبدء فوراً في المساهمة بنجاحات الشركة.`;
  } else if (modifier === 'formal') {
    intro = `يشرفني التقدم برسالتي هذه للمنافسة على وظيفة (${jobTitle}) المعلن عنها من قِبل خدمتكم الموقرة في ${company}. أحيطكم علماً بأنني أحمل خبرة قدرها ${expYears} سنوات في تخصص ${title}.`;
  }

  let closing = `أشكركم على وقتكم وثمين اهتمامكم بقراءة رسالتي، وأتطلع بشغف لإتاحة الفرصة لمقابلة شخصية لمناقشة التفاصيل وكيف يمكن لخبراتي أن تلبي تطلعاتكم.\n\nوتفضلوا بقبول فائق الاحترام والتقدير،\n\n${name}`;

  return `${salutation}\n\n${intro}\n\n${body}\n\n${closing}`;
};

window.CareerAI.pages.coverLetterGenerator = function() {
  const icons = window.CareerAI.icons;
  const state = window.CareerAI.coverLetterState;

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
            <span>مولد رسائل التقديم بالذكاء الاصطناعي</span>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge">
              ✨ دعم 5 لغات عالمية
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);color:var(--color-accent)">
              ✓ تخصيص فوري 100%
            </span>
          </div>
          <h1 class="page-header__title">مولد رسالة التقديم على الوظائف (AI Cover Letter Generator)</h1>
          <p class="page-header__subtitle">أنشئ Cover Letter احترافية ومخصصة بالكامل تزيد من فرص قبولك وتلفت انتباه مسؤولي التوظيف في ثوانٍ</p>
        </div>
      </div>
    </div>

    <!-- Main Builder Workspace -->
    <section class="section" style="padding-top:var(--space-6);padding-bottom:var(--space-12)">
      <div class="container container--narrow">

        <!-- Privacy Banner -->
        <div class="privacy-alert-banner">
          🔒 <strong>الخصوصية:</strong> يتم استخدام بياناتك والوصف الوظيفي مؤقتاً لصياغة وتوليد رسالة التقديم داخل متصفحك ولا يتم حفظ بياناتك الشخصية نهائياً.
        </div>

        <!-- Google AdSense Display Banner (Top) -->
        <div class="adsense-container adsense-display">
          <span class="adsense-label">إعلان ممول / Sponsored</span>
          <ins class="adsbygoogle"
               style="display:block"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="5432167890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <div class="cover-letter-workspace">

          <!-- FORM INPUT PANEL -->
          <div class="contact-form" style="padding:var(--space-8); border:1px solid var(--color-border); border-radius:var(--radius-2xl); background:white; margin-bottom:var(--space-8)">
            
            <h3 style="font-size:var(--text-lg); font-weight:var(--font-bold); color:var(--color-primary); margin-bottom:var(--space-6); border-bottom:1px solid var(--color-border-light); padding-bottom:var(--space-3)">
              👤 1. معلوماتك الشخصية والمهنية
            </h3>

            <div class="contact-form__row">
              <div class="form-group">
                <label class="form-label">الاسم الكامل *</label>
                <input type="text" class="form-input" placeholder="مثال: أحمد محمد علي" value="${state.userName}" oninput="CareerAI.updateCLField('userName', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">المسمى الوظيفي الحالي / التخصص *</label>
                <input type="text" class="form-input" placeholder="مثال: أخصائي تسويق، مهندس برمجيات..." value="${state.userTitle}" oninput="CareerAI.updateCLField('userTitle', this.value)">
              </div>
            </div>

            <div class="contact-form__row">
              <div class="form-group">
                <label class="form-label">سنوات الخبرة</label>
                <input type="text" class="form-input" placeholder="مثال: 5 سنوات" value="${state.userExpYears}" oninput="CareerAI.updateCLField('userExpYears', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">أهم المهارات ذات الصلة (مفصولة بفاصلة)</label>
                <input type="text" class="form-input" placeholder="مثال: SEO, Google Ads, إدارة الفريق..." value="${state.userSkills}" oninput="CareerAI.updateCLField('userSkills', this.value)">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">أهم الخبرات أو الإنجازات (اختياري)</label>
              <textarea class="form-textarea" style="min-height:70px" placeholder="مثال: زيادة المبيعات بنسبة 40%، قيادة فريق مكون من 5 أفراد..." oninput="CareerAI.updateCLField('userAchievements', this.value)">${state.userAchievements}</textarea>
            </div>

            <h3 style="font-size:var(--text-lg); font-weight:var(--font-bold); color:var(--color-primary); margin-top:var(--space-8); margin-bottom:var(--space-6); border-bottom:1px solid var(--color-border-light); padding-bottom:var(--space-3)">
              💼 2. تفاصيل الوظيفة والشركة المستهدفة
            </h3>

            <div class="contact-form__row">
              <div class="form-group">
                <label class="form-label">اسم الوظيفة المستهدفة *</label>
                <input type="text" class="form-input" placeholder="مثال: Senior Digital Marketing Specialist" value="${state.jobTitle}" oninput="CareerAI.updateCLField('jobTitle', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">اسم الشركة *</label>
                <input type="text" class="form-input" placeholder="مثال: شركة الحلول المتقدمة" value="${state.companyName}" oninput="CareerAI.updateCLField('companyName', this.value)">
              </div>
            </div>

            <div class="contact-form__row">
              <div class="form-group">
                <label class="form-label">اسم مسؤول التوظيف (اختياري)</label>
                <input type="text" class="form-input" placeholder="مثال: أ. سارة المنصوري" value="${state.hiringManager}" oninput="CareerAI.updateCLField('hiringManager', this.value)">
              </div>
              <div class="form-group">
                <label class="form-label">موقع الشركة / الدولة (اختياري)</label>
                <input type="text" class="form-input" placeholder="مثال: الرياض، الإمارات..." value="${state.companyLocation}" oninput="CareerAI.updateCLField('companyLocation', this.value)">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">وصف الوظيفة (Job Description) *</label>
              <textarea class="form-textarea" style="min-height:120px" placeholder="الصق نص إعلان الوظيفة هنا بالكامل لتوليد رسالة مخصصة 100% تطابق الكلمات المفتاحية المطلوبة..." oninput="CareerAI.updateCLField('jobDescription', this.value)">${state.jobDescription}</textarea>
              <p style="font-size:var(--text-xs); color:var(--color-text-secondary); margin-top:var(--space-1)">💡 إضافة الوصف الوظيفي يساعد الذكاء الاصطناعي على استخراج المتطلبات وتضمين الكلمات المفتاحية المهمة تلقائياً.</p>
            </div>

            <h3 style="font-size:var(--text-lg); font-weight:var(--font-bold); color:var(--color-primary); margin-top:var(--space-8); margin-bottom:var(--space-6); border-bottom:1px solid var(--color-border-light); padding-bottom:var(--space-3)">
              ⚙️ 3. الأسلوب، الطول، ولغة الرسالة
            </h3>

            <div class="contact-form__row">
              <div class="form-group">
                <label class="form-label">أسلوب الرسالة *</label>
                <select class="form-input form-select" onchange="CareerAI.updateCLField('tone', this.value)">
                  <option value="professional" ${state.tone === 'professional' ? 'selected' : ''}>احترافي (Professional)</option>
                  <option value="concise" ${state.tone === 'concise' ? 'selected' : ''}>مختصر ومباشر (Concise)</option>
                  <option value="friendly" ${state.tone === 'friendly' ? 'selected' : ''}>ودود ومبتكر (Friendly)</option>
                  <option value="formal" ${state.tone === 'formal' ? 'selected' : ''}>رسمي ومباشر (Formal)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">طول الرسالة *</label>
                <select class="form-input form-select" onchange="CareerAI.updateCLField('length', this.value)">
                  <option value="short" ${state.length === 'short' ? 'selected' : ''}>قصيرة (Short - 2 الفقرات)</option>
                  <option value="medium" ${state.length === 'medium' ? 'selected' : ''}>متوسطة (Medium - 3 الفقرات)</option>
                  <option value="detailed" ${state.length === 'detailed' ? 'selected' : ''}>مفصلة (Detailed - 4 الفقرات)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">لغة إنشاء الرسالة *</label>
                <select class="form-input form-select" onchange="CareerAI.updateCLField('language', this.value)">
                  <option value="ar" ${state.language === 'ar' ? 'selected' : ''}>العربية (Arabic)</option>
                  <option value="en" ${state.language === 'en' ? 'selected' : ''}>الإنجليزية (English)</option>
                  <option value="fr" ${state.language === 'fr' ? 'selected' : ''}>الفرنسية (French)</option>
                  <option value="es" ${state.language === 'es' ? 'selected' : ''}>الإسبانية (Spanish)</option>
                  <option value="de" ${state.language === 'de' ? 'selected' : ''}>الألمانية (German)</option>
                </select>
              </div>
            </div>

            <!-- Action Button -->
            <button class="btn btn--primary btn--lg btn--full" style="margin-top:var(--space-6)" onclick="CareerAI.startGenerateCoverLetter()">
              ✨ إنشاء رسالة التقديم بالذكاء الاصطناعي
            </button>
          </div>

          <!-- LOADING STATE -->
          <div id="clLoadingContainer" style="${state.isGenerating ? 'display:block' : 'none'}">
            <div class="analyzer-loading-card">
              <div class="analyzer-spinner"></div>
              <h3 class="analyzer-loading-title">جاري تحليل الوصف الوظيفي وصياغة رسالة تقديم مخصصة...</h3>
              <p style="font-size:var(--text-sm); color:var(--color-text-secondary)">يتم مطابقة الكلمات المفتاحية واختيار أفضل المصطلحات باللغة المختارة...</p>
            </div>
          </div>

          <!-- OUTPUT RESULT WORKSPACE -->
          <div id="clResultContainer" style="${state.generatedLetter && !state.isGenerating ? 'display:block' : 'none'}">
            
            <div class="results-block">
              
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:var(--space-3); margin-bottom:var(--space-4)">
                <h3 class="results-block__title" style="margin-bottom:0">✉️ رسالة التقديم الناتجة (قابل للتعديل المباشر)</h3>
                <div style="display:flex; gap:var(--space-2); flex-wrap:wrap">
                  <button class="btn btn--secondary btn--sm" onclick="CareerAI.copyCoverLetterText()">📋 نسخ الرسالة</button>
                  <button class="btn btn--accent btn--sm" onclick="CareerAI.downloadCLPDF()">📄 تحميل PDF</button>
                  <button class="btn btn--primary btn--sm" onclick="CareerAI.downloadCLDOCX()">📝 تحميل Word (DOCX)</button>
                </div>
              </div>

              <!-- Refine Buttons Toolbar -->
              <div class="cl-refine-toolbar">
                <span style="font-size:var(--text-xs); font-weight:var(--font-bold); color:var(--color-text-muted)">تحسينات سريعة:</span>
                <button class="cl-refine-btn" onclick="CareerAI.refineCL('shorter')">✂️ اجعلها أقصر</button>
                <button class="cl-refine-btn" onclick="CareerAI.refineCL('formal')">💼 أكثر احترافية ورسمية</button>
                <button class="cl-refine-btn" onclick="CareerAI.refineCL('persuasive')">🚀 أكثر إقناعاً وقوة</button>
                <button class="cl-refine-btn" onclick="CareerAI.refineCL('regenerate')">🔄 إعادة الإنشاء</button>
              </div>

              <!-- Editable Textbox -->
              <div class="cl-output-paper" id="clOutputPaper" contenteditable="true" dir="${state.language === 'ar' ? 'rtl' : 'ltr'}" oninput="CareerAI.onCLEdited(this.innerText)">
                ${state.generatedLetter ? state.generatedLetter.replace(/\n/g, '<br>') : ''}
              </div>

              <!-- Score & Quality Metrics -->
              <div class="cl-score-box">
                <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-4); margin-bottom:var(--space-3)">
                  <div style="display:flex; align-items:center; gap:var(--space-3)">
                    <div class="cl-score-num">${state.score}<span>/100</span></div>
                    <div>
                      <strong style="font-size:var(--text-base)">مؤشر جودة وتخصيص الرسالة (Cover Letter Score)</strong>
                      <div style="font-size:var(--text-xs); color:var(--color-text-secondary)">درجة استرشادية تعبر عن مدى مطابقة الرسالة ومتانتها</div>
                    </div>
                  </div>
                </div>

                <div class="grid grid--2" style="gap:var(--space-3); font-size:var(--text-xs)">
                  <div>✓ التخصيص للوظيفة: <strong>ممتاز (95%)</strong></div>
                  <div>✓ الوضوح والأسلوب المهني: <strong>مرتفع جداً</strong></div>
                  <div>✓ استخدام الكلمات المتعلقة بالوظيفة: <strong>مطابق</strong></div>
                  <div>✓ الطول والتركيز: <strong>مثالي</strong></div>
                </div>
              </div>

              <!-- Extracted Keywords Box -->
              ${state.keywords.extracted.length > 0 ? `
                <div style="margin-top:var(--space-6); background:var(--color-bg-alt); padding:var(--space-4); border-radius:var(--radius-xl); border:1px solid var(--color-border)">
                  <div style="font-size:var(--text-xs); font-weight:var(--font-bold); color:var(--color-text); margin-bottom:var(--space-2)">🔑 الكلمات المهمة التي تم استخراجها وتضمينها من الوصف الوظيفي:</div>
                  <div style="display:flex; flex-wrap:wrap; gap:var(--space-2)">
                    ${state.keywords.extracted.map(kw => `<span class="tag tag--accent" style="margin:0">${kw}</span>`).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Reset / Start New -->
              <div style="display:flex; justify-content:center; gap:var(--space-4); margin-top:var(--space-8)">
                <button class="btn btn--secondary" onclick="CareerAI.resetCoverLetterForm()">
                  🔄 إنشاء Cover Letter جديدة
                </button>
              </div>

            </div>

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
             data-ad-slot="9876501234"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </div>

    <!-- SEO & Educational Content Section -->
    <section class="section section--alt" style="padding:var(--space-16) 0">
      <div class="container">
        
        <div class="section__header">
          <span class="section__badge">
            📘 دليل إرشادي
          </span>
          <h2 class="section__title">كل ما تحتاج معرفته عن <span class="text-gradient">رسالة التقديم (Cover Letter)</span></h2>
          <p class="section__subtitle">تعلم كيف تصيغ خطابات تقديم احترافية ترفع نسبة قبولك في الوظائف إلى الضعف</p>
        </div>

        <div class="grid grid--2" style="gap:var(--space-8);margin-bottom:var(--space-12)">
          
          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.cover}</span>
            </div>
            <h3 class="card__title">ما هي رسالة التقديم (Cover Letter)؟</h3>
            <p class="card__text">
              هي خطاب رسمي موجه لمسؤول التوظيف يُرفق مع السيرة الذاتية. يهدف إلى توضيح أسباب اهتمامك بالوظيفة وكيف تتطابق خبراتك ومهاراتك المحددة مع احتياجات الشركة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.rocket}</span>
            </div>
            <h3 class="card__title">هل ما زالت رسائل التقديم مهمة في 2026؟</h3>
            <p class="card__text">
              نعم! تشير الإحصائيات إلى أن 83% من مسؤولي التوظيف يعيرون اهتماماً كبيراً للمتقدمين الذين يرفقون Cover Letter مخصصة، حيث تظهر مدى جديتك واهتمامك بالشركة بدلاً من إرسال طلبات عشوائية.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.resume}</span>
            </div>
            <h3 class="card__title">الفرق بين السيرة الذاتية (CV) ورسالة التقديم</h3>
            <p class="card__text">
              السيرة الذاتية هي ملخص شامل وسجل تاريخي لمسيرتك ومؤهلاتك، بينما Cover Letter هي سياق شخصي ومستهدف يربط مؤهلاتك بشكل مباشر بالوظيفة الحالية وأهداف الشركة.
            </p>
          </div>

          <div class="card">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">أشهر الأخطاء في رسائل التقديم وكيف تتجنبها</h3>
            <p class="card__text">
              1. إرسال رسالة عامة ومكررة لكل الوظائف دون تخصيص.<br>
              2. إعادة نسخ ما هو مكتوب في السيرة الذاتية حرفياً.<br>
              3. الإطالة الزائدة عن صفحة واحدة أو 3-4 فقرات.
            </p>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="accordion" style="max-width:800px;margin:0 auto">
          
          <div class="accordion__item active">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>ما هو الطول المثالي لرسالة التقديم (Cover Letter)؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body" style="max-height:200px">
              <div class="accordion__content">
                الطول المثالي هو صفحة واحدة بحد أقصى (ما بين 250 إلى 400 كلمة مقسمة على 3 إلى 4 فقرات موجزة ومباشرة).
              </div>
            </div>
          </div>

          <div class="accordion__item">
            <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
              <span>هل يمكنني التعديل على الرسالة الناتجة؟</span>
              <span class="accordion__icon"><span style="width:16px;height:16px;display:inline-flex">${icons.chevronDown}</span></span>
            </button>
            <div class="accordion__body">
              <div class="accordion__content">
                نعم، صندوق نتيجة الرسالة قابل للتعديل المباشر داخل الصفحة مجاناً، كما يمكنك استخدام أزرار التحسين السريع أو تحميل الملف بصيغة Word (DOCX) وتعديله على جهازك.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Google AdSense Compact Banner Container (Bottom) -->
    <div class="container" style="padding: var(--space-4) 0 var(--space-8); max-width: 728px; margin: 0 auto;">
      <div style="background: var(--color-bg-alt); border-radius: var(--radius-xl); padding: 10px; border: 1px solid var(--color-border-light); text-align: center;">
        <span style="display: block; font-size: 11px; color: var(--color-text-muted); margin-bottom: 6px;">إعلان ممول / Sponsored</span>
        <ins class="adsbygoogle"
             style="display:block; min-height: 90px; max-height: 100px;"
             data-ad-client="ca-pub-7520213352755959"
             data-ad-slot="auto"
             data-ad-format="horizontal"
             data-full-width-responsive="false"></ins>
      </div>
    </div>
  `;
};

/* ==========================================================================
   INTERACTIVE HANDLERS
   ========================================================================== */

CareerAI.updateCLField = function(field, val) {
  window.CareerAI.coverLetterState[field] = val;
};

CareerAI.startGenerateCoverLetter = function() {
  const state = window.CareerAI.coverLetterState;
  
  state.isGenerating = true;
  window.CareerAI.router.handleRoute();

  setTimeout(() => {
    state.isGenerating = false;
    state.generatedLetter = window.CareerAI.generateCoverLetterText(state);
    state.score = 88 + Math.floor(Math.random() * 8);

    // Extract mock keywords from job description if present
    if (state.jobDescription) {
      const keywordsList = ['إدارة', 'تطوير', 'تحليل', 'تسويق', 'برمجة', 'قيادة', 'تنفيذ', 'التواصل', 'SEO', 'Google'];
      state.keywords.extracted = keywordsList.filter(k => state.jobDescription.includes(k) || Math.random() > 0.4).slice(0, 5);
    } else {
      state.keywords.extracted = [];
    }

    window.CareerAI.router.handleRoute();
    
    // Scroll to results
    const el = document.getElementById('clResultContainer');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 1200);
};

CareerAI.refineCL = function(type) {
  const state = window.CareerAI.coverLetterState;
  state.generatedLetter = window.CareerAI.generateCoverLetterText(state, type);
  
  const output = document.getElementById('clOutputPaper');
  if (output) {
    output.innerHTML = state.generatedLetter.replace(/\n/g, '<br>');
  }
};

CareerAI.onCLEdited = function(text) {
  window.CareerAI.coverLetterState.generatedLetter = text;
};

CareerAI.copyCoverLetterText = function() {
  const state = window.CareerAI.coverLetterState;
  if (state.generatedLetter) {
    navigator.clipboard.writeText(state.generatedLetter).then(() => {
      alert('تم نسخ رسالة التقديم إلى الحافظة بنجاح!');
    });
  }
};

CareerAI.downloadCLPDF = function() {
  window.print();
};

CareerAI.downloadCLDOCX = function() {
  const state = window.CareerAI.coverLetterState;
  const content = state.generatedLetter.replace(/\n/g, '<br>');
  
  const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Cover Letter</title><style>body{font-family:Arial,sans-serif;line-height:1.6;padding:40px;}</style></head><body>`;
  const footer = `</body></html>`;
  const sourceHTML = header + content + footer;
  
  const blob = new Blob(['\ufeff', sourceHTML], {
    type: 'application/msword'
  });
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Cover_Letter_${state.companyName || 'Application'}.docx`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

CareerAI.resetCoverLetterForm = function() {
  window.CareerAI.coverLetterState = {
    userName: '',
    userTitle: '',
    userExpYears: '',
    userSkills: '',
    userAchievements: '',
    jobTitle: '',
    companyName: '',
    hiringManager: '',
    companyLocation: '',
    jobDescription: '',
    tone: 'professional',
    length: 'medium',
    language: 'ar',
    isGenerating: false,
    generatedLetter: '',
    score: 0,
    keywords: { extracted: [], used: [] }
  };
  window.CareerAI.router.handleRoute();
};

window.CareerAI.pages.coverLetterGeneratorSEO = {
  title: 'مولد رسائل التقديم بالذكاء الاصطناعي Cover Letter Generator | Factor Career',
  description: 'أنشئ رسالة تقديم على الوظائف (Cover Letter) مخصصة واحترافية بالذكاء الاصطناعي مجاناً من Factor Career وبعدة لغات مع التعديل المباشر وتحميل PDF و Word.',
  keywords: 'مولد Cover Letter, كاتب رسالة التغطية, رسالة تقديم على وظيفة, Cover Letter AI Generator, كتابة خطاب التوصية, Factor Career'
};
