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
        "id": "job-1789659953-1",
        "title": "Court Research Analyst",
        "title_ar": "Court Research Analyst (برمجة وتكنولوجيا)",
        "company": "RELX",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$44,500 - $74,100 USD",
        "description": "Do you enjoy answering and researching legal queries? Are you a customer-centric and data-driven individual? About our Team Intelligize is the leading provider of best-in-class content, exclusive news collections, regulatory insights, and powerful analytical tools for compliance, transactional and financial reporting professionals. Intelligize offers a web-based research platform that ensures law firms, accounting firms, corporations, and other organizations stay compliant with government regulations, build stronger deals and agreements, and deliver value to their shareholders and clients. Headquartered in New York City, Intelligize serves Fortune 500 companies, including Starbucks, IBM, Microsoft, Verizon and Walmart, as well as many of the top global law and accounting firms. About the Role As a Legal Research Specialist, you will support customers by conducting legal research, managing expert witness search requests, and delivering accurate, timely information. This role combines research, customer service, and order management responsibilities, offering the opportunity to make a meaningful impact by helping customers find the information they need and ensuring a high-quality service experience. Responsibilities \n Conduct research and provide information obtained by using internal and external resources \n Deliver clear, concise, accurate, timely and thorough communication to internal and external customers \n Apply established standards to the order management process to ef",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة RELX. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Legal-research",
            "Court-related-research",
            "Legal-support",
            "Legal-services"
        ],
        "applyUrl": "https://himalayas.app/companies/relx/jobs/court-research-analyst",
        "logo": "https://cdn-images.himalayas.app/iqx6hcw5jkeopwsr5qib6gtx475i",
        "companyLogo": "https://cdn-images.himalayas.app/iqx6hcw5jkeopwsr5qib6gtx475i",
        "image": "https://cdn-images.himalayas.app/iqx6hcw5jkeopwsr5qib6gtx475i",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-2",
        "title": "Subject Matter Expert – Data & Statistical Chart Analysis",
        "title_ar": "Subject Matter Expert – Data & Statistical Chart Analysis (برمجة وتكنولوجيا)",
        "company": "micro1",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$25 - $50 USD",
        "description": "Role Title: Subject Matter Expert – Data & Statistical Chart Analysis Role Type: Contractor Location: Remote micro1 is engaging Subject Matter Experts – Data & Statistical Chart Analysis (AI Benchmark) to contribute expertise on a customer project advancing the capabilities of next-generation AI systems. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. Scope of Work \n Interpret complex data science and statistical visualizations—such as Sankey diagrams, heatmaps, calibration curves, residual plots, correlation matrices, and distribution plots—applying advanced professional judgement and terminology. \n Design clear, objective, multi-step analytical tasks and questions based on challenging visualizations, emphasizing quantitative reasoning beyond surface-level chart reading. \n Deliver precise, unambiguous answers with thorough, step-by-step written explanations, including explicit calculations, statistical inferences, or modeling logic as required. \n Utilize exact data science and statistical language, ensuring accuracy in referencing units, scales, axes, legends, and annotations in all outputs. \n Create tasks that require graphical reasoning, trend analysis, comparison, interpolation, and statistical inference, always avoiding ambiguous or subjective prompts. \n Partic",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Analytics-expert"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/subject-matter-expert-data-statistical-chart-analysis",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-3",
        "title": "Subject Matter Expert – Chart & Data Visualization Analysis",
        "title_ar": "Subject Matter Expert – Chart & Data Visualization Analysis (برمجة وتكنولوجيا)",
        "company": "micro1",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$25 - $50 USD",
        "description": "Role Title: Subject Matter Expert – Chart & Data Visualization Analysis Role Type: Contractor Location: Remote micro1 is selecting Subject Matter Experts – Chart & Data Visualization Analysis (AI Training) to contribute to a high-impact client project. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. This opportunity is ideal for data-driven professionals with a meticulous eye for interpreting domain-specific charts, excellent quantitative reasoning, and a passion for communicating complex concepts clearly in both written and verbal form. Contributors from Medicine & Biostatistics, Finance & Economics, Engineering & Physics, Earth Sciences & GIS, Data Science & Statistics, or Operations & Manufacturing are especially encouraged to express interest. Scope of Work \n Interpret and analyze domain-specific charts, graphs, and data visualizations with a high level of accuracy and domain terminology precision. \n Design clear, unambiguous questions that require multi-step quantitative reasoning based on information-rich charts. \n Develop objectively answerable tasks focused on in-depth reasoning, calculations, comparisons, and trend analysis. \n Provide precise answers along with detailed, step-by-step explanations of your reasoning and calculation process. \n Utilize correct ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Subject-matter-expert"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/subject-matter-expert-chart-data-visualization-analysis",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-4",
        "title": "Account Specialist, Collision",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Specialist, Collision)",
        "company": "Axalta",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Account Specialist, Collision Axalta has remained at the forefront of the coatings industry by continually investing in innovative solutions. We engineer technologies that protect customers’ products – whether they are battling heat, light, corrosion, abrasion, moisture, or chemicals – and add dimension and beauty with colorful finishes. We have a vast and ever-evolving portfolio of brands primed to play an important part in everything from modernizing infrastructure around the world to enabling the next generation of electric and autonomous vehicles. The Account Specialist, Automotive Refinish is responsible for maintaining strong customer satisfaction and long-term retention of Axalta ’s customers within a market. As a member of the regional sales team the Account Specialist will partner with our coatings customers to foster their long-term success by ensuring that all elements of the business agreement are delivered. The Account Specialist works with a high sense of urgency and demonstrates ownership, commitment, and accountability to Regional and Axalta goals. Work Location: This fully remote role requires a local presence in TX , preferably San Antonio ,to allow for onsite visits to customer sites and is not eligible for relocation nor sponsorship. Key Responsibilities: \n Acts as primary point of contact for identified customers and builds strong, collaborative relationships \n Understands key elements of the business agreement with each customer \n Develops and executes a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Axalta. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Account-management",
            "Sales-specialist",
            "B2b-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/axalta/jobs/account-specialist-collision",
        "logo": "https://cdn-images.himalayas.app/60w78d3tu6rxeuip3u8q3ufr4ys5",
        "companyLogo": "https://cdn-images.himalayas.app/60w78d3tu6rxeuip3u8q3ufr4ys5",
        "image": "https://cdn-images.himalayas.app/60w78d3tu6rxeuip3u8q3ufr4ys5",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-5",
        "title": "Virtual Sales Account Executive - Splunk",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Virtual Sales Account Executive - Splunk)",
        "company": "Cisco",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$119,700 - $151,200 USD",
        "description": "The application window is expected to close on: 09/17/2026 Meet the Team: Splunk, a Cisco company, is dedicated to building a safer and more resilient digital world with our comprehensive platform for hybrid, multi-cloud environments. Leading enterprises rely on our unified security and observability solutions to keep their digital systems secure and reliable. While our technology is highly regarded, it’s our people who make Splunk an outstanding place to grow your career. We value collaboration, integrity, and professional growth. Bring your sales experience, drive, and ambition—and help organizations achieve their goals while advancing your own career with a supportive team. This role can be performed from any location within the United States. Your Impact: Build and Advance a High-Quality Pipeline \n Make 30+ targeted outbound calls daily to generate, qualify, and progress opportunities, ensuring steady pipeline growth. \n Use account-based strategies to identify key contacts, deliver tailored messaging, and create new business opportunities. \n Research target accounts to inform outreach and engagement efforts. \n Guide Opportunities Through the Sales Process \n Take ownership of deals from initial engagement through to completion, ensuring a positive experience for prospects and customers. \n Manage and lead multiple opportunities simultaneously, keeping momentum and engagement high throughout each stage of the sales process. \n Maintain accurate pipeline information and sales ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Cisco. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Account-executive",
            "Inside-sales",
            "Saas-sales",
            "Virtual-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/cisco/jobs/virtual-sales-account-executive-splunk-9018627082",
        "logo": "https://cdn-images.himalayas.app/2yuz2telkvqyb0dbopo8j6w4jd16",
        "companyLogo": "https://cdn-images.himalayas.app/2yuz2telkvqyb0dbopo8j6w4jd16",
        "image": "https://cdn-images.himalayas.app/2yuz2telkvqyb0dbopo8j6w4jd16",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-6",
        "title": "Senior Java developer - Angular / NodeJS - Full Remote",
        "title_ar": "مهندس ومطور برمجيات (Senior Java developer - Angular / NodeJS - Full Remote)",
        "company": "goPro Consultancy Group ltd.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Category: IT Services Location: Fort Western Province Sri Lanka For an international organization in Europe, we are urgently looking for a REMOTE Senior Java developer - Angular / NodeJS with good knowledge of Angular (Angular, AngularJS, Angular2, …). The Senior Java developer - Angular / NodeJS is responsible for the design, implementation, testing, deployment, and support of multiple applications. \n Candidates need to be able to work the European schedule. \n During the corona crisis, interviews will be done through WEBEX, and travel is not required for the interviews. All positions are long-term. \n Tasks and Responsibilities: \n Ensure the project's technical knowledge is kept within the contracted company for the duration of the services; \n Perform the initial transfer of knowledge; \n Onsite or near-shore development, testing, and delivery of the Work Package in the development and maintenance environments, as well as assistance to migration to production if requested, as further detailed below under \"deliverables\".Troubleshoot and remediate system problems affecting availability and functionality; \n Generate and retain relevant technical documentation related to the technical services provided during the project period; \n Resolution of minor open issues relating to the 2017 IT enhancement project, depending on time availability and re-evaluation of project priorities if necessary; \n Troubleshooting and remediation of system issues impacting the availability or functionali",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة goPro Consultancy Group ltd.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Java-developer",
            "Fullstack-development",
            "Java-development",
            "Frontend-development"
        ],
        "applyUrl": "https://himalayas.app/companies/gopro-consultancy-group-ltd/jobs/senior-java-developer-angular-x2f-nodejs-full-remote-2945329759",
        "logo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "companyLogo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "image": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-7",
        "title": "DRG Validation Coding Auditor",
        "title_ar": "DRG Validation Coding Auditor (مالية ومحاسبة)",
        "company": "Ensemble Health Partners",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$69,400 - $104,100 USD",
        "description": "Thank you for considering a career at Ensemble! Ensemble is a leading provider of technology-enabled revenue cycle management solutions for health systems, including hospitals and affiliated physician groups. They offer end-to-end revenue cycle solutions as well as a comprehensive suite of point solutions to clients across the country. Ensemble keeps communities healthy by keeping hospitals healthy. We recognize that healthcare requires a human touch, and we believe that every touch should be meaningful. This is why our people are the most important part of who we are. By empowering them to challenge the status quo, we know they will be the difference! O.N.E Purpose: \n Customer Obsession: Consistently provide exceptional experiences for our clients, patients, and colleagues by understanding their needs and exceeding their expectations. \n Embracing New Ideas: Continuously innovate by embracing emerging technology and fostering a culture of creativity and experimentation. \n Striving for Excellence: Execute at a high level by demonstrating our “Best in KLAS” Ensemble Difference Principles and consistently delivering outstanding results. \n The Opportunity: CAREER OPPORTUNITY OFFERING: \n Bonus Incentives \n Paid Certifications \n Tuition Reimbursement \n Comprehensive Benefits \n Career Advancement \n This position pays between $69,400 to $104,100 annually based on experience. Final compensation will be determined based on experience. \n The Inpatient/DRG Validation Coding Auditor perfo",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ensemble Health Partners. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Medical-coding",
            "Coding-auditor",
            "Revenue-cycle-management"
        ],
        "applyUrl": "https://himalayas.app/companies/ensemble-health-partners/jobs/drg-validation-coding-auditor",
        "logo": "https://cdn-images.himalayas.app/z399qx0drckr09g1y8640k87nfxn",
        "companyLogo": "https://cdn-images.himalayas.app/z399qx0drckr09g1y8640k87nfxn",
        "image": "https://cdn-images.himalayas.app/z399qx0drckr09g1y8640k87nfxn",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-8",
        "title": "Senior Technical Architect",
        "title_ar": "Senior Technical Architect (برمجة وتكنولوجيا)",
        "company": "Salesforce",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$172,500 - $260,100 USD",
        "description": "To get the best candidate experience, please consider applying for a maximum of 3 roles within 12 months to ensure you are not duplicating efforts. Job Category Customer Success Job Details About Salesforce Salesforce is the #1 AI CRM, where humans with agents drive customer success together. Here, ambition meets action. Tech meets trust. And innovation isn’t a buzzword — it’s a way of life. The world of work as we know it is changing and we're looking for Trailblazers who are passionate about bettering business and the world through AI, driving innovation, and keeping Salesforce 's core values at the heart of it all. Ready to level-up your career at the company leading workforce transformation in the agentic era? You’re in the right place! Agentforce is the future of AI, and you are the future of Salesforce . Applications will be accepted until 10/03/2026. Senior Technical Architect The Professional Services organization is focused on delivering Salesforce 's world-class product and project offerings to ensure customers are getting the most out of the Salesforce Platform. We help customers accelerate their path to value with Salesforce , focused on making sure you’re set up for long-term success to tap into the full capacity of the Salesforce platform, fast. We help you plan your strategic roadmap and we make sure you are building Salesforce so that it’s easy to maintain and adapt down the road, minimizing potential technical debt. Our team is made up of thousands of the wor",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Salesforce. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Technical-architect",
            "Enterprise-architect",
            "Salesforce-consultant",
            "Solutions-architect"
        ],
        "applyUrl": "https://himalayas.app/companies/salesforce/jobs/senior-technical-architect",
        "logo": "https://cdn-images.himalayas.app/nd39wuc99pl5rh7ha3dqu9y7y5y4",
        "companyLogo": "https://cdn-images.himalayas.app/nd39wuc99pl5rh7ha3dqu9y7y5y4",
        "image": "https://cdn-images.himalayas.app/nd39wuc99pl5rh7ha3dqu9y7y5y4",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-9",
        "title": "Backend Engineer | Mid-Senior | Go",
        "title_ar": "مهندس ومطور برمجيات (Backend Engineer | Mid-Senior | Go)",
        "company": "nexos.ai",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "$19,800 - $33,400 PLN",
        "description": "Join the AI revolution. We’re building an all-in-one AI platform to help teams do their best work and automate every routine task you can think of. We’re looking for problem-solvers to turn powerful AI into an easy, no-code tool for teams everywhere. Main Responsibilities \n Build and improve features that help our AI orchestrator deliver personalized experience. \n Write clean, reliable code with performance, scalability, and security in mind. \n Work closely with other developers to design, build, and maintain our Go-based microservices. \n Take end-to-end ownership of our services: from implementing them to deploying, monitoring, and improving them over time. \n Work in a fast-paced, constantly evolving environment and enjoy adapting, learning, and shipping solutions at high speed. \n Core Requirements \n Experience to create scalable, stable, and secure code with Golang. \n Experience working with distributed technologies and NoSQL databases, with a strong background in high-load applications and microservices architecture. \n System design is nothing new to you - you're familiar with Domain-Driven Design principles and know what patterns to use when and why. \n Passionate about secure, compliant backend architecture and technologies. \n Comfortable balancing speed and quality in a startup environment. \n A collaborative mindset where you love to discuss, rethink, and redesign your ideas that create shared success within your team and the company. \n Tools You Will Use \n Go \n MySQL \n ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة nexos.ai. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Backend-engineering",
            "Go",
            "Backend-engineer",
            "Software-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/nexos-ai/jobs/backend-engineer-mid-senior-go-8467244049",
        "logo": "https://logo.clearbit.com/nexosai.com",
        "companyLogo": "https://logo.clearbit.com/nexosai.com",
        "image": "https://logo.clearbit.com/nexosai.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-10",
        "title": "Solutions Architect - Deep Neural Network Evaluation",
        "title_ar": "Solutions Architect - Deep Neural Network Evaluation (برمجة وتكنولوجيا)",
        "company": "NVIDIA",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "France",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$292,500 - $507,000 PLN",
        "description": "NVIDIA ’s Worldwide Field Operations (WWFO) team is looking for an AI focused Solution Architect with expertise in evaluation of neural networks and agentic pipelines. A candidate with understanding of modern evaluation datasets and tools allowing to work with key model builders / AI application developers across EMEA to improve core models as well as end to end agentic pipelines. As Solutions Architect, you will be the first line of technical expertise between NVIDIA and our customers. Your responsibilities will vary from working on proof-of-concept demonstrations, to driving relationships with key executives and managers to promote NVIDIA technologies. This role focuses on the evaluation, analysis, and design of agentic AI systems, with a strong emphasis on LLMs and retrieval-based architectures. It involves benchmarking AI systems across diverse use cases and languages, evaluating performance across the end-to-end stack from LLMs and VLMs to embedding models. The position also requires deep analysis of system failures and the development of mitigation strategies, including model selection, retrieval pipeline optimization, and LLM or embedding model fine-tuning. We are looking for a candidate passionate about AI with strong expertise in neural network development and fine-tuning. The ideal candidate will be able to collaborate across customers, engineering teams, industry business development, and corporate marketing. In this role, you will work with the latest LLM, VLM, an",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة NVIDIA. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Solutions-architect",
            "Ai-engineering",
            "Data-science"
        ],
        "applyUrl": "https://himalayas.app/companies/nvidia/jobs/solutions-architect-deep-neural-network-evaluation",
        "logo": "https://cdn-images.himalayas.app/9jkqq85jdsq9vtt2fuhb5vq8y2zy",
        "companyLogo": "https://cdn-images.himalayas.app/9jkqq85jdsq9vtt2fuhb5vq8y2zy",
        "image": "https://cdn-images.himalayas.app/9jkqq85jdsq9vtt2fuhb5vq8y2zy",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-11",
        "title": "Supervisor, Fraud Strategy",
        "title_ar": "Supervisor, Fraud Strategy (مالية ومحاسبة)",
        "company": "Velera",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$73,200 - $93,300 USD",
        "description": "Join the People Helping People Velera is the nation’s premier payments credit union service organization (CUSO) and an integrated fintech solutions provider. The company serves more than 4,000 financial institutions throughout North America, operating with velocity to help our clients keep pace with the rapid momentum of change and fuel growth in the new era of financial services. Our purpose: We accelerate partners’ success through innovative financial technology solutions and inspired service. The Opportunity: The Supervisor, Fraud Strategy will oversee the Fraud Strategy area. This includes collaborating with employees and other departments on relevant matters to ensure that department standards for quality, employee engagement, and efficiency are upheld. The role involves overseeing client and product implementations, conducting research on service issues, suggesting process improvements, analyzing data and trends, and assisting in developing risk analytics training materials. Additionally, the incumbent will be tasked with fostering an environment that cultivates a hardworking, motivating, high-performance culture, focusing on continuous improvement and delivering excellent service to both internal and external customers. They will also supervise and coordinate the activities and daily operations of the Fraud Strategy staff, which includes supporting Fraud & Risk monitoring tools, reviewing and resolving fraud-related issues, managing resources, assigning tasks and proje",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Velera. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Fraud-strategy",
            "Risk-analytics",
            "Risk-management"
        ],
        "applyUrl": "https://himalayas.app/companies/velera/jobs/supervisor-fraud-strategy",
        "logo": "https://cdn-images.himalayas.app/7vqq10r39xo6xj500cyti1ksan5z",
        "companyLogo": "https://cdn-images.himalayas.app/7vqq10r39xo6xj500cyti1ksan5z",
        "image": "https://cdn-images.himalayas.app/7vqq10r39xo6xj500cyti1ksan5z",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-12",
        "title": "Patient Care Coordinator",
        "title_ar": "Patient Care Coordinator (خدمة ودعم العملاء)",
        "company": "Sedgwick",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$16.5 - $16.5 USD",
        "description": "By joining Sedgwick , you'll be part of something truly meaningful. It’s what our 33,000 colleagues do every day for people around the world who are facing the unexpected. We invite you to grow your career with us, experience our caring culture, and enjoy work-life balance. Here, there’s no limit to what you can achieve. Newsweek Recognizes Sedgwick as America’s Greatest Workplaces National Top Companies Certified as a Great Place to Work® Fortune Best Workplaces in Financial Services & Insurance Patient Care Coordinator PRIMARY PURPOSE: To provide world class customer service and service delivery to our clients and patients through processing referrals in the delivery of medical goods and services. ESSENTIAL FUNCTIONS and RESPONSIBILITIES \n Reaches out to patients in relation to new or already processing referrals confirming patient demographic information, providing updates on the referral, and/or confirming delivery of said goods or service. \n Communicates with vendor partners, claims adjusters and nurse case managers providing updates on new referrals as well as referrals already in process. \n Procures vendor partners for each referral as it relates to the goods or services requested. \n Responsible for making or taking phone calls on existing referrals, new referrals, or other team members referrals. \n Provides quotes back to clients for approval or follow up on quotes already sent to obtain written approval for requested referrals ensuring that each referral is deemed me",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sedgwick. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Patient-care-coordinator",
            "Referral-processing",
            "Patient-services"
        ],
        "applyUrl": "https://himalayas.app/companies/sedgwick/jobs/patient-care-coordinator",
        "logo": "https://cdn-images.himalayas.app/dkjnp3uyhc8h7u9w3umzr3cpt8fd",
        "companyLogo": "https://cdn-images.himalayas.app/dkjnp3uyhc8h7u9w3umzr3cpt8fd",
        "image": "https://cdn-images.himalayas.app/dkjnp3uyhc8h7u9w3umzr3cpt8fd",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-13",
        "title": "Senior Embedded Software Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Embedded Software Engineer)",
        "company": "Nebius",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$179,500 - $269,200 USD",
        "description": "About Nebius : \n Nebius is leading a new era in cloud infrastructure for the global AI economy. We are building a full-stack AI cloud platform that supports developers and enterprises from data and model training through to production deployment, without the cost and complexity of building large in-house AI/ML infrastructure. \n Built by engineers, for engineers. From large-scale GPU orchestration to inference optimization, we own the hard problems across compute, storage, networking and applied AI. \n Listed on Nasdaq (NBIS) and headquartered in Amsterdam, we have a global footprint with R&D hubs across Europe, the UK, North America and Israel. Our team of 1,500+ includes hundreds of engineers with deep expertise across hardware, software and AI R&D. \n The role We are looking for an Embedded Software Developer to design and implement the firmware and low-level software that powers our next-generation GPU and HPC platforms. This role will focus on embedded control, board management, telemetry, and hardware-firmware integration, ensuring that our systems operate reliably in high-density, mission-critical environments. Key Responsibilities • Design and implement embedded firmware for server management, telemetry, and control systems. • Maintain and enhance our custom OpenBMC firmware with new features and improvements • Enable real-time monitoring of power, thermal sensors, and hardware health. • Work closely with hardware engineers to validate firmware for existing and future pl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Nebius. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Firmware-engineering",
            "Hardware-infrastructure"
        ],
        "applyUrl": "https://himalayas.app/companies/nebius/jobs/senior-embedded-software-engineer-5057950075",
        "logo": "https://cdn-images.himalayas.app/v19urq1wsdlrbez7z69tot5wmxpy",
        "companyLogo": "https://cdn-images.himalayas.app/v19urq1wsdlrbez7z69tot5wmxpy",
        "image": "https://cdn-images.himalayas.app/v19urq1wsdlrbez7z69tot5wmxpy",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-14",
        "title": "Marketing & E-commerce Virtual Assistant",
        "title_ar": "أخصائي تسويق ونمو (Marketing & E-commerce Virtual Assistant)",
        "company": "Assist World",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines, South Africa",
        "location_ar": "Philippines, South Africa",
        "salary": "$700 - $800 USD",
        "description": "About the Company \n Our client runs a specialty meat shop known for custom processing and high-end specialty products. They've built a loyal following on TikTok, Instagram, and Facebook, and are now expanding into e-commerce and niche shipping (not bulk) through a new Shopify store. Alongside product sales, they're growing an educational arm — teaching their audience how to make their own specialty products at home with plans to explore paid educational content down the line. \n About the Role \n This is a strategic marketing and e-commerce role, not a traditional admin-focused VA position. The client's in-house team handles content creation (filming and basic editing), so this role is about turning that content and audience into results: running ads, building out funnels, and growing the customer base. There's strong potential to grow into a full-time role as the relationship develops. \n Key Responsibilities \n • Plan, launch, and manage paid ad campaigns on Meta and TikTok to drive lead generation and audience growth \n • Streamline the customer journey from social media → Linktree → Shopify store, removing friction at every step \n • Support the build-out of email/SMS marketing — including setting up systems to capture and organize customer data for future campaigns \n • Help grow the brand's audience across TikTok (primary focus), Instagram, and Facebook \n • Provide light support on content calendar, scheduling, and posting as needed (creative execution stays in-house) \n • Supp",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Assist World. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://himalayas.app/companies/assist-world/jobs/marketing-e-commerce-virtual-assistant",
        "logo": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "companyLogo": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "image": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-15",
        "title": "Web3后端开发工程师",
        "title_ar": "Web3后端开发工程师 (برمجة وتكنولوجيا)",
        "company": "Gate",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "China",
        "location_ar": "China",
        "salary": "Competitive",
        "description": "工作内容： 1. 核心系统开发 - 负责Web3产品（如聚合器、数据服务、钱包管理等）的后端架构设计与开发，提升系统高并发、低延迟及稳定性。 - 负责链上数据抓取、解析与结构化存储（支持主流链），构建实时数据监控与报警机制。 - 设计并实现高性能 API（RESTful/gRPC/WebSocket），优化链上链下交互流程（如交易签名、状态追踪）。 2. 智能合约与区块集成 - 开发链下服务与智能合约的交互模块（如调用合约），处理多链事件聚合与交易路由。 - 实现多链数据解析、事件监听及结构化存储，支持链下业务逻辑。 3. 基础设施与性能优化 - 设计微服务架构，利用 Docker/Kubernetes 实现容器化部署，提升系统可扩展性。 - 设计并实现微服务架构，优化数据库（SQL/NoSQL）、缓存（Redis）、消息队列（Kafka）等技术方案，保障系统高可用性。 任职要求： 1. 技术基础 \n 5年以上后端开发经验，3年以上 Golang 实战经验，精通并发模型（Goroutine/Channel）、标准库及框架（Gin/Go-zero/Gorm）。 \n 熟练掌握微服务架构，有分布式系统设计经验（消息队列/Kafka、分布式锁、熔断限流）。 \n 2. 区块专项 \n 至少2年 Web3 开发经验，深入理解区块原理及主流链的交互机制。 \n 熟悉区块链交易流程和合约交互机制，具备链上数据解析、交易构造等实战经验。 \n 3. 工具链 \n 精通 SQL/NoSQL 数据库优化，熟悉 Redis 缓存设计及 Kafka 异步处理。 \n 熟练使用 Docker/Kubernetes 部署生产环境，掌握 CI/CD 自动化流程。 \n Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Gate. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Web3-development",
            "Backend-engineering",
            "Blockchain-engineering",
            "Go-golang-development"
        ],
        "applyUrl": "https://himalayas.app/companies/gate/jobs/web3-8854382076",
        "logo": "https://logo.clearbit.com/gate.com",
        "companyLogo": "https://logo.clearbit.com/gate.com",
        "image": "https://logo.clearbit.com/gate.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659953-16",
        "title": "Executive Virtual Assistant / Accounting Real Estate Support",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Executive Virtual Assistant / Accounting Real Estate Support)",
        "company": "Assist World",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines, South Africa",
        "location_ar": "Philippines, South Africa",
        "salary": "$600 - $800 USD",
        "description": "Overview Join a growing real estate company that manages rental properties, conducts buy/sell transactions, and handles in-house property flips. The owners are seeking a proactive, detail-oriented Executive Virtual Assistant (EVA) to handle a blend of business, administrative, and light personal support tasks. This is a long-term role designed to expand as trust and capability grow. Core Responsibilities \n Administrative & Executive Support \n Manage emails, calendars, and scheduling for the owners, ensuring timely follow-ups and organized daily flow. \n Conduct online research (vendors, logistics, pricing, travel, etc.) for both business and personal needs. \n Assist with personal coordination tasks, such as organizing baseball tournaments, researching travel accommodations, or handling family scheduling. \n Prepare reports, track projects, and maintain digital filing systems for companydocuments. \n Real Estate Operations \n Support property management activities using Buildium (or similar software). \n Record rent payments, update tenant information, and apply early paymentdiscounts. \n Manage communication with tenants via text/email regarding maintenance, updates, or payment reminders. \n Handle tenant screening and application tracking; assist in coordinating move-ins and move-outs. \n Manage buy/sell property listings, coordinate showings, and liaise with clients as needed. \n Bookkeeping & Financial Support \n Record and reconcile transactions in QuickBooks. \n Support monthly rec",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Assist World. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Virtual-assistant"
        ],
        "applyUrl": "https://himalayas.app/companies/assist-world/jobs/executive-virtual-assistant-accounting-real-estate-support",
        "logo": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "companyLogo": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "image": "https://cdn-images.himalayas.app/x2mmeeywfvtbh3gyk3nb9ao3qkus",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659954-17",
        "title": "RevOps Manager",
        "title_ar": "مدير وقائد فريق (RevOps Manager)",
        "company": "Tiberius Aerospace Inc.",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "About Tiberius Aerospace Tiberius Aerospace is a cutting-edge Aerospace and Defense company committed to delivering innovative, secure, and compliant solutions for our customers. We specialize in mission-critical technology services for government and private sector customers, ensuring excellence in aerospace systems design, performance, and compliance. To serve our nations with Strength, Honor, and Purpose - forging the systems that defend freedom and shape the future of defense. Location : Remote, with willingness to travel \n Position Overview \n Tiberius is seeking an experienced RevOps Manager to own the company's CRM, pipeline architecture, forecasting cadence, and commercial data infrastructure across all programs and geographies. \n This is a high-ownership role for someone who can bring structure, discipline, and visibility to a rapidly scaling aerospace and defense business. The RevOps Manager will ensure every lead, account, opportunity, program, customer interaction, and follow-up action is properly captured, managed, tracked, and reported, and will connect that data to how leadership plans, forecasts, and makes decisions. \n The ideal candidate is a CRM expert with strong Salesforce experience, a working knowledge of the full revenue lifecycle (BD, capture, proposals, program delivery), and the ability to build scalable systems that give leadership a clear view of commercial activity, pipeline health, program-level opportunity, geographic coverage, and forecasted rev",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tiberius Aerospace Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Revenue-operations",
            "Sales-operations",
            "Revops-manager",
            "Crm-administration"
        ],
        "applyUrl": "https://himalayas.app/companies/tiberius-aerospace-inc/jobs/revops-manager",
        "logo": "https://cdn-images.himalayas.app/pm59r8kyova63008j8laghlsenwv",
        "companyLogo": "https://cdn-images.himalayas.app/pm59r8kyova63008j8laghlsenwv",
        "image": "https://cdn-images.himalayas.app/pm59r8kyova63008j8laghlsenwv",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659954-18",
        "title": "Senior Engineer, Software (SWE) – GIA Platform",
        "title_ar": "مهندس ومطور برمجيات (Senior Engineer, Software (SWE) – GIA Platform)",
        "company": "GEICO",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$105,000 - $215,000 USD",
        "description": "Why Join GEICO ? At GEICO , we offer a rewarding career where your ambitions are met with endless possibilities. Every day we honor our iconic brand by offering quality coverage to millions of customers and being there when they need us most. We thrive on relentless innovation to exceed our customers' expectations while making a real impact on local communities nationwide. Founded in 1936, GEICO is a member of the Berkshire Hathaway family of companies and one of the largest auto insurers in the United States. When you join our company, we want you to feel valued, supported, and proud to work here. That's why we offer the GEICO Pledge: Great Company, Great Culture, Great Rewards, and Great Careers. \n Position Summary   \n GEICO is seeking an experienced senior software engineer with a passion for building high-performance, low maintenance, zero-downtime platforms, and applications. You will help drive our insurance business transformation and platform engineering domain modernization as we redefine experience for our customers.  \n Position Description   Our Senior Software Engineer works with our Distinguished Engineer and Staff Engineers to innovate and build new systems, improve, and enhance existing systems as well as identify new opportunities to apply your knowledge to solve critical problems. You will lead thestrategy and execution of a technical roadmap that will increase the velocity of delivering products and unlock new engineering capabilities. The ideal candidate ha",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة GEICO. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-engineer",
            "Platform-engineering",
            "Backend-engineering",
            "Devops-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/geico/jobs/senior-engineer-software-swe-gia-platform",
        "logo": "https://cdn-images.himalayas.app/4i48l7wldcxa93hbvd6zov853pcr",
        "companyLogo": "https://cdn-images.himalayas.app/4i48l7wldcxa93hbvd6zov853pcr",
        "image": "https://cdn-images.himalayas.app/4i48l7wldcxa93hbvd6zov853pcr",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659954-19",
        "title": "Statistician",
        "title_ar": "Statistician (برمجة وتكنولوجيا)",
        "company": "micro1",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$60 - $120 USD",
        "description": "Role Title: Statistician Role Type: Contractor Location: Remote micro1 is selecting Statistician to contribute expert knowledge to a customer project focused on advancing data-driven solutions. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. Scope of Work \n Clean, preprocess, and structure complex and messy datasets using advanced statistical software (such as R, Python, SAS, or Stata). \n Apply and document basic descriptive and inferential statistical analyses to uncover trends and patterns in real-world data. \n Develop clear and compelling data visualizations to illustrate key findings and support model development. \n Contribute expertise in dataset annotation, labeling, or enrichment to enhance the quality of AI model training datasets. \n Draft concise, well-organized written summaries of methods, analyses, and results for a non-technical audience. \n Collaborate asynchronously with project stakeholders to clarify requirements, resolve ambiguities, and improve deliverables through effective written and verbal communication. \n Continuously identify data quality issues, provide actionable recommendations, and document solutions for handling dirty or incomplete data. \n Preferred Qualifications \n Advanced degree (MS or PhD) in Statistics, Data Science, Mathematics, Bi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Statistician",
            "Statistical-scientist",
            "Statistics-expert",
            "Statistical-analyst"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/statistician-796325599",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659954-20",
        "title": "Inside Regional Sales Account Executive - Remote Position",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Inside Regional Sales Account Executive - Remote Position)",
        "company": "Towne Mortgage Company",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Towne Mortgage Family of Companies has more than 40 years of experience in the mortgage industry as a multi-channel, national mortgage lender. Our model is simple: RELATIONSHIP and SPEED . We are always looking for talented AEs to help grow our team. When you choose to work at Towne, you join more than a mortgage company; you become part of the Towne family! If you want to work for an award-winning company with competitive compensation, comprehensive benefit offerings, and flexible work-life, you have found the right place. Grow with us! \n Serious candidates meeting the qualifications are encouraged to apply. Only applicants with a minimum of 2-3 years of mortgage sales experience will be considered for the role of Inside Sales Account Executive. \n This job can be performed remotely in most all US States \n The responsibilities and qualifications for this position are outlined as follows: \n The Inside Sales Account Executive will play a crucial role in driving new business for Towne by establishing relationships with prospective Third-Party Origination (TPO) clients nationwide. \n The ideal candidate will possess the following qualifications: \n Responsibilities Overview: \n Proficient use of Towne’s Customer Relationship Management System (CRM) to effectively engage with TPO clients and facilitate new business development \n Participate in onboarding and training of new client LOs and processors \n Maintain regular communication with clients to understand their needs and ensure sa",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Towne Mortgage Company. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Inside-sales",
            "Account-executive",
            "Mortgage-sales",
            "Business-development"
        ],
        "applyUrl": "https://himalayas.app/companies/towne-mortgage-company/jobs/inside-regional-sales-account-executive-remote-position",
        "logo": "https://cdn-images.himalayas.app/vinv5lutfvl6x5vi0no2j9p00q2n",
        "companyLogo": "https://cdn-images.himalayas.app/vinv5lutfvl6x5vi0no2j9p00q2n",
        "image": "https://cdn-images.himalayas.app/vinv5lutfvl6x5vi0no2j9p00q2n",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789659954-21",
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
        "id": "job-1789659954-22",
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
        "id": "job-1789659954-23",
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
        "id": "job-1789659954-24",
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
        "id": "job-1789659954-25",
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
        "id": "job-1789659954-26",
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
        "id": "job-1789659954-27",
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
        "id": "job-1789659954-28",
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
        "id": "job-1789659954-29",
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
        "id": "job-1789659954-30",
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
        "id": "job-1789659954-31",
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
        "id": "job-1789659954-32",
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
        "id": "job-1789659954-33",
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
        "id": "job-1789659954-34",
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
        "id": "job-1789659954-35",
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
        "id": "job-1789659954-36",
        "title": "Senior Financial Systems Architect - Workday",
        "title_ar": "Senior Financial Systems Architect - Workday (برمجة وتكنولوجيا)",
        "company": "AMBOSS",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Hi! We are AMBOSS and we are looking for a Financial Systems Architect to join our team, and shape the future of medical education with us! About AMBOSS AMBOSS is a dynamic learning and clinical decision support tool committed to empowering medical professionals globally to deliver optimal care. Since our inception in 2012, we've harnessed cutting-edge technology to transform the way physicians acquire and apply scientific knowledge. Each AMBOSSian is passionate about being the champion of clinicians today - this motivates and unites us each day towards success. And what does success look like? When a clinician or med student tells us, “AMBOSS makes practicing medicine easier and enjoyable. I love what I do, and a big part is because of AMBOSS.” Want to learn more about our culture? Watch our video to explore what makes us unique. Why Systems at AMBOSS? AMBOSS runs on a growing landscape of business systems: Workday as the ERP at the center, connected to Stripe, HubSpot, Pleo, Avalara, our banks, payroll and archiving. The Systems team, part of Data & Systems, makes this landscape develop as a whole: every problem solved in the system where it belongs, and processes that run smoothly from order to cash and from purchase to payment. Our expertise is platform-independent: accounting logic, process design, integration patterns and systems thinking. Working side by side with Finance, Accounting, Commercial, Data and IT, we support AMBOSS in pursuing its mission: empowering medica",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة AMBOSS. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "General & administration"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/amboss/senior-financial-systems-architect-workday-berlin-453178",
        "logo": "https://logo.clearbit.com/amboss.com",
        "companyLogo": "https://logo.clearbit.com/amboss.com",
        "image": "https://logo.clearbit.com/amboss.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-37",
        "title": "Product Manager - Investing (f/m/x)",
        "title_ar": "مدير وقائد فريق (Product Manager - Investing (f/m/x))",
        "company": "Lemon Markets",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany (Hybrid)",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About lemon.markets 🍋 We enable anyone to be an investor. Our mission is to grow investing opportunities for all European customers and businesses. By empowering FinTechs, banks, and wealth managers to offer investment products, we help create financial well-being for their customers. lemon.markets is a Brokerage-as-a-Service platform: simple digital access to capital markets through a single API. Our API-first infrastructure abstracts brokerage complexity with a well-documented API, a self-service customer operations portal, and a clear regulatory framework, so partners can launch customer-centric, compliant products in weeks, not months. As part of the dwpbank Group, we share a clear goal: we enable anyone to be an investor by making investing in capital markets more accessible. By combining dwpbank’s long-standing expertise and stability with lemon.markets’ technology-first mindset and speed, we are building a modern, modular securities services ecosystem. Together, we offer faster time-to-market, modular services, and a modern customer experience that helps financial service providers stay competitive and respond more flexibly in a changing market. Your Mission As a Product Manager in the Investing domain, you will contribute to the product scope our largest partners depend on, as well as our side of the joint dwpbank x lemon.markets suite. Your remit will include working with some of the biggest financial institutions in Europe to deliver core capabilities. These include",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon Markets. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product & engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/lemon-markets/product-manager-investing-berlin-463062",
        "logo": "https://logo.clearbit.com/lemonmarkets.com",
        "companyLogo": "https://logo.clearbit.com/lemonmarkets.com",
        "image": "https://logo.clearbit.com/lemonmarkets.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-38",
        "title": "AI-Enabled Governance Associate (f/m/x)",
        "title_ar": "AI-Enabled Governance Associate (f/m/x) (برمجة وتكنولوجيا)",
        "company": "Lemon Markets",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany (Hybrid)",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About lemon.markets 🍋 We enable anyone to be an investor. Our mission is to grow investing opportunities for all European customers and businesses. By empowering FinTechs, banks, and wealth managers to offer investment products, we help create financial well-being for their customers. lemon.markets is a Brokerage-as-a-Service platform: simple digital access to capital markets through a single API. Our API-first infrastructure abstracts brokerage complexity with a well-documented API, a self-service customer operations portal, and a clear regulatory framework, so partners can launch customer-centric, compliant products in weeks, not months. As part of the dwpbank Group, we share a clear goal: we enable anyone to be an investor by making investing in capital markets more accessible. By combining dwpbank’s long-standing expertise and stability with lemon.markets’ technology-first mindset and speed, we are building a modern, modular securities services ecosystem. Together, we offer faster time-to-market, modular services, and a modern customer experience that helps financial service providers stay competitive and respond more flexibly in a changing market. Your Mission As our AI-Enabled Governance Associate, you will help strengthen how lemon.markets runs and improves governance processes across third-party management, partner oversight, and operational controls in a regulated environment. This role starts with a strong focus on third-party-related governance, including external ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lemon Markets. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Backoffice"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/lemon-markets/ai-enabled-governance-associate-berlin-375733",
        "logo": "https://logo.clearbit.com/lemonmarkets.com",
        "companyLogo": "https://logo.clearbit.com/lemonmarkets.com",
        "image": "https://logo.clearbit.com/lemonmarkets.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-39",
        "title": "Music Producer",
        "title_ar": "Music Producer (تصميم وإبداع)",
        "company": "Melotech",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Who we are Melotech is revolutionizing media and entertainment. We create art through technology for humans to enjoy. In just 24 months, our work has been heard, watched and loved for over 3 billion minutes worldwide. Founded by entrepreneur and investor Soheil Mirpour, we are backed by top VCs Cherry Ventures, Speedinvest and GFC, alongside world-class angels from firms such as Spotify, Blackstone and KKR. What you will do Our catalogue grows every week, and every track passes through one pair of hands before it is released. As Music Producer, you own that final mile: you combine every input into one finished record, and you are responsible for holding the quality bar high. We will walk you through exactly what we are building as you go through the process. On a typical day, your tasks may include: Combining and finishing: taking instrumentals and vocals, aligning, tuning and editing the vocal, balancing the mix and delivering a release-ready track Mastering: mastering every track to a consistent loudness, tone and format standard for streaming platforms, with clean metadata and stems archived Quality review: listening to every song before it goes live, accepting it or sending it back with precise notes, and keeping a written standard everyone delivers to Production organisation: running the pipeline from brief to final master, and knowing at any moment what is where, who owes what and what ships this week Tooling: using stem separation, tuning, mastering and AI audio tools ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Melotech. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Creative & design"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/melotech/music-producer-berlin-21322",
        "logo": "https://logo.clearbit.com/melotech.com",
        "companyLogo": "https://logo.clearbit.com/melotech.com",
        "image": "https://logo.clearbit.com/melotech.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-40",
        "title": "Chief of Staff (Sales)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Chief of Staff (Sales))",
        "company": "Peec AI",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Peec AI Peec AI is the analytics platform for AI search. People increasingly discover products and make buying decisions through ChatGPT, Claude, Gemini, and Google's AI Overviews instead of traditional search, and most brands have no idea where they show up in those answers. Peec gives marketing, SEO, and growth teams the data to see exactly that: how visible their brand is across AI platforms, how they compare to competitors, and where to win. We are defining this category, and the market is moving with us. Peec is a Series A company backed by 20VC and Singular, past $15M ARR, with a 80+ person team across our Berlin HQ and our new New York office. About the role We're looking for a Chief of Staff to work directly with our CRO and leadership team as we scale. This is a high-trust, high-ownership role for someone exceptional who wants to see how a company gets built from the inside. You'll start with a sales focus, helping shape our playbook and uncover new revenue. You'll learn more in a year here than most people do in five, and the work you do will have a direct line to how fast we grow. What you'll do A bit of everything: work across Sales, Growth, and Customer Success, going where the company needs you most Help build our sales playbook and find new revenue opportunities we haven't tapped yet Create content and drive launches for new product and growth initiatives Design internal processes and keep daily operations running without friction Help us grow the team, f",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Peec AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/peec-ai/chief-of-staff-sales-berlin-221423",
        "logo": "https://logo.clearbit.com/peecai.com",
        "companyLogo": "https://logo.clearbit.com/peecai.com",
        "image": "https://logo.clearbit.com/peecai.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-41",
        "title": "Visiting Founders Associate (Sales)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Visiting Founders Associate (Sales))",
        "company": "Peec AI",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Peec AI Peec AI is the analytics platform for AI search. People increasingly discover products and make buying decisions through ChatGPT, Claude, Gemini, and Google's AI Overviews instead of traditional search, and most brands have no idea where they show up in those answers. Peec gives marketing, SEO, and growth teams the data to see exactly that: how visible their brand is across AI platforms, how they compare to competitors, and where to win. We are defining this category, and the market is moving with us. Peec is a Series A company backed by 20VC and Singular, past $15M ARR, with a 80+ person team across our Berlin HQ and our new New York office. What you'll do Work across Sales, Growth, and Customer Success, going where the company needs you most Help build our sales playbook and find revenue opportunities we haven't tapped yet Create content and drive launches for new product and growth initiatives Design internal processes and keep daily operations running without friction Help us grow the team, from coordinating recruiting to attracting top-tier talent Jump into messy, undefined problems, learn fast, and make things happen What we're looking for Currently studying, on a gap semester, or recently graduated, and available immediately full-time for 3-6 months Some prior exposure to a fast-moving environment: a startup, VC fund, investment bank, strategy consulting firm, or a student initiative you actually built something in An obsession with startups and a tendenc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Peec AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/peec-ai/visiting-founders-associate-sales-berlin-448776",
        "logo": "https://logo.clearbit.com/peecai.com",
        "companyLogo": "https://logo.clearbit.com/peecai.com",
        "image": "https://logo.clearbit.com/peecai.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-42",
        "title": "Visiting GTM Associate",
        "title_ar": "Visiting GTM Associate (المبيعات والنمو)",
        "company": "Peec AI",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Peec AI Peec AI is the analytics platform for AI search. People increasingly discover products and make buying decisions through ChatGPT, Claude, Gemini, and Google's AI Overviews instead of traditional search, and most brands have no idea where they show up in those answers. Peec gives marketing, SEO, and growth teams the data to see exactly that: how visible their brand is across AI platforms, how they compare to competitors, and where to win. We are defining this category, and the market is moving with us. Peec is a Series A company backed by 20VC and Singular, past $15M ARR, with a 80+ person team across our Berlin HQ and our new New York office. What you’ll do Source and qualify leads to build a strong and consistent sales pipeline Support founders in closing deals and managing key client relationships Create and refine our sales playbook, developing repeatable processes that scale Design and implement automations across our sales stack to improve efficiency and tracking Develop sales content - from outreach sequences to pitch decks and case studies Contribute to revenue operations (RevOps) by analyzing metrics, improving CRM hygiene, and streamlining data flows Jump into new challenges, learn fast, and help make things happen What we’re looking for Currently studying, on a gap semester, or recently graduated, and available immediately full-time for 3-6 months Strong interest in B2B SaaS, startups, and revenue growth Exceptional communication skills, written and ve",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Peec AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/peec-ai/visiting-gtm-associate-berlin-378744",
        "logo": "https://logo.clearbit.com/peecai.com",
        "companyLogo": "https://logo.clearbit.com/peecai.com",
        "image": "https://logo.clearbit.com/peecai.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-43",
        "title": "Growth Engineer",
        "title_ar": "مهندس ومطور برمجيات (Growth Engineer)",
        "company": "Peec AI",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Peec AI Peec AI is the analytics platform for AI search. People increasingly discover products and make buying decisions through ChatGPT, Claude, Gemini, and Google's AI Overviews instead of traditional search, and most brands have no idea where they show up in those answers. Peec gives marketing, SEO, and growth teams the data to see exactly that: how visible their brand is across AI platforms, how they compare to competitors, and where to win. We are defining this category, and the market is moving with us. Peec is a Series A company backed by 20VC and Singular, past $15M ARR, with a 80+ person team across our Berlin HQ and our new New York office. About the role We are hiring a Growth Engineer for acquisition. You own the experimentation surface and run the tests on it: landing pages, pricing, paid surfaces, programmatic pages, and the path from a click to a created account. We already have a growth engineer and he works on the product side. This role points outward and is deliberately not a second version of his. You report to the Head of Growth and work with our Growth PM, our growth engineer, our performance marketer and our design team. What you'll do Build the experimentation infrastructure. Feature flags, assignment, exposure logging. Run experiments end to end. Hypothesis, build, instrument, launch, read, decide. Own the acquisition experimentation surface. Landing pages, pricing, paid pages, signup entry points. Treat that surface as a product. You set the ro",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Peec AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Growth"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/peec-ai/growth-engineer-berlin-85130",
        "logo": "https://logo.clearbit.com/peecai.com",
        "companyLogo": "https://logo.clearbit.com/peecai.com",
        "image": "https://logo.clearbit.com/peecai.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-44",
        "title": "Senior Applied AI Engineer, AI Platform (f/m/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Applied AI Engineer, AI Platform (f/m/d))",
        "company": "bunch",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "bunch is building the backbone of private markets. We are enabling next-gen fund operations with one integrated system that combines secure data infrastructure, AI-powered workflows and expert fund services. If you value ownership, growth through real responsibility, and working with a thoughtful, ambitious team, this role might be for you. Your Role As a Senior Applied AI Engineer on our AI Platform team, you take AI at bunch from working to relied upon. We already run AI in production — a document extraction pipeline live in fund operations, agent workflows on Mastra, evaluations, and multi-provider fallback inside EU data residency. Fund operations run on documents, deadlines and numbers that have to be right — subscription documents to parse, capital calls to chase, portfolio data to reconcile. You build on that foundation: more agents taking that work off people's hands, the evaluations that prove they can be trusted with it, and the platform that lets every other team at bunch ship the same way. This is end-to-end product engineering, not research: you own architecture, evaluation, integration, and deployment. Top Priorities Build and ship agents. Design agents that automate real fund-operations workflows, and own them from prototype through production and after. They integrate with our services, data model, and authorization system — they don't sit beside the product as standalone prototypes. Evaluate and improve agent performance. Build the evaluation layer: test case",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة bunch. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/bunch/senior-applied-ai-engineer-ai-platform-berlin-162773",
        "logo": "https://logo.clearbit.com/bunch.com",
        "companyLogo": "https://logo.clearbit.com/bunch.com",
        "image": "https://logo.clearbit.com/bunch.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-45",
        "title": "Enterprise Account Executive - Germany",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Enterprise Account Executive - Germany)",
        "company": "Ashby",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Why Join Sales at Ashby Sales at Ashby is a unique opportunity to sell a product customers genuinely love during an AI-fueled market expansion. Over 5,000 companies rely on Ashby, including OpenAI, Bolt, Statista, Neura Robotics and Monday.com , and our business is durably growing faster than 100% year-over-year. We’re well funded , and on a path to profitability. That's exceptionally rare for a company at our scale, and puts us in the top 10% of benchmarks. Nearly 1 in 3 of Ashby’s globally distributed team call Europe home! We’ve landed over 1000 customers in EMEA representing ~23% of our global revenue base , with well over 100 in the DACH region, clear evidence of strong product-market fit. We’re doubling down our investment in the region with in-market GTM, CS and Support resources. EU Data Residency and product localisation are committed and coming soon. We believe there is a meaningful opportunity to help modern teams move beyond legacy recruiting software. Ashby replaces 3-5 tools in a consolidation & efficiency play that’s equally loved by recruiters and CFOs. We’re known as a clear AI-leader in the recruiting space. We are rapidly extending from a best-in-class recruiting product toward a multi-product platform, expanding upmarket, into new industries, and internationally. For sales reps, that means a large market full of legacy tools, and a product portfolio that creates room for both new business and expansion. This is a chance to participate in how a category-def",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ashby. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ashby/enterprise-account-executive-germany-401492",
        "logo": "https://logo.clearbit.com/ashby.com",
        "companyLogo": "https://logo.clearbit.com/ashby.com",
        "image": "https://logo.clearbit.com/ashby.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-46",
        "title": "Team Lead Engineering - Finance Automation",
        "title_ar": "مهندس ومطور برمجيات (Team Lead Engineering - Finance Automation)",
        "company": "Zeal Network",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "ZEAL Network SE is a dynamic, international group of companies that has been creating exciting and innovative lottery experiences for over 20 years. As Germany’s largest provider of online lotteries through our brands LOTTO24 and Tipp24, and a trusted partner of Spain’s ONCE, the second-largest national lottery, we’re shaping the future of the lottery industry. We are passionate about driving innovation, as demonstrated by our newest brands, Freiheit+ and Traumhausverlosung, which bring fresh and exciting dreams to life. Additionally, through ZEAL Ventures, we invest in inspiring e-commerce start-ups like Omaze and DAYMADE, fueling fresh ideas and opportunities. Our team of 350+ professionals from diverse backgrounds is united by a visionary mindset, a passion for collaboration, and a commitment to inspire dreams. At ZEAL, we empower our people to think ambitiously and work together toward a shared purpose: helping people imagine and achieve their aspirations. As our Engineering Team Lead (f/m/d) , your team’s mission is to own a brand-new Core Platform domain focused on Finance. As the Tech Lead of the Finance Automation team, you will translate financial and accounting requirements into scalable platform capabilities that automate reconciliation, improve data integrity, and enable reliable financial operations. Your tasks: You lead a product-focused engineering team that builds and evolves Zeal's core B2B platform capabilities for internal business customers In collaboratio",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Zeal Network. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Technology"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/zeal-network/team-lead-engineering-finance-automation-hamburg-491998",
        "logo": "https://logo.clearbit.com/zealnetwork.com",
        "companyLogo": "https://logo.clearbit.com/zealnetwork.com",
        "image": "https://logo.clearbit.com/zealnetwork.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-47",
        "title": "Operational Excellence Specialist",
        "title_ar": "Operational Excellence Specialist (برمجة وتكنولوجيا)",
        "company": "Rohlik",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Rohlík Group is one of Europe’s fastest-growing online grocery platforms, changing how people eat and live. Founded in 2014 in the Czech Republic, we’ve grown into a trusted brand with more than one million customers across Czechia, Hungary, Austria, Germany, and Romania. Our mission is simple to make everyday shopping faster, easier, and more sustainable. We combine smart technology, efficient logistics, and a genuine love for great food. From local bakeries and farmers to our own private labels, we make sure every product that reaches our customers is fresh, safe, and top-quality. We’re committed to sustainability and supporting local communities, reducing packaging, and working closely with small producers. For our customers, Rohlik Group is more than just shopping, it's a better way to enjoy good food every day. Department Overview The Operational Excellence team drives continuous improvement, process standardization, and innovation across Last Mile operations. We support local teams in implementing group standards, solving systemic challenges in routing, loading, and delivery, and enabling sustainable growth as we scale. Role Overview As Operational Excellence Manager for Last Mile, you will own the design and delivery of a 3 to 6 month continuous improvement roadmap for last mile operations. You will lead adoption of group standards, embed best practices, and deliver sustainable improvements in delivery efficiency, cost per order, and on-time performance. You will partn",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Rohlik. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/rohlik/operational-excellence-specialist-berlin-456970",
        "logo": "https://logo.clearbit.com/rohlik.com",
        "companyLogo": "https://logo.clearbit.com/rohlik.com",
        "image": "https://logo.clearbit.com/rohlik.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-48",
        "title": "SEA Manager (m/w/d)",
        "title_ar": "مدير وقائد فريق (SEA Manager (m/w/d))",
        "company": "Sunlab GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Aschaffenburg",
        "location_ar": "Aschaffenburg",
        "salary": "Competitive",
        "description": "Hey, wir sind Sunlab – schön, dass du vorbeischaust. \n Du willst SEA nicht nur operativ steuern, sondern strategisch weiterentwickeln, Budgets mit Weitblick führen und echten Impact erzielen? Perfekt – genau das ist unser Anspruch. \n Wir arbeiten am liebsten mit Category Killern oder Kunden, die es noch werden wollen. \n Als datengetriebenes Team aus Aschaffenburg und Hamburg ist es unsere Mission, Search kontinuierlich auf das nächste Level zu heben: Potenziale identifizieren, versteckte Wachstumshebel aufdecken und Kampagnen so steuern, dass Performance messbar skaliert. \n Klartext: Schwankender ROAS, steigende CPCs oder umkämpfte Märkte sind für uns keine Ausrede, sondern eine strategische Herausforderung. Wir arbeiten langfristig und vorausschauend – mit klarer Struktur, sauberem Tracking und einem tiefen Verständnis für Geschäftsmodelle. \n Du betreust keine 25 Accounts im Blindflug. Stattdessen arbeitest du eng mit 2–3 ausgewählten Kunden zusammen, die du strategisch entwickelst und aktiv voranbringst. Du agierst auf Augenhöhe, steuerst signifikante Budgets und holst das Maximum aus Google Ads & Co. heraus. \n Wir sind ambitionierte Macher und glauben daran, dass die perfekte Kombination aus Daten, smarten Strategien und Technologie den Unterschied macht. In den kommenden Monaten werden wir mutiger testen, gezielter skalieren und stärker automatisieren, um das Maximum herauszuholen. \n Um unsere Mission weiter voranzubringen, suchen wir dich als \n SEA Manager (m/w/d) \n Aufg",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Sunlab GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/sunlab-gmbh/sea-manager-aschaffenburg-491726",
        "logo": "https://logo.clearbit.com/sunlabgmbh.com",
        "companyLogo": "https://logo.clearbit.com/sunlabgmbh.com",
        "image": "https://logo.clearbit.com/sunlabgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-49",
        "title": "Werkstudent oder Minijob im Kundensupport im HealthCare Bereich (m/w/d)",
        "title_ar": "Werkstudent oder Minijob im Kundensupport im HealthCare Bereich (m/w/d) (خدمة ودعم العملاء)",
        "company": "Qrago GmbH",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "Qrago ist ein innovatives Unternehmen im Digital Health Bereich. Unsere Vision ist es, alle logistischen Prozesse im Gesundheitswesen zu digitalisieren und Kliniken mit unseren Produkten in die digitale Zukunft zu begleiten. \n Zur Verstärkung unseres Teams suchen wir zum nächstmöglichen Zeitpunkt einen engagierten Kundensupport (m/w/d). \n Aufgaben \n Du fungierst als direkter Ansprechpartner für Klinken, Alten- und Pflegeheimen, sowie den dazugehörenden Transportunternehmen und Krankenkassen. \n Deine Aufgaben \n Telefonische und schriftliche Betreuung unserer Kunden und Partner im Gesundheitswesen \n Annahme und telefonische Vermittlung von Fahraufträgen \n Bearbeitung von Anfragen, Anliegen und Supportfällen rund um unsere digitalen Lösungen (1st Level Support) \n Dokumentation und Pflege von Kundenanfragen in unserem CRM-System \n Enge Zusammenarbeit mit anderen Teams wie Operations & Customer Success zur Optimierung der Serviceprozesse \n Qualifikation \n Der Umgang mit Menschen, Spaß am Telefonieren, viel Abwechslung in einem agilen Umfeld und stete Weiterentwicklung in einem sehr kollegialen, familiären und freundschaftlichen Miteinander ist Dir wichtig, dann bist Du bei uns genau richtig - Denn Fachwissen kann man lernen, die richtige Einstellung nicht! Du bekommst bei uns Einblicke in den konstant wachsenden, spannenden und sinnhaften HealthCare-Bereich und das mit einem Job, der nachhaltig Sinn stiftet. \n Dein Profil \n Freundliche, serviceorientierte und kommunikative Persönl",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Qrago GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Customer service"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/qrago-gmbh/werkstudent-oder-minijob-im-kundensupport-im-healthcare-bereich-hamburg-224478",
        "logo": "https://logo.clearbit.com/qragogmbh.com",
        "companyLogo": "https://logo.clearbit.com/qragogmbh.com",
        "image": "https://logo.clearbit.com/qragogmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-50",
        "title": "Leiter Personalverwaltung (m/w/d)",
        "title_ar": "Leiter Personalverwaltung (m/w/d) (أخرى)",
        "company": "Deutsche Energy Terminal GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf",
        "location_ar": "Düsseldorf",
        "salary": "Competitive",
        "description": "Wollen Sie Ihre berufliche Zukunft in einem wegweisenden Projekt gestalten? Bei der Deutschen Energy Terminal GmbH (DET) in Düsseldorf erwartet Sie eine spannende Herausforderung. Im Auftrag des Bundesministeriums für Wirtschaft und Energie entwickelt und betreibt die Deutsche Energy Terminal GmbH (DET) die vier schwimmenden LNG-Terminals an der deutschen Nordseeküste, über die LNG vom Schiff in das Gasnetz eingespeist wird. Die sogenannten Floating Storage and Regasification Units (FSRU) sind von entscheidender Bedeutung für die Versorgungssicherheit Deutschlands und damit kritische Infrastruktur mit hohem Risikopotenzial. Wir suchen motivierte Talente, die aktiv an der Gestaltung unseres Verantwortungsbereichs teilhaben möchten. Bewerben Sie sich noch heute und gestalten Sie die Zukunft mit uns! \n Aufgaben \n Strategische und operative Gesamtverantwortung für die Personalverwaltung und das Personalwesen. \n Entwicklung und Umsetzung der Personalstrategie im Einklang mit den Unterneh­menszielen. \n Aufbau eines zukunftsorientierten Workforce-Managements und Sicherung des Fach­kräftebedarfs. \n Verantwortung für Personalplanung, Recruiting, Personalentwicklung sowie Vergü­tungs- und Arbeitszeitmodelle. \n Sicherstellung der Einhaltung arbeits-, tarif- und steuerrechtlicher Vorgaben. \n Führung und Entwicklung des HR-Bereichs sowie Optimierung der HR-Pro­zesse. \n Steuerung von Change- und Transformationsprozessen. \n Förderung einer leistungsfähigen, wertschätzenden Unternehmenskultu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Deutsche Energy Terminal GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Administration"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/deutsche-energy-terminal-gmbh/leiter-personalverwaltung-dusseldorf-364627",
        "logo": "https://logo.clearbit.com/deutscheenergyterminalgmbh.com",
        "companyLogo": "https://logo.clearbit.com/deutscheenergyterminalgmbh.com",
        "image": "https://logo.clearbit.com/deutscheenergyterminalgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-51",
        "title": "Geoinformatikerin/GIS-Entwicklerin (m/w/d) in Voll- bzw. Teilzeit (min. 32 Std.)",
        "title_ar": "Geoinformatikerin/GIS-Entwicklerin (m/w/d) in Voll- bzw. Teilzeit (min. 32 Std.) (أخرى)",
        "company": "ZEBRIS Geo-IT GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Willkommen bei ZEBRIS Geo-IT GmbH! Wir sind ein kleines, dynamisches Team in München, das mit Leidenschaft an spannenden Projekten im Bereich Geoinformatik arbeitet. Unsere Mission ist es, nachhaltige Lösungen für das Management natürlicher Ressourcen zu entwickeln. Als Geoinformatikerin/GIS-Entwicklerin (m/w/d) wirst Du Teil eines innovativen Unternehmens, das die Erde mit modernster Technologie und kreativen Ansätzen besser verstehen und schützen möchte. Bei uns kannst Du in Vollzeit oder Teilzeit (mindestens 32 Stunden) arbeiten und hast die Möglichkeit, in einem flexiblen und unterstützenden Umfeld deine Ideen einzubringen. Wenn Du ein Faible für die Arbeit mit Geodaten hast und der Schutz unseres Klimas, unseres Trinkwassers ebenso wie Naturschutz und internationale Entwicklung für Dich wichtig sind, dann bist du bei uns genau richtig. Wir freuen uns darauf, gemeinsam mit Dir an zukunftsweisenden Projekten zu arbeiten. \n Aufgaben \n Deine Aufgaben: \n Weiterentwicklung und Pflege unserer Software LandManager auf der Basis von QGIS und Geoserver zum nachhaltigen Management von Trinkwasserschutzgebieten und anderen Anwendungen \n Datenanalyse und Entwicklung von Prozessierungsketten für GIS- und Fernerkundungsdaten mit Python und R \n Entwicklung von Modellen des maschinellen Lernens für die Auswertung von Fernerkundungsdaten (Drohnen und Satelliten) \n Anwendung und Einführung von KI-Tools im Entwicklungsprozess \n Kundenberatung und Second-Level Support für unsere Anwendungen ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة ZEBRIS Geo-IT GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Information systems"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/zebris-geo-it-gmbh/geoinformatikerin-gis-entwicklerin-in-voll-bzw-teilzeit-min-32-std-munich-461968",
        "logo": "https://logo.clearbit.com/zebrisgeoitgmbh.com",
        "companyLogo": "https://logo.clearbit.com/zebrisgeoitgmbh.com",
        "image": "https://logo.clearbit.com/zebrisgeoitgmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-52",
        "title": "Duales Studium (B.Sc.) Wirtschaftsinformatik 2027",
        "title_ar": "Duales Studium (B.Sc.) Wirtschaftsinformatik 2027 (أخرى)",
        "company": "Projektron GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Dual studies",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Die Projektron GmbH entwickelt und vertreibt die webbasierte Projektmanagement-Software Projektron BCS. Für die Unterstützung unserer europaweit über 820 Kunden sowie die kontinuierliche Weiterentwicklung unserer Software sorgen mehr als 130 \nMitarbeiter an fünf Standorten in Deutschland. \n Für das Jahr 2027 suchen wir für unseren Hauptsitz in Berlin duale Studenten für den Studiengang B.Sc . Informatik in Kooperation mit der HWR Berlin. \n Wir möchten insbesondere Frauen dazu ermutigen, sich bei uns zu bewerben. \n Aufgaben \n Im Rahmen deines Studiums erhältst du die Möglichkeit, Praxiserfahrung bei einem der besten Arbeitgeber Berlin Brandenburgs zu sammeln. Entsprechend deines Studienschwerpunkts wirst du innerhalb der Praxisphasen in verschiedenen Abteilungen eingesetzt. Du erhältst so einen Einblick in nahezu alle Bereiche einer Software-Firma: \n Für die Supportabteilung bildest du eine wichtige Schnittstelle zwischen unseren Kundenunternehmen und der Technik, unsere Mitarbeiter weisen dich in die Anpassung unserer Software nach Kundenwunsch ein \n Auch der Vertrieb freut sich auf deine Unterstützung bei Kundenanfragen, Softwarepräsentationen und Messen \n In der Entwicklung unterstützt du das Team bei der Programmierung unserer Projektmanagement-Software \n Auch ein Einblick in die Verwaltung oder unsere Unternehmenskommunikation und das Marketing ist jederzeit möglich \n Ein sechsmonatiges Praktikum bei uns vor Beginn des dualen Studiums ist erwünscht. \n Qualifikation \n Fach",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Projektron GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "It"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/projektron-gmbh/duales-studium-bsc-wirtschaftsinformatik-2027-berlin-425495",
        "logo": "https://logo.clearbit.com/projektrongmbh.com",
        "companyLogo": "https://logo.clearbit.com/projektrongmbh.com",
        "image": "https://logo.clearbit.com/projektrongmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-53",
        "title": "Projektmanager (m/w/d) Wegerecht und Flächensicherung - Erneuerbare Energien",
        "title_ar": "مدير وقائد فريق (Projektmanager (m/w/d) Wegerecht und Flächensicherung - Erneuerbare Energien)",
        "company": "Deutscher Bauservice GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Molbergen",
        "location_ar": "Molbergen",
        "salary": "Competitive",
        "description": "Du willst die Energiewende nicht nur begleiten – Du willst sie aktiv gestalten? Dann bist Du bei uns genau richtig. \n Wir entwickeln und realisieren Projekte im Bereich Windenergie, Photovoltaik, Batteriespeicher (BESS) und Stromtrassen – und treiben damit die Energiewende aktiv voran. Für unser wachsendes Team suchen wir eine erfahrene Koordinationspersönlichkeit, die unsere Flächensicherungsprozesse strukturiert und zuverlässig steuert. \n Bewirb Dich noch heute und komm in unser Team! \n Aufgaben \n Gesamtverantwortung für die Steuerung und das Monitoring aller Flächensicherungs- und Wegerechtsverfahren \n Enge Abstimmung mit dem Außendienstteam (Flächenakquisiteure) sowie internen Fachabteilungen (Legal, Projektentwicklung, Genehmigung) \n Begleitung und Qualitätssicherung von Vertragsverhandlungen zu Pacht-, Gestattungs- und Dienstbarkeitsverträgen \n Erstellung von Projektplänen, Statusberichten und KPI-Reportings an das Management \n Pflege des Flächenregisters sowie Fristenmanagement (Optionen, Laufzeiten, Verlängerungen) \n Ansprechpartner für Notare, Behörden und Grundbuchämter \n Qualifikation \n Abgeschlossenes technisches und betriebswirtschaftliches Studium, z.B. Wirtschaftsingenieurwesen mit dem Schwerpunkt im Projektmanagement, Bauingenieurwesen, Energie- und Umwelttechnik oder vergleichbare Qualifikation \n Erste Erfahrung im Projektmanagement – idealerweise in der Flächensicherung oder Energiebranche \n Kenntnisse im Grundbuch-, Sachen- oder Vertragsrecht von Vorteil \n ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Deutscher Bauservice GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/deutscher-bauservice-gmbh/projektmanager-wegerecht-und-flachensicherung-erneuerbare-energien-molbergen-42800",
        "logo": "https://logo.clearbit.com/deutscherbauservicegmbh.com",
        "companyLogo": "https://logo.clearbit.com/deutscherbauservicegmbh.com",
        "image": "https://logo.clearbit.com/deutscherbauservicegmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-54",
        "title": "Praktikum - Online Marketing / Social Media / Kommunikation - Nachhaltigkeits Start-Up",
        "title_ar": "أخصائي تسويق ونمو (Praktikum - Online Marketing / Social Media / Kommunikation - Nachhaltigkeits Start-Up)",
        "company": "2zero GmbH",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Internship",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Wie rettet man am besten das Klima? Gemeinsam. Durch die Entstehung einer Community, die sich gegenseitig motiviert und bestärkt, macht CO2 einsparen Spaß und wirkt sich nachhaltig auch auf Mensch und Umwelt aus. Wir glauben an eine Welt, in der wir gemeinsam Verantwortung übernehmen, damit Klimaschutz Spaß macht. \n Als neues junges Unternehmen möchten wir zum nachhaltigen Wandel unserer Gesellschaft beitragen und suchen Teamunterstützung zum Formen dieser Vision und Erreichen der nachhaltigen Ziele, die wir uns gesetzt haben. \n Aufgaben \n Du kümmerst dich um das Verfassen und die Optimierung von spannenden Inhalten mit Nachhaltigkeitskontext, wie beispielsweise unsere beliebten KlimaGoodNews \n Du unterstützt uns bei der Pflege und Optimierung unserer Website \n Du erstellst Content für unseren neuen Produkte (Blog Posts, Fotos, Videos und mehr) \n Du verantwortest die Steuerung und Weiterentwicklung unserer Online Marketing Kanäle (Instagram, Facebook und LinkedIn) \n Du planst, realisierst und analysierst Social-Media-Kampagnen mit Fokus auf LinkedIn und Instagram \n Du hilfst unseren Kund*innen bei Produktproblemen und zauberst ihnen mit deiner charmanten Schreibart ein Lächeln ins Gesicht \n Qualifikation \n Du bist eine kommunikative, kreative und offene Person mit guten analytischen Fähigkeiten \n Du schreibst gerne Texte und liebst schöne Satzformulierungen \n Du besitzt eine schnelle Auffassungsgabe, strukturierte Arbeitsweise und übernimmst gerne Verantwortung \n Du hast Inte",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة 2zero GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/2zero-gmbh/praktikum-online-marketing-social-media-kommunikation-nachhaltigkeits-start-up-berlin-443947",
        "logo": "https://logo.clearbit.com/2zerogmbh.com",
        "companyLogo": "https://logo.clearbit.com/2zerogmbh.com",
        "image": "https://logo.clearbit.com/2zerogmbh.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-55",
        "title": "Category Manager IT (m/w/d)",
        "title_ar": "مدير وقائد فريق (Category Manager IT (m/w/d))",
        "company": "Kloepfel Group",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Cologne",
        "location_ar": "Cologne",
        "salary": "Competitive",
        "description": "Was kommt auf Dich zu? \n • Entwicklung und Umsetzung von IT-Category-Strategien zur Optimierung von Ausgaben und Lieferantenbeziehungen \n • Eigenständige Führung von Verhandlungen und Abschluss globaler IT-Verträge und Rahmenvereinbarungen, inkl. Lizenzmodellen und SLAs \n • Steuerung von IT-Sourcing-Projekten, Bündelungsinitiativen und Kostenoptimierung sowie Governance der Kategorie \n • Aufbau und Pflege strategischer Partnerschaften mit internen Stakeholdern und Lieferanten \n • Supplier Risk Management \n • Cybersecurity- und Cloud-Security-Compliance \n • Integration von Nachhaltigkeitsanforderungen: Lieferantenbewertungen, Audits und Maßnahmenpläne \n • Arbeiten in einem modernen S2P-Umfeld mit Coupa \n Was solltest Du mitbringen? \n • Abgeschlossenes Wirtschafts- oder IT-Studium oder eine Ausbildung in einem verwandten Bereich \n • 5–10 Jahre Erfahrung im strategischen Einkauf, davon rund 5 Jahre im IT-Einkauf \n • Nachweisbare Erfahrung im Category Management sowie in der eigenständigen Durchführung von Sourcing-Projekten und Verhandlung größerer IT-Verträge \n • Fundierte Kenntnisse in SaaS-, IaaS- und PaaS-Modellen, Lizenzmodellen und SLAs \n • Erfahrung im Lieferanten-Risikomanagement sowie mit Cybersecurity- und Cloud-Security-Anforderungen \n • Strategisches Denken: Marktanalyse, Lieferantenportfolio- und Risikomanagement \n • Souveränes Auftreten gegenüber Fachbereichen, Rechtsabteilung und Management sowie die Fähigkeit, Anforderungen konstruktiv zu challengen \n • Verhandlu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kloepfel Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/kloepfel-group/category-manager-it-cologne-228688",
        "logo": "https://logo.clearbit.com/kloepfelgroup.com",
        "companyLogo": "https://logo.clearbit.com/kloepfelgroup.com",
        "image": "https://logo.clearbit.com/kloepfelgroup.com",
        "postedAt": "2026-09-17",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789659954-56",
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
        "id": "job-1789659954-57",
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
        "id": "job-1789659954-58",
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
        "id": "job-1789659954-59",
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
        "id": "job-1789659954-60",
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
