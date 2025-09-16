"use client"

import { products } from "@/app/(home)/_types/products.types"
import { Card, CardBody } from "@heroui/react"
import { useMemo } from "react"
import { FaStar } from "react-icons/fa"

interface FactStatsProps {
    products: products[]
    categories: string[]
}

export const FactStats = ({products, categories}: FactStatsProps) => {

    const {totalProducts, totalCategories, avgRating, minPrice} = useMemo(() => {
        const totalProducts = products.length
        const totalCategories = categories.length
        const avgRating = products.reduce((acc, call) => acc + (call.rating?.rate ?? 0), 0) / totalProducts
        const minPrice = Math.min(...products.map(product => product.price))

        return {totalProducts, totalCategories, avgRating, minPrice}
    }, [categories, products])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
                <CardBody className="h-30 flex flex-col items-center justify-center">
                    <strong className="text-black font-extrabold text-3xl">{totalProducts}</strong>
                    <h3 className="text-gray-500 text-sm">Total Produk</h3>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="h-30 flex flex-col items-center justify-center">
                    <strong className="text-black font-extrabold text-3xl">{totalCategories}</strong>
                    <h3 className="text-gray-500 text-sm">Kategori</h3>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="h-30 flex flex-col items-center justify-center">
                    <strong className="text-black font-extrabold text-3xl flex items-center gap-1"><span>{avgRating.toFixed(1)}</span> <FaStar className="text-yellow-500" /></strong>
                    <h3 className="text-gray-500 text-sm">Rata-rata Rating</h3>
                </CardBody>
            </Card>
            <Card>
                <CardBody className="h-30 flex flex-col items-center justify-center">
                    <strong className="text-black font-extrabold text-3xl">US${minPrice}</strong>
                    <h3 className="text-gray-500 text-sm">Harga Mulai</h3>
                </CardBody>
            </Card>
        </div>
    )
}