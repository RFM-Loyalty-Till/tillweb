// Till Academy: how-to videos and written guides for Till CloudPOS. A reference tool for
// restaurant staff, so it has its own quiet chrome instead of the marketing header and footer.
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import AcademyHeader from '../components/academy/AcademyHeader'
import AcademyFooter from '../components/academy/AcademyFooter'
import s from '../components/academy/academy.module.css'
import { getAllGuides, siteOrigin } from '@/lib/academy'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: siteOrigin(),
  title: 'Till Academy: how to use Till CloudPOS',
  description:
    'Short how-to videos for Till CloudPOS, each with the steps written out. Take orders, take payment, run your tables and close your shift.',
  openGraph: {
    title: 'Till Academy',
    description: 'Short how-to videos for Till CloudPOS, each with the steps written out.',
    type: 'website',
    siteName: 'Till Academy',
  },
}

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  const slugs = getAllGuides().map((guide) => guide.slug)
  return (
    <div className={`${s.shell} ${geist.variable}`}>
      <AcademyHeader slugs={slugs} />
      <main id="academy-main" className={s.main}>
        {children}
      </main>
      <AcademyFooter />
    </div>
  )
}
