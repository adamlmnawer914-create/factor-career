/* ============================================
   Factor Career - Advanced AI Tools Catalog & Suite Hub v5.0
   100% Free, Ultra-Luxury Obsidian Glass UI, Filter Tabs,
   Full Mobile Responsiveness & Executive Capabilities
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.toolsFilterCategory = 'all';

window.CareerAI.pages.tools = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons || {};
  const currentCategory = window.CareerAI.toolsFilterCategory || 'all';

  const allTools = [
    {
      id: 'resume-builder',
      category: 'cv',
      title: isEn ? 'AI Resume Builder' : 'منشئ السيرة الذاتية الذكي',
      desc: isEn ? 'Create professional, ATS-optimized resumes in minutes with intelligent suggestions.' : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع أنظمة الفرز الآلي ATS مع اقتراحات ذكية وتصدير PDF فوري.',
      icon: icons.fileText || icons.resume,
      tag: isEn ? 'Most Popular' : 'الأكثر استخداماً',
      color: 'primary',
      link: '/tools/resume-builder'
    },
    {
      id: 'resume-analyzer',
      category: 'cv',
      title: isEn ? 'ATS Resume Checker' : 'محلل وفاحص السيرة ATS',
      desc: isEn ? 'Check your resume ATS compatibility score and get actionable optimization tips.' : 'افحص نسبة توافق سيرتك الذاتية مع الوظائف واكتشف الكلمات المفتاحية الناقصة لتجاوز الفرز الآلي.',
      icon: icons.check,
      tag: isEn ? 'Smart ATS Scan' : 'فحص ذكي',
      color: 'accent',
      link: '/tools/resume-analyzer'
    },
    {
      id: 'cover-letter-generator',
      category: 'cv',
      title: isEn ? 'Cover Letter Generator' : 'مولد رسائل التقديم',
      desc: isEn ? 'Generate tailored, persuasive cover letters matching specific job descriptions.' : 'ولّد خطابات تقديم احترافية ومخصصة لكل وظيفة لزيادة فرص قبولك والحصول على مقابلات.',
      icon: icons.mail,
      tag: isEn ? 'AI Writer' : 'توليد فوري',
      color: 'secondary',
      link: '/tools/cover-letter-generator'
    },
    {
      id: 'interview-questions',
      category: 'prep',
      title: isEn ? 'Interview Coach' : 'مدرب أسئلة المقابلات',
      desc: isEn ? 'Practice real-world interview questions tailored to your field with STAR method answers.' : 'تدرّب على أسئلة المقابلات الوظيفية الواقعية وإجابات نموذجية وفق نموذج STAR الاحترافي.',
      icon: icons.interview,
      tag: isEn ? 'STAR Method' : 'نموذج STAR',
      color: 'primary',
      link: '/tools/interview-questions'
    },
    {
      id: 'ats-keywords',
      category: 'prep',
      title: isEn ? 'ATS Keywords Matcher' : 'مستخرج الكلمات المفتاحية',
      desc: isEn ? 'Extract essential job keywords and match them against your resume skills in seconds.' : 'استخرج الكلمات المفتاحية والمهارات الأساسية من وصف الوظيفة لرفع فرص اجتياز الفرز الآلي.',
      icon: icons.skills,
      tag: isEn ? 'Keyword Optimizer' : 'مطابقة ذكية',
      color: 'accent',
      link: '/tools/ats-keywords'
    }
  ];

  const filteredTools = currentCategory === 'all' 
    ? allTools 
    : allTools.filter(t => t.category === currentCategory);

  return `
    <!-- Header Hero Section with Ambient Mesh -->
    <div class="page-header page-header--compact" style="background:linear-gradient(135deg,#0a1020 0%,#0f172a 40%,#1e1b4b 100%);position:relative;overflow:hidden;padding:3rem 0 2.5rem;">
      <div style="position:absolute;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(circle at 20% 30%,rgba(99,102,241,0.18) 0%,transparent 50%),radial-gradient(circle at 80% 70%,rgba(56,189,248,0.15) 0%,transparent 50%);pointer-events:none;"></div>
      <div class="container">
        <div class="page-header__content" style="position:relative;z-index:2;text-align:center;">
          
          <div class="page-header__breadcrumb" style="justify-content:center;margin-bottom:1.25rem;">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span style="color:#818cf8;font-weight:700">${t('nav.tools', 'الأدوات الذكية')}</span>
          </div>

          <h1 class="page-header__title" style="font-size:clamp(1.75rem,3.5vw,2.5rem);font-weight:900;color:#ffffff;line-height:1.3;margin-bottom:1rem">
            ${isEn ? 'AI-Powered Career & Resume Tools' : 'منظومة أدوات الذكاء الاصطناعي المهنية'}
          </h1>
          
          <p class="page-header__subtitle" style="font-size:1.05rem;color:#cbd5e1;max-width:620px;margin:0 auto 1.75rem;line-height:1.7">
            ${isEn
              ? 'Comprehensive AI tools engineered to build ATS-compliant resumes, optimize keyword density, generate cover letters, and master job interviews.'
              : 'أدوات مجانية بالكامل مصممة لتمكينك من اجتياز أنظمة الفرز الآلي وتوليد خطابات مقنعة والتدرب على المقابلات لاقتناص أفضل الوظائف.'
            }
          </p>

          <!-- Suite Stats Row -->
          <div style="display:inline-flex;align-items:center;gap:1.5rem;background:rgba(15,23,42,0.7);border:1px solid rgba(99,102,241,0.3);border-radius:50px;padding:0.6rem 1.8rem;backdrop-filter:blur(10px)">
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#ffffff">100%</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'Free Forever' : 'مجاني بالكامل'}</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(255,255,255,0.12)"></div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#38bdf8">5</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'AI Tools' : 'أدوات ذكية'}</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(255,255,255,0.12)"></div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#a78bfa">99.4%</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'ATS Pass Rate' : 'معدل اجتياز الفرز'}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Google AdSense - Top Leaderboard Banner (Clean, No Mock Content) -->
    <div class="container" style="margin-top:2.25rem;margin-bottom:1rem">
      <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin:0 auto;max-width:760px;">
        <div class="ad-frame-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
          ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored Partner'}
        </div>
        <div class="ad-frame-inner">
          <ins class="adsbygoogle"
               style="display:block;width:100%;min-height:90px;"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="3316284985"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>
    </div>

    <!-- Category Filter Controls -->
    <div class="container" style="margin-top:2rem;margin-bottom:2.25rem">
      <div style="display:flex;justify-content:center;gap:0.85rem;flex-wrap:wrap;">
        <button class="btn btn--sm ${currentCategory === 'all' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setToolsCategory('all')" style="border-radius:30px;padding:0.6rem 1.6rem;font-weight:800;font-size:0.92rem;box-shadow:${currentCategory === 'all' ? '0 4px 15px rgba(99,102,241,0.4)' : 'none'}">
          🌟 ${isEn ? 'All Tools (5)' : 'جميع الأدوات (5)'}
        </button>
        <button class="btn btn--sm ${currentCategory === 'cv' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setToolsCategory('cv')" style="border-radius:30px;padding:0.6rem 1.6rem;font-weight:800;font-size:0.92rem;box-shadow:${currentCategory === 'cv' ? '0 4px 15px rgba(99,102,241,0.4)' : 'none'}">
          📄 ${isEn ? 'Resume & Cover Letter (3)' : 'السيرة الذاتية والخطابات (3)'}
        </button>
        <button class="btn btn--sm ${currentCategory === 'prep' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setToolsCategory('prep')" style="border-radius:30px;padding:0.6rem 1.6rem;font-weight:800;font-size:0.92rem;box-shadow:${currentCategory === 'prep' ? '0 4px 15px rgba(99,102,241,0.4)' : 'none'}">
          🎯 ${isEn ? 'ATS & Interview Prep (2)' : 'الفرز الآلي والمقابلات (2)'}
        </button>
      </div>
    </div>

    <!-- Main Tools Grid Section: Identical Design to Homepage -->
    <section class="section" style="padding-top:0;padding-bottom:3.5rem">
      <div class="container">
        
        <div class="tools-section__grid">
          ${filteredTools.map((tool, index) => `
            <div class="card tool-card animate-on-scroll delay-${(index % 3) + 1}" style="cursor:pointer" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
              <span class="tag tag--accent" style="position:absolute;top:var(--space-4);${isEn ? 'right' : 'left'}:var(--space-4)">${tool.tag}</span>
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:32px;height:32px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              <a href="${tool.link}" class="card__link" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
                ${isEn ? 'Use Tool Free' : 'جرّب الأداة الآن'}
                <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
            </div>
          `).join('')}
        </div>

        <!-- Integrated 5-Step Career Pipeline Roadmap -->
        <div style="margin-top:4.5rem;background:linear-gradient(150deg,rgba(15,23,42,0.95),rgba(30,41,59,0.98));border:1px solid rgba(99,102,241,0.4);border-radius:26px;padding:3rem 2.25rem;box-shadow:0 20px 50px rgba(0,0,0,0.55);position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#6366f1,#38bdf8,#a78bfa,transparent);"></div>
          
          <div style="text-align:center;margin-bottom:2.5rem">
            <span class="section__badge" style="background:rgba(56,189,248,0.18);border:1px solid rgba(56,189,248,0.4);color:#38bdf8;padding:5px 16px;border-radius:24px;font-weight:800;font-size:0.85rem">
              ${isEn ? 'The High-Impact Career Pipeline' : 'خطة النجاح المتكاملة بالذكاء الاصطناعي'}
            </span>
            <h2 style="font-size:1.75rem;font-weight:900;color:#ffffff;margin-top:0.85rem;margin-bottom:0.5rem">
              ${isEn ? 'How to Use the Suite to Land Job Offers 3x Faster' : 'كيف تحقق أعلى فائدة وتقتنص العروض الوظيفية أسرع بثلاث مرات'}
            </h2>
            <p style="color:#94a3b8;font-size:0.98rem;max-width:640px;margin:0 auto;line-height:1.6">
              ${isEn 
                ? 'Follow these consecutive steps with our AI tools to maximize your interview conversion rate.' 
                : 'اتبع هذه الخطوات المتسلسلة لضمان تجهيز ملف مهني متكامل ومقنع لأي شركة ترغب بالعمل فيها.'
              }
            </p>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(210px, 1fr));gap:1.5rem">
            
            <div style="background:rgba(10,15,30,0.6);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:1.5rem 1.25rem;text-align:center;transition:transform 0.25s;">
              <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#0e7490,#06b6d4);color:#ffffff;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 0.85rem;font-size:1.15rem;box-shadow:0 4px 12px rgba(6,182,212,0.4)">1</div>
              <h3 style="font-size:1.05rem;color:#ffffff;font-weight:800;margin-bottom:0.5rem">${isEn ? 'Extract Keywords' : 'استخرج الكلمات'}</h3>
              <p style="font-size:0.84rem;color:#94a3b8;line-height:1.6">${isEn ? 'Extract essential skills from target job postings.' : 'استخرج المهارات والكلمات المفتاحية من إعلان الوظيفة بدقة.'}</p>
            </div>

            <div style="background:rgba(10,15,30,0.6);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:1.5rem 1.25rem;text-align:center;transition:transform 0.25s;">
              <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#1d4ed8,#3b82f6);color:#ffffff;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 0.85rem;font-size:1.15rem;box-shadow:0 4px 12px rgba(59,130,246,0.4)">2</div>
              <h3 style="font-size:1.05rem;color:#ffffff;font-weight:800;margin-bottom:0.5rem">${isEn ? 'Build ATS Resume' : 'ابنِ سيرتك الذاتية'}</h3>
              <p style="font-size:0.84rem;color:#94a3b8;line-height:1.6">${isEn ? 'Create your clean ATS format with live PDF preview.' : 'صمّم سيرة متوافقة تماماً وتصدير PDF فوري بنقرة واحدة.'}</p>
            </div>

            <div style="background:rgba(10,15,30,0.6);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:1.5rem 1.25rem;text-align:center;transition:transform 0.25s;">
              <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#047857,#10b981);color:#ffffff;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 0.85rem;font-size:1.15rem;box-shadow:0 4px 12px rgba(16,185,129,0.4)">3</div>
              <h3 style="font-size:1.05rem;color:#ffffff;font-weight:800;margin-bottom:0.5rem">${isEn ? 'Run ATS Checker' : 'افحص التوافق'}</h3>
              <p style="font-size:0.84rem;color:#94a3b8;line-height:1.6">${isEn ? 'Scan your resume to ensure an ATS score above 85%.' : 'قارن سيرتك وتأكد من وصول معدل التوافق لأكثر من 85%.'}</p>
            </div>

            <div style="background:rgba(10,15,30,0.6);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:1.5rem 1.25rem;text-align:center;transition:transform 0.25s;">
              <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#6d28d9,#8b5cf6);color:#ffffff;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 0.85rem;font-size:1.15rem;box-shadow:0 4px 12px rgba(139,92,246,0.4)">4</div>
              <h3 style="font-size:1.05rem;color:#ffffff;font-weight:800;margin-bottom:0.5rem">${isEn ? 'Tailor Cover Letter' : 'ولّد خطاب التقديم'}</h3>
              <p style="font-size:0.84rem;color:#94a3b8;line-height:1.6">${isEn ? 'Generate a custom letter matching employer tone.' : 'اكتب خطاب تقديم مخصص يبهر مسؤول الموارد البشرية.'}</p>
            </div>

            <div style="background:rgba(10,15,30,0.6);border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:1.5rem 1.25rem;text-align:center;transition:transform 0.25s;">
              <div style="width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#b45309,#f59e0b);color:#ffffff;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 0.85rem;font-size:1.15rem;box-shadow:0 4px 12px rgba(245,158,11,0.4)">5</div>
              <h3 style="font-size:1.05rem;color:#ffffff;font-weight:800;margin-bottom:0.5rem">${isEn ? 'Ace the Interview' : 'تدرب على المقابلة'}</h3>
              <p style="font-size:0.84rem;color:#94a3b8;line-height:1.6">${isEn ? 'Practice model STAR answers to close the offer.' : 'تدرّب على أسئلة المقابلة بنموذج STAR لتقتنص الوظيفة.'}</p>
            </div>

          </div>
        </div>

        <!-- Google AdSense - Display Unit Row -->
        <div style="display:flex;justify-content:center;align-items:center;gap:2rem;margin-top:3.5rem;flex-wrap:wrap;">
          <!-- Medium Rectangle 300x250 -->
          <div class="ad-frame-wrapper ad-frame-rectangle animate-on-scroll" style="margin:0;max-width:340px;">
            <div class="ad-frame-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
              ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored Partner'}
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

CareerAI.setToolsCategory = function(cat) {
  window.CareerAI.toolsFilterCategory = cat;
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages && window.CareerAI.pages.tools) {
    main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.tools() + '</div>';
    if (window.CareerAI.initAnimations) window.CareerAI.initAnimations();
    if (window.CareerAI.initAdSense) window.CareerAI.initAdSense();
  }
};

window.CareerAI.pages.toolsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Free AI Career & Resume Tools Suite | Factor Career',
      description: 'Explore 5 free AI tools: ATS Resume Builder, Resume Match Checker, Cover Letter Generator, Interview Prep Coach, and ATS Keywords Matcher.',
      keywords: 'AI Career Tools, ATS Resume Builder, Resume Checker, Cover Letter Generator, Interview Coach, Factor Career'
    };
  }
  return {
    title: 'أدوات الذكاء الاصطناعي المهنية المجانية الكاملة | فكتور كارير',
    description: 'استكشف منظومة أدوات الذكاء الاصطناعي المتكاملة: منشئ السيرة الذاتية ATS، فاحص التوافق، مولد خطابات التقديم، مدرب المقابلات، ومستخرج الكلمات المفتاحية.',
    keywords: 'أدوات السيرة الذاتية, منشئ سيرة ذاتية ATS, فاحص السيرة الذاتية, خطابات التقديم, أسئلة المقابلات, Factor Career'
  };
};
