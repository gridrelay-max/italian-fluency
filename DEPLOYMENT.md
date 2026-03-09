# Italian Fluency Platform — Deployment Guide

## Quick Start (5 minutes)

### Step 1: Test Locally (Optional but Recommended)

```bash
cd italian-fluency-platform
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

You should see:
- Dashboard with progress metrics
- "Learn" tab with Lesson 1
- "Quiz" tab with 5 auto-graded questions

### Step 2: Deploy to Vercel

#### Option A: GitHub + Vercel (Recommended for Teams)

1. Create GitHub repo:
```bash
cd italian-fluency-platform
git remote add origin https://github.com/gridrelay-max/italian-fluency.git
git push -u origin main
```

2. Go to https://vercel.com and sign up (free)

3. Click "Import Project"

4. Paste GitHub URL: `https://github.com/gridrelay-max/italian-fluency`

5. Vercel auto-detects Next.js → Click "Deploy"

6. Live! ✅ Visit `italian-fluency.vercel.app`

#### Option B: Direct Vercel Deploy (Quickest)

1. Download & install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd italian-fluency-platform
vercel
```

3. Follow prompts → Choose project name → Deploy

4. Live at your custom URL ✅

---

## What Gets Deployed

**Dashboard:**
- Progress tracking (streak, points, mastery %)
- 5-month milestone tracker
- Quick-start buttons

**Lesson 1 (Il Congiuntivo):**
- 5 interactive sections
- Read-on-screen or print-to-PDF
- Auto-complete with points

**Quiz System:**
- 5 auto-graded questions
- Instant feedback
- Score calculation

**Progress Tracking:**
- localStorage saves everything
- Persists across browser sessions
- No login/signup needed

---

## After Deployment

**Share the link:** `https://italian-fluency.vercel.app`

**Users can:**
1. Land on dashboard
2. Read Lesson 1
3. Complete quiz
4. Build streak & earn points
5. Progress tracked automatically

---

## Adding More Lessons

To add Lesson 2, 3, etc.:

1. Edit `app/components/LessonViewer.tsx`
   - Add new lesson object after `LESSON_1`
   - Follow same structure (id, title, duration, sections)

2. Edit `app/components/QuizEngine.tsx`
   - Add new quiz questions array

3. Update `app/page.tsx` if needed for navigation

4. Commit & push to GitHub:
```bash
git add .
git commit -m "Add Lesson 2"
git push
```

Vercel auto-redeploys! ✅

---

## FAQ

**Q: Do I need a database?**
A: No! Progress is saved in browser's localStorage. If you want multiple devices, we'd add a backend later.

**Q: Can users create accounts?**
A: Not yet. Currently uses localStorage. We can add authentication later if needed.

**Q: How do I make changes?**
A: Edit files → commit → push to GitHub → Vercel auto-redeploys in seconds.

**Q: Can I customize the design?**
A: Yes! Edit `app/globals.css` or `tailwind.config.ts` for colors/fonts.

**Q: Is it mobile-friendly?**
A: Yes! Uses Tailwind responsive classes. Works on phone/tablet/desktop.

---

## Troubleshooting

**"npm install" fails:**
```bash
npm install --legacy-peer-deps
```

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Need to reset progress:**
- Open browser DevTools (F12)
- Go to Application → localStorage
- Delete `italianProgress` key

---

## Support

If deployment issues occur, check:
1. Node.js version: `node -v` (should be 18+)
2. npm version: `npm -v` (should be 9+)
3. GitHub credentials are saved locally
4. Vercel account created and authenticated

---

**Ready to go live? 🚀**

```bash
npm run dev  # Test locally
# ...happy with it?
vercel       # Deploy!
```

