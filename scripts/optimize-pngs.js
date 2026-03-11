/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directories = [
  'public/images/articles',
  'public/images/page-headers',
  'public/haft-sin/photos'
];

async function optimizeImages() {
  for (const dir of directories) {
    const fullDir = path.join(process.cwd(), dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      if (!file.endsWith('.png')) continue;
      
      const filePath = path.join(fullDir, file);
      const stat = fs.statSync(filePath);
      
      // Only process files larger than 100KB
      if (stat.size > 102400) {
        console.log(`Optimizing ${filePath}...`);
        const tempPath = filePath + '.tmp';
        
        try {
          await sharp(filePath)
            .png({ quality: 60, compressionLevel: 9, palette: true }) // Huge size reduction
            .toFile(tempPath);
          
          fs.renameSync(tempPath, filePath);
          
          const newStat = fs.statSync(filePath);
          console.log(`  Reduced ${file} from ${(stat.size/1024).toFixed(1)}KB to ${(newStat.size/1024).toFixed(1)}KB`);
        } catch (e) {
          console.error(`Error processing ${file}:`, e);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

optimizeImages();
