import { products } from "../../_types/products.types";
import { ProductCard } from "../card/product-card";

interface ProductListProps {
  products: products[];
}

export const ProductList = async ({ products }: ProductListProps) => {
  return (
    <>
      {products
        ?.slice(0, 4)
        .sort((a: products, b: products) => b.rating.rate - a.rating.rate)
        .map((product: products) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </>
  );
};
