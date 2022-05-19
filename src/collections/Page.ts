import { CollectionConfig } from "payload/types"
import { title } from "process"
//import { CallToAction, Type as CallToActionType } from '../blocks/Content'
import { Content, Type as ContentType } from '../blocks/Content'
import formatSlug from "../utilities/formatSlug"

export type Layout = ContentType// | CallToActionType

export type Type = {
  slug: string
  domain: string
  meta: {
    title: string
    description?: string
    keywords: string
  }
  layout: Layout[]
  title: string
}

const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      label: 'Page Slug',
      hooks: {
        beforeValidate: [
          formatSlug('title'),
        ]
      },
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'title',
      type: 'text',
      label: 'Page name',
      required: true
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Layout',
      minRows: 1,
      blocks: [
        Content,
        //CallToAction
      ]
    },
    {
      name: 'domain',
      type: 'select',
      label: 'Domain',
      options: [
        'topviewnyc.com',
        'libertycruise.nyc',
        'eventcruisesnyc.com',
        'bikerentalcentralpark.com',
        'attractionpass.com',
        'sightseeingbusnyc.com',
      ],
      admin: {
        position: 'sidebar'
      }
    },
    {
      name: 'meta',
      type: 'group',
      label: 'Page Meta Data',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'SEO-title',
        },
        {
          name: 'keyswords',
          type: 'text',
          label: 'SEO-keywords',
        }
      ]
    }
  ]
}

export default Page