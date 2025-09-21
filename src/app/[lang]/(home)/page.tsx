import {
  CompanyStructuredData,
  WebsiteStructuredData,
} from "@/components/StructuredData";
import { getDictionary } from "../dictionaries";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Topnavbar from "./components/Topnavbar";

interface PageProps {
  params: Promise<{ lang: string }>;
}

const page = async ({ params }: PageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as "en" | "id");

  return (
    <>
      <CompanyStructuredData locale={lang as "en" | "id"} />
      <WebsiteStructuredData locale={lang as "en" | "id"} />
      <div>
        <Topnavbar dictionary={dictionary} />
        <Hero dictionary={dictionary} />
        <About dictionary={dictionary} />
        <Products dictionary={dictionary} />
        <Gallery dictionary={dictionary} />
        <Clients dictionary={dictionary} />
        <Contact dictionary={dictionary} />
        <Footer dictionary={dictionary} />
      </div>
    </>
  );
};

export default page;
