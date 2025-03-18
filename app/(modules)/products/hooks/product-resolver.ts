import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const REQUIRED_FIELD ='Este campo es obligatorio'


const productSchema = z.object({
  code: z.number().positive("El código debe ser un número positivo"),
  name: z.string({message:REQUIRED_FIELD}).min(2, "El nombre debe tener al menos 2 caracteres"),
  description: z
    .string({message:REQUIRED_FIELD})
    .min(5, "La descripción debe tener al menos 5 caracteres"),
  quantity: z
    .number({message:REQUIRED_FIELD})
    .int("La cantidad debe ser un número entero")
    .positive("La cantidad debe ser un número entero positivo"),
  creation: z.date(),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export function useProductFormResolver() {
  return zodResolver(productSchema);
}
