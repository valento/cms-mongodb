import { buildConfig } from 'payload/config'
import path from 'path'
import Package from './collections/Package'
import Media from './collections/Media'
import Banner from './collections/Banner'

export default buildConfig({ 
  debug: true,
  collections: [
    Package,
    Media,
    Banner
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  }
})