import { Product } from "../../types/product.type";
import { DeleteButton } from "./delete-button";
import { format } from "date-fns";

interface ProductRowProps {
  product: Product;
  onDelete: (code: number) => void;
  isDeletingThis: boolean;
}

export function ProductRow({ product, onDelete, isDeletingThis }: ProductRowProps) {
  return (
    <tr
      className={`border-b border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
        isDeletingThis ? "opacity-50" : ""
      }`}
    >
      <td className="py-3 px-4">{product.code}</td>
      <td className="py-3 px-4">
        <div className="max-w-[150px] truncate" title={product.name}>
          {product.name}
        </div>
      </td>
      <td className="py-3 px-4">
        <div className="max-w-[150px] truncate" title={product.description}>
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
        <DeleteButton 
          onDelete={() => onDelete(product.code)} 
          isDeleting={isDeletingThis} 
        />
      </td>
    </tr>
  );
}
 