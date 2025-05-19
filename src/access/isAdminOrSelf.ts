import type { Access } from 'payload/types'
import { checkRole } from '../utilities/checkRole'

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Return true or false based on if the user has access
  if (user) {
    if (checkRole(['admin'], user)) {
      return true
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      },
    }
  }

  // Reject everyone else
  return false
}
