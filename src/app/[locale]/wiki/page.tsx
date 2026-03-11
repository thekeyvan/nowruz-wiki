import { getAllArticles } from '@/lib/mdx';
import { getTranslations } from 'next-intl/server';
import { ContentPage, ContentSection } from '@/components/content-page';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('Wiki');
  return {
    title: `${t('title')} | Nowruz Wiki`,
    description: t('description'),
  };
}

export default async function WikiIndexPage() {
  const t = await getTranslations('Wiki');
  
  const allArticles = getAllArticles();
  
  // Group articles by category
  const groupedArticles = allArticles.reduce((acc, article) => {
    if (!acc[article.category]) {
      acc[article.category] = [];
    }
    acc[article.category].push(article);
    return acc;
  }, {} as Record<string, typeof allArticles>);

  // Sort categories logically if needed, or just alphabetize
  const sortedCategories = Object.keys(groupedArticles).sort();

  return (
    <ContentPage
      headerLabel={t('label')}
      title={t('title')}
      subtitle={t('subtitle')}
      heroImage="/images/page-headers/history.png" // We'll just use history for the main wiki hub
      heroImageAlt="Ancient Persian ruins at sunset"
    >
      <ContentSection>
        <div className="space-y-16 pb-20">
          {sortedCategories.map((category) => {
            const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
            const articles = groupedArticles[category];
            
            return (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="font-heading text-3xl font-semibold text-foreground">
                    {formattedCategory}
                  </h2>
                  <div className="h-px flex-1 bg-border/50"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <Link href={`/wiki/${article.slug}`} key={article.slug} className="group block h-full">
                      <div className="rounded-3xl border border-border/40 bg-card overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-border hover:shadow-lg dark:hover:shadow-rose-900/5 group-hover:-translate-y-1">
                        <div className="p-6 md:p-8 flex flex-col h-full bg-gradient-to-b from-transparent to-muted/20">
                          <h3 className="font-sans text-xl font-semibold mb-3 tracking-tight group-hover:text-rose-500 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                            {article.description}
                          </p>
                          <div className="flex items-center text-xs font-medium text-rose-500/80 group-hover:text-rose-500 transition-colors">
                            Read Article 
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ContentSection>
    </ContentPage>
  );
}
