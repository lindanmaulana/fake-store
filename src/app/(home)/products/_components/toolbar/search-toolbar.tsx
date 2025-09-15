"use client"

import { Input } from "@heroui/react"
import { useSearchParams } from "next/navigation"
import { useFilterProducts } from "../../_hooks/useFilterProducts"

export const SearchToolbar = () => {
    const {handleSearch} = useFilterProducts()
    const currentParams = useSearchParams()

    return (
        <Input onChange={handleSearch} label="Cari produk..." type="text" className="w-full" defaultValue={currentParams.get("keyword")?.toString() ?? ""} />
    )
}