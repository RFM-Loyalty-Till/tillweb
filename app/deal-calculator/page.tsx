'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@astryxdesign/core/Button'
import { Collapsible } from '@astryxdesign/core/Collapsible'
import { Switch } from '@astryxdesign/core/Switch'
import { TextInput } from '@astryxdesign/core/TextInput'
import {
  DEFAULTS,
  LINES,
  aed,
  compute,
  isVisible,
  pct,
  rowName,
  summary,
  type BoxId,
  type LineId,
  type Side,
  type State,
} from './calc'
import s from './calc.module.css'

const STORE_KEY = 'dealCalculator.v7'
const SIDES: Side[] = ['rfm', 'ext']

// Every typed field is kept as text so a half-typed "1." survives; numbers are derived.
type Fields = Record<string, string>

function toFields(st: State): Fields {
  const f: Fields = {
    sales: st.sales.toLocaleString('en-US'),
    dshare: String(st.dshare),
  }
  for (const k of SIDES) {
    f[`rate-${k}`] = String(st.rate[k])
    f[`drate-${k}`] = String(st.drate[k])
  }
  for (const l of LINES) for (const k of SIDES) f[`${l.id}-${k}`] = String(st.price[l.id][k])
  return f
}

const num = (v: string | undefined) => {
  const n = Number(String(v ?? '').replace(/,/g, ''))
  return Number.isFinite(n) && n >= 0 ? n : 0
}
const cleanDecimal = (raw: string) => {
  const t = raw.replace(/[^\d.]/g, '')
  const i = t.indexOf('.')
  return i < 0 ? t : t.slice(0, i + 1) + t.slice(i + 1).replace(/\./g, '')
}
const cleanAmount = (raw: string) => {
  const d = raw.replace(/\D/g, '').replace(/^0+(?=\d)/, '').slice(0, 10)
  return d ? Number(d).toLocaleString('en-US') : ''
}

/** Astryx text field tuned for numbers: numeric keypad on phones, optional AED prefix. */
function NumberField(props: {
  id: string
  label: string
  value: string
  onChange: (id: string, value: string) => void
  prefix?: string
  whole?: boolean
  disabled?: boolean
  size?: 'md' | 'lg'
}) {
  const { id, label, value, onChange, prefix, whole, disabled, size = 'md' } = props
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.inputMode = whole ? 'numeric' : 'decimal'
    ref.current.id = id
  }, [id, whole])
  return (
    <TextInput
      ref={ref}
      label={label}
      value={value}
      size={size}
      width="100%"
      isDisabled={disabled}
      autoComplete="off"
      startIcon={prefix ? <span className={s.prefix}>{prefix}</span> : undefined}
      onChange={(v) => onChange(id, whole ? cleanAmount(v) : cleanDecimal(v))}
    />
  )
}

function StepButtons(props: { what: string; onStep: (delta: number) => void; disabled?: boolean; atMin?: boolean }) {
  const { what, onStep, disabled, atMin } = props
  return (
    <div className={s.steps}>
      <Button
        label={`Lower ${what}`}
        isIconOnly
        size="md"
        variant="secondary"
        icon={<span aria-hidden>−</span>}
        isDisabled={disabled || atMin}
        onClick={() => onStep(-1)}
      />
      <Button
        label={`Raise ${what}`}
        isIconOnly
        size="md"
        variant="secondary"
        icon={<span aria-hidden>+</span>}
        isDisabled={disabled}
        onClick={() => onStep(1)}
      />
    </div>
  )
}

export default function DealCalculatorPage() {
  const [f, setF] = useState<Fields>(() => toFields(DEFAULTS))
  const [devices, setDevices] = useState(DEFAULTS.devices)
  const [screens, setScreens] = useState(DEFAULTS.screens)
  const [on, setOn] = useState<Record<BoxId, boolean>>(DEFAULTS.on)
  const [name, setName] = useState('')
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle')
  const [today, setToday] = useState('')
  const loaded = useRef(false)

  // The rep's own rates and prices are remembered on this device; the restaurant's
  // card sales and the competing offer start fresh on every visit.
  useEffect(() => {
    setToday(new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORE_KEY) || 'null')
      if (saved && typeof saved === 'object') {
        setF((prev) => {
          const next = { ...prev }
          for (const key of Object.keys(saved)) {
            if (key in next && typeof saved[key] === 'number' && saved[key] >= 0) next[key] = String(saved[key])
          }
          return next
        })
      }
    } catch {
      /* private mode: nothing remembered */
    }
    loaded.current = true
  }, [])

  const state: State = useMemo(() => {
    const price = {} as State['price']
    for (const l of LINES) price[l.id] = { rfm: num(f[`${l.id}-rfm`]), ext: num(f[`${l.id}-ext`]) }
    return {
      sales: num(f.sales),
      rate: { rfm: num(f['rate-rfm']), ext: num(f['rate-ext']) },
      drate: { rfm: num(f['drate-rfm']), ext: num(f['drate-ext']) },
      dshare: Math.min(100, num(f.dshare)),
      devices,
      screens,
      on,
      price,
    }
  }, [f, devices, screens, on])

  const r = useMemo(() => compute(state), [state])

  useEffect(() => {
    if (!loaded.current) return
    try {
      const keep: Record<string, number> = { 'rate-rfm': state.rate.rfm, 'drate-rfm': state.drate.rfm }
      for (const l of LINES) for (const k of SIDES) keep[`${l.id}-${k}`] = state.price[l.id][k]
      window.localStorage.setItem(STORE_KEY, JSON.stringify(keep))
    } catch {
      /* ignore */
    }
  }, [state])

  const set = useCallback((id: string, value: string) => setF((prev) => ({ ...prev, [id]: value })), [])
  const stepRate = (id: string) => (dir: number) =>
    setF((prev) => ({ ...prev, [id]: String(Math.max(0, Math.round((num(prev[id]) + dir * 0.05) * 100) / 100)) }))

  const onReset = () => {
    try {
      window.localStorage.removeItem(STORE_KEY)
    } catch {
      /* ignore */
    }
    setF(toFields(DEFAULTS))
    setDevices(DEFAULTS.devices)
    setScreens(DEFAULTS.screens)
    setOn(DEFAULTS.on)
    setName('')
  }

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary(state, r, name.trim()))
      setCopied('done')
    } catch {
      setCopied('failed')
    }
    window.setTimeout(() => setCopied('idle'), 1800)
  }

  const onPdf = () => {
    const title = document.title
    // The browser suggests the page title as the PDF file name.
    document.title = `RFM Loyalty cost comparison${name.trim() ? ` - ${name.trim()}` : ''}`
    window.print()
    window.setTimeout(() => {
      document.title = title
    }, 500)
  }

  const more = r.gap > 0
  const ahead = r.net > 0.005
  const even = Math.abs(r.net) < 0.005
  const max = Math.max(r.theirTotal, r.ourTotal, 1)
  const w = (v: number) => `${Math.max(0, (v / max) * 100)}%`
  const client = name.trim()

  // One cost line: what it is on the left, the two prices on the right.
  const priceRow = (id: LineId, title: string, unit: string, hint: string, labels: [string, string], art?: React.ReactNode) => {
    const line = LINES.find((l) => l.id === id)!
    const off = line.box ? !on[line.box] : false
    return (
      <div className={s.row}>
        <div className={s.rowHead}>
          <div>
            <h3 className={s.rowTitle}>
              {title} <span className={s.unit}>{unit}</span>
            </h3>
            <p className={s.hint}>{hint}</p>
          </div>
          {art}
        </div>
        <div className={s.pair}>
          <NumberField id={`${id}-rfm`} label={labels[0]} prefix="AED" value={f[`${id}-rfm`]} onChange={set} disabled={off} />
          {line.rfmOnly ? (
            <div className={s.na}>
              <span className={s.naLabel}>{labels[1]}</span>
              <span className={s.naValue}>Not available</span>
            </div>
          ) : (
            <NumberField id={`${id}-ext`} label={labels[1]} prefix="AED" value={f[`${id}-ext`]} onChange={set} disabled={off} />
          )}
        </div>
      </div>
    )
  }

  const rateRow = (key: 'rate' | 'drate', title: string, hint: string) => (
    <div className={s.row}>
      <div className={s.rowHead}>
        <div>
          <h3 className={s.rowTitle}>
            {title} <span className={s.unit}>%</span>
          </h3>
          <p className={s.hint}>{hint}</p>
        </div>
      </div>
      <div className={s.pair}>
        {SIDES.map((k) => {
          const who = k === 'rfm' ? 'RFM Loyalty' : 'Other provider'
          return (
            <div className={s.rateCell} key={k}>
              <NumberField id={`${key}-${k}`} label={who} value={f[`${key}-${k}`]} onChange={set} />
              <StepButtons what={`${who} ${title.toLowerCase()}`} onStep={stepRate(`${key}-${k}`)} atMin={num(f[`${key}-${k}`]) <= 0} />
            </div>
          )
        })}
      </div>
    </div>
  )

  const counter = (label: string, value: number, setValue: (n: number) => void, disabled?: boolean) => (
    <div className={s.counter}>
      <span className={s.rowTitle}>{label}</span>
      <div className={s.counterControl}>
        <span className={s.counterValue} aria-live="polite">{value}</span>
        <StepButtons
          what={label.toLowerCase()}
          onStep={(d) => setValue(Math.min(99, Math.max(1, value + d)))}
          disabled={disabled}
          atMin={value <= 1}
        />
      </div>
    </div>
  )

  const verdictLabel = ahead
    ? 'Better off with RFM Loyalty by'
    : even
      ? 'Both routes cost the same'
      : 'On these numbers, the other route costs less by'

  return (
    <div className={s.page}>
      <header className={s.top}>
        <p className={s.wordmark}>
          <span className={s.dot} aria-hidden />
          RFM Loyalty <span className={s.times} aria-hidden>×</span> Till
        </p>
        <div className={s.actions}>
          <Button label="Export PDF" variant="primary" size="sm" onClick={onPdf} />
          <Button
            label={copied === 'done' ? 'Copied' : copied === 'failed' ? 'Copy not available' : 'Copy summary'}
            size="sm"
            onClick={onCopy}
          />
          <Button label="Reset" variant="ghost" size="sm" onClick={onReset} />
        </div>
      </header>

      <main className={s.main}>
        <div className={s.intro}>
          <h1 className={s.h1}>The card rate is only part of the cost.</h1>
          <p className={s.lead}>
            A bank may offer a lower card rate, but it supplies the card machines and nothing else. This compares that
            offer, plus outside suppliers for the restaurant system, loyalty and marketing, with one RFM Loyalty
            quotation{client ? ` for ${client}` : ''}.
          </p>
          <p className={s.printOnly}>Prepared {today}</p>
        </div>

        <img
          className={s.hero}
          src="/deal-calculator/hero.webp"
          width={1200}
          height={400}
          alt="RFM Loyalty 4 in 1 solution: payments, restaurant solution, self checkout and payments, merchant loyalty"
        />

        <div className={s.grid}>
          {/* ── Inputs ─────────────────────────────────────────────── */}
          <div className={s.inputs}>
            <section className={s.section} aria-labelledby="sec-sales">
              <h2 className={s.h2} id="sec-sales">Card sales</h2>
              <div className={s.salesRow}>
                <NumberField id="sales" label="Card sales per month" prefix="AED" whole size="lg" value={f.sales} onChange={set} />
                <TextInput label="Restaurant name" isOptional value={name} onChange={setName} size="lg" width="100%" autoComplete="off" />
              </div>
            </section>

            <section className={s.section} aria-labelledby="sec-pay">
              <div className={s.sectionHead}>
                <h2 className={s.h2} id="sec-pay">Payment device</h2>
                <img className={s.thumb} src="/deal-calculator/payment.webp" width={222} height={222} loading="lazy" alt="RFM payment device showing Payment Approved" />
              </div>
              {counter('Number of payment devices', devices, setDevices)}
              {rateRow(
                'rate',
                'Credit card rate',
                'The merchant discount rate (MDR): the share of each card sale the provider keeps. At 1.95%, AED 1.95 of every AED 100. Before VAT.',
              )}
              {rateRow(
                'drate',
                'Debit card rate',
                'Many providers quote a lower rate for UAE debit cards. If the offer has one rate for all cards, enter it in both rows.',
              )}
              <div className={s.row}>
                <div className={s.rowHead}>
                  <div>
                    <h3 className={s.rowTitle}>Paid by debit card <span className={s.unit}>% of card sales</span></h3>
                    <p className={s.hint}>Weighs the two rates. It only matters when the debit and credit rates differ.</p>
                  </div>
                </div>
                <div className={s.single}>
                  <NumberField id="dshare" label="Debit share" value={f.dshare} onChange={set} />
                </div>
              </div>
              {priceRow(
                'rent',
                'Device rent',
                'per device, per year',
                'Banks often waive it. Published examples: e& UTap from AED 64 a month, Mashreq up to AED 2,000 a year.',
                ['RFM Loyalty', 'Other provider'],
              )}
              {priceRow(
                'app',
                'Handheld ordering app',
                'per device, per month',
                'Orders and payment at the table. Till Go runs on RFM payment devices. Other providers’ devices cannot run it, so the restaurant would need a separate handheld licence.',
                ['Till Go', 'Outside licence'],
                <img className={s.handheld} src="/deal-calculator/handheld.webp" width={218} height={560} loading="lazy" alt="Till Go menu on an RFM Loyalty handheld payment device" />,
              )}
              {priceRow(
                'fees',
                'Other yearly fees',
                'total per year, optional',
                'Setup fee, minimum monthly billing (charged when card sales fall below a set amount), statement or PCI security fees. Example: setup up to AED 3,000 at Mashreq.',
                ['RFM Loyalty', 'Other provider'],
              )}
            </section>

            <section className={`${s.section} ${on.pos ? '' : s.off}`} aria-labelledby="sec-pos">
              <div className={s.sectionHead}>
                <h2 className={s.h2} id="sec-pos">Restaurant management</h2>
                <Switch label="Include" value={on.pos} onChange={(v) => setOn((p) => ({ ...p, pos: v }))} size="sm" />
              </div>
              <p className={s.sub}>Orders, menu, kitchen screens and reports. With RFM this is Till.</p>
              <div className={s.thumbs}>
                <img className={s.shot} src="/deal-calculator/cashregister.webp" width={640} height={470} loading="lazy" alt="Cash register with touch screen, receipt printer, cash drawer and barcode scanner" />
                <img className={s.shot} src="/deal-calculator/kds.webp" width={640} height={405} loading="lazy" alt="Kitchen display screen showing two walk-in orders" />
              </div>
              {priceRow(
                'pos',
                'Restaurant system',
                'per month',
                'Full-featured plans with every module: Foodics Advanced AED 556 a month, Syrve top tier AED 450 a month per till. Hardware is extra.',
                ['Till', 'Outside system'],
              )}
            </section>

            <section className={`${s.section} ${on.loyalty ? '' : s.off}`} aria-labelledby="sec-loyalty">
              <div className={s.sectionHead}>
                <h2 className={s.h2} id="sec-loyalty">Loyalty</h2>
                <Switch label="Include" value={on.loyalty} onChange={(v) => setOn((p) => ({ ...p, loyalty: v }))} size="sm" />
              </div>
              <p className={s.sub}>Points, rewards and offers that bring customers back.</p>
              <div className={s.thumbs}>
                <img className={s.thumb} src="/deal-calculator/loyalty.webp" width={195} height={242} loading="lazy" alt="RFM payment device showing a customer's rewards" />
              </div>
              {priceRow(
                'loyalty',
                'Loyalty programme',
                'per month',
                'Full loyalty plans run to about AED 385 a month per location (Square Loyalty top tier).',
                ['RFM Loyalty', 'Outside loyalty'],
              )}
            </section>

            <section className={`${s.section} ${on.oohup ? '' : s.off}`} aria-labelledby="sec-mkt">
              <div className={s.sectionHead}>
                <h2 className={s.h2} id="sec-mkt">Marketing and in-store outreach</h2>
                <Switch label="Include" value={on.oohup} onChange={(v) => setOn((p) => ({ ...p, oohup: v }))} size="sm" />
              </div>
              <p className={s.sub}>
                OOHUP digital screens in the restaurant with the platform to run your menu, offers and campaigns, plus
                15 influencers through Following.
              </p>
              <div className={s.thumbs}>
                <img className={s.shot} src="/deal-calculator/oohup.webp" width={640} height={431} loading="lazy" alt="Two OOHUP digital screens on a restaurant wall" />
                <img className={s.thumb} src="/deal-calculator/following.webp" width={520} height={311} loading="lazy" alt="RFM card machine showing Tap to Pay" />
              </div>
              {counter('Number of screens', screens, setScreens, !on.oohup)}
              {priceRow(
                'oohup',
                'OOHUP screens and platform',
                'per screen, per month',
                'Only RFM offers these. No outside supplier installs and runs in-venue screens the same way.',
                ['OOHUP', 'Outside supplier'],
              )}
              {priceRow(
                'infl',
                '15 influencers',
                'total, first 3 months',
                'Following sends five influencers a month for three months, chosen for the type of business, at no fee with the RFM card machine. Enter what an agency would charge for the same 15.',
                ['With RFM', 'Outside agency'],
              )}
            </section>
          </div>

          {/* ── Result ─────────────────────────────────────────────── */}
          <aside className={s.result} aria-live="polite" aria-label="Result">
            <div className={s.verdict}>
              <p className={s.verdictLabel}>{verdictLabel}</p>
              {!even && (
                <p className={s.figure}>
                  {aed(r.net)} <span>a year</span>
                </p>
              )}
              {ahead && more && (
                <p className={s.note}>
                  The higher card rate costs {aed(r.extraY)} a year. Device rent, fees and outside suppliers would cost{' '}
                  {aed(r.extY)} a year, against {r.rfmY > 0 ? aed(r.rfmY) : 'nothing extra'} with RFM Loyalty.
                  {r.breakEven ? ` The lower rate only works out cheaper above ${aed(r.breakEven)} in card sales a month.` : ''}
                </p>
              )}
              {!ahead && !even && (
                <p className={s.note}>
                  Check that each section includes what the restaurant would actually use, and enter the outside prices
                  it has been quoted.
                </p>
              )}
            </div>

            <div className={s.block}>
              <h2 className={s.blockTitle}>The rate difference</h2>
              {more ? (
                <>
                  <p className={s.working}>
                    {r.split ? 'Weighted by card mix: ' : ''}
                    {pct(r.effRfm)} − {pct(r.effExt)} = {r.gap.toFixed(2)}% of {aed(state.sales)} card sales
                  </p>
                  <dl className={s.facts}>
                    <div><dt>Per month</dt><dd>{aed(r.extraM)}</dd></div>
                    <div><dt>Per year</dt><dd>{aed(r.extraY)}</dd></div>
                    <div><dt>Per day</dt><dd>{aed(r.extraY / 365, 2)}</dd></div>
                    <div><dt>On a AED 100 bill</dt><dd>{aed(r.gap, 2)}</dd></div>
                  </dl>
                </>
              ) : r.gap === 0 ? (
                <p className={s.working}>No difference. Both rates are {pct(r.effRfm)}.</p>
              ) : (
                <p className={s.working}>
                  The RFM Loyalty rate is lower by {pct(r.gap)}: {aed(r.extraM)} less per month, {aed(r.extraY)} less a
                  year on card fees.
                </p>
              )}
            </div>

            <div className={s.block}>
              <h2 className={s.blockTitle}>Cost per year</h2>
              <div className={s.bars}>
                <div className={s.bar}>
                  <span className={s.barName}>Other provider and outside suppliers</span>
                  <span className={s.barValue}>{aed(r.theirTotal)}</span>
                  <span className={s.track}>
                    <i className={s.segFee} style={{ width: w(r.theirFees) }} />
                    <i className={s.segExtra} style={{ width: w(r.extY) }} />
                  </span>
                </div>
                <div className={s.bar}>
                  <span className={s.barName}>RFM Loyalty</span>
                  <span className={s.barValue}>{aed(r.ourTotal)}</span>
                  <span className={s.track}>
                    <i className={s.segOurs} style={{ width: w(r.ourFees) }} />
                    <i className={s.segRfm} style={{ width: w(r.rfmY) }} />
                  </span>
                </div>
                <p className={s.legend}>Solid: card fees. Lighter: rent, fees and products.</p>
              </div>

              <table className={s.table}>
                <thead>
                  <tr>
                    <th scope="col"><span className={s.srOnly}>Cost</span></th>
                    <th scope="col">Other route</th>
                    <th scope="col">RFM Loyalty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Card fees (MDR)</th>
                    <td>{aed(r.theirFees)}</td>
                    <td>{aed(r.ourFees)}</td>
                  </tr>
                  {r.lines.filter(isVisible).map((x) => (
                    <tr key={x.line.id}>
                      <th scope="row">{rowName(x)}</th>
                      <td className={x.line.rfmOnly || x.extY === 0 ? s.dim : undefined}>
                        {x.line.rfmOnly ? 'Not available' : x.extY > 0 ? aed(x.extY) : x.line.extZero || 'AED 0'}
                      </td>
                      <td className={x.rfmY > 0 ? undefined : s.dim}>{x.rfmY > 0 ? aed(x.rfmY) : x.line.zero}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Total per year</th>
                    <td>{aed(r.theirTotal)}</td>
                    <td>{aed(r.ourTotal)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </aside>
        </div>

        <footer className={s.foot}>
          <p>
            An estimate, not a quote. Card fees are monthly card sales × rate × 12, with the credit and debit rates
            weighed by the debit share. All prices are before VAT; 5% VAT applies to provider fees, including the MDR,
            on both sides. Outside supplier prices are published benchmarks and can be changed above; actual quotes
            will vary.
          </p>
          <div className={s.sources}>
            <Collapsible trigger="Where these benchmarks come from" defaultIsOpen={false}>
              <ul>
                <li>Card rates: Mashreq NEOPAY (NEO BIZ) lists 1.97% for UAE cards and 2.70% for international cards; Mashreq’s tariff goes up to 3.00%. <a href="https://kredit.ae/business/neopay" target="_blank" rel="noopener">kredit.ae</a></li>
                <li>Debit cards: since October 2024 the UAE Central Bank caps the issuer’s share (interchange) on local debit cards at 0.75%, so debit-heavy restaurants may be quoted lower rates. <a href="https://www.adyen.com/en_AE/knowledge-hub/uae-regulation-changes-to-irf" target="_blank" rel="noopener">Adyen</a></li>
                <li>Device rent: e& UTap from AED 64.05 a month; Mashreq up to AED 1,000 to 2,000 a year per device. <a href="https://www.etisalat.ae/utap.html" target="_blank" rel="noopener">e&</a></li>
                <li>Handheld app: Syrve Waiter, AED 50 per device per month. <a href="https://ae.syrve.com/apps/syrve-waiter" target="_blank" rel="noopener">Syrve</a></li>
                <li>Restaurant system, full-featured tiers: Foodics Advanced AED 556 a month, Syrve up to AED 450 a month per till, Geidea up to AED 364 a month. <a href="https://www.foodics.com/foodics-pricing-uae/" target="_blank" rel="noopener">Foodics</a>, <a href="https://geidea.net/ae/en/restaurant-point-of-sale-pricing/" target="_blank" rel="noopener">Geidea</a></li>
                <li>Loyalty: Square Loyalty top tier USD 105 (AED 385) per location a month. <a href="https://square.com/us/en/software/loyalty" target="_blank" rel="noopener">Square</a></li>
                <li>Influencers: the Following offer with the RFM card machine. <a href="https://www.following.ae/rfmloyaltydeal" target="_blank" rel="noopener">following.ae</a></li>
                <li>Also ask the other provider about settlement time (T+1 means the money arrives the next working day) and chargeback fees. Prices before VAT, USD at AED 3.6725, from published pages and listings, November 2026.</li>
              </ul>
            </Collapsible>
          </div>
        </footer>
      </main>

      {/* Phone: the answer stays on screen while the numbers are typed in. */}
      <div className={s.sticky} aria-hidden>
        <span>{ahead ? 'Better off by' : even ? 'Same cost' : 'Other route cheaper by'}</span>
        {!even && <strong>{aed(r.net)} a year</strong>}
      </div>
    </div>
  )
}
