"use client"

import { Select, SelectItem } from "@heroui/react"
import { useFilterProducts } from "../../_hooks/useFilterProducts"
import { useSearchParams } from "next/navigation"

interface FilterCategoryToolbarProps {
    categories: string[]
}

export const FilterCategoryToolbar = ({categories}: FilterCategoryToolbarProps) => {
    const currentParams = useSearchParams()
    const {handleFilterCategory} = useFilterProducts()

    return (
        <Select label="Semua Kategori" onChange={handleFilterCategory} isClearable defaultSelectedKeys={[currentParams.get("category")?.toString() ?? ""]}>
            {categories.map(category => (
                <SelectItem key={category}>{category}</SelectItem>
            ))}
        </Select>
    )
}