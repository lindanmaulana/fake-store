"use client"

import { Cart } from "@/app/(home)/_components/cart"
import { Button } from "@heroui/react"
import Link from "next/link"

export const NavAction = () => {
    
    return (
        <div className="flex items-center gap-3">
            <Cart />
            <Button variant="shadow" as={Link} href="/products" className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-xl text-white shadow-lg">Belanja Sekarang</Button>
        </div>
    )
}