/* ============================================
   CareerAI - Local Database & Storage Engine
   ============================================ */

window.CareerAI = window.CareerAI || {};

window.CareerAI.db = {
  KEYS: {
    CATEGORIES: 'careerai_categories',
    ARTICLES: 'careerai_articles',
    ADMIN_SESSION: 'careerai_admin_session'
  },

  // Initial Default Categories as requested
  defaultCategories: [
    { id: 'cat-1', name: 'السيرة الذاتية', slug: 'cv-resume', description: 'نصائح وأدوات كتابة وتحسين السيرة الذاتية' },
    { id: 'cat-2', name: 'مقابلات العمل', slug: 'job-interviews', description: 'إرشادات وأسئلة إجابات مقابلات التوظيف' },
    { id: 'cat-3', name: 'البحث عن وظيفة', slug: 'job-search', description: 'استراتيجيات البحث الفعال عن فرصة عمل' },
    { id: 'cat-4', name: 'رسائل التقديم', slug: 'cover-letters', description: 'كتابة وتنسيق خطابات التغطية والتقديم' },
    { id: 'cat-5', name: 'نظام ATS', slug: 'ats-system', description: 'كيف تتجاوز أنظمة تتبع المتقدمين الآلية' },
    { id: 'cat-6', name: 'تطوير المسار المهني', slug: 'career-growth', description: 'تنمية المهارات والترقي في سوق العمل' }
  ],

  // Initial Seed Articles
  defaultArticles: [
    {
      id: 'art-1',
      title: 'كيف تكتب سيرة ذاتية احترافية تتجاوز أنظمة ATS في 2026',
      slug: 'how-to-write-professional-cv-ats',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'تعلم أهم القواعد الأساسية لتنسيق وكتابة سيرة ذاتية تضمن مرورها بنجاح من فحص الذكاء الاصطناعي وأنظمة التتبع الذكية.',
      content: `
        <p>تعتبر السيرة الذاتية المفتاح الأول لدخول أي مقابلة عمل. وفي عام 2026، أصبحت معظم الشركات تعتمد على أنظمة تتبع المتقدمين (ATS) لفرز آلاف الطلبات تلقائياً قبل أن تقع عين مسئول التوظيف عليها.</p>
        
        <h3>1. استخدم كلمات مفتاحية دقيقة من الوصف الوظيفي</h3>
        <p>تقوم أنظمة الذكاء الاصطناعي بمطابقة الكلمات الواردة في الإعلان الوظيفي مع محتوى سيرتك الذاتية. تأكد من إدراج مهاراتك والتقنيات التي تتقنها بوضوح بنفس المصطلحات المذكورة في العرض.</p>
        
        <h3>2. ابتعد عن التصاميم المعقدة والجداول التفاعلية</h3>
        <p>رغم أن التصاميم المبتكرة قد تبدو جذابة، إلا أن أنظمة ATS قد تجد صعوبة في قراءة البيانات داخل الجداول أو الصور. اعتمد على هيكل مبسط وعناوين واضحة.</p>
        
        <h3>3. ركز على الإنجازات والأرقام</h3>
        <p>بدلاً من كتابة قائمة بالمهام اليومية فقط، اذكر الإنجازات الملموسة مثل: <em>"ساهمت في زيادة مبيعات الفريق بنسبة 25% خلال 6 أشهر"</em>.</p>
      `,
      categoryId: 'cat-1',
      categoryName: 'السيرة الذاتية',
      keywords: 'سيرة ذاتية, ATS, وظائف 2026, كتابة CV',
      metaTitle: 'كيف تكتب سيرة ذاتية احترافية تتجاوز أنظمة ATS في 2026 | CareerAI',
      metaDescription: 'دليل شامل لكتابة سيرة ذاتية متوافقة مع أنظمة تتبع المتقدمين ATS مع نصائح احترافية لزيادة فرص الاستدعاء للمقابلات.',
      status: 'published',
      publishedAt: '2026-08-15',
      author: 'فريق CareerAI'
    },
    {
      id: 'art-2',
      title: 'أهم 10 أسئلة في مقابلات العمل وكيف تجيب عليها بثقة',
      slug: 'top-10-interview-questions-answers',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'استعد لمقابلتك القادمة من خلال التعرف على أكثر الأسئلة شائعة والاستراتيجية المثالية للرد واستعراض نقاط قوتك.',
      content: `
        <p>المقابلة الشخصية هي فرصتك لإظهار شخصيتك وقدراتك الحقيقية التي لا تستطيع السيرة الذاتية نقلها بالكامل.</p>

        <h3>سؤال: تحدث عن نفسك؟</h3>
        <p>استخدم طريقة STAR (الموقف، المهمة، الإجراء، النتيجة) للإجابة باختصار وتركيز على محطاتك المهنية البارزة.</p>

        <h3>سؤال: ما هي نقاط ضعفك؟</h3>
        <p>اختر مهارة حقيقية تعمل حالياً على تحسينها، واشرح الخطوات التي تتخذها لتجاوزها بنجاح.</p>
      `,
      categoryId: 'cat-2',
      categoryName: 'مقابلات العمل',
      keywords: 'مقابلة عمل, أسئلة المقابلة, تحضير المقابلات',
      metaTitle: 'أهم 10 أسئلة في مقابلات العمل وكيف تجيب عليها بثقة | CareerAI',
      metaDescription: 'تعرف على إجابات أكثر أسئلة المقابلات شيوعاً وطرق التعبير عن خبراتك بثقة أمام لجنة التوظيف.',
      status: 'published',
      publishedAt: '2026-08-10',
      author: 'سارة المنصوري'
    },
    {
      id: 'art-3',
      title: 'استراتيجيات الحديثة للبحث عن عمل والتواصل المهني',
      slug: 'modern-job-search-networking-strategies',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'كيف تستغل الشبكات المهنية والذكاء الاصطناعي للوصول إلى الفرص الخفية في سوق العمل قبل الإعلان عنها.',
      content: `
        <p>تشير الدراسات إلى أن أكثر من 70% من الوظائف يتم شغلها عبر التوصيات والشبكات المهنية دون الإعلان عنها في منصات التوظيف العامة.</p>

        <h3>بناء حضور قوي على LinkedIn</h3>
        <p>تفاعل مع منشورات الخبراء في مجالك وشارك آراءك وخبراتك بانتظام لتكون الخيار الأول لمسؤولي التوظيف.</p>
      `,
      categoryId: 'cat-3',
      categoryName: 'البحث عن وظيفة',
      keywords: 'بحث عن عمل, شبكات مهنية, LinkedIn, فرص عمل',
      metaTitle: 'استراتيجيات الحديثة للبحث عن عمل والتواصل المهني | CareerAI',
      metaDescription: 'دليل شبكات التواصل المهني واستخدام الأدوات الرقمية للوصول لأفضل الفرص الوظيفية المتاحة.',
      status: 'published',
      publishedAt: '2026-08-05',
      author: 'أحمد الخالدي'
    }
  ],

  // Initialization
  init: function() {
    if (!localStorage.getItem(this.KEYS.CATEGORIES)) {
      localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(this.defaultCategories));
    }
    if (!localStorage.getItem(this.KEYS.ARTICLES)) {
      localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(this.defaultArticles));
    }
  },

  /* --- Categories API --- */
  getCategories: function() {
    this.init();
    return JSON.parse(localStorage.getItem(this.KEYS.CATEGORIES) || '[]');
  },

  addCategory: function(name, description) {
    const categories = this.getCategories();
    const slug = name.trim().toLowerCase().replace(/[\s\W]+/g, '-');
    const newCat = {
      id: 'cat-' + Date.now(),
      name: name.trim(),
      slug: slug,
      description: description ? description.trim() : ''
    };
    categories.push(newCat);
    localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
    return newCat;
  },

  updateCategory: function(id, name, description) {
    const categories = this.getCategories();
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index].name = name.trim();
      categories[index].slug = name.trim().toLowerCase().replace(/[\s\W]+/g, '-');
      categories[index].description = description ? description.trim() : '';
      localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
      return categories[index];
    }
    return null;
  },

  deleteCategory: function(id) {
    let categories = this.getCategories();
    categories = categories.filter(c => c.id !== id);
    localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
  },

  /* --- Articles API --- */
  getArticles: function(includeDrafts = false) {
    this.init();
    const articles = JSON.parse(localStorage.getItem(this.KEYS.ARTICLES) || '[]');
    if (includeDrafts) {
      return articles;
    }
    return articles.filter(a => a.status === 'published');
  },

  getArticleBySlug: function(slug) {
    const articles = this.getArticles(true);
    return articles.find(a => a.slug === slug);
  },

  getArticleById: function(id) {
    const articles = this.getArticles(true);
    return articles.find(a => a.id === id);
  },

  saveArticle: function(articleData) {
    const articles = this.getArticles(true);
    const categories = this.getCategories();
    const cat = categories.find(c => c.id === articleData.categoryId);

    // Auto-generate slug if empty
    let slug = articleData.slug ? articleData.slug.trim() : articleData.title.trim().toLowerCase().replace(/[\s\W]+/g, '-');
    if (!slug) slug = 'article-' + Date.now();

    const categoryName = cat ? cat.name : 'عام';

    if (articleData.id) {
      // Update existing
      const index = articles.findIndex(a => a.id === articleData.id);
      if (index !== -1) {
        articles[index] = {
          ...articles[index],
          ...articleData,
          slug: slug,
          categoryName: categoryName
        };
        localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(articles));
        return articles[index];
      }
    }

    // Create new
    const newArticle = {
      id: 'art-' + Date.now(),
      title: articleData.title,
      slug: slug,
      image: articleData.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      excerpt: articleData.excerpt || '',
      content: articleData.content || '',
      categoryId: articleData.categoryId,
      categoryName: categoryName,
      keywords: articleData.keywords || '',
      metaTitle: articleData.metaTitle || articleData.title,
      metaDescription: articleData.metaDescription || articleData.excerpt || '',
      status: articleData.status || 'published',
      publishedAt: articleData.publishedAt || new Date().toISOString().split('T')[0],
      author: articleData.author || 'المدير'
    };

    articles.unshift(newArticle);
    localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(articles));
    return newArticle;
  },

  deleteArticle: function(id) {
    let articles = this.getArticles(true);
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(articles));
  },

  /* --- Admin Auth Guard --- */
  isAdminLoggedIn: function() {
    return localStorage.getItem(this.KEYS.ADMIN_SESSION) === 'true';
  },

  loginAdmin: function(username, password) {
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem(this.KEYS.ADMIN_SESSION, 'true');
      return true;
    }
    return false;
  },

  logoutAdmin: function() {
    localStorage.removeItem(this.KEYS.ADMIN_SESSION);
  }
};

// Initialize DB immediately
window.CareerAI.db.init();
