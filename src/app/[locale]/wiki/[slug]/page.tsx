import { getArticleBySlug, getAllArticles } from '@/lib/mdx';
import { notFound, redirect } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getTranslations } from 'next-intl/server';
import { ContentPage, ContentSection } from '@/components/content-page';
import Image from 'next/image';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  
  // We need to generate paths for all supported locales
  const locales = ['en', 'fa'];
  
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
  
  return {
    title: `${article.meta.title} | Nowruz Wiki`,
    description: article.meta.description,
  };
}

// Custom components to use inside MDX
const components = {
  h2: (props: any) => (
    <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-foreground mt-12 mb-6" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="font-heading text-2xl font-medium tracking-tight text-foreground mt-8 mb-4 border-b border-border/50 pb-2 inline-block" {...props} />
  ),
  p: (props: any) => (
    <p className="text-[16.5px] leading-[1.8] text-muted-foreground mb-6" {...props} />
  ),
  ul: (props: any) => (
    <ul className="space-y-3 my-6 pl-4 text-[16px] text-muted-foreground" {...props} />
  ),
  li: (props: any) => (
    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-rose-500/40" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-foreground/80 font-serif" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-rose-500/30 pl-6 py-2 my-8 italic text-lg text-muted-foreground/90 bg-rose-500/5 rounded-r-2xl" {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-12 border-border/40 border-t" {...props} />
  )
};

export default async function WikiArticlePage({ params }: PageProps) {
  const { slug } = await params;
  
  // Handle overlapping custom pages by redirecting to their hard-coded highly styled routes
  if (slug === 'haft-sin') redirect('/haft-sin');
  if (slug === 'chaharshanbe-suri') redirect('/');
  if (['ashe-reshteh', 'kuku-sabzi', 'sabzi-polo-maahi', 'traditional-nowruz-pastries'].includes(slug)) {
    redirect('/foods');
  }

  const t = await getTranslations('Navigation');
  
  const article = getArticleBySlug(slug);
  
  if (!article) {
    notFound();
  }
  
  const { meta, content } = article;
  
  // Format category string (e.g. 'traditions' -> 'Traditions')
  const formattedCategory = meta.category.charAt(0).toUpperCase() + meta.category.slice(1);

  return (
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
  );
}
