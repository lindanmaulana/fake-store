import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, useCallback } from "react"
import { useDebouncedCallback } from "use-debounce"

export const useFilterProducts = () => {
    const currentParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()

    const debounceSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(currentParams)

        if(value) params.set("keyword", value)

        if(!value) params.delete("keyword")
        
        router.push(`${pathname}?${params.toString()}`)
    }, 1000) 

    const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        debounceSearch(value)
    }, [debounceSearch])

    const handleFilterCategory = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(currentParams)
        const value = e.target.value

        if(value) params.set("category", value)

        if(!value) params.delete("category")

        router.push(`${pathname}?${params.toString()}`)
    }, [currentParams, pathname, router])


    return {handleSearch, handleFilterCategory}
}