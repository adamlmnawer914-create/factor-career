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
        "id": "job-1789268193-1",
        "title": "Strategy & Operations Associate",
        "title_ar": "Strategy & Operations Associate (مالية ومحاسبة)",
        "company": "Bjak",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Japan",
        "location_ar": "Japan",
        "salary": "Competitive",
        "description": "About ActAI There are over 5 billion users using basic applications today such email, notes, tasks, calendar and they're not AI-native. Our mission is to build proactive applications for anyone in the world, who are not used to complex prompting. We aim to bring intelligence to conversations, errands, organising and workflows, with minimal to no prompting. Our product focuses on achieving high reliability for long-running workflows, persistent context, and real-world task completion. We believe products will greatly reduce hallucinations. Our objective is to organise anyone's life, allowing us all to spend time on valuable and meaningful things. About the Role You will work closely with core teams on the highest impact initiatives across engineering, product, hiring, operations, and business development. As the company grows, you'll help solve new challenges, build new capabilities, and drive execution wherever it matters most. We're looking for people who learn quickly, think deeply, and enjoy solving difficult problems in a fast-moving environment. What You Will Be Doing \n Drive high-priority initiatives across the business. \n Work with leadership to solve business and product challenges. \n Build new teams, processes, and capabilities as the company grows. \n Lead cross-functional projects from planning through execution. \n Research new markets, products, and business opportunities. \n Improve how we operate by identifying problems and implementing practical solutions. \n Take",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Strategy-associate"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/strategy-operations-associate-1160224092",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268193-2",
        "title": "Senior Producer",
        "title_ar": "Senior Producer (أخرى)",
        "company": "Unknown Worlds Entertainment",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$140,000 - $160,000 USD",
        "description": "THE OPPORTUNITY \n Unknown Worlds is seeking an experienced senior producer to work on the Subnautica franchise. Our ideal candidate is a collaborator, facilitator, and force-multiplier. They are highly emotionally intelligent, organized, and passionate about making games. They are experienced in partner management, project planning and risk mitigation, and empowering teams to do their best work. \n This is a remote position on a fully remote team. \n RESPONSIBILITIES \n Lead end-to-end production for one or more game projects, features, or development teams. \n Partner with creative, technical and production leadership to translate the game's vision into actionable development plans. \n Establish, contribute to and maintain project roadmaps, milestones, schedules, dependencies, and priorities. Review and approve milestones for externally developed projects. \n Coordinate work across multiple disciplines and ensure teams have the information and resources they need. \n Identify risks, dependencies, bottlenecks, and resource constraints before they impact delivery or release dates. \n Provide leadership with clear, concise verbal and written reporting on team and feature progress, risks, and key decisions. \n Identify and vet co-development partners for specific project engagements. \n Manage key relationships on the project, including development partners and publishers. \n Coach and mentor. The producer works with individuals to establish expectations, build on areas of strength, and ad",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Unknown Worlds Entertainment. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Senior-producer",
            "Game-production",
            "Production-management",
            "Video-game-production"
        ],
        "applyUrl": "https://himalayas.app/companies/unknown-worlds-entertainment/jobs/senior-producer",
        "logo": "https://cdn-images.himalayas.app/nuun5ky4tll9r1s4ku6plio3uhxo",
        "companyLogo": "https://cdn-images.himalayas.app/nuun5ky4tll9r1s4ku6plio3uhxo",
        "image": "https://cdn-images.himalayas.app/nuun5ky4tll9r1s4ku6plio3uhxo",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-3",
        "title": "Founder's Associate",
        "title_ar": "Founder's Associate (تصميم وإبداع)",
        "company": "Bjak",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Taiwan",
        "location_ar": "Taiwan",
        "salary": "Competitive",
        "description": "About BJAK The original mission of BJAK is we believe people deserve smarter ways to plan, save and grow their money. This is the origin of our name. Started in 2019, we built the first mobile-first, insurance platform, enabling insurance to be accessible online by millions in the region. Today, its the leading insurance platform in Southeast Asia. Today, we are expanding ways to help people in the region — this includes spending, saving, investing, exchanging, travelling, and more. Our mission is help people get more from their money every day. We have teams working around the world, with over 20 nationalities from our offices and remotely, who truly enjoys their work. We are looking for the most talented and driven people we can find. We are looking for people who work for their passion, not counting hours. Who loves building great next-generation products, not status quo. Who cares about redefining how everyone around us can get the best financial applications, not for an exclusive few. If you're this person, we'd love to talk to you. The Role You will work closely with core teams on the highest impact initiatives across engineering, product, hiring, operations, and business development. As the company grows, you'll help solve new challenges, build new capabilities, and drive execution wherever it matters most. We're looking for people who learn quickly, think deeply, and enjoy solving difficult problems in a fast-moving environment. What You'll Own \n Drive high-priority i",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Founder's-associate",
            "Founders-associate",
            "Founder-associate",
            "Startup-associate"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/founder-s-associate-7129289407",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-4",
        "title": "Product Manager, Membership & Payments",
        "title_ar": "مدير وقائد فريق (Product Manager, Membership & Payments)",
        "company": "Raya",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$170,000 - $220,000 USD",
        "description": "Raya is building a better social internet. Our mission is to be the best platform in the world for high-quality, trusted, authentic connection. We bring together a curated global community and create an elevated experience where members can discover and make meaningful connections they can’t find elsewhere, built around trusted recommendations and our core values of trust, creativity, and reciprocity. \n We are seeking an experienced Product Manager to join our Core Membership Experience team, owning critical parts of the member lifecycle with a particular focus on payments. Member Experience owns the journey from application and onboarding through activation, subscriptions, renewal, and reactivation. This role will own the experiences that turn accepted applicants into members and make it seamless for members to start, manage, and reactivate their membership, with payments sitting at the center of that journey. \n The ideal candidate has 4+ years of product management experience building consumer subscription products, with deep experience in iOS payments and subscriptions, including Apple StoreKit and third-party payment providers such as Stripe. We are looking for a hands-on product manager who enjoys getting into the details, works closely with engineering, design, and data, and takes ownership from identifying a problem through shipping and measuring the solution. \n We offer comprehensive medical and dental coverage, $50 a day food delivery budget, equity based employment,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Raya. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-management",
            "Subscription-products",
            "Product-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/raya/jobs/product-manager-membership-payments",
        "logo": "https://cdn-images.himalayas.app/vbum18jo2qnrbxfsosc10mldz82g",
        "companyLogo": "https://cdn-images.himalayas.app/vbum18jo2qnrbxfsosc10mldz82g",
        "image": "https://cdn-images.himalayas.app/vbum18jo2qnrbxfsosc10mldz82g",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-5",
        "title": "Sr Clin Data Abstractor Temp to Hire",
        "title_ar": "Sr Clin Data Abstractor Temp to Hire (برمجة وتكنولوجيا)",
        "company": "Natera",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Temporary",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$35 - $40 USD",
        "description": "POSITION SUMMARY: Perform high-quality medical record abstraction by combining proficient-level experiences in data management and software with medical terminology, medical coding, information encoding, and analytical capabilities. Interpret and manage complex clinical patient data for research, quality improvement, and regulatory reporting. PRIMARY RESPONSIBILITIES: \n Data Abstraction: Accurately review, interpret, and abstract clinical patient data from various electronic health record (EHR) systems, paper charts, and other source documents in accordance with defined project or research protocols, clinical, data, and technical specifications, and dictionaries. \n Coding and Classification: Apply knowledge of medical coding systems (e.g., ICD-10, MedDRA, CPT, HCPCS) and standard of care guidelines, to interpret, classify and categorize abstracted clinical data points from unstructured text to standardized machine readable data in one common database schema. \n Electronic Data Capture (EDC): Utilize specialized data management software (e.g., REDCap, registries, and custom built EDC systems) to enter, track, and maintain the integrity of clinical data encoded into queryable databases. \n Technical Support: Aid cross-functional teams in translating clinical and data abstraction and encoding requirements. Support prompt engineering and design for all AI and LLM initiatives. \n Data Management: Apply and support establishing program specific clinical data management best practices ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Natera. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Clinical-data-management",
            "Medical-coding",
            "Healthcare-analytics"
        ],
        "applyUrl": "https://himalayas.app/companies/natera/jobs/sr-clin-data-abstractor-temp-to-hire",
        "logo": "https://cdn-images.himalayas.app/1e5nqzbnkuslvqv7prrbpwkw41tg",
        "companyLogo": "https://cdn-images.himalayas.app/1e5nqzbnkuslvqv7prrbpwkw41tg",
        "image": "https://cdn-images.himalayas.app/1e5nqzbnkuslvqv7prrbpwkw41tg",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-6",
        "title": "Product Operations Engineer",
        "title_ar": "مهندس ومطور برمجيات (Product Operations Engineer)",
        "company": "Pansophic Learning",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$95,000 - $105,000 USD",
        "description": "The Product Operations Engineer will design, code and tests software solutions for learning systems. They will deliver and support products with high quality and in a timely manner. The Product Operations Engineer will administer Canvas, Integrated third parties, and the SIS (Student Information Systems), to support the worldwide expansion of our schools. They will be a collaborative and reliable individual who is motivated by working with an energetic, high-performing team to build a leading education company. The Product Operations Engineer will oversee the implementation, support and troubleshooting of systems within our educational environment (Online, Brick and Mortar and international, 100+ schools). This position requires strong technical skills with data analysis, complex configurations, and integrations with both internal and external applications. The Product Operations engineer will work with the Software Development Managers and Software Engineers to provide suggestions and solutions to maintain and improve the current and future developments of the company. Applicants in California, Colorado and New York are not eligible for this position. Responsibilities: \n Design, implement and test software solutions for K-12 schools’ learning environment \n Design, implement and test RESTful web services using NodeJS, Google Apps Script, and Postman \n Work with various services from Amazon Web Services (AWS) to build, host and maintain application environments \n Follow best p",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Pansophic Learning. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-operations",
            "Software-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/pansophic-learning/jobs/product-operations-engineer",
        "logo": "https://logo.clearbit.com/pansophiclearning.com",
        "companyLogo": "https://logo.clearbit.com/pansophiclearning.com",
        "image": "https://logo.clearbit.com/pansophiclearning.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-7",
        "title": "Senior Full Stack Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Full Stack Engineer)",
        "company": "Saaf Finance",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "About This Role Saaf Finance is building the AI workforce for the mortgage industry. We are an AI startup integrated with a top-10 mortgage lender, American Heritage Lending (AHL). Together we are combining AHL’s 15+ years of mortgage origination expertise with the power of AI-native innovation to redefine what’s possible in mortgage lending. As a Full Stack Engineer at Saaf Finance , you will design and ship software that automates complex mortgage workflows while collaborating closely with founders, engineers, and design. We are an AI-native engineering team: AI-assisted development tools are a regular part of how we build, review, and ship software. We expect engineers to use these tools thoughtfully and effectively as part of their daily workflow. Responsibilities Product & Engineering \n Design, develop, and maintain scalable software solutions that automate mortgage-related processes and support collaboration among end users. \n Work closely with founders, senior engineers, and design teams to translate customer needs into effective, practical software. \n Shape engineering strategy and contribute to new product features and team planning. \n Architecture & APIs \n Design and maintain scalable systems, APIs, and services that are easy to update, expand, and secure. \n Design, implement, and document RESTful and/or GraphQL APIs that are robust, secure, and easy to use. \n Ensure data integrity, security, and governance across applications, following best practices for data mana",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Saaf Finance. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Full-stack-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/saaf-finance/jobs/senior-full-stack-engineer-7606310690",
        "logo": "https://cdn-images.himalayas.app/eiqeobx4gbawhmxugqs054ify6m3",
        "companyLogo": "https://cdn-images.himalayas.app/eiqeobx4gbawhmxugqs054ify6m3",
        "image": "https://cdn-images.himalayas.app/eiqeobx4gbawhmxugqs054ify6m3",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-8",
        "title": "Product Manager - Percona Monitoring and Management",
        "title_ar": "مدير وقائد فريق (Product Manager - Percona Monitoring and Management)",
        "company": "Percona",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bulgaria, Croatia, Hungary",
        "location_ar": "Bulgaria, Croatia, Hungary",
        "salary": "Competitive",
        "description": "As the Product Manager for Percona Monitoring and Management (PMM) , you will own the product strategy and execution for Percona 's open source observability platform for databases. You will work closely with engineering, design, product leadership, customers, and the open source community to define the future of PMM. This is a highly technical product role. Our users are database administrators, SREs, platform engineers, DevOps engineers, cloud engineers, and developers who rely on PMM to monitor and optimize mission-critical database environments. We're looking for someone with an entrepreneurial mindset who enjoys moving quickly, talking to customers, validating ideas early, and iterating rapidly. This is not a role where you'll spend months writing specifications before shipping. We value experimentation, pragmatism, and delivering customer value. What Will You Do \n Own the product strategy and roadmap for PMM, ensuring it aligns with Percona 's overall product vision. \n Work directly with customers and the community to understand their challenges, validate ideas, and identify new product opportunities. \n Conduct market research and competitive analysis to help shape product direction. \n Translate customer problems into clear product requirements and priorities. \n Work closely with Engineering, Design, Documentation, Marketing, and Customer Success to deliver outstanding product experiences. \n Prioritize features and make informed trade-offs based on customer value, engin",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Percona. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Database-product-manager",
            "Product-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/percona/jobs/product-manager-percona-monitoring-and-management-1382774702",
        "logo": "https://cdn-images.himalayas.app/m5ml5b82jfky4y2q9l4r31559vm1",
        "companyLogo": "https://cdn-images.himalayas.app/m5ml5b82jfky4y2q9l4r31559vm1",
        "image": "https://cdn-images.himalayas.app/m5ml5b82jfky4y2q9l4r31559vm1",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-9",
        "title": "Strategy & Operations Lead",
        "title_ar": "مدير وقائد فريق (Strategy & Operations Lead)",
        "company": "Bjak",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Indonesia",
        "location_ar": "Indonesia",
        "salary": "Competitive",
        "description": "About KIRA Our mission is to make money smart, reliable and within reach for everyone. In 2019, we built the first mobile-first, insurance platform, enabling insurance to be accessible online by millions in the region. Today, it's the leading insurance platform in Southeast Asia. Today, we are expanding ways to help people in Asia and it includes spending, saving, investing, exchanging, travelling, and more. Our objective is to build tools that will help people get more from their money and at ease and self reliance, become an expert. We believe AI will help us achieve this in our generation. We are looking for the most talented and driven people we can find. We are looking for people who work for their passion, not counting hours. Who loves building great next-generation products, not status quo. Who cares about redefining how everyone around us can get the best financial applications, not for an exclusive few. We have teams working around the world, with over 20 nationalities and growing from our offices and remotely. Join us and build a better future. If you're this person, we'd love to talk to you. The Role You will work closely with core teams on the highest impact initiatives across engineering, product, hiring, operations, and business development. As the company grows, you'll help solve new challenges, build new capabilities, and drive execution wherever it matters most. We're looking for people who learn quickly, think deeply, and enjoy solving difficult problems in ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Strategy-operations",
            "Strategy-lead",
            "Operations-lead"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/strategy-operations-lead-8730936593",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-10",
        "title": "AI Engineer (Technical Product Owner)",
        "title_ar": "مهندس ومطور برمجيات (AI Engineer (Technical Product Owner))",
        "company": "Foxelli Group",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Albania, Andorra, Armenia",
        "location_ar": "Albania, Andorra, Armenia",
        "salary": "$2,000 - $3,000 EUR",
        "description": "At Foxelli, we’re building more than e-commerce brands - we’re building a tribe of thoughtful humans: AI enthusiasts, curious builders, and ambitious minds who care about doing meaningful work together. Ten years in, our D2C brands reach millions and generate over $20M annually. Our focus stays simple: create products customers love and a team that actually enjoys building them. If you love to learn, experiment, think boldly, make decisions, and build things that matter - you’ll feel at home with us. WHY JOIN FOXELLI? We are a fast-moving e-commerce company that builds our own proprietary AI infrastructure. We develop internal AI-driven systems to automate complex creative and analytical workflows, which we later scale into B2B SaaS products. We are not looking for a traditional developer. We are looking for an AI-Native Builder who can turn an idea into a functional prototype in days using the latest AI-assisted development tools. THE ROLE As a Founding AI Engineer, you will work directly with the founder to design, build, and iterate on various AI systems. The projects will vary - from computer vision and image manipulation to automated video generation and agentic data analysis. You will be responsible for the full pipeline: from R&D of the best AI models to deploying scalable web applications. Who You Are: \n Modern Developer: You have abandoned \"manual-only\" coding. You are a power user of tools like GPT Codex , Claude code, and Replit, allowing you to build at a 10x pace",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Foxelli Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Lead-ai-product-engineer",
            "Senior-ai-product-owner",
            "Ai-product-owner"
        ],
        "applyUrl": "https://himalayas.app/companies/foxelli-group/jobs/ai-engineer-technical-product-owner",
        "logo": "https://cdn-images.himalayas.app/wvl4w8cyizqvctwbrirb5q9i3na1",
        "companyLogo": "https://cdn-images.himalayas.app/wvl4w8cyizqvctwbrirb5q9i3na1",
        "image": "https://cdn-images.himalayas.app/wvl4w8cyizqvctwbrirb5q9i3na1",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-11",
        "title": "Fleet Managers: Interview On Operations And Vehicle Management",
        "title_ar": "مدير وقائد فريق (Fleet Managers: Interview On Operations And Vehicle Management)",
        "company": "Terac",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$150 - $150 USD",
        "description": "What We're Researching We're running a paid study on modern fleet operations and the software systems used to track vehicles. The goal is to evaluate current tooling options and understand where operational bottlenecks occur. Your feedback directly informs how we think about the next generation of fleet management solutions. How It Works You will participate in a remote conversational interview with our research team. We will ask you to walk through your daily routine, highlighting how you manage vehicle dispatch and maintenance schedules. You will also review a few common scenarios and explain the decisions you make to keep operations running smoothly. The session is entirely discussion-based, with no screen sharing required. Who This Is For We are hiring active fleet managers, dispatch supervisors, and logistics coordinators who oversee vehicle operations. You should have hands-on experience using commercial fleet management software in a professional setting. We welcome professionals from various industries, including commercial delivery, construction, and public transportation. What You'll Do \n Walk us through your typical daily fleet management operations. \n Explain the tools and software you use for vehicle tracking and dispatch. \n Discuss common challenges related to maintenance scheduling and driver coordination. \n Share insights on how current operational workflows could be improved. \n Who Should Apply \n Active role in fleet management, dispatch, or logistics coordin",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Terac. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Fleet-operations-manager",
            "Vehicle-fleet-operations",
            "Fleet-management"
        ],
        "applyUrl": "https://himalayas.app/companies/terac/jobs/fleet-managers-interview-on-operations-and-vehicle-management",
        "logo": "https://cdn-images.himalayas.app/y0q4p6irnizjhlrejw4lu9rdgeur",
        "companyLogo": "https://cdn-images.himalayas.app/y0q4p6irnizjhlrejw4lu9rdgeur",
        "image": "https://cdn-images.himalayas.app/y0q4p6irnizjhlrejw4lu9rdgeur",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-12",
        "title": "Operations Accounting Intern",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Operations Accounting Intern)",
        "company": "EQT Corporation",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "At EQT, you won't just do a job, you'll help shape our future. Through Transparent Leadership, you'll work alongside leaders who value collaboration and ensure every voice is heard. Through Connected Impact, you'll see how your work influences critical business decisions and drives value across our operations. Through Supported Growth, you'll have opportunities to expand your skills through cross-functional collaboration, development opportunities, and career advancement. Join our Qrew! As an EQT Intern, you will participate in a 12-week paid “real-world experience” internship program. Not only will you be involved in learning activities unique to your role, but you will learn and grow with #Qrew. If innovation and powering the future sounds exciting to you, we encourage you to apply! Accounting Intern – Operations Accounting As an Accounting Intern, you will support our Operations Accounting department, which handles the capital and operating costs of our upstream & midstream assets, lease acquisitions, and reserves. You'll gain hands-on energy industry experience, support financial statement close processes, and apply your accounting skills to real-world work. The Accounting Intern responsibilities include but are not limited to: \n Perform journal entries supporting month-end and ad hoc close activity \n Perform account reconciliations, validating balances and resolving variances \n Analyze financial results and identify trends ahead of reporting deadlines \n Review non-op JIB",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EQT Corporation. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Operations-accounting",
            "Accounting-intern",
            "Accounting",
            "Operations-intern"
        ],
        "applyUrl": "https://himalayas.app/companies/eqt-corporation/jobs/operations-accounting-intern",
        "logo": "https://cdn-images.himalayas.app/lmnx8t42ce6uc36uv93ai0jziq0l",
        "companyLogo": "https://cdn-images.himalayas.app/lmnx8t42ce6uc36uv93ai0jziq0l",
        "image": "https://cdn-images.himalayas.app/lmnx8t42ce6uc36uv93ai0jziq0l",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268194-13",
        "title": "Senior Storage Systems Engineer - remote in the US",
        "title_ar": "مهندس ومطور برمجيات (Senior Storage Systems Engineer - remote in the US)",
        "company": "Mirantis",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Overview The role is to deploy, integrate, and operate high-performance storage for GPU-accelerated compute and AI platforms. You will own the storage layer where Kubernetes meets bare metal — standing up NFS-based high-performance storage, wiring it into clusters via CSI, and tuning it to keep data flowing to GPU workloads at scale. Work spans hybrid, edge, and air-gapped deployments built on the Mirantis K0rdent stack. About the Role We are looking for a senior systems engineer who treats storage as infrastructure to be automated, observed, and tuned — not hand-managed. The right candidate is fluent in Kubernetes storage, deeply versed in Linux storage and networking fundamentals down to the kernel and NFS-client layer, and knows how to make high-performance NAS actually perform under demanding workloads. You should reach for infrastructure-as-code and GitOps by default, be self-directed in diagnosing performance and reliability issues end to end, set operational standards for others to follow, and communicate clearly across teams. Bare-metal hardware experience is a strong plus, but deep Linux storage knowledge is essential. Responsibilities 1. Storage Integration & Operation \n Integrate NFS-based high-performance storage (e.g., VAST, Dell PowerScale) into Kubernetes clusters via CSI, storage classes, and persistent volumes. \n Tune the NFS data path — mount options, nconnect/RDMA, Linux client, and network settings — for high-throughput, low-latency GPU/AI workloads. \n Dep",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mirantis. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Storage-engineering",
            "Systems-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/mirantis/jobs/senior-storage-systems-engineer-remote-in-the-us-7410182025",
        "logo": "https://cdn-images.himalayas.app/372lfmxxo0gz5wpfcmx0sdtgx1mq",
        "companyLogo": "https://cdn-images.himalayas.app/372lfmxxo0gz5wpfcmx0sdtgx1mq",
        "image": "https://cdn-images.himalayas.app/372lfmxxo0gz5wpfcmx0sdtgx1mq",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-14",
        "title": "Téléconseiller H/F 100% Télétravail",
        "title_ar": "Téléconseiller H/F 100% Télétravail (برمجة وتكنولوجيا)",
        "company": "Kinougarde",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "France",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$2,133 - $2,333 EUR",
        "description": "Si tu recherches, un job étudiant ou, que tu souhaites compléter une activité ou, tout simplement un temps partielle et bien c’est possible ! Et en plus tu n’auras pas de déplacement. Le poste proposé permet de se projeter en alliant vie personnelle et professionnelle : \n Poste 100% télétravail = pas de frais de déplacement !! \n CDD à pourvoir à partir de mi Août jusqu'à Mi Mars 2027 \n Amplitude de travail : du lundi au vendredi de 9h00 à 18h00 \n Fixe + Primes individuelles motivantes \n Prime de participation \n Après une solide formation initiale, ton responsable t’accompagne au quotidien à distance. En fonction de ta progression et de tes attentes, tes missions seront de plus en plus variées : Gérer les candidatures de professeurs particuliers et mener des entretiens téléphoniques Tu es titulaire d’un bac +2, avec ou sans expérience, tu souhaites t’épanouir dans un poste gratifiant. Tu as un accès internet haut débit et les conditions appropriées pour le travail à distance. Tu aimes le challenge et tu possèdes une aisance au téléphone. Tu es autonome, digne de confiance et tu fais preuve d’initiative. Tes qualités d’écoute, ton sourire et ton dynamisme te permettent de créer des échanges interactifs et chaleureux avec tes interlocuteurs. Tu es très à l’aise avec les outils informatiques. Rémunération entre 2133€ et 2333€ brut mensuel. Tu recherches un poste 100% télétravail? Tu as envie de te former dans une entreprise où les valeurs humaines et la relation client sont impor",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kinougarde. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Téléconseiller",
            "Telephone-recruiting",
            "Candidate-management"
        ],
        "applyUrl": "https://himalayas.app/companies/kinougarde/jobs/teleconseiller-h-f-100-teletravail-3013383710",
        "logo": "https://cdn-images.himalayas.app/3ssco508loji2jt49p8hjmuhcsgt",
        "companyLogo": "https://cdn-images.himalayas.app/3ssco508loji2jt49p8hjmuhcsgt",
        "image": "https://cdn-images.himalayas.app/3ssco508loji2jt49p8hjmuhcsgt",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-15",
        "title": "Design Verification Engineer - Fully Remote | Upto $175/hr",
        "title_ar": "مهندس ومطور برمجيات (Design Verification Engineer - Fully Remote | Upto $175/hr)",
        "company": "mercor",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$100 - $175 USD",
        "description": "About the job Mercor connects elite creative and technical talent with leading AI research labs. Headquartered in San Francisco, our investors include Benchmark , General Catalyst , Peter Thiel , Adam D'Angelo , Larry Summers , and Jack Dorsey . Position: RTL Design Engineers Type: Contract Compensation: $100–$175/hour Location: Remote Duration: 3+ months Commitment: 40 hours/week Role Responsibilities \n Evaluate digital chip design workflows to enhance AI model training and evaluation . \n Design and verify RTL components using Verilog/SystemVerilog . \n Collaborate with architecture, verification, and implementation teams to improve model outputs . \n Develop reusable verification components and testbench infrastructure . \n Leverage LLM-based tools to accelerate chip design and verification processes. \n Work independently and asynchronously to meet project deadlines. \n Qualifications Must-Have \n 3–10 years of experience in digital RTL design or design verification. \n Strong proficiency in Verilog/SystemVerilog and UVM . \n Solid understanding of digital design fundamentals: FSMs , datapaths, pipelines, FIFOs, arbiters, clock/reset domains, bus protocols. \n Experience with ASIC design flows and common EDA tools . \n Ability to write clear design documentation and communicate technical tradeoffs. \n Preferred \n Knowledge of AMBA protocols (AXI, AHB, APB). \n Background in CPU , GPU/ML accelerator , networking, memory subsystem, PCIe/high-speed IO , SoC interconnect, low-power design",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة mercor. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Rtl-design-engineer",
            "Digital-design-engineer",
            "Asic-design-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/mercor/jobs/design-verification-engineer-fully-remote-upto-175-hr",
        "logo": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "companyLogo": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "image": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-16",
        "title": "Finance Systems & Automation Analyst",
        "title_ar": "Finance Systems & Automation Analyst (برمجة وتكنولوجيا)",
        "company": "Tilt",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$75,000 - $100,000 USD",
        "description": "Join the Tilt team At Tilt , we see a side of people that traditional lenders miss. Our mobile-first products and machine learning-powered credit models look beyond credit scores, using over 250 real-time financial signals to recognize real potential. With millions of customers worldwide , we're not just changing how people access financial products — we're creating a new credit system that backs the working, whatever they're working toward. The opportunity: Finance Systems & Automation Analyst Tilt is hiring a Finance Systems & Automation Analyst to automate the manual work in our accounting close and reporting. This role is for someone who understands accounting but would rather write the query than update the spreadsheet. You'll take recurring workflows — reconciliations, variance analysis, close schedules, audit pulls — and rebuild them as automated, documented, repeatable processes using SQL, Python, and our BI stack. You'll spend most of your time hands-on: writing queries, cleaning ERP and subledger data, building dashboards, and fixing the reports that break. Tilt is a remote-first company that fosters connectivity through regular offsites. Travel for company offsites is required at least twice per year. How you'll make an impact \n Automate recurring accounting workflows with reusable AI-assisted tools for reconciliations, variance analysis, flux commentary, and close. \n Pull, clean, and join data from NetSuite (GL balances, posted transactions, SuiteQL queries) with ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tilt. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance-systems-analyst",
            "Fp&a-systems-analyst"
        ],
        "applyUrl": "https://himalayas.app/companies/tilt-com/jobs/finance-systems-automation-analyst",
        "logo": "https://cdn-images.himalayas.app/dixsq6l0u6nb3nk6f4ukgdpahcx4",
        "companyLogo": "https://cdn-images.himalayas.app/dixsq6l0u6nb3nk6f4ukgdpahcx4",
        "image": "https://cdn-images.himalayas.app/dixsq6l0u6nb3nk6f4ukgdpahcx4",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-17",
        "title": "Lead, Strategy",
        "title_ar": "مدير وقائد فريق (Lead, Strategy)",
        "company": "Bjak",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hong Kong",
        "location_ar": "Hong Kong",
        "salary": "Competitive",
        "description": "About KIRA Our mission is to make money smart, reliable and within reach for everyone. In 2019, we built the first mobile-first, insurance platform, enabling insurance to be accessible online by millions in the region. Today, it's the leading insurance platform in Southeast Asia. Today, we are expanding ways to help people in Asia and it includes spending, saving, investing, exchanging, travelling, and more. Our objective is to build tools that will help people get more from their money and at ease and self reliance, become an expert. We believe AI will help us achieve this in our generation. We are looking for the most talented and driven people we can find. We are looking for people who work for their passion, not counting hours. Who loves building great next-generation products, not status quo. Who cares about redefining how everyone around us can get the best financial applications, not for an exclusive few. We have teams working around the world, with over 20 nationalities and growing from our offices and remotely. Join us and build a better future. If you're this person, we'd love to talk to you. The Role You will work closely with core teams on the highest impact initiatives across engineering, product, hiring, operations, and business development. As the company grows, you'll help solve new challenges, build new capabilities, and drive execution wherever it matters most. We're looking for people who learn quickly, think deeply, and enjoy solving difficult problems in ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Strategy-lead",
            "Strategy-leader",
            "Strategy-leadership",
            "Head-of-strategy"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/lead-strategy-6209798353",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-18",
        "title": "Frontend Engineer",
        "title_ar": "مهندس ومطور برمجيات (Frontend Engineer)",
        "company": "Bjak",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About ActAI There are over 5 billion users using basic applications today such email, notes, tasks, calendar and they're not AI-native. Our mission is to build proactive applications for anyone in the world, who are not used to complex prompting. We aim to bring intelligence to conversations, errands, organising and workflows, with minimal to no prompting. Our application focuses on achieving high reliability for long-running workflows, persistent context, and real-world task completion. We believe products will greatly reduce hallucinations Our objective is to organise anyone's life. Role As a Web Frontend Engineer, you will build the core web experiences, including Chat, Notes, Calendar, Docs and Sheets. You will own complex, highly interactive product surfaces from architecture through implementation, working closely with product, design, backend and AI engineers to make AI a native part of how users communicate, write, organise and work. What You'll Own \n Build major web experiences across Chat, Notes, Calendar, Docs, and Sheets. \n Develop complex interactions including real-time messaging, collaborative editing, rich-text editing, scheduling, tables, and spreadsheets. \n Build reusable frontend architecture and components that work consistently across ActAI applications. \n Integrate streaming AI responses, proactive actions, and model-driven experiences directly into product workflows. \n Own frontend performance, responsiveness, reliability and accessibility across browse",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Frontend-engineer",
            "Web-frontend-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/frontend-engineer-742349863",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-19",
        "title": "Meta Ads Lead",
        "title_ar": "مدير وقائد فريق (Meta Ads Lead)",
        "company": "Valerie Group",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "About this Role We're looking for a Paid Media Specialist (Meta) to drive paid social performance across Valerie's portfolio of ecommerce brands. You'll be responsible for the day-to-day strategy, execution, optimisation, and performance of Meta campaigns across Facebook and Instagram, while also developing your knowledge across TikTok, Google, YouTube, and other acquisition channels. You'll own campaign budgets and performance targets, audit existing accounts, identify opportunities, and continuously test new approaches to improve results. You'll work closely with Creative, Analytics, POD, and broader Paid Media teams to turn performance data into better campaigns, stronger creative, and more effective acquisition strategies. Success in this role isn't measured by simply launching campaigns or hitting a short-term ROAS target; it's measured by how consistently campaign performance improves, how quickly new opportunities are identified and tested, and how effectively your work contributes to profitable growth. You could be a great fit if... \n You enjoy being hands-on in Meta Ads Manager and staying close to campaign performance and data. \n You naturally combine analytical thinking with strong commercial and strategic judgement. \n You understand how campaign structure, audiences, creative, bidding, budget allocation, and funnel stages work together. \n You proactively audit accounts, identify performance gaps, and act on opportunities rather than waiting for direction. \n You en",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Valerie Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Meta-ads",
            "Meta-ads-marketing",
            "Meta-ads-creative-lead",
            "Paid-social-lead"
        ],
        "applyUrl": "https://himalayas.app/companies/valerie-group/jobs/meta-ads-lead",
        "logo": "https://cdn-images.himalayas.app/9ivpd5plbf2nweh5iu1li9fambfk",
        "companyLogo": "https://cdn-images.himalayas.app/9ivpd5plbf2nweh5iu1li9fambfk",
        "image": "https://cdn-images.himalayas.app/9ivpd5plbf2nweh5iu1li9fambfk",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789268195-20",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-21",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-22",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-23",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-24",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-25",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-26",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-27",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-28",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-29",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-30",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-31",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-32",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-33",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-34",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-35",
        "title": "Face Deduplication Collection",
        "title_ar": "Face Deduplication Collection (أخرى)",
        "company": "TELUS Digital",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "part_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Pay per task",
        "description": "The project compensation rate is $0.55 USD per accepted image. The objective of this project is to collect a large and diverse dataset of current neutral selfies, head-pose captures, and historical facial images to support machine-learning research and facial recognition model training at TELUS. \n The focus is on capturing real-world variation across lighting, poses, expressions, accessories, environments, and aging to improve model accuracy and robustness. The collection includes: \n • Current Neutral Selfies – clean frontal selfies serving as high-quality identity references, with natural variation in appearance and surroundings. \n • Current Head-Pose Captures – selfies captured in assigned head directions to introduce pose variation. \n • Historical Images – older photos from participants’ galleries to capture natural aging and long-term appearance changes. \n To qualify for payment, you must submit a minimum of 20 valid images. The maximum payout is based on 24 accepted images. Due to the strict automated and manual Quality Control (QC) process, we strongly recommend submitting 30 images to help ensure that enough images remain valid after review \n Note: Please use a Gmail address as your primary account when applying for this project. \n Qualification path \n No specific education is needed to perform the project task.",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة TELUS Digital. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "All others"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/all-others/face-deduplication-collection-2091093",
        "logo": "https://remotive.com/job/2091093/logo",
        "companyLogo": "https://remotive.com/job/2091093/logo",
        "image": "https://remotive.com/job/2091093/logo",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789268195-36",
        "title": "PUSHH I Senior Social Media Creative (all genders)",
        "title_ar": "PUSHH I Senior Social Media Creative (all genders) (تسويق ومبيعات)",
        "company": "Pahnke GmbH & Co. KG",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Deine Aufgaben Du kommst aus der Social-Bubble, bist auf den gängigen Kanälen zuhause und entwickelst für Marken nicht nur unique Looks, sondern auch Content-Pieces, die wirklich performen? Volltreffer! Wir wachsen und suchen einen kreativen Kopf, der mit uns die Brand Channels nationaler und internationaler Marken proaktiv voranbringt. Visuelle Führung von Marken auf Social Med ia – von der Entwicklung der Social Identity bis zur Umsetzung in Stills, Video und Motion Konzeption und Realisierung kreativer, plattformgerechter Ideen für Kampagnen und Always-on Kreative Steuerung und Umsetzung von Produktionen – von schnellen, pragmatischen Social -Formaten bis zu aufwändigeren TVC-Begleitungen Entwicklung von Social Media Guides und Vorlagen-Kits für eine effiziente und skalierbare Content-Produktion Qualitätssicherung und Weiterentwicklung bestehender Design- und Produktionsstandards Mentoring und fachliche Weiterentwicklung von Junior Content Creators Dein Profil Ob Stills oder Videos – du kannst deine Visionen hands-on präsentieren und umsetzen. Du findest proaktiv Lösungen, führst Projekte eigenständig ins Ziel und arbeitest eng mit deinem Team zusammen. mehrjährige Berufserfahrung im Kreativ- und Social -Media-Umfeld – idealerweise in der Agenturwelt ausgeprägtes Gespür für Marken, Kultur, Social -Media-Trends, visuelle Kommunikation und plattformspezifischen Content sicherer Umgang mit gängigen Design-, Editing - und Content-Tools – auch mit professionellen Grafiktools üb",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Pahnke GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pahnke-gmbh-co-kg/pushh-i-senior-social-media-creative-all-genders-hamburg-303861",
        "logo": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "image": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-37",
        "title": "PickMeUp I Werkstudent*in Kreation (all genders)",
        "title_ar": "PickMeUp I Werkstudent*in Kreation (all genders) (أخرى)",
        "company": "Pahnke GmbH & Co. KG",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Deine Aufgaben Du hast Freude an Gestaltung, interessierst dich für Marken und möchtest kennenlernen, wie kreative Lösungen für den Point of Sale entstehen? Perfekt, dann bist du hier genau richtig. Zur Verstärkung unseres Teams bei PickMeUp suchen wir eine:n Werkstudent:in Kreation (all genders). Du unterstützt unser Kreativteam in der konzeptionellen Arbeit, denkst Ideen mit und bringst sie in eine überzeugende, umsetzbare Form. Du unterstützt das Kreationsteam bei der Entwicklung von Konzepten und Ideen für Brand Activation entlang der gesamten Shopper Journey bis zum Point of Sale. Du arbeitest bei der visuellen Umsetzung von Konzepten mit, von ersten Skizzen bis zu präsentationsreifen Layouts. Du bereitest Präsentationen und Pitch-Unterlagen auf und sorgst für eine klare, überzeugende Darstellung von Ideen. Du nutzt KI-gestützte Tools sinnvoll für Recherche, Moodboards oder erste visuelle Entwürfe und bringst eigene Impulse ein, wie sich der kreative Prozess weiterentwickeln lässt. Du arbeitest eng mit dem Kreativteam zusammen und stehst im Austausch mit der Beratung. Dein Profil Studium in einem kreativen Bereich wie Kommunikationsdesign, Grafikdesign, Visuelle Kommunikation oder einem vergleichbaren Fach Erste praktische Erfahrung durch ein Praktikum, eine Werkstudierendentätigkeit oder vergleichbare Projekte Sicherer Umgang mit gängigen Programmen wie InDesign und Photoshop Freude an konzeptioneller Arbeit und ein gutes Gespür für Marken, Bildsprache und Gestaltung Er",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Pahnke GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pahnke-gmbh-co-kg/pickmeup-i-werkstudentin-kreation-all-genders-hamburg-170116",
        "logo": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "image": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-38",
        "title": "PickMeUp I Werkstudent*in Beratung / Projektmanagement (all genders)",
        "title_ar": "PickMeUp I Werkstudent*in Beratung / Projektmanagement (all genders) (أخرى)",
        "company": "Pahnke GmbH & Co. KG",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Deine Aufgaben Du bringst gerne Struktur in Informationen, arbeitest dich schnell in neue Themen ein und und behältst auch dann den Überblick, wenn mehrere Themen parallel laufen? Perfekt, dann bist du hier genau richtig. Zur Verstärkung unseres Teams bei PickMeUp suchen wir eine:n Werkstudent:in Projektmanagement & Beratung (all genders). Du unterstützt unser Team bei der Steuerung von Projekten, arbeitest eng mit dem Team zusammen und bringst dabei ein gutes Gespür für Struktur und Analyse mit. Du bereitest Analysen und Präsentationen mit auf, denkst Themen inhaltlich mit und trägst dazu bei, dass Projekte sauber und nachvollziehbar laufen. Du unterstütztdas Team bei der Steuerung von Projekten aus dem Bereich Brand A ctivation und Shopper Marketing, behältst Timings und Aufgaben im Blick und sorgst für einen strukturierten Ablauf. Du bereitest Daten und Informationen auf, arbeitest dich in Themen ein und leitest daraus erste Einschätzungen undHandlungsempfehlungen ab. Du erstellst und überarbeitest Präsentationen, achtest dabei auf eine klare, präzise und optisch saubere Aufbereitung. Du nutzt KI-gestützte Tools sinnvoll, um Recherchen, Auswertungen oder Textarbeit effizienter zu gestalten, und bringst eigene Ideen ein, wie sich Arbeitsprozesse verbessern lassen. Du arbeitest eng mit dem Projektteam zusammen und unterstützt bei der Kommunikation mit internen Ansprechpartner:innen . Dein Profil Studium in einem Bereich wie Wirtschaftswissenschaften, Psychologie, Statistik, ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Pahnke GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pahnke-gmbh-co-kg/pickmeup-i-werkstudentin-beratung-projektmanagement-all-genders-hamburg-301247",
        "logo": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "image": "https://logo.clearbit.com/pahnkegmbhcokg.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-39",
        "title": "SCADA Engineering Manager (m/f/d) – Utility Scale PV & BESS",
        "title_ar": "مهندس ومطور برمجيات (SCADA Engineering Manager (m/f/d) – Utility Scale PV & BESS)",
        "company": "Greencells Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Saarbrücken",
        "location_ar": "Saarbrücken",
        "salary": "Competitive",
        "description": "Overview As SCADA Engineering Manager, you take technical ownership of SCADA, monitoring, plant control and communication systems for our utility-scale PV and BESS projects. You act as the central technical interface between engineering, project teams, customers, grid operators and external suppliers such as Gantner or meteocontrol — ensuring these systems are correctly specified, integrated, tested and commissioned. This role combines strong technical understanding with coordination and stakeholder management: you translate between grid operator requirements, customer expectations, supplier solutions and EPC project realities. Most importantly, when a plant reaches commissioning, you ensure SCADA, PPC and communication systems work reliably — rather than becoming the project's last unresolved interface. Your mission Technical ownership of SCADA, monitoring, plant control and communication systems Supplier management — coordinating SCADA/PPC providers (e.g. Gantner, meteocontrol) and holding them accountable for correct specification, integration and delivery Acting as the central technical interface between engineering, project teams, customers, grid operators and suppliers Testing & commissioning oversight for SCADA, PPC and communication systems Engineering & project coordination across the full plant lifecycle Your profile Degree in electrical engineering, automation engineering, control engineering, mechatronics, computer engineering, or a comparable technical discipline",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Greencells Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Scada-manager",
            "Plant-control-ingenieur",
            "Monitoring-systeme",
            "Utility-scale"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/greencells-gmbh/scada-engineering-manager-utility-scale-pv-bess-saarbrucken-140312",
        "logo": "https://logo.clearbit.com/greencellsgmbh.com",
        "companyLogo": "https://logo.clearbit.com/greencellsgmbh.com",
        "image": "https://logo.clearbit.com/greencellsgmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-40",
        "title": "Praktikant Finance (m/w/d)",
        "title_ar": "Praktikant Finance (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Greencells Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Entry, Intern, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Saarbrücken",
        "location_ar": "Saarbrücken",
        "salary": "Competitive",
        "description": "Übersicht Du möchtest erste praktische Erfahrungen im Finance-Bereich sammeln und dabei tiefere Einblicke in Finanzbuchhaltung und Accounting gewinnen? Dann bist du bei uns genau richtig! In deinem Praktikum arbeitest du eng mit unserem Finance-Team zusammen und unterstützt uns bei vielseitigen Aufgaben rund um Buchhaltung, Abschlüsse und Reporting. Wichtig: Das Praktikum richtet sich ausschließlich an eingeschriebene Studierende, für die ein Praktikum im Rahmen ihres Studiums verpflichtend ist. Die Praktikumsdauer beträgt 3–4 Monate. Ein Start ist ab sofort möglich. Deine Aufgaben Aktive Mitarbeit in zentralen Bereichen der Finanzbuchhaltung Mitwirkung bei der Erstellung von Monats- und Jahresabschlüssen Unterstützung bei Kontenabstimmungen sowie der Pflege von Nebenbüchern Mitarbeit bei der Erstellung von Finanzreports, Datenanalysen und Management-Präsentationen Aktive Beteiligung an bereichsübergreifenden Finance-Projekten, u. a. zu Prozessoptimierung und Digitalisierung Allgemeine administrative Unterstützung im Bereich Finance Dein Profil Laufendes Studium der Betriebswirtschaftslehre, Wirtschaftswissenschaften oder eines vergleichbaren Studiengangs mit Schwerpunkt Finance, Accounting, Controlling oder Tax Interesse an finanzwirtschaftlichen und buchhalterischen Fragestellungen Sicherer Umgang mit MS Office Analytisches Denkvermögen und Zahlenaffinität Hohe Hands-on Mentalität, Selbstständigkeit und Bereitschaft Verantwortung zu übernehmen, Teamfähigkeit Sehr gute Deuts",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Greencells Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Praktikum finanzen",
            "Internship",
            "Traineeship"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/greencells-gmbh/praktikant-finance-saarbrucken-417021",
        "logo": "https://logo.clearbit.com/greencellsgmbh.com",
        "companyLogo": "https://logo.clearbit.com/greencellsgmbh.com",
        "image": "https://logo.clearbit.com/greencellsgmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-41",
        "title": "Team Lead Weiterbildungen AI & Data Science 100% remote (m/w/d)",
        "title_ar": "مدير وقائد فريق (Team Lead Weiterbildungen AI & Data Science 100% remote (m/w/d))",
        "company": "Karrieretutor De",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "100% Remote in Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Deine Rolle bei Karriere Tutor Karriere Tutor steht für moderne, praxisnahe Weiterbildung und Umschulung – und für eine Lernkultur, die Menschen stark macht. Du möchtest mit deinem Know-how und deiner Persönlichkeit etwas bewegen? Dann werde Teil unseres Teams und begleite unsere Teilnehmenden in ihrer persönlichen Entwicklung. So sieht dein Tag bei uns aus: Als Team Lead für Weiterbildungsangebote im Team AI und Data Science AI verantwortest du die Durchführung und inhaltliche Weiterentwicklung unserer Kurse im Team KI und Data Science. Dafür führst du ein Team von Dozierenden, bist zentraler Ansprechpartner für Kursproduktionen und -inhalte für unser Produktmanagement und sorgst mit deinem Team für eine qualitativ hochwertige und didaktisch wertvolle Vermittlung der Inhalte an unsere Teilnehmenden. Du führst und entwickelst dein Team von Dozierenden im Bereich Data & AI und gibst fachliche Orientierung für die Weiterentwicklung der Kurse. Du gibst als Subject Matter Expert wichtigen Input zur Weiterentwicklung des Kursportfolios deines Themenfelds ein, hilfst uns inhaltliche Trends zu erkennen und relevante Weiterbildungsmaßnahmen zu entwickeln. Du beobachtest aktuelle Entwicklungen in den Bereichen Artificial Intelligence, Data Science, Machine Learning und Analytics und leitest daraus relevante Themen, Technologien und Qualifizierungsangebote für unser Portfolio ab. Du stellst die fachliche Qualität unserer Weiterbildungen sicher und entwickelst gemeinsam mit deinem Team ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Karrieretutor De. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Erwachsenenbildung",
            "Indeed",
            "Stepstone",
            "Linkedin"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/karrieretutor-de/team-lead-weiterbildungen-ai-data-science-100-remote-156651",
        "logo": "https://logo.clearbit.com/karrieretutorde.com",
        "companyLogo": "https://logo.clearbit.com/karrieretutorde.com",
        "image": "https://logo.clearbit.com/karrieretutorde.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-42",
        "title": "Freiberufliche Lehrkraft (w/m/d) für Data Analytics",
        "title_ar": "Freiberufliche Lehrkraft (w/m/d) für Data Analytics (برمجة وتكنولوجيا)",
        "company": "Karrieretutor De",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Freelance, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "100% Remote in Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Deine Rolle bei Karriere Tutor Wir suchen engagierte und kompetente freiberufliche Dozierende (m/w/d) für Data Analytics, die den Kurs gemeinsam mit unserem Team im Rahmen von planbaren Einsätzen auf den Markt bringen und ausliefern . Bei Interesse an einem festangestellten Verhältnis verweisen wir auf unsere anderen Stellen. Deine Aufgaben: Bereitstellung von Unterrichtsmaterial für den genannten Kurs. Fachlich fundierte und praxisnahe Vermittlung von Lerninhalten. Kurz- und mittelfristige Übernahme von Lehrveranstaltungen. Betreuung und Unterstützung von Teilnehmenden. Dein Profil Nachweisbare Qualifikation als Data Analyst, Data Scientist oder vergleichbar. Relevante Berufserfahrung in der praktischen Anwendung der Techniken und Methoden eines Data Analyst. Du bringst vorhandenes Unterrichtsmaterial für die Auslieferung der Maßnahme mit oder bist motiviert, dieses eigenständig zu entwickeln. Praxiserfahrung in der Erwachsenenbildung. Freude an der Wissensvermittlung und didaktisches Geschick. Kommunikationsstärke, Empathie, technische Versiertheit. Selbstständige Arbeitsweise und Flexibilität, Sicherer Umgang mit digitalen Tools und Lernplattformen. Deutschkenntnisse (mindestens C1) Wenn wir deine Neugierde geweckt haben und du an einer Kooperation mit uns interessiert bist, freuen wir uns über deine Kontaktaufnahme und Zusendung deines Dozierenden-Profils samt Nachweisen. Find more English Speaking Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Karrieretutor De. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Lehrkraft",
            "Dozentin",
            "Dozent",
            "Freiberuflich"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/karrieretutor-de/remote-freiberufliche-lehrkraft-fur-data-analytics-138889",
        "logo": "https://logo.clearbit.com/karrieretutorde.com",
        "companyLogo": "https://logo.clearbit.com/karrieretutorde.com",
        "image": "https://logo.clearbit.com/karrieretutorde.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-43",
        "title": "Freiberufliche Lehrkraft (w/m/d) für BI Analytics",
        "title_ar": "Freiberufliche Lehrkraft (w/m/d) für BI Analytics (موارد بشرية وإدارة)",
        "company": "Karrieretutor De",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "eu_uk",
        "type": "Experienced, Freelance, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "100% Remote in Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Deine Rolle bei Karriere Tutor Wir suchen engagierte und kompetente freiberufliche Dozierende (m/w/d) für BI Analytics, die den Kurs gemeinsam mit unserem Team im Rahmen von planbaren Einsätzen auf den Markt bringen und ausliefern . Bei Interesse an einem festangestellten Verhältnis verweisen wir auf unsere anderen Stellen. Deine Aufgaben: Bereitstellung von Unterrichtsmaterial für den genannten Kurs. Fachlich fundierte und praxisnahe Vermittlung von Lerninhalten. Kurz- und mittelfristige Übernahme von Lehrveranstaltungen. Betreuung und Unterstützung von Teilnehmenden. Dein Profil Nachweisbare Qualifikation als BI Analyst, Data Analyst oder vergleichbar. Relevante Berufserfahrung in der praktischen Anwendung der Techniken und Methoden eines BI Analyst. Du bringst vorhandenes Unterrichtsmaterial für die Auslieferung der Maßnahme mit oder bist motiviert, dieses eigenständig zu entwickeln. Praxiserfahrung in der Erwachsenenbildung. Freude an der Wissensvermittlung und didaktisches Geschick. Kommunikationsstärke, Empathie, technische Versiertheit. Selbstständige Arbeitsweise und Flexibilität, Sicherer Umgang mit digitalen Tools und Lernplattformen. Deutschkenntnisse (mind. C1) Wenn wir deine Neugierde geweckt haben und du an einer Kooperation mit uns interessiert bist, freuen wir uns über deine Kontaktaufnahme und Zusendung deines Dozierenden-Profils samt Nachweisen. Find Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Karrieretutor De. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Lehrkraft",
            "Dozentin",
            "Dozent",
            "Freiberuflich"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/karrieretutor-de/remote-freiberufliche-lehrkraft-fur-bi-analytics-194166",
        "logo": "https://logo.clearbit.com/karrieretutorde.com",
        "companyLogo": "https://logo.clearbit.com/karrieretutorde.com",
        "image": "https://logo.clearbit.com/karrieretutorde.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-44",
        "title": "Werkstudent (m/w/d) Sanierung & Insolvenz",
        "title_ar": "Werkstudent (m/w/d) Sanierung & Insolvenz (أخرى)",
        "company": "Brl",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Student, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "Es kommt drauf an - wo und mit wem man arbeitet! Teilzeit I 16 Wochenstunden | unbefristet | ab sofort Zum nächstmöglichen Zeitpunkt suchen wir für unseren Standort München Unterstützung durch eine Werkstudentin oder einen Werkstudenten (m/w/d) im Bereich Sanierung und Insolvenz im Umfang von 16 Stunden pro Woche. Ihre Aufgaben Unterstützung bei der Bearbeitung von Insolvenzverfahren Vorbereitung und Nachhalten von Schriftsätzen Übernahme allgemeiner administrativer und organisatorischer Tätigkeiten Ordnungsgemäße Ablage und Verwaltung von Dokumenten Telefonische und schriftliche Kommunikation mit Verfahrensbeteiligten Übernahme weiterer unterstützender Tätigkeiten im Tagesgeschäft Ihr Profil Sie sind an einer Universität eingeschrieben Sie bringen eine hohe Motivation sowie gute Team- und Kommunikationsfähigkeit mit Sie zeigen Eigeninitiative und arbeiten selbstständig und zuverlässig Sie sind offen, wissbegierig und haben Freude daran, sich in neue Themen einzuarbeiten Sie verfügen über einen sicheren Umgang mit MS Office Sie haben sehr gute Deutschkenntnisse in Wort und Schrift Warum wir? Ankommen: Mitarbeit in einem professionellen und hochmotivierten Team sowie Kanzleistrukturen mit flachen Hierarchien und schnellen Entscheidungswegen Flexibilität: Flexible Arbeitszeiten, die sich gut mit Ihrem Studium vereinbaren lassen Kommunikation: Wertschätzende Kommunikation auf Augenhöhe – und Humor darf in unserem Arbeitsalltag natürlich nicht fehlen Teamgeist: Ein tolles Team so",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Brl. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/brl/werkstudent-sanierung-insolvenz-munchen-149003",
        "logo": "https://logo.clearbit.com/brl.com",
        "companyLogo": "https://logo.clearbit.com/brl.com",
        "image": "https://logo.clearbit.com/brl.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-45",
        "title": "Director / Sr Director / Vice President Business Development – US North East (gn)",
        "title_ar": "Director / Sr Director / Vice President Business Development – US North East (gn) (المبيعات والنمو)",
        "company": "Proteros Biostructures Gmbh",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Executive, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Your mission Develop and implement comprehensive business development strategies to expand Proteros' market presence on the East Coast Growing current business, identifying and developing new business opportunities with pharmaceutical and biotech companies, leveraging a deep industry network. Foster and maintain strong relationships with key decision-makers and stakeholders to drive strategic partnerships across stand-alone and integrated businesses. Collaborate with internal teams to ensure alignment with Proteros' goals and objectives, facilitating cross-functional cooperation. Lead high-level negotiations and close deals that drive significant revenue growth. Represent Proteros at major industry events, conferences, and meetings to enhance brand visibility and network with industry leaders. Your profile Minimum of 10 years of business development experience, ideally with 5 years’ expertise in the CRO industry. Proven track record of successful sales and territory management experience within the CRO space. Degree in a life science-related field. Extensive network within the biotech and pharmaceutical industries, with ability to leverage these connections to sign business. Deep understanding of early drug discovery processes, structural biology, proteins, biologics, biophysics, and integrated programs through. Demonstrated success in developing and executing effective business development strategies. Exceptional communication, negotiation, and interpersonal skills. Proven a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Proteros Biostructures Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development",
            "Drug discovery",
            "Structural biology"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/proteros-biostructures-gmbh/director-sr-director-vice-president-business-development-us-north-east-gn-munich-9729",
        "logo": "https://logo.clearbit.com/proterosbiostructuresgmbh.com",
        "companyLogo": "https://logo.clearbit.com/proterosbiostructuresgmbh.com",
        "image": "https://logo.clearbit.com/proterosbiostructuresgmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-46",
        "title": "Werkstudent:in Innovation Management (m/w/d)",
        "title_ar": "Werkstudent:in Innovation Management (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Puschwahlig Workplace Law",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Entry, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Wir suchen Du möchtest die Zukunft der Anwaltsbranche aktiv mitgestalten? Du begeisterst Dich für Innovationen, künstliche Intelligenz und digitale Produkte und möchtest moderne Legal-Tech-Lösungen in einem führenden Arbeitsrechtsumfeld vorantreiben?Dann werde Teil von Pusch Wahlig Workplace Law. In dieser Rolle übernimmst Du Verantwortung für innovative Produkte und Projekte, treibst unsere KI-Strategie voran und gestaltest die digitale Transformation unserer Kanzlei maßgeblich mit. Wir suchen Dich für unser Innovation Team in Berlin als Werkstudent:in Innovation Management (m/w/d) in Teilzeit (20 Wochenstunden) ! Deine Aufgaben Legal Tech und KI in der Praxis erlebbar machen: Du unterstützt bei der Betreuung unserer Legal-Tech-Produkte und begleitest deren erfolgreiche Etablierung im Kanzleialltag. Den Überblick behalten und Transparenz schaffen: Durch die Dokumentation laufender Projekte sowie die Aufbereitung von Fortschritten und Ergebnissen trägst Du zu einer erfolgreichen Projektsteuerung bei. Wissen teilen und Innovation fördern: Ob Copilot Quick Bites, die Koordination von Anfragen oder der Austausch zu KI-Anwendungen – Du unterstützt aktiv dabei, KI-Kompetenzen in der Kanzlei auszubauen. Mit Menschen und Technologien verbinden: Im Austausch mit Kolleg:innen, Mandant:innen und externen Partnern begleitest Du die Einführung digitaler Lösungen und unterstützt bei deren erfolgreicher Nutzung. Die Zukunft mitgestalten: Von der Mitwirkung an unserer KI-Strategie über die ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Puschwahlig Workplace Law. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Innovation",
            "Innovation management",
            "Werkstudium",
            "Deutsch c1"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/puschwahlig-workplace-law/werkstudentin-innovation-management-berlin-325194",
        "logo": "https://logo.clearbit.com/puschwahligworkplacelaw.com",
        "companyLogo": "https://logo.clearbit.com/puschwahligworkplacelaw.com",
        "image": "https://logo.clearbit.com/puschwahligworkplacelaw.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-47",
        "title": "Interim project - Senior DevOps Consultant (f/m/d)",
        "title_ar": "Interim project - Senior DevOps Consultant (f/m/d) (برمجة وتكنولوجيا)",
        "company": "Climate",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Freelance, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin HQ",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Job description We are seeking an experienced Senior DevOps Consultant to support a defined project at our Headquarters in Berlin. The assignment is focused on the set-up and further development of our data management and infrastructure platform. The initial consulting engagement is planned for six months, with the possibility of extending the assignment for a further period, potentially up to 12 months in total, subject to project requirements and mutual agreement. The consultant will provide specialist DevOps and data-platform expertise within the scope of the project. The assignment is structured as an independent consulting engagement, with responsibility for delivering agreed project outcomes and technical solutions. The project supports our Climate Policy Team, which is engaged in various projects on climate change mitigation, in particular on energy system transformation, evaluation of emissions scenarios, the 1.5°C global warming limit and evaluation of national climate action. This includes flagship projects such as the Climate Action Tracker and the National Pathways Explorer, for which data is processed and analysed in-house and then published on the respective project websites. As part of the assignment, the consultant will work on the shared data platform and infrastructure used across the organisation. Our platform is self-hosted on our own hardware and currently runs PostgreSQL, MinIO, GitLab CI/CD and containerised workloads on Linux. The consultant is expecte",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Climate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops",
            "Data platform",
            "Climate",
            "Environment"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/climate/interim-project-senior-devops-consultant-berlin-hq-325249",
        "logo": "https://logo.clearbit.com/climate.com",
        "companyLogo": "https://logo.clearbit.com/climate.com",
        "image": "https://logo.clearbit.com/climate.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-48",
        "title": "Data Engineer (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Data Engineer (f/m/d))",
        "company": "Climate",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Fixed term, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin HQ",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Job description We are currently seeking a Data Engineer for our international and diverse Climate Policy Team (CPT). The team is engaged in various projects on climate change mitigation, in particular on energy system transformation, the 1.5°C global warming limit and the evaluation of national climate action. This includes flagship projects, such as the Climate Action Tracker and the National Pathways Explorer, for which data is being processed and analysed in-house and then published on the respective project websites. As a Data Engineer you will play a critical role in designing, building and maintaining our data infrastructure, ensuring efficient and accurate data processing, storage and retrieval. Your Responsibilities You will help to build and maintain a data platform for advanced analytics and climate modelling, spanning data science and data engineering work. Contribute to the full lifecycle of data platform development from design and deployment to continuous improvement Strengthen data pipelines reliability, observability, and automation through code and tooling improvements. Collaborate with data scientists and researchers to define data processing requirements. Support AI/LLM initiatives across the organisation from a data and infrastructure perspective. Help develop backend data services and APIs that expose curated datasets to internal and external consumers and applications. Monitor, anticipate, and resolve operational or data quality issues in data pipelines",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Climate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data engineer",
            "Nonprofit",
            "Ngo",
            "Climate policy"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/climate/data-engineer-berlin-hq-131549",
        "logo": "https://logo.clearbit.com/climate.com",
        "companyLogo": "https://logo.clearbit.com/climate.com",
        "image": "https://logo.clearbit.com/climate.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-49",
        "title": "Werkstudent (m/w/d) in Sustainable Finance (20 Stunden pro Woche) ab Oktober 2026",
        "title_ar": "Werkstudent (m/w/d) in Sustainable Finance (20 Stunden pro Woche) ab Oktober 2026 (برمجة وتكنولوجيا)",
        "company": "Deutsche Gesellschaft für Nachhaltiges Bauen - DGNB e.V.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Entry, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "Wir bieten Ihnen ein spannendes Arbeitsumfeld mit vielseitigen Aufgabenbereichen: Analysen und Recherchen in Bezug auf Sustainable Finance, Immobilienwirtschaft, Wirtschaftlichkeit bei nachhaltigen Sanierungen, Immobilienbewertung Unterstützung bei der Erstellung von Präsentationen Untersuchung von regulatorischen Anforderungen im Kontext Sustainable Finance und nachhaltiger Gebäude (EPBD, Sustainable Finance Regulatorik) Das bringen Sie mit Sie sind immatrikulierter Student (m/w/d) der Fachrichtung Nachhaltiges Finanzwesen, Banking und Finance, Bank- und Versicherungswirtschaft, Immobilienwirtschaft, Wirtschaftswissenschaften, Nachhaltigkeitsmanagement oder eines vergleichbaren Studiengangs Interesse an den Themen Nachhaltigkeit, Finanzen und Gebäudetransformation Darüber hinaus sind Sie: motiviert, sich neuen Herausforderungen zu stellen in der Lage, sich schnell in neue, komplexe Sachverhalte einzuarbeiten interessiert an den Themen Nachhaltigkeit, Finanzen und Gebäudetransformation sprachlich versiert und Sie verfügen über gute Deutsch- und Englischkenntnisse (mindestens B2) in Wort und Schrift sicher im Umgang mit den gängigen Office-Programmen gut organisiert und Sie schätzen es, selbstständig zu arbeiten Freuen Sie sich auf Sie haben Lust, gemeinsam mit uns die Erfolgsgeschichte des nachhaltigen Bauens weiterzuschreiben und die Transformation aktiv mitzugestalten? Dann sind Sie bei der DGNB genau richtig! Werden Sie Teil unseres vielfältigen, hochmotivierten Teams. Uns",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Deutsche Gesellschaft für Nachhaltiges Bauen - DGNB e.V.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/deutsche-gesellschaft-fur-nachhaltiges-bauen-dgnb-ev/werkstudent-in-sustainable-finance-20-stunden-pro-woche-ab-oktober-2026-stuttgart-249844",
        "logo": "https://logo.clearbit.com/deutschegesellschaftfrnachhaltigesbauendgnbev.com",
        "companyLogo": "https://logo.clearbit.com/deutschegesellschaftfrnachhaltigesbauendgnbev.com",
        "image": "https://logo.clearbit.com/deutschegesellschaftfrnachhaltigesbauendgnbev.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-50",
        "title": "(Senior) B2B Operations Manager (all genders)",
        "title_ar": "مدير وقائد فريق ((Senior) B2B Operations Manager (all genders))",
        "company": "Stapelstein",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Über die Rolle Als B2B Operations Manager entwickelst du die Prozesse, Datenflüsse und Arbeitsweisen unseres B2B-Bereichs. Du nutzt Daten, Automatisierung und KI, um manuelle Arbeit zu reduzieren und Abläufe skalierbar zu machen. So kann sich das Team stärker auf Kunden, Partnerschaften und Wachstum konzentrieren. Unser CRM befindet sich im finalen Aufbau. Du übernimmst die fachliche Verantwortung dafür, wie B2B-Prozesse im CRM abgebildet werden: Du erkennst Engpässe in der Datenpflege und den Workflows, formulierst Anforderungen an Struktur und Automatisierung und setzt neue Abläufe gemeinsam mit den beteiligten Teams um - von der Abbildung von Lead-Qualifizierung und Onboarding über Pricing- und Konditionslogik bis zu Partnerkommunikation und Shop-Prozessen. Deine Aufgaben B2B-Prozesse & Operations (ca. 60%) Du übernimmst 0-to-1-Ownership für unsere B2B-Prozesse, von der Lead-Qualifizierung über das Onboarding bis zur laufenden Partnerbetreuung. Wo heute kein sauberer Ablauf existiert, baust du einen. Du bist die Schnittstelle zu CRM und Automation: Du verstehst die Datenflüsse, erkennst Engpässe und formulierst klare Anforderungen, die Data & AI und IT technisch umsetzen. CRM-Hygiene ist für dich die Grundlage jeder verlässlichen Auswertung. Du verbindest Sales, Supply Chain, Finance und Product zu reibungslosen Abläufen mit klaren Verantwortlichkeiten und treibst bereichsübergreifende Projekte voran. Du definierst und trackst zentrale KPIs (Conversion Rate, Pipeline-Gesch",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Stapelstein. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/stapelstein/remote-senior-b2b-operations-manager-all-genders-401484",
        "logo": "https://logo.clearbit.com/stapelstein.com",
        "companyLogo": "https://logo.clearbit.com/stapelstein.com",
        "image": "https://logo.clearbit.com/stapelstein.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-51",
        "title": "Werkstudent (m/w/d) im Bereich Finanzen & Mitgliederverwaltung",
        "title_ar": "Werkstudent (m/w/d) im Bereich Finanzen & Mitgliederverwaltung (أخرى)",
        "company": "Wirtschaftsrat Der Cdu E V",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Experienced, Temporary, Full or part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bundesgeschäftsstelle (Berlin)",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Ihre Aufgaben Unterstützung in der Debitorenbuchhaltung, im Forderungsmanagement einschließlich Mahnwesen sowie im Kündigungsmanagement; Mitwirkung im laufenden Zahlungsverkehr, bei der Erstellung von Lastschriften sowie bei der Prüfung, Kontierung und Buchung von Geschäftsvorfällen in der Debitorenbuchhaltung; Erstellung und Weiterentwicklung von Analysen und Reportings; Pflege von Stammdaten sowie Unterstützung beim Schnittstellenmanagement in der Mitgliederverwaltung; Übernahme allgemeiner administrativer und organisatorischer Aufgaben im Tagesgeschäft, insbesondere Dokumentenablage und -pflege, Digitalisierung und strukturierte Verwaltung von Unterlagen sowie Unterstützung bei wiederkehrenden Finance-Prozessen. Ihr Profil Sie üben derzeit ein Studium im Bereich BWL, Finanzen, Mathematik, Business Intelligence (BI) aus und / oder sind auf der Suche nach einem Pflichtpraktikum; Erste Berufserfahrungen im Bereich Finanzen, Controlling oder Rechnungswesen wünschenswert; Starke analytische Fähigkeiten und hohe Genauigkeit bei der Datenverarbeitung; Hohes Maß an Selbständigkeit, Eigeninitiative sowie Organisationstalent und eine strukturierte Arbeitsweise; Affinität zu Zahlen und wirtschaftlichen Prozessen; Sehr gute MS-Office Kenntnisse (u.a. Word, Excel), zusätzliche Kenntnisse in Lotus Notes von Vorteil. Warum wir? Wir bieten eine verantwortungsvolle, attraktive und abwechslungsreiche Stelle in einem dynamischen, modernen und leistungsfähigen Team sowie Zugang zu einem große",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Wirtschaftsrat Der Cdu E V. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Wirtschaftsrat",
            "Wirtschaft",
            "Politik",
            "Finanzen"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/wirtschaftsrat-der-cdu-e-v/werkstudent-im-bereich-finanzen-mitgliederverwaltung-bundesgeschaftsstelle-berlin-226677",
        "logo": "https://logo.clearbit.com/wirtschaftsratdercduev.com",
        "companyLogo": "https://logo.clearbit.com/wirtschaftsratdercduev.com",
        "image": "https://logo.clearbit.com/wirtschaftsratdercduev.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-52",
        "title": "Praktikant (m/w/d) im Bereich Wirtschaftspolitik & Organisation",
        "title_ar": "Praktikant (m/w/d) im Bereich Wirtschaftspolitik & Organisation (أخرى)",
        "company": "Wirtschaftsrat Der Cdu E V",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Entry, Intern, Full or part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LGS Bremen (Bremen)",
        "location_ar": "LGS Bremen (Bremen)",
        "salary": "Competitive",
        "description": "Ihre Aufgaben Mitarbeit bei der Planung, Organisation, Durchführung und Nachbereitung unserer exklusiven Veranstaltungen; Schreiben von Berichten / Verfassen von Texten; Unterstützung bei der Presse- und Öffentlichkeitsarbeit; Mithilfe bei Assistenzaufgaben. Ihr Profil Hochschulstudium in Wirtschafts-, Politik- oder Kommunikationswissenschaften oder vergleichbare Ausbildung; Interesse an wirtschaftspolitischen Fragestellungen und politischen Entwicklungen im Landesverband; Großes Organisationsgeschick, ein gutes Ausdrucks- und Kommunikationsvermögen; Sicheres und repräsentatives Auftreten; Hohes Maß an Selbstständigkeit, Engagement und Teamfähigkeit; Sicherer Umgang mit MS Office, Kenntnisse von Lotus Notes sind von Vorteil; Warum wir? Wir bieten eine verantwortungsvolle, attraktive und abwechslungsreiche Stelle in einem dynamischen, modernen und leistungsfähigen Team sowie Zugang zu einem großen Unternehmensnetzwerk. Flache Hierarchien, gutes Betriebsklima, bis zu 30 Urlaubstage. Zudem sind der 24. sowie der 31.12. grundsätzlich arbeitsfreie Tage. Kontakt Wir freuen uns über Ihr Interesse am Wirtschaftsrat der CDU e.V. Bitte füllen Sie das folgende Formular aus. Sollten Sie Schwierigkeiten mit dem Upload Ihrer Daten oder allgemeine Fragen haben, wende Sie sich gerne per E-Mail an: Find more English Speaking Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Wirtschaftsrat Der Cdu E V. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Wirtschaft",
            "Politik",
            "Wirtschaftsrat",
            "Praktikant"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/wirtschaftsrat-der-cdu-e-v/praktikant-im-bereich-wirtschaftspolitik-organisation-lgs-bremen-bremen-485928",
        "logo": "https://logo.clearbit.com/wirtschaftsratdercduev.com",
        "companyLogo": "https://logo.clearbit.com/wirtschaftsratdercduev.com",
        "image": "https://logo.clearbit.com/wirtschaftsratdercduev.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-53",
        "title": "Ausbildung zum Fachinformatiker/-in für Daten- und Prozessanalyse (w/m/d)",
        "title_ar": "Ausbildung zum Fachinformatiker/-in für Daten- und Prozessanalyse (w/m/d) (تصميم وإبداع)",
        "company": "GETEC GRUPPE",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Student, Trainee, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hannover",
        "location_ar": "Hannover",
        "salary": "Competitive",
        "description": "Aufgaben Du lernst Software zu entwickeln und wächst stetig an Chancen und Herausforderungen. Du lernst mit Daten zu jonglieren, indem du mit riesigen Datenbanken arbeitest und deren Daten mit SQL und vielen Analyse­tools auswertest. Du bist mit daran beteiligt, dass durch verschiedene Testverfahren und Maßnahmen zur Qualitäts­sicherung eine hohe Datenqualität erreicht wird. Du analysierst und gestaltest die Prozesse der IT-Abteilung aktiv mit. Du entwickelst neue Methoden, um Daten und Prozesse klar und deutlich darzustellen. Im Rahmen deiner Ausbildung wirst du die Berufsschule MMBbS in Hannover besuchen. Profil (Fach-)Abitur, Realschulabschluss oder vergleichbare schulische Qualifikation. Interesse an IT, Datenanalyse und energiewirtschaftlichen Abläufen. Analytisches Denken und Spaß daran, Probleme zu lösen. Engagement, Lernbereitschaft und Eigeninitiative. Kommunikations- und Teamfähigkeit. Unser Angebot Eine fundierte Ausbildung in einem zukunftsträchtigen IT-Beruf. Praxisnahe Einbindung in echte Projekte ab dem ersten Tag. Moderne Technologien, Tools und Lernumgebung. Unterstützung bei Prüfungen, Workshops und Weiterbildungen. Flexible Arbeitszeiten und attraktive Zusatzleistungen. Sehr gute Übernahmechancen bei guter Leistung. Recruiting Haben wir dein Interesse geweckt? Wenn deine Bewerbung überzeugend ist, laden wir dich zu einem persönlichen Gespräch ein. Teil des Auswahlprozesses ist ein Probearbeitstag, damit du die Möglichkeit hast, einen Einblick in unsere Arbe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GETEC GRUPPE. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ausbildung",
            "Fachinformatiker",
            "Fachinformatikerin",
            "Daten"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/getec-gruppe/ausbildung-zum-fachinformatiker-in-fur-daten-und-prozessanalyse-hannover-139656",
        "logo": "https://logo.clearbit.com/getecgruppe.com",
        "companyLogo": "https://logo.clearbit.com/getecgruppe.com",
        "image": "https://logo.clearbit.com/getecgruppe.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-54",
        "title": "Ausbildung zum Fachinformatiker/-in für Anwendungsentwicklung (w/m/d)",
        "title_ar": "Ausbildung zum Fachinformatiker/-in für Anwendungsentwicklung (w/m/d) (برمجة وتكنولوجيا)",
        "company": "GETEC GRUPPE",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Student, Trainee, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hannover",
        "location_ar": "Hannover",
        "salary": "Competitive",
        "description": "Aufgaben Während deiner Ausbildung besuchst du die Multi Media Berufsschule. Du lernst die Planung und Entwicklung von Softwareanwendungen kennen. Umsetzung von Geschäftsprozessen in Softwareprodukte. Anwendungs- und Kommunikationsdesign. Bei uns erlernst du das Applikationsmanagement. Du bekommst einen Einblick in Wartung und Betrieb von Datenbanken und deren Schnittstellen. Profil Du hast einen guten Sekundarschulabschluss oder (Fach-) Abitur. Begeisterung für Programmierung und Anwendungssysteme. Interesse am Lösen von IT-Herausforderungen. Logisches und analytisches Denken macht dir Spaß. Vorkenntnisse in SQL, PHP, JavaScript, HTML und CSS wünschenswert, jedoch keinesfalls erforderlich. Gute Kenntnisse in Deutsch, Mathe und Englisch. Unser Angebot Eine fundierte Ausbildung in einem zukunftsträchtigen IT-Beruf. Praxisnahe Einbindung in echte Projekte ab dem ersten Tag. Moderne Technologien, Tools und Lernumgebung. Unterstützung bei Prüfungen, Workshops und Weiterbildungen. Flexible Arbeitszeiten und attraktive Zusatzleistungen. Sehr gute Übernahmechancen bei guter Leistung. Recruiting Haben wir dein Interesse geweckt? Wenn deine Bewerbung überzeugend ist, laden wir dich zu einem persönlichen Gespräch ein. Teil des Auswahlprozesses ist ein Probearbeitstag, damit du die Möglichkeit hast, einen Einblick in unsere Arbeitsweise zu gewinnen und zu sehen, ob du dich bei uns wohlfühlst. Team Recruiting +49 (0) 511 121088-642 Find Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GETEC GRUPPE. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ausbildung",
            "Fachinformatiker",
            "Fachinformatikerin",
            "Hannover"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/getec-gruppe/ausbildung-zum-fachinformatiker-in-fur-anwendungsentwicklung-hannover-280940",
        "logo": "https://logo.clearbit.com/getecgruppe.com",
        "companyLogo": "https://logo.clearbit.com/getecgruppe.com",
        "image": "https://logo.clearbit.com/getecgruppe.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-55",
        "title": "Senior Controller (all genders)",
        "title_ar": "Senior Controller (all genders) (مالية ومحاسبة)",
        "company": "Armedangels",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Köln",
        "location_ar": "Köln",
        "salary": "Competitive",
        "description": "Want to make a difference? As Senior Controller (all genders) , you play a key role in the financial steering of ARMEDANGELS. With your strategic perspective on numbers, processes, and business performance, you help ensure that sustainable growth is built on a strong and reliable financial foundation. You take ownership of further developing budgeting, forecasting, and reporting processes, create transparency around financial performance, and support data-driven decision-making across the business. In doing so, you combine financial excellence with our ambition to operate responsibly and with long-term impact in mind. Who we are... Since 2007, ARMEDANGELS has been proving that fashion can be different: innovative and timeless, produced according to responsible standards for people and planet. No wage slavery, no toxic chemicals, no cheap throwaway goods. What started as a simple idea – printing T-shirts and donating proceeds to social projects – has grown into a company that now ranks among Europe’s leading sustainable lifestyle labels. With a 190-strong team and four collections a year, we show that responsibility and great product design can go hand in hand. What is the job about? Strategic Financial Planning & Analysis You lead and further develop our budgeting, forecasting, and financial planning processes, ensuring they are aligned with our business and growth objectives. You analyze financial performance, conduct variance analyses, and derive actionable recommendations ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Armedangels. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Controlling",
            "Looker",
            "Fashionxl",
            "Excel"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/armedangels/senior-controller-all-genders-koln-167249",
        "logo": "https://logo.clearbit.com/armedangels.com",
        "companyLogo": "https://logo.clearbit.com/armedangels.com",
        "image": "https://logo.clearbit.com/armedangels.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789268195-56",
        "title": "Account Executive - Chicago, IL",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive - Chicago, IL)",
        "company": "PadSplit",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The Role That We Need: \n PadSplit is hiring for an Account Executive to expand our marketplace by engaging traditional property owners to become PadSplit Hosts. This role is critical in helping homeowners unlock additional income by listing their properties, while addressing housing affordability by creating more shared housing opportunities in the Chicago, Illinois market. \n The Person We Are Looking For: \n We are seeking a driven and personable Account Executive with experience in sales or real estate who excels at building relationships with property owners and real estate investors. This role involves delivering a tailored value pitch on how the PadSplit model and technology consistently drive superior rental income compared to traditional single-family rentals. The ideal candidate thrives in a remote environment, demonstrates strong communication skills, and wants to have an impact on the affordable housing crisis - one room at a time. \n Here’s what you’ll do day-to-day: \n Prospect and Qualify Leads: Research and identify potential property owners who might be interested in becoming PadSplit Hosts and qualify them based on suitability. \n Conduct Outreach: Execute outreach strategies, including cold calling, emailing, and networking, to connect with traditional property owners. \n Host Discovery Calls and Meetings: Engage property owners in initial conversations to understand their needs, goals, and potential barriers to joining PadSplit. \n Deliver Value Propositions : Cle",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PadSplit. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153133-account-executive-chicago-il",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789268195-57",
        "title": "Account Executive - Denver, CO",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive - Denver, CO)",
        "company": "PadSplit",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The Role That We Need: \n PadSplit is hiring for an Account Executive to expand our marketplace by engaging traditional property owners to become PadSplit Hosts. This role is critical in helping homeowners unlock additional income by listing their properties, while addressing housing affordability by creating more shared housing opportunities in the Denver, CO market. \n The Person We Are Looking For: \n We are seeking a driven and personable Account Executive with experience in sales or real estate who excels at building relationships with property owners and real estate investors. This role involves delivering a tailored value pitch on how the PadSplit model and technology consistently drive superior rental income compared to traditional single-family rentals. The ideal candidate thrives in a remote environment, demonstrates strong communication skills, and wants to have an impact on the affordable housing crisis - one room at a time. \n Here’s what you’ll do day-to-day: \n Prospect and Qualify Leads: Research and identify potential property owners who might be interested in becoming PadSplit Hosts and qualify them based on suitability. \n Conduct Outreach: Execute outreach strategies, including cold calling, emailing, and networking, to connect with traditional property owners. \n Host Discovery Calls and Meetings: Engage property owners in initial conversations to understand their needs, goals, and potential barriers to joining PadSplit. \n Deliver Value Propositions : Clearly ar",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PadSplit. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153137-account-executive-denver-co",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789268195-58",
        "title": "GTM Engineer",
        "title_ar": "مهندس ومطور برمجيات (GTM Engineer)",
        "company": "Boulevard",
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
        "description": "Who is Boulevard? \n Boulevard provides the first and only client experience platform for appointment-based, self-care businesses. We empower our customers to give their clients more of the magical moments that matter most. \n Before launching in 2016, our founders spent months interviewing salon managers and working behind front desks to understand their pain points so we could design a modern, user-friendly platform that meets the unique needs of their business. Our roots may be in hair salons, but we are built for the broader self-care industry, including many types of salons, spas, medspa, barbershops, and more. Our technology not only helps our customers survive but thrive. Take a look at how we (and YOU) can make that happen . \n We have an insatiable curiosity and embrace experimentation. We believe that simple solutions require the most sophistication, and we design each and every detail to maximize potential, power, and impact. Do our values match? Read through our story and what we value the most . \n Our team values and celebrates our diverse backgrounds. Being open about who we are and what we do allows us to do the best work of our lives. We believe in equal opportunity for all, and you should too. \n Come to the best work of your life at Boulevard. \n Own the automation engine that powers Boulevard’s next phase of growth. \n Boulevard is building a high-efficiency, AI-leveraged go-to-market engine as we scale from $50M toward $250M in revenue. As our SDR and AE teams g",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Boulevard. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product & operations"
        ],
        "applyUrl": "https://jobicy.com/jobs/153135-gtm-engineer-2",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/12/a45167e12b0ed51058a884cf9cd0c76f.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/12/a45167e12b0ed51058a884cf9cd0c76f.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/12/a45167e12b0ed51058a884cf9cd0c76f.png",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789268195-59",
        "title": "Account Executive - Boston, MA",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive - Boston, MA)",
        "company": "PadSplit",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The Role That We Need: \n PadSplit is hiring for an Account Executive to expand our marketplace by engaging traditional property owners to become PadSplit Hosts. This role is critical in helping homeowners unlock additional income by listing their properties, while addressing housing affordability by creating more shared housing opportunities in the Boston, MA market. \n The Person We Are Looking For: \n We are seeking a driven and personable Account Executive with experience in sales or real estate who excels at building relationships with property owners and real estate investors. This role involves delivering a tailored value pitch on how the PadSplit model and technology consistently drive superior rental income compared to traditional single-family rentals. The ideal candidate thrives in a remote environment, demonstrates strong communication skills, and wants to have an impact on the affordable housing crisis - one room at a time. \n Here’s what you’ll do day-to-day: \n Prospect and Qualify Leads: Research and identify potential property owners who might be interested in becoming PadSplit Hosts and qualify them based on suitability. \n Conduct Outreach: Execute outreach strategies, including cold calling, emailing, and networking, to connect with traditional property owners. \n Host Discovery Calls and Meetings: Engage property owners in initial conversations to understand their needs, goals, and potential barriers to joining PadSplit. \n Deliver Value Propositions : Clearly ar",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PadSplit. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153128-account-executive-boston-ma",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/06/da525286873130ed0b95212896ef55d4.jpg",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789268195-60",
        "title": "Compliance Engineer",
        "title_ar": "مهندس ومطور برمجيات (Compliance Engineer)",
        "company": "CertiK",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "APAC, Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About the Company \n Born from groundbreaking research at Columbia University and Yale University, CertiK is a leading Web3 security company focused on securing blockchain protocols, smart contracts, and decentralized applications through cutting-edge security research, formal verification, and AI-powered technology. Founded in 2017 and headquartered in New York City, CertiK provides end-to-end security solutions including smart contract audits, penetration testing, on-chain monitoring, incident response, and compliance services for some of the largest projects in the digital asset ecosystem. \n Today, CertiK supports thousands of enterprise clients and Web3 projects globally, with a distributed international team spanning North America, Asia, and Europe. The company is backed by leading investors including Coatue, Goldman Sachs, Insight Partners, and Sequoia Capital, and has been recognized by organizations such as the World Economic Forum and CB Insights for its contributions to blockchain security innovation. \n About You You are a hands-on compliance professional who understands how regulatory frameworks and licensing applications work from initial scoping through final submission readiness. You can turn complex regulations into clear guidance and client deliverables, manage both structured audit requests and fast-changing BD needs, and know when an issue requires escalation to senior Compliance or Legal. \n About the Role You will be the first-line compliance owner for AI ou",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CertiK. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Legal & compliance"
        ],
        "applyUrl": "https://jobicy.com/jobs/153132-compliance-engineer",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "postedAt": "2026-09-13",
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
