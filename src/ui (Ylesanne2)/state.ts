import { Product } from "../models/Product.js";
const StorageKey = "products";
export function loadState(): Product[] {
    const raw = localStorage.getItem(StorageKey)
    return raw ? JSON.parse(raw) : [];
}
export function saveState(products: Product[]) {
    localStorage.setItem(StorageKey, JSON.stringify(products))
}