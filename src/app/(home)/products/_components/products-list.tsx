"use client"

import { products } from "@/app/(home)/_types/products.types"
import { useMemo } from "react"
import { ProductCard } from "../../_components/card/product-card"

interface ProductsListProps {
    products: products[]
}

export const ProductsList = ({products}: ProductsListProps) => {

    const dataProducts = useMemo(() => {
        return products
    }, [products])

    return (
        <>
            {dataProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}  
        </>
    )
}