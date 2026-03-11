"use client"

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

const fade: Variants = {
    hidden: () => ({ opacity: 0, y: 30, filter: 'blur(8px)' }),
    show: (i: number) => ({
        opacity: 1, y: 0, filter: 'blur(0px)',
        transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
    })
};

interface ContentPageProps {
    headerLabel: string;
    title: string;
    subtitle: string;
    heroImage?: string;
    heroImageAlt?: string;
    children: React.ReactNode;
}

export function ContentPage({
    headerLabel,
    title,
    subtitle,
    heroImage,
    heroImageAlt,
    children
}: ContentPageProps) {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden" aria-label="Page hero">
                <div className="container mx-auto px-6 md:px-12 pt-24 pb-16 md:pt-36 md:pb-24 max-w-4xl">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
                        className="text-center"
                    >
                        <motion.p
                            custom={0} variants={fade}
                            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 font-medium"
                        >
                            {headerLabel}
                        </motion.p>

                        <motion.h1
                            custom={1} variants={fade}
                            className="font-heading text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[1] tracking-[-0.02em] text-foreground mb-6"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            custom={2} variants={fade}
                            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            {subtitle}
                        </motion.p>
                    </motion.div>
                </div>

                {heroImage && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="container mx-auto px-6 md:px-12 max-w-5xl pb-16"
                    >
                        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl shadow-black/10 dark:shadow-black/40">
                            <Image
                                src={heroImage}
                                alt={heroImageAlt || title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 80vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                )}
            </section>

            {/* Content */}
            <section className="pb-24 md:pb-32">
                <div className="max-w-3xl mx-auto px-6 md:px-12">
                    {children}
                </div>
            </section>
        </>
    );
}

/* Reusable animated section block within content pages */
export function ContentSection({
    children,
    className = ""
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-16 md:mb-20 ${className}`}
        >
            {children}
        </motion.div>
    );
}

/* Styled blockquote for Persian phrases */
export function PersianQuote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote className="relative my-10 pl-6 border-l-4 border-primary/30 dark:border-primary/40">
            <p className="text-lg md:text-xl font-heading italic text-foreground/80 leading-relaxed">
                {children}
            </p>
        </blockquote>
    );
}
