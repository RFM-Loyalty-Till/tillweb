// Maths and defaults for /deal-calculator. Pure functions, no React.
//
// The comparison:
//   Other route = card fees at the other provider's rate
//               + what outside suppliers charge for the same products.
//   RFM Loyalty = card fees at the RFM rate + the RFM price of each product.

export type Side = 'rfm' | 'ext'
export type LineId = 'rent' | 'app' | 'fees' | 'pos' | 'loyalty' | 'oohup' | 'infl'
export type BoxId = 'pos' | 'loyalty' | 'oohup'

export type Line = {
  id: LineId
  /** Row name in the cost table and the copied summary. */
  name: string
  /** Optional section that switches the line on or off. */
  box?: BoxId
  /** Which count multiplies the price. */
  per?: 'devices' | 'screens'
  /** 12 for monthly prices, 1 for yearly or one-off prices. */
  months: 1 | 12
  /** Shown on the RFM side when the price is 0. */
  zero: 'Included' | 'None'
  /** Shown on the other side when the price is 0. Defaults to "AED 0". */
  extZero?: string
  /** No outside equivalent: adds nothing to the other route. */
  rfmOnly?: boolean
  /** Leave the row out of the table while both sides are 0. */
  hideZero?: boolean
}

export const LINES: Line[] = [
  { id: 'rent', name: 'Device rent', per: 'devices', months: 1, zero: 'Included' },
  { id: 'app', name: 'Handheld app', per: 'devices', months: 12, zero: 'Included' },
  { id: 'fees', name: 'Other yearly fees', months: 1, zero: 'None', extZero: 'None', hideZero: true },
  { id: 'pos', name: 'Restaurant management', box: 'pos', months: 12, zero: 'Included' },
  { id: 'loyalty', name: 'Loyalty programme', box: 'loyalty', months: 12, zero: 'Included' },
  { id: 'oohup', name: 'OOHUP screens and CMS', box: 'oohup', per: 'screens', months: 12, zero: 'Included', rfmOnly: true },
  // One-off: the 15 influencers that come with the card machine through Following.
  { id: 'infl', name: '15 influencers (Following)', box: 'oohup', months: 1, zero: 'Included', extZero: 'Not priced' },
]

export type State = {
  sales: number
  /** Credit card MDR, percent. */
  rate: Record<Side, number>
  /** Debit card MDR, percent. */
  drate: Record<Side, number>
  /** Share of card sales paid by debit card, percent. */
  dshare: number
  devices: number
  screens: number
  on: Record<BoxId, boolean>
  price: Record<LineId, Record<Side, number>>
}

// RFM prices start at 0 (shown as "Included") until the rep enters the quotation.
// Outside prices for the restaurant system and loyalty are full-featured tiers,
// because Till includes every module. Bank device rent starts at 0: it is often waived.
export const DEFAULTS: State = {
  sales: 50000,
  rate: { rfm: 1.95, ext: 1.75 },
  drate: { rfm: 1.95, ext: 1.75 },
  dshare: 50,
  devices: 2,
  screens: 1,
  on: { pos: true, loyalty: true, oohup: true },
  price: {
    rent: { rfm: 0, ext: 0 },
    app: { rfm: 0, ext: 50 },
    fees: { rfm: 0, ext: 0 },
    pos: { rfm: 0, ext: 556 },
    loyalty: { rfm: 0, ext: 385 },
    oohup: { rfm: 0, ext: 0 },
    infl: { rfm: 0, ext: 0 },
  },
}

export type ResultLine = { line: Line; on: boolean; qty: number; rfmY: number; extY: number }

export type Result = {
  /** Effective rate gap in percentage points, RFM minus the other provider. */
  gap: number
  effRfm: number
  effExt: number
  /** True when credit and debit rates differ on either side. */
  split: boolean
  theirFees: number
  ourFees: number
  extraM: number
  extraY: number
  lines: ResultLine[]
  rfmY: number
  extY: number
  theirTotal: number
  ourTotal: number
  /** Other route minus RFM. Positive: better off with RFM. */
  net: number
  /** Monthly card sales at which both routes cost the same. */
  breakEven: number | null
}

export function compute(s: State): Result {
  const d = Math.min(100, Math.max(0, s.dshare)) / 100
  const eff = (k: Side) => s.rate[k] * (1 - d) + s.drate[k] * d
  const effRfm = eff('rfm')
  const effExt = eff('ext')
  const gap = Math.round((effRfm - effExt) * 1e6) / 1e6

  const lines = LINES.map((line): ResultLine => {
    const on = !line.box || s.on[line.box]
    const qty = line.per ? s[line.per] : 1
    const p = s.price[line.id]
    return {
      line,
      on,
      qty,
      rfmY: on ? qty * p.rfm * line.months : 0,
      extY: on && !line.rfmOnly ? qty * p.ext * line.months : 0,
    }
  })
  const rfmY = lines.reduce((a, x) => a + x.rfmY, 0)
  const extY = lines.reduce((a, x) => a + x.extY, 0)
  const theirFees = (s.sales * effExt * 12) / 100
  const ourFees = (s.sales * effRfm * 12) / 100
  const theirTotal = theirFees + extY
  const ourTotal = ourFees + rfmY
  const saveM = (extY - rfmY) / 12

  return {
    gap,
    effRfm,
    effExt,
    split: s.rate.rfm !== s.drate.rfm || s.rate.ext !== s.drate.ext,
    theirFees,
    ourFees,
    extraM: (s.sales * gap) / 100,
    extraY: (s.sales * gap * 12) / 100,
    lines,
    rfmY,
    extY,
    theirTotal,
    ourTotal,
    net: theirTotal - ourTotal,
    breakEven: gap > 0 && saveM > 0 ? (saveM * 100) / gap : null,
  }
}

export const isVisible = (x: ResultLine) => x.on && !(x.line.hideZero && x.rfmY === 0 && x.extY === 0)
export const rowName = (x: ResultLine) => x.line.name + (x.line.per && x.qty > 1 ? ` × ${x.qty}` : '')

export const aed = (v: number, decimals = 0) =>
  `AED ${Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`
export const pct = (v: number) => `${Math.abs(v).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`

/** Plain-text version of the comparison, for WhatsApp or email. */
export function summary(s: State, r: Result, name: string): string {
  const L: string[] = []
  L.push(`Cost comparison${name ? ` for ${name}` : ''}`)
  L.push(`Card sales: ${aed(s.sales)} a month, ${s.devices} payment device${s.devices === 1 ? '' : 's'}`)
  L.push(`Credit card rate (MDR): RFM Loyalty ${pct(s.rate.rfm)} | Other provider ${pct(s.rate.ext)}`)
  L.push(`Debit card rate (MDR): RFM Loyalty ${pct(s.drate.rfm)} | Other provider ${pct(s.drate.ext)} (${pct(s.dshare)} of card sales on debit)`)
  L.push(r.gap > 0 ? `Rate difference: ${aed(r.extraM)} a month (${aed(r.extraY)} a year)` : 'Rate difference: none or in your favour')
  L.push('', 'Per year, other provider + outside suppliers vs RFM Loyalty:')
  L.push(`- Card fees: ${aed(r.theirFees)} vs ${aed(r.ourFees)}`)
  for (const x of r.lines.filter(isVisible)) {
    const ext = x.line.rfmOnly ? 'not available' : x.extY > 0 || !x.line.extZero ? aed(x.extY) : x.line.extZero.toLowerCase()
    L.push(`- ${rowName(x).replace('×', 'x')}: ${ext} vs ${x.rfmY > 0 ? aed(x.rfmY) : x.line.zero.toLowerCase()}`)
  }
  L.push('', `Total per year, other provider + outside suppliers: ${aed(r.theirTotal)}`)
  L.push(`Total per year, RFM Loyalty: ${aed(r.ourTotal)}`)
  L.push(
    r.net > 0.005
      ? `Better off with RFM Loyalty by ${aed(r.net)} a year.`
      : r.net < -0.005
        ? `The other route costs less by ${aed(r.net)} a year.`
        : 'Both cost the same.',
  )
  L.push('An estimate, not a quote. Prices before VAT.')
  return L.join('\n')
}
