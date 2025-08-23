<script lang="ts">
	import { onMount } from 'svelte';
	import { Calendar, Tag, Bell, ExternalLink, CheckCircle } from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Discord from '../../components/icons/discord.svelte';

	interface Release {
		tag_name: string;
		name: string;
		body: string;
		published_at: string;
		html_url: string;
		prerelease: boolean;
	}

	let releases: Release[] = [];
	let loading = true;
	let error = '';

	async function fetchReleases() {
		try {
			const response = await fetch('https://api.github.com/repos/lirena00/monochromate/releases');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			releases = data;
			loading = false;
		} catch (err) {
			console.error('Error fetching releases:', err);
			error = 'Failed to load release notes. Please try again later.';
			loading = false;
		}
	}

	function parseReleaseBody(body: string) {
		const sections = {
			whatsNew: [] as string[],
			whatsFixed: [] as string[],
			joincommunity: '',
			description: ''
		};

		const lines = body.split('\n');
		let currentSection = '';
		let inList = false;
		let descriptionLines: string[] = [];

		for (const line of lines) {
			const trimmed = line.trim();

			if (
				trimmed.toLowerCase().includes("what's new") ||
				trimmed.toLowerCase().includes("## what's new")
			) {
				currentSection = 'whatsNew';
				inList = false;
				continue;
			} else if (
				trimmed.toLowerCase().includes("what's fixed") ||
				trimmed.toLowerCase().includes("## what's fixed")
			) {
				currentSection = 'whatsFixed';
				inList = false;
				continue;
			} else if (
				trimmed.toLowerCase().includes('join our community') ||
				trimmed.toLowerCase().includes('## join our community')
			) {
				currentSection = 'joincommunity';
				inList = false;
				continue;
			} else if (trimmed.startsWith('##') && !trimmed.toLowerCase().includes("what's")) {
				currentSection = '';
				inList = false;
				continue;
			}

			if (trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
				const text = trimmed.substring(2).trim();
				if (currentSection === 'whatsNew') {
					sections.whatsNew.push(text);
				} else if (currentSection === 'whatsFixed') {
					sections.whatsFixed.push(text);
				}
				inList = true;
			} else if (!inList && trimmed && !trimmed.startsWith('#') && !currentSection) {
				descriptionLines.push(trimmed);
			}
		}

		sections.description = descriptionLines.join('\n');
		return sections;
	}

	function formatReleaseText(text: string): string {
		return (
			text
				// Convert **bold** to <strong>bold</strong>
				.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
				// Convert issue references to links (both #123 and (#123) formats)
				.replace(
					/#(\d+)(?!\w)/g,
					'<a href="https://github.com/lirena00/monochromate/issues/$1" target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline hover:text-neutral-600">#$1</a>'
				)
				// Convert user mentions to links (updated regex to handle hyphens and other characters)
				.replace(
					/@([\w-]+)/g,
					'<a href="https://github.com/$1" target="_blank" rel="noopener noreferrer" class="text-neutral-900 underline hover:text-neutral-600">@$1</a>'
				)
				// Convert newlines to <br> tags for proper line breaks
				.replace(/\n/g, '<br>')
		);
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

	onMount(() => {
		fetchReleases();
	});
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
						<div class="mt-4 grid gap-3 sm:grid-cols-3">
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">{releases.length}</span>
								</div>
								<p class="font-medium">Versions Released</p>
								<p class="text-sm text-neutral-500">Since launch in 2024</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700"
										>{releases.reduce(
											(acc, release) => acc + parseReleaseBody(release.body).whatsFixed.length,
											0
										)}+</span
									>
								</div>
								<p class="font-medium">Bug Fixes</p>
								<p class="text-sm text-neutral-500">Continuous improvements</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700"
										>{releases.reduce(
											(acc, release) => acc + parseReleaseBody(release.body).whatsNew.length,
											0
										)}+</span
									>
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
							on:click={fetchReleases}
							class="mt-4 rounded-full bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
						>
							Try Again
						</button>
					</div>
				{:else}
					<div class="space-y-8 leading-relaxed">
						{#each releases as release, index}
							{@const parsed = parseReleaseBody(release.body)}
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

								<div class="space-y-6">
									{#if parsed.description}
										<div class="text-neutral-600">
											{@html formatReleaseText(parsed.description)}
										</div>
									{/if}
									{#if parsed.whatsNew.length > 0}
										<div>
											<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's New</h3>
											<ul class="space-y-2 text-neutral-600">
												{#each parsed.whatsNew as item}
													<li class="flex items-start gap-3">
														<div
															class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"
														></div>
														<span>{@html formatReleaseText(item)}</span>
													</li>
												{/each}
											</ul>
										</div>
									{/if}

									{#if parsed.whatsFixed.length > 0}
										<div>
											<h3 class="mb-3 text-lg font-semibold text-neutral-800">What's Fixed</h3>
											<ul class="space-y-2 text-neutral-600">
												{#each parsed.whatsFixed as item}
													<li class="flex items-start gap-3">
														<div
															class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-neutral-700"
														></div>
														<span>{@html formatReleaseText(item)}</span>
													</li>
												{/each}
											</ul>
										</div>
									{/if}
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
