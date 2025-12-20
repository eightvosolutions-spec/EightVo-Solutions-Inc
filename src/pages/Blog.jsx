import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Blog(){
  useDocumentTitle('Blog')
  return (
    <div className="page blog">
      <div className="container section">
        <h1>Blog</h1>
        <p className="muted">Insights and updates.</p>
      </div>
    </div>
  )
}
