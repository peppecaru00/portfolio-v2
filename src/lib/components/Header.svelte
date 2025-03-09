<script>
    import { page } from '$app/stores';
    import '../assets/styles/header.css'; // Import the CSS file

    let theme = 'dark';
    
    function toggleTheme() {
        theme = theme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', theme);
    }
</script>

<div class="header-container">
    <header class="header">
        <a href="/" class="logo-button">home<span class="logo-icon"></span></a>
        <div class="nav-buttons">
            <a href="/stills" class:active={$page.url.pathname === '/stills'} class="nav-button">stills</a>
            <a href="/designs" class:active={$page.url.pathname === '/designs'} class="nav-button">designs</a>
            <a href="/me" class:active={$page.url.pathname === '/me'} class="nav-button">me</a>
        </div>
    </header>
    <button on:click={toggleTheme} class="theme-toggle">
        {theme === 'dark' ? '☀️' : '🌙'}
    </button>
</div>
