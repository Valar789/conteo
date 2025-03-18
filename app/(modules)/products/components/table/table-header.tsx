import { SortDirection, SortField } from "../../types/product.type";
import { SortIcon } from "./SortIcon";
 

interface TableHeaderProps {
  sortField: SortField;
  sortDirection: SortDirection;
  onSort: (field: SortField) => void;
}

export function TableHeader({
  sortField,
  sortDirection,
  onSort,
}: TableHeaderProps) {
  const renderSortableHeader = (title: string, field: SortField) => (
    <th
      className="py-3 px-4 text-left text-sm cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
      onClick={() => onSort(field)}
    >
      {title}
      {sortField === field && <SortIcon direction={sortDirection} />}
    </th>
  );

  return (
    <thead>
      <tr className="border-b border-zinc-200 text-zinc-500 dark:border-zinc-700">
        {renderSortableHeader("Código", "code")}
        {renderSortableHeader("Nombre", "name")}
        <th className="py-3 px-4 text-left text-sm">Descripción</th>
        {renderSortableHeader("Cantidad", "quantity")}
        {renderSortableHeader("Fecha de creación", "creation")}
        <th className="py-3 px-4 text-center text-sm">Acciones</th>
      </tr>
    </thead>
  );
}
