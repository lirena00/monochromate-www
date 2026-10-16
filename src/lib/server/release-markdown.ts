import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import remarkGithub from 'remark-github';
import type { Plugin } from 'svelte-exmarkdown';
import { gfmPlugin } from 'svelte-exmarkdown/gfm';

export const releaseMarkdownPlugins: Plugin[] = [
	gfmPlugin(),
	{ remarkPlugin: [remarkGithub, { repository: 'lirena00/monochromate' }] },
	{ rehypePlugin: rehypeRaw },
	{ rehypePlugin: rehypeSanitize }
];
