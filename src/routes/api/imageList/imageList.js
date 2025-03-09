import { json } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    try {
        // Get the stills directory path
        const stillsDir = path.join(process.cwd(), 'static', 'Media', 'Stills');
        
        // Read all files from the directory
        const files = fs.readdirSync(stillsDir);
        
        // Filter image files
        const imageFiles = files.filter(file => 
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
        );
        
        return json(imageFiles);
    } catch (error) {
        console.error('Error reading stills directory:', error);
        return json({ error: 'Failed to read stills directory' }, { status: 500 });
    }
}