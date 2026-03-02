/**
 * Image Compression Script
 * Converts large PNG/JPG images in public/ to WebP format
 * and creates compressed originals as fallback.
 *
 * Run: node scripts/compress-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Images to compress — target size and quality settings
const IMAGES = [
    // Large hero/feature PNGs (6MB each) → aggressive compression
    { file: 'hero.png', quality: 80, width: 1920 },
    { file: 'side.png', quality: 80, width: 1920 },
    { file: 'class1.png', quality: 80, width: 1280 },
    { file: 'class2.png', quality: 80, width: 1280 },
    { file: 'plans.png', quality: 80, width: 1280 },
    { file: 'education.png', quality: 80, width: 1280 },
    { file: 'Outside cleaning.png', quality: 80, width: 1280 },
    { file: 'malik.png', quality: 82, width: 800 },
    { file: 'nga.png', quality: 82, width: 800 },
    { file: 'pic1 1.png', quality: 82, width: 600 },
    { file: 'app-screenshot.png', quality: 82, width: 600 },
    // JPGs — convert to WebP too
    { file: 'inside.jpg', quality: 82, width: 1280 },
    { file: 'JoinUsForSalah.jpg', quality: 80, width: 1280 },
    { file: 'HelpThoseInNeed.jpg', quality: 80, width: 1280 },
    { file: 'TheBlessedHourOfTheNight.jpg', quality: 80, width: 1280 },
    // Gallery
    { file: 'gallery/BBQ1.jpg', quality: 80, width: 1000 },
    { file: 'gallery/BBQ2.jpg', quality: 80, width: 1000 },
    { file: 'gallery/BBQ3.jpg', quality: 80, width: 1000 },
    { file: 'gallery/BBQ4.jpg', quality: 80, width: 1000 },
    { file: 'gallery/BBQ5.jpg', quality: 80, width: 1000 },
    { file: 'gallery/BBQ6.jpg', quality: 80, width: 1000 },
    { file: 'gallery/quranGrad.jpg', quality: 82, width: 1000 },
    { file: 'gallery/604913093_18212017039315123_3491130923211631296_n.jpg', quality: 80, width: 1000 },
];

function formatBytes(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
}

async function compressImage({ file, quality, width }) {
    const inputPath = path.join(PUBLIC_DIR, file);
    const ext = path.extname(file);
    const baseName = file.replace(ext, '');
    const outputPath = path.join(PUBLIC_DIR, `${baseName}.webp`);

    if (!fs.existsSync(inputPath)) {
        console.log(`  ⚠️  Skipping (not found): ${file}`);
        return;
    }

    const originalSize = fs.statSync(inputPath).size;

    try {
        await sharp(inputPath)
            .resize(width, null, {
                withoutEnlargement: true,
                fit: 'inside',
            })
            .webp({ quality })
            .toFile(outputPath);

        const newSize = fs.statSync(outputPath).size;
        const saving = Math.round((1 - newSize / originalSize) * 100);
        console.log(`  ✅ ${file}`);
        console.log(`     ${formatBytes(originalSize)} → ${formatBytes(newSize)} (saved ${saving}%)`);
    } catch (err) {
        console.error(`  ❌ Failed: ${file} — ${err.message}`);
    }
}

async function main() {
    console.log('\n🖼️  AICP Image Compression Script');
    console.log('══════════════════════════════════\n');

    let totalBefore = 0;
    let totalAfter = 0;

    for (const img of IMAGES) {
        const inputPath = path.join(PUBLIC_DIR, img.file);
        if (fs.existsSync(inputPath)) {
            totalBefore += fs.statSync(inputPath).size;
        }
    }

    for (const img of IMAGES) {
        await compressImage(img);
    }

    for (const img of IMAGES) {
        const ext = path.extname(img.file);
        const baseName = img.file.replace(ext, '');
        const webpPath = path.join(PUBLIC_DIR, `${baseName}.webp`);
        if (fs.existsSync(webpPath)) {
            totalAfter += fs.statSync(webpPath).size;
        }
    }

    console.log('\n══════════════════════════════════');
    console.log(`📊 Total: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}`);
    console.log(`💾 Saved: ${formatBytes(totalBefore - totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}% reduction)`);
    console.log('\n✨ Done! WebP files created alongside originals.');
    console.log('   Next step: Update image src references to use .webp files.\n');
}

main().catch(console.error);
