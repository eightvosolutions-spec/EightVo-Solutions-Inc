import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Accessibility() {
  useDocumentTitle('Accessibility')

  return (
    <div className="page accessibility container section">
      <h1>Accessibility</h1>
      <p>We strive to make our website accessible to everyone. If you encounter any issues, please contact us.</p>

      <h2>Standards</h2>
      <ul>
        <li>Semantic HTML</li>
        <li>Keyboard navigable components</li>
        <li>ARIA attributes where appropriate</li>
      </ul>
    </div>
  )
}
