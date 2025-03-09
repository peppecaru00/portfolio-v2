<script>
    import Header from '$lib/components/Header.svelte';
    import { fade } from 'svelte/transition';
    import { onNavigate } from '$app/navigation';
    import '../lib/assets/styles/global.css';
    import '../lib/assets/styles/theme.css';
    import '../lib/assets/styles/fontface.css';
    
    let isLoading = false;
    
    onNavigate((navigation) => {
        if (navigation.to && navigation.to.url) {
            isLoading = true;
        }
        
        return () => {
            setTimeout(() => {
                isLoading = false;
            }, 300);
        };
    });
</script>

<div class="app">
    <Header />
    
    {#if isLoading}
        <div class="loading">Loading...</div>
    {:else}
        <main>
            <div in:fade={{ duration: 300 }} class="content-container">
                <slot />
            </div>
        </main>
    {/if}
    
    <footer>
        <p>© 2025 Your Name</p>
    </footer>
</div>
