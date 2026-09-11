/* ============================================
   Factor Career - Local Database & Storage Engine (Bilingual AR/EN)
   ============================================ */

window.CareerAI = window.CareerAI || {};

window.CareerAI.db = {
  KEYS: {
    CATEGORIES: 'careerai_categories_v3',
    ARTICLES: 'careerai_articles_v3',
    JOBS: 'careerai_jobs_v3',
    ADMIN_SESSION: 'careerai_admin_session'
  },

  // Default Categories with Arabic & English names
  defaultCategories: [
    { id: 'cat-1', name: 'Resume & CV', name_ar: 'السيرة الذاتية', name_en: 'Resume & CV', slug: 'cv-resume', description: 'Expert advice and tools to build and optimize your resume' },
    { id: 'cat-2', name: 'Job Interviews', name_ar: 'مقابلات العمل', name_en: 'Job Interviews', slug: 'job-interviews', description: 'Guidelines, model questions, and proven answer strategies' },
    { id: 'cat-3', name: 'Job Search', name_ar: 'البحث عن عمل', name_en: 'Job Search', slug: 'job-search', description: 'Effective job hunting and networking strategies' },
    { id: 'cat-4', name: 'Cover Letters', name_ar: 'رسائل التقديم', name_en: 'Cover Letters', slug: 'cover-letters', description: 'How to craft persuasive and customized cover letters' },
    { id: 'cat-5', name: 'ATS Systems', name_ar: 'أنظمة ATS', name_en: 'ATS Systems', slug: 'ats-system', description: 'How to pass automated Applicant Tracking Systems' },
    { id: 'cat-6', name: 'Career Growth', name_ar: 'التطوير المهني', name_en: 'Career Growth', slug: 'career-growth', description: 'Skill building, promotions, and career advancement' }
  ],

  // 10 Comprehensive Bilingual Articles (Arabic & English)
  defaultArticles: [
    {
      id: 'art-1',
      slug: '10-proven-strategies-to-beat-ats-resume-scanners',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
      title_en: '10 Proven Strategies to Beat ATS Resume Scanners in 2026',
      title_ar: '10 استراتيجيات مجربة لتجاوز فحص السيرة الذاتية بأنظمة ATS في 2026',
      excerpt_en: 'Learn the essential rules of resume formatting and keyword optimization to ensure your CV passes automated screening systems and reaches human recruiters.',
      excerpt_ar: 'تعلم أهم القواعد الأساسية لتنسيق وكتابة سيرة ذاتية تضمن مرورها بنجاح من فحص الذكاء الاصطناعي وأنظمة التتبع الذكية ووصولها لمسؤول التوظيف.',
      content_en: `
        <p>In today's competitive job market, over 90% of Fortune 500 companies and growing enterprises use <strong>Applicant Tracking Systems (ATS)</strong> to screen resumes before a human recruiter ever sees them. An ATS parses, categorizes, and scores your resume based on keyword match, formatting, and relevance.</p>
        
        <h3>1. Mirror Exact Keywords from the Job Description</h3>
        <p>ATS algorithms search for specific hard skills, software proficiencies, and industry certifications. Scan the job posting carefully for recurring terms and weave them naturally into your Professional Summary, Skills, and Experience sections.</p>
        
        <h3>2. Choose Standard, Clean Formatting</h3>
        <p>Avoid complex multi-column layouts, tables, text boxes, headers, footers, or embedded graphics. ATS parsers read from left to right, top to bottom. Stick to standard clean margins and traditional section headings like <em>Work Experience</em>, <em>Education</em>, and <em>Core Skills</em>.</p>
        
        <h3>3. Use Industry-Standard Job Titles</h3>
        <p>While creative job titles like "Coding Ninja" or "Growth Guru" may seem fun, ATS software will not recognize them. Always use standard titles such as "Senior Software Engineer" or "Marketing Coordinator" to guarantee accurate indexation.</p>
        
        <h3>4. Quantify Your Achievements with Measurable Impact</h3>
        <p>Rather than merely listing routine daily duties, highlight outcomes using concrete metrics: <em>"Engineered automated data pipelines reducing processing latency by 35% across 12 distributed teams."</em></p>
        
        <h3>5. Submit in the Recommended File Format</h3>
        <p>Unless the employer specifies otherwise, save and upload your resume as a clean PDF or Microsoft Word (.docx) document. Ensure text is selectable and not saved as an image file.</p>
      `,
      content_ar: `
        <p>في سوق العمل الحالي، تعتمد أكثر من 90% من الشركات العالمية على <strong>أنظمة تتبع المتقدمين (ATS)</strong> لفرز آلاف السير الذاتية آلياً قبل أن تصل إلى يد مسؤول التوظيف البشري.</p>
        
        <h3>1. مطابقة الكلمات المفتاحية بدقة من الوصف الوظيفي</h3>
        <p>تقوم خوارزميات ATS بالبحث عن مهارات تقنية وأدوات محددة وشهادات مهنية مذكورة في الإعلان. تأكد من إدراج هذه الكلمات في قسم المهارات وملخصك المهني بنفس الصياغة.</p>
        
        <h3>2. الاعتماد على تنسيق بسيط ونظيف</h3>
        <p>تجنب الجداول المعقدة، مربعات النصوص، والصور المدمجة لأن روبوتات الفرز قد تفشل في قراءتها. استخدم عناوين أقسام واضحة وخطوطاً قياسية.</p>
        
        <h3>3. استخدام مسميات وظيفية قياسية ومعتمدة</h3>
        <p>تجنب المسميات المبتكرة غير المألوفة واستخدم المسميات الرسمية المتعارف عليها في مجالك (مثل: مهندس برمجيات، أخصائي تسويق رقمي).</p>
        
        <h3>4. إبراز الإنجازات بالأرقام والنسب المئوية</h3>
        <p>بدلاً من مجرد سرد المهام اليومية، اذكر التأثير المباشر لعملك مثل: <em>"ساهمت في تحسين كفاءة العمليات بنسبة 30% خلال الربع الأول."</em></p>
      `,
      verificationCode: 'FC-PROOF-ATS8821',
      categoryId: 'cat-1',
      categoryName_en: 'Resume & CV',
      categoryName_ar: 'السيرة الذاتية',
      keywords: 'ATS Resume, CV Optimization, سيرة ذاتية ATS, فحص السيرة الذاتية',
      status: 'published',
      publishedAt: '2026-08-20',
      author_en: 'Sarah Jenkins, Career Consultant',
      author_ar: 'سارة جينكينز، مستشارة مهنية'
    },
    {
      id: 'art-2',
      slug: 'ultimate-guide-answering-tell-me-about-yourself-interviews',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      title_en: 'The Ultimate Guide to Answering "Tell Me About Yourself" in Job Interviews',
      title_ar: 'الدليل الشامل للإجابة على سؤال "تحدث عن نفسك" في مقابلات العمل',
      excerpt_en: 'Master the most common opening interview question with the proven Present-Past-Future formula that instantly captivates hiring managers.',
      excerpt_ar: 'أتقن الإجابة على السؤال الافتتاحي الأكثر شيوعاً في المقابلات الوظيفية عبر معادلة (الحاضر - الماضي - المستقبل) لإبهار مسؤولي التوظيف.',
      content_en: `
        <p>Almost every interview begins with the classic icebreaker: <strong>"Tell me about yourself."</strong> While simple on the surface, this question sets the tone for the entire conversation and determines your first impression with the hiring committee.</p>
        
        <h3>The Proven "Present-Past-Future" Framework</h3>
        <ul>
          <li><strong>Present:</strong> Briefly state your current role, scope of responsibilities, and a key recent accomplishment.</li>
          <li><strong>Past:</strong> Highlight prior milestones and formative experiences that developed your core expertise.</li>
          <li><strong>Future:</strong> Explain why you are genuinely excited about this specific opportunity and how it aligns with your career trajectory.</li>
        </ul>
        
        <h3>Example Response Script</h3>
        <blockquote>
          "I'm currently a Senior Product Marketing Manager at TechFlow, where I lead go-to-market strategies for enterprise SaaS tools, recently helping increase product adoption by 40%. Prior to this, I spent four years in digital brand strategy managing cross-functional campaigns. When I discovered your opening, I was drawn to your mission of democratizing AI tools, and I would love to bring my product launch expertise to your team."
        </blockquote>
      `,
      content_ar: `
        <p>تبدأ معظم مقابلات العمل بسؤال: <strong>"تحدث عن نفسك"</strong>. يمثل هذا السؤال بوابتك لترك انطباع أولي قوي يحدد مسار المقابلة بالكامل.</p>
        
        <h3>استراتيجية (الحاضر - الماضي - المستقبل)</h3>
        <ul>
          <li><strong>الحاضر:</strong> تحدث عن دورك الحالي وأبرز إنجاز حققته مؤخراً.</li>
          <li><strong>الماضي:</strong> اذكر محطاتك وخبراتك السابقة التي صقلت مهاراتك الرئيسية.</li>
          <li><strong>المستقبل:</strong> وضّح سبب اهتمامك بهذه الوظيفة تحديداً وكيف ستضيف قيمة فورية للفريق.</li>
        </ul>
        
        <h3>نصيحة ذهبية:</h3>
        <p>لا تقم بقراءة سيرتك الذاتية حرفياً، بل ركّز على القصة المهنية التي تبرز شغفك وقدرتك على حل مشاكل الشركة.</p>
      `,
      verificationCode: 'FC-PROOF-INT9042',
      categoryId: 'cat-2',
      categoryName_en: 'Job Interviews',
      categoryName_ar: 'مقابلات العمل',
      keywords: 'Job Interviews, Tell Me About Yourself, مقابلات العمل, أسئلة التوظيف',
      status: 'published',
      publishedAt: '2026-08-18',
      author_en: 'Michael Chang, Senior Recruiter',
      author_ar: 'مايكل تشانغ، خبير استقطاب مواهب'
    },
    {
      id: 'art-3',
      slug: 'how-to-write-high-converting-cover-letter',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
      title_en: 'How to Write a High-Converting Cover Letter That Gets You Hired',
      title_ar: 'كيف تكتب رسالة تغطية (Cover Letter) مقنعة تضمن لك الوظيفة',
      excerpt_en: 'Transform your generic cover letters into compelling value propositions that grab recruiters attention within the first 10 seconds.',
      excerpt_ar: 'حوّل خطابات التقديم العادية إلى رسائل مقنعة توضح قيمتك المضافة وتلفت انتباه مسؤول التوظيف من أول 10 ثوانٍ.',
      content_en: `
        <p>A well-crafted cover letter is not just a summary of your resume—it is your personal sales pitch that demonstrates culture fit, enthusiasm, and specific value addition.</p>
        
        <h3>1. Hook the Reader from the Opening Line</h3>
        <p>Avoid cliché openings like <em>"I am writing to apply for..."</em>. Instead, lead with energy and a quantifiable success: <em>"When I grew our organic search traffic by 180% in 9 months at my previous firm, I realized how powerful customer-centric content can be."</em></p>
        
        <h3>2. Address the Company's Core Challenges</h3>
        <p>Research the employer's recent press releases, product updates, or pain points. Explain specifically how your background solves their current bottlenecks.</p>
        
        <h3>3. Keep It Concise: 3 to 4 High-Impact Paragraphs</h3>
        <ul>
          <li><strong>Paragraph 1:</strong> The strong hook and position of interest.</li>
          <li><strong>Paragraph 2:</strong> 2–3 specific achievements with numerical data.</li>
          <li><strong>Paragraph 3:</strong> Why this company and its mission resonate with you.</li>
          <li><strong>Closing:</strong> Professional call to action requesting a meeting.</li>
        </ul>
      `,
      content_ar: `
        <p>رسالة التغطية الاحترافية ليست مجرد تكرار للسيرة الذاتية، بل هي فرصتك لشرح دوافعك وقدرتك على تلبية احتياجات صاحب العمل بدقة.</p>
        
        <h3>1. افتتح الرسالة بجملة افتتاحية قوية وجذابة</h3>
        <p>ابتعد عن الجمل النمطية التقليدية، وابدأ مباشرة بإنجاز مهني ملموس يعكس شغفك وكفاءتك.</p>
        
        <h3>2. ربط خبراتك بأهداف وتحديات الشركة</h3>
        <p>ابحث عن أحدث مشاريع الشركة واشرح كيف يمكن لمهاراتك أن تساعدهم في تحقيق أهدافهم الحالية.</p>
        
        <h3>3. هيكل مثالي من 3 إلى 4 فقرات موجزة ومباشرة</h3>
        <p>احرص ألا تتجاوز الرسالة صفحة واحدة وركز على جودة الصياغة وخلوها من أي أخطاء لغوية.</p>
      `,
      verificationCode: 'FC-PROOF-COV3194',
      categoryId: 'cat-4',
      categoryName_en: 'Cover Letters',
      categoryName_ar: 'رسائل التقديم',
      keywords: 'Cover Letter, رسالة تغطية, خطاب تقديم, Job Application',
      status: 'published',
      publishedAt: '2026-08-17',
      author_en: 'Elena Rostova, Career Strategist',
      author_ar: 'إيلينا روستوفا، مستشارة مهنية'
    },
    {
      id: 'art-4',
      slug: 'top-in-demand-skills-employers-look-for-2026',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      title_en: 'Top In-Demand Tech and Soft Skills Employers Look for in 2026',
      title_ar: 'أبرز المهارات التقنية والشخصية الأكثر طلباً في سوق العمل لعام 2026',
      excerpt_en: 'Explore the crucial technical proficiencies and essential interpersonal soft skills that will future-proof your career in 2026 and beyond.',
      excerpt_ar: 'اكتشف المهارات التقنية والمهارات الشخصية الناعمة التي يبحث عنها أصحاب العمل عالمياً لتأمين مستقبلك المهني في 2026.',
      content_en: `
        <p>The global job landscape is evolving at unprecedented speed. The integration of generative AI, automation, and hybrid remote work models has reshaped what hiring managers value most.</p>
        
        <h3>Top Technical Skills in High Demand</h3>
        <ul>
          <li><strong>AI Prompt Engineering & Tool Fluency:</strong> Leveraging AI copilot tools to double work efficiency.</li>
          <li><strong>Data Literacy & Business Intelligence:</strong> Interpreting SQL datasets, dashboards, and analytics to guide decisions.</li>
          <li><strong>Cloud Architecture & Cybersecurity:</strong> Protecting distributed data assets on AWS, Azure, and Google Cloud.</li>
        </ul>
        
        <h3>Top Enduring Soft Skills</h3>
        <ul>
          <li><strong>Critical Problem Solving:</strong> Evaluating complex challenges independently.</li>
          <li><strong>Emotional Intelligence & Cross-Cultural Collaboration:</strong> Leading distributed teams with empathy.</li>
          <li><strong>Adaptability & Lifelong Learning:</strong> Rapidly mastering new software paradigms without friction.</li>
        </ul>
      `,
      content_ar: `
        <p>يشهد سوق العمل تحولات متسارعة مع دخول تقنيات الذكاء الاصطناعي التوليدي والعمل الهجين، مما يفرض على الباحثين عن عمل تطوير مهاراتهم باستمرار.</p>
        
        <h3>المهارات التقنية الأكثر طلباً:</h3>
        <ul>
          <li><strong>إتقان أدوات الذكاء الاصطناعي:</strong> القدرة على مضاعفة الإنتاجية باستخدام أدوات AI الحديثة.</li>
          <li><strong>تحليل البيانات واتخاذ القرارات:</strong> فهم مؤشرات الأداء ولوحات البيانات الرقمية.</li>
          <li><strong>الحوسبة السحابية والأمن السيبراني:</strong> إدارة وحماية الأنظمة الرقمية الحديثة.</li>
        </ul>
        
        <h3>المهارات الشخصية الأساسية:</h3>
        <ul>
          <li><strong>التفكير النقدي وحل المشكلات:</strong> التعامل مع التحديات المعقدة بمرونة وابتكار.</li>
          <li><strong>التواصل والعمل الجماعي:</strong> التنسيق الفعال ضمن فرق العمل المتنوعة وعن بعد.</li>
        </ul>
      `,
      verificationCode: 'FC-PROOF-SKL5501',
      categoryId: 'cat-6',
      categoryName_en: 'Career Growth',
      categoryName_ar: 'التطوير المهني',
      keywords: 'Tech Skills 2026, Soft Skills, مهارات المستقبل, تطوير مهني',
      status: 'published',
      publishedAt: '2026-08-15',
      author_en: 'David Miller, Tech Talent Lead',
      author_ar: 'ديفيد ميلر، خبير التوظيف التقني'
    },
    {
      id: 'art-5',
      slug: 'step-by-step-linkedin-profile-optimization-guide',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1200&q=80',
      title_en: 'Step-by-Step Guide to Optimizing Your LinkedIn Profile for Recruiters',
      title_ar: 'دليل خطوة بخطوة لتحسين حسابك على LinkedIn لجذب مسؤولي التوظيف',
      excerpt_en: 'Turn your LinkedIn profile into a recruiter magnet by applying algorithmic search optimization, persuasive headlines, and engaging media.',
      excerpt_ar: 'حوّل حسابك على LinkedIn إلى مغناطيس للفرص الوظيفية عبر تحسين محركات البحث الداخلية وصياغة عنوان احترافي جذاب.',
      content_en: `
        <p>LinkedIn is no longer just an online resume—it is the world's primary search engine for executive recruiters and talent scouts. If your profile is not optimized, you are invisible to hundreds of opportunities.</p>
        
        <h3>1. Write a Compelling, Keyword-Rich Headline</h3>
        <p>Instead of just your job title, format your headline using this formula: <em>[Target Role] | [Core Value Proposition] | [Key Tech Stack & Accolades]</em>.</p>
        
        <h3>2. Craft a First-Person 'About' Narrative</h3>
        <p>Your About section should tell your story: what drives you, your biggest career achievements, and how you help teams succeed. Include a clear call to action and contact email at the bottom.</p>
        
        <h3>3. Maximize Recommendations and Endorsements</h3>
        <p>Profiles with at least 5 credible recommendations from managers and colleagues rank significantly higher in LinkedIn Recruiter search algorithms.</p>
      `,
      content_ar: `
        <p>يعد LinkedIn المنصة الأولى عالمياً لتوظيف المحترفين. تحسين ملفك الشخصي يزيد من احتمالية ظهورك في نتائج بحث مسؤولي التوظيف بنسبة تزيد عن 70%.</p>
        
        <h3>1. صياغة عنوان وظيفي (Headline) غني بالكلمات المفتاحية</h3>
        <p>لا تكتفِ بكتابة مسماك الحالي فقط، بل أضف مهاراتك الأساسية والقيمة التي تقدمها لمجالك المهني.</p>
        
        <h3>2. كتابة نبذة شخصية (About) مقنعة</h3>
        <p>استعرض مسيرتك وشغفك المهني وأهم إنجازاتك بأسلوب احترافي وجذاب مع إضافة وسيلة التواصل في النهاية.</p>
        
        <h3>3. جمع التوصيات والمهارات الموثقة</h3>
        <p>اطلب من زملائك ومديريك السابقين كتابة توصيات حقيقية لتعزيز مصداقيتك أمام مدراء التوظيف الجدد.</p>
      `,
      verificationCode: 'FC-PROOF-LNK7812',
      categoryId: 'cat-3',
      categoryName_en: 'Job Search',
      categoryName_ar: 'البحث عن عمل',
      keywords: 'LinkedIn, لينكد إن, بحث عن وظيفة, Personal Branding',
      status: 'published',
      publishedAt: '2026-08-14',
      author_en: 'Rachel Adams, Brand & Career Coach',
      author_ar: 'راشيل آدامز، مدربة العلامة المهنية'
    },
    {
      id: 'art-6',
      slug: 'how-to-transition-career-field-without-experience',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      title_en: 'How to Successfully Transition into a New Career Field Without Direct Experience',
      title_ar: 'كيف تغير مجالك المهني بنجاح (Career Change) دون امتلاك خبرة سابقة',
      excerpt_en: 'A practical roadmap for pivoting industries by framing transferable skills, building targeted portfolios, and bridging the credibility gap.',
      excerpt_ar: 'خطة عملية لتغيير مسارك المهني والانتقال إلى مجال جديد عبر توظيف المهارات القابلة للتحويل وبناء معرض أعمال مقنع.',
      content_en: `
        <p>Pivoting into a new career path can feel daunting, especially when job listings ask for 3+ years of specific domain experience. However, smart career changers bridge this gap by focusing on transferable skills and evidence-based portfolios.</p>
        
        <h3>1. Audit Your Transferable Skill Set</h3>
        <p>Project management, stakeholder negotiation, data analysis, and team leadership are universally valued. Reframe your past experiences using the terminology of your target industry.</p>
        
        <h3>2. Build Proof of Work Projects</h3>
        <p>Create case studies, GitHub repositories, or sample design audits that solve real problems in your target sector. A tangible portfolio often outweighs years of passive experience.</p>
      `,
      content_ar: `
        <p>قد يبدو تغيير المجال المهني تحدياً كبيراً، لكن التركيز على المهارات القابلة للنقل وبناء مشاريع عملية حقيقية يمنحك أفضلية فورية أمام المنافسين.</p>
        
        <h3>1. حصر المهارات القابلة للتحويل (Transferable Skills)</h3>
        <p>مهارات مثل إدارة المشاريع، التحليل، التواصل، وحل المشكلات مطلوبة في كل قطاع؛ أعد صياغتها بلغة مجالك الجديد.</p>
        
        <h3>2. بناء معرض أعمال أو مشاريع تطبيقية</h3>
        <p>أثبت كفاءتك من خلال نماذج عملية ودراسات حالة واقعية توضح إتقانك لأدوات ومتطلبات التخصص الجديد.</p>
      `,
      verificationCode: 'FC-PROOF-TRS4430',
      categoryId: 'cat-6',
      categoryName_en: 'Career Growth',
      categoryName_ar: 'التطوير المهني',
      keywords: 'Career Change, تغيير المسار المهني, خبرة وظيفية, مهارات',
      status: 'published',
      publishedAt: '2026-08-12',
      author_en: 'Jonathan Hayes, Executive Coach',
      author_ar: 'جوناثان هايز، مستشار تنفيذي'
    },
    {
      id: 'art-7',
      slug: 'mastering-star-method-behavioral-interview-questions',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      title_en: 'Mastering the STAR Method for Behavioral Interview Questions',
      title_ar: 'احتراف استراتيجية STAR للإجابة على الأسئلة السلوكية في المقابلات',
      excerpt_en: 'Structure concise, impactful stories for behavioral questions like "Describe a time you overcame conflict" using the STAR technique.',
      excerpt_ar: 'تعلم كيفية صياغة إجابات محكمة ومقنعة للأسئلة السلوكية في مقابلات العمل عبر نموذج STAR المعتمد عالمياً.',
      content_en: `
        <p>Behavioral interview questions—such as <em>"Tell me about a time you handled a difficult stakeholder"</em>—are designed to predict your future performance based on past behavior. The <strong>STAR method</strong> is the gold standard for structuring these answers.</p>
        
        <h3>The 4 Components of STAR:</h3>
        <ul>
          <li><strong>Situation (20%):</strong> Set the scene with relevant context and the stakes involved.</li>
          <li><strong>Task (10%):</strong> Define what your specific responsibility was in that scenario.</li>
          <li><strong>Action (50%):</strong> Detail the concrete steps YOU took to solve the dilemma.</li>
          <li><strong>Result (20%):</strong> State the quantifiable outcome, lesson learned, or praise received.</li>
        </ul>
      `,
      content_ar: `
        <p>تستخدم لجان التوظيف الأسئلة السلوكية لتقييم كيفية تصرفك في المواقف الصعبة. طريقة <strong>STAR</strong> هي الأسلوب المثالي لتقديم إجابة منظمة ومقنعة.</p>
        
        <h3>أركان نموذج STAR الأربعة:</h3>
        <ul>
          <li><strong>الموقف (Situation):</strong> وصف السياق العام والمشكلة باختصار.</li>
          <li><strong>المهمة (Task):</strong> توضيح دورك ومسؤوليتك المحددة في ذلك الموقف.</li>
          <li><strong>الإجراء (Action):</strong> تفصيل الخطوات العملية التي اتخذتها لحل التحدي.</li>
          <li><strong>النتيجة (Result):</strong> استعراض النتائج الإيجابية المحققة مع أرقام إن أمكن.</li>
        </ul>
      `,
      verificationCode: 'FC-PROOF-STR6219',
      categoryId: 'cat-2',
      categoryName_en: 'Job Interviews',
      categoryName_ar: 'مقابلات العمل',
      keywords: 'STAR Method, استراتيجية STAR, أسئلة سلوكية, مقابلة وظيفية',
      status: 'published',
      publishedAt: '2026-08-10',
      author_en: 'Marcus Vance, Talent Partner',
      author_ar: 'ماركوس فانس، خبير توظيف'
    },
    {
      id: 'art-8',
      slug: 'how-to-negotiate-salary-compensation-confidence',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      title_en: 'How to Negotiate Your Salary and Compensation Package with Confidence',
      title_ar: 'كيف تفاوض على الراتب وحزمة المزايا الوظيفية بثقة واحترافية',
      excerpt_en: 'Learn effective salary negotiation scripts and strategies to increase your offer without risking the initial job opportunity.',
      excerpt_ar: 'استراتيجيات ونماذج حوارية مجربة للتفاوض على الراتب والمكافآت لزيادة دخلك دون المخاطرة بعرض العمل المقدم لك.',
      content_en: `
        <p>Studies consistently demonstrate that candidates who negotiate their starting compensation increase their lifetime earnings significantly. Yet, many job seekers hesitate out of fear of appearing difficult.</p>
        
        <h3>1. Benchmark Your Market Value Thoroughly</h3>
        <p>Use salary aggregators to establish an objective compensation range for your exact role, experience level, and geographic tier.</p>
        
        <h3>2. Never State Your Number First</h3>
        <p>Focus on establishing mutual fit before committing to a specific figure.</p>
        
        <h3>3. Negotiate the Total Compensation Bundle</h3>
        <p>If the base salary is fixed, negotiate annual bonuses, additional paid leave, or remote work stipends.</p>
      `,
      content_ar: `
        <p>التفاوض على الراتب خطوة طبيعية يتوقعها مسؤولو التوظيف؛ والتحضير الجيد يضمن حصولك على القيمة الحقيقية لخبراتك في السوق.</p>
        
        <h3>1. دراسة معدل الرواتب في السوق بدقة</h3>
        <p>اطلع على تقارير الرواتب المعتمدة لتحديد النطاق المالي الواقعي لخبرتك وتخصصك.</p>
        
        <h3>2. التفاوض على إجمالي المزايا وليس الراتب الأساسي فقط</h3>
        <p>إذا كان الراتب الأساسي ثابتاً، يمكنك التفاوض على مكافآت الأداء، بدلات العمل عن بعد، أو أيام الإجازات السنوية.</p>
      `,
      verificationCode: 'FC-PROOF-SAL8374',
      categoryId: 'cat-6',
      categoryName_en: 'Career Growth',
      categoryName_ar: 'التطوير المهني',
      keywords: 'Salary Negotiation, تفاوض على الراتب, عروض العمل, Compensation',
      status: 'published',
      publishedAt: '2026-08-08',
      author_en: 'Claire Thornton, Compensation Analyst',
      author_ar: 'كلير ثورنتون، محللة مكافآت'
    },
    {
      id: 'art-9',
      slug: 'uncover-hidden-job-market-search-strategies',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
      title_en: 'Effective Job Search Strategies to Uncover the Hidden Job Market',
      title_ar: 'استراتيجيات فعالة للوصول إلى سوق العمل الخفي والوظائف غير المعلنة',
      excerpt_en: 'Up to 70% of open positions are never posted publicly. Learn how to tap into internal referral networks and land unadvertised opportunities.',
      excerpt_ar: 'أكثر من 70% من الوظائف يتم شغلها عبر الترشيحات المباشرة قبل نشرها. تعلم كيف تبني شبكة علاقات وتصل إلى هذه الفرص.',
      content_en: `
        <p>Relying exclusively on public job boards means competing against hundreds of applicants for every role. The <strong>Hidden Job Market</strong> refers to opportunities filled via internal referrals, headhunter outreach, and organic networking.</p>
        
        <h3>1. Map Out a Target List of 20 Companies</h3>
        <p>Identify high-growth companies that match your values and follow their key executives and engineering/marketing leaders on social media.</p>
        
        <h3>2. The Art of Cold Value Outreach</h3>
        <p>Send concise, polite messages introducing an insightful observation, followed by an inquiry regarding upcoming team growth.</p>
      `,
      content_ar: `
        <p>الاعتماد على مواقع التوظيف التقليدية فقط يضعك في منافسة مع مئات المتقدمين. يمثل "سوق العمل الخفي" الفرص التي تُشغل عبر شبكات المعارف والتوصيات.</p>
        
        <h3>1. تحديد قائمة بـ 20 شركة مستهدفة</h3>
        <p>تابع قادة الفرق والمدراء التنفيذيين في الشركات التي تطمح للانضمام إليها وتفاعل مع محتواهم المهني.</p>
        
        <h3>2. التواصل المباشر وتقديم القيمة</h3>
        <p>تواصل مع مسؤولي التوظيف برسائل قصيرة ومهذبة توضح اهتمامك بحلولهم وقدرتك على الإسهام في نمو مشاريعهم.</p>
      `,
      verificationCode: 'FC-PROOF-HDN2958',
      categoryId: 'cat-3',
      categoryName_en: 'Job Search',
      categoryName_ar: 'البحث عن عمل',
      keywords: 'Hidden Job Market, سوق العمل الخفي, شبكات مهنية, فرص غير معلنة',
      status: 'published',
      publishedAt: '2026-08-06',
      author_en: 'Ahmed El-Khaledi, Career Consultant',
      author_ar: 'أحمد الخالدي، مستشار توظيف'
    },
    {
      id: 'art-10',
      slug: 'how-to-use-ai-to-accelerate-career-search',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
      title_en: 'How to Use Artificial Intelligence to Accelerate Your Career Search',
      title_ar: 'كيف تستخدم أدوات الذكاء الاصطناعي لتسريع العثور على وظيفة أحلامك',
      excerpt_en: 'Harness the full potential of AI resume builders, automated interview coaches, and keyword generators to land your dream job faster.',
      excerpt_ar: 'استفد من أدوات الذكاء الاصطناعي في بناء السيرة الذاتية، ومحاكاة المقابلات، واستخراج الكلمات المفتاحية لمضاعفة فرص قبولك.',
      content_en: `
        <p>Artificial Intelligence has transformed job hunting from a tedious manual slog into a streamlined, high-precision process. Job seekers who leverage AI tools effectively can apply to more relevant roles with tailored assets in half the time.</p>
        
        <h3>1. AI-Driven Resume Tailoring</h3>
        <p>Modern platforms like <strong>Factor Career</strong> parse job postings and instantly generate keyword-rich bullet points tailored to specific ATS criteria, eliminating hours of manual editing.</p>
        
        <h3>2. Interactive Interview Coaching</h3>
        <p>AI interview tools simulate real hiring scenarios, generating realistic questions tailored to your exact industry and evaluating your answers using the STAR method for instant feedback.</p>
      `,
      content_ar: `
        <p>أحدث الذكاء الاصطناعي ثورة حقيقية في طريقة البحث عن عمل، حيث يمكنك تخصيص ملفاتك الوظيفية والتحضير للمقابلات في دقائق معدودة وبأعلى جودة.</p>
        
        <h3>1. تخصيص السيرة الذاتية بالذكاء الاصطناعي</h3>
        <p>تساعدك منصات مثل <strong>Factor Career</strong> في صياغة إنجازاتك وتكييفها مع كلمات ATS المفتاحية بدقة متناهية.</p>
        
        <h3>2. التدرب على المقابلات الشخصية الذكية</h3>
        <p>استخدم نماذج المقابلات التفاعلية لتجربة أسئلة حقيقية في مجالك والحصول على إجابات نموذجية متقنة.</p>
      `,
      verificationCode: 'FC-PROOF-AIX1095',
      categoryId: 'cat-1',
      categoryName_en: 'Resume & CV',
      categoryName_ar: 'السيرة الذاتية',
      keywords: 'AI Career, ذكاء اصطناعي, سيرة ذاتية AI, أدوات توظيف',
      status: 'published',
      publishedAt: '2026-08-04',
      author_en: 'Factor Career AI Team',
      author_ar: 'فريق أبحاث Factor Career'
    }
  ],

  // Default Jobs / Opportunities
  defaultJobs: [
    {
        "id": "job-1789159429-1",
        "title": "Lifecycle Specialist, Employee Relations & Transitions - Canada",
        "title_ar": "Lifecycle Specialist, Employee Relations & Transitions - Canada",
        "company": "Remote",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Canada",
        "salary": "Competitive",
        "description": "  About Remote  \n Remote is solving modern organizations’ biggest challenge – navigating global employment compliantly with ease. We make it possible for businesses of all sizes to recruit, pay, and manage international teams. With our core values at heart and future focused work culture, our team w...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in HR & Recruiting, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام HR & Recruiting, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153083-lifecycle-specialist-employee-relations-transitions-canada-2",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159429-2",
        "title": "Sales Representative - Brescia",
        "title_ar": "Sales Representative - Brescia",
        "company": "Deliveroo",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Italy",
        "salary": "Competitive",
        "description": " Siamo alla ricerca di un Sales Representative per la zona di  Brescia.  \n È un'opportunità unica per entrare a far parte di un'azienda solida e in forte espansione, ricoprendo un ruolo chiave fin dal primo giorno. Ti occuperai di sviluppare il business collaborando con i ristoranti più iconici e pr...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153079-sales-representative-brescia",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201029093237-178554.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159430-3",
        "title": "Engineering Manager, SRE",
        "title_ar": "Engineering Manager, SRE",
        "company": "Remote",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "APAC,  EMEA",
        "salary": "Competitive",
        "description": "  About Remote  \n Remote is solving modern organizations’ biggest challenge – navigating global employment compliantly with ease. We make it possible for businesses of all sizes to recruit, pay, and manage international teams. With our core values at heart and future focused work culture, our team w...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in DevOps & Infrastructure, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام DevOps & Infrastructure, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153081-engineering-manager-sre",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159431-4",
        "title": "Strategic Account Executive, New Business",
        "title_ar": "Strategic Account Executive, New Business",
        "company": "Ceros",
        "category": "sales",
        "category_ar": "المبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "   Location:  Remote within the US \n  ⬆ Reporting Into:  Head of Sales \n  Compensation:  $110,000–$140,000 base salary, plus uncapped commission, with a total expected compensation range of $210,000–$280,000+, depending on qualifications and experience. \n  About Ceros  \n At Ceros, you’ll help ambiti...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153080-strategic-account-executive-new-business",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/7f055a77-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159432-5",
        "title": "Talent Programs Lead",
        "title_ar": "Talent Programs Lead",
        "company": "Grove Collaborative",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " Grove Collaborative is a sustainability-focused consumer products company creating household and personal care essentials that are effective, beautifully designed, and healthier for people and the planet. We are a certified B Corp, plastic-neutral, and on a mission to transform the CPG industry for...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in HR & Recruiting, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام HR & Recruiting, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153076-talent-programs-lead",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/574531d8dd057e68801193a869098c18.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159433-6",
        "title": "HR AI & Automation Operations Lead",
        "title_ar": "HR AI & Automation Operations Lead",
        "company": "Remote",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "LATAM,  Canada,  USA",
        "salary": "Competitive",
        "description": "  About Remote  \r\n Remote is solving modern organizations’ biggest challenge – navigating global employment compliantly with ease. We make it possible for businesses of all sizes to recruit, pay, and manage international teams. With our core values at heart and future focused work culture, our team ...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in HR & Recruiting, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام HR & Recruiting, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153082-hr-ai-automation-operations-lead",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159434-7",
        "title": "Sr. Sales Development Representative",
        "title_ar": "Sr. Sales Development Representative",
        "company": "Ceros",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "   Location : Remote within the US \n ⬆  Reporting Into:  Director of Sales Development \n  Compensation : $60,000 - $65,000 base plus uncapped commission, with a total expected compensation of $85,000 to $110,000, based on qualifications and experience. \n \n  About Ceros  \n At Ceros, you’ll help ambit...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153077-sr-sales-development-representative",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/7f055a77-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159435-8",
        "title": "Sales Development Representative",
        "title_ar": "Sales Development Representative",
        "company": "dscout",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " At Dscout, we’re building the most flexible and powerful UX research platform on the market—trusted by the world’s top brands in finance (JP Morgan Chase, Intuit, Charles Schwab, PayPal), healthcare (Aya, Headspace), consumer goods (Keen, Verizon, Target, Northface), and tech (Google, Amazon, Faceb...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153078-sales-development-representative-10",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/03/f81f478b71cf9399121a6f91aafc0bd3.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159435-9",
        "title": "Customer Success Lead",
        "title_ar": "Customer Success Lead",
        "company": "dscout",
        "category": "customer_support",
        "category_ar": "دعم العملاء",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " At Dscout, we’re building the most flexible and powerful UX research platform on the market—trusted by the world’s top brands in finance (JP Morgan Chase, Intuit, Charles Schwab, PayPal), healthcare (Aya, Headspace), consumer goods (Keen, Verizon, Target, Northface), and tech (Google, Amazon, Faceb...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Customer Support & Success, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Customer Support & Success, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153074-customer-success-lead-2",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/03/f81f478b71cf9399121a6f91aafc0bd3.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789159436-10",
        "title": "Senior Software Engineer - Full Stack (Merchants)",
        "title_ar": "Senior Software Engineer - Full Stack (Merchants)",
        "company": "Deliveroo",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": "  About the Team  \n Merchant EMEA Engineering builds the technology that helps merchants join, grow, and operate successfully across our markets. \n Our organization brings together the strengths of Wolt and Deliveroo and supports merchants across 37 countries. We work across the merchant journey, in...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Software Engineering, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Software Engineering, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153075-senior-software-engineer-full-stack-merchants",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201029093237-178554.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158421-1",
        "title": "Education Designer UX UI and AI",
        "title_ar": "Education Designer UX UI and AI",
        "company": "Interaction Design Foundation",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Remote",
        "type_ar": "عن بُعد",
        "location": "Remote / Global",
        "salary": "Competitive",
        "description": " You're a designer who has facilitated workshops or built online courses, and you noticed that Â you loved it and that you were unusually good at it .  You know how to make complex skills easy to learn, and how to guide people in applying their new skills. As one of our Education Designers, you'll s...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in design, content writing, education\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام design, content writing, education\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-education-designer-ux-ui-and-ai-interaction-design-foundation-1137138",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "RemoteOK",
        "status": "active"
    },
    {
        "id": "job-1789158422-2",
        "title": "Course Writer and Editor UX UI and AI",
        "title_ar": "Course Writer and Editor UX UI and AI",
        "company": "Interaction Design Foundation",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Remote",
        "type_ar": "عن بُعد",
        "location": "Remote / Global",
        "salary": "Competitive",
        "description": " You're the one people trust with the words, whether you're writing them or fixing them. You noticed thatÂ  you loved it, and that you were unusually good at it . You turn rough, complex ideas into words people understand.  Now you get the opportunity to work with some of the most respected designer...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in design, content writing\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام design, content writing\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-course-writer-and-editor-ux-ui-and-ai-interaction-design-foundation-1137136",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "RemoteOK",
        "status": "active"
    },
    {
        "id": "job-1789158423-3",
        "title": "Renewables Project Scheduler",
        "title_ar": "Renewables Project Scheduler",
        "company": "Transportation Partners &amp; Logistics",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Black Bess, ",
        "salary": "Competitive",
        "description": "Apply   Description    Job Summary:   The BESS Project Scheduler is responsible for developing, maintaining, and analyzing detailed project schedules for Battery Energy Storage System (BESS) projects. This role plays a critical part in ensuring projects are delivered on time by providing accurate sc...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in sys admin, technical, customer support, testing\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام sys admin, technical, customer support, testing\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-renewables-project-scheduler-transportation-partners-amp-logistics-1137194",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "RemoteOK",
        "status": "active"
    },
    {
        "id": "job-1789158424-4",
        "title": "Senior Backend Engineer Build AI Agents",
        "title_ar": "Senior Backend Engineer Build AI Agents",
        "company": "Salesforge",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Remote",
        "type_ar": "عن بُعد",
        "location": "Remote / Global",
        "salary": "Competitive",
        "description": "Remote - Most sales tools help you send emails. Weâre building something different.At Salesforge, weâre creating autonomous AI agents that can:Find the right prospectsGenerate highly personalized outreachRun conversationsAnd book meetingsAll without human invo...  Please mention the word **EMPAT...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in golang, senior, sales, engineer\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام golang, senior, sales, engineer\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-senior-backend-engineer-build-ai-agents-salesforge-1137114",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "RemoteOK",
        "status": "active"
    },
    {
        "id": "job-1789158425-5",
        "title": "Senior Specialist Global QMS",
        "title_ar": "Senior Specialist Global QMS",
        "company": "Orca Bio",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Remote",
        "type_ar": "عن بُعد",
        "location": "Remote / Global",
        "salary": "Competitive",
        "description": " More than one million people in the United States today are fighting blood cancer. While a traditional allogeneic stem cell transplant has been the best hope for many, the transplant itself can prove fatal or lead to serious conditions, such as graft vs. host disease. Orca Bio is a commercial-stage...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in hr, sys admin, customer support, marketing\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام hr, sys admin, customer support, marketing\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-senior-specialist-global-qms-orca-bio-1137072",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "RemoteOK",
        "status": "active"
    },
    {
        "id": "job-1789158426-6",
        "title": "Application Support / SQL - (12 Month Maternity-leave Contract)",
        "title_ar": "Application Support / SQL - (12 Month Maternity-leave Contract)",
        "company": "Varicent",
        "category": "customer_support",
        "category_ar": "دعم العملاء",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Romania",
        "salary": "Competitive",
        "description": " \n At Varicent, we’re not just transforming the Sales Performance Management (SPM) market—we’re redefining how organizations achieve revenue success. Our cutting-edge SaaS solutions empower revenue leaders globally to design smarter go-to-market strategies, maximize seller performance, and unlock un...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Technical Support, Contract\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Technical Support, Contract\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153061-application-support-sql-12-month-maternity-leave-contract",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/c86166a8-221.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158427-7",
        "title": "Japanese - English PPC Freelancer (remote freelance)",
        "title_ar": "Japanese - English PPC Freelancer (remote freelance)",
        "company": "Brafton",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": " Brafton is one of the world's leading content marketing firms, with offices in Boston, London, Toronto and Sydney. We aspire to continually raise the bar on what people consider \"marketing content.\" We create result-focused strategies and content to drive SEO, social engagement and leads for our cl...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Marketing & Sales, Contract\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Marketing & Sales, Contract\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153060-japanese-english-ppc-freelancer-remote-freelance",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1791a8a0-221.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158428-8",
        "title": "Regional VP, Sales",
        "title_ar": "Regional VP, Sales",
        "company": "Sierra",
        "category": "sales",
        "category_ar": "المبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Spain",
        "salary": "Competitive",
        "description": "  About us  \n Sierra is the leading platform for customer-facing AI agents, working with many of the world's biggest brands — including The GAP, Rocket Mortgage, SoFi, Sutter Health, and SoftBank — to transform how they serve customers and grow their businesses. We are primarily an in-person company...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153065-regional-vp-sales",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/9877fe33-221.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158428-9",
        "title": "Product Support Specialist - EMEA",
        "title_ar": "Product Support Specialist - EMEA",
        "company": "Ashby",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Europe",
        "salary": "Competitive",
        "description": " Hello! I’m Barry, Support Manager at Ashby. I'm excited to share that we're hiring Product Support Specialists in Europe.  \n  Please note: we’re currently hiring Product Support Specialists to work one weekend day in exchange for a weekday off. This role will follow either a Tuesday–Saturday or Sun...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Technical Support, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Technical Support, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153069-product-support-specialist-emea",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/63864ee6-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158429-10",
        "title": "Analyst II, Credit",
        "title_ar": "Analyst II, Credit",
        "company": "Affirm",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": " At Affirm, we exist for the moments that matter—giving people a clear, predictable way to pay over time, with no hidden fees, no surprises, and no tradeoffs on what matters most. \n As a Merchant Risk Analyst, you will assess financial risk related to credit, fraud and identity associated with the m...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Finance & Accounting, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Finance & Accounting, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153067-analyst-ii-credit",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/fac7714c-221-1.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158430-11",
        "title": "Staff Platform Engineer - UK",
        "title_ar": "Staff Platform Engineer - UK",
        "company": "Ashby",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": " We’re looking for a curious, rigorous, problem-hungry platform software engineer (who codes!) to carry the ball as we bring Ashby to the big leagues. Ashby builds software that lets talent teams build an efficient, delightful, respectful hiring process. Similarly, you’re an engineer who wants to bu...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in DevOps & Infrastructure, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام DevOps & Infrastructure, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153062-staff-platform-engineer-uk",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/63864ee6-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158431-12",
        "title": "Solutions Engineer",
        "title_ar": "Solutions Engineer",
        "company": "ChargePoint",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": " About Us \n With electric vehicles expected to be nearly 30% of new vehicle sales by 2025 and more than 50% by 2040, electric mobility is becoming a reality. ChargePoint (NYSE: CHPT) is at the center of this revolution, powering one of the world’s leading EV charging networks and a comprehensive set...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153064-solutions-engineer-4",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/fa45d149-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158432-13",
        "title": "Senior Product Designer",
        "title_ar": "Senior Product Designer",
        "company": "Kinsta",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Hungary",
        "salary": "Competitive",
        "description": " Kinsta is one of the top providers of managed hosting for WordPress, with a growing club of 120,000+ businesses including startups, universities, and Fortune 500 firms. We're motivated by excellent quality and proud to have received a 97% satisfaction rating from our customers. \n That's because, to...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Web, UI & UX Design, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Web, UI & UX Design, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153063-senior-product-designer-11",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/56d3a520-221.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158433-14",
        "title": "Temporary Creative Production Project Manager - Germany",
        "title_ar": "Temporary Creative Production Project Manager - Germany",
        "company": "Brafton",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Germany",
        "salary": "Competitive",
        "description": " Brafton is one of the world's leading content marketing firms, with offices in Boston, London, Toronto and Sydney. We aspire to continually raise the bar on what people consider \"marketing content.\" We create result-focused strategies and content to drive SEO, social engagement and leads for our cl...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Project & Program Management, Contract\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Project & Program Management, Contract\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153068-temporary-creative-production-project-manager-germany",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1791a8a0-221.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158434-15",
        "title": "Lead Software Engineer",
        "title_ar": "Lead Software Engineer",
        "company": "CoderPad",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "France",
        "salary": "Competitive",
        "description": " We are looking for a Lead Software Engineer to join our EMEA Engineering team in France (remote). \n  What does a Lead Software Engineer at CoderPad do?  \n As a Lead Software Engineer at CoderPad, you’ll design, build, and ship features across our full stack — taking ownership of complex technical p...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Software Engineering, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Software Engineering, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153066-lead-software-engineer",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/57995875e79f20bb0cd2cadad1b52775.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158435-16",
        "title": "Proposal Manager",
        "title_ar": "Proposal Manager",
        "company": "D2L",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": " D2L is a cloud company that is modernizing education and building the Future of Work. The old models of teaching and learning are in the midst of the largest transformation in history, and D2L is at the heart of that fundamental shift.  \n New models of teaching and learning enable a personalized, s...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Content & Editorial, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Content & Editorial, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153051-proposal-manager",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/0ac958a8-221.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158436-17",
        "title": "Senior Product Manager - Createspace, USA Based",
        "title_ar": "Senior Product Manager - Createspace, USA Based",
        "company": "D2L",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " D2L is a cloud company that is modernizing education and building the Future of Work. The old models of teaching and learning are in the midst of the largest transformation in history, and D2L is at the heart of that fundamental shift.  \r\n New models of teaching and learning enable a personalized, ...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Product & Operations, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Product & Operations, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153059-senior-product-manager-createspace-usa-based",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/0ac958a8-221.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158436-18",
        "title": "Senior Product Manager - Createspace, Canada Based",
        "title_ar": "Senior Product Manager - Createspace, Canada Based",
        "company": "D2L",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Canada",
        "salary": "Competitive",
        "description": " D2L is a cloud company that is modernizing education and building the Future of Work. The old models of teaching and learning are in the midst of the largest transformation in history, and D2L is at the heart of that fundamental shift.  \n New models of teaching and learning enable a personalized, s...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Product & Operations, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Product & Operations, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153055-senior-product-manager-createspace-canada-based",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/0ac958a8-221.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158437-19",
        "title": "Account Executive - Enterprise, Grower",
        "title_ar": "Account Executive - Enterprise, Grower",
        "company": "Stripe",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "  Who we are  \n  About Stripe  \n Stripe is a financial infrastructure platform for businesses. Millions of companies—from the world’s largest enterprises to the most ambitious startups—use Stripe to accept payments, grow their revenue, and accelerate new business opportunities. Our mission is to inc...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Sales, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Sales, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153057-account-executive-enterprise-grower",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201011073943-272457.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158438-20",
        "title": "Abuse Research Engineer",
        "title_ar": "Abuse Research Engineer",
        "company": "Stripe",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " Who we are \n About Stripe \n Stripe is a financial infrastructure platform for businesses. Millions of companies—from the world’s largest enterprises to the most ambitious startups—use Stripe to accept payments, grow their revenue, and accelerate new business opportunities. Our mission is to increas...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Cybersecurity, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Cybersecurity, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153053-abuse-research-engineer",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201011073943-272457.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158439-21",
        "title": "FP&A Manager",
        "title_ar": "FP&A Manager",
        "company": "AlertMedia",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "  Do work that matters.    \n At  AlertMedia , we help organizations protect their people, operations, and brand. Our modern  Risk Intelligence and Response platform  empowers teams to detect emerging threats, assess impact, and respond with confidence. We believe building resilience should be simple...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Finance & Accounting, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Finance & Accounting, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153054-fpa-manager-2",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/03/38d8b6a506d39ead683086c25f6ac132.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158440-22",
        "title": "Customer Success Manager",
        "title_ar": "Customer Success Manager",
        "company": "Ping Identity",
        "category": "customer_support",
        "category_ar": "دعم العملاء",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "  About Ping Identity:   \n At Ping Identity, we believe in making digital experiences both secure and seamless for all users, without compromise. We call this digital freedom. And it's not just something we provide our customers. It's something that inspires our company. People don't come here to jo...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Customer Support & Success, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Customer Support & Success, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153052-customer-success-manager-45",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/09/63e8d5a6-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158441-23",
        "title": "Product Manager",
        "title_ar": "Product Manager",
        "company": "AlertMedia",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "  Do work that matters.     \n At  AlertMedia , we help organizations protect their people, operations, and brand. Our modern  Risk Intelligence and Response platform  empowers teams to detect emerging threats, assess impact, and respond with confidence. We believe building resilience should be simpl...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Product & Operations, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Product & Operations, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153058-product-manager-4",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/03/38d8b6a506d39ead683086c25f6ac132.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158442-24",
        "title": "Cyber Security Engineer II",
        "title_ar": "Cyber Security Engineer II",
        "company": "Ping Identity",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "UK",
        "salary": "Competitive",
        "description": "  About Ping Identity:   \n At Ping Identity, we believe in making digital experiences both secure and seamless for all users, without compromise. We call this digital freedom. And it's not just something we provide our customers. It's something that inspires our company. People don't come here to jo...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Cybersecurity, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Cybersecurity, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153056-cyber-security-engineer-ii",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/09/63e8d5a6-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158442-25",
        "title": "Financial Systems Manager",
        "title_ar": "Financial Systems Manager",
        "company": "AlertMedia",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": "  Do work that matters.    \n  At AlertMedia,  we help organizations protect their people, operations, and brand. Our modern  Risk Intelligence and Response  platform empowers teams to detect emerging threats, assess impact, and respond with confidence. We believe building resilience should be simple...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in Finance & Accounting, Full-Time\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام Finance & Accounting, Full-Time\n✅ مهارات تواصل قوية",
        "applyUrl": "https://jobicy.com/jobs/153050-financial-systems-manager",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/03/38d8b6a506d39ead683086c25f6ac132.jpeg",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Jobicy",
        "status": "active"
    },
    {
        "id": "job-1789158443-26",
        "title": "Inside Sales Contractor",
        "title_ar": "Inside Sales Contractor",
        "company": "Credit Wellness, LLC",
        "category": "sales",
        "category_ar": "المبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Worldwide",
        "salary": "Competitive",
        "description": "  About Us  \n  We are a financial services start up focusing on helping to improve consumer credit profiles. We are currently seeking KPI driven sales representatives looking to earn up to 45K in their first year while working remotely. We offer comprehensive training and continuous sales coaching t...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in CRM, google sheets, financial services, Inside Sales\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام CRM, google sheets, financial services, Inside Sales\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/sales/inside-sales-contractor-2086540",
        "image": "https://remotive.com/job/2086540/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158444-27",
        "title": "Tier III Service Desk Engineer",
        "title_ar": "Tier III Service Desk Engineer",
        "company": "Unio Digital",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Worldwide",
        "salary": "Competitive",
        "description": " Unió Digital is an Arizona-based managed service provider (MSP) delivering Managed IT Services, Low Voltage Cabling, Access Control, Video Surveillance, and Intrusion Services. We believe technology should be intuitive, not intimidating. \n   \n We are looking for an experienced Tier 3 Service Desk T...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in azure, cisco, security, video\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام azure, cisco, security, video\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/information-technology/tier-iii-service-desk-engineer-2091045",
        "image": "https://remotive.com/job/2091045/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158445-28",
        "title": "Freelance Writer",
        "title_ar": "Freelance Writer",
        "company": "IAPWE",
        "category": "other",
        "category_ar": "أخرى",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Worldwide",
        "salary": "Competitive",
        "description": " Our organization is seeking content writers to create articles and blog posts on a variety of topics. \n   \n The rate of pay is $20 per 100 words (this comes out to approximately $100 per article or $50 per hour). \n   \n Some topics you may be asked to write about include the following (you can alway...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in REST\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام REST\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/writing/freelance-writer-1185979",
        "image": "https://remotive.com/job/1185979/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158446-29",
        "title": "Freelance Copywriter",
        "title_ar": "Freelance Copywriter",
        "company": "Coalition Technologies ",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Worldwide",
        "salary": "Competitive",
        "description": " CT Marketing Agency is seeking skilled Freelance Copywriters to write high-quality, SEO-driven content for eCommerce and lead generation websites. This is a freelance, project-based writing role. \n   \n The ideal candidate has excellent English writing skills, strong research ability, and experience...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in accounting, excel, research, data analysis\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام accounting, excel, research, data analysis\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/writing/freelance-copywriter-1749306",
        "image": "https://remotive.com/job/1749306/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158447-30",
        "title": "Senior React Full-stack Developer",
        "title_ar": "Senior React Full-stack Developer",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "LATAM, Europe, USA, Canada, APAC",
        "salary": "Competitive",
        "description": " Are you a talented Senior Developer looking for a remote job that lets you show your skills and get decent compensation? Look no further than  Lemon.io  — the marketplace that connects you with hand-picked startups in the US and Europe. \n     \n  What we offer:  \n \n The rate depends on your seniorit...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in .Net, android, AWS, backend\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام .Net, android, AWS, backend\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-react-full-stack-developer-2091101",
        "image": "https://remotive.com/job/2091101/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158448-31",
        "title": "Senior QA Engineer",
        "title_ar": "Senior QA Engineer",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Europe",
        "salary": "Competitive",
        "description": " Are you a talented QA looking for a remote job that lets you show your skills and get better compensation and career growth? Look no further than  Lemon.io  - the marketplace that connects you with hand-picked startups in the US and Europe. \n     \n  Requirements:  \n \n \n 3+ years of experience in au...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in .Net, android, C, C#\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام .Net, android, C, C#\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/qa/senior-qa-engineer-2091100",
        "image": "https://remotive.com/job/2091100/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158449-32",
        "title": "Senior DevOps Engineer",
        "title_ar": "Senior DevOps Engineer",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "LATAM, Europe, USA, Canada, APAC",
        "salary": "Competitive",
        "description": " Are you a talented Senior DevOps looking for a remote job that lets you show your skills and get decent compensation? Look no further than  Lemon.io  — the marketplace that connects you with hand-picked startups in the US and Europe. \n   \n   \n We currently have multiple DevOps openings open at once...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in .Net, android, AWS, azure\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام .Net, android, AWS, azure\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/devops/senior-devops-engineer-2091099",
        "image": "https://remotive.com/job/2091099/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158449-33",
        "title": "Content Reviewer - English US",
        "title_ar": "Content Reviewer - English US",
        "company": "TELUS Digital",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " Our global AI Community is a vibrant network of more than one million contributors from \n diverse backgrounds who help customers collect, enhance, train, translate, and localize \n content to build better AI models. Become part of our growing community and contribute \n to the development of innovati...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in android, ios, social media, AI/ML\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام android, ios, social media, AI/ML\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/all-others/content-reviewer-english-us-2091105",
        "image": "https://remotive.com/job/2091105/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158450-34",
        "title": "Senior Golang Developer",
        "title_ar": "Senior Golang Developer",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Europe, USA, UK, Canada, Australia, Singapore",
        "salary": "Competitive",
        "description": " Are you a talented Senior Developer looking for a remote job that lets you show your skills and get decent compensation? Look no further than  Lemon.io  — the marketplace that connects you with hand-picked startups in the US and Europe. \n   \n We are currently seeking a Senior Software Engineer for ...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in .Net, android, C, C#\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام .Net, android, C, C#\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-golang-developer-2091098",
        "image": "https://remotive.com/job/2091098/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158451-35",
        "title": "Senior Data Engineer",
        "title_ar": "Senior Data Engineer",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "LATAM, Europe, USA, Canada, APAC",
        "salary": "Competitive",
        "description": " Are you a talented Senior Data Engineer looking for a remote job that lets you show your skills and get decent compensation? Look no further than  Lemon.io  — the marketplace that connects you with hand-picked startups in the US and Europe. \n     \n  What we offer:  \n \n The rate depends on your skil...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in .Net, android, apache, AWS\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام .Net, android, apache, AWS\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-data-engineer-2091097",
        "image": "https://remotive.com/job/2091097/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158452-36",
        "title": "Senior Independent AI Engineer / Architect",
        "title_ar": "Senior Independent AI Engineer / Architect",
        "company": "A.Team",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Americas, Europe, Israel",
        "salary": "Competitive",
        "description": " Senior Independent AI Engineer / Architect \n  Remote | Americas, Europe, or Israel  \n   \n Most AI engineers can find work. \n   \n Finding work worth doing is harder. \n   \n A.Team is an invite-only network of senior AI engineers, ML engineers, and AI architects building production AI systems for star...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in go, UI/UX, wordpress, chat\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام go, UI/UX, wordpress, chat\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-independent-ai-engineer-architect-1919266",
        "image": "https://remotive.com/job/1919266/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158453-37",
        "title": "Senior Independent Software Developer",
        "title_ar": "Senior Independent Software Developer",
        "company": "A.Team",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Americas, Europe, Israel",
        "salary": "Competitive",
        "description": "  You must be located in the Americas, Europe, or Israel to apply.     A·Team  is a VC-backed, stealth, application-only home on the internet for senior independent software builders to team up with hand-picked, high-growth companies on their next big thing.  \n After talking with hundreds of indepen...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in go, wordpress, chat, apple\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام go, wordpress, chat, apple\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-independent-software-developer-1919265",
        "image": "https://remotive.com/job/1919265/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158454-38",
        "title": "Head of Marketing & Communications",
        "title_ar": "Head of Marketing & Communications",
        "company": "garden3d",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Worldwide",
        "salary": "Competitive",
        "description": "  We are hiring a  Head of Marketing &amp; Communications  to tell the garden3d story across the internet, from wherever in the world you happen to be.  \n  More details if you check our  original job posting link   \n  About  garden3d   \n We are worker owned creative collective, innovating on everyth...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in C, video, open source, AI/ML\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام C, video, open source, AI/ML\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/marketing/head-of-marketing-communications-2091068",
        "image": "https://remotive.com/job/2091068/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158455-39",
        "title": "Tech Lead Full-Stack Rails Engineer",
        "title_ar": "Tech Lead Full-Stack Rails Engineer",
        "company": "Mitre Media",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA, Canada, USA timezones",
        "salary": "Competitive",
        "description": "  About Mitre Media  \n  Mitre Media is redefining FinTech with AI-driven tools that empower millions of investors. Our portfolio, including Dividend.com and MutualFunds.com, leverages LLMs to deliver novel data insights and visually rich user experiences. For over a decade, we’ve served individual i...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in api, CSS, docker, elasticsearch\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام api, CSS, docker, elasticsearch\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/software-development/tech-lead-full-stack-rails-engineer-2069746",
        "image": "https://remotive.com/job/2069746/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158455-40",
        "title": "Face Deduplication Collection",
        "title_ar": "Face Deduplication Collection",
        "company": "TELUS Digital",
        "category": "other",
        "category_ar": "أخرى",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "USA",
        "salary": "Competitive",
        "description": " The project compensation rate is $0.55 USD per accepted image.   The objective of this project is to collect a large and diverse dataset of current neutral selfies, head-pose captures, and historical facial images to support machine-learning research and facial recognition model training at TELUS. ...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in research\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام research\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/all-others/face-deduplication-collection-2091093",
        "image": "https://remotive.com/job/2091093/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789158456-41",
        "title": "Remote Office Assistant",
        "title_ar": "Remote Office Assistant",
        "company": "Coalition Technologies ",
        "category": "development",
        "category_ar": "تطوير وبرمجة",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Worldwide",
        "salary": "Competitive",
        "description": " Coalition Technologies is seeking a reliable, detail-oriented, and highly organized Remote Office Assistant to support administrative, bookkeeping, billing, reporting, data entry, and internal operations tasks. This role is ideal for someone with strong communication skills, discretion, attention t...",
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in CSS, excel, frontend, git\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام CSS, excel, frontend, git\n✅ مهارات تواصل قوية",
        "applyUrl": "https://remotive.com/remote-jobs/marketing/remote-office-assistant-1680495",
        "image": "https://remotive.com/job/1680495/logo",
        "postedAt": "2026-09-11",
        "verified": true,
        "source": "Remotive",
        "status": "active"
    },
    {
        "id": "job-1789156352-1",
        "title": "External Data Specialist",
        "title_ar": "External Data Specialist",
        "company": "eClinical Solutions",
        "category": "development",
        "category_ar": "برمجة وتطوير",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote",
        "salary": "Competitive / تنافسي",
        "description": "eClinical Solutions helps life sciences organizations around the world accelerate clinical development initiatives with expert data services and the elluminate Clinical Data Cloud â the foundation o...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in cloud, exec, stats\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (cloud, exec, stats)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-external-data-specialist-eclinical-solutions-1137375",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-2",
        "title": "Business Development Manager",
        "title_ar": "Business Development Manager",
        "company": "Libertex Group",
        "category": "development",
        "category_ar": "برمجة وتطوير",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "ÙØ³ÙØ·, ÙØ³ÙØ· ÙØ³ÙØ· Ø¹ÙØ§Ù",
        "salary": "Competitive / تنافسي",
        "description": " Libertex Group Overview   Established in 1997, the Libertex Group is an international powerhouse with over 28 years of financial markets expertise.  Over the years, the Libertex Group has helped shap...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in product manager, exec, design, crypto, marketing\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (product manager, exec, design, crypto, marketing)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-business-development-manager-libertex-group-1137373",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-3",
        "title": "Quality Dispense Technician North",
        "title_ar": "Quality Dispense Technician North",
        "company": "Thatchers Cider",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Full-time",
        "type_ar": "دوام كامل",
        "location": "Greater Newcastle Area, ",
        "salary": "Competitive / تنافسي",
        "description": "As we grow so does our team. Weâre looking for a Quality Dispense Technician to join our team. We are looking for a practical person, who enjoys problem solving and wants to offer exceptional custom...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in education, marketing, finance, exec, excel\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (education, marketing, finance, exec, excel)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-quality-dispense-technician-north-thatchers-cider-1137374",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-4",
        "title": "Social Comms",
        "title_ar": "Social Comms",
        "company": "NOPE",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote / Global",
        "salary": "Competitive / تنافسي",
        "description": " Important:  This is a contract/part-time role: 10-20 hrs/week - rate $40-50/hr   NOPE is an AI safety company with a unique goal; we do not concern ourselves with bio or cyber-risks or other Hollywoo...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in marketing, education, technical, content writing, social media\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (marketing, education, technical, content writing, social media)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-social-comms-nope-1137314",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-5",
        "title": "AI Response Analyst",
        "title_ar": "AI Response Analyst",
        "company": "iMerit Technology",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote / Global",
        "salary": "Competitive / تنافسي",
        "description": " The work  iMerit, an EXL company, is looking for detail oriented analysts to evaluate and rank AI generated responses to image based prompts. You will judge answers on accuracy, relevance, clarity, c...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in content writing, quality assurance, ai\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (content writing, quality assurance, ai)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-ai-response-analyst-imerit-technology-1137309",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-6",
        "title": "Junior Crypto Analyst & Trader",
        "title_ar": "Junior Crypto Analyst & Trader",
        "company": "Empire Assets",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote / Global",
        "salary": "Competitive / تنافسي",
        "description": "   Application URL   https://empireground.com/work/remoteok   Empire Assets is a young and rapidly developing company working in the field of digital markets and analytics. We bring together enterpris...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in part time, junior, analyst, crypto, other\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (part time, junior, analyst, crypto, other)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-junior-crypto-analyst-trader-empire-assets-1137307",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-7",
        "title": "Customer Support & Success Specialist",
        "title_ar": "Customer Support & Success Specialist",
        "company": "Warehance",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote / Global",
        "salary": "Competitive / تنافسي",
        "description": " Customer Success &amp; Support Specialist  Warehance helps businesses manage orders, inventory, shipping, and fulfillment.  Weâre looking for someone who is  good with people, sharp with details, a...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in customer support\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (customer support)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-customer-support-success-specialist-warehance-1137302",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-8",
        "title": "Regional Sales Manager",
        "title_ar": "Regional Sales Manager",
        "company": "OrderYOYO",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote / Global",
        "salary": "Competitive / تنافسي",
        "description": "&lt;p&gt;&lt;strong&gt;Regional Sales Manager&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p class=&quot;MsoNormal&quot;&gt;&lt;strong&gt;Netherlands - Field based&lt;/strong&gt;&lt;/p&gt;&lt;p clas...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in exec, customer support, marketing, scheme, mobile\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (exec, customer support, marketing, scheme, mobile)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-regional-sales-manager-orderyoyo-1137279",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    },
    {
        "id": "job-1789156352-9",
        "title": "AI Engineer Data APIs",
        "title_ar": "AI Engineer Data APIs",
        "company": "Benzinga",
        "category": "development",
        "category_ar": "برمجة وتطوير",
        "type": "Remote",
        "type_ar": "عن بعد",
        "location": "Remote / Global",
        "salary": "Competitive / تنافسي",
        "description": "Remote - Before you read further: applying to this role requires a Loom video walkthrough under 5 minutes of the best thing you have built, plus a repo or live link. Tell us the hardest problem you hi...",
        "description_ar": "فرصة عمل متميزة مع إمكانية التقديم المباشر والانضمام لفريق عمل ديناميكي.",
        "requirements": "• Relevant industry experience\n• Proficient in golang, video, engineer\n• Strong problem solving and communication",
        "requirements_ar": "• خبرة مهنية سابقة في المجال\n• إتقان أدوات وتقنيات العمل (golang, video, engineer)\n• مهارات تواصل وعمل جماعي عالية",
        "applyUrl": "https://remoteOK.com/remote-jobs/remote-ai-engineer-data-apis-benzinga-1137224",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active"
    }
],

  init: function() {
    if (!localStorage.getItem(this.KEYS.CATEGORIES)) {
      localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(this.defaultCategories));
    }
    if (!localStorage.getItem(this.KEYS.ARTICLES)) {
      localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(this.defaultArticles));
    }
    // Auto sync jobs if updated or empty
    try {
      const stored = JSON.parse(localStorage.getItem(this.KEYS.JOBS) || '[]');
      if (!stored.length || stored.length < this.defaultJobs.length) {
        localStorage.setItem(this.KEYS.JOBS, JSON.stringify(this.defaultJobs));
      }
    } catch(e) {
      localStorage.setItem(this.KEYS.JOBS, JSON.stringify(this.defaultJobs));
    }
  },

  // Helper to localize category
  localizeCategory: function(cat) {
    if (!cat) return null;
    const isAr = (window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'ar');
    return {
      ...cat,
      name: isAr ? (cat.name_ar || cat.name) : (cat.name_en || cat.name)
    };
  },

  // Helper to localize article
  localizeArticle: function(art) {
    if (!art) return null;
    const isAr = (window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'ar');
    return {
      ...art,
      title: isAr ? (art.title_ar || art.title) : (art.title_en || art.title),
      excerpt: isAr ? (art.excerpt_ar || art.excerpt) : (art.excerpt_en || art.excerpt),
      content: isAr ? (art.content_ar || art.content) : (art.content_en || art.content),
      categoryName: isAr ? (art.categoryName_ar || art.categoryName) : (art.categoryName_en || art.categoryName),
      author: isAr ? (art.author_ar || art.author) : (art.author_en || art.author)
    };
  },

  /* --- Categories API --- */
  getCategories: function() {
    this.init();
    const categories = JSON.parse(localStorage.getItem(this.KEYS.CATEGORIES) || '[]');
    return categories.map(c => this.localizeCategory(c));
  },

  addCategory: function(name, description) {
    const categories = JSON.parse(localStorage.getItem(this.KEYS.CATEGORIES) || '[]');
    const slug = name.trim().toLowerCase().replace(/[\s\W]+/g, '-');
    const newCat = {
      id: 'cat-' + Date.now(),
      name: name.trim(),
      name_en: name.trim(),
      name_ar: name.trim(),
      slug: slug,
      description: description ? description.trim() : ''
    };
    categories.push(newCat);
    localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
    return newCat;
  },

  /* --- Articles API --- */
  getArticles: function(includeDrafts = false) {
    this.init();
    const rawArticles = JSON.parse(localStorage.getItem(this.KEYS.ARTICLES) || '[]');
    const filtered = includeDrafts ? rawArticles : rawArticles.filter(a => a.status === 'published');
    return filtered.map(a => this.localizeArticle(a));
  },

  getArticleBySlug: function(slug) {
    const articles = this.getArticles(true);
    return articles.find(a => a.slug === slug);
  },

  getArticleById: function(id) {
    const articles = this.getArticles(true);
    return articles.find(a => a.id === id);
  },

  /* --- Jobs API --- */
  getJobs: function(includeInactive = false) {
    this.init();
    const isAr = (window.CareerAI.i18n && window.CareerAI.i18n.getLang() === 'ar');
    let jobs = [];
    try {
      jobs = JSON.parse(localStorage.getItem(this.KEYS.JOBS) || '[]');
    } catch(e) {
      jobs = [];
    }
    if (!jobs.length || (this.defaultJobs && jobs.length < this.defaultJobs.length)) {
      jobs = this.defaultJobs || [];
    }
    const filtered = includeInactive ? jobs : jobs.filter(j => j.status !== 'inactive');
    return filtered.map(j => ({
      ...j,
      title: isAr ? (j.title_ar || j.title) : (j.title_en || j.title),
      category: isAr ? (j.category_ar || j.category) : (j.category_en || j.category),
      location: isAr ? (j.location_ar || j.location) : (j.location_en || j.location),
      type: isAr ? (j.type_ar || j.type) : (j.type_en || j.type),
      description: isAr ? (j.description_ar || j.description) : (j.description_en || j.description),
      requirements: isAr ? (j.requirements_ar || j.requirements) : (j.requirements_en || j.requirements)
    }));
  },

  /* --- Admin Auth Guard --- */
  isAdminLoggedIn: function() {
    return localStorage.getItem(this.KEYS.ADMIN_SESSION) === 'true';
  },

  loginAdmin: function(usernameOrEmail, password) {
    const u = (usernameOrEmail || '').trim().toLowerCase();
    const p = (password || '').trim();

    const validUser = (u === 'adamlmnawe914@gmail.com' || u === 'admin' || u === 'adam');
    const validPass = (p === 'Career1000Factor' || p === 'admin123');

    if (validUser && validPass) {
      localStorage.setItem(this.KEYS.ADMIN_SESSION, 'true');
      localStorage.setItem('careerai_admin_user', u);
      return true;
    }
    return false;
  },

  logoutAdmin: function() {
    localStorage.removeItem(this.KEYS.ADMIN_SESSION);
    localStorage.removeItem('careerai_admin_user');
  }
};

// Initialize DB immediately
window.CareerAI.db.init();
