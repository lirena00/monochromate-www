<script lang="ts">
	import { Calendar, Tag, Construction, ArrowLeft, Bell } from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>Release Notes | Monochromate</title>
	<meta
		name="description"
		content="Release notes and version history for Monochromate browser extension"
	/>
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
				</div>
			</div>
		</section>

		<!-- Coming Soon Content Section -->
		<section class="container mx-auto px-4 py-16 sm:px-6 md:py-24">
			<div class="mx-auto max-w-2xl text-center">
				<div class="mb-8 flex justify-center">
					<div class="relative">
						<div class="flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
							<Construction size={48} class="text-neutral-700" />
						</div>
						<div
							class="absolute -right-2 -bottom-2 rounded-full border-4 border-white bg-neutral-100 p-2"
						>
							<Calendar size={20} class="text-neutral-600" />
						</div>
					</div>
				</div>

				<h2 class="mb-4 text-2xl font-bold sm:text-3xl">Release Notes Coming Soon</h2>
				<p class="mb-8 text-neutral-500">
					We're currently organizing our version history and release notes. Check back soon for a
					detailed history of Monochromate's updates and improvements.
				</p>

				<div class="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-6 text-left">
					<h3 class="mb-3 text-lg font-semibold">What to expect:</h3>
					<ul class="space-y-3 text-neutral-500">
						<li class="flex items-start gap-3">
							<div class="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-neutral-200"></div>
							<span>Detailed version history</span>
						</li>
						<li class="flex items-start gap-3">
							<div class="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-neutral-200"></div>
							<span>Feature announcements and explanations</span>
						</li>
						<li class="flex items-start gap-3">
							<div class="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-neutral-200"></div>
							<span>Bug fixes and performance improvements</span>
						</li>
					</ul>
				</div>

				<div class="mb-10 rounded-xl border border-dashed border-neutral-300 bg-white p-6">
					<h3 class="mb-4 text-lg font-semibold">Stay Updated</h3>
					<p class="mb-4 text-neutral-500">
						Want to be notified when we publish our release notes? Follow us on GitHub or star the
						repository.
					</p>
					<a
						href="https://github.com/lirena00/monochromate-www"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-neutral-50 shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md"
					>
						<Bell size={16} />
						<span>Watch on GitHub</span>
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	/* Keep consistent styles with other pages */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
