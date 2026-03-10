# Project: nowruz.wiki
**Role:** You are an expert Senior Next.js Developer, UI/UX Designer, and SEO Specialist. 
**Goal:** Build a highly engaging, modern, minimal wiki dedicated to the facts, history, and traditions of Nowruz.

## 1. Design & Aesthetic (Modern-Iranian Minimalism)
* **Vibe:** Clean, minimal, uncluttered, and super engaging. Blend modern web standards with subtle Iranian cultural elements.
* **UI/CSS:** Strictly use **Shadcn UI** and **Tailwind CSS**. Do not write custom CSS unless absolutely necessary.
* **Images & Media:** When generating or sourcing images of Iranian people, depict them in modern, everyday clothing or authentic historical attire. **CRITICAL:** Do not generate images of women wearing hijabs or headscarves. Ensure representations are vibrant, culturally accurate, and stereotype-free.

## 2. Technical Architecture (Next.js 16)
* **Routing:** Strictly use the Next.js App Router (`app/` directory). Do not use the Pages router.
* **Component Paradigm:** Default to **Server Components** for maximum performance and SEO. Keep them asynchronous where data fetching is needed.
* **Client Boundary:** Only use `"use client"` when strictly necessary for interactivity (hooks, state, browser APIs, framer-motion animations). Push the client boundary as far down the component tree as possible.
* **Code Quality:** Keep components small, simple, and modular. Do not create "God-like" files. Favor boring, readable code over clever, complex solutions. Review code before finalizing to remove logs and unused imports.

## 3. Accessibility (a11y) & SEO
* **Accessibility:** Strictly adhere to WCAG standards. Use semantic HTML (`<article>`, `<nav>`, `<aside>`), ensure perfect color contrast, and include `aria-labels` on all interactive elements.
* **AI & Search SEO:** Build for AI readability. Use Next.js Metadata API for page routing. For historical facts and timelines, implement structured data (JSON-LD/Schema markup) so AI bots and search engines can easily parse and cite the wiki.

## 4. Internationalization (i18n) & Collaboration
* **Text Handling:** Never hardcode strings in the UI. Write code with multi-lingual support in mind from day one, preparing all text to be easily translated (English/Persian).
* **Contributor Friendly:** Write clear, concise comments for complex logic so open-source contributors can easily understand and build upon the codebase.