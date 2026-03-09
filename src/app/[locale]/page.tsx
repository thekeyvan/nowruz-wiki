"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

const haftSinItems = [
  {
    name: "Sabzeh", nameEn: "Wheatgrass", desc: "Rebirth & Renewal", icon: "/haft-sin/fill/sabzeh.png",
    reason: "Sabzeh represents the rebirth of nature. Grown from wheat, lentil, or barley seeds, its green sprouts symbolize the renewal of life that comes with spring — a reminder that after every winter, growth returns."
  },
  {
    name: "Samanoo", nameEn: "Sweet Pudding", desc: "Power & Strength", icon: "/haft-sin/fill/samanoo.png",
    reason: "Samanoo is a sweet paste made from germinated wheat. It symbolizes affluence, power, and the sweetness of life. Preparing it is a communal ritual — families gather and stir it through the night while singing and making wishes."
  },
  {
    name: "Senjed", nameEn: "Oleaster", desc: "Love & Affection", icon: "/haft-sin/fill/senjed.png",
    reason: "The dried fruit of the oleaster tree, Senjed symbolizes love and affection. Its fragrant blossoms are said to make the heart flutter, representing the intoxication of love and the wisdom of the heart over the mind."
  },
  {
    name: "Sir", nameEn: "Garlic", desc: "Medicine & Health", icon: "/haft-sin/fill/sir.png",
    reason: "Sir (garlic) represents medicine and good health. In ancient Persian tradition, garlic was believed to ward off evil and illness, serving as a natural protector of the body against disease."
  },
  {
    name: "Sib", nameEn: "Apple", desc: "Beauty & Health", icon: "/haft-sin/fill/sib.png",
    reason: "The apple symbolizes beauty, health, and the Earth itself. In Persian mythology, the apple is the fruit of creation — placing it on the Haft-Seen is a wish for health and natural beauty in the coming year."
  },
  {
    name: "Somagh", nameEn: "Sumac", desc: "Color of Sunrise", icon: "/haft-sin/fill/somagh.png",
    reason: "Somagh's deep crimson color represents the sunrise — the moment light triumphs over darkness. It symbolizes the victory of good over evil, a core theme of Nowruz rooted in Zoroastrian philosophy."
  },
  {
    name: "Sonbol", nameEn: "Hyacinth", desc: "Arrival of Spring", icon: "/haft-sin/fill/sonbol.png",
    reason: "The hyacinth flower announces the arrival of spring with its vibrant color and intoxicating fragrance. Its presence on the Haft-Seen fills the room with the scent of the new season, welcoming nature's rebirth."
  },
  {
    name: "Sekke", nameEn: "Coins", desc: "Prosperity & Wealth", icon: "/haft-sin/fill/sekke.png",
    reason: "Coins represent prosperity, wealth, and financial abundance. Placing them on the Haft-Seen is a wish for economic fortune in the new year — a hope that the year ahead brings material comfort."
  },
  {
    name: "Mahi", nameEn: "Goldfish", desc: "Life & Movement", icon: "/haft-sin/fill/mahi.png",
    reason: "The goldfish swimming in its bowl symbolizes life, movement, and progress. Its constant motion represents the forward flow of time and vitality — a living reminder to keep moving into the new year."
  },
  {
    name: "Ayeneh", nameEn: "Mirror", desc: "Reflection & Truth", icon: "/haft-sin/fill/ayeneh.png",
    reason: "The mirror reflects the sky and light, symbolizing self-reflection, honesty, and clarity. Families gather around it at the moment of the new year to see their reflection — a tradition of looking inward before looking forward."
  },
  {
    name: "Tokhmeh", nameEn: "Painted Eggs", desc: "Fertility & Creation", icon: "/haft-sin/fill/tokhme-morgh-rangi.png",
    reason: "Decorated eggs symbolize fertility, creation, and the potential for new life. Each painted egg represents a member of the family, and their presence on the table is a blessing for the birth of new ideas and new beginnings."
  },
];

const monuments = [
  { name: "Shahyad Tower", file: "Shahyad Tower" },
  { name: "Tomb of Hafez", file: "Tomb of Hafez" },
  { name: "Tomb of Saadi", file: "Tomb of Saadi" },
  { name: "University of Tehran", file: "University of Tehran" },
  { name: "Amir Chakhmaq", file: "Amir Chakhmaq Complex" },
  { name: "Tomb of Baba Taher", file: "Tomb of Baba Taher" },
  { name: "Mausoleum of Poets", file: "Mausoleum of Poets" },
  { name: "Fire Temple", file: "Zoroastrian Fire Temple" },
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
  const [selectedItem, setSelectedItem] = useState<typeof haftSinItems[0] | null>(null);

  return (
    <div className="min-h-screen">

      {/* ─── Apple-style Modal ─── */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div
                className="relative bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl max-w-md w-full p-10 pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Content */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 flex items-center justify-center mb-6">
                    <Image
                      src={selectedItem.icon}
                      alt={selectedItem.name}
                      width={96}
                      height={96}
                      className="object-contain drop-shadow-md"
                    />
                  </div>

                  <h3 className="font-heading text-3xl font-semibold text-foreground mb-1">
                    {selectedItem.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6 tracking-wide">
                    {selectedItem.nameEn} · {selectedItem.desc}
                  </p>

                  <div className="w-10 h-px bg-border mb-6" />

                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {selectedItem.reason}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-32 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.p
                custom={0} variants={fade}
                className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 font-medium"
              >
                Nowruz 1404
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
                {t('description')} An open encyclopedia of a celebration 3,000&nbsp;years in the making.
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

            {/* Right: real Haft-Seen photo */}
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

      {/* ─── Haft-Sin Grid ─── */}
      <section>
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 max-w-6xl">

          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">The Haft-Seen Table</p>
              <h2 className="font-heading text-5xl md:text-6xl font-semibold tracking-[-0.02em]">Seven &lsquo;S&rsquo;s &amp; more</h2>
            </div>
            <Link href="/haft-sin" className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden md:block font-medium">
              View all →
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {haftSinItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={fade}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedItem(item)}
                className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative w-16 h-16 flex items-center justify-center overflow-hidden flex-shrink-0">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="object-contain drop-shadow-sm max-w-full max-h-full"
                  />
                </div>
                <div className="text-center">
                  <p className="font-heading font-semibold text-lg text-foreground leading-tight">{item.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 tracking-wide uppercase">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Iran Monuments ─── */}
      <section className="border-t border-border/50">
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 max-w-6xl">

          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">Cultural Heritage</p>
            <h2 className="font-heading text-5xl md:text-6xl font-semibold tracking-[-0.02em]">Monuments of Iran</h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10"
          >
            {monuments.map((m, i) => (
              <motion.div
                key={m.name}
                custom={i}
                variants={fade}
                className="group flex flex-col items-center gap-4"
              >
                <div className="relative w-full aspect-[4/3] flex items-center justify-center p-6 rounded-2xl bg-muted/50 group-hover:bg-muted transition-colors duration-300 overflow-hidden">
                  <Image
                    src={`/iran-monuments/${m.file}.svg`}
                    alt={m.name}
                    width={160}
                    height={120}
                    className="object-contain max-h-28 w-auto opacity-75 group-hover:opacity-100 transition-opacity duration-300 dark:invert dark:opacity-60 dark:group-hover:opacity-90"
                  />
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium text-center">{m.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Pull Quote ─── */}
      <section>
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32 max-w-6xl">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <div className="flex items-start gap-6 md:gap-10">
              <Image
                src="/haft-sin/fill/sonbol.png"
                alt="Sonbol — Hyacinth"
                width={56}
                height={56}
                className="hidden md:block opacity-40 flex-shrink-0 mt-2"
              />
              <div>
                <p className="font-heading text-[clamp(1.5rem,4vw,3rem)] font-medium leading-snug text-foreground/60">
                  &ldquo;Nowruz is not just a new year — it is a return to the origins of time.&rdquo;
                </p>
                <p className="mt-6 text-xs tracking-[0.25em] uppercase text-muted-foreground font-medium">
                  — Ancient Persian tradition
                </p>
              </div>
            </div>
          </motion.blockquote>
        </div>
      </section>

    </div>
  );
}
