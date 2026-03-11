"use client"

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { NowruzCountdown } from '@/components/nowruz-countdown';
import { HafezOmen } from '@/components/hafez-omen';

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

export default function HomePage() {

  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (carouselRef.current) {
        // Calculate total scrollable width minus the viewport width
        setScrollRange(carouselRef.current.scrollWidth - window.innerWidth);
      }
    };
    updateScrollRange();
    
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);

  // Maps the vertical scroll from 0 to 1 into horizontal translation.
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <div className="min-h-screen">
      {/* ─── Hero Card ─── */}
      <section className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="relative w-full h-[600px] md:h-[700px] rounded-[32px] overflow-hidden shadow-2xl border border-black/5 dark:border-white/10 group">
          <Image
            src="/images/haft-seen-vertical.jpg"
            alt="A traditional Haft-Seen table set"
            fill
            className="object-cover scale-150"
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
            {/* Top text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-heading text-[5.5rem] md:text-[8.5rem] font-medium tracking-tight text-white leading-[0.9] mb-4 drop-shadow-lg">
                Nowruz
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-sm font-medium drop-shadow-md">
                Discovering the traditions and timeless spirit of the Persian New Year.
              </p>
            </motion.div>

            {/* Bottom Countdown Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-auto mt-auto md:mt-0 md:self-end"
            >
              <NowruzCountdown />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Haft-Sin Horizontal Scroll ─── */}
      <section ref={targetRef} className="relative h-[300vh] bg-background">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-0">
          
          {/* Section header */}
          <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 mb-8 md:mb-16 shrink-0 z-10">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">The Haft-Seen Table</p>
            <h2 className="font-heading text-5xl md:text-6xl font-semibold tracking-[-0.02em]">Seven &lsquo;S&rsquo;s</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mt-4 md:mt-6 max-w-2xl">
              Every Nowruz table tells a story through seven symbolic items — each starting with the letter &lsquo;S&rsquo; in Persian. Here&apos;s what they mean and why they matter.
            </p>
          </div>

          {/* Horizontal Scroller */}
          <motion.div 
            ref={carouselRef}
            style={{ x }} 
            className="flex gap-4 md:gap-6 px-6 md:px-12 w-max"
          >
            {haftSinItems.map((item) => (
              <div 
                key={item.name} 
                className="relative w-[200px] md:w-[220px] lg:w-[250px] aspect-[4/5] md:aspect-[3/4] rounded-[24px] md:rounded-[32px] overflow-hidden shrink-0 group border border-black/5 dark:border-white/5 shadow-lg bg-black/5"
              >
                <Image
                  src={item.photo}
                  alt={item.nameEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 200px, 250px"
                />
                
                {/* Dark Vignette over image bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                  <h3 className="font-heading text-3xl md:text-4xl text-white mb-2">{item.nameEn}</h3>
                  <p className="text-white/80 text-sm md:text-base font-medium">{item.name}</p>
                </div>
              </div>
            ))}
            
            {/* CTA Card at the end */}
            <div className="relative w-[200px] md:w-[220px] lg:w-[250px] aspect-[4/5] md:aspect-[3/4] rounded-[24px] md:rounded-[32px] overflow-hidden shrink-0 bg-primary/5 border border-primary/10 flex flex-col items-center justify-center p-8 text-center group cursor-pointer transition-colors hover:bg-primary/10">
              <Link href="/haft-sin" className="absolute inset-0 z-10">
                <span className="sr-only">See all items</span>
              </Link>
              <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-6 text-foreground max-w-[200px]">Explore all items</h3>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-md">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
            
            {/* Padding element for right spacing when fully scrolled */}
            <div className="w-[10vw] shrink-0" />
          </motion.div>
        </div>
      </section>

      {/* ─── Stories & Quote Grid ─── */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
            
            {/* Left Column: Stories Bento Grid (8 cols) */}
            <div className="lg:col-span-8 flex flex-col">
              {/* Header */}
              <div className="mb-6 md:mb-8">
                <p className="text-sm tracking-[0.2em] font-bold uppercase text-foreground">Stories</p>
              </div>

              {/* Grid */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                variants={{ show: { transition: { staggerChildren: 0.1 } } }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {stories.map((story, i) => (
                  <motion.div
                    key={story.href}
                    custom={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className={`relative rounded-[24px] overflow-hidden group shadow-md shadow-black/5 dark:shadow-black/20 border border-black/5 dark:border-white/5 ${
                      i === 0 
                        ? 'md:col-span-1 md:row-span-2 h-[450px] md:h-full' 
                        : 'col-span-1 row-span-1 aspect-[4/3] md:aspect-square'
                    }`}
                  >
                    <Link href={story.href} className="absolute inset-0 block">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes={i === 0 ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 25vw"}
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 lg:p-7">
                        <h3 className={`font-heading text-white tracking-tight drop-shadow-md leading-snug ${
                          i === 0 ? 'text-2xl md:text-3xl mb-3 font-semibold' : 'text-lg md:text-xl font-medium'
                        }`}>
                          {story.title}
                        </h3>
                        {i === 0 && (
                          <p className="text-sm text-white/80 leading-relaxed drop-shadow-sm">
                            {story.teaser}
                          </p>
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Quote (4 cols) */}
            <div className="lg:col-span-4 flex flex-col mt-4 lg:mt-0">
              {/* Header */}
              <div className="mb-6 md:mb-8 hidden lg:block">
                <p className="text-sm tracking-[0.2em] font-bold uppercase text-transparent select-none" aria-hidden="true">Spacer</p>
              </div>
              
              {/* Desktop Quote */}
              <div className="hidden lg:flex flex-1 flex-col justify-center items-center px-4">
                 <h3 className="font-heading text-[2.75rem] leading-[1.15] font-medium text-foreground text-center tracking-tight">
                   Discovering the traditions and timeless spirit of the Persian New Year.
                 </h3>
              </div>
              
              {/* Mobile Quote */}
              <div className="lg:hidden mt-12 mb-8">
                <p className="text-sm tracking-[0.2em] font-bold uppercase text-foreground mb-6">Quote</p>
                <h3 className="font-heading text-4xl leading-tight font-medium text-foreground text-center px-4">
                   Discovering the traditions and timeless spirit of the Persian New Year.
                </h3>
              </div>
            </div>

          </div>
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

      {/* ─── Hafez Omen Section ─── */}
      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <HafezOmen />
      </section>

    </div>
  );
}
