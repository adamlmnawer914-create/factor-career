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
        "id": "job-1789505640-1",
        "title": "Technical Product Manager",
        "title_ar": "مدير وقائد فريق (Technical Product Manager)",
        "company": "Hivemapper",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "There are active contributors around the world. This includes currently active dashcam contributors across North America, South East Asia, and Europe. As we enter a huge new growth phase, our contributor-facing products need to level up in order to scale both vertically and horizontally. In particular, this role will manage hardware and software products across sensors (including imagers and radios), mobile applications (sensor integration, contributor experience, edge compute), and web applications for customers and contributors alike (ML, CV, Sensor Fusion, 3D reconstruction, high performance graphics, etc.). The Street-Level Imagery PM will work directly with our hardware partners on the R&D, manufacturing & supply chain, and global distribution of many thousands of sensor units in 2022. These sensors, and other commercially available sensors, integrate directly with our mobile applications, allowing us to streamline data transfer and unlock powerful edge compute solutions across sensor fusion, machine learning, and computer vision. RESPONSIBILITIES \n Partner with internal and external stakeholders to drive results and ensure high product quality \n Develop new features and become an expert across street-level imagery, mapping, and blockchain. \n Define and execute product roadmap and strategy, drive new business development, monitor and forecast product success \n Empathize with our contributors and customers alike \n Foster collaborative relationships with both internal and ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Hivemapper. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-management"
        ],
        "applyUrl": "https://himalayas.app/companies/hivemapper/jobs/technical-product-manager-4569496177",
        "logo": "https://logo.clearbit.com/hivemapper.com",
        "companyLogo": "https://logo.clearbit.com/hivemapper.com",
        "image": "https://logo.clearbit.com/hivemapper.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-2",
        "title": "Cybersecurity Engineer (Bay Area Preferred)",
        "title_ar": "مهندس ومطور برمجيات (Cybersecurity Engineer (Bay Area Preferred))",
        "company": "Coherent Corp.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Primary Duties & Responsibilities \n Own and advance the engineering of Microsoft Sentinel and Azure security capabilities. \n Design and improve enterprise security monitoring, detection, automation, and security controls. \n Solve complex security problems spanning cloud, infrastructure, identity, networks, applications, and manufacturing environments. \n Review infrastructure and application designs, identify security risks and attack paths, and recommend practical solutions. \n Serve as a security SME within CAB, reviewing significant changes and providing security recommendations and technical critique. \n Evaluate security risks associated with AI technologies, including enterprise AI adoption, applications, data exposure, integrations, and emerging AI threats. \n Evaluate emerging threats and vulnerabilities and determine their relevance to the organization. \n Work effectively with infrastructure, application, cloud, network, manufacturing, and business teams. \n Explain complex security concepts and risks clearly to both highly technical and non-technical audiences. \n Education & Experience \n 10+ years of relevant cybersecurity or security engineering experience. \n Bachelor’s degree in Cybersecurity, Computer Science, Information Technology, or a related field; equivalent relevant experience or industry certifications may also be considered. \n Deep hands-on engineering experience with Microsoft Sentinel. \n Strong hands-on expertise in Microsoft Azure security. \n Strong securi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Coherent Corp.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Security-engineering",
            "Azure-security-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/coherent-corp/jobs/cybersecurity-engineer-bay-area-preferred",
        "logo": "https://cdn-images.himalayas.app/qfxzuljcrk672upttmwc9fwyoaxi",
        "companyLogo": "https://cdn-images.himalayas.app/qfxzuljcrk672upttmwc9fwyoaxi",
        "image": "https://cdn-images.himalayas.app/qfxzuljcrk672upttmwc9fwyoaxi",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-3",
        "title": "Utilization Review RN - Utilization Management FT",
        "title_ar": "Utilization Review RN - Utilization Management FT (أخرى)",
        "company": "Providence",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Utilization Review RN - Remote. This position is Full-time and will work 8-hour, Day shifts. Provide prospective, retrospective, and concurrent utilization reviews for our Southern CA ministries. Conduct clinical reviews and review medical records daily during admission for all payers, as required by the health plans. This role requires a strong clinical background combined with well-developed knowledge and skills in Utilization Management, medical necessity, and patient status determination. The Utilization Management RN must effectively and efficiently manage a diverse workload in a fast-paced, rapidly changing regulatory environment, demonstrating excellent negotiation, communication, problem-solving, and decision-making skills. Providence caregivers are not simply valued – they’re invaluable. Join our team at Providence California Regional Services and thrive in our culture of patient-focused, whole-person care built on understanding, commitment, and mutual respect. Your voice matters here, because we know that to inspire and retain the best people, we must empower them. Required Qualifications: \n Associate's Degree in Nursing. \n Upon hire: California Registered Nurse License. \n 2 years of experience working in a remote UR environment or working as an acute hospital case manager. \n Preferred Qualifications: \n Bachelor's Degree in Nursing. \n Master's Degree in Nursing. \n Experience working with Interqual guidelines. \n Experience in a multi-hospital and/or integrated health",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Providence. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Utilization-management",
            "Case-management",
            "Clinical-review"
        ],
        "applyUrl": "https://himalayas.app/companies/providence/jobs/utilization-review-rn-utilization-management-ft",
        "logo": "https://cdn-images.himalayas.app/yla3e9ulna7kk6duifrtepurkezc",
        "companyLogo": "https://cdn-images.himalayas.app/yla3e9ulna7kk6duifrtepurkezc",
        "image": "https://cdn-images.himalayas.app/yla3e9ulna7kk6duifrtepurkezc",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-4",
        "title": "Contract Modeling Analyst",
        "title_ar": "Contract Modeling Analyst (برمجة وتكنولوجيا)",
        "company": "Nemours",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Nemours is seeking a Contract Modeling Analyst to join our team! This position is remote with occasional travel. Applicants must reside in one of the following states: Alabama, Colorado, Delaware, the District of Columbia, Florida, Georgia, Illinois, Maryland, Missouri, New Jersey, New York, North Carolina, Ohio, Pennsylvania, South Carolina, Tennessee, Texas, and Virginia. Implementation and maintenance of Epic’s Contract Reimbursement system including, but not limited to, Contracts, Networks, Payors, and Plans and all other inter-related Epic masterfiles for both professional practices and the hospitals to ensure proper calculation of accounts receivable. Prepares analysis of current physician and hospital contractual state to support the model of the financial impact of reimbursement methods and contractual rates and language which facilitate the final physician and hospital contractual language and rate agreement during the evolvement of the contract negotiations within the managed care organization. Responsibilities: \n Develop, test, implement and maintain Epic reimbursement contracts including, but not limited to, rate and fee schedule adjustments, addition of CPTs and plan, provider, and component updates to provide for accurate estimation of organization’s accounts receivable in accordance with contract terms. \n Implement and test contract proposals from contract management teams by using EPIC modeling tool while providing executive summary analysis to leadership of f",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Nemours. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Contract-modeling",
            "Contract-analysis",
            "Managed-care-analyst",
            "Epic-systems"
        ],
        "applyUrl": "https://himalayas.app/companies/nemours/jobs/contract-modeling-analyst",
        "logo": "https://cdn-images.himalayas.app/2o90vupq9r3z48q1e65ux0nvyw4w",
        "companyLogo": "https://cdn-images.himalayas.app/2o90vupq9r3z48q1e65ux0nvyw4w",
        "image": "https://cdn-images.himalayas.app/2o90vupq9r3z48q1e65ux0nvyw4w",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-5",
        "title": "Account Manager, Strategic",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Manager, Strategic)",
        "company": "Apryse",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$175,000 - $245,000 USD",
        "description": "The Role: \n We’re growing our enterprise sales team and are looking for a Strategic Account Manager to cultivate and expand relationships with our largest and most complex customers across North America. In this senior role, you will act as a trusted advisor to key accounts, aligning our solutions to their business goals and driving long-term value. \n Your mission will be to deepen executive relationships, identify growth opportunities, and ensure Apryse becomes an indispensable partner for our customers’ digital transformation strategies. By understanding their priorities and challenges, you’ll lead cross-functional teams to deliver innovative solutions that expand adoption, strengthen retention, and create new business opportunities. \n Responsibilities \n Own and grow a portfolio of Apryse ’s largest enterprise customers, ensuring long-term satisfaction and success. \n Develop and execute comprehensive account plans that identify opportunities for expansion, cross-sell, and upsell. \n Build and maintain strong executive relationships across multiple lines of business and technical stakeholders. \n Partner with customer success, solutions engineering, and product teams to ensure customers achieve measurable business outcomes with Apryse . \n Lead strategic business reviews with key accounts, positioning Apryse as a long-term digital transformation partner. \n Anticipate customer needs and proactively identify opportunities to deliver additional value. \n Effectively manage renewal ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Apryse. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Enterprise-sales",
            "B2b-saas-sales",
            "Account-management"
        ],
        "applyUrl": "https://himalayas.app/companies/apryse/jobs/account-manager-strategic-601628511",
        "logo": "https://cdn-images.himalayas.app/9qzcs2rgwefq7vwlr9no0w2qnmq7",
        "companyLogo": "https://cdn-images.himalayas.app/9qzcs2rgwefq7vwlr9no0w2qnmq7",
        "image": "https://cdn-images.himalayas.app/9qzcs2rgwefq7vwlr9no0w2qnmq7",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-6",
        "title": "Customer Success Engineer",
        "title_ar": "مهندس ومطور برمجيات (Customer Success Engineer)",
        "company": "Algolia",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Australia",
        "location_ar": "Australia",
        "salary": "$130,500 - $163,000 AUD",
        "description": "At Algolia , we’re proud to be a pioneer and market leader in AI Search, empowering 18,000+ businesses to deliver blazing-fast, predictive search and browse experiences at internet scale. Every week, we power over 30 billion search requests — four times more than Microsoft Bing, Yahoo, Baidu, Yandex, and DuckDuckGo combined. \n In 2021, we raised $150 million in Series D funding, quadrupling our valuation to $2.25 billion. This strong foundation enables us to keep investing in our market-leading platform and serving incredible customers like Under Armour, PetSmart, Stripe, Gymshark, and Walgreens. \n As a Customer Success Engineer at Algolia , you will play a key role in ensuring our customers adopt, implement, and scale our agentic, generative, search & discovery platform successfully. You’ll partner closely with customers to deliver high-quality technical onboarding, solution design, best-practice guidance, and hands-on implementation support. This role is ideal for someone who is deeply curious, loves solving complex technical problems, and is energized by learning and applying new technologies including modern development patterns, cloud infrastructure, and emerging AI capabilities. You’ll work across a variety of customer architectures and use cases, helping teams design performant, scalable solutions while championing technical excellence. You will also support our Professional and Expert Foundation offerings, acting as a Technical Owner for assigned accounts and ensuring",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Algolia. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Solutions-engineering",
            "Customer-solutions"
        ],
        "applyUrl": "https://himalayas.app/companies/algolia/jobs/customer-success-engineer-190124731",
        "logo": "https://cdn-images.himalayas.app/dip3zbv6tnqmecb3bumby9dbmlmm",
        "companyLogo": "https://cdn-images.himalayas.app/dip3zbv6tnqmecb3bumby9dbmlmm",
        "image": "https://cdn-images.himalayas.app/dip3zbv6tnqmecb3bumby9dbmlmm",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-7",
        "title": "Onboarding Specialist - Fully Remote | Upto $120/hr",
        "title_ar": "Onboarding Specialist - Fully Remote | Upto $120/hr (برمجة وتكنولوجيا)",
        "company": "mercor",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$80 - $120 USD",
        "description": "About the job Mercor connects elite creative and technical talent with leading AI research labs. Headquartered in San Francisco, our investors include Benchmark , General Catalyst , Peter Thiel , Adam D'Angelo , Larry Summers , and Jack Dorsey . Position: Training / onboarding / L&D Evaluator Type: Contract Compensation: $80–$120/hour Location: Remote Role Responsibilities \n Evaluate AI-generated artifacts against domain-specific quality rubrics. \n Identify factual, aesthetic, and presentation errors. \n Provide clear, structured written feedback. \n Collaborate with subject matter experts to ensure consistency and quality. \n Work independently and asynchronously to meet deadlines and improve AI model performance . \n Qualifications Must-Have \n 5+ years of relevant professional experience in Training / onboarding / L&D . \n Native or professional fluency in English . \n Highly proficient in Microsoft Office and Google Workspace, especially Slides . \n Preferred Master's or higher from a reputable institution. Application Process (Takes 20–30 mins to complete) \n Upload resume \n AI interview based on your resume \n Submit form \n Resources & Support \n For details about the interview process and platform information, please check: \n For any help or support, reach out to: \n PS: Our team reviews applications daily. Please complete your AI interview and application steps to be considered for this opportunity. Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة mercor. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Learning-and-development",
            "L&d-evaluator",
            "Onboarding-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/mercor/jobs/onboarding-specialist-fully-remote-upto-120-hr-2963806651",
        "logo": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "companyLogo": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "image": "https://cdn-images.himalayas.app/6jo5q9nua35jgtdfm41nq6b7ocqf",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-8",
        "title": "Program Analyst, Informatics (Mid-Level)",
        "title_ar": "Program Analyst, Informatics (Mid-Level) (برمجة وتكنولوجيا)",
        "company": "Ibility",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Founded in early 2021, Ibility is a Service-Disabled Veteran-Owned Small Business and a Woman-Owned Small Business, headquartered in Gaithersburg, MD. Ibility is a small but mighty company that is positioned for rapid growth. Simply put, we help government leaders to achieve their mission by designing creative products and programs that delight their customers and make their employees more efficient - building trust and improving overall satisfaction. We use human-centered design principles in every engagement because we believe the end-user is critical to the long-term success of any solution. Our team is fun, passionate, bold, and creative. We live our mission every day – to inspire people, create cool stuff, and make a lasting impact on the world! \n Position Overview: \n The Mid-Level Program Analyst, Informatics plans, analyzes, and evaluates the effectiveness of operating programs within a federal health IT environment. This role uses qualitative and quantitative analytical methods to assess program and business process effectiveness, leverages source data to measure and communicate program status, and applies clinical informatics expertise to recommend improvements. The Mid-Level Program Analyst operates within a Veterans Administration healthcare context, supporting program operations and contributing actionable insights to program leadership. \n Please note this position is contingent upon award (July/Aug 2026) \n Key Responsibilities: \n Plan, analyze, and evaluate the e",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ibility. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Program-analysis",
            "Health-informatics",
            "Clinical-informatics",
            "Healthcare-technology"
        ],
        "applyUrl": "https://himalayas.app/companies/ibility/jobs/program-analyst-informatics-mid-level",
        "logo": "https://cdn-images.himalayas.app/9ntvlxg8tejtg9u0fp7qss4vyj9w",
        "companyLogo": "https://cdn-images.himalayas.app/9ntvlxg8tejtg9u0fp7qss4vyj9w",
        "image": "https://cdn-images.himalayas.app/9ntvlxg8tejtg9u0fp7qss4vyj9w",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-9",
        "title": "Senior Product Security Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Product Security Engineer)",
        "company": "Chainguard",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Chainguard is the trusted source for open source. By delivering hardened, secure, and production-ready builds of all the open source software engineers and AI agents rely on, Chainguard helps organizations build faster, stay compliant, and eliminate risk. Our customers include Fortune 500 enterprises and global industry leaders, including Anduril, Canva, Fortinet, Hewlett Packard Enterprise, OpenAI, Snap Inc., and Snowflake. Chainguard is venture-backed by leading investors, including Amplify, IVP, Kleiner Perkins, Lightspeed Venture Partners, Mantis VC, Redpoint Ventures, Sequoia Capital, and Spark Capital. Staff Product Security Engineer The role in a nutshell: You are a deeply technical engineer who gets restless when pipelines aren't locked down. You care about shipping secure software! At Chainguard , you won't be a gate at the end of the process; you'll be embedded in it. This is an individual-contributor Staff role. That means technical leadership, cross-team influence, and owning hard problems. What you’ll do: Build & Harden Secure Pipelines \n Design, build, and maintain secure CI/CD pipelines with security gates that catch issues before they reach production. \n Systematically, consistently and automatically capture the risk exposure of Chainguard s products. \n Implement and enforce software supply chain security controls: signed artifacts, SBOMs, provenance attestation (SLSA, Sigstore / Cosign). \n Proactively identify emerging customer security needs, and build solut",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Chainguard. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-security",
            "Security-engineering",
            "Cloud-security",
            "Devsecops"
        ],
        "applyUrl": "https://himalayas.app/companies/chainguard/jobs/senior-product-security-engineer-6781385679",
        "logo": "https://cdn-images.himalayas.app/cblprjrc2s0jwadb7dv9ncjgll3v",
        "companyLogo": "https://cdn-images.himalayas.app/cblprjrc2s0jwadb7dv9ncjgll3v",
        "image": "https://cdn-images.himalayas.app/cblprjrc2s0jwadb7dv9ncjgll3v",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-10",
        "title": "Senior Clinical Imaging Specialist (Screening)",
        "title_ar": "Senior Clinical Imaging Specialist (Screening) (أخرى)",
        "company": "Capstan Medical",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Reports to: Clinical Manager Workplace Type: Remote \n At Capstan Medical , we’re building one of the most exciting and innovative companies in medtech—developing a first-of-its-kind robotic platform for minimally invasive heart valve treatment. Our team combines surgical robotics, catheter-based delivery, and next-generation implants to transform complex procedures into safer, lower-stress solutions for patients and clinicians alike. As a highly collaborative, hands-on team, we move fast, wear multiple hats, and believe the best ideas can come from anyone. \n Based in Santa Cruz, our unique workspace blends cutting-edge Bay Area innovation with a lifestyle-driven environment near trails, beaches, and open space—creating the perfect place to do meaningful, career-defining work. \n Description: As a Senior Clinical Imaging Specialist, you will work internally with cross-functional teams as well as externally with clinical partners to support clinical activities Capstan Medical products. The role is fast-paced and evolving, requiring excellent organizational and project management skills. This is a remote role with the ability to travel to headquarters for training and collaboration. Details: \n Perform measurements and analysis using CT, TEE/TTE, and clinical history to support screening activities \n Build and maintain infrastructure for processing clinical imaging, inputting data, and analyzing clinical imaging \n Work with cross functional teams on modeling anatomies to support t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Capstan Medical. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Medical-imaging",
            "Clinical-research",
            "Healthcare-technology"
        ],
        "applyUrl": "https://himalayas.app/companies/capstan-medical/jobs/senior-clinical-imaging-specialist-screening",
        "logo": "https://cdn-images.himalayas.app/qxie2x4yogibmuwpy1dki1fndbl1",
        "companyLogo": "https://cdn-images.himalayas.app/qxie2x4yogibmuwpy1dki1fndbl1",
        "image": "https://cdn-images.himalayas.app/qxie2x4yogibmuwpy1dki1fndbl1",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-11",
        "title": "SMB Sales Representative",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (SMB Sales Representative)",
        "company": "Sigma Squared",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "We are looking for an energetic and goal-oriented SMB (Small & Medium Business) Sales Representative to join our team. This role focuses on acquiring and growing accounts within the SMB segment, helping business owners and operators access solutions that drive their success. The ideal candidate is a strong communicator, thrives in fast-paced environments, and has a proven ability to meet and exceed sales targets. Key Responsibilities \n Prospect, qualify, and close new business opportunities with small and medium-sized companies. \n Manage a high-volume pipeline and consistently achieve or exceed monthly/quarterly sales quotas. \n Conduct discovery calls and product demonstrations tailored to SMB customer needs. \n Build long-term relationships with business owners, decision-makers, and stakeholders. \n Partner with marketing and customer success teams to ensure seamless onboarding and retention. \n Maintain accurate activity records and pipeline forecasts in CRM systems. \n Stay informed about industry trends, competitor offerings, and SMB market challenges. \n Qualifications \n 2–4 years of experience in B2B sales, preferably within the SMB segment. \n Demonstrated track record of achieving or surpassing quota. \n Strong communication, presentation, and negotiation skills. \n Ability to manage multiple accounts and prioritize effectively in a fast-paced environment. \n Comfortable with high outbound activity (calls, emails, demos). \n Proficiency with CRM and sales enablement tools (e.g.",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sigma Squared. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Smb-sales",
            "B2b-sales",
            "Sales",
            "Business-development"
        ],
        "applyUrl": "https://himalayas.app/companies/sigma-squared/jobs/smb-sales-representative",
        "logo": "https://cdn-images.himalayas.app/v1nsf49u7v4o2xk5b87axwttvne5",
        "companyLogo": "https://cdn-images.himalayas.app/v1nsf49u7v4o2xk5b87axwttvne5",
        "image": "https://cdn-images.himalayas.app/v1nsf49u7v4o2xk5b87axwttvne5",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-12",
        "title": "Director, Business development Dermatology & Rheumatology, CRO, Romania",
        "title_ar": "Director, Business development Dermatology & Rheumatology, CRO, Romania (المبيعات والنمو)",
        "company": "Indero",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "gcc",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Romania",
        "location_ar": "السعودية والخليج العربي",
        "salary": "Competitive",
        "description": "Description The Director, Business development will help facilitate the sales and marketing activities for the CRO Business Unit, including managing key accounts, soliciting new business, and being a brand ambassador for Indero at industry conferences and other events. Reporting to the VP, Business Development, the individual will collaborate with the Sr. management team to define and develop future strategies for revenue growth, and execute the agreed upon annual sales plan. Initially, this individual will be responsible for sales activities across Europe and the Middle East. More specifically, the Director, Business Development: \n Meets or exceeds revenue growth goals for the sales territories and company. \n Provides information such as sales forecasts and manage sales activity plans in their respective territories. \n Promotes corporate mission, vision and objectives and fosters a culture of professionalism, quality, excellence, and team work. \n Effectively communicates the company’s value proposition and service portfolio to medical key opinion leaders, and prospective medical device, pharmaceutical, and biotech companies. \n Reviews and provides input on new project proposals and budgets issued by the proposal manager for their opportunities. \n Helps to identify and develop new service offerings, new technologies and novel models to diversify Indero ’s service portfolio. \n Assists in the development and assessment of new and existing business and sales strategies for the c",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Indero. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cro-business-development",
            "Sales-director"
        ],
        "applyUrl": "https://himalayas.app/companies/indero/jobs/director-business-development-dermatology-rheumatology-cro-romania",
        "logo": "https://logo.clearbit.com/indero.com",
        "companyLogo": "https://logo.clearbit.com/indero.com",
        "image": "https://logo.clearbit.com/indero.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-13",
        "title": "Content Marketing Specialist (Freelance)",
        "title_ar": "أخصائي تسويق ونمو (Content Marketing Specialist (Freelance))",
        "company": "Grizzle",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$55 - $65 USD",
        "description": "Grizzle is a content marketing and SEO agency that helps B2B and SaaS companies create and distribute value-driven content. Clients include Semrush, Pipedrive, Nextiva, ConnectWise, and PandaDoc. Our goal is to help them surpass their acquisition, growth, and revenue goals using a proven methodology. About the job We’re looking for a freelance content marketing specialist to support the content engines and strategic initiatives we set up for our clients. You’ll be tasked with reviewing content briefs and drafts at a strategic level, ensuring content aligns with the channels they’re built for, analyzing content refresh projects, conducting deep domain research and SME interviews, and much more. We’re big proponents of utilizing AI across the entire organic growth journey. You’ll be using the systems we’ve built over a period of years, and are encouraged to bring your own workflows and skills to the table. What you’ll be doing: \n Collaborating with strategists and editors: Develop an understanding of our client’s audience, product, and goals. Conducting research and topic ideation to fuel content strategies. \n Conducting deep industry research: Running audience research and trend analysis to get a macro overview of our client’s market. You’ll become a “pseudo-SME” in a variety of industries and products. \n Build and optimize content engineering and AI workflows: Work with AI workflows and platforms like Claude Code and AirOps. We take a consistent, iterative approach to process",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Grizzle. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Content-marketing",
            "Seo",
            "Freelance-marketing",
            "B2b-marketing"
        ],
        "applyUrl": "https://himalayas.app/companies/grizzle/jobs/content-marketing-specialist-freelance-1624864662",
        "logo": "https://logo.clearbit.com/grizzle.com",
        "companyLogo": "https://logo.clearbit.com/grizzle.com",
        "image": "https://logo.clearbit.com/grizzle.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-14",
        "title": "Oracle Software Developer",
        "title_ar": "مهندس ومطور برمجيات (Oracle Software Developer)",
        "company": "ManTech",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$89,100 - $148,200 USD",
        "description": "Elevate your career with MANTECH International Corporation! Join a dynamic team dedicated to national security through cutting-edge technology. Since 1968, MANTECH has led in delivering advanced solutions to government intelligence, the Department of Defense, and Federal Civilian sectors. Dive into innovation in Digital Transformation, Cybersecurity, IT, Data Analytics and Software Development. Your journey to impactful work and rapid growth starts now—be extraordinary at MANTECH! \n ManTech seeks a motivated, career and customer-oriented Oracle Software Developer to join our team. This is a remote position. Responsibilities include but are not limited to: \n Perform high-level engineering tasks including system architecture, detailed design, and complex testing for product development and service areas. \n Plan and conduct research and development projects. Lead functional teams, providing guidance to technical staff and ensuring conformance to design specifications. \n Identify innovative solutions to complex technical challenges by taking a broad, multi-disciplinary perspective. \n Interpret internal/external business issues to recommend best practices. Anticipate potential objections from stakeholders and influence others to adopt new viewpoints or technical directions. \n Analyze existing products and processes to recommend enhancements that improve performance, reliability, and cost-efficiency. \n Uses software development technologies and tools to build, test, and maintain pr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة ManTech. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Oracle-developer",
            "Oracle-pl-sql-developer",
            "Software-development"
        ],
        "applyUrl": "https://himalayas.app/companies/mantech/jobs/oracle-software-developer-4097269499",
        "logo": "https://cdn-images.himalayas.app/zuod09yxhujz3oaauly9smytsdz1",
        "companyLogo": "https://cdn-images.himalayas.app/zuod09yxhujz3oaauly9smytsdz1",
        "image": "https://cdn-images.himalayas.app/zuod09yxhujz3oaauly9smytsdz1",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-15",
        "title": "Managing Director at DPO-ONE (Management Buy-In)",
        "title_ar": "Managing Director at DPO-ONE (Management Buy-In) (أخرى)",
        "company": "Penguin Formula",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Switzerland",
        "location_ar": "Switzerland",
        "salary": "Competitive",
        "description": "We are looking for a Managing Director with a strong entrepreneurial vision to lead DPO-ONE through its next phase of growth. You will take overall responsibility for an innovative SaaS company with significant international growth potential. Your focus will be on leading the organization from the startup phase into a scale-up, with particular emphasis on accelerating sales growth, strengthening market positioning, and driving further product development. This is more than a traditional executive position. It is a Management Buy-In opportunity , enabling the successful Managing Director to invest in the business, become a co-owner, and directly participate in the long-term value created through the company’s growth. Your Responsibilities Strategic Growth \n Develop and implement an ambitious growth strategy to position DPO-ONE globally as a leading privacy compliance solution. \n Take overall responsibility for translating the company’s vision into sustainable commercial growth. \n Sales & Marketing \n Lead efforts to enter new markets, acquire customers, and deepen existing relationships. \n Provide direction to the sales and marketing teams. \n Drive commercial performance and create scalable routes to market. \n Product Development Drive innovation and work closely with the development team to continuously improve and adapt the SaaS solution to global market needs. International Leadership \n Expand DPO-ONE internationally and develop partnerships across different markets and sect",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Penguin Formula. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Managing-director",
            "Executive-leadership",
            "Business-development",
            "Saas-leadership"
        ],
        "applyUrl": "https://himalayas.app/companies/penguin-formula/jobs/managing-director-at-dpo-one-management-buy-in",
        "logo": "https://cdn-images.himalayas.app/lt4zgwmktitjm2c8ac0scz62thog",
        "companyLogo": "https://cdn-images.himalayas.app/lt4zgwmktitjm2c8ac0scz62thog",
        "image": "https://cdn-images.himalayas.app/lt4zgwmktitjm2c8ac0scz62thog",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-16",
        "title": "Data Scientist",
        "title_ar": "Data Scientist (برمجة وتكنولوجيا)",
        "company": "Visuary",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "France",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "MISSION: - Implement a machine learning algorithm that creates floorplan layouts automatically inside a given shape. There has been some research around this topic and there is existing literature. YOUR COMPETENCES: - math (geometry and numerical analysis) - machine learning \n computational complexity theory \n - python / pytorch / sklearn YOUR RESPONSIBILITIES: - participating in the creation of a tool that changes the way we build new flats - creating research road maps with budgeting - staying up to date with state of the art machine learning technology - conducting research that will lead to improvement of algorithms currently being used - develop quantitative benchmarks that will help evaluate quality of algorithms - proactively seek opportunities to improve various aspects of our business by applying scientific approach QUALIFICATIONS: You need to have a Masters from an outsdanding university or a PhD to apply to this position. HOW TO APPLY: Please explain in a few sentences how you intend to implement the algorithm. We are a startup with ambition, and therefore flexible on working conditions but demanding on the quality of work. Daily meetings at 10AM UTC. There will be technical tests. VISUARY (visuary.com) is a Paris based start-up aiming to make the construction and personalization of new homes accessible and easier. For this, we are developing a platform that allows buyers to view and personalize their accommodation online and provides insights to the constructors. ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Visuary. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-science",
            "Machine-learning",
            "Ai-research",
            "Algorithm-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/visuary/jobs/data-scientist-5935190733",
        "logo": "https://cdn-images.himalayas.app/zethrg57yl9vcwfon9t2fuoitvro",
        "companyLogo": "https://cdn-images.himalayas.app/zethrg57yl9vcwfon9t2fuoitvro",
        "image": "https://cdn-images.himalayas.app/zethrg57yl9vcwfon9t2fuoitvro",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505640-17",
        "title": "Backend Developer - Remote",
        "title_ar": "مهندس ومطور برمجيات (Backend Developer - Remote)",
        "company": "Termgrid Inc.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "Termgrid is rewriting the rules of private capital markets. We built the category-defining operating system for deal professionals — the platform where the world's most sophisticated private equity sponsors , lenders , and advisors manage every stage of their financing workflows. \n Founded in 2019 by Dipish Rai ( Harvard MBA, IIT , Columbia ; ex- Providence Equity ) and Vishal Singh (Columbia MS CS; ex- CTO Link3D, acquired by Nasdaq: MTLS), Termgrid has achieved what few fintech companies dream of: 4 of the top 5 global private equity firms trust us as their core technology partner. 1600+ institutions. 30,000+ professionals. We've been named New Solution Provider of the Year at the PE Wire US Awards 2024 , Secure Workflow Management Provider of the Year at the PE Wire US Awards 2025 , and shortlisted for the PE Wire EU Awards 2026 and The Drawdown Awards 2025 . This isn't a company finding its footing — this is a rocket that has already cleared the launchpad . The $1.7 trillion private credit market is growing at breakneck speed . Every billion-dollar deal , every GP-LP relationship , every leveraged buyout in the pipeline is moving through workflows that were built for a different era. Termgrid is the platform that changes all of that — and we're just getting started . What You’ll Do \n Design, develop, and own microservice-based backend applications using Java and Spring Boot. \n Build APIs and platforms that serve multiple financial workflows and transaction types, ensuring",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Termgrid Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Backend-development",
            "Software-engineer",
            "Java-development",
            "Backend-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/termgrid-inc/jobs/backend-developer-remote",
        "logo": "https://cdn-images.himalayas.app/g877c0lpqvff0qi8gd9f608nkv8o",
        "companyLogo": "https://cdn-images.himalayas.app/g877c0lpqvff0qi8gd9f608nkv8o",
        "image": "https://cdn-images.himalayas.app/g877c0lpqvff0qi8gd9f608nkv8o",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505641-18",
        "title": "GTM Enablement & Training Lead",
        "title_ar": "مدير وقائد فريق (GTM Enablement & Training Lead)",
        "company": "Doxel",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$170,000 - $220,000 USD",
        "description": "Construction is the second-largest industry in the world—nearly 4x the size of SaaS—yet it still operates without the automated feedback loops that modern software teams rely on. Without real-time observability, issues are detected too late, contributing to over $3 Trillion in annual global waste. \n Doxel brings computer vision and AI to construction, giving teams real-time visibility into progress, risk, and execution. From hospitals to data centers, and from field leaders to executive teams, Doxel is used every day to support better decisions and faster delivery. Our platform is trusted by industry leaders including Shell, Genentech, HCA Healthcare, Kaiser, Turner, and Layton. \n Doxel ’s automated progress tracking solution keeps teams aligned with hard facts that leave no ambiguity on where the project is today, where it will be tomorrow and what decisions need to be made to land it on schedule and on budget. This enables our customers to deliver projects, on average, 11% ahead of schedule with up to 16% savings on monthly cash flow. Backed by Insight Partners and Andreessen Horowitz and with a rapidly growing team of engineers, scientists, construction veterans, and Enterprise go-to-market teams, we're driven to help our customers win. Join us as we continue our journey to transform the $15T Construction Industry! The Role We are hiring our first dedicated Sales Enablement & Training Manager. This is not a content-management or LMS-administration role; it is fundamentally",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Doxel. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales-enablement",
            "Sales-training",
            "Revenue-enablement",
            "Gtm-enablement"
        ],
        "applyUrl": "https://himalayas.app/companies/doxel/jobs/gtm-enablement-training-lead-7143040570",
        "logo": "https://cdn-images.himalayas.app/1lldr9tf42qe72csqbac2c8brpdu",
        "companyLogo": "https://cdn-images.himalayas.app/1lldr9tf42qe72csqbac2c8brpdu",
        "image": "https://cdn-images.himalayas.app/1lldr9tf42qe72csqbac2c8brpdu",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505641-19",
        "title": "Data Analytics Manager (POD SPOC)",
        "title_ar": "مدير وقائد فريق (Data Analytics Manager (POD SPOC))",
        "company": "EXL",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$93,900 - $154,200 USD",
        "description": "EXL is considered the Special Investigation Unit by 6 of the top 10 US health insurance companies (~1/3rd of US healthcare data is handled by us), helping with error/overpayment detection of hospital/doctor claims. Unlike typical services and consulting companies, we make our revenue from the savings we identify for the client (Commission/Outcome basis). We productize algorithms and R&D accelerators that are intended to be used across multiple health insurance clients for the above business case. The POD SPOC is accountable for end-to-end analytics project delivery for an assigned client POD. This is a hands-on delivery role that converts client and program priorities into executable analytics workplans, manages project cadence across teams, governs POD and program health through KPIs, and ensures the analytics portfolio contributes to monthly, quarterly, and annual revenue goals. *Base Pay Range: 93,900 - 154,200 For more information on benefits and what we offer please visit us at Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة EXL. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-analytics-manager",
            "Healthcare-analytics",
            "Pod-management"
        ],
        "applyUrl": "https://himalayas.app/companies/exl/jobs/data-analytics-manager-pod-spoc",
        "logo": "https://cdn-images.himalayas.app/tfyfvp8ys4nkpwh5mhr2w6xcigas",
        "companyLogo": "https://cdn-images.himalayas.app/tfyfvp8ys4nkpwh5mhr2w6xcigas",
        "image": "https://cdn-images.himalayas.app/tfyfvp8ys4nkpwh5mhr2w6xcigas",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505641-20",
        "title": "Product Manager (AI & Blockchain)",
        "title_ar": "مدير وقائد فريق (Product Manager (AI & Blockchain))",
        "company": "Airtm",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina",
        "location_ar": "Argentina",
        "salary": "Competitive",
        "description": "About us: \n Airtm is a financial-infrastructure company building the future of the online-work economy. We are on a mission to empower the world's growing number of Digital Entrepreneurs in the Global South, giving them the financial freedom to thrive. \n The problem is clear: in emerging markets, accessing the dollar economy is difficult. Cross-border payments are slow, expensive, and often lose value to inflation. This limits the potential of millions of talented individuals. \n Airtm ’s solution is a swift and comprehensive financial platform that facilitates low-value cross-border payments and local cash-outs. As pioneers in stablecoin-payment infrastructure, Airtm has built the most advanced cross-border payment system available on the market. \n As a company married to the world of online work, Airtm will go beyond payments to build the necessary infrastructure the online-work economy needs to thrive. We are fostering an entirely new economy, giving individuals, communities, and countries the tools to take control of their financial destinies. \n About the role: This is a high-impact role for someone who can connect vision with execution. You'll shape the roadmap, align cross-functional teams, and build scalable solutions involving blockchain products, leveraging AI to solve critical needs for our users and move faster than the competition. Key Responsibilities \n Define a long-term product vision aligned with Airtm ’s mission and goals. \n Conduct structured customer and mar",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Airtm. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-management",
            "Product-manager",
            "Fintech-product-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/airtm/jobs/product-manager-ai-blockchain-195371039",
        "logo": "https://cdn-images.himalayas.app/ouvlzxf1xmuy9uo4uyxoytr2l6oo",
        "companyLogo": "https://cdn-images.himalayas.app/ouvlzxf1xmuy9uo4uyxoytr2l6oo",
        "image": "https://cdn-images.himalayas.app/ouvlzxf1xmuy9uo4uyxoytr2l6oo",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789505641-21",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-22",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-23",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-24",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-25",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-26",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-27",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-28",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-29",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-30",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-31",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-32",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-33",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-34",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-35",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789505641-36",
        "title": "Partnership Manager",
        "title_ar": "مدير وقائد فريق (Partnership Manager)",
        "company": "GeneralMind",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "professional / experienced",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "GeneralMind builds AI Systems of Action for complex enterprise workflows. We deploy AI employees that automate messy operational handovers across supply chains: processing orders, validating invoices, coordinating suppliers, and handling exceptions directly on top of enterprise systems like SAP or Oracle. \n Our platform combines AI agents, operational context graphs, and real transaction data to achieve Autopilot-grade automation in real operational environments. We work closely with leading global companies across manufacturing, retail, and logistics to deploy AI into mission-critical workflows. \n Tasks \n Win enterprise customers through partners. Work with our partners to open doors to large accounts and convert them into customers together. \n Own partner relationships from start to finish. Be the trusted contact for our partners, understand their goals, and build the trust that turns into joint deals. \n Build solutions with partners. Turn messy operational challenges into clear, well-scoped solutions on top of systems like SAP, Oracle, JDE, and Dynamics, matching what our platform can do with what the end customer needs. \n Drive adoption and growth. Guide joint customers from first deployment to scaling AI across more workflows, and keep finding new ways to grow the business with each partner. \n Work with senior stakeholders. Partner with operational leaders, IT, and executives on both sides to build buy-in and navigate complex decisions with many people involved. \n Own th",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GeneralMind. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/generalmind/partnership-manager-berlin-75229",
        "logo": "https://logo.clearbit.com/generalmind.com",
        "companyLogo": "https://logo.clearbit.com/generalmind.com",
        "image": "https://logo.clearbit.com/generalmind.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-37",
        "title": "Leiter Produktionscontrolling (a) | 100% | Raum: Bodenseeregion, AU",
        "title_ar": "Leiter Produktionscontrolling (a) | 100% | Raum: Bodenseeregion, AU (أخرى)",
        "company": "CONCAPE",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Kempten",
        "location_ar": "Kempten",
        "salary": "Competitive",
        "description": "Du willst Controlling nicht verwalten, sondern gestalten? In dieser Rolle verantwortest du das Produktionscontrolling eines mittelständischen Fertigungsunternehmens, führst ein kleines Team und bist zugleich die controllingseitige Klammer für die Tochtergesellschaften. \n Aufgaben \n Deine Aufgaben \n Du durchleuchtest Fertigungskosten und -abläufe, entwickelst die relevanten Kennzahlen weiter und leitest daraus konkrete Handlungsempfehlungen ab – inklusive Verantwortung für die tages- und chargenbezogene Produktionsabrechnung \n Du steuerst die Kosten- und Leistungsrechnung, verantwortest die Kalkulation der Herstellkosten und schaffst über Plan-Ist-Vergleiche und Abweichungsanalysen Transparenz \n Du betreust die ausländischen Gesellschaften controllingseitig: Ergebnisse plausibilisieren, Kennzahlen und Massnahmen nachhalten, Controlling-Standards gruppenweit angleichen \n Du erstellst und kommentierst das Monatsreporting und wirkst aktiv an Budgetplanung und Forecasts mit \n Du schärfst Methoden und Abläufe, unterstützt bei Audits und ERP-Projekten und arbeitest eng mit Fertigung, Beschaffung, Vertrieb, Finance und den Auslandsstandorten zusammen \n Du führst das Team, setzt klare Prioritäten – und packst im Tagesgeschäft selbst mit an \n Qualifikation \n Dein Profil \n Abgeschlossenes Studium oder eine vergleichbare höhere fachliche Qualifikation, dazu mindestens fünf Jahre Erfahrung im Controlling \n Belastbare Praxis im Produktionscontrolling und in der Kostenrechnung, idealerweise",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CONCAPE. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Controlling"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/concape/leiter-produktionscontrolling-a-100-raum-bodenseeregion-au-kempten-196867",
        "logo": "https://logo.clearbit.com/concape.com",
        "companyLogo": "https://logo.clearbit.com/concape.com",
        "image": "https://logo.clearbit.com/concape.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-38",
        "title": "Senior Backend Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Backend Engineer)",
        "company": "GeneralMind",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "GeneralMind is a Berlin-based AI startup building an autonomous AI-powered supply chain automation platform. Backed by Lakestar, Leo Capital, and leading angels with $12M raised in January 2026, we're eliminating manual, inbox-driven workflows in enterprise supply-chain operations - automating Sales Order processing, Purchase Order lifecycle management, Accounts Payable, and Accounts Receivable. We integrate with SAP, Oracle, Microsoft Dynamics, and Salesforce, serving companies like a $16B food retailer and an $8.2B resources company. \n Tasks \n Backend Ownership \n Own the backend end-to-end: service architecture, API design, reliability posture, and long-term technical direction. \n Be the person who knows how everything fits together - and who other engineers come to when they're not sure where something belongs. \n Set the bar on code quality, service boundaries, and shared abstractions across the engineering team. \n Make foundational decisions with conviction, document the reasoning, and evolve them as the system grows. \n Python Services & Production Systems \n Design for failure: retries, timeouts, graceful degradation, and recovery paths built in from the start. \n Write code that is easy to operate - observable, testable, and straightforward to debug at 2am. \n Understand the runtime, not just the framework. Know when the problem is the code, the config, or the infrastructure. \n Workflow Engineering & Temporal \n Design and build durable workflows using Temporal - long-runni",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GeneralMind. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/generalmind/senior-backend-engineer-berlin-230943",
        "logo": "https://logo.clearbit.com/generalmind.com",
        "companyLogo": "https://logo.clearbit.com/generalmind.com",
        "image": "https://logo.clearbit.com/generalmind.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-39",
        "title": "ERP Integration Expert",
        "title_ar": "ERP Integration Expert (برمجة وتكنولوجيا)",
        "company": "GeneralMind",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "professional / experienced",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "GeneralMind builds AI Systems of Action for complex enterprise workflows. We deploy AI employees that automate messy operational handovers across supply chains processing orders, validating invoices, coordinating suppliers, and handling exceptions directly on top of enterprise systems like SAP or Oracle. Our platform combines AI agents, operational context graphs, and real transaction data to achieve Autopilot-grade automation in real operational environments. We work closely with leading global companies across manufacturing, retail, and logistics to deploy AI into mission-critical workflows. \n Tasks \n Own the integration architecture for new customers end to end: assess their ERP landscape, choose the right interface pattern (OData, RFC/BAPI, IDoc/EDI, CPI/BTP, staging tables, file-based), and design something their IT will approve and operate. \n Lead technical discovery with customer IT, basis, and process teams, and surface the blocking constraint in week one, not week nine. \n Own the data and field mapping from the customer's order, item, partner, and pricing structures onto our internal model, including the custom fields that carry the real business logic. \n Design and build our ERP connectors in Python (S/4HANA and ECC, Oracle, Microsoft Dynamics, Salesforce) and turn per-customer work into reusable abstractions, so the tenth connector costs a fraction of the first. \n Build durable, long-running integration workflows with safe write-back into customer systems of record",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GeneralMind. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/generalmind/erp-integration-expert-berlin-122100",
        "logo": "https://logo.clearbit.com/generalmind.com",
        "companyLogo": "https://logo.clearbit.com/generalmind.com",
        "image": "https://logo.clearbit.com/generalmind.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-40",
        "title": "Stellvertreter Leitung Qualität (Aerospace / Defense) (a) | Region: Deutschland, Grossraum Stuttgart",
        "title_ar": "Stellvertreter Leitung Qualität (Aerospace / Defense) (a) | Region: Deutschland, Grossraum Stuttgart (برمجة وتكنولوجيا)",
        "company": "CONCAPE",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Augsburg",
        "location_ar": "Augsburg",
        "salary": "Competitive",
        "description": "Warum diese Stelle besonders ist \n Diese Rolle geht über klassisches Qualitätsmanagement hinaus: sie verbindet operative Umsetzung mit strategischer Verantwortung im regulierten Luftfahrtumfeld. Mit direktem Einfluss auf sicherheitskritische Produkte und der Perspektive zur stellvertretenden Leitung bietet sie echten Gestaltungsspielraum statt reiner Administration. \n Ein perfekte Einstiegsposition in die Führung, kleines Team und eine neugeschaffene Position. \n Aufgaben \n Verantwortung für die Weiterentwicklung und Umsetzung von Qualitätsstandards nach internationalen Normen (EN 9100, ISO 9001, EASA Part 21G/145). \n Stellvertretende Leitung des Qualitätsmanagements und Koordination von Audits, inklusive Nachverfolgung von Maßnahmen. (Teamgrösse die geführt wird, 2 Personen) \n Optimierung der Prozesslandschaft, Sicherstellung der Aktualität und Effizienz qualitätsrelevanter Abläufe. \n Begleitung von Entwicklungs- und Änderungsprojekten in enger Zusammenarbeit mit technischen Teams. \n Schnittstellenmanagement mit Behörden, Kunden und Konzernpartnern bei Audits und Qualitätsfragen. \n Initiieren neuer Qualitätsthemen und kontinuierliche Verbesserung bestehender Prozesse. \n Qualifikation \n Technisches Studium oder vergleichbare Qualifikation mit relevanter Berufserfahrung im Qualitätsmanagement. \n Erfahrung im Umgang mit internationalen Qualitätsnormen und Regularien, vorzugsweise aus Luftfahrt oder High-Tech-Industrie. \n Auditorenkenntnisse vorhanden oder Bereitschaft zur Qualif",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CONCAPE. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/concape/stellvertreter-leitung-qualitat-aerospace-defense-a-region-deutschland-grossraum-stuttgart-augsburg-383129",
        "logo": "https://logo.clearbit.com/concape.com",
        "companyLogo": "https://logo.clearbit.com/concape.com",
        "image": "https://logo.clearbit.com/concape.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-41",
        "title": "Werkstudent (m/w/d) Projektmanager:in",
        "title_ar": "مدير وقائد فريق (Werkstudent (m/w/d) Projektmanager:in)",
        "company": "HTM Hydro Technology Motors GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Working student, hilfstätigkeit / student",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Mommenheim",
        "location_ar": "Mommenheim",
        "salary": "Competitive",
        "description": "Die HTM Hydro Technology Motors GmbH entwickelt wasserstoffbetriebene Generatoren. \n Zur Software- und Schnittstellenentwicklung arbeiten wir eng mit einem internationalen Entwicklungsteam zusammen. Für die Koordination dieser Projekte suchen wir Unterstützung. \n Aufgaben \n Anforderungsaufnahme: Du nimmst an Kundenterminen teil, erfasst fachliche Anforderungen und überführst sie in nachvollziehbare Spezifikationen. \n Konzeption in Figma: Du erstellst Wireframes und klickbare Prototypen für Bedienoberflächen, Service-Tools und Kundenportale. \n Abstimmung mit dem Entwicklungsteam: Du briefst das Team, stehst für Rückfragen zur Verfügung und stellst sicher, dass Umsetzung und Anforderung zusammenpassen. \n Projektkoordination: Du behältst Aufgabenstände, offene Punkte und Termine im Blick und berichtest direkt an die Geschäftsführung. \n Qualifikation \n Laufendes Studium, beispielsweise in Wirtschaftsingenieurwesen, Informatik, Wirtschaftsinformatik, Design oder einem vergleichbaren Fach \n Ausgeprägtes Kommunikationsvermögen – die Fähigkeit, komplexe Sachverhalte verständlich zu vermitteln, ist für diese Rolle zentral \n Erste Erfahrung mit Figma oder vergleichbaren Tools von Vorteil; Einarbeitung ist ausdrücklich möglich \n Sehr gute Deutsch- und gute Englischkenntnisse \n Strukturierte, eigenverantwortliche Arbeitsweise \n Benefits \n Einschlägige Berufserfahrung setzen wir nicht voraus. Wir legen mehr Wert auf Sorgfalt, Interesse und die Bereitschaft, sich in neue Themen einzuarbeit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة HTM Hydro Technology Motors GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/htm-hydro-technology-motors-gmbh/werkstudent-projektmanagerin-mommenheim-19575",
        "logo": "https://logo.clearbit.com/htmhydrotechnologymotorsgmbh.com",
        "companyLogo": "https://logo.clearbit.com/htmhydrotechnologymotorsgmbh.com",
        "image": "https://logo.clearbit.com/htmhydrotechnologymotorsgmbh.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-42",
        "title": "Junior/ Professional Controller (E-Commerce) (m/w/d) Standort: Hamburg | Flexible Remote-Option",
        "title_ar": "Junior/ Professional Controller (E-Commerce) (m/w/d) Standort: Hamburg | Flexible Remote-Option (مالية ومحاسبة)",
        "company": "Nordmut GmbH",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Moin, wir sind Nordmut – die Outdoor Brand mit Herz und Vision. \n Wir entwickeln hochwertiges Outdoor-Equipment für Abenteurer, Camper und Freiheitsliebende. Du hast Bock auf Zahlen, behältst auch bei Wachstum den Überblick und möchtest mit smartem Controlling echte unternehmerische Entscheidungen mitgestalten? Wir nämlich auch! \n Unser Ziel: bis 2030 die führende deutsche Outdoor D2C-Marke zu werden – mit einem skalierbaren, internationalen Geschäftsmodell. Dafür brauchen wir nicht nur starke Produkte und eine klare Vision, sondern auch ein Finance-Team, das unsere Zahlen versteht, Transparenz schafft und unser Wachstum aktiv mitsteuert. \n Wir sind ein junges, ambitioniertes Team aus dem Herzen Hamburgs, das seine Mission lebt: Wir inspirieren Menschen, durch die Natur zu sich selbst zu finden und mit hochwertiger Ausrüstung, starker Gemeinschaft und unvergesslichen Abenteuern über sich hinauszuwachsen. \n Und dafür brauchen wir dich. \n Aufgaben \n Dein Verantwortungsbereich \n · Controlling & Reporting: Du unterstützt beim Aufbau und der Weiterentwicklung unserer regelmäßigen Finance-Reports und sorgst dafür, dass wir unsere wichtigsten Kennzahlen jederzeit im Blick haben. \n · Planung & Forecasting: Du wirkst bei Budgetplanung, Forecasts und Liquiditätsplanung mit und hilfst uns dabei, die finanzielle Entwicklung von Nordmut vorausschauend zu steuern. \n · Performance-Analysen: Du analysierst Umsatz, Kosten, Margen und Profitabilität und identifizierst Chancen sowie Abweichunge",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Nordmut GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/nordmut-gmbh/junior-professional-controller-e-commerce-standort-hamburg-flexible-remote-option-275353",
        "logo": "https://logo.clearbit.com/nordmutgmbh.com",
        "companyLogo": "https://logo.clearbit.com/nordmutgmbh.com",
        "image": "https://logo.clearbit.com/nordmutgmbh.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-43",
        "title": "Kundenbetreuer/in - Quereinsteiger mit Kundenerfahrung willkommen (m/w/d)",
        "title_ar": "Kundenbetreuer/in - Quereinsteiger mit Kundenerfahrung willkommen (m/w/d) (تسويق ومبيعات)",
        "company": "echte media GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Lauingen",
        "location_ar": "Lauingen",
        "salary": "Competitive",
        "description": "Die echte media GmbH, gegründet von Marc Meyer, ist eine stark wachsende, komplett digitalisierte Online-Marketingagentur. Wir unterstützen bereits seit 6 Jahren mittelständische Unternehmen zwischen 10 und 250 Mitarbeitern dabei, die besten Mitarbeiter und Aufträge zu generieren. Jeder Kunde wird von unserem Team mit Leidenschaft und Hingabe betreut. \n ‍ \n Kundenbetreuer/in (m/w/d) bei echte media in 89415 Lauingen. Wenn Du gerne mit Menschen arbeitest und offen bist, Neues zu lernen, hast Du die besten Voraussetzungen als Kundenbetreuer bei echte media Dein Potenzial zu entfalten. \n Aufgaben \n Onboardings und wöchentliche Abstimmungsmeetings mit Kunden per Videokonferenz \n Unterstützung bei der Lösung von Problemen und bei technischen Fragen \n Aufbau und Pflege langfristiger Kundenbeziehungen \n Identifikation der Bedürfnisse und Anforderungen der Kunden \n Zusammenarbeit mit anderen Abteilungen wie Marketing und Vertrieb \n Qualifikation \n Du lässt Dich auf andere ein und hörst zu \n Du hast eine offene Art und bist kommunikativ \n Du besitzt die Fähigkeit, bestehenden Prozessen zu folgen \n Du hast eine sehr saubere und strukturierte Arbeitsweise \n Du bleibst bei einem getakteten Kalender ruhig und gelassen \n Benefits \n Strukturierte Einarbeitung mit Schulungsvideos und festem Ansprechpartner. Die Einarbeitung erfordert auch eine gewisses Maß an Selbstständigkeit \n Bei uns hast Du Kontinuität und die Möglichkeit, Dich weiterzuentwickeln. Das bedeutet ein festes und regelmäßiges",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة echte media GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/echte-media-gmbh/kundenbetreuer-in-quereinsteiger-mit-kundenerfahrung-willkommen-lauingen-231330",
        "logo": "https://logo.clearbit.com/echtemediagmbh.com",
        "companyLogo": "https://logo.clearbit.com/echtemediagmbh.com",
        "image": "https://logo.clearbit.com/echtemediagmbh.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-44",
        "title": "People Business Partner (m/w/d)",
        "title_ar": "People Business Partner (m/w/d) (تصميم وإبداع)",
        "company": "GALVANY",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Bei GALVANY ist es unser Ziel, klimaneutrales Wohnen für alle zur Realität zu machen. Wir setzen auf Umsetzung und entwickeln konkrete, smarte Lösungen, indem wir Wärmepumpen, Batteriespeicher und Smart Metering einfach zugänglich, zuverlässig und bezahlbar machen. Wir sind ein profitables Greentech-Startup und glauben, dass nachhaltiger Impact und langfristiges Wachstum nur auf Basis eines gesunden Geschäftsmodells möglich sind. Getrieben von Kundennutzen, Klarheit und Verantwortung stehen wir für hochwertige Heizlösungen und ein Arbeitsumfeld, in dem Menschen Verantwortung übernehmen und nachhaltigen Mehrwert schaffen. Als People Business Partner Tech (m/w/d) bei GALVANY gestaltest du unsere People-Funktion von Grund auf mit und prägst, wie wir als Unternehmen wachsen, führen und zusammenarbeiten. Deine Aufgaben: Talent Acquisition: Eigenständige End-to-End-Rekrutierung für alle Rollen in den zugeordneten Teams; Entwicklung geeigneter Suchstrategien; Coaching der Hiring Manager für eine exzellente Candidate Experience. Ansprechpartner:in: Beratung und Unterstützung aller Mitarbeitenden der zugeordneten Teams; Begleitung von Konfliktlösungen und Feedback-Gesprächen; Bearbeitung von Mitarbeiteranliegen und -beschwerden. Leadership Support: Vertrauensvolle Partnerschaft mit allen Leads des Verantwortungsbereichs; proaktives Feedback zu People-KPIs (Produktivität, Engagement, Abwesenheit, Retention, Performance-Zyklen); Entwicklung und Durchführung von Trainings für Führungskrä",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GALVANY. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Corporate functions"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/galvany/people-business-partner-berlin-454372",
        "logo": "https://logo.clearbit.com/galvany.com",
        "companyLogo": "https://logo.clearbit.com/galvany.com",
        "image": "https://logo.clearbit.com/galvany.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-45",
        "title": "Partner Sales Manager (m/w/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Partner Sales Manager (m/w/d))",
        "company": "GALVANY",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Bei GALVANY ist es unser Ziel, klimaneutrales Wohnen für alle zur Realität zu machen. Wir setzen auf Umsetzung und entwickeln konkrete, smarte Lösungen, indem wir Wärmepumpen, Batteriespeicher und Smart Metering einfach zugänglich, zuverlässig und bezahlbar machen. Wir sind ein profitables Greentech-Startup und glauben, dass nachhaltiger Impact und langfristiges Wachstum nur auf Basis eines gesunden Geschäftsmodells möglich sind. Getrieben von Kundennutzen, Klarheit und Verantwortung stehen wir für hochwertige Heizlösungen und ein Arbeitsumfeld, in dem Menschen Verantwortung übernehmen und nachhaltigen Mehrwert schaffen. Als Partner Sales Manager verantwortest du die Betreuung und Weiterentwicklung unseres externen Vertriebsnetzwerks aus rund 300 aktiven Handelsvertretern , die unsere Wärmepumpen- und Energiesysteme direkt bei Hausbesitzenden vertreiben. Du stellst hohe Beratungsqualität sicher, prüfst eingehende Verträge auf Baubarkeit und sorgst für einen reibungslosen Übergang von Verkauf zu Umsetzung. Deine Aufgaben Betreuung und Weiterentwicklung unserer externen Handelsvertreter mit Fokus auf Beratungsqualität, Performance und Einhaltung der GALVANY-Vertriebsstandards Prüfung eingehender Vertragsunterlagen auf Vollständigkeit, Plausibilität und technische Baubarkeit von Wärmepumpenprojekten inkl. Analyse von Gebäudedaten, Objektfotos, Leitungsführung sowie Aufstellorten für Außen- und Innengeräte (inkl. GALVANY Cube) Koordination und Statusprüfung von Finanzierungen mit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GALVANY. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing & sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/galvany/partner-sales-manager-berlin-156661",
        "logo": "https://logo.clearbit.com/galvany.com",
        "companyLogo": "https://logo.clearbit.com/galvany.com",
        "image": "https://logo.clearbit.com/galvany.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-46",
        "title": "Senior Customer Success Manager (f/m/d)",
        "title_ar": "مدير وقائد فريق (Senior Customer Success Manager (f/m/d))",
        "company": "remberg",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich Office",
        "location_ar": "Munich Office",
        "salary": "Competitive",
        "description": "At remberg, you’ll help to keep the world running. Everything that gets produced relies on a maintenance team behind the scenes that keeps the machines, equipment and infrastructure running. We are helping these teams by simplifying their work with modern, agentic maintenance software. At remberg, we are serving clients like Remondis, Würth, Edeka, Rotkäppchen and 300+ more. Supported by the visionary founders of category-defining businesses such as Celonis, Dash0, UiPath, Personio and Forto, as well as leading investors like Earlybird, Speedinvest, Oxx, Acton, and Fly Ventures, remberg is positioned to be the European category leader for modern, agentic maintenance software. WHAT THIS ROLE OFFERS As a (Senior) Customer Success Manager, you will help our customers make the most of remberg’s modern, agentic maintenance software. You will be responsible for the holistic enablement and consulting of our customers, delivering a great customer experience that lead to success stories ultimately fueling our growth flywheel. This position is office-based (hybrid) in Munich. THE IMPACT YOU'LL HAVE Customer lifecycle management: Manage customers throughout the entire lifecycle and build long-term relationships based on trust and value. Onboarding & enablement: Help new customers get started quickly and support them in fully leveraging the platform’s potential in the long term. Growth & upselling: Identify growth opportunities and realize upselling opportunities with our Sales teams. Cu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة remberg. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer success"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/remberg/senior-customer-success-manager-munich-27337",
        "logo": "https://logo.clearbit.com/remberg.com",
        "companyLogo": "https://logo.clearbit.com/remberg.com",
        "image": "https://logo.clearbit.com/remberg.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-47",
        "title": "Qualitätskontrolleur Obst und Gemüse (m/w/d)",
        "title_ar": "Qualitätskontrolleur Obst und Gemüse (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Rohlik",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bischofsheim bei Frankfurt, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Als Qualitätskontrolleur stellst du die gleichbleibend Qualität von Obst und Gemüse für unsere Kund:innen sicher. Du bist verantwortlich für die Qualitätskontrolle im gesamten Obst und Gemüse Bereich – von der Warenannahme über die Lagerung bis hin zur Kommissionierung. Zur Verstärkung unseres Teams suchen wir eine Vollzeitkraft mit 40 Stunden/ Woche. Die Stelle befindet sich in Bischofsheim im Gewerbegebiet. Auf was du dich freuen kannst: Monatliches Fixgehalt von 2500 Euro Zusätzlich pro Arbeitstag 9,- Essenszulagen Zusätzlich pro Arbeitstag 5,- Fahrtkostenzuschlag Bezahlte Überstunden 2x jährlich einen Gutschein in Höhe von je 300,00€ Knuspr Xtra Account und 10% Rabatt als Knuspr Credits (Cashback) Tolle Rabatte über CorporateBenefits (Fitness, Reisen, Tickets, Shopping, uvm.) Deine Aufgaben: Qualitätsprüfung in der Warenannahme (Entscheidung über Annahme, Rückgabe oder Sortierung der Ware) Kommunikation mit dem Einkauf bei Abweichungen oder Reklamationen Tägliche Qualitätskontrolle im Lager (Pufferplätze, Kommissionierplätze) Sicherstellung der richtigen Warenrotation nach Reifegrad und FIFO-Prinzip Bearbeitung, Ursachenforschung und Dokumentation von Reklamationen (Lieferanten und Kund:innen) Dokumentation von Abschriften bei Qualitätsmängeln Das bringst du mit Erste Produktkenntnisse im Bereich Obst & Gemüse Organisations- und Koordinationsfähigkeit Kommunikationsstärke im Austausch mit Lager, Einkauf und Qualitätssicherung Datenorientiertes Denken und strukturierte Arb",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Rohlik. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/rohlik/qualitatskontrolleur-obst-und-gemuse-bischofsheim-366704",
        "logo": "https://logo.clearbit.com/rohlik.com",
        "companyLogo": "https://logo.clearbit.com/rohlik.com",
        "image": "https://logo.clearbit.com/rohlik.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-48",
        "title": "Sales Operations Manager (m/f/x)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Operations Manager (m/f/x))",
        "company": "Statista",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "At Statista , we’re all about facts and data, for we are the world's leading business data platform. By providing reliable and easy-to-use data as well as various data analytics products and services, we empower people worldwide to make fact-based decisions. Founded in Hamburg in 2007, we have quickly grown into a global company with offices in major cities such as London, New York, Berlin and Tokyo. And we still have a lot of plans. Our constant growth does not only prove our success, but also keeps creating new development and career opportunities for our employees. We value and celebrate our diverse culture. You are welcome here for who you are, no matter where you come from, what you look like, or whether you prefer bar graphs to pie charts. Your story matters – keep writing it as part of our team. Are you ready to join us? General info about the role We are looking for a Sales Operations Manager who wants to learn how a modern Sales organization operates and how Salesforce, reporting, data and processes support our commercial teams. You will work closely with our Sales Operations team, the Salesforce Administrator and our Sales teams. In the beginning, the role will be quite hands-on and operational, with plenty of opportunities to learn and gradually take ownership of your own topics. Salesforce will be an important part of the role, but this is not a pure Salesforce Administrator position. You will support a broad range of Sales Operations topics and help us make every",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Statista. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Revenue"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/statista/sales-operations-manager-hamburg-83710",
        "logo": "https://logo.clearbit.com/statista.com",
        "companyLogo": "https://logo.clearbit.com/statista.com",
        "image": "https://logo.clearbit.com/statista.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-49",
        "title": "(Senior) Analyst (m/f/d)",
        "title_ar": "(Senior) Analyst (m/f/d) (برمجة وتكنولوجيا)",
        "company": "Statista",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "At Statista , we’re all about facts and data, for we are the world's leading business data platform. By providing reliable and easy-to-use data as well as various data analytics products and services, we empower people worldwide to make fact-based decisions. Founded in Hamburg in 2007, we have quickly grown into a global company with offices in major cities such as London, New York, Berlin and Tokyo. And we still have a lot of plans. Our constant growth does not only prove our success, but also keeps creating new development and career opportunities for our employees. We value and celebrate our diverse culture. You are welcome here for who you are, no matter where you come from, what you look like, or whether you prefer bar graphs to pie charts. Your story matters – keep writing it as part of our team. Are you ready to join us? Your Role As (Senior) Analyst at Statista R, you will join our international team of data professionals, supporting the analytical backbone of Statista’s ranking business at Statista R. Your work will focus on analyzing quantitative data, defining analytical models together with the topic experts and managing data driven ranking projects and products primarily around the education space. Your work will include the collection, validation, and analysis of data that powers our Rankings, Ratings, and Benchmarking projects. Moreover, you will support the development of new, data-driven products. In being the data structure and analytics backbone of the team",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Statista. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/statista/senior-analyst-hamburg-78352",
        "logo": "https://logo.clearbit.com/statista.com",
        "companyLogo": "https://logo.clearbit.com/statista.com",
        "image": "https://logo.clearbit.com/statista.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-50",
        "title": "(Junior) Project Manager (m/f/d)",
        "title_ar": "مدير وقائد فريق ((Junior) Project Manager (m/f/d))",
        "company": "Statista",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Bei Statista dreht sich alles um Daten und Fakten, denn wir sind die weltweit führende Business Data Plattform. Durch die Bereitstellung verlässlicher und einfach nutzbarer Daten sowie verschiedener Datenanalyseprodukte und -dienstleistungen unterstützen wir Menschen weltweit, faktenbasierte Entscheidungen zu treffen. 2007 in Hamburg gegründet, haben wir uns schnell zu einem globalen Unternehmen mit Büros in Metropolen wie London, New York und Tokio entwickelt. Und wir haben auch weiterhin viel vor. Unser stetiges Wachstum ist nicht nur Beweis für unseren Erfolg, sondern schafft auch immer neue Entwicklungs- und Karrieremöglichkeiten für unsere Mitarbeiter:innen. Wir schätzen und feiern unsere vielfältige Kultur. Hier bist Du willkommen, egal, wer Du bist, woher Du kommst, wie Du aussiehst oder welche Graphen und Diagramme Du bevorzugst. Deine Geschichte ist wichtig – schreibe sie weiterhin als Teil unseres Teams. Überzeuge dich selbst und werde Teil unseres Teams! Deine Aufgaben Planung, Steuerung und Umsetzung von Ranking-Projekten Koordination von Aufgaben sowie Abstimmung zwischen internen Teams und externen Partnern Nachverfolgung von Projektfortschritten, Zeitplänen und Budgets, um eine reibungslose Durchführung sicherzustellen Frühzeitige Identifikation von Risiken im Projektverlauf sowie Entwicklung pragmatischer Lösungsansätze Administrative Unterstützung im Siegelvertrieb Mitwirkung bei der kontinuierlichen Optimierung und Weiterentwicklung unserer Projektmanagement",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Statista. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Revenue"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/statista/junior-project-manager-hamburg-212960",
        "logo": "https://logo.clearbit.com/statista.com",
        "companyLogo": "https://logo.clearbit.com/statista.com",
        "image": "https://logo.clearbit.com/statista.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-51",
        "title": "Support Engineer Intern - m/f/d",
        "title_ar": "مهندس ومطور برمجيات (Support Engineer Intern - m/f/d)",
        "company": "Langdock",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Help Us Change the Way the World Works Build something that matters. Langdock exists to change the way the world works, bridging the gap between what technology can do and what people actually do with it. We bring all leading AI models into one secure, model-agnostic platform and make them usable across entire organizations. Over 10,000 companies use our platform every day, from fast-growing startups to some of Europe's largest enterprises. Their employees open Langdock to draft strategies, analyze documents, or automate workflows - helping them to work smarter, think more creatively, and reach their full potential. About the Role Customer support is where our platform meets the real world. Operating a complex enterprise AI platform means dealing with nuanced technical setups, API integrations, deep compliance and security requirements, and permission architectures across large organizations. As a Support Engineer Intern , your primary mission is to keep our customers unblocked and happy. You will spend most of your day in the support queue answering technical questions, troubleshooting edge cases, and resolving customer tickets directly. Because you are present in the queue every day, you will develop a sharp eye for recurring friction. Alongside daily ticket resolution, you will raise concrete bugs to engineering, contribute to internal documentation, and help refine our AI-driven support tooling over time. This is a full-time, 6-month internship working 100% on-site from o",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Langdock. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/langdock/support-engineer-intern-berlin-187760",
        "logo": "https://logo.clearbit.com/langdock.com",
        "companyLogo": "https://logo.clearbit.com/langdock.com",
        "image": "https://logo.clearbit.com/langdock.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-52",
        "title": "Support Engineer (Working Student) - m/f/d",
        "title_ar": "مهندس ومطور برمجيات (Support Engineer (Working Student) - m/f/d)",
        "company": "Langdock",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Help Us Change the Way the World Works Build something that matters. Langdock exists to change the way the world works, bridging the gap between what technology can do and what people actually do with it. We bring all leading AI models into one secure, model-agnostic platform and make them usable across entire organizations. Over 10,000 companies use our platform every day, from fast-growing startups to some of Europe's largest enterprises. Their employees open Langdock to draft strategies, analyze documents, or automate workflows - helping them to work smarter, think more creatively, and reach their full potential. About the Role Customer support is where our platform meets the real world. Operating a complex enterprise AI platform means dealing with nuanced technical setups, API integrations, deep compliance and security requirements, and permission architectures across large organizations. As a Support Engineer (Working Student) , your primary mission is to keep our customers unblocked and happy. You will be a daily anchor in our support queue - answering technical questions, troubleshooting edge cases, and resolving customer tickets directly. Because you are present in the queue every day, you will develop a sharp eye for recurring friction. Alongside daily ticket resolution, you will raise concrete bugs to engineering, contribute to internal documentation, and help refine our AI-driven support tooling over time. This is a long-term working student role (ideally 12+ month",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Langdock. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/langdock/support-engineer-working-student-berlin-360440",
        "logo": "https://logo.clearbit.com/langdock.com",
        "companyLogo": "https://logo.clearbit.com/langdock.com",
        "image": "https://logo.clearbit.com/langdock.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-53",
        "title": "GTM Engineer - m/f/d",
        "title_ar": "مهندس ومطور برمجيات (GTM Engineer - m/f/d)",
        "company": "Langdock",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Help Us Change the Way the World Works Build something that matters. Langdock exists to change the way the world works, bridging the gap between what technology can do and what people actually do with it. We bring all leading AI models into one secure, model-agnostic platform and make them usable across entire organizations. Over 10,000 companies use our platform every day, from fast-growing startups to some of Europe's largest enterprises. Their employees open Langdock to draft strategies, analyze documents, or automate workflows, helping them to work smarter, think more creatively, and reach their full potential. About Langdock Our mission is to bridge the gap between technology and adoption. We build a secure, model-agnostic AI platform that helps companies put AI to work across their entire organization. From chat and agents to integrations, workflows, and our API, we give teams the tools to augment and automate their work. We apply the same ambition internally. We want to be the most productive company in the world, and that means continuously improving how we work, not simply adding more people to existing processes. About the Role Build the systems that help Langdock grow as a GTM Engineer in Berlin. You combine commercial judgment with technical curiosity: you understand what creates pipeline, what helps a deal move forward, and what is worth automating. While you’ll be sitting in the Sales & Partnerships team, you’ll also work closely with, Marketing, Customer Succes",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Langdock. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/langdock/gtm-engineer-berlin-127986",
        "logo": "https://logo.clearbit.com/langdock.com",
        "companyLogo": "https://logo.clearbit.com/langdock.com",
        "image": "https://logo.clearbit.com/langdock.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-54",
        "title": "Head of Revenue Operations & Systems",
        "title_ar": "Head of Revenue Operations & Systems (تسويق ومبيعات)",
        "company": "Platform Engineering Masters",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Platform Engineering Platform Engineering ( platformengineering.org ) is home to the world's largest community of platform engineers. Through PlatformCon, one of the world's largest conferences dedicated to platform engineering, we bring together more than 50,000 engineers, technology leaders, and decision-makers every year. Alongside our events, we run a university, a newsletter read by hundreds of thousands of engineers, a growing YouTube channel, and Weave Intelligence, our research arm. About the Role We are looking for a Head of Revenue Operations & Systems to own operations end to end: our growth-ops and CRM data layer, the tool stack, event & ticketing infrastructure, and performance-marketing data, the systems and processes that let the rest of the company scale. Today, growth ops and internal tooling run on a mix of point-to-point integrations and manual fixes that have carried us this far but won't carry us through the next stage. We are already improving parts of this, you will be picking up that momentum and driving it the rest of the way, not starting from a blank slate. This is a management role from day one. Two people already work in ops, one on revenue ops and one on tooling and custom software, and they will report to you from the start. You will be hands-on yourself too: building pipelines and workflows directly, not just directing others to. You will join the Platform Engineering Masters leadership team, reporting to Luca, Managing Director of Platfo",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Platform Engineering Masters. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing operations"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/platform-engineering-masters/head-of-revenue-operations-systems-berlin-162024",
        "logo": "https://logo.clearbit.com/platformengineeringmasters.com",
        "companyLogo": "https://logo.clearbit.com/platformengineeringmasters.com",
        "image": "https://logo.clearbit.com/platformengineeringmasters.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-55",
        "title": "Head of Research & Editorial",
        "title_ar": "Head of Research & Editorial (تسويق ومبيعات)",
        "company": "Platform Engineering Masters",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Platform Engineering Platform Engineering ( platformengineering.org ) is home to the world's largest community of platform engineers. Through PlatformCon , one of the world's largest conferences dedicated to platform engineering, we bring together more than 50,000 engineers, technology leaders, and decision-makers every year to share ideas, showcase innovation, and shape the future of internal developer platforms. Alongside our events, we run a university, a newsletter read by hundreds of thousands of engineers, a growing YouTube channel, and Weave Intelligence , our research arm: the analyst practice behind the State of Platform Engineering report, market guides on the platform engineering reference architecture, and a growing set of data products on how the agentic enterprise is actually being built. About the Role We're looking for a Head of Research & Editorial to lead Weave Intelligence and own what we say about the industry. This is the role that owns Platform Engineering's intellectual agenda. Everything we publish across every channel starts with a thesis about where platform engineering, internal developer platforms and agentic software development are going. Today that thesis lives in the heads of our founders. You will make it a practice: a research agenda, an editorial calendar, a standard for what counts as evidence, and a team that turns it into reports, guides, articles, courses and video that the market reads first. You'll be a named analyst, not a manag",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Platform Engineering Masters. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Content"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/platform-engineering-masters/head-of-research-editorial-berlin-215547",
        "logo": "https://logo.clearbit.com/platformengineeringmasters.com",
        "companyLogo": "https://logo.clearbit.com/platformengineeringmasters.com",
        "image": "https://logo.clearbit.com/platformengineeringmasters.com",
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789505641-56",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789505641-57",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789505641-58",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789505641-59",
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
        "postedAt": "2026-09-15",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789505641-60",
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
        "postedAt": "2026-09-15",
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
