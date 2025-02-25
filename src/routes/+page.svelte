<script>
	import {
		Power,
		Sliders,
		Shield,
		Heart,
		Github,
		ExternalLink,
		Settings,
		Eye
	} from 'lucide-svelte';
	import Firefox from '../components/icons/firefox.svelte';
	import Chrome from '../components/icons/chrome.svelte';

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
	let browser = 'Chrome';
	if (typeof window !== 'undefined') {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
			browser = 'Firefox';
		}
	}
</script>

<svelte:head>
	<title>Monochromate - Best Greyscale Browser Extension for Distraction-Free Browsing</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#262626" />
	<meta
		name="description"
		content="Boost your focus and reduce eye strain with Monochromate, the ultimate minimal greyscale browser extension. Customize your screen’s color settings to eliminate distractions and improve productivity."
	/>
	<meta
		name="keywords"
		content="greyscale browser extension, distraction-free browsing, reduce eye strain, minimal browser extension, productivity tool, screen time management"
	/>
	<meta property="og:title" content="Monochromate - Best Greyscale Browser Extension" />
	<meta
		property="og:description"
		content="Boost your focus and reduce eye strain with Monochromate, the ultimate minimal greyscale browser extension."
	/>
	<meta property="og:image" content="https://monochromate.lirena.in/og.png" />
	<meta property="og:url" content="https://monochromate.lirena.in" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lirena00" />
	<meta name="twitter:title" content="Monochromate - Best Greyscale Browser Extension" />
	<meta
		name="twitter:description"
		content="Boost your focus and reduce eye strain with Monochromate, the ultimate minimal greyscale browser extension."
	/>
	<meta name="author" content="Monochromate Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://monochromate.lirena.in" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-gray-800 antialiased">
	<header class="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
		<div class="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
			<a href="#" class="group flex items-center gap-1">
				<div class="flex h-7 w-7 items-center justify-center sm:h-8 sm:w-8">
					<img src="/logo.png" alt="Monochromate in action" />
				</div>
				<h1 class="text-xl font-bold transition-colors group-hover:text-gray-600 sm:text-2xl">
					Monochromate
				</h1>
			</a>

			<div class="flex items-center gap-2 sm:gap-4">
				<a
					href="https://github.com/lirena00/monochromate"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-2 text-gray-700 transition-colors hover:text-gray-900"
				>
					<Github size={18} />
					<span class="hidden sm:inline">GitHub</span>
					<span class="ml-1 rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium">
						{stars} ⭐
					</span>
				</a>
				<a
					href="#download"
					class="hidden rounded-full bg-neutral-800 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-neutral-800/90 sm:inline"
				>
					Download
				</a>
			</div>
		</div>
	</header>

	<section class="container mx-auto px-4 py-12 sm:px-6 sm:py-20 md:py-28">
		<div class="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
			<div class="w-full space-y-5 text-center sm:space-y-7 md:w-1/2 md:text-left">
				<h2 class="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
					Focus on what <span class="relative font-semibold text-neutral-500 italic">
						matters.
						<span class="absolute bottom-0 left-0 h-1 w-full bg-neutral-500 opacity-50"></span>
					</span>
				</h2>
				<p class="mx-auto max-w-md text-base leading-relaxed text-gray-500 sm:text-lg md:mx-0">
					Turn down the colors, turn up your focus. Transform your browsing experience with a
					customizable greyscale filter that helps you reduce screen time and stay distraction-free.
				</p>
				<div class="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:gap-4 md:justify-start">
					<a
						href="#download"
						class="group flex items-center justify-center gap-2 rounded-full bg-neutral-800 px-7 py-3 text-white hover:bg-neutral-800/90"
					>
						{#if browser === 'Firefox'}
							<Firefox class="h-8 w-8" />
						{:else}
							<Chrome class="h-8 w-8" />
						{/if}
						<span>Add to {browser}</span>
					</a>
					<a
						href="#features"
						class="flex items-center justify-center gap-2 rounded-full border border-gray-300 px-7 py-3 transition-colors hover:bg-gray-50"
					>
						Learn more
					</a>
				</div>

				<div class="flex flex-wrap gap-4 pt-4 text-sm text-gray-500">
					<div class="flex items-center gap-1">
						<Shield size={14} />
						<span>No tracking</span>
					</div>
					<div class="flex items-center gap-1">
						<Settings size={14} />
						<span>Easily configurable</span>
					</div>
					<div class="flex items-center gap-1">
						<Eye size={14} />
						<span>Minimal permissions</span>
					</div>
				</div>
			</div>
			<div class="relative w-full md:w-1/2">
				<div
					class="rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-lg transition-all hover:shadow-xl"
				>
					<img src="/browser-mockup.png" alt="Monochromate in action" class="w-full rounded-lg" />
				</div>
			</div>
		</div>
	</section>

	<section id="features" class="border-y border-gray-200 bg-gray-50 py-12 sm:py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mb-10 flex flex-col items-center gap-3 sm:mb-14">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">Features</h2>
				<p class="max-w-xl text-center leading-relaxed text-gray-500">
					Simple tools to help you focus on what really matters while browsing the web.
				</p>
			</div>

			<div class="grid gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
				<div
					class="group rounded-xl border border-gray-300 bg-white p-7 shadow-sm transition-all hover:border-gray-400 hover:shadow-md"
				>
					<div class="mb-5">
						<div
							class="inline-flex rounded-lg bg-gray-100 p-3 transition-colors group-hover:bg-neutral-800/5"
						>
							<Power size={24} />
						</div>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Greyscale Filter</h3>
					<p class="leading-relaxed text-gray-500">
						Toggle the monochrome filter on and off with a single click. Works instantly on any
						website to reduce visual stimulation.
					</p>
				</div>

				<div
					class="group rounded-xl border border-gray-300 bg-white p-7 shadow-sm transition-all hover:border-gray-400 hover:shadow-md"
				>
					<div class="mb-5">
						<div
							class="inline-flex rounded-lg bg-gray-100 p-3 transition-colors group-hover:bg-neutral-800/5"
						>
							<Sliders size={24} />
						</div>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Customizable Intensity</h3>
					<p class="leading-relaxed text-gray-500">
						Fine-tune the greyscale intensity from 0-100% to find your perfect balance between focus
						and visual experience.
					</p>
				</div>

				<div
					class="group rounded-xl border border-gray-300 bg-white p-7 shadow-sm transition-all hover:border-gray-400 hover:shadow-md"
				>
					<div class="mb-5">
						<div
							class="inline-flex rounded-lg bg-gray-100 p-3 transition-colors group-hover:bg-neutral-800/5"
						>
							<Shield size={24} />
						</div>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Site Exceptions</h3>
					<p class="leading-relaxed text-gray-500">
						Easily manage exceptions for sites where you want to keep the original colors, like
						photo galleries or design work.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="download" class="border-y border-gray-200 bg-white py-12 sm:py-20">
		<div class="container mx-auto px-4 text-center sm:px-6">
			<div class="mb-8 flex flex-col items-center gap-3 sm:mb-10">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">Get Monochromate Today</h2>
				<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
					Start your grayscaled browsing experience with our lightweight extension.
				</p>
			</div>

			<div
				class="mx-auto mb-8 flex max-w-2xl flex-col flex-wrap justify-center gap-4 sm:mb-12 sm:flex-row"
			>
				<a
					href="https://chromewebstore.google.com/detail/monochromate/hafcajcllbjnoolpfngclfmmgpikdhlm"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-center gap-3 rounded-xl bg-neutral-800 px-8 py-4 text-white transition-all hover:scale-[1.05]"
				>
					<Chrome class="h-8 w-8" />
					<div class="text-left">
						<div class="text-xs opacity-75">Download for</div>
						<div class="font-medium">Chrome</div>
					</div>
					<ExternalLink size={16} class="opacity-0 transition-opacity group-hover:opacity-100" />
				</a>
				<a
					href="https://addons.mozilla.org/en-US/firefox/addon/monochromate/"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-center gap-3 rounded-xl bg-gray-100 px-8 py-4 transition-all hover:scale-[1.05] hover:bg-gray-200"
				>
					<Firefox class="h-8 w-8" />
					<div class="text-left">
						<div class="text-xs text-gray-500">Download for</div>
						<div class="font-medium">Firefox</div>
					</div>
					<ExternalLink size={16} class="opacity-0 transition-opacity group-hover:opacity-100" />
				</a>
			</div>
		</div>
	</section>

	<footer class="border-t border-gray-200 bg-gray-50 py-8 sm:py-12">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
				<div class="flex items-center gap-1">
					<div class="flex h-8 w-8 items-center justify-center">
						<img src="/logo.png" alt="Monochromate in action" class="" />
					</div>
					<h1 class="text-2xl font-bold transition-colors group-hover:text-gray-600">
						Monochromate
					</h1>
				</div>

				<div class="flex flex-col items-center gap-6 sm:flex-row">
					<div class="flex items-center gap-4">
						<a
							href="https://buymeacoffee.com/lirena00"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-1 text-gray-600 transition-colors hover:text-neutral-800"
						>
							<Heart size={15} color="red" />
							Support
						</a>
						<a
							href="https://github.com/lirena00/monochromate"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-1 text-gray-600 transition-colors hover:text-neutral-800"
						>
							<Github size={15} />
							GitHub
						</a>
					</div>
				</div>
			</div>

			<div
				class="mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-4 text-sm text-gray-500 sm:mt-8 sm:pt-6 md:flex-row md:gap-0"
			>
				<p>© {new Date().getFullYear()} Monochromate. All rights reserved.</p>
				<p class="mt-2 md:mt-0">
					Made with ♥ by <a
						href="https://github.com/lirena00"
						class="transition-colors hover:text-neutral-800">Lirena</a
					>
				</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		font-family:
			'Inter',
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			sans-serif;
		line-height: 1.6;
	}

	:global(p) {
		line-height: 1.7;
	}

	/* Add responsive utilities */
	@media (max-width: 640px) {
		:global(h1, h2, h3) {
			word-break: break-word;
		}

		:global(.container) {
			max-width: 100%;
		}
	}
</style>
