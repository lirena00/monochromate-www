<script>
	import { Settings, Keyboard, ExternalLink } from 'lucide-svelte';
	import Header from '../../../components/Header.svelte';
	import Footer from '../../../components/Footer.svelte';
	import Firefox from '../../../components/icons/firefox.svelte';
</script>

<svelte:head>
	<title>How to Change Extension Shortcuts in Firefox | Monochromate Guide</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#171717" />
	<meta
		name="description"
		content="Step-by-step guide to customize keyboard shortcuts for the Monochromate extension in Firefox browser. Learn how to personalize your shortcuts for better productivity."
	/>
	<meta
		property="og:title"
		content="How to Change Extension Shortcuts in Firefox | Monochromate Guide"
	/>
	<meta
		property="og:description"
		content="Step-by-step guide to customize keyboard shortcuts for the Monochromate extension in Firefox browser. Learn how to personalize your shortcuts for better productivity."
	/>
	<meta property="og:image" content="https://monochromate.lirena.in/og.png" />
	<meta property="og:url" content="https://monochromate.lirena.in/guide/shortcuts" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lirena00" />
	<meta
		name="twitter:title"
		content="How to Change Extension Shortcuts in Firefox | Monochromate"
	/>
	<meta
		name="twitter:description"
		content="Step-by-step guide to customize keyboard shortcuts for the Monochromate extension in Firefox browser."
	/>
	<meta name="author" content="Monochromate Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://monochromate.lirena.in/guide/shortcuts" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
	<Header />

	<main>
		<!-- Hero Section -->
		<section class="border-b border-neutral-200 bg-neutral-50 py-12 md:py-16">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mx-auto max-w-3xl">
					<div class="mb-4 flex items-center justify-center gap-2">
						<Firefox class="h-8 w-8" />
						<Keyboard size={24} class="text-neutral-700" />
					</div>
					<h1 class="mb-4 text-center text-3xl font-bold md:text-4xl">
						Customize Extension Shortcuts in Firefox
					</h1>
					<p class="text-center text-neutral-500">
						Learn how to personalize your keyboard shortcuts for the Monochromate extension to match
						your workflow preferences
					</p>

					<div
						class="mt-8 flex items-center justify-center gap-2 rounded-full border border-dashed border-neutral-400 bg-white p-3"
					>
						<Settings size={20} class="text-neutral-700" />
						<p class="font-medium">Easy customization in just 5 simple steps</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section class="container mx-auto px-4 py-12 sm:px-6 md:py-16">
			<div class="mx-auto max-w-3xl">
				<!-- Overview Card -->
				<div class="mb-8 overflow-hidden rounded-xl border border-neutral-200 bg-white">
					<div class="border-b border-neutral-200 bg-neutral-50 p-5">
						<h2 class="flex items-center gap-2 text-xl font-semibold">
							<Keyboard size={20} class="text-neutral-700" />
							Quick Setup Guide
						</h2>
					</div>
					<div class="p-5">
						<p class="text-neutral-500">
							Firefox requires a few extra steps to customize keyboard shortcuts for extensions like
							Monochromate. Chrome makes this much simpler, but Firefox users can follow these steps
							to set up shortcuts that work best for their browsing habits.
						</p>

						<div class="mt-4 grid gap-3 sm:grid-cols-3">
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">5</span>
								</div>
								<p class="font-medium">Simple Steps</p>
								<p class="text-sm text-neutral-500">Easy to follow</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<Firefox class="h-6 w-6" />
								</div>
								<p class="font-medium">Firefox Guide</p>
								<p class="text-sm text-neutral-500">Specific walkthrough</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<Settings size={20} class="text-neutral-700" />
								</div>
								<p class="font-medium">Fully Customizable</p>
								<p class="text-sm text-neutral-500">Your preferences</p>
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-8 leading-relaxed">
					<!-- Step 1 -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700"
								>1</span
							>
							Open Firefox Add-ons Manager
						</h2>

						<p class="mb-4 text-neutral-500">
							Navigate to Firefox's add-ons management page by typing
							<code class="rounded bg-neutral-100 px-2 py-1 font-mono text-sm">about:addons</code>
							in your address bar and pressing Enter.
						</p>

						<div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<img
								src="/guide_ff_1.png"
								alt="Firefox address bar showing about:addons"
								class="mx-auto w-full max-w-md rounded border border-neutral-200 shadow-sm"
							/>
						</div>
					</div>

					<!-- Step 2 -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700"
								>2</span
							>
							Access Extension Management
						</h2>

						<p class="mb-4 text-neutral-500">
							On the Add-ons page, locate the Monochromate extension and click the three-dot menu
							icon (⋯) next to it to reveal additional options.
						</p>

						<div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<img
								src="/guide_ff_2.png"
								alt="Three-dot menu next to Monochromate extension"
								class="mx-auto w-full max-w-md rounded border border-neutral-200 shadow-sm"
							/>
						</div>
					</div>

					<!-- Step 3 -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100 text-sm font-bold text-yellow-700"
								>3</span
							>
							Open Shortcuts Settings
						</h2>

						<p class="mb-4 text-neutral-500">
							From the dropdown menu, select "Manage" to access the extension's detailed settings
							page.
						</p>

						<div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<img
								src="/guide_ff_3.png"
								alt="Manage option in extension dropdown menu"
								class="mx-auto w-full max-w-md rounded border border-neutral-200 shadow-sm"
							/>
						</div>
					</div>

					<!-- Step 4 -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700"
								>4</span
							>
							Navigate to Keyboard Shortcuts
						</h2>

						<p class="mb-4 text-neutral-500">
							On the extension management page, look for the settings icon (⚙️) and click it to
							access the shortcuts configuration panel.
						</p>

						<div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<img
								src="/guide_ff_4.png"
								alt="Settings cog icon on extension page"
								class="mx-auto w-full max-w-md rounded border border-neutral-200 shadow-sm"
							/>
						</div>
					</div>

					<!-- Step 5 -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700"
								>5</span
							>
							Customize Your Shortcuts
						</h2>

						<p class="mb-4 text-neutral-500">
							You'll now see the "Manage Extension Shortcuts" page where you can assign or modify
							keyboard combinations for various Monochromate functions.
						</p>

						<div class="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<img
								src="/guide_ff_5.png"
								alt="Firefox extension shortcuts management page"
								class="mx-auto w-full max-w-md rounded border border-neutral-200 shadow-sm"
							/>
						</div>
					</div>
				</div>

				<!-- Help Section -->
				<div class="mt-8 rounded-xl border border-neutral-200 bg-white p-6 transition-all">
					<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
						<Settings size={20} class="text-neutral-700" />
						Need More Help?
					</h2>

					<p class="mb-4 text-neutral-500">
						If you encounter any issues while setting up your shortcuts, we're here to help you get
						everything working perfectly.
					</p>

					<div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
						<a
							href="https://discord.gg/pdxMMNGWCU"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
						>
							<span>Get Support on Discord</span>
							<ExternalLink size={14} />
						</a>
						<a
							href="https://github.com/lirena00/monochromate/issues"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
						>
							<span>Report Issues on GitHub</span>
							<ExternalLink size={14} />
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
