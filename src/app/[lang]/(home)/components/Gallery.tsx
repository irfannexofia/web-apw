import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
  gallery: {
    title: string;
    subtitle: string;
    description: string;
    starlet: {
      title: string;
      description: string;
    };
    stararc: {
      title: string;
      description: string;
    };
    allostar: {
      title: string;
      description: string;
    };
    tsv: {
      title: string;
      description: string;
    };
    moreProducts: string;
    downloadCatalog: string;
  };
}

interface GalleryProps {
  dictionary: Dictionary;
}

const Gallery = ({ dictionary }: GalleryProps) => {
  const galleryImages = [
    {
      id: 1,
      title: dictionary.gallery.starlet.title,
      description: dictionary.gallery.starlet.description,
      image: "/assets/apw/gallery_starlet.webp",
      alt: "STARLET Welding Consumables",
      category: "Welding Consumables",
      specifications: [
        "E6013, E7018 Electrodes",
        "ER70S-6 Solid Wire",
        "Flux-Cored Wires",
        "TIG Filler Rods",
      ],
      applications: [
        "General Fabrication",
        "Maintenance",
        "Construction",
        "Oil & Gas",
      ],
      standards: "AWS A5.1, AWS A5.18",
    },
    {
      id: 2,
      title: dictionary.gallery.stararc.title,
      description: dictionary.gallery.stararc.description,
      image: "/assets/apw/gallery_starc.webp",
      alt: "StarArc Welding Machines",
      category: "Welding Machines",
      specifications: [
        "ZX7-500 High Power",
        "CS-401 Ultra High Voltage",
        "TIG/MIG/MAG Series",
        "Plasma Cutting",
      ],
      applications: [
        "Heavy Industry",
        "Manufacturing",
        "Shipbuilding",
        "Mining",
      ],
      standards: "CE, IEC Standards",
    },
    {
      id: 3,
      title: dictionary.gallery.allostar.title,
      description: dictionary.gallery.allostar.description,
      image: "/assets/apw/gallery_allostar.webp",
      alt: "AlloyStar Wear Plate",
      category: "Wear Plate",
      specifications: [
        "AS-60 Grade",
        "AS-80 Grade",
        "AS-C Chromium Carbide",
        "6-40mm Thickness",
      ],
      applications: [
        "Mining Equipment",
        "Cement Plant",
        "Steel Fabrication",
        "Heavy Equipment",
      ],
      standards: "Hardness 58-64 HRC",
    },
    {
      id: 4,
      title: dictionary.gallery.tsv.title,
      description: dictionary.gallery.tsv.description,
      image: "/assets/apw/gallery_tsv.webp",
      alt: "TSV Industrial Valves",
      category: "Industrial Valves",
      specifications: [
        "Gate, Globe, Ball Valves",
        '2"-48" Size Range',
        "Class 150-900",
        "Carbon & Stainless Steel",
      ],
      applications: [
        "Oil & Gas",
        "Petrochemical",
        "Power Plant",
        "Water Treatment",
      ],
      standards: "API, ASME, ANSI",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-apw-gradient-start/5"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:camera" className="w-4 h-4 mr-2" />
            Product Showcase
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dictionary.gallery.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {dictionary.gallery.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            {dictionary.gallery.description}
          </p>
        </div>

        {/* Detailed Product Gallery */}
        <div className="space-y-16 mb-16">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Product Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="bg-white border-2 border-primary/10 rounded-2xl p-6 shadow-xl">
                  <div className="relative h-96 rounded-xl overflow-hidden mb-6">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Quick Specs */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <IconifyIcon
                        icon="lucide:info"
                        className="w-4 h-4 mr-2 text-primary"
                      />
                      Quick Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="text-gray-900 font-medium">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Standards:</span>
                        <span className="text-gray-900 font-medium">
                          {item.standards}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl">
                  {/* Product Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                      {item.category}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <IconifyIcon
                        icon="lucide:settings"
                        className="w-5 h-5 mr-2 text-primary"
                      />
                      Product Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center">
                          <IconifyIcon
                            icon="lucide:check"
                            className="w-4 h-4 text-primary mr-2 flex-shrink-0"
                          />
                          <span className="text-sm text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <IconifyIcon
                        icon="lucide:building"
                        className="w-5 h-5 mr-2 text-primary"
                      />
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={
                        item.id === 1
                          ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-starlet-catalog.pdf"
                          : item.id === 2
                            ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-stararc-catalog.pdf"
                            : item.id === 3
                              ? "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-allostar-catalog.pdf"
                              : "https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-tsv-catalog.pdf"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primaryDark transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <IconifyIcon
                        icon="lucide:download"
                        className="w-5 h-5 mr-2"
                      />
                      Download Catalog
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <IconifyIcon
                        icon="lucide:message-circle"
                        className="w-5 h-5 mr-2"
                      />
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Standards Section */}
        <div className="bg-gradient-to-r from-primary to-apw-mid-gray rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              International Standards & Quality Assurance
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              All APW products meet international standards and undergo rigorous
              quality control processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:award"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">API Standards</h4>
              <p className="text-white/80">American Petroleum Institute</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:shield"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">ASME Standards</h4>
              <p className="text-white/80">
                American Society of Mechanical Engineers
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:check-circle"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">ANSI Standards</h4>
              <p className="text-white/80">
                American National Standards Institute
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:star"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h4 className="text-xl font-bold mb-2">OEM Grade</h4>
              <p className="text-white/80">Original Equipment Manufacturer</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-apw-gradient-start to-apw-gradient-end rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {dictionary.gallery.moreProducts}
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Explore our complete range of industrial products and find the
              perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cdn.digitalasianusantara.co.id/website/anugerahpancawisesa/product-catalog/products-allostar-catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <IconifyIcon icon="lucide:download" className="w-5 h-5 mr-2" />
                {dictionary.gallery.downloadCatalog}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
