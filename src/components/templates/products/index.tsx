import { useProductContext } from "@context/products";
import { ProductsContainer } from "./styles";
import { ProductCard } from "@organisms/product_card";

export default function Products() {
  const { products } = useProductContext();

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductsContainer>
  );
}
