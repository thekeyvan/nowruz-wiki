import { getArticleBySlug, getAllArticles } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { redirect, routing } from '@/i18n/routing';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ContentPage, ContentSection } from '@/components/content-page';
import { JsonLd } from '@/components/json-ld';

const BASE_URL = 'https://nowruz.wiki';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  
  // We need to generate paths for all supported locales dynamically from our config
  const locales = routing.locales;
  
  const params: { locale: string; slug: string }[] = [];
  
  for (const locale of locales) {
    for (const article of articles) {
      params.push({
        locale,
        slug: article.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) return {};

  const imageUrl = article.meta.coverImage
    ? `${BASE_URL}${article.meta.coverImage}`
    : `${BASE_URL}/images/page-headers/history.png`;
  
  return {
    title: `${article.meta.title} | Nowruz Wiki`,
    description: article.meta.description,
    alternates: { canonical: `${BASE_URL}/${slug}` },
    openGraph: {
      title: `${article.meta.title} | Nowruz Wiki`,
      description: article.meta.description,
      url: `${BASE_URL}/${slug}`,
      siteName: 'Nowruz Wiki',
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.meta.title} | Nowruz Wiki`,
      description: article.meta.description,
      images: [imageUrl],
    },
  };
}

// Custom components to use inside MDX
const components = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mt-12 mb-6" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground mt-8 mb-4 border-b border-border/50 pb-2 inline-block" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="text-[16.5px] leading-[1.8] text-muted-foreground mb-6" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="space-y-3 my-6 pl-4 text-[16px] text-muted-foreground" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-500/40" {...props} />
  ),
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: React.ComponentProps<'em'>) => (
    <em className="italic text-foreground/80 font-serif" {...props} />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-2 border-rose-500/30 pl-6 py-2 my-8 italic text-lg text-muted-foreground/90 bg-rose-500/5 rounded-r-2xl" {...props} />
  ),
  hr: (props: React.ComponentProps<'hr'>) => (
    <hr className="my-12 border-border/40 border-t" {...props} />
  )
};

export default async function WikiArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  
  // Handle overlapping custom pages by redirecting to their hard-coded highly styled routes
  if (slug === 'haft-sin') redirect({ href: '/haft-sin', locale });
  if (slug === 'chaharshanbe-suri') redirect({ href: '/', locale });

  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }
  
  const { meta, content } = article;
  
  // Format category string (e.g. 'traditions' -> 'Traditions')
  const formattedCategory = meta.category.charAt(0).toUpperCase() + meta.category.slice(1);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.description,
    image: meta.coverImage ? `${BASE_URL}${meta.coverImage}` : undefined,
    url: `${BASE_URL}/${slug}`,
    publisher: {
      '@type': 'Organization',
      name: 'Nowruz Wiki',
      url: BASE_URL,
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <ContentPage
        headerLabel={`Wiki / ${formattedCategory}`}
        title={meta.title}
        subtitle={meta.description}
        heroImage={meta.coverImage}
        heroImageAlt={meta.title}
      >
        <ContentSection className="w-full">
          <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-rose-500 hover:prose-a:text-rose-600 max-w-none w-full xl:w-[85%] mx-auto pb-20">
            <MDXRemote source={content} components={components} />
          </div>
        </ContentSection>
      </ContentPage>
    </>
  );
}
