/* ============================================
   Factor Career - Local Database & Storage Engine
   ============================================ */

window.CareerAI = window.CareerAI || {};

window.CareerAI.db = {
  KEYS: {
    CATEGORIES: 'careerai_categories_v2',
    ARTICLES: 'careerai_articles_v2',
    JOBS: 'careerai_jobs_v2',
    ADMIN_SESSION: 'careerai_admin_session'
  },

  // Default Categories
  defaultCategories: [
    { id: 'cat-1', name: 'Resume & CV', slug: 'cv-resume', description: 'Expert advice and tools to build and optimize your resume' },
    { id: 'cat-2', name: 'Job Interviews', slug: 'job-interviews', description: 'Guidelines, model questions, and proven answer strategies' },
    { id: 'cat-3', name: 'Job Search', slug: 'job-search', description: 'Effective job hunting and networking strategies' },
    { id: 'cat-4', name: 'Cover Letters', slug: 'cover-letters', description: 'How to craft persuasive and customized cover letters' },
    { id: 'cat-5', name: 'ATS Systems', slug: 'ats-system', description: 'How to pass automated Applicant Tracking Systems' },
    { id: 'cat-6', name: 'Career Growth', slug: 'career-growth', description: 'Skill building, promotions, and career advancement' }
  ],

  // 10 Comprehensive English Articles with Verification Proof Codes
  defaultArticles: [
    {
      id: 'art-1',
      title: '10 Proven Strategies to Beat ATS Resume Scanners in 2026',
      slug: '10-proven-strategies-to-beat-ats-resume-scanners',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Learn the essential rules of resume formatting and keyword optimization to ensure your CV passes automated screening systems and reaches human recruiters.',
      content: `
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
      verificationCode: 'FC-PROOF-ATS8821',
      categoryId: 'cat-1',
      categoryName: 'Resume & CV',
      keywords: 'ATS Resume, Resume Formatting, Applicant Tracking System, CV Tips 2026, Job Applications',
      metaTitle: '10 Proven Strategies to Beat ATS Resume Scanners in 2026 | Factor Career',
      metaDescription: 'Discover 10 actionable strategies to optimize your resume for ATS screening algorithms and land more interview callbacks.',
      status: 'published',
      publishedAt: '2026-08-20',
      author: 'Sarah Jenkins, Career Consultant'
    },
    {
      id: 'art-2',
      title: 'The Ultimate Guide to Answering "Tell Me About Yourself" in Job Interviews',
      slug: 'ultimate-guide-answering-tell-me-about-yourself-interviews',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Master the most common opening interview question with the proven Present-Past-Future formula that instantly captivates hiring managers.',
      content: `
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
        
        <h3>Key Pitfalls to Avoid</h3>
        <p>Do not recite your entire resume chronologically or delve into personal life details. Keep your response focused, professional, and under two minutes.</p>
      `,
      verificationCode: 'FC-PROOF-INT9042',
      categoryId: 'cat-2',
      categoryName: 'Job Interviews',
      keywords: 'Job Interviews, Interview Preparation, Tell Me About Yourself, Hiring Advice, Interview Questions',
      metaTitle: 'Answering "Tell Me About Yourself" in Interviews | Factor Career',
      metaDescription: 'Step-by-step formula and sample answers to master the most common interview question with clarity and confidence.',
      status: 'published',
      publishedAt: '2026-08-18',
      author: 'Michael Chang, Senior Recruiter'
    },
    {
      id: 'art-3',
      title: 'How to Write a High-Converting Cover Letter That Gets You Hired',
      slug: 'how-to-write-high-converting-cover-letter',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Transform your generic cover letters into compelling value propositions that grab recruiters attention within the first 10 seconds.',
      content: `
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
      verificationCode: 'FC-PROOF-COV3194',
      categoryId: 'cat-4',
      categoryName: 'Cover Letters',
      keywords: 'Cover Letter, Job Application, Cover Letter Template, Career Tips, Hiring',
      metaTitle: 'How to Write a High-Converting Cover Letter | Factor Career',
      metaDescription: 'Learn how to structure and write a compelling cover letter that stands out from hundreds of applicants.',
      status: 'published',
      publishedAt: '2026-08-17',
      author: 'Elena Rostova, Career Strategist'
    },
    {
      id: 'art-4',
      title: 'Top In-Demand Tech and Soft Skills Employers Look for in 2026',
      slug: 'top-in-demand-skills-employers-look-for-2026',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Explore the crucial technical proficiencies and essential interpersonal soft skills that will future-proof your career in 2026 and beyond.',
      content: `
        <p>The global job landscape is evolving at unprecedented speed. The integration of generative AI, automation, and hybrid remote work models has reshaped what hiring managers value most.</p>
        
        <h3>Top Technical Skills in High Demand</h3>
        <ul>
          <li><strong>AI Prompt Engineering & Tool Fluency:</strong> Leveraging AI copilot tools to double work efficiency.</li>
          <li><strong>Data Literacy & Business Intelligence:</strong> Interpreting SQL datasets, dashboards, and analytics to guide decisions.</li>
          <li><strong>Cloud Architecture & Cybersecurity:</strong> Protecting distributed data assets on AWS, Azure, and Google Cloud.</li>
        </ul>
        
        <h3>Top Enduring Soft Skills</h3>
        <ul>
          <li><strong>Critical Problem Solving:</strong> Evaluating complex challenges independently when AI provides raw data.</li>
          <li><strong>Emotional Intelligence & Cross-Cultural Collaboration:</strong> Leading distributed global teams with empathy.</li>
          <li><strong>Adaptability & Lifelong Learning:</strong> Rapidly mastering new software and industry paradigms without friction.</li>
        </ul>
      `,
      verificationCode: 'FC-PROOF-SKL5501',
      categoryId: 'cat-6',
      categoryName: 'Career Growth',
      keywords: 'Future of Work, Tech Skills 2026, Soft Skills, Career Development, Upskilling',
      metaTitle: 'Top In-Demand Skills for 2026 | Factor Career',
      metaDescription: 'Discover the most sought-after technical and soft skills required by employers worldwide in 2026.',
      status: 'published',
      publishedAt: '2026-08-15',
      author: 'David Miller, Tech Talent Lead'
    },
    {
      id: 'art-5',
      title: 'Step-by-Step Guide to Optimizing Your LinkedIn Profile for Recruiters',
      slug: 'step-by-step-linkedin-profile-optimization-guide',
      image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Turn your LinkedIn profile into a recruiter magnet by applying algorithmic search optimization, persuasive headlines, and engaging media.',
      content: `
        <p>LinkedIn is no longer just an online resume—it is the world's primary search engine for executive recruiters and talent scouts. If your profile is not optimized, you are invisible to hundreds of opportunities.</p>
        
        <h3>1. Write a Compelling, Keyword-Rich Headline</h3>
        <p>Instead of just your job title, format your headline using this formula: <em>[Target Role] | [Core Value Proposition] | [Key Tech Stack & Accolades]</em>.</p>
        
        <h3>2. Craft a First-Person 'About' Narrative</h3>
        <p>Your About section should tell your story: what drives you, your biggest career achievements, and how you help teams succeed. Include a clear call to action and contact email at the bottom.</p>
        
        <h3>3. Maximize Recommendations and Endorsements</h3>
        <p>Profiles with at least 5 credible recommendations from managers and colleagues rank significantly higher in LinkedIn Recruiter search algorithms.</p>
      `,
      verificationCode: 'FC-PROOF-LNK7812',
      categoryId: 'cat-3',
      categoryName: 'Job Search',
      keywords: 'LinkedIn Optimization, Personal Branding, Recruiter Search, Job Hunting, Networking',
      metaTitle: 'LinkedIn Profile Optimization Guide | Factor Career',
      metaDescription: 'Complete step-by-step checklist to attract recruiters and inbound job offers on LinkedIn.',
      status: 'published',
      publishedAt: '2026-08-14',
      author: 'Rachel Adams, Brand & Career Coach'
    },
    {
      id: 'art-6',
      title: 'How to Successfully Transition into a New Career Field Without Direct Experience',
      slug: 'how-to-transition-career-field-without-experience',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'A practical roadmap for pivoting industries by framing transferable skills, building targeted portfolios, and bridging the credibility gap.',
      content: `
        <p>Pivoting into a new career path can feel daunting, especially when job listings ask for 3+ years of specific domain experience. However, smart career changers bridge this gap by focusing on transferable skills and evidence-based portfolios.</p>
        
        <h3>1. Audit Your Transferable Skill Set</h3>
        <p>Project management, stakeholder negotiation, data analysis, and team leadership are universally valued. Reframe your past experiences using the terminology of your target industry.</p>
        
        <h3>2. Build Proof of Work Projects</h3>
        <p>Create case studies, GitHub repositories, or sample design audits that solve real problems in your target sector. A tangible portfolio often outweighs years of passive experience.</p>
        
        <h3>3. Conduct Informational Interviews</h3>
        <p>Reach out to professionals currently in your desired role for 15-minute informational chats. Ask about their daily challenges and the industry's unspoken requirements.</p>
      `,
      verificationCode: 'FC-PROOF-TRS4430',
      categoryId: 'cat-6',
      categoryName: 'Career Growth',
      keywords: 'Career Change, Career Transition, Transferable Skills, Career Pivot, Professional Growth',
      metaTitle: 'How to Transition into a New Career Field | Factor Career',
      metaDescription: 'Actionable strategies for switching industries and landing interviews without formal background experience.',
      status: 'published',
      publishedAt: '2026-08-12',
      author: 'Jonathan Hayes, Executive Career Coach'
    },
    {
      id: 'art-7',
      title: 'Mastering the STAR Method for Behavioral Interview Questions',
      slug: 'mastering-star-method-behavioral-interview-questions',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Structure concise, impactful stories for behavioral questions like "Describe a time you overcame conflict" using the STAR technique.',
      content: `
        <p>Behavioral interview questions—such as <em>"Tell me about a time you handled a difficult stakeholder"</em>—are designed to predict your future performance based on past behavior. The <strong>STAR method</strong> is the gold standard for structuring these answers.</p>
        
        <h3>The 4 Components of STAR:</h3>
        <ul>
          <li><strong>Situation (20%):</strong> Set the scene with relevant context and the stakes involved.</li>
          <li><strong>Task (10%):</strong> Define what your specific responsibility was in that scenario.</li>
          <li><strong>Action (50%):</strong> Detail the concrete steps YOU took to solve the dilemma.</li>
          <li><strong>Result (20%):</strong> State the quantifiable outcome, lesson learned, or praise received.</li>
        </ul>
        
        <h3>Pro Tip: Prepare 5 Multi-Purpose Stories</h3>
        <p>Develop 5 comprehensive project stories from your career history that can each be adapted to demonstrate leadership, problem-solving, resilience, conflict resolution, or technical excellence.</p>
      `,
      verificationCode: 'FC-PROOF-STR6219',
      categoryId: 'cat-2',
      categoryName: 'Job Interviews',
      keywords: 'STAR Method, Behavioral Interview, Interview Technique, Job Coaching, Interview Preparation',
      metaTitle: 'Mastering the STAR Method for Interviews | Factor Career',
      metaDescription: 'Learn how to construct compelling behavioral interview answers using the proven STAR storytelling technique.',
      status: 'published',
      publishedAt: '2026-08-10',
      author: 'Marcus Vance, Talent Acquisition Partner'
    },
    {
      id: 'art-8',
      title: 'How to Negotiate Your Salary and Compensation Package with Confidence',
      slug: 'how-to-negotiate-salary-compensation-confidence',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Learn effective salary negotiation scripts and strategies to increase your offer without risking the initial job opportunity.',
      content: `
        <p>Studies consistently demonstrate that candidates who negotiate their starting compensation increase their lifetime earnings by over $500,000. Yet, many job seekers hesitate out of fear of appearing difficult.</p>
        
        <h3>1. Benchmark Your Market Value Thoroughly</h3>
        <p>Use salary aggregators like Glassdoor, Levels.fyi, and Payscale to establish an objective compensation range for your exact role, experience level, and geographic tier.</p>
        
        <h3>2. Never State Your Number First</h3>
        <p>If pressed early in the screening process, respond politely: <em>"I am focused on finding the right role match, and I am confident we can agree on a fair figure aligned with market rates once we determine mutual fit."</em></p>
        
        <h3>3. Negotiate the Total Compensation Bundle</h3>
        <p>If the base salary is fixed, negotiate equity grants, annual performance bonuses, sign-on bonuses, additional paid time off, or remote work stipends.</p>
      `,
      verificationCode: 'FC-PROOF-SAL8374',
      categoryId: 'cat-6',
      categoryName: 'Career Growth',
      keywords: 'Salary Negotiation, Compensation Package, Job Offer, Career Advice, Negotiation Tips',
      metaTitle: 'How to Negotiate Your Salary with Confidence | Factor Career',
      metaDescription: 'Proven negotiation strategies, scripts, and psychological techniques to secure the compensation you deserve.',
      status: 'published',
      publishedAt: '2026-08-08',
      author: 'Claire Thornton, Compensation Analyst'
    },
    {
      id: 'art-9',
      title: 'Effective Job Search Strategies to Uncover the Hidden Job Market',
      slug: 'uncover-hidden-job-market-search-strategies',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Up to 70% of open positions are never posted publicly. Learn how to tap into internal referral networks and land unadvertised opportunities.',
      content: `
        <p>Relying exclusively on public job boards means competing against hundreds of applicants for every role. The <strong>Hidden Job Market</strong> refers to opportunities filled via internal referrals, headhunter outreach, and organic networking.</p>
        
        <h3>1. Map Out a Target List of 20 Companies</h3>
        <p>Rather than applying indiscriminately, identify 20 high-growth companies that match your values. Follow their key executives and engineering/marketing leaders on social media.</p>
        
        <h3>2. The Art of Cold Value Outreach</h3>
        <p>Send concise, polite messages to department leaders introducing an insightful observation about their product or market, followed by an inquiry regarding upcoming team growth.</p>
        
        <h3>3. Leverage Alumni Networks</h3>
        <p>University alumni and former workplace colleagues are your warmest referral sources. Reach out with genuine curiosity about their current company culture.</p>
      `,
      verificationCode: 'FC-PROOF-HDN2958',
      categoryId: 'cat-3',
      categoryName: 'Job Search',
      keywords: 'Hidden Job Market, Networking Strategies, Job Search 2026, Career Referrals, Cold Outreach',
      metaTitle: 'Uncover the Hidden Job Market | Factor Career',
      metaDescription: 'Discover how to find unadvertised job opportunities through targeted networking and strategic outreach.',
      status: 'published',
      publishedAt: '2026-08-06',
      author: 'Ahmed El-Khaledi, Career Consultant'
    },
    {
      id: 'art-10',
      title: 'How to Use Artificial Intelligence to Accelerate Your Career Search',
      slug: 'how-to-use-ai-to-accelerate-career-search',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
      excerpt: 'Harness the full potential of AI resume builders, automated interview coaches, and keyword generators to land your dream job faster.',
      content: `
        <p>Artificial Intelligence has transformed job hunting from a tedious manual slog into a streamlined, high-precision process. Job seekers who leverage AI tools effectively can apply to more relevant roles with tailored assets in half the time.</p>
        
        <h3>1. AI-Driven Resume Tailoring</h3>
        <p>Modern platforms like <strong>Factor Career</strong> parse job postings and instantly generate keyword-rich bullet points tailored to specific ATS criteria, eliminating hours of manual editing.</p>
        
        <h3>2. Interactive Interview Coaching</h3>
        <p>AI interview tools simulate real hiring scenarios, generating realistic questions tailored to your exact industry and evaluating your answers using the STAR method for instant feedback.</p>
        
        <h3>3. Personalized Cover Letters in Seconds</h3>
        <p>Generative AI analyzes your unique experience against job specifications to draft persuasive, professional cover letters that maintain authentic human tone and highlight your strongest achievements.</p>
      `,
      verificationCode: 'FC-PROOF-AIX1095',
      categoryId: 'cat-1',
      categoryName: 'Resume & CV',
      keywords: 'AI Career Tools, AI Resume Builder, Job Search AI, Smart Career Tech, Factor Career',
      metaTitle: 'How to Use AI to Accelerate Your Career Search | Factor Career',
      metaDescription: 'Learn how to leverage AI tools for resume optimization, interview coaching, and automated cover letters to get hired faster.',
      status: 'published',
      publishedAt: '2026-08-04',
      author: 'Factor Career AI Research Team'
    }
  ],

  // Default Jobs / Opportunities
  defaultJobs: [
    {
      id: 'job-1',
      title: 'Frontend Developer (React & Modern UI)',
      company: 'TechFlow Digital Solutions',
      location: 'Remote / Global',
      type: 'Full-time',
      salary: '$3,000 - $4,500 / mo',
      description: 'We are seeking a talented Frontend Developer proficient in HTML/CSS/JavaScript and React to build fast, responsive, and accessible web experiences.',
      requirements: '3+ years web development experience, mastery of UI/UX best practices, strong communication and problem-solving skills.',
      applyUrl: 'mailto:careerfactor@gmail.com?subject=Application for Frontend Developer Position',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      status: 'active',
      createdAt: '2026-08-20'
    },
    {
      id: 'job-2',
      title: 'Senior HR Talent Acquisition Specialist',
      company: 'Horizon Global Consulting',
      location: 'Casablanca / Hybrid',
      type: 'Full-time',
      salary: '$2,200 - $3,200 / mo',
      description: 'Lead recruitment lifecycles, manage ATS screening funnels, and coordinate candidate interviews across our expanding EMEA client portfolio.',
      requirements: 'Degree in HR or Business, hands-on experience with modern ATS software, outstanding interpersonal communication skills.',
      applyUrl: 'mailto:careerfactor@gmail.com?subject=Application for HR Recruiter Position',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      status: 'active',
      createdAt: '2026-08-19'
    },
    {
      id: 'job-3',
      title: 'Digital Content & SEO Strategist',
      company: 'Waed EdTech Platform',
      location: 'Remote / Flexible',
      type: 'Part-time / Flexible',
      salary: '$1,500 - $2,200 / mo',
      description: 'Write search engine optimized career articles, guides, and promotional campaigns to drive organic reach and brand authority.',
      requirements: 'Flawless English & Arabic copywriting, proven track record with keyword research and SEO tools, passion for AI technology.',
      applyUrl: 'mailto:careerfactor@gmail.com?subject=Application for Content Specialist Position',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80',
      status: 'active',
      createdAt: '2026-08-18'
    }
  ],

  // Initialization
  init: function() {
    // Reset or seed if not present or older version
    if (!localStorage.getItem(this.KEYS.CATEGORIES)) {
      localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(this.defaultCategories));
    }
    if (!localStorage.getItem(this.KEYS.ARTICLES)) {
      localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(this.defaultArticles));
    }
    if (!localStorage.getItem(this.KEYS.JOBS)) {
      localStorage.setItem(this.KEYS.JOBS, JSON.stringify(this.defaultJobs));
    }
  },

  /* --- Categories API --- */
  getCategories: function() {
    this.init();
    return JSON.parse(localStorage.getItem(this.KEYS.CATEGORIES) || '[]');
  },

  addCategory: function(name, description) {
    const categories = this.getCategories();
    const slug = name.trim().toLowerCase().replace(/[\s\W]+/g, '-');
    const newCat = {
      id: 'cat-' + Date.now(),
      name: name.trim(),
      slug: slug,
      description: description ? description.trim() : ''
    };
    categories.push(newCat);
    localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
    return newCat;
  },

  updateCategory: function(id, name, description) {
    const categories = this.getCategories();
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index].name = name.trim();
      categories[index].slug = name.trim().toLowerCase().replace(/[\s\W]+/g, '-');
      categories[index].description = description ? description.trim() : '';
      localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
      return categories[index];
    }
    return null;
  },

  deleteCategory: function(id) {
    let categories = this.getCategories();
    categories = categories.filter(c => c.id !== id);
    localStorage.setItem(this.KEYS.CATEGORIES, JSON.stringify(categories));
  },

  /* --- Articles API --- */
  getArticles: function(includeDrafts = false) {
    this.init();
    const articles = JSON.parse(localStorage.getItem(this.KEYS.ARTICLES) || '[]');
    if (includeDrafts) {
      return articles;
    }
    return articles.filter(a => a.status === 'published');
  },

  getArticleBySlug: function(slug) {
    const articles = this.getArticles(true);
    return articles.find(a => a.slug === slug);
  },

  getArticleById: function(id) {
    const articles = this.getArticles(true);
    return articles.find(a => a.id === id);
  },

  saveArticle: function(articleData) {
    const articles = this.getArticles(true);
    const categories = this.getCategories();
    const cat = categories.find(c => c.id === articleData.categoryId);

    // Auto-generate slug if empty
    let slug = articleData.slug ? articleData.slug.trim() : articleData.title.trim().toLowerCase().replace(/[\s\W]+/g, '-');
    if (!slug) slug = 'article-' + Date.now();

    const categoryName = cat ? cat.name : 'General';
    const proofCode = articleData.verificationCode || ('FC-PROOF-' + Math.floor(1000 + Math.random() * 9000));

    if (articleData.id) {
      // Update existing
      const index = articles.findIndex(a => a.id === articleData.id);
      if (index !== -1) {
        articles[index] = {
          ...articles[index],
          ...articleData,
          slug: slug,
          categoryName: categoryName,
          verificationCode: articles[index].verificationCode || proofCode
        };
        localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(articles));
        return articles[index];
      }
    }

    // Create new
    const newArticle = {
      id: 'art-' + Date.now(),
      title: articleData.title,
      slug: slug,
      image: articleData.image || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      excerpt: articleData.excerpt || '',
      content: articleData.content || '',
      verificationCode: proofCode,
      categoryId: articleData.categoryId,
      categoryName: categoryName,
      keywords: articleData.keywords || '',
      metaTitle: articleData.metaTitle || articleData.title,
      metaDescription: articleData.metaDescription || articleData.excerpt || '',
      status: articleData.status || 'published',
      publishedAt: articleData.publishedAt || new Date().toISOString().split('T')[0],
      author: articleData.author || 'Factor Career Team'
    };

    articles.unshift(newArticle);
    localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(articles));
    return newArticle;
  },

  deleteArticle: function(id) {
    let articles = this.getArticles(true);
    articles = articles.filter(a => a.id !== id);
    localStorage.setItem(this.KEYS.ARTICLES, JSON.stringify(articles));
  },

  /* --- Jobs API --- */
  getJobs: function(includeInactive = false) {
    this.init();
    const jobs = JSON.parse(localStorage.getItem(this.KEYS.JOBS) || '[]');
    if (includeInactive) {
      return jobs;
    }
    return jobs.filter(j => j.status === 'active');
  },

  getJobById: function(id) {
    const jobs = this.getJobs(true);
    return jobs.find(j => j.id === id);
  },

  saveJob: function(jobData) {
    const jobs = this.getJobs(true);

    if (jobData.id) {
      const index = jobs.findIndex(j => j.id === jobData.id);
      if (index !== -1) {
        jobs[index] = {
          ...jobs[index],
          ...jobData
        };
        localStorage.setItem(this.KEYS.JOBS, JSON.stringify(jobs));
        return jobs[index];
      }
    }

    const newJob = {
      id: 'job-' + Date.now(),
      title: jobData.title,
      company: jobData.company || 'Verified Employer',
      location: jobData.location || 'Remote',
      type: jobData.type || 'Full-time',
      salary: jobData.salary || 'Competitive',
      description: jobData.description || '',
      requirements: jobData.requirements || '',
      applyUrl: jobData.applyUrl || 'mailto:careerfactor@gmail.com',
      image: jobData.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      status: jobData.status || 'active',
      createdAt: jobData.createdAt || new Date().toISOString().split('T')[0]
    };

    jobs.unshift(newJob);
    localStorage.setItem(this.KEYS.JOBS, JSON.stringify(jobs));
    return newJob;
  },

  deleteJob: function(id) {
    let jobs = this.getJobs(true);
    jobs = jobs.filter(j => j.id !== id);
    localStorage.setItem(this.KEYS.JOBS, JSON.stringify(jobs));
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
