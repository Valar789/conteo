interface DeleteButtonProps {
  onDelete: () => void;
  isDeleting: boolean;
}

export function DeleteButton({ onDelete, isDeleting }: DeleteButtonProps) {
  return (
    <button
      onClick={onDelete}
      className="text-red-700 hover:text-red-600 focus:outline-none"
      aria-label="Delete product"
      disabled={isDeleting}
    >
      {isDeleting ? (
        <span className="inline-block h-5 w-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></span>
      ) : (
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
          className="w-5 h-5"
        >
          <path d="M3 6h18"></path>
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      )}
    </button>
  );
}
