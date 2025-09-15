"use client"

import { products } from "@/app/(home)/_types/products.types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ProductCard } from "../../_components/card/product-card"

interface ProductsListProps {
    products: products[]
}

export const ProductsList = ({products}: ProductsListProps) => {
    const [dataProducts, setDataProducts] = useState<products[]>(products)
    const currentParams = useSearchParams()

    useEffect(() => {
        const keyword = currentParams.get("keyword")?.toString() ?? ""
        const category = currentParams.get("category")?.toString() ?? ""

        if(keyword && category) {
            const filterProducts = products.filter(product => product.category.toLowerCase().includes(category.toLowerCase())).filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))

            setDataProducts(filterProducts)
        }
        
        if(category && !keyword) {
            const filterProducts = products.filter(product => product.category.toLowerCase().includes(category.toLowerCase()))

            setDataProducts(filterProducts)
        }

        if(keyword && !category) {
            const filterProducts  = products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))

            setDataProducts(filterProducts)
        }

        if(!keyword && !category) setDataProducts(products)

    }, [currentParams, products])

    return (
        <>
            {dataProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}  
        </>
    )
}