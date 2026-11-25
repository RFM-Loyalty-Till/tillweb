import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const setupGuides: AcademyGuide[] = [
  {
    slug: 'add-a-staff-member',
    title: 'Add a staff member',
    summary: 'Create a user with their own POS PIN, role and branch, so they can sign in and work under their own name.',
    intro: [
      'Everyone who uses the POS should have their own user. Their name goes on the orders they take, and reports can show who sold, voided and discounted what.',
      'A user needs a full name, their own email address, a 4-digit POS PIN, a role and at least one branch. The role decides what they are allowed to do. The branch decides where they can work.',
      'They can sign in with their PIN as soon as you tap Create User.',
    ],
    topic: 'setup',
    roles: ['owner', 'manager'],
    level: 'advanced',
    tags: ['staff', 'users', 'pin', 'roles', 'branches'],
    video: { src: `${VIDEO_BASE}/add-a-staff-member.mp4`, poster: '/academy/posters/add-a-staff-member.jpg', seconds: 43 },
    steps: [
      {
        title: 'Open Users',
        detail: 'In the back office, Users lists everyone who can use the POS.',
        at: 2.6,
      },
      {
        title: 'Tap Add User',
        detail: 'The button is at the top right of the Users page.',
        at: 6.8,
      },
      {
        title: 'Type their full name',
        detail: 'This name shows on orders and reports.',
        at: 11,
      },
      {
        title: 'Enter their email',
        detail: 'Each staff member needs their own email address.',
        at: 15.2,
      },
      {
        title: 'Set a 4-digit POS PIN',
        detail: 'They type this PIN to sign in on the POS. Keep it unique.',
        at: 19.4,
      },
      {
        title: 'Pick their role',
        detail: 'The role decides what they can do. Here: Waiter.',
        at: 23.6,
      },
      {
        title: 'Choose their branch',
        detail: 'They only see and work in the branches you pick.',
        at: 27.8,
      },
      {
        title: 'Tap Create User to save',
        detail: 'They can sign in with their PIN straight away.',
        at: 32,
      },
    ],
    goodToKnow: [
      {
        title: 'Someone leaves',
        detail: 'Use Deactivate on their row in the Staff List. They can no longer sign in, and their past orders stay in your reports.',
      },
      {
        title: 'User limit',
        detail: 'The Users page shows how many users you have out of the number your plan allows, for example 24/50.',
      },
    ],
    troubleshooting: [
      {
        title: 'They work in more than one branch',
        detail: 'Select every branch they work in under Assigned Branches. Hold Ctrl or Cmd to select more than one.',
      },
    ],
    related: ['set-role-permissions', 'switch-user-and-clock-in', 'open-shift'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'set-role-permissions',
    title: 'Set role permissions',
    summary: 'Choose what a role can do in Till by ticking its permissions, then save so everyone with that role follows.',
    intro: [
      'A role is a set of permissions: what a waiter, a cashier or a host may see and do. Staff get their permissions from the role you give them, so changing a role changes it for everyone who has it.',
      'Roles live in Settings > Roles. Till comes with built-in roles, and Create Role adds your own, for example a Host who can only see the tables.',
      'Permissions are grouped by area, such as Orders, Tables and Reports, and each group shows how many are switched on. Use the search box to find one quickly.',
    ],
    topic: 'setup',
    roles: ['owner'],
    level: 'advanced',
    tags: ['roles', 'permissions', 'staff', 'security', 'settings'],
    video: { src: `${VIDEO_BASE}/set-role-permissions.mp4`, poster: '/academy/posters/set-role-permissions.jpg', seconds: 38.8 },
    steps: [
      {
        title: 'Roles live in Settings > Roles',
        detail: 'Tap Create Role to add your own. We made one called Host (Academy).',
        at: 2.6,
      },
      {
        title: 'Tap Edit on the role',
        detail: 'Built-in roles like Waiter can be edited too. Change them with care.',
        at: 6.8,
      },
      {
        title: 'Permissions are grouped by area',
        detail: 'Users, Catalog, Orders, Tables and more. Each shows how many are on.',
        at: 11,
      },
      {
        title: 'Search for a permission',
        detail: 'Type a word in the search box to find it fast. Here: tables.',
        at: 15.2,
      },
      {
        title: 'Tap a group to open it',
        detail: 'You see every permission in that area.',
        at: 19.4,
      },
      {
        title: 'Tick the permission to switch it on',
        detail: 'Here: List, so a Host can see the tables. Untick to switch off.',
        at: 23.6,
      },
      {
        title: 'Tap Save Changes',
        detail: 'Everyone with this role gets the change.',
        at: 27.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Give the least that works',
        detail: 'Start a new role with few permissions and add more when someone needs them. Refunds, voids and discounts are the ones to hand out carefully.',
      },
      {
        title: 'Change built-in roles with care',
        detail: 'Built-in roles can be edited too. A change there reaches every person with that role as soon as you save.',
      },
    ],
    related: ['add-a-staff-member', 'switch-user-and-clock-in', 'voids-and-refunds-report'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'add-tables-and-floors',
    title: 'Add tables and floors',
    summary: 'Create a table with its number, name and seats in Table Management, then put it on the right floor.',
    intro: [
      'Tables are created once in Table Management and then appear on the POS floor plan. Do this when you open, add seating or start using a terrace.',
      'It takes two stages. In Setup > Custom Tables you create the table with a number, a name and its seats. Then you switch on Floor Mode, open Assign, and put the table on a floor.',
      'A new table is listed under Unassigned Tables until it has a floor. Once assigned, staff can pick it on that floor on the POS.',
    ],
    topic: 'setup',
    roles: ['owner', 'manager'],
    level: 'advanced',
    tags: ['tables', 'floors', 'table-management', 'dine-in', 'setup'],
    video: { src: `${VIDEO_BASE}/add-tables-and-floors.mp4`, poster: '/academy/posters/add-tables-and-floors.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Open the Setup tab',
        detail: 'In Table Management, Setup is where you create tables.',
        at: 2.6,
      },
      {
        title: 'Tap Custom Tables',
        detail: 'Pick your own table number, name and seats.',
        at: 6.8,
      },
      {
        title: 'Type the table number',
        detail: 'Use a number that is not taken yet. Here: 61.',
        at: 11,
      },
      {
        title: 'Type the table name',
        detail: 'This is the name staff see on the floor plan.',
        at: 15.2,
      },
      {
        title: 'Set the number of seats',
        detail: 'How many guests fit at this table. Here: 2.',
        at: 19.4,
      },
      {
        title: 'Tap Create to save the table',
        detail: 'Use Add Table first if you want to make several at once.',
        at: 23.6,
      },
      {
        title: 'Switch on Floor Mode',
        detail: 'This shows your floors, such as Ground Floor and Floor 2.',
        at: 27.8,
      },
      {
        title: 'New floor? Tap Add New Floor',
        detail: 'Give it a name like Rooftop. We use the floors we already have.',
        at: 32,
      },
      {
        title: 'Open the Assign tab',
        detail: 'Here you put tables on a floor.',
        at: 36.2,
      },
      {
        title: 'Tap the new table to select it',
        detail: 'New tables are listed under Unassigned Tables.',
        at: 40.4,
      },
      {
        title: 'Choose the floor',
        detail: 'Pick where the table stands. Here: Floor 2.',
        at: 44.6,
      },
      {
        title: 'Tap Assign to save',
        detail: 'The table now shows on that floor in the POS.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Several tables at once',
        detail: 'In Custom Tables, tap Add Table to add more rows before you tap Create. Standard Layout creates a set of tables with the same seating.',
      },
      {
        title: 'Then place it on the floor plan',
        detail: 'Assigning a floor puts the table on that floor. Where it sits on screen is set on the POS floor plan.',
      },
    ],
    troubleshooting: [
      {
        title: 'A floor is missing from the list',
        detail: 'Only active floors can be chosen. Check the floor under the Floors tab.',
      },
    ],
    related: ['arrange-the-floor-plan', 'create-table-qr-codes', 'dine-in-order'],
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
    topic: 'setup',
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
    related: ['add-tables-and-floors', 'move-a-table', 'create-table-qr-codes'],
    order: 4,
    updated: '2026-11-24',
  },
  {
    slug: 'create-table-qr-codes',
    title: 'Make table QR codes',
    summary: 'Switch on QR ordering, then generate, view and download the QR code for each table.',
    intro: [
      'A table QR code lets guests scan with their phone to see the menu, order and pay. Each code belongs to one table, so orders from it arrive on that table on the POS.',
      'First decide what guests may do. In Settings > QR Ordering, switch on Enable QR Ordering and choose the default mode: Order & Pay, Pay Only, or Both Modes.',
      'Then open Table Management > QR Codes. Generate the codes, view one to check it, and download or print it for the table.',
    ],
    topic: 'setup',
    roles: ['owner', 'manager'],
    level: 'advanced',
    tags: ['qr', 'qr-ordering', 'tables', 'settings', 'dine-in'],
    video: { src: `${VIDEO_BASE}/create-table-qr-codes.mp4`, poster: '/academy/posters/create-table-qr-codes.jpg', seconds: 38.8 },
    steps: [
      {
        title: 'Settings > QR Ordering',
        detail: 'Turn on Enable QR Ordering so guests can scan a code at the table.',
        at: 2.6,
      },
      {
        title: 'Choose what guests can do',
        detail: 'Order & Pay, Pay Only, or Both Modes. Tap Save Settings after a change.',
        at: 6.8,
      },
      {
        title: 'Open Table Management > QR Codes',
        detail: 'Every table has its own QR code here.',
        at: 11,
      },
      {
        title: 'Codes follow your QR Ordering mode',
        detail: 'Tap Generate All to make codes for every table at once.',
        at: 15.2,
      },
      {
        title: 'Tap Generate QR on a table',
        detail: 'Tables without a code show this button. Each code links to one table.',
        at: 19.4,
      },
      {
        title: 'Tap View QR to see the code',
        detail: 'Here: Table 61. Orders from its code go to Table 61 on the POS.',
        at: 23.6,
      },
      {
        title: 'Tap Download PNG to save it',
        detail: 'Print it and stand it on the table. Print sends it straight to a printer.',
        at: 27.8,
      },
    ],
    goodToKnow: [
      {
        title: 'All tables at once',
        detail: 'Generate All makes a code for every table. Export PDF and Export ZIP save them together for printing.',
      },
      {
        title: 'See whether a code is used',
        detail: 'Each code shows how many times it was scanned and printed.',
      },
    ],
    troubleshooting: [
      {
        title: 'A table has no View QR button',
        detail: 'Its code has not been made yet. Tap Generate QR on that table first.',
      },
    ],
    related: ['add-tables-and-floors', 'arrange-the-floor-plan', 'dine-in-order'],
    order: 5,
    updated: '2026-11-24',
  },
]
