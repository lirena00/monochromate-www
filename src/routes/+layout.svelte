<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://sponsoranysite.com/embed.js';
		script.async = true;
		document.head.appendChild(script);
	});

	afterNavigate(() => {
		window.sponsoranysite?.scan();
	});
</script>

{@render children()}
