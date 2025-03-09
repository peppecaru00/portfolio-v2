import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fix paths to be relative to project root instead of script location
const imagesDir = path.join(__dirname, '..', 'static', 'Media', 'Stills');
const outputFilePath = path.join(__dirname, '..', 'static', 'imageList.json');

console.log('Images directory:', imagesDir);
console.log('Output file path:', outputFilePath);

// Check if directories exist, create if necessary
if (!fs.existsSync(imagesDir)) {
    console.log(`Creating images directory: ${imagesDir}`);
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Ensure output directory exists
const outputDir = path.dirname(outputFilePath);
if (!fs.existsSync(outputDir)) {
    console.log(`Creating output directory: ${outputDir}`);
    fs.mkdirSync(outputDir, { recursive: true });
}

try {
    const files = fs.readdirSync(imagesDir);
    console.log(`Found ${files.length} total files`);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
    console.log(`Found ${imageFiles.length} image files`);
    
    fs.writeFileSync(outputFilePath, JSON.stringify(imageFiles, null, 2));
    console.log('Image list successfully generated:', outputFilePath);
    console.log('JSON content:', JSON.stringify(imageFiles).substring(0, 100) + (imageFiles.length > 5 ? '...' : ''));
} catch (err) {
    console.error('Error:', err);
}