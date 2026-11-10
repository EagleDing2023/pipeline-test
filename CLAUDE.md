# Web project rules

## Stack
- Next.js (App Router) + TypeScript + Tailwind. shadcn/ui for basic parts.
- Supabase only when the app needs to save data.
- Deploy: GitHub -> Vercel auto-deploy on push to main.

## Design
- Use the frontend-design skill for all UI work.
- If brand_assets/ exists, use its logo, colours, and fonts.
- Keep it simple: 2 fonts, 1 accent colour. These are hard limits; use the skill inside them.

## Screenshot loop
- After a visible UI change, screenshot with Playwright at desktop and mobile width, compare to the goal, fix. Max 2 passes.
- Save to temp-screenshots/ named like hero-v1.png. Never commit them.
- Skip screenshots for animated elements; I'll check those myself.

## Git and deploy
- Always test on localhost first.
- Local commits are fine at working checkpoints. Run git status first, never git add .
- Never push unless I say "push". Pushing = going live.
- Never commit .env files, API keys, or secrets.

## Working with me
- Before a new feature, give me a short plan and wait for OK.
- One feature at a time. After each, explain in plain words which files changed and why.
