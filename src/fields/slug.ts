import type { Field } from 'payload/types'

// Export as a function that returns an array of fields
export const slugField = (): Field[] => {
  return [
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
            }
            return value
          },
        ],
      },
      unique: true,
      required: true,
    }
  ]
}
