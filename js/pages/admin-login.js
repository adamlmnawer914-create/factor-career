/* ============================================
   CareerAI - Admin Login Page
   ============================================ */

window.CareerAI = window.CareerAI || {};
window.CareerAI.pages = window.CareerAI.pages || {};

window.CareerAI.pages.adminLogin = function() {
  const icons = window.CareerAI.icons;

  // If already logged in, redirect to admin dashboard
  if (window.CareerAI.db.isAdminLoggedIn()) {
    setTimeout(() => window.CareerAI.router.navigate('/admin'), 10);
    return `<div class="container text-center" style="padding:var(--space-20)">جاري توجيهك إلى لوحة التحكم...</div>`;
  }

  return `
    <div class="page-header" style="padding:var(--space-16) 0 var(--space-12)">
      <div class="container">
        <div class="page-header__content">
          <h1 class="page-header__title">تسجيل دخول المدير</h1>
          <p class="page-header__subtitle">لوحة التحكم خاصة بالمدير فقط لإدارة المقالات والتصنيفات</p>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container container--narrow">
        <div class="contact-form animate-on-scroll" style="max-width:480px;margin:0 auto">
          <div class="text-center" style="margin-bottom:var(--space-6)">
            <div class="header__logo-icon" style="margin:0 auto var(--space-4);width:56px;height:56px;font-size:1.75rem">C</div>
            <h2 style="font-size:var(--text-2xl)">تسجيل الدخول للوحة التحكم</h2>
          </div>

          <form id="adminLoginForm" onsubmit="CareerAI.handleAdminLogin(event)">
            <div id="loginError" class="login-error-badge" style="display:none">
              اسم المستخدم أو كلمة المرور غير صحيحة!
            </div>

            <div class="form-group">
              <label class="form-label" for="adminUsername">اسم المستخدم</label>
              <input type="text" id="adminUsername" class="form-input" placeholder="اسم المستخدم" required value="admin">
            </div>

            <div class="form-group">
              <label class="form-label" for="adminPassword">كلمة المرور</label>
              <input type="password" id="adminPassword" class="form-input" placeholder="كلمة المرور" required value="admin123">
            </div>

            <button type="submit" class="btn btn--primary btn--full" style="margin-top:var(--space-4)">
              تسجيل الدخول
              <span style="width:18px;height:18px;display:inline-flex;transform:rotate(180deg)">${icons.arrowLeft}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
};

window.CareerAI.handleAdminLogin = function(e) {
  e.preventDefault();
  const user = document.getElementById('adminUsername').value;
  const pass = document.getElementById('adminPassword').value;
  const err = document.getElementById('loginError');

  if (window.CareerAI.db.loginAdmin(user, pass)) {
    if (err) err.style.display = 'none';
    window.CareerAI.router.navigate('/admin');
  } else {
    if (err) err.style.display = 'block';
  }
};
