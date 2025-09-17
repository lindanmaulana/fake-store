"use client"

import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, ScrollShadow, useDisclosure } from "@heroui/react"
import { LuShoppingCart } from "react-icons/lu"
import { useCartStore } from "../../_hooks/useCartStore"
import { CartList } from "./cart-list"
import { PreviewChatWhatsApp } from "./preview-chat-whatsapp"
import { useGenerateWhatsappLink } from "../../_hooks/useGeneratedWhatsappLink"
import Link from "next/link"

export const Cart = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure()

    const {cart, subTotal, handleResetCart} = useCartStore()
    const whatsappLink = useGenerateWhatsappLink(6287723855067)

    return (
        <>
            <div className="relative">
                <Button onPress={onOpen} variant="shadow" className="border-1 border-black/10 bg-transparent font-semibold"> 
                    <LuShoppingCart /><span>keranjang</span>
                </Button>

                {cart.length !== 0 && <span className="absolute -top-2 -right-2 size-5 text-xs flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-500 rounded-full text-white shadow-xl shadow-purple-100 ">{cart.length}</span>} 
            </div>

            <Drawer backdrop="opaque" isOpen={isOpen} onOpenChange={onOpenChange} radius="sm">
                <DrawerContent>
                    {() => (
                    <>
                        <DrawerHeader>Cart</DrawerHeader>
                        <DrawerBody>
                            <ScrollShadow className="max-h-1/2 space-y-2 p-1" size={50}>
                                <CartList />
                            </ScrollShadow>

                            <div className="h-1/2 space-y-2">
                                <h3 className="font-medium">Ringkasan</h3>
                                <div className="flex items-center justify-between text-sm">
                                    <div>Total Item</div>
                                    <div>{cart.length}</div>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div>Sub Total</div>
                                    <div className="font-semibold">US${subTotal}</div>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-xs text-gray-500">Preview pesan WhatsApp</h4>
                                    <ScrollShadow className="p-1 h-40" size={50}>
                                        <PreviewChatWhatsApp />
                                    </ScrollShadow>
                                </div>
                            </div>
                        </DrawerBody>
                        <DrawerFooter>
                            <div className="w-full flex items-center gap-2">
                                <Button onPress={handleResetCart} variant="shadow" className="w-full border-1 border-black/10 bg-transparent">Bersihkan</Button>
                                <Button as={Link} href={whatsappLink} variant="shadow" isDisabled={cart.length === 0} className="w-full bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-xl text-white shadow-xl shadow-purple-100">Checkout Via WhatsApp</Button>
                            </div>
                        </DrawerFooter>
                    </>
                )}
                </DrawerContent>
            </Drawer>
        </>
    )
}