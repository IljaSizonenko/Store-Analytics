import { Product } from "../models/Product.js";
import { Supplier } from "../models/Supplier.js";
import { Stock } from "../models/Stock.js";
import { Review } from "../models/Review.js";
import { DiscountRule } from "../models/DiscountRule.js";

export function printReport(
    products: Product[],
    suppliers: Supplier[],
    stocks: Stock[],
    reviews: Review[],
    discountRules: DiscountRule[]
) {
    let report = "Store Analytics\n";
    products.forEach(product => {
        report += `Name: ${product.name}\n`;
        const rule = discountRules.find(r => r.category === product.category);
        const productReviews = reviews.filter(r => r.productId === product.id);
        let ratingText = "no reviews";
        let avgRating: number | null = null;
        if (productReviews.length > 0) {
            avgRating = productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
            ratingText = avgRating.toFixed(2);
        }
        let finalPrice = product.price;
        let priceText = product.price.toFixed(2);
        if (rule) {
            const ratingOK = rule.minRating === undefined || (avgRating !== null && avgRating >= rule.minRating);
            if (ratingOK) {
                finalPrice = product.price * (1 - rule.percent / 100);
                priceText = `${product.price.toFixed(2)} -> ${finalPrice.toFixed(2)}`;
            }
        }
        report += `Price: ${priceText}\n`;
        report += `Category: ${product.category}\n`;
        const supplier = suppliers.find(sup => sup.id === product.supplierId);
        if (supplier) {
            report += `Supplier: ${supplier.name}\n`;
        }
        const productStocks = stocks.filter(s => s.productId === product.id);
        const available = productStocks.reduce((sum, s) => sum + s.quantity, 0);
        let status = "Out";
        if (available >= 3) status = "In Stock";
        else if (available >= 1) status = "Low";
        report += `Available: ${available}\n`;
        report += `Stock status: ${status}\n`;
        report += `Rating: ${ratingText}\n`;
        if (product.specifications) {
            const specs = Object.entries(product.specifications)
            .map(([key, value]: [string, any]) => `${key}=${value}`)
            .join(", ");
            report += `Specifications: ${specs}\n`;
        }
        report += "\n";
    });
    console.log(report)
}