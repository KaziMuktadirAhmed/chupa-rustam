import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'logo-text',
          type: 'text',
          required: true,
        }
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'type',
          type: 'radio',
          options: [
            {
              label: 'Single Link',
              value: 'link',
            },
            {
              label: 'Dropdown',
              value: 'dropdown',
            },
          ],
          defaultValue: 'link',
          admin: {
            layout: 'horizontal',
          },
        },
        {
          name: 'link',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'link',
          },
          fields: [
            link({
              appearances: false,
            }),
          ],
        },
        {
          name: 'dropdownItems',
          label: 'Dropdown Items',
          type: 'array',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'dropdown',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            link({
              appearances: false,
            }),
            {
              name: 'highlightPosts',
              type: 'relationship',
              relationTo: 'posts',
              hasMany: true,
              admin: {
                description: 'Optional: Link to specific posts to highlight in this dropdown item',
              },
            },
          ],
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
