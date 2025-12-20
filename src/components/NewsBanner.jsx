import React from 'react'

export default function NewsBanner({title, subtitle, image}){
  return (
    <section className="news-banner" aria-label={title} style={{backgroundImage:`url(${image})`}}>
      <div className="banner-inner">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}
