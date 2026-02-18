# THE FOODIES — Multi‑page Website (Production)

This is a **Next.js (App Router)** website for **THE FOODIES** with multiple pages, SEO files, and brand assets.

## 1) Requirements
- **Node.js 20 LTS** (recommended)
- npm (comes with Node)

> If you’re on Node 23/24 and getting SWC / caniuse-lite errors, install Node 20 LTS and retry.

## 2) Run locally (Windows PowerShell)
Open PowerShell **inside the project folder** and run:

```powershell
cd "C:\Users\arpan\Downloads\THE_FOODIES_PRO_WEBSITE"
# if you re-extracted the ZIP, your folder name may differ

# clean install (recommended)
rmdir /s /q node_modules 2>$null
del package-lock.json 2>$null
npm cache verify

npm install
npm run dev
```

Then open: http://localhost:3000

## 3) Deploy (Recommended): Vercel + GoDaddy domain
### A) Push to GitHub (from the project folder)
```powershell
git config --global user.name "Arpan Nagar"
git config --global user.email "a.ptheplayer@gmail.com"

git init
git add .
git commit -m "Deploy: The Foodies website"
git branch -M main

# replace with your repo URL:
git remote remove origin 2>$null
git remote add origin https://github.com/aptheplayer-sketch/thefoodieswebsite.git

# force push (ONLY if you want to overwrite the repo completely)
git push -u origin main --force
```

### B) Import in Vercel
1. Open Vercel → **Add New → Project**
2. **Import Git Repository** → select `aptheplayer-sketch/thefoodieswebsite`
3. Framework should auto-detect **Next.js** → click **Deploy**

### C) Connect your GoDaddy domain
1. Vercel → your project → **Settings → Domains**
2. Add your domain (e.g., `thefoodiesindia.com`)
3. Vercel will show DNS records to add in GoDaddy:
   - Usually `A @` → `76.76.21.21`
   - `CNAME www` → `cname.vercel-dns.com`
4. GoDaddy → Domain → **DNS** → add/update records
5. Wait for propagation (often 5–30 minutes) → back to Vercel, it will show **Valid**.

## 4) SEO Notes
- `app/sitemap.ts` and `app/robots.ts` are included.
- Update site URL inside those files after domain is final.

## Support
If anything fails, paste your exact error screenshot and I’ll tell you the next command to run.
