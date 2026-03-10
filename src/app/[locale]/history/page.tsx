"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ContentPage, ContentSection, PersianQuote } from '@/components/content-page';

export default function HistoryPage() {
    const t = useTranslations('History');

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
            heroImage="/images/haft-seen-vertical.jpg"
            heroImageAlt="Ancient Persian traditions"
        >
            {/* Zoroastrian Heritage */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The Zoroastrian Heritage
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Before the arrival of Islam in the 7th century, the Persian Empire practiced Zoroastrianism — one of the world&apos;s oldest monotheistic religions, built upon the eternal struggle between good and evil, light and darkness, truth and deceit.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    In this ancient faith, Nowruz was the holiest day of the year. It symbolized the ultimate triumph of good — represented by light, warmth, and spring — over evil — represented by darkness, cold, and winter.
                </p>

                <div className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6 md:p-8 my-8">
                    <h3 className="font-sans text-lg font-semibold text-foreground mb-3">The Spirit of Summer</h3>
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        In Zoroastrian myth, <em>Rapithwin</em> — the spirit of noon and summer — retreats beneath the earth during winter to keep the roots of plants warm. On Nowruz, Rapithwin emerges above ground, bringing warmth back to the world.
                    </p>
                </div>
            </ContentSection>

            {/* King Jamshid */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The Myth of King Jamshid
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    The <em>Shahnameh</em> (The Book of Kings), the greatest epic poem of Greater Iran, credits the legendary King Jamshid with the creation of the festival.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    The story tells of a time when the world was plunged into a devastating, apocalyptic winter. King Jamshid, possessing a glorious jewel-studded throne, commanded demons to raise him into the heavens. He flew through the sky like the sun itself, radiating warmth and light, saving humanity.
                </p>

                <PersianQuote>
                    The day he descended back to earth, bringing with him the rebirth of the world, was declared &ldquo;Nowruz&rdquo; — the New Day.
                </PersianQuote>
            </ContentSection>

            {/* Cyrus & Persepolis */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The Empire&apos;s Golden Era
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Historical records show that by 538 BCE, Cyrus the Great — founder of the Achaemenid Empire — officially declared Nowruz a national holiday. The celebrations lasted nearly two months.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    At the ancient capital of Persepolis, massive limestone bas-reliefs still stand today, depicting dignitaries from all corners of the empire — from Ethiopia to India — bringing Nowruz tributes to the <em>Shahanshah</em> (King of Kings).
                </p>

                <div className="rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/10 p-6 md:p-8 my-8">
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        <strong className="text-foreground">Today,</strong> over 300 million people worldwide celebrate Nowruz, maintaining a 3,000-year unbroken chain of joy, renewal, and hope.
                    </p>
                </div>
            </ContentSection>
        </ContentPage>
    );
}
