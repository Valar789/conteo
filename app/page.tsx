import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      <main className="max-w-4xl w-full text-center">
        <div className="space-y-4">
          <h1 className="text-xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
            Prueba Técnica{" "}
            <span className="text-zinc-600 dark:text-zinc-300">Conteo</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            Desarrollador Frontend Next.js
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-700 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-700 dark:text-zinc-300"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                Sobre mi solución
              </h2>
              <p className="text-zinc-600 dark:text-zinc-300">
                He desarrollado una interfaz de gestión de productos con enfoque
                en la experiencia de usuario y diseño:
              </p>
              <ul className="text-left text-sm py-2 text-zinc-600 dark:text-zinc-300 space-y-2 max-w-xl mx-auto">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Creación de productos con los campos: código, nombre,
                  descripción, cantidad y fecha de creación
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Visualización en lista con filtros para ordenar por código,
                  nombre, cantidad y fecha de creación
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Funcionalidad para eliminar productos de la lista
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  href="/products"
                  className="mt-4 cursor-pointer bg-zinc-800 dark:bg-zinc-700 text-white py-2 px-6 rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500"
                >
                  Ver implementación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
