<script>
	import {
		Sliders,
		Shield,
		Heart,
		ExternalLink,
		Settings,
		Eye,
		Clock,
		Quote,
		Coffee
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
	<title
		>Monochromate - Smart Greyscale Browser Extension | Reduce Screen Time & Stop Doomscrolling</title
	>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#171717" />
	<meta
		name="description"
		content="Transform your browsing with Monochromate, the smart greyscale browser extension designed for digital wellness. Reduce screen time, prevent doomscrolling, and boost productivity with customizable intensity, smart scheduling, and site exclusions. Built with WXT framework for Chrome & Firefox."
	/>
	<meta
		name="keywords"
		content="greyscale browser extension, grayscale filter, reduce screen time, prevent doomscrolling, digital wellness, productivity tool, focus enhancement, browser extension chrome, browser extension firefox, screen time management, digital detox, mindful browsing, visual distraction blocker, monochrome web browsing, website color filter, WXT framework, cross-browser extension, digital habits, accessibility enhancement, eye strain reduction, smart scheduling, site exclusions, backup restore settings, open source extension, privacy first browsing"
	/>
	<meta
		property="og:title"
		content="Monochromate - Smart Greyscale Extension | Reduce Screen Time & Stop Doomscrolling"
	/>
	<meta
		property="og:description"
		content="Transform your browsing with Monochromate's smart greyscale extension.  Use greyscale mode by monchromate to reduce screen time, prevent doomscrolling, and boost productivity. Built with WXT framework for Chrome & Firefox."
	/>
	<meta property="og:image" content="https://monochromate.lirena.in/og.png" />
	<meta property="og:url" content="https://monochromate.lirena.in" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lirena00" />
	<meta
		name="twitter:title"
		content="Monochromate - Smart and Best Greyscale Extension | Stop Doomscrolling"
	/>
	<meta
		name="twitter:description"
		content="The best greyscale browser extension. Reduce screen time, prevent doomscrolling, boost productivity. Open source & privacy-first. Available for Chrome & Firefox."
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

	<!-- Structured Data for SEO -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "Monochromate",
			"description": "Smart greyscale browser extension designed for digital wellness. Reduce screen time, prevent doomscrolling, and improve focus with customizable greyscale filters, smart scheduling, and site exclusions.",
			"url": "https://monochromate.lirena.in",
			"downloadUrl": [
				"https://chromewebstore.google.com/detail/monochromate/hafcajcllbjnoolpfngclfmmgpikdhlm",
				"https://addons.mozilla.org/en-US/firefox/addon/monochromate/"
			],
			"softwareVersion": "1.4.1",
			"operatingSystem": ["Chrome", "Firefox"],
			"applicationCategory": "Productivity",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD"
			},
			"author": {
				"@type": "Person",
				"name": "Saksham Kushwaha",
				"url": "https://lirena.in"
			},
			"keywords": [
				"greyscale",
				"browser extension",
				"productivity",
				"screen time",
				"digital wellness",
				"doomscrolling",
				"WXT framework",
				"accessibility",
				"eye strain",
				"focus enhancement"
			],
			"aggregateRating": {
				"@type": "AggregateRating",
				"ratingValue": "5.0",
				"ratingCount": "7",
				"bestRating": "5",
				"worstRating": "1"
			}
		}
	</script>
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
					powerful greyscale browser extension that helps reduce digital distractions, prevent
					doomscrolling, and boost productivity. Perfect for students, professionals, and anyone
					seeking mindful web browsing.
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
						<span>Privacy-first (no tracking)</span>
					</div>
					<div class="flex items-center gap-1">
						<Settings size={14} />
						<span>Customizable intensity</span>
					</div>
					<div class="flex items-center gap-1">
						<Eye size={14} />
						<span>Site exclusions</span>
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
				<h2 class="text-center text-3xl font-bold">Why Choose Monochromate?</h2>
				<p class="max-w-2xl text-center leading-relaxed text-gray-500">
					Powerful tools designed to enhance your digital well-being, reduce doomscrolling, and
					boost productivity through smart greyscale filtering.
				</p>
			</div>

			<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Clock size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Smart Scheduler</h3>
					<p class="text-neutral-600">
						Automatically enable greyscale mode during specific hours. Perfect for reducing evening
						screen time, maintaining focus during work hours, or preventing late-night
						doomscrolling.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Sliders size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Customizable Intensity</h3>
					<p class="text-neutral-600">
						Fine-tune the greyscale intensity from 0-100% to find your perfect balance. Research
						shows greyscale mode reduces screen time by making websites less visually stimulating
						and addictive.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Shield size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Site Exceptions</h3>
					<p class="text-neutral-600">
						Smart blacklist management keeps work-critical sites in full color while applying
						greyscale everywhere else. Perfect for photo galleries, design work, or any sites
						requiring color accuracy.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Settings size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Export & Sync Settings</h3>
					<p class="text-neutral-600">
						Effortlessly sync your configurations across browsers with backup and restore features.
						Keep your personalized settings consistent whether you're using Chrome or Firefox.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<ExternalLink size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Fullscreen Mode Support</h3>
					<p class="text-neutral-600">
						Unlike other greyscale extensions, Monochromate works seamlessly in fullscreen mode.
						Enjoy distraction-free video watching, presentations, and gaming with consistent
						greyscale filtering.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Heart size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Privacy-First & Open Source</h3>
					<p class="text-neutral-600">
						No data collection, no tracking, no analytics. Open source on GitHub with complete
						transparency. All settings stored locally on your device for maximum privacy and
						security.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<ExternalLink size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Built with WXT Framework</h3>
					<p class="text-neutral-600">
						Modern development framework ensures consistent performance across Chrome and Firefox.
						Lightweight, fast, and optimized for minimal resource usage.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Settings size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Cross-Browser Support</h3>
					<p class="text-neutral-600">
						Available for both Chrome and Firefox with identical features. Built with <a
							href="https://wxt.dev"
							target="_blank"
							rel="dofollow"
							class="text-neutral-700 underline hover:text-neutral-900">WXT framework</a
						>
						for consistent performance across browsers.
					</p>
				</div>

				<div class="text-center">
					<div class="mb-4 inline-flex rounded-lg bg-neutral-200 p-4">
						<Eye size={32} class="text-neutral-800" />
					</div>
					<h3 class="mb-3 text-xl font-semibold">Clean & Intuitive Design</h3>
					<p class="text-neutral-600">
						Polished UI/UX crafted with users in mind. Modern, clean interface that's intuitive to
						navigate. Every interaction is thoughtfully designed for the best user experience.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="download" class="border-y border-neutral-200 bg-white py-12 sm:py-20">
		<div class="container mx-auto px-4 text-center sm:px-6">
			<div class="mb-8 flex flex-col items-center gap-3 sm:mb-10">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">Transform Your Browsing Today</h2>
				<p class="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
					Join thousands of students, professionals, and digital wellness enthusiasts who've reduced
					screen time and stopped doomscrolling with Monochromate. Free forever.
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
				<p class="max-w-2xl text-center leading-relaxed text-gray-500">
					We actually have excellent 5-star reviews! Added these meme versions to spice up this
					otherwise boring website. You can check out the genuine reviews on <a
						href="https://addons.mozilla.org/en-US/firefox/addon/monochromate/reviews/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-neutral-700 underline hover:text-neutral-900">Firefox Add-ons</a
					>
					and
					<a
						href="https://chromewebstore.google.com/detail/monochromate-the-best-gre/hafcajcllbjnoolpfngclfmmgpikdhlm/reviews"
						target="_blank"
						rel="noopener noreferrer"
						class="text-neutral-700 underline hover:text-neutral-900">Chrome Web Store</a
					>.
				</p>
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

	<section class="border-y border-neutral-200 bg-white py-12 sm:py-20">
		<div class="container mx-auto px-4 sm:px-6">
			<div class="mb-10 flex flex-col items-center gap-3 sm:mb-14">
				<div class="mb-2 h-1 w-16 rounded-full bg-neutral-800"></div>
				<h2 class="text-center text-3xl font-bold">Frequently Asked Questions</h2>
				<p class="max-w-2xl text-center leading-relaxed text-gray-500">
					Everything you need to know about Monochromate greyscale browser extension.
				</p>
			</div>

			<div class="mx-auto max-w-3xl">
				<div class="divide-y divide-neutral-200 border-y border-neutral-200">
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">What is Monochromate and how does it work?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								Monochromate is a free browser extension that applies a greyscale filter to
								websites, removing colors to reduce visual distractions and doomscrolling. It works
								by modifying the CSS of web pages in real-time, making them appear in black and
								white while preserving functionality.
							</p>
						</div>
					</details>

					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">Does Monochromate really reduce screen time?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								Yes! Research shows that colorful interfaces trigger dopamine responses that make
								websites more addictive. By removing colors, Monochromate makes websites less
								visually stimulating, naturally reducing the time you spend browsing and scrolling.
							</p>
						</div>
					</details>

					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">Is Monochromate free and safe to use?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								Absolutely! Monochromate is completely free and open-source. We don't collect any
								personal data, track your browsing, or display ads. All settings are stored locally
								on your device for maximum privacy and security.
							</p>
						</div>
					</details>

					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">Can I exclude specific websites from greyscale mode?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								Yes! Monochromate includes smart site exclusion features. You can easily add
								websites to your blacklist where colors should remain enabled - perfect for photo
								galleries, design work, or work-critical applications that require color accuracy.
							</p>
						</div>
					</details>

					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">Which browsers support Monochromate?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								Monochromate is available for both Chrome and Firefox with identical features. It's
								built using the WXT framework, ensuring consistent performance and functionality
								across both browsers. You can download it from the Chrome Web Store or Firefox
								Add-ons.
							</p>
						</div>
					</details>

					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">How do I install and use Monochromate?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								Installation is simple: visit the Chrome Web Store or Firefox Add-ons, click "Add to
								Browser," and you're ready! Once installed, click the Monochromate icon in your
								toolbar to toggle greyscale mode on/off. You can adjust intensity and manage site
								exclusions from the popup interface.
							</p>
						</div>
					</details>

					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex w-full cursor-pointer items-center justify-between py-6 text-left font-semibold text-neutral-900 transition-colors duration-150 hover:text-neutral-700 focus:outline-none"
						>
							<h3 class="text-lg">I found a bug in Monochromate. How can I report it?</h3>
							<svg
								class="h-5 w-5 shrink-0 transition-transform duration-300 ease-in-out group-open:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</summary>
						<div class="overflow-hidden pt-0 pb-6 transition-all duration-300 ease-in-out">
							<p class="leading-relaxed text-neutral-600">
								We appreciate bug reports! If you're comfortable with GitHub, please create an issue
								on our <a
									href="https://github.com/lirena00/monochromate/issues"
									target="_blank"
									rel="noopener noreferrer"
									class="text-neutral-700 underline hover:text-neutral-900">GitHub repository</a
								>
								with details about the bug and steps to reproduce it. For non-technical users or if you
								prefer a more casual approach, join our
								<a
									href="https://discord.gg/pdxMMNGWCU"
									target="_blank"
									rel="noopener noreferrer"
									class="text-neutral-700 underline hover:text-neutral-900">Discord server</a
								> and report the issue there - our community is always happy to help!
							</p>
						</div>
					</details>
				</div>
			</div>
		</div>
	</section>

	<section class="border-t border-neutral-200 bg-neutral-50 py-12 sm:py-20">
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
