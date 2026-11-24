import Library from '../components/academy/Library'
import ProgressPanel from '../components/academy/ProgressPanel'
import s from '../components/academy/academy.module.css'
import { commonTags, getAllGuides, libraryEntries, parseFilters, topics, totalSeconds } from '@/lib/academy'

// The filters live in the address (?role=cashier&level=basics), and the page is rendered
// with them already applied, so a shared link opens on the right list straight away.
export default async function AcademyPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const initialFilters = parseFilters(await searchParams)
  const guides = getAllGuides()
  const minutes = Math.round(totalSeconds() / 60)

  return (
    <div className={s.wrap}>
      <div className={s.libHead}>
        <div>
          <h1 className={s.h1}>Till Academy</h1>
          <p className={s.lead}>
            Short videos that show each job on Till CloudPOS, with the steps written out underneath.
            <span className={s.leadMore}> Watch one when you need it, or work through all {guides.length}.</span>
          </p>
          <p className={s.libFacts}>
            {guides.length} guides · {minutes} minutes of video · no sound
          </p>
        </div>
        <ProgressPanel
          guides={guides.map((guide) => ({
            slug: guide.slug,
            title: guide.title,
            seconds: guide.video.seconds,
            topic: guide.topic,
          }))}
        />
      </div>

      <Library
        entries={libraryEntries()}
        topics={topics}
        tags={commonTags()}
        initialFilters={initialFilters}
      />
    </div>
  )
}
