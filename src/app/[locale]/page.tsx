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
      transition: { staggerChildren: 0.1 }
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  const haftSinItems = [
    { name: "Sabzeh", icon: SproutIcon, desc: "Rebirth" },
    { name: "Samanu", icon: PuddingIcon, desc: "Power & Strength" },
    { name: "Senjed", icon: AppleIcon, desc: "Love" }, // Using apple temporarily for senjed representation
    { name: "Seer", icon: GarlicIcon, desc: "Medicine" },
    { name: "Sib", icon: AppleIcon, desc: "Beauty & Health" },
    { name: "Somaq", icon: SumacIcon, desc: "Sunrise" },
    { name: "Serkeh", icon: VinegarIcon, desc: "Patience" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center min-h-[85vh] text-center px-4 relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        
        {/* Abstract background blobs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col items-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            🌾 Happy Nowruz 1405
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-sans tracking-tight max-w-4xl text-foreground">
            Celebrate the <span className="text-primary">Persian</span> New Year
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            {t('description')} Explore the ancient traditions of rebirth, love, and spring.
          </p>
          <div className="flex gap-4">
            <Link href="/haft-sin">
              <Button size="lg" className="rounded-full font-semibold text-lg px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                {t('explore')}
              </Button>
            </Link>
            <Link href="/history">
              <Button variant="outline" size="lg" className="rounded-full font-semibold text-lg px-8 h-14 border-2 border-primary/20 hover:bg-primary/5">
                Read History
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Haft-sin Preview Section */}
      <section className="w-full py-24 bg-background container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The <span className="text-secondary">Haft-sin</span> Table</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Seven symbolic items starting with the letter &apos;S&apos; (Sin), each representing a hope for the new year.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {haftSinItems.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
            </motion.div>
          ))}
          {/* 8th item (Sekkeh - optional but nice for grid) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
              <CoinIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-1">Sekkeh</h3>
            <p className="text-sm text-muted-foreground text-center">Wealth & Prosperity</p>
          </motion.div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link href="/haft-sin" className="inline-flex items-center group">
            <Button variant="link" className="text-primary text-lg font-medium group">
              Learn more about Haft-sin
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
