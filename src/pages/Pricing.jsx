import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Pricing(){
  useDocumentTitle('Pricing')
  return (
    <div className="page pricing">
      <div className="container section">
        <h1>Pricing</h1>
        <p className="muted">Simple predictable pricing for teams and enterprises.</p>
      </div>
    </div>
  )
}
