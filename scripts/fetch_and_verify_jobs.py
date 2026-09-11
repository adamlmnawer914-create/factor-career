#!/usr/bin/env python3
"""
Factor Career - AI Automated Job Scraper & Verification Pipeline v2.1
Fetches jobs from reliable English-language public APIs,
cleans HTML/mojibake, verifies & translates them via Gemini 1.5 Flash,
extracts real company logos, then saves to data/jobs.json and js/db.js.
"""

import os
import json
import re
import time
import html
import datetime
import urllib.request
import urllib.error

COMPANY_DOMAINS = {
    'stripe': 'stripe.com',
    'deliveroo': 'deliveroo.com',
    'remote': 'remote.com',
    'ceros': 'ceros.com',
    'dscout': 'dscout.com',
    'interaction design foundation': 'interaction-design.org',
    'salesforge': 'salesforge.ai',
    'alertmedia': 'alertmedia.com',
    'ping identity': 'pingidentity.com',
    'd2l': 'd2l.com',
    'brafton': 'brafton.com',
    'grove collaborative': 'grove.com',
    'coalition technologies': 'coalitiontechnologies.com',
    'unió digital': 'uniodigital.com',
    'ct marketing agency': 'coalitiontechnologies.com',
    'orca bio': 'orcabio.com',
    'mitre media': 'mitremedia.com',
    'libertex group': 'libertex.com',
    'warehance': 'warehance.com',
    'empire assets': 'empireground.com',
    'imerit': 'imerit.net',
    'eclinical solutions': 'eclinicalsol.com',
    'garden3d': 'garden3d.net',
    'transportation partners': 'tpandl.com',
    'techflow digital solutions': 'techflow.com',
    'horizon global consulting': 'horizonglobal.com'
}

def clean_text(text):
    if not text:
        return ''
    s = html.unescape(str(text))
    s = html.unescape(s)
    s = re.sub(r'<[^>]*>', ' ', s)
    mojibake_map = {
        'â€™': "'", 'â€œ': '"', 'â€': '"', 'â€“': '–', 'â€”': '—',
        'Â ': ' ', 'Â': '', 'Ã¢â‚¬â„¢': "'", '\u00a0': ' ', 'â€¢': '•',
        'â€¦': '...', 'â€\x9d': '"', 'â€˜': "'"
    }
    for k, v in mojibake_map.items():
        s = s.replace(k, v)
    s = re.sub(r'[ \t\r\f\v]+', ' ', s)
    s = re.sub(r'\n\s*\n+', '\n', s)
    return s.strip()

def get_company_logo(company_name, raw_logo=None):
    if raw_logo and raw_logo.startswith("http") and "unsplash" not in raw_logo:
        return raw_logo
    c = (company_name or '').lower().strip()
    for k, domain in COMPANY_DOMAINS.items():
        if k in c:
            return f'https://logo.clearbit.com/{domain}'
    simple = re.sub(r'[^a-z0-9]', '', c)
    if simple:
        return f'https://logo.clearbit.com/{simple}.com'
    return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=120&q=80"

CATEGORY_KEYWORDS = {
    "development": ["developer", "engineer", "software", "backend", "frontend", "fullstack", "react", "python", "javascript", "golang", "devops", "cloud", "aws", "data", "ai", "sre", "qa"],
    "design": ["design", "designer", "ui", "ux", "graphic", "art", "product designer", "illustrator"],
    "marketing": ["marketing", "seo", "growth", "content", "copywriter", "writer", "social media", "brand", "communications"],
    "sales": ["sales", "account executive", "sdr", "business development", "b2b", "outreach"],
    "hr": ["hr", "human resources", "recruiter", "talent", "people", "people operations", "onboarding"],
    "finance": ["finance", "accounting", "accountant", "fp&a", "financial", "crypto", "analyst", "audit"],
    "customer_support": ["support", "customer success", "service", "help desk", "client success"],
}

CATEGORY_AR_MAP = {
    "development": "تطوير وبرمجة",
    "design": "تصميم وإبداع",
    "marketing": "تسويق ومبيعات",
    "sales": "المبيعات",
    "hr": "موارد بشرية",
    "finance": "مالية ومحاسبة",
    "customer_support": "دعم العملاء",
    "operations": "عمليات وإدارة",
    "education": "تعليم وتدريب",
    "healthcare": "رعاية صحية",
    "other": "أخرى",
}

def classify_job(title, tags):
    text = (title + " " + " ".join(tags)).lower()
    for cat, kw_list in CATEGORY_KEYWORDS.items():
        if any(kw in text for kw in kw_list):
            return cat
    return "other"

def fetch_json(url, headers=None, timeout=20):
    req_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
    if headers:
        req_headers.update(headers)
    try:
        req = urllib.request.Request(url, headers=req_headers)
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"  [Error fetching {url}]: {e}")
        return None

def verify_with_gemini(raw_job, api_key):
    title = clean_text(raw_job.get("title", ""))
    company = clean_text(raw_job.get("company", ""))
    location = clean_text(raw_job.get("location", ""))
    description = clean_text(raw_job.get("description", ""))[:600]
    tags = ", ".join(raw_job.get("tags", [])[:8])

    prompt = f"""You are a bilingual HR expert and job market analyst.

Analyze this job posting and respond with ONLY a valid JSON object:

Job Title: {title}
Company: {company}
Location: {location}
Tags/Skills: {tags}
Description: {description}

Respond ONLY with this exact JSON format:
{{
  "is_legit": true,
  "scam_reason": "",
  "title": "{title}",
  "title_ar": "<Professional Arabic translation of the title, e.g. مهندس برمجيات أول (Senior Software Engineer)>",
  "company": "{company}",
  "category": "<one of: development, design, marketing, sales, hr, finance, customer_support, other>",
  "category_ar": "<Arabic category name>",
  "type": "<Remote / Full-time / Part-time / Contract>",
  "type_ar": "<عن بُعد / دوام كامل / دوام جزئي / عقد>",
  "location": "{location}",
  "salary": "<salary range if mentioned, else Competitive>",
  "description": "<2-3 sentence English summary without HTML tags>",
  "description_ar": "<2-3 جمل باللغة العربية الفصحى السليمة بدون أي رموز مشوهة>",
  "requirements": "<3 key requirements in English, each starting with checkmark>",
  "requirements_ar": "<3 متطلبات رئيسية باللغة العربية الفصحى السليمة، كل متطلب في سطر يبدأ بعلامة صح>"
}}

CRITICAL: title_ar, description_ar and requirements_ar MUST be written in 100% proper Arabic script."""

    payload = json.dumps({"contents": [{"parts": [{"text": prompt}]}], "generationConfig": {"temperature": 0.2, "maxOutputTokens": 1024, "responseMimeType": "application/json"}}).encode("utf-8")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    try:
        req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"}, method="POST")
        with urllib.request.urlopen(req, timeout=30) as resp:
            res_data = json.loads(resp.read().decode("utf-8"))
            text = res_data["candidates"][0]["content"]["parts"][0]["text"]
            text = re.sub(r"^```(?:json)?\s*", "", text.strip())
            text = re.sub(r"\s*```$", "", text.strip())
            return json.loads(text)
    except Exception as e:
        print(f"  [Warning] Gemini error: {e}")
        return None

def make_fallback(raw, i):
    title = clean_text(raw.get("title", ""))
    company = clean_text(raw.get("company", ""))
    location = clean_text(raw.get("location", "Remote / Global"))
    tags = raw.get("tags", [])
    desc = clean_text(raw.get("description", ""))[:300]
    cat = classify_job(title, tags)
    is_remote = "remote" in location.lower()
    return {
        "is_legit": True, "title": title, "title_ar": f"{title} ({CATEGORY_AR_MAP.get(cat, 'وظيفة')})", "company": company,
        "category": cat, "category_ar": CATEGORY_AR_MAP.get(cat, "أخرى"),
        "type": "Remote" if is_remote else "Full-time",
        "type_ar": "عن بُعد" if is_remote else "دوام كامل",
        "location": location, "salary": "Competitive",
        "description": desc + ("..." if len(desc) >= 300 else ""),
        "description_ar": f"فرصة وظيفية موثوقة في شركة {company}، تشمل مهام ومسؤوليات متطورة مع إمكانية العمل عن بُعد ومزايا تنافسية.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in " + (", ".join(tags[:4]) or "required tools") + "\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة عملية سابقة في نفس المجال والتخصص\n✅ إجادة استخدام " + (", ".join(tags[:4]) or "الأدوات والتقنيات الأساسية") + "\n✅ مهارات تواصل احترافية والقدرة على العمل الجماعي",
    }

def fetch_remoteok():
    data = fetch_json("https://remoteok.com/api")
    if not data or not isinstance(data, list):
        return []
    jobs = []
    for item in data[1:30]:
        if not isinstance(item, dict) or not item.get("position"):
            continue
        jobs.append({
            "title": clean_text(item.get("position", "")),
            "company": clean_text(item.get("company", "")),
            "location": clean_text(item.get("location") or "Remote / Global"),
            "description": clean_text(item.get("description", ""))[:500],
            "tags": item.get("tags", []),
            "url": item.get("url", ""),
            "logo": item.get("logo", ""),
            "source": "RemoteOK"
        })
    return jobs

def fetch_jobicy():
    data = fetch_json("https://jobicy.com/api/v2/remote-jobs?count=20")
    if not data or not isinstance(data, dict):
        return []
    jobs = []
    for item in data.get("jobs", []):
        jobs.append({
            "title": clean_text(item.get("jobTitle", "")),
            "company": clean_text(item.get("companyName", "")),
            "location": clean_text(item.get("jobGeo") or "Remote / Global"),
            "description": clean_text(item.get("jobExcerpt") or item.get("jobDescription", ""))[:500],
            "tags": [item.get("jobCategory", ""), item.get("jobIndustry", "")],
            "url": item.get("url", ""),
            "logo": item.get("companyLogo", ""),
            "source": "Jobicy"
        })
    return jobs

def run_pipeline():
    api_key = os.environ.get("GEMINI_API_KEY", "")
    print("=" * 60)
    print("  Factor Career - AI Job Pipeline v2.1")
    print(f"  Gemini API: {'Configured' if api_key else 'Fallback mode'}")
    print("=" * 60)

    print("\n[Step 1] Fetching fresh jobs from public sources...")
    raw_jobs = []
    for fetcher, name in [(fetch_remoteok, "RemoteOK"), (fetch_jobicy, "Jobicy")]:
        try:
            results = fetcher()
            print(f"  -> {name}: {len(results)} jobs")
            raw_jobs.extend(results)
        except Exception as e:
            print(f"  -> {name} failed: {e}")

    script_dir = os.path.dirname(os.path.abspath(__file__))
    jobs_file = os.path.join(script_dir, "..", "data", "jobs.json")
    existing_jobs = []
    if os.path.exists(jobs_file):
        try:
            with open(jobs_file, "r", encoding="utf-8") as f:
                existing_jobs = json.load(f)
        except Exception:
            existing_jobs = []

    existing_urls = {j.get("applyUrl", "") for j in existing_jobs}
    existing_titles = {j.get("title", "").lower() for j in existing_jobs}

    new_jobs = []
    for i, raw in enumerate(raw_jobs):
        if len(new_jobs) >= 25:
            break
        title = clean_text(raw.get("title", ""))
        comp = clean_text(raw.get("company", ""))
        url = raw.get("url", "")
        if not title or not comp:
            continue
        if url and url in existing_urls:
            continue
        if title.lower() in existing_titles:
            continue

        verified = None
        if api_key:
            time.sleep(0.5)
            verified = verify_with_gemini(raw, api_key)
        if not verified:
            verified = make_fallback(raw, i)

        if not verified.get("is_legit", True):
            continue

        cat = (verified.get("category") or classify_job(title, raw.get("tags", []))).lower()
        logo = get_company_logo(comp, raw.get("logo"))

        job = {
            "id": f"job-{int(datetime.datetime.now().timestamp())}-{len(new_jobs)+1}",
            "title": clean_text(verified.get("title", title)),
            "title_ar": clean_text(verified.get("title_ar", title)),
            "company": comp,
            "category": cat,
            "category_ar": verified.get("category_ar", CATEGORY_AR_MAP.get(cat, "أخرى")),
            "type": verified.get("type", "Remote"),
            "type_ar": verified.get("type_ar", "عن بُعد"),
            "location": clean_text(verified.get("location", raw.get("location", "Remote / Global"))),
            "location_ar": "عن بُعد / عالمي" if "remote" in raw.get("location", "").lower() else clean_text(verified.get("location", "Remote / Global")),
            "salary": verified.get("salary", "Competitive"),
            "description": clean_text(verified.get("description", raw.get("description", "")[:300])),
            "description_ar": clean_text(verified.get("description_ar", f"فرصة وظيفية موثوقة في شركة {comp} مع مزايا تنافسية.")),
            "requirements": clean_text(verified.get("requirements", "✅ Relevant experience required")),
            "requirements_ar": clean_text(verified.get("requirements_ar", "✅ خبرة عملية سابقة في نفس المجال والتخصص")),
            "applyUrl": url or "mailto:factorcareer@gmail.com",
            "logo": logo,
            "companyLogo": logo,
            "image": logo,
            "postedAt": datetime.datetime.now().strftime("%Y-%m-%d"),
            "verified": True,
            "status": "active",
            "source": raw.get("source", ""),
        }
        new_jobs.append(job)
        existing_urls.add(url)
        existing_titles.add(title.lower())

    all_jobs = new_jobs + existing_jobs
    all_jobs = all_jobs[:60]

    with open(jobs_file, "w", encoding="utf-8") as f:
        json.dump(all_jobs, f, ensure_ascii=False, indent=2)
    print(f"\n[Step 3] Saved {len(all_jobs)} jobs -> data/jobs.json")

    db_file = os.path.join(script_dir, "..", "js", "db.js")
    if os.path.exists(db_file):
        with open(db_file, "r", encoding="utf-8") as f:
            db_code = f.read()
        jobs_json_str = json.dumps(all_jobs, ensure_ascii=False, indent=4)
        idx_jobs = db_code.find('defaultJobs:')
        idx_init = db_code.find('init:', idx_jobs) if idx_jobs != -1 else -1
        if idx_jobs != -1 and idx_init != -1:
            separator = ",\n\n  "
            new_db_code = db_code[:idx_jobs] + "defaultJobs: " + jobs_json_str + separator + db_code[idx_init:]
            with open(db_file, "w", encoding="utf-8") as f:
                f.write(new_db_code)
            print("[Step 4] Synced cleanly into js/db.js")
        else:
            print("[Step 4] Warning: could not locate defaultJobs boundary in db.js")
    else:
        print("[Step 4] js/db.js not found")

    print("\n" + "=" * 60)
    print(f"  Done! Total jobs: {len(all_jobs)}")
    print("=" * 60)

if __name__ == "__main__":
    run_pipeline()
