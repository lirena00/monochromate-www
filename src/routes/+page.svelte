<script>
	import {
		Power,
		Sliders,
		Shield,
		Heart,
		Github,
		ArrowRight,
		Star,
		Monitor,
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
	<title>Monochromate - A Minimal Greyscale Browser Extension</title>
	<meta
		name="description"
		content="Transform your browsing experience with Monochromate, a minimal extension that applies a customizable greyscale filter to reduce digital distractions."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-gray-800 antialiased">
	<!-- Header with subtle shadow -->
	<header class="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
		<div class="container mx-auto flex items-center justify-between px-6 py-4">
			<a href="#" class="group flex items-center gap-1">
				<div class="flex h-8 w-8 items-center justify-center">
					<img src="/logo.png" alt="Monochromate in action" class="" />
				</div>
				<h1 class="text-2xl font-bold transition-colors group-hover:text-gray-600">Monochromate</h1>
			</a>

			<div class="flex items-center gap-4">
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
					class="rounded-full bg-neutral-800 px-5 py-2 text-sm font-medium text-white shadow-md transition-all hover:scale-105 hover:bg-neutral-800/90"
				>
					Download
				</a>
			</div>
		</div>
	</header>

	<!-- Hero Section with more visual elements -->
	<section class="container mx-auto px-6 py-20 md:py-28">
		<div class="flex flex-col items-center gap-12 md:flex-row">
			<div class="space-y-7 md:w-1/2">
				<h2 class="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
					Focus on what <span class="relative font-semibold text-neutral-500 italic">
						matters.
						<span class="absolute bottom-0 left-0 h-1 w-full bg-neutral-500 opacity-50"></span>
					</span>
				</h2>
				<p class="max-w-md text-lg leading-relaxed text-gray-500">
					Turn down the colors, turn up your focus. Transform your browsing experience with a
					customizable greyscale filter that helps you reduce screen time and stay distraction-free.
				</p>
				<div class="flex flex-col gap-4 pt-2 sm:flex-row">
					<a
						href="#download"
						class="group flex items-center justify-center gap-2 rounded-full bg-neutral-800 px-7 py-3 text-white hover:bg-neutral-800/90 hover:shadow-lg"
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
			<div class="relative md:w-1/2">
				<div
					class="rounded-2xl border border-gray-200 bg-gray-50 p-2 shadow-lg transition-all hover:shadow-xl"
				>
					<img src="/browser-mockup.png" alt="Monochromate in action" class="w-full rounded-lg" />
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section with improved cards -->
	<section id="features" class="border-y border-gray-200 bg-gray-50 py-20">
		<div class="container mx-auto px-6">
			<div class="mb-14 flex flex-col items-center gap-3">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">Features</h2>
				<p class="max-w-xl text-center leading-relaxed text-gray-500">
					Simple tools to help you focus on what really matters while browsing the web.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<!-- Feature 1 -->
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

				<!-- Feature 2 -->
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

				<!-- Feature 3 -->
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

	<!-- Download Section with improved CTA -->
	<section id="download" class="border-y border-gray-200 bg-white py-20">
		<div class="container mx-auto px-6 text-center">
			<div class="mb-10 flex flex-col items-center gap-3">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">Get Monochromate Today</h2>
				<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
					Start your grayscaled browsing experience with our lightweight extension.
				</p>
			</div>

			<div class="mx-auto mb-12 flex max-w-2xl flex-wrap justify-center gap-4">
				<a
					href="https://chromewebstore.google.com/detail/monochromate/hafcajcllbjnoolpfngclfmmgpikdhlm"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center justify-center gap-3 rounded-xl bg-neutral-800 px-8 py-4 text-white transition-all hover:scale-105 hover:shadow-lg"
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
					class="group flex items-center justify-center gap-3 rounded-xl bg-gray-100 px-8 py-4 transition-all hover:scale-105 hover:bg-gray-200 hover:shadow-lg"
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

	<!-- Footer with improved layout -->
	<footer class="border-t border-gray-200 bg-gray-50 py-12">
		<div class="container mx-auto px-6">
			<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
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
				class="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row"
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
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
		line-height: 1.6;
	}

	:global(p) {
		line-height: 1.7;
	}

	@keyframes float {
		0% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.animate-float {
		animation: float 3s ease-in-out infinite;
	}
</style>
