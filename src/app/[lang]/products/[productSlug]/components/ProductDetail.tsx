"use client";

import GalleryModal from "@/components/GalleryModal";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface Dictionary {
  products: {
    starlet: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    stararc: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    allostar: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    tsv: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    features: string;
    downloadCatalog: string;
    getQuote: string;
    backToProducts: string;
    technicalSpecs: string;
    applications: string;
    productVariants: string;
    standards: string;
    quality: string;
    support: string;
    delivery: string;
  };
}

interface ProductDetailProps {
  dictionary: Dictionary;
  productSlug: string;
}

const ProductDetail = ({ dictionary, productSlug }: ProductDetailProps) => {
  const params = useParams();
  const currentLang = params.lang as string;

  // Gallery modal state
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Product data mapping
  const productData = {
    starlet: {
      name: dictionary.products.starlet.name,
      type: dictionary.products.starlet.type,
      description: dictionary.products.starlet.description,
      features: dictionary.products.starlet.features,
      heroImage: "/assets/products/gallery/starlet/1.webp",
      logo: "/assets/products/logo/products-starlet-logo.webp",
      gallery: [
        {
          src: "/assets/products/gallery/starlet/1.webp",
          alt: "STARLET Welding Consumables Gallery 1",
        },
        {
          src: "/assets/products/gallery/starlet/2.webp",
          alt: "STARLET Welding Consumables Gallery 2",
        },
        {
          src: "/assets/products/gallery/starlet/3.webp",
          alt: "STARLET Welding Consumables Gallery 3",
        },
        {
          src: "/assets/products/gallery/starlet/4.webp",
          alt: "STARLET Welding Consumables Gallery 4",
        },
        {
          src: "/assets/products/gallery/starlet/5.webp",
          alt: "STARLET Welding Consumables Gallery 5",
        },
      ],
      variants: [
        {
          category: "SMAW (Electrodes)",
          products: [
            {
              name: "E6013",
              description: "Rutile electrode, smooth bead, easy arc striking",
              sizes: "2.5 / 3.2 / 4.0 mm",
              packaging: "5kg / 20kg",
              standard: "AWS A5.1 E6013",
            },
            {
              name: "E7018",
              description: "Low hydrogen electrode, high tensile strength",
              sizes: "3.2 / 4.0 mm",
              packaging: "5kg / 20kg",
              standard: "AWS A5.1 E7018",
            },
          ],
        },
        {
          category: "GMAW/MAG (Solid Wires)",
          products: [
            {
              name: "ER70S-6",
              description: "Solid wire, smooth arc, minimal spatter",
              sizes: "0.8 / 1.0 / 1.2 mm",
              packaging: "15kg spool",
              standard: "AWS A5.18 ER70S-6",
            },
          ],
        },
        {
          category: "FCAW (Flux-Cored Wires)",
          products: [
            {
              name: "E71T-1",
              description: "High deposition, all-position welding",
              sizes: "1.2 / 1.6 mm",
              packaging: "15kg spool",
              standard: "AWS A5.20 E71T-1",
            },
          ],
        },
        {
          category: "GTAW (TIG Filler Rods)",
          products: [
            {
              name: "ER308L",
              description: "Stainless steel filler rod, corrosion resistant",
              sizes: "2.4 / 3.2 mm",
              packaging: "5kg box",
              standard: "AWS A5.9 ER308L",
            },
          ],
        },
      ],
      applications: [
        "Mining",
        "Oil & Gas",
        "Steel Fabrication",
        "Shipbuilding",
        "General Manufacturing",
      ],
    },
    stararc: {
      name: dictionary.products.stararc.name,
      type: dictionary.products.stararc.type,
      description: dictionary.products.stararc.description,
      features: dictionary.products.stararc.features,
      heroImage: "/assets/products/gallery/stararc/1.webp",
      logo: "/assets/products/logo/products-stararc-logo.webp",
      gallery: [
        {
          src: "/assets/products/gallery/stararc/1.webp",
          alt: "StarArc Welding Machines Gallery 1",
        },
        {
          src: "/assets/products/gallery/stararc/2.webp",
          alt: "StarArc Welding Machines Gallery 2",
        },
        {
          src: "/assets/products/gallery/stararc/3.webp",
          alt: "StarArc Welding Machines Gallery 3",
        },
        {
          src: "/assets/products/gallery/stararc/4.webp",
          alt: "StarArc Welding Machines Gallery 4",
        },
        {
          src: "/assets/products/gallery/stararc/5.webp",
          alt: "StarArc Welding Machines Gallery 5",
        },
        {
          src: "/assets/products/gallery/stararc/6.webp",
          alt: "StarArc Welding Machines Gallery 6",
        },
      ],
      variants: [
        {
          category: "MMA (Manual Metal Arc) – ZX7 & CS Series",
          products: [
            {
              name: "ZX7-500",
              description: "High power, high current",
              specs: "Duty cycle 60%, 500A max",
              standard: "ISO, CE",
            },
            {
              name: "ZX7-630",
              description: "Heavy-duty welding",
              specs: "Duty cycle 100%, 630A max",
              standard: "ISO, CE",
            },
            {
              name: "CS-401/501",
              description: "Ultra-high voltage application",
              specs: "Voltage 220–380V, 500A max",
              standard: "ISO, CE",
            },
          ],
        },
        {
          category: "TIG (WS & WSE Series)",
          products: [
            {
              name: "WS-200/250",
              description: "Wide voltage TIG welding",
              specs: "Stainless steel factory use",
              standard: "ISO, CE",
            },
            {
              name: "WSE-315",
              description: "Multi-functional AC/DC TIG",
              specs: "Aluminum + stainless",
              standard: "ISO, CE",
            },
            {
              name: "WSM-400",
              description: "Pulsing argon welding",
              specs: "Precision industrial welding",
              standard: "ISO, CE",
            },
          ],
        },
        {
          category: "MIG/MAG (NBC Series)",
          products: [
            {
              name: "NBC-350/500",
              description: "High current MIG welding",
              specs: "350–500A max",
              standard: "ISO, CE",
            },
            {
              name: "NBC-630",
              description: "Heavy industry dual process",
              specs: "MIG/MMA + Carbon Gouging",
              standard: "ISO, CE",
            },
            {
              name: "NBC-270/315",
              description: "Special for thin plates",
              specs: "Integrated/separated gas shielded",
              standard: "ISO, CE",
            },
            {
              name: "NBC 500X2",
              description: "Dual - station gas shielded welding machine",
              specs: "50 - 550 A each station",
              standard: "ISO, CE",
            },
            {
              name: "SAC 100",
              description: "Welding carriage swing welding trolley automatic",
              specs: "Four rims driving (rubber rim)",
              standard: "ISO, CE",
            },
          ],
        },
        {
          category: "SAW (ZD7 Series)",
          products: [
            {
              name: "ZD7-1250",
              description: "Inverter automatic SAW machine",
              specs: "1250A max, steel & shipbuilding",
              standard: "ISO, CE",
            },
          ],
        },
        {
          category: "Plasma Cutting (LGK Series)",
          products: [
            {
              name: "LGK-120/160/200",
              description: "CNC plasma cutting",
              specs: "Heavy industry, pump integrated",
              standard: "ISO, CE",
            },
            {
              name: "LGK-80",
              description: "Wide voltage plasma cutting",
              specs: "220V/380V auto-switch",
              standard: "ISO, CE",
            },
          ],
        },
      ],
      applications: [
        "Mining & Oil & Gas",
        "Steel Construction",
        "Shipbuilding",
        "Power Generation",
        "General Manufacturing",
      ],
    },
    allostar: {
      name: dictionary.products.allostar.name,
      type: dictionary.products.allostar.type,
      description: dictionary.products.allostar.description,
      features: dictionary.products.allostar.features,
      heroImage: "/assets/products/gallery/allostar/1.webp",
      logo: "/assets/products/logo/products-allostar-logo.webp",
      gallery: [
        {
          src: "/assets/products/gallery/allostar/1.webp",
          alt: "AlloyStar Wear Plate Gallery 1",
        },
        {
          src: "/assets/products/gallery/allostar/2.webp",
          alt: "AlloyStar Wear Plate Gallery 2",
        },
        {
          src: "/assets/products/gallery/allostar/3.webp",
          alt: "AlloyStar Wear Plate Gallery 3",
        },
        {
          src: "/assets/products/gallery/allostar/4.webp",
          alt: "AlloyStar Wear Plate Gallery 4",
        },
        {
          src: "/assets/products/gallery/allostar/5.webp",
          alt: "AlloyStar Wear Plate Gallery 5",
        },
        {
          src: "/assets/products/gallery/allostar/6.webp",
          alt: "AlloyStar Wear Plate Gallery 6",
        },
        {
          src: "/assets/products/gallery/allostar/7.webp",
          alt: "AlloyStar Wear Plate Gallery 7",
        },
        {
          src: "/assets/products/gallery/allostar/8.webp",
          alt: "AlloyStar Wear Plate Gallery 8",
        },
        {
          src: "/assets/products/gallery/allostar/9.webp",
          alt: "AlloyStar Wear Plate Gallery 9",
        },
        {
          src: "/assets/products/gallery/allostar/10.webp",
          alt: "AlloyStar Wear Plate Gallery 10",
        },
      ],
      variants: [
        {
          category: "CCO Wear Resistance Plate",
          products: [
            {
              name: "AlloyStar® 107AS",
              description: "High Abrasion & Moderate Impact",
              specs: "All weldable steels, mostly structural steels",
              standard: "58 – 62 HRC",
            },
            {
              name: "AlloyStar® 307AS",
              description: "Tough Abrasion & High Impact",
              specs: "All weldable steels, mostly structural steels",
              standard: "58 – 64 HRC",
            },
            {
              name: "AlloyStar® 607AS",
              description:
                "Tough Abrasion & Moderate Impact & Working Temperature up to 850°C",
              specs: "All weldable steels, mostly structural steels",
              standard: "58 – 65 HRC",
            },
          ],
        },
        {
          category: "Smooth Wear Plate",
          products: [
            {
              name: "AlloyStar® 688AS",
              description: "Tough Abrasion & High Impact",
              specs: "All weldable steels, mostly structural steels",
              standard: "58 – 64 HRC",
            },
          ],
        },
      ],
      applications: [
        "Mining Equipment",
        "Cement Plant",
        "Steel Fabrication",
        "Heavy Equipment",
      ],
    },
    tsv: {
      name: dictionary.products.tsv.name,
      type: dictionary.products.tsv.type,
      description: dictionary.products.tsv.description,
      features: dictionary.products.tsv.features,
      heroImage: "/assets/products/tsv_collage.png",
      logo: "/assets/products/logo/products-tsv-logo.webp",
      gallery: [
        { src: "/assets/products/tsv_gatevalve.png", alt: "TSV Gate Valve" },
        { src: "/assets/products/tsv_ballvalve.png", alt: "TSV Ball Valve" },
        {
          src: "/assets/products/tsv_butterfly.png",
          alt: "TSV Butterfly Valve",
        },
        { src: "/assets/products/tsv_relief.png", alt: "TSV Relief Valve" },
      ],
      variants: [
        {
          category: "TSV Valve Types",
          products: [
            {
              name: "Gate Valve",
              description: "Full bore, low pressure drop",
              specs: '2"-48" size range',
              standard: "API 600, ASME B16.34",
            },
            {
              name: "Globe Valve",
              description: "Precise flow control",
              specs: '2"-24" size range',
              standard: "API 602, ASME B16.34",
            },
            {
              name: "Ball Valve",
              description: "Quick shut-off, high pressure",
              specs: '2"-36" size range',
              standard: "API 6D, ASME B16.34",
            },
            {
              name: "Butterfly Valve",
              description: "Compact, economical",
              specs: '2"-60" size range',
              standard: "API 609, ASME B16.34",
            },
            {
              name: "Check Valve",
              description: "Automatic backflow prevention",
              specs: '2"-48" size range',
              standard: "API 594, ASME B16.34",
            },
            {
              name: "Relief Valve",
              description: "Pressure protection",
              specs: '1/2"-8" size range',
              standard: "API 526, ASME B16.34",
            },
          ],
        },
      ],
      applications: [
        "Oil & Gas",
        "Petrochemical",
        "Power Plant",
        "Water Treatment",
      ],
    },
  };

  const product = productData[productSlug as keyof typeof productData];

  if (!product) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The requested product could not be found.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300"
          >
            <IconifyIcon icon="lucide:arrow-left" className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-apw-gradient-start/5">
      <div className="py-20 container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl">
              <div className="relative h-96 rounded-xl overflow-hidden">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              {product.type}
            </div>
            <div className="flex items-center mb-4">
              <div className="relative w-20 h-20 mr-4 flex-shrink-0">
                <Image
                  src={product.logo}
                  alt={`${product.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                {product.name}
              </h1>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <IconifyIcon
                  icon="lucide:star"
                  className="w-5 h-5 mr-2 text-primary"
                />
                {dictionary.products.features}
              </h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <IconifyIcon
                      icon="lucide:check"
                      className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <IconifyIcon
                  icon="lucide:settings"
                  className="w-5 h-5 mr-2 text-primary"
                />
                {dictionary.products.technicalSpecs}
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {dictionary.products.standards}:
                  </span>
                  <span className="text-gray-900 font-medium">
                    API, ASME, ANSI
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {dictionary.products.quality}:
                  </span>
                  <span className="text-gray-900 font-medium">OEM Grade</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {dictionary.products.support}:
                  </span>
                  <span className="text-gray-900 font-medium">
                    24/7 Technical
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {dictionary.products.delivery}:
                  </span>
                  <span className="text-gray-900 font-medium">
                    Fast & Reliable
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.products.getQuote}
              </Link>
              <a
                href={
                  productSlug === "starlet"
                    ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-starlet-catalog.pdf"
                    : productSlug === "stararc"
                      ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-stararc-catalog.pdf"
                      : productSlug === "allostar"
                        ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-allostar-catalog.pdf"
                        : "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-tsv-catalog.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <IconifyIcon icon="lucide:download" className="w-5 h-5 mr-2" />
                {dictionary.products.downloadCatalog}
              </a>
            </div>
          </div>
        </div>

        {/* Product Variants */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {dictionary.products.productVariants}
          </h2>
          <div className="space-y-12">
            {product.variants.map((variant, variantIndex) => (
              <div
                key={variantIndex}
                className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {variant.category}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          {productSlug === "allostar" ? "Model" : "Product"}
                        </th>
                        {productSlug !== "allostar" && (
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">
                            Description
                          </th>
                        )}
                        {productSlug === "starlet" && (
                          <>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">
                              Size
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">
                              Packaging
                            </th>
                          </>
                        )}
                        {productSlug === "stararc" && (
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">
                            Technical Parameter
                          </th>
                        )}
                        {productSlug === "allostar" && (
                          <>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">
                              Base Material
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">
                              Application
                            </th>
                          </>
                        )}
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">
                          {productSlug === "allostar" ? "Hardness" : "Standard"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {variant.products.map((item, itemIndex) => (
                        <tr
                          key={itemIndex}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4 font-medium text-gray-900">
                            {item.name}
                          </td>
                          {productSlug !== "allostar" && (
                            <td className="py-3 px-4 text-gray-700">
                              {item.description}
                            </td>
                          )}
                          {productSlug === "starlet" && "sizes" in item && (
                            <>
                              <td className="py-3 px-4 text-gray-700">
                                {item.sizes}
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                {item.packaging}
                              </td>
                            </>
                          )}
                          {productSlug === "stararc" && "specs" in item && (
                            <td className="py-3 px-4 text-gray-700">
                              {item.specs}
                            </td>
                          )}
                          {productSlug === "allostar" && "specs" in item && (
                            <>
                              <td className="py-3 px-4 text-gray-700">
                                {item.specs}
                              </td>
                              <td className="py-3 px-4 text-gray-700">
                                {item.description}
                              </td>
                            </>
                          )}
                          <td className="py-3 px-4 text-gray-700">
                            {productSlug === "allostar"
                              ? item.standard
                              : item.standard}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Applications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {dictionary.products.applications}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {product.applications.map((application, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary/10 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <IconifyIcon
                  icon="lucide:building"
                  className="w-8 h-8 text-primary mx-auto mb-3"
                />
                <span className="text-gray-900 font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.gallery.map((image, index) => (
              <div
                key={index}
                className="bg-white border-2 border-primary/10 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 group"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsGalleryOpen(true);
                }}
              >
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <IconifyIcon
                      icon="lucide:zoom-in"
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        <GalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={product.gallery}
          currentIndex={currentImageIndex}
          onIndexChange={setCurrentImageIndex}
        />

        {/* Back to Products */}
        <div className="text-center">
          <Link
            href={`/${currentLang}#products`}
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <IconifyIcon icon="lucide:arrow-left" className="w-5 h-5 mr-2" />
            {dictionary.products.backToProducts}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
