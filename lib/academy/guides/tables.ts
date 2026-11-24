import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const tablesGuides: AcademyGuide[] = [
  {
    slug: 'add-items-to-open-table',
    title: 'Add a second round to a table',
    summary: 'Add more items to a table’s open order and send only the new items to the kitchen.',
    intro: [
      'Tables order in rounds: drinks, then food, then dessert. Add each new round to the table’s open order rather than starting a new one, so the guests get one bill at the end.',
      'Items already sent stay in the cart with the time they went to the kitchen. New items are marked NEW until you send them, and only those go to the kitchen, so the first round is not made twice.',
      'Check the table number before you tap. Dessert added to the wrong table lands on the wrong bill and goes out to the wrong guests.',
    ],
    topic: 'tables',
    roles: ['waiter'],
    level: 'basics',
    tags: ['dine-in', 'tables', 'rounds', 'kitchen', 'update-order'],
    video: { src: `${VIDEO_BASE}/add-items-to-open-table.mp4`, poster: '/academy/posters/add-items-to-open-table.jpg', seconds: 38.8 },
    steps: [
      {
        title: 'Tap the red table',
        detail: 'Red means the table has an open order. Tapping it opens that order.',
        at: 2.6,
      },
      {
        title: 'Check the first round',
        detail: 'Items sent before show in the cart with the time they were sent.',
        at: 6.8,
      },
      {
        title: 'Open a category',
        detail: 'For dessert, tap the desserts category.',
        at: 11,
      },
      {
        title: 'Tap the new items',
        detail: 'Each tap adds the item to the same table order.',
        at: 15.2,
      },
      {
        title: 'Keep adding',
        detail: 'New items are marked NEW until you send them.',
        at: 19.4,
      },
      {
        title: 'Check the new round',
        detail: 'Only the items marked NEW go to the kitchen.',
        at: 23.6,
      },
      {
        title: 'Tap Update Order',
        detail: 'The new items go to the kitchen. The first round is not sent again, and the table total now includes both rounds.',
        at: 27.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Sent items are locked',
        detail: 'An item the kitchen already has cannot be deleted from the cart. Taking it off needs a void, with a reason and a manager PIN.',
      },
      {
        title: 'Send before you move a table',
        detail: 'Transfer Table only appears when the order has no unsent items. Send or remove anything marked NEW first.',
      },
    ],
    related: ['dine-in-order', 'void-an-item', 'print-the-bill'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'print-the-bill',
    title: 'Print the bill for a table',
    summary: 'Print a table’s bill before payment and see on the floor plan which tables are settling up.',
    intro: [
      'Most tables ask to see the bill before they pay. Printing it does not close the order: the table stays open, so you can still add an item, split the bill or take payment.',
      'Once the bill is printed, the table turns teal on the floor plan and is counted under Bill Printed. The whole team can see which tables are about to pay and which are still eating.',
      'Check the order before you print. If something is missing, you have to add it and print again, and the guests will notice the total change.',
    ],
    topic: 'tables',
    roles: ['waiter'],
    level: 'basics',
    tags: ['bill', 'tables', 'printing', 'floor-plan', 'check'],
    video: { src: `${VIDEO_BASE}/print-the-bill.mp4`, poster: '/academy/posters/print-the-bill.jpg', seconds: 34.6 },
    steps: [
      {
        title: 'Tap the table asking for the bill',
        detail: 'Red tables have an open order. Tapping one opens it in the cart.',
        at: 2.6,
      },
      {
        title: 'Check the order',
        detail: 'Make sure every item the guests had is in the cart before you print.',
        at: 6.8,
      },
      {
        title: 'Tap Bill',
        detail: 'It is under the cart. The print window opens so you can print to the bill printer. The order stays open for payment.',
        at: 11,
      },
      {
        title: 'Tap Tables in the top bar',
        detail: 'This takes you back to the floor plan.',
        at: 15.2,
      },
      {
        title: 'Find the teal table',
        detail: 'Teal means the bill is printed and the guests are settling up.',
        at: 19.4,
      },
      {
        title: 'Check Bill Printed in the legend',
        detail: 'The legend counts how many tables already have their bill.',
        at: 23.6,
      },
    ],
    goodToKnow: [
      {
        title: 'Taking payment',
        detail: 'When the guests are ready, tap the teal table and tap Pay.',
      },
      {
        title: 'Minimum spend',
        detail: 'If the table has a minimum spend and the bill is below it, the POS will not take payment. Tell the guests when you bring the bill.',
      },
      {
        title: 'Paying separately',
        detail: 'If the guests want to pay their own shares, use Split Between People when you take payment.',
      },
    ],
    troubleshooting: [
      {
        title: 'The print window opens but nothing prints',
        detail: 'Check that the bill printer is the one picked in the print window, that it is switched on and that it has paper. The order is still open, so tap Bill again.',
      },
    ],
    related: ['split-bill-between-people', 'dine-in-order', 'card-payment-with-tip'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'move-a-table',
    title: 'Move guests to another table',
    summary: 'Move a table’s open order to a free table when guests change seats, with their items and total.',
    intro: [
      'Guests move: the group grows, they want to sit outside, or their table is needed for a booking. Transfer the order rather than starting a new one, so the bill moves with the guests.',
      'After the transfer, the new table turns red and the old one is free again on the floor plan, so the rest of the team sees where the guests are now.',
      'Transfer Table is under More and only appears when the open order has no unsent items. Send or remove anything marked NEW before you start.',
    ],
    topic: 'tables',
    roles: ['waiter', 'manager'],
    level: 'everyday',
    tags: ['tables', 'transfer', 'move', 'floor-plan', 'seating'],
    video: { src: `${VIDEO_BASE}/move-a-table.mp4`, poster: '/academy/posters/move-a-table.jpg', seconds: 43 },
    steps: [
      {
        title: 'Tap the guests’ current table',
        detail: 'It is red because it has an open order. Tapping it opens the order.',
        at: 2.6,
      },
      {
        title: 'Tap More',
        detail: 'It is in the top bar.',
        at: 6.8,
      },
      {
        title: 'Tap Transfer Table',
        detail: 'This moves the open order to another table.',
        at: 11,
      },
      {
        title: 'Choose Entire Order',
        detail: 'Entire Order moves everything. Specific Items moves only the items you pick.',
        at: 15.2,
      },
      {
        title: 'Pick the new table',
        detail: 'Only free tables are listed.',
        at: 19.4,
      },
      {
        title: 'Tap Transfer Order',
        detail: 'Adding a reason is optional.',
        at: 23.6,
      },
      {
        title: 'Tap Tables in the top bar',
        detail: 'Check the floor plan.',
        at: 27.8,
      },
      {
        title: 'Check the new table is red',
        detail: 'The order and its total are on the new table, and the old table is free again.',
        at: 32,
      },
    ],
    goodToKnow: [
      {
        title: 'Moving only some guests',
        detail: 'Use Specific Items when part of the party moves, for example two people join another table.',
      },
      {
        title: 'Free tables only',
        detail: 'You can only transfer onto a table with no open order.',
      },
    ],
    troubleshooting: [
      {
        title: 'Transfer Table is missing from More',
        detail: 'The order has items that are not sent yet. Tap Update Order to send them, or remove them, then open More again.',
      },
    ],
    related: ['add-items-to-open-table', 'arrange-the-floor-plan', 'dine-in-order'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'hold-and-recall-order',
    title: 'Hold and recall an order',
    summary: 'Park a cart while a guest decides, serve the next guest, then bring the held order back.',
    intro: [
      'Hold is for the counter queue. When a guest steps aside to decide or goes to find a friend, park their cart and serve the next person instead of making the queue wait.',
      'A held order is saved but not paid. Held in the top bar shows how many orders are parked, so anyone on the till can see there is one waiting.',
      'Before you close your shift, open Held and finish every order in it, so nothing is left unpaid.',
    ],
    topic: 'tables',
    roles: ['cashier'],
    level: 'everyday',
    tags: ['hold', 'recall', 'held', 'queue', 'takeaway', 'counter'],
    video: { src: `${VIDEO_BASE}/hold-and-recall-order.mp4`, poster: '/academy/posters/hold-and-recall-order.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Tap Takeaway',
        detail: 'Start the order as usual.',
        at: 2.6,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left.',
        at: 6.8,
      },
      {
        title: 'Add the guest’s items',
        detail: 'Tap each item to put it in the cart.',
        at: 11,
      },
      {
        title: 'Keep adding',
        detail: 'The guest is still deciding, so you want to park this cart.',
        at: 15.2,
      },
      {
        title: 'Tap Hold',
        detail: 'The cart is saved and the screen clears.',
        at: 19.4,
      },
      {
        title: 'Check the Held count',
        detail: 'Held (1) in the top bar shows one parked order.',
        at: 23.6,
      },
      {
        title: 'Start the next guest’s order',
        detail: 'Start a new order as usual, for example from Espresso Bar.',
        at: 27.8,
      },
      {
        title: 'Add their items',
        detail: 'This is a separate order from the held one.',
        at: 32,
      },
      {
        title: 'Tap Held when the first guest is ready',
        detail: 'It lists every parked order.',
        at: 36.2,
      },
      {
        title: 'Tap the held order',
        detail: 'Find it by its items, amount or time. It comes back into the cart, ready for Pay.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Your open cart is held for you',
        detail: 'If another cart is open when you recall an order, that cart is held automatically, so nothing is lost. Finish the recalled order, then recall the other one from Held.',
      },
      {
        title: 'Tables do not need Hold',
        detail: 'A dine-in order stays on its table until it is paid. Use Hold for the counter, not for tables.',
      },
    ],
    related: ['takeaway-order', 'search-and-favorites', 'find-an-order'],
    order: 4,
    updated: '2026-11-24',
  },
]
