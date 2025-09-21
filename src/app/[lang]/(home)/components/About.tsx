"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

interface Dictionary {
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      items: string;
    };
    values: {
      title: string;
      expertise: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      reliability: {
        title: string;
        description: string;
      };
    };
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
    impact: {
      title: string;
      description: string;
    };
    philosophy: {
      title: string;
      description: string;
    };
    exploreProducts: string;
    startJourney: string;
    locations: {
      mainOffice: {
        title: string;
        address: string;
        hours: string;
      };
    };
  };
}

interface AboutProps {
  dictionary: Dictionary;
}

const About = ({ dictionary }: AboutProps) => {
  const stats = [
    {
      number: dictionary.about.stats.experience.number,
      label: dictionary.about.stats.experience.label,
      icon: "lucide:award",
    },
    {
      number: dictionary.about.stats.projects.number,
      label: dictionary.about.stats.projects.label,
      icon: "lucide:package",
    },
    {
      number: dictionary.about.stats.satisfaction.number,
      label: dictionary.about.stats.satisfaction.label,
      icon: "lucide:heart",
    },
    {
      number: dictionary.about.stats.support.number,
      label: dictionary.about.stats.support.label,
      icon: "lucide:headphones",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-apw-gradient-start/5"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-lg bg-apw-manatee/10 border border-apw-manatee/20 text-apw-manatee text-sm font-bold mb-4">
            <IconifyIcon icon="lucide:building-2" className="w-4 h-4 mr-2" />
            {dictionary.about.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {dictionary.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {dictionary.about.subtitle}
          </p>
        </div>

        {/* Company Description with Industrial Visual */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Empowering Industries with Reliable Products
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {dictionary.about.description}
              </p>

              {/* Industry Sectors */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:mining"
                    className="w-5 h-5 text-primary mr-3"
                  />
                  <span className="text-gray-700">Mining</span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:fuel"
                    className="w-5 h-5 text-primary mr-3"
                  />
                  <span className="text-gray-700">Oil & Gas</span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:construction"
                    className="w-5 h-5 text-primary mr-3"
                  />
                  <span className="text-gray-700">Construction</span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:ship"
                    className="w-5 h-5 text-primary mr-3"
                  />
                  <span className="text-gray-700">Shipbuilding</span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:cog"
                    className="w-5 h-5 text-primary mr-3"
                  />
                  <span className="text-gray-700">Manufacturing</span>
                </div>
                <div className="flex items-center">
                  <IconifyIcon
                    icon="lucide:zap"
                    className="w-5 h-5 text-primary mr-3"
                  />
                  <span className="text-gray-700">Power Generation</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border-2 border-primary/10 rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {/* Warehouse Visual */}
                  <div className="bg-gradient-to-br from-apw-manatee/10 to-apw-mid-gray/10 rounded-xl p-6 border border-apw-manatee/20">
                    <IconifyIcon
                      icon="lucide:warehouse"
                      className="w-8 h-8 text-primary mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Warehouse
                    </h4>
                    <p className="text-sm text-gray-600">
                      Organized stock management
                    </p>
                  </div>

                  {/* Technical Support Visual */}
                  <div className="bg-gradient-to-br from-apw-gold-drop/10 to-apw-mid-gray/10 rounded-xl p-6 border border-apw-gold-drop/20">
                    <IconifyIcon
                      icon="lucide:headphones"
                      className="w-8 h-8 text-apw-gold-drop mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      24/7 Support
                    </h4>
                    <p className="text-sm text-gray-600">
                      Technical assistance
                    </p>
                  </div>

                  {/* Quality Standards Visual */}
                  <div className="bg-gradient-to-br from-primary/10 to-apw-manatee/10 rounded-xl p-6 border border-primary/20">
                    <IconifyIcon
                      icon="lucide:award"
                      className="w-8 h-8 text-primary mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Standards
                    </h4>
                    <p className="text-sm text-gray-600">API, ASME, ANSI</p>
                  </div>

                  {/* Distribution Network Visual */}
                  <div className="bg-gradient-to-br from-apw-gray-chateau/10 to-apw-mid-gray/10 rounded-xl p-6 border border-apw-gray-chateau/20">
                    <IconifyIcon
                      icon="lucide:truck"
                      className="w-8 h-8 text-apw-gray-chateau mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Distribution
                    </h4>
                    <p className="text-sm text-gray-600">
                      Fast delivery network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-4">
                <IconifyIcon
                  icon="lucide:target"
                  className="w-8 h-8 text-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.about.mission.title}
              </h3>
            </div>
            <div className="text-gray-700 leading-relaxed">
              {dictionary.about.mission.items.split("\n").map((item, index) => (
                <div key={index} className="flex items-start mb-3">
                  <IconifyIcon
                    icon="lucide:check"
                    className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mr-4">
                <IconifyIcon icon="lucide:eye" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {dictionary.about.vision.title}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {dictionary.about.vision.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary to-apw-mid-gray rounded-2xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              {dictionary.about.impact.title}
            </h3>
            <p className="text-xl text-white/90">
              {dictionary.about.impact.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconifyIcon
                    icon={stat.icon}
                    className="w-8 h-8 text-white"
                  />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <IconifyIcon
                icon="lucide:map-pin"
                className="w-6 h-6 text-primary mr-3"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                {dictionary.about.locations.mainOffice.title}
              </h4>
            </div>
            <p className="text-gray-600">
              {dictionary.about.locations.mainOffice.address}
              <br />
              <span className="text-sm text-gray-500">
                {dictionary.about.locations.mainOffice.hours}
              </span>
            </p>
          </div>

          <div className="bg-white border-2 border-primary/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <IconifyIcon
                icon="lucide:factory"
                className="w-6 h-6 text-primary mr-3"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                Workshop & Distribution Center
              </h4>
            </div>
            <p className="text-gray-600">
              {dictionary.about.locations.mainOffice.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
