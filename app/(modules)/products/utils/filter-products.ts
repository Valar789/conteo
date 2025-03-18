import { Product } from "../types/product.type";

export function filterProducts(products: Product[], searchQuery: string) {
  const query = searchQuery.toLowerCase();
  return products.filter((product) => {
    return (
      String(product.code).includes(query) ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });
}