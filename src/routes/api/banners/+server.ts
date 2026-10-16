import { json } from '@sveltejs/kit';
import { bannerConfig } from '$lib/server/banners';

export function GET() {
	return json(bannerConfig, {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'no-store'
		}
	});
}
