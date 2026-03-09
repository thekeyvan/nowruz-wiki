"use client"

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import {
  SabzehIllustration,
  SamanuIllustration,
  SenjedIllustration,
  SeerIllustration,
  SibIllustration,
  SomaqIllustration,
  SerkehIllustration,
} from '@/components/haft-sin-illustrations';

const haftSinItems = [
  { name: "Sabzeh",  desc: "Rebirth & Renewal",     color: "bg-emerald-50 dark:bg-emerald-950/40",  Illustration: SabzehIllustration },
  { name: "Samanu",  desc: "Power & Strength",       color: "bg-amber-50 dark:bg-amber-950/40",      Illustration: SamanuIllustration },
  { name: "Senjed",  desc: "Love & Affection",       color: "bg-yellow-50 dark:bg-yellow-950/40",    Illustration: SenjedIllustration },
  { name: "Seer",    desc: "Medicine & Health",      color: "bg-stone-50 dark:bg-stone-950/40",      Illustration: SeerIllustration },
  { name: "Sib",     desc: "Beauty & Health",        color: "bg-orange-50 dark:bg-orange-950/40",    Illustration: SibIllustration },
  { name: "Somaq",   desc: "Color of Sunrise",       color: "bg-red-50 dark:bg-red-950/40",          Illustration: SomaqIllustration },
  { name: "Serkeh",  desc: "Age & Patience",         color: "bg-teal-50 dark:bg-teal-950/40",        Illustration: SerkehIllustration },
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
        <div className="container mx-auto px-6 md:px-12 pt-20 pb-20 md:pt-32 md:pb-28 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.p
                custom={0} variants={fade}
                className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-7"
              >
                Persian New Year · 1404
              </motion.p>

              <motion.h1
                custom={1} variants={fade}
                className="font-heading text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight text-foreground mb-7"
              >
                The art<br />
                of <span className="text-primary dark:text-secondary italic">spring.</span>
              </motion.h1>

              <motion.p
                custom={2} variants={fade}
                className="text-lg text-muted-foreground max-w-sm leading-relaxed font-light mb-10"
              >
                {t('description')} An open encyclopedia of a celebration 3,000 years in the making.
              </motion.p>

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

            {/* Right: Lion and Sun flag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Soft glow behind the flag */}
              <div className="absolute inset-0 bg-primary/8 dark:bg-secondary/8 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-xl">
                <Image
                  src="/iran-flag.svg"
                  alt="Lion and Sun — Imperial Flag of Iran"
                  width={500}
                  height={300}
                  className="w-full h-auto max-h-72 object-cover"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Haft-sin Grid ─── */}
      <section className="border-b border-border/50">
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-5xl">

          <div className="flex items-baseline justify-between mb-14">
            <div>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">The seven symbols</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">Haft-sin</h2>
            </div>
            <Link href="/haft-sin" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block">
              View all →
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {haftSinItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={fade}
                whileHover={{ y: -4 }}
                className={`group flex flex-col items-center gap-3 p-6 rounded-2xl ${item.color} border border-border/30 transition-all duration-300 cursor-default`}
              >
                <item.Illustration className="w-16 h-16 drop-shadow-sm" />
                <div className="text-center">
                  <p className="font-heading font-bold text-base text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Pull quote ─── */}
      <section>
        <div className="container mx-auto px-6 md:px-12 py-24 max-w-5xl">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-[clamp(1.6rem,4vw,3.5rem)] font-medium leading-snug text-foreground/70 max-w-3xl">
              &ldquo;Nowruz is not just a new year — it is a return to the origins of time.&rdquo;
            </p>
            <p className="mt-6 text-sm tracking-widest uppercase text-muted-foreground">
              — Ancient Persian tradition
            </p>
          </motion.blockquote>
        </div>
      </section>

    </div>
  );
}
