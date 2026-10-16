# Monochromate Website

This is the official website for the [Monochromate Extension](https://github.com/lirena00/monochromate)

## Extension banners

`GET /api/banners` serves the popup's banner configuration. Edit
`src/lib/server/banners.ts` and deploy the website to change it without releasing
the extension. The array controls rotation order. The initial configuration shows
donations, the Blobz promotion in second place, and GitHub stars.

```ts
export const bannerConfig = {
	banners: [
		{ id: 'stars' },
		{
			id: 'release-news',
			title: 'A new release is here',
			text: 'See the latest improvements.',
			cta: 'Read more',
			url: 'https://monochromate.lirena.in/release-notes',
			enabled: true
		},
		{ id: 'donations' }
	]
};
```

Custom entries need a unique `id`, nonempty `title`, `text`, `cta`, and an HTTPS
`url` without credentials. Text fields are limited to 500 characters. Remove a
custom entry or set `enabled: false` to hide it. Built-in `stars` and `donations`
entries can override `title`, `text`, and `cta`; their destinations remain fixed.
They cannot be disabled, and missing built-ins are appended automatically.

Use `icon: 'blobz'` on a custom banner to display an avatar from `@blobz/react`.
The Blobz promotion is an ordinary optional entry: edit its `title`, `text`, and
`cta`, reorder it, delete it, or set `enabled: false` in the API configuration.
The installed icon package does not force the promotion to appear.

The popup fetches this endpoint each time it opens, with a five-second timeout.
Network, HTTP, and invalid configuration errors fall back to only the built-in
donation and star banners. No stale promotions are cached. The existing one-day
banner dismissal still applies.
