import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDir = path.join(process.cwd(), 'content/articles');

function getCategories(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs.readdirSync(articlesDir).filter(dir =>
    fs.statSync(path.join(articlesDir, dir)).isDirectory()
  );
}

function getAllArticleSlugs(): { slug: string; title: string; description: string; category: string }[] {
  const categories = getCategories();
  const articles: { slug: string; title: string; description: string; category: string }[] = [];

  for (const category of categories) {
    const categoryDir = path.join(articlesDir, category);
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(source);
      const slug = file.replace(/\.md$/, '');
      articles.push({
        slug,
        title: data.title || slug,
        description: data.description || '',
        category: data.category || category,
      });
    }
  }

  return articles;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');

  // If no page is specified, return a JSON index of all articles
  if (!page) {
    const articles = getAllArticleSlugs();
    return NextResponse.json({
      total: articles.length,
      endpoints: articles.map(a => ({
        slug: a.slug,
        title: a.title,
        description: a.description,
        category: a.category,
        url: `/api/content?page=${a.slug}`,
      })),
    });
  }

  // Try to find the article in any category
  const categories = getCategories();

  for (const category of categories) {
    const filePath = path.join(articlesDir, category, `${page}.md`);
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf-8');
      return new NextResponse(source, {
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
        },
      });
    }
  }

  return new NextResponse(
    `Article "${page}" not found. Visit /api/content for a list of all available articles.`,
    { status: 404 }
  );
}
