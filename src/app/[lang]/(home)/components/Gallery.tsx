"use client";

import GalleryModal from "@/components/GalleryModal";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";
import { useState } from "react";

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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All gallery images from /public/assets/products/gallery
  const galleryImages = [
    // STARLET Images
    {
      src: "/assets/products/gallery/starlet/1.webp",
      alt: "STARLET Welding Consumables - E6013 Electrodes",
      category: "STARLET",
    },
    {
      src: "/assets/products/gallery/starlet/2.webp",
      alt: "STARLET Welding Consumables - E7018 Electrodes",
      category: "STARLET",
    },
    {
      src: "/assets/products/gallery/starlet/3.webp",
      alt: "STARLET Welding Consumables - ER70S-6 Solid Wire",
      category: "STARLET",
    },
    {
      src: "/assets/products/gallery/starlet/4.webp",
      alt: "STARLET Welding Consumables - Flux-Cored Wires",
      category: "STARLET",
    },
    {
      src: "/assets/products/gallery/starlet/5.webp",
      alt: "STARLET Welding Consumables - TIG Filler Rods",
      category: "STARLET",
    },
    // STARARC Images
    {
      src: "/assets/products/gallery/stararc/1.webp",
      alt: "StarArc Welding Machines - ZX7-500 High Power",
      category: "STARARC",
    },
    {
      src: "/assets/products/gallery/stararc/2.webp",
      alt: "StarArc Welding Machines - CS-401 Ultra High Voltage",
      category: "STARARC",
    },
    {
      src: "/assets/products/gallery/stararc/3.webp",
      alt: "StarArc Welding Machines - TIG/MIG/MAG Series",
      category: "STARARC",
    },
    {
      src: "/assets/products/gallery/stararc/4.webp",
      alt: "StarArc Welding Machines - Plasma Cutting",
      category: "STARARC",
    },
    {
      src: "/assets/products/gallery/stararc/5.webp",
      alt: "StarArc Welding Machines - Heavy Industry",
      category: "STARARC",
    },
    {
      src: "/assets/products/gallery/stararc/6.webp",
      alt: "StarArc Welding Machines - Manufacturing",
      category: "STARARC",
    },
    // ALLOSTAR Images
    {
      src: "/assets/products/gallery/allostar/1.webp",
      alt: "AlloyStar Wear Plate - AS-60 Grade",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/2.webp",
      alt: "AlloyStar Wear Plate - AS-80 Grade",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/3.webp",
      alt: "AlloyStar Wear Plate - AS-C Chromium Carbide",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/4.webp",
      alt: "AlloyStar Wear Plate - 6-40mm Thickness",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/5.webp",
      alt: "AlloyStar Wear Plate - Mining Equipment",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/6.webp",
      alt: "AlloyStar Wear Plate - Cement Plant",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/7.webp",
      alt: "AlloyStar Wear Plate - Steel Fabrication",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/8.webp",
      alt: "AlloyStar Wear Plate - Heavy Equipment",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/9.webp",
      alt: "AlloyStar Wear Plate - Quality Control",
      category: "ALLOSTAR",
    },
    {
      src: "/assets/products/gallery/allostar/10.webp",
      alt: "AlloyStar Wear Plate - Hardness 58-64 HRC",
      category: "ALLOSTAR",
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

        {/* Product Gallery Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Product Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {galleryImages.map((image, index) => (
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
                <div className="mt-3">
                  <div className="text-xs text-primary font-medium mb-1">
                    {image.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
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

        {/* Gallery Modal */}
        <GalleryModal
          isOpen={isGalleryOpen}
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={() => setIsGalleryOpen(false)}
          onIndexChange={(index: number) => setCurrentImageIndex(index)}
        />
      </div>
    </section>
  );
};

export default Gallery;
