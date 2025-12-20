require('dotenv').config()
const express = require('express')
const contact = require('./contact')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/api', contact)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
