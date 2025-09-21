import { Metadata } from "next";

interface ErrorMetadataConfig {
  locale: "en" | "id";
  errorType: "404" | "500";
}

const errorTranslations = {
  en: {
    "404": {
      title: "Page Not Found - PT. Anugerah Panca Wisesa",
      description:
        "The page you are looking for doesn't exist or has been moved. PT. Anugerah Panca Wisesa - Industrial Products Distributor.",
      keywords: [
        "404 error",
        "page not found",
        "PT Anugerah Panca Wisesa",
        "industrial welding",
        "valve repair",
        "error page",
        "broken link",
        "missing page",
      ],
    },
    "500": {
      title: "Server Error - PT. Anugerah Panca Wisesa",
      description:
        "Something went wrong on our end. We're working to fix it. PT. Anugerah Panca Wisesa - Industrial Products Distributor.",
      keywords: [
        "500 error",
        "server error",
        "internal server error",
        "PT Anugerah Panca Wisesa",
        "industrial welding",
        "valve repair",
        "technical issue",
        "maintenance",
      ],
    },
  },
  id: {
    "404": {
      title: "Halaman Tidak Ditemukan - PT. Anugerah Panca Wisesa",
      description:
        "Halaman yang Anda cari tidak ada atau telah dipindahkan. PT. Anugerah Panca Wisesa - Distributor Produk Industri.",
      keywords: [
        "error 404",
        "halaman tidak ditemukan",
        "PT Anugerah Panca Wisesa",
        "las industri",
        "perbaikan valve",
        "halaman error",
        "link rusak",
        "halaman hilang",
      ],
    },
    "500": {
      title: "Kesalahan Server - PT. Anugerah Panca Wisesa",
      description:
        "Terjadi kesalahan di sisi kami. Kami sedang memperbaikinya. PT. Anugerah Panca Wisesa - Distributor Produk Industri.",
      keywords: [
        "error 500",
        "kesalahan server",
        "server error",
        "PT Anugerah Panca Wisesa",
        "las industri",
        "perbaikan valve",
        "masalah teknis",
        "pemeliharaan",
      ],
    },
  },
};

export function generateErrorMetadata(config: ErrorMetadataConfig): Metadata {
  const t = errorTranslations[config.locale][config.errorType];
  const baseUrl = "https://anugerahpancawisesa.com";
  const url = config.locale === "id" ? `${baseUrl}/id/` : `${baseUrl}/en/`;

  return {
    metadataBase: new URL(baseUrl),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "PT. Anugerah Panca Wisesa" }],
    creator: "PT. Anugerah Panca Wisesa",
    publisher: "PT. Anugerah Panca Wisesa",
    robots: {
      index: false, // Don't index error pages
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: config.locale === "id" ? "id_ID" : "en_US",
      url: url,
      siteName: "PT. Anugerah Panca Wisesa",
      title: t.title,
      description: t.description,
      images: [
        {
          url: "https://anugerahpancawisesa.com/hero-section.webp",
          width: 1200,
          height: 630,
          alt: t.title,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://anugerahpancawisesa.com/hero-section.webp"],
    },
    verification: {
      google: "your-google-search-console-verification-code",
    },
    manifest: "/manifest.json",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/logo-navbar.svg",
    },
    other: {
      "msapplication-TileColor": "#fd8706",
      "theme-color": "#fd8706",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/`,
        id: `${baseUrl}/id/`,
      },
    },
  };
}
