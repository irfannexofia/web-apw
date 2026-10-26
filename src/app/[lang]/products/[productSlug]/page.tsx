import Contact from "@/app/[lang]/(home)/components/Contact";
import Footer from "@/app/[lang]/(home)/components/Footer";
import Topnavbar from "@/app/[lang]/(home)/components/Topnavbar";
import { ProductStructuredData } from "@/components/StructuredData";
import { Metadata } from "next";
import { getDictionary } from "../../dictionaries";
import ProductDetail from "./components/ProductDetail";

interface PageProps {
  params: Promise<{ lang: string; productSlug: string }>;
}

export async function generateStaticParams() {
  const languages = ["en", "id"];
  const productSlugs = ["starlet", "stararc", "allostar", "tsv"];

  return languages.flatMap((lang) =>
    productSlugs.map((slug) => ({
      lang,
      productSlug: slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, productSlug } = await params;
  const baseUrl = "https://anugerahpancawisesa.com";
  const url = `${baseUrl}/${lang}/products/${productSlug}`;

  // Product information mapping
  const productInfo = {
    starlet: {
      en: {
        name: "STARLET Welding Consumables",
        description:
          "High-quality STARLET welding consumables including electrodes, wires, and fluxes. Perfect for industrial welding applications in mining, construction, and manufacturing.",
        keywords: [
          "starlet welding consumables",
          "welding electrodes",
          "welding wires",
          "industrial welding",
          "mining welding",
          "construction welding",
        ],
      },
      id: {
        name: "STARLET Consumables Pengelasan",
        description:
          "Consumables pengelasan STARLET berkualitas tinggi meliputi elektroda, kawat las, dan flux. Sempurna untuk aplikasi pengelasan industri di pertambangan, konstruksi, dan manufaktur.",
        keywords: [
          "starlet consumables pengelasan",
          "elektroda las",
          "kawat las",
          "pengelasan industri",
          "las pertambangan",
          "las konstruksi",
        ],
      },
    },
    stararc: {
      en: {
        name: "StarArc Inverter Welding Machines",
        description:
          "Advanced StarArc inverter welding machines for professional welding operations. Reliable, efficient, and suitable for various welding processes and industrial applications.",
        keywords: [
          "stararc welding machines",
          "inverter welding",
          "welding equipment",
          "professional welding",
          "industrial welding machines",
        ],
      },
      id: {
        name: "Mesin Las Inverter StarArc",
        description:
          "Mesin las inverter StarArc canggih untuk operasi pengelasan profesional. Handal, efisien, dan cocok untuk berbagai proses pengelasan dan aplikasi industri.",
        keywords: [
          "mesin las stararc",
          "mesin las inverter",
          "peralatan las",
          "las profesional",
          "mesin las industri",
        ],
      },
    },
    allostar: {
      en: {
        name: "AlloyStar Wear Plates",
        description:
          "Durable AlloyStar wear plates for heavy-duty industrial applications. Excellent abrasion resistance and impact strength for mining, construction, and material handling equipment.",
        keywords: [
          "allostar wear plates",
          "wear resistant plates",
          "abrasion resistant",
          "mining equipment",
          "construction materials",
        ],
      },
      id: {
        name: "Wear Plate AlloyStar",
        description:
          "Wear plate AlloyStar tahan lama untuk aplikasi industri berat. Ketahanan abrasi dan kekuatan impak yang sangat baik untuk peralatan pertambangan, konstruksi, dan penanganan material.",
        keywords: [
          "wear plate allostar",
          "pelat tahan aus",
          "tahan abrasi",
          "peralatan pertambangan",
          "material konstruksi",
        ],
      },
    },
    tsv: {
      en: {
        name: "TSV Industrial Valves",
        description:
          "High-performance TSV industrial valves for critical applications in oil & gas, power generation, and process industries. Reliable flow control and pressure management solutions.",
        keywords: [
          "tsv valves",
          "industrial valves",
          "oil gas valves",
          "power generation valves",
          "process valves",
          "flow control",
        ],
      },
      id: {
        name: "Valve Industri TSV",
        description:
          "Valve industri TSV berperforma tinggi untuk aplikasi kritis di minyak & gas, pembangkit listrik, dan industri proses. Solusi kontrol aliran dan manajemen tekanan yang handal.",
        keywords: [
          "valve tsv",
          "valve industri",
          "valve minyak gas",
          "valve pembangkit listrik",
          "valve proses",
          "kontrol aliran",
        ],
      },
    },
  };

  const product = productInfo[productSlug as keyof typeof productInfo];
  const info = product[lang as "en" | "id"];
  const isEnglish = lang === "en";

  return {
    metadataBase: new URL(baseUrl),
    title: `${info.name} | PT. ANUGERAH PANCA WISESA`,
    description: info.description,
    keywords: [
      ...info.keywords,
      "PT Anugerah Panca Wisesa",
      "APW Indonesia",
      "industrial products distributor",
      isEnglish
        ? "Indonesia industrial supplier"
        : "supplier industri Indonesia",
    ],
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
      locale: isEnglish ? "en_US" : "id_ID",
      url: url,
      siteName: "APW Official Website",
      title: `${info.name} | PT. ANUGERAH PANCA WISESA`,
      description: info.description,
      images: [
        {
          url: productSlug === "starlet" ? "https://anugerahpancawisesa.com/assets/products/starlet/ChatGPT%20Image%20Oct%2027,%202026,%2004_18_21%20AM.png" : `https://anugerahpancawisesa.com/assets/products/${productSlug}-hero.webp`,
          width: 1200,
          height: 630,
          alt: info.name,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${info.name} | PT. ANUGERAH PANCA WISESA`,
      description: info.description,
      images: [
        productSlug === "starlet" ? "https://anugerahpancawisesa.com/assets/products/starlet/ChatGPT%20Image%20Oct%2027,%202026,%2004_18_21%20AM.png" : `https://anugerahpancawisesa.com/assets/products/${productSlug}-hero.webp`,
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/products/${productSlug}`,
        id: `${baseUrl}/id/products/${productSlug}`,
      },
    },
  };
}

const page = async ({ params }: PageProps) => {
  const { lang, productSlug } = await params;
  const dictionary = await getDictionary(lang as "en" | "id");

  return (
    <>
      <ProductStructuredData
        productSlug={productSlug}
        locale={lang as "en" | "id"}
      />
      <div>
        <Topnavbar dictionary={dictionary} />
        <ProductDetail dictionary={dictionary} productSlug={productSlug} />
        <Contact dictionary={dictionary} />
        <Footer dictionary={dictionary} />
      </div>
    </>
  );
};

export default page;
