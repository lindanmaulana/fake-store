"use client"

import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import { Navbar } from "./navbar"
import { WhatsAppButton } from "./whatsapp-button"

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
         <header className="w-full sticky top-0 border-b border-black/10 bg-white z-50">
            <div className="w-full container max-w-6xl px-8 lg:px-0 mx-auto py-4">
                <div className="w-full flex items-center justify-between">
                    <Link href={"/"} className="flex items-center gap-2">
                        <div className="block size-7 bg-gradient-to-br from-blue-700 to-purple-500 rounded-lg"></div>
                        <h2 className="text-xl font-bold">Fake Store</h2>
                    </Link>

                    <Navbar />
                
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden border border-black/10 rounded p-1"> {isOpen ? <IoClose className="text-xl" /> : <GiHamburgerMenu className="text-xl" />} </button>
                </div>
            </div>
            
            {isOpen && (
                <nav className="w-full px-10 py-5 border-b border-black/10">
                        <ul className="space-y-5">
                        <li>
                            <Link href={"/products"} className="text-sm font-semibold ">Produk</Link>
                        </li>
                        <li>
                            <Link href={"#category"} className="text-sm font-semibold ">Kategori</Link>
                        </li>
                        <li>
                            <Link href={"#about"} className="text-sm font-semibold ">Tentang</Link>
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