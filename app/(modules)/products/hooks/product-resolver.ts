import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const REQUIRED_FIELD = "Este campo es obligatorio";

const productSchema = z.object({
  code: z
    .number({ message: REQUIRED_FIELD })
    .nonnegative("El código no puede ser menor que cero"),
  name: z
    .string({ message: REQUIRED_FIELD })
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(60, "El nombre no puede exceder los 60 caracteres"),
  description: z
    .string({ message: REQUIRED_FIELD })
    .min(5, "La descripción debe tener al menos 5 caracteres")
    .max(255, "La descripción no puede exceder los 255 caracteres"),
  quantity: z
    .number({ message: REQUIRED_FIELD })
    .int("La cantidad debe ser un número entero")
    .nonnegative("La cantidad no puede ser menor que cero"),
  creation: z.date(),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export function useProductFormResolver() {
  return zodResolver(productSchema);
}