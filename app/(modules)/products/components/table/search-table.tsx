interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
    return (
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por codigo, nombre o descripción..."
            value={searchQuery}
            onChange={onSearchChange}
            className="w-full px-4 py-1 border-b border-zinc-300 dark:border-zinc-700 focus:outline-none dark:bg-zinc-800 dark:text-white"
          />
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
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    );
  }