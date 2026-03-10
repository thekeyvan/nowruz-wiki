"use client"

import * as React from "react"
import { Link, usePathname } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'history', href: '/history' },
  { key: 'haft_sin', href: '/haft-sin' },
  { key: 'chaharshanbe_suri', href: '/chaharshanbe-suri' },
  { key: 'foods', href: '/foods' },
  { key: 'science', href: '/science' },
  { key: 'sizdah_bedar', href: '/sizdah-bedar' },
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
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="container flex h-16 items-center justify-between mx-auto px-6 md:px-12 max-w-6xl">
          {/* Brand */}
          <Link href="/" className="font-heading font-semibold text-2xl tracking-tight shrink-0">
            Nowruz<span className="text-primary">.wiki</span>
          </Link>

          {/* Desktop Nav + theme */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <nav className="flex items-center gap-6">
              {navLinks.map(({ key, href }) => (
                <Link
                  key={key}
                  href={href}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {t(key)}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute top-2 left-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute top-2 left-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </button>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-all duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-16 inset-x-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 transition-all duration-300 ease-in-out ${mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
      >
        <nav className="container mx-auto px-6 max-w-6xl py-6 flex flex-col gap-1">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-base font-medium text-muted-foreground hover:text-foreground py-3 px-4 rounded-xl hover:bg-muted/50 transition-all duration-200"
            >
              {t(key)}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
