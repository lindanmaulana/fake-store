"use client"

import { GiHamburgerMenu } from "react-icons/gi"
import { Navbar } from "./navbar"
import { useState } from "react"
import { WhatsAppButton } from "./whatsapp-button"

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
         <header className="w-full sticky top-0 border-b border-black/10 bg-white z-50">
            <div className="w-full container max-w-6xl px-8 lg:px-0 mx-auto py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="block size-7 bg-gradient-to-br from-blue-700 to-purple-500 rounded-lg"></div>
                    <h2 className="text-xl font-bold">Fake Store</h2>
                </div>
                <Navbar />

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden border border-black/10 rounded p-1"><GiHamburgerMenu className="text-xl" /></button>
            </div>
            
            {isOpen && (
                <nav className="w-full px-10 py-5 border-b border-black/10">
                        <ul className="space-y-5">
                        <li>
                            <button className="text-sm font-semibold ">Produk</button>
                        </li>
                        <li>
                            <button className="text-sm font-semibold ">Kategori</button>
                        </li>
                        <li>
                            <button className="text-sm font-semibold ">Tentang</button>
                        </li>
                        <li>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-xl text-white shadow-xl shadow-purple-100">Belanja Sekarang</button>
                        </li>
                    </ul>
                </nav>
            )}

            <WhatsAppButton />
        </header>
    )
}