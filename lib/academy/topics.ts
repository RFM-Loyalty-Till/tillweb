import type { AcademyTopicInfo } from './types'

export const topics: AcademyTopicInfo[] = [
  {
    slug: 'getting-started',
    name: 'Open and close a shift',
    description: 'Start your shift before the first order and close it with a cash count at the end.',
  },
  {
    slug: 'orders',
    name: 'Take orders',
    description: 'Ring up takeaway, dine-in and delivery orders, with options, notes and items that are not on the menu.',
  },
  {
    slug: 'payments',
    name: 'Take payment',
    description: 'Take cash and card, add tips, split a bill and apply discounts before the guest pays.',
  },
  {
    slug: 'tables',
    name: 'Run your tables',
    description: 'Add rounds, print the bill, move guests and park orders while the room is busy.',
  },
  {
    slug: 'order-management',
    name: 'Find and fix orders',
    description: 'Look up past orders, void items the kitchen already has and refund paid orders.',
  },
  {
    slug: 'back-office',
    name: 'Menu, reports and floor plan',
    description: 'Add menu items, mark items sold out, check the day’s sales and set up the floor plan.',
  },
]
