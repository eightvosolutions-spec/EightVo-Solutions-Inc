import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

export default function Solutions(){
  useDocumentTitle('Solutions')
  return (
    <div className="page solutions">
      <div className="container section">
        <h1>Solutions</h1>
        <p className="muted">Product and delivery solutions tailored for enterprise and startups.</p>

        <div className="cards" style={{marginTop:20}}>
          <article className="card">
            <h3>Product Strategy</h3>
            <p className="muted">Roadmapping, discovery, and prioritized backlogs.</p>
          </article>
          <article className="card">
            <h3>Engineering Delivery</h3>
            <p className="muted">End-to-end engineering, CI/CD, and quality practices.</p>
          </article>
          <article className="card">
            <h3>Platform & Ops</h3>
            <p className="muted">Cloud, infra automation, and observability.</p>
          </article>
        </div>
      </div>
    </div>
  )
}
