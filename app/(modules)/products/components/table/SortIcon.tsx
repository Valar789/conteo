import { SortDirection } from "../../types/product.type";

export function SortIcon({ direction }: { direction: SortDirection }) {
  return (
    <span className="inline-block ml-1">
      {direction === "asc" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block w-4 h-4"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="inline-block w-4 h-4"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </span>
  );
}

