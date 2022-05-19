import { Field } from "payload/types"

const link: Field = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        {
          label: 'Page',
          value: 'page'
        },
        {
          label: 'custom URL',
          value: 'custom'
        }
      ]
    },
    {
      type: 'text',
      name: 'label',
      label: 'Label',
    },
    {
      name: 'page',
      label: 'GoesToPage',
      type: 'relationship',
      relationTo: 'pages',// a slug from a collection: Page collection -> slug: 'pages'
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'page'
      }
    },
    {
      name: 'url',
      label: 'GoesToURL',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom'
      }
    }
  ]
}
export default link
  