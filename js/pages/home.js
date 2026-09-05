/* ============================================
   Factor Career - Home Page (Multilingual Support)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.home = function() {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  const toolsList = [
    {
      icon: icons.resume,
      title: isEn ? 'AI Resume Builder (ATS)' : 'Ù…Ù†Ø´Ø¦ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© (AI Resume)',
      desc: isEn ? 'Build a sleek, ATS-optimized resume step by step with AI phrasing suggestions and high-res PDF download.' : 'Ø£Ù†Ø´Ø¦ Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© ÙˆÙ…ØªÙˆØ§ÙÙ‚Ø© Ù…Ø¹ Ø£Ù†Ø¸Ù…Ø© ATS Ø®Ø·ÙˆØ© Ø¨Ø®Ø·ÙˆØ© Ù…Ø¹ ØªØ­Ø³ÙŠÙ† ÙÙˆØ±ÙŠ ÙˆØªØµØ¯ÙŠØ± PDF Ù…Ø¬Ø§Ù†Ø§Ù‹.',
      link: '/tools/resume-builder',
      tag: isEn ? 'Active Tool' : 'Ø§Ù„Ø£Ø¯Ø§Ø© Ø§Ù„Ù…ÙØ¹Ù„Ø©',
      color: 'primary'
    },
    {
      icon: icons.shield,
      title: isEn ? 'ATS Resume Checker & Auditor' : 'Ù…Ø­Ù„Ù„ ÙˆÙØ§Ø­Øµ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© ATS',
      desc: isEn ? 'Audit your resume, discover strengths & weaknesses, check keyword match, and get your ATS score in seconds.' : 'ÙØ­Øµ ÙˆØªØ¯Ù‚ÙŠÙ‚ Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ø°Ø§ØªÙŠØ© ÙˆÙ…Ø¹Ø±ÙØ© Ù†Ù‚Ø§Ø· Ø§Ù„Ù‚ÙˆØ© ÙˆØ§Ù„Ø¶Ø¹Ù ÙˆÙ…Ø·Ø§Ø¨Ù‚ØªÙ‡Ø§ Ù…Ø¹ Ø§Ù„ÙƒÙ„Ù…Ø§Øª Ø§Ù„Ù…ÙØªØ§Ø­ÙŠØ© ÙˆØ§Ø­ØªØ³Ø§Ø¨ ATS Score.',
      link: '/tools/resume-analyzer',
      tag: isEn ? 'Active Tool' : 'Ø§Ù„Ø£Ø¯Ø§Ø© Ø§Ù„Ù…ÙØ¹Ù„Ø©',
      color: 'accent'
    },
    {
      icon: icons.cover,
      title: isEn ? 'Smart Cover Letter Generator' : 'Ù…ÙˆÙ„Ø¯ Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„ØªÙ‚Ø¯ÙŠÙ… (Cover Letter)',
      desc: isEn ? 'Generate customized, compelling cover letters tailored to any job description in 5 languages with instant editing.' : 'Ø£Ù†Ø´Ø¦ Ø±Ø³Ø§Ù„Ø© ØªØºØ·ÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© ÙˆÙ…Ø®ØµØµØ© Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ù„ÙƒÙ„ ÙˆØ¸ÙŠÙØ© ØªØªÙ‚Ø¯Ù… Ù„Ù‡Ø§ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø¨Ø®Ù…Ø³ Ù„ØºØ§Øª ÙˆØªØµØ¯ÙŠØ± Word ÙˆPDF.',
      link: '/tools/cover-letter-generator',
      tag: isEn ? 'Active Tool' : 'Ø§Ù„Ø£Ø¯Ø§Ø© Ø§Ù„Ù…ÙØ¹Ù„Ø©',
      color: 'primary'
    },
    {
      icon: icons.interview,
      title: isEn ? 'Job Interview Questions Coach' : 'Ù…ÙˆÙ„Ø¯ Ø£Ø³Ø¦Ù„Ø© Ù…Ù‚Ø§Ø¨Ù„Ø§Øª Ø§Ù„Ø¹Ù…Ù„',
      desc: isEn ? 'Master tailored interview questions for your exact role and seniority with STAR model answers and tips.' : 'Ø£Ø³Ø¦Ù„Ø© Ù…Ù‚Ø§Ø¨Ù„Ø§Øª ØªÙˆØ¸ÙŠÙ Ù…Ø®ØµØµØ© Ù„Ù…Ø¬Ø§Ù„Ùƒ ÙˆÙ…Ø³ØªÙˆÙ‰ Ø®Ø¨Ø±ØªÙƒ Ù…Ø¹ Ø¥Ø¬Ø§Ø¨Ø§Øª Ù†Ù…ÙˆØ°Ø¬ÙŠØ© ÙˆÙÙ‚ Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© STAR Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠØ©.',
      link: '/tools/interview-questions',
      tag: isEn ? 'Active Tool' : 'Ø§Ù„Ø£Ø¯Ø§Ø© Ø§Ù„Ù…ÙØ¹Ù„Ø©',
      color: 'accent'
    },
    {
      icon: icons.target,
      title: isEn ? 'ATS Keywords Matcher' : 'Ù…Ø³ØªØ®Ø±Ø¬ ÙƒÙ„Ù…Ø§Øª ATS Ø§Ù„Ù…ÙØªØ§Ø­ÙŠØ©',
      desc: isEn ? 'Extract essential keywords, skills, and tools from job descriptions to perfectly align your resume.' : 'Ø§Ø³ØªØ®Ø±Ø¬ Ø£Ù‡Ù… Ø§Ù„ÙƒÙ„Ù…Ø§Øª Ø§Ù„Ø¯Ù„Ø§Ù„ÙŠØ© ÙˆØ§Ù„Ù…Ù‡Ø§Ø±Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…Ø·Ù„ÙˆØ¨Ø© ÙÙŠ Ø£ÙŠ Ø¥Ø¹Ù„Ø§Ù† ÙˆØ¸ÙŠÙÙŠ Ù„Ù…Ù„Ø§Ø¡Ù…Ø© Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ø°Ø§ØªÙŠØ©.',
      link: '/tools/ats-keywords',
      tag: isEn ? 'Active Tool' : 'Ø§Ù„Ø£Ø¯Ø§Ø© Ø§Ù„Ù…ÙØ¹Ù„Ø©',
      color: 'primary'
    },
    {
      icon: icons.users,
      title: isEn ? 'ðŸ’¼ Jobs & Career Opportunities' : 'ðŸ’¼ Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„ÙØ±Øµ Ø§Ù„Ù…Ù‡Ù†ÙŠØ©',
      desc: isEn ? 'Explore curated, active job openings matched to your profile and apply directly.' : 'Ø§Ø³ØªÙƒØ´Ù Ø£Ø­Ø¯Ø« ÙØ±Øµ Ø§Ù„Ø¹Ù…Ù„ Ø§Ù„Ù…ØªØ§Ø­Ø© ÙˆØ§Ù„Ù…Ø®ØªØ§Ø±Ø© Ø¨Ø¹Ù†Ø§ÙŠØ© ÙÙŠ Ù…Ø®ØªÙ„Ù Ø§Ù„ØªØ®ØµØµØ§Øª ÙˆØ§Ù„ØªÙ‚Ø¯ÙŠÙ… Ø§Ù„ÙÙˆØ±ÙŠ Ø¹Ù„ÙŠÙ‡Ø§.',
      link: '/jobs',
      tag: isEn ? 'New' : 'Ø¬Ø¯ÙŠØ¯',
      color: 'accent'
    }
  ];

  const faqs = [
    {
      q: isEn ? 'What is Factor Career?' : 'Ù…Ø§ Ù‡ÙŠ Ù…Ù†ØµØ© Factor CareerØŸ',
      a: isEn ? 'Factor Career is a free, intelligent career suite designed to help job seekers build ATS-optimized resumes, write customized cover letters, prepare for job interviews, and explore curated career opportunities.' : 'Factor Career Ù‡ÙŠ Ù…Ù†ØµØ© Ø°ÙƒÙŠØ© ÙˆÙ…Ø¬Ø§Ù†ÙŠØ© Ù…ØªØ®ØµØµØ© ÙÙŠ Ù…Ø³Ø§Ø¹Ø¯Ø© Ø§Ù„Ø¨Ø§Ø­Ø«ÙŠÙ† Ø¹Ù† Ø¹Ù…Ù„ ÙˆØ§Ù„Ù…Ù‡Ù†ÙŠÙŠÙ† ÙÙŠ ØªØ­Ø³ÙŠÙ† ÙˆØ¨Ù†Ø§Ø¡ Ø³ÙŠØ±Ù‡Ù… Ø§Ù„Ø°Ø§ØªÙŠØ©ØŒ Ø§Ø¬ØªÙŠØ§Ø² Ø£Ù†Ø¸Ù…Ø© Ø§Ù„ÙØ±Ø² ATSØŒ ÙˆØ§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù…Ù‚Ø§Ø¨Ù„Ø§Øª Ø§Ù„Ø¹Ù…Ù„ Ø¨Ø£Ø­Ø¯Ø« ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ.'
    },
    {
      q: isEn ? 'Are all tools 100% free to use?' : 'Ù‡Ù„ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ù…Ø¬Ø§Ù†ÙŠØ© ÙØ¹Ù„Ø§Ù‹ØŸ',
      a: isEn ? 'Yes! All Factor Career tools and features are 100% free without any subscription fees or hidden costs.' : 'Ù†Ø¹Ù…ØŒ Ø¬Ù…ÙŠØ¹ Ø£Ø¯ÙˆØ§Øª ÙˆÙ…ÙŠØ²Ø§Øª Factor Career Ù…ØªØ§Ø­Ø© Ù…Ø¬Ø§Ù†Ø§Ù‹ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ ÙˆØ¨Ø¯ÙˆÙ† Ø£ÙŠ Ø§Ø´ØªØ±Ø§ÙƒØ§Øª Ø£Ùˆ Ø±Ø³ÙˆÙ… Ø®ÙÙŠØ©.'
    },
    {
      q: isEn ? 'What is an ATS system and why does it matter?' : 'Ù…Ø§ Ù‡Ùˆ Ù†Ø¸Ø§Ù… ATS ÙˆÙ„Ù…Ø§Ø°Ø§ Ù‡Ùˆ Ù…Ù‡Ù… Ù„Ø³ÙŠØ±ØªÙŠ Ø§Ù„Ø°Ø§ØªÙŠØ©ØŸ',
      a: isEn ? 'Applicant Tracking Systems (ATS) are software used by employers to filter applications before humans review them. Factor Career ensures your resume is formatted and keyword-optimized to pass these filters easily.' : 'Ù†Ø¸Ø§Ù… ØªØªØ¨Ø¹ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…ÙŠÙ† (ATS) Ù‡Ùˆ Ù†Ø¸Ø§Ù… Ø¢Ù„ÙŠ ØªØ³ØªØ®Ø¯Ù…Ù‡ Ø§Ù„Ø´Ø±ÙƒØ§Øª Ù„ÙØ±Ø² Ø§Ù„Ø³ÙŠØ± Ø§Ù„Ø°Ø§ØªÙŠØ© ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹. Ø£Ø¯ÙˆØ§ØªÙ†Ø§ ØªØ¶Ù…Ù† ØªÙˆØ§ÙÙ‚ Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ø°Ø§ØªÙŠØ© Ù…Ø¹ Ù‡Ø°Ù‡ Ø§Ù„Ø£Ù†Ø¸Ù…Ø© Ù„Ø²ÙŠØ§Ø¯Ø© ÙØ±Øµ Ø§Ø³ØªØ¯Ø¹Ø§Ø¦Ùƒ Ù„Ù„Ù…Ù‚Ø§Ø¨Ù„Ø§Øª.'
    },
    {
      q: isEn ? 'Is my personal data secure?' : 'Ù‡Ù„ Ø¨ÙŠØ§Ù†Ø§ØªÙŠ ÙˆÙ…Ø¹Ù„ÙˆÙ…Ø§ØªÙŠ Ø§Ù„Ø´Ø®ØµÙŠØ© Ø¢Ù…Ù†Ø©ØŸ',
      a: isEn ? 'Yes, your data is processed directly inside your browser and we strictly adhere to high standards of privacy and data security.' : 'Ù†Ø¹Ù… Ø¨ÙƒÙ„ ØªØ£ÙƒÙŠØ¯ØŒ ØªØªÙ… Ù…Ø¹Ø§Ù„Ø¬Ø© Ø¨ÙŠØ§Ù†Ø§ØªÙƒ Ù…Ø¨Ø§Ø´Ø±Ø© ÙÙŠ Ù…ØªØµÙØ­Ùƒ ÙˆÙ†Ø­Ù† Ù†Ù„ØªØ²Ù… Ø¨Ø£Ø¹Ù„Ù‰ Ù…Ø¹Ø§ÙŠÙŠØ± Ø§Ù„Ø£Ù…Ø§Ù† ÙˆØ§Ù„Ø®ØµÙˆØµÙŠØ© ÙˆØ­Ù…Ø§ÙŠØ© Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª.'
    }
  ];

  return `
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero__bg-shapes">
        <div class="hero__shape hero__shape--1"></div>
        <div class="hero__shape hero__shape--2"></div>
        <div class="hero__shape hero__shape--3"></div>
        <div class="hero__shape hero__shape--4"></div>
        <div class="hero__shape hero__shape--5"></div>
      </div>

      <div class="container">
        <div class="hero__inner">
          <div class="hero__content">
            <div class="hero__badge">
              <span class="hero__badge-dot"></span>
              ${t('hero.badge', 'Ù…Ù†ØµØ© Ø§Ù„ØªÙˆØ¸ÙŠÙ ÙˆØ§Ù„Ù…Ø³Ø§Ø± Ø§Ù„Ù…Ù‡Ù†ÙŠ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ')}
            </div>
            <h1 class="hero__title">
              ${t('hero.title1', 'ØµØ§Ù†Ø¹ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠØ©')}
              <br>
              <span class="hero__title-accent">${t('hero.title2', 'ÙˆØ§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø£ÙØ¶Ù„ Ø§Ù„ÙˆØ¸Ø§Ø¦Ù')}</span>
              <br>
              ${t('hero.title3', 'Ø¨ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ Ø§Ù„Ù…Ø¬Ø§Ù†ÙŠØ©')}
            </h1>
            <p class="hero__subtitle">
              ${t('hero.subtitle', 'ØµÙ…Ù… Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ù…Ø¬Ø§Ù†Ø§Ù‹ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ø³ØªÙƒØ´Ù Ø£Ø­Ø¯Ø« Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆÙØ±Øµ Ø§Ù„Ø¹Ù…Ù„ Ø¨Ø³Ù‡ÙˆÙ„Ø© Ù…Ø¹ Factor Career.')}
            </p>
            <div class="hero__actions">
              <a href="/tools/resume-builder" class="btn btn--primary btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
                ${t('hero.btnBuild', 'Ø£Ù†Ø´Ø¦ Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ø°Ø§ØªÙŠØ© Ø§Ù„Ø¢Ù†')}
                <span style="width:20px;height:20px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
              <a href="/tools" class="btn btn--ghost btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools')">
                ${t('hero.btnExplore', 'Ø§Ø³ØªÙƒØ´Ù Ø§Ù„Ø£Ø¯ÙˆØ§Øª')}
              </a>
              <a href="https://www.profitableratecpmnetwork.com/kkyq5vxu?key=545c1203bb7c2b234427dd5282b9477c" target="_blank" rel="noopener noreferrer" class="btn btn--secondary btn--lg" style="margin-inline-start:0.5rem;border-color:rgba(99,102,241,0.5);background:rgba(99,102,241,0.15);color:#a5b4fc;">â­ ${isEn ? 'Remote Opportunities â†—' : 'Ø¹Ø±ÙˆØ¶ ÙˆÙØ±Øµ Ù…Ù…ÙŠØ²Ø© â†—'}</a>
            </div>

            <div class="hero__stats">
              <div>
                <div class="hero__stat-number">${t('hero.stat1Num', '100%')}</div>
                <div class="hero__stat-label">${t('hero.stat1Label', 'Ù…Ø¬Ø§Ù†ÙŠ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„')}</div>
              </div>
              <div>
                <div class="hero__stat-number">${t('hero.stat2Num', '5+')}</div>
                <div class="hero__stat-label">${t('hero.stat2Label', 'Ø£Ø¯ÙˆØ§Øª Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ')}</div>
              </div>
              <div>
                <div class="hero__stat-number">${t('hero.stat3Num', 'ATS')}</div>
                <div class="hero__stat-label">${t('hero.stat3Label', 'Ù…ØªÙˆØ§ÙÙ‚ Ù…Ø¹ Ø§Ù„ÙØ±Ø² Ø§Ù„Ø¢Ù„ÙŠ')}</div>
              </div>
            </div>
          </div>

          <div class="hero__visual">
            <div class="hero-image-wrapper">
              <img src="img/hero-career-ai.jpg" alt="Factor Career AI Suite" class="hero-image" loading="eager" />
              <div class="hero-image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features" id="features">
      <div class="container">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.speed}</span>
            ${t('home.whyTitle', 'Ù„Ù…Ø§Ø°Ø§ Factor CareerØŸ')}
          </span>
          <h2 class="section__title">${isEn ? 'Features that Make Us the <span class="text-gradient">Best Choice</span>' : 'Ù…Ù…ÙŠØ²Ø§Øª ØªØ¬Ø¹Ù„Ù†Ø§ <span class="text-gradient">Ø§Ù„Ø®ÙŠØ§Ø± Ø§Ù„Ø£ÙØ¶Ù„</span>'}</h2>
          <p class="section__subtitle">${t('home.whySubtitle', 'ÙƒÙ„ Ù…Ø§ ØªØ­ØªØ§Ø¬Ù‡ Ù„Ù„Ø§Ø±ØªÙ‚Ø§Ø¡ Ø¨Ù…Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ù…Ù‡Ù†ÙŠØ© ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯ ÙˆØ¨Ø£Ø­Ø¯Ø« ØªÙ‚Ù†ÙŠØ§Øª Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ')}</p>
        </div>

        <div class="features__grid">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
            </div>
            <h3 class="card__title">${t('home.feat1Title', 'ØµØ§Ù†Ø¹ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ© ATS')}</h3>
            <p class="card__text">${t('home.feat1Desc', 'Ø£Ù†Ø´Ø¦ Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ø®Ø§Ù„ÙŠØ© Ù…Ù† Ø§Ù„Ø£Ø®Ø·Ø§Ø¡ ÙˆÙ…ØªÙˆØ§ÙÙ‚Ø© Ù…Ø¹ Ø£Ù†Ø¸Ù…Ø© ØªØªØ¨Ø¹ Ø§Ù„Ù…ØªÙ‚Ø¯Ù…ÙŠÙ† Ø§Ù„Ø¢Ù„ÙŠØ© Ù„Ø¶Ù…Ø§Ù† ÙˆØµÙˆÙ„Ùƒ Ù„Ù„Ù…Ù‚Ø§Ø¨Ù„Ø©.')}</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">${t('home.feat2Title', 'ÙØ­Øµ ÙˆØªØ¯Ù‚ÙŠÙ‚ Ø§Ù„Ø³ÙŠØ±Ø© Ø§Ù„Ø°Ø§ØªÙŠØ©')}</h3>
            <p class="card__text">${t('home.feat2Desc', 'Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ ØªØ­Ù„ÙŠÙ„ ÙÙˆØ±ÙŠ Ù„Ù†Ù‚Ø§Ø· Ø§Ù„Ù‚ÙˆØ© ÙˆØ§Ù„Ø¶Ø¹Ù ÙÙŠ Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ø°Ø§ØªÙŠØ© Ù…Ø¹ Ù…Ù‚ØªØ±Ø­Ø§Øª Ø¹Ù…Ù„ÙŠØ© Ù„ØªØ­Ø³ÙŠÙ† ØµÙŠØ§ØºØ© Ø§Ù„Ø¥Ù†Ø¬Ø§Ø²Ø§Øª.')}</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.easy}</span>
            </div>
            <h3 class="card__title">${t('home.feat3Title', 'Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„ØªØºØ·ÙŠØ© Ø§Ù„Ø°ÙƒÙŠØ©')}</h3>
            <p class="card__text">${t('home.feat3Desc', 'ÙˆÙ„Ù‘Ø¯ Ø±Ø³Ø§Ø¦Ù„ ØªÙ‚Ø¯ÙŠÙ… ÙˆCover Letters Ù…Ù‚Ù†Ø¹Ø© ÙˆÙ…Ø®ØµØµØ© Ù„ÙƒÙ„ ÙˆØ¸ÙŠÙØ© Ø¨Ø¶ØºØ·Ø© Ø²Ø± ÙˆØ¨Ø¹Ø¯Ø© Ù„ØºØ§Øª.')}</p>
          </div>

          <div class="card animate-on-scroll delay-4">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.free}</span>
            </div>
            <h3 class="card__title">${t('home.feat4Title', 'Ø§Ù„ØªØ­Ø¶ÙŠØ± Ù„Ù„Ù…Ù‚Ø§Ø¨Ù„Ø§Øª Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ©')}</h3>
            <p class="card__text">${t('home.feat4Desc', 'ØªØ¯Ø±Ù‘Ø¨ Ø¹Ù„Ù‰ Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ù…Ù‚Ø§Ø¨Ù„Ø§Øª Ø§Ù„Ù†Ù…ÙˆØ°Ø¬ÙŠØ© ÙÙŠ Ù…Ø¬Ø§Ù„Ùƒ Ù…Ø¹ Ø£ÙØ¶Ù„ Ø¥Ø¬Ø§Ø¨Ø§Øª Ø¨Ø§Ø³ØªØ±Ø§ØªÙŠØ¬ÙŠØ© STAR Ø§Ù„Ø§Ø­ØªØ±Ø§ÙÙŠØ©.')}</p>
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
            ${isEn ? 'AI Suite' : 'Ø£Ø¯ÙˆØ§ØªÙ†Ø§ Ø§Ù„Ø°ÙƒÙŠØ©'}
          </span>
          <h2 class="section__title">${isEn ? 'Advanced <span class="text-gradient">AI Career</span> Tools' : 'Ø£Ø¯ÙˆØ§Øª <span class="text-gradient">Ø°ÙƒØ§Ø¡ Ø§ØµØ·Ù†Ø§Ø¹ÙŠ</span> Ù…ØªÙ‚Ø¯Ù…Ø©'}</h2>
          <p class="section__subtitle">${t('tools.headerSubtitle', 'Ù…Ø¬Ù…ÙˆØ¹Ø© Ø´Ø§Ù…Ù„Ø© Ù…Ù† Ø§Ù„Ø£Ø¯ÙˆØ§Øª Ø§Ù„Ù…ØµÙ…Ù…Ø© Ø®ØµÙŠØµØ§Ù‹ Ù„Ù…Ø³Ø§Ø¹Ø¯ØªÙƒ ÙÙŠ ÙƒÙ„ Ù…Ø±Ø­Ù„Ø© Ù…Ù† Ù…Ø±Ø§Ø­Ù„ Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø¹Ù…Ù„')}</p>
        </div>

        <div class="tools-section__grid">
          ${toolsList.map((tool, index) => `
            <div class="card tool-card animate-on-scroll delay-${(index % 3) + 1}" style="cursor:pointer" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
              <span class="tag tag--accent" style="position:absolute;top:var(--space-4);${isEn ? 'right' : 'left'}:var(--space-4)">${tool.tag}</span>
              <div class="card__icon card__icon--${tool.color}">
                <span style="width:32px;height:32px;display:inline-flex">${tool.icon}</span>
              </div>
              <h3 class="card__title">${tool.title}</h3>
              <p class="card__text">${tool.desc}</p>
              <a href="/${tool.link}" class="card__link" onclick="event.preventDefault();CareerAI.router.navigate('${tool.link}')">
                ${isEn ? 'Use Tool Free' : 'Ø¬Ø±Ù‘Ø¨ Ø§Ù„Ø£Ø¯Ø§Ø© Ø§Ù„Ø¢Ù†'}
                <span style="width:14px;height:14px;display:inline-flex;transform:${isEn ? 'rotate(0deg)' : 'rotate(180deg)'}">${icons.arrowLeft}</span>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    
    <!-- Adsterra Native Banner (Responsive for PC & Mobile) -->
    <div class="adsterra-native-container container" style="margin:2rem auto;text-align:center;width:100%;max-width:100%;overflow:hidden;box-sizing:border-box;">
      <span style="display:block;font-size:0.75rem;color:var(--color-text-muted,#94a3b8);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${isEn ? 'Recommended Content & Sponsored' : 'Ù…Ø­ØªÙˆÙ‰ Ù…ÙÙ…ÙˆÙŽÙ‘Ù„ ÙˆÙ…ÙÙ‚ØªØ±Ø­'}</span>
      <iframe srcdoc="&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;head&gt;&lt;style&gt;body{margin:0;padding:0;background:transparent;display:flex;justify-content:center;align-items:flex-start;min-height:100px;}&lt;/style&gt;&lt;/head&gt;&lt;body&gt;&lt;div id=&quot;container-88b8ff02af33c15d529cd7a1ab450129&quot;&gt;&lt;/div&gt;&lt;script async=&quot;async&quot; data-cfasync=&quot;false&quot; src=&quot;https://pl31205602.profitableratecpmnetwork.com/88b8ff02af33c15d529cd7a1ab450129/invoke.js&quot;&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;" width="100%" height="250" style="border:none;overflow:hidden;display:block;width:100%;min-height:100px;" scrolling="no" frameborder="0"></iframe>
    </div>

    <!-- FAQ Section -->
    <section class="section" id="faq">
      <div class="container container--narrow">
        <div class="section__header animate-on-scroll">
          <span class="section__badge">
            <span style="width:16px;height:16px;display:inline-flex">${icons.target}</span>
            ${isEn ? 'FAQ' : 'Ø§Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©'}
          </span>
          <h2 class="section__title">${isEn ? 'Frequently Asked <span class="text-gradient">Questions</span>' : 'ÙƒÙ„ Ù…Ø§ ØªÙˆØ¯ Ù…Ø¹Ø±ÙØªÙ‡ Ø¹Ù† <span class="text-gradient">Factor Career</span>'}</h2>
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
    </section>

    <!-- CTA Section -->
    <section class="section section--dark" style="background:var(--gradient-hero)">
      <div class="container text-center">
        <div class="cta-section animate-on-scroll" style="background:transparent;border:none">
          <h2 class="cta-section__title">${isEn ? 'Ready to Upgrade Your Career Today?' : 'Ø¬Ø§Ù‡Ø² Ù„Ø¨Ø¯Ø¡ Ù…Ø±Ø­Ù„Ø© Ø¬Ø¯ÙŠØ¯Ø© ÙÙŠ Ù…Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ù…Ù‡Ù†ÙŠØ©ØŸ'}</h2>
          <p class="cta-section__text">
            ${isEn ? 'Join thousands of ambitious professionals crafting high-impact resumes and landing great jobs.' : 'Ø§Ù†Ø¶Ù… Ù„Ø¢Ù„Ø§Ù Ø§Ù„Ù…Ù‡Ù†ÙŠÙŠÙ† ÙˆØ§Ù„Ø¨Ø§Ø­Ø«ÙŠÙ† Ø¹Ù† Ø¹Ù…Ù„ Ø§Ù„Ø°ÙŠÙ† Ø·ÙˆØ±ÙˆØ§ Ø³ÙŠØ±Ù‡Ù… Ø§Ù„Ø°Ø§ØªÙŠØ© ÙˆØ­ØµÙ„ÙˆØ§ Ø¹Ù„Ù‰ Ù…Ù‚Ø§Ø¨Ù„Ø§ØªÙ‡Ù… Ø§Ù„ÙˆØ¸ÙŠÙÙŠØ©.'}
          </p>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
            <a href="/tools/resume-builder" class="btn btn--primary btn--lg" onclick="event.preventDefault();CareerAI.router.navigate('/tools/resume-builder')">
              ${t('hero.btnBuild', 'Ø£Ù†Ø´Ø¦ Ø³ÙŠØ±ØªÙƒ Ø§Ù„Ø°Ø§ØªÙŠØ© Ø§Ù„Ø¢Ù†')}
            </a>
            <a href="/jobs" class="btn btn--secondary btn--lg" style="border-color:white;color:white" onclick="event.preventDefault();CareerAI.router.navigate('/jobs')">
              ${t('nav.jobs', 'ØªØµÙØ­ Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆØ§Ù„ÙØ±Øµ')}
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
    title: 'Factor Career | Ø¥Ù†Ø´Ø§Ø¡ Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© ÙˆÙˆØ¸Ø§Ø¦Ù Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ',
    description: 'ØµÙ…Ù… Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ© Ø§Ø­ØªØ±Ø§ÙÙŠØ© Ù…Ø¬Ø§Ù†Ø§Ù‹ Ø¨Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ ÙˆØ§Ø³ØªÙƒØ´Ù Ø£Ø­Ø¯Ø« Ø§Ù„ÙˆØ¸Ø§Ø¦Ù ÙˆÙØ±Øµ Ø§Ù„Ø¹Ù…Ù„ Ø¨Ø³Ù‡ÙˆÙ„Ø© Ù…Ø¹ Factor Career.',
    keywords: 'Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ©, Ø³ÙŠØ±Ø©, ÙˆØ¸ÙŠÙØ©, ÙˆØ¸Ø§Ø¦Ù, Ø¥Ù†Ø´Ø§Ø¡ Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ©, Ø§Ù„Ø°ÙƒØ§Ø¡ Ø§Ù„Ø§ØµØ·Ù†Ø§Ø¹ÙŠ, Factor Career, ØªØµÙ…ÙŠÙ… Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ©, Ù†Ù…Ø§Ø°Ø¬ Ø³ÙŠØ±Ø© Ø°Ø§ØªÙŠØ©, ÙØ±Øµ Ø¹Ù…Ù„, Ø¹Ù…Ù„, ÙˆØ¸Ø§Ø¦Ù Ø´Ø§ØºØ±Ø©, CV, Resume Builder, ATS Resume, Jobs'
  };
};

