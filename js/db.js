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
        "id": "job-1789744726-1",
        "title": "Salesforce Marketing Cloud Consultant Pleno",
        "title_ar": "أخصائي تسويق ونمو (Salesforce Marketing Cloud Consultant Pleno)",
        "company": "Valtech",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Brazil",
        "location_ar": "Brazil",
        "salary": "Competitive",
        "description": "Por que a Valtech ? Somos uma empresa focada em inovação e experiência - um parceiro de confiança para grandes marcas globais. Para quem faz parte da Valtech , oferecemos oportunidades de crescimento, uma cultura guiada por valores, carreira internacional e a chance de definir o futuro das experiências.  Aqui você encontrá um ambiente projetado para aprendizado contínuo, impacto relevante e crescimento profissional. Seja criando novas soluções digitais, desafiando padrões ou construindo a próxima geração de experiências para clientes, seu trabalho contribuirá para a transformação das indústrias. Temos orgulho de:  \n  O trabalho que realizamos e a inovação que promovemos \n  Nossos valores: share, care e dare \n Uma cultura que incentiva criatividade, diversidade e autonomia \n Nosso modelo global sem fronteiras, que permite colaboração integrada e fluida \n   Estamos procurando alguém para se juntar à nossa equipe no escritório de Florianópois, São Paulo ou Remoto na função de Salesforce Marketing Cloud Consultant Pleno . O que estamos procurando: Como Salesforce Marketing Cloud Consultant Pleno, você trabalhará em projetos de implementação, sustentação e/ou operação do Salesforce Marketing Cloud, de forma autônoma ou em colaboração com outros membros da equipe de Automação de Marketing. O foco principal desta posição é manter autonomamente e executar funções administrativas na plataforma Salesforce Marketing Cloud, bem como realizar configurações por meio de seus produtos e recu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Valtech. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing-automation",
            "Crm-consulting"
        ],
        "applyUrl": "https://himalayas.app/companies/valtech/jobs/salesforce-marketing-cloud-consultant-pleno",
        "logo": "https://cdn-images.himalayas.app/gssi889svuqrorrj2723xudxohzg",
        "companyLogo": "https://cdn-images.himalayas.app/gssi889svuqrorrj2723xudxohzg",
        "image": "https://cdn-images.himalayas.app/gssi889svuqrorrj2723xudxohzg",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744726-2",
        "title": "#676 Senior Analytics Specialist",
        "title_ar": "#676 Senior Analytics Specialist (برمجة وتكنولوجيا)",
        "company": "blueworks AG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Temporary",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Colombia",
        "location_ar": "Colombia",
        "salary": "Competitive",
        "description": "BlueCloud is a Snowflake Elite Partner and the 2026 CoCo Catalyst Snowflake Partner of the Year. We help enterprise organizations move from fragmented legacy systems to unified, AI-ready Snowflake platforms — delivering data migration, engineering, governance, BI & analytics, and AI/ML solutions 40–50% faster than traditional approaches. \n With 450+ Snowflake consultants, 200+ enterprise transformations under our belt, and a 100% Snowflake focus, we combine advisory-led thinking with AI-powered accelerators to turn months of work into weeks of results. Our clients span Financial Services, Healthcare & Life Sciences, Retail, Manufacturing, Energy, and more — and the outcomes speak for themselves: 97% faster reports, 40% fraud reduction, $1.5M in client savings, and 10× client growth. \n We don't just strategize — we execute. \n About the Opportunity Our customer is building a modern analytics experience powered by Omni and Snowflake. The immediate need is for a senior analytics specialist who can work directly inside Omni to create polished, intuitive, and visually compelling dashboards from early-stage or minimally developed data. This role requires strong Omni experience, dashboard development expertise, and a strong UI/UX eye within the Omni environment. The focus is not traditional frontend application development, but rather designing and building high-quality analytics experiences inside Omni that are easy to navigate, visually clean, and valuable for business users. The i",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة blueworks AG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Analytics-specialist",
            "Dashboard-development",
            "Business-intelligence",
            "Snowflake-analytics"
        ],
        "applyUrl": "https://himalayas.app/companies/blueworks-ag/jobs/676-senior-analytics-specialist",
        "logo": "https://cdn-images.himalayas.app/5n16nt2xt2y5nrrclv5arorvur06",
        "companyLogo": "https://cdn-images.himalayas.app/5n16nt2xt2y5nrrclv5arorvur06",
        "image": "https://cdn-images.himalayas.app/5n16nt2xt2y5nrrclv5arorvur06",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744726-3",
        "title": "Epic OpTime Systems Analyst",
        "title_ar": "Epic OpTime Systems Analyst (موارد بشرية وإدارة)",
        "company": "Highmark Health",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Company : enGen Job Description : JOB SUMMARY We are seeking a highly motivated and detail-oriented Epic OpTime Analyst to join our combined Epic OpTime and Anesthesia team. The ideal candidate will possess a strong understanding of perioperative workflows and demonstrate experience working with Epic OpTime and/or Anesthesia modules. While Epic OpTime certification is preferred, it is not a requirement at the time of hire. This job is responsible for configuring, rolling out, and supporting the assigned Epic application(s). Responsibilities include business/systems analysis, requirements definition and documentation, system design, and problem resolution. The analyst communicates with system end-users to understand issues and implement solutions. ESSENTIAL RESPONSIBILITIES \n Provide analytical support for the periop departments, leveraging the Epic OpTime module \n Collaborate with clinical staff to understand their needs and translate those needs into effective analytical solutions within Epic OpTime \n Participate in system upgrades, testing, and implementation processes related to Epic OpTime \n Proactively identify opportunities to improve efficiency and effectiveness of perioperative/surgical areas \n Participate in special projects and initiatives as needed \n Plans, designs/builds, tests, implements, and supports the needs of Epic software. \n Analyzes and determines system requirements and specifications. Performs and documents workflow analysis while evaluating user experi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Highmark Health. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Epic-optime-analyst",
            "Healthcare-it-analyst"
        ],
        "applyUrl": "https://himalayas.app/companies/highmark-health/jobs/epic-optime-systems-analyst",
        "logo": "https://cdn-images.himalayas.app/hm0cxl7gpqm79vns491v5oz1s5zz",
        "companyLogo": "https://cdn-images.himalayas.app/hm0cxl7gpqm79vns491v5oz1s5zz",
        "image": "https://cdn-images.himalayas.app/hm0cxl7gpqm79vns491v5oz1s5zz",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744726-4",
        "title": "Senior Software Engineer - PHP",
        "title_ar": "مهندس ومطور برمجيات (Senior Software Engineer - PHP)",
        "company": "Creative Chaos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Pakistan",
        "location_ar": "Pakistan",
        "salary": "Competitive",
        "description": "Job Summary A PHP developer is responsible for writing server-side web application logic. PHP developers usually develop back-end components, connect the application with the other (often third-party) web services, and support the front-end developers by integrating their work with the application. They are also often required to develop and integrate plugins for certain popular frameworks. Responsibilities \n Analyze business requirements \n Estimate assigned tasks \n Write code and unit tests \n Collaborate with other team members \n Tune your code for enhanced security and performance \n Maintain systems by fixing any existing issues \n Update issue tracking software \n Provide status updates \n Communicate with client \n Control versions of your code \n Research new technologies \n Lead a team of software engineers \n Mentor team members through training and guidance \n Upgrade skills and knowledge \n Evaluate candidates for open positions \n Requirements \n Minimum Bachelors in Computer Science/Software Engineering or equivalent. \n Minimum four (4) years of related experience in a professional industry \n Strong knowledge of core PHP, MVC frameworks and Yii \n Strong knowledge of WordPress. \n Should know JQuery, JavaScript, AJAX \n Knowledge and experience in writing backend components and Restful APIs \n Understanding of security standards and compliances \n Experience with different relational and schemaless databases such as MySQL \n Creating a database structure for the required functional",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Creative Chaos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Php-development",
            "Software-engineer",
            "Web-development",
            "Backend-development"
        ],
        "applyUrl": "https://himalayas.app/companies/creative-chaos/jobs/senior-software-engineer-php",
        "logo": "https://cdn-images.himalayas.app/8ed5qmz8a7mcrs8ppsg6lp9fmuwr",
        "companyLogo": "https://cdn-images.himalayas.app/8ed5qmz8a7mcrs8ppsg6lp9fmuwr",
        "image": "https://cdn-images.himalayas.app/8ed5qmz8a7mcrs8ppsg6lp9fmuwr",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744726-5",
        "title": "Senior Client Advocate",
        "title_ar": "Senior Client Advocate (خدمة ودعم العملاء)",
        "company": "Sun Life",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$58,800 - $88,200 USD",
        "description": "Sun Life U.S. is one of the largest providers of employee and government benefits, helping approximately 50 million Americans access the care and coverage they need. Through employers, industry partners and government programs, Sun Life U.S. offers a portfolio of benefits and services, including dental, vision, disability, absence management, life, supplemental health, medical stop-loss insurance, and healthcare navigation. We have more than 6,400 employees and associates in our partner dental practices and operate nationwide. At Sun Life , we're driven by our Purpose: helping our Clients achieve lifetime financial security and live healthier lives. Our values shape how we work: caring, authentic, bold, inspiring, and impactful. When you join Sun Life , you'll work with passionate colleagues and empowering leaders who support your growth and celebrate your contributions, so you can make a meaningful difference in our Clients' lives. Visit our website to discover how Sun Life is making life brighter for our customers, partners and communities. Job Description: The Opportunity: This role supports clients working on Pacific Standard Time In this role, you will be responsible for intake and resolution of group benefit customer (U1000 lives) inquiries, problems and/or service requests. You will act as the primary issue resolution owner and be responsible for resolving any Customer problems or issues. You will take ownership of issues from beginning to end. How You Will Contribute:",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sun Life. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Client-services",
            "Customer-service",
            "Client-advocacy"
        ],
        "applyUrl": "https://himalayas.app/companies/sun-life/jobs/senior-client-advocate",
        "logo": "https://cdn-images.himalayas.app/7x9eyiuaddxqgv6zf7sib5e6v4gx",
        "companyLogo": "https://cdn-images.himalayas.app/7x9eyiuaddxqgv6zf7sib5e6v4gx",
        "image": "https://cdn-images.himalayas.app/7x9eyiuaddxqgv6zf7sib5e6v4gx",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744726-6",
        "title": "Senior Domain Consultant",
        "title_ar": "Senior Domain Consultant (برمجة وتكنولوجيا)",
        "company": "Palo Alto Networks",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Spain",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Our Mission At Palo Alto Networks ®, we’re united by a shared mission—to protect our digital way of life. We thrive at the intersection of innovation and impact, solving real-world problems with cutting-edge technology and bold thinking. Here, everyone has a voice, and every idea counts. If you’re ready to do the most meaningful work of your career alongside people who are just as passionate as you are, you’re in the right place. Who We Are In order to be the cybersecurity partner of choice, we must trailblaze the path and shape the future of our industry. This is something our employees work at each day and is defined by our values: Disruption, Collaboration, Execution, Integrity, and Inclusion. We weave AI into the fabric of everything we do and use it to augment the impact every individual can have. If you are passionate about solving real-world problems and ideating beside the best and the brightest, we invite you to join us! This role is remote, but distance is no barrier to impact. Our hybrid teams collaborate across geographies to solve big problems, stay close to our customers, and grow together. You will be part of a culture that values trust, accountability, and shared success where your work truly matters. Job Description Your CareerYou will join a new and exciting business unit with Palo Alto Networks positioning the industry’s first combined Enterprise Browser and comprehensive SASE security platform, with the industry’s broadest security and compliance coverage ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Palo Alto Networks. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales-engineering",
            "Pre-sales-engineer",
            "Cybersecurity",
            "Enterprise-security"
        ],
        "applyUrl": "https://himalayas.app/companies/palo-alto-networks/jobs/senior-domain-consultant",
        "logo": "https://cdn-images.himalayas.app/fv4n8xx8m9xoz0m3dtbwq3jig0ps",
        "companyLogo": "https://cdn-images.himalayas.app/fv4n8xx8m9xoz0m3dtbwq3jig0ps",
        "image": "https://cdn-images.himalayas.app/fv4n8xx8m9xoz0m3dtbwq3jig0ps",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-7",
        "title": "Project Manager II",
        "title_ar": "مدير وقائد فريق (Project Manager II)",
        "company": "Olsson",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Company Description \n We are Olsson . We engineer and design solutions that improve the world around us. As a company, we promise to always be responsive, transparent, and focused on results – for our people, our clients, and our company. \n We’re a people-centric firm, so it’s no surprise our greatest asset is our people. The impact this creates is an environment that encourages our people to grow and be creative with their talents. This approach builds a culture that is uniquely Olsson . It allows us to grow our people as we grow our business. This, in turn, creates a lasting impact on the world around us. \n Job Description Join Olsson 's Industrial Environmental team as a Project Manager II and be part of creating innovative solutions that drive positive changes in communities. In this role, you will apply diversified knowledge of engineering principles and practices to a broad variety of assignments and related fields. The project manager II role oversees project deliverables and completion for small-to-mid-sized projects within a single discipline or defined area, low-risk multidisciplinary projects for the team, or in support of a larger project management team. This position is involved in the full project life cycle and is responsible for ensuring timely completion of projects in accordance with established scope, schedule, and budget. This role leads the successful delivery of projects that provide purposeful, high-quality solutions to successfully solve engineering a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Olsson. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Environmental-science"
        ],
        "applyUrl": "https://himalayas.app/companies/olsson-com/jobs/project-manager-ii-7672416424",
        "logo": "https://logo.clearbit.com/olsson.com",
        "companyLogo": "https://logo.clearbit.com/olsson.com",
        "image": "https://logo.clearbit.com/olsson.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-8",
        "title": "Senior External Advisor – Europe-(CEPT)",
        "title_ar": "Senior External Advisor – Europe-(CEPT) (برمجة وتكنولوجيا)",
        "company": "Access Partnership",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Austria, Belgium, Bulgaria",
        "location_ar": "Austria, Belgium, Bulgaria",
        "salary": "Competitive",
        "description": "Access Partnership makes innovative technology work for the world. Complex problems don't sit in silos and neither do we. Delivering frontier innovation into market takes a team of specialists that get you from concept to diffusion. Our architects of innovation - from strategists, economists, engineers, physicians to lawyers - work as one team to deliver technology into market for the benefit of society. We guide businesses and governments through complex regulatory challenges, shaping regulations and policy get market access for innovative companies.Our clients drive growth, and attract investment into national markets. The firm’s roster of world-leading clients includes the largest technology and innovation companies, major government bodies, and multilateral lenders and development organisations. Space & Connectivity Practice Our world-class Space & Connectivity Practice engages with governments, regulators, and international organisations to support the development of satellite and telecommunications policy frameworks. We advise clients on regulatory strategy, market access, and engagement across national, regional, and global fora. We are seeking a Senior External Advisor with deep regional experience across Europe and strong knowledge of ITU processes, including World Radiocommunication Conferences (WRCs), ITU-R working groups, and European preparatory processes The ideal candidate will bring extensive regional knowledge, strong relationships with regulators and policym",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Access Partnership. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Spectrum-management",
            "Regulatory-affairs",
            "Space-and-connectivity"
        ],
        "applyUrl": "https://himalayas.app/companies/access-partnership/jobs/senior-external-advisor-europe-cept-9849528666",
        "logo": "https://cdn-images.himalayas.app/igycru5zb71vhoaaqbd1mrgltuux",
        "companyLogo": "https://cdn-images.himalayas.app/igycru5zb71vhoaaqbd1mrgltuux",
        "image": "https://cdn-images.himalayas.app/igycru5zb71vhoaaqbd1mrgltuux",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-9",
        "title": "Sales Associate",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Associate)",
        "company": "Voltus",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$55,000 - $94,000 USD",
        "description": "The Company \n Voltus is the leading platform connecting distributed energy resources to electricity markets, delivering less expensive, more reliable, and more sustainable electricity. Our commercial and industrial customers and grid services partners generate cash by allowing Voltus to maximize the value of their flexible load, distributed generation, energy storage, energy efficiency, and electric vehicle resources in these markets. The Role ** Please note we are hiring for this position on an ongoing and rolling basis. Submit your application to be considered for the next available opening!** \n The Sales Associate is the rocket fuel that drives our sales organization. Sales Associates join our Sales Associate Development program where they learn to cold call prospective customers, promote Voltus ’s value proposition, and work hand-in-hand with our Sales Directors to set up meetings and close deals that bring more cash to customers and better energy for the world. Our product - developed to help solve the greatest problem of our time, the climate crisis - is tested and proven, and we have moved from startup to significant (and rapid) growth stage. We look for self-starters who love to win, are inspired by innovation and who embody our Bright, Gritty, Good philosophy. If you love to sell, if working with industry-leading energy technology sparks your passion, if you are eager to learn and develop, and if you want your work to make a difference to our planet, we’d love you to",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Voltus. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Inside-sales",
            "Business-development"
        ],
        "applyUrl": "https://himalayas.app/companies/voltus/jobs/sales-associate-8221923315",
        "logo": "https://cdn-images.himalayas.app/9kq7lbpqa0dubfzhkyg25i9pgxd2",
        "companyLogo": "https://cdn-images.himalayas.app/9kq7lbpqa0dubfzhkyg25i9pgxd2",
        "image": "https://cdn-images.himalayas.app/9kq7lbpqa0dubfzhkyg25i9pgxd2",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-10",
        "title": "Principal Solution Architect, SAP BRIM & Financial Platforms (Remote, US)",
        "title_ar": "Principal Solution Architect, SAP BRIM & Financial Platforms (Remote, US) (برمجة وتكنولوجيا)",
        "company": "CenturyLink",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$152,066 - $223,031 USD",
        "description": "Lumen is the trusted network for the AI‑powered world, connecting people, data, and applications through our expansive fiber network and connected ecosystem. We enable secure, high‑performance connectivity across cloud, edge, and AI workloads for enterprises, governments, and communities. At Lumen, you’ll work on infrastructure customers rely on today and build for what’s next, where performance, security, and resilience matter. This is a high accountability environment where bold ideas drive real innovation for our customers, partners, and industry. The work is challenging, expectations are clear, and trust is built into how we operate. If you’re ready to take ownership, deliver meaningful impact, and help shape the future of AI‑ready connectivity, join us today. \n The Role \n Lumen is seeking a Principal Solution Architect to provide strategic and technical leadership across SAP BRIM, SAP S/4HANA, and enterprise financial platforms supporting billing, invoicing, accounts receivable, payments, collections, cash application, and cash accounting. This role will define the target-state architecture, integration strategy, and technology roadmap that enables scalable, secure, and resilient customer financial operations across multiple business segments. \n As a trusted technology leader, you will partner with business and IT stakeholders to drive modernization, automation, architectural governance, and digital transformation initiatives. The ideal candidate brings deep expertise in",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CenturyLink. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Solutions-architect",
            "Sap-architecture",
            "Enterprise-architecture",
            "Sap-brim"
        ],
        "applyUrl": "https://himalayas.app/companies/centurylink/jobs/principal-solution-architect-sap-brim-financial-platforms-remote-us",
        "logo": "https://cdn-images.himalayas.app/osqrrufwljt595myhntnoip8puic",
        "companyLogo": "https://cdn-images.himalayas.app/osqrrufwljt595myhntnoip8puic",
        "image": "https://cdn-images.himalayas.app/osqrrufwljt595myhntnoip8puic",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-11",
        "title": "Senior UI UX Designer (5+ years)",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Senior UI UX Designer (5+ years))",
        "company": "Docsumo",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "About Docsumo : \n Docsumo is your go-to Document AI solution for streamlining business operations. We turn complex documents like bank statements, policies, and financial statements into valuable, actionable data. Our cutting-edge technology helps businesses make smarter decisions faster. We are backed by marquee investors such as Sequoia, Barclays, Fifth Wall, Common Ocean, and Techstars. At Docsumo , we're on a mission to revolutionize how businesses handle data. We empower companies to: - Boost efficiency by 6-10 times. - Make quick, accurate decisions from unstructured information. - Scale operations effortlessly through innovative technology Key Responsibilities: \n AI-first designer who creates working prototypes using Claude / Bolt. \n Gather and evaluate user requirements in collaboration with product managers and engineers. Conduct layout adjustments based on user feedback. \n Illustrate design ideas using storyboards, process flows and sitemaps. \n Design graphic user interface elements, like menus, tabs, widgets and build page navigation buttons and search fields. \n Develop UI mockups and prototypes that clearly illustrate how sites function and look like. \n Create original graphic designs (e.g. images, sketches and tables) \n Prepare and present rough drafts to internal teams and key stakeholders \n Identify and troubleshoot UX problems (e.g. responsiveness) \n Conduct UX research (both primary & secondary) to understand usability, user preferences \n Advocate user perspe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Docsumo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ui-ux-designer",
            "Product-design",
            "Ux-design",
            "User-interface-design"
        ],
        "applyUrl": "https://himalayas.app/companies/docsumo/jobs/senior-ui-ux-designer-5-years-6389912888",
        "logo": "https://cdn-images.himalayas.app/6qd0zt7rzpyrrngw3f8iyofb6jz2",
        "companyLogo": "https://cdn-images.himalayas.app/6qd0zt7rzpyrrngw3f8iyofb6jz2",
        "image": "https://cdn-images.himalayas.app/6qd0zt7rzpyrrngw3f8iyofb6jz2",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-12",
        "title": "Technical Eligibility Analyst - LHB",
        "title_ar": "Technical Eligibility Analyst - LHB (برمجة وتكنولوجيا)",
        "company": "Health Care Service Corporation",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$18.07 - $33.92 USD",
        "description": "At Luminare Health, our people are what set us apart. Their expertise, dedication, and passion for service excellence are the foundation of our success. We're committed to helping our employees grow through thoughtful development opportunities, meaningful work, and a culture that values collaboration and continuous improvement. When you join Luminare Health, you join a purpose-driven team focused on making healthcare simpler, better, and more affordable. Job Summary This position includes a variety of technical tasks that support the Eligibility Department. The responsibilities of a Technical Eligibility Analyst may vary depending upon the needs of the Department and may include loading Triple E files and manual eligibility updates. In addition to these tasks, the Technical Eligibility Analyst is responsible for all of the same tasks as an Eligibility Analyst, including providing quality service by timely and accurately entering and/or modifying eligibility data in Luminare Health systems according to established procedure and client requirements. This position is also responsible for responding to telephone, written and electronic inquiries from employees/members, clients and co-workers. Required Job Qualifications: \n High School diploma or GED equivalent \n Minimum three years Eligibility experience \n Ability to work in a fast-paced, customer service and production driven environment \n Exceptional data entry skills with high attention to detail \n Excellent verbal and written",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Health Care Service Corporation. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Eligibility-assessment",
            "Data-entry",
            "Technical-support"
        ],
        "applyUrl": "https://himalayas.app/companies/health-care-service-corporation/jobs/technical-eligibility-analyst-lhb-5346651251",
        "logo": "https://cdn-images.himalayas.app/cj6oju7tz2azr9sg41smgzojw9vq",
        "companyLogo": "https://cdn-images.himalayas.app/cj6oju7tz2azr9sg41smgzojw9vq",
        "image": "https://cdn-images.himalayas.app/cj6oju7tz2azr9sg41smgzojw9vq",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-13",
        "title": "1099 Sales Performance Consultants",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (1099 Sales Performance Consultants)",
        "company": "Performance Development Group",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "About PDG Performance Development Group (PDG) is an award-winning, global leader helping Life Sciences companies improve business results through improving sales performance. Recognized as a premier company in our field, we provide collaborative advisory services and innovative sales performance solutions that help our clients to exceed their business goals. Here at PDG, we complement our learning and creative teams with professional consultants who help us to scale effortlessly, optimize creativity and deliver award-winning learning programs. Our network of consultants loves to work with us and here are some of the reasons why they find a relationship with PDG to be so valuable to them: \n Variety is the spice of life: PDG’s wide variety of learning projects allows you to be a part of the design and development of award-winning programs that help to move the needle on employee performance while enhancing your experience and skills \n We enable you to \"stay in your lane\": We have a superstar team of salespeople who work with some of the most exciting companies in the world. We handle all the business development, scoping, and proposal writing so you can focus on doing what you enjoy doing the most. \n The devil is in the details: We contract with the clients and handle all the logistics, absorbing the risk so you don’t have to worry about a thing. We also provide a wide array of tools and templates to make gigs easier for you while you work with us. Our team will make sure that ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Performance Development Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales-consultant",
            "Performance-consultant",
            "Management-consulting",
            "Sales-training"
        ],
        "applyUrl": "https://himalayas.app/companies/performance-development-group/jobs/1099-sales-performance-consultants-5338020720",
        "logo": "https://cdn-images.himalayas.app/xop98e9m3p03qrd0v03zmmmfvojy",
        "companyLogo": "https://cdn-images.himalayas.app/xop98e9m3p03qrd0v03zmmmfvojy",
        "image": "https://cdn-images.himalayas.app/xop98e9m3p03qrd0v03zmmmfvojy",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-14",
        "title": "Software Sales Specialist, Azul Prime - North America",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Software Sales Specialist, Azul Prime - North America)",
        "company": "Azul",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "We are seeking a motivated and results-driven Prime Sales Specialist to help grow our Platform Prime customer base and increase revenue. The Prime Sales Specialist will play a pivotal role in driving North America sales through a mix of new Platform Prime customer acquisition and cross-selling into existing Platform Core clients. You will work closely with the sales and technical teams to communicate the value of Azul ’s solutions to both technical and business stakeholders. This is an individual-contributor, quota-carrying role that can be based remotely in the US. What You’ll Do (aka Responsibilities): \n Sales Strategy & Execution: Develop and implement strategies to generate new Prime business opportunities and achieve sales targets within assigned territories/accounts. \n Client Engagement: Actively engage with existing Platform Core customers to understand their unique challenges and business needs, providing Azul solutions. \n Sales Pipeline Management: Manage the entire sales cycle, from lead generation to close. Maintain a robust pipeline of opportunities and forecast accurately. Build a 3X pipeline. \n Cross-functional Collaboration: Work closely with Sales Engineers, Marketing, and Customer Success teams to ensure prospects receive comprehensive, clear, and accurate product demonstrations, proposals, and support. \n Negotiation & Closing: Drive contract negotiations, while consistently closing business on a monthly and quarterly basis. \n Reporting: Maintain accurate rec",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Azul. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-sales",
            "Enterprise-sales",
            "Saas-sales",
            "Technical-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/azul/jobs/software-sales-specialist-azul-prime-north-america",
        "logo": "https://cdn-images.himalayas.app/xwbqq4mbsbznpufhy82lzja56ptu",
        "companyLogo": "https://cdn-images.himalayas.app/xwbqq4mbsbznpufhy82lzja56ptu",
        "image": "https://cdn-images.himalayas.app/xwbqq4mbsbznpufhy82lzja56ptu",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-15",
        "title": "Looking for QA Testers in Czechia",
        "title_ar": "Looking for QA Testers in Czechia (برمجة وتكنولوجيا)",
        "company": "Tester Work",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Czechia",
        "location_ar": "Czechia",
        "salary": "Competitive",
        "description": "Tester Work provides access to exciting and rewarding project-based opportunities for freelancers. Learn new skills and earn money by testing world-class apps and websites. 🌎 For this specific project, we are looking for QA testers and tech-enthusiasts in Czechia! Having joined our community, you will then have regular access to a range of other projects, with unique requirements and workflows: \n Test Case Executions: Perform a set of flows using specific instructions and compare the results observed with the expected/intended results provided; \n Functional Exploratory Test Cases: Explore the application or website’s functionality based on your experience and background in testing; \n Usability Test Cycles: Completing surveys or taking part in interviews to look into your preferences and opinions regarding different types of applications for our customers. Questionnaires investigate how you use specific apps, how much time you spend on them, and what you like and dislike about particular features and products. \n Payments are transferred within a maximum of two weeks of project completion, via PayPal or Upwork. Don’t miss out on this exciting opportunity to develop new skills and earn good money on a schedule that suits you!﻿ Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tester Work. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Qa-testing",
            "Software-testing",
            "Freelance-qa",
            "Usability-testing"
        ],
        "applyUrl": "https://himalayas.app/companies/tester-work/jobs/looking-for-qa-testers-in-czechia",
        "logo": "https://cdn-images.himalayas.app/cogadmr07addpt3swqdtc4ecdzp2",
        "companyLogo": "https://cdn-images.himalayas.app/cogadmr07addpt3swqdtc4ecdzp2",
        "image": "https://cdn-images.himalayas.app/cogadmr07addpt3swqdtc4ecdzp2",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-16",
        "title": "Regional Sales Director - MWI",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Regional Sales Director - MWI)",
        "company": "AmerisourceBergen",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Seychelles",
        "location_ar": "Seychelles",
        "salary": "Competitive",
        "description": "Our team members are at the heart of everything we do. At Cencora, we are united in our responsibility to create healthier futures, and every person here is essential to us being able to deliver on that purpose. If you want to make a difference at the center of health, come join our innovative company and help us improve the lives of people and animals everywhere. Apply today! Job Details This role is in support of Cencora's veterinary and livestock production solutions marketed through our MWI Animal Health business. MWI Animal Health is a leading brand of Cencora, offering animal health services globally. Primary Duties And Responsibilities \n Develop and lead regional field sales force. \n Set goals and objectives for regional support roles. \n Work with Territory Managers (TM’s) to identify sales needs (e.g., tools, marketing programs, information needs, etc.) and to maintain current perspective on the market environment and competitive activity. \n Work with key customers and/or buying groups to ensure customer satisfaction and to identify future opportunities. \n Establish and implement systematic process for gathering, tracking and disseminating competitive activity from the field. \n Handle day-to-day customer complaints, customer service issues, etc. \n Develop yearly and monthly sales budgets, monitor performance of field sales team, and react to all risks and opportunities. \n Measure and monitor results against assigned key vendor budgets to ensure move-out objectives are",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة AmerisourceBergen. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Regional-sales-director",
            "Sales-management",
            "Field-sales-director",
            "Territory-management"
        ],
        "applyUrl": "https://himalayas.app/companies/amerisourcebergen/jobs/regional-sales-director-mwi",
        "logo": "https://cdn-images.himalayas.app/aq2w4r9cfozdwlhf6xnk1q4y5bmq",
        "companyLogo": "https://cdn-images.himalayas.app/aq2w4r9cfozdwlhf6xnk1q4y5bmq",
        "image": "https://cdn-images.himalayas.app/aq2w4r9cfozdwlhf6xnk1q4y5bmq",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744727-17",
        "title": "Remote People Operations Coordinator for Mental Health Care",
        "title_ar": "Remote People Operations Coordinator for Mental Health Care (موارد بشرية وإدارة)",
        "company": "Pearl Talent",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines",
        "location_ar": "Philippines",
        "salary": "Competitive",
        "description": "Work From Anywhere in LATAM or the Philippines About Pearl Talent \n Pearl works with the top 1% of candidates from around the world and connects them with the best startups in the US and EU. Our clients have raised over $5B in aggregate and are backed by companies like OpenAI, a16z, and Founders Fund. Hear why we exist, what we believe in, and who we're building for: Watch here About the Client A fast-growing US mental health practice is building out its people operations function. It is looking for a People Operations Coordinator to support its clinical workforce with onboarding, compliance tracking, and day-to-day HR questions. The practice has grown to more than 100 employees, most of them licensed clinicians, since telehealth became widely reimbursed by insurers. It is now preparing to expand into several new US states, and each state has its own licensing, credentialing, and insurance rules. About the Role You will be the first point of contact for clinicians and staff on PTO, payroll, benefits, and onboarding questions. You will send detailed payroll and benefits issues to the specialist teams that handle them. You will also coordinate clinician onboarding across states, build state-specific onboarding checklists, track compliance steps such as fingerprinting and payer credentialing, and join second-round interviews for senior operations hires. Success means clinicians get fast, clear answers, and each new state opens with an onboarding process that works from day one. ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Pearl Talent. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Hr-coordinator",
            "Hr-operations",
            "Human-resources"
        ],
        "applyUrl": "https://himalayas.app/companies/pearl-talent/jobs/remote-people-operations-coordinator-for-mental-health-care",
        "logo": "https://cdn-images.himalayas.app/huj37jpex1vjhye17h53sdypw8ol",
        "companyLogo": "https://cdn-images.himalayas.app/huj37jpex1vjhye17h53sdypw8ol",
        "image": "https://cdn-images.himalayas.app/huj37jpex1vjhye17h53sdypw8ol",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744728-18",
        "title": "Major Account Manager",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Major Account Manager)",
        "company": "Palo Alto Networks",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$268,400 - $368,975 USD",
        "description": "Our Mission At Palo Alto Networks ®, we’re united by a shared mission—to protect our digital way of life. We thrive at the intersection of innovation and impact, solving real-world problems with cutting-edge technology and bold thinking. Here, everyone has a voice, and every idea counts. If you’re ready to do the most meaningful work of your career alongside people who are just as passionate as you are, you’re in the right place. Who We Are In order to be the cybersecurity partner of choice, we must trailblaze the path and shape the future of our industry. This is something our employees work at each day and is defined by our values: Disruption, Collaboration, Execution, Integrity, and Inclusion. We weave AI into the fabric of everything we do and use it to augment the impact every individual can have. If you are passionate about solving real-world problems and ideating beside the best and the brightest, we invite you to join us! This role is remote, but distance is no barrier to impact. Our hybrid teams collaborate across geographies to solve big problems, stay close to our customers, and grow together. You will be part of a culture that values trust, accountability, and shared success where your work truly matters. Job Summary Your Career The Major Account Manager partners with our customers to secure their entire digital experience. You’re motivated by the desire to solve critical challenges facing our customer’s secure environment, so you’re prepared to connect them with ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Palo Alto Networks. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Major-account-manager",
            "Enterprise-sales",
            "Account-management",
            "B2b-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/palo-alto-networks/jobs/major-account-manager-6591969685",
        "logo": "https://cdn-images.himalayas.app/fv4n8xx8m9xoz0m3dtbwq3jig0ps",
        "companyLogo": "https://cdn-images.himalayas.app/fv4n8xx8m9xoz0m3dtbwq3jig0ps",
        "image": "https://cdn-images.himalayas.app/fv4n8xx8m9xoz0m3dtbwq3jig0ps",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744728-19",
        "title": "Psychiatric Nurse Practitioner - 100% Remote - Oregon - Contract",
        "title_ar": "Psychiatric Nurse Practitioner - 100% Remote - Oregon - Contract (أخرى)",
        "company": "WellPsyche Medical Group",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$74 - $125 USD",
        "description": "A WellPsyche Medical Group relationship gives you the tools and staff you need to fuel your success. We are a physician-run leader in Telepsychiatry providing quality therapy and psychiatric services for children, adolescents, and adults striving to achieve mental health and wellness and reach their full potential. As an Independent Consultant, you guide your patients through the tough challenges inherent in today’s rapidly changing world. As a practicing Psychiatric Nurse Practitioner , our business model provides every clinician with structured administrative support utilizing a best-in-class patient management system and highly trained administrative staff. Our platform and ongoing business tools and resources and patient referrals help support your practice and meet your patients' unique needs. Our team is part of a collaborative, flexible work culture, which fosters an environment built on respect, trust, love, and a shared passion for quality patient care. About the Role \n Your primary responsibility is to support patients with compassionate care \n You will conduct assessments of their current mental state \n Develop a treatment plan that helps them improve \n Maintain accurate and prompt patient documentation \n Refer patients for psychiatry services when appropriate \n Collaborate with the executive team to create positive patient experiences and outcomes. \n About You \n You genuinely care about your patients and their well-being \n You operate with integrity \n You are pass",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة WellPsyche Medical Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Nurse-practitioner",
            "Mental-health",
            "Healthcare"
        ],
        "applyUrl": "https://himalayas.app/companies/wellpsyche-medical-group/jobs/psychiatric-nurse-practitioner-100-remote-oregon-contract-4400279026",
        "logo": "https://cdn-images.himalayas.app/l47iphqo17krkcwnhb62l7i95vdj",
        "companyLogo": "https://cdn-images.himalayas.app/l47iphqo17krkcwnhb62l7i95vdj",
        "image": "https://cdn-images.himalayas.app/l47iphqo17krkcwnhb62l7i95vdj",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744728-20",
        "title": "Software Developer [2638-244499]",
        "title_ar": "مهندس ومطور برمجيات (Software Developer [2638-244499])",
        "company": "LevelUp",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines",
        "location_ar": "Philippines",
        "salary": "$60,000 - $100,000 PHP",
        "description": "Company Overview \n LevelUp is a specialist agency providing outsourcing solutions to agencies, software vendors, and website owners. For over seven years, we have successfully collaborated with a variety of companies, providing valuable technical, operational, and back-office support. We have a large team of skilled and passionate professionals who are committed to delivering high-quality work for our clients. Position Overview We are seeking a mid-level Software Developer (often referred to as a Next.js Developer) with 3 to 5 years of commercial production experience to join our team. In this role, you will not just be working through a rigid ticket queue—you will have real end-to-end ownership of systems, make critical technical decisions, and see them through. You will collaborate directly with our Head of Operations, our Product Lead, and our Founder/CEO to translate delivery requirements and rough designs into beautiful, functional, and secure web applications. This is a full-time, remote position based in the Philippines, working with our team in Brisbane, Australia. Your working hours will align with the Australian Eastern Standard Time (AEST) shift (9:00 AM – 5:00 PM), allowing for close daily collaboration while enjoying the flexibility that an asynchronous-first working style provides. Reference: 2638-244499 Responsibilities \n Application Development: Design, build, and ship robust, high-quality web applications using Next.js and modern JavaScript, ensuring clean CS",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة LevelUp. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-development",
            "Fullstack-development",
            "Web-development",
            "Frontend-development"
        ],
        "applyUrl": "https://himalayas.app/companies/levelup/jobs/software-developer-2638-244499",
        "logo": "https://cdn-images.himalayas.app/65hauqqnz557k3cdxccp946a9ret",
        "companyLogo": "https://cdn-images.himalayas.app/65hauqqnz557k3cdxccp946a9ret",
        "image": "https://cdn-images.himalayas.app/65hauqqnz557k3cdxccp946a9ret",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789744728-21",
        "title": "Senior Data Scientist",
        "title_ar": "Senior Data Scientist (برمجة وتكنولوجيا)",
        "company": "Lemon.io",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "full_time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Northern America, LATAM, Europe, APAC",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Are you a talented Senior Data Scientist looking for a remote job that lets you show your skills and get decent compensation? Look no further than Lemon.io — the marketplace that connects you with hand-picked startups in the US and Europe. \n What we offer: \n The rate depends on your skills and experience. We've already paid out over $11M to our engineers. \n No more hunting for clients or negotiating rates — let us handle the business side of things so you can focus on what you do best. \n We'll manually find the best project for you according to your skills and preferences. \n Choose a schedule that works best for you. It’s possible to communicate async or minimally overlap within team working hours. \n We respect your seniority so you can expect no micromanagement or screen trackers. \n Most of our projects involve working in a fast-paced startup environment. We hope you like it as much as we do. \n Requirements — Data Scientist: \n 4+ years of commercial experience as a Data Scientist \n 3+ years of commercial experience with Python is a must \n 3+ years of commercial experience with Databricks \n Experience with RAG and LLM is a must \n Strong technical skills: as a Senior Data Scientist, you are expected to be able to create projects from scratch and have a deep understanding of application architecture. \n Clear and effective communication in English — advanced ability to discuss business tasks, justify decisions, and communicate issues. Good self-presentation is also essential for",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon.io. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data and analytics"
        ],
        "applyUrl": "https://remotive.com/remote-jobs/data/senior-data-scientist-2091129",
        "logo": "https://remotive.com/job/2091129/logo",
        "companyLogo": "https://remotive.com/job/2091129/logo",
        "image": "https://remotive.com/job/2091129/logo",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-22",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-23",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-24",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-25",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-26",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-27",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-28",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-29",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-30",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-31",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-32",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-33",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-34",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-35",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-36",
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
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789744728-37",
        "title": "Masseur / Physiotherapeuth (m/w/d) - Deimann Spa",
        "title_ar": "Masseur / Physiotherapeuth (m/w/d) - Deimann Spa (أخرى)",
        "company": "Hotel Deimann",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Schmallenberg",
        "location_ar": "Schmallenberg",
        "salary": "Competitive",
        "description": "Wenn ein Gast nach einer Behandlung tiefenentspannt den Deimann Spa verlässt, ist genau das der Moment, in dem Ihre Arbeit spürbar wird. Mit fachlichem Können, Ruhe und einem sicheren Gespür für die individuellen Bedürfnisse unserer Gäste machen Sie aus einer Massage oder Wellnessanwendung eine wertvolle Auszeit. \n Im Deimann Spa, dem Wellnessbereich unseres 5-Sterne-Superior-Hotels im Sauerland, verbinden wir professionelle Anwendungen mit herzlicher persönlicher Betreuung. Sie arbeiten in einem hochwertigen Umfeld, in dem Qualität nicht nur bei der Behandlung zählt, sondern auch in jedem Kontakt mit unseren Gästen. \n Aufgaben \n Führen Sie klassische und wellnessorientierte Massageanwendungen professionell und mit einem sicheren Gespür für die individuellen Bedürfnisse unserer Gäste durch. \n Setzen Sie Ihr fachliches Wissen bei physiotherapeutischen Anwendungen ein, sofern diese Ihrer Qualifikation entsprechen, und begleiten Sie unsere Gäste verantwortungsvoll auf ihrem Weg zu mehr Wohlbefinden. \n Beraten Sie unsere Gäste individuell zu passenden Massage- und Wellnessanwendungen und finden Sie gemeinsam mit ihnen die Behandlung, die zu ihren persönlichen Bedürfnissen passt. \n Erkennen Sie im Rahmen Ihrer fachlichen Qualifikation die individuellen Bedürfnisse unserer Gäste und stimmen Sie Ihre Behandlung entsprechend darauf ab. \n Betreuen Sie unsere Gäste während ihres gesamten Aufenthalts im Deimann Spa aufmerksam, herzlich und professionell. \n Bereiten Sie die Behandlungsrä",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Hotel Deimann. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Beauty",
            "Wellness"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hotel-deimann/masseur-physiotherapeuth-deimann-spa-schmallenberg-458104",
        "logo": "https://logo.clearbit.com/hoteldeimann.com",
        "companyLogo": "https://logo.clearbit.com/hoteldeimann.com",
        "image": "https://logo.clearbit.com/hoteldeimann.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-38",
        "title": "EDI Developer/ Technical Lead",
        "title_ar": "مهندس ومطور برمجيات (EDI Developer/ Technical Lead)",
        "company": "Kryptos Technologies limited",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contract, manager",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Eschborn",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Tasks \n EDI Developer/Technical lead \n Location: Stuttgart, Germany ( Remote) Occasional travel to client sites at Stuttgart. \n Duration: 12months+ Contract with Possible extension \n Experience: 5-10 Years \n Job Summary \n We are seeking an experienced EDI Axway TSIM Developer/Consultant with strong expertise in EDI/B2B integrations, EDI platform operations, mapping development, partner onboarding, and production support. The candidate will be responsible for designing, implement, ting, monitoring, and supporting EDI integrations across customers, suppliers, and ERP systems. \n Responsibilities \n Analyze business requirements and implement EDI integration solutions using Axway TSIM. \n Develop, support, and optimize EDI mappings and interfaces. \n Monitor EDI message flows and resolve production issues. \n Configure and support trading partner onboarding and communication setups. \n Perform incident management, problem management, and root cause analysis. \n Prepare technical specifications, mapping documents, and solution designs. \n Conduct testing, partner certification, go-live, and production support activities. \n Participating in or leading EDI and integration projects. \n Collaborate with business teams, customers, suppliers, and external partners throughout project delivery. \n Requirements \n Required Skills \n 5+ years of experience in EDI/B2B integration and support. \n Hands-on experience with Axway TSIM and SAP PO, SAP Integration Suite / SAP CI \n Strong knowledge of EDIFACT,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kryptos Technologies limited. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Management",
            "Team leader"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/kryptos-technologies-limited/edi-developer-technical-lead-eschborn-271767",
        "logo": "https://logo.clearbit.com/kryptostechnologieslimited.com",
        "companyLogo": "https://logo.clearbit.com/kryptostechnologieslimited.com",
        "image": "https://logo.clearbit.com/kryptostechnologieslimited.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-39",
        "title": "Junior Complaints & Compliance Specialist",
        "title_ar": "Junior Complaints & Compliance Specialist (برمجة وتكنولوجيا)",
        "company": "sumup",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Complaints and Compliance Specialist \n Location: Berlin (office first, full-time) \n The team \n The Complaints team sits within Operations and works every day to make sure merchants who run their businesses on SumUp get fair, fast, and compliant resolutions whenever something goes wrong with a payment. As payment volumes grow, so does the complexity of the cases the team handles, from delayed payouts to disputed chargebacks, and this role exists to build the specialist skills needed to resolve these cases with precision and care. Joining now means learning the mechanics of payment processing from the ground up, working closely with Payment Operations, Risk, Engineering, and Finance, and helping shape how SumUp responds to some of its most sensitive merchant and regulatory moments. \n What you'll do \n Investigate and resolve merchant complaints tied to payment processing, including authorisations, settlements, payouts, and chargebacks \n Dig into processor logs, payment gateways, and payout systems to find the root cause of each issue and document the findings clearly \n Draft clear, compliant final responses to merchants that meet regulatory timelines and internal SLAs \n Work closely with Payment Operations, Risk, Engineering, and Finance to unblock complex cases \n Keep case documentation audit ready and flag emerging patterns or recurring issues to the wider team \n Contribute to playbooks and knowledge base articles that help the team resolve future cases faster \n You'll be grea",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة sumup. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer support"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sumup/junior-complaints-compliance-specialist-berlin-215872",
        "logo": "https://logo.clearbit.com/sumup.com",
        "companyLogo": "https://logo.clearbit.com/sumup.com",
        "image": "https://logo.clearbit.com/sumup.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-40",
        "title": "Data Platform Engineer",
        "title_ar": "مهندس ومطور برمجيات (Data Platform Engineer)",
        "company": "sumup",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "As part of the Platform tribe, you will help build a self-service, AI-Ready Data Platform. The Data Platform team supports our next big bets: Data, AI, and real-time analytics. We are a team focused on building scalable, reliable infrastructure to enable our global data community. \n What you’ll do \n Build and maintain best-in-class data infrastructure for critical processes. \n Develop features that strengthen self-service, including for ETL and orchestration. \n Optimise processes to use compute more efficiently and reduce cost. \n Automate operations so the platform stays highly available. \n Contribute to the design and implementation of new services. \n You’ll be a strong fit if you \n Have experience with infrastructure as code and containerisation (e.g. Terraform, Helm, Docker, Kubernetes). \n Have used modern query engines (e.g. Snowflake, Databricks, BigQuery, Trino). \n Have worked with modern data orchestration tools (e.g. Airflow, Dagster). \n Are proficient in at least one of our main languages: Python or Go. \n Bring a pragmatic, team-first mindset. \n Are self-motivated, work well independently, and can balance stakeholder needs. \n Nice to have \n Experience building and operating performant API layers. \n Experience with dbt for transform, test, and documentation workflows. \n Query optimization at scale. \n Real-time streaming (e.g. Kafka, Flink, StarRocks, Pinot, Druid, ClickHouse). \n Experience with systems at petabyte scale. \n Experience implementing AI-enabled systems (e",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة sumup. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data engineer/scientist"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sumup/data-platform-engineer-berlin-376146",
        "logo": "https://logo.clearbit.com/sumup.com",
        "companyLogo": "https://logo.clearbit.com/sumup.com",
        "image": "https://logo.clearbit.com/sumup.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-41",
        "title": "Data Scientist (f/m/d)",
        "title_ar": "Data Scientist (f/m/d) (برمجة وتكنولوجيا)",
        "company": "thinkcellsoftware",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Data Scientist - Join Our Innovative Team at think-cell Software \n Our Story At thinkcell, we create powerful software solutions that help professionals be more efficient and productive. Founded in 2002 and based in Berlin, our tools integrate seamlessly with Microsoft Office to help users create presentations, charts, and diagrams with ease. Our dynamic, international team values creativity, collaboration, and technical excellence. \n What You Will Do   \n We're a Data Team that operates like a scaleup within an established company: real ownership, short decision paths, and room to shape things. No corporate bureaucracy – but the resources of a mature business. Our team is made up of experienced senior individual contributors who work independently, challenge each other constructively, and collaborate closely on solving complex problems. It is an environment with a high level of trust, autonomy, and strong opportunities to learn from experienced peers across both technical and business topics. \n You don't just analyze – you drive. You proactively identify gaps, inefficiencies, and opportunities for improvement, build the foundations to answer questions, and make sure stakeholders don't just receive dashboards, but know what to do with them. \n Key Responsibilities: \n Translate complex product and business questions into structured analytical, statistical, and machine-learning approaches \n Develop predictive and diagnostic models and derive robust signals from customer, product,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة thinkcellsoftware. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/thinkcellsoftware/data-scientist-99518",
        "logo": "https://logo.clearbit.com/thinkcellsoftware.com",
        "companyLogo": "https://logo.clearbit.com/thinkcellsoftware.com",
        "image": "https://logo.clearbit.com/thinkcellsoftware.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-42",
        "title": "Senior Automation Engineer - UiPath",
        "title_ar": "مهندس ومطور برمجيات (Senior Automation Engineer - UiPath)",
        "company": "roboyo",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Roboyo AI is a category shaper in Applied AI and Agentic Automation. We help leading enterprises move from automation projects and AI experiments into governed, production-grade systems that execute real work across workflows, processes, products and services. \n Our heritage is in scaled enterprise automation; our future is Applied AI and Agentic Automation: autonomous agents, AI engineering squads, process orchestration, data and knowledge foundations, and human-in-the-loop governance embedded deeply into how our clients operate. \n We are not here to sell AI theatre. We are here to turn AI into working systems, measurable outcomes and repeatable transformation programs. \n About the role \n We're looking for a Senior Automation Engineer to own the technical delivery of UiPath automation workstreams end-to-end — from design and development through testing and deployment — working with international clients across a distributed, global delivery environment. \n Responsibilities and tasks for this role \n Design, develop, and deploy complex, scalable Intelligent Automation solutions using advanced UiPath capabilities, integrating with various APIs, databases, and enterprise systems. \n Act as a technical guide for junior and mid-level automation engineers within your pod. Assist the Tech Lead with rigorous peer code reviews to enforce coding standards and reusability. \n Discover, estimate and deliver Agentic AI solutions implementing the UiPath suite effectively. \n Actively participa",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة roboyo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Delivery"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/roboyo/senior-automation-engineer-uipath-122023",
        "logo": "https://logo.clearbit.com/roboyo.com",
        "companyLogo": "https://logo.clearbit.com/roboyo.com",
        "image": "https://logo.clearbit.com/roboyo.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-43",
        "title": "Campaign Marketing Specialist (12-15 Month Contract)",
        "title_ar": "أخصائي تسويق ونمو (Campaign Marketing Specialist (12-15 Month Contract))",
        "company": "sonyinteractiveentertainmentglobal",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Frankfurt",
        "location_ar": "Frankfurt",
        "salary": "Competitive",
        "description": "Why Sony Interactive Entertainment? \n Sony Interactive Entertainment isn’t just the Best Place to Play — it’s also the Best Place to Work. Sony Interactive Entertainment (SIE) is the company behind the PlayStation brand. As a subsidiary of Sony Group Corporation, we’re part of a proud legacy of innovation and excellence. SIE is a dynamic technology company, delivering cutting-edge hardware and network services to more than 100 million people and an entertainment leader, home to some of the most beloved and recognizable intellectual properties (IP) in the world. Our role at SIE is to create and nurture the experiences under the PlayStation brand, a name synonymous with entertainment excellence and creativity. Role Overview: \n The Campaign Marketing Specialist supports the local implementation of PlayStation's global and local marketing priorities across Brand, Hardware, Exclusive Games, Third Party games, Peripherals and Services in Germany, Austria and Switzerland. Working closely with Campaign Managers and the wider marketing team, you will coordinate campaign tasks, localisation, assets, timelines, reporting and day-to-day delivery so that campaigns are accurate, relevant to local audiences and delivered on time. \n What you’ll be doing: \n Support Campaign Marketing Managers across the campaign lifecycle, from audience insight and agency briefing through localisation, multichannel execution and post-campaign evaluation. \n Maintain campaign plans, timelines, status updates, d",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة sonyinteractiveentertainmentglobal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Strategy"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sonyinteractiveentertainmentglobal/campaign-marketing-specialist-12-15-month-contract-frankfurt-202597",
        "logo": "https://logo.clearbit.com/sonyinteractiveentertainmentglobal.com",
        "companyLogo": "https://logo.clearbit.com/sonyinteractiveentertainmentglobal.com",
        "image": "https://logo.clearbit.com/sonyinteractiveentertainmentglobal.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-44",
        "title": "Technical Project Manager (JetBrains Cloud Platform)",
        "title_ar": "مدير وقائد فريق (Technical Project Manager (JetBrains Cloud Platform))",
        "company": "jetbrains",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin; Munich",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "At JetBrains, code is our passion. Ever since we started back in 2000, we have strived to create the strongest and most effective developer tools in the world. Today, we are evolving beyond standalone tools toward a unified, AI-native platform for software development. \n AI is no longer just an assistant inside the editor – it is becoming an active participant in how software is planned, built, reviewed, and operated across teams and organizations. This shift brings challenges that cannot be solved at the level of individual tools alone, challenges that involve governance, security, cost control, observability, and coordination between humans and autonomous agents. \n The JetBrains Platform team is building the foundation that connects developer workflows, team-level collaboration, and organizational control into a single coherent system. The platform is both deeply integrated with JetBrains products and designed to work across teams, products, and environments. \n We’re now looking for an experienced Technical Project Manager to join our Project Management team and ensure the success of complex initiatives that affect all aspects of the JetBrains Platform. In this role, you’ll work at the intersection of product, infrastructure, and engineering domains, closely collaborating with highly experienced teams on platform features and improvements that support JetBrains products. \n In this role, you will: \n Drive and coordinate initiatives for the JetBrains Platform. \n Align multipl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة jetbrains. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Jetbrains cloud platform"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jetbrains/technical-project-manager-jetbrains-cloud-platform-berlin-munich-373511",
        "logo": "https://logo.clearbit.com/jetbrains.com",
        "companyLogo": "https://logo.clearbit.com/jetbrains.com",
        "image": "https://logo.clearbit.com/jetbrains.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-45",
        "title": "Senior Product Manager (VCS Ecosystem)",
        "title_ar": "مدير وقائد فريق (Senior Product Manager (VCS Ecosystem))",
        "company": "jetbrains",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin; Munich; Remote",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "You know version control is more than just a subsystem. It’s the backbone of how teams build software. You’re ready to shape the future of code-change workflows, from local commits to AI-assisted reviews. If you’re excited by the challenge of turning a core IDE feature into a standalone ecosystem, this is for you. \n About JetBrains \n We create intelligent software development tools for developers and teams. More than 15 million users, over 300,000 companies, and 88 of the Fortune Global Top 100 rely on our products to solve real, complex problems. Our mission is simple: make development teams more productive and AI adoptable at scale. \n What you’ll do \n Version control is a critical part of our IDEs, but we want to take it further. We’re turning VCS into a strategic product direction and, eventually, we aim to grow it into a dedicated ecosystem. This role exists to define what that future looks like right now. \n As the Senior Product Manager, you’ll figure out where JetBrains should play in the VCS space, how to evolve our Git and code review experiences, and what new opportunities exist beyond our current tools. You’ll have the ownership to set a clear product vision that covers everything from complex local merges to remote, containerized, and AI-assisted workflows. You’ll collaborate closely with engineering and quality leads, as well as product marketing, developer advocacy, and the IntelliJ Platform teams. Together, you'll figure out how to handle the next era of softwar",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة jetbrains. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ides"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jetbrains/remote-senior-product-manager-vcs-ecosystem-390229",
        "logo": "https://logo.clearbit.com/jetbrains.com",
        "companyLogo": "https://logo.clearbit.com/jetbrains.com",
        "image": "https://logo.clearbit.com/jetbrains.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-46",
        "title": "Growth Operations Manager (JetBrains AI)",
        "title_ar": "أخصائي تسويق ونمو (Growth Operations Manager (JetBrains AI))",
        "company": "jetbrains",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin; Munich; Remote",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "You enjoy turning messy signals into clear action. You look at product usage, marketing engagement, and account activity and immediately start thinking about what should happen next. \n You care about building systems that help teams move faster, make better decisions, and focus on the opportunities that matter most. If you like connecting data, processes, and people to create measurable business impact, this role is for you. \n About JetBrains \n We create intelligent software development tools for developers and teams. More than 15 million users, over 300,000 companies, and 88 of the Fortune Global Top 100 companies rely on our products to solve real, complex problems. Our mission is simple: make development teams more productive and AI adoptable at scale. \n About the role \n We're building an AI-native platform for software development that connects developer workflows, team collaboration, and organizational governance into a single system. It will serve as the execution and control layer for AI-driven software development and is a key part of how we see the future of the industry. \n As adoption grows, we're looking for someone to own the systems that connect product and marketing signals with commercial action. The goal is simple: help the right users and accounts reach the right people at the right time. \n You'll own the workflow that turns product usage, marketing engagement, account activity, and buying signals into qualified opportunities. You'll work across product, mark",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة jetbrains. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Jcp growth"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jetbrains/remote-growth-operations-manager-jetbrains-ai-497793",
        "logo": "https://logo.clearbit.com/jetbrains.com",
        "companyLogo": "https://logo.clearbit.com/jetbrains.com",
        "image": "https://logo.clearbit.com/jetbrains.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-47",
        "title": "Growth Marketer (AI-Powered QA Automation)",
        "title_ar": "أخصائي تسويق ونمو (Growth Marketer (AI-Powered QA Automation))",
        "company": "jetbrains",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin; Munich",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Do you care about building a user base from scratch, testing unproven acquisition channels, and implementing wild ideas beyond paid search? Are you enthusiastic about shipping now, preferring to go live with rough ideas today over polishing presentations for next month? If so, this is the role for you. \n In this role, you’ll join the team building Qure , an AI copilot for web testing automation. This desktop app turns manual testing flows into production-ready automated scripts, saving hours of manual coding. We’re a seven-person team funded directly by JetBrains. \n About JetBrains Innovation Hub \n JetBrains builds software development tools used by more than 15 million people, over 300,000 companies, and 88 of the Fortune Global Top 100. Innovation Hub is its internal startup incubator, where small autonomous teams build new products, funded and employed by JetBrains. Qure runs inside the Innovation Hub with its own roadmap, go-to-market strategy, and customers. \n For you, that means a founding role without the runway risk. You build acquisition from zero, with the funding, benefits, and stability of an established company behind you. \n What you’ll do \n Qure is a fresh product, so the acquisition channel map is practically blank. Paid search, video, newsletters, marketplaces, paid communities, and content are all unproven for Qure. We need someone to determine how best to find its audience. With a high degree of freedom, a lean team, and no marketing bureaucracy, decisions y",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة jetbrains. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Innovation hub"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jetbrains/growth-marketer-ai-powered-qa-automation-berlin-munich-21483",
        "logo": "https://logo.clearbit.com/jetbrains.com",
        "companyLogo": "https://logo.clearbit.com/jetbrains.com",
        "image": "https://logo.clearbit.com/jetbrains.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-48",
        "title": "Growth manager (JetBrains AI)",
        "title_ar": "أخصائي تسويق ونمو (Growth manager (JetBrains AI))",
        "company": "jetbrains",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin; Munich",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "At JetBrains, we’re building an AI-native platform for software development that connects developer workflows, team-level collaboration, and organizational control into a single coherent system. This platform will serve as the execution and governance layer for AI-driven development, deeply integrated with developer tools but designed to work across teams, products, and environments. This is a long-term strategic investment for JetBrains and a key pillar of our vision for the future of software development. \n We’re looking for a Growth Manager to own the acquisition, onboarding, and activation journey of JetBrains AI for teams and organizations. \n In this role, you’ll help users discover JetBrains AI through JetBrains product surfaces, clarify its value in their development workflows, and reach meaningful product usage as quickly as possible. \n You’ll work on product entry points, trial starts, demo and sandbox experiences, onboarding flows, setup journeys, guided education, and activation experiments that help the right audience become active JetBrains AI users. \n Key responsibilities: \n Own the acquisition, onboarding, and activation journey of JetBrains AI for teams and organizations. \n Define, measure, and improve the path from relevant product entry points to meaningful product usage. \n Optimize acquisition flows across JetBrains entry points, including IDEs, desktop products, plugins, account flows, contextual prompts, and others. \n Create and improve self-service paths",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة jetbrains. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Jcp growth"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jetbrains/growth-manager-jetbrains-ai-berlin-munich-126444",
        "logo": "https://logo.clearbit.com/jetbrains.com",
        "companyLogo": "https://logo.clearbit.com/jetbrains.com",
        "image": "https://logo.clearbit.com/jetbrains.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-49",
        "title": "Entrepreneur in Residence/Product Lead (Project Thinkrail)",
        "title_ar": "مدير وقائد فريق (Entrepreneur in Residence/Product Lead (Project Thinkrail))",
        "company": "jetbrains",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin; Munich; Remote",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "At JetBrains, code is our passion. Ever since we started, back in 2000, we have strived to make the strongest, most effective developer tools on earth. By automating routine checks and corrections, our tools speed up production, freeing developers to grow, discover, and create. \n ThinkRail is an innovative project within JetBrains' Innovation Hub. Its aim is to develop a declarative programming language tailored to AI-spec-driven development. Our goal is to build an infrastructure that enables the efficient creation of complex systems with AI, while maintaining the trust of users and flexibility in the results. \n Thinkrail ( GitHub , Blog, Website ) is now open source and in alpha, and we’re entering the next stage of the product’s development: initial market penetration. We’re focused on bringing it into real-world projects and turning it into a robust, production-ready system. To help us get there, we’re looking for an Entrepreneur in Residence to join the team. You’d be joining at an early stage, with plenty of opportunity to influence the product as it continues to evolve. \n About the role \n We are looking for an Entrepreneur in Residence/Product Lead to work alongside the technical founder and own the product strategy for Thinkrail. \n This is not a traditional product management role. Your focus will be on deeply understanding real developer workflows: where specs, architecture, and code break down, what causes friction, and what problems are actually worth solving. You ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة jetbrains. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Bonsai"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jetbrains/remote-entrepreneur-in-residence-product-lead-project-thinkrail-267320",
        "logo": "https://logo.clearbit.com/jetbrains.com",
        "companyLogo": "https://logo.clearbit.com/jetbrains.com",
        "image": "https://logo.clearbit.com/jetbrains.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-50",
        "title": "Senior Marketing Data Analyst Pricing (all genders)",
        "title_ar": "أخصائي تسويق ونمو (Senior Marketing Data Analyst Pricing (all genders))",
        "company": "hellofresh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "The role \n As a Senior Marketing Data Analyst on our Pricing Analytics team within the Global Marketing Analytics organisation, you'll play a pivotal role in driving data-informed pricing and discount decisions at HelloFresh. Based in our Berlin Headquarters, you'll help build best-in-class analytics to support price and discount strategy across HelloFresh's brands — turning data into strategic recommendations, challenging the status quo, and directly shaping how our global brands price, grow, and operate. \n Reporting to the Associate Director of Pricing Analytics, you'll partner closely with the commercial Pricing & Discount Strategy team and stakeholders across Product, Engineering, ML&AI, and Finance. You'll bring the toolkit of a data scientist — experimentation, causal inference, and modeling — and the judgment to turn it into decisions. As our scope expands, there's room to grow into broader Market Insights work supporting senior leadership across our 15+ markets. \n What You'll Do \n Own price and discount experiments end to end — frame the hypothesis, design the test, size it, launch it through our always-on testing program, and deliver the readout. \n Model how customers respond to price and promotions — price elasticity, geo-segmented pricing, discount and promo effects, and ML-assisted discount recommendations. \n Apply causal inference — incrementality and quasi-experimental methods (difference-in-differences, synthetic control, matching) — to measure true impact wher",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/senior-marketing-data-analyst-pricing-all-genders-berlin-berlin-194706",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-51",
        "title": "Senior Data Engineer, Analytical Data Platform, Inteligent Platforms (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Senior Data Engineer, Analytical Data Platform, Inteligent Platforms (all genders))",
        "company": "hellofresh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About the role \n At HelloFresh, data is at the heart of everything we do — from the moment a customer places an order to the way we forecast demand, optimize our supply chain, and personalize experiences for millions of people. Making that data fast, reliable, and available is what our Data Platform makes possible. \n We are looking for a Senior Data Platform Engineer to join our Data Platform team of 7 — the squad responsible for the infrastructure that powers our entire data ecosystem. You'll own the compute, orchestration, and storage systems that data and analytics teams depend on every day, and lead the evolution of our platform toward a more governed, scalable, and cloud-native architecture. \n This is a hands-on engineering role at the core of our platform. You'll drive our migration to Databricks Unity Catalog and Terraform-managed workspaces, sunset legacy systems, and help define the patterns that make it easy for teams across the company to build and run data workloads reliably and cost-efficiently. \n What you'll do \n Lead our Databricks Unity Catalog migration. Own the transition from legacy Databricks workspaces to Unity Catalog and Terraformenabled workspaces — ensuring governance, lineage, and access control are built into the platform from the start. \n Own our Kubernetesbased compute platform. Manage the Kubernetes infrastructure that provides compute for Spark and Airflow jobs, keeping it reliable, efficient, and easy to build on. \n Build and maintain infrastru",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/senior-data-engineer-analytical-data-platform-inteligent-platforms-all-genders-berlin-berlin-207118",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-52",
        "title": "Principal Engineer, Growth Mega Alliance (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Principal Engineer, Growth Mega Alliance (all genders))",
        "company": "hellofresh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "The Role \n The Growth Mega Alliance (GMA) builds the platforms that power how HelloFresh acquires, converts, and retains customers across 18 markets and multiple brands, across five pillars: AdTech, Conversions, Payments, Communications, and Customer Value Optimization (CVO). \n As Principal Engineer, you are the technical visionary for these platforms. You define architectural direction across all five pillars, lead the most consequential cross-cutting initiatives, and raise the technical bar for the entire organization. This is a hands-on leadership role - you code, review, and design alongside the senior and staff engineers who look to you as the technical lead. \n What You'll Do \n GenAI & Agentic Engineering Leadership \n Own GMA's GenAI strategy: identify the highest-leverage opportunities across all five pillars where AI/ML unlocks step-change outcomes, for both engineering productivity and customer-facing capabilities. \n Establish agentic development workflows — where specs drive AI-assisted code generation — and scale them from early adopters to standard practice. Build the guardrails and reference architectures that enable squads to work AI-natively. \n Develop and articulate a clear point of view on how engineering teams need to evolve in skills, process, and culture to realize the gains that agentic tools make possible. \n Growth Platform Architecture \n Own the long-term technical architecture across GMA's five pillars: real-time personalization, experimentation at scal",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/principal-engineer-growth-mega-alliance-all-genders-berlin-berlin-417328",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-53",
        "title": "Paid Search Lead (Experimentation & Measurement)",
        "title_ar": "مدير وقائد فريق (Paid Search Lead (Experimentation & Measurement))",
        "company": "hellofresh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "The role \n We are looking for a highly strategic and analytical Marketing Measurement & Testing Lead (Individual Contributor), Paid Search (m/f/x) to drive the evolution of our Paid Search advertising efforts. This is a high-impact individual contributor role, sitting at the intersection of performance marketing, ad tech, and automation. As a key expert within the team, you will own the global testing and measurement strategy for Paid Search, ensuring data-driven decision-making that unlocks new growth opportunities. You will play a critical role in budgeting, infrastructure development, and automation, collaborating with cross-functional teams to ensure Paid Search operates at peak efficiency. \n Your impact \n As Marketing Measurement & Testing Lead, Paid Search, you will drive key initiatives across four strategic areas: \n Platform Leadership & Innovation \n Serve as the go-to expert on Paid Search, providing strategic guidance on Google Ads (Search, Shopping, AI Max), with a deep understanding of platform mechanics, auction dynamics, and optimisation levers. \n Anticipate and adapt to platform updates, leveraging industry trends and data insights to drive continuous innovation and stay ahead of the curve. \n Collaborate with platform partners to pilot new solutions, enhance measurement capabilities, and improve efficiency. \n Advise and collaborate with the Paid Search Campaign Ops team, ensuring platform strategies are optimised with best-in-class practices and advanced ad tec",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/paid-search-lead-experimentation-measurement-berlin-berlin-164065",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-54",
        "title": "Rechtsreferendar:in (m/w/d) Legal & Business Affairs",
        "title_ar": "Rechtsreferendar:in (m/w/d) Legal & Business Affairs (برمجة وتكنولوجيا)",
        "company": "sonymusicentertainment",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "(Berlin, ab Juli 2027, für je 3 Monate, Vollzeit) \n Du interessierst dich für den legal stuff hinter dem Musikbusiness? Stehst kurz vor dem Abschluss des Referendariats und willst endlich loslegen? Bist engagiert und kreativ? Dann suchen wir dich. \n Was du machst \n Du überprüfst und ergänzt bestehende Verträge und Vereinbarungen – von Künstler- und Bandübernahmeverträgen bis Mitschnitts- und Senderechtsvereinbarungen. \n Du entwirfst gutachterliche Stellungnahmen und bereitest Vertragsabschlüsse vor. \n Du gehst auch alle weiteren Projekte in den Bereichen des Markenrechts, Urheberrechts und UWG mit Begeisterung an. \n Wer du bist \n Du hast deinen Schwerpunkt auf Medien- oder Wirtschaftsrecht gelegt. \n Du willst deine Wahlstation bei uns absolvieren. Vielleicht hast du auch bereits Erfahrung aus anderen Praktika. \n Dein Deutsch und Englisch kann sich hören lassen. \n Microsoft 365 kannst du. \n Du denkst analytisch und arbeitest strukturiert. \n Du bist zielstrebig, einsatzfreudig und kommunikationsstark. \n Wir bieten dir \n Raum   für Vielfalt und Raum für Innovation. Möglichkeiten für deine Ideen. Rabatt auf viele Produkte der Sony Corporation.     Die Chance, dich zu beweisen. Und Herausforderung von Anfang an.     \n Wie du dich bewirbst \n Ohne Foto und Alter. Auch Familienstand, deine Herkunft, Zeugnisse, die Jobs deiner Eltern und ähnliche Merkmale benötigen wir nicht. \n Zeige uns in einem CV (ggf. mit Anschreiben in einer Datei) was dich ausmacht, was du kannst und warum Sony ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة sonymusicentertainment. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sme germany"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sonymusicentertainment/rechtsreferendarin-legal-business-affairs-europe-berlin-46844",
        "logo": "https://logo.clearbit.com/sonymusicentertainment.com",
        "companyLogo": "https://logo.clearbit.com/sonymusicentertainment.com",
        "image": "https://logo.clearbit.com/sonymusicentertainment.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-55",
        "title": "Business and Legal Affairs Manager, The Orchard",
        "title_ar": "مدير وقائد فريق (Business and Legal Affairs Manager, The Orchard)",
        "company": "sonymusicentertainment",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Bei The Orchard ist ab sofort eine Position im Bereich Business and Legal Affairs zu besetzen – an unserem Standort Berlin. Als Volljurist:in unterstützt Du das Tagesgeschäft und die rechtlichen Anforderungen unseres Business- und Legal-Affairs-Teams. \n The Orchard ist ein führendes Unternehmen für Musikvertrieb und Artist Services mit Sitz in New York und in 45 Märkten weltweit tätig – im Vertrieb unabhängiger Künstler:innen wie Bad Bunny, Gorillaz und Raye. Mit modernsten Abläufen und einem einzigartigen globalen Team arbeiten wir mit Labels jeder Größe zusammen und machen deren Musik und Videos bei Hunderten von digitalen und physischen Händlern rund um den Globus verfügbar. \n Leidenschaft für Musik und die Musikbranche ist ein Muss. Mit Deinem professionellen und souveränen Auftreten baust Du starke Beziehungen zu Kolleg:innen und externen Kund:innen auf und pflegst diese. Dafür schaffen wir ein angenehmes, offenes und inspirierendes Umfeld, das Produktivität und Kreativität fördert. \n Das Team von The Orchard trifft sich von Montag bis Donnerstag im Büro. Freitags wird in der Regel im Homeoffice gearbeitet. \n Was du tun wirst: \n Entwerfen, Verhandeln und Finalisieren von Vertriebsverträgen mit Labels und Künstler:innen. \n Entwerfen, Verhandeln und Finalisieren von Musikverlags- und Merchandising-Verträgen. \n Entwerfen, Verhandeln und Finalisieren von Vertragsänderungen, Abtretungen und Kündigungen nach Bedarf. \n Unterstützung bei Mergers & Acquisitions im deutschen Markt",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة sonymusicentertainment. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "The orchard"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sonymusicentertainment/business-and-legal-affairs-manager-the-orchard-europe-berlin-324315",
        "logo": "https://logo.clearbit.com/sonymusicentertainment.com",
        "companyLogo": "https://logo.clearbit.com/sonymusicentertainment.com",
        "image": "https://logo.clearbit.com/sonymusicentertainment.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789744728-56",
        "title": "Account Director",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Director)",
        "company": "Superside",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": [
            "Contract"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Anywhere",
        "location_ar": "Anywhere",
        "salary": "Competitive",
        "description": "Superside is hiring an Account Director to lead and grow a portfolio of strategically important enterprise customers. You’ll own the full customer lifecycle, from pre-sale scoping through delivery, renewal, and expansion, ensuring customers see Superside as a long-term creative partner. \n This role sits at the intersection of customer strategy, commercial growth, and delivery. You’ll lead cross-functional teams, manage senior stakeholders, and drive retention, expansion, and high-quality delivery across complex accounts. \n What you’ll do \n Own the end-to-end relationship for 5–10 enterprise customers, driving retention, expansion, and executive trust. \n Develop and execute account growth strategies, identifying upgrade and expansion opportunities. \n Lead renewals and commercial negotiations in partnership with leadership. \n Build strong relationships with senior stakeholders and procurement teams. \n Translate customer goals into scalable creative programs and solutions. \n Partner with Project Managers and Producers to ensure seamless delivery across workstreams. \n Act as the senior escalation point, resolving issues quickly and maintaining customer confidence. \n Monitor account health, burn rates, and pacing to ensure performance and profitability. \n Develop ROI-driven business cases that demonstrate the value of Superside’s model. \n Identify opportunities to leverage AI and automation to improve customer outcomes. \n Coach and develop PMs and Producers to raise the bar on del",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Superside. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://jobicy.com/jobs/151032-account-director",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210104060359-501693.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210104060359-501693.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210104060359-501693.jpg",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789744728-57",
        "title": "Sales Development Representative - API/CPaaS (NwPS)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Development Representative - API/CPaaS (NwPS))",
        "company": "Vonage",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mexico, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Join Vonage and help us innovate cloud communications for businesses worldwide! Vonage Communications APIs: As an emerging leader in the $10B+ communications API market, we empower global brands to connect better with their customers, employees, and partners through transformative communications experiences. For example, Vonage API solutions empower organizations to build their custom omnichannel communications structure. This allows them to reach and engage customers on their preferred schedule and channel — including voice, video, and messaging. Think of a rideshare service instantly connecting with customers, hospital staff conducting remote monitoring, customers verifying their identity before completing a purchase, AI virtual agents servicing customers around the clock, and much more. Why this role matters: As a Sales Development Representative you will be responsible for creating, identifying, and qualifying new sales opportunities in the Network Powered Solutions vertical. You will be a key driver of Vonage's growth by identifying, engaging, and qualifying new business opportunities within the Telecom Ecosystem (mobile network operators, virtual network operators, internet service providers, and regional service providers). You will be the very first point of contact a potential customer will have with Vonage API and play a vital role not only in generating sales pipeline, but helping us refine sales and marketing strategy based on your interactions and successes with ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Vonage. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/149389-sales-development-representative-api-cpaas-nwps",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1bac058d-221.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1bac058d-221.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/1bac058d-221.jpg",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789744728-58",
        "title": "Principal DevOps Engineer",
        "title_ar": "مهندس ومطور برمجيات (Principal DevOps Engineer)",
        "company": "NBCUniversal",
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
        "description": "Company Description NBCUniversal is one of the world's leading media and entertainment companies. We create world-class content, which we distribute across our portfolio of film, television, and streaming, and bring to life through our global theme park destinations, consumer products, and experiences. We own and operate leading entertainment and news brands, including NBC, NBC News, NBC Sports, Telemundo, NBC Local Stations, Bravo, and Peacock, our premium ad-supported streaming service. We produce and distribute premier filmed entertainment and programming through our powerhouse film and television studios, including Universal Pictures, DreamWorks Animation, and Focus Features, and the four global television studios under the Universal Studio Group banner, and operate industry-leading theme parks and experiences around the world through Universal Destinations & Experiences, including Universal Orlando Resort, home to Universal Epic Universe, and Universal Studios Hollywood. NBCUniversal is a subsidiary of Comcast Corporation. Visit www.nbcuniversal.com for more information. Our impact is rooted in improving the communities where our employees, customers, and audiences live and work. We have a rich tradition of giving back and ensuring our employees have the opportunity to serve their communities. We champion an inclusive culture and strive to attract and develop a talented workforce to create and deliver a wide range of content reflecting our world. Job Description We are l",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة NBCUniversal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops & infrastructure"
        ],
        "applyUrl": "https://jobicy.com/jobs/148200-principal-devops-engineer-2",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/836510d4-221-2.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/836510d4-221-2.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/836510d4-221-2.jpg",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789744728-59",
        "title": "Digital Customer Success Campaign Manager",
        "title_ar": "مدير وقائد فريق (Digital Customer Success Campaign Manager)",
        "company": "1Password",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "1Password is growing. We’ve surpassed $400M in ARR and we’re continuing to accelerate, earning a spot on the Forbes Cloud 100 for four years in a row and teaming up with iconic partners like Oracle Red Bull Racing. About 1Password At 1Password, we’re building the foundation for a safe, productive digital future. Our mission is to unleash employee productivity without compromising security by ensuring every identity is authentic, every application sign-in is secure, and every device is trusted. We innovated the market-leading enterprise password manager and pioneered Unified Access Management, a new cybersecurity category built for the way people and AI agents work today. As one of the most loved brands in cybersecurity, we take a human-centric approach in everything from product strategy to user experience. Over 180,000 businesses, from Fortune 100 leaders to the world’s most innovative AI companies, trust 1Password to help their teams securely adopt the SaaS and AI tools they need to do their best work. If you're excited about the opportunity to contribute to the digital safety of millions, to work alongside a team of curious, driven individuals, and to solve hard problems in a fast-paced, dynamic environment, then we want to hear from you. Come join us and help shape a safer, simpler digital future. We’re looking for a Digital Customer Success Campaign Manager to design, launch, and improve digital customer journeys at scale. You’ll turn customer and product signals into ti",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة 1Password. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://jobicy.com/jobs/151086-digital-customer-success-campaign-manager",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200909195848-296323.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200909195848-296323.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200909195848-296323.png",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789744728-60",
        "title": "Part Time Inpatient Telephonic Staff Pharmacist (Evenings / Overnight)",
        "title_ar": "Part Time Inpatient Telephonic Staff Pharmacist (Evenings / Overnight) (تصميم وإبداع)",
        "company": "The Cigna Group",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": [
            "Part-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The remote, work from home part-time staff pharmacist provides telepharmacy services to multiple hospital clients across various states. This role enhances clinical team performance, supports quality patient care, and ensures safe and compliant medication practices. This part-time position includes evenings, overnight and on-call shifts. You are expected to work at least 1-2 shifts every 2 weeks. Multiple shifts available and will be discussed in interview, but consist of evenings, overnight, and weekends. Responsibilities: Telepharmacy Perform remote order entry, order verification, drug verification, and patient/staff counseling. Support multiple clients and operate within various pharmacy information systems (PIS). Clinical Excellence Provide proactive clinical pharmacy services and adhere to all client -specific and Cigna policies. Deliver drug information and therapeutic recommendations, including dosing adjustments, interactions, compatibilities, and infusion guidance. Maintain working knowledge of IV fluids, TPN, narcotic/cardiac drips, IV antibiotics, chemotherapy, and more. Understand considerations for special populations (pediatric, geriatric, pregnant/nursing, renal/hepatic impairment, HIV). Counsel patients, nurses, and medical staff on safe medication use. Investigate and resolve medication variances within 48 hours. Operational Excellence Learn and work in multiple hospital pharmacy systems. Obtain and maintain multiple state pharmacist licenses. Document order",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة The Cigna Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Healthcare & medical"
        ],
        "applyUrl": "https://jobicy.com/jobs/149884-part-time-inpatient-telephonic-staff-pharmacist-evenings-overnight",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/89b575c5-221.jpeg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/89b575c5-221.jpeg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/89b575c5-221.jpeg",
        "postedAt": "2026-09-18",
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
    if (this.defaultJobs && this.defaultJobs.length) {
      jobs = this.defaultJobs;
    } else {
      try {
        jobs = JSON.parse(localStorage.getItem(this.KEYS.JOBS) || '[]');
      } catch(e) {
        jobs = [];
      }
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
