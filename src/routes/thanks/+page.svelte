<script>
	import { Heart, Coffee, CheckCircle, ArrowRight, Users, ExternalLink } from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
	import Discord from '../../components/icons/discord.svelte';
</script>

<svelte:head>
	<title>Thank You | Monochromate - Get Started with Your New Extension</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#171717" />
	<meta
		name="description"
		content="Thank you for installing Monochromate! Get started with your new greyscale browser extension, join our community, and discover how to make the most of distraction-free browsing."
	/>
	<meta
		property="og:title"
		content="Thank You | Monochromate - Get Started with Your New Extension"
	/>
	<meta
		property="og:description"
		content="Thank you for installing Monochromate! Get started with your new greyscale browser extension, join our community, and discover how to make the most of distraction-free browsing."
	/>
	<meta property="og:image" content="https://monochromate.lirena.in/og.png" />
	<meta property="og:url" content="https://monochromate.lirena.in/thanks" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lirena00" />
	<meta
		name="twitter:title"
		content="Thank You | Monochromate - Get Started with Your New Extension"
	/>
	<meta
		name="twitter:description"
		content="Thank you for installing Monochromate! Get started with your new greyscale browser extension, join our community, and discover how to make the most of distraction-free browsing."
	/>
	<meta name="author" content="Monochromate Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://monochromate.lirena.in/thanks" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
	<Header />

	<main>
		<!-- Hero Section -->
		<section class="border-b border-neutral-200 bg-neutral-50 py-12 md:py-16">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mx-auto max-w-3xl">
					<h1 class="mb-4 text-center text-3xl font-bold md:text-4xl">Thank You!</h1>
					<p class="text-center text-neutral-500">Monochromate has been successfully installed</p>

					<div class="mt-8 flex items-center justify-center gap-2 rounded-full bg-white p-3">
						<CheckCircle size={20} class="text-neutral-700" />
						<p class="font-medium">You're ready to experience distraction-free browsing.</p>
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
							<CheckCircle size={20} class="text-neutral-700" />
							Getting Started
						</h2>
					</div>
					<div class="p-5">
						<p class="text-neutral-500">
							You now have access to a powerful greyscale filter that will help you focus and reduce
							distractions while browsing. Here's how to get started:
						</p>

						<div class="mt-4 grid gap-3 sm:grid-cols-3">
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">1</span>
								</div>
								<p class="font-medium">Find the Icon</p>
								<p class="text-sm text-neutral-500">
									Look for Monochromate in your browser toolbar
								</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">2</span>
								</div>
								<p class="font-medium">Toggle Filter</p>
								<p class="text-sm text-neutral-500">Click to enable/disable greyscale mode</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<span class="text-lg font-bold text-neutral-700">3</span>
								</div>
								<p class="font-medium">Customize</p>
								<p class="text-sm text-neutral-500">Adjust intensity and manage exceptions</p>
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-8 leading-relaxed">
					<!-- Support Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>1</span
							>
							Support Our Development
						</h2>

						<p class="mb-4 text-neutral-500">
							Love Monochromate? Your support helps us continue improving the extension and adding
							new features. Every contribution makes a difference!
						</p>

						<div class="rounded-lg bg-neutral-50 p-4">
							<h3 class="mb-3 font-medium">Ways to Support:</h3>
							<ul class="space-y-3 text-neutral-500">
								<li class="flex items-start gap-2">
									<Coffee size={18} class="mt-0.5 flex-shrink-0 text-neutral-600" />
									<span>Buy us a coffee to fuel development</span>
								</li>
								<li class="flex items-start gap-2">
									<Heart size={18} class="mt-0.5 flex-shrink-0 text-neutral-600" />
									<span>Become a sponsor on GitHub</span>
								</li>
							</ul>

							<div class="mt-4 flex flex-col gap-3 sm:flex-row">
								<a
									href="https://buymeacoffee.com/lirena00"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-neutral-800"
								>
									<Coffee size={16} />
									<span>Buy me a coffee</span>
									<ExternalLink size={14} />
								</a>
								<a
									href="https://github.com/sponsors/lirena00"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
								>
									<Heart size={16} />
									<span>Become a sponsor</span>
									<ExternalLink size={14} />
								</a>
							</div>
						</div>
					</div>

					<!-- Community Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>2</span
							>
							Join Our Community
						</h2>

						<p class="text-neutral-500">
							Connect with other Monochromate users, get support, share feedback, and stay updated
							with the latest news. Our Discord community is the best place to engage with the team
							and fellow users.
						</p>

						<div class="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<div class="flex items-center gap-3">
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
								>
									<Users size={22} class="text-neutral-700" />
								</div>
								<p class="text-sm text-neutral-600">
									Join our friendly Discord server for support, feedback, and community discussions.
									It's also where we announce new features and updates!
								</p>
							</div>

							<div class="mt-4">
								<a
									href="https://discord.gg/pdxMMNGWCU"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-neutral-800"
								>
									<Discord size={16} />
									<span>Join us on Discord</span>
									<ExternalLink size={14} />
								</a>
							</div>
						</div>
					</div>

					<!-- Latest Features Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>3</span
							>
							Stay Updated
						</h2>

						<p class="mb-4 text-neutral-500">
							Discover what's new in Monochromate and stay informed about the latest features,
							improvements, and bug fixes we've released.
						</p>

						<div class="space-y-4">
							<div class="overflow-hidden rounded-lg border border-neutral-200">
								<div class="border-b border-neutral-200 bg-neutral-50 p-3">
									<div class="flex items-center gap-2">
										<Heart size={18} class="text-neutral-700" />
										<p class="font-medium">Release Notes</p>
									</div>
								</div>
								<div class="bg-white p-3">
									<p class="text-neutral-500">
										Check out our comprehensive release notes to see what features have been added,
										what bugs have been fixed, and what improvements we've made to enhance your
										experience.
									</p>
								</div>
							</div>
						</div>

						<div class="mt-4">
							<a
								href="/release-notes"
								class="flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-neutral-800"
							>
								<span>View Release Notes</span>
								<ArrowRight size={14} />
							</a>
						</div>
					</div>

					<!-- Help Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>4</span
							>
							Need Help?
						</h2>

						<p class="text-neutral-500">
							If you have any questions, run into issues, or need support, we're here to help. Reach
							out through our community channels or report issues directly.
						</p>

						<div class="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
							<a
								href="https://discord.gg/pdxMMNGWCU"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
							>
								<Discord size={16} />
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
			</div>
		</section>
	</main>

	<Footer />
</div>
