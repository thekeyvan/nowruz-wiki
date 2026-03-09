"use client"

import * as React from "react"
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const t = useTranslations('Navigation')
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between mx-auto px-6 md:px-12 max-w-6xl">
        {/* Brand */}
        <Link href="/" className="font-heading font-semibold text-2xl tracking-tight">
          Nowruz<span className="text-primary">.wiki</span>
        </Link>

        {/* Nav links + theme */}
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-foreground transition-colors duration-200">
              {t('home')}
            </Link>
            <Link href="/history" className="hover:text-foreground transition-colors duration-200">
              {t('history')}
            </Link>
            <Link href="/haft-sin" className="hover:text-foreground transition-colors duration-200">
              {t('haft_sin')}
            </Link>
            <Link href="/sizdah-bedar" className="hover:text-foreground transition-colors duration-200">
              {t('sizdah_bedar')}
            </Link>
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
      </div>
    </header>
  )
}
