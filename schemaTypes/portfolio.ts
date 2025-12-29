import { defineType, defineField } from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'view',
      title: 'Project URL',
      type: 'url'
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number'
    })
  ],
  orderings: [
    {
      title: 'Order Asc',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
})
