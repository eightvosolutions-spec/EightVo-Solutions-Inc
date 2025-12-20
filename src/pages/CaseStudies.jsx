import React from 'react'
import useDocumentTitle from '../utils/useDocumentTitle'

const mock = [
  {id:1,title:'Retail transformation',summary:'Modernized e-commerce platform and headless storefront.'},
  {id:2,title:'Data platform overhaul',summary:'Built a central analytics platform for finance.'}
]

export default function CaseStudies(){
  useDocumentTitle('Case Studies')
  return (
    <div className="page case-studies">
      <div className="container section">
        <h1>Case studies</h1>
        <div style={{display:'grid',gap:12,marginTop:12}}>
          {mock.map(c=> (
            <article key={c.id} className="card">
              <h3>{c.title}</h3>
              <p className="muted">{c.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
