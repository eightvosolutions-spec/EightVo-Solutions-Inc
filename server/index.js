require('dotenv').config()
const express = require('express')
const contact = require('./contact')
const careersApply = require('./careersApply')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/api', contact)
app.use('/api', careersApply)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
