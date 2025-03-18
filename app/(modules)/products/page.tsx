"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Product } from "./types/product.type";
import ProductForm from "./components/product-form";
import ProductList from "./components/product-list";
 
export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (code: number) => {
    setProducts(products.filter((product) => product.code !== code));
  };

  return (
    <main className="min-h-screen   max-w-[1400px] mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8">Gestión de productos</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Lista de productos</h2>
            <ProductList products={products} onDeleteProduct={deleteProduct} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">
              Agregar nuevo producto
            </h2>
            <ProductForm onAddProduct={addProduct} />
          </div>
        </div>
      </div>
    </main>
  );
}
