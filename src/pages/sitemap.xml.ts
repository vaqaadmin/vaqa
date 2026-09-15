import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
	const posts = await getCollection('blog', ({ data }) => !data.draft);

	const paths = [
		'/',
		'/advisory',
		'/about',
		'/blog',
		...posts.map((post) => `/blog/${post.id}`),
	];

	const urls = paths
		.map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(xml, {
		headers: { 'Content-Type': 'application/xml' },
	});
};
