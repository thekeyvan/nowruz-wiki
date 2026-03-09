import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col gap-3 md:flex-row items-center justify-between mx-auto px-6 md:px-12 py-6 max-w-5xl">
        <p className="text-sm text-muted-foreground">
          Open source &amp; community driven. Nowruz 1404.
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            {t('home')}
          </Link>
          <a
            href="https://github.com/thekeyvan/nowruz-wiki"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
