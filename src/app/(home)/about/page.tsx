import { Metadata } from "next"
import { CallToAction } from "./_components/sections/call-to-action"
import { HeroSection } from "./_components/sections/hero-section"
import { WhyChooseUs } from "./_components/sections/why-choose-us"

export const metadata: Metadata = {
  title: "Tentang Kami | Fake Store - Koleksi Fashion & Elektronik Terpercaya",
  description:
    "Kenali lebih dekat Fake Store, toko online terpercaya yang menyediakan beragam produk fashion, perhiasan, dan elektronik berkualitas. Belanja dengan mudah, aman, dan dapatkan harga terbaik.",
  keywords: [
    "tentang fake store",
    "about us",
    "profil toko",
    "toko online terpercaya",
    "fashion",
    "elektronik",
    "perhiasan"
  ],
  openGraph: {
    title: "Tentang Kami | Fake Store",
    description:
      "Fake Store adalah toko online serbaguna yang menyediakan fashion, elektronik, dan perhiasan berkualitas untuk memenuhi gaya hidup modern.",
    images: "https://fake-store-beta-taupe.vercel.app/assets/images/og/about-fakestore-og.jpg",
    url: "https://fake-store-beta-taupe.vercel.app/about"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Fake Store - Fashion, Elektronik, & Perhiasan",
    description:
      "Kenali lebih dekat Fake Store. Toko online yang menyediakan produk fashion, elektronik, dan perhiasan dengan harga terbaik.",
    images: "https://fake-store-beta-taupe.vercel.app/assets/images/og/about-fakestore-og.jpg"
  }
}


const AboutPage = () => {
    return (
        <>
            <HeroSection />
            <WhyChooseUs />
            <CallToAction />
        </>
    )
}


export default AboutPage