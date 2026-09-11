/* ============================================
   Factor Career - About Us Page (Multilingual & Comprehensive)
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.about = function() {
  const icons = window.CareerAI.icons;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  return `
    <div class="page-header">
      <div class="container">
        <div class="page-header__content">
          <div class="page-header__breadcrumb">
            <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')">${t('nav.home', 'الرئيسية')}</a>
            <span>/</span>
            <span>${t('nav.about', 'من نحن')}</span>
          </div>
          <h1 class="page-header__title">${isEn ? 'About Factor Career' : 'من نحن - Factor Career'}</h1>
          <p class="page-header__subtitle">${isEn ? 'Empowering job seekers worldwide with intelligent, accessible, and 100% free career development tools.' : 'تعرف على قصتنا ورؤيتنا لتطوير مسيرتك المهنية بالذكاء الاصطناعي'}</p>
        </div>
      </div>

        <!-- Google AdSense - In-Article Ad -->
        <div class="ad-frame-wrapper ad-frame-rectangle" style="margin:2.5rem auto;max-width:400px;">
          <div class="ad-frame-label">Advertisement</div>
          <div class="ad-frame-inner" style="min-height:250px;">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:300px;height:250px;max-width:100%;"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="3316284985"
                 data-ad-format="rectangle"></ins>
          </div>
        </div>

    </div>

    <!-- Story Section -->
    <section class="section" style="padding-top:var(--space-6)">
      <div class="container">
        <div class="about-story">
          <div class="about-story__content animate-on-scroll">
            <span class="section__badge">
              <span style="width:16px;height:16px;display:inline-flex">${icons.rocket}</span>
              ${isEn ? 'Our Story & Purpose' : 'قصتنا ورؤيتنا'}
            </span>
            <h2 class="about-story__title">${isEn ? 'Democratizing Career Growth with <span class="text-gradient">Intelligent AI Technology</span>' : 'نؤمن بأن كل شخص يستحق <span class="text-gradient">فرصة عمل مناسبة</span>'}</h2>
            <p class="about-story__text">
              ${isEn 
                ? '<strong>Factor Career</strong> was founded with a single, uncompromising mission: to level the playing field for ambitious job seekers across the globe. We believe that professional career assistance—such as ATS-friendly resume builders, interview coaches, and cover letter generators—should not be locked behind expensive subscription paywalls.' 
                : 'بدأت منصة <strong>Factor Career</strong> من فكرة واضحة: جعل عملية بناء السيرة الذاتية والاستعداد للمقابلات وسوق العمل أسهل وأكثر فاعلية واحترافية للجميع دون أي تكاليف مادية.'}
            </p>
            <p class="about-story__text">
              ${isEn 
                ? 'Our platform blends modern artificial intelligence with deep human resources insights to ensure that every applicant can present their unique strengths with clarity, confidence, and precision.' 
                : 'نعمل على توفير أحدث تقنيات وأدوات الذكاء الاصطناعي مجاناً وبدون أي تعقيدات، لمساعدة الباحثين عن عمل والمهنيين في صياغة ملفاتهم الوظيفية واجتياز أنظمة الفرز الآلي ATS بثقة.'}
            </p>
          </div>
          <div class="about-story__visual animate-on-scroll delay-2">
            <div class="about-story__visual-card">
              <div class="about-story__visual-icon">
                <span style="width:48px;height:48px;display:inline-flex;color:var(--color-primary)">${icons.brain}</span>
              </div>
              <div class="about-story__visual-text">Factor Career • ${isEn ? 'Empowering 50,000+ Careers' : 'نبني مستقبلك المهني'}</div>
            </div>
          </div>
        </div>

        <!-- High-Impact 3-Column Showcase: Right Content + Center Skyscraper + Left Content -->
        <div class="about-heroic-trio animate-on-scroll" style="margin-top:var(--space-16);margin-bottom:var(--space-8);">
          
          <!-- Luxurious Card 1 (Right in RTL, Left in LTR): Vision & AI Precision -->
          <div class="card luxury-about-card" style="background:linear-gradient(145deg, rgba(15,23,42,0.88) 0%, rgba(30,41,59,0.92) 100%);border:1px solid rgba(99,102,241,0.35);border-radius:24px;padding:2rem;color:white;box-shadow:0 16px 40px rgba(0,0,0,0.35);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(99,102,241,0.18);border:1px solid rgba(99,102,241,0.35);padding:4px 12px;border-radius:var(--radius-full);color:#a5b4fc;font-size:12px;font-weight:700;margin-bottom:1rem">
                <span>🚀</span>
                <span>${isEn ? 'Innovation & Excellence' : 'الابتكار والريادة المهنية'}</span>
              </div>
              <h3 style="font-size:var(--text-2xl);font-weight:800;color:white;margin-bottom:0.75rem;line-height:1.3">
                ${isEn ? 'Empowering Careers with AI Precision' : 'تمكين الكفاءات بأدق تقنيات الذكاء الاصطناعي'}
              </h3>
              <p style="color:rgba(255,255,255,0.75);font-size:var(--text-sm);line-height:1.7;margin-bottom:1.5rem">
                ${isEn ? 'We bridge the gap between talented job seekers and leading recruiters by deploying cutting-edge LLMs trained exclusively on modern global recruitment algorithms.' : 'نسد الفجوة بين الباحثين عن عمل والشركات الرائدة عبر نماذج ذكاء اصطناعي مدربة على أحدث خوارزميات التوظيف العالمية لعام 2026.'}
              </p>
              
              <div style="display:flex;flex-direction:column;gap:1.1rem">
                <div style="display:flex;gap:12px;align-items:flex-start">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(37,99,235,0.2);border:1px solid rgba(37,99,235,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#60a5fa">
                    ⚡
                  </div>
                  <div>
                    <strong style="color:white;font-size:var(--text-sm);display:block">${isEn ? 'ATS-Optimized Formatting' : 'صياغة متوافقة 100% مع ATS'}</strong>
                    <span style="color:rgba(255,255,255,0.65);font-size:12px">${isEn ? 'Guaranteed to bypass automated corporate filters.' : 'تضمن اجتياز الفرز الآلي لكبرى الشركات بدون أخطاء.'}</span>
                  </div>
                </div>

                <div style="display:flex;gap:12px;align-items:flex-start">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(16,185,129,0.2);border:1px solid rgba(16,185,129,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#34d399">
                    🎯
                  </div>
                  <div>
                    <strong style="color:white;font-size:var(--text-sm);display:block">${isEn ? 'Targeted Keyword Matcher' : 'مطابقة ذكية للكلمات المفتاحية'}</strong>
                    <span style="color:rgba(255,255,255,0.65);font-size:12px">${isEn ? 'Instant job description keyword density audit.' : 'فحص دقيق لمطابقة مهاراتك مع متطلبات الوظيفة.'}</span>
                  </div>
                </div>

                <div style="display:flex;gap:12px;align-items:flex-start">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(139,92,246,0.2);border:1px solid rgba(139,92,246,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#c084fc">
                    🏆
                  </div>
                  <div>
                    <strong style="color:white;font-size:var(--text-sm);display:block">${isEn ? 'STAR Method Interview Coach' : 'تدريب مقابلات بمنهجية STAR'}</strong>
                    <span style="color:rgba(255,255,255,0.65);font-size:12px">${isEn ? 'Behavioral & technical model answers tailored to your role.' : 'أجوبة نموذجية لأسئلة المقابلات في كبرى الشركات.'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center">
              <span style="color:rgba(255,255,255,0.6);font-size:12px">${isEn ? 'User Satisfaction' : 'نسبة رضا المستخدمين'}</span>
              <span style="color:#34d399;font-weight:800;font-size:var(--text-lg)">99.4%</span>
            </div>
          </div>

          <!-- Center Column: Vertical Half-Page Skyscraper (300x600) -->
          <div style="display:flex;justify-content:center;align-items:center;">
            <div class="ad-frame-wrapper ad-frame-skyscraper">
              <div class="ad-frame-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
                ${isEn ? 'Sponsored' : 'إعلان ممول'}
              </div>
              <div class="ad-frame-inner">
                <ins class="adsbygoogle"
                     style="display:inline-block;width:300px;height:600px;max-width:100%;"
                     data-ad-client="ca-pub-7520213352755959"
                     data-ad-slot="4455667788"
                     data-ad-format="vertical"></ins>
              </div>
            </div>
          </div>

          <!-- Luxurious Card 2 (Left in RTL, Right in LTR): Trust & Absolute Privacy -->
          <div class="card luxury-about-card" style="background:linear-gradient(145deg, rgba(15,23,42,0.88) 0%, rgba(30,41,59,0.92) 100%);border:1px solid rgba(99,102,241,0.35);border-radius:24px;padding:2rem;color:white;box-shadow:0 16px 40px rgba(0,0,0,0.35);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:inline-flex;align-items:center;gap:6px;background:rgba(16,185,129,0.18);border:1px solid rgba(16,185,129,0.35);padding:4px 12px;border-radius:var(--radius-full);color:#6ee7b7;font-size:12px;font-weight:700;margin-bottom:1rem">
                <span>🛡️</span>
                <span>${isEn ? 'Trust & Privacy First' : 'أمان وخصوصية فائقة'}</span>
              </div>
              <h3 style="font-size:var(--text-2xl);font-weight:800;color:white;margin-bottom:0.75rem;line-height:1.3">
                ${isEn ? 'Zero Data Retention & True Free Access' : 'معايير أمان موثوقة ومجانية مطلقة'}
              </h3>
              <p style="color:rgba(255,255,255,0.75);font-size:var(--text-sm);line-height:1.7;margin-bottom:1.5rem">
                ${isEn ? 'Your resume data is processed locally inside your browser session. We never sell, harvest, or monetize your sensitive career documents.' : 'تتم معالجة بياناتك مباشرة في متصفحك محلياً. لا نقوم بتخزين أو بيع أي وثيقة أو معلومة شخصية لأي طرف خارجي.'}
              </p>
              
              <div style="display:flex;flex-direction:column;gap:1.1rem">
                <div style="display:flex;gap:12px;align-items:flex-start">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(16,185,129,0.2);border:1px solid rgba(16,185,129,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#34d399">
                    🔒
                  </div>
                  <div>
                    <strong style="color:white;font-size:var(--text-sm);display:block">${isEn ? 'Client-Side Processing' : 'معالجة محلية داخل المتصفح'}</strong>
                    <span style="color:rgba(255,255,255,0.65);font-size:12px">${isEn ? 'Encrypted and kept strictly private.' : 'حماية مشفرة لجميع بيانات السيرة الذاتية.'}</span>
                  </div>
                </div>

                <div style="display:flex;gap:12px;align-items:flex-start">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(37,99,235,0.2);border:1px solid rgba(37,99,235,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#60a5fa">
                    📄
                  </div>
                  <div>
                    <strong style="color:white;font-size:var(--text-sm);display:block">${isEn ? 'Crystal Clear PDF Export' : 'تصدير PDF فوري عالي الدقة'}</strong>
                    <span style="color:rgba(255,255,255,0.65);font-size:12px">${isEn ? 'Clean vector layout with no watermarks.' : 'تصاميم رسمية بدون أي علامة مائية.'}</span>
                  </div>
                </div>

                <div style="display:flex;gap:12px;align-items:flex-start">
                  <div style="width:36px;height:36px;border-radius:10px;background:rgba(245,158,11,0.2);border:1px solid rgba(245,158,11,0.4);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fbbf24">
                    💎
                  </div>
                  <div>
                    <strong style="color:white;font-size:var(--text-sm);display:block">${isEn ? '100% Free Forever' : 'مجاني بالكامل بدون أي اشتراكات'}</strong>
                    <span style="color:rgba(255,255,255,0.65);font-size:12px">${isEn ? 'No paywalls, hidden fees or trial expirations.' : 'لا نطلب أي بطاقة بنكية أو رسوم خفية.'}</span>
                  </div>
                </div>
              </div>
            </div>

            <div style="margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center">
              <span style="color:rgba(255,255,255,0.6);font-size:12px">${isEn ? 'Privacy Score' : 'مستوى الأمان والخصوصية'}</span>
              <span style="color:#60a5fa;font-weight:800;font-size:var(--text-lg)">100% A+</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Mission, Vision & Core Values -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header text-center animate-on-scroll" style="margin-bottom:var(--space-10)">
          <h2 class="section-title">${isEn ? 'Our Guiding Principles' : 'مبادئنا وقيمنا الأساسية'}</h2>
          <p class="section-subtitle">${isEn ? 'What drives our team every day to build better tools for your career journey.' : 'المعايير التي نلتزم بها لتقديم أفضل تجربة لكل باحث عن عمل.'}</p>
        </div>

        <div class="about-values__grid">
          <div class="card animate-on-scroll delay-1">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.target}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Our Mission' : 'رسالتنا'}</h3>
            <p class="card__text">${isEn ? 'To empower every professional with world-class, 100% free digital tools that match top global hiring standards.' : 'تمكين كل باحث عن عمل من امتلاك أدوات احترافية ومجانية بالكامل تنافس أفضل المعايير العالمية.'}</p>
          </div>

          <div class="card animate-on-scroll delay-2">
            <div class="card__icon card__icon--accent">
              <span style="width:28px;height:28px;display:inline-flex">${icons.speed}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Our Vision' : 'رؤيتنا'}</h3>
            <p class="card__text">${isEn ? 'To be the leading AI career platform facilitating transparent employment and human capital growth globally.' : 'أن نكون المنصة الرائدة في تسخير تقنيات الذكاء الاصطناعي لتطوير رأس المال البشري وتسهيل التوظيف.'}</p>
          </div>

          <div class="card animate-on-scroll delay-3">
            <div class="card__icon card__icon--primary">
              <span style="width:28px;height:28px;display:inline-flex">${icons.shield}</span>
            </div>
            <h3 class="card__title">${isEn ? 'Privacy & Integrity' : 'الخصوصية والأمان'}</h3>
            <p class="card__text">${isEn ? 'We treat your career data with utmost confidentiality. Client-side processing ensures your data stays in your hands.' : 'الشفافية وحماية بيانات المستخدمين في صميم كل ميزة نقوم بتطويرها.'}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Factor Career Section -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center animate-on-scroll">
          <h2 class="section-title">${isEn ? 'Why Thousands Trust Factor Career' : 'لماذا يثق بنا الباحثون عن عمل؟'}</h2>
          <p class="section-subtitle">${isEn ? 'Built for job seekers, recruiters, and career switchers.' : 'ميزات مصممة خصيصاً لمساعدتك على التفوق في سوق العمل.'}</p>
        </div>

        <div class="grid grid--4" style="margin-top:var(--space-8)">
          <div class="card text-center animate-on-scroll delay-1">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-primary);margin-bottom:var(--space-2)">100%</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'Free Forever' : 'مجاني دائماً'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'No hidden fees, no credit card required, no watermark on downloads.' : 'بدون رسوم خفية أو علامات مائية على ملفاتك المحملة.'}</p>
          </div>
          <div class="card text-center animate-on-scroll delay-2">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-accent);margin-bottom:var(--space-2)">98%</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'ATS Pass Rate' : 'توافق مع أنظمة ATS'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'Engineered strictly adhering to automated screening system rules.' : 'تصاميم وهياكل متوافقة تماماً مع أنظمة تتبع المتقدمين.'}</p>
          </div>
          <div class="card text-center animate-on-scroll delay-3">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-primary);margin-bottom:var(--space-2)">5+</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'Intelligent Tools' : 'أدوات ذكية متكاملة'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'From CV builders to STAR interview coaching in one place.' : 'من بناء السيرة إلى أسئلة المقابلات ورسائل التقديم.'}</p>
          </div>
          <div class="card text-center animate-on-scroll delay-4">
            <div style="font-size:var(--text-3xl);font-weight:800;color:var(--color-accent);margin-bottom:var(--space-2)">24/7</div>
            <h4 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-2)">${isEn ? 'Global Access' : 'إتاحة مستمرة'}</h4>
            <p style="font-size:var(--text-sm);color:var(--color-text-light)">${isEn ? 'Available on desktop and mobile with instant PDF generation.' : 'متاح دائماً عبر جميع الأجهزة مع إمكانية التصدير الفوري.'}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Full-Width Edge-to-Edge CTA Section (Ready to Elevate Your Career?) -->
    <section class="section section--dark" style="background:var(--gradient-hero);width:100%;padding:var(--space-20) 0;position:relative;overflow:hidden">
      <div style="position:relative;z-index:2;width:100%;max-width:1440px;margin:0 auto;padding:0 var(--space-8);text-align:center">
        <div class="cta-section animate-on-scroll" style="background:transparent;border:none;width:100%;max-width:100%;margin:0 auto;padding:0">
          <h2 class="cta-section__title" style="font-size:clamp(2.2rem, 4.5vw, 3.2rem);font-weight:800;color:white;margin-bottom:var(--space-4);line-height:1.25">
            ${isEn ? 'Ready to Elevate Your Career?' : 'هل أنت مستعد للانطلاق بمسيرتك المهنية؟'}
          </h2>
          <p class="cta-section__text" style="font-size:clamp(1rem, 2vw, 1.25rem);color:rgba(255,255,255,0.92);max-width:900px;margin:0 auto var(--space-8);line-height:1.8">
            ${isEn ? 'Join thousands of job seekers who landed their dream roles using our free AI-powered career platform.' : 'انضم إلى آلاف الباحثين عن عمل الذين حققوا أهدافهم المهنية باستخدام أدواتنا الذكية والمجانية بالكامل.'}
          </p>
          <div class="cta-section__actions" style="display:flex;gap:var(--space-5);justify-content:center;flex-wrap:wrap">
            <a href="/resume-builder" class="btn btn--white btn--lg" data-nav style="box-shadow:0 12px 30px rgba(0,0,0,0.25);padding:1.1rem 2.8rem;font-size:1.1rem;font-weight:700">
              <span>📄</span>
              <span>${isEn ? 'Create Resume Now' : 'ابدأ بإنشاء سيرتك الذاتية'}</span>
            </a>
            <a href="/jobs" class="btn btn--outline btn--lg" data-nav style="color:white;border-color:rgba(255,255,255,0.6);padding:1.1rem 2.8rem;font-size:1.1rem;font-weight:700;backdrop-filter:blur(8px)">
              <span>💼</span>
              <span>${isEn ? 'Explore Verified Jobs' : 'تصفح الوظائف المتاحة'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.pages.aboutSEO = {
  title: 'About Us | Factor Career - Free AI Career Platform',
  description: 'Learn about Factor Career, our mission to democratize job search tools, and how we empower job seekers worldwide with AI.',
  keywords: 'About Factor Career, Career Platform, Free Resume Builder, Our Mission, Team'
};
