"use client"

import Link from "next/link"
import { Cart } from "@/app/(home)/_components/cart"
import { Button } from "@heroui/react"

export const Navbar = () => {
    
    return (
        <>
            <nav className="hidden md:block">
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href={"/products"} className="text-sm font-semibold text-gray-500">Produk</Link>
                    </li>
                    <li>
                        <Link href={"#category"} className="text-sm font-semibold text-gray-500">Kategori</Link>
                    </li>
                    <li>
                        <Link href={"#about"} className="text-sm font-semibold text-gray-500">Tentang</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-3">
                <Cart />
                <Button variant="shadow" as={Link} href="/products" className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-xl text-white shadow-xl shadow-purple-100">Belanja Sekarang</Button>
            </div>
        </>
    )
}