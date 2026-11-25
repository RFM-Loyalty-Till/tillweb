import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const paymentsGuides: AcademyGuide[] = [
  {
    slug: 'card-payment-with-tip',
    title: 'Take a card payment with a tip',
    summary: 'Add the guest’s tip before you pick the card, so the card is charged once for the bill and the tip together.',
    intro: [
      'When a guest wants to leave a tip on their card, add the tip in the POS first and then take the card payment. The card is charged for the bill and the tip in one go.',
      'The tip is kept apart from the bill total. It shows on its own line in the payment and in your shift summary, so tips are easy to count and share out at the end of the day.',
      'The order matters: tap Add Tip before you choose the card type. Once you have picked the card, the amount to charge is already set.',
    ],
    topic: 'payments',
    roles: ['cashier', 'waiter'],
    level: 'everyday',
    tags: ['card', 'tips', 'payment', 'visa', 'gratuity'],
    video: { src: `${VIDEO_BASE}/card-payment-with-tip.mp4`, poster: '/academy/posters/card-payment-with-tip.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Tap Takeaway',
        detail: 'Or open the table or order the guest is paying for.',
        at: 2.6,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left.',
        at: 6.8,
      },
      {
        title: 'Add the items',
        detail: 'Tap each item the guest ordered. Everything shows in the cart on the right.',
        at: 11,
      },
      {
        title: 'Tap Pay',
        detail: 'The button shows the bill total.',
        at: 19.4,
      },
      {
        title: 'Tap Add Tip',
        detail: 'Do this before you choose how the guest pays.',
        at: 23.6,
      },
      {
        title: 'Pick the tip',
        detail: 'Tap a percentage or a quick amount, or type a custom amount.',
        at: 27.8,
      },
      {
        title: 'Tap the green Add Tip button',
        detail: 'The tip is added and the amount to pay goes up.',
        at: 32,
      },
      {
        title: 'Pick the card type',
        detail: 'Tap the card the guest is paying with, for example Visa.',
        at: 36.2,
      },
      {
        title: 'Tap Pay',
        detail: 'The total now includes the tip. Confirm once the card machine approves, then print the receipt or tap Done.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Tips show in your shift summary',
        detail: 'When you close your shift, the tips you collected are listed in the summary, separate from sales.',
      },
      {
        title: 'Tips on a Split by Tender payment',
        detail: 'When a bill is paid with Split by Tender, tips are added to each payment inside that screen, not with Add Tip first.',
      },
      {
        title: 'Charge the same amount on the card machine',
        detail: 'If your card machine is not linked to the till, type the total shown in the POS, tip included, into the card machine.',
      },
    ],
    related: ['split-bill-between-people', 'cash-and-card-split', 'close-shift'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'split-bill-between-people',
    title: 'Split a bill between people',
    summary: 'Divide one bill into shares so each guest pays their own part, by cash or by card.',
    intro: [
      'Use Split Between People when a table wants to pay separately: friends paying their own share, or colleagues who each need a receipt. The bill stays one order, and each share is recorded as its own payment.',
      'There are three ways to split. Equal Split divides the total evenly. Split by Items lets each person pay for what they had. Custom Amounts lets you type how much each person pays.',
      'Each share can be paid a different way. The bill only closes once every share is paid, so take the last share before the last guest leaves the table.',
    ],
    topic: 'payments',
    roles: ['waiter', 'cashier'],
    level: 'everyday',
    tags: ['split', 'bill', 'sharing', 'groups', 'cash', 'card'],
    video: { src: `${VIDEO_BASE}/split-bill-between-people.mp4`, poster: '/academy/posters/split-bill-between-people.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Tap Pay',
        detail: 'Open the table or order first, then tap Pay.',
        at: 2.6,
      },
      {
        title: 'Tap Split Between People',
        detail: 'It is further down the list of payment methods, below the cash and card buttons.',
        at: 6.8,
      },
      {
        title: 'Tap Equal Split',
        detail: 'Or Split by Items, or Custom Amounts.',
        at: 11,
      },
      {
        title: 'Set the number of people',
        detail: 'Tap 2, 3, 4 or 5, or type a number.',
        at: 15.2,
      },
      {
        title: 'Tap Create Split',
        detail: 'Each person now has their own share to pay.',
        at: 19.4,
      },
      {
        title: 'Take the first share',
        detail: 'Person 1 pays cash. Tap Cash next to their share.',
        at: 23.6,
      },
      {
        title: 'Take the second share',
        detail: 'Person 2 pays by card. Tap Card next to their share.',
        at: 27.8,
      },
      {
        title: 'Pick the card type',
        detail: 'Tap the card brand, for example Visa.',
        at: 32,
      },
      {
        title: 'Tap Charge',
        detail: 'The share is recorded as paid. When every share is paid, the bill closes.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'One guest paying two ways',
        detail: 'If a single guest wants to pay part in cash and part by card, use Cash + Card Split instead.',
      },
      {
        title: 'Voided items are left out',
        detail: 'Items that were voided are not included when the bill is split.',
      },
      {
        title: 'Each payment is listed on the order',
        detail: 'The order details page shows every share separately, with how it was paid and the amount.',
      },
    ],
    related: ['split-bill-by-items', 'cash-and-card-split', 'print-the-bill'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'split-bill-by-items',
    title: 'Split a bill by items',
    summary: 'Let each guest pay for exactly what they ordered: give every item to a person, then take each payment.',
    intro: [
      'Splitting by items is for a table where everyone pays for their own food. You name each person, tick the items they had, and Till works out each share, tax included.',
      'Every item has to belong to someone before the split can be created. Add a person, tick their items, tap Add Person, and repeat until nothing is left.',
      'Each share is then paid on its own, by cash or card. The receipt lists every share and how it was paid.',
    ],
    topic: 'payments',
    roles: ['waiter', 'cashier'],
    level: 'everyday',
    tags: ['split', 'bill', 'cash', 'card', 'dine-in'],
    video: { src: `${VIDEO_BASE}/split-bill-by-items.mp4`, poster: '/academy/posters/split-bill-by-items.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Tap Pay',
        detail: 'Two guests want to pay for their own items.',
        at: 2.6,
      },
      {
        title: 'Tap Split Between People',
        detail: 'It is in the payment method list on the right.',
        at: 6.8,
      },
      {
        title: 'Tap Split by Items',
        detail: 'You give each item to the person who ordered it.',
        at: 11,
      },
      {
        title: 'Name the first person',
        detail: 'Type a name, for example Guest 1.',
        at: 15.2,
      },
      {
        title: 'Tick their items',
        detail: 'Tap each item this person had. Here Banoffee Pie and Mousse.',
        at: 19.4,
      },
      {
        title: 'Tap Add Person',
        detail: 'Guest 1 is saved with their items and share.',
        at: 23.6,
      },
      {
        title: 'Do the same for the next person',
        detail: 'Name Guest 2, tick the other items, tap Add Person.',
        at: 27.8,
      },
      {
        title: 'Tap Create Split',
        detail: 'Once every item is assigned, each person gets a share.',
        at: 32,
      },
      {
        title: 'Take the first payment',
        detail: 'Guest 1 pays cash. Tap Cash next to their share.',
        at: 36.2,
      },
      {
        title: 'Take the second payment',
        detail: 'Guest 2 pays by card. Tap Card next to their share.',
        at: 40.4,
      },
      {
        title: 'Pick the card type',
        detail: 'Tap the card brand, for example Visa.',
        at: 44.6,
      },
      {
        title: 'Tap Charge',
        detail: 'This records Guest 2 as paid and closes the bill.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Three ways to split',
        detail: 'Equal Split divides the total evenly. Split by Items gives each person their own items. Custom Amounts lets you type an exact amount for each person.',
      },
      {
        title: 'A started split cannot be cancelled',
        detail: 'Once one person has paid their share, the split stays. Check the items with the table before you take the first payment.',
      },
    ],
    troubleshooting: [
      {
        title: 'Create Split will not work',
        detail: 'An item is still unassigned. Every item on the bill must be ticked for one of the people.',
      },
    ],
    related: ['split-bill-between-people', 'cash-and-card-split', 'print-the-bill'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'cash-and-card-split',
    title: 'Take part cash, part card on one bill',
    summary: 'Let one guest pay part of the bill in cash and the rest by card, using Cash + Card Split.',
    intro: [
      'Use Cash + Card Split when one guest pays one bill two ways, for example they have some cash and put the rest on a card. If several guests each want to pay their own share, use Split Between People instead.',
      'Recording the two parts correctly keeps your shift right: the cash part counts toward Expected in drawer and the card part toward card totals. Taking the whole bill as card and putting the cash in the drawer would leave your count wrong at the end of the shift.',
      'Collect the cash and charge the card before you confirm in the POS, and make sure the amounts you enter match what the guest actually paid.',
    ],
    topic: 'payments',
    roles: ['cashier'],
    level: 'everyday',
    tags: ['cash', 'card', 'split', 'payment', 'mixed'],
    video: { src: `${VIDEO_BASE}/cash-and-card-split.mp4`, poster: '/academy/posters/cash-and-card-split.jpg', seconds: 38.8 },
    steps: [
      {
        title: 'Tap Pay',
        detail: 'Open the order the guest is paying for, then tap Pay.',
        at: 2.6,
      },
      {
        title: 'Tap Cash + Card Split',
        detail: 'It is further down the list of payment methods, below the cash and card buttons.',
        at: 6.8,
      },
      {
        title: 'Check the bill total',
        detail: 'The cash part and the card part must add up to this amount.',
        at: 11,
      },
      {
        title: 'Set the cash part',
        detail: 'Tap a quick split such as 50/50, or type the cash amount. The card part is the rest.',
        at: 15.2,
      },
      {
        title: 'Check the two amounts',
        detail: 'The summary shows how much is cash and how much is card.',
        at: 19.4,
      },
      {
        title: 'Pick the card type',
        detail: 'Tap the brand of the card used for the card part, for example Visa.',
        at: 23.6,
      },
      {
        title: 'Take both payments, then tap Manual Card Entry',
        detail: 'Collect the cash and charge the card on the card machine. Then tap Manual Card Entry to confirm. Both parts are saved on the same bill.',
        at: 27.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Manual Card Entry',
        detail: 'When no card terminal is linked to the till, you confirm the card part with Manual Card Entry once the card machine has approved it.',
      },
      {
        title: 'Both payments show on the order',
        detail: 'The order details page lists the cash part and the card part separately.',
      },
    ],
    related: ['split-bill-between-people', 'card-payment-with-tip', 'close-shift'],
    order: 4,
    updated: '2026-11-24',
  },
  {
    slug: 'apply-a-discount',
    title: 'Apply a discount',
    summary: 'Take a saved discount, or your own percent or amount, off the whole order before the guest pays.',
    intro: [
      'Discounts are for planned offers, such as a staff meal or a running promotion, and for gestures a manager has agreed to. Apply the discount before payment, so the guest is charged the lower amount and the receipt shows it.',
      'Saved discounts are set up by your manager and have a name, which makes them easy to follow in reports. Typing your own percent or amount is for the cases a saved discount does not cover.',
      'Every discount lowers the sales for the order and shows in the day’s reports. Check with your manager what you are allowed to give before you type your own.',
    ],
    topic: 'payments',
    roles: ['cashier', 'manager'],
    level: 'everyday',
    tags: ['discount', 'promotion', 'percent', 'payment', 'offers'],
    video: { src: `${VIDEO_BASE}/apply-a-discount.mp4`, poster: '/academy/posters/apply-a-discount.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Check the order in the cart',
        detail: 'Note the total before any discount.',
        at: 2.6,
      },
      {
        title: 'Tap Discount',
        detail: 'It is under the cart, next to Bill and Customer.',
        at: 6.8,
      },
      {
        title: 'Tap Apply next to a saved discount',
        detail: 'Saved discounts are listed here. Use one when it fits.',
        at: 11,
      },
      {
        title: 'Or type your own discount',
        detail: 'Choose Percent or Amount, then type the value, for example 10%.',
        at: 15.2,
      },
      {
        title: 'Tap Apply Open Discount',
        detail: 'The discount is added to the whole order.',
        at: 19.4,
      },
      {
        title: 'Check the new total',
        detail: 'A discount line shows in the cart and the total drops.',
        at: 23.6,
      },
      {
        title: 'Tap Pay',
        detail: 'The button already shows the discounted total.',
        at: 27.8,
      },
      {
        title: 'Tap Cash',
        detail: 'Or the method the guest is paying with.',
        at: 32,
      },
      {
        title: 'Enter the cash received',
        detail: 'Tap a note value, or Exact Amount.',
        at: 36.2,
      },
      {
        title: 'Tap Pay to confirm',
        detail: 'The order is paid, and the receipt shows the discount.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'You may be asked for a reason',
        detail: 'Your company can require a reason for discounts. When it does, the POS asks for one when you apply or remove a discount.',
      },
      {
        title: 'Taking a discount off',
        detail: 'Before payment, tap Discount again and tap Remove next to the discount.',
      },
      {
        title: 'Discount before you tap Pay',
        detail: 'Apply the discount before payment. To give money back on an order that is already paid, a manager does a refund.',
      },
    ],
    related: ['discount-one-item', 'create-a-discount-code', 'card-payment-with-tip'],
    order: 5,
    updated: '2026-11-24',
  },
  {
    slug: 'discount-one-item',
    title: 'Discount one item',
    summary: 'Take money off a single item with a ready-made item discount, and leave the rest of the order at full price.',
    intro: [
      'Sometimes one item deserves the discount, not the whole bill: a dessert that arrived late, or a promotion on one product. An item discount lowers the price of that line only.',
      'Item discounts are ready-made rules that your manager or owner sets up. On the POS you choose the rule, then tick which items in the cart it applies to.',
      'The cart shows the result straight away: the line shows the percentage and its new price, and the total drops by the same amount.',
    ],
    topic: 'payments',
    roles: ['cashier', 'waiter', 'manager'],
    level: 'everyday',
    tags: ['discount', 'item-discount', 'promotion', 'cash'],
    video: { src: `${VIDEO_BASE}/discount-one-item.mp4`, poster: '/academy/posters/discount-one-item.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Tap Discount',
        detail: 'It is under the cart, next to Bill and Customer.',
        at: 2.6,
      },
      {
        title: 'Tap Item Discounts',
        detail: 'These come off single items, not the whole order.',
        at: 6.8,
      },
      {
        title: 'Tap Apply next to a discount',
        detail: 'Here a 10% item discount. It lists the items it works on.',
        at: 11,
      },
      {
        title: 'Tick the item to discount',
        detail: 'Tap only the item that gets money off. Here Banoffee Pie.',
        at: 15.2,
      },
      {
        title: 'Tap Apply to 1 Item',
        detail: 'The other items keep their full price.',
        at: 19.4,
      },
      {
        title: 'See the new line price',
        detail: 'Banoffee Pie shows -10% and drops from 7.99 to 7.19.',
        at: 23.6,
      },
      {
        title: 'Check the total, then tap Pay',
        detail: 'The total is now AED 19.18 instead of 19.98.',
        at: 27.8,
      },
      {
        title: 'Pick a payment method',
        detail: 'Here the guest pays cash.',
        at: 32,
      },
      {
        title: 'Enter the cash received',
        detail: 'Tap a note value, or Exact Amount.',
        at: 36.2,
      },
      {
        title: 'Confirm the payment',
        detail: 'Tap Pay to finish.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'A rule only works on its own items',
        detail: 'Each item discount lists the items it can be used on. Items in the cart that are not on the list cannot be ticked.',
      },
      {
        title: 'Whole bill instead?',
        detail: 'To take money off the whole order, use an order discount from the same Discount window.',
      },
    ],
    troubleshooting: [
      {
        title: 'There is no Item Discounts tab',
        detail: 'No item discount is available right now. Rules can be limited to certain hours and certain items. Ask your manager which ones should be active.',
      },
    ],
    related: ['apply-a-discount', 'create-a-discount-code', 'card-payment-with-tip'],
    order: 6,
    updated: '2026-11-24',
  },
  {
    slug: 'pay-later-and-collect',
    title: 'Sell on Pay Later and collect the money',
    summary: 'Charge an order to a customer’s account, then record the payment when they settle what they owe.',
    intro: [
      'Due / Pay Later is for customers you trust to pay afterwards: a neighbouring office that settles weekly, or a regular who pays at the end of the month. The order is closed, and the amount is added to what the customer owes.',
      'It needs a customer on the order, because the debt has to belong to someone. Before you confirm, the payment screen shows what the customer already owes and their credit limit.',
      'When they pay, open Reports > Customer Dues, find their row and record a settlement. Their balance goes down by the amount you record.',
    ],
    topic: 'payments',
    roles: ['cashier', 'manager', 'owner'],
    level: 'advanced',
    tags: ['pay-later', 'customer', 'credit', 'customer-dues', 'settlement', 'cash'],
    video: { src: `${VIDEO_BASE}/pay-later-and-collect.mp4`, poster: '/academy/posters/pay-later-and-collect.jpg', seconds: 55.6 },
    steps: [
      {
        title: 'Tap Customer',
        detail: 'Pay Later needs a customer on the order.',
        at: 2.6,
      },
      {
        title: 'Find the customer',
        detail: 'Type their name or phone. New guest? Tap New Customer.',
        at: 6.8,
      },
      {
        title: 'Tap the customer',
        detail: 'Check the name and phone number first.',
        at: 11,
      },
      {
        title: 'Tap Pay',
        detail: 'The payment screen opens.',
        at: 15.2,
      },
      {
        title: 'Tap Due / Pay Later',
        detail: 'No money is taken now. It is charged to their account.',
        at: 19.4,
      },
      {
        title: 'Tap Charge to Account',
        detail: 'You can see what they already owe and their credit limit.',
        at: 23.6,
      },
      {
        title: 'Later: open Reports > Customer Dues',
        detail: 'It lists who owes money, and how much is outstanding.',
        at: 27.8,
      },
      {
        title: 'Tap Settle on their row',
        detail: 'This opens the customer’s Account tab.',
        at: 32,
      },
      {
        title: 'Tap Record Settlement',
        detail: 'The account shows what they owe and each unpaid order.',
        at: 36.2,
      },
      {
        title: 'Pick how they paid',
        detail: 'The full amount owed is filled in. Here they pay cash.',
        at: 40.4,
      },
      {
        title: 'Tap Record Settlement',
        detail: 'The payment is saved and the debt goes down.',
        at: 44.6,
      },
    ],
    goodToKnow: [
      {
        title: 'Oldest debt first',
        detail: 'A settlement is applied to the customer’s oldest unpaid order first, unless you choose otherwise.',
      },
      {
        title: 'Cash settlements go in the drawer',
        detail: 'Record a cash settlement while a shift is open. It is added to the cash Till expects in the drawer for that shift.',
      },
    ],
    troubleshooting: [
      {
        title: 'Due / Pay Later cannot be used',
        detail: 'Add a customer to the order first. The amount can only be charged to a named customer.',
      },
    ],
    related: ['add-customer-to-order', 'card-payment-with-tip', 'close-shift'],
    order: 7,
    updated: '2026-11-24',
  },
]
