import { buildConfig } from 'payload/config'
import path from 'path'
import Package from './collections/Package'
import Media from './collections/Media'
import Banner from './collections/Banner'
import Page from './collections/Page'
import Header from './globals/Header'

export default buildConfig({ 
  debug: true,
  collections: [
    Page,
    Package,
    Media,
    Banner
  ],
  globals: [
    Header
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  }
})