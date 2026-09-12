const express = require('express')
const { processApplication } = require('./careersApplyHandler')
const { parseMultipart } = require('./multipart')

const router = express.Router()

router.post('/careers/apply', async (req, res) => {
  let fields, file
  try {
    ({ fields, file } = await parseMultipart(req))
  } catch (err) {
    return res.status(400).json({ error: (err && err.message) || 'Invalid form data' })
  }
  const result = await processApplication(fields, file)
  return res.status(result.status).json(result.body)
})

module.exports = router
