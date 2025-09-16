"use client"

import { Card, CardBody } from "@heroui/react"

interface coreValue {
    id: number
    title: string
    description: string
}

const coreValues: coreValue[] = [
    {
        id: 1,
        title: "Cepat",
        description: "Proses belanja online lebih mudah & praktis"
    },
    {
        id: 2,
        title: "Modular",
        description: "Pilihan produk beragam untuk setiap kebutuhan"
    },
    {
        id: 3,
        title: "Data Nyata",
        description: "Koleksi fashion, elektronik, & perhiasan asli"
    },
    {
        id: 4,
        title: "Siap Selalu",
        description: "Belanja fleksibel, bisa di akses kapan saja"
    }
]

export const MissionList = () => {
    return (
        <>
            {coreValues.map(value => (
                <Card key={value.id}>
                    <CardBody className="h-36">
                        <div className="w-full h-full flex flex-col items-center justify-center text-center text-black">
                            <h3 className="text-2xl font-extrabold">{value.title}</h3>
                            <p className="text-sm text-gray-500">{value.description}</p>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}