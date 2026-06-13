import { useMemo } from 'react'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { revealClass, revealStaggerClass } from '../../hooks/useScrollReveal.ts'
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

  // Stable random selection: memoised so it doesn't re-shuffle on every re-render
  const displayedReviews = useMemo(() => {
    const shuffled = [...reviews].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, Math.min(3, reviews.length))
  }, [reviews])

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
    <Section id="reviews" className="reviews section-anchor">
      <Container>
        {heading && (
          <SectionHeading
            title={heading.title}
            subtitle={heading.subtitle}
            className={revealClass()}
          />
        )}
        <div
          className={`reviews__summary ${revealClass(1)}`}
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
          Top-Rezensionen unserer Kunden
          </span>
        </div>
        <ul className="reviews__grid">
          {displayedReviews.map((review, index) => (
            <li key={review.id} className={`reviews__card ${revealStaggerClass(index)}`}>
              <a
                href={review.source}
                target="_blank"
                rel="noopener noreferrer"
                className="reviews__card-link"
              >
                <StarRating rating={review.rating} />
                <blockquote className="reviews__text">{review.text}</blockquote>
                <footer className="reviews__footer">
                  <cite className="reviews__author">{review.author}</cite>
                  <span className="reviews__meta">Google Rezension</span>
                </footer>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
