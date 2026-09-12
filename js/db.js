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
        "id": "job-1789209027-1",
        "title": "Product Manager/Product Owner",
        "title_ar": "مدير وقائد فريق (Product Manager/Product Owner)",
        "company": "micro1",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$90 - $140 USD",
        "description": "Role Title: Product Manager / Product Owner Role Type: Contractor Location: Remote micro1 is engaging Product Managers and Product Owners as expert contributors to an advanced customer project focused on AI system development. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. This is strictly an evaluation and analysis opportunity. It does not involve roadmap ownership, delivery management, sprint facilitation, stakeholder leadership, or programme governance. Contributors with backgrounds in project management, programme management, delivery, or scrum leadership should not apply — this engagement requires deep product management and product ownership skills in content and specification evaluation. Scope of Work \n Assess and compare AI-generated responses to a variety of writing prompts, including specifications, release notes, user-facing copy, and stakeholder updates. \n Score each response based on clarity, tone, adherence to instructions, and usefulness for the intended audience. \n Write detailed rationales explaining the reasoning behind each score, focusing on whether the content meets prompt requirements and audience needs. \n Identify and document cases where fluent writing fails to answer the question, or complete responses are unsuitable for users. \n Spot factu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-manager",
            "Product-owner",
            "Product-management",
            "Software-product-owner"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/product-manager-product-owner",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209027-2",
        "title": "Aerospace CAD Expert",
        "title_ar": "Aerospace CAD Expert (برمجة وتكنولوجيا)",
        "company": "micro1",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$40 - $80 USD",
        "description": "Role Title: Aerospace CAD Expert Role Type: Contractor Location: Remote micro1 is engaging Aerospace CAD Experts to contribute to a dynamic customer project centered on high-fidelity, multi-part aerospace assemblies. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. If you have a background in mechanical engineering, aerospace, or industrial design and thrive on technical precision, this is an exciting chance to impact the future of engineering design support tools. Scope of Work \n Author objective, multi-part questions about aerospace assemblies, focusing on non-guessable queries that require exact, technical answers. \n Review native FreeCAD files to analyze and understand complex mechanical assemblies. \n Develop several high-quality questions per assembly, ensuring coverage of key features, functions, and relationships between parts. \n Deliver clear, well-researched answers to each question with reference to the assembly data. \n Collaborate via writing and occasional verbal communication to clarify requirements and ensure technical accuracy. \n Maintain a standards-driven approach, ensuring questions and answers are comprehensive, relevant, and program-agnostic. \n Contribute to documentation and feedback processes to improve future question sets and project workflows",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cad-specialist",
            "Aerospace-consultant"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/aerospace-cad-expert",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-3",
        "title": "Technical Writer",
        "title_ar": "كاتب ومحرر محتوى (Technical Writer)",
        "company": "micro1",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada, United Kingdom, United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$90 - $140 USD",
        "description": "Role Title: Technical Writer Role Type: Contractor Location: United States, Canada, United Kingdom micro1 is engaging Technical Writers to contribute expertise on a customer project focused on advanced AI system development. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. This opportunity is ideal for those who excel at nuanced written and verbal communication and have a keen sense for clarity, tone, and instructional value. You will participate in a Write-like-Human Eval, where you compare model-generated responses to writing prompts, offering analytical quality scores and detailed rationales via the Feather platform. Scope of Work \n Evaluate and compare multiple AI-generated responses to specific writing prompts, focusing on clarity, tone, helpfulness, and adherence to instructions. \n Provide comprehensive rationales and scoring using the Feather platform, justifying assessments with clear, concise feedback. \n Identify opportunities to enhance the overall quality and instructional value of language model outputs. \n Apply expert judgment to assess subtle differences in writing quality and effectiveness. \n Maintain meticulous attention to detail when reviewing content and documenting findings. \n Collaborate asynchronously with project managers and reviewers to ensur",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Technical-writer",
            "It-technical-writer",
            "Technical-content-writer"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/technical-writer-8891880471",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-4",
        "title": "Senior Data Engineer – Healthcare Technology",
        "title_ar": "مهندس ومطور برمجيات (Senior Data Engineer – Healthcare Technology)",
        "company": "Elevated Hires",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$155,000 - $195,000 USD",
        "description": "Senior Data Engineer – Healthcare Technology Elevated Hires is recruiting a Senior Data Engineer to build and scale a modern healthcare data platform supporting analytics, care coordination, and value-based care. This position is ideal for an experienced engineer who can independently make high-impact architectural decisions and develop secure, reliable data systems. Candidates located in Pittsburgh are preferred; qualified U.S.-based remote candidates will also be considered. Key Responsibilities \n Architect scalable, secure, and highly reliable data systems. \n Build and maintain production-grade pipelines that ingest, process, and enrich large volumes of healthcare data. \n Establish data-quality, governance, monitoring, and validation standards. \n Optimize system performance through query tuning, indexing, partitioning, and related strategies. \n Design and deploy cloud infrastructure using infrastructure-as-code practices. \n Protect sensitive healthcare information and maintain HIPAA and HITRUST compliance. \n Collaborate with engineering, product, analytics, and clinical operations teams. \n Contribute to system architecture, CI/CD, test automation, and DevOps standards. \n Simplify complex technical problems and make independent architectural decisions. \n Required Qualifications \n At least five years of dedicated data engineering experience. \n Hands-on experience with Innovaccer’s Data Activation Platform, including ingestion frameworks, connectors, data models, and interope",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Elevated Hires. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Healthcare-data-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/elevated-hires/jobs/senior-data-engineer-healthcare-technology",
        "logo": "https://cdn-images.himalayas.app/xoo1lq63xsq3i271al1bctn5wevc",
        "companyLogo": "https://cdn-images.himalayas.app/xoo1lq63xsq3i271al1bctn5wevc",
        "image": "https://cdn-images.himalayas.app/xoo1lq63xsq3i271al1bctn5wevc",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-5",
        "title": "Marketing Growth Business Partner",
        "title_ar": "أخصائي تسويق ونمو (Marketing Growth Business Partner)",
        "company": "Flowmingo",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "About Flowmingo AI Flowmingo is a Y Combinator-backed startup (plus VinaCapital & top global investors) on a mission to democratize hiring. We believe the current hiring model is broken: recruiters only have time to interview 5% of applicants, leaving 95% of talent—the \"hidden gems\"—undiscovered. We are fixing this with an AI-native, high-volume interviewing platform. Our model is unique: we offer our tool for free to recruiters to capture the massive, uncontested markets of Southeast Asia, LATAM, and Africa. This allows us to process massive volumes of candidates that traditional, expensive platforms cannot touch. About the Role As a Marketing Growth Business Partner, you will help amplify Flowmingo through content, community, and thought leadership. You will spark conversations, educate audiences about modern hiring, and guide interested teams toward adopting the platform. This is a referral-based role with no fixed hours. Whether you're an agency recruiter, HR consultant, talent acquisition expert, or simply someone with strong ties in the hiring space, this role offers flexibility and high-impact potential. What You’ll Do \n Introduce Flowmingo to your network and community. \n Share how our AI interview platform transforms hiring and saves time. \n Serve as a trusted point of contact and thought partner as users explore the platform. \n Provide real-time market feedback to help improve our product and programs. \n Operate independently and earn based on your results. \n Who Th",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Flowmingo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Growth-marketing-manager",
            "Partner-growth-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/flowmingo/jobs/marketing-growth-business-partner",
        "logo": "https://cdn-images.himalayas.app/v4ww6028a74rnswnhr4xnu7nxv4g",
        "companyLogo": "https://cdn-images.himalayas.app/v4ww6028a74rnswnhr4xnu7nxv4g",
        "image": "https://cdn-images.himalayas.app/v4ww6028a74rnswnhr4xnu7nxv4g",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-6",
        "title": "Industrial Design CAD Expert",
        "title_ar": "Industrial Design CAD Expert (تصميم وإبداع)",
        "company": "micro1",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Worldwide",
        "location_ar": "عن بُعد / عالمي",
        "salary": "$40 - $80 USD",
        "description": "Role Title: Industrial Design CAD Expert Role Type: Contractor Location: Remote micro1 is engaging Industrial Design CAD Experts to contribute to a customer project focused on advanced multi-part assemblies. In this role, you'll apply your expertise to help train next-generation AI systems. Your work will shape how models learn, reason, and perform through high-quality, real-world input. No prior experience in AI is required — your domain knowledge is what matters. Scope of Work \n Review complex multi-part CAD assemblies provided in native FreeCAD format and analyze their design intent. \n Author clear, objective, and non-guessable technical questions with exact answers based on the details and functions of the assemblies. \n Develop several unique questions for each assembly, ensuring comprehensive coverage of their structure, function, and relationships. \n Ensure clarity, precision, and unambiguity in all submitted questions and answers to support AI training data requirements. \n Leverage your expertise in mechanical engineering, aerospace, or industrial design to identify key assembly features and technical nuances. \n Collaborate with project coordinators, providing feedback and suggestions for continuous improvement of project processes. \n Preferred Qualifications \n Demonstrated background in mechanical engineering, aerospace, or industrial design with strong foundational CAD knowledge. \n Expertise in interpreting multi-part assembly drawings, technical documentation, and C",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة micro1. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Cad-designer",
            "Cad-specialist",
            "3d-cad-designer",
            "Technical-cad-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/micro1/jobs/industrial-design-cad-expert",
        "logo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "companyLogo": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "image": "https://cdn-images.himalayas.app/91oa56akgt3qjqc1nh3uoruub40c",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-7",
        "title": "HubSpot CRM Strategist",
        "title_ar": "HubSpot CRM Strategist (برمجة وتكنولوجيا)",
        "company": "The Global Talent Co.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina, Brazil, Chile",
        "location_ar": "Argentina, Brazil, Chile",
        "salary": "Competitive",
        "description": "HUBSPOT CRM STRATEGIST The role: You will work with a company focused on delivering strategic, high-impact CRM solutions through the HubSpot ecosystem, helping clients optimize the full customer lifecycle across marketing, sales, customer success, and operations. Position: HubSpot CRM Strategist (Full-Time | Remote) Seeking a highly client-facing HubSpot CRM Strategist with deep expertise in HubSpot implementations, configuration, and customer lifecycle strategy . In this role, you will lead large-scale HubSpot projects, act as a trusted advisor to senior-level clients, and deliver CRM solutions that drive measurable business impact. You will serve as the face of the company to customers, building strong relationships and ensuring every client receives an exceptional experience while achieving strategic business goals. Responsibilities: Client Success - Lead large-scale HubSpot implementation projects aligned with client business goals and operational needs. - Address client feedback and concerns promptly while maintaining a high standard of customer satisfaction. - Build trusted relationships with senior-level stakeholders and position the company as an indispensable growth partner. - Deliver high-quality CRM and customer lifecycle strategies across marketing, sales, customer success, and operations. - Identify strategic opportunities to expand project scope and recommend complementary services aligned with client goals. - Stay informed on industry trends, competitive landsc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة The Global Talent Co.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Crm-strategist",
            "Hubspot-crm-specialist",
            "Hubspot-consultant",
            "Hubspot-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/the-global-talent-co/jobs/hubspot-crm-strategist",
        "logo": "https://cdn-images.himalayas.app/xyyduqad6o102umgm4se4p50d61j",
        "companyLogo": "https://cdn-images.himalayas.app/xyyduqad6o102umgm4se4p50d61j",
        "image": "https://cdn-images.himalayas.app/xyyduqad6o102umgm4se4p50d61j",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-8",
        "title": "Frontend Engineer",
        "title_ar": "مهندس ومطور برمجيات (Frontend Engineer)",
        "company": "Bjak",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Poland",
        "location_ar": "Poland",
        "salary": "Competitive",
        "description": "About ActAI There are over 5 billion users using basic applications today such email, notes, tasks, calendar and they're not AI-native. Our mission is to build proactive applications for anyone in the world, who are not used to complex prompting. We aim to bring intelligence to conversations, errands, organising and workflows, with minimal to no prompting. Our application focuses on achieving high reliability for long-running workflows, persistent context, and real-world task completion. We believe products will greatly reduce hallucinations Our objective is to organise anyone's life. Role As a Web Frontend Engineer, you will build the core web experiences, including Chat, Notes, Calendar, Docs and Sheets. You will own complex, highly interactive product surfaces from architecture through implementation, working closely with product, design, backend and AI engineers to make AI a native part of how users communicate, write, organise and work. What You'll Own \n Build major web experiences across Chat, Notes, Calendar, Docs, and Sheets. \n Develop complex interactions including real-time messaging, collaborative editing, rich-text editing, scheduling, tables, and spreadsheets. \n Build reusable frontend architecture and components that work consistently across ActAI applications. \n Integrate streaming AI responses, proactive actions, and model-driven experiences directly into product workflows. \n Own frontend performance, responsiveness, reliability and accessibility across browse",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Frontend-engineer",
            "Web-frontend-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/frontend-engineer",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-9",
        "title": "Senior Product Manager, Growth (10-to-100)",
        "title_ar": "أخصائي تسويق ونمو (Senior Product Manager, Growth (10-to-100))",
        "company": "Jerry",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$160,000 - $210,000 USD",
        "description": "Why you should join us Jerry .ai is a profitable, Series C, YC-backed tech startup with 5M+ customers and $240M in funding. We’re building the first AI-powered advisor to manage all your physical assets. We started with car insurance in 2019, now we’re expanding into new verticals (e.g. home, motorcycle, RV, boat) and accelerating our growth. The opportunity is massive — car insurance alone is a $300B market in the U.S. We spent the last few years building our supply (we work with 100+ insurance carriers) and our technical infrastructure (60% of policies today are sold automatically without human intervention, 90% of inbound customer inquiries are resolved via AI and automation). The next chapter is about accelerating our growth — going from 5M to 50M customers by 2030. About this role The Growth team owns the entire customer sign-up and purchase funnel for our car insurance marketplace, and drives how millions of people discover, evaluate, and become a Jerry customer. We’re looking for a Senior Product Manager to own the customer journey from first impression through purchase and beyond. This role sits at the heart of our business - you’ll take end-to-end ownership of high-impact funnels that directly move the needle on our north star goal. This is not a “growth hacking” role or one that prioritizes revenue at the cost of the customer experience and trust — we care about building a durable growth engine by creating a magical customer experience and providing unreasonable hos",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Jerry. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Growth-product-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/jerry/jobs/senior-product-manager-growth-10-to-100",
        "logo": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "companyLogo": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "image": "https://cdn-images.himalayas.app/x6cqdny38zc2z6et7tnkj9zaocdr",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-10",
        "title": "Staff Forward Deployed Engineer",
        "title_ar": "مهندس ومطور برمجيات (Staff Forward Deployed Engineer)",
        "company": "Kong",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$192,010 - $274,300 USD",
        "description": "Are you ready to unlock intelligence? If you don’t think you meet all of the criteria below but are still interested in the job, please apply. Nobody checks every box - we’re looking for candidates that are particularly strong in a few areas, and have some interest and capabilities in others. About the Role: Join the global leader in API and AI governance in the era of Artificial Intelligence! API traffic now outnumbers human traffic online, and a significant portion of that traffic is powered by the Kong platform, the world’s most popular API gateway. As organizations modernize for AI-driven connectivity, Kong is uniquely positioned at the center of enterprise transformation. We are seeking a Forward Deployed Engineer (FDE) to join Kong ’s growing Professional Services organization. This is a highly strategic, customer-facing engineering role focused on helping enterprise customers accelerate adoption of Kong ’s API and AI Connectivity platform through hands-on implementation, automation, migration tooling, and solution engineering. As an FDE, you will work directly alongside customer engineering teams to solve complex technical challenges, accelerate migrations, build reusable automation, and deliver production-grade solutions in real-world enterprise environments. You will operate at the intersection of software engineering, architecture, platform engineering, and customer delivery. This role is ideal for engineers who enjoy building, coding, solving ambiguous problems, an",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kong. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Forward-deploy-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/kong/jobs/staff-forward-deployed-engineer",
        "logo": "https://cdn-images.himalayas.app/iiscvtmpw5x6mkao4ncys1rrdclh",
        "companyLogo": "https://cdn-images.himalayas.app/iiscvtmpw5x6mkao4ncys1rrdclh",
        "image": "https://cdn-images.himalayas.app/iiscvtmpw5x6mkao4ncys1rrdclh",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-11",
        "title": "Senior Media Buyer – Meta Ads",
        "title_ar": "Senior Media Buyer – Meta Ads (برمجة وتكنولوجيا)",
        "company": "RevStone",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Philippines",
        "location_ar": "Philippines",
        "salary": "$7 - $10 USD",
        "description": "Senior Media Buyer – Meta Ads Fully Remote (International) | Full-Time Contractor | Paid in USD $7.25 – $10.25 USD/hour , based on experience and demonstrated results Can you launch a lead-generation campaign, read the data, and know exactly what to fix? Do you understand why an ad underperforms — and what to test next? If paid advertising is your craft, keep reading. We're hiring a Senior Media Buyer on behalf of a U.S.-based marketing agency serving home service and remodeling brands. You'll own paid ad campaigns across Facebook and Instagram for 8–12 client accounts — driving real leads for real businesses, with your results visible every single week. This is a performance-driven role. Vanity metrics don't matter here. CPL, ROAS, and conversion rates do. \n WHAT YOU'LL DO Campaign Management \n Launch, monitor, and scale campaigns across Facebook and Instagram \n Own 8–12 client ad accounts simultaneously \n Run structured A/B tests on creatives, audiences, headlines, and offers \n Analyze performance data and make optimization decisions based on real results — not hunches \n Creative & Copy \n Write direct-response ad copy in English for lead generation campaigns \n Build static ad creatives using Canva and Midjourney \n Contribute to creative strategy and funnel optimization \n Reporting & Communication \n Track and report on the KPIs that matter: CPL, CTR, ROAS, and conversion rates \n Communicate campaign updates and performance insights to the internal team \n Flag issues early — ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة RevStone. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Senior-meta-media-buyer",
            "Meta-ads-media-buyer",
            "Senior-paid-media-buyer"
        ],
        "applyUrl": "https://himalayas.app/companies/revstone/jobs/senior-media-buyer-meta-ads",
        "logo": "https://cdn-images.himalayas.app/qu8qtkzxdj3ycc3jl1vxd42bcu1y",
        "companyLogo": "https://cdn-images.himalayas.app/qu8qtkzxdj3ycc3jl1vxd42bcu1y",
        "image": "https://cdn-images.himalayas.app/qu8qtkzxdj3ycc3jl1vxd42bcu1y",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-12",
        "title": "Business Development Associate (Partnerships)",
        "title_ar": "Business Development Associate (Partnerships) (تصميم وإبداع)",
        "company": "The Global Talent Co.",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina, Chile, Colombia",
        "location_ar": "Argentina, Chile, Colombia",
        "salary": "Competitive",
        "description": "Business Development Associate (Partnerships) Full-time | LATAM - Remote | EST Hours Check out The Global Talent Co. ’s talent network: About Us At The Global Talent Co. , we provide opportunities to work with leading innovative technology companies worldwide, offering stable employment, competitive compensation, career growth, and access to a community of 25k+ like-minded professionals. Our mission is to bridge the gap between leading global tech companies and amazing global talent. We believe everyone deserves equal access to opportunities, regardless of the country they are born in. About the Company You’ll Be Working With You’ll be joining a fast-growing pet wellness brand whose mission is to reimagine pet food—one wholesome bowl at a time—by creating vet-developed recipes made from real, trusted ingredients. The business operates with the agility of a startup while benefiting from the resources of a global organization. The Role We are looking for a proactive and driven Business Development Associate (Partnerships) to join their growth marketing team. This role reports directly to the Senior Manager, Business Development and will take full ownership of the Partnerships channel , a key offline customer acquisition driver. You’ll work with exciting brands across the U.S., build and manage partnerships end-to-end, and help scale other offline marketing channels as the company grows. This is an outward-facing role best suited to someone who thrives on relationship-building, ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة The Global Talent Co.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Partnerships-associate"
        ],
        "applyUrl": "https://himalayas.app/companies/the-global-talent-co/jobs/business-development-associate-partnerships",
        "logo": "https://cdn-images.himalayas.app/xyyduqad6o102umgm4se4p50d61j",
        "companyLogo": "https://cdn-images.himalayas.app/xyyduqad6o102umgm4se4p50d61j",
        "image": "https://cdn-images.himalayas.app/xyyduqad6o102umgm4se4p50d61j",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-13",
        "title": "Creative Project Executive",
        "title_ar": "Creative Project Executive (أخرى)",
        "company": "Bjak",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Malaysia",
        "location_ar": "Malaysia",
        "salary": "Competitive",
        "description": "About BJAK The original mission of BJAK is we believe people deserve smarter ways to plan, save and grow their money. This is the origin of our name. Started in 2019, we built the first mobile-first, insurance platform, enabling insurance to be accessible online by millions in the region. Today, its the leading insurance platform in Southeast Asia. Today, we are expanding ways to help people in the region — this includes spending, saving, investing, exchanging, travelling, and more. Our mission is help people get more from their money every day. We have teams working around the world, with over 20 nationalities from our offices and remotely, who truly enjoys their work. We are looking for the most talented and driven people we can find. We are looking for people who work for their passion, not counting hours. Who loves building great next-generation products, not status quo. Who cares about redefining how everyone around us can get the best financial applications, not for an exclusive few. If you're this person, we'd love to talk to you. The Role We are looking for a Creative Project Executive to join our team. The ideal candidate will have a passion for crafting great campaigns, videos, and visual stories. You’ll oversee the smooth and timely execution of event and activation ideas, the production of bold and high-impact creative work, and community growth. What You’ll Do 1. Project & Workflow Management \n Manage creative project intake, ensuring requests are clearly briefed",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bjak. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project-executive"
        ],
        "applyUrl": "https://himalayas.app/companies/bjak/jobs/creative-project-executive",
        "logo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "companyLogo": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "image": "https://cdn-images.himalayas.app/8ub8wtihrfrm3vfivlkcojai4np3",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209028-14",
        "title": "Principal Backend Engineer",
        "title_ar": "مهندس ومطور برمجيات (Principal Backend Engineer)",
        "company": "Teya",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Latvia",
        "location_ar": "Latvia",
        "salary": "$5,600 - $8,700 EUR",
        "description": "Hello. We’re Teya . Teya was founded on a simple belief: local businesses deserve better. They are the cafés, restaurants, salons, shops and entrepreneurs that bring character to our high streets, create jobs and keep communities moving. Yet for too long, financial services has made life harder for them - with clunky tools, poor support and complexity that gets in the way of running a business. \n Teya exists to change that. We’re building a financial platform for local businesses across Europe - one built around simple tools, thoughtful design and real human support. Our Members rely on us to help them run their business with confidence, and that responsibility shapes the way we work. We move fast. We care about quality. We stay close to the detail. And we believe great performance and genuine hospitality should go hand in hand. If you want to build meaningful products, solve real problems and make a genuine difference for local businesses, we’d love to hear from you Your Mission Small businesses are the backbone of our communities — yet they remain underserved by traditional banks and legacy payment providers. As a Principal Backend Engineer, you will play a defining role in changing that. Your mission is to design and build the resilient, scalable fintech infrastructure that underpins our most critical business initiatives. This isn’t about owning a single service — it’s about owning outcomes. You will drive the technical success of the platforms that power payments, mercha",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Teya. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Backend-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/teya/jobs/principal-backend-engineer-6441026348",
        "logo": "https://cdn-images.himalayas.app/umfzqh4d5yznkm0cq7m930ynq28l",
        "companyLogo": "https://cdn-images.himalayas.app/umfzqh4d5yznkm0cq7m930ynq28l",
        "image": "https://cdn-images.himalayas.app/umfzqh4d5yznkm0cq7m930ynq28l",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-15",
        "title": "Product Engineer — AI Infrastructure / Devtools",
        "title_ar": "مهندس ومطور برمجيات (Product Engineer — AI Infrastructure / Devtools)",
        "company": "Lavendo",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$235,000 - $260,000 USD",
        "description": "Lavendo partners with startups and high‑growth companies to help them hire top‑tier sales, GTM, and technical talent. This role is with one of our clients; we’ll share full details about the company and interview process as we get to know you and confirm mutual fit. About the Company Our client builds the data layer that AI agents actually run on. One API call turns any URL into clean, LLM-ready markdown or structured data — the boring-hard problem every team building with AI eventually slams into, solved for good. They hit eight figures in ARR in year one, then more than doubled it. 150,000+ GitHub stars and climbing, driven entirely by word of mouth — no paid acquisition, no growth hacks. Over 1.25 million developers and 150,000+ companies build on this platform today. They just closed a Series A led by a top-tier VC firm, with their existing accelerator and a well-known tech CEO angel investor also in the round. The team is roughly 35 to 39 people. Small on purpose. Hybrid in San Francisco, working shoulder to shoulder with the founder. The Mission Every AI lab, every agent, every model needs clean web data, and that demand isn't slowing down. This team is building the infrastructure that superintelligence will lean on to read and act on the web. You'd be getting in while the category is still being drawn, on a problem that gets more central to AI every single month. The Opportunity As a Product Engineer, you'll build the thing developers reach for when they need to turn t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Lavendo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai-product-engineer",
            "Ai-tools-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/lavendo/jobs/product-engineer-ai-infrastructure-devtools",
        "logo": "https://cdn-images.himalayas.app/j6oscwwawti8orzg0qr9oekfjgrm",
        "companyLogo": "https://cdn-images.himalayas.app/j6oscwwawti8orzg0qr9oekfjgrm",
        "image": "https://cdn-images.himalayas.app/j6oscwwawti8orzg0qr9oekfjgrm",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-16",
        "title": "Senior Frontend Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Frontend Engineer)",
        "company": "Hire Hangar",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina, Bolivia, Chile",
        "location_ar": "Argentina, Bolivia, Chile",
        "salary": "$1,500 - $4,000 USD",
        "description": "Join Hire Hangar and work with fast-growing global companies while building a long-term career. Job Title: Senior Frontend Engineer Location: Remote Time Zone: US Time Zones (EST–PST) Role Overview We are seeking a Senior Frontend Engineer to build AI-powered product interfaces and analytics-driven user experiences. This role is ideal for someone who enjoys building highly interactive frontend applications using modern React architecture and AI integrations. Key Responsibilities \n Build and maintain frontend applications using React 19 and Next.js App Router \n Develop dashboards and data-heavy interfaces \n Translate designs into responsive production-ready UI \n Build complex forms and scalable frontend components \n Integrate AI-powered workflows and LLM functionality \n Work with real-time frontend data flows \n Optimize frontend performance and usability \n Collaborate with product, design, and engineering teams remotely \n Required Qualifications \n Strong production experience with React 19 and Next.js App Router \n Expert-level TypeScript strict mode experience (non-negotiable) \n Strong Tailwind CSS implementation skills \n Experience building dashboards, analytics tools, or data-heavy applications \n Experience with Server Components and frontend state management \n Production experience integrating LLM APIs into applications \n Practical prompt engineering experience \n Experience with OpenAI APIs or AI SDKs \n Familiarity with AI-assisted development tools such as Cursor, Copilot,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Hire Hangar. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://himalayas.app/companies/hire-hangar/jobs/senior-frontend-engineer",
        "logo": "https://logo.clearbit.com/hirehangar.com",
        "companyLogo": "https://logo.clearbit.com/hirehangar.com",
        "image": "https://logo.clearbit.com/hirehangar.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-17",
        "title": "Storyous Product Designer (UX/UI)",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Storyous Product Designer (UX/UI))",
        "company": "Teya",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Czechia",
        "location_ar": "Czechia",
        "salary": "Competitive",
        "description": "Storyous je pokladní systém pro gastro podniky, který funguje samostatně v rámci fintech skupiny Teya , k níž jsme se připojili v roce 2021. Naše portfolio stojí na robustním pokladním systému, pokročilé datové analytice a dalších modulech, které ve spojení s integracemi a vlastním platebním řešením Teya tvoří komplexní all-in-one řešení pro jednotlivé podniky i řetězce s desítkami poboček. Hledáme Product Designera/ku , který/á bude designovým partnerem pro Product a Engineering a převezme odpovědnost za UX/UI napříč celým produktem. Budeš převádět produktová zadání a vlastní nápady do promyšlených návrhů a prototypů, hledat příležitosti ke zjednodušení uživatelských cest a podílet se na tom, jak bude Storyous fungovat v praxi. Jedná se o nově vytvořenou roli s velkou mírou autonomie. Máme existující design language a designové podklady ve Figmě , ale současně plánujeme větší redesign tabletové aplikace a chceme náš design dále sjednocovat a rozvíjet. Co tě v roli čeká \n Budeš navrhovat UX/UI napříč tabletovou aplikací, webovým Adminem, mobilní aplikací, Kioskem a Premium Analytics. \n Zapojíš se do přípravy a realizace většího redesignu tabletové aplikace. \n Budeš převádět produktová zadání, zákaznické potřeby a vlastní návrhy do user flow, wireframů, interaktivních prototypů a finálních návrhů ve Figmě. \n Budeš aktivně hledat místa, kde lze produkt nebo uživatelskou cestu zjednodušit a zlepšit. \n Vyrazíš do terénu za našimi zákazníky, povedeš user interviews, budeš pozorova",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Teya. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-designer",
            "Ux-designer",
            "Ui-ux-designer"
        ],
        "applyUrl": "https://himalayas.app/companies/teya/jobs/storyous-product-designer-ux-ui",
        "logo": "https://cdn-images.himalayas.app/umfzqh4d5yznkm0cq7m930ynq28l",
        "companyLogo": "https://cdn-images.himalayas.app/umfzqh4d5yznkm0cq7m930ynq28l",
        "image": "https://cdn-images.himalayas.app/umfzqh4d5yznkm0cq7m930ynq28l",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-18",
        "title": "Lead Copywriter",
        "title_ar": "مدير وقائد فريق (Lead Copywriter)",
        "company": "FYXER",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Fyxer Fyxer is building an AI executive assistant that handles emails, scheduling and follow-up, freeing people in client-facing roles to focus on their customers. It's the digital assistant for everyone drowning in their inbox, helping thousands of professionals reclaim hours they didn't even know they could get back. The Role We're looking for an exceptional contract Copywriter to join our London Marketing team. As a company trusted by hundreds of thousands to draft their emails, we know how much language matters. So when our writing shows up in the world, our words need to be on point! What You’ll Do \n Write and edit compelling copy across platforms and channels (email, landing pages, product launches) \n Maintain and evolve Fyxer's tone of voice across platforms, ensure accuracy, clarity, and consistency, optimizing for engagement, clarity and impact \n Collaborate with designers to bring ideas to life and drive acquisition, retention and engagement of high quality customers \n Optimise copy using insights from user behaviour, engagement data, and A/B tests. \n Conduct market, audience, and competitor research to inform messaging \n Bring fresh, diverse perspectives to a high-performing team to further drive innovation and raise the bar \n What We’re Looking For \n 3-5+ years of experience writing high-converting marketing copy (eg. emails, landing pages) \n Excellent editorial judgment and mastery of tone, clarity, and CTAs. Exceptional attention to detail and commitment t",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة FYXER. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Lead-copywriter",
            "Copywriting-lead",
            "Copywriting-team-lead",
            "Senior-copywriter"
        ],
        "applyUrl": "https://himalayas.app/companies/fyxer/jobs/lead-copywriter",
        "logo": "https://cdn-images.himalayas.app/mja1bdls07d1etb5se9pigvijl0l",
        "companyLogo": "https://cdn-images.himalayas.app/mja1bdls07d1etb5se9pigvijl0l",
        "image": "https://cdn-images.himalayas.app/mja1bdls07d1etb5se9pigvijl0l",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-19",
        "title": "Accounts Payable Clerk",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Accounts Payable Clerk)",
        "company": "Careerswift",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$20 - $27 USD",
        "description": "Bilgewater Group is a Chicago-based diversified services company founded in 2003. We operate across two core divisions: food service and care. Our food service division manages a network of quick-service and counter-service locations across the greater Chicagoland area, serving thousands of customers every day at high-traffic venues, including commercial districts, transit hubs, and retail centers. ABOUT THE ROLE We are looking for an Accounts Payable Clerk to support the processing and maintenance of vendor invoices and payment records. This role is ideal for someone who is detail-oriented, organized, and comfortable working with financial information and routine accounting tasks in a remote environment. WHAT YOU WILL DO \n Process and enter vendor invoices into accounting systems \n Review invoices for accuracy, completeness, and appropriate documentation \n Maintain accurate accounts payable records \n Assist with payment processing and account reconciliations \n Research and resolve routine invoice or payment discrepancies \n Communicate with vendors and internal teams regarding invoices and payments \n Maintain organized financial documentation and records \n WHAT WE ARE LOOKING FOR \n Previous experience in accounts payable, accounting, bookkeeping, finance, or a similar role \n Strong attention to detail and accuracy \n Comfortable working with numbers, invoices, and financial records \n Basic proficiency with Microsoft Excel or Google Sheets \n Good organization and follow-up skil",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Careerswift. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Accounts-payable-clerk",
            "Payables-clerk",
            "Accounts-payable-officer"
        ],
        "applyUrl": "https://himalayas.app/companies/careerswift/jobs/accounts-payable-clerk",
        "logo": "https://cdn-images.himalayas.app/waboegdjl9t73s8zi9w5438eio8g",
        "companyLogo": "https://cdn-images.himalayas.app/waboegdjl9t73s8zi9w5438eio8g",
        "image": "https://cdn-images.himalayas.app/waboegdjl9t73s8zi9w5438eio8g",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-20",
        "title": "Business Development Executive",
        "title_ar": "Business Development Executive (المبيعات والنمو)",
        "company": "iwoca",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United Kingdom",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "$78,000 - $83,000 GBP",
        "description": "The company Small businesses move fast. Opportunities often don’t wait, and cash flow pressures can appear overnight. To keep going, and growing, SMEs need finance that’s as flexible and responsive as they are. That's why we built iwoca . Our smart technology, data science and five-star customer service ensures business owners can act with the speed, confidence and control they need, exactly when it's needed. We’ve already cleared the way for 100,000 businesses with more than £4 billion in funding. Our passionate team is driven to help even more SMEs succeed, through access to better finance and other services that make running a business easier. Our ultimate mission is to support one million SMEs in their defining moments, creating lasting impact for the communities and economies they drive. We’re looking for a Business Development Executive This is an exciting opportunity for an experienced outbound sales professional to join our direct sales team to qualify and convert leads in a fast paced and fun environment. You'll benefit from an uncapped commission structure , giving you full control over your earnings. OTE of £78k-£83k, with even higher earning potential available through promotion. The role As a Business Development Executive you’ll build a high quality pipeline of prospects and generate revenue by making outbound calls, booking meetings, following up with customers, using Social Selling tools, and much more. Each interaction with a potential new customer is unique,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة iwoca. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://himalayas.app/companies/iwoca/jobs/business-development-executive",
        "logo": "https://cdn-images.himalayas.app/vw5y5sb0kow81p8rjh3zlx86fdcb",
        "companyLogo": "https://cdn-images.himalayas.app/vw5y5sb0kow81p8rjh3zlx86fdcb",
        "image": "https://cdn-images.himalayas.app/vw5y5sb0kow81p8rjh3zlx86fdcb",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789209029-21",
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
        "id": "job-1789209029-22",
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
        "id": "job-1789209029-23",
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
        "id": "job-1789209029-24",
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
        "id": "job-1789209029-25",
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
        "id": "job-1789209029-26",
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
        "id": "job-1789209029-27",
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
        "id": "job-1789209029-28",
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
        "id": "job-1789209029-29",
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
        "id": "job-1789209029-30",
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
        "id": "job-1789209029-31",
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
        "id": "job-1789209029-32",
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
        "id": "job-1789209029-33",
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
        "id": "job-1789209029-34",
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
        "id": "job-1789209029-35",
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
        "id": "job-1789209029-36",
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
        "id": "job-1789209029-37",
        "title": "Marketing Minijob (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Marketing Minijob (m/w/d))",
        "company": "BIMraum GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Böblingen",
        "location_ar": "Böblingen",
        "salary": "Competitive",
        "description": "🌟 Gestalte die Zukunft der Bau- und Immobilienbranche mit BIMraum GmbH! 🌟 \n Bist du bereit, die Ärmel hochzukrempeln und die Welt von Building Information Modeling (BIM) zu revolutionieren? Bei BIMraum, einem innovativen Tech-Startup aus Böblingen, suchen wir nach einer kreativen Persönlichkeit, die unser Marketingteam als Marketing & Social Media Minijobber:in unterstützt und unsere Marke auf LinkedIn, Instagram & Co. ins Rampenlicht stellt. \n Deine Aufgaben: \n- Social Media Rockstar : Plane, erstelle und poste Inhalte auf LinkedIn und Instagram. Baue mit uns Schritt für Schritt unsere Reichweite auf. \n- Content & Storytelling Guru : Erstelle Posts, Grafiken und kurze Videos, die BIMraum und unsere KI-Software proxino verständlich und sichtbar machen. \n- Markenvisionär:in : Gestalte unseren Außenauftritt mit – von Logo über Website bis hin zu einem einheitlichen Erscheinungsbild. \n- Web-Profi : Pflege und entwickle unsere Website, damit sie immer up-to-date ist. \n- proxino-Sparringspartner:in : Hilf uns, proxino einfach und überzeugend nach außen zu erklären. \n Aufgaben \n Was du mitbringst: \n- Erfahrung oder echtes Interesse an Social-Media- und Content-Marketing, insbesondere auf LinkedIn und Instagram. \n- Ein gutes Gespür für Text, Bild und Marke. \n- Eigenständige, strukturierte Arbeitsweise – du teilst dir ~10 Stunden pro Woche frei ein. \n- Lust auf das Abenteuer Startup und die Möglichkeit, viel selbst zu gestalten. \n- Bau-Vorwissen ist nicht erforderlich – wir bringen e",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة BIMraum GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing manager"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/bimraum-gmbh/marketing-minijob-boblingen-377155",
        "logo": "https://logo.clearbit.com/bimraumgmbh.com",
        "companyLogo": "https://logo.clearbit.com/bimraumgmbh.com",
        "image": "https://logo.clearbit.com/bimraumgmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-38",
        "title": "Senior Software Engineer - US Payments and Partner Operations (m/f/d)",
        "title_ar": "مهندس ومطور برمجيات (Senior Software Engineer - US Payments and Partner Operations (m/f/d))",
        "company": "raisin",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Raisin is the world’s leading platform for savings and investment products. Founded in 2012, the FinTech connects consumers with banks in the EU, the UK and the US. This gives consumers better interest rates and banks a diversified form of refinancing . Our vision is to offer savings and investments without barriers and thus open up the global 160 trillion euro market. \n Raisin currently employs more than 800 people from over 75 countries worldwide. Today, the platform holds over 80 billion euros in assets from more than one million investors which have accrued over 5 billion euros in returns. Team \n The US Payments & Partner Operations (PPO) team owns the core money-movement stack for the Raisin US’ platform: ACH payment initiation, reconciliation, returns, and cut-off scheduling, plus the customer accounts lifecycle — bank linking, fraud signal integration, and identity verification. Beyond payments, the team manages the B2B layer: onboarding and configuring Deposit-taking Banks, service banks, and custodians, including their user/role management. It also covers invoicing data pipelines for Deposit taking banks, escheatment workflows for dormant accounts and visibility for operations and customer support through our internal platform portal. \n Your Responsibilities \n Own and deliver features and bug fixes end-to-end with minimal guidance. \n Identify and address bottlenecks in the team's delivery flow, from design to deployment. \n Utilize AI tools intensively for increasing ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة raisin. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/raisin/senior-software-engineer-us-payments-and-partner-operations-berlin-berlin-455337",
        "logo": "https://logo.clearbit.com/raisin.com",
        "companyLogo": "https://logo.clearbit.com/raisin.com",
        "image": "https://logo.clearbit.com/raisin.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-39",
        "title": "Senior Partnerships Manager DACH (m/f/d)",
        "title_ar": "مدير وقائد فريق (Senior Partnerships Manager DACH (m/f/d))",
        "company": "raisin",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Raisin is the world’s leading platform for savings and investment products. Founded in 2012, the FinTech connects consumers with banks in the EU, the UK and the US. This gives consumers better interest rates and banks a diversified form of refinancing . Our vision is to offer savings and investments without barriers and thus open up the global 160 trillion euro market. \n Raisin currently employs more than 800 people from over 75 countries worldwide. Today, the platform holds over 80 billion euros in assets from more than one million investors which have accrued over 5 billion euros in returns. Team \n Join our Partnerships Management team, the group responsible for some of Raisin’s most important strategic relationships. In this role, you’ll work directly with senior stakeholders at banks, helping them succeed on our platform and shaping long-term collaboration. \n In addition, you will contribute to key projects - from launching new savings products on the marketplace to supporting technical bank migrations and much more. Because our impact and stakeholder network are broad, we maintain a unique view of priorities and upcoming changes. Colleagues across the business rely on our team to communicate these changes clearly and explain their impact. \n Your Responsibilities \n Own and grow partnerships: Build strong, day-to-day relationships with our partner banks, ensuring smooth collaboration and shared success - enabled by in-person meetings. \n Understand and enable: Develop a dee",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة raisin. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Deposits"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/raisin/senior-partnerships-manager-dach-berlin-berlin-314344",
        "logo": "https://logo.clearbit.com/raisin.com",
        "companyLogo": "https://logo.clearbit.com/raisin.com",
        "image": "https://logo.clearbit.com/raisin.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-40",
        "title": "Solutions Architect, CustomerLake",
        "title_ar": "Solutions Architect, CustomerLake (برمجة وتكنولوجيا)",
        "company": "databricks",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Marketing teams are stuck between fragmented customer data and martech stacks that copy that data into proprietary silos while customers expect real-time, personalized experiences. Customer Lake, the agentic Customer Data Platform (CDP) built natively into Databricks, changes that equation. It unifies first- and third-party data into governed Customer 360 profiles, resolves identities, and uses agents to build audiences, recommend next-best actions, and activate campaigns across channels, all without copying data out of the Lakehouse or adding vendor lock-in. \n The Solutions Architect (Customer Lake) team is part of a dedicated, global go-to-market organization focused on driving adoption and revenue growth for Customer Lake, Databricks’ agentic Customer Data Platform (CDP) built natively into the Data Intelligence Platform. The Customer Lake SA will engage clients across business units and verticals, build relationships with marketing and data stakeholders, position Customer Lake in depth, and deliver presentations, demos, and POCs that drive informed adoption decisions. They will understand the guardrails and the steps needed to successfully land and expand Customer Lake as clients deliver on their customer engagement and growth objectives. \n The impact you will have \n Provide technical leadership to guide strategic customers to successful implementations on customer data and marketing projects, ranging from architectural design to data engineering to identity resolution, a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة databricks. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/databricks/solutions-architect-customerlake-berlin-114067",
        "logo": "https://logo.clearbit.com/databricks.com",
        "companyLogo": "https://logo.clearbit.com/databricks.com",
        "image": "https://logo.clearbit.com/databricks.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-41",
        "title": "Associate Director/Teamlead Digital Media (Mensch)",
        "title_ar": "مدير وقائد فريق (Associate Director/Teamlead Digital Media (Mensch))",
        "company": "wppmedia",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg",
        "location_ar": "Hamburg",
        "salary": "Competitive",
        "description": "About WPP Media \n WPP is the trusted growth partner for the world’s leading brands. With exceptional talent, trusted data and intelligence, and world-class partnerships – all united by our pioneering agentic marketing platform, WPP Open – we help clients navigate change, capture opportunity, and deliver transformational growth.  \n WPP Media is WPP's AI-driven media operating unit, bringing together media, data, and partnerships to deliver creative personalisation at scale. Connected through WPP Open and powered by Open Intelligence, clients see exactly where, how, and why their media investment is working. \n For more information, visit wppmedia.com . WPP steht für kreative Transformation. Mit der Kraft von Kreativität gestalten wir eine bessere Zukunft für unsere Mitarbeitenden, unsere Kunden, unsere Gemeinschaften und unseren Planeten. Genau hier setzt WPP Media an: Als globales Mediennetzwerk von WPP vereinen wir die besten Plattformen, Talente und Partner, um in einer vernetzten Medienwelt neue Chancen für grenzenloses Wachstum zu schaffen. \n Das bieten wir dir: \n Work-Life-Balance : Dank flexibler Arbeitszeiten mit Schwerpunkt auf dem persönlichen Austausch im Office und ergänzender Remote Work passt sich dein Job deinem Leben an. Überstunden kannst du flexible ausgleichen. \n Vacation mode on : Du erhältst 30 Urlaubstage plus einen flexiblen Tag – zusätzlich sind der 24. und 31.12. frei. \n Wellbeing first: Gesundheitsleistungen, attraktive Altersvorsorge sowie Mental Heal",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة wppmedia. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/wppmedia/associate-director-teamlead-digital-media-mensch-hamburg-150060",
        "logo": "https://logo.clearbit.com/wppmedia.com",
        "companyLogo": "https://logo.clearbit.com/wppmedia.com",
        "image": "https://logo.clearbit.com/wppmedia.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-42",
        "title": "Freelance Principal Recruiter",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Freelance Principal Recruiter)",
        "company": "typeform",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Who we are \n Typeform is a refreshingly different form builder. We help over 150,000 businesses collect the data they need with forms, surveys, and quizzes that people enjoy. Designed to look striking and feel effortless to fill out, Typeform drives 500 million responses every year—and integrates with essential tools like Slack, Zapier, and Hubspot. About the Role \n We’re looking for a Freelance Principal Recruiter to join Typeform on an initial, full-time engagement . In this role, you’ll operate as a full-cycle Talent Acquisition Partner , owning hiring end-to-end across a mix of technical and business roles . You’ll work in a small, high-ownership TA team, where the focus is not just on delivery—but on consistently raising the bar on talent and hiring quality . \n Things you will do: \n Own and drive 8–12 active roles simultaneously across both technical, commercial and business functions \n Build and maintain high-quality candidate pipelines , with a strong focus on sourcing passive talent \n Partner closely with hiring managers to define role scope, success criteria, and hiring strategy \n Run structured hiring processes from intake through to offer, ensuring clarity and alignment at every stage \n Drive proactive communication with stakeholders, anticipating needs and keeping momentum high \n Deliver a strong candidate experience while maintaining a high and consistent hiring bar \n Close candidates by building trust, alignment, and long-term fit \n What you already bring to the",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة typeform. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "People and culture"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/typeform/freelance-principal-recruiter-1038",
        "logo": "https://logo.clearbit.com/typeform.com",
        "companyLogo": "https://logo.clearbit.com/typeform.com",
        "image": "https://logo.clearbit.com/typeform.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-43",
        "title": "Machine Learning Ops Engineer - Personalization (m|w|d)",
        "title_ar": "مهندس ومطور برمجيات (Machine Learning Ops Engineer - Personalization (m|w|d))",
        "company": "idealo internet GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Everyone at idealo bases decisions on data. Our vision is to transform idealo from a transactional price comparison platform into a personalised shopping companion that inspires users throughout their entire product discovery journey. To make this vision a reality, we are looking for a Machine Learning Engineer (m|f|x) who is passionate about building scalable, cloud-native machine learning systems. Working in a cross-functional team alongside Product Managers, UX Designers, Software Engineers and Data Scientists, you will help create personalised experiences that make shopping more relevant, engaging and inspiring for millions of users. About your new role You will help shape one of idealo's most strategic product initiatives: Personalisation. You will work closely with our Data Scientists throughout the entire machine learning lifecycle. While they focus on developing and validating machine learning models, your focus will be designing the cloud infrastructure, ML pipelines and operational tooling that enable these models to run reliably, scale efficiently and continuously improve in production. In this role, you will: Build and operate scalable machine learning infrastructure on AWS. Design, develop and deploy production-ready ML pipelines covering training, inference, monitoring and automated retraining. Bring machine learning models into production for personalized recommendations, discovery feeds, search ranking and related use cases. Build cloud-native infrastructure u",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة idealo internet GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Technology & data"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/idealo-internet-gmbh/machine-learning-ops-engineer-personalization-mwd-berlin-48646",
        "logo": "https://logo.clearbit.com/idealointernetgmbh.com",
        "companyLogo": "https://logo.clearbit.com/idealointernetgmbh.com",
        "image": "https://logo.clearbit.com/idealointernetgmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-44",
        "title": "Teamleiter Finanzbuchhaltung & Controlling für die interne Verwaltung (m/w/d)",
        "title_ar": "Teamleiter Finanzbuchhaltung & Controlling für die interne Verwaltung (m/w/d) (أخرى)",
        "company": "PMPG",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Entry, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bonn, Nordrhein-Westfalen, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "PMPG ist eine moderne Steuer-, Rechts- und Unternehmensberatung mit einem Team aus über 330 hellen Köpfen an 12 Standorten und sucht Dich als neues Teammitglied! \n TEAMLEITER FINANZBUCHHALTUNG & CONTROLLING FÜR DIE INTERNE VERWALTUNG (M/W/D) IN VOLL- ODER TEILZEIT \n BONN📍 \n Wenn Du Dich in einem professionellen und zugleich - branchenuntypischen - lockeren Umfeld mit dem Jeansfaktor wohlfühlst, dann ist Dein Platz in unserem Team so gut wie gesichert. \n DAS SIND DEINE AUFGABEN \n Teamleitung (3 Mitarbeiter*innen) und strategische Weiterentwicklung des Fachbereichs Erstellung des monatlichen Controllings Prüfung der Finanzbuchhaltung unserer Unternehmensgruppe (Kapital- und Personengesellschaften) Erstellung und Durchsicht von Jahresabschlüssen und Steuererklärungen Integration neuer Standorte Allgemeine Verwaltungstätigkeiten \n DAS IST FÜR DICH DRIN \n 🔀 Flexibilität: \n Flexibles Arbeitszeitmodell ohne Kernzeiten – plane Dir Deinen Tag so, wie es für Dich passt, auch mit Fokuszeiten und Homeoffice-Möglichkeiten Über 30 Tage Urlaub inkl. freie Tage an Heiligabend, Silvester, Rosenmontag und Weiberfastnacht \n ➕ Zusatzleistungen: \n Individuelles Gehaltspaket mit vielen Möglichkeiten wie Sachbezug, Essens- und Kitazuschuss, Erholungsbeihilfe etc. Zusätzliche Benefits wie Mitarbeiterangebote über Corporate Benefits und Getränke en masse Betriebliche Krankenversicherung als zusätzliche private Krankenzusatzversicherung, die Extras abdeckt, welche in der gesetzlichen Krankenversicheru",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة PMPG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/pmpg/teamleiter-finanzbuchhaltung-controlling-fur-die-interne-verwaltung-bonn-223936",
        "logo": "https://logo.clearbit.com/pmpg.com",
        "companyLogo": "https://logo.clearbit.com/pmpg.com",
        "image": "https://logo.clearbit.com/pmpg.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-45",
        "title": "Werkstudent (m/w/d) – Finance & Beratung (unternehmerisch, leistungsbasiert)",
        "title_ar": "Werkstudent (m/w/d) – Finance & Beratung (unternehmerisch, leistungsbasiert) (مالية ومحاسبة)",
        "company": "Kevin Kehr",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Entry, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Homeoffice",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Du studierst und willst mehr als einen „Nebenjob“? Du willst Verantwortung, klare Ziele und ein Umfeld, in dem Leistung zählt? Dann ist diese Werkstudentenrolle dein Einstieg in die Finanzberatung, mit strukturiertem Onboarding, Coaching und einem klaren Weg in ein Trainee-Programm. Diese Rolle ist unternehmerisch geprägt und bietet dir die Möglichkeit, dich aktiv einzubringen, Verantwortung zu übernehmen und dich fachlich wie persönlich weiterzuentwickeln. Leistung und Eigeninitiative spielen dabei eine zentrale Rolle, gleichzeitig wirst du durch strukturiertes Onboarding, Coaching und ein erfahrenes Team unterstützt. Sehr gute Deutschkenntnisse (C1+) sind erforderlich, da die Ausbildung, die Kommunikation im Team sowie die Perspektive Richtung IHK vollständig auf Deutsch stattfinden. Dein Aufgabenbereich Startphase (erste Wochen): Terminaufbau: Du vereinbarst Kundentermine (Telefon, Netzwerk, Leads) und baust eine saubere Pipeline auf. Prozesslernen: Du lernst Gesprächsleitfäden, Bedarfsermittlung, Nachbereitung und Dokumentationsstandards. Performance-Optimierung: Du arbeitest mit KPIs, bekommst Feedback und verbesserst systematisch deine Ergebnisse. Im weiteren Verlauf: Analyse & Vorbereitung: Du unterstützt bei der Analyse von Kundensituationen und bereitest Beratungsunterlagen strukturiert vor. Kundenkontakt: Du begleitest Gespräche (je nach Stand), übernimmst Follow-ups und sorgst für klare nächste Schritte. Dokumentation & Organisation: Du hältst Prozesse sauber, doku",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Kevin Kehr. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/kevin-kehr/remote-werkstudent-finance-beratung-unternehmerisch-leistungsbasiert-hamburg-319936",
        "logo": "https://logo.clearbit.com/kevinkehr.com",
        "companyLogo": "https://logo.clearbit.com/kevinkehr.com",
        "image": "https://logo.clearbit.com/kevinkehr.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-46",
        "title": "German Speaking Senior Accountant",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (German Speaking Senior Accountant)",
        "company": "Avomind",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Our Client Our client is a growing hospitality technology company that helps hotels and hospitality businesses maximize direct bookings, streamline operations, and deliver exceptional guest experiences. Serving customers across Europe, the company combines innovative technology with deep industry expertise to help hoteliers compete in an increasingly digital marketplace. The business continues to invest in its products, people, and operational excellence while maintaining the agility and entrepreneurial culture of a growing software company. The Opportunity We are looking for a detail-oriented and proactive Senior Accountant to join our client’s finance team. Reporting into the finance function, you will play a key role in ensuring the accuracy and integrity of the company’s financial reporting while supporting operational decision-making through timely analysis and financial insights. This is an excellent opportunity for someone who enjoys working in a fast-paced SaaS environment, takes ownership of their work, and is passionate about building efficient financial processes through continuous improvement and automation. What You'll Do Lead monthly and year-end financial close activities, including preparing complex journal entries and supporting accounting analyses. Prepare and review balance sheet reconciliations, ensuring accuracy and completeness. Oversee daily Accounts Payable and Accounts Receivable transactions, ensuring invoices and credit notes are processed acc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Avomind. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "External - operations",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/avomind/remote-german-speaking-senior-accountant-germany-24124",
        "logo": "https://logo.clearbit.com/avomind.com",
        "companyLogo": "https://logo.clearbit.com/avomind.com",
        "image": "https://logo.clearbit.com/avomind.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-47",
        "title": "Chief of Staff",
        "title_ar": "Chief of Staff (موارد بشرية وإدارة)",
        "company": "deeploi - This is IT",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Your mission We are looking for an experienced and entrepreneurial Chief of Staff (f/m/d) to join the leadership team at deeploi. In this role, you act as a strategic and operational partner to the CEO , driving cross-functional alignment, owning our financial steering, and making sure decisions are taken and executed across the company. You combine sharp financial judgment with organisational excellence, acting as a bridge between strategy, finance and execution , as we build deeploi into a company with sustainable, profitable growth. This is a highly visible role with a wide scope. Wherever a topic matters and has no clear home, you take it, own it end to end, and drive it to a result. You set a high bar for yourself and the people around you. Your Responsibilities Own strategic projects: Lead high-impact, cross-functional initiatives from first structure to final delivery. Shape our commercial model: Drive how we position, package and price our product as we expand our SaaS offering and open up new go-to-market tiers. Lead financial steering & reporting: Own business planning, forecasts, investor reporting and performance tracking, as well as accounting, billing and our external finance partners. Structure how we run: Drive OKRs, decision-making and cross-functional collaboration for clarity and accountability, shape the formats that hold the team together and, together with People, connect company OKRs to performance management and feedback. Partner with leadership: Act a",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة deeploi - This is IT. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Management",
            "Leadership",
            "Strategic thinking",
            "Special projects"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/deeploi-this-is-it/chief-of-staff-berlin-10609",
        "logo": "https://logo.clearbit.com/deeploithisisit.com",
        "companyLogo": "https://logo.clearbit.com/deeploithisisit.com",
        "image": "https://logo.clearbit.com/deeploithisisit.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-48",
        "title": "Werkstudent Projekt-, Asset- und Kostenmanagement - Bereich Real Estate (m/w/d)",
        "title_ar": "Werkstudent Projekt-, Asset- und Kostenmanagement - Bereich Real Estate (m/w/d) (تصميم وإبداع)",
        "company": "Taeurope",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Deutschlandweit",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Become part of our Team! Sie möchten Ihre Karriere nicht dem Zufall überlassen? Sie möchten selbstverantwortlich in einem internationalen Umfeld mit echtem Team Spirit arbeiten? Dann werden Sie Teil unseres Management Teams in Berlin , Essen, Hamburg, Frankfurt oder München und wachsen Sie mit uns! Ihre Aufgaben Projektkoordination: Teilnahme an Projekt-, Planungs- und Baubesprechungen Operative Projektunterstützung: Unterstützung der Servicebereiche sowie aktive Mitarbeit in Projekt-, Asset- und Kostenmanagement-Projekten Terminplanung: Vorbereitung und Aktualisierung von Terminplänen mit MS Project Kostencontrolling: Erstellung von Kostenreports und Unterstützung bei der Kostenverfolgung Angebots- und Rechnungswesen: Mitwirkung bei der Angebots- und Rechnungsprüfung von Planern und ausführenden Firmen Ihre Erfahrungen Qualifikation: Eingeschriebene:r Masterstudent:in im Bereich (Bau-)Ingenieurwesen, Architektur, Wirtschaftsingenieurwesen oder einem vergleichbaren Studiengang Praxiserfahrung: Erste relevante Erfahrungen durch Praktika, Werkstudententätigkeiten oder Abschlussarbeiten im Projektmanagement Fachliches Interesse: Ausgeprägtes Interesse am Projekt-, Asset- und/oder Kostenmanagement Arbeitsweise: Strukturierte, gewissenhafte und ergebnisorientierte Arbeitsweise sowie Freude an der Arbeit in internationalen Teams Kommunikation & Sprachen: Kommunikative Persönlichkeit sowie fließende Deutsch- und sehr gute Englischkenntnisse Was wir bieten Eine spannende Position in ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Taeurope. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Real estate",
            "Project management",
            "Projekte",
            "Consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/taeurope/werkstudent-projekt-asset-und-kostenmanagement-bereich-real-estate-deutschlandweit-305069",
        "logo": "https://logo.clearbit.com/taeurope.com",
        "companyLogo": "https://logo.clearbit.com/taeurope.com",
        "image": "https://logo.clearbit.com/taeurope.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-49",
        "title": "Senior Technical Asset Manager - Real Estate (m/w/d)",
        "title_ar": "مدير وقائد فريق (Senior Technical Asset Manager - Real Estate (m/w/d))",
        "company": "Taeurope",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Deutschlandweit",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Become part of our Team! Sie möchten Ihren Beitrag in einem wachsenden Unternehmen leisten, in welchem Sie selbständig agieren können? Mit Ihrer selbstbewussten Art überzeugen Sie Kunden mühelos und gehen mit Ihren Teamkolleg:innen die extra Meile? Unser Technical Asset Management Team erwartet Sie an der Ziellinie! Dann starten Sie Ihre Karriere bei TA Europe und werden Sie Teil unseres Teams an unseren Standorten Berlin, Essen, Frankfurt oder München. Ihre Aufgaben Projektleitung: Leitung von Aufträgen und Projekten im Bereich Technical Asset Management in Deutsch und Englisch Strategische Planung: Unterstützung unserer Kunden bei Entwicklungs- und Investitionsstrategien mit Fokus auf Genehmigungen, Compliance und Kosten Stakeholder-Management: Zusammenarbeit mit externen Facility Managern, Property Managern, technischen Dienstleistern wie Architekten, Fachplanern und Projektsteuerern, um dezidierte CAPEX & OPEX-Planungen zu erstellen und für unsere Kunden umzusetzen Team- & Kundenkooperation: Serviceübergreifende Zusammenarbeit mit unserem Transactions, Management, Sustainability und Infrastructure Team sowie Ausbau von Kunden- und Subconsultant‑Beziehungen Unternehmensentwicklung: Weiterentwicklung der Technical‑Asset‑Management‑Services sowie Unterstützung bei der Entwicklung von TA Europe als führendes Beratungsunternehmen europaweit Ihre Erfahrungen Qualifikation: Abgeschlossenes Studium in Projekt‑ oder Cost Management, Ingenieurwesen, Architektur, Wirtschaftsingenieu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Taeurope. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Projectmanagement",
            "Projektmanagement",
            "Asset management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/taeurope/senior-technical-asset-manager-real-estate-deutschlandweit-49505",
        "logo": "https://logo.clearbit.com/taeurope.com",
        "companyLogo": "https://logo.clearbit.com/taeurope.com",
        "image": "https://logo.clearbit.com/taeurope.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-50",
        "title": "Senior Product Manager - Salesforce & Internal Enablement (all genders)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Senior Product Manager - Salesforce & Internal Enablement (all genders))",
        "company": "Aroundhome",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Responsibilities We are looking for an experienced, passionate, and hands-on Senior Product Manager to join our product team and empower Aroundhome’s core business operations for our next phase of growth. Aroundhome is Germany's leading platform for home projects, connecting thousands of homeowners with the right local service partners. The Internal Enablement team owns the core CRM and operational infrastructure -primarily built on Salesforce- that powers our sales teams and customer care in the future. By transforming fragmented, legacy setups into a scalable, automated core, your work directly enables our business teams to drive growth and deliver a seamless experience to our partner network. At Aroundhome, Product Managers play a pivotal role in shaping our platform’s success. We work in a domain-based model, where each cross-functional product team has full ownership over a clearly defined part of the platform. This structure fosters close collaboration and ensures that expertise for continuous product discovery and iterative improvement sits directly within each domain. As a Senior Product Manager for Internal Enablement, you will translate our growth strategies into a clear future-state vision for our operational ecosystem. You will drive process automation, data consistency, and core tool integration, ensuring our platform can scale efficiently as we significantly expand our business. As a Senior Product Manager, you define and execute a strategic product roadmap that",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Aroundhome. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/aroundhome/senior-product-manager-salesforce-internal-enablement-all-genders-berlin-442684",
        "logo": "https://logo.clearbit.com/aroundhome.com",
        "companyLogo": "https://logo.clearbit.com/aroundhome.com",
        "image": "https://logo.clearbit.com/aroundhome.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-51",
        "title": "Legal Specialist Tech & Data (m/f/d)",
        "title_ar": "Legal Specialist Tech & Data (m/f/d) (برمجة وتكنولوجيا)",
        "company": "Neon",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Entry, Permanent, Full or part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Overview NEON is a highly specialized business law firm providing advice at the highest level. We embrace shared entrepreneurship, are more than just colleagues, and love what we do. Our teams – including Venture Capital, Private Equity, Litigation, Real Estate, Tax, and Tech & Data – deliver holistic advice and work closely together. Our focus is on the legal support of entrepreneurial projects – from investments and transactions to the development of new business models, the structuring of complex commercial arrangements, and the legal enablement of digital innovation. Our Tech & Data Team advises national and international clients on legal issues relating to data protection, IT law, AI, digital business models and the regulatory requirements of an increasingly digital economy. We help innovative companies navigate complex legal frameworks and enable technological progress through practical legal advice. Are you looking for a position that allows you to pursue your legal career ambitions while benefiting from predictable working hours and more time for your personal life? We offer a great alternative. To join our team, we are looking for a Your mission You are passionate about the intersection of law andtechnology and want to deepen your legal expertise in these areas. As a Legal Specialist in our Tech & Data team, you will work on a broad range of matters relating to data protection, IT law, artificial intelligence and digital business models and take ownership of legal ta",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Neon. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tech&data",
            "It",
            "Ki",
            "Datenschutz"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/neon/legal-specialist-tech-data-berlin-96618",
        "logo": "https://logo.clearbit.com/neon.com",
        "companyLogo": "https://logo.clearbit.com/neon.com",
        "image": "https://logo.clearbit.com/neon.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-52",
        "title": "Werkstudent*in Finance Projects & Systems (m/w/d)",
        "title_ar": "Werkstudent*in Finance Projects & Systems (m/w/d) (مالية ومحاسبة)",
        "company": "OXG Glasfaser GmbH",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf",
        "location_ar": "Düsseldorf",
        "salary": "Competitive",
        "description": "Was diesen Job so besonders macht? Du möchtest bereits während deines Studiums praktische Erfahrungen sammeln und an anspruchsvollen Finanzprojekten mitwirken? Dann werde Teil unseres Teams Finance Projects & Systems und unterstütze uns bei Projekten im Finanz- und SAP-Umfeld. Je nach deinen Interessen, Kenntnissen und Fähigkeiten übernimmst du sowohl operative Aufgaben im SAP-Umfeld als auch Tätigkeiten im Projektmanagement. Gemeinsam finden wir Aufgaben, die zu dir passen und dir die Möglichkeit geben, dich fachlich und persönlich weiterzuentwickeln. Deine Aufgaben: Unterstützung unseres Teams bei der Umsetzung strategischer Finance-Projekte, z. B. bei der Weiterentwicklung unseres SAP S/4HANA-Systems Eigenständige Mitarbeit in der Administration der SAP S/4HANA Public Cloud, insbesondere: Benutzerverwaltung Stammdatenmanagement Prozessdokumentation Unterstützung bei der Koordination und Kommunikation mit unseren SAP Key Usern, sowie weiteren Ansprechpersonen in unseren Fachabteilungen (z.B. Accounting, Controlling, Procurement, Treasury) und mit unseren externen Implementierungspartnern. Wann passt Du zu uns? Du bist immatrikuliert und studierst idealerweise Wirtschaftswissenschaften, Wirtschaftsinformatik, BWL oder einen vergleichbaren Studiengang. Themen wie Finanzprozesse, Digitalisierung/KI-Transformation und moderne ERP-Systeme (SAP S/4HANA Public Cloud Edition) interessieren dich. Du hast bereits erste Praxiserfahrung aus Praktika, Werkstudententätigkeiten oder Uni-P",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة OXG Glasfaser GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/oxg-glasfaser-gmbh/werkstudentin-finance-projects-systems-dusseldorf-64295",
        "logo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "companyLogo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "image": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-53",
        "title": "Werkstudent*in Accounting (m/w/d)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Werkstudent*in Accounting (m/w/d))",
        "company": "OXG Glasfaser GmbH",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf und Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Was diesen Job so besonders macht? Bei uns erhältst Du einen einzigartigen Einblick in den Aufbau einer Finance Operations-Organisation (Accounting & Reporting, Finance Projects & Systems und Treasury) Dabei lernst Du eine Vielzahl an Themen kennen, wie z.B. die Erstellung von Abschlüssen und Reportings, Projekttätigkeiten oder die Beratung anderer Fachabteilungen Du unterstützt uns insbesondere im Bereich Rechnungswesen und übernimmst selbstständig Prozessverantwortung (z.B. Rechnungseingangsprozess) Zusätzlich hast Du die Chance, uns als Projektmitglied (z.B. im Zuge der ERP-Systemeinführung) beim Aufbau von effizienten E2E Prozessen zu unterstützen Einiges davon ist neu für Dich? Kein Ding. Bei OXG haben wir eine offene und innovative Arbeitsatmosphäre, wo Du Raum hast, Ownership zu übernehmen und neue Dinge auszuprobieren. Wann passt Du zu uns? Du bist aktuell immatrikuliert und studierst Betriebs- oder Volkswirtschaftslehre, Wirtschaftsinformatik oder eine vergleichbare Fachrichtung Du bist engagiert, offen und hast Lust in einem Start Up mitzugestalten Du verfügst über starke Kommunikationsfähigkeiten, bringst ein hohes Maß an Selbstständigkeit mit und hast Lust, erste Verantwortung zu übernehmen und Dich proaktiv mit Deinen Ideen einzubringen Du besitzt gute Kenntnisse im Umgang mit Microsoft Office, z. B. Excel und PowerPoint Du sprichst Deutsch (C1) und Englisch (B2) Idealerweise bringst Du erste Praxiserfahrung im Bereich Rechnungswesen in einem Industrieunternehmen",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة OXG Glasfaser GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/oxg-glasfaser-gmbh/remote-werkstudentin-accounting-236711",
        "logo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "companyLogo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "image": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-54",
        "title": "Werkstudent Projektkoordination Wohnungswirtschaft NE3 (m/w/d)",
        "title_ar": "Werkstudent Projektkoordination Wohnungswirtschaft NE3 (m/w/d) (أخرى)",
        "company": "OXG Glasfaser GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Student, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf und Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Was diesen Job so besonders macht? Was diesen Job so besonders macht? Du unterstützt unser Projektmanagement im Bereich Wohnungswirtschaft (WoWi) auf der Netzebene 3 (NE3) bei der Planung, Steuerung und Umsetzung verschiedener strategischer und operativer Maßnahmen im Glasfaserausbau. Du übernimmst eigene (Teil-)Projekte und begleitest diese von der Konzeption bis zur Umsetzung – inklusive aktiver Mitarbeit und Mitgestaltung. Du arbeitest eng mit Projektleiter:innen, externen Stakeholdern (z.B. Wohnungsunternehmen, Dienstleister, Agenturen) sowie internen Fachbereichen zusammen und koordinierst deren Zusammenarbeit. Du erstellst und pflegst Projekt- und Excel-Reports, übernimmst das Projekt-Tracking und bereitest Ergebnisse übersichtlich und adressatengerecht auf. Du planst und pflegst Bauzeichnungen und Übersichten (z.B. für NE3-Projekte in der Wohnungswirtschaft) und stellst sicher, dass Informationen in den relevanten Systemen und Dateien aktuell und vollständig sind. Du fasst verschiedene Datenquellen und Listen zusammen, strukturierst sie in Excel und leitest daraus aussagekräftige Reportings und Handlungsempfehlungen ab. Du übernimmst Aufgaben in der Dokumentenablage und -pflege (z.B. Projektunterlagen, Verträge, technische Dokumentation) und unterstützt beim Aufbau effizienter Ablagestrukturen. Du unterstützt bei Kommunikation, Trainings und Schulungen für interne Teams und externe Partner – insbesondere im Hinblick auf Prozesse und Tools im Bereich WoWi NE3. Einiges d",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة OXG Glasfaser GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Werkstudium",
            "Projektkoordination",
            "Ne3",
            "Glasfaser"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/oxg-glasfaser-gmbh/remote-werkstudent-projektkoordination-wohnungswirtschaft-ne3-96817",
        "logo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "companyLogo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "image": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-55",
        "title": "Werkstudent Einkauf für Tiefbau- und Planungsleistungen im Glasfaserausbau (m/w/d)",
        "title_ar": "Werkstudent Einkauf für Tiefbau- und Planungsleistungen im Glasfaserausbau (m/w/d) (أخرى)",
        "company": "OXG Glasfaser GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Student, Working student, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf und Remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Was diesen Job so besonders macht? Du möchtest bereits während deines Studiums praktische Erfahrungen sammeln und an anspruchsvollen Infrastrukturprojekten mitwirken? Dann unterstütze unser Einkaufsteam bei der Beschaffung von Tiefbau- und Planungsleistungen für den Glasfaserausbau. Je nach deinen Interessen, Kenntnissen und Fähigkeiten haben wir Aufgaben in operativen und/oder strategischen Einkaufbereichen. Gemeinsam finden wir Aufgaben, die zu dir passen und dir die Möglichkeit geben, dich fachlich und persönlich weiterzuentwickeln: Du tauchst direkt ein in den operativen und strategischen Einkauf für Glasfaserausbauprojekte. Von der Beschaffung von Tiefbau- und Planungsleistungen bis zur Bestellabwicklung und Dokumentation. So lernst du echte Praxis statt nur Theorie. Du bist aktiv in Ausschreibungsprozessen eingebunden: Du bereitest Unterlagen vor, holst Angebote ein, prüfst und vergleichst sie und wirkst bei Vergabeentscheidungen sowie der Vorbereitung von Preis- und Vertragsverhandlungen mit. Du erhältst einen tiefen Einblick in den Markt: Du recherchierst zu Preisen, Lieferanten und Angeboten, pflegst Einkaufs-, Lieferanten- und Vertragsdaten und erstellst Auswertungen und Präsentationen, um dein analytisches Denken zu schärfen. Du arbeitest mit verschiedenen Fachbereichen wie Technik, Planung, Projektmanagement und Controlling zusammen und gestaltest aktiv die Weiterentwicklung und Optimierung unserer Einkaufsprozesse mit, so lernst du das Zusammenspiel im Unternehme",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة OXG Glasfaser GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/oxg-glasfaser-gmbh/remote-werkstudent-einkauf-fur-tiefbau-und-planungsleistungen-im-glasfaserausbau-116887",
        "logo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "companyLogo": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "image": "https://logo.clearbit.com/oxgglasfasergmbh.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-56",
        "title": "Working Student System Administration (all genders)",
        "title_ar": "Working Student System Administration (all genders) (أخرى)",
        "company": "Helpling",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Entry, Intern, Part time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "YOUR IMPACT - YOUR ROLE Show us how you rock IT! You juggle bits and bytes while others are still looking for their coffee cups? Then join our dynamic and modern company, where innovation and agility are lived. With us, you will have the opportunity to develop your skills further and be part of an international team. For this, we are looking for you as our Working Student System Administration (all genders). Your mission in detail: As our Working Student System Administration, you are the contact person for all hardware and software problems and support the Helpling team with questions regarding the IT infrastructure in our Berlin office . You support the provisioning and maintenance of our Windows- and OSX-based environment and help provide your colleagues with high-speed, bugless equipment. You help manage our local networks and support troubleshooting, analysis, and documentation. You bring your own ideas to improve existing workflows through customized automation. You help ward off cyber attacks, create backups, and contribute to our overall IT security. WHAT YOU NEED TO SUCCEED A vocational training or degree is not the most important thing to us. We value your experience and are therefore looking for practically-versed, plug-and-play heroes with versatile IT knowledge who are currently enrolled at a university. You are familiar with help desk user support, Google Workspace, setting up VLAN and VPN, as well as Windows and OSX systems, and ideally, you even bring first kn",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Helpling. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/helpling/working-student-system-administration-all-genders-berlin-74999",
        "logo": "https://logo.clearbit.com/helpling.com",
        "companyLogo": "https://logo.clearbit.com/helpling.com",
        "image": "https://logo.clearbit.com/helpling.com",
        "postedAt": "2026-09-12",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789209029-57",
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
        "id": "job-1789209029-58",
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
        "id": "job-1789209029-59",
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
        "id": "job-1789209029-60",
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
