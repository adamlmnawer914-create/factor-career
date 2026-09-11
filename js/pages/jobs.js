/* ============================================
   Factor Career - Jobs & Opportunities Page
   Interactive Real-time Filter, Official Company Logos,
   AI Verified Badges, Search & Direct Application
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.jobsFilterState = {
  searchQuery: '',
  category: 'all',
  type: 'all'
};

// Fetch live jobs in background to ensure always updated
(function initLiveJobsSync() {
  if (typeof window === 'undefined') return;
  fetch('/data/jobs.json?t=' + Date.now())
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data) && data.length > 0 && window.CareerAI.db) {
        window.CareerAI.db.defaultJobs = data;
        try {
          localStorage.setItem(window.CareerAI.db.KEYS.JOBS, JSON.stringify(data));
        } catch(e) {}
        if (window.location.pathname === '/jobs' || window.location.hash.includes('jobs')) {
          const main = document.getElementById('main-content');
          if (main && window.CareerAI.pages.jobs) {
            main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.jobs() + '</div>';
          }
        }
      }
    })
    .catch(() => {});
})();

window.CareerAI.pages.jobs = function() {
  const icons = window.CareerAI.icons;
  const db = window.CareerAI.db;
  const allJobs = db.getJobs ? db.getJobs(false) : (db.data ? db.data.jobs : []);
  const state = window.CareerAI.jobsFilterState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  // Apply filters
  const filteredJobs = allJobs.filter(job => {
    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase().trim();
      const matchTitle = (job.title && job.title.toLowerCase().includes(q)) || (job.title_ar && job.title_ar.toLowerCase().includes(q));
      const matchComp = job.company && job.company.toLowerCase().includes(q);
      const matchLoc = (job.location && job.location.toLowerCase().includes(q)) || (job.location_ar && job.location_ar.toLowerCase().includes(q));
      const matchReq = (job.requirements && job.requirements.toLowerCase().includes(q)) || (job.requirements_ar && job.requirements_ar.toLowerCase().includes(q));
      const matchDesc = (job.description && job.description.toLowerCase().includes(q)) || (job.description_ar && job.description_ar.toLowerCase().includes(q));
      if (!matchTitle && !matchComp && !matchLoc && !matchReq && !matchDesc) return false;
    }

    // Category filter
    if (state.category !== 'all') {
      const cat = (job.category || '').toLowerCase();
      if (state.category === 'dev' && !cat.includes('dev') && !cat.includes('soft') && !cat.includes('eng') && !cat.includes('tech') && !cat.includes('data') && !cat.includes('ai')) return false;
      if (state.category === 'marketing' && !cat.includes('market') && !cat.includes('sales') && !cat.includes('growth') && !cat.includes('seo')) return false;
      if (state.category === 'design' && !cat.includes('design') && !cat.includes('ui') && !cat.includes('ux') && !cat.includes('art')) return false;
      if (state.category === 'management' && !cat.includes('manag') && !cat.includes('hr') && !cat.includes('admin') && !cat.includes('talent') && !cat.includes('operat')) return false;
      if (state.category === 'finance' && !cat.includes('finan') && !cat.includes('account') && !cat.includes('crypto')) return false;
      if (state.category === 'support' && !cat.includes('support') && !cat.includes('custom') && !cat.includes('service')) return false;
      if (state.category === 'other' && (cat.includes('dev') || cat.includes('market') || cat.includes('design') || cat.includes('manag'))) return false;
    }

    // Type filter
    if (state.type !== 'all') {
      const type = (job.type || '').toLowerCase();
      const typeAr = (job.type_ar || '').toLowerCase();
      if (state.type === 'remote' && !type.includes('remote') && !typeAr.includes('عن بعد') && !typeAr.includes('عن بُعد')) return false;
      if (state.type === 'full-time' && !type.includes('full') && !typeAr.includes('كامل')) return false;
      if (state.type === 'part-time' && !type.includes('part') && !typeAr.includes('جزئي')) return false;
      if (state.type === 'contract' && !type.includes('contract') && !type.includes('freelance') && !typeAr.includes('حر') && !typeAr.includes('عقد')) return false;
    }

    return true;
  });

  return `
    <!-- Jobs Hero Section -->
    <section class="section" style="padding-top:2.5rem;padding-bottom:1.5rem">
      <div class="container">
        
        <div class="text-center" style="max-width:800px;margin:0 auto 2rem">
          <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.1);border:1px solid rgba(99,102,241,0.25);border-radius:30px;padding:6px 16px;margin-bottom:1.25rem;">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;animation:pulse 2s infinite"></span>
            <span style="font-size:0.85rem;font-weight:600;color:var(--color-primary-light);">
              ${isEn ? 'AI-Verified Jobs • Official Company Logos • Updated Daily' : 'وظائف موثقة بالذكاء الاصطناعي • شعارات الشركات الرسمية • تحديث يومي'}
            </span>
          </div>

          <h1 style="font-size:clamp(1.8rem, 4vw, 2.5rem);font-weight:800;color:var(--color-text);line-height:1.25;margin-bottom:1rem">
            ${isEn ? 'Verified Career & Remote Job Opportunities' : 'أحدث الوظائف وفرص العمل الموثقة'}
          </h1>
          <p style="font-size:1.05rem;color:var(--color-text-muted);line-height:1.6">
            ${isEn ? 'Explore daily hand-picked and AI-audited job opportunities from verified global companies and top remote organizations.' : 'استكشف يومياً أفضل الفرص الوظيفية والعمل عن بُعد، مفحوصة ومحققة بالذكاء الاصطناعي لحمايتك من الإعلانات الوهمية.'}
          </p>
        </div>

        <!-- Horizontal Top Ad Banner (728x90 / Responsive) -->
        <div class="ad-frame-wrapper ad-frame-banner" style="margin-bottom:2rem;">
          <div class="ad-frame-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
            ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / SPONSORED'}
          </div>
          <div class="ad-frame-inner">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:728px;height:90px;max-width:100%;"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="1234567890"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        <!-- Filter & Search Bar -->
        <div style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;padding:1.5rem;margin-bottom:2.5rem;box-shadow:0 4px 20px rgba(0,0,0,0.08)">
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;align-items:flex-end">
            
            <div class="form-group" style="margin:0;grid-column:span 2;">
              <label class="form-label">${isEn ? 'Search by Keyword, Title, Company or Skills' : 'البحث بالكلمة المفتاحية، المسمى، الشركة أو المهارات'}</label>
              <input type="text" id="jobsSearchInput" class="form-input" 
                     placeholder="${isEn ? 'e.g. Frontend Developer, Stripe, Remote, Marketing...' : 'مثال: مهندس برمجيات، Stripe، عن بعد، تسويق...'}" 
                     value="${state.searchQuery}" 
                     oninput="CareerAI.onJobsSearch(this.value)">
            </div>

            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Field / Category' : 'مجال العمل والتخصص'}</label>
              <select id="jobsCategoryFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('category', this.value)">
                <option value="all" ${state.category==='all'?'selected':''}>${isEn ? 'All Fields' : 'جميع المجالات'}</option>
                <option value="dev" ${state.category==='dev'?'selected':''}>${isEn ? 'Software & Tech' : 'برمجة وتكنولوجيا'}</option>
                <option value="marketing" ${state.category==='marketing'?'selected':''}>${isEn ? 'Marketing & Sales' : 'تسويق ومبيعات'}</option>
                <option value="design" ${state.category==='design'?'selected':''}>${isEn ? 'UI/UX & Design' : 'تصميم وفنون'}</option>
                <option value="management" ${state.category==='management'?'selected':''}>${isEn ? 'HR & Management' : 'موارد بشرية وإدارة'}</option>
                <option value="finance" ${state.category==='finance'?'selected':''}>${isEn ? 'Finance & Accounting' : 'مالية ومحاسبة'}</option>
                <option value="support" ${state.category==='support'?'selected':''}>${isEn ? 'Customer Support' : 'خدمة عملاء ودعم'}</option>
              </select>
            </div>

            <div class="form-group" style="margin:0">
              <label class="form-label">${isEn ? 'Work Type' : 'نوع العمل'}</label>
              <select id="jobsTypeFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('type', this.value)">
                <option value="all" ${state.type==='all'?'selected':''}>${isEn ? 'All Types' : 'جميع الأنواع'}</option>
                <option value="remote" ${state.type==='remote'?'selected':''}>${isEn ? 'Remote / Online' : 'عن بُعد / أونلاين'}</option>
                <option value="full-time" ${state.type==='full-time'?'selected':''}>${isEn ? 'Full-time' : 'دوام كامل'}</option>
                <option value="part-time" ${state.type==='part-time'?'selected':''}>${isEn ? 'Part-time' : 'دوام جزئي'}</option>
                <option value="contract" ${state.type==='contract'?'selected':''}>${isEn ? 'Contract / Freelance' : 'عمل حر / عقد'}</option>
              </select>
            </div>

          </div>
        </div>

        <!-- Main Layout: Jobs Grid + Sticky Vertical Skyscraper Ad -->
        <div class="tool-content-with-sidebar" style="display:grid;grid-template-columns:1fr 320px;gap:2rem;align-items:start">
          
          <!-- Jobs Grid Column -->
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem">
              <h2 style="font-size:1.2rem;font-weight:700;color:var(--color-text)">
                ${isEn ? 'Available Opportunities' : 'الوظائف المتاحة'} 
                <span style="font-size:0.9rem;font-weight:500;color:var(--color-primary);margin-right:6px">(${filteredJobs.length} ${isEn ? 'jobs' : 'فرصة'})</span>
              </h2>
              ${(state.searchQuery || state.category !== 'all' || state.type !== 'all') ? `
                <button class="btn btn--text btn--sm" onclick="CareerAI.resetJobsFilter()" style="color:var(--color-accent)">
                  ${isEn ? 'Reset Filters ✕' : 'إعادة ضبط ✕'}
                </button>
              ` : ''}
            </div>

            ${filteredJobs.length === 0 ? `
              <div class="text-center" style="padding:4rem 1rem;background:var(--color-bg-card);border-radius:16px;border:1px solid var(--color-border)">
                <div style="font-size:3rem;margin-bottom:1rem">🔍</div>
                <h3 style="font-size:1.3rem;font-weight:700;color:var(--color-text);margin-bottom:0.5rem">${isEn ? 'No matching jobs found' : 'لم يتم العثور على وظائف مطابقة'}</h3>
                <p style="color:var(--color-text-muted);max-width:420px;margin:0 auto 1.5rem">${isEn ? 'Try adjusting your search terms or clearing filters to see all available jobs.' : 'جرّب تغيير كلمات البحث أو إعادة ضبط الفلاتر للاطلاع على كافة الفرص المتاحة.'}</p>
                <button class="btn btn--secondary btn--sm" onclick="CareerAI.resetJobsFilter()">${isEn ? 'Reset All Filters' : 'إعادة ضبط الفلاتر'}</button>
              </div>
            ` : `
              <div class="jobs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem;">
                ${filteredJobs.map((job, i) => {
                  const compInitial = (job.company ? job.company.replace(/[^a-zA-Z0-9]/g, '').charAt(0).toUpperCase() : '🏢') || '🏢';
                  const logoUrl = job.logo || job.companyLogo || (job.image && !job.image.includes('unsplash') ? job.image : '');
                  
                  return `
                  <div class="job-card" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:16px;overflow:hidden;display:flex;flex-direction:column;transition:transform 0.25s, box-shadow 0.25s;box-shadow:0 4px 15px rgba(0,0,0,0.1)">
                    <div style="padding:1.5rem;flex:1;display:flex;flex-direction:column;">
                      
                      <!-- Header: Company Logo + Badges -->
                      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;gap:1rem">
                        
                        <!-- Official Company Logo Avatar -->
                        <div style="display:flex;align-items:center;gap:0.75rem">
                          <div style="width:52px;height:52px;min-width:52px;border-radius:12px;background:#ffffff;border:1px solid rgba(255,255,255,0.15);box-shadow:0 2px 8px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:4px">
                            ${logoUrl ? `
                              <img src="${logoUrl}" alt="${job.company}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                              <div style="display:none;width:100%;height:100%;border-radius:8px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.3rem;font-weight:800;align-items:center;justify-content:center">${compInitial}</div>
                            ` : `
                              <div style="width:100%;height:100%;border-radius:8px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.3rem;font-weight:800;display:flex;align-items:center;justify-content:center">${compInitial}</div>
                            `}
                          </div>
                          <div>
                            <div style="font-size:0.95rem;font-weight:700;color:var(--color-primary);line-height:1.2;margin-bottom:3px">${job.company}</div>
                            <div style="font-size:0.75rem;color:var(--color-text-muted)">${isEn ? (job.category || 'Tech') : (job.category_ar || 'تكنولوجيا')}</div>
                          </div>
                        </div>

                        <!-- Verified & Type Badges -->
                        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
                          <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);border-radius:20px;padding:3px 8px;font-size:0.7rem;font-weight:700;display:inline-flex;align-items:center;gap:3px;white-space:nowrap">
                            ✓ ${isEn ? 'Verified' : 'موثقة'}
                          </span>
                          <span class="job-badge job-badge--type" style="background:rgba(99,102,241,0.15);color:#a5b4fc;border-radius:6px;padding:2px 8px;font-size:0.7rem;white-space:nowrap">
                            ${isEn ? (job.type || 'Remote') : (job.type_ar || 'عن بُعد')}
                          </span>
                        </div>

                      </div>

                      <!-- Job Title -->
                      <h3 style="font-size:1.15rem;font-weight:700;color:var(--color-text);margin:0 0 0.75rem 0;line-height:1.4">
                        ${isEn ? job.title : (job.title_ar || job.title)}
                      </h3>

                      <!-- Location & Tags -->
                      <div style="display:flex;align-items:center;gap:0.5rem;font-size:0.8rem;color:var(--color-text-muted);margin-bottom:0.75rem">
                        <span>📍 ${isEn ? job.location : (job.location_ar || job.location)}</span>
                        <span>•</span>
                        <span>💰 ${job.salary || (isEn ? 'Competitive' : 'رواتب تنافسية')}</span>
                      </div>

                      <!-- Description -->
                      <p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 1rem 0;line-height:1.6;flex:1">
                        ${isEn ? (job.description || '') : (job.description_ar || job.description || '')}
                      </p>

                      <!-- Requirements Snippet -->
                      ${(job.requirements || job.requirements_ar) ? `
                        <div style="background:rgba(15,23,42,0.4);border:1px solid var(--color-border-light);border-radius:8px;padding:0.75rem;margin-bottom:1.25rem;font-size:0.8rem;color:#cbd5e1;line-height:1.5;">
                          ${(isEn ? (job.requirements || '') : (job.requirements_ar || job.requirements || '')).split('\n').map(line => `<div>${line}</div>`).join('')}
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
                `}).join('')}
              </div>
            `}
          </div>

          <!-- Sticky Sidebar with Skyscraper 300x600 -->
          <aside class="sticky-sidebar-ad">
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
    main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.jobs() + '</div>';
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
    main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.jobs() + '</div>';
  }
};

CareerAI.resetJobsFilter = function() {
  window.CareerAI.jobsFilterState = { searchQuery: '', category: 'all', type: 'all' };
  const main = document.getElementById('main-content');
  if (main && window.CareerAI.pages.jobs) {
    main.innerHTML = '<div class="page-transition">' + window.CareerAI.pages.jobs() + '</div>';
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
