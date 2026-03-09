import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="border-t border-border/50 py-8 md:py-0 bg-muted/20">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-3">
          <Image
            src="/iran-flag.svg"
            alt="Lion and Sun Flag"
            width={96}
            height={24}
            className="h-6 w-auto rounded-sm grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
          <p className="text-center text-sm text-muted-foreground md:text-left">
            Built for everyone to learn about Nowruz.{" "}
            <span className="text-primary/70 dark:text-secondary/70 font-medium">Open source & community driven.</span>
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('home')}
          </Link>
          <a
            href="https://github.com/thekeyvan/nowruz-wiki"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted-foreground/50 text-xs">نوروز ۱۴۰۴</span>
        </div>
      </div>
    </footer>
  )
}
