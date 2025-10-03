"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    tagline: string;
    cta1: string;
    cta2: string;
    cta3: string;
    description: string;
    services: string;
    products: string;
    exploreProducts: string;
    getStarted: string;
  };
  about: {
    stats: {
      projects: {
        number: string;
        label: string;
        description: string;
      };
      satisfaction: {
        number: string;
        label: string;
        description: string;
      };
      support: {
        number: string;
        label: string;
        description: string;
      };
      experience: {
        number: string;
        label: string;
        description: string;
      };
    };
  };
}

interface HeroProps {
  dictionary: Dictionary;
}

const Hero = ({ dictionary }: HeroProps) => {
  return (
    <section
      className="relative pt-32 pb-32 overflow-x-hidden bg-gradient-to-br from-apw-gradient-start via-apw-manatee to-apw-gradient-end"
      id="home"
    >
      {/* Industrial Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%238e95a3%22%20fill-opacity%3D%220.15%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Industrial Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%25,rgba(142,149,163,0.1)_25%25,rgba(142,149,163,0.1)_26%25,transparent_27%25,transparent_74%25,rgba(142,149,163,0.1)_75%25,rgba(142,149,163,0.1)_76%25,transparent_77%25),linear-gradient(transparent_24%25,rgba(142,149,163,0.1)_25%25,rgba(142,149,163,0.1)_26%25,transparent_27%25,transparent_74%25,rgba(142,149,163,0.1)_75%25,rgba(142,149,163,0.1)_76%25,transparent_77%25)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-900 text-sm font-bold mb-6 backdrop-blur-sm">
              <IconifyIcon
                icon="lucide:shield-check"
                className="w-5 h-5 mr-2 text-apw-gold-drop"
              />
              {dictionary.hero.badge}
            </div>

            {/* Tagline */}
            <div className="mb-6">
              <p className="text-lg text-gray-800 font-medium">
                {dictionary.hero.tagline}
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl text-gray-900 tracking-tight font-bold mb-6 leading-tight">
              {dictionary.hero.title}
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {dictionary.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <IconifyIcon
                  icon="lucide:package"
                  className="w-5 h-5 mr-2 inline"
                />
                {dictionary.hero.cta1}
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <IconifyIcon
                  icon="lucide:download"
                  className="w-5 h-5 mr-2 inline"
                />
                {dictionary.hero.cta2}
              </a>
            </div>
          </div>

          {/* Visual Content - APW Products Showcase */}
          <div className="relative">
            {/* Main Products Showcase */}
            <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              {/* Products Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* STARLET */}
                <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-apw-mid-gray rounded-lg flex items-center justify-center mr-3">
                      <IconifyIcon
                        icon="lucide:zap"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        STARLET®
                      </h4>
                      <p className="text-xs text-gray-700">
                        Welding Consumables
                      </p>
                    </div>
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/gallery/starlet/1.webp"
                      alt="STARLET Welding Consumables"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* StarArc */}
                <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-apw-mid-gray rounded-lg flex items-center justify-center mr-3">
                      <IconifyIcon
                        icon="lucide:cpu"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        StarArc®
                      </h4>
                      <p className="text-xs text-gray-700">Welding Machines</p>
                    </div>
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/gallery/stararc/1.webp"
                      alt="StarArc Welding Machines"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* AlloyStar */}
                <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-apw-mid-gray rounded-lg flex items-center justify-center mr-3">
                      <IconifyIcon
                        icon="lucide:shield"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        AlloyStar®
                      </h4>
                      <p className="text-xs text-gray-700">Wear Plate</p>
                    </div>
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/products/gallery/allostar/1.webp"
                      alt="AlloyStar Wear Plate"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* TSV */}
                <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-apw-mid-gray rounded-lg flex items-center justify-center mr-3">
                      <IconifyIcon
                        icon="lucide:settings"
                        className="w-4 h-4 text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">TSV®</h4>
                      <p className="text-xs text-gray-700">Industrial Valves</p>
                    </div>
                  </div>
                  <div className="relative h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/assets/apw/produk_tsv.webp"
                      alt="TSV Industrial Valves"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* APW Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/30 border border-white/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {dictionary.about.stats.projects.number}
                </div>
                <div className="text-xs text-gray-700 uppercase tracking-wider">
                  {dictionary.about.stats.projects.label}
                </div>
              </div>
              <div className="bg-white/30 border border-white/40 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {dictionary.about.stats.satisfaction.number}
                </div>
                <div className="text-xs text-gray-700 uppercase tracking-wider">
                  {dictionary.about.stats.satisfaction.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
