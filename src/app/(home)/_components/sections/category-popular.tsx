import { fetchCategories } from "@/libs/services/categories.service"
import { cache } from "react"
import { BsArrowRight } from "react-icons/bs"
import { ErrorPage } from "../error-page"

export const CategoryPopularSection = async () => {
    const categories = await getCategories()

    if(categories.error) return <ErrorPage error={categories.error}></ErrorPage>

    return (
        <section className="py-10">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0">
                <h2 className="text-2xl font-bold">Kategori Popular</h2>
                <p className="text-base text-gray-500">Jelajahi produk berdasarkan kategori</p>

                <div className="py-5 flex items-center flex-wrap md:flex-nowrap gap-2">
                    {categories?.map((category: string) => (
                        <a key={category} href="" className="flex items-center justify-center gap-2 border border-black/20 px-4 py-1.5 capitalize rounded-full hover:bg-purple-100 transition-all duration-300 ease-in-out group">{category} <BsArrowRight className="mt-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out" /></a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export const getCategories = cache(async () => fetchCategories())

{/* <section className="py-10">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0">
                <h2>Produk Unggulan</h2>
                <p>Pilihan terbaik dari fashion, perhiasan, hingga elektronik untuk melengkapi gaya hidup Anda.</p>
            </div>
        </section> */}