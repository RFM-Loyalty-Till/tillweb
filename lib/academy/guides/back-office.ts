import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const backOfficeGuides: AcademyGuide[] = [
  {
    slug: 'add-a-menu-item',
    title: 'Add a menu item',
    summary: 'Create a new item in the Catalog with its category, tax code and price so it shows on the POS.',
    intro: [
      'A new dish, a new drink, a seasonal special: anything you sell regularly should be a menu item, not a custom item. Menu items sit in their category on the POS and are counted by name in your sales reports.',
      'Three choices matter most. The category decides where staff find the item on the POS. The tax code decides the VAT charged on every sale. The selling price is what the guest pays.',
      'Check the tax code with your accountant if you are not sure. A wrong tax code means every sale of that item is taxed wrong until someone notices.',
    ],
    topic: 'back-office',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['catalog', 'menu', 'items', 'price', 'vat', 'category'],
    video: { src: `${VIDEO_BASE}/add-a-menu-item.mp4`, poster: '/academy/posters/add-a-menu-item.jpg', seconds: 38.8 },
    steps: [
      {
        title: 'Open Catalog',
        detail: 'In the back office, Catalog holds all your menu items.',
        at: 2.6,
      },
      {
        title: 'Tap Add Menu Item',
        detail: 'It is at the top right of the Menu Items page.',
        at: 6.8,
      },
      {
        title: 'Type the item name',
        detail: 'This is the name staff and guests see.',
        at: 11,
      },
      {
        title: 'Pick a category',
        detail: 'This decides where the item shows on the POS, for example Espresso Bar.',
        at: 15.2,
      },
      {
        title: 'Choose the tax code',
        detail: 'Pick the VAT rate that applies, for example VAT-5 (5%).',
        at: 19.4,
      },
      {
        title: 'Enter the selling price',
        detail: 'The price in AED the guest pays, for example 6.00.',
        at: 23.6,
      },
      {
        title: 'Tap Create Item',
        detail: 'The item is saved and appears on the POS under its category straight away.',
        at: 27.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Photos',
        detail: 'You can add a photo to the item. It shows on the POS when images are switched on in the POS Display settings.',
      },
      {
        title: 'Running out is not deleting',
        detail: 'If an item runs out for a while, mark it sold out from the POS instead of deleting it. Mark it available again when it is back.',
      },
    ],
    related: ['mark-item-out-of-stock', 'custom-item', 'modifiers-and-notes'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'mark-item-out-of-stock',
    title: 'Mark an item sold out',
    summary: 'Stop staff selling an item the kitchen has run out of, for the rest of today or until you switch it back on.',
    intro: [
      'When the kitchen runs out of something, mark it sold out straight away. The item card shows Sold out and it cannot be ordered, so nobody promises a guest a dish that cannot be made.',
      'There are two choices. Sold out today puts the item back on sale when the next day opens. Sold out keeps it off until someone switches it back on. Use Sold out today for a busy night, and Sold out when an item is off for longer.',
      'Sold out applies to every branch and terminal, not only the till you are on.',
    ],
    topic: 'back-office',
    roles: ['manager', 'cashier'],
    level: 'everyday',
    tags: ['sold-out', 'availability', 'stock', 'menu', 'kitchen'],
    video: { src: `${VIDEO_BASE}/mark-item-out-of-stock.mp4`, poster: '/academy/posters/mark-item-out-of-stock.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Open the item’s category',
        detail: 'Find the item that has run out, on the register.',
        at: 2.6,
      },
      {
        title: 'Find the item card',
        detail: 'Every item card has a small box icon for availability.',
        at: 6.8,
      },
      {
        title: 'Tap the box icon',
        detail: 'Item Availability opens for that item.',
        at: 11,
      },
      {
        title: 'Tap Sold out today',
        detail: 'It comes back on sale when the next day opens. Sold out keeps it off until you turn it back on.',
        at: 15.2,
      },
      {
        title: 'Close the window',
        detail: 'The change applies to every branch and terminal.',
        at: 19.4,
      },
      {
        title: 'Check the item shows Sold out',
        detail: 'Staff can see at a glance that it cannot be ordered.',
        at: 23.6,
      },
      {
        title: 'Back in stock? Tap the box icon again',
        detail: 'Item Availability opens again.',
        at: 27.8,
      },
      {
        title: 'Tap Mark available',
        detail: 'The item is on sale again straight away.',
        at: 32,
      },
      {
        title: 'Close the window',
        detail: 'You are back on the register, with the item available to order.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Done from the register',
        detail: 'You do not need the back office. The box icon is on every item card on the POS.',
      },
      {
        title: 'Sold out today resets itself',
        detail: 'Items marked Sold out today come back on sale when the next day opens, so you do not have to remember to switch them back.',
      },
    ],
    related: ['add-a-menu-item', 'search-and-favorites', 'takeaway-order'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'view-sales-report',
    title: 'Check today’s sales',
    summary: 'Open the Sales Summary to see orders, gross sales, net revenue and how guests paid, for any date range.',
    intro: [
      'The Sales Summary answers the end of day questions: how many orders, how much was sold and how guests paid. Check it every day, so a problem shows up the same day and not at month end.',
      'Gross sales is the total before discounts and refunds. Net revenue is what you keep after discounts and tax. If the gap between them is bigger than usual, look at the discounts and refunds given that day.',
      'The payment breakdown should match what was counted at shift close: cash against the drawer, card against the card machine’s end of day total.',
    ],
    topic: 'back-office',
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
    related: ['close-shift', 'find-an-order', 'refund-an-order'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'arrange-the-floor-plan',
    title: 'Arrange the floor plan',
    summary: 'Move, resize and arrange the tables on each floor so the plan on the POS matches your room.',
    intro: [
      'Staff find tables faster when the floor plan looks like the real room. Set it up once when you open, and again whenever you move furniture or add tables.',
      'Each floor has its own layout. You can drag tables into place, make one table bigger or smaller, resize every table at once, and pick a wider canvas for a room with many tables.',
      'When an owner taps Save Layout, the layout is saved for every till in the company. Do it at a quiet time, and check it on another till afterwards.',
    ],
    topic: 'back-office',
    roles: ['owner', 'manager'],
    level: 'advanced',
    tags: ['floor-plan', 'tables', 'layout', 'setup', 'floors'],
    video: { src: `${VIDEO_BASE}/arrange-the-floor-plan.mp4`, poster: '/academy/posters/arrange-the-floor-plan.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Tap Tables in the top bar',
        detail: 'The floor plan opens.',
        at: 2.6,
      },
      {
        title: 'Pick the floor',
        detail: 'Each floor has its own layout, for example Floor 2.',
        at: 6.8,
      },
      {
        title: 'Tap Edit',
        detail: 'The floor plan switches to editing.',
        at: 11,
      },
      {
        title: 'Press and drag a table',
        detail: 'Hold a table and slide it to where it stands in the room.',
        at: 15.2,
      },
      {
        title: 'Let go to drop it',
        detail: 'The table stays where you drop it and is now selected.',
        at: 19.4,
      },
      {
        title: 'Tap S, M or L',
        detail: 'With a table selected, this changes its size. Tap L for a big table.',
        at: 23.6,
      },
      {
        title: 'Use − and + next to Table size',
        detail: 'This shrinks or grows every table at once.',
        at: 27.8,
      },
      {
        title: 'Set the floor size',
        detail: 'Pick Wide or Large canvas if the room has many tables.',
        at: 32,
      },
      {
        title: 'Or tap Auto-arrange',
        detail: 'All the tables line up in a neat grid, ready to drag into place.',
        at: 36.2,
      },
      {
        title: 'Tap Save Layout',
        detail: 'Save once the plan matches your room.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Rotate long tables',
        detail: 'A selected table can be rotated, for long tables that run the other way in the room.',
      },
      {
        title: 'The plan fits the screen',
        detail: 'The whole floor is scaled to fit the screen in view and in edit mode. Use the zoom buttons to look closer.',
      },
      {
        title: 'Numbers stay visible',
        detail: 'On small tiles the table name and seat count are hidden, but the table number always shows.',
      },
    ],
    related: ['move-a-table', 'dine-in-order', 'print-the-bill'],
    order: 4,
    updated: '2026-11-24',
  },
]
