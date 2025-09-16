"use client"

import { Button, Card, CardBody } from "@heroui/react"
import Link from "next/link"

export const CallToActionCard = () => {
    return (
        <Card className="p-5 bg-gradient-to-r from-purple-300 via-white to-purple-300">
            <CardBody>
                <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black">Siap mulai belanja atau konsultasi?</h2>
                        <p className="text-sm md:text-base text-gray-500">Jelajahi semua produk, atau chat WhatsApp untuk tanya fitur dan kustomisasi.</p>
                    </div>
                    <div className="w-full md:w-1/3 flex items-center gap-3 justify-start md:justify-end">
                        <Button as={Link} href="/products" variant="bordered" className="border bg-white text-black font-semibold">Lihat Semua Produk</Button>
                        <Button as={Link} href="https://wa.me/6285322701120" className="bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-xl text-white shadow-lg hover:shadow-purple-500 font-semibold">Chat WhatsApp</Button>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}