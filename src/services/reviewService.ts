import { Review } from "../models/Review";

export function getAverageRating(productId: number, reviews: Review[]): string {
    const productReviews = reviews.filter(
        review => review.productId === productId
    );
    if (productReviews.length === 0) {
        return "no reviews"
    }
    const sum = productReviews.reduce(
        (acc, review) => acc + review.rating,
        0
    );
    const average = sum / productReviews.length;
    return average.toFixed(2)
}