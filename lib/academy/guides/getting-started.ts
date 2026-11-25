import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const gettingStartedGuides: AcademyGuide[] = [
  {
    slug: 'open-shift',
    title: 'Open your shift',
    summary: 'Start your shift on the POS so you can take orders. It takes one tap and no cash count.',
    intro: [
      'Open your shift when you take over a till, before the first guest. Until a shift is open, the POS shows a start screen and you cannot ring anything up.',
      'The shift links every order, payment and tip you take to you. At the end of the day your shift report shows your sales, so open the shift yourself rather than working on one someone else started.',
      'You do not count the cash float when a shift starts. The float is counted once a day, when a manager opens the daily session for the branch. Before you tap Start Shift, check that the daily session is active and that the name in the top bar is yours.',
    ],
    topic: 'getting-started',
    roles: ['cashier', 'waiter'],
    level: 'basics',
    tags: ['shift', 'start-of-day', 'daily-session', 'login', 'float'],
    video: { src: `${VIDEO_BASE}/open-shift.mp4`, poster: '/academy/posters/open-shift.jpg', seconds: 34.6 },
    steps: [
      {
        title: 'Check the start screen',
        detail: 'When no shift is open, the POS shows a start screen in place of the register.',
        at: 2.6,
      },
      {
        title: 'Check the daily session is active',
        detail: 'The screen shows whether today’s daily session is running. The opening cash float was counted when the day was opened, not now.',
        at: 6.8,
      },
      {
        title: 'Tap Start Shift',
        detail: 'Your shift starts straight away. You are not asked to count any cash.',
        at: 11,
      },
      {
        title: 'Check the shift timer',
        detail: 'The timer in the top bar shows how long your shift has been open. Close Shift sits next to it for the end of the day.',
        at: 15.2,
      },
      {
        title: 'Open a category',
        detail: 'Categories are on the left. Tap one to see its items.',
        at: 19.4,
      },
      {
        title: 'Tap an item to start the first order',
        detail: 'The item goes into the cart on the right. From here, take orders as usual.',
        at: 23.6,
      },
    ],
    goodToKnow: [
      {
        title: 'No cash count at the start',
        detail: 'The POS does not ask for an opening float when a shift starts. The float is counted once a day, when the daily session is opened.',
      },
      {
        title: 'The daily session comes first',
        detail: 'Shifts and orders need an active daily session for the branch. Starting it needs its own permission, so it is normally done by a manager in Shift Management.',
      },
      {
        title: 'Close the shift you opened',
        detail: 'At the end of your time on the till, close your own shift so your sales and your cash count are saved under your name.',
      },
    ],
    troubleshooting: [
      {
        title: 'The daily session is not active',
        detail: 'You cannot start a shift until it is. Ask a manager to start the daily session in Shift Management, then come back to the till and tap Start Shift.',
      },
    ],
    related: ['close-shift', 'switch-user-and-clock-in', 'takeaway-order'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'close-shift',
    title: 'Close your shift',
    summary: 'Read your shift report, count the cash you took and close your shift at the end of the day.',
    intro: [
      'Close your shift when you hand over the till or finish for the day. Closing saves a report of every order and payment you took, plus the cash you counted, so a manager can see whether the drawer matches.',
      'Expected in drawer is the opening float plus the cash sales, minus any cash paid out of the drawer for expenses. Card and other payments are not in the drawer, so leave them out of your count.',
      'Before you start, finish or take payment for any open orders that are yours. Have the drawer open in front of you, count the cash taken this shift and leave the float in the drawer for the next person.',
    ],
    topic: 'getting-started',
    roles: ['cashier', 'waiter'],
    level: 'basics',
    tags: ['shift', 'end-of-day', 'cash', 'drawer', 'cash-count', 'report'],
    video: { src: `${VIDEO_BASE}/close-shift.mp4`, poster: '/academy/posters/close-shift.jpg', seconds: 34.6 },
    steps: [
      {
        title: 'Tap Close Shift in the top bar',
        detail: 'It sits next to the timer that shows how long your shift has been open.',
        at: 2.6,
      },
      {
        title: 'Read your shift report',
        detail: 'It shows your number of orders, your total sales and how guests paid.',
        at: 6.8,
      },
      {
        title: 'Check the cash figures',
        detail: 'Expected in drawer is the cash you should be holding. Keep it in mind while you count.',
        at: 11,
      },
      {
        title: 'Tap End Shift',
        detail: 'Finish or take payment for any open orders before you do this.',
        at: 15.2,
      },
      {
        title: 'Count the cash and type it in',
        detail: 'Enter the cash taken this shift. The float stays in the drawer and is not part of this count.',
        at: 19.4,
      },
      {
        title: 'Tap Confirm Close',
        detail: 'Your shift ends and the report is saved. The POS then waits on the start screen until the next shift begins.',
        at: 23.6,
      },
    ],
    goodToKnow: [
      {
        title: 'Pay Later money is not in the drawer',
        detail: 'Total sales includes orders put on Due / Pay Later. That money has not been collected yet, so do not expect to find it in the drawer.',
      },
      {
        title: 'Expenses come off the expected cash',
        detail: 'If cash was taken out of the drawer to pay for something during your shift, it is taken off Expected in drawer.',
      },
      {
        title: 'Closing a shift does not close the day',
        detail: 'A manager closes the daily session once every shift on the branch is closed. That is when the whole day’s cash is reconciled.',
      },
    ],
    troubleshooting: [
      {
        title: 'You still have open orders',
        detail: 'Take payment for them, then tap End Shift again. If an open order should not be there, ask a manager before you close.',
      },
      {
        title: 'Your count does not match Expected in drawer',
        detail: 'Count again before you confirm. If it is still different, type the amount you counted, not the expected figure, and tell your manager.',
      },
    ],
    related: ['open-shift', 'cash-in-and-out', 'read-the-z-report'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'switch-user-and-clock-in',
    title: 'Switch user and clock in',
    summary: 'Hand the till to the next person with their own PIN, and clock in or out so your hours are recorded.',
    intro: [
      'Every order is saved under the name of the person signed in on the till. When someone else takes over, they switch to their own name first, so sales, voids and discounts are recorded against the right person.',
      'Switching does not close anything. Open orders stay where they are and the shift keeps running. The next person taps Switch, types their own PIN, and carries on.',
      'The clock icon next to Switch is separate. It records working hours: clock in when you start, clock out when you leave.',
    ],
    topic: 'getting-started',
    roles: ['cashier', 'waiter', 'manager'],
    level: 'basics',
    tags: ['staff', 'pin', 'switch-user', 'clock-in', 'attendance'],
    video: { src: `${VIDEO_BASE}/switch-user-and-clock-in.mp4`, poster: '/academy/posters/switch-user-and-clock-in.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'This shows who is using the till',
        detail: 'Everything you ring up is saved under this name.',
        at: 2.6,
      },
      {
        title: 'Tap Switch to change staff',
        detail: 'Use it when another staff member takes over the till.',
        at: 6.8,
      },
      {
        title: 'Check who is signed in now',
        detail: 'The current staff member is shown at the top.',
        at: 11,
      },
      {
        title: 'The next person types their PIN',
        detail: 'The till switches to them. Their name goes on new orders.',
        at: 15.2,
      },
      {
        title: 'Not switching? Tap Cancel',
        detail: 'The current staff member stays signed in.',
        at: 19.4,
      },
      {
        title: 'Tap the clock to clock in or out',
        detail: 'The clock icon next to Switch records your working hours.',
        at: 23.6,
      },
      {
        title: 'Type your own PIN',
        detail: 'Any staff member can clock in here with their PIN.',
        at: 27.8,
      },
      {
        title: 'Then tap Clock In / Out',
        detail: 'Start of shift clocks you in. End of shift clocks you out.',
        at: 32,
      },
      {
        title: 'All staff controls are top right',
        detail: 'Clock, Switch and your name. Lock shows here if the owner turns it on.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Never share a PIN',
        detail: 'Reports show who rang up, voided and discounted each order. If two people use one PIN, nobody can tell who did what.',
      },
      {
        title: 'Lock button',
        detail: 'A Lock button also shows next to Switch when the owner turns on Terminal Lock in Settings.',
      },
    ],
    troubleshooting: [
      {
        title: 'The PIN is not accepted',
        detail: 'Check you are typing your own POS PIN. If it still fails, ask the owner or a manager to check or reset it on the Users page.',
      },
    ],
    related: ['open-shift', 'close-shift', 'add-a-staff-member'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'cash-in-and-out',
    title: 'Record cash in and out',
    summary: 'Write down a float top-up or cash paid out of the drawer, so the cash count still matches at the end of the day.',
    intro: [
      'Cash moves in and out of the drawer for reasons that are not sales: change brought in from the bank, cleaning supplies paid in cash, a delivery driver’s fuel. If it is not written down, the drawer will not match at closing and nobody will know why.',
      'Two buttons sound alike but do different jobs. Drawer only pops the cash drawer open and records nothing. Paid Out opens Session Expenses, where you record cash going in (Pay in) and cash going out (an expense).',
      'Each entry needs an amount and a reason. A paid-out entry also needs a category, such as Supplies or Fuel.',
    ],
    topic: 'getting-started',
    roles: ['cashier', 'manager'],
    level: 'everyday',
    tags: ['cash', 'cash-drawer', 'paid-out', 'pay-in', 'float', 'expenses'],
    video: { src: `${VIDEO_BASE}/cash-in-and-out.mp4`, poster: '/academy/posters/cash-in-and-out.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Tap More in the top bar',
        detail: 'Paid Out and Drawer are in this menu, next to Held.',
        at: 2.6,
      },
      {
        title: 'Drawer only pops the till open',
        detail: 'It records nothing. To write down cash, use Paid Out.',
        at: 6.8,
      },
      {
        title: 'Tap Paid Out',
        detail: 'This opens Session Expenses for today.',
        at: 11,
      },
      {
        title: 'Cash going in? Tap Pay in',
        detail: 'Use it for a float top-up or change brought in. It is not a sale.',
        at: 15.2,
      },
      {
        title: 'Type the amount',
        detail: 'Here AED 100 added to the drawer.',
        at: 19.4,
      },
      {
        title: 'Type the reason',
        detail: 'For example: Float top-up.',
        at: 23.6,
      },
      {
        title: 'Tap Record pay in',
        detail: 'The expected cash in the drawer goes up by AED 100.',
        at: 27.8,
      },
      {
        title: 'Now cash going out: tap Record',
        detail: 'The form opens on Expense (cash out).',
        at: 32,
      },
      {
        title: 'Type the amount paid out',
        detail: 'Here AED 25 taken from the drawer.',
        at: 36.2,
      },
      {
        title: 'Pick a category',
        detail: 'Tap Supplies, Ingredients, Fuel or another one.',
        at: 40.4,
      },
      {
        title: 'Say what it was for',
        detail: 'A short note, like the items you bought.',
        at: 44.6,
      },
      {
        title: 'Tap Record expense',
        detail: 'Both entries are now listed under History.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'It changes the expected cash',
        detail: 'A pay in raises the cash Till expects in the drawer and a cash expense lowers it. Both are counted when the shift and the day are closed.',
      },
      {
        title: 'Bought stock with drawer cash?',
        detail: 'A paid-out entry only takes the cash out of the till. Record the delivery as a purchase as well, so stock and item costs are updated.',
      },
    ],
    troubleshooting: [
      {
        title: 'Entered it twice or got the amount wrong',
        detail: 'Open the History tab and void the wrong entry with a reason, then record it again correctly.',
      },
    ],
    related: ['close-shift', 'record-a-purchase', 'read-the-z-report'],
    order: 4,
    updated: '2026-11-24',
  },
]
