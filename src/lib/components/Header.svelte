<script>
    import { page } from '$app/stores';
    import { base } from '$app/paths'; // Import the base path
    import { onMount } from 'svelte';
    import '../assets/styles/header.css'; // Import the CSS file

    let theme = 'dark';
    
    onMount(() => {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            // Use saved preference
            theme = savedTheme;
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            theme = prefersDark ? 'dark' : 'light';
        }
        
        // Apply theme immediately on mount
        document.body.setAttribute('data-theme', theme);
    });

    function toggleTheme() {
        theme = theme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme);
    }
</script>

<div class="header-container">
    <header class="header">
        <a href="{base}/" class="logo-button"><span class="logo-icon"></span></a>
        <div class="nav-buttons">
            <a href="{base}/stills" class:active={$page.url.pathname === `${base}/stills`} class="nav-button">stills</a>
            <a href="{base}/designs" class:active={$page.url.pathname === `${base}/designs`} class="nav-button">designs</a>
            <a href="{base}/me" class:active={$page.url.pathname === `${base}/me`} class="nav-button">me</a>
        </div>
    <button on:click={toggleTheme}
        class="theme-toggle" 
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
    </button>
</div>
