import React, {useState} from 'react'

const FALLBACK_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><rect fill='%23f3f4f6' width='100%25' height='100%25'/><text x='50%25' y='50%25' dy='.35em' text-anchor='middle' fill='%238b95a3' font-family='Arial, Helvetica, sans-serif' font-size='24'>Image%20unavailable</text></svg>"

export default function CaseStudyCard({title, excerpt, image, metric, href}){
  const [src, setSrc] = useState(image || '')

  function handleError(){
    setSrc(FALLBACK_SVG)
  }

  return (
    <article className="case-card card">
      {src ? (
        <div className="case-card-media">
          <img loading="lazy" src={src} alt={title} onError={handleError} />
        </div>
      ) : null}
      <div className="case-card-body">
        <h4 className="case-card-title">{title}</h4>
        <p className="muted">{excerpt}</p>
        {metric && <div className="case-metric">{metric}</div>}
        {href && <a className="linkless" href={href} style={{marginTop:8,display:'inline-block'}}>Read case study →</a>}
      </div>
    </article>
  )
}
