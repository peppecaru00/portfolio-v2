<script>
    import { onMount } from 'svelte';
    import { groupImages } from '$lib/utils/groupImages';
    
    export let folderPath;
    export let jsonPath;
    export let styleClass;
    
    /** @type {Record<string, string[]>} */
    let groups = {};
    /** @type {string|null} */
    let selectedImage = null;
    
    onMount(async () => {
        try {
            const response = await fetch(jsonPath);
            /** @type {string[]} */
            const imageList = await response.json();
            groups = groupImages(imageList);
        } catch (error) {
            console.error('Error loading images:', error);
        }
    });
    
    /**
     * @param {string} imagePath
     */
    function openImage(imagePath) {
        selectedImage = imagePath;
        // Set focus to the modal for keyboard users
        setTimeout(() => {
            const modal = document.querySelector('.overlay');
            if (modal) {
                /** @type {HTMLElement} */ (modal).focus();
            }
        }, 10);
    }
    
    function closeImage() {
        selectedImage = null;
    }
    
    /**
     * @param {KeyboardEvent} event
     */
    function handleKeydown(event) {
        if (event.key === 'Escape') {
            closeImage();
        }
    }
</script>