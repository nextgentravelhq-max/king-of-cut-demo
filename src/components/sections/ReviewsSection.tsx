import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { computeReviewStats } from '../../utils/computeReviewStats.ts'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

interface StarRatingProps {
  rating: number
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="reviews__stars" role="img" aria-label={`${rating} von 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={
            index < rating ? 'reviews__star reviews__star--filled' : 'reviews__star'
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

export function ReviewsSection() {
  const { reviews, sectionHeadings } = useBusinessConfig()

  if (reviews.length === 0) {
    return null
  }

  const heading = sectionHeadings.reviews
  const { averageRating, totalReviews } = computeReviewStats(reviews)
  const formattedRating = averageRating.toLocaleString('de-DE', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  return (
    <Section id="reviews" className="reviews">
      <Container>
        {heading && <SectionHeading title={heading.title} subtitle={heading.subtitle} />}
        <p
          className="reviews__summary"
          role="img"
          aria-label={`${formattedRating} von 5, ${totalReviews} Bewertungen`}
        >
          <StarRating rating={Math.round(averageRating)} />
          <span className="reviews__summary-rating">
            <span className="reviews__summary-value">{formattedRating}</span>
            <span className="reviews__summary-scale">/ 5</span>
          </span>
          <span className="reviews__summary-separator" aria-hidden="true">
            ·
          </span>
          <span className="reviews__summary-count">
            {totalReviews} Bewertungen
          </span>
        </p>
        <ul className="reviews__grid">
          {reviews.map((review) => (
            <li key={review.id} className="reviews__card">
              <StarRating rating={review.rating} />
              <blockquote className="reviews__text">{review.text}</blockquote>
              <footer className="reviews__footer">
                <cite className="reviews__author">{review.author}</cite>
                {(review.source || review.date) && (
                  <span className="reviews__meta">
                    {review.source}
                    {review.source && review.date && (
                      <span className="reviews__meta-separator" aria-hidden="true">
                        ·
                      </span>
                    )}
                    {review.date}
                  </span>
                )}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
