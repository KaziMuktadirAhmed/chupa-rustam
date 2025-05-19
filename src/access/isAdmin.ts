import type { AccessArgs } from 'payload'

import type { User } from '@/payload-types'

export const isAdmin = ({ req: { user } }: AccessArgs<any, User>): boolean => {
  return Boolean(user?.roles?.includes('admin'))
}
