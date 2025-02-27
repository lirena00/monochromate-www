<script>
	import { Github } from 'lucide-svelte';
	let stars = 0;

	async function fetchStars() {
		try {
			const response = await fetch('https://api.github.com/repos/lirena00/monochromate');
			const data = await response.json();
			stars = data.stargazers_count;
		} catch (error) {
			console.error('Error fetching stars:', error);
		}
	}

	fetchStars();
</script>

<header class="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
	<div class="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
		<a href="/" class="group flex items-center gap-1">
			<div class="flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8">
				<img src="/logo.png" alt="Monochromate" />
			</div>
			<h1 class="text-xl font-bold transition-colors group-hover:text-neutral-600 sm:text-2xl">
				Monochromate
			</h1>
		</a>

		<div class="flex items-center gap-2 sm:gap-4">
			<a
				href="https://github.com/lirena00/monochromate"
				target="_blank"
				rel="noopener noreferrer"
				class="flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900"
			>
				<Github size={18} />
				<span class="hidden sm:inline">GitHub</span>
				<span
					class="ml-1 inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 transition-all hover:bg-neutral-200"
				>
					{stars} ⭐
				</span>
			</a>
			<a
				href="/#download"
				class="hidden rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-neutral-50 shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md sm:inline"
			>
				Download
			</a>
		</div>
	</div>
</header>
