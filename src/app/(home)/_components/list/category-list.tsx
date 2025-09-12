import { fetchCategories } from "@/libs/services/categories.service"
import { cache } from "react"
import { ErrorPage } from "../error-page"
import { BsArrowRight } from "react-icons/bs"

export const CategoryList = async () => {
    const categories = await getCategories()
    
    if(categories.error) return <ErrorPage error={categories.error}></ErrorPage>
    
    return (
        <>
            {categories?.map((category: string) => (
                <a key={category} href="" className="flex items-center justify-center gap-2 border border-black/20 px-4 py-1.5 capitalize rounded-full hover:bg-purple-100 transition-all duration-300 ease-in-out group">{category} <BsArrowRight className="mt-1 group-hover:translate-x-1 transition-all duration-300 ease-in-out" /></a>
            ))}
        </>
    )
}

export const getCategories = cache(async () => fetchCategories())