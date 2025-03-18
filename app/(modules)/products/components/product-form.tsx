"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { Product } from "../types/product.type";
import {
  type ProductFormValues,
  useProductFormResolver,
} from "../hooks/product-resolver";

interface ProductFormProps {
  onAddProduct: (product: Product) => void;
  isSubmitting?: boolean;
}

export default function ProductForm({
  onAddProduct,
  isSubmitting = false,
}: ProductFormProps) {
  const productResolver = useProductFormResolver();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: productResolver,
    defaultValues: {
      creation: new Date(),
    },
  });

  const onSubmit = (data: ProductFormValues) => {
    try {
      onAddProduct(data);
      toast.success("Producto agregado exitosamente", {
        position: "bottom-left",
      });
      reset();
    } catch (error) {
      toast.error("No se pudo agregar el producto");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium mb-1">
            Código*
          </label>
          <input
            id="code"
            type="number"
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-800"
            {...register("code", { valueAsNumber: true })}
            disabled={isSubmitting}
          />
          {errors.code && (
            <p className="mt-1 text-sm text-red-500">{errors.code.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium mb-1">
            Cantidad*
          </label>
          <input
            id="quantity"
            type="number"
            className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-800"
            {...register("quantity", { valueAsNumber: true })}
            disabled={isSubmitting}
          />
          {errors.quantity && (
            <p className="mt-1 text-sm text-red-500">
              {errors.quantity.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nombre*
        </label>
        <input
          id="name"
          type="text"
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-800"
          {...register("name")}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Descripción*
        </label>
        <textarea
          id="description"
          rows={3}
          className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-zinc-800"
          {...register("description")}
          disabled={isSubmitting}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-zinc-900 dark:bg-zinc-700 text-white py-2 px-4 rounded-md hover:bg-zinc-500 dark:hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-70 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            Agregando...
          </span>
        ) : (
          "Agregar producto"
        )}
      </button>
    </form>
  );
}
