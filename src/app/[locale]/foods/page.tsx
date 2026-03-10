"use client"

import { useTranslations } from 'next-intl';
import { ContentPage, ContentSection } from '@/components/content-page';

export default function FoodsPage() {
    const t = useTranslations('Foods');

    const dishes = [
        {
            name: "Sabzi Polo ba Mahi",
            subtitle: "Herbed Rice with White Fish",
            emoji: "🐟",
            description: "This is the undisputed king of the Nowruz Eve dinner table. Long-grain basmati rice is mixed with a fragrant mountain of finely chopped fresh herbs — dill, cilantro, parsley, and garlic chives — then steamed to fluffy perfection.",
            symbolism: "The deep, vibrant green of the rice symbolizes reborn nature, growth, and the arrival of spring. The fish represents life, fluidity, and moving forward.",
            color: "bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/10"
        },
        {
            name: "Ash-e Reshteh",
            subtitle: "Persian Noodle Stew",
            emoji: "🍜",
            description: "A thick, rich, herbaceous stew containing beans, lentils, chickpeas, spinach, and topped with caramelized onions, fried mint garlic oil, and kashk (tangy fermented whey).",
            symbolism: "The tangled noodles represent life's knotted problems. Eating them 'untangles' the difficulties of the coming year, giving clarity and a straight path forward.",
            color: "bg-amber-500/5 dark:bg-amber-500/10 border-amber-500/10"
        },
        {
            name: "Kuku Sabzi",
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

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
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
                        <p className="text-[15px] leading-[1.8] text-muted-foreground">
                            {dish.symbolism}
                        </p>
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
            </ContentSection>
        </ContentPage>
    );
}
