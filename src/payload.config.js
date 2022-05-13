import { buildConfig } from 'payload/config'
import path from 'path'

export default buildConfig({ 
  debug: true,
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  }
});