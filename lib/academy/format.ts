// Till Academy: labels and formatting. No guide content is imported here, so client
// components can use this file without pulling the guides into the browser bundle.

import type { AcademyLevel, AcademyRole } from './types'

export const ROLE_ORDER: AcademyRole[] = ['cashier', 'waiter', 'manager', 'owner']
export const LEVEL_ORDER: AcademyLevel[] = ['basics', 'everyday', 'advanced']

export const roleLabel: Record<AcademyRole, string> = {
  cashier: 'Cashier',
  waiter: 'Waiter',
  manager: 'Manager',
  owner: 'Owner',
}

const rolePlural: Record<AcademyRole, string> = {
  cashier: 'cashiers',
  waiter: 'waiters',
  manager: 'managers',
  owner: 'owners',
}

export const levelLabel: Record<AcademyLevel, string> = {
  basics: 'Basics',
  everyday: 'Everyday',
  advanced: 'Advanced',
}

/** What each level means, in the reader's terms. */
export const levelNote: Record<AcademyLevel, string> = {
  basics: 'Learn these on your first day.',
  everyday: 'You will use these on most shifts.',
  advanced: 'For managers and for setting up.',
}

function byRoleOrder(roles: AcademyRole[]): AcademyRole[] {
  return ROLE_ORDER.filter((role) => roles.includes(role))
}

/** "Cashier, Waiter" */
export function listRoles(roles: AcademyRole[]): string {
  return byRoleOrder(roles)
    .map((role) => roleLabel[role])
    .join(', ')
}

/** "For cashiers and waiters" */
export function forRoles(roles: AcademyRole[]): string {
  const names = byRoleOrder(roles).map((role) => rolePlural[role])
  if (names.length === 0) return 'For everyone'
  if (names.length === 1) return `For ${names[0]}`
  return `For ${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

/** A point in a video, rounded down: 23.6 becomes "0:23". */
export function formatTimestamp(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds))
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`
}

/** The length of a video, rounded to the nearest second: 34.6 becomes "0:35". */
export function formatLength(seconds: number): string {
  return formatTimestamp(Math.round(seconds))
}

/** The same length for screen readers: "35 seconds", "1 minute 12 seconds". */
export function spokenLength(seconds: number): string {
  const whole = Math.round(seconds)
  const minutes = Math.floor(whole / 60)
  const rest = whole % 60
  const parts: string[] = []
  if (minutes > 0) parts.push(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`)
  if (rest > 0 || minutes === 0) parts.push(`${rest} ${rest === 1 ? 'second' : 'seconds'}`)
  return parts.join(' ')
}

/** A total running time in whole minutes: "17 min". */
export function formatMinutes(seconds: number): string {
  return `${Math.max(1, Math.round(seconds / 60))} min`
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** "2026-11-24" becomes "24 November 2026". Built by hand so server and browser agree. */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  if (!year || !month || !day) return iso
  return `${day} ${MONTHS[month - 1]} ${year}`
}

/** Tags are stored as 'pay-later'; show them as 'pay later'. */
export function tagLabel(tag: string): string {
  return tag.replace(/-/g, ' ')
}

export function guideCount(count: number): string {
  return `${count} ${count === 1 ? 'guide' : 'guides'}`
}

export function stepCount(count: number): string {
  return `${count} ${count === 1 ? 'step' : 'steps'}`
}

export function guidePath(slug: string): string {
  return `/academy/${slug}`
}

/** A clean crop of the screen the guide is about, used in the library list. */
export function guideThumb(slug: string): string {
  return `/academy/thumbs/${slug}.jpg`
}
