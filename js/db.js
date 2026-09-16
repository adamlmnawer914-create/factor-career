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
        "id": "job-1789573193-1",
        "title": "Talent Acquisition Specialist (Internal) - Candidate Experience",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Talent Acquisition Specialist (Internal) - Candidate Experience)",
        "company": "Haldren Group",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "South Africa",
        "location_ar": "South Africa",
        "salary": "$370,000 - $490,000 ZAR",
        "description": "This is a position within Haldren and not with one of its clients. \n This fully remote position contributes to reliable, compliant hiring processes by combining structured administration with clear communication and disciplined prioritisation. \n Key Responsibilities \n Provide market insights on talent availability, compensation signals, and competitor mapping \n Partner with stakeholders to define role requirements, success outcomes, and assessment approach \n Track progress and risks, escalating blockers early and proposing clear mitigation steps \n Support offer processes, reference checking, and onboarding coordination as needed \n Maintain rigorous documentation and candidate communication to protect experience and compliance \n Source, screen, and engage candidates using structured interviewing and market mapping \n Requirements \n Experience in recruitment delivery, sourcing, and structured screening \n Working knowledge of market mapping and candidate engagement techniques \n Ability to manage multiple requisitions or searches without compromising quality \n Strong written and verbal communication skills in a professional services environment \n High attention to detail, with consistent follow-through on deadlines and stakeholder expectations \n Comfort working with confidential information and applying sound judgement \n Ability to work effectively in a remote environment with disciplined time management \n Benefits \n Salary range: 370,000 - 490,000 \n Remote work arrangement (South",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Haldren Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Talent-acquisition",
            "Recruitment",
            "Internal-recruiting",
            "Sourcing"
        ],
        "applyUrl": "https://himalayas.app/companies/haldren-group/jobs/talent-acquisition-specialist-internal-candidate-experience-9423148780",
        "logo": "https://cdn-images.himalayas.app/989dk6a97vz0gr9cvzudl1w9x943",
        "companyLogo": "https://cdn-images.himalayas.app/989dk6a97vz0gr9cvzudl1w9x943",
        "image": "https://cdn-images.himalayas.app/989dk6a97vz0gr9cvzudl1w9x943",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-2",
        "title": "Strategic Account Executive - Healthcare Providers (West)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Strategic Account Executive - Healthcare Providers (West))",
        "company": "NICE",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "At NiCE, we don’t limit our challenges. We challenge our limits. Always. We’re ambitious. We’re game changers. And we play to win. We set the highest standards and execute beyond them. And if you’re like us, we can offer you the ultimate career opportunity that will light a fire within you. So, what’s the role all about? The Account Executive is responsible for seeking and maintaining relationships with NiCE Customers, identifying new sales opportunities, and building market share in their regions within Healthcare Providers . This position is required to increase revenue streams within business, commercial, and enterprise contact centers. This position requires candidates reside within the West Coast. How will you make an impact? \n Responsible for achieving annual sales quota and personally negotiating Enterprise-wide agreements. \n Coordinate and lead all sales activities to achieve business goals. \n Ensure the proposed sales and solutions capitalize on NiCE CXone Mpower's strengths and can be implemented successfully. \n Establishing new strategic relationships while maintaining existing relationships and analyzing customer’s business situations to identify constraints and new opportunities due to technological advances. \n Develop and maintain high-level relations with ‘C’levels. \n Initiate, support, develop and monitor purchasing agreements between NiCE CXone Mpower and the customer. \n Have you got what it takes? \n 10+ years of experience selling multiple software products ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة NICE. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Enterprise-saas-sales",
            "B2b-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/nice/jobs/strategic-account-executive-healthcare-providers-west-6840985633",
        "logo": "https://cdn-images.himalayas.app/y29y1b5kjleeny7saz5gf0xc3okd",
        "companyLogo": "https://cdn-images.himalayas.app/y29y1b5kjleeny7saz5gf0xc3okd",
        "image": "https://cdn-images.himalayas.app/y29y1b5kjleeny7saz5gf0xc3okd",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-3",
        "title": "People Ops Generalist",
        "title_ar": "People Ops Generalist (موارد بشرية وإدارة)",
        "company": "Jerry",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "You could work anywhere. Why us? \n Join a pre-IPO startup with capital, traction and runway ($240M funded | 70X revenue growth in 5 years | $2T market size) \n Disrupt a massive market and take us to a $10B business in the next few years \n Be immersed in a talent-dense environment and greatly accelerate your career growth \n About the opportunity: We are looking for a hands-on People Ops Generalist to join our dynamic team. Reporting to our Director of HR Operations, you will support day-to-day HR operations - from new employee onboarding and HR administration to compliance and employee support- while helping us build processes that scale as we grow. You’re comfortable operating independently, researching compliance requirements, and drafting policies for leadership review. You have a solid understanding of the employee lifecycle and bring a service-first mindset to every employee interaction. Jerry .ai is building the first super app to make car ownership affordable and accessible – insurance, buy/sell, registration, loans, safety, repairs, parking, etc – a $2T market in the U.S. We started with insurance in 2019, and since then we’ve launched driving insights, repair marketplace, car diagnostics, and a GenAI-powered chatbot & voicebot. We have amassed over 5M customers, raised $240MM in funding, scaled our revenue 70X and our team to 225 across 6 countries. How you will make an impact: \n Own the day-to-day administration of the employee lifecycle — onboarding, offboarding, em",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jerry. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Hr-operations-generalist",
            "People-ops-coordinator",
            "People-generalist"
        ],
        "applyUrl": "https://himalayas.app/companies/jerry/jobs/people-ops-generalist",
        "logo": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "companyLogo": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "image": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-4",
        "title": "Expression of Interest - iOS Developer",
        "title_ar": "مهندس ومطور برمجيات (Expression of Interest - iOS Developer)",
        "company": "Hiflylabs",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hungary",
        "location_ar": "Hungary",
        "salary": "Competitive",
        "description": "Responsibilities \n Develop native Swift/iOS applications \n Design user interfaces and functions as planned \n Take part in requirements gathering, project and technical planning \n Write Unit and UI tests, participate in developer testing \n Continuous learning \n Stay up-to-date with current technology trends in iOS development \n Work closely with teammates, helping each other \n Get to know procedures in different sectors \n Develop applications for businesses in all sizes \n Requirements \n 3+ years of experience in iOS development \n Comprehensive knowledge of Swift, iOS SDK, CocoaPods \n Advanced proficiency in English \n Experience with MVVM / VIPER, DI (Swinject) \n Knowledge of Human Interface Guidelines \n Networking (Moya, REST, OAuth) experience \n ReactiveX (RxSwift, RxCocoa) \n Combine \n SwiftUI \n Personal traits \n Proactive in finding solutions, adding constructive ideas \n Process driven with a keen eye for detail and quality \n Team player with a positive, open minded and friendly attitude \n Eager to learn and improve in both soft and technical skills \n Reliable, taking responsibility \n Customer focused attitude \n Nice to have \n Experience in writing Unit and UI tests \n SOLID, clean code knowledge \n SwiftLint, CI/CD \n App Store, distribution experience \n Experience in other platforms, web, backend, frontend, cross platform, etc. \n About the company We're Hiflylabs , a vibrant team of 250+ data and tech enthusiasts based in Budapest. From data engineering to data science, artif",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Hiflylabs. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ios-development",
            "Swift-development",
            "Ios-developer"
        ],
        "applyUrl": "https://himalayas.app/companies/hiflylabs/jobs/expression-of-interest-ios-developer-1987259264",
        "logo": "https://cdn-images.himalayas.app/6yiut6p43n074xizwbl71xjilc1h",
        "companyLogo": "https://cdn-images.himalayas.app/6yiut6p43n074xizwbl71xjilc1h",
        "image": "https://cdn-images.himalayas.app/6yiut6p43n074xizwbl71xjilc1h",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-5",
        "title": "Copy of VP Sales, Europe",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Copy of VP Sales, Europe)",
        "company": "Teton",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "VP Sales Europe Based out of the UK. About Teton Teton is building the foundational data layer for the point of care, using real-time, multimodal AI to generate a digital twin of the patient and care environment. Our product alleviates administrative inefficiencies and observational tasks that overburden healthcare professionals, enabling them to provide better patient care. Through a combination of in-room hardware, AI, and desktop and mobile applications, Teton helps create a seamless healthcare experience for both patients and providers. Our solution provides unprecedented access to real-time data insights, creating a digital twin of resident states and care delivery that empowers healthcare providers with actionable intelligence for optimal decision-making. With strong demand and clear product-market fit, Teton is focused on scaling its presence across Europe. We operate through a Country Director model across three established territories - the Nordics (Copenhagen), UK&I (London), and the DACH region (Zurich) - selling into both public hospital systems and care home operators. This is a rare opportunity to lead an established multi-country commercial organisation, bring consistency and governance across territories, and open Teton ’s next European markets. Key Responsibilities \n Lead, coach, and develop Teton ’s European sales organisation in the Nordics, UK&I, and DACH, holding each territory accountable to its new business targets. \n Own and optimise Teton ’s European ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Teton. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "European-sales-director",
            "Emea-sales-director",
            "Head-of-sales-emea",
            "Vp-of-global-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/teton/jobs/copy-of-vp-sales-europe",
        "logo": "https://cdn-images.himalayas.app/896trvdwcxq3n3oybbkar2779wdm",
        "companyLogo": "https://cdn-images.himalayas.app/896trvdwcxq3n3oybbkar2779wdm",
        "image": "https://cdn-images.himalayas.app/896trvdwcxq3n3oybbkar2779wdm",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-6",
        "title": "QA Automation Engineer (QB - QA - 20260617)",
        "title_ar": "مهندس ومطور برمجيات (QA Automation Engineer (QB - QA - 20260617))",
        "company": "Celara",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina",
        "location_ar": "Argentina",
        "salary": "Competitive",
        "description": "Our technology team is a rapidly growing group of talented and experienced engineers helping to build the leading enterprise software company focused on restaurant technology. We use modern technologies, automation, and AI-assisted engineering practices to build products that power restaurant operations at scale. We are looking for a hands-on, forward-thinking QA Automation Engineer to join our Kitchen Display System (KDS) team. This is an automation-first role where you'll own and extend automated test coverage for a business-critical platform used in restaurant operations. You will work within an established automation framework, help maintain healthy regression pipelines, improve test reliability, and partner closely with engineers to deliver high-quality software. This is a high-impact role on a fast-moving team where quality, automation, and continuous improvement are core to how we build and release software. What You'll Do Here ● Develop, maintain, and expand automated test coverage for the Kitchen Display System (KDS) platform. ● Design and execute automated UI, API, regression, and smoke tests. ● Build scalable, maintainable automation solutions using established framework patterns and best practices. ● Partner closely with developers, product managers, and QA engineers to ensure quality throughout the software development lifecycle. ● Investigate defects, troubleshoot test failures, and identify quality risks early in the development process. ● Maintain and improve ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Celara. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Qa-automation-engineer",
            "Sdet",
            "Automation-testing",
            "Quality-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/celara/jobs/qa-automation-engineer-qb-qa-20260617-4140721079",
        "logo": "https://cdn-images.himalayas.app/nphzqcv5ueqedocnnsdsy830qvan",
        "companyLogo": "https://cdn-images.himalayas.app/nphzqcv5ueqedocnnsdsy830qvan",
        "image": "https://cdn-images.himalayas.app/nphzqcv5ueqedocnnsdsy830qvan",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-7",
        "title": "Executive Assistant to Founders, NYC",
        "title_ar": "Executive Assistant to Founders, NYC (أخرى)",
        "company": "Scrunch AI",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$90,000 - $120,000 USD",
        "description": "About Scrunch Scrunch, a Sitecore company, is on a mission to bring brands to an AI-first future—where people increasingly rely on LLMs to discover, understand, and act on information that matters to them. As AI search and conversational agents replace traditional web search and browsing, Scrunch helps marketing teams rethink how their products and services are discovered and surfaced on AI platforms like ChatGPT, Claude, Gemini, and more—working with AI platforms, not against them. This shift represents the biggest change to marketing since the dawn of the internet. Today, more than 500 paying brands—including Fortune 500 companies like Lenovo, category-defining brands like Akamai, ADP, Lenovo and breakout startups like Clerk—use the platform. About the Role This is not a calendar-and-travel-only role. You’ll be the operational backbone for the founders - anticipating needs, creating systems, removing friction, and making sure nothing slips through the cracks. You’ll handle both professional and personal priorities so the founders can focus on leading the company. You’ll also help train us to work better with you. You must be based in NYC for this role. It is hybrid with an in-office requirement of 3 days/week. What You’ll Do \n Own and manage complex calendars, meetings, and travel - ruthlessly prioritizing for impact. \n Act as a gatekeeper for time and energy; help the founders focus on what matters most. \n Prepare agendas, capture and track action items, and follow up rele",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Scrunch AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ceo-executive-assistant"
        ],
        "applyUrl": "https://himalayas.app/companies/scrunch/jobs/executive-assistant-to-founders-nyc",
        "logo": "https://cdn-images.himalayas.app/fr3sk39sygrlzcyqnyi45oxbsm1p",
        "companyLogo": "https://cdn-images.himalayas.app/fr3sk39sygrlzcyqnyi45oxbsm1p",
        "image": "https://cdn-images.himalayas.app/fr3sk39sygrlzcyqnyi45oxbsm1p",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-8",
        "title": "BDR, Enterprise AI Automation (SF)",
        "title_ar": "BDR, Enterprise AI Automation (SF) (برمجة وتكنولوجيا)",
        "company": "Lavendo",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$100,000 - $150,000 USD",
        "description": "Lavendo partners with startups and high‑growth companies to help them hire top‑tier sales, GTM, and technical talent. This role is with one of our clients; we’ll share full details about the company and interview process as we get to know you and confirm mutual fit. About the Company Our client is a Series A startup based in San Francisco's Mission District, with about 20 people on the team. They're going after legacy automation giants that have dominated the RPA space for years with an AI platform that learns how a person does a task and then does it for them. With $19.75M raised, they're seeing 40% month-over-month growth and building a repeatable sales motion at a critical inflection point The idea is simple: teaching software to do a job shouldn't be harder than showing a coworker how to do it. Their AI agents watch a person complete a workflow, then repeat it inside real enterprise systems, whether that's a browser app, Windows, or Citrix. Big insurers, healthcare companies, and fintechs are already using it to cut costs and speed up work that used to run on old-school RPA tools. The Opportunity Join a fast-growing sales team and help fuel the pipeline at a genuine inflection point. You'll be a sharp, tenacious outbound seller who thrives on cold calls and books qualified meetings with enterprise buyers. What You'll Do \n Drive outbound prospecting through cold calls and cold emails to generate qualified meetings for the AE team \n Hit and exceed a monthly quota of ~10 qua",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lavendo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Enterprise-bdr",
            "Enterprise-ai-automation",
            "Bdr"
        ],
        "applyUrl": "https://himalayas.app/companies/lavendo/jobs/bdr-enterprise-ai-automation-sf",
        "logo": "https://cdn-images.himalayas.app/j6oscwwawti8orzg0qr9oekfjgrm",
        "companyLogo": "https://cdn-images.himalayas.app/j6oscwwawti8orzg0qr9oekfjgrm",
        "image": "https://cdn-images.himalayas.app/j6oscwwawti8orzg0qr9oekfjgrm",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-9",
        "title": "Clinical Audio Transcriber - Expert",
        "title_ar": "Clinical Audio Transcriber - Expert (أخرى)",
        "company": "mercor",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$30 - $30 USD",
        "description": "About the job Mercor connects elite creative and technical talent with leading AI research labs. Headquartered in San Francisco, our investors include Benchmark , General Catalyst , Peter Thiel , Adam D'Angelo , Larry Summers , and Jack Dorsey . Position: Audio Transcriber - Clinical Conversation Data Type: Contract Compensation: $30/hour Location: Remote Role Responsibilities \n Evaluate machine-generated draft transcripts against audio segments of 30 to 45 seconds. \n Correct transcripts for accuracy, focusing on critical words that impact meaning. \n Apply transcription specifications precisely, including verbatim capture and speaker labels. \n Ensure word-level timing accuracy and tag vocal artifacts like laughter and crosstalk. \n Flag uncertain medical terms for review by clinical specialists. \n Qualifications Must-Have \n Native or near-native English listening comprehension. \n Comfort with detailed specifications and consistent formatting. \n A quiet working environment and over-ear headphones. \n Preferred \n Prior experience in transcription, captioning, subtitling, or audio annotation. \n Familiarity with medical terminology. \n Application Process (Takes 20–30 mins to complete) \n Upload resume \n AI interview based on your resume \n Submit form \n Resources & Support \n For details about the interview process and platform information, please check: \n For any help or support, reach out to: \n PS: Our team reviews applications daily. Please complete your AI interview and applicatio",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة mercor. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Clinical-transcription",
            "Medical-transcription",
            "Audio-transcription",
            "Transcriptionist"
        ],
        "applyUrl": "https://himalayas.app/companies/mercor/jobs/clinical-audio-transcriber-expert-9878369824",
        "logo": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "companyLogo": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "image": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-10",
        "title": "Program Manager",
        "title_ar": "مدير وقائد فريق (Program Manager)",
        "company": "Darkroom",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Brazil, Portugal, Spain",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Darkroom Darkroom is the leading next-generation growth marketing firm engineering the brands of tomorrow. Founded in 2017, we set out to redefine what a modern agency could be, by replacing the inertia of legacy advertising behemoths with a model built for speed, intelligence, and measurable impact. At our core, Darkroom is a human services company powered by Shadow, a universal AI commerce layer that integrates executive-level strategy with proprietary agentic technology. This fusion enables our teams to deliver outsized returns by enhancing creative output, operational efficiency, and revenue generation across every stage of the customer journey. Our track record speaks for itself: billions in attributable revenue driven across e-commerce marketplaces, media networks, DTC ecosystems, and social commerce platforms. Every engagement feeds into our proprietary data infrastructure, enabling a continuous feedback loop that accelerates growth, improves margins, and compounds results across our client portfolio. What began as a boutique design studio has evolved into one of the fastest-growing private companies in America (Inc. 5000) and among the most effective performance media agencies of the 2020s (Varos). Our founders were recognized by Forbes 30 Under 30 for advancing the intersection of technology, marketing, and advertising, cementing Darkroom 's role as a defining player in the future of media innovation. About the Role This is a dedicated role on a single account,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Darkroom. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Program-manager",
            "Project-program-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/darkroom/jobs/program-manager",
        "logo": "https://cdn-images.himalayas.app/zir5bg4e46y031xclwqmqjm2ek7t",
        "companyLogo": "https://cdn-images.himalayas.app/zir5bg4e46y031xclwqmqjm2ek7t",
        "image": "https://cdn-images.himalayas.app/zir5bg4e46y031xclwqmqjm2ek7t",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-11",
        "title": "Data Analyst",
        "title_ar": "Data Analyst (برمجة وتكنولوجيا)",
        "company": "Conetic Group",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Portugal",
        "location_ar": "Portugal",
        "salary": "Competitive",
        "description": "Conetic is an innovative global company dedicated to transforming the flying experience by making the passenger journey engaging and truly memorable. We specialize in comprehensive media services, with a focus on creating more personalized and engaging experiences for travelers at every step of the journey. By uniting Touch Inflight Solutions and ABOVE, Conetic brings together a leading IFE content service provider and a robust cloud-based media distribution platform. This combination of curated content, data-driven personalization, and an automated cloud media supply chain enables airlines to deliver fresh, personalized content to passengers faster and more efficiently through a seamless, end-to-end solution. About the role: As our Data Analyst, you will provide essential support to the Digital Products & Innovation department by performing a variety of data analysis tasks, such as organizing large amounts of data, defining trends and patterns, as well as supporting data architects on other projects. About the responsibilities: \n Conduct complex data analysis and report on results; \n Interpret trends and patterns \n Evaluate business needs and objectives \n Analyze and organize raw information from different sources \n Build data systems, pipelines, algorithms and prototypes \n Develop analytical tools and programs \n Explore ways to enhance data quality and reliability \n Prepare data for prescriptive and predictive modeling \n Identify opportunities for data acquisition \n Collabo",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Conetic Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-analyst",
            "Analytics-analyst",
            "Data-science-analyst",
            "Financial-data-analyst"
        ],
        "applyUrl": "https://himalayas.app/companies/conetic-group/jobs/data-analyst",
        "logo": "https://cdn-images.himalayas.app/z8ohzbxvq8uykclmorqbnwuik1fe",
        "companyLogo": "https://cdn-images.himalayas.app/z8ohzbxvq8uykclmorqbnwuik1fe",
        "image": "https://cdn-images.himalayas.app/z8ohzbxvq8uykclmorqbnwuik1fe",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573194-12",
        "title": "Head of Technical Recruiting",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Head of Technical Recruiting)",
        "company": "Bjak",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hong Kong",
        "location_ar": "Hong Kong",
        "salary": "Competitive",
        "description": "About ActAI There are over 5 billion users using basic applications today such email, notes, tasks, calendar and they're not AI-native. Our mission is to build proactive applications for anyone in the world, who are not used to complex prompting. We aim to bring intelligence to conversations, errands, organising and workflows, with minimal to no prompting. Our product focuses on achieving high reliability for long-running workflows, persistent context, and real-world task completion. We believe products will greatly reduce hallucinations Our objective is to organise anyone's life, allowing us all to spend time on valuable and meaningful things About the Role As Head of Technical Recruiting, you will own ActAI's global technical recruiting function and be accountable for building the engineering and AI teams required to scale the company. What You Will Be Doing \n Own technical hiring across ActAI, including AI/ML, backend, infrastructure, web, mobile and engineering leadership. \n Build the technical recruiting strategy, team structure, hiring priorities and operating cadence required to meet company hiring goals. \n Personally lead searches for critical and senior hires, from market mapping and headhunting through assessment, offer negotiation and closing. \n Set the standard for candidate quality, ensuring recruiters evaluate actual technical contribution, complexity and relevance rather than relying on titles, companies or keywords. \n Partner directly with engineering and comp",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Head-of-recruiting",
            "Head-of-recruitment"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/head-of-technical-recruiting-2175897551",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-13",
        "title": "Senior Product Manager",
        "title_ar": "مدير وقائد فريق (Senior Product Manager)",
        "company": "Blockworks",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$150,000 - $200,000 USD",
        "description": "About Us: Blockworks is an information platform that sits at the center of the crypto industry. We transform raw, complex data and facts into actionable research, trusted alpha-driven insights, and world-class events. The result is transparency and confidence. Blockworks connects investors and businesses in onchain capital markets. We give businesses a platform to earn trust and provide investors with the information they need to underwrite the asset class. Who You Are You are a strong product leader who wants to keep building products directly while developing other Product Managers. You have managed PMs before and know how to set a high bar, give direct feedback, and help people become stronger product leaders. You stay close to customers and love to build. You work closely with Design and Engineering to break big bets into small releases that teach us something, and you believe great products come from continuous development grounded in the product vision and customer feedback. \n What You’ll Do As our Senior Product Manager, you will own a meaningful area of our product portfolio while managing three Product Managers who lead other products across Blockworks . Your specific product ownership will be shaped by your experience and where you can have the greatest impact. \n Develop Product Managers: Set clear expectations and give direct feedback to help PMs grow while maintaining real ownership over their products. \n Develop Product Strategy: Turn customer needs, company obje",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Blockworks. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://himalayas.app/companies/blockworks/jobs/senior-product-manager",
        "logo": "https://cdn-images.himalayas.app/bq023we9y62k0wd0z0zi4ijvh8t7",
        "companyLogo": "https://cdn-images.himalayas.app/bq023we9y62k0wd0z0zi4ijvh8t7",
        "image": "https://cdn-images.himalayas.app/bq023we9y62k0wd0z0zi4ijvh8t7",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-14",
        "title": "Marketing Lead",
        "title_ar": "أخصائي تسويق ونمو (Marketing Lead)",
        "company": "Harmony",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Harmony is an open blockchain with data sharding and fast finality. Social games and community AI can use our onchain tokens for micro-payments, smart contracts for market pricing, and zero-knowledge proofs for data privacy. \n Harmony ’s mission is to scale trust and create a radically fair economy. Our platform is decentralized, scalable and secure to settle any transactions without trusted parties. 🚀 Building a (Rocket)Ship We are a Day-1 startup. Blockchains are becoming the foundation of the global economy, yet their adoption is at only 1%. That means that you as a pioneer and developer are shaping the future with 10X impact. Harmony is a community-driven project, a network with hundreds of applications, and a team wearing crazy ambitions on their sleeves. Because the invincible summer awaits! For engineers, we value your deep understanding of how bytes work. You are a tool maker, a system hacker, and a math nerd all in ONE. Your typical day involves prototyping a top-conference research paper, debugging and profiling in hexdecimal, or writing updates to coordinate asynchronouly with tens of engineers in the open. Building a blockchain is like jumping off the cliff while assembling the plane engine on the fly – but, if you can thrive in chaos, why NOT? For creatives, we approve your obsession with user experience. You are a product designer, a brand manager, and an industry analyst all in ONE. Your typical day involves studying what delights and what hurts through hard me",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Harmony. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing-lead",
            "Blockchain-marketing",
            "Brand-management",
            "Community-management"
        ],
        "applyUrl": "https://himalayas.app/companies/harmony-io/jobs/marketing-lead-5929359693",
        "logo": "https://cdn-images.himalayas.app/edtb3umnf5w34vj6prb6n48fzddx",
        "companyLogo": "https://cdn-images.himalayas.app/edtb3umnf5w34vj6prb6n48fzddx",
        "image": "https://cdn-images.himalayas.app/edtb3umnf5w34vj6prb6n48fzddx",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-15",
        "title": "HR Generalist",
        "title_ar": "HR Generalist (موارد بشرية وإدارة)",
        "company": "Jerry",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$80,000 - $100,000 USD",
        "description": "You could work anywhere. Why us? \n Join a pre-IPO startup with capital, traction and runway ($240M funded | 70X revenue growth in 5 years | $2T market size) \n Disrupt a massive market and take us to a $10B business in the next few years \n Be immersed in a talent-dense environment and greatly accelerate your career growth \n About the opportunity: We are looking for a hands-on HR Generalist to join our dynamic team. Reporting to our Director of HR Operations, you will support day-to-day HR operations - from new employee onboarding and HR administration to compliance and employee support- while helping us build processes that scale as we grow. You’re comfortable operating independently, researching compliance requirements, and drafting policies for leadership review. You have a solid understanding of the employee lifecycle and bring a service-first mindset to every employee interaction. Jerry .ai is building the first super app to make car ownership affordable and accessible – insurance, buy/sell, registration, loans, safety, repairs, parking, etc – a $2T market in the U.S. We started with insurance in 2019, and since then we’ve launched driving insights, repair marketplace, car diagnostics, and a GenAI-powered chatbot & voicebot. We have amassed over 5M customers, raised $240MM in funding, scaled our revenue 70X and our team to 225 across 6 countries. How you will make an impact: \n Own the day-to-day administration of the employee lifecycle — onboarding, offboarding, employee f",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jerry. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Hr-generalist",
            "People-generalist",
            "Hr-operations-generalist"
        ],
        "applyUrl": "https://himalayas.app/companies/jerry/jobs/hr-generalist",
        "logo": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "companyLogo": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "image": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-16",
        "title": "Full Stack Engineer - Cloud & SaaS Integrations",
        "title_ar": "مهندس ومطور برمجيات (Full Stack Engineer - Cloud & SaaS Integrations)",
        "company": "DoiT International",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Ireland",
        "location_ar": "Ireland",
        "salary": "Competitive",
        "description": "Location Our Full Stack Software Engineer will be an integral part of our R&D team. This role is based remotely as a full-time employee in the UK, Ireland, Estonia, the Netherlands, Sweden and Israel. We are also open to contractors in Eastern Europe and Portugal. Who We Are DoiT is a global technology company that works with cloud-driven organizations to leverage the cloud to drive business growth and innovation. We combine data, technology, and human expertise to ensure our customers operate in a well-architected and scalable state - from planning to production. Delivering DoiT Cloud Intelligence, the only solution that integrates advanced technology with human intelligence, we help our customers solve complex multicloud problems and drive efficiency.With decades of multicloud experience, we have specializations in Kubernetes, GenAI, CloudOps, and more. An award-winning strategic partner of AWS, Google Cloud, and Microsoft Azure, we work alongside more than 4,000 customers worldwide. The Opportunity Cloud spend is no longer just AWS, Google Cloud and Azure. Our customers now run a large and growing share of their technology spend through SaaS platforms, data clouds and AI vendors - and every one of those vendors is an integration that brings another slice of their spend into view. You'll own DoiT's Integrations Framework and the experience built on top of it. This is a chance to define what a great integration experience looks like: a customer connects a new vendor in minut",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة DoiT International. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Full-stack-engineering",
            "Backend-engineering",
            "Frontend-engineer",
            "Cloud-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/doit-international/jobs/full-stack-engineer-cloud-saas-integrations-3618877210",
        "logo": "https://cdn-images.himalayas.app/783hl6hojaixfjsg0zz0dj37u8x6",
        "companyLogo": "https://cdn-images.himalayas.app/783hl6hojaixfjsg0zz0dj37u8x6",
        "image": "https://cdn-images.himalayas.app/783hl6hojaixfjsg0zz0dj37u8x6",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-17",
        "title": "Customer Success Associate",
        "title_ar": "Customer Success Associate (خدمة ودعم العملاء)",
        "company": "Samsara",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$78,412 - $101,475 CAD",
        "description": "Who we are \n Samsara (NYSE: IOT) is the pioneer of the Connected Operations™ Cloud, which is a platform that enables organizations that depend on physical operations to harness Internet of Things (IoT) data to develop actionable insights and improve their operations. At Samsara , we are helping improve the safety, efficiency and sustainability of the physical operations that power our global economy. Representing more than 40% of global GDP, these industries are the infrastructure of our planet, including agriculture, construction, field services, transportation, and manufacturing — and we are excited to help digitally transform their operations at scale. \n Working at Samsara means you’ll help define the future of physical operations and be on a team that’s shaping an exciting array of product solutions, including Video-Based Safety, Vehicle Telematics, Apps and Driver Workflows, and Equipment Monitoring. As part of a recently public company, you’ll have the autonomy and support to make an impact as we build for the long term. \n About the role: Our Customer Success Managers pick up where our Implementation team leaves off, working closely with our top customers to understand their fleet and unique challenges, advising on how to customize Samsara for their needs, and becoming their long-term partner. Your role will be cross-functional in nature, working alongside and connecting Sales, Support, Sales Engineering, and Product, enabling you to experience multiple aspects of a hyp",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Samsara. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer-success",
            "Account-management",
            "Strategic-consulting"
        ],
        "applyUrl": "https://himalayas.app/companies/samsara/jobs/customer-success-associate",
        "logo": "https://cdn-images.himalayas.app/ipyxawvtrc5dl5owsm0gmjjbj7w3",
        "companyLogo": "https://cdn-images.himalayas.app/ipyxawvtrc5dl5owsm0gmjjbj7w3",
        "image": "https://cdn-images.himalayas.app/ipyxawvtrc5dl5owsm0gmjjbj7w3",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-18",
        "title": "Senior Technical Product Marketing Manager, Agent Identity & Auth (EMEA)",
        "title_ar": "أخصائي تسويق ونمو (Senior Technical Product Marketing Manager, Agent Identity & Auth (EMEA))",
        "company": "Kong",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Are you ready to unlock intelligence? If you don’t think you meet all of the criteria below but are still interested in the job, please apply. Nobody checks every box - we’re looking for candidates that are particularly strong in a few areas, and have some interest and capabilities in others. Senior Technical Product Marketing Manager, Agent Identity & Auth (EMEA) Location: EMEA About the Role As enterprises move from AI experiments to production agentic systems, a new problem has emerged: agents are non-human actors that need identity, authentication, and authorization — and the traditional identity stack wasn't built for them. This role owns Kong 's story in one of the most important emerging categories in AI infrastructure. As Senior Technical PMM for Agent Identity & Auth, you'll define how the market understands agent identity: how agents are authenticated, what they're authorized to access, and how enterprises establish trust and accountability across autonomous systems. This is a category-shaping role. You'll build the narrative for a market that's still being defined, with the opportunity to establish Kong as the definitive voice on non-human identity in agentic architectures. What You'll Do \n Own positioning and messaging for agent identity and auth — Define the technical narrative for how Kong authenticates, authorizes, and governs agents and other non-human actors across AI and API traffic. \n Shape the category — Develop thought leadership that frames the agent ide",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kong. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://himalayas.app/companies/kong/jobs/senior-technical-product-marketing-manager-agent-identity-auth-emea",
        "logo": "https://cdn-images.himalayas.app/iiscvtmpw5x6mkao4ncys1rrdclh",
        "companyLogo": "https://cdn-images.himalayas.app/iiscvtmpw5x6mkao4ncys1rrdclh",
        "image": "https://cdn-images.himalayas.app/iiscvtmpw5x6mkao4ncys1rrdclh",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-19",
        "title": "Recruiting Operations Coordinator",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Recruiting Operations Coordinator)",
        "company": "Bjak",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hong Kong",
        "location_ar": "Hong Kong",
        "salary": "Competitive",
        "description": "About ActAI There are over 5 billion users using basic applications today such email, notes, tasks, calendar and they're not AI-native. Our mission is to build proactive applications for anyone in the world, who are not used to complex prompting. We aim to bring intelligence to conversations, errands, organising and workflows, with minimal prompting. Our product focuses on achieving high reliability for long-running workflows, persistent context, and real-world task completion. We believe products will greatly reduce hallucinations. Our objective is to organise anyone's life, allowing us all to spend time on valuable and meaningful things. About the Role We are looking for a Recruiting Operations Coordinator to help scale our hiring. You will be responsible for keeping hiring operations running efficiently across multiple functions and markets. This includes interview coordination, ATS management, candidate communication, reporting, recruiter support, and maintaining high-quality hiring processes. This role is ideal for someone who enjoys bringing structure to fast-moving environments and takes pride in execution and attention to detail. What You Will Be Doing \n Coordinate interviews across candidates, interviewers, and hiring teams. \n Manage candidate communication throughout the hiring process. \n Maintain ATS data quality, workflows, and hiring records. \n Track hiring pipelines and ensure timely follow-ups. \n Support recruiter and hiring manager operations. \n Prepare hiring",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Recruiting-coordinator"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/recruiting-operations-coordinator-7839333994",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-20",
        "title": "Principal Cloud Engineer",
        "title_ar": "مهندس ومطور برمجيات (Principal Cloud Engineer)",
        "company": "General Dynamics Information Technology",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$136,000 - $184,000 USD",
        "description": "Type of Requisition: Regular Clearance Level Must Currently Possess: None Clearance Level Must Be Able to Obtain: None Public Trust/Other Required: None Job Family: IT Infrastructure and Operations Job Qualifications: Skills: AWS CloudFormation, Cloud Architectures, Cloud Computing, Infrastructure Automation, Solution Architecture Certifications: None Experience: 6 + years of related experience US Citizenship Required: No Job Description: Advance how our customers operate while you advance your career. Join GDIT as a Cloud Engineer Principal and build an impactful career in enterprise IT, collaborating with people who are driven and resourceful like you. As a Cloud Engineer Principal, the work you’ll do at GDIT will be impactful to the mission of Healthcare Fraud prevention Partnership (HFPP) Trusted Third party (TTP). You will play a crucial role in the mission of fighting fraud waste and abuse. MEANINGFUL WORK AND PERSONAL IMPACT: \n Design, implement, modernize, and operationally support AWS-based cloud environments and hybrid cloud infrastructure. \n Develop and maintain cloud architecture patterns, reference architectures, reusable templates, and engineering standards for secure, scalable, resilient, and cost-effective platforms. \n Independently drive complex cloud initiatives, owning detailed design and implementation across infrastructure, application support, data engineering, cybersecurity, networking, and operations domains. \n Design, deploy, document, and validate mu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة General Dynamics Information Technology. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cloud-engineer",
            "Cloud-architecture",
            "Aws-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/general-dynamics-information-technology/jobs/principal-cloud-engineer",
        "logo": "https://cdn-images.himalayas.app/ohvfbvkyra12vuhjr53nbj4t1ets",
        "companyLogo": "https://cdn-images.himalayas.app/ohvfbvkyra12vuhjr53nbj4t1ets",
        "image": "https://cdn-images.himalayas.app/ohvfbvkyra12vuhjr53nbj4t1ets",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789573195-21",
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
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789573195-22",
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
        "id": "job-1789573195-23",
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
        "id": "job-1789573195-24",
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
        "id": "job-1789573195-25",
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
        "id": "job-1789573195-26",
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
        "id": "job-1789573195-27",
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
        "id": "job-1789573195-28",
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
        "id": "job-1789573195-29",
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
        "id": "job-1789573195-30",
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
        "id": "job-1789573195-31",
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
        "id": "job-1789573195-32",
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
        "id": "job-1789573195-33",
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
        "id": "job-1789573195-34",
        "title": "Sr. Sustainability Consultant - Fokus PCF/LCA @ Climate Tech Start-up (m/w/d) - 100% Remote möglich",
        "title_ar": "Sr. Sustainability Consultant - Fokus PCF/LCA @ Climate Tech Start-up (m/w/d) - 100% Remote möglich (برمجة وتكنولوجيا)",
        "company": "Global Changer",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Bist Du auf der Suche nach einem Job mit Sinn? \n Dann unterstütze mit uns große Unternehmen dabei ihre Emissionen schneller zu reduzieren. \n Um unser Wachstum in der DACH-Region weiter zu beschleunigen, suchen wir eine:n ( Sr.) Sustainability Consultant (m/w/d). Deutsch (C2) und Englisch (C1) werden benötigt. \n Über Global Changer: \n Global Changer ist ein innovatives Climate-Tech-Unternehmen, das B2B-Kunden eine KI gestützte Sustainability Management Plattform anbietet, um CCFs und PCFs schneller zu berechnen und Net-Zero und regulatorischen Anforderungen zu erreichen. \n Unsere Mission ist es, Unternehmen dabei zu unterstützen ihre Emissionen möglichst schnell zu reduzieren und damit eine lebenswerte Welt zu erhalten. Wieso Unternehmen? Weil sie auf einen Großteil der Emissionen einen direkten oder indirekten Einfluss haben und wir so einen möglichst großen Impact erreichen. \n Zu unseren Kunden gehören Unternehmen wie Heraeus (eines der größten Familienunternehmen Deutschlands), Bünting und Tchibo. Zu unseren Partnern gehören z.B. die Commerzbank, SCHUFA und die sustainable AG (eine der größten Nachhaltigkeitsberatungen in DE). \n Aufgaben \n Wir suchen eine:n Sr. Sustainability Consultant mit Fokus auf PCFs/LCA, der/die sich leidenschaftlich für das wohlergehen unseres Planeten einsetzen möchte. \n Wir schätzen Erfahrung und Werte mehr als akademische Abschlüsse. \n Du wirst... \n unseren PCF / LCA Kundenprozess aufbauen, stetig weiterentwickeln und mit Kunden durchführen \n Betr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Global Changer. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Business consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/global-changer/sr-sustainability-consultant-fokus-pcf-lca-at-climate-tech-start-up-100-remote-moglich-berlin-272330",
        "logo": "https://logo.clearbit.com/globalchanger.com",
        "companyLogo": "https://logo.clearbit.com/globalchanger.com",
        "image": "https://logo.clearbit.com/globalchanger.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-35",
        "title": "Cloud & Data Engineering Intern / Working Student (m/f/d) - Full-Stack Data Platforms & AI Automation",
        "title_ar": "مهندس ومطور برمجيات (Cloud & Data Engineering Intern / Working Student (m/f/d) - Full-Stack Data Platforms & AI Automation)",
        "company": "PFASuiki GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "no experience required / student",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Oberhaching",
        "location_ar": "Oberhaching",
        "salary": "Competitive",
        "description": "PFASuiki is a climate-tech startup with a clear mission: creating a world free from persistent “forever chemicals.” Using advanced electrochemical oxidation technology, we develop solutions to permanently destroy PFAS and transform contaminated streams into safe water. \n We are looking for an ambitious Cloud & Data Engineering Intern / Working Student to help build the digital backbone of our technology development. You will work at the intersection of cloud engineering, full-stack development, scientific data and AI – turning experimental data and analysis tools into scalable, production-grade infrastructure. \n Location: Oberhaching (South of Munich) – 100% on-site. \n Tasks \n • Maintain and optimize our GCP/Firebase cloud infrastructure with a focus on reliability, scalability and security \n• Expand our TypeScript/JavaScript-based laboratory data platform and improve the user experience for R&D and engineering teams \n• Build robust data pipelines connecting experimental data, databases, analysis tools and dashboards \n• Translate existing scientific Python analysis code into scalable, web-based workflows \n• Identify and implement LLM/AI integrations for data synthesis, automated reporting and environmental/industry intelligence \n• Develop clear dashboards that turn complex electrochemical data into actionable insights \n• Improve our existing codebase, architecture and technical documentation to evolve prototypes into sustainable company standards \n• Work directly with our R&D",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PFASuiki GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data processing",
            "Data engineer"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pfasuiki-gmbh/cloud-data-engineering-intern-working-student-full-stack-data-platforms-ai-automation-oberhaching-170366",
        "logo": "https://logo.clearbit.com/pfasuikigmbh.com",
        "companyLogo": "https://logo.clearbit.com/pfasuikigmbh.com",
        "image": "https://logo.clearbit.com/pfasuikigmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-36",
        "title": "Consultant Education & Sales Operations (m/w/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Consultant Education & Sales Operations (m/w/d))",
        "company": "Strategy Core Ventures GmbH",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Worum geht’s? \n Du hast genug von einem Job ohne Weiterentwicklungsmöglichkeiten – ohne Verantwortung, ohne Aufstieg, ohne echtes Ergebnis? \n Bei SC Ventures übernimmst du echte Verantwortung – aber nicht für die Umsetzung, sondern für die Führung und Beratung: \nDu arbeitest im direkten Austausch mit den Geschäftsführungen zertifizierter Bildungsträger (AZAV) und begleitest sie beim Aufbau skalierbarer Vertriebs- und CRM-Strukturen. \n Dabei trainierst du deren Vertriebsteams anhand bewährter Vorlagen, Methoden und Prozesse – mit dem Ziel, Vertriebsergebnisse messbar zu verbessern. \nDu berätst, führst und steuerst. \n **Wenn du Ergebnisse lieferst, wirst du daran beteiligt: \n**Ab dem zweiten Jahr erhältst du eine Umsatzbeteiligung an deinen Bestandskunden – transparent, leistungsbasiert und ohne Politik. Die Beteiligung ist vertraglich geregelt und greift, sobald einer deiner betreuten Kunden seinen Beratungsvertrag mit uns verlängert. \n Damit profitierst du direkt von nachhaltigen Ergebnissen und Kundenbindung – kein leeres Versprechen, sondern echtes Mitverdienen. \n Wir reden nicht über Skalierung – wir setzen sie um. \n Jährlich werden über 50 Bildungsträger Partnerbetrieb von SC Ventures – weil wir nicht nur beraten, sondern aus der Praxis kommen. \nWir selbst haben innerhalb von drei Jahren einen Bildungsträger mit über 50 Teammitgliedern aufgebaut – durch klare Vertriebs- und CRM-Strukturen, bundesweite Sichtbarkeit und messbare Ergebnisse. Dieses Fundament bildet heute die",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Strategy Core Ventures GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/strategy-core-ventures-gmbh/consultant-education-sales-operations-hamburg-224970",
        "logo": "https://logo.clearbit.com/strategycoreventuresgmbh.com",
        "companyLogo": "https://logo.clearbit.com/strategycoreventuresgmbh.com",
        "image": "https://logo.clearbit.com/strategycoreventuresgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-37",
        "title": "Senior Consultant Konzernkunden / Strategieberatung (m/w/d)",
        "title_ar": "Senior Consultant Konzernkunden / Strategieberatung (m/w/d) (أخرى)",
        "company": "Strategy Core Ventures GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Worum geht's? \n Du hast bei KPMG, BCG, McKinsey, Bain oder einer vergleichbaren Beratung gelernt, wie man auf Vorstandsebene überzeugt, komplexe Transformationen strukturiert und unter Druck liefert. \n Und du hast gemerkt: Die Decks werden größer, die Hierarchien länger, dein Impact auf die eigentliche Entscheidung wird kleiner. Up-or-out, 60-Stunden-Wochen für die Marke eines anderen, drei Freigabeschleifen bevor du mit dem Mandanten überhaupt sprechen darfst. \n Bei SC Ventures drehen wir das um: Du übernimmst eigene Mandate bei etablierten Unternehmen mit wachsender Komplexität und sprichst direkt mit der Geschäftsführung oder dem Vorstand. Keine Pyramide dazwischen. Keine drei Partner, die sich vorher abstimmen müssen. \n Was du bei einer Big4/MBB-Beratung an Struktur, Methodik und Executive-Kommunikation gelernt hast, bringst du zu uns – und wirst gleichzeitig daran beteiligt, was du aufbaust: Sobald deine Bestandskunden verlängern, bekommst du eine vertraglich geregelte Umsatzbeteiligung. Kein Bonus-Pool, keine Politik – dein Ergebnis, deine Beteiligung. \n Wir sind kein Konzern. Wir sind ein schnell wachsendes Team, das im Bildungssektor bereits über 100 Träger jährlich betreut – Mandate, die von etablierten Bildungsträgern mit mehreren Standorten über wachsende Mittelständler bis hin zu Konzernmandaten reichen. Du gestaltest mit, wie dieser Bereich strukturiert wird, nicht nur, wie er ausgeführt wird. \n Aufgaben \n Was dich erwartet: \n Du verantwortest eigenständig Beratu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Strategy Core Ventures GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/strategy-core-ventures-gmbh/senior-consultant-konzernkunden-strategieberatung-hamburg-443931",
        "logo": "https://logo.clearbit.com/strategycoreventuresgmbh.com",
        "companyLogo": "https://logo.clearbit.com/strategycoreventuresgmbh.com",
        "image": "https://logo.clearbit.com/strategycoreventuresgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-38",
        "title": "Cloud and AI Engineer",
        "title_ar": "مهندس ومطور برمجيات (Cloud and AI Engineer)",
        "company": "CHAPTERS Group AG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "professional / experienced",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Cologne",
        "location_ar": "Cologne",
        "salary": "Competitive",
        "description": "About CHAPTERS Group \n CHAPTERS Group AG is a Hamburg-based holding company investing in 55+ mission-critical software companies across the DACH region, France, and the Czech Republic. Our companies deliver the digital solutions that keep the public sector and core industries running. What they do matters in daily life. \n AI has rapidly disrupted the software industry, and we aim to lead that transformation across our portfolio. Central to this is the AI Core team: we build and operate a shared enterprise AI Hub used by companies across the group, and drive adoption through a network of AI Champions. Each portfolio company has one designated power user who leads AI enablement locally, runs training, and scales usage within their organisation. \n Tasks \n The Role \n You are a core member of the AI Core team, owning the infrastructure that powers AI adoption across 55+ portfolio companies . Your focus is the AI Hub platform (Open WebUI): you keep it running, deploy new instances, build and validate integrations at HQ level, and make sure every company in the group gets a stable, well-configured environment. \n We build the AI Hub as a product and support to ship it in every company. Each company owns their HUB and administers it (L1 Support). You are part of the central team that drives features and changes that are of high value for all hubs in the portfolio. \n In addition, you are part of the team that serves as the center of expertise (L2 Support) and give guidance and hands-on",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CHAPTERS Group AG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/chapters-group-ag/cloud-and-ai-engineer-cologne-473530",
        "logo": "https://logo.clearbit.com/chaptersgroupag.com",
        "companyLogo": "https://logo.clearbit.com/chaptersgroupag.com",
        "image": "https://logo.clearbit.com/chaptersgroupag.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-39",
        "title": "Executive Assistant (m/w/d) für den CEO",
        "title_ar": "Executive Assistant (m/w/d) für den CEO (أخرى)",
        "company": "Rochus Mummert digital GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "geschäftsleitung",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Tübingen",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Unser Mandant ist ein führender Anbieter von Dienstleistungen zur Instandhaltung unterirdischer Infrastruktur in Nordeuropa mit europaweiter Marktpräsenz. Die deutsche Niederlassung beschäftigt ca. 800 Mitarbeitende und erzielt einen Umsatz von rund 100 Millionen Euro jährlich. Die Organisation wächst dynamisch durch Akquisitionen und entwickelt ihre Strukturen, Prozesse und zentralen Funktionen kontinuierlich weiter. Die Zusammenarbeit ist direkt, pragmatisch, bodenständig und respektvoll. Für den CEO der deutschen Landesgesellschaft suchen wir eine unternehmerisch denkende und umsetzungsstarke Persönlichkeit als Executive Assistant (m/w/d). \n Aufgaben \n Als Executive Assistant (m/w/d) sind Sie die organisatorische Schaltzentrale der deutschen Holding. Sie halten dem CEO den Rücken frei, schaffen Struktur in einem dynamischen Umfeld und sorgen dafür, dass aus Entscheidungen konkrete Ergebnisse werden. \n Sie organisieren und priorisieren den anspruchsvollen Kalender des CEO und koordinieren Termine, Meetings, Geschäftsreisen und Veranstaltungen. \n Sie strukturieren Themen, Entscheidungen und offene Punkte, bereiten Besprechungen vor und verfolgen die Umsetzung konsequent nach. \n Sie erstellen Präsentationen, Auswertungen, Entscheidungsvorlagen und weitere Managementunterlagen. \n Sie koordinieren die Zusammenarbeit mit dem CFO, COO, den Geschäftsführungen der Beteiligungsunternehmen, externen Dienstleistern und weiteren Stakeholdern. \n Sie übernehmen vielfältige Sonderprojekte",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Rochus Mummert digital GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Directors",
            "Chief executives"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/rochus-mummert-digital-gmbh/executive-assistant-fur-den-ceo-tubingen-264509",
        "logo": "https://logo.clearbit.com/rochusmummertdigitalgmbh.com",
        "companyLogo": "https://logo.clearbit.com/rochusmummertdigitalgmbh.com",
        "image": "https://logo.clearbit.com/rochusmummertdigitalgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-40",
        "title": "Freie Handelsvertreter (m/w/d) nach § 84 HGB für PV- und Wärmepumpenprojekte",
        "title_ar": "Freie Handelsvertreter (m/w/d) nach § 84 HGB für PV- und Wärmepumpenprojekte (أخرى)",
        "company": "optimum GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Freelance",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Cologne",
        "location_ar": "Cologne",
        "salary": "Competitive",
        "description": "Wir sind ein etabliertes, inhabergeführtes Ingenieurbüro für erneuerbare Energien . Bei uns stehen präzise technische Planung, höchste Qualitätsstandards und zukunftssichere Gesamtlösungen im Mittelpunkt. Wir planen, berechnen und installieren maßgeschneiderte Photovoltaikanlagen, Stromspeicher und moderne Wärmepumpen komplett als smartes Gesamtsystem aus einer Hand. \n Zur Verstärkung unseres Vertriebsnetzwerks suchen wir zum nächstmöglichen Zeitpunkt motivierte freie Handelsvertreter (m/w/d). \n Dein absoluter Vorteil bei uns: Vergiss frustrierende Kaltakquise oder das Klinkenputzen! Wir versorgen dich kontinuierlich mit warmen, vorqualifizierten Premium-Leads . Die Interessenten melden sich direkt bei uns und möchten aktiv einen Beratungstermin für ihr PV- oder Wärmepumpenprojekt mit dir vereinbaren. Du konzentrierst dich voll auf das, was du am besten kannst: den erfolgreichen Verkauf. \n Aufgaben \n Erfolgreicher Vertrieb unserer hochwertigen Photovoltaik-Systeme und hocheffizienten Wärmepumpen im Außendienst. \n Fachkundige Beratung der Kunden zu ganzheitlichen Energielösungen von der Erstpräsentation bis zum erfolgreichen Abschluss. \n Qualifikation \n Du bringst Vertriebserfahrung sowie ein ausgeprägtes Verkaufstalent mit. \n Erfahrung im Bereich PV oder Heizung/Wärmepumpen ist von Vorteil, aber kein Muss – motivierte Quereinsteiger sind bei uns herzlich willkommen und werden intensiv eingearbeitet! \n Du bist kommunikationsstark, hast ein sicheres Auftreten und arbeitest hoch",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة optimum GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/optimum-gmbh/freie-handelsvertreter-nach-84-hgb-fur-pv-und-warmepumpenprojekte-cologne-288364",
        "logo": "https://logo.clearbit.com/optimumgmbh.com",
        "companyLogo": "https://logo.clearbit.com/optimumgmbh.com",
        "image": "https://logo.clearbit.com/optimumgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-41",
        "title": "Senior Accountant – Finanzbuchhalter:in (m/w/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Senior Accountant – Finanzbuchhalter:in (m/w/d))",
        "company": "sonymusicentertainment",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Location: Berlin, Hamburg, \n Wir suchen kurzfristig einen erfahrenen Finanzbuchhalter \n Die Kings Road Merch GmbH ist ein weltweit etablierter Full-Service Anbieter von Merchandise-Produkten und -Dienstleistungen. \n Als eigenständige deutsche Tochter eines weltweiten Musikkonzerns bieten wir individuelle Webshops für Bands oder Künstler an. Auf ihren Touren betreuen wir das Merchandising in Spielstätten in ganz Europa. \n Unsere Services reichen dabei von der Herstellung der Merch-Produkte über die Lagerung und Logistik in unserem Logistikzentrum in Dortmund, die europaweite Tourbetreuung sowie den Betrieb individualisierter Webshops. \n Wir suchen dich, wenn du Spaß daran hast, in der Musikindustrie rund um bedruckte T-Shirts und Fanartikel zu arbeiten. Europäische Umsatzsteuern, OSS und Quellensteuern schrecken dich nicht ab? Du möchtest mit unserem ERP-System NetSuite und eng mit internationalen Finance-Partnern arbeiten? \n Als Senior Accountant übernimmst du eine zentrale Rolle bei der Steuerung, Überwachung und kontinuierlichen Weiterentwicklung der Finance- und Accounting-Prozesse für das europäische Geschäft von Kings Road Merch. In enger Abstimmung mit dem europäischen Management und der globalen Finance-Organisation stellst du sicher, dass Abschlüsse, Reporting, Compliance und interne Kontrollen verlässlich, fristgerecht und nach einheitlichen Standards umgesetzt werden. \n Aufgaben \n Zentrale Steuerung und kontinuierliche Weiterentwicklung der Accounting-Prozesse für d",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة sonymusicentertainment. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "The orchard"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sonymusicentertainment/senior-accountant-finanzbuchhalterin-europe-berlin-europe-hamburg-143290",
        "logo": "https://logo.clearbit.com/sonymusicentertainment.com",
        "companyLogo": "https://logo.clearbit.com/sonymusicentertainment.com",
        "image": "https://logo.clearbit.com/sonymusicentertainment.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-42",
        "title": "Senior AI Content Creator (x/f/m)",
        "title_ar": "كاتب ومحرر محتوى (Senior AI Content Creator (x/f/m))",
        "company": "hellofresh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "AI Content Creator - Content Creation \n The role \n As a Senior AI Content Creator in the HelloFresh Studio, you are part of the AI Content Creation team and play a leading role in developing and scaling AI-powered content creation across mainly photography, but also supporting video, design, and emerging creative formats. \n You combine a strong background in commercial visual production with hands-on expertise in generative AI. You have a refined visual eye and strong creative judgment, allowing you to create high-quality content yourself and recognize what makes an image or video successful. Beyond creating individual assets, a key part of your role is translating creative direction and successful approaches into reliable, production-ready workflows that expand the Studio's AI capabilities. Working closely with art directors, photographers, retouchers, video, design, and tech, you identify where AI can improve creative possibilities, production efficiency, and scale. You help define best practices, evaluate emerging technologies, and continuously develop how AI is used in visual production across the Studio. \n What you’ll do \n Create high-quality AI-powered content across commercial photography and video, including lifestyle, food, product, and campaign content, translating creative direction into assets ready for real production and marketing use. \n Develop and refine AI content creation workflows, prompts, techniques, and reusable approaches using tools such as Krea, Higgs",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/senior-ai-content-creator-berlin-berlin-393314",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-43",
        "title": "Associate Director International Procurement",
        "title_ar": "Associate Director International Procurement (أخرى)",
        "company": "hellofresh",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "The role \n As an Associate Director, Procurement, you will report to the Procurement Director and own the strategy, performance, and people development for your category cluster. This is a 12-month fixed-term position. You will lead a team of Category Managers, set the direction for supplier relationships and commercial outcomes, and operate as the senior point of escalation across operational and strategic procurement challenges. \n This is a role for a procurement professional who is equally comfortable in a negotiation room with a strategic supplier, a governance forum with senior cross-functional leaders, and a development conversation with a direct report. You will act as a connector between your team's day-to-day work and the broader supply chain strategy and as a builder of capability, process, and relationships that outlast the current planning cycle. \n What you’ll do \n Strategy & Category Leadership \n Define and own the multi-year category strategy for your cluster sourcing model, supplier segmentation, risk posture, and cost ambition and present that strategy coherently to Director-level stakeholders. \n Translate market intelligence (commodity dynamics, seasonality, geopolitical risk, supply constraints) into actionable procurement decisions and communicate them with clarity and confidence. \n Lead cross-category standardization and process improvement initiatives, identifying leverage across the broader portfolio where applicable. \n Supplier Relationships & Partnersh",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Procurement"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/associate-director-international-procurement-berlin-berlin-101350",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-44",
        "title": "Senior Fullstack Engineer (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Fullstack Engineer (f/m/d))",
        "company": "Upvest",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "At Upvest, we are on a mission to make investing as easy as spending money . Upvest empowers businesses to offer a wide range of investment products and the best experience in the field of capital market investment and retirement planning. Upvest’s Investment API is easy to integrate so that fintechs and financial institutions can save resources and fully focus on their core business. We are proud to partner with Europe’s leading Fintechs and financial institutions such as DKB, Revolut, N26 and Raisin. Founded in 2017 by Martin Kassing, Upvest now brings together over 270 talented professionals from more than 70 nationalities. Upvest is backed by €280M in total funding from world-class investors, including BlackRock, Tencent, Sapphire Ventures, and Bessemer Venture Partners, Earlybird, Notion Capital, and Motive. Our latest €105M funding round in March 2026 - led by Sapphire and Tencent - serves as a massive catalyst for our growth, allowing us to offer premier investment experience. About the role: Team's mission Upvest's core product is an API: the execution layer that moves securities for our clients. Upfront extends into the layer above it. It's Upvest's operational service panel for enterprise clients, giving their operations, support and compliance staff the ability to handle first-line requests themselves: looking into an end-user's account, checking what happened to an order, answering the question in front of them. Today their options are to ask Upvest support or to ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Upvest. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/upvest/senior-fullstack-engineer-berlin-144579",
        "logo": "https://logo.clearbit.com/upvest.com",
        "companyLogo": "https://logo.clearbit.com/upvest.com",
        "image": "https://logo.clearbit.com/upvest.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-45",
        "title": "Senior Property Manager – Operations & Implementierung (m/w/d)",
        "title_ar": "مدير وقائد فريق (Senior Property Manager – Operations & Implementierung (m/w/d))",
        "company": "Buena",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Über Buena Buena baut die Technologie, auf der die Immobilienbranche läuft. Wir machen jeden Teil der Immobilienwirtschaft so nahtlos und transparent wie möglich – vom Finden über das Finanzieren bis zum Verwalten. Dafür übernehmen wir Hausverwaltungen in ganz Deutschland und bauen sie zu Technologieunternehmen um. In den letzten drei Jahren sind wir bereits Deutschlands zweitgrößter Immobilienverwalter geworden. Über die Rolle Du kennst den Alltag einer Hausverwaltung und weißt, wie du Ordnung reinbringst, wenn Abläufe stocken, Aufgaben liegen bleiben oder Verantwortlichkeiten unklar sind. Bei Buena setzt du genau dort an. Du unterstützt unsere Verwaltungen in ganz Deutschland vor Ort, packst im Tagesgeschäft mit an und sorgst dafür, dass die Teams eigenständig gut weiterarbeiten können. In Verwaltungen, die bereits auf der Buena App arbeiten, hilfst du ihnen, die Software sicher und selbstverständlich im Alltag zu nutzen. Du verbindest Erfahrung in der Immobilienverwaltung mit Freude an Technologie und der Fähigkeit, Menschen für neue Arbeitsweisen zu gewinnen. Dein Erfolg zeigt sich in funktionierenden Abläufen, guter Verwaltungsqualität und Teams, die mit der Buena App besser arbeiten. Verantwortlichkeiten Operativ anpacken: Du unterstützt unsere Verwaltungen im Tagesgeschäft, erkennst Engpässe und hilfst, Rückstände abzubauen – sowohl vor als auch nach der Umstellung auf die Buena App. Abläufe verbessern: Du schaffst gemeinsam mit den Teams klare Zuständigkeiten und funk",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Buena. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/buena/senior-property-manager-operations-implementierung-berlin-340088",
        "logo": "https://logo.clearbit.com/buena.com",
        "companyLogo": "https://logo.clearbit.com/buena.com",
        "image": "https://logo.clearbit.com/buena.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-46",
        "title": "Intern Quantitative Investment Analyst (f/m/d)",
        "title_ar": "Intern Quantitative Investment Analyst (f/m/d) (مالية ومحاسبة)",
        "company": "Liqid Lam",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "As an Intern Quantitative Investment Analyst (f/m/d), you support our Investment Team in the continuous development and management of our investment strategies in the areas of Public and Private Markets. The position is available from October 2026, and the internship lasts at least four months. What will you actually be doing? Tactical Asset Allocation Models: You contribute to the quantitative research behind our tactical asset allocation models by independently backtesting model enhancements, evaluating new signals, and preparing analyses for our investment decisions. Fund Selection: You assist in the quantitative screening, selection, and monitoring of funds and ETFs. This includes peer-group comparisons, performance and risk analyses, and supporting the ongoing due diligence of our fund universe. Developing the Code Base: You support our quantitative analysts in further developing our code base. Among other things, this includes Python-based tools for portfolio simulation, backtesting, and fund selection. Capital Market Analyses: You independently conduct quantitative capital market analyses to support our analysts and client advisors. WHAT YOU BRING Background: You are currently studying computer science, mathematics, physics, economics, finance or a related field and have a strong affinity for quantitative topics. Ideally, you have gained some initial experience in capital markets, statistical modeling, or data analysis. Skills and Qualifications: You have excellent ana",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Liqid Lam. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Investment"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/liqid-lam/intern-quantitative-investment-analyst-berlin-347845",
        "logo": "https://logo.clearbit.com/liqidlam.com",
        "companyLogo": "https://logo.clearbit.com/liqidlam.com",
        "image": "https://logo.clearbit.com/liqidlam.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-47",
        "title": "Business Recruiter",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Business Recruiter)",
        "company": "Trading212",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Our mission is to enable everyone to build wealth We reinvent how trading and investing work by creating exceptional products people love. Fostering a culture of excellence and high velocity is the key to our success. Тoday, we serve over 6 million clients, with more than €38 billion in assets under management — a testament to the scale and trust we’ve built in just a few years. The role You will take each search from the initial brief to an accepted offer: learning the function well enough to question the brief, identifying the relevant market, sourcing directly, assessing candidates, and keeping decisions moving. You will change the approach when the evidence shows that a search is off track. What you’ll do Full-cycle hiring across functions such as sales, marketing, finance, operations, compliance, risk, and HR Direct sourcing and proactive pipelines for specialist or hard-to-fill roles Assessing candidate relevance, securing timely decisions, and leading offer conversations through acceptance Presenting hiring managers with clear evidence when the profile, search strategy, or interview process needs to change What you need to have In-house ownership of business or commercial hiring in a high-growth company Breadth across several business functions, supported by clear hiring outcomes Searches where you personally built the pipeline, qualified candidates, managed the stakeholder, and closed the hire Numerical ownership of hiring results and a clear account of which actions ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trading212. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Global hr"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trading212/business-recruiter-germany-336795",
        "logo": "https://logo.clearbit.com/trading212.com",
        "companyLogo": "https://logo.clearbit.com/trading212.com",
        "image": "https://logo.clearbit.com/trading212.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-48",
        "title": "Product Recruiter",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Product Recruiter)",
        "company": "Trading212",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Our mission is to enable everyone to build wealth We reinvent how trading and investing work by creating exceptional products people love. Fostering a culture of excellence and high velocity is the key to our success. Тoday, we serve over 6 million clients, with more than €38 billion in assets under management — a testament to the scale and trust we’ve built in just a few years. The role You will take each search from the initial brief to an accepted offer: learning the function well enough to question the brief, identifying the relevant market, sourcing directly, assessing candidates, and keeping decisions moving. You will change the approach when the evidence shows that a search is off track. What you’ll do Full-cycle Product Owner and Product Manager Direct sourcing and proactive product-talent pipelines ahead of confirmed demand Assessing candidate relevance, securing timely decisions, and leading offer conversations through acceptance Presenting hiring managers with clear evidence when the profile, search strategy, or interview process needs to change What you need to have In-house ownership of product hiring at a technology company Searches where you personally built the pipeline, qualified candidates, managed the stakeholder, and closed the hire The ability to distinguish strong Product Owners from strong Product Managers and explain what changes across product contexts Numerical ownership of hiring results and a clear account of which actions changed them A record of ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trading212. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Global hr"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trading212/product-recruiter-germany-68714",
        "logo": "https://logo.clearbit.com/trading212.com",
        "companyLogo": "https://logo.clearbit.com/trading212.com",
        "image": "https://logo.clearbit.com/trading212.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-49",
        "title": "Technical Recruiter",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Technical Recruiter)",
        "company": "Trading212",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Our mission is to enable everyone to build wealth We reinvent how trading and investing work by creating exceptional products people love. Fostering a culture of excellence and high velocity is the key to our success. Тoday, we serve over 6 million clients, with more than €38 billion in assets under management — a testament to the scale and trust we’ve built in just a few years. The role You will take each search from the initial brief to an accepted offer: learning the function well enough to question the brief, identifying the relevant market, sourcing directly, assessing candidates, and keeping decisions moving. You will change the approach when the evidence shows that a search is off track. What you’ll do Full-cycle hiring across backend, frontend, and DevOps Direct sourcing and proactive pipelines for the hardest roles Assessing candidate relevance, securing timely decisions, and leading offer conversations through acceptance Presenting hiring managers with clear evidence when the profile, search strategy, or interview process needs to change What you need to have A progression from agency or hands-on sourcing into in-house technical recruiting with clear ownership Searches where you personally built the pipeline, qualified candidates, managed the stakeholders, and closed the hire Enough technical depth to explain how your current or previous company builds and ships software Numerical ownership of hiring results and a clear account of which actions changed them A record",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trading212. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Global hr"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trading212/technical-recruiter-germany-133873",
        "logo": "https://logo.clearbit.com/trading212.com",
        "companyLogo": "https://logo.clearbit.com/trading212.com",
        "image": "https://logo.clearbit.com/trading212.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-50",
        "title": "Social Media Intern",
        "title_ar": "Social Media Intern (تسويق ومبيعات)",
        "company": "Trading212",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Our mission is to enable everyone to build wealth We reinvent how trading and investing work by creating exceptional products people love. Fostering a culture of excellence and high velocity is the key to our success. Today, we serve over 5 million clients, with more than €30 billion in assets under management - a testament to the scale and trust we’ve built in just a few years. We are looking for a Social Media Marketing Intern to support the growth and day-to-day management of our German-language social media presence. The role is suited to a native German speaker with strong social media taste, an understanding of current platform trends, and practical experience managing corporate social media accounts. The person will help to create platform-native content, draft and schedule posts, support short-form video production, and coordinate Legal and Compliance review by preparing and submitting content approval tickets. What you'll do Manage and grow Trading 212's German-language social media accounts. Drive growth through creation of social media posts, captions, short-form videos. Analyze social media trends and competitor activity in the fintech space. Engage in video content creation for Instagram and TikTok. Improve account performance, engagement, audience growth, and content learnings. Contribute ideas for organic growth campaigns and community engagement. What you need to have Native German speaker with excellent communication skills. Strong interest in social media, c",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trading212. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trading212/social-media-intern-berlin-260200",
        "logo": "https://logo.clearbit.com/trading212.com",
        "companyLogo": "https://logo.clearbit.com/trading212.com",
        "image": "https://logo.clearbit.com/trading212.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-51",
        "title": "Marketing Praktikant (all genders)",
        "title_ar": "أخصائي تسويق ونمو (Marketing Praktikant (all genders))",
        "company": "mammaly",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Internship, berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Deine Aufgaben \n Creator Management & Akquise: Du betreust unsere bestehenden Affiliate-Partner und identifizierst proaktiv neue, passende Profile, um unser Netzwerk strategisch auszubauen. \n Kampagnen-Management & Tracking: Du unterstützt bei der technischen Aufsetzung von Kampagnen und stellst sicher, dass Performance-Daten korrekt erfasst werden (idealerweise bringst du erste Erfahrung mit Affiliate-Netzwerken mit). \n Relationship Management: Du bist die zentrale Schnittstelle für unsere Creator, bereitest Newsletter sowie exklusive Offers vor und stehst ihnen als kompetenter Ansprechpartner beratend zur Seite. \n Research & Outreach: Du führst eigenständige Marktanalysen durch, entdeckst neue Trends im Bereich Social Media und gehst aktiv in die Ansprache potenzieller Partner. \n Cross-functional Support: Neben dem Affiliate-Fokus unterstützt du das Marketing-Team bei abteilungsübergreifenden Projekten und erhältst Einblicke in verschiedene Marketing-Disziplinen. \n Dein Profil \n Social Media Affinität: Du bist „Digital Native“, kennst die neuesten Instagram-Trends und hast ein Gespür dafür, welche Creator zu unserer Marke passen. \n Kommunikationsstärke & Verhandlungsgeschick: Du hast Freude am Netzwerken, trittst sicher auf und weißt, wie man Win-Win-Situationen für uns und unsere Partner schafft. \n Strukturierte Arbeitsweise & Technik-Verständnis: Du arbeitest gewissenhaft und hast eine hohe Affinität zu Tools und Daten (Erfahrung mit Plattformen wie Awin ist ein Plus, abe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة mammaly. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/mammaly/marketing-praktikant-all-genders-berlin-357438",
        "logo": "https://logo.clearbit.com/mammaly.com",
        "companyLogo": "https://logo.clearbit.com/mammaly.com",
        "image": "https://logo.clearbit.com/mammaly.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-52",
        "title": "Steuerberater/in in spe: Finanzwirt/in, Steuerfachwirt/in, Bilanzbuchalter/in, Steuerassistent/in",
        "title_ar": "Steuerberater/in in spe: Finanzwirt/in, Steuerfachwirt/in, Bilanzbuchalter/in, Steuerassistent/in (مالية ومحاسبة)",
        "company": "Meerkamp Steuerberatungsgesellschaft mbH",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mülheim",
        "location_ar": "Mülheim",
        "salary": "Competitive",
        "description": "Die Meerkamp Steuerberatungsgesellschaft mbH ist eine Steuerberatungskanzlei mit Sitz in Mülheim an der Ruhr. Wir sind Dienstleister von ganzem Herzen. Unsere Mandanten können sich sicher sein persönlich und individuell betreut zu werden. Vielseitige Erfahrungen und ein breites Know-how verbunden mit dem Blick für den Bedarf des Mandanten machen uns zum starken Partner des Mittelstands und inhabergeführten Unternehmen. Wir bieten unsere Dienstleistungen regional und, unter Nutzung modernster Kommunikationsmittel, auch überregional bundesweit an. \n Wir suchen zum nächstmöglichen Zeitpunkt eine(n) \n Finanzwirt/in in Voll- oder Teilzeit oder \n Bilanzbuchhalter/in in Voll- oder Teilzeit oder \n Steuerfachwirt/in in Voll- oder Teilzeit oder \n Steuerassistent/in in Voll- oder Teilzeit \n Geförderte Weiterbildung zum Steuerberater/in und spätere Partnerschaft möglich. \n Aufgaben \n Sie unterstützen als AllrounderIn bei fachlichen und nicht fachlichen Aufgaben wie \n Finanz- und Lohnbuchführung \n Jahresabschlusserstellung \n Erstellung von Steuererklärungen \n AnsprechpartnerIn für Mandanten \n Digitalisierungsprojekte \n Qualifikation \n Abgeschlossene Studium zum Dipl. Finanzwirt/in oder \n betriebswirtschaftliches Bachelor-/Masterstudium oder vergleichbares Studium mit Fachrichtung Steuern / Bilanzierung oder \n abgeschlossene Weiterbildung zum Bilanzbuchhalter/in oder Steuerfachwirt/in. \n Ihr bisherige Ausbildung ist für Sie erst der Anfang? Haben Sie berufliche Ambitionen? Haben Sie (erste",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Meerkamp Steuerberatungsgesellschaft mbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/meerkamp-steuerberatungsgesellschaft-mbh/steuerberater-in-in-spe-finanzwirt-in-steuerfachwirt-in-bilanzbuchalter-in-steuerassistent-in-mulheim-360895",
        "logo": "https://logo.clearbit.com/meerkampsteuerberatungsgesellschaftmbh.com",
        "companyLogo": "https://logo.clearbit.com/meerkampsteuerberatungsgesellschaftmbh.com",
        "image": "https://logo.clearbit.com/meerkampsteuerberatungsgesellschaftmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789573195-53",
        "title": "Director of AML & Virtual Asset Compliance",
        "title_ar": "Director of AML & Virtual Asset Compliance (أخرى)",
        "company": "CertiK",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hong Kong, Singapore, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About the Company \n Born from groundbreaking research at Columbia University and Yale University, CertiK is a leading Web3 security company focused on securing blockchain protocols, smart contracts, and decentralized applications through cutting-edge security research, formal verification, and AI-powered technology. Founded in 2017 and headquartered in New York City, CertiK provides end-to-end security solutions including smart contract audits, penetration testing, on-chain monitoring, incident response, and compliance services for some of the largest projects in the digital asset ecosystem. Today, CertiK supports thousands of enterprise clients and Web3 projects globally, with a distributed international team spanning North America, Asia, and Europe. The company is backed by leading investors including Coatue, Goldman Sachs, Insight Partners, and Sequoia Capital, and has been recognized by organizations such as the World Economic Forum and CB Insights for its contributions to blockchain security innovation. \n About the Role \n We are looking for an experienced compliance and financial crime leader to help shape and expand our work across anti money laundering, virtual asset compliance, and blockchain risk management. This role is designed for someone who understands compliance from both sides of the market: traditional financial institutions and virtual asset service providers. You should be comfortable operating at the intersection of regulation, financial crime prevention, ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CertiK. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Legal & compliance"
        ],
        "applyUrl": "https://jobicy.com/jobs/153369-director-of-aml-virtual-asset-compliance",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-54",
        "title": "Poland - Director of Software Engineering (Experiences)",
        "title_ar": "مهندس ومطور برمجيات (Poland - Director of Software Engineering (Experiences))",
        "company": "Tripadvisor",
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
        "description": "About Tripadvisor \n The Tripadvisor Group connects people to experiences worth sharing, and aims to be the world’s most trusted source for travel and experiences. We leverage our brands, technology, and capabilities to connect our global audience with partners through rich content, travel guidance, and two-sided marketplaces for experiences, accommodations, restaurants, and other travel categories. The subsidiaries of Tripadvisor, Inc. (Nasdaq: TRIP), include a portfolio of travel brands and businesses, including Tripadvisor, Viator, and TheFork. \n We are hiring a Director of Engineering for our fast-growing Tripadvisor Experiences org. Tripadvisor Experiences (Viator) is the world's leading marketplace for travel experiences. We believe that making memories is what travel is all about. And with 400,000+ travel experiences to explore—everything from simple tours to extreme adventures (and everything in between) —making memories that will last a lifetime has never been easier. \n We embrace flexibility in where and how work gets done and also value meaningful in-person moments to connect and collaborate. You can expect a remote-first working model with periodic in-person gatherings at your closest office for team connection, planning, or other key moments. This position is open to candidates based within a commutable distance (generally maximum up to 1.5 hours) from our Krakow office. \n What You'll Do: \n Build and lead a high-performing technical team by hiring, training, and m",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tripadvisor. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153377-poland-director-of-software-engineering-experiences",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-55",
        "title": "CRM Specialist",
        "title_ar": "CRM Specialist (تسويق ومبيعات)",
        "company": "Tripadvisor",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "UK",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "CRM Specialist \n About Tripadvisor \n The Tripadvisor Group connects people to experiences worth sharing, and aims to be the world’s most trusted source for travel and experiences. We leverage our brands, technology, and capabilities to connect our global audience with partners through rich content, travel guidance, and two-sided marketplaces for experiences, accommodations, restaurants, and other travel categories. The subsidiaries of Tripadvisor, Inc. (Nasdaq: TRIP), include a portfolio of travel brands and businesses, including Tripadvisor, Viator, and TheFork. \n Job Location: Remote in the United Kingdom \n This role is a remote position in the United Kingdom. Occasional travel to company offices as necessary. \n What You’ll Do \n As CRM Specialist for the CRM Operations team, you will play a critical role in executing Tripadvisor communications with members via commerce streams, member newsletters and content collection communications. The ideal candidate will have a combination of email marketing experience, project management skills and the ability to communicate effectively regarding project status and email analytics. \n Responsibilities will include, but not be restricted to: \n Production of email campaigns, app push notifications, and site banners/interstitials \n Work within our marketing automation platforms to produce audiences, campaign logic, and templates based off of technical specifications \n Assist with translation requests (we send in many languages) \n Heavily ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tripadvisor. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing & sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153374-crm-specialist",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-56",
        "title": "Director of Product, AML & Digital Asset Compliance",
        "title_ar": "Director of Product, AML & Digital Asset Compliance (أخرى)",
        "company": "CertiK",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hong Kong, Singapore, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About the Company \n Born from groundbreaking research at Columbia University and Yale University, CertiK is a leading Web3 security company focused on securing blockchain protocols, smart contracts, and decentralized applications through cutting-edge security research, formal verification, and AI-powered technology. Founded in 2017 and headquartered in New York City, CertiK provides end-to-end security solutions including smart contract audits, penetration testing, on-chain monitoring, incident response, and compliance services for some of the largest projects in the digital asset ecosystem. Today, CertiK supports thousands of enterprise clients and Web3 projects globally, with a distributed international team spanning North America, Asia, and Europe. The company is backed by leading investors including Coatue, Goldman Sachs, Insight Partners, and Sequoia Capital, and has been recognized by organizations such as the World Economic Forum and CB Insights for its contributions to blockchain security innovation. \n CertiK has spent years building security, risk, monitoring, and blockchain expertise across thousands of digital asset companies and institutional customers. As digital assets increasingly become part of mainstream financial infrastructure, security, financial crime risk, and regulatory compliance are converging. We believe there is an opportunity to build a new generation of institutional digital asset risk and compliance products at that intersection. This role will h",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CertiK. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product & operations"
        ],
        "applyUrl": "https://jobicy.com/jobs/153371-director-of-product-aml-digital-asset-compliance",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-57",
        "title": "Senior Engineering Manager [gn] Data Intelligence Platform",
        "title_ar": "مهندس ومطور برمجيات (Senior Engineering Manager [gn] Data Intelligence Platform)",
        "company": "Actian",
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
        "description": "About Actian: Data at the Core, Innovation by Nature \n Actian is more than just a data management company; we are the architects of data intelligence for a hybrid, cloud-centric world. As a recognized global leader in hybrid data management and high-performance cloud warehousing, our platforms are the backbone for mission-critical operations at world-class organizations including Bloomberg, Intuit, Lufthansa, and Citibank . \n We empower these enterprises to solve the most complex data challenges on the planet, driving real-time decision-making at massive scale. We aren't just scaling; we are fundamentally re-architecting how we build software by moving into Agentic AI-driven engineering. Reporting directly to the VP of Engineering, you will lead a high-seniority team of 12, bridging the gap between high-level organizational strategy (Team Topologies) and hands-on AI integration within our SDLC. We offer a dynamic, challenging environment where your strategic leadership will directly influence the implementation and success of this AI-first data intelligence future. \n Organizational Strategy & Design \n Team Topologies: Expert-level implementation of Stream-aligned, Platform, and Enabling team structures. \n Scaling & R&D Architecture: Designing high-growth engineering orgs with a focus on flow and cognitive load management. \n Data-Driven Leadership: Utilizing health metrics and efficiency benchmarks to proactively resolve bottlenecks. \n AI & Technical Governance \n AI-Driven Eng",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Actian. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153378-senior-engineering-manager-gn-data-intelligence-platform",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/0fee3ec4-221.webp",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/0fee3ec4-221.webp",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/0fee3ec4-221.webp",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-58",
        "title": "Public Facing Security Researcher",
        "title_ar": "Public Facing Security Researcher (أخرى)",
        "company": "CertiK",
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
        "description": "About the Company \n Born from groundbreaking research at Columbia University and Yale University, CertiK is a leading Web3 security company focused on securing blockchain protocols, smart contracts, and decentralized applications through cutting-edge security research, formal verification, and AI-powered technology. Founded in 2017 and headquartered in New York City, CertiK provides end-to-end security solutions including smart contract audits, penetration testing, on-chain monitoring, incident response, and compliance services for some of the largest projects in the digital asset ecosystem. \n Today, CertiK supports thousands of enterprise clients and Web3 projects globally, with a distributed international team spanning North America, Asia, and Europe. The company is backed by leading investors including Coatue, Goldman Sachs, Insight Partners, and Sequoia Capital, and has been recognized by organizations such as the World Economic Forum and CB Insights for its contributions to blockchain security innovation. \n About This Role \n This role is for a Web3 security researcher who can act as a public face for CertiK. This means having a strong social media presence, speaking at conferences, and being openly helpful to the wider security community. This doesn't mean you have to have tens of thousands of followers on X, but you do need to be comfortable interacting with the general public. The specific type of security researcher is flexible - contract/chain auditors, pen testers, ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CertiK. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cybersecurity"
        ],
        "applyUrl": "https://jobicy.com/jobs/153376-public-facing-security-researcher",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-59",
        "title": "Financial Analyst (Entry-Level)",
        "title_ar": "Financial Analyst (Entry-Level) (مالية ومحاسبة)",
        "company": "CertiK",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About CertiK Born from groundbreaking research at Columbia and Yale, CertiK has grown to become the largest Web3 security platform, combining proprietary models with comprehensive security solutions and end-to-end toolkits to support the full lifecycle of Web3 development. Founded in 2017 and headquartered in New York City, CertiK provides a wide range of services including smart contract audits, penetration testing, on-chain monitoring, incident response, and compliance solutions for some of the largest projects and institutions in the digital asset ecosystem. \n About You \n We are looking for a detail-oriented, highly organized Entry-Level Financial Analyst to join our fast-paced finance team. In this role, you will be the backbone of finance team, taking ownership of essential record maintenance, high-volume data scrubbing, and detailed reconciliations. This is an excellent opportunity for a recent graduate to build a strong foundational skill set in corporate finance and accounting while supporting complex month-end close processes and strategic financial analysis \n Responsibilities \n Data Maintenance & Record Keeping: Maintain, scrub, and organize large sets of financial records, ensuring absolute data integrity across ledgers and reporting systems. \n Reconciliations & Variance Investigation: Assist with and perform detailed daily and monthly reconciliations (e.g., bank, revenue, COGS), including the rigorous investigation of variances and discrepancies. \n General Account",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CertiK. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance & accounting"
        ],
        "applyUrl": "https://jobicy.com/jobs/153373-financial-analyst-entry-level",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/03/Jobicy-210308091023-955845.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789573195-60",
        "title": "Android Engineer (mid-level)",
        "title_ar": "مهندس ومطور برمجيات (Android Engineer (mid-level))",
        "company": "Tripadvisor",
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
        "description": "About Tripadvisor \n The Tripadvisor Group connects people to experiences worth sharing, and aims to be the world’s most trusted source for travel and experiences. We leverage our brands, technology, and capabilities to connect our global audience with partners through rich content, travel guidance, and two-sided marketplaces for experiences, accommodations, restaurants, and other travel categories. The subsidiaries of Tripadvisor, Inc. (Nasdaq: TRIP), include a portfolio of travel brands and businesses, including Tripadvisor, Viator, and TheFork. \n The Tripadvisor Experiences Engineering team is distributed across Europe and is responsible for the platform, mobile apps and all their supporting infrastructure. We run the systems that help operators build their businesses and those which enable third parties to utilise our inventory. We provide the tools which help our customer services team provide world class service to travellers and operators internationally. \n About the Role \n We’re looking for a Software Engineer II - Android to join our fast-growing team. This role is open to candidates based within a commutable distance (generally up to 1.5 hours) of our office hub in Kraków. We are unable to offer B2B contracts at this time. We embrace flexibility in where and how work gets done and also value meaningful in-person moments to connect and collaborate. You can expect a remote-first working model with periodic in-person gatherings at your closest office for team connection",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tripadvisor. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/153370-android-engineer-mid-level",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/01/WRILS-210129125206-036216.jpg",
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
