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
        "id": "job-1789644357-1",
        "title": "Asset Specialist (F/M/X)",
        "title_ar": "Asset Specialist (F/M/X) (مالية ومحاسبة)",
        "company": "Veolia",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Belgium",
        "location_ar": "Belgium",
        "salary": "$3,100 - $3,550 EUR",
        "description": "DB&T is a leading organization focused on delivering comprehensive IT asset management services across UK&I and the Northern European Zone. We are seeking a skilled Asset Specialist to lead and deliver comprehensive IT asset management services. The role focuses on ensuring optimal lifecycle management of hardware and software assets while driving process improvements and maintaining robust financial control. Key Responsibilities: \n Manage software and hardware asset lifecycle \n Process and monitor purchase orders \n Negotiate with key suppliers \n Cross-reference invoices and maintain financial records \n Identify technical requirements and update relevant teams \n Coordinate with procurement for asset acquisition \n Manage SAP processes for asset tracking \n Monitor and optimize asset utilization \n Qualifications & Requirements: \n ITIL Foundation certification \n Experience in IT asset management \n SAP knowledge required \n Strong financial acumen for PO processing and invoice reconciliation \n Procurement and vendor management experience \n Technical understanding of IT infrastructure \n Strong negotiation and communication skills \n Ability to work with directors and cross-functional teams \n Fluent in Dutch, French, and English \n What We Offer: \n Competitive salary package \n Professional development opportunities \n Comprehensive benefits package \n Dynamic work environment \n Opportunity to work with cutting-edge technology \n Who would you be working for? Veolia BeLux is part of the in",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Veolia. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "It-asset-management",
            "Asset-specialist",
            "Procurement"
        ],
        "applyUrl": "https://himalayas.app/companies/veolia/jobs/asset-specialist-f-m-x",
        "logo": "https://cdn-images.himalayas.app/jw87ih5q7ov07zbu3mocwhq4bjot",
        "companyLogo": "https://cdn-images.himalayas.app/jw87ih5q7ov07zbu3mocwhq4bjot",
        "image": "https://cdn-images.himalayas.app/jw87ih5q7ov07zbu3mocwhq4bjot",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644357-2",
        "title": "Remote Member Benefits Specialist",
        "title_ar": "Remote Member Benefits Specialist (المبيعات والنمو)",
        "company": "Global Elite Empire Consultants",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Ready to Take Control of Your Income and Career? \n If you're motivated, driven, and looking for more than a traditional 9-to-5, this could be the opportunity you've been searching for. \n We're seeking ambitious individuals to join a growing remote team, helping clients who have already requested information about financial protection and benefits. With qualified leads, comprehensive training, and ongoing mentorship, you'll have the support you need to build a rewarding long-term career. \n What You'll Do \n Meet virtually with clients who have requested information \n Understand each client's needs and explain available benefit options \n Guide clients through the enrollment process with professionalism and care \n Build lasting relationships through exceptional customer service \n Maintain accurate client records and follow up as needed \n What We Provide \n ✅ Pre-qualified leads—no cold calling \n 🏡 100% remote work environment \n ⏰ Flexible full-time or part-time scheduling \n 🎓 Comprehensive training—no prior experience required \n 🤝 Ongoing mentorship and coaching \n 💻 Access to industry-leading technology and resources \n 📈 Clear opportunities for career growth and leadership \n Compensation \n Performance-based earnings \n Competitive commission structure with uncapped earning potential \n Leadership and team development opportunities for top performers \n We're Looking For \n Self-motivated individuals with a strong work ethic \n Excellent communication and interpersonal skills \n Competit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote-sales",
            "Customer-service"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/remote-member-benefits-specialist",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-3",
        "title": "Software Engineer",
        "title_ar": "مهندس ومطور برمجيات (Software Engineer)",
        "company": "Jampp",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina",
        "location_ar": "Argentina",
        "salary": "Competitive",
        "description": "WHO WE ARE Jampp is a programmatic advertising platform used by the most ambitious companies to accelerate their mobile businesses. Founded in 2013, Jampp leverages machine learning, creative optimization, and proprietary advertising solutions to drive incremental growth for leading mobile advertisers such as Uber, Just Eat , FREENOW, Rappi, and BIGO Live. We’ve experienced tremendous growth over the past years: from expanding our global footprint to 10+ countries and building a team of 100+ mobile experts, to becoming part of the Affle Group, a fast-growing AdTech company that successfully launched its IPO in 2019 and owns multiple industry-leading platforms, including Appnext, mDSP, mediasmart, Newton, RevX, Ultra, and YouAppi, in addition to Jampp . Today, Jampp is consistently ranked as a top mobile performance partner by the industry’s leading MMPs, featured across 10 categories of Singular’s ROI Index and listed as a top-10 performer in AppsFlyer’s Performance Index. CURRENT CHALLENGES \n Build real-time system that processes more than 2,500,000 transactions per second \n Maintain a scalable world wide architecture that allows us to reach users from all countries \n Combine Amazon services with in-house solutions to maximize the efficiency \n Profile and evaluate the current solutions in search of performance improvements \n Design complex and efficient data structures and algorithms to maximize code performance \n WHAT YOU'LL DO \n Code in Python and Go high-performance backe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jampp. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech-and-engineering",
            "Software-engineer",
            "Backend-development",
            "Python-development"
        ],
        "applyUrl": "https://himalayas.app/companies/jampp/jobs/software-engineer",
        "logo": "https://logo.clearbit.com/jampp.com",
        "companyLogo": "https://logo.clearbit.com/jampp.com",
        "image": "https://logo.clearbit.com/jampp.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-4",
        "title": "Data Scientist",
        "title_ar": "Data Scientist (برمجة وتكنولوجيا)",
        "company": "Oteemo, Inc",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "We're looking for a Data Scientist to lead the design and development of optimization and machine learning models that allocate scarce parts and resources across competing programs. You'll build algorithms spanning mixed-integer programming, constraint optimization, and ML-driven forecasting that turn hard supply constraints into defensible, auditable allocation decisions. You'll own the full modeling lifecycle, from problem formulation and data exploration through validation and production deployment, partnering closely with program stakeholders to translate competing priorities into solvable objectives. This is a high-visibility role for someone who moves fluidly between rigorous quantitative modeling and pragmatic, program-facing communication. Key Responsibilities: \n Design and implement optimization models (e.g., mixed-integer linear programming, constraint programming) for allocating scarce parts and resources across competing programs. \n Develop ML models to forecast demand, supply risk, and part availability, feeding those forecasts directly into allocation logic. \n Translate ambiguous, competing program priorities into formal objective functions and constraints. \n Validate model outputs against historical allocation decisions and stakeholder expectations; iterate on formulations as new constraints emerge. \n Build and maintain the data pipelines needed to keep optimization models current with live inventory, demand, and program data. \n Present modeling tradeoffs and r",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Oteemo, Inc. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-science",
            "Operations-research",
            "Supply-chain-analytics"
        ],
        "applyUrl": "https://himalayas.app/companies/oteemo-inc/jobs/data-scientist",
        "logo": "https://cdn-images.himalayas.app/r1uej7xn1gj6cxk4f88iuw2wkm21",
        "companyLogo": "https://cdn-images.himalayas.app/r1uej7xn1gj6cxk4f88iuw2wkm21",
        "image": "https://cdn-images.himalayas.app/r1uej7xn1gj6cxk4f88iuw2wkm21",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-5",
        "title": "Manager, Accounting Advisory - Manufacturing Industry Clients",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Manager, Accounting Advisory - Manufacturing Industry Clients)",
        "company": "Wipfli",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$113,000 - $153,000 USD",
        "description": "Overview At Wipfli , people count. At Wipfli , our people are core to everything we do—the catalyst behind our ability to create exceptional impact and extraordinary results. We believe in flexibility. We focus on relationships. We encourage each individual to follow their own path. People truly matter and they feel it. For those looking to make a difference and find a professional home, Wipfli offers a career-defining opportunity. This role supports manufacturing clients by delivering high-quality financial reporting, performance insights, and operational recommendations that drive business results. As a CAS Advisory Manager, you will lead client engagements, analyze financial data, and provide guidance on accounting and process improvements. You will also mentor teams and collaborate with both domestic and overseas resources to enhance service delivery and efficiency. This is a highly visible, client-facing role focused on building strong relationships and delivering impactful advisory solutions. This job can be worked remotely anywhere in the US! Responsibilities Responsibilities: \n Review financial reporting packages and work papers for quality, completeness, and timely delivery. \n Prepare and analyze benchmarking data and key performance indicators to support client insights. \n Present completed reporting packages and findings to clients as directed. \n Assist in preparing budgets, forecasts, and cash flow models in alignment with client engagement terms. \n Provide techni",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Wipfli. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Accounting-advisory",
            "Management-accounting",
            "Manufacturing-accounting",
            "Client-advisory-services"
        ],
        "applyUrl": "https://himalayas.app/companies/wipfli/jobs/manager-accounting-advisory-manufacturing-industry-clients",
        "logo": "https://cdn-images.himalayas.app/5roydkaqjy0nbvv637yn1ge8lnk6",
        "companyLogo": "https://cdn-images.himalayas.app/5roydkaqjy0nbvv637yn1ge8lnk6",
        "image": "https://cdn-images.himalayas.app/5roydkaqjy0nbvv637yn1ge8lnk6",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-6",
        "title": "Senior Technical Integration Specialist",
        "title_ar": "Senior Technical Integration Specialist (برمجة وتكنولوجيا)",
        "company": "Guidehealth",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$100,000 - $115,000 USD",
        "description": "The Senior Technical Integration Specialist plays a pivotal part in onboarding new practices’ clinical data, new payers' claims data, and managing technical implementation projects with healthcare vendors. The Sr. Technical Integration Specialist is responsible for supporting data integration efforts, managing system deployments, and ensuring successful go-live of AI and data-driven solutions in a complex healthcare environment. What you'll be doing \n Acting as the technical point of contact for both external and internal stakeholders during the onboarding and implementation process. \n Managing, coordinating, and executing data integration and tech integration projects, including EMR integrations, third-party vendor integrations, data retrievals, API connections, and SFTP data feeds with vendors. \n Facilitating conversations between internal and external tech and business stakeholders, designing, documenting and presenting data flow diagrams, and project managing integrations to ensure successful and smooth delivery of the end results. \n Translating clinical and operational requirements into technical configurations and workflows. \n Creating and maintaining integration documentation including technical specifications, workflow and processes diagrams, implementation guides, and SOPs. \n Performing data QA and validation activities, including executing scripts and manual checks for data format, completeness, and accuracy. \n Troubleshooting and resolving integration issues, coord",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Guidehealth. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Healthcare-integration",
            "Data-integration"
        ],
        "applyUrl": "https://himalayas.app/companies/guidehealth/jobs/senior-technical-integration-specialist",
        "logo": "https://cdn-images.himalayas.app/tzgt59wdhfp9ymemlqc8fg6133zj",
        "companyLogo": "https://cdn-images.himalayas.app/tzgt59wdhfp9ymemlqc8fg6133zj",
        "image": "https://cdn-images.himalayas.app/tzgt59wdhfp9ymemlqc8fg6133zj",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-7",
        "title": "Senior Guidewire Developer (PolicyCenter)",
        "title_ar": "مهندس ومطور برمجيات (Senior Guidewire Developer (PolicyCenter))",
        "company": "Mercury Insurance",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Other",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$94,458 - $179,048 USD",
        "description": "Overview Join an amazing team that is consistently recognized for our achievements and culture, including our most recent Forbes award of being one of America's Best Midsize Employers for 2026! Position Summary: As a Senior Software Engineer, you will play a crucial role in designing, developing, and maintaining complex software systems. This position involves leading agile teams or projects, mentoring junior engineers, and ensuring the delivery of high-quality software solutions. Geo-Salary Information An in-person interview may be required during the hiring process State specific pay scales for this role are as follows: $94,458 to $179,048 (CA, NJ, NY, WA, HI, AK, MD, CT, RI, MA) $85,871 to $162,771 (NV, OR, AZ, CO, WY, TX, ND, MN, MO, IL, WI, FL, GA, MI, OH, VA, PA, DE, VT, NH, ME) $77,283 to $146,464 (UT, ID, MT, NM, SD, NE, KS, OK, IA, AR, LA, MS, AL, TN, KY, IN, SC, NC, WV) In CA: Typical hiring range is $123,077.70 to $170,941.25 The expected base salary for this position will vary depending on a number of factors, including relevant experience, skills and location. Responsibilities Essential Job Functions: \n Write high-quality code for complex scenarios with good test coverage. \n Review and translate product requirements into robust designs to ensure high-quality distributed application systems that are modular, configurable, reusable, fast, effective, user-friendly, secure, compliant, scalable, and maintainable. \n Lead design and code reviews of multiple applications",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mercury Insurance. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-engineer",
            "Guidewire-development",
            "Insurance-technology",
            "Java-development"
        ],
        "applyUrl": "https://himalayas.app/companies/mercury-insurance/jobs/senior-guidewire-developer-policycenter-1276389619",
        "logo": "https://cdn-images.himalayas.app/xherhgcfvtqyefhdis0d8zpc2e2v",
        "companyLogo": "https://cdn-images.himalayas.app/xherhgcfvtqyefhdis0d8zpc2e2v",
        "image": "https://cdn-images.himalayas.app/xherhgcfvtqyefhdis0d8zpc2e2v",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-8",
        "title": "Développeur(euse) Full-Stack et intégration, SAP BTP | SAP BTP Full-Stack and In",
        "title_ar": "Développeur(euse) Full-Stack et intégration, SAP BTP | SAP BTP Full-Stack and In (برمجة وتكنولوجيا)",
        "company": "Talan",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Relevant du Directeur principal, PI et innovation SAP ainsi que de la Vice-présidence, livraison pour l’affectation aux mandats, le/la Développeur(euse) Full-Stack et intégration, SAP BTP développe les services, les applications et les intégrations conçus pour les clients de Talan . Ce rôle est centré sur le développement, les essais et la mise en production de code maintenable. Vous collaborez avec les architectes, les spécialistes fonctionnels et les équipes de soutien afin de transformer les conceptions en composantes sécurisées et observables pouvant être transférées aux opérations. Votre mission consiste à : \n Expertise technique et fonctionnelle \n Développer des services et applications avec le modèle de programmation d’applications infonuagiques SAP, notamment les modèles CDS, les services OData v4, la logique d’affaires, la validation et les autorisations. \n Créer des interfaces SAP Fiori et SAPUI5, des API et des services reliant les processus SAP et non SAP. \n Résolution de problèmes et pensée analytique \n Construire du contenu dans SAP Integration Suite, incluant les flux, transformations, politiques d’API, événements, mécanismes de reprise, alertes et surveillance. \n Écrire des essais unitaires et d’intégration, participer aux revues de code et maintenir les chaînes d’intégration et de déploiement continus en état de fonctionnement. \n Excellence opérationnelle Soutenir les essais, la correction des anomalies, la mise en production, la stabilisation et la résolutio",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Talan. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sap-development",
            "Fullstack-development",
            "Sap-integration"
        ],
        "applyUrl": "https://himalayas.app/companies/talan/jobs/developpeur-euse-full-stack-et-integration-sap-btp-sap-btp-full-stack-and-in",
        "logo": "https://cdn-images.himalayas.app/h4sjwtnzudafdqqkknliv4vrybrr",
        "companyLogo": "https://cdn-images.himalayas.app/h4sjwtnzudafdqqkknliv4vrybrr",
        "image": "https://cdn-images.himalayas.app/h4sjwtnzudafdqqkknliv4vrybrr",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-9",
        "title": "Staff Software Engineer - Platform and Cloud Services",
        "title_ar": "مهندس ومطور برمجيات (Staff Software Engineer - Platform and Cloud Services)",
        "company": "Agiloft",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "As the most trusted global leader in data-first contract lifecycle management (CLM) software, Agiloft helps organizations manage the end-to-end process of proposing, negotiating, signing, and leveraging contracts using our flexible Data-first Agreement Platform (DAP). With contract data as the foundation, customers quickly and collaboratively reach agreement and leverage contract visibility to thrive with competitive advantage. Employing powerful, pragmatic artificial intelligence as a legal force multiplier, and robust integration capabilities as a data liberator, organizations around the world trust Agiloft ’s certified implementers to deliver connected, intelligent, and autonomous solutions across the entire contract lifecycle. Top analysts like Gartner, Forrester, and IDC agree, all showing Agiloft as a leader in the CLM space. Our no code platform is easily managed and administered by business users, which is why Agiloft is the contract you keep: nearly a full 100% of new customers are satisfied with their initial implementations, and some 97% of customers renew every year. Ours is a growing, vibrant, successful company that is at the forefront of a market that is becoming a must-have for all organizations. We believe that the way to build the strongest, most vibrant place to work is to bring in individuals from all walks of life, and to support them in bringing their authentic selves to their day, every day. Our working philosophy is that “EX = CX”: when employee experi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Agiloft. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-engineer",
            "Platform-engineering",
            "Cloud-architecture",
            "Backend-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/agiloft/jobs/staff-software-engineer-platform-and-cloud-services-5083308863",
        "logo": "https://cdn-images.himalayas.app/7wlfqnzavka4vww2k7cgryk2taam",
        "companyLogo": "https://cdn-images.himalayas.app/7wlfqnzavka4vww2k7cgryk2taam",
        "image": "https://cdn-images.himalayas.app/7wlfqnzavka4vww2k7cgryk2taam",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-10",
        "title": "Project Manager",
        "title_ar": "مدير وقائد فريق (Project Manager)",
        "company": "Nüvitek",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$120,000 - $140,000 USD",
        "description": "At Nüvitek , customer success is our Ethos; together, we drive transformational outcomes. We only succeed when our customers succeed. We partner with our customers to achieve business objectives by using our proven customer-centric, value-driven business practices and service delivery methodologies. \n This role is ideal for a project management professional who combines strong delivery leadership with business analysis and Agile facilitation skills. The Project Manager will partner closely with customers, stakeholders, and delivery teams to gather business requirements, prioritize work, manage project execution, and ensure successful outcomes aligned with organizational goals. In assuming this position, you will be a critical contributor to meeting Nuvitek's mission: To deliver innovative, cost-effective solutions and services that enable our customers to rapidly adapt to dynamic environments. \n What you will do \n Lead day-to-day project and contract execution, ensuring work is delivered on time, within scope, and aligned with customer expectations. \n Partner with stakeholders to gather, document, analyze, and refine business and technical requirements. \n Facilitate requirements workshops, discovery sessions, backlog refinement meetings, sprint planning sessions, and stakeholder reviews. \n Translate business needs into actionable user stories, acceptance criteria, and project deliverables for technical teams. \n Manage project backlogs, priorities, timelines, dependencies, ris",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Nüvitek. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project-manager",
            "Business-analysis",
            "Scrum-master",
            "Federal-project-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/nuvitek/jobs/project-manager",
        "logo": "https://cdn-images.himalayas.app/4bt5pd4rvuda29lyalvqc5f6ei7b",
        "companyLogo": "https://cdn-images.himalayas.app/4bt5pd4rvuda29lyalvqc5f6ei7b",
        "image": "https://cdn-images.himalayas.app/4bt5pd4rvuda29lyalvqc5f6ei7b",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644358-11",
        "title": "Vice President, Payer Growth",
        "title_ar": "أخصائي تسويق ونمو (Vice President, Payer Growth)",
        "company": "MedeAnalytics",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$165,000 - $195,000 USD",
        "description": "About MedeAnalytics \n MedeAnalytics is the Enterprise Healthcare Performance company that delivers AI-driven, cloud-native solutions to help payers, risk-bearing providers and other value- and risk-bearing entities measurably improve performance by reducing costs, improving quality and MLR, optimizing utilization, increasing reimbursement, and elevating care quality across all lines of business. Its enterprise health data management platform—built on its proprietary Health Fabric™—unifies clinical, claims, financial, and social data into a single, scalable source of truth that fuels insights, action, and AI. \n As the industry’s healthcare intelligence partner of choice for more than 30 years, MedeAnalytics combines its platform, cross-domain enterprise analytics, AI-powered workflows, and Strategic Advisory™ services to transform intelligence into accountable execution—delivering greater ROI across value-based care, risk and quality, cost and utilization management, and network optimization. \n MedeAnalytics empowers organizations to move faster from insight to impact with confidence and measurable results. To learn more, visit  medeanalytics.com  and follow MedeAnalytics on  LinkedIn and Facebook . \n About Our Opportunity \n Core Requirement This role requires a proven strategic payer sales leader with demonstrated success selling and expanding enterprise solutions with health plans, primary focus in Medicare Advantage and Medicaid, secondarily in Commercial markets. The ideal",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة MedeAnalytics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Payer-sales",
            "Enterprise-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/medeanalytics/jobs/vice-president-payer-growth",
        "logo": "https://cdn-images.himalayas.app/xeg7jkwsyzlem66s9zp9879dezkg",
        "companyLogo": "https://cdn-images.himalayas.app/xeg7jkwsyzlem66s9zp9879dezkg",
        "image": "https://cdn-images.himalayas.app/xeg7jkwsyzlem66s9zp9879dezkg",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-12",
        "title": "NetSuite Administrator",
        "title_ar": "مصمم واجهات وتجربة مستخدم (NetSuite Administrator)",
        "company": "Omilia",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greece",
        "location_ar": "Greece",
        "salary": "Competitive",
        "description": "The NetSuite Administrator exists to own, operate, and continuously improve Omilia 's Oracle NetSuite ERP environment — a complex OneWorld setup spanning four legal entities with multi-currency, multi-book accounting, ARM-driven revenue recognition, and live Greek fiscal compliance. This role is the single point of technical accountability for NetSuite at Omilia , sitting at the intersection of Finance operations and enterprise systems. The successful individual works autonomously as a trusted partner to Finance, Engineering, and external auditors, ensuring the system is always audit-ready, integrated, and aligned to business needs. Accountabilities \n Own and govern the NetSuite ERP environment end-to-end, including system health, change control, and continuous improvement across all subsidiaries. \n Ensure the integrity and accuracy of multi-book accounting, intercompany transactions, and consolidated financial reporting in NetSuite OneWorld. \n Maintain and evolve the Advanced Revenue Management (ARM) module to support compliant, audit-ready revenue recognition under IFRS 15 / ASC 606. \n Act as the primary technical owner of NetSuite integrations, ensuring reliable data flow between NetSuite and billing, CRM, and payroll platforms. \n Sustain audit readiness across SOC 2, PCI-DSS, and statutory frameworks by maintaining system documentation, access controls, and change evidence. \n Drive NetSuite development and improvement projects, liaising with implementation partners and ev",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Omilia. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Netsuite-administration",
            "Erp-administration"
        ],
        "applyUrl": "https://himalayas.app/companies/omilia/jobs/netsuite-administrator",
        "logo": "https://cdn-images.himalayas.app/py6ig1tsqdoa5lr17u4u0i808693",
        "companyLogo": "https://cdn-images.himalayas.app/py6ig1tsqdoa5lr17u4u0i808693",
        "image": "https://cdn-images.himalayas.app/py6ig1tsqdoa5lr17u4u0i808693",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-13",
        "title": "Sales Representatives (Wholesale)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Representatives (Wholesale))",
        "company": "micro1",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$45 - $85 USD",
        "description": "Role Title: Sales Representatives (Wholesale) Role Type: Contractor Location: Remote micro1 is selecting Sales Representatives (Wholesale) to contribute their expertise to a customer’s project focused on technical B2B sales. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. This opportunity is ideal for professionals who excel at qualifying leads, translating complex technical offerings into compelling business value for wholesale buyers, and navigating extended sales cycles with skillful communication. Scope of Work \n Identify, prospect, and qualify B2B leads in the wholesale sector, leveraging advanced techniques to assess fit and potential. \n Translate technical product features and specifications into clear, non-technical business benefits for diverse audiences. \n Develop and contribute to persuasive written proposals and verbal presentations that address customer needs and project goals. \n Handle and resolve objections efficiently, using consultative selling skills and deep product knowledge. \n Document sales interactions and key customer feedback to provide actionable insights for AI training purposes. \n Engage with long sales cycle processes, demonstrating patience and persistence in nurturing complex opportunities. \n Collaborate remotely with project coordinat",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales-(wholesale)",
            "Wholesale-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/sales-representatives-wholesale-2519310245",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-14",
        "title": "PHP & React Software Engineer",
        "title_ar": "مهندس ومطور برمجيات (PHP & React Software Engineer)",
        "company": "Enumerate",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina, Bolivia, Brazil",
        "location_ar": "Argentina, Bolivia, Brazil",
        "salary": "$3,000 - $3,500 USD",
        "description": "Enumerate is seeking a PHP & React Software Engineer to help modernize our core product and platform systems across our software and payments ecosystem. We're building a new mobile application on PHP and React Native, and we're looking for an engineer who can help shape it while keeping our existing web application stable and reliable for the customers who depend on it every day. This is a hands-on role that balances two tracks: building new mobile-facing functionality and APIs, and investigating defects, troubleshooting production issues, and making incremental improvements to an existing vanilla PHP codebase. You'll work closely with Product, QA, and Support to resolve issues and ensure consistent behavior across web and mobile. This role is ideal for an experienced PHP engineer who is energized by modernization work but can also dive into legacy systems - someone who enjoys understanding complex business logic and knows that a stable foundation is what makes new development possible. This is a remote position, but candidates must be located in LATAM. \n Key Responsibilities & Deliverables Mobile & Platform Development Help stand up our new React Native mobile application, from project setup through first release. Build and extend the PHP APIs and services that power it. Help define how the mobile app integrates with existing systems. Establish patterns and conventions for mobile development that the team will build on as it grows. Own features and components end to end, fro",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Enumerate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Php-development",
            "React-native-development",
            "Fullstack-development",
            "Mobile-development"
        ],
        "applyUrl": "https://himalayas.app/companies/enumerate/jobs/php-react-software-engineer",
        "logo": "https://cdn-images.himalayas.app/xqwyx1ajij7u8ljmtxi9lwq3kjdp",
        "companyLogo": "https://cdn-images.himalayas.app/xqwyx1ajij7u8ljmtxi9lwq3kjdp",
        "image": "https://cdn-images.himalayas.app/xqwyx1ajij7u8ljmtxi9lwq3kjdp",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-15",
        "title": "Remote Dinka Interpreter",
        "title_ar": "Remote Dinka Interpreter (خدمة ودعم العملاء)",
        "company": "Language Services Associates",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Overview: As a telephonic interpreter for Dinka in LSA’s network of Independently Contracted Interpreters, you are responsible for handling telephone calls on demand and facilitating language communication for the Limited English Proficient (LEP) community in a variety of settings. Language Services Associates is continuously accepting qualified interpreters!   Responsibilities: \n          Provide effective telephonic remote interpreting \n          Answer inbound calls in a timely manner \n          Provide superior customer service \n          Adhere to Code of Professional Conduct, including maintaining strict standards of confidentiality \n          Adhere to all policies and procedures, including professional interpretation protocols and industry specific best practices \n   Qualifications/Experience: \n          Full fluency in both English and Dinka \n          Technology proficient (web-based platforms, email, Microsoft Word) \n          An interpreting space that is quiet, secure, and free from outside noises \n          1+ years of professional interpreting experience preferred \n          Industry specific certifications/trainings preferred (CMI, CCHI, Bridging the Gap, Cross-Cultural, etc.) \n  This opportunity is available to both US and Internationally based interpreters LSA is passionate about what we do, which is helping people thrive in an increasingly global environment and in recognition of our commitment to excellence, LSA was named a Top Provider and a Top Workplace",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Language Services Associates. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Telephonic-interpreter",
            "Remote-interpreter"
        ],
        "applyUrl": "https://himalayas.app/companies/language-services-associates/jobs/remote-dinka-interpreter-8223267875",
        "logo": "https://cdn-images.himalayas.app/84rehtvt6naei3bwtlypbtqf17vh",
        "companyLogo": "https://cdn-images.himalayas.app/84rehtvt6naei3bwtlypbtqf17vh",
        "image": "https://cdn-images.himalayas.app/84rehtvt6naei3bwtlypbtqf17vh",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-16",
        "title": "Senior International Accountant (Depositphotos) - Ukraine, Remote (UA)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Senior International Accountant (Depositphotos) - Ukraine, Remote (UA))",
        "company": "Cimpress/Vista",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Ukraine",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Our Team Depositphotos, a Vista company, is a global creative platform powering millions of creators with over 300M licensed images, videos, and music files and cutting-edge AI tools. As part of Cimpress' Global CFO Organization, our finance team serves as the strategic engine driving accounting integrity, reporting accuracy, and cross-border compliance across international entities in Cyprus, the US, and beyond. What You Will Do \n Execute general ledger accounting and month-end close workflows within SAP with precision and timeliness across multi-entity setups. \n Conduct monthly account reconciliations, maintaining flawless reporting integrity. \n Prepare statutory Financial Statements for Cyprus entities under IFRS while supporting consolidated US GAAP reporting requirements. \n Oversee revenue recognition compliance for customer contracts, deferred revenue schedules, and digital revenue streams. \n Manage accounting in payroll, indirect tax and intercompany areas. \n Support transfer pricing global team with relevant calculations. \n Serve as the primary point of contact for internal and external auditors, facilitating data requests and ensuring seamless audit execution. \n Drive continuous process improvements, controllership initiatives, and SAP workflow automation to support enterprise growth. \n Your Qualifications At VistaPrint, we seek individuals who bring new ideas and perspectives to our teams and improve our culture. No matter your background or experience, we encourage",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Cimpress/Vista. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "International-accounting",
            "Senior-accountant",
            "Financial-reporting"
        ],
        "applyUrl": "https://himalayas.app/companies/vistaprint/jobs/senior-international-accountant-depositphotos-ukraine-remote-ua",
        "logo": "https://cdn-images.himalayas.app/md5sug2oshi3zc86k1fdvjsl9tve",
        "companyLogo": "https://cdn-images.himalayas.app/md5sug2oshi3zc86k1fdvjsl9tve",
        "image": "https://cdn-images.himalayas.app/md5sug2oshi3zc86k1fdvjsl9tve",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-17",
        "title": "Remote Client Experience Manager",
        "title_ar": "مدير وقائد فريق (Remote Client Experience Manager)",
        "company": "Global Elite Empire Consultants",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Ready to Take Control of Your Income and Career? \n If you're motivated, driven, and looking for more than a traditional 9-to-5, this could be the opportunity you've been searching for. \n We're seeking ambitious individuals to join a growing remote team, helping clients who have already requested information about financial protection and benefits. With qualified leads, comprehensive training, and ongoing mentorship, you'll have the support you need to build a rewarding long-term career. \n What You'll Do \n Meet virtually with clients who have requested information \n Understand each client's needs and explain available benefit options \n Guide clients through the enrollment process with professionalism and care \n Build lasting relationships through exceptional customer service \n Maintain accurate client records and follow up as needed \n What We Provide \n ✅ Pre-qualified leads—no cold calling \n 🏡 100% remote work environment \n ⏰ Flexible full-time or part-time scheduling \n 🎓 Comprehensive training—no prior experience required \n 🤝 Ongoing mentorship and coaching \n 💻 Access to industry-leading technology and resources \n 📈 Clear opportunities for career growth and leadership \n Compensation \n Performance-based earnings \n Competitive commission structure with uncapped earning potential \n Leadership and team development opportunities for top performers \n We're Looking For \n Self-motivated individuals with a strong work ethic \n Excellent communication and interpersonal skills \n Competit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Elite Empire Consultants. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote-sales",
            "Customer-service"
        ],
        "applyUrl": "https://himalayas.app/companies/global-elite-empire-consultants/jobs/remote-client-experience-manager",
        "logo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "companyLogo": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "image": "https://cdn-images.himalayas.app/2n2wpafybzkj1d8s2yr35cixejbq",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-18",
        "title": "Manager, Financial Reporting - Physician Practice Clients",
        "title_ar": "مدير وقائد فريق (Manager, Financial Reporting - Physician Practice Clients)",
        "company": "Wipfli",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Overview At Wipfli , people count. At Wipfli , our people are core to everything we do—the catalyst behind our ability to create exceptional impact and extraordinary results. We believe in flexibility. We focus on relationships. We encourage each individual to follow their own path. People truly matter and they feel it. For those looking to make a difference and find a professional home, Wipfli offers a career-defining opportunity. This role can be worked remotely anywhere in the US! Responsibilities Responsibilities: \n Review and deliver financial reports and KPIs. \n Assist with budgeting, forecasting, and cash flow modeling. \n Provide technical accounting assistance to clients and internal engagement teams. \n Develop and coach staff and senior accountants. \n Collaborate with advisory teams and external partners. \n Identify opportunities to transition clients to higher-value services in collaboration with advisory teams. \n Assist with onboarding new clients, including system setup and process documentation. \n Monitor team KPIs and implement process improvements. \n Support the integration of new technology platforms and train team members on system enhancements. \n Knowledge, Skills and Abilities Qualifications: \n Bachelor’s degree in accounting, finance, or business required. \n 4–6 years of experience in public or private accounting \n 3+ years of managing associates and/or teams. \n Regulatory Compliance: Familiarity with federal and state healthcare regulations affecting fina",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Wipfli. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Financial-reporting",
            "Healthcare-accounting",
            "Practice-management",
            "Accounting-management"
        ],
        "applyUrl": "https://himalayas.app/companies/wipfli/jobs/manager-financial-reporting-physician-practice-clients",
        "logo": "https://cdn-images.himalayas.app/5roydkaqjy0nbvv637yn1ge8lnk6",
        "companyLogo": "https://cdn-images.himalayas.app/5roydkaqjy0nbvv637yn1ge8lnk6",
        "image": "https://cdn-images.himalayas.app/5roydkaqjy0nbvv637yn1ge8lnk6",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644359-19",
        "title": "Klantenservice Medewerker Aansprakelijkheidsverzekeringen",
        "title_ar": "Klantenservice Medewerker Aansprakelijkheidsverzekeringen (خدمة ودعم العملاء)",
        "company": "Klant Contact Diensten",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "eu_uk",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Netherlands",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$16.5 - $16.5 EUR",
        "description": "*Dutch speaking* Wil jij jouw ervaring in klantcontact inzetten voor dossiers waarin niet altijd direct duidelijk is wie er aansprakelijk is? Als Klantenservice Medewerker Aansprakelijkheidsverzekeringen bij KCD behandel je uiteenlopende en soms complexe situaties. Je onderzoekt wat er precies is gebeurd, duikt in polisvoorwaarden en wet- en regelgeving en maakt vervolgens zelfstandig een goed onderbouwde beslissing. Geen standaard antwoorden, maar dossiers waarin jouw beoordelingsvermogen en aanpak écht het verschil maken. Je krijgt de verantwoordelijkheid om situaties van A tot Z te behandelen en hebt daarbij oog voor zowel de inhoud als de impact op de klant. De rol Als Klantenservice Medewerker Aansprakelijkheidsverzekeringen behandel je klantvragen en dossiers waarbij aansprakelijkheid niet altijd direct duidelijk is. Je brengt de situatie zorgvuldig in kaart, verzamelt de benodigde informatie en beoordeelt op basis van de feiten, polisvoorwaarden en geldende wet- en regelgeving wat de juiste afhandeling is. Je krijgt bijvoorbeeld een klant aan de lijn die als vriendendienst de badkamer bij zijn buurman betegelt, maar daarbij per ongeluk het nieuwe bad beschadigt. Of een klant belt omdat zijn fiets is gestolen, terwijl deze op slot stond én met een ketting aan een lantaarnpaal was vastgemaakt. In dit soort situaties is het aan jou om de juiste vragen te stellen, de situatie te beoordelen en tot een passende beslissing te komen. Jouw werkzaamheden bestaan onder andere uit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Klant Contact Diensten. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Klantenservice",
            "Versicherungen",
            "Schadebehandeling"
        ],
        "applyUrl": "https://himalayas.app/companies/klant-contact-diensten/jobs/klantenservice-medewerker-aansprakelijkheidsverzekeringen",
        "logo": "https://logo.clearbit.com/klantcontactdiensten.com",
        "companyLogo": "https://logo.clearbit.com/klantcontactdiensten.com",
        "image": "https://logo.clearbit.com/klantcontactdiensten.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644360-20",
        "title": "AI/ML Engineer - Clearance Required",
        "title_ar": "مهندس ومطور برمجيات (AI/ML Engineer - Clearance Required)",
        "company": "Logistics Management Institute",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$122,000 - $211,000 USD",
        "description": "Overview LMI is seeking an Artificial Intelligence and Machine Learning (AI/ML) Engineer to support a Special Operations Command (SOCOM) mission partner with production machine learning, predictive forecasting, natural language processing, generative AI, and real-time decision-support capabilities. The AI/ML Engineer will design, implement, optimize, integrate, and sustain scalable AI/ML solutions within secure web-based applications and enterprise workflows. This position will work as part of a cross-functional data science product team to translate validated models into reliable operational capabilities while advancing reusable engineering patterns, governance, security, documentation, and enterprise AI/ML best practices. LMI is a new breed of digital solutions provider dedicated to accelerating government impact with innovation and speed. Investing in technology and prototypes ahead of need, LMI brings commercial-grade platforms and mission-ready AI to federal agencies at commercial speed. Leveraging our mission-ready technology and solutions, proven expertise in federal deployment, and strategic relationships, we enhance outcomes for the government efficiently and effectively. With a focus on agility and collaboration, LMI serves the defense, space, healthcare, and energy sectors—helping agencies navigate complexity and achieve mission success. This position requires an active Secret security clearance with the ability to obtain a Top Secret clearance. Responsibilities \n ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Logistics Management Institute. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai-ml-engineer",
            "Ai-engineer",
            "Data-scientist"
        ],
        "applyUrl": "https://himalayas.app/companies/logistics-management-institute/jobs/ai-ml-engineer-clearance-required-9520890742",
        "logo": "https://cdn-images.himalayas.app/4ihouhoaior7pdc3vaa4yedyvgi7",
        "companyLogo": "https://cdn-images.himalayas.app/4ihouhoaior7pdc3vaa4yedyvgi7",
        "image": "https://cdn-images.himalayas.app/4ihouhoaior7pdc3vaa4yedyvgi7",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789644360-21",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-22",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-23",
        "title": "Tech Lead Full-Stack Rails Engineer",
        "title_ar": "مهندس ومطور برمجيات (Tech Lead Full-Stack Rails Engineer)",
        "company": "Mitre Media",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA, Canada, USA timezones",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$170k - $200k",
        "description": "About Mitre Media \n Mitre Media is redefining FinTech with AI-driven tools that empower millions of investors. Our portfolio, including Dividend.com and MutualFunds.com, leverages LLMs to deliver novel data insights and visually rich user experiences. For over a decade, we’ve served individual investors, financial advisors, and top asset managers like BlackRock and Vanguard through our premium data, tools, and advertising solutions. Join our lean, entrepreneurial team to shape the future of AI-powered investing from your location ±3 hours from Eastern Time. \n Our users are deeply engaged, spending over 5 minutes per visit with a bounce rate below 10%, researching investments across hundreds of different categories. With 40 million brokerage accounts in the U.S., we take pride in building tools that make a real impact, fostering a culture of trust, innovation, and dynamism. If you’re passionate about financial technology and AI, we’d love to connect! \n About the Role \n As a Full-Stack Rails Tech Lead, you’ll architect and implement LLM-powered web applications within our microservices-based Rails 8 platform. Reporting directly to our CTO, you’ll collaborate with a small, high-impact team to deliver user experiences across Dividend.com, MutualFunds.com and other brands within our portfolio. This role combines expert Ruby on Rails skills with AI integration expertise, requiring you to leverage LLMs in your development workflow, state management and user interactions. \n You’ll wo",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mitre Media. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/software-development/tech-lead-full-stack-rails-engineer-2069746",
        "logo": "https://remotive.com/job/2069746/logo",
        "companyLogo": "https://remotive.com/job/2069746/logo",
        "image": "https://remotive.com/job/2069746/logo",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-24",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-25",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-26",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-27",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-28",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-29",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-30",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-31",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-32",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-33",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-34",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-35",
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
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789644360-36",
        "title": "Product Expert (all genders) – Automotive Brand Experience",
        "title_ar": "Product Expert (all genders) – Automotive Brand Experience (تسويق ومبيعات)",
        "company": "LIGANOVA GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "JOIN US \n Wir suchen ab sofort Verstärkung für unser Store Team in Stuttgart: Als Product Expert (all genders) übersetzt du die Faszination für Fahrzeuge in erstklassige Beratung und echte Erlebnisse. \n Lass uns gemeinsam Momente schaffen, die begeistern – wir freuen uns auf dich! \n WHAT YOU DO \n Produktexpertise & Storytelling: Du bist die zentrale Ansprechperson für das gesamte Fahrzeugportfolio und berätst Kund:innen sowie Partner:innen indem du komplexe Technik in verständliche, markengerechte Inhalte übersetzt. \n Wissensvermittlung: Du konzipierst und leitest Trainings zu Innovationen und Konfigurationen sowie der Marken- und Produktgeschichte, um einen einheitlich hohen Wissensstandard im gesamten Team sicherzustellen. \n Premium Customer Journey: Du begleitest individuelle, beratungsintensive Konfigurationen und schaffst durch kompetente Beratung eine vertrauensvolle Bindung zu Neu- und Bestandskund:innen. \n Lead- & Netzwerkmanagement: Du qualifizierst Leads für eine nahtlose Übergabe an das Händlernetzwerk und analysierst Marktfeedback zur kontinuierlichen Optimierung der Prozesse entlang der Customer Journey. \n Experience Management: Du verantwortest die Planung und Durchführung exklusiver Probefahrten und stellst eine hochwertige, konsistentensiche Customer Experience im Store sicher. \n WHO YOU ARE \n Abgeschlossenes Studium (BWL, Automotive, Marketing, Retail) und idealerweise Erfahrung aus dem Premium- oder Luxussegment der Automobilbranche \n Du hast eine nachweisba",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة LIGANOVA GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer service"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/liganova-gmbh/product-expert-all-genders-automotive-brand-experience-stuttgart-193627",
        "logo": "https://logo.clearbit.com/liganovagmbh.com",
        "companyLogo": "https://logo.clearbit.com/liganovagmbh.com",
        "image": "https://logo.clearbit.com/liganovagmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-37",
        "title": "Senior - Data Engineering (m/w/d) Azure und Databricks",
        "title_ar": "مهندس ومطور برمجيات (Senior - Data Engineering (m/w/d) Azure und Databricks)",
        "company": "SkelTech GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Frechen",
        "location_ar": "Frechen",
        "salary": "Competitive",
        "description": "Wir suchen Verstärkung für die Entwicklung, den Betrieb und die Optimierung moderner Datenplattformen. In dieser Position entwickelst du End-to-End-Datenlösungen mit Azure und Databricks und arbeitest eng mit Data Engineers, Analytics-Teams und Fachbereichen zusammen. \n Aufgaben \n Du entwickelst, betreibst und optimierst moderne Datenplattformen auf Azure und Databricks. \n Du konzipierst und implementierst skalierbare ETL- und ELT-Pipelines sowie Data-Lake- und Lakehouse-Architekturen. \n Du entwickelst bestehende Datenlösungen weiter und bindest Quellsysteme an. \n Du stellst Datenqualität, Performance und Stabilität sicher. \n Du arbeitest eng mit Analytics-, BI- und Fachbereichsteams zusammen. \n Du wirkst an Architektur- und Technologieentscheidungen sowie an internen Anwendungsfällen für Data Ingestion und Data Preparation mit. \n Qualifikation \n Du hast ein Studium im MINT-Bereich oder in Wirtschaftsinformatik abgeschlossen beziehungsweise verfügst über eine vergleichbare Qualifikation. \n Du bringst drei bis fünf Jahre Berufserfahrung im Data Engineering mit. \n Du hast End-to-End-Datenlösungen konzipiert und umgesetzt, idealerweise mit Databricks und Azure. \n Du kennst dich mit Data-Lakehouse-Architekturen, ETL und ELT, Streaming sowie verteilter Datenverarbeitung aus. \n Du verfügst über Kenntnisse in Python, SQL, Apache Spark und Delta Lake sowie über Erfahrung mit Infrastructure as Code und CI/CD-Pipelines, beispielsweise mit Terraform. \n Du arbeitest eigenverantwortlich u",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SkelTech GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "It"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/skeltech-gmbh/senior-data-engineering-azure-und-databricks-frechen-30676",
        "logo": "https://logo.clearbit.com/skeltechgmbh.com",
        "companyLogo": "https://logo.clearbit.com/skeltechgmbh.com",
        "image": "https://logo.clearbit.com/skeltechgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-38",
        "title": "CEO / Business Co-Founder (f/m/d) role at startup FAMILY FLOW",
        "title_ar": "CEO / Business Co-Founder (f/m/d) role at startup FAMILY FLOW (تصميم وإبداع)",
        "company": "SouthwestX",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "executive",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Homburg",
        "location_ar": "Homburg",
        "salary": "Competitive",
        "description": "FAMILY FLOW \nSaarbrücken / Homburg, Saarland, Germany | On-site | Fulltime | Digital Health (DiGA) \n About Family Flow \nFamily Flow is a scientifically grounded, trauma-sensitive parenting app that helps parents with their own history of adverse childhood experiences (ACEs) manage the moment between a trigger and their reaction to their child — building a personalized 'Flow Plan' (trigger → warning signs → pause → skill → parenting strategy) instead of another generic parenting app. \n The opportunity \nThe concept is built on more than 20 years of clinical and scientific work on child maltreatment led by Prof. Dr. med. Eva Möhler, Chair of Child and Adolescent Psychiatry at Saarland University, alongside DFKI researchers Patrick Gebhard and Jan Alexandersson. The idea and clinical content are finalized — what's missing is the team and funding to build and launch the app. We are looking for a CEO / Business co-founder (fundraising, tech and operations) to turn a validated clinical concept into a real product. \n Tasks \n What you will own \n Company build-up & fundraising \n- Lead incorporation of Family Flow and raise the funding needed for app development (German, French and English versions). \n- Own the path to the German DiGA directory (digital health app reimbursement) and the parallel free-market / B2C launch. \n Product & delivery \n- Translate the finalized clinical concept and psychotherapeutic material into a software roadmap, in partnership with a tech/development team or ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SouthwestX. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Directors",
            "Chief executives"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/southwestx/ceo-business-co-founder-role-at-startup-family-flow-homburg-52602",
        "logo": "https://logo.clearbit.com/southwestx.com",
        "companyLogo": "https://logo.clearbit.com/southwestx.com",
        "image": "https://logo.clearbit.com/southwestx.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-39",
        "title": "Business Manager (m/w/d) I Operations & Digitalisierung",
        "title_ar": "مدير وقائد فريق (Business Manager (m/w/d) I Operations & Digitalisierung)",
        "company": "RWKMP®",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Münster",
        "location_ar": "Münster",
        "salary": "Competitive",
        "description": "Du hast dein Studium gerade abgeschlossen oder stehst am Anfang deiner Karriere – und hast keine Lust, im Konzern erstmal zwei Jahre PowerPoints zu bauen? \n Dann könnte das hier ziemlich gut passen. \n RWKMP® ist eine etablierte Unternehmensberatung aus Münster und spezialisiert auf Vertrieb und Führung in der Automobilbranche. Zu unseren Kunden zählen einige der größten Automobilhandelsgruppen sowie Marken aus dem Umfeld von Mercedes-Benz, BMW, Porsche und neuen chinesischen Herstellern. \n Mit einem kleinen Team bewegen wir viel – und genau das soll so bleiben. \n Wir suchen einen Junior Business Manager (m/w/d) , der Verantwortung übernehmen, Prozesse verstehen und unsere Unternehmensberatung gemeinsam mit uns noch digitaler, strukturierter und effizienter machen möchte. \n Du arbeitest direkt mit der Geschäftsführung und unseren Bereichsleitern zusammen, bekommst echten Gestaltungsspielraum und kannst dich perspektivisch bis zum Head of Operations entwickeln. \n Aufgaben \n Dein Job: Sorge dafür, dass unsere operative Maschine läuft – und jeden Monat ein Stück besser wird. \n Du übernimmst Schritt für Schritt Verantwortung für die operativen Abläufe hinter unseren Coaching- und Beratungsprogrammen. \n Dazu gehören insbesondere: \n Du organisierst unsere Coachingprogramme von der Beauftragung bis zum erfolgreichen Abschluss. \n Du steuerst Onboardings, Teilnehmer, Gruppen, Termine, Zugänge, Lernplattformen und die gesamte organisatorische Customer Journey. \n Du bereitest unsere Live",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة RWKMP®. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/rwkmp/business-manager-i-operations-digitalisierung-munster-434106",
        "logo": "https://logo.clearbit.com/rwkmp.com",
        "companyLogo": "https://logo.clearbit.com/rwkmp.com",
        "image": "https://logo.clearbit.com/rwkmp.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-40",
        "title": "Founders Associate Praktikum (m/w/d)",
        "title_ar": "Founders Associate Praktikum (m/w/d) (أخرى)",
        "company": "STARTPLATZ AI Academy",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Internship",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Cologne",
        "location_ar": "Cologne",
        "salary": "Competitive",
        "description": "Bock auf KI und Lust, direkt an der Seite der Gründer:innen zu lernen? Die STARTPLATZ AI Academy macht KI praktisch nutzbar: Wir bilden Privatpersonen und Unternehmen in Köln mit praxisnahen Trainings, Workshops und Coachings im Umgang mit KI-Tools fort. Als Founders Associate bist du Assistent:in der Geschäftsführung – nah dran, mittendrin, mit echter Verantwortung von Tag eins. \n Aufgaben \n Assistenz der Geschäftsführung: Du unterstützt die Geschäftsführung im Tagesgeschäft und bist ihr verlängerter Arm bei strategischen und operativen Themen. \n Strategic Support & Business Analytics: Du führst Markt- und Wettbewerbsanalysen durch und leitest daraus konkrete Handlungsempfehlungen ab. \n Go-to-Market Strategy: Du bringst dich bei der Entwicklung und Umsetzung neuer Markteintritts- und Vertriebskonzepte ein. \n Management-Reporting: Du erstellst Entscheidungsvorlagen, Reports und Präsentationen für Team und Partner. \n Direktes Mentoring & Shadowing: Du arbeitest eng mit der Geschäftsführung zusammen, begleitest sie im Alltag und lernst so alle Bereiche des Unternehmens von innen kennen. \n Startup-Einblick: Du bekommst hautnah mit, wie ein Startup funktioniert und wächst – von der Idee bis zur Umsetzung. \n Qualifikation \n Studium oder Orientierung: Du studierst Wirtschaftswissenschaften oder einen ähnlichen Bereich oder bist auf der Suche nach einem Orientierungspraktikum. \n Startup-DNA: Du lebst und atmest Entrepreneurship und möchtest echte Gründungserfahrung sammeln. \n Analyt",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة STARTPLATZ AI Academy. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/startplatz-ai-academy/founders-associate-praktikum-cologne-294709",
        "logo": "https://logo.clearbit.com/startplatzaiacademy.com",
        "companyLogo": "https://logo.clearbit.com/startplatzaiacademy.com",
        "image": "https://logo.clearbit.com/startplatzaiacademy.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-41",
        "title": "Consultant Projektsteuerung (m/w/d)",
        "title_ar": "Consultant Projektsteuerung (m/w/d) (برمجة وتكنولوجيا)",
        "company": "roos IT GmbH & Co. KG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Aachen",
        "location_ar": "Aachen",
        "salary": "Competitive",
        "description": "ROOS ist ein kleines, inhabergeführtes SAP-Beratungshaus mit Kunden, mit denen wir seit Jahren partnerschaftlich zusammenarbeiten. Gute Arbeit heißt für uns nicht, möglichst viele Stunden abzurechnen, sondern dass der Kunde uns weiterempfiehlt. Deshalb sagen wir es, wenn etwas nicht sinnvoll ist, statt es trotzdem umzusetzen. \n Aufgaben \n Du arbeitest bei öffentlichen Auftraggebern mit Sicherheitsauftrag, in Transformations- und Digitalisierungsprojekten. Meist geht es um SAP, meist um Logistik. Mal ersetzt du eine veraltete Technik durch etwas Modernes, mal bringst du Stammdaten in Ordnung, mal klärst du, ob sich eine neue Lösung überhaupt lohnt. \n Anfangen wirst du in einem laufenden Projekt. Du bereitest den wöchentlichen Jour fixe vor und führst ihn, hältst die Ergebnisse fest und ziehst die Statusberichte nach. Du begleitest die Dailies der Entwicklungsteams und hältst die Verbindung zwischen Fachbereich, IT und Projektleitung. \n Was danach dazukommt, hängt vom Auftrag ab. Du moderierst die Workshops, in denen Fachbereich und IT sich abstimmen. Du gehst einem Prozess nach, der nicht rundläuft, und schlägst einen besseren vor. Du übernimmst ein Stück Konzeption oder prüfst, ob das Ergebnis im Alltag trägt. Deine Gesprächspartner reichen dabei vom Sachbearbeiter bis zur Projektleitung. \n Deshalb steht hier keine Aufgabenliste, die in einem Jahr noch stimmt. Wenn beim Kunden eine Lücke aufgeht, schaust du sie dir an. Manchmal bleibst du und machst das Thema zu deinem, manch",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة roos IT GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting",
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/roos-it-gmbh-co-kg/consultant-projektsteuerung-aachen-178431",
        "logo": "https://logo.clearbit.com/roositgmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/roositgmbhcokg.com",
        "image": "https://logo.clearbit.com/roositgmbhcokg.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-42",
        "title": "Freelance QA Tester / Software-Tester (m/w/d)",
        "title_ar": "Freelance QA Tester / Software-Tester (m/w/d) (برمجة وتكنولوجيا)",
        "company": "SEDIWORK",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Freelance",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Leipzig",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "– wenige Stunden/Woche Für ein wachsendes SaaS-Startup (10 Personen, 4 Entwickler) \n Über uns \nWir sind ein kleines, agiles SaaS-Team und suchen Unterstützung im Testing-Prozess vor unseren Production-Deployments. Aktuell übernimmt das unser Product Manager – wir möchten diese Aufgabe an eine erfahrene, zuverlässige Person auslagern. \n **Umfang: 5 Stunden/Woche, flexibel planbar \n** \n Remote möglich \n Regelmäßiger Rhythmus (z. B. vor jedem Release, ca. [X]x/Woche) \n Start: nach Absprache \n Vergütung: nach Erfahrung, auf Stundenbasis \n Aufgaben \n Manuelles Testen neuer Features und Bugfixes basierend auf Tickets (Jira/Linear/o.ä.) im Status \"Testing\" \n Regressionstests: sicherstellen, dass durch neue Änderungen keine bestehende Funktionalität kaputt geht \n Überprüfung, ob Akzeptanzkriterien und Bug-Fixes tatsächlich erfüllt sind \n Exploratives Testen: aktiv nach Edge Cases und unerwartetem Verhalten suchen \n Sauberes Dokumentieren von Bugs (Reproduktionsschritte, Screenshots/Videos, Priorität) und Anlegen von Follow-up-Tickets \n Enge Abstimmung mit dem Product Manager und den Entwicklern \n Qualifikation \n Mehrjährige Erfahrung im (manuellen) Software-Testing, idealerweise im SaaS-/Web-App-Umfeld \n Selbstständige, zuverlässige Arbeitsweise als Freelancer:in \n Erfahrung mit Jira (oder vergleichbaren Ticket-Systemen) von Vorteil \n Strukturierte, präzise Arbeitsweise – du findest Bugs, die andere übersehen \n Grundverständnis von Webtechnologien (APIs, Browser-Devtools, verschieden",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SEDIWORK. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Quality assurance",
            "Inspection"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sediwork/freelance-qa-tester-software-tester-leipzig-218890",
        "logo": "https://logo.clearbit.com/sediwork.com",
        "companyLogo": "https://logo.clearbit.com/sediwork.com",
        "image": "https://logo.clearbit.com/sediwork.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-43",
        "title": "Mitarbeiter Büroorganisation / Administration (m/w/d) Quereinsteiger willkommen",
        "title_ar": "Mitarbeiter Büroorganisation / Administration (m/w/d) Quereinsteiger willkommen (أخرى)",
        "company": "HörPartner GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Wir sind HörPartner – und Sie halten uns den Rücken frei! \n Gutes Hören schenkt Lebensqualität – und damit unsere Hörakustik-Teams in über 50 Fachgeschäften jeden Tag Höchstleistungen erbringen können, braucht es ein starkes Fundament: unsere Hauptverwaltung. Wir bei HörPartner verbinden traditionelles Gesundheitshandwerk mit einer modernen, sympathischen Arbeitskultur. Bei uns sind Sie kein Rädchen im Getriebe einer anonymen Großkonzern-Maschinerie, sondern das organisatorische Herzstück unseres Unternehmens. Wir bieten Ihnen einen krisensicheren Arbeitsplatz in einer dynamischen Zukunftsbranche, geprägt von kurzen Wegen, echter Hilfsbereitschaft und einem Miteinander auf Augenhöhe. \n Wir suchen zur Verstärkung in unserer Verwaltung, \n Mitarbeiter Büroorganisation / Administration (m/w/d) – Quereinsteiger willkommen, \n in Teilzeit oder Vollzeit \n Aufgaben \n Deine Aufgaben bei uns \n Büroorganisation & Verwaltung: Du gestaltest effiziente administrative Abläufe und sorgst für ein reibungsloses Tagesgeschäft. \n Kommunikation & Korrespondenz: Du bist die freundliche erste Anlaufstelle für Kundschaft sowie Geschäftspartner und steuerst den Schriftverkehr und Telefonservice souverän. \n Vorausschauendes Fristen- & Terminmanagement: Du behältst den Überblick über Kalender, Terminplanungen und hältst wichtige Fristen zuverlässig ein. \n Vorbereitende Buchhaltung: Du übernimmst die Prüfung und Zuordnung eingehender Rechnungen nach einer gründlichen Einarbeitung. \n Stammdatenpflege: Du ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة HörPartner GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Administration"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/horpartner-gmbh/mitarbeiter-buroorganisation-administration-quereinsteiger-willkommen-berlin-311410",
        "logo": "https://logo.clearbit.com/hrpartnergmbh.com",
        "companyLogo": "https://logo.clearbit.com/hrpartnergmbh.com",
        "image": "https://logo.clearbit.com/hrpartnergmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-44",
        "title": "Senior - Data Plattform Engineering (m/w/d) Azure und Databricks",
        "title_ar": "مهندس ومطور برمجيات (Senior - Data Plattform Engineering (m/w/d) Azure und Databricks)",
        "company": "SkelTech GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Frechen",
        "location_ar": "Frechen",
        "salary": "Competitive",
        "description": "Wir suchen Verstärkung für die Konzeption, Automatisierung und Weiterentwicklung moderner Datenplattformen. In dieser Position arbeitest du mit Azure und Databricks, entwickelst skalierbare Plattformlösungen und unterstützt unsere Data Engineers und Projektteams mit einheitlichen Standards und Best Practices. \n Aufgaben \n Du konzipierst und implementierst moderne Data Platforms mit Databricks und einem Hyperscaler, insbesondere Azure oder AWS. \n Du setzt skalierbare Plattformarchitekturen, Entwicklungsumgebungen und Deployment-Prozesse um. \n Du etablierst Infrastructure as Code, CI/CD und wiederverwendbare Plattformstandards. \n Du stellst Security, Governance, Monitoring, Performance und Stabilität sicher. \n Du unterstützt Data Engineers, Data-Analytics-Teams und Fachbereiche mit standardisierten Plattformservices und Best Practices. \n Du wirkst an Architektur-, Technologie- und Plattformentscheidungen sowie an wiederverwendbaren Lösungen für Data Ingestion und Data Preparation mit. \n Qualifikation \n Du hast ein Studium im MINT-Bereich oder in Wirtschaftsinformatik abgeschlossen beziehungsweise verfügst über eine vergleichbare Qualifikation. \n Du bringst drei bis fünf Jahre Berufserfahrung im Data Platform Engineering, Data Engineering oder Cloud Engineering mit. \n Du hast moderne Datenplattformen konzipiert und umgesetzt, idealerweise mit Databricks und Azure, und kennst Lakehouse-Architekturen sowie skalierbare Cloud-Infrastrukturen. \n Du verfügst über Kenntnisse in Databri",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SkelTech GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/skeltech-gmbh/senior-data-plattform-engineering-azure-und-databricks-frechen-406954",
        "logo": "https://logo.clearbit.com/skeltechgmbh.com",
        "companyLogo": "https://logo.clearbit.com/skeltechgmbh.com",
        "image": "https://logo.clearbit.com/skeltechgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-45",
        "title": "Wertpapier-Portfolioberater (m/w/d) Individuelle Depotbetreuung, Private Banking und Unternehmenskunden",
        "title_ar": "Wertpapier-Portfolioberater (m/w/d) Individuelle Depotbetreuung, Private Banking und Unternehmenskunden (مالية ومحاسبة)",
        "company": "Sparkasse Karlsruhe",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Karlsruhe",
        "location_ar": "Karlsruhe",
        "salary": "Competitive",
        "description": "Mit einer Bilanzsumme von rund 12 Mrd. €, ca. 1.300 Mitarbeitende und einer über 213-jährigen Unternehmensgeschichte sind wir eines der größten und das älteste selbstständige Finanzdienstleistungsinstitut unserer Region. Gemessen an der Bilanzsumme ist die Sparkasse Karlsruhe die fünftgrößte Sparkasse in Baden-Württemberg und gehört zu den 25 größten Sparkassen in Deutschland. Wir überzeugen unsere Kunden vor Ort und digital mit individueller Beratung und bestem Service. Unser Erfolgsrezept? Der Mensch. Die Nähe zu unseren Kunden und unseren Mitarbeitenden ist unser wichtigstes Ziel. \n Sie arbeiten in der Abteilung Wertpapierberatung und sind der Gruppe Wertpapierspezialisten / Wertpapier- Portfolioberater zugeordnet. Die Gruppe umfasst neben Ihnen und der Führungskraft zwei Wertpapierspezialisten und drei weitere Wertpapier-Portfolioberater, sowie einen Vertriebsunterstützer. In Ihrer Funktion übernehmen Sie das Mandatsgeschäft im Rahmen der individuellen Depotbetreuung aus den Abteilungen Private Banking und Unternehmenskunden. \n Kommen Sie zur Sparkasse Karlsruhe – werden Sie Teil unseres Teams. \n Aufgaben \n Akquisition von Beratungsmandaten im Rahmen einer individuellen Depotbetreuung in Abstimmung mit dem jeweiligen Stammberater \n Proaktive Beratung und Erarbeitung von Anlagevorschlägen im Rahmen des Sparkassen-AktivDepots \n Intensive Betreuung und Erarbeitung von Wertpapierstrategien auf Basis der kundenindividuellen Angaben \n Intensivierung des Wertpapiergeschäfts \n Ko",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sparkasse Karlsruhe. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sparkasse-karlsruhe/wertpapier-portfolioberater-individuelle-depotbetreuung-private-banking-und-unternehmenskunden-karlsruhe-386563",
        "logo": "https://logo.clearbit.com/sparkassekarlsruhe.com",
        "companyLogo": "https://logo.clearbit.com/sparkassekarlsruhe.com",
        "image": "https://logo.clearbit.com/sparkassekarlsruhe.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-46",
        "title": "Softwareentwickler für kaufmännische Applikationen (w/m/d)",
        "title_ar": "Softwareentwickler für kaufmännische Applikationen (w/m/d) (برمجة وتكنولوجيا)",
        "company": "J.E. Schum GmbH & Co. KG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Würzburg",
        "location_ar": "Würzburg",
        "salary": "Competitive",
        "description": "Als national wie international tätiges Handels- und Dienstleistungsunternehmen mit Sitz in Würzburg ist die Schum Unternehmensgruppe einer der führenden Nonfood-Spezialisten für den filialisierten Einzelhandel. Mit über 3000 Mitarbeitern stehen wir seit 145 Jahren für Erfahrung und Kontinuität. Mit über 300 eigenen EuroShops betreiben wir darüber hinaus eines der erfolgreichsten und expansivsten Einzelhandelskonzepte in Deutschland. \n Wir suchen für unseren Vertrieb im Bereich Backoffice Display in Vollzeit ab sofort einen Softwareentwickler für kaufmännische Applikationen (w/m/d) \n Aufgaben \n Analyse und Aufnahme fachlicher Anforderungen sowie Erstellung von Softwarespezifikationen \n Konzeption, Entwicklung und Implementierung von Inhouse-Softwarelösungen im Microsoft .NET-Umfeld \n Betreuung, Wartung und kontinuierliche Weiterentwicklung bestehender Softwareanwendungen \n Weiterentwicklung und Betreuung unseres EDI-Systems (EDICom) \n Mitarbeit an der Digitalisierung und Optimierung kaufmännischer Geschäftsprozesse \n Qualifikation \n Abgeschlossenes Studium der Informatik, Ausbildung zum Fachinformatiker Anwendungsentwicklung (w/m/d) oder eine vergleichbare Qualifikation \n Sicherer Umgang mit Visual Studio in C# und/oder Visual Basic .NET \n Praktische Erfahrung mit modernen .NET-Technologien, insbesondere .NET 8 / .NET 10, ASP.NET Core / Blazor, .NET MAUI, Microsoft SQL Server \n Erfahrung mit modernen Entwicklungswerkzeugen wie GitHub Copilot oder anderen KI-gestützten Entwickl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة J.E. Schum GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/je-schum-gmbh-co-kg/softwareentwickler-fur-kaufmannische-applikationen-wurzburg-101625",
        "logo": "https://logo.clearbit.com/jeschumgmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/jeschumgmbhcokg.com",
        "image": "https://logo.clearbit.com/jeschumgmbhcokg.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-47",
        "title": "Head of IT Operations Vessels - (m/w/d)",
        "title_ar": "Head of IT Operations Vessels - (m/w/d) (أخرى)",
        "company": "traze GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "teamleitung",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Flensburg",
        "location_ar": "Flensburg",
        "salary": "Competitive",
        "description": "Als Head of IT Operations Vessels (m/w/d) verantwortest du gemeinsam mit zwei erfahrenen Kollegen und einem Auszubildenden die IT-Infrastruktur von derzeit 17 Schiffen sowie die Gestaltung und Weiterentwicklung internationaler Standards in der Schiffs-IT. \n Aufgaben \n Du führst ein dreiköpfiges Team in Flensburg und verantwortest die Einsatz- und Ressourcenplanung für die operative IT-Betreuung. \n Du stellst einen stabilen IT-Betrieb auf Schiffen, in Häfen und an Verkaufsstellen sicher. \n Du verantwortest zentrale IT-Services wie WLAN, 5G, Kassensysteme, Kameras und Passagierinformationssysteme. \n Du entwickelst gruppenweit nutzbare Standards und wiederverwendbare Lösungen für die maritime IT. \n Dein Schwerpunkt liegt auf Steuerung, Organisation und Prozesssicherheit; bei Bedarf unterstützt du auch selbst hands-on. \n Du arbeitest eng mit dem Managing Director IT sowie den weiteren Heads of IT an den Schnittstellen zu Land-IT, Cloud und Infrastruktur zusammen. \n Qualifikation \n Du bringst mehrjährige Erfahrung im Bereich IT-Infrastruktur in einem maritimen bzw. schiffsnahen Umfeld mit. \n Du verfügst über sehr gutes Know-how rund um Netzwerk und Connectivity, z. B. WLAN, 5G, Satellitenkommunikation und Antennentechnik. \n Erste Führungserfahrung ist von Vorteil, aber kein Muss – wichtiger sind Verantwortungsbewusstsein, Kommunikationsstärke und die Fähigkeit, technische Einsätze und Mitarbeitende klar zu koordinieren. \n Du überzeugst durch Organisationstalent, Lösungsorientierun",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة traze GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/traze-gmbh/head-of-it-operations-vessels-flensburg-305985",
        "logo": "https://logo.clearbit.com/trazegmbh.com",
        "companyLogo": "https://logo.clearbit.com/trazegmbh.com",
        "image": "https://logo.clearbit.com/trazegmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-48",
        "title": "Leitung Statik und Tragwerksplanung (m/w/d)",
        "title_ar": "Leitung Statik und Tragwerksplanung (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Personalberatung Pillong",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Saarbrücken",
        "location_ar": "Saarbrücken",
        "salary": "Competitive",
        "description": "Für ein etabliertes mittelständisches Unternehmen im Südwesten Deutschlands suchen wir eine Führungspersönlichkeit, die fundierte Erfahrung in der Tragwerksplanung mit Freude an der Entwicklung von Menschen, Strukturen und technischen Lösungen verbindet. \n Unser Mandant bietet eine langfristig angelegte Aufgabe mit fachlichem und organisatorischem Gestaltungsspielraum. Im Mittelpunkt stehen die Weiterentwicklung des Bereichs Statik, verlässliche Berechnungsprozesse und eine gute Zusammenarbeit innerhalb des Teams sowie mit den angrenzenden Fachbereichen. \n Gesucht wird eine Persönlichkeit, die anspruchsvolle technische Fragestellungen durchdringt, fachliche Orientierung gibt und gemeinsam mit ihrem Team tragfähige Lösungen entwickelt. \n Aufgaben \n In dieser Rolle übernehmen Sie die fachliche und organisatorische Leitung des Bereichs Statik und Tragwerksplanung. Sie koordinieren die Aufgaben im Team, entwickeln Mitarbeitende weiter und gestalten die zukünftige Ausrichtung des Fachbereichs. Dabei schaffen Sie klare Zuständigkeiten, einheitliche Arbeitsgrundlagen und nachvollziehbare technische Standards. \n Sie verantworten die Durchführung und fachliche Begleitung anspruchsvoller statischer Berechnungen. Dazu gehören die Bewertung maßgebender Einwirkungen, die Steuerung numerischer Simulationen sowie die Einhaltung einschlägiger Normen und Regelwerke. Technische Qualität und wirtschaftliche Lösungen betrachten Sie dabei im Zusammenhang. \n Ein weiterer Schwerpunkt liegt in der V",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Personalberatung Pillong. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/personalberatung-pillong/leitung-statik-und-tragwerksplanung-saarbrucken-336695",
        "logo": "https://logo.clearbit.com/personalberatungpillong.com",
        "companyLogo": "https://logo.clearbit.com/personalberatungpillong.com",
        "image": "https://logo.clearbit.com/personalberatungpillong.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-49",
        "title": "Senior - Java Fullstack Developer (m/w/d) Azure und Databricks",
        "title_ar": "مهندس ومطور برمجيات (Senior - Java Fullstack Developer (m/w/d) Azure und Databricks)",
        "company": "SkelTech GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Frechen",
        "location_ar": "Frechen",
        "salary": "Competitive",
        "description": "Wir suchen Verstärkung für die Planung und Umsetzung moderner Softwarearchitekturen in unseren Kundenprojekten. In dieser Position übernimmst du technische Verantwortung, unterstützt unsere Backend-Entwickler und bringst neue Technologien gezielt in die Projektarbeit ein. \n Aufgaben \n Du planst und gestaltest skalierbare Softwarearchitekturen. \n Du setzt die entworfenen Architekturen sowie darauf aufbauende Lösungen mit Databricks in Kundenprojekten um. \n Du übernimmst die technische Verantwortung für unsere Backend-Entwickler und unterstützt sie als Mentor und Ideengeber. \n Du etablierst Qualitätsrichtlinien und stellst Datenqualität, Performance und Stabilität sicher. \n Du prüfst aktuelle Technologien und Trends und bewertest, wie sie sich in unseren Projekten einsetzen lassen. \n Qualifikation \n Du hast ein Studium im MINT-Bereich oder in Wirtschaftsinformatik abgeschlossen beziehungsweise verfügst über eine vergleichbare Qualifikation und bringst drei bis fünf Jahre Projekterfahrung mit modernen Softwarearchitekturen mit. \n Du arbeitest sicher mit Java, Spring Boot und Terraform und kennst gängige Architekturstandards, Best Practices und Design Patterns. \n Du verfügst über Datenbankkenntnisse in PostgreSQL, MySQL oder NoSQL sowie über praktische Erfahrung mit Docker und Cloud-Plattformen wie AWS, Azure oder Hetzner. \n Du arbeitest eigenverantwortlich und kreativ, bist teamorientiert und trittst souverän auf. \n Du verfügst über sehr gute Deutschkenntnisse und verhandlungssi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SkelTech GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting",
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/skeltech-gmbh/senior-java-fullstack-developer-azure-und-databricks-frechen-386158",
        "logo": "https://logo.clearbit.com/skeltechgmbh.com",
        "companyLogo": "https://logo.clearbit.com/skeltechgmbh.com",
        "image": "https://logo.clearbit.com/skeltechgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-50",
        "title": "Tech Lead - Data Plattform Engineering (m/w/d) Azure und Databricks",
        "title_ar": "مهندس ومطور برمجيات (Tech Lead - Data Plattform Engineering (m/w/d) Azure und Databricks)",
        "company": "SkelTech GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Frechen",
        "location_ar": "Frechen",
        "salary": "Competitive",
        "description": "Wir entwickeln Datenplattformen und Datenprodukte für unsere Kunden. Für unser Team suchen wir einen Tech Lead, der moderne Data-Platform-Lösungen gestaltet, technische Verantwortung übernimmt und Data Platform Engineers fachlich begleitet. \n Aufgaben \n Du konzipierst und implementierst Data-Platform-Lösungen mit Databricks und Azure. \n Du entwickelst Standards und Best Practices für skalierbare, sichere und automatisierte Datenplattformen. \n Du führst ein Team aus Data Platform Engineers, gibst technische Orientierung und unterstützt die fachliche Weiterentwicklung. \n Gemeinsam mit der Geschäftsführung entwickelst du Mitarbeitende, erweiterst Geschäftsfelder und baust Kundenbeziehungen auf. \n Du erarbeitest wiederverwendbare Lösungsansätze und bringst sie gezielt in Kundenprojekte ein. \n Qualifikation \n Du hast ein Studium im MINT-Bereich oder in Wirtschaftsinformatik abgeschlossen beziehungsweise verfügst über eine vergleichbare Qualifikation. \n Du bringst mindestens fünf Jahre Berufserfahrung im Data Platform Engineering, Data Engineering oder Cloud Platform Engineering mit. \n Du hast moderne Datenplattformen konzipiert und umgesetzt, idealerweise mit Databricks und Azure, und kennst dich mit Lakehouse-, Cloud- und Plattformarchitekturen aus. \n Du hast bereits technische Verantwortung in Projekten oder Teams übernommen und verfügst über Erfahrung mit Governance, Infrastructure as Code und CI/CD, beispielsweise mit Terraform. \n Du kommunizierst sicher mit technischen und ni",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SkelTech GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Management",
            "Team leader"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/skeltech-gmbh/tech-lead-data-plattform-engineering-azure-und-databricks-frechen-348513",
        "logo": "https://logo.clearbit.com/skeltechgmbh.com",
        "companyLogo": "https://logo.clearbit.com/skeltechgmbh.com",
        "image": "https://logo.clearbit.com/skeltechgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-51",
        "title": "Social Media Manager/in (m/w/d)",
        "title_ar": "مدير وقائد فريق (Social Media Manager/in (m/w/d))",
        "company": "bildbrauerei GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Heidelberg",
        "location_ar": "Heidelberg",
        "salary": "Competitive",
        "description": "Du öffnest morgens Instagram und denkst nicht „was machen die Leute“, sondern „das hätte man besser machen können“? Du weißt, warum ein Hook in den ersten 1,5 Sekunden sitzen muss und warum der Algorithmus manchmal ein launischer Freund ist? Perfekt. \n Wir suchen jemanden, der Social nicht nur versteht, sondern lebt – und dabei KI-Tools so selbstverständlich nutzt wie andere Leute Canva. Bei uns betreust du echte Marken mit echten Zielen, keine erfundenen Fallstudien, und entwickelst Social-Strategien, die mehr sind als „drei Posts pro Woche und ein Gewinnspiel im Dezember“. \n Aufgaben \n Du betreust Social-Media-Kanäle für verschiedene Kund:innen eigenständig – Strategie, Planung, Umsetzung, Optimierung. \n Du entwickelst Content-Strategien und Redaktionspläne, die nicht nur gut aussehen, sondern auch performen. \n Du konzipierst Social-Content: Skripte für Reels/Kurzvideos, Hooks, Captions, Content-Day-Planungen. \n Du analysierst KPIs, erstellst Reports und leitest konkrete Maßnahmen ab – Data beats Bauchgefühl. \n Du planst und koordinierst Content Days mit dem Produktionsteam. \n Du machst Community Management und Social Listening – und weißt, wann man antwortet und wann man es besser lässt. \n Du nutzt KI-Tools für Content-Erstellung, Trendanalyse, Copywriting und Ideation – und optimierst deine Workflows laufend. \n Du berätst Kund:innen zu Trends, Formaten und Plattform-Updates. \n Du arbeitest mit Performance-Daten und hast idealerweise Erfahrung mit Paid Social/Ads. \n Qualif",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة bildbrauerei GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Management",
            "Team leader"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/bildbrauerei-gmbh/social-media-manager-in-heidelberg-35633",
        "logo": "https://logo.clearbit.com/bildbrauereigmbh.com",
        "companyLogo": "https://logo.clearbit.com/bildbrauereigmbh.com",
        "image": "https://logo.clearbit.com/bildbrauereigmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-52",
        "title": "Werkstudent (m/w/d) für AI Data Annotation & Quality Assurance",
        "title_ar": "Werkstudent (m/w/d) für AI Data Annotation & Quality Assurance (برمجة وتكنولوجيا)",
        "company": "IUNA AI Systems GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Working student",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Heilbronn",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Wir sind IUNA AI , ein Deep-Tech-Startup, das die industrielle Fertigung revolutioniert. Wir entwickeln AI-Vision-Systeme zur Automatisierung komplexer Inspektionsprozesse in der Automobil- und Fertigungsindustrie. Unsere Lösungen basieren auf Deep Learning und Edge-Computing. Um unsere neuronalen Netze mit präzisen Daten zu füttern, suchen wir Unterstützung bei der Datenaufbereitung. Wenn du einen Einblick in die Praxis von Computer Vision und Industrial AI erhalten möchtest, bist du bei uns richtig. \n Aufgaben \n Du unterstützt unser Entwicklungsteam direkt bei der Vorbereitung von Trainingsdaten für unsere KI-Modelle. Deine Kernaufgaben umfassen: \n Präzise Datenannotation: Du annotierst Bilddaten für Aufgabenbereiche wie Segmentierung (Segmentation) und Objekterkennung (Detection) mit hoher Genauigkeit. \n Qualitätskontrolle: Du überprüfst bereits annotierte Datensätze auf Fehler und Konsistenz, um eine hohe Trainingsqualität unserer Algorithmen sicherzustellen. \n Datenmanagement: Unterstützung bei der Verwaltung und Strukturierung der Datensätze in unserer Pipeline. \n Qualifikation \n Wir suchen jemanden, der/die konzentriert arbeitet und versteht, dass die Datenqualität direkt die Leistung der KI bestimmt. \n Status: Du bist aktuell an einer deutschen Hochschule eingeschrieben. \n Arbeitsweise: Du arbeitest sorgfältig, detailgenau und zuverlässig. \n Equipment: Du verfügst über einen eigenen Laptop/PC (Windows oder Linux). \n Verfügbarkeit: Du kannst uns 10–20 Stunden pro Woche",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة IUNA AI Systems GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Data scientist"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/iuna-ai-systems-gmbh/werkstudent-fur-ai-data-annotation-quality-assurance-heilbronn-27249",
        "logo": "https://logo.clearbit.com/iunaaisystemsgmbh.com",
        "companyLogo": "https://logo.clearbit.com/iunaaisystemsgmbh.com",
        "image": "https://logo.clearbit.com/iunaaisystemsgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-53",
        "title": "Praktikum - Computer Vision / AI (m/w/d)",
        "title_ar": "Praktikum - Computer Vision / AI (m/w/d) (برمجة وتكنولوجيا)",
        "company": "IUNA AI Systems GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Internship, berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Heilbronn",
        "location_ar": "Heilbronn",
        "salary": "Competitive",
        "description": "Du studierst Informatik, Software Engineering oder ein verwandtes Fach und möchtest dein Wissen im echten Einsatz testen? \n Dann komm zu IUNA AI Systems GmbH – einem DeepTech Startup im Bereich KI-basierte Bildverarbeitung für die Industrie. \n Unsere Systeme prüfen automatisiert Schweißnähte und Bauteile bei premium Automobilherstellern und Zulieferern. \n Als Praktikant wirst du Teil eines hochspezialisierten Teams – und deine Arbeit hat echten Impact. \n Aufgaben \n Unterstützung bei der Datenaufbereitung für KI-Modelle (z. B. Labeling, Vorverarbeitung) \n Mitarbeit an der Optimierung von Daten-Pipelines für unser AI-System \n Enge Zusammenarbeit mit unseren ML Engineers & Softwareentwicklern \n Einblick in reale Industrieprojekte mit konkretem KI-Einsatz \n Qualifikation \n Studium im Bereich Informatik, Software Engineering oder vergleichbar \n Interesse an KI / Deep Learning / Computer Vision \n Programmierkentnisse in Python, C++, JavaScript \n Selbstständige, sorgfältige Arbeitsweise \n Gute Deutsch- oder Englischkenntnisse \n Bonus: Erfahrung mit Labeling-Tools oder ML Workflows \n Benefits \n Remote-first Setup – du kannst größtenteils von überall arbeiten \n Direkten Einblick in ein hochaktuelles Technologiefeld \n Eigenverantwortliches Arbeiten mit echter Lernkurve \n Flache Hierarchien, ein motiviertes Team – und keine Langeweile \n Bei guter Zusammenarbeit: Option auf Werkstudententätigkeit oder Einstieg nach dem Studium \n Tauche ein in die Zukunft der Fertigung mit IUNA AI. Entwic",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة IUNA AI Systems GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data scientist"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/iuna-ai-systems-gmbh/praktikum-computer-vision-ai-heilbronn-232443",
        "logo": "https://logo.clearbit.com/iunaaisystemsgmbh.com",
        "companyLogo": "https://logo.clearbit.com/iunaaisystemsgmbh.com",
        "image": "https://logo.clearbit.com/iunaaisystemsgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-54",
        "title": "Vertriebsunterstützer (m/w/d) individuelle Depotbetreuung, Private Banking und Unternehmenskunden",
        "title_ar": "Vertriebsunterstützer (m/w/d) individuelle Depotbetreuung, Private Banking und Unternehmenskunden (مالية ومحاسبة)",
        "company": "Sparkasse Karlsruhe",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Karlsruhe",
        "location_ar": "Karlsruhe",
        "salary": "Competitive",
        "description": "Mit einer Bilanzsumme von rund 12 Mrd. €, ca. 1.300 Mitarbeitende und einer über 213-jährigen Unternehmensgeschichte sind wir eines der größten und das älteste selbstständige Finanzdienstleistungsinstitut unserer Region. Gemessen an der Bilanzsumme ist die Sparkasse Karlsruhe die fünftgrößte Sparkasse in Baden-Württemberg und gehört zu den 25 größten Sparkassen in Deutschland. Wir überzeugen unsere Kunden vor Ort und digital mit individueller Beratung und bestem Service. Unser Erfolgsrezept? Der Mensch. Die Nähe zu unseren Kunden und unseren Mitarbeitenden ist unser wichtigstes Ziel. \n Sie arbeiten in der Abteilung Wertpapierberatung und sind der Gruppe Wertpapierspezialisten / Wertpapier- Portfolioberater zugeordnet. Die Gruppe umfasst neben Ihnen und der Führungskraft zwei Wertpapierspezialisten und vier Wertpapier-Portfolioberater. In Ihrer Funktion arbeiten Sie im Pool mit anderen Vertriebsunterstützern zusammen. Sie unterstützen u.a. die Kunden innerhalb der individuellen Depotbetreuung aus den Abteilungen Private Banking und Unternehmenskunden. \n Kommen Sie zur Sparkasse Karlsruhe – werden Sie Teil unseres Teams. \n Aufgaben \n Vertriebliche Unterstützung im Kundenberatungsbereich \n Individuelle Depotbetreuung \n Vermögensreporting inasys \n Controlling \n Eurex \n Vorbereitung von Präsentationsunterlagen und Beratungshilfen \n Unterstützung bei Dokumentationen und regulatorischer Vorgaben \n Sachbearbeitung insbesondere bei Depotangelegenheiten und Schaffung neuer, technischer",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sparkasse Karlsruhe. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sparkasse-karlsruhe/vertriebsunterstutzer-individuelle-depotbetreuung-private-banking-und-unternehmenskunden-karlsruhe-297412",
        "logo": "https://logo.clearbit.com/sparkassekarlsruhe.com",
        "companyLogo": "https://logo.clearbit.com/sparkassekarlsruhe.com",
        "image": "https://logo.clearbit.com/sparkassekarlsruhe.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-55",
        "title": "Energieberater / Gebäudetechniker / Quereinsteiger* (m/w/d) in Dresden",
        "title_ar": "Energieberater / Gebäudetechniker / Quereinsteiger* (m/w/d) in Dresden (برمجة وتكنولوجيا)",
        "company": "Enerithm Technology GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Dresden",
        "location_ar": "Dresden",
        "salary": "Competitive",
        "description": "Dein Einstieg in die Zukunft der Immobilienwirtschaft – direkt an der Seite der Gründer und des Head of Growth & Revenue \n Enerithm ist die digitale Antwort auf die drängendsten Fragen der modernen Immobilienwirtschaft. Mit unserer KI-gestützten SaaS-Plattform transformieren wir die klassische Energieberatung in einen hochgradig skalierbaren, normgerechten Prozess. Während der Markt unter dem Druck nationaler und europäischer Richtlinien (GModG, EPBD, etc.) steht, liefern wir die technologische Infrastruktur für die Dekarbonisierung einzelner Gebäude und ganzer Portfolios. \n Unsere Bilanz spricht für sich: Mit einer jährlichen Wachstumsrate von über 100 % und einem Kundenstamm, der namhafte Branchenführer umfasst, haben wir den Proof-of-Concept eindrucksvoll erbracht. Hinter Enerithm stehen Gründer der TU Dresden, die fachliche Exzellenz und wissenschaftliche Fundierung in ein marktführendes Produkt übersetzt haben. \n Egal, ob du als erfahrener Energieberater, technischer Quereinsteiger oder Berufseinsteiger nach dem Studium zu uns kommst – wir bieten dir den passenden Einstieg und Entwicklungsmöglichkeiten in einem innovativen GreenTech-Startup. \n Aufgaben \n Je nach Erfahrung übernimmst du folgende Tätigkeiten: \n Prüfung und Qualitätssicherung von Energieausweisen inkl. Vor-Ort-Termin zur Datenaufnahme \n Erstellung von Energieausweisen für Nichtwohngebäude inkl. Vor-Ort-Termin zur Datenaufnahme \n Erstellung von Heizlastberechnungen und Energiebilanzen \n Beratung zu KfW-Effiz",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Enerithm Technology GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Building",
            "Supply"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/enerithm-technology-gmbh/energieberater-gebaudetechniker-quereinsteiger-in-dresden-326551",
        "logo": "https://logo.clearbit.com/enerithmtechnologygmbh.com",
        "companyLogo": "https://logo.clearbit.com/enerithmtechnologygmbh.com",
        "image": "https://logo.clearbit.com/enerithmtechnologygmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789644360-56",
        "title": "Senior Product Designer (Full Remote - Italy)",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Senior Product Designer (Full Remote - Italy))",
        "company": "EverAI",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Italy",
        "location_ar": "Italy",
        "salary": "Competitive",
        "description": "Our Vision & Products \n EverAI — Building the Future of AI Companionship \n One of the Top 15 Largest & Fastest-Growing AI Companies in the World \n 50 Million Users in 2 years — Help Us Reach 100M first, 500M next \n At EverAI , we’re shaping what it means to connect with AI. With 50 million users and counting , we're not just building products — we're creating entirely new categories. \n Our flagship product is the world’s largest AI companionship platform , redefining relationships for millions. It is governed by our proprietary moderation system, EverGuard — an internal AI designed to ensure everything we build is safe, ethical, and human-first . \n And we’re only just getting started! \n Our Team \n We are an enthusiastic, passionate and hardworking team of ≈ 100 people. Our founding team has strong entrepreneurial experience building and scaling web products from 0 to IPO. \n Alexis Soulopoulos [CEO] \n • 10+ years in Tech Executive Leadership \n • Co-Founder Mad Paws Holdings (from 0 to IPO) \n • Forbes 30 under 30 + Deloitte TechFast50 ’22 & ‘23 \n Michael Monin [Co-founder & CTO] \n • 10+ years as CTO / COO (web2/web3), 3 years in AI/LLM \n • Serial-entrepreneur: MTK Digital (exited / 0->$20m revenue) and Zipchat (AI Chatbot for E-commerce brands) \n Thomas Lacroix [Co-founder & CMO] \n • 8+ years in Customer Acquisition & E-commerce Growth \n • Serial-entrepreneur: Curatible (sold to Blackstone) and MTK Digital (exited / 0->$20m revenue) \n Maruša Fasano [CFO/Legal] \n • 25+ years in",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EverAI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Web, ui & ux design"
        ],
        "applyUrl": "https://jobicy.com/jobs/153488-senior-product-designer-full-remote-italy",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/91735b0b-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/91735b0b-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/91735b0b-221.png",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789644360-57",
        "title": "Infrastructure Software Engineer, Metadata Core",
        "title_ar": "مهندس ومطور برمجيات (Infrastructure Software Engineer, Metadata Core)",
        "company": "Dropbox",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "Competitive",
        "description": "Role Description \n As a Software Engineer on the Metadata team, you’ll build and operate the large-scale distributed databases that every Dropbox service depends on. Metadata systems are mission-critical, in the live path for all user operations and must meet stringent requirements for latency, durability, and transactional consistency. \n You’ll design and evolve the core infrastructure that manages Dropbox’s databases at scale, enabling fast, reliable access to data for millions of users and hundreds of internal services. This work spans distributed systems, replication, caching, and transactional database systems. \n You’ll collaborate closely with engineers across Infrastructure and Product teams to ensure the metadata layer meets business needs and continues to scale with Dropbox’s growth. This is an opportunity to leverage your expertise in distributed systems and grow into broader technical leadership. \n Our Engineering Career Framework is viewable by anyone outside the company and describes what’s expected for our engineers at each of our career levels. Check out our blog post on this topic and more here . \n Responsibilities \n Design and maintain distributed database systems providing low-latency, strongly consistent data access \n Implement and optimize replication, consensus, and caching mechanisms to meet availability and performance goals \n Operate production systems, including participating in the on-call rotation, ensuring high availability and data durability \n Co",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dropbox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153489-infrastructure-software-engineer-metadata-core",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789644360-58",
        "title": "Partnerships Lead (EMEA)",
        "title_ar": "مدير وقائد فريق (Partnerships Lead (EMEA))",
        "company": "Supabase",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "UK",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Supabase \n Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth. \n About the Role \n Supabase's Partnerships function spans several sub-functions — Integration Partners, Solution Partners, Cloud, Marketplace, and Startups — each of which owns a global strategy for their area. We're looking for a Partner Development Manager, EMEA to give those strategies a real presence in the region. \n This is a generalist, region-first role covering all partner types . Rather than owning a single function end-to-end, you'll work across all of them — combining new partner development with the activation of partnerships that already exist globally, wherever the region needs it most. \n You'll join an established global partnerships team, working day-to-day with our function leads and EMEA colleagues and reporting to the Head of Partnerships. You are the connection point between global partner strategy and the commercial, regulatory, and market realities of EMEA. \n Much of the work happens in person — building senior partner relationships, being present in the market, and capitalising on co-selling and co-marketing opportunities across the region. As regional partner volume grows, we expect the role to evolve and eventually specialise; you'll help shape what that looks like. \n What You'",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Supabase. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://jobicy.com/jobs/153486-partnerships-lead-emea",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/611d3bfa-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/611d3bfa-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/611d3bfa-221.png",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789644360-59",
        "title": "Developer Relations Engineer (London, UK)",
        "title_ar": "مهندس ومطور برمجيات (Developer Relations Engineer (London, UK))",
        "company": "Supabase",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "UK",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Supabase \n Supabase is the Postgres development platform, built by developers for developers. We provide a complete backend solution including Database, Auth, Storage, Edge Functions, Realtime, and Vector Search. All services are deeply integrated and designed for growth. \n About the Role \n We're looking for a Developer Relations Engineer based in London to join our team and help more developers discover, learn, and build with Supabase. You'll create high-impact content, build real-world projects, and represent Supabase across communities and events. If you're equally energized by writing code and teaching others, this is the role for you. \n Why This Role Matters \n Supabase is growing fast with 350,000+ developers , 1,000+ OSS contributors , and a thriving open source ecosystem. Our users are builders, startup founders, weekend hackers, and engineers scaling to millions of users. DevRel is how we meet them where they are: through content, community, and code. \n We're building a community of communities that brings together developers from many backgrounds, including first-time open source contributors. As a DevRel Engineer, you'll be a bridge between Supabase and the broader developer ecosystem, helping people get started, go deep, and feel connected. \n What You'll Do \n Make content — Publish compelling technical content, especially video, to help developers learn Supabase quickly \n Build demos and tutorials — Ship real-world apps using Supabase and tools like Next.js, ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Supabase. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing & sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153490-developer-relations-engineer-london-uk",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/611d3bfa-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/611d3bfa-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/611d3bfa-221.png",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789644360-60",
        "title": "Infrastructure Software Engineer",
        "title_ar": "مهندس ومطور برمجيات (Infrastructure Software Engineer)",
        "company": "Dropbox",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "Competitive",
        "description": "Role Description \n As an Infrastructure Engineer, your role will be crucial in shaping and constructing the robust systems that not only support our current flagship products but also lay the groundwork for the next wave of engineering innovations. From optimizing user experiences across various projects to ensuring seamless scalability and data integrity, you'll be at the forefront of shaping the technological backbone of our platform. \n Collaborating closely with cross-functional teams, you'll leverage your expertise to tackle audacious challenges and push the boundaries of what's possible. Your contributions will directly impact millions of users, as every line of code you write furthers our mission to revolutionize the way people work and collaborate. \n Join us in redefining the future, where your passion for building scalable, reliable systems will drive meaningful change on a global scale. \n Our Engineering Career Framework is viewable by anyone outside the company and describes what’s expected for our engineers at each of our career levels. Check out our blog post on this topic and more here . \n Responsibilities \n Build infrastructure capable of managing metadata for hundreds of billions of files, handling hundreds of petabytes of user data, and facilitating millions of concurrent connections. \n Assist in expanding Dropbox's role as the data-fabric, linking hundreds of millions of applications, devices, and services worldwide, while spearheading efforts to improve inte",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dropbox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops & infrastructure"
        ],
        "applyUrl": "https://jobicy.com/jobs/153485-infrastructure-software-engineer",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "postedAt": "2026-09-17",
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
