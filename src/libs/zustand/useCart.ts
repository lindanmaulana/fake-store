import { products } from "@/app/(home)/_types/products.types"
import { create } from "zustand"

interface productCart extends products {
    qty: number
}

type State = {
    cart: productCart[] | []
    subTotal: number
}

type Action = {
    addToCart: (product: products) => void
    removeToCart: (id: number) => void
    resetCart: () => void

    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void

    calculateSubTotal: () => void
}

type CartActionState = State & Action

export const useCart = create<CartActionState>((set, get) => ({
    cart: [],
    subTotal: 0,
    addToCart: (data: products) => {
        set((state) => {
            const productExist = state.cart.find(product => product.id === data.id)

            if(productExist) {
                return {
                    cart: state.cart.map(item => 
                        item.id === data.id ? {...item, qty: item.qty + 1} : item
                    )
                }
            } else {
                return {
                    cart: [...state.cart, {...data, qty: 1}]
                }
            }
        })

        get().calculateSubTotal()
    },

    removeToCart: (id: number) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== id)
        }))
        
        get().calculateSubTotal()
    },

    resetCart: () => {
        set({cart: []})

        get().calculateSubTotal()
    },

    increaseQty: (id: number) => {
        set((state) => {
            return {
                cart: state.cart.map(item => 
                    item.id === id ? {...item, qty: item.qty + 1} : item
                ).filter(item => item.qty > 0)
            }
        })

        get().calculateSubTotal()
    },

    decreaseQty: (id: number) => {
        set((state) => {
            return {
                cart: state.cart.map(item =>
                    item.id === id ? {...item, qty: item.qty - 1 } : item
                )
            }
        })

        get().calculateSubTotal()
    },

    calculateSubTotal: () => set((state) => ({
        subTotal: state.cart.reduce((acc, call) => acc + (call.price * call.qty) ,0)
    }))
}))