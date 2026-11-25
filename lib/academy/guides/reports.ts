import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const reportsGuides: AcademyGuide[] = [
  {
    slug: 'view-sales-report',
    title: 'Check today’s sales',
    summary: 'Open the Sales Summary to see orders, gross sales, net revenue and how guests paid, for any date range.',
    intro: [
      'The Sales Summary answers the end of day questions: how many orders, how much was sold and how guests paid. Check it every day, so a problem shows up the same day and not at month end.',
      'Gross sales is the total before discounts and refunds. Net revenue is what you keep after discounts and tax. If the gap between them is bigger than usual, look at the discounts and refunds given that day.',
      'The payment breakdown should match what was counted at shift close: cash against the drawer, card against the card machine’s end of day total.',
    ],
    topic: 'reports',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['reports', 'sales', 'revenue', 'end-of-day', 'export', 'payments'],
    video: { src: `${VIDEO_BASE}/view-sales-report.mp4`, poster: '/academy/posters/view-sales-report.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Open Reports',
        detail: 'All your sales reports are here in the back office.',
        at: 2.6,
      },
      {
        title: 'Tap View Report on Sales Summary',
        detail: 'The button is on the Sales Summary card.',
        at: 6.8,
      },
      {
        title: 'Tap the date button',
        detail: 'It sets the period the report covers.',
        at: 11,
      },
      {
        title: 'Choose Today',
        detail: 'Or Yesterday, This Week, This Month or a Custom Range.',
        at: 15.2,
      },
      {
        title: 'Read Total orders',
        detail: 'How many orders were placed in the period.',
        at: 19.4,
      },
      {
        title: 'Read Gross sales',
        detail: 'Total sales before discounts and refunds.',
        at: 23.6,
      },
      {
        title: 'Read Net revenue',
        detail: 'What you keep after discounts and tax.',
        at: 27.8,
      },
      {
        title: 'Read the payment breakdown',
        detail: 'How much was paid by cash, by card and by other methods.',
        at: 32,
      },
      {
        title: 'Save or share the report',
        detail: 'Export it to Excel or PDF, or print it.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Other reports',
        detail: 'The Reports page also has a Sales Report, an Orders Report and Top Products for a closer look.',
      },
      {
        title: 'Refunds have their own report',
        detail: 'Every refund is listed in the Refunds report with the reason given for it.',
      },
    ],
    related: ['read-the-z-report', 'best-selling-items', 'close-shift'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'best-selling-items',
    title: 'Find your best sellers',
    summary: 'Read the Top Products report to see which items sell the most, by quantity and by revenue.',
    intro: [
      'The Top Products report ranks your items for any period. It answers two different questions: what do guests order most, and what brings in the most money. The two lists are often not the same.',
      'Pick a date range first. A week is a good default: long enough to smooth out one odd day, short enough to act on.',
      'Use it when you plan the menu and the stock. Best sellers must never run out, and an item at the bottom of both lists may not be worth its place.',
    ],
    topic: 'reports',
    roles: ['owner', 'manager'],
    level: 'everyday',
    tags: ['reports', 'sales', 'top-products', 'menu', 'export'],
    video: { src: `${VIDEO_BASE}/best-selling-items.mp4`, poster: '/academy/posters/best-selling-items.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Open Reports',
        detail: 'Reports is in the left menu of the back office.',
        at: 2.6,
      },
      {
        title: 'Open Top Products',
        detail: 'Tap View Report on the Top Products card.',
        at: 6.8,
      },
      {
        title: 'Pick the date range',
        detail: 'Tap the date button. It starts on Today.',
        at: 11,
      },
      {
        title: 'Choose This Week',
        detail: 'Or Today, This Month, Last 30 Days, or a Custom Range.',
        at: 15.2,
      },
      {
        title: 'Start with the totals',
        detail: 'Products sold, items sold, revenue and the average item price.',
        at: 19.4,
      },
      {
        title: 'Top Selling by Quantity',
        detail: 'The longest bar is the item you sold the most of.',
        at: 23.6,
      },
      {
        title: 'Read the ranking table',
        detail: 'Banoffee Pie is number one: 33 sold, AED 263.67 in revenue.',
        at: 27.8,
      },
      {
        title: 'Top Selling by Revenue',
        detail: 'The same items ranked by the money they bring in.',
        at: 32,
      },
      {
        title: 'See more than ten items',
        detail: 'Change Top 10 to Top 20, Top 50 or All, or filter by category.',
        at: 36.2,
      },
      {
        title: 'Save or share the report',
        detail: 'Tap Export Excel or Export PDF.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'More than the top ten',
        detail: 'Change Top 10 to Top 20, Top 50 or All, or filter by category to compare items within one part of the menu.',
      },
      {
        title: 'Share it',
        detail: 'Export Excel and Export PDF save the report for your accountant, chef or partners.',
      },
    ],
    related: ['view-sales-report', 'read-the-z-report', 'count-and-adjust-stock'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'voids-and-refunds-report',
    title: 'Check voids and refunds',
    summary: 'Read the Voids and Refunds reports to see what was cancelled or paid back, by whom and why.',
    intro: [
      'Voids and refunds are where money quietly leaves a restaurant. Most are honest: a wrong order, a complaint. Reading these two reports is how you tell the honest ones from a pattern.',
      'The Voids report lists cancelled orders with the user who voided them. Its Item Voids tab lists single items removed from orders, each with the reason and the name of the person who voided it.',
      'The Refunds report lists every refund with its order, whether it was full or partial, the method, the amount and the reason given.',
    ],
    topic: 'reports',
    roles: ['owner', 'manager'],
    level: 'advanced',
    tags: ['reports', 'void', 'refund', 'loss-prevention', 'export'],
    video: { src: `${VIDEO_BASE}/voids-and-refunds-report.mp4`, poster: '/academy/posters/voids-and-refunds-report.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'In Reports, open the Voids Report',
        detail: 'Reports is in the left menu. Tap View Report on the Voids Report card.',
        at: 2.6,
      },
      {
        title: 'Pick the date range',
        detail: 'Tap the date button to choose the period.',
        at: 6.8,
      },
      {
        title: 'Choose Today',
        detail: 'Or Yesterday, This Week, This Month, or a Custom Range.',
        at: 11,
      },
      {
        title: 'Start with the totals',
        detail: 'How many orders and items were voided, and what they were worth.',
        at: 15.2,
      },
      {
        title: 'Every voided order is listed',
        detail: 'Order number, time, total, and the user who voided it.',
        at: 19.4,
      },
      {
        title: 'Tap Item Voids',
        detail: 'This tab lists single items that were removed from an order.',
        at: 23.6,
      },
      {
        title: 'Read who voided it, and why',
        detail: 'Each row has the item, the reason and the Voided By name.',
        at: 27.8,
      },
      {
        title: 'Back in Reports, open Refunds Report',
        detail: 'Tap View Report on the Refunds Report card.',
        at: 32,
      },
      {
        title: 'It opens on Today',
        detail: 'Tap the date button if you want another period.',
        at: 36.2,
      },
      {
        title: 'See how much was refunded',
        detail: 'Number of refunds, orders and items, and the refund amount.',
        at: 40.4,
      },
      {
        title: 'Every refund, with its reason',
        detail: 'Order, full or partial, method, amount and the reason given.',
        at: 44.6,
      },
      {
        title: 'Save or share either report',
        detail: 'Tap Excel or PDF at the top right.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'What to look for',
        detail: 'Many voids or refunds by one person, at one time of day, or with one repeated reason deserve a closer look.',
      },
      {
        title: 'Where the reason shows',
        detail: 'Void reasons are on the Item Voids tab. The list of whole voided orders shows the user, but not the reason.',
      },
    ],
    related: ['void-an-item', 'void-a-whole-order', 'refund-an-order'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'read-the-z-report',
    title: 'Read the Z report',
    summary: 'Use the end-of-day summary to check revenue, refunds, voids, the cash you should have and how guests paid.',
    intro: [
      'The Z report is the day on one page. Read it before you close: it tells you what was sold, what was given back, and how much cash should be in the drawer.',
      'Start at the top with total revenue, orders, tax and discounts. Then look at refunds and voids, which should be few and explainable.',
      'Cash Reconciliation is the part to check against the drawer. Expected Cash is what Till thinks you hold. If your count is different, find out why before the day is closed.',
    ],
    topic: 'reports',
    roles: ['manager', 'owner'],
    level: 'everyday',
    tags: ['reports', 'z-report', 'end-of-day', 'cash', 'export'],
    video: { src: `${VIDEO_BASE}/read-the-z-report.mp4`, poster: '/academy/posters/read-the-z-report.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Open Reports in the back office',
        detail: 'The Z-Report is the end-of-day summary.',
        at: 2.6,
      },
      {
        title: 'Tap the Z-Report card',
        detail: 'Scroll down the report list to find it.',
        at: 6.8,
      },
      {
        title: 'Check the date says Today',
        detail: 'Tap it to pick another day if you need one.',
        at: 11,
      },
      {
        title: 'Total revenue for the day',
        detail: 'Next to it: total orders, tax and discounts.',
        at: 15.2,
      },
      {
        title: 'Net revenue',
        detail: 'What is left after discounts, refunds and tax.',
        at: 19.4,
      },
      {
        title: 'Refunds given today',
        detail: 'How many refunds, and the amount paid back.',
        at: 23.6,
      },
      {
        title: 'Voids today',
        detail: 'Cancelled orders and items, with their value.',
        at: 27.8,
      },
      {
        title: 'Cash you should have',
        detail: 'Expected Cash: compare it with the cash you count in the drawer.',
        at: 32,
      },
      {
        title: 'How guests paid',
        detail: 'Cash, card and online totals for the day.',
        at: 36.2,
      },
      {
        title: 'Print or save the report',
        detail: 'Export Excel, Export PDF or Print, at the top right.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Another day',
        detail: 'The report opens on Today. Tap the date button to read an earlier day.',
      },
      {
        title: 'Keep a copy',
        detail: 'Export Excel, Export PDF and Print are at the top right of the report.',
      },
    ],
    related: ['view-sales-report', 'close-shift', 'cash-in-and-out'],
    order: 4,
    updated: '2026-11-24',
  },
]
