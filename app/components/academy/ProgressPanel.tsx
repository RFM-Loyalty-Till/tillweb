'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { formatLength, guidePath } from '@/lib/academy/format'
import type { AcademyTopic } from '@/lib/academy/types'
import { resetViewed, useViewed } from './viewedStore'
import s from './academy.module.css'

interface ProgressGuide {
  slug: string
  title: string
  seconds: number
  topic: AcademyTopic
}

/**
 * The checklist, at the top of the library: how many guides are viewed, one segment per
 * guide grouped by topic, the next guide to watch, and the finished state with a reset.
 */
export default function ProgressPanel({ guides }: { guides: ProgressGuide[] }) {
  const { ready, viewed, saved } = useViewed()
  const [confirming, setConfirming] = useState(false)

  const total = guides.length
  const done = guides.filter((guide) => viewed.has(guide.slug)).length
  const next = guides.find((guide) => !viewed.has(guide.slug))
  const complete = ready && done === total

  const groups: ProgressGuide[][] = []
  for (const guide of guides) {
    const last = groups[groups.length - 1]
    if (last && last[0].topic === guide.topic) last.push(guide)
    else groups.push([guide])
  }

  const countText = !ready ? `${total} guides to view` : complete ? `All ${total} guides viewed` : `${done} of ${total} viewed`

  return (
    <section className={s.progress} aria-label="Your progress">
      <div className={s.progressLine}>
        <p className={complete ? s.doneTitle : s.progressCount}>{countText}</p>
        {ready && done > 0 && !confirming && (
          <button type="button" className={s.textBtn} onClick={() => setConfirming(true)}>
            {complete ? 'Start again' : 'Reset'}
          </button>
        )}
      </div>

      <div className={s.meter} role="img" aria-label={ready ? `${done} of ${total} guides viewed` : `${total} guides`}>
        {groups.map((group) => (
          <span key={group[0].topic} className={s.meterGroup} style={{ flex: group.length }}>
            {group.map((guide) => (
              <span key={guide.slug} className={s.meterSeg} data-on={ready && viewed.has(guide.slug)} />
            ))}
          </span>
        ))}
      </div>

      {complete ? (
        <p className={s.doneText}>
          You have seen every guide. They stay here for when you need to check a step.
        </p>
      ) : (
        next && (
          <Link href={guidePath(next.slug)} className={s.nextUp}>
            <span className={s.nextLabel}>{done === 0 ? 'Start here' : 'Next for you'}</span>
            <span className={s.nextTitle}>{next.title}</span>
            <span className={s.nextGo}>
              <span className={s.num}>{formatLength(next.seconds)}</span>
              <ArrowRight aria-hidden="true" size={16} />
            </span>
          </Link>
        )
      )}

      {ready && !saved && (
        <p className={s.progressNote}>
          This browser is not saving your viewed marks. They will clear when you close the page.
        </p>
      )}

      <div aria-live="polite">
        {confirming && (
          <div className={s.confirm}>
            <p>Clear the viewed marks on this device?</p>
            <button
              type="button"
              className={s.textBtn}
              onClick={() => {
                resetViewed()
                setConfirming(false)
              }}
            >
              Clear marks
            </button>
            <button type="button" className={s.textBtn} onClick={() => setConfirming(false)}>
              Keep them
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
