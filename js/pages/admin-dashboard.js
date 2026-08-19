/* ============================================
   CareerAI - Admin Dashboard & CMS Manager
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.adminDashboard = function() {
  const db = window.CareerAI.db;

  // Guard check
  if (!db.isAdminLoggedIn()) {
    setTimeout(() => window.CareerAI.router.navigate('/admin/login'), 10);
    return `<div class="container text-center" style="padding:var(--space-20)">جاري التوجيه لتسجيل الدخول...</div>`;
  }

  const icons = window.CareerAI.icons;
  const articles = db.getArticles(true);
  const categories = db.getCategories();

  const totalArticles = articles.length;
  const publishedCount = articles.filter(a => a.status === 'published').length;
  const draftCount = articles.filter(a => a.status === 'draft').length;
  const categoriesCount = categories.length;

  return `
    <div class="admin-layout">
      <!-- Admin Top Toolbar -->
      <div class="admin-header">
        <div class="container">
          <div class="admin-header__inner">
            <div class="admin-header__brand">
              <span class="header__logo-icon" style="width:32px;height:32px;font-size:1.1rem">C</span>
              <span class="admin-header__title">لوحة تحكم المدير</span>
            </div>
            <div class="admin-header__actions">
              <button class="btn btn--secondary btn--sm" onclick="CareerAI.router.navigate('/')">
                معاينة الموقع
              </button>
              <button class="btn btn--ghost btn--sm" onclick="CareerAI.handleAdminLogout()" style="background:#EF4444;color:white;border:none">
                تسجيل الخروج
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard Body -->
      <div class="container" style="padding-top:var(--space-8);padding-bottom:var(--space-20)">

        <!-- Stats Overview Cards -->
        <div class="grid grid--4" style="margin-bottom:var(--space-10)">
          <div class="admin-stat-card">
            <div class="admin-stat-card__number">${totalArticles}</div>
            <div class="admin-stat-card__label">إجمالي المقالات</div>
          </div>
          <div class="admin-stat-card admin-stat-card--success">
            <div class="admin-stat-card__number">${publishedCount}</div>
            <div class="admin-stat-card__label">المقالات المنشورة</div>
          </div>
          <div class="admin-stat-card admin-stat-card--warning">
            <div class="admin-stat-card__number">${draftCount}</div>
            <div class="admin-stat-card__label">المسودات</div>
          </div>
          <div class="admin-stat-card admin-stat-card--info">
            <div class="admin-stat-card__number">${categoriesCount}</div>
            <div class="admin-stat-card__label">عدد التصنيفات</div>
          </div>
        </div>

        <!-- Dashboard Navigation Tabs -->
        <div class="admin-tabs">
          <button class="admin-tab active" id="tabArticlesBtn" onclick="CareerAI.switchAdminTab('articles')">إدارة المقالات</button>
          <button class="admin-tab" id="tabCategoriesBtn" onclick="CareerAI.switchAdminTab('categories')">إدارة التصنيفات</button>
        </div>

        <!-- TAB 1: ARTICLES MANAGEMENT -->
        <div id="adminArticlesSection" class="admin-section">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-6);flex-wrap:wrap;gap:var(--space-4)">
            <h2 style="font-size:var(--text-2xl);font-weight:var(--font-bold)">قائمة المقالات</h2>
            <button class="btn btn--primary" onclick="CareerAI.openArticleEditor()">
              + إضافة مقال جديد
            </button>
          </div>

          <div class="admin-table-wrapper">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>العنوان</th>
                  <th>التصنيف</th>
                  <th>الحالة</th>
                  <th>تاريخ النشر</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                ${articles.length === 0 ? `<tr><td colspan="5" style="text-align:center;padding:var(--space-8)">لا توجد مقالات حتى الآن</td></tr>` : ''}
                ${articles.map(art => `
                  <tr>
                    <td>
                      <div style="font-weight:var(--font-bold);color:var(--color-text)">${art.title}</div>
                      <div style="font-size:var(--text-xs);color:var(--color-text-muted)">/blog/${art.slug}</div>
                    </td>
                    <td><span class="tag tag--primary">${art.categoryName}</span></td>
                    <td>
                      <span class="admin-status-badge ${art.status === 'published' ? 'admin-status-badge--pub' : 'admin-status-badge--draft'}">
                        ${art.status === 'published' ? 'منشور' : 'مسودة'}
                      </span>
                    </td>
                    <td>${art.publishedAt}</td>
                    <td>
                      <div class="admin-table-actions">
                        <button class="btn btn--secondary btn--sm" onclick="CareerAI.openArticleEditor('${art.id}')">تعديل</button>
                        <button class="btn btn--sm" style="background:#EF4444;color:white" onclick="CareerAI.deleteArticleConfirm('${art.id}')">حذف</button>
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
            <h2 style="font-size:var(--text-2xl);font-weight:var(--font-bold)">إدارة تصنيفات المقالات</h2>
            <button class="btn btn--accent" onclick="CareerAI.openCategoryModal()">
              + إضافة تصنيف جديد
            </button>
          </div>

          <div class="admin-table-wrapper">
            <table class="admin-table">
              <thead>
                <tr>
                  <th>اسم التصنيف</th>
                  <th>الرابط (Slug)</th>
                  <th>الوصف</th>
                  <th>الإجراءات</th>
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
                        <button class="btn btn--secondary btn--sm" onclick="CareerAI.openCategoryModal('${cat.id}')">تعديل</button>
                        <button class="btn btn--sm" style="background:#EF4444;color:white" onclick="CareerAI.deleteCategoryConfirm('${cat.id}')">حذف</button>
                      </div>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

    <!-- ARTICLE EDITOR MODAL -->
    <div class="admin-modal-overlay" id="articleModalOverlay">
      <div class="admin-modal admin-modal--lg">
        <div class="admin-modal__header">
          <h3 id="articleModalTitle">إضافة مقال جديد</h3>
          <button class="admin-modal__close" onclick="CareerAI.closeArticleEditor()">&times;</button>
        </div>

        <form id="articleForm" onsubmit="CareerAI.handleSaveArticle(event)">
          <input type="hidden" id="editorArticleId">

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">عنوان المقال *</label>
              <input type="text" id="editorTitle" class="form-input" required placeholder="أدخل عنوان المقال" oninput="CareerAI.autoGenerateSlug(this.value)">
            </div>
            <div class="form-group">
              <label class="form-label">رابط المقال (Slug) *</label>
              <input type="text" id="editorSlug" class="form-input" required placeholder="example-article-slug">
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">التصنيف *</label>
              <select id="editorCategory" class="form-input form-select" required>
                ${categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">حالة المقال *</label>
              <select id="editorStatus" class="form-input form-select" required>
                <option value="published">منشور مباشرة</option>
                <option value="draft">حفظ كمسودة</option>
              </select>
            </div>
          </div>

          <div class="contact-form__row">
            <div class="form-group">
              <label class="form-label">رابط الصورة الرئيسية</label>
              <input type="url" id="editorImage" class="form-input" placeholder="https://images.unsplash.com/photo-...">
            </div>
            <div class="form-group">
              <label class="form-label">تاريخ النشر</label>
              <input type="date" id="editorPublishedAt" class="form-input">
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">الوصف المختصر للمقال *</label>
            <textarea id="editorExcerpt" class="form-textarea" style="min-height:80px" required placeholder="ملخص بسيط يظهر في قائمة المقالات"></textarea>
          </div>

          <!-- Rich Text Content Editor with Formatting Toolbar -->
          <div class="form-group">
            <label class="form-label">محتوى المقال (محرر منسق) *</label>
            <div class="editor-toolbar">
              <button type="button" onclick="CareerAI.execFormat('bold')" title="غامق"><b>B</b></button>
              <button type="button" onclick="CareerAI.execFormat('italic')" title="مائل"><i>I</i></button>
              <button type="button" onclick="CareerAI.execFormat('formatBlock', 'h3')" title="عنوان 3">H3</button>
              <button type="button" onclick="CareerAI.execFormat('formatBlock', 'p')" title="فقرة">P</button>
              <button type="button" onclick="CareerAI.execFormat('insertUnorderedList')" title="قائمة">• قائمة</button>
              <button type="button" onclick="CareerAI.promptLink()" title="رابط">🔗 رابط</button>
            </div>
            <div id="editorContent" class="editor-rich-content" contenteditable="true"></div>
          </div>

          <!-- SEO Settings Section -->
          <div class="admin-seo-box">
            <h4 style="margin-bottom:var(--space-4);font-size:var(--text-base);color:var(--color-primary)">⚙️ إعدادات محركات البحث (SEO)</h4>
            <div class="form-group">
              <label class="form-label">Meta Title</label>
              <input type="text" id="editorMetaTitle" class="form-input" placeholder="عنوان المقال لمحركات البحث">
            </div>
            <div class="form-group">
              <label class="form-label">Meta Description</label>
              <textarea id="editorMetaDesc" class="form-textarea" style="min-height:70px" placeholder="وصف محركات البحث SEO"></textarea>
            </div>
            <div class="form-group">
              <label class="form-label">الكلمات المفتاحية (تفصل بينها فاصلة)</label>
              <input type="text" id="editorKeywords" class="form-input" placeholder="سيرة ذاتية, وظائف, مقابلة">
            </div>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-6)">
            <button type="button" class="btn btn--secondary" onclick="CareerAI.closeArticleEditor()">إلغاء</button>
            <button type="submit" class="btn btn--primary">حفظ وتأكيد</button>
          </div>
        </form>
      </div>
    </div>

    <!-- CATEGORY MODAL -->
    <div class="admin-modal-overlay" id="categoryModalOverlay">
      <div class="admin-modal">
        <div class="admin-modal__header">
          <h3 id="categoryModalTitle">إضافة تصنيف جديد</h3>
          <button class="admin-modal__close" onclick="CareerAI.closeCategoryModal()">&times;</button>
        </div>
        <form id="categoryForm" onsubmit="CareerAI.handleSaveCategory(event)">
          <input type="hidden" id="editorCatId">
          <div class="form-group">
            <label class="form-label">اسم التصنيف *</label>
            <input type="text" id="editorCatName" class="form-input" required placeholder="مثال: التدريب الصيفي">
          </div>
          <div class="form-group">
            <label class="form-label">وصف التصنيف</label>
            <textarea id="editorCatDesc" class="form-textarea" style="min-height:90px" placeholder="وصف مختصر لمجال التصنيف"></textarea>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:var(--space-4);margin-top:var(--space-6)">
            <button type="button" class="btn btn--secondary" onclick="CareerAI.closeCategoryModal()">إلغاء</button>
            <button type="submit" class="btn btn--accent">حفظ التصنيف</button>
          </div>
        </form>
      </div>
    </div>
  `;
};

/* --- Admin Tabs Controller --- */
window.CareerAI.switchAdminTab = function(tab) {
  const artSec = document.getElementById('adminArticlesSection');
  const catSec = document.getElementById('adminCategoriesSection');
  const artBtn = document.getElementById('tabArticlesBtn');
  const catBtn = document.getElementById('tabCategoriesBtn');

  if (tab === 'articles') {
    artSec.style.display = 'block';
    catSec.style.display = 'none';
    artBtn.classList.add('active');
    catBtn.classList.remove('active');
  } else {
    artSec.style.display = 'none';
    catSec.style.display = 'block';
    artBtn.classList.remove('active');
    catBtn.classList.add('active');
  }
};

/* --- Article Editor Modal logic --- */
window.CareerAI.openArticleEditor = function(articleId = null) {
  const overlay = document.getElementById('articleModalOverlay');
  const form = document.getElementById('articleForm');
  const title = document.getElementById('articleModalTitle');

  form.reset();
  document.getElementById('editorContent').innerHTML = '';

  if (articleId) {
    const art = window.CareerAI.db.getArticleById(articleId);
    if (art) {
      title.innerText = 'تعديل المقال';
      document.getElementById('editorArticleId').value = art.id;
      document.getElementById('editorTitle').value = art.title;
      document.getElementById('editorSlug').value = art.slug;
      document.getElementById('editorCategory').value = art.categoryId;
      document.getElementById('editorStatus').value = art.status;
      document.getElementById('editorImage').value = art.image || '';
      document.getElementById('editorPublishedAt').value = art.publishedAt || '';
      document.getElementById('editorExcerpt').value = art.excerpt || '';
      document.getElementById('editorContent').innerHTML = art.content || '';
      document.getElementById('editorMetaTitle').value = art.metaTitle || '';
      document.getElementById('editorMetaDesc').value = art.metaDescription || '';
      document.getElementById('editorKeywords').value = art.keywords || '';
    }
  } else {
    title.innerText = 'إضافة مقال جديد';
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
  const url = prompt('أدخل رابط URL:');
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
  if (confirm('هل أنت تأكد من حذف هذا المقال نهائياً؟')) {
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
      title.innerText = 'تعديل التصنيف';
      document.getElementById('editorCatId').value = cat.id;
      document.getElementById('editorCatName').value = cat.name;
      document.getElementById('editorCatDesc').value = cat.description || '';
    }
  } else {
    title.innerText = 'إضافة تصنيف جديد';
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
  if (confirm('هل أنت متاكد من حذف هذا التصنيف؟')) {
    window.CareerAI.db.deleteCategory(id);
    window.CareerAI.router.handleRoute();
  }
};

window.CareerAI.handleAdminLogout = function() {
  window.CareerAI.db.logoutAdmin();
  window.CareerAI.router.navigate('/admin/login');
};
