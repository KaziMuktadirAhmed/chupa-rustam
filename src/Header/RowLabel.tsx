'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  let label = 'Row'

  if (data?.data?.label) {
    label = `${data.data.label} (${data.data.type === 'dropdown' ? 'Dropdown' : 'Link'})`
  }

  return <div>{label}</div>
}
