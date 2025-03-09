<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    
    onMount(() => {
        goto('/me');
    });
</script>

<div>Redirecting...</div>
