import type { AcademyGuide } from '../types'

const VIDEO_BASE = 'https://qrhdoknzgtrzfqbvrmpl.supabase.co/storage/v1/object/public/till-academy/videos'

export const menuGuides: AcademyGuide[] = [
  {
    slug: 'add-a-menu-item',
    title: 'Add a menu item',
    summary: 'Create a new item in the Catalog with its category, tax code and price so it shows on the POS.',
    intro: [
      'A new dish, a new drink, a seasonal special: anything you sell regularly should be a menu item, not a custom item. Menu items sit in their category on the POS and are counted by name in your sales reports.',
      'Three choices matter most. The category decides where staff find the item on the POS. The tax code decides the VAT charged on every sale. The selling price is what the guest pays.',
      'Check the tax code with your accountant if you are not sure. A wrong tax code means every sale of that item is taxed wrong until someone notices.',
    ],
    topic: 'menu',
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
    related: ['edit-item-price', 'add-item-options', 'add-item-photo'],
    order: 1,
    updated: '2026-11-24',
  },
  {
    slug: 'edit-item-price',
    title: 'Change an item price',
    summary: 'Update the selling price of a menu item in the Catalog and check that the POS shows the new price.',
    intro: [
      'Prices change: supplier costs go up, a special ends, a mistake needs fixing. You change the price once in the Catalog and the POS uses it for new orders.',
      'Find the item, tap Edit, change the Selling Price and tap Update Item. The same form holds everything else about the item, so you can fix a name or add a description at the same time.',
      'Check the result on the POS before service. It takes a few seconds and saves an argument at the counter.',
    ],
    topic: 'menu',
    roles: ['manager', 'owner'],
    level: 'everyday',
    tags: ['catalog', 'menu', 'items', 'price'],
    video: { src: `${VIDEO_BASE}/edit-item-price.mp4`, poster: '/academy/posters/edit-item-price.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Search for the item',
        detail: 'On the Catalog page, type the item name. Here: Iced Latte.',
        at: 2.6,
      },
      {
        title: 'Tap Edit on the item',
        detail: 'Edit is in the Actions column on the right of the row.',
        at: 6.8,
      },
      {
        title: 'Change the selling price',
        detail: 'Clear the old price and type the new one. Here: 6.00 becomes 7.00.',
        at: 11,
      },
      {
        title: 'Update any other detail',
        detail: 'For example add a short description for staff and guests.',
        at: 15.2,
      },
      {
        title: 'Tap Update Item to save',
        detail: 'The button is at the bottom right of the form.',
        at: 19.4,
      },
      {
        title: 'The new price is in the Catalog',
        detail: 'Iced Latte now shows AED 7.00 in the Price column.',
        at: 23.6,
      },
      {
        title: 'Open the POS',
        detail: 'Tap POS in the left menu to go to the register.',
        at: 27.8,
      },
      {
        title: 'Open the item’s category',
        detail: 'Iced Latte is in Espresso Bar.',
        at: 32,
      },
      {
        title: 'The POS shows the new price',
        detail: 'Every till uses the new price for new orders straight away.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'Printed menus and QR menus',
        detail: 'The POS and your QR menu read the price from the Catalog. A printed menu does not, so update it too.',
      },
      {
        title: 'A one-off price',
        detail: 'For a single order, use a discount instead of changing the item price for everyone.',
      },
    ],
    related: ['add-a-menu-item', 'add-item-sizes', 'apply-a-discount'],
    order: 2,
    updated: '2026-11-24',
  },
  {
    slug: 'create-a-category',
    title: 'Create a category',
    summary: 'Add a new category in the Catalog, such as Brunch, so its items get their own tab on the POS.',
    intro: [
      'Categories are the tabs staff tap on the POS to find items: Breakfast, Espresso Bar, Main Course. A clear set of categories is what makes ordering fast.',
      'A category only needs a name. Sort Order decides where its tab sits (lower numbers come first). Parent Category turns it into a sub-category of another one. Department groups categories in the Department report and can be left empty.',
      'A new category starts empty. Put items in it from each item’s edit form, by choosing the category there.',
    ],
    topic: 'menu',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['catalog', 'menu', 'category', 'pos-layout'],
    video: { src: `${VIDEO_BASE}/create-a-category.mp4`, poster: '/academy/posters/create-a-category.jpg', seconds: 47.2 },
    steps: [
      {
        title: 'Open the Categories tab',
        detail: 'In Catalog, tap Categories in the tab bar.',
        at: 2.6,
      },
      {
        title: 'Tap Add Category',
        detail: 'The button is at the top right of the list.',
        at: 6.8,
      },
      {
        title: 'Type the category name',
        detail: 'This is the tab name staff see on the POS. Here: Brunch (Academy).',
        at: 11,
      },
      {
        title: 'Department is optional',
        detail: 'It groups categories in the Department Report. Leave it blank if unsure.',
        at: 15.2,
      },
      {
        title: 'Keep it a main category',
        detail: 'Leave Parent Category on None. Pick a parent to make a sub-tab.',
        at: 19.4,
      },
      {
        title: 'Set the sort order',
        detail: 'Lower numbers show first on the POS. Here: 15.',
        at: 23.6,
      },
      {
        title: 'Tap Create to save',
        detail: 'The new category is added straight away.',
        at: 27.8,
      },
      {
        title: 'Find it in the list',
        detail: 'Type the name in the search box.',
        at: 32,
      },
      {
        title: 'Your category is in the list',
        detail: 'Now add items to it from each item’s edit form.',
        at: 36.2,
      },
    ],
    goodToKnow: [
      {
        title: 'It shows on the POS at once',
        detail: 'A new category appears as a tab on the POS straight away, even before it has items. Create it when you are ready to fill it.',
      },
      {
        title: 'Banner and icon images',
        detail: 'A category can have a banner and an icon. They can be added after the category is saved, from Edit.',
      },
    ],
    related: ['add-a-menu-item', 'edit-item-price', 'search-and-favorites'],
    order: 3,
    updated: '2026-11-24',
  },
  {
    slug: 'add-item-options',
    title: 'Add options to an item',
    summary: 'Attach a modifier group, such as a choice of milk, so staff are asked for the option every time the item is ordered.',
    intro: [
      'Options are the choices that go with an item: the milk in a latte, the sauce with a burger, extra cheese. In Till these are modifier groups. A group has a name, its options, and an extra price for each one.',
      'There are two parts. First create the group on the Modifiers tab of the Catalog, with how many options a guest may pick. Then open the item, go to Customization and tick the group.',
      'From then on, tapping the item on the POS opens the choices before it goes in the cart, and the extra price is added for you.',
    ],
    topic: 'menu',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['catalog', 'menu', 'modifiers', 'options', 'add-ons'],
    video: { src: `${VIDEO_BASE}/add-item-options.mp4`, poster: '/academy/posters/add-item-options.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Open the Modifiers tab',
        detail: 'In Catalog, Modifiers holds your option groups.',
        at: 2.6,
      },
      {
        title: 'Create the group first',
        detail: 'Add Modifier Group: a name, then each option and its extra price.',
        at: 6.8,
      },
      {
        title: 'Go back to Items',
        detail: 'Now attach the group to the item.',
        at: 11,
      },
      {
        title: 'Find the item',
        detail: 'Type its name in the search box. Here: Iced Latte.',
        at: 15.2,
      },
      {
        title: 'Tap Edit on the item',
        detail: 'Edit is in the Actions column on the right.',
        at: 19.4,
      },
      {
        title: 'Open Customization',
        detail: 'It is the second section on the left of the form.',
        at: 23.6,
      },
      {
        title: 'Tick the modifier group',
        detail: 'Tick Milk (Academy). Tick more groups if the item needs them.',
        at: 27.8,
      },
      {
        title: 'Tap Update Item to save',
        detail: 'The options are now part of the item.',
        at: 32,
      },
      {
        title: 'Open the POS',
        detail: 'Tap POS in the left menu to check it on the register.',
        at: 36.2,
      },
      {
        title: 'Open the item’s category',
        detail: 'Iced Latte is in Espresso Bar.',
        at: 40.4,
      },
      {
        title: 'Tap the item',
        detail: 'The milk choices now pop up before it goes in the cart.',
        at: 44.6,
      },
      {
        title: 'Staff pick the option',
        detail: 'Tap Oat Milk. The extra AED 2.00 is added to the price.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'One group, many items',
        detail: 'A modifier group can be ticked on as many items as you like. Change the group once and every item that uses it follows.',
      },
      {
        title: 'Ticking saves straight away',
        detail: 'The group is attached to the item the moment you tick it, even before you tap Update Item.',
      },
    ],
    related: ['modifiers-and-notes', 'add-item-sizes', 'add-a-menu-item'],
    order: 4,
    updated: '2026-11-24',
  },
  {
    slug: 'add-item-sizes',
    title: 'Add sizes to an item',
    summary: 'Give one item several sizes, such as Small and Large, each with its own price on top of the base price.',
    intro: [
      'Sizes save you from making two menu items for the same drink. One item, Iced Latte, can be sold as Small or Large, and the POS asks which one each time.',
      'Sizes are variations. A variation type, such as Size, is created once under Catalog > Variations with its options. On the item you choose the type and set a price for each option.',
      'The price you type is added to the item’s base price. With a base price of AED 7.00, Small at 0 stays AED 7.00 and Large at 2 becomes AED 9.00.',
    ],
    topic: 'menu',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['catalog', 'menu', 'variations', 'sizes', 'price'],
    video: { src: `${VIDEO_BASE}/add-item-sizes.mp4`, poster: '/academy/posters/add-item-sizes.jpg', seconds: 59.8 },
    steps: [
      {
        title: 'Find the item',
        detail: 'In Catalog, type its name in the search box. Here: Iced Latte.',
        at: 2.6,
      },
      {
        title: 'Tap Edit on the item',
        detail: 'Edit is in the Actions column on the right.',
        at: 6.8,
      },
      {
        title: 'Open Customization',
        detail: 'Sizes are added under Add Variation.',
        at: 11,
      },
      {
        title: 'Choose the variation type',
        detail: 'Pick your size list. Here: Size (Academy) with Small and Large.',
        at: 15.2,
      },
      {
        title: 'Set the price for each size',
        detail: 'It is added to the base price. Small: 0 keeps it at AED 7.00.',
        at: 19.4,
      },
      {
        title: 'Large costs more',
        detail: 'Large: 2 makes it AED 9.00.',
        at: 23.6,
      },
      {
        title: 'Tap Add Variation',
        detail: 'The sizes are added to the item form.',
        at: 27.8,
      },
      {
        title: 'Tap Update Item to save',
        detail: 'The button is at the bottom right of the form.',
        at: 32,
      },
      {
        title: 'Open the POS',
        detail: 'Tap POS in the left menu to check it on the register.',
        at: 36.2,
      },
      {
        title: 'Open the item’s category',
        detail: 'Iced Latte is in Espresso Bar.',
        at: 40.4,
      },
      {
        title: 'Tap the item',
        detail: 'The size choice pops up before it goes in the cart.',
        at: 44.6,
      },
      {
        title: 'Staff pick the size',
        detail: 'Tap Large. The price goes up by AED 2.00.',
        at: 48.8,
      },
    ],
    goodToKnow: [
      {
        title: 'Names come from the variation type',
        detail: 'On the item you can only change the prices. To rename an option, edit the variation type under Catalog > Variations.',
      },
      {
        title: 'Need only some of the options?',
        detail: 'A variation type brings all of its options to the item. If an item needs a shorter list, create a separate variation type with just those options.',
      },
    ],
    related: ['add-item-options', 'edit-item-price', 'modifiers-and-notes'],
    order: 5,
    updated: '2026-11-24',
  },
  {
    slug: 'add-item-photo',
    title: 'Add an item photo',
    summary: 'Upload a photo to a menu item from its edit form, so staff can spot it faster on the POS.',
    intro: [
      'A photo helps new staff find items by sight, and makes the item look right wherever your menu is shown with pictures.',
      'Open the item’s edit form and scroll to Item Image. Tap Browse Files, choose the photo and tap Upload Image, then Update Item. Till resizes the photo for the different screens it appears on.',
      'Use JPG, PNG or WebP files up to 5 MB. Square photos of about 1200 by 1200 pixels look best.',
    ],
    topic: 'menu',
    roles: ['manager', 'owner'],
    level: 'everyday',
    tags: ['catalog', 'menu', 'items', 'photo', 'images'],
    video: { src: `${VIDEO_BASE}/add-item-photo.mp4`, poster: '/academy/posters/add-item-photo.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Find the item',
        detail: 'In Catalog, type its name in the search box. Here: Iced Latte.',
        at: 2.6,
      },
      {
        title: 'Tap Edit on the item',
        detail: 'Edit is in the Actions column on the right.',
        at: 6.8,
      },
      {
        title: 'Scroll to Item Image',
        detail: 'It is on the right of the General page. Square photos look best.',
        at: 11,
      },
      {
        title: 'Tap Browse Files',
        detail: 'Pick the photo. JPG, PNG or WebP, up to 5MB.',
        at: 15.2,
      },
      {
        title: 'Tap Upload Image',
        detail: 'The photo is sized for the POS and menus automatically.',
        at: 19.4,
      },
      {
        title: 'Tap Update Item to save',
        detail: 'The button is at the bottom right of the form.',
        at: 23.6,
      },
      {
        title: 'The photo shows in the Catalog',
        detail: 'You can see it in the Image column.',
        at: 27.8,
      },
      {
        title: 'Open the POS',
        detail: 'Tap POS in the left menu to see it on the register.',
        at: 32,
      },
      {
        title: 'Open the item’s category',
        detail: 'Iced Latte is in Espresso Bar.',
        at: 36.2,
      },
      {
        title: 'The item card has its photo',
        detail: 'Staff find it faster on the register.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Replace or remove it',
        detail: 'Open the edit form again and use Replace Image or Delete under the photo.',
      },
      {
        title: 'Photos on the POS',
        detail: 'Item photos show on the POS when images are switched on in the POS Display settings.',
      },
    ],
    related: ['add-a-menu-item', 'edit-item-price', 'search-and-favorites'],
    order: 6,
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
    topic: 'menu',
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
    related: ['add-a-menu-item', 'count-and-adjust-stock', 'use-the-kitchen-display'],
    order: 7,
    updated: '2026-11-24',
  },
  {
    slug: 'create-a-discount-code',
    title: 'Create a discount',
    summary: 'Set up a ready-made discount, such as 10% off the bill, that cashiers can apply from the POS.',
    intro: [
      'A ready-made discount gives staff one clear choice at the counter instead of typing a percentage each time. It also gives the discount a name, so you can see how often it was used.',
      'A rule needs a name, a scope and a value. Order Level takes money off the whole bill and Item Level takes it off chosen items. The value is a percentage or a fixed amount in AED. A short code is optional and helps staff find the rule.',
      'Two switches decide how it behaves. Active makes the rule usable. Auto Apply adds it to orders by itself, so leave it off when staff should choose.',
    ],
    topic: 'menu',
    roles: ['manager', 'owner'],
    level: 'advanced',
    tags: ['discount', 'promotion', 'discount-rules', 'item-discount'],
    video: { src: `${VIDEO_BASE}/create-a-discount-code.mp4`, poster: '/academy/posters/create-a-discount-code.jpg', seconds: 51.4 },
    steps: [
      {
        title: 'Open Discounts, tap Create New Rule',
        detail: 'Discounts is in the back office menu on the left.',
        at: 2.6,
      },
      {
        title: 'Type a name for the discount',
        detail: 'Staff see this name on the POS.',
        at: 6.8,
      },
      {
        title: 'Add a discount code',
        detail: 'A short code staff can type to find it. Here: LUNCH10.',
        at: 11,
      },
      {
        title: 'Choose Order Level',
        detail: 'Order Level takes money off the whole bill.',
        at: 15.2,
      },
      {
        title: 'Choose Percentage',
        detail: 'Or Fixed Amount to take off a set number of AED.',
        at: 19.4,
      },
      {
        title: 'Type the percentage',
        detail: 'Here: 10 for 10 percent off.',
        at: 23.6,
      },
      {
        title: 'Keep Active on, Auto Apply off',
        detail: 'Active makes it usable now. Auto Apply off means staff choose it.',
        at: 27.8,
      },
      {
        title: 'Tap Create Rule to save',
        detail: 'It shows in the Discount Rules list.',
        at: 32,
      },
      {
        title: 'On the POS, tap Discount',
        detail: 'It is under the cart, next to Bill and Customer.',
        at: 36.2,
      },
      {
        title: 'Your discount is in the list',
        detail: 'Tap Apply next to Lunch 10 to take 10% off the bill.',
        at: 40.4,
      },
    ],
    goodToKnow: [
      {
        title: 'Limits and conditions',
        detail: 'A rule can have a usage limit, and the Advanced Conditions tab holds further conditions for when it applies.',
      },
      {
        title: 'End a promotion without deleting it',
        detail: 'Switch Active off. The rule stays in the list and can be switched on again next time.',
      },
    ],
    related: ['apply-a-discount', 'discount-one-item', 'view-sales-report'],
    order: 8,
    updated: '2026-11-24',
  },
]
