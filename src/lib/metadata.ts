import { Metadata } from "next";

interface MetadataConfig {
  locale: "en" | "id";
}

const translations = {
  en: {
    title:
      "PT. ANUGERAH PANCA WISESA | Distributor Welding Consumables, Machines, Wear Plate & Valves",
    description:
      "PT. Anugerah Panca Wisesa (APW) is an authorized distributor of industrial products, including STARLET welding consumables, StarArc inverter welding machines, AlloyStar wear plates, and TSV industrial valves. Trusted solutions for mining, oil & gas, construction, manufacturing, and power generation.",
    keywords: [
      "starlet welding consumables",
      "stararc welding machines",
      "allostar wear plate",
      "tsv valves",
      "distributor welding products Indonesia",
      "mesin las inverter",
      "consumables pengelasan",
      "industrial valves supplier",
      "APW Indonesia",
      "produk industri APW",
      "welding electrodes",
      "welding wires",
      "inverter welding machines",
      "wear plate distributor",
      "industrial valves",
      "mining equipment",
      "oil gas equipment",
      "construction materials",
      "manufacturing supplies",
      "power generation equipment",
      "PT Anugerah Panca Wisesa",
      "APW distributor",
      "industrial products Indonesia",
      "welding consumables supplier",
      "valve distributor",
      "wear protection solutions",
    ],
    openGraph: {
      title:
        "PT. ANUGERAH PANCA WISESA - Distributor Welding Consumables, Machines, Wear Plate & Valves",
      description:
        "PT. Anugerah Panca Wisesa (APW) is an authorized distributor of industrial products, including STARLET welding consumables, StarArc inverter welding machines, AlloyStar wear plates, and TSV industrial valves. Trusted solutions for mining, oil & gas, construction, manufacturing, and power generation.",
      locale: "en_US",
    },
  },
  id: {
    title:
      "PT. ANUGERAH PANCA WISESA | Distributor Welding Consumables, Machines, Wear Plate & Valves",
    description:
      "PT. Anugerah Panca Wisesa (APW) adalah distributor resmi produk industri, meliputi consumables pengelasan STARLET, mesin las inverter StarArc, wear plate AlloyStar, dan valve industri TSV. Solusi terpercaya untuk pertambangan, minyak & gas, konstruksi, manufaktur, dan pembangkit listrik.",
    keywords: [
      "starlet welding consumables",
      "stararc welding machines",
      "allostar wear plate",
      "tsv valves",
      "distributor welding products Indonesia",
      "mesin las inverter",
      "consumables pengelasan",
      "industrial valves supplier",
      "APW Indonesia",
      "produk industri APW",
      "electrodes las",
      "kawat las",
      "mesin las inverter",
      "distributor wear plate",
      "valve industri",
      "peralatan pertambangan",
      "peralatan minyak gas",
      "material konstruksi",
      "suplai manufaktur",
      "peralatan pembangkit listrik",
      "PT Anugerah Panca Wisesa",
      "distributor APW",
      "produk industri Indonesia",
      "supplier consumables las",
      "distributor valve",
      "solusi proteksi aus",
    ],
    openGraph: {
      title:
        "PT. ANUGERAH PANCA WISESA - Distributor Welding Consumables, Machines, Wear Plate & Valves",
      description:
        "PT. Anugerah Panca Wisesa (APW) adalah distributor resmi produk industri, meliputi consumables pengelasan STARLET, mesin las inverter StarArc, wear plate AlloyStar, dan valve industri TSV. Solusi terpercaya untuk pertambangan, minyak & gas, konstruksi, manufaktur, dan pembangkit listrik.",
      locale: "id_ID",
    },
  },
};

export function generateMetadata(config: MetadataConfig): Metadata {
  const t = translations[config.locale];
  const baseUrl = "https://anugerahpancawisesa.com";
  const url = config.locale === "id" ? `${baseUrl}/id/` : `${baseUrl}/en/`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t.title,
      template: `%s | PT. ANUGERAH PANCA WISESA`,
    },
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: "PT. Anugerah Panca Wisesa" }],
    creator: "PT. Anugerah Panca Wisesa",
    publisher: "PT. Anugerah Panca Wisesa",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: t.openGraph.locale,
      url: url,
      siteName: "APW Official Website",
      title: t.openGraph.title,
      description: t.openGraph.description,
      images: [
        {
          url: "https://anugerahpancawisesa.com/assets/apw-og.jpg",
          width: 1200,
          height: 630,
          alt: t.openGraph.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PT. ANUGERAH PANCA WISESA",
      description: t.openGraph.description,
      images: ["https://anugerahpancawisesa.com/assets/apw-twitter.jpg"],
    },
    verification: {
      google: "your-google-search-console-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
    category: "Industrial Equipment Distribution",
    classification: "Business",
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
        {
          url: "/assets/images/logo-navbar.svg",
          sizes: "any",
          type: "image/svg+xml",
        },
      ],
      shortcut: "/favicon.ico",
      apple: [
        {
          url: "/assets/images/logo-navbar.svg",
          sizes: "180x180",
          type: "image/svg+xml",
        },
      ],
    },
    other: {
      "msapplication-TileColor": "#8e95a3",
      "msapplication-config": "/browserconfig.xml",
      "theme-color": "#8e95a3",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": "APW Official",
      "application-name": "APW Official Website",
      "msapplication-tooltip":
        "PT. Anugerah Panca Wisesa - Industrial Products Distributor",
      "msapplication-starturl": "/",
      "msapplication-navbutton-color": "#8e95a3",
      "msapplication-TileImage": "/assets/images/logo-navbar.svg",
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
