import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDir = path.join(process.cwd(), 'content/articles');

export interface ArticleMeta {
  title: string;
  description: string;
  category: string;
  coverImage: string;
  slug: string;
}

export function getCategories() {
  if (!fs.existsSync(articlesDir)) return [];
  return fs.readdirSync(articlesDir).filter(dir => {
    return fs.statSync(path.join(articlesDir, dir)).isDirectory();
  });
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];
  
  const categories = getCategories();
  let articles: ArticleMeta[] = [];

  categories.forEach(category => {
    const categoryDir = path.join(articlesDir, category);
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));

    files.forEach(file => {
      const filePath = path.join(categoryDir, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(source);

      // Create a slug from the filename
      const slug = file.replace(/\.md$/, '');

      articles.push({
        title: data.title,
        description: data.description,
        category: data.category || category,
        coverImage: data.coverImage,
        slug,
      } as ArticleMeta);
    });
  });

  return articles;
}

export function getArticleSlugs() {
  return getAllArticles().map(a => a.slug);
}

export function getArticleBySlug(slug: string) {
  const categories = getCategories();
  
  for (const category of categories) {
    const filePath = path.join(articlesDir, category, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(source);
      
      return {
        meta: {
          title: data.title,
          description: data.description,
          category: data.category || category,
          coverImage: data.coverImage,
          slug,
        } as ArticleMeta,
        content
      };
    }
  }
  
  return null;
}
