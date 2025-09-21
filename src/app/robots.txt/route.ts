import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const robots = `# Robots.txt for PT. Anugerah Panca Wisesa (APW)
# Industrial Products Distributor - Welding Consumables, Machines, Wear Plate & Valves

User-agent: *
Allow: /

# High-priority pages for crawling
Allow: /en/
Allow: /id/
Allow: /en/products/
Allow: /id/products/

# Disallow private and system areas
Disallow: /private/
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /404
Disallow: /500
Disallow: /.well-known/
Disallow: /_vercel/

# Disallow search and filter parameters
Disallow: /*?*
Disallow: /*#*

# Allow specific file types
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.webp
Allow: /*.svg
Allow: /*.ico
Allow: /*.pdf

# Crawl delay for better server performance
Crawl-delay: 1

# Specific bot instructions
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1

# Sitemap location
Sitemap: https://anugerahpancawisesa.com/sitemap.xml

# Additional sitemaps if available
# Sitemap: https://anugerahpancawisesa.com/products-sitemap.xml`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
