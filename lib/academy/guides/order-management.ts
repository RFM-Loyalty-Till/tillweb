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
    related: ['void-a-whole-order', 'refund-an-order', 'add-items-to-open-table'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'void-a-whole-order',
    title: 'Void a whole order',
    summary: 'Cancel an entire order that was already sent, record what happens to the stock, and free the table.',
    intro: [
      'Void a whole order when none of it should be charged: guests who left before the food came, or an order rung up on the wrong table. The order is cancelled, its total becomes zero and the table is free again.',
      'Till asks what happens to the stock. Choose Waste if the food was made, and Inventory Return if nothing was prepared and the stock can go back.',
      'Every void needs a reason and a manager’s PIN. Voided orders are kept: you can find them in Order History and in the Voids report.',
    ],
    topic: 'order-management',
    roles: ['waiter', 'cashier', 'manager'],
    level: 'everyday',
    tags: ['void', 'cancel', 'manager-pin', 'waste', 'stock', 'dine-in'],
    video: { src: `${VIDEO_BASE}/void-a-whole-order.mp4`, poster: '/academy/posters/void-a-whole-order.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Tap the table to reopen its order',
        detail: 'Red tables have an open order. Here table 03.',
        at: 2.6,
      },
      {
        title: 'Tap Void',
        detail: 'It is under the cart. It cancels the whole order.',
        at: 6.8,
      },
      {
        title: 'Say what happens to the stock',
        detail: 'Waste if the food was made. Inventory Return if it was not.',
        at: 11,
      },
      {
        title: 'Pick a reason',
        detail: 'Every void is saved with its reason.',
        at: 15.2,
      },
      {
        title: 'Tap Void & Return to Stock',
        detail: 'The button name follows your stock choice.',
        at: 19.4,
      },
      {
        title: 'A manager enters their PIN',
        detail: 'Voids need a manager to approve them.',
        at: 23.6,
      },
      {
        title: 'Open Orders in the left menu',
        detail: 'This is where you see every order, including voided ones.',
        at: 27.8,
      },
      {
        title: 'Filter by Voided',
        detail: 'In Order History, set the status filter to Voided.',
        at: 32,
      },
      {
        title: 'Here is the voided order',
        detail: 'It shows the table, the items and a total of AED 0.00.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Only one item wrong?',
        detail: 'Void that item and keep the rest of the order. A whole-order void cancels everything on it.',
      },
      {
        title: 'Already paid?',
        detail: 'A paid order cannot be voided. Refund it instead.',
      },
    ],
    related: ['void-an-item', 'refund-an-order', 'voids-and-refunds-report'],
    order: 3,
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
    related: ['partial-refund', 'find-an-order', 'voids-and-refunds-report'],
    order: 4,
    updated: '2026-11-24',
  },
  {
    slug: 'partial-refund',
    title: 'Refund one item',
    summary: 'Give money back for part of a paid order: choose the items, how the money goes back and the reason.',
    intro: [
      'A partial refund returns the money for some items on a paid order and leaves the rest paid. Use it when one dish was wrong or sent back after the bill was settled.',
      'You choose three things: which items (and how many of each), what happens to the stock (Restock if it came back unused, Waste if it was made), and how the money goes back (the original payment method, or cash).',
      'Refunds need the refund permission, which managers and owners have. Each refunded item carries its own reason, which shows in the Refunds report.',
    ],
    topic: 'order-management',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['refund', 'partial-refund', 'money-back', 'complaint', 'restock', 'waste'],
    video: { src: `${VIDEO_BASE}/partial-refund.mp4`, poster: '/academy/posters/partial-refund.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Open the Orders page',
        detail: 'Refunds start from the paid order. Managers and owners only.',
        at: 2.6,
      },
      {
        title: 'Show completed orders',
        detail: 'Only a paid order can be refunded.',
        at: 6.8,
      },
      {
        title: 'Tap the order number',
        detail: 'Find the order by number, time or total, then open it.',
        at: 11,
      },
      {
        title: 'Tap Partial Refund',
        detail: 'Use it to give back some items, not the whole order.',
        at: 15.2,
      },
      {
        title: 'Tick the item to refund',
        detail: 'Here the Chocolate Mousse. Use + and − to refund fewer of it.',
        at: 19.4,
      },
      {
        title: 'Restock or Waste?',
        detail: 'Restock if it came back unused. Waste if it was made. Tap Waste.',
        at: 23.6,
      },
      {
        title: 'Choose how to pay it back',
        detail: 'Original payment method, or Cash. Here: Cash.',
        at: 27.8,
      },
      {
        title: 'Type the reason',
        detail: 'It shows in the Refunds report.',
        at: 32,
      },
      {
        title: 'Tap Refund 1 Item',
        detail: 'The button shows how many items you are refunding.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'The reason box appears after you tick',
        detail: 'Each item has its own reason. The box shows once the item is ticked.',
      },
      {
        title: 'What the order looks like afterwards',
        detail: 'The order total drops by the refunded amount and the item is marked Refunded. The other items stay paid.',
      },
    ],
    related: ['refund-an-order', 'find-an-order', 'voids-and-refunds-report'],
    order: 5,
    updated: '2026-11-24',
  },
]
