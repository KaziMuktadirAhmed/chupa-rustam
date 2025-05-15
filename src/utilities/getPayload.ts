import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cache } from 'react'

export const getPayloadClient = cache(async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  return payload
})
