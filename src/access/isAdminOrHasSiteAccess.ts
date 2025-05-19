import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'
import { isAdmin } from './isAdmin'

export const isAdminOrHasSiteAccess = (args: AccessArgs<any, User>): boolean => {
  const isUserAdmin = isAdmin(args)
  const { req: { user } } = args
  
  if (isUserAdmin) return true
  
  return Boolean(user?.roles?.includes('editor') || user?.siteAccess)
}
