"use client"

import { Button } from "@heroui/react"
import Link from "next/link"

export const BackToolbar = () => {
    return (
         <Button as={Link} href="/products" variant="bordered" className="border bg-white text-black font-semibold">Lihat Semua Produk</Button>
    )
}