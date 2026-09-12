const Busboy = require('busboy')

const MAX_FILE_BYTES = 4 * 1024 * 1024 // 4MB — stays comfortably under Vercel's default request body limit
const ALLOWED_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
])

// Parses a multipart/form-data request (resume upload + text fields) from a
// raw Node request stream. Used by both the Vercel function and the local
// Express router so the parsing logic lives in one place.
function parseMultipart(req) {
  return new Promise((resolve, reject) => {
    let busboy
    try {
      busboy = Busboy({ headers: req.headers, limits: { fileSize: MAX_FILE_BYTES, files: 1 } })
    } catch (err) {
      return reject(new Error('Invalid form data'))
    }

    const fields = {}
    let file = null
    let fileTooLarge = false
    let fileRejectedType = false

    busboy.on('field', (name, value) => {
      fields[name] = value
    })

    busboy.on('file', (name, stream, info) => {
      const { filename, mimeType } = info
      if (!ALLOWED_MIME.has(mimeType)) {
        fileRejectedType = true
        stream.resume()
        return
      }
      const chunks = []
      stream.on('data', (chunk) => chunks.push(chunk))
      stream.on('limit', () => { fileTooLarge = true })
      stream.on('end', () => {
        if (!fileTooLarge && !fileRejectedType && chunks.length) {
          file = { filename, mimeType, buffer: Buffer.concat(chunks) }
        }
      })
    })

    busboy.on('error', reject)

    busboy.on('finish', () => {
      if (fileTooLarge) {
        return reject(Object.assign(new Error('Resume file is too large (max 4MB)'), { code: 'FILE_TOO_LARGE' }))
      }
      if (fileRejectedType) {
        return reject(Object.assign(new Error('Resume must be a PDF or Word document'), { code: 'FILE_TYPE' }))
      }
      resolve({ fields, file })
    })

    req.pipe(busboy)
  })
}

module.exports = { parseMultipart, MAX_FILE_BYTES }
