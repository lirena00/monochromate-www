<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';
	import { Calendar, Tag, Bell, ExternalLink, CheckCircle } from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Discord from '../../components/icons/discord.svelte';

	export let data: PageData;
	let loading = false;
	$: releases = data.releases;
	$: error = data.error;

	async function fetchReleases() {
		loading = true;
		try {
			await invalidateAll();
		} finally {
			loading = false;
		}
	}

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		const now = new Date();
		const diffTime = Math.abs(now.getTime() - date.getTime());
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays === 1) return 'Yesterday';
		if (diffDays < 7) return `${diffDays} days ago`;
		if (diffDays < 14) return '1 week ago';
		if (diffDays < 21) return '2 weeks ago';
		if (diffDays < 28) return '3 weeks ago';
		if (diffDays < 60) return '1 month ago';

		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Release Notes | Monochromate - Latest Updates & Features</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#171717" />
	<meta
		name="description"
		content="Monochromate Release Notes - Stay updated with the latest features, improvements, and bug fixes for our free greyscale browser extension. Track development progress and discover new productivity enhancements in each version."
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
						{#if !loading && !error}
							<p class="mt-4 text-sm font-medium text-neutral-700">
								{releases.length} release{releases.length === 1 ? '' : 's'}
							</p>
						{/if}
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

				{#if loading}
					<div class="flex items-center justify-center py-12">
						<div class="text-center">
							<div
								class="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-neutral-300 border-t-neutral-700"
							></div>
							<p class="text-neutral-500">Loading release notes...</p>
						</div>
					</div>
				{:else if error}
					<div class="rounded-xl border border-red-200 bg-red-50 p-8 text-center">
						<p class="text-red-600">{error}</p>
						<button
							onclick={fetchReleases}
							class="mt-4 rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
						>
							Try Again
						</button>
					</div>
				{:else}
					<div class="space-y-8 leading-relaxed">
						{#each releases as release, index (release.tag_name)}
							<article
								id="v{release.tag_name}"
								class="rounded-xl border{index === 0
									? '-2 border-neutral-900'
									: ' border-neutral-200'} bg-white p-8 shadow-sm"
							>
								<header class="mb-6">
									<div class="mb-4 flex items-center gap-3">
										<div
											class="flex items-center gap-2 rounded-full {index === 0
												? 'border-2 border-neutral-900 bg-neutral-900'
												: 'bg-neutral-100'} px-3 py-1"
										>
											<Tag size={16} class={index === 0 ? 'text-white' : 'text-neutral-600'} />
											<span
												class="text-sm font-medium {index === 0
													? 'text-white'
													: 'text-neutral-600'}">{release.tag_name}</span
											>
										</div>
										{#if index === 0}
											<span class="text-sm text-neutral-500">Latest</span>
										{/if}
									</div>
									<div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
										<h2 class="text-2xl font-bold">
											{release.name || `Version ${release.tag_name}`}
										</h2>
										<a
											href={release.html_url}
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
										<span class="text-sm">{formatDate(release.published_at)}</span>
									</div>
								</header>

								<div
									class="prose prose-neutral prose-pre:overflow-x-auto prose-table:block prose-table:overflow-x-auto max-w-none break-words"
								>
									<!-- Rendered and sanitized by the server's Markdown pipeline. -->
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html release.bodyHtml}
								</div>
							</article>
						{/each}
					</div>
				{/if}
			</div>
		</section>
	</main>
	<Footer />
</div>

<style>
	article {
		scroll-margin-top: 2rem;
	}
</style>
