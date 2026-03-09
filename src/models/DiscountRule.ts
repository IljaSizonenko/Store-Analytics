import { Category } from "./Category.js";

export interface DiscountRule {
    category: Category;
    percent: number;
    minRating?: number;
}