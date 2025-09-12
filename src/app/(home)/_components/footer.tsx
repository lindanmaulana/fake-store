import Link from "next/link"

export const Footer = () => {
    return (
        <footer>
            <div className="border-y border-black/10 py-10">
                <div className="container max-w-6xl mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-y-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="block size-6 bg-gradient-to-br from-blue-700 to-purple-500 rounded-lg"></div>
                            <h2 className="text-xl font-bold">Fake Store</h2>
                        </div>
                        <p className="text-base text-gray-500">Jelajahi produk berdasarkan kategori</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Navigasi</h3>
                        <ul className="text-sm text-gray-500">
                            <li>
                                <Link href={"/"}>Produk</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Kategori</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Tentang</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Navigasi</h3>
                        <p className="text-sm text-gray-500">Data oleh <a href="" className="border-b-1 border-purple-500">Fake Store API.</a></p>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-4">
                <p className="text-sm text-gray-400">© 2025 Fakestore+ Landing. All rights reserved.</p>
            </div>
        </footer>
    )
}