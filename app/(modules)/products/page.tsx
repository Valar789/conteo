"use client";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import type { Product } from "./types/product.type";
import ProductForm from "./components/product-form";
import ProductList from "./components/product-list";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isListLoading, setIsListLoading] = useState(true);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsListLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const addProduct = (product: Product) => {
    setIsFormSubmitting(true);

    setTimeout(() => {
      setProducts([...products, product]);
      setIsFormSubmitting(false);
    }, 800);
  };

  const deleteProduct = (code: number) => {
    setIsDeleting(code);

    setTimeout(() => {
      setProducts(products.filter((product) => product.code !== code));
      setIsDeleting(null);
    }, 600);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <main className="min-h-screen max-w-[1400px] mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8">Gestión de productos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <ProductList
              products={products}
              onDeleteProduct={deleteProduct}
              isLoading={isListLoading}
              deletingCode={isDeleting}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">
              Agregar nuevo producto
            </h2>
            <ProductForm
              onAddProduct={addProduct}
              isSubmitting={isFormSubmitting}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
