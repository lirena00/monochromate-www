<script>
	import {
		Power,
		Sliders,
		Shield,
		Heart,
		ExternalLink,
		Settings,
		Eye,
		Coffee,
		Quote
	} from 'lucide-svelte';
	import Firefox from '../components/icons/firefox.svelte';
	import Chrome from '../components/icons/chrome.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

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
	<meta name="theme-color" content="#171717" />
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

<div class="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
	<Header />

	<section class="container mx-auto px-4 py-12 sm:px-6 sm:py-20 md:py-28">
		<div class="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12">
			<div class="w-full space-y-5 text-center sm:space-y-7 md:w-1/2 md:text-left">
				<h2 class="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
					Focus on what <span class="relative font-semibold text-neutral-500 italic">
						matters.
						<span class="absolute bottom-0 left-0 h-1 w-full bg-neutral-400 opacity-30"></span>
					</span>
				</h2>
				<p class="mx-auto max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg md:mx-0">
					Turn down the colors, turn up your focus. Transform your browsing experience with a
					customizable greyscale filter that helps you reduce screen time and stay distraction-free.
				</p>
				<div class="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:gap-4 md:justify-start">
					<a
						href="#download"
						class="group flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-7 py-3 text-neutral-50 shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md active:bg-neutral-950"
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
						class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-7 py-3 shadow-sm transition-all hover:border-neutral-400 hover:bg-neutral-100 hover:shadow-md active:bg-neutral-200"
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

	<section id="features" class="border-y border-neutral-200 bg-neutral-50 py-12 sm:py-20">
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
					class="group rounded-xl border border-neutral-300 bg-white p-7 shadow-sm transition-all hover:border-neutral-400 hover:shadow-md"
				>
					<div class="mb-5">
						<div
							class="inline-flex rounded-lg bg-neutral-100 p-3 transition-colors group-hover:bg-neutral-900/5"
						>
							<Power size={24} class="text-neutral-700" />
						</div>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Greyscale Filter</h3>
					<p class="leading-relaxed text-neutral-500">
						Toggle the monochrome filter on and off with a single click. Works instantly on any
						website to reduce visual stimulation.
					</p>
				</div>

				<div
					class="group rounded-xl border border-neutral-300 bg-white p-7 shadow-sm transition-all hover:border-neutral-400 hover:shadow-md"
				>
					<div class="mb-5">
						<div
							class="inline-flex rounded-lg bg-neutral-100 p-3 transition-colors group-hover:bg-neutral-900/5"
						>
							<Sliders size={24} />
						</div>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Customizable Intensity</h3>
					<p class="leading-relaxed text-neutral-500">
						Fine-tune the greyscale intensity from 0-100% to find your perfect balance between focus
						and visual experience.
					</p>
				</div>

				<div
					class="group rounded-xl border border-neutral-300 bg-white p-7 shadow-sm transition-all hover:border-neutral-400 hover:shadow-md"
				>
					<div class="mb-5">
						<div
							class="inline-flex rounded-lg bg-neutral-100 p-3 transition-colors group-hover:bg-neutral-900/5"
						>
							<Shield size={24} />
						</div>
					</div>
					<h3 class="mb-3 text-xl font-semibold">Site Exceptions</h3>
					<p class="leading-relaxed text-neutral-500">
						Easily manage exceptions for sites where you want to keep the original colors, like
						photo galleries or design work.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="download" class="border-y border-neutral-200 bg-white py-12 sm:py-20">
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
					class="group flex items-center justify-center gap-3 rounded-xl bg-neutral-900 px-8 py-4 text-neutral-50 shadow-sm transition-all hover:scale-[1.02] hover:bg-neutral-800 hover:shadow-md active:bg-neutral-950"
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
					class="group flex items-center justify-center gap-3 rounded-xl bg-neutral-100 px-8 py-4 shadow-sm transition-all hover:scale-[1.02] hover:bg-neutral-200 hover:shadow-md active:bg-neutral-300"
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

	<section class="border-y border-neutral-200 bg-neutral-50 py-12 sm:py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mb-10 flex flex-col items-center gap-3 sm:mb-14">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">What Our Users Say</h2>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<div class="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
					<div class="mb-4 text-neutral-300">
						<Quote size={24} />
					</div>
					<p class="mb-4 flex-1 text-lg italic">Every movie feels like oppenheimer second half.</p>
					<div class="flex items-center gap-3">
						<div class="h-10 w-10 overflow-hidden rounded-full bg-neutral-100">
							<img
								src="/avatars/user1.webp"
								alt="User"
								class="h-full w-full object-cover grayscale"
							/>
						</div>
						<div>
							<p class="font-medium">Christopher Narayan</p>
							<p class="text-sm text-neutral-500">Nolan's Fan</p>
						</div>
					</div>
				</div>

				<div class="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
					<div class="mb-4 text-neutral-300">
						<Quote size={24} />
					</div>
					<p class="mb-4 flex-1 text-lg italic">Now I know what my dog sees and it's "dogshit".</p>
					<div class="flex items-center gap-3">
						<div class="h-10 w-10 overflow-hidden rounded-full bg-neutral-100">
							<img
								src="/avatars/user2.webp"
								alt="User"
								class="h-full w-full object-cover grayscale"
							/>
						</div>
						<div>
							<p class="font-medium">Melon Musk</p>
							<p class="text-sm text-neutral-500">Dog Owner (Now owns cat)</p>
						</div>
					</div>
				</div>

				<div class="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
					<div class="mb-4 text-neutral-300">
						<Quote size={24} />
					</div>
					<p class="mb-4 flex-1 text-lg italic">Every site is giga chad meme now.</p>
					<div class="flex items-center gap-3">
						<div class="h-10 w-10 overflow-hidden rounded-full bg-neutral-100">
							<img
								src="/avatars/user3.webp"
								alt="User"
								class="h-full w-full object-cover grayscale"
							/>
						</div>
						<div>
							<p class="font-medium">Mr. Nyansuki</p>
							<p class="text-sm text-neutral-500">Memer (Unemployed)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="border-t border-neutral-200 bg-white py-12 sm:py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="flex flex-col items-center gap-6 text-center">
				<div class="rounded-full bg-red-50 p-3">
					<Heart size={24} class="animate-pulse text-red-500" />
				</div>
				<h2 class="text-2xl font-bold sm:text-3xl">Support Monochromate</h2>
				<p class="max-w-md text-neutral-500">
					If Monochromate helps you stay focused and productive, consider supporting us. Your
					donation helps keep us motivated to improve the extension and add new features.
				</p>
				<div class="flex flex-wrap justify-center gap-4">
					<a
						href="https://buymeacoffee.com/lirena00"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-neutral-50 shadow-sm transition-all hover:scale-105 hover:bg-neutral-800"
					>
						<Coffee size={20} />
						<span class="font-medium">Buy me a coffee</span>
						<span class="rounded-full bg-neutral-800 px-2 py-1 text-xs group-hover:bg-neutral-700"
							>$5</span
						>
					</a>
					<a
						href="https://github.com/sponsors/lirena00"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 shadow-sm transition-all hover:scale-105 hover:bg-neutral-50"
					>
						<Heart size={20} class="text-red-500" />
						<span class="font-medium">Become a sponsor</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<Footer />
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

	@keyframes pulse {
		0%,
		100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	:global(.animate-pulse) {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
</style>
