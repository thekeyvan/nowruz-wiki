"use client"

import { useTranslations } from 'next-intl';
import { ContentPage, ContentSection, PersianQuote } from '@/components/content-page';

export default function ChaharshanbesuriPage() {
    const t = useTranslations('ChaharshanbeS');

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
            heroImage="/images/page-headers/chaharshanbe.png"
            heroImageAlt="People joyfully leaping over small bright bonfires at dusk"
        >
            {/* Khaneh Tekani */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    Khaneh Tekani: Shaking the House
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Weeks before the new year arrives, households across Iran and neighboring countries engage in a ritual of massive spring cleaning known as <em>Khaneh Tekani</em>. The literal translation? <strong>&ldquo;Shaking the house.&rdquo;</strong>
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    This is not a casual dusting. Every rug is hauled outside and beaten, every curtain washed, every window scrubbed until it gleams. The philosophy is simple but profound: you cannot welcome the freshness and bright energy of spring into a home that is still clinging to the dust and stagnation of the past year.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground">
                    By cleaning the physical space, families also cleanse their lives, preparing a blank canvas for the new year.
                </p>
            </ContentSection>

            {/* Fire Leaping */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The Festival of Fire
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    As the physical house is cleansed, the spiritual self must also be purified. This culminates on the eve of the last Wednesday before Nowruz in a loud, chaotic, and beautiful festival known as <em>Chaharshanbe Suri</em>.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    As the sun sets, streets and parks come alive with bonfires. In a tradition dating back thousands of years to ancient Zoroastrian fire veneration, people of all ages line up to literally leap over the roaring flames.
                </p>

                <PersianQuote>
                    &ldquo;Zardi-ye man az toh, sorkhi-ye toh az man!&rdquo; — My yellow (weakness) to you, your red (strength) to me!
                </PersianQuote>

                <p className="text-[16px] leading-[1.8] text-muted-foreground">
                    &ldquo;Yellow&rdquo; represents sickness and bad luck. &ldquo;Red&rdquo; represents health and vitality. By leaping over the fire, the jumper gives the flames their hardships and takes back the fire&apos;s strength.
                </p>
            </ContentSection>

            {/* Qashogh Zani */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    Qashogh Zani: Spoon Banging
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Alongside the bonfires, another tradition takes place that bears a striking resemblance to Halloween trick-or-treating.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    In a ritual called <em>Qashogh Zani</em> (spoon banging), children — and often playful adults — drape themselves in long veils to hide their identities. They roam the neighborhood, banging spoons loudly against metal bowls or pots to ward off unlucky spirits, stopping at doors to receive nuts, chocolates, or cash from neighbors.
                </p>

                <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground mt-8 mb-4">
                    Boloni: Seeking the Future
                </h3>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Another beautiful evening tradition is <em>Boloni</em>, a playful fortune-telling ritual. Friends and family write classic Persian poems on slips of paper and drop them into a clay pot (the boloni), along with a small personal belonging like a ring or a coin. A young girl then reaches into the pot, pulls out a belonging, and recites the accompanying poem — revealing the owner&apos;s fortune for the coming year.
                </p>

                <div className="rounded-2xl bg-orange-500/5 dark:bg-orange-500/10 border border-orange-500/10 p-6 md:p-8 my-8">
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        Through water, soap, and fire, the slate is wiped clean. The people are now ready to welcome the exact moment of the new year.
                    </p>
                </div>
            </ContentSection>
        </ContentPage>
    );
}
