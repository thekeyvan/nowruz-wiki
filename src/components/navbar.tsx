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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container flex h-14 items-center justify-between mx-auto px-6 md:px-12 max-w-5xl">
        {/* Brand */}
        <Link href="/" className="font-heading font-bold text-xl tracking-tight">
          Nowruz<span className="text-primary dark:text-secondary">.wiki</span>
        </Link>

        {/* Nav links + theme */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              {t('home')}
            </Link>
            <Link href="/history" className="hover:text-foreground transition-colors">
              {t('history')}
            </Link>
            <Link href="/haft-sin" className="hover:text-foreground transition-colors">
              {t('haft_sin')}
            </Link>
            <Link href="/sizdah-bedar" className="hover:text-foreground transition-colors">
              {t('sizdah_bedar')}
            </Link>
          </nav>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>
        </div>
      </div>
    </header>
  )
}
