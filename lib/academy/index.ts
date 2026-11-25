// Till Academy: read access to the guides. This file imports every guide, so use it from
// server components. Client components import from './format' and './search' instead.

import { guides } from './guides'
import { topics } from './topics'
import type { LibraryEntry } from './search'
import type { AcademyGuide, AcademyTopic, AcademyTopicInfo } from './types'

export * from './format'
export * from './search'
export type * from './types'
export { topics }

/** Every guide in learning order: by topic as listed in topics.ts, then by `order`. */
export function getAllGuides(): AcademyGuide[] {
  return guides
}

export function getGuide(slug: string): AcademyGuide | undefined {
  return guides.find((guide) => guide.slug === slug)
}

export function getTopic(slug: AcademyTopic): AcademyTopicInfo {
  return topics.find((topic) => topic.slug === slug) ?? { slug, name: slug, description: '' }
}

export function topicGuides(topic: AcademyTopic): AcademyGuide[] {
  return guides.filter((guide) => guide.topic === topic).sort((a, b) => a.order - b.order)
}

export function guidesByTopic(): { topic: AcademyTopicInfo; guides: AcademyGuide[] }[] {
  return topics.map((topic) => ({ topic, guides: topicGuides(topic.slug) }))
}

export interface AdjacentGuide {
  guide: AcademyGuide
  /** False when the neighbour is the first or last guide of the next or previous topic. */
  sameTopic: boolean
}

/** The guides before and after this one in learning order, crossing topics at the ends. */
export function adjacentGuides(slug: string): { previous: AdjacentGuide | null; next: AdjacentGuide | null } {
  const index = guides.findIndex((guide) => guide.slug === slug)
  if (index < 0) return { previous: null, next: null }
  const wrap = (neighbour: AcademyGuide | undefined): AdjacentGuide | null =>
    neighbour ? { guide: neighbour, sameTopic: neighbour.topic === guides[index].topic } : null
  return { previous: wrap(guides[index - 1]), next: wrap(guides[index + 1]) }
}

export function relatedGuides(guide: AcademyGuide): AcademyGuide[] {
  return guide.related
    .map((slug) => getGuide(slug))
    .filter((related): related is AcademyGuide => Boolean(related))
}

/** Tags with the number of guides that carry them, most used first. */
export function tagCounts(): { tag: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const guide of guides) for (const tag of guide.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1)
  return Array.from(counts, ([tag, count]) => ({ tag, count })).sort(
    (a, b) => b.count - a.count || a.tag.localeCompare(b.tag),
  )
}

/** Tags shared by at least three guides: the ones worth offering as filters. */
export function commonTags(): string[] {
  return tagCounts()
    .filter(({ count }) => count >= 3)
    .map(({ tag }) => tag)
}

export function totalSeconds(list: AcademyGuide[] = guides): number {
  return list.reduce((sum, guide) => sum + guide.video.seconds, 0)
}

export function toLibraryEntry(guide: AcademyGuide): LibraryEntry {
  return {
    slug: guide.slug,
    title: guide.title,
    summary: guide.summary,
    topic: guide.topic,
    roles: guide.roles,
    level: guide.level,
    tags: guide.tags,
    seconds: guide.video.seconds,
    steps: guide.steps.map((step) => ({ title: step.title, detail: step.detail })),
  }
}

export function libraryEntries(): LibraryEntry[] {
  return guides.map(toLibraryEntry)
}

/**
 * The public address of the site, for absolute links in page metadata. Set
 * NEXT_PUBLIC_SITE_URL to the live domain; on Vercel the production domain is used
 * when it is not set. Undefined on a developer's machine.
 */
export function siteOrigin(): URL | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  try {
    if (explicit) return new URL(explicit)
    if (vercel) return new URL(`https://${vercel}`)
  } catch {
    // A malformed value should not break the build.
  }
  return undefined
}
