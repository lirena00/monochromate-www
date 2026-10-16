import { render } from 'svelte/server';
import Markdown from 'svelte-exmarkdown';
import { releaseMarkdownPlugins } from '$lib/server/release-markdown';
import type { PageServerLoad } from './$types';

interface GitHubRelease {
	tag_name: string;
	name: string | null;
	body: string | null;
	published_at: string;
	html_url: string;
}

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	try {
		const response = await fetch('https://api.github.com/repos/lirena00/monochromate/releases');
		if (!response.ok) {
			throw new Error(`GitHub releases request failed: ${response.status}`);
		}
		const releases: GitHubRelease[] = await response.json();
		const result = {
			releases: releases.map((release) => ({
				tag_name: release.tag_name,
				name: release.name,
				published_at: release.published_at,
				html_url: release.html_url,
				bodyHtml: render(Markdown, {
					props: { md: release.body ?? '', plugins: releaseMarkdownPlugins }
				}).body
			})),
			error: ''
		};
		setHeaders({
			'cache-control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=3600'
		});
		return result;
	} catch {
		return {
			releases: [],
			error: 'Failed to load release notes. Please try again later.'
		};
	}
};
