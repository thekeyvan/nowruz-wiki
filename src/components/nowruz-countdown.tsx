"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';

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
    const year = new Date().getFullYear();
    let nowruz = new Date(year, 2, 20);
    if (new Date() > nowruz) nowruz = new Date(year + 1, 2, 20);

    const y = nowruz.getFullYear();
    const dateStr = `${y}0320`;
    const nextDay = `${y}0321`;

    const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Nowruz Wiki//EN',
        'BEGIN:VEVENT',
        `DTSTART;VALUE=DATE:${dateStr}`,
        `DTEND;VALUE=DATE:${nextDay}`,
        'SUMMARY:Nowruz — Persian New Year',
        'DESCRIPTION:Happy Nowruz! The Persian New Year begins at the exact moment of the vernal equinox. Nowruz Mobarak! 🌸',
        'LOCATION:Worldwide',
        `UID:nowruz-${y}@nowruz.wiki`,
        'END:VEVENT',
        'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nowruz-${y}.ics`;
    a.click();
    URL.revokeObjectURL(url);
}

function getGoogleCalendarUrl(target: Date) {
    const startStr = target.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(target);
    end.setDate(end.getDate() + 1);
    const endStr = end.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: 'Nowruz — Persian New Year',
        dates: `${startStr}/${endStr}`,
        details: 'Happy Nowruz! The Persian New Year begins at the exact moment of the vernal equinox. Nowruz Mobarak! 🌸',
        location: 'Worldwide'
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function getOutlookCalendarUrl(target: Date) {
    const end = new Date(target);
    end.setDate(end.getDate() + 1);

    // Outlook expects a format like 2026-03-20T00:00:00Z
    const params = new URLSearchParams({
        path: '/calendar/action/compose',
        rru: 'addevent',
        startdt: target.toISOString(),
        enddt: end.toISOString(),
        subject: 'Nowruz — Persian New Year',
        body: 'Happy Nowruz! The Persian New Year begins at the exact moment of the vernal equinox. Nowruz Mobarak! 🌸',
        location: 'Worldwide'
    });
    return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}

function getYahooCalendarUrl(target: Date) {
    const startStr = target.toISOString().replace(/-|:|\.\d\d\d/g, "");
    const end = new Date(target);
    end.setDate(end.getDate() + 1);
    const endStr = end.toISOString().replace(/-|:|\.\d\d\d/g, "");

    const params = new URLSearchParams({
        v: '60',
        title: 'Nowruz — Persian New Year',
        st: startStr,
        et: endStr,
        desc: 'Happy Nowruz! The Persian New Year begins at the exact moment of the vernal equinox. Nowruz Mobarak! 🌸',
        in_loc: 'Worldwide'
    });
    return `https://calendar.yahoo.com/?${params.toString()}`;
}

export function NowruzCountdown() {
    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);
    const [mounted, setMounted] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const target = getNextNowruz();
        setTimeLeft(getTimeLeft(target));
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft(target));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted || !timeLeft || timeLeft.totalDays > 90) return null;

    const pad = (n: number) => String(n).padStart(2, '0');

    // Nowruz day
    if (timeLeft.totalDays <= 0) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="fixed bottom-6 right-6 z-40"
            >
                <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl rounded-[22px] shadow-2xl shadow-black/15 dark:shadow-black/50 p-5 text-center w-[220px]">
                    <p className="text-3xl mb-1">🌸</p>
                    <p className="text-lg font-semibold text-foreground tracking-tight">Nowruz Mobarak!</p>
                    <p className="text-xs text-muted-foreground mt-1">Happy New Year 1405</p>
                </div>
            </motion.div>
        );
    }

    // Collapsed pill
    if (collapsed) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-6 right-6 z-40"
            >
                <button
                    onClick={() => setCollapsed(false)}
                    className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl rounded-full shadow-xl shadow-black/10 dark:shadow-black/40 px-4 py-2.5 flex items-center gap-2.5 hover:shadow-2xl transition-shadow cursor-pointer border border-black/5 dark:border-white/10"
                >
                    <span className="text-sm font-medium text-foreground tracking-tight">
                        {timeLeft.days}d
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
                    </span>
                </button>
            </motion.div>
        );
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed bottom-6 right-6 z-40"
            >
                <div className="relative bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl rounded-[22px] shadow-2xl shadow-black/15 dark:shadow-black/50 w-[240px]">
                    {/* Collapse (not dismiss) */}
                    <button
                        onClick={() => setCollapsed(true)}
                        className="absolute top-3 right-3.5 z-10 text-muted-foreground/30 hover:text-muted-foreground text-xs transition-colors cursor-pointer"
                        aria-label="Minimize"
                    >
                        ✕
                    </button>

                    {/* Top section */}
                    <div className="px-5 pt-4 pb-4">
                        <p className="text-[11px] text-muted-foreground/60 font-medium mb-1 tracking-wide">
                            Nowruz
                        </p>

                        <div className="flex items-baseline justify-between">
                            <h3 className="font-sans text-[28px] font-semibold text-foreground leading-tight tracking-tight">
                                In{' '}
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={timeLeft.days}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="inline-block"
                                    >
                                        {timeLeft.days}
                                    </motion.span>
                                </AnimatePresence>
                                {' '}{timeLeft.days === 1 ? 'day' : 'days'}
                            </h3>

                            <span className="text-[11px] font-semibold bg-emerald-500 text-white px-2.5 py-1 rounded-full leading-none">
                                20 march
                            </span>
                        </div>

                        <div className="relative mt-3">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMenuOpen(!menuOpen);
                                }}
                                className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer"
                            >
                                <CalendarPlus className="w-3.5 h-3.5" />
                                Add to Calendar
                            </button>

                            <AnimatePresence>
                                {menuOpen && (
                                    <>
                                        {/* Invisible overlay to close menu when clicking outside */}
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={() => setMenuOpen(false)}
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute left-0 bottom-full mb-2 w-40 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50 py-1"
                                        >
                                            <button
                                                onClick={() => { downloadICS(); setMenuOpen(false); }}
                                                className="w-full text-left px-4 py-2 text-[12px] font-medium text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors flex items-center gap-2 cursor-pointer"
                                            >
                                                Apple Calendar
                                            </button>
                                            <a
                                                href={getGoogleCalendarUrl(getNextNowruz())}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setMenuOpen(false)}
                                                className="w-full text-left px-4 py-2 text-[12px] font-medium text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors flex items-center gap-2"
                                            >
                                                Google Calendar
                                            </a>
                                            <a
                                                href={getOutlookCalendarUrl(getNextNowruz())}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setMenuOpen(false)}
                                                className="w-full text-left px-4 py-2 text-[12px] font-medium text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors flex items-center gap-2"
                                            >
                                                Outlook
                                            </a>
                                            <a
                                                href={getYahooCalendarUrl(getNextNowruz())}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setMenuOpen(false)}
                                                className="w-full text-left px-4 py-2 text-[12px] font-medium text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-700/50 transition-colors flex items-center gap-2"
                                            >
                                                Yahoo
                                            </a>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Dark digital timer */}
                    <div className="bg-neutral-900 dark:bg-black px-5 py-3.5 rounded-b-[22px] flex items-center justify-center">
                        <div
                            className="text-[28px] font-bold text-white tracking-[0.08em] tabular-nums leading-none"
                            style={{
                                fontFamily: "'SF Mono', 'Menlo', 'Monaco', 'Courier New', monospace",
                                textShadow: '0 0 20px rgba(255,255,255,0.15)',
                            }}
                        >
                            <span className="inline-block">
                                {pad(timeLeft.hours)}
                                <span className="text-white/40 mx-0.5">:</span>
                                {pad(timeLeft.minutes)}
                                <span className="text-white/40 mx-0.5">:</span>
                                {pad(timeLeft.seconds)}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
