"use client"

import { useTranslations } from 'next-intl';
import { ContentPage, ContentSection } from '@/components/content-page';

export default function SciencePage() {
    const t = useTranslations('Science');

    return (
        <ContentPage
            headerLabel={t('label')}
            title={t('title')}
            subtitle={t('subtitle')}
            heroImage="/images/page-headers/science.png"
            heroImageAlt="Cinematic visualization of Earth perfectly illuminated during the Vernal Equinox"
        >
            {/* Vernal Equinox */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    What is the Vernal Equinox?
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Unlike the Western Gregorian New Year, which begins arbitrarily at midnight on December 31st, Nowruz is built on hard, unyielding astrophysics. It begins at the <strong className="text-foreground">exact astronomical second</strong> of the Vernal Equinox.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Our planet rests on a tilted axis (about 23.5°) as it orbits the sun. For half the year, the Northern Hemisphere is tilted away from the sun (winter), and for the other half, it is tilted toward it (summer).
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Twice a year, the Earth reaches a specific point in its orbit where its axis is tilted <em>neither toward nor away</em> from the sun. At this precise geometric moment, the sun&apos;s center sits perfectly above the equator. This is the <strong className="text-foreground">Equinox</strong> — from latin <em>aequus</em> (equal) and <em>nox</em> (night).
                </p>

                <div className="rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/10 p-6 md:p-8 my-8">
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        On this day, everywhere on Earth experiences almost exactly <strong className="text-foreground">12 hours of daylight and 12 hours of darkness</strong>. It was the moment ancient civilizations knew the harsh cold was over.
                    </p>
                </div>
            </ContentSection>

            {/* Solar Hijri Calendar */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    The Solar Hijri Calendar
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    The calendar that uses this celestial event is the <em>Solar Hijri</em> calendar (also known as the Jalali calendar) — the official calendar of Iran and Afghanistan. It is arguably <strong className="text-foreground">one of the most accurate solar calendars in the world.</strong>
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    While the Gregorian calendar uses leap years every four years with messy exceptions, the Jalali calendar relies entirely on precise astronomical observation. It dictates that the first day of the year (the 1st of Farvardin) is the day the Vernal Equinox occurs.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                    <div className="rounded-2xl bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/10 p-6">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-medium">Before Noon</p>
                        <p className="text-[15px] leading-[1.8] text-muted-foreground">
                            If the equinox happens before solar noon in Tehran, that current day is Nowruz.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-violet-500/5 dark:bg-violet-500/10 border border-violet-500/10 p-6">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-medium">After Noon</p>
                        <p className="text-[15px] leading-[1.8] text-muted-foreground">
                            If the equinox happens after solar noon, the <em>following</em> day becomes Nowruz.
                        </p>
                    </div>
                </div>
            </ContentSection>

            {/* A Gathering Set by the Stars */}
            <ContentSection>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-6">
                    A Gathering Set by the Stars
                </h2>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    Because the arrival of the new year — called <em>Tahvil-e Saal</em> — is based on down-to-the-second planetary geometry, it creates a unique cultural phenomenon.
                </p>
                <p className="text-[16px] leading-[1.8] text-muted-foreground mb-6">
                    No matter where an Iranian is in the world — whether in Tehran, Los Angeles, Sydney, or London — they celebrate the turning of the new year at the <strong className="text-foreground">exact same second.</strong> If Nowruz occurs at 4:32:15 PM in Tehran, Iranians in New York are huddled around their Haft-Seen tables at exactly 8:02:15 AM EST.
                </p>

                <div className="rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/10 p-6 md:p-8 my-8">
                    <p className="text-[15px] leading-[1.8] text-muted-foreground">
                        It is a celebration that requires no clock — only the perfect, undeniable clockwork of the solar system.
                    </p>
                </div>
            </ContentSection>
        </ContentPage>
    );
}
