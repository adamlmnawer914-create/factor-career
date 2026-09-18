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
        "id": "job-1789700404-1",
        "title": "VP of Freight Sales – FTL / Truckload | Remote or Joliet IL",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (VP of Freight Sales – FTL / Truckload | Remote or Joliet IL)",
        "company": "Spotter Labs",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "We are looking for a modern, highly proactive enterprise freight sales leader to build our direct-shipper contract pipeline from the ground up. This is not a traditional freight sales role focused on maintaining an existing book of business. Your mission is to get Spotter's 600-truck fleet in front of high-volume enterprise shippers and into their RFPs, mini-bids, pilots, and contract freight programs. You will identify high-value shippers, reach transportation procurement and logistics decision-makers, navigate carrier onboarding and qualification processes, and turn those relationships into real freight opportunities. Initial Market Focus This role will initially focus on local work around Joliet, IL and long-haul freight originating from the Joliet area. What You'll Own \n Identify and map enterprise shippers with meaningful freight volume in the Joliet market. \n Build relationships with transportation procurement, logistics, and supply chain decision-makers. \n Identify upcoming RFPs, mini-bids, pilots, and contract truckload opportunities . \n Get Spotter through shipper and enterprise-broker carrier onboarding and qualification processes . \n Position our 600-truck asset base for high-volume freight opportunities. \n Build a qualified pipeline with clear next steps, stakeholders, timelines, and freight volume. \n Work with operations and pricing to turn opportunities into actionable lanes and awards. \n Develop direct-shipper relationships that can grow into recurring contract",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Spotter Labs. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote-vp-sales",
            "Remote-director-of-sales",
            "Logistics-sales-manager",
            "Sales"
        ],
        "applyUrl": "https://himalayas.app/companies/spotter-labs/jobs/vp-of-freight-sales-ftl-truckload-remote-or-joliet-il",
        "logo": "https://cdn-images.himalayas.app/qb2qvyb10w4wmvtk113wp88iwed4",
        "companyLogo": "https://cdn-images.himalayas.app/qb2qvyb10w4wmvtk113wp88iwed4",
        "image": "https://cdn-images.himalayas.app/qb2qvyb10w4wmvtk113wp88iwed4",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700404-2",
        "title": "Transportation Sales Executive – FTL / Direct Shipper | Remote or Joliet IL",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Transportation Sales Executive – FTL / Direct Shipper | Remote or Joliet IL)",
        "company": "Spotter Labs",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "We are looking for a highly motivated Transportation Sales Executive to help build Spotter's direct-shipper freight pipeline. This is a hands-on sales role focused on identifying freight opportunities, connecting with shippers and logistics decision-makers, and helping get Spotter's 600-truck fleet into new freight opportunities. You will work closely with our sales, operations, and pricing teams to identify qualified opportunities and turn them into lanes, bids, pilots, and recurring freight. Initial Market Focus This hire will initially focus on local work around Joliet, IL and long-haul freight leaving the Joliet, IL area. What You'll Do \n Research and identify potential direct shippers with relevant freight volume. \n Build and maintain a pipeline of prospective shippers in the Joliet market. \n Reach out to transportation, logistics, and procurement contacts. \n Identify upcoming RFPs, mini-bids, pilots, and truckload opportunities . \n Help prospective shippers complete carrier onboarding and qualification processes. \n Introduce Spotter's 600-truck capacity to qualified freight opportunities. \n Follow up consistently with prospects and move opportunities toward a concrete next step. \n Work with operations and pricing to determine which lanes Spotter can service and price. \n Maintain accurate pipeline and account information in our CRM. \n Help develop direct-shipper relationships that can grow into recurring freight. \n What We're Looking For \n Previous experience in freight ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Spotter Labs. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cargo-sales-executive"
        ],
        "applyUrl": "https://himalayas.app/companies/spotter-labs/jobs/transportation-sales-executive-ftl-direct-shipper-remote-or-joliet-il",
        "logo": "https://cdn-images.himalayas.app/qb2qvyb10w4wmvtk113wp88iwed4",
        "companyLogo": "https://cdn-images.himalayas.app/qb2qvyb10w4wmvtk113wp88iwed4",
        "image": "https://cdn-images.himalayas.app/qb2qvyb10w4wmvtk113wp88iwed4",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700404-3",
        "title": "Virtual Assistant",
        "title_ar": "Virtual Assistant (أخرى)",
        "company": "micro1",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$15 - $30 USD",
        "description": "Job Title: Virtual Assistant Job Type: Full time Location: Remote The Role We’re looking for a proactive, highly organized Virtual Assistant to support day-to-day operations across our distributed team. You’ll own general administrative work, team logistics, and gifting for our internal team, extended team, and clients. You should be resourceful, detail-oriented, and comfortable taking ownership with minimal direction. What You’ll Do \n Own scheduling, research, documentation, and general administrative tasks. \n Maintain internal trackers, records, and operational information. \n Coordinate purchasing, vendors, shipping, expenses, and reimbursements. \n Support onboarding, team logistics, and ad hoc requests. \n Own gifting operations across our team and clients. \n Source gifts and manage ordering, personalization, shipping, and delivery. \n Track gifting budgets, recipient information, orders, and vendors. \n Anticipate needs and drive tasks through completion. \n What We're Looking For \n 3+ years in administrative support, operations, or a similar role. \n Excellent organization and attention to detail. \n Strong written and verbal communication. \n High ownership, reliability, and follow-through. \n Strong research and problem-solving skills. \n Ability to work independently in a fast-moving environment. \n Good judgment when handling sensitive information. \n Preferred \n Experience in a startup, technology company, or distributed team. \n Experience with gifting, vendors, purchasing, or",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Virtual-assistant",
            "Virtual-office-assistant"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/virtual-assistant",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700404-4",
        "title": "Data Entry Keyer",
        "title_ar": "Data Entry Keyer (برمجة وتكنولوجيا)",
        "company": "micro1",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$20 - $35 USD",
        "description": "Role Title: Data Entry Keyer Role Type: Contractor Location: Remote micro1 is engaging Data Entry Keyers to contribute to a customer's advanced AI benchmark project. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. Scope of Work \n Design and produce expert-level evaluation tasks that simulate real-world data entry and validation challenges for AI agents. \n Construct and curate large, complex datasets—including CSVs, PDFs, spreadsheets, and technical documents filled with realistic errors such as malformed records, missing data, and inconsistent formats. \n Define the correct final state for each task, specifying the exact error cases and reconciliation requirements that an AI must address. \n Author detailed grading rubrics (35+ criteria) for assessment of AI agent outputs, focusing on both accuracy and completeness in error detection. \n Ensure all authored tasks mirror the authentic complexity and standards of highly regulated or audit-sensitive environments. \n Collaborate asynchronously through precise written and verbal communication to iterate and refine evaluation materials. \n Preferred Qualifications \n Extensive experience in data entry, quality assurance, or data validation within regulated or audit-sensitive domains such as healthcare claims, finance back offic",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-entry-agent",
            "Data-entry-operator",
            "Data-entry",
            "Data-entry-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/data-entry-keyer-5913700982",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700404-5",
        "title": "VP of Robotics Research",
        "title_ar": "VP of Robotics Research (أخرى)",
        "company": "micro1",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$1,500,000 - $4,000,000 USD",
        "description": "Job Title: VP of Robotics Research Job Type: Full-time Location: Remote The Role: As VP of Robotics Research, you'll lead our Robotics Research team in developing the data foundations behind robot learning. You'll define how robotics data is collected, represented, evaluated, and scaled—helping build a Robotics Data Engine that enables increasingly capable robotic systems. Working alongside AI researchers and engineers, you'll drive research at the intersection of robotics, perception, learning, and large-scale data. You'll also build and mentor a team of exceptional Robotics Researchers, setting the technical vision while remaining deeply involved in research and experimentation. What You'll Do \n Define and execute the research strategy for robotics data, embodied AI, and robot learning. \n Lead research initiatives focused on robotics datasets, multimodal representations, perception, manipulation, and data-centric learning. \n Build, mentor, and grow a team of Robotics Researchers while fostering a culture of scientific rigor, curiosity, and rapid experimentation. \n Develop novel approaches for collecting robotics data through teleoperation, human demonstrations, simulation, autonomous exploration, and real-world deployments. \n Design scalable robotics data pipelines by defining collection workflows, task taxonomies, annotation schemas, quality control processes, evaluation methodologies, and final data delivery formats. \n Translate research and client objectives into scalabl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Vp-of-research",
            "Robotics-leadership"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/vp-of-robotics-research",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700404-6",
        "title": "Computer User Support Specialists",
        "title_ar": "Computer User Support Specialists (خدمة ودعم العملاء)",
        "company": "micro1",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$30 - $55 USD",
        "description": "Role Title: Computer User Support Specialists Role Type: Contractor Location: Remote micro1 is selecting Computer User Support Specialists to contribute their advanced troubleshooting capabilities to a key customer project. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. Scope of Work \n Diagnose and resolve common and complex hardware, software, and networking issues using industry best practices. \n Provide guidance on OS support (Windows, MacOS, Linux) and network connectivity, including TCP/IP, VPNs, and DNS-related concerns. \n Document troubleshooting steps, solutions, and user interactions clearly within a ticket management system. \n Contribute detailed process insights that enhance future support workflows and training data quality. \n Collaborate asynchronously and communicate technical concepts effectively through written and verbal channels. \n Identify patterns in support issues, offering recommendations or process improvements to the project team. \n Preferred Qualifications \n Minimum 3 years' proven experience providing Tier 2/3 IT support. \n Expertise in diagnosing and resolving hardware and software issues across varied platforms. \n Strong understanding of networking concepts, including TCP/IP, VPNs, and DNS troubleshooting. \n Proficiency with ticket manag",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Computer-user-support",
            "User-support-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/computer-user-support-specialists-718242956",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-7",
        "title": "AI Infrastructure AI/ML Engineer (100 % remote) (m/f/d)",
        "title_ar": "مهندس ومطور برمجيات (AI Infrastructure AI/ML Engineer (100 % remote) (m/f/d))",
        "company": "EWOR GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "EWOR is launching cutting-edge new initiatives, and we are looking for exceptional operators and builders to join our new department. We are backed and led by serial entrepreneurs, including Paul Müller (founder of Adjust, €1.2B exit) and Petter Made (founder of SumUp, €8B), who have built high-impact technology and category-defining ventures from the ground up. What We Offer \n Maximum ownership : Complete autonomy to architect systems, drive strategy, and build from 0 to 1 without corporate red tape. \n High-growth environment : Complete focus on achieving strong market validation and scalable traction as fast as possible. No PowerPoint presentations, no 7 layers of approval. Good ideas and fast execution are what matter. \n Elite team : Report directly to the department founder and collaborate with a world-class team of engineers, researchers, and commercial leaders. \n Competitive compensation & upside : Attractive compensation with equity upside. \n Tasks \n You will lead and execute core 0-to-1 initiatives in cutting-edge domains such as AI Infrastructure. \n You will translate high-level strategic vision into concrete execution roadmaps, driving rapid implementation from prototype to production. \n You will architect scalable solutions and drive critical milestones to position the new department for rapid growth and potentially a spin-off to attract institutional backing. \n Requirements \n You are based in Europe or the Americas (or open to relocate/remote arrangements). \n You ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EWOR GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai-ml-engineer",
            "Ai-infrastructure"
        ],
        "applyUrl": "https://himalayas.app/companies/ewor-gmbh/jobs/ai-infrastructure-ai-ml-engineer-100-remote-m-f-d",
        "logo": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "companyLogo": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "image": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-8",
        "title": "SaaS Full-Stack Developer (100 % remote) (m/f/d)",
        "title_ar": "مهندس ومطور برمجيات (SaaS Full-Stack Developer (100 % remote) (m/f/d))",
        "company": "EWOR GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "EWOR is launching cutting-edge new initiatives, and we are looking for exceptional operators and builders to join our new department. We are backed and led by serial entrepreneurs, including Paul Müller (founder of Adjust, €1.2B exit) and Petter Made (founder of SumUp, €8B), who have built high-impact technology and category-defining ventures from the ground up. What We Offer \n Maximum ownership : Complete autonomy to architect systems, drive strategy, and build from 0 to 1 without corporate red tape. \n High-growth environment : Complete focus on achieving strong market validation and scalable traction as fast as possible. No PowerPoint presentations, no 7 layers of approval. Good ideas and fast execution are what matter. \n Elite team : Report directly to the department founder and collaborate with a world-class team of engineers, researchers, and commercial leaders. \n Competitive compensation & upside : Attractive compensation with equity upside. \n Tasks \n You will lead and execute core 0-to-1 initiatives in cutting-edge domains such as SaaS. \n You will translate high-level strategic vision into concrete execution roadmaps, driving rapid implementation from prototype to production. \n You will architect scalable solutions and drive critical milestones to position the new department for rapid growth and potentially a spin-off to attract institutional backing. \n Requirements \n You are based in Europe or the Americas (or open to relocate/remote arrangements). \n You have a high-a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EWOR GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Fullstack-development",
            "Saas-development",
            "Software-engineer",
            "Web-development"
        ],
        "applyUrl": "https://himalayas.app/companies/ewor-gmbh/jobs/saas-full-stack-developer-100-remote-m-f-d",
        "logo": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "companyLogo": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "image": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-9",
        "title": "Consumer AI Senior Full-Stack Engineer (100 % remote) (m/f/d)",
        "title_ar": "مهندس ومطور برمجيات (Consumer AI Senior Full-Stack Engineer (100 % remote) (m/f/d))",
        "company": "EWOR GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "EWOR is launching cutting-edge new initiatives, and we are looking for exceptional operators and builders to join our new department. We are backed and led by serial entrepreneurs, including Paul Müller (founder of Adjust, €1.2B exit) and Petter Made (founder of SumUp, €8B), who have built high-impact technology and category-defining ventures from the ground up. What We Offer \n Maximum ownership : Complete autonomy to architect systems, drive strategy, and build from 0 to 1 without corporate red tape. \n High-growth environment : Complete focus on achieving strong market validation and scalable traction as fast as possible. No PowerPoint presentations, no 7 layers of approval. Good ideas and fast execution are what matter. \n Elite team : Report directly to the department founder and collaborate with a world-class team of engineers, researchers, and commercial leaders. \n Competitive compensation & upside : Attractive compensation with equity upside. \n Tasks \n You will lead and execute core 0-to-1 initiatives in cutting-edge domains such as Consumer AI. \n You will translate high-level strategic vision into concrete execution roadmaps, driving rapid implementation from prototype to production. \n You will architect scalable solutions and drive critical milestones to position the new department for rapid growth and potentially a spin-off to attract institutional backing. \n Requirements \n You are based in Europe or the Americas (or open to relocate/remote arrangements). \n You have a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EWOR GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Full-stack-engineering",
            "Consumer-ai",
            "Software-engineer",
            "Backend-development"
        ],
        "applyUrl": "https://himalayas.app/companies/ewor-gmbh/jobs/consumer-ai-senior-full-stack-engineer-100-remote-m-f-d",
        "logo": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "companyLogo": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "image": "https://cdn-images.himalayas.app/mzfjnameg78wsqgnqdccysf7eg22",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-10",
        "title": "Customer Care Specialist",
        "title_ar": "Customer Care Specialist (خدمة ودعم العملاء)",
        "company": "Citiside Property Management",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "We are looking for an empathetic, detail-oriented, and proactive Customer Care Specialist to join our team. In this role, you will be the primary touchpoint for our customers, ensuring they receive prompt, helpful, and compassionate support. Beyond simply solving issues, your goal is to build strong relationships, foster loyalty, and deliver exceptional experiences across all communication channels. \n Key Responsibilities: \n Respond to customer inquiries via phone, email, live chat, and social media in a timely, professional, and friendly manner. \n Actively listen to customer concerns, identify root causes, and provide clear, effective solutions or escalations. \n Manage customer feedback, complaints, and service issues with patience, empathy, and high emotional intelligence. \n Collaborate with internal teams (operations, technical, sales) to resolve complex customer issues efficiently. \n Maintain accurate records of customer interactions, transactions, inquiries, and feedback in the CRM system. \n Proactively follow up with customers to ensure full resolution and satisfaction. \n Identify patterns in recurring customer issues and suggest process improvements to enhance the overall customer experience. \n Requirements & Qualifications: \n Experience: 1–3 years of experience in customer service, customer support, or client-facing roles. \n Communication: Excellent verbal and written English communication skills. \n Soft Skills: High level of empathy, active listening, patience, probl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Citiside Property Management. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer-service",
            "Customer-support",
            "Client-relations"
        ],
        "applyUrl": "https://himalayas.app/companies/citiside-property-management/jobs/customer-care-specialist",
        "logo": "https://cdn-images.himalayas.app/ktt5q5v6ik9gg85drydtrntzkha9",
        "companyLogo": "https://cdn-images.himalayas.app/ktt5q5v6ik9gg85drydtrntzkha9",
        "image": "https://cdn-images.himalayas.app/ktt5q5v6ik9gg85drydtrntzkha9",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-11",
        "title": "Purchasing Coordinator",
        "title_ar": "Purchasing Coordinator (برمجة وتكنولوجيا)",
        "company": "Zelh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Zelh is a fast-growing outsourcing company focused on delivering reliable, high-quality services. We build long-term relationships with our customers, employees, and vendors through personal attention, timely communication, and respect. About the Role We are looking for a Purchasing Coordinator to support the purchasing team by following up on open purchase orders, communicating with suppliers, confirming order details, and tracking deliveries. The ideal candidate is organized, detail-oriented, and comfortable working with suppliers and internal teams to ensure materials arrive on time. Key Responsibilities \n Obtain supplier confirmations for purchase orders. \n Verify quantities, pricing, and delivery dates against purchase orders. \n Update order status, confirmed dates, and shipment details in the ERP system. \n Regularly follow up with suppliers regarding open orders and upcoming deliveries. \n Track shipments and ensure materials are delivered on time. \n Expedite late or urgent orders when required. \n Identify and report delays, shortages, pricing discrepancies, and other order issues. \n Communicate order and delivery updates to Planning, Manufacturing, Receiving, and Quality teams. \n Maintain open-order reports, supplier records, and purchasing documentation. \n Support receiving activities and invoice discrepancy resolution. \n Complete other purchasing-related tasks as assigned. \n Requirements \n 2+ years of experience in purchasing, order management, supply chain, procureme",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Zelh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Purchasing-coordinator",
            "Procurement-coordinator",
            "Order-management"
        ],
        "applyUrl": "https://himalayas.app/companies/zelh/jobs/purchasing-coordinator",
        "logo": "https://cdn-images.himalayas.app/0c8uc7nrfe55gkttu80fww03wz5n",
        "companyLogo": "https://cdn-images.himalayas.app/0c8uc7nrfe55gkttu80fww03wz5n",
        "image": "https://cdn-images.himalayas.app/0c8uc7nrfe55gkttu80fww03wz5n",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-12",
        "title": "Cybersecurity Engineer- Junior level",
        "title_ar": "مهندس ومطور برمجيات (Cybersecurity Engineer- Junior level)",
        "company": "CACI International Inc",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$63,300 - $129,700 USD",
        "description": "Job Title: Cybersecurity Engineer- Junior levelJob Category: Information TechnologyTime Type: Full timeMinimum Clearance Required to Start: SecretEmployee Type: RegularPercentage of Travel Required: Up to 50%Type of Travel: Continental US* * * The Opportunity CACI's Enterprise Network Services (ENS) Division supports the Department of Defense (DoD) in modernizing mission-critical communications and enterprise network infrastructures. Our team of network and cybersecurity professionals designs, implements, secures, operates, and enhances DoD enterprise environments to strengthen national security. We are seeking a motivated Cybersecurity Engineer with approximately two years of professional experience to support the deployment, integration, and sustainment of cybersecurity solutions across customer environments. The ideal candidate is technically proficient, eager to learn, and comfortable supporting both CONUS and OCONUS customer sites. Attention: This is a remote position that requires frequent travel (up to 50%) to customer sites within the U.S. (CONUS) and internationally (OCONUS). Responsibilities \n Configure, deploy, integrate, and maintain cybersecurity solutions based on customer requirements, security policies, and performance specifications. \n Perform Security Technical Implementation Guide (STIG) compliance validation and remediation activities across network and system components. \n Execute vulnerability assessments using industry-standard scanning tools and assist",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CACI International Inc. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Network-security",
            "Information-assurance"
        ],
        "applyUrl": "https://himalayas.app/companies/caci-international-inc/jobs/cybersecurity-engineer-junior-level",
        "logo": "https://cdn-images.himalayas.app/3dlhn0q4j5q3ax2oqnoh9nstwpza",
        "companyLogo": "https://cdn-images.himalayas.app/3dlhn0q4j5q3ax2oqnoh9nstwpza",
        "image": "https://cdn-images.himalayas.app/3dlhn0q4j5q3ax2oqnoh9nstwpza",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-13",
        "title": "Software Developer (Freelance)",
        "title_ar": "مهندس ومطور برمجيات (Software Developer (Freelance))",
        "company": "Sortitt",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Australia, Austria, Brazil",
        "location_ar": "Australia, Austria, Brazil",
        "salary": "Competitive",
        "description": "Position Title: Software Developer (Freelance) Location: Remote About Us: Welcome to Sortitt , the revolutionary marketplace that is reshaping the future of resource acquisition. As a dynamic platform, Sortitt connects business with top-tier resources across the globe, transcending traditional constraints. Our cutting edge approach delivers tailored solutions that precisely match client demands, creating opportunities for professionals seeking remote engagements. At Sortitt , resources are available on demand and clients are empowered with diverse choices to ensure the best talent with matching skills. Join us in revolutionizing talent sourcing where innovation, flexibility and growth converge to redefine success in the modern workforce. Job Summary: We are seeking a talented and experienced Software Developer to join our platform as a freelancer. The ideal candidate will be responsible for designing, developing, testing, and maintaining high-performance software applications. The Software Developer will work closely with cross-functional teams to deliver innovative solutions that meet the needs of our clients and contribute to the overall success of the company. Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sortitt. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-development",
            "Freelance-development",
            "Application-development"
        ],
        "applyUrl": "https://himalayas.app/companies/sortitt/jobs/software-developer-freelance",
        "logo": "https://logo.clearbit.com/sortitt.com",
        "companyLogo": "https://logo.clearbit.com/sortitt.com",
        "image": "https://logo.clearbit.com/sortitt.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-14",
        "title": "Marketing Program Manager",
        "title_ar": "أخصائي تسويق ونمو (Marketing Program Manager)",
        "company": "Trafilea",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "About Trafilea Trafilea is a Consumer Tech Platform for Transformative Brand Growth. We’re building the AI Growth Engine that powers the next generation of consumer brands. With over $1B+ in cumulative revenue, 12M+ customers, and 500+ talents across 19 countries, we combine technology, growth marketing, and operational excellence to scale purpose-driven, digitally native brands. We own and operate our own digitally native brands (not an agency), with presence in Walmart, Nordstrom, and Amazon, and a strong global D2C footprint. Why Trafilea We’re a tech-led eCommerce group scaling our own globally loved DTC brands, while helping ambitious talent grow just as fast. 🚀 We build and scale our own brands. 🦾 We invest in AI and automation like few others in eCom. 📈 We test fast, grow fast, and help you do the same. 🤝 Be part of a dynamic, diverse, and talented global team. 🌍 100% Remote, USD competitive salary, paid time off, and more. Key Responsibilities The mission of the Sr. Project Manager is to champion Trafilea ’s Operational Framework within the Marketing Department , ensuring seamless execution of projects, programs, and cross-functional initiatives. This role leads multiple projects from planning through launch, aligning business strategy with execution, optimizing workflows, and driving organizational efficiency. The Sr. PM will provide leadership, structure, and best practices across tribes, squads, and divisions to achieve OKRs, enhance communication, and enable scala",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trafilea. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Pmo",
            "Project-management",
            "Marketing-operations",
            "Digital-marketing"
        ],
        "applyUrl": "https://himalayas.app/companies/trafilea-com/jobs/marketing-program-manager-5008396757",
        "logo": "https://cdn-images.himalayas.app/yux95rnp1az5fjzhhge0sdvhtucq",
        "companyLogo": "https://cdn-images.himalayas.app/yux95rnp1az5fjzhhge0sdvhtucq",
        "image": "https://cdn-images.himalayas.app/yux95rnp1az5fjzhhge0sdvhtucq",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-15",
        "title": "CFO (gn) für zukünftige Portfolio Firmen",
        "title_ar": "CFO (gn) für zukünftige Portfolio Firmen (تصميم وإبداع)",
        "company": "Paragon Partners GmbH",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Paragon ist eine inhabergeführte Beteiligungsgesellschaft und steht seit 2004 für nachhaltige Investitionen in mittelständische Unternehmen. Wir verwalten aktuell insgesamt € 2,4 Mrd. Eigenkapital. Zu unseren Investoren gehören institutionelle Anleger wie Lebensversicherungen, Pensionskassen und Universitätsstiftungen, sowie das Team von Paragon. Wir beteiligen uns an etablierten, mittelständischen Unternehmen mit nachhaltigem Geschäftsmodell und signifikantem Entwicklungspotenzial. Jedes von uns erworbene Unternehmen wird unabhängig durch die Geschäftsführung geführt und selbstständig finanziert. Wir begleiten unsere Beteiligungen aus einer Beiratsposition und unterstützen die Management-Teams dabei, die Unternehmen strategisch und operativ nachhaltig zu verbessern. Für neue Beteiligungsansätze besetzen wir die Position CFO (gn). In der Rolle als CFO (gn) werden Sie maßgeblich zum Erfolg einer Portfolio Firma beitragen. Ihre Mission ist es die Transformation, Professionalisierung und positive Wertentwicklung des Unternehmens zu begleiten. Mit einem guten Überblick über die Finanzfunktion und einem klaren Verständnis der primären Hebel für die Value Creation eines Unternehmens schafft der CFO die Transparenz, um das Porfolio Unternehmen zu steuern. Als CFO sind Sie für die strategische Ausrichtung und operative Steuerung des Bereichs Finanzen und Controlling verantwortlich. Das Aufgabenspektrum: \n Budgetierung, Forecasting und Cash-Flow-Management, Treasury \n Accounting, Tax,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Paragon Partners GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cfo",
            "Chief-financial-officer",
            "Private-equity",
            "Finance-transformation"
        ],
        "applyUrl": "https://himalayas.app/companies/paragon-partners-gmbh/jobs/cfo-gn-fur-zukunftige-portfolio-firmen",
        "logo": "https://cdn-images.himalayas.app/f5erk8r4lr0lila91jz2uuzi2gqq",
        "companyLogo": "https://cdn-images.himalayas.app/f5erk8r4lr0lila91jz2uuzi2gqq",
        "image": "https://cdn-images.himalayas.app/f5erk8r4lr0lila91jz2uuzi2gqq",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-16",
        "title": "Law Clerk Intern (2 openings)",
        "title_ar": "Law Clerk Intern (2 openings) (خدمة ودعم العملاء)",
        "company": "Humane World for Animals: Apply",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "$31.80 per hour working 25 hours a week. Internship is from 9/14/2026 -12/31/2026 Humane World for Animals, a global leader in animal advocacy and protection, is seeking two Law Clerk Interns for the Office of General Counsel. The Law Clerk Intern position provides aspiring legal professionals with hands-on experience supporting a corporate legal department. Interns will contribute to legal research, contract review, policy and compliance projects, litigation and risk management matters, and other initiatives that support the organization's legal operations. This role is designed to strengthen legal analysis, critical thinking, and communication skills while offering insight into the organization’s legal priorities, advocacy campaigns, and mission-driven work. Interns will also gain valuable practice in time management, organization, and the ability to effectively prioritize in a dynamic legal setting. Responsibilities: \n Work closely with attorneys in the Office of General Counsel on a variety of legal matters, including contracts, compliance, litigation, corporate governance, risk management, and legal operations initiatives; \n Review and analyze legal documents, contracts, policies, correspondence, pleadings, regulatory materials, and other records to identify key legal issues, assess risks, and support attorney decision-making; \n Conduct legal research and prepare summaries, memoranda, and other written work product on a wide range of legal topics relevant to the organiza",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Humane World for Animals: Apply. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Law-clerk",
            "Legal-intern",
            "Legal-research",
            "Litigation-support"
        ],
        "applyUrl": "https://himalayas.app/companies/humane-world-for-animals-apply/jobs/law-clerk-intern-2-openings",
        "logo": "https://logo.clearbit.com/humaneworldforanimalsapply.com",
        "companyLogo": "https://logo.clearbit.com/humaneworldforanimalsapply.com",
        "image": "https://logo.clearbit.com/humaneworldforanimalsapply.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700405-17",
        "title": "Proposal & Communications Consultant (Virtual, US)",
        "title_ar": "Proposal & Communications Consultant (Virtual, US) (تسويق ومبيعات)",
        "company": "SIRVA",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$75,000 - $90,000 USD",
        "description": "Role Overview As a key contributor to the sales support team, the Proposal and Communications Consultant is a business partner to Sales and and Global Account Management, who rely on the content specialist as a key resource and advisor. The Proposal and Communications Consultants supports sales and account management in the pursuit of new business as well as account retention/upsell, of which proposal and sales materials preparation is a key component. This role is responsible for thedevelopment, and delivery of quality and succinct responses to Requests for Proposals (RFPs) and Requests for Information (RFIs), ad hoc proposals and related follow up. This may include the development of presentations, clarification materials, site visits, and best and final offers. This role is a senior role within the sales support organization who is partnered with the Sales or Account Management leader from the start of the pursuit and who, in addition to preparing RFPs and related documentation, works with the Salesperson or Account lead on an overall pursuit action plan, including analysis and review of similar opportunities. The Proposal and Communications Consultant proposes approaches to the pursuit and provides documentation, history, research, competitive information, operational data and other information to support the success of the pursuit, acting in effect, as the partner to sales team/Account Management for information and knowledge management for the pursuit. Responsibilities ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SIRVA. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Proposal-development",
            "Rfp-specialist",
            "Sales-support"
        ],
        "applyUrl": "https://himalayas.app/companies/sirva/jobs/proposal-communications-consultant-virtual-us",
        "logo": "https://cdn-images.himalayas.app/5jvtnczvt4ukzyztdvn1fcje24bx",
        "companyLogo": "https://cdn-images.himalayas.app/5jvtnczvt4ukzyztdvn1fcje24bx",
        "image": "https://cdn-images.himalayas.app/5jvtnczvt4ukzyztdvn1fcje24bx",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700406-18",
        "title": "Digital Marketing Specialist",
        "title_ar": "أخصائي تسويق ونمو (Digital Marketing Specialist)",
        "company": "Huzzle",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About Huzzle At Huzzle , we connect exceptional talent with top opportunities at leading companies across the UK, US, Canada, Europe, and Australia. Our clients include fast-growing startups, digital agencies, SaaS companies, and tech-enabled businesses across industries such as MarTech, FinTech, EdTech, and eCommerce. Unlike traditional outsourcing agencies, we place you directly with innovative companies where you become a valued member of the team. About the Company Our client is an established digital marketing agency based in Colorado, specializing in high-impact search engine optimization (SEO) and comprehensive online growth strategies. With over 15 years of experience, the team serves a diverse range of industries, including legal, medical, and B2B sectors, by providing results-driven services such as paid ad management, web development, and review marketing. They focus on transparency and data-backed reporting to help businesses across the United States scale their online visibility and capture high-quality leads. Job Summary This is a high-impact opportunity for an experienced digital marketing professional to move beyond project management and become a true strategic partner for a diverse portfolio of clients. In this role, you will serve as the primary advisor, turning complex data into actionable growth strategies. You will join a team focused on innovation and measurable results, enjoying a clear path to leadership while helping businesses across the country sca",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Huzzle. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Digital-marketing",
            "Seo-specialist",
            "Paid-media",
            "Account-management"
        ],
        "applyUrl": "https://himalayas.app/companies/huzzle/jobs/digital-marketing-specialist",
        "logo": "https://cdn-images.himalayas.app/9lc6nafazoy08dhh3b539jxnxt0y",
        "companyLogo": "https://cdn-images.himalayas.app/9lc6nafazoy08dhh3b539jxnxt0y",
        "image": "https://cdn-images.himalayas.app/9lc6nafazoy08dhh3b539jxnxt0y",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700406-19",
        "title": "Joomla Developer & Hosting Manager",
        "title_ar": "مهندس ومطور برمجيات (Joomla Developer & Hosting Manager)",
        "company": "VirtuHire",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "South Africa",
        "location_ar": "South Africa",
        "salary": "Competitive",
        "description": "Our client in the UK is looking for a Hosting Manager / Senior Joomla Developer / Technical Manager to oversee their portfolio of Joomla websites and hosting environment. The role will focus on proactively managing website security, Joomla migrations, plugin updates, and hosting maintenance to ensure the ongoing stability and security of approximately 250 live websites. Responsibilities \n Manage and maintain the company's Joomla websites and hosting environment. \n Proactively manage Joomla CMS migrations and updates. \n Monitor and maintain plugin updates and compatibility. \n Identify and respond to security threats and vulnerabilities. \n Manage cPanel hosting environments. \n Perform PHP version migrations where required. \n Support the design, development, and build of websites. \n Requirements \n Strong experience with the Joomla CMS. \n Experience managing cPanel hosting environments. \n Knowledge of PHP version migrations. \n Experience managing Joomla updates, migrations, and plugins. \n Proactive approach to website security and maintenance. \n Website design and development experience is highly advantageous. \n Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة VirtuHire. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Joomla-development",
            "Web-development",
            "Hosting-management",
            "Technical-management"
        ],
        "applyUrl": "https://himalayas.app/companies/virtuhire/jobs/joomla-developer-hosting-manager",
        "logo": "https://cdn-images.himalayas.app/w99l9wjy3x781mmly671kskbzt2q",
        "companyLogo": "https://cdn-images.himalayas.app/w99l9wjy3x781mmly671kskbzt2q",
        "image": "https://cdn-images.himalayas.app/w99l9wjy3x781mmly671kskbzt2q",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700406-20",
        "title": "Solutions Architect (Insurance) - Fully Remote",
        "title_ar": "Solutions Architect (Insurance) - Fully Remote (برمجة وتكنولوجيا)",
        "company": "CoverGo",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "Top 3 Reasons To Join Us \n International Environment \n 100% Remote \n Working on the latest tech for the Insurtech Market Leader \n About Us At CoverGo , our mission is to empower all insurance companies to make insurance 100% digital and accessible to everyone. \n We are a leading global no-code insurance platform for health, life, and P&C \n We’re the winner of the Insurtech of the Year in all of Asia and other awards globally \n We work with insurance enterprise clients such as AXA, Bupa, MSIG, Dai-ichi, Bank of China Group Insurance, and many more \n We're an international, diverse team of over 120 people with 30 nationalities and team members working remotely from all over the world \n We are fully funded and backed by reputable VC funds and strategic institutional investors \n We have a global presence in Asia, EMEA and the Americas \n We’ve grown our annualized revenue by over 30x since January 2021 \n We’re constantly working towards making CoverGo a workplace that you love coming to. We deeply believe that bringing together a diversity of thoughts, expressions, and perspectives is key to building the best culture for equally diverse communities all over the world \n About the Role A cloud technology-focused individual providing design and delivery expertise for forward-looking solutions in a modern cloud-based insurance environment. The successful candidate will work directly with clients, assessing their needs, designing tailored solutions, and supporting business initiatives ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CoverGo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cloud-architecture",
            "Insurance-technology",
            "Enterprise-solutions",
            "Technical-consulting"
        ],
        "applyUrl": "https://himalayas.app/companies/covergo/jobs/solutions-architect-insurance-fully-remote-9403788953",
        "logo": "https://cdn-images.himalayas.app/8sxnxmhnwtyxnlx3dmgxx3lbjcma",
        "companyLogo": "https://cdn-images.himalayas.app/8sxnxmhnwtyxnlx3dmgxx3lbjcma",
        "image": "https://cdn-images.himalayas.app/8sxnxmhnwtyxnlx3dmgxx3lbjcma",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789700406-21",
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
        "id": "job-1789700406-22",
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
        "id": "job-1789700406-23",
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
        "id": "job-1789700406-24",
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
        "id": "job-1789700406-25",
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
        "id": "job-1789700406-26",
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
        "id": "job-1789700406-27",
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
        "id": "job-1789700406-28",
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
        "id": "job-1789700406-29",
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
        "id": "job-1789700406-30",
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
        "id": "job-1789700406-31",
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
        "id": "job-1789700406-32",
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
        "id": "job-1789700406-33",
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
        "id": "job-1789700406-34",
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
        "id": "job-1789700406-35",
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
        "id": "job-1789700406-36",
        "title": "Principal Information Security Manager - remote working within Germany",
        "title_ar": "مدير وقائد فريق (Principal Information Security Manager - remote working within Germany)",
        "company": "Staffbase",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Staffbase \n We inspire people to achieve great things together. Our mission is to help organizations unlock the power of inspirational communication with the first AI-native Employee Experience Platform . Our industry-leading and award-winning agentic AI communications channels - intranet, employee app and email solutions - create engaging experiences that connect and empower employees. \n Headquartered in Chemnitz, Germany and New York City, with offices in Berlin, London, Sydney, Tokyo, Prague, and Minneapolis–St. Paul, our diverse team of 550+ employees supports 1,500+ customers—reaching over 14 million employees—in transforming their employee experience. We are proud to be a Unicorn company—privately valued at over $1 billion—demonstrating strong growth, innovation, and lasting impact in our industry. Together, we’re shaping the future of workplace communication. Our information security program is fit for purpose and operationally sound. The next chapter is about making it investor-ready, AI-efficient, and capable of sustaining enterprise customer trust at scale. \n This is not a build-from-scratch role. It is a step up in maturity: fewer manual processes and sharper governance. The position sits at the center of the InfoSec team; you coordinate across teams, own outcomes and represent the function. You are comfortable being the person customers and auditors talk to. You think in programs and systems, not tasks. You identify where manual effort can be replaced by too",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Staffbase. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/staffbase/principal-information-security-manager-remote-working-within-germany-234823",
        "logo": "https://logo.clearbit.com/staffbase.com",
        "companyLogo": "https://logo.clearbit.com/staffbase.com",
        "image": "https://logo.clearbit.com/staffbase.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-37",
        "title": "Forward Deployed Engineer",
        "title_ar": "مهندس ومطور برمجيات (Forward Deployed Engineer)",
        "company": "Auterion",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "As a Forward Deployed Engineer at Auterion, you will play a pivotal role in the successful development, integration and deployment of Auterion-powered drone systems. \n In this role, you will collaborate closely with the production, hardware engineering, and firmware/software teams, as well as operations, ensuring that every platform transitions smoothly from an airframe concept into a fully validated flying robot ready for deployment. You will serve as the primary technical interface for partners, work closely with them to understand their technical requirements, configure and adapt existing solutions, contribute to core software development, and ensure successful implementation. \n This role is ideal for an engineer who enjoys combining hands-on technical work with customer collaboration and system-level problem solving, bridging the gap between hardware, firmware, and real-world flight performance. \n Responsibilities and Duties \n Operate in a highly hands-on environment with evolving system requirements, rapidly iterating across hardware and software integration challenges. \n Manage software releases and perform firmware flashing and configuration using PX4 or adjacent autopilot ecosystems, including sensor calibration, ESC tuning, and system bring-up. \n Provide deep avionics and airframe expertise, including autopilot tuning, sensor and payload integration, power systems and airworthiness considerations. \n Work independently to troubleshoot integration and flight-readiness ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Auterion. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/auterion/forward-deployed-engineer-munich-783",
        "logo": "https://logo.clearbit.com/auterion.com",
        "companyLogo": "https://logo.clearbit.com/auterion.com",
        "image": "https://logo.clearbit.com/auterion.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-38",
        "title": "Enterprise Account Executive",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Enterprise Account Executive)",
        "company": "Develocity",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Who We Are \n AI is changing how software gets built. Code production is becoming a commodity. The focus is shifting from writing code to orchestrating, verifying, and governing change – and the toolchain is the new constraint. \n We're at the center of this shift. We build Develocity, the context-engineering layer for AI-driven software delivery used by some of the world's leading software organizations – Netflix, Airbnb, Spotify, SAP, major global banks, and hundreds more. Develocity helps software teams achieve delivery excellence through deep observability, build and test acceleration and efficiency, and AI-powered intelligence across the entire toolchain – for Gradle Build Tool, Apache Maven™, sbt, Bazel, npm, and Python, with support for additional build tools coming soon. \n We are an AI-native company. AI is not a feature we're bolting on – it's central to how we work, how we think about our product, and where we're heading. We're investing deeply in making Develocity's unique data and decades of domain expertise accessible to both humans and AI agents, with trust, evidence, and explainability at the core of everything we build. \n We have partnered with the Apache Software Foundation, the Commonhaus Foundation, the Micronaut Foundation, and other OSS projects such as DuckDuckGo, Spring, Quarkus, Kotlin, JUnit, AndroidX, and many more to bring the values of Develocity also to the OSS Community. \n Our Values \n Seek to Understand: Everything starts with listening and unders",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Develocity. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/develocity/enterprise-account-executive-germany-446095",
        "logo": "https://logo.clearbit.com/develocity.com",
        "companyLogo": "https://logo.clearbit.com/develocity.com",
        "image": "https://logo.clearbit.com/develocity.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-39",
        "title": "Site Reliability Engineer – Quantum Computing (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Site Reliability Engineer – Quantum Computing (f/m/d))",
        "company": "eleQtron GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Mid, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, Hamburg, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "eleQtron develops and operates full-stack quantum computers based on trapped-ion technology. Quantum computing is a new computing paradigm rapidly approaching commercial viability. Our unique approach combines laser-cooled trapped ions with microwave control and tailored magnetic fields. Our next-generation computing machines under development will be able to find solutions to problems that are out of reach today, thus enabling new innovative products and services for a brighter future. We are looking for a Site Reliability Engineer (m/f/d) to join our team in Hamburg. You will maintain and support the reliability, scalability, and operability of the software systems powering our trapped-ion quantum computers. Responsibilities: As a Site Reliability Engineer – Quantum Computing (f/m/d), you will contribute to the reliability, stability, and operability of our software that operates our quantum computers. You will work closely with software engineers, firmware developers, physicists, and hardware engineers in an interdisciplinary environment, gaining deep insight into a cutting-edge technical domain. This is an on-site position in Siegen or Hamburg. Depending on your background, you will work on the following tasks: Contribute to the reliability of the quantum control and quantum program execution stack Support the definition and refinement of SLIs, SLOs, error budgets, and operational guardrails Implement and maintain observability across software, infrastructure, and hardwar",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eleQtron GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Quantum firmware"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eleqtron-gmbh/site-reliability-engineer-quantum-computing-hamburg-462919",
        "logo": "https://logo.clearbit.com/eleqtrongmbh.com",
        "companyLogo": "https://logo.clearbit.com/eleqtrongmbh.com",
        "image": "https://logo.clearbit.com/eleqtrongmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-40",
        "title": "QA Engineer - Quantum Computing (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (QA Engineer - Quantum Computing (m/w/d))",
        "company": "eleQtron GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Siegen, Nordrhein-Westfalen, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "eleQtron develops and operates full-stack quantum computers based on trapped-ion technology. Quantum computing is a new computing paradigm rapidly approaching commercial viability. Our unique approach combines laser-cooled trapped ions with microwave control and tailored magnetic fields. Our next-generation computing machines under development will be able to find solutions to problems that are out of reach today, thus enabling new innovative products and services for a brighter future. We are looking for a QA Engineer (m/f/d) to join us in Hamburg or Siegen. You will take ownership of quality across our software platform, from compilation services and the public API to the interfaces used by our operators and customers. This is a build-from-scratch role : there is no ready-made test suite waiting for you, and no expensive tool that does the thinking for you. You define what good testing looks like here, and then you build it. You are as comfortable writing a test strategy on a blank page as you are writing the automation that implements it in code. Responsibilities: Own the testing approach for our platform end-to-end: define what to test, at which level, and why Write test concepts from scratch — risk-based, covering unit, integration, system, and end-to-end levels, and turn them into running, maintained automation Build and own our test automation frameworks in code, integrated directly into our CI/CD pipelines, using your defined tooling Do the exploratory and manual test",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eleQtron GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Quantum firmware"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eleqtron-gmbh/qa-engineer-quantum-computing-siegen-152999",
        "logo": "https://logo.clearbit.com/eleqtrongmbh.com",
        "companyLogo": "https://logo.clearbit.com/eleqtrongmbh.com",
        "image": "https://logo.clearbit.com/eleqtrongmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-41",
        "title": "Werkstudent Berlin (m/w/d)",
        "title_ar": "Werkstudent Berlin (m/w/d) (أخرى)",
        "company": "My Jewellery",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Entry, parttime minijob",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlijn, Brandenburg, Duitsland",
        "location_ar": "Berlijn, Brandenburg, Duitsland",
        "salary": "Competitive",
        "description": "Als Werkstudent/-in in unserer Boutique in Berlin bist du das Gesicht von My Jewellery. Du begrüßt Kund/-innen mit viel Begeisterung, gibst individuelle Styling-Tipps und sorgst dafür, dass jede Person die Boutique mit einem Lächeln verlässt. Gemeinsam mit deinem Team schaffst du eine inspirierende und einladende Atmosphäre im Store. Du sorgst dafür, dass die Boutique immer gepflegt aussieht und präsentierst die neuesten Kollektionen auf eine ansprechende Weise. Deine Aufgaben Du unterstützt und berätst Kund/-innen und sorgst für persönlichen Service Du stellst sicher, dass die Boutique jederzeit die typische My Jewellery Atmosphäre ausstrahlt Du hältst den Store ordentlich, organisiert und visuell ansprechend Du bleibst immer up to date bei unseren Kollektionen und Trends Du unterstützt dein Team auch in Stoßzeiten und sorgst für eine positive Teamdynamik Du bist enthusiastisch, kontaktfreudig und hast ein Gespür für Fashion Du bist flexibel und auch abends sowie am Wochenende verfügbar Du liebst den Kontakt mit Kund/-innen und denkst kommerziell Du arbeitest proaktiv und bringst gerne eigene Initiative ein Du wohnst in oder in der Nähe von Berlin. Über My Jewellery My Jewellery wurde 2011 gegründet und zählt heute zu den am schnellsten wachsenden Marken- und E-Commerce Unternehmen der Niederlande, mit internationalem Wachstum. Wir entwickeln Kollektionen und Kampagnen, die das Leben unserer Community jeden Tag ein kleines bisschen schöner machen. Gemeinsam mit über 1.000 Ko",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة My Jewellery. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Boutiques"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/my-jewellery/werkstudent-berlin-berlijn-195749",
        "logo": "https://logo.clearbit.com/myjewellery.com",
        "companyLogo": "https://logo.clearbit.com/myjewellery.com",
        "image": "https://logo.clearbit.com/myjewellery.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-42",
        "title": "Kubernetes Administrator/Private Cloud Engineer (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Kubernetes Administrator/Private Cloud Engineer (m/w/d))",
        "company": "virtual7 GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Homeoffice",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Als IT-Dienstleister treiben wir die Digitalisierung des öffentlichen Sektors voran und schaffen echten Mehrwert für Millionen Menschen in Deutschland. Wir können vieles richtig gut, aber eben noch nicht alles. Darum suchen wir immer wieder neue Kolleg:innen, die mit ihren Ideen, ihrem Können und Engagement etwas bewegen wollen. Fühlst du dich angesprochen? Dann gestalte Deine Welt zum Besseren und werde Teil unseres Customer Clusters Justice. DEINE MISSION Als Kubernetes Administrator/Private Cloud Engineer (m/w/d) stellst du sicher, dass unsere Container-Infrastruktur reibungslos läuft und zukunftsfähig bleibt. Deine Mission ist es, eine hochverfügbare, skalierbare und sichere Plattform zu schaffen, auf der unsere Anwendungen zuverlässig betrieben und weiterentwickelt werden können. Gemeinsam mit deinem Team treibst du die Automatisierung und Optimierung unserer Cloud-Umgebung voran. Deine Aufgaben Beratung, Konzeption und Implementierung von Private Cloud Plattformen Zusammenarbeit mit weiteren Fachteams zur Bereitstellung der nötigen Infrastruktur Messung, Analyse und Optimierung der Performance und Stabilität Aufbau und Betrieb verteilter Systeme unter Anwendung des DevOps-Ansatzes Förderung von Continuous Integration & Deployment-Prozessen für eine effiziente und schnelle Bereitstellung der Lösungen Fehleranalyse und -behebung in Container-Umgebungen DAS IST UNS WICHTIG Mindestens 5 Jahre relevante Berufserfahrung im Cloud-/Plattformbetrieb Erfahrung in der agilen Entwi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة virtual7 GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer cluster justice",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/virtual7-gmbh/remote-kubernetes-administrator-private-cloud-engineer-karlsruhe-36018",
        "logo": "https://logo.clearbit.com/virtual7gmbh.com",
        "companyLogo": "https://logo.clearbit.com/virtual7gmbh.com",
        "image": "https://logo.clearbit.com/virtual7gmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-43",
        "title": "Senior Java Fullstack Developer (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Java Fullstack Developer (m/w/d))",
        "company": "virtual7 GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Kaarst, Nordrhein-Westfalen, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Als IT-Dienstleister treiben wir die Digitalisierung des öffentlichen Sektors voran und schaffen echten Mehrwert für Millionen Menschen in Deutschland. Wir können vieles richtig gut, aber eben noch nicht alles. Darum suchen wir immer wieder neue Kolleg:innen, die mit ihren Ideen, ihrem Können und Engagement etwas bewegen wollen. Fühlst du dich angesprochen? Dann gestalte Deine Welt zum Besseren und werde Teil unseres Customer Clusters Finance. DEINE MISSION Als Senior Java Fullstack Developer (m/w/d) unterstützt du ein Großprojekt der zentralen IT-Vorhaben der deutschen Steuerverwaltung. Im Fokus steht ein Verfahren, das die übergreifenden Geschäftsprozesse zwischen verschiedenen Fachverfahren steuert. Deine Aufgaben Konzeption, Modellierung und Umsetzung von fachlichen Prozessen unter Einsatz von BPMN (Camunda) – von der Anforderungsaufnahme bis zur technischen Umsetzung Entwicklung und Weiterentwicklung von performanten Backend-Komponenten auf Basis von Java (17/21) und Spring Boot zur Unterstützung komplexer, verfahrensübergreifender Geschäftsprozesse Design und Implementierung von Schnittstellen (REST, SOAP, Messaging) inklusive Abstimmung mit angrenzenden Systemen und Teams Erarbeitung von technischen Lösungsdesigns für systemübergreifende Prozessabläufe sowie deren Integration in bestehende Architekturen Aktive Mitwirkung bei der Transformation und Verarbeitung großer Datenmengen innerhalb verteilter Systemlandschaften Abstimmung mit Projektbeteiligten sowie Teilnahme a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة virtual7 GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer cluster finance"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/virtual7-gmbh/senior-java-fullstack-developer-kaarst-367555",
        "logo": "https://logo.clearbit.com/virtual7gmbh.com",
        "companyLogo": "https://logo.clearbit.com/virtual7gmbh.com",
        "image": "https://logo.clearbit.com/virtual7gmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-44",
        "title": "AI Solution Architect (m/w/d)",
        "title_ar": "AI Solution Architect (m/w/d) (برمجة وتكنولوجيا)",
        "company": "virtual7 GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Homeoffice",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Als IT-Dienstleister treiben wir die Digitalisierung des öffentlichen Sektors voran und schaffen echten Mehrwert für Millionen Menschen in Deutschland. Wir können vieles richtig gut, aber eben noch nicht alles. Darum suchen wir immer wieder neue Kolleg:innen, die mit ihren Ideen, ihrem Können und Engagement etwas bewegen wollen. Fühlst du dich angesprochen? Dann gestalte Deine Welt zum Besseren und werde Teil unseres Customer Cluster Environment, Transportation & Energy. DEINE MISSION Als AI Solution Architect (m/w/d) gestaltest Du die KI-/ML-Gesamtarchitektur für komplexe Enterprise-Umgebungen in der Cloud mit Schwerpunkt Microsoft Azure. Du verbindest fundiertes Know-how in ML Engineering, RAG-Architekturen und MLOps, um KI-Lösungen produktionsreif, skalierbar und sicher umzusetzen. Dabei arbeitest Du eng mit technischen Expert:innen, Fachbereichen und Entscheidungsträgern zusammen und trägst maßgeblich dazu bei, innovative KI-Lösungen erfolgreich zu etablieren. Deine Aufgaben: Entwurf und Weiterentwicklung der KI-/ML-Gesamtarchitektur als Enterprise-KI-Plattform mit Schwerpunkt Microsoft Azure Technische Leitung von ML-Pipeline-Projekten, insbesondere in den Bereichen Training, Deployment, Monitoring und Drift Detection Konzeption und Optimierung von RAG-Architekturen, beispielsweise hinsichtlich Chunking, Retrieval, Guardrails und Context Orchestration Definition und Weiterentwicklung von MLOps-Strategien einschließlich CI/CD für Modelle, Experiment-Tracking und Model Reg",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة virtual7 GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Transportation & energy",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/virtual7-gmbh/remote-ai-solution-architect-nurnberg-mittelfranken-469789",
        "logo": "https://logo.clearbit.com/virtual7gmbh.com",
        "companyLogo": "https://logo.clearbit.com/virtual7gmbh.com",
        "image": "https://logo.clearbit.com/virtual7gmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-45",
        "title": "Senior IT Architect (m/w/d)",
        "title_ar": "Senior IT Architect (m/w/d) (برمجة وتكنولوجيا)",
        "company": "virtual7 GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Homeoffice",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Als IT-Dienstleister treiben wir die Digitalisierung des öffentlichen Sektors voran und schaffen echten Mehrwert für Millionen Menschen in Deutschland. Wir können vieles richtig gut, aber eben noch nicht alles. Darum suchen wir immer wieder neue Kolleg:innen, die mit ihren Ideen, ihrem Können und Engagement etwas bewegen wollen. Fühlst du dich angesprochen? Dann gestalte Deine Welt zum Besseren und werde Teil unseres Customer Clusters Healthcare. DEINE MISSION Als Senior IT Architect (m/w/d) gestaltest du die technische Zukunft unserer Healthcare-Lösungen. Du analysierst komplexe Anforderungen im Umfeld der gesetzlichen Krankenversicherung und entwickelst daraus sichere, skalierbare und nachhaltige IT-Architekturen. Dabei übernimmst du die fachliche und technische Verantwortung für Architekturentscheidungen und begleitest deren Umsetzung gemeinsam mit Entwicklungsteams und Stakeholdern. Deine Aufgaben Entwicklung und technische Konzeption moderner Lösungsarchitekturen im GKV-Umfeld Verantwortung für Architekturentscheidungen sowie Definition von Architekturstandards und technischen Leitplanken Analyse fachlicher und technischer Anforderungen und Überführung in zukunftsfähige Lösungsdesigns Sicherstellung von IT-Sicherheit, Datenschutz und Compliance-Anforderungen im Healthcare-Umfeld Beratung von Projektteams und Stakeholdern in technischen Fragestellungen Begleitung der technischen Umsetzung sowie Unterstützung bei komplexen Architekturthemen Bewertung und Einführung geeigne",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة virtual7 GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/virtual7-gmbh/remote-senior-it-architect-karlsruhe-244126",
        "logo": "https://logo.clearbit.com/virtual7gmbh.com",
        "companyLogo": "https://logo.clearbit.com/virtual7gmbh.com",
        "image": "https://logo.clearbit.com/virtual7gmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-46",
        "title": "Senior Java Backend Developer (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Java Backend Developer (m/w/d))",
        "company": "virtual7 GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Homeoffice",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Als IT-Dienstleister treiben wir die Digitalisierung des öffentlichen Sektors voran und schaffen echten Mehrwert für Millionen Menschen in Deutschland. Wir können vieles richtig gut, aber eben noch nicht alles. Darum suchen wir immer wieder neue Kolleg:innen, die mit ihren Ideen, ihrem Können und Engagement etwas bewegen wollen. Fühlst du dich angesprochen? Dann gestalte Deine Welt zum Besseren und werde Teil unseres Customer Clusters Healthcare. DEINE MISSION Als Senior Java Backend Developer (m/w/d) entwickelst du leistungsfähige Backend-Lösungen für anspruchsvolle Fachverfahren im Umfeld der gesetzlichen Krankenversicherung. Dabei setzt du komplexe fachliche Anforderungen um und bringst deine technische Expertise ein, um stabile, sichere und zukunftsfähige Anwendungen zu gestalten und kontinuierlich weiterzuentwickeln. Deine Aufgaben Entwicklung und Weiterentwicklung moderner Backend-Anwendungen auf Basis von Java sowie Spring / Spring Boot Konzeption, Implementierung und Integration von REST-Schnittstellen Umsetzung komplexer fachlicher Anforderungen im Umfeld der gesetzlichen Krankenversicherung Entwicklung performanter und wartbarer Softwarelösungen unter Berücksichtigung von Qualitäts- und Sicherheitsanforderungen Arbeit mit SQL und DB2 zur Verarbeitung und Verwaltung fachlicher Daten Analyse, Optimierung und Weiterentwicklung bestehender Anwendungen und Komponenten Erstellung automatisierter Tests sowie Sicherstellung der Softwarequalität Technische Abstimmung mit Fac",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة virtual7 GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/virtual7-gmbh/remote-senior-java-backend-developer-karlsruhe-241557",
        "logo": "https://logo.clearbit.com/virtual7gmbh.com",
        "companyLogo": "https://logo.clearbit.com/virtual7gmbh.com",
        "image": "https://logo.clearbit.com/virtual7gmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-47",
        "title": "Senior Oracle Data Engineer (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Oracle Data Engineer (m/w/d))",
        "company": "virtual7 GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Homeoffice",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Als IT-Dienstleister treiben wir die Digitalisierung des öffentlichen Sektors voran und schaffen echten Mehrwert für Millionen Menschen in Deutschland. Wir können vieles richtig gut, aber eben noch nicht alles. Darum suchen wir immer wieder neue Kolleg:innen, die mit ihren Ideen, ihrem Können und Engagement etwas bewegen wollen. Fühlst du dich angesprochen? Dann gestalte Deine Welt zum Besseren und werde Teil unseres Customer Clusters Finance. DEINE MISSION Als Senior Oracle Data Engineer (m/w/d) übernimmst du fachliche Verantwortung für anspruchsvolle Datenbanklösungen und gestaltest performante, sichere Anwendungen auf Basis von Oracle-Technologien. Du bringst deine Expertise in SQL, PL/SQL und Oracle Data Integrator ein, koordinierst das Entwicklerteam und sorgst mit sicherem Auftreten dafür, dass Projektleitung und Endkunde jederzeit bestens abgeholt sind. Deine Aufgaben: Entwicklung und Weiterentwicklung von Datenbanklösungen auf Basis von Oracle sowie SQL und PL/SQL Erfahrung in der Konzeption und Umsetzung von Integrationsprozessen mit Oracle Data Integrator (ODI) sind wünschenswert Übernahme fachlicher Verantwortung für Themen und Anforderungen im Projektkontext Aktive Unterstützung und Koordination des Entwicklerteams Zügige Einarbeitung in neue Technologien und Themenstellungen Nutzung von Jira und Confluence zur Planung, Dokumentation und Nachverfolgung der Entwicklungsarbeiten Sicherer Umgang mit Git und gängigen Entwicklungswerkzeugen wie Visual Studio Code Moder",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة virtual7 GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer cluster finance",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/virtual7-gmbh/remote-senior-oracle-data-engineer-karlsruhe-51203",
        "logo": "https://logo.clearbit.com/virtual7gmbh.com",
        "companyLogo": "https://logo.clearbit.com/virtual7gmbh.com",
        "image": "https://logo.clearbit.com/virtual7gmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-48",
        "title": "Senior People Partner (all genders)",
        "title_ar": "Senior People Partner (all genders) (تصميم وإبداع)",
        "company": "Distribusion Technologies",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About us Distribusion is the world’s leading ground transportation marketplace and gives travellers seamless access to ground transportation online, from search to ticket purchase. We have built a cutting-edge B2B technology platform that connects bus, rail, and ferry operators in 70+ countries with the biggest online retailers, including Google Maps and Booking.com . We are shaping the future of travel and building the largest global network of transport providers and retailers. We are one of the fastest-growing startups in travel, backed by two leading VCs (TQ Ventures & Lightrock), and now, following our recent $80m Series C funding, we are ready to push beyond. To achieve our ambitious goals, we’re looking for a Senior People Partner to join our People team and support our Engineering & Product teams. You will provide strategic business partnerships and coaching, develop people-related solutions to meet critical business needs and positively shape the Distribusion people experience. What you will do: You will be the first People Partner and work closely with the VP of People to onboard yourself into Distribusion's current People philosophies, practices, and processes. You will partner with the Engineering and Product functions to sustainably achieve their growth and development goals. You will partner with the other People functions on all aspects of employment experience. You will build our management team’s capacity through coaching and influencing. You will contribute ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Distribusion Technologies. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "People"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/distribusion-technologies/senior-people-partner-all-genders-berlin-184793",
        "logo": "https://logo.clearbit.com/distribusiontechnologies.com",
        "companyLogo": "https://logo.clearbit.com/distribusiontechnologies.com",
        "image": "https://logo.clearbit.com/distribusiontechnologies.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-49",
        "title": "Senior Technical Architect – Hybrid (Product / Platform) (m/f/d)",
        "title_ar": "Senior Technical Architect – Hybrid (Product / Platform) (m/f/d) (برمجة وتكنولوجيا)",
        "company": "Implico Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Your mission Cloud Native Node.js & AI-enabled Product with SAP Private Cloud Integration | Senior / Principal Level As Senior Technical Architect – Hybrid, you own the technical design across our two worlds: the cloud-native, AI-enabled product line built on modern Node.js architectures, and its integration into the SAP Private Cloud platform landscape. Your focus is approximately 70% Public Cloud product architecture and 30% SAP Private Cloud platform architecture. You are the architect who makes the hybrid seam work – ensuring that public cloud innovation and the SAP core evolve as one coherent, scalable, and future-proof landscape rather than two disconnected estates. Your Responsibilities Cloud-Native Product Architecture (Primary Focus) Design of microservices architectures on Node.js API-first and event-driven architecture concepts Definition of service boundaries, data flows, and integration patterns Ensuring multi-tenant capability and tenant isolation Non-functional design: performance, scalability, resilience, cost AI Integration in Product Technical architecture for AI features in the product Integration of LLMs or AI services within defined guardrails Design of RAG and agentic patterns over product and platform data Performance and cost optimization of AI-driven features Hybrid Integration Architecture (Public ↔ Private Cloud) Design of the integration layer between cloud-native products and SAP S/4HANA Private Cloud API and event contracts across the hybrid boun",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Implico Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ewm",
            "Sap",
            "Cap",
            "Rap"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/implico-gmbh/senior-technical-architect-hybrid-product-platform-hamburg-309009",
        "logo": "https://logo.clearbit.com/implicogmbh.com",
        "companyLogo": "https://logo.clearbit.com/implicogmbh.com",
        "image": "https://logo.clearbit.com/implicogmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-50",
        "title": "SAP Account Executive (m/w/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (SAP Account Executive (m/w/d))",
        "company": "Implico Gmbh",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Deine Aufgaben Du weißt, dass du zu den Besten gehörst.  Dein Umfeld weiß es auch.  Aber deine aktuelle Rolle gibt dir nicht mehr den Raum, den du verdienst.   Du hast in den letzten Jahren Deals geschlossen, die andere für unmöglich hielten. Du kennst das SAP-Ökosystem nicht aus Präsentationen – sondern aus echten Co-Sell-Gesprächen, aus Partnerverhandlungen, aus Abschlüssen, die du persönlich über die Linie gebracht hast.  Jetzt fragst du dich: Gibt es eine Rolle, die meinem Anspruch wirklich gerecht wird?   Die gibt es. Und du liest sie gerade.  Die Rolle  Dies ist eine reine New-Business-Position mit klarer strategischer Bedeutung für Implicos Wachstum in SAP-zentrierten Prozessindustrien. Du verantwortest die Gewinnung neuer Kundenlogos in den Segmenten Landwirtschaft, Bergbau, Chemie sowie Zement und Baustoffe – in enger Co-Sell-Partnerschaft mit SAP Account Teams und Industry Business Units.  Du bewegst dich in einem Umfeld, in dem Vertrauen, Substanz und Marktkenntnisse entscheiden – nicht Lautstärke.  Deine Verantwortung Vollständige Quota-Verantwortung für neues ARR aus Prozessindustrie-Kunden Identifikation und Qualifizierung von Opportunities aus der SAP-ADRM-Pipeline sowie dem eigenen Netzwerk Aufbau und Pflege belastbarer Co-Sell-Beziehungen mit SAP SCM Sales Reps und IBU-Kontakten Steuerung komplexer Sales-Zyklen von 3–9 Monaten mit mehreren Entscheidungsträgern auf IT-, Operations- und C-Level-Ebene Enge Zusammenarbeit mit Solution Architects für technische De",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Implico Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/implico-gmbh/sap-account-executive-hamburg-226869",
        "logo": "https://logo.clearbit.com/implicogmbh.com",
        "companyLogo": "https://logo.clearbit.com/implicogmbh.com",
        "image": "https://logo.clearbit.com/implicogmbh.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-51",
        "title": "Senior Fullstack Software Engineer, Analyze & Report (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Fullstack Software Engineer, Analyze & Report (f/m/d))",
        "company": "Solactive",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Company Description Since its creation in 2007 in the financial city of Frankfurt am Main, Solactive AG has grown to one of the key players in the indexing space. The German multi-asset index provider focusses on tailor-made indices, offering to its clients a faster service, with greater flexibility and at a reasonable cost. Solactive AG and its subsidiaries have become one of the fastest growing index providers over the past few years and support the leading investment banks and asset managers across the globe. We have gained global recognition for our role in the Exchange Traded Fund (ETF) industry, where we rank among the top providers worldwide for underlying indices. We also excel in diverse areas such as Structured Products and investment mandates, showcasing the wide range of our capabilities. The impact and value we bring to the market is palpable, but also in the reputation we have proudly built by being close to our customers, solidifying Solactive AG as a trusted and reliable ally in the ever-evolving global financial landscape. Job Overview As a Senior Fullstack Software Engineer in the ANR team, you will be primarily abackend engineer with fullstack capabilities (~80% backend / 20% frontend). You willdesign, build, and operate the services and pipelines that aggregate financial data,render client-facing documents, and deliver them through APIs and automated pushmechanisms. You will also contribute to the internal tooling and lightweight frontendsthat support the ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Solactive. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/solactive/senior-fullstack-software-engineer-analyze-report-berlin-333881",
        "logo": "https://logo.clearbit.com/solactive.com",
        "companyLogo": "https://logo.clearbit.com/solactive.com",
        "image": "https://logo.clearbit.com/solactive.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-52",
        "title": "Principal Software Developer (f/m/d) - Market Data",
        "title_ar": "مهندس ومطور برمجيات (Principal Software Developer (f/m/d) - Market Data)",
        "company": "Solactive",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Frankfurt am Main",
        "location_ar": "Frankfurt am Main",
        "salary": "Competitive",
        "description": "Company Description Solactive AG is a FinTech company operating globally and growing at a fast pace, headquartered in Frankfurt. Since 2007, we develop tailor-made and multi-asset class index solutions for ETFs and other index-linked investment products for the leading global investment banks and asset managers as our clients. Flexibility, efficiency, and providing the highest quality are at the heart and soul of our business philosophy. We are now hiring! Job Overview Our Market Data team forms an essential link between our business and infrastructure teams: it defines and implements business processes in data pipelines, monitors existing services, and thereby provides the best service to our customers. As a Senior Software Developer in our Market Data team, you will be working on a broad set of real-world problems. Highly effective data management, resilience, and fail-over strategies are some of our most important topics. In close collaboration with our business analysts and data engineers, you will create high-performance data processing solutions that scale using emerging technologies and approaches and help us define new best practices. Our continuous business growth and high requirements on accuracy, performance, and availability will provide you with a lot of engineering challenges and opportunities to contribute, to learn, and to grow as part of our team. You love solving complex problems, building performant, scalable, low latency, and highly available services. The",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Solactive. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/solactive/principal-software-developer-market-data-frankfurt-am-main-171143",
        "logo": "https://logo.clearbit.com/solactive.com",
        "companyLogo": "https://logo.clearbit.com/solactive.com",
        "image": "https://logo.clearbit.com/solactive.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-53",
        "title": "Working Student AI Enablement (m/f/d)",
        "title_ar": "Working Student AI Enablement (m/f/d) (برمجة وتكنولوجيا)",
        "company": "Edri",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Entry, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Essen",
        "location_ar": "Essen",
        "salary": "Competitive",
        "description": "Your mission Help design the EDRI AI curriculum: a role-based structure from a company-wide baseline to department-specific deep dives Build the first full course end-to-end for the EDRI learning platform, from outline and script to published, versioned module Produce learning content that people finish: worked examples, exercises, short videos, one-pagers, and scenario-based checks Design and run engaging live formats — prompting clinics, lunch & learns, use case labs — and help launch the AI champions network across departments Talk to colleagues in different departments, find out where the real gaps are, and turn that into a prioritized content backlog Keep the documentation trail for our AI literacy measures under Article 4 of the EU AI Act: audiences, versions, rationale, dates Track adoption and learning metrics and report them to the Head of AI Strategy and HR Work with the AI Unit and HR to make enablement part of onboarding and everyday work, not a one-off campaign Bonus: contribute to the learning platform technically — we build our internal AI portal in-house, and there is room to help develop it Your profile Enrolled student (Bachelor's or Master's) — computer science, data science, game engineering, or anything else you can argue for You use generative AI (Claude code, Codex) actively to build tools, dashboards, games etc. yourself, regularly, and you keep up with how they change Strong writing and communication skills in English; German is a plus Ability to expl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Edri. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/edri/working-student-ai-enablement-essen-439217",
        "logo": "https://logo.clearbit.com/edri.com",
        "companyLogo": "https://logo.clearbit.com/edri.com",
        "image": "https://logo.clearbit.com/edri.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-54",
        "title": "Werkstudent Legal & Finance (m/w/d)",
        "title_ar": "Werkstudent Legal & Finance (m/w/d) (مالية ومحاسبة)",
        "company": "Edri",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Entry, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Essen",
        "location_ar": "Essen",
        "salary": "Competitive",
        "description": "Your mission Du willst dein theoretisches Wissen in der Praxis anwenden und dich in einem dynamischen Umfeld weiterentwickeln? Dann unterstütze unser Team als Werkstudent (m/w/d) in gleich vier spannenden Fachbereichen: Legal, Finance, Controlling und Treasury. Du erhältst umfassende Einblicke in die wirtschaftlichen und rechtlichen Abläufe eines modernen Unternehmens und arbeitest aktiv an vielfältigen Aufgaben mit. Legal : Unterstützung bei Vertragsprüfung und -verwaltung, rechtlicher Recherche, Compliance- und Datenschutzthemen Finance, Accounting & Taxation : Mitarbeit in der Buchhaltung, steuerliche Zuarbeiten, Stammdatenpflege und Kontenabstimmung Controlling : Mitwirkung bei Reportings, Kennzahlenanalysen, Optimierungsprojekten und Management-Präsentationen Treasury : Unterstützung bei Liquiditätsplanung, Zahlungsverkehr und Projekten im Cash- und Risikomanagement Your profile Eingeschrieben in einem relevanten Studiengang (z. B. BWL, Finance, Steuern, Rechtswissenschaften, (Wirtschafts-)Informatik, Data Analytics, Energiewirtschaft - andere willkommen) Sehr gute Deutsch- und gute Englischkenntnisse Vorerfahrung in den Bereichen (Prozessautomatisierung und KI) in Geschäftsprozessen (z.B. Nutzung von Claude Code, OpenAI Codex, n8n/Zapier/Make.com, Copilot Studio, etc.) und/oder dem Bereich Legal Tech & Operations Why us? Der Mensch steht im Mittelpunkt: Werde ein Teil eines dynamischen, ehrgeizigen und agilen Teams, das Lösungen für den eMobility Markt entwickelt und se",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Edri. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/edri/werkstudent-legal-finance-essen-167154",
        "logo": "https://logo.clearbit.com/edri.com",
        "companyLogo": "https://logo.clearbit.com/edri.com",
        "image": "https://logo.clearbit.com/edri.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-55",
        "title": "Team Lead AI Engineering (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Team Lead AI Engineering (f/m/d))",
        "company": "Vestigas",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München (Hybrid)",
        "location_ar": "München (Hybrid)",
        "salary": "Competitive",
        "description": "We're digitizing the construction industry – are you in? At VESTIGAS, you build the digital backbone of the construction supply chain. We turn purchase orders, delivery notes, and invoices into a digital, legally compliant platform used in everyday operations by construction companies and suppliers. You’ll work on a product with real market traction in the DACH mid-market, ship iteratively, and take ownership of solutions that must work in the field—not just in theory. Your Role As Team Lead – AI Engineering, you'll own the AI infrastructure and capabilities that power our supply chain platform end to end – from pipeline design to production deployment. You bring prior leadership experience and are ready to lead a team of AI engineers: setting technical direction, growing your team's capabilities, and making sure the team consistently delivers reliable, scalable AI systems. The Technical Challenge Your team will tackle problems like extracting structured data reliably from many different documents, building uncertainty estimation so the system knows when to flag a document for human review instead of silently guessing, and automatically reconciling purchase orders, delivery notes, and invoices against each other – all within legal and compliance requirements that leave no room for \"close enough.\" This is a domain where clean benchmark metrics mean far less than robustness against real documents nobody has seen before – and you'll set the technical direction for how the team n",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Vestigas. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Mlops",
            "Machine learning",
            "End-to-end ml lifecycle"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/vestigas/team-lead-ai-engineering-munchen-hybrid-12318",
        "logo": "https://logo.clearbit.com/vestigas.com",
        "companyLogo": "https://logo.clearbit.com/vestigas.com",
        "image": "https://logo.clearbit.com/vestigas.com",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789700406-56",
        "title": "Senior Software Architect (C#/Angular/AI First) - GovTech SaaS company",
        "title_ar": "Senior Software Architect (C#/Angular/AI First) - GovTech SaaS company (برمجة وتكنولوجيا)",
        "company": "Truelogic",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mexico",
        "location_ar": "Mexico",
        "salary": "Competitive",
        "description": "About Truelogic \n At Truelogic we are a leading provider of nearshore staff augmentation services headquartered in New York. For over two decades, we’ve been delivering top-tier technology solutions to companies of all sizes, from innovative startups to industry leaders, helping them achieve their digital transformation goals. \n Our team of 600+ highly skilled tech professionals, based in Latin America, drives digital disruption by partnering with U.S. companies on their most impactful projects. Whether collaborating with Fortune 500 giants or scaling startups, we deliver results that make a difference. \n By applying for this position, you’re taking the first step in joining a dynamic team that values your expertise and aspirations. We aim to align your skills with opportunities that foster exceptional career growth and success while contributing to transformative projects that shape the future. \n Our Client \n Our client is a leading GovTech SaaS company that has spent more than two decades helping public-sector and education organizations modernize critical operations through technology. \n By combining deep domain expertise with modern cloud platforms, AI-enabled workflows, and a customer-first mindset, the company delivers solutions that simplify complex HR, compliance, and workforce management processes. Their products support the entire employee lifecycle—from hiring and onboarding to development, retention, and retirement—allowing organizations to better serve their empl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Truelogic. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153535-senior-software-architect-c-angular-ai-first-govtech-saas-company",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789700406-57",
        "title": "Senior Software Engineer - Workflow",
        "title_ar": "مهندس ومطور برمجيات (Senior Software Engineer - Workflow)",
        "company": "Cloudbeds",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LATAM, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "What Makes Cloudbeds Unique At Cloudbeds, we're not just building software, we’re transforming hospitality. Our intelligently designed platform powers properties across 150 countries, processing billions in bookings annually. From independent properties to hotel groups, we help hoteliers transform operations and uplevel their commercial strategy through a unified platform that integrates with hundreds of partners. And we do it with a completely remote team. Imagine working alongside global innovators to build AI-powered solutions that solve hoteliers' biggest challenges. Since our founding in 2012, we've become the World's Best Hotel PMS Solutions Provider and landed on Deloitte's Technology Fast 500 again in 2024, but we're just getting started. \n How You'll Make an Impact: \n As a Senior Software Engineer on the Workflow Squad, you'll design, build, and operate product capabilities that help Cloudbeds support increasingly complex hospitality operations. This is primarily a backend product engineering role, working in PHP and Java across services, APIs, data, and event-driven systems, with occasional frontend contributions when needed. \n You'll take ownership of work from technical design through production, balancing near-term product delivery with the reliability and maintainability of the broader platform. You'll work closely with product and engineering partners to solve ambiguous problems and deliver simple, dependable experiences for our customers. \n Our Workflow Squad:",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Cloudbeds. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153534-senior-software-engineer-workflow",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/3aef1a38-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/3aef1a38-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/3aef1a38-221.png",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789700406-58",
        "title": "Forward Deployed Engineer (AI & Business Transformation) – Technology & Creative Network | Brazil",
        "title_ar": "مهندس ومطور برمجيات (Forward Deployed Engineer (AI & Business Transformation) – Technology & Creative Network | Brazil)",
        "company": "Truelogic",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Brazil",
        "location_ar": "Brazil",
        "salary": "Competitive",
        "description": "About Truelogic \n At Truelogic we are a leading provider of nearshore staff augmentation services headquartered in New York. For over two decades, we’ve been delivering top-tier technology solutions to companies of all sizes, from innovative startups to industry leaders, helping them achieve their digital transformation goals. \n Our team of 600+ highly skilled tech professionals, based in Latin America, drives digital disruption by partnering with U.S. companies on their most impactful projects. Whether collaborating with Fortune 500 giants or scaling startups, we deliver results that make a difference. \n By applying for this position, you’re taking the first step in joining a dynamic team that values your expertise and aspirations. We aim to align your skills with opportunities that foster exceptional career growth and success while contributing to transformative projects that shape the future. \n Our Client \n Global technology and creative network that bridges the gap between engineering and design to drive business transformation for leading enterprise brands. They partner with executive leadership to redefine possibilities, create lasting impact, and implement the necessary technologies to power the entire customer journey. \n Job Summary \n We are seeking a highly skilled Forward Deployed Engineer (FDE) to sit at the core of enterprise transformation engagements, directly embedding with client teams to redesign workflows, establish operating models, and drive technology ado",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Truelogic. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153531-forward-deployed-engineer-ai-business-transformation-technology-creative-network-brazil",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789700406-59",
        "title": "Senior Full-stack Engineer (Python/React) - Advertising",
        "title_ar": "مهندس ومطور برمجيات (Senior Full-stack Engineer (Python/React) - Advertising)",
        "company": "Truelogic",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Brazil",
        "location_ar": "Brazil",
        "salary": "Competitive",
        "description": "About Truelogic \n At Truelogic we are a leading provider of nearshore staff augmentation services headquartered in New York. For over two decades, we’ve been delivering top-tier technology solutions to companies of all sizes, from innovative startups to industry leaders, helping them achieve their digital transformation goals. \n Our team of 600+ highly skilled tech professionals, based in Latin America, drives digital disruption by partnering with U.S. companies on their most impactful projects. Whether collaborating with Fortune 500 giants or scaling startups, we deliver results that make a difference. \n By applying for this position, you’re taking the first step in joining a dynamic team that values your expertise and aspirations. We aim to align your skills with opportunities that foster exceptional career growth and success while contributing to transformative projects that shape the future. \n Our Client \n A global digital transformation organization that helps leading enterprises reimagine how they create, manage, and deliver customer experiences by combining technology, creativity, AI, and engineering. \n Job Summary \n We are seeking a seasoned Full-Stack Engineer (Python/React) to build and ship applications powering our AI-native digital platforms. In this role, you will work across the entire stack from backend services and data pipelines to polished, production-ready frontend interfaces. You will partner closely with cross-functional teams to prototype rapidly, maint",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Truelogic. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153536-senior-full-stack-engineer-python-react-advertising-2",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/e7ae6cb6-221-1.png",
        "postedAt": "2026-09-18",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789700406-60",
        "title": "Senior Software Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Software Engineer)",
        "company": "Cloudbeds",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LATAM, Europe, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "What Makes Cloudbeds Unique At Cloudbeds, we're not just building software, we’re transforming hospitality. Our intelligently designed platform powers properties across 150 countries, processing billions in bookings annually. From independent properties to hotel groups, we help hoteliers transform operations and uplevel their commercial strategy through a unified platform that integrates with hundreds of partners. And we do it with a completely remote team. Imagine working alongside global innovators to build AI-powered solutions that solve hoteliers' biggest challenges. Since our founding in 2012, we've become the World's Best Hotel PMS Solutions Provider and landed on Deloitte's Technology Fast 500 again in 2024, but we're just getting started. \n How You'll Make an Impact: \n As a Senior Software Engineer, you will help deliver an exceptional product experience to our customers all around the world. This could be for hotel guests, creating a user experience that makes travelers feel welcome, comfortable, and inspired to share the joy of travel with others. Or it could be for our accommodation providers, building trusted, simple, easy-to-use features to support key aspects of their daily business. Helping nearly 10,000 properties globally to process billions in transactions every year. \n Our Payments Team: \n At Cloudbeds, our Payments tribe builds the systems that keep money moving securely, efficiently, and globally for thousands of our customers. We love solving complex, in",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Cloudbeds. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153532-senior-software-engineer-9",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/3aef1a38-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/3aef1a38-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/3aef1a38-221.png",
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
