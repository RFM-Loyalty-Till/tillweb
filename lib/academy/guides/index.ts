import type { AcademyGuide } from '../types'
import { gettingStartedGuides } from './getting-started'
import { ordersGuides } from './orders'
import { paymentsGuides } from './payments'
import { tablesGuides } from './tables'
import { orderManagementGuides } from './order-management'
import { backOfficeGuides } from './back-office'

/** All guides, ordered by topic (as in topics.ts) and then by `order`. */
export const guides: AcademyGuide[] = [
  ...gettingStartedGuides,
  ...ordersGuides,
  ...paymentsGuides,
  ...tablesGuides,
  ...orderManagementGuides,
  ...backOfficeGuides,
]
