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
        "id": "job-1789557461-1",
        "title": "Sr. Site Reliability Engineer (Remote, Mexico)",
        "title_ar": "مهندس ومطور برمجيات (Sr. Site Reliability Engineer (Remote, Mexico))",
        "company": "IO Connect Services",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mexico",
        "location_ar": "Mexico",
        "salary": "Competitive",
        "description": "About IO Connect Services : \n IO Connect Services is an AWS Advanced Tier Services Partner and Datadog Partner with a commitment to delivering complex and well-architected technical solutions worldwide. Founded in 2016, our professionals are dedicated to establishing and maintaining trust with our clients and business partners for long-term relationships. Position Overview: As we expand customer deployments, we’re seeking an experienced SRE. Specifically, we’re searching for someone who has fresh ideas and a unique viewpoint, and who enjoys collaborating with a cross-functional team to develop real-world solutions and positive user experiences for every interaction. Responsibilities Responsible for designing, building, maintaining, and scaling production services and server farms across multiple data centers for complex and data-intensive cloud services. Design and enhance software architecture to improve scalability, service reliability, capacity, and performance. Write automation code for provisioning and operating infrastructure at massive scale. You are not an operator, you’re an experienced software engineer focused on operations. Work with development teams to make sure the applications fit nicely within the infrastructure and scalability/reliability is designed and implemented from the grounds up. You will work with QA on building pipelines and automation for delivering and deploying applications to production. Roll up the sleeves to troubleshoot incidents, formulate t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة IO Connect Services. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops",
            "Cloud-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/io-connect-services/jobs/sr-site-reliability-engineer-remote-mexico-3375122103",
        "logo": "https://cdn-images.himalayas.app/vrf5i1mi9pq0t6trwt3vsnx6n8dn",
        "companyLogo": "https://cdn-images.himalayas.app/vrf5i1mi9pq0t6trwt3vsnx6n8dn",
        "image": "https://cdn-images.himalayas.app/vrf5i1mi9pq0t6trwt3vsnx6n8dn",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-2",
        "title": "Solutions Engineer",
        "title_ar": "مهندس ومطور برمجيات (Solutions Engineer)",
        "company": "Xage Security",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$180,000 - $220,000 USD",
        "description": "About Xage Xage is the first and only zero trust real-world security company. Powered by the Xage Fabric, the company’s Identity & Access Management, remote access, and dynamic data security solutions allow customers to secure, manage, and transform operations. With its distributed, scalable, and easy-to-operate Fabric, Xage solves the complex digitization challenges of the real-world operations we rely on. Xage customers include leaders in manufacturing, energy, O&G, utilities, space, logistics, and transportation. Xage is looking for a Solutions Engineer to lead our technical interests with customers and partners. The responsibility of this role is to work with customers and partners to design winning solutions as part of the pre-sales cycle, enabling Xage to accelerate customer acquisition and achieve sales goals About the Role \n Work creatively with customer and internal stakeholders to define technical solutions that meet customer use cases and requirements using a combination of internal and in some cases 3rd party software/hardware/tools. \n Create and present detailed technical and business proposals demonstrating how Xage addresses customer challenges, including solution architecture, use case description, and deployment schedules. \n Represent Xage at industry events and conferences, including occasional speaking engagements. \n Identify gaps in product functionality and flexibility and proactively work with product management and engineering organizations to address t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Xage Security. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Solutions-engineering",
            "Sales-engineering",
            "Pre-sales",
            "Cybersecurity-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/xage-security/jobs/solutions-engineer",
        "logo": "https://cdn-images.himalayas.app/f61qwuw9uu87di8wpeqpm5h9kfhd",
        "companyLogo": "https://cdn-images.himalayas.app/f61qwuw9uu87di8wpeqpm5h9kfhd",
        "image": "https://cdn-images.himalayas.app/f61qwuw9uu87di8wpeqpm5h9kfhd",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-3",
        "title": "AI Marketing Operations Manager",
        "title_ar": "أخصائي تسويق ونمو (AI Marketing Operations Manager)",
        "company": "Assist World",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines, South Africa",
        "location_ar": "Philippines, South Africa",
        "salary": "$500 - $700 USD",
        "description": "About the Role We are a high-growth psychiatric practice that is expanding to 15 states via telemedicine, alongside a specialized physical clinic in Fairfax, VA (focused on TMS and Ketamine). We have moved away from traditional agency models to a high-efficiency AI-Augmented Stack. We are looking for an Operations Manager to \"pilot\" this machine. You are not responsible for manual content writing or manual keyword bidding; you are responsible for orchestrating tools and ensuring clinical ROI. The Tech Stack You Will Manage \n CRM: HubSpot Enterprise (including Breeze AI / Content Hub). \n Ads & Technical SEO: (Managed PPC & SEO). \n Local/State SEO & Reviews: KiwiHealth (Virtual Proximity Engine). \n Project Management: ClickUp. \n Key Responsibilities \n AI Content Orchestration: Use HubSpot Breeze to generate localized landing pages for 15 states and clinical blogs. You will audit these for medical accuracy (E-E-A-T) and brand voice. \n Productized Service Oversight: Monitor deliverables. Audit their weekly PPC reports to ensure our Cost Per Acquisition (CPA) remains healthy and negative keywords are being filtered. \n Reputation & GEO-SEO: Manage KiwiHealth to respond to patient reviews (HIPAA-compliant) and ensure our \"Virtual Proximity\" listings are accurate across 15 states. \n Closed-Loop Reporting: Maintain a HubSpot Enterprise dashboard that tracks the journey from \"Ad Click\" to \"Booked Appointment\" to \"5-Star Review.\" \n Requirements \n HubSpot Enterprise Proficiency: You must",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Assist World. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing-operations",
            "Ai-operations",
            "Digital-marketing",
            "Healthcare-marketing"
        ],
        "applyUrl": "https://himalayas.app/companies/assist-world/jobs/ai-marketing-operations-manager",
        "logo": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "companyLogo": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "image": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-4",
        "title": "Account Executive",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive)",
        "company": "Jeeves",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina",
        "location_ar": "Argentina",
        "salary": "Competitive",
        "description": "Jeeves is a groundbreaking financial operating system built for global businesses that provides corporate cards, cross-border payments, and spend management software within one unified platform. The company operates across 20+ countries including Brazil, Canada, Colombia, Mexico, the United Kingdom, across Europe, and the United States, and serves over 5,000 clients ranging from venture-backed startups to SMBs around the world. With a mission to empower businesses with more efficient and cost-effective financial solutions worldwide, Jeeves combines cutting-edge financial technology with exceptional team expertise to transform the business financial landscape. Jeeves has been recognized as one of The Information's 50 Most Promising Startups in 2023, as well as a Y Combinator Top Company 2021-2023 and won “Fintech of the Year\" at the European Fintech Awards. Since graduating from Y Combinator in 2020, Jeeves has successfully raised over $380 million and is backed by top world-class investors including Andreessen Horowitz, Y Combinator, CRV, Tencent, Stanford University, Clocktower Ventures, and founders of more than 15 unicorns including David Velez (Nubank), Carlos Garcia (Kavak) and Sebastián Mejía (Rappi). Jeeves is rapidly growing our operations in Argentina and searching for a motivated, ambitious Account Executive to join and help scale our Argentina Sales organization. The Senior Account Executive will be responsible for closing high-value clients and growing the Argenti",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jeeves. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Account-executive",
            "B2b-sales",
            "Saas-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/jeeves/jobs/account-executive-3366038478",
        "logo": "https://cdn-images.himalayas.app/7c33vpqwjgm9f9nvaijvv93kn36o",
        "companyLogo": "https://cdn-images.himalayas.app/7c33vpqwjgm9f9nvaijvv93kn36o",
        "image": "https://cdn-images.himalayas.app/7c33vpqwjgm9f9nvaijvv93kn36o",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-5",
        "title": "Promo Team Lead – Spanish",
        "title_ar": "مدير وقائد فريق (Promo Team Lead – Spanish)",
        "company": "PocketFM",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mexico",
        "location_ar": "Mexico",
        "salary": "$900 - $1,500 USD",
        "description": "As a Promo Team Lead, you will manage a team of promo writers, sound engineers, video editors, and dubbing partners to create high-quality promotional ads for Pocket FM audio series. \n The role requires strong understanding of promo creation, ad storytelling, localization, dubbing workflows, quality control, team management, and creative optimization. You will oversee fresh promo creation, adaptation of ads from other geographies into Spanish, production quality, timely delivery, and reworks for ads that are not meeting performance benchmarks. \n Key Responsibilities \n 1. Team Leadership & Creative Direction \n Lead and guide promo writers, sound engineers, video editors, and external dubbing partners. \n Provide creative direction across writing, dubbing, audio mixing, video editing, and final delivery. \n Ensure the team is well-utilized, motivated, and aligned with business and creative goals. \n Build a high-ownership culture focused on quality, speed, and performance. \n 2. Promo Creation & Localization \n Oversee the creation of fresh promo ads, trailers, and long-form promotional scripts for audio series. \n Adapt successful ads from other geographies into Spanish Portuguese. \n Ensure all promos are culturally relevant, emotionally engaging, and suitable for Spanish audiences. \n Guide the team on hooks, story setup, emotional beats, cliffhangers, and audience entry points. \n 3. Production & Quality Control \n Own the end-to-end promo production process from brief to final asset",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PocketFM. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Creative-leadership",
            "Performance-marketing",
            "Localization"
        ],
        "applyUrl": "https://himalayas.app/companies/pocketfm/jobs/promo-team-lead-spanish",
        "logo": "https://logo.clearbit.com/pocketfm.com",
        "companyLogo": "https://logo.clearbit.com/pocketfm.com",
        "image": "https://logo.clearbit.com/pocketfm.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-6",
        "title": "3D Character Rigging Artist (freelancer)",
        "title_ar": "3D Character Rigging Artist (freelancer) (تصميم وإبداع)",
        "company": "Veles Productions Sp. z o.o.",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "Competitive",
        "description": "We are seeking a talented and experienced 3D Character Rigging Artist freelancer to join our creative team. We specialize in Metaverse projects, virtual production services and digital products, and we are committed to delivering high-quality content to our clients. \n Solid experience as a 3D Character Rigging Artist in the post-production/animated commercials or relevant industry experience \n Proficiency in industry-standard software such as Maya, 3ds Max or equivalent. \n Knowledge of importing Blendshapes to Unreal Engine \n Strong understanding of anatomy, kinematics, and deformation principles \n Excellent knowledge of rigging techniques for bipeds, quadrupeds, and complex creatures \n Familiarity with scripting and automation tools (Python, MEL, etc.) for rigging workflows is a plus \n Ability to work collaboratively in a team environment and effectively communicate ideas and solutions \n Attention to detail and the ability to deliver high-quality work within project timelines \n Competitive salary with project-based bonuses \n A modern indie-style studio that fosters a relaxed atmosphere while working on revolutionary metaverse projects \n Opportunity to collaborate with international teams and contribute to the booming metaverse industry \n At Veles Productions, we are creating new worlds and redefining the boundaries of the digital landscape. We are looking for open-minded, revolutionary thinkers who share our passion for the Metaverse and its potential. Originally posted on H",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Veles Productions Sp. z o.o.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "3d-character-rigging",
            "3d-art",
            "3d-animation",
            "Metaverse"
        ],
        "applyUrl": "https://himalayas.app/companies/veles-productions-sp-z-o-o/jobs/3d-character-rigging-artist-freelancer-6219932538",
        "logo": "https://logo.clearbit.com/velesproductionsspzoo.com",
        "companyLogo": "https://logo.clearbit.com/velesproductionsspzoo.com",
        "image": "https://logo.clearbit.com/velesproductionsspzoo.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-7",
        "title": "Senior Unity Engineer (Contract)",
        "title_ar": "مهندس ومطور برمجيات (Senior Unity Engineer (Contract))",
        "company": "Branch",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$180,000 - $250,000 USD",
        "description": "Branch is the early-stage game development company behind Castaways. We are developing an exciting new mobile game set in the Castaways universe, that is in stealth. You would be a great fit to work on this project if you are a detail-oriented expert in mobile gaming and enjoy working with a small cracked team to build and ship quality games on a rapid timeline. Responsibilities \n Work closely with marketing team to integrate Adjust SDK to measure marketing performance \n Build with Apple and Facebook OAUTH to enable user authentication in game \n Work closely with Facebook API to enable social connectivity with various game mechanics \n Ensure the best possible performance, quality, and responsiveness of the game \n Adopt our test-driven culture and meet high internal standards for code quality and documentation \n Qualifications \n 3+ years of experience building games in the Unity game engine. \n 5+ years of experience with a modern language such as C# \n The capacity to thrive in an ever-changing, quick-to-deliver environment \n Excellent written and verbal communication skills \n Experience testing, automating, and instrumenting your code \n Experience building high-production value mobile games \n Proven track record of having shipped high-production value games at other game studios \n Knowledge of how to profile, analyze, and improve performance, from low-level limitations to high-level architectural decisions \n Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Branch. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Unity",
            "Mobile-game-development",
            "Game-engineering",
            "Contract-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/branch-gg/jobs/senior-unity-engineer-contract-4235218668",
        "logo": "https://cdn-images.himalayas.app/9k94v6cp530vmvk7j9sl6jvd5ety",
        "companyLogo": "https://cdn-images.himalayas.app/9k94v6cp530vmvk7j9sl6jvd5ety",
        "image": "https://cdn-images.himalayas.app/9k94v6cp530vmvk7j9sl6jvd5ety",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-8",
        "title": "Peoplesoft Finance Functional Consultant",
        "title_ar": "Peoplesoft Finance Functional Consultant (موارد بشرية وإدارة)",
        "company": "Datavail",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "Job Title: Peoplesoft Finance Functional consultant with HCM Exp Experience: 10+years Job Location: Remote Education: Any bachelor's degree Job Description: Datavail is seeking an experienced PeopleSoft Finance Functional Consultant to support a managed services engagement focused on PeopleSoft Financials and HCM environment . This consultant will lead and participate in discovery sessions, assess current-state business processes and system utilization, and develop findings and recommendations that guide future-state planning and modernization efforts. The ideal candidate combines strong functional expertise in PeopleSoft Financials with excellent consulting and communication skills. They will work closely with business and IT stakeholders to understand how PeopleSoft is used today, identify opportunities for process improvement and optimization, and recommend practical solutions aligned with business objectives. Key Responsibilities: \n Facilitate discovery workshops and working sessions with business and IT stakeholders. \n Assess current-state PeopleSoft Financials business processes, system configuration, and operational practices. \n Evaluate key financial processes, including controls, integrations, reporting, and manual workarounds. \n Identify business process gaps, operational risks, and opportunities for optimization. \n Document findings, recommendations, and future-state options to support client decision-making. \n Contribute to roadmap development and modernization di",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Datavail. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Peoplesoft-consulting",
            "Erp-consulting",
            "Finance-consulting"
        ],
        "applyUrl": "https://himalayas.app/companies/datavail/jobs/peoplesoft-finance-functional-consultant",
        "logo": "https://cdn-images.himalayas.app/9qedcok0r67p6b8z0k88txau40hq",
        "companyLogo": "https://cdn-images.himalayas.app/9qedcok0r67p6b8z0k88txau40hq",
        "image": "https://cdn-images.himalayas.app/9qedcok0r67p6b8z0k88txau40hq",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-9",
        "title": "Sourcing Consultant",
        "title_ar": "Sourcing Consultant (مالية ومحاسبة)",
        "company": "EXL",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "As a Sourcing Consultant, you will be a key member of our SGU_F&A Ops_FRAC Consulting team, driving strategic sourcing initiatives and delivering exceptional results for our insurance clients. Your expertise will be instrumental in optimizing our clients' operations and transforming their businesses. Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EXL. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Procurement-and-sourcing",
            "Insurance-consulting",
            "Operations-consulting",
            "Finance-and-accounting"
        ],
        "applyUrl": "https://himalayas.app/companies/exl/jobs/sourcing-consultant",
        "logo": "https://cdn-images.himalayas.app/tfyfvp8ys4nkpwh5mhr2w6xcigas",
        "companyLogo": "https://cdn-images.himalayas.app/tfyfvp8ys4nkpwh5mhr2w6xcigas",
        "image": "https://cdn-images.himalayas.app/tfyfvp8ys4nkpwh5mhr2w6xcigas",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557461-10",
        "title": "Senior Applied AI Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Applied AI Engineer)",
        "company": "BLP Digital AG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Spain, United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Join BLP Digital — The #1 Solution for ERP Automation BLP Digital is redefining ERP automation with agentic AI. Spun out of ETH Zurich and HSG, we build AI agents that automate finance, procurement, logistics, sales, and more for some of the world's largest enterprises. We solve real enterprise problems with cutting-edge technology and a strong sense of ownership. Our solution is live in 40+ countries, used by 550+ customers, and automates 70,000+ processes every day, including for Fortune 500 companies. As one of Switzerland's fastest-growing SaaS scaleups, our success stems from deep expertise in technology and business processes, delivering a product with outstanding product-market fit, proven by a growing global customer base. We've recently welcomed Goldman Sachs Alternatives as a growth investor, and we're now expanding into the UK with the launch of our London office. We are just getting started. Ready to build the future? Join BLP Digital today. About the role We're giving you the keys to the machine. As our Applied AI Engineer, you'll have a founder-level mandate to build and ship AI-powered internal tools that make our hiring, finance and ops workflows 10x faster, not 10% faster. You'll work at the frontier of what's possible with LLMs, AI agents, and emerging AI tooling, and apply it where it matters most: inside our own company. What you'll do \n Build and ship AI-powered internal tools fast: we're talking days and weeks, not quarters \n Evaluate, integrate, and cha",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة BLP Digital AG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Senior-ai-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/blp-digital-ag/jobs/senior-applied-ai-engineer",
        "logo": "https://cdn-images.himalayas.app/1ifx4du6ey037ly4ilwfgrk0mqmi",
        "companyLogo": "https://cdn-images.himalayas.app/1ifx4du6ey037ly4ilwfgrk0mqmi",
        "image": "https://cdn-images.himalayas.app/1ifx4du6ey037ly4ilwfgrk0mqmi",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-11",
        "title": "Clinical Sales Specialist, Structural Heart - Structural Interventions (Los Ange",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Clinical Sales Specialist, Structural Heart - Structural Interventions (Los Ange)",
        "company": "Abbott",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$78,000 - $156,000 USD",
        "description": "Abbott is a global healthcare leader that helps people live more fully at all stages of life. Our portfolio of life-changing technologies spans the spectrum of healthcare, with leading businesses and products in diagnostics, medical devices, nutritionals and branded generic medicines. Our 115,000 colleagues serve people in more than 160 countries. JOB DESCRIPTION: Working at Abbott \n At Abbott , you can do work that matters, grow, and learn, care for yourself and your family, be your true self, and live a full life. You’ll also have access to: \n Career development with an international company where you can grow the career you dream of. \n Employees can qualify for free medical coverage in our Health Investment Plan (HIP) PPO medical plan in the next calendar year. \n An excellent retirement savings plan with a high employer contribution \n Tuition reimbursement, the Freedom 2 Save student debt program, and FreeU education benefit - an affordable and convenient path to getting a bachelor’s degree. \n A company recognized as a great place to work in dozens of countries worldwide and named one of the most admired companies in the world by Fortune. \n A company that is recognized as one of the best big companies to work for as well as the best place to work for diversity, working mothers, female executives, and scientists. \n The Opportunity Our business purpose is to restore health and improve quality of life through the design and provision of device and management solutions for the",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Abbott. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Medical-device-sales",
            "Structural-heart-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/abbott/jobs/clinical-sales-specialist-structural-heart-structural-interventions-los-ange",
        "logo": "https://cdn-images.himalayas.app/fqpc5iqoofgu1jue5fc5bz0ir9zb",
        "companyLogo": "https://cdn-images.himalayas.app/fqpc5iqoofgu1jue5fc5bz0ir9zb",
        "image": "https://cdn-images.himalayas.app/fqpc5iqoofgu1jue5fc5bz0ir9zb",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-12",
        "title": "Director / Senior Director, GCP Quality Assurance Lead (US/IL/EU)",
        "title_ar": "مدير وقائد فريق (Director / Senior Director, GCP Quality Assurance Lead (US/IL/EU))",
        "company": "Prilenia",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Israel, United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About Prilenia \n Prilenia Therapeutics, a clinical-stage biotechnology company focused on the urgent mission of developing novel therapeutics to slow the progression of neurodegenerative diseases and neurodevelopmental disorders, is looking for a Director/Senior Director, GCP Quality Assurance Lead, to support programs in both Huntington’s Disease and ALS. \n We are a flexible, fast-moving team that is quickly advancing a potential therapy poised to have major impact on the lives of patients and their families. Our lead product candidate, pridopidine, holds Orphan Drug Designation in both Huntington’s disease (HD) and amyotrophic lateral sclerosis (ALS) in the U.S. and EU, as well as Fast Track designation from the FDA for the treatment of HD. Prilenia is conducting global Phase 3 clinical trials in both HD and ALS. \n ​Pridopidine has the potential to be a pivotal treatment to address HD and ALS disease progression. Prilenia believes pridopidine’s novel mechanism of action as a Sigma-1 receptor agonist also gives it potential in numerous other neurodegenerative and neurodevelopmental conditions. \n To learn more about our story and company culture, visit us at \n About the role \n The Director/Sr. Dir, GCP Quality Assurance is Prilenia 's primary quality lead for clinical development, owning GCP quality end-to-end from study start-up through inspection readiness, and serving as sponsor QA counterpart to our CRO(s) and Ferrer's QA team. The role also provides proportionate QA over",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Prilenia. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Gcp-quality-assurance"
        ],
        "applyUrl": "https://himalayas.app/companies/prilenia/jobs/director-senior-director-gcp-quality-assurance-lead-us-il-eu-7606289589",
        "logo": "https://cdn-images.himalayas.app/mnzppx653z1w7ul5vp0882snbow4",
        "companyLogo": "https://cdn-images.himalayas.app/mnzppx653z1w7ul5vp0882snbow4",
        "image": "https://cdn-images.himalayas.app/mnzppx653z1w7ul5vp0882snbow4",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-13",
        "title": "International Audio/Video Remote Soninke and French or Arabic Interpreter",
        "title_ar": "International Audio/Video Remote Soninke and French or Arabic Interpreter (أخرى)",
        "company": "Language Services Associates",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Overview: \n As an Internationally based audio/video interpreter for Soninke and French or Arabic in LSA’s network of Independently Contracted Interpreters, you are responsible for handling telephone calls on demand and facilitating language communication for the Limited English Proficient (LEP) community in a variety of settings. Language Services Associates is continuously accepting qualified interpreters! \n Responsibilities: \n          Provide effective audio and video interpreting through a web based platform \n          Answer inbound calls in a timely manner \n          Provide superior customer service \n          Adhere to Code of Professional Conduct, including maintaining strict standards of confidentiality \n          Adhere to all policies and procedures, including professional interpretation protocols and industry specific best practices \n Qualifications/Experience: \n          Full fluency in both English and Soninke and French or Arabic \n          Technology proficient (web-based platforms, email, Microsoft Word) \n          An interpreting space that is quiet, secure, and free from outside noises \n          1+ years of professional interpreting experience preferred \n          Industry specific certifications/trainings preferred (CMI, CCHI, Bridging the Gap, Cross-Cultural, etc.) \n LSA is passionate about what we do, which is helping people thrive in an increasingly global environment and in recognition of our commitment to excellence, LSA was named a Top Provider and",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Language Services Associates. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Interpreters",
            "Remote-interpreter",
            "Video-interpreter",
            "Audio-interpreter"
        ],
        "applyUrl": "https://himalayas.app/companies/language-services-associates/jobs/international-audio-video-remote-soninke-and-french-or-arabic-interpreter-6685716434",
        "logo": "https://cdn-images.himalayas.app/84rehtvt6naei3bwtlypbtqf17vh",
        "companyLogo": "https://cdn-images.himalayas.app/84rehtvt6naei3bwtlypbtqf17vh",
        "image": "https://cdn-images.himalayas.app/84rehtvt6naei3bwtlypbtqf17vh",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-14",
        "title": "SAP ABAP Integration BTP/PI/PO 2747",
        "title_ar": "SAP ABAP Integration BTP/PI/PO 2747 (برمجة وتكنولوجيا)",
        "company": "Xideral",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mexico",
        "location_ar": "Mexico",
        "salary": "Competitive",
        "description": "Seeking Experienced SAP ABAP Integration BTP/PI/PO for Exciting Projects Remote in Mexico We are looking for an experienced SAP ABAP Integration Consultant to join a long-term SAP S/4HANA implementation project. In this role, you will work closely with functional and technical teams to design, develop, and implement integration solutions using SAP ABAP, SAP BTP Integration Suite, and SAP PI/PO. Key Responsibilities: \n Collaborate with SAP functional and technical teams to understand development and integration requirements. \n Participate in the preparation of functional and technical specifications for ABAP developments. \n Develop reports, interfaces, conversions, enhancements, forms, and workflows following SAP development best practices. \n Design and implement integrations using SAP BTP Integration Suite and SAP PI/PO. \n Configure and work with different adapters and connectors for system integrations. \n Develop and consume APIs using REST, SOAP, and OData services. \n Support technical testing, integration testing, and assist during UAT phases. \n Provide support during cutover, go-live, and post-go-live hypercare activities. \n Work with different message mapping techniques and messaging services such as Event Mesh, JMS, and Datastore. \n Ensure best practices related to API security, authentication, and authorization. \n Tech Skills required: \n 3+ Experience with SAP ABAP development. \n Experience working with SAP integration technologies such as SAP BTP Integration Suite or ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Xideral. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sap-abap-development",
            "Sap-integration",
            "Sap-s-4hana",
            "Sap-btp"
        ],
        "applyUrl": "https://himalayas.app/companies/xideral/jobs/sap-abap-integration-btp-pi-po-2747-5877396229",
        "logo": "https://logo.clearbit.com/xideral.com",
        "companyLogo": "https://logo.clearbit.com/xideral.com",
        "image": "https://logo.clearbit.com/xideral.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-15",
        "title": "Advisor II, Procurement Contracts - (US Only)",
        "title_ar": "Advisor II, Procurement Contracts - (US Only) (برمجة وتكنولوجيا)",
        "company": "Catholic Relief Services",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "NOTE: The above Pay Range only applies to applicants who perform the job within the US and to applicants classified by CRS as International Assignees. Staff hired on local payroll would follow the respective Country pay range. Your recruiter can share more about the specific salary range for your anticipated work location during the candidate selection process . Job Summary The Advisor II, Procurement Contracts serves as Global Procurement’s technical subject matter expert providing technical advice, capacity building on procurement contracting in line with CRS procurement policies, procedures, donor requirements, and applicable legal and compliance standards. The Advisor works closely with global, regional, and country stakeholders to strengthen procurement contracting practices across the agency and support high-quality programming through effective risk management and contract administration. The role also contributes to the development of complex and strategic agreements and supports the development of agency-wide contracting standards, templates, guidance, tools, and good practices. Through advisory support, knowledge management, and capacity strengthening, the role improves the quality, consistency, efficiency, and risk profile of procurement contracts across CRS global operations. Roles and Key Responsibilities Contract Strategy, Development and Negotiation \n Leads the development, review, and negotiation of complex, high-value, high-risk, and strategic procurement-rel",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Catholic Relief Services. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Procurement-contracts",
            "Contract-management",
            "Procurement-specialist",
            "Contract-negotiation"
        ],
        "applyUrl": "https://himalayas.app/companies/catholic-relief-services/jobs/advisor-ii-procurement-contracts-us-only",
        "logo": "https://cdn-images.himalayas.app/h23axx75ihd839wlh8151fwz4whb",
        "companyLogo": "https://cdn-images.himalayas.app/h23axx75ihd839wlh8151fwz4whb",
        "image": "https://cdn-images.himalayas.app/h23axx75ihd839wlh8151fwz4whb",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-16",
        "title": "Remote Content Writer - South Africa",
        "title_ar": "كاتب ومحرر محتوى (Remote Content Writer - South Africa)",
        "company": "Brafton",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Algeria, Angola, Benin",
        "location_ar": "Algeria, Angola, Benin",
        "salary": "Competitive",
        "description": "Brafton is one of the world's leading content marketing firms, with offices in Boston, London, Toronto and Sydney. We aspire to continually raise the bar on what people consider \"marketing content.\" We create result-focused strategies and content to drive SEO, social engagement and leads for our clients. Our teams continuously build expertise across new media formats, including video, blogs, infographics and web design. This is a remote, full-time contractor position open to candidates across South Africa. JOB DESCRIPTION \n Brafton Content Writers are dedicated to producing strong, creative pieces that are incorporated into content marketing campaigns for clients. Client experience is paramount for us, meaning you are expected to communicate directly with them. Viable candidates must handle white papers, case studies, landing pages, infographic outlines, video blog scripts and long-form articles based on an approved brief. The majority of our clients are B2B and their industries span technology, health, finance, business, education and marketing. Writing and researching confidently, and on deadline, in these spaces is a must. If you are interested in joining a company on the forefront of innovation and creativity in the content marketing industry, please apply immediately. ESSENTIAL JOB FUNCTIONS \n Research, create and deliver high-quality content to clients according to specified deadlines \n Edit the work of peers using Brafton ’s editing marks and processes \n Work with acco",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Brafton. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Content-writing",
            "Content-marketing",
            "Editorial",
            "Copywriting"
        ],
        "applyUrl": "https://himalayas.app/companies/brafton/jobs/remote-content-writer-south-africa-400756803",
        "logo": "https://cdn-images.himalayas.app/ytu4y4ytt19clh9dyr3k6m13488f",
        "companyLogo": "https://cdn-images.himalayas.app/ytu4y4ytt19clh9dyr3k6m13488f",
        "image": "https://cdn-images.himalayas.app/ytu4y4ytt19clh9dyr3k6m13488f",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-17",
        "title": "Project Manager",
        "title_ar": "مدير وقائد فريق (Project Manager)",
        "company": "Greystar",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$78,000 - $98,000 USD",
        "description": "ABOUT GREYSTAR Greystar is a leading, fully integrated global real estate platform offering expertise in property management, investment management, development, and construction services in institutional-quality rental housing. Headquartered in Charleston, South Carolina, Greystar manages and operates over $350 billion of real estate in more than 260 markets globally with offices throughout North America, Europe, South America, and the Asia-Pacific region. Greystar is the largest operator of apartments in the United States, managing over one million units/beds globally. Across its platforms, Greystar has nearly $79 billion of assets under management, including over $34 billion of development assets and over $36.5 billion of regulatory assets under management. Greystar was founded by Bob Faith in 1993 to become a provider of world-class service in the rental residential real estate business. To learn more, visit . JOB DESCRIPTION SUMMARY This position is responsible for developing, implementing, and managing the execution of various specialized projects that support the achievement of multi-faceted organizational objectives. Additional responsibilities may include oversight of budgets, participation in plan development and direct or indirect reporting relationships depending on the project and functional area for which the incumbents reside. Incumbents in this role will partner with colleagues and management internal or external to the department to complete projects that str",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Greystar. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project-manager",
            "Property-management"
        ],
        "applyUrl": "https://himalayas.app/companies/greystar/jobs/project-manager-8289499303",
        "logo": "https://cdn-images.himalayas.app/k1pz9y4gyaao793t4ispllkyhg2n",
        "companyLogo": "https://cdn-images.himalayas.app/k1pz9y4gyaao793t4ispllkyhg2n",
        "image": "https://cdn-images.himalayas.app/k1pz9y4gyaao793t4ispllkyhg2n",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-18",
        "title": "Clinical Documentation Integrity Specialist (Remote - Roseville, CA)",
        "title_ar": "Clinical Documentation Integrity Specialist (Remote - Roseville, CA) (مالية ومحاسبة)",
        "company": "Adventist Health",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Temporary",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Located in the metropolitan area of Sacramento, the Adventist Health corporate headquarters have been based in Roseville, California, for more than 40 years. In 2019, we unveiled our WELL-certified campus - a rejuvenating place for associates systemwide to collaborate, innovate and connect. Adventist Health Roseville and shared service teams have access to enjoy a welcoming space designed to promote well-being and inspire your best work. Job Summary: Adventist Health Roseville is seeking a Clinical Documentation Integrity Specialist for a per diem temporary position on day shift. We are looking for a qualified and dedicated individual who can work remotely. The ideal candidate will support clinical documentation improvement efforts to ensure accurate, complete, and compliant medical record documentation while collaborating effectively with clinical and operational teams in a virtual environment. Reviews, evaluates and assesses medical records of patients, looks for specificity of an illness, the accuracy of the clinician’s documentation, coding requirements and documentation of important medical details to ensure the overall quality and completeness of clinical documentation of the patient medical record and ensure it is in compliance with government and other regulations. Works on problems of moderate to diverse scope requiring some interpretation of policies and guidelines. Applies working knowledge of the techniques, principles, theories and concepts to complete routine an",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Adventist Health. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Medical-coder"
        ],
        "applyUrl": "https://himalayas.app/companies/adventist-health/jobs/clinical-documentation-integrity-specialist-remote-roseville-ca",
        "logo": "https://cdn-images.himalayas.app/ema9iuf66vmgog7mu8yei9vvbwrr",
        "companyLogo": "https://cdn-images.himalayas.app/ema9iuf66vmgog7mu8yei9vvbwrr",
        "image": "https://cdn-images.himalayas.app/ema9iuf66vmgog7mu8yei9vvbwrr",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-19",
        "title": "Chaplain Part Time - Orangeburg, SC",
        "title_ar": "Chaplain Part Time - Orangeburg, SC (برمجة وتكنولوجيا)",
        "company": "Marketplace Ministries, Inc.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "It's fun to work in a company where people truly BELIEVE in what they're doing! We're committed to bringing passion and customer focus to the business. Please Note: While assigned hours are generally consistent from week to week, there are no guaranteed minimal hours and positional needs will vary depending on Chaplain availability and Client requirements. Position Summary Chaplains are the frontline staff fulfilling the mission and Christian ministry of MCHAP, by using their gifts and talents to serve company employees and their immediate families. Part Time, Orangeburg, SC Essential Functions and Responsibilities • Serves as a messenger and conveyor of faith, mission, and purpose. • Interacts with companies, their employees, and the community in a manner that exhibits character through personal and spiritual disciplines. Ministry \n Makes regular visits to company worksites (usually weekly) to interact with employees and build relationships of trust and friendship motivated by Christian faith. \n Visits employees or immediate family members wherever care can be expressed and help given: hospitals, nursing homes, funeral homes, family residences, or other sites. \n May provide confidential pastoral discussions for problem issues of employees and their immediate family members including, but not limited to family matters, divorce, serious illness, care of aging parents, death and grief recovery, parenting, financial situations that may include debt discussions, budgeting, and ot",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Marketplace Ministries, Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Chaplain",
            "Ministry",
            "Pastoral-care",
            "Clergy"
        ],
        "applyUrl": "https://himalayas.app/companies/marketplace-ministries-inc/jobs/chaplain-part-time-orangeburg-sc-2723009539",
        "logo": "https://logo.clearbit.com/marketplaceministriesinc.com",
        "companyLogo": "https://logo.clearbit.com/marketplaceministriesinc.com",
        "image": "https://logo.clearbit.com/marketplaceministriesinc.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-20",
        "title": "University Account Executive",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (University Account Executive)",
        "company": "12twenty",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$110,000 - $110,000 USD",
        "description": "12twenty is the leading platform for employers to connect with elite early career professionals. Our community includes millions of students, recent graduates, and alumni from top business schools, law schools, and universities around the world. We take pride connecting our community of candidates with recruiters from top companies across industries. Come join our fast growing organization! Summary : \n We are looking for a highly-motivated Account Executive with experience building partnerships in the colleges and universities space. Your role will be to grow and maintain relationships with administrators and staff at these institutions, evangelize the 12twenty platform, and close new business to expand our impact across the higher educational landscape. \n You’ll engage with decision-makers such as Career Center Directors, Program Administrators, IT staff, Deans, etc. This role requires strong communication skills, an understanding of the unique needs of higher education, and a proven ability to align our solutions with their objectives. If you’re a self-starter with a record of exceeding quotas and working with these types of institutions, we’d love to hear from you. \n Join a team of passionate and dedicated professionals, all focused on helping institutions meet their goals. We believe in supporting each other and creating endless growth opportunities. Let’s succeed together. \n This is a remote U.S. opportunity with a travel requirement of up to 20%. \n Responsibilities Incl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة 12twenty. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Account-executive",
            "Higher-education-sales",
            "Sales",
            "Business-development"
        ],
        "applyUrl": "https://himalayas.app/companies/12twenty/jobs/university-account-executive-9844964501",
        "logo": "https://cdn-images.himalayas.app/8r7vwlkwgfgglgtgghbyj8afbakm",
        "companyLogo": "https://cdn-images.himalayas.app/8r7vwlkwgfgglgtgghbyj8afbakm",
        "image": "https://cdn-images.himalayas.app/8r7vwlkwgfgglgtgghbyj8afbakm",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789557462-21",
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
        "id": "job-1789557462-22",
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
        "id": "job-1789557462-23",
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
        "id": "job-1789557462-24",
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
        "id": "job-1789557462-25",
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
        "id": "job-1789557462-26",
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
        "id": "job-1789557462-27",
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
        "id": "job-1789557462-28",
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
        "id": "job-1789557462-29",
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
        "id": "job-1789557462-30",
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
        "id": "job-1789557462-31",
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
        "id": "job-1789557462-32",
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
        "id": "job-1789557462-33",
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
        "id": "job-1789557462-34",
        "title": "Associate Director, Medical Affairs",
        "title_ar": "Associate Director, Medical Affairs (برمجة وتكنولوجيا)",
        "company": "Jobgether",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "This position is listed on behalf of a partner company, who manages all applications and next steps. Our partner is looking for an Associate Director, Medical Affairs based in Germany. \n As Associate Director, Medical Affairs, you will serve as a scientific leader and subject-matter expert across a broad range of Medical Affairs activities. You will independently lead high-value workstreams spanning thought leader engagement, scientific congresses, medical communications, publications, literature surveillance, and insight generation. The role combines external scientific engagement with strategic ownership of programs that support the product lifecycle. You will translate clinical evidence and stakeholder insights into practical recommendations that shape Medical Affairs priorities. You will also collaborate closely with cross-functional teams and provide trained backup support for selected Pharmacovigilance, Medical Information, and Product Complaint activities. This is a remote opportunity within a purpose-driven, collaborative healthcare environment, with approximately 20% travel for congresses and external engagements. \n Accountabilities \n Serve as a scientific subject-matter expert, translating clinical evidence, stakeholder insights, and emerging scientific developments into balanced, actionable recommendations for Medical Affairs strategy. \n Develop and maintain compliant relationships with key thought leaders (KTLs), healthcare professionals, and other external scient",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jobgether. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Others"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jobgether/associate-director-medical-affairs-germany-275735",
        "logo": "https://logo.clearbit.com/jobgether.com",
        "companyLogo": "https://logo.clearbit.com/jobgether.com",
        "image": "https://logo.clearbit.com/jobgether.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-35",
        "title": "AI Engineer",
        "title_ar": "مهندس ومطور برمجيات (AI Engineer)",
        "company": "Jobgether",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "This position is listed on behalf of a partner company, who manages all applications and next steps. Our partner is looking for an AI Engineer based in Germany. \n This is a fully remote opportunity for an AI Engineer focused on building production-ready solutions that address real-world challenges at scale. You will combine strong machine learning fundamentals with hands-on engineering to design, train, optimize, and deploy AI systems. The role offers exposure to diverse AI domains, including LLMs, NLP, computer vision, and other emerging technologies. You will work across data preparation, model development, evaluation, deployment, and MLOps. Success in this position requires both technical depth and the ability to operate independently in a fast-changing environment. You will also have the opportunity to translate complex AI concepts into clear insights for non-technical stakeholders. \n Accountabilities: \n Design, develop, and deploy machine learning and AI systems for real-world applications at scale. \n Build, customize, optimize, and maintain AI models for domain-specific use cases. \n Develop and maintain data mining, preprocessing, feature engineering, and data-labeling pipelines. \n Work with large datasets to prepare high-quality training and evaluation data. \n Apply machine learning techniques across areas such as large language models, natural language processing, computer vision, and other AI domains. \n Train, evaluate, optimize, and continuously improve machine lear",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jobgether. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "It"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/jobgether/ai-engineer-germany-271668",
        "logo": "https://logo.clearbit.com/jobgether.com",
        "companyLogo": "https://logo.clearbit.com/jobgether.com",
        "image": "https://logo.clearbit.com/jobgether.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-36",
        "title": "DSE - Digital Systems Engineer für ERP / E-Commerce (M/W/D)",
        "title_ar": "مهندس ومطور برمجيات (DSE - Digital Systems Engineer für ERP / E-Commerce (M/W/D))",
        "company": "founderlab GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Nordhorn",
        "location_ar": "Nordhorn",
        "salary": "Competitive",
        "description": "Moin, wir sind founderlab. \n Hast du Bock auf … \n ✅ clevere ERP-Setups und Automationen, die E-Commerce-Unternehmen richtig skalierbar machen? \n ✅ Entwicklung von No/Low-Code-Automationen und individuellen Roadmaps, die selbst erfahrene Entwickler beeindrucken? \n ✅ Projekte mit Marken und Shops, die zwischen 1–200 Mio € Jahresumsatz liegen – und echte Wachstumsschmerzen haben? \n ✅ direkten Austausch mit Geschäftsführern, denen du mit klarer Struktur und Verantwortung spürbar den Rücken freihältst? \n ✅ Arbeit mit maximaler Eigenverantwortung – solange Zeitzone, Kommunikation und Ergebnisse passen? \n Dann bist du bei uns richtig. \n Wir helfen ambitionierten E-Commerce-Brands, Xentral ERP und Prozesse so zu implementieren, dass das Unternehmen mitwächst – nicht kollabiert . \n Dazu denken wir Prozesse neu, schaffen Klarheit im System und entwickeln gemeinsam Lösungen, die auch in einem Jahr noch funktionieren. \n Klingt nach deiner Welt? \n Aufgaben \n Du betreust unsere E-Commerce-Kunden individuell, bringst Struktur in ihre Prozesse und sorgst dafür, dass Projekte nicht nur gestartet, sondern auch sauber umgesetzt werden. Du arbeitest direkt mit den Geschäftsführern und internen Teams – per 1:1-Call, Projektboard, Slack oder Loom. \n 🚀 Kickoff & Roadmap \nDu analysierst den Status quo anhand unserer Bestandsaufnahme, definierst klare Ziele und entwickelst mit dem Kunden eine individuelle Roadmap für den Xentral-Rollout – fokussiert auf Skalierbarkeit, Klarheit und Automatisierung. \n",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة founderlab GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sap/erp consulting",
            "Development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/founderlab-gmbh/dse-digital-systems-engineer-fur-erp-e-commerce-nordhorn-175566",
        "logo": "https://logo.clearbit.com/founderlabgmbh.com",
        "companyLogo": "https://logo.clearbit.com/founderlabgmbh.com",
        "image": "https://logo.clearbit.com/founderlabgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-37",
        "title": "Influencer Marketing Manager (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Influencer Marketing Manager (m/w/d))",
        "company": "eFLY Marketplace Services GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "Als Amazon-Agentur wissen wir, wie Marktplätze funktionieren. Jetzt gehen wir den nächsten Schritt. In dieser neuen Schlüsselposition bist du nicht für ein paar Ads zuständig. Du bist der Architekt unseres TikTok-Cores. Du verbindest Performance Marketing, Creator-Strukturen und vor allem den TikTok Shop zu einer echten Verkaufsmaschine. Du baust diesen Bereich von Null auf und machst TikTok zum neuen Skalierungs-Treiber für unsere Kunden. \n Aufgaben \n Strategie entwickeln: Du planst und baust die TikTok-Shop-Strategie für unsere Kunden von Grund auf auf. \n Infrastruktur aufsetzen: Du startest bei Null. Du richtest den TikTok Shop technisch ein und übernehmst am Anfang sowohl die strategische Planung als auch die operative Umsetzung. \n Trends nutzen: Du bist unser Experte für TikTok. Du erkennst neue Features und Trends sofort und machst daraus erfolgreiche Verkaufskampagnen. \n Angebot etablieren: Du machst Social Commerce zu einem festen Bestandteil unseres Agentur-Angebots und legst die wichtigsten KPIs fest. \n Qualifikation \n Erfahrung: Mehrere Jahre Erfahrung im TikTok-Marketing. Du hast bereits erfolgreich TikTok-Kanäle oder Shops aufgebaut. \n TikTok-Fachwissen: Du kennst den TikTok Ads Manager, den Algorithmus und die technischen Abläufe rund um den TikTok Shop in- und auswendig. \n Umsetzungsstärke: Du planst nicht nur gerne, sondern setzt das technische und operative Fundament in der Startphase auch selbst um. \n Datenfokus: Du triffst Entscheidungen auf Basis von Zahle",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eFLY Marketplace Services GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/efly-marketplace-services-gmbh/influencer-marketing-manager-stuttgart-189433",
        "logo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "companyLogo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "image": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-38",
        "title": "Senior Google Performance & Analytics Manager (m/w/d)",
        "title_ar": "مدير وقائد فريق (Senior Google Performance & Analytics Manager (m/w/d))",
        "company": "eFLY Marketplace Services GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "In dieser neu geschaffenen Schlüsselposition bist du nicht einfach nur für ein paar Google-Ads-Kampagnen zuständig. Du bist der Architekt unseres Google-Cores. Du verbindest das gesamte Google-Universum, von High-End Performance Marketing und Search über Data & Analytics bis hin zu smarten Cloud- und Tech-Infrastrukturen, zu einer schlagkräftigen Gesamtstrategie. Du baust das Thema inhaltlich und strukturell von Null auf Du baust das Thema inhaltlich und strukturell von Null auf und machst es zu einem zentralen Treiber für unsere eigene Skalierung und unseren Markterfolg. \n Aufgaben \n Strategischer Core: Du konzipierst die ganzheitliche Google-Strategie für eFLY von Grund auf und richtest sie konsequent auf langfristige Skalierung und Business-Impact aus. \n Inhaltlicher Pioniergeist: Du startest auf der grünen Wiese. Du definierst den passenden Tech-Stack, setzt die nötige Infrastruktur eigenständig auf und füllst den Bereich operativ wie strategisch mit Leben. \n Business-Übersetzung: Du bist unser absoluter Go-To-Expert für das gesamte Google-Ökosystem. Du beobachtest Tech-Trends und neue Features und übersetzt diese direkt in profitable Cases für eFLY. \n Nachhaltige Verankerung: Du machst das Google-Universum zu einem festen, funktionierenden Bestandteil unseres Geschäftsmodells und definierst die KPIs für die Zukunft, um später (sobald das Fundament steht) dein eigenes Team aufzubauen. \n Qualifikation \n Einschlägige Erfahrung: Mehrjährige fundierte Praxis im Google-Umfeld ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eFLY Marketplace Services GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/efly-marketplace-services-gmbh/senior-google-performance-analytics-manager-stuttgart-354705",
        "logo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "companyLogo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "image": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-39",
        "title": "Pflichtpraktikum Online Marketing Manager (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Pflichtpraktikum Online Marketing Manager (m/w/d))",
        "company": "eFLY Marketplace Services GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Internship",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "In der Rolle des Online Marketing Managers (m/w/d) kalkulierst und steuerst du die Werbebudgets unserer Kunden. Ziel ist es die bestmögliche Sichtbarkeit mit einem vorgegebenen Budget zu erreichen. Um die Fortschritte der Arbeit auch dem Kunden zu übermitteln, werden regelmäßig Auswertungen erstellt. Auch die Positionierung der Produkte an gewünschten Werbeplätzen spielt hierbei eine große Rolle.🚀 \n Aufgaben \n Entwicklung von SEA-Strategien : Gemeinsam mit unseren Account Managern arbeitest du zielgerichtete SEA-Strategien aus und sorgst dafür, dass das volle Werbepotenzial auf Amazon ausgeschöpft wird. \n Keywordrecherche & Analyse : Du führst umfassende Keywordrecherchen durch und kümmerst dich um die On- und Offpage-Optimierung, um die Sichtbarkeit der Produkte zu maximieren. \n Kampagnenoptimierung : Dein Ziel ist es, das Potenzial der Kampagnen optimal auszuschöpfen und kontinuierlich zu verbessern. \n Datenbasierte Maßnahmen : Du erstellst Analysen und leitest daraus konkrete Maßnahmen zur Weiterentwicklung der Kampagnen ab – mit Hilfe von Analyse-Tools behältst du den Erfolg stets im Blick. \n Reporting : Du erstellst regelmäßige Reportings, um die Ergebnisse der Kampagnen transparent für unsere Kunden darzustellen. \n Amazon Seller Central : Du bist versiert im Umgang mit dem Amazon Seller Central und nutzt es zur Steuerung der Werbekampagnen. \n PPC-Preisoptimierung : Du optimierst die PPC-Preise basierend auf vorher festgelegten Strategien und sorgst dafür, dass das Budge",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eFLY Marketplace Services GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/efly-marketplace-services-gmbh/pflichtpraktikum-online-marketing-manager-stuttgart-41075",
        "logo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "companyLogo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "image": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-40",
        "title": "Pflichtpraktikum im Bereich Grafikdesign (m/w/d)",
        "title_ar": "Pflichtpraktikum im Bereich Grafikdesign (m/w/d) (تصميم وإبداع)",
        "company": "eFLY Marketplace Services GmbH",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "Wir suchen dich für ein spannendes Praktikum im Grafikdesign , um unser Team bei der Entwicklung kreativer und ansprechender Designs für unsere Kunden zu unterstützen. Du wirst visuelle Konzepte für verschiedene Kanäle gestalten und dafür sorgen, dass die Marken unserer Kunden auf Plattformen wie Amazon überzeugend präsentiert werden. Dabei entwickelst du individuelle Grafiken und Layouts, optimierst bestehende Designs und arbeitest eng mit internen Teams sowie Kunden zusammen, um ihre Vorstellungen professionell umzusetzen. \n Aufgaben \n Amazon-Design: Unterstützung bei der Erstellung von visuellen Inhalten für Amazon, einschließlich Produktbildern, A+ Content, Werbebannern und Infografiken zur Optimierung der Conversion-Rate. \n Markenidentität: Mitwirkung bei der Entwicklung und Pflege konsistenter Markenidentitäten für unsere Kunden durch kreative und innovative Designkonzepte. \n Optimierung: Zusammenarbeit mit dem Account Management und dem Performance Marketing Team, um sicherzustellen, dass die Designs strategische Ziele unterstützen und die Sichtbarkeit auf Amazon erhöhen. \n Trendbeobachtung: Aktive Recherche von Design Trends und Best Practices, um stets aktuelle und relevante Designs für Amazon zu liefern‍. \n Feedback-Management: Anpassung von Designs basierend auf Kundenfeedback und den spezifischen Anforderungen der Plattform. \n Qualifikation \n Studium: Du bist immatrikulierte/r Student/in im Bereich Grafikdesign oder einem verwandten Studiengang. \n Kreativität: Du ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eFLY Marketplace Services GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/efly-marketplace-services-gmbh/pflichtpraktikum-im-bereich-grafikdesign-stuttgart-455874",
        "logo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "companyLogo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "image": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-41",
        "title": "Junior Google Performance & Analytics Manager (m/w/d)",
        "title_ar": "مدير وقائد فريق (Junior Google Performance & Analytics Manager (m/w/d))",
        "company": "eFLY Marketplace Services GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "In dieser Position bist du für die operative Umsetzung unseres Google-Marketings zuständig. Während die Strategie und das technische Setup vorgegeben werden, verantwortest du das fehlerfreie Einbuchen, die tägliche Pflege und das exakte Monitoring unserer Google-Ads-Kampagnen. Du hältst dem Team im Tagesgeschäft den Rücken frei, überwachst die Budgets nach klaren Vorgaben und bereitest die Performance-Daten in übersichtlichen Reportings auf. Durch deine strukturierte Arbeitsweise sorgst du dafür, dass unsere Kampagnen verlässlich laufen und optimiert werden. \n Aufgaben \n Kampagnen-Setup & Pflege: Du buchst Google-Ads-Kampagnen (Search, Shopping, Performance Max) nach klaren Vorgaben ein und pflegst Anzeigen, Texte sowie Budgets im System. \n Tägliches Monitoring: Du überwachst laufend die Performance und die Tagesbudgets unserer Accounts, um einen reibungslosen und fehlerfreien Ablauf der Kampagnen sicherzustellen. \n Datenpflege & Reporting: Du exportierst regelmäßig die Leistungsdaten der Werbekampagnen und bereitest diese in übersichtlichen Excel-Listen oder Dashboards für das Management auf. \n Operatives Tagesgeschäft: Du unterstützt bei der täglichen Organisation der Marketing-Aktivitäten, übernimmst die Abstimmung von Werbemitteln (wie Bildern und Texten) und erledigst anfallende Routineaufgaben im Account. \n Qualifikation \n Ausbildung oder Studium: Du bringst ein abgeschlossenes Studium (z. B. Betriebswirtschaft, Marketing, Kommunikationswissenschaften) oder eine verglei",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eFLY Marketplace Services GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/efly-marketplace-services-gmbh/junior-google-performance-analytics-manager-stuttgart-384191",
        "logo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "companyLogo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "image": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-42",
        "title": "Online Marketing Manager (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Online Marketing Manager (m/w/d))",
        "company": "eFLY Marketplace Services GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "In der Rolle des Online Marketing Managers (m/w/d) kalkulierst und steuerst du die Werbebudgets unserer Kunden. Ziel ist es die bestmögliche Sichtbarkeit mit einem vorgegebenen Budget zu erreichen. Um die Fortschritte der Arbeit auch dem Kunden zu übermitteln, werden regelmäßig Auswertungen erstellt. Auch die Positionierung der Produkte an gewünschten Werbeplätzen spielt hierbei eine große Rolle.🚀 \n Aufgaben \n Strategieerarbeitung: Entwicklung von SEA-Strategien in enger Zusammenarbeit mit unseren Account Managern, um Werbepotenziale auf Amazon optimal auszuschöpfen und auszubauen. \n Keyword-Recherche & SEO-Optimierung: Durchführung von Keyword-Recherchen sowie On- und Offpage-Analysen zur kontinuierlichen Verbesserung der Kampagnenleistung. \n Kampagnenoptimierung: Maximierung des Kampagnenpotenzials durch fortlaufende Optimierung und Überwachung der Kampagnen, um die bestmöglichen Ergebnisse zu erzielen. \n Datenanalyse & Maßnahmenableitung: Analyse der Kampagnendaten mit Hilfe von Analyse-Tools und Ableitung konkreter Maßnahmen zur Verbesserung der Performance. \n Reporting: Aufbau und Pflege von Reportings zur transparenten Dokumentation der Ergebnisse und Erfolge der Kampagnen für den Kunden. \n Amazon Seller Central: Nutzung und Verwaltung des Amazon Seller Central zur Überwachung und Steuerung von Kampagnen. \n PPC-Optimierung: Anpassung und Optimierung der PPC-Preise auf Basis zuvor festgelegter Strategien, um die Effizienz und den ROI der Werbemaßnahmen zu maximieren. \n Q",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة eFLY Marketplace Services GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing manager"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/efly-marketplace-services-gmbh/online-marketing-manager-stuttgart-322550",
        "logo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "companyLogo": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "image": "https://logo.clearbit.com/eflymarketplaceservicesgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-43",
        "title": "Team Lead Managed Services (m/w/d)",
        "title_ar": "مدير وقائد فريق (Team Lead Managed Services (m/w/d))",
        "company": "ThinkRED GmbH",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bad Soden",
        "location_ar": "Bad Soden",
        "salary": "Competitive",
        "description": "Start: ab sofort | Anstellungsart: Vollzeit, unbefristet \n Die thinkRED versteht sich als IT-Partner für Behörden, Kommunen und Bildungseinrichtungen in Deutschland. In großen Hardware- und Dienstleistungsrahmenverträgen begleiten die Experten Kunden der öffentlichen Hand mit ausführlicher und individueller Beratung von der Konzeption der Infrastruktur über die Implementierung der Hardware bis hin zum professionell aufgebauten, langfristigen Support sowie in der medienpädagogischen wie technischen Fortbildung der Anwender. \n Arbeiten bei der thinkRED: Werde Teil unseres engagierten Teams und präge Visionen! Wir haben es uns zur Aufgabe gemacht, Digitalisierung ganzheitlich, zukunftsfähig und verlässlich zu gestalten. Mit viel Herzblut setzen wir uns für unsere Kunden und füreinander im Team ein. \n Aufgaben \n Zur Verstärkung und strategischen Steuerung unseres Support-Teams vor Ort bei einem Kunden suchen wir eine erfahrene Führungspersönlichkeit als Team Lead Managed Services (m/w/d) . \n Menschenorientierte Führung: Du übernimmst die disziplinarische und fachliche Verantwortung für ein motiviertes Support-Team (ca. 10+ Mitarbeitende im 1st & 2nd Level) und förderst ein wertschätzendes, lösungsorientiertes Arbeitsklima. \n Einsatz- & Ressourcenplanung: Du steuerst die Dienst- und Vertretungspläne für Remote- und On-Site-Einsätze vorausschauend, um eine lückenlose Abdeckung unserer Kundenservices sicherzustellen. \n Operatives Service-Management: Du überwachst und steuerst die Su",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة ThinkRED GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "It"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/thinkred-gmbh/team-lead-managed-services-bad-soden-186826",
        "logo": "https://logo.clearbit.com/thinkredgmbh.com",
        "companyLogo": "https://logo.clearbit.com/thinkredgmbh.com",
        "image": "https://logo.clearbit.com/thinkredgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-44",
        "title": "IT Monitoring & AIOPS Engineer Event- & Alarm-Management (w/m/d)",
        "title_ar": "مهندس ومطور برمجيات (IT Monitoring & AIOPS Engineer Event- & Alarm-Management (w/m/d))",
        "company": "DICOS",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Darmstadt",
        "location_ar": "Darmstadt",
        "salary": "Competitive",
        "description": "DICOS ist ein unabhängiges Software- und Beratungsunternehmen mit Sitz in Darmstadt. Seit mehr als 25 Jahren entwickeln wir leistungsfähige IT-Lösungen für namhafte Kunden mit Fokus auf Automation, API Management, Infrastructure Management und Software Development. \nWir wachsen kontinuierlich und suchen Menschen, die mit Neugier und Eigeninitiative etwas bewegen möchten. Wenn du Verantwortung übernehmen und gemeinsam mit uns neue Wege gehen willst, bist du bei uns richtig. \n Aufgaben \n IT-Monitoring & Event-Management Du begleitest unsere Kunden bei Einführung, Konfiguration und Betrieb von Lösungen für IT-Operations, zentrales Event- und Alarm-Management sowie Automation. \n IBM Netcool & AIOps IBM Netcool ist ein spezialisiertes Enterprise-Tool Vorkenntnisse sind die Ausnahme, nicht die Regel. Wir arbeiten Dich gezielt ein, sodass Du anschließend Kunden eigenständig bei der Migration zum AI-basierten Nachfolgeprodukt IBM Concert Operate\" begleiten und technisch mitgestalten kannst. \n Troubleshooting Komplexe technische Probleme analysierst Du systematisch, gehst Ursachen auf den Grund und entwickelst nachhaltige Lösungen gemeinsam im Team oder eigenständig. \n Kundenverantwortung Nach der Einarbeitung übernimmst Du eigenständig Verantwortung für Deine Kunden, bringst eigene Ideen ein und entwickelst gemeinsam mit ihnen technisch sinnvolle Lösungen. \n Teamarbeit Du bist Teil eines Teams, in dem gegenseitige Unterstützung selbstverständlich ist Du bringst dein Wissen ein, lerns",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة DICOS. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting",
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/dicos/it-monitoring-aiops-engineer-event-alarm-management-darmstadt-306353",
        "logo": "https://logo.clearbit.com/dicos.com",
        "companyLogo": "https://logo.clearbit.com/dicos.com",
        "image": "https://logo.clearbit.com/dicos.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-45",
        "title": "Marketing Manager Immobilien (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Marketing Manager Immobilien (m/w/d))",
        "company": "P&P Group",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Fürth",
        "location_ar": "Fürth",
        "salary": "Competitive",
        "description": "Die P&P Group ist operativer Immobilieninvestor und Investorenplattform mit Standorten in Fürth und London. Mit ausgezeichneter Technikexpertise und über 30-jähriger Historie realisieren wir anspruchsvolle Immobilienprojekte im Wohnsegment. Gründer der P&P Group ist Michael Peter, der zusätzlich über Rivus Capital im Bereich Private Equity investiert. \n Freuen Sie sich auf spannende Projekte, ein dynamisches Arbeitsumfeld und die Möglichkeit, eigene Ideen aktiv einzubringen. \n Aufgaben \n Entwicklung und Umsetzung ganzheitlicher Vermarktungsstrategien für Immobilienprojekte \n Budgetverantwortung für Marketingmaßnahmen \n Enge Zusammenarbeit mit dem Vertrieb als strategischer und operativer Sparringspartner \n Konzeption und Steuerung hochwertiger Erstellung hochwertiger Verkaufsunterlagen (Exposés, Flyer, Visualisierungen, Architektur-Renderings, Projektfilme) \n Auswahl, Steuerung und Qualitätskontrolle externer Agenturen und Dienstleister \n Weiterentwicklung der Markenidentität und Unternehmenskommunikation \n Qualifikation \n Erfolgreich abgeschlossenes Studium im Bereich Marketing, Kommunikation, Medien, Immobilienwirtschaft oder eine vergleichbare Qualifikation \n Mehrjährige Berufserfahrung im Marketing, idealerweise im Immobilien-, Bauträger-, Projektentwicklungs- oder Architekturumfeld \n Ausgeprägte Affinität zur Immobilienbranche und Verständnis für Vertriebsprozesse \n Hohe Design- und Qualitätsorientierung sowie ein ausgeprägtes Gespür für Ästhetik \n Organisationstalent mi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة P&P Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pp-group/marketing-manager-immobilien-furth-347508",
        "logo": "https://logo.clearbit.com/ppgroup.com",
        "companyLogo": "https://logo.clearbit.com/ppgroup.com",
        "image": "https://logo.clearbit.com/ppgroup.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-46",
        "title": "Servicetechniker (m/w/d)",
        "title_ar": "Servicetechniker (m/w/d) (خدمة ودعم العملاء)",
        "company": "Heinrich Wietholt GmbH",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Münster",
        "location_ar": "Münster",
        "salary": "Competitive",
        "description": "Seit über 75 Jahren ist Steffers der Ansprechpartner für Bürobedarf und moderne Arbeitswelten in Münster und Ochtrup. Ob klassische Büroausstattung oder individuelle Lösungen für produktives Arbeiten – wir bieten Unternehmen alles, was sie für ihren Arbeitsalltag brauchen. \n Seit 2025 gehören wir der Heinrich Wietholt GmbH an und sind damit Teil eines starken Netzwerks. Die Unternehmen Wietholt, Steffers und Franke & Franke bündeln nun das Know-how und erweitern das Angebot, um noch mehr Unternehmen in NRW und darüber hinaus optimal zu unterstützen. \n Unsere Standorte in Münster und Ochtrup bleiben die Adresse für hochwertige Büroprodukte und persönliche Beratung – jetzt mit noch mehr Möglichkeiten für dich und deine berufliche Zukunft. 🚀 \n Wir suchen zu sofort büromanische Verstärkung im Techniker-Team in Münster. \n Aufgaben \n Bei uns geht es nicht einfach nur um Drucksysteme – sondern darum, dass im Alltag beim Kunden alles zuverlässig funktioniert. Genau dafür sorgst du mit deiner Arbeit direkt vor Ort. \n Du installierst Druck- und Multifunktionssysteme, bindest sie ins Netzwerk ein und übernimmst die vollständige Inbetriebnahme beim Kunden. Dazu gehören auch Vorinstallationen sowie die saubere technische Einrichtung vor Ort. \n Dabei bist du oft mehr als nur Techniker: Du erklärst, wie alles funktioniert, gibst Einweisungen und bist die Person, an die sich Kunden wenden, wenn es Fragen gibt. Verständlich, unkompliziert und auf Augenhöhe. \n Im Störungsfall analysierst du Fe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Heinrich Wietholt GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer service"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/heinrich-wietholt-gmbh/servicetechniker-munster-33231",
        "logo": "https://logo.clearbit.com/heinrichwietholtgmbh.com",
        "companyLogo": "https://logo.clearbit.com/heinrichwietholtgmbh.com",
        "image": "https://logo.clearbit.com/heinrichwietholtgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-47",
        "title": "Web Analyst & Tracking Expert (m/w/d)",
        "title_ar": "Web Analyst & Tracking Expert (m/w/d) (تسويق ومبيعات)",
        "company": "anocus GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Hamburg",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Wir möchten die Anlaufstelle für Google Ads & Web Analytics für E-Commerce Unternehmen mit einem großen Produktsortiment im DACH-Raum werden. Wir sind davon überzeugt, dass viele Online-Shops noch nicht ihr volles Potenzial aufgrund von schlechter Betreuung ausschöpfen. Wir wollen das ändern. \n Dabei legen wir bei uns einen großen Wert auf persönliche Entwicklung, operative und strategische Erstklassigkeit sowie Transparenz. \n Wir wollen, dass sich alle unsere Teammitglieder fachlich und menschlich weiterentwickeln und so für außergewöhnlich gute Kundenergebnisse sorgen. \n Um dies zu gewährleisten und unser Team auf das nächste Level zu heben, suchen wir einen Web Analyst & Tracking Expert (m/w/d). Wenn Du Lust hast, unser Tracking Konzept weiterzuentwickeln und wertvolle Dashboards und Ad-Hoc Analysen zu erstellen, dann bist Du hier genau richtig! \n Aufgaben \n Als Web Analyst & Tracking Expert (m/w/d) bist Du dafür verantwortlich, dass unsere Kunden sowie unsere Performance Marketing Manager verlässliche Daten zur Optimierung erhalten. Aktuell ist unser Geschäftsführer für diesen Bereich zuständig und Du wirst ihn dabei unterstützen und diesen Bereich mit der Zeit übernehmen. \n 1. Web Tracking \n Tracking Konzepte: Bevor Du mit einem Tracking startest, konzipierst und planst Du die Maßnahmen, die für den Kunden notwendig und sinnvoll sind. \n Google Tag Manager: Du bist bei all unseren Projekten verantwortlich für den (Server) Google Tag Manager und erster Ansprechpartner für ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة anocus GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/anocus-gmbh/web-analyst-tracking-expert-hamburg-347817",
        "logo": "https://logo.clearbit.com/anocusgmbh.com",
        "companyLogo": "https://logo.clearbit.com/anocusgmbh.com",
        "image": "https://logo.clearbit.com/anocusgmbh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-48",
        "title": "Social Media Manager / Content Creator - Pizzora",
        "title_ar": "مدير وقائد فريق (Social Media Manager / Content Creator - Pizzora)",
        "company": "Pizzora",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Side",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Passau",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Wir suchen eine Social Media Managerin / einen Social Media Manager, Content Creator oder Influencer auf Minijob-Basis, die/der unsere Social-Media-Kanäle aktiv mitgestaltet. \n Aufgaben \n Social Media betreuen \n Reels, Stories & Posts erstellen \n Eigene Content-Ideen entwickeln \n Mit unserer Community interagieren \n Pizzora & unsere Pizzerien sichtbar machen \n Qualifikation \n Erfahrung mit Social Media & Content Creation \n Idealerweise du bist selbst aktiv auf Instagram, TikTok & Co. \n Kreativ, zuverlässig und selbstständig \n Benefits \n Minijob / Aushilfe \n Remote, hybrid oder vor Ort \n Flexible Arbeitszeiten \n Start ab sofort oder flexibel \n Viel Freiheit für deine Ideen \n Du hast Lust auf Social Media, Content und Pizza? Dann bewirb dich direkt über unsere Website. Wir freuen uns auf dich! \n Find more English Speaking Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Pizzora. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pizzora/social-media-manager-content-creator-pizzora-passau-290540",
        "logo": "https://logo.clearbit.com/pizzora.com",
        "companyLogo": "https://logo.clearbit.com/pizzora.com",
        "image": "https://logo.clearbit.com/pizzora.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-49",
        "title": "Ausbildung zum Fachinformatiker für Anwendungsentwicklung (m/w/d)",
        "title_ar": "Ausbildung zum Fachinformatiker für Anwendungsentwicklung (m/w/d) (برمجة وتكنولوجيا)",
        "company": "CTK Gesellschaft für Computertechnologie mbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Apprenticeship",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greding",
        "location_ar": "Greding",
        "salary": "Competitive",
        "description": "Hi, wir sind CTK! \n Wir sind ein IT-Systemhaus aus Greding – und bei uns ist IT alles andere als langweilig! \n Von IT-Infrastruktur und Netzwerken über Softwareentwicklung und ERP-Systeme bis hin zu IT-Sicherheit, Support und individuellen digitalen Lösungen : Bei uns gibt es jede Menge zu entdecken und zu lernen. \n Dich erwarten echte Projekte, moderne Technik, ein junges Team, kurze Entscheidungswege und eine offene Atmosphäre – mit viel Raum für eigene Ideen und deine persönliche Entwicklung. \n Lust auf IT? Dann komm ins CTK-Team! \n Aufgaben \n Bei diesem Beruf dreht sich alles rund um die Entwicklung von Software, die beispielweise von Kunden vorgegebene Funktionen erfüllen soll. \n Dazu planst, konzipierst und programmierst du die unterschiedlichsten Programme und Anwendungen und entwickelst anwendungsgerechte und nutzerfreundliche Bedienoberflächen. Dabei kommen verschiedene Programmiersprachen und spezielle Entwicklertools zum Einsatz. \n Auch die Schulung von Anwendern und das Beheben von Fehlern mit Hilfe von Experten- oder Diagnosesystemen gehört zum abwechslungsreichen Berufsbild. \n Die Ausbildung dauert drei Jahre und findet dual, also im Ausbildungsbetrieb und in der Berufsschule statt \n Die Abschlussprüfung wird vor der Industrie- und Handelskammer abgelegt \n Qualifikation \n Du solltest dich für IT-Themen und moderne Technik begeistern und einen guten Realschulabschluss, einen Abschluss der Fachoberschule oder auch Abitur mitbringen \n Hilfreiche Stärken: Lust auf d",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CTK Gesellschaft für Computertechnologie mbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ctk-gesellschaft-fur-computertechnologie-mbh/ausbildung-zum-fachinformatiker-fur-anwendungsentwicklung-greding-331988",
        "logo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "companyLogo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "image": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-50",
        "title": "Ausbildung zum IT-System-Elektroniker (m/w/d)",
        "title_ar": "Ausbildung zum IT-System-Elektroniker (m/w/d) (أخرى)",
        "company": "CTK Gesellschaft für Computertechnologie mbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Apprenticeship",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greding",
        "location_ar": "Greding",
        "salary": "Competitive",
        "description": "Hi, wir sind CTK! \n Wir sind ein IT-Systemhaus aus Greding – und bei uns ist IT alles andere als langweilig! \n Von IT-Infrastruktur und Netzwerken über Softwareentwicklung und ERP-Systeme bis hin zu IT-Sicherheit, Support und individuellen digitalen Lösungen : Bei uns gibt es jede Menge zu entdecken und zu lernen. \n Dich erwarten echte Projekte, moderne Technik, ein junges Team, kurze Entscheidungswege und eine offene Atmosphäre – mit viel Raum für eigene Ideen und deine persönliche Entwicklung. \n Lust auf IT? Dann komm ins CTK-Team! \n Aufgaben \n Du informierst und berätst Kunden über Nutzungsmöglichkeiten von informations- und telekommunikationstechnischen Geräten und Systemen, Du installierst und konfigurierst Geräte und Systeme bei unseren Kunden. \n Aber auch die Installation der Stromversorgung und das Prüfen elektrischer Schutzmaßnahmen gehören zu Deinem Aufgabengebiet. Dein Wissen ist in vielen Bereichen gefragt. Bei der Erkennung von Fehlern setzt du sogenannte Experten- und Diagnosesysteme ein, um den Ursprung des Problems zu sehen und anschließend den Fehler zu beheben. \n Die Ausbildung dauert drei Jahre und findet dual, also im Ausbildungsbetrieb und in der Berufsschule statt \n Die Abschlussprüfung wird vor der Industrie- und Handelskammer abgelegt \n Qualifikation \n Du solltest dich für IT-Themen und moderne Technik begeistern und einen Realschulabschluss oder einen Abschluss der Fachoberschule mitbringen \n Hilfreiche Stärken: Handwerkliches Geschick, Interesse an E",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CTK Gesellschaft für Computertechnologie mbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Information systems"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ctk-gesellschaft-fur-computertechnologie-mbh/ausbildung-zum-it-system-elektroniker-greding-376427",
        "logo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "companyLogo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "image": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-51",
        "title": "Ausbilung zum Kaufmann für IT-System-Management (m/w/d)",
        "title_ar": "Ausbilung zum Kaufmann für IT-System-Management (m/w/d) (أخرى)",
        "company": "CTK Gesellschaft für Computertechnologie mbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Apprenticeship, berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greding",
        "location_ar": "Greding",
        "salary": "Competitive",
        "description": "Hi, wir sind CTK! \n Wir sind ein IT-Systemhaus aus Greding – und bei uns ist IT alles andere als langweilig! \n Von IT-Infrastruktur und Netzwerken über Softwareentwicklung und ERP-Systeme bis hin zu IT-Sicherheit, Support und individuellen digitalen Lösungen : Bei uns gibt es jede Menge zu entdecken und zu lernen. \n Dich erwarten echte Projekte, moderne Technik, ein junges Team, kurze Entscheidungswege und eine offene Atmosphäre – mit viel Raum für eigene Ideen und deine persönliche Entwicklung. \n Lust auf IT? Dann komm ins CTK-Team! \n Aufgaben \n Als Kaufmann/Kauffrau für IT-System-Management informierst und berätst Du unsere Kunden zu allen Fragen rund um IT-Produkte und IT-Dienstleistungen. \n Dazu analysierst du kundenspezifische Anforderungen und erstellst dementsprechend passende Angebote. \n Auch das Beschaffen von Hard- und Software und die interne Vertriebskoordination gehören zu deinem täglichen Aufgabengebiet. \n Was Neuentwicklungen im IT-Bereich betrifft, bist du immer auf dem Laufenden. \n Die Ausbildung dauert drei Jahre und findet dual, also im Ausbildungsbetrieb und in der Berufsschule statt \n Die Abschlussprüfung wird vor der Industrie- und Handelskammer abgelegt \n Qualifikation \n Du solltest dich für IT-Themen und moderne Technik begeistern und einen guten Realschulabschluss, einen Abschluss der Fachoberschule oder auch Abitur mitbringen \n Hilfreiche Stärken: Strukturierte Arbeitsweise, Interesse an den Fächern Mathe, Informatik und Wirtschaft \n Benefits \n Einen",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CTK Gesellschaft für Computertechnologie mbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ctk-gesellschaft-fur-computertechnologie-mbh/ausbilung-zum-kaufmann-fur-it-system-management-greding-430611",
        "logo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "companyLogo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "image": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-52",
        "title": "Mediengestalter Digital & Print / Grafikdesigner / Webdesigner (m/w/d)",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Mediengestalter Digital & Print / Grafikdesigner / Webdesigner (m/w/d))",
        "company": "CTK Gesellschaft für Computertechnologie mbH",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greding",
        "location_ar": "Greding",
        "salary": "Competitive",
        "description": "Kreativer Kopf gesucht. \n Wir sind eine junge Marketingagentur und Tochter der CTK in Greding. Bei uns treffen Marketing, Design und IT aufeinander. Wir lieben Marken und entwickeln Ideen, die Unternehmen sichtbar, unverwechselbar und zielgruppengerecht machen. \n Von Corporate Branding und Produktdesign über Websites, Shops, Social Media und Werbemittel bis hin zu Messen und Vertriebsmarketing – bei uns ist kein Tag wie der andere. \n Aufgaben \n Gestaltung von Print- und Online-Medien – von Flyer bis Werbebanner \n Entwicklung und Weiterentwicklung von Marken und Corporate Designs \n Gestaltung von Social-Media-Creatives und digitalen Inhalten \n Konzeption und Umsetzung von Kampagnen, Bildwelten und Grafiken \n Kreative Entwicklung von Ideen für unterschiedliche Marken und Zielgruppen \n Gestaltung und Weiterentwicklung von Websites – idealerweise bringst du hier bereits Erfahrung mit \n Qualifikation \n Wir suchen kein perfektes Profil – wir suchen dich. \n Du hast eine Ausbildung als Mediengestalter , ein Studium im Bereich Grafik-/Kommunikationsdesign oder eine vergleichbare Qualifikation und bereits erste Berufserfahrung gesammelt. \n Du beherrschst die Adobe Creative Cloud sicher und hast Spaß daran, kreativ zu arbeiten und neue Dinge auszuprobieren. Kenntnisse in Figma, WordPress oder Framer sind ein Plus. Auch SEO, GEO, Google Ads oder Social-Media-Marketing interessieren dich? Umso besser! \n Was uns aber am wichtigsten ist: Du hast Lust auf kreative Projekte, bringst eigene Id",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CTK Gesellschaft für Computertechnologie mbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ctk-gesellschaft-fur-computertechnologie-mbh/mediengestalter-digital-print-grafikdesigner-webdesigner-greding-178173",
        "logo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "companyLogo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "image": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-53",
        "title": "Ausbildung zum Mediengestalter Digital und Print (m/w/d)",
        "title_ar": "Ausbildung zum Mediengestalter Digital und Print (m/w/d) (تصميم وإبداع)",
        "company": "CTK Gesellschaft für Computertechnologie mbH",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Apprenticeship",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greding",
        "location_ar": "Greding",
        "salary": "Competitive",
        "description": "‍ Pixel im Kopf. Ideen im Herzen. \nDu liebst gutes Design und starke Ideen? \n Hi, wir sind IDEENREICHER! \n Wir sind eine junge Marketingagentur und Tochter der CTK in Greding. Bei uns treffen Marketing, Design und IT aufeinander. Wir lieben Marken und entwickeln Ideen, die Unternehmen sichtbar, unverwechselbar und zielgruppengerecht machen. \n Von Corporate Branding und Produktdesign über Websites, Shops, Social Media und Werbemittel bis hin zu Messen und Vertriebsmarketing – bei uns ist kein Tag wie der andere. \n Aufgaben \n Als angehender Mediengestalter (m/w/d) bei IDEENREICHER \ngestaltest du Social-Media-Posts, Printmaterialien und digitale Projekte. \n Du entwickelst eigene Ideen, arbeitest mit Design-Tools und \nbekommst spannende Einblicke in echte Kundenprojekte. \n Entwicklung und Weiterentwicklung von Marken und Corporate Designs \n Konzeption und Umsetzung von Kampagnen, Bildwelten und Grafiken \n Kreative Entwicklung von Ideen für unterschiedliche Marken und Zielgruppen Gestaltung und Weiterentwicklung von Websites \n Qualifikation \n Einen guten Realschulabschluss, einen Abschluss der Fachoberschule oder auch Abitur mitbringen \n Was uns aber am wichtigsten ist: Du hast Lust auf kreative Projekte, bringst eigene Ideen mit und arbeitest gerne im Team. Und wenn du etwas kannst, das wir bisher noch nicht im Team haben – umso besser! \n Benefits \n Ein abwechslungsreiches Aufgabengebiet \n Spannende und innovative Projekte \n Einen modernen Arbeitsplatz mit aktueller Hard- & Softw",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CTK Gesellschaft für Computertechnologie mbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ctk-gesellschaft-fur-computertechnologie-mbh/ausbildung-zum-mediengestalter-digital-und-print-greding-41246",
        "logo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "companyLogo": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "image": "https://logo.clearbit.com/ctkgesellschaftfrcomputertechnologiembh.com",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789557462-54",
        "title": "Business Development Executive",
        "title_ar": "Business Development Executive (المبيعات والنمو)",
        "company": "Thoughtworks",
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
        "description": "Thoughtworks is seeking business development leaders to join and lead our client growth in the Americas region. Business Development Executives at Thoughtworks are responsible for developing and securing a pipeline of new opportunities and building relationships with both new clients and in new areas of existing client organizations. As a Business Development Executive you are responsible for prospecting, shaping and selling aspirational engagements for our clients as well as for Thoughtworks. You will work within Thoughtworks’ Strategic Sales team, leading the development and expansion of client relationships within our company. \n Your responsibilities and accountabilities include prospecting, identifying and qualifying new opportunities, building trust with potential clients, shaping deals, developing winning value propositions, tightly orchestrating sales pitches, proposals and orals, negotiating win / win agreements with prospective clients, and expanding follow-on sales to create a sustainable business within each account. You will work across client organizations, from C-level and board members to front line business and technical staff, building relationships to secure long-lasting business opportunities. \n To be successful, you will have multiple years of consultative selling experience within an enterprise IT services company. Your experience should demonstrate industry relevance and expertise across one or more industry domains. You will have sold custom software ap",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Thoughtworks. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://jobicy.com/jobs/150753-business-development-executive",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/41d94d08-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/41d94d08-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/41d94d08-221.png",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789557462-55",
        "title": "Area Vice President, Strategic Sales",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Area Vice President, Strategic Sales)",
        "company": "Okta",
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
        "description": "Secure Every Identity, from AI to Human \n Identity is the key to unlocking the potential of AI. Okta secures AI by building the trusted, neutral infrastructure that enables organizations to safely embrace this new era. This work requires a relentless drive to solve complex challenges with real-world stakes. We are looking for builders and owners who operate with speed and urgency and execute with excellence. \n This is an opportunity to do career-defining work. We're all in on this mission. If you are too, let's talk. \n The Okta Sales Team \n Okta has a vision to free anyone to safely use any technology by providing a secure, highly available, enterprise-grade platform that secures billions of Workforce log-ins every year. As an Okta AE, you will drive territory growth through both net new logos and cultivating relationships to develop and grow existing Okta Platform customers. With the support of your Okta ecosystem, your focus will be on consistent results and an unwavering commitment to our customers. \n Strategic Sales Team \n We have a team of highly experienced sellers who are targeting Okta’s largest customers. This segment represents one of the biggest opportunities for growth at Okta. Each Strategic Account Executive is responsible for maintaining high activity standards; daily prospecting, pipeline growth, prospect qualification, and delivering assigned monthly sales revenue targets. \n The Strategic Area Vice President Opportunity \n The Area Vice President of Strategic ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Okta. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/150811-area-vice-president-strategic-sales",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/d54f5eb5-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/d54f5eb5-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/d54f5eb5-221.png",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789557462-56",
        "title": "Customer Success Manager",
        "title_ar": "مدير وقائد فريق (Customer Success Manager)",
        "company": "UpGuard",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Ireland, UK",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Who are we? \n At UpGuard, we are replacing manual security bottlenecks with AI-driven precision. Fresh off a US$75M Series C, we are scaling our infrastructure to process 100 billion risk signals daily. This isn’t just growth; it’s a total reimagining of how the world manages cyber risk. \n We build the Cyber Risk Posture Management (CRPM) platform that security teams actually love. By integrating security ratings, threat intel, and agentic AI, we empower organisations to stay ahead of an ever evolving attack surface. \n We aren’t just building another tool; we’re defining a category. We provide the autonomy to ship world-class technology and the resources to do it at a global scale. \n Why are we hiring for this role? \n Due to continued growth, the Customer Success team is expanding and we require a Customer Success Manager to join our high-performing team to onboard and enable our customers. The ideal candidate will be experienced in leading customer interactions, detail-oriented, articulate, and credible with the ability to listen effectively and provide clear advice. \n As a Customer Success Manager, you'll report to the Head of Customer Success, EMEA, and analyze the causes of your customer’s greatest pain points and work closely to mitigate them using UpGuard technology. You will solicit constant feedback from both customers and colleagues, helping improve UpGuard over time, and you’ll work with customers around the world, from early contact to successful deployment, gainin",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة UpGuard. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://jobicy.com/jobs/153249-customer-success-manager-46",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/474a12c7-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/474a12c7-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/474a12c7-221.png",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789557462-57",
        "title": "Senior Software Developer in Test, Quality Platform",
        "title_ar": "مهندس ومطور برمجيات (Senior Software Developer in Test, Quality Platform)",
        "company": "MaintainX",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "MaintainX is the world's leading AI-powered maintenance and asset management platform, serving 14,000+ customers including Duracell, Shell, Cintas, and Brenntag. We raised $150M in Series D funding led by Bessemer Venture Partners and Bain Capital Ventures, bringing our total funding to $254M. We were named to the Forbes 2025 Cloud 100 , the definitive ranking of the top 100 private cloud companies in the world. We're growing fast and hiring the talent to match. \n About the Role: \n As a Senior SDET on the Quality Platform team, you'll build the shared testing infrastructure, frameworks, and AI-assisted tooling that every engineering team at MaintainX relies on to ship quickly and confidently. Rather than owning testing for a single product area, you'll create the platform, developer experience, and automation that make high-quality software the default across the organization. \n You'll partner closely with product engineering teams, Quality Advocates, and SRE to improve developer productivity, increase release confidence, and help shape the future of AI-powered testing at MaintainX. \n What You'll Do: \n Build and evolve MaintainX's shared quality platform, test automation frameworks, and developer tooling. \n Design and develop AI-assisted test authoring infrastructure that significantly reduces test creation time while maintaining high quality. \n Own CI integration standards and improve build reliability across engineering teams. \n Design test harnesses for AI-powered product ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة MaintainX. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Qa & testing"
        ],
        "applyUrl": "https://jobicy.com/jobs/150817-senior-software-developer-in-test-quality-platform",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/f0177662-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/f0177662-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/f0177662-221.png",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789557462-58",
        "title": "Strategic Account Executive",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Strategic Account Executive)",
        "company": "Bloomreach",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Spain",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Bloomreach is building the world’s premier agentic platform for personalization .We’re revolutionizing how businesses connect with their customers, building and deploying AI agents to personalize the entire customer journey. \n We're taking autonomous search mainstream, making product discovery more intuitive and conversational for customers, and more profitable for businesses. \n We’re making conversational shopping a reality, connecting every shopper with tailored guidance and product expertise — available on demand, at every touchpoint in their journey. \n We're designing the future of autonomous marketing , taking the work out of workflows, and reclaiming the creative, strategic, and customer-first work marketers were always meant to do. \n And we're building all of that on the intelligence of a single AI engine — Loomi AI — so that personalization isn't only autonomous…it's also consistent.From retail to financial services, hospitality to gaming, businesses use Bloomreach to drive higher growth and lasting loyalty. We power personalization for more than 1,400 global brands, including American Eagle, Sonepar, and Pandora. As a Strategic Account Executive at Bloomreach, you will lead new-business sales in multi-stakeholder environments and manage end-to-end, complex deal cycles. You’ll own the full sales cycle—from prospecting and qualification through pricing, negotiation, and close—delivering new revenue across the Spanish market. You’ll collaborate cross-functionally with S",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bloomreach. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/145876-strategic-account-executive-6",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/60790cd5-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/60790cd5-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/60790cd5-221.png",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789557462-59",
        "title": "Senior Software Engineer - Data Platform",
        "title_ar": "مهندس ومطور برمجيات (Senior Software Engineer - Data Platform)",
        "company": "Samsara",
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
        "description": "Who we are \n Samsara (NYSE: IOT) is the pioneer of the Connected Operations™ Cloud, which is a platform that enables organizations that depend on physical operations to harness Internet of Things (IoT) data to develop actionable insights and improve their operations. At Samsara, we are helping improve the safety, efficiency and sustainability of the physical operations that power our global economy. Representing more than 40% of global GDP, these industries are the infrastructure of our planet, including agriculture, construction, field services, transportation, and manufacturing — and we are excited to help digitally transform their operations at scale. \n Working at Samsara means you’ll help define the future of physical operations and be on a team that’s shaping an exciting array of product solutions, including Video-Based Safety, Vehicle Telematics, Apps and Driver Workflows, and Equipment Monitoring. As part of a recently public company, you’ll have the autonomy and support to make an impact as we build for the long term. About the role: Samsara is looking for a Senior Software Engineer I to join our Data Platform team , which owns and develops the core analytical platform across Samsara. This team builds and maintains the infrastructure that powers Samsara’s data lake, distributed compute platform, and the systems that move data from our production data stores into our lakehouse. As a Senior Software Engineer on Data Platform, you will design, build, and operate reliable",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Samsara. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software engineering"
        ],
        "applyUrl": "https://jobicy.com/jobs/145935-senior-software-engineer-data-platform-2",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/dd26f5ca-221.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/dd26f5ca-221.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/dd26f5ca-221.jpg",
        "postedAt": "2026-09-16",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789557462-60",
        "title": "Account Executive (SaaS)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive (SaaS))",
        "company": "Housecall Pro",
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
        "description": "Why Housecall Pro? \n Help us build solutions that build better lives. At Housecall Pro, we show up to work every day to make a difference for real people: the home service professionals that support America’s 100 million homes. We’re all about the Pro, and dedicate our days to helping them streamline operations, scale their businesses, and—ultimately—save time so they can be with their families and live well. \n While our headquarters are based in Denver, Colorado, our team spans the globe, with teammates across Brazil, Poland, the Philippines, Mexico, and beyond. We care deeply about our customers and foster a culture where our company, people and Pros grow and succeed together—no matter where they’re based. Leadership is as focused on growing team members’ careers as they expect their teams to be on creating solutions for Pros. \n We also offer: \n A generous benefits program that supports the whole you with medical, dental, vision, life, disability, and 401(k) \n Paid holidays and flexible, take-it-as-you-need-it paid time off \n Monthly tech reimbursements \n A culture built on innovation that values big ideas, no matter where they come from \n Role Overview: \n As an Account Executive, you are a consultative sales professional dedicated to identifying the unique challenges and operational pain points independent service professionals face. You excel at building instant credibility across a diverse array of industry verticals, positioning yourself as an authoritative voice who sp",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Housecall Pro. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/150860-account-executive-saas",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/870ed960-221.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/870ed960-221.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/870ed960-221.jpg",
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
