/* ============================================
   CareerAI - Home Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.home = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);
  const icons = window.CareerAI.icons || {};

  const toolsList = [
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

  const faqs = isEn ? [
    { q: 'Is Factor Career completely free?', a: 'Yes! All core features including the AI Resume Builder, Cover Letter Generator, ATS Scanner, and Job Listings are 100% free with unlimited access.' },
    { q: 'What makes an ATS-friendly resume?', a: 'An ATS-friendly resume uses standard typography, clean structural hierarchy without complex tables, clear section headings, and relevant job keywords.' },
    { q: 'Can I export my resume as PDF?', a: 'Yes! You can instantly download and print your resume in standard high-resolution PDF format with one click.' },
    { q: 'How often are jobs updated on Factor Career?', a: 'Our automated AI pipeline verifies and refreshes jobs multiple times every day to ensure only active, legitimate career opportunities are listed.' }
  ] : [
    { q: 'هل استخدام Factor Career مجاني بالكامل؟', a: 'نعم! جميع الأدوات الأساسية بما في ذلك منشئ السيرة الذاتية، ومولد خطابات التقديم، وفاحص ATS، وتصفح الوظائف مجانية 100% دون أي رسوم.' },
    { q: 'ما الذي يجعل السيرة الذاتية متوافقة مع نظام ATS؟', a: 'السيرة المتوافقة مع ATS تعتمد على هيكل نصوص قياسي ونظيف بدون جداول معقدة، واستخدام عناوين واضحة وكلمات مفتاحية مطابقة للوظيفة.' },
    { q: 'هل يمكنني تنزيل السيرة الذاتية بتنسيق PDF؟', a: 'نعم! يمكنك طباعة وتنزيل سيرتك الذاتية فوراً بتنسيق PDF عالي الدقة بنقرة زر واحدة.' },
    { q: 'كم مرة يتم تحديث الوظائف في المنصة؟', a: 'يقوم وكيل الذكاء الاصطناعي بتدقيق وتحديث قائمة الوظائف آلياً عدة مرات يومياً لضمان توفير فرص حقيقية وموثوقة فقط.' }
  ];

  return `
    <!-- Hero Section -->
    <section class="hero" style="position:relative;overflow:hidden;padding:3.5rem 0 2.5rem;background:var(--gradient-hero);min-height:auto">
      <div class="hero__bg-glow"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="hero__grid">
          
          <!-- Left: Text Content -->
          <div class="hero__content" style="text-align:${isEn ? 'left' : 'right'}">
            
            <!-- Hero Badge -->
            <div class="hero__badge animate-on-scroll" style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:30px;padding:6px 16px;margin-bottom:1.5rem">
              <span style="width:14px;height:14px;display:inline-flex;color:#818cf8">${icons.sparkles || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"/></svg>'}</span>
              <span style="font-size:0.8rem;font-weight:700;color:#c7d2fe">${t('hero.badge', 'AI Resume Builder & Job Search Platform')}</span>
            </div>

            <!-- Hero Title -->
            <h1 class="hero__title animate-on-scroll delay-1" style="font-size:clamp(1.6rem, 3.5vw, 2.4rem);font-weight:800;color:#ffffff;line-height:1.35;margin-bottom:1.25rem">
              ${isEn
                ? `Free AI Resume Builder<br><span style="color:#22d3ee;font-weight:800">&amp; Curated Career<br>Opportunities</span><br>Land Your Dream Job Faster`
                : `منشئ السيرة الذاتية المجاني<br><span style="color:#22d3ee;font-weight:800">وفرص مهنية مختارة<br>بعناية</span><br>احصل على وظيفة أحلامك أسرع`
              }
            </h1>

            <!-- Hero Subtitle -->
            <p class="hero__subtitle animate-on-scroll delay-2" style="font-size:1rem;color:#cbd5e1;line-height:1.7;margin-bottom:2rem">
              ${isEn
                ? 'Build an ATS-optimized professional resume for free with AI and discover active job openings easily with Factor Career.'
                : 'أنشئ سيرة ذاتية احترافية متوافقة مع ATS مجاناً بالذكاء الاصطناعي واكتشف فرص العمل الحالية بسهولة مع Factor Career.'
              }
            </p>

            <!-- Hero Action Buttons -->
            <div class="hero__actions animate-on-scroll delay-3">
              <a href="/tools/resume-builder"
                 style="display:inline-flex;align-items:center;gap:10px;background:linear-gradient(135deg,#2563eb 0%,#4f46e5 50%,#6366f1 100%);color:#fff;font-weight:700;font-size:0.95rem;border:none;border-radius:50px;padding:0.8rem 2rem;box-shadow:0 6px 25px rgba(99,102,241,0.5);text-decoration:none;transition:all 0.25s ease;letter-spacing:0.01em"
                 onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 10px 32px rgba(99,102,241,0.65)'"
                 onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 6px 25px rgba(99,102,241,0.5)'"
                 onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
                ${t('hero.btnBuild', 'Build Your Resume Now')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="/tools"
                 style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.22);border-radius:50px;padding:0.7rem 1.75rem;font-size:0.9rem;font-weight:600;color:#e2e8f0;text-decoration:none;transition:all 0.25s ease"
                 onmouseover="this.style.background='rgba(255,255,255,0.13)'"
                 onmouseout="this.style.background='rgba(255,255,255,0.07)'"
                 onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
                ${t('hero.btnExplore', 'Explore All Jobs & Tools')}
              </a>
            </div>

          </div>

          <!-- Right: Hero Image (square) + Ad Card (square) — LOCKED SIZE -->
          <div class="hero-media-row animate-on-scroll delay-2">
            
            <!-- Hero Image — fixed 300x300 square, locked -->
            <div class="hero-image-card" style="width:300px;height:300px;min-width:300px;max-width:300px;min-height:300px;max-height:300px;border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,0.55),0 0 0 1px rgba(255,255,255,0.1),0 0 40px rgba(99,102,241,0.15);flex-shrink:0">
              <img src="/img/hero-career-ai.jpg"
                   alt="${isEn ? 'AI Resume Builder - Factor Career' : 'منشئ السيرة الذاتية بالذكاء الاصطناعي'}"
                   style="width:300px;height:300px;object-fit:cover;display:block"
                   loading="eager"
                   onerror="this.style.display='none'">
            </div>

            <!-- Sponsored Ad Card — Clean 300x250 Medium Rectangle (No Clipping) -->
            <div class="hero-square-ad-wrapper" style="width:300px;min-height:250px;border-radius:18px;background:linear-gradient(145deg,rgba(15,23,42,0.97) 0%,rgba(20,30,55,0.98) 50%,rgba(30,41,70,0.97) 100%);border:1px solid rgba(99,102,241,0.4);box-shadow:0 20px 60px rgba(0,0,0,0.55),0 0 35px rgba(99,102,241,0.2),inset 0 1px 0 rgba(255,255,255,0.07);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:visible;flex-shrink:0;padding:0.75rem 0.5rem">
              
              <!-- Top gradient glow line -->
              <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#6366f1,#8b5cf6,#a78bfa,transparent);pointer-events:none"></div>
              
              <!-- SPONSORED label -->
              <div style="display:flex;justify-content:center;margin-bottom:8px;z-index:2">
                <div style="display:inline-flex;align-items:center;gap:4px;background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:20px;padding:2px 9px">
                  <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#818cf8" stroke-width="2.5"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                  <span style="font-size:0.58rem;font-weight:800;color:#a5b4fc;letter-spacing:1.5px;text-transform:uppercase">SPONSORED AD</span>
                </div>
              </div>

              <!-- 300x250 Medium Rectangle ad unit -->
              <div style="width:300px;max-width:100%;min-height:250px;overflow:visible;display:flex;align-items:center;justify-content:center;position:relative">
                <ins class="adsbygoogle hero-ad-ins"
                     style="display:inline-block;width:300px;height:250px;max-width:100%;position:relative;z-index:2"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="3316284985"
                     data-ad-format="rectangle"></ins>
              </div>
            </div>

          </div>

        </div>

        <!-- Stats Row — BELOW the full 2-col grid, matches screenshot -->
        <div class="hero-stats-row animate-on-scroll delay-4">
          <div>
            <div style="font-size:1.6rem;font-weight:800;color:#ffffff">100%</div>
            <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-top:2px">${isEn ? 'Completely Free' : 'مجاني بالكامل'}</div>
          </div>
          <div>
            <div style="font-size:1.6rem;font-weight:800;color:#38bdf8">5+</div>
            <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-top:2px">${isEn ? 'AI Career Tools' : 'أدوات مهنية'}</div>
          </div>
          <div>
            <div style="font-size:1.6rem;font-weight:800;color:#34d399">ATS</div>
            <div style="font-size:0.75rem;color:#94a3b8;font-weight:600;margin-top:2px">${isEn ? 'Optimized for Screening' : 'متوافق مع الفرز الآلي'}</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Tools Section -->
    <section class="section section--alt" id="tools-section">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.brain}</span>
            ${isEn ? 'AI Suite' : 'أدواتنا الذكية'}
          </span>
          <h2 class="section__title">${isEn ? 'Advanced <span class="text-gradient">AI Career</span> Tools' : 'أدوات <span class="text-gradient">الذكاء الاصطناعي</span> المتقدمة'}</h2>
          <p class="section__subtitle">${isEn ? 'A comprehensive collection of intelligent tools to assist you in every step of your career journey.' : 'مجموعة شاملة من الأدوات المصممة خصيصاً لمساعدتك في كل مرحلة من مراحل البحث عن عمل.'}</p>
        </div>

        <div class="luxury-tools-grid">
          ${toolsList.map((tool, index) => `
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
                  <h3 class="luxury-tool-card__title">${tool.title}</h3>
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

        <!-- Google AdSense - Horizontal Banner (728x90) -->
        <div class="ad-frame-wrapper ad-frame-leaderboard animate-on-scroll" style="margin: 3rem auto 0; max-width: 760px;">
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
    </section>

    <!-- FAQ Section with Vertical Skyscraper Sidebar -->
    <section class="section" id="faq">
      <div class="container">
        <div class="page-with-sidebar">
          <div class="main-content-col">
            <div class="section__header animate-on-scroll" style="text-align:start">
              <span class="section__badge">
                <span style="width:16px;height:16px;display:inline-flex">${icons.target}</span>
                ${isEn ? 'FAQ' : 'الأسئلة الشائعة'}
              </span>
              <h2 class="section__title">${isEn ? 'Frequently Asked <span class="text-gradient">Questions</span>' : 'كل ما تود معرفته عن <span class="text-gradient">Factor Career</span>'}</h2>
            </div>

            <div class="accordion animate-on-scroll">
              ${faqs.map(faq => `
                <div class="accordion__item">
                  <button class="accordion__header" onclick="CareerAI.toggleAccordion(this)">
                    <span>${faq.q}</span>
                    <span class="accordion__icon" style="width:20px;height:20px;display:inline-flex">${icons.chevronDown}</span>
                  </button>
                  <div class="accordion__body">
                    <p>${faq.a}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Sticky Sidebar with Vertical Half-Page Skyscraper (300x600) -->
          <aside class="sticky-sidebar-ad animate-on-scroll">
            <div class="ad-frame-wrapper ad-frame-skyscraper">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${t('common.sponsored', 'إعلان ممول / Sponsored')}
              </div>
              <div class="ad-frame-inner">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:600px;max-width:100%;"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="4455667788"
                     data-ad-format="vertical"></ins>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section--dark" style="background:var(--gradient-hero)">
      <div class="container text-center">
        <div class="cta-section animate-on-scroll" style="background:transparent;border:none">
          <h2 class="cta-section__title">${isEn ? 'Ready to Upgrade Your Career Today?' : 'جاهز لبدء مرحلة جديدة في مسيرتك المهنية؟'}</h2>
          <p class="cta-section__text">
            ${isEn ? 'Join thousands of ambitious professionals crafting high-impact resumes and landing great jobs.' : 'انضم لآلاف المهنيين والباحثين عن عمل الذين طوّروا سيرهم الذاتية وحصلوا على مقابلاتهم الوظيفية.'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="/tools/resume-builder" class="btn btn--primary btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
              ${t('hero.btnBuild', 'أنشئ سيرتك الذاتية الآن')}
            </a>
            <a href="/jobs" class="btn btn--secondary btn--lg" style="border-color:white;color:white" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">
              ${t('nav.jobs', 'تصفح الوظائف والفرص')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.homeSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Factor Career | Free AI Resume Builder & Job Search Platform',
      description: 'Build an ATS-optimized professional resume for free with AI, practice job interviews, generate smart cover letters, and discover career opportunities with Factor Career.',
      keywords: 'Resume Builder, Free CV Maker, ATS Resume, AI Career Tools, Cover Letter Generator, Job Search, Interview Prep, Career Advice, Factor Career'
    };
  }
  return {
    title: 'Factor Career | إنشاء سيرة ذاتية احترافية بالذكاء الاصطناعي ووظائف',
    description: 'صمم سيرة ذاتية احترافية متوافقة مع أنظمة ATS بالذكاء الاصطناعي واستكشف أحدث الوظائف وفرص العمل بسهولة مع Factor Career.',
    keywords: 'سيرة ذاتية, وظائف, إنشاء سيرة ذاتية, الذكاء الاصطناعي, Factor Career, تصميم سيرة ذاتية, نماذج سيرة ذاتية, فرص عمل, CV, Resume Builder, ATS Resume, Jobs'
  };
};
