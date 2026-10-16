// Array order is the extension's rotation order. Donations and stars are mandatory.
// Additional entries require a unique id, title, text, cta, and HTTPS url.
// Set enabled: false on an additional entry to hide it.
export const bannerConfig = {
	banners: [
		{ id: 'donations' },
		{
			id: 'blobz',
			iconUrl: 'https://blobz.lirena.in/icon.svg',
			title: 'Meet Blobz',
			text: 'Turn any name into a playful avatar. Try Blobz or add @blobz/react to your next project.',
			cta: 'Try Blobz',
			url: 'https://blobz.lirena.in',
			enabled: true
		},
		{ id: 'stars' }
	]
};
