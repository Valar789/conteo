"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import type { Product, SortDirection, SortField } from "../types/product.type";
import { EmptyState, ProductRow, SearchBar, TableHeader, TableSkeleton } from "./table";
import { filterProducts } from "../utils/filter-products";
import { sortProducts } from "../utils/sort-products";
 

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (code: number) => void;
  isLoading?: boolean;
  deletingCode?: number | null;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function ProductList({
  products,
  onDeleteProduct,
  isLoading = false,
  deletingCode = null,
  searchQuery = "",
  onSearchChange = () => {},
}: ProductListProps) {
  const [sortField, setSortField] = useState<SortField>("code");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };
  
  const handleDelete = (code: number) => {
    onDeleteProduct(code);
    toast.success("Producto eliminado exitosamente", {
      position: "bottom-left",
    });
  };

  // Filtrar y ordenar productos
  const filteredProducts = filterProducts(products, searchQuery);
  const sortedProducts = sortProducts(filteredProducts, sortField, sortDirection);

  return (
    <div className="min-h-[410px]">
      <SearchBar 
        searchQuery={searchQuery} 
        onSearchChange={handleSearchChange} 
      />

      {isLoading ? (
        <TableSkeleton />
      ) : sortedProducts.length === 0 ? (
        <EmptyState searchQuery={searchQuery} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <TableHeader
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
            <tbody>
              {sortedProducts.map((product) => (
                <ProductRow
                  key={product.code}
                  product={product}
                  onDelete={handleDelete}
                  isDeletingThis={deletingCode === product.code}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}