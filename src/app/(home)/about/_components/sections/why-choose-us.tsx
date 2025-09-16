import { FaCheckCircle, FaDatabase, FaMobileAlt } from "react-icons/fa"
import { MissionList } from "../list/mission-list"

export const WhyChooseUs = () => {
    return (
        <section className="py-14 border-y border-black/10">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-y-4">
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-extrabold">Misi</h2>
                        <p className="text-gray-500 text-base">Menyediakan pengalaman belanja online yang cepat, aman, dan nyaman. Fake Store hadir dengan koleksi fashion, elektronik, dan perhiasan terbaik, dengan harga terjangkau dan kualitas terjamin.</p>
                            
                        <ul className="space-y-3 py-3">
                            <li className="flex items-center gap-1">
                            <FaCheckCircle className="text-green-500 size-4" />
                                <span className="text-sm">Produk berkualitas &amp; terjangkau</span> 
                            </li>
                            <li className="flex items-center gap-1">
                                <FaDatabase className="text-blue-500 size-4" />
                                <span className="text-sm">Didukung data nyata dari Fake Store API</span> 
                            </li>
                            <li className="flex items-center gap-1">
                                <FaMobileAlt className="text-purple-500 size-4" />
                                <span className="text-sm">Siap digunakan di berbagai perangkat</span> 
                            </li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <MissionList />
                    </div>
                </div>
            </div>
        </section>
    )
}