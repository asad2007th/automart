
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FavoritesProvider } from "@/components/FavoritesProvider";

// Website title and description
export const metadata: Metadata = {
  title: {
    default: "AutoMart | Used Cars in Pakistan",
    template: "%s | AutoMart",
  },
  description:
    "Find, browse and explore quality used cars in Pakistan with AutoMart.",
};

// Main layout shared by all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <FavoritesProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
