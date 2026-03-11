# Agent Rules for Nowruz Wiki

These are standing rules that all AI agents must follow when working on this project. Every change, new page, or feature must be checked against these pillars.

---

## 1. SEO — Every Page Must Be Indexed

**Every new or modified page must have:**

- A `generateMetadata` export (server-side) with a unique `title` and `description`.
- Full `openGraph` block with `title`, `description`, `url`, and `images` (pointing to the page's hero image).
- `twitter` card block with `card: 'summary_large_image'`.
- A `keywords` array relevant to the page content.
- An `alternates.canonical` URL.

**Custom pages that use client components** (e.g. `"use client"`) **must** split into a server wrapper file that exports `generateMetadata` and a separate client component file.

**Checklist before merging a page:**
- [ ] `<title>` shows correctly in browser tab
- [ ] URL appears in `/sitemap.xml`
- [ ] OG image shows correctly when pasted into Twitter/Discord

---

## 2. Sitemap & Robots — Keep Them Up To Date

- The `src/app/sitemap.ts` file dynamically generates the sitemap from `getAllArticles()`. **When adding a new hardcoded page** (e.g. a new route under `src/app/[locale]/my-new-page/`), add the static URL to the sitemap.
- The `public/robots.txt` allows all bots. Do not add `Disallow` rules without explicit user approval.

---

## 3. AI Agent Discoverability — Serve Clean Markdown

All AI agents (LLMs, ChatGPT plugins, Perplexity, Claude) benefit from clean Markdown instead of HTML.

**Rules:**
- Every new MDX article added to `content/articles/` is automatically served as raw Markdown via the `/api/content?page=[slug]` endpoint. **No additional action required for MDX articles.**
- When adding a new **hardcoded page** (custom React component), add a corresponding entry to the content API so bots can fetch its Markdown summary.
- `public/llms.txt` must be updated whenever new major sections or articles are added to the site.

---

## 4. Structured Data (JSON-LD) — Help Search Engines Understand Content

- Every MDX article page (`[slug]/page.tsx`) must include an `Article` JSON-LD schema block.
- The root layout (`layout.tsx`) contains `WebSite` and `Organization` JSON-LD — do not remove it.
- When creating new content categories, add appropriate JSON-LD type (e.g. `FAQPage`, `HowTo`, `Event` where applicable).

---

## 5. Accessibility — Every User Matters

All new UI components and pages must meet WCAG 2.1 AA standards:

- **Images:** Every `<Image>` must have a descriptive, meaningful `alt` attribute. Never use empty `alt=""` on content images.
- **Interactive elements:** Every `<button>` must have an `aria-label` if it contains no visible text.
- **Modals/Drawers:** Must have `role="dialog"` and `aria-modal="true"`.
- **Headings:** Every page must have exactly one `<h1>`. Do not skip heading levels.
- **Color contrast:** Text must have at minimum 4.5:1 contrast ratio against its background.
- **Skip link:** The site layout includes a skip-to-content link — never remove it.
- **Focus styles:** Never use `outline: none` without a custom focus ring replacement.

---

## 6. URL Consistency — Flat Route Structure

All content pages use a **flat URL namespace**. There is no `/wiki/[slug]` — all articles are at `/en/[slug]`.

- Custom React pages: `src/app/[locale]/[page-name]/page.tsx` → `/en/[page-name]`
- MDX articles: `content/articles/[category]/[slug].md` → `/en/[slug]`
- The food hub: `/en/nowruz-foods` (NOT `/en/foods`)

**When adding a new article**, ensure:
1. The slug is unique across **all** categories (no two `.md` files can have the same filename).
2. The slug uses kebab-case (lowercase, hyphens, no underscores).

---

## 7. Image Standards

- All new article cover images go in `public/images/articles/` as `.png` files.
- Article frontmatter must use `coverImage: /images/articles/[slug].png` (not `.jpg`).
- Hero images for hardcoded pages go in `public/images/page-headers/`.
- All generated AI images must be saved with their **native format extension** (`.png` for AI-generated, `.jpg` for photos).
