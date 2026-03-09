export function getAvailable(productId, stocks) {
    return stocks
        .filter(stock => stock.productId === productId)
        .reduce((sum, s) => sum + s.quantity, 0);
}
export function getStockStatus(productId, stocks) {
    const available = getAvailable(productId, stocks);
    if (available === 0)
        return "Out of Stock";
    if (available <= 2)
        return "Low Stock";
    return "In Stock";
}
