import express from 'express'
import payload from 'payload'

import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + '/.env' })

const app = express()
const { PAYLOAD_LICENSE,PAYLOAD_SECRET,CMS_PORT,CMS_DB_USER,CMS_DB_URI } = process.env
console.log(CMS_PORT)


app.get('/', (_,res) => {
    res.redirect('/admin')
})
app.get('/foo', (_,res) => {
    res.send('This is my Foo Express-Route')
})

payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: CMS_DB_URI,
    license: PAYLOAD_LICENSE,
    express: app,
    onInit: () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    }
})

app.listen(CMS_PORT, ()=>{ console.log('CMS Server on ', process.env.CMS_PORT) })