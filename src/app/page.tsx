import { fetchCategories } from "@/libs/services/categories.service";
import { fetchProducts } from "@/libs/services/products.service";
import { Metadata } from "next";
import { cache } from "react";
import { ErrorPage } from "./(home)/_components/error-page";
import { CallToAction } from "./(home)/_components/sections/call-to-action";
import { CategoryPopular } from "./(home)/_components/sections/category-popular";
import { FeaturedProduct } from "./(home)/_components/sections/feature-product";
import { HeroSection } from "./(home)/_components/sections/hero-section";
import { WhyUs } from "./(home)/_components/sections/why-use";

export const metadata: Metadata = {
  title: "Fake Store | Belanja Fashion, Elektronik, & Aksesori Terlengkap Online",
  description: "Temukan koleksi lengkap pakaian pria, pakaian wanita, perhiasan, hingga elektronik terbaru di Web Store. Belanja mudah, harga terjangkau, dan produk berkualitas dari Fake Store API.",
  keywords: ["web store", "online shop", "fashion pria", "fashion wanita", "elektronik", "perhiasan", "belanja online"],
  openGraph: {
    title: "Fake Store | Fashion, Elektronik, & Perhiasan",
    description: "Belanja online pakaian, elektronik, dan aksesori dengan harga terbaik.",
    images: "https://fake-store-beta-taupe.vercel.app/assets/images/popular-product/bag-fakestore-og.png",
    url: "http://localhost:3000"
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Store | Fashion, Elektronik, & Perhiasan",
    description: "Toko online serbaguna. Belanja pakaian, elektronik, dan perhiasan dengan harga terjangkau.",
    images: "https://fake-store-beta-taupe.vercel.app/assets/images/popular-product/bag-fakestore-og.png",
  }
}

export default async function Home() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()])

  if(products.error || categories.error) return <ErrorPage error={products.error}></ErrorPage>

  return (
    <>
      <HeroSection />
      <CategoryPopular categories={categories} />
      <FeaturedProduct products={products} />
      <WhyUs products={products} categories={categories} />
      <CallToAction />
    </>
  );
}

export const getProducts = cache(async () => fetchProducts())
export const getCategories = cache(async () => fetchCategories())