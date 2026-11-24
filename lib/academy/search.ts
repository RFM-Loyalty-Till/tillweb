// Till Academy: library filters and search. Pure functions over a compact index, so the
// library page can filter in the browser without loading the full guides.

import { LEVEL_ORDER, ROLE_ORDER } from './format'
import type { AcademyLevel, AcademyRole, AcademyTopic } from './types'

/** What the library needs to list, filter and search one guide. */
export interface LibraryEntry {
  slug: string
  title: string
  summary: string
  topic: AcademyTopic
  roles: AcademyRole[]
  level: AcademyLevel
  tags: string[]
  seconds: number
  steps: { title: string; detail: string }[]
}

export type ViewedFilter = 'todo' | 'done'

export interface LibraryFilters {
  q: string
  topic: AcademyTopic | null
  role: AcademyRole | null
  level: AcademyLevel | null
  tag: string | null
  show: ViewedFilter | null
}

export const EMPTY_FILTERS: LibraryFilters = { q: '', topic: null, role: null, level: null, tag: null, show: null }

export const TOPIC_ORDER: AcademyTopic[] = [
  'getting-started',
  'orders',
  'payments',
  'tables',
  'order-management',
  'back-office',
]

type ParamSource = URLSearchParams | Record<string, string | string[] | undefined>

function readParam(source: ParamSource, key: string): string {
  if (source instanceof URLSearchParams) return source.get(key) ?? ''
  const value = source[key]
  return (Array.isArray(value) ? value[0] : value) ?? ''
}

function oneOf<T extends string>(value: string, allowed: readonly T[]): T | null {
  return (allowed as readonly string[]).includes(value) ? (value as T) : null
}

/** Read filters from a URL query. Anything not recognised is dropped. */
export function parseFilters(source: ParamSource): LibraryFilters {
  const tag = readParam(source, 'tag').trim().toLowerCase()
  return {
    q: readParam(source, 'q').slice(0, 80),
    topic: oneOf(readParam(source, 'topic'), TOPIC_ORDER),
    role: oneOf(readParam(source, 'role'), ROLE_ORDER),
    level: oneOf(readParam(source, 'level'), LEVEL_ORDER),
    tag: /^[a-z0-9-]{1,40}$/.test(tag) ? tag : null,
    show: oneOf(readParam(source, 'show'), ['todo', 'done'] as const),
  }
}

/** The query string for a set of filters: "" or "?role=cashier&level=basics". */
export function filtersToQuery(filters: LibraryFilters): string {
  const params = new URLSearchParams()
  if (filters.q.trim()) params.set('q', filters.q.trim())
  if (filters.topic) params.set('topic', filters.topic)
  if (filters.role) params.set('role', filters.role)
  if (filters.level) params.set('level', filters.level)
  if (filters.tag) params.set('tag', filters.tag)
  if (filters.show) params.set('show', filters.show)
  const query = params.toString()
  return query ? `?${query}` : ''
}

export function sameFilters(a: LibraryFilters, b: LibraryFilters): boolean {
  return filtersToQuery(a) === filtersToQuery(b) && a.q === b.q
}

export function hasFilters(filters: LibraryFilters): boolean {
  return filtersToQuery(filters) !== ''
}

/* ── Search ───────────────────────────────────────────────── */

/** Lowercase and flatten punctuation without changing length, so match positions line up. */
export function normalize(text: string): string {
  return text.toLowerCase().replace(/[’‘`]/g, "'").replace(/[-/]/g, ' ')
}

/** Split what was typed into words to look for. "refunds" also looks for "refund". */
export function queryTerms(q: string): string[] {
  const words = normalize(q)
    .split(/[^a-z0-9']+/)
    .filter((word) => word.length > 0)
  return Array.from(new Set(words)).slice(0, 6)
}

/**
 * The word as typed, plus its stem, so "printer" finds "printing" and "tipping" finds "tip".
 * Matching is by word start, so a stem is enough.
 */
function variants(term: string): string[] {
  let stem = term
  if (term.length > 5 && term.endsWith('ing')) stem = term.slice(0, -3)
  else if (term.length > 4 && (term.endsWith('er') || term.endsWith('ed') || term.endsWith('es'))) stem = term.slice(0, -2)
  else if (term.length > 3 && term.endsWith('s')) stem = term.slice(0, -1)
  if (stem.length > 3 && stem[stem.length - 1] === stem[stem.length - 2]) stem = stem.slice(0, -1)
  return stem === term ? [term] : [term, stem]
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Matches a term at the start of a word, so "tip" finds "tips" but not "multiple".
 * Group 1 is the character before the word (no lookbehind: older iPhones lack it).
 */
function termPattern(term: string, flags = ''): RegExp {
  const body = variants(term).map(escapeRegExp).join('|')
  return new RegExp(`(^|[^a-z0-9])(?:${body})`, flags)
}

function has(text: string, term: string): boolean {
  return termPattern(term).test(normalize(text))
}

export interface SearchHit {
  entry: LibraryEntry
  score: number
  /** Why this guide matched, when the title and summary do not show it. */
  reason: { kind: 'step'; index: number; title: string } | { kind: 'tag'; tag: string } | null
}

const WEIGHT = { title: 12, tag: 7, summary: 5, stepTitle: 3, stepDetail: 1 }

/** Every term must appear somewhere in the guide. Best matches first, then library order. */
export function searchEntries(entries: LibraryEntry[], q: string): SearchHit[] {
  const terms = queryTerms(q)
  if (terms.length === 0) return entries.map((entry) => ({ entry, score: 0, reason: null }))

  const hits: SearchHit[] = []
  for (const entry of entries) {
    let score = 0
    let matchedAll = true
    let shownInHeading = true
    let tagHit: string | null = null
    let stepHit: number | null = null
    let stepHitInTitle = false

    for (const term of terms) {
      const inTitle = has(entry.title, term)
      const inSummary = has(entry.summary, term)
      const tag = entry.tags.find((candidate) => has(candidate, term)) ?? null
      const stepTitleIndex = entry.steps.findIndex((step) => has(step.title, term))
      const stepDetailIndex = entry.steps.findIndex((step) => has(step.detail, term))

      const best = Math.max(
        inTitle ? WEIGHT.title : 0,
        tag ? WEIGHT.tag : 0,
        inSummary ? WEIGHT.summary : 0,
        stepTitleIndex >= 0 ? WEIGHT.stepTitle : 0,
        stepDetailIndex >= 0 ? WEIGHT.stepDetail : 0,
      )
      if (best === 0) {
        matchedAll = false
        break
      }
      score += best
      if (!inTitle && !inSummary) {
        shownInHeading = false
        if (tag && !tagHit) tagHit = tag
        if (stepTitleIndex >= 0 && !stepHitInTitle) {
          stepHit = stepTitleIndex
          stepHitInTitle = true
        } else if (stepDetailIndex >= 0 && stepHit === null) {
          stepHit = stepDetailIndex
        }
      }
    }
    if (!matchedAll) continue

    let reason: SearchHit['reason'] = null
    if (!shownInHeading) {
      if (stepHit !== null) reason = { kind: 'step', index: stepHit, title: entry.steps[stepHit].title }
      else if (tagHit) reason = { kind: 'tag', tag: tagHit }
    }
    hits.push({ entry, score, reason })
  }

  return hits.sort((a, b) => b.score - a.score || entries.indexOf(a.entry) - entries.indexOf(b.entry))
}

/** Cut a text into matched and unmatched pieces, for highlighting what was searched. */
export function highlightParts(text: string, q: string): { text: string; match: boolean }[] {
  const terms = queryTerms(q)
  if (terms.length === 0) return [{ text, match: false }]
  const flat = normalize(text)
  const spans: [number, number][] = []
  for (const term of terms) {
    for (const found of flat.matchAll(termPattern(term, 'g'))) {
      spans.push([found.index + found[1].length, found.index + found[0].length])
    }
  }
  if (spans.length === 0) return [{ text, match: false }]
  spans.sort((a, b) => a[0] - b[0])

  const parts: { text: string; match: boolean }[] = []
  let cursor = 0
  for (const [start, end] of spans) {
    if (start < cursor) continue
    if (start > cursor) parts.push({ text: text.slice(cursor, start), match: false })
    parts.push({ text: text.slice(start, end), match: true })
    cursor = end
  }
  if (cursor < text.length) parts.push({ text: text.slice(cursor), match: false })
  return parts
}

/* ── Filters ──────────────────────────────────────────────── */

/** Null while the viewed marks have not been read from the device yet. */
export type ViewedSet = ReadonlySet<string> | null

function passes(entry: LibraryEntry, filters: LibraryFilters, viewed: ViewedSet, skip?: keyof LibraryFilters): boolean {
  if (skip !== 'topic' && filters.topic && entry.topic !== filters.topic) return false
  if (skip !== 'role' && filters.role && !entry.roles.includes(filters.role)) return false
  if (skip !== 'level' && filters.level && entry.level !== filters.level) return false
  if (skip !== 'tag' && filters.tag && !entry.tags.includes(filters.tag)) return false
  if (skip !== 'show' && filters.show && viewed) {
    if (filters.show === 'done' && !viewed.has(entry.slug)) return false
    if (filters.show === 'todo' && viewed.has(entry.slug)) return false
  }
  return true
}

/** Search, then apply every filter. */
export function findGuides(entries: LibraryEntry[], filters: LibraryFilters, viewed: ViewedSet): SearchHit[] {
  return searchEntries(entries, filters.q).filter((hit) => passes(hit.entry, filters, viewed))
}

/**
 * How many guides each option of one filter would show, with the search and the other
 * filters left as they are. Lets the page show honest counts and dim dead ends.
 */
export function countOptions<K extends 'topic' | 'role' | 'level' | 'tag' | 'show'>(
  entries: LibraryEntry[],
  filters: LibraryFilters,
  viewed: ViewedSet,
  key: K,
): Map<string, number> {
  const pool = searchEntries(entries, filters.q)
    .map((hit) => hit.entry)
    .filter((entry) => passes(entry, filters, viewed, key))
  const counts = new Map<string, number>()
  const bump = (value: string) => counts.set(value, (counts.get(value) ?? 0) + 1)
  for (const entry of pool) {
    if (key === 'topic') bump(entry.topic)
    else if (key === 'role') entry.roles.forEach(bump)
    else if (key === 'level') bump(entry.level)
    else if (key === 'tag') entry.tags.forEach(bump)
    else if (viewed) bump(viewed.has(entry.slug) ? 'done' : 'todo')
  }
  counts.set('', pool.length)
  return counts
}
