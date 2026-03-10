import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="border-t border-border/30">
      <div className="container flex flex-col gap-4 md:flex-row items-center justify-between mx-auto px-6 md:px-12 py-8 max-w-6xl">
        <p className="text-sm text-muted-foreground font-light">
          Open source &amp; community driven — Nowruz 1405
        </p>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors duration-200">
            {t('home')}
          </Link>
          <a
            href="https://github.com/thekeyvan/nowruz-wiki"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
