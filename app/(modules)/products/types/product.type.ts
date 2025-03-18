export interface Product {
  code: number;
  name: string;
  description: string;
  quantity: number;
  creation: Date | string 
}


export type SortField = "code" | "name" | "quantity" | "creation";
export type SortDirection = "asc" | "desc";

