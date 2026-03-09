import type { Category } from "./Category.js";
import type { Stock } from "./Stock.js";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    supplierId: number;
    specifications?: Record<string, string | number>;
    stock?: Stock[]
}