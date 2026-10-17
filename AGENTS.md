# Life Story Companion — Repository Instructions

## 1. Project Overview & Context
- **Description:** Public landing page and availability hub for **The Life Story Companion**, the separately distributed AI skill companion to *The Life Story Handbook*.
- **Permanent URL:** `https://chuckatbcs.github.io/life-story-companion/` (GitHub Pages). Safe for print/QR routing; marketplace URLs and prices may change behind this page.
- **Stack:** Static site only — HTML, CSS, assets, and public policy/compatibility docs. No application server, build toolchain, or package.json runtime.
- **Portfolio:** C.B. Ventures life-story / family-legacy products.
- **Public vs private:**
  - This repository may contain product description, availability, compatibility, support, privacy/terms, and official purchase/install routing only.
  - Proprietary skill source, interview engine, memory schemas, paid packages, entitlement logic, and signing keys live in private `life-story-companion-premium` and must **never** be copied here.
- **Brand rule:** Keep public Companion language **family-role neutral**. Do not hard-code Dad-only branding into shared navigation, permanent URLs, or core product copy unless a deliberately separate edition requires it.

## 2. Mandatory Supporting Documents (Source of Truth Order)
1. [README.md](README.md) — Public/private boundary, purpose, and permanent destination.
2. [COMPATIBILITY.md](COMPATIBILITY.md) — When a platform may be claimed as supported.
3. Public pages: `index.html`, `compatibility.html`, `support.html`, `privacy.html`, `terms.html`.
4. Private premium repo (when the task touches payment, packaging, or skill IP): `PAYWALL-ARCHITECTURE.md`, `PRODUCTION-READINESS.md`, and `skill-core/` — read there; do not import proprietary files into this repo.
5. This file (`AGENTS.md`).

Parent machine policy (PCGamer persistent processes only): `B:\AI Directory\Projects\AGENTS.md` and the documents it names. It does not replace this repository’s instructions.

## 3. Protected Files & Security Controls
- Never commit secrets, API keys, Stripe secret/restricted keys, webhook secrets, `.env` files, customer records, or license/entitlement databases.
- Never add proprietary skill packages, prompt cores, or adapter source from `life-story-companion-premium` into this public repository.
- Do not invent or publish production retention, pricing, or hosted-service promises until those decisions are explicitly approved.
- Preserve unrelated working-tree changes and untracked files. Stage **explicit intended paths only**; never use `git add -A`.
- Do not force-push, rewrite published history, or discard local work unless explicitly authorized.

## 4. Workflow & Validation Checklist
- **Branching:** Do not implement on `main` unless the user or this file explicitly authorizes it. Prefer a feature branch and pull request for substantive changes.
- **Preflight:** Before substantive edits, confirm repository root, branch, full HEAD SHA, working-tree status, and any open PR; re-read this `AGENTS.md` and the supporting documents above that apply to the task.
- **Scope:** Do not silently expand into premium-repo IP, payment activation, marketplace submission, or hosted infrastructure without explicit authorization. Paywall/payment processing stays gated until approved (`PAYWALL-ARCHITECTURE.md` in the premium repo).
- **Validation (static site):**
  - Diff review of intended HTML/CSS/asset/doc paths only.
  - Check internal links, external Amazon/support links, and mobile layout for changed pages.
  - Confirm no secrets or proprietary skill content appear in the diff.
  - Optional: open changed pages locally or via GitHub Pages after deploy.
- **Commits & push:** Clear, scoped commit messages. Push only the authorized branch. Do not commit this file or any other change unless the user explicitly asks to commit.
- **End-of-task report:** Concise summary; exact files changed; checks run; risks; starting and ending full SHAs; branch/PR state; working-tree status; protected-file confirmation; merge status; stop-condition status; final line `Timestamp: YYYY-MM-DD HH:MM:SS <tz>`.
