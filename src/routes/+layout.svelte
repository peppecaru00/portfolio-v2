<script>
    import Header from '$lib/components/Header.svelte';
    import { fade, fly, scale, slide } from 'svelte/transition';
    import { onNavigate } from '$app/navigation';
    import { quintOut } from 'svelte/easing';
    import '../lib/assets/styles/global.css';
    import '../lib/assets/styles/theme.css';
    
    // This ensures all pages are prerendered at build time
    export const prerender = true;

    // Makes route pre-generated at build time, not server-side rendered
    export const ssr = false;

    let isLoading = false;
    
    // Add page transitions
    onNavigate((navigation) => {
        if (navigation.to && navigation.to.url) {
            console.log('Navigating to', navigation.to.url.pathname);
            isLoading = true;
        }
        
        // Reset loading state when navigation completes
        return () => {
            setTimeout(() => {
                isLoading = false;
            }, 300); // Small delay to ensure animations play properly
        };
    });
</script>

<div class="app">
    <Header />
    
    {#if isLoading}
        <div class="loading-indicator" in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
            <div class="loading-spinner"></div>
        </div>
    {/if}
    
    <main>
        <div in:fade={{ duration: 600, delay: 300 }} 
             out:fade={{ duration: 300 }}
             class="content-container">
            <slot />
        </div>
    </main>
    
    <footer class="footer" in:slide={{ duration: 400, delay: 600 }}>
        <div class="footer-content">Designed with <span in:scale={{ start: 0.5, duration: 500, delay: 1000 }}>🤗</span>, by me.</div>
    </footer>
</div>
