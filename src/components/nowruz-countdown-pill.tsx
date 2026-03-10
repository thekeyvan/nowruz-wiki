"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';
import { usePathname } from '@/i18n/routing';

function getNextNowruz() {
    const now = new Date();
    const year = now.getFullYear();
    let nowruz = new Date(year, 2, 20, 0, 0, 0);
    if (now > nowruz) {
        nowruz = new Date(year + 1, 2, 20, 0, 0, 0);
    }
    return nowruz;
}

function getTimeLeft(target: Date) {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, totalDays: 0 };

    const totalDays = diff / (1000 * 60 * 60 * 24);
    const days = Math.floor(totalDays);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds, totalDays };
}

function downloadICS() {
    const target = getNextNowruz();
    const y = target.getFullYear();
    const ics = [
        'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Nowruz Wiki//EN',
        'BEGIN:VEVENT',
        `DTSTART;VALUE=DATE:${y}0320`, `DTEND;VALUE=DATE:${y}0321`,
        'SUMMARY:Nowruz — Persian New Year',
        'DESCRIPTION:Happy Nowruz! The Persian New Year begins at the exact moment of the vernal equinox. Nowruz Mobarak! 🌸',
        `UID:nowruz-${y}@nowruz.wiki`,
        'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `nowruz-${y}.ics`; a.click();
    URL.revokeObjectURL(url);
}

function getGoogleCalendarUrl(target: Date) {
    const s = target.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const e = new Date(target); e.setDate(e.getDate() + 1);
    const eStr = e.toISOString().replace(/-|:|\.\d\d\d/g, "");
    return `https://calendar.google.com/calendar/render?${new URLSearchParams({
        action: 'TEMPLATE', text: 'Nowruz — Persian New Year',
        dates: `${s}/${eStr}`, details: 'Happy Nowruz! 🌸', location: 'Worldwide'
    })}`;
}

export function NowruzCountdownPill() {
    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const pathname = usePathname();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Show pill if scrolled down past hero (e.g. 500px) OR if not on homepage
        if (pathname !== '/' || latest > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            setMenuOpen(false); // Close menu if hiding
        }
    });

    // Ensure state is correct on mount/navigation
    useEffect(() => {
        if (pathname !== '/') {
            setIsVisible(true);
        } else if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [pathname]);

    useEffect(() => {
        setMounted(true);
        const target = getNextNowruz();
        setTimeLeft(getTimeLeft(target));
        const interval = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted || !timeLeft || timeLeft.totalDays > 90) return null;
    const pad = (n: number) => String(n).padStart(2, '0');

    if (timeLeft.totalDays <= 0) {
        return null; // Don't show floating pill if it's already Nowruz
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}
                    className="fixed bottom-6 right-6 md:right-8 z-50 pointer-events-auto"
                >
                    <div className="relative group shadow-2xl rounded-full">
                        <div className="inline-flex items-center gap-4 md:gap-6 bg-black/80 dark:bg-white/10 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-full pl-6 md:pl-8 pr-2 py-2 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                            {/* Text Section */}
                            <p className="text-white text-sm md:text-base font-medium tracking-wide">
                                <span className="font-semibold text-white/90 text-lg md:text-xl">{timeLeft.days}</span> days and{' '}
                                <span className="font-mono font-semibold text-white/90 tracking-widest tabular-nums mx-1 text-base">
                                    {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
                                </span>{' '}
                                to Nowruz
                            </p>

                            {/* Calendar Button */}
                            <div className="relative">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                                    className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all duration-300 ring-1 ring-white/10"
                                    aria-label="Add to Calendar"
                                >
                                    <CalendarPlus className="w-4 h-4 md:w-5 md:h-5" />
                                </button>

                                <AnimatePresence>
                                    {menuOpen && (
                                        <>
                                            <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute right-0 bottom-full mb-4 w-48 bg-[#2d2d2f]/95 dark:bg-[#1a1a1a]/95 backdrop-blur-3xl border border-white/10 rounded-[20px] shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden z-50 p-2"
                                            >
                                                <button onClick={() => { downloadICS(); setMenuOpen(false); }} className="w-full text-left px-4 py-3 text-[13px] font-medium text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer mb-1 shadow-sm font-sans">
                                                    Apple Calendar
                                                </button>
                                                <a href={getGoogleCalendarUrl(getNextNowruz())} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block w-full text-left px-4 py-3 text-[13px] font-medium text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer shadow-sm font-sans">
                                                    Google Calendar
                                                </a>
                                            </motion.div>
                                        </>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
