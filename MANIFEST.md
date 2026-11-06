# MANIFEST — croma-feedback-form-source.zip

Source of truth: Master App repo `marketing-zopper/zoppermarketingstudio`, branch `main`, commit `febd37f`.
Status legend: **VERBATIM** = byte-identical copy of the Master file at the same path (sha256 verified when this package was built); **NEW/ADAPTED/GENERATED** = glue written for the standalone app;
**REFERENCE ONLY** = Master-App files kept for reading, never copy them into the new app; **ARCHIVAL** = original artwork not served by the site.
sha256 column is the first 16 hex chars.

| Path | Status | sha256 | KB |
|---|---|---|---|
| `.env.example` | NEW — standalone variable list | `bff03c8330cfe976` | 1.6 |
| `.gitignore` | VERBATIM | `63c05f23e841de3b` | 0.1 |
| `api/_lib/http.js` | NEW — slim public-only replacement of Master api/_lib/http.js (same send/route/clientIp behaviour; auth + Redis removed) | `6a7ee2a9a3386dd6` | 1.6 |
| `api/_lib/supabase.js` | VERBATIM | `43a8ee54975d698f` | 1.5 |
| `api/feedback/stores.js` | VERBATIM | `1372e8977711309a` | 1.3 |
| `api/feedback/submit.js` | VERBATIM | `fd718647879a9b8f` | 5.4 |
| `index.html` | ADAPTED — Master's index.html with only the <title> changed to "Croma × Zopper · Feedback Desk" | `e7a18c05acaf23ae` | 0.6 |
| `package-lock.json` | GENERATED — by `npm install` on package.json (exact versions used for the verified build) | `af63039593d15c5b` | 58.4 |
| `package.json` | NEW — Master's package.json minus react-router-dom and google-auth-library (not used by the form) | `eb57e83be1cfd545` | 0.5 |
| `public/feedback/char-arm.png` | VERBATIM | `6678464b42415f15` | 9.7 |
| `public/feedback/char-body.webp` | VERBATIM | `0ec3e6e8fc1a69eb` | 20.5 |
| `public/feedback/char-elbow.png` | VERBATIM | `1d1f16b48a014fa3` | 0.5 |
| `public/feedback/char-head.webp` | VERBATIM | `d6c531576368343d` | 12.9 |
| `public/feedback/counter.webp` | VERBATIM | `2cb3e8011dc0f8f1` | 67.2 |
| `public/feedback/croma-header.png` | VERBATIM | `4168aae5965892eb` | 2.7 |
| `public/feedback/croma-navy.png` | VERBATIM | `862fbfe92ff518e1` | 5.8 |
| `public/feedback/desk-sign.webp` | VERBATIM | `942f42fa5b5aa3d9` | 28.9 |
| `public/feedback/floor.webp` | VERBATIM | `8f2395718c23760e` | 101.4 |
| `public/feedback/plant.webp` | VERBATIM | `e4b5065b0cfe3e71` | 20.4 |
| `public/feedback/rating-panel.webp` | VERBATIM | `ac1162398bdc8a86` | 87.7 |
| `public/feedback/scene-v2.webp` | VERBATIM | `63d8140417eeecb3` | 167.3 |
| `public/feedback/zopper-white.png` | VERBATIM | `6b856cc3253d596d` | 3.0 |
| `public/zopper-logo.png` | VERBATIM | `abb55bab96b790fa` | 1.4 |
| `README.md` | NEW — repo README | `2118bb774c7f4f54` | 1.3 |
| `reference-master-only/.env.example` | REFERENCE ONLY - do not copy into the new app | `90d391f414aedc1d` | 1.2 |
| `reference-master-only/api/_lib/http.js` | REFERENCE ONLY - do not copy into the new app | `40f9d232819ec931` | 2.7 |
| `reference-master-only/index.html` | REFERENCE ONLY - do not copy into the new app | `cc0aacf8d5ff0365` | 0.6 |
| `reference-master-only/package.json` | REFERENCE ONLY - do not copy into the new app | `ecebbacc9853824e` | 0.6 |
| `reference-master-only/src/App.jsx` | REFERENCE ONLY - do not copy into the new app | `93e9febd13d9adc1` | 1.3 |
| `reference-master-only/src/components/Card.jsx` | REFERENCE ONLY - do not copy into the new app | `6c36cb0049cf2b5b` | 1.2 |
| `reference-master-only/src/main.jsx` | REFERENCE ONLY - do not copy into the new app | `040a0f876ef4f17f` | 0.3 |
| `reference-master-only/src/pages/Employee.jsx` | REFERENCE ONLY - do not copy into the new app | `8002b8c27f0859b5` | 2.4 |
| `reference-master-only/src/pages/Landing.jsx` | REFERENCE ONLY - do not copy into the new app | `d34987094e4c690f` | 2.0 |
| `reference-master-only/src/styles.css` | REFERENCE ONLY - do not copy into the new app | `3cb9457c3e1e5b0c` | 4.6 |
| `reference-tests/api-checks.mjs` | TEST/TOOL — development-time script (see reference-tests/README.md) | `221a388c42be7f23` | 9.4 |
| `reference-tests/capture-screenshots.mjs` | TEST/TOOL — development-time script (see reference-tests/README.md) | `1591276dac390d30` | 4.7 |
| `reference-tests/public-nav-animation-checks.mjs` | TEST/TOOL — development-time script (see reference-tests/README.md) | `f370dc142a0c3e45` | 14.4 |
| `reference-tests/README.md` | TEST/TOOL — development-time script (see reference-tests/README.md) | `ab4b858028f1b46f` | 2.2 |
| `reference-tests/ui-checks.mjs` | TEST/TOOL — development-time script (see reference-tests/README.md) | `034525c38217a6f5` | 16.5 |
| `reference-tests/visual-parity-check.mjs` | TEST/TOOL — development-time script (see reference-tests/README.md) | `3cb0bc5996a42255` | 2.1 |
| `reference-tools/arm-hand.mjs` | TOOL — how the sprite layers were cut (provenance only) | `0e7687ed5239d305` | 4.9 |
| `reference-tools/sprites.mjs` | TOOL — how the sprite layers were cut (provenance only) | `cf102ae27589db81` | 3.3 |
| `scripts/build-croma-stores.mjs` | VERBATIM | `ae8484b19fccebf5` | 2.9 |
| `scripts/seed-croma-stores.mjs` | VERBATIM | `d19dcea245627c69` | 2.7 |
| `shared/feedbackRules.js` | VERBATIM | `df501f474ca1eacc` | 3.2 |
| `source-art/character.webp` | ARCHIVAL (not deployed) | `e7d68dd8d7c25ac1` | 29.0 |
| `source-art/croma-white.png` | ARCHIVAL (not deployed) | `49334c7a82709770` | 8.5 |
| `src/App.jsx` | NEW — renders <FeedbackForm/> at the root (no router, no auth) | `748065fb5dc5412b` | 0.2 |
| `src/base.css` | NEW — the only global rules (:root vars, box-sizing, body) copied from Master src/styles.css | `2012a0875e31f866` | 0.5 |
| `src/feedback/DeskCharacter.jsx` | VERBATIM | `3035d02d2ae71947` | 2.7 |
| `src/feedback/feedback.css` | VERBATIM | `82c83ae2571561c7` | 17.8 |
| `src/feedback/FeedbackForm.jsx` | VERBATIM | `8cb10d23985b3774` | 15.9 |
| `src/feedback/StoreSelect.jsx` | VERBATIM | `ee9ea48bb172aa7e` | 7.1 |
| `src/main.jsx` | NEW — mounts <App/> without BrowserRouter / Master CSS | `fb9826439d9c9c38` | 0.2 |
| `supabase/migrations/20261102000000_croma_feedback.sql` | VERBATIM | `5f37f9d146c951e5` | 4.2 |
| `supabase/README.md` | VERBATIM | `124ffb8ce113d4f0` | 2.3 |
| `supabase/seed/croma_stores.json` | VERBATIM | `b2cc857b70656900` | 144.6 |
| `vercel.json` | VERBATIM | `66113d11bbe81c4a` | 0.7 |
| `vite.config.js` | VERBATIM | `9eb5ac5646cd29c4` | 1.2 |

Total files: 59. `node_modules/`, `dist/`, `.env.local` are intentionally absent.
