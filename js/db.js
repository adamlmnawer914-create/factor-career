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
        "id": "job-1789528147-1",
        "title": "Core Faculty - Full-time Nursing (FNP)",
        "title_ar": "Core Faculty - Full-time Nursing (FNP) (أخرى)",
        "company": "University of St. Augustine for Health Sciences",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$59,758 - $152,617 USD",
        "description": "The mission of the University of St. Augustine for Health Sciences is the development of professional health care practitioners through innovation, individualized, and quality classroom, clinical, and distance education. GENERAL SUMMARY The University of St. Augustine for Health Sciences (USAHS) seeks a dynamic, innovative faculty member for a full-time Core Faculty position in the nursing programs. Responsibilities will include teaching activities primarily in one or more of the following: Master of Science in Nursing program, the Family Nurse Practice role specialty courses, Psych Mental Health specialty courses and the Doctor of Nurse Practice program. ESSENTIAL DUTIES AND RESPONSIBILITIES Teaching \n Effectively and proficiently using online technology and resources including providing informed feedback and critique in a thoughtful, well-written and timely manner. \n Optimizing the online environment to be conducive to student learning by developing creative, challenging, and evidence-based learning opportunities. \n Uses learning assessment information to improve teaching and curriculum; participates in quality improvement initiatives to meet program and institutional goals. \n Adheres to all USAHS faculty expectations, which are clearly set forth to the faculty member at the start of his/her employment with the University. \n Upholds the expectations of masters/doctoral level work with respect to the program and course learning outcomes. \n Participates in a culture of assess",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة University of St. Augustine for Health Sciences. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Nursing-faculty",
            "Academic-nursing"
        ],
        "applyUrl": "https://himalayas.app/companies/university-of-st-augustine-for-health-sciences/jobs/core-faculty-full-time-nursing-fnp",
        "logo": "https://cdn-images.himalayas.app/g0gb3b7de6lmw1gfa6lmwlwsadr3",
        "companyLogo": "https://cdn-images.himalayas.app/g0gb3b7de6lmw1gfa6lmwlwsadr3",
        "image": "https://cdn-images.himalayas.app/g0gb3b7de6lmw1gfa6lmwlwsadr3",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528147-2",
        "title": "Remote Opportunity - Take Back Control of Your Time",
        "title_ar": "Remote Opportunity - Take Back Control of Your Time (تصميم وإبداع)",
        "company": "Global Elite Empire Consultants",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Looking for motivated individuals who want more out of their income and career. \n This is a remote opportunity where you’ll work directly with individuals who haverequested help understanding their financial protection options. No cold outreach. \n If you’re someone who is competitive, coachable, and willing to put in the work, this can be a strong income opportunity with long-term growth. \n What You’ll Be Doing \n Speak with clients who haverequested information \n Help families understand available benefit options \n Guide clients through a simple enrollment process \n Build long-term relationships and client portfolios \n What Is Provided \n Pre-qualified inbound leads (no cold calling) \n Step-by-step training system (no experience required) \n Remote work environment \n Flexible schedule (full-time or part-time) \n Ongoing mentorship and support \n Compensation \n Performance-based income \n Competitive commissions with unlimited potential \n Opportunities for leadership and team-building \n Who This Is For \n Individuals tired of capped hourly income \n Competitive, self-motivated people \n Those willing to learn and follow a proven system \n Sales experience is helpful, but not required \n Who This Is NOT For \n Those looking for a fixed hourly paycheck \n Individuals unwilling to be coached \n People who need constant supervision \n Why People Choose This Opportunity \n No cold outreach \n Work from anywhere \n Income tied to effort, not time \n Clear path to leadership \n Next Step \n If you’re op",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-sales",
            "Financial-services-sales",
            "Direct-sales",
            "Sales"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/remote-opportunity-take-back-control-of-your-time",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-3",
        "title": "Associate Commissioning Panel Chair",
        "title_ar": "Associate Commissioning Panel Chair (برمجة وتكنولوجيا)",
        "company": "Egis Group",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "As an Associate Commissioning Panel Chair (CPC) you will have already undertaken or will have the relevant experience to undertake the BP106 Technical and Process Building Blocks with aspirations to become a Commissioning Panel Chair. You will be willing to and have experience to undertake other relevant Project Support roles (PM, Planner, PD Rep etc.) to support your Commissioning Panel Chair journey. Responsibilities Commissioning Panel Responsibilities \n Chair commissioning panel meetings for non-complex schemes (Asset Replacements), subject to undertaking BP106 Technical and Process Building Blocks, ensuring compliance with BP106 requirements. \n Lead technical discussions and decision-making during commissioning working parties. \n Ensure all commissioning activities comply with National Grid Safety Rules, commissioning handbooks, company policies, and industry regulations. \n Assess and manage risks associated with commissioning activities. \n Confirm adherence to operational procedures, method statements, and risk assessments. \n Ensure that commissioning documentation, including test plans, procedures, and reports and reviewed and approved. \n Verify that all pre-commissioning checks, system testing, and functional tests meet required standards. \n Liaise with Project Managers, Engineers, Site Managers, and National Grid representatives. \n Identify and address commissioning issues, implementing corrective actions where necessary. \n Ensure commissioning records, as-built docu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Egis Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Electrical-engineering",
            "Energy-infrastructure",
            "High-voltage-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/egis-group/jobs/associate-commissioning-panel-chair-2245384379",
        "logo": "https://cdn-images.himalayas.app/hu0o073rp6livk2qmcea7kcy23u5",
        "companyLogo": "https://cdn-images.himalayas.app/hu0o073rp6livk2qmcea7kcy23u5",
        "image": "https://cdn-images.himalayas.app/hu0o073rp6livk2qmcea7kcy23u5",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-4",
        "title": "Data Engineer (Research)",
        "title_ar": "مهندس ومطور برمجيات (Data Engineer (Research))",
        "company": "XTB",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "$14,000 - $17,800 PLN",
        "description": "XTB is a global company from the financial industry, focusing on online trading of financial instruments. We are the largest FinTech in Poland and a leader in Central and Eastern Europe, and the range of our operations covers several countries, including Asia and South America. At XTB , we focus on the development of our employees, giving them opportunities to gain knowledge and skills in various fields, as well as offering a number of training and development programs. If you are looking for challenges and want to gain valuable experience in an international business environment, XTB is the right place for you. \n We are a certified Great Place to Work company. \n We are looking for a Data Engineer to join the Core Data Platform team to co-create and develop a centralized data platform used by teams across the company. In this role, you will be responsible for building scalable data integration mechanisms from various source systems, developing shared platform components and standards, and ensuring high data quality, reliability, and consistency. \n Responsibilities \n Designing, building, and maintaining scalable data processing pipelines using SQL, Python, and Apache Spark / PySpark. \n Working with raw data and designing methods for its integration into the data platform. \n Developing CI/CD pipelines for data engineering solutions. \n Creating and maintaining Infrastructure as Code solutions. \n Integrating the data platform with other systems and applications. \n Participating i",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة XTB. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-engineering",
            "Business-intelligence",
            "Product-and-technology"
        ],
        "applyUrl": "https://himalayas.app/companies/xtb/jobs/data-engineer-research",
        "logo": "https://cdn-images.himalayas.app/fvjcv6xp4svntkiglajko327ba13",
        "companyLogo": "https://cdn-images.himalayas.app/fvjcv6xp4svntkiglajko327ba13",
        "image": "https://cdn-images.himalayas.app/fvjcv6xp4svntkiglajko327ba13",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-5",
        "title": "Rovo & AI Prompt Engineer",
        "title_ar": "مهندس ومطور برمجيات (Rovo & AI Prompt Engineer)",
        "company": "Accenture",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$80,400 - $266,300 USD",
        "description": "We Are: Strategic Technology Effectiveness, part of Accenture 's Technology Strategy & Transformation Organization. We rebuild how large enterprises define, design and govern software, and we design and implement the agentic software and processes that run it. That work changes the operating model an engineering organization runs on, the ways of working underneath it, and the tooling that makes both of those real. We start with evidence. Cycle time, flow efficiency, WIP and throughput show where delivery stalls, and that diagnosis sets the target. What we design from it is AI-native by construction. We redesign intake and prioritization, so demand meets real capacity, and rebuild the path from request to release so planning, build, review, testing and deployment connect to each other instead of handing off through spreadsheets and status meetings. Most of our build work sits upstream, where the cost of rework gets set: requirements generation, user story synthesis, design review, architecture validation. That means creator and reviewer agent patterns, tool-use orchestration, and multi-agent workflows on enterprise frameworks, with a working understanding of what each pattern costs in tokens and where it breaks. We treat the lifecycle as a system and a product itself - built to operate at a speed required for the AI era. Then we make it stick. Engineering teams move to AI-augmented work and stay there, which is what separates a delivery organization where AI is how software ge",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Accenture. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Prompt-engineering",
            "Ai-agent-development",
            "Conversational-ai",
            "Knowledge-management"
        ],
        "applyUrl": "https://himalayas.app/companies/accenture/jobs/rovo-ai-prompt-engineer",
        "logo": "https://cdn-images.himalayas.app/2il7pw0pz79q3orcrnv84jhhhjw2",
        "companyLogo": "https://cdn-images.himalayas.app/2il7pw0pz79q3orcrnv84jhhhjw2",
        "image": "https://cdn-images.himalayas.app/2il7pw0pz79q3orcrnv84jhhhjw2",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-6",
        "title": "Senior Business Development Specialist - Commercial Trucking Insurance Underwrit",
        "title_ar": "Senior Business Development Specialist - Commercial Trucking Insurance Underwrit (تسويق ومبيعات)",
        "company": "AF Group",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$110,000 - $179,000 USD",
        "description": "SUMMARY: This Senior Business Development Specialist - Commercial Trucking Insurance Underwriter role is responsible for the development and management of independent agency relationships within our commercial trucking line, including the development of new business and retention of existing business in a region or territory. Reviews, analyzes, approves or rejects complex business within letter of authority. Serve as liaison with company personnel regarding company business opportunities and problem resolution. Responsible for assisting in establishing the territory’s or region’s overall agency plan. RESPONSIBILITIES/TASKS: \n Calculate, prepare, and develop premium quotations in accordance with corporate underwriting guidelines and delegated authority. \n Evaluate prospective accounts for insurability, determine underwriting eligibility, establish pricing, and accept or reject new business, renewals, and endorsements within authority limits. \n Develop, manage, and support agency relationships, including addressing agent and policyholder needs, providing guidance, and coordinating responses to inquiries and regulatory matters. \n Drive new business growth, profitability, and retention within an assigned territory or region. \n Analyze territory performance, production, loss trends, exposure data, and competitive market information; develop and implement corrective action plans as needed. \n Develop agency plans in collaboration with internal stakeholders to support territory objec",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة AF Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-underwriting",
            "Territory-management"
        ],
        "applyUrl": "https://himalayas.app/companies/af-group/jobs/senior-business-development-specialist-commercial-trucking-insurance-underwrit",
        "logo": "https://cdn-images.himalayas.app/aksphh41b4dsljhn5u3ipk2nuibb",
        "companyLogo": "https://cdn-images.himalayas.app/aksphh41b4dsljhn5u3ipk2nuibb",
        "image": "https://cdn-images.himalayas.app/aksphh41b4dsljhn5u3ipk2nuibb",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-7",
        "title": "Work From Home - Sales Representative",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Work From Home - Sales Representative)",
        "company": "Global Elite Empire Consultants",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Join a fast-growing, tech-driven organization looking for innovative individuals to help take the team to the next level. Typical day-to-day tasks include: \n Conducting virtual consultations with clients. \n Assessing clients’ needs and imparting knowledge on solutions. \n Cultivating lasting client relationships through consistent, periodic check-ins. \n Completing related administrative tasks (like note taking, appointment setting, etc.) as needed. \n Incentives include but not limited to: \n No cold calling \n Qualified lead program \n Advancement based on performance \n Weekly pay \n Renewals \n Mentorship and complete training \n Industry leading tools and technology access \n Work from home (web conference-based presentations) \n Looking for candidates who hold the below characteristics: Passionate. Competitive. Motivated. Dependable. Hardworking. Adaptable. Flexible. Coachable. If you are a hard-working, motivated team player, this may be an opportunity for you! \n All interviews will be conducted via Zoom video conferencing \n ( Global Elite Empire Consultants is a third-party recruiter, not an insurance agency) Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Inside-sales",
            "Remote-sales",
            "B2b-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/work-from-home-sales-representative-4056261562",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-8",
        "title": "Board Certified Physician Reviewers - Endocrinology - MN license",
        "title_ar": "Board Certified Physician Reviewers - Endocrinology - MN license (أخرى)",
        "company": "Dane Street",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Dane Street wants you to join our dynamic team of expert reviewers! In this role, you will have the opportunity to utilize your medical expertise to conduct thorough reviews of clinical cases. This telework opportunity allows you to customize your schedule as a 1099 independent contractor. Your main task will be to evaluate medical records, provide clinical summaries, engage in peer communications, and answer specific questions posed by our clients. We are on the lookout for talented professionals in the following area: Endocrinology Be a part of a team that values your skills and dedication to improving patient care. Your expertise is vital to helping us deliver high-quality healthcare assessments. Requirements \n Board Certified in Endocrinology \n Current, unrestricted Minnesota Medical License \n 5+ years of clinical practice experience \n Attends all required orientation and training \n Maintains proper credentialing, state licenses, and any certifications or requirements necessary to perform the job \n Benefits \n Independent consultant role allows for schedule flexibility and predictable work hours. You choose services and case types, dictate volume, and conduct this work based on your scheduled availability. \n No doctor/patient relationship is established, and no treatment is provided. These are advisory-only opinions. \n Dane Street offers a streamlined case flow and a user-friendly work portal. We facilitate all communication, organize and sort all medical records, support ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dane Street. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance",
            "Physician-advisor",
            "Utilization-management",
            "Medical-director"
        ],
        "applyUrl": "https://himalayas.app/companies/danestreet/jobs/board-certified-physician-reviewers-endocrinology-mn-license-8808703977",
        "logo": "https://cdn-images.himalayas.app/swgoi3kebgorujx3ob2tl6dhbjzy",
        "companyLogo": "https://cdn-images.himalayas.app/swgoi3kebgorujx3ob2tl6dhbjzy",
        "image": "https://cdn-images.himalayas.app/swgoi3kebgorujx3ob2tl6dhbjzy",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-9",
        "title": "Work From Home - Part-Time Enrollment Specialist",
        "title_ar": "Work From Home - Part-Time Enrollment Specialist (برمجة وتكنولوجيا)",
        "company": "Global Elite Empire Consultants",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "What could an extra $1,000-$2,000 each month do for your household? We are helping teams find qualified candidates the chance to enter financial services on a part-time basis while working fully remotely. This means that you get all the earning potential of a trillion-dollar industry without having to give up the security of your current position. Pay off your house early, take the vacations your family deserves, or save for early retirement. 20 hours per week, from home, is all it takes to learn a new skill that could change everything! Through providing personalized benefits solutions, you’ll be the architect of your client’s security tomorrow. In this role, you can expect to: \n Converse virtually with clients, weaving financial strategies that empower. \n Cultivate client bonds that stand the test of time. \n Ride the crest of industry trends, fortifying your knowledge. \n Work alongside a dynamic remote team, where collaboration is the heartbeat of success. \n Benefits: \n Work virtually, from anywhere \n Comprehensive training provided \n A fun, energetic, and positive team environment \n Rapid career growth and advancement opportunities \n Weekly pay \n Responsibilities: \n Calling and receiving calls from clients \n Scheduling appointments with clients who request our benefits \n Presenting and explaining insurance products and benefits packages virtually \n Completing applications for insurance products \n Attending ongoing, optional training sessions \n All interviews will be conduc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Enrollment-specialist",
            "Insurance-sales",
            "Financial-services",
            "Benefits-administration"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/work-from-home-part-time-enrollment-specialist",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-10",
        "title": "Senior Product Marketing Manager",
        "title_ar": "أخصائي تسويق ونمو (Senior Product Marketing Manager)",
        "company": "Overstory",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The climate crisis is the defining challenge of our time—but it’s also the greatest opportunity for innovation, and a challenge we’re proud to take on. At Overstory , we’re harnessing cutting-edge technology to enable a resilient electrical grid that keeps communities thriving as our world changes. \n The grid is the backbone of life as we know it. It powers hospitals, keeps food fresh, and ensures communities stay connected. But extreme weather, aging infrastructure, and growing wildfire risks are putting this critical system under pressure. All of this combined makes the electric utility industry the greatest opportunity for tackling climate change. \n One of the leading causes of catastrophic wildfires and power outages? Trees and brush coming into contact with power lines. \n That’s where we help. At Overstory , we use AI and advanced satellite imagery to pinpoint and prioritize vegetation risks before they materialize. By giving utilities critical analysis on those risks, we’re helping prevent outages, reduce wildfire risks, and accelerate the transition to a safer, more resilient grid. \n Our team spans the Americas and Europe, and we work with utility partners across the Americas and beyond. We’re outdoor enthusiasts, musicians, artists, athletes, parents, and adventurers. What unites us is a passion for solving complex problems, a commitment to climate action, and the belief that technology should be a force for good. \n Join us to help us build a more resilient world toge",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Overstory. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-marketing",
            "B2b-marketing",
            "Go-to-market-strategy"
        ],
        "applyUrl": "https://himalayas.app/companies/overstory/jobs/senior-product-marketing-manager-4861484872",
        "logo": "https://cdn-images.himalayas.app/qlilbzj9yprczl4zdskr7etod7cg",
        "companyLogo": "https://cdn-images.himalayas.app/qlilbzj9yprczl4zdskr7etod7cg",
        "image": "https://cdn-images.himalayas.app/qlilbzj9yprczl4zdskr7etod7cg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-11",
        "title": "Hospitality Quality Assurance Specialist",
        "title_ar": "Hospitality Quality Assurance Specialist (برمجة وتكنولوجيا)",
        "company": "Triptastic Adventures",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Role Overview We are seeking dedicated candidates who enjoy assisting their clientele and managing multiple tasks. In this role, you will assist with making and confirming reservations and related services, which may include accommodations, activities, transportation arrangements, and event-based services. This role is only for those who are detail-oriented, client-centered, quality assured, and are comfortable working independently in a remote environment. Key Responsibilities Assist clients with making personalized service arrangements Research and compare available options to meet client preferences Confirm reservations and ensure accuracy of details Provide clear, professional communication via email and phone Support updates, modifications, and service-related inquiries Complete required and participate in ongoing training What We Offer Fully remote capability Flexible schedule Team support Qualifications Must be authorized to work in the US, UK, Mexico, Australia, Spain, or Latin America Strong written and verbal English communication skills Reliable internet connection and smartphone (computer also recommended) Must be at least 18 years of age Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Triptastic Adventures. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Quality-assurance",
            "Customer-service",
            "Travel-services",
            "Hospitality"
        ],
        "applyUrl": "https://himalayas.app/companies/triptastic-adventures/jobs/hospitality-quality-assurance-specialist-9833620245",
        "logo": "https://cdn-images.himalayas.app/z18rmtd41km28xgyz1h8nj6cqg85",
        "companyLogo": "https://cdn-images.himalayas.app/z18rmtd41km28xgyz1h8nj6cqg85",
        "image": "https://cdn-images.himalayas.app/z18rmtd41km28xgyz1h8nj6cqg85",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528148-12",
        "title": "Laravel Developer",
        "title_ar": "مهندس ومطور برمجيات (Laravel Developer)",
        "company": "Quest Global Technologies",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "Responsibilities: \n Integration of user-facing elements developed by front-end developers \n Build efficient, testable, and reusable PHP modules \n Solve complex performance problems and architectural challenges \n ● Integration of data storage solutions Skills And Qualifications: \n 2+ years of experience on PHP web frameworks (such as Laravel) \n Understanding the fully synchronous behavior of PHP and accessibility and security compliance \n Understanding of MVC design patterns & front-end technologies, such as JavaScript, HTML5, and CSS3 \n Knowledge of object oriented PHP programming & common PHP or web server exploits and their solutions \n Understanding fundamental design principles behind a scalable application \n User authentication and authorization between multiple systems, servers, and environments \n Integration of multiple data sources and databases into one system \n Familiarity with limitations of PHP as a platform and its workarounds & SQL/NoSQL databases and their declarative query languages \n Creating database schemas that represent and support business processes \n Proficient understanding of code versioning tools, such as Git \n 2-4 years of experience on PHP web frameworks Note- Immediate joiners required Quest Global Technologies is an award winning company, which works on Blockchain, Salesforce, ERP Implementation, Mobile App Development, Website Development and Custom Software Development. Working on a mission of decreasing operational cost and increasing sales wit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Quest Global Technologies. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Laravel-development",
            "Php-development",
            "Backend-development",
            "Fullstack-development"
        ],
        "applyUrl": "https://himalayas.app/companies/quest-global-technologies/jobs/laravel-developer-6713783437",
        "logo": "https://logo.clearbit.com/questglobaltechnologies.com",
        "companyLogo": "https://logo.clearbit.com/questglobaltechnologies.com",
        "image": "https://logo.clearbit.com/questglobaltechnologies.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-13",
        "title": "Work From Home - Insurance Representative",
        "title_ar": "Work From Home - Insurance Representative (المبيعات والنمو)",
        "company": "Global Elite Empire Consultants",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Are you a passionate individual seeking a fulfilling career that offers flexibility and growth opportunities? Look no further! With the option to work from home and enjoy a flexible schedule, you can balance your personal and professional life seamlessly while advancing your career. Perks Include: 1. Work-Life Balance: Embrace the freedom to work from home and tailor your schedule to fit your lifestyle, ensuring you have time for what matters most to you. 2. Supportive Environment: Join a nurturing community that values work-life harmony and provides the support and flexibility you need to thrive in your career. 3. Mentorship & Growth: Access mentorship opportunities from experienced leaders who are dedicated to helping you succeed, empowering you to grow and excel in your role. Qualifications: \n Dedication to delivering exceptional customer service experiences. \n Strong communication and interpersonal skills. \n Ability to lead and inspire teams to achieve outstanding results. \n Desire to pursue professional growth and development while maintaining a healthy work-life balance. \n If you’re ready to embark on a fulfilling career path that offers flexibility, growth, and support, apply now! Take advantage of this opportunity to work from home, enjoy a schedule that suits your lifestyle, and receive mentorship as you advance your career in client service leadership. Don’t miss out on this chance to prioritize both your personal and professional aspirations. Apply today and take t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-representative",
            "Customer-service",
            "Insurance-sales",
            "Client-services"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/work-from-home-insurance-representative",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-14",
        "title": "Work From Home - Client Support Manager",
        "title_ar": "مدير وقائد فريق (Work From Home - Client Support Manager)",
        "company": "Global Elite Empire Consultants",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Join a fast-growing, tech-driven organization looking for innovative individuals to help take the team to the next level. Typical day-to-day tasks include: \n Conducting virtual consultations with clients. \n Assessing clients’ needs and imparting knowledge on solutions. \n Cultivating lasting client relationships through consistent, periodic check-ins. \n Completing related administrative tasks (like note taking, appointment setting, etc.) as needed. \n Incentives include but not limited to: \n No cold calling \n Qualified lead program \n Advancement based on performance \n Weekly pay \n Renewals \n Mentorship and complete training \n Industry leading tools and technology access \n Work from home (web conference-based presentations) \n Looking for candidates who hold the below characteristics: Passionate. Competitive. Motivated. Dependable. Hardworking. Adaptable. Flexible. Coachable. If you are a hard-working, motivated team player, this may be an opportunity for you! \n All interviews will be conducted via Zoom video conferencing \n ( Global Elite Empire Consultants is a third-party recruiter, not an insurance agency) Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Client-support-manager",
            "Customer-success-manager",
            "Client-relations",
            "Virtual-client-support"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/work-from-home-client-support-manager",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-15",
        "title": "Sales Engineer (Application Security)",
        "title_ar": "مهندس ومطور برمجيات (Sales Engineer (Application Security))",
        "company": "Thales",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Location: Texas, United States of America Thales people architect identity management and data protection solutions at the heart of digital security. Business and governments rely on us to bring trust to the billions of digital interactions they have with people. Our technologies and services help banks exchange funds, people cross borders, energy become smarter and much more. More than 30,000 organizations already rely on us to verify the identities of people and things, grant access to digital services, analyze vast quantities of information and encrypt data to make the connected world more secure. Remote - Central/ West US States Thales is hiring an experienced Sales Engineer who'll provide guidance and assistance to the account teams in building solutions specific to customers’ application security challenges to support our Sales team in the West region. Sales Engineers are an integral part of Thales ’s sales organization and assist the sales team with pre-sales technical knowledge and presentations. They work closely with sales managers, prospects and partners as the subject-matter expert to demonstrate how a proposed solution meets and exceeds customer requirements. Our preference is someone whose technical strengths include a heavy emphasis in Web Application Security. Key Areas of Responsibility \n Use consultative selling skills with customers to understand technical requirements and provide solutions using Thales products \n Prepare and deliver solution Presentations,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Thales. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales-engineering",
            "Application-security",
            "Pre-sales-engineer",
            "Cybersecurity-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/thales/jobs/sales-engineer-application-security",
        "logo": "https://cdn-images.himalayas.app/zx9eir6nwprkq268nl71hn0zswv0",
        "companyLogo": "https://cdn-images.himalayas.app/zx9eir6nwprkq268nl71hn0zswv0",
        "image": "https://cdn-images.himalayas.app/zx9eir6nwprkq268nl71hn0zswv0",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-16",
        "title": "Frontend Web Application Developer - Remote",
        "title_ar": "مهندس ومطور برمجيات (Frontend Web Application Developer - Remote)",
        "company": "KoboToolbox",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Location: Remote Availability: 35-40 hours per week Working hours: US East business hours Reporting to: Lead developer KoboToolbox has an immediate opening for a Frontend Web Application Developer to fill a full-time position of approximately 35-40 hours per week, for a commitment of at least 1 year. As a member of our team, you will share in the challenge and excitement of writing code used by over 32,000 organizations around the world. These organizations create data-driven change through the collection and analysis of more than 20 million surveys per month. Only candidates who already have experience working on large web applications will be considered. Beyond technical acumen, we are seeking a team member who demonstrates curiosity, initiative, and a cooperative approach to problem solving and decision-making. If you're passionate about leveraging technology to make a positive impact, we want to hear from you! Responsibilities \n Searching and reading an extensive, long-lived code base to understand existing behavior and conventions. \n Recognizing when existing conventions may no longer be the best approach and suggesting improvements aligned with contemporary best practices. \n Writing robust, concise, and reusable code with accompanying tests and documentation. \n Reviewing other developers' code and providing constructive feedback. \n Incorporating feedback from code reviews to improve your skills and align with team standards. \n Using AI-assisted development tools effecti",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة KoboToolbox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Frontend-development",
            "Web-development",
            "Frontend-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/kobotoolbox/jobs/frontend-web-application-developer-remote",
        "logo": "https://cdn-images.himalayas.app/cz2bsx2c5i94voncrfk11dg8wu3g",
        "companyLogo": "https://cdn-images.himalayas.app/cz2bsx2c5i94voncrfk11dg8wu3g",
        "image": "https://cdn-images.himalayas.app/cz2bsx2c5i94voncrfk11dg8wu3g",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-17",
        "title": "Records Management Specialist III",
        "title_ar": "Records Management Specialist III (برمجة وتكنولوجيا)",
        "company": "Contact Government Services",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$55,000 - $75,000 USD",
        "description": "Records Management Specialist III Employment Type: Full-Time, Mid-Level Department: Office Support CGS is seeking an experienced Records Management Specialist to provide technical, management, and documentation support for a large Federal agency initiative. CGS brings motivated, highly skilled, and creative people together to solve the government’s most dynamic problems with cutting-edge technology. To carry out our mission, we are seeking candidates who are excited to contribute to government innovation, appreciate collaboration, and can anticipate the needs of others. Here at CGS, we offer an environment in which our employees feel supported, and we encourage professional growth through various learning opportunities. Skills and attributes for success: \n Provides technical support for records management programs, dockets, records center, or other information services under the supervision of a Records Information Manager. \n May assist in planning and program development, analysis of records or docket management problems, and design of strategies to meet ongoing records or docket management needs. \n Specific technical duties may vary according to the needs of the work site and include, but are not limited to, response to inquiries; collection maintenance and retrieval tasks; metadata review and input; equipment maintenance; and use of automated information systems, such as the Federal Docket Management System (FDMS). \n Qualifications: \n At Level III, the personnel must have ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Contact Government Services. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Records-management",
            "Office-support",
            "Document-control",
            "Administrative-support"
        ],
        "applyUrl": "https://himalayas.app/companies/contact-government-services/jobs/records-management-specialist-iii-3540962660",
        "logo": "https://cdn-images.himalayas.app/571zjo1jg8kzrwmjwjpvonxpshf0",
        "companyLogo": "https://cdn-images.himalayas.app/571zjo1jg8kzrwmjwjpvonxpshf0",
        "image": "https://cdn-images.himalayas.app/571zjo1jg8kzrwmjwjpvonxpshf0",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-18",
        "title": "Virtual Executive Assistants for US Based Companies - Work From Home",
        "title_ar": "Virtual Executive Assistants for US Based Companies - Work From Home (المبيعات والنمو)",
        "company": "Work Better Now",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$875 - $875 USD",
        "description": "Work Better Now virtual assistants (VA) work full-time (40 hours/week) as freelancers from their homes, helping businesses in the US with their administrative needs. WBN VAs work Monday through Friday during US business hours. We are searching for ambitious, top talented freelancers who are driven to succeed through providing long term virtual assistant skills to the companies they serve. As a WBN VA, you will have the privilege of assisting with a variety of common processes and tasks necessary to keep your client’s business running smoothly. While your duties will depend on the specific needs of your client, they will include but not be limited to. \n Calendar management \n Data entry \n Marketing tasks and sales research \n Building databases \n Email screening & replying \n Answering inbound calls \n Travel arrangements \n Help with personal tasks \n As an added ongoing benefit, we (WBN) ensure that our VAs are matched up with clients based on the VA’s skills and the clients’ needs. In doing so, here are the qualifications of those we consider to be “ideal candidates”. \n At least 2 years of previous work experience working with administrative tasks \n Bilingual in Spanish and English (advanced or proficient) \n Expertise with Microsoft Word, Excel, PowerPoint, Outlook/Gmail \n Proficient writing in English (including top grammar skills) \n Appropriate work-from-home environment \n USB headset with noise-canceling (ideally) \n FT availability (40 hours a week) \n Excellent relationship sk",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Work Better Now. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Virtual-assistant",
            "Executive-assistant",
            "Administrative-support",
            "Remote-administration"
        ],
        "applyUrl": "https://himalayas.app/companies/work-better-now/jobs/virtual-executive-assistants-for-us-based-companies-work-from-home-9271878208",
        "logo": "https://logo.clearbit.com/workbetternow.com",
        "companyLogo": "https://logo.clearbit.com/workbetternow.com",
        "image": "https://logo.clearbit.com/workbetternow.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-19",
        "title": "Associate Director, Strategic Sourcing- Marketing & Professional Services",
        "title_ar": "أخصائي تسويق ونمو (Associate Director, Strategic Sourcing- Marketing & Professional Services)",
        "company": "College Board",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$85,000 - $125,000 USD",
        "description": "Senior Manager, Strategic Sourcing- Marketing and Professional Services College Board - Finance Location: This is a remote role. Candidates who live near CB offices have theoptionof being fully remote or hybrid (Tuesday and Wednesday in office). All CB employeesare required tooccasionally travel to meet in person for business purposes. Role Type : This is a full-time position About the Team The Strategic Sourcing team is a dynamic, collaborative group that partners with leaders across the organization to drive decisions that maximize value and impact. We combine market insight, strong supplier relationships, and strategic sourcing practices to ensure every dollar we spendadvancesthe College Board ’s mission. Our work strengthens operations, promotes sustainability, and ensures that the organization’s resources are used thoughtfully and effectively inserviceof students everywhere. The Strategic Sourcing team at College Board is embarking on an exciting transformation, shifting from transactional procurement to a model centered on strategic engagement. This role will join a team of sourcing leaders dedicated to delivering meaningful, measurable value to the organization, directly supporting our mission and the students we serve. Aboutthe Opportunity The Senior Manager, Strategic Sourcing- Marketing and Shared Serviceswill lead enterprise-wide procurement initiatives, supplier relationship management, and contract management activities across multiple categories ofspend. In this",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة College Board. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Strategic-sourcing",
            "Procurement",
            "Supply-chain-management",
            "Category-management"
        ],
        "applyUrl": "https://himalayas.app/companies/college-board/jobs/associate-director-strategic-sourcing-marketing-professional-services-7313872524",
        "logo": "https://cdn-images.himalayas.app/rdewu4rrbo3ifgvmvueewizo4hak",
        "companyLogo": "https://cdn-images.himalayas.app/rdewu4rrbo3ifgvmvueewizo4hak",
        "image": "https://cdn-images.himalayas.app/rdewu4rrbo3ifgvmvueewizo4hak",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-20",
        "title": "Junior Inside Sales Representative",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Junior Inside Sales Representative)",
        "company": "Five Star Solutions",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$17 - $17 USD",
        "description": "Join a fast-paced, high-growth INC 5000 company where you’ll connect directly with business owners and introduce them to our financial products. In this role, you’ll engage with past clients to understand their current capital needs, gather required documentation, and prepare qualified opportunities for Senior Sales Representatives to close. This is an ideal position for motivated sales professionals who thrive in a high-volume, results-driven environment. This is a remote position for those that reside in = AL, FL, GA, ID, IA, IN, KS, LA, MI, MS, MO, NE, NV, NC, ND, OH, OK, PA, SC, SD, TX, TN, UT, VA, WV, WI, WY Essential Functions \n Conduct high-volume outreach (120–200 calls per day) to prior customers seeking additional capital \n Communicate via phone, email, and text to assist past clients with new financing applications \n Identify client needs and align them with appropriate product offerings \n Re-engage previous customers to understand their experience and generate repeat business \n Maintain accurate and up-to-date lead statuses within the CRM system \n Demonstrate resourcefulness and creativity in problem-solving and task completion \n Collaborate with Senior Sales Representatives by transferring qualified prospects for closing \n Required Education and Experience \n 1–3 years of sales experience with a proven track record of meeting or exceeding quotas \n Strong relationship-building skills with the ability to quickly establish rapport with business owners \n Excellent ana",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Five Star Solutions. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Inside-sales",
            "Sales",
            "Business-development",
            "Client-services"
        ],
        "applyUrl": "https://himalayas.app/companies/five-star-solutions/jobs/junior-inside-sales-representative",
        "logo": "https://cdn-images.himalayas.app/t5sth034j7l46geq59rauu108cel",
        "companyLogo": "https://cdn-images.himalayas.app/t5sth034j7l46geq59rauu108cel",
        "image": "https://cdn-images.himalayas.app/t5sth034j7l46geq59rauu108cel",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789528149-21",
        "title": "Remote Office Assistant",
        "title_ar": "Remote Office Assistant (تسويق ومبيعات)",
        "company": "Coalition Technologies",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$31,2k- $52k",
        "description": "Coalition Technologies is seeking a reliable, detail-oriented, and highly organized Remote Office Assistant to support administrative, bookkeeping, billing, reporting, data entry, and internal operations tasks. This role is ideal for someone with strong communication skills, discretion, attention to detail, and a willingness to learn and grow within a fast-paced remote work environment. \n As an Office Assistant, you will help support daily administrative operations, assist with entry-level bookkeeping, organize client documents, support internal reporting, and help maintain accurate company records. This position offers strong growth potential for the right candidate, including opportunities for advancement within the Accounting team or other departments. \n We are looking for talented and diligent candidates who perform well on our skills assessments. Strong skills test performance may be considered even if a candidate does not meet every preferred experience or educational background requirement. \n Why Join Coalition Technologies? \n Coalition Technologies is committed to delivering high-quality work for our clients while providing our team with a fun, thriving, innovative, and growth-focused work environment. We offer: \n 100% remote work with a company that has supported remote team members for more than a decade \n Competitive profit-sharing bonus plan, with up to 50% of company profits paid to full-time employees each month \n Competitive Paid Time Off plan that supports wor",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Coalition Technologies. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/marketing/remote-office-assistant-1680495",
        "logo": "https://remotive.com/job/1680495/logo",
        "companyLogo": "https://remotive.com/job/1680495/logo",
        "image": "https://remotive.com/job/1680495/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-22",
        "title": "AI Response Evaluator",
        "title_ar": "AI Response Evaluator (برمجة وتكنولوجيا)",
        "company": "iMerit Technology",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "freelance",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "France, Japan, Turkey, Vietnam, Mexico, Norway",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$10K-$20K",
        "description": "iMerit is looking for detail oriented analysts to evaluate and rank AI generated responses to image based prompts. You will judge answers on accuracy, relevance, clarity, conciseness, safety, localization, and how well they follow the user's instructions, then explain your reasoning in writing. Much of the job comes down to this: look at the image, look at what the model said about it, and decide whether the two actually match. \n What you will do \n Interpret conversational context and identify what the user really wanted \n Rate and rank responses against defined quality criteria \n Compare multiple answers and explain in writing why one wins \n Verify factual claims using approved research sources \n Flag tasks that cannot be reliably assessed rather than guessing \n What you bring: \n Strong critical thinking and sound judgment in ambiguous cases \n Solid research skills and attention to detail \n Excellent reading comprehension \n Self direction and the discipline to hit deadlines without supervision \n Good to know \n Independent contractor engagement for the length of the project. \n Fully remote and flexible. \n You choose your hours as long as volume and deadlines are met. \n Task volume varies with project demand.",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة iMerit Technology. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Artificial intelligence"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/artificial-intelligence/ai-response-evaluator-2091126",
        "logo": "https://remotive.com/job/2091126/logo",
        "companyLogo": "https://remotive.com/job/2091126/logo",
        "image": "https://remotive.com/job/2091126/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-23",
        "title": "Inside Sales Contractor",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Inside Sales Contractor)",
        "company": "Credit Wellness, LLC",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "OTE $25k - $35k",
        "description": "About Us \n We are a financial services start up focusing on helping to improve consumer credit profiles. We are currently seeking KPI driven sales representatives looking to earn up to 45K in their first year while working remotely. We offer comprehensive training and continuous sales coaching to help you meet your financial goals. \n During our training period we offer a guaranteed training stipend while our trainees are acclimating to the position (*see weekly pay below). If you are a seasoned sales professional looking for the autonomy of a remote position combined with great compensation, we want to hear from you! \n Compensation Structure \n This role is 100% commission-based , which means your earning potential is unlimited. In addition, we regularly offer competitive performance-based bonuses to reward hard work and results. \n Training Period (Weeks 1–4) \n We invest in your success and want to make sure you’re supported as you get up to speed: \n Week 1: Commission-only (a chance to start earning right away while learning the ropes). \n Weeks 2–4: Guaranteed training stipend of $500 USD total – or your commission if it’s higher. You’ll always receive whichever amount benefits you most. \n Week 0: Unpaid \n Week 1: $100 guaranteed minimum \n Week 2: $150 guaranteed minimum \n Week 3: $250 guaranteed minimum \n By the end of training, you’ll have the skills to maximize commissions, with the safety net of a guaranteed base during your ramp-up period. \n Post Training Period: \n Avera",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Credit Wellness, LLC. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/sales/inside-sales-contractor-2086540",
        "logo": "https://remotive.com/job/2086540/logo",
        "companyLogo": "https://remotive.com/job/2086540/logo",
        "image": "https://remotive.com/job/2086540/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-24",
        "title": "Tier III Service Desk Engineer",
        "title_ar": "مهندس ومطور برمجيات (Tier III Service Desk Engineer)",
        "company": "Unio Digital",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Unió Digital is an Arizona-based managed service provider (MSP) delivering Managed IT Services, Low Voltage Cabling, Access Control, Video Surveillance, and Intrusion Services. We believe technology should be intuitive, not intimidating. \n We are looking for an experienced Tier 3 Service Desk Technician with exceptional problem-solving skills. You will serve as the escalation point within the team, resolving complex technical issues while also leading client onboarding and project initiatives. You are expected to be involved in direct end-user support when required. If you have a passion for ensuring top-quality user support and thrive in a collaborative environment, this role is for you. \n Duties \n · Lead and support our helpdesk environment for managed service clients \n · Coordinate and manage client projects, acting as a bridge between the technical team and the client to ensure project success \n · Provide above and beyond support to our clients and respond to queries for technical assistance in person, via phone, or electronically as required \n · Provide training and support to clients during the onboarding process to ensure they understand how to effectively use their new IT systems and services. \n · Develop project plans for client onboarding and standardization projects, outlining tasks, resources required, and estimated timelines \n · Install, configure, diagnose, test and resolve technical hardware and software issues \n · Maintain and update written client and process",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Unio Digital. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Information technology"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/information-technology/tier-iii-service-desk-engineer-2091045",
        "logo": "https://remotive.com/job/2091045/logo",
        "companyLogo": "https://remotive.com/job/2091045/logo",
        "image": "https://remotive.com/job/2091045/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-25",
        "title": "Freelance Writer",
        "title_ar": "كاتب ومحرر محتوى (Freelance Writer)",
        "company": "IAPWE",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "freelance",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$50-$75 /hour",
        "description": "Our organization is seeking content writers to create articles and blog posts on a variety of topics. \n The rate of pay is $20 per 100 words (this comes out to approximately $100 per article or $50 per hour). \n Some topics you may be asked to write about include the following (you can always turn down a topic if you do not feel comfortable writing about it, however if you have experience or expertise in a specific area, please let us know): \n Health & beauty \n Fitness \n Home Decor \n Fashion \n Sports \n Do it yourself \n Finance \n Legal \n Medical \n Family/Parenting \n Relationships \n Real Estate \n Restaurants \n Contracting (plumbing, pool building, remodeling, etc.) \n These are just some of the more general industries and topics that we cover. \n Requirements : \n We ask that all work be completed using a word processor such as Microsoft Word or Open Office \n A reliable internet connection and the ability to meet deadlines \n Good communication skills and respond in a timely manner to editorial staff when they ask for updates on tasks, etc \n Work well as a team member with the rest of our content management and editorial staff \n Note : Applicants to this job signaled that accessing some writing tasks may require payment.",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة IAPWE. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Writing"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/writing/freelance-writer-1185979",
        "logo": "https://remotive.com/job/1185979/logo",
        "companyLogo": "https://remotive.com/job/1185979/logo",
        "image": "https://remotive.com/job/1185979/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-26",
        "title": "Freelance Copywriter",
        "title_ar": "كاتب ومحرر محتوى (Freelance Copywriter)",
        "company": "Coalition Technologies",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "freelance",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$20k -$35k",
        "description": "CT Marketing Agency is seeking skilled Freelance Copywriters to write high-quality, SEO-driven content for eCommerce and lead generation websites. This is a freelance, project-based writing role. \n The ideal candidate has excellent English writing skills, strong research ability, and experience writing content that follows detailed, client-specific guidelines. Projects commonly include category pages, product descriptions, blog posts, SEO landing pages, and website copy. \n About the Role \n Our client base is constantly evolving, and writers may create content across a wide range of industries, including: \n Fashion, including mass-market and luxury brands \n Skincare and beauty \n Tech and software \n Finance and investing \n Law, including family law, divorce, and product liability \n Education \n Home improvement \n Automobiles and motorcycles \n Health and wellness \n Medical and clinical fields \n Digital marketing \n SEO, PR, advertising, and marketing \n Writers with experience in highly specialized industries such as tech, finance, law, health, medical, SEO, PR, advertising, or marketing are strongly encouraged to apply. \n Responsibilities \n Write clear, engaging, SEO-friendly content for eCommerce and lead generation websites \n Create category pages, product descriptions, blog posts, landing pages, and website copy \n Research client industries, products, services, audiences, and competitors \n Follow detailed client guidelines and adapt to different brand voices \n Blend SEO best pr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Coalition Technologies. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Writing"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/writing/freelance-copywriter-1749306",
        "logo": "https://remotive.com/job/1749306/logo",
        "companyLogo": "https://remotive.com/job/1749306/logo",
        "image": "https://remotive.com/job/1749306/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-27",
        "title": "Senior React Full-stack Developer",
        "title_ar": "مهندس ومطور برمجيات (Senior React Full-stack Developer)",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LATAM, Europe, USA, Canada, APAC",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Are you a talented Senior Developer looking for a remote job that lets you show your skills and get decent compensation? Look no further than Lemon.io — the marketplace that connects you with hand-picked startups in the US and Europe. \n What we offer: \n The rate depends on your seniority level, skills and experience. We've already paid out over $11M to our engineers. \n No more hunting for clients or negotiating rates — let us handle the business side of things so you can focus on what you do best. \n We'll manually find the best project for you according to your skills and preferences. \n Choose a schedule that works best for you. It’s possible to communicate async or minimally overlap within team working hours. \n We respect your seniority so you can expect no micromanagement or screen trackers. \n Communicate directly with the clients. Most of them have technical backgrounds. Sounds good, yeah? \n We will support you from the time you submit the application throughout all cooperation stages. \n Most of our projects involve working in a fast-paced startup environment. We hope you like it as much as we do. \n Through our community, we will connect you with the best developers from more than 75 countries. \n We have several open positions for Full-Stack React.js Developers - please see the details below. We also have some backend positions; the full list is included below as well. \n Requirements for the Senior Node & React Position: \n 5+ years of software development experience \n Comm",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon.io. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-react-full-stack-developer-2091101",
        "logo": "https://remotive.com/job/2091101/logo",
        "companyLogo": "https://remotive.com/job/2091101/logo",
        "image": "https://remotive.com/job/2091101/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-28",
        "title": "Senior QA Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior QA Engineer)",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Are you a talented QA looking for a remote job that lets you show your skills and get better compensation and career growth? Look no further than Lemon.io - the marketplace that connects you with hand-picked startups in the US and Europe. \n Requirements: \n 3+ years of experience in automation testing \n 2+ years of experience in manual testing \n 3+ years of experience working with Cypress or Selenium \n Exceptional attention to detail \n Good command of English, both written and spoken. \n Strong organizational skills — ability to work full-time remotely with no supervision \n Responsibility — we want to trust you! \n Soft skills — we don’t ask you to find a topic for small talk, but being just polite is OK. \n NOT YOUR TECH STACK? \n We're placing Senior Developers (4+ yrs commercial experience) across AI Agent Architecture, AI Automation Architecture, AI Engineering, Site Reliability Engineering, Platform Engineering, React & Python, React & Golang, Golang, React & Java, React & Ruby, Ruby, PHP & Vue, Vue & Node.js, React & .NET, Android & iOS, iOS & Swift, Flutter & Firebase, Solutions Engineer, Blockchain (Ethereum/Ethers.js/Wagmi/Viem/Solana), Angular & Node.js, Vue & .NET, Python & Vue, DevOps, MLOps, Data Science, Angular & PHP, Angular & .NET, Symfony & React, Symfony & Vue, Symfony & Angular, Python, Symfony & JavaScript & Next.js & TypeScript, Data Analysis, React & PHP, Data Engineering, Project Management, Product Management, Embedded Software Engineering, React Native & ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon.io. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Quality assurance"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/qa/senior-qa-engineer-2091100",
        "logo": "https://remotive.com/job/2091100/logo",
        "companyLogo": "https://remotive.com/job/2091100/logo",
        "image": "https://remotive.com/job/2091100/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-29",
        "title": "Senior DevOps Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior DevOps Engineer)",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LATAM, Europe, USA, Canada, APAC",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Are you a talented Senior DevOps looking for a remote job that lets you show your skills and get decent compensation? Look no further than Lemon.io — the marketplace that connects you with hand-picked startups in the US and Europe. \n We currently have multiple DevOps openings open at once, each with a different setup, stack, and benefits. Check which one fits you: \n Direct hire for our client in the gambling industry. Relocation and visa assistance included. This role bridges infrastructure and application operations: you’ll keep environments reliable, redundant, and secure, investigate production issues, and support dev and QA teams with technical context. \n We're seeking a DevOps Engineer with strong Laravel and Nuxt experience to manage and improve our application infrastructure. This role bridges infrastructure and application operations — you'll keep environments reliable, redundant, and secure, investigate production issues, and support dev and QA teams with technical context. \n Benefits: paid leave; gym allowance; lunch allowance; monthly team-building activities; birthday and work anniversary presents. \n Requirements - DevOps with Linux: \n 4+ years of experience as a DevOps Engineer \n At least 3 years of experience with Linux \n Knowledge of Laravel, PHP, and Nuxt is a must \n 2+ years of experience with Heroku, DigitalOcean, or Cloudflare \n We also have other positions that aren't direct hire. \n Requirements - DevOps (Python/Bash): \n 4+ years of experience as a DevOps ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon.io. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/devops/senior-devops-engineer-2091099",
        "logo": "https://remotive.com/job/2091099/logo",
        "companyLogo": "https://remotive.com/job/2091099/logo",
        "image": "https://remotive.com/job/2091099/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-30",
        "title": "Content Reviewer - English US",
        "title_ar": "كاتب ومحرر محتوى (Content Reviewer - English US)",
        "company": "TELUS Digital",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "part_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$14/hour",
        "description": "Our global AI Community is a vibrant network of more than one million contributors from \n diverse backgrounds who help customers collect, enhance, train, translate, and localize \n content to build better AI models. Become part of our growing community and contribute \n to the development of innovative AI technologies used by some of the world's largest \n brands. \n We are looking for an independent, flexible, remote opportunity where you can help \n improve AI-powered search technology from the comfort of your home? If you're \n curious, internet-savvy, and enjoy evaluating online content, this freelance project could \n be a great fit. \n A Day in the Life of a Content Reviewer - US \n In this role, you will analyze and provide feedback on text, webpages, images, and other \n types of online content for leading search engines using a specialized online platform. \n By reviewing and rating search results for relevance and quality, you will help improve \n the overall search experience for millions of users around the world, including yourself. \n Join our global community and put your skills to work supporting one of the world's \n leading search technologies. \n Service Rates \n The rate of pay is $0.2333 per completed task, with an estimated earning potential of \n $14 per hour. Compensation is based on tasks completed and project availability. \n Estimated earnings may vary depending on task volume and program requirements \n including, quality, and productivity, in accordance with the pro",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة TELUS Digital. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "All others"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/all-others/content-reviewer-english-us-2091105",
        "logo": "https://remotive.com/job/2091105/logo",
        "companyLogo": "https://remotive.com/job/2091105/logo",
        "image": "https://remotive.com/job/2091105/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-31",
        "title": "Senior Golang Developer",
        "title_ar": "مهندس ومطور برمجيات (Senior Golang Developer)",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Europe, USA, UK, Canada, Australia, Singapore",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Are you a talented Senior Developer looking for a remote job that lets you show your skills and get decent compensation? Look no further than Lemon.io — the marketplace that connects you with hand-picked startups in the US and Europe. \n We are currently seeking a Senior Software Engineer for our client — a research-driven artificial intelligence company. \n The client’s mission is to cut the cost of modern AI by co-designing hardware, software, algorithms, and models — with the goal of making AI’s benefits accessible to society. They’re active contributors to open-source AI research and are looking for researchers and engineers to help build the next generation of AI infrastructure.Cooperation: This starts as contract work via our platform. If it goes well, you’ll transition to a direct hire, with equity, health insurance, and other competitive benefits. \n Locations: the EU, the US, Canada, the UK, Australia, Singapore \n About the role: \n You’d build the Go-based platform that lets research and inference teams provision, scale, repair, and tear down GPU clusters through an API - instead of filing tickets. \n You’d own the product end to end : shaping internal platforms, improving developer experience, and operating the systems in production. \n Requirements: \n 5+ years of software development experience \n 3+ years of experience with Golang and Kubernetes controllers \n Knowledge of Temporal is a must \n Strong technical skills: as a Senior Developer, you are expected to be able to",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon.io. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-golang-developer-2091098",
        "logo": "https://remotive.com/job/2091098/logo",
        "companyLogo": "https://remotive.com/job/2091098/logo",
        "image": "https://remotive.com/job/2091098/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-32",
        "title": "Senior Data Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Data Engineer)",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LATAM, Europe, USA, Canada, APAC",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Are you a talented Senior Data Engineer looking for a remote job that lets you show your skills and get decent compensation? Look no further than Lemon.io — the marketplace that connects you with hand-picked startups in the US and Europe. \n What we offer: \n The rate depends on your skills and experience. We've already paid out over $11M to our engineers. \n No more hunting for clients or negotiating rates — let us handle the business side of things so you can focus on what you do best. \n We'll manually find the best project for you according to your skills and preferences. \n Choose a schedule that works best for you. It’s possible to communicate async or minimally overlap within team working hours. \n We respect your seniority so you can expect no micromanagement or screen trackers. \n Communicate directly with the clients. Most of them have technical backgrounds. Sounds good, yeah? \n We will support you from the time you submit the application throughout all cooperation stages. \n Most of our projects involve working in a fast-paced startup environment. We hope you like it as much as we do. \n Through our community, we will connect you with the best developers from more than 75 countries. \n We have several different roles for Data Engineers — please check the details if you're interested. \n Requirements — Data Engineers: \n 5+ years of commercial experience as a Data Engineer \n 2+ years of commercial experience with Azure DevOps is a must \n 2+ years of commercial experience with D",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon.io. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-data-engineer-2091097",
        "logo": "https://remotive.com/job/2091097/logo",
        "companyLogo": "https://remotive.com/job/2091097/logo",
        "image": "https://remotive.com/job/2091097/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-33",
        "title": "Senior Independent AI Engineer / Architect",
        "title_ar": "مهندس ومطور برمجيات (Senior Independent AI Engineer / Architect)",
        "company": "A.Team",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "contract",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Americas, Europe, Israel",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$120 - $170 /hour",
        "description": "Senior Independent AI Engineer / Architect \n Remote | Americas, Europe, or Israel \n Most AI engineers can find work. \n Finding work worth doing is harder. \n A.Team is an invite-only network of senior AI engineers, ML engineers, and AI architects building production AI systems for startups, enterprises, and global companies. \n Since 2020, builders in the network have earned more than $200M working with companies including Lyft, Google X, HCA, Unilever, Sightful, D-ID, and others. \n The Work \n You'll join small teams solving real problems. \n Not demos. \n Not proof-of-concepts that never ship. \n Not another thin wrapper around an API. \n Recent work has included: \n AI-native products built from 0→1 \n Agent architectures and orchestration systems \n Enterprise AI deployments \n Retrieval, evaluation, and reliability infrastructure \n LLM-powered workflows and products \n Machine learning platforms operating at scale \n You'll work directly with founders, CTOs, and product leaders, helping shape both technical direction and execution. \n Why Builders Join \n The best opportunities rarely make it to the open market. \n A.Team exists to solve that. \n No bidding. \n No prospecting. \n No race to the bottom. \n Just ambitious companies, difficult problems, and experienced peers. \n Who Thrives Here \n People who have already shipped. \n Engineers who have deployed AI systems into production, understand the tradeoffs behind the hype, and know how to turn technical complexity into business value. \n Wh",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة A.Team. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-independent-ai-engineer-architect-1919266",
        "logo": "https://remotive.com/job/1919266/logo",
        "companyLogo": "https://remotive.com/job/1919266/logo",
        "image": "https://remotive.com/job/1919266/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-34",
        "title": "Senior Independent Software Developer",
        "title_ar": "مهندس ومطور برمجيات (Senior Independent Software Developer)",
        "company": "A.Team",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "contract",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Americas, Europe, Israel",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$90 - $150 /hour",
        "description": "You must be located in the Americas, Europe, or Israel to apply. A·Team is a VC-backed, stealth, application-only home on the internet for senior independent software builders to team up with hand-picked, high-growth companies on their next big thing. \n After talking with hundreds of independent engineers, designers, and product folks, we heard over and over that finding vetted, high-quality, consistent clients is hard, and projects are often too small to be rewarding. A·Team matches small teams of the most talented builders in the world with companies backed by a16z, YC, Softbank, General Catalyst, etc. on a contract basis for many of their most important initiatives. We quietly launched in May 2020, and have helped A·Teamers earn $85+ million since. \n As part of A·Team, you can expect: \n High-paying, meaningful missions with the most audacious companies sent your way; generally $90-$150+/hr, with vetted, fascinating clients doing work that matters. We're picky about who we partner with; new clients only come in via trusted referral. We've worked with Lyft, McGraw Hill, ClearCo, Pepsi, Walmart, the former CEO of Waze, the leading vaccine production software, several new unicorns we can't say here, and dozens of startups backed by a16z/YC/Softbank/Insight/Tiger/etc. \n Work alongside friends old & new: our niche is small/diverse product teams, since clients with larger budgets and higher-impact work tell us they want teams, not individuals. Of course, we keep friends together ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة A.Team. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/software-development/senior-independent-software-developer-1919265",
        "logo": "https://remotive.com/job/1919265/logo",
        "companyLogo": "https://remotive.com/job/1919265/logo",
        "image": "https://remotive.com/job/1919265/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-35",
        "title": "Head of Marketing & Communications",
        "title_ar": "أخصائي تسويق ونمو (Head of Marketing & Communications)",
        "company": "garden3d",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "contract",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$150k - $230k",
        "description": "We are hiring a Head of Marketing & Communications to tell the garden3d story across the internet, from wherever in the world you happen to be. \n More details if you check our original job posting link \n About garden3d \n We are worker owned creative collective, innovating on everything from brands and IRL communities to IoT devices and cross platform apps. We share profit, open source everything, spin out new businesses, and invest in exciting ideas through financial and/or in-kind contributions. \n Our client roster includes Google , Stripe , Figma , Hinge , Black Socialists in America , ACLU , Pratt , Parsons , Mozilla , The Nobel Prize , MIT , Gnosis , Etsy & Gagosian . \n We’re the software team behind innovative products like The Light Phone & Mill , and we operate a global, decentralized community space collective called Index Space . \n We think of our garden3d as collective for creative people, prioritizing a happy, talented, and diverse studio culture. We work on projects that bring value to our world, and we balance deep care for the work we do with a genuine curiosity about life outside of our jobs. \n Sanctuary Computer — Development \n At Sanctuary Computer we’re building a different type of technology shop – one that prioritizes close collaboration between the client and the craftsperson. \n Our projects range from design-forward websites, to robust web apps, to native mobile development. \n XXIX — Design \n When we started XXIX in 2013, we set out to create a different",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة garden3d. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/marketing/head-of-marketing-communications-2091068",
        "logo": "https://remotive.com/job/2091068/logo",
        "companyLogo": "https://remotive.com/job/2091068/logo",
        "image": "https://remotive.com/job/2091068/logo",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789528149-36",
        "title": "Account Executive , DACH market",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive , DACH market)",
        "company": "Aircall",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Permanent Full Time Employee",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin Office",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Aircall is a unicorn, AI-powered customer communications platform used by 22,000+ companies worldwide to drive revenue, resolve issues faster, and scale customer-facing teams. We’re redefining customer communications by bringing voice, SMS, WhatsApp, and AI together into one seamless workspace. Our momentum comes from a simple idea: help teams work smarter, not harder. Aircall’s AI Voice Agent automates routine calls, AI Assist streamlines post-call work, and AI Assist Pro delivers real-time guidance so people can do their best work. The result is higher revenue, faster resolutions, and teams that scale with confidence. Aircall is headquartered in Paris, our European HQ, with a strong North American presence anchored in Seattle, our North American HQ, and teams across Madrid, London, Berlin, San Francisco, New York City, Sydney, and Mexico City. We’ve built a product customers love and a business that’s scaling quickly, backed by world-class investors and driven by rapid AI innovation across multiple product lines. At Aircall, you’ll join a company in motion. We’re ambitious, product-driven, and execution-focused, with visible impact, fast decisions, and real growth. How we work at Aircall: We’re customer-obsessed, data-driven, and focused on delivering meaningful outcomes. We value ownership, continuous learning, and thoughtful speed. If you thrive in a collaborative, fast-moving environment where trust and impact matter, you’ll feel at home here. We are seeking a gifted and",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Aircall. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/aircall/account-executive-dach-market-berlin-office-487839",
        "logo": "https://logo.clearbit.com/aircall.com",
        "companyLogo": "https://logo.clearbit.com/aircall.com",
        "image": "https://logo.clearbit.com/aircall.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-37",
        "title": "HubSpot CRM Consultant - Sales, Marketing & Service Hub (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (HubSpot CRM Consultant - Sales, Marketing & Service Hub (m/w/d))",
        "company": "itelligy - digital experts GmbH & Co. KG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Freiburg im Breisgau",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "itelligy - digital experts ist eine dynamische IT-Beratung, die sich auf CRM-, ERP- und digitale Geschäftsprozesslösungen spezialisiert hat. Wir arbeiten mit führenden Plattformen wie HubSpot und Microsoft Dynamics 365 und integrieren diese nahtlos in die IT-Infrastruktur unserer Kunden. Unser Ziel ist es, digitale Transformationen voranzutreiben und Kunden zu helfen, effizientere und datenbasierte Entscheidungen zu treffen. \n Für unser wachsendes HubSpot-Geschäft suchen wir Dich: eine/n erfahrene/n HubSpot-Expert/in, der/die die Plattform in- und auswendig kennt, Kundenprojekte eigenverantwortlich steuert und HubSpot nicht nur einführt, sondern zum echten Wachstumsmotor unserer Kunden macht. \n Aufgaben \n Deine Aufgaben: \n HubSpot-Einführungen von A bis Z: Du verantwortest die Konzeption und Implementierung von Sales Hub, Marketing Hub und Service Hub – von der Anforderungsaufnahme über das Setup bis zum Go-live und Hypercare. \n Integration & Systemarchitektur: Du bindest HubSpot an bestehende Systemlandschaften an (ERP, BI, Telefonie, Webshops etc.) – via nativer Integrationen, Middleware oder API – und sorgst für saubere Datenflüsse und hohe Datenqualität. \n Prozessberatung: Du analysierst die Vertriebs-, Marketing- und Serviceprozesse unserer Kunden und übersetzt sie in durchdachte HubSpot-Setups mit Workflows, Automatisierungen, Pipelines und Reportings. \n Projektmanagement & Kundenverantwortung: Du steuerst Deine Projekte eigenständig – inklusive Budget, Timeline, Stakeh",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة itelligy - digital experts GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Consulting",
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/itelligy-digital-experts-gmbh-co-kg/hubspot-crm-consultant-sales-marketing-service-hub-freiburg-im-breisgau-411974",
        "logo": "https://logo.clearbit.com/itelligydigitalexpertsgmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/itelligydigitalexpertsgmbhcokg.com",
        "image": "https://logo.clearbit.com/itelligydigitalexpertsgmbhcokg.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-38",
        "title": "Werkstudent Growth Associate (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Werkstudent Growth Associate (m/w/d))",
        "company": "Eneto GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Bei Eneto machen wir moderne Klimaanlagen- und Heizlösungen schnell, einfach und bezahlbar zugänglich. Mit hochwertigen Markenprodukten, klaren Prozessen und transparenten Festpreisen kommen Kunden ohne Aufwand zur optimalen Lösung. Über 70.000 Kundenerfahrungen aus früheren Energieprojekten bilden unsere Basis. Unser Marketingteam ist klein, bewegt aber viel – und genau deshalb suchen wir jemanden, der nicht wartet, bis ihm etwas gesagt wird, sondern selbst denkt, anpackt und mitgestaltet. Wer Verantwortung übernehmen will, bekommt sie bei uns. \n Aufgaben \n Du arbeitest direkt mit den Gründern an strategischen und operativen Themen, die gerade anstehen – von Produkt über Business Development bis Marketing. \n Du übernimmst eigene Projekte entlang der Wachstumshebel: neue Vertriebskanäle aufbauen, Partnerschaften anbahnen, Prozesse aufsetzen, Angebote schärfen. \n Du analysierst, wo wir Hebel haben, leitest Hypothesen ab und testest sie – ob im Funnel, im Produkt oder im Vertrieb. \n Du recherchierst Märkte, Wettbewerber und Kooperationsmöglichkeiten und bereitest Entscheidungen vor. \n Du springst dort ein, wo es brennt – im jungen Unternehmen heißt das: heute Partnergespräche vorbereiten, morgen eine Landingpage konzipieren, übermorgen einen Prozess aufsetzen. \n Du bringst eigene Ideen ein – und siehst, was daraus wird. \n Qualifikation \n Du bist immatrikuliert (z. B. BWL, Wirtschaftsinformatik, Wirtschaftsingenieurwesen, Marketing o. Ä.) und hast 20 Stunden pro Woche Zeit. \n Er",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eneto GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eneto-gmbh/werkstudent-growth-associate-berlin-132806",
        "logo": "https://logo.clearbit.com/enetogmbh.com",
        "companyLogo": "https://logo.clearbit.com/enetogmbh.com",
        "image": "https://logo.clearbit.com/enetogmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-39",
        "title": "Produktmanager Managed Services - Cloud & Infrastructure (m/w/d) - Remote",
        "title_ar": "مدير وقائد فريق (Produktmanager Managed Services - Cloud & Infrastructure (m/w/d) - Remote)",
        "company": "Swissitsecuritygroup",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Du willst die Zukunft moderner Cloud- und Infrastruktur-Services aktiv mitgestalten? Begeistert es Dich, technische Innovationen in marktfähige Services zu übersetzen und dabei die Schnittstelle zwischen Kunden, Vertrieb und Delivery zu bilden? Dann werde Teil unseres Teams als Produktmanager (m/w/d) Managed Services mit Schwerpunkt Cloud & Infrastructure . In dieser Rolle verantwortest Du die Weiterentwicklung unseres Serviceportfolios und sorgst dafür, dass unsere Managed Services kundenorientiert, wirtschaftlich, vertrieblich nutzbar und operativ erfolgreich bereitstellbar sind. Gemeinsam gestalten wir innovative Serviceangebote für die Herausforderungen von morgen. \n „Wir suchen keine klassischen Produktverkäufer. Wir suchen Menschen, die Kunden strategisch begleiten, komplexe Herausforderungen verstehen und daraus langfristige Services entwickeln. Wer Managed Services erfolgreich verkaufen will, muss Technologie, Betrieb und Business gleichermaßen verstehen.“ Christoph Wolf, Managing Director Secure IT Services \n Du fühlst Dich angesprochen? Unser Team wächst stetig und wir suchen Dich als Produktmanager (m/w/d) Managed Services an einem unserer Standorte oder Remote . \n WAS DU BEI UNS MACHST \n Weiterentwicklung und Lifecycle-Steuerung unseres Serviceportfolios im Bereich Cloud & Infrastructure sowie Bewertung neuer Serviceideen hinsichtlich Kundennutzen, Marktpotenzial, Lieferfähigkeit und Wirtschaftlichkeit \n Entwicklung, Kalkulation und Optimierung marktfähiger Manage",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Swissitsecuritygroup. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/swissitsecuritygroup/produktmanager-managed-services-cloud-infrastructure-remote-259169",
        "logo": "https://logo.clearbit.com/swissitsecuritygroup.com",
        "companyLogo": "https://logo.clearbit.com/swissitsecuritygroup.com",
        "image": "https://logo.clearbit.com/swissitsecuritygroup.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-40",
        "title": "Senior Global HR Business Partner (m/f/d)",
        "title_ar": "Senior Global HR Business Partner (m/f/d) (تصميم وإبداع)",
        "company": "SGB-SMIT Group",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Regensburg, Bayern, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Transform with us the future of energy ⚡ The SGB‑SMIT Group is an international transformer manufacturer with locations in Europe, Asia and the United States . With reliable transformer technology, the company actively supports the global energy transition in areas such as renewable energy, industry and urban energy infrastructure. As a key link between power generation, transmission and distribution, SGB‑SMIT Group develops and manufactures power transformers, distribution transformers, cast‑resin transformers and custom solutions for data centers, industrial applications and e‑mobility. These products ensure efficient, stable and secure energy flows worldwide. With more than 3,800 employees worldwide, the SGB‑SMIT Group stands for quality, innovation and sustainability and offers a stable environment to work on technologies that shape the energy systems of the future. What sets the SGB-SMIT Group apart : 🌍 We combine the strength of an international technology company with an employee-oriented corporate culture : Meaningful work at the heart of the energy transition Short decision-making processes and direct cooperation Stable, growing company with long-term prospects Your contribution counts – both professionally and personally . Your benefits at SGB-SMIT Group: 🚀 Stable, growing company with long-term prospects Attractive salary and social benefits Flexible working hours and hybrid working models 30+1 vacation days plus special leave Training and development opportunities",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SGB-SMIT Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Human resources"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sgb-smit-group/senior-global-hr-business-partner-regensburg-212494",
        "logo": "https://logo.clearbit.com/sgbsmitgroup.com",
        "companyLogo": "https://logo.clearbit.com/sgbsmitgroup.com",
        "image": "https://logo.clearbit.com/sgbsmitgroup.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-41",
        "title": "Managing Director",
        "title_ar": "Managing Director (برمجة وتكنولوجيا)",
        "company": "Valsoft Corp",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full time, director",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Description Valsoft specialises in acquiring and growing vertical market software companies. Our mission is to provide a permanent home for software businesses, preserving the legacy of their founders while investing in the long-term growth and success of the companies we acquire. We operate and manage a global portfolio of wholly owned software businesses, delivering mission-critical solutions across multiple verticals. By implementing industry best practices, Valsoft ensures a time-sensitive integration process and operates a decentralised model, fostering rapid growth through reinvestment in its portfolio.  The Role:  This position provides critical operational leadership to a company and potentially a portfolio of companies within a growing software vertical. As the leader of a company, you will be responsible for developing and implementing the business’s strategic plan across all major functions, including sales and marketing, R&D, customer service, professional services, and human resources.  You will work closely with the leadership team to identify, define, and execute strategies required to achieve growth plans and operating objectives, with a focus on improving operational excellence. This role carries full accountability for the company's results, making it ideal for a driven leader eager to make a significant impact.  Key Responsibilities:  Own the long-range, annual, and quarterly financial and non-financial goals Develop and communicate a clear vision of goals ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Valsoft Corp. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Management",
            "Computer software",
            "Helios software group",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/valsoft-corp/remote-managing-director-germany-149083",
        "logo": "https://logo.clearbit.com/valsoftcorp.com",
        "companyLogo": "https://logo.clearbit.com/valsoftcorp.com",
        "image": "https://logo.clearbit.com/valsoftcorp.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-42",
        "title": "Tech Advisory Senior Consultant (m/w/d)",
        "title_ar": "Tech Advisory Senior Consultant (m/w/d) (أخرى)",
        "company": "Trusteq Gmbh",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS As a Senior Consultant (m/f/d) in the Tech Advisory area, you will take on a key role in complex transformation projects. You will support our clients in the digital and organizational evolution of their business models and processes - from strategy development through to operational implementation. You will work at the intersection of business, technology, and change management, applying agile methodologies in a targeted and effective way. In transformation projects, you will play a central role by bringing structure, clarity, and strong execution capabilities. Your responsibilities will include a wide range of tasks: Supporting transformation initiatives: Assisting clients in the structured development and optimization of organizations, processes, and ways of working Interface management between business and IT: Gathering, structuring, and aligning business requirements while ensuring a shared understanding of project objectives (Partial) project management: Independently planning, coordinating, and delivering projects with a strong focus on sustainable results Applying agile methodologies: Using agile ways of working and taking on relevant roles (e.g. Scrum Master or Product Owner) within projects Change management: Designing and supporting transformation processes, including stakeholder management and implementation support Process analysis and optimization: Identifying improvement opportunities and developing as well as implementing efficient, digitally enable",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech advisory",
            "Consulting",
            "Consultant"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/tech-advisory-senior-consultant-munchen-445290",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-43",
        "title": "HR Management Intern / Working Student (m/w/d)",
        "title_ar": "HR Management Intern / Working Student (m/w/d) (موارد بشرية وإدارة)",
        "company": "Trusteq Gmbh",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "remote",
        "type": "Student, Intern, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You support our HR team in day-to-day operations across the entire employee lifecycle - from onboarding and contract changes to offboarding. Together wit the team, you will work on further develop and digitize our HR processes and digital personnel files. You will help us make our workflows more efficient, transparent, user-friendly, and scalable. You will support us capture all HR-related data in our digital HR tool and organize it in a structured manner. You will also take on smaller independent projects (e.g., analyzing employee surveys, organizing training sessions or internal celebrations, and revising retirement plans and benefits). YOUR PROFIL You are a student majoring in Human Resources Management, Business Psychology, Social Sciences, Labor Law, or a comparable degree program. You’re interested in people, operational HR management, employee experience, and digital transformation. Ideally, you have already gained some initial practical experience in HR, for example through internships, working student roles, or student initiatives. You work in a structured, careful, and reliable manner and are able to keep track of multiple tasks running in parallel. You handle sensitive information responsibly and discreetly. You have good knowledge of MS Office or Google Workspace and ideally some initial experience with HR tools such as Personio or comparable systems. You enjoy using AI as a “colleague,” but don’t forget to question the results. You have very good Germa",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Working student",
            "Intern",
            "People & culture",
            "Hr"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/hr-management-intern-working-student-munchen-322412",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-44",
        "title": "Digital Ecosystem Working Student (m/w/d)",
        "title_ar": "Digital Ecosystem Working Student (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Student, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You support our project teams in consulting engagements focused on holistic digital ecosystems for the deployment of artificial intelligence (AI) and technologies You develop concepts, feasibility studies, and, where applicable, prototypes in close coordination with your project team You conduct initial independent market analyses, strategic reviews, and synergy assessments You review regulatory requirements and derive recommendations to ensure compliance with applicable legal frameworks (e.g., eIDAS 2.0 or the EU AI Act) You collaborate closely with clients and project teams and gain initial experience in presenting complex topics in a clear and structured manner YOUR PROFIL You are currently enrolled in a Master’s program in Business Administration, (Business) Informatics, Engineering, Natural Sciences, Mathematics, or a related discipline You bring initial relevant professional experience for the role (e.g., internships or working student positions), ideally gained in a consulting environment You have a strong interest in IT-oriented management consulting and in working as an IT strategy consultant You are interested in regulatory frameworks or ideally have already gained initial relevant experience in this area (e.g., eIDAS 2.0, EU AI Act, FiDA) You are a team player, highly motivated, adaptable, communicative, and proactive You possess excellent German and English language skills (minimum C1 level in both languages) YOUR BENEFITS Supportive Team Culture: Team ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Working student",
            "Digital ecosystem",
            "Ki ecosystem",
            "Digital identity"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/digital-ecosystem-working-student-munchen-126494",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-45",
        "title": "Data Platform Engineer Working Student (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Data Platform Engineer Working Student (m/w/d))",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Student, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You support the design and development of Databricks-native data platforms and lakehouse architectures for internal projects and client engagements. You contribute to implementing medallion architectures (Bronze, Silver, and Gold), including Auto Loader-based data ingestion. You support the development of data governance concepts using tools such as Unity Catalog, including access control and permission models. You help automate deployments using Databricks Asset Bundles (DAB) and CI/CD pipelines. You contribute to developing data quality frameworks and monitoring solutions for production data platforms. You support the technical documentation of platform architectures and internal best practices. You contribute to internal tooling and demonstrator projects, actively helping shape and strengthen our Data Platform practice. YOUR PROFIL You are currently enrolled in an IT-related degree programme, such as Computer Science, Business Information Systems, Data Engineering, Data Science, or a related discipline. You have good knowledge of Python and SQL. Initial experience with Databricks and/or cloud data platforms such as Azure, AWS, or GCP is an advantage. You are interested in topics such as data lakehouses, data governance, Infrastructure as Code, and CI/CD. You have a basic understanding of data modelling and data integration processes (ETL/ELT). Experience with Git and version control is desirable. You work independently and in a structured manner and demonstrate ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Working student",
            "Data analyst",
            "It-strategy"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/data-platform-engineer-working-student-munchen-195978",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-46",
        "title": "Cybersecurity Manager (m/w/d)",
        "title_ar": "مدير وقائد فريق (Cybersecurity Manager (m/w/d))",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You assume overall responsibility for projects, key topics, and the company’s development within the field of cybersecurity You take on leadership and strategic responsibilities in the consulting, design, and implementation of cybersecurity solutions You ensure that defined milestones and project objectives are achieved You manage stakeholder communication and lead status meetings You serve as the primary point of contact for our clients, project leads, and team members, representing the team’s results externally You assess and advise our clients in the field of cybersecurity and contribute to the development of new services and topic areas You analyze complex processes and systems, particularly in the area of Identity & Access Management (IAM) You design solution concepts and IT architectures You actively contribute to new client acquisition efforts You conduct IT vulnerability assessments and risk evaluations of information security incidents and further develop internal security methodologies and standards You lead and support transformation initiatives in the field of cybersecurity You take responsibility for internal development initiatives aimed at expanding and strengthening our company YOUR PROFIL You hold a strong to very strong completed Master’s degree in Business Administration, (Business) Informatics, or a related discipline You bring 5–8 years of professional experience in the field of cybersecurity, including the implementation of Zero Trust concepts",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Zero trust",
            "It-security",
            "Consulting",
            "Cybersecurity"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/cybersecurity-manager-munchen-381163",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-47",
        "title": "Cybersecurity Management Consultant(m/w/d)",
        "title_ar": "Cybersecurity Management Consultant(m/w/d) (برمجة وتكنولوجيا)",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS CRA, DORA, NIS2, ISO 27001, the EU AI Act – our clients face a wide range of regulatory requirements. For most companies, however, the path from regulatory requirements on paper to effective implementation in practice is far from clear. For our Munich-based Cyber Team, we are looking for you if you want to support our clients on this journey: You support our clients in implementing regulatory and cybersecurity-related requirements – from NIS2 and DORA to eIDAS and the EU AI Act – and translate them into processes that are actually embedded in day-to-day operations You develop analyses, concepts, and target operating models in the context of complex and emerging cybersecurity topics (e.g. digital identity management, AI security, or AI observability) and drive their implementation through to completion Depending on your professional experience, you lead projects as a project manager or take responsibility for individual work packages and workstreams You assess existing structures, identify risks and gaps, and derive concrete measures and implementation plans from your findings You collaborate with different teams on the client side (IT, Business, Compliance) to develop sustainable and effective solutions You present complex topics in a way that is convincing both in expert-level discussions and at board-level meetings You take on responsibility for your own work packages early on and, as your experience grows, progress into sub-project and project leadership roles B",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Zero trust",
            "It-security",
            "Consulting",
            "Cybersecurity"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/cybersecurity-management-consultant-munchen-105834",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-48",
        "title": "Cybersecurity (Senior) Software Engineer (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Cybersecurity (Senior) Software Engineer (m/w/d))",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You develop secure software and infrastructure solutions and integrate security-by-design principles into the development and deployment process from the very beginning. You support our clients in the design, development, and protection of modern applications and infrastructures, for example in the areas of AI, web, APIs, and cloud. You identify security risks in existing applications, cloud environments, and infrastructure configurations and derive concrete measures to remediate them. You conduct code reviews with a focus on security and establish best practices for secure software development. You work closely with development teams, architects, infrastructure teams, and security stakeholders to design secure systems holistically. You implement security mechanisms such as authentication, authorization, encryption, and secrets management in software solutions and cloud configurations. You integrate security checks into CI/CD pipelines and support the development of DevSecOps structures. You develop and maintain infrastructure-as-code solutions to provision cloud and platform infrastructures securely, transparently, and repeatably. You analyze new technologies and tools in the field of application security and actively contribute your ideas to client projects. You support our clients in their transformation toward secure software development, modern architectures, and automated infrastructure processes. You take ownership of your own work packages and actively cont",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering",
            "Cybersecurity",
            "Devsecops"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/cybersecurity-senior-software-engineer-munchen-368531",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-49",
        "title": "Cloud (Senior) Engineer / Architect (m/ w/ d)",
        "title_ar": "مهندس ومطور برمجيات (Cloud (Senior) Engineer / Architect (m/ w/ d))",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Köln",
        "location_ar": "Köln",
        "salary": "Competitive",
        "description": "YOUR TASKS You analyze and design solutions for our customers with regard to modern cloud architectures You design and operate tailored solutions both in the cloud and in hybrid environments, and contribute your expertise and ideas to continuous development and improvement You analyze existing application landscapes, design solution approaches for their migration to the cloud, and implement them You develop CI/CD pipelines and microservices together with the project team and ensure the security, stability, and compliance of our IT infrastructure through the use of Infrastructure as Code (IaC) You independently take responsibility for the management of build, staging, deployment, and release processes You are involved in consulting our customers both remotely and on site YOUR PROFIL You hold a completed degree in (Business) Informatics or a comparable qualification in the IT field, with at least 3-5 years of professional experience You have very strong expertise in cloud development and architecture with microservices based on Kubernetes / OpenShift, as well as networking and storage for operating applications in hybrid and cloud-native environments You are familiar with DevOps / GitOps / CI/CD and tools such as GitHub, GitLab, CircleCI, Tekton, etc., and for you, pipelines are more than just conduits for transporting oil and gas You feel at home in software engineering, Java/Kotlin, as well as Quarkus, Spring Boot, or Micronaut, and Kafka is not just something sitting on your",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cloud engineer",
            "Cloud architect",
            "Cloud developer",
            "Software developer"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/cloud-senior-engineer-architect-m-w-d-koln-492012",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-50",
        "title": "AI Strategy (Senior) Consultant (m/w/d)",
        "title_ar": "AI Strategy (Senior) Consultant (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You analyze business processes and identify optimization potential through the application of AI Additionally at Senior Level: You lead complex AI projects from ideation through to implementation. You advise business units and develop tailored AI strategies Additionally at Senior Level: You provide strategic consulting to executives on the integration of AI solutions You develop concepts, feasibility studies, and prototypes Additionally at Senior Level: You design and validate solution concepts as well as high-performance AI architectures You implement and continuously optimize AI solutions Additionally at Senior Level: You assume personnel responsibility for the project team. You conduct workshops and training sessions to foster AI literacy Additionally at Senior Level: You organize and facilitate interdisciplinary workshops and training programs You support our clients throughout their AI transformation initiatives Additionally at Senior Level: You analyze market trends and identify new business opportunities YOUR PROFIL For the Consultant role, you bring 1–2 years of professional experience Additionally at Senior Level: For the Senior Consultant role, you bring 2–5 years of professional experience You have relevant experience in implementing AI solutions within a corporate environment You have extensive experience in team leadership and project organization You are familiar with common AI and ML frameworks (e.g., PyTorch, TensorFlow, LangChain) as well as databa",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consultant",
            "Senior consultant",
            "Artifical intelligence"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/ai-strategy-senior-consultant-munchen-13052",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-51",
        "title": "AI Security (Senior) Consultant (m/w/d)",
        "title_ar": "AI Security (Senior) Consultant (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You analyze business processes, organizational structures, or technical systems and identify optimization potential through the use of AI. Additionally at Senior Level: You advise clients on the secure introduction and use of AI solutions and support them in realistically assessing the opportunities and risks of AI. You advise business units and develop tailored AI strategies to improve the effectiveness and efficiency of cybersecurity and related applications. Additionally at Senior Level: You support executives and project stakeholders with strategic and conceptual questions regarding the use of AI within existing security structures. You support project or program management for our clients. Additionally at Senior Level: You lead and oversee AI security projects from analysis through conception to implementation, acting as the central interface between business units, IT, and security. You prepare and facilitate workshops and training sessions. Additionally at Senior Level: You design, organize, and facilitate workshops, assessments, and training sessions on AI security, e.g., for risk assessment of AI use cases or the secure use of generative AI. You create reporting materials for decision-makers and committees to enable informed decision-making. Additionally at Senior Level: You document results, prepare management and decision-making materials, and present them appropriately to different stakeholders. Additionally at Senior Level: You develop and evaluate pra",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai",
            "Ai security",
            "Consultant",
            "Senior consultant"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/ai-security-senior-consultant-munchen-225303",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-52",
        "title": "AI Governance (Senior) Consultant (m/w/d)",
        "title_ar": "AI Governance (Senior) Consultant (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You analyze existing governance models and identify optimization potential in the context of AI. Additionally at Senior Level: You lead complex governance projects, assume strategic responsibility for the implementation of modern AI governance frameworks, and advise organizations on governance, risk, and compliance topics at the enterprise level. You design and implement policies, procedures, and frameworks to ensure robust AI governance. Additionally at Senior Level: You develop tailored governance strategies and solutions aligned with international compliance and ethical standards and advise on establishing new processes, committees, and clear accountability structures. You support clients nationally and internationally in establishing compliance and ethical standards. Additionally at Senior Level: You advise executives and decision-makers on regulatory risks and support organizations in preparing for the EU AI Act, including integrating its requirements into existing processes, structures, and control systems. You coordinate the implementation of governance processes within AI projects. Additionally at Senior Level: You oversee the implementation of governance processes, initiate continuous improvements, and collaborate closely with internal teams and clients, particularly in regulated industries. You assess regulatory requirements and derive measures to ensure compliance with applicable legal frameworks. Additionally at Senior Level: You support the implementat",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai",
            "Genai",
            "Artifical intelligence",
            "Eu ai act"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/ai-governance-senior-consultant-munchen-444025",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-53",
        "title": "AI (Senior)Consultant (m/w/d)",
        "title_ar": "AI (Senior)Consultant (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You analyze customer requirements and develop suitable AI solutions. Additionally at Senior Level: You lead technically complex AI projects and design innovative architectures. You implement and integrate AI systems into existing IT landscapes. Additionally at Senior Level: You evaluate and integrate new technologies and optimize existing systems. You support the evaluation and selection of AI technologies and tools. Additionally at Senior Level: You advise our clients and internal stakeholders on technical AI solutions. You design and develop prototypes to demonstrate technical feasibility. Additionally at Senior Level: You create detailed technical concepts and conduct code reviews. You work closely with interdisciplinary teams to implement technical concepts. Additionally at Senior Level: You ensure compliance with technical standards and best practices. You document and continuously improve technical processes. Additionally at Senior Level: You take on personnel responsibility for the project team. YOUR PROFIL You have a strong to excellent completed (Master’s) degree in Business Administration, (Business) Informatics, Engineering, Natural Sciences, Mathematics, or a related discipline. You bring 1–2 years of professional experience for the Consultant role, or 2–5 years for the Senior Consultant role. You have relevant experience in implementing AI solutions in a business environment. You possess strong knowledge of common AI and ML frameworks (e.g., PyTorch, T",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai",
            "Ki",
            "Generative ki",
            "Ai developer"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/ai-seniorconsultant-munchen-285773",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-54",
        "title": "AI (Senior) Developer (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (AI (Senior) Developer (m/w/d))",
        "company": "Trusteq Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "YOUR TASKS You integrate generative AI technologies into existing application software Additionally at senior level: You take ownership and technical responsibility from initial concept through to successful delivery You analyze complex datasets for specific AI use cases and improve data quality Additionally at senior level: You actively drive continuous improvement of data quality You evaluate and optimize software systems with AI components (e.g., LangChain, OpenAI, Ollama) Additionally at senior level: You establish best practices for evaluating and optimizing these technologies You further develop existing AI solutions and design new approaches Additionally at senior level: You are responsible for architectural decisions and provide impulses for innovative approaches You contribute to cloud-native development projects with a focus on AI-driven software solutions Additionally at senior level: You design and define comprehensive architectural decisions You integrate AI-ready database systems for complex application. Additionally at senior level: You take responsibility for the strategic use of such systems in more complex projects You research and evaluate new technologies and methods in the field of AI Additionally at senior level: You identify emerging technologies and methods and introduce them strategically You collaborate with customers and project teams and present results professionally Additionally at senior level: You provide technical leadership to developers and ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusteq Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai",
            "Ki",
            "Generative ki",
            "Ai developer"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusteq-gmbh/ai-senior-developer-munchen-128938",
        "logo": "https://logo.clearbit.com/trusteqgmbh.com",
        "companyLogo": "https://logo.clearbit.com/trusteqgmbh.com",
        "image": "https://logo.clearbit.com/trusteqgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-55",
        "title": "Werkstudent Quality Assurance (m/w/d) - Medizinalcannabis",
        "title_ar": "Werkstudent Quality Assurance (m/w/d) - Medizinalcannabis (أخرى)",
        "company": "Semdor Pharma Group GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Entry, Intern, Full or part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Köln",
        "location_ar": "Köln",
        "salary": "Competitive",
        "description": "Deine Aufgaben Du unterstützt bei der Erstellung und Pflege qualitätsrelevanter Dokumente, z. B. SOPs. Du wirkst bei der Bearbeitung von Abweichungen, CAPAs und Qualitätsreklamationen mit. Du unterstützt bei der Erstellung von Berichten, Auswertungen und Übersichten. Du recherchierst zu qualitätsbezogenen und regulatorischen Fragestellungen. Du bringst dich im operativen Tagesgeschäft und in spannenden Projekten innerhalb der Qualitätsabteilung ein. Dein Profil Du bist in einem naturwissenschaftlichen oder technischen Studiengang eingeschrieben, z. B. Pharmazie, Chemie, Biologie, Biotechnologie oder Life Sciences. Du hast Interesse an Qualitätsthemen und pharmazeutischen Prozessen und möchtest dein Wissen in der Praxis erweitern. Du arbeitest dich schnell in neue Themen ein und überzeugst durch Eigeninitiative, Motivation und eine strukturierte Arbeitsweise. Du arbeitest gerne im Team, übernimmst Verantwortung und gehst deine Aufgaben zuverlässig an. Du verfügst über sehr gute Deutsch- und gute Englischkenntnisse. Warum wir? Zeit für dich Freu dich auf 30 Tage Urlaub pro Jahr bei einer 5-Tage und 40-Stunden-Woche – die halben Tage an Heiligabend und Silvester bekommst du zusätzlich geschenkt. Urban Sports Club Bleib aktiv, wann und wie es zu dir passt: Mit dem Urban Sports Club (Tarif „Classic“) – mit nur geringer Eigenbeteiligung. Mittagessen ohne Aufwand Keine Lust auf Vorkochen? Mit Mealmates kommt dein subventioniertes Mittagessen ganz unkompliziert zu dir. Unterstützung ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Semdor Pharma Group GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/semdor-pharma-group-gmbh/werkstudent-quality-assurance-medizinalcannabis-koln-187120",
        "logo": "https://logo.clearbit.com/semdorpharmagroupgmbh.com",
        "companyLogo": "https://logo.clearbit.com/semdorpharmagroupgmbh.com",
        "image": "https://logo.clearbit.com/semdorpharmagroupgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789528149-56",
        "title": "Marketplace Operations Manager II",
        "title_ar": "مدير وقائد فريق (Marketplace Operations Manager II)",
        "company": "Wheel",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Job Title: Marketplace Operations Manager II \n Job Location (Remote): Remote, USA \n About the Company \n Wheel is evolving the traditional care ecosystem by equipping the nation's most innovative companies with a premier platform to deliver high-quality virtual care at scale. We offer proven strategies and cutting-edge technologies to foster consumer engagement, build brand loyalty, and maximize return on investment. Wheel solutions include configurable virtual care programs, an intuitive consumer interface, and access to a nationwide network of board-certified clinicians. Discover how Wheel is transforming the future of healthcare by visiting www.wheel.com . \n About the Role \n We're looking for a Marketplace Operations Manager II to own visit delivery for a defined set of Wheel's client programs. This is an operator's role for someone who wants day-to-day ownership of critical business outcomes - and can carry that accountability even when some levers live with peer functions. You'll take on the complex, ambiguous problems that come with scaling a fast-growing telehealth marketplace - from stabilizing a roster through demand volatility, to leading cross-functional projects that shape how Marketplace Operations scales next. \n You will own the visit delivery SLA commitments, program-level consult cost performance, and the roster health for your clients. Separate functions on the team own overall clinician supply forecasting, clinician performance management, and scheduling - fr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Wheel. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product & operations"
        ],
        "applyUrl": "https://jobicy.com/jobs/153335-marketplace-operations-manager-ii",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210112005722-210970.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210112005722-210970.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210112005722-210970.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789528149-57",
        "title": "Principal, User Research",
        "title_ar": "Principal, User Research (تصميم وإبداع)",
        "company": "Mural",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "ABOUT THE TEAM \n At Mural, we believe great collaboration starts with deep understanding. Our mission is to help teams think and work together better. The Design and Research team uncovers the truths that power that mission, guiding product, design, and strategy through rigorous, human-centered inquiry. We combine behavioral science, market insight, and creative exploration to shape Mural’s future for how teams ideate, align, and collaborate together across the world. \n YOUR MISSION \n As the Principal, User Researcher at Mural, you’ll start a UX research practice and lead foundational and strategic research that shapes how the company defines its next generation of experiences. You’ll partner across product, design, sales, marketing, and strategy to identify new opportunity spaces, clarify evolving user needs, and guide the organization toward long-term innovation. \n This is a primarily individual-contributor role focused on uncovering deep human collaboration insights that drive strategy, innovation, and long-term vision. You’ll also help shape and scale the UXR discipline at Mural by mentoring designers to confidently run tactical usability studies, and establishing the frameworks and best practices that elevate research across the company. Think of it as being the first research leader at a fast-growing startup, with the reach and resources of a global platform. \n WHAT YOU'LL DO \n Player Responsibilities (Individual Contributor Work): \n Lead mixed-methods research (qualita",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mural. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Web, ui & ux design"
        ],
        "applyUrl": "https://jobicy.com/jobs/153336-principal-user-research",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/9b6f1383-221.jpeg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/9b6f1383-221.jpeg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/9b6f1383-221.jpeg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789528149-58",
        "title": "Staff Software Engineer, AI-Native Systems",
        "title_ar": "مهندس ومطور برمجيات (Staff Software Engineer, AI-Native Systems)",
        "company": "Wheel",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Staff Software Engineer, AI-Native Systems (Tech Lead) \n Location: Remote (US) \n We are \n Virtual care only works if the infrastructure behind it does. Wheel builds that infrastructure — the systems that let telehealth run at scale for the patients, clinicians, and companies depending on it. We're not bolting AI onto old workflows; we're rebuilding them from the ground up. Our mission to put great healthcare in everyone's reach means replacing manual, ad-hoc processes with intelligent, agent-powered systems that carry real operational load. We're innovating in a live, regulated healthcare environment where getting it right matters. This is the next architecture of virtual care, and we're building it now. \n You are \n A staff-level engineer who sets technical direction for agentic systems and then leads the work to ship them. You've built and operated agents in production, you know where they break, and you have opinions — held loosely, argued well — about how to build them so they hold up in a regulated environment. \n You operate with the scope of a domain owner, not a task owner. You take a problem that isn't yet well-formed, define it, sequence it, and lead a group of engineers to a shipped and measured outcome. Your impact shows up in other people's work as much as your own: the patterns they reuse, the design decisions they don't have to relitigate, the ambiguity you removed before it cost the team a quarter. \n You treat AI two ways at once — as a product capability you bu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Wheel. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153338-staff-software-engineer-ai-native-systems",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210112005722-210970.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210112005722-210970.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210112005722-210970.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789528149-59",
        "title": "Sales Engineer, Enterprise",
        "title_ar": "مهندس ومطور برمجيات (Sales Engineer, Enterprise)",
        "company": "Socket",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About Us \n Socket helps devs and security teams ship faster by cutting out security busywork. Thousands of orgs use Socket to safely find, audit, and manage open source code. Our customers - from Anthropic to xAI, and Figma to Vercel - love Socket (just check out their tweets to see for yourself!) \n Founded by Feross Aboukhadijeh , a long-time open source maintainer with software downloaded over a billion times a month, Socket has raised $ 125M in funding from top angels, operators, and security leaders. \n About the Role \n Socket is looking for a Sales Engineer to support our enterprise customers. In this role you will be at the nexus between our customers and our engineering, product, and design teams. You'll work cross-functionally in order to provide technical education, guidance, and support in a pre-sales capacity. \n What You'll Do \n Lead discussions and product demonstrations to showcase capabilities; address customer challenges, respond to questions, and handle objections. \n Craft technical content to guide customers in implementing specific use cases or extending our solution. \n Collaborate with account teams to understand customer requirements and translate them to Socket capabilities, emphasizing business value. \n Support Proof of Concepts (POCs) that align with customer requirements; provide technical expertise, troubleshooting, and guidance throughout the evaluation process. \n Provide guidance on integrating solutions into the customer's existing infrastructure. \n",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Socket. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153337-sales-engineer-enterprise-2",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1314ce3c-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1314ce3c-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1314ce3c-221.png",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789528149-60",
        "title": "Deal Desk Analyst",
        "title_ar": "Deal Desk Analyst (مالية ومحاسبة)",
        "company": "Mural",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina",
        "location_ar": "Argentina",
        "salary": "Competitive",
        "description": "ABOUT THE TEAM \n The Deal Desk team sits within Finance and helps Mural execute complex and non-standard sales agreements. As a small, highly collaborative team, we work closely with Sales, Finance, Legal and GTM Systems to provide guidance, manage risk and ensure deals align with company policies and revenue requirements. \n YOUR MISSION \n As a Deal Desk Analyst, you’ll help turn complex sales opportunities into successful customer agreements. You’ll apply sound judgment, attention to detail and a solutions oriented mindset to help Sales move efficiently while maintaining financial and operational discipline. Your work will support a faster, more consistent and scalable deal process as Mural grows. \n WHAT YOU'LL DO \n Review opportunities, quotes, pricing, discounts, and contract terms for accuracy. \n Support deals from quote creation through billing. \n Ensure deals follow internal policies and revenue requirements. \n Partner with Sales to answer questions and help move opportunities forward. \n Work with Finance to confirm billing details and revenue-related requirements. \n Collaborate with Legal on contract terms and non-standard requests. \n Partner with the GTM Systems team to resolve Salesforce or system-related issues. \n Maintain accurate deal documentation and record relevant deal precedents. \n Identify process improvements that increase deal speed, accuracy, and consistency. \n Help develop and maintain team resources, guidelines, and knowledge repositories. \n Help create",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mural. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance & accounting"
        ],
        "applyUrl": "https://jobicy.com/jobs/153340-deal-desk-analyst-5",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/9b6f1383-221.jpeg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/9b6f1383-221.jpeg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/9b6f1383-221.jpeg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
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
    if (typeof this.init === 'function') {
      try { this.init(); } catch(e) {}
    }
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
