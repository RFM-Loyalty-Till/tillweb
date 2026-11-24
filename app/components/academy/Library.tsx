'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import {
  LEVEL_ORDER,
  ROLE_ORDER,
  formatMinutes,
  guideCount,
  levelLabel,
  roleLabel,
  tagLabel,
} from '@/lib/academy/format'
import {
  EMPTY_FILTERS,
  countOptions,
  filtersToQuery,
  findGuides,
  hasFilters,
  parseFilters,
  sameFilters,
  type LibraryEntry,
  type LibraryFilters,
  type ViewedFilter,
} from '@/lib/academy/search'
import type { AcademyLevel, AcademyRole, AcademyTopic, AcademyTopicInfo } from '@/lib/academy/types'
import GuideRow from './GuideRow'
import { useViewed } from './viewedStore'
import s from './academy.module.css'

const VIEWED_OPTIONS: { value: ViewedFilter; label: string }[] = [
  { value: 'todo', label: 'Not viewed' },
  { value: 'done', label: 'Viewed' },
]

type CopyState = 'idle' | 'copied' | 'failed'

export default function Library({
  entries,
  topics,
  tags,
  initialFilters,
}: {
  entries: LibraryEntry[]
  topics: AcademyTopicInfo[]
  /** Tags offered as chips: the ones shared by several guides. */
  tags: string[]
  initialFilters: LibraryFilters
}) {
  const [filters, setFilters] = useState<LibraryFilters>(initialFilters)
  const [copy, setCopy] = useState<CopyState>('idle')
  const searchRef = useRef<HTMLInputElement>(null)
  const { ready, viewed: viewedSet } = useViewed()
  const viewed = ready ? viewedSet : null

  // The address bar is the shareable copy of the filters. Follow it when the visitor moves
  // through history, and write to it (without adding history entries) when a filter changes.
  useEffect(() => {
    const fromUrl = () => {
      const next = parseFilters(new URLSearchParams(window.location.search))
      setFilters((current) => (sameFilters(current, next) ? current : next))
    }
    fromUrl()
    window.addEventListener('popstate', fromUrl)
    return () => window.removeEventListener('popstate', fromUrl)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const url = `${window.location.pathname}${filtersToQuery(filters)}`
      if (url === `${window.location.pathname}${window.location.search}`) return
      try {
        window.history.replaceState(null, '', url)
      } catch {
        // Some browsers limit how often the address can change. The filters still work.
      }
    }, 250)
    return () => window.clearTimeout(timer)
  }, [filters])

  const set = (patch: Partial<LibraryFilters>) => {
    setCopy('idle')
    setFilters((current) => ({ ...current, ...patch }))
  }
  const toggle = <K extends 'topic' | 'role' | 'level' | 'tag' | 'show'>(key: K, value: LibraryFilters[K]) =>
    set({ [key]: filters[key] === value ? null : value } as Partial<LibraryFilters>)

  const hits = useMemo(() => findGuides(entries, filters, viewed), [entries, filters, viewed])
  const counts = useMemo(
    () => ({
      topic: countOptions(entries, filters, viewed, 'topic'),
      role: countOptions(entries, filters, viewed, 'role'),
      level: countOptions(entries, filters, viewed, 'level'),
      tag: countOptions(entries, filters, viewed, 'tag'),
      show: countOptions(entries, filters, viewed, 'show'),
    }),
    [entries, filters, viewed],
  )

  const query = filters.q.trim()
  const filtered = hasFilters(filters)
  const tagChips = filters.tag && !tags.includes(filters.tag) ? [filters.tag, ...tags] : tags
  const topicName = (slug: AcademyTopic) => topics.find((topic) => topic.slug === slug)?.name ?? slug

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}${filtersToQuery(filters)}`
    try {
      await navigator.clipboard.writeText(url)
      setCopy('copied')
    } catch {
      setCopy('failed')
    }
  }

  const clearAll = () => {
    set(EMPTY_FILTERS)
    searchRef.current?.focus()
  }

  const countOf = (map: Map<string, number>, key: string) => map.get(key) ?? 0
  // An option that would show nothing is switched off, unless it is the one already chosen.
  const isDeadEnd = (key: 'topic' | 'role' | 'level' | 'show', value: string) =>
    countOf(counts[key], value) === 0 && filters[key] !== value

  return (
    <div className={s.lib}>
      <div className={s.rail}>
        <form
          className={s.search}
          role="search"
          action="/academy"
          method="get"
          onSubmit={(event) => {
            event.preventDefault()
            searchRef.current?.blur()
          }}
        >
          <label htmlFor="academy-search" className={s.srOnly}>
            Search guides
          </label>
          <Search className={s.searchIcon} aria-hidden="true" />
          <input
            ref={searchRef}
            id="academy-search"
            className={s.searchInput}
            type="search"
            name="q"
            value={filters.q}
            onChange={(event) => set({ q: event.target.value })}
            onFocus={() => {
              // On phones the keyboard covers half the screen. Bring the search box to the top
              // so the results show under it while typing.
              if (window.matchMedia('(max-width: 63.99rem)').matches) {
                searchRef.current?.form?.scrollIntoView({ block: 'start' })
              }
            }}
            placeholder="Search guides"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="search"
            maxLength={80}
          />
          {filters.q && (
            <button
              type="button"
              className={s.searchClear}
              aria-label="Clear search"
              onClick={() => {
                set({ q: '' })
                searchRef.current?.focus()
              }}
            >
              <X aria-hidden="true" size={18} />
            </button>
          )}
        </form>

        {/* Phones and tablets */}
        <div className={s.selects}>
          <select
            className={s.select}
            aria-label="Topic"
            data-on={filters.topic !== null}
            value={filters.topic ?? ''}
            onChange={(event) => set({ topic: (event.target.value || null) as AcademyTopic | null })}
          >
            <option value="">All topics</option>
            {topics.map((topic) => (
              <option key={topic.slug} value={topic.slug} disabled={isDeadEnd('topic', topic.slug)}>
                {`${topic.name}${filters.topic === topic.slug ? '' : ` (${countOf(counts.topic, topic.slug)})`}`}
              </option>
            ))}
          </select>
          <select
            className={s.select}
            aria-label="Role"
            data-on={filters.role !== null}
            value={filters.role ?? ''}
            onChange={(event) => set({ role: (event.target.value || null) as AcademyRole | null })}
          >
            <option value="">All roles</option>
            {ROLE_ORDER.map((role) => (
              <option key={role} value={role} disabled={isDeadEnd('role', role)}>
                {`${roleLabel[role]}${filters.role === role ? '' : ` (${countOf(counts.role, role)})`}`}
              </option>
            ))}
          </select>
          <select
            className={s.select}
            aria-label="Level"
            data-on={filters.level !== null}
            value={filters.level ?? ''}
            onChange={(event) => set({ level: (event.target.value || null) as AcademyLevel | null })}
          >
            <option value="">All levels</option>
            {LEVEL_ORDER.map((level) => (
              <option key={level} value={level} disabled={isDeadEnd('level', level)}>
                {`${levelLabel[level]}${filters.level === level ? '' : ` (${countOf(counts.level, level)})`}`}
              </option>
            ))}
          </select>
          <select
            className={s.select}
            aria-label="Viewed or not"
            data-on={filters.show !== null}
            value={filters.show ?? ''}
            onChange={(event) => set({ show: (event.target.value || null) as ViewedFilter | null })}
          >
            <option value="">Viewed or not</option>
            {VIEWED_OPTIONS.map((option) => (
              <option key={option.value} value={option.value} disabled={ready && isDeadEnd('show', option.value)}>
                {`${option.label}${ready && filters.show !== option.value ? ` (${countOf(counts.show, option.value)})` : ''}`}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop */}
        <div className={s.railGroups}>
          <div className={s.group} role="group" aria-labelledby="filter-topic">
            <p id="filter-topic" className={s.groupLabel}>
              Topic
            </p>
            <ul className={s.options}>
              {topics.map((topic) => {
                const count = countOf(counts.topic, topic.slug)
                return (
                  <li key={topic.slug}>
                    <button
                      type="button"
                      className={s.option}
                      aria-pressed={filters.topic === topic.slug}
                      disabled={count === 0 && filters.topic !== topic.slug}
                      onClick={() => toggle('topic', topic.slug)}
                    >
                      <span>{topic.name}</span>
                      <span className={s.optionCount}>
                        {count}
                        <span className={s.srOnly}> guides</span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className={s.group} role="group" aria-labelledby="filter-role">
            <p id="filter-role" className={s.groupLabel}>
              Role
            </p>
            <ul className={s.chips}>
              {ROLE_ORDER.map((role) => (
                <li key={role}>
                  <button
                    type="button"
                    className={s.chip}
                    aria-pressed={filters.role === role}
                    disabled={countOf(counts.role, role) === 0 && filters.role !== role}
                    onClick={() => toggle('role', role)}
                  >
                    {roleLabel[role]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.group} role="group" aria-labelledby="filter-level">
            <p id="filter-level" className={s.groupLabel}>
              Level
            </p>
            <ul className={s.chips}>
              {LEVEL_ORDER.map((level) => (
                <li key={level}>
                  <button
                    type="button"
                    className={s.chip}
                    aria-pressed={filters.level === level}
                    disabled={countOf(counts.level, level) === 0 && filters.level !== level}
                    onClick={() => toggle('level', level)}
                  >
                    {levelLabel[level]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.group} role="group" aria-labelledby="filter-viewed">
            <p id="filter-viewed" className={s.groupLabel}>
              Your progress
            </p>
            <ul className={s.chips}>
              {VIEWED_OPTIONS.map((option) => (
                <li key={option.value}>
                  <button
                    type="button"
                    className={s.chip}
                    aria-pressed={filters.show === option.value}
                    disabled={ready && countOf(counts.show, option.value) === 0 && filters.show !== option.value}
                    onClick={() => toggle('show', option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={s.results}>
        <div className={s.tagBar} role="group" aria-labelledby="filter-tags">
          <p id="filter-tags" className={s.tagBarLabel}>
            Tags
          </p>
          <ul className={s.chips}>
            {tagChips.map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  className={s.chip}
                  aria-pressed={filters.tag === tag}
                  disabled={countOf(counts.tag, tag) === 0 && filters.tag !== tag}
                  onClick={() => toggle('tag', tag)}
                >
                  {tagLabel(tag)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.status}>
          <p role="status">
            {filtered
              ? `${hits.length} of ${guideCount(entries.length)}${query ? ` for “${query}”` : ''}`
              : `${guideCount(entries.length)}, in the order to learn them`}
          </p>
          {filtered && (
            <div className={s.statusActions}>
              {hits.length > 0 && (
                <button type="button" className={s.textBtn} onClick={copyLink}>
                  <span aria-live="polite">
                    {copy === 'copied'
                      ? 'Link copied'
                      : copy === 'failed'
                        ? 'Copy the address from your browser'
                        : 'Copy link to this list'}
                  </span>
                </button>
              )}
              <button type="button" className={s.textBtn} onClick={clearAll}>
                Clear all
              </button>
            </div>
          )}
        </div>

        {hits.length === 0 ? (
          <div className={s.empty}>
            <h2 className={s.h2}>No guides match</h2>
            <p>
              {query
                ? `Nothing matches “${query}”${filtersToQuery({ ...filters, q: '' }) ? ' with the filters you chose' : ''}. Try one plain word, such as refund, split or table.`
                : filters.show === 'todo'
                  ? 'You have viewed every guide in this list.'
                  : 'No guide fits every filter you chose. Remove one to see more.'}
            </p>
            <div className={s.emptyActions}>
              {query && filtersToQuery({ ...filters, q: '' }) !== '' && (
                <button type="button" className={s.btn} onClick={() => set({ ...EMPTY_FILTERS, q: filters.q })}>
                  Search all guides
                </button>
              )}
              <button type="button" className={`${s.btn} ${s.btnSolid}`} onClick={clearAll}>
                Show all {entries.length} guides
              </button>
            </div>
          </div>
        ) : query ? (
          // A search: best match first.
          <div className={s.flat}>
            <h2 className={s.srOnly}>Search results</h2>
            <ol className={s.rows}>
              {hits.map((hit) => (
                <GuideRow key={hit.entry.slug} guide={hit.entry} q={query} reason={hit.reason} />
              ))}
            </ol>
          </div>
        ) : (
          // Browsing: grouped by topic, in learning order.
          topics.map((topic) => {
            const inTopic = hits.filter((hit) => hit.entry.topic === topic.slug)
            if (inTopic.length === 0) return null
            const seconds = inTopic.reduce((sum, hit) => sum + hit.entry.seconds, 0)
            return (
              <section key={topic.slug} className={s.topic} aria-labelledby={`topic-${topic.slug}`}>
                <div className={s.topicHead}>
                  <h2 id={`topic-${topic.slug}`} className={s.h2}>
                    {topicName(topic.slug)}
                  </h2>
                  <p className={s.topicMeta}>
                    {guideCount(inTopic.length)} · {formatMinutes(seconds)}
                  </p>
                </div>
                <p className={s.topicNote}>{topic.description}</p>
                <ol className={s.rows}>
                  {inTopic.map((hit) => (
                    <GuideRow key={hit.entry.slug} guide={hit.entry} />
                  ))}
                </ol>
              </section>
            )
          })
        )}
      </div>
    </div>
  )
}
