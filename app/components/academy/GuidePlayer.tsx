'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SkipBack, SkipForward } from 'lucide-react'
import { formatTimestamp, guidePath, stepCount } from '@/lib/academy/format'
import type { AcademyStep } from '@/lib/academy/types'
import { setViewed } from './viewedStore'
import s from './academy.module.css'

/** The step that is on screen at a given time, or -1 during the opening title. */
function stepAt(steps: AcademyStep[], time: number): number {
  let index = -1
  for (let i = 0; i < steps.length; i += 1) {
    if (time + 0.05 >= steps[i].at) index = i
  }
  return index
}

/**
 * Skipping keeps a paused video paused, except before the first play: until then the
 * browser shows the poster, so a skip would look as if nothing happened.
 */
function keepsPlaying(video: HTMLVideoElement): boolean {
  return !video.paused || video.played.length === 0
}

/**
 * The video and its steps as one unit. The steps are the video's chapters: tapping one
 * plays from that point, and the step on screen is marked while the video plays.
 * The browser's own controls are used, so fullscreen and scrubbing work as people expect.
 */
export default function GuidePlayer({
  slug,
  title,
  src,
  poster,
  steps,
  next,
}: {
  slug: string
  title: string
  src: string
  poster: string
  steps: AcademyStep[]
  next: { slug: string; title: string } | null
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(-1)
  const [ended, setEnded] = useState(false)
  const [failed, setFailed] = useState(false)

  const seek = useCallback(
    (index: number, play: boolean) => {
      const video = videoRef.current
      const step = steps[index]
      if (!video || !step) return
      const jump = () => {
        try {
          video.currentTime = step.at
        } catch {
          // Not seekable yet; the video will start from the beginning.
        }
      }
      if (video.readyState >= 1) jump()
      else video.addEventListener('loadedmetadata', jump, { once: true })
      setActive(index)
      setEnded(false)
      // Called straight from the tap, so phones allow it.
      if (play) video.play().catch(() => {})
    },
    [steps],
  )

  // A link to "#step-4" (from search results) opens the video at that step.
  useEffect(() => {
    const fromHash = () => {
      const match = /^#step-(\d+)$/.exec(window.location.hash)
      if (!match) return
      const index = Number(match[1]) - 1
      if (index >= 0 && index < steps.length) seek(index, false)
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [seek, steps.length])

  const onTime = () => {
    const video = videoRef.current
    if (!video || video.ended) return
    setActive(stepAt(steps, video.currentTime))
  }

  const previous = () => {
    const video = videoRef.current
    if (!video || active < 0) return
    // Like a music player: first back to the start of this step, then to the one before.
    const intoStep = video.currentTime - steps[active].at
    seek(intoStep > 2 || active === 0 ? active : active - 1, keepsPlaying(video))
  }
  const forward = () => {
    const video = videoRef.current
    if (!video) return
    seek(Math.min(active + 1, steps.length - 1), keepsPlaying(video))
  }

  const retry = () => {
    setFailed(false)
    videoRef.current?.load()
  }

  return (
    <div className={s.player}>
      <div className={s.stage}>
        <div className={s.videoBox}>
          <video
            ref={videoRef}
            className={s.video}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            width={1920}
            height={1080}
            aria-label={`Video: ${title}. No sound.`}
            onTimeUpdate={onTime}
            onSeeked={onTime}
            onPlay={() => setEnded(false)}
            onEnded={() => {
              setEnded(true)
              setViewed(slug, true)
            }}
            onError={() => setFailed(true)}
          >
            <source src={src} type="video/mp4" onError={() => setFailed(true)} />
          </video>
          {failed && (
            <div className={s.videoError} role="alert">
              <p>The video did not load. Check your connection and try again. The written steps cover the same task.</p>
              <button type="button" className={s.btn} onClick={retry}>
                Try again
              </button>
            </div>
          )}
        </div>

        <div className={s.strip}>
          <button
            type="button"
            className={s.stripBtn}
            onClick={previous}
            disabled={active < 0}
            aria-label="Back one step"
          >
            <SkipBack aria-hidden="true" />
          </button>
          <p className={s.stripText}>
            {ended ? (
              <>
                <span className={s.stripCount}>Marked as viewed</span>
                <span className={s.stripTitle}>
                  {next ? <Link href={guidePath(next.slug)}>Next: {next.title}</Link> : 'That was the last guide'}
                </span>
              </>
            ) : active >= 0 ? (
              <>
                <span className={s.stripCount}>
                  Step {active + 1} of {steps.length}
                </span>
                <span className={s.stripTitle}>{steps[active].title}</span>
              </>
            ) : (
              <>
                <span className={s.stripCount}>{stepCount(steps.length)} · no sound</span>
                <span className={s.stripTitle}>First: {steps[0]?.title ?? title}</span>
              </>
            )}
          </p>
          <button
            type="button"
            className={s.stripBtn}
            onClick={forward}
            disabled={active >= steps.length - 1}
            aria-label="Forward one step"
          >
            <SkipForward aria-hidden="true" />
          </button>
        </div>
      </div>

      <section aria-labelledby="guide-steps">
        <div className={s.stepsHead}>
          <h2 id="guide-steps" className={s.h2}>
            Steps
          </h2>
        </div>
        <p className={s.stepsHint}>Tap a step to play the video from that point.</p>
        <ol className={s.stepList}>
          {steps.map((step, index) => (
            <li key={step.at} id={`step-${index + 1}`} className={s.step}>
              <button
                type="button"
                className={s.stepBtn}
                aria-current={index === active && !ended ? 'step' : undefined}
                onClick={() => seek(index, true)}
              >
                <span className={s.stepNum} aria-hidden="true">
                  {index + 1}
                </span>
                <span>
                  <span className={s.stepTitle}>
                    <span className={s.srOnly}>Step {index + 1}: </span>
                    {step.title}
                  </span>
                  <span className={s.stepDetail}>{step.detail}</span>
                </span>
                <span className={s.stepTime}>
                  <span className={s.srOnly}>Plays from </span>
                  {formatTimestamp(step.at)}
                </span>
              </button>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
