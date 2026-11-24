import Image from 'next/image'
import Link from 'next/link'
import HeaderProgress from './HeaderProgress'
import s from './academy.module.css'

export default function AcademyHeader({ slugs }: { slugs: string[] }) {
  return (
    <header className={s.top}>
      <a href="#academy-main" className={s.skip}>
        Skip to the guides
      </a>
      <div className={`${s.wrap} ${s.topInner}`}>
        <Link href="/academy" className={s.brand} aria-label="Till Academy, all guides">
          <Image
            src="/images/Primarylogo-till.png"
            alt=""
            width={60}
            height={60}
            className={s.brandLogo}
            priority
          />
          Academy
        </Link>
        <nav className={s.topNav} aria-label="Academy">
          <HeaderProgress slugs={slugs} />
          <Link href="/" className={s.topLink}>
            Till website
          </Link>
        </nav>
      </div>
    </header>
  )
}
