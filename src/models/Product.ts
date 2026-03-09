import type { Category } from "./Category";
import type { Stock } from "./Stock";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    supplierId: number;
    specifications?: Record<string, string | number>;
    stock?: Stock[]
}