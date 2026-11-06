# Croma × Zopper Feedback Form (standalone)

Public, login-free feedback page for Croma store staff (opened from a QR code), with a pixel-art Zopper Feedback Desk scene.
React 18 + Vite 5 front end, two serverless functions (Vercel-style handlers), data in an existing Supabase project. Only Supabase credentials are needed; hosting is decided separately.

```
npm install
cp .env.example .env.local      # fill FORM_SUPABASE_URL, FORM_SUPABASE_SERVICE_ROLE_KEY, FEEDBACK_IP_SALT
npm run dev                     # http://localhost:5173  (Vite also serves /api/* locally)
npm run build                   # -> dist/
```

* Page: `src/feedback/` (form, store search, animated character). Validation shared by browser and API: `shared/feedbackRules.js`.
* API: `api/feedback/stores.js` (GET), `api/feedback/submit.js` (POST), helpers in `api/_lib/`.
* Database: `supabase/migrations/*.sql` (already applied to the live project), store seed `supabase/seed/croma_stores.json`.
* Assets: `public/feedback/*`. If you change an image, give it a **new file name** — the included `vercel.json` caches `/feedback/*` for a day (+7 days stale) on Vercel-style hosts.

Never expose `FORM_SUPABASE_SERVICE_ROLE_KEY`. See `CROMA_FEEDBACK_FORM_HANDOFF.md` and `STANDALONE_MIGRATION_GUIDE.md` (shipped next to this repo) for the full specification.
