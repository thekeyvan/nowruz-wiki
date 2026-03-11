"use client"

import * as React from "react"
import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'history', href: '/history' },
  { key: 'haft_sin', href: '/haft-sin' },
  { key: 'chaharshanbe_suri', href: '/chaharshanbe-suri' },
  { key: 'foods', href: '/nowruz-foods' },
  { key: 'science', href: '/science' },
  { key: 'sizdah_bedar', href: '/sizdah-bedar' },
  { key: 'shahanshahi_calendar', href: '/shahanshahi-calendar' },
] as const

export function Navbar() {
  const t = useTranslations('Navigation')
  const { setTheme, theme } = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* 
        Step 1: Transparent Navbar. No background, no border.
        Absolute positioned so it sits on top of the hero or page content gently. 
      */}
      <header className="absolute top-0 left-0 right-0 z-50 pt-6 px-6 md:px-12 flex items-center justify-between pointer-events-none select-none max-w-7xl mx-auto w-full">
        
        {/* Left: Branding */}
        <div className="pointer-events-auto">
          <Link href="/" className="flex items-center shrink-0 group">
            <Image 
              src="/iran-flag-circle.svg" 
              alt="Lion and Sun Emblem" 
              width={32} 
              height={32}
              className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300 rounded-full"
            />
          </Link>
        </div>

        {/* Right: Actions (Theme Toggle + Hamburger Menu only) */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-foreground transition-all"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" strokeWidth={2} />
            <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-foreground transition-all"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={2.5} />
          </button>
        </div>
      </header>

      {/* Full-screen Dark Drawer Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-[16px] md:inset-[32px] z-[60] bg-background/95 backdrop-blur-3xl rounded-[32px] flex flex-col pt-6 px-6 md:px-12 pb-12 overflow-hidden shadow-2xl overflow-y-auto border border-border/10"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Image src="/iran-flag-circle.svg" alt="Lion and Sun" width={32} height={32} className="rounded-full" />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" strokeWidth={2.5} />
                </button>
              </div>

            <nav className="flex flex-col max-w-2xl mx-auto w-full">
              {navLinks.map(({ key, href }, i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.05 * i), duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={href}
                    className="block py-5 border-b border-border/10 text-3xl font-medium tracking-tight text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-auto max-w-2xl mx-auto w-full pt-12 text-center"
            >
                <p className="text-muted-foreground text-sm tracking-widest uppercase font-medium">Discovering the traditions and timeless spirit of the Persian New Year.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
