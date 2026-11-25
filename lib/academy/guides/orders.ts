import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const ordersGuides: AcademyGuide[] = [
  {
    slug: 'takeaway-order',
    title: 'Take a takeaway order',
    summary: 'Ring up a counter order, fix quantities in the cart and take cash, from the first tap to the receipt.',
    intro: [
      'Use Takeaway for a guest who orders at the counter and leaves with the food. There is no table to pick, and the guest pays before they go.',
      'The payment method you tap decides where the money is counted. Cash goes toward Expected in drawer when you close your shift, card goes toward card totals, so tap the method the guest really used.',
      'Read the cart back to the guest before you tap Pay. A wrong quantity takes one tap to fix now, and needs a manager once the order is paid.',
    ],
    topic: 'orders',
    roles: ['cashier', 'waiter'],
    level: 'basics',
    tags: ['takeaway', 'counter', 'cart', 'cash', 'payment', 'quantity'],
    video: { src: `${VIDEO_BASE}/takeaway-order.mp4`, poster: '/academy/posters/takeaway-order.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Tap Takeaway',
        detail: 'The order types are at the top of the cart: Dine In, Takeaway and Delivery.',
        at: 2.6,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left. Tap one to show its items.',
        at: 6.8,
      },
      {
        title: 'Tap an item to add it',
        detail: 'It goes straight into the cart on the right.',
        at: 11,
      },
      {
        title: 'Add the rest of the order',
        detail: 'Tap each item the guest orders. Switch category whenever you need to.',
        at: 15.2,
      },
      {
        title: 'Change a quantity if needed',
        detail: 'Use + and − next to the item in the cart.',
        at: 19.4,
      },
      {
        title: 'Tap Pay',
        detail: 'The button shows the order total and opens the list of payment methods.',
        at: 23.6,
      },
      {
        title: 'Tap Cash',
        detail: 'Cards, bank transfer and the other methods are in the same list.',
        at: 27.8,
      },
      {
        title: 'Enter the cash received',
        detail: 'Tap the note the guest handed you, or Exact Amount if they paid the exact total. The change to give back is shown.',
        at: 32,
      },
      {
        title: 'Tap Pay to confirm',
        detail: 'The order is paid and complete. Print the receipt if the guest wants one, or tap Done to start the next order.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Items with options open a popup',
        detail: 'Some items ask you to choose options, such as a size or a milk, before they go into the cart. Pick the options, then tap Add to Order.',
      },
      {
        title: 'Guest still deciding',
        detail: 'Tap Hold to park the cart and serve the next person. Tap Held in the top bar to bring it back.',
      },
      {
        title: 'Taking an item out',
        detail: 'Before payment, tap − until the quantity reaches zero. Once an order is sent to the kitchen, an item can only be removed with a void.',
      },
    ],
    related: ['modifiers-and-notes', 'hold-and-recall-order', 'card-payment-with-tip'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'dine-in-order',
    title: 'Take a dine-in order',
    summary: 'Seat guests at a table, send their order to the kitchen and take payment when they are ready to leave.',
    intro: [
      'Use Dine In for guests who sit down. The order belongs to the table, so anyone on the team can tap that table later to add a round, print the bill or take payment.',
      'Tap Send Order when the guests have ordered. The kitchen gets the items and the table turns red on the floor plan, so the team can see it is taken. Nothing is charged until you tap Pay.',
      'Before you start, check the table number and how many guests are sitting there. Some tables have a minimum spend, and payment is blocked until the bill reaches it, so mention it early if it applies.',
    ],
    topic: 'orders',
    roles: ['waiter', 'cashier'],
    level: 'basics',
    tags: ['dine-in', 'tables', 'floor-plan', 'kitchen', 'guests', 'card'],
    video: { src: `${VIDEO_BASE}/dine-in-order.mp4`, poster: '/academy/posters/dine-in-order.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Tap Dine In',
        detail: 'The floor plan opens straight away so you can pick the table.',
        at: 2.6,
      },
      {
        title: 'Tap the guests’ table',
        detail: 'Free tables are green. Tap the table the guests are sitting at.',
        at: 6.8,
      },
      {
        title: 'Set the number of guests',
        detail: 'Tap + until it matches the size of the party.',
        at: 11,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left.',
        at: 15.2,
      },
      {
        title: 'Tap items to add them',
        detail: 'Each tap puts one of that item in the cart.',
        at: 19.4,
      },
      {
        title: 'Switch category for drinks',
        detail: 'Tap another category at any time, for example Espresso Bar.',
        at: 23.6,
      },
      {
        title: 'Add the drinks',
        detail: 'The cart on the right keeps a running total.',
        at: 27.8,
      },
      {
        title: 'Tap Send Order',
        detail: 'The order goes to the kitchen and the table turns red on the floor plan.',
        at: 32,
      },
      {
        title: 'Tap the red table when the guests want to pay',
        detail: 'Red means the table has an open order. Tapping it opens the order in the cart.',
        at: 36.2,
      },
      {
        title: 'Tap Pay',
        detail: 'The button shows the table total.',
        at: 40.4,
      },
      {
        title: 'Pick the card type',
        detail: 'Tap the card the guest is paying with, for example Visa.',
        at: 44.6,
      },
      {
        title: 'Tap Pay once the card machine approves',
        detail: 'The payment is recorded and the table is free again for the next guests.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Nothing reaches the kitchen until you send it',
        detail: 'Items stay in the cart, marked NEW, until you tap Send Order. Send before you walk away from the till.',
      },
      {
        title: 'Minimum spend',
        detail: 'If a table has a minimum spend and the bill is below it, the POS will not take payment and tells you how much is missing.',
      },
      {
        title: 'Bill first',
        detail: 'If the guests want to see the bill before paying, tap Bill. The table turns teal so the team knows they are settling up.',
      },
    ],
    troubleshooting: [
      {
        title: 'The guests’ table is already red',
        detail: 'Another order is open on it. Tap it to see what is there: it may be these guests’ first round, or a table that was not paid and closed. Check with the team before you add to it.',
      },
    ],
    related: ['add-items-to-open-table', 'print-the-bill', 'modifiers-and-notes'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'modifiers-and-notes',
    title: 'Add item options and notes',
    summary: 'Choose an item’s options, add a note for an allergy or request, and add a note for the whole order.',
    intro: [
      'Guests change things: oat milk, no onions, sauce on the side. Options and notes put those requests on the kitchen ticket in writing, so nobody has to remember them.',
      'Options are set up on the item in the back office and can add to the price. Notes are free text and do not change the price. When an option exists for what the guest wants, use it: it reads clearly on the ticket and is charged correctly.',
      'For an allergy, type the note and tell the kitchen as well. A line on a ticket is easy to miss at a busy pass.',
    ],
    topic: 'orders',
    roles: ['waiter', 'cashier'],
    level: 'basics',
    tags: ['modifiers', 'options', 'notes', 'allergies', 'kitchen', 'requests'],
    video: { src: `${VIDEO_BASE}/modifiers-and-notes.mp4`, poster: '/academy/posters/modifiers-and-notes.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Tap Takeaway',
        detail: 'Or Dine In or Delivery. Options and notes work the same for every order type.',
        at: 2.6,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left.',
        at: 6.8,
      },
      {
        title: 'Tap an item that has options',
        detail: 'It opens a popup with its choices instead of going straight into the cart.',
        at: 11,
      },
      {
        title: 'Choose the options',
        detail: 'Tap what the guest wants. Any extra charge shows on the option button.',
        at: 15.2,
      },
      {
        title: 'Open the Notes tab',
        detail: 'It is in the same popup. Use it for an allergy or a request about this one item.',
        at: 19.4,
      },
      {
        title: 'Type the item note',
        detail: 'Keep it short and clear, for example: No onions.',
        at: 23.6,
      },
      {
        title: 'Tap Add to Order',
        detail: 'The item goes into the cart with its options and its note.',
        at: 27.8,
      },
      {
        title: 'Tap + Add order note',
        detail: 'It is under the cart items. Use it for something about the whole order.',
        at: 32,
      },
      {
        title: 'Type the order note',
        detail: 'It prints on the kitchen ticket for the whole order. Check the cart, then send or pay as usual.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Item note or order note',
        detail: 'An item note is about one item, such as no onions on one burger. An order note is about everything, such as bring all the food together.',
      },
      {
        title: 'Required choices',
        detail: 'Some option groups must be answered before the item can be added. Pick one in each required group, then tap Add to Order.',
      },
      {
        title: 'Read it back',
        detail: 'The chosen options show under the item name in the cart. Read them back to the guest before you send the order.',
      },
    ],
    related: ['dine-in-order', 'takeaway-order', 'add-items-to-open-table'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'search-and-favorites',
    title: 'Find items fast with search and Favorites',
    summary: 'Search the menu by name and star your best sellers so they are one tap away.',
    intro: [
      'On a long menu, hunting through categories holds up the queue. Search finds an item as you type its name, and Favorites puts your best sellers on one screen.',
      'Star the handful of items you sell all day, such as the house coffee or the most ordered main. If you star too many, Favorites turns into another long list.',
    ],
    topic: 'orders',
    roles: ['cashier', 'waiter'],
    level: 'basics',
    tags: ['search', 'favorites', 'speed', 'menu', 'best-sellers'],
    video: { src: `${VIDEO_BASE}/search-and-favorites.mp4`, poster: '/academy/posters/search-and-favorites.jpg', seconds: 30.4 },
    steps: [
      {
        title: 'Type in the search box',
        detail: 'Start typing the item name in the box above the menu. Results show as you type.',
        at: 2.6,
      },
      {
        title: 'Tap the item to add it',
        detail: 'It goes into the cart and the search box clears for the next item.',
        at: 6.8,
      },
      {
        title: 'Open the category of a best seller',
        detail: 'Pick an item you sell a lot.',
        at: 11,
      },
      {
        title: 'Tap the star on the item card',
        detail: 'Do this for each item you sell most.',
        at: 15.2,
      },
      {
        title: 'Tap Favorites',
        detail: 'Only your starred items show, ready to tap. Tap Favorites again to go back to all items.',
        at: 19.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Taking an item off Favorites',
        detail: 'Tap its star again.',
      },
      {
        title: 'Search clears itself',
        detail: 'After you add an item from search, the box is empty again, so you can type the next item without deleting anything.',
      },
    ],
    related: ['takeaway-order', 'modifiers-and-notes', 'custom-item'],
    order: 4,
    updated: '2026-11-24',
  },
  {
    slug: 'custom-item',
    title: 'Add a custom item',
    summary: 'Charge for something that is not on the menu, such as gift wrapping or a service fee, with your own name and price.',
    intro: [
      'Use Custom Item for a one-off charge with no button on the menu: a cake-cutting fee, gift wrapping, a dish the chef made specially. You can add it without waiting for a manager to create a menu item.',
      'The name you type is what the guest reads on the bill and the receipt, so write it the way you would say it to them. The price is for one, and tax uses the default rate unless you change it.',
      'A custom item does not appear in any category, and every one is logged as a price typed at the till. If you charge the same thing every day, ask your manager to add it to the menu instead.',
    ],
    topic: 'orders',
    roles: ['cashier', 'waiter'],
    level: 'everyday',
    tags: ['custom-item', 'open-price', 'service-charge', 'fees', 'cart'],
    video: { src: `${VIDEO_BASE}/custom-item.mp4`, poster: '/academy/posters/custom-item.jpg', seconds: 38.8 },
    steps: [
      {
        title: 'Tap Takeaway',
        detail: 'Pick the order type first. Custom Item works with any order type.',
        at: 2.6,
      },
      {
        title: 'Tap Custom Item',
        detail: 'It is above the menu, next to the search box.',
        at: 6.8,
      },
      {
        title: 'Type the item name',
        detail: 'This name shows in the cart, on the bill and on the receipt.',
        at: 11,
      },
      {
        title: 'Enter the price',
        detail: 'The price for one, in AED.',
        at: 15.2,
      },
      {
        title: 'Set the quantity',
        detail: 'Tap + or − to change how many.',
        at: 19.4,
      },
      {
        title: 'Tap Add to Cart',
        detail: 'Tax uses the default rate unless you change it before adding.',
        at: 23.6,
      },
      {
        title: 'Check the cart',
        detail: 'The line is marked as a custom item. Send or pay for the order as usual.',
        at: 27.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Delivery charges have their own button',
        detail: 'On takeaway and delivery orders, Delivery Fee sits next to Custom Item. Use it to add a delivery charge.',
      },
      {
        title: 'Custom prices are logged',
        detail: 'Each custom item is recorded as a price typed at the till, so managers can review them later.',
      },
    ],
    related: ['delivery-order', 'takeaway-order', 'add-a-menu-item'],
    order: 5,
    updated: '2026-11-24',
  },
  {
    slug: 'delivery-order',
    title: 'Take a delivery order',
    summary: 'Enter the customer’s phone, name and address, add the items, and take payment now or on delivery.',
    intro: [
      'Use Delivery for food that leaves with a driver, whether the guest phoned you or ordered through an app such as Talabat or Careem. Set the order source correctly: it is how your reports tell phone orders from each app.',
      'Phone number, name and address are all required. Type the phone number first, because returning customers are found by it, and new customers are saved for next time.',
      'Decide how the order is paid before you tap Pay. If the guest pays now, take payment as usual. If the driver will collect the money at the door, use Due / Pay Later so the order is saved without a payment.',
      'Write the address for a driver who does not know the area: building, street and area, with a landmark or "call on arrival" in the instructions.',
    ],
    topic: 'orders',
    roles: ['cashier'],
    level: 'everyday',
    tags: ['delivery', 'phone-order', 'aggregator', 'address', 'pay-later', 'customer'],
    video: { src: `${VIDEO_BASE}/delivery-order.mp4`, poster: '/academy/posters/delivery-order.jpg', seconds: 72.4 },
    steps: [
      {
        title: 'Tap Delivery',
        detail: 'It is at the top of the cart, next to Dine In and Takeaway.',
        at: 2.6,
      },
      {
        title: 'Check the order source',
        detail: 'Use POS Delivery for phone orders. Pick Talabat, Careem or the right app when the order came from one.',
        at: 6.8,
      },
      {
        title: 'Type the phone number',
        detail: 'Returning customers are found by their number.',
        at: 11,
      },
      {
        title: 'Type the customer name',
        detail: 'Phone, name and address are all required.',
        at: 15.2,
      },
      {
        title: 'Type the delivery address',
        detail: 'Building, street and area, so the driver can find it.',
        at: 19.4,
      },
      {
        title: 'Add instructions if needed',
        detail: 'Optional, for example call on arrival or leave at the door.',
        at: 23.6,
      },
      {
        title: 'Tap Done',
        detail: 'The details fold away and stay on the order.',
        at: 27.8,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left.',
        at: 32,
      },
      {
        title: 'Tap items to add them',
        detail: 'They go into the cart on the right.',
        at: 36.2,
      },
      {
        title: 'Add a drink',
        detail: 'Switch to the drinks category and tap the drink. Check the cart before you take payment.',
        at: 40.4,
      },
      {
        title: 'Tap Pay',
        detail: 'Take payment now, or use Due / Pay Later if the driver will collect it.',
        at: 48.8,
      },
      {
        title: 'Tap Cash',
        detail: 'Or the method the guest is paying with.',
        at: 53,
      },
      {
        title: 'Enter the cash received',
        detail: 'Tap a note value, or Exact Amount.',
        at: 57.2,
      },
      {
        title: 'Tap Pay to confirm',
        detail: 'The order is complete. Print the receipt for the driver, or tap Done for the next order.',
        at: 61.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Add a delivery charge',
        detail: 'Tap Delivery Fee, next to Custom Item above the menu, to add a delivery charge to the order.',
      },
      {
        title: 'Pay Later is not money in hand',
        detail: 'An order on Due / Pay Later counts in your sales but not in the cash you collected, until payment is taken for it.',
      },
      {
        title: 'Customers are saved',
        detail: 'Phone and app delivery orders save the customer, so their details come up the next time you type their number.',
      },
    ],
    related: ['add-customer-to-order', 'takeaway-order', 'custom-item'],
    order: 6,
    updated: '2026-11-24',
  },
  {
    slug: 'add-customer-to-order',
    title: 'Add a customer to an order',
    summary: 'Link an order to a guest by phone number or name, so it is saved to their history.',
    intro: [
      'Adding a customer ties the order to a person. Their past orders are kept in one place, and the order carries their name and phone number on the payment screen.',
      'Search first. Typing a phone number is the quickest and safest way, because two guests can share a name. Only tap New Customer when the guest is not in the list.',
      'Some payments need a customer on the order, for example charging a bill to an account with Due / Pay Later.',
    ],
    topic: 'orders',
    roles: ['cashier', 'waiter'],
    level: 'everyday',
    tags: ['customer', 'phone', 'loyalty', 'takeaway'],
    video: { src: `${VIDEO_BASE}/add-customer-to-order.mp4`, poster: '/academy/posters/add-customer-to-order.jpg', seconds: 55.6 },
    steps: [
      {
        title: 'Tap Customer',
        detail: 'It is under the cart, next to Discount.',
        at: 2.6,
      },
      {
        title: 'New guest? Tap New Customer',
        detail: 'For a returning guest, search instead.',
        at: 6.8,
      },
      {
        title: 'Search by phone number',
        detail: 'Type the guest’s mobile number or name.',
        at: 11,
      },
      {
        title: 'Tap the right customer',
        detail: 'Check the name and number, then tap it.',
        at: 15.2,
      },
      {
        title: 'The customer is on the order',
        detail: 'Their phone, name and address show at the top of the cart.',
        at: 19.4,
      },
      {
        title: 'The Customer button shows their name',
        detail: 'Tap it again to change or remove the customer.',
        at: 23.6,
      },
      {
        title: 'Tap Pay',
        detail: 'The customer stays linked when you pay.',
        at: 27.8,
      },
      {
        title: 'The customer shows here too',
        detail: 'The payment screen shows who the order belongs to.',
        at: 32,
      },
      {
        title: 'Pick a payment method',
        detail: 'Here the guest pays cash.',
        at: 36.2,
      },
      {
        title: 'Enter the cash received',
        detail: 'Tap a note value, or Exact Amount.',
        at: 40.4,
      },
      {
        title: 'Confirm the payment',
        detail: 'Tap Pay to finish.',
        at: 44.6,
      },
    ],
    goodToKnow: [
      {
        title: 'Change or remove the customer',
        detail: 'After you pick a customer, the Customer button shows their name. Tap it again to change or remove them before you take payment.',
      },
      {
        title: 'Loyalty points',
        detail: 'When loyalty is switched on, the points for the order go to the customer you added.',
      },
    ],
    troubleshooting: [
      {
        title: 'Two customers match the search',
        detail: 'Check the phone number before you tap. Picking the wrong person puts the order in the wrong history.',
      },
    ],
    related: ['pay-later-and-collect', 'delivery-order', 'takeaway-order'],
    order: 7,
    updated: '2026-11-24',
  },
]
