# Nowruz Wiki 🌾

An open-source, multi-lingual web application dedicated to the history, traditions, and celebrations of the Persian New Year.

![Nowruz Wiki](public/iran-flag.jpg) *(Lion and Sun Flag)*

## Project Plan & Roadmap 🗺️

Our goal is to build a beautiful, fast, and informative platform for people around the world to learn about Nowruz.

### ✅ Phase 1 (Completed)
- **Scaffolding & Architecture**: Initialize Next.js 16 App Router.
- **Design System**: Establish a premium UI using Shadcn and Tailwind CSS V4, themed with the Nowruz palette (Green, Gold, Red, Cream). Build custom SVG React components for the Haft-sin items with Framer Motion animations.
- **Internationalization (i18n)**: Implement a robust `next-intl` foundation. Set up the English (`en`) locale structure as the baseline.
- **AI Accessibility**: Build a dedicated API route (`/api/content?page=[name]`) that outputs clean, semantic Markdown data for AI web scrapers.
- **Production Build**: Fix all TypeScript strict type checks and ESLint warnings.

### ⏳ Phase 2 (Coming Soon)
- **Content Expansion**: Write detailed markdown articles for the History, Traditions, and Sizdah Bedar pages.
- **Multi-lingual Support**: Add Persian/Farsi (RTL) and other LTR languages (French, Spanish, Dutch) simply by extending the JSON dictionaries.
- **Dynamic Content Management**: Consider migrating from static markdown strings to an integrated MDX system for richer content formatting.

---

## Tech Stack 🛠️

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Theming**: `next-themes` (Dark/Light mode support)

---

## Getting Started 💻

To run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thek1/nowruz.wiki.git
   cd nowruz.wiki
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to explore the traditions.

## Deployment 🚀

This project is optimized for deployment on [Vercel](https://vercel.com/) with a custom domain managed by Cloudflare.

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Next.js framework and handle the build process.
3. Configure your Cloudflare DNS with the provided Vercel A/CNAME records.

---
*Built with ❤️ for the Nowruz community.*
