import { getTranslations } from 'next-intl/server';
import { ContentPage, ContentSection } from '@/components/content-page';
import { Link } from '@/i18n/routing';
import type { Metadata } from 'next';

const BASE_URL = 'https://nowruz.wiki';

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Foods' });
    return {
        title: `${t('title')} | Nowruz Wiki`,
        description: t('subtitle'),
        keywords: ['Nowruz food', 'Sabzi Polo', 'Ash-e Reshteh', 'Kuku Sabzi', 'Persian cuisine', 'Nowruz recipes', 'Persian sweets'],
        alternates: { canonical: `${BASE_URL}/nowruz-foods` },
        openGraph: {
            title: `${t('title')} | Nowruz Wiki`,
            description: t('subtitle'),
            url: `${BASE_URL}/nowruz-foods`,
            siteName: 'Nowruz Wiki',
            images: [{ url: `${BASE_URL}/images/page-headers/foods.png`, width: 1200, height: 630 }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${t('title')} | Nowruz Wiki`,
            description: t('subtitle'),
            images: [`${BASE_URL}/images/page-headers/foods.png`],
        },
    };
}

const dishes = [
    {
        name: "Sabzi Polo ba Mahi",
        slug: "sabzi-polo-maahi",
        subtitle: "Herbed Rice with White Fish",
        emoji: "🐟",
        description: "This is the undisputed king of the Nowruz Eve dinner table. Long-grain basmati rice is mixed with a fragrant mountain of finely chopped fresh herbs — dill, cilantro, parsley, and garlic chives — then steamed to fluffy perfection.",
        symbolism: "The deep, vibrant green of the rice symbolizes reborn nature, growth, and the arrival of spring. The fish represents life, fluidity, and moving forward.",
        color: "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/10"
    },
    {
        name: "Ash-e Reshteh",
        slug: "ashe-reshteh",
        subtitle: "Persian Noodle Stew",
        emoji: "🍜",
        description: "A thick, rich, herbaceous stew containing beans, lentils, chickpeas, spinach, and topped with caramelized onions, fried mint garlic oil, and kashk (tangy fermented whey).",
        symbolism: "The tangled noodles represent life's knotted problems. Eating them 'untangles' the difficulties of the coming year, giving clarity and a straight path forward.",
        color: "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/10"
    },
    {
        name: "Kuku Sabzi",
        slug: "kuku-sabzi",
        subtitle: "Fresh Herb Frittata",
        emoji: "🌿",
        description: "Imagine a frittata that is entirely herbs held together by a whisper of egg. Packed with parsley, cilantro, dill, and scallions, often studded with chopped walnuts and tart dried barberries.",
        symbolism: "The profound green color celebrates spring foliage, fertility, and abundance.",
        color: "bg-green-500/5 dark:bg-green-500/10 border-green-500/10"
    }
];

const sweets = [
    { name: "Naan-e Nokhodchi", desc: "Tiny, clover-shaped cookies made from roasted chickpea flour and cardamom. They melt on your tongue without chewing.", emoji: "🍪" },
    { name: "Baklava", desc: "Flaky pastry filled with chopped nuts, drenched in rosewater and cardamom syrup.", emoji: "🥮" },
    { name: "Sohan", desc: "A rich, brittle toffee from the city of Qom, heavily spiced with saffron and loaded with pistachios.", emoji: "🍬" },
];

export default async function FoodsPage({ params }: PageProps) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Foods' });

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
            heroImage="/images/page-headers/foods.png"
            heroImageAlt="Traditional Sabzi Polo ba Mahi beautifully plated on a modern table"
        >
            {/* Main dishes */}
            {dishes.map((dish) => (
                <ContentSection key={dish.name}>
                    <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl">{dish.emoji}</span>
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                                {dish.name}
                            </h2>
                            <p className="text-sm text-muted-foreground mt-1">{dish.subtitle}</p>
                        </div>
                    </div>

                    <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                        {dish.description}
                    </p>

                    <div className={`rounded-2xl border p-6 md:p-8 ${dish.color}`}>
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-medium">Symbolism</p>
                        <p className="text-[15px] leading-[1.8] text-muted-foreground mb-4">
                            {dish.symbolism}
                        </p>
                        <Link href={`/${dish.slug}`} className="inline-flex items-center text-sm font-medium text-foreground hover:text-rose-500 transition-colors group">
                            Read recipe &amp; history 
                            <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </ContentSection>
            ))}

            {/* Sweets */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
                    Shirini: The Sweets
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-8">
                    A Persian host would never let a guest leave without an alarming amount of sugar. During Nowruz, the tables overflow with <em>shirini</em> — sweets — to wish guests a &ldquo;sweet&rdquo; year ahead.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {sweets.map((sweet) => (
                        <div
                            key={sweet.name}
                            className="rounded-2xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/10 p-6 text-center"
                        >
                            <span className="text-3xl block mb-3">{sweet.emoji}</span>
                            <h3 className="font-sans text-base font-semibold text-foreground mb-2">{sweet.name}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{sweet.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/traditional-nowruz-pastries" className="inline-flex items-center px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium transition-colors group">
                        Read more about Nowruz Pastries
                        <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </ContentSection>

            {/* Global Traditions */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    Global Tastes of Nowruz
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-8">
                    Because Nowruz is celebrated across many nations, the culinary traditions vary beautifully across borders. While the themes of spring, sweetness, and fertility remain constant, the dishes themselves tell the story of their local cultures.
                </p>

                <div className="space-y-6 max-w-2xl mx-auto">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-orange-500/10 flex items-center justify-center text-2xl">🍯</div>
                        <div>
                            <h3 className="font-heading text-xl font-medium text-foreground mb-1">Samanu <span className="text-sm font-normal text-muted-foreground ml-2">Various Regions</span></h3>
                            <p className="text-[15px] leading-[1.7] text-muted-foreground">A sweet, earthy pudding made entirely from germinated wheat. Across Iran, Afghanistan, Tajikistan, and Uzbekistan, cooking Samanu is a communal event. Women and girls gather to stir the massive pots overnight, singing memorable folk songs as they work.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-2xl">🥜</div>
                        <div>
                            <h3 className="font-heading text-xl font-medium text-foreground mb-1">Haft Mewa <span className="text-sm font-normal text-muted-foreground ml-2">Afghanistan</span></h3>
                            <p className="text-[15px] leading-[1.7] text-muted-foreground">Instead of the Haft-Seen table, many families in Afghanistan prepare <em>Haft Mewa</em> (Seven Fruits). It is a luxurious compote made of seven different dried fruits and nuts — like raisins, silver berries, pistachios, hazelnuts, prunes, walnuts, and almonds — served in a sweet syrup.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center text-2xl">🥛</div>
                        <div>
                            <h3 className="font-heading text-xl font-medium text-foreground mb-1">Nauryz Kozhe <span className="text-sm font-normal text-muted-foreground ml-2">Kazakhstan</span></h3>
                            <p className="text-[15px] leading-[1.7] text-muted-foreground">In Kazakhstan, the new year begins by consuming <em>Nauryz kozhe</em>, a traditional, deeply nourishing drink typically made from seven ingredients including water, meat, salt, lipid, cereal, and kefir or milk, symbolizing joy, luck, and wisdom.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 shrink-0 rounded-full bg-purple-500/10 flex items-center justify-center text-2xl">🥚</div>
                        <div>
                            <h3 className="font-heading text-xl font-medium text-foreground mb-1">Khoncha <span className="text-sm font-normal text-muted-foreground ml-2">Azerbaijan</span></h3>
                            <p className="text-[15px] leading-[1.7] text-muted-foreground">The Azerbaijani Nowruz display centers around the <em>Khoncha</em>. This large silver or copper tray features green, sprouting wheat (samani) in the middle, surrounded by dyed eggs and at least seven colorful dishes and pastries.</p>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </ContentPage>
    );
}
