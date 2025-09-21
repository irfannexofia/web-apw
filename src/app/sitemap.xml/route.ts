import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = "https://anugerahpancawisesa.com";
  const lastMod = new Date().toISOString();
  const languages = ["en", "id"];
  const products = ["starlet", "stararc", "allostar", "tsv"];

  // Generate product URLs dynamically
  const productUrls = languages
    .flatMap((lang) =>
      products.map(
        (product) =>
          `  <url>
    <loc>${baseUrl}/${lang}/products/${product}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
      )
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${baseUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/" />
  </url>
  
  <!-- Language Homepages -->
  <url>
    <loc>${baseUrl}/en/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${baseUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/" />
  </url>
  
  <url>
    <loc>${baseUrl}/id/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="id" href="${baseUrl}/id/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/" />
  </url>

  <!-- Product Pages -->
${productUrls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
