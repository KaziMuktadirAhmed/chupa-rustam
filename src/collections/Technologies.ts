import { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'
import { isAdminOrHasSiteAccess } from '../access/isAdminOrHasSiteAccess'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'updatedAt'],
    group: 'Content',
  },
  access: {
    read: () => true,
    create: isAdminOrHasSiteAccess,
    update: isAdminOrHasSiteAccess,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        {
          label: 'Frontend',
          value: 'frontend',
        },
        {
          label: 'Backend',
          value: 'backend',
        },
        {
          label: 'Mobile',
          value: 'mobile',
        },
        {
          label: 'Database',
          value: 'database',
        },
        {
          label: 'DevOps',
          value: 'devops',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}

export default Technologies
