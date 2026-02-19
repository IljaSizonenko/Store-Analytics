import { Category } from "./Category";

export interface DiscountRule {
    category: Category;
    percent: number;
    minRating: number;
}