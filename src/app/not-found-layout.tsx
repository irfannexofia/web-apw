import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - PT. Anugerah Panca Wisesa",
  description:
    "The page you are looking for doesn't exist or has been moved. PT. Anugerah Panca Wisesa - Industrial Products Distributor.",
  keywords: [
    "404 error",
    "page not found",
    "PT Anugerah Panca Wisesa",
    "industrial products",
    "welding consumables",
    "error page",
    "broken link",
    "missing page",
  ],
  robots: {
    index: false, // Don't index error pages
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anugerahpancawisesa.com",
    siteName: "PT. Anugerah Panca Wisesa",
    title: "Page Not Found - PT. Anugerah Panca Wisesa",
    description:
      "The page you are looking for doesn't exist or has been moved. PT. Anugerah Panca Wisesa - Industrial Products Distributor.",
  },
};

interface NotFoundLayoutProps {
  children: React.ReactNode;
}

export default function NotFoundLayout({ children }: NotFoundLayoutProps) {
  return <>{children}</>;
}
