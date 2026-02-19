import { Product } from "../models/Product";

let report = "Product Report:\n\n"
products.forEach(product => {
    report += "Name: ${product.name}\n";
    report += "Price: ${product.price.toFixed(2)}\n";
    report += "quantity: ${product.quantity}\n";
    report += "Category: ${product.category}\n";
    report += "Supplier: ${product.supplier.name}\n";
    if (product.specifications) {
        report += "Specifications:\n";
        for (const [key, value] of Object.entries())
    }
})