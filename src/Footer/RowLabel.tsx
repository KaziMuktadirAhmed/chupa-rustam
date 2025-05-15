'use client'
import { Footer } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<any>()

  let label = 'Row'

  if (data?.data?.label) {
    label = data.data.label
  } else if (data?.data?.link?.label) {
    label = data.data.link.label
  }

  return <div>{label}</div>
}
