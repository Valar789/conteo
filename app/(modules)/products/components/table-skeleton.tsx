export default function TableSkeleton() {
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <th className="py-3 px-4 text-left font-medium text-sm">
                Código
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm">
                Nombre
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm">
                Descripción
              </th>
              <th className="py-3 px-4 text-center font-medium text-sm">
                Cantidad
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm">
                Fecha de creación
              </th>
              <th className="py-3 px-4 text-center font-medium text-sm">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr
                key={index}
                className="border-b border-zinc-200 dark:border-zinc-700"
              >
                <td className="py-3 px-4">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-12"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-32"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-48"></div>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-8 mx-auto"></div>
                </td>
                <td className="py-3 px-4">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse w-24"></div>
                </td>
                <td className="py-3 px-4 flex justify-center">
                  <div className="h-5 bg-zinc-200 dark:bg-zinc-700 rounded-full animate-pulse w-5"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }