"use client"

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { AppleIcon, GarlicIcon, CoinIcon, SumacIcon, SproutIcon, PuddingIcon, VinegarIcon } from '@/components/haft-sin-icons';

export default function HomePage() {
  const t = useTranslations('Index');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
  };

  const haftSinItems = [
    { name: "Sabzeh", icon: SproutIcon, desc: "Rebirth & Renewal", color: "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950/50 dark:text-emerald-400" },
    { name: "Samanu", icon: PuddingIcon, desc: "Power & Strength", color: "bg-amber-50 text-amber-700 group-hover:bg-amber-600 group-hover:text-white dark:bg-amber-950/50 dark:text-amber-400" },
    { name: "Senjed", icon: AppleIcon, desc: "Love & Affection", color: "bg-rose-50 text-rose-700 group-hover:bg-rose-600 group-hover:text-white dark:bg-rose-950/50 dark:text-rose-400" },
    { name: "Seer", icon: GarlicIcon, desc: "Medicine & Health", color: "bg-purple-50 text-purple-700 group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-950/50 dark:text-purple-400" },
    { name: "Sib", icon: AppleIcon, desc: "Beauty & Health", color: "bg-red-50 text-red-700 group-hover:bg-red-600 group-hover:text-white dark:bg-red-950/50 dark:text-red-400" },
    { name: "Somaq", icon: SumacIcon, desc: "Color of Sunrise", color: "bg-orange-50 text-orange-700 group-hover:bg-orange-600 group-hover:text-white dark:bg-orange-950/50 dark:text-orange-400" },
    { name: "Serkeh", icon: VinegarIcon, desc: "Age & Patience", color: "bg-yellow-50 text-yellow-700 group-hover:bg-yellow-600 group-hover:text-white dark:bg-yellow-950/50 dark:text-yellow-400" },
    { name: "Sekkeh", icon: CoinIcon, desc: "Wealth & Prosperity", color: "bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white dark:bg-teal-950/50 dark:text-teal-400" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-[90vh] text-center px-4 relative overflow-hidden">

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-primary/8 rounded-full filter blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-[400px] h-[400px] bg-secondary/15 rounded-full filter blur-3xl opacity-70 animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full filter blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="z-10 flex flex-col items-center max-w-5xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm"
          >
            <span className="text-base">🌸</span>
            <span className="font-heading font-semibold tracking-wide">Happy Nowruz 1404</span>
            <span className="text-base">🌿</span>
          </motion.div>

          {/* Main heading */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-[1.05] text-foreground">
            Celebrate the{" "}
            <span className="text-gradient-nowruz italic">
              Persian
            </span>
            {" "}New Year
          </h1>

          {/* Persian subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-heading text-2xl md:text-3xl text-primary/70 dark:text-secondary/70 mb-4 italic tracking-wide"
          >
            نوروز مبارک
          </motion.p>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-light">
            {t('description')} Explore the ancient traditions of rebirth, love, and the arrival of spring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/haft-sin">
              <Button
                size="lg"
                className="rounded-full font-semibold text-base px-10 h-13 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                {t('explore')} ✦
              </Button>
            </Link>
            <Link href="/history">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full font-semibold text-base px-10 h-13 border-2 border-primary/30 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
              >
                Read the History
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Haft-sin Section */}
      <section className="w-full py-28 container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary/60 dark:text-secondary/60 mb-3">The Seven Symbols</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-5 tracking-tight">
            The <span className="text-gradient-nowruz italic">Haft-sin</span> Table
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl font-light leading-relaxed">
            Seven symbolic items starting with the letter &apos;S&apos; (سین), each representing a hope for the new year.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {haftSinItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.04, y: -6 }}
              className="flex flex-col items-center p-6 rounded-3xl bg-card border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${item.color}`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground text-center leading-snug">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/haft-sin" className="inline-flex items-center group">
            <Button variant="link" className="text-primary dark:text-secondary text-base font-medium gap-2 group">
              Learn more about Haft-sin
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Quote / Culture Section */}
      <section className="w-full py-20 bg-primary/5 dark:bg-primary/10 border-y border-primary/10">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-heading text-3xl md:text-5xl font-medium italic text-foreground/80 leading-snug mb-6">
              &ldquo;Spring is nature&apos;s way of saying, &lsquo;Let&apos;s party!&rsquo;&rdquo;
            </p>
            <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">— A Nowruz spirit</span>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
}
