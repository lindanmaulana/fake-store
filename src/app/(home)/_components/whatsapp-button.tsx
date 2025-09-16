"use client"

import { Button } from "@heroui/react"
import Link from "next/link"
import { PiWhatsappLogoFill } from "react-icons/pi"

export const WhatsAppButton = () => {
    return (
        <Button as={Link} href="https://wa.me/6285322701120" className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-3 text-white shadow-lg text-sm shadow-purple-300"> <PiWhatsappLogoFill className="mt-px text-xl" /> <span className="font-semibold">Chat WhatsApp</span> </Button>
    )
}