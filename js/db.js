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
        "id": "job-1789388808-1",
        "title": "FCM - Corporate Travel Consultant (Warwick Team) - USA",
        "title_ar": "FCM - Corporate Travel Consultant (Warwick Team) - USA (خدمة ودعم العملاء)",
        "company": "Flight Centre Travel Group",
        "category": "customer_support",
        "category_ar": "خدمة ودعم العملاء",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$28.85 - $67 USD",
        "description": "Corporate Travel Consultant - Warwick Team \n FCM takes a holistic approach to corporate travel, specializing in managing national and global travel programs for medium and large businesses. \n Ranked as one of the world’s top five travel management companies, it has a business network in over 97 countries and global headquarters in London, Brisbane, Singapore and New York. Backed by the global strength of Flight Centre Travel Group (FCTG), FCM combines local expertise and global experience to provide clients with a truly bespoke experience. To learn more about FCM please click HERE About the Opportunity This role will have you arranging domestic and complex international travel for busy executives including air, car hotel and ground transportation. Before you begin your role, you will spend three weeks (paid) training. This program will boost your knowledge, train you on contract airfares and sharpen your Sabre skills. Our corporate travel agents handle the air, car, rail and ground transportation bookings as well as the ticketing, changes and the exchange and queue management.  You will also need to offer exceptional customer service to satisfy our business traveler’s needs. We encourage our Corporate Travel Agents to study the travel polices of our corporate accounts and develop a relationship with them so when our valued business travelers have the need for business travel arrangements, they rest assured that their business travel needs are in the hands of a dedicated team ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Flight Centre Travel Group. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Travel-consultant",
            "Travel-operations",
            "Operations-and-logistics"
        ],
        "applyUrl": "https://himalayas.app/companies/fctgcareers/jobs/fcm-corporate-travel-consultant-warwick-team-usa-462894780",
        "logo": "https://cdn-images.himalayas.app/qb02e9sstam803bjruy5vr2ph0v3",
        "companyLogo": "https://cdn-images.himalayas.app/qb02e9sstam803bjruy5vr2ph0v3",
        "image": "https://cdn-images.himalayas.app/qb02e9sstam803bjruy5vr2ph0v3",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-2",
        "title": "Revenue Integrity Anesthesia Auditor",
        "title_ar": "Revenue Integrity Anesthesia Auditor (برمجة وتكنولوجيا)",
        "company": "Shriners Children's",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Company Overview Shriners Children’s is an organization that respects, supports, and values each other. Named as the 2025 best mid-sized employer by Forbes, we are engaged in providing excellence in patient care, embracing multi-disciplinary education, and research with global impact. We foster a learning environment that values evidenced based practice, experience, innovation, and critical thinking. Our compassion, integrity, accountability, and resilience define us as leaders in pediatric specialty care for our children and their families. With 20+ hospitals, outpatient clinics, ambulatory care centers and outreach locations across the globe, we provide excellent care to children up to age 18 regardless of their family’s ability to pay or insurance status. Please click here to learn more about our locations. CURRENT EMPLOYEES : Please log into Workday Click Here to apply internally through the \"Jobs Hub\" Job Description The Anesthesia Auditor is responsible for the systematic review of anesthesia records to ensure accuracy, completeness, and compliance with regulatory and institutional standards. Primary responsibilities include verifying that all required documentation, provider signatures, and charges are present and appropriately supported. This role plays a key part in supporting quality assurance and regulatory compliance within the anesthesia department. The Anesthesia Auditor will also assist with other auditor duties as assigned. Key Responsibilities: \n Comprehensiv",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Shriners Children's. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Medical-auditing",
            "Revenue-integrity",
            "Healthcare-compliance",
            "Clinical-documentation"
        ],
        "applyUrl": "https://himalayas.app/companies/shriners-children-s/jobs/revenue-integrity-anesthesia-auditor",
        "logo": "https://cdn-images.himalayas.app/bmki43ikgbw2v0e1uzgsrlrq47hd",
        "companyLogo": "https://cdn-images.himalayas.app/bmki43ikgbw2v0e1uzgsrlrq47hd",
        "image": "https://cdn-images.himalayas.app/bmki43ikgbw2v0e1uzgsrlrq47hd",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-3",
        "title": "SharePoint / O365 Specialist - Full Remote",
        "title_ar": "SharePoint / O365 Specialist - Full Remote (أخرى)",
        "company": "goPro Consultancy Group ltd.",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Category: IT Services Location: For an international organization in New York, we are urgently looking for a REMOTE SharePoint / O365 Specialist. The applicant should be an experienced O365 Specialist who can work with business users to gather their requirements and then architect, design and develop low code applications that utilize and extend the Microsoft SharePoint/O365 platform for document management and office workflow applications. \n Coordinated by a Team Lead, the specialist is expected to work mostly independently with stakeholders on the required solutions. \n Candidates need to be able to work 5 hours per day in the normal office hours of New York, US. Example 9AM NY time equals 7:30PM. \n Tasks and responsibilities: \n Work with business users in the department to gather and document their needs for small to medium sized office applications supporting basic document management and office workflows in the department; \n Create low code applications using O365, MS Power Apps and MS Power Automate; \n Guide end users in testing the applications and refine them in an agile manner with a focus on business value; \n For larger applications, work with the QA team on the creation of automated test; \n Work with other developers in the section on integrations with enterprise solutions as needed; \n Maintain knowledgebase documentation in SharePoint; \n Profile: \n +3 years of experience in design and development of Power Apps/Power Automate/O365 solutions; \n Experience in business",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة goPro Consultancy Group ltd.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sharepoint-development",
            "Microsoft-365",
            "Power-platform",
            "Low-code-development"
        ],
        "applyUrl": "https://himalayas.app/companies/gopro-consultancy-group-ltd/jobs/sharepoint-x2f-o365-specialist-full-remote-4137630383",
        "logo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "companyLogo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "image": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-4",
        "title": "Business Development Executive (Rome)",
        "title_ar": "Business Development Executive (Rome) (المبيعات والنمو)",
        "company": "Fresha",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Italy",
        "location_ar": "Italy",
        "salary": "$30,000 - $60,000 EUR",
        "description": "The AI-powered OS for beauty, \n wellness and self-care \n About Fresha Fresha is the AI-powered operating system for the global beauty, wellness and self-care industry, connecting and powering everything from salons and barbers to spas, medspas, fitness studios and health practices. Trusted by millions of consumers and businesses worldwide. Fresha is used by 140,000+ businesses and 450,000+ stylists and professionals worldwide, processing over 1 billion appointments to date. The company is headquartered in London, United Kingdom, with 15 global offices located across North America, EMEA and APAC. \n Fresha allows consumers to discover, book and pay for beauty and wellness appointments with local businesses via its marketplace, while beauty and wellness businesses and professionals use an all-in-one platform to manage their entire operations with an intuitive business software and financial technology solutions. Fresha ’s ecosystem gives merchants everything they need to run their business seamlessly by facilitating appointment bookings, point-of-sale, customer records management, marketing automation, loyalty, beauty products inventory and team management. The consumer marketplace unlocks revenue potential for partner businesses by leveraging the power of online bookings and automated marketing through mobile apps and advanced integrations with major tech brands including Instagram, Facebook and Google. Role Overview Given our exciting and progressive growth plans, we are looki",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Fresha. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business-development",
            "Sales",
            "Commercial",
            "B2b-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/fresha/jobs/business-development-executive-rome-297188400",
        "logo": "https://logo.clearbit.com/fresha.com",
        "companyLogo": "https://logo.clearbit.com/fresha.com",
        "image": "https://logo.clearbit.com/fresha.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-5",
        "title": "Account Executive",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive)",
        "company": "OpenExchange",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$110,000 - $150,000 USD",
        "description": "Compensation Details: \n Base salary + variable commission (uncapped) OTE total package $110k-$150k based on experience \n Job Scope: \n At OpenExchange , we video enable the vital daily communications of the financial services, professional investment industry and wider public and private companies with advanced one to one, one to many, and many to many video technologies,toolsand high touch services. The Account Executive will be primarily responsible for sourcing and landing new client logo accounts and will execute the Company’s growth plan with the goal of achieving the assigned sales quota of circa $1m annually.The AE role is fully virtual. \n Responsibilities: \n As a self-starter, you will quickly and effectively establish key relationships with decision makers within large enterprises. \n Selling communication technology enabled managed services in the form of virtual events, conferences and secure hosted virtual meetings for Investor Relations, Corporate Communications functions and Senior Management within public and private companies. \n You will drive for results with “hunter” mentality, meeting and exceeding monthly / quarterly revenue objectives by prospecting, securing meetings, and closing new business. \n You will also provide weekly reporting and pipeline management and will complete all weekly pipeline and activity reporting in accordance with OpenExchange ’sforecasting cadence. \n You will also serve as the Voice of the Customer and will act as the Customer champi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة OpenExchange. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Account-executive",
            "Enterprise-sales",
            "Saas-sales",
            "Business-development"
        ],
        "applyUrl": "https://himalayas.app/companies/openexchange/jobs/account-executive",
        "logo": "https://cdn-images.himalayas.app/84wbx77wh7xrb8sh4gmbimyjnrzs",
        "companyLogo": "https://cdn-images.himalayas.app/84wbx77wh7xrb8sh4gmbimyjnrzs",
        "image": "https://cdn-images.himalayas.app/84wbx77wh7xrb8sh4gmbimyjnrzs",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-6",
        "title": "Project Administrator",
        "title_ar": "Project Administrator (تسويق ومبيعات)",
        "company": "NoaNet",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$81,000 - $93,000 USD",
        "description": "Job Title: Project Administrator Department: Order Fulfillment Reports to:Manager of Strategic Operations and Government Affairs Overview - About NoaNet \n NoaNet is a non-profit mutual corporation providing telecom solutions and services and is headquartered in Spokane Valley, Washington. For over 20 years, NoaNet has operated a reliable public open-access broadband network that today totals over 3,800 fiber miles and touches every county in Washington State. Our organization provides rural areas access to broadband services, supporting more than 100 last-mile providers that serve more than 260,000 customers. NoaNet ’s owner/members are nine public utility districts and a joint operating agency. Learn more about NoaNet at Career Overview NoaNet is seeking a talented, experienced Project Administrator to manage the daily functions associated with the fulfillment of projects. The successful Project Administrator is a highly-organized, self-directed individual with a multi-disciplined background in ISP/OSP domains, and a demonstrated track record of successfully coordinating all aspects of construction including planning, scheduling, and coordinating teams to keep the initiative on track, within budget, in compliance, and positioned for timely completion with exceptional quality. Responsibilities \n Generally familiar with various Inside Plant (ISP) and Outside Plant (OSP) construction methods. \n Ability to read and understand contract documents, drawings, and specifications. Gen",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة NoaNet. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project-administration",
            "Project-coordinator",
            "Osp-project-management"
        ],
        "applyUrl": "https://himalayas.app/companies/noanet/jobs/project-administrator",
        "logo": "https://cdn-images.himalayas.app/70qy17ffg6totjvexjyp38tk2bk5",
        "companyLogo": "https://cdn-images.himalayas.app/70qy17ffg6totjvexjyp38tk2bk5",
        "image": "https://cdn-images.himalayas.app/70qy17ffg6totjvexjyp38tk2bk5",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-7",
        "title": "Senior Full Stack Developer - .NET/Angular - Full remote - Contractor in US",
        "title_ar": "مهندس ومطور برمجيات (Senior Full Stack Developer - .NET/Angular - Full remote - Contractor in US)",
        "company": "goPro Consultancy Group ltd.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Category: IT Services Location: For an international organization, we are urgently looking for a REMOTE Senior Full Stack Developer - .NET/Angular. Candidates need to be fluent in English. All positions are long-term. \n Candidates need to be able to work normal office hours of Manila. This role is open for contractors! \n Tasks and responsibilities: \n Design, develop, test, debug, implement and maintain applications using ICT standard web based and client server development frameworks and technologies mainly C#, ASP.NET, ASP.NET Core, MSSQL, EF Core, EF6, Code First, DB First, AngularJS/Angular, node.js, TypeScript, HTML/CSS/SASS, JSON/XML/Ajax, Kendo UI, GitLab; \n Carry out required testing and quality assurance and ensure that deliverables meet software requirements based on agreed time frame and milestones; \n Develop cross-browser and cross-platform front-end web development including HTML, JavaScript, CSS, and the latest technologies; \n Communicate technical solutions/concepts with trade-offs, risks, and benefits; \n Develop proof of concepts and prototypes which match industry standards; \n Profile: \n Bachelor or Master degree; \n 5+ years of experience with .NET Technologies with front end web development technologies; \n 5+ years of experience in MSSQL; \n 5+ years of experience in integrating front end with webservices, RESTful APIs backend technologies such as .NET or .NET Core; \n Hands on experience in converting wireframes to web pages using Angular framework; \n Experien",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة goPro Consultancy Group ltd.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Fullstack-development",
            ".net-development",
            "Frontend-development",
            "Backend-development"
        ],
        "applyUrl": "https://himalayas.app/companies/gopro-consultancy-group-ltd/jobs/senior-full-stack-developer-net-x2f-angular-full-remote-contractor-in-us-7733840100",
        "logo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "companyLogo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "image": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-8",
        "title": "Business Development Manager - Europe",
        "title_ar": "مدير وقائد فريق (Business Development Manager - Europe)",
        "company": "Rancho BioSciences",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Rancho BioSciences , LLC \n Rancho BioSciences is a fully remote provider of biomedical data curation and data science services for pharma and biotech, spanning drug discovery through translational research. Our teams of scientists, data engineers, and software experts deliver end-to-end solutions across data curation, management, mining, and analysis to help customers accelerate R&D. We partner long-term with blue-chip clients and emerging biotechs around the world, bringing scientific rigor, quality, and a customer-first mindset to every engagement. \n About the role \n Rancho BioSciences is seeking an early/mid-career business development professional to drive business growth in the European Region. \n This role will drive Rancho’s business growth in biotech and small/mid-sized pharma and life science organizations. The ideal candidate will have experience selling data science, bioinformatics, informatics, and consulting products and services into these customer segments. This is an excellent opportunity to grow as part of a dynamic and collaborative global team in a fast-paced environment. \n What you'll do \n Sell the entire Rancho portfolio of data, analytics, and informatics services and products to biotech, small/mid-sized pharma, and life science companies. These include, Bioinformatics, curated databases, data engineering services, and data strategy consulting services. \n Identify new potential business prospects and build a pipeline of opportunities through various",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Rancho BioSciences. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Life-sciences-sales",
            "Pharmaceutical-sales",
            "Biotech-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/rancho-biosciences/jobs/business-development-manager-europe",
        "logo": "https://logo.clearbit.com/ranchobiosciences.com",
        "companyLogo": "https://logo.clearbit.com/ranchobiosciences.com",
        "image": "https://logo.clearbit.com/ranchobiosciences.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388808-9",
        "title": "POV Video Recording Job - Home & Daily Life Activities",
        "title_ar": "POV Video Recording Job - Home & Daily Life Activities (برمجة وتكنولوجيا)",
        "company": "Toloka AI",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Colombia",
        "location_ar": "Colombia",
        "salary": "$6 - $6 USD",
        "description": "Looking for a flexible way to earn extra income? We're inviting people to take part in an exciting AI training project by recording real, everyday activities from the comfort of your home. No studio, no special equipment — just you, your smartphone, and your daily routine. Record whenever it's convenient for you, using your own device, while doing everyday tasks like cooking, cleaning, organizing spaces, doing laundry, or other household chores. Videos are recorded POV-style (point-of-view), simply from your own perspective. What we offer: \n Remote, flexible work \n $6 USD per hour of approved content \n Bonus for your first approved hour \n No previous experience required \n Requirements: \n iPhone 12 or newer, Google Pixel 6+, or Samsung Galaxy S21+ or newer \n Basic level of English \n Internet access \n Your recordings will help train the next generation of AI and robotics systems. Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Toloka AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Annotator",
            "Video-recording",
            "Data-entry"
        ],
        "applyUrl": "https://himalayas.app/companies/toloka-ai/jobs/pov-video-recording-job-home-daily-life-activities-6984120571",
        "logo": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "companyLogo": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "image": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-10",
        "title": "Salesforce Administrator",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Salesforce Administrator)",
        "company": "R1 RCM",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$50,461 - $114,114.48 USD",
        "description": "R1 is the leading provider of technology-driven solutions that transform the patient experience and financial performance of hospitals, health systems and medical groups. We are the one company that combines the deep expertise of a global workforce of revenue cycle professionals with the industry’s most advanced technology platform, encompassing sophisticated analytics, AI, intelligent automation, and workflow orchestration. As our Salesforce Administrator , you will be responsible for the execution of day-to-day configuration, support, and maintenance of our Salesforce, as well as continuously improving the platform to enable growth. Every day you will work to support various internal users, communicate with those users, and perform day to day admin work within Salesforce. To thrive in this role you must have Salesforce experience and enjoy working directly with the end users (internal customers). Here’s what you will experience working as a Salesforce Administrator: \n Handles all basic administrative functions, including user maintenance, reports and dashboards, Flows, lead/opportunity pipeline management, case/service requests, bug and feature requests, testing and QA in sandbox, and other routine tasks. \n Assist in training new users and growing the Salesforce.com skill set across the organization. \n Support other team members on special projects as needed. \n Manage Salesforce.com data feeds and other conversions, consolidations, and integrations with platforms such as Pa",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة R1 RCM. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Salesforce-administrator",
            "Crm-administration",
            "Business-analysis",
            "Project-management"
        ],
        "applyUrl": "https://himalayas.app/companies/r1-rcm/jobs/salesforce-administrator",
        "logo": "https://cdn-images.himalayas.app/lre1hrk953z0oaokt339646zdsa7",
        "companyLogo": "https://cdn-images.himalayas.app/lre1hrk953z0oaokt339646zdsa7",
        "image": "https://cdn-images.himalayas.app/lre1hrk953z0oaokt339646zdsa7",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-11",
        "title": "Instructional Systems Designer",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Instructional Systems Designer)",
        "company": "Team Carney",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "At Team Carney , we believe that true performance acceleration happens at the intersection of innovative learning and deep strategic expertise. Since 1994, our mission has been to provide top-tier training, learning, and human capital solutions that empower Federal Government agencies to meet their critical mandates. We are seeking a high-performing Instructional Systems Designer (ISD) to support the Federal Deposit Insurance Corporation (FDIC) Corporate University (CU) Course Maintenance Program. This position is contingent on contract award. Work Schedule and Location \n Employment Status: Full-Time \n Location: Remote within the U.S., with anticipated travel to the FDIC Dallas Regional Office (Dallas, TX) approximately once per quarter \n Who You Are & What You’ll Do As an Instructional Systems Designer (ISD) supporting the FDIC Corporate University Course Maintenance Program, you will serve in a Key Personnel capacity responsible for maintaining, revising, and modernizing a comprehensive catalog of professional courses and training collateral. You will work in close collaboration with FDIC Corporate University personnel, Subject Matter Experts (SMEs), and technical monitors to update existing courseware across all instructional delivery formats. In this role, you will analyze source documentation, review Course Change Sheets, and update learning products across Instructor-Led Training (ILT), Virtual Instructor-Led Training (VILT), Web-Based Training (WBT), Instructional Vide",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Team Carney. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Instructional-design",
            "Learning-and-development",
            "Elearning-developer"
        ],
        "applyUrl": "https://himalayas.app/companies/team-carney/jobs/instructional-systems-designer",
        "logo": "https://cdn-images.himalayas.app/2pbwecjcihh7ohhtpnjii2t9n1ts",
        "companyLogo": "https://cdn-images.himalayas.app/2pbwecjcihh7ohhtpnjii2t9n1ts",
        "image": "https://cdn-images.himalayas.app/2pbwecjcihh7ohhtpnjii2t9n1ts",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-12",
        "title": "Account Executive Peel 3D (Virtual, US, 99999)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive Peel 3D (Virtual, US, 99999))",
        "company": "Ametek, Inc.",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$60,000 - $80,000 USD",
        "description": "With FARO CREAFORM, possibility takes form. We give quality teams, production teams, maintenance teams, and designers the certainty to manufacture and design like never before — transforming 3D measurements into smarter decisions and endless possibilities. The primary responsibility of this position is to promote and demonstrate FARO CREAFORM's PEEL product line hardwared and software products and the company itself within the USA territory to realize sales. \n We believe that if it can be dreamed, it can also be measured. And if it can be measured, it can also be realized. This position has the potential to earn a total compensation package (salary + variable) between $60,000 - $80,000. How you will make a difference @ FARO CREAFORM: \n Promote and demonstrate FARO Creaform’s PEEL 3D solutions to prospective and existing customers. \n Generate and qualify leads through prospecting, marketing initiatives, trade shows, and industry events. \n Manage the full sales cycle, from opportunity identification to closing, while achieving territory sales targets. \n Build and maintain strong customer relationships through regular follow-up and account development. \n Provide technical expertise and lead business opportunities throughout the pre-sales and post-sales process. \n Deliver product demonstrations, training sessions, and technical support to customers. \n Collaborate with marketing and sales teams to drive pipeline growth and improve sales processes. \n Maintain accurate sales activit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ametek, Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Account-executive",
            "Technical-sales",
            "B2b-sales",
            "Territory-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/ametek-inc/jobs/account-executive-peel-3d-virtual-us-99999-9924989201",
        "logo": "https://cdn-images.himalayas.app/bpvl7cxadpq59uwfw9smu810swyg",
        "companyLogo": "https://cdn-images.himalayas.app/bpvl7cxadpq59uwfw9smu810swyg",
        "image": "https://cdn-images.himalayas.app/bpvl7cxadpq59uwfw9smu810swyg",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-13",
        "title": "Software Engineer- PHP",
        "title_ar": "مهندس ومطور برمجيات (Software Engineer- PHP)",
        "company": "Therapy Brands",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Ensora Health is the leading provider of software and services for mental and behavioral health therapists, trusted by over 200,000 individual providers and more than 28,000 practices. Our unmatched expertise, partnership, and breadth of products allow us to fine-tune solutions that meet the specific needs of everyone from solo practitioners to larger practices. With AI-enabled solutions that span practice management to electronic medical records and e-prescribing to billing, we help eliminate administrative complexity and create harmony between therapists, their clients, and the whole healthcare community. Job Description We are looking for a Software Engineer to join our team. This role will be to develop information systems by studying operations; designing, developing and installing software solutions; support and develop the software team. In this role, you will work with leadership to define software requirements and take the lead on operational and technical projects. We’re seeking a Software Engineer with strong object-oriented programming experience (PHP preferred, but open to other OOP languages) and a thoughtful interest in how AI can enhance modern software development. In this role, you’ll take ownership of meaningful features and components, contribute across the full development lifecycle, and collaborate closely with senior engineers to build scalable, secure, and maintainable systems. This is an opportunity for an engineer who enjoys solving moderately comple",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Therapy Brands. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software-engineer",
            "Php-development",
            "Backend-development",
            "Fullstack-development"
        ],
        "applyUrl": "https://himalayas.app/companies/therapy-brands/jobs/software-engineer-php",
        "logo": "https://cdn-images.himalayas.app/vswswp6l1sitdcglwlsl9klmz6g1",
        "companyLogo": "https://cdn-images.himalayas.app/vswswp6l1sitdcglwlsl9klmz6g1",
        "image": "https://cdn-images.himalayas.app/vswswp6l1sitdcglwlsl9klmz6g1",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-14",
        "title": "Freelance: grabación de tareas cotidianas para proyecto de IA",
        "title_ar": "Freelance: grabación de tareas cotidianas para proyecto de IA (برمجة وتكنولوجيا)",
        "company": "Toloka AI",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Part Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Argentina",
        "location_ar": "Argentina",
        "salary": "$6 - $6 USD",
        "description": "Gana dinero grabando actividades de tu vida diaria Buscamos personas para grabar actividades cotidianas desde una perspectiva en primera persona utilizando una aplicación móvil. Puedes grabar tareas que ya realizas normalmente, como: \n Cocinar \n • Limpiar • Doblar ropa \n Ordenar espacios • Hacer jardinería \n • Pasear al perro Los videos ayudan a entrenar sistemas de IA y robótica para comprender cómo las personas interactúan con el mundo real. Lo que ofrecemos: \n Horarios flexibles \n • Trabajo remoto por proyecto \n USD $6 por hora de contenido aprobado • Bono adicional por la primera hora aprobada \n Requisitos: \n iPhone 12 o superior, Google Pixel 6+ o Samsung Galaxy S21+ o superior \n • Acceso a internet \n Nivel básico de inglés para registrarte y utilizar la plataforma \n No se requiere experiencia previa. Originally posted on Himalayas",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Toloka AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-collection",
            "Ai-training-data",
            "Video-annotator",
            "Freelance-work"
        ],
        "applyUrl": "https://himalayas.app/companies/toloka-ai/jobs/freelance-grabacion-de-tareas-cotidianas-para-proyecto-de-ia-5991680486",
        "logo": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "companyLogo": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "image": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-15",
        "title": "AI Engagement Lead",
        "title_ar": "مدير وقائد فريق (AI Engagement Lead)",
        "company": "Tiger Analytics",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Canada",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Tiger Analytics is an advanced analytics consulting firm. We are the trusted analytics partner for several Fortune 100 companies, enabling them to generate business value from data. Our consultants bring deep expertise in Data Science, Machine Learning, and AI. Our business value and leadership have been recognized by various market research firms, including Forrester and Gartner. We are looking for an AI Engagement Lead / AI Engineering Pod Lead who can combine strong client and project leadership with hands-on expertise in AI/ML and Generative AI engineering. The role will involve approximately 50% engagement/project management and coordination and 50% hands-on technical leadership and AI engineering. Responsibilities: \n Lead AI/GenAI engagements from discovery and solution definition through development, deployment, and production. \n Serve as the primary technical and delivery interface for clients and senior stakeholders. \n Understand business objectives and translate them into AI/ML solution requirements and actionable engineering plans. \n Own project planning, prioritization, timelines, milestones, risks, dependencies, and overall delivery. \n Coordinate across AI Engineers, Data Scientists, Data Engineers, Product Managers, and client teams. \n Conduct regular client discussions, status reviews, technical walkthroughs, and solutioning sessions. \n Proactively identify delivery risks, technical challenges, resource constraints, and dependencies and drive them toward resolu",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tiger Analytics. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai-engineering",
            "Generative-ai",
            "Ai-leadership"
        ],
        "applyUrl": "https://himalayas.app/companies/tiger-analytics/jobs/ai-engagement-lead",
        "logo": "https://cdn-images.himalayas.app/fbbn4sxk8oyuweoaquy6j1fi4j4r",
        "companyLogo": "https://cdn-images.himalayas.app/fbbn4sxk8oyuweoaquy6j1fi4j4r",
        "image": "https://cdn-images.himalayas.app/fbbn4sxk8oyuweoaquy6j1fi4j4r",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-16",
        "title": "Manager Clinical Operations FLEX",
        "title_ar": "مدير وقائد فريق (Manager Clinical Operations FLEX)",
        "company": "Novotech",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "China",
        "location_ar": "China",
        "salary": "Competitive",
        "description": "Responsibilities Manage staff in accordance with organization's policies and applicable regulations, including without limitation: planning, assigning, and directing work; managing performance and guiding professional development; rewarding and disciplining employees; addressing employee relations issues and resolving problems; acting as a coach and mentor for subordinates as they develop in their role. Participate in the selection and onboarding process for new staff by conducting candidate review and participating in the interviewing process. Conduct onboarding training for new staff in conjunction with Human Resources and Learning and Development training programs. \n Ensure that staff have the proper materials, systems access and training to complete job responsibilities. Provide oversight for the execution of the training plan, SOP review and mentored training experiences, as applicable. \n Participate in the allocation of resources by assigning staff to clinical studies that are appropriate to their experience and training. \n Manage and review the workload and quality of subordinates' work performance. \n Identifies quality risks and issues and supports the creation of appropriate corrective action plans to prevent or correct deficiencies in performance of staff. \n May act as a CRA or other role for a defined project or to assist with milestone achievement. \n May participate in clinical operations quality or process initiatives. \n Experience and Qualifications A BS (Bachel",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Novotech. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Clinical-research",
            "Cra-management"
        ],
        "applyUrl": "https://himalayas.app/companies/novotech/jobs/manager-clinical-operations-flex",
        "logo": "https://cdn-images.himalayas.app/n7rsefjivcqzhocyrvkpekeeql91",
        "companyLogo": "https://cdn-images.himalayas.app/n7rsefjivcqzhocyrvkpekeeql91",
        "image": "https://cdn-images.himalayas.app/n7rsefjivcqzhocyrvkpekeeql91",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-17",
        "title": "AI Data Engineer",
        "title_ar": "مهندس ومطور برمجيات (AI Data Engineer)",
        "company": "Bright Vision Technologies",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$80,000 - $100,000 USD",
        "description": "AI Data Engineer – Remote Bright Vision Technologies is a technology consulting and software development company delivering cloud, AI, data, and enterprise solutions across the United States. This is a fantastic opportunity to join an established and well-respected organization offering tremendous career growth potential. Job Title: AI Data Engineer Location: 100% Remote (U.S.) Position Type: Full-time, Direct W2 Salary Range: $80,000–$100,000 Annually Experience Required: 6+ years Sponsorship: U.S. Citizens, Green Card Holders, EAD Holders, and H-1B transfer candidates are encouraged to apply. We are unable to sponsor new H-1B visa petitions for this position. Job Summary We are seeking an AI Data Engineer to build and operate the large-scale data systems that power modern AI training and evaluation pipelines. The role combines deep data engineering expertise with a strong understanding of AI workloads, focusing on ingestion, transformation, quality assurance, lineage, and high-throughput delivery of data to training jobs across diverse modalities. The ideal candidate has experience operating petabyte-scale data systems, strong software engineering fundamentals, and clear understanding of how data infrastructure choices propagate into model quality and training efficiency. Required Qualifications \n Bachelor’s or Master’s degree in Computer Science or a related field. \n Six or more years of data engineering experience, with significant work supporting ML or AI workloads. \n St",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bright Vision Technologies. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ai-data-engineer",
            "Data-engineering",
            "Ai-ml-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/bright-vision-technologies/jobs/ai-data-engineer",
        "logo": "https://cdn-images.himalayas.app/tillsehd3opuq2p5lraeki82dq3v",
        "companyLogo": "https://cdn-images.himalayas.app/tillsehd3opuq2p5lraeki82dq3v",
        "image": "https://cdn-images.himalayas.app/tillsehd3opuq2p5lraeki82dq3v",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-18",
        "title": "Vice President of Business Development",
        "title_ar": "Vice President of Business Development (تصميم وإبداع)",
        "company": "OnMed",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$180,000 - $200,000 USD",
        "description": "Who We Are and Why Join Us At OnMed our purpose is simple but powerful...to improve the quality of life and sense of well-being in our communities by bringing access to healthcare to everyone, everywhere. Our path to everywhere has already begun, with our innovative CareStation, a small but mighty, Clinic-in-a-Box, bringing #healthcareaccess anywhere with an outlet to plug it in. Poised to become a key component in America’s public health infrastructure, the OnMed CareStation is the only tech-enabled, human-led, hybrid care solution that combines the comprehensive experience, trust and outcomes of a clinic, with the rapid scalability of virtual care. At OnMed , every role, every day, is directly impacting the communities we serve. You’ll join a high-performing purpose-driven team, innovating to break down the barriers that keep people from the care they need. This is not just a job...it's a movement to bring access to healthcare where and when people need it most. It’s healthcare that shows up. Who You Are You are a results-driven professional with a keen eye for identifying opportunities and driving strategic growth initiatives. You possess a strong entrepreneurial spirit, constantly seeking ways to drive revenue and expand market share. You thrive in high-pressure situations and are adept at managing competing priorities, making you an ideal candidate to contribute to the Company’s ambitious growth goals. The Company is at an important inflection point in its growth traject",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة OnMed. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business-development",
            "Sales-leadership",
            "Healthcare-sales",
            "Enterprise-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/onmed/jobs/vice-president-of-business-development",
        "logo": "https://logo.clearbit.com/onmed.com",
        "companyLogo": "https://logo.clearbit.com/onmed.com",
        "image": "https://logo.clearbit.com/onmed.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-19",
        "title": "Technical Writer / Quality Assurance Specialist - Remote - in USD",
        "title_ar": "كاتب ومحرر محتوى (Technical Writer / Quality Assurance Specialist - Remote - in USD)",
        "company": "goPro Consultancy Group ltd.",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Category: IT Services Location: For an international organization in New York, we are urgently looking for a Technical Writer/ Quality Assurance Specialist. Ideally, the applicant should have experience in test automation using Selenium, Api testing, GitLab, Continuous Integration CI, Continuous Delivery/Deployment CD services and other technologies. \n Candidates need to be able to work +6 hours per day in the normal office hours of New York, US. Example 9AM NY time equals 7:30PM. \n Tasks and responsibilities: \n Work with technical lead, business analyst and developers to document the end-to-end traceability of each business requirement in SharePoint that will help to track full history of each software feature developed and accurately assess the impact of changes. \n Produce and maintain the highest quality documentation; Use-case documents,functional specifications, UI design/wireframe, integration guides, API developer guides,user guides/instructions and tutorials. \n Ensure that existing guidelines on document branding and accessibility in the UN are followed. \n Work within an agile team to ensure the quality of complex MEAN applications \n Develop, modify, and execute functional test scripts and analyze bugs for systems in development \n Work closely with technical leads, business analysts and developers to recognize the potential for any operational issues, assess risks, and resolve issues proactively \n Quality Assurance: \n All tasks will be assigned in a Kanban type proces",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة goPro Consultancy Group ltd.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Technical-writer",
            "Quality-assurance",
            "Qa-engineering",
            "Software-testing"
        ],
        "applyUrl": "https://himalayas.app/companies/gopro-consultancy-group-ltd/jobs/technical-writer-x2f-quality-assurance-specialist-remote-in-usd-7612282514",
        "logo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "companyLogo": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "image": "https://logo.clearbit.com/goproconsultancygroupltd.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-20",
        "title": "Public Health Program Associate",
        "title_ar": "Public Health Program Associate (مالية ومحاسبة)",
        "company": "Guidehouse",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$68,000 - $113,000 USD",
        "description": "Job Family: Operational Effectiveness Travel Required: Up to 10% Clearance Required: Ability to Obtain Public Trust What You Will Do: As a Public Health Program Associate supporting Guidehouse ’s federal health clients, you will contribute to the planning, implementation, and improvement of public health programs and initiatives. You will work with clients, public health partners, technical experts, and multidisciplinary teams to address complex needs and translate scientific, policy, programmatic, and operational information into practical recommendations and high-quality deliverables. Depending on the engagement and your experience, you may support or lead activities related to public health research and analysis, program planning, technical assistance, performance monitoring, stakeholder engagement, policy implementation, and continuous improvement. Assignments may span disease prevention and health promotion, preparedness and response, workforce development, health communications, program operations, community health, and other public health priorities. Specific Responsibilities Will Include: \n Support the planning, implementation, monitoring, and improvement of public health programs, projects, and initiatives. \n Work with clients and partners to understand program needs, clarify objectives, and develop practical approaches for achieving desired outcomes. \n Conduct research, environmental scans, literature reviews, needs assessments, and other qualitative or quantitative",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Guidehouse. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Public-health-associate",
            "Health-program-analyst",
            "Public-health-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/guidehouse/jobs/public-health-program-associate",
        "logo": "https://cdn-images.himalayas.app/ks5m3qmjuhimg4pvxi9rfgdnavoh",
        "companyLogo": "https://cdn-images.himalayas.app/ks5m3qmjuhimg4pvxi9rfgdnavoh",
        "image": "https://cdn-images.himalayas.app/ks5m3qmjuhimg4pvxi9rfgdnavoh",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789388809-21",
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
        "id": "job-1789388809-22",
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
        "id": "job-1789388809-23",
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
        "id": "job-1789388809-24",
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
        "id": "job-1789388809-25",
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
        "id": "job-1789388809-26",
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
        "id": "job-1789388809-27",
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
        "id": "job-1789388809-28",
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
        "id": "job-1789388809-29",
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
        "id": "job-1789388809-30",
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
        "id": "job-1789388809-31",
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
        "id": "job-1789388809-32",
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
        "id": "job-1789388809-33",
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
        "id": "job-1789388809-34",
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
        "id": "job-1789388809-35",
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
        "id": "job-1789388809-36",
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
        "id": "job-1789388809-37",
        "title": "Information Security, Compliance & IKS Manager (m/w/d) - ISO 27001 - Teilzeit",
        "title_ar": "مدير وقائد فريق (Information Security, Compliance & IKS Manager (m/w/d) - ISO 27001 - Teilzeit)",
        "company": "Cloudiax AG",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Gudow",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Cloudiax ist ein führender Anbieter im Bereich Cloud-Technologien mit mehr als 280 internationalen Partnern über 1150 SAP-Kunden aus 58 Ländern. Wir ermöglichen kleinen und mittelständischen Unternehmen weltweit die Nutzung von Anwendungen wie SAP Business One und KI in unserer Cloud. Als globaler Marktführer bieten wir eine sichere, schnelle und zuverlässige Cloud-Plattform – Made in Germany. Unsere Rechenzentren in Deutschland, Kanada und Singapur stellen sicher, dass wir rund um die Uhr eine erstklassige Servicequalität liefern.Zur Verstärkung unseres Teams suchen wir dich ab sofort und in Teilzeit (20-25 Std.) als Information Security, Compliance & IKS Manager (m/w/d), um unser Wachstum weiter voranzutreiben und eine erstklassige Servicequalität sicherzustellen. \n Aufgaben \n Aufbau, Weiterentwicklung und strukturierte Vorbereitung unserer Organisation auf ein ISMS nach ISO/IEC 27001 sowie auf Zertifizierungen nach ISO 9001 \n Analyse, Bewertung und Umsetzung regulatorischer Anforderungen, insbesondere aus der NIS-2-Richtlinie \n Orientierung an und ggf. Umsetzung von Maßnahmen nach BSI IT-Grundschutz \n Aufbau, Weiterentwicklung und Sicherstellung der jährlichen Prüfung unseres Internen Kontrollsystems (IKS) durch unseren Wirtschaftsprüfer nach PS 951 Type 2 / ISAE 3402 \n Pflege und Strukturierung der gesamten Compliance- und Sicherheitsdokumentation in Confluence und Jira, inkl. Aufbau nachvollziehbarer, auditfähiger Strukturen und Workflows \n Kontinuierliche Zusammenarbeit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Cloudiax AG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Technical documentation"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/cloudiax-ag/information-security-compliance-iks-manager-iso-27001-teilzeit-gudow-125029",
        "logo": "https://logo.clearbit.com/cloudiaxag.com",
        "companyLogo": "https://logo.clearbit.com/cloudiaxag.com",
        "image": "https://logo.clearbit.com/cloudiaxag.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-38",
        "title": "ERP-Programmierer (m/w/d)",
        "title_ar": "ERP-Programmierer (m/w/d) (أخرى)",
        "company": "KSE GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Kösching",
        "location_ar": "Kösching",
        "salary": "Competitive",
        "description": "Aufgabengebiet: Softwareentwicklung \n Karriere-Level: mit Berufserfahrung \n Arbeitsumfang: Vollzeit/Teilzeit \n Du entwickelst gerne Lösungen, die nicht nur technisch funktionieren, sondern echten Mehrwert schaffen? \n Du hast Spaß daran, mit allen Abteilungen - von der Buchhaltung bis hin zur Fertigung - zusammenzuarbeiten und leistungsfähige Anwendungen zu entwickeln? \n Du möchtest in einem Unternehmen arbeiten, in dem Deine Ideen gefragt sind und Deine Arbeit sichtbar wird? \n Dann bewirb Dich bei uns als ERP-Programmierer (m/w/d) in Vollzeit oder Teilzeit. \n Aufgaben \n Programmierung und Dokumentation von Anpassungen im ERP-System Microsoft Dynamics NAV oder BC \n Analyse bestehender Geschäftsprozesse und Entwicklung geeigneter ERP-Lösungen \n Betreuung und Wartung der SQL-Server und der dazugehörigen Datenbanken \n Koordination zwischen allen internen und externen Partnern, die das ERP-System nutzen \n Definition und Betreuung der Schnittstellen zu Partnersystemen im Haus und extern \n Konzeption und Programmierung von ERP-Partneranwendungen in .NET bzw. Angular/Ionic \n Support für das ERP-System Dynamics NAV und die Partneranwendungen \n Analyse und Optimierung bestehender Anwendungen und Prozesse \n Mitwirkung bei der technischen Konzeption sowie bei der Auswahl und Weiterentwicklung von Technologien und Standards \n Sicherstellung von Codequalität durch Reviews, Tests und strukturierte Entwicklungsprozesse \n Qualifikation \n Abgeschlossenes Studium oder Ausbildung im Bereich Info",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة KSE GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "It"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/kse-gmbh/erp-programmierer-kosching-388662",
        "logo": "https://logo.clearbit.com/ksegmbh.com",
        "companyLogo": "https://logo.clearbit.com/ksegmbh.com",
        "image": "https://logo.clearbit.com/ksegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-39",
        "title": "SAP ABAP Developer / Entwickler (m/w/d)",
        "title_ar": "مهندس ومطور برمجيات (SAP ABAP Developer / Entwickler (m/w/d))",
        "company": "j&s-soft AG",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Heidelberg",
        "location_ar": "Heidelberg",
        "salary": "Competitive",
        "description": "Wir sind js-soft, ein IT-Lösungsanbieter mit 50 Mitarbeitenden und dem Sinn fürs Wesentliche: Mit langjährigem SAP-Fokus, individuellen KI-Lösungen und unserer Wallet, die die Digitalisierung wirklich weiterbringt. Für unsere Business Unit SAP suchen wir jemanden, der mehr möchte als reine Entwicklung im Hintergrund: ABAP-Entwicklung, Kundenverständnis und technisches Mitdenken gehören bei uns zusammen. Du arbeitest in abwechslungsreichen SAP-Projekten, überwiegend im HCM-Umfeld, entwickelst saubere Lösungen und berätst unsere Kunden dort, wo Technik und Fachlichkeit zusammenkommen. Wenn du Lust hast, nicht nur Anforderungen umzusetzen, sondern bessere Lösungen mitzugestalten, bist du bei uns richtig! \n Verstärke unser Team als SAP ABAP Developer / Entwickler:in (m/w/d) am Hauptstandort Heidelberg , in unserem Büro in Magdeburg oder remote von deinem Zuhause in Deutschland. \n Aufgaben \n Beratung unserer Kunden bei der technischen Umsetzung ihrer Anforderungen in abwechslungsreichen SAP-Projekten - überwiegend im HCM-Umfeld, aber auch in anderen SAP-Modulen und Systemlandschaften \n Entwicklung kundenspezifischer Backend-Lösungen mit ABAP OO und modernen SAP-Technologien \n Analyse, Konzeption und Umsetzung von Erweiterungen, Reports, Services und Schnittstellen zwischen SAP und anderen Systemen \n Einsatz passender Technologien je nach Projektkontext, z. B. CDS Views, OData, SAP Gateway, RAP, Fiori Elements oder klassische Erweiterungskonzepte \n Weiterentwicklung bestehender SAP",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة j&s-soft AG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sap/erp consulting",
            "Development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/js-soft-ag/sap-abap-developer-entwickler-heidelberg-357838",
        "logo": "https://logo.clearbit.com/jssoftag.com",
        "companyLogo": "https://logo.clearbit.com/jssoftag.com",
        "image": "https://logo.clearbit.com/jssoftag.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-40",
        "title": "Software Engineer (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Software Engineer (all genders))",
        "company": "Ray Sono GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Digitale Transformationsbegleitung \n In unseren agilen Teams setzt du neue Maßstäbe und feierst gemeinsam echte Erfolge. Unsere Projekte sind so vielfältig wie die Herausforderungen unserer Kund*innen: Von Strategic Experience Design über Digital Communication bis hin zur Softwareentwicklung – wir gestalten Digitalisierung greifbar und wirkungsvoll. \n Dich erwarten nicht nur spannende Projekte, sondern auch eine Kultur, die Professionalität, Respekt und Freude an der Zusammenarbeit vereint. Hier kannst du dich entfalten, strategisch denken, innovative Ansätze entwickeln und die digitale Zukunft unserer Kund*innen aktiv mitgestalten. \n Seit 1992 stehen unsere kreativen Lösungen und maßgeschneiderten Strategien für digitale Exzellenz. Mit über 140 engagierten Mitarbeiter*innen gestalten wir User Experiences, die nicht nur zuverlässig funktionieren, sondern auch nachhaltig begeistern – von der Idee bis zur erfolgreichen Umsetzung. \n Deine Aufgaben bei uns \n Als Software Engineer (all genders) entwickelst zuverlässige, performante und langfristig wartbare digitale Lösungen. Du steuerst klar abgegrenzte Bereiche eigenständig und machst Entscheidungen, Risiken und Ergebnisse transparent. \nDas bewirkst du konkret: \n Technical Impact: Du setzt komplexere Features, Komponenten, Schnittstellen oder technische Teilbereiche eigenständig um. \n Business Impact: Du bewertest Lösungen nach Qualität, Aufwand, Skalierbarkeit, Security und Wartbarkeit. \n Collaboration Impact: Du erkennst techni",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ray Sono GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Software development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ray-sono-gmbh/software-engineer-all-genders-munich-369809",
        "logo": "https://logo.clearbit.com/raysonogmbh.com",
        "companyLogo": "https://logo.clearbit.com/raysonogmbh.com",
        "image": "https://logo.clearbit.com/raysonogmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-41",
        "title": "Video Editor / Cutter für Instagram & Podcast (m/w/d)",
        "title_ar": "Video Editor / Cutter für Instagram & Podcast (m/w/d) (تسويق ومبيعات)",
        "company": "Bee Seen Agency",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Working student",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Cologne",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Remote | Freelance | Werkstudent \n Hey Du, \n ich bin Alina, Gründerin der LinkedIn-Agentur Bee Seen Agency. \n Neben meinem eigenen Instagram-Account veröffentliche ich alle zwei Wochen eine neue Podcastfolge. Dafür suche ich jemanden, der mich langfristig beim Videoschnitt unterstützt und aus dem Material Content macht, der nicht nur gut aussieht, sondern auch wirklich die Aufmerksamkeit hält. \n Mir ist wichtig, dass Du ein Gefühl für Social Media hast. Du solltest wissen, wann ein Schnitt nötig ist, wie man Spannung aufbaut und wie Videos dynamisch werden, ohne komplett überladen zu wirken. \n Aufgaben \n Deine Aufgaben \n Schnitt meiner Instagram Reels @alinagrigoleit \n Sichtung und Schnitt einer Podcastfolge alle zwei Wochen \n Erstellung von jeweils zwei Reels aus jeder Podcastfolge \n Auswahl der spannendsten Aussagen und Momente aus dem Podcast \n Entfernung von Versprechern, Pausen und unnötigen Längen \n Einbau von Untertiteln, Texteinblendungen, Zooms, Musik, Soundeffekten und unterstützenden Visuals \n Anpassung der Videos an meinen Stil und mein bestehendes Branding \n Aufbereitung der Formate für Instagram und weitere Social-Media-Plattformen \n Perspektivisch auch Schnitt weiterer Formate wie Kundeninterviews oder Case Studies \n Die Podcasts und Interviews werden über Riverside aufgenommen. Erfahrung mit Riverside ist daher ein Plus. \n Qualifikation \n Das solltest Du mitbringen \n Erfahrung im Schnitt von Reels, Podcasts oder anderem Social-Media-Content \n Ein sehr gutes Ve",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bee Seen Agency. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Social media manager"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/bee-seen-agency/video-editor-cutter-fur-instagram-podcast-cologne-235310",
        "logo": "https://logo.clearbit.com/beeseenagency.com",
        "companyLogo": "https://logo.clearbit.com/beeseenagency.com",
        "image": "https://logo.clearbit.com/beeseenagency.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-42",
        "title": "Fachplaner / Sachverständiger vorbeugender Brandschutz (m/w/d)",
        "title_ar": "Fachplaner / Sachverständiger vorbeugender Brandschutz (m/w/d) (برمجة وتكنولوجيا)",
        "company": "HOCH- UND TIEFBAU-GENERALPLANUNG SCHRÖDER GMBH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Für unser mittelständiges, seit Jahrzehnten am Markt erfolgreich tätiges Architektur- und Ingenieurbüro in Berlin-Kaulsdorf suchen wir zur Verstärkung unseres Architekten- und Tragwerksplanungsteams einen interessierten Architekten oder Bauingenieur. \n Unsere Projekte sind vielfältig und unterscheiden sich sowohl in Größe als auch im Hinblick auf die spätere Nutzung. So planen wir Mehrfamilienhäuser für professionelle Bauherren ebenso wie Kindergärten, Pflegeheime, Bürogebäude oder Hochbauten und Industriebauvorhaben für öffentliche Bauherren. Neben innovativen Lösungen für Neubauten bieten wir ebenso sorgsam durchdachte Planungen für die Sanierung, Aufstockung oder den Dachgeschossausbau von Altbauten. \n Aufgaben \n Erstellung von vorbeugenden Brandschutzkonzepten und prüffähigen Brandschutznachweisen für Neu- und Bestandsbauten \n Fachliche Beratung von Bauherren, Architekten und Fachplanern in allen Fragen des Brandschutzes \n Konstruktive brandschutztechnische Baubegleitung von der Planung bis zur Umsetzung \n Abstimmung mit Behörden sowie Mitwirkung bei Abnahmen und Begehungen \n Erstellung von Sachverständigengutachten bei Brandschäden \n Prüfung und Bewertung von Ausführungsplänen im Hinblick auf brandschutztechnische Anforderungen \n Mitgestaltung und Weiterentwicklung interner Brandschutzstandards und -prozesse \n Qualifikation \n Abgeschlossenes Studium des Bauingenieurwesens, der Architektur oder des Brandschutzingenieurwesens \n Qualifizierter Abschluss als Fachplaner:in od",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة HOCH- UND TIEFBAU-GENERALPLANUNG SCHRÖDER GMBH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hoch-und-tiefbau-generalplanung-schroder-gmbh/fachplaner-sachverstandiger-vorbeugender-brandschutz-berlin-289533",
        "logo": "https://logo.clearbit.com/hochundtiefbaugeneralplanungschrdergmbh.com",
        "companyLogo": "https://logo.clearbit.com/hochundtiefbaugeneralplanungschrdergmbh.com",
        "image": "https://logo.clearbit.com/hochundtiefbaugeneralplanungschrdergmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-43",
        "title": "[GLOBAL/INT] [MARKETING] Principal Marketing Analyst (all genders)",
        "title_ar": "أخصائي تسويق ونمو ([GLOBAL/INT] [MARKETING] Principal Marketing Analyst (all genders))",
        "company": "hellofresh",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About the role: What's in the Box \n As Principal Marketing Analyst (all genders) you will serve as the primary strategic architect for the Global Reactivations function, moving beyond tactical execution to own the technical roadmap and measurement frameworks that drive high-level business strategy. You will bridge the gap between complex data ecosystems and executive decision-making, acting as a force who scales the impact of the entire analytics domain. Your expertise in CRM Analytics, combined with a knack for storytelling through data, will directly influence the ability to reduce churn impact and optimize our channels along with marketing spend. \n What you’ll do: The Recipe \n Partner with Marketing and Growth leadership to define KPI trees and measurement frameworks that align global reactivation efforts with long-term business goals. \n Architect advanced analytics solutions using BigQuery, GA4, and behavioral datasets to uncover deep insights into churn patterns and lifecycle optimization. \n Design and analyze rigorous A/B tests and incremental lift studies to ensure global marketing strategies are rooted in statistical truth and clear ROI. \n Lead the integration of AI and automation tools to build scalable, self-service reporting assets that democratize data access across the organization. \n Develop automated reporting and dashboards that democratize data access and enable self-service analytics. \n Advocate for technical excellence by standardizing data schemas and ment",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة hellofresh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/hellofresh/global-int-marketing-principal-marketing-analyst-all-genders-berlin-berlin-116162",
        "logo": "https://logo.clearbit.com/hellofresh.com",
        "companyLogo": "https://logo.clearbit.com/hellofresh.com",
        "image": "https://logo.clearbit.com/hellofresh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-44",
        "title": "Lakebase Sales Specialist, Director (Germany)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Lakebase Sales Specialist, Director (Germany))",
        "company": "databricks",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "SLSQ327R345 \n Databricks is seeking multiple Senior Lakebase Sales Specialists (Central) to help customers modernize their operational data foundation with Databricks Lakebase , our fully-managed Postgres offering for intelligent applications . This high-impact role sits within the Lakebase Go-To-Market team and partners closely with regional Account Executives to drive adoption of Lakebase with platform, application, and data teams. \n Lakebase gives customers a unified, governed foundation for operational workloads and AI-native applications , helping them move away from a fragmented estate of point databases toward a modern, scalable, serverless Postgres service. If you want to be at the forefront of operational databases for AI and intelligent applications at one of the fastest-growing data and AI companies in the world, this is your opportunity. \n This role is based in Munich, Germany (flexible within Germany for the right candidate), and will cover customers in the Central region (Germany, Switzerland, Austria, Eastern Europe). \n The impact you will have \n Drive new Lakebase revenue by identifying, qualifying, and driving Lakebase activations and consumption within a defined territory, in partnership with regional Account Executives and the broader account team. \n Lead with outcomes for key Lakebase personas — including platform teams and developers , data teams , and central IT — articulating how Lakebase helps them ship features faster, simplify operational data archit",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة databricks. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Hq management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/databricks/lakebase-sales-specialist-director-germany-munich-30492",
        "logo": "https://logo.clearbit.com/databricks.com",
        "companyLogo": "https://logo.clearbit.com/databricks.com",
        "image": "https://logo.clearbit.com/databricks.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-45",
        "title": "Werkstudent Recruiting und Employer Branding (m/w/d)",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Werkstudent Recruiting und Employer Branding (m/w/d))",
        "company": "Ifürel EMSR-Technik GmbH & Co. KG",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "remote",
        "type": "Working student, berufseinstieg",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Herne",
        "location_ar": "Herne",
        "salary": "Competitive",
        "description": "Unser Kerngeschäft ist die Planung und Montage von Elektro- und MSR-Technik in der Großindustrie. Seit über 90 Jahren erstellen wir für unsere Kunden sowohl aus der chemischen- und petrochemischen Industrie als auch aus der Stahlindustrie komplette Neuanlagen und leisten Großreparaturen sowie Instandhaltungs- und Wartungsarbeiten. Nahezu 700 Mitarbeiter sorgen jeden Tag an über 20 Standorten in Deutschland für die Einhaltung höchster Qualitätsstandards, auf die sich unsere Kunden stets verlassen können. \n Aufgaben \n Bewerbungen sichten und Bewerberinnen und Bewerber im Prozess begleiten \n Stellenanzeigen erstellen, veröffentlichen und pflegen \n Bewerbungsgespräche organisieren und begleiten \n Recruitingmaßnahmen planen und umsetzen \n Karrieremessen und Recruitingveranstaltungen organisieren und begleiten \n Recruitingkanäle analysieren und neue Möglichkeiten zur Bewerberansprache entwickeln \n Qualifikation \n Sie studieren z. B. BWL, Personalmanagement, Wirtschaftspsychologie, Psychologie, Wirtschaftswissenschaften, Ingenieurwissenschaften, Elektrotechnik, Maschinenbau, Wirtschaftsingenieurwesen oder einen vergleichbaren Studiengang \n Interesse an Recruiting und Employer Branding \n Idealerweise erste Erfahrungen in MS Office \n Benefits \n Wir bieten Ihnen mehr als nur einen Job - die Vorteile auf einen Blick \n Work-Life-Balance : 36-Stunden-Woche und ausschließlich Frühschicht \n Faire Vergütung : Bezahlung nach Tarif, plus Urlaubs- und Weihnachtsgeld sowie übertarifliche Zulagen",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ifürel EMSR-Technik GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ifurel-emsr-technik-gmbh-co-kg/werkstudent-recruiting-und-employer-branding-herne-2004",
        "logo": "https://logo.clearbit.com/ifrelemsrtechnikgmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/ifrelemsrtechnikgmbhcokg.com",
        "image": "https://logo.clearbit.com/ifrelemsrtechnikgmbhcokg.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-46",
        "title": "Junior Project Manager (all genders) - Retail Kampagnen",
        "title_ar": "مدير وقائد فريق (Junior Project Manager (all genders) - Retail Kampagnen)",
        "company": "LIGANOVA GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "JOIN US \n Ab sofort suchen wir für unser Team am Standort Berlin einen Junior Project Manager (all genders) im Bereich Retail Kampagnen. \n Werde Teil unserer Community – wir freuen uns auf dich! \n WHAT YOU DO \n Als Junior Project Manager (all genders) unterstützt du das Team bei der ganzheitlichen Planung sowie Umsetzung von Retail-Kampagnen und übernimmst eigenständig die Verantwortung für vielseitige Teilprojekte. \n Du agierst gemeinsam mit dem Team als zentrale Schnittstelle zwischen unseren Kunden, Design, unserer eigenen Produktion sowie externen Dienstleister:innen und stellst eine reibungslose Kommunikation sicher. \n Du unterstützt bei der Erstellung von Projekttimelines, Kostenkalkulationen und Angeboten für unsere Kunden. \n Du behältst stets den Überblick und übernimmst die Steuerung und Dokumentation von Produktions- sowie Logistikprozessen über den gesamten Projektverlauf hinweg. \n Bei Bedarf bringst du dich aktiv bei der Planung, Umsetzung, Betreuung und Abwicklung von spannenden Eventprojekten ein. \n WHO YOU ARE \n Du hast eine Ausbildung oder ein Studium im Bereich BWL, Wirtschafts- oder Kommunikationswissenschaften erfolgreich abgeschlossen. \n Erste Berufserfahrung (1–2 Jahre) im Retail-Marketing, gerne auch im Rahmen von Praktika oder Werkstudierendentätigkeiten. \n Du begeisterst dich für innovative Retail-Kampagnen und hast ein starkes Interesse an deren Umsetzung mit nachhaltigen Alternativen. \n Hohe Eigenmotivation, Hands-on-Mentalität sowie Teamfähigkeit \n ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة LIGANOVA GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Project management"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/liganova-gmbh/junior-project-manager-all-genders-retail-kampagnen-berlin-251468",
        "logo": "https://logo.clearbit.com/liganovagmbh.com",
        "companyLogo": "https://logo.clearbit.com/liganovagmbh.com",
        "image": "https://logo.clearbit.com/liganovagmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-47",
        "title": "Applikationsingenieur (m/w/d) - Kunststoffprozesse",
        "title_ar": "Applikationsingenieur (m/w/d) - Kunststoffprozesse (برمجة وتكنولوجيا)",
        "company": "plus10",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "berufserfahren",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Stuttgart",
        "location_ar": "Stuttgart",
        "salary": "Competitive",
        "description": "plus10 ist ein Fraunhofer IPA Spin-off. Unser KI-Tool Hopper optimiert Spritzgießprozesse in Echtzeit — weniger Ausschuss, kürzere Zykluszeiten, schnelleres Rüsten. \n Hopper hilft Kunden, den Fachkräftemangel abzufedern, technische Kunststoffe und Rezyklate prozessstabil zu verarbeiten und Produktionswissen systematisch nutzbar zu machen. \n Ein etabliertes Produkt im täglichen Einsatz bei namhaften Kunden aus Medizintechnik, Automotive und Konsumgütern. \n Aufgaben \n TECHNISCHE IMPLEMENTIERUNG BEIM KUNDEN \n Technische Anforderungsaufnahme vor Ort: Maschinenkonfiguration, Datenverfügbarkeit, OT-Anbindung \n Koordination der Anbindung von Maschinensteuerungen und OPC UA-Schnittstellen \n Konfiguration von Hopper für den jeweiligen Prozess (Material, Maschine, Qualitätsziele) \n Einweisung und Schulung von Maschineneinrichtern, Schichtleitern und Prozessingenieuren \n Übergabe in den stabilen Betrieb und laufender technischer Support \n PROJEKTKOORDINATION \n Eigenverantwortliche Steuerung laufender Hopper- Implementierungsprojekte \n FEEDBACK & PRODUKTENTWICKLUNG \n Kundenanforderungen strukturiert an das Entwicklungsteam weitergeben \n Shopfloor-Feedback in konkrete Feature Requests übersetzen \n Perspektive: Mit wachsender Projekterfahrung besteht die Möglichkeit, schrittweise die fachliche Gesamtverantwortung für Hopper zu übernehmen. \n Qualifikation \n Abgeschlossenes Studium in Kunststofftechnik, Maschinenbau, Verfahrenstechnik o.ä. — oder Technikerausbildung mit entsprechender Berufs",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة plus10. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Process engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/plus10/applikationsingenieur-kunststoffprozesse-stuttgart-265310",
        "logo": "https://logo.clearbit.com/plus10.com",
        "companyLogo": "https://logo.clearbit.com/plus10.com",
        "image": "https://logo.clearbit.com/plus10.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-48",
        "title": "Werkstudent E-Mail Marketing Design (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Werkstudent E-Mail Marketing Design (m/w/d))",
        "company": "vivid",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Working student",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Frankfurt am Main",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Wir sind eine E-Mail-Marketing- und E-Commerce-Agentur mit Leidenschaft für datengetriebene Kampagnen und starkes visuelles Storytelling. Für unsere Kund:innen aus dem E-Commerce entwickeln wir E-Mail-Strategien, die nicht nur gut aussehen, sondern messbar performen. Damit unsere Newsletter und Automations auch optisch überzeugen, suchen wir Verstärkung im Bereich E-Mail Design. \n Aufgaben \n Gestaltung ansprechender, markenkonformer E-Mail-Designs für Newsletter, Kampagnen und automatisierte Flows \n Umsetzung von Designvorlagen in E-Mail-Templates (z. B. mit Tools wie Klaviyo, Figma, Photoshop) \n Optimierung bestehender Templates hinsichtlich Look & Feel, Responsiveness, Conversion und Darstellung in verschiedenen E-Mail-Clients \n Enge Zusammenarbeit mit den Kunden und anderen Teammitgliedern \n Unterstützung beim Bildmaterial-Sourcing und einfachen Bildbearbeitungen \n Mitgestaltung neuer Designkonzepte und Trends im E-Mail-Marketing \n Qualifikation \n Eingeschriebene:r Student:in, idealerweise im Bereich Kommunikationsdesign, Mediendesign, Grafikdesign, Marketing oder vergleichbar \n Erste praktische Erfahrung im Grafik- oder E-Mail-Design (Praktikum, Freelance-Projekte, eigene Portfolio-Arbeiten) von Vorteil \n Sicherer Umgang mit gängigen Design-Tools (z. B. Figma, Adobe Photoshop/Illustrator) \n Gespür für Typografie, Farben und Layout sowie ein Auge fürs DetailInteresse an E-Commerce und den Besonderheiten von E-Mail-Marketing (Responsive Design, Dark Mode, Barrierefreiheit) ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة vivid. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote",
            "Crm",
            "Direct marketing"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/vivid/werkstudent-e-mail-marketing-design-frankfurt-am-main-235870",
        "logo": "https://logo.clearbit.com/vivid.com",
        "companyLogo": "https://logo.clearbit.com/vivid.com",
        "image": "https://logo.clearbit.com/vivid.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-49",
        "title": "Senior Ingenieur mechanische Gewerke (Heating & Cooling) (m/w/d)",
        "title_ar": "Senior Ingenieur mechanische Gewerke (Heating & Cooling) (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Buro Happold",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Als Senior Mechanical Engineer bringst Du Deine Erfahrung in der Planung von Heizungs- und Kältesystemen ein, übernimmst technische Verantwortung für Teilbereiche komplexer Projekte und unterstützt die Entwicklung jüngerer Kolleg:innen. Dabei verbindest Du technisches Know-how mit interdisziplinärer Zusammenarbeit und einem hohen Qualitätsanspruch. \n In dieser Position bist Du ein wichtiger technischer Ansprechpartner innerhalb unserer Projektteams. Du entwickelst nachhaltige und wirtschaftliche Lösungen für Heizungs- und Kälteanlagen, koordinierst Schnittstellen zu anderen Gewerken und arbeitest eng mit Kunden, Architekt:innen und Projektbeteiligten zusammen. \n Du übernimmst Verantwortung für die technische Planung, bringst eigene Ideen ein und trägst dazu bei, erfolgreiche Projektergebnisse zu erzielen. \n Aufgaben \n Planung und Auslegung von Heizungs- und Kälteanlagen innerhalb komplexer Gebäudeprojekte \n Entwicklung technischer Konzepte in den Leistungsphasen 1-7 nach HOAI \n Durchführung von Heiz- und Kühllastberechnungen sowie Dimensionierung von Anlagenkomponenten \n Überprüfung und Mitwirkung bei Kostenberechnungen, Ausschreibungen und Vergabeprozessen \n Erstellung und Koordination von BIM-Modellen und Planungsunterlagen unter Einsatz moderner Planungstools \n Abstimmung mit Architekt:innen, Fachplaner:innen, ausführenden Unternehmen und weiteren Projektbeteiligten \n Technische Koordination der mechanischen Gewerke innerhalb interdisziplinärer Projektteams \n Unterstützung",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Buro Happold. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/buro-happold/senior-ingenieur-mechanische-gewerke-heating-cooling-berlin-193079",
        "logo": "https://logo.clearbit.com/burohappold.com",
        "companyLogo": "https://logo.clearbit.com/burohappold.com",
        "image": "https://logo.clearbit.com/burohappold.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-50",
        "title": "Senior Ingenieur mechanische Gewerke (Public Health) (m/w/d)",
        "title_ar": "Senior Ingenieur mechanische Gewerke (Public Health) (m/w/d) (برمجة وتكنولوجيا)",
        "company": "Buro Happold",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Als Senior Mechanical Engineer mit Schwerpunkt Sanitär übernimmst Du technische Verantwortung für die Planung und Entwicklung innovativer Sanitärsysteme innerhalb komplexer Gebäudeprojekte. Du entwickelst nachhaltige und wirtschaftliche Konzepte, koordinierst technische Schnittstellen und unterstützt die fachliche Weiterentwicklung jüngerer Kolleg:innen. \n In enger Zusammenarbeit mit interdisziplinären Teams, Kund:innen und Projektpartnern trägst Du maßgeblich zum Projekterfolg bei. \n Aufgaben \n Planung und Auslegung sanitärtechnischer Anlagen innerhalb anspruchsvoller Gebäudeprojekte \n Entwicklung technischer Konzepte in den Leistungsphasen 1 bis 7 nach HOAI \n Dimensionierung und Berechnung von Trinkwasser-, Abwasser- und Regenwassersystemen \n Überprüfung und Mitwirkung bei Kostenberechnungen, Ausschreibungen und Vergabeprozessen \n Erstellung und Koordination von BIM-Modellen und Planungsunterlagen \n Abstimmung mit Architekt:innen, Fachplaner:innen und ausführenden Unternehmen \n Technische Koordination sanitärtechnischer Gewerke innerhalb interdisziplinärer Projektteams \n Fachliche Unterstützung und Begleitung weniger erfahrener Kolleg:innen \n Mitwirkung an innovativen und nachhaltigen Lösungen im Bereich Water Management und Public Health Engineering \n Qualifikation \n Abgeschlossenes Studium im Bereich Versorgungstechnik, Gebäudetechnik oder eine vergleichbare Qualifikation \n Mehrjährige Berufserfahrung in der Planung sanitärtechnischer Anlagen \n Fundierte Kenntnisse releva",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Buro Happold. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/buro-happold/senior-ingenieur-mechanische-gewerke-public-health-berlin-313761",
        "logo": "https://logo.clearbit.com/burohappold.com",
        "companyLogo": "https://logo.clearbit.com/burohappold.com",
        "image": "https://logo.clearbit.com/burohappold.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-51",
        "title": "Sales Manager/Assistant KI-Hardware (HPC Server/Cloud, Künstliche Intelligenz)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Manager/Assistant KI-Hardware (HPC Server/Cloud, Künstliche Intelligenz))",
        "company": "AIME GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Vertrieb HPC Server/Workstations/Cloud (m/w/d), Vollzeit \n Die AIME GmbH sieht ihre Kernkompetenz innerhalb der Entwicklung, Fertigung und dem europaweiten Vertrieb hochspezialisierter Server zur Entwicklung Künstlicher Intelligenz, sowie im Betrieb einer KI-Cloud. Mit unseren Technologien, Innovationsgeist und Know-how entlang der gesamten KI-Wertschöpfungskette ermöglichen wir unseren Kunden eine zuverlässige und zukunftssichere Produktion von Deep-Learning-Modellen. \n Wir vermieten und bauen an Kundenwünsche angepasste individuelle Hochleistungs-Computer. In unserem ‘AIME Lab’ forschen wir außerdem an Ideen für Anwendungen im Bereich der Künstlichen Intelligenz. \n Dich erwartet eine abwechslungsreiche und spannende Aufgabe, denn wir stehen an der Spitze der technologischen Entwicklung im KI-Bereich und versorgen die Anwender mit den für eine effektive Entwicklung ihrer Produkte und Forschungsthemen notwendigen Werkzeugen in Form von Hochleistungs-Multi-GPU-Servern und -Workstations. \n Wir sind eine junge, noch kleine, aber stetig wachsende Firma mit starker Kundenorientierung, kurzen Entscheidungswegen, einer offenen Dialogkultur und sehr flachen Hierarchien. Bei uns arbeitest du eigenverantwortlich in einer lockeren, toleranten und familiären Arbeitsatmosphäre. \n Unterstütze uns zum nächstmöglichen Zeitpunkt als Sales Manager/Assistant beim Verkauf und der Vermarktung von HPC-Servern und -Workstations für den Bereich Künstliche Intelligenz am Standort Berlin Prenzlauer Be",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة AIME GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Information systems"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/aime-gmbh/sales-manager-assistant-ki-hardware-hpc-server-cloud-kunstliche-intelligenz-berlin-31940",
        "logo": "https://logo.clearbit.com/aimegmbh.com",
        "companyLogo": "https://logo.clearbit.com/aimegmbh.com",
        "image": "https://logo.clearbit.com/aimegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-52",
        "title": "Wirtschaftsinformatiker/in (m/w/d)",
        "title_ar": "Wirtschaftsinformatiker/in (m/w/d) (المبيعات والنمو)",
        "company": "MONE Consulting GmbH (Pflegekraft.de)",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Mid, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bielefeld, Nordrhein-Westfalen, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Wir suchen zum nächstmöglichen Zeitpunkt eine/n Wirtschaftsinformatiker/in - Vollzeit (m/w/d) für den Bereich Business-Development in Bielefeld. Was macht Pflegekraft.de genau? Zu unseren Kunden gehören Unternehmen mit 50 bis 2.000 Mitarbeitern, wie z. B. Pflegeheime und Pflegedienste. Wir unterstützen unsere Kunden durch innovative Online-Marketing-Strategien dabei, neue Fachkräfte einzustellen oder mehr Patienten zu gewinnen. Als Wirtschaftsinformatiker/in (m/w/d) bist du für die Systematisierung von Prozessabläufen zuständig, setzt eigenverantwortlich Projekte um und implementierst neue Prozesse in unserem Unternehmen. Deine Aufgaben bei uns: Betreuung der genutzten (SaaS-)Anwendungen im Unternehmen Einrichtung, Installation und Konfiguration von Standard-Software Dokumentation & Konzeption von digitalen Geschäftsprozessen Planung und Einführung neuer Software & IT-Lösungen Standardlösungen via Schnittstellen verbinden Automationen für alltägliche Aufgaben entwickeln & umsetzen Anwenderschulung & -betreuung Fehleranalyse & Störungsbeseitigung Einstiegsgehalt: 4.500 € brutto im Monat Feste Anstellung - Unbefristeter Vertrag - Vollzeit Weiterentwicklungs- und Aufstiegsmöglichkeiten sind vorhanden. Das bieten wir dir: Karriere-Planung: Individuelle Perspektiven und Aufstiegsmöglichkeiten in einer wachsenden Marketingagentur Attraktives Gehalt: Das Einstiegsgehalt liegt bei 4.500 € brutto im Monat Sicherer Job: Unbefristeter Arbeitsvertrag in einer Branche mit steigendem Bedar",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة MONE Consulting GmbH (Pflegekraft.de). تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/mone-consulting-gmbh-pflegekraftde/wirtschaftsinformatiker-in-bielefeld-413533",
        "logo": "https://logo.clearbit.com/moneconsultinggmbhpflegekraftde.com",
        "companyLogo": "https://logo.clearbit.com/moneconsultinggmbhpflegekraftde.com",
        "image": "https://logo.clearbit.com/moneconsultinggmbhpflegekraftde.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-53",
        "title": "Sales Manager (m/w/d) – Enterprise Softwarevertrieb & RFP (Facility Management)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Sales Manager (m/w/d) – Enterprise Softwarevertrieb & RFP (Facility Management))",
        "company": "VertiGIS GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Mid, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin, Berlin, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Die VertiGIS Unternehmensgruppe entwickelt Softwarelösungen für Geografische Informationssysteme (GIS). Wir sind führender Lösungsanbieter in den Bereichen Energieversorgung, Wasserwirtschaft, Landmanagement, Behörden, Infrastruktur, Facility Management und Telekommunikation. Unsere Produkte helfen Unternehmen, Netze, Anlagen und Prozesse effizient zu planen, zu verwalten und zu optimieren – weltweit im täglichen Einsatz. Sie verantworten den gesamten Vertriebszyklus für unsere Softwarelösungen im Umfeld Facility und Infrastruktur – von der Akquise bis zum Abschluss und Ausbau bestehender Kunden. Ein wesentlicher Bestandteil der Rolle ist die eigenständige Steuerung komplexer Ausschreibungen (RFP) mit klaren formalen Anforderungen und festen Prozessen. Die Aufgaben Vertriebssteuerung & Abschluss Steuerung des gesamten Vertriebszyklus von der Akquise bis zum Abschluss und Ausbau bestehender Kunden Entwicklung und Steuerung von Deals in komplexen Buying‑Centern mit mehrstufigen Entscheidungsprozessen Führung von Angebots-, Preis- und Vertragsverhandlungen inkl. Abstimmung von Konditionen und Zahlungsmodellen Verbindliche Pipeline‑Steuerung und belastbarer Forecast als kontinuierliche Arbeitsgrundlage Ausschreibungen (RFP) Steuerung von Ausschreibungen (RFP) von Go/No-Go bis zur fristgerechten und formalkorrekten Abgabe Analyse von Anforderungskatalogen und Übersetzung in strukturierte, wettbewerbsfähige Angebote Koordination aller beteiligten internen Einheiten sowie parallele ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة VertiGIS GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales​"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/vertigis-gmbh/sales-manager-enterprise-softwarevertrieb-rfp-facility-management-berlin-300791",
        "logo": "https://logo.clearbit.com/vertigisgmbh.com",
        "companyLogo": "https://logo.clearbit.com/vertigisgmbh.com",
        "image": "https://logo.clearbit.com/vertigisgmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-54",
        "title": "Python Backend Engineer (m/f/x)",
        "title_ar": "مهندس ومطور برمجيات (Python Backend Engineer (m/f/x))",
        "company": "Makersite GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote job",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Job Title: (Senior) Python Engineer (m/f/x) Location: EU (Remote) Who You’ll Work For: At Makersite, we're pioneering the future of sustainable product development and digital collaboration. As a leading platform for product lifecycle management (PLM), we empower companies to make smarter, more sustainable decisions across their entire supply chain. Our cutting-edge software enables teams to design, prototype, and manufacture with transparency, efficiency, and responsibility—reducing environmental impact while optimizing performance. We're a fast-growing, innovative company that thrives on creativity, collaboration, and continuous learning. If you're passionate about technology, sustainability, and creating meaningful impact, we’d love to hear from you. Join us and be a part of shaping the future of manufacturing and product innovation. Who we're looking for: As part of our growing team, you will play a key role in shaping the future of sustainable product development. We’re looking for innovative, driven Python Backend Engineers who are passionate about technology and sustainability to join us in building tools that enable companies to make smarter, more responsible decisions. In this role, you’ll have the opportunity to collaborate with talented professionals, contribute to cutting-edge projects, and help drive the digital transformation of industries worldwide. If you're ready to make an impact and contribute to meaningful change, we want to hear from you! This role is a f",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Makersite GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/makersite-gmbh/remote-python-backend-engineer-berlin-438727",
        "logo": "https://logo.clearbit.com/makersitegmbh.com",
        "companyLogo": "https://logo.clearbit.com/makersitegmbh.com",
        "image": "https://logo.clearbit.com/makersitegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-55",
        "title": "Senior Data Scientist (m/f/x)",
        "title_ar": "Senior Data Scientist (m/f/x) (برمجة وتكنولوجيا)",
        "company": "Makersite GmbH",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Remote job",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "Data Scientist (m/f/x) Location: EU (Remote) Who You’ll Work For : At Makersite, we're pioneering the future of sustainable product development and digital collaboration. As a leading platform for product lifecycle management (PLM), we empower companies to make smarter, more sustainable decisions across their entire supply chain. Our cutting-edge software enables teams to design, prototype, and manufacture with transparency, efficiency, and responsibility—reducing environmental impact while optimizing performance. We're a fast-growing, innovative company that thrives on creativity, collaboration, and continuous learning. If you're passionate about technology, sustainability, and creating meaningful impact, we’d love to hear from you. Join us and be a part of shaping the future of manufacturing and product innovation. Who we're looking for: As part of our growing team, you will play a key role in shaping the future of sustainable product development. We’re looking for innovative, driven Data Scientists who are passionate about technology and sustainability to join us in building tools that enable companies to make smarter, more responsible decisions. In this role, you’ll have the opportunity to collaborate with talented professionals, contribute to cutting-edge projects, and help drive the digital transformation of industries worldwide. Ifyou're ready to make an impact and contribute to meaningful change, we want to hear from you! This role is a fixed, permanent position. All ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Makersite GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering",
            "Remote"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/makersite-gmbh/remote-senior-data-scientist-berlin-315229",
        "logo": "https://logo.clearbit.com/makersitegmbh.com",
        "companyLogo": "https://logo.clearbit.com/makersitegmbh.com",
        "image": "https://logo.clearbit.com/makersitegmbh.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-56",
        "title": "Senior Business Transformation Advisor - Planning & Materials Management",
        "title_ar": "Senior Business Transformation Advisor - Planning & Materials Management (أخرى)",
        "company": "Intersnack Group GmbH & Co. KG",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Düsseldorf, Nordrhein-Westfalen, Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Why This Role Matters As a Business Transformation Advisor, you will independently lead sub‑projects within the Transformation Management department. You bring expertise in project management, process optimization, and functional specifications, with a strong focus on improving procurement, sourcing, and supply chain planning processes. Your technical capabilities in ERP and planning systems help elevate upstream supply chain performance. Your Role at Intersnack Manage sub‑projects within broader transformation initiatives Represent Business Transformation in discussions with Management Units, Group Functions, and external partners Develop functional specifications, process improvements, and organizational designs Drive ERP‑related improvements in planning, scheduling, MRP, and procurement (MM), including configuration and testing Lead cross‑functional project teams and ensure alignment and adoption of new standards Perform hands‑on validation, testing, data analysis, and issue resolution Expand knowledge into adjacent areas (manufacturing, order‑to‑cash, quality, commercials, finance) Mentor junior team members Education University degree in Business Administration, STEM, or related fields Experience Several years in business transformation, project management, or consulting Proven ERP configuration experience in planning‑related areas (Supply Planning, Scheduling, MRP, Procurement/MM) Experience managing cross‑functional projects and implementing new processes or IT solutio",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Intersnack Group GmbH & Co. KG. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business transformation"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/intersnack-group-gmbh-co-kg/senior-business-transformation-advisor-planning-materials-management-dusseldorf-32337",
        "logo": "https://logo.clearbit.com/intersnackgroupgmbhcokg.com",
        "companyLogo": "https://logo.clearbit.com/intersnackgroupgmbhcokg.com",
        "image": "https://logo.clearbit.com/intersnackgroupgmbhcokg.com",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789388809-57",
        "title": "Senior Performance Marketing Manager",
        "title_ar": "أخصائي تسويق ونمو (Senior Performance Marketing Manager)",
        "company": "Tines",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Ireland, USA",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Founded in 2018 with co-headquarters in Dublin and Boston, Tines powers some of the world's most important workflows. Our intelligent workflow platform applies AI, automation, and integration with human ingenuity to drive real business results. \n Tines serves a diverse range of customers, from startups to public companies, including Canva, Databricks, Elastic, Kayak, Intercom, and McKesson. As an integrator across the entire tech stack, Tines is vendor-agnostic integrating with any API-enabled service. This flexibility enables our customers to achieve their highest-priority goals faster. And because Tines is secure and private by design, it’s popular with security, IT, engineering, finance, and other security-focused teams. \n At Tines, we're driven by our values of Simplicity, Speed, and Soundness. We're committed to delivering exceptional customer experiences while fostering a company culture that nurtures individual curiosity, growth, and integrity. We’re excited about what’s next, and we’re looking for others to join us on our journey. \n The Role \n We're hiring a Senior Performance Marketing Manager to own and scale paid acquisition at Tines. \n This role will be responsible for developing and executing our global paid acquisition strategy, improving campaign performance, maximizing return on marketing investment, and driving measurable pipeline growth. \n You'll partner cross-functionally with teams across Marketing, RevOps, Finance, and other key business stakeholders, as ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Tines. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing & sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153226-senior-performance-marketing-manager",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/9285d376-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/9285d376-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/08/9285d376-221.png",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789388809-58",
        "title": "Senior Site Reliability Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Site Reliability Engineer)",
        "company": "Playson",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About the Role \n We’re looking for a Senior Site Reliability Engineer to join our Infrastructure Squad - a lean & senior team where ownership is high and expectations are even higher. This is a deeply hands-on role at the core of a high-traffic system, where you’ll be directly responsible for maintaining reliability, performance, and stability in a fast-paced environment. \n You’ll be working on real-time production challenges, handling incidents, managing alerts, and being part of a critical on-call rotation. This role requires resilience, strong decision-making under pressure, and a proactive mindset to continuously improve systems operating at scale. \n If you thrive in high-load environments, enjoy solving complex production issues, and want to have a direct impact on systems used by millions - this is the place for you. \n Key Responsibilities \n Own system reliability by actively monitoring platform health, managing alerts, and responding to incidents in real time \n Participate in 24/7 on-call rotations, taking full ownership of production stability in a high-traffic (5–7k RPS) environment \n Investigate incidents, perform root cause analysis, and implement long-term fixes to prevent recurrence \n Build and continuously improve monitoring, alerting, and observability across the Kubernetes (EKS) ecosystem \n Deploy, manage, and optimise infrastructure using Terraform, Helm, and GitOps tools (Flux/ArgoCD) \n Drive automation and proactively improve system resilience, reducing man",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Playson. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Devops & infrastructure"
        ],
        "applyUrl": "https://jobicy.com/jobs/153228-senior-site-reliability-engineer-3",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789388809-59",
        "title": "Senior Integration Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Integration Engineer)",
        "company": "Playson",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About the Role \n We’re looking for a Senior Integration Engineer to take full ownership of partner integrations - from initial onboarding through to go-live and beyond. \n This is a delivery-focused, highly technical role where you’ll act as the key bridge between partners, commercial teams, and engineering. You won’t just coordinate - you’ll drive integrations forward, solve complex issues, and ensure partners are successfully launched. \n Key Responsibilities \n Own end-to-end partner integrations: kickoff, implementation, testing, and go-live \n Drive multiple integrations in parallel, ensuring timely and high-quality delivery \n Act as the main technical point of contact for partners (from engineers to C-level stakeholders) \n Lead technical discussions and solution design, ensuring alignment between partner requirements and our platform \n Work closely with internal teams to ensure smooth integrations and resolve technical challenges along the way \n Translate partner needs into clear technical requirements and push back when needed \n Collaborate closely with Commercial, Onboarding, and Engineering teams to support business goals \n Ensure successful delivery and provide technical sign-off before go-live \n Contribute to improving integration processes, documentation, and scalability \n Requirements \n 3+ years of experience in: \n Integration Management \n Technical Account Management \n Solutions Engineering \n Strong understanding of: \n REST APIs, JSON, HTTP \n Webhooks, idempotency, ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Playson. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Technical support"
        ],
        "applyUrl": "https://jobicy.com/jobs/153232-senior-integration-engineer",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "postedAt": "2026-09-14",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789388809-60",
        "title": "Marketing Designer",
        "title_ar": "أخصائي تسويق ونمو (Marketing Designer)",
        "company": "Playson",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About the Role \n Playson is a leading online gaming supplier with worldwide recognition which was founded in 2012. We offer complete gaming solutions based on the latest technologies and detailed market analysis for the leading iGaming operators. \n We’re looking for a Marketing Graphic Designer to help shape the way we promote our games and present our brand to partners. This role sits within the Marketing Squad and has direct impact on how Playson is seen across channels. \n To further strengthen our creative function, we are looking for a Senior Marketing Designer - a mature and structured professional who will drive the development of our marketing visuals and support the growth of the Graphic Artist stream. \n Key Responsibilities \n Creating sets of promo materials for partners when launching new iGaming products and/or Network Promotions (game icons packs, resizes, promo banners, etc.) \n Developing custom promo materials for key partners \n Creating key visuals for communication campaigns, as well as artwork for various communication channels (web, social media, print ads, email campaigns, etc.) \n Creating designs for branded merchandise \n Creating designs for point of sale materials \n Creating mockups and designs for exhibitions and company’s own events (branded decor, photo zones, etc.) \n Designing landing pages for brand’s promo activities \n Creating sales decks for company products \n Producing small video clips or animated graphics for social media, as well as standard ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Playson. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Creative & design"
        ],
        "applyUrl": "https://jobicy.com/jobs/153230-marketing-designer",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/6f266d9c-221-1.png",
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
