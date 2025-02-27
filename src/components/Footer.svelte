<script>
	import { Github, Heart, Coffee } from 'lucide-svelte';
</script>

<footer class="border-t border-neutral-200 bg-white py-8 sm:py-12">
	<div class="container mx-auto px-4 sm:px-6">
		<div class="flex flex-col items-center gap-6 md:flex-row md:justify-between">
			<div class="flex items-center gap-1">
				<div class="flex h-8 w-8 items-center justify-center">
					<img src="/logo.png" alt="Monochromate" />
				</div>
				<h1 class="text-2xl font-bold transition-colors group-hover:text-gray-600">Monochromate</h1>
			</div>

			<div class="flex flex-col items-center gap-6 sm:flex-row">
				<nav class="flex flex-wrap justify-center gap-4 text-sm">
					<a href="/privacy" class="text-neutral-600 transition-colors hover:text-neutral-900"
						>Privacy</a
					>
				</nav>
				<div class="flex flex-wrap items-center gap-4">
					<a
						href="https://buymeacoffee.com/lirena00"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-neutral-50 transition-all hover:bg-neutral-800"
					>
						<Coffee size={16} class="transition-transform group-hover:scale-110" />
						<span class="text-sm">Support Us</span>
					</a>
					<a
						href="https://github.com/lirena00/monochromate"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex items-center gap-2 rounded-full px-4 py-2 text-neutral-600 transition-all hover:bg-neutral-50 hover:shadow-sm"
					>
						<Github size={16} class="transition-transform group-hover:scale-110" />
						<span class="text-sm">GitHub</span>
					</a>
				</div>
			</div>
		</div>

		<div
			class="mt-6 flex flex-col items-center justify-between gap-2 border-t border-neutral-200 pt-4 text-sm text-neutral-500 sm:mt-8 sm:pt-6 md:flex-row md:gap-0"
		>
			<p class="text-center">© {new Date().getFullYear()} Monochromate. All rights reserved.</p>
			<p class="mt-2 text-center md:mt-0">
				Made with <span class="text-red-500">♥</span> by
				<a
					href="https://github.com/lirena00"
					class="underline transition-colors hover:text-neutral-900">lirena00</a
				>
			</p>
		</div>
	</div>
</footer>
