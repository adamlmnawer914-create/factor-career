/* ============================================
   Factor Career - Advanced AI Jobs Page v3.0
   Multi-Source Real Jobs, In-Page Detailed Modal,
   Direct Official Apply Links, Country & Role Filters
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.jobsFilterState = {
  searchQuery: '',
  country: 'all',
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
  const icons = window.CareerAI.icons || {};
  const db = window.CareerAI.db;
  const allJobs = db.getJobs ? db.getJobs(false) : (db.data ? db.data.jobs : []);
  const state = window.CareerAI.jobsFilterState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  // Apply filters
  const filteredJobs = allJobs.filter(job => {
    // 1. Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase().trim();
      const matchTitle = (job.title && job.title.toLowerCase().includes(q)) || (job.title_ar && job.title_ar.toLowerCase().includes(q));
      const matchComp = job.company && job.company.toLowerCase().includes(q);
      const matchLoc = (job.location && job.location.toLowerCase().includes(q)) || (job.location_ar && job.location_ar.toLowerCase().includes(q));
      const matchDesc = (job.description && job.description.toLowerCase().includes(q)) || (job.description_ar && job.description_ar.toLowerCase().includes(q));
      const matchSkills = job.skills && Array.isArray(job.skills) && job.skills.some(s => s.toLowerCase().includes(q));
      if (!matchTitle && !matchComp && !matchLoc && !matchDesc && !matchSkills) return false;
    }

    // 2. Country / Location Filter
    if (state.country !== 'all') {
      const c = (job.country_code || '').toLowerCase();
      const loc = (job.location || '').toLowerCase();
      const locAr = (job.location_ar || '').toLowerCase();

      if (state.country === 'gcc') {
        if (c !== 'gcc' && !loc.includes('saudi') && !loc.includes('uae') && !loc.includes('dubai') && !loc.includes('gulf') && !locAr.includes('سعودية') && !locAr.includes('خليج')) return false;
      } else if (state.country === 'mena') {
        if (c !== 'mena' && !loc.includes('egypt') && !loc.includes('mena') && !loc.includes('morocco') && !locAr.includes('مصر') && !locAr.includes('أوسط')) return false;
      } else if (state.country === 'us_ca') {
        if (c !== 'us_ca' && !loc.includes('united states') && !loc.includes('usa') && !loc.includes('canada') && !locAr.includes('أمريك') && !locAr.includes('كندا')) return false;
      } else if (state.country === 'eu_uk') {
        if (c !== 'eu_uk' && !loc.includes('uk') && !loc.includes('germany') && !loc.includes('europe') && !locAr.includes('أوروب') && !locAr.includes('بريطاني')) return false;
      } else if (state.country === 'remote') {
        if (c !== 'remote' && !loc.includes('remote') && !loc.includes('worldwide') && !locAr.includes('عن بعد') && !locAr.includes('عالمي')) return false;
      }
    }

    // 3. Category Filter
    if (state.category !== 'all') {
      const cat = (job.category || '').toLowerCase();
      if (state.category === 'dev' && !cat.includes('dev') && !cat.includes('soft') && !cat.includes('eng') && !cat.includes('tech') && !cat.includes('data') && !cat.includes('ai')) return false;
      if (state.category === 'marketing' && !cat.includes('market') && !cat.includes('sales') && !cat.includes('growth') && !cat.includes('seo')) return false;
      if (state.category === 'design' && !cat.includes('design') && !cat.includes('ui') && !cat.includes('ux') && !cat.includes('art')) return false;
      if (state.category === 'sales' && !cat.includes('sales') && !cat.includes('growth') && !cat.includes('account')) return false;
      if (state.category === 'hr' && !cat.includes('hr') && !cat.includes('human') && !cat.includes('talent') && !cat.includes('recruit') && !cat.includes('manage')) return false;
      if (state.category === 'finance' && !cat.includes('finan') && !cat.includes('account') && !cat.includes('crypto')) return false;
      if (state.category === 'support' && !cat.includes('support') && !cat.includes('custom') && !cat.includes('service')) return false;
    }

    // 4. Type Filter
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
        
        <div class="text-center" style="max-width:820px;margin:0 auto 2rem">
          <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.25);border-radius:30px;padding:6px 16px;margin-bottom:1.25rem">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 10px #10b981;animation:pulse 2s infinite"></span>
            <span style="font-size:0.85rem;font-weight:700;color:var(--color-primary-light)">
              ${isEn ? 'AI-Verified Live Feed • Direct Official Applications' : 'فرص عمل حقيقية موثقة بالذكاء الاصطناعي • تقديم رسمي مباشر'}
            </span>
          </div>

          <h1 style="font-size:clamp(1.8rem, 4vw, 2.6rem);font-weight:800;color:var(--color-text);line-height:1.25;margin-bottom:1rem">
            ${isEn ? 'Verified Career & Remote Job Opportunities' : 'أحدث الوظائف وفرص العمل الموثقة'}
          </h1>
          <p style="font-size:1.05rem;color:var(--color-text-muted);line-height:1.6">
            ${isEn ? 'Browse authentic job listings from verified employers worldwide. Read full job descriptions and apply directly to official employer portals without redirects.' : 'تصفح وظائف حقيقية ومحدثة يومياً من أفضل الشركات العالمية مع تفاصيل كاملة وروابط تقديم رسمية ومباشرة بدون إعلانات مضللة.'}
          </p>
        </div>

        <!-- Horizontal Top Ad Banner (728x90) -->
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

        <!-- Advanced 4-Column Filter & Search Bar -->
        <div style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:18px;padding:1.5rem;margin-bottom:2.5rem;box-shadow:0 4px 25px rgba(0,0,0,0.1)">
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;align-items:flex-end">
            
            <!-- Search Query -->
            <div class="form-group" style="margin:0;grid-column:span 2;">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '🔍 Search by Title, Company, Skills or Keyword' : '🔍 البحث بالمسمى، الشركة، المهارات أو الكلمات المفتاحية'}</label>
              <input type="text" id="jobsSearchInput" class="form-input" 
                     placeholder="${isEn ? 'e.g. Frontend, Python, Stripe, React, Remote...' : 'مثال: مهندس برمجيات، بايثون، تسويق، عن بعد، Stripe...'}" 
                     value="${state.searchQuery}" 
                     oninput="CareerAI.onJobsSearch(this.value)">
            </div>

            <!-- Country & Region Filter -->
            <div class="form-group" style="margin:0">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '🌍 Country / Location' : '🌍 الدولة والموقع الجغرافي'}</label>
              <select id="jobsCountryFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('country', this.value)">
                <option value="all" ${state.country==='all'?'selected':''}>${isEn ? 'All Locations' : 'جميع الدول والمواقع'}</option>
                <option value="remote" ${state.country==='remote'?'selected':''}>${isEn ? '🌐 Remote / Worldwide' : '🌐 العمل عن بُعد / عالمي'}</option>
                <option value="gcc" ${state.country==='gcc'?'selected':''}>${isEn ? '🇸🇦 Saudi Arabia & GCC' : '🇸🇦 السعودية والخليج العربي'}</option>
                <option value="mena" ${state.country==='mena'?'selected':''}>${isEn ? '🇪🇬 Egypt & Middle East' : '🇪🇬 مصر والشرق الأوسط'}</option>
                <option value="us_ca" ${state.country==='us_ca'?'selected':''}>${isEn ? '🇺🇸 USA & Canada' : '🇺🇸 الولايات المتحدة وكندا'}</option>
                <option value="eu_uk" ${state.country==='eu_uk'?'selected':''}>${isEn ? '🇪🇺 Europe & UK' : '🇪🇺 أوروبا والمملكة المتحدة'}</option>
              </select>
            </div>

            <!-- Category Filter -->
            <div class="form-group" style="margin:0">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '💼 Field / Category' : '💼 التخصص والمجال'}</label>
              <select id="jobsCategoryFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('category', this.value)">
                <option value="all" ${state.category==='all'?'selected':''}>${isEn ? 'All Fields' : 'جميع التخصصات'}</option>
                <option value="dev" ${state.category==='dev'?'selected':''}>${isEn ? '💻 Software & Tech' : '💻 برمجة وتكنولوجيا'}</option>
                <option value="marketing" ${state.category==='marketing'?'selected':''}>${isEn ? '📊 Marketing & Content' : '📊 تسويق وصناعة محتوى'}</option>
                <option value="design" ${state.category==='design'?'selected':''}>${isEn ? '🎨 UI/UX & Design' : '🎨 تصميم وتجربة مستخدم'}</option>
                <option value="sales" ${state.category==='sales'?'selected':''}>${isEn ? '🚀 Sales & Business' : '🚀 مبيعات وتطوير أعمال'}</option>
                <option value="hr" ${state.category==='hr'?'selected':''}>${isEn ? '👥 HR & Operations' : '👥 موارد بشرية وإدارة'}</option>
                <option value="finance" ${state.category==='finance'?'selected':''}>${isEn ? '💰 Finance & Accounting' : '💰 مالية ومحاسبة'}</option>
                <option value="support" ${state.category==='support'?'selected':''}>${isEn ? '🎧 Customer Support' : '🎧 دعم وخدمة عملاء'}</option>
              </select>
            </div>

            <!-- Work Type Filter -->
            <div class="form-group" style="margin:0">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '⏰ Work Type' : '⏰ نوع العمل'}</label>
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
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;flex-wrap:wrap;gap:0.75rem">
              <div>
                <h2 style="font-size:1.25rem;font-weight:800;color:var(--color-text);margin:0;display:flex;align-items:center;gap:8px">
                  <span>${isEn ? 'Available Verified Opportunities' : 'الوظائف المتاحة والموثقة'}</span>
                  <span style="font-size:0.85rem;font-weight:600;background:rgba(99,102,241,0.15);color:var(--color-primary-light);padding:2px 10px;border-radius:20px">
                    ${filteredJobs.length} ${isEn ? 'jobs' : 'فرصة'}
                  </span>
                </h2>
              </div>

              ${(state.searchQuery || state.country !== 'all' || state.category !== 'all' || state.type !== 'all') ? `
                <button class="btn btn--text btn--sm" onclick="CareerAI.resetJobsFilter()" style="color:var(--color-accent);font-weight:700;display:inline-flex;align-items:center;gap:4px">
                  <span>✕</span> ${isEn ? 'Reset All Filters' : 'إعادة ضبط الفلاتر'}
                </button>
              ` : ''}
            </div>

            ${filteredJobs.length === 0 ? `
              <div class="text-center" style="padding:4rem 1.5rem;background:var(--color-bg-card);border-radius:18px;border:1px solid var(--color-border)">
                <div style="font-size:3.5rem;margin-bottom:1rem">🔍</div>
                <h3 style="font-size:1.3rem;font-weight:700;color:var(--color-text);margin-bottom:0.5rem">${isEn ? 'No matching jobs found' : 'لم يتم العثور على وظائف مطابقة للبحث'}</h3>
                <p style="color:var(--color-text-muted);max-width:440px;margin:0 auto 1.5rem">${isEn ? 'Try adjusting your search terms, switching country filter, or clearing filters.' : 'جرّب تغيير كلمات البحث أو تغيير فلتر الدولة للاطلاع على كافة الفرص المتاحة.'}</p>
                <button class="btn btn--secondary btn--sm" onclick="CareerAI.resetJobsFilter()">${isEn ? 'Reset All Filters' : 'إعادة ضبط الفلاتر'}</button>
              </div>
            ` : `
              <div class="jobs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem;">
                ${filteredJobs.map((job, i) => {
                  const compInitial = (job.company ? job.company.replace(/[^a-zA-Z0-9]/g, '').charAt(0).toUpperCase() : '🏢') || '🏢';
                  const logoUrl = job.logo || job.companyLogo || '';
                  const skills = Array.isArray(job.skills) ? job.skills.slice(0, 3) : [];
                  
                  return `
                  <div class="job-card" id="job-card-${job.id}" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:transform 0.25s, box-shadow 0.25s;box-shadow:0 4px 18px rgba(0,0,0,0.1)">
                    <div style="padding:1.5rem;flex:1;display:flex;flex-direction:column;">
                      
                      <!-- Header: Company Logo Avatar + Verified Badge -->
                      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.25rem;gap:1rem">
                        
                        <!-- Company Avatar & Title -->
                        <div style="display:flex;align-items:center;gap:0.85rem">
                          <div style="width:54px;height:54px;min-width:54px;border-radius:14px;background:#ffffff;border:1px solid rgba(255,255,255,0.2);box-shadow:0 4px 12px rgba(0,0,0,0.12);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:5px">
                            ${logoUrl ? `
                              <img src="${logoUrl}" alt="${job.company}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                              <div style="display:none;width:100%;height:100%;border-radius:10px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.4rem;font-weight:800;align-items:center;justify-content:center">${compInitial}</div>
                            ` : `
                              <div style="width:100%;height:100%;border-radius:10px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.4rem;font-weight:800;display:flex;align-items:center;justify-content:center">${compInitial}</div>
                            `}
                          </div>
                          <div>
                            <div style="font-size:1rem;font-weight:800;color:var(--color-primary-light);line-height:1.2;margin-bottom:4px">${job.company}</div>
                            <div style="font-size:0.75rem;font-weight:600;color:var(--color-text-muted)">${isEn ? (job.category || 'Tech') : (job.category_ar || 'تكنولوجيا')}</div>
                          </div>
                        </div>

                        <!-- Verified & Country Badges -->
                        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">
                          <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);border-radius:20px;padding:3px 9px;font-size:0.7rem;font-weight:700;display:inline-flex;align-items:center;gap:3px;white-space:nowrap">
                            ✓ ${isEn ? 'AI Verified' : 'موثقة رسمياً'}
                          </span>
                          <span class="job-badge" style="background:rgba(99,102,241,0.15);color:#a5b4fc;border-radius:6px;padding:2px 8px;font-size:0.7rem;white-space:nowrap;font-weight:600">
                            ${isEn ? (job.type || 'Remote') : (job.type_ar || 'عن بُعد')}
                          </span>
                        </div>

                      </div>

                      <!-- Job Title (Clickable to open modal) -->
                      <h3 style="font-size:1.15rem;font-weight:800;color:var(--color-text);margin:0 0 0.75rem 0;line-height:1.4;cursor:pointer" onclick="CareerAI.openJobModal('${job.id}')">
                        ${isEn ? job.title : (job.title_ar || job.title)}
                      </h3>

                      <!-- Location & Salary Row -->
                      <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0.6rem;font-size:0.8rem;color:var(--color-text-muted);margin-bottom:0.85rem">
                        <span style="display:inline-flex;align-items:center;gap:4px">📍 ${isEn ? job.location : (job.location_ar || job.location)}</span>
                        <span>•</span>
                        <span style="display:inline-flex;align-items:center;gap:4px;color:#34d399;font-weight:600">💰 ${job.salary || (isEn ? 'Competitive' : 'رواتب تنافسية')}</span>
                      </div>

                      <!-- Description Excerpt -->
                      <p style="font-size:0.85rem;color:var(--color-text-muted);margin:0 0 1rem 0;line-height:1.6;flex:1;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">
                        ${isEn ? (job.description || '') : (job.description_ar || job.description || '')}
                      </p>

                      <!-- Skills Tags -->
                      ${skills.length > 0 ? `
                        <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:1.25rem">
                          ${skills.map(s => `<span style="background:rgba(255,255,255,0.06);border:1px solid var(--color-border-light);border-radius:6px;padding:2px 8px;font-size:0.75rem;color:#cbd5e1">${s}</span>`).join('')}
                        </div>
                      ` : ''}

                      <!-- Card Action Buttons -->
                      <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.85rem;border-top:1px solid var(--color-border-light);gap:0.5rem;flex-wrap:wrap">
                        
                        <!-- View Full Details in Modal -->
                        <button class="btn btn--secondary btn--sm" style="flex:1;min-width:110px;padding:0.45rem 0.75rem;font-size:0.8rem;font-weight:700" onclick="CareerAI.openJobModal('${job.id}')">
                          ℹ️ ${isEn ? 'View Details' : 'التفاصيل الكاملة'}
                        </button>

                        <!-- Direct Official Apply -->
                        <a href="${job.applyUrl || 'mailto:factorcareer@gmail.com'}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm" style="flex:1;min-width:120px;padding:0.45rem 0.75rem;font-size:0.8rem;font-weight:700;box-shadow:0 2px 10px rgba(99,102,241,0.35);text-align:center">
                          ${isEn ? 'Apply Direct ↗' : 'التقديم الرسمي ↗'}
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

    <!-- In-Page Job Details Modal Container -->
    <div id="jobDetailsModalBackdrop" style="display:none;position:fixed;inset:0;background:rgba(10,15,30,0.85);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);z-index:9999;align-items:center;justify-content:center;padding:1rem;overflow-y:auto">
      <div id="jobDetailsModalContent" style="background:#0f172a;border:1px solid rgba(99,102,241,0.3);border-radius:24px;width:100%;max-width:760px;max-height:90vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.6);position:relative;animation:fadeIn 0.25s ease">
        <!-- Injected via CareerAI.openJobModal -->
      </div>
    </div>
  `;
};

// Open Detailed Job Modal
CareerAI.openJobModal = function(jobId) {
  const db = window.CareerAI.db;
  const allJobs = db.getJobs ? db.getJobs(true) : [];
  const job = allJobs.find(j => String(j.id) === String(jobId));
  if (!job) return;

  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const compInitial = (job.company ? job.company.replace(/[^a-zA-Z0-9]/g, '').charAt(0).toUpperCase() : '🏢') || '🏢';
  const logoUrl = job.logo || job.companyLogo || '';
  const skills = Array.isArray(job.skills) ? job.skills : [];

  const backdrop = document.getElementById('jobDetailsModalBackdrop');
  const modal = document.getElementById('jobDetailsModalContent');
  if (!backdrop || !modal) return;

  modal.innerHTML = `
    <!-- Modal Header -->
    <div style="padding:1.75rem 2rem 1.25rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:flex-start;position:sticky;top:0;background:#0f172a;z-index:10;border-top-left-radius:24px;border-top-right-radius:24px">
      <div style="display:flex;gap:1.25rem;align-items:center;flex:1">
        <div style="width:64px;height:64px;min-width:64px;border-radius:16px;background:#ffffff;border:1px solid rgba(255,255,255,0.2);box-shadow:0 4px 15px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:6px">
          ${logoUrl ? `
            <img src="${logoUrl}" alt="${job.company}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div style="display:none;width:100%;height:100%;border-radius:12px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.6rem;font-weight:800;align-items:center;justify-content:center">${compInitial}</div>
          ` : `
            <div style="width:100%;height:100%;border-radius:12px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.6rem;font-weight:800;display:flex;align-items:center;justify-content:center">${compInitial}</div>
          `}
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap">
            <span style="font-size:1.1rem;font-weight:800;color:var(--color-primary-light)">${job.company}</span>
            <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);border-radius:20px;padding:2px 8px;font-size:0.7rem;font-weight:700">✓ ${isEn ? 'Verified Employer' : 'جهة عمل موثقة'}</span>
            <span style="background:rgba(99,102,241,0.15);color:#a5b4fc;border-radius:6px;padding:2px 8px;font-size:0.7rem;font-weight:600">${job.source || 'Verified Partner'}</span>
          </div>
          <h2 style="font-size:1.35rem;font-weight:800;color:#ffffff;margin:0;line-height:1.3">${isEn ? job.title : (job.title_ar || job.title)}</h2>
        </div>
      </div>
      <button onclick="CareerAI.closeJobModal()" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#cbd5e1;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;transition:background 0.2s" title="Close">✕</button>
    </div>

    <!-- Modal Body -->
    <div style="padding:2rem">
      
      <!-- Quick Highlights Grid -->
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(140px, 1fr));gap:1rem;margin-bottom:2rem">
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">📍 ${isEn ? 'Location' : 'الموقع'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#ffffff">${isEn ? job.location : (job.location_ar || job.location)}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">💰 ${isEn ? 'Salary Range' : 'الراتب'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#34d399">${job.salary || (isEn ? 'Competitive' : 'تنافسي')}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">⏰ ${isEn ? 'Work Type' : 'نوع العمل'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#ffffff">${isEn ? (job.type || 'Remote') : (job.type_ar || 'عن بُعد')}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">📅 ${isEn ? 'Posted Date' : 'تاريخ النشر'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#cbd5e1">${job.postedAt || 'Recently'}</div>
        </div>
      </div>

      <!-- Full Job Description Section -->
      <div style="margin-bottom:2rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem">
          <h3 style="font-size:1.1rem;font-weight:700;color:#ffffff;margin:0">
            📄 ${isEn ? 'Role Overview & Description' : 'نظرة عامة وتفاصيل الوظيفة'}
          </h3>
          <button class="btn btn--text btn--sm" id="toggleDescLangBtn" onclick="CareerAI.toggleJobDescLang()" style="color:var(--color-primary-light);font-size:0.8rem">
            🌐 ${isEn ? 'View Arabic Translation' : 'عرض النص الإنجليزي الأصلي'}
          </button>
        </div>
        
        <div id="jobModalDescAr" style="background:rgba(15,23,42,0.6);border:1px solid var(--color-border-light);border-radius:14px;padding:1.25rem;line-height:1.8;font-size:0.92rem;color:#cbd5e1;white-space:pre-line">
          ${job.description_ar || job.description || ''}
        </div>
        <div id="jobModalDescEn" style="display:none;background:rgba(15,23,42,0.6);border:1px solid var(--color-border-light);border-radius:14px;padding:1.25rem;line-height:1.8;font-size:0.92rem;color:#cbd5e1;white-space:pre-line">
          ${job.description || ''}
        </div>
      </div>

      <!-- Requirements & Checklist -->
      <div style="margin-bottom:2rem">
        <h3 style="font-size:1.1rem;font-weight:700;color:#ffffff;margin:0 0 0.75rem 0">
          ✅ ${isEn ? 'Key Requirements & Qualifications' : 'المتطلبات والشروط الأساسية'}
        </h3>
        <div style="background:rgba(15,23,42,0.6);border:1px solid var(--color-border-light);border-radius:14px;padding:1.25rem;line-height:1.8;font-size:0.9rem;color:#cbd5e1">
          ${(job.requirements_ar || job.requirements || '').split('\n').map(r => `<div style="margin-bottom:0.4rem">${r}</div>`).join('')}
        </div>
      </div>

      <!-- Required Skills & Keywords -->
      ${skills.length > 0 ? `
        <div style="margin-bottom:2rem">
          <h3 style="font-size:1.1rem;font-weight:700;color:#ffffff;margin:0 0 0.75rem 0">
            🎯 ${isEn ? 'Required Skills & Keywords' : 'المهارات والكلمات المفتاحية المطلوبة'}
          </h3>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${skills.map(s => `<span style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:8px;padding:4px 12px;font-size:0.85rem;color:#c7d2fe;font-weight:600">${s}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <!-- In-Modal Advertisement Placement -->
      <div class="ad-frame-wrapper" style="margin-top:2rem;background:rgba(15,23,42,0.8)">
        <div class="ad-frame-label">${isEn ? 'Sponsored Ad' : 'إعلان ممول'}</div>
        <div class="ad-frame-inner" style="min-height:90px;display:flex;align-items:center;justify-content:center">
          <ins class="adsbygoogle"
               style="display:inline-block;width:100%;height:90px"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>
      </div>

    </div>

    <!-- Modal Sticky Action Footer -->
    <div style="padding:1.25rem 2rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;position:sticky;bottom:0;background:#0f172a;border-bottom-left-radius:24px;border-bottom-right-radius:24px">
      <div style="display:flex;gap:0.75rem;align-items:center">
        <button class="btn btn--secondary btn--sm" onclick="CareerAI.copyJobLink('${job.applyUrl}')">
          📋 ${isEn ? 'Copy Job Link' : 'نسخ رابط الوظيفة'}
        </button>
        <button class="btn btn--text btn--sm" onclick="CareerAI.closeJobModal()" style="color:#94a3b8">
          ${isEn ? 'Close' : 'إغلاق'}
        </button>
      </div>

      <!-- Direct Official Employer Apply Button -->
      <a href="${job.applyUrl || 'mailto:factorcareer@gmail.com'}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--lg" style="box-shadow:0 4px 20px rgba(99,102,241,0.5);font-weight:800;padding:0.75rem 2rem">
        🚀 ${isEn ? 'Apply Direct on Official Site ↗' : 'التقديم المباشر على الموقع الرسمي ↗'}
      </a>
    </div>
  `;

  backdrop.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

CareerAI.closeJobModal = function() {
  const backdrop = document.getElementById('jobDetailsModalBackdrop');
  if (backdrop) backdrop.style.display = 'none';
  document.body.style.overflow = '';
};

CareerAI.toggleJobDescLang = function() {
  const ar = document.getElementById('jobModalDescAr');
  const en = document.getElementById('jobModalDescEn');
  const btn = document.getElementById('toggleDescLangBtn');
  if (ar && en && btn) {
    if (ar.style.display === 'none') {
      ar.style.display = 'block';
      en.style.display = 'none';
      btn.innerHTML = '🌐 عرض النص الإنجليزي الأصلي';
    } else {
      ar.style.display = 'none';
      en.style.display = 'block';
      btn.innerHTML = '🌐 عرض الترجمة العربية';
    }
  }
};

CareerAI.copyJobLink = function(url) {
  if (navigator.clipboard && url) {
    navigator.clipboard.writeText(url).then(() => {
      alert('تم نسخ رابط التقديم المباشر بنجاح! 📋');
    });
  } else {
    alert('رابط التقديم: ' + url);
  }
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
  window.CareerAI.jobsFilterState = { searchQuery: '', country: 'all', category: 'all', type: 'all' };
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
      description: 'Explore daily verified job opportunities from top tech employers and remote companies. Filter by country, category, role, and location on Factor Career.',
      keywords: 'Jobs, Remote Work, Tech Jobs, Career Opportunities, Hiring, Factor Career'
    };
  }
  return {
    title: 'أحدث الوظائف وفرص العمل الموثقة يومياً | فكتور كارير',
    description: 'استكشف أحدث الوظائف وفرص العمل الموثقة والمحدثة يومياً بعد فحصها بالذكاء الاصطناعي مع تقديم مباشر وتفاصيل كاملة وفلترة حسب الدولة والمجال.',
    keywords: 'وظائف, فرص عمل, وظائف عن بعد, وظائف تقنية, التوظيف, Factor Career'
  };
};
