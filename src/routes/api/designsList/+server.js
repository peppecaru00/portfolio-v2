import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    try {
        // Get the designs directory path
        const designsDir = path.join(process.cwd(), 'static', 'Media', 'Designs');
        
        // Read all files from the directory
        const files = fs.readdirSync(designsDir);
        
        // Filter image files
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
        
        return json(imageFiles);
    } catch (error) {
        console.error('Error reading designs directory:', error);
        return json({ error: 'Failed to read designs directory' }, { status: 500 });
    }
}