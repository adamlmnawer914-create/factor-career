/* ============================================
   Factor Career - Jobs & Opportunities Page
   Interactive Real-time Filter, AI Verified Badges,
   Search & Direct Application
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.jobsFilterState = {
  searchQuery: '',
  category: 'all',
  type: 'all'
};

window.CareerAI.pages.jobs = function() {
  const icons = window.CareerAI.icons;
  const db = window.CareerAI.db;
  const allJobs = db.getJobs ? db.getJobs(false) : (db.data ? db.data.jobs : []);
  const state = window.CareerAI.jobsFilterState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const t = (k, f) => window.CareerAI.i18n ? window.CareerAI.i18n.t(k, f) : (f || k);

  // Apply filters
  const filteredJobs = allJobs.filter(job => {
    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = (job.title && job.title.toLowerCase().includes(q)) || (job.title_ar && job.title_ar.toLowerCase().includes(q));
      const matchComp = job.company && job.company.toLowerCase().includes(q);
      const matchLoc = job.location && job.location.toLowerCase().includes(q);
      const matchReq = (job.requirements && job.requirements.toLowerCase().includes(q)) || (job.requirements_ar && job.requirements_ar.toLowerCase().includes(q));
      if (!matchTitle && !matchComp && !matchLoc && !matchReq) return false;
    }

    // Category filter
    if (state.category !== 'all') {
      const cat = (job.category || '').toLowerCase();
      if (state.category === 'dev' && !cat.includes('dev') && !cat.includes('software') && !cat.includes('engineer')) return false;
      if (state.category === 'marketing' && !cat.includes('market') && !cat.includes('sales')) return false;
      if (state.category === 'design' && !cat.includes('design') && !cat.includes('ui')) return false;
      if (state.category === 'hr' && !cat.includes('hr') && !cat.includes('recruit') && !cat.includes('manage')) return false;
    }

    // Type filter
    if (state.type !== 'all') {
      const jType = ((job.type || '') + ' ' + (job.location || '')).toLowerCase();
      if (state.type === 'remote' && !jType.includes('remote') && !jType.includes('عن بعد')) return false;
      if (state.type === 'fulltime' && !jType.includes('full') && !jType.includes('كامل')) return false;
    }

    return true;
  });

  return `
    <!-- Header -->
    <div class="page-header page-header--dark" style="background:var(--gradient-hero)">
      <div class="container">
        <nav class="breadcrumb" style="color:rgba(255,255,255,0.7)">
          <a href="/" onclick="event.preventDefault();CareerAI.router.navigate('/')" style="color:rgba(255,255,255,0.7)">${t('nav.home', 'الرئيسية')}</a>
          <span style="margin:0 8px">›</span>
          <span style="color:white">${t('nav.jobs', 'الوظائف والفرص')}</span>
        </nav>
        <div class="page-header__content" style="text-align:center;max-width:760px;margin:0 auto">
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-2);margin-bottom:var(--space-2)">
            <span class="section__badge" style="background:rgba(16,185,129,0.2);color:#34d399;border:1px solid rgba(16,185,129,0.4)">
              ✓ ${isEn ? 'AI Verified & Anti-Scam Filtered' : 'فرص عمل موثوقة ومفحوصة بالذكاء الاصطناعي'}
            </span>
          </div>
          <h1 class="page-header__title" style="color:white;font-size:var(--text-4xl)">
            ${isEn ? 'Explore Verified Career Opportunities' : 'الوظائف والفرص المهنية اليومية'}
          </h1>
          <p class="page-header__subtitle" style="color:rgba(255,255,255,0.85);font-size:var(--text-lg)">
            ${isEn ? 'Discover active, vetted jobs updated daily across top companies and remote startups.' : 'استكشف أحدث فرص العمل المحدثة يومياً بعد فحصها وتدقيقها بالذكاء الاصطناعي لضمان مصداقيتها.'}
          </p>

          <div style="display:flex;gap:var(--space-4);justify-content:center;margin-top:var(--space-6);flex-wrap:wrap">
            <div style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:var(--radius-full);padding:8px 20px;font-size:var(--text-sm);color:white;backdrop-filter:blur(8px)">
              <span style="font-weight:bold;color:#34d399">${allJobs.length}</span> ${isEn ? 'Active Verified Jobs' : 'وظيفة موثقة متاحة الآن'}
            </div>
            <div style="background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.25);border-radius:var(--radius-full);padding:8px 20px;font-size:var(--text-sm);color:white;backdrop-filter:blur(8px)">
              ⚡ ${isEn ? 'Auto-Updated Daily via AI Pipeline' : 'تحديث آلي يومي عبر وكيل الذكاء الاصطناعي'}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Google AdSense - Top Leaderboard Banner -->
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

    <!-- Filter & Search Controls Bar -->
    <section class="section" style="padding-top:var(--space-4);padding-bottom:var(--space-16)">
      <div class="container">

        <!-- Search & Filter Card -->
        <div style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;margin-bottom:2rem;box-shadow:0 4px 20px rgba(0,0,0,0.15)">
          <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:1rem;align-items:end;">
            
            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Search Jobs, Companies or Skills' : 'البحث بالكلمة المفتاحية، المسمى، الشركة أو المهارات'}</label>
              <input type="text" id="jobsSearchInput" class="form-input" value="${state.searchQuery || ''}" placeholder="${isEn ? 'e.g. React, Marketing, Remote, Manager...' : 'مثال: مهندس برمجيات، تسويق، عن بعد...'}" oninput="CareerAI.onJobsSearch(this.value)">
            </div>

            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Field / Category' : 'مجال العمل والتخصص'}</label>
              <select id="jobsCategoryFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('category', this.value)">
                <option value="all" ${state.category==='all'?'selected':''}>${isEn ? 'All Fields' : 'جميع المجالات'}</option>
                <option value="dev" ${state.category==='dev'?'selected':''}>${isEn ? 'Software & Tech' : 'برمجة وتكنولوجيا'}</option>
                <option value="marketing" ${state.category==='marketing'?'selected':''}>${isEn ? 'Marketing & Sales' : 'تسويق ومبيعات'}</option>
                <option value="design" ${state.category==='design'?'selected':''}>${isEn ? 'UI/UX & Design' : 'تصميم وفنون'}</option>
                <option value="hr" ${state.category==='hr'?'selected':''}>${isEn ? 'HR & Management' : 'موارد بشرية وإدارة'}</option>
              </select>
            </div>

            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Work Mode' : 'نوع العمل'}</label>
              <select id="jobsTypeFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('type', this.value)">
                <option value="all" ${state.type==='all'?'selected':''}>${isEn ? 'All Types' : 'جميع الأنواع'}</option>
                <option value="remote" ${state.type==='remote'?'selected':''}>${isEn ? 'Remote Only 🌍' : 'عن بعد فقط 🌍'}</option>
                <option value="fulltime" ${state.type==='fulltime'?'selected':''}>${isEn ? 'Full-Time' : 'دوام كامل'}</option>
              </select>
            </div>

          </div>
        </div>

        <!-- 2-Column Content Layout (Jobs Grid Left + Sticky Ad Sidebar Right) -->
        <div class="page-with-sidebar">
          
          <!-- Main Jobs Cards Column -->
          <div class="main-content-col" id="jobsListContainer">
            ${filteredJobs.length === 0 ? `
              <div class="text-center" style="padding:4rem 1rem;background:var(--color-bg-card);border-radius:16px;border:1px solid var(--color-border)">
                <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
                <h3 style="font-size:1.3rem;font-weight:700;color:var(--color-text);margin-bottom:0.5rem">${isEn ? 'No matching jobs found' : 'لم يتم العثور على وظائف مطابقة'}</h3>
                <p style="color:var(--color-text-muted);max-width:420px;margin:0 auto 1.5rem">${isEn ? 'Try adjusting your search terms or clearing filters to see all available jobs.' : 'جرّب تغيير كلمات البحث أو إعادة ضبط الفلاتر للاطلاع على كافة الفرص المتاحة.'}</p>
                <button class="btn btn--secondary btn--sm" onclick="CareerAI.resetJobsFilter()">${isEn ? 'Reset All Filters' : 'إعادة ضبط الفلاتر'}</button>
              </div>
            ` : `
              <div class="jobs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem;">
                ${filteredJobs.map((job, i) => `
                  <div class="job-card animate-on-scroll delay-${(i % 3) + 1}" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:transform 0.25s, box-shadow 0.25s;box-shadow:0 4px 15px rgba(0,0,0,0.1)">
                    <div style="padding:1.5rem;flex:1;display:flex;flex-direction:column;">
                      
                      <!-- Card Top Badges -->
                      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;flex-wrap:wrap;gap:0.5rem">
                        <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);border-radius:20px;padding:3px 10px;font-size:0.75rem;font-weight:700;display:inline-flex;align-items:center;gap:4px">
                          ✓ ${isEn ? 'AI Verified' : 'موثقة ومفحوصة'}
                        </span>
                        <div style="display:flex;gap:0.4rem">
                          <span class="job-badge job-badge--type" style="background:rgba(99,102,241,0.15);color:#a5b4fc;border-radius:6px;padding:3px 8px;font-size:0.75rem">${isEn ? (job.type || 'Remote') : (job.type_ar || job.type || 'عن بعد')}</span>
                          <span class="job-badge job-badge--location" style="background:rgba(255,255,255,0.08);color:var(--color-text-muted);border-radius:6px;padding:3px 8px;font-size:0.75rem">${job.location || 'Remote'}</span>
                        </div>
                      </div>

                      <h3 style="font-size:1.15rem;font-weight:700;color:var(--color-text);margin:0 0 0.5rem 0;line-height:1.4">
                        ${isEn ? job.title : (job.title_ar || job.title)}
                      </h3>

                      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.9rem;font-weight:600;color:var(--color-primary);margin-bottom:0.75rem">
                        <span style="width:16px;height:16px;display:inline-flex">${icons.users}</span>
                        <span>${job.company}</span>
                      </div>

                      <p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 1rem 0;line-height:1.6;flex:1">
                        ${isEn ? (job.description || '') : (job.description_ar || job.description || '')}
                      </p>

                      <!-- Requirements Snippet -->
                      ${(job.requirements || job.requirements_ar) ? `
                        <div style="background:rgba(15,23,42,0.4);border:1px solid var(--color-border-light);border-radius:8px;padding:0.75rem;margin-bottom:1.25rem;font-size:0.8rem;color:#cbd5e1;line-height:1.5;">
                          ${isEn ? (job.requirements || '') : (job.requirements_ar || job.requirements || '')}
                        </div>
                      ` : ''}

                      <!-- Action Button -->
                      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.75rem;border-top:1px solid var(--color-border-light)">
                        <span style="font-size:0.8rem;color:var(--color-text-muted)">${job.postedAt || 'Recently'}</span>
                        <a href="${job.applyUrl || 'mailto:factorcareer@gmail.com'}" target="_blank" rel="noopener" class="btn btn--primary btn--sm" style="box-shadow:0 2px 10px rgba(99,102,241,0.3)">
                          ${isEn ? 'Apply Direct ↗' : 'التقديم المباشر ↗'}
                        </a>
                      </div>

                    </div>
                  </div>
                `).join('')}
              </div>
            `}
          </div>

          <!-- Sticky Sidebar with Skyscraper 300x600 -->
          <aside class="sticky-sidebar-ad animate-on-scroll">
            <div class="ad-frame-wrapper ad-frame-skyscraper">
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
          </aside>

        </div>

      </div>
    </section>
  `;
};

// Interactive Filter Handlers
CareerAI.onJobsSearch = function(val) {
  window.CareerAI.jobsFilterState.searchQuery = val;
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages.jobs) {
    main.innerHTML = `<div class="page-transition">${window.CareerAI.pages.jobs()}</div>`;
    const input = document.getElementById('jobsSearchInput');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
};

CareerAI.onJobsFilterChange = function(field, val) {
  window.CareerAI.jobsFilterState[field] = val;
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages.jobs) {
    main.innerHTML = `<div class="page-transition">${window.CareerAI.pages.jobs()}</div>`;
  }
};

CareerAI.resetJobsFilter = function() {
  window.CareerAI.jobsFilterState = { searchQuery: '', category: 'all', type: 'all' };
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages.jobs) {
    main.innerHTML = `<div class="page-transition">${window.CareerAI.pages.jobs()}</div>`;
  }
};

window.CareerAI.pages.jobsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Verified Job Opportunities & Remote Careers | Factor Career',
      description: 'Explore daily verified job opportunities from top tech employers and remote companies. Filter by category, role, and location on Factor Career.',
      keywords: 'Jobs, Remote Work, Tech Jobs, Career Opportunities, Hiring, Factor Career'
    };
  }
  return {
    title: 'أحدث الوظائف وفرص العمل الموثقة يومياً | فكتور كارير',
    description: 'استكشف أحدث الوظائف وفرص العمل الموثقة والمحدثة يومياً بعد فحصها بالذكاء الاصطناعي في مجالات البرمجة والتسويق والإدارة والتصميم.',
    keywords: 'وظائف, فرص عمل, وظائف عن بعد, وظائف تقنية, التوظيف, Factor Career'
  };
};
