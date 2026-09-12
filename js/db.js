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
        "id": "job-1789181817-1",
        "title": "Forward Deployed Full-Stack Engineer (Keyport, WA / Senior)",
        "title_ar": "مهندس ومطور برمجيات (Forward Deployed Full-Stack Engineer (Keyport, WA / Senior))",
        "company": "Spear AI",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "We’re seeking a skilled Forward Deployed Full-Stack Engineer to build the next-generation data management and artificial intelligence platform for maritime domain awareness. As a forward-deployed engineer, you’ll work on-site with customers — writing code, integrating systems, and solving hard problems in the field. You’re part engineer, part technical advisor, and wholly accountable for making the mission succeed. The position requires an active U.S. Secret clearance. Spear AI is a growing defense contracting company dedicated to delivering cutting-edge solutions that support our nation’s security. As we expand, we’re building a culture where innovation meets mission-critical work. We operate with a flat organizational structure that empowers every team member to make an impact, collaborate directly with leadership, and contribute to projects that matter. Whether you’re joining our Hardware, Software, or Services division, you’ll work alongside talented professionals who are committed to excellence and advancing the capabilities that keep our nation safe and secure. Spear AI builds sonobuoy sensors that are deployed into the water and collect edge data. We also work with the U.S. Navy to collect and process their SONAR data. You’ll have an opportunity to work on real-world projects that directly impact warfighter capabilities and mission success. What you’ll do We’re a small team wearing many hats, and you’d have a wide variety of responsibilities that include: \n Build out a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Spear AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://himalayas.app/companies/spear-ai/jobs/forward-deployed-full-stack-engineer-keyport-wa-senior",
        "logo": "https://cdn-images.himalayas.app/g38i39z7fw26ec0sxw4mnj4t7jdj",
        "companyLogo": "https://cdn-images.himalayas.app/g38i39z7fw26ec0sxw4mnj4t7jdj",
        "image": "https://cdn-images.himalayas.app/g38i39z7fw26ec0sxw4mnj4t7jdj",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-2",
        "title": "SEO Expert (Multi-Client Agency, WordPress + Webflow)",
        "title_ar": "SEO Expert (Multi-Client Agency, WordPress + Webflow) (برمجة وتكنولوجيا)",
        "company": "RevStone",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Pakistan",
        "location_ar": "Pakistan",
        "salary": "$1,500 - $2,200 USD",
        "description": "SEO Expert (Multi-Client Agency, WordPress + Webflow) Full-Time · Remote (Lahore) · $1,500–$2,200 USD/month Hours: U.S. business hours (Pacific/Central), Monday–Friday \n About RevStone \n RevStone is a U.S.-based managed staffing company. We place trained, World-Wide-based Operators into growing American businesses. We are not a VA marketplace. We are your employer on this side — we handle payroll, benefits, and support, and we back you with SOPs, training, and a real team lead who has your back. \n About the Client You'll be placed full-time with a fast-growing U.S. digital marketing agency that builds and manages websites for a portfolio of small and mid-sized business clients across multiple industries. They need one person who owns SEO across all of those client sites — not a task-taker, but the agency's in-house SEO expert. \n The Role This is a \"Swiss Army knife\" SEO role. You won't be working on one website. You'll be working across a portfolio of client sites built on different platforms — WordPress, Webflow, Shopify, and others — and you need to be comfortable jumping between them without hand-holding. One day you're fixing crawl errors on a Webflow site. The next you're building out a local SEO plan for a service business, writing content briefs for an e-commerce client, and presenting a monthly report to the agency's account manager. If that sounds like fun instead of chaos, keep reading. \n What You'll Own \n Technical SEO across all client sites: audits, Core Web Vita",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة RevStone. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Seo-consultant",
            "Freelance-seo-manager",
            "Seo-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/revstone/jobs/seo-expert-multi-client-agency-wordpress-webflow-4901691455",
        "logo": "https://cdn-images.himalayas.app/qu8qtkzxdj3ycc3jl1vxd42bcu1y",
        "companyLogo": "https://cdn-images.himalayas.app/qu8qtkzxdj3ycc3jl1vxd42bcu1y",
        "image": "https://cdn-images.himalayas.app/qu8qtkzxdj3ycc3jl1vxd42bcu1y",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-3",
        "title": "Recruiting Coordinator",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Recruiting Coordinator)",
        "company": "Careerswift",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$22 - $30 USD",
        "description": "Bilgewater Group is a Chicago-based diversified services company founded in 2003. We operate across two core divisions: food service and care. Our food service division manages a network of quick-service and counter-service locations across the greater Chicagoland area, serving thousands of customers every day at high-traffic venues, including commercial districts, transit hubs, and retail centers. ABOUT THE ROLE We are looking for a Recruiting Coordinator to support the day-to-day hiring process and help keep recruiting activities organized. You will coordinate interviews, communicate with candidates, maintain applicant information, and work with hiring managers to keep the recruitment process moving smoothly. WHAT YOU WILL DO \n Coordinate interviews and recruiting-related meetings \n Communicate with candidates throughout the hiring process \n Maintain accurate candidate and recruiting records \n Post and update job openings as needed \n Support hiring managers with interview scheduling and follow-ups \n Prepare recruiting documents and hiring materials \n Track candidate progress and outstanding recruitment tasks \n WHAT WE ARE LOOKING FOR \n Previous experience in recruiting, HR, administration, customer service, or a similar role \n Strong organization and attention to detail \n Professional written and verbal communication skills \n Comfortable managing schedules, candidate information, and multiple priorities \n Proficiency with Microsoft Office or Google Workspace \n Comfortable w",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Careerswift. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Recruiting-coordinator",
            "Recruitment-coordinator",
            "Recruiting-coordination"
        ],
        "applyUrl": "https://himalayas.app/companies/careerswift/jobs/recruiting-coordinator",
        "logo": "https://cdn-images.himalayas.app/waboegdjl9t73s8zi9w5438eio8g",
        "companyLogo": "https://cdn-images.himalayas.app/waboegdjl9t73s8zi9w5438eio8g",
        "image": "https://cdn-images.himalayas.app/waboegdjl9t73s8zi9w5438eio8g",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-4",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-5",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-6",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-7",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-8",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-9",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-10",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-11",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181818-12",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-13",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-14",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-15",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-16",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-17",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-18",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-19",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789181819-20",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-21",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-22",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-23",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-24",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-25",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-26",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-27",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-28",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-29",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-30",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-31",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-32",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-33",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-34",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-35",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789181819-36",
        "title": "Logistics Manager (m/f/d)",
        "title_ar": "مدير وقائد فريق (Logistics Manager (m/f/d))",
        "company": "Yepoda",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Yepoda Clean K-Beauty Innovation. No compromises. Yepoda is a clean K-Beauty brand that actually proves it works. We make Korean skincare without any of the compromises. Everything is clinically tested, 100% vegan, and formulated above EU standards. So you get the innovation and the results that K-Beauty is known for, plus a real commitment to sustainability. And we make it genuinely fun and easy to use — skincare you actually look forward to. Founded in 2020 by Sander Joonyoung van Bladel and Veronika Strotmann, Yepoda is a certified B Corp™ and 1% for the Planet member, based in the heart of Berlin. Our products are available through our own online shop and, since March 2025, at Sephora Europe — online and in over 650 stores. With a team of 140+ brilliant individuals from around the world, we are actively shaping Yepoda's story every day. We are hiring a Logistics Manager to help scale Yepoda's global inbound logistics operations across air and ocean freight. In this hands-on role, you will own end-to-end shipment flow from manufacturing sites to warehouses, and balance strategic freight forwarder management with day-to-day operational execution. Your Tasks Manage end-to-end inbound logistics from manufacturing sites to warehouses, covering international air and ocean freight. Lead freight forwarder management, including rate negotiations, provider nominations, shipment bookings, service performance, and issue resolution. Ensure proactive shipment tracking and excepti",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/logistics-manager-berlin-30808",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-37",
        "title": "Accountant (Freelance/Temporary)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Accountant (Freelance/Temporary))",
        "company": "Yepoda",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Freelance / Temporary Accountant (m/f/d) – Yepoda, Berlin (Hybrid) About Yepoda Clean K-Beauty Innovation. No compromises. Yepoda is a clean K-Beauty brand that actually proves it works. We make Korean skincare without any of the compromises. Everything is clinically tested, 100% vegan, and formulated above EU standards. So you get the innovation and the results that K-Beauty is known for, plus a real commitment to sustainability. And we make it genuinely fun and easy to use — skincare you actually look forward to. Founded in 2020 by Sander Joonyoung van Bladel and Veronika Strotmann, Yepoda is a certified B Corp™ and 1% for the Planet member, based in the heart of Berlin. Our products are available through our own online shop and, since March 2025, at Sephora Europe — online and in over 650 stores. With a team of 140+ brilliant individuals from around the world, we are actively shaping Yepoda's story every day. We are looking for an Accountant to join our team at Yepoda on a temporary or freelance-basis. This role will involve overseeing financial operations, ensuring compliance with German accounting standards, and supporting the team as we continue to scale. Key Responsibilities: Oversee day-to-day financial operations including bookkeeping, invoicing, and payment processing Assist with monthly, quarterly, and annual financial statements preparation in accordance with HGB. We are just live with Oracle Netsuite! Support during the statutory audits and ensure compliance with",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/accountant-freelance-temporary-berlin-165494",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-38",
        "title": "Senior Product Owner - Data & Analytics (m/f/d)",
        "title_ar": "Senior Product Owner - Data & Analytics (m/f/d) (برمجة وتكنولوجيا)",
        "company": "Yepoda",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Yepoda Our mission is to bring Clean K-Beauty Innovations , from Korea straight to Europe, UK, and the US – without ever compromising on our values, quality, and sustainability. Our clean, mindfully produced skincare products are made with love in Korea, vegan, cruelty-free, and packed with the best natural and active ingredients. Founded in 2020 by Sander Joonyoung van Bladel and Veronika Strotmann, Yepoda is a fast-growing beauty start-up based in the heart of Berlin. Our products are available across Europe and, since March 2025, at Sephora Europe – online and in over 250 stores. As a certified B Corp™ , we are committed to building a business with purpose. With a team of over 120 brilliant individuals from around the world, we are actively shaping Yepoda’s story every day. We are looking for a Senior Data & Analytics Product Owner to join our growing Data team at Yepoda. In this role, you will partner closely with our Head of Data & Technology to shape how we build and ship data and analytics products across the business — driving alignment with stakeholders, prototyping ideas hands-on, and making sure our data capabilities translate into real commercial outcomes. Your Tasks Own the company-wide analytics function, i.e., the KPI framework, reporting cadence, BI tooling/glossary, and our decision-support and reporting standards. Own the product delivery roadmap for data initiatives for Yepoda's central Data analytics team. Translate commercial questions (CAC/LTV, cha",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/senior-product-owner-data-analytics-berlin-349254",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-39",
        "title": "PR Manager (m/f/d)",
        "title_ar": "مدير وقائد فريق (PR Manager (m/f/d))",
        "company": "Yepoda",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Yepoda Our mission is to bring Clean K-Beauty Innovations, from Korea straight to Europe, UK, and the US – without ever compromising on our values, quality, and sustainability. Our clean, mindfully produced skincare products are made with love in Korea, vegan, cruelty-free, and packed with the best natural and active ingredients. Founded in 2020 by Sander Joonyoung van Bladel and Veronika Strotmann, Yepoda is a fast-growing beauty start-up based in the heart of Berlin. Our products are available across Europe and, since March 2025, at Sephora Europe – online and in over 250 stores. As a certified B Corp™, we are committed to building a business with purpose. With a team of over 120 brilliant individuals from around the world, we are actively shaping Yepoda’s story every day. As PR Manager, you will lead Yepoda’s global communications and PR strategy across all markets. Your focus is to elevate brand awareness, ensure consistent messaging, and create impactful stories across media, partners, and internal channels, while driving measurable reach, impressions, and brand impact in every market. Your Tasks Lead and continuously evolve Yepoda’s global PR strategy, messaging, and brand storytelling across all markets and channels. Own PR performance across markets by defining, tracking, and achieving clear KPIs on impressions, reach, and share of voice. Manage and steer international PR agencies, including briefing, performance management, budget control, and negotiation of re",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Brand & communication"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/pr-manager-berlin-98388",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-40",
        "title": "Brand Experience Manager (m/f/d)",
        "title_ar": "مدير وقائد فريق (Brand Experience Manager (m/f/d))",
        "company": "Yepoda",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Yepoda Our mission is to bring Clean K-Beauty Innovations, from Korea straight to Europe, UK, and the US – without ever compromising on our values, quality, and sustainability. Our clean, mindfully produced skincare products are made with love in Korea, vegan, cruelty-free, and packed with the best natural and active ingredients. Founded in 2020 by Sander Joonyoung van Bladel and Veronika Strotmann, Yepoda is a fast-growing beauty start-up based in the heart of Berlin. Our products are available across Europe and, since March 2025, at Sephora Europe – online and in over 250 stores. As a certified B Corp™, we are committed to building a business with purpose. With a team of over 120 brilliant individuals from around the world, we are actively shaping Yepoda’s story every day. As Brand Experience Manager , you will own the end-to-end customer and brand experience across all touchpoints, online and offline. Your focus is to map and elevate the customer journey, shape unboxing and product experience, and turn customer insight into segmentation and decisions that keep Yepoda consistent, desirable, and loved at every interaction. Your Tasks Own the end-to-end customer journey across channels, identifying and resolving friction points through data, surveys, and feedback Partner with Marketing, Website, and CRM to personalize digital experiences at scale Lead the unboxing and product experience — packaging, inserts, merchandise — partnering with Creative and Product Development",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Brand & communication"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/brand-experience-manager-berlin-199979",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-41",
        "title": "Influencer Marketing Manager (m/w/d) | Deutschsprachig",
        "title_ar": "أخصائي تسويق ونمو (Influencer Marketing Manager (m/w/d) | Deutschsprachig)",
        "company": "Yepoda",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Über Yepoda Clean K-Beauty Innovation. Ohne Kompromisse. Yepoda ist eine Clean K-Beauty Brand, die hält, was sie verspricht. Wir entwickeln koreanische Hautpflege ohne Kompromisse: klinisch getestet, 100 % vegan und nach Standards formuliert, die über die EU-Anforderungen hinausgehen. So vereinen wir die Innovation und Wirksamkeit, für die K-Beauty bekannt ist, mit einem echten Engagement für Nachhaltigkeit. Und das Beste: Unsere Produkte machen Hautpflege einfach, effektiv und zu einem Ritual, auf das man sich jeden Tag freut. Gegründet wurde Yepoda 2020 von Sander Joonyoung van Bladel und Veronika Strotmann. Als zertifizierte B Corp™ und Mitglied von 1% for the Planet haben wir unseren Hauptsitz im Herzen Berlins. Unsere Produkte sind über unseren eigenen Onlineshop erhältlich und seit März 2025 außerdem bei Sephora Europe – online sowie in über 650 Stores. Mit einem internationalen Team von mehr als 140 talentierten Menschen gestalten wir die Geschichte von Yepoda jeden Tag aktiv weiter. Für unser Team in Berlin suchen wir aktuell einen Influencer Marketing Manager (m/w/d) . In dieser Rolle verantwortest du ein Portfolio strategischer Creator-Partnerschaften für den deutschen Markt und trägst maßgeblich dazu bei, Umsatzwachstum, Markenbekanntheit und nachhaltigen Business Impact durch leistungsstarke Influencer-Kooperationen voranzutreiben. Die Position ist ideal für Menschen mit ausgeprägtem „Business-Mindset“, die Freude an Verhandlungen haben, Wachstumspotenziale erkenn",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Influencer marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/influencer-marketing-manager-deutschsprachig-berlin-457988",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-42",
        "title": "Junior Influencer Marketing (m/f/d) | US Market",
        "title_ar": "أخصائي تسويق ونمو (Junior Influencer Marketing (m/f/d) | US Market)",
        "company": "Yepoda",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Yepoda Clean K-Beauty Innovation. No compromises. Yepoda is a clean K-Beauty brand that actually proves it works. We make Korean skincare without any of the compromises. Everything is clinically tested, 100% vegan, and formulated above EU standards. So you get the innovation and the results that K-Beauty is known for, plus a real commitment to sustainability. And we make it genuinely fun and easy to use — skincare you actually look forward to. Founded in 2020 by Sander Joonyoung van Bladel and Veronika Strotmann, Yepoda is a certified B Corp™ and 1% for the Planet member, based in the heart of Berlin. Our products are available through our own online shop and, since March 2025, at Sephora Europe — online and in over 650 stores. With a team of 140+ brilliant individuals from around the world, we are actively shaping Yepoda's story every day. We are currently looking for a Junior Influencer Marketing Manager to support our influencer marketing efforts and drive our expansion into the US market . This role is ideal for someone eager to develop their skills in a fast-paced environment. Your Tasks Assist in researching and identifying potential influencers for collaboration. Support the team in managing relationships with influencers, their agencies, and our brand. Help with the briefing process, ensuring influencers align with our expectations. Learn to negotiate partnerships, focusing on performance and budget considerations. Contribute to the execution of our Influencer M",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Yepoda. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Influencer marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/yepoda/junior-influencer-marketing-us-market-berlin-302153",
        "logo": "https://logo.clearbit.com/yepoda.com",
        "companyLogo": "https://logo.clearbit.com/yepoda.com",
        "image": "https://logo.clearbit.com/yepoda.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-43",
        "title": "AI Engineer - Data",
        "title_ar": "مهندس ومطور برمجيات (AI Engineer - Data)",
        "company": "Almedia",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "This isn’t your regular job. Almedia is a place where those who want to push harder can accelerate their careers faster than anywhere else. We’re aiming to become Germany’s second bootstrapped unicorn. Almedia is already Europe’s #3 fastest-growing company in 2025 (FT1000). We are building the future of marketing by rewarding our community of over 70 million users for engaging with our advertisers’ products. We are offering a new way to acquire users for the biggest companies in the world. AI Engineer - Data About Almedia Almedia is Europe's #3 fastest-growing company (FT1000, 2025), bootstrapped and profitable from day one, and on track to become Germany's second bootstrapped unicorn. We reward our community of 80M+ users for engaging with our advertisers' products, giving the world's biggest companies a new way to acquire and retain users. Our products: Freecash, Zave.IT , and Link. This is our first dedicated AI Engineer in the data team: a hands-on, build-and-ship role with unusually broad scope, right at the core of how our product works. What you'll own The AI behind our rewards engine. We want to create our next generation of reward design system fully agentically. We want AI to look into the games, generate tailored offers, and evaluate them before they go live, replacing our current inflexible design. Open-ended AI problems, end to end. Across the data org's verticals, from payer structures to user acquisition and beyond, you'll take the fuzzy \"could AI help here?\"pr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Almedia. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/almedia/ai-engineer-data-berlin-450785",
        "logo": "https://logo.clearbit.com/almedia.com",
        "companyLogo": "https://logo.clearbit.com/almedia.com",
        "image": "https://logo.clearbit.com/almedia.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-44",
        "title": "Senior Analytics Engineer (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Analytics Engineer (f/m/d))",
        "company": "Voize",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "🎤 Why voize? Because we’re more than just a job! At voize, we believe the greatest gift to frontline workers is time - time to care, connect, and be present. Today, that time is lost to busywork and complex systems that pull them away from what matters most: people . Our vision is to change that by building AI companions that seamlessly take over digital workflows. We don’t replace humans with technology - we amplify their impact. Our mission is backed with a $50M Series A funding led by Balderton Capital, with support from HV Capital, Y Combinator and other leading VCs. Today, 2,000+ facilities trust voize, and over 200,000 users rely on our AI companion to ease their daily workload. As a dynamic team, we combine first-in-class technology with meaningful social impact. And now, we’re looking for you to join us on this mission! 💡 Your Mission: One source of truth for a company that runs on data As Senior Analytics Engineer , you own voize's company data from the warehouse to the dashboards. You'll be part of our Data & AI function - ensuring the data voize and our AI layer runs on are reliable, safe & scalable. The modern stack (Redshift, dbt, Fivetran, Lightdash) is already live: you make it rock-solid and turn it into the single source of truth the whole company runs on, from ARR to product adoption. As our first dedicated analytics hire, you partner directly with Finance, RevOps, Product, and Customer Success, turning their questions into numbers everyone trusts. 🚀 Your Da",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Voize. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/voize/senior-analytics-engineer-berlin-219113",
        "logo": "https://logo.clearbit.com/voize.com",
        "companyLogo": "https://logo.clearbit.com/voize.com",
        "image": "https://logo.clearbit.com/voize.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-45",
        "title": "Customer Support Manager (m/f/d)",
        "title_ar": "مدير وقائد فريق (Customer Support Manager (m/f/d))",
        "company": "Voize",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "🎤 Why voize? Because we’re more than just a job! At voize, we believe the greatest gift to frontline workers is time - time to care, connect, and be present. Today, that time is lost to admin work that pulls nurses away from what matters most: people . We’re changing that by building the AI companion that frees nurses from admin, giving them back up to 30% of time . We don’t replace humans - we support and amplify their impact. Today, 1,100+ care facilities trust voize, and over 75,000 nurses rely on our AI companion to ease their daily workload. Our mission is backed with a $50M Series A funding led by Balderton Capital, with support from HV Capital, Y Combinator and other leading VCs. As a fast-growing team, we combine first-in-class technology with meaningful social impact. And now, we’re looking for you to join us on this mission! 💡 Your Mission: Own inbound support and drive great resolutions As a Customer Support Manager at voize, you are responsible for delivering a consistently excellent customer experience across our inbound channels — voice, chat, and email . You make sure customers get fast, helpful answers, and you keep cases moving from first contact to resolution. When an issue requires deeper investigation, you collaborate closely with Technical Support and other internal teams to ensure problems are solved thoroughly and communication stays clear. 🚀 Your Daily Business – No two days are alike Manage inbound support across voice, chat, and email , ensuring cust",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Voize. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer support"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/voize/customer-support-manager-berlin-12439",
        "logo": "https://logo.clearbit.com/voize.com",
        "companyLogo": "https://logo.clearbit.com/voize.com",
        "image": "https://logo.clearbit.com/voize.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-46",
        "title": "Performance Marketing Manager (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Performance Marketing Manager (m/w/d))",
        "company": "praxipal",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "TL;DR – Wir entwickeln KI-gestützte Fachkräfte für das Gesundheitswesen von morgen. Unsere KI-Rezeptionistin Luna automatisiert bereits heute die Patientenkommunikation in Arztpraxen. Nachdem wir uns als Marktführer in der Zahnmedizin etabliert haben, gehen wir jetzt den nächsten großen Schritt: neue medizinische Fachbereiche, neue Länder, neue Produkte. Als Performance Marketing Manager verantwortest du, wie wir neue Praxen erreichen und gewinnen, du baust unsere bezahlten Kanäle systematisch aus und machst jeden investierten Euro messbar profitabler. Wieso praxipal? Der Fachkräftemangel ist die größte Herausforderung für unser Gesundheitswesen. Zehntausende Stellen bleiben jedes Jahr unbesetzt und der demografische Wandel sorgt dafür, dass sich diese Entwicklung immer weiter zuspitzt. Arztpraxen setzen auf unsere KI-Rezeptionistin Luna, um ihr Personal zu entlasten und die Versorgung für alle zugänglich zu halten. Wir sind ein tech-driven Unternehmen und setzen bewusst auf ein kleines, hochtalentiertes Team. Was uns ausmacht, ist das Tempo und die Intensität, mit der wir arbeiten, aber ebenso wichtig ist uns das Miteinander. Deshalb kommen wir jeden Tag ins Büro: um uns auszutauschen, voneinander zu lernen und gemeinsam zu wachsen. Was du tun wirst In einem Satz: du baust und skalierst unsere bezahlten Akquisekanäle und sorgst dafür, dass jeder Marketing-Euro nachweisbar zu neuen Kunden führt. Du planst, setzt auf und optimierst Kampagnen über Meta, Google und weitere relev",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة praxipal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Go-to-market"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/praxipal/performance-marketing-manager-berlin-497501",
        "logo": "https://logo.clearbit.com/praxipal.com",
        "companyLogo": "https://logo.clearbit.com/praxipal.com",
        "image": "https://logo.clearbit.com/praxipal.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-47",
        "title": "Sales Development Representative (m/f/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Development Representative (m/f/d))",
        "company": "praxipal",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "TL;DR – Wir entwickeln KI-gestützte Fachkräfte für das Gesundheitswesen von morgen. Unsere KI-Rezeptionistin Luna automatisiert bereits heute die Patientenkommunikation in Arztpraxen. Nachdem wir uns als Marktführer in der Zahnmedizin etabliert haben, gehen wir jetzt den nächsten großen Schritt: neue medizinische Fachbereiche, neue Länder, neue Produkte. Als Sales Development Representative bist du der erste persönliche Kontakt für Praxen, die Interesse an Luna zeigen: du rufst unsere eingehenden Leads an, begeisterst sie für unser Produkt und bringst sie in eine Demo. Damit legst du den Grundstein für unseren gesamten Vertrieb. Wieso praxipal? Der Fachkräftemangel ist die größte Herausforderung für unser Gesundheitswesen. Zehntausende Stellen bleiben jedes Jahr unbesetzt und der demografische Wandel sorgt dafür, dass sich diese Entwicklung immer weiter zuspitzt. Arztpraxen setzen auf unsere KI-Rezeptionistin Luna, um ihr Personal zu entlasten und die Versorgung für alle zugänglich zu halten. Wir sind ein tech-driven Unternehmen und setzen bewusst auf ein kleines, hochtalentiertes Team. Was uns ausmacht, ist das Tempo und die Intensität, mit der wir arbeiten, aber ebenso wichtig ist uns das Miteinander. Deshalb kommen wir jeden Tag ins Büro: um uns auszutauschen, voneinander zu lernen und gemeinsam zu wachsen. Was du tun wirst In einem Satz: du verwandelst das Interesse unserer eingehenden Leads in gebuchte Demos – und wächst dabei selbst schnell in mehr Verantwortung rein. D",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة praxipal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Go-to-market"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/praxipal/sales-development-representative-berlin-332649",
        "logo": "https://logo.clearbit.com/praxipal.com",
        "companyLogo": "https://logo.clearbit.com/praxipal.com",
        "image": "https://logo.clearbit.com/praxipal.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-48",
        "title": "Founding Sales Development Representative (m/w/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Founding Sales Development Representative (m/w/d))",
        "company": "praxipal",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "TL;DR – Wir entwickeln KI-gestützte Fachkräfte für das Gesundheitswesen von morgen. Unsere KI-Rezeptionistin Luna automatisiert bereits heute die Patientenkommunikation in Arztpraxen. Nachdem wir uns als Marktführer in der Zahnmedizin etabliert haben, gehen wir jetzt den nächsten großen Schritt: neue medizinische Fachbereiche, neue Länder, neue Produkte. Als Founding SDR baust du unseren Inbound Lead-to-Demo-Prozess und kurbelst so unser Wachstum weiter an. Wieso praxipal? Der Fachkräftemangel ist die größte Herausforderung für unser Gesundheitswesen. Zehntausende Stellen bleiben jedes Jahr unbesetzt und der demografische Wandel sorgt dafür, dass sich diese Entwicklung immer weiter zuspitzt. Arztpraxen setzen auf unsere KI-Rezeptionistin Luna, um ihr Personal zu entlasten und die Versorgung für alle zugänglich zu halten. Wir sind ein tech-driven Unternehmen und setzen bewusst auf ein kleines, hochtalentiertes Team. Was uns ausmacht, ist das Tempo und die Intensität, mit der wir arbeiten, aber ebenso wichtig ist uns das Miteinander. Deshalb kommen wir jeden Tag ins Büro: um uns auszutauschen, voneinander zu lernen und gemeinsam zu wachsen. Was du tun wirst In einem Satz: Du bist SDR #1 und spielst eine Schlüsselrolle dabei, ein leistungsstarkes SDR-Team aufzubauen und zu skalieren, statt nur in einem bestehenden Prozess zu arbeiten. Du bist SDR #1 und baust die Engine, die unsere Inbound-Leads zuverlässig in gebuchte Demos verwandelt - ob durch hartnäckiges Telefonieren, Autom",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة praxipal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Go-to-market"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/praxipal/founding-sales-development-representative-berlin-194883",
        "logo": "https://logo.clearbit.com/praxipal.com",
        "companyLogo": "https://logo.clearbit.com/praxipal.com",
        "image": "https://logo.clearbit.com/praxipal.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-49",
        "title": "(Senior) Software Engineer - Data Integration Focus - Remote (m/f/d)",
        "title_ar": "مهندس ومطور برمجيات ((Senior) Software Engineer - Data Integration Focus - Remote (m/f/d))",
        "company": "praxipal",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "At praxipal, we are building an AI-powered healthcare admin workforce to address the global shortage of medical staff. Medical assistants are too valuable to spend their days chasing callbacks, cleaning up schedules, sending repetitive messages, or wrestling with invoicing and documentation workflows. Staff should spend time on patients. That’s why we build Luna. Our AI receptionist, Luna, answers and automates phone calls and she’s loved by hundreds of medical practitioners. Right now, we’re expanding her from calls to end-to-end patient communication across any channel. Over the next years, we’ll grow her into an AI worker that automates all administrative processes in medical practices, embedded directly into the systems practice teams already use. We’re backed by one of Europe’s leading investors and are one of the fastest growing healthtech startups in Germany. Our team has previously worked and studied at Palantir, Amazon, SAP, the University of Cambridge, and Hasso Plattner Institute. We're hiring a (Senior) Software Engineer to help us scale Luna from hundreds of medical practitioners to hundreds of thousands. The role Integration is the bottleneck and the unlock: Luna can only automate workflows when she can reliably read and write the source of truth inside a practice: schedules, patient context, messages, statuses, and workflow metadata. That data lives in practice management systems (PMS) and related tools. You’ll work hands-on, shipping production integrations. A",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة praxipal. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/praxipal/senior-software-engineer-data-integration-focus-remote-416977",
        "logo": "https://logo.clearbit.com/praxipal.com",
        "companyLogo": "https://logo.clearbit.com/praxipal.com",
        "image": "https://logo.clearbit.com/praxipal.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-50",
        "title": "Microwave Design Engineer",
        "title_ar": "مهندس ومطور برمجيات (Microwave Design Engineer)",
        "company": "Proxima Fusion GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "WHO WE ARE Proxima Fusion is Europe’s fastest-growing fusion company and the continent’s best-funded fusion player, as well as the first spin-out from the Max Planck Institute for Plasma Physics (IPP). Backed by over €650M and powered by a growing team across Munich, Zurich, and Oxford, we are developing the hardware and infrastructure needed to deliver the world’s first commercial stellarator fusion power plant. Our concept advances the most mature fusion technology out there, the Wendelstein 7-X stellarator, through two next-generation machines: Alpha and Stellaris. Our work combines stellarator optimization, advanced computation, machine learning, and high-temperature superconducting magnets to unlock higher-performance designs that were previously out of reach. Turning these designs into a functioning fusion power plant requires excellence and ownership across every discipline, from physics and engineering to software, manufacturing, law, and business functions. WHY JOIN PROXIMA FUSION Work on a civilisation-scale problem - Clean, baseload fusion energy is one of the few genuinely world-changing challenges, and every hire in Finance, People, or Legal directly accelerates the path to a working stellarator. Grow as fast as the company does - With headcount set to roughly 5x in a few years and major technical milestones ahead on the path to our demo machine and first power plant, your role grows under you; today's hire is tomorrow's function lead. Tackle problems that don't ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Proxima Fusion GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Stellarator design"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/proxima-fusion-gmbh/microwave-design-engineer-munich-260899",
        "logo": "https://logo.clearbit.com/proximafusiongmbh.com",
        "companyLogo": "https://logo.clearbit.com/proximafusiongmbh.com",
        "image": "https://logo.clearbit.com/proximafusiongmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-51",
        "title": "Regional Fleet Manager (m/f/d) - North-East",
        "title_ar": "مدير وقائد فريق (Regional Fleet Manager (m/f/d) - North-East)",
        "company": "Roadsurfer",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Why roadsurfer? TEAM SPIRIT & TEAM EVENTS: Look forward to a collegial atmosphere with flat hierarchies, lots of fun and great team spirit, as well as regular team events such as joint sports sessions, pizza & beer evenings, etc. PERSONAL DEVELOPMENT: We support your personal and professional development through an individual Growth Plan and our Inhouse Academy CAMPER BUDGET: You get an annual camper budget to experience the #happyroadsurfing lifestyle for yourself As Regional Fleet Manager you are a key member of the Regional Leadership Team, reporting directly to the Market Fleet Manager , assigned to the Regional Operations Manager of your region. You’ll lead all Technicians within your region, with indirect oversight of Fleet Managers and Damage Detection Experts for ca. 1000 vehicles at 10 Stations. Your mission: drive fleet availability, repair turn-around, cost efficiency, and quality across region — keeping our fleet running smoothly and our operations performing at their best. The role - your passion Own the Maintenance, Repair and Fleet Transfer budget and ensure cost-efficient, high-quality repairs across the region such as Repair Strategy, Workshop Network, Spare Parts Inventory Define repair strategies per vehicle based on damage reports and operational priorities. Maintain strong vehicle availability by coordinating workshop capacity, scheduling, and spare parts flow. Build and optimize the internal and external workshop network to improve turnaround times and c",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Roadsurfer. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Fleet operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/roadsurfer/regional-fleet-manager-north-east-berlin-407488",
        "logo": "https://logo.clearbit.com/roadsurfer.com",
        "companyLogo": "https://logo.clearbit.com/roadsurfer.com",
        "image": "https://logo.clearbit.com/roadsurfer.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-52",
        "title": "Kundenservice (m/w/d)",
        "title_ar": "Kundenservice (m/w/d) (خدمة ودعم العملاء)",
        "company": "Roadsurfer",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Köln-Düsseldorf",
        "location_ar": "Köln-Düsseldorf",
        "salary": "Competitive",
        "description": "Warum roadsurfer? TEAMSPIRIT & TEAMEVENTS: Freu dich auf eine kollegiale Atmosphäre mit flachen Hierarchien, jede Menge Spaß und großartigem Teamspirit sowie regelmäßige Teamevents wie gemeinsame Sportsessions, Grillabende oder einfach nur ein Feierabenddrink an deiner Station. CAMPER BUDGET: Du bekommst eine jährliche Freimiete für unsere Camper, damit du den #happyroadsurfing Lifestyle selbst erleben kannst. DISCOUNTS UND BENEFITS: Nutze unsere Corporate Benefits Plattform, die Travel Industry Card und Family & Friends Rabatte. DEVELOPMENT & GROWTH: Wachstum spielt eine zentrale Rolle bei roadsurfer! Bei unseren regelmäßigen Station Life Camps und Trainings kannst du dich mit Teammitgliedern aus aller Welt vernetzen und deine Fähigkeiten verbessern – sei es im Bereich Fahrzeugwissen oder Kundenservice – stets begleitet von unseren Learning & Training-Expert:innen. Deine Rolle – Deine Leidenschaft Du koordinierst das tägliche Vermietgeschäft und sorgst gemeinsam mit unserem Stationsteam für einen reibungslosen Ablauf bei Fahrzeugübergaben und -rücknahmen. Die Zufriedenheit unserer Kund*innen steht für dich im Mittelpunkt – du gestaltest eine positive Customer Journey. Du unterstützt die Stationsleitung bei der Personalplanung sowie beim Training des Teams und trägst dazu bei, dass sich alle weiterentwickeln können. Du stellst sicher, dass unsere Qualitätsstandards eingehalten werden – insbesondere im Umgang mit unseren Kund*innen. Was du brauchst, um mit uns auf einer Welle ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Roadsurfer. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/roadsurfer/kundenservice-dormagen-104875",
        "logo": "https://logo.clearbit.com/roadsurfer.com",
        "companyLogo": "https://logo.clearbit.com/roadsurfer.com",
        "image": "https://logo.clearbit.com/roadsurfer.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-53",
        "title": "Senior AI Engineer, Location AI",
        "title_ar": "مهندس ومطور برمجيات (Senior AI Engineer, Location AI)",
        "company": "Mapbox",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mapbox Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Mapbox is the leading real-time location platform for a new generation of location-aware businesses. Mapbox is the only platform that equips organizations with the full set of tools to power the navigation of people, packages, and vehicles everywhere. More than 4 million registered developers have chosen Mapbox because of the platform’s flexibility, security and privacy compliance. Organizations use Mapbox applications, data, SDKs and APIs to create customized and immersive experiences that delight their customers. What you'll do This role is scoped by skill rather than by product. The problems below span multiple departments and show up across our Search and Places data work, our Location and Navigation Intelligence work, and the Platform work that makes Mapbox usable by agents. You'll be hired into one specific team or product area, but you'll work across teams where your expertise meets the highest-priority AI problems. You should expect to move between teams and tech stacks as the work demands. At this level you own the technical design and delivery of a multi-component AI system, and you are accountable for the quality of what ships in your area. In this role, you will: Define how the products you own should work, build a measurement framework for it, and build evaluation systems for non-deterministic behavior. Formulate hypotheses around the products we build and seek the signal needed to validate them. Define what a correct result is for a given input and state, determ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mapbox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Location ai"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/mapbox/senior-ai-engineer-location-ai-mapbox-germany-1055",
        "logo": "https://logo.clearbit.com/mapbox.com",
        "companyLogo": "https://logo.clearbit.com/mapbox.com",
        "image": "https://logo.clearbit.com/mapbox.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-54",
        "title": "Senior Sales Engineer - MENA",
        "title_ar": "مهندس ومطور برمجيات (Senior Sales Engineer - MENA)",
        "company": "Sardine",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Who we are: Sardine is the leading agentic risk platform for fighting financial crime. Our integrated solution unifies data across risk teams to help organizations stop fraud in real time, prevent AI-driven attacks, and automate fraud and AML operations. Sardine’s platform is strengthened by one of the fastest-growing fraud consortiums in the market, spanning more than 6 billion profiled devices, 800 million consumers, and 3 million businesses worldwide. Leading companies including FIS, GoDaddy, Intuit, Edward Jones, ZoomInfo, and Checkout.com rely on Sardine to secure and grow trust in their products. Our culture: We have hubs in the Bay Area, NYC, Austin, Toronto, and São Paulo. However, we maintain a remote-first work culture. #WorkFromAnywhere We hire talented, self-motivated individuals with extreme ownership and high growth orientation. We value performance and not hours worked. We believe you shouldn't have to miss your family dinner, your kid's school play, friends get-together, or doctor's appointments for the sake of adhering to an arbitrary work schedule. Location: Remote MENA - Preference for Dubai Please note: This role will require up to 50% travel. From Home / Beach / Mountain / Cafe / Anywhere! We are a remote-first company with a globally distributed team. You can find your productive zone and work from there. About the role: Sales Engineering is a team of subject matter experts who serve as the trusted technical advisor to prospective customers. You will lea",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sardine. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sardine/remote-senior-sales-engineer-mena-179937",
        "logo": "https://logo.clearbit.com/sardine.com",
        "companyLogo": "https://logo.clearbit.com/sardine.com",
        "image": "https://logo.clearbit.com/sardine.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-55",
        "title": "Senior Embedded Software Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Embedded Software Engineer)",
        "company": "The Exploration Company",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Here at The Exploration Company, we are building innovative aerospace technologies that advance the future of space transportation. We are looking for a Senior Embedded Software Engineer with deep expertise in low-level platform bring-up and RT-OS tailoring for embedded real-time applications. You will own the full software stack from bootloader, BSP, OS, and application. You will establish and maintain the toolchain and CI infrastructure that underpins our embedded platforms development. You are comfortable owning the entire platform software stack independently. You have brought up a (safety critical) MCU from scratch, debugged obscure failures with a debug probe (e.g. JTAG), serial console, logic analyser, or oscilloscope. You instinctively collaborate closely with the hardware team on the platform design and with the application stakeholders on requirements. Key Responsibilities As a Senior Embedded Software Engineer, your role and responsibilities will continuously evolve. Your initial duties include to: Bring-up the RTOS and develop the BSP for ARM Cortex-M cores, including MPU configuration and inter-core communication Develop, test and maintain an extensive set of MCU drivers to fulfill application's needs (ADC, SPI, Clock and more) Develop complete communication stack, validate its integration in host system Develop drivers for complex ICs Integration test MCU and FPGA interfaces Set-up toolchain and CI for the MCU and wider embedded platform (HiL, automated test equ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة The Exploration Company. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/the-exploration-company/senior-embedded-software-engineer-munich-67547",
        "logo": "https://logo.clearbit.com/theexplorationcompany.com",
        "companyLogo": "https://logo.clearbit.com/theexplorationcompany.com",
        "image": "https://logo.clearbit.com/theexplorationcompany.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789181819-56",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789181819-57",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789181819-58",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789181819-59",
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
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789181819-60",
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
        "postedAt": "2026-09-12",
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
