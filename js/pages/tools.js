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
      badge: isEn ? 'Flagship AI Builder' : 'الأداة الرئيسية المعتمدة',
      badgeBg: 'rgba(59, 130, 246, 0.15)',
      badgeTextColor: '#93c5fd',
      beaconColor: '#38bdf8',
      glowColor: '#3b82f6',
      glowShadow: 'rgba(59, 130, 246, 0.45)',
      laserBg: 'linear-gradient(90deg, #3b82f6, #60a5fa, #38bdf8)',
      iconGradient: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
      checkColor: '#60a5fa',
      checkBg: 'rgba(59, 130, 246, 0.2)',
      btnGradient: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #38bdf8 100%)',
      title: isEn ? 'AI Resume Builder & Styler' : 'منشئ السيرة الذاتية الذكي المطور',
      subtag: isEn ? 'ATS-Compliant Structure & 4 Pro Layouts' : 'متوافق 100% مع أنظمة الفرز الآلي وتصدير فوري',
      desc: isEn 
        ? 'Engineered to bypass applicant tracking systems (ATS). Features dynamic live styling, high-impact action verbs, score gauge, and instant PDF download.'
        : 'أنشئ سيرة ذاتية تنفيذية متوافقة 100% مع خوارزميات الفرز ATS مع 4 قوالب فخمة ومعاينة فورية ومقياس جودة حي وتصدير PDF مباشر مجاناً.',
      icon: icons.fileText || icons.resume || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      link: '/tools/resume-builder',
      features: isEn ? [
        '4 Executive Templates (Modern, Slate, Tech, Clean)',
        'Real-Time Live ATS Completeness Score & Gauge',
        'AI High-Impact Summary & Achievement Bullet Suggester'
      ] : [
        '4 قوالب تنفيذية عصرية متوافقة تماماً مع بوابات التوظيف العالمية',
        'مقياس فوري مباشر يحلل قوة واكتمال كل قسم بالسيرة',
        'صياغة الملخص المهني والإنجازات الملموسة بالذكاء الاصطناعي'
      ],
      metric: isEn ? 'Pass Rate: 99.2%' : 'نسبة اجتياز ATS: 99.2%',
      cta: isEn ? 'Launch Resume Builder 🚀' : 'ابدأ بناء سيرتك الذاتية 🚀'
    },
    {
      id: 'resume-analyzer',
      category: 'cv',
      badge: isEn ? '4D Deep Scanner' : 'فحص عميق رباعي الأبعاد',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeTextColor: '#6ee7b7',
      beaconColor: '#34d399',
      glowColor: '#10b981',
      glowShadow: 'rgba(16, 185, 129, 0.45)',
      laserBg: 'linear-gradient(90deg, #10b981, #34d399, #059669)',
      iconGradient: 'linear-gradient(135deg, #047857 0%, #10b981 100%)',
      checkColor: '#34d399',
      checkBg: 'rgba(16, 185, 129, 0.2)',
      btnGradient: 'linear-gradient(135deg, #047857 0%, #059669 50%, #10b981 100%)',
      title: isEn ? 'AI ATS Resume Checker & Scanner' : 'محلل وفاحص السيرة الذاتية الذكي',
      subtag: isEn ? 'Job Benchmark & Critical Keyword Gap Fix' : 'مقارنة دقيقة مع الوصف الوظيفي والكلمات المفقودة',
      desc: isEn
        ? 'Deep scan your resume against job postings to calculate a 4-dimensional score dial, identify keyword gaps, and receive actionable fixes before applying.'
        : 'افحص مدى تطابق سيرتك الذاتية مع متطلبات الوظيفة الشاغرة واحصل على مؤشر تقييم دائري حي وقائمة الكلمات المفتاحية الناقصة لتصحيحها فوراً.',
      icon: icons.check || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      link: '/tools/resume-analyzer',
      features: isEn ? [
        '4-Dimension Match Score (Keywords, Experience, Formatting)',
        'Side-by-Side Matched vs Missing Keywords Matrix with 1-Click Copy',
        'Hiring Manager Priority Checklist Before Submitting'
      ] : [
        'تقييم توافق رباعي الأبعاد (الكلمات، الخبرات، التنسيق، المهارات التقنية)',
        'جدول مقارنة الكلمات المتوفرة والمفقودة مع زر نسخ فوري للنواقص',
        'توصيات تصحيحية ذات أولوية تضمن ترشيحك لمسؤول التوظيف'
      ],
      metric: isEn ? 'Score 90+ Target' : 'مستهدف توافق 90%+',
      cta: isEn ? 'Scan Resume with AI 🔍' : 'افحص سيرتك الذاتية الآن 🔍'
    },
    {
      id: 'cover-letter-generator',
      category: 'cv',
      badge: isEn ? 'Executive Pitch AI' : 'كاتب خطابات التقديم المرموقة',
      badgeBg: 'rgba(139, 92, 246, 0.15)',
      badgeTextColor: '#d8b4fe',
      beaconColor: '#c084fc',
      glowColor: '#8b5cf6',
      glowShadow: 'rgba(139, 92, 246, 0.45)',
      laserBg: 'linear-gradient(90deg, #8b5cf6, #c084fc, #ec4899)',
      iconGradient: 'linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)',
      checkColor: '#c084fc',
      checkBg: 'rgba(139, 92, 246, 0.2)',
      btnGradient: 'linear-gradient(135deg, #6d28d9 0%, #7c3aed 50%, #8b5cf6 100%)',
      title: isEn ? 'AI Tailored Cover Letter Generator' : 'مولد خطابات التقديم الاحترافية',
      subtag: isEn ? 'Personalized Value Proposition in 5 Tones' : 'صياغة مقنعة مخصصة لكل شركة تضاعف فرص مقابلتك',
      desc: isEn
        ? 'Generate personalized, highly persuasive cover letters tailored to your target company and seniority in seconds. Choose from 5 tones with 1-click PDF download.'
        : 'ولّد خطابات تقديم استثنائية ومخصصة لكل شركة ووظيفة تبرز نقاط قوتك بثقة. يدعم 5 نبرات صياغة وتوليد ثنائي اللغة (عربي/إنجليزي) وتصدير فوري.',
      icon: icons.mail || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      link: '/tools/cover-letter-generator',
      features: isEn ? [
        '5 Distinct Writing Tones (Executive, Confident, Modern, Creative)',
        '3 Length Modes (Concise, Balanced, Comprehensive)',
        'Bilingual Output (Arabic & English) with Instant PDF/TXT'
      ] : [
        '5 نبرات كتابة مختلفة (تنفيذي رفيع، واثق، إبداعي، تقني، مختصر)',
        '3 أنماط للطول مع تحكم كامل بالتركيز على الإنجازات',
        'دعم كامل للغتين العربية والإنجليزية وتصدير فوري PDF/TXT'
      ],
      metric: isEn ? '3x Interview Call Rate' : 'مضاعفة استدعاء المقابلات',
      cta: isEn ? 'Generate Cover Letter ✍️' : 'ولّد خطاب التقديم الآن ✍️'
    },
    {
      id: 'interview-questions',
      category: 'prep',
      badge: isEn ? 'STAR Method Coach' : 'مدرب المقابلات بنموذج STAR',
      badgeBg: 'rgba(245, 158, 11, 0.15)',
      badgeTextColor: '#fde68a',
      beaconColor: '#fbbf24',
      glowColor: '#f59e0b',
      glowShadow: 'rgba(245, 158, 11, 0.45)',
      laserBg: 'linear-gradient(90deg, #f59e0b, #fbbf24, #f97316)',
      iconGradient: 'linear-gradient(135deg, #b45309 0%, #f59e0b 100%)',
      checkColor: '#fbbf24',
      checkBg: 'rgba(245, 158, 11, 0.2)',
      btnGradient: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)',
      title: isEn ? 'AI Interview Questions & STAR Coach' : 'مدرب المقابلات الوظيفية بنموذج STAR',
      subtag: isEn ? 'Role-Specific Sim & Behavioral Model Answers' : 'إجابات نموذجية تفصيلية ومؤقت تدريب عملي',
      desc: isEn
        ? 'Ace technical and behavioral interviews with tailored questions for 50+ career roles. Includes STAR framework model answers, pro tips, and interactive practice timer.'
        : 'استعد لمقابلاتك بأقوى الأسئلة السلوكية والتقنية المتوقعة لمجالك ومستواك. يتضمن إجابات نموذجية بهيكل STAR ونصائح حصرية ومؤقت تفاعلي للتدريب.',
      icon: icons.interview || icons.users || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      link: '/tools/interview-questions',
      features: isEn ? [
        '50+ Career Tracks Adaptive Questions (Entry to Executive)',
        'Full STAR Framework Breakdown (Situation, Task, Action, Result)',
        'Built-in 2-Minute Practice Timer & Hiring Manager Insider Secrets'
      ] : [
        'أسئلة مخصصة لأكثر من 50 تخصصاً وظيفياً بمستويات متعددة',
        'تفكيك تفصيلي للإجابة النموذجية (الموقف، المهمة، الإجراء، النتيجة)',
        'مؤقت تدريب صوتي/ذهني لدقيقتين مع نصائح سرية خلف نية كل سؤال'
      ],
      metric: isEn ? '50+ Verified Roles' : 'أكثر من 50 مجال وظيفي',
      cta: isEn ? 'Practice Interview Coach 🎯' : 'تدرّب على المقابلات الآن 🎯'
    },
    {
      id: 'ats-keywords',
      category: 'prep',
      badge: isEn ? 'NLP Keyword Matcher' : 'مستخرج الكلمات المفتاحية بالذكاء الاصطناعي',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      badgeTextColor: '#a5f3fc',
      beaconColor: '#22d3ee',
      glowColor: '#06b6d4',
      glowShadow: 'rgba(6, 182, 212, 0.45)',
      laserBg: 'linear-gradient(90deg, #06b6d4, #38bdf8, #3b82f6)',
      iconGradient: 'linear-gradient(135deg, #0e7490 0%, #06b6d4 100%)',
      checkColor: '#22d3ee',
      checkBg: 'rgba(6, 182, 212, 0.2)',
      btnGradient: 'linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #38bdf8 100%)',
      title: isEn ? 'AI ATS Keywords Matcher & Extractor' : 'مستخرج ومطابق الكلمات المفتاحية ATS',
      subtag: isEn ? 'Live Match Percentage & Skill Gap Discovery' : 'تحليل فوري لكثافة المهارات ونقاط القوة لسيرتك',
      desc: isEn
        ? 'Extract hard skills, technical requirements, and industry keywords from job postings. Compare them instantly against your resume with 1-click missing keywords export.'
        : 'استخرج المهارات التقنية والشهادات والكلمات الأكثر أهمية وتكراراً من أي إعلان وظيفي وقارنها فورياً مع سيرتك مع إمكانية نسخ الكلمات الناقصة بنقرة واحدة.',
      icon: icons.target || icons.skills || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
      link: '/tools/ats-keywords',
      features: isEn ? [
        '4-Tier Categorization (Technical Skills, Soft Skills, Tools, Certs)',
        'Live Match Rate Meter against Pasted Resume Text',
        '1-Click Copy of Missing Priority Keywords for Instant Bullet Integration'
      ] : [
        'تصنيف رباعي متقدم (مهارات تقنية، كفاءات قيادية، أدوات، شهادات مهنية)',
        'مقياس نسبة التطابق الفوري بمقارنة نص السيرة مع الوصف الوظيفي',
        'نسخ فوري بنقرة واحدة لجميع الكلمات الناقصة لدمجها في نقاط سيرتك'
      ],
      metric: isEn ? 'Density Optimizer' : 'تعزيز الكثافة المفتاحية',
      cta: isEn ? 'Extract Keywords Now ⚡' : 'استخرج الكلمات المفتاحية ⚡'
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

          <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:1.25rem;flex-wrap:wrap">
            <span class="section__badge" style="background:rgba(99,102,241,0.2);border:1px solid rgba(99,102,241,0.4);color:#c7d2fe;padding:7px 18px;border-radius:30px;display:inline-flex;align-items:center;gap:8px;font-weight:700;box-shadow:0 4px 14px rgba(99,102,241,0.25)">
              <span style="width:16px;height:16px;display:inline-flex">${icons.sparkles || '✨'}</span>
              ${isEn ? 'Executive AI Career Architecture' : 'منظومة الذكاء الاصطناعي المهنية التنفيذية'}
            </span>
            <span class="section__badge" style="background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.4);color:#34d399;padding:7px 18px;border-radius:30px;font-weight:700;display:inline-flex;align-items:center;gap:6px">
              ✓ ${isEn ? '100% Free VIP Access' : 'مجانية بالكامل بدون اشتراكات أو قيود'}
            </span>
          </div>

          <h1 class="page-header__title" style="font-size:clamp(1.9rem, 4vw, 2.9rem);font-weight:900;color:#ffffff;line-height:1.25;margin-bottom:1rem;letter-spacing:-0.02em;">
            ${isEn 
              ? 'Accelerate Your Job Search with <span style="background:linear-gradient(135deg,#38bdf8,#818cf8,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Precision AI Tools</span>' 
              : 'ارتقِ بمسارك المهني مع أدوات <span style="background:linear-gradient(135deg,#38bdf8,#818cf8,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent">الذكاء الاصطناعي التنفيذية</span>'
            }
          </h1>

          <p class="page-header__subtitle" style="font-size:1.1rem;color:#cbd5e1;max-width:720px;margin:0 auto 2.25rem;line-height:1.75">
            ${isEn 
              ? '5 integrated high-performance AI engines engineered to build ATS-beating resumes, craft compelling letters, match high-density keywords, and secure interview offers.'
              : 'خمس أدوات ذكية متكاملة ومجانية مصممة لتجهيز ملف وظيفي متكامل: تجاوز أنظمة الفرز الآلي ATS، صياغة خطابات مبهرة، اقتناص المقابلات والحصول على العرض الوظيفي.'
            }
          </p>

          <!-- Executive Stats Ribbon -->
          <div style="display:flex;justify-content:center;align-items:center;gap:2rem;flex-wrap:wrap;background:rgba(15,23,42,0.7);border:1px solid rgba(255,255,255,0.12);padding:1.1rem 2rem;border-radius:20px;max-width:820px;margin:0 auto;box-shadow:0 12px 35px rgba(0,0,0,0.45);backdrop-filter:blur(16px)">
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#38bdf8">5</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'Specialized AI Engines' : 'أدوات ذكية متخصصة'}</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(255,255,255,0.12)"></div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#34d399">100%</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'Free VIP Access' : 'مجانية وبلا حدود'}</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(255,255,255,0.12)"></div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#a78bfa">99.4%</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'ATS Pass Rate' : 'معدل اجتياز الفرز'}</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(255,255,255,0.12)"></div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:900;color:#f59e0b">PDF</div>
              <div style="font-size:0.78rem;color:#94a3b8;font-weight:700">${isEn ? 'Direct Instant Export' : 'تصدير فوري ومباشر'}</div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Google AdSense - Top Leaderboard Banner -->
    <div class="container" style="margin-top:2.25rem;margin-bottom:1rem">
      <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin:0 auto;max-width:760px;">
        <div class="ad-frame-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
          ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / Sponsored Partner'}
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

    <!-- Main Tools Grid Section: Ultra-Luxury Obsidian Cards -->
    <section class="section" style="padding-top:0;padding-bottom:3.5rem">
      <div class="container">
        
        <div class="luxury-tools-grid">
          ${filteredTools.map((tool, index) => `
            <div class="luxury-tool-card luxury-tool-card--${tool.id} animate-on-scroll delay-${(index % 3) + 1}"
                 style="--card-glow-color:${tool.glowColor}; --card-glow-shadow:${tool.glowShadow}; --card-laser-bg:${tool.laserBg};"
                 onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
              
              <!-- Radiant Top Laser Light Bar -->
              <div class="luxury-tool-card__laser"></div>

              <!-- Ambient Glow Orb -->
              <div class="luxury-tool-card__glow-orb"></div>

              <!-- Top Header: Badge & Live Metric -->
              <div class="luxury-tool-card__header">
                <div class="luxury-tool-card__badge" style="background:${tool.badgeBg}; color:${tool.badgeTextColor};">
                  <span class="luxury-tool-card__beacon" style="background:${tool.beaconColor};"></span>
                  <span>${tool.badge}</span>
                </div>
                <div class="luxury-tool-card__metric">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                  <span>${tool.metric}</span>
                </div>
              </div>

              <!-- Tool Identity Block: 3D Squircle Icon + Title -->
              <div class="luxury-tool-card__identity">
                <div class="luxury-tool-card__icon-squircle" style="background:${tool.iconGradient};">
                  ${tool.icon}
                </div>
                <div class="luxury-tool-card__title-group">
                  <h2 class="luxury-tool-card__title">${tool.title}</h2>
                  <span class="luxury-tool-card__subtag">${tool.subtag}</span>
                </div>
              </div>

              <!-- Description -->
              <p class="luxury-tool-card__desc">
                ${tool.desc}
              </p>

              <!-- Inset Glass Feature Checklist Box -->
              <div class="luxury-tool-card__features-box">
                <div class="luxury-tool-card__features-title">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                  <span>${isEn ? 'Core AI Capabilities' : 'أبرز مميزات الأداة الذكية'}</span>
                </div>
                ${tool.features.map(f => `
                  <div class="luxury-tool-card__feature-row">
                    <span class="luxury-tool-card__check-disc" style="color:${tool.checkColor}; background:${tool.checkBg};">✓</span>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>

              <!-- Radiant Executive CTA Button -->
              <div class="luxury-tool-card__action">
                <a href="${tool.link}" class="luxury-tool-card__btn" style="background:${tool.btnGradient}; box-shadow: 0 6px 25px ${tool.glowShadow};" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
                  <span class="luxury-tool-card__btn-text">${tool.cta}</span>
                  <span class="luxury-tool-card__btn-arrow">${isEn ? '→' : '←'}</span>
                </a>
              </div>

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
