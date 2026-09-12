const { processApplication } = require('../../server/careersApplyHandler')
const { parseMultipart } = require('../../server/multipart')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let fields, file
  try {
    ({ fields, file } = await parseMultipart(req))
  } catch (err) {
    return res.status(400).json({ error: (err && err.message) || 'Invalid form data' })
  }

  const result = await processApplication(fields, file)
  return res.status(result.status).json(result.body)
}
