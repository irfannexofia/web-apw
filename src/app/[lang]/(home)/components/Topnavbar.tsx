"use client";
import ClientOnly from "@/components/ClientOnly";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import useScrollEvent from "@/hooks/useScrollEvent";
import Gumshoe from "gumshoejs";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Dictionary {
  navigation: {
    home: string;
    about: string;
    products: string;
    gallery: string;
    clients: string;
    contact: string;
  };
}

interface TopnavbarProps {
  dictionary: Dictionary;
}

const Topnavbar = ({ dictionary }: TopnavbarProps) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = params.lang as string;
  const { scrollY, isClient } = useScrollEvent();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on a product detail page
  const isProductDetailPage = pathname.includes("/products/");

  useEffect(() => {
    if (typeof window !== "undefined" && navRef.current) {
      new Gumshoe(".navbar-nav a", { offset: 80 });
    }
  }, []);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Dynamically load and initialize Gumshoe on client side
    if (typeof window !== "undefined" && navRef.current) {
      let gumshoe: { destroy: () => void } | null = null;

      // Dynamic import of Gumshoe for better performance
      import("gumshoejs")
        .then((Gumshoe) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          gumshoe = new (Gumshoe as any).default(".navbar-nav a", {
            offset: 80,
          });
        })
        .catch((error) => {
          console.warn("Failed to load Gumshoe:", error);
        });

      // Cleanup function
      return () => {
        if (gumshoe && gumshoe.destroy) {
          gumshoe.destroy();
        }
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, []);

  // Close language switcher when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isLangOpen) {
        const target = event.target as Element;
        if (!target.closest(".language-switcher")) {
          setIsLangOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const switchLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };
  return (
    <>
      <ClientOnly
        fallback={
          <nav
            className="navbar fixed top-0 start-0 end-0 z-999 transition-all duration-500 py-5 items-center shadow-md lg:shadow-none bg-white lg:bg-transparent"
            id="navbar"
          >
            <div className="container">
              <div className="flex lg:flex-nowrap flex-wrap items-center justify-between lg:justify-start">
                <div className="flex items-center">
                  <Link href={`/${currentLang}`} className="flex items-center">
                    <div className="flex flex-col">
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                        PT. ANUGERAH PANCA WISESA
                      </div>
                      <div className="text-xs sm:text-xs md:text-sm text-gray-700">
                        {currentLang === "id"
                          ? "Distributor Produk Industri"
                          : "Industrial Product Distributor"}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        }
      >
        <nav
          ref={navRef}
          className={`navbar ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? " is-sticky" : ""}  fixed top-0 start-0 end-0 z-999 transition-all duration-500 py-5 items-center shadow-md lg:shadow-none [&.is-sticky]:bg-white group [&.is-sticky]:shadow-md ${isProductDetailPage ? "bg-white" : "bg-white lg:bg-transparent"}`}
          id="navbar"
        >
          <div className="container">
            <div className="flex lg:flex-nowrap flex-wrap items-center justify-between lg:justify-start">
              <div className="flex items-center">
                {isProductDetailPage ? (
                  <Link
                    href={`/${currentLang}`}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/logo-navbar.svg"
                        alt="PT. ANUGERAH PANCA WISESA Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div
                        className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-colors ${
                          isClient &&
                          (scrollY >= 50 || isMobile || isProductDetailPage)
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                      >
                        PT. ANUGERAH PANCA WISESA
                      </div>
                      <div
                        className={`text-xs sm:text-xs md:text-sm transition-colors ${
                          isClient &&
                          (scrollY >= 50 || isMobile || isProductDetailPage)
                            ? "text-gray-700"
                            : "text-gray-700"
                        }`}
                      >
                        {currentLang === "id"
                          ? "Distributor Produk Industri"
                          : "Industrial Product Distributor"}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <a href="#home" className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/images/logo-navbar.svg"
                        alt="PT. ANUGERAH PANCA WISESA Logo"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div
                        className={`text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-colors ${
                          isClient && (scrollY >= 50 || isMobile)
                            ? "text-gray-900"
                            : "text-gray-900"
                        }`}
                      >
                        PT. ANUGERAH PANCA WISESA
                      </div>
                      <div
                        className={`text-xs sm:text-xs md:text-sm transition-colors ${
                          isClient && (scrollY >= 50 || isMobile)
                            ? "text-gray-700"
                            : "text-gray-700"
                        }`}
                      >
                        {currentLang === "id"
                          ? "Distributor Produk Industri"
                          : "Industrial Product Distributor"}
                      </div>
                    </div>
                  </a>
                )}
              </div>
              <div className="lg:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="hs-collapse-toggle"
                  type="button"
                  id="hs-unstyled-collapse"
                  data-hs-collapse="#navbarCollapse"
                >
                  <IconifyIcon
                    icon="lucide:menu"
                    className={`h-8 w-8 ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-gray-900" : "text-gray-900"}`}
                  />
                </button>
              </div>
              <div
                className=" navigation hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden items-center justify-center lg:flex mx-auto overflow-hidden mt-6 lg:mt-0 nav-light"
                id="navbarCollapse"
              >
                <ul
                  className="navbar-nav flex-col lg:flex-row gap-y-2 flex lg:items-center justify-center"
                  id="navbar-navlist"
                >
                  <li
                    className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-gray-900 lg:text-gray-900" : "text-gray-900 lg:text-gray-900"} group-[&.is-sticky]:text-gray-900 all duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                  >
                    {isProductDetailPage ? (
                      <Link
                        href={`/${currentLang}`}
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                      >
                        {dictionary.navigation.home}
                      </Link>
                    ) : (
                      <a
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                        href="#home"
                      >
                        {dictionary.navigation.home}
                      </a>
                    )}
                  </li>
                  <li
                    className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                  >
                    {isProductDetailPage ? (
                      <Link
                        href={`/${currentLang}/#about`}
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                      >
                        {dictionary.navigation.about}
                      </Link>
                    ) : (
                      <a
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                        href="#about"
                      >
                        {dictionary.navigation.about}
                      </a>
                    )}
                  </li>
                  <li
                    className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                  >
                    {isProductDetailPage ? (
                      <Link
                        href={`/${currentLang}/#products`}
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                      >
                        {dictionary.navigation.products}
                      </Link>
                    ) : (
                      <a
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                        href="#products"
                      >
                        {dictionary.navigation.products}
                      </a>
                    )}
                  </li>
                  <li
                    className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                  >
                    {isProductDetailPage ? (
                      <Link
                        href={`/${currentLang}/#gallery`}
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                      >
                        {dictionary.navigation.gallery}
                      </Link>
                    ) : (
                      <a
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                        href="#gallery"
                      >
                        {dictionary.navigation.gallery}
                      </a>
                    )}
                  </li>
                  <li
                    className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                  >
                    {isProductDetailPage ? (
                      <Link
                        href={`/${currentLang}/#clients`}
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                      >
                        {dictionary.navigation.clients}
                      </Link>
                    ) : (
                      <a
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                        href="#clients"
                      >
                        {dictionary.navigation.clients}
                      </a>
                    )}
                  </li>
                  <li
                    className={`nav-item mx-1.5 transition-all ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-dark lg:text-black" : "text-white lg:text-white"} group-[&.is-sticky]:text-dark duration-300 hover:text-primary [&.active]:!text-primary group-[&.is-sticky]:[&.active]:text-primary`}
                  >
                    {isProductDetailPage ? (
                      <Link
                        href={`/${currentLang}/#contact`}
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                      >
                        {dictionary.navigation.contact}
                      </Link>
                    ) : (
                      <a
                        className="nav-link inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 capitalize"
                        href="#contact"
                      >
                        {dictionary.navigation.contact}
                      </a>
                    )}
                  </li>
                </ul>
              </div>
              <div className="ms-auto shrink hidden lg:inline-flex gap-2">
                {/* Language Switcher */}
                <div className="relative group language-switcher">
                  <button
                    className={`py-2 px-3 inline-flex items-center gap-1 rounded-md text-sm ${isClient && (scrollY >= 50 || isMobile || isProductDetailPage) ? "text-gray-900" : "text-gray-900"} hover:bg-white/10 transition-all duration-300 font-medium`}
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    <IconifyIcon icon="lucide:globe" className="h-4 w-4" />
                    <span className="uppercase">{currentLang}</span>
                    <IconifyIcon
                      icon="lucide:chevron-down"
                      className="h-3 w-3"
                    />
                  </button>
                  <div
                    className={`absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 py-1 min-w-[120px] z-50 ${isLangOpen ? "block" : "hidden"}`}
                  >
                    <button
                      onClick={() => {
                        switchLanguage("en");
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                        currentLang === "en"
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      🇺🇸 English
                    </button>
                    <button
                      onClick={() => {
                        switchLanguage("id");
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                        currentLang === "id"
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      🇮🇩 Indonesia
                    </button>
                  </div>
                </div>

                {isProductDetailPage ? (
                  <Link
                    href={`/${currentLang}/#contact`}
                    className="py-2 px-6 inline-flex items-center gap-2 rounded-md text-base text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
                  >
                    <IconifyIcon
                      icon="lucide:message-circle"
                      className="h-4 w-4 fill-white/40"
                    />
                    <span className="hidden sm:block">
                      {currentLang === "id" ? "Hubungi Kami" : "Contact Us"}
                    </span>
                  </Link>
                ) : (
                  <a
                    href="#contact"
                    className="py-2 px-6 inline-flex items-center gap-2 rounded-md text-base text-white bg-primary hover:bg-primaryDark transition-all duration-500 font-medium"
                  >
                    <IconifyIcon
                      icon="lucide:message-circle"
                      className="h-4 w-4 fill-white/40"
                    />
                    <span className="hidden sm:block">
                      {currentLang === "id" ? "Hubungi Kami" : "Contact Us"}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </nav>
      </ClientOnly>
    </>
  );
};

export default Topnavbar;
