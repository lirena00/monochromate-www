import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer } from 'vite';
import { createParser } from 'svelte-exmarkdown/utils';
import { releaseMarkdownPlugins } from '../src/lib/server/release-markdown.ts';

const parse = createParser(releaseMarkdownPlugins);

function descendants(node) {
	return [node, ...(node.children ?? []).flatMap(descendants)];
}

function elements(markdown, tagName) {
	return descendants(parse(markdown)).filter((node) => node.tagName === tagName);
}

test('keeps arbitrary headings, paragraphs, nested lists, and code', () => {
	const markdown = [
		'## Migration guide',
		'',
		'Keep **important** details and `*.example.org`.',
		'',
		'- Parent',
		'  - Child',
		'',
		'```sh',
		'bun add @blobz/react',
		'```'
	].join('\n');
	assert.equal(elements(markdown, 'h2').length, 1);
	assert.equal(elements(markdown, 'strong').length, 1);
	assert.equal(elements(markdown, 'ul').length, 2);
	assert.equal(elements(markdown, 'pre').length, 1);
	assert.equal(elements(markdown, 'code').length, 2);
	assert.equal(elements(markdown, 'a').length, 0);
});

test('supports GitHub tables, task lists, strikethrough, and autolinks', () => {
	const markdown = [
		'| Pattern | Meaning |',
		'| --- | --- |',
		'| `*.example.org` | Child domains |',
		'',
		'- [x] Complete',
		'- [ ] Pending',
		'',
		'~~Old behavior~~ https://example.org'
	].join('\n');
	assert.equal(elements(markdown, 'table').length, 1);
	assert.equal(elements(markdown, 'input').length, 2);
	assert.ok(elements(markdown, 'input').every((node) => node.properties.disabled));
	assert.equal(elements(markdown, 'del').length, 1);
	assert.equal(elements(markdown, 'a')[0].properties.href, 'https://example.org');
});

test('links GitHub issues and mentions without corrupting explicit links', () => {
	const links = elements(
		'Fixed #62 by @lirena00. [Full changelog](https://github.com/lirena00/monochromate/compare/v1.5.3...v1.5.4)',
		'a'
	);
	assert.deepEqual(
		links.map((node) => node.properties.href),
		[
			'https://github.com/lirena00/monochromate/issues/62',
			'https://github.com/lirena00',
			'https://github.com/lirena00/monochromate/compare/v1.5.3...v1.5.4'
		]
	);
	assert.ok(links.every((node) => !node.children.some((child) => child.tagName === 'a')));
});

test('supports safe README HTML while removing scripts, event handlers, and unsafe URLs', () => {
	const markdown = [
		'<details><summary>More information</summary><p>Preserved content</p></details>',
		'<script>window.compromised = true</script>',
		'<img src="https://example.org/image.png" onerror="window.compromised = true">',
		'<a href="javascript:alert(1)">Unsafe HTML link</a>',
		'',
		'[Unsafe Markdown link](javascript:alert(1))'
	].join('\n');
	assert.equal(elements(markdown, 'details').length, 1);
	assert.equal(elements(markdown, 'summary').length, 1);
	assert.equal(elements(markdown, 'script').length, 0);
	assert.equal(elements(markdown, 'img')[0].properties.onError, undefined);
	assert.equal(elements(markdown, 'img')[0].properties.onerror, undefined);
	assert.ok(elements(markdown, 'a').every((node) => node.properties.href === undefined));
});

test('server load returns sanitized HTML and handles failed release requests', async () => {
	const server = await createServer({ server: { middlewareMode: true } });
	try {
		const { load } = await server.ssrLoadModule('/src/routes/release-notes/+page.server.ts');
		let headers;
		const result = await load({
			setHeaders: (value) => {
				headers = value;
			},
			fetch: async () =>
				Response.json([
					{
						tag_name: 'v1.5.4',
						name: 'Release 1.5.4',
						body: '## Migration guide\n\nKeep `*.example.org`.\n\n<script>unsafe()</script>',
						published_at: '2026-10-17T00:00:00Z',
						html_url: 'https://github.com/lirena00/monochromate/releases/tag/v1.5.4'
					}
				])
		});
		assert.equal(result.error, '');
		assert.match(headers['cache-control'], /s-maxage=300/);
		const html = result.releases[0].bodyHtml.replace(/<!--[\s\S]*?-->/g, '');
		assert.match(html, /<h2>Migration guide<\/h2>/);
		assert.match(html, /<code>\*\.example.org<\/code>/);
		assert.doesNotMatch(result.releases[0].bodyHtml, /<script>|unsafe\(\)/);
		assert.equal(result.releases[0].body, undefined);
		const failed = await load({
			setHeaders: () => assert.fail('Failed requests must not be cached'),
			fetch: async () => new Response(null, { status: 503 })
		});
		assert.deepEqual(failed.releases, []);
		assert.ok(failed.error);
	} finally {
		await server.close();
	}
});
