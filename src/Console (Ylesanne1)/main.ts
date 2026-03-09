import { Product } from "../models/Product.js";
import { Supplier } from "../models/Supplier.js";
import { Category } from "../models/Category.js";
import { Stock } from "../models/Stock.js";
import { Review } from "../models/Review.js";
import { DiscountRule } from "../models/DiscountRule.js";
import { printReport } from "./report.js";

const suppliers: Supplier[] = [
    { id: 1, name: "Tech Supplies Inc.", contactEmail: "tech@supplies.com"},
    { id: 2, name: "Nordic Devices" },
    { id: 3, name: "Euro Accessors"},
    { id: 4, name: "Bokk World"}
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
        stock: [
            { productId: 1, warehouse: "W1", quantity: 5 },
            { productId: 1, warehouse: "W2", quantity: 2 }
        ],
    },
    {
        id: 2,
        name: "Dell XP5 15 [LAP-DEL-XPS15]",
        price: 1299.99,
        category: Category.Electronics,
        supplierId: 2,
        specifications: {
            brand: "Dell",
            model: "XP5 15",
            color: "Black",
            weight: 1.8
        },
        stock: [
            { productId: 2, warehouse: "W1", quantity: 1 }
        ],
    },
    {
        id: 3,
        name: "Logitech MX Master 3S [ACC-LOG-MX3]",
        price: 99.50,
        category: Category.Accessories,
        supplierId: 3,
        stock: [
            { productId: 3, warehouse: "W1", quantity: 0 }
        ],
    },
    {
        id: 4,
        name: "TypeScript for beginners [BOOKS-TS-BASICS]",
        price: 39.90,
        category: Category.Books,
        supplierId: 4,
        stock: [
            { productId: 4, warehouse: "W1", quantity: 4 }
        ],
    },
    
]

const stocks: Stock[] = [
    {productId: 1, warehouse: "Tallinn", quantity: 6},
    {productId: 1, warehouse: "Narva", quantity: 1},
    {productId: 2, warehouse: "Tartu", quantity: 1},
    {productId: 4, warehouse: "Kohtla-Jarve", quantity: 4},
]

const reviews: Review[] = [
    {id: 1, productId: 1, rating: 4},
    {id: 2, productId: 1, rating: 5},
    {id: 3, productId: 1, rating: 5},
    {id: 4, productId: 2, rating: 3},
    {id: 5, productId: 3, rating: 4},
]

const discounts: DiscountRule[] = [
    {category: Category.Electronics, percent: 15, minRating: 4},
]
printReport(products, suppliers, stocks, reviews, discounts)