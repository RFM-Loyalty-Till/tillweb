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
    related: ['close-shift', 'takeaway-order', 'dine-in-order'],
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
    related: ['open-shift', 'view-sales-report', 'cash-and-card-split'],
    order: 2,
    updated: '2026-11-24',
  },
]
