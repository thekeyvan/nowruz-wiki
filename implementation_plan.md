# SEO, Accessibility & AI Crawlability — Full Site Audit Plan

Comprehensive plan to ensure the Nowruz Wiki is fully crawlable by search engines, screen readers, and AI agents. The audit found many critical gaps that need fixing.

## Critical Issues Found

| Issue | Impact |
|---|---|
| No `robots.txt` | Search engines don't know what to crawl |
| No `sitemap.xml` | All 25+ pages are not indexed properly |
| Custom pages (`history`, `foods`, etc.) are `"use client"` with no metadata | Zero SEO for these pages |
| No Open Graph / Twitter Card tags anywhere | Poor social media unfurling |
| No JSON-LD structured data | AI agents can't extract semantic data |
| No `llms.txt` file | LLM-based AI agents don't know about the site |
| No skip-to-content link | Screen reader users can't jump past nav |
| Navbar `navLinks` still has `/foods` (old) | Broken link in `navLinks` constant |
| `haji-firuz` and `nane-sarma` articles have no matching article content | Potential 404 or empty pages |

---

## Proposed Changes

### 1. Search Engine Discoverability — Core Files

#### [NEW] `src/app/robots.ts` (Next.js native robots)
Generate a `robots.txt` that allows full crawling and includes the sitemap URL.

#### [NEW] `src/app/sitemap.ts` (Next.js native sitemap)
Dynamically generate a complete sitemap with all routes: static pages + all MDX article slugs. This will automatically be served at `/sitemap.xml`.

---

### 2. AI Agent Discoverability

#### [NEW] `public/llms.txt`
A `llms.txt` file in the root of `public/` is the emerging standard for AI agents. It describes the site's purpose, structure, and links to all major content so that LLMs can understand and crawl the site efficiently.

---

### 3. Per-Page Server Metadata (OpenGraph + Twitter Cards)

Every custom page (history, foods, haft-sin, etc.) is currently a `"use client"` component with **no [generateMetadata](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/%5Bslug%5D/page.tsx#33-44) export**, meaning search engines see no title/description. We must split these into server/client component pairs.

#### [MODIFY] [src/app/[locale]/history/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/history/page.tsx)
#### [MODIFY] [src/app/[locale]/nowruz-foods/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/nowruz-foods/page.tsx)
#### [MODIFY] [src/app/[locale]/chaharshanbe-suri/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/chaharshanbe-suri/page.tsx)
#### [MODIFY] [src/app/[locale]/science/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/science/page.tsx)
#### [MODIFY] [src/app/[locale]/sizdah-bedar/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/sizdah-bedar/page.tsx)
#### [MODIFY] [src/app/[locale]/wiki/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/wiki/page.tsx)
#### [MODIFY] [src/app/[locale]/haft-sin/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/haft-sin/page.tsx)

**Pattern:** Add a server-side [generateMetadata](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/%5Bslug%5D/page.tsx#33-44) function that exports `title`, `description`, and full `openGraph` + `twitter` card metadata to every page. Includes:
- Custom per-page `title` and `description`
- `openGraph.images` pointing to the hero image for that page
- `twitter.card: 'summary_large_image'`
- `keywords` array
- `alternates.canonical` URL

#### [MODIFY] [src/app/[locale]/[slug]/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/%5Bslug%5D/page.tsx)
Enhance the existing [generateMetadata](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/%5Bslug%5D/page.tsx#33-44) on MDX article pages to also include OG tags using the article's `coverImage`.

---

### 4. JSON-LD Structured Data

JSON-LD is the gold standard for helping search engines (and AI agents) understand page content semantically. We will inject it via a `<script>` tag in the page `<head>`.

#### [NEW] `src/components/json-ld.tsx`
A `<JsonLd>` client component that accepts typed props and renders a `<script type="application/ld+json">` tag.

#### [MODIFY] [src/app/[locale]/[slug]/page.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/%5Bslug%5D/page.tsx)
Add [Article](file:///Users/saina/Developer/nowruz-wiki/src/lib/mdx.ts#7-14) JSON-LD schema to every MDX article, referencing the title, description, author, cover image URL, and `datePublished`.

#### [MODIFY] [src/app/[locale]/layout.tsx](file:///Users/saina/Developer/nowruz-wiki/src/app/%5Blocale%5D/layout.tsx)
Add `WebSite` and `Organization` JSON-LD to the root layout so every page on the site gets baseline structured data.

---

### 5. Raw Markdown Download Endpoints (AI-First Content API)

This is an excellent idea and is becoming an industry best practice for AI-friendly sites. It allows LLM-based agents (ChatGPT plugins, Perplexity, Anthropic Claude, etc.) to request clean, pure text instead of wrestling with HTML.

> [!IMPORTANT]
> The site already has an `/api/content` route, but it only serves **3 hardcoded pages**. We need to upgrade it to a **fully dynamic endpoint** that serves all 20+ articles.

#### [MODIFY] [src/app/api/content/route.ts](file:///Users/saina/Developer/nowruz-wiki/src/app/api/content/route.ts)
Upgrade the existing API route to:
- Accept `?page=[slug]` and dynamically read the Markdown file from `content/articles/`.
- Accept `?format=markdown` to explicitly request raw text.
- Return the raw Markdown with the `Content-Type: text/markdown` header.
- Return a JSON index of all available articles when called without params (e.g. `GET /api/content`).

The resulting URLs will be predictable and bot-friendly:
```
GET /api/content?page=kuku-sabzi        → raw Markdown of the article
GET /api/content?page=ashe-reshteh     → raw Markdown of Ash-e Reshteh
GET /api/content                        → JSON index of all available articles
```

We'll also link these URLs from `llms.txt` so that AI agents know they exist.

---

### 6. Accessibility Fixes

#### [MODIFY] `src/app/[locale]/layout.tsx`
- Add a **Skip to Content** link at the very top of the `<body>` for screen readers.
- Add `id="main-content"` to the `<main>` element.

#### [MODIFY] `src/components/navbar.tsx`
- Fix the `navLinks` constant which still has the old `href: '/foods'` — update to `/nowruz-foods`.
- The mobile drawer lacks an `aria-modal` and `role="dialog"` attribute.
- The theme toggle button should announce the current theme to screen readers via dynamic `aria-label`.

#### [MODIFY] `src/components/content-page.tsx`
General semantic improvements: The hero `<section>` is missing `aria-label`.

---

## Verification Plan

### Automated Tests
- `npm run build` — Verify zero TypeScript/build errors.
- Open `/sitemap.xml` in browser and verify all 25+ URLs are listed.
- Open `/robots.txt` in browser and verify it declares the sitemap URL.
- Open `/llms.txt` in browser.
- In DevTools → Elements → `<head>`, verify OG tags are present.
- Use `JSON.stringify` to validate JSON-LD in browser.

### Manual Verification
- Paste any article URL into a Twitter/Discord preview to verify Open Graph unfurling.
- Run the homepage URL through [Google Rich Results Test](https://search.google.com/test/rich-results) to see if structured data is detected.
- Run a page through axe DevTools or the Chrome Accessibility tree inspector and verify no critical errors.
