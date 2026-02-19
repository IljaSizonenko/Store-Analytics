import { Product } from "../models/Product";
import { Supplier } from "../models/Supplier";
import { Category } from "../models/Category";
import { Stock } from "../models/Stock";
import { Review } from "../models/Review";
import { DiscountRule } from "../models/DiscountRule";

const suppliers: Supplier[] = [
    { id: 1, name: "Tech Supplies Inc.", contactEmail: "tech@supplies.com"},
    { id: 2, name: "Book World" }
]
const products: Product[] = [
    {
        id: 1,
        name: "TechBrand X1000",
        price: 499.99,
        category: Category.Electronics,
        supplierId: 1,
        specifications: {
            brand: "TechBrand",
            model: "X1000",
            color: "Black",
            weight: 4.5
        },
    }
]

const stocks: Stock[] = [
    {productId: 1, warehouse: "Tallinn", quantity: 6},
    {productId: 1, warehouse: "Narva", quantity: 1}
]

const reviews: Review[] = [
    {id: 1, productId: 1, rating: 4},
    {id: 1, productId: 1, rating: 3}
]

const discounts: DiscountRule[] = [
    {category: Category.Electronics, percent: 15, minRating: 4},
]