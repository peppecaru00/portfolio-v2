/**
 * Maps image data for the stills gallery
 * @param {string[]} imageList - Array of image filenames from imageList.json
 * @param {string} basePath - Base path to the images directory
 * @returns {Object[]} Array of image objects with metadata
 */
export function mapImages(imageList, basePath = '/Media/Stills/') {
    if (!Array.isArray(imageList)) {
      console.error('Expected imageList to be an array, got:', typeof imageList);
      return [];
    }
    
    return imageList.map(filename => {
      // Extract information from filename
      // Assuming format: project-title-description.jpg
      const parts = filename.split('-');
      const extension = filename.split('.').pop();
      
      // Extract project name and description
      const project = parts[0] || 'untitled';
      
      // Join remaining parts for the title, remove extension
      let title = parts.slice(1).join(' ').replace(`.${extension}`, '');
      
      // If no title was found, use filename without extension
      if (!title || title === '') {
        title = filename.replace(`.${extension}`, '');
      }
      
      return {
        filename,
        src: `${basePath}${filename}`,
        alt: title,
        title: title.charAt(0).toUpperCase() + title.slice(1), // Capitalize first letter
        project,
        type: extension
      };
    });
  }
  
  /**
   * Groups images by project name
   * @param {Object[]} mappedImages - Array of mapped image objects
   * @returns {Object.<string, Object[]>} Object with project names as keys and arrays of images as values
   */
  export function groupImagesByProject(mappedImages) {
    return mappedImages.reduce((groups, image) => {
      const { project } = image;
      if (!groups[project]) {
        groups[project] = [];
      }
      groups[project].push(image);
      return groups;
    }, {});
  }
  
  /**
   * Sorts images by project name and then by title
   * @param {Object[]} mappedImages - Array of mapped image objects 
   * @returns {Object[]} Sorted array of image objects
   */