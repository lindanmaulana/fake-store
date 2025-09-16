import Image from "next/image"

export const HeroSection = () => {
    return (
        <section className="py-10">
            <div className="container max-w-6xl mx-auto min-h-[520px] md:h-[520px] px-4 lg:px-0">
              <div className="w-full h-full flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-4">
                  <strong className="block max-w-[234px] text-left rounded-full border border-gray-200 text-xs text-gray-500 p-2">Fake Store | Belanja Terlengkap Online</strong>
                  <h1 className="text-4xl md:text-5xl font-extrabold">Belanja lebih cepat dengan data seperti Fake Store API</h1>
                  <p className="text-gray-500 text-base md:text-lg">Temukan koleksi lengkap pakaian pria, pakaian wanita, perhiasan, hingga elektronik terbaru di Web Store. Belanja mudah, harga terjangkau, dan produk berkualitas dari Fake Store API.</p>
                      
                  <div className="space-x-2 py-4">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow-xl shadow-purple-200 hover:shadow-purple-400 cursor-pointer">Jelajahi Produk</button>
                    <button className="border border-black/10 px-4 py-2 rounded-lg shadow-xl">Lihat Kategori</button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                  <figure className="w-full max-w-xl h-full md:h-[80%] aspect-[4/3] flex items-center justify-center border border-black/10 px-12 shadow-2xl rounded-xl ">
                    <Image src="/assets/images/popular-product/bag-fakestore-og.png" alt="Tas Terpopular" width="100" height="100" className="w-full h-full object-contain" loading="lazy" unoptimized />
                  </figure>
                </div>
              </div>
            </div>  
        </section>
    )
}