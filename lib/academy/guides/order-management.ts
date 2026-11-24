import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const orderManagementGuides: AcademyGuide[] = [
  {
    slug: 'find-an-order',
    title: 'Find a past order',
    summary: 'Search order history by number, customer or table, reprint a receipt and see how an order was paid.',
    intro: [
      'Guests come back with questions: a lost receipt, a charge they do not recognize, an item they think was missing. The Orders page lets you find any order and see what was ordered and how it was paid.',
      'Narrow the list before you search. Pick the status and the date first, then type the order number, the customer’s name or the table.',
      'Reprinting a receipt prints a copy of the same order. It does not change the order or add a new sale.',
    ],
    topic: 'order-management',
    roles: ['cashier', 'waiter', 'manager'],
    level: 'everyday',
    tags: ['orders', 'search', 'history', 'receipt', 'reprint', 'filter'],
    video: { src: `${VIDEO_BASE}/find-an-order.mp4`, poster: '/academy/posters/find-an-order.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Tap Orders in the left menu',
        detail: 'The Orders page lists every order, open and paid.',
        at: 2.6,
      },
      {
        title: 'Scroll to Order History',
        detail: 'The newest orders are at the top.',
        at: 6.8,
      },
      {
        title: 'Filter by status',
        detail: 'Pick Completed to see only paid orders.',
        at: 11,
      },
      {
        title: 'Filter by date',
        detail: 'Today, Yesterday, Last 7 Days or a custom range.',
        at: 15.2,
      },
      {
        title: 'Search for the order',
        detail: 'Type the order number, the customer or the table.',
        at: 19.4,
      },
      {
        title: 'Check the order row',
        detail: 'It shows the time, the table, the payment and the total.',
        at: 23.6,
      },
      {
        title: 'Tap Reprint for a copy of the receipt',
        detail: 'The receipt prints again on your receipt printer.',
        at: 27.8,
      },
      {
        title: 'Tap the order number',
        detail: 'The full order opens on its own page.',
        at: 32,
      },
      {
        title: 'Check the items',
        detail: 'Every item with its quantity, the tax and the total.',
        at: 36.2,
      },
      {
        title: 'Check the payment',
        detail: 'How it was paid, when, and the amount received.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Refunds start here',
        detail: 'Full Refund and Partial Refund are on the order details page, for staff with the refund permission.',
      },
      {
        title: 'Voided items stay visible',
        detail: 'A voided item stays on the order marked Voided, so you can see what was taken off and why the total changed.',
      },
    ],
    related: ['refund-an-order', 'void-an-item', 'view-sales-report'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'void-an-item',
    title: 'Void a sent item',
    summary: 'Remove an item the kitchen already has, record what happened to it, and get a manager’s approval.',
    intro: [
      'Once an item is sent to the kitchen it is locked and cannot be deleted from the cart. If the guest changes their mind, the dish is made wrong or it was rung up by mistake, you void it.',
      'Every void asks what happened to the item. Choose Waste if it was made and has to be thrown away, or Inventory Return only if it came back unused and can be sold again. This keeps your stock counts right.',
      'Each void is saved with its reason and needs a manager’s PIN, so find a manager before you start. Pick the reason that is true: voids are reviewed in the end of day report.',
    ],
    topic: 'order-management',
    roles: ['waiter', 'cashier', 'manager'],
    level: 'everyday',
    tags: ['void', 'kitchen', 'waste', 'manager-pin', 'stock', 'mistakes'],
    video: { src: `${VIDEO_BASE}/void-an-item.mp4`, poster: '/academy/posters/void-an-item.jpg', seconds: 43 },
    steps: [
      {
        title: 'Tap Orders in the top bar',
        detail: 'It lists every open order.',
        at: 2.6,
      },
      {
        title: 'Tap the order',
        detail: 'It opens in the cart on the right.',
        at: 6.8,
      },
      {
        title: 'Find the item to void',
        detail: 'Sent items are locked, so they cannot be deleted the usual way.',
        at: 11,
      },
      {
        title: 'Tap the red minus',
        detail: 'The red − next to the item starts a void.',
        at: 15.2,
      },
      {
        title: 'Choose Waste or Inventory Return',
        detail: 'Waste if it was made. Inventory Return only if it came back unused.',
        at: 19.4,
      },
      {
        title: 'Pick a reason',
        detail: 'Every void is saved with its reason.',
        at: 23.6,
      },
      {
        title: 'Confirm the void',
        detail: 'In this example the button reads Void as Waste.',
        at: 27.8,
      },
      {
        title: 'Ask a manager to type their PIN',
        detail: 'The void only goes through once a manager approves it. The item then shows as voided and the total drops.',
        at: 32,
      },
    ],
    goodToKnow: [
      {
        title: 'The rest of the order stays',
        detail: 'Only the voided item comes off. Everything else stays on the order.',
      },
      {
        title: 'Items not sent yet',
        detail: 'Items marked NEW have not gone to the kitchen, so you can take them out of the cart without a void.',
      },
      {
        title: 'Already paid',
        detail: 'A void is for an open order. To give money back on a paid order, a manager refunds it.',
      },
    ],
    troubleshooting: [
      {
        title: 'No manager is on the floor',
        detail: 'The void cannot finish without a manager’s PIN. Leave the item on the order, tell the kitchen, and finish the void when a manager is back.',
      },
    ],
    related: ['refund-an-order', 'add-items-to-open-table', 'find-an-order'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'refund-an-order',
    title: 'Refund a paid order',
    summary: 'Give money back on a paid order, choose how it is refunded, and record the stock and the reason.',
    intro: [
      'A refund gives money back on an order that is already paid: a complaint, a wrong charge, or a dish sent back after the bill was settled. If the order is still open, void the item instead.',
      'Refunds need the refund permission, which managers and owners have. If you do not have it, ask a manager to do the refund.',
      'Each refund asks three things: how the money goes back (original payment method, cash or store credit), what happens to the stock (Restock if the items came back unused, Waste if they were made) and the reason.',
      'Refunds show in the Refunds report with their reason. Write a reason someone else will understand a week later.',
    ],
    topic: 'order-management',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['refund', 'money-back', 'complaint', 'store-credit', 'restock', 'waste'],
    video: { src: `${VIDEO_BASE}/refund-an-order.mp4`, poster: '/academy/posters/refund-an-order.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Open the Orders page',
        detail: 'Refunds start from the paid order.',
        at: 2.6,
      },
      {
        title: 'Show completed orders',
        detail: 'Only a paid order can be refunded.',
        at: 6.8,
      },
      {
        title: 'Tap the order number',
        detail: 'Find the order by its number, time or total, then open it.',
        at: 11,
      },
      {
        title: 'Choose the kind of refund',
        detail: 'Partial Refund returns some items. Full Refund returns everything.',
        at: 15.2,
      },
      {
        title: 'Tap Full Refund',
        detail: 'The whole order total is refunded.',
        at: 19.4,
      },
      {
        title: 'Choose how to refund',
        detail: 'Original payment method, cash or store credit.',
        at: 23.6,
      },
      {
        title: 'Choose Restock or Waste',
        detail: 'Restock if the items came back unused. Waste if they were made.',
        at: 27.8,
      },
      {
        title: 'Type the refund reason',
        detail: 'A reason is required and shows in the Refunds report.',
        at: 32,
      },
      {
        title: 'Tap Process Full Refund',
        detail: 'The refund is recorded straight away and the order shows as refunded.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Refunding part of an order',
        detail: 'Use Partial Refund when only some items come back, for example one dish from a table’s order.',
      },
      {
        title: 'Refund history on the order',
        detail: 'A refunded order lists its refunds on the order details page, with amounts, reasons and times.',
      },
    ],
    related: ['find-an-order', 'void-an-item', 'view-sales-report'],
    order: 3,
    updated: '2026-11-24',
  },
]
