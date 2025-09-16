import Link from "next/link"

export const HeroSection = () => {
    return (
        <section className="py-14">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0 space-y-4">
                <strong className="inline-block text-gray-500 text-xs border border-gray-300 rounded-full px-3 py-1 font-medium">Tentang Kami</strong>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Lebih Dekat dengan Fake Store</h2>
                <p className="md:max-w-[56%] text-gray-500 text-base lg:text-lg">Fake Store adalah toko online terpercaya untuk fashion, elektronik, dan perhiasan. Kami menawarkan produk berkualitas dengan harga terjangkau, serta pengalaman belanja yang mudah dan aman.</p>

                <div className="flex items-center gap-3 py-4">
                    <Link href={`/products`} className="text-sm bg-gradient-to-r from-blue-600 to-purple-500 px-4 py-2 rounded-lg text-white shadow-xl hover:opacity-80">Lihat Produk</Link>
                    <Link href={"/"} className="text-sm px-4 py-2 rounded-lg shadow-xl shadow-purple-100 hover:opacity-80 border border-black/20 font-medium" >Kembali ke Beranda</Link>
                </div>
            </div>
        </section>
    )
}