import type { DaySchedule, Weekday } from '../../config/businessConfig.types.ts'
import { useBusinessConfig } from '../../hooks/useBusinessConfig.tsx'
import { SectionHeading } from '../ui/SectionHeading.tsx'
import { Container } from '../layout/Container.tsx'
import { Section } from '../layout/Section.tsx'
import './sections.css'

const WEEKDAY_LABELS: Record<Weekday, string> = {
  monday: 'Mo',
  tuesday: 'Di',
  wednesday: 'Mi',
  thursday: 'Do',
  friday: 'Fr',
  saturday: 'Sa',
  sunday: 'So',
}

const WEEKDAY_ORDER: Weekday[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

const CLOSED_LABEL = 'Geschlossen'

interface OpeningHoursGroup {
  days: string
  time: string
  isClosed: boolean
}

function formatDayTime(schedule: DaySchedule | null): string {
  return schedule ? `${schedule.open}–${schedule.close}` : CLOSED_LABEL
}

function formatDayRange(start: Weekday, end: Weekday): string {
  if (start === end) {
    return WEEKDAY_LABELS[start]
  }

  return `${WEEKDAY_LABELS[start]}–${WEEKDAY_LABELS[end]}`
}

function groupOpeningHours(
  schedule: Record<Weekday, DaySchedule | null>,
): OpeningHoursGroup[] {
  const groups: OpeningHoursGroup[] = []
  let rangeStart = WEEKDAY_ORDER[0]
  let rangeEnd = WEEKDAY_ORDER[0]
  let currentTime = formatDayTime(schedule[rangeStart])
  let currentIsClosed = schedule[rangeStart] === null

  for (let i = 1; i < WEEKDAY_ORDER.length; i++) {
    const day = WEEKDAY_ORDER[i]
    const daySchedule = schedule[day]
    const time = formatDayTime(daySchedule)
    const isClosed = daySchedule === null

    if (time === currentTime) {
      rangeEnd = day
      continue
    }

    groups.push({
      days: formatDayRange(rangeStart, rangeEnd),
      time: currentTime,
      isClosed: currentIsClosed,
    })
    rangeStart = day
    rangeEnd = day
    currentTime = time
    currentIsClosed = isClosed
  }

  groups.push({
    days: formatDayRange(rangeStart, rangeEnd),
    time: currentTime,
    isClosed: currentIsClosed,
  })

  return groups
}

export function OpeningHoursSection() {
  const { openingHours, sectionHeadings } = useBusinessConfig()

  if (!openingHours) {
    return null
  }

  const heading = sectionHeadings.openingHours
  const groups = groupOpeningHours(openingHours.schedule)

  return (
    <Section id="opening-hours" className="opening-hours contact-zone">
      <Container>
        {heading && <SectionHeading title={heading.title} subtitle={heading.subtitle} />}
        <dl className="opening-hours__list">
          {groups.map((group) => (
            <div key={group.days} className="opening-hours__row">
              <dt className="opening-hours__day">{group.days}</dt>
              <dd
                className={
                  group.isClosed
                    ? 'opening-hours__time opening-hours__time--closed'
                    : 'opening-hours__time'
                }
              >
                {group.time}
              </dd>
            </div>
          ))}
        </dl>
        {openingHours.note && <p className="opening-hours__note">{openingHours.note}</p>}
      </Container>
    </Section>
  )
}
