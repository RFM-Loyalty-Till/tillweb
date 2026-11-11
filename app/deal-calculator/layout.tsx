// The sales team's restaurant cost comparison. It is a tool, not a marketing
// page, so it runs on the Astryx design system and loads those styles for this
// route only. Unlisted: nothing links here and it is kept out of search results.
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@astryxdesign/core/reset.css'
import '@astryxdesign/core/astryx.css'
import '@astryxdesign/theme-neutral/theme.css'
import { Providers } from './providers'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'Restaurant Deal Calculator | RFM Loyalty',
  description: 'Compare a lower card rate elsewhere with one RFM Loyalty quotation.',
  robots: { index: false, follow: false },
}

export default function DealCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geist.variable} ${geistMono.variable}`}>
      <Providers>{children}</Providers>
    </div>
  )
}
