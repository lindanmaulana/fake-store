import { ErrorPage } from "@/app/(home)/_components/error-page"
import { products } from "@/app/(home)/_types/products.types"
import { fetchProductsDetail } from "@/libs/services/products.service"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cache } from "react"
import { FaAngleLeft, FaStar } from "react-icons/fa"
import { TbPointFilled } from "react-icons/tb"
import { AddToCartToolbar } from "./_components/toolbar/add-to-cart-toolbar"
import { BackToolbar } from "./_components/toolbar/back-toolbar"

interface Params {
    id: string
}

interface DetailPageProps {
    params: Promise<Params>
}

export const generateMetadata = async ({params}: DetailPageProps): Promise<Metadata> => {
    const {id} = await params
    const product = await getProductsDetail(id)

    if (product.err) {
        return {
            title: "Fake Store | Produk Tidak Ditemukan",
            description: "Produk yang Anda cari tidak tersedia.",
        };
    }

    const dataProduct = product as products

    return  {
        title: `Fake Store | ${dataProduct.title}`,
        description: `${dataProduct.description}`,
        keywords: ["web store", "online shop", "fashion pria", "fashion wanita", "elektronik", "perhiasan", "belanja online"],
        openGraph: {
            title: `Fake Store | ${dataProduct.title}`,
            description: `${dataProduct.description}`,
            images: "http://localhost:3000/assets/images/popular-product/bag-linm-store-og.png",
            url: "http://localhost:3000"
        },
        twitter: {
            card: "summary_large_image",
            title:`Fake Store | ${dataProduct.title}`,
            description: `${dataProduct.description}`,
            images: "http://localhost:3000/assets/images/popular-product/bag-linm-store-og.png",
        }
    }
}

const DetailPage = async ({params}: DetailPageProps) => {
    const {id} = await params
    const product = await getProductsDetail(id)

    if(product.error) return <ErrorPage error={product.error}></ErrorPage>

    const dataProduct = product as products
    
    return (
        <section className="py-10">
            <div className="container max-w-6xl mx-auto px-4 lg:px-0">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="border border-black/10 rounded-xl p-5">
                        <Image src={dataProduct.image} alt={dataProduct.title} width={100} height={100} loading="lazy" className="w-full h-full object-contain aspect-square" unoptimized />
                    </div>
                    <div className="space-y-6">
                        <Link href={"/"} className="flex items-center gap-px text-gray-500 hover:text-black"><FaAngleLeft className="mt-px text-lg" /> Kembali</Link>
                        <b className="block font-normal uppercase text-sm text-gray-500">{dataProduct.category}</b>
                        <h2 className="text-3xl font-bold line-clamp-2">{dataProduct.title}</h2>

                        <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <span itemProp="ratingValue" className="flex items-center gap-1"><FaStar className="text-yellow-500" /> {dataProduct.rating.rate}</span> 
                            <TbPointFilled className="mt-px text-xs" />
                            <span itemProp="ratingCount">{dataProduct.rating.count} ulasan</span>
                        </div>

                        <div itemProp="productPrice" className="font-bold text-2xl">US${dataProduct.price}</div>

                        <p className="text-gray-500">{dataProduct.description}</p>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 py-4">
                            <AddToCartToolbar product={dataProduct}></AddToCartToolbar>
                            <BackToolbar></BackToolbar>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailPage

export const getProductsDetail = cache(async (id: string) => fetchProductsDetail({id}))