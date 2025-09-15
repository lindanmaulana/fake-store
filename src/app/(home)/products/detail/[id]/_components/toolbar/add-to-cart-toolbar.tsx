"use client"

import { useCartStore } from "@/app/(home)/_hooks/useCartStore"
import { products } from "@/app/(home)/_types/products.types"
import { Button } from "@heroui/react"
import { BiCartAdd } from "react-icons/bi"

interface WhatsAppToolbarProps {
    product: products
}

export const AddToCartToolbar = ({product}: WhatsAppToolbarProps) => {
    const {handleAddToCart} = useCartStore()
    return (
        <Button onPress={() => handleAddToCart(product)} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2.5 text-white shadow-lg text-sm shadow-purple-300"> <BiCartAdd className="mt-px text-xl" /> <span className="font-semibold">Keranjang</span> </Button>
    )
}