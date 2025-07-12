<script lang="ts">
	import { Calendar, Tag, Bell, ExternalLink, CheckCircle } from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Discord from '../../components/icons/discord.svelte';
</script>

<svelte:head>
	<title>Release Notes | Monochromate - Latest Updates & Features</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#171717" />
	<meta
		name="description"
		content="Stay updated with the latest Monochromate features, improvements, and bug fixes. Track our progress and discover what's new in each version of our greyscale browser extension."
	/>
	<meta property="og:title" content="Release Notes | Monochromate - Latest Updates & Features" />
	<meta
		property="og:description"
		content="Stay updated with the latest Monochromate features, improvements, and bug fixes. Track our progress and discover what's new in each version of our greyscale browser extension."
	/>
	<meta property="og:image" content="https://monochromate.lirena.in/og.png" />
	<meta property="og:url" content="https://monochromate.lirena.in/release-notes" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lirena00" />
	<meta name="twitter:title" content="Release Notes | Monochromate - Latest Updates & Features" />
	<meta
		name="twitter:description"
		content="Stay updated with the latest Monochromate features, improvements, and bug fixes. Track our progress and discover what's new in each version of our greyscale browser extension."
	/>
	<meta name="author" content="Monochromate Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://monochromate.lirena.in/release-notes" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
	<Header />

	<main>
		<!-- Hero Section -->
		<section class="border-b border-neutral-200 bg-neutral-50 py-12 md:py-16">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mx-auto max-w-3xl">
					<h1 class="mb-4 text-center text-3xl font-bold md:text-4xl">Release Notes</h1>
					<p class="text-center text-neutral-500">
						Track our progress and see what's new in Monochromate
					</p>

					<div
						class="mt-8 flex items-center justify-center gap-2 rounded-full border border-dashed border-neutral-400 bg-white p-3"
					>
						<CheckCircle size={20} class="text-neutral-700" />
						<p class="font-medium">Your extension has been updated with the latest features.</p>
					</div>
				</div>
			</div>
		</section>
		<!-- Release Notes Content Section -->
		<section class="container mx-auto px-4 py-12 sm:px-6 md:py-16">
			<div class="mx-auto max-w-3xl">
				<!-- Overview Card -->
				<div class="mb-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
					<div class="border-b border-neutral-200 bg-neutral-50 p-5">
						<h2 class="flex items-center gap-2 text-xl font-semibold">
							<Tag size={20} class="text-neutral-700" />
							Version History
						</h2>
					</div>
					<div class="p-5">
						<p class="text-neutral-500">
							Stay updated with the latest features, improvements, and bug fixes in Monochromate.
							Each release brings us closer to the perfect distraction-free browsing experience.
						</p>
						<div class="mt-4 grid gap-3 sm:grid-cols-3">
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">6</span>
								</div>
								<p class="font-medium">Versions Released</p>
								<p class="text-sm text-neutral-500">Since launch in 2024</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">10+</span>
								</div>
								<p class="font-medium">Bug Fixes</p>
								<p class="text-sm text-neutral-500">Continuous improvements</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">8+</span>
								</div>
								<p class="font-medium">New Features</p>
								<p class="text-sm text-neutral-500">Enhanced functionality</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Community Section - Moved to prominent position -->
				<div
					class="mb-8 rounded-xl border border-dashed border-neutral-400 bg-white p-6 transition-all"
				>
					<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
						<Discord size={20} class="text-neutral-700" />
						Join Our Community
					</h2>

					<p class="mb-4 text-neutral-500">
						Connect with other Monochromate users, get support, share feedback, and be the first to
						know about new features and updates!
					</p>

					<div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
						<a
							href="https://discord.gg/pdxMMNGWCU"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-neutral-800"
						>
							<Discord size={16} />
							<span>Join us on Discord</span>
						</a>
						<a
							href="https://github.com/lirena00/monochromate"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
						>
							<Bell size={16} />
							<span>Watch on GitHub</span>
						</a>
					</div>
				</div>
				<div class="space-y-8 leading-relaxed">
					<!-- Version 1.4.1 -->
					<article
						id="v1.4.1"
						class="rounded-xl border-2 border-neutral-900 bg-white p-8 shadow-sm"
					>
						<header class="mb-6">
							<div class="mb-4 flex items-center gap-3">
								<div
									class="flex items-center gap-2 rounded-full border-2 border-neutral-900 bg-neutral-900 px-3 py-1"
								>
									<Tag size={16} class="text-white" />
									<span class="text-sm font-medium text-white">v1.4.1</span>
								</div>
								<span class="text-sm text-neutral-500">Latest</span>
							</div>
							<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h2 class="text-2xl font-bold">Version 1.4.1</h2>
								<a
									href="https://github.com/lirena00/monochromate/releases/tag/v1.4.1"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<span>View on GitHub</span>
									<ExternalLink size={14} />
								</a>
							</div>
							<div class="mt-2 flex items-center gap-2 text-neutral-500">
								<Calendar size={16} />
								<span class="text-sm">Just released</span>
							</div>
						</header>

						<div class="space-y-6">
							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											>Redid UI of blacklist management page to make it consistent with overall ui
											of extension
										</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											>There is a warning shown when extension is enabled on an extension/addon site
										</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>

										<span>Migrated storage to wxt/storage </span>
									</li>
								</ul>
							</div>

							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's Fixed</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											>Fixed monochromate not working on full screen (by <a
												href="https://github.com/AlenVelocity"
												target="_blank"
												rel="noopener noreferrer"
												class="text-neutral-900 underline hover:text-neutral-600">@AlenVelocity</a
											>)</span
										>
									</li>
								</ul>
							</div>
						</div>
					</article>

					<!-- Version 1.4.0 -->
					<article id="v1.4.0" class="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
						<header class="mb-6">
							<div class="mb-4 flex items-center gap-3">
								<div class="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1">
									<Tag size={16} class="text-neutral-600" />
									<span class="text-sm font-medium text-neutral-600">v1.4.0</span>
								</div>
							</div>
							<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h2 class="text-2xl font-bold">Version 1.4.0</h2>
								<a
									href="https://github.com/lirena00/monochromate/releases/tag/v1.4.0"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<span>View on GitHub</span>
									<ExternalLink size={14} />
								</a>
							</div>
							<div class="mt-2 flex items-center gap-2 text-neutral-500">
								<Calendar size={16} />
								<span class="text-sm">Previously released</span>
							</div>
						</header>

						<div class="space-y-6">
							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Added export/import feature</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Refactored code and separated cards into components</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Better and new layout for footer</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Version is shown on header now</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Better tracking of installs and updates</span>
									</li>
								</ul>
							</div>

							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's Fixed</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Clicking on version link not redirecting to correct url</span>
									</li>
								</ul>
							</div>
						</div>
					</article>

					<!-- Version 1.3.2 -->
					<article id="v1.3.2" class="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
						<header class="mb-6">
							<div class="mb-4 flex items-center gap-3">
								<div class="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1">
									<Tag size={16} class="text-neutral-600" />
									<span class="text-sm font-medium text-neutral-600">v1.3.2</span>
								</div>
							</div>
							<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h2 class="text-2xl font-bold">Version 1.3.2</h2>
								<a
									href="https://github.com/lirena00/monochromate/releases/tag/v1.3.2"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<span>View on GitHub</span>
									<ExternalLink size={14} />
								</a>
							</div>
							<div class="mt-2 flex items-center gap-2 text-neutral-500">
								<Calendar size={16} />
								<span class="text-sm">2 weeks ago</span>
							</div>
						</header>

						<div class="space-y-6">
							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											>Extension will now open Monochromate website when installed or updated</span
										>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Improved schedule handling to save start and end times together</span>
									</li>
								</ul>
							</div>

							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's Fixed</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Fixed user's data wiping off because of schedule conflicts</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Fixed schedule data persistence issues during application lifecycle</span>
									</li>
								</ul>
							</div>
						</div>
					</article>

					<!-- Version 1.3.1 -->
					<article id="v1.3.1" class="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
						<header class="mb-6">
							<div class="mb-4 flex items-center gap-3">
								<div class="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1">
									<Tag size={16} class="text-neutral-600" />
									<span class="text-sm font-medium text-neutral-600">v1.3.1</span>
								</div>
							</div>
							<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h2 class="text-2xl font-bold">Version 1.3.1</h2>
								<a
									href="https://github.com/lirena00/monochromate/releases/tag/v1.3.1"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<span>View on GitHub</span>
									<ExternalLink size={14} />
								</a>
							</div>
							<div class="mt-2 flex items-center gap-2 text-neutral-500">
								<Calendar size={16} />
								<span class="text-sm">May 21</span>
							</div>
						</header>

						<div class="space-y-6">
							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Added scheduler toggle option</span>
									</li>
								</ul>
							</div>

							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's Fixed</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Fixed user's data wiping at initial loading</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Fixed layout shift while switching pages</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Fixed end time of scheduler not showing by default</span>
									</li>
								</ul>
							</div>
						</div>
					</article>
					<!-- Version 1.3.0 -->
					<article id="v1.3.0" class="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
						<header class="mb-6">
							<div class="mb-4 flex items-center gap-3">
								<div class="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1">
									<Tag size={16} class="text-neutral-600" />
									<span class="text-sm font-medium text-neutral-600">v1.3.0</span>
								</div>
							</div>
							<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h2 class="text-2xl font-bold">Version 1.3.0</h2>
								<a
									href="https://github.com/lirena00/monochromate/releases/tag/v1.3.0"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<span>View on GitHub</span>
									<ExternalLink size={14} />
								</a>
							</div>
							<div class="mt-2 flex items-center gap-2 text-neutral-500">
								<Calendar size={16} />
								<span class="text-sm">May 10</span>
							</div>
						</header>

						<div class="space-y-6">
							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Added Scheduler to toggle grayscale mode</span>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span>Updated Tailwind and WXT to latest version</span>
									</li>
								</ul>
							</div>
						</div>
					</article>
					<!-- Version 1.2.0 -->
					<article id="v1.2.0" class="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
						<header class="mb-6">
							<div class="mb-4 flex items-center gap-3">
								<div class="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1">
									<Tag size={16} class="text-neutral-600" />
									<span class="text-sm font-medium text-neutral-600">v1.2.0</span>
								</div>
							</div>
							<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
								<h2 class="text-2xl font-bold">Version 1.2.0</h2>
								<a
									href="https://github.com/lirena00/monochromate/releases/tag/v1.2.0"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<span>View on GitHub</span>
									<ExternalLink size={14} />
								</a>
							</div>
							<div class="mt-2 flex items-center gap-2 text-neutral-500">
								<Calendar size={16} />
								<span class="text-sm">April 13</span>
							</div>
						</header>

						<div class="space-y-6">
							<div>
								<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
								<p class="mb-4 text-neutral-600">
									This release prioritizes making the extension faster, so you can enjoy a smoother
									experience.
								</p>
								<ul class="space-y-2 text-neutral-600">
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											><strong>Card Layout Tweak:</strong> Swapped the positions of the Intensity and
											Blacklist cards on the homepage. The Blacklist card, being more frequently used,
											now takes a more prominent spot.</span
										>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											><strong>Improved Blacklist and CSS Handling:</strong> Optimized how the extension
											manages blacklist functionality and CSS, resulting in smoother performance.</span
										>
									</li>
									<li class="flex items-start gap-3">
										<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"></div>
										<span
											><strong>Migration to pnpm:</strong> Switched from npm to pnpm for faster and more
											efficient package management.</span
										>
									</li>
								</ul>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>
	</main>
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

	:global(html) {
		scroll-behavior: smooth;
	}

	/* Custom smooth scroll with offset for anchored sections */
	:global([id]) {
		scroll-margin-top: 2rem;
	}
</style>
