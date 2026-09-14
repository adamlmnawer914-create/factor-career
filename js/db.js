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
        "id": "job-1789355436-1",
        "title": "Senior Product Manager, Reporting & Analytics",
        "title_ar": "مدير وقائد فريق (Senior Product Manager, Reporting & Analytics)",
        "company": "Teladoc Health",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$130,000 - $170,000 USD",
        "description": "Join the team leading the next evolution of virtual care. At Teladoc Health , you are empowered to bring your true self to work while helping millions of people live their healthiest lives. Here you will be part of a high-performance culture where colleagues embrace challenges, drive transformative solutions, and create opportunities for growth. Together, we’re transforming how better health happens. Summary of Position In your role as Senior Product Manager, Reporting & Analytics, you’ll own and drive the strategy for client reporting and data delivery across the product portfolio, translating complex healthcare data into scalable, trusted solutions for our clients. You’ll work with key internal stakeholders and clients to understand reporting needs, solve complex data challenges and deliver impactful analytics that tell the Teladoc value story. You will collaborate with cross-functional stakeholders in Operations, Client Management and Data Science teams to ensure client-facing insights are accurate, consistent and grounded in trusted data across multiple source systems. Beyond the role itself, this is how we work together every day: \n Anchor on Value: Every initiative ties back to member or business impact - not activity for its own sake. \n Bias for Action: Move with the best information available now. Drive with purpose, speed, and quality. \n AI as a Force Multiplier: Use AI to scale judgment and throughput - it extends our people, it doesn't replace their ownership. \n Tr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Teladoc Health. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Reporting-and-analytics",
            "Data-product-management"
        ],
        "applyUrl": "https://himalayas.app/companies/teladoc-health/jobs/senior-product-manager-reporting-analytics",
        "logo": "https://cdn-images.himalayas.app/vm0nojvibxb0cxmsq6advhrx6mor",
        "companyLogo": "https://cdn-images.himalayas.app/vm0nojvibxb0cxmsq6advhrx6mor",
        "image": "https://cdn-images.himalayas.app/vm0nojvibxb0cxmsq6advhrx6mor",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-2",
        "title": "Formateur Kinougarde H/F 100% Télétravail",
        "title_ar": "Formateur Kinougarde H/F 100% Télétravail (برمجة وتكنولوجيا)",
        "company": "Kinougarde",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "France",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$960 - $960 EUR",
        "description": "Vous aurez pour missions d’animer des groupes de formation petite enfance en visio pour nos baby-sitters qui gardent des enfants de moins de 3 ans en sortie de crèche. Lors de cette formation, dont le contenu a été élaboré par Kinougarde , votre rôle sera de : \n Former nos nounous sur les bons réflexes à adopter en lien avec la sécurité, l’hygiène et la santé des enfants \n Elargir leurs connaissances sur le développement de l’enfant de 1 à 3 ans \n Les évaluer grâce à leur participation active et leur capacité de progression \n Répondre aux problématiques qu’elles rencontrent durant leur garde \n Vous serez vous-même formé et accompagné avant de pouvoir vous lancer en autonomie par notre coordinatrice petite enfance. Si vous recherchez un complément d’activité ou tout simplement un temps partiel et bien c’est possible ! Et en plus vous n’aurez pas de déplacement. \n Poste en 100% télétravail = pas de frais de déplacement !! \n Contrat à durée indéterminée \n 4 à 5 demies-journées (9h-13h30 ou 13h-17h30) par semaine entre le lundi et le samedi (1 samedi obligatoire sur 2) en fonction de vos disponibilités. \n - Vous avez diplôme dans la petite enfance : bac+3 minimum. - Vous avez une expérience terrain auprès d’enfants. - Vous êtes pédagogue et à l’aise devant un auditoire. - Vous savez dynamiser et maitriser un groupe d’apprenants. - Vous êtes à l’aise avec l’outil informatique et avec la visio. Rémunération brute mensuelle de 960€ Vous aimez accompagner et former ? Le secteur de la",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kinougarde. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Training",
            "E-learning"
        ],
        "applyUrl": "https://himalayas.app/companies/kinougarde/jobs/formateur-kinougarde-h-f-100-teletravail-3266368290",
        "logo": "https://cdn-images.himalayas.app/3ssco508loji2jt49p8hjmuhcsgt",
        "companyLogo": "https://cdn-images.himalayas.app/3ssco508loji2jt49p8hjmuhcsgt",
        "image": "https://cdn-images.himalayas.app/3ssco508loji2jt49p8hjmuhcsgt",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-3",
        "title": "Project Controls Specialist - Data Center",
        "title_ar": "Project Controls Specialist - Data Center (برمجة وتكنولوجيا)",
        "company": "Iron Mountain",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Moldova, United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$81,200 - $108,300 USD",
        "description": "At Iron Mountain we know that work, when done well, makes a positive impact for our customers, our employees, and our planet. That’s why we need smart, committed people to join us. Whether you’re looking to start your career or make a change, talk to us and see how you can elevate the power of your work at Iron Mountain . We provide expert, sustainable solutions in records and information management, digital transformation services, data centers, asset lifecycle management, and fine art storage, handling, and logistics. We proudly partner every day with our 225,000 customers around the world to preserve their invaluable artifacts, extract more from their inventory, and protect their data privacy in innovative and socially responsible ways. Are you curious about being part of our growth stor​y while evolving your skills in a culture that will welcome your unique contributions? If so, let's start the conversation. Iron Mountain is seeking a motivated and experienced Project Controls Specialist to join our Data Center development team. In this role, you will be responsible for providing an effective cost and commercial management process and reporting mechanism across the North America portfolio of projects. You will work closely with the North America Commercial Director and Project Team Commercial Managers to ensure all financial processes run smoothly from project inception to completion. What You’ll Do (Responsibilities) In this role, you will: \n Lead Financial Oversight: Cr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Iron Mountain. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-center-development",
            "Cost-management"
        ],
        "applyUrl": "https://himalayas.app/companies/iron-mountain/jobs/project-controls-specialist-data-center",
        "logo": "https://cdn-images.himalayas.app/4fx6wegb7kgw6tsuzg8agkatrwl8",
        "companyLogo": "https://cdn-images.himalayas.app/4fx6wegb7kgw6tsuzg8agkatrwl8",
        "image": "https://cdn-images.himalayas.app/4fx6wegb7kgw6tsuzg8agkatrwl8",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-4",
        "title": "Executive Administrative Coordinator - Part Time",
        "title_ar": "Executive Administrative Coordinator - Part Time (تصميم وإبداع)",
        "company": "STAFFVIRTUAL",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines",
        "location_ar": "Philippines",
        "salary": "Competitive",
        "description": "Job Title: Executive Administrative Coordinator (Remote) Job Overview: We are ﻿seeking for an exceptional Executive Administrative Coordinator to manage front-desk operations and high-level practice administration. Acting as the central operational anchor—akin to an executive assistant to a CEO or senior leader—this role requires elite executive functioning, extreme attention to detail, and near-total operational autonomy. You will be responsible for seamless day-to-day operations, proactive problem-solving, driving client acquisition and retention, and delivering a flawless front-desk experience. The ideal candidate thrives in a high-accountability environment where instructions are executed precisely the first time, mistakes are virtually non-existent, and senior leadership relies on your silent reliability to keep business revenue growing. Job Responsibilities: ﻿1. Administrative & Practice Coordination \n ﻿Coordinate day-to-day administrative operations and provide reliable support to senior leadership and providers. \n Manage calendars, appointments, schedules, and administrative follow-ups with a high level of accuracy. \n Coordinate client intake and ensure information is collected and recorded correctly. \n Anticipate administrative needs, identify potential issues, and take action to keep daily operations running smoothly. \n Handle tasks independently with minimal supervision and follow instructions accurately. \n Maintain confidentiality and follow HIPAA requirements whe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة STAFFVIRTUAL. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Executive-assistant"
        ],
        "applyUrl": "https://himalayas.app/companies/staffvirtual/jobs/executive-administrative-coordinator-part-time",
        "logo": "https://cdn-images.himalayas.app/1264hffcw2h1scyiliqlx9zk32i3",
        "companyLogo": "https://cdn-images.himalayas.app/1264hffcw2h1scyiliqlx9zk32i3",
        "image": "https://cdn-images.himalayas.app/1264hffcw2h1scyiliqlx9zk32i3",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-5",
        "title": "DESARROLLADOR/A .NET (TELETRABAJO)",
        "title_ar": "DESARROLLADOR/A .NET (TELETRABAJO) (برمجة وتكنولوجيا)",
        "company": "IRIUM",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Spain",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$30,000 - $38,000 EUR",
        "description": "En IRIUM nos preocupamos porque no dejes de perseguir tus sueños. Prepárate para conquistar tus metas, y ten siempre presente disfrutar del camino. Buscamos un/a Desarrollador/a .NET con 5 años de experiencia , para contribuir a una solución nueva (greenfield) dentro del trading electrónico de renta fija, construida sobre AWS y tecnologías .NET modernas, con un fuerte enfoque en la calidad de ingeniería, la fiabilidad y la entrega a nivel de producción. ¿Qué estamos buscando? \n Experiencia de nivel experto en C# y .NET/.NET Core. \n Sólido conocimiento del diseño orientado a objetos, los principios SOLID y la arquitectura limpia. \n Amplia experiencia diseñando, construyendo y dando soporte a Web APIs de ASP.NET Core y servicios RESTful en entornos de producción. \n Experiencia probada con bases de datos SQL y NoSQL. \n Inglés C1. \n ¿Qué ofrecemos? \n Contratación indefinida con IRIUM . \n Banda salarial según experiencia y encaje con empresa y proyecto. \n Buen clima laboral. \n Acceso ilimitado a formación tecnológica puntera en modalidad barra libre. \n Club de beneficios para empleados con descuentos directos y miles de ofertas en marcas, hoteles, agencias de viaje, cines, ropa... \n Modalidad remota, dentro de territorio español. \n Horario: 09:00h - 18:00h. \n Salario: 30K – 38K. \n Pasarás a formar parte de un gran equipo de personas que estarán siempre dispuestas a ayudarte. IRIUM es una empresa formada por profesionales con inquietudes, dinámicos y resolutivos. Nuestros valores s",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة IRIUM. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            ".net-development",
            "Backend-development",
            "Software-engineer",
            "Web-api-development"
        ],
        "applyUrl": "https://himalayas.app/companies/irium/jobs/desarrollador-a-net-teletrabajo",
        "logo": "https://cdn-images.himalayas.app/v71ivpsi1p18j4llx2rar77kzfuk",
        "companyLogo": "https://cdn-images.himalayas.app/v71ivpsi1p18j4llx2rar77kzfuk",
        "image": "https://cdn-images.himalayas.app/v71ivpsi1p18j4llx2rar77kzfuk",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-6",
        "title": "Head of LinkedIn Ads",
        "title_ar": "Head of LinkedIn Ads (برمجة وتكنولوجيا)",
        "company": "Session Media",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$50,000 - $60,000 GBP",
        "description": "About Session Media Session Media is an award-winning B2B marketing agency working with some of the fastest-growing B2B SaaS & Tech brands. We're on the hunt for our first-ever Head of LinkedIn Ads - to help continuously develop LinkedIn Ad practice and paid social strategy. We're searching for someone who lives and breathes LinkedIn Ads - with deep platform expertise, and a knack for creative ad concepts that cut through in the feed. Day-to-day Responsibilities \n Own and drive overarching LinkedIn Ads strategy across the client portfolio. \n Plan and execute medium to large-scale LinkedIn Ad campaigns Structure \n Monitor and evaluate campaign performance against KPIs, implementing new strategies and tests. \n Optimise audience targeting, bidding, and creative to maximise client performance and achieve the best ROI/ROAS. \n Identify growth opportunities and new ways to scale spend efficiently. \n Manage client communications and liaise with both internal and external teams. \n Identify inefficiencies in accounts and implement optimisation strategies. \n Implement 3rd party, 1st party tracking. \n Mentor and guide junior paid media team members \n Collaborate with the copy & design team to develop creative assets and compelling ad copy \n Implement internal AI assisted tools into each stage of the process \n Benefits \n £50,000 to £60,000 PA Salary \n Remote Working (or hybrid) \n Private dental and healthcare cover \n Additional holiday days accrued each year (up to four years) \n Your birt",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Session Media. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Linkedin-ads",
            "Paid-social",
            "Digital-marketing",
            "Performance-marketing"
        ],
        "applyUrl": "https://himalayas.app/companies/session-media/jobs/head-of-linkedin-ads-1829749477",
        "logo": "https://cdn-images.himalayas.app/um3gupim3inxn1zxom3rk2ym2uu6",
        "companyLogo": "https://cdn-images.himalayas.app/um3gupim3inxn1zxom3rk2ym2uu6",
        "image": "https://cdn-images.himalayas.app/um3gupim3inxn1zxom3rk2ym2uu6",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-7",
        "title": "Tax Preparer - Remote (GEN110011)",
        "title_ar": "Tax Preparer - Remote (GEN110011) (مالية ومحاسبة)",
        "company": "RES Consultant Group",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "High-producing tax preparer wanted for year-round remote work for several of our CPA and tax services firms. Flexible hours. Work from Home. Job Description Fully remote role has you preparing individual and business tax returns, handling off-season projects like tax projections, notice resolution, and communicating directly with clients. If interested chance to learn review work with advancement opportunity. \n Prepare individual and business tax returns. 1040, 1065, 1120, 1120S (preparation of 990, 1041, 706 and 709 returns nice to have) \n Some preparation of more complex tax returns to include multi-state, flow through entities, multi-tiered partnerships and consolidated corporations. \n Assist with off season projects such as tax projections, reasonable compensation studies, tax notice resolution. \n Conduct tax research as needed \n Handle client communications through portal messaging, phone calls, and video meetings \n Requirements \n 3-5 years of recent tax experience in a public accounting firm \n Ability to work independently as well as the ability to work well with clients and team members \n Past experience working in a fully remote workspace \n Comfortable working directly with clients, explaining complex tax issues in easy-to-understand terms \n Strong organizational and interpersonal skills \n Technically strong \n Enjoys working in a technology-friendly environment \n Must have CPA firm experience \n Benefits \n Fully remote role; flexible remote work schedule \n Growing firm",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة RES Consultant Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tax-preparation",
            "Tax-accounting",
            "Public-accounting",
            "Cpa-services"
        ],
        "applyUrl": "https://himalayas.app/companies/recruitingedgestaffing/jobs/tax-preparer-remote-gen110011",
        "logo": "https://cdn-images.himalayas.app/o0lq79mipfarfz45uz9pw6c49pwx",
        "companyLogo": "https://cdn-images.himalayas.app/o0lq79mipfarfz45uz9pw6c49pwx",
        "image": "https://cdn-images.himalayas.app/o0lq79mipfarfz45uz9pw6c49pwx",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-8",
        "title": "Associate General Counsel",
        "title_ar": "Associate General Counsel (أخرى)",
        "company": "Public Partnerships LLC",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$180,000 - $200,000 USD",
        "description": "It's fun to work in a company where people truly BELIEVE in what they're doing! We're committed to bringing passion and customer focus to the business. Public Partnerships LLC supports individuals with disabilities or chronic illnesses and aging adults, to remain in their homes and communities and “self” direct their own long-term home care. Our role as the nation’s largest and most experienced Financial Management Service provider is to assist those eligible Medicaid recipients to choose and pay for their own support workers and services within their state-approved personalized budget.  We are appointed by states and managed healthcare organizations to better serve more of their residents and members requiring long-term care and ensure the efficient use of taxpayer funded services.  Our culture attracts and rewards people who are results-oriented and strive to exceed customer expectations. We desire motivated candidates who are excited to join our fast-paced, entrepreneurial environment, and who want to make a difference in helping transform the lives of the consumers we serve. (learn more at www.pplfirst.com). Job Summary: The Associate General Counsel will serve as a trusted advisor to business leadership by providing strategic legal guidance on employment matters, regulatory compliance, corporate governance, risk management, and operational initiatives. This role is responsible for managing a broad range of legal activities, including contract negotiation and administrati",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Public Partnerships LLC. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Legal-counsel",
            "Corporate-counsel",
            "In-house-counsel"
        ],
        "applyUrl": "https://himalayas.app/companies/public-partnerships-llc/jobs/associate-general-counsel",
        "logo": "https://logo.clearbit.com/publicpartnershipsllc.com",
        "companyLogo": "https://logo.clearbit.com/publicpartnershipsllc.com",
        "image": "https://logo.clearbit.com/publicpartnershipsllc.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355436-9",
        "title": "Data Analyst",
        "title_ar": "Data Analyst (برمجة وتكنولوجيا)",
        "company": "Ness USA, Inc.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Why Ness We know that people are our greatest asset. Our staff’s professionalism, innovation, teamwork, and dedication to excellence have helped us become one of the world’s leading technology companies. It is these qualities that are vital to our continued success. As a Ness employee, you will be working on products and platforms for some of the most innovative software companies in the world. You’ll gain knowledge working alongside other highly skilled professionals that will help accelerate your career progression. You’ll also benefit from an array of advantages like access to trainings and certifications, bonuses, and aids, socializing activities and attractive compensation. Requirements and responsibilities What you’ll do \n Working with the Project teams, business stakeholders, technical SMEs, , Data Insights on a growing portfolio of interactive dashboards across many product teams \n Create new datasets and sophisticated dashboards \n Understand the data and business processes across all applicaitons, all data domains \n Advocate best practises for development across our teams \n What you’ll bring Must Have \n Expert in SQL, Hadoop, BigData, Hive, Nifi \n Ability to analyse the construction of existing reports and reverse engineer table relationships etc \n Strong knowledge of the Retail Domain and experience with various stages of data warehouse projects, including data extraction, cleansing, aggregation, validation, transformation, and loading. \n Exp in using DataStage comp",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ness USA, Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-engineering",
            "Business-intelligence",
            "Etl-development",
            "Data-analyst"
        ],
        "applyUrl": "https://himalayas.app/companies/ness-usa-inc/jobs/data-analyst-8636782056",
        "logo": "https://cdn-images.himalayas.app/iaz1qc2i8ddxebev2g57j54syz47",
        "companyLogo": "https://cdn-images.himalayas.app/iaz1qc2i8ddxebev2g57j54syz47",
        "image": "https://cdn-images.himalayas.app/iaz1qc2i8ddxebev2g57j54syz47",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-10",
        "title": "Senior Visual Designer, Profile/Account Hub",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Senior Visual Designer, Profile/Account Hub)",
        "company": "New Era Technology",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Join New Era Technology , where People First is at the heart of everything we do. With a global team of over 3,000 professionals, we're committed to creating a workplace where everyone feels valued, empowered, and inspired to grow. Our mission is to securely connect people, places, and information with end-to-end technology solutions at scale. \n At New Era, you'll join a team-oriented culture that prioritizes your personal and professional development. Work alongside industry-certified experts, access continuous training, and enjoy competitive benefits. Guided by our core attributes — putting people first, embracing continuous learning, and thriving through collaboration and inclusion — we nurture our people to deliver exceptional customer service. \n If you want to make an impact in a supportive, growth-oriented environment, New Era is the place for you. Apply today and help us shape the future of work—together \n SUMMARY: The Senior Visual Designer owns the visual design execution for the Account Hub—a customer-facing experience aggregating account-level interactions across brands. Operating within the Unified Experience (UE) Core portfolio, this individual delivers high-fidelity visual UI designs while applying strong UX acumen to assess interaction, flow, and usability. The role acts as a collaborative bridge to the core design system team, adopting established components while contributing new Account Hub-specific patterns into the broader ecosystem. PRIMARY DUTIES: \n Deli",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة New Era Technology. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Visual-design",
            "Ui-design",
            "Ux-design",
            "Digital-product-design"
        ],
        "applyUrl": "https://himalayas.app/companies/new-era-technology/jobs/senior-visual-designer-profile-account-hub",
        "logo": "https://cdn-images.himalayas.app/6tzup31357q29ld82ty45hfth7cy",
        "companyLogo": "https://cdn-images.himalayas.app/6tzup31357q29ld82ty45hfth7cy",
        "image": "https://cdn-images.himalayas.app/6tzup31357q29ld82ty45hfth7cy",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-11",
        "title": "Source-to-Contract Operations Advocate",
        "title_ar": "Source-to-Contract Operations Advocate (مالية ومحاسبة)",
        "company": "Greystar",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$24 - $26.44 USD",
        "description": "ABOUT GREYSTAR Greystar is a leading, fully integrated global real estate platform offering expertise in property management, investment management, development, and construction services in institutional-quality rental housing. Headquartered in Charleston, South Carolina, Greystar manages and operates over $350 billion of real estate in more than 260 markets globally with offices throughout North America, Europe, South America, and the Asia-Pacific region. Greystar is the largest operator of apartments in the United States, managing over one million units/beds globally. Across its platforms, Greystar has nearly $79 billion of assets under management, including over $34 billion of development assets and over $36.5 billion of regulatory assets under management. Greystar was founded by Bob Faith in 1993 to become a provider of world-class service in the rental residential real estate business. To learn more, visit . JOB DESCRIPTION SUMMARY The S2C Operations Advocate provides day-to-day support for an assigned portfolio within Upstream Source-to-Contract functions, including supplier record setup and maintenance, compliance program support, and third-party credentialing coordination. This role maintains supplier attributes across property accounting systems, supports training and troubleshooting for assigned properties, and partners with the Manager, S2C – Operations to ensure consistent, compliant supplier support. JOB DESCRIPTION KEY RESPONSIBILITIES Supplier Record & Complia",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Greystar. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Procurement-operations",
            "Supplier-management",
            "Contract-administration"
        ],
        "applyUrl": "https://himalayas.app/companies/greystar/jobs/source-to-contract-operations-advocate",
        "logo": "https://cdn-images.himalayas.app/k1pz9y4gyaao793t4ispllkyhg2n",
        "companyLogo": "https://cdn-images.himalayas.app/k1pz9y4gyaao793t4ispllkyhg2n",
        "image": "https://cdn-images.himalayas.app/k1pz9y4gyaao793t4ispllkyhg2n",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-12",
        "title": "Digital Design Coordinator (Philippines)",
        "title_ar": "Digital Design Coordinator (Philippines) (تصميم وإبداع)",
        "company": "Intrinsic Digital Brands",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines",
        "location_ar": "Philippines",
        "salary": "$54,000 - $62,000 PHP",
        "description": "Who We Are Intrinsic Digital, Inc. (www.intrinsicdigital.com) is at the forefront of digital marketing. Our service lines include Apartment Geofencing, Kurie, Hotel Geofencing and Restaurant Geofencing, offering mobile and streaming TV advertising to the multifamily, hospitality, and restaurant industries. Intrinsic Digital is a fully remote company with team members located across the United States and the Philippines. Our culture is based around our Core Focus, “We love the journey and embrace what’s next” and six Core Values: Accountability, Authenticity, Caring, Neutralevity, Surprise & Delight and X-Ray Vision. We may be remote, but no one is isolated in their work. Our initial onboarding and ongoing collaboration efforts have formed a cohesive team. We were voted No. 1 Best Place to Work in Multifamily and certified Great Places to Work in 2024. Employees consistently score us above 9 out of 10 on two key satisfaction categories: “Intrinsic Digital cares about my well-being” and “I would recommend Intrinsic Digital as a great place to work.” Who You Are You’re a self-motivated individual who is passionate about design and driving results. You are detail-oriented, communicate clearly with your team, and feel confident taking ownership of creative tasks with minimal guidance. Qualifications 2+ years of experience in digital marketing, graphic design, or a related creative field A bachelor's degree in a relevant field is preferred A strong portfolio demonstrating graphic d",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Intrinsic Digital Brands. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Creative-services",
            "Digital-design",
            "Graphic-design",
            "Visual-design"
        ],
        "applyUrl": "https://himalayas.app/companies/intrinsic-digital-brands/jobs/digital-design-coordinator-philippines",
        "logo": "https://cdn-images.himalayas.app/eyzlnjzy6jzgf1eq0kket2cztyrr",
        "companyLogo": "https://cdn-images.himalayas.app/eyzlnjzy6jzgf1eq0kket2cztyrr",
        "image": "https://cdn-images.himalayas.app/eyzlnjzy6jzgf1eq0kket2cztyrr",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-13",
        "title": "Recruiter",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Recruiter)",
        "company": "TrueBlue",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$22.64 - $28.3 USD",
        "description": "Overview : As a Recruiter, you will be responsible for all recruiting activities within a facility, you will place advertisements and organize and attend job fairs and other recruiting events in the local community. You will conduct candidate interviews as part of a strategic recruitment plan, that you’ll develop and execute, ensuring our partner operations are fully staffed. Location: Remote Essential Job Functions \n Collaborate with hiring managers to identify staffing needs and job requirements \n Develop and execute a recruitment plan and deliver effective orientations \n Source and screen resume to identify qualified candidates \n Conduct phone and in-person interviews to assess candidate qualifications \n Manage the hiring process from offer to onboarding \n Create an ongoing candidate pipeline \n Manage paperless recruiting operations \n Monitor the effectiveness of all ad campaigns \n Participate in job fairs and community events \n Experience \n High school diploma or GED preferred \n 2+ years of experience in recruiting or a related field \n Proficiency with an Applicant Tracking System (ATS) and/or Human Resources Inventory System (HRIS) \n Knowledge of MS Office software: Excel, Outlook, PowerPoint, and Word \n Strong communications skills, both oral and written \n Strong interpersonal and customer service skills \n Excellent problem-solving and analytical skills \n Salary Range: $22.64 - $28.30 per hour, depending on experience and geographic location. Please note that actual com",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة TrueBlue. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Recruitment",
            "Talent-acquisition",
            "Human-resources",
            "Staffing-coordinator"
        ],
        "applyUrl": "https://himalayas.app/companies/trueblue/jobs/recruiter-3382828686",
        "logo": "https://cdn-images.himalayas.app/tqrrmd24hy3efubiefnr3x8r7697",
        "companyLogo": "https://cdn-images.himalayas.app/tqrrmd24hy3efubiefnr3x8r7697",
        "image": "https://cdn-images.himalayas.app/tqrrmd24hy3efubiefnr3x8r7697",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-14",
        "title": "Senior Project Manager | $90K-$110K + Remote | Inc. 5000 Award-Winning, High-Gro",
        "title_ar": "مدير وقائد فريق (Senior Project Manager | $90K-$110K + Remote | Inc. 5000 Award-Winning, High-Gro)",
        "company": "PhillyTech.Co",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$90,000 - $110,000 USD",
        "description": "The Senior Project Manager serves as the cross functional owner responsible for turning company priorities into structured projects and driving them through successful completion. Working closely with leadership, you'll coordinate Marketing, Copywriting, Marketing Automation, Customer Operations, Events, Coaching, Product, Sales, and external partners across digital launches, live and virtual events, coaching programs, digital products/platforms, podcast and media initiatives, and other company priorities. Your role is to turn business objectives into clear, executable project plans and drive those plans to successful completion. This is not an administrative project management position. Our client needs an operator who can take an outcome, identify everything required to achieve it, establish ownership and dependencies, anticipate risk, hold stakeholders accountable, and relentlessly close loops until the intended result has been delivered. Responsibilities \n Own multiple concurrent cross functional projects across digital launches, marketing campaigns, live and virtual events, coaching programs, digital products/platforms, podcast/media initiatives, and company priorities. \n Personally build and maintain detailed project plans, timelines, dependencies, milestones, ownership, and workflows within Asana or similar. \n Coordinate Marketing, Copywriting, Marketing Automation, Customer Operations, Events, Coaching, Product, Sales, leadership, and external partners to keep initiat",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PhillyTech.Co. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project-management",
            "Senior-project-manager",
            "Launch-management"
        ],
        "applyUrl": "https://himalayas.app/companies/phillytech-co/jobs/senior-project-manager-90k-110k-remote-inc-5000-award-winning-high-gro",
        "logo": "https://cdn-images.himalayas.app/fobttykcqg1f44srpcxl2ufeyokp",
        "companyLogo": "https://cdn-images.himalayas.app/fobttykcqg1f44srpcxl2ufeyokp",
        "image": "https://cdn-images.himalayas.app/fobttykcqg1f44srpcxl2ufeyokp",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-15",
        "title": "Senior Strategic CSM",
        "title_ar": "Senior Strategic CSM (أخرى)",
        "company": "Checkmarx",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Description Checkmarx is the AI-powered application security leader helping the world’s most security-conscious enterprises secure the software that powers modern life. For more than two decades, our unified platform and services have helped organizations protect human and AI-generated code from the first line through runtime, reducing risk across applications, cloud, and the software supply chain without slowing innovation.​ We’re trusted by 1,600+ customers in 70+ countries, including some of the largest enterprises and governments in the world. Guided by research-led innovation and a developer-first mindset, we help every developer, security team, and enterprise build software that is risk-free by design. Checkmarx is seeking a highly motivated and experienced Strategic Customer Success Manager (SCSM) to join our team. The SCSM will play a crucial role in helping customers achieve their desired outcomes by effectively using Checkmarx 's application security solutions. This role requires a blend of technical expertise, strategic thinking, and exceptional customer engagement skills. How will you make an impact? \n Provide expert deployment and operational guidance. \n Act as the primary technical liaison for customers. \n Collaborate with Support, Product Management, and other internal teams. \n Guide customers through onboarding and best practices. \n Monitor adoption and address hurdles to meet committed usage levels. \n Drive value-based activities to increase platform adoption",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Checkmarx. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Application-security"
        ],
        "applyUrl": "https://himalayas.app/companies/checkmarx/jobs/senior-strategic-csm",
        "logo": "https://cdn-images.himalayas.app/d7k165skcj4hxddyyoc82oq0ys3b",
        "companyLogo": "https://cdn-images.himalayas.app/d7k165skcj4hxddyyoc82oq0ys3b",
        "image": "https://cdn-images.himalayas.app/d7k165skcj4hxddyyoc82oq0ys3b",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-16",
        "title": "Appeals Coordinator II",
        "title_ar": "Appeals Coordinator II (برمجة وتكنولوجيا)",
        "company": "MedReview Inc.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$28.2 - $28.2 USD",
        "description": "Join a Leader in Healthcare Payment Integrity At MedReview , our mission is to bring accuracy, accountability, and clinical excellence to healthcare. As a recognized leader in payment integrity solutions, we specialize in DRG Validation, High-Cost Outlier Reviews, Readmission Reviews, and healthcare claims auditing that help ensure quality and financial accuracy across the healthcare system. We are seeking a detail-oriented and experienced Appeals Coordinator II to join our remote team. This role is ideal for a healthcare professional who thrives in a fast-paced environment, enjoys investigative work, and has a passion for resolving complex provider appeals and inquiries. What You'll Do As an Appeals Coordinator II, you will play a critical role in managing and resolving appeals, grievances, and provider complaints while ensuring compliance with client, state, and regulatory requirements. Key Responsibilities \n Prepare and distribute case files for External Reviews and State Fair Hearings. \n Manage and monitor appeals from non-participating providers. \n Research, investigate, and resolve provider appeals, grievances, and complaints. \n Draft professional, customized written responses to provider inquiries and complaints. \n Ensure all appeals and grievances are processed accurately and within required timelines. \n Collaborate with leadership, clinical staff, account managers, and other internal stakeholders to resolve complex cases. \n Track and maintain appeal and grievance rec",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة MedReview Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Appeals-coordinator",
            "Healthcare-appeals",
            "Provider-relations"
        ],
        "applyUrl": "https://himalayas.app/companies/medreview-inc/jobs/appeals-coordinator-ii",
        "logo": "https://cdn-images.himalayas.app/feub4ej9audnz4mie52x68razar5",
        "companyLogo": "https://cdn-images.himalayas.app/feub4ej9audnz4mie52x68razar5",
        "image": "https://cdn-images.himalayas.app/feub4ej9audnz4mie52x68razar5",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-17",
        "title": "Amgen Opportunities – NBMBAA Conference 2026",
        "title_ar": "Amgen Opportunities – NBMBAA Conference 2026 (تصميم وإبداع)",
        "company": "Amgen",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Career Category College Job Job Description Amgen is excited to attend the NBMBAA Annual Conference and Exposition in Los Angeles, CA this September! We invite you to visit us at booth #1523. At Amgen , our mission—to serve patients—drives everything we do. As one of the world’s leading biotechnology companies, we’re proud to collaborate globally to research, manufacture, and deliver innovative therapies that reach over 10 million patients worldwide. It’s time to build a career you can be proud of. Whether you’re an early-career professional seeking an internship or an experienced leader ready for your next opportunity, Amgen offers rewarding roles across the enterprise — from Digital Technology & Innovation, Strategy, and Finance to Marketing, Commercial Operations, Supply Chain, Manufacturing, Human Resources, and other critical functions that support our mission to serve patients. Whether you’re attending the NBMBAA Conference in person or engaging with us through the broader NBMBAA network, we’d love to connect. Please apply to this posting so our recruiting team can capture your information as part of our NBMBAA 2026 candidate community. To be considered for specific opportunities, we also encourage you to explore open positions and apply directly at . Be sure to select “NBMBAA” when asked “How Did You Hear About Us?” — this helps us connect your application to NBMBAA and prioritize you for recruiter follow-up. Featured Summer 2027 Internship programs: MBA Intern – Comme",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Amgen. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Recruitment",
            "Internship-programs",
            "Early-careers",
            "Biotech"
        ],
        "applyUrl": "https://himalayas.app/companies/amgen/jobs/amgen-opportunities-nbmbaa-conference-2026",
        "logo": "https://cdn-images.himalayas.app/ygg1esm3yk1c2zkiz3q48u0exbfh",
        "companyLogo": "https://cdn-images.himalayas.app/ygg1esm3yk1c2zkiz3q48u0exbfh",
        "image": "https://cdn-images.himalayas.app/ygg1esm3yk1c2zkiz3q48u0exbfh",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-18",
        "title": "Regulatory Affairs Specialist-Poland",
        "title_ar": "Regulatory Affairs Specialist-Poland (برمجة وتكنولوجيا)",
        "company": "Indero",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "Competitive",
        "description": "Description Due to ongoing global expansion, Indero is looking to hire a Regulatory Affairs Specialist. In this position, you will be responsible for preparation and submission of part I and/or part II following EU CTR and other applications created within or outside of the company to ensure documentation comply with applicable regulations and guidelines and contractual timelines are met. You will provide leadership for assigned projects regarding all regulatory activities that lead to start up of clinical trials. ﻿Responsibilities: \n Preparation of regulatory documents, CTA packages, and submissions in assigned countries to ensure high quality standards \n Coordination of regulatory timelines and deadlines for all assigned projects planned for CTIS submissions. Includes oversight of EU (mainly), APAC, and North America submissions. \n Review of regulatory documents and submissions created outside of the company by subcontractors (eg, partner CROs, regulatory vendors) to ensure high quality standards before submission to CTIS \n Point of contact for Sponsors and subcontractors/project management teams for all aspects related to study regulatory submissions \n Preparation or review of country specific Patient Information Sheet/Informed Consent form documents. \n Preparation or review of study-specific templates of regulatory forms. \n Manages translation requests with vendor. \n Regulatory support and advice to project teams and key internal/external customers on local requirements a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Indero. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Regulatory-affairs",
            "Clinical-research",
            "Cro-regulatory-affairs"
        ],
        "applyUrl": "https://himalayas.app/companies/indero/jobs/regulatory-affairs-specialist-poland",
        "logo": "https://logo.clearbit.com/indero.com",
        "companyLogo": "https://logo.clearbit.com/indero.com",
        "image": "https://logo.clearbit.com/indero.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-19",
        "title": "Account Executive, Enterprise",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive, Enterprise)",
        "company": "Creatio",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Creatio is an AI CRM and workflow platform where people and AI agents work together — with no limits on users, agents, or scale. We help midsize and large organizations run customer workflows in the AI era. Headquartered in Boston, MA, with a global team and a large ecosystem of partners, Creatio serves thousands of customers in over 100 countries and automates tens of millions of workflows daily. Genuine care for our clients and partners is at the heart of our DNA. We’re proud to be recognized by top industry analysts as a Leader and Strong Performer in multiple Gartner and Forrester reports. In 2025, Creatio was named to Inc.’s Best Workplaces list, recognizing our commitment to employee wellbeing and a strong workplace culture.Who We’re Looking For:We are seeking passionate, proactive, and results-driven Account Executive, Enterprise who is excited to contribute to a fast-growing and innovative company. The ideal candidate is someone who thrives in a dynamic environment, embraces challenges as opportunities, and is motivated to bring fresh ideas to the table.You should be a strong team player with excellent communication skills, eager to learn and grow, and ready to make an impact from day one. Most importantly, we’re looking for individuals who share our values, believe in collaboration, and want to be part of a workplace where creativity, accountability, and ambition are celebrated.The role is based remotely in the USA. Responsibilities:Deliver against revenue targets an",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Creatio. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales-department",
            "Enterprise-sales",
            "Saas-sales",
            "Account-executive"
        ],
        "applyUrl": "https://himalayas.app/companies/creatio/jobs/account-executive-enterprise",
        "logo": "https://cdn-images.himalayas.app/oabek3oyvk5c9uxnqrmqufwb4p4k",
        "companyLogo": "https://cdn-images.himalayas.app/oabek3oyvk5c9uxnqrmqufwb4p4k",
        "image": "https://cdn-images.himalayas.app/oabek3oyvk5c9uxnqrmqufwb4p4k",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-20",
        "title": "Senior Python Data Scraping Engineer (Freelance)",
        "title_ar": "مهندس ومطور برمجيات (Senior Python Data Scraping Engineer (Freelance))",
        "company": "Mindrift",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Greece",
        "location_ar": "Greece",
        "salary": "$40 - $40 USD",
        "description": "Mindrift is looking for highly skilled Vibecode specialists to join the Tendem project () and drive specialized data scraping workflows for real-world use cases. Mindrift is looking for highly skilled Senior Python Data Scraping Engineers to join the Tendem project and drive specialized data scraping workflows for real-world applications. In this role, you'll apply your expertise in web scraping, data extraction, and data processing to deliver accurate, reliable, and high-quality results. This part-time remote opportunity is ideal for technical professionals with hands-on experience in web scraping, data extraction and processing. What We Do The Mindrift platform connects specialists with innovative technology projects. Our mission is to help develop high-quality AI technologies by combining real-world expertise from professionals across the globe with advanced AI development efforts. About the Role This is a freelance role for a Tendem project. As a Senior Python Data Scraping Engineer , you'll handle data scraping tasks requiring technical precision for web extraction and processing, utilizing tools such as Apify, OpenRouter, and other technologies, alongside your own technical expertise and approaches. Key Responsibilities \n Own end-to-end data extraction workflows across complex websites, ensuring complete coverage, accuracy, and reliable delivery of structured datasets. \n Leverage available tools and custom workflows to accelerate data collection, validation, and task ex",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mindrift. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Python-development",
            "Web-scraping"
        ],
        "applyUrl": "https://himalayas.app/companies/mindrift/jobs/senior-python-data-scraping-engineer-freelance-8643858355",
        "logo": "https://cdn-images.himalayas.app/xq3hn9b4xx58golfhgf8twc4izd7",
        "companyLogo": "https://cdn-images.himalayas.app/xq3hn9b4xx58golfhgf8twc4izd7",
        "image": "https://cdn-images.himalayas.app/xq3hn9b4xx58golfhgf8twc4izd7",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789355437-21",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-22",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-23",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-24",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-25",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-26",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-27",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-28",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-29",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-30",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-31",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-32",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-33",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-34",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-35",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-36",
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
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789355437-37",
        "title": "AI Research Engineer (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (AI Research Engineer (f/m/d))",
        "company": "Sonarsource",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Employee / Full-Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bochum",
        "location_ar": "Bochum",
        "salary": "Competitive",
        "description": "Position description \n At Sonar, we are seeking an innovative Machine Learning Scientist to join our Data & AI team and pioneer the next generation of our code analysis engine. You will be at the forefront of applying cutting-edge AI and Large Language Model (LLM) techniques to the complex domain of source code. Your work will directly shape our products, pushing the boundaries of static analysis to help millions of developers write better, more secure code. If you are driven to solve real-world problems by turning state-of-the-art research into practical, high-impact solutions, this is the role for you. \n What you will do \n Spearhead Research & Innovation: Stay on the cutting edge of ML, Deep Learning, and LLMs, specifically their application to the Software Development Lifecycle (SDLC), and identify novel opportunities to enhance our products. \n Develop Advanced AI Models: Design, prototype, and validate novel ML models that identify and resolve complex bugs, vulnerabilities, and code smells, going beyond the capabilities of traditional static analysis. \n Build LLM-Powered Features: Develop and implement advanced LLM-based solutions, including Retrieval-Augmented Generation (RAG) for contextual code analysis, fine-tuning models on proprietary codebases, and exploring agentic systems for automated code remediation. \n Engineer Data Pipelines: Build and manage robust data pipelines to gather, process, and version massive code-centric datasets required for training and evaluati",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sonarsource. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data & agentic"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sonarsource/ai-research-engineer-bochum-139653",
        "logo": "https://logo.clearbit.com/sonarsource.com",
        "companyLogo": "https://logo.clearbit.com/sonarsource.com",
        "image": "https://logo.clearbit.com/sonarsource.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-38",
        "title": "Senior Backend Engineer (Go) (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Backend Engineer (Go) (m/w/d))",
        "company": "Recare Deutschland GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote job",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "About us As one of Germany's leading HealthTech companies, we are transforming discharge management by making it technology driven, patient centered, and free of bureaucracy. In addition to our market leading SaaS platform, we are developing AI solutions that radically simplify processes in clinics and for aftercare providers, relieve the burden on healthcare professionals, and put the focus back on patients. We currently connect over two thirds of all German hospitals with more than 650 rehabilitation clinics, and over 25,000 care and homecare providers. With around 120 employees from a broad range of nations, we are continuing to grow and are looking for people with the right attitude who want to improve the healthcare system alongside us. We're now going far beyond our core business, aiming to eliminate bureaucracy and admin in hospitals with a whole portfolio of AI products. What you'll work on Aftercare provider operations are becoming increasingly complex and data driven. Bringing change is very hard, but we're not afraid. You'll build features that help care facilities, rehabilitation centers, and healthcare chains better allocate resources, unlock actionable insights from patient data, and integrate Recare seamlessly into their internal systems. Our ambitious roadmap focuses on expanding our marketplace's receiver side with enhanced analytics tools, B2C platforms connecting providers directly with patients, expanded API integrations, and much more. Secure communicatio",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Recare Deutschland GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/recare-deutschland-gmbh/remote-senior-backend-engineer-go-berlin-391760",
        "logo": "https://logo.clearbit.com/recaredeutschlandgmbh.com",
        "companyLogo": "https://logo.clearbit.com/recaredeutschlandgmbh.com",
        "image": "https://logo.clearbit.com/recaredeutschlandgmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-39",
        "title": "Principal Analytics Engineer (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Principal Analytics Engineer (f/m/d))",
        "company": "Trusted Shops SE (DE)",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "At Trusted Shops, we’re shaping Europe’s Community of Trust – a space where Businesses and Consumers connect with confidence, transparency, and security. Every day, millions of Users and thousands of Companies across Europe trust us to deliver safe, reliable, and seamless digital experiences. Data Services is shifting from being strong in raw data to reliably delivering prepared, standardized data products as the foundation for self-service reporting, product-facing APIs (Metrics-as-a-Service), and AI/agent access (e.g. via MCP). We are building these products inside one shared Data Lakehouse, where multiple domain teams build to a common standard. To make that real, we need someone to set the technical bar. As Principal Analytics Engineer (f/m/d) you define the lakehouse architecture and the standards that let teams move fast without fragmenting, you embed in the Product Data Domain to ship genuine data products, and you raise the craft of everyone around you. This is a hands-on technical leadership role with real autonomy. You shape how we build, not just execute a backlog. To join our Data Service Domain, we are looking for a: Principal Analytics Engineer (f/m/d) Cologne (hybrid) or Berlin (remote) | Permanent Contract (Full-time) Your Key Responsibilities: Architecture, with the teams . Define and evolve the lakehouse architecture (S3 + Apache Iceberg + Athena + dbt): table and layer design, partitioning and compaction, schema evolution, multi-team isolation, and unified ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusted Shops SE (DE). تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusted-shops-se-de/principal-analytics-engineer-berlin-225855",
        "logo": "https://logo.clearbit.com/trustedshopssede.com",
        "companyLogo": "https://logo.clearbit.com/trustedshopssede.com",
        "image": "https://logo.clearbit.com/trustedshopssede.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-40",
        "title": "Senior Product Performance Analyst (m/f/d)",
        "title_ar": "Senior Product Performance Analyst (m/f/d) (مالية ومحاسبة)",
        "company": "Trusted Shops SE (DE)",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote job",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "About Trusted Shops Trusted Shops creates digital trust between people, businesses, and AI Agents. Every day, millions of consumers rely on our solutions to make confident online decisions, while businesses use our products to build trust, strengthen customer relationships, and grow sustainably. With around 700 colleagues across Europe, more than 25,000 online shops, and over 40 million consumers in our Community of Trust, we are helping shape a safer and more transparent digital world. But trust is not only at the heart of our products, it also shapes how we work together. We believe in collaboration, ownership, and the freedom to do your best work through a flexible hybrid work culture. Join us and help create a digital world where trust, transparency, and meaningful connections drive every interaction. To strengthen our Product Department, we are looking for a Senior Product Performance Analyst (m/f/d) (Hybrid in Cologne or Berlin / Full-time / Permanent contract) As a Senior Product Performance Analyst, you'll turn scattered data into clear direction: unified KPIs, consistent dashboards, and actionable insights that influence product strategy and prioritization. Working closely with Product Managers and Product leadership, you'll help create a scalable data foundation that enables measurable decision-making across our Product organization. Your work will ensure that product investments, outcomes, and customer impact are guided by reliable data and transparent performance ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Trusted Shops SE (DE). تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/trusted-shops-se-de/remote-senior-product-performance-analyst-cologne-163841",
        "logo": "https://logo.clearbit.com/trustedshopssede.com",
        "companyLogo": "https://logo.clearbit.com/trustedshopssede.com",
        "image": "https://logo.clearbit.com/trustedshopssede.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-41",
        "title": "Senior HR Generalist (2-year contract)",
        "title_ar": "Senior HR Generalist (2-year contract) (موارد بشرية وإدارة)",
        "company": "TransPerfect",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "eu_uk",
        "type": "Mid, fulltime fixed term",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "We are currently looking for an HR Generalist join our international HR Department, and provide support to our offices in Germany. The post-holder is responsible to provide a robust HR service and support to the Human Resources Department’s daily operations: personnel administration, benefits, payroll etc. He/she mainly works within a framework of established HR processes, procedures and standard work instructions as determined by the centralised HR department and applicable local country legislations. Be responsible for all aspect of the administration involved in the employee life cycle including procedures in TransPerfect’s offices in Germany Partner with the recruitment and relevant department to best coordinate employees’ onboarding Gather required onboarding and separation paperwork in line with local regulations and Company procedures and policie Manage employees’ absence and leave and coordinate submission of necessary documentation for payroll Coordinate relevant training programs Support the implementation and monitoring of performance evaluation programs Implement and localize personnel policies and procedures and maintain compliance with country regulations Have a robust understanding and practical knowledge of Company processes and policies to advise employees and managers Manage the processes for relocations and transfers including necessary visa applications, payroll transfers, etc. Maintain and implement HRIS (i.e. Workday) and employee file integrity Run and ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة TransPerfect. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/transperfect/senior-hr-generalist-2-year-contract-berlin-394328",
        "logo": "https://logo.clearbit.com/transperfect.com",
        "companyLogo": "https://logo.clearbit.com/transperfect.com",
        "image": "https://logo.clearbit.com/transperfect.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-42",
        "title": "Working Student – Graphic Design E-Commerce (all genders)",
        "title_ar": "Working Student – Graphic Design E-Commerce (all genders) (برمجة وتكنولوجيا)",
        "company": "Niboline Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Entry, Intern, Full or part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Purpose? You will be part of our in-house Creative Team and help create visual content for our e-commerce brands and products. From packaging and product images to Amazon listings and social media content, your designs will be seen by thousands of customers across Europe. Expected results for this role in the first 12 months? Typical job ads are boring. We'd rather tell you directly what you will actually be working on. As a Working Student Graphic Designer, you will support our Creative Team across several brands and products. Your responsibilities will include: Create and adapt packaging designs, user manuals, and product illustrations Retouch and edit product photos in Adobe Photoshop Design marketing graphics and product images for Amazon and other e-commerce platforms Adapt existing designs and content for different products, languages, and markets Support the creation of visuals for social media and other marketing materials Use modern AI tools to support image creation, editing, and creative workflows Contribute ideas and help maintain consistent branding across our products and brands Required skills and experience? You don't need years of professional experience. This is a working student position, and we expect you to still be learning. What matters to us is that you already have a good design foundation and want to develop your skills in a professional environment. You're currently studying graphic, media, communication design, or a comparable field You already hav",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Niboline Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Graphic design",
            "Design",
            "Product modelling",
            "3d rendering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/niboline-gmbh/working-student-graphic-design-e-commerce-all-genders-berlin-195997",
        "logo": "https://logo.clearbit.com/nibolinegmbh.com",
        "companyLogo": "https://logo.clearbit.com/nibolinegmbh.com",
        "image": "https://logo.clearbit.com/nibolinegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-43",
        "title": "Werkstudent Strategie & Business Development (m/w/d)",
        "title_ar": "Werkstudent Strategie & Business Development (m/w/d) (المبيعات والنمو)",
        "company": "CKM Group",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Entry, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Intro Empfehlungsbonus! ❤ Kennst du jemanden, der/die perfekt zu dieser Stelle passt? Dann empfiehl uns die Person. Startet deine Empfehlung erfolgreich dieses Werkstudium bei GreenMedical, erhältst du als Dankeschön einen 100-€ Wunschgutschein .* Zur CKM Group gehören eine Vielzahl von Unternehmen sowie eine Klinik, die alle dazu beitragen, unserer Vision von einer gesünderen Welt näher zu kommen. Unser Ziel ist es, durch präventive Dienstleistungsmedizin, eHealth und Public Health eine führende und wegweisende Rolle im Gesundheitssystem von morgen einzunehmen. Dabei setzen wir auf smarte Logistik, Digitalisierung, Diagnostik und individuelle Prävention. Wir denken Gesundheitsversorgung und Diagnostik neu und hinterfragen dazu stets den Status Quo. Ein neuer Pfeiler dieser Vision ist GreenMedical : Mit unserem telemedizinischen Service bieten wir einen einfachen und sicheren Zugang zu medizinischem Cannabis, um Symptome zu lindern und die Lebensqualität zu verbessern. Darüber hinaus unterstützen wir Patienten bereits heute mit modernen Lösungen zur medizinisch begleiteten Gewichtsreduktion. Perspektivisch planen wir, unser Angebot um weitere Präventions- und Gesundheitsleistungen zu erweitern, um noch mehr Menschen individuell auf ihrem Weg zu mehr Gesundheit und Lebensqualität zu begleiten. Du willst im Venture Development durchstarten und konntest bereits erste Erfahrungen sammeln? Dann bewirb dich jetzt für ein Werkstudium und werde ein zentraler Akteur in der Entwicklung",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة CKM Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Join",
            "Business development",
            "Venture",
            "Development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ckm-group/werkstudent-strategie-business-development-berlin-130141",
        "logo": "https://logo.clearbit.com/ckmgroup.com",
        "companyLogo": "https://logo.clearbit.com/ckmgroup.com",
        "image": "https://logo.clearbit.com/ckmgroup.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-44",
        "title": "Working Student HR & Recruitment (m/f/d)",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Working Student HR & Recruitment (m/f/d))",
        "company": "Ecovacs Europe Gmbh",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Student, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf",
        "location_ar": "Düsseldorf",
        "salary": "Competitive",
        "description": "Your Responsibilities We are looking for a motivated Working Student (m/f/d) to join our HR team in Düsseldorf and support us across recruitment, HR administration, and employee engagement activities. This is a great opportunity for a student who already has some practical experience in HR and recruitment and would like to gain broader hands-on experience in a dynamic international working environment. Your Responsibilities Recruitment & Talent Acquisition Support the HR team throughout the recruitment process, from job posting to interview coordination Create, publish, and maintain job advertisements across relevant recruitment platforms Review and screen incoming CVs and applications based on defined criteria Conduct initial candidate screening calls and coordinate next steps with the HR team Support candidate communication and provide a positive candidate experience Assist with preparing interview materials Support onboarding activities for new employees where required HR Administration Provide day-to-day administrative support to the HR team Process and post HR-related invoices and assist with tracking and documentation. Assist with various administrative tasks and HR projects as required Employee Engagement & HR Events Support the planning and organization of HR activities, employee events, workshops, and team initiatives Assist with event logistics, communication, invitations, and coordination Your profile Currently enrolled as a student at a university and eligible to ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ecovacs Europe Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Recruitment",
            "Hr"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ecovacs-europe-gmbh/working-student-hr-recruitment-dusseldorf-1228",
        "logo": "https://logo.clearbit.com/ecovacseuropegmbh.com",
        "companyLogo": "https://logo.clearbit.com/ecovacseuropegmbh.com",
        "image": "https://logo.clearbit.com/ecovacseuropegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-45",
        "title": "(Senior) Global Product & Brand Manager (m/w/d) | Hair Professional",
        "title_ar": "مدير وقائد فريق ((Senior) Global Product & Brand Manager (m/w/d) | Hair Professional)",
        "company": "New Flag GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "Das erwartet Dich bei uns Im Produktmanagement für unsere professionelle Hair-Care-Marke Urban Alchemy verantwortest Du die Entwicklung, Steuerung und Weiterentwicklung unseres Produktportfolios – von der Idee bis zur Kommerzialisierung. Du analysierst Markt-, Preis- und Wettbewerbsdaten, steuerst Produktentwicklungen und arbeitest eng mit Lieferanten, Herstellern, R&D und internationalen Vertriebspartnern zusammen. Gleichzeitig bringst Du Deine kreativen Ideen in die Produktkommunikation ein und verantwortest gemeinsam mit den relevanten Schnittstellen die Konzeption und Durchführung von Kommunikationskampagnen. Als (Senior) Global Product & Brand Manager berichtest Du direkt an den Vice President Own Brands und führst zwei Direct Reports. Deine Aufgaben im Detail: Produktmanagement & Portfolio-Strategie: Eigenständige Steuerung des gesamten Produktlebenszyklus - von der Ideenfindung über Formulierungs- und Packaging-Briefings bis zur Markteinführung; Verantwortung für Sortimentsgestaltung, Produktinnovation und Portfolio-Bereinigung Lieferanten- & Produktionsmanagement: Aufbau und Pflege von Lieferantenbeziehungen, eigenständige Koordination von Produktentwicklungsprozessen mit Herstellern sowie Verhandlung von Preiskalkulationen, Mindestabnahmemengen und Produktionskonditionen Markt- und Wettbewerbsanalyse: Durchführung von Research, Markt-, Preis-, Konsumenten-, Trend- und Wettbewerbsanalysen sowie Ableitung konkreter Handlungsempfehlungen für die Produkt- und Sortimentsp",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة New Flag GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Produktmanagement",
            "Produktentwicklung",
            "Markenmanagement",
            "Produktinnovation"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/new-flag-gmbh/senior-global-product-brand-manager-hair-professional-munchen-371785",
        "logo": "https://logo.clearbit.com/newflaggmbh.com",
        "companyLogo": "https://logo.clearbit.com/newflaggmbh.com",
        "image": "https://logo.clearbit.com/newflaggmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-46",
        "title": "Head of Production (m/f/x)",
        "title_ar": "Head of Production (m/f/x) (أخرى)",
        "company": "Charlesundcharlottegmbh",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Your tasks You will develop production at C&C, both strategically and operationally: our processes, standards and setups. As Skill Lead, you will take personal and professional responsibility for the production team, support the development of your colleagues and ensure consistently high quality standards. You will take on selected productions yourself as a Producer, making sure that the idea, quality, timing and budget come together. You will conceptualise and own our AI-enabled production system: selecting the right stack and bringing it into production together with our internal AI team. It will be up to you to determine where and when its use makes sense. You will calculate fixed-price productions, protect the margin and decide where the budget can make the greatest difference. You will expand our partner network for high-end productions and ensure that our external partners meet our quality standards. Your profile You have solid experience in producing social and CTV content and understand the entire process from the initial idea to the final asset. You have experience in the professional leadership and development of production teams and know how to provide direction, feedback and quality standards. You have a clear understanding of how production processes, tools and setups can be developed efficiently and sustainably, as well as solid experience with AI-enabled production and post-production processes. You have a clear point of view on when AI, a hybrid setup or a ful",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Charlesundcharlottegmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/charlesundcharlottegmbh/head-of-production-berlin-213174",
        "logo": "https://logo.clearbit.com/charlesundcharlottegmbh.com",
        "companyLogo": "https://logo.clearbit.com/charlesundcharlottegmbh.com",
        "image": "https://logo.clearbit.com/charlesundcharlottegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-47",
        "title": "Werkstudent Marketing-Allrounder (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Werkstudent Marketing-Allrounder (m/w/d))",
        "company": "Membrain",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Student, Working student, Full or part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München-Unterhaching",
        "location_ar": "München-Unterhaching",
        "salary": "Competitive",
        "description": "Ihre Aufgaben Unterstützung unseres Marketing-Teams bei vielfältigen Aufgaben u.a.: Planung, Organisation und Durchführung von Einladungs- und Kommunikationskampagnen für Messen, Events und Webinare Konzeption und Umsetzung von Online-Marketing- und Social-Media-Kampagnen Erstellung und Pflege zielgruppengerechter Contents Unterstützung im Leadmanagement, insbesondere bei der Pflege und Strukturierung von Leads im CRM Analyse, Auswertung und Aufbereitung relevanter Kennzahlen (z. B. Google Ads, Online-Marketing-Aktivitäten, Webinare) Ihr Profil Eingeschriebener Student (m/w/d) im Bereich Marketing, Kommunikationswissenschaften, BWL oder einem vergleichbaren Studiengang Erste praktische Erfahrungen mit Content-Management-Systemen (z. B. TYPO3 oder WordPress) Hohe Eigeninitiative, eine strukturierte und gewissenhafte Arbeitsweise sowie eine schnelle Auffassungsgabe Verfügbarkeit von 15–20 Stunden pro Woche Sehr gute Deutschkenntnisse in Wort und Schrift Das bieten wir Wir haben flexible Arbeitszeiten, denn Ihr Studium hat für uns Priorität. Wir übernehmen Ihr MVG-Ermäßigungsticket (bis zu 50 € pro Monat). Bei uns erwartet Sie eine offene, internationale Arbeitsatmosphäre mit Raum für eigene Ideen und echte Mitgestaltung – in einem Unternehmen, das flache Hierarchien, kurze Entscheidungswege sowie eine Duz-Kultur lebt. Sie erreichen uns bequem dank S-Bahn-Nähe und Unternehmensparkplätzen. Sie sind bei uns rundum gut versorgt mit kostenlosen Heiß- und Kaltgetränken, frischem Obst",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Membrain. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Werkstudent",
            "Online-marketing",
            "Kampagnenmanagement",
            "Leadmanagement"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/membrain/werkstudent-marketing-allrounder-munchen-unterhaching-7506",
        "logo": "https://logo.clearbit.com/membrain.com",
        "companyLogo": "https://logo.clearbit.com/membrain.com",
        "image": "https://logo.clearbit.com/membrain.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-48",
        "title": "Senior Photonik-Charakterisierungsingenieur (m/w/d)",
        "title_ar": "Senior Photonik-Charakterisierungsingenieur (m/w/d) (أخرى)",
        "company": "pmX Group",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "Deine Aufgaben Durchführung von High-Speed-Charakterisierungsmessungen im GHz-Bereich an TFLN-PICs und Photodioden Durchführung experimenteller Verifikationen und statistischer Analysen zur Ermittlung von Performance-Parametern Entwicklung, Aufbau und Optimierung optischer und RF-Testaufbauten inklusive Probe-Station-Konfiguration und Kalibrierung Entwicklung von Python-, LabVIEW- und MATLAB-Tools zur Messautomatisierung, Datenerfassung und Datenanalyse Mitwirkung an der hybriden Photodioden-PIC-Integration von Designkoordination bis Validierung und Packaging Rückführung von Messergebnissen in Design, Fertigung und Technologie-Roadmap Planung und Priorisierung von Charakterisierungskampagnen Koordination externer Lieferanten, Dienstleister und Forschungspartner Betreuung von Junior Engineers und Technikern bei Tests, Datenerfassung und Analyse Sicherstellung von Laborsicherheit und Dokumentation von Methoden, Code und Ergebnissen Dein Profil Masterabschluss oder Promotion in Elektrotechnik, Photonik oder verwandtem Fachgebiet Mindestens fünf Jahre relevante Erfahrung in Industrie oder Forschung, davon mindestens ein Jahr im High-Speed-Photonic-Testing im GHz-Bereich Kenntnisse der LNOI-Bauteilphysik und Anwendungen in High-Speed-Modulation, Detektion und RF Signal Integrity Praktische Erfahrung mit TFLN, Photodioden-Charakterisierung und hybrider photonisch-elektronischer Integration Erfahrung mit VNAs, High-Speed-Oszilloskopen, Optical Spectrum Analyzern, RF-Probes und Tunab",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة pmX Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pmx-group/senior-photonik-charakterisierungsingenieur-stuttgart-434457",
        "logo": "https://logo.clearbit.com/pmxgroup.com",
        "companyLogo": "https://logo.clearbit.com/pmxgroup.com",
        "image": "https://logo.clearbit.com/pmxgroup.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-49",
        "title": "Senior Full Stack Engineer — TypeScript / Next.js (100%, m/f/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Full Stack Engineer — TypeScript / Next.js (100%, m/f/d))",
        "company": "LeaseTeq",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "LTQ-DE | Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Your mission You are the architect and builder of the customer-facing side of the LEASETEQ platform in Berlin, and the owner of our German market on it. You design the digital application journey and the portals that carry real customers, dealers and operations teams at production scale, and you make sure German credit rules, compliance requirements and dealer flows are represented correctly in a platform that also serves Switzerland and Austria. You work in a small, senior team where your decisions have direct product impact, and you naturally bring AI tooling into your daily engineering workflow without being asked. What you will do Own the German market on our customer-facing platform: credit and compliance requirements, dealer flows, German copy, and the acceptance criteria that make them verifiable Design and build the digital application journey — multi-step forms, validation, resumable state, document upload, KYC steps and the unhappy paths users actually hit Build and maintain the customer, dealer and operations portals, including the operations board and the logic that decides where a case belongs Write the use-case and API layers behind the journey to our clean-architecture standard — this is a full-stack role, not a UI role Own field-level mapping into the CRM and the Flowable-based process engine — beneficial ownership, source of funds, origin of income, additional persons — where a wrong key is a compliance defect, not a cosmetic one Author specification-driven c",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة LeaseTeq. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Typescript",
            "Next.js / nextjs",
            "Javascript"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/leaseteq/senior-full-stack-engineer-typescript-nextjs-100-ltq-de-berlin-142987",
        "logo": "https://logo.clearbit.com/leaseteq.com",
        "companyLogo": "https://logo.clearbit.com/leaseteq.com",
        "image": "https://logo.clearbit.com/leaseteq.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-50",
        "title": "Senior Associate Operations (m/f/d)",
        "title_ar": "Senior Associate Operations (m/f/d) (أخرى)",
        "company": "Huz",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "Position Do you have foundational experience from consulting projects in the field of Operational Excellence and are ready for the next step in your career? Do you want to develop solutions together with clients that truly make a difference? Do you want to grow personally alongside us and help make H&Z even more successful? Then we have exactly the right position for you: SENIOR ASSOCIATE OPERATIONS Any time, permanent, frequently at our clients' sites during the week, typically in our offices in Munich, Cologne or Hamburg on Fridays Your mission As a (Senior) Associate, you shape change, get to the heart of processes and contribute to sustainable improvements at the client You are part of the project teams on-site at our national and international clients, taking independent ownership of project modules in the field of Operational Excellence, particularly in manufacturing industries (e.g. mechanical and plant engineering, automotive) You analyse value chains and business processes to identify efficiency potential Building on this, you develop tailored improvement concepts applying Lean, Six Sigma, TPM or similar methodologies You support the development of long-term client relationships and build a deep understanding of our clients' requirements and challenges in the operations environment You work closely with project managers as well as internal and external stakeholders You are eager to look beyond your immediate scope and contribute to subject-matter topics in adjacent a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Huz. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/huz/senior-associate-operations-munchen-409806",
        "logo": "https://logo.clearbit.com/huz.com",
        "companyLogo": "https://logo.clearbit.com/huz.com",
        "image": "https://logo.clearbit.com/huz.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-51",
        "title": "(Senior) Expert Software Sourcing & Value Creation (m/f/d)",
        "title_ar": "(Senior) Expert Software Sourcing & Value Creation (m/f/d) (برمجة وتكنولوجيا)",
        "company": "Huz",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "München",
        "location_ar": "München",
        "salary": "Competitive",
        "description": "Position Do you have a clear ambition to shape IT procurement and existing IT spend in a way that optimizes demand, specifications, and commercial models, resulting in P&L-relevant savings? And would like to become part of our IT Value Creation Team? Then we have exactly the right role for you: (SENIOR) EXPERT SOFTWARE SOURCING & VALUE CREATION Start date flexible, permanent position, during the week project-related at our clients’ sites, and typically on Fridays in our offices in Munich, Cologne, or Hamburg Your mission In this role, you analyze our clients’ existing software spend, license inventories, and contract structures, deriving concrete savings potential You prepare complex new procurements and contract renewals with enterprise software and SaaS providers such as SAP, Microsoft, Oracle, Salesforce, Adobe, ServiceNow, or comparable vendors Together with IT, business departments, and program leads, you critically challenge requirements, user groups, license types, modules, add-ons, roll-out plans, and growth assumptions A key part of your work is developing target volumes, licensing and contract models, as well as negotiation strategies for renewals and new procurements You assess license metrics, entitlements, usage rights, edition logic, and contractual mechanisms such as minimum commitments, price increases, true-ups, audit rights, termination periods, and contract terms Working closely with our procurement experts, you translate business and technical requirements",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Huz. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/huz/senior-expert-software-sourcing-value-creation-munchen-154400",
        "logo": "https://logo.clearbit.com/huz.com",
        "companyLogo": "https://logo.clearbit.com/huz.com",
        "image": "https://logo.clearbit.com/huz.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-52",
        "title": "Senior SAP Consultant Migration & SDT (m/w/d)",
        "title_ar": "Senior SAP Consultant Migration & SDT (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Gambit",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Deine Aufgaben Du planst und steuerst Lean Selective Data Transition (SDT) Projekte im SAP S/4HANA-Umfeld. Du entwickelst Migrationsstrategien und definierst den Umfang der zu migrierenden Daten und Objekte. Du konzipierst und begleitest Datenmigrationen mit SAP-Standardwerkzeugen wie dem SAP Migration Cockpit. Du planst und koordinierst die Überleitung von Stamm-, Bewegungs- und historischen Daten sowie Business Partnern. Du verantwortest Testmigrationen, Datenvalidierungen und Reconciliation-Prozesse. Du begleitest Cutover, Go-live und Hypercare-Phasen und sorgst für einen reibungslosen Übergang. Dein Profil Mehrjährige Erfahrung in SAP-Datenmigrationsprojekten und SAP S/4HANA-Transformationen Kenntnisse in Lean Selective Data Transition (SDT) oder vergleichbaren Transformationsansätzen Erfahrung mit dem SAP Migration Cockpit und Datenübernahmeprozessen Gute Kenntnisse der SAP-Geschäftsprozesse, insbesondere in FI/CO, MM oder SD Know-how in den Bereichen Business Partner, CVI, Datenqualität, Testing und Cutover Strukturierte Arbeitsweise sowie ausgeprägte Kommunikations- und Beratungsfähigkeiten Warum wir? Was Du unter anderem von uns erwarten kannst: Attraktives Gehalt und viele Zusatzleistungen Sicherer Arbeitsplatz in einem wachstumsstarken Unternehmen Flexible Arbeitszeiten und Homeoffice-Option Angenehme Arbeitsatmosphäre und gute Führungskultur (kaum messbare Mitarbeiterfluktuation) Flache Hierarchien und kurze Entscheidungswege Firmenwagen der Wahl (eigene E-Tankstel",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Gambit. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sap sdt",
            "Sap data migration"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/gambit/senior-sap-consultant-migration-sdt-deutschland-463257",
        "logo": "https://logo.clearbit.com/gambit.com",
        "companyLogo": "https://logo.clearbit.com/gambit.com",
        "image": "https://logo.clearbit.com/gambit.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-53",
        "title": "Praktikum Digital Design & Web (m/w/d) Medieninformatik | Kommunikationsdesign | Webdesign mit Perspektive auf eine anschließende Werkstudententätigkeit",
        "title_ar": "Praktikum Digital Design & Web (m/w/d) Medieninformatik | Kommunikationsdesign | Webdesign mit Perspektive auf eine anschließende Werkstudententätigkeit (برمجة وتكنولوجيا)",
        "company": "Hcsm Steuerberatung Gmbh",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Wiesbaden",
        "location_ar": "Wiesbaden",
        "salary": "Competitive",
        "description": "Ihre Aufgaben Gestaltung und Weiterentwicklung von Webseiten und Landingpages Arbeiten mit WIX und vergleichbaren Website-Tools Erstellung von Grafiken und digitalen Visuals Mitarbeit an unserem digitalen Markenauftritt Einsatz der Adobe Creative Cloud Test und Einsatz von KI-Tools für Webdesign ( z.B Lovable ), Content und Gestaltung Umsetzung kleinerer Digital- und Designprojekte Ihr Profil Studium ab dem 3. Fachsemester , z. B. Medieninformatik, Kommunikationsdesign, Mediendesign oder vergleichbar erste Erfahrung in Web- und/oder Grafikdesign Kenntnisse in Adobe Creative Cloud Erfahrung mit WIX oder vergleichbaren Website-Systemen Interesse an KI und neuen digitalen Tools gutes Gespür für modernes Design und Nutzerfreundlichkeit Lust, eigene Ideen einzubringen und Dinge auszuprobieren Warum wir? Wir suchen ausdrücklich jemanden, der längerfristig mit uns arbeiten möchte . Du startest mit einem mindestens sechswöchigen Vollzeitpraktikum . Wenn es für beide Seiten passt, möchten wir die Zusammenarbeit anschließend als Werkstudententätigkeit parallel zu deinem Studium fortsetzen. Klingt nach dir? Dann schick uns deinen Lebenslauf und gerne auch Arbeitsproben, ein Portfolio, Websites, Designs oder Studienprojekte . Uns interessiert nicht nur, was du studierst – sondern vor allem, was du daraus machst! Find more English Speaking Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Hcsm Steuerberatung Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Wix",
            "Grafiken",
            "Adobe creative cloud"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hcsm-steuerberatung-gmbh/praktikum-digital-design-web-medieninformatik-kommunikationsdesign-webdesign-mit-perspektive-auf-eine-anschliessende-werkstudententatigke-240394",
        "logo": "https://logo.clearbit.com/hcsmsteuerberatunggmbh.com",
        "companyLogo": "https://logo.clearbit.com/hcsmsteuerberatunggmbh.com",
        "image": "https://logo.clearbit.com/hcsmsteuerberatunggmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-54",
        "title": "Senior Technical Product Manager (f/m/x)",
        "title_ar": "مدير وقائد فريق (Senior Technical Product Manager (f/m/x))",
        "company": "exmox",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Your Mission This is a company built for growth. When you join exmox, you're stepping onto a global, highly competitive playing field, solving real problems in environments that push you beyond your comfort zone. You'll work on real systems at a big scale, building high-performing consumer products used by millions. We move fast, cut the noise, and focus on what actually matters, because in our industry, speed wins. We're rapidly scaling one of the most exciting innovations in mobile gaming: a rewarded user engagement and acquisition platform that helps publishers acquire and retain players through rewarding experiences. Our products are data-driven by design, powered by event-driven architectures, complex business logic, and quick feedback loops, with decisions informed by data and experimentation, not gut feeling. As Senior Technical Product Manager (f/m/x) , this role isn't just about shipping features, it's about building products that perform. Product at exmox means understanding the bigger technical and business picture, working closely with Engineering, including how we use AI to move faster and cut down on repetitive work, and turning strategy into precise, technically grounded product decisions that create real value. Every change you ship affects millions of users, and that responsibility is what makes working at exmox exciting. If you're energized by fast-moving markets, complex technical systems, and the challenge of building products that perform at scale, we wan",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة exmox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/exmox/senior-technical-product-manager-hamburg-88855",
        "logo": "https://logo.clearbit.com/exmox.com",
        "companyLogo": "https://logo.clearbit.com/exmox.com",
        "image": "https://logo.clearbit.com/exmox.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-55",
        "title": "Senior Fraud & Risk Analyst (f/m/x)",
        "title_ar": "Senior Fraud & Risk Analyst (f/m/x) (مالية ومحاسبة)",
        "company": "exmox",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Your Mission exmox is an organization designed for rapid expansion, prioritizing results over complacency. By joining us, you enter a high-stakes global arena, tackling complex challenges that demand continuous professional growth. We operate with high velocity, eliminating distractions to concentrate on critical outcomes - as efficiency is our competitive edge. Our focus remains on developing top-tier consumer products within the mobile gaming sector, specifically driving innovation through rewarded user acquisition at scale. We're looking for a Senior Fraud & Risk Analyst to strengthen exmox's fraud prevention and risk management capabilities. You'll bring hands-on experience detecting and mitigating fraud across different types of organizations, and you'll play a hybrid role: partnering closely with exmox's Fraud Analytics Team Lead on strategic initiatives, while also supporting the operations side through process changes, rollouts, and analysis. What You’ll Own: Investigate, analyze, and mitigate fraud patterns across user acquisition, transactions, and account activity, with particular attention to reward-based and incentivized user acquisition channels (offerwalls, referral programs, cashback/rewards mechanics) where fraud vectors are especially prevalent. Design and refine fraud detection rules, heuristics, and monitoring dashboards to catch emerging abuse patterns early. Support the Fraud Analytics Team Lead in planning and executing risk initiatives - contributing a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة exmox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Risk management",
            "Fraud analytics",
            "Risk assessment",
            "Fraud management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/exmox/senior-fraud-risk-analyst-hamburg-472710",
        "logo": "https://logo.clearbit.com/exmox.com",
        "companyLogo": "https://logo.clearbit.com/exmox.com",
        "image": "https://logo.clearbit.com/exmox.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-56",
        "title": "Senior AI-Native Data Engineer (f/m/x)",
        "title_ar": "مهندس ومطور برمجيات (Senior AI-Native Data Engineer (f/m/x))",
        "company": "exmox",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Your Mission This is a company built for growth. When you join exmox, you're stepping onto a global, highly competitive playing field, building high-performing consumer products in mobile gaming. We're scaling a rewarded user engagement and acquisition platform that helps publishers acquire and retain players, and here, data isn't just analyzed, it's turned into systems that directly drive business performance. As a Senior AI-Native Data Engineer (f/m/x) , you'll operate at the intersection of data, engineering, and product, building and scaling the data foundation that powers our entire business. This isn't a role for maintaining pipelines or following predefined processes, we look for engineering mindset and entrepreneurial ownership: you build it, you own it, and you see the impact in production. AI is not a side tool here, it's core to how you work: you'll use Claude and similar AI tools daily to plan, build, debug, and document, including managing context and memory across projects, integrating AI directly into your version control workflow, and running parallel agent workflows on separate tasks, cutting repetitive tasks so you can focus where it actually moves the needle. We believe a small team of engineers working closely with AI can outperform a much larger traditional data team, and we're building this role around that belief, not around AI as an occasional convenience. If you're excited by complex systems, high traffic, and data-driven decisions, and impact matters",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة exmox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/exmox/senior-ai-native-data-engineer-hamburg-424655",
        "logo": "https://logo.clearbit.com/exmox.com",
        "companyLogo": "https://logo.clearbit.com/exmox.com",
        "image": "https://logo.clearbit.com/exmox.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789355437-57",
        "title": "Financial Planning & Analysis GTM Lead",
        "title_ar": "مدير وقائد فريق (Financial Planning & Analysis GTM Lead)",
        "company": "Dutchie",
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
        "description": "About Dutchie \n Founded in 2017, Dutchie is a comprehensive technology platform powering dispensary operations, while providing consumers with safe and easy access to cannabis. Dutchie aims to further support the positive societal change the cannabis industry brings to the world through wellness benefits, social justice, and empowering local communities through tax revenue. Powering thousands of dispensaries across 40+ markets throughout the United States and Canada, Dutchie is the leading technology company in the cannabis space and was named in Fast Company’s 10 Most Innovative Companies in North America and listed two years in a row on LinkedIn’s Top 50 Startups. \n Dutchie has raised over $600M in funding to date, backed by D1 Capital Partners, Tiger Global, Dragoneer, DFJ Growth, Thrive Capital, Howard Schultz, Snoop Dogg’s Casa Verde Capital, Gron Ventures, members of the founding team at DoorDash, Kevin Durant’s Thirty Five Ventures, and other notable angel investors. \n About This Role \n Dutchie is looking for a Financial Planning and Analysis GTM lead to serve as the primary finance partner to our Revenue organization. \n You’ll work alongside Sales, Customer Success, Marketing, Revenue Operations, Partnerships, and executive leadership to evaluate investments, improve forecasting accuracy, measure commercial performance, and influence how we grow. \n This is far more than pipeline reporting. You’ll help shape pricing strategies, investment decisions, sales capacity plan",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dutchie. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance & accounting"
        ],
        "applyUrl": "https://jobicy.com/jobs/153185-financial-planning-analysis-gtm-lead",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/305a6ae1871314b06b00082374e7ba74.jpeg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/305a6ae1871314b06b00082374e7ba74.jpeg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/02/305a6ae1871314b06b00082374e7ba74.jpeg",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789355437-58",
        "title": "Account Executive",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive)",
        "company": "Dropbox",
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
        "description": "Role Description \n As an Account Executive on the Growth team, you will help Dropbox expand how we bring our Product Suite and emerging AI products to new customers. \n In this role, you’ll focus on identifying, engaging, and developing opportunities with net new customers. You’ll work with prospects to understand their needs, learn which use cases resonate, and help create successful outcomes. You’ll be expected to execute consistently, manage your pipeline effectively, and contribute feedback that helps improve our sales motion, messaging, and approach over time. \n This is an opportunity to build strong sales experience across a growing portfolio of products while contributing to Dropbox’s next phase of growth. \n Responsibilities \n Own the full sales cycle from pipeline generation through close and renewal within your territory \n Build pipeline from scratch by prospecting into new teams, departments, and executive stakeholders \n Expand beyond existing motions to uncover new use cases and opportunities \n Consistently generate pipeline through outbound efforts, account mapping, events, and partner collaboration \n Forecast accurately and manage pipeline to consistently meet or exceed revenue targets \n Lead strong discovery to uncover customer challenges, priorities, and desired outcomes \n Apply structured qualification and value-selling frameworks (e.g., MEDDICC, SPICED) to advance deals \n Clearly articulate business impact and position Dropbox solutions around outcomes, not fe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dropbox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153181-account-executive-20",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789355437-59",
        "title": "Business Development Representative - Japan",
        "title_ar": "Business Development Representative - Japan (المبيعات والنمو)",
        "company": "Dropbox",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Japan",
        "location_ar": "Japan",
        "salary": "Competitive",
        "description": "Role Description \n As a Business Development Representative for Japan , you will support Dropbox’s Japan Sales organization by generating qualified pipeline, engaging target accounts, and helping Account Executives create new enterprise opportunities across Dropbox Business Enterprise, Dropbox Protect and AI solutions. \n You will play a crucial role in areas such as outbound prospecting, account research, stakeholder mapping, inbound qualification, event follow-up, and partner-supported pipeline generation. You will work closely with Account Executives to identify relevant business challenges, engage the right personas, and create clear handoffs that help move qualified opportunities into the sales cycle. \n This role is ideal for someone who is curious, resilient, highly organized, and motivated by creating opportunity. You will gain exposure to enterprise sales cycles, AI-enabled workplace transformation, content collaboration, security and governance conversations, and senior sales stakeholders. This is a strong development opportunity for someone looking to grow into a future Account Executive role. \n Responsibilities \n Generate qualified pipeline for Japan Account Executives through outbound prospecting, account research, personalized email, phone outreach, social selling, events, and partner motions. \n Follow up promptly with attendees from Dropbox-hosted seminars, webinars and other events while their interest is still fresh improving conversion from MQLs to sales-quali",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dropbox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://jobicy.com/jobs/153187-business-development-representative-japan",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2020/09/WRILS-200923071227-398427.jpg",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789355437-60",
        "title": "Senior Product Marketing Manager",
        "title_ar": "أخصائي تسويق ونمو (Senior Product Marketing Manager)",
        "company": "Teramind",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The Role \n You'll own how Teramind is positioned, packaged, and sold. This is a senior, hands-on role at the center of our GTM engine: you'll define the messaging across four converging categories (IRM, DLP, AI Governance, employee monitoring), arm sales with what they need to win, and translate a fast-moving product roadmap into narratives the market cares about. \n You'll also lead our creative production function - managing an AI-first content creator and building the systems that let a lean team produce at the volume and quality of one three times its size. \n What You'll Do \n Positioning & messaging \n Own and continuously test core positioning across IRM, DLP, AI Governance, and employee monitoring - reconciling how buyers actually search and speak with how we show up on the site and in campaigns \n Build persona and buyer-journey frameworks, and pressure-test them against real closed-won and closed-lost data - not assumptions \n Sales enablement \n Own the sales enablement stack: onboarding decks, demo scripts, objection-handling guides, and pricing/packaging narratives \n Build and maintain competitive battlecards (Forcepoint, Microsoft Purview, ActivTrak, and others) and keep sales armed with fresh win/loss insight \n Product launches & GTM \n Partner with Product to translate the roadmap into GTM narratives, launch plans, and sales-facing collateral \n Run and synthesize win/loss and churn interviews into messaging refinements and roadmap input \n What You Bring \n 8+ years in ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Teramind. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing & sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153180-senior-product-marketing-manager-5",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/5f73db18-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/5f73db18-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/5f73db18-221.png",
        "postedAt": "2026-09-14",
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
