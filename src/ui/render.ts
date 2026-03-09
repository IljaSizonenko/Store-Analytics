import { Product } from "../models/Product.js";
import { getStockStatus } from "../services/stockService.js";
import { getAverageRating } from "../services/reviewService.js";
import { Review } from "../models/Review.js";
import { getPrice } from "../services/discountService.js";
import { DiscountRule } from "../models/DiscountRule.js";
import { getAvailable } from "../services/stockService.js";

export function renderProducts(
    products: Product[], 
    reviews: Review[],
    discountRules: DiscountRule[]
) {
    const container = document.getElementById("product-list")!;
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        const nameEl = document.createElement("h3");
        nameEl.textContent = product.name;
        card.appendChild(nameEl);
        const priceEl =  document.createElement("div")
        const rating = getAverageRating(product.id, reviews);
        const finalPrice = getPrice(product, rating, discountRules);
        priceEl.textContent = `Price: ${finalPrice}`;
        card.appendChild(priceEl)
        const statusEl = document.createElement("div");
        if (product.stock && product.stock.length > 0) {
            const status = getStockStatus(product.id, product.stock);
            statusEl.textContent = `${status}`;
        } else {
            statusEl.textContent = "No stock data"
        };
        card.appendChild(statusEl);
        if (product.stock && product.stock.length > 0) {
            const availableEl = document.createElement("div");
            const available = getAvailable(product.id, product.stock);
            availableEl.textContent = `Available: ${available}`;
            card.appendChild(availableEl)
        }
        if (product.specifications && Object.keys(product.specifications).length > 0) {
            const specsEl = document.createElement("div");
            const specsString = Object.entries(product.specifications)
                .map(([key, value]) => `${key}=${value}`)
                .join(", ");
            specsEl.textContent = `Specifications: ${specsString}`;
            card.appendChild(specsEl);
        }
        container.appendChild(card);
    });
}