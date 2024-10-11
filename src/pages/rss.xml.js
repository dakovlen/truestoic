import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'TRUESTOIC.NET | Blog',
    description: 'Site | TRUESTOIC.NET',
    site: 'https://truestoic.net/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-en</language>`,
  });
}