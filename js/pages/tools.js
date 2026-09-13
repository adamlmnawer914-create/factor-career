/* ============================================
   Factor Career - Advanced AI Tools Catalog & Suite Hub v4.0
   100% Free, High-End Luxury Dark UI, Filter Tabs,
   Full Mobile Responsiveness & Rich Capability Checklists
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
      badge: isEn ? 'Flagship Tool' : 'الأداة الرئيسية',
      badgeColor: '#3b82f6',
      title: isEn ? 'AI Resume Builder & Styler' : 'منشئ السيرة الذاتية الذكي المطور',
      desc: isEn 
        ? 'Create ATS-compliant, executive resumes with dynamic live preview, 4 luxury templates, and instant PDF download.'
        : 'أنشئ سيرة ذاتية احترافية ومتوافقة مع خوارزميات ATS مع 4 قوالب فخمة ومعاينة فورية وتصدير PDF مجاني.',
      icon: icons.fileText || icons.resume,
      color: 'primary',
      link: '/tools/resume-builder',
      features: isEn ? [
        '4 Luxury Templates (Modern, Slate, Tech, Clean)',
        'Real-Time Live ATS Completeness Score',
        'AI Summary & High-Impact Action Verb Suggester'
      ] : [
        '4 قوالب عصرية متوافقة 100% مع الفرز الآلي ATS',
        'مقياس فوري لقوة واكتمال السيرة الذاتية',
        'تحسين الملخص المهني وصياغة إنجازات رقمية بالذكاء الاصطناعي'
      ],
      metric: isEn ? 'Pass Rate: 99.2%' : 'نسبة اجتياز ATS: 99.2%',
      cta: isEn ? 'Launch Resume Builder 🚀' : 'ابدأ بناء سيرتك مجاناً 🚀'
    },
    {
      id: 'resume-analyzer',
      category: 'cv',
      badge: isEn ? 'Deep Scan' : 'فحص عميق',
      badgeColor: '#10b981',
      title: isEn ? 'AI ATS Resume Checker & Scanner' : 'محلل وفاحص السيرة الذاتية الذكي',
      desc: isEn
        ? 'Scan and benchmark your resume against job postings to get a 4-dimensional score, keyword gaps, and actionable fixes.'
        : 'افحص نسبة توافق سيرتك الذاتية مع الوصف الوظيفي واحصل على تقييم رباعي الأبعاد والكلمات الناقصة فوراً.',
      icon: icons.check,
      color: 'accent',
      link: '/tools/resume-analyzer',
      features: isEn ? [
        '4-Dimension Match Score (Keywords, Experience, Formatting)',
        'Side-by-Side Matched vs Missing Keywords Matrix',
        'Actionable Priority Fixes Before Submitting'
      ] : [
        'تقييم شامل رباعي الأبعاد (الكلمات، الخبرات، التنسيق، المهارات)',
        'مقارنة الكلمات المفتاحية المتوفرة والمفقودة في سيرتك',
        'توصيات تصحيحية ذات أولوية تضمن وصولك لمسؤول التوظيف'
      ],
      metric: isEn ? 'Score 90+ Target' : 'مستهدف توافق 90%+',
      cta: isEn ? 'Scan Resume with AI 🔍' : 'افحص سيرتك الذاتية الآن 🔍'
    },
    {
      id: 'cover-letter-generator',
      category: 'cv',
      badge: isEn ? 'AI Writer' : 'كاتب ذكي',
      badgeColor: '#8b5cf6',
      title: isEn ? 'AI Tailored Cover Letter Generator' : 'مولد خطابات التقديم الاحترافية',
      desc: isEn
        ? 'Craft compelling, personalized cover letters matching your target role and employer culture in seconds.'
        : 'ولّد خطابات تقديم مقنعة ومخصصة لكل شركة ووظيفة لزيادة معدل الاتصال بك لحضور المقابلات.',
      icon: icons.mail,
      color: 'secondary',
      link: '/tools/cover-letter-generator',
      features: isEn ? [
        '4 Distinct Writing Tones (Professional, Confident, Creative)',
        '1-Click AI Refine (Shorten, Expand, Technical Focus)',
        'One-Click Copy & High-Resolution PDF Download'
      ] : [
        '4 نبرات صياغة مختلفة (احترافي، واثق، إبداعي، مختصر)',
        'أزرار إعادة صياغة ذكية بنقرة واحدة لضبط الطول والتركيز',
        'تصدير فوري بصيغة PDF وتنسيق طباعة أنيق'
      ],
      metric: isEn ? '3x Interview Call Rate' : 'مضاعفة فرص استدعاء المقابلات',
      cta: isEn ? 'Generate Cover Letter ✍️' : 'ولّد خطاب التقديم الآن ✍️'
    },
    {
      id: 'interview-questions',
      category: 'prep',
      badge: isEn ? 'STAR Method' : 'أسلوب STAR',
      badgeColor: '#f59e0b',
      title: isEn ? 'AI Interview Questions & STAR Coach' : 'مدرب المقابلات الوظيفية بنموذج STAR',
      desc: isEn
        ? 'Master your upcoming interviews with role-specific behavioral questions and structured STAR model answers.'
        : 'استعد لمقابلتك القادمة عبر أسئلة سلوكية وتقنية متخصصة مع إجابات نموذجية وفق منهجية STAR.',
      icon: icons.interview || icons.users,
      color: 'warning',
      link: '/tools/interview-questions',
      features: isEn ? [
        'Role & Seniority Level Adaptive Questions',
        'Structured STAR Model (Situation, Task, Action, Result)',
        'Hiring Manager Insider Tips & Trap Warnings'
      ] : [
        'أسئلة مخصصة حسب المجال والمستوى الوظيفي (مبتدئ، متوسط، خبير)',
        'إجابات مفصلة وفق إطار (الموقف، المهمة، الإجراء، النتيجة)',
        'نصائح سرية عما يبحث عنه مسؤول التوظيف خلف كل سؤال'
      ],
      metric: isEn ? '50+ Verified Roles' : 'أكثر من 50 مجال وظيفي',
      cta: isEn ? 'Practice Interview Coach 🎯' : 'تدرّب على المقابلات الآن 🎯'
    },
    {
      id: 'ats-keywords',
      category: 'prep',
      badge: isEn ? 'Keyword Booster' : 'مستخرج الكلمات',
      badgeColor: '#06b6d4',
      title: isEn ? 'AI ATS Keywords Matcher & Extractor' : 'مستخرج الكلمات المفتاحية لأنظمة ATS',
      desc: isEn
        ? 'Extract high-ranking hard skills, technical qualifications, and industry buzzwords from any job posting.'
        : 'استخرج الكلمات المفتاحية والمهارات الأكثر تكراراً وأهمية في أي إعلان وظيفي بنقرة زر واحدة.',
      icon: icons.target || icons.skills,
      color: 'primary',
      link: '/tools/ats-keywords',
      features: isEn ? [
        'Triple Categorization (Technical Skills, Soft Skills, Certs)',
        'Frequency & Importance Weight Priority',
        'Instant 1-Click Copy Optimized for Resume Bullets'
      ] : [
        'تصنيف ثلاثي فوري (مهارات تقنية، مهارات قيادية، أدوات وشهادات)',
        'تحليل تكرار وأولوية كل كلمة مفتاحية في الوصف الوظيفي',
        'نسخ فوري للكلمات بنقرة واحدة لدمجها في نقاط سيرتك'
      ],
      metric: isEn ? 'Density Optimizer' : 'تعزيز الكثافة المفتاحية',
      cta: isEn ? 'Extract Keywords Now ⚡' : 'استخرج الكلمات المفتاحية ⚡'
    }
  ];

  const filteredTools = currentCategory === 'all' 
    ? allTools 
    : allTools.filter(t => t.category === currentCategory);

  return `
    <!-- Header -->
    <div class="page-header page-header--compact" style="background:linear-gradient(135deg,#0a1020 0%,#0f172a 50%,#1e1b4b 100%);position:relative;overflow:hidden">
      <div class="container">
        <div class="page-header__content" style="position:relative;z-index:2">
          
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.tools', 'الأدوات الذكية')}</span>
          </div>

          <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:1rem;flex-wrap:wrap">
            <span class="section__badge" style="background:rgba(99,102,241,0.18);border:1px solid rgba(99,102,241,0.35);color:#c7d2fe;padding:6px 16px;border-radius:30px;display:inline-flex;align-items:center;gap:6px">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || ''}</span>
              ${isEn ? 'Complete AI Career Platform' : 'منظومة الذكاء الاصطناعي المهنية المتكاملة'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.35);color:#34d399;padding:6px 16px;border-radius:30px">
              ✓ ${isEn ? '100% Free & Unlimited' : 'مجانية بالكامل وبلا حدود'}
            </span>
          </div>

          <h1 class="page-header__title" style="font-size:clamp(1.8rem, 3.5vw, 2.6rem);font-weight:800;color:#ffffff;line-height:1.3;margin-bottom:1rem">
            ${isEn 
              ? 'Empower Your Career with <span style="background:linear-gradient(135deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">AI Precision</span>' 
              : 'ارتقِ بمسارك المهني بأدوات <span style="background:linear-gradient(135deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">الذكاء الاصطناعي المتقدمة</span>'
            }
          </h1>

          <p class="page-header__subtitle" style="font-size:1.05rem;color:#cbd5e1;max-width:680px;margin:0 auto 2rem;line-height:1.7">
            ${isEn 
              ? '5 integrated high-performance AI tools engineered to build ATS-standard resumes, craft compelling letters, and pass interviews.'
              : 'خمس أدوات ذكية متكاملة ومجانية مصممة لتجهيز سيرة ذاتية تضمن تجاوز الفرز الآلي وصياغة خطابات مبهرة واجتياز المقابلات بثقة.'
            }
          </p>

          <!-- Top Stats Bar -->
          <div style="display:flex;justify-content:center;align-items:center;gap:2rem;flex-wrap:wrap;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);padding:1rem 1.5rem;border-radius:18px;max-width:760px;margin:0 auto">
            <div style="text-align:center">
              <div style="font-size:1.4rem;font-weight:800;color:#38bdf8">5</div>
              <div style="font-size:0.75rem;color:#94a3b8;font-weight:600">${isEn ? 'Specialized AI Tools' : 'أدوات ذكية متخصصة'}</div>
            </div>
            <div style="width:1px;height:30px;background:rgba(255,255,255,0.1)"></div>
            <div style="text-align:center">
              <div style="font-size:1.4rem;font-weight:800;color:#34d399">100%</div>
              <div style="font-size:0.75rem;color:#94a3b8;font-weight:600">${isEn ? 'Free & Instant Access' : 'مجانية وبدون قيود'}</div>
            </div>
            <div style="width:1px;height:30px;background:rgba(255,255,255,0.1)"></div>
            <div style="text-align:center">
              <div style="font-size:1.4rem;font-weight:800;color:#a78bfa">ATS Ready</div>
              <div style="font-size:0.75rem;color:#94a3b8;font-weight:600">${isEn ? 'Industry Screening Pass' : 'معتمدة لأنظمة الفرز'}</div>
            </div>
            <div style="width:1px;height:30px;background:rgba(255,255,255,0.1)"></div>
            <div style="text-align:center">
              <div style="font-size:1.4rem;font-weight:800;color:#f59e0b">PDF</div>
              <div style="font-size:0.75rem;color:#94a3b8;font-weight:600">${isEn ? 'Live Formats & Export' : 'تصدير فوري ومباشر'}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Google AdSense - Top Leaderboard Banner -->
    <div class="container" style="margin-top:2rem;margin-bottom:1rem">
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

    <!-- Category Filter Controls -->
    <div class="container" style="margin-top:1.5rem;margin-bottom:2rem">
      <div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap;">
        <button class="btn btn--sm ${currentCategory === 'all' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setToolsCategory('all')" style="border-radius:30px;padding:0.5rem 1.4rem;font-weight:700">
          🌟 ${isEn ? 'All Tools (5)' : 'جميع الأدوات (5)'}
        </button>
        <button class="btn btn--sm ${currentCategory === 'cv' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setToolsCategory('cv')" style="border-radius:30px;padding:0.5rem 1.4rem;font-weight:700">
          📄 ${isEn ? 'Resume & Applications' : 'السيرة الذاتية ورسائل التقديم'}
        </button>
        <button class="btn btn--sm ${currentCategory === 'prep' ? 'btn--primary' : 'btn--secondary'}" onclick="CareerAI.setToolsCategory('prep')" style="border-radius:30px;padding:0.5rem 1.4rem;font-weight:700">
          🎯 ${isEn ? 'ATS & Interview Prep' : 'الفرز الآلي والمقابلات'}
        </button>
      </div>
    </div>

    <!-- Main Tools Grid Section -->
    <section class="section" style="padding-top:0;padding-bottom:3rem">
      <div class="container">
        
        <div class="tools-section__grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:2rem;">
          ${filteredTools.map((tool, index) => `
            <div class="card tool-card animate-on-scroll delay-${(index % 3) + 1}" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:20px;padding:2rem;display:flex;flex-direction:column;position:relative;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.12);transition:transform 0.25s, box-shadow 0.25s;cursor:pointer" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
              
              <!-- Top Category & Metric Row -->
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;gap:0.5rem">
                <span class="tag" style="background:${tool.badgeColor}20;color:${tool.badgeColor};border:1px solid ${tool.badgeColor}40;padding:4px 12px;border-radius:20px;font-size:0.75rem;font-weight:700">
                  ${tool.badge}
                </span>
                <span style="font-size:0.75rem;font-weight:700;color:var(--color-text-muted);background:rgba(255,255,255,0.06);padding:3px 10px;border-radius:12px">
                  ${tool.metric}
                </span>
              </div>

              <!-- Tool Icon & Title -->
              <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
                <div class="card__icon card__icon--${tool.color}" style="width:52px;height:52px;min-width:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(99,102,241,0.25)">
                  <span style="width:28px;height:28px;display:inline-flex">${tool.icon}</span>
                </div>
                <h2 style="font-size:1.25rem;font-weight:800;color:var(--color-text);margin:0;line-height:1.35">
                  ${tool.title}
                </h2>
              </div>

              <!-- Tool Description -->
              <p style="font-size:0.92rem;color:var(--color-text-muted);line-height:1.65;margin-bottom:1.5rem;flex:1">
                ${tool.desc}
              </p>

              <!-- Capability Feature Bullets -->
              <div style="background:rgba(15,23,42,0.4);border:1px solid var(--color-border-light);border-radius:12px;padding:0.9rem 1.1rem;margin-bottom:1.5rem;display:flex;flex-direction:column;gap:0.5rem">
                ${tool.features.map(f => `
                  <div style="display:flex;align-items:center;gap:8px;font-size:0.82rem;color:#cbd5e1;line-height:1.4">
                    <span style="color:#34d399;font-weight:bold;font-size:0.9rem">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Action Button (100% visible, touch friendly) -->
              <a href="${tool.link}" class="btn btn--primary btn--md" style="width:100%;text-align:center;padding:0.85rem 1.5rem;font-weight:800;border-radius:12px;box-shadow:0 4px 15px rgba(99,102,241,0.35);display:flex;align-items:center;justify-content:center;gap:8px" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
                <span>${tool.cta}</span>
              </a>

            </div>
          `).join('')}
        </div>

        <!-- Integrated 5-Step Roadmap Guide -->
        <div style="margin-top:4.5rem;background:linear-gradient(135deg,rgba(15,23,42,0.9),rgba(30,41,59,0.9));border:1px solid rgba(99,102,241,0.35);border-radius:24px;padding:2.5rem 2rem;box-shadow:0 15px 40px rgba(0,0,0,0.35)">
          <div style="text-align:center;margin-bottom:2.5rem">
            <span class="section__badge" style="background:rgba(56,189,248,0.15);color:#38bdf8;padding:4px 14px;border-radius:20px">
              ${isEn ? 'The High-Impact Career Pipeline' : 'خطة النجاح المتكاملة بالذكاء الاصطناعي'}
            </span>
            <h2 style="font-size:1.6rem;font-weight:800;color:#ffffff;margin-top:0.75rem;margin-bottom:0.5rem">
              ${isEn ? 'How to Use the Suite to Land Job Offers 3x Faster' : 'كيف تحقق أعلى فائدة وتقتنص العروض الوظيفية أسرع بثلاث مرات'}
            </h2>
            <p style="color:#94a3b8;font-size:0.95rem;max-width:600px;margin:0 auto">
              ${isEn 
                ? 'Follow these consecutive steps with our AI tools to maximize your interview conversion rate.' 
                : 'اتبع هذه الخطوات المتسلسلة لضمان تجهيز ملف مهني متكامل ومقنع لأي شركة ترغب بالعمل فيها.'
              }
            </p>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1.5rem">
            
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.25rem;text-align:center">
              <div style="width:36px;height:36px;border-radius:50%;background:#38bdf8;color:#0f172a;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.1rem">1</div>
              <h3 style="font-size:1rem;color:#ffffff;font-weight:700;margin-bottom:0.4rem">${isEn ? 'Extract Keywords' : 'استخرج الكلمات'}</h3>
              <p style="font-size:0.8rem;color:#94a3b8;line-height:1.5">${isEn ? 'Use ATS Keywords Matcher on target job posts.' : 'استخرج المهارات والكلمات المفتاحية من إعلان الوظيفة.'}</p>
            </div>

            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.25rem;text-align:center">
              <div style="width:36px;height:36px;border-radius:50%;background:#818cf8;color:#ffffff;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.1rem">2</div>
              <h3 style="font-size:1rem;color:#ffffff;font-weight:700;margin-bottom:0.4rem">${isEn ? 'Build ATS Resume' : 'ابنِ سيرتك الذاتية'}</h3>
              <p style="font-size:0.8rem;color:#94a3b8;line-height:1.5">${isEn ? 'Create your clean ATS format with live PDF preview.' : 'صمّم سيرة متوافقة تماماً وتصدير PDF فوري بنقرة واحدة.'}</p>
            </div>

            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.25rem;text-align:center">
              <div style="width:36px;height:36px;border-radius:50%;background:#34d399;color:#0f172a;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.1rem">3</div>
              <h3 style="font-size:1rem;color:#ffffff;font-weight:700;margin-bottom:0.4rem">${isEn ? 'Run ATS Checker' : 'افحص التوافق'}</h3>
              <p style="font-size:0.8rem;color:#94a3b8;line-height:1.5">${isEn ? 'Scan your resume to ensure an ATS score above 85%.' : 'قارن سيرتك وتأكد من وصول معدل التوافق لأكثر من 85%.'}</p>
            </div>

            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.25rem;text-align:center">
              <div style="width:36px;height:36px;border-radius:50%;background:#a78bfa;color:#0f172a;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.1rem">4</div>
              <h3 style="font-size:1rem;color:#ffffff;font-weight:700;margin-bottom:0.4rem">${isEn ? 'Tailor Cover Letter' : 'ولّد خطاب التقديم'}</h3>
              <p style="font-size:0.8rem;color:#94a3b8;line-height:1.5">${isEn ? 'Generate a custom letter matching employer tone.' : 'اكتب خطاب تقديم مخصص يبهر مسؤول الموارد البشرية.'}</p>
            </div>

            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.25rem;text-align:center">
              <div style="width:36px;height:36px;border-radius:50%;background:#f59e0b;color:#0f172a;font-weight:800;display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.1rem">5</div>
              <h3 style="font-size:1rem;color:#ffffff;font-weight:700;margin-bottom:0.4rem">${isEn ? 'Ace the Interview' : 'تدرب على المقابلة'}</h3>
              <p style="font-size:0.8rem;color:#94a3b8;line-height:1.5">${isEn ? 'Practice model STAR answers to close the offer.' : 'تدرّب على أسئلة المقابلة بنموذج STAR لتقتنص الوظيفة.'}</p>
            </div>

          </div>
        </div>

        <!-- Google AdSense - Display Unit Row -->
        <div style="display:flex;justify-content:center;align-items:center;gap:2rem;margin-top:3.5rem;flex-wrap:wrap;">
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

      </div>
    </section>
  `;
};

CareerAI.setToolsCategory = function(cat) {
  window.CareerAI.toolsFilterCategory = cat;
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages && window.CareerAI.pages.tools) {
    main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.tools() + '</div>';
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
