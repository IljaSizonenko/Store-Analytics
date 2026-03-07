import { Product } from "../models/Product.js";
export function renderProducts(products: Product[]) {
    const container = document.getElementById("product-list")!;
    container.innerHTML = "";
    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.textContent = p.name;
        container.appendChild(card)
    })
}