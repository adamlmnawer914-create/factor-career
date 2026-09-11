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
        "id": "job-1789166395-1",
        "title": "Puzzle Solver (Coding)",
        "title_ar": "Puzzle Solver (Coding) (تصميم وإبداع)",
        "company": "micro1",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$50 - $80 USD",
        "description": "Puzzle Solver (Coding) Pay: $50–$80/hour Location: Global, fully remote Job Type: Contractor (~15 hours per week) Schedule: Flexible—you choose the hours and days you work, including weekends if desired We are looking for highly skilled coding puzzle solvers to contribute to an AI training project involving algorithmic reasoning, debugging, constrained technical problems, and reproducible software solutions. The work involves solving self-contained coding and technical challenges designed to test the capabilities of advanced AI models. A representative task may require exploring an unfamiliar codebase or terminal environment, understanding a precise objective, implementing a solution, testing it against hidden or explicit constraints, and producing a reproducible final result. What You’ll Work On \n Solve self-contained coding, logic, debugging, and technical reasoning challenges. \n Analyze unfamiliar problems and translate their requirements into implementable solutions. \n Select appropriate algorithms, data structures, and problem-solving strategies. \n Work inside terminal-based development environments and existing codebases. \n Implement correct and efficient solutions using an appropriate programming language. \n Identify ambiguous requirements, edge cases, hidden assumptions, and failure conditions. \n Debug incorrect behavior across code, tests, dependencies, and environment configuration. \n Develop tests and verification methods that distinguish genuinely correct solution",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Puzzle-logic",
            "Coding-problem-designer"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/puzzle-solver-coding",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-2",
        "title": "Administrative Assistant – Leadership Team Support",
        "title_ar": "مدير وقائد فريق (Administrative Assistant – Leadership Team Support)",
        "company": "SnappyCX",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Kenya",
        "location_ar": "Kenya",
        "salary": "Competitive",
        "description": "Administrative Assistant – Leadership Team Support \n Full-Time | Remote | U.S. Business Hours \n Work Schedule \n Full-time: 40 hours per week \n Schedule will provide coverage across U.S. Eastern through U.S. Pacific business hours \n Exact working hours will be confirmed with the selected candidate \n Job Overview \n One of our clients is looking to hire a highly organized, proactive, and reliable Administrative Assistant – Leadership Team Support to support a four-person leadership team . \n This role is focused on ensuring that important decisions, action items, deadlines, and follow-ups do not get lost or forgotten. You will attend meetings, document key decisions and responsibilities, maintain leadership tasks, coordinate schedules, and proactively follow up with team members until outstanding items are completed or appropriately closed. \n This is not a Project Manager role . You will not be responsible for owning company strategy or driving major initiatives. Instead, you will be responsible for creating visibility, accountability, and follow-through across the leadership team's day-to-day activities. \n Key Responsibilities \n Attend leadership and team meetings and accurately capture decisions, action items, owners, and deadlines . \n Prepare and circulate clear written meeting summaries on the same day. \n Follow up proactively on outstanding action items until they are completed, reassigned, or intentionally closed . \n Communicate directly with employees and senior leadership",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SnappyCX. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Administrative-assistant",
            "Executive-assistant",
            "Leadership-support",
            "Virtual-assistant"
        ],
        "applyUrl": "https://himalayas.app/companies/snappycx/jobs/administrative-assistant-leadership-team-support",
        "logo": "https://cdn-images.himalayas.app/0hv6u9ug8edam56q4ebz3pxm1qr1",
        "companyLogo": "https://cdn-images.himalayas.app/0hv6u9ug8edam56q4ebz3pxm1qr1",
        "image": "https://cdn-images.himalayas.app/0hv6u9ug8edam56q4ebz3pxm1qr1",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-3",
        "title": "Back-End Developer",
        "title_ar": "مهندس ومطور برمجيات (Back-End Developer)",
        "company": "Talent Sam",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "We are looking for a skilled and motivated Back-End Developer to join our growing engineering team. In this role, you will be responsible for designing, developing, and maintaining scalable server-side applications, APIs, and databases that power high-performance web applications. The ideal candidate has strong experience with back-end technologies, database management, and cloud-based architectures. You will collaborate with front-end developers, product managers, and other engineers to build secure, reliable, and efficient solutions while following software development best practices. If you are passionate about building scalable systems and solving complex technical challenges, we'd love to hear from you. Requirements \n Experience as a Back-End Developer, Software Engineer, or a similar role. \n Excellent verbal and written communication skills in English. \n Strong proficiency in one or more back-end programming languages such as Node.js, Python, Java, C#, PHP, Go, or Ruby. \n Experience designing and developing RESTful APIs and integrating third-party services. \n Strong knowledge of SQL and/or NoSQL databases such as PostgreSQL, MySQL, MongoDB, SQL Server, or similar. \n Experience with Git, GitHub, and Agile development methodologies. \n Familiarity with cloud platforms such as AWS, Azure, or Google Cloud. \n Understanding of authentication, authorization, security best practices, and API performance optimization. \n Experience with Docker, Kubernetes, CI/CD pipelines, or othe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Talent Sam. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Backend-development",
            "Backend-engineering",
            "Api-development",
            "Software-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/talent-sam/jobs/back-end-developer-7915206276",
        "logo": "https://cdn-images.himalayas.app/zftc69ko0ou84i4thiorjmqnzarl",
        "companyLogo": "https://cdn-images.himalayas.app/zftc69ko0ou84i4thiorjmqnzarl",
        "image": "https://cdn-images.himalayas.app/zftc69ko0ou84i4thiorjmqnzarl",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-4",
        "title": "PMO Manager",
        "title_ar": "مدير وقائد فريق (PMO Manager)",
        "company": "The Suddath Companies",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Why Choose Suddath to “Move” your Career to the Next Level? At Suddath, you can be part of something special and inclusive! Join a team that has a 100+ year reputation for excellence as an innovative, growing and financially stable company that is dedicated to promoting a culture that thrives on inclusion and diversity. From numerous awards to being recognized as one of the best places to work, Suddath offers a caring, family environment while providing relocation and logistics services to people and companies all around the world. What We Offer! \n A competitive wage with a comprehensive benefits package, including a 401(k) plan with company matching \n Weekly pay for hourly-paid employees. Biweekly pay for salaried employees. \n Paid Time Off (PTO) and paid company holidays \n A tuition reimbursement plan where employees are encouraged to continue their education and development \n For more information on our benefit offerings, please visit and scroll down to view our employee benefits. \n SUMMARY The PMO Manager will play a critical role in establishing and maintaining the Project Management Office (PMO) framework, ensuring consistent processes, governance, and execution across Contract Logistics projects. This role combines hands-on project leadership with direct management of PMO resources. The PMO Manager will partner closely with Sales, Operations, Solutions, and cross-functional teams (Legal, EHS, Finance, HR, IT) to define project requirements, structure workflows, and lea",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة The Suddath Companies. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Pmo-manager",
            "Project-management"
        ],
        "applyUrl": "https://himalayas.app/companies/the-suddath-companies/jobs/pmo-manager",
        "logo": "https://cdn-images.himalayas.app/ntgxjyhxb053pg70cq1nou9s9dfr",
        "companyLogo": "https://cdn-images.himalayas.app/ntgxjyhxb053pg70cq1nou9s9dfr",
        "image": "https://cdn-images.himalayas.app/ntgxjyhxb053pg70cq1nou9s9dfr",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-5",
        "title": "Licensed Sales Professional (LSP) - Remote - IL",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Licensed Sales Professional (LSP) - Remote - IL)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$36,000 - $100,000 USD",
        "description": "Job Description Jumpstart Your Sales Career with a Trusted Brand Looking for a meaningful career with local impact and national brand power? As an Insurance Sales Professional, you’ll grow a local Allstate agency by building relationships, protecting what matters most, and becoming a trusted advisor in your community. Sales Professional – Allstate Exclusive Agency Staff Are you ready to build a career where you can grow professionally, earn uncapped income, and make a real difference in your community? Join a team that’s passionate about helping people protect what matters most. What’s In It for You? \n Get Paid to Learn – Comprehensive training provided, no insurance experience required \n Earn What You Deserve – Base + uncapped commission + bonus opportunities \n Grow with Us – Continuous learning through Allstate University \n Make an Impact – Help customers protect their families and futures \n Work-Life Balance – Positive, supportive work environment \n Career Advancement – Opportunities to grow within the agency \n What You’ll Do \n Achieve sales goals by generating new business and cross-selling to existing customers \n Identify and qualify leads from various sources \n Educate customers on Allstate products that meet their needs \n Serve your local community by helping them prepare for life’s uncertainties \n Deliver a positive and professional customer experience \n What We’re Looking For \n Strong interest in a sales career (sales experience is a plus!) \n No insurance experience ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-sales",
            "Insurance-agent",
            "Remote-sales",
            "Licensed-sales-agent"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/licensed-sales-professional-lsp-remote-il",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-6",
        "title": "Licensed Sales Professional (LSP) - Remote - OH",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Licensed Sales Professional (LSP) - Remote - OH)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$36,000 - $100,000 USD",
        "description": "Job Description Jumpstart Your Sales Career with a Trusted Brand Looking for a meaningful career with local impact and national brand power? As an Insurance Sales Professional, you’ll grow a local Allstate agency by building relationships, protecting what matters most, and becoming a trusted advisor in your community. Sales Professional – Allstate Exclusive Agency Staff Are you ready to build a career where you can grow professionally, earn uncapped income, and make a real difference in your community? Join a team that’s passionate about helping people protect what matters most. What’s In It for You? \n Get Paid to Learn – Comprehensive training provided, no insurance experience required \n Earn What You Deserve – Base + uncapped commission + bonus opportunities \n Grow with Us – Continuous learning through Allstate University \n Make an Impact – Help customers protect their families and futures \n Work-Life Balance – Positive, supportive work environment \n Career Advancement – Opportunities to grow within the agency \n What You’ll Do \n Achieve sales goals by generating new business and cross-selling to existing customers \n Identify and qualify leads from various sources \n Educate customers on Allstate products that meet their needs \n Serve your local community by helping them prepare for life’s uncertainties \n Deliver a positive and professional customer experience \n What We’re Looking For \n Strong interest in a sales career (sales experience is a plus!) \n No insurance experience ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Insurance-sales-agent",
            "Insurance-agent",
            "Remote-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/licensed-sales-professional-lsp-remote-oh",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-7",
        "title": "Licensed Sales Professional (LSP) - MI",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Licensed Sales Professional (LSP) - MI)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$36,000 - $100,000 USD",
        "description": "Job Description Jumpstart Your Sales Career with a Trusted Brand Looking for a meaningful career with local impact and national brand power? As an Insurance Sales Professional, you’ll grow a local Allstate agency by building relationships, protecting what matters most, and becoming a trusted advisor in your community. Sales Professional – Allstate Exclusive Agency Staff Are you ready to build a career where you can grow professionally, earn uncapped income, and make a real difference in your community? Join a team that’s passionate about helping people protect what matters most. What’s In It for You? \n Get Paid to Learn – Comprehensive training provided, no insurance experience required \n Earn What You Deserve – Base + uncapped commission + bonus opportunities \n Grow with Us – Continuous learning through Allstate University \n Make an Impact – Help customers protect their families and futures \n Work-Life Balance – Positive, supportive work environment \n Career Advancement – Opportunities to grow within the agency \n What You’ll Do \n Achieve sales goals by generating new business and cross-selling to existing customers \n Identify and qualify leads from various sources \n Educate customers on Allstate products that meet their needs \n Serve your local community by helping them prepare for life’s uncertainties \n Deliver a positive and professional customer experience \n What We’re Looking For \n Strong interest in a sales career (sales experience is a plus!) \n No insurance experience ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-sales",
            "Sales",
            "Insurance-agent",
            "Financial-services"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/licensed-sales-professional-lsp-mi",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-8",
        "title": "Licensed Sales Professional (LSP) - Remote - VA",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Licensed Sales Professional (LSP) - Remote - VA)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$36,000 - $100,000 USD",
        "description": "Job Description Jumpstart Your Sales Career with a Trusted Brand Looking for a meaningful career with local impact and national brand power? As an Insurance Sales Professional, you’ll grow a local Allstate agency by building relationships, protecting what matters most, and becoming a trusted advisor in your community. Sales Professional – Allstate Exclusive Agency Staff Are you ready to build a career where you can grow professionally, earn uncapped income, and make a real difference in your community? Join a team that’s passionate about helping people protect what matters most. What’s In It for You? \n Get Paid to Learn – Comprehensive training provided, no insurance experience required \n Earn What You Deserve – Base + uncapped commission + bonus opportunities \n Grow with Us – Continuous learning through Allstate University \n Make an Impact – Help customers protect their families and futures \n Work-Life Balance – Positive, supportive work environment \n Career Advancement – Opportunities to grow within the agency \n What You’ll Do \n Achieve sales goals by generating new business and cross-selling to existing customers \n Identify and qualify leads from various sources \n Educate customers on Allstate products that meet their needs \n Serve your local community by helping them prepare for life’s uncertainties \n Deliver a positive and professional customer experience \n What We’re Looking For \n Strong interest in a sales career (sales experience is a plus!) \n No insurance experience ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-sales",
            "Insurance-agent",
            "Remote-sales",
            "Sales-professional"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/licensed-sales-professional-lsp-remote-va",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-9",
        "title": "Exclusive Life Specialist - AZ",
        "title_ar": "Exclusive Life Specialist - AZ (المبيعات والنمو)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Job Description Would you like to own a meaningful life insurance practice under the Allstate brand? Scale your existing life insurance practice with proven support, flexibility and access to new customers. We’re looking for professionals with a growing practice who want to leverage the Allstate brand and resources to expand in your community. Your Practice. As an Allstate Exclusive Life Specialist, you’ll build your own life insurance practice with support from Allstate . Your partnership with Allstate Agency owners will drive new business in your local community and create additional opportunities for growth. Your Support Team. We support our Exclusive Life Specialists nationwide with a variety of life insurance product offerings and continued education designed to help you succeed. Life Specialists can share space with an Allstate agency owner and receive customer referral and leads through these partnerships, as well as additional online and other lead sources. Your Rewards. We believe hard work should be rewarded. At Allstate , we offer unlimited earning potential tied directly to the growth of your business. Your Work. A typical agency office has one life specialist who meets with customers face-to-face, supported by a team of licensed professionals who help deepen relationships with customers and generate leads. Allstate provides support and expertise to help you build and sustain your business, industry leading technology to streamline your business, and customer expe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-sales",
            "Life-insurance",
            "Financial-services",
            "Sales"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/exclusive-life-specialist-az",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-10",
        "title": "Licensed Sales Professional (LSP) - Remote - IN",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Licensed Sales Professional (LSP) - Remote - IN)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$36,000 - $100,000 USD",
        "description": "Job Description Jumpstart Your Sales Career with a Trusted Brand Looking for a meaningful career with local impact and national brand power? As an Insurance Sales Professional, you’ll grow a local Allstate agency by building relationships, protecting what matters most, and becoming a trusted advisor in your community. Sales Professional – Allstate Exclusive Agency Staff Are you ready to build a career where you can grow professionally, earn uncapped income, and make a real difference in your community? Join a team that’s passionate about helping people protect what matters most. What’s In It for You? \n Get Paid to Learn – Comprehensive training provided, no insurance experience required \n Earn What You Deserve – Base + uncapped commission + bonus opportunities \n Grow with Us – Continuous learning through Allstate University \n Make an Impact – Help customers protect their families and futures \n Work-Life Balance – Positive, supportive work environment \n Career Advancement – Opportunities to grow within the agency \n What You’ll Do \n Achieve sales goals by generating new business and cross-selling to existing customers \n Identify and qualify leads from various sources \n Educate customers on Allstate products that meet their needs \n Serve your local community by helping them prepare for life’s uncertainties \n Deliver a positive and professional customer experience \n What We’re Looking For \n Strong interest in a sales career (sales experience is a plus!) \n No insurance experience ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Insurance-sales",
            "Insurance-agent",
            "Remote-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/licensed-sales-professional-lsp-remote-in",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-11",
        "title": "Licensed Sales Professional (LSP) - Remote - MO",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Licensed Sales Professional (LSP) - Remote - MO)",
        "company": "Allstate",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$36,000 - $100,000 USD",
        "description": "Job Description Jumpstart Your Sales Career with a Trusted Brand Looking for a meaningful career with local impact and national brand power? As an Insurance Sales Professional, you’ll grow a local Allstate agency by building relationships, protecting what matters most, and becoming a trusted advisor in your community. Sales Professional – Allstate Exclusive Agency Staff Are you ready to build a career where you can grow professionally, earn uncapped income, and make a real difference in your community? Join a team that’s passionate about helping people protect what matters most. What’s In It for You? \n Get Paid to Learn – Comprehensive training provided, no insurance experience required \n Earn What You Deserve – Base + uncapped commission + bonus opportunities \n Grow with Us – Continuous learning through Allstate University \n Make an Impact – Help customers protect their families and futures \n Work-Life Balance – Positive, supportive work environment \n Career Advancement – Opportunities to grow within the agency \n What You’ll Do \n Achieve sales goals by generating new business and cross-selling to existing customers \n Identify and qualify leads from various sources \n Educate customers on Allstate products that meet their needs \n Serve your local community by helping them prepare for life’s uncertainties \n Deliver a positive and professional customer experience \n What We’re Looking For \n Strong interest in a sales career (sales experience is a plus!) \n No insurance experience ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Allstate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-sales",
            "Insurance-agent",
            "Remote-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/allstate/jobs/licensed-sales-professional-lsp-remote-mo",
        "logo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "companyLogo": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "image": "https://cdn-images.himalayas.app/rxegpkfwgr590pqavbglau747zk8",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-12",
        "title": "Territory Manager - Portland, OR",
        "title_ar": "مدير وقائد فريق (Territory Manager - Portland, OR)",
        "company": "Mineralys Therapeutics",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Territory-management",
            "Pharmaceutical-sales",
            "Field-sales",
            "Healthcare-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-portland-or",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-13",
        "title": "Territory Manager - Pine Bluff, AR",
        "title_ar": "مدير وقائد فريق (Territory Manager - Pine Bluff, AR)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Commercial",
            "Territory-management",
            "Pharmaceutical-sales",
            "Healthcare-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-pine-bluff-ar",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-14",
        "title": "Territory Manager - Marietta, GA",
        "title_ar": "مدير وقائد فريق (Territory Manager - Marietta, GA)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Territory-management",
            "Pharmaceutical-sales",
            "Biotech-sales",
            "Field-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-marietta-ga",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-15",
        "title": "Territory Manager - Little Rock, AR",
        "title_ar": "مدير وقائد فريق (Territory Manager - Little Rock, AR)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Territory-management",
            "Pharmaceutical-sales",
            "Biotech-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-little-rock-ar",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-16",
        "title": "Territory Manager - East Syracuse, NY",
        "title_ar": "مدير وقائد فريق (Territory Manager - East Syracuse, NY)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Territory-management",
            "Pharmaceutical-sales",
            "Field-sales",
            "Healthcare-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-east-syracuse-ny",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-17",
        "title": "Territory Manager - Cleveland, TN",
        "title_ar": "مدير وقائد فريق (Territory Manager - Cleveland, TN)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Territory-management",
            "Pharmaceutical-sales",
            "Biopharmaceutical-sales",
            "Healthcare-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-cleveland-tn",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-18",
        "title": "Territory Manager - Chicago, IL",
        "title_ar": "مدير وقائد فريق (Territory Manager - Chicago, IL)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Territory-management",
            "Pharmaceutical-sales",
            "Biopharmaceutical-sales",
            "Medical-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-chicago-il",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-19",
        "title": "Territory Manager - Atlanta, GA",
        "title_ar": "مدير وقائد فريق (Territory Manager - Atlanta, GA)",
        "company": "Mineralys Therapeutics",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $165,000 USD",
        "description": "“ Mineralys Therapeutics is a clinical-stage biopharmaceutical company focused on developing medicines to target hypertension and related comorbidities such as chronic kidney disease (CKD), obstructive sleep apnea (OSA) and other diseases driven by dysregulated aldosterone. Its initial product candidate, lorundrostat, is a proprietary, orally administered, highly selective aldosterone synthase inhibitor. Mineralys is headquartered in Radnor, Pennsylvania. For more information, please visit Follow Mineralys on LinkedIn, Twitter and Bluesky” Mineralys is a fully remote company. Territory Manager Position Summary The Territory Manager will play a critical role in the successful launch and growth of Mineralys’ first commercial product within an assigned territory. This individual will be responsible for educating healthcare providers (HCPs) on Mineralys’ product, building trusted customer relationships, driving product adoption, and achieving territory sales performance goals. This is a highly visible role requiring strong selling skills, customer engagement capabilities, and a passion for improving outcomes for patients with uncontrolled hypertension. The ideal candidate thrives in a fast-paced, entrepreneurial biotech environment and is energized by the opportunity to launch a breakthrough new class of medicine. Key Responsibilities Territory Management / Business Execution \n Develop and maintain a strong understanding of the disease state, clinical data, and relevant treatment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mineralys Therapeutics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Territory-management",
            "Pharmaceutical-sales",
            "Biotech-sales",
            "Territory-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/mineralys-therapeutics/jobs/territory-manager-atlanta-ga",
        "logo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "companyLogo": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "image": "https://cdn-images.himalayas.app/c4rq0alxaegvynzbnwzggku26ckw",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-20",
        "title": "Wodaabe Interpreter",
        "title_ar": "Wodaabe Interpreter (خدمة ودعم العملاء)",
        "company": "LanguageLine Solutions",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "LanguageLine Solutions is Hiring! At LanguageLine, we strive for a world in which language and cultural barriers no longer exist. Use your language skills to dramatically improve the lives of limited-English speakers, as well as the Deaf and Hard-of-Hearing. Even better, you can do this while working from your own home. LanguageLine has been certified as a Great Place to Work, and is regularly listed as one of America’s top work-from-home employers. Our interpreters serve clients across numerous industries, including health care, 911, first responders, education, government agencies, and all walks of business. As an interpreter, you will receive training that is the best in the industry. We’ll ensure that you learn new skills while further developing your skillset. We provide numerous opportunities for advancement. You’ll be in a certified ASTM and ISO environment. You'll also be supported by a Senior Language Specialist, as well as our Interpreter and Technology Help Desks. Join our team now! Job Description Work at Home Bilingual Wodaabe -English Phone Interpreter Job Title: Wodaabe Interpreter Location: Work at Home position in United States Position: Phone Interpreter Status: Independent Contractor Pay: $0.75 - $0.90 per minute We Offer: \n Employee Referral Program. \n Advancement opportunities within the organization. \n Interpreter support. \n An inclusive and diverse work environment. \n **This is an independent contractor position and therefore not eligible for employee b",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة LanguageLine Solutions. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Medical-interpreter",
            "Interpreters",
            "Language-services",
            "Remote-interpreter"
        ],
        "applyUrl": "https://himalayas.app/companies/languageline-solutions/jobs/wodaabe-interpreter",
        "logo": "https://cdn-images.himalayas.app/m9dm05xe40bt3nmnnzxafljf1g0k",
        "companyLogo": "https://cdn-images.himalayas.app/m9dm05xe40bt3nmnnzxafljf1g0k",
        "image": "https://cdn-images.himalayas.app/m9dm05xe40bt3nmnnzxafljf1g0k",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789166395-21",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-22",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-23",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-24",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-25",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-26",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-27",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-28",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-29",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-30",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-31",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-32",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-33",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-34",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-35",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-36",
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
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789166395-37",
        "title": "Account Executive, Public Sector",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive, Public Sector)",
        "company": "Avepoint",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Overview \n As an A ccount Executive for the Public Sector in the DACH region, you will play a pivotal role in building and shaping our public sector business from the ground up. You will be responsible for developing and closing new business opportunities with public accounts across Germany, focusing on subverticals such as Healthcare, NGOs, Energy, Education, State Government and more. Read more about what our Hiring Manager has to share about the Public Sector here: We're Hiring: Public Sector Account Executive in DACH | AvePoint \n Your responsibilities will include: \n Developing new prospects and expanding existing accounts in the Public Sector \n Managing sales cycles with a consultative sales approach \n Planning and delivering presentations that give prospective and existing customers insights into how our solutions solve their challenges \n Communicating new product developments to prospective and existing clients \n Working with strategic AvePoint partners to grow your pipeline and ensure successful collaboration \n Attending remote and on-site meetings with clients as well as fairs and partner events \n Collaborat ing closely with pre-sales engineers, strategic partners, and cross-functional teams to close deals \n Working with the Business Development Representative \n Handling opportunities prospected by our Account Specialist team \n Implementing and executing effective sales campaigns to ensure maximum penetration of key accounts within your territory \n Maintaining an acc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Avepoint. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/avepoint/account-executive-public-sector-munich-379863",
        "logo": "https://logo.clearbit.com/avepoint.com",
        "companyLogo": "https://logo.clearbit.com/avepoint.com",
        "image": "https://logo.clearbit.com/avepoint.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-38",
        "title": "Senior Product Security Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Product Security Engineer)",
        "company": "Staffbase",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Staffbase \n We inspire people to achieve great things together. Our mission is to help organizations unlock the power of inspirational communication with the first AI-native Employee Experience Platform . Our industry-leading and award-winning agentic AI communications channels - intranet, employee app and email solutions - create engaging experiences that connect and empower employees. \n Headquartered in Chemnitz, Germany and New York City, with offices in Berlin, London, Sydney, Tokyo, Prague, and Minneapolis–St. Paul, our diverse team of 550+ employees supports 1,500+ customers—reaching over 14 million employees—in transforming their employee experience. We are proud to be a Unicorn company—privately valued at over $1 billion—demonstrating strong growth, innovation, and lasting impact in our industry. Together, we’re shaping the future of workplace communication. At Staffbase, security is at the heart of everything we build. Our Product Security team helps keep our products and customer data secure while enabling engineering teams across the company. We believe the best security work happens when people bring their authentic selves and diverse perspectives to the table and we’re proud of the unique mix of talents and backgrounds in our team. \n As an enablement team, we provide tools, guidance, and insights that allow developers to integrate security early in the development process. We see security not as a blocker but as a trusted partner that is the foundation for ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Staffbase. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/staffbase/senior-product-security-engineer-65535",
        "logo": "https://logo.clearbit.com/staffbase.com",
        "companyLogo": "https://logo.clearbit.com/staffbase.com",
        "image": "https://logo.clearbit.com/staffbase.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-39",
        "title": "Senior Product Manager - Parental Leave Cover (Fixed-Term, 12 Months)",
        "title_ar": "مدير وقائد فريق (Senior Product Manager - Parental Leave Cover (Fixed-Term, 12 Months))",
        "company": "Staffbase",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Brandenburg; Chemnitz, Sachsen; Dresden, Sachsen",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Staffbase \n We inspire people to achieve great things together. Our mission is to help organizations unlock the power of inspirational communication with the first AI-native Employee Experience Platform . Our industry-leading and award-winning agentic AI communications channels - intranet, employee app and email solutions - create engaging experiences that connect and empower employees. \n Headquartered in Chemnitz, Germany and New York City, with offices in Berlin, London, Sydney, Tokyo, Prague, and Minneapolis–St. Paul, our diverse team of 550+ employees supports 1,500+ customers—reaching over 14 million employees—in transforming their employee experience. We are proud to be a Unicorn company—privately valued at over $1 billion—demonstrating strong growth, innovation, and lasting impact in our industry. Together, we’re shaping the future of workplace communication. At Staffbase, we're moving beyond communication into a new frontier: helping millions of frontline and deskless employees not just find information, but actually get things done . The Actions team owns that execution layer - the bridge between employees, Staffbase AI, and the real operational work happening in stores, warehouses, hospitals, and in the field. \n Our biggest bet right now is Tasks - the product that lets an enterprise's HQ push operational standards to thousands of locations and see them executed on the ground, driven by a major new partnership. Around it sits a portfolio of agentic actions, fo",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Staffbase. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/staffbase/senior-product-manager-parental-leave-cover-fixed-term-12-months-berlin-brandenburg-chemnitz-sachsen-dresden-sachsen-429150",
        "logo": "https://logo.clearbit.com/staffbase.com",
        "companyLogo": "https://logo.clearbit.com/staffbase.com",
        "image": "https://logo.clearbit.com/staffbase.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-40",
        "title": "Mid level - Fullstack Engineer",
        "title_ar": "مهندس ومطور برمجيات (Mid level - Fullstack Engineer)",
        "company": "Staffbase",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Brandenburg; Chemnitz, Sachsen; Dresden, Sachsen",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Staffbase \n We inspire people to achieve great things together. Our mission is to help organizations unlock the power of inspirational communication with the first AI-native Employee Experience Platform . Our industry-leading and award-winning agentic AI communications channels - intranet, employee app and email solutions - create engaging experiences that connect and empower employees. \n Headquartered in Chemnitz, Germany and New York City, with offices in Berlin, London, Sydney, Tokyo, Prague, and Minneapolis–St. Paul, our diverse team of 550+ employees supports 1,500+ customers—reaching over 14 million employees—in transforming their employee experience. We are proud to be a Unicorn company—privately valued at over $1 billion—demonstrating strong growth, innovation, and lasting impact in our industry. Together, we’re shaping the future of workplace communication. We're on the lookout for talented Fullstack Engineers to join our Staffbase team and help us build an awesome internal communications platform. We are looking for empathetic and motivated team players, motivated by growth and ownership. \n As part of our tech stack , we are using: React.js, Javascript, Typescript, Kotlin, Go, Java, MongoDB, Terraform, Docker, Selenium and Cypress, to name a few. \n Our environment \n Working with skilled and similar-minded professionals in a team that values diversity and inclusivity. \n We aim to create a flexible and agile work environment that promotes the well-being and work",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Staffbase. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/staffbase/mid-level-fullstack-engineer-berlin-brandenburg-chemnitz-sachsen-dresden-sachsen-196236",
        "logo": "https://logo.clearbit.com/staffbase.com",
        "companyLogo": "https://logo.clearbit.com/staffbase.com",
        "image": "https://logo.clearbit.com/staffbase.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-41",
        "title": "Senior SAP FICO Consultant (m/f/d)",
        "title_ar": "Senior SAP FICO Consultant (m/f/d) (أخرى)",
        "company": "Flix",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München, Bayern, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "At Flix, we offer a dynamic work environment with competitive pay, strong growth opportunities, and a tech-driven approach to making travel more accessible, sustainable, and affordable.  \n We're looking for an experienced SAP functional Consultant (m/f/d) to join our ERP Finance team at Flix, in Berlin or Munich. \n In the Foundation Division of FlixTech, the ERP Finance team is responsible for the platform that powers our financial backbone: accounting, controlling, procurement, period close, and the integrations that connect them to the rest of Flix. We're setting up a new ERP system for our Train business (FlixTrain) with a first focus on Finance and Procurement. \n As our in-house SAP expert, you'll work closely with our Finance and Procurement teams as well as external partners to make sure the new ERP fits our needs: today and in the long run. After go-live, you'll be the person who owns, evolves and continuously improves the SAP solution from the inside. \n This role is well suited for someone who enjoys ownership, working close to real business problems, and combining solid SAP craftsmanship with a long-term, in-house perspective \n About the Role \n Act as Flix's in-house SAP expert during the implementation of our new ERP, with a focus on Finance and Procurement. \n Translate business requirements from Finance, Procurement and adjacent functions into clean, scalable SAP solutions. \n Work closely with external implementation partners during design, build, testing and cut o",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Flix. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/flix/senior-sap-fico-consultant-munchen-295926",
        "logo": "https://logo.clearbit.com/flix.com",
        "companyLogo": "https://logo.clearbit.com/flix.com",
        "image": "https://logo.clearbit.com/flix.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-42",
        "title": "Senior Fullstack Engineer - Localization",
        "title_ar": "مهندس ومطور برمجيات (Senior Fullstack Engineer - Localization)",
        "company": "SumUp",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "The Localization team builds and owns the systems that make sure every merchant, in every one of our 38 markets, can understand and use our products in their own language. It's one of the most critical enablers of SumUp's global growth, sitting at the heart of how fast and how well we can go to market anywhere in the world. \n As our Senior Full Stack Engineer, you'll bring dedicated engineering ownership by working closely with the team to scope, build and ship the systems, integrations and tooling accelerate the ongoing evolution of our localization platform towards greater automation, scalability and end-to-end integration. If you want autonomy, meaningful scope, and the chance to shape a growing function, this is the role. \n What you'll do: \n Design, build and optimise localization solutions across product, CMS, CRM, marketing and design systems, so content moves faster without compromising quality \n Improve the localization management platform to give the team greater visibility and control while reducing manual steps \n Embed automated language and quality checks into several steps of the localization workflows, catching issues before they reach production \n Improve the experience for developers, designers, marketers and content teams by ensuring localization solutions support their processes and ways of working \n Partner with Web and Mobile, Website, Comms Platform and other technical teams to enable localization capabilities across the technology stack \n Explore how AI ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة SumUp. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sumup/senior-fullstack-engineer-localization-berlin-351422",
        "logo": "https://logo.clearbit.com/sumup.com",
        "companyLogo": "https://logo.clearbit.com/sumup.com",
        "image": "https://logo.clearbit.com/sumup.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-43",
        "title": "Functional Consultant & Project Manager",
        "title_ar": "مدير وقائد فريق (Functional Consultant & Project Manager)",
        "company": "BLP Digital AG",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Join BLP Digital — The #1 Solution for ERP Automation BLP Digital is redefining ERP automation with agentic AI. Spun out of ETH Zurich and HSG, we build AI agents that automate finance, procurement, logistics, sales, and more for some of the world's largest enterprises. We solve real enterprise problems with cutting-edge technology and a strong sense of ownership. Our solution is live in 40+ countries, used by 550+ customers, and automates 70,000+ processes every day, including for Fortune 500 companies. As one of Switzerland's fastest-growing SaaS scaleups, our success stems from deep expertise in technology and business processes, delivering a product with outstanding product-market fit, proven by a growing global customer base. We've recently welcomed Goldman Sachs Alternatives as a growth investor, and we're now expanding into the UK with the launch of our London office. We are just getting started. Ready to build the future? Join BLP Digital today. Location This is a full-time position. Following a comprehensive onboarding period at our HQ in central Zurich , the role will be based remotely or hybrid from Germany or Austria As team collaboration is of great importance to us, we highly encourage remote team members to join us in Zurich at least once a month, these visits are financially supported by BLP. Your Mission As a versatile professional with a passion for technology, you’ll operate at the intersection of business and tech — leading end-to-end implementations of ou",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة BLP Digital AG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/blp-digital-ag/functional-consultant-project-manager-munich-175892",
        "logo": "https://logo.clearbit.com/blpdigitalag.com",
        "companyLogo": "https://logo.clearbit.com/blpdigitalag.com",
        "image": "https://logo.clearbit.com/blpdigitalag.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-44",
        "title": "Business Strategist - DACH",
        "title_ar": "Business Strategist - DACH (المبيعات والنمو)",
        "company": "Comand Ai",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Comand AI's mission is to deliver the next-generation of software to the European defense. From the very identification of the capacities that need building to their actual delivery within the hands of our forces, achieving our objective means finding the narrow ways through complex legacy environments, dense ecosystems, concrete partnership engagements. We are looking for a Business Strategist to build Comand AI’s presence from the ground up. You will identify the right entry points, build trusted relationships across the defense ecosystem, and create the path from first operational engagement to pilot and contract. Working closely with product and forward deployed teams, you’ll turn operational proof into commercial traction and establish Comand AI as a trusted partner in the market. What this looks like in practice: Build Comand AI’s presence in your market: identify the right units, partners, champions, and procurement pathways, then own the journey from first engagement through experimentation, pilot, and contract Identify and shape strategic opportunities before formal procurement, positioning Comand AI where operational needs emerge Build and maintain trusted relationships across the defense ecosystem, from operational units to industrial partners and government stakeholders Navigate long, politically sensitive B2G sales cycles involving multiple stakeholders, security clearances, RFIs, RFPs, and public procurement rules Translate Prevail’s technical capabilities into ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Comand Ai. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/comand-ai/business-strategist-dach-munich-382799",
        "logo": "https://logo.clearbit.com/comandai.com",
        "companyLogo": "https://logo.clearbit.com/comandai.com",
        "image": "https://logo.clearbit.com/comandai.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-45",
        "title": "Praktikant:in (w/m/d) - für Integration und Deutschsprachlehre",
        "title_ar": "Praktikant:in (w/m/d) - für Integration und Deutschsprachlehre (موارد بشرية وإدارة)",
        "company": "Enpal",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Unser Ziel ist eine Solaranlage auf jedem Dach, ein Speicher in jedem Haus und ein E-Auto in jeder Garage. Enpal macht das möglich mit einer integrierten Gesamtlösung für dezentrale Energie – von Solaranlage und Batteriespeicher über Wallbox, Smart Meter bis zur Wärmepumpe. Herzstück ist unsere KI-gestützte Plattform Enpal.One +, die tausende Systeme intelligent vernetzt und Strombezug sowie -einspeisung effizient am Energiemarkt optimiert. Bist Du bereit für Lösungen, die mehr als nur ein Versprechen sind und täglich echte Lebensqualität in tausende Haushalte bringen? Was du bei Enpal gestaltest, liefert morgen sauberen Strom und verändert nachhaltig, wie wir Energie nutzen. Deine Aufgaben Im Projekt „Global Growth“ integrieren wir Elektriker aus Südamerika, die deutschlandweit Photovoltaik-Anlagen und Wärmepumpen installieren. Dafür erhalten kolumbianische und brasilianische Fachkräfte in unserer Enpal-Akademie in Blankenfelde-Mahlow (Ludwig-Erhard-Ring 12, 15827) eine 6-wöchige technische und sprachliche Ausbildung – und genau hier brauchen wir deine Hilfe! Zum Juli 2026 oder August 2026 suchen wir eine:n Praktikant:in für 6 Monate in Vollzeit zur Unterstützung bei folgenden Aufgaben: Durchführung von Deutsch-Sprachschulungen (DaF) auf den Niveaustufen A2/B1 Weiterentwicklung didaktischer Unterrichtsmaterialien, insbesondere im Bereich Fachsprache Elektrik Auswahl und Einsatz geeigneter Lernmethoden und -tools Betreuung südamerikanischer Fachkräfte vor Ort in der Enpal-Aka",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Enpal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Installation pv"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/enpal/praktikantin-fur-integration-und-deutschsprachlehre-berlin-203850",
        "logo": "https://logo.clearbit.com/enpal.com",
        "companyLogo": "https://logo.clearbit.com/enpal.com",
        "image": "https://logo.clearbit.com/enpal.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-46",
        "title": "Founding Product Manager (German-speaking)",
        "title_ar": "مدير وقائد فريق (Founding Product Manager (German-speaking))",
        "company": "Bowatt",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "About BoWatt BoWatt is building agentic requirements and systems engineering software for manufacturing. We believe AI will reach PhD-level engineering capability within the next 10 years. This will unlock massive value across complex manufacturing industries. Cars. Planes. Rockets. Factories. Chips. Medical devices. All will be engineered with agents. We bootstrapped BoWatt to €500k+ ARR before raising our first round. BoWatt is backed by tier-1 investors, including Atlantic Foodlabs, Buildery (CDTM affiliates), and Prequel Ventures, along with angels from Cohere and Luminovo. You’ll join a small team of startup builders focused on speed, ownership, and execution. Over half the team are former founders, with backgrounds across DeepTech AI, gaming, and other startups. We’ve studied and worked at institutions and companies including Stanford, TUM, Google, EA, and YC-backed AI startups. The role As our Founding Product Manager, you will help determine what BoWatt builds, why we build it, and whether it creates meaningful value for customers. You will work closely across our commercial, customer success and engineering teams, as well as with our customers. You will develop a deep understanding of complex engineering workflows, turn customer problems into clear product opportunities, and drive initiatives from discovery through launch and iteration. This is a hands-on product role. You will spend time with customers, work through technical and operational detail, write requiremen",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bowatt. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product success"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/bowatt/founding-product-manager-german-speaking-munich-113836",
        "logo": "https://logo.clearbit.com/bowatt.com",
        "companyLogo": "https://logo.clearbit.com/bowatt.com",
        "image": "https://logo.clearbit.com/bowatt.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-47",
        "title": "Founding Customer Success Manager (German-speaking)",
        "title_ar": "مدير وقائد فريق (Founding Customer Success Manager (German-speaking))",
        "company": "Bowatt",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "About BoWatt BoWatt is building agentic requirements and systems engineering software for manufacturing. We believe AI will reach PhD-level engineering capability within the next 10 years. This will unlock massive value across complex manufacturing industries. Cars. Planes. Rockets. Factories. Chips. Medical devices. All will be engineered with agents. We bootstrapped BoWatt to €500k+ ARR before raising our first round. BoWatt is backed by tier-1 investors, including Atlantic Foodlabs, Buildery (CDTM affiliates), and Prequel Ventures, along with angels from Cohere and Luminovo. You’ll join a small team of startup builders focused on speed, ownership, and execution. Over half the team are former founders, with backgrounds across DeepTech AI, gaming, and other startups. We’ve studied and worked at institutions and companies including Stanford, TUM, Google, EA, and YC-backed AI startups. The role This role offers a clear path towards leading Customer Success as BoWatt grows. As our Founding Customer Success Manager, you will own everything that happens after the initial sale: turning new customers into successful, deeply engaged, long-term partners. You will be our first dedicated Customer Success hire. Initially, you will work hands-on with customers while building the playbooks, processes, and team that will eventually allow Customer Success to scale. This is not a reactive support role. You will become a trusted partner to customers, help them embed BoWatt into real engineeri",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bowatt. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product success"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/bowatt/founding-customer-success-manager-german-speaking-munich-272794",
        "logo": "https://logo.clearbit.com/bowatt.com",
        "companyLogo": "https://logo.clearbit.com/bowatt.com",
        "image": "https://logo.clearbit.com/bowatt.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-48",
        "title": "Creator Acquisition Manager",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Creator Acquisition Manager)",
        "company": "Passionfroot",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Passionfroot Creator-led growth is one of the fastest-growing channels in B2B. We build the infrastructure behind it. Passionfroot is the leading platform where modern companies scale creator-led growth, and where top creators manage and monetize brand partnerships. Our customers are some of the most ambitious, fastest-moving companies in the world: Replit, Figma, Framer, LumaAI, Gamma, Airtable. We help them run high-impact creator programs across LinkedIn, YouTube, newsletters, and more. We're growing 13x in revenue year over year, profitable, and just closed our Series A round. We are backed by Insight Partners, Creandum, Supernode, and founders and operators from Cursor, Anthropic, n8n and more. We're expanding fast across New York, Europe, and Brazil. About the role Why this role exists right now Every campaign we run needs the right creators on the platform first. Today we onboard hundreds of creators a month, and brand demand is growing faster than that. Our Creator Growth Lead is building the system to close that gap. You are the person who runs it every day: finding creators, checking they fit, and getting them live. High-level description Scope: find, vet, and onboard creators worldwide across all platforms (LinkedIn, YouTube, newsletters etc). Answer sourcing requests from campaign managers with a shortlist the same day. Ownership: you own the volume and the quality of new creator supply. If a campaign is short on creators, you are the first call. How this fi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Passionfroot. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Growth"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/passionfroot/creator-acquisition-manager-berlin-397198",
        "logo": "https://logo.clearbit.com/passionfroot.com",
        "companyLogo": "https://logo.clearbit.com/passionfroot.com",
        "image": "https://logo.clearbit.com/passionfroot.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-49",
        "title": "Partnerships Manager - Channel Sales (all genders)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Partnerships Manager - Channel Sales (all genders))",
        "company": "Kertos",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Kertos is the fastest-growing compliance startup in Europe. Following our €14M Series A , backed by leading VCs and business angels, we are building the compliance engine for Europe – faster, smarter, and more automated than ever. With customers like Enpal, Flink, Personio, and Blacklane , leading companies trust our AI-native platform that automates compliance, scales effortlessly, and makes organizations audit-ready in record time. The market is growing by 20% every year , fueled by regulations like GDPR, NIS2, DORA, and the AI Act . We are perfectly positioned to establish Kertos as the European compliance champion. There has never been a better moment to join our team. Come shape the future of compliance in Europe with us. Your purpose at Kertos Als Channel Sales Manager übernimmst du die Gesamtverantwortung für den Partnerkanal von Kertos – von der Pipeline bis zum Umsatz. Du baust das Ökosystem von Grund auf auf: du entscheidest, welche Partner wir angehen, gewinnst sie und machst aus diesen Beziehungen eine verlässliche, messbare Wachstumsquelle. Dabei arbeitest du eng mit Sales, Marketing und Product zusammen, damit Partnerschaften kein Silo bilden, sondern echten Impact im gesamten Unternehmen erzeugen. Auf- und Ausbau des Partnerkanals mit belastbaren, vertrauensbasierten Beziehungen zu Key-Partnern – mit dem Ziel, Umsatzwachstum zu treiben und Partner- und Kundenzufriedenheit sicherzustellen. Rekrutierung und Onboarding kommerzieller Partner, darunter Reseller und ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kertos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Growth"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/kertos/partnerships-manager-channel-sales-all-genders-munich-240310",
        "logo": "https://logo.clearbit.com/kertos.com",
        "companyLogo": "https://logo.clearbit.com/kertos.com",
        "image": "https://logo.clearbit.com/kertos.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-50",
        "title": "UX/UI Designer | Intch",
        "title_ar": "مصمم واجهات وتجربة مستخدم (UX/UI Designer | Intch)",
        "company": "Hirehire",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "About Intch Intch is a professional social network with a marketplace for part time work. You can think of it as a professional network built for senior specialists who take on meaningful contracts alongside their main work. A typical contract lasts from three to six months. The product is used in 140 countries and is available in up to 20 languages. Intch has fewer than 40 people and four product areas, with three already live and one preparing to launch. Intch is rethinking how people and companies find each other and build trust online. Changes that made the interface feel more like a real conversation have already improved key metrics by up to three times. About the role Today one part time designer supports all Intch products. Since the company moved to a product based structure, that is no longer enough. Intch is now looking for its first full time designer. Product managers build and test early prototypes themselves. Around one in ten experiments moves forward. Your role is to join the thinking early, work through the problem with the product team and turn validated ideas into clear, production ready experiences. This is a hands on role with broad ownership. You will work across all Intch products and collaborate closely with product managers, engineers and the current designer. What you will work on Join product discussions early and help shape the problem before screens are made. Take a task from an open question to a production ready design. Design flows where the i",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Hirehire. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product design"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hirehire/remote-ux-ui-designer-intch-383599",
        "logo": "https://logo.clearbit.com/hirehire.com",
        "companyLogo": "https://logo.clearbit.com/hirehire.com",
        "image": "https://logo.clearbit.com/hirehire.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-51",
        "title": "Influencer Marketing Manager (m/w/d), Vollzeit, 100% Remote",
        "title_ar": "أخصائي تسويق ونمو (Influencer Marketing Manager (m/w/d), Vollzeit, 100% Remote)",
        "company": "Meluya GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Düsseldorf",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Du entdeckst gerne neue Creator, kannst Menschen für eine Zusammenarbeit begeistern und behältst auch bei mehreren laufenden Kooperationen den Überblick? Dann unterstütze uns dabei, unser Influencer Marketing bei meluya weiter auszubauen. \n Meluya ist eine Marke für Musselin-Bettwäsche und Wohntextilien. Wir suchen jemanden, der passende Influencer findet, Kooperationen organisiert und gemeinsam mit uns herausfindet, welche Partnerschaften unsere Marke voranbringen. \n Aufgaben \n Passende Influencer finden: Du recherchierst Creator, die zu unseren Produkten und unserer Zielgruppe passen, und prüfst ihre Insights, Inhalte und Community. \n Kontakte aufbauen: Du übernimmst den Outreach per E-Mail oder Direktnachricht, beantwortest Anfragen und hältst den Kontakt zu Influencern und Managements. \n Kooperationen abstimmen: Du holst Angebote und Insights ein und verhandelst Preise, Leistungen und Veröffentlichungstermine. \n Die Umsetzung begleiten: Du koordinierst Produktauswahl und Versand, bereitest Briefings vor und behältst vereinbarte Inhalte und Termine im Blick. \n Den Überblick behalten: Du dokumentierst Absprachen, pflegst unsere Kontakte und hakst nach, wenn noch etwas fehlt. \n Ergebnisse auswerten: Du sammelst die Ergebnisse der Kooperationen und wertest diese aus. \n Partnerschaften weiterentwickeln: Du betreust bestehende Kontakte und planst mit uns weitere Kooperationen mit Creatorn, die gut zu meluya passen. \n Qualifikation \n Du hast erste praktische Erfahrung im Influen",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Meluya GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/meluya-gmbh/influencer-marketing-manager-vollzeit-100-remote-dusseldorf-165611",
        "logo": "https://logo.clearbit.com/meluyagmbh.com",
        "companyLogo": "https://logo.clearbit.com/meluyagmbh.com",
        "image": "https://logo.clearbit.com/meluyagmbh.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-52",
        "title": "Werkstudent (m/w/d) Social Media Marketing / PR",
        "title_ar": "أخصائي تسويق ونمو (Werkstudent (m/w/d) Social Media Marketing / PR)",
        "company": "Gusti Leder GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Student college, parttime minijob",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Rostock, Mecklenburg-Vorpommern, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "👜 Gestalte die Zukunft der Lederindustrie mit uns bei Gusti Leder! 🌿 Tauche ein in die Welt von Gusti Leder, wo jede Tasche eine Geschichte erzählt. Wir stehen für Nachhaltigkeit, Stil und Slow Fashion. Bei uns kaufst du nicht einfach nur ein Accessoire – du setzt ein Statement für Transparenz und Qualität. Wir bieten dir nicht nur einen Job, sondern die Chance, Teil einer Bewegung zu sein, die die Lederindustrie nachhaltig zum Besseren verändert. 🎯 Deine Mission bei uns: Markenstimme: Du unterstützt das Team aktiv bei der Entwicklung und Umsetzung unserer Kommunikationsstrategien. Netzwerkaufbau: Du pflegst unsere Presseverteiler, unterstützt bei der Ansprache von Journalist:innen sowie Influencer:innen und baust unser Netzwerk weiter aus. PR-Management: Du hilfst bei der Planung und Durchführung von PR-Kampagnen, übernimmst Aufgaben im Tagesgeschäft und behältst relevante Kennzahlen im Blick. Content-Planung: Du entwickelst und organisierst den Content für unsere Social Media Kanäle, um unsere Zielgruppe bestmöglich zu erreichen und zu begeistern. Posten und Community-Management: Du kümmerst Dich um die Veröffentlichung der Beiträge und das Management der Interaktionen auf unseren Social Media Kanälen. 💼 Das bringst du mit: Basiswissen: Erste Erfahrung in der PR-Arbeit, mit Content-Management-Systemen und Social Media sind wünschenswert, aber kein Muss. Mindset: Du arbeitest eigenverantwortlich, denkst strukturiert mit und brennst darauf, neue Ideen zu entwickeln. Arbeitswe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Gusti Leder GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/gusti-leder-gmbh/werkstudent-social-media-marketing-pr-rostock-198339",
        "logo": "https://logo.clearbit.com/gustiledergmbh.com",
        "companyLogo": "https://logo.clearbit.com/gustiledergmbh.com",
        "image": "https://logo.clearbit.com/gustiledergmbh.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-53",
        "title": "Verkäuferin (m/w/d) - Teilzeit/Werkstudent",
        "title_ar": "Verkäuferin (m/w/d) - Teilzeit/Werkstudent (أخرى)",
        "company": "Gusti Leder GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Mid, parttime fixed term",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Potsdam, Brandenburg, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Willkommen bei Gusti Leder Stores GmbH 🌿 Wir sind ein wachsendes Unternehmen mit einer klaren Mission: hochwertige, verantwortungsvoll produzierte Ledertaschen und -accessoires in die Welt zu bringen. Transparenz, Qualität und echte Handwerksliebe stehen bei uns im Mittelpunkt. Für unseren Store in Potsdam suchen wir ab sofort eine motivierte Verkäuferin in Teilzeit (20 / 25 / 30 h) oder als Werkstudent (15-20h). Du hast Freude am Kontakt mit Menschen, ein Gespür für Stil und möchtest unseren Kund:innen ein herzliches Einkaufserlebnis bieten? Dann passt du zu uns. Deine Vorteile bei Gusti 💰 Attraktive Vergütung Ein fairer Stundenlohn (bis zu 17 €)– abhängig von Deiner Berufserfahrung – inklusive bezahlter Überstunden. 🎯 Prämiensystem mit Mehrwert Gesundheitsprämie, Umsatzbeteiligung und weitere Anreize in Form von Bonuszahlungen – Dein Einsatz zahlt sich aus. 🛍️ Starke Benefits Flexible Arbeitszeiten, Verkaufstraining und bis zu 20 % Mitarbeiterrabatt. 🤝 Offene Teamkultur Flache Hierarchien, direkte Kommunikation und regelmäßige Teamevents sorgen für ein wertschätzendes Miteinander. 🚂 Gute Anbindung Unsere Stores liegen alle in unmittelbarer Nähe eines Bahnhofs und können bestens mit den öffentlichen Verkehrsmittel erreicht werden. Deine Aufgaben im Verkauf Du berätst unsere Kund:innen persönlich und findest gemeinsam mit ihnen das passende Produkt. Du erzählst die Geschichten hinter unseren Produkten und vermittelst die Werte von Gusti Leder. Du führst Verkaufsgespräche und ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Gusti Leder GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Stores"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/gusti-leder-gmbh/verkauferin-teilzeit-werkstudent-potsdam-273060",
        "logo": "https://logo.clearbit.com/gustiledergmbh.com",
        "companyLogo": "https://logo.clearbit.com/gustiledergmbh.com",
        "image": "https://logo.clearbit.com/gustiledergmbh.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-54",
        "title": "Verkäuferin (m/w/d) - Werkstudent",
        "title_ar": "Verkäuferin (m/w/d) - Werkstudent (أخرى)",
        "company": "Gusti Leder GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Entry, parttime fixed term",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Potsdam, Brandenburg, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Willkommen bei Gusti Leder Stores GmbH 🌿 Wir sind ein wachsendes Unternehmen mit einer klaren Mission: hochwertige, verantwortungsvoll produzierte Ledertaschen und -accessoires in die Welt zu bringen. Transparenz, Qualität und echte Handwerksliebe stehen bei uns im Mittelpunkt. Für unseren Store in Potsdam suchen wir ab sofort eine/n motivierte/n Werkstudent/in (15 / 20 h). Werde Teil unseres Teams und gestalte ein Einkaufserlebnis, das begeistert – mit Produkten, die mehr sind als nur Accessoires, sondern ein Statement für bewussten Konsum setzen. Was dich bei uns erwartet 💰 Attraktive Vergütung Ein fairer Stundenlohn (bis zu 15,50 €)– abhängig von Deiner Berufserfahrung – inklusive bezahlter Überstunden. 🎯 Prämiensystem mit Mehrwert Gesundheitsprämie, Umsatzbeteiligung und weitere Anreize in Form von Bonuszahlungen – Dein Einsatz zahlt sich aus. 🛍️ Starke Benefits Flexible Arbeitszeiten, Verkaufstraining und bis zu 20 % Mitarbeiterrabatt. 🤝 Offene Teamkultur Flache Hierarchien, direkte Kommunikation und regelmäßige Teamevents sorgen für ein wertschätzendes Miteinander. 🚂 Gute Anbindung Unsere Stores liegen alle in unmittelbarer Nähe eines Bahnhofs und können bestens mit den öffentlichen Verkehrsmittel erreicht werden. Deine Aufgaben Du berätst unsere Kund:innen freundlich und kompetent. Du findest gemeinsam mit unseren Kund:innen das passende Produkt. Du stellst unsere Taschen und Accessoires ansprechend im Store aus. Du bedienst unser Kassensystem und wickelst Zahlungen zu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Gusti Leder GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Stores"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/gusti-leder-gmbh/verkauferin-werkstudent-potsdam-448682",
        "logo": "https://logo.clearbit.com/gustiledergmbh.com",
        "companyLogo": "https://logo.clearbit.com/gustiledergmbh.com",
        "image": "https://logo.clearbit.com/gustiledergmbh.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-55",
        "title": "Product Engineer - Frontend (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Product Engineer - Frontend (all genders))",
        "company": "Koppla",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin (hybrid)",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "In a nutshell koppla is building the next-gen collaborative scheduling platform for construction , helping project managers keep projects on time by identifying delays and disruptions before they impact timelines. We are looking for a product-minded Frontend Engineers in Berlin that loves building actual products while taking ownership of the entire feature-building process. You will be mostly working on our TypeScript codebases, starting on the frontend, but excited to grow into a full stack role with us. Compensation: €65k-90k + 25% of your base salary in equity on top Location: Berlin (Hybrid, 2+ days/week in office); open for candidates willing to relocate to Berlin About koppla At koppla, we're a fun and ambitious team on a mission to help the construction industry build more efficiently. We're already partnering with top construction companies and delivering impressive results for our customers (multi-months speed-ups discovered through koppla). Our ambitions are backed by leading VCs (Earlybird, Newion) and industry angels as we tackle a billion-dollar opportunity problem in an underdigitized and underserved market. Our culture is core to who we are and we've built one we're genuinely proud of. We are not looking for hypergrowth - we believe in hiring slowly to create an environment of few but very high-performing team members that build a truly great product (similar to Netflix , Ashby or Linear ). What you'll be doing Collaborate closely with product managers, design",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Koppla. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Typescript",
            "Backend",
            "Frontend",
            "Fullstack"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/koppla/product-engineer-frontend-all-genders-berlin-hybrid-216629",
        "logo": "https://logo.clearbit.com/koppla.com",
        "companyLogo": "https://logo.clearbit.com/koppla.com",
        "image": "https://logo.clearbit.com/koppla.com",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789166395-56",
        "title": "Lifecycle Specialist, Employee Relations & Transitions - Canada",
        "title_ar": "Lifecycle Specialist, Employee Relations & Transitions - Canada (تصميم وإبداع)",
        "company": "Remote",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About Remote \n Remote is solving modern organizations’ biggest challenge – navigating global employment compliantly with ease. We make it possible for businesses of all sizes to recruit, pay, and manage international teams. With our core values at heart and future focused work culture, our team works tirelessly on ambitious problems, asynchronously, around the world. You can find Remoters working from 6 different continents (Antarctica left to go!) and all of our positions are fully remote. \n With Innovation as one of the core values, we have built Automation and AI capabilities into the requirements for every role. \n We encourage every member of the Remote team to bring their talents, experiences and culture to the table to help us build the best-in-class HR platform. \n If you are energetic, curious, motivated and ambitious, be part of our world. Apply now and define the future of work! \n This is not an active job opening, but a way for us to connect with talent as we plan for future opportunities. If you prefer to interview only for currently open roles, we kindly ask that you wait until an active position aligns with your career goals. \n We’re always looking for exceptional talent to join us in our mission to make work accessible for everyone, everywhere. While this specific role isn’t currently open, we’re planning for strategic growth in 2026 and beyond. This posting is part of our future opening pipeline initiative, which helps us connect with outstanding professionals ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Remote. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Hr & recruiting"
        ],
        "applyUrl": "https://jobicy.com/jobs/153083-lifecycle-specialist-employee-relations-transitions-canada-2",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789166395-57",
        "title": "Sales Representative - Brescia",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Representative - Brescia)",
        "company": "Deliveroo",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Italy",
        "location_ar": "Italy",
        "salary": "Competitive",
        "description": "Siamo alla ricerca di un Sales Representative per la zona di Brescia. \n È un'opportunità unica per entrare a far parte di un'azienda solida e in forte espansione, ricoprendo un ruolo chiave fin dal primo giorno. Ti occuperai di sviluppare il business collaborando con i ristoranti più iconici e prestigiosi d'Italia. \n Inserito/a nel team Sales di zona e a diretto riporto del Sales Lead, ti occuperai di acquisire e sviluppare nuovi partner commerciali (ristoranti e punti vendita). \n Nello specifico ti occuperai di: \n Gestire l'intero processo di vendita sul territorio di riferimento: mappatura della zona, prospezione, trattativa commerciale e chiusura dei contratti. Diventerai un/a vero/a esperto/a del mercato locale, individuando i locali di tendenza e i brand più richiesti dai clienti. \n Seguire i partner nella fase di onboarding, garantendo loro un'esperienza di ingresso ottimale sulla piattaforma. \n Promuovere e far comprendere il valore della tecnologia Deliveroo ai ristoratori attraverso visite commerciali sul campo, chiamate, e-mail e contatti social. \n Gestire le obiezioni e supportare i titolari dei locali nel superare eventuali esitazioni. \n Rappresentare l'azienda partecipando a eventi, meet-up e fiere di settore. \n Requisiti richiesti \n Spiccata attitudine commerciale e consolidata esperienza nella vendita / sviluppo business (B2B). \n Ottime doti comunicative e relazionali, con esperienza nella gestione dei clienti sia di persona sia da remoto (telefono ed e-mail). ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Deliveroo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153079-sales-representative-brescia",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201029093237-178554.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201029093237-178554.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/10/WRILS-201029093237-178554.jpg",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789166395-58",
        "title": "Engineering Manager, SRE",
        "title_ar": "مهندس ومطور برمجيات (Engineering Manager, SRE)",
        "company": "Remote",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "APAC, EMEA",
        "location_ar": "APAC, EMEA",
        "salary": "Competitive",
        "description": "About Remote \n Remote is solving modern organizations’ biggest challenge – navigating global employment compliantly with ease. We make it possible for businesses of all sizes to recruit, pay, and manage international teams. With our core values at heart and future focused work culture, our team works tirelessly on ambitious problems, asynchronously, around the world. You can find Remoters working from 6 different continents (Antarctica left to go!) and all of our positions are fully remote. \n With Innovation as one of the core values, we have built Automation and AI capabilities into the requirements for every role. \n We encourage every member of the Remote team to bring their talents, experiences and culture to the table to help us build the best-in-class HR platform. \n If you are energetic, curious, motivated and ambitious, be part of our world. Apply now and define the future of work! \n What this job can offer you \n Remote's SRE team exists so that our engineers can move quickly and our customers get a product that stays up. The team owns Kubernetes, AWS, PostgreSQL, CI infrastructure, our observability stack and the reliability practices that sits on top of all of it. \n We are looking for a Team Leader to run that team. This is a 60% IC, 40% leadership role. You will own the career development of your reports, steer the teams focus using judgment against the company goals, and you will be the spokesperson for the team across engineering. You will also stay close enough to",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Remote. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops & infrastructure"
        ],
        "applyUrl": "https://jobicy.com/jobs/153081-engineering-manager-sre",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/63a88d3a-221-1.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789166395-59",
        "title": "Strategic Account Executive, New Business",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Strategic Account Executive, New Business)",
        "company": "Ceros",
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
        "description": "Location: Remote within the US \n ⬆ Reporting Into: Head of Sales \n Compensation: $110,000–$140,000 base salary, plus uncapped commission, with a total expected compensation range of $210,000–$280,000+, depending on qualifications and experience. \n About Ceros \n At Ceros, you’ll help ambitious brands create digital experiences that people actually want to explore. Our platform gives marketers and designers the flexibility to design, build, and publish immersive content. All without code. With Ceros, teams move faster, scale smarter, and deliver work that makes a real impact. \n Customers report engagement times that are 80% longer and conversion rates more than 20% higher on Ceros-built experiences. That kind of performance is why leading brands like Pepsi, TimeOut, and Mastercard rely on us. Working here means shaping the future of digital experiences and joining a team that values bold ideas, creativity, and purpose-driven work. \n The Role \n This is a full-lifecycle enterprise sales role. You’ll be responsible for opening doors at some of the most recognizable brands in the world, landing new business, and expanding those relationships within your first year. \n You’ll operate with a high degree of ownership—building your territory strategy, generating pipeline, and driving deals from first touch through expansion. This role is ideal for someone who thrives in ambiguity, enjoys building as much as selling, and wants to play a key role in shaping how we bring a new AI product t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ceros. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153080-strategic-account-executive-new-business",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/7f055a77-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/7f055a77-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/7f055a77-221.png",
        "postedAt": "2026-09-11",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789166395-60",
        "title": "Talent Programs Lead",
        "title_ar": "مدير وقائد فريق (Talent Programs Lead)",
        "company": "Grove Collaborative",
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
        "description": "Grove Collaborative is a sustainability-focused consumer products company creating household and personal care essentials that are effective, beautifully designed, and healthier for people and the planet. We are a certified B Corp, plastic-neutral, and on a mission to transform the CPG industry for good. \n Most companies can't tell you why one person is a Senior and another isn't, or what either one should be paid. We're hiring the person who makes Grove able to answer that — and then builds the programs that make the answer real. \n The Pitch \n Grove is rebuilding its leveling guidelines from the ground up. Not adjusting bands — defining what a level actually means, across every function, in a company that looks nothing like it did two years ago. You'll help shape that framework alongside the Director of PX and People Ops leadership, and you'll own getting it out into the company and making it stick. \n We want comp analysis that arrives with the data already attached. Benchmark the role, build the band, model the offer, show your work. Leaders should be able to act on your recommendation without relitigating it. \n We want onboarding and talent management that actually connect. A new hire should know what their level means in week one, and their manager should know what growth into the next one looks like. \n On recruiting: talent acquisition is a small part of this role. You'll run a search when a req opens, and your hiring judgment matters — but reqs are episodic here, and th",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Grove Collaborative. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Hr & recruiting"
        ],
        "applyUrl": "https://jobicy.com/jobs/153076-talent-programs-lead",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/574531d8dd057e68801193a869098c18.jpeg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/574531d8dd057e68801193a869098c18.jpeg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/574531d8dd057e68801193a869098c18.jpeg",
        "postedAt": "2026-09-11",
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
