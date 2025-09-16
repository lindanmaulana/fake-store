import Link from "next/link"

export const CallToAction = () => {
    return (
        <section className="py-14 border-y border-black/10">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-5 gap-y-4">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-extrabold">Siap belanja lebih mudah?</h2>
                        <p className="max-w-2/3 text-gray-500 text-base">Temukan koleksi fashion, elektronik, dan perhiasan terbaik dengan harga terjangkau hanya di Fake Store.</p>
                    </div>
                    <div className="flex items-center gap-3 py-4">
                        <Link href={`/products`} className="text-sm bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-lg text-white shadow-xl hover:opacity-80">Lihat Produk</Link>
                        <Link href={"/"} className="text-sm px-4 py-2 rounded-lg shadow-xl shadow-purple-100 hover:opacity-80 border border-black/20 font-medium" >Kembali ke Beranda</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}