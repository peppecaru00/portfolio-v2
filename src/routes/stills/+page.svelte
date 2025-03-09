<script>
    import { onMount } from 'svelte';
    import { mapImages, groupImagesByProject } from '$lib/utils/mapImages';
    import "$lib/assets/styles/stills.css";
    
    let images = [];
    let imageGroups = {};
    let loading = true;
    let error = null;
    
    onMount(async () => {
      try {
        const response = await fetch('/imageList.json');
        if (!response.ok) throw new Error(`Failed to fetch image list: ${response.status}`);
        
        const imageList = await response.json();
        images = mapImages(imageList);
        imageGroups = groupImagesByProject(images);
        loading = false;
      } catch (err) {
        console.error('Error loading images:', err);
        error = err.message;
        loading = false;
      }
    });
  </script>
  
  <div class="stills-container">
    {#if loading}
      <div class="loading">Loading images...</div>
    {:else if error}
      <div class="error">Error: {error}</div>
    {:else}
      {#each Object.entries(imageGroups) as [project, projectImages]}
        <div class="project-section">
          <h2 class="project-title">{project}</h2>
          <div class="image-grid">
            {#each projectImages as image}
              <div class="image-card">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  class="styled-still"
                  loading="lazy"
                />
                <div class="image-overlay">
                  <h3 class="image-title">{image.title}</h3>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    {/if}
  </div>
