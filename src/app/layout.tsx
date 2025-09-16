import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/(home)/_components/header";
import { Footer } from "./(home)/_components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Fake Store | Belanja Online Fashion, Elektronik & Perhiasan",
    template: "%s | Fake Store",
  },
  description:
    "Fake Store adalah destinasi belanja online untuk fashion pria & wanita, elektronik, serta perhiasan berkualitas. Temukan produk terbaik dengan harga terjangkau.",
  keywords: [
    "fake store",
    "web store",
    "belanja online",
    "fashion pria",
    "fashion wanita",
    "elektronik",
    "perhiasan",
    "toko online",
  ],
  openGraph: {
    title: "Fake Store | Fashion, Elektronik & Perhiasan",
    description:
      "Belanja online pakaian, elektronik, dan perhiasan dengan harga terbaik hanya di Fake Store.",
    url: "https://fake-store-beta-taupe.vercel.app",
    siteName: "Fake Store",
    images: [
      {
        url: "https://fake-store-beta-taupe.vercel.app/assets/images/popular-product/bag-fakestore-og.png",
        width: 1200,
        height: 630,
        alt: "Fake Store - Produk Unggulan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fake Store | Fashion, Elektronik & Perhiasan",
    description:
      "Temukan fashion, elektronik, dan perhiasan berkualitas dengan harga terjangkau di Fake Store.",
    images: ["https://fake-store-beta-taupe.vercel.app/assets/images/popular-product/bag-fakestore-og.png"],
    creator: "@fakestore",
  },
  metadataBase: new URL("https://fake-store-beta-taupe.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
