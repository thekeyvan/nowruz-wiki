"use client"

import * as React from "react"
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const t = useTranslations('Navigation')
  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4 md:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Lion and Sun Flag Placeholder - Since SVG is in public folder */}
          <Image src="/iran-flag.svg" alt="Lion and Sun Flag" width={48} height={24} className="h-8 w-auto rounded-sm" />
          <span className="hidden font-heading font-bold sm:inline-block text-2xl tracking-tight">
            Nowruz<span className="text-gradient-nowruz">.wiki</span>
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground">
              {t('home')}
            </Link>
            <Link href="/history" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t('history')}
            </Link>
            <Link href="/haft-sin" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t('haft_sin')}
            </Link>
            <Link href="/sizdah-bedar" className="transition-colors hover:text-foreground/80 text-foreground/60">
              {t('sizdah_bedar')}
            </Link>
          </nav>
          <nav className="flex items-center pl-4 border-l border-border gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
