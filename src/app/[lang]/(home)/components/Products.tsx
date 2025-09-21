"use client";

import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Dictionary {
  products: {
    title: string;
    subtitle: string;
    description: string;
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
    geka: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    weldingAlloys: {
      name: string;
      type: string;
      description: string;
      features: string[];
    };
    features: string;
    inquireNow: string;
    howToPurchase: {
      title: string;
      description: string;
      getRecommendation: string;
      callDirectly: string;
    };
    gallery: {
      title: string;
      description: string;
      moreProducts: string;
    };
    cta: {
      title: string;
      description: string;
      contact: string;
      viewGallery: string;
    };
    getStarted: string;
    downloadCatalog: string;
  };
}

interface ProductsProps {
  dictionary: Dictionary;
}

const Products = ({ dictionary }: ProductsProps) => {
  const params = useParams();
  const currentLang = params.lang as string;

  // Product slug mapping
  const productSlugs = {
    1: "starlet",
    2: "stararc",
    3: "allostar",
    4: "tsv",
  };

  const products = [
    {
      id: 1,
      name: dictionary.products.starlet.name,
      type: dictionary.products.starlet.type,
      description: dictionary.products.starlet.description,
      features: dictionary.products.starlet.features,
      image: "/assets/apw/produk_starlet.webp",
      color: "primary",
    },
    {
      id: 2,
      name: dictionary.products.stararc.name,
      type: dictionary.products.stararc.type,
      description: dictionary.products.stararc.description,
      features: dictionary.products.stararc.features,
      image: "/assets/apw/produk_starc.webp",
      color: "apw-mid-gray",
    },
    {
      id: 3,
      name: dictionary.products.allostar.name,
      type: dictionary.products.allostar.type,
      description: dictionary.products.allostar.description,
      features: dictionary.products.allostar.features,
      image: "/assets/apw/produk_allostar.webp",
      color: "apw-gray-chateau",
    },
    {
      id: 4,
      name: dictionary.products.tsv.name,
      type: dictionary.products.tsv.type,
      description: dictionary.products.tsv.description,
      features: dictionary.products.tsv.features,
      image: "/assets/apw/produk_tsv.webp",
      color: "apw-mid-gray",
    },
  ];

  return (
    <section
      id="products"
      className="top bg-gradient-to-br from-gray-50 via-white to-apw-gradient-start/5"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:package" className="w-4 h-4 mr-2" />
            Industrial Solutions
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dictionary.products.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            {dictionary.products.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            {dictionary.products.description}
          </p>
        </div>

        {/* Products Showcase */}
        <div className="space-y-20 mb-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Product Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Technical Specifications */}
                  <div className="mt-6 bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <IconifyIcon
                        icon="lucide:settings"
                        className="w-5 h-5 mr-2 text-primary"
                      />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standards:</span>
                        <span className="text-gray-900 font-medium">
                          API, ASME, ANSI
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Quality:</span>
                        <span className="text-gray-900 font-medium">
                          OEM Grade
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Support:</span>
                        <span className="text-gray-900 font-medium">
                          24/7 Technical
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Delivery:</span>
                        <span className="text-gray-900 font-medium">
                          Fast & Reliable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl">
                  {/* Product Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                      {product.type}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <IconifyIcon
                        icon="lucide:star"
                        className="w-5 h-5 mr-2 text-primary"
                      />
                      {dictionary.products.features}
                    </h4>
                    <div className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <IconifyIcon
                            icon="lucide:check"
                            className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <IconifyIcon
                        icon="lucide:building"
                        className="w-5 h-5 mr-2 text-primary"
                      />
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.id === 1 && (
                        <>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            General Fabrication
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Maintenance
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Construction
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Oil & Gas
                          </span>
                        </>
                      )}
                      {product.id === 2 && (
                        <>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Heavy Industry
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Manufacturing
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Shipbuilding
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Mining
                          </span>
                        </>
                      )}
                      {product.id === 3 && (
                        <>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Mining Equipment
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Cement Plant
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Steel Fabrication
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Heavy Equipment
                          </span>
                        </>
                      )}
                      {product.id === 4 && (
                        <>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Oil & Gas
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Petrochemical
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Power Plant
                          </span>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            Water Treatment
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/${currentLang}/products/${productSlugs[product.id as keyof typeof productSlugs]}`}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <IconifyIcon icon="lucide:eye" className="w-5 h-5 mr-2" />
                      View Details
                    </Link>
                    <a
                      href={
                        productSlugs[
                          product.id as keyof typeof productSlugs
                        ] === "starlet"
                          ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-starlet-catalog.pdf"
                          : productSlugs[
                                product.id as keyof typeof productSlugs
                              ] === "stararc"
                            ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-stararc-catalog.pdf"
                            : productSlugs[
                                  product.id as keyof typeof productSlugs
                                ] === "allostar"
                              ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-allostar-catalog.pdf"
                              : "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-tsv-catalog.pdf"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <IconifyIcon
                        icon="lucide:download"
                        className="w-5 h-5 mr-2"
                      />
                      Download Catalog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Support Section */}
        <div className="bg-gradient-to-r from-primary to-apw-mid-gray rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Technical Support & Consultation
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our technical experts provide comprehensive support for product
              selection, application guidance, and troubleshooting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:headphones"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
              <p className="text-white/80">
                Round-the-clock technical assistance
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:users"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">Expert Consultation</h4>
              <p className="text-white/80">
                Professional guidance for your needs
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:file-text"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">
                Technical Documentation
              </h4>
              <p className="text-white/80">Comprehensive specs and manuals</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            {dictionary.products.cta.title}
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {dictionary.products.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <IconifyIcon
                icon="lucide:message-circle"
                className="w-5 h-5 mr-2"
              />
              {dictionary.products.cta.contact}
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
            >
              <IconifyIcon icon="lucide:eye" className="w-5 h-5 mr-2" />
              {dictionary.products.cta.viewGallery}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
