// if(process.env.NODE_ENV==='development'){
    require('dotenv').config()
    require('./config/mongoose')
// }

const express = require('express')
const app = express()
const PORT = 3000
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/',routes)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

module.exports = app