"use client"

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

const haftSinItems = [
  { persian: "سبزه", name: "Sabzeh", desc: "Rebirth" },
  { persian: "سمنو", name: "Samanu", desc: "Power" },
  { persian: "سنجد", name: "Senjed", desc: "Love" },
  { persian: "سیر",  name: "Seer",   desc: "Medicine" },
  { persian: "سیب",  name: "Sib",    desc: "Beauty" },
  { persian: "سماق", name: "Somaq",  desc: "Patience" },
  { persian: "سرکه", name: "Serkeh", desc: "Age" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

export default function HomePage() {
  const t = useTranslations('Index');

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="border-b border-border/50">
        <div className="container mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-28 max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Overline */}
            <motion.p
              custom={0}
              variants={fade}
              className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-8 font-sans"
            >
              نوروز &nbsp;·&nbsp; Persian New Year &nbsp;·&nbsp; 1404
            </motion.p>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fade}
              className="font-heading text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.95] tracking-tight text-foreground mb-8"
            >
              The art of<br />
              <span className="text-primary dark:text-secondary italic">spring.</span>
            </motion.h1>

            {/* Body */}
            <motion.p
              custom={2}
              variants={fade}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light mb-10"
            >
              {t('description')} An open encyclopedia of a celebration 3,000 years in the making.
            </motion.p>

            {/* CTAs — text links, not buttons */}
            <motion.div custom={3} variants={fade} className="flex flex-wrap gap-8 items-center">
              <Link
                href="/haft-sin"
                className="group inline-flex items-center gap-2 text-base font-medium text-primary dark:text-secondary hover:gap-4 transition-all duration-200"
              >
                {t('explore')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/history"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Read the history
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Haft-sin ─── */}
      <section className="border-b border-border/50">
        <div className="container mx-auto px-6 md:px-12 py-20 max-w-5xl">
          {/* Section header */}
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
              Haft-sin
            </h2>
            <Link
              href="/haft-sin"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block"
            >
              View all →
            </Link>
          </div>

          {/* Table-style list */}
          <div className="divide-y divide-border/50">
            {haftSinItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                variants={fade}
                className="group grid grid-cols-[2rem_1fr_1fr_auto] md:grid-cols-[3rem_1fr_1fr_auto] items-center gap-4 py-5 cursor-default"
              >
                {/* Index */}
                <span className="text-xs tabular-nums text-muted-foreground/50 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Persian */}
                <span className="font-heading text-2xl md:text-3xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                  {item.persian}
                </span>
                {/* Name */}
                <span className="font-sans text-base font-medium text-foreground/60 group-hover:text-foreground transition-colors">
                  {item.name}
                </span>
                {/* Meaning */}
                <span className="text-sm text-muted-foreground text-right">
                  {item.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pull quote ─── */}
      <section>
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="font-heading text-[clamp(1.6rem,4vw,3.5rem)] font-medium leading-snug text-foreground/70 max-w-3xl">
              &ldquo;Nowruz is not just a new year — it is a return to the origins of time.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground font-sans">
              — Ancient Persian tradition
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
