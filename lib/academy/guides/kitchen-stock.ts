import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const kitchenStockGuides: AcademyGuide[] = [
  {
    slug: 'use-the-kitchen-display',
    title: 'Use the Kitchen Display',
    summary: 'Work tickets on the kitchen screen: FIRE to start cooking, Ready when it is done, BUMP when it is served.',
    intro: [
      'The Kitchen Display shows every order sent from the POS as a ticket, with the order type, the items, any allergens and how long it has been waiting. The kitchen keeps it open all day.',
      'A ticket moves through three taps. FIRE starts cooking and turns the top of the ticket blue. Ready tells the floor the food can be collected. BUMP marks it served and takes it off the live screen.',
      'Nothing is lost when a ticket is bumped. PAST ORDERS shows the finished tickets, and the arrow button on a ticket brings it back if it was bumped by mistake.',
    ],
    topic: 'kitchen-stock',
    roles: ['kitchen', 'manager'],
    level: 'everyday',
    tags: ['kitchen', 'kds', 'tickets', 'fire', 'bump'],
    video: { src: `${VIDEO_BASE}/use-the-kitchen-display.mp4`, poster: '/academy/posters/use-the-kitchen-display.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Open Kitchen Display',
        detail: 'It is in the left menu. The kitchen keeps this screen open all day.',
        at: 2.6,
      },
      {
        title: 'Every sent order shows as a ticket',
        detail: 'Newest first, with the order type, number, items and waiting time.',
        at: 6.8,
      },
      {
        title: 'Tap FIRE to start cooking',
        detail: 'FIRE (2) starts both items on this ticket.',
        at: 11,
      },
      {
        title: 'The ticket is now cooking',
        detail: 'The top of the ticket turns blue and the counter shows 2 Cooking.',
        at: 15.2,
      },
      {
        title: 'Tap Ready when the food is done',
        detail: 'This tells the team the order can be picked up.',
        at: 19.4,
      },
      {
        title: 'Tap BUMP when it is served',
        detail: 'The ticket is marked served and leaves the live screen.',
        at: 23.6,
      },
      {
        title: 'Tap PAST ORDERS',
        detail: 'This shows the tickets that are already served.',
        at: 27.8,
      },
      {
        title: 'The finished ticket is here',
        detail: 'It is marked COMPLETE. The arrow button undoes a bump made by mistake.',
        at: 32,
      },
      {
        title: 'Go back to the live tickets',
        detail: 'Tap Back to Active Orders.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Counters at the top',
        detail: 'Pending, Cooking and Ready show how many items are in each stage, so the pass can see the load at a glance.',
      },
      {
        title: 'Voided orders',
        detail: 'An order voided on the POS shows on the kitchen screen in red as ORDER VOIDED, so nobody keeps cooking it.',
      },
    ],
    troubleshooting: [
      {
        title: 'A yellow banner says tickets may not have printed',
        detail: 'No kitchen printer confirmed those tickets. Check the printer and reprint if needed, then tap Mark all as received.',
      },
    ],
    related: ['dine-in-order', 'void-an-item', 'mark-item-out-of-stock'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'count-and-adjust-stock',
    title: 'Count and adjust stock',
    summary: 'After a stock count, set an item to the amount you counted, with a reason, and see the change on record.',
    intro: [
      'The stock level in Till moves by itself with sales and purchases, but shelves and screens drift apart: spills, over-pouring, a delivery nobody entered. A regular count puts the two back in line.',
      'In Inventory, find the item and tap Update Stock. After a count, choose Set Stock Level and type what you counted. Add Stock and Remove Stock change the level by an amount instead.',
      'Every change needs a reason and is recorded with the person and the time. You can read it back in Audit Logs under the Item Stock area.',
    ],
    topic: 'kitchen-stock',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['inventory', 'stock', 'stock-count', 'audit-log', 'ingredients'],
    video: { src: `${VIDEO_BASE}/count-and-adjust-stock.mp4`, poster: '/academy/posters/count-and-adjust-stock.jpg', seconds: 55.6 },
    steps: [
      {
        title: 'Open Inventory and find the item',
        detail: 'Inventory is in the left menu. Type the item name in the search box.',
        at: 2.6,
      },
      {
        title: 'Check the stock on record',
        detail: 'Till shows 18.5 liters of Fresh Milk. You counted 17 on the shelf.',
        at: 6.8,
      },
      {
        title: 'Tap Update Stock',
        detail: 'It is at the end of the item’s row.',
        at: 11,
      },
      {
        title: 'Choose Set Stock Level',
        detail: 'Use it after a count. Add Stock and Remove Stock change the amount instead.',
        at: 15.2,
      },
      {
        title: 'Type the amount you counted',
        detail: 'Here 17. The new stock shows at the top before you save.',
        at: 19.4,
      },
      {
        title: 'Pick a reason',
        detail: 'Choose Physical count / Audit. Every stock change needs a reason.',
        at: 23.6,
      },
      {
        title: 'Tap Update Stock to save',
        detail: 'The stock level changes right away.',
        at: 27.8,
      },
      {
        title: 'The new quantity is saved',
        detail: 'Fresh Milk now shows 17 liters.',
        at: 32,
      },
      {
        title: 'Open Audit Logs to see the record',
        detail: 'Audit Logs is in the left menu. Every change is listed here.',
        at: 36.2,
      },
      {
        title: 'Set Area to Item Stock',
        detail: 'Now the list shows only stock changes, newest first.',
        at: 40.4,
      },
      {
        title: 'Tap View on the top row',
        detail: 'The row shows who changed the stock and when.',
        at: 44.6,
      },
    ],
    goodToKnow: [
      {
        title: 'Check before you save',
        detail: 'The window shows the current stock and the new stock at the top before you tap Update Stock.',
      },
      {
        title: 'Deliveries are not adjustments',
        detail: 'When stock arrives from a supplier, record a purchase. It raises the stock and updates the item cost as well.',
      },
    ],
    related: ['record-a-purchase', 'mark-item-out-of-stock', 'best-selling-items'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'record-a-purchase',
    title: 'Record a purchase',
    summary: 'Enter a supplier delivery with its invoice number, items, quantities and costs, so stock goes up straight away.',
    intro: [
      'When a delivery arrives, record it as a purchase. Stock goes up by what you received, and the cost you paid updates the item’s average cost, which feeds your recipe costs.',
      'Choose the supplier, type the invoice number from their paperwork, then add a line for each product with the quantity received and the cost of one unit. Till works out the line total and tax.',
      'Save & Process receives the stock now. Save as Draft keeps the purchase for later without changing stock.',
    ],
    topic: 'kitchen-stock',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['purchases', 'suppliers', 'inventory', 'stock', 'invoice', 'costs'],
    video: { src: `${VIDEO_BASE}/record-a-purchase.mp4`, poster: '/academy/posters/record-a-purchase.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Open Purchases, tap New Purchase',
        detail: 'Purchases is in the left menu. Use it when a delivery arrives.',
        at: 2.6,
      },
      {
        title: 'Choose the supplier',
        detail: 'Tap the Supplier box, then tap the supplier in the list.',
        at: 6.8,
      },
      {
        title: 'Type the supplier’s invoice number',
        detail: 'It is printed on the invoice or delivery note.',
        at: 11,
      },
      {
        title: 'Tap Add Item',
        detail: 'Add one line for each product that was delivered.',
        at: 15.2,
      },
      {
        title: 'Tap Select item',
        detail: 'A list of your stock items opens.',
        at: 19.4,
      },
      {
        title: 'Search and tap the item',
        detail: 'Type part of the name, then tap the item that was delivered.',
        at: 23.6,
      },
      {
        title: 'Enter the quantity received',
        detail: 'Here 60 eggs were delivered.',
        at: 27.8,
      },
      {
        title: 'Enter the cost of one unit',
        detail: 'AED 0.50 per egg. The line total and tax are worked out for you.',
        at: 32,
      },
      {
        title: 'Tap Save & Process',
        detail: 'Stock goes up right away. Save as Draft keeps it for later instead.',
        at: 36.2,
      },
      {
        title: 'Skip the email, or send it',
        detail: 'You can email the order to the supplier from here. Tap Skip.',
        at: 40.4,
      },
      {
        title: 'The purchase is saved as Received',
        detail: 'It is at the top of the list with the supplier, total and amount due.',
        at: 44.6,
      },
      {
        title: 'Stock is updated in Inventory',
        detail: 'The eggs went from 30 to 90 pieces.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'New supplier?',
        detail: 'Add them first with the Suppliers button on the Purchases page. Then they appear in the Supplier list.',
      },
      {
        title: 'What you owe',
        detail: 'A received purchase shows in the list with its total and the amount still due to the supplier.',
      },
    ],
    troubleshooting: [
      {
        title: 'It says the invoice already exists',
        detail: 'The same invoice number cannot be entered twice for one supplier. Check the list: the delivery may already be recorded.',
      },
      {
        title: 'Entered by mistake',
        detail: 'Open the row menu on the purchase and choose Void Receipt, with a reason. The stock it added is taken back.',
      },
    ],
    related: ['count-and-adjust-stock', 'cash-in-and-out', 'best-selling-items'],
    order: 3,
    updated: '2026-11-24',
  },
]
