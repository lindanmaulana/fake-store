"use client"

import { Button, ButtonGroup, Card, CardBody } from "@heroui/react"
import Image from "next/image"
import { FaPlus } from "react-icons/fa"
import { FaMinus } from "react-icons/fa6"
import { useCartStore } from "../../_hooks/useCartStore"

export const CartList = () => {
    const {cart, handleRemoveToCart, handleIncreaseQty, handleDecreaseQty} = useCartStore()

    return (
        <>
            {cart.map(item => (
                <Card key={item.id}>
                    <CardBody>
                        <div className="flex items-center gap-4">
                            <div className="aspect-square">
                                <Image src={item.image} alt={item.title} width={50} height={50} className="w-full h-full object-contain" />
                            </div>

                            <div className="flex-1 w-full">
                                <h4 className="text-black font-semibold text-sm line-clamp-1 hover:line-clamp-none">{item.title}</h4>
                                <div className="text-gray-500 text-xs">US${item.price}</div>

                                <div className="w-full flex items-center justify-between py-2">
                                    <ButtonGroup className="">
                                        <Button onPress={() => handleDecreaseQty(item.id)} size="sm" variant="bordered" isIconOnly isDisabled={item.qty === 1} className="size-7 border border-black/10 text-black"> <FaMinus /> </Button>

                                        <Button size="sm" variant="bordered" isIconOnly className="size-7 border border-black/10 cursor-not-allowed">
                                            <div className="font-bold text-black">{item.qty}</div>
                                        </Button>

                                        <Button onPress={() => handleIncreaseQty(item.id)} size="sm" variant="bordered" isIconOnly className="size-7 border border-black/10 text-black"> <FaPlus /> </Button>
                                    </ButtonGroup>

                                    <Button onPress={() => handleRemoveToCart(item.id)} size="sm" variant="light" className="text-red-500">Hapus</Button>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            ))}
        
        </>
        
    )
}