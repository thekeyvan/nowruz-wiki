"use client"

import { useTranslations } from 'next-intl';
import { ContentPage, ContentSection, PersianQuote } from '@/components/content-page';

export default function SizdahBedarPage() {
    const t = useTranslations('SizdahBedar');

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
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

            {/* Haji Firooz */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    Haji Firooz: The Herald of Spring
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Roam the streets during this time, and you will encounter <em>Haji Firooz</em>. He is a traditional folklore character dressed in a bright red outfit with his face covered in soot.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Armed with a tambourine, Haji Firooz dances through the streets, singing rhythmic and often comical songs to announce the arrival of spring and demand (in good fun) loose change from passersby.
                </p>

                <div className="rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/10 p-6 md:p-8 my-8">
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        His black face and red clothes are thought by historians to represent an ancient deity of agriculture returning from the dark underworld into the bright spring.
                    </p>
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
