import { Stock } from "../models/Stock";
export type StockStatus = "Out of Stock" | "Low Stock" | "In Stock"

export function getAvailable (productId: number, stocks: Stock[]): number {
    return stocks
        .filter(stock => stock.productId === productId)
        .reduce((sum, s) => sum + s.quantity, 0)
}
export function getStockStatus(productId: number, stocks: Stock[]): StockStatus {
    const available = getAvailable(productId, stocks);
    if (available === 0) return "Out of Stock";
    if (available <= 2) return "Low Stock";
    return "In Stock"
}