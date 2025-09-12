"use client"

import { PiWhatsappLogoFill } from "react-icons/pi"

export const WhatsAppToolbar = () => {
    return (
        <a href="" className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2.5 text-white shadow-lg text-sm shadow-purple-300"> <PiWhatsappLogoFill className="mt-px text-xl" /> <span className="font-semibold">Pesan via WhatsApp</span> </a>
    )
}