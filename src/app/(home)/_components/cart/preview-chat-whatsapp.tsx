"use client"

import { Card, CardBody, ScrollShadow } from "@heroui/react"
import { useCartStore } from "../../_hooks/useCartStore"

export const PreviewChatWhatsApp = () => {
    const {cart, subTotal} = useCartStore()
    return (
        <Card>
            <CardBody className="p-2">
                <div className="text-xs text-black space-y-1">
                    <h5 className="">Hallo, saya ingin memesan:</h5>
                    <ul>
                        {cart.map((item, index: number) => {
                            const totalPrice = item.price * item.qty
                            return (
                            <li key={item.id} className="w-full flex items-center gap-1">
                                <h6 className="">{index + 1}. {item.title}</h6>
                                <span className="">(x{item.qty})</span> - 
                                <span>US${totalPrice}</span>
                            </li>
                        )})}
                    </ul>

                    <div className="flex items-center gap-1">
                        <h6>Total = </h6>
                        <div>US${subTotal}</div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}