import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ContentPage } from '@/components/content-page';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Shahanshahi' });

    return {
        title: `${t('title')} | Nowruz 2585`,
        description: t('subtitle'),
        keywords: ['Shahanshahi calendar', 'Persian calendar', 'year 2585', 'Cyrus the Great', 'Iranian calendar system'],
        openGraph: {
            title: t('title'),
            description: t('subtitle'),
            url: `https://nowruz.wiki/${locale}/shahanshahi-calendar`,
            images: [
                {
                    url: '/images/page-headers/history.png',
                    width: 1200,
                    height: 630,
                    alt: t('title'),
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('subtitle'),
            images: ['/images/page-headers/history.png'],
        }
    };
}

export default function ShahanshahiPage() {
    const t = useTranslations('Shahanshahi');

    return (
        <>
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: t('title'),
                    description: t('subtitle'),
                    image: 'https://nowruz.wiki/images/page-headers/history.png',
                    datePublished: '2024-03-20T00:00:00Z',
                    author: {
                        "@type": "Organization",
                        "name": "Nowruz Wiki"
                    }
                }}
            />
            <ContentPage
                headerLabel={t('label')}
                title={t('title')}
                subtitle={t('subtitle')}
                heroImage="/images/page-headers/history.png"
            >
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        When you look closely at Nowruz celebrations, you might see two different years listed: the Solar Hijri year (like 1404 or 1405), and the <strong className="text-foreground">Shahanshahi year (like 2584 or 2585).</strong> Though the Solar Hijri calendar is the official calendar of Iran today, the Shahanshahi (or &quot;Imperial&quot;) calendar continues to carry deep cultural resonance for those wishing to tie the new year directly back to the roots of the Persian Empire.
                    </p>

                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mt-12 mb-6">
                        The Origin of the 2585 Year
                    </h2>
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        The word <em>Shahanshahi</em> (شاهنشاهی) translates to &quot;Imperial&quot; or &quot;of the King of Kings.&quot; 
                    </p>
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        The calendar&apos;s starting epoch doesn&apos;t correspond to a religious event. Instead, it begins with the foundation of the Achaemenid Empire by <strong>Cyrus the Great</strong> in 559 BCE. This places the year 1 of the Shahanshahi calendar precisely 1,180 years before the Islamic Hijra (which marks the start of the current Solar Hijri calendar).
                    </p>

                    <blockquote className="border-l-2 border-rose-500/30 pl-6 py-2 my-8 italic text-lg text-muted-foreground/90 bg-rose-500/5 rounded-r-2xl">
                        To calculate the current Shahanshahi year, simply take the current Solar Hijri year and add 1,180.<br/>
                        <em>For example: Nowruz 1405 + 1180 = Nowruz 2585.</em>
                    </blockquote>

                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mt-12 mb-6">
                        The Mechanics: A Pure Solar Calendar
                    </h2>
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        The internal mechanics of the Shahanshahi calendar are absolutely identical to the standard Shamsi (Jalali) calendar. The months, their names, their lengths, and the exact second the new year begins (the Vernal Equinox) all remain the same. The only difference is the numbering of the year.
                    </p>
                    
                    <ul className="space-y-3 my-6 pl-4 text-[16px] text-muted-foreground">
                        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-500/40">
                            <strong>Farvardin:</strong> Always the first month of spring.
                        </li>
                        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-500/40">
                            <strong>Leap Years:</strong> Calculated exactly the same way through astronomical observation.
                        </li>
                        <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-500/40">
                            <strong>Nowruz:</strong> Always falls at the precise astronomical exact second of the Equinox.
                        </li>
                    </ul>

                    <h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight text-foreground mt-10 mb-4">
                        The Twelve Months
                    </h3>
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        The calendar consists of 12 months. The first six have 31 days, the next five have 30 days, and the last month has 29 days (30 in a leap year). They align closely with the following Gregorian dates:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 my-6 text-[15.5px]">
                        <div className="bg-rose-500/5 rounded-2xl p-5 border border-rose-500/10">
                            <h4 className="font-bold text-rose-600 dark:text-rose-400 mb-3 uppercase tracking-widest text-xs flex items-center gap-2">🌱 Spring (Bahar)</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><strong className="text-foreground/80">Farvardin:</strong> March 21 – April 20</li>
                                <li><strong className="text-foreground/80">Ordibehesht:</strong> April 21 – May 21</li>
                                <li><strong className="text-foreground/80">Khordad:</strong> May 22 – June 21</li>
                            </ul>
                        </div>
                        <div className="bg-amber-500/5 rounded-2xl p-5 border border-amber-500/10">
                            <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-3 uppercase tracking-widest text-xs flex items-center gap-2">☀️ Summer (Tabestan)</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><strong className="text-foreground/80">Tir:</strong> June 22 – July 22</li>
                                <li><strong className="text-foreground/80">Mordad:</strong> July 23 – August 22</li>
                                <li><strong className="text-foreground/80">Shahrivar:</strong> August 23 – September 22</li>
                            </ul>
                        </div>
                        <div className="bg-orange-500/5 rounded-2xl p-5 border border-orange-500/10">
                            <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-3 uppercase tracking-widest text-xs flex items-center gap-2">🍂 Autumn (Paiez)</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><strong className="text-foreground/80">Mehr:</strong> September 23 – October 22</li>
                                <li><strong className="text-foreground/80">Aban:</strong> October 23 – November 21</li>
                                <li><strong className="text-foreground/80">Azar:</strong> November 22 – December 21</li>
                            </ul>
                        </div>
                        <div className="bg-blue-500/5 rounded-2xl p-5 border border-blue-500/10">
                            <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-widest text-xs flex items-center gap-2">❄️ Winter (Zemestan)</h4>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><strong className="text-foreground/80">Dey:</strong> December 22 – January 20</li>
                                <li><strong className="text-foreground/80">Bahman:</strong> January 21 – February 19</li>
                                <li><strong className="text-foreground/80">Esfand:</strong> February 20 – March 20</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mt-12 mb-6">
                        Why the Two Dates?
                    </h2>
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        In 1976, the Iranian government briefly enacted the Shahanshahi calendar as the official national calendar, shifting the year from 1355 to 2535 overnight. After the 1979 revolution, the state reverted to the Solar Hijri calendar.
                    </p>
                    <p className="text-[16.5px] leading-[1.8] mb-6">
                        Today, outside of official state capacities, many Iranians across the global diaspora continue to use the Shahanshahi calendar to brand their Nowruz celebrations as a nod to the ancient antiquity and enduring secular legacy of the Persian New Year. Whichever number you use—1405 or 2585—the momentous occasion it celebrates is exactly the same: the triumph of light over dark, and the beginning of Spring.
                    </p>
                </div>
            </ContentPage>
        </>
    );
}
