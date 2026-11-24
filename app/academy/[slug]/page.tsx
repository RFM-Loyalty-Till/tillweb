import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import GuidePlayer from '../../components/academy/GuidePlayer'
import GuideRow from '../../components/academy/GuideRow'
import ViewedToggle from '../../components/academy/ViewedToggle'
import s from '../../components/academy/academy.module.css'
import {
  ROLE_ORDER,
  adjacentGuides,
  forRoles,
  formatDate,
  formatLength,
  getAllGuides,
  getGuide,
  getTopic,
  guidePath,
  levelLabel,
  levelNote,
  relatedGuides,
  siteOrigin,
  roleLabel,
  spokenLength,
  stepCount,
  tagLabel,
  type AdjacentGuide,
} from '@/lib/academy'

type Params = Promise<{ slug: string }>

export const dynamicParams = false

export function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const guide = getGuide((await params).slug)
  if (!guide) return {}
  // Absolute page links need the live domain; leave them out when it is not known.
  const hasOrigin = Boolean(siteOrigin())
  return {
    title: `${guide.title} | Till Academy`,
    description: guide.summary,
    alternates: hasOrigin ? { canonical: guidePath(guide.slug) } : undefined,
    openGraph: {
      title: guide.title,
      description: guide.summary,
      type: 'article',
      siteName: 'Till Academy',
      url: hasOrigin ? guidePath(guide.slug) : undefined,
      modifiedTime: guide.updated,
      images: [{ url: guide.video.poster, width: 1280, height: 720, alt: guide.title }],
      videos: [{ url: guide.video.src, type: 'video/mp4', width: 1920, height: 1080 }],
    },
  }
}

function pagerLabel(neighbour: AdjacentGuide, direction: 'Previous' | 'Next'): string {
  const topic = getTopic(neighbour.guide.topic).name
  return neighbour.sameTopic ? `${direction} in ${topic}` : `${direction} topic: ${topic}`
}

export default async function GuidePage({ params }: { params: Params }) {
  const guide = getGuide((await params).slug)
  if (!guide) notFound()

  const topic = getTopic(guide.topic)
  const { previous, next } = adjacentGuides(guide.slug)
  const related = relatedGuides(guide)
  const roles = ROLE_ORDER.filter((role) => guide.roles.includes(role))

  return (
    <article className={s.wrap}>
      <nav className={s.crumbs} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/academy">Academy</Link>
          </li>
          <li>
            <Link href={`/academy?topic=${topic.slug}`}>{topic.name}</Link>
          </li>
        </ol>
      </nav>

      <header className={s.guideHead}>
        <div>
          <h1 className={s.guideTitle}>{guide.title}</h1>
          <p className={s.lead}>{guide.summary}</p>
          <ul className={s.facts}>
            <li>
              <span className={s.num} aria-hidden="true">
                {formatLength(guide.video.seconds)}
              </span>
              <span className={s.srOnly}>{spokenLength(guide.video.seconds)}</span>
            </li>
            <li>{stepCount(guide.steps.length)}</li>
            <li>{levelLabel[guide.level]}</li>
            <li>{forRoles(guide.roles)}</li>
          </ul>
        </div>
        <ViewedToggle slug={guide.slug} />
      </header>

      <GuidePlayer
        slug={guide.slug}
        title={guide.title}
        src={guide.video.src}
        poster={guide.video.poster}
        steps={guide.steps}
        next={next ? { slug: next.guide.slug, title: next.guide.title } : null}
      />

      <div className={s.blocks}>
        <section className={s.block} aria-labelledby="about">
          <h2 id="about" className={s.blockTitle}>
            About this task
          </h2>
          <div className={s.prose}>
            {guide.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {guide.goodToKnow && guide.goodToKnow.length > 0 && (
          <section className={s.block} aria-labelledby="good-to-know">
            <h2 id="good-to-know" className={s.blockTitle}>
              Good to know
            </h2>
            <dl className={s.notes}>
              {guide.goodToKnow.map((note) => (
                <div key={note.title}>
                  <dt>{note.title}</dt>
                  <dd>{note.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {guide.troubleshooting && guide.troubleshooting.length > 0 && (
          <section className={s.block} aria-labelledby="troubleshooting">
            <h2 id="troubleshooting" className={s.blockTitle}>
              If something goes wrong
            </h2>
            <dl className={s.notes}>
              {guide.troubleshooting.map((note) => (
                <div key={note.title}>
                  <dt>{note.title}</dt>
                  <dd>{note.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className={s.block} aria-labelledby="details">
          <h2 id="details" className={s.blockTitle}>
            Details
          </h2>
          <dl className={s.details}>
            <div>
              <dt>Topic</dt>
              <dd>
                <Link href={`/academy?topic=${topic.slug}`}>{topic.name}</Link>
              </dd>
            </div>
            <div>
              <dt>For</dt>
              <dd>
                {roles.map((role, index) => (
                  <span key={role}>
                    {index > 0 && ', '}
                    <Link href={`/academy?role=${role}`}>{roleLabel[role]}</Link>
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Level</dt>
              <dd>
                <Link href={`/academy?level=${guide.level}`}>{levelLabel[guide.level]}</Link>. {levelNote[guide.level]}
              </dd>
            </div>
            <div>
              <dt>Video</dt>
              <dd>
                <span className={s.num} aria-hidden="true">
                  {formatLength(guide.video.seconds)}
                </span>
                <span className={s.srOnly}>{spokenLength(guide.video.seconds)}</span>, no sound, captions on screen
              </dd>
            </div>
            <div>
              <dt>Last checked</dt>
              <dd>
                <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>, against Till CloudPOS
              </dd>
            </div>
            <div className={s.detailsTags}>
              <dt>Tags</dt>
              <dd>
                <ul className={s.chips}>
                  {guide.tags.map((tag) => (
                    <li key={tag}>
                      <Link href={`/academy?tag=${tag}`} className={s.chip}>
                        {tagLabel(tag)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </section>

        {related.length > 0 && (
          <section className={s.block} aria-labelledby="related">
            <h2 id="related" className={s.blockTitle}>
              Related guides
            </h2>
            <ul className={s.rows}>
              {related.map((item) => (
                <GuideRow
                  key={item.slug}
                  guide={{
                    slug: item.slug,
                    title: item.title,
                    summary: item.summary,
                    roles: item.roles,
                    level: item.level,
                    seconds: item.video.seconds,
                  }}
                />
              ))}
            </ul>
          </section>
        )}
      </div>

      <nav className={s.pager} aria-label="More guides">
        {previous && (
          <Link href={guidePath(previous.guide.slug)} className={s.pagerLink}>
            <span className={s.pagerLabel}>
              <ArrowLeft aria-hidden="true" />
              {pagerLabel(previous, 'Previous')}
            </span>
            <span className={s.pagerTitle}>{previous.guide.title}</span>
          </Link>
        )}
        {next && (
          <Link href={guidePath(next.guide.slug)} className={`${s.pagerLink} ${s.pagerNext}`}>
            <span className={s.pagerLabel}>
              {pagerLabel(next, 'Next')}
              <ArrowRight aria-hidden="true" />
            </span>
            <span className={s.pagerTitle}>{next.guide.title}</span>
          </Link>
        )}
      </nav>
    </article>
  )
}
