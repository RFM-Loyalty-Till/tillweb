'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import {
  formatLength,
  guidePath,
  guideThumb,
  levelLabel,
  listRoles,
  spokenLength,
} from '@/lib/academy/format'
import { highlightParts, type SearchHit } from '@/lib/academy/search'
import type { AcademyLevel, AcademyRole } from '@/lib/academy/types'
import { useViewed } from './viewedStore'
import s from './academy.module.css'

export interface GuideRowData {
  slug: string
  title: string
  summary: string
  roles: AcademyRole[]
  level: AcademyLevel
  seconds: number
}

function Highlight({ text, q }: { text: string; q?: string }) {
  if (!q) return <>{text}</>
  return (
    <>
      {highlightParts(text, q).map((part, index) =>
        part.match ? <mark key={index}>{part.text}</mark> : <span key={index}>{part.text}</span>,
      )}
    </>
  )
}

/** One guide in a list: picture of the screen, title, summary, who it is for, length, viewed mark. */
export default function GuideRow({
  guide,
  q,
  reason,
  headingLevel = 3,
}: {
  guide: GuideRowData
  q?: string
  reason?: SearchHit['reason']
  headingLevel?: 3 | 4
}) {
  const { ready, viewed } = useViewed()
  const isViewed = viewed.has(guide.slug)
  const Heading = headingLevel === 3 ? 'h3' : 'h4'

  return (
    <li className={s.row}>
      <span className={s.thumb}>
        <Image
          src={guideThumb(guide.slug)}
          alt=""
          width={640}
          height={400}
          sizes="(min-width: 64rem) 128px, (min-width: 40rem) 120px, 88px"
        />
      </span>
      <div className={s.rowText}>
        <Heading className={s.rowTitle}>
          <Link href={guidePath(guide.slug)} className={s.rowLink}>
            <Highlight text={guide.title} q={q} />
          </Link>
        </Heading>
        <p className={s.rowSummary}>
          <Highlight text={guide.summary} q={q} />
        </p>
        {reason?.kind === 'step' && (
          <p className={s.rowWhy}>
            <Link href={`${guidePath(guide.slug)}#step-${reason.index + 1}`}>
              Step {reason.index + 1}: <Highlight text={reason.title} q={q} />
            </Link>
          </p>
        )}
        {reason?.kind === 'tag' && (
          <p className={s.rowWhy}>
            <span>
              Tagged <Highlight text={reason.tag.replace(/-/g, ' ')} q={q} />
            </span>
          </p>
        )}
      </div>
      <p className={s.rowMeta}>
        <span className={s.rowLen}>
          <span aria-hidden="true">{formatLength(guide.seconds)}</span>
          <span className={s.srOnly}>{spokenLength(guide.seconds)}</span>
        </span>
        <span className={s.rowLevel}>{levelLabel[guide.level]}</span>
        <span className={s.rowRoles}>{listRoles(guide.roles)}</span>
      </p>
      <span className={s.mark} data-on={isViewed} data-ready={ready}>
        <Check aria-hidden="true" strokeWidth={3} />
        {ready && <span className={s.srOnly}>{isViewed ? 'Viewed' : 'Not viewed yet'}</span>}
      </span>
    </li>
  )
}
