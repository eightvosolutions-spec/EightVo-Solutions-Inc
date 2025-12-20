const { processContact } = require('../server/contactHandler')

function parseJson(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      if (!data) return resolve({})
      try {
        resolve(JSON.parse(data))
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body = req.body
  if (!body || typeof body !== 'object') {
    try {
      body = await parseJson(req)
    } catch (err) {
      return res.status(400).json({ error: 'Invalid JSON body' })
    }
  }

  const result = await processContact(body)
  return res.status(result.status).json(result.body)
}
