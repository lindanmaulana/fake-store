import Link from "next/link";
import { products } from "../../_types/products.types";
import { ProductList } from "../list/product-list";

interface FeaturedProductSectionProps {
  products: products[];
}

export const FeaturedProductSection = ({
  products,
}: FeaturedProductSectionProps) => {
  return (
    <section className="py-12">
      <div className="container max-w-6xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="w-2/3">
            <h2 className="text-2xl font-bold">Produk Unggulan</h2>
            <p className="text-base text-gray-500 line-clamp-2">
              Pilihan terbaik dari fashion, perhiasan, hingga elektronik untuk
              melengkapi gaya hidup Anda.
            </p>
          </div>
          <Link
            href={"/products"}
            className="border border-black/10 rounded-lg px-3 py-1.5 font-medium"
          >
            Semua Produk
          </Link>
        </div>

        <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductList products={products} />
        </div>
      </div>
    </section>
  );
};
