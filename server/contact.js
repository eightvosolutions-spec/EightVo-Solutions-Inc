const express = require('express')
const { processContact } = require('./contactHandler')

const router = express.Router()

router.post('/contact', async (req, res) => {
  const result = await processContact(req.body)
  return res.status(result.status).json(result.body)
})

module.exports = router
