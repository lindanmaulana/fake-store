"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface navbarList {
    id: number
    title: string
    link: string
}

const navbarList: navbarList[] = [
    {
        id: 1,
        title: "Products",
        link: "/products"
    },

    {
        id: 2,
        title: "About",
        link: "/about"
    }

]

export const NavbarList = () => {
    const pathname = usePathname()

    return (
        <>
        {navbarList.map(list => (
            <li key={list.id}>
                <Link href={list.link} className={`${list.link === pathname ? "text-black" : "text-gray-500"} text-sm font-semibold `}>{list.title}</Link>
            </li>
        ))}
        </>
    )
}