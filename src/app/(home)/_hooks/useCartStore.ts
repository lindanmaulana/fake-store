"use client"

import { useCart } from "@/libs/zustand/useCart"

export const useCartStore = () => {
    const cart = useCart((state) => state.cart)
    const subTotal = useCart((state) => state.subTotal).toFixed(2)

    const handleAddToCart = useCart((state) => state.addToCart)
    const handleRemoveToCart = useCart((state) => state.removeToCart)

    const handleIncreaseQty = useCart((state) => state.increaseQty)
    const handleDecreaseQty = useCart((state) => state.decreaseQty)

    const handleResetCart = useCart((state) => state.resetCart)

    return {cart, subTotal, handleAddToCart, handleRemoveToCart, handleIncreaseQty, handleDecreaseQty, handleResetCart}
}