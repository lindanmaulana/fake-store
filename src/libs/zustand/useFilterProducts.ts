import { create } from "zustand"

type State = {
    keyword: string
    category: string
}

type Action = {
    setFilter: (data: Partial<State>) => void
    resetFilter: () => void
}

type FilterProductsConfig = State & Action

export const useFilterProducts = create<FilterProductsConfig>((set) => ({
    keyword: "",
    category: "",
    setFilter: (data: Partial<State>) => set((state) => ({...state, ...data})),
    resetFilter: () => set({
        keyword: "",
        category: ""
    })
}))