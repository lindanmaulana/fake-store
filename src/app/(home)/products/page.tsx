import { fetchProducts } from "@/libs/services/products.service"
import { cache } from "react"
import { ErrorPage } from "../_components/error-page"
import { ProductsList } from "./_components/products-list"
import { SearchToolbar } from "./_components/toolbar/search-toolbar"
import { FilterCategoryToolbar } from "./_components/toolbar/filter-category-toolbar"
import { fetchCategories } from "@/libs/services/categories.service"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products | Fake Store - Fashion, Elektronik, & Aksesori",
  description:
    "Jelajahi semua produk unggulan dari Fake Store. Koleksi lengkap pakaian pria, pakaian wanita, perhiasan, hingga elektronik dengan harga terbaik.",
  keywords: [
    "produk fake store",
    "daftar produk",
    "fashion pria",
    "fashion wanita",
    "elektronik",
    "perhiasan",
    "belanja online"
  ],
  openGraph: {
    title: "Daftar Produk | Fake Store",
    description:
      "Temukan berbagai pilihan produk terbaik. Fashion, elektronik, dan perhiasan dari Fake Store.",
    images: "https://fake-store-beta-taupe.vercel.app/assets/images/og/products-fakestore-og.jpg",
    url: "https://fake-store-beta-taupe.vercel.app/products"
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Fake Store - Fashion, Elektronik, & Perhiasan",
    description:
      "Belanja semua produk unggulan di Fake Store. Fashion, elektronik, dan perhiasan dengan harga terjangkau.",
    images: "https://fake-store-beta-taupe.vercel.app/assets/images/og/products-fakestore-og.jpg"
  }
}


const ProductsPage = async () => {
    const [products, categories] = await Promise.all([getProducts(), getCategories()])

    if(products.error || categories.error) return <ErrorPage error={`${products.error} - ${categories.error}`}></ErrorPage>

    return (
        <section className="py-14">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Semua Produk</h2>
                        <p className="text-base text-gray-500 line-clamp-2"> Data dari Fake Store API </p>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center gap-2">
                        <SearchToolbar></SearchToolbar>
                        <FilterCategoryToolbar categories={categories} ></FilterCategoryToolbar>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <ProductsList products={products} />
                </div>
            </div>
        </section>
    )
}

export default ProductsPage

export const getProducts = cache(async () => fetchProducts())
export const getCategories = cache(async () => fetchCategories())