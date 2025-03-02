<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Calendar,
		Tag,
		MessageSquare,
		CheckCircle,
		Plus,
		Link,
		Copy,
		Check
	} from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';

	interface Release {
		version: string;
		date: string;
		fixes: string[];
		features: string[];
	}

	let releases: Release[] = [];
	let loading: boolean = true;
	let copiedVersion: string | null = null;

	// Copy to clipboard function
	function copyToClipboard(version: string) {
		const url = `${window.location.origin}${window.location.pathname}/#${version}`;
		navigator.clipboard
			.writeText(url)
			.then(() => {
				copiedVersion = version;
				setTimeout(() => {
					copiedVersion = null;
				}, 2000);
			})
			.catch((err) => {
				console.error('Failed to copy link: ', err);
			});
	}

	function getVersionSlug(version: string): string {
		return version.replace('v', '');
	}

	// Existing onMount and parseReleaseNotes functions
	onMount(async () => {
		try {
			// Fetch the release notes markdown file
			const response = await fetch('/release-notes.md');
			const markdown = await response.text();

			// Parse the markdown into structured releases
			releases = parseReleaseNotes(markdown);
		} catch (error) {
			console.error('Failed to load release notes:', error);
		} finally {
			loading = false;
		}
	});

	function parseReleaseNotes(markdown: string): Release[] {
		const lines = markdown.split('\n');
		const releases: Release[] = [];

		let currentRelease: Release | null = null;
		let currentSection: 'fixes' | 'features' | null = null;

		for (const line of lines) {
			if (line.startsWith('# ')) {
				// New version
				if (currentRelease) {
					releases.push(currentRelease);
				}
				currentRelease = {
					version: line.substring(2).trim(),
					date: '',
					fixes: [],
					features: []
				};
				currentSection = null;
			} else if (line.startsWith('## date ') && currentRelease) {
				currentRelease.date = line.substring(8).trim();
			} else if (line.startsWith('## fixes') && currentRelease) {
				currentSection = 'fixes';
			} else if (line.startsWith('## features') && currentRelease) {
				currentSection = 'features';
			} else if (line.startsWith('- ') && currentSection && currentRelease) {
				const item = line.substring(2).trim();
				currentRelease[currentSection].push(item);
			}
		}

		// Add the last release
		if (currentRelease) {
			releases.push(currentRelease);
		}

		return releases;
	}
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

		<!-- Content Section -->
		<section class="container mx-auto px-4 py-12 sm:px-6 md:py-16">
			<div class="mx-auto max-w-3xl">
				{#if loading}
					<div class="flex flex-col items-center justify-center py-12">
						<div class="h-10 w-10 animate-pulse rounded-full bg-neutral-200"></div>
						<p class="mt-4 text-neutral-500">Loading release notes...</p>
					</div>
				{:else if releases.length === 0}
					<div class="rounded-xl border border-neutral-200 bg-white p-8 text-center">
						<p class="text-neutral-500">No release notes available at this time.</p>
					</div>
				{:else}
					<div class="space-y-8">
						{#each releases as release, i}
							{@const versionSlug = getVersionSlug(release.version)}
							<div
								class="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-md"
								id={versionSlug}
							>
								<!-- Release Header -->
								<div class="border-b border-neutral-200 bg-neutral-50 p-5">
									<div class="flex flex-wrap items-center justify-between gap-3">
										<div class="flex items-center gap-3">
											<div
												class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100"
											>
												<Tag size={20} class="text-neutral-700" />
											</div>
											<div class="flex items-center gap-2">
												<a
													href={`#${versionSlug}`}
													class="flex items-center text-xl font-bold hover:text-neutral-600"
												>
													<h2>{release.version}</h2>
												</a>
												<button
													type="button"
													class="ml-1 flex items-center justify-center rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
													title="Copy link to version"
													on:click={() => copyToClipboard(versionSlug)}
												>
													{#if copiedVersion === versionSlug}
														<Check size={14} class="text-green-500" />
													{:else}
														<Copy size={14} />
													{/if}
												</button>
											</div>
										</div>
										<div
											class="flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-neutral-600"
										>
											<Calendar size={16} />
											<span>{release.date || 'Unreleased'}</span>
										</div>
									</div>
								</div>

								<!-- Release Content -->
								<div class="p-5">
									{#if release.features.length > 0}
										<div class="mb-5">
											<h3 class="mb-3 flex items-center gap-2 font-semibold">
												<Plus size={16} class="text-green-600" />
												New Features
											</h3>
											<ul class="space-y-2 pl-8">
												{#each release.features as feature}
													<li class="list-disc text-neutral-600">
														{feature}
													</li>
												{/each}
											</ul>
										</div>
									{/if}

									{#if release.fixes.length > 0}
										<div>
											<h3 class="mb-3 flex items-center gap-2 font-semibold">
												<CheckCircle size={16} class="text-blue-600" />
												Bug Fixes & Improvements
											</h3>
											<ul class="space-y-2 pl-8">
												{#each release.fixes as fix}
													<li class="list-disc text-neutral-600">
														{fix}
													</li>
												{/each}
											</ul>
										</div>
									{/if}

									{#if !release.features.length && !release.fixes.length}
										<p class="py-2 text-neutral-500 italic">
											No detailed changelog available for this version.
										</p>
									{/if}
								</div>

								{#if i === 0}
									<div class="border-t border-neutral-200 bg-neutral-50 px-5 py-3 text-sm">
										<div class="flex items-center gap-2 text-neutral-500">
											<MessageSquare size={14} />
											<span>Current Release</span>
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</section>
	</main>

	<Footer />
</div>

<style>
	/* Scroll behavior for smooth anchor navigation */
	:global(html) {
		scroll-behavior: smooth;
	}

	/* Adjust scroll margin top to account for fixed header */
	[id] {
		scroll-margin-top: 5rem;
	}
</style>
