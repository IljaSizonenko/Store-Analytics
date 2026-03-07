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
        report += `Price: ${product.price.toFixed(2)}\n`;
        report += `Category: ${product.category}\n`;
        const supplier = suppliers.find(sup => sup.id === product.supplierId);
        if (supplier) {
            report += `Supplier: ${supplier.name}\n`;
        }
        if (product.specifications) {
            report += "Specifications: ";
            const specs = Object.entries(product.specifications)
            .map(([key, value]: [string, any]) => `${key}=${value}`)
            .join(", ");
            report += specs + "\n"
        }
        report += "\n";
    });
    console.log(report)
}