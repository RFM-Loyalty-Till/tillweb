import Link from 'next/link'
import s from './academy.module.css'

export default function AcademyFooter() {
  return (
    <footer className={s.foot}>
      <div className={`${s.wrap} ${s.footInner}`}>
        <p className={s.footNote}>
          <strong>Till Academy</strong>
          Videos and written guides for Till CloudPOS. Your viewed marks are kept in this browser, on this
          device, and are not sent to Till.
        </p>
        <ul className={s.footLinks}>
          <li>
            <Link href="/academy">All guides</Link>
          </li>
          <li>
            <Link href="/knowledge-base">Knowledge Base</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/">Till website</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
