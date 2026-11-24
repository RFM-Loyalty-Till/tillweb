'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useViewed } from './viewedStore'
import s from './academy.module.css'

/** Progress in the top bar of guide pages. The library shows the full checklist instead. */
export default function HeaderProgress({ slugs }: { slugs: string[] }) {
  const pathname = usePathname()
  const { ready, viewed } = useViewed()
  if (pathname === '/academy') return null

  const total = slugs.length
  const done = slugs.filter((slug) => viewed.has(slug)).length
  return (
    <Link href="/academy" className={s.topProgress}>
      <span className={s.topMeter} aria-hidden="true">
        <i style={{ width: `${ready ? (done / total) * 100 : 0}%` }} />
      </span>
      {ready ? `${done} of ${total} viewed` : `${total} guides`}
    </Link>
  )
}
