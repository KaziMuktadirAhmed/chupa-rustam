import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'popularServices',
      type: 'array',
      label: 'Popular Services',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
    {
      name: 'technologyStacks',
      type: 'array',
      label: 'Technology Stacks',
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
        },
        {
          name: 'technologies',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'GitHub', value: 'github' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
          ],
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'subscriptionEnabled',
      type: 'checkbox',
      label: 'Enable Email Subscription',
      defaultValue: true,
    },
    {
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
