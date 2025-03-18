
interface EmptyStateProps {
    searchQuery: string;
  }
  
  export function EmptyState({ searchQuery }: EmptyStateProps) {
    return (
      <div className="grid place-content-center text-zinc-500 py-6 ">
        {searchQuery
          ? "No se encontraron productos que coincidan con la búsqueda."
          : "No hay productos disponibles. Añade tu primer producto."}
      </div>
    );
  }