"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';

function getNextNowruz() {
    // Exact moment of 2026 Nowruz: March 20, 2026, 3:46 PM CET = 14:46 UTC
    return new Date("2026-03-20T14:46:00.000Z");
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
    
    // Format: YYYYMMDDTHHmmssZ
    const startStr = target.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    
    // Set end time to 1 hour later for the calendar event duration
    const end = new Date(target.getTime() + 60 * 60 * 1000);
    const endStr = end.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

    const ics = [
        'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Nowruz Wiki//EN',
        'BEGIN:VEVENT',
        `DTSTART:${startStr}`, `DTEND:${endStr}`,
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
    const startStr = target.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const end = new Date(target.getTime() + 60 * 60 * 1000);
    const endStr = end.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    return `https://calendar.google.com/calendar/render?${new URLSearchParams({
        action: 'TEMPLATE', text: 'Nowruz — Persian New Year',
        dates: `${startStr}/${endStr}`, details: 'Happy Nowruz! The Persian New Year begins at the exact moment of the vernal equinox. 🌸', location: 'Worldwide'
    })}`;
}

export function NowruzCountdown() {
    const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        return (
            <div className="bg-white/20 backdrop-blur-3xl rounded-[24px] border border-white/20 p-6 w-full sm:w-[300px] shadow-2xl">
                <p className="text-3xl mb-2">🌸</p>
                <p className="text-2xl font-semibold text-white tracking-tight">Nowruz Mobarak!</p>
                <p className="text-sm text-white/70 mt-1">Happy New Year</p>
            </div>
        );
    }

    return (
        <div className="relative bg-[#2c2826]/80 dark:bg-black/60 backdrop-blur-3xl rounded-2xl md:rounded-[32px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-4 md:p-8 w-full md:w-[340px] overflow-hidden group hover:bg-[#2c2826]/90 transition-colors duration-500">
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-24 md:w-48 h-24 md:h-48 bg-white/10 rounded-full blur-[30px] md:blur-[60px] -mx-10 -my-10 pointer-events-none transition-all duration-700 group-hover:bg-white/15" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-3 md:gap-0">
                {/* Top Section: Flex row on mobile, col on desktop */}
                <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start w-full">
                    
                    {/* Destination Spring & Days Tracker */}
                    <div className="flex flex-col">
                        <p className="text-[8px] md:text-xs font-semibold text-white/50 tracking-[0.2em] uppercase mb-0.5 md:mb-3">
                            Destination Spring
                        </p>
                        <div className="flex items-baseline gap-1 md:gap-2 mb-0 md:mb-1">
                            <AnimatePresence mode="popLayout">
                                <motion.span
                                    key={timeLeft.days}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                                    className="text-4xl md:text-[64px] font-semibold text-white leading-none tracking-tighter"
                                >
                                    {timeLeft.days}
                                </motion.span>
                            </AnimatePresence>
                            <p className="text-xs md:text-base font-medium text-white/80 tracking-wide">
                                {timeLeft.days === 1 ? 'day' : 'days'}
                            </p>
                        </div>
                        {/* Only show "until Nowruz" on md+ to save space on mobile */}
                        <p className="hidden md:block text-sm md:text-base font-medium text-white/80 tracking-wide ml-1">
                            until Nowruz
                        </p>
                    </div>

                    {/* Time Units: Row on mobile, grid on desktop */}
                    <div className="flex gap-1.5 md:grid md:grid-cols-3 md:gap-3 md:mt-8 md:w-full">
                        {[
                            { label: 'HRS', value: pad(timeLeft.hours) },
                            { label: 'MIN', value: pad(timeLeft.minutes) },
                            { label: 'SEC', value: pad(timeLeft.seconds) },
                        ].map((unit) => (
                            <div key={unit.label} className="bg-black/40 rounded-[10px] md:rounded-2xl flex flex-col items-center justify-center p-2 md:p-4 min-w-[48px] md:min-w-0 ring-1 ring-white/5 shadow-inner backdrop-blur-md">
                                <span className="text-sm md:text-2xl font-semibold text-white tabular-nums tracking-widest font-sans mb-0 md:mb-1">
                                    {unit.value}
                                </span>
                                <span className="text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-white/40 font-semibold text-center mt-0.5">
                                    {unit.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add to Calendar Button */}
                <div className="relative mt-1 md:mt-8 w-full">
                    <button
                        onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}
                        className="flex items-center justify-center gap-2 md:gap-3 w-full py-2.5 md:py-4 rounded-[10px] md:rounded-2xl bg-white/10 hover:bg-white/20 text-xs md:text-sm font-semibold text-white transition-all cursor-pointer ring-1 ring-white/10 active:scale-95"
                    >
                        <CalendarPlus className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Add to Calendar
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
                                    className="absolute right-0 md:left-0 bottom-[calc(100%+8px)] md:bottom-[calc(100%+12px)] w-[180px] md:w-full bg-[#3a3a3c]/95 backdrop-blur-2xl border border-white/10 rounded-[14px] md:rounded-[24px] shadow-2xl overflow-hidden z-50 p-1 md:p-2"
                                >
                                    <button onClick={() => { downloadICS(); setMenuOpen(false); }} className="w-full text-center px-4 py-2 md:py-3 text-[11px] md:text-sm font-semibold text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-colors cursor-pointer mb-0.5 tracking-wide">
                                        Apple Calendar
                                    </button>
                                    <a href={getGoogleCalendarUrl(getNextNowruz())} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="block w-full text-center px-4 py-2 md:py-3 text-[11px] md:text-sm font-semibold text-white hover:bg-white/10 rounded-lg md:rounded-xl transition-colors cursor-pointer tracking-wide">
                                        Google Calendar
                                    </a>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
