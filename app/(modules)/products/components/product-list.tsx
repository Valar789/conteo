"use client";

import { useState } from "react";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { Product } from "../types/product.type";

interface ProductListProps {
  products: Product[];
  onDeleteProduct: (code: number) => void;
}

type SortField = "code" | "name" | "quantity" | "creation";
type SortDirection = "asc" | "desc";

export default function ProductList({
  products,
  onDeleteProduct,
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

  const sortedProducts = [...products].sort((a, b) => {
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

  if (products.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-500">
        No hay productos disponibles. Añade tu primer producto.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-700">
            <th
              className="py-3 px-4 text-left font-medium text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
              onClick={() => handleSort("code")}
            >
              Código
              {sortField === "code" && (
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
              )}
            </th>
            <th
              className="py-3 px-4 text-left font-medium text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
              onClick={() => handleSort("name")}
            >
              Nombre
              {sortField === "name" && (
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
              )}
            </th>
            <th className="py-3 px-4 text-left font-medium text-sm">
              Descripción
            </th>
            <th
              className="py-3 px-4 text-center font-medium text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
              onClick={() => handleSort("quantity")}
            >
              Cantidad
              {sortField === "quantity" && (
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
              )}
            </th>
            <th
              className="py-3 px-4 text-left font-medium text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
              onClick={() => handleSort("creation")}
            >
              Fecha de creación
              {sortField === "creation" && (
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
              )}
            </th>
            <th className="py-3 px-4 text-center font-medium text-sm">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr
              key={product.code}
              className="border-b border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              <td className="py-3 px-4">{product.code}</td>
              <td className="py-3 px-4">{product.name}</td>
              <td className="py-3 px-4">
                <div className="max-w-xs truncate">{product.description}</div>
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
                  className="text-red-500  hover:text-red-700 focus:outline-none"
                  aria-label="Delete product"
                >
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
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
