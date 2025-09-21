import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PT. ANUGERAH PANCA WISESA",
  description:
    "Distributor Welding Consumables, Machines, Wear Plate & Industrial Valves",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
