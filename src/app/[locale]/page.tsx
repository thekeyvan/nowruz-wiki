"use client"

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { NowruzCountdown } from '@/components/nowruz-countdown';

/* ── Seven S items for the vertical magazine scroll ── */
const haftSinItems = [
  {
    name: "Sabzeh", nameEn: "Wheatgrass",
    tagline: "Fresh starts. New growth.",
    photo: "/haft-sin/photos/sabzeh.png",
  },
  {
    name: "Samanoo", nameEn: "Sweet Pudding",
    tagline: "Sweetness you earned — together.",
    photo: "/haft-sin/photos/samanoo.png",
  },
  {
    name: "Senjed", nameEn: "Oleaster",
    tagline: "Love that makes the heart flutter.",
    photo: "/haft-sin/photos/senjed.png",
  },
  {
    name: "Sir", nameEn: "Garlic",
    tagline: "Your ancient guardian of health.",
    photo: "/haft-sin/photos/sir.png",
  },
  {
    name: "Sib", nameEn: "Apple",
    tagline: "Beauty, health — the fruit of creation.",
    photo: "/haft-sin/photos/sib.png",
  },
  {
    name: "Somagh", nameEn: "Sumac",
    tagline: "The color of sunrise. Light wins.",
    photo: "/haft-sin/photos/somagh.png",
  },
  {
    name: "Sonbol", nameEn: "Hyacinth",
    tagline: "Spring's perfume, in full bloom.",
    photo: "/haft-sin/photos/sonbol.png",
  },
];

/* ── Story cards linking to content pages ── */
const stories = [
  {
    title: "3,000 Years of Spring",
    teaser: "How a 3,000-year-old tradition became one of the biggest new year celebrations on the planet.",
    href: "/history" as const,
    image: "/images/page-headers/history.png",
  },
  {
    title: "Jump Over Fire",
    teaser: "The night the streets light up with bonfires — and everyone leaps.",
    href: "/chaharshanbe-suri" as const,
    image: "/images/page-headers/chaharshanbe.png",
  },
  {
    title: "A Feast Worth Waiting For",
    teaser: "Herbed rice, noodle stews, and enough sweets to last 13 days.",
    href: "/foods" as const,
    image: "/images/page-headers/foods.png",
  },
  {
    title: "The Exact Second",
    teaser: "Why Nowruz starts at a different second every single year — the fascinating science.",
    href: "/science" as const,
    image: "/images/page-headers/science.png",
  },
  {
    title: "Day 13: Back to Nature",
    teaser: "Tie a knot, make a wish, and release your Sabzeh back to the rivers.",
    href: "/sizdah-bedar" as const,
    image: "/images/page-headers/sizdah-bedar.png",
  },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HomePage() {
  const t = useTranslations('Index');

  return (
    <div className="min-h-screen">
      <NowruzCountdown />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-32 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.p
                custom={0} variants={fade}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium"
              >
                Nowruz 1405
              </motion.p>

              <motion.h1
                custom={1} variants={fade}
                className="font-heading text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-foreground mb-8"
              >
                Nowruz
              </motion.h1>

              <motion.p
                custom={2} variants={fade}
                className="text-lg text-muted-foreground max-w-md leading-relaxed font-light mb-12"
              >
                The Persian New Year — a celebration of light, nature, and fresh beginnings that&apos;s been going strong for over 3,000&nbsp;years.
              </motion.p>

              <motion.div custom={3} variants={fade} className="flex flex-wrap gap-8 items-center">
                <Link
                  href="/haft-sin"
                  className="group inline-flex items-center gap-2.5 text-sm font-medium tracking-wide uppercase text-primary dark:text-primary hover:gap-4 transition-all duration-300"
                >
                  {t('explore')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/history"
                  className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Read the history
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[540px] shadow-2xl shadow-black/10 dark:shadow-black/40">
                <Image
                  src="/images/haft-seen-vertical.jpg"
                  alt="A traditional Haft-Seen table set for Nowruz"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Haft-Sin Vertical Magazine ─── */}
      <section className="py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-24 md:mb-32"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">The Haft-Seen Table</p>
            <h2 className="font-heading text-5xl md:text-6xl font-semibold tracking-[-0.02em] mb-6">Seven &lsquo;S&rsquo;s</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Every Nowruz table tells a story through seven symbolic items — each starting with the letter &lsquo;S&rsquo; in Persian. Here&apos;s what they mean and why they matter.
            </p>
          </motion.div>

          {/* Alternating rows */}
          <div className="space-y-24 md:space-y-40">
            {haftSinItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}
              >
                {/* Image */}
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-black/5 dark:shadow-black/30">
                    <Image
                      src={item.photo}
                      alt={item.nameEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Text */}
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-2">
                    {item.nameEn}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 tracking-wide font-medium">
                    {item.name}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed font-light">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA to full page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 md:mt-32 text-center"
          >
            <Link
              href="/haft-sin"
              className="group inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase text-primary hover:gap-5 transition-all duration-300"
            >
              See all items &amp; their full stories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ─── Stories to Explore ─── */}
      <section className="py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-16 md:mb-20"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Keep Exploring</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-[-0.02em]">Stories to Explore</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {stories.map((story, i) => (
              <motion.div
                key={story.href}
                custom={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <Link href={story.href} className="group block">
                  <div className={`relative rounded-3xl overflow-hidden ${i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'} shadow-lg shadow-black/5 dark:shadow-black/30`}>
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                      <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2 drop-shadow-md">
                        {story.title}
                      </h3>
                      <p className="text-sm text-white/80 leading-relaxed max-w-md drop-shadow-sm">
                        {story.teaser}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-white/70 mt-4 group-hover:text-white group-hover:gap-3 transition-all duration-300">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── Pull Quote ─── */}
      <section>
        <div className="container mx-auto px-6 md:px-12 py-32 md:py-48 max-w-5xl">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-heading text-[clamp(1.5rem,4vw,3rem)] font-medium leading-snug text-foreground/50">
              &ldquo;Nowruz is not just a new year — it&apos;s a return to the origins of time.&rdquo;
            </p>
            <p className="mt-8 text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
              — Ancient Persian tradition
            </p>
          </motion.blockquote>
        </div>
      </section>

    </div>
  );
}
