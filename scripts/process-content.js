const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const contentDir = path.join(__dirname, '../content/new');
const outDir = path.join(__dirname, '../content/articles');

// Mapping files to categories
const categories = {
  'traditions': ['chaharshanbe-suri.md', 'haft-sin.md', 'sizdah-bedar.md', 'tahvil-saal.md', 'eidi-new-year-gift.md'],
  'folklore': ['amoo-nowruz.md', 'haji-firuz.md', 'king-jamshid.md', 'nane-sarma.md'],
  'global': ['nowruz-in-afganestan.md', 'nowruz-in-central-asia-and-azerbaijan.md', 'nowruz-in-kurdestan.md'],
  'food': ['ashe-reshteh.md', 'kuku-sabzi.md', 'sabzi-polo-maahi.md', 'traditional-nowruz-pastries.md'],
  'culture': ['nowruz-greetings-and-phrases.md', 'nowruz-in-poetry.md', 'overview.md', 'zoroastrianism-and-nowruz.md']
};

function getCategory(filename) {
  for (const [cat, files] of Object.entries(categories)) {
    if (files.includes(filename)) return cat;
  }
  return 'uncategorized';
}

function processFiles() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract title from first H1
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : file.replace('.md', '').replace(/-/g, ' ');

    // Extract first paragraph for description
    const paragraphs = content.split('\n\n');
    let description = '';
    for (const p of paragraphs) {
        if (p.trim() && !p.startsWith('#') && !p.startsWith('*') && !p.startsWith('>')) {
            description = p.replace(/\*\*/g, '').replace(/\*/g, '').trim().substring(0, 160);
            if (description.length === 160) description += '...';
            break;
        }
    }

    const category = getCategory(file);

    const frontmatter = {
      title,
      description,
      category,
      coverImage: `/images/articles/${file.replace('.md', '.jpg')}`
    };

    const newContent = matter.stringify(content, frontmatter);
    
    const catDir = path.join(outDir, category);
    if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
    
    fs.writeFileSync(path.join(catDir, file), newContent);
    console.log(`Processed: ${file} -> ${category}/${file}`);
  });
}

processFiles();
