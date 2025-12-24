import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = import.meta.env.BASE_URL;
  const sitemapURL = new URL(`${baseUrl}sitemap-index.xml`, site).href;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL}`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};