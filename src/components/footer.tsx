import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/iran-flag.svg" alt="Lion and Sun Flag" width={96} height={24} className="h-6 w-auto rounded-sm grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built for everyone to learn about Nowruz. Open source and community driven.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            {t('home')}
          </Link>
          <a
            href="https://github.com/thek1/nowruz.wiki"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
