import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CustomizationProvider } from "@/context/CustomizationContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pyntal Designs | Premium Handcrafted Furniture",
  description: "Bespoke, minimal furniture for the modern home. Handcrafted in Nairobi with precision and care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <CustomizationProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CustomizationProvider>
      </body>
    </html>
  );
}
