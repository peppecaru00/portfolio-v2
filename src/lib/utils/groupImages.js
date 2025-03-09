// src/lib/utils/groupImages.js
/**
 * Groups image filenames by their prefix (part before the first hyphen)
 * @param {string[]} imageList - Array of image filenames to group
 * @returns {Object.<string, string[]>} Object with prefixes as keys and arrays of matching images as values
 */
export function groupImages(imageList) {
    return imageList.reduce((groups, image) => {
        const prefix = image.split('-')[0];
        if (!groups[prefix]) groups[prefix] = [];
        groups[prefix].push(image);
        return groups;
    }, {});
}