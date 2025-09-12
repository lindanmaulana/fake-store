"use client"

import { Select, SelectItem } from "@heroui/react"

interface FilterCategoryToolbarProps {
    categories: string[]
}

export const FilterCategoryToolbar = ({categories}: FilterCategoryToolbarProps) => {

    return (
        <Select label="Semua Kategori">
            {categories.map(category => (
                <SelectItem key={category}>{category}</SelectItem>
            ))}
        </Select>
    )
}