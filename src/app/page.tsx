import { Metadata } from "next";
import { cache } from "react";
import { ErrorPage } from "./(home)/_components/error-page";
import { CategoryPopularSection } from "./(home)/_components/sections/category-popular-section";
import { FeaturedProductSection } from "./(home)/_components/sections/feature-product-section";
import { HeroSection } from "./(home)/_components/sections/hero-section";
import { WhyUsSection } from "./(home)/_components/sections/why-use-section";
import { fetchProducts } from "@/libs/services/products.service";
import { fetchCategories } from "@/libs/services/categories.service";
import { CallToActionSection } from "./(home)/_components/sections/call-to-action-section";

export const metadata: Metadata = {
  title: "Fake Store | Belanja Fashion, Elektronik, & Aksesori Terlengkap Online",
  description: "Temukan koleksi lengkap pakaian pria, pakaian wanita, perhiasan, hingga elektronik terbaru di Web Store. Belanja mudah, harga terjangkau, dan produk berkualitas dari Fake Store API.",
  keywords: ["web store", "online shop", "fashion pria", "fashion wanita", "elektronik", "perhiasan", "belanja online"],
  openGraph: {
    title: "Fake Store | Fashion, Elektronik, & Perhiasan",
    description: "Belanja online pakaian, elektronik, dan aksesori dengan harga terbaik.",
    images: "http://localhost:3000/assets/images/popular-product/bag-linm-store-og.png",
    url: "http://localhost:3000"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Store | Fashion, Elektronik, & Perhiasan",
    description: "Toko online serbaguna. Belanja pakaian, elektronik, dan perhiasan dengan harga terjangkau.",
    images: "http://localhost:3000/assets/images/popular-product/bag-linm-store-og.png",
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])

  if(products.error || categories.error) return <ErrorPage error={products.error}></ErrorPage>

  return (
    <>
      <HeroSection />
      <CategoryPopularSection categories={categories} />
      <FeaturedProductSection products={products} />
      <WhyUsSection products={products} categories={categories} />
      <CallToActionSection />
    </>
  );
}

export const getProducts = cache(async () => fetchProducts())
export const getCategories = cache(async () => fetchCategories())