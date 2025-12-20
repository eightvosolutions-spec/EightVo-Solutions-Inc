import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function CookiePolicy() {
  useDocumentTitle('Cookie Policy')

  return (
    <div className="page cookie-policy container section">
      <h1>Cookie Policy</h1>
      <p className="muted">This site uses cookies to improve your experience.</p>

      <h2>Manage your preferences</h2>
      <p>
        You can update your cookie preferences at any time via the "Cookie Settings" control in the footer.
      </p>
    </div>
  )
}
