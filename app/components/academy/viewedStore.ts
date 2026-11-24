'use client'

// Which guides this person has viewed. Kept in localStorage on the device: the Academy has
// no login. Every storage call is guarded, because private browsing and locked-down
// in-app browsers throw on access. When storage fails the marks live in memory for the visit.

import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'till-academy:viewed:v1'

export interface ViewedSnapshot {
  /** False on the server and during hydration, when the device has not been read yet. */
  ready: boolean
  viewed: ReadonlySet<string>
  /** False when the browser refuses storage, so marks will not survive closing the page. */
  saved: boolean
}

const SERVER_SNAPSHOT: ViewedSnapshot = { ready: false, viewed: new Set(), saved: true }

let snapshot: ViewedSnapshot | null = null
const listeners = new Set<() => void>()

function readDevice(): ViewedSnapshot {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed: unknown = raw ? JSON.parse(raw) : []
    const slugs = Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : []
    return { ready: true, viewed: new Set(slugs), saved: true }
  } catch {
    // Keep whatever was marked during this visit.
    return { ready: true, viewed: snapshot?.viewed ?? new Set(), saved: false }
  }
}

function getSnapshot(): ViewedSnapshot {
  if (!snapshot) snapshot = readDevice()
  return snapshot
}

function getServerSnapshot(): ViewedSnapshot {
  return SERVER_SNAPSHOT
}

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  // Another tab changed the marks.
  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== STORAGE_KEY) return
    snapshot = readDevice()
    emit()
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

function commit(viewed: Set<string>) {
  let saved = true
  try {
    if (viewed.size === 0) window.localStorage.removeItem(STORAGE_KEY)
    else window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(viewed)))
  } catch {
    saved = false
  }
  snapshot = { ready: true, viewed, saved }
  emit()
}

export function setViewed(slug: string, value: boolean) {
  const current = getSnapshot().viewed
  if (current.has(slug) === value) return
  const next = new Set(current)
  if (value) next.add(slug)
  else next.delete(slug)
  commit(next)
}

export function resetViewed() {
  commit(new Set())
}

export function useViewed(): ViewedSnapshot {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
