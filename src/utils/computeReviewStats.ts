import type { Review } from '../config/businessConfig.types.ts'

export interface ReviewStats {
  averageRating: number
  totalReviews: number
}

export function computeReviewStats(reviews: Review[]): ReviewStats {
  const totalReviews = reviews.length
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews

  return {
    averageRating,
    totalReviews,
  }
}
