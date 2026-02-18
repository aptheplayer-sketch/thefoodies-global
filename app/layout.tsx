import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "THE FOODIES — Food, Hotels & Travel",
  description: "THE FOODIES is a multi-service platform for Tiffin, Hotels/Restaurants, Travel and Bulk Orders. Partner-friendly and built to scale across India.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thefoodieswebsite.vercel.app"),
  openGraph: {
    title: "THE FOODIES — Food, Hotels & Travel",
    description: "Partner-friendly multi-service platform for Food, Hotels/Restaurants, Travel and Bulk Orders.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
