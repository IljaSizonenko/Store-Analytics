import { Product } from "../models/Product";
import { DiscountRule } from "../models/DiscountRule";

export function getPrice (product: Product, averageRating: string, discontRules: DiscountRule[]): string {
    const basePrice = product.price;
    const rule = discontRules.find(
        r => r.category === product.category
    );
    if (!rule) {
        return basePrice.toFixed(2)
    }
    if (rule.minRating !== undefined) {
        if (averageRating === "no reviews") {
            return basePrice.toFixed(2)
        }
        const numericRating = parseFloat(averageRating);
        if (numericRating < rule.minRating) {
            return basePrice.toFixed(2)
        }
    }
    const discountPrice = basePrice - (basePrice * rule.percent) / 100;
    return `${basePrice.toFixed(2)} -> ${discountPrice.toFixed(2)}`;
}