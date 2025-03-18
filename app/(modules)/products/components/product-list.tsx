"use client";

import { useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import type { Product } from "../types/product.type";
import TableSkeleton from "./table-skeleton";
 

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (code: number) => void;
  isLoading?: boolean;
  deletingCode?: number | null;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

type SortField = "code" | "name" | "quantity" | "creation";
type SortDirection = "asc" | "desc";

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

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      String(product.code).includes(query) ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
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

  const handleDelete = (code: number) => {
    onDeleteProduct(code);
    toast.success("Producto eliminado exitosamente", {
      position: "bottom-left",
    });
  };

  const renderSortIcon = () => (
    <span className="inline-block ml-1">
      {sortDirection === "asc" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block w-4 h-4"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block w-4 h-4"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </span>
  );

  return (
    <div className="min-h-[410px]">
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por codigo, nombre o descripción..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-1 border-b border-zinc-300 dark:border-zinc-700 focus:outline-none dark:bg-zinc-800 dark:text-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>

      {isLoading ? (
        <TableSkeleton />
      ) : sortedProducts.length === 0 ? (
        <div className="grid place-content-center text-zinc-500 py-6 ">
          {searchQuery
            ? "No se encontraron productos que coincidan con la búsqueda."
            : "No hay productos disponibles. Añade tu primer producto."}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="  border-b border-zinc-200 text-zinc-500 dark:border-zinc-700">
                <th
                  className="min-w-[100px] flex py-3 px-4 text-left text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                  onClick={() => handleSort("code")}
                >
                  Código
                  {sortField === "code" && renderSortIcon()}
                </th>
                <th
                  className="py-3 px-4 text-left text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                  onClick={() => handleSort("name")}
                >
                  Nombre
                  {sortField === "name" && renderSortIcon()}
                </th>
                <th className="py-3 px-4 text-left text-sm">
                  Descripción
                </th>
                <th
                  className="py-3 px-4 text-center text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                  onClick={() => handleSort("quantity")}
                >
                  Cantidad
                  {sortField === "quantity" && renderSortIcon()}
                </th>
                <th
                  className="py-3 px-4 text-left text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                  onClick={() => handleSort("creation")}
                >
                  Fecha de creación
                  {sortField === "creation" && renderSortIcon()}
                </th>
                <th className="py-3 px-4 text-center text-sm">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr
                  key={product.code}
                  className={`border-b border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                    deletingCode === product.code ? "opacity-50" : ""
                  }`}
                >
                  <td className="py-3 px-4">{product.code}</td>
                  <td className="py-3 px-4">
                    <div
                      className="max-w-[150px] truncate"
                      title={product.name}
                    >
                      {product.name}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div
                      className="max-w-[150px] truncate"
                      title={product.description}
                    >
                      {product.description}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">{product.quantity}</td>
                  <td className="py-3 px-4">
                    {product.creation instanceof Date
                      ? format(product.creation, "dd/MM/yyyy")
                      : format(new Date(product.creation), "dd/MM/yyyy")}
                  </td>
                  <td className="py-3 px-4 flex justify-center">
                    <button
                      onClick={() => handleDelete(product.code)}
                      className="text-red-700 hover:text-red-600 focus:outline-none"
                      aria-label="Delete product"
                      disabled={deletingCode === product.code}
                    >
                      {deletingCode === product.code ? (
                        <span className="inline-block h-5 w-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}