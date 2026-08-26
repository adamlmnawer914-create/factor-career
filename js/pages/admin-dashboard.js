/* ============================================
   Factor Career - Admin Dashboard & CMS Manager
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.adminDashboard = function() {
  const db = window.CareerAI.db;

  // Guard check
  if (!db.isAdminLoggedIn()) {
    setTimeout(() => window.CareerAI.router.navigate('/admin/login'), 10);
    return `<div class="container text-center" style="padding:var(--space-20)">???? ??????? ?????? ??????...</div>`;
  }

  const icons = window.CareerAI.icons;
  const articles = db.getArticles(true);
  const categories = db.getCategories();
  const jobs = db.getJobs(true);

  const totalArticles = articles.length;
  const publishedCount = articles.filter(a => a.status === 'published').length;
  const draftCount = articles.filter(a => a.status === 'draft').length;
  const categoriesCount = categories.length;
  const totalJobs = jobs.length;
  const activeJobs = jobs.filter(j => j.status === 'active').length;

  return `
    <div class="admin-layout">
      <!-- Admin Top Toolbar -->
      <div class="admin-header">
        <div class="container">
          <div class="admin-header__inner">
            <div class="admin-header__brand">
              <div class="header__logo-icon" style="width:36px;height:36px;font-size:1.1rem">FC</div>
              <div>
                <span class="admin-header__title">???? ???? Factor Career</span>
                <span style="display:block;font-size:0.75rem;color:rgba(255,255,255,0.7)">???? ??????: adamlmnawe914@gmail.com</span>
              </div>
            </div>
            <div class="admin-header__actions">
              <button class="btn btn--secondary btn--sm" onclick="event.preventDefault();CareerAI.router.navigate('/')">
                ?????? ??????
              </button>
              <button class="btn btn--ghost btn--sm" onclick="CareerAI.handleAdminLogout()" style="background:#EF4444;color:white;border:none">
                ????? ??????
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard Body -->
      <div class="container" style="padding-top:var(--space-8);padding-bottom:var(--space-20)">

        <!-- Stats Overview Cards -->
        <div class="grid grid--4" style="margin-bottom:var(--space-8)">
          <div class="admin-stat-card">
            <div class="admin-stat-card__number">${totalArticles}</div>
            <div class="admin-stat-card__label">?????? ????????</div>
          </div>
          <div class="admin-stat-card admin-stat-card--success">
            <div class="admin-stat-card__number">${publishedCount}</div>
            <div class="admin-stat-card__label">???????? ????????</div>
          </div>
          <div class="admin-stat-card admin-stat-card--info">
            <div class="admin-stat-card__number">${categoriesCount}</div>
            <div class="admin-stat-card__label">?????????</div>
          </div>
          <div class="admin-stat-card admin-stat-card--warning">
            <div class="admin-stat-card__number">${totalJobs}</div>
            <div class="admin-stat-card__label">??????? ?????? (${activeJobs} ????)</div>
          </div>
        </div>

        <!-- Dashboard Navigation Tabs -->
        <div class="admin-tabs">
          <button class="admin-tab active" id="tabArticlesBtn" onclick="CareerAI.switchAdminTab('articles')">?? ????? ????????</button>
          <button class="admin-tab" id="tabCategoriesBtn" onclick="CareerAI.switchAdminTab('categories')">??? ????? ?????????</button>
          <button class="admin-tab" id="tabJobsBtn" onclick="CareerAI.switchAdminTab('jobs')">?? ????? ??????? ??????</button>
          <button class="admin-tab" id="tabSettingsBtn" onclick="CareerAI.switchAdminTab('settings')">?? ????????? ??????</button>
        </div>

        <!-- TAB 1: ARTICLES MANAGEMENT -->
        <div id="adminArticlesSection" class="admin-section">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);flex-wrap:wrap;gap:var(--space-4)">
            <h2 style="font-size:var(--text-2xl);font-weight:var(--font-bold)">????? ???????? (${totalArticles})</h2>
            <button class="btn btn--primary" onclick="CareerAI.openArticleEditor()">
              + ????? ???? ????
            </button>
          </div>

          <div class="admin-table-wrapper">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>??????</th>
                  <th>???????</th>
                  <th>???????</th>
                  <th>??????</th>
                  <th>????? ?????</th>
                  <th>?????????</th>
                </tr>
              </thead>
              <tbody>
                ${articles.length === 0 ? `<tr><td colspan="6" style="text-align:center;padding:var(--space-8)">?? ???? ?????? ??? ????</td></tr>` : ''}
                ${articles.map(art => `
                  <tr>
                    <td style="width:70px">
                      <img src="${art.image || 'img/hero-career-ai.jpg'}" alt="${art.title}" style="width:54px;height:40px;object-fit:cover;border-radius:var(--radius-md)">
                    </td>
                    <td>
                      <div style="font-weight:var(--font-bold);color:var(--color-text)">${art.title}</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">/blog/${art.slug}</div>
                    </td>
                    <td><span class="tag tag--primary">${art.categoryName}</span></td>
                    <td>
                      <span class="admin-status-badge ${art.status === 'published' ? 'admin-status-badge--pub' : 'admin-status-badge--draft'}">
                        ${art.status === 'published' ? '?????' : '?????'}
                      </span>
                    </td>
                    <td>${art.publishedAt}</td>
                    <td>
                      <div class="admin-table-actions">
                        <button class="btn btn--secondary btn--sm" onclick="CareerAI.openArticleEditor('${art.id}')">?????</button>
                        <button class="btn btn--sm" style="background:#EF4444;color:white" onclick="CareerAI.deleteArticleConfirm('${art.id}')">???</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- TAB 2: CATEGORIES MANAGEMENT -->
        <div id="adminCategoriesSection" class="admin-section" style="display:none">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);flex-wrap:wrap;gap:var(--space-4)">
            <h2 style="font-size:var(--text-2xl);font-weight:var(--font-bold)">????? ??????? ????????</h2>
            <button class="btn btn--accent" onclick="CareerAI.openCategoryModal()">
              + ????? ????? ????
            </button>
          </div>

          <div class="admin-table-wrapper">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>??? ???????</th>
                  <th>?????? (Slug)</th>
                  <th>?????</th>
                  <th>?????????</th>
                </tr>
              </thead>
              <tbody>
                ${categories.map(cat => `
                  <tr>
                    <td><strong>${cat.name}</strong></td>
                    <td><code>${cat.slug}</code></td>
                    <td>${cat.description || '-'}</td>
                    <td>
                      <div class="admin-table-actions">
                        <button class="btn btn--secondary btn--sm" onclick="CareerAI.openCategoryModal('${cat.id}')">?????</button>
                        <button class="btn btn--sm" style="background:#EF4444;color:white" onclick="CareerAI.deleteCategoryConfirm('${cat.id}')">???</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- TAB 3: JOBS MANAGEMENT -->
        <div id="adminJobsSection" class="admin-section" style="display:none">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);flex-wrap:wrap;gap:var(--space-4)">
            <h2 style="font-size:var(--text-2xl);font-weight:var(--font-bold)">????? ??????? ?????? ??????? (${totalJobs})</h2>
            <button class="btn btn--primary" onclick="CareerAI.openJobModal()">
              + ????? ???? ??? ?????
            </button>
          </div>

          <div class="admin-table-wrapper">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>?????? ???????</th>
                  <th>?????? / ?????</th>
                  <th>??????</th>
                  <th>?????</th>
                  <th>??????</th>
                  <th>??????</th>
                  <th>?????????</th>
                </tr>
              </thead>
              <tbody>
                ${jobs.length === 0 ? `<tr><td colspan="7" style="text-align:center;padding:var(--space-8)">?? ???? ????? ??? ????</td></tr>` : ''}
                ${jobs.map(job => `
                  <tr>
                    <td>
                      <div style="font-weight:var(--font-bold);color:var(--color-text)">${job.title}</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">${job.applyUrl || ''}</div>
                    </td>
                    <td><strong>${job.company}</strong></td>
                    <td>${job.location}</td>
                    <td><span class="tag tag--primary">${job.type}</span></td>
                    <td><span style="color:var(--color-accent);font-weight:bold">${job.salary}</span></td>
                    <td>
                      <span class="admin-status-badge ${job.status === 'active' ? 'admin-status-badge--pub' : 'admin-status-badge--draft'}">
                        ${job.status === 'active' ? '????' : '??????'}
                      </span>
                    </td>
                    <td>
                      <div class="admin-table-actions">
                        <button class="btn btn--secondary btn--sm" onclick="CareerAI.openJobModal('${job.id}')">?????</button>
                        <button class="btn btn--sm" style="background:#EF4444;color:white" onclick="CareerAI.deleteJobConfirm('${job.id}')">???</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- TAB 4: SETTINGS & MEDIA -->
        <div id="adminSettingsSection" class="admin-section" style="display:none">
          <div class="contact-form" style="max-width:700px;margin:0 auto">
            <h2 style="font-size:var(--text-2xl);font-weight:var(--font-bold);margin-bottom:var(--space-6)">?????? ???????? ?????? ???????</h2>
            
            <div class="form-group">
              <label class="form-label">??? ?????? ??????</label>
              <input type="text" class="form-input" value="Factor Career" readonly>
            </div>

            <div class="form-group">
              <label class="form-label">?????? ?????????? ?????? ??????</label>
              <input type="email" class="form-input" value="careerfactor@gmail.com" readonly>
            </div>

            <div class="form-group">
              <label class="form-label">??? ?????? ??????</label>
              <input type="text" class="form-input" value="+212 642 394 756" readonly>
            </div>

            <div class="form-group">
              <label class="form-label">?????? ????????</label>
              <input type="text" class="form-input" value="??????? ????????? ????? ??? ????? ????? ?????" readonly>
            </div>

            <div class="admin-seo-box" style="margin-top:var(--space-6)">
              <h4>??? ????? ????? ???????</h4>
              <p style="font-size:var(--text-sm);color:var(--color-text-secondary);margin-bottom:var(--space-4)">????? ??? ?? ???? ?? ????? ???????? ??? ???? ????????? ?? ???????? ????????:</p>
              <input type="file" id="mediaUploaderInput" class="form-input" accept="image/*" onchange="CareerAI.handleMediaUpload(this)">
              <div id="mediaUploadPreview" style="margin-top:var(--space-4);display:none">
                <img id="mediaPreviewImg" src="" style="max-height:160px;border-radius:var(--radius-lg);margin-bottom:var(--space-2)">
                <input type="text" id="mediaUrlOutput" class="form-input" readonly onclick="this.select();document.execCommand('copy');alert('?? ??? ??????!')" placeholder="???? ??? ???? ???? ??????">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- ARTICLE EDITOR MODAL -->
    <div class="admin-modal-overlay" id="articleModalOverlay">
      <div class="admin-modal admin-modal--lg">
        <div class="admin-modal__header">
          <h3 id="articleModalTitle">????? ???? ????</h3>
          <button class="admin-modal__close" onclick="CareerAI.closeArticleEditor()">&times;</button>
        </div>

        <form id="articleForm" onsubmit="CareerAI.handleSaveArticle(event)">
          <input type="hidden" id="editorArticleId">

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">????? ?????? *</label>
              <input type="text" id="editorTitle" class="form-input" required placeholder="???? ????? ??????" oninput="CareerAI.autoGenerateSlug(this.value)">
            </div>
            <div class="form-group">
              <label class="form-label">???? ?????? (Slug) *</label>
              <input type="text" id="editorSlug" class="form-input" required placeholder="example-article-slug">
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">??????? *</label>
              <select id="editorCategory" class="form-input form-select" required>
                ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">???? ?????? *</label>
              <select id="editorStatus" class="form-input form-select" required>
                <option value="published">????? ??????</option>
                <option value="draft">??? ??????</option>
              </select>
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">???? ?????? (???? ?? ??? ?? ??????)</label>
              <input type="text" id="editorImage" class="form-input" placeholder="https://images.unsplash.com/photo-..." oninput="CareerAI.previewArticleImg(this.value)">
              <div style="margin-top:6px">
                <input type="file" accept="image/*" class="form-input" onchange="CareerAI.uploadArticleImageFile(this)">
              </div>
              <div id="articleImgPreviewBox" style="margin-top:8px;display:none">
                <img id="articleImgPreview" src="" style="height:80px;border-radius:var(--radius-md);object-fit:cover">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">????? ?????</label>
              <input type="date" id="editorPublishedAt" class="form-input">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">????? ??????? ?????? *</label>
            <textarea id="editorExcerpt" class="form-textarea" style="min-height:75px" required placeholder="???? ???? ???? ?? ????? ????????"></textarea>
          </div>

          <!-- Rich Text Content Editor with Formatting Toolbar -->
          <div class="form-group">
            <label class="form-label">????? ?????? (???? ????) *</label>
            <div class="editor-toolbar">
              <button type="button" onclick="CareerAI.execFormat('bold')" title="????"><b>B</b></button>
              <button type="button" onclick="CareerAI.execFormat('italic')" title="????"><i>I</i></button>
              <button type="button" onclick="CareerAI.execFormat('formatBlock', 'h3')" title="????? 3">H3</button>
              <button type="button" onclick="CareerAI.execFormat('formatBlock', 'p')" title="????">P</button>
              <button type="button" onclick="CareerAI.execFormat('insertUnorderedList')" title="?????">• ?????</button>
              <button type="button" onclick="CareerAI.promptLink()" title="????">?? ????</button>
            </div>
            <div id="editorContent" class="editor-rich-content" contenteditable="true" style="min-height:180px"></div>
          </div>

          <!-- SEO Settings Section -->
          <div class="admin-seo-box">
            <h4 style="margin-bottom:var(--space-4);font-size:var(--text-base);color:var(--color-primary)">?? ??????? ?????? ????? (SEO)</h4>
            <div class="form-group">
              <label class="form-label">Meta Title</label>
              <input type="text" id="editorMetaTitle" class="form-input" placeholder="????? ?????? ??????? ?????">
            </div>
            <div class="form-group">
              <label class="form-label">Meta Description</label>
              <textarea id="editorMetaDesc" class="form-textarea" style="min-height:65px" placeholder="??? ?????? ????? SEO"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">??????? ????????? (???? ????? ?????)</label>
              <input type="text" id="editorKeywords" class="form-input" placeholder="???? ?????, ?????, ??????">
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-6)">
            <button type="button" class="btn btn--secondary" onclick="CareerAI.closeArticleEditor()">?????</button>
            <button type="submit" class="btn btn--primary">??? ?????? ??????</button>
          </div>
        </form>
      </div>
    </div>

    <!-- CATEGORY MODAL -->
    <div class="admin-modal-overlay" id="categoryModalOverlay">
      <div class="admin-modal">
        <div class="admin-modal__header">
          <h3 id="categoryModalTitle">????? ????? ????</h3>
          <button class="admin-modal__close" onclick="CareerAI.closeCategoryModal()">&times;</button>
        </div>
        <form id="categoryForm" onsubmit="CareerAI.handleSaveCategory(event)">
          <input type="hidden" id="editorCatId">
          <div class="form-group">
            <label class="form-label">??? ??????? *</label>
            <input type="text" id="editorCatName" class="form-input" required placeholder="????: ??????? ??????">
          </div>
          <div class="form-group">
            <label class="form-label">??? ???????</label>
            <textarea id="editorCatDesc" class="form-textarea" style="min-height:90px" placeholder="??? ????? ????? ???????"></textarea>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-6)">
            <button type="button" class="btn btn--secondary" onclick="CareerAI.closeCategoryModal()">?????</button>
            <button type="submit" class="btn btn--accent">??? ???????</button>
          </div>
        </form>
      </div>
    </div>

    <!-- JOB MODAL -->
    <div class="admin-modal-overlay" id="jobModalOverlay">
      <div class="admin-modal admin-modal--lg">
        <div class="admin-modal__header">
          <h3 id="jobModalTitle">????? ???? ??? ?????</h3>
          <button class="admin-modal__close" onclick="CareerAI.closeJobModal()">&times;</button>
        </div>
        <form id="jobForm" onsubmit="CareerAI.handleSaveJob(event)">
          <input type="hidden" id="editorJobId">

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">?????? ??????? *</label>
              <input type="text" id="editorJobTitle" class="form-input" required placeholder="????: Senior React Developer">
            </div>
            <div class="form-group">
              <label class="form-label">?????? ?? ????? *</label>
              <input type="text" id="editorJobCompany" class="form-input" required placeholder="????: ???? ????? ???????">
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">?????? / ??? ?????</label>
              <input type="text" id="editorJobLocation" class="form-input" placeholder="????: ?? ???? (Remote) ?? ????? ???????">
            </div>
            <div class="form-group">
              <label class="form-label">??? ?????</label>
              <select id="editorJobType" class="form-input form-select">
                <option value="???? ????">???? ???? (Full-time)</option>
                <option value="???? ????">???? ???? (Part-time)</option>
                <option value="??? ??">??? ?? (Freelance)</option>
                <option value="?????">????? (Internship)</option>
              </select>
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">?????? ???????</label>
              <input type="text" id="editorJobSalary" class="form-input" placeholder="????: 2,000$ - 3,000$">
            </div>
            <div class="form-group">
              <label class="form-label">??????</label>
              <select id="editorJobStatus" class="form-input form-select">
                <option value="active">???? ??????</option>
                <option value="closed">????? / ??????</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">???? ??????? ?? ?????? ?????????? *</label>
            <input type="text" id="editorJobApplyUrl" class="form-input" required placeholder="mailto:careerfactor@gmail.com ?? https://company.com/apply">
          </div>

          <div class="form-group">
            <label class="form-label">????? ???????</label>
            <textarea id="editorJobDesc" class="form-textarea" style="min-height:85px" placeholder="??? ?????? ???????????"></textarea>
          </div>

          <div class="form-group">
            <label class="form-label">????????? ???????</label>
            <textarea id="editorJobReqs" class="form-textarea" style="min-height:85px" placeholder="???????? ???????? ????????"></textarea>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-6)">
            <button type="button" class="btn btn--secondary" onclick="CareerAI.closeJobModal()">?????</button>
            <button type="submit" class="btn btn--primary">??? ?????? ???????</button>
          </div>
        </form>
      </div>
    </div>
  `;
};

/* --- Admin Tabs Controller --- */
window.CareerAI.switchAdminTab = function(tab) {
  const sections = {
    articles: document.getElementById('adminArticlesSection'),
    categories: document.getElementById('adminCategoriesSection'),
    jobs: document.getElementById('adminJobsSection'),
    settings: document.getElementById('adminSettingsSection')
  };
  const buttons = {
    articles: document.getElementById('tabArticlesBtn'),
    categories: document.getElementById('tabCategoriesBtn'),
    jobs: document.getElementById('tabJobsBtn'),
    settings: document.getElementById('tabSettingsBtn')
  };

  Object.keys(sections).forEach(key => {
    if (sections[key]) sections[key].style.display = (key === tab) ? 'block' : 'none';
    if (buttons[key]) {
      if (key === tab) buttons[key].classList.add('active');
      else buttons[key].classList.remove('active');
    }
  });
};

/* --- Image Upload & Live Preview Helpers --- */
window.CareerAI.previewArticleImg = function(url) {
  const box = document.getElementById('articleImgPreviewBox');
  const img = document.getElementById('articleImgPreview');
  if (url && url.trim()) {
    img.src = url;
    box.style.display = 'block';
  } else {
    box.style.display = 'none';
  }
};

window.CareerAI.uploadArticleImageFile = function(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('editorImage').value = e.target.result;
      CareerAI.previewArticleImg(e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
};

window.CareerAI.handleMediaUpload = function(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('mediaPreviewImg').src = e.target.result;
      document.getElementById('mediaUrlOutput').value = e.target.result;
      document.getElementById('mediaUploadPreview').style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
};

/* --- Article Editor Modal logic --- */
window.CareerAI.openArticleEditor = function(articleId = null) {
  const overlay = document.getElementById('articleModalOverlay');
  const form = document.getElementById('articleForm');
  const title = document.getElementById('articleModalTitle');

  form.reset();
  document.getElementById('editorContent').innerHTML = '';
  document.getElementById('articleImgPreviewBox').style.display = 'none';

  if (articleId) {
    const art = window.CareerAI.db.getArticleById(articleId);
    if (art) {
      title.innerText = '????? ??????';
      document.getElementById('editorArticleId').value = art.id;
      document.getElementById('editorTitle').value = art.title;
      document.getElementById('editorSlug').value = art.slug;
      document.getElementById('editorCategory').value = art.categoryId;
      document.getElementById('editorStatus').value = art.status;
      document.getElementById('editorImage').value = art.image || '';
      if (art.image) CareerAI.previewArticleImg(art.image);
      document.getElementById('editorPublishedAt').value = art.publishedAt || '';
      document.getElementById('editorExcerpt').value = art.excerpt || '';
      document.getElementById('editorContent').innerHTML = art.content || '';
      document.getElementById('editorMetaTitle').value = art.metaTitle || '';
      document.getElementById('editorMetaDesc').value = art.metaDescription || '';
      document.getElementById('editorKeywords').value = art.keywords || '';
    }
  } else {
    title.innerText = '????? ???? ????';
    document.getElementById('editorArticleId').value = '';
    document.getElementById('editorPublishedAt').value = new Date().toISOString().split('T')[0];
  }

  overlay.classList.add('active');
};

window.CareerAI.closeArticleEditor = function() {
  document.getElementById('articleModalOverlay').classList.remove('active');
};

window.CareerAI.autoGenerateSlug = function(val) {
  const slugInput = document.getElementById('editorSlug');
  if (slugInput && val) {
    slugInput.value = val.trim().toLowerCase().replace(/[\s\W]+/g, '-');
  }
};

window.CareerAI.execFormat = function(cmd, arg = null) {
  document.execCommand(cmd, false, arg);
};

window.CareerAI.promptLink = function() {
  const url = prompt('???? ???? URL:');
  if (url) {
    document.execCommand('createLink', false, url);
  }
};

window.CareerAI.handleSaveArticle = function(e) {
  e.preventDefault();
  const id = document.getElementById('editorArticleId').value;
  const title = document.getElementById('editorTitle').value;
  const slug = document.getElementById('editorSlug').value;
  const categoryId = document.getElementById('editorCategory').value;
  const status = document.getElementById('editorStatus').value;
  const image = document.getElementById('editorImage').value;
  const publishedAt = document.getElementById('editorPublishedAt').value;
  const excerpt = document.getElementById('editorExcerpt').value;
  const content = document.getElementById('editorContent').innerHTML;
  const metaTitle = document.getElementById('editorMetaTitle').value;
  const metaDescription = document.getElementById('editorMetaDesc').value;
  const keywords = document.getElementById('editorKeywords').value;

  window.CareerAI.db.saveArticle({
    id: id || undefined,
    title,
    slug,
    categoryId,
    status,
    image,
    publishedAt,
    excerpt,
    content,
    metaTitle,
    metaDescription,
    keywords
  });

  window.CareerAI.closeArticleEditor();
  window.CareerAI.router.handleRoute(); // Refresh
};

window.CareerAI.deleteArticleConfirm = function(id) {
  if (confirm('?? ??? ????? ?? ??? ??? ?????? ????????')) {
    window.CareerAI.db.deleteArticle(id);
    window.CareerAI.router.handleRoute();
  }
};

/* --- Category Modal logic --- */
window.CareerAI.openCategoryModal = function(catId = null) {
  const overlay = document.getElementById('categoryModalOverlay');
  const title = document.getElementById('categoryModalTitle');
  const form = document.getElementById('categoryForm');

  form.reset();

  if (catId) {
    const categories = window.CareerAI.db.getCategories();
    const cat = categories.find(c => c.id === catId);
    if (cat) {
      title.innerText = '????? ???????';
      document.getElementById('editorCatId').value = cat.id;
      document.getElementById('editorCatName').value = cat.name;
      document.getElementById('editorCatDesc').value = cat.description || '';
    }
  } else {
    title.innerText = '????? ????? ????';
    document.getElementById('editorCatId').value = '';
  }

  overlay.classList.add('active');
};

window.CareerAI.closeCategoryModal = function() {
  document.getElementById('categoryModalOverlay').classList.remove('active');
};

window.CareerAI.handleSaveCategory = function(e) {
  e.preventDefault();
  const id = document.getElementById('editorCatId').value;
  const name = document.getElementById('editorCatName').value;
  const desc = document.getElementById('editorCatDesc').value;

  if (id) {
    window.CareerAI.db.updateCategory(id, name, desc);
  } else {
    window.CareerAI.db.addCategory(name, desc);
  }

  window.CareerAI.closeCategoryModal();
  window.CareerAI.router.handleRoute();
};

window.CareerAI.deleteCategoryConfirm = function(id) {
  if (confirm('?? ??? ????? ?? ??? ??? ????????')) {
    window.CareerAI.db.deleteCategory(id);
    window.CareerAI.router.handleRoute();
  }
};

/* --- Job Modal logic --- */
window.CareerAI.openJobModal = function(jobId = null) {
  const overlay = document.getElementById('jobModalOverlay');
  const title = document.getElementById('jobModalTitle');
  const form = document.getElementById('jobForm');

  form.reset();

  if (jobId) {
    const job = window.CareerAI.db.getJobById(jobId);
    if (job) {
      title.innerText = '????? ???????';
      document.getElementById('editorJobId').value = job.id;
      document.getElementById('editorJobTitle').value = job.title;
      document.getElementById('editorJobCompany').value = job.company;
      document.getElementById('editorJobLocation').value = job.location;
      document.getElementById('editorJobType').value = job.type;
      document.getElementById('editorJobSalary').value = job.salary;
      document.getElementById('editorJobStatus').value = job.status;
      document.getElementById('editorJobApplyUrl').value = job.applyUrl;
      document.getElementById('editorJobDesc').value = job.description || '';
      document.getElementById('editorJobReqs').value = job.requirements || '';
    }
  } else {
    title.innerText = '????? ???? ??? ?????';
    document.getElementById('editorJobId').value = '';
    document.getElementById('editorJobApplyUrl').value = 'mailto:careerfactor@gmail.com';
  }

  overlay.classList.add('active');
};

window.CareerAI.closeJobModal = function() {
  document.getElementById('jobModalOverlay').classList.remove('active');
};

window.CareerAI.handleSaveJob = function(e) {
  e.preventDefault();
  const id = document.getElementById('editorJobId').value;
  const title = document.getElementById('editorJobTitle').value;
  const company = document.getElementById('editorJobCompany').value;
  const location = document.getElementById('editorJobLocation').value;
  const type = document.getElementById('editorJobType').value;
  const salary = document.getElementById('editorJobSalary').value;
  const status = document.getElementById('editorJobStatus').value;
  const applyUrl = document.getElementById('editorJobApplyUrl').value;
  const description = document.getElementById('editorJobDesc').value;
  const requirements = document.getElementById('editorJobReqs').value;

  window.CareerAI.db.saveJob({
    id: id || undefined,
    title,
    company,
    location,
    type,
    salary,
    status,
    applyUrl,
    description,
    requirements
  });

  window.CareerAI.closeJobModal();
  window.CareerAI.router.handleRoute();
};

window.CareerAI.deleteJobConfirm = function(id) {
  if (confirm('?? ??? ????? ?? ??? ??? ?????? ?????????')) {
    window.CareerAI.db.deleteJob(id);
    window.CareerAI.router.handleRoute();
  }
};

window.CareerAI.handleAdminLogout = function() {
  window.CareerAI.db.logoutAdmin();
  window.CareerAI.router.navigate('/admin/login');
};
