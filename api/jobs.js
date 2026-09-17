import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // 1-hour Edge caching (revalidate: 3600) + stale-while-revalidate protection
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const response = await fetch('https://remotive.com/api/remote-jobs?limit=25', {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Remotive API responded with status ${response.status}`);
    }

    const data = await response.json();
    if (data && Array.isArray(data.jobs) && data.jobs.length > 0) {
      return res.status(200).json(data);
    }
    throw new Error('Empty jobs array from Remotive');
  } catch (err) {
    console.warn('Remotive API fetch failed, serving local fallback from data/jobs.json:', err.message);
    try {
      const fallbackPath = path.join(process.cwd(), 'data', 'jobs.json');
      const fallbackData = fs.readFileSync(fallbackPath, 'utf8');
      const jobs = JSON.parse(fallbackData);
      return res.status(200).json({ jobs, fallback: true, cached_at: new Date().toISOString() });
    } catch (fallbackErr) {
      console.error('Fallback read failed:', fallbackErr);
      return res.status(500).json({ error: 'Failed to retrieve jobs data' });
    }
  }
}
