"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import Image from "next/image";

interface Dictionary {
  clients: {
    title: string;
    subtitle: string;
    description: string;
    clientList: {
      wilmar: {
        name: string;
        sector: string;
        project: string;
        description: string;
      };
      petrokimia: {
        name: string;
        sector: string;
        project: string;
        description: string;
      };
      pjb: {
        name: string;
        sector: string;
        project: string;
        description: string;
      };
    };
    project: string;
    impact: {
      title: string;
      description: string;
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
    testimonials: {
      title: string;
      description: string;
      wilmar: {
        quote: string;
        author: string;
      };
      petrokimia: {
        quote: string;
        author: string;
      };
      pjb: {
        quote: string;
        author: string;
      };
    };
    cta: {
      title: string;
      description: string;
      contact: string;
      viewProducts: string;
    };
  };
}

interface ClientsProps {
  dictionary: Dictionary;
}

const Clients = ({ dictionary }: ClientsProps) => {
  const newClients = [
    {
      name: "PT. ANTAM Tbk",
      sector: "Mining & Metals",
      project: "Mining Equipment Maintenance",
      description:
        "Leading Indonesian state-owned mining company specializing in nickel, gold, and bauxite mining operations.",
      logo: "/assets/clients/pt-antam-tbk-logo.webp",
    },
    {
      name: "PT. Amman Mineral",
      sector: "Copper Mining",
      project: "Copper Smelting Operations",
      description:
        "Major copper mining company with integrated mining and smelting operations in Indonesia.",
      logo: "/assets/clients/pt-amman-mineral-logo.webp",
    },
    {
      name: "PT. Surya Toto Indonesia",
      sector: "Manufacturing",
      project: "Industrial Equipment Supply",
      description:
        "Leading manufacturer of sanitary ware and building materials with extensive industrial facilities.",
      logo: "/assets/clients/pt-surya-toto-indonesia-logo.webp",
    },
    {
      name: "PT. Cemindo Gemilang",
      sector: "Cement Industry",
      project: "Cement Plant Maintenance",
      description:
        "Integrated cement company with modern cement plants and comprehensive industrial operations.",
      logo: "/assets/clients/pt-cemindo-gemilang-logo.webp",
    },
    {
      name: "PT. Dian Surya Global",
      sector: "Industrial Services",
      project: "Multi-Industry Solutions",
      description:
        "Comprehensive industrial services provider specializing in maintenance and equipment solutions.",
      logo: "/assets/clients/pt-dian-surya-global-logo.webp",
    },
  ];

  const stats = [
    {
      number: dictionary.clients.impact.stats.projects.number,
      label: dictionary.clients.impact.stats.projects.label,
      description: dictionary.clients.impact.stats.projects.description,
    },
    {
      number: dictionary.clients.impact.stats.satisfaction.number,
      label: dictionary.clients.impact.stats.satisfaction.label,
      description: dictionary.clients.impact.stats.satisfaction.description,
    },
    {
      number: dictionary.clients.impact.stats.support.number,
      label: dictionary.clients.impact.stats.support.label,
      description: dictionary.clients.impact.stats.support.description,
    },
    {
      number: dictionary.clients.impact.stats.experience.number,
      label: dictionary.clients.impact.stats.experience.label,
      description: dictionary.clients.impact.stats.experience.description,
    },
  ];

  const industrySectors = [
    {
      id: 1,
      name: "Mining",
      icon: "lucide:pickaxe",
      description: "Maintenance alat berat, proteksi bucket & crusher",
      applications: [
        "Heavy Equipment",
        "Crusher Lining",
        "Bucket Protection",
        "Mining Tools",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 2,
      name: "Oil & Gas",
      icon: "lucide:droplets",
      description: "Valve & consumables untuk pipeline & refinery",
      applications: [
        "Pipeline Systems",
        "Refinery Equipment",
        "Valve Solutions",
        "Maintenance",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      name: "Steel Fabrication",
      icon: "lucide:hammer",
      description: "Pengelasan struktur baja",
      applications: [
        "Structural Welding",
        "Fabrication",
        "Construction",
        "Maintenance",
      ],
      color: "from-gray-500 to-gray-600",
    },
    {
      id: 4,
      name: "Shipbuilding",
      icon: "lucide:anchor",
      description: "Mesin las & consumables untuk perbaikan kapal",
      applications: [
        "Ship Repair",
        "Marine Equipment",
        "Welding Solutions",
        "Maintenance",
      ],
      color: "from-teal-500 to-teal-600",
    },
    {
      id: 5,
      name: "Power Generation",
      icon: "lucide:zap",
      description: "Perbaikan boiler, valve, dan maintenance periodik",
      applications: [
        "Boiler Maintenance",
        "Power Plant",
        "Valve Systems",
        "Periodic Maintenance",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 6,
      name: "Manufacturing",
      icon: "lucide:factory",
      description: "Consumables & wear plate untuk efisiensi produksi",
      applications: [
        "Production Lines",
        "Wear Protection",
        "Efficiency Solutions",
        "Quality Control",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-apw-gradient-start/5"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:users" className="w-4 h-4 mr-2" />
            Trusted Partners
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.clients.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {dictionary.clients.description}
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Since its establishment, APW has been trusted by leading national
            and multinational companies. Our products and services ensure
            operational continuity and deliver international quality standards
            across heavy industries.
          </p>
        </div>

        {/* Industry Sectors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              APW provides comprehensive solutions across multiple heavy
              industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySectors.map((sector) => (
              <div
                key={sector.id}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Sector Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconifyIcon
                    icon={sector.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>

                {/* Sector Info */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {sector.name}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {sector.description}
                </p>

                {/* Applications */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">
                    Applications:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {sector.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our clients include major Indonesian companies across various
                industrial sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newClients.map((client, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  {/* Client Logo */}
                  <div className="flex items-center justify-center h-24 mb-4">
                    <div className="relative w-full h-full max-w-48">
                      <Image
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        fill
                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {client.name}
                    </h4>
                    <p className="text-primary font-medium mb-3 text-sm">
                      {client.sector}
                    </p>

                    {/* Project Highlight */}
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <h5 className="font-semibold text-gray-900 mb-1 flex items-center justify-center text-sm">
                        <IconifyIcon
                          icon="lucide:briefcase"
                          className="w-3 h-3 mr-1 text-primary"
                        />
                        Project:
                      </h5>
                      <p className="text-xs text-gray-700 font-medium">
                        {client.project}
                      </p>
                    </div>

                    <p className="text-gray-600 text-xs leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-apw-mid-gray rounded-2xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {dictionary.clients.impact.title}
            </h3>
            <p className="text-xl text-white/90">
              {dictionary.clients.impact.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconifyIcon
                    icon="lucide:trending-up"
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Credibility Section */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Companies Choose APW
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, reliability, and technical excellence
              makes us the preferred partner for heavy industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:award"
                  className="w-8 h-8 text-primary"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Quality Assurance
              </h4>
              <p className="text-gray-600">
                International standards compliance with rigorous quality control
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:clock"
                  className="w-8 h-8 text-primary"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Reliable Delivery
              </h4>
              <p className="text-gray-600">
                On-time delivery with comprehensive logistics support
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                <IconifyIcon
                  icon="lucide:headphones"
                  className="w-8 h-8 text-primary"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Technical Support
              </h4>
              <p className="text-gray-600">
                24/7 expert technical support and consultation
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-apw-gradient-start to-apw-gradient-end rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {dictionary.clients.cta.title}
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              {dictionary.clients.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <IconifyIcon
                  icon="lucide:message-circle"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.clients.cta.contact}
              </a>
              <a
                href="#products"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
              >
                <IconifyIcon
                  icon="lucide:arrow-right"
                  className="w-5 h-5 mr-2"
                />
                {dictionary.clients.cta.viewProducts}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
