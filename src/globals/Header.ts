import { GlobalConfig } from "payload/types"
import link from '../fields/link'

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      type: 'array',
      name: 'nav',
      label: 'Navigation',
      fields: [
        link
      ]
    },
    {
      name: 'logoSource',
      type: 'text',
      label: 'Logo Source'
    },
    {
      name: 'logoLink',
      type: 'text',
      label: 'Logo Link'
    },
    {
      name: 'bkgColor',
      type: 'radio',
      defaultValue: 'blue',
      options: [
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Blue',
          value: 'blue',
        }
      ]
    },
    {
      name: 'buttonColor',
      type: 'radio',
      defaultValue: 'white',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Black',
          value: 'black',
        }
      ]
    }
  ]
}

export default Header