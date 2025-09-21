interface CompanyStructuredDataProps {
  locale: "en" | "id";
}

interface ProductStructuredDataProps {
  productSlug: string;
  locale: "en" | "id";
}

export function CompanyStructuredData({ locale }: CompanyStructuredDataProps) {
  const isEnglish = locale === "en";

  const companyData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PT. Anugerah Panca Wisesa",
    alternateName: "APW",
    url: "https://anugerahpancawisesa.com",
    logo: "https://anugerahpancawisesa.com/assets/images/logo-navbar.svg",
    description: isEnglish
      ? "PT. Anugerah Panca Wisesa (APW) is an authorized distributor of industrial products, including STARLET welding consumables, StarArc inverter welding machines, AlloyStar wear plates, and TSV industrial valves."
      : "PT. Anugerah Panca Wisesa (APW) adalah distributor resmi produk industri, meliputi consumables pengelasan STARLET, mesin las inverter StarArc, wear plate AlloyStar, dan valve industri TSV.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya Cakung Cilincing Km. 1,5",
      addressLocality: "Jakarta Utara",
      addressRegion: "DKI Jakarta",
      postalCode: "13910",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-4483-1234",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: ["https://anugerahpancawisesa.com"],
    foundingDate: "2010",
    numberOfEmployees: "50-100",
    industry: "Industrial Equipment Distribution",
    slogan: isEnglish
      ? "Distributor Produk Industri"
      : "Distributor Produk Industri",
    knowsAbout: [
      "Welding Consumables",
      "Welding Machines",
      "Wear Plates",
      "Industrial Valves",
      "Mining Equipment",
      "Oil & Gas Equipment",
      "Construction Materials",
      "Manufacturing Supplies",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(companyData, null, 2),
      }}
    />
  );
}

export function ProductStructuredData({
  productSlug,
  locale,
}: ProductStructuredDataProps) {
  const isEnglish = locale === "en";

  const productInfo = {
    starlet: {
      name: isEnglish
        ? "STARLET Welding Consumables"
        : "STARLET Consumables Pengelasan",
      description: isEnglish
        ? "High-quality STARLET welding consumables including electrodes, wires, and fluxes for industrial applications."
        : "Consumables pengelasan STARLET berkualitas tinggi meliputi elektroda, kawat las, dan flux untuk aplikasi industri.",
      category: isEnglish ? "Welding Consumables" : "Consumables Pengelasan",
      brand: "STARLET",
      image:
        "https://anugerahpancawisesa.com/assets/products/starlet-hero.webp",
    },
    stararc: {
      name: isEnglish
        ? "StarArc Inverter Welding Machines"
        : "Mesin Las Inverter StarArc",
      description: isEnglish
        ? "Advanced StarArc inverter welding machines for professional welding operations with reliable performance."
        : "Mesin las inverter StarArc canggih untuk operasi pengelasan profesional dengan performa yang handal.",
      category: isEnglish ? "Welding Machines" : "Mesin Las",
      brand: "StarArc",
      image:
        "https://anugerahpancawisesa.com/assets/products/stararc-hero.webp",
    },
    allostar: {
      name: isEnglish ? "AlloyStar Wear Plates" : "Wear Plate AlloyStar",
      description: isEnglish
        ? "Durable AlloyStar wear plates with excellent abrasion resistance for heavy-duty industrial applications."
        : "Wear plate AlloyStar tahan lama dengan ketahanan abrasi yang sangat baik untuk aplikasi industri berat.",
      category: isEnglish ? "Wear Plates" : "Wear Plate",
      brand: "AlloyStar",
      image:
        "https://anugerahpancawisesa.com/assets/products/allostar-hero.webp",
    },
    tsv: {
      name: isEnglish ? "TSV Industrial Valves" : "Valve Industri TSV",
      description: isEnglish
        ? "High-performance TSV industrial valves for critical applications in oil & gas and process industries."
        : "Valve industri TSV berperforma tinggi untuk aplikasi kritis di industri minyak & gas dan proses.",
      category: isEnglish ? "Industrial Valves" : "Valve Industri",
      brand: "TSV",
      image: "https://anugerahpancawisesa.com/assets/products/tsv-hero.webp",
    },
  };

  const product = productInfo[productSlug as keyof typeof productInfo];

  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    manufacturer: {
      "@type": "Organization",
      name: "PT. Anugerah Panca Wisesa",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "PT. Anugerah Panca Wisesa",
      },
      priceCurrency: "IDR",
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: isEnglish ? "Application" : "Aplikasi",
        value: isEnglish
          ? "Mining, Oil & Gas, Construction, Manufacturing, Power Generation"
          : "Pertambangan, Minyak & Gas, Konstruksi, Manufaktur, Pembangkit Listrik",
      },
      {
        "@type": "PropertyValue",
        name: isEnglish ? "Quality Standards" : "Standar Kualitas",
        value: isEnglish ? "International Standards" : "Standar Internasional",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productData, null, 2),
      }}
    />
  );
}

export function WebsiteStructuredData({ locale }: CompanyStructuredDataProps) {
  const isEnglish = locale === "en";

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isEnglish
      ? "PT. Anugerah Panca Wisesa - Industrial Products Distributor"
      : "PT. Anugerah Panca Wisesa - Distributor Produk Industri",
    url: "https://anugerahpancawisesa.com",
    description: isEnglish
      ? "Official website of PT. Anugerah Panca Wisesa, distributor of welding consumables, machines, wear plates, and industrial valves."
      : "Website resmi PT. Anugerah Panca Wisesa, distributor consumables pengelasan, mesin las, wear plate, dan valve industri.",
    inLanguage: [isEnglish ? "en" : "id"],
    copyrightYear: "2024",
    author: {
      "@type": "Organization",
      name: "PT. Anugerah Panca Wisesa",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://anugerahpancawisesa.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData, null, 2),
      }}
    />
  );
}
