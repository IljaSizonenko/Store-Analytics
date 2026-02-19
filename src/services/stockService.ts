export function getStockStatus(quantity: number) {
    if (quantity === 0) return "Out of Stock";
    if (quantity <= 2) return "Low Stock";
    return "In Stock"
}