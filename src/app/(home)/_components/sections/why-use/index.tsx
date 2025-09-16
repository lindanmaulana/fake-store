import { products } from "@/app/(home)/_types/products.types"
import { FactStats } from "./fact-stats"

interface WhyUsProps {
    products: products[]
    categories: string[]
}

export const WhyUs = ({products, categories}: WhyUsProps) => {

    return (
        <section id="about" className="pt-14 border-t border-black/10">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Kenapa Belanja di Fakestore+?</h2>
                        <p className="text-base text-gray-500">Kami hadir untuk memberikan pengalaman belanja yang cepat, mudah, dan menyenangkan. Semua produk di Fakestore+ dipilih dengan cermat untuk memastikan kualitas dan tren terkini.</p>

                        <ul className="py-2 text-base space-y-4">
                            <li>✨ Produk Pilihan Terkini</li>
                            <li>🚀 Belanja Tanpa Ribet</li>
                            <li>🔒 Data Produk Otentik</li>
                            <li>✅ Akses di Mana Saja</li>
                        </ul>
                    </div>
                    <FactStats products={products} categories={categories} />
                </div>
            </div>
        </section>
    )
}