import { ContentPage, ContentSection } from '@/components/content-page';
import Image from 'next/image';

const items = [
    {
        name: "Sabzeh", nameEn: "Wheatgrass", symbol: "Rebirth & Renewal",
        photo: "/haft-sin/photos/sabzeh.png",
        story: "Sabzeh is probably the most recognizable element on the Haft-Seen table — a lush patch of bright green sprouts grown from wheat, lentil, or barley seeds. Families plant them about two weeks before Nowruz and watch them grow, which is honestly kind of meditative. The green shoots represent the rebirth of nature after winter, a reminder that growth always comes back. On the 13th day (Sizdah Bedar), the Sabzeh is released into running water — taking the family's worries with it.",
    },
    {
        name: "Samanoo", nameEn: "Sweet Pudding", symbol: "Power & Sweetness",
        photo: "/haft-sin/photos/samanoo.png",
        story: "Samanoo is a thick, sweet paste made entirely from germinated wheat — no sugar added. The sweetness comes naturally from the long, slow cooking process. Making it is a full community event: friends and family gather around a big pot, taking turns stirring through the entire night while singing folk songs and making wishes. It represents the sweetness that comes from patience and collective effort — basically, good things take time.",
    },
    {
        name: "Senjed", nameEn: "Oleaster Fruit", symbol: "Love & Affection",
        photo: "/haft-sin/photos/senjed.png",
        story: "Senjed is the dried fruit of the oleaster tree. Its fragrant blossoms have long been associated with making the heart flutter and falling in love. On the Haft-Seen, it represents love, affection, and the beautiful madness of following your heart. There is an old saying that when the oleaster tree blooms, even the most logical person gives in to emotion.",
    },
    {
        name: "Sir", nameEn: "Garlic", symbol: "Medicine & Health",
        photo: "/haft-sin/photos/sir.png",
        story: "Sure, it might not be the most glamorous item on the table, but garlic is seriously powerful in Persian tradition. Sir represents medicine, good health, and protection against illness. Ancient Persians believed garlic could ward off evil and disease alike. Think of it as your body's natural shield for the year ahead — a quiet but essential protector.",
    },
    {
        name: "Sib", nameEn: "Apple", symbol: "Beauty & Health",
        photo: "/haft-sin/photos/sib.png",
        story: "The apple symbolizes beauty, health, and the Earth itself. In Persian mythology, it is considered the fruit of creation. Placing a beautiful, shiny apple on the Haft-Seen is a wish for natural beauty and vibrant health in the coming year. Plus, let's be real — a perfectly round, red apple just looks gorgeous on the table.",
    },
    {
        name: "Somagh", nameEn: "Sumac", symbol: "Color of Sunrise",
        photo: "/haft-sin/photos/somagh.png",
        story: "Somagh is a deep, crimson-red spice made from ground sumac berries. Its rich color represents the sunrise — that magical moment when light breaks through the darkness. On a deeper level, it symbolizes the victory of good over evil, a core theme of Nowruz that goes all the way back to Zoroastrian philosophy. It is basically the most dramatic spice on the table.",
    },
    {
        name: "Sonbol", nameEn: "Hyacinth", symbol: "Arrival of Spring",
        photo: "/haft-sin/photos/sonbol.png",
        story: "The hyacinth is the ultimate spring flower — vibrant, fragrant, and impossible to ignore. Its presence on the Haft-Seen fills the entire room with the scent of the new season. It announces that spring has officially arrived and nature is waking up. Different colors of hyacinth carry different meanings, but they all share one message: life is beautiful, and it is blooming right now.",
    },
    {
        name: "Sekke", nameEn: "Coins", symbol: "Prosperity & Wealth",
        photo: "/haft-sin/photos/sekke.png",
        story: "Coins on the Haft-Seen represent prosperity, wealth, and financial comfort. They are a practical, no-nonsense wish for a year of abundance. Families often place gold coins or special Nowruz-edition coins on the table — it is a quiet prayer that the year ahead brings material security alongside spiritual growth.",
    },
    {
        name: "Mahi", nameEn: "Goldfish", symbol: "Life & Movement",
        photo: "/haft-sin/photos/mahi.png",
        story: "The goldfish swimming in its bowl is one of the most beloved elements of the Haft-Seen. Its constant movement represents life, vitality, and progress — a living reminder to keep moving forward into the new year. Children especially love watching the fish during the Tahvil (the exact moment of the new year). After Nowruz, many families release the fish into ponds or streams.",
    },
    {
        name: "Ayeneh", nameEn: "Mirror", symbol: "Reflection & Truth",
        photo: "/haft-sin/photos/ayeneh.png",
        story: "The mirror on the Haft-Seen reflects the sky and light, symbolizing self-reflection, honesty, and clarity. At the exact moment of Tahvil, families gather around the mirror to see their reflection — a beautiful tradition of looking inward before looking forward. It is a moment of quiet truth before the celebrations begin.",
    },
    {
        name: "Tokhmeh", nameEn: "Painted Eggs", symbol: "Fertility & New Life",
        photo: "/haft-sin/photos/tokhmeh.png",
        story: "Beautifully decorated eggs represent fertility, creation, and the potential for new beginnings. Each painted egg often represents a member of the family — a colorful blessing for everyone at the table. The tradition of decorating eggs for the spring equinox dates back thousands of years and can be found across many cultures.",
    },
    {
        name: "Divân-e Hafez", nameEn: "Book of Hafez", symbol: "Poetry & Wisdom",
        photo: "/haft-sin/photos/hafez.png",
        story: "The Divan of Hafez is the collected works of the legendary Persian poet Hafez — and it has a special role during Nowruz. At the moment of the new year, each family member opens the book to a random page and reads the poem aloud. This is called 'Faal-e Hafez' — a poetic fortune telling. The verse you land on is said to hold wisdom and guidance for your year ahead. It is one of the most meaningful and personal moments of the entire celebration.",
    },
];

export default function HaftSinPage() {

    return (
        <ContentPage
            headerLabel="The Heart of Nowruz"
            title="Haft-Seen"
            subtitle="Every item on the table tells a story. Here's the full meaning behind each one — and why it's been there for thousands of years."
            heroImage="/images/haft-seen-vertical.jpg"
            heroImageAlt="A beautiful traditional Haft-Seen table from above"
        >
            {items.map((item, i) => (
                <ContentSection key={item.name}>
                    <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? '' : ''}`}>
                        {/* Image */}
                        <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl shadow-black/5 dark:shadow-black/30">
                                <Image
                                    src={item.photo}
                                    alt={item.nameEn}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Text */}
                        <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">
                                {String(i + 1).padStart(2, '0')} — {item.symbol}
                            </p>
                            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-2">
                                {item.nameEn}
                            </h2>
                            <p className="text-sm text-muted-foreground mb-5 tracking-wide font-medium">
                                {item.name}
                            </p>
                            <p className="text-[16px] leading-[1.8] text-muted-foreground">
                                {item.story}
                            </p>
                        </div>
                    </div>
                </ContentSection>
            ))}
        </ContentPage>
    );
}
