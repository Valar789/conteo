import { Product, SortDirection, SortField } from "../types/product.type";

export function sortProducts(
    products: Product[], 
    sortField: SortField, 
    sortDirection: SortDirection
  ) {
    return [...products].sort((a, b) => {
      const multiplier = sortDirection === "asc" ? 1 : -1;
  
      switch (sortField) {
        case "code":
          return (a.code - b.code) * multiplier;
        case "name":
          return a.name.localeCompare(b.name) * multiplier;
        case "quantity":
          return (a.quantity - b.quantity) * multiplier;
        case "creation":
          return (
            (new Date(a.creation).getTime() - new Date(b.creation).getTime()) *
            multiplier
          );
        default:
          return 0;
      }
    });
  }