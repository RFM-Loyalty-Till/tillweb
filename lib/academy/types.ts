// Till Academy: the data contract shared by the guide content and the pages.

export type AcademyTopic =
  | 'getting-started'
  | 'orders'
  | 'payments'
  | 'tables'
  | 'order-management'
  | 'back-office'

export type AcademyRole = 'cashier' | 'waiter' | 'manager' | 'owner'

export type AcademyLevel = 'basics' | 'everyday' | 'advanced'

export interface AcademyStep {
  /** What to do, as an instruction. */
  title: string
  /** One or two sentences: where the control is and what happens next. */
  detail: string
  /** Seconds into the video where this step starts, for chapter links. */
  at: number
}

export interface AcademyNote {
  title: string
  detail: string
}

export interface AcademyVideo {
  src: string
  poster: string
  seconds: number
}

export interface AcademyGuide {
  slug: string
  title: string
  /** One sentence, at most about 140 characters. Used on cards and in search results. */
  summary: string
  /** The write-up: two to four short paragraphs on when and why you do this. */
  intro: string[]
  topic: AcademyTopic
  roles: AcademyRole[]
  level: AcademyLevel
  /** Lowercase search and filter tags, e.g. 'cash', 'tips', 'dine-in'. */
  tags: string[]
  video: AcademyVideo
  steps: AcademyStep[]
  /** Facts that save a call to support. */
  goodToKnow?: AcademyNote[]
  /** What goes wrong and how to recover. */
  troubleshooting?: AcademyNote[]
  /** Slugs of guides to read next. */
  related: string[]
  /** Position within its topic, starting at 1. */
  order: number
  /** ISO date the guide was last checked against the product. */
  updated: string
}

export interface AcademyTopicInfo {
  slug: AcademyTopic
  name: string
  description: string
}
