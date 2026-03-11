import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NowruzCountdownPill } from "@/components/nowruz-countdown-pill";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/json-ld";
import Script from 'next/script';

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nowruz Wiki - The Persian New Year",
  description: "Discover the beauty, history, and traditions of the Persian New Year through our open-source wiki.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪻</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪻</text></svg>",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              {/* Skip to content — accessibility */}
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:rounded-lg focus:text-sm focus:font-medium"
              >
                Skip to content
              </a>
              <Navbar />
              <main id="main-content" className="flex-1 pb-32 md:pb-40">{children}</main>
              <Footer />
              <NowruzCountdownPill />
            </div>

            {/* WebSite + Organization JSON-LD */}
            <JsonLd data={{
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Nowruz Wiki',
              url: 'https://nowruz.wiki',
              description: 'A free, open-source encyclopedia about the Persian New Year (Nowruz). Discover the beauty, history, and traditions celebrated by over 300 million people.',
              publisher: {
                '@type': 'Organization',
                name: 'Nowruz Wiki',
                url: 'https://nowruz.wiki',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://nowruz.wiki/iran-flag-circle.svg',
                },
              },
            }} />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />

        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-KTS6W6RYTP" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KTS6W6RYTP');
          `}
        </Script>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
