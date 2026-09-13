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
        "id": "job-1789312262-1",
        "title": "Senior Product Designer, B2B eCommerce",
        "title_ar": "مصمم واجهات وتجربة مستخدم (Senior Product Designer, B2B eCommerce)",
        "company": "Oura Health Ltd",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$72,550 - $203,000 USD",
        "description": "Our mission at Oura is to empower every person to own their inner potential. Our award-winning products help our global community gain a deeper knowledge of their readiness, activity, and sleep quality by using their Oura Ring and its connected app. We've helped millions of people understand and improve their health by providing daily insights and practical steps to inspire healthy lifestyles. \n Empowering the world starts with living our values and empowering our team. As a quickly growing company focused on helping people live healthier and happier lives, we ensure that our team members have what they need to do their best work — both in and out of the office. \n Oura is looking for an experienced Product Designer to join our team, responsible for designing best-in-class eCommerce B2B experiences to support our commercial relationships. This person will work with multiple stakeholders to design intuitive and impactful solutions based on qualitative and quantitative data. What You Will Do: \n UX design for B2B web products and new systems that facilitate the sales and management of bulk Oura Ring orders and companion services \n Architect scalable, customizable landing page templates that allow for rapid deployment of client-specific branding and messaging. \n Empower customers to independently manage their orders, billing, payments, and membership statuses through a self-service interface. \n Design flexible, branded checkout flows that support complex features like split-tender",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Oura Health Ltd. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Product-design",
            "Ux-ui-design",
            "B2b-e-commerce",
            "Web-design"
        ],
        "applyUrl": "https://himalayas.app/companies/oura-health-ltd/jobs/senior-product-designer-b2b-ecommerce",
        "logo": "https://cdn-images.himalayas.app/6aog8fktj0cxd498p9i1ritqvtgs",
        "companyLogo": "https://cdn-images.himalayas.app/6aog8fktj0cxd498p9i1ritqvtgs",
        "image": "https://cdn-images.himalayas.app/6aog8fktj0cxd498p9i1ritqvtgs",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-2",
        "title": "Cloud Solution Architect (v-CSA) - Active Directory & PKI",
        "title_ar": "Cloud Solution Architect (v-CSA) - Active Directory & PKI (برمجة وتكنولوجيا)",
        "company": "Concentrix",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Finland",
        "location_ar": "Finland",
        "salary": "Competitive",
        "description": "Job Title: Cloud Solution Architect (v-CSA) - Active Directory & PKI Job Description We are looking for a Cloud Solution Architect (CSA) with deep expertise in Active Directory (AD) and Public Key Infrastructure (PKI) to support enterprise and regulated customers in identity, security, and hybrid infrastructure scenarios. This is a customer-facing role responsible for driving secure identity architecture, acting as a trusted technical advisor, and delivering resilient AD and PKI solutions across on-premises and hybrid environments. Depth in AD and PKI is the primary requirement; broader technical coverage is valuable when it supports identity, security, and regulated customer scenarios. Key Responsibilities 1. Active Directory & PKI Architecture \n Design and implement enterprise Active Directory Domain Services (AD DS) architectures. \n Design and implement Public Key Infrastructure (PKI), Certificate Services, and certificate lifecycle management solutions. \n Support AD domain design, consolidation, modernization, and operational governance. \n Guide customers on secure identity architecture, authentication, authorization, and certificate-based trust models. \n 2. Customer Delivery & Execution \n Lead end-to-end delivery of AD and PKI engagements, including assessment, design, implementation, migration, and troubleshooting. \n Troubleshoot complex identity, authentication, DNS, Group Policy, and certificate-related issues. \n Deliver high-quality, repeatable technical engagements ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Concentrix. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Pki-architect",
            "Iam"
        ],
        "applyUrl": "https://himalayas.app/companies/concentrix/jobs/cloud-solution-architect-v-csa-active-directory-pki",
        "logo": "https://cdn-images.himalayas.app/i9hx9jrexxuh5tonc0gnxc75d444",
        "companyLogo": "https://cdn-images.himalayas.app/i9hx9jrexxuh5tonc0gnxc75d444",
        "image": "https://cdn-images.himalayas.app/i9hx9jrexxuh5tonc0gnxc75d444",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-3",
        "title": "Engineer III (Full Stack)",
        "title_ar": "مهندس ومطور برمجيات (Engineer III (Full Stack))",
        "company": "Mutual Of Omaha",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Puerto Rico, United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$150,000 - $160,000 USD",
        "description": "Are you an Expert Level Full Stack Engineer ready to drive innovation and scale modernized systems and shape the future of our solutions? In this role, you’ll develop integrations as part of our ongoing $500 million modernization efforts in Workplace Solutions, our fast-growing business to business division. Your expertise will drive integration development between on-prem and cloud technology for our Fortune 500 business. We work with a unique blend of homegrown and vendor applications, balancing legacy systems with exciting modernization efforts using Java, Spring Boot, Groovy, JavaScript, TKG, AWS, Mulesoft, and more. If you’re passionate about influencing how we evolve our platforms and tackling complex challenges head-on creating high-performance systems and want to be part of a forward-thinking team, we’d love to have you on board! WHAT WE CAN OFFER YOU: \n Estimated Salary (Levels have variable responsibilities and qualifications) \n Engineer II: $130,000 - $149,000, plus annual bonus opportunity \n Engineer III: $150,000 - $160,000, plus annual bonus opportunity \n 401(k) plan with a 2% company contribution and 6% company match. \n Work-life balance with vacation, personal time and paid holidays. See our benefits and perks page for details. \n Applicants for this position must not now, nor at any point in the future, require sponsorship for employment \n WHAT YOU’LL DO: \n Lead the end-to-end development, testing, and integration of modern applications and systems that enhanc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Mutual Of Omaha. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Full-stack-engineering",
            "Backend-development",
            "Cloud-engineer",
            "Integration-engineering"
        ],
        "applyUrl": "https://himalayas.app/companies/mutual-of-omaha/jobs/engineer-iii-full-stack",
        "logo": "https://cdn-images.himalayas.app/em4kqi0xrwr6natcvssdrabs7fav",
        "companyLogo": "https://cdn-images.himalayas.app/em4kqi0xrwr6natcvssdrabs7fav",
        "image": "https://cdn-images.himalayas.app/em4kqi0xrwr6natcvssdrabs7fav",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-4",
        "title": "L3 Engineer – Microsoft Cloud, SaaS & Security",
        "title_ar": "مهندس ومطور برمجيات (L3 Engineer – Microsoft Cloud, SaaS & Security)",
        "company": "Dijital Team Pty Ltd",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Sri Lanka",
        "location_ar": "Sri Lanka",
        "salary": "Competitive",
        "description": "About the Role \n We are seeking an experienced L3 Engineer – Microsoft Cloud, SaaS & Security to provide senior technical support, take ownership of complex escalations, and strengthen the reliability, security, and maturity of client technology environments. \n You will work across Microsoft technologies, managed IT services, cloud, infrastructure, cybersecurity, and emerging AI solutions. The role requires strong technical judgement, an MSP mindset, and the ability to communicate complex issues clearly to both technical and non-technical stakeholders. \n About the Client \n You will be working with an established technology partner supporting small and mid-sized organisations with secure, practical, and future-focused technology solutions. The organisation helps clients reduce disruption, protect critical information, meet compliance requirements, and improve the way they work through managed IT, cybersecurity, Microsoft, cloud, and AI capabilities. \n Ideal Profile \n Proven experience in a Level 3 engineering or senior technical support role , preferably within an MSP environment. \n Strong hands-on expertise across Microsoft 365, Entra ID, Intune, endpoint management, identity, email, cloud, and security . \n Solid knowledge of servers, networks, firewalls, VPNs, DNS, backups, remote access, and business applications. \n Strong troubleshooting and root-cause analysis capabilities, with the ability to identify dependencies across complex environments. \n Experience supporting Micr",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Dijital Team Pty Ltd. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "L3-engineer",
            "Microsoft-cloud",
            "Technical-support",
            "Saas-support"
        ],
        "applyUrl": "https://himalayas.app/companies/dijital-team-pty-ltd/jobs/l3-engineer-microsoft-cloud-saas-security",
        "logo": "https://cdn-images.himalayas.app/pmv3pkddtfsmkk9hckyhdiaj78m4",
        "companyLogo": "https://cdn-images.himalayas.app/pmv3pkddtfsmkk9hckyhdiaj78m4",
        "image": "https://cdn-images.himalayas.app/pmv3pkddtfsmkk9hckyhdiaj78m4",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-5",
        "title": "Sr. Software Engineering Manager",
        "title_ar": "مهندس ومطور برمجيات (Sr. Software Engineering Manager)",
        "company": "Intellivo",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Sr. Software Engineering Manager IT and Programming - Memphis, Tennessee Department IT and Programming Employment Type Full-Time Minimum Experience Manager/Supervisor Role Summary This is a player-coach role. You will lead a small, focused engineering team and stay close enough to the code to review it, debug it, and occasionally write it. We are not looking for someone who manages from a spreadsheet. You will own delivery of our recovery intelligence platform, the engine that finds third-party liability recovery opportunities our clients would otherwise never see. That work spans the full stack: web and desktop interfaces, middle-tier services, the API layer that connects them, and the SQL underneath it all. Some of the estate is modern, containerized, and running on Azure. Some of it is a mature Windows desktop application that has been earning revenue for years and still needs to be supported while it evolves. You will be comfortable with both, and clear-eyed about how to move from one to the other without breaking what works. The technical range here is real: API engineering, web and WinForms front ends, backend services, microservices, containerization, Kubernetes, and Azure. So is the ownership. This is a small company, which means the person in this seat sets the engineering standard rather than inheriting one. This is a remote position; candidates in or near Memphis, TN are preferred. Core Responsibilities \n Lead, coach, and grow a small software engineering team, set",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Intellivo. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Engineering-manager"
        ],
        "applyUrl": "https://himalayas.app/companies/intellivo/jobs/sr-software-engineering-manager",
        "logo": "https://cdn-images.himalayas.app/whsqocv7ex3nvefw21sntpv8cgw2",
        "companyLogo": "https://cdn-images.himalayas.app/whsqocv7ex3nvefw21sntpv8cgw2",
        "image": "https://cdn-images.himalayas.app/whsqocv7ex3nvefw21sntpv8cgw2",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-6",
        "title": "Launch Strategy Marketing Intern - Summer 2027",
        "title_ar": "أخصائي تسويق ونمو (Launch Strategy Marketing Intern - Summer 2027)",
        "company": "Veeam Software",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "us_ca",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$20 - $25 USD",
        "description": "Veeam is the Data and AI Trust Company, specializing in helping organizations ensure their data and AI are fully understood, secured, and resilient to enable the acceleration of safe AI at scale. As the market leader in both data resilience and data security posture management, Veeam is built for the convergence of identity, data, security, and AI risk. Headquartered in Seattle with offices in more than 30 countries, Veeam protects over 550,000 customers worldwide, who trust Veeam to keep their businesses running. Join us as we go fearlessly forward together, growing, learning, and making a real impact for some of the world’s biggest brands. Summer Internship Our Summer Internship Program is designed for students entering their final year of university who are eager to gain meaningful, real-world experience in a fast paced, collaborative, and professional environment. As a Summer Intern, you'll participate in a comprehensive onboarding experience led by our University Relations team to set you up for success from day one. Throughout the program, you'll also have the opportunity to participate in weekly professional development sessions, networking events, social activities, and other engaging experienced designed to support your personal and professional growth. The program takes place from June – August 2027 (10-week program). Your Role Join our dynamic Launch Strategy Team as an intern, where you will gain hands-on experience supporting the evolution of product launch plann",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Veeam Software. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Marketing-intern",
            "Launch-strategy",
            "Product-marketing",
            "Go-to-market-marketing"
        ],
        "applyUrl": "https://himalayas.app/companies/veeam-software/jobs/launch-strategy-marketing-intern-summer-2027",
        "logo": "https://cdn-images.himalayas.app/acslamg6pk4gszd09vi1132t5sbd",
        "companyLogo": "https://cdn-images.himalayas.app/acslamg6pk4gszd09vi1132t5sbd",
        "image": "https://cdn-images.himalayas.app/acslamg6pk4gszd09vi1132t5sbd",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-7",
        "title": "Data Engineer",
        "title_ar": "مهندس ومطور برمجيات (Data Engineer)",
        "company": "Viking Cruises US",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$135,000 - $150,000 USD",
        "description": "Job Summary \n We are seeking a highly motivated and experienced Data Engineer to join our dynamic and growing Data Platforms & Solutions team. As a Data Engineer within our dynamic pricing product team, you will play a crucial role in supplying data for production machine-learning models. Working alongside data scientists, data analysts, and software developers, you will ensure the efficient and accurate handling of data pipelines, facilitate the implementation of data models, and contribute to the overall enhancement of our pricing strategies. Your key responsibilities will include: \n Job Responsibilities: \n Design, develop, and maintain scalable data pipelines to support dynamic pricing models. \n Collaborate with data scientists to prepare data for model training, validation, and deployment. \n Implement and optimize ETL (Extract, Transform, Load) processes to ensure data accuracy and reliability. \n Monitor and troubleshoot data workflows to ensure continuous and reliable data integration. \n Work with the software development team to integrate data engineering solutions into the broader product architecture. \n Ensure data governance and compliance with relevant data privacy and security regulations. \n Engage with stakeholders to understand data requirements and translate these into technical specifications. \n Document data engineering processes and contribute to best practices. \n Job Requirements: \n Bachelor's (from a four-year college or university) or Master’s degree in Co",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Viking Cruises US. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data-engineering",
            "Cloud-data-engineering",
            "Etl-development"
        ],
        "applyUrl": "https://himalayas.app/companies/viking-cruises-us/jobs/data-engineer",
        "logo": "https://logo.clearbit.com/vikingcruisesus.com",
        "companyLogo": "https://logo.clearbit.com/vikingcruisesus.com",
        "image": "https://logo.clearbit.com/vikingcruisesus.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-8",
        "title": "Analytics Engineer II",
        "title_ar": "مهندس ومطور برمجيات (Analytics Engineer II)",
        "company": "Arco Educação",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Brazil",
        "location_ar": "Brazil",
        "salary": "Competitive",
        "description": "📚 Feita de pessoas que transformam a educação Todas as vagas da Arco são elegíveis para Pessoas com Deficiência. \n Somos Arcotech , time de tecnologia da Arco Educação . Desenvolvemos soluções digitais para que alunos, pais e escolas atuem em conjunto por um aprendizado mais dinâmico e efetivo. \n Aqui reunimos talentos que têm paixão por tecnologia e educação. Sabemos que, juntos, somos capazes de unir as duas forças para elevar a experiência de aprendizagem. Queremos ir além da inovação, nosso propósito é potencializar o impacto da educação nas pessoas, é o que nos move. \n Por meio de soluções de aprendizagem, estimativas e relacionamento, ajudamos as escolas a se tornarem melhores, maiores e mais encantadoras para os alunos, educadores e familiares. \n #VEMPRAARCO 🧡 #VEMSERTECH \n Agora que você já captou um pouco mais da nossa essência, vamos falar sobre a oportunidade? \n Você fará parte do nosso time de Dados assumindo um papel protagonista e estratégico na nossa arquitetura de informações. Como Analytics Engineer SR , você será a referência técnica na definição de padrões, estruturação de modelos complexos cruzando múltiplos domínios e evolução da nossa plataforma analítica. Você atuará muito próximo às lideranças de Negócio, Produto e Tecnologia, garantindo escalabilidade, governança e eficiência na nossa tomada de decisão. \n 👉 Quais serão os seus desafios com a gente? \n Desenhar e arquitetar modelos analíticos de alta complexidade que integram múltiplos domínios de negóc",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Arco Educação. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Analytics-engineering",
            "Data-engineering",
            "Analytics-engineer"
        ],
        "applyUrl": "https://himalayas.app/companies/arco-educacao/jobs/analytics-engineer-ii-3623649129",
        "logo": "https://cdn-images.himalayas.app/au5kiku4p2m20d46p98kate8bgjg",
        "companyLogo": "https://cdn-images.himalayas.app/au5kiku4p2m20d46p98kate8bgjg",
        "image": "https://cdn-images.himalayas.app/au5kiku4p2m20d46p98kate8bgjg",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-9",
        "title": "ServiceNow Developer (Top Secret Clearance Required)",
        "title_ar": "مهندس ومطور برمجيات (ServiceNow Developer (Top Secret Clearance Required))",
        "company": "ICF",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$81,499 - $167,644 USD",
        "description": "* This role is contingent upon a contract award. \n As aServiceNowDeveloperyouplay a pivotal role in successfullydesigning anddeploying ServiceNow solutions for our clients. In this role, you willbe responsible fordesigning andconfiguring, customizing, and implementing ServiceNow applications to meet specificclientbusiness requirements. Your technicalexpertise, attention to detail, and commitment to excellence will contribute significantly to the success of our projects and the satisfaction of our clients. \n Job Location: This position requires that the job be performed in the United States. If you accept this position, you should note that ICF does monitor employee work locations and blocks access from foreign locations/foreign IP addresses and prohibits personal VPN connections. \n Your responsibilities include: \n SolutionDiscovery & Design: Work closely with Solutions Architects and Business Analysts to understandand documentthebusiness outcomes andfunctional requirements and translate them into effective ServiceNowsolution designs. \n Technical Implementation: Collaborate with cross-functional teams to implement ServiceNow solutionstoalign withthe designed requirements and ensure solutions meetindustry best practices.Develop andmaintaincomplex scripts, business rules, and UI policies. \n Data Migration: Supportdata migrationdesign andactivities from legacy systems to ServiceNow, ensuring data accuracy and consistency during the transition.Validate that data is migrated to the",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة ICF. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Servicenow-developer",
            "Itsm-developer",
            "Platform-developer"
        ],
        "applyUrl": "https://himalayas.app/companies/icf/jobs/servicenow-developer-top-secret-clearance-required-1558977844",
        "logo": "https://cdn-images.himalayas.app/jduduh5ao9nkg59dqaxj2d0yvx2g",
        "companyLogo": "https://cdn-images.himalayas.app/jduduh5ao9nkg59dqaxj2d0yvx2g",
        "image": "https://cdn-images.himalayas.app/jduduh5ao9nkg59dqaxj2d0yvx2g",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-10",
        "title": "Founders Associate Intern",
        "title_ar": "Founders Associate Intern (تصميم وإبداع)",
        "company": "talentpluto",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$20 - $35 USD",
        "description": "Location: Remote (United States) Work Model: Remote Industry: AI recruiting and talent marketplace (B2B SaaS) Compensation: $20–$35 per hour About the Company TalentPluto is a Y Combinator-backed startup building the hiring stack for high-growth companies. We run two connected products: a talent network that places engineering, go-to-market, and operations people into fast-moving startups, and an AI recruiting tool that lets a hiring team run candidate search, tiered enrichment, rubric-based scoring, and outbound campaigns directly from their assistant. We work with dozens of venture-backed startups across AI, developer tools, fintech, and healthcare. The team is small and founder-led, and interns work on live problems rather than practice ones. The Opportunity This is a Founders Associate internship working directly with the founders on whatever matters most that week. The work moves between strategy, analysis, and execution: scoping a question nobody has answered yet, doing the research, forming a recommendation, and then owning the follow-through until it is actually done. You will see how an early-stage company gets built from the inside, including the parts that are unglamorous and still undecided. Because the team is small, the projects are real and the ownership is genuine. Expect limited structure, frequent context switching, and a high bar on written communication, since most decisions here are made from a well-argued document rather than a meeting. Responsibilities ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة talentpluto. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Founders-associate",
            "Startup-strategy",
            "Business-analysis",
            "Market-research"
        ],
        "applyUrl": "https://himalayas.app/companies/talentpluto/jobs/founders-associate-intern-5619628430",
        "logo": "https://cdn-images.himalayas.app/p6y9kxjrgdoizuq3sar2aeykn2uf",
        "companyLogo": "https://cdn-images.himalayas.app/p6y9kxjrgdoizuq3sar2aeykn2uf",
        "image": "https://cdn-images.himalayas.app/p6y9kxjrgdoizuq3sar2aeykn2uf",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-11",
        "title": "Financial Analyst (CR, Costa Rica , Virtual, Costa Rica, LATAM)",
        "title_ar": "Financial Analyst (CR, Costa Rica , Virtual, Costa Rica, LATAM) (مالية ومحاسبة)",
        "company": "BCD Travel",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Costa Rica",
        "location_ar": "Costa Rica",
        "salary": "Competitive",
        "description": "Start your journey with BCD: Grow, connect, collaborate and celebrate with our global team Financial Analyst, Global Pricing (Remote) Full time, Costa Rica This role will prepare strategic pricing proposals for national, regional, and multinational new business tenders and retention/expansion efforts of the existing client base. As a Financial Analyst, Global Pricing, you will \n Build and edit financial pricing models for prospective clients \n Ensure financial offers are submitted in the required format \n Uphold pricing policies and procedures to ensure financial proposals are accurate, profitable, and designed in conjunction with overall company objectives \n Support and assist sales and sales development leadership in other financial and pricing-related activities \n Align across functional units to create winning pricing strategies and proposals \n Liaise with global pricing, sales, and sales development staff to create continuity throughout the global sales process \n Drive regional innovation and efficiency through the continuous review and enhancement of processes, procedures, and formats \n About you \n You have a College, Associate, or University degree in accounting or finance or equivalent experience \n Considerable accounting or finance experience \n Proficiency in Microsoft Excel, Word, and PowerPoint \n Excellent communication skills in English and Spanish \n Ability to work independently, exercising discretion and judgment \n Demonstrated ability to work in a team environm",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة BCD Travel. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Financial-analyst",
            "Finance-and-legal",
            "Pricing-analyst"
        ],
        "applyUrl": "https://himalayas.app/companies/bcd-travel/jobs/financial-analyst-cr-costa-rica-virtual-costa-rica-latam-6144641355",
        "logo": "https://cdn-images.himalayas.app/dplkrcf29q3y8avmxelqemixhn98",
        "companyLogo": "https://cdn-images.himalayas.app/dplkrcf29q3y8avmxelqemixhn98",
        "image": "https://cdn-images.himalayas.app/dplkrcf29q3y8avmxelqemixhn98",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-12",
        "title": "Staff Engineer, Workday Technical Consultant (Integration)",
        "title_ar": "مهندس ومطور برمجيات (Staff Engineer, Workday Technical Consultant (Integration))",
        "company": "Nagarro",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "India",
        "location_ar": "India",
        "salary": "Competitive",
        "description": "REQUIREMENTS: • Total experience 6+ years \n Strong technical expertise in Workday integrations, including development, enhancement, and production support. • Hands-on experience with EIBs, including user template fill-in, mass uploads, and outbound integrations. • Experience with Core Connectors, Benefit Connectors, PECI, Workday Studio, and Document Transformation. • Strong knowledge of Workday Business Process configuration. • Hands-on experience with Workday Reports and BIRT development. • Knowledge of Workday Security and security profiles. • Experience supporting existing Workday functional and integration solutions. • Ability to upload and manage new Workday content, including questionnaires, onboarding content, and related materials. • Knowledge of Core HCM, Compensation, Payroll, Applicant Tracking System, Recruiting, Employee Management System, and Learning Management System is an advantage. \n • Workday certification is preferred. \n Strong troubleshooting, analytical, and problem-solving skills. • Excellent communication and stakeholder management skills, with the ability to collaborate effectively with business stakeholders, partners, and internal IT teams. • Strong understanding of IT Service Management (ITSM) processes. • Ability to work across multiple integration requirements and support different integration patterns. • Ability to work during US overlap hours (12 PM – 9 PM IST). \n RESPONSIBILITIES: \n Understand business requirements and translate them into effe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Nagarro. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Workday-integration",
            "Integration-development",
            "Itsm-consultant"
        ],
        "applyUrl": "https://himalayas.app/companies/nagarro/jobs/staff-engineer-workday-technical-consultant-integration",
        "logo": "https://cdn-images.himalayas.app/t850au6smjni0xg4l325idsg5ta4",
        "companyLogo": "https://cdn-images.himalayas.app/t850au6smjni0xg4l325idsg5ta4",
        "image": "https://cdn-images.himalayas.app/t850au6smjni0xg4l325idsg5ta4",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312262-13",
        "title": "Manager, Finance",
        "title_ar": "مدير وقائد فريق (Manager, Finance)",
        "company": "AbbVie",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$124,500 - $236,500 USD",
        "description": "This position will serve as a liaison between business finance users and the Business Technical Support community. The position’s primary focus will be on business systems and related processes across several Finance Functional Areas, Affiliates and Sites. The role is critical to ensure SAC applications incidents are triaged. The day-to-day primary responsibility of the position will be to serve as a subject matter expert (SME) ensuring smooth business system operations and coordination of activities within Headquarters (HQ) Business and Technical Support and FP&A for all aspects of the systems life cycle. Responsibilities \n Lead month end close systems process which includes ensuring timely data feeds, data validation and incident remediation across multiple reporting applications. Requires coordination with cross-functional subject matter experts in BPC, SAC as well as AA Commercial Financial Planning and Analysis teams. \n Primary focus will be to support AA Global HQ and US organization in Irvine as well as AA LATAM during key financial reporting cycle. Support as needed for AA International. \n Provide training and on-hands Financial Planning systems/template support to end-users. \n Support AA Finance as key liaison with Business and Technical Support Project Managers for SAC for testing and data validation with key system deployments. \n Assist in communication between Business and Technical Support leads and Areas/Affiliates/Sites including daily status meetings and incid",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة AbbVie. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Finance",
            "Pharmaceutical-finance"
        ],
        "applyUrl": "https://himalayas.app/companies/abbvie/jobs/manager-finance",
        "logo": "https://cdn-images.himalayas.app/kfge4z8cvd7atx3yyf2mdwi3ptl1",
        "companyLogo": "https://cdn-images.himalayas.app/kfge4z8cvd7atx3yyf2mdwi3ptl1",
        "image": "https://cdn-images.himalayas.app/kfge4z8cvd7atx3yyf2mdwi3ptl1",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-14",
        "title": "English-Chinese Bilingual Speaker - Voice Recording",
        "title_ar": "English-Chinese Bilingual Speaker - Voice Recording (برمجة وتكنولوجيا)",
        "company": "Toloka AI",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Contractor",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Brazil",
        "location_ar": "Brazil",
        "salary": "$5 - $5 USD",
        "description": "This is a project-based opportunity on an AI training platform. No fixed hours, no commitment beyond what fits your schedule. You talk, you get paid. About the Role We're looking for bilingual speakers to record short, casual voice clips where they naturally mix English with Chinese - the way they'd actually talk in real life. No script, no scenarios, just you talking about your day, your opinions, whatever comes naturally. Do you switch between English and Chinese mid-sentence without even thinking about it? Rant about your day, discuss your favorite show, think out loud with different languages - say it exactly how you'd say it to a friend. What if you could get paid just for recording it? Responsibilities: \n Record 1-2 minute voice clips responding to a prompt or reacting to a short video \n Speak naturally, switching between English and Chinese the way you normally would in everyday conversation \n Complete a few clips per recording session \n Requirements \n Language: Fully bilingual - fluent or native in both English and Chinese, and someone who naturally mixes the two when speaking \n Equipment: Any device works, including your phone - no studio or special equipment needed \n Recording environment: A quiet room with no background music, TV, traffic, or other people talking \n Audio quality: Clear voice, close to the mic, one speaker only, no echo. A headset or earbuds with a mic helps but isn't required \n Note: Quiet, clean audio matters most - background noise or unclear spe",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Toloka AI. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Voice-recording",
            "Bilingual-support",
            "Audio-annotation"
        ],
        "applyUrl": "https://himalayas.app/companies/toloka-ai/jobs/english-chinese-bilingual-speaker-voice-recording-9308051180",
        "logo": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "companyLogo": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "image": "https://cdn-images.himalayas.app/b60q3n0t2h9fldmvj89faxoyvym6",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-15",
        "title": "Vice President, Program Management Office",
        "title_ar": "Vice President, Program Management Office (برمجة وتكنولوجيا)",
        "company": "Rapid7",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$263,500 - $356,500 USD",
        "description": "Vice President, PMO Rapid7 is seeking a VP, PMO to lead the strategic alignment, program orchestration, and delivery velocity of our global product portfolio. This leader will embed high-efficiency agile operating models directly within our engineering squads, transforming our program management office into a technical execution engine. This role focuses on optimizing technical roadmap delivery, managing engineering capacity allocation, and accelerating the time-to-market for our enterprise cybersecurity solutions. About the Team The Program Management Office builds the scalable operational frameworks, portfolio tracking models, and cross-functional delivery infrastructure that guarantee the execution of Rapid7 ’s global strategic initiatives. This team drives measurable business impact by prioritizing high-value investments, optimizing resource dependencies, and ensuring reliable operational outcomes across the entire organization. About the Role Reporting directly to the Chief Product and Technology Officer, the VP, PMO, you will lead the engineering delivery lifecycle, product portfolio governance, and cross-functional execution alignment for our global product organization. Specifically, your focus will be to: \n Design the technical program management strategy to accelerate the software release lifecycle across multiple cloud-native product lines. \n Be the single source of truth for delivery timelines for the R&D organization \n Lead a strategic team of technical program m",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Rapid7. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Vp-program-management"
        ],
        "applyUrl": "https://himalayas.app/companies/rapid7/jobs/vice-president-program-management-office-3129429690",
        "logo": "https://cdn-images.himalayas.app/9z56i3u9foh14111z2mflr2n44fz",
        "companyLogo": "https://cdn-images.himalayas.app/9z56i3u9foh14111z2mflr2n44fz",
        "image": "https://cdn-images.himalayas.app/9z56i3u9foh14111z2mflr2n44fz",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-16",
        "title": "Business Development Manager – Mining and Aggregates (VFDs)",
        "title_ar": "مدير وقائد فريق (Business Development Manager – Mining and Aggregates (VFDs))",
        "company": "ABB",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$100,500 - $160,800 USD",
        "description": "At ABB , we help industries run leaner and cleaner—and every person here makes that happen. You’ll be empowered to lead, supported to grow, and proud of the impact we create together. Join us and help run what runs the world. This position reports to: Segment Director, Food & Beverage __ In this role you will be responsible for business development and new business growth for ABB Drives division with activities to include brand and product acceptance, coordination/partnership with Channel Sales, Channel Programs and our OEM Team, leading sub-segment strategy execution and defining go-to market approaches in Motion Drive Products in the United States. This role is supporting ABB ’s Motion Drive Products Division in New Berlin, WI. The selected candidate may be remote, residing in Wyoming, Utah, Idaho, Colorado, Arizona, Texas, Minnesota, Or Michigan with 70% travel across the United States. Your role and responsibilities: \n Generate brand and product acceptance of ABB Low Voltage Drives, PLC, and HMI products through AVL (authorized vendor lists) and FA (Frame agreements) at associated end-user Mining and Aggregates customers and production facilities. \n Close coordination with Channel Sales, Channel Program and OEM Team peers to create and support Mining and Aggregates industry programs to drive strategic engagement with aligned Channel Partners. \n Through a disciplined sales process, documenting customer stakeholders, buying behaviors (local authority vs. CAPEX/project appro",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة ABB. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Mining-sales",
            "Industrial-sales-manager",
            "Technical-sales"
        ],
        "applyUrl": "https://himalayas.app/companies/global-abb/jobs/business-development-manager-mining-and-aggregates-vfds",
        "logo": "https://logo.clearbit.com/abb.com",
        "companyLogo": "https://logo.clearbit.com/abb.com",
        "image": "https://logo.clearbit.com/abb.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-17",
        "title": "Associate Production Support Engineer, Tier I",
        "title_ar": "مهندس ومطور برمجيات (Associate Production Support Engineer, Tier I)",
        "company": "Redox",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "$70,000 - $80,000 USD",
        "description": "Redox is on a mission to accelerate healthcare’s transformation with useful data. Redox Engine, a flexible interoperability platform, connects and powers real-time healthcare data exchange. With just one connection, data can be orchestrated across a growing network of 12,000+ systems and organizations, including 100+ electronic health record systems (EHRs). Redox processes over 1.2 billion messages per month across our health tech vendor, provider, payer, EHR, and life sciences customers. \n Opportunity & Impact \n Redox is on a mission to accelerate healthcare's transformation with useful data. Redox accelerates the development and distribution of healthcare products with a full service integration platform to securely and efficiently exchange healthcare data. With just one connection, data can be transmitted across a growing network of 7,300+ provider organizations and 240+ healthcare products. Redox connections serve tens of millions of patient records per day, leveraging a single data standard compatible with more than 90 electronic health record systems. \n Tier I Support Engineers are the first line of technical support for Redox customers, resolving day to day connectivity, configuration, and messaging issues and monitoring production feeds. As Redox shifts toward a more self service support model, this role is central to that shift: you'll use your technical troubleshooting skills to diagnose issues quickly, and your communication skills to teach customers and technical ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Redox. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Tier-1-technical-support"
        ],
        "applyUrl": "https://himalayas.app/companies/redox-com/jobs/associate-production-support-engineer-tier-i",
        "logo": "https://logo.clearbit.com/redox.com",
        "companyLogo": "https://logo.clearbit.com/redox.com",
        "image": "https://logo.clearbit.com/redox.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-18",
        "title": "Contracting Associate- FMO Health Insurance",
        "title_ar": "Contracting Associate- FMO Health Insurance (مالية ومحاسبة)",
        "company": "Alliant Insurance Services, Inc.",
        "category": "finance",
        "category_ar": "مالية ومحاسبة",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "Alliant Insurance Services is hiring a Business Development Rep out of our ONeill Marketing Office O'Neill is America's #1 FMO We help agents grow their book with ACA, Off-Market Major Medical, and Ancillary products - backed by streamlined onboarding, real-time support, and top-tier tech. SUMMARY Responsible for day-to-day workflow processing including contract review, data entry and coordination of processes; Serves as a liaison with agents and carriers and as the coordination center for incomplete contracts. ESSENTIAL DUTIES AND RESPONSIBILITIES Processes contracts through the Zoho CRM system including posting notes to the system, sending emails with outstanding items for follow up and processing. Reaches out to agents and uplines to collect outstanding/incomplete data and reconnects the original contract with the incomplete items so the contract can be returned to production cycle. Reviews and explains carrier communications to agents. Processes state appointments, product additions, commission level and hierarchy changes. Assists Contracting Associate I and Contracting Associate II positions with processing new contracts when necessary. Communicates with internal management and external carrier management. Maintains working knowledge of all carriers being processed within the team. Acts on behalf of the Contracting Manager during absences. Identifies global issues and communicates ideas for resolution. Establishes and maintains a high-level overview of the organization’s",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Alliant Insurance Services, Inc.. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Insurance-contracts",
            "Contract-administration",
            "Health-insurance",
            "Contract-specialist"
        ],
        "applyUrl": "https://himalayas.app/companies/alliant-insurance-services-inc/jobs/contracting-associate-fmo-health-insurance-4762544366",
        "logo": "https://logo.clearbit.com/alliantinsuranceservicesinc.com",
        "companyLogo": "https://logo.clearbit.com/alliantinsuranceservicesinc.com",
        "image": "https://logo.clearbit.com/alliantinsuranceservicesinc.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-19",
        "title": "Content Creator & Product Education Intern",
        "title_ar": "كاتب ومحرر محتوى (Content Creator & Product Education Intern)",
        "company": "Bybit",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Intern",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "American Samoa, Australia, Bangladesh",
        "location_ar": "American Samoa, Australia, Bangladesh",
        "salary": "Competitive",
        "description": "About Us \n Established in 2018, Bybit is one of the world’s leading cryptocurrency exchanges and digital financial platforms, serving over 80 million users across more than 200 countries and regions. Powered by world-class technology and a user-first mindset, Bybit delivers a seamless ecosystem across trading, payments, wealth management, custody, institutional services, and Web3 — connecting users to the future of digital finance. \n Our core values define how we build. We listen, care and improve to create products and experiences that put users first. Backed by a global team of ambitious builders, problem-solvers, and innovators, we foster a high-performance and fast-moving environment where talent is empowered to drive real impact at the global scale. Supported by 24/7 multilingual customer service and a strong commitment to innovation, we are shaping the future of finance through technology, collaboration, and bold execution. \n Today, Bybit is recognized as one of the most trusted and transparent platforms in the digital asset industry, continuing to expand its global presence while building the infrastructure for the next generation of financial services. \n ole Overview \n We are looking for a Web3 Content Creator & Product Education Specialist to produce educational articles and guides, script and present videos, and create supporting course materials that help users understand, explore and activate products across the Bybit ecosystem. \n This is a hands-on content execut",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Bybit. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Content-creator",
            "Crypto-content-creator",
            "Product-education"
        ],
        "applyUrl": "https://himalayas.app/companies/bybit/jobs/content-creator-product-education-intern",
        "logo": "https://logo.clearbit.com/bybit.com",
        "companyLogo": "https://logo.clearbit.com/bybit.com",
        "image": "https://logo.clearbit.com/bybit.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-20",
        "title": "Director of Partner Success",
        "title_ar": "Director of Partner Success (تصميم وإبداع)",
        "company": "BOLD Integrated Payments",
        "category": "design",
        "category_ar": "تصميم وإبداع",
        "country_code": "us_ca",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "United States",
        "location_ar": "الولايات المتحدة وكندا",
        "salary": "Competitive",
        "description": "The Director of Partner Success leads VersiTech’s Partner Success organization, driving revenue growth and portfolio expansion across our Bold and Tonic client base through the strategic leadership and development of our Partner Success Managers. Company Overview At VersiTech, we go beyond the traditional boundaries of a tech company to provide payment and point-of-sale technologies that help businesses increase their profitability, run efficiently, and grow with confidence. We are innovators at heart, problem-solvers in action, and growth partners in spirit. In every solution we create and every service we offer, our ethos is clear: technology should be advanced, accessible, and easy to use. We have a passion for delivering technology-focused products and services that are built on speed, affordability, and reliability so that every business we serve enjoys a consistent experience with a trusted ally. Our two product lines, BOLD Integrated Payments and Tonic POS Software can be deployed together for a unified end-to-end experience or used independently for maximum flexibility. Listening first, building lasting relationships, and delivering measurable outcomes for our partners and merchants are central to how we operate as an organization. Who We Are We operate under a rapidly growing and widely accepted business philosophy called “EOS” (Entrepreneurial Operating System). In learning to utilize EOS, you will have the ability to drive growth and be an empowered decision maker,",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة BOLD Integrated Payments. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Channel-partnerships",
            "Sales-management"
        ],
        "applyUrl": "https://himalayas.app/companies/bold-integrated-payments/jobs/director-of-partner-success",
        "logo": "https://cdn-images.himalayas.app/33mdtxij1vezgriliwlmvead2msy",
        "companyLogo": "https://cdn-images.himalayas.app/33mdtxij1vezgriliwlmvead2msy",
        "image": "https://cdn-images.himalayas.app/33mdtxij1vezgriliwlmvead2msy",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Himalayas"
    },
    {
        "id": "job-1789312263-21",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-22",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-23",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-24",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-25",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-26",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-27",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-28",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-29",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-30",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-31",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-32",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-33",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-34",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-35",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-36",
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
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Remotive"
    },
    {
        "id": "job-1789312263-37",
        "title": "Account Lead Influencer Marketing & Brand Strategy (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Account Lead Influencer Marketing & Brand Strategy (m/w/d))",
        "company": "Ykone GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "Du arbeitest im Influencer Marketing und denkst manchmal: Da müsste eigentlich noch mehr gehen? Mehr Strategie. Mehr Verantwortung. Größere Marken. Größere Ideen. Ein eigenes Team. Und vor allem mehr Einfluss darauf, was am Ende wirklich passiert und was im besten Fall die Branche prägt? \n Then keep reading. 👀 \n Ykone zählt zu den führenden Influencer Marketing Agenturen weltweit. Seit über 13 Jahren gestalten wir die Branche mit und arbeiten heute mit internationalen Top Brands aus Beauty, Fashion, Luxury, Lifestyle und Tech. Von München über Paris, Mailand und London bis Dubai verbinden unsere Teams lokale Expertise mit einem globalen Netzwerk. \n In Deutschland sind wir gerade in einer besonders spannenden Phase: Wir wachsen, gewinnen große internationale Etats und entwickeln gleichzeitig weiter, wie Influencer Marketing in Zukunft funktioniert. Strategischer, kreativer, technologischer und skalierbarer. \n Das macht Ykone zu einem Ort für Menschen, die mehr wollen als den nächsten Job. Die Verantwortung übernehmen, große Ideen vorantreiben, andere mitnehmen und wirklich Einfluss darauf haben wollen, was wir als Agentur und für unsere Kunden aufbauen. \n Aufgaben \n Wir suchen jemanden, der übernimmt . Als Account Lead Influencer Marketing & Brand Strategy verantwortest du mehrere unserer wichtigsten internationalen Kunden aus Beauty, Fashion, Lifestyle und Tech. \n Du entwickelst ihre Influencer Strategie, berätst Marketing Leads auf Senior Level, führst große Pitches, entwick",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Ykone GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/ykone-gmbh/account-lead-influencer-marketing-brand-strategy-munich-492454",
        "logo": "https://logo.clearbit.com/ykonegmbh.com",
        "companyLogo": "https://logo.clearbit.com/ykonegmbh.com",
        "image": "https://logo.clearbit.com/ykonegmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-38",
        "title": "Founding Account Executive, DACH",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Founding Account Executive, DACH)",
        "company": "Job Application for Forward Deployed Engineer, DACH at Telnyx",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "About Telnyx \n Telnyx is an industry leader that's not just imagining the future of global connectivity—we're building it. From architecting and amplifying the reach of a private, global, multi-cloud IP network , to bringing hyperlocal edge technology right to your fingertips through intuitive APIs, we're shaping a new era of seamless interconnection between people, devices, and applications. \n We're driven by a desire to transform and modernize what's antiquated, automate the manual, and solve real-world problems through innovative connectivity solutions. As a testament to our success, we're proud to stand as a financially stable and profitable company. Our robust profitability allows us not only to invest in pioneering technologies but also to foster an environment of continuous learning and growth for our team. \n Our collective vision is a world where borderless connectivity fuels limitless innovation. By joining us, you can be part of laying the foundations for this interconnected future. We're currently seeking passionate individuals who are excited about the opportunity to contribute to an industry-shaping company while growing their own skills and careers. \n The Role We're building local Enterprise Sales Pods across global markets — one AE and one Forward Deployed Engineer (FDE), working together to build a Telnyx enterprise business in the DACH region. This is not a remote overlay on an existing territory. You will own a named-account list of 30–40 enterprise accounts",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Job Application for Forward Deployed Engineer, DACH at Telnyx. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/job-application-for-forward-deployed-engineer-dach-at-telnyx/founding-account-executive-dach-munich-302728",
        "logo": "https://logo.clearbit.com/jobapplicationforforwarddeployedengineerdachattelnyx.com",
        "companyLogo": "https://logo.clearbit.com/jobapplicationforforwarddeployedengineerdachattelnyx.com",
        "image": "https://logo.clearbit.com/jobapplicationforforwarddeployedengineerdachattelnyx.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-39",
        "title": "Forward Deployed Engineer, DACH",
        "title_ar": "مهندس ومطور برمجيات (Forward Deployed Engineer, DACH)",
        "company": "Job Application for Forward Deployed Engineer, DACH at Telnyx",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "About Telnyx \n Telnyx is an industry leader that's not just imagining the future of global connectivity—we're building it. From architecting and amplifying the reach of a private, global, multi-cloud IP network , to bringing hyperlocal edge technology right to your fingertips through intuitive APIs, we're shaping a new era of seamless interconnection between people, devices, and applications. \n We're driven by a desire to transform and modernize what's antiquated, automate the manual, and solve real-world problems through innovative connectivity solutions. As a testament to our success, we're proud to stand as a financially stable and profitable company. Our robust profitability allows us not only to invest in pioneering technologies but also to foster an environment of continuous learning and growth for our team. \n Our collective vision is a world where borderless connectivity fuels limitless innovation. By joining us, you can be part of laying the foundations for this interconnected future. We're currently seeking passionate individuals who are excited about the opportunity to contribute to an industry-shaping company while growing their own skills and careers. \n The Role We're building a local Enterprise Sales Pod in Munich — one AE and one Forward Deployed Engineer (FDE), working together to build a Telnyx enterprise business in your market. You'll embed directly with enterprise customers to architect and ship production systems on Telnyx's global network — voice, messagi",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Job Application for Forward Deployed Engineer, DACH at Telnyx. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/job-application-for-forward-deployed-engineer-dach-at-telnyx/forward-deployed-engineer-dach-munich-178293",
        "logo": "https://logo.clearbit.com/jobapplicationforforwarddeployedengineerdachattelnyx.com",
        "companyLogo": "https://logo.clearbit.com/jobapplicationforforwarddeployedengineerdachattelnyx.com",
        "image": "https://logo.clearbit.com/jobapplicationforforwarddeployedengineerdachattelnyx.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-40",
        "title": "Test Engineer",
        "title_ar": "مهندس ومطور برمجيات (Test Engineer)",
        "company": "Process Engineer Cleaning & Coating /Day Shift - Greenhouse",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Aachen, North Rhine-Westphalia",
        "location_ar": "Aachen, North Rhine-Westphalia",
        "salary": "Competitive",
        "description": "Astera Labs (NASDAQ: ALAB) provides rack-scale AI infrastructure through purpose-built connectivity solutions. By collaborating with hyperscalers and ecosystem partners, Astera Labs enables organizations to unlock the full potential of modern AI. Astera Labs’ Intelligent Connectivity Platform integrates CXL®, Ethernet, NVLink, PCIe®, and UALink™ semiconductor-based technologies with the company’s COSMOS software suite to unify diverse components into cohesive, flexible systems that deliver end-to-end scale-up, and scale-out connectivity. The company’s custom connectivity solutions business complements its standards-based portfolio, enabling customers to deploy tailored architectures to meet their unique infrastructure requirements. Discover more at www.asteralabs.com . Job Title: Test Engineer \n Location : Aachen, Germany \n Job Type: Full-time \n About the Role: \n We are looking for a Test Engineer to join our high-tech assembly and test production facility. In this role, you will be responsible for validating that every device meets our rigorous performance and reliability standards before it reaches the customer. You will work closely with design and production teams to implement test solutions, troubleshoot failures, and optimize test coverage for high-volume manufacturing. \n Key Responsibilities: \n Test Execution & Monitoring: Execute and monitor production test programs on Automated and Semi Auto Test Equipment to identify manufacturing defects. \n Troubleshooting & Debugg",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Process Engineer Cleaning & Coating /Day Shift - Greenhouse. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/process-engineer-cleaning-coating-day-shift-greenhouse/test-engineer-aachen-north-rhine-westphalia-173430",
        "logo": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "companyLogo": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "image": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-41",
        "title": "Senior Sourcing Specialist – Germany Operations & Manufacturing",
        "title_ar": "Senior Sourcing Specialist – Germany Operations & Manufacturing (أخرى)",
        "company": "Process Engineer Cleaning & Coating /Day Shift - Greenhouse",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "remote",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Aachen, North Rhine-Westphalia",
        "location_ar": "Aachen, North Rhine-Westphalia",
        "salary": "Competitive",
        "description": "Astera Labs (NASDAQ: ALAB) provides rack-scale AI infrastructure through purpose-built connectivity solutions. By collaborating with hyperscalers and ecosystem partners, Astera Labs enables organizations to unlock the full potential of modern AI. Astera Labs’ Intelligent Connectivity Platform integrates CXL®, Ethernet, NVLink, PCIe®, and UALink™ semiconductor-based technologies with the company’s COSMOS software suite to unify diverse components into cohesive, flexible systems that deliver end-to-end scale-up, and scale-out connectivity. The company’s custom connectivity solutions business complements its standards-based portfolio, enabling customers to deploy tailored architectures to meet their unique infrastructure requirements. Discover more at www.asteralabs.com . About Astera Labs \n Astera Labs (NASDAQ: ALAB) is a pioneering fabless semiconductor company headquartered in Silicon Valley, driving the evolution of AI and cloud infrastructure through purpose-built connectivity solutions. As a leader in rack-scale architecture, Astera Labs is enabling the shift to AI Infrastructure 2.0, where compute is optimized at the rack level to support next-generation workloads. \n Our portfolio spans high-performance silicon, software, and system-level solutions that address critical bottlenecks in data movement across compute, memory, and networking domains. We are committed to open standards, continuous innovation, and building a collaborative environment to solve complex challenges ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Process Engineer Cleaning & Coating /Day Shift - Greenhouse. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Remote Work",
            "Collaboration",
            "Problem Solving",
            "Domain Expertise"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/process-engineer-cleaning-coating-day-shift-greenhouse/senior-sourcing-specialist-germany-operations-manufacturing-aachen-north-rhine-westphalia-97307",
        "logo": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "companyLogo": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "image": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-42",
        "title": "Senior Principal ASIC Design Engineer",
        "title_ar": "مهندس ومطور برمجيات (Senior Principal ASIC Design Engineer)",
        "company": "Process Engineer Cleaning & Coating /Day Shift - Greenhouse",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": "Full-time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Remote / Europe",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Astera Labs (NASDAQ: ALAB) provides rack-scale AI infrastructure through purpose-built connectivity solutions. By collaborating with hyperscalers and ecosystem partners, Astera Labs enables organizations to unlock the full potential of modern AI. Astera Labs’ Intelligent Connectivity Platform integrates CXL®, Ethernet, NVLink, PCIe®, and UALink™ semiconductor-based technologies with the company’s COSMOS software suite to unify diverse components into cohesive, flexible systems that deliver end-to-end scale-up, and scale-out connectivity. The company’s custom connectivity solutions business complements its standards-based portfolio, enabling customers to deploy tailored architectures to meet their unique infrastructure requirements. Discover more at www.asteralabs.com . Senior Principal ASIC Design Engineer \n Location: Germany (on-site) \n Role Overview \n Astera Labs is building purpose-built silicon for rack-scale AI infrastructure. As a Distinguished Engineer, you will be a senior technical leader driving ASIC design for next-generation Ethernet and Scale-Up (ESUN) connectivity products. \n You will set technical direction across the full ASIC design flow, spanning high-speed Ethernet, UALink, UCIe, and PCIe Gen 6/7. You will solve complex scale-up networking challenges, mentor senior engineers, and turn ambitious product goals into robust, manufacturable silicon. \n Technical Leadership & Architecture \n Define and drive ASIC architecture for Ethernet/ESUN connectivity products",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Process Engineer Cleaning & Coating /Day Shift - Greenhouse. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Design engineering cce2"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/process-engineer-cleaning-coating-day-shift-greenhouse/senior-principal-asic-design-engineer-172376",
        "logo": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "companyLogo": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "image": "https://logo.clearbit.com/processengineercleaningcoatingdayshiftgreenhouse.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-43",
        "title": "Head of Marketing",
        "title_ar": "أخصائي تسويق ونمو (Head of Marketing)",
        "company": "Almetra",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "remote",
        "type": "Full Time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Munich",
        "location_ar": "Munich",
        "salary": "Competitive",
        "description": "About the Role We’re looking for a Head of Marketing to build Almetra's marketing function from the ground up. This is a full-stack ownership role — from defining our positioning and narrative to building the initial demand engine and setting the foundation for future scale. You will work directly with the founders and GTM leadership to shape how the market understands Deltia, create repeatable demand motions, and build the early marketing team over time. What you’ll do Own positioning and messaging across all customer-facing surfaces Build and execute the go-to-market strategy across digital, content, events and partnerships Design and run demand generation / ABM programs that convert into revenue Create high-leverage content, case studies, and thought leadership with founders and customers Establish marketing metrics, reporting cadence and operational rhythm Gradually build and lead the marketing team as the function scales You are 5–10 years in B2B SaaS or deep-tech marketing, ideally with enterprise or industrial customer experience Full-stack: strong at both narrative/positioning and performance/demand execution Experienced in building marketing foundations from zero, not just optimizing an existing machine Comfortable working directly with founders and sales to rapidly test and iterate messaging Capable of transitioning from hands-on execution to team leadership as we scale Why this role matters You will define how an emerging industrial AI category is perceived — and l",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Almetra. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Commercial"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/almetra/head-of-marketing-munich-119980",
        "logo": "https://logo.clearbit.com/almetra.com",
        "companyLogo": "https://logo.clearbit.com/almetra.com",
        "image": "https://logo.clearbit.com/almetra.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-44",
        "title": "Qualitätssicherungsingenieur (all genders)",
        "title_ar": "Qualitätssicherungsingenieur (all genders) (أخرى)",
        "company": "TECOSIM GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Experienced, fulltime permanent",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Lampoldshausen, Baden-Württemberg, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Du stellst dich Herausforderungen wie der Übernahme von Qualitätssicherungsaufgaben mit Schwerpunkt auf Komponenten für chemische und elektrische Antriebssysteme der Überprüfung der Übereinstimmung von Produkt- und Qualitätssicherungsanforderungen des Kunden mit internen Qualitätsstandards der Sicherstellung der korrekten Erfüllung von Produkt- und Qualitätssicherungsanforderungen unter Einhaltung der geltenden Unternehmensprozesse im Projektrahmen der Überwachung und Kontrolle sämtlicher Produkt- und Qualitätssicherungsaktivitäten einschließlich der Koordination aller erforderlichen Fachbereiche der aktiven Gestaltung der Kundenschnittstelle in Bezug auf Produkt- und Qualitätssicherungsaspekte der Erstellung und Bereitstellung der geforderten Produktsicherungsdokumentation, der Erstellung von Datenpaketen sowie der Überprüfung und Attestierung der Produktkonformität im Projekt- und Programmumfeld unter Berücksichtigung gesetzlicher und vertraglicher Anforderungen der Durchführung wichtiger Meilensteinmeetings (MIPs, KIPs, TRRs, TRBs, DRBs etc.) der Konsolidierung des Risikoregisters sowie der Unterstützung bei der Umsetzung von Maßnahmen zur Risikominderung der Koordination und Bearbeitung von Störungen, Anomalien und Non-Conformances der Unterstützung bei der Erstellung und Verwaltung von RFDs und RFWs der Koordination, Durchführung und Dokumentation von Lessons Learned innerhalb von Projekten sowie der Einführung und Umsetzung von Präventivmaßnahmen in Folgeprojekten der D",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة TECOSIM GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Ariane group"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/tecosim-gmbh/qualitatssicherungsingenieur-all-genders-lampoldshausen-313235",
        "logo": "https://logo.clearbit.com/tecosimgmbh.com",
        "companyLogo": "https://logo.clearbit.com/tecosimgmbh.com",
        "image": "https://logo.clearbit.com/tecosimgmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-45",
        "title": "Werkstudent Social Media | Marketing (m/w/d)",
        "title_ar": "أخصائي تسويق ونمو (Werkstudent Social Media | Marketing (m/w/d))",
        "company": "WerraEnergie GmbH",
        "category": "marketing",
        "category_ar": "تسويق ومبيعات",
        "country_code": "eu_uk",
        "type": "Student college, parttime fixed term",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bad Salzungen, Thüringen, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Find Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة WerraEnergie GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Organisation"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/werraenergie-gmbh/werkstudent-social-media-marketing-bad-salzungen-338190",
        "logo": "https://logo.clearbit.com/werraenergiegmbh.com",
        "companyLogo": "https://logo.clearbit.com/werraenergiegmbh.com",
        "image": "https://logo.clearbit.com/werraenergiegmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-46",
        "title": "Werkstudent (m/w/d)",
        "title_ar": "Werkstudent (m/w/d) (أخرى)",
        "company": "WerraEnergie GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Student college, parttime fixed term",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bad Salzungen, Thüringen, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Find Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة WerraEnergie GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Werraenergie gmbh"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/werraenergie-gmbh/werkstudent-bad-salzungen-464502",
        "logo": "https://logo.clearbit.com/werraenergiegmbh.com",
        "companyLogo": "https://logo.clearbit.com/werraenergiegmbh.com",
        "image": "https://logo.clearbit.com/werraenergiegmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-47",
        "title": "Werkstudent Elektrotechnik / Energietechnik (m/w/d)",
        "title_ar": "Werkstudent Elektrotechnik / Energietechnik (m/w/d) (أخرى)",
        "company": "WerraEnergie GmbH",
        "category": "other",
        "category_ar": "أخرى",
        "country_code": "eu_uk",
        "type": "Student college, parttime fixed term",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Bad Salzungen, Thüringen, Deutschland",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "Find more English Speaking Jobs in Germany on Arbeitnow",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة WerraEnergie GmbH. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Werraenergiedienste gmbh"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/werraenergie-gmbh/werkstudent-elektrotechnik-energietechnik-bad-salzungen-267456",
        "logo": "https://logo.clearbit.com/werraenergiegmbh.com",
        "companyLogo": "https://logo.clearbit.com/werraenergiegmbh.com",
        "image": "https://logo.clearbit.com/werraenergiegmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-48",
        "title": "New Business Account Executive (DACH market)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (New Business Account Executive (DACH market))",
        "company": "Vivid",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Germany",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About The Role Vivid Money is redefining how modern corporates, holding structures, and financial institutions manage and optimize their capital. From institutional-grade Treasury products (high-yield Interest Accounts, Money Market Funds, and ETFs) to multi-currency infrastructure and FX solutions, we provide the financial architecture that traditional banks make too slow and expensive. We are expanding our institutional footprint in Germany. We aren’t looking for a standard software sales rep; we are looking for a New Business Account Executive who understands the fabric of the German financial ecosystem. You will be employee number one on the ground, tasked with unlocking high-value segments: PE/VC funds, holding companies (Soparfis), family offices, and corporate service providers. If you have the network to navigate corporate Germany, understand structured finance/treasury needs, and want the autonomy to build a market from scratch, this role is for you. Your Mission Originate Institutional Pipeline : Identify and engage decision-makers across Germanys unique B2B landscape, focusing on PE/VC funds, corporate holding structures, asset managers, and corporates. Leverage Channel Partnerships : Build strategic relationships with local multipliers—accountants, tax advisors, law firms—who manage hundreds of entities requiring modern treasury setups. Navigate Complex Sales Cycles : Run the end-to-end commercial cycle for high-value accounts, from sophisticated discovery and str",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Vivid. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Outbound"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/vivid/new-business-account-executive-dach-market-germany-98297",
        "logo": "https://logo.clearbit.com/vivid.com",
        "companyLogo": "https://logo.clearbit.com/vivid.com",
        "image": "https://logo.clearbit.com/vivid.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-49",
        "title": "Founding SDR (DACH market)",
        "title_ar": "Founding SDR (DACH market) (المبيعات والنمو)",
        "company": "Vivid",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Berlin",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About The Role Vivid Money is redefining how modern businesses, growing SMEs, and financial institutions manage and optimize their capital. From high-yield Interest Accounts and multi-currency infrastructure to treasury tools and team cards, we provide the modern financial platform that traditional banks make too slow and expensive. We are expanding our business presence across Germany. We aren’t looking for an SDR to just follow a pre-written playbook; we are looking for our Founding SDR for the DACH market. Working directly alongside our Founding Account Executive, you will be employee number one on the SDR side, responsible for building the outbound engine from scratch. Your core focus will be opening doors with SMB decision-makers (CEOs, CFOs, Finance Directors), while strategically mapping and testing outreach to adjacent personas like holding structures, PE/VC portfolio leads, and family offices. If you want the autonomy of a founding team member, want to write the prospecting playbook, and want to establish the top-of-funnel blueprint for Vivid in Germany, this role is for you. Your Mission Build the Outbound Engine: Architect, build, and test our cold outreach sequences across phone, email, and LinkedIn targeting SMB decision-makers across Germany. Map & Test New Personas: Experiment with outreach strategies for secondary personas, including holding companies, VC/PE portfolio managers, and corporate service providers, to help define our expanded ICP. Generate High-Vol",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Vivid. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales",
            "Sdr"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/vivid/founding-sdr-dach-market-berlin-82894",
        "logo": "https://logo.clearbit.com/vivid.com",
        "companyLogo": "https://logo.clearbit.com/vivid.com",
        "image": "https://logo.clearbit.com/vivid.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-50",
        "title": "Senior Accountant / Bilanzbuchhalter:in (m/w/d) – HGB & IFRS",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Senior Accountant / Bilanzbuchhalter:in (m/w/d) – HGB & IFRS)",
        "company": "Cuculus Gmbh",
        "category": "hr",
        "category_ar": "موارد بشرية وإدارة",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Leipzig",
        "location_ar": "Leipzig",
        "salary": "Competitive",
        "description": "Gestalte den Versorgungsmarkt der Zukunft mit uns! Festanstellung / Vollzeit / Erfurt oder Leipzig, Hybrid / Start: ASAP Du möchtest Abschlüsse nicht nur erstellen, sondern Accounting-Prozesse in einem internationalen Softwareunternehmen aktiv mitgestalten? Als Senior Accountant / Bilanzbuchhalter:in (m/w/d) übernimmst du Verantwortung für unsere Finanzprozesse und sorgst dafür, dass unsere Abschlüsse zuverlässig, transparent und aussagekräftig sind. Du arbeitest direkt mit unserem Director Finance & Legal zusammen und entwickelst unsere Prozesse Schritt für Schritt weiter. Cuculus entwickelt Softwarelösungen für Energieversorger weltweit. Dich erwartet ein internationales Umfeld mit kurzen Entscheidungswegen, viel Eigenverantwortung – und der Möglichkeit, Dinge wirklich voranzubringen. Deine Aufgaben Abschlüsse: Du erstellst eigenständig Monats-, Quartals- und Jahresabschlüsse nach HGB und IFRS – dabei stellst du die Qualität und Vollständigkeit unserer Finanzdaten sicher. Bewertungen & Abgrenzungen: Du bewertest Rückstellungen und Vorräte und stellst periodengerechte Abgrenzungen sicher. Steuern: Du bereitest Steuererklärungen vor, betreust Umsatzsteuer-Voranmeldungen und begleitest Betriebsprüfungen. Kontenabstimmung & Audits: Du stimmst Haupt- und Nebenbücher ab und arbeitest eng mit internen und externen Auditor:innen zusammen. Laufende Buchhaltung: Du verantwortest die laufende Buchhaltung mit und sorgst für die korrekte Erfassung, Prüfung und Abstimmung der Geschäftsvo",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Cuculus Gmbh. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Bilanzbuchhalter",
            "Accountant",
            "Senioraccountant",
            "Hgb"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/cuculus-gmbh/senior-accountant-bilanzbuchhalterin-hgb-ifrs-leipzig-277300",
        "logo": "https://logo.clearbit.com/cuculusgmbh.com",
        "companyLogo": "https://logo.clearbit.com/cuculusgmbh.com",
        "image": "https://logo.clearbit.com/cuculusgmbh.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-51",
        "title": "Senior GenAI Solution Engineer (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Senior GenAI Solution Engineer (all genders))",
        "company": "Eraneos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, München, Düsseldorf, remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "What you can expect from us We are a technical, implementation-oriented spin-off of a global management consultancy. Our clients are primarily DAX and Fortune Global 500 companies, which we advise on issues in the areas of analytics, big data and machine learning. Within the group, we take on the development of individual and data-driven solutions in order to transform our clients into AI-powered companies. We offer an international working environment with agile teams and creative startup methods as well as above-average remuneration and numerous additional benefits. With our offices in Hamburg, Munich and Düsseldorf and our hub locations in all other major German cities (Berlin, Frankfurt and Stuttgart), we ensure that all colleagues are integrated into our team of experts across Germany. Your role as a Senior GenAI Solution Engineer: End-to-End Development: You drive AI solutions across the full lifecycle - from rapid prototyping and proof-of-concept to deployment in scalable, highly available production environments. AI Services Engineering: You build robust backend services in Python that seamlessly integrate state-of-the-art LLMs and perform reliably under production load. Autonomous Agent Architecture: You design and implement intelligent agent systems that automate real-world workflows through tool calling and memory management, operating safely within defined guardrails. Agentic SDLC: You integrate AI agents into the development lifecycle - from AI-assisted coding an",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eraneos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data engineer",
            "Machine learning",
            "Software development",
            "Python"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eraneos/remote-senior-genai-solution-engineer-all-genders-440579",
        "logo": "https://logo.clearbit.com/eraneos.com",
        "companyLogo": "https://logo.clearbit.com/eraneos.com",
        "image": "https://logo.clearbit.com/eraneos.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-52",
        "title": "Management Consultant Enterprise Architecture (all genders)",
        "title_ar": "Management Consultant Enterprise Architecture (all genders) (برمجة وتكنولوجيا)",
        "company": "Eraneos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, München, Düsseldorf, remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "What you can expect from us As part of our Sourcing & IT Advisory team, you will help clients shape and deliver complex business and IT transformations across industries. Our tasks focus on complex transformation projects: Enterprise Architecture & Strategy: Define enterprise architecture strategies, governance models, target architectures, and roadmaps aligned with business objectives and value streams Business & Application Architecture: Design business capabilities, processes, application portfolios, and platform landscapes to enable scalable digital operating models Data & Integration Architecture: Develop modern information, data, API-first, integration, and event-driven architectures that ensure interoperability and business value Legacy Modernization & Technical Debt: Lead the transition from legacy and monolithic environments to cloud-native, modular, microservices-based architectures. Help clients to harmonize their diverse technology landscapes, work on their technical debt, and guide their IT migrations Technology Transformation: Design multi and hybrid cloud environments and new platforms reflecting requirements such as cloud migration and cloud exit options, business process resilience, open-source solutions, maintainability, and DevOps organizations and processes AI Architecture & Innovation: Drive AI readiness, define architectures for AI-enabled and agentic systems, and champion the effective use of AI tools to accelerate architecture, delivery, and decision-m",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eraneos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting",
            "It",
            "Enterprise architecture",
            "Ai architecture"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eraneos/remote-management-consultant-enterprise-architecture-all-genders-154966",
        "logo": "https://logo.clearbit.com/eraneos.com",
        "companyLogo": "https://logo.clearbit.com/eraneos.com",
        "image": "https://logo.clearbit.com/eraneos.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-53",
        "title": "Forward Deployed Engineer (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Forward Deployed Engineer (all genders))",
        "company": "Eraneos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, München, Düsseldorf, remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "What you can expect from us Eraneos supports AI initiatives from strategy all the way through to production. In most AI projects, there's a gap between the strategy and what actually ends up running in production and creating real value. That's exactly the gap we close. For us, the work doesn't stop at the concept stage, and it doesn't start only once the spec is finished: an initiative stays in one pair of hands from the first idea to the running system. We work in a results-driven way rather than following the classic consulting model. Our clients are primarily DAX and Fortune Global 500 companies. You help decide what gets built, not just how. We always work with the latest models and tools to succeed with the client. There's no prescribed stack — instead, we pick the right tool for each task. You design technical solutions from the first idea through to production deployment, working closely with decision-makers on both the client and management side. What to expect: You own the architecture and technical implementation of the AI solution end to end — from strategy through to production You build agentic systems, RAG pipelines, and LLM integrations in real enterprise environments Agentic coding tools are your everyday toolkit: you use them to develop solutions, speed up reviews, and build deployment pipelines You're involved from the very first idea, not just once the spec is finished — growing deeper into the strategic and business side along the way You stay accountable",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eraneos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Consulting",
            "Genai",
            "Solution engineering",
            "Strategie"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eraneos/remote-forward-deployed-engineer-all-genders-99442",
        "logo": "https://logo.clearbit.com/eraneos.com",
        "companyLogo": "https://logo.clearbit.com/eraneos.com",
        "image": "https://logo.clearbit.com/eraneos.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-54",
        "title": "Data Engineer (all genders)",
        "title_ar": "مهندس ومطور برمجيات (Data Engineer (all genders))",
        "company": "Eraneos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, München, Düsseldorf, remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "What you can expect from us We’re a high‑energy cloud- and data engineering team looking for like-minded, motivated tech builders. We are driven by ownership and business outcomes. As the analytics unit within a global management consultancy, we turn data-driven strategies into production systems. Our clients are DAX and Fortune Global 500 leaders who trust us for our expertise across data platforms, big data and cloud engineering. You’ll join an international environment with agile squads and a boutique spirit with room to experiment and grow, paired with above‑market compensation and an attractive benefits package. What you’ll do as part of our cloud- and data engineering team: Take ownership for projects end to end: From scoping to stakeholder alignment and the delivery of measurable outcomes Design data architectures for batch and streaming workloads, both at small and big data scales Provision and manage the underlying cloud infrastructure to support those architectures on providers such as AWS, Azure or GCP Building Python ETL/ELT pipelines, orchestrated with Airflow, Dagster , or Prefect. Work with data lake technologies and optimize (OLAP) data ware-/ lakehouses Model and store data across SQL and NoSQL databases, as well as optimizing performance and costs Create web APIs with popular Python frameworks (e.g., FastAPI and Flask) and describe them using standards like OpenAPI /Swagger Automate deployments using Infrastructure-as-Code and container technologies such as ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eraneos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data engineering",
            "Cloud engineering",
            "Snowflake",
            "Databricks"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eraneos/remote-data-engineer-all-genders-12735",
        "logo": "https://logo.clearbit.com/eraneos.com",
        "companyLogo": "https://logo.clearbit.com/eraneos.com",
        "image": "https://logo.clearbit.com/eraneos.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-55",
        "title": "(Senior) Manager Business Value Chain (all genders)",
        "title_ar": "مدير وقائد فريق ((Senior) Manager Business Value Chain (all genders))",
        "company": "Eraneos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, München, Düsseldorf, remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "What you can expect from us At Eraneos Germany, we partner with organizations to master complex challenges and shape a sustainable, digital future. As a (Senior) Manager in our Production & Operations team, you will be responsible for driving business growth, expanding strategic client relationships, and leading high-impact transformation engagements. You will work closely with senior executives to identify new opportunities, shape innovative solutions, and support our clients in achieving sustainable operational and strategic improvements. In addition to leading project teams and ensuring successful delivery, you will play a pivotal role in developing our market presence, strengthening key accounts, and further growing our Production & Operations consulting practice. Your Responsibilities Advise senior executives on strategic transformation and operational excellence initiatives Build and grow trusted client relationships while expanding key accounts and driving business development activities Lead proposal development and contribute to the acquisition of new consulting opportunities Design target operating models, transformation strategies, and implementation roadmaps Lead complex transformation, reorganization, cost optimization, and operational improvement programs Advise clients on manufacturing, supply chain, network optimization, and operational strategy topics Lead multidisciplinary project teams and ensure successful project delivery, client satisfaction, and busines",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eraneos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Manufacturing",
            "Production",
            "Operations",
            "Consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eraneos/remote-senior-manager-business-value-chain-all-genders-208433",
        "logo": "https://logo.clearbit.com/eraneos.com",
        "companyLogo": "https://logo.clearbit.com/eraneos.com",
        "image": "https://logo.clearbit.com/eraneos.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-56",
        "title": "(Senior) Consultant Business Value Chain (all genders)",
        "title_ar": "(Senior) Consultant Business Value Chain (all genders) (برمجة وتكنولوجيا)",
        "company": "Eraneos",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "remote",
        "type": "Experienced, Permanent, Full time",
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Hamburg, München, Düsseldorf, remote",
        "location_ar": "عن بُعد / عالمي",
        "salary": "Competitive",
        "description": "What you can expect from us At Eraneos Germany, we partner with organizations to master complex challenges and shape a sustainable, digital future. As a (Senior) Consultant in our Production & Operations team, you will support leading organizations in navigating change and unlocking performance improvements. Working in multidisciplinary project teams, you will contribute to strategic and operational transformation initiatives, develop valuable industry expertise, and help clients translate ambitious goals into tangible business results. Your Responsibilities Support transformation and operational improvement projects across manufacturing, supply chain, and engineering environments Analyze business processes and operational performance to identify improvement opportunities and support decision-making Contribute to the design of target operating models, governance structures, and transformation roadmaps Support operational strategy and optimization initiatives across manufacturing, supply chain, and operations Apply lean and continuous improvement methodologies to enhance efficiency, quality, and business outcomes Develop client deliverables and support workshops, stakeholder engagement, and project execution activities Who you are Are you an analytical thinker with strong social skills, are curious and enjoy working as a team player? In addition to a high degree of personal initiative and an entrepreneurial can-do mentality, you possess the following distinguishing qualities: ",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Eraneos. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Manufacturing",
            "Production",
            "Operations",
            "Consulting"
        ],
        "applyUrl": "https://www.arbeitnow.com/jobs/companies/eraneos/remote-senior-consultant-business-value-chain-all-genders-297007",
        "logo": "https://logo.clearbit.com/eraneos.com",
        "companyLogo": "https://logo.clearbit.com/eraneos.com",
        "image": "https://logo.clearbit.com/eraneos.com",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Arbeitnow"
    },
    {
        "id": "job-1789312263-57",
        "title": "Account Executive, B2B",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Account Executive, B2B)",
        "company": "StackAdapt",
        "category": "sales",
        "category_ar": "المبيعات والنمو",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "UK",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "StackAdapt is the leading technology company that empowers marketers to reach, engage, and convert audiences with precision. With 465 billion automated optimizations per second, the AI-powered StackAdapt Marketing Platform seamlessly connects brand and performance marketing to drive measurable results across the entire customer journey. The most forward-thinking marketers choose StackAdapt to orchestrate high-impact campaigns across programmatic advertising and marketing channels. \n The Account Executive, Vertical Sales is a hunter-focused role responsible for driving new programmatic advertising revenue with in-house marketing teams and brands across the B2B vertical . Reporting to the Sales Director, you’ll focus on generating new business, building strategic relationships with brand-direct advertisers, and expanding StackAdapt’s footprint within the B2B market. \n StackAdapt is a remote-first company, though our Sales teams are regionalized. For this role, we are prioritizing candidates based in London, UK and surrounding areas to support in-market relationship building and client engagement. \n What You'll Be Doing \n Prospecting, pitching, and closing new business with brands and in-house marketing teams within the B2B vertical \n Building and managing a strong pipeline of brand-direct opportunities t hrough outbound sales strategies and CRM tools \n Developing relationships with senior marketing stakeholders and executive-level decision-makers \n Partnering cross-functionally",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة StackAdapt. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/153154-account-executive-b2b",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/bf5f2bb689c6f35f6cab5459f3eff869.jpg",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/bf5f2bb689c6f35f6cab5459f3eff869.jpg",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2022/01/bf5f2bb689c6f35f6cab5459f3eff869.jpg",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789312263-58",
        "title": "Senior Research Scientist (Architectures Research)",
        "title_ar": "Senior Research Scientist (Architectures Research) (برمجة وتكنولوجيا)",
        "company": "Nebius",
        "category": "development",
        "category_ar": "برمجة وتكنولوجيا",
        "country_code": "eu_uk",
        "type": [
            "Full-Time"
        ],
        "type_ar": "عن بُعد / دوام كامل",
        "location": "Europe, UK",
        "location_ar": "أوروبا والمملكة المتحدة",
        "salary": "Competitive",
        "description": "About Nebius: \n Nebius is leading a new era in cloud infrastructure for the global AI economy. We are building a full-stack AI cloud platform that supports developers and enterprises from data and model training through to production deployment, without the cost and complexity of building large in-house AI/ML infrastructure. \n Built by engineers, for engineers. From large-scale GPU orchestration to inference optimization, we own the hard problems across compute, storage, networking and applied AI. \n Listed on Nasdaq (NBIS) and headquartered in Amsterdam, we have a global footprint with R&D hubs across Europe, the UK, North America and Israel. Our team of 1,500+ includes hundreds of engineers with deep expertise across hardware, software and AI R&D. The role Nebius AI R&D conducts frontier applied research to make open-source AI highly competitive for real-world use cases. Our Architectures Research stream explores how models can attend, remember, reason, and adapt more effectively, enabling longer and richer workflows at lower computational cost. We are looking for a Senior Research Scientist to develop new model architectures and methods in areas such as: - Efficient, sparse, and adaptive attention - Long-context models and persistent memory - Post-training transformation of pretrained models - - Selective computation and dynamic inference - New architectures for reasoning and continual adaptation Responsibilities - Formulate original research questions and translate them in",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Nebius. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Data science & analytics"
        ],
        "applyUrl": "https://jobicy.com/jobs/150577-senior-research-scientist-architectures-research",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/d90c0566-221.webp",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/d90c0566-221.webp",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2026/06/d90c0566-221.webp",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789312263-59",
        "title": "Consultant Relations Director",
        "title_ar": "Consultant Relations Director (المبيعات والنمو)",
        "company": "Carrot",
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
        "description": "About Carrot: \n Carrot is the leading global fertility and family care platform, built on intelligent care orchestration: the right clinical guidance, at the right moment, in the context of each member’s life. More than a thousand multinational employers, health plans, and health systems trust Carrot to support millions of members across 195 countries – from pre-pregnancy through menopause and major life moments in between. Carrot's comprehensive clinical program delivers industry-leading cost savings for plan sponsors and award-winning experiences and improved outcomes for millions of people worldwide. \n Carrot is widely regarded as a defining force in healthcare innovation as a recipient of several top-tier awards, including Fast Company's 'Most Innovative Companies' and CNBC's '100 Barrier Breaking Startups'. The company is regularly cited by leading global outlets — including The Economist, Bloomberg, The Wall Street Journal, NPR, ABC News, and Harvard Business Review — as a leading voice on digital health, the future of work, and family health. Learn more at get-carrot.com . \n The Role: \n The Consultant Relations Director (CRD) is responsible for driving education, engagement, and revenue growth through strategic partnerships with key consultant firms. This role serves as the primary liaison between Carrot and assigned consultant houses, with full ownership of developing and executing firm-specific strategies aligned to Carrot’s broader commercial goals. \n This is a high",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Carrot. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Business development"
        ],
        "applyUrl": "https://jobicy.com/jobs/153155-consultant-relations-director",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/07/005d05de29487ec44cd07bd9d757d4e1.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/07/005d05de29487ec44cd07bd9d757d4e1.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2021/07/005d05de29487ec44cd07bd9d757d4e1.png",
        "postedAt": "2026-09-13",
        "verified": true,
        "status": "active",
        "source": "Jobicy"
    },
    {
        "id": "job-1789312263-60",
        "title": "Bilingual Inside Sales Associate - Remote (Start Date: 9/28/26) (Spanish/English)",
        "title_ar": "مسؤول مبيعات وتطوير أعمال (Bilingual Inside Sales Associate - Remote (Start Date: 9/28/26) (Spanish/English))",
        "company": "Intoxalock",
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
        "description": "At Intoxalock, a member of the Mindr family of brands, we are dedicated to being a force for good. That's why we provide substance use safety, detection, and monitoring products and services that help people live responsibly and keep communities safe. Always aware. Always Guiding. Never Restricting or judging. The Bilingual Phone Sales Associate is primarily responsible for closing and scheduling installations for leads received via phone from both English and Spanish speaking customers. Our sales roles have paid training and guaranteed commissions for the first 90 days. Average annual pay for the Sales Associate position is between $75k - $85k. Top earners can make over $100K per year. Commissions are uncapped in this position. Hours : Monday-Friday, 1:00PM-9:30PM Central Time (CST) (11:00AM-7:30PM PST, 12:00PM-8:30PM MST, 2:00PM-10:30PM EST ,) one Saturday or Sunday every 4th week. What You’ll Be Doing: \n Handle warm leads, communicate with prospects in both English and Spanish (primarily via phone), close sales, and schedule installations ( No Cold Calling) \n Build value in order to uncover needs and overcome objections \n Maintain minimum quality expectations \n Timely follow up on active prospect list \n Work with Sales Team management, on an ongoing basis, to improve performance. \n Ability to understand the entire sales process, from lead creation to closing \n All other duties as assigned. \n What You’ll Bring to the Table : \n High School Diploma required; Bachelor's Degree",
        "description_ar": "فرصة وظيفية موثوقة ومميزة لدى شركة Intoxalock. تشمل مهام ومسؤوليات احترافية وبيئة عمل مرنة مع إمكانية التقديم المباشر.",
        "requirements": "✅ Relevant industry experience\n✅ Strong communication skills\n✅ Proficiency in required tools",
        "requirements_ar": "✅ خبرة سابقة ذات صلة في نفس التخصص والمجال\n✅ إجادة استخدام الأدوات والتقنيات المطلوبة للوظيفة\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
        "skills": [
            "Sales"
        ],
        "applyUrl": "https://jobicy.com/jobs/150538-bilingual-inside-sales-associate-remote-start-date-9-28-26-spanish-english",
        "logo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/47a0aae1-221.png",
        "companyLogo": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/47a0aae1-221.png",
        "image": "https://jobicy.com/data/server-nyc0409/galaxy/mercury/2025/06/47a0aae1-221.png",
        "postedAt": "2026-09-13",
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
