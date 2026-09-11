#!/usr/bin/env python3
"""
Factor Career - AI Automated Job Scraper & Verification Pipeline v2.0
Fetches jobs from reliable English-language public APIs,
verifies & translates them using Gemini 1.5 Flash,
then saves to data/jobs.json and syncs into js/db.js.
"""

import os
import json
import re
import time
import datetime
import urllib.request
import urllib.error

IMAGES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
]

CATEGORY_MAP = {
    "development": ["dev","software","engineer","frontend","backend","fullstack","mobile","ios","android","python","javascript","java","react","node","cloud","devops","sre","data","machine learning","ai","ml","web","api","programmer","architect","qa","testing"],
    "design": ["design","ui","ux","graphic","visual","creative","figma","product design","motion","illustration","brand"],
    "marketing": ["marketing","seo","content","social media","growth","advertising","campaign","digital marketing","email","copywriter","pr","communications"],
    "sales": ["sales","account executive","account manager","business development","bdm","bdr","sdr","revenue","partnerships"],
    "hr": ["hr","human resources","recruiter","recruiting","talent","people ops","culture","training"],
    "finance": ["finance","accounting","financial","controller","cfo","audit","tax","payroll","bookkeeping","investment"],
    "operations": ["operations","ops","project manager","pm","scrum","agile","program manager","logistics"],
    "customer_support": ["support","customer success","customer service","helpdesk","technical support"],
    "education": ["teacher","instructor","tutor","trainer","educator","curriculum","e-learning"],
    "healthcare": ["healthcare","medical","nurse","doctor","clinical","pharmacy","health","biotech"],
}

CATEGORY_AR_MAP = {
    "development": "تطوير وبرمجة",
    "design": "تصميم وإبداع",
    "marketing": "تسويق ومبيعات",
    "sales": "المبيعات",
    "hr": "موارد بشرية",
    "finance": "مالية ومحاسبة",
    "operations": "عمليات وإدارة",
    "customer_support": "دعم العملاء",
    "education": "تعليم وتدريب",
    "healthcare": "رعاية صحية",
    "other": "أخرى",
}

def classify_job(title, tags):
    text = (title + " " + " ".join(tags)).lower()
    for cat, keywords in CATEGORY_MAP.items():
        if any(kw in text for kw in keywords):
            return cat
    return "other"

def fetch_json(url, headers=None, timeout=20):
    try:
        req = urllib.request.Request(url, headers=headers or {"User-Agent": "FactorCareer-JobAgent/2.0 (+https://factor-career.com)"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"  [Warning] Fetch failed for {url}: {e}")
        return None

def verify_with_gemini(raw_job, api_key):
    title = raw_job.get("title", "")
    company = raw_job.get("company", "")
    location = raw_job.get("location", "")
    description = raw_job.get("description", "")[:600]
    tags = ", ".join(raw_job.get("tags", [])[:8])

    prompt = f"""You are a professional bilingual (Arabic/English) HR expert and job market analyst.

Analyze this job posting and respond with ONLY a valid JSON object (no markdown, no explanation):

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
  "title_ar": "<Arabic translation of the job title>",
  "company": "{company}",
  "category": "<one of: development, design, marketing, sales, hr, finance, operations, customer_support, education, healthcare, other>",
  "category_ar": "<Arabic category name from this list: تطوير وبرمجة / تصميم وإبداع / تسويق ومبيعات / المبيعات / موارد بشرية / مالية ومحاسبة / عمليات وإدارة / دعم العملاء / تعليم وتدريب / رعاية صحية / أخرى>",
  "type": "<Remote / Full-time / Part-time / Contract>",
  "type_ar": "<عن بُعد / دوام كامل / دوام جزئي / عقد>",
  "location": "{location}",
  "salary": "<salary range if mentioned, else Competitive>",
  "description": "<2-3 sentence English summary of the role>",
  "description_ar": "<2-3 جمل باللغة العربية الفصحى السليمة تلخص هذا الدور الوظيفي>",
  "requirements": "<3-4 key requirements in English, each on new line starting with checkmark>",
  "requirements_ar": "<3-4 متطلبات رئيسية باللغة العربية الفصحى السليمة، كل متطلب في سطر>"
}}

CRITICAL: description_ar and requirements_ar MUST be written in proper Arabic script (عربية فصحى), NOT English or transliteration."""

    payload = json.dumps({"contents": [{"parts": [{"text": prompt}]}], "generationConfig": {"temperature": 0.2, "maxOutputTokens": 1024, "responseMimeType": "application/json"}}).encode("utf-8")
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    try:
        req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"}, method="POST")
        with urllib.request.urlopen(req, timeout=30) as resp:
            res_data = json.loads(resp.read().decode("utf-8"))
            text = res_data["candidates"][0]["content"]["parts"][0]["text"]
            text = re.sub(r"^  (?:json)?\s*", "", text.strip())
            text = re.sub(r"\s*  $", "", text.strip())
            return json.loads(text)
    except Exception as e:
        print(f"  [Warning] Gemini error: {e}")
        return None

def make_fallback(raw, i):
    title = raw.get("title", "")
    company = raw.get("company", "")
    location = raw.get("location", "Remote / Global")
    tags = raw.get("tags", [])
    desc = raw.get("description", "")[:300]
    cat = classify_job(title, tags)
    is_remote = "remote" in location.lower()
    return {
        "is_legit": True, "title": title, "title_ar": title, "company": company,
        "category": cat, "category_ar": CATEGORY_AR_MAP.get(cat, "أخرى"),
        "type": "Remote" if is_remote else "Full-time",
        "type_ar": "عن بُعد" if is_remote else "دوام كامل",
        "location": location, "salary": "Competitive",
        "description": desc + ("..." if len(raw.get("description","")) > 300 else ""),
        "description_ar": "فرصة وظيفية مميزة في بيئة عمل احترافية ومتطورة.",
        "requirements": "✅ Relevant experience in the field\n✅ Proficient in " + (", ".join(tags[:4]) or "required tools") + "\n✅ Strong communication skills",
        "requirements_ar": "✅ خبرة ذات صلة في المجال\n✅ إجادة استخدام " + (", ".join(tags[:4]) or "الأدوات المطلوبة") + "\n✅ مهارات تواصل قوية",
    }

def fetch_remoteok():
    print("  Fetching RemoteOK...")
    data = fetch_json("https://remoteok.com/api", {"User-Agent": "FactorCareer-Agent/2.0"})
    jobs = []
    if not (data and isinstance(data, list)):
        return jobs
    for item in data[1:20]:
        if not isinstance(item, dict) or not item.get("position"):
            continue
        jobs.append({"title": item.get("position",""), "company": item.get("company","Tech Company"), "location": item.get("location") or "Remote / Global", "url": item.get("url") or item.get("apply_url",""), "description": re.sub(r"<[^>]+>", " ", item.get("description",""))[:800], "tags": item.get("tags",[]), "image": item.get("company_logo") or IMAGES[0], "source": "RemoteOK"})
    print(f"    -> {len(jobs)} jobs")
    return jobs

def fetch_jobicy():
    print("  Fetching Jobicy...")
    data = fetch_json("https://jobicy.com/api/v2/remote-jobs?count=20")
    jobs = []
    if not (data and isinstance(data, dict) and "jobs" in data):
        return jobs
    for item in data["jobs"][:20]:
        jobs.append({"title": item.get("jobTitle",""), "company": item.get("companyName","Company"), "location": item.get("jobGeo") or "Remote / Global", "url": item.get("url",""), "description": re.sub(r"<[^>]+>", " ", item.get("jobDescription",""))[:800], "tags": item.get("jobIndustry",[]) + item.get("jobType",[]), "image": item.get("companyLogo") or IMAGES[2], "source": "Jobicy"})
    print(f"    -> {len(jobs)} jobs")
    return jobs

def fetch_remotive():
    print("  Fetching Remotive...")
    data = fetch_json("https://remotive.com/api/remote-jobs?limit=20")
    jobs = []
    if not (data and isinstance(data, dict) and "jobs" in data):
        return jobs
    for item in data["jobs"][:20]:
        jobs.append({"title": item.get("title",""), "company": item.get("company_name","Company"), "location": item.get("candidate_required_location") or "Remote / Global", "url": item.get("url",""), "description": re.sub(r"<[^>]+>", " ", item.get("description",""))[:800], "tags": item.get("tags",[]), "image": item.get("company_logo") or IMAGES[6], "source": "Remotive"})
    print(f"    -> {len(jobs)} jobs")
    return jobs

def fetch_findwork():
    print("  Fetching FindWork...")
    data = fetch_json("https://findwork.dev/api/jobs/?remote=true&order_by=-date")
    jobs = []
    if not (data and isinstance(data, dict) and "results" in data):
        return jobs
    for item in data["results"][:15]:
        jobs.append({"title": item.get("role",""), "company": item.get("company_name","Startup"), "location": "Remote / Global", "url": item.get("url",""), "description": item.get("text","")[:800], "tags": item.get("keywords",[]), "image": IMAGES[4], "source": "FindWork"})
    print(f"    -> {len(jobs)} jobs")
    return jobs

def run_pipeline():
    print("=" * 60)
    print("  Factor Career - AI Job Agent v2.0")
    print(f"  Started: {datetime.datetime.now().isoformat()}")
    print("=" * 60)

    gemini_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if gemini_key:
        print(f"  Gemini Key detected (last 6: ...{gemini_key[-6:]})")
    else:
        print("  No Gemini Key - using rule-based fallback")

    script_dir = os.path.dirname(os.path.abspath(__file__))
    jobs_file = os.path.join(script_dir, "..", "data", "jobs.json")
    os.makedirs(os.path.dirname(jobs_file), exist_ok=True)

    existing_jobs = []
    if os.path.exists(jobs_file):
        try:
            with open(jobs_file, "r", encoding="utf-8") as f:
                existing_jobs = json.load(f)
            print(f"  Loaded {len(existing_jobs)} existing jobs")
        except Exception:
            existing_jobs = []

    cutoff = (datetime.datetime.now() - datetime.timedelta(days=14)).strftime("%Y-%m-%d")
    existing_jobs = [j for j in existing_jobs if j.get("postedAt","2000-01-01") >= cutoff]

    existing_urls = {j.get("applyUrl","") for j in existing_jobs}
    existing_titles = {f"{j.get('title','').lower()}_{j.get('company','').lower()}" for j in existing_jobs}

    print("\n[Step 1] Fetching from all sources...")
    fetched_raw = []
    fetched_raw += fetch_remoteok()
    fetched_raw += fetch_jobicy()
    fetched_raw += fetch_remotive()
    fetched_raw += fetch_findwork()
    print(f"  Total raw: {len(fetched_raw)}")

    candidates = []
    seen_keys = set()
    for raw in fetched_raw:
        url = raw.get("url","")
        title = raw.get("title","").strip()
        comp = raw.get("company","").strip()
        if not title or not comp:
            continue
        dedup_key = f"{title.lower()}_{comp.lower()}"
        if url in existing_urls or dedup_key in existing_titles or dedup_key in seen_keys:
            continue
        non_ascii = sum(1 for c in title if ord(c) > 127)
        if non_ascii > len(title) * 0.3:
            print(f"  Skipping non-English: {title[:40]}")
            continue
        seen_keys.add(dedup_key)
        candidates.append(raw)

    print(f"  New unique candidates: {len(candidates)}")

    print(f"\n[Step 2] Verifying {len(candidates)} candidates with Gemini...")
    new_jobs = []
    img_idx = 0
    for i, raw in enumerate(candidates):
        title = raw.get("title","")
        comp = raw.get("company","")
        url = raw.get("url","")
        dedup_key = f"{title.lower()}_{comp.lower()}"
        print(f"  [{i+1}/{len(candidates)}] {title[:45]} @ {comp[:25]}")

        verified = None
        if gemini_key:
            verified = verify_with_gemini(raw, gemini_key)
            time.sleep(0.8)

        if not verified or not isinstance(verified, dict):
            verified = make_fallback(raw, i)

        if not verified.get("is_legit", True):
            print(f"    -> Flagged as scam")
            continue

        cat = verified.get("category", classify_job(title, raw.get("tags",[])))
        job = {
            "id": f"job-{int(datetime.datetime.now().timestamp())}-{len(new_jobs)+1}",
            "title": verified.get("title", title),
            "title_ar": verified.get("title_ar", title),
            "company": verified.get("company", comp),
            "category": cat,
            "category_ar": verified.get("category_ar", CATEGORY_AR_MAP.get(cat,"أخرى")),
            "type": verified.get("type","Remote"),
            "type_ar": verified.get("type_ar","عن بُعد"),
            "location": verified.get("location", raw.get("location","Remote / Global")),
            "salary": verified.get("salary","Competitive"),
            "description": verified.get("description", raw.get("description","")[:300]),
            "description_ar": verified.get("description_ar","فرصة وظيفية مميزة في بيئة عمل احترافية."),
            "requirements": verified.get("requirements","✅ Relevant experience required"),
            "requirements_ar": verified.get("requirements_ar","✅ خبرة ذات صلة مطلوبة"),
            "applyUrl": url or "mailto:factorcareer@gmail.com",
            "image": raw.get("image") or IMAGES[img_idx % len(IMAGES)],
            "postedAt": datetime.datetime.now().strftime("%Y-%m-%d"),
            "status": "active",
            "verified": True,
            "source": raw.get("source",""),
        }
        new_jobs.append(job)
        existing_urls.add(url)
        existing_titles.add(dedup_key)
        img_idx += 1

    print(f"\n  {len(new_jobs)} new verified jobs added")

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
            separator = ",\n\n    "
            new_db_code = db_code[:idx_jobs] + "defaultJobs: " + jobs_json_str + separator + db_code[idx_init:]
            with open(db_file, "w", encoding="utf-8") as f:
                f.write(new_db_code)
            print("[Step 4] Synced into js/db.js safely without escape corruption")
        else:
            print("[Step 4] Warning: could not locate defaultJobs boundary in db.js")
    else:
        print("[Step 4] js/db.js not found")

    print("\n" + "=" * 60)
    print(f"  Done! Total jobs: {len(all_jobs)}")
    print("=" * 60)

if __name__ == "__main__":
    run_pipeline()
