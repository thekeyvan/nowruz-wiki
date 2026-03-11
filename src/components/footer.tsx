import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Github } from 'lucide-react';

export function Footer() {
  const t = useTranslations('Navigation');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FAFAFA] dark:bg-[#0A0A0A] border-t border-border/40 pb-20 md:pb-8 pt-16 md:pt-24 mt-auto">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24">
          
          {/* Brand & Description (Col 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 transition-opacity hover:opacity-80">
              <Image 
                src="/iran-flag-circle.svg" 
                alt="Iran Flag" 
                width={28} 
                height={28} 
                className="drop-shadow-sm rounded-full"
              />
              <span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                Nowruz Wiki
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm font-light text-[15px]">
              Discovering the traditions, history, and timeless spirit of the Persian New Year. An open-source project dedicated to preserving and sharing our culture.
            </p>
          </div>

          {/* Quick Links (Col 7-9) */}
          <div className="md:col-span-3 md:col-start-7 flex flex-col">
            <h4 className="font-heading text-lg font-medium mb-6 text-foreground tracking-wide">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/haft-sin" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">The Haft-Sin</Link></li>
                <li><Link href="/history" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">History</Link></li>
                <li><Link href="/nowruz-foods" className="text-[15px] text-muted-foreground hover:text-foreground transition-colors">Foods</Link></li>
                <li><Link href="/wiki" className="text-[15px] text-rose-500/80 hover:text-rose-500 transition-colors">Wiki Index</Link></li>
              </ul>
          </div>

          {/* Contribute (Col 10-12) */}
          <div className="md:col-span-3 flex flex-col">
            <h4 className="font-heading text-lg font-medium mb-6 text-foreground tracking-wide">Contribute</h4>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 font-light">
              We need your help to grow this database. Contribute articles, photos, or code to make the wiki better for everyone.
            </p>
            <a
              href="https://github.com/thekeyvan/nowruz-wiki"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 bg-foreground/5 hover:bg-foreground/10 border border-border text-foreground px-5 py-2.5 rounded-full text-sm font-medium transition-all w-fit"
            >
              <Github className="w-5 h-5 text-foreground/80 group-hover:text-foreground transition-colors" />
              <span>GitHub Repository</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/40 gap-4">
          <p className="text-[13px] text-muted-foreground font-light">
            © {currentYear} Nowruz Wiki. Open source & community driven.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-muted-foreground/80 hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[13px] text-muted-foreground/80 hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
