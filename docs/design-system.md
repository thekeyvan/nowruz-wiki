# Nowruz Wiki — Design System

## Typography

| Role | Font | Weight | Tracking |
|------|------|--------|----------|
| Hero titles | Cormorant Garamond (`--font-cormorant`) | 600 | -0.03em |
| Section headers | Cormorant Garamond | 600 | -0.02em |
| Body text | Inter (`--font-inter`) | 300–400 | normal |
| Labels / caps | Inter | 500 | 0.3em, uppercase |
| Code / timers | SF Mono / system mono | 700 | 0.08em |

## Spacing

| Context | Value |
|---------|-------|
| Between major sections | `py-20 md:py-32` to `py-24 md:py-40` |
| Container max-width | `max-w-7xl` (1280px) |
| Container padding | `px-6 md:px-16` |
| Card gaps | `gap-5` |
| Text to image | `gap-6` to `gap-10` |

## Colors

- **Background:** `bg-background` (system light/dark)
- **Primary accent:** Emerald (`emerald-500` / `emerald-600`)
- **Text primary:** `text-foreground` (adapts to theme)
- **Text secondary:** `text-muted-foreground`
- **Card overlays:** `from-black/70 via-black/20 to-transparent`
- **Glass surfaces:** `bg-white/10 backdrop-blur-2xl border-white/15`

## Border Radius

| Element | Radius |
|---------|--------|
| Large cards | `rounded-[24px]` |
| Small cards | `rounded-2xl` (16px) |
| Buttons / pills | `rounded-full` or `rounded-xl` |
| Countdown units | `rounded-lg` |

## Animations (Framer Motion)

- **Fade up:** `{ opacity: 0, y: 30 }` → `{ opacity: 1, y: 0 }`
- **Ease curve:** `[0.16, 1, 0.3, 1]` (Apple's bezier)
- **Duration:** 0.6s–0.8s for elements, 1.0s–1.2s for hero
- **Stagger:** 0.08s–0.1s between children
- **Image hover:** `scale(1.05)` over 700ms
- **Link hover:** `gap` increase for arrows, color transition 300ms

## Image Rules

> **CRITICAL:** No hijab in any generated images. Depict modern Iranians in western clothing, similar to Iranian diaspora in Canada or Europe. Use authentic, candid photography style — not overly polished stock photos.

- Hero images: cinematic, editorial, 8K style
- Item photos: product photography on neutral background
- Cards: full-bleed with gradient overlays for text readability
- Format: PNG for generated images, JPG for photographs

## Component Patterns

### Content Page Layout
Use the shared `ContentPage` component for all subpages:
```tsx
<ContentPage
  headerLabel="Section Label"
  title="Page Title"
  subtitle="Description text"
  heroImage="/images/page-headers/filename.png"
  heroImageAlt="Alt text"
>
  <ContentSection>{/* ... */}</ContentSection>
</ContentPage>
```

### Card Pattern
Full-bleed image card with gradient overlay and bottom-aligned text:
```tsx
<div className="relative rounded-[24px] overflow-hidden aspect-[4/3]">
  <Image src={...} fill className="object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
  <div className="absolute bottom-0 p-6">
    <h3 className="font-heading text-2xl text-white">{title}</h3>
  </div>
</div>
```
