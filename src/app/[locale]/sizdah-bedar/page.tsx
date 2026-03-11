import { getTranslations } from 'next-intl/server';
import { ContentPage, ContentSection, PersianQuote } from '@/components/content-page';
import type { Metadata } from 'next';

const BASE_URL = 'https://nowruz.wiki';

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SizdahBedar' });
    return {
        title: `${t('title')} | Nowruz Wiki`,
        description: t('subtitle'),
        keywords: ['Sizdah Bedar', 'day 13 Nowruz', 'Persian picnic', 'Haji Firooz', 'Amu Nowruz', 'Sabzeh release', 'Nowruz traditions'],
        alternates: { canonical: `${BASE_URL}/sizdah-bedar` },
        openGraph: {
            title: `${t('title')} | Nowruz Wiki`,
            description: t('subtitle'),
            url: `${BASE_URL}/sizdah-bedar`,
            siteName: 'Nowruz Wiki',
            images: [{ url: `${BASE_URL}/images/page-headers/sizdah-bedar.png`, width: 1200, height: 630 }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${t('title')} | Nowruz Wiki`,
            description: t('subtitle'),
            images: [`${BASE_URL}/images/page-headers/sizdah-bedar.png`],
        },
    };
}

export default async function SizdahBedarPage({ params }: PageProps) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'SizdahBedar' });

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
            heroImage="/images/page-headers/sizdah-bedar.png"
            heroImageAlt="Families enjoying a massive spring picnic on a lush green park lawn"
        >
            {/* The 13 Days */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The 13 Days of Joy
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Nowruz is a marathon of celebration. While the exact moment of the equinox is marked by families gathering around the Haft-Seen table, the festival itself stretches for exactly <strong className="text-foreground">13 days</strong> of socializing, feasting, and joy.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    During the first 12 days, the country comes to a halt. Schools are closed, businesses operate on holiday hours. The time is dedicated to <em>Eid Didani</em> — visiting family and friends.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    There is a strict, unwritten protocol: the younger generation must first visit the eldest members of the family, followed by older siblings, and eventually friends. At every stop, guests are greeted with vast quantities of tea, pastries, and mixed nuts. For children, elders distribute <em>Eidi</em> — crisp, freshly minted banknotes.
                </p>
            </ContentSection>

            {/* Heralds of Spring */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    Heralds of Spring
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Roam the streets during this time across different countries, and you will encounter the traditional folklore characters who announce the arrival of Nowruz.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="rounded-2xl border p-6 bg-red-500/5 dark:bg-red-500/10 border-red-500/10">
                        <h3 className="font-heading text-xl font-medium text-foreground mb-2">Haji Firooz &amp; Amu Nowruz</h3>
                        <p className="text-[14px] leading-[1.6] text-muted-foreground">
                            In Iran, <em>Haji Firooz</em> dances through the streets in bright red, his face covered in soot, playing a tambourine to spread joy. He is accompanied by <em>Amu Nowruz</em>, a silver-haired man who brings gifts to children — much like a Persian Santa Claus. Legend says Amu Nowruz can only meet his beloved wife, Nane Sarma (Mother Winter), once a year right before the spring begins.
                        </p>
                    </div>

                    <div className="rounded-2xl border p-6 bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/10">
                        <h3 className="font-heading text-xl font-medium text-foreground mb-2">Kosa and Kechal</h3>
                        <p className="text-[14px] leading-[1.6] text-muted-foreground">
                            In Azerbaijan, the comedic duo <em>Kosa</em> and <em>Kechal</em> take the stage. Kosa, a skinny man with a fake beard, represents the fading winter. Kechal, a bald, mischievous man, symbolizes the approaching summer. They playfully fight in the streets, with Kechal ultimately winning, signifying spring&apos;s triumph over winter.
                        </p>
                    </div>

                    <div className="rounded-2xl border p-6 bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/10 md:col-span-2">
                        <h3 className="font-heading text-xl font-medium text-foreground mb-2">Kampirak</h3>
                        <p className="text-[14px] leading-[1.6] text-muted-foreground">
                            In the mountains of Afghanistan, <em>Kampirak</em> is the herald of spring. An old, bearded man wearing colorful clothes and a long hat, he and his retinue pass from village to village distributing charitable gifts. He symbolizes the beneficence and power of nature yielding the harsh forces of winter.
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* Day 13 */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    Day 13: The Great Outdoors
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    In Persian culture, the number 13 is historically considered unlucky. To avoid the bad luck that might fall on a household on the 13th day of the new year, an ingenious solution was created: <strong className="text-foreground">no one stays home.</strong>
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    On <em>Sizdah Bedar</em> (roughly &ldquo;getting rid of 13&rdquo;), entire cities empty out. Millions of people pack overflowing picnic baskets, grab their portable grills, and head into nature. Every park, forest, and patch of grass is blanketed with families. It is a massive, nationwide tailgate party celebrating the outdoors.
                </p>

                <PersianQuote>
                    Men play volleyball, women chat over endless cups of tea, and the smell of grilling kebabs fills the air.
                </PersianQuote>
            </ContentSection>

            {/* Sabzeh Release */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The Release of the Sabzeh
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    <em>Sizdah Bedar</em> is also the day the Haft-Seen table is finally dismantled. The <em>Sabzeh</em> — the lush green wheatgrass sprouts that have been sitting on the table for 13 days — is brought along to the picnic.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    It is believed that over the 13 days, the sprouts have absorbed all the sickness and bad luck that might plague the family. At the end of the picnic, families find a running river or stream and toss the <em>Sabzeh</em> into the water.
                </p>

                <div className="rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 p-6 md:p-8 my-8">
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        As the green shoots float away, they carry the family&apos;s misfortune with them — ensuring the rest of the year will be filled with health, happiness, and prosperity.
                    </p>
                </div>
            </ContentSection>
        </ContentPage>
    );
}
