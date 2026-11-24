'use client'

import { Check } from 'lucide-react'
import { setViewed, useViewed } from './viewedStore'
import s from './academy.module.css'

/** "Mark as viewed" on a guide. Also set automatically when the video plays to the end. */
export default function ViewedToggle({ slug }: { slug: string }) {
  const { viewed } = useViewed()
  const isViewed = viewed.has(slug)
  return (
    <button
      type="button"
      className={`${s.btn} ${s.toggle}`}
      aria-pressed={isViewed}
      onClick={() => setViewed(slug, !isViewed)}
    >
      <span className={s.toggleRing} aria-hidden="true">
        <Check strokeWidth={3} />
      </span>
      {isViewed ? 'Viewed' : 'Mark as viewed'}
    </button>
  )
}
