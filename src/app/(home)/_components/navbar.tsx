"use client"

export const Navbar = () => {
    
    return (
        <>
            <nav className="hidden md:block">
                <ul className="flex items-center gap-4">
                    <li>
                        <button className="text-sm font-semibold text-gray-500">Produk</button>
                    </li>
                    <li>
                        <button className="text-sm font-semibold text-gray-500">Kategori</button>
                    </li>
                    <li>
                        <button className="text-sm font-semibold text-gray-500">Tentang</button>
                    </li>
                </ul>
            </nav>

            <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-xl text-white shadow-xl shadow-purple-100">Belanja Sekarang</button>
        </>
    )
}