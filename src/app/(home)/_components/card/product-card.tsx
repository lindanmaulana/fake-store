"use client"
import { Button, Card, CardBody } from "@heroui/react"
import Link from "next/link"
import { products } from "../../_types/products.types"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { BsPlus } from "react-icons/bs"
import { useCart } from "@/libs/zustand/useCart"

interface ProductCardProps {
    product: products
}

export const ProductCard = ({product}: ProductCardProps) => {
    const handleAddToCart = useCart((state) => state.addToCart)

    return (
        <Card key={product.id} className="border border-gray-200 rounded-2xl shadow-md overflow-hidden group">
            <CardBody className="p-0">
                <div className="relative h-3/5 bg-gray-100 aspect-square overflow-hidden">
                    <strong className="absolute top-2 left-2 border border-black/10 shadow-sm rounded-full bg-white/50 px-2 py-1 font-semibold flex items-center gap-px text-xs text-black"><span className="flex items-center gap-1"><FaStar className="text-xs text-yellow-500" />{product.rating.rate}</span>.<span>{product.rating.count}</span></strong>
                    <Image src={product.image} alt="Tas Popular" width={100} height={80} className="w-full h-full object-contain group-hover:scale-110 transition-all duration-300 ease-in-out" loading="lazy" unoptimized />
                </div>

                <div className="p-4 w-full h-2/5 flex flex-col justify-between">
                    <div className="space-y-3">
                        <strong className="uppercase text-gray-500 font-normal text-xs">{product.category}</strong>
                        <h3 className="font-semibold text-black line-clamp-2">{product.title}</h3>
                        <div className="text-black font-bold">US${product.price}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <Button onPress={() => handleAddToCart(product)} size="sm" className="font-medium text-sm flex items-center" ><BsPlus className="mt-px" />Keranjang</Button>
                        <Link href={`/products/detail/${product.id}`} className="bg-gradient-to-r from-blue-600 to-purple-500 px-3 py-1 rounded-lg text-white shadow-xl shadow-purple-100 hover:opacity-80">Lihat</Link>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}