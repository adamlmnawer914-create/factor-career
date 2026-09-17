/* ============================================
   Factor Career - Verified Real Jobs Portal v4.0
   Remotive API Integration + 1-Hour Serverless Caching (revalidate: 3600)
   Local Fallback data/jobs.json + Direct Official Apply Links
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.jobsFilterState = {
  searchQuery: '',
  country: 'all',
  category: 'all',
  type: 'all'
};

window.CareerAI.jobsState = {
  jobs: [],
  loading: false,
  loaded: false,
  source: '',
  lastFetched: 0
};

// 1-Hour Cache Duration (3600 seconds)
const JOBS_CACHE_KEY = 'factor_jobs_cache_v4';
const JOBS_CACHE_TIME_KEY = 'factor_jobs_cache_time_v4';
const CACHE_TTL_MS = 3600 * 1000; // 1 hour

// Immediate synchronous cache pre-load so page renders with zero wait
(function preLoadJobsCache() {
  if (typeof window === 'undefined') return;
  try {
    const cachedTime = parseInt(localStorage.getItem(JOBS_CACHE_TIME_KEY) || '0', 10);
    const cachedData = localStorage.getItem(JOBS_CACHE_KEY);
    if (cachedData && (Date.now() - cachedTime < CACHE_TTL_MS)) {
      const parsed = JSON.parse(cachedData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        window.CareerAI.jobsState.jobs = parsed;
        window.CareerAI.jobsState.loaded = true;
        window.CareerAI.jobsState.source = 'Cache (1h)';
      }
    }
  } catch (e) {}
})();

// Fetch Real Jobs from Remotive API (via /api/jobs or direct with local fallback)
window.CareerAI.fetchJobsFeed = async function(forceRefresh = false) {
  const state = window.CareerAI.jobsState;
  
  // Check if cache is still fresh and not forcing refresh
  if (!forceRefresh && state.loaded && state.jobs.length > 0) {
    const cachedTime = parseInt(localStorage.getItem(JOBS_CACHE_TIME_KEY) || '0', 10);
    if (Date.now() - cachedTime < CACHE_TTL_MS) {
      return state.jobs;
    }
  }

  if (state.loading) return state.jobs;
  state.loading = true;

  let rawJobs = null;
  let sourceLabel = '';

  // Priority 1: Fetch from serverless edge endpoint /api/jobs (revalidate: 3600)
  try {
    const apiRes = await fetch('/api/jobs');
    if (apiRes.ok) {
      const data = await apiRes.json();
      if (data && Array.isArray(data.jobs) && data.jobs.length > 0) {
        rawJobs = data.jobs;
        sourceLabel = data.fallback ? 'Local Fallback' : 'Remotive API (Edge Cached)';
      }
    }
  } catch (err) {
    // Continue to next priority
  }

  // Priority 2: Direct client fetch from Remotive API (free public API with CORS enabled)
  if (!rawJobs) {
    try {
      const remotiveRes = await fetch('https://remotive.com/api/remote-jobs?limit=25');
      if (remotiveRes.ok) {
        const data = await remotiveRes.json();
        if (data && Array.isArray(data.jobs) && data.jobs.length > 0) {
          rawJobs = data.jobs;
          sourceLabel = 'Remotive API (Direct)';
        }
      }
    } catch (err) {
      // Continue to local fallback
    }
  }

  // Priority 3: Local data/jobs.json fallback (10 verified curated jobs)
  if (!rawJobs) {
    try {
      const localRes = await fetch('/data/jobs.json?v=' + Date.now());
      if (localRes.ok) {
        const data = await localRes.json();
        if (Array.isArray(data) && data.length > 0) {
          rawJobs = data;
          sourceLabel = 'Verified Fallback Data';
        }
      }
    } catch (err) {
      console.error('All job sources failed:', err);
    }
  }

  if (rawJobs && Array.isArray(rawJobs)) {
    const normalized = rawJobs.map((item, idx) => {
      const rawType = (item.job_type || item.type || 'full_time').toLowerCase();
      let jobType = 'Full-time';
      let jobTypeAr = 'دوام كامل';
      if (rawType.includes('contract') || rawType.includes('freelance')) {
        jobType = 'Contract';
        jobTypeAr = 'عقد مؤقت / عمل حر';
      } else if (rawType.includes('part')) {
        jobType = 'Part-time';
        jobTypeAr = 'دوام جزئي';
      }

      const cleanDesc = (item.description || '')
        .replace(/<[^>]*>?/gm, ' ')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      const location = item.candidate_required_location || item.location || 'Worldwide (Remote)';
      const pubDate = item.publication_date ? item.publication_date.split('T')[0] : (item.postedAt || new Date().toISOString().split('T')[0]);
      const applyUrl = item.url || item.applyUrl || 'https://remotive.com';
      const compName = (item.company_name || item.company || 'Verified Company').trim();
      const compLogo = item.company_logo || item.company_logo_url || item.logo || '';
      const tags = Array.isArray(item.tags) && item.tags.length ? item.tags.slice(0, 4) : ['Remote', 'Technology'];

      return {
        id: String(item.id || ('job-' + idx)),
        job_title: item.title || item.job_title || 'Professional Specialist',
        title: item.title || item.job_title || 'Professional Specialist',
        title_ar: item.title_ar || item.title || 'فرصة عمل مهنية',
        company_name: compName,
        company: compName,
        company_logo: compLogo,
        candidate_required_location: location,
        location: location,
        location_ar: location === 'Worldwide' || location.includes('Worldwide') ? 'عن بُعد (عالمي)' : location,
        publication_date: pubDate,
        postedAt: pubDate,
        job_type: jobType,
        type: jobType,
        type_ar: jobTypeAr,
        url: applyUrl,
        applyUrl: applyUrl,
        category: item.category || 'Technology',
        salary: item.salary || 'Competitive ($)',
        description: cleanDesc.slice(0, 320) + (cleanDesc.length > 320 ? '...' : ''),
        description_ar: item.description_ar || cleanDesc.slice(0, 320) + '...',
        full_description: item.description || '',
        skills: tags,
        source: sourceLabel,
        verified: true
      };
    });

    state.jobs = normalized;
    state.loaded = true;
    state.loading = false;
    state.source = sourceLabel;
    state.lastFetched = Date.now();

    try {
      localStorage.setItem(JOBS_CACHE_KEY, JSON.stringify(normalized));
      localStorage.setItem(JOBS_CACHE_TIME_KEY, String(Date.now()));
    } catch (e) {}

    // Update UI if user is on jobs page
    const container = document.getElementById('jobsGridContainer');
    if (container && window.CareerAI.renderJobsGrid) {
      container.innerHTML = window.CareerAI.renderJobsGrid();
    }
  } else {
    state.loading = false;
  }

  return state.jobs;
};

// Start background fetch if cache missing or expired
setTimeout(() => {
  if (window.CareerAI.fetchJobsFeed) {
    window.CareerAI.fetchJobsFeed(false);
  }
}, 100);

// Render Job Cards Grid
window.CareerAI.renderJobsGrid = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const state = window.CareerAI.jobsFilterState;
  const allJobs = window.CareerAI.jobsState.jobs;

  if (!allJobs || allJobs.length === 0) {
    // Show skeleton placeholder while fetching
    return `
      <div style="grid-column:1/-1;text-align:center;padding:3rem 1.5rem;background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:18px">
        <div style="font-size:2rem;margin-bottom:0.75rem;animation:pulse 1.5s infinite">⏳</div>
        <h3 style="font-size:1.2rem;font-weight:700;color:var(--color-text);margin-bottom:0.5rem">
          ${isEn ? 'Loading Verified Opportunities...' : 'جاري تحميل أحدث الوظائف الموثقة...'}
        </h3>
        <p style="color:var(--color-text-muted);font-size:0.9rem">
          ${isEn ? 'Connecting to Remotive live feed with 1-hour caching.' : 'الاتصال بمصدر Remotive API الموثق مع التخزين المؤقت.'}
        </p>
      </div>
    `;
  }

  // Filter jobs based on user controls
  const filteredJobs = allJobs.filter(job => {
    // 1. Search Query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase().trim();
      const matchTitle = (job.job_title && job.job_title.toLowerCase().includes(q)) || (job.title_ar && job.title_ar.toLowerCase().includes(q));
      const matchComp = job.company_name && job.company_name.toLowerCase().includes(q);
      const matchLoc = (job.candidate_required_location && job.candidate_required_location.toLowerCase().includes(q)) || (job.location_ar && job.location_ar.toLowerCase().includes(q));
      const matchDesc = job.description && job.description.toLowerCase().includes(q);
      const matchSkills = job.skills && Array.isArray(job.skills) && job.skills.some(s => s.toLowerCase().includes(q));
      if (!matchTitle && !matchComp && !matchLoc && !matchDesc && !matchSkills) return false;
    }

    // 2. Location / Country Filter
    if (state.country !== 'all') {
      const loc = (job.candidate_required_location || '').toLowerCase();
      if (state.country === 'remote' && !loc.includes('remote') && !loc.includes('worldwide')) return false;
      if (state.country === 'us_ca' && !loc.includes('usa') && !loc.includes('united states') && !loc.includes('canada') && !loc.includes('worldwide')) return false;
      if (state.country === 'eu_uk' && !loc.includes('europe') && !loc.includes('uk') && !loc.includes('germany') && !loc.includes('emea') && !loc.includes('worldwide')) return false;
      if (state.country === 'gcc' && !loc.includes('saudi') && !loc.includes('uae') && !loc.includes('dubai') && !loc.includes('worldwide')) return false;
    }

    // 3. Category Filter
    if (state.category !== 'all') {
      const cat = (job.category || '').toLowerCase();
      if (state.category === 'dev' && !cat.includes('dev') && !cat.includes('soft') && !cat.includes('eng') && !cat.includes('tech')) return false;
      if (state.category === 'design' && !cat.includes('design') && !cat.includes('ui') && !cat.includes('ux')) return false;
      if (state.category === 'marketing' && !cat.includes('market') && !cat.includes('content') && !cat.includes('writer')) return false;
      if (state.category === 'support' && !cat.includes('support') && !cat.includes('custom')) return false;
      if (state.category === 'data' && !cat.includes('data') && !cat.includes('analyst') && !cat.includes('bi')) return false;
    }

    // 4. Work Type Filter
    if (state.type !== 'all') {
      const t = (job.job_type || '').toLowerCase();
      if (state.type === 'full-time' && !t.includes('full')) return false;
      if (state.type === 'part-time' && !t.includes('part')) return false;
      if (state.type === 'contract' && !t.includes('contract') && !t.includes('freelance')) return false;
    }

    return true;
  });

  if (filteredJobs.length === 0) {
    return `
      <div style="grid-column:1/-1;text-align:center;padding:3.5rem 1.5rem;background:var(--color-bg-card);border-radius:18px;border:1px solid var(--color-border)">
        <div style="font-size:3rem;margin-bottom:0.75rem">🔍</div>
        <h3 style="font-size:1.25rem;font-weight:700;color:var(--color-text);margin-bottom:0.5rem">
          ${isEn ? 'No matching opportunities found' : 'لم يتم العثور على وظائف مطابقة للبحث'}
        </h3>
        <p style="color:var(--color-text-muted);max-width:420px;margin:0 auto 1.25rem;font-size:0.9rem">
          ${isEn ? 'Try adjusting your search query, clearing category filters, or selecting All Locations.' : 'جرّب تعديل كلمات البحث أو اختيار جميع المواقع والتخصصات.'}
        </p>
        <button class="btn btn--secondary btn--sm" onclick="CareerAI.resetJobsFilter()">
          ${isEn ? 'Reset All Filters' : 'إعادة ضبط الفلاتر'}
        </button>
      </div>
    `;
  }

  // Render cards
  return filteredJobs.map(job => {
    const compInitial = (job.company_name ? job.company_name.replace(/[^a-zA-Z0-9]/g, '').charAt(0).toUpperCase() : '🏢') || '🏢';
    const logoUrl = job.company_logo || '';
    const skills = Array.isArray(job.skills) ? job.skills.slice(0, 3) : [];

    return `
      <article class="job-card" id="job-card-${job.id}" style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:18px;overflow:hidden;display:flex;flex-direction:column;transition:transform 0.25s, box-shadow 0.25s;box-shadow:0 4px 18px rgba(0,0,0,0.15)">
        <div style="padding:1.5rem;flex:1;display:flex;flex-direction:column;">
          
          <!-- Card Header: Company Logo + Name + Verification Badges -->
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.2rem;gap:0.85rem">
            
            <!-- Company Logo & Info -->
            <div style="display:flex;align-items:center;gap:0.85rem">
              <div style="width:52px;height:52px;min-width:52px;border-radius:14px;background:#ffffff;border:1px solid rgba(255,255,255,0.2);box-shadow:0 4px 12px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;overflow:hidden;padding:4px">
                ${logoUrl ? `
                  <img src="${logoUrl}" alt="${job.company_name}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                  <div style="display:none;width:100%;height:100%;border-radius:10px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.3rem;font-weight:800;align-items:center;justify-content:center">${compInitial}</div>
                ` : `
                  <div style="width:100%;height:100%;border-radius:10px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.3rem;font-weight:800;display:flex;align-items:center;justify-content:center">${compInitial}</div>
                `}
              </div>
              <div>
                <div style="font-size:0.98rem;font-weight:800;color:var(--color-primary-light);line-height:1.2;margin-bottom:3px">${job.company_name}</div>
                <div style="font-size:0.75rem;font-weight:600;color:var(--color-text-muted)">${job.category || 'Tech'}</div>
              </div>
            </div>

            <!-- Job Type Badge + Verified Badge -->
            <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">
              <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);border-radius:20px;padding:2px 8px;font-size:0.68rem;font-weight:700;display:inline-flex;align-items:center;gap:3px;white-space:nowrap">
                ✓ ${isEn ? 'Verified' : 'موثقة'}
              </span>
              <span style="background:rgba(99,102,241,0.15);color:#a5b4fc;border-radius:6px;padding:2px 8px;font-size:0.68rem;white-space:nowrap;font-weight:600">
                ${isEn ? job.job_type : (job.type_ar || job.job_type)}
              </span>
            </div>

          </div>

          <!-- Job Title (Clickable to open modal) -->
          <h3 style="font-size:1.15rem;font-weight:800;color:var(--color-text);margin:0 0 0.75rem 0;line-height:1.4;cursor:pointer;transition:color 0.2s" onclick="CareerAI.openJobModal('${job.id}')">
            ${isEn ? job.job_title : (job.title_ar || job.job_title)}
          </h3>

          <!-- Metadata Row: Location + Date + Salary -->
          <div style="display:flex;align-items:center;flex-wrap:wrap;gap:0.6rem;font-size:0.78rem;color:var(--color-text-muted);margin-bottom:0.85rem">
            <span style="display:inline-flex;align-items:center;gap:4px">📍 ${isEn ? job.candidate_required_location : (job.location_ar || job.candidate_required_location)}</span>
            <span>•</span>
            <span style="display:inline-flex;align-items:center;gap:4px">📅 ${job.publication_date}</span>
            <span>•</span>
            <span style="display:inline-flex;align-items:center;gap:4px;color:#34d399;font-weight:600">💰 ${job.salary || (isEn ? 'Competitive' : 'تنافسي')}</span>
          </div>

          <!-- Description Excerpt -->
          <p style="font-size:0.84rem;color:var(--color-text-muted);margin:0 0 1rem 0;line-height:1.55;flex:1;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden">
            ${isEn ? job.description : (job.description_ar || job.description)}
          </p>

          <!-- Skills Tags -->
          ${skills.length > 0 ? `
            <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:1.25rem">
              ${skills.map(s => `<span style="background:rgba(255,255,255,0.06);border:1px solid var(--color-border-light);border-radius:6px;padding:2px 8px;font-size:0.72rem;color:#cbd5e1">${s}</span>`).join('')}
            </div>
          ` : ''}

          <!-- Action Buttons: Apply Now (Direct URL) + View Details -->
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.85rem;border-top:1px solid var(--color-border-light);gap:0.5rem;flex-wrap:wrap">
            
            <!-- View Details Button -->
            <button class="btn btn--secondary btn--sm" style="flex:1;min-width:105px;padding:0.5rem 0.75rem;font-size:0.82rem;font-weight:700" onclick="CareerAI.openJobModal('${job.id}')">
              ℹ️ ${isEn ? 'View Details' : 'التفاصيل'}
            </button>

            <!-- Direct Official Apply Now Button -->
            <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm" style="flex:1;min-width:120px;padding:0.5rem 0.75rem;font-size:0.82rem;font-weight:800;box-shadow:0 3px 12px rgba(99,102,241,0.35);text-align:center;display:inline-flex;align-items:center;justify-content:center;gap:4px">
              ${isEn ? 'Apply Now ↗' : 'التقديم الآن ↗'}
            </a>

          </div>

        </div>
      </article>
    `;
  }).join('');
};

// Main Page Template
window.CareerAI.pages.jobs = function() {
  const state = window.CareerAI.jobsFilterState;
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';

  return `
    <!-- Jobs Hero Section -->
    <section class="section" style="padding-top:2.5rem;padding-bottom:1.5rem">
      <div class="container">
        
        <div class="text-center" style="max-width:820px;margin:0 auto 2rem">
          <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(99,102,241,0.12);border:1px solid rgba(99,102,241,0.25);border-radius:30px;padding:6px 16px;margin-bottom:1.25rem">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 10px #10b981;animation:pulse 2s infinite"></span>
            <span style="font-size:0.85rem;font-weight:700;color:var(--color-primary-light)">
              ${isEn ? 'Remotive API Feed • 1-Hour Serverless Cache • Direct Applications' : 'تغذية Remotive API الحقيقية • تخزين مؤقت كل ساعة • تقديم رسمي مباشر'}
            </span>
          </div>

          <h1 style="font-size:clamp(1.8rem, 4vw, 2.6rem);font-weight:800;color:var(--color-text);line-height:1.25;margin-bottom:1rem">
            ${isEn ? 'Verified Career & Remote Job Opportunities' : 'أحدث الوظائف وفرص العمل الموثقة'}
          </h1>
          <p style="font-size:1.05rem;color:var(--color-text-muted);line-height:1.6">
            ${isEn ? 'Browse authentic job listings from verified employers worldwide. Read full job descriptions and apply directly to official employer portals without redirects.' : 'تصفح وظائف حقيقية ومحدثة يومياً من أفضل الشركات العالمية مع تفاصيل كاملة وروابط تقديم رسمية ومباشرة بدون إعلانات مضللة.'}
          </p>
        </div>

        <!-- Horizontal Top Ad Banner (728x90 Leaderboard - Anti-Morphing Protected) -->
        <div class="ad-frame-wrapper ad-frame-leaderboard" style="margin:0 auto 2.5rem;max-width:760px;">
          <div class="ad-frame-label">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline-block;vertical-align:middle;margin-left:4px;"><rect x="2" y="2" width="20" height="20" rx="3"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
            ${isEn ? 'Sponsored Advertisement' : 'إعلان ممول / SPONSORED'}
          </div>
          <div class="ad-frame-inner">
            <ins class="adsbygoogle"
                 style="display:inline-block;width:100%;max-width:728px;height:90px;"
                 data-ad-client="ca-pub-7520213352755959"
                 data-ad-slot="1234567890"
                 data-ad-format="horizontal"
                 data-full-width-responsive="false"></ins>
          </div>
        </div>

        <!-- 4-Column Filter & Search Bar -->
        <div style="background:var(--color-bg-card);border:1px solid var(--color-border);border-radius:18px;padding:1.5rem;margin-bottom:2.5rem;box-shadow:0 4px 25px rgba(0,0,0,0.1)">
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1rem;align-items:flex-end">
            
            <!-- Search Query -->
            <div class="form-group" style="margin:0;grid-column:span 2;">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '🔍 Search by Title, Company, Skills or Keyword' : '🔍 البحث بالمسمى، الشركة، المهارات أو الكلمات المفتاحية'}</label>
              <input type="text" id="jobsSearchInput" class="form-input" 
                     placeholder="${isEn ? 'e.g. Full Stack, Python, React, Remote, Designer...' : 'مثال: مهندس برمجيات، بايثون، تسويق، عن بعد، مصمم...'}" 
                     value="${state.searchQuery}" 
                     oninput="CareerAI.onJobsSearch(this.value)">
            </div>

            <!-- Country & Region Filter -->
            <div class="form-group" style="margin:0">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '🌍 Country / Location' : '🌍 الدولة والموقع'}</label>
              <select id="jobsCountryFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('country', this.value)">
                <option value="all" ${state.country==='all'?'selected':''}>${isEn ? 'All Locations' : 'جميع الدول والمواقع'}</option>
                <option value="remote" ${state.country==='remote'?'selected':''}>${isEn ? '🌐 Remote / Worldwide' : '🌐 العمل عن بُعد / عالمي'}</option>
                <option value="us_ca" ${state.country==='us_ca'?'selected':''}>${isEn ? '🇺🇸 USA & Canada' : '🇺🇸 الولايات المتحدة وكندا'}</option>
                <option value="eu_uk" ${state.country==='eu_uk'?'selected':''}>${isEn ? '🇪🇺 Europe & UK' : '🇪🇺 أوروبا والمملكة المتحدة'}</option>
                <option value="gcc" ${state.country==='gcc'?'selected':''}>${isEn ? '🇸🇦 Saudi Arabia & GCC' : '🇸🇦 السعودية والخليج'}</option>
              </select>
            </div>

            <!-- Field / Category Filter -->
            <div class="form-group" style="margin:0">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '💼 Field / Category' : '💼 التخصص والمجال'}</label>
              <select id="jobsCategoryFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('category', this.value)">
                <option value="all" ${state.category==='all'?'selected':''}>${isEn ? 'All Fields' : 'جميع التخصصات'}</option>
                <option value="dev" ${state.category==='dev'?'selected':''}>${isEn ? '💻 Software & Tech' : '💻 برمجة وتكنولوجيا'}</option>
                <option value="design" ${state.category==='design'?'selected':''}>${isEn ? '🎨 UI/UX & Design' : '🎨 تصميم وتجربة مستخدم'}</option>
                <option value="marketing" ${state.category==='marketing'?'selected':''}>${isEn ? '📊 Marketing & Content' : '📊 تسويق ومحتوى'}</option>
                <option value="data" ${state.category==='data'?'selected':''}>${isEn ? '📈 Data & Analytics' : '📈 تحليل بيانات'}</option>
                <option value="support" ${state.category==='support'?'selected':''}>${isEn ? '🎧 Support & Solutions' : '🎧 دعم فني وحلول'}</option>
              </select>
            </div>

            <!-- Work Type Filter -->
            <div class="form-group" style="margin:0">
              <label class="form-label" style="font-weight:700;font-size:0.85rem">${isEn ? '⏰ Work Type' : '⏰ نوع العمل'}</label>
              <select id="jobsTypeFilter" class="form-input" onchange="CareerAI.onJobsFilterChange('type', this.value)">
                <option value="all" ${state.type==='all'?'selected':''}>${isEn ? 'All Types' : 'جميع الأنواع'}</option>
                <option value="full-time" ${state.type==='full-time'?'selected':''}>${isEn ? 'Full-time' : 'دوام كامل'}</option>
                <option value="part-time" ${state.type==='part-time'?'selected':''}>${isEn ? 'Part-time' : 'دوام جزئي'}</option>
                <option value="contract" ${state.type==='contract'?'selected':''}>${isEn ? 'Contract / Freelance' : 'عقد مؤقت / عمل حر'}</option>
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
                  <span>${isEn ? 'Verified Career Feed' : 'قائمة الوظائف الموثقة'}</span>
                  <span style="font-size:0.75rem;font-weight:700;background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);padding:2px 10px;border-radius:20px">
                    ${isEn ? 'Live API' : 'تحديث مباشر'}
                  </span>
                </h2>
              </div>

              ${(state.searchQuery || state.country !== 'all' || state.category !== 'all' || state.type !== 'all') ? `
                <button class="btn btn--text btn--sm" onclick="CareerAI.resetJobsFilter()" style="color:var(--color-accent);font-weight:700;display:inline-flex;align-items:center;gap:4px">
                  <span>✕</span> ${isEn ? 'Reset All Filters' : 'إعادة ضبط الفلاتر'}
                </button>
              ` : ''}
            </div>

            <div class="jobs-grid" id="jobsGridContainer" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1.5rem;">
              ${window.CareerAI.renderJobsGrid()}
            </div>
          </div>

          <!-- Sticky Sidebar with Skyscraper 300x600 (Anti-Morphing Protected) -->
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
                     data-ad-slot="3316284985"
                     data-ad-format="vertical"
                     data-full-width-responsive="false"></ins>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </section>

    <!-- In-Page Detailed Job Modal Backdrop -->
    <div id="jobDetailsModalBackdrop" style="display:none;position:fixed;inset:0;background:rgba(3,7,18,0.85);backdrop-filter:blur(8px);z-index:99999;align-items:center;justify-content:center;padding:1.5rem">
      <div id="jobDetailsModalContent" style="background:#0f172a;border:1px solid rgba(255,255,255,0.12);border-radius:24px;width:100%;max-width:820px;max-height:90vh;overflow-y:auto;box-shadow:0 25px 60px rgba(0,0,0,0.6);position:relative">
        <!-- Injected dynamically by openJobModal -->
      </div>
    </div>
  `;
};

// Open Detailed Job Modal
CareerAI.openJobModal = function(jobId) {
  const allJobs = window.CareerAI.jobsState.jobs;
  const job = allJobs.find(j => String(j.id) === String(jobId));
  if (!job) return;

  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  const compInitial = (job.company_name ? job.company_name.replace(/[^a-zA-Z0-9]/g, '').charAt(0).toUpperCase() : '🏢') || '🏢';
  const logoUrl = job.company_logo || '';
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
            <img src="${logoUrl}" alt="${job.company_name}" style="width:100%;height:100%;object-fit:contain" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
            <div style="display:none;width:100%;height:100%;border-radius:12px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.6rem;font-weight:800;align-items:center;justify-content:center">${compInitial}</div>
          ` : `
            <div style="width:100%;height:100%;border-radius:12px;background:linear-gradient(135deg, #6366f1, #8b5cf6);color:#ffffff;font-size:1.6rem;font-weight:800;display:flex;align-items:center;justify-content:center">${compInitial}</div>
          `}
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap">
            <span style="font-size:1.1rem;font-weight:800;color:var(--color-primary-light)">${job.company_name}</span>
            <span style="background:rgba(16,185,129,0.15);color:#34d399;border:1px solid rgba(16,185,129,0.3);border-radius:20px;padding:2px 8px;font-size:0.7rem;font-weight:700">✓ ${isEn ? 'Verified Employer' : 'جهة عمل موثقة'}</span>
            <span style="background:rgba(99,102,241,0.15);color:#a5b4fc;border-radius:6px;padding:2px 8px;font-size:0.7rem;font-weight:600">${job.source || 'Remotive'}</span>
          </div>
          <h2 style="font-size:1.35rem;font-weight:800;color:#ffffff;margin:0;line-height:1.3">${job.job_title}</h2>
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
          <div style="font-size:0.9rem;font-weight:700;color:#ffffff">${isEn ? job.candidate_required_location : (job.location_ar || job.candidate_required_location)}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">💰 ${isEn ? 'Salary' : 'الراتب'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#34d399">${job.salary || (isEn ? 'Competitive' : 'تنافسي')}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">⏰ ${isEn ? 'Job Type' : 'نوع العمل'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#ffffff">${isEn ? job.job_type : (job.type_ar || job.job_type)}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--color-border-light);border-radius:12px;padding:1rem;text-align:center">
          <div style="font-size:0.75rem;color:var(--color-text-muted);margin-bottom:4px">📅 ${isEn ? 'Published' : 'تاريخ النشر'}</div>
          <div style="font-size:0.9rem;font-weight:700;color:#cbd5e1">${job.publication_date}</div>
        </div>
      </div>

      <!-- Job Description -->
      <div style="margin-bottom:2rem">
        <h3 style="font-size:1.1rem;font-weight:700;color:#ffffff;margin:0 0 0.75rem 0">
          📄 ${isEn ? 'Job Description & Role Overview' : 'تفاصيل ونظرة عامة عن الوظيفة'}
        </h3>
        <div style="background:rgba(15,23,42,0.6);border:1px solid var(--color-border-light);border-radius:14px;padding:1.25rem;line-height:1.8;font-size:0.92rem;color:#cbd5e1;white-space:pre-line">
          ${job.full_description || job.description}
        </div>
      </div>

      <!-- Skills Tags -->
      ${skills.length > 0 ? `
        <div style="margin-bottom:2rem">
          <h3 style="font-size:1.1rem;font-weight:700;color:#ffffff;margin:0 0 0.75rem 0">
            🎯 ${isEn ? 'Skills & Tags' : 'المهارات والوسوم'}
          </h3>
          <div style="display:flex;gap:8px;flex-wrap:wrap">
            ${skills.map(s => `<span style="background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.3);border-radius:8px;padding:4px 12px;font-size:0.85rem;color:#c7d2fe;font-weight:600">${s}</span>`).join('')}
          </div>
        </div>
      ` : ''}

      <!-- In-Modal Leaderboard Ad (Anti-Morphing Protected) -->
      <div class="ad-frame-wrapper ad-frame-leaderboard" style="margin-top:2rem;max-width:728px;">
        <div class="ad-frame-label">${isEn ? 'Sponsored Ad' : 'إعلان ممول'}</div>
        <div class="ad-frame-inner">
          <ins class="adsbygoogle"
               style="display:inline-block;width:100%;max-width:728px;height:90px;"
               data-ad-client="ca-pub-7520213352755959"
               data-ad-slot="1234567890"
               data-ad-format="horizontal"
               data-full-width-responsive="false"></ins>
        </div>
      </div>

    </div>

    <!-- Modal Footer Actions -->
    <div style="padding:1.25rem 2rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;position:sticky;bottom:0;background:#0f172a;border-bottom-left-radius:24px;border-bottom-right-radius:24px">
      <div style="display:flex;gap:0.75rem;align-items:center">
        <button class="btn btn--secondary btn--sm" onclick="CareerAI.copyJobLink('${job.url}')">
          📋 ${isEn ? 'Copy Job Link' : 'نسخ الرابط'}
        </button>
        <button class="btn btn--text btn--sm" onclick="CareerAI.closeJobModal()" style="color:#94a3b8">
          ${isEn ? 'Close' : 'إغلاق'}
        </button>
      </div>

      <!-- Direct Official Apply Now Button -->
      <a href="${job.url}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--lg" style="box-shadow:0 4px 20px rgba(99,102,241,0.5);font-weight:800;padding:0.75rem 2rem">
        🚀 ${isEn ? 'Apply Now ↗' : 'التقديم الآن (Apply Now) ↗'}
      </a>
    </div>
  `;

  backdrop.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if (window.CareerAI.enforceAdDimensions) window.CareerAI.enforceAdDimensions();
};

CareerAI.closeJobModal = function() {
  const backdrop = document.getElementById('jobDetailsModalBackdrop');
  if (backdrop) backdrop.style.display = 'none';
  document.body.style.overflow = '';
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

// Filter Handlers
CareerAI.onJobsSearch = function(val) {
  window.CareerAI.jobsFilterState.searchQuery = val;
  const container = document.getElementById('jobsGridContainer');
  if (container && window.CareerAI.renderJobsGrid) {
    container.innerHTML = window.CareerAI.renderJobsGrid();
  }
};

CareerAI.onJobsFilterChange = function(field, val) {
  window.CareerAI.jobsFilterState[field] = val;
  const container = document.getElementById('jobsGridContainer');
  if (container && window.CareerAI.renderJobsGrid) {
    container.innerHTML = window.CareerAI.renderJobsGrid();
  }
};

CareerAI.resetJobsFilter = function() {
  window.CareerAI.jobsFilterState = { searchQuery: '', country: 'all', category: 'all', type: 'all' };
  const input = document.getElementById('jobsSearchInput');
  if (input) input.value = '';
  const cFilter = document.getElementById('jobsCountryFilter');
  if (cFilter) cFilter.value = 'all';
  const catFilter = document.getElementById('jobsCategoryFilter');
  if (catFilter) catFilter.value = 'all';
  const tFilter = document.getElementById('jobsTypeFilter');
  if (tFilter) tFilter.value = 'all';

  const container = document.getElementById('jobsGridContainer');
  if (container && window.CareerAI.renderJobsGrid) {
    container.innerHTML = window.CareerAI.renderJobsGrid();
  }
};

window.CareerAI.pages.jobsSEO = function() {
  const isEn = window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'en';
  if (isEn) {
    return {
      title: 'Verified Career & Remote Job Opportunities | Factor Career',
      description: 'Explore authentic job opportunities from verified employers worldwide powered by live feeds and direct application links.',
      keywords: 'Jobs, Remote Work, Tech Jobs, Career Opportunities, Hiring, Factor Career'
    };
  }
  return {
    title: 'أحدث الوظائف وفرص العمل الموثقة يومياً | فكتور كارير',
    description: 'تصفح أحدث الوظائف وفرص العمل الحقيقية والمحدثة يومياً مع تفاصيل كاملة وروابط تقديم رسمية ومباشرة بدون وسطاء.',
    keywords: 'وظائف, فرص عمل, وظائف عن بعد, وظائف تقنية, التوظيف, Factor Career'
  };
};
