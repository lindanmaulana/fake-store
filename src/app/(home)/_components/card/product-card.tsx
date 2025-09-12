"use client"
import { Card, CardBody } from "@heroui/react"
import Link from "next/link"
import { products } from "../../_types/products.types"
import Image from "next/image"
import { FaStar } from "react-icons/fa"

interface ProductCardProps {
    product: products
}

export const ProductCard = ({product}: ProductCardProps) => {
    return (
        <Card key={product.id} className="border border-gray-200 rounded-2xl shadow-md overflow-hidden group">
            <CardBody className="p-0">
                <div className="relative bg-gray-100 aspect-square overflow-hidden">
                    <strong className="absolute top-2 left-2 border border-black/10 shadow-sm rounded-full bg-white/50 px-2 py-1 font-semibold flex items-center gap-px text-xs text-black"><span className="flex items-center gap-1"><FaStar className="text-xs text-yellow-500" />{product.rating.rate}</span>.<span>{product.rating.count}</span></strong>
                    <Image src={product.image} alt="Tas Popular" width={100} height={80} className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 ease-in-out" loading="lazy" unoptimized />
                </div>
                <div className="p-4 w-full">
                    <strong className="uppercase text-gray-500 font-normal text-xs">men{"'"}s clothing</strong>
                    <h3 className="font-semibold text-black line-clamp-2">{product.title}</h3>

                    <div className="flex items-center justify-between mt-4">
                        <p className="text-black">US$109,95</p>
                        <Link href={`/products/detail/${product.id}`} className="bg-gradient-to-r from-blue-600 to-purple-500 px-3 py-1 rounded-lg text-white shadow-xl shadow-purple-100 hover:opacity-80">Lihat</Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}