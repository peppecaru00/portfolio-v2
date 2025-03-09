<script>
    import ImageGallery from '$lib/components/ImageGallery.svelte';
    import '$lib/assets/styles/designs.css';
</script>

<div class="designs-container">
    <ImageGallery 
        folderPath="/Media/Designs/" 
        jsonPath="/designsList.json" 
        styleClass="styled-design" 
    />
</div>
