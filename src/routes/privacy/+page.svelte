<script>
	import { Shield, Eye, Lock, CheckCircle, AlertCircle, ExternalLink } from 'lucide-svelte';
	import Header from '../../components/Header.svelte';
	import Footer from '../../components/Footer.svelte';
</script>

<svelte:head>
	<title>Privacy Policy | Monochromate | Your Data Stays Safe</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#171717" />
	<meta
		name="description"
		content="Monochromate Privacy Policy - Learn about our privacy-first approach. We don't collect, store, or track any personal data. All settings stay on your device for complete privacy. Free greyscale browser extension with zero data collection."
	/>
	<meta property="og:title" content="Privacy Policy | Monochromate" />
	<meta
		property="og:description"
		content="Learn about Monochromate's privacy-first approach. We don't collect, store, or track any personal data. All settings stay on your device for complete privacy."
	/>
	<meta property="og:image" content="https://monochromate.lirena.in/og.png" />
	<meta property="og:url" content="https://monochromate.lirena.in/privacy" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@lirena00" />
	<meta name="twitter:title" content="Privacy Policy - Monochromate" />
	<meta
		name="twitter:description"
		content="Learn about Monochromate's privacy-first approach. We don't collect, store, or track any personal data. All settings stay on your device for complete privacy."
	/>
	<meta name="author" content="Monochromate Team" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://monochromate.lirena.in/privacy" />
</svelte:head>

<div class="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
	<Header />

	<main>
		<!-- Hero Section -->
		<section class="border-b border-neutral-200 bg-neutral-50 py-12 md:py-16">
			<div class="container mx-auto px-4 sm:px-6">
				<div class="mx-auto max-w-3xl">
					<h1 class="mb-4 text-center text-3xl font-bold md:text-4xl">Privacy Policy</h1>
					<p class="text-center text-neutral-500">Last updated: February 28, 2025</p>

					<div
						class="mt-8 flex items-center justify-center gap-2 rounded-full border border-dashed border-neutral-400 bg-white p-3"
					>
						<Shield size={20} class="text-neutral-700" />
						<p class="font-medium">Your data stays on your device. We collect nothing.</p>
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
							<Shield size={20} class="text-neutral-700" />
							Overview
						</h2>
					</div>
					<div class="p-5">
						<p class="text-neutral-500">
							Monochromate is designed with privacy at its core. We don't collect, store, or
							transmit any of your personal data. All settings are stored locally on your device.
						</p>

						<div class="mt-4 grid gap-3 sm:grid-cols-3">
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<Eye size={20} class="text-neutral-700" />
								</div>
								<p class="font-medium">No Tracking</p>
								<p class="text-sm text-neutral-500">We don't monitor your browsing activity</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<Lock size={20} class="text-neutral-700" />
								</div>
								<p class="font-medium">Local Storage Only</p>
								<p class="text-sm text-neutral-500">Settings stay on your device</p>
							</div>
							<div
								class="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
							>
								<div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100">
									<Shield size={20} class="text-neutral-700" />
								</div>
								<p class="font-medium">Minimalist Approach</p>
								<p class="text-sm text-neutral-500">Only essential permissions</p>
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-8 leading-relaxed">
					<!-- Information We Collect Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>1</span
							>
							Information We Collect
						</h2>

						<p class="mb-4 text-neutral-500">
							Monochromate does <strong>not</strong> collect or store personal data. However, the extension
							stores certain preferences locally on your device to improve functionality.
						</p>
						<div class="rounded-lg bg-neutral-50 p-4">
							<h3 class="mb-3 font-medium">Data Stored Locally:</h3>
							<ul class="space-y-3 text-neutral-500">
								<li class="flex items-start gap-2">
									<CheckCircle size={18} class="mt-0.5 flex-shrink-0 text-green-600" />
									<span>Greyscale intensity settings</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle size={18} class="mt-0.5 flex-shrink-0 text-green-600" />
									<span>Excluded websites list (to disable grayscale on selected sites)</span>
								</li>
								<li class="flex items-start gap-2">
									<CheckCircle size={18} class="mt-0.5 flex-shrink-0 text-green-600" />
									<span>Scheduler settings (start/end times for automatic activation)</span>
								</li>
							</ul>

							<p class="mt-4 text-sm text-neutral-500 italic">
								This data remains on your device and is never transmitted to external servers.
							</p>
						</div>
					</div>

					<!-- How We Use Your Data Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>2</span
							>
							How We Use Your Data
						</h2>

						<p class="text-neutral-500">
							The locally stored data is used only to personalize your experience within the
							extension. <strong>Monochromate does not track, share, or sell any user data.</strong>
						</p>

						<div class="mt-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
							<div class="flex items-center gap-3">
								<div
									class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
								>
									<Shield size={22} class="text-neutral-700" />
								</div>
								<p class="text-sm text-neutral-600">
									Your privacy is our priority. We believe that browser extensions should enhance
									your experience without compromising your personal data.
								</p>
							</div>
						</div>
					</div>

					<!-- Permissions Required Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>3</span
							>
							Permissions Required
						</h2>

						<p class="mb-4 text-neutral-500">
							Monochromate requests certain browser permissions to function properly:
						</p>

						<div class="space-y-4">
							<div class="overflow-hidden rounded-lg border border-neutral-200">
								<div class="border-b border-neutral-200 bg-neutral-50 p-3">
									<div class="flex items-center gap-2">
										<Eye size={18} class="text-neutral-700" />
										<p class="font-medium">"Read and change all your data on websites you visit"</p>
									</div>
								</div>
								<div class="bg-white p-3">
									<p class="text-neutral-500">
										This is necessary to apply the grayscale filter to web pages. Without this
										permission, the extension wouldn't be able to modify the visual appearance of
										websites.
									</p>
								</div>
							</div>

							<div class="overflow-hidden rounded-lg border border-neutral-200">
								<div class="border-b border-neutral-200 bg-neutral-50 p-3">
									<div class="flex items-center gap-2">
										<Lock size={18} class="text-neutral-700" />
										<p class="font-medium">"Storage access"</p>
									</div>
								</div>
								<div class="bg-white p-3">
									<p class="text-neutral-500">
										To save your filter settings and excluded websites list locally. This ensures
										your preferences persist between browser sessions.
									</p>
								</div>
							</div>
						</div>

						<div class="mt-4 flex items-start gap-2 rounded-lg bg-neutral-50 p-4 text-sm">
							<AlertCircle size={18} class="mt-0.5 flex-shrink-0 text-amber-500" />
							<p>
								Monochromate <strong>does not</strong> monitor your browsing activity or collect any
								personal data. We use the minimum permissions necessary to provide functionality.
							</p>
						</div>
					</div>

					<!-- Remaining sections -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>4</span
							>
							Third-Party Services
						</h2>

						<p class="text-neutral-500">
							Monochromate does not integrate with third-party services, trackers, or analytics
							tools. Your browsing data remains private.
						</p>
					</div>

					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>5</span
							>
							Changes to This Policy
						</h2>

						<p class="text-neutral-500">
							We may update this Privacy Policy from time to time. Any changes will be reflected on
							this page, and continued use of the extension constitutes acceptance of the updated
							policy.
						</p>
					</div>

					<!-- Contact Section -->
					<div class="rounded-xl border border-neutral-200 bg-white p-6 transition-all">
						<h2 class="mb-4 flex items-center gap-2 text-xl font-semibold">
							<span
								class="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold"
								>6</span
							>
							Contact Us
						</h2>

						<p class="text-neutral-500">
							If you have any questions about this Privacy Policy, please reach out via:
						</p>

						<div class="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
							<a
								href="https://github.com/lirena00/monochromate/issues"
								target="_blank"
								rel="noopener noreferrer"
								class="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-center text-sm transition-all hover:border-neutral-400 hover:bg-neutral-50"
							>
								<span>GitHub Issues</span>
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
