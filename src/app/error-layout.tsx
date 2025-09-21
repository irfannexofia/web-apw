import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Server Error - PT. Anugerah Panca Wisesa",
  description:
    "Something went wrong on our end. We're working to fix it. PT. Anugerah Panca Wisesa - Industrial Products Distributor.",
  keywords: [
    "500 error",
    "server error",
    "internal server error",
    "PT Anugerah Panca Wisesa",
    "industrial products",
    "welding consumables",
    "technical issue",
    "maintenance",
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
    title: "Server Error - PT. Anugerah Panca Wisesa",
    description:
      "Something went wrong on our end. We're working to fix it. PT. Anugerah Panca Wisesa - Industrial Products Distributor.",
  },
};

interface ErrorLayoutProps {
  children: React.ReactNode;
}

export default function ErrorLayout({ children }: ErrorLayoutProps) {
  return <>{children}</>;
}
